// node_modules/turtledash/dist/esm/index.js
function omit(o, props) {
  const x = /* @__PURE__ */ Object.create(null);
  for (const k in o) {
    if (!props.includes(k)) {
      x[k] = o[k];
    }
  }
  return x;
}
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function isMergeableObject(val) {
  const nonNullObject = val && typeof val === "object";
  return nonNullObject && Object.prototype.toString.call(val) !== "[object RegExp]" && Object.prototype.toString.call(val) !== "[object Date]";
}
function merge(obj, src) {
  const res = obj;
  for (const key in src) {
    const clone = isMergeableObject(src[key]) ? cloneDeep(src[key]) : void 0;
    let x;
    if (clone && has(obj, key) && isMergeableObject(x = res[key])) {
      merge(x, clone);
      continue;
    }
    Object.defineProperty(res, key, {
      configurable: true,
      enumerable: true,
      value: clone || src[key],
      writable: true
    });
  }
  return res;
}
function delay(msec) {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
}
function randomBytes(length) {
  return crypto.getRandomValues(new Uint8Array(length));
}
function randomHexString(length) {
  return Array.from(randomBytes(length), (byte) => (byte % 16).toString(16)).join("");
}
function normalizeString(str) {
  return str.replace(/[\p{Pf}\p{Pi}]/gu, "'").normalize("NFC");
}
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function linearScale([d1, d2], [r1, r2]) {
  const [dSpan, rSpan] = [d2 - d1, r2 - r1];
  return function(value) {
    if (value <= d1) {
      return r1;
    } else if (value >= d2) {
      return r2;
    } else {
      const percent = (value - d1) / dSpan;
      return r1 + rSpan * percent;
    }
  };
}
function uniq(array) {
  return Array.from(new Set(array));
}
function union(...arrays) {
  return uniq(Array.prototype.concat.apply([], arrays));
}
function difference(a1, ...arrays) {
  const a2 = Array.prototype.concat.apply([], arrays);
  return a1.filter((v) => a2.indexOf(v) === -1);
}
function deepEqualJSONType(a, b) {
  if (a === b)
    return true;
  if (a == null || b == null || typeof a !== typeof b)
    return false;
  if (typeof a !== "object")
    return a === b;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
  } else if (![Object.prototype, null].includes(Object.getPrototypeOf(a))) {
    throw new Error(`not JSON type: ${a}`);
  }
  for (const key in a) {
    if (!deepEqualJSONType(a[key], b[key]))
      return false;
  }
  return true;
}
function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;
  if (wait == null)
    wait = 100;
  function later() {
    const last = performance.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = void 0;
      if (!immediate) {
        result = func.apply(context, args);
        args = void 0;
        context = void 0;
      }
    }
  }
  const debounced = function(...args_) {
    args = args_;
    context = this;
    timestamp = performance.now();
    const callNow = immediate && !timeout;
    if (!timeout)
      timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      args = void 0;
      context = void 0;
    }
    return result;
  };
  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
  };
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      args = void 0;
      context = void 0;
      clearTimeout(timeout);
      timeout = void 0;
    }
  };
  return debounced;
}
function throttle(func, delay2) {
  let prev = 0;
  return (...args) => {
    const now = (/* @__PURE__ */ new Date()).getTime();
    if (now - prev > delay2) {
      prev = now;
      return func(...args);
    }
  };
}
function get(obj, path, defaultValue) {
  if (!path.length) {
    return obj;
  } else if (obj == null) {
    return defaultValue;
  }
  let result = obj;
  let i = 0;
  while (result && i < path.length) {
    result = result[path[i]];
    i++;
  }
  return result === void 0 ? defaultValue : result;
}
var has = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

export {
  omit,
  cloneDeep,
  merge,
  delay,
  randomHexString,
  normalizeString,
  randomIntFromRange,
  randomFromArray,
  linearScale,
  uniq,
  union,
  difference,
  deepEqualJSONType,
  debounce,
  throttle,
  get,
  has
};
//# sourceMappingURL=chunk-MTWMQLQH-cached.js.map
