// node_modules/@chelonia/serdes/dist/esm/index.js
var serdesTagSymbol = Symbol("tag");
var serdesSerializeSymbol = Symbol("serialize");
var serdesDeserializeSymbol = Symbol("deserialize");
var rawResult = (rawResultSet, obj) => {
  rawResultSet.add(obj);
  return obj;
};
var serializer = (data) => {
  const rawResultSet = /* @__PURE__ */ new WeakSet();
  const verbatim = [];
  const transferables = /* @__PURE__ */ new Set();
  const revokables = /* @__PURE__ */ new Set();
  const result = JSON.parse(JSON.stringify(data, (_key, value) => {
    if (value && typeof value === "object" && rawResultSet.has(value))
      return value;
    if (value === void 0)
      return rawResult(rawResultSet, ["_", "_"]);
    if (!value)
      return value;
    if (Array.isArray(value) && value[0] === "_")
      return rawResult(rawResultSet, ["_", "_", ...value]);
    if (value instanceof Map) {
      return rawResult(rawResultSet, ["_", "Map", Array.from(value.entries())]);
    }
    if (value instanceof Set) {
      return rawResult(rawResultSet, ["_", "Set", Array.from(value.values())]);
    }
    if (value instanceof Blob || value instanceof File) {
      const pos = verbatim.length;
      verbatim[verbatim.length] = value;
      return rawResult(rawResultSet, ["_", "_ref", pos]);
    }
    if (value instanceof Error) {
      const pos = verbatim.length;
      verbatim[verbatim.length] = value;
      if (value.cause) {
        value.cause = serializer(value.cause).data;
      }
      return rawResult(rawResultSet, ["_", "_err", rawResult(rawResultSet, ["_", "_ref", pos]), value.name]);
    }
    if (value instanceof MessagePort || value instanceof ReadableStream || value instanceof WritableStream || value instanceof ArrayBuffer) {
      const pos = verbatim.length;
      verbatim[verbatim.length] = value;
      transferables.add(value);
      return rawResult(rawResultSet, ["_", "_ref", pos]);
    }
    if (ArrayBuffer.isView(value)) {
      const pos = verbatim.length;
      verbatim[verbatim.length] = value;
      transferables.add(value.buffer);
      return rawResult(rawResultSet, ["_", "_ref", pos]);
    }
    if (typeof value === "function") {
      const mc = new MessageChannel();
      mc.port1.onmessage = async (ev) => {
        try {
          try {
            const result2 = await value(...deserializer(ev.data[1]));
            const { data: data2, transferables: transferables2 } = serializer(result2);
            ev.data[0].postMessage([true, data2], transferables2);
          } catch (e) {
            const { data: data2, transferables: transferables2 } = serializer(e);
            ev.data[0].postMessage([false, data2], transferables2);
          }
        } catch (e) {
          console.error("Async error on onmessage handler", e);
        }
      };
      transferables.add(mc.port2);
      revokables.add(mc.port1);
      return rawResult(rawResultSet, ["_", "_fn", mc.port2]);
    }
    const proto = Object.getPrototypeOf(value);
    if (proto?.constructor?.[serdesTagSymbol] && proto.constructor[serdesSerializeSymbol]) {
      return rawResult(rawResultSet, ["_", "_custom", proto.constructor[serdesTagSymbol], proto.constructor[serdesSerializeSymbol](value)]);
    }
    return value;
  }), (_key, value) => {
    if (Array.isArray(value) && value[0] === "_" && value[1] === "_ref") {
      return verbatim[value[2]];
    }
    return value;
  });
  return {
    data: result,
    transferables: Array.from(transferables),
    revokables: Array.from(revokables)
  };
};
var deserializerTable = /* @__PURE__ */ Object.create(null);
var deserializer = (data) => {
  const rawResultSet = /* @__PURE__ */ new WeakSet();
  const verbatim = [];
  return JSON.parse(JSON.stringify(data, (_key, value) => {
    if (value && typeof value === "object" && !rawResultSet.has(value) && !Array.isArray(value) && Object.getPrototypeOf(value) !== Object.prototype) {
      const pos = verbatim.length;
      verbatim[verbatim.length] = value;
      return rawResult(rawResultSet, ["_", "_ref", pos]);
    }
    return value;
  }), (_key, value) => {
    if (Array.isArray(value) && value[0] === "_") {
      switch (value[1]) {
        case "_":
          if (value.length >= 3) {
            return value.slice(2);
          } else {
            return;
          }
        // Map input (reconstruct Map)
        case "Map":
          return new Map(value[2]);
        // Set input (reconstruct Set)
        case "Set":
          return new Set(value[2]);
        // Custom object type (reconstruct if possible, otherwise throw an error)
        case "_custom":
          if (deserializerTable[value[2]]) {
            return deserializerTable[value[2]](value[3]);
          } else {
            throw new Error("Invalid or unknown tag: " + value[2]);
          }
        // These are literal values, return them
        case "_ref":
          return verbatim[value[2]];
        case "_err": {
          if (value[2].name !== value[3]) {
            value[2].name = value[3];
          }
          if (value[2].cause) {
            value[2].cause = deserializer(value[2].cause);
          }
          return value[2];
        }
        // These were functions converted to a MessagePort. Convert them on this
        // end back into functions using that port.
        case "_fn": {
          const mp = value[2];
          return (...args) => {
            return new Promise((resolve, reject) => {
              const mc = new MessageChannel();
              const { data: data2, transferables } = serializer(args);
              mc.port1.onmessage = (ev) => {
                if (ev.data[0]) {
                  resolve(deserializer(ev.data[1]));
                } else {
                  reject(deserializer(ev.data[1]));
                }
              };
              mp.postMessage([mc.port2, data2], [mc.port2, ...transferables]);
            });
          };
        }
      }
    }
    return value;
  });
};
deserializer.register = (ctor) => {
  if (typeof ctor === "function" && typeof ctor[serdesTagSymbol] === "string" && typeof ctor[serdesDeserializeSymbol] === "function") {
    deserializerTable[ctor[serdesTagSymbol]] = ctor[serdesDeserializeSymbol].bind(ctor);
  }
};

// node_modules/@chelonia/lib/dist/esm/Secret.mjs
var wm = /* @__PURE__ */ new WeakMap();
var Secret = class {
  static [serdesDeserializeSymbol](secret) {
    return new this(secret);
  }
  static [serdesSerializeSymbol](secret) {
    return wm.get(secret);
  }
  static get [serdesTagSymbol]() {
    return "__chelonia_Secret";
  }
  constructor(value) {
    wm.set(this, value);
  }
  valueOf() {
    return wm.get(this);
  }
};

export {
  serdesTagSymbol,
  serdesSerializeSymbol,
  serdesDeserializeSymbol,
  serializer,
  deserializer,
  Secret
};
//# sourceMappingURL=chunk-DRW7AMFK-cached.js.map
