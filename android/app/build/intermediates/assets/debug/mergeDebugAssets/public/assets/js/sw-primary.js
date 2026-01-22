var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/blakejs/util.js
var require_util = __commonJS({
  "node_modules/blakejs/util.js"(exports, module) {
    var ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
    function normalizeInput(input) {
      let ret;
      if (input instanceof Uint8Array) {
        ret = input;
      } else if (typeof input === "string") {
        const encoder = new TextEncoder();
        ret = encoder.encode(input);
      } else {
        throw new Error(ERROR_MSG_INPUT);
      }
      return ret;
    }
    function toHex(bytes) {
      return Array.prototype.map.call(bytes, function(n) {
        return (n < 16 ? "0" : "") + n.toString(16);
      }).join("");
    }
    function uint32ToHex(val) {
      return (4294967296 + val).toString(16).substring(1);
    }
    function debugPrint(label, arr, size) {
      let msg = "\n" + label + " = ";
      for (let i2 = 0; i2 < arr.length; i2 += 2) {
        if (size === 32) {
          msg += uint32ToHex(arr[i2]).toUpperCase();
          msg += " ";
          msg += uint32ToHex(arr[i2 + 1]).toUpperCase();
        } else if (size === 64) {
          msg += uint32ToHex(arr[i2 + 1]).toUpperCase();
          msg += uint32ToHex(arr[i2]).toUpperCase();
        } else throw new Error("Invalid size " + size);
        if (i2 % 6 === 4) {
          msg += "\n" + new Array(label.length + 4).join(" ");
        } else if (i2 < arr.length - 2) {
          msg += " ";
        }
      }
      console.log(msg);
    }
    function testSpeed(hashFn, N10, M2) {
      let startMs = (/* @__PURE__ */ new Date()).getTime();
      const input = new Uint8Array(N10);
      for (let i2 = 0; i2 < N10; i2++) {
        input[i2] = i2 % 256;
      }
      const genMs = (/* @__PURE__ */ new Date()).getTime();
      console.log("Generated random input in " + (genMs - startMs) + "ms");
      startMs = genMs;
      for (let i2 = 0; i2 < M2; i2++) {
        const hashHex = hashFn(input);
        const hashMs = (/* @__PURE__ */ new Date()).getTime();
        const ms = hashMs - startMs;
        startMs = hashMs;
        console.log("Hashed in " + ms + "ms: " + hashHex.substring(0, 20) + "...");
        console.log(
          Math.round(N10 / (1 << 20) / (ms / 1e3) * 100) / 100 + " MB PER SECOND"
        );
      }
    }
    module.exports = {
      normalizeInput,
      toHex,
      debugPrint,
      testSpeed
    };
  }
});

// node_modules/blakejs/blake2b.js
var require_blake2b = __commonJS({
  "node_modules/blakejs/blake2b.js"(exports, module) {
    var util = require_util();
    function ADD64AA(v3, a, b) {
      const o0 = v3[a] + v3[b];
      let o1 = v3[a + 1] + v3[b + 1];
      if (o0 >= 4294967296) {
        o1++;
      }
      v3[a] = o0;
      v3[a + 1] = o1;
    }
    function ADD64AC(v3, a, b0, b1) {
      let o0 = v3[a] + b0;
      if (b0 < 0) {
        o0 += 4294967296;
      }
      let o1 = v3[a + 1] + b1;
      if (o0 >= 4294967296) {
        o1++;
      }
      v3[a] = o0;
      v3[a + 1] = o1;
    }
    function B2B_GET32(arr, i2) {
      return arr[i2] ^ arr[i2 + 1] << 8 ^ arr[i2 + 2] << 16 ^ arr[i2 + 3] << 24;
    }
    function B2B_G(a, b, c, d, ix, iy) {
      const x0 = m3[ix];
      const x1 = m3[ix + 1];
      const y0 = m3[iy];
      const y1 = m3[iy + 1];
      ADD64AA(v2, a, b);
      ADD64AC(v2, a, x0, x1);
      let xor0 = v2[d] ^ v2[a];
      let xor1 = v2[d + 1] ^ v2[a + 1];
      v2[d] = xor1;
      v2[d + 1] = xor0;
      ADD64AA(v2, c, d);
      xor0 = v2[b] ^ v2[c];
      xor1 = v2[b + 1] ^ v2[c + 1];
      v2[b] = xor0 >>> 24 ^ xor1 << 8;
      v2[b + 1] = xor1 >>> 24 ^ xor0 << 8;
      ADD64AA(v2, a, b);
      ADD64AC(v2, a, y0, y1);
      xor0 = v2[d] ^ v2[a];
      xor1 = v2[d + 1] ^ v2[a + 1];
      v2[d] = xor0 >>> 16 ^ xor1 << 16;
      v2[d + 1] = xor1 >>> 16 ^ xor0 << 16;
      ADD64AA(v2, c, d);
      xor0 = v2[b] ^ v2[c];
      xor1 = v2[b + 1] ^ v2[c + 1];
      v2[b] = xor1 >>> 31 ^ xor0 << 1;
      v2[b + 1] = xor0 >>> 31 ^ xor1 << 1;
    }
    var BLAKE2B_IV32 = new Uint32Array([
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var SIGMA8 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3
    ];
    var SIGMA82 = new Uint8Array(
      SIGMA8.map(function(x2) {
        return x2 * 2;
      })
    );
    var v2 = new Uint32Array(32);
    var m3 = new Uint32Array(32);
    function blake2bCompress(ctx, last) {
      let i2 = 0;
      for (i2 = 0; i2 < 16; i2++) {
        v2[i2] = ctx.h[i2];
        v2[i2 + 16] = BLAKE2B_IV32[i2];
      }
      v2[24] = v2[24] ^ ctx.t;
      v2[25] = v2[25] ^ ctx.t / 4294967296;
      if (last) {
        v2[28] = ~v2[28];
        v2[29] = ~v2[29];
      }
      for (i2 = 0; i2 < 32; i2++) {
        m3[i2] = B2B_GET32(ctx.b, 4 * i2);
      }
      for (i2 = 0; i2 < 12; i2++) {
        B2B_G(0, 8, 16, 24, SIGMA82[i2 * 16 + 0], SIGMA82[i2 * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i2 * 16 + 2], SIGMA82[i2 * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i2 * 16 + 4], SIGMA82[i2 * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i2 * 16 + 6], SIGMA82[i2 * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i2 * 16 + 8], SIGMA82[i2 * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i2 * 16 + 10], SIGMA82[i2 * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i2 * 16 + 12], SIGMA82[i2 * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i2 * 16 + 14], SIGMA82[i2 * 16 + 15]);
      }
      for (i2 = 0; i2 < 16; i2++) {
        ctx.h[i2] = ctx.h[i2] ^ v2[i2] ^ v2[i2 + 16];
      }
    }
    var parameterBlock = new Uint8Array([
      0,
      0,
      0,
      0,
      //  0: outlen, keylen, fanout, depth
      0,
      0,
      0,
      0,
      //  4: leaf length, sequential mode
      0,
      0,
      0,
      0,
      //  8: node offset
      0,
      0,
      0,
      0,
      // 12: node offset
      0,
      0,
      0,
      0,
      // 16: node depth, inner length, rfu
      0,
      0,
      0,
      0,
      // 20: rfu
      0,
      0,
      0,
      0,
      // 24: rfu
      0,
      0,
      0,
      0,
      // 28: rfu
      0,
      0,
      0,
      0,
      // 32: salt
      0,
      0,
      0,
      0,
      // 36: salt
      0,
      0,
      0,
      0,
      // 40: salt
      0,
      0,
      0,
      0,
      // 44: salt
      0,
      0,
      0,
      0,
      // 48: personal
      0,
      0,
      0,
      0,
      // 52: personal
      0,
      0,
      0,
      0,
      // 56: personal
      0,
      0,
      0,
      0
      // 60: personal
    ]);
    function blake2bInit2(outlen, key, salt, personal) {
      if (outlen === 0 || outlen > 64) {
        throw new Error("Illegal output length, expected 0 < length <= 64");
      }
      if (key && key.length > 64) {
        throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
      }
      if (salt && salt.length !== 16) {
        throw new Error("Illegal salt, expected Uint8Array with length is 16");
      }
      if (personal && personal.length !== 16) {
        throw new Error("Illegal personal, expected Uint8Array with length is 16");
      }
      const ctx = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        // input count
        c: 0,
        // pointer within buffer
        outlen
        // output length in bytes
      };
      parameterBlock.fill(0);
      parameterBlock[0] = outlen;
      if (key) parameterBlock[1] = key.length;
      parameterBlock[2] = 1;
      parameterBlock[3] = 1;
      if (salt) parameterBlock.set(salt, 32);
      if (personal) parameterBlock.set(personal, 48);
      for (let i2 = 0; i2 < 16; i2++) {
        ctx.h[i2] = BLAKE2B_IV32[i2] ^ B2B_GET32(parameterBlock, i2 * 4);
      }
      if (key) {
        blake2bUpdate2(ctx, key);
        ctx.c = 128;
      }
      return ctx;
    }
    function blake2bUpdate2(ctx, input) {
      for (let i2 = 0; i2 < input.length; i2++) {
        if (ctx.c === 128) {
          ctx.t += ctx.c;
          blake2bCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i2];
      }
    }
    function blake2bFinal2(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 128) {
        ctx.b[ctx.c++] = 0;
      }
      blake2bCompress(ctx, true);
      const out = new Uint8Array(ctx.outlen);
      for (let i2 = 0; i2 < ctx.outlen; i2++) {
        out[i2] = ctx.h[i2 >> 2] >> 8 * (i2 & 3);
      }
      return out;
    }
    function blake2b3(input, key, outlen, salt, personal) {
      outlen = outlen || 64;
      input = util.normalizeInput(input);
      if (salt) {
        salt = util.normalizeInput(salt);
      }
      if (personal) {
        personal = util.normalizeInput(personal);
      }
      const ctx = blake2bInit2(outlen, key, salt, personal);
      blake2bUpdate2(ctx, input);
      return blake2bFinal2(ctx);
    }
    function blake2bHex(input, key, outlen, salt, personal) {
      const output = blake2b3(input, key, outlen, salt, personal);
      return util.toHex(output);
    }
    module.exports = {
      blake2b: blake2b3,
      blake2bHex,
      blake2bInit: blake2bInit2,
      blake2bUpdate: blake2bUpdate2,
      blake2bFinal: blake2bFinal2
    };
  }
});

// node_modules/blakejs/blake2s.js
var require_blake2s = __commonJS({
  "node_modules/blakejs/blake2s.js"(exports, module) {
    var util = require_util();
    function B2S_GET32(v3, i2) {
      return v3[i2] ^ v3[i2 + 1] << 8 ^ v3[i2 + 2] << 16 ^ v3[i2 + 3] << 24;
    }
    function B2S_G(a, b, c, d, x2, y) {
      v2[a] = v2[a] + v2[b] + x2;
      v2[d] = ROTR32(v2[d] ^ v2[a], 16);
      v2[c] = v2[c] + v2[d];
      v2[b] = ROTR32(v2[b] ^ v2[c], 12);
      v2[a] = v2[a] + v2[b] + y;
      v2[d] = ROTR32(v2[d] ^ v2[a], 8);
      v2[c] = v2[c] + v2[d];
      v2[b] = ROTR32(v2[b] ^ v2[c], 7);
    }
    function ROTR32(x2, y) {
      return x2 >>> y ^ x2 << 32 - y;
    }
    var BLAKE2S_IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SIGMA = new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0
    ]);
    var v2 = new Uint32Array(16);
    var m3 = new Uint32Array(16);
    function blake2sCompress(ctx, last) {
      let i2 = 0;
      for (i2 = 0; i2 < 8; i2++) {
        v2[i2] = ctx.h[i2];
        v2[i2 + 8] = BLAKE2S_IV[i2];
      }
      v2[12] ^= ctx.t;
      v2[13] ^= ctx.t / 4294967296;
      if (last) {
        v2[14] = ~v2[14];
      }
      for (i2 = 0; i2 < 16; i2++) {
        m3[i2] = B2S_GET32(ctx.b, 4 * i2);
      }
      for (i2 = 0; i2 < 10; i2++) {
        B2S_G(0, 4, 8, 12, m3[SIGMA[i2 * 16 + 0]], m3[SIGMA[i2 * 16 + 1]]);
        B2S_G(1, 5, 9, 13, m3[SIGMA[i2 * 16 + 2]], m3[SIGMA[i2 * 16 + 3]]);
        B2S_G(2, 6, 10, 14, m3[SIGMA[i2 * 16 + 4]], m3[SIGMA[i2 * 16 + 5]]);
        B2S_G(3, 7, 11, 15, m3[SIGMA[i2 * 16 + 6]], m3[SIGMA[i2 * 16 + 7]]);
        B2S_G(0, 5, 10, 15, m3[SIGMA[i2 * 16 + 8]], m3[SIGMA[i2 * 16 + 9]]);
        B2S_G(1, 6, 11, 12, m3[SIGMA[i2 * 16 + 10]], m3[SIGMA[i2 * 16 + 11]]);
        B2S_G(2, 7, 8, 13, m3[SIGMA[i2 * 16 + 12]], m3[SIGMA[i2 * 16 + 13]]);
        B2S_G(3, 4, 9, 14, m3[SIGMA[i2 * 16 + 14]], m3[SIGMA[i2 * 16 + 15]]);
      }
      for (i2 = 0; i2 < 8; i2++) {
        ctx.h[i2] ^= v2[i2] ^ v2[i2 + 8];
      }
    }
    function blake2sInit(outlen, key) {
      if (!(outlen > 0 && outlen <= 32)) {
        throw new Error("Incorrect output length, should be in [1, 32]");
      }
      const keylen = key ? key.length : 0;
      if (key && !(keylen > 0 && keylen <= 32)) {
        throw new Error("Incorrect key length, should be in [1, 32]");
      }
      const ctx = {
        h: new Uint32Array(BLAKE2S_IV),
        // hash state
        b: new Uint8Array(64),
        // input block
        c: 0,
        // pointer within block
        t: 0,
        // input count
        outlen
        // output length in bytes
      };
      ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
      if (keylen > 0) {
        blake2sUpdate(ctx, key);
        ctx.c = 64;
      }
      return ctx;
    }
    function blake2sUpdate(ctx, input) {
      for (let i2 = 0; i2 < input.length; i2++) {
        if (ctx.c === 64) {
          ctx.t += ctx.c;
          blake2sCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i2];
      }
    }
    function blake2sFinal(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 64) {
        ctx.b[ctx.c++] = 0;
      }
      blake2sCompress(ctx, true);
      const out = new Uint8Array(ctx.outlen);
      for (let i2 = 0; i2 < ctx.outlen; i2++) {
        out[i2] = ctx.h[i2 >> 2] >> 8 * (i2 & 3) & 255;
      }
      return out;
    }
    function blake2s(input, key, outlen) {
      outlen = outlen || 32;
      input = util.normalizeInput(input);
      const ctx = blake2sInit(outlen, key);
      blake2sUpdate(ctx, input);
      return blake2sFinal(ctx);
    }
    function blake2sHex(input, key, outlen) {
      const output = blake2s(input, key, outlen);
      return util.toHex(output);
    }
    module.exports = {
      blake2s,
      blake2sHex,
      blake2sInit,
      blake2sUpdate,
      blake2sFinal
    };
  }
});

// node_modules/blakejs/index.js
var require_blakejs = __commonJS({
  "node_modules/blakejs/index.js"(exports, module) {
    var b2b = require_blake2b();
    var b2s = require_blake2s();
    module.exports = {
      blake2b: b2b.blake2b,
      blake2bHex: b2b.blake2bHex,
      blake2bInit: b2b.blake2bInit,
      blake2bUpdate: b2b.blake2bUpdate,
      blake2bFinal: b2b.blake2bFinal,
      blake2s: b2s.blake2s,
      blake2sHex: b2s.blake2sHex,
      blake2sInit: b2s.blake2sInit,
      blake2sUpdate: b2s.blake2sUpdate,
      blake2sFinal: b2s.blake2sFinal
    };
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i2 = 0, len = code.length; i2 < len; ++i2) {
      lookup[i2] = code[i2];
      revLookup[code.charCodeAt(i2)] = i2;
    }
    var i2;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i3;
      for (i3 = 0; i3 < len2; i3 += 4) {
        tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i3 = start; i3 < end; i3 += 3) {
        tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e2, m3;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i2 = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i2];
      i2 += d;
      e2 = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i2], i2 += d, nBits -= 8) {
      }
      m3 = e2 & (1 << -nBits) - 1;
      e2 >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m3 = m3 * 256 + buffer[offset + i2], i2 += d, nBits -= 8) {
      }
      if (e2 === 0) {
        e2 = 1 - eBias;
      } else if (e2 === eMax) {
        return m3 ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m3 = m3 + Math.pow(2, mLen);
        e2 = e2 - eBias;
      }
      return (s ? -1 : 1) * m3 * Math.pow(2, e2 - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e2, m3, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i2 = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m3 = isNaN(value) ? 1 : 0;
        e2 = eMax;
      } else {
        e2 = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e2)) < 1) {
          e2--;
          c *= 2;
        }
        if (e2 + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e2++;
          c /= 2;
        }
        if (e2 + eBias >= eMax) {
          m3 = 0;
          e2 = eMax;
        } else if (e2 + eBias >= 1) {
          m3 = (value * c - 1) * Math.pow(2, mLen);
          e2 = e2 + eBias;
        } else {
          m3 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e2 = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i2] = m3 & 255, i2 += d, m3 /= 256, mLen -= 8) {
      }
      e2 = e2 << mLen | m3;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i2] = e2 & 255, i2 += d, e2 /= 256, eLen -= 8) {
      }
      buffer[offset + i2 - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer10;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer10.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer10.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto3 = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto3, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto3);
        return arr.foo() === 42;
      } catch (e2) {
        return false;
      }
    }
    Object.defineProperty(Buffer10.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer10.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer10.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer10.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length2) {
      if (length2 > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length2);
      Object.setPrototypeOf(buf, Buffer10.prototype);
      return buf;
    }
    function Buffer10(arg, encodingOrOffset, length2) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from3(arg, encodingOrOffset, length2);
    }
    Buffer10.poolSize = 8192;
    function from3(value, encodingOrOffset, length2) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer10.from(valueOf, encodingOrOffset, length2);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer10.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length2);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer10.from = function(value, encodingOrOffset, length2) {
      return from3(value, encodingOrOffset, length2);
    };
    Object.setPrototypeOf(Buffer10.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer10, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer10.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer10.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer10.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string3, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer10.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length2 = byteLength(string3, encoding) | 0;
      let buf = createBuffer(length2);
      const actual = buf.write(string3, encoding);
      if (actual !== length2) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length2 = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length2);
      for (let i2 = 0; i2 < length2; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length2) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length2 || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length2 === void 0) {
        buf = new Uint8Array(array);
      } else if (length2 === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length2);
      }
      Object.setPrototypeOf(buf, Buffer10.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer10.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length2) {
      if (length2 >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length2 | 0;
    }
    function SlowBuffer(length2) {
      if (+length2 != length2) {
        length2 = 0;
      }
      return Buffer10.alloc(+length2);
    }
    Buffer10.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer10.prototype;
    };
    Buffer10.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer10.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer10.from(b, b.offset, b.byteLength);
      if (!Buffer10.isBuffer(a) || !Buffer10.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b) return 0;
      let x2 = a.length;
      let y = b.length;
      for (let i2 = 0, len = Math.min(x2, y); i2 < len; ++i2) {
        if (a[i2] !== b[i2]) {
          x2 = a[i2];
          y = b[i2];
          break;
        }
      }
      if (x2 < y) return -1;
      if (y < x2) return 1;
      return 0;
    };
    Buffer10.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer10.concat = function concat(list, length2) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer10.alloc(0);
      }
      let i2;
      if (length2 === void 0) {
        length2 = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length2 += list[i2].length;
        }
      }
      const buffer = Buffer10.allocUnsafe(length2);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer10.isBuffer(buf)) buf = Buffer10.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer10.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string3, encoding) {
      if (Buffer10.isBuffer(string3)) {
        return string3.length;
      }
      if (ArrayBuffer.isView(string3) || isInstance(string3, ArrayBuffer)) {
        return string3.byteLength;
      }
      if (typeof string3 !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string3
        );
      }
      const len = string3.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string3).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string3).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string3).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer10.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer10.prototype._isBuffer = true;
    function swap(b, n, m3) {
      const i2 = b[n];
      b[n] = b[m3];
      b[m3] = i2;
    }
    Buffer10.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer10.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer10.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer10.prototype.toString = function toString() {
      const length2 = this.length;
      if (length2 === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length2);
      return slowToString.apply(this, arguments);
    };
    Buffer10.prototype.toLocaleString = Buffer10.prototype.toString;
    Buffer10.prototype.equals = function equals3(b) {
      if (!Buffer10.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer10.compare(this, b) === 0;
    };
    Buffer10.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer10.prototype[customInspectSymbol] = Buffer10.prototype.inspect;
    }
    Buffer10.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer10.from(target, target.offset, target.byteLength);
      }
      if (!Buffer10.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x2 = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x2, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x2 = thisCopy[i2];
          y = targetCopy[i2];
          break;
        }
      }
      if (x2 < y) return -1;
      if (y < x2) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer10.from(val, encoding);
      }
      if (Buffer10.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read2(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read2(arr, i2) === read2(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read2(arr, i2 + j) !== read2(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i2;
        }
      }
      return -1;
    }
    Buffer10.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer10.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer10.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string3, offset, length2) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length2) {
        length2 = remaining;
      } else {
        length2 = Number(length2);
        if (length2 > remaining) {
          length2 = remaining;
        }
      }
      const strLen = string3.length;
      if (length2 > strLen / 2) {
        length2 = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length2; ++i2) {
        const parsed = parseInt(string3.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string3, offset, length2) {
      return blitBuffer(utf8ToBytes(string3, buf.length - offset), buf, offset, length2);
    }
    function asciiWrite(buf, string3, offset, length2) {
      return blitBuffer(asciiToBytes(string3), buf, offset, length2);
    }
    function base64Write(buf, string3, offset, length2) {
      return blitBuffer(base64ToBytes(string3), buf, offset, length2);
    }
    function ucs2Write(buf, string3, offset, length2) {
      return blitBuffer(utf16leToBytes(string3, buf.length - offset), buf, offset, length2);
    }
    Buffer10.prototype.write = function write(string3, offset, length2, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length2 = this.length;
        offset = 0;
      } else if (length2 === void 0 && typeof offset === "string") {
        encoding = offset;
        length2 = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length2)) {
          length2 = length2 >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length2;
          length2 = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length2 === void 0 || length2 > remaining) length2 = remaining;
      if (string3.length > 0 && (length2 < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string3, offset, length2);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string3, offset, length2);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string3, offset, length2);
          case "base64":
            return base64Write(this, string3, offset, length2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string3, offset, length2);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer10.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer10.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer10.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length2) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length2) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer10.prototype.readUintLE = Buffer10.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer10.prototype.readUintBE = Buffer10.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer10.prototype.readUint8 = Buffer10.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer10.prototype.readUint16LE = Buffer10.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer10.prototype.readUint16BE = Buffer10.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer10.prototype.readUint32LE = Buffer10.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer10.prototype.readUint32BE = Buffer10.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer10.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer10.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer10.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer10.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i2 = byteLength2;
      let mul = 1;
      let val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer10.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer10.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer10.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer10.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer10.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer10.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer10.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer10.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer10.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer10.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer10.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer10.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer10.prototype.writeUintLE = Buffer10.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer10.prototype.writeUintBE = Buffer10.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer10.prototype.writeUint8 = Buffer10.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer10.prototype.writeUint16LE = Buffer10.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer10.prototype.writeUint16BE = Buffer10.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer10.prototype.writeUint32LE = Buffer10.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer10.prototype.writeUint32BE = Buffer10.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer10.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer10.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer10.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer10.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer10.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer10.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer10.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer10.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer10.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer10.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer10.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer10.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer10.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer10.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer10.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer10.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer10.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer10.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer10.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes = Buffer10.isBuffer(val) ? val : Buffer10.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len];
        }
      }
      return this;
    };
    var errors = {};
    function E2(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length2, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length2 < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length2}`,
        value
      );
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string3, units) {
      units = units || Infinity;
      let codePoint;
      const length2 = string3.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i2 = 0; i2 < length2; ++i2) {
        codePoint = string3.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length2) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i2);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src2, dst, offset, length2) {
      let i2;
      for (i2 = 0; i2 < length2; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src2.length) break;
        dst[i2 + offset] = src2[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i2] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/scrypt-async/scrypt-async.js
var require_scrypt_async = __commonJS({
  "node_modules/scrypt-async/scrypt-async.js"(exports, module) {
    function scrypt3(password, salt, logN, r, dkLen, interruptStep, callback, encoding) {
      "use strict";
      function SHA256(m3) {
        var K2 = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
        var h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762, h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225, w3 = new Array(64);
        function blocks(p3) {
          var off = 0, len = p3.length;
          while (len >= 64) {
            var a = h0, b = h1, c = h2, d = h3, e2 = h4, f = h5, g2 = h6, h8 = h7, u2, i3, j, t1, t2;
            for (i3 = 0; i3 < 16; i3++) {
              j = off + i3 * 4;
              w3[i3] = (p3[j] & 255) << 24 | (p3[j + 1] & 255) << 16 | (p3[j + 2] & 255) << 8 | p3[j + 3] & 255;
            }
            for (i3 = 16; i3 < 64; i3++) {
              u2 = w3[i3 - 2];
              t1 = (u2 >>> 17 | u2 << 32 - 17) ^ (u2 >>> 19 | u2 << 32 - 19) ^ u2 >>> 10;
              u2 = w3[i3 - 15];
              t2 = (u2 >>> 7 | u2 << 32 - 7) ^ (u2 >>> 18 | u2 << 32 - 18) ^ u2 >>> 3;
              w3[i3] = (t1 + w3[i3 - 7] | 0) + (t2 + w3[i3 - 16] | 0) | 0;
            }
            for (i3 = 0; i3 < 64; i3++) {
              t1 = (((e2 >>> 6 | e2 << 32 - 6) ^ (e2 >>> 11 | e2 << 32 - 11) ^ (e2 >>> 25 | e2 << 32 - 25)) + (e2 & f ^ ~e2 & g2) | 0) + (h8 + (K2[i3] + w3[i3] | 0) | 0) | 0;
              t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
              h8 = g2;
              g2 = f;
              f = e2;
              e2 = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            h0 = h0 + a | 0;
            h1 = h1 + b | 0;
            h2 = h2 + c | 0;
            h3 = h3 + d | 0;
            h4 = h4 + e2 | 0;
            h5 = h5 + f | 0;
            h6 = h6 + g2 | 0;
            h7 = h7 + h8 | 0;
            off += 64;
            len -= 64;
          }
        }
        blocks(m3);
        var i2, bytesLeft = m3.length % 64, bitLenHi = m3.length / 536870912 | 0, bitLenLo = m3.length << 3, numZeros = bytesLeft < 56 ? 56 : 120, p2 = m3.slice(m3.length - bytesLeft, m3.length);
        p2.push(128);
        for (i2 = bytesLeft + 1; i2 < numZeros; i2++) p2.push(0);
        p2.push(bitLenHi >>> 24 & 255);
        p2.push(bitLenHi >>> 16 & 255);
        p2.push(bitLenHi >>> 8 & 255);
        p2.push(bitLenHi >>> 0 & 255);
        p2.push(bitLenLo >>> 24 & 255);
        p2.push(bitLenLo >>> 16 & 255);
        p2.push(bitLenLo >>> 8 & 255);
        p2.push(bitLenLo >>> 0 & 255);
        blocks(p2);
        return [
          h0 >>> 24 & 255,
          h0 >>> 16 & 255,
          h0 >>> 8 & 255,
          h0 >>> 0 & 255,
          h1 >>> 24 & 255,
          h1 >>> 16 & 255,
          h1 >>> 8 & 255,
          h1 >>> 0 & 255,
          h2 >>> 24 & 255,
          h2 >>> 16 & 255,
          h2 >>> 8 & 255,
          h2 >>> 0 & 255,
          h3 >>> 24 & 255,
          h3 >>> 16 & 255,
          h3 >>> 8 & 255,
          h3 >>> 0 & 255,
          h4 >>> 24 & 255,
          h4 >>> 16 & 255,
          h4 >>> 8 & 255,
          h4 >>> 0 & 255,
          h5 >>> 24 & 255,
          h5 >>> 16 & 255,
          h5 >>> 8 & 255,
          h5 >>> 0 & 255,
          h6 >>> 24 & 255,
          h6 >>> 16 & 255,
          h6 >>> 8 & 255,
          h6 >>> 0 & 255,
          h7 >>> 24 & 255,
          h7 >>> 16 & 255,
          h7 >>> 8 & 255,
          h7 >>> 0 & 255
        ];
      }
      function PBKDF2_HMAC_SHA256_OneIter(password2, salt2, dkLen2) {
        if (password2.length > 64) {
          password2 = SHA256(password2.push ? password2 : Array.prototype.slice.call(password2, 0));
        }
        var i2, innerLen = 64 + salt2.length + 4, inner = new Array(innerLen), outerKey = new Array(64), dk = [];
        for (i2 = 0; i2 < 64; i2++) inner[i2] = 54;
        for (i2 = 0; i2 < password2.length; i2++) inner[i2] ^= password2[i2];
        for (i2 = 0; i2 < salt2.length; i2++) inner[64 + i2] = salt2[i2];
        for (i2 = innerLen - 4; i2 < innerLen; i2++) inner[i2] = 0;
        for (i2 = 0; i2 < 64; i2++) outerKey[i2] = 92;
        for (i2 = 0; i2 < password2.length; i2++) outerKey[i2] ^= password2[i2];
        function incrementCounter() {
          for (var i3 = innerLen - 1; i3 >= innerLen - 4; i3--) {
            inner[i3]++;
            if (inner[i3] <= 255) return;
            inner[i3] = 0;
          }
        }
        while (dkLen2 >= 32) {
          incrementCounter();
          dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
          dkLen2 -= 32;
        }
        if (dkLen2 > 0) {
          incrementCounter();
          dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen2));
        }
        return dk;
      }
      function salsaXOR(tmp2, B4, bin, bout) {
        var j0 = tmp2[0] ^ B4[bin++], j1 = tmp2[1] ^ B4[bin++], j2 = tmp2[2] ^ B4[bin++], j3 = tmp2[3] ^ B4[bin++], j4 = tmp2[4] ^ B4[bin++], j5 = tmp2[5] ^ B4[bin++], j6 = tmp2[6] ^ B4[bin++], j7 = tmp2[7] ^ B4[bin++], j8 = tmp2[8] ^ B4[bin++], j9 = tmp2[9] ^ B4[bin++], j10 = tmp2[10] ^ B4[bin++], j11 = tmp2[11] ^ B4[bin++], j12 = tmp2[12] ^ B4[bin++], j13 = tmp2[13] ^ B4[bin++], j14 = tmp2[14] ^ B4[bin++], j15 = tmp2[15] ^ B4[bin++], u2, i2;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15;
        for (i2 = 0; i2 < 8; i2 += 2) {
          u2 = x0 + x12;
          x4 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x4 + x0;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x4;
          x12 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x12 + x8;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x1;
          x9 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x9 + x5;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x9;
          x1 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x1 + x13;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x6;
          x14 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x14 + x10;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x14;
          x6 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x6 + x2;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x11;
          x3 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x3 + x15;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x3;
          x11 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x11 + x7;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x0 + x3;
          x1 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x1 + x0;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x1;
          x3 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x3 + x2;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x4;
          x6 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x6 + x5;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x6;
          x4 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x4 + x7;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x9;
          x11 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x11 + x10;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x11;
          x9 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x9 + x8;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x14;
          x12 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x12 + x15;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x12;
          x14 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x14 + x13;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
        }
        B4[bout++] = tmp2[0] = x0 + j0 | 0;
        B4[bout++] = tmp2[1] = x1 + j1 | 0;
        B4[bout++] = tmp2[2] = x2 + j2 | 0;
        B4[bout++] = tmp2[3] = x3 + j3 | 0;
        B4[bout++] = tmp2[4] = x4 + j4 | 0;
        B4[bout++] = tmp2[5] = x5 + j5 | 0;
        B4[bout++] = tmp2[6] = x6 + j6 | 0;
        B4[bout++] = tmp2[7] = x7 + j7 | 0;
        B4[bout++] = tmp2[8] = x8 + j8 | 0;
        B4[bout++] = tmp2[9] = x9 + j9 | 0;
        B4[bout++] = tmp2[10] = x10 + j10 | 0;
        B4[bout++] = tmp2[11] = x11 + j11 | 0;
        B4[bout++] = tmp2[12] = x12 + j12 | 0;
        B4[bout++] = tmp2[13] = x13 + j13 | 0;
        B4[bout++] = tmp2[14] = x14 + j14 | 0;
        B4[bout++] = tmp2[15] = x15 + j15 | 0;
      }
      function blockCopy(dst, di, src2, si, len) {
        while (len--) dst[di++] = src2[si++];
      }
      function blockXOR(dst, di, src2, si, len) {
        while (len--) dst[di++] ^= src2[si++];
      }
      function blockMix(tmp2, B4, bin, bout, r2) {
        blockCopy(tmp2, 0, B4, bin + (2 * r2 - 1) * 16, 16);
        for (var i2 = 0; i2 < 2 * r2; i2 += 2) {
          salsaXOR(tmp2, B4, bin + i2 * 16, bout + i2 * 8);
          salsaXOR(tmp2, B4, bin + i2 * 16 + 16, bout + i2 * 8 + r2 * 16);
        }
      }
      function integerify(B4, bi, r2) {
        return B4[bi + (2 * r2 - 1) * 16];
      }
      function stringToUTF8Bytes(s) {
        var arr = [];
        for (var i2 = 0; i2 < s.length; i2++) {
          var c = s.charCodeAt(i2);
          if (c < 128) {
            arr.push(c);
          } else if (c < 2048) {
            arr.push(192 | c >> 6);
            arr.push(128 | c & 63);
          } else if (c < 55296) {
            arr.push(224 | c >> 12);
            arr.push(128 | c >> 6 & 63);
            arr.push(128 | c & 63);
          } else {
            if (i2 >= s.length - 1) {
              throw new Error("invalid string");
            }
            i2++;
            c = (c & 1023) << 10;
            c |= s.charCodeAt(i2) & 1023;
            c += 65536;
            arr.push(240 | c >> 18);
            arr.push(128 | c >> 12 & 63);
            arr.push(128 | c >> 6 & 63);
            arr.push(128 | c & 63);
          }
        }
        return arr;
      }
      function bytesToHex(p2) {
        var enc = "0123456789abcdef".split("");
        var len = p2.length, arr = [], i2 = 0;
        for (; i2 < len; i2++) {
          arr.push(enc[p2[i2] >>> 4 & 15]);
          arr.push(enc[p2[i2] >>> 0 & 15]);
        }
        return arr.join("");
      }
      function bytesToBase64(p2) {
        var enc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        var len = p2.length, arr = [], i2 = 0, a, b, c, t;
        while (i2 < len) {
          a = i2 < len ? p2[i2++] : 0;
          b = i2 < len ? p2[i2++] : 0;
          c = i2 < len ? p2[i2++] : 0;
          t = (a << 16) + (b << 8) + c;
          arr.push(enc[t >>> 3 * 6 & 63]);
          arr.push(enc[t >>> 2 * 6 & 63]);
          arr.push(enc[t >>> 1 * 6 & 63]);
          arr.push(enc[t >>> 0 * 6 & 63]);
        }
        if (len % 3 > 0) {
          arr[arr.length - 1] = "=";
          if (len % 3 === 1) arr[arr.length - 2] = "=";
        }
        return arr.join("");
      }
      var MAX_UINT = -1 >>> 0, p = 1;
      if (typeof logN === "object") {
        if (arguments.length > 4) {
          throw new Error("scrypt: incorrect number of arguments");
        }
        var opts = logN;
        callback = r;
        logN = opts.logN;
        if (typeof logN === "undefined") {
          if (typeof opts.N !== "undefined") {
            if (opts.N < 2 || opts.N > MAX_UINT)
              throw new Error("scrypt: N is out of range");
            if ((opts.N & opts.N - 1) !== 0)
              throw new Error("scrypt: N is not a power of 2");
            logN = Math.log(opts.N) / Math.LN2;
          } else {
            throw new Error("scrypt: missing N parameter");
          }
        }
        p = opts.p || 1;
        r = opts.r;
        dkLen = opts.dkLen || 32;
        interruptStep = opts.interruptStep || 0;
        encoding = opts.encoding;
      }
      if (p < 1)
        throw new Error("scrypt: invalid p");
      if (r <= 0)
        throw new Error("scrypt: invalid r");
      if (logN < 1 || logN > 31)
        throw new Error("scrypt: logN must be between 1 and 31");
      var N10 = 1 << logN >>> 0, XY, V, B3, tmp;
      if (r * p >= 1 << 30 || r > MAX_UINT / 128 / p || r > MAX_UINT / 256 || N10 > MAX_UINT / 128 / r)
        throw new Error("scrypt: parameters are too large");
      if (typeof password === "string")
        password = stringToUTF8Bytes(password);
      if (typeof salt === "string")
        salt = stringToUTF8Bytes(salt);
      if (typeof Int32Array !== "undefined") {
        XY = new Int32Array(64 * r);
        V = new Int32Array(32 * N10 * r);
        tmp = new Int32Array(16);
      } else {
        XY = [];
        V = [];
        tmp = new Array(16);
      }
      B3 = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
      var xi = 0, yi = 32 * r;
      function smixStart(pos) {
        for (var i2 = 0; i2 < 32 * r; i2++) {
          var j = pos + i2 * 4;
          XY[xi + i2] = (B3[j + 3] & 255) << 24 | (B3[j + 2] & 255) << 16 | (B3[j + 1] & 255) << 8 | (B3[j + 0] & 255) << 0;
        }
      }
      function smixStep1(start, end) {
        for (var i2 = start; i2 < end; i2 += 2) {
          blockCopy(V, i2 * (32 * r), XY, xi, 32 * r);
          blockMix(tmp, XY, xi, yi, r);
          blockCopy(V, (i2 + 1) * (32 * r), XY, yi, 32 * r);
          blockMix(tmp, XY, yi, xi, r);
        }
      }
      function smixStep2(start, end) {
        for (var i2 = start; i2 < end; i2 += 2) {
          var j = integerify(XY, xi, r) & N10 - 1;
          blockXOR(XY, xi, V, j * (32 * r), 32 * r);
          blockMix(tmp, XY, xi, yi, r);
          j = integerify(XY, yi, r) & N10 - 1;
          blockXOR(XY, yi, V, j * (32 * r), 32 * r);
          blockMix(tmp, XY, yi, xi, r);
        }
      }
      function smixFinish(pos) {
        for (var i2 = 0; i2 < 32 * r; i2++) {
          var j = XY[xi + i2];
          B3[pos + i2 * 4 + 0] = j >>> 0 & 255;
          B3[pos + i2 * 4 + 1] = j >>> 8 & 255;
          B3[pos + i2 * 4 + 2] = j >>> 16 & 255;
          B3[pos + i2 * 4 + 3] = j >>> 24 & 255;
        }
      }
      var nextTick = typeof setImmediate !== "undefined" ? setImmediate : setTimeout;
      function interruptedFor(start, end, step, fn, donefn) {
        (function performStep() {
          nextTick(function() {
            fn(start, start + step < end ? start + step : end);
            start += step;
            if (start < end)
              performStep();
            else
              donefn();
          });
        })();
      }
      function getResult(enc) {
        var result = PBKDF2_HMAC_SHA256_OneIter(password, B3, dkLen);
        if (enc === "base64")
          return bytesToBase64(result);
        else if (enc === "hex")
          return bytesToHex(result);
        else if (enc === "binary")
          return new Uint8Array(result);
        else
          return result;
      }
      function calculateSync() {
        for (var i2 = 0; i2 < p; i2++) {
          smixStart(i2 * 128 * r);
          smixStep1(0, N10);
          smixStep2(0, N10);
          smixFinish(i2 * 128 * r);
        }
        callback(getResult(encoding));
      }
      function calculateAsync(i2) {
        smixStart(i2 * 128 * r);
        interruptedFor(0, N10, interruptStep * 2, smixStep1, function() {
          interruptedFor(0, N10, interruptStep * 2, smixStep2, function() {
            smixFinish(i2 * 128 * r);
            if (i2 + 1 < p) {
              nextTick(function() {
                calculateAsync(i2 + 1);
              });
            } else {
              callback(getResult(encoding));
            }
          });
        });
      }
      if (typeof interruptStep === "function") {
        encoding = callback;
        callback = interruptStep;
        interruptStep = 1e3;
      }
      if (interruptStep <= 0) {
        calculateSync();
      } else {
        calculateAsync(0);
      }
    }
    if (typeof module !== "undefined") module.exports = scrypt3;
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
    (function(nacl3) {
      "use strict";
      var gf = function(init2) {
        var i2, r = new Float64Array(16);
        if (init2) for (i2 = 0; i2 < init2.length; i2++) r[i2] = init2[i2];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I2 = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x2, i2, h2, l) {
        x2[i2] = h2 >> 24 & 255;
        x2[i2 + 1] = h2 >> 16 & 255;
        x2[i2 + 2] = h2 >> 8 & 255;
        x2[i2 + 3] = h2 & 255;
        x2[i2 + 4] = l >> 24 & 255;
        x2[i2 + 5] = l >> 16 & 255;
        x2[i2 + 6] = l >> 8 & 255;
        x2[i2 + 7] = l & 255;
      }
      function vn(x2, xi, y, yi, n) {
        var i2, d = 0;
        for (i2 = 0; i2 < n; i2++) d |= x2[xi + i2] ^ y[yi + i2];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x2, xi, y, yi) {
        return vn(x2, xi, y, yi, 16);
      }
      function crypto_verify_32(x2, xi, y, yi) {
        return vn(x2, xi, y, yi, 32);
      }
      function core_salsa20(o2, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u2;
        for (var i2 = 0; i2 < 20; i2 += 2) {
          u2 = x0 + x12 | 0;
          x4 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x4 + x0 | 0;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x4 | 0;
          x12 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x12 + x8 | 0;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x1 | 0;
          x9 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x9 + x5 | 0;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x9 | 0;
          x1 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x1 + x13 | 0;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x6 | 0;
          x14 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x14 + x10 | 0;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x14 | 0;
          x6 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x6 + x2 | 0;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x11 | 0;
          x3 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x3 + x15 | 0;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x3 | 0;
          x11 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x11 + x7 | 0;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x0 + x3 | 0;
          x1 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x1 + x0 | 0;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x1 | 0;
          x3 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x3 + x2 | 0;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x4 | 0;
          x6 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x6 + x5 | 0;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x6 | 0;
          x4 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x4 + x7 | 0;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x9 | 0;
          x11 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x11 + x10 | 0;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x11 | 0;
          x9 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x9 + x8 | 0;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x14 | 0;
          x12 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x12 + x15 | 0;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x12 | 0;
          x14 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x14 + x13 | 0;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o2[0] = x0 >>> 0 & 255;
        o2[1] = x0 >>> 8 & 255;
        o2[2] = x0 >>> 16 & 255;
        o2[3] = x0 >>> 24 & 255;
        o2[4] = x1 >>> 0 & 255;
        o2[5] = x1 >>> 8 & 255;
        o2[6] = x1 >>> 16 & 255;
        o2[7] = x1 >>> 24 & 255;
        o2[8] = x2 >>> 0 & 255;
        o2[9] = x2 >>> 8 & 255;
        o2[10] = x2 >>> 16 & 255;
        o2[11] = x2 >>> 24 & 255;
        o2[12] = x3 >>> 0 & 255;
        o2[13] = x3 >>> 8 & 255;
        o2[14] = x3 >>> 16 & 255;
        o2[15] = x3 >>> 24 & 255;
        o2[16] = x4 >>> 0 & 255;
        o2[17] = x4 >>> 8 & 255;
        o2[18] = x4 >>> 16 & 255;
        o2[19] = x4 >>> 24 & 255;
        o2[20] = x5 >>> 0 & 255;
        o2[21] = x5 >>> 8 & 255;
        o2[22] = x5 >>> 16 & 255;
        o2[23] = x5 >>> 24 & 255;
        o2[24] = x6 >>> 0 & 255;
        o2[25] = x6 >>> 8 & 255;
        o2[26] = x6 >>> 16 & 255;
        o2[27] = x6 >>> 24 & 255;
        o2[28] = x7 >>> 0 & 255;
        o2[29] = x7 >>> 8 & 255;
        o2[30] = x7 >>> 16 & 255;
        o2[31] = x7 >>> 24 & 255;
        o2[32] = x8 >>> 0 & 255;
        o2[33] = x8 >>> 8 & 255;
        o2[34] = x8 >>> 16 & 255;
        o2[35] = x8 >>> 24 & 255;
        o2[36] = x9 >>> 0 & 255;
        o2[37] = x9 >>> 8 & 255;
        o2[38] = x9 >>> 16 & 255;
        o2[39] = x9 >>> 24 & 255;
        o2[40] = x10 >>> 0 & 255;
        o2[41] = x10 >>> 8 & 255;
        o2[42] = x10 >>> 16 & 255;
        o2[43] = x10 >>> 24 & 255;
        o2[44] = x11 >>> 0 & 255;
        o2[45] = x11 >>> 8 & 255;
        o2[46] = x11 >>> 16 & 255;
        o2[47] = x11 >>> 24 & 255;
        o2[48] = x12 >>> 0 & 255;
        o2[49] = x12 >>> 8 & 255;
        o2[50] = x12 >>> 16 & 255;
        o2[51] = x12 >>> 24 & 255;
        o2[52] = x13 >>> 0 & 255;
        o2[53] = x13 >>> 8 & 255;
        o2[54] = x13 >>> 16 & 255;
        o2[55] = x13 >>> 24 & 255;
        o2[56] = x14 >>> 0 & 255;
        o2[57] = x14 >>> 8 & 255;
        o2[58] = x14 >>> 16 & 255;
        o2[59] = x14 >>> 24 & 255;
        o2[60] = x15 >>> 0 & 255;
        o2[61] = x15 >>> 8 & 255;
        o2[62] = x15 >>> 16 & 255;
        o2[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o2, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u2;
        for (var i2 = 0; i2 < 20; i2 += 2) {
          u2 = x0 + x12 | 0;
          x4 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x4 + x0 | 0;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x4 | 0;
          x12 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x12 + x8 | 0;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x1 | 0;
          x9 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x9 + x5 | 0;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x9 | 0;
          x1 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x1 + x13 | 0;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x6 | 0;
          x14 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x14 + x10 | 0;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x14 | 0;
          x6 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x6 + x2 | 0;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x11 | 0;
          x3 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x3 + x15 | 0;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x3 | 0;
          x11 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x11 + x7 | 0;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x0 + x3 | 0;
          x1 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x1 + x0 | 0;
          x2 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x2 + x1 | 0;
          x3 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x3 + x2 | 0;
          x0 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x5 + x4 | 0;
          x6 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x6 + x5 | 0;
          x7 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x7 + x6 | 0;
          x4 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x4 + x7 | 0;
          x5 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x10 + x9 | 0;
          x11 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x11 + x10 | 0;
          x8 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x8 + x11 | 0;
          x9 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x9 + x8 | 0;
          x10 ^= u2 << 18 | u2 >>> 32 - 18;
          u2 = x15 + x14 | 0;
          x12 ^= u2 << 7 | u2 >>> 32 - 7;
          u2 = x12 + x15 | 0;
          x13 ^= u2 << 9 | u2 >>> 32 - 9;
          u2 = x13 + x12 | 0;
          x14 ^= u2 << 13 | u2 >>> 32 - 13;
          u2 = x14 + x13 | 0;
          x15 ^= u2 << 18 | u2 >>> 32 - 18;
        }
        o2[0] = x0 >>> 0 & 255;
        o2[1] = x0 >>> 8 & 255;
        o2[2] = x0 >>> 16 & 255;
        o2[3] = x0 >>> 24 & 255;
        o2[4] = x5 >>> 0 & 255;
        o2[5] = x5 >>> 8 & 255;
        o2[6] = x5 >>> 16 & 255;
        o2[7] = x5 >>> 24 & 255;
        o2[8] = x10 >>> 0 & 255;
        o2[9] = x10 >>> 8 & 255;
        o2[10] = x10 >>> 16 & 255;
        o2[11] = x10 >>> 24 & 255;
        o2[12] = x15 >>> 0 & 255;
        o2[13] = x15 >>> 8 & 255;
        o2[14] = x15 >>> 16 & 255;
        o2[15] = x15 >>> 24 & 255;
        o2[16] = x6 >>> 0 & 255;
        o2[17] = x6 >>> 8 & 255;
        o2[18] = x6 >>> 16 & 255;
        o2[19] = x6 >>> 24 & 255;
        o2[20] = x7 >>> 0 & 255;
        o2[21] = x7 >>> 8 & 255;
        o2[22] = x7 >>> 16 & 255;
        o2[23] = x7 >>> 24 & 255;
        o2[24] = x8 >>> 0 & 255;
        o2[25] = x8 >>> 8 & 255;
        o2[26] = x8 >>> 16 & 255;
        o2[27] = x8 >>> 24 & 255;
        o2[28] = x9 >>> 0 & 255;
        o2[29] = x9 >>> 8 & 255;
        o2[30] = x9 >>> 16 & 255;
        o2[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m3, mpos, b, n, k) {
        var z = new Uint8Array(16), x2 = new Uint8Array(64);
        var u2, i2;
        for (i2 = 0; i2 < 16; i2++) z[i2] = 0;
        for (i2 = 0; i2 < 8; i2++) z[i2] = n[i2];
        while (b >= 64) {
          crypto_core_salsa20(x2, z, k, sigma);
          for (i2 = 0; i2 < 64; i2++) c[cpos + i2] = m3[mpos + i2] ^ x2[i2];
          u2 = 1;
          for (i2 = 8; i2 < 16; i2++) {
            u2 = u2 + (z[i2] & 255) | 0;
            z[i2] = u2 & 255;
            u2 >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x2, z, k, sigma);
          for (i2 = 0; i2 < b; i2++) c[cpos + i2] = m3[mpos + i2] ^ x2[i2];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x2 = new Uint8Array(64);
        var u2, i2;
        for (i2 = 0; i2 < 16; i2++) z[i2] = 0;
        for (i2 = 0; i2 < 8; i2++) z[i2] = n[i2];
        while (b >= 64) {
          crypto_core_salsa20(x2, z, k, sigma);
          for (i2 = 0; i2 < 64; i2++) c[cpos + i2] = x2[i2];
          u2 = 1;
          for (i2 = 8; i2 < 16; i2++) {
            u2 = u2 + (z[i2] & 255) | 0;
            z[i2] = u2 & 255;
            u2 >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x2, z, k, sigma);
          for (i2 = 0; i2 < b; i2++) c[cpos + i2] = x2[i2];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i2 = 0; i2 < 8; i2++) sn[i2] = n[i2 + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m3, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i2 = 0; i2 < 8; i2++) sn[i2] = n[i2 + 16];
        return crypto_stream_salsa20_xor(c, cpos, m3, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m3, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m3[mpos + 0] & 255 | (m3[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m3[mpos + 2] & 255 | (m3[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m3[mpos + 4] & 255 | (m3[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m3[mpos + 6] & 255 | (m3[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m3[mpos + 8] & 255 | (m3[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m3[mpos + 10] & 255 | (m3[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m3[mpos + 12] & 255 | (m3[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m3[mpos + 14] & 255 | (m3[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g2 = new Uint16Array(10);
        var c, mask, f, i2;
        if (this.leftover) {
          i2 = this.leftover;
          this.buffer[i2++] = 1;
          for (; i2 < 16; i2++) this.buffer[i2] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i2 = 2; i2 < 10; i2++) {
          this.h[i2] += c;
          c = this.h[i2] >>> 13;
          this.h[i2] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g2[0] = this.h[0] + 5;
        c = g2[0] >>> 13;
        g2[0] &= 8191;
        for (i2 = 1; i2 < 10; i2++) {
          g2[i2] = this.h[i2] + c;
          c = g2[i2] >>> 13;
          g2[i2] &= 8191;
        }
        g2[9] -= 1 << 13;
        mask = (c ^ 1) - 1;
        for (i2 = 0; i2 < 10; i2++) g2[i2] &= mask;
        mask = ~mask;
        for (i2 = 0; i2 < 10; i2++) this.h[i2] = this.h[i2] & mask | g2[i2];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i2 = 1; i2 < 8; i2++) {
          f = (this.h[i2] + this.pad[i2] | 0) + (f >>> 16) | 0;
          this.h[i2] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m3, mpos, bytes) {
        var i2, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i2 = 0; i2 < want; i2++)
            this.buffer[this.leftover + i2] = m3[mpos + i2];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m3, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i2 = 0; i2 < bytes; i2++)
            this.buffer[this.leftover + i2] = m3[mpos + i2];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m3, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m3, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h2, hpos, m3, mpos, n, k) {
        var x2 = new Uint8Array(16);
        crypto_onetimeauth(x2, 0, m3, mpos, n, k);
        return crypto_verify_16(h2, hpos, x2, 0);
      }
      function crypto_secretbox(c, m3, d, n, k) {
        var i2;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m3, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i2 = 0; i2 < 16; i2++) c[i2] = 0;
        return 0;
      }
      function crypto_secretbox_open(m3, c, d, n, k) {
        var i2;
        var x2 = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x2, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x2) !== 0) return -1;
        crypto_stream_xor(m3, 0, c, 0, d, n, k);
        for (i2 = 0; i2 < 32; i2++) m3[i2] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i2;
        for (i2 = 0; i2 < 16; i2++) r[i2] = a[i2] | 0;
      }
      function car25519(o2) {
        var i2, v2, c = 1;
        for (i2 = 0; i2 < 16; i2++) {
          v2 = o2[i2] + c + 65535;
          c = Math.floor(v2 / 65536);
          o2[i2] = v2 - c * 65536;
        }
        o2[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i2 = 0; i2 < 16; i2++) {
          t = c & (p[i2] ^ q[i2]);
          p[i2] ^= t;
          q[i2] ^= t;
        }
      }
      function pack25519(o2, n) {
        var i2, j, b;
        var m3 = gf(), t = gf();
        for (i2 = 0; i2 < 16; i2++) t[i2] = n[i2];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m3[0] = t[0] - 65517;
          for (i2 = 1; i2 < 15; i2++) {
            m3[i2] = t[i2] - 65535 - (m3[i2 - 1] >> 16 & 1);
            m3[i2 - 1] &= 65535;
          }
          m3[15] = t[15] - 32767 - (m3[14] >> 16 & 1);
          b = m3[15] >> 16 & 1;
          m3[14] &= 65535;
          sel25519(t, m3, 1 - b);
        }
        for (i2 = 0; i2 < 16; i2++) {
          o2[2 * i2] = t[i2] & 255;
          o2[2 * i2 + 1] = t[i2] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o2, n) {
        var i2;
        for (i2 = 0; i2 < 16; i2++) o2[i2] = n[2 * i2] + (n[2 * i2 + 1] << 8);
        o2[15] &= 32767;
      }
      function A2(o2, a, b) {
        for (var i2 = 0; i2 < 16; i2++) o2[i2] = a[i2] + b[i2];
      }
      function Z(o2, a, b) {
        for (var i2 = 0; i2 < 16; i2++) o2[i2] = a[i2] - b[i2];
      }
      function M2(o2, a, b) {
        var v2, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v2 = a[0];
        t0 += v2 * b0;
        t1 += v2 * b1;
        t2 += v2 * b2;
        t3 += v2 * b3;
        t4 += v2 * b4;
        t5 += v2 * b5;
        t6 += v2 * b6;
        t7 += v2 * b7;
        t8 += v2 * b8;
        t9 += v2 * b9;
        t10 += v2 * b10;
        t11 += v2 * b11;
        t12 += v2 * b12;
        t13 += v2 * b13;
        t14 += v2 * b14;
        t15 += v2 * b15;
        v2 = a[1];
        t1 += v2 * b0;
        t2 += v2 * b1;
        t3 += v2 * b2;
        t4 += v2 * b3;
        t5 += v2 * b4;
        t6 += v2 * b5;
        t7 += v2 * b6;
        t8 += v2 * b7;
        t9 += v2 * b8;
        t10 += v2 * b9;
        t11 += v2 * b10;
        t12 += v2 * b11;
        t13 += v2 * b12;
        t14 += v2 * b13;
        t15 += v2 * b14;
        t16 += v2 * b15;
        v2 = a[2];
        t2 += v2 * b0;
        t3 += v2 * b1;
        t4 += v2 * b2;
        t5 += v2 * b3;
        t6 += v2 * b4;
        t7 += v2 * b5;
        t8 += v2 * b6;
        t9 += v2 * b7;
        t10 += v2 * b8;
        t11 += v2 * b9;
        t12 += v2 * b10;
        t13 += v2 * b11;
        t14 += v2 * b12;
        t15 += v2 * b13;
        t16 += v2 * b14;
        t17 += v2 * b15;
        v2 = a[3];
        t3 += v2 * b0;
        t4 += v2 * b1;
        t5 += v2 * b2;
        t6 += v2 * b3;
        t7 += v2 * b4;
        t8 += v2 * b5;
        t9 += v2 * b6;
        t10 += v2 * b7;
        t11 += v2 * b8;
        t12 += v2 * b9;
        t13 += v2 * b10;
        t14 += v2 * b11;
        t15 += v2 * b12;
        t16 += v2 * b13;
        t17 += v2 * b14;
        t18 += v2 * b15;
        v2 = a[4];
        t4 += v2 * b0;
        t5 += v2 * b1;
        t6 += v2 * b2;
        t7 += v2 * b3;
        t8 += v2 * b4;
        t9 += v2 * b5;
        t10 += v2 * b6;
        t11 += v2 * b7;
        t12 += v2 * b8;
        t13 += v2 * b9;
        t14 += v2 * b10;
        t15 += v2 * b11;
        t16 += v2 * b12;
        t17 += v2 * b13;
        t18 += v2 * b14;
        t19 += v2 * b15;
        v2 = a[5];
        t5 += v2 * b0;
        t6 += v2 * b1;
        t7 += v2 * b2;
        t8 += v2 * b3;
        t9 += v2 * b4;
        t10 += v2 * b5;
        t11 += v2 * b6;
        t12 += v2 * b7;
        t13 += v2 * b8;
        t14 += v2 * b9;
        t15 += v2 * b10;
        t16 += v2 * b11;
        t17 += v2 * b12;
        t18 += v2 * b13;
        t19 += v2 * b14;
        t20 += v2 * b15;
        v2 = a[6];
        t6 += v2 * b0;
        t7 += v2 * b1;
        t8 += v2 * b2;
        t9 += v2 * b3;
        t10 += v2 * b4;
        t11 += v2 * b5;
        t12 += v2 * b6;
        t13 += v2 * b7;
        t14 += v2 * b8;
        t15 += v2 * b9;
        t16 += v2 * b10;
        t17 += v2 * b11;
        t18 += v2 * b12;
        t19 += v2 * b13;
        t20 += v2 * b14;
        t21 += v2 * b15;
        v2 = a[7];
        t7 += v2 * b0;
        t8 += v2 * b1;
        t9 += v2 * b2;
        t10 += v2 * b3;
        t11 += v2 * b4;
        t12 += v2 * b5;
        t13 += v2 * b6;
        t14 += v2 * b7;
        t15 += v2 * b8;
        t16 += v2 * b9;
        t17 += v2 * b10;
        t18 += v2 * b11;
        t19 += v2 * b12;
        t20 += v2 * b13;
        t21 += v2 * b14;
        t22 += v2 * b15;
        v2 = a[8];
        t8 += v2 * b0;
        t9 += v2 * b1;
        t10 += v2 * b2;
        t11 += v2 * b3;
        t12 += v2 * b4;
        t13 += v2 * b5;
        t14 += v2 * b6;
        t15 += v2 * b7;
        t16 += v2 * b8;
        t17 += v2 * b9;
        t18 += v2 * b10;
        t19 += v2 * b11;
        t20 += v2 * b12;
        t21 += v2 * b13;
        t22 += v2 * b14;
        t23 += v2 * b15;
        v2 = a[9];
        t9 += v2 * b0;
        t10 += v2 * b1;
        t11 += v2 * b2;
        t12 += v2 * b3;
        t13 += v2 * b4;
        t14 += v2 * b5;
        t15 += v2 * b6;
        t16 += v2 * b7;
        t17 += v2 * b8;
        t18 += v2 * b9;
        t19 += v2 * b10;
        t20 += v2 * b11;
        t21 += v2 * b12;
        t22 += v2 * b13;
        t23 += v2 * b14;
        t24 += v2 * b15;
        v2 = a[10];
        t10 += v2 * b0;
        t11 += v2 * b1;
        t12 += v2 * b2;
        t13 += v2 * b3;
        t14 += v2 * b4;
        t15 += v2 * b5;
        t16 += v2 * b6;
        t17 += v2 * b7;
        t18 += v2 * b8;
        t19 += v2 * b9;
        t20 += v2 * b10;
        t21 += v2 * b11;
        t22 += v2 * b12;
        t23 += v2 * b13;
        t24 += v2 * b14;
        t25 += v2 * b15;
        v2 = a[11];
        t11 += v2 * b0;
        t12 += v2 * b1;
        t13 += v2 * b2;
        t14 += v2 * b3;
        t15 += v2 * b4;
        t16 += v2 * b5;
        t17 += v2 * b6;
        t18 += v2 * b7;
        t19 += v2 * b8;
        t20 += v2 * b9;
        t21 += v2 * b10;
        t22 += v2 * b11;
        t23 += v2 * b12;
        t24 += v2 * b13;
        t25 += v2 * b14;
        t26 += v2 * b15;
        v2 = a[12];
        t12 += v2 * b0;
        t13 += v2 * b1;
        t14 += v2 * b2;
        t15 += v2 * b3;
        t16 += v2 * b4;
        t17 += v2 * b5;
        t18 += v2 * b6;
        t19 += v2 * b7;
        t20 += v2 * b8;
        t21 += v2 * b9;
        t22 += v2 * b10;
        t23 += v2 * b11;
        t24 += v2 * b12;
        t25 += v2 * b13;
        t26 += v2 * b14;
        t27 += v2 * b15;
        v2 = a[13];
        t13 += v2 * b0;
        t14 += v2 * b1;
        t15 += v2 * b2;
        t16 += v2 * b3;
        t17 += v2 * b4;
        t18 += v2 * b5;
        t19 += v2 * b6;
        t20 += v2 * b7;
        t21 += v2 * b8;
        t22 += v2 * b9;
        t23 += v2 * b10;
        t24 += v2 * b11;
        t25 += v2 * b12;
        t26 += v2 * b13;
        t27 += v2 * b14;
        t28 += v2 * b15;
        v2 = a[14];
        t14 += v2 * b0;
        t15 += v2 * b1;
        t16 += v2 * b2;
        t17 += v2 * b3;
        t18 += v2 * b4;
        t19 += v2 * b5;
        t20 += v2 * b6;
        t21 += v2 * b7;
        t22 += v2 * b8;
        t23 += v2 * b9;
        t24 += v2 * b10;
        t25 += v2 * b11;
        t26 += v2 * b12;
        t27 += v2 * b13;
        t28 += v2 * b14;
        t29 += v2 * b15;
        v2 = a[15];
        t15 += v2 * b0;
        t16 += v2 * b1;
        t17 += v2 * b2;
        t18 += v2 * b3;
        t19 += v2 * b4;
        t20 += v2 * b5;
        t21 += v2 * b6;
        t22 += v2 * b7;
        t23 += v2 * b8;
        t24 += v2 * b9;
        t25 += v2 * b10;
        t26 += v2 * b11;
        t27 += v2 * b12;
        t28 += v2 * b13;
        t29 += v2 * b14;
        t30 += v2 * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v2 = t0 + c + 65535;
        c = Math.floor(v2 / 65536);
        t0 = v2 - c * 65536;
        v2 = t1 + c + 65535;
        c = Math.floor(v2 / 65536);
        t1 = v2 - c * 65536;
        v2 = t2 + c + 65535;
        c = Math.floor(v2 / 65536);
        t2 = v2 - c * 65536;
        v2 = t3 + c + 65535;
        c = Math.floor(v2 / 65536);
        t3 = v2 - c * 65536;
        v2 = t4 + c + 65535;
        c = Math.floor(v2 / 65536);
        t4 = v2 - c * 65536;
        v2 = t5 + c + 65535;
        c = Math.floor(v2 / 65536);
        t5 = v2 - c * 65536;
        v2 = t6 + c + 65535;
        c = Math.floor(v2 / 65536);
        t6 = v2 - c * 65536;
        v2 = t7 + c + 65535;
        c = Math.floor(v2 / 65536);
        t7 = v2 - c * 65536;
        v2 = t8 + c + 65535;
        c = Math.floor(v2 / 65536);
        t8 = v2 - c * 65536;
        v2 = t9 + c + 65535;
        c = Math.floor(v2 / 65536);
        t9 = v2 - c * 65536;
        v2 = t10 + c + 65535;
        c = Math.floor(v2 / 65536);
        t10 = v2 - c * 65536;
        v2 = t11 + c + 65535;
        c = Math.floor(v2 / 65536);
        t11 = v2 - c * 65536;
        v2 = t12 + c + 65535;
        c = Math.floor(v2 / 65536);
        t12 = v2 - c * 65536;
        v2 = t13 + c + 65535;
        c = Math.floor(v2 / 65536);
        t13 = v2 - c * 65536;
        v2 = t14 + c + 65535;
        c = Math.floor(v2 / 65536);
        t14 = v2 - c * 65536;
        v2 = t15 + c + 65535;
        c = Math.floor(v2 / 65536);
        t15 = v2 - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v2 = t0 + c + 65535;
        c = Math.floor(v2 / 65536);
        t0 = v2 - c * 65536;
        v2 = t1 + c + 65535;
        c = Math.floor(v2 / 65536);
        t1 = v2 - c * 65536;
        v2 = t2 + c + 65535;
        c = Math.floor(v2 / 65536);
        t2 = v2 - c * 65536;
        v2 = t3 + c + 65535;
        c = Math.floor(v2 / 65536);
        t3 = v2 - c * 65536;
        v2 = t4 + c + 65535;
        c = Math.floor(v2 / 65536);
        t4 = v2 - c * 65536;
        v2 = t5 + c + 65535;
        c = Math.floor(v2 / 65536);
        t5 = v2 - c * 65536;
        v2 = t6 + c + 65535;
        c = Math.floor(v2 / 65536);
        t6 = v2 - c * 65536;
        v2 = t7 + c + 65535;
        c = Math.floor(v2 / 65536);
        t7 = v2 - c * 65536;
        v2 = t8 + c + 65535;
        c = Math.floor(v2 / 65536);
        t8 = v2 - c * 65536;
        v2 = t9 + c + 65535;
        c = Math.floor(v2 / 65536);
        t9 = v2 - c * 65536;
        v2 = t10 + c + 65535;
        c = Math.floor(v2 / 65536);
        t10 = v2 - c * 65536;
        v2 = t11 + c + 65535;
        c = Math.floor(v2 / 65536);
        t11 = v2 - c * 65536;
        v2 = t12 + c + 65535;
        c = Math.floor(v2 / 65536);
        t12 = v2 - c * 65536;
        v2 = t13 + c + 65535;
        c = Math.floor(v2 / 65536);
        t13 = v2 - c * 65536;
        v2 = t14 + c + 65535;
        c = Math.floor(v2 / 65536);
        t14 = v2 - c * 65536;
        v2 = t15 + c + 65535;
        c = Math.floor(v2 / 65536);
        t15 = v2 - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o2[0] = t0;
        o2[1] = t1;
        o2[2] = t2;
        o2[3] = t3;
        o2[4] = t4;
        o2[5] = t5;
        o2[6] = t6;
        o2[7] = t7;
        o2[8] = t8;
        o2[9] = t9;
        o2[10] = t10;
        o2[11] = t11;
        o2[12] = t12;
        o2[13] = t13;
        o2[14] = t14;
        o2[15] = t15;
      }
      function S2(o2, a) {
        M2(o2, a, a);
      }
      function inv25519(o2, i2) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i2[a];
        for (a = 253; a >= 0; a--) {
          S2(c, c);
          if (a !== 2 && a !== 4) M2(c, c, i2);
        }
        for (a = 0; a < 16; a++) o2[a] = c[a];
      }
      function pow2523(o2, i2) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i2[a];
        for (a = 250; a >= 0; a--) {
          S2(c, c);
          if (a !== 1) M2(c, c, i2);
        }
        for (a = 0; a < 16; a++) o2[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x2 = new Float64Array(80), r, i2;
        var a = gf(), b = gf(), c = gf(), d = gf(), e2 = gf(), f = gf();
        for (i2 = 0; i2 < 31; i2++) z[i2] = n[i2];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x2, p);
        for (i2 = 0; i2 < 16; i2++) {
          b[i2] = x2[i2];
          d[i2] = a[i2] = c[i2] = 0;
        }
        a[0] = d[0] = 1;
        for (i2 = 254; i2 >= 0; --i2) {
          r = z[i2 >>> 3] >>> (i2 & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A2(e2, a, c);
          Z(a, a, c);
          A2(c, b, d);
          Z(b, b, d);
          S2(d, e2);
          S2(f, a);
          M2(a, c, a);
          M2(c, b, e2);
          A2(e2, a, c);
          Z(a, a, c);
          S2(b, a);
          Z(c, d, f);
          M2(a, c, _121665);
          A2(a, a, d);
          M2(c, c, a);
          M2(a, d, f);
          M2(d, b, x2);
          S2(b, e2);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i2 = 0; i2 < 16; i2++) {
          x2[i2 + 16] = a[i2];
          x2[i2 + 32] = c[i2];
          x2[i2 + 48] = b[i2];
          x2[i2 + 64] = d[i2];
        }
        var x32 = x2.subarray(32);
        var x16 = x2.subarray(16);
        inv25519(x32, x32);
        M2(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x2) {
        randombytes(x2, 32);
        return crypto_scalarmult_base(y, x2);
      }
      function crypto_box_beforenm(k, y, x2) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x2, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m3, d, n, y, x2) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x2);
        return crypto_box_afternm(c, m3, d, n, k);
      }
      function crypto_box_open(m3, c, d, n, y, x2) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x2);
        return crypto_box_open_afternm(m3, c, d, n, k);
      }
      var K2 = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m3, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i2, j, h2, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i2 = 0; i2 < 16; i2++) {
            j = 8 * i2 + pos;
            wh[i2] = m3[j + 0] << 24 | m3[j + 1] << 16 | m3[j + 2] << 8 | m3[j + 3];
            wl[i2] = m3[j + 4] << 24 | m3[j + 5] << 16 | m3[j + 6] << 8 | m3[j + 7];
          }
          for (i2 = 0; i2 < 80; i2++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h2 = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            h2 = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            h2 = K2[i2 * 2];
            l = K2[i2 * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            h2 = wh[i2 % 16];
            l = wl[i2 % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h2 = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            h2 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h2 = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i2 % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h2 = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h2 & 65535;
                d = h2 >>> 16;
                h2 = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h2 & 65535;
                d += h2 >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h2 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h2 & 65535;
                d += h2 >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h2 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h2 & 65535;
                d += h2 >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h2 = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h2 = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h2 = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h2 = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h2 = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h2 = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h2 = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h2 = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h2 & 65535;
          d = h2 >>> 16;
          h2 = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h2 & 65535;
          d += h2 >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m3, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x2 = new Uint8Array(256), i2, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m3, n);
        n %= 128;
        for (i2 = 0; i2 < n; i2++) x2[i2] = m3[b - n + i2];
        x2[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x2[n - 9] = 0;
        ts64(x2, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x2, n);
        for (i2 = 0; i2 < 8; i2++) ts64(out, 8 * i2, hh[i2], hl[i2]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e2 = gf(), f = gf(), g2 = gf(), h2 = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M2(a, a, t);
        A2(b, p[0], p[1]);
        A2(t, q[0], q[1]);
        M2(b, b, t);
        M2(c, p[3], q[3]);
        M2(c, c, D2);
        M2(d, p[2], q[2]);
        A2(d, d, d);
        Z(e2, b, a);
        Z(f, d, c);
        A2(g2, d, c);
        A2(h2, b, a);
        M2(p[0], e2, f);
        M2(p[1], h2, g2);
        M2(p[2], g2, f);
        M2(p[3], e2, h2);
      }
      function cswap(p, q, b) {
        var i2;
        for (i2 = 0; i2 < 4; i2++) {
          sel25519(p[i2], q[i2], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M2(tx, p[0], zi);
        M2(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i2;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i2 = 255; i2 >= 0; --i2) {
          b = s[i2 / 8 | 0] >> (i2 & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M2(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i2;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i2 = 0; i2 < 32; i2++) sk[i2 + 32] = pk[i2];
        return 0;
      }
      var L2 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x2) {
        var carry, i2, j, k;
        for (i2 = 63; i2 >= 32; --i2) {
          carry = 0;
          for (j = i2 - 32, k = i2 - 12; j < k; ++j) {
            x2[j] += carry - 16 * x2[i2] * L2[j - (i2 - 32)];
            carry = Math.floor((x2[j] + 128) / 256);
            x2[j] -= carry * 256;
          }
          x2[j] += carry;
          x2[i2] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x2[j] += carry - (x2[31] >> 4) * L2[j];
          carry = x2[j] >> 8;
          x2[j] &= 255;
        }
        for (j = 0; j < 32; j++) x2[j] -= carry * L2[j];
        for (i2 = 0; i2 < 32; i2++) {
          x2[i2 + 1] += x2[i2] >> 8;
          r[i2] = x2[i2] & 255;
        }
      }
      function reduce(r) {
        var x2 = new Float64Array(64), i2;
        for (i2 = 0; i2 < 64; i2++) x2[i2] = r[i2];
        for (i2 = 0; i2 < 64; i2++) r[i2] = 0;
        modL(r, x2);
      }
      function crypto_sign(sm, m3, n, sk) {
        var d = new Uint8Array(64), h2 = new Uint8Array(64), r = new Uint8Array(64);
        var i2, j, x2 = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i2 = 0; i2 < n; i2++) sm[64 + i2] = m3[i2];
        for (i2 = 0; i2 < 32; i2++) sm[32 + i2] = d[32 + i2];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i2 = 32; i2 < 64; i2++) sm[i2] = sk[i2];
        crypto_hash(h2, sm, n + 64);
        reduce(h2);
        for (i2 = 0; i2 < 64; i2++) x2[i2] = 0;
        for (i2 = 0; i2 < 32; i2++) x2[i2] = r[i2];
        for (i2 = 0; i2 < 32; i2++) {
          for (j = 0; j < 32; j++) {
            x2[i2 + j] += h2[i2] * d[j];
          }
        }
        modL(sm.subarray(32), x2);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S2(num, r[1]);
        M2(den, num, D);
        Z(num, num, r[2]);
        A2(den, r[2], den);
        S2(den2, den);
        S2(den4, den2);
        M2(den6, den4, den2);
        M2(t, den6, num);
        M2(t, t, den);
        pow2523(t, t);
        M2(t, t, num);
        M2(t, t, den);
        M2(t, t, den);
        M2(r[0], t, den);
        S2(chk, r[0]);
        M2(chk, chk, den);
        if (neq25519(chk, num)) M2(r[0], r[0], I2);
        S2(chk, r[0]);
        M2(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M2(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m3, sm, n, pk) {
        var i2;
        var t = new Uint8Array(32), h2 = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for (i2 = 0; i2 < n; i2++) m3[i2] = sm[i2];
        for (i2 = 0; i2 < 32; i2++) m3[i2 + 32] = pk[i2];
        crypto_hash(h2, m3, n);
        reduce(h2);
        scalarmult(p, q, h2);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i2 = 0; i2 < n; i2++) m3[i2] = 0;
          return -1;
        }
        for (i2 = 0; i2 < n; i2++) m3[i2] = sm[i2 + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl3.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L: L2,
        pack25519,
        unpack25519,
        M: M2,
        A: A2,
        S: S2,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i2 = 0; i2 < arguments.length; i2++) {
          if (!(arguments[i2] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i2 = 0; i2 < arr.length; i2++) arr[i2] = 0;
      }
      nacl3.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl3.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m3 = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m3.length);
        for (var i2 = 0; i2 < msg.length; i2++) m3[i2 + crypto_secretbox_ZEROBYTES] = msg[i2];
        crypto_secretbox(c, m3, m3.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl3.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m3 = new Uint8Array(c.length);
        for (var i2 = 0; i2 < box.length; i2++) c[i2 + crypto_secretbox_BOXZEROBYTES] = box[i2];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m3, c, c.length, nonce, key) !== 0) return null;
        return m3.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl3.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl3.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl3.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl3.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl3.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl3.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl3.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl3.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl3.box.before(publicKey, secretKey);
        return nacl3.secretbox(msg, nonce, k);
      };
      nacl3.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl3.box.after = nacl3.secretbox;
      nacl3.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl3.box.before(publicKey, secretKey);
        return nacl3.secretbox.open(msg, nonce, k);
      };
      nacl3.box.open.after = nacl3.secretbox.open;
      nacl3.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl3.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl3.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl3.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl3.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl3.box.nonceLength = crypto_box_NONCEBYTES;
      nacl3.box.overheadLength = nacl3.secretbox.overheadLength;
      nacl3.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl3.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m3 = new Uint8Array(mlen);
        for (var i2 = 0; i2 < m3.length; i2++) m3[i2] = tmp[i2];
        return m3;
      };
      nacl3.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl3.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i2 = 0; i2 < sig.length; i2++) sig[i2] = signedMsg[i2];
        return sig;
      };
      nacl3.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m3 = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i2;
        for (i2 = 0; i2 < crypto_sign_BYTES; i2++) sm[i2] = sig[i2];
        for (i2 = 0; i2 < msg.length; i2++) sm[i2 + crypto_sign_BYTES] = msg[i2];
        return crypto_sign_open(m3, sm, sm.length, publicKey) >= 0;
      };
      nacl3.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl3.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i2 = 0; i2 < pk.length; i2++) pk[i2] = secretKey[32 + i2];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl3.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i2 = 0; i2 < 32; i2++) sk[i2] = seed[i2];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl3.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl3.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl3.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl3.sign.signatureLength = crypto_sign_BYTES;
      nacl3.hash = function(msg) {
        checkArrayTypes(msg);
        var h2 = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h2, msg, msg.length);
        return h2;
      };
      nacl3.hash.hashLength = crypto_hash_BYTES;
      nacl3.verify = function(x2, y) {
        checkArrayTypes(x2, y);
        if (x2.length === 0 || y.length === 0) return false;
        if (x2.length !== y.length) return false;
        return vn(x2, 0, y, 0, x2.length) === 0 ? true : false;
      };
      nacl3.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto2 && crypto2.getRandomValues) {
          var QUOTA = 65536;
          nacl3.setPRNG(function(x2, n) {
            var i2, v2 = new Uint8Array(n);
            for (i2 = 0; i2 < n; i2 += QUOTA) {
              crypto2.getRandomValues(v2.subarray(i2, i2 + Math.min(n - i2, QUOTA)));
            }
            for (i2 = 0; i2 < n; i2++) x2[i2] = v2[i2];
            cleanup(v2);
          });
        } else if (typeof __require !== "undefined") {
          crypto2 = __require("crypto");
          if (crypto2 && crypto2.randomBytes) {
            nacl3.setPRNG(function(x2, n) {
              var i2, v2 = crypto2.randomBytes(n);
              for (i2 = 0; i2 < n; i2++) x2[i2] = v2[i2];
              cleanup(v2);
            });
          }
        }
      })();
    })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
  }
});

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
          } catch (e2) {
            const { data: data2, transferables: transferables2 } = serializer(e2);
            ev.data[0].postMessage([false, data2], transferables2);
          }
        } catch (e2) {
          console.error("Async error on onmessage handler", e2);
        }
      };
      transferables.add(mc.port2);
      revokables.add(mc.port1);
      return rawResult(rawResultSet, ["_", "_fn", mc.port2]);
    }
    const proto3 = Object.getPrototypeOf(value);
    if (proto3?.constructor?.[serdesTagSymbol] && proto3.constructor[serdesSerializeSymbol]) {
      return rawResult(rawResultSet, ["_", "_custom", proto3.constructor[serdesTagSymbol], proto3.constructor[serdesSerializeSymbol](value)]);
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

// frontend/model/contracts/shared/constants.js
var INVITE_INITIAL_CREATOR = "invite-initial-creator";
var PROFILE_STATUS = {
  ACTIVE: "active",
  // confirmed group join
  PENDING: "pending",
  // shortly after being approved to join the group
  REMOVED: "removed"
};
var PROPOSAL_RESULT = "proposal-result";
var PROPOSAL_INVITE_MEMBER = "invite-member";
var PROPOSAL_REMOVE_MEMBER = "remove-member";
var PROPOSAL_GROUP_SETTING_CHANGE = "group-setting-change";
var PROPOSAL_PROPOSAL_SETTING_CHANGE = "proposal-setting-change";
var PROPOSAL_GENERIC = "generic";
var PROPOSAL_ARCHIVED = "proposal-archived";
var MAX_SAVED_PERIODS = 2;
var MAX_GROUP_MEMBER_COUNT = 150;
var STATUS_OPEN = "open";
var STATUS_PASSED = "passed";
var STATUS_FAILED = "failed";
var STATUS_EXPIRING = "expiring";
var STATUS_EXPIRED = "expired";
var STATUS_CANCELLED = "cancelled";
var GROUP_PERMISSIONS = {
  VIEW_PERMISSIONS: "view-permissions",
  ASSIGN_DELEGATOR: "assign-delegator",
  DELEGATE_PERMISSIONS: "delegate-permissions",
  // add/edit/remove permissions
  REMOVE_MEMBER: "remove-member",
  REVOKE_INVITE: "revoke-invite",
  DELETE_CHANNEL: "delete-channel"
};
var GP = GROUP_PERMISSIONS;
var GROUP_PERMISSIONS_PRESET = {
  ADMIN: [
    GP.VIEW_PERMISSIONS,
    GP.ASSIGN_DELEGATOR,
    GP.DELEGATE_PERMISSIONS,
    GP.REMOVE_MEMBER,
    GP.REVOKE_INVITE,
    GP.DELETE_CHANNEL
  ],
  MODERATOR_DELEGATOR: [
    GP.VIEW_PERMISSIONS,
    GP.DELEGATE_PERMISSIONS,
    GP.REMOVE_MEMBER,
    GP.REVOKE_INVITE,
    GP.DELETE_CHANNEL
  ],
  MODERATOR: [
    GP.VIEW_PERMISSIONS,
    GP.REMOVE_MEMBER,
    GP.REVOKE_INVITE,
    GP.DELETE_CHANNEL
  ]
};
var CHATROOM_MEMBER_MENTION_SPECIAL_CHAR = "@";
var CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR = "#";
var MESSAGE_RECEIVE_RAW = "message-receive-raw";
var MESSAGE_RECEIVE = "message-receive";
var MESSAGE_SEND = "message-send";
var CHATROOM_TYPES = {
  DIRECT_MESSAGE: "direct-message",
  GROUP: "group"
};
var CHATROOM_PRIVACY_LEVEL = {
  GROUP: "group",
  PRIVATE: "private",
  PUBLIC: "public"
};
var MESSAGE_TYPES = {
  POLL: "poll",
  TEXT: "text",
  INTERACTIVE: "interactive",
  NOTIFICATION: "notification"
};
var INVITE_EXPIRES_IN_DAYS = {
  ON_BOARDING: null,
  // No expiration
  PROPOSAL: 7
};
var MESSAGE_NOTIFY_SETTINGS = {
  ALL_MESSAGES: "all-messages",
  DIRECT_MESSAGES: "direct-messages",
  NOTHING: "nothing"
};

// frontend/common/common.js
var common_exports = {};
__export(common_exports, {
  Errors: () => errors_exports,
  GIErrorIgnoreAndBan: () => GIErrorIgnoreAndBan,
  GIErrorMissingSigningKeyError: () => GIErrorMissingSigningKeyError,
  GIErrorUIRuntimeError: () => GIErrorUIRuntimeError,
  L: () => L,
  LError: () => LError,
  LTags: () => LTags
});

// node_modules/@sbp/sbp/dist/esm/index.js
var selectors = /* @__PURE__ */ Object.create(null);
var domains = /* @__PURE__ */ Object.create(null);
var globalFilters = [];
var domainFilters = /* @__PURE__ */ Object.create(null);
var selectorFilters = /* @__PURE__ */ Object.create(null);
var unsafeSelectors = /* @__PURE__ */ Object.create(null);
var DOMAIN_REGEX = /^[^/]+/;
function sbp(selector, ...data) {
  const domain = domainFromSelector(selector);
  const starSelector = `${domain}/*`;
  const selExists = !!selectors[selector];
  let sel = selector;
  if (!selExists) {
    if (selectors[starSelector]) {
      sel = starSelector;
    } else {
      throw new Error(`SBP: selector not registered: ${selector}`);
    }
  }
  for (const filters of [selectorFilters[selector], domainFilters[domain], globalFilters]) {
    if (filters) {
      for (const filter of filters) {
        if (filter(domain, selector, data) === false)
          return;
      }
    }
  }
  if (!selExists) {
    data.unshift(selector);
  }
  return selectors[sel].apply(domains[domain].state, data);
}
function domainFromSelector(selector) {
  const domainLookup = DOMAIN_REGEX.exec(selector);
  if (domainLookup === null) {
    throw new Error(`SBP: selector missing domain: ${selector}`);
  }
  return domainLookup[0];
}
var SBP_BASE_SELECTORS = {
  "sbp/selectors/register": (sels) => {
    const registered = [];
    for (const selector in sels) {
      const domainName = domainFromSelector(selector);
      const domain = domainName in domains ? domains[domainName] : domains[domainName] = { state: /* @__PURE__ */ Object.create(null), locked: false };
      if (domain.locked) {
        (console.warn || console.log)(`[SBP WARN]: not registering selector on locked domain: '${selector}'`);
      } else if (selectors[selector]) {
        (console.warn || console.log)(`[SBP WARN]: not registering already registered selector: '${selector}'`);
      } else if (typeof sels[selector] === "function") {
        if (unsafeSelectors[selector]) {
          (console.warn || console.log)(`[SBP WARN]: registering unsafe selector: '${selector}' (remember to lock after overwriting)`);
        }
        const fn = selectors[selector] = sels[selector];
        registered.push(selector);
        if (selector === `${domainName}/_init`) {
          fn.call(domain.state);
        }
      }
    }
    return registered;
  },
  "sbp/selectors/unregister": (sels) => {
    var _a2;
    for (const selector of sels) {
      if (!unsafeSelectors[selector]) {
        throw new Error(`SBP: can't unregister locked selector: ${selector}`);
      }
      if ((_a2 = domains[domainFromSelector(selector)]) === null || _a2 === void 0 ? void 0 : _a2.locked) {
        throw new Error(`SBP: can't unregister selector on a locked domain: '${selector}'`);
      }
      delete selectors[selector];
    }
  },
  "sbp/selectors/overwrite": (sels) => {
    sbp("sbp/selectors/unregister", Object.keys(sels));
    return sbp("sbp/selectors/register", sels);
  },
  "sbp/selectors/unsafe": (sels) => {
    for (const selector of sels) {
      if (selectors[selector]) {
        throw new Error("unsafe must be called before registering selector");
      }
      unsafeSelectors[selector] = true;
    }
  },
  "sbp/selectors/lock": (sels) => {
    for (const selector of sels) {
      delete unsafeSelectors[selector];
    }
  },
  "sbp/selectors/fn": (sel) => {
    return selectors[sel];
  },
  "sbp/filters/global/add": (filter) => {
    globalFilters.push(filter);
  },
  "sbp/filters/domain/add": (domain, filter) => {
    if (!domainFilters[domain])
      domainFilters[domain] = [];
    domainFilters[domain].push(filter);
  },
  "sbp/filters/selector/add": (selector, filter) => {
    if (!selectorFilters[selector])
      selectorFilters[selector] = [];
    selectorFilters[selector].push(filter);
  },
  "sbp/domains/lock": (domainNames) => {
    if (!domainNames) {
      for (const name in domains) {
        domains[name].locked = true;
      }
    } else {
      for (const name of domainNames) {
        if (!domains[name]) {
          throw new Error(`SBP: cannot lock non-existent domain: ${name}`);
        }
        domains[name].locked = true;
      }
    }
  }
};
SBP_BASE_SELECTORS["sbp/selectors/register"](SBP_BASE_SELECTORS);
var esm_default = sbp;

// frontend/common/stringTemplate.js
var nargs = /\{([0-9a-zA-Z_]+)\}/g;
function template(string3, ...args) {
  const firstArg = args[0];
  const replacementsByKey = typeof firstArg === "object" && firstArg !== null ? firstArg : args;
  return string3.replace(nargs, function replaceArg(match, capture, index) {
    if (string3[index - 1] === "{" && string3[index + match.length] === "}") {
      return capture;
    }
    const maybeReplacement = (
      // Avoid accessing inherited properties of the replacement table.
      // $FlowFixMe
      Object.prototype.hasOwnProperty.call(replacementsByKey, capture) ? replacementsByKey[capture] : void 0
    );
    if (maybeReplacement === null || maybeReplacement === void 0) {
      return "";
    }
    return String(maybeReplacement);
  });
}

// frontend/common/translations.js
var defaultLanguage = "en-US";
var defaultLanguageCode = "en";
var defaultTranslationTable = {};
var currentLanguage = defaultLanguage;
var currentLanguageCode = defaultLanguage.split("-")[0];
var currentTranslationTable = defaultTranslationTable;
var translations_default = esm_default("sbp/selectors/register", {
  "translations/init": async function init(language) {
    const [languageCode] = language.toLowerCase().split("-");
    if (language.toLowerCase() === currentLanguage.toLowerCase()) return;
    if (languageCode === currentLanguageCode) return;
    if (languageCode === defaultLanguageCode) {
      currentLanguage = defaultLanguage;
      currentLanguageCode = defaultLanguageCode;
      currentTranslationTable = defaultTranslationTable;
      return;
    }
    try {
      currentTranslationTable = await esm_default("backend/translations/get", language) || defaultTranslationTable;
      currentLanguage = language;
      currentLanguageCode = languageCode;
    } catch (error) {
      console.error(error);
    }
  }
});
function LTags(...tags) {
  const o2 = {
    "br_": "<br/>"
  };
  for (const tag2 of tags) {
    o2[`${tag2}_`] = `<${tag2}>`;
    o2[`_${tag2}`] = `</${tag2}>`;
  }
  return o2;
}
function L(key, args) {
  return template(currentTranslationTable[key] || key, args).replace(/\s(?=[;:?!])/g, "\xA0");
}
function LError(error, toGithub) {
  let url = "https://github.com/okTurtles/group-income/issues";
  if (!toGithub && esm_default("state/vuex/state").loggedIn) {
    const baseRoute = esm_default("controller/router").options.base;
    url = `${baseRoute}?modal=UserSettingsModal&tab=application-logs&errorMsg=${encodeURIComponent(error.message)}`;
  }
  return {
    reportError: L('"{errorMsg}". You can {a_}report the error{_a}.', {
      errorMsg: error.message,
      "a_": `<a class="link" target="_blank" href="${url}">`,
      "_a": "</a>"
    })
  };
}

// frontend/common/errors.js
var errors_exports = {};
__export(errors_exports, {
  GIErrorIgnoreAndBan: () => GIErrorIgnoreAndBan,
  GIErrorMissingSigningKeyError: () => GIErrorMissingSigningKeyError,
  GIErrorUIRuntimeError: () => GIErrorUIRuntimeError
});

// node_modules/@chelonia/lib/dist/esm/errors.mjs
var ChelErrorGenerator = (name, base2 = Error) => class extends base2 {
  constructor(...params) {
    super(...params);
    this.name = name;
    if (params[1]?.cause !== this.cause) {
      Object.defineProperty(this, "cause", {
        configurable: true,
        writable: true,
        value: params[1]?.cause
      });
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var ChelErrorWarning = ChelErrorGenerator("ChelErrorWarning");
var ChelErrorAlreadyProcessed = ChelErrorGenerator("ChelErrorAlreadyProcessed");
var ChelErrorDBBadPreviousHEAD = ChelErrorGenerator("ChelErrorDBBadPreviousHEAD");
var ChelErrorDBConnection = ChelErrorGenerator("ChelErrorDBConnection");
var ChelErrorUnexpected = ChelErrorGenerator("ChelErrorUnexpected");
var ChelErrorKeyAlreadyExists = ChelErrorGenerator("ChelErrorKeyAlreadyExists");
var ChelErrorUnrecoverable = ChelErrorGenerator("ChelErrorUnrecoverable");
var ChelErrorForkedChain = ChelErrorGenerator("ChelErrorForkedChain");
var ChelErrorDecryptionError = ChelErrorGenerator("ChelErrorDecryptionError");
var ChelErrorDecryptionKeyNotFound = ChelErrorGenerator("ChelErrorDecryptionKeyNotFound", ChelErrorDecryptionError);
var ChelErrorSignatureError = ChelErrorGenerator("ChelErrorSignatureError");
var ChelErrorSignatureKeyUnauthorized = ChelErrorGenerator("ChelErrorSignatureKeyUnauthorized", ChelErrorSignatureError);
var ChelErrorSignatureKeyNotFound = ChelErrorGenerator("ChelErrorSignatureKeyNotFound", ChelErrorSignatureError);
var ChelErrorFetchServerTimeFailed = ChelErrorGenerator("ChelErrorFetchServerTimeFailed");
var ChelErrorUnexpectedHttpResponseCode = ChelErrorGenerator("ChelErrorUnexpectedHttpResponseCode");
var ChelErrorResourceGone = ChelErrorGenerator("ChelErrorResourceGone", ChelErrorUnexpectedHttpResponseCode);

// frontend/common/errors.js
var GIErrorIgnoreAndBan = ChelErrorGenerator("GIErrorIgnoreAndBan");
var GIErrorUIRuntimeError = ChelErrorGenerator("GIErrorUIRuntimeError");
var GIErrorMissingSigningKeyError = ChelErrorGenerator("GIErrorMissingSigningKeyError");

// frontend/model/contracts/shared/time.js
var MINS_MILLIS = 6e4;
var HOURS_MILLIS = 60 * MINS_MILLIS;
var DAYS_MILLIS = 24 * HOURS_MILLIS;
var MONTHS_MILLIS = 30 * DAYS_MILLIS;
var YEARS_MILLIS = 365 * DAYS_MILLIS;
var plusOnePeriodLength = (timestamp, periodLength) => dateToPeriodStamp(addTimeToDate(timestamp, periodLength));
var minusOnePeriodLength = (timestamp, periodLength) => dateToPeriodStamp(addTimeToDate(timestamp, -periodLength));
function periodStampsForDate(date, { knownSortedStamps, periodLength, guess }) {
  if (!(isIsoString(date) || Object.prototype.toString.call(date) === "[object Date]")) {
    throw new TypeError("must be ISO string or Date object");
  }
  const timestamp = typeof date === "string" ? date : date.toISOString();
  let previous, current, next;
  if (knownSortedStamps.length) {
    const latest = knownSortedStamps[knownSortedStamps.length - 1];
    const earliest = knownSortedStamps[0];
    if (timestamp >= latest) {
      current = periodStampGivenDate({ recentDate: timestamp, periodStart: latest, periodLength });
      next = plusOnePeriodLength(current, periodLength);
      previous = current > latest ? minusOnePeriodLength(current, periodLength) : knownSortedStamps[knownSortedStamps.length - 2];
    } else if (guess && timestamp < earliest) {
      current = periodStampGivenDate({ recentDate: timestamp, periodStart: earliest, periodLength });
      next = plusOnePeriodLength(current, periodLength);
      previous = minusOnePeriodLength(current, periodLength);
    } else {
      for (let i2 = knownSortedStamps.length - 2; i2 >= 0; i2--) {
        if (timestamp >= knownSortedStamps[i2]) {
          current = knownSortedStamps[i2];
          next = knownSortedStamps[i2 + 1];
          previous = i2 > 0 ? knownSortedStamps[i2 - 1] : guess ? minusOnePeriodLength(current, periodLength) : void 0;
          break;
        }
      }
    }
  }
  return { previous, current, next };
}
function dateToPeriodStamp(date) {
  return new Date(date).toISOString();
}
function dateFromPeriodStamp(daystamp) {
  return new Date(daystamp);
}
function periodStampGivenDate({ recentDate, periodStart, periodLength }) {
  const periodStartDate = dateFromPeriodStamp(periodStart);
  let nextPeriod = addTimeToDate(periodStartDate, periodLength);
  const curDate = new Date(recentDate);
  let curPeriod;
  if (curDate < nextPeriod) {
    if (curDate >= periodStartDate) {
      return periodStart;
    } else {
      curPeriod = periodStartDate;
      do {
        curPeriod = addTimeToDate(curPeriod, -periodLength);
      } while (curDate < curPeriod);
    }
  } else {
    do {
      curPeriod = nextPeriod;
      nextPeriod = addTimeToDate(nextPeriod, periodLength);
    } while (curDate >= nextPeriod);
  }
  return dateToPeriodStamp(curPeriod);
}
function dateIsWithinPeriod({ date, periodStart, periodLength }) {
  const dateObj = new Date(date);
  const start = dateFromPeriodStamp(periodStart);
  return dateObj > start && dateObj < addTimeToDate(start, periodLength);
}
function addTimeToDate(date, timeMillis) {
  const d = new Date(date);
  d.setTime(d.getTime() + timeMillis);
  return d;
}
function comparePeriodStamps(periodA, periodB) {
  return dateFromPeriodStamp(periodA).getTime() - dateFromPeriodStamp(periodB).getTime();
}
function getLocale() {
  const fallback = "en-US-POSIX";
  return typeof navigator === "undefined" ? fallback : navigator.languages ?? navigator.language ?? fallback;
}
function humanDate(date, options = { month: "short", day: "numeric" }) {
  const dateObj = new Date(date);
  const locale = getLocale();
  if (!isNaN(dateObj.valueOf())) return dateObj.toLocaleDateString(locale, options);
  return "";
}
function isIsoString(arg) {
  return typeof arg === "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(arg);
}

// frontend/model/contracts/misc/flowTyper.js
var EMPTY_VALUE = Symbol("@@empty");
var isEmpty = (v2) => v2 === EMPTY_VALUE;
var isNil = (v2) => v2 === null;
var isUndef = (v2) => typeof v2 === "undefined";
var isBoolean = (v2) => typeof v2 === "boolean";
var isNumber = (v2) => typeof v2 === "number";
var isString = (v2) => typeof v2 === "string";
var isObject = (v2) => !isNil(v2) && typeof v2 === "object";
var isFunction = (v2) => typeof v2 === "function";
var getType = (typeFn, _options) => {
  if (isFunction(typeFn.type)) return typeFn.type(_options);
  return typeFn.name || "?";
};
var TypeValidatorError = class _TypeValidatorError extends Error {
  expectedType;
  valueType;
  value;
  typeScope;
  sourceFile;
  constructor(message, expectedType, valueType, value, typeName = "", typeScope = "") {
    const errMessage = message || `invalid "${valueType}" value type; ${typeName || expectedType} type expected`;
    super(errMessage);
    this.expectedType = expectedType;
    this.valueType = valueType;
    this.value = value;
    this.typeScope = typeScope || "";
    this.sourceFile = this.getSourceFile();
    this.message = `${errMessage}
${this.getErrorInfo()}`;
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _TypeValidatorError);
    }
  }
  getSourceFile() {
    const fileNames = this.stack.match(/(\/[\w_\-.]+)+(\.\w+:\d+:\d+)/g) || [];
    return fileNames.find((fileName) => fileName.indexOf("/flowTyper-js/dist/") === -1) || "";
  }
  getErrorInfo() {
    return `
    file     ${this.sourceFile}
    scope    ${this.typeScope}
    expected ${this.expectedType.replace(/\n/g, "")}
    type     ${this.valueType}
    value    ${this.value}
`;
  }
};
var validatorError = (typeFn, value, scope, message, expectedType, valueType) => {
  return new TypeValidatorError(
    message,
    expectedType || getType(typeFn),
    valueType || typeof value,
    JSON.stringify(value),
    typeFn.name,
    scope
  );
};
var literalOf = (primitive) => {
  function literal(value, _scope = "") {
    if (isEmpty(value) || value === primitive) return primitive;
    throw validatorError(literal, value, _scope);
  }
  literal.type = () => {
    if (isBoolean(primitive)) return `${primitive ? "true" : "false"}`;
    else return `"${primitive}"`;
  };
  return literal;
};
var object = function(value) {
  if (isEmpty(value)) return {};
  if (isObject(value) && !Array.isArray(value)) {
    return Object.assign({}, value);
  }
  throw validatorError(object, value);
};
var objectOf = (typeObj, _scope = "Object") => {
  function object2(value) {
    const o2 = object(value);
    const typeAttrs = Object.keys(typeObj);
    const unknownAttr = Object.keys(o2).find((attr) => !typeAttrs.includes(attr));
    if (unknownAttr) {
      throw validatorError(
        object2,
        value,
        _scope,
        `missing object property '${unknownAttr}' in ${_scope} type`
      );
    }
    const undefAttr = typeAttrs.find((property) => {
      const propertyTypeFn = typeObj[property];
      return propertyTypeFn.name.includes("maybe") && !o2.hasOwnProperty(property);
    });
    if (undefAttr) {
      throw validatorError(
        object2,
        o2[undefAttr],
        `${_scope}.${undefAttr}`,
        `empty object property '${undefAttr}' for ${_scope} type`,
        `void | null | ${getType(typeObj[undefAttr]).substr(1)}`,
        "-"
      );
    }
    const reducer2 = isEmpty(value) ? (acc, key) => Object.assign(acc, { [key]: typeObj[key](value) }) : (acc, key) => {
      const typeFn = typeObj[key];
      if (typeFn.name.includes("optional") && !o2.hasOwnProperty(key)) {
        return Object.assign(acc, {});
      } else {
        return Object.assign(acc, { [key]: typeFn(o2[key], `${_scope}.${key}`) });
      }
    };
    return typeAttrs.reduce(reducer2, {});
  }
  object2.type = () => {
    const props = Object.keys(typeObj).map(
      (key) => {
        const ret = typeObj[key].name.includes("optional") ? `${key}?: ${getType(typeObj[key], { noVoid: true })}` : `${key}: ${getType(typeObj[key])}`;
        return ret;
      }
    );
    return `{|
 ${props.join(",\n  ")} 
|}`;
  };
  return object2;
};
function undef(value, _scope = "") {
  if (isEmpty(value) || isUndef(value)) return void 0;
  throw validatorError(undef, value, _scope);
}
undef.type = () => "void";
var number = function number2(value, _scope = "") {
  if (isEmpty(value)) return 0;
  if (isNumber(value)) return value;
  throw validatorError(number2, value, _scope);
};
var string = function string2(value, _scope = "") {
  if (isEmpty(value)) return "";
  if (isString(value)) return value;
  throw validatorError(string2, value, _scope);
};
function unionOf_(...typeFuncs) {
  function union2(value, _scope = "") {
    for (const typeFn of typeFuncs) {
      try {
        return typeFn(value, _scope);
      } catch (_) {
      }
    }
    throw validatorError(union2, value, _scope);
  }
  union2.type = () => `(${typeFuncs.map((fn) => getType(fn)).join(" | ")})`;
  return union2;
}
var unionOf = unionOf_;

// frontend/model/notifications/periodicNotifications.js
var shortestDelay;
var PERIODIC_NOTIFICATION_TYPE = {
  MIN1: "1MIN",
  MIN5: "5MIN",
  MIN15: "15MIN",
  MIN30: "30MIN"
};
var ephemeralNotificationState = {
  notifications: [],
  partition: /* @__PURE__ */ Object.create(null)
};
var typeToDelayMap = {
  [PERIODIC_NOTIFICATION_TYPE.MIN1]: 1 * MINS_MILLIS,
  [PERIODIC_NOTIFICATION_TYPE.MIN5]: 5 * MINS_MILLIS,
  [PERIODIC_NOTIFICATION_TYPE.MIN15]: 15 * MINS_MILLIS,
  [PERIODIC_NOTIFICATION_TYPE.MIN30]: 30 * MINS_MILLIS
};
var validateNotificationData = objectOf({
  stateKey: (value) => {
    value = string(value);
    if (value.length === 0) {
      throw new TypeError("Empty notification data state key");
    }
    return value;
  },
  emitCondition: isFunction,
  emit: isFunction,
  shouldClearStateKey: isFunction
});
async function runNotificationListRecursive() {
  const rootState = esm_default("state/vuex/state");
  const rootGetters = esm_default("state/vuex/getters");
  const firedMap = rootState.periodicNotificationAlreadyFiredMap.alreadyFired;
  const lastRunMap = rootState.periodicNotificationAlreadyFiredMap.lastRun;
  const callWithStates = (func, stateKey) => func.call(ephemeralNotificationState.partition[stateKey], { rootState, rootGetters });
  if (ephemeralNotificationState.clearTimeout) return;
  let aborted = false;
  const abort = () => {
    aborted = true;
  };
  ephemeralNotificationState.clearTimeout = abort;
  await Promise.all(
    Object.entries(esm_default("okTurtles.eventQueue/queuedInvocations")).map(([queue, invocations]) => {
      return !!invocations.length && esm_default("okTurtles.eventQueue/queueEvent", queue, () => {
      }).catch(() => {
      });
    })
  );
  for (const entry of ephemeralNotificationState.notifications) {
    if (aborted) break;
    const stateKey = entry.stateKey;
    const lastRun = lastRunMap[stateKey] || 0;
    const delay2 = entry.delay;
    if (Date.now() - lastRun >= delay2) {
      try {
        if (!firedMap[stateKey] && callWithStates(entry.emitCondition, stateKey)) {
          await callWithStates(entry.emit, stateKey);
          firedMap[stateKey] = true;
        }
        if (firedMap[stateKey] && callWithStates(entry.shouldClearStateKey, stateKey)) {
          delete firedMap[stateKey];
        }
      } catch (e2) {
        console.error("runNotificationListRecursive: Error calling notification", stateKey, e2);
      }
      lastRunMap[stateKey] = Date.now();
    }
  }
  if (ephemeralNotificationState.clearTimeout !== abort) return;
  ephemeralNotificationState.clearTimeout = (() => {
    const timeoutId = setTimeout(
      () => {
        delete ephemeralNotificationState.clearTimeout;
        runNotificationListRecursive();
      },
      shortestDelay
    );
    return () => clearTimeout(timeoutId);
  })();
}
function clearTimeoutObject() {
  if (ephemeralNotificationState.clearTimeout) {
    ephemeralNotificationState.clearTimeout();
    delete ephemeralNotificationState.clearTimeout;
  }
  ephemeralNotificationState.notifications.forEach(({ stateKey }) => {
    ephemeralNotificationState.partition[stateKey] = /* @__PURE__ */ Object.create(null);
  });
}
esm_default("sbp/selectors/register", {
  "gi.periodicNotifications/init": function() {
    return runNotificationListRecursive().catch((e2) => {
      console.error("[gi.periodicNotifications/init] Error", e2);
    });
  },
  "gi.periodicNotifications/clearStatesAndStopTimers": function() {
    const rootState = esm_default("state/vuex/state");
    rootState.periodicNotificationAlreadyFiredMap = {
      alreadyFired: /* @__PURE__ */ Object.create(null),
      // { notificationKey: boolean },
      lastRun: /* @__PURE__ */ Object.create(null)
      // { notificationKey: number },
    };
    clearTimeoutObject();
  },
  "gi.periodicNotifications/importNotifications": function(entries) {
    const keySet = /* @__PURE__ */ new Set();
    for (const { type, notificationData } of entries) {
      if (!type || !notificationData) throw new Error("A required field in a periodic notification entry is missing.");
      const delay2 = typeToDelayMap[type];
      if (!delay2) {
        throw new RangeError("Invalid delay");
      }
      if (!(shortestDelay <= delay2)) shortestDelay = delay2;
      validateNotificationData(notificationData);
      if (keySet.has(notificationData.stateKey)) {
        throw new Error("Duplicate periodic notification state key: " + notificationData.stateKey);
      }
      keySet.add(notificationData.stateKey);
      ephemeralNotificationState.partition[notificationData.stateKey] = /* @__PURE__ */ Object.create(null);
      ephemeralNotificationState.notifications.push({
        ...notificationData,
        delay: delay2
      });
    }
  }
});

// frontend/model/notifications/storageConstants.js
var MAX_AGE_READ = 60 * DAYS_MILLIS;
var MAX_AGE_UNREAD = 180 * DAYS_MILLIS;

// node_modules/@chelonia/multiformats/dist/esm/bytes.mjs
var empty = new Uint8Array(0);
function equals(aa, bb) {
  if (aa === bb) {
    return true;
  }
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
}
function coerce(o2) {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array") {
    return o2;
  }
  if (o2 instanceof ArrayBuffer) {
    return new Uint8Array(o2);
  }
  if (ArrayBuffer.isView(o2)) {
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
}

// node_modules/@chelonia/multiformats/dist/esm/base-x.mjs
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x2 = ALPHABET.charAt(i2);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode3(source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length2) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i3;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length2) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i3;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode5(string3) {
    var buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode3,
    decodeUnsafe,
    decode: decode5
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/@chelonia/multiformats/dist/esm/bases/base.mjs
var Encoder = class {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder != null) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
function or(left, right) {
  var _a2, _b;
  return new ComposedDecoder(Object.assign(Object.assign({}, (_a2 = left.decoders) !== null && _a2 !== void 0 ? _a2 : { [left.prefix]: left }), (_b = right.decoders) !== null && _b !== void 0 ? _b : { [right.prefix]: right }));
}
var Codec = class {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
function from({ name, prefix, encode: encode3, decode: decode5 }) {
  return new Codec(name, prefix, encode3, decode5);
}
function baseX({ name, prefix, alphabet }) {
  const { encode: encode3, decode: decode5 } = base_x_default(alphabet, name);
  return from({
    prefix,
    name,
    encode: encode3,
    decode: (text) => coerce(decode5(text))
  });
}
function decode(string3, alphabet, bitsPerChar, name) {
  const codes = {};
  for (let i2 = 0; i2 < alphabet.length; ++i2) {
    codes[alphabet[i2]] = i2;
  }
  let end = string3.length;
  while (string3[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end; ++i2) {
    const value = codes[string3[i2]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || (255 & buffer << 8 - bits) !== 0) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
}
function encode(data, alphabet, bitsPerChar) {
  const pad = alphabet[alphabet.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits !== 0) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while ((out.length * bitsPerChar & 7) !== 0) {
      out += "=";
    }
  }
  return out;
}
function rfc4648({ name, prefix, bitsPerChar, alphabet }) {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
}

// node_modules/@chelonia/multiformats/dist/esm/bases/base58.mjs
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/@chelonia/multiformats/dist/esm/blake2b.mjs
var import_blakejs = __toESM(require_blakejs(), 1);

// node_modules/@chelonia/multiformats/dist/esm/vendor/varint.mjs
var encode_1 = encode2;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode2(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode2.bytes = offset - oldOffset + 1;
  return out;
}
var decode2 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode2,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/@chelonia/multiformats/dist/esm/varint.mjs
function decode3(data, offset = 0) {
  const code = varint_default.decode(data, offset);
  return [code, varint_default.decode.bytes];
}
function encodeTo(int, target, offset = 0) {
  varint_default.encode(int, target, offset);
  return target;
}
function encodingLength(int) {
  return varint_default.encodingLength(int);
}

// node_modules/@chelonia/multiformats/dist/esm/hashes/digest.mjs
function create(code, digest) {
  const size = digest.byteLength;
  const sizeOffset = encodingLength(code);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
}
function decode4(multihash) {
  const bytes = coerce(multihash);
  const [code, sizeOffset] = decode3(bytes);
  const [size, digestOffset] = decode3(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code, size, digest, bytes);
}
function equals2(a, b) {
  if (a === b) {
    return true;
  } else {
    const data = b;
    return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals(a.bytes, data.bytes);
  }
}
var Digest = class {
  /**
   * Creates a multihash digest.
   */
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
};

// node_modules/@chelonia/multiformats/dist/esm/hasher.mjs
function from2({ name, code, encode: encode3 }) {
  return new Hasher(name, code, encode3);
}
var Hasher = class {
  constructor(name, code, encode3) {
    this.name = name;
    this.code = code;
    this.encode = encode3;
  }
  digest(input) {
    if (input instanceof Uint8Array || input instanceof ReadableStream) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest) => create(this.code, digest));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/@chelonia/multiformats/dist/esm/blake2b.mjs
var { blake2b } = import_blakejs.default;
var blake2b8 = from2({
  name: "blake2b-8",
  code: 45569,
  encode: (input) => coerce(blake2b(input, void 0, 1))
});
var blake2b16 = from2({
  name: "blake2b-16",
  code: 45570,
  encode: (input) => coerce(blake2b(input, void 0, 2))
});
var blake2b24 = from2({
  name: "blake2b-24",
  code: 45571,
  encode: (input) => coerce(blake2b(input, void 0, 3))
});
var blake2b32 = from2({
  name: "blake2b-32",
  code: 45572,
  encode: (input) => coerce(blake2b(input, void 0, 4))
});
var blake2b40 = from2({
  name: "blake2b-40",
  code: 45573,
  encode: (input) => coerce(blake2b(input, void 0, 5))
});
var blake2b48 = from2({
  name: "blake2b-48",
  code: 45574,
  encode: (input) => coerce(blake2b(input, void 0, 6))
});
var blake2b56 = from2({
  name: "blake2b-56",
  code: 45575,
  encode: (input) => coerce(blake2b(input, void 0, 7))
});
var blake2b64 = from2({
  name: "blake2b-64",
  code: 45576,
  encode: (input) => coerce(blake2b(input, void 0, 8))
});
var blake2b72 = from2({
  name: "blake2b-72",
  code: 45577,
  encode: (input) => coerce(blake2b(input, void 0, 9))
});
var blake2b80 = from2({
  name: "blake2b-80",
  code: 45578,
  encode: (input) => coerce(blake2b(input, void 0, 10))
});
var blake2b88 = from2({
  name: "blake2b-88",
  code: 45579,
  encode: (input) => coerce(blake2b(input, void 0, 11))
});
var blake2b96 = from2({
  name: "blake2b-96",
  code: 45580,
  encode: (input) => coerce(blake2b(input, void 0, 12))
});
var blake2b104 = from2({
  name: "blake2b-104",
  code: 45581,
  encode: (input) => coerce(blake2b(input, void 0, 13))
});
var blake2b112 = from2({
  name: "blake2b-112",
  code: 45582,
  encode: (input) => coerce(blake2b(input, void 0, 14))
});
var blake2b120 = from2({
  name: "blake2b-120",
  code: 45583,
  encode: (input) => coerce(blake2b(input, void 0, 15))
});
var blake2b128 = from2({
  name: "blake2b-128",
  code: 45584,
  encode: (input) => coerce(blake2b(input, void 0, 16))
});
var blake2b136 = from2({
  name: "blake2b-136",
  code: 45585,
  encode: (input) => coerce(blake2b(input, void 0, 17))
});
var blake2b144 = from2({
  name: "blake2b-144",
  code: 45586,
  encode: (input) => coerce(blake2b(input, void 0, 18))
});
var blake2b152 = from2({
  name: "blake2b-152",
  code: 45587,
  encode: (input) => coerce(blake2b(input, void 0, 19))
});
var blake2b160 = from2({
  name: "blake2b-160",
  code: 45588,
  encode: (input) => coerce(blake2b(input, void 0, 20))
});
var blake2b168 = from2({
  name: "blake2b-168",
  code: 45589,
  encode: (input) => coerce(blake2b(input, void 0, 21))
});
var blake2b176 = from2({
  name: "blake2b-176",
  code: 45590,
  encode: (input) => coerce(blake2b(input, void 0, 22))
});
var blake2b184 = from2({
  name: "blake2b-184",
  code: 45591,
  encode: (input) => coerce(blake2b(input, void 0, 23))
});
var blake2b192 = from2({
  name: "blake2b-192",
  code: 45592,
  encode: (input) => coerce(blake2b(input, void 0, 24))
});
var blake2b200 = from2({
  name: "blake2b-200",
  code: 45593,
  encode: (input) => coerce(blake2b(input, void 0, 25))
});
var blake2b208 = from2({
  name: "blake2b-208",
  code: 45594,
  encode: (input) => coerce(blake2b(input, void 0, 26))
});
var blake2b216 = from2({
  name: "blake2b-216",
  code: 45595,
  encode: (input) => coerce(blake2b(input, void 0, 27))
});
var blake2b224 = from2({
  name: "blake2b-224",
  code: 45596,
  encode: (input) => coerce(blake2b(input, void 0, 28))
});
var blake2b232 = from2({
  name: "blake2b-232",
  code: 45597,
  encode: (input) => coerce(blake2b(input, void 0, 29))
});
var blake2b240 = from2({
  name: "blake2b-240",
  code: 45598,
  encode: (input) => coerce(blake2b(input, void 0, 30))
});
var blake2b248 = from2({
  name: "blake2b-248",
  code: 45599,
  encode: (input) => coerce(blake2b(input, void 0, 31))
});
var blake2b256 = from2({
  name: "blake2b-256",
  code: 45600,
  encode: (input) => coerce(blake2b(input, void 0, 32))
});
var blake2b264 = from2({
  name: "blake2b-264",
  code: 45601,
  encode: (input) => coerce(blake2b(input, void 0, 33))
});
var blake2b272 = from2({
  name: "blake2b-272",
  code: 45602,
  encode: (input) => coerce(blake2b(input, void 0, 34))
});
var blake2b280 = from2({
  name: "blake2b-280",
  code: 45603,
  encode: (input) => coerce(blake2b(input, void 0, 35))
});
var blake2b288 = from2({
  name: "blake2b-288",
  code: 45604,
  encode: (input) => coerce(blake2b(input, void 0, 36))
});
var blake2b296 = from2({
  name: "blake2b-296",
  code: 45605,
  encode: (input) => coerce(blake2b(input, void 0, 37))
});
var blake2b304 = from2({
  name: "blake2b-304",
  code: 45606,
  encode: (input) => coerce(blake2b(input, void 0, 38))
});
var blake2b312 = from2({
  name: "blake2b-312",
  code: 45607,
  encode: (input) => coerce(blake2b(input, void 0, 39))
});
var blake2b320 = from2({
  name: "blake2b-320",
  code: 45608,
  encode: (input) => coerce(blake2b(input, void 0, 40))
});
var blake2b328 = from2({
  name: "blake2b-328",
  code: 45609,
  encode: (input) => coerce(blake2b(input, void 0, 41))
});
var blake2b336 = from2({
  name: "blake2b-336",
  code: 45610,
  encode: (input) => coerce(blake2b(input, void 0, 42))
});
var blake2b344 = from2({
  name: "blake2b-344",
  code: 45611,
  encode: (input) => coerce(blake2b(input, void 0, 43))
});
var blake2b352 = from2({
  name: "blake2b-352",
  code: 45612,
  encode: (input) => coerce(blake2b(input, void 0, 44))
});
var blake2b360 = from2({
  name: "blake2b-360",
  code: 45613,
  encode: (input) => coerce(blake2b(input, void 0, 45))
});
var blake2b368 = from2({
  name: "blake2b-368",
  code: 45614,
  encode: (input) => coerce(blake2b(input, void 0, 46))
});
var blake2b376 = from2({
  name: "blake2b-376",
  code: 45615,
  encode: (input) => coerce(blake2b(input, void 0, 47))
});
var blake2b384 = from2({
  name: "blake2b-384",
  code: 45616,
  encode: (input) => coerce(blake2b(input, void 0, 48))
});
var blake2b392 = from2({
  name: "blake2b-392",
  code: 45617,
  encode: (input) => coerce(blake2b(input, void 0, 49))
});
var blake2b400 = from2({
  name: "blake2b-400",
  code: 45618,
  encode: (input) => coerce(blake2b(input, void 0, 50))
});
var blake2b408 = from2({
  name: "blake2b-408",
  code: 45619,
  encode: (input) => coerce(blake2b(input, void 0, 51))
});
var blake2b416 = from2({
  name: "blake2b-416",
  code: 45620,
  encode: (input) => coerce(blake2b(input, void 0, 52))
});
var blake2b424 = from2({
  name: "blake2b-424",
  code: 45621,
  encode: (input) => coerce(blake2b(input, void 0, 53))
});
var blake2b432 = from2({
  name: "blake2b-432",
  code: 45622,
  encode: (input) => coerce(blake2b(input, void 0, 54))
});
var blake2b440 = from2({
  name: "blake2b-440",
  code: 45623,
  encode: (input) => coerce(blake2b(input, void 0, 55))
});
var blake2b448 = from2({
  name: "blake2b-448",
  code: 45624,
  encode: (input) => coerce(blake2b(input, void 0, 56))
});
var blake2b456 = from2({
  name: "blake2b-456",
  code: 45625,
  encode: (input) => coerce(blake2b(input, void 0, 57))
});
var blake2b464 = from2({
  name: "blake2b-464",
  code: 45626,
  encode: (input) => coerce(blake2b(input, void 0, 58))
});
var blake2b472 = from2({
  name: "blake2b-472",
  code: 45627,
  encode: (input) => coerce(blake2b(input, void 0, 59))
});
var blake2b480 = from2({
  name: "blake2b-480",
  code: 45628,
  encode: (input) => coerce(blake2b(input, void 0, 60))
});
var blake2b488 = from2({
  name: "blake2b-488",
  code: 45629,
  encode: (input) => coerce(blake2b(input, void 0, 61))
});
var blake2b496 = from2({
  name: "blake2b-496",
  code: 45630,
  encode: (input) => coerce(blake2b(input, void 0, 62))
});
var blake2b504 = from2({
  name: "blake2b-504",
  code: 45631,
  encode: (input) => coerce(blake2b(input, void 0, 63))
});
var blake2b512 = from2({
  name: "blake2b-512",
  code: 45632,
  encode: (input) => coerce(blake2b(input, void 0, 64))
});

// node_modules/@chelonia/multiformats/dist/esm/blake2bstream.mjs
var import_blakejs2 = __toESM(require_blakejs(), 1);
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var { blake2b: blake2b2, blake2bInit, blake2bUpdate, blake2bFinal } = import_blakejs2.default;
var blake2b256stream = from2({
  name: "blake2b-256",
  code: 45600,
  encode: (input) => __awaiter(void 0, void 0, void 0, function* () {
    if (input instanceof ReadableStream) {
      const ctx = blake2bInit(32);
      const reader = input.getReader();
      for (; ; ) {
        const result = yield reader.read();
        if (result.done)
          break;
        blake2bUpdate(ctx, coerce(result.value));
      }
      return blake2bFinal(ctx);
    } else {
      return coerce(blake2b2(input, void 0, 32));
    }
  })
});

// node_modules/@chelonia/multiformats/dist/esm/bases/base32.mjs
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/@chelonia/multiformats/dist/esm/cid.mjs
var _a;
function format(link, base2) {
  const { bytes, version } = link;
  switch (version) {
    case 0:
      return toStringV0(bytes, baseCache(link), base2 !== null && base2 !== void 0 ? base2 : base58btc.encoder);
    default:
      return toStringV1(bytes, baseCache(link), base2 !== null && base2 !== void 0 ? base2 : base32.encoder);
  }
}
var cache = /* @__PURE__ */ new WeakMap();
function baseCache(cid) {
  const baseCache2 = cache.get(cid);
  if (baseCache2 == null) {
    const baseCache3 = /* @__PURE__ */ new Map();
    cache.set(cid, baseCache3);
    return baseCache3;
  }
  return baseCache2;
}
var CID = class _CID {
  /**
   * @param version - Version of the CID
   * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param multihash - (Multi)hash of the of the content.
   */
  constructor(version, code, multihash, bytes) {
    this[_a] = "CID";
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this["/"] = bytes;
  }
  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID() {
    return this;
  }
  // ArrayBufferView
  get byteOffset() {
    return this.bytes.byteOffset;
  }
  // ArrayBufferView
  get byteLength() {
    return this.bytes.byteLength;
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      case 1: {
        const { code, multihash } = this;
        if (code !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code, digest } = this.multihash;
        const multihash = create(code, digest);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return _CID.equals(this, other);
  }
  static equals(self2, other) {
    const unknown = other;
    return unknown != null && self2.code === unknown.code && self2.version === unknown.version && equals2(self2.multihash, unknown.multihash);
  }
  toString(base2) {
    return format(this, base2);
  }
  toJSON() {
    return { "/": format(this) };
  }
  link() {
    return this;
  }
  // Legacy
  [(_a = Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom"))]() {
    return `CID(${this.toString()})`;
  }
  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returns null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   */
  static asCID(input) {
    if (input == null) {
      return null;
    }
    const value = input;
    if (value instanceof _CID) {
      return value;
    } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
      const { version, code, multihash, bytes } = value;
      return new _CID(version, code, multihash, bytes !== null && bytes !== void 0 ? bytes : encodeCID(version, code, multihash.bytes));
    } else if (value[cidSymbol] === true) {
      const { version, multihash, code } = value;
      const digest = decode4(multihash);
      return _CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  /**
   * @param version - Version of the CID
   * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param digest - (Multi)hash of the of the content.
   */
  static create(version, code, digest) {
    if (typeof code !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    if (!(digest.bytes instanceof Uint8Array)) {
      throw new Error("Invalid digest");
    }
    switch (version) {
      case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version, code, digest, digest.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new _CID(version, code, digest, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  /**
   * Simplified version of `create` for CIDv0.
   */
  static createV0(digest) {
    return _CID.create(0, DAG_PB_CODE, digest);
  }
  /**
   * Simplified version of `create` for CIDv1.
   *
   * @param code - Content encoding format code.
   * @param digest - Multihash of the content.
   */
  static createV1(code, digest) {
    return _CID.create(1, code, digest);
  }
  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   */
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length !== 0) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   */
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest) : _CID.createV1(specs.codec, digest);
    return [cid, bytes.subarray(specs.size)];
  }
  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   */
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i2, length2] = decode3(initialBytes.subarray(offset));
      offset += length2;
      return i2;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${version}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return { version, codec, multihashCode, digestSize, multihashSize, size };
  }
  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   */
  static parse(source, base2) {
    const [prefix, bytes] = parseCIDtoBytes(source, base2);
    const cid = _CID.decode(bytes);
    if (cid.version === 0 && source[0] !== "Q") {
      throw Error("Version 0 CID string must not include multibase prefix");
    }
    baseCache(cid).set(prefix, source);
    return cid;
  }
};
function parseCIDtoBytes(source, base2) {
  switch (source[0]) {
    // CIDv0 is parsed differently
    case "Q": {
      const decoder = base2 !== null && base2 !== void 0 ? base2 : base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base2 !== null && base2 !== void 0 ? base2 : base58btc;
      return [base58btc.prefix, decoder.decode(source)];
    }
    case base32.prefix: {
      const decoder = base2 !== null && base2 !== void 0 ? base2 : base32;
      return [base32.prefix, decoder.decode(source)];
    }
    default: {
      if (base2 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [source[0], base2.decode(source)];
    }
  }
}
function toStringV0(bytes, cache2, base2) {
  const { prefix } = base2;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base2.name} encoding`);
  }
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base2.encode(bytes).slice(1);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
}
function toStringV1(bytes, cache2, base2) {
  const { prefix } = base2;
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base2.encode(bytes);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
}
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
function encodeCID(version, code, multihash) {
  const codeOffset = encodingLength(version);
  const hashOffset = codeOffset + encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version, bytes, 0);
  encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
}
var cidSymbol = Symbol.for("@ipld/js-cid/CID");

// node_modules/@chelonia/lib/dist/esm/functions.mjs
var import_buffer = __toESM(require_buffer(), 1);
var multicodes = {
  RAW: 0,
  JSON: 512,
  SHELTER_CONTRACT_MANIFEST: 5316096,
  SHELTER_CONTRACT_TEXT: 5316097,
  SHELTER_CONTRACT_DATA: 5316098,
  SHELTER_FILE_MANIFEST: 5316099,
  SHELTER_FILE_CHUNK: 5316100
};
var parseCID = (cid) => {
  if (!cid || cid.length < 52 || cid.length > 64) {
    throw new RangeError("CID length too short or too long");
  }
  const parsed = CID.parse(cid, base58btc);
  if (parsed.version !== 1 || parsed.multihash.code !== blake2b256.code || !Object.values(multicodes).includes(parsed.code)) {
    throw new Error("Invalid CID");
  }
  return parsed;
};
async function createCIDfromStream(data, multicode = multicodes.RAW) {
  const uint8array = typeof data === "string" ? new TextEncoder().encode(data) : data;
  const digest = await blake2b256stream.digest(uint8array);
  return CID.create(1, multicode, digest).toString(base58btc);
}
function createCID(data, multicode = multicodes.RAW) {
  const uint8array = typeof data === "string" ? new TextEncoder().encode(data) : data;
  const digest = blake2b256.digest(uint8array);
  return CID.create(1, multicode, digest).toString(base58btc);
}
function blake32Hash(data) {
  const uint8array = typeof data === "string" ? new TextEncoder().encode(data) : data;
  const digest = blake2b256.digest(uint8array);
  return base58btc.encode(digest.bytes);
}
var b64ToBuf = (b64) => import_buffer.Buffer.from(b64, "base64");
var b64ToStr = (b64) => b64ToBuf(b64).toString("utf8");
var getSubscriptionId = async (subscriptionInfo) => {
  const textEncoder = new TextEncoder();
  const endpoint = textEncoder.encode(subscriptionInfo.endpoint);
  const p256dh = textEncoder.encode(subscriptionInfo.keys.p256dh);
  const auth = textEncoder.encode(subscriptionInfo.keys.auth);
  const canonicalForm = new ArrayBuffer(8 + (4 + endpoint.byteLength) + (2 + p256dh.byteLength) + (2 + auth.byteLength));
  const canonicalFormU8 = new Uint8Array(canonicalForm);
  const canonicalFormDV = new DataView(canonicalForm);
  let offset = 0;
  canonicalFormDV.setFloat64(offset, subscriptionInfo.expirationTime == null ? NaN : subscriptionInfo.expirationTime, false);
  offset += 8;
  canonicalFormDV.setUint32(offset, endpoint.byteLength, false);
  offset += 4;
  canonicalFormU8.set(endpoint, offset);
  offset += endpoint.byteLength;
  canonicalFormDV.setUint16(offset, p256dh.byteLength, false);
  offset += 2;
  canonicalFormU8.set(p256dh, offset);
  offset += p256dh.byteLength;
  canonicalFormDV.setUint16(offset, auth.byteLength, false);
  offset += 2;
  canonicalFormU8.set(auth, offset);
  const digest = await crypto.subtle.digest("SHA-384", canonicalForm);
  const id = import_buffer.Buffer.from(digest.slice(0, 16));
  id[6] = 128 | id[6] & 15;
  id[8] = 128 | id[8] & 63;
  return [id.slice(0, 4), id.slice(4, 6), id.slice(6, 8), id.slice(8, 10), id.slice(10, 16)].map((p) => p.toString("hex")).join("-");
};

// node_modules/turtledash/dist/esm/index.js
function pick(o2, props) {
  const x2 = /* @__PURE__ */ Object.create(null);
  for (const k of props) {
    if (has(o2, k)) {
      x2[k] = o2[k];
    }
  }
  return x2;
}
function omit(o2, props) {
  const x2 = /* @__PURE__ */ Object.create(null);
  for (const k in o2) {
    if (!props.includes(k)) {
      x2[k] = o2[k];
    }
  }
  return x2;
}
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function isMergeableObject(val) {
  const nonNullObject = val && typeof val === "object";
  return nonNullObject && Object.prototype.toString.call(val) !== "[object RegExp]" && Object.prototype.toString.call(val) !== "[object Date]";
}
function merge(obj, src2) {
  const res = obj;
  for (const key in src2) {
    const clone = isMergeableObject(src2[key]) ? cloneDeep(src2[key]) : void 0;
    let x2;
    if (clone && has(obj, key) && isMergeableObject(x2 = res[key])) {
      merge(x2, clone);
      continue;
    }
    Object.defineProperty(res, key, {
      configurable: true,
      enumerable: true,
      value: clone || src2[key],
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
function randomBytes(length2) {
  return crypto.getRandomValues(new Uint8Array(length2));
}
function randomHexString(length2) {
  return Array.from(randomBytes(length2), (byte) => (byte % 16).toString(16)).join("");
}
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function uniq(array) {
  return Array.from(new Set(array));
}
function union(...arrays) {
  return uniq(Array.prototype.concat.apply([], arrays));
}
function intersection(a1, ...arrays) {
  return uniq(a1).filter((v1) => arrays.every((v2) => v2.indexOf(v1) >= 0));
}
function difference(a1, ...arrays) {
  const a2 = Array.prototype.concat.apply([], arrays);
  return a1.filter((v2) => a2.indexOf(v2) === -1);
}
function hashableRepresentation(unsorted) {
  if (!unsorted || typeof unsorted !== "object") {
    return unsorted;
  }
  if (Array.isArray(unsorted)) {
    return unsorted.map((v2) => hashableRepresentation(v2));
  } else {
    return Object.keys(unsorted).sort().reduce((acc, curKey) => {
      acc.push([
        curKey,
        hashableRepresentation(unsorted[curKey])
      ]);
      return acc;
    }, []);
  }
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
var has = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

// frontend/model/notifications/utils.js
var NEW_STATUS_DURATION = 2 * HOURS_MILLIS;
function age(notification) {
  return Date.now() - notification.timestamp;
}
function isExpired(notification) {
  return age(notification) > maxAge(notification);
}
function isNew(notification) {
  return age(notification) < NEW_STATUS_DURATION;
}
function isOlder(notification) {
  return !isNew(notification);
}
function maxAge(notification) {
  return notification.read ? MAX_AGE_READ : MAX_AGE_UNREAD;
}
function makeNotificationHash(notification) {
  return blake32Hash(JSON.stringify(hashableRepresentation(notification)));
}
function extractProposalData(proposal, extraFields = {}) {
  return {
    proposalType: proposal.data.proposalType,
    proposalData: proposal.data.proposalData,
    expires_date_ms: proposal.data.expires_date_ms,
    createdDate: proposal.meta.createdDate,
    creatorID: proposal.creatorID,
    ...extraFields
  };
}

// frontend/model/notifications/mainPeriodicNotificationEntries.js
var myNotificationHas = (checkFunc, groupId = "") => {
  const myNotifications = groupId ? esm_default("state/vuex/getters").notificationsByGroup(groupId) : esm_default("state/vuex/getters").currentNotifications;
  return myNotifications.some((item) => checkFunc(item));
};
var periodicNotificationEntries = [
  {
    type: PERIODIC_NOTIFICATION_TYPE.MIN15,
    notificationData: {
      stateKey: "nearDistributionEnd",
      emitCondition({ rootState, rootGetters }) {
        const groupIds = rootGetters.ourGroups;
        this.nearDistributionEnd = groupIds.map((gId) => {
          const currentPeriod = rootGetters.groupSettingsForGroup(rootState[gId]).distributionDate;
          if (!currentPeriod) {
            return null;
          }
          const nextPeriod = rootGetters.periodAfterPeriodForGroup(rootState[gId], currentPeriod);
          const now = dateToPeriodStamp(/* @__PURE__ */ new Date());
          const comparison = comparePeriodStamps(nextPeriod, now);
          return rootGetters.ourGroupProfileForGroup(rootState[gId])?.incomeDetailsType === "pledgeAmount" && (comparison > 0 && comparison < DAYS_MILLIS * 7) && rootGetters.ourPaymentsForGroup(rootState[gId])?.todo.length > 0 && !myNotificationHas((item) => item.type === "NEAR_DISTRIBUTION_END" && item.data.period === currentPeriod, gId) ? [gId, currentPeriod] : null;
        }).filter(Boolean);
        return this.nearDistributionEnd.length > 0;
      },
      emit() {
        this.nearDistributionEnd.forEach(([groupID, period]) => {
          esm_default("gi.notifications/emit", "NEAR_DISTRIBUTION_END", {
            groupID,
            period
          });
        });
      },
      shouldClearStateKey({ rootGetters }) {
        const groupIds = rootGetters.ourGroups;
        const groupedNotifications = rootGetters.notifications.filter((item) => item.type === "NEAR_DISTRIBUTION_END").reduce((acc, item) => {
          if (!item.groupID) return acc;
          if (!acc[item.groupID]) acc[item.groupID] = [];
          acc[item.groupID].push(item.data.period);
          return acc;
        }, /* @__PURE__ */ Object.create(null));
        return groupIds.every((groupId) => {
          const currentPeriod = rootGetters.groupSettingsForGroup(groupId).distributionDate;
          return !!groupedNotifications[groupId]?.every((period) => period !== currentPeriod);
        });
      }
    }
  },
  {
    type: PERIODIC_NOTIFICATION_TYPE.MIN5,
    notificationData: {
      stateKey: "nextDistributionPeriod",
      emitCondition({ rootState, rootGetters }) {
        const groupIds = rootGetters.ourGroups;
        this.nextDistributionPeriod = groupIds.map((gId) => {
          const profile = rootGetters.ourGroupProfileForGroup(rootState[gId]);
          if (!profile?.incomeDetailsType) {
            return null;
          }
          const currentPeriod = rootGetters.groupSettingsForGroup(rootState[gId]).distributionDate;
          if (!currentPeriod) {
            return null;
          }
          const nextPeriod = rootGetters.periodAfterPeriodForGroup(rootState[gId], currentPeriod);
          const now = dateToPeriodStamp(/* @__PURE__ */ new Date());
          const isPeriodRelevant = comparePeriodStamps(now, currentPeriod) > 0 && comparePeriodStamps(now, nextPeriod) < 0;
          return isPeriodRelevant && !myNotificationHas((item) => item.type === "NEW_DISTRIBUTION_PERIOD" && item.data.period === currentPeriod, gId) ? [gId, currentPeriod, profile.incomeDetailsType] : null;
        }).filter(Boolean);
        return this.nextDistributionPeriod.length > 0;
      },
      emit({ rootGetters }) {
        const creatorID = rootGetters.ourIdentityContractId;
        this.nextDistributionPeriod.forEach(([groupID, period, incomeDetailsType]) => {
          esm_default("gi.notifications/emit", "NEW_DISTRIBUTION_PERIOD", {
            groupID,
            period,
            creatorID,
            memberType: incomeDetailsType === "pledgeAmount" ? "pledger" : "receiver"
          });
        });
      },
      shouldClearStateKey({ rootState, rootGetters }) {
        const groupIds = rootGetters.ourGroups;
        return groupIds.every((groupId) => {
          return comparePeriodStamps(dateToPeriodStamp(/* @__PURE__ */ new Date()), rootGetters.groupSettingsForGroup(rootState[groupId]).distributionDate) > 0;
        });
      }
    }
  },
  {
    type: PERIODIC_NOTIFICATION_TYPE.MIN5,
    notificationData: {
      stateKey: "expiringOrExpiredProposals",
      emitCondition({ rootGetters }) {
        this.expiringOrExpiredProposalsByGroup = rootGetters.groupsByName.map((group) => {
          const { contractID } = group;
          const expiredProposalIds = [];
          const expiringProposals = [];
          const groupNotificationItems = [];
          const groupProposals = rootGetters.groupProposals(contractID) || {};
          for (const proposalId in groupProposals) {
            const proposal = groupProposals[proposalId];
            if (proposal.status !== STATUS_OPEN) {
              continue;
            }
            if (proposal.data.expires_date_ms < Date.now()) {
              expiredProposalIds.push(proposalId);
            } else if (proposal.data.expires_date_ms < Date.now() + DAYS_MILLIS) {
              if (!proposal.notifiedBeforeExpire) {
                expiringProposals.push(extractProposalData(proposal, { proposalId }));
              }
              if (!Object.keys(proposal.votes).includes(rootGetters.ourIdentityContractId) && // check if the user hasn't voted for this proposal.
              !myNotificationHas((item) => item.type === "PROPOSAL_EXPIRING" && item.data.proposalId === proposalId, contractID)) {
                groupNotificationItems.push({
                  proposalId,
                  creatorID: proposal.creatorID,
                  proposalType: proposal.data.proposalType,
                  proposalData: proposal.data.proposalData
                });
              }
            }
          }
          return { contractID, expiringProposals, groupNotificationItems, expiredProposalIds };
        }).filter((entry) => entry.expiringProposals.length || entry.groupNotificationItems.length || entry.expiredProposalIds.length);
        return this.expiringOrExpiredProposalsByGroup.length;
      },
      async emit() {
        for (const { contractID, expiringProposals, groupNotificationItems, expiredProposalIds } of this.expiringOrExpiredProposalsByGroup) {
          if (expiringProposals.length) {
            await esm_default("gi.actions/group/notifyExpiringProposals", {
              contractID,
              data: { proposals: expiringProposals }
            });
          }
          if (groupNotificationItems.length) {
            groupNotificationItems.forEach((proposal) => {
              esm_default("gi.notifications/emit", "PROPOSAL_EXPIRING", {
                groupID: contractID,
                creatorID: proposal.creatorID,
                proposalId: proposal.proposalId,
                proposalType: proposal.proposalType,
                proposalData: proposal.proposalData,
                title: proposal.proposalType === PROPOSAL_GENERIC ? proposal.proposalData.name : ""
              });
            });
          }
          if (expiredProposalIds.length) {
            esm_default("gi.actions/group/markProposalsExpired", {
              contractID,
              data: { proposalIds: expiredProposalIds }
            }).catch((e2) => {
              console.error("Error calling markProposalsExpired from notifications mixin", e2);
            });
          }
        }
      },
      shouldClearStateKey: () => true
    }
  },
  {
    type: PERIODIC_NOTIFICATION_TYPE.MIN5,
    notificationData: {
      stateKey: "lastLoggedIn",
      emitCondition({ rootGetters }) {
        return !!rootGetters.ourIdentityContractId;
      },
      emit({ rootState, rootGetters }) {
        Promise.all(
          rootGetters.groupsByName.filter(({ active }) => active).map(({ contractID }) => {
            return esm_default("gi.actions/group/kv/updateLastLoggedIn", {
              contractID,
              throttle: true
            });
          })
        ).catch((e2) => {
          console.error("Error updating lastLoggedIn", e2);
        });
      },
      shouldClearStateKey: () => true
    }
  }
];
var mainPeriodicNotificationEntries_default = periodicNotificationEntries;

// frontend/model/notifications/nativeNotification.js
var import_buffer2 = __toESM(require_buffer());
var handler = throttle((status) => {
  const granted = status === "granted" || status === "prompt" && Notification.permission === "granted";
  const { notificationEnabled } = esm_default("state/vuex/state").settings;
  console.info(`Browser notifications have been: ${granted ? "enabled" : "disabled"}, notificationEnabled=${notificationEnabled}`);
  if (!granted || notificationEnabled) {
    esm_default("service-worker/setup-push-subscription").catch((e2) => {
      console.error("[handler] Error calling service-worker/setup-push-subscription", e2);
    });
  }
}, 250);
async function makeNotification({ title, body, icon, path, groupID, sbpInvocation }) {
  if (typeof Notification !== "function") return;
  if (typeof icon === "object" && icon.manifestCid) {
    const cachedArrayBuffer = await esm_default("gi.db/filesCache/load", icon.manifestCid).catch((e2) => {
      console.error("[Avatar.vue] Error loading file from cache", e2);
    });
    if (cachedArrayBuffer) {
      icon = "data:;base64," + encodeURIComponent(import_buffer2.Buffer.from(cachedArrayBuffer).toString("base64"));
    }
  }
  if (typeof WorkerGlobalScope !== "function") {
    try {
      if (navigator.vendor === "Apple Computer, Inc.") {
        throw new Error("Safari requires a service worker for the notification to be displayed");
      }
      const notification = new Notification(title, { body, icon });
      if (path) {
        notification.onclick = (event) => {
          esm_default("controller/router").push({ path }).catch(console.warn);
        };
      }
    } catch (e2) {
      return navigator.serviceWorker?.ready.then((registration) => {
        return registration.showNotification(title, { body, icon, data: { groupID, path, sbpInvocation } });
      }).catch(console.warn);
    }
  } else {
    return self.clients.matchAll({ type: "window" }).then((clientList) => {
      if (clientList.some((client) => client.focused)) {
        return;
      }
      return self.registration.showNotification(
        title,
        { body, icon, data: { groupID, path, sbpInvocation } }
      ).catch(console.warn);
    });
  }
}

// frontend/utils/events.js
var LOGIN = "login";
var LOGIN_ERROR = "login-error";
var LOGIN_COMPLETE = "login-complete";
var LOGGING_OUT = "logging-out";
var LOGOUT = "logout";
var ONLINE = "online";
var OFFLINE = "offline";
var RECONNECTING = "reconnecting";
var RECONNECTION_FAILED = "reconnection-failed";
var KV_QUEUE = "kv-queue";
var KV_EVENT = "kv-event";
var NEW_KV_LOAD_STATUS = "new-kv-load-status";
var ACCEPTED_GROUP = "accepted-group";
var SWITCH_GROUP = "switch-group";
var JOINED_GROUP = "joined-group";
var LEFT_GROUP = "left-group";
var ERROR_GROUP_GENERAL_CHATROOM_DOES_NOT_EXIST = "error-group-non-existent-#general";
var JOINED_CHATROOM = "joined-chatroom";
var LEFT_CHATROOM = "left-chatroom";
var DELETED_CHATROOM = "deleted-chatroom";
var ERROR_JOINING_CHATROOM = "error-joining-chatroom";
var CAPTURED_LOGS = "captured-logs";
var SET_APP_LOGS_FILTER = "set-app-logs-filter";
var CHATROOM_USER_TYPING = "chatroom-user-typing";
var CHATROOM_USER_STOP_TYPING = "chatroom-user-stop-typing";
var NAMESPACE_REGISTRATION = "namespace-registration";
var CHELONIA_STATE_MODIFIED = "chelonia-state-modified";
var NOTIFICATION_EMITTED = "notification-emitted";
var NOTIFICATION_REMOVED = "notification-removed";
var NOTIFICATION_STATUS_LOADED = "notification-status-loaded";
var NEW_CHATROOM_SCROLL_POSITION = "new-chatroom-scroll-position";
var NEW_LAST_LOGGED_IN = "new-last-logged-in";
var NEW_UNREAD_MESSAGES = "new-unread-messages";
var NEW_PREFERENCES = "new-preferences";
var NEW_CHATROOM_NOTIFICATION_SETTINGS = "new-chatroom-notification-settings";
var SERIOUS_ERROR = "serious-error";

// frontend/utils/constants.js
var KILOBYTE = 1 << 10;
var MEGABYTE = 1 << 20;
var CHAT_ATTACHMENT_SIZE_LIMIT = 30 * MEGABYTE;
var IMAGE_ATTACHMENT_MAX_SIZE = 400 * KILOBYTE;
var CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_DESKTOP = 500 * 1.25;
var CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_MOBILE = 500 * 1.5;
var KV_KEYS = {
  UNREAD_MESSAGES: "unreadMessages",
  // identity contract
  LAST_LOGGED_IN: "lastLoggedIn",
  // group contract
  PREFERENCES: "preferences",
  // identity contract
  NOTIFICATIONS: "notifications",
  // identity contract
  NS_CACHE: "namespace-cache"
  // identity contract
};
var KV_LOAD_STATUS = {
  NON_INIT: "non-init",
  LOADING: "loading",
  LOADED: "loaded"
};
var MAX_LOG_ENTRIES = 2e3;
var LAST_LOGGED_IN_THROTTLE_WINDOW = 30 * 6e4;
var DEVICE_SETTINGS = {
  DISABLE_NOTIFICATIONS: "disableNotifications"
};

// frontend/utils/CircularList.js
var CircularList = class {
  #buffer;
  #capacity = 0;
  #defaultValue = "";
  #isFull = false;
  #offset = 0;
  constructor(capacity, defaultValue = "") {
    this.#buffer = new Array(capacity).fill(defaultValue);
    this.#capacity = capacity;
    this.#defaultValue = defaultValue;
  }
  add(entry) {
    const capacity = this.#capacity;
    const offset = this.#offset;
    this.#buffer[offset] = entry;
    if (offset === capacity - 1) {
      this.#isFull = true;
    }
    this.#offset = (offset + 1) % capacity;
  }
  addAll(entries) {
    for (const entry of entries) {
      this.add(entry);
    }
  }
  clear() {
    this.#buffer.fill(this.#defaultValue);
    this.#isFull = false;
    this.#offset = 0;
  }
  toArray() {
    const buffer = this.#buffer;
    const offset = this.#offset;
    return this.#isFull ? [...buffer.slice(offset), ...buffer.slice(0, offset)] : buffer.slice(0, offset);
  }
};

// frontend/model/logger.js
var loggingLevels = ["debug", "error", "info", "log", "warn"];
var originalConsole = console;
var noop = (...args) => void 0;
async function createLogger(config2, { getItem: getItem2, removeItem: removeItem2, setItem: setItem2 }) {
  const entries = new CircularList(config2.maxEntries);
  const methods = Object.fromEntries(loggingLevels.map(
    (name) => [name, (...args) => {
      originalConsole[name](...args);
      captureLogEntry(logger2, name, config2.source, ...args);
    }]
  ));
  const appLogsFilter = [];
  const consoleProxy = new Proxy({ ...methods }, {
    get(o2, p, r) {
      return Reflect.has(o2, p) ? Reflect.get(o2, p, r) : Reflect.get(originalConsole, p, r);
    },
    has(o2, p) {
      return Reflect.has(originalConsole, p);
    }
  });
  const logger2 = {
    get appLogsFilter() {
      return [...appLogsFilter];
    },
    console: consoleProxy,
    entries,
    async clear() {
      await removeItem2("entries");
      entries.clear();
    },
    async save() {
      try {
        await setItem2("entries", this.entries.toArray());
      } catch (error) {
        consoleProxy.error(error);
      }
    },
    setAppLogsFilter(filter) {
      appLogsFilter.splice(0, appLogsFilter.length, ...filter);
      for (const level of loggingLevels) {
        consoleProxy[level] = appLogsFilter.includes(level) ? methods[level] : noop;
      }
    }
  };
  const previousEntries = await (async () => {
    try {
      const stored = await getItem2("entries");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      consoleProxy.error("Failed to parse stored entries:", error);
      return [];
    }
  })();
  if (config2.maxEntries < previousEntries.length) {
    previousEntries.splice(0, previousEntries.length - config2.maxEntries);
  }
  if (previousEntries.length) {
    logger2.entries.addAll(previousEntries);
  }
  return logger2;
}
function captureLogEntry(logger2, type, source, ...args) {
  const entry = {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    source,
    type,
    // Detect when arg is an Error and capture it properly.
    // ex: uncaught Vue errors or custom try/catch errors.
    msg: args.map((arg) => {
      try {
        const seen = /* @__PURE__ */ new WeakSet();
        return JSON.parse(
          JSON.stringify(arg, (_, v2) => {
            if (v2 instanceof Error) {
              return {
                name: v2.name,
                message: v2.message,
                stack: v2.stack
              };
            }
            if (typeof v2 === "object" && v2 !== null) {
              if (seen.has(v2)) {
                return "[Circular Reference]";
              }
              seen.add(v2);
            }
            return v2;
          })
        );
      } catch (e2) {
        return `[captureLogs failed to stringify argument of type '${typeof arg}'. Err: ${e2.message}]`;
      }
    })
  };
  logger2.entries.add(entry);
  esm_default("sbp/selectors/fn", "okTurtles.events/emit")(CAPTURED_LOGS, entry);
}

// node_modules/@sbp/okturtles.data/dist/module.mjs
var _store = /* @__PURE__ */ new Map();
var module_default = esm_default("sbp/selectors/register", {
  "okTurtles.data/get": function(key) {
    return _store.get(key);
  },
  "okTurtles.data/set": function(key, data) {
    _store.set(key, data);
    return data;
  },
  "okTurtles.data/delete": function(key) {
    return _store.delete(key);
  },
  "okTurtles.data/add": function(key, data) {
    const array = _store.get(key);
    if (array) {
      array.push(data);
    } else {
      _store.set(key, [data]);
    }
  },
  "okTurtles.data/remove": function(key, data) {
    const array = _store.get(key);
    if (array) {
      const aLen = array.length;
      const filtered = array.filter((v2) => v2 !== data);
      _store.set(key, filtered);
      return aLen - filtered.length;
    }
  },
  "okTurtles.data/apply": function(key, fn) {
    return fn(_store.get(key));
  }
});

// node_modules/@sbp/okturtles.events/dist/esm/index.js
var listenKey = (evt) => `events/${evt}/listeners`;
var esm_default2 = esm_default("sbp/selectors/register", {
  "okTurtles.events/_init": function() {
    this.errorHandler = (event, e2) => {
      console.error(`[okTurtles.events] Error at handler for ${event}`, e2);
    };
  },
  "okTurtles.events/on": function(event, handler2) {
    esm_default("okTurtles.data/add", listenKey(event), handler2);
    return () => esm_default("okTurtles.events/off", event, handler2);
  },
  "okTurtles.events/once": function(event, handler2) {
    const cbWithOff = (...args) => {
      handler2(...args);
      esm_default("okTurtles.events/off", event, cbWithOff);
    };
    return esm_default("okTurtles.events/on", event, cbWithOff);
  },
  "okTurtles.events/emit": function(event, ...data) {
    var _a2;
    for (const listener of esm_default("okTurtles.data/get", listenKey(event)) || []) {
      try {
        listener(...data);
      } catch (e2) {
        (_a2 = this.errorHandler) === null || _a2 === void 0 ? void 0 : _a2.call(this, event, e2);
      }
    }
  },
  // almost identical to Vue.prototype.$off, except we require `event` argument
  "okTurtles.events/off": function(event, handler2) {
    if (handler2) {
      esm_default("okTurtles.data/remove", listenKey(event), handler2);
    } else {
      esm_default("okTurtles.data/delete", listenKey(event));
    }
  },
  "okTurtles.events/setErrorHandler": function(errorHandler) {
    this.errorHandler = errorHandler;
  }
});

// frontend/model/logServer.js
var logServer_default = (console2) => {
  if (!self.location.href.startsWith("https://gi")) return;
  esm_default("okTurtles.events/on", CAPTURED_LOGS, ({ level, msg: stringifyMe }) => {
    if (level === "debug") return;
    const value = JSON.stringify(stringifyMe);
    const apiUrl = esm_default("sbp/selectors/fn", "okTurtles.data/get")("API_URL");
    fetch(`${apiUrl}/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ level, value })
    }).catch((e2) => {
      console2.error(`[captureLogs] '${e2.message}' attempting to log [${level}] to server:`, value);
    });
  });
};

// frontend/model/swCaptureLogs.js
var config = {
  maxEntries: MAX_LOG_ENTRIES,
  source: "sw"
};
var originalConsole2 = self.console;
var logger = null;
var identityContractID = "";
var getItem = (key) => esm_default("gi.db/logs/load", `giConsole/${identityContractID}/${key}`);
var removeItem = (key) => esm_default("gi.db/logs/delete", `giConsole/${identityContractID}/${key}`);
var setItem = (key, value) => {
  return esm_default("gi.db/logs/save", `giConsole/${identityContractID}/${key}`, typeof value === "string" ? value : JSON.stringify(value));
};
async function captureLogsStart(userLogged) {
  identityContractID = userLogged;
  logger = await createLogger(config, { getItem, removeItem, setItem });
  await setItem("config", config);
  logger.setAppLogsFilter(true ? ["error", "warn", "info", "debug", "log"] : ["error", "warn", "info"]);
  esm_default("okTurtles.events/on", SET_APP_LOGS_FILTER, logger.setAppLogsFilter);
  self.console = logger.console;
  originalConsole2.log("Starting to capture logs of type:", logger.swLogsFilter);
}
async function captureLogsPause({ wipeOut }) {
  if (wipeOut) {
    await clearLogs();
  }
  esm_default("okTurtles.events/off", SET_APP_LOGS_FILTER);
  console.log("captureLogs paused");
  self.console = originalConsole2;
}
async function clearLogs() {
  await logger?.clear();
}
esm_default("okTurtles.events/on", CAPTURED_LOGS, debounce(() => {
  logger?.save().catch((e2) => {
    console.error("Error saving logs during CAPTURED_LOGS event handler", e2);
  });
}, 1e3));
logServer_default(originalConsole2);
var swCaptureLogs_default = esm_default("sbp/selectors/register", {
  "swLogs/get"() {
    return logger?.entries.toArray() ?? [];
  },
  async "swLogs/save"() {
    await logger?.save();
  },
  "swLogs/pauseCapture": captureLogsPause,
  "swLogs/startCapture": captureLogsStart,
  async "swLogs/clearLogs"(userID) {
    const savedID = identityContractID;
    identityContractID = userID;
    try {
      await clearLogs();
    } catch {
    }
    identityContractID = savedID;
  }
});

// node_modules/@sbp/okturtles.eventqueue/dist/esm/index.js
var isEventQueueSbpEvent = (e2) => {
  return Object.prototype.hasOwnProperty.call(e2, "sbpInvocation");
};
var esm_default3 = esm_default("sbp/selectors/register", {
  "okTurtles.eventQueue/_init": function() {
    this.eventQueues = /* @__PURE__ */ Object.create(null);
  },
  "okTurtles.eventQueue/isWaiting": function(name) {
    var _a2;
    return !!((_a2 = this.eventQueues[name]) === null || _a2 === void 0 ? void 0 : _a2.length);
  },
  "okTurtles.eventQueue/queuedInvocations": function(name) {
    var _a2, _b;
    if (name == null) {
      return Object.fromEntries(Object.entries(this.eventQueues).map(([name2, events]) => [name2, events.map((event) => {
        if (isEventQueueSbpEvent(event)) {
          return event.sbpInvocation;
        } else {
          return event.fn;
        }
      })]));
    }
    return (_b = (_a2 = this.eventQueues[name]) === null || _a2 === void 0 ? void 0 : _a2.map((event) => {
      if (isEventQueueSbpEvent(event)) {
        return event.sbpInvocation;
      } else {
        return event.fn;
      }
    })) !== null && _b !== void 0 ? _b : [];
  },
  "okTurtles.eventQueue/queueEvent": async function(name, invocation) {
    if (!Object.prototype.hasOwnProperty.call(this.eventQueues, name)) {
      this.eventQueues[name] = [];
    }
    const events = this.eventQueues[name];
    let accept;
    const promise = new Promise((resolve) => {
      accept = resolve;
    });
    const thisEvent = typeof invocation === "function" ? {
      fn: invocation,
      promise
    } : {
      sbpInvocation: invocation,
      promise
    };
    events.push(thisEvent);
    while (events.length > 0) {
      const event = events[0];
      if (event === thisEvent) {
        try {
          if (typeof invocation === "function") {
            return await invocation();
          } else {
            return await esm_default(...invocation);
          }
        } finally {
          accept();
          events.shift();
        }
      } else {
        await event.promise;
      }
    }
  }
});

// node_modules/@chelonia/crypto/dist/esm/index.mjs
var import_scrypt_async = __toESM(require_scrypt_async(), 1);
var import_tweetnacl = __toESM(require_nacl_fast(), 1);
var bufToStr = (() => {
  const textDecoder = new TextDecoder();
  return (buf) => {
    return textDecoder.decode(buf);
  };
})();
var strToBuf = (() => {
  const textEncoder = new TextEncoder();
  return (str) => {
    return textEncoder.encode(str);
  };
})();
var blake32Hash2 = (data) => {
  const uint8array = typeof data === "string" ? strToBuf(data) : data;
  const digest = blake2b256.digest(uint8array);
  return base58btc.encode(digest.bytes);
};
var b64ToBuf2 = (data) => new Uint8Array(atob(data).split("").map((b) => b.charCodeAt(0)));
var EDWARDS25519SHA512BATCH = "edwards25519sha512batch";
var CURVE25519XSALSA20POLY1305 = "curve25519xsalsa20poly1305";
var XSALSA20POLY1305 = "xsalsa20poly1305";
var EXTERNALKM32 = "externalkm32";
if (false) {
  throw new Error("ENABLE_UNSAFE_NULL_CRYPTO cannot be enabled in production mode");
}
var bytesOrObjectToB64 = (ary) => {
  if (!(ary instanceof Uint8Array)) {
    throw TypeError("Unsupported type");
  }
  return btoa(Array.from(ary).map((c) => String.fromCharCode(c)).join(""));
};
var keygen = (type) => {
  if (false) {
    const res = {
      type,
      publicKey: bytesOrObjectToB64(import_tweetnacl.default.randomBytes(18))
    };
    Object.defineProperty(res, "secretKey", { value: res.publicKey });
    return res;
  }
  if (type === EDWARDS25519SHA512BATCH) {
    const key = import_tweetnacl.default.sign.keyPair();
    const res = {
      type,
      publicKey: key.publicKey
    };
    Object.defineProperty(res, "secretKey", { value: key.secretKey });
    return res;
  } else if (type === CURVE25519XSALSA20POLY1305) {
    const key = import_tweetnacl.default.box.keyPair();
    const res = {
      type,
      publicKey: key.publicKey
    };
    Object.defineProperty(res, "secretKey", { value: key.secretKey });
    return res;
  } else if (type === XSALSA20POLY1305) {
    const res = {
      type
    };
    Object.defineProperty(res, "secretKey", { value: import_tweetnacl.default.randomBytes(import_tweetnacl.default.secretbox.keyLength) });
    return res;
  } else if (type === EXTERNALKM32) {
    const res = {
      type
    };
    Object.defineProperty(res, "secretKey", { value: import_tweetnacl.default.randomBytes(32) });
    return res;
  }
  throw new Error("Unsupported key type");
};
var generateSalt = () => {
  return bytesOrObjectToB64(import_tweetnacl.default.randomBytes(18));
};
var serializeKey = (key, saveSecretKey) => {
  if (false) {
    return JSON.stringify([
      key.type,
      saveSecretKey ? null : key.publicKey,
      saveSecretKey ? key.secretKey : null
    ], void 0, 0);
  }
  if (key.type === EDWARDS25519SHA512BATCH || key.type === CURVE25519XSALSA20POLY1305) {
    if (!saveSecretKey) {
      if (!key.publicKey) {
        throw new Error("Unsupported operation: no public key to export");
      }
      return JSON.stringify([
        key.type,
        bytesOrObjectToB64(key.publicKey),
        null
      ], void 0, 0);
    }
    if (!key.secretKey) {
      throw new Error("Unsupported operation: no secret key to export");
    }
    return JSON.stringify([
      key.type,
      null,
      bytesOrObjectToB64(key.secretKey)
    ], void 0, 0);
  } else if (key.type === XSALSA20POLY1305) {
    if (!saveSecretKey) {
      throw new Error("Unsupported operation: no public key to export");
    }
    if (!key.secretKey) {
      throw new Error("Unsupported operation: no secret key to export");
    }
    return JSON.stringify([
      key.type,
      null,
      bytesOrObjectToB64(key.secretKey)
    ], void 0, 0);
  }
  throw new Error("Unsupported key type");
};
var deserializeKey = (data) => {
  const keyData = JSON.parse(data);
  if (!keyData || keyData.length !== 3) {
    throw new Error("Invalid key object");
  }
  if (false) {
    const res = {
      type: keyData[0]
    };
    if (keyData[2]) {
      Object.defineProperty(res, "secretKey", { value: keyData[2] });
      res.publicKey = keyData[2];
    } else {
      res.publicKey = keyData[1];
    }
    return res;
  }
  if (keyData[0] === EDWARDS25519SHA512BATCH) {
    if (keyData[2]) {
      const key = import_tweetnacl.default.sign.keyPair.fromSecretKey(b64ToBuf2(keyData[2]));
      const res = {
        type: keyData[0],
        publicKey: key.publicKey
      };
      Object.defineProperty(res, "secretKey", { value: key.secretKey });
      return res;
    } else if (keyData[1]) {
      return {
        type: keyData[0],
        publicKey: new Uint8Array(b64ToBuf2(keyData[1]))
      };
    }
    throw new Error("Missing secret or public key");
  } else if (keyData[0] === CURVE25519XSALSA20POLY1305) {
    if (keyData[2]) {
      const key = import_tweetnacl.default.box.keyPair.fromSecretKey(b64ToBuf2(keyData[2]));
      const res = {
        type: keyData[0],
        publicKey: key.publicKey
      };
      Object.defineProperty(res, "secretKey", { value: key.secretKey });
      return res;
    } else if (keyData[1]) {
      return {
        type: keyData[0],
        publicKey: new Uint8Array(b64ToBuf2(keyData[1]))
      };
    }
    throw new Error("Missing secret or public key");
  } else if (keyData[0] === XSALSA20POLY1305) {
    if (!keyData[2]) {
      throw new Error("Secret key missing");
    }
    const res = {
      type: keyData[0]
    };
    Object.defineProperty(res, "secretKey", { value: new Uint8Array(b64ToBuf2(keyData[2])) });
    return res;
  }
  throw new Error("Unsupported key type");
};
var keygenOfSameType = (inKey) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  return keygen(key.type);
};
var keyId = (inKey) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  const serializedKey = serializeKey(key, !key.publicKey);
  return blake32Hash2(serializedKey);
};
var sign = (inKey, data) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  if (false) {
    if (!key.secretKey) {
      throw new Error("Secret key missing");
    }
    return key.secretKey + ";" + blake32Hash2(data);
  }
  if (key.type !== EDWARDS25519SHA512BATCH) {
    throw new Error("Unsupported algorithm");
  }
  if (!key.secretKey) {
    throw new Error("Secret key missing");
  }
  const messageUint8 = strToBuf(data);
  const signature = import_tweetnacl.default.sign.detached(messageUint8, key.secretKey);
  const base64Signature = bytesOrObjectToB64(signature);
  return base64Signature;
};
var verifySignature = (inKey, data, signature) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  if (false) {
    if (!key.publicKey) {
      throw new Error("Public key missing");
    }
    if (key.publicKey + ";" + blake32Hash2(data) !== signature) {
      throw new Error("Invalid signature");
    }
    return;
  }
  if (key.type !== EDWARDS25519SHA512BATCH) {
    throw new Error("Unsupported algorithm");
  }
  if (!key.publicKey) {
    throw new Error("Public key missing");
  }
  const decodedSignature = b64ToBuf2(signature);
  const messageUint8 = strToBuf(data);
  const result = import_tweetnacl.default.sign.detached.verify(messageUint8, decodedSignature, key.publicKey);
  if (!result) {
    throw new Error("Invalid signature");
  }
};
var encrypt = (inKey, data, ad) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  if (false) {
    if (!key.publicKey) {
      throw new Error("Public key missing");
    }
    return `${key.publicKey};${data};${ad !== null && ad !== void 0 ? ad : ""}`;
  }
  if (key.type === XSALSA20POLY1305) {
    if (!key.secretKey) {
      throw new Error("Secret key missing");
    }
    const nonce = import_tweetnacl.default.randomBytes(import_tweetnacl.default.secretbox.nonceLength);
    let encryptionNonce;
    if (ad) {
      encryptionNonce = new Uint8Array(nonce);
      const adHash = import_tweetnacl.default.hash(strToBuf(ad));
      const len = Math.min(adHash.length, nonce.length);
      for (let i2 = 0; i2 < len; i2++) {
        encryptionNonce[i2] ^= adHash[i2];
      }
    } else {
      encryptionNonce = nonce;
    }
    const messageUint8 = strToBuf(data);
    const box = import_tweetnacl.default.secretbox(messageUint8, encryptionNonce, key.secretKey);
    const fullMessage = new Uint8Array(nonce.length + box.length);
    fullMessage.set(nonce);
    fullMessage.set(box, nonce.length);
    const base64FullMessage = bytesOrObjectToB64(fullMessage);
    return base64FullMessage;
  } else if (key.type === CURVE25519XSALSA20POLY1305) {
    if (!key.publicKey) {
      throw new Error("Public key missing");
    }
    const nonce = import_tweetnacl.default.randomBytes(import_tweetnacl.default.box.nonceLength);
    let encryptionNonce;
    if (ad) {
      encryptionNonce = new Uint8Array(nonce);
      const adHash = import_tweetnacl.default.hash(strToBuf(ad));
      const len = Math.min(adHash.length, nonce.length);
      for (let i2 = 0; i2 < len; i2++) {
        encryptionNonce[i2] ^= adHash[i2];
      }
    } else {
      encryptionNonce = nonce;
    }
    const messageUint8 = strToBuf(data);
    const ephemeralKey = import_tweetnacl.default.box.keyPair();
    const box = import_tweetnacl.default.box(messageUint8, encryptionNonce, key.publicKey, ephemeralKey.secretKey);
    crypto.getRandomValues(ephemeralKey.secretKey);
    ephemeralKey.secretKey.fill(0);
    const fullMessage = new Uint8Array(import_tweetnacl.default.box.publicKeyLength + nonce.length + box.length);
    fullMessage.set(ephemeralKey.publicKey);
    fullMessage.set(nonce, import_tweetnacl.default.box.publicKeyLength);
    fullMessage.set(box, import_tweetnacl.default.box.publicKeyLength + nonce.length);
    const base64FullMessage = bytesOrObjectToB64(fullMessage);
    return base64FullMessage;
  }
  throw new Error("Unsupported algorithm");
};
var decrypt = (inKey, data, ad) => {
  const key = typeof inKey === "string" ? deserializeKey(inKey) : inKey;
  if (false) {
    if (!key.secretKey) {
      throw new Error("Secret key missing");
    }
    if (!data.startsWith(key.secretKey + ";") || !data.endsWith(";" + (ad !== null && ad !== void 0 ? ad : ""))) {
      throw new Error("Additional data mismatch");
    }
    return data.slice(String(key.secretKey).length + 1, data.length - 1 - (ad !== null && ad !== void 0 ? ad : "").length);
  }
  if (key.type === XSALSA20POLY1305) {
    if (!key.secretKey) {
      throw new Error("Secret key missing");
    }
    const messageWithNonceAsUint8Array = b64ToBuf2(data);
    const nonce = messageWithNonceAsUint8Array.slice(0, import_tweetnacl.default.secretbox.nonceLength);
    const message = messageWithNonceAsUint8Array.slice(import_tweetnacl.default.secretbox.nonceLength, messageWithNonceAsUint8Array.length);
    if (ad) {
      const adHash = import_tweetnacl.default.hash(strToBuf(ad));
      const len = Math.min(adHash.length, nonce.length);
      for (let i2 = 0; i2 < len; i2++) {
        nonce[i2] ^= adHash[i2];
      }
    }
    const decrypted = import_tweetnacl.default.secretbox.open(message, nonce, key.secretKey);
    if (!decrypted) {
      throw new Error("Could not decrypt message");
    }
    return bufToStr(decrypted);
  } else if (key.type === CURVE25519XSALSA20POLY1305) {
    if (!key.secretKey) {
      throw new Error("Secret key missing");
    }
    const messageWithNonceAsUint8Array = b64ToBuf2(data);
    const ephemeralPublicKey = messageWithNonceAsUint8Array.slice(0, import_tweetnacl.default.box.publicKeyLength);
    const nonce = messageWithNonceAsUint8Array.slice(import_tweetnacl.default.box.publicKeyLength, import_tweetnacl.default.box.publicKeyLength + import_tweetnacl.default.box.nonceLength);
    const message = messageWithNonceAsUint8Array.slice(import_tweetnacl.default.box.publicKeyLength + import_tweetnacl.default.box.nonceLength);
    if (ad) {
      const adHash = import_tweetnacl.default.hash(strToBuf(ad));
      const len = Math.min(adHash.length, nonce.length);
      for (let i2 = 0; i2 < len; i2++) {
        nonce[i2] ^= adHash[i2];
      }
    }
    const decrypted = import_tweetnacl.default.box.open(message, nonce, ephemeralPublicKey, key.secretKey);
    if (!decrypted) {
      throw new Error("Could not decrypt message");
    }
    return bufToStr(decrypted);
  }
  throw new Error("Unsupported algorithm");
};

// node_modules/@chelonia/lib/dist/esm/signedData.mjs
var rootStateFn = () => esm_default("chelonia/rootState");
var proto = Object.create(null, {
  _isSignedData: {
    value: true
  }
});
var wrapper = (o2) => {
  return Object.setPrototypeOf(o2, proto);
};
var isSignedData = (o2) => {
  return !!o2 && !!Object.getPrototypeOf(o2)?._isSignedData;
};
var signData = function(stateOrContractID, sKeyId, data, extraFields, additionalKeys, additionalData) {
  const state = typeof stateOrContractID === "string" ? rootStateFn()[stateOrContractID] : stateOrContractID;
  if (!additionalData) {
    throw new ChelErrorSignatureError("Signature additional data must be provided");
  }
  const designatedKey = state?._vm?.authorizedKeys?.[sKeyId];
  if (!designatedKey?.purpose.includes("sig")) {
    throw new ChelErrorSignatureKeyNotFound(`Signing key ID ${sKeyId} is missing or is missing signing purpose`);
  }
  if (designatedKey._notAfterHeight != null) {
    const name = state._vm.authorizedKeys[sKeyId].name;
    const newKeyId = Object.values(state._vm?.authorizedKeys).find((v2) => v2._notAfterHeight == null && v2.name === name && v2.purpose.includes("sig"))?.id;
    if (!newKeyId) {
      throw new ChelErrorSignatureKeyNotFound(`Signing key ID ${sKeyId} has been revoked and no new key exists by the same name (${name})`);
    }
    sKeyId = newKeyId;
  }
  const key = additionalKeys[sKeyId];
  if (!key) {
    throw new ChelErrorSignatureKeyNotFound(`Missing signing key ${sKeyId}`);
  }
  const deserializedKey = typeof key === "string" ? deserializeKey(key) : key;
  const serializedData = JSON.stringify(data, (_, v2) => {
    if (v2 && has(v2, "serialize") && typeof v2.serialize === "function") {
      if (v2.serialize.length === 1) {
        return v2.serialize(additionalData);
      } else {
        return v2.serialize();
      }
    }
    return v2;
  });
  const payloadToSign = blake32Hash(`${blake32Hash(additionalData)}${blake32Hash(serializedData)}`);
  return {
    ...extraFields,
    _signedData: [serializedData, keyId(deserializedKey), sign(deserializedKey, payloadToSign)]
  };
};
var verifySignatureData = function(state, height, data, additionalData) {
  if (!state) {
    throw new ChelErrorSignatureError("Missing contract state");
  }
  if (!isRawSignedData(data)) {
    throw new ChelErrorSignatureError("Invalid message format");
  }
  if (!Number.isSafeInteger(height) || height < 0) {
    throw new ChelErrorSignatureError(`Height ${height} is invalid or out of range`);
  }
  const [serializedMessage, sKeyId, signature] = data._signedData;
  const designatedKey = state._vm?.authorizedKeys?.[sKeyId];
  if (!designatedKey || height > designatedKey._notAfterHeight || height < designatedKey._notBeforeHeight || !designatedKey.purpose.includes("sig")) {
    if ("") {
      console.error(`Key ${sKeyId} is unauthorized or expired for the current contract`, {
        designatedKey,
        height,
        state: JSON.parse(JSON.stringify(esm_default("state/vuex/state")))
      });
      Promise.reject(new ChelErrorSignatureKeyUnauthorized(`Key ${sKeyId} is unauthorized or expired for the current contract`));
    }
    throw new ChelErrorSignatureKeyUnauthorized(`Key ${sKeyId} is unauthorized or expired for the current contract`);
  }
  const deserializedKey = designatedKey.data;
  const payloadToSign = blake32Hash(`${blake32Hash(additionalData)}${blake32Hash(serializedMessage)}`);
  try {
    verifySignature(deserializedKey, payloadToSign, signature);
    const message = JSON.parse(serializedMessage);
    return [sKeyId, message];
  } catch (e2) {
    throw new ChelErrorSignatureError(e2?.message || e2);
  }
};
var signedOutgoingData = (stateOrContractID, sKeyId, data, additionalKeys) => {
  if (!stateOrContractID || data === void 0 || !sKeyId) {
    throw new TypeError("Invalid invocation");
  }
  if (!additionalKeys) {
    additionalKeys = rootStateFn().secretKeys;
  }
  const extraFields = /* @__PURE__ */ Object.create(null);
  const boundStringValueFn = signData.bind(null, stateOrContractID, sKeyId, data, extraFields, additionalKeys);
  const serializefn = (additionalData) => boundStringValueFn(additionalData || "");
  return wrapper({
    get signingKeyId() {
      return sKeyId;
    },
    get serialize() {
      return serializefn;
    },
    get toString() {
      return (additionalData) => JSON.stringify(this.serialize(additionalData));
    },
    get valueOf() {
      return () => data;
    },
    get recreate() {
      return (data2) => signedOutgoingData(stateOrContractID, sKeyId, data2, additionalKeys);
    },
    get get() {
      return (k) => extraFields[k];
    },
    get set() {
      return (k, v2) => {
        extraFields[k] = v2;
      };
    }
  });
};
var signedOutgoingDataWithRawKey = (key, data) => {
  const sKeyId = keyId(key);
  const state = {
    _vm: {
      authorizedKeys: {
        [sKeyId]: {
          purpose: ["sig"],
          data: serializeKey(key, false),
          _notBeforeHeight: 0,
          _notAfterHeight: void 0
        }
      }
    }
  };
  const extraFields = /* @__PURE__ */ Object.create(null);
  const boundStringValueFn = signData.bind(null, state, sKeyId, data, extraFields, {
    [sKeyId]: key
  });
  const serializefn = (additionalData) => boundStringValueFn(additionalData || "");
  return wrapper({
    get signingKeyId() {
      return sKeyId;
    },
    get serialize() {
      return serializefn;
    },
    get toString() {
      return (additionalData) => JSON.stringify(this.serialize(additionalData));
    },
    get valueOf() {
      return () => data;
    },
    get recreate() {
      return (data2) => signedOutgoingDataWithRawKey(key, data2);
    },
    get get() {
      return (k) => extraFields[k];
    },
    get set() {
      return (k, v2) => {
        extraFields[k] = v2;
      };
    }
  });
};
var signedIncomingData = (contractID, state, data, height, additionalData, mapperFn) => {
  const stringValueFn = () => data;
  let verifySignedValue;
  const verifySignedValueFn = () => {
    if (verifySignedValue) {
      return verifySignedValue[1];
    }
    verifySignedValue = verifySignatureData(state || rootStateFn()[contractID], height, data, additionalData);
    if (mapperFn)
      verifySignedValue[1] = mapperFn(verifySignedValue[1]);
    return verifySignedValue[1];
  };
  return wrapper({
    get signingKeyId() {
      if (verifySignedValue)
        return verifySignedValue[0];
      return signedDataKeyId(data);
    },
    get serialize() {
      return stringValueFn;
    },
    get context() {
      return [contractID, data, height, additionalData];
    },
    get toString() {
      return () => JSON.stringify(this.serialize());
    },
    get valueOf() {
      return verifySignedValueFn;
    },
    get toJSON() {
      return this.serialize;
    },
    get get() {
      return (k) => k !== "_signedData" ? data[k] : void 0;
    }
  });
};
var signedDataKeyId = (data) => {
  if (!isRawSignedData(data)) {
    throw new ChelErrorSignatureError("Invalid message format");
  }
  return data._signedData[1];
};
var isRawSignedData = (data) => {
  if (!data || typeof data !== "object" || !has(data, "_signedData") || !Array.isArray(data._signedData) || data._signedData.length !== 3 || data._signedData.map((v2) => typeof v2).filter((v2) => v2 !== "string").length !== 0) {
    return false;
  }
  return true;
};
var rawSignedIncomingData = (data) => {
  if (!isRawSignedData(data)) {
    throw new ChelErrorSignatureError("Invalid message format");
  }
  const stringValueFn = () => data;
  let verifySignedValue;
  const verifySignedValueFn = () => {
    if (verifySignedValue) {
      return verifySignedValue[1];
    }
    verifySignedValue = [data._signedData[1], JSON.parse(data._signedData[0])];
    return verifySignedValue[1];
  };
  return wrapper({
    get signingKeyId() {
      if (verifySignedValue)
        return verifySignedValue[0];
      return signedDataKeyId(data);
    },
    get serialize() {
      return stringValueFn;
    },
    get toString() {
      return () => JSON.stringify(this.serialize());
    },
    get valueOf() {
      return verifySignedValueFn;
    },
    get toJSON() {
      return this.serialize;
    },
    get get() {
      return (k) => k !== "_signedData" ? data[k] : void 0;
    }
  });
};

// node_modules/@chelonia/lib/dist/esm/encryptedData.mjs
var rootStateFn2 = () => esm_default("chelonia/rootState");
var proto2 = Object.create(null, {
  _isEncryptedData: {
    value: true
  }
});
var wrapper2 = (o2) => {
  return Object.setPrototypeOf(o2, proto2);
};
var isEncryptedData = (o2) => {
  return !!o2 && !!Object.getPrototypeOf(o2)?._isEncryptedData;
};
var encryptData = function(stateOrContractID, eKeyId, data, additionalData) {
  const state = typeof stateOrContractID === "string" ? rootStateFn2()[stateOrContractID] : stateOrContractID;
  const designatedKey = state?._vm?.authorizedKeys?.[eKeyId];
  if (!designatedKey?.purpose.includes("enc")) {
    throw new Error(`Encryption key ID ${eKeyId} is missing or is missing encryption purpose`);
  }
  if (designatedKey._notAfterHeight != null) {
    const name = state._vm.authorizedKeys[eKeyId].name;
    const newKeyId = Object.values(state._vm?.authorizedKeys).find((v2) => v2._notAfterHeight == null && v2.name === name && v2.purpose.includes("enc"))?.id;
    if (!newKeyId) {
      throw new Error(`Encryption key ID ${eKeyId} has been revoked and no new key exists by the same name (${name})`);
    }
    eKeyId = newKeyId;
  }
  const key = state._vm?.authorizedKeys?.[eKeyId].data;
  if (!key) {
    throw new Error(`Missing encryption key ${eKeyId}`);
  }
  const deserializedKey = typeof key === "string" ? deserializeKey(key) : key;
  return [
    keyId(deserializedKey),
    encrypt(deserializedKey, JSON.stringify(data, (_, v2) => {
      if (v2 && has(v2, "serialize") && typeof v2.serialize === "function") {
        if (v2.serialize.length === 1) {
          return v2.serialize(additionalData);
        } else {
          return v2.serialize();
        }
      }
      return v2;
    }), additionalData)
  ];
};
var decryptData = function(state, height, data, additionalKeys, additionalData, validatorFn) {
  if (!state) {
    throw new ChelErrorDecryptionError("Missing contract state");
  }
  if (typeof data.valueOf === "function")
    data = data.valueOf();
  if (!isRawEncryptedData(data)) {
    throw new ChelErrorDecryptionError("Invalid message format");
  }
  const [eKeyId, message] = data;
  const key = additionalKeys[eKeyId];
  if (!key) {
    throw new ChelErrorDecryptionKeyNotFound(`Key ${eKeyId} not found`, { cause: eKeyId });
  }
  const designatedKey = state._vm?.authorizedKeys?.[eKeyId];
  if (!designatedKey || height > designatedKey._notAfterHeight || height < designatedKey._notBeforeHeight || !designatedKey.purpose.includes("enc")) {
    throw new ChelErrorUnexpected(`Key ${eKeyId} is unauthorized or expired for the current contract`);
  }
  const deserializedKey = typeof key === "string" ? deserializeKey(key) : key;
  try {
    const result = JSON.parse(decrypt(deserializedKey, message, additionalData));
    if (typeof validatorFn === "function")
      validatorFn(result, eKeyId);
    return result;
  } catch (e2) {
    throw new ChelErrorDecryptionError(e2?.message || e2);
  }
};
var encryptedOutgoingData = (stateOrContractID, eKeyId, data) => {
  if (!stateOrContractID || data === void 0 || !eKeyId) {
    throw new TypeError("Invalid invocation");
  }
  const boundStringValueFn = encryptData.bind(null, stateOrContractID, eKeyId, data);
  return wrapper2({
    get encryptionKeyId() {
      return eKeyId;
    },
    get serialize() {
      return (additionalData) => boundStringValueFn(additionalData || "");
    },
    get toString() {
      return (additionalData) => JSON.stringify(this.serialize(additionalData));
    },
    get valueOf() {
      return () => data;
    }
  });
};
var encryptedOutgoingDataWithRawKey = (key, data) => {
  if (data === void 0 || !key)
    throw new TypeError("Invalid invocation");
  const eKeyId = keyId(key);
  const state = {
    _vm: {
      authorizedKeys: {
        [eKeyId]: {
          purpose: ["enc"],
          data: serializeKey(key, false),
          _notBeforeHeight: 0,
          _notAfterHeight: void 0
        }
      }
    }
  };
  const boundStringValueFn = encryptData.bind(null, state, eKeyId, data);
  return wrapper2({
    get encryptionKeyId() {
      return eKeyId;
    },
    get serialize() {
      return (additionalData) => boundStringValueFn(additionalData || "");
    },
    get toString() {
      return (additionalData) => JSON.stringify(this.serialize(additionalData));
    },
    get valueOf() {
      return () => data;
    }
  });
};
var encryptedIncomingData = (contractID, state, data, height, additionalKeys, additionalData, validatorFn) => {
  let decryptedValue;
  const decryptedValueFn = () => {
    if (decryptedValue) {
      return decryptedValue;
    }
    if (!state || !additionalKeys) {
      const rootState = rootStateFn2();
      state = state || rootState[contractID];
      additionalKeys = additionalKeys ?? rootState.secretKeys;
    }
    decryptedValue = decryptData(state, height, data, additionalKeys, additionalData || "", validatorFn);
    if (isRawSignedData(decryptedValue)) {
      decryptedValue = signedIncomingData(contractID, state, decryptedValue, height, additionalData || "");
    }
    return decryptedValue;
  };
  return wrapper2({
    get encryptionKeyId() {
      return encryptedDataKeyId(data);
    },
    get serialize() {
      return () => data;
    },
    get toString() {
      return () => JSON.stringify(this.serialize());
    },
    get valueOf() {
      return decryptedValueFn;
    },
    get toJSON() {
      return this.serialize;
    }
  });
};
var encryptedIncomingForeignData = (contractID, _0, data, _1, additionalKeys, additionalData, validatorFn) => {
  let decryptedValue;
  const decryptedValueFn = () => {
    if (decryptedValue) {
      return decryptedValue;
    }
    const rootState = rootStateFn2();
    const state = rootState[contractID];
    decryptedValue = decryptData(state, NaN, data, additionalKeys ?? rootState.secretKeys, additionalData || "", validatorFn);
    if (isRawSignedData(decryptedValue)) {
      return signedIncomingData(contractID, state, decryptedValue, NaN, additionalData || "");
    }
    return decryptedValue;
  };
  return wrapper2({
    get encryptionKeyId() {
      return encryptedDataKeyId(data);
    },
    get serialize() {
      return () => data;
    },
    get toString() {
      return () => JSON.stringify(this.serialize());
    },
    get valueOf() {
      return decryptedValueFn;
    },
    get toJSON() {
      return this.serialize;
    }
  });
};
var encryptedIncomingDataWithRawKey = (key, data, additionalData) => {
  if (data === void 0 || !key)
    throw new TypeError("Invalid invocation");
  let decryptedValue;
  const eKeyId = keyId(key);
  const decryptedValueFn = () => {
    if (decryptedValue) {
      return decryptedValue;
    }
    const state = {
      _vm: {
        authorizedKeys: {
          [eKeyId]: {
            purpose: ["enc"],
            data: serializeKey(key, false),
            _notBeforeHeight: 0,
            _notAfterHeight: void 0
          }
        }
      }
    };
    decryptedValue = decryptData(state, NaN, data, { [eKeyId]: key }, additionalData || "");
    return decryptedValue;
  };
  return wrapper2({
    get encryptionKeyId() {
      return encryptedDataKeyId(data);
    },
    get serialize() {
      return () => data;
    },
    get toString() {
      return () => JSON.stringify(this.serialize());
    },
    get valueOf() {
      return decryptedValueFn;
    },
    get toJSON() {
      return this.serialize;
    }
  });
};
var encryptedDataKeyId = (data) => {
  if (!isRawEncryptedData(data)) {
    throw new ChelErrorDecryptionError("Invalid message format");
  }
  return data[0];
};
var isRawEncryptedData = (data) => {
  if (!Array.isArray(data) || data.length !== 2 || data.map((v2) => typeof v2).filter((v2) => v2 !== "string").length !== 0) {
    return false;
  }
  return true;
};
var unwrapMaybeEncryptedData = (data) => {
  if (data == null)
    return;
  if (isEncryptedData(data)) {
    try {
      return {
        encryptionKeyId: data.encryptionKeyId,
        data: data.valueOf()
      };
    } catch (e2) {
      console.warn("unwrapMaybeEncryptedData: Unable to decrypt", e2);
    }
  } else {
    return {
      encryptionKeyId: null,
      data
    };
  }
};
var maybeEncryptedIncomingData = (contractID, state, data, height, additionalKeys, additionalData, validatorFn) => {
  if (isRawEncryptedData(data)) {
    return encryptedIncomingData(contractID, state, data, height, additionalKeys, additionalData, validatorFn);
  } else {
    validatorFn?.(data, "");
    return data;
  }
};

// node_modules/@chelonia/lib/dist/esm/SPMessage.mjs
var decryptedAndVerifiedDeserializedMessage = (head, headJSON, contractID, parsedMessage, additionalKeys, state) => {
  const op = head.op;
  const height = head.height;
  const message = op === SPMessage.OP_ACTION_ENCRYPTED ? encryptedIncomingData(contractID, state, parsedMessage, height, additionalKeys, headJSON, void 0) : parsedMessage;
  if ([SPMessage.OP_KEY_ADD, SPMessage.OP_KEY_UPDATE].includes(op)) {
    return message.map((key) => {
      return maybeEncryptedIncomingData(contractID, state, key, height, additionalKeys, headJSON, (key2) => {
        if (key2.meta?.private?.content) {
          key2.meta.private.content = encryptedIncomingData(contractID, state, key2.meta.private.content, height, additionalKeys, headJSON, (value) => {
            const computedKeyId = keyId(value);
            if (computedKeyId !== key2.id) {
              throw new Error(`Key ID mismatch. Expected to decrypt key ID ${key2.id} but got ${computedKeyId}`);
            }
          });
        }
        if (key2.meta?.keyRequest?.reference) {
          try {
            key2.meta.keyRequest.reference = maybeEncryptedIncomingData(contractID, state, key2.meta.keyRequest.reference, height, additionalKeys, headJSON)?.valueOf();
          } catch {
            delete key2.meta.keyRequest.reference;
          }
        }
        if (key2.meta?.keyRequest?.contractID) {
          try {
            key2.meta.keyRequest.contractID = maybeEncryptedIncomingData(contractID, state, key2.meta.keyRequest.contractID, height, additionalKeys, headJSON)?.valueOf();
          } catch {
            delete key2.meta.keyRequest.contractID;
          }
        }
      });
    });
  }
  if (op === SPMessage.OP_CONTRACT) {
    message.keys = message.keys?.map((key) => {
      return maybeEncryptedIncomingData(contractID, state, key, height, additionalKeys, headJSON, (key2) => {
        if (!key2.meta?.private?.content)
          return;
        const decryptionFn = encryptedIncomingData;
        const decryptionContract = contractID;
        key2.meta.private.content = decryptionFn(decryptionContract, state, key2.meta.private.content, height, additionalKeys, headJSON, (value) => {
          const computedKeyId = keyId(value);
          if (computedKeyId !== key2.id) {
            throw new Error(`Key ID mismatch. Expected to decrypt key ID ${key2.id} but got ${computedKeyId}`);
          }
        });
      });
    });
  }
  if (op === SPMessage.OP_KEY_SHARE) {
    return maybeEncryptedIncomingData(contractID, state, message, height, additionalKeys, headJSON, (message2) => {
      message2.keys?.forEach((key) => {
        if (!key.meta?.private?.content)
          return;
        const decryptionFn = message2.foreignContractID ? encryptedIncomingForeignData : encryptedIncomingData;
        const decryptionContract = message2.foreignContractID || contractID;
        key.meta.private.content = decryptionFn(decryptionContract, state, key.meta.private.content, height, additionalKeys, headJSON, (value) => {
          const computedKeyId = keyId(value);
          if (computedKeyId !== key.id) {
            throw new Error(`Key ID mismatch. Expected to decrypt key ID ${key.id} but got ${computedKeyId}`);
          }
        });
      });
    });
  }
  if (op === SPMessage.OP_KEY_REQUEST) {
    return maybeEncryptedIncomingData(contractID, state, message, height, additionalKeys, headJSON, (msg) => {
      msg.replyWith = signedIncomingData(msg.contractID, void 0, msg.replyWith, msg.height, headJSON);
    });
  }
  if (op === SPMessage.OP_ACTION_UNENCRYPTED && isRawSignedData(message)) {
    return signedIncomingData(contractID, state, message, height, headJSON);
  }
  if (op === SPMessage.OP_ACTION_ENCRYPTED) {
    return message;
  }
  if (op === SPMessage.OP_KEY_DEL) {
    return message.map((key) => {
      return maybeEncryptedIncomingData(contractID, state, key, height, additionalKeys, headJSON, void 0);
    });
  }
  if (op === SPMessage.OP_KEY_REQUEST_SEEN) {
    return maybeEncryptedIncomingData(contractID, state, parsedMessage, height, additionalKeys, headJSON, void 0);
  }
  if (op === SPMessage.OP_ATOMIC) {
    return message.map(([opT, opV]) => [
      opT,
      decryptedAndVerifiedDeserializedMessage({ ...head, op: opT }, headJSON, contractID, opV, additionalKeys, state)
    ]);
  }
  return message;
};
var SPMessage = class _SPMessage {
  // flow type annotations to make flow happy
  _mapping;
  _head;
  _message;
  _signedMessageData;
  _direction;
  _decryptedValue;
  _innerSigningKeyId;
  static OP_CONTRACT = "c";
  static OP_ACTION_ENCRYPTED = "ae";
  // e2e-encrypted action
  static OP_ACTION_UNENCRYPTED = "au";
  // publicly readable action
  static OP_KEY_ADD = "ka";
  // add this key to the list of keys allowed to write to this contract, or update an existing key
  static OP_KEY_DEL = "kd";
  // remove this key from authorized keys
  static OP_KEY_UPDATE = "ku";
  // update key in authorized keys
  static OP_PROTOCOL_UPGRADE = "pu";
  static OP_PROP_SET = "ps";
  // set a public key/value pair
  static OP_PROP_DEL = "pd";
  // delete a public key/value pair
  static OP_CONTRACT_AUTH = "ca";
  // authorize a contract
  static OP_CONTRACT_DEAUTH = "cd";
  // deauthorize a contract
  static OP_ATOMIC = "a";
  // atomic op
  static OP_KEY_SHARE = "ks";
  // key share
  static OP_KEY_REQUEST = "kr";
  // key request
  static OP_KEY_REQUEST_SEEN = "krs";
  // key request response
  // eslint-disable-next-line camelcase
  static createV1_0({
    contractID,
    previousHEAD = null,
    previousKeyOp = null,
    // Height will be automatically set to the correct value when sending
    // The reason to set it to Number.MAX_SAFE_INTEGER is so that we can
    // temporarily process outgoing messages with signature validation
    // still working
    height = Number.MAX_SAFE_INTEGER,
    op,
    manifest
  }) {
    const head = {
      version: "1.0.0",
      previousHEAD,
      previousKeyOp,
      height,
      contractID,
      op: op[0],
      manifest
    };
    return new this(messageToParams(head, op[1]));
  }
  // SPMessage.cloneWith could be used when make a SPMessage object having the same id()
  // https://github.com/okTurtles/group-income/issues/1503
  static cloneWith(targetHead, targetOp, sources) {
    const head = Object.assign({}, targetHead, sources);
    return new this(messageToParams(head, targetOp[1]));
  }
  static deserialize(value, additionalKeys, state, unwrapMaybeEncryptedDataFn = unwrapMaybeEncryptedData) {
    if (!value)
      throw new Error(`deserialize bad value: ${value}`);
    const { head: headJSON, ...parsedValue } = JSON.parse(value);
    const head = JSON.parse(headJSON);
    const contractID = head.op === _SPMessage.OP_CONTRACT ? createCID(value, multicodes.SHELTER_CONTRACT_DATA) : head.contractID;
    if (!state?._vm?.authorizedKeys && head.op === _SPMessage.OP_CONTRACT) {
      const value2 = rawSignedIncomingData(parsedValue);
      const authorizedKeys = Object.fromEntries(value2.valueOf()?.keys.map((wk) => {
        const k = unwrapMaybeEncryptedDataFn(wk);
        if (!k)
          return null;
        return [k.data.id, k.data];
      }).filter(Boolean));
      state = {
        _vm: {
          type: head.type,
          authorizedKeys
        }
      };
    }
    const signedMessageData = signedIncomingData(contractID, state, parsedValue, head.height, headJSON, (message) => decryptedAndVerifiedDeserializedMessage(head, headJSON, contractID, message, additionalKeys, state));
    return new this({
      direction: "incoming",
      mapping: { key: createCID(value, multicodes.SHELTER_CONTRACT_DATA), value },
      head,
      signedMessageData
    });
  }
  static deserializeHEAD(value) {
    if (!value)
      throw new Error(`deserialize bad value: ${value}`);
    let head, hash;
    const result = {
      get head() {
        if (head === void 0) {
          head = JSON.parse(JSON.parse(value).head);
        }
        return head;
      },
      get hash() {
        if (!hash) {
          hash = createCID(value, multicodes.SHELTER_CONTRACT_DATA);
        }
        return hash;
      },
      get contractID() {
        return result.head?.contractID ?? result.hash;
      },
      // `description` is not a getter to prevent the value from being copied
      // if the object is cloned or serialized
      description() {
        const type = this.head.op;
        return `<op_${type}|${this.hash} of ${this.contractID}>`;
      },
      get isFirstMessage() {
        return !result.head?.contractID;
      }
    };
    return result;
  }
  constructor(params) {
    this._direction = params.direction;
    this._mapping = params.mapping;
    this._head = params.head;
    this._signedMessageData = params.signedMessageData;
    const type = this.opType();
    let atomicTopLevel = true;
    const validate = (type2, message) => {
      switch (type2) {
        case _SPMessage.OP_CONTRACT:
          if (!this.isFirstMessage() || !atomicTopLevel) {
            throw new Error("OP_CONTRACT: must be first message");
          }
          break;
        case _SPMessage.OP_ATOMIC:
          if (!atomicTopLevel) {
            throw new Error("OP_ATOMIC not allowed inside of OP_ATOMIC");
          }
          if (!Array.isArray(message)) {
            throw new TypeError("OP_ATOMIC must be of an array type");
          }
          atomicTopLevel = false;
          message.forEach(([t, m3]) => validate(t, m3));
          break;
        case _SPMessage.OP_KEY_ADD:
        case _SPMessage.OP_KEY_DEL:
        case _SPMessage.OP_KEY_UPDATE:
          if (!Array.isArray(message)) {
            throw new TypeError("OP_KEY_{ADD|DEL|UPDATE} must be of an array type");
          }
          break;
        case _SPMessage.OP_KEY_SHARE:
        case _SPMessage.OP_KEY_REQUEST:
        case _SPMessage.OP_KEY_REQUEST_SEEN:
        case _SPMessage.OP_ACTION_ENCRYPTED:
        case _SPMessage.OP_ACTION_UNENCRYPTED:
          break;
        default:
          throw new Error(`unsupported op: ${type2}`);
      }
    };
    Object.defineProperty(this, "_message", {
      get: /* @__PURE__ */ ((validated) => () => {
        const message = this._signedMessageData.valueOf();
        if (!validated) {
          validate(type, message);
          validated = true;
        }
        return message;
      })()
    });
  }
  decryptedValue() {
    if (this._decryptedValue)
      return this._decryptedValue;
    try {
      const value = this.message();
      const data = unwrapMaybeEncryptedData(value);
      if (data?.data) {
        if (isSignedData(data.data)) {
          this._innerSigningKeyId = data.data.signingKeyId;
          this._decryptedValue = data.data.valueOf();
        } else {
          this._decryptedValue = data.data;
        }
      }
      return this._decryptedValue;
    } catch {
      return void 0;
    }
  }
  innerSigningKeyId() {
    if (!this._decryptedValue) {
      this.decryptedValue();
    }
    return this._innerSigningKeyId;
  }
  head() {
    return this._head;
  }
  message() {
    return this._message;
  }
  op() {
    return [this.head().op, this.message()];
  }
  rawOp() {
    return [this.head().op, this._signedMessageData];
  }
  opType() {
    return this.head().op;
  }
  opValue() {
    return this.message();
  }
  signingKeyId() {
    return this._signedMessageData.signingKeyId;
  }
  manifest() {
    return this.head().manifest;
  }
  description() {
    const type = this.opType();
    let desc = `<op_${type}`;
    if (type === _SPMessage.OP_ACTION_UNENCRYPTED) {
      try {
        const value = this.opValue().valueOf();
        if (typeof value.action === "string") {
          desc += `|${value.action}`;
        }
      } catch (e2) {
        console.warn("Error on .description()", this.hash(), e2);
      }
    }
    return `${desc}|${this.hash()} of ${this.contractID()}>`;
  }
  isFirstMessage() {
    return !this.head().contractID;
  }
  contractID() {
    return this.head().contractID || this.hash();
  }
  serialize() {
    return this._mapping.value;
  }
  hash() {
    return this._mapping.key;
  }
  previousKeyOp() {
    return this._head.previousKeyOp;
  }
  height() {
    return this._head.height;
  }
  id() {
    throw new Error("SPMessage.id() was called but it has been removed");
  }
  direction() {
    return this._direction;
  }
  // `isKeyOp` is used to filter out non-key operations for providing an
  // abbreviated chain fo snapshot validation
  isKeyOp() {
    let value;
    return !!(keyOps.includes(this.opType()) || this.opType() === _SPMessage.OP_ATOMIC && Array.isArray(value = this.opValue()) && value.some(([opT]) => {
      return keyOps.includes(opT);
    }));
  }
  static get [serdesTagSymbol]() {
    return "SPMessage";
  }
  static [serdesSerializeSymbol](m3) {
    return [m3.serialize(), m3.direction(), m3.decryptedValue(), m3.innerSigningKeyId()];
  }
  static [serdesDeserializeSymbol]([serialized, direction, decryptedValue, innerSigningKeyId]) {
    const m3 = _SPMessage.deserialize(serialized);
    m3._direction = direction;
    m3._decryptedValue = decryptedValue;
    m3._innerSigningKeyId = innerSigningKeyId;
    return m3;
  }
};
function messageToParams(head, message) {
  let mapping;
  return {
    direction: has(message, "recreate") ? "outgoing" : "incoming",
    // Lazy computation of mapping to prevent us from serializing outgoing
    // atomic operations
    get mapping() {
      if (!mapping) {
        const headJSON = JSON.stringify(head);
        const messageJSON = { ...message.serialize(headJSON), head: headJSON };
        const value = JSON.stringify(messageJSON);
        mapping = {
          key: createCID(value, multicodes.SHELTER_CONTRACT_DATA),
          value
        };
      }
      return mapping;
    },
    head,
    signedMessageData: message
  };
}
var keyOps = [
  SPMessage.OP_CONTRACT,
  SPMessage.OP_KEY_ADD,
  SPMessage.OP_KEY_DEL,
  SPMessage.OP_KEY_UPDATE
];

// node_modules/@chelonia/lib/dist/esm/utils.mjs
var import_buffer3 = __toESM(require_buffer(), 1);

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

// node_modules/@chelonia/lib/dist/esm/constants.mjs
var INVITE_STATUS = {
  REVOKED: "revoked",
  VALID: "valid",
  USED: "used"
};

// node_modules/@chelonia/lib/dist/esm/events.mjs
var CHELONIA_RESET = "chelonia-reset";
var CONTRACT_IS_SYNCING = "contract-is-syncing";
var CONTRACTS_MODIFIED = "contracts-modified";
var EVENT_HANDLED = "event-handled";
var EVENT_PUBLISHED = "event-published";
var EVENT_PUBLISHING_ERROR = "event-publishing-error";
var CONTRACT_REGISTERED = "contract-registered";
var CONTRACT_IS_PENDING_KEY_REQUESTS = "contract-is-pending-key-requests";
var CONTRACT_HAS_RECEIVED_KEYS = "contract-has-received-keys";
var PERSISTENT_ACTION_FAILURE = "persistent-action-failure";
var PERSISTENT_ACTION_SUCCESS = "persistent-action-success";
var PERSISTENT_ACTION_TOTAL_FAILURE = "persistent-action-total_failure";

// node_modules/@chelonia/lib/dist/esm/utils.mjs
var MAX_EVENTS_AFTER = Number.parseInt("", 10) || Infinity;
var copiedExistingData = Symbol("copiedExistingData");
var findKeyIdByName = (state, name) => state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).find((k) => k.name === name && k._notAfterHeight == null)?.id;
var findForeignKeysByContractID = (state, contractID) => state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).filter((k) => k._notAfterHeight == null && k.foreignKey?.includes(contractID)).map((k) => k.id);
var findRevokedKeyIdsByName = (state, name) => state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys || {}).filter((k) => k.name === name && k._notAfterHeight != null).map((k) => k.id);
var findSuitableSecretKeyId = (state, permissions, purposes, ringLevel, allowedActions) => {
  return state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).filter((k) => {
    return k._notAfterHeight == null && k.ringLevel <= (ringLevel ?? Number.POSITIVE_INFINITY) && esm_default("chelonia/haveSecretKey", k.id) && (Array.isArray(permissions) ? permissions.reduce((acc, permission) => acc && (k.permissions === "*" || k.permissions.includes(permission)), true) : permissions === k.permissions) && purposes.reduce((acc, purpose) => acc && k.purpose.includes(purpose), true) && (Array.isArray(allowedActions) ? allowedActions.reduce((acc, action) => acc && (k.allowedActions === "*" || !!k.allowedActions?.includes(action)), true) : allowedActions ? allowedActions === k.allowedActions : true);
  }).sort((a, b) => b.ringLevel - a.ringLevel)[0]?.id;
};
var findContractIDByForeignKeyId = (state, keyId2) => {
  let fk;
  if (!keyId2 || !(fk = state?._vm?.authorizedKeys?.[keyId2]?.foreignKey))
    return;
  try {
    const fkUrl = new URL(fk);
    return fkUrl.pathname;
  } catch {
  }
};
var findSuitablePublicKeyIds = (state, permissions, purposes, ringLevel) => {
  return state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).filter((k) => k._notAfterHeight == null && k.ringLevel <= (ringLevel ?? Number.POSITIVE_INFINITY) && (Array.isArray(permissions) ? permissions.reduce((acc, permission) => acc && (k.permissions === "*" || k.permissions.includes(permission)), true) : permissions === k.permissions) && purposes.reduce((acc, purpose) => acc && k.purpose.includes(purpose), true)).sort((a, b) => b.ringLevel - a.ringLevel).map((k) => k.id);
};
var validateActionPermissions = (msg, signingKey, state, opT, opV) => {
  const data = isSignedData(opV) ? opV.valueOf() : opV;
  if (signingKey.allowedActions !== "*" && (!Array.isArray(signingKey.allowedActions) || !signingKey.allowedActions.includes(data.action))) {
    logEvtError(msg, `Signing key ${signingKey.id} is not allowed for action ${data.action}`);
    return false;
  }
  if (isSignedData(opV)) {
    const s = opV;
    const innerSigningKey = state._vm?.authorizedKeys?.[s.signingKeyId];
    if (!innerSigningKey && msg._direction === "outgoing")
      return true;
    if (!innerSigningKey || !Array.isArray(innerSigningKey.purpose) || !innerSigningKey.purpose.includes("sig") || innerSigningKey.permissions !== "*" && (!Array.isArray(innerSigningKey.permissions) || !innerSigningKey.permissions.includes(opT + "#inner"))) {
      logEvtError(msg, `Signing key ${s.signingKeyId} is missing permissions for operation ${opT}`);
      return false;
    }
    if (innerSigningKey.allowedActions !== "*" && (!Array.isArray(innerSigningKey.allowedActions) || !innerSigningKey.allowedActions.includes(data.action + "#inner"))) {
      logEvtError(msg, `Signing key ${innerSigningKey.id} is not allowed for action ${data.action}`);
      return false;
    }
  }
  return true;
};
var validateKeyPermissions = (msg, config2, state, signingKeyId, opT, opV) => {
  const signingKey = state._vm?.authorizedKeys?.[signingKeyId];
  if (!signingKey || !Array.isArray(signingKey.purpose) || !signingKey.purpose.includes("sig") || signingKey.permissions !== "*" && (!Array.isArray(signingKey.permissions) || !signingKey.permissions.includes(opT))) {
    logEvtError(msg, `Signing key ${signingKeyId} is missing permissions for operation ${opT}`);
    return false;
  }
  if (opT === SPMessage.OP_ACTION_UNENCRYPTED && !validateActionPermissions(msg, signingKey, state, opT, opV)) {
    return false;
  }
  if (!config2.skipActionProcessing && opT === SPMessage.OP_ACTION_ENCRYPTED && !validateActionPermissions(msg, signingKey, state, opT, opV.valueOf())) {
    return false;
  }
  return true;
};
var validateKeyAddPermissions = function(contractID, signingKey, state, v2, skipPrivateCheck) {
  const signingKeyPermissions = Array.isArray(signingKey.permissions) ? new Set(signingKey.permissions) : signingKey.permissions;
  const signingKeyAllowedActions = Array.isArray(signingKey.allowedActions) ? new Set(signingKey.allowedActions) : signingKey.allowedActions;
  if (!state._vm?.authorizedKeys?.[signingKey.id]) {
    throw new Error("Singing key for OP_KEY_ADD or OP_KEY_UPDATE must exist in _vm.authorizedKeys. contractID=" + contractID + " signingKeyId=" + signingKey.id);
  }
  const localSigningKey = state._vm.authorizedKeys[signingKey.id];
  v2.forEach((wk) => {
    const data = this.config.unwrapMaybeEncryptedData(wk);
    if (!data)
      return;
    const k = data.data;
    if (!skipPrivateCheck && signingKey._private && !data.encryptionKeyId) {
      throw new Error("Signing key is private but it tried adding a public key");
    }
    if (!Number.isSafeInteger(k.ringLevel) || k.ringLevel < localSigningKey.ringLevel) {
      throw new Error("Signing key has ringLevel " + localSigningKey.ringLevel + " but attempted to add or update a key with ringLevel " + k.ringLevel);
    }
    if (signingKeyPermissions !== "*") {
      if (!Array.isArray(k.permissions) || !k.permissions.reduce((acc, cv) => acc && signingKeyPermissions.has(cv), true)) {
        throw new Error("Unable to add or update a key with more permissions than the signing key. signingKey permissions: " + String(signingKey?.permissions) + "; key add permissions: " + String(k.permissions));
      }
    }
    if (signingKeyAllowedActions !== "*" && k.allowedActions) {
      if (!signingKeyAllowedActions || !Array.isArray(k.allowedActions) || !k.allowedActions.reduce((acc, cv) => acc && signingKeyAllowedActions.has(cv), true)) {
        throw new Error("Unable to add or update a key with more allowed actions than the signing key. signingKey allowed actions: " + String(signingKey?.allowedActions) + "; key add allowed actions: " + String(k.allowedActions));
      }
    }
  });
};
var validateKeyDelPermissions = function(contractID, signingKey, state, v2) {
  if (!state._vm?.authorizedKeys?.[signingKey.id]) {
    throw new Error("Singing key for OP_KEY_DEL must exist in _vm.authorizedKeys. contractID=" + contractID + " signingKeyId=" + signingKey.id);
  }
  const localSigningKey = state._vm.authorizedKeys[signingKey.id];
  v2.forEach((wid) => {
    const data = this.config.unwrapMaybeEncryptedData(wid);
    if (!data)
      return;
    const id = data.data;
    const k = state._vm.authorizedKeys[id];
    if (!k) {
      throw new Error("Nonexisting key ID " + id);
    }
    if (signingKey._private) {
      throw new Error("Signing key is private");
    }
    if (!k._private !== !data.encryptionKeyId) {
      throw new Error("_private attribute must be preserved");
    }
    if (!Number.isSafeInteger(k.ringLevel) || k.ringLevel < localSigningKey.ringLevel) {
      throw new Error("Signing key has ringLevel " + localSigningKey.ringLevel + " but attempted to remove a key with ringLevel " + k.ringLevel);
    }
  });
};
var validateKeyUpdatePermissions = function(contractID, signingKey, state, v2) {
  const updatedMap = /* @__PURE__ */ Object.create(null);
  const keys = v2.map((wuk) => {
    const data = this.config.unwrapMaybeEncryptedData(wuk);
    if (!data)
      return void 0;
    const uk = data.data;
    const existingKey = state._vm.authorizedKeys[uk.oldKeyId];
    if (!existingKey) {
      throw new ChelErrorWarning("Missing old key ID " + uk.oldKeyId);
    }
    if (!existingKey._private !== !data.encryptionKeyId) {
      throw new Error("_private attribute must be preserved");
    }
    if (uk.name !== existingKey.name) {
      throw new Error("Name cannot be updated");
    }
    if (!uk.id !== !uk.data) {
      throw new Error("Both or none of the id and data attributes must be provided. Old key ID: " + uk.oldKeyId);
    }
    if (uk.data && existingKey.meta?.private && !uk.meta?.private) {
      throw new Error("Missing private key. Old key ID: " + uk.oldKeyId);
    }
    if (uk.id && uk.id !== uk.oldKeyId) {
      updatedMap[uk.id] = uk.oldKeyId;
    }
    const updatedKey = omit(existingKey, [
      "_notAfterHeight",
      "_notBeforeHeight"
    ]);
    if (uk.permissions) {
      updatedKey.permissions = uk.permissions;
    }
    if (uk.allowedActions) {
      updatedKey.allowedActions = uk.allowedActions;
    }
    if (uk.purpose) {
      updatedKey.purpose = uk.purpose;
    }
    if (uk.meta) {
      updatedKey.meta = uk.meta;
    } else if (updatedKey.meta) {
      Object.defineProperty(updatedKey.meta, copiedExistingData, { value: true });
    }
    if (uk.id) {
      updatedKey.id = uk.id;
    }
    if (uk.data) {
      updatedKey.data = uk.data;
    }
    return updatedKey;
  }).filter(Boolean);
  validateKeyAddPermissions.call(this, contractID, signingKey, state, keys, true);
  return [keys, updatedMap];
};
var keyAdditionProcessor = function(_msg, hash, keys, state, contractID, _signingKey, internalSideEffectStack) {
  const decryptedKeys = [];
  const keysToPersist = [];
  const storeSecretKey = (key, decryptedKey) => {
    const decryptedDeserializedKey = deserializeKey(decryptedKey);
    const transient = !!key.meta?.private?.transient;
    esm_default("chelonia/storeSecretKeys", new Secret([
      {
        key: decryptedDeserializedKey,
        // We always set this to true because this could be done from
        // an outgoing message
        transient: true
      }
    ]));
    if (!transient) {
      keysToPersist.push({ key: decryptedDeserializedKey, transient });
    }
  };
  for (const wkey of keys) {
    const data = this.config.unwrapMaybeEncryptedData(wkey);
    if (!data)
      continue;
    const key = data.data;
    let decryptedKey;
    if (key.meta?.private?.content && !has(key.meta, copiedExistingData)) {
      if (key.id && !esm_default("chelonia/haveSecretKey", key.id, !key.meta.private.transient)) {
        const decryptedKeyResult = this.config.unwrapMaybeEncryptedData(key.meta.private.content);
        if (decryptedKeyResult) {
          if (decryptedKeyResult.encryptionKeyId == null) {
            throw new Error("Expected encrypted data but got unencrypted data for key with ID: " + key.id);
          }
          decryptedKey = decryptedKeyResult.data;
          decryptedKeys.push([key.id, decryptedKey]);
          storeSecretKey(key, decryptedKey);
        }
      }
    }
    if (key.name === "#sak") {
      if (data.encryptionKeyId) {
        throw new Error("#sak may not be encrypted");
      }
      if (key.permissions && (!Array.isArray(key.permissions) || key.permissions.length !== 0)) {
        throw new Error("#sak may not have permissions");
      }
      if (!Array.isArray(key.purpose) || key.purpose.length !== 1 || key.purpose[0] !== "sak") {
        throw new Error("#sak must have exactly one purpose: 'sak'");
      }
      if (key.ringLevel !== 0) {
        throw new Error("#sak must have ringLevel 0");
      }
    }
    if (key.name.startsWith("#inviteKey-")) {
      if (!state._vm.invites)
        state._vm.invites = /* @__PURE__ */ Object.create(null);
      const inviteSecret = decryptedKey || (has(this.transientSecretKeys, key.id) ? serializeKey(this.transientSecretKeys[key.id], true) : void 0);
      state._vm.invites[key.id] = {
        status: INVITE_STATUS.VALID,
        initialQuantity: key.meta.quantity,
        quantity: key.meta.quantity,
        expires: key.meta.expires,
        inviteSecret,
        responses: []
      };
    }
    if (key.meta?.keyRequest?.contractID && findSuitableSecretKeyId(state, [SPMessage.OP_KEY_ADD], ["sig"])) {
      const data2 = this.config.unwrapMaybeEncryptedData(key.meta.keyRequest.contractID);
      if (data2 && internalSideEffectStack) {
        const keyRequestContractID = data2.data;
        const reference = this.config.unwrapMaybeEncryptedData(key.meta.keyRequest.reference);
        internalSideEffectStack.push(() => {
          esm_default("chelonia/private/queueEvent", keyRequestContractID, () => {
            const rootState = esm_default(this.config.stateSelector);
            const originatingContractState = rootState[contractID];
            if (esm_default("chelonia/contract/hasKeyShareBeenRespondedBy", originatingContractState, keyRequestContractID, reference)) {
              return;
            }
            if (!has(rootState, keyRequestContractID)) {
              this.config.reactiveSet(rootState, keyRequestContractID, /* @__PURE__ */ Object.create(null));
            }
            const targetState = rootState[keyRequestContractID];
            if (!targetState._volatile) {
              this.config.reactiveSet(targetState, "_volatile", /* @__PURE__ */ Object.create(null));
            }
            if (!targetState._volatile.pendingKeyRequests) {
              this.config.reactiveSet(rootState[keyRequestContractID]._volatile, "pendingKeyRequests", []);
            }
            if (targetState._volatile.pendingKeyRequests.some((pkr) => {
              return pkr && pkr.contractID === contractID && pkr.hash === hash;
            })) {
              return;
            }
            targetState._volatile.pendingKeyRequests.push({
              contractID,
              name: key.name,
              hash,
              reference: reference?.data
            });
            this.setPostSyncOp(contractID, "pending-keys-for-" + keyRequestContractID, [
              "okTurtles.events/emit",
              CONTRACT_IS_PENDING_KEY_REQUESTS,
              { contractID: keyRequestContractID }
            ]);
          }).catch((e2) => {
            console.error("Error while setting or updating pendingKeyRequests", { contractID, keyRequestContractID, reference }, e2);
          });
        });
      }
    }
  }
  if (keysToPersist.length) {
    internalSideEffectStack?.push(() => {
      esm_default("chelonia/storeSecretKeys", new Secret(keysToPersist));
    });
  }
  internalSideEffectStack?.push(() => subscribeToForeignKeyContracts.call(this, contractID, state));
};
var subscribeToForeignKeyContracts = function(contractID, state) {
  try {
    Object.values(state._vm.authorizedKeys).filter((key) => !!key.foreignKey && findKeyIdByName(state, key.name) != null).forEach((key) => {
      const foreignKey = String(key.foreignKey);
      const fkUrl = new URL(foreignKey);
      const foreignContract = fkUrl.pathname;
      const foreignKeyName = fkUrl.searchParams.get("keyName");
      if (!foreignContract || !foreignKeyName) {
        console.warn("Invalid foreign key: missing contract or key name", {
          contractID,
          keyId: key.id
        });
        return;
      }
      const rootState = esm_default(this.config.stateSelector);
      const signingKey = findSuitableSecretKeyId(state, [SPMessage.OP_KEY_DEL], ["sig"], key.ringLevel);
      const canMirrorOperations = !!signingKey;
      if (!canMirrorOperations)
        return;
      if (Array.isArray(rootState?.[foreignContract]?._volatile?.watch)) {
        if (rootState[foreignContract]._volatile.watch.find((v2) => v2[0] === key.name && v2[1] === contractID)) {
          return;
        }
      }
      if (!has(state._vm, "pendingWatch")) {
        this.config.reactiveSet(state._vm, "pendingWatch", /* @__PURE__ */ Object.create(null));
      }
      if (!has(state._vm.pendingWatch, foreignContract)) {
        this.config.reactiveSet(state._vm.pendingWatch, foreignContract, []);
      }
      if (!state._vm.pendingWatch[foreignContract].find(([n]) => n === foreignKeyName)) {
        state._vm.pendingWatch[foreignContract].push([foreignKeyName, key.id]);
      }
      this.setPostSyncOp(contractID, `watchForeignKeys-${contractID}`, [
        "chelonia/private/watchForeignKeys",
        contractID
      ]);
    });
  } catch (e2) {
    console.warn("Error at subscribeToForeignKeyContracts: " + (e2.message || e2));
  }
};
var recreateEvent = (entry, state, contractsState, disableAutoDedup) => {
  const { HEAD: previousHEAD, height: previousHeight, previousKeyOp } = contractsState || {};
  if (!previousHEAD) {
    throw new Error("recreateEvent: Giving up because the contract has been removed");
  }
  const head = entry.head();
  const [opT, rawOpV] = entry.rawOp();
  const recreateOperation = (opT2, rawOpV2) => {
    const opV = rawOpV2.valueOf();
    const recreateOperationInternal = (opT3, opV2) => {
      let newOpV2;
      if (opT3 === SPMessage.OP_KEY_ADD) {
        if (!Array.isArray(opV2))
          throw new Error("Invalid message format");
        newOpV2 = opV2.filter((k) => {
          const kId = k.valueOf().id;
          return !has(state._vm.authorizedKeys, kId) || state._vm.authorizedKeys[kId]._notAfterHeight != null;
        });
        if (newOpV2.length === 0) {
          console.info("Omitting empty OP_KEY_ADD", { head });
        } else if (newOpV2.length === opV2.length) {
          return opV2;
        }
      } else if (opT3 === SPMessage.OP_KEY_DEL) {
        if (!Array.isArray(opV2))
          throw new Error("Invalid message format");
        newOpV2 = opV2.filter((keyId2) => {
          const kId = Object(keyId2).valueOf();
          return has(state._vm.authorizedKeys, kId) && state._vm.authorizedKeys[kId]._notAfterHeight == null;
        });
        if (newOpV2.length === 0) {
          console.info("Omitting empty OP_KEY_DEL", { head });
        } else if (newOpV2.length === opV2.length) {
          return opV2;
        }
      } else if (opT3 === SPMessage.OP_KEY_UPDATE) {
        if (!Array.isArray(opV2))
          throw new Error("Invalid message format");
        newOpV2 = opV2.filter((k) => {
          const oKId = k.valueOf().oldKeyId;
          const nKId = k.valueOf().id;
          return nKId == null || has(state._vm.authorizedKeys, oKId) && state._vm.authorizedKeys[oKId]._notAfterHeight == null;
        });
        if (newOpV2.length === 0) {
          console.info("Omitting empty OP_KEY_UPDATE", { head });
        } else if (newOpV2.length === opV2.length) {
          return opV2;
        }
      } else if (opT3 === SPMessage.OP_ATOMIC) {
        if (!Array.isArray(opV2))
          throw new Error("Invalid message format");
        newOpV2 = opV2.map(([t, v2]) => [t, recreateOperationInternal(t, v2)]).filter(([, v2]) => !!v2);
        if (newOpV2.length === 0) {
          console.info("Omitting empty OP_ATOMIC", { head });
        } else if (newOpV2.length === opV2.length && newOpV2.reduce((acc, cv, i2) => acc && cv === opV2[i2], true)) {
          return opV2;
        } else {
          return newOpV2;
        }
      } else {
        return opV2;
      }
    };
    const newOpV = recreateOperationInternal(opT2, opV);
    if (newOpV === opV) {
      return rawOpV2;
    } else if (newOpV === void 0) {
      return;
    }
    if (typeof rawOpV2.recreate !== "function") {
      throw new Error("Unable to recreate operation");
    }
    return rawOpV2.recreate(newOpV);
  };
  const newRawOpV = disableAutoDedup ? rawOpV : recreateOperation(opT, rawOpV);
  if (!newRawOpV)
    return;
  const newOp = [opT, newRawOpV];
  entry = SPMessage.cloneWith(head, newOp, {
    previousKeyOp,
    previousHEAD,
    height: previousHeight + 1
  });
  return entry;
};
var getContractIDfromKeyId = (contractID, signingKeyId, state) => {
  if (!signingKeyId)
    return;
  return signingKeyId && state._vm?.authorizedKeys?.[signingKeyId]?.foreignKey ? new URL(state._vm.authorizedKeys[signingKeyId].foreignKey).pathname : contractID;
};
function eventsAfter(contractID, { sinceHeight, limit, sinceHash, stream = true }) {
  if (!contractID) {
    throw new Error("Missing contract ID");
  }
  let lastUrl;
  const fetchEventsStreamReader = async () => {
    requestLimit = Math.min(limit ?? MAX_EVENTS_AFTER, remainingEvents);
    lastUrl = `${this.config.connectionURL}/eventsAfter/${contractID}/${sinceHeight}${Number.isInteger(requestLimit) ? `/${requestLimit}` : ""}`;
    const eventsResponse = await this.config.fetch(lastUrl, { signal });
    if (!eventsResponse.ok) {
      const msg = `${eventsResponse.status}: ${eventsResponse.statusText}`;
      if (eventsResponse.status === 404 || eventsResponse.status === 410) {
        throw new ChelErrorResourceGone(msg, { cause: eventsResponse.status });
      }
      throw new ChelErrorUnexpectedHttpResponseCode(msg, { cause: eventsResponse.status });
    }
    if (!eventsResponse.body)
      throw new Error("Missing body");
    latestHeight = parseInt(eventsResponse.headers.get("shelter-headinfo-height"), 10);
    if (!Number.isSafeInteger(latestHeight))
      throw new Error("Invalid latest height");
    requestCount++;
    return eventsResponse.body.getReader();
  };
  if (!Number.isSafeInteger(sinceHeight) || sinceHeight < 0) {
    throw new TypeError("Invalid since height value. Expected positive integer.");
  }
  const signal = this.abortController.signal;
  let requestCount = 0;
  let remainingEvents = limit ?? Number.POSITIVE_INFINITY;
  let eventsStreamReader;
  let latestHeight;
  let state = "fetch";
  let requestLimit;
  let count;
  let buffer = "";
  let currentEvent;
  const s = new ReadableStream({
    // The pull function is called whenever the internal buffer of the stream
    // becomes empty and needs more data.
    async pull(controller) {
      try {
        for (; ; ) {
          switch (state) {
            // When in 'fetch' state, initiate a new fetch request to obtain a
            // stream reader for events.
            case "fetch": {
              eventsStreamReader = await fetchEventsStreamReader();
              state = "read-new-response";
              count = 0;
              break;
            }
            case "read-eos":
            // End of stream case
            case "read-new-response":
            // Just started reading a new response
            case "read": {
              const { done, value } = await eventsStreamReader.read();
              if (done) {
                if (remainingEvents === 0 || sinceHeight >= latestHeight) {
                  controller.close();
                  return;
                } else if (state === "read-new-response" || buffer) {
                  throw new Error("Invalid response: done too early");
                } else {
                  state = "fetch";
                  break;
                }
              }
              if (!value) {
                throw new Error("Invalid response: missing body");
              }
              buffer = buffer + import_buffer3.Buffer.from(value).toString().trim();
              if (!buffer)
                break;
              if (state === "read-new-response") {
                if (buffer[0] !== "[") {
                  throw new Error("Invalid response: no array start delimiter");
                }
                buffer = buffer.slice(1);
              } else if (state === "read-eos") {
                throw new Error("Invalid data at the end of response");
              }
              state = "events";
              break;
            }
            case "events": {
              const nextIdx = buffer.search(/(?<=\s*)[,\]]/);
              if (nextIdx < 0) {
                state = "read";
                break;
              }
              let enqueued = false;
              try {
                const eventValue = buffer.slice(0, nextIdx).trim();
                if (eventValue) {
                  if (count === requestLimit) {
                    throw new Error("Received too many events");
                  }
                  currentEvent = JSON.parse(b64ToStr(JSON.parse(eventValue))).message;
                  if (count === 0) {
                    const hash = SPMessage.deserializeHEAD(currentEvent).hash;
                    const height = SPMessage.deserializeHEAD(currentEvent).head.height;
                    if (height !== sinceHeight || sinceHash && sinceHash !== hash) {
                      if (height === sinceHeight && sinceHash && sinceHash !== hash) {
                        throw new ChelErrorForkedChain(`Forked chain: hash(${hash}) !== since(${sinceHash})`);
                      } else {
                        throw new Error(`Unexpected data: hash(${hash}) !== since(${sinceHash || ""}) or height(${height}) !== since(${sinceHeight})`);
                      }
                    }
                  }
                  if (count++ !== 0 || requestCount !== 0) {
                    controller.enqueue(currentEvent);
                    enqueued = true;
                    remainingEvents--;
                  }
                }
                if (buffer[nextIdx] === "]") {
                  if (currentEvent) {
                    const deserialized = SPMessage.deserializeHEAD(currentEvent);
                    sinceHeight = deserialized.head.height;
                    sinceHash = deserialized.hash;
                    state = "read-eos";
                  } else {
                    state = "eod";
                  }
                  buffer = buffer.slice(nextIdx + 1).trim();
                } else if (currentEvent) {
                  buffer = buffer.slice(nextIdx + 1).trimStart();
                } else {
                  throw new Error("Missing end delimiter");
                }
                if (enqueued) {
                  return;
                }
              } catch (e2) {
                console.error("[chelonia] Error during event parsing", e2);
                throw e2;
              }
              break;
            }
            case "eod": {
              if (remainingEvents === 0 || sinceHeight >= latestHeight) {
                controller.close();
              } else {
                throw new Error("Unexpected end of data");
              }
              return;
            }
          }
        }
      } catch (e2) {
        console.error("[eventsAfter] Error", { lastUrl }, e2);
        eventsStreamReader?.cancel("Error during pull").catch((e22) => {
          console.error("Error canceling underlying event stream reader on error", e2, e22);
        });
        throw e2;
      }
    }
  });
  if (stream)
    return s;
  return collectEventStream(s);
}
function buildShelterAuthorizationHeader(contractID, state) {
  if (!state)
    state = esm_default(this.config.stateSelector)[contractID];
  const SAKid = findKeyIdByName(state, "#sak");
  if (!SAKid) {
    throw new Error(`Missing #sak in ${contractID}`);
  }
  const SAK = this.transientSecretKeys[SAKid];
  if (!SAK) {
    throw new Error(`Missing secret #sak (${SAKid}) in ${contractID}`);
  }
  const deserializedSAK = typeof SAK === "string" ? deserializeKey(SAK) : SAK;
  const nonceBytes = new Uint8Array(15);
  globalThis.crypto.getRandomValues(nonceBytes);
  const data = `${contractID} ${esm_default("chelonia/time")}.${import_buffer3.Buffer.from(nonceBytes).toString("base64")}`;
  return `shelter ${data}.${sign(deserializedSAK, data)}`;
}
var clearObject = (o2) => {
  Object.keys(o2).forEach((k) => delete o2[k]);
};
var reactiveClearObject = (o2, fn) => {
  Object.keys(o2).forEach((k) => fn(o2, k));
};
var checkCanBeGarbageCollected = function(id) {
  const rootState = esm_default(this.config.stateSelector);
  return (
    // Check persistent references
    (!has(rootState.contracts, id) || !rootState.contracts[id] || !has(rootState.contracts[id], "references")) && // Check ephemeral references
    !has(this.ephemeralReferenceCount, id) && // Check foreign keys (i.e., that no keys from this contract are being watched)
    (!has(rootState, id) || !has(rootState[id], "_volatile") || !has(rootState[id]._volatile, "watch") || rootState[id]._volatile.watch.length === 0 || rootState[id]._volatile.watch.filter(([, cID]) => this.subscriptionSet.has(cID)).length === 0)
  );
};
var collectEventStream = async (s) => {
  const reader = s.getReader();
  const r = [];
  for (; ; ) {
    const { done, value } = await reader.read();
    if (done)
      break;
    r.push(value);
  }
  return r;
};
var logEvtError = (msg, ...args) => {
  if (msg._direction === "outgoing") {
    console.warn(...args);
  } else {
    console.error(...args);
  }
};
var handleFetchResult = (type) => {
  return function(r) {
    if (!r.ok) {
      const msg = `${r.status}: ${r.statusText}`;
      if (r.status === 404 || r.status === 410) {
        throw new ChelErrorResourceGone(msg, { cause: r.status });
      }
      throw new ChelErrorUnexpectedHttpResponseCode(msg, { cause: r.status });
    }
    return r[type]();
  };
};

// frontend/controller/actions/utils.js
var enqueueDeferredPromise = (queue) => {
  let finished = Boolean;
  const onFinishPromise = new Promise((resolve) => {
    finished = resolve;
  });
  esm_default("okTurtles.eventQueue/queueEvent", queue, () => onFinishPromise);
  return finished;
};
var encryptedAction = (action, humanError, handler2, encryptionKeyName, signingKeyName, innerSigningKeyName) => {
  const sendMessageFactory = (outerParams, signingKeyId, innerSigningKeyId, encryptionKeyId, originatingContractID) => (innerParams) => {
    const params = innerParams ?? outerParams;
    const invocation = [
      "chelonia/out/actionEncrypted",
      {
        ...params,
        signingKeyId,
        innerSigningKeyId,
        encryptionKeyId,
        action: action.replace("gi.actions", "gi.contracts"),
        originatingContractID
      }
    ];
    if (params.returnInvocation) {
      return invocation;
    } else {
      return esm_default(...invocation);
    }
  };
  return {
    [action]: async function(params) {
      const contractID = params.contractID;
      if (!contractID) {
        throw new Error("Missing contract ID");
      }
      const rootState = esm_default("chelonia/rootState");
      if (rootState.contracts[contractID] === null) {
        console.warn(`[${action}] Contract is marked as permamently deleted, aborting`, contractID);
        throw new Error("Contract permanently deleted: " + contractID);
      }
      const finished = enqueueDeferredPromise("encrypted-action");
      let retainFailed = false;
      try {
        await esm_default("chelonia/contract/retain", contractID, { ephemeral: true }).catch((e2) => {
          retainFailed = true;
          throw e2;
        });
        const state = {
          [contractID]: await esm_default("chelonia/latestContractState", contractID)
        };
        const rootState2 = esm_default("chelonia/rootState");
        const signingContractID = params.signingContractID || contractID;
        if (!state[signingContractID]) {
          state[signingContractID] = await esm_default("chelonia/latestContractState", signingContractID);
        }
        const innerSigningContractID = params.innerSigningContractID !== void 0 ? params.innerSigningContractID : contractID === rootState2.loggedIn.identityContractID ? null : rootState2.loggedIn.identityContractID;
        if (innerSigningContractID && !state[innerSigningContractID]) {
          state[innerSigningContractID] = await esm_default("chelonia/latestContractState", innerSigningContractID);
        }
        const signingKeyId = params.signingKeyId || findKeyIdByName(state[signingContractID], signingKeyName ?? "csk");
        const innerSigningKeyId = params.innerSigningKeyId || params.innerSigningKeyId !== null && innerSigningContractID && findKeyIdByName(state[innerSigningContractID], innerSigningKeyName ?? "csk");
        const encryptionKeyId = params.encryptionKeyId || findKeyIdByName(state[contractID], encryptionKeyName ?? "cek");
        if (!signingKeyId || !encryptionKeyId || !await esm_default("chelonia/haveSecretKey", signingKeyId)) {
          console.warn(`Refusing to send action ${action} due to missing CSK or CEK`, { contractID, action, signingKeyName, encryptionKeyName, signingKeyId, encryptionKeyId, signingContractID: params.signingContractID, originatingContractID: params.originatingContractID });
          throw new GIErrorMissingSigningKeyError(`No key found to send ${action} for contract ${contractID}`);
        }
        if (innerSigningContractID && (!innerSigningKeyId || !await esm_default("chelonia/haveSecretKey", innerSigningKeyId))) {
          console.warn(`Refusing to send action ${action} due to missing inner signing key ID`, { contractID, action, signingKeyName, encryptionKeyName, signingKeyId, encryptionKeyId, signingContractID: params.signingContractID, originatingContractID: params.originatingContractID, innerSigningKeyId });
          throw new GIErrorMissingSigningKeyError(`No key found to send ${action} for contract ${contractID}`);
        }
        const sm = sendMessageFactory(params, signingKeyId, innerSigningKeyId || null, encryptionKeyId, params.originatingContractID);
        if (handler2) {
          return await handler2(sm, params, signingKeyId, encryptionKeyId, params.originatingContractID);
        } else {
          return await sm();
        }
      } catch (e2) {
        const userFacingErrStr = typeof humanError === "string" ? `${humanError} ${LError(e2).reportError}` : humanError(params, e2);
        throw new GIErrorUIRuntimeError(userFacingErrStr, { cause: e2 });
      } finally {
        finished();
        if (!retainFailed) {
          await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
        }
      }
    }
  };
};
var encryptedNotification = (action, humanError, handler2, encryptionKeyName, signingKeyName, innerSigningKeyName) => {
  const sendMessageFactory = (outerParams, signingKeyId, innerSigningKeyId, encryptionKeyId, originatingContractID) => (innerParams) => {
    const params = innerParams ?? outerParams;
    const actionReplaced = action.replace("gi.actions", "gi.contracts");
    return esm_default("chelonia/out/encryptedOrUnencryptedPubMessage", {
      contractID: params.contractID,
      contractName: actionReplaced.split("/", 2).join("/"),
      innerSigningKeyId,
      encryptionKeyId,
      signingKeyId,
      data: [actionReplaced, params.data]
    });
  };
  return {
    [action]: async function(params) {
      const contractID = params.contractID;
      if (!contractID) {
        throw new Error("Missing contract ID");
      }
      try {
        await esm_default("chelonia/contract/retain", contractID, { ephemeral: true });
        const state = {
          [contractID]: await esm_default("chelonia/latestContractState", contractID)
        };
        const rootState = esm_default("chelonia/rootState");
        const signingContractID = params.signingContractID || contractID;
        if (!state[signingContractID]) {
          state[signingContractID] = await esm_default("chelonia/latestContractState", signingContractID);
        }
        const innerSigningContractID = params.innerSigningContractID !== void 0 ? params.innerSigningContractID : contractID === rootState.loggedIn.identityContractID ? null : rootState.loggedIn.identityContractID;
        if (innerSigningContractID && !state[innerSigningContractID]) {
          state[innerSigningContractID] = await esm_default("chelonia/latestContractState", innerSigningContractID);
        }
        const signingKeyId = params.signingKeyId || findKeyIdByName(state[signingContractID], signingKeyName ?? "csk");
        const innerSigningKeyId = params.innerSigningKeyId || params.innerSigningKeyId !== null && innerSigningContractID && findKeyIdByName(state[innerSigningContractID], innerSigningKeyName ?? "csk");
        const encryptionKeyId = params.encryptionKeyId || findKeyIdByName(state[contractID], encryptionKeyName ?? "cek");
        if (!signingKeyId || !encryptionKeyId || !await esm_default("chelonia/haveSecretKey", signingKeyId)) {
          console.warn(`Refusing to send action ${action} due to missing CSK or CEK`, { contractID, action, signingKeyName, encryptionKeyName, signingKeyId, encryptionKeyId, signingContractID: params.signingContractID, originatingContractID: params.originatingContractID });
          throw new GIErrorMissingSigningKeyError(`No key found to send ${action} for contract ${contractID}`);
        }
        if (innerSigningContractID && (!innerSigningKeyId || !await esm_default("chelonia/haveSecretKey", innerSigningKeyId))) {
          console.warn(`Refusing to send action ${action} due to missing inner signing key ID`, { contractID, action, signingKeyName, encryptionKeyName, signingKeyId, encryptionKeyId, signingContractID: params.signingContractID, originatingContractID: params.originatingContractID, innerSigningKeyId });
          throw new GIErrorMissingSigningKeyError(`No key found to send ${action} for contract ${contractID}`);
        }
        const sm = sendMessageFactory(params, signingKeyId, innerSigningKeyId || null, encryptionKeyId, params.originatingContractID);
        if (handler2) {
          return await handler2(sm, params, signingKeyId, encryptionKeyId, params.originatingContractID);
        } else {
          return await sm();
        }
      } catch (e2) {
        const userFacingErrStr = typeof humanError === "string" ? `${humanError} ${LError(e2).reportError}` : humanError(params, e2);
        throw new GIErrorUIRuntimeError(userFacingErrStr, { cause: e2 });
      } finally {
        await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
      }
    }
  };
};
async function createInvite({ contractID, quantity = 1, creatorID, expires, invitee }) {
  const state = await esm_default("chelonia/contract/state", contractID);
  if (!state || !state._vm || !findSuitableSecretKeyId(state, "*", ["sig"]) || state._volatile?.pendingKeyRequests?.length) {
    throw new Error("Invalid or missing current group state");
  }
  const CEKid = findKeyIdByName(state, "cek");
  const CSKid = findKeyIdByName(state, "csk");
  if (!CEKid || !CSKid) {
    throw new Error("Contract is missing a CEK or CSK");
  }
  const inviteKey = keygen(EDWARDS25519SHA512BATCH);
  const inviteKeyId = keyId(inviteKey);
  const inviteKeyP = serializeKey(inviteKey, false);
  const inviteKeyS = encryptedOutgoingData(state, CEKid, serializeKey(inviteKey, true));
  await esm_default("chelonia/out/keyAdd", {
    contractID,
    contractName: "gi.contracts/group",
    data: [{
      id: inviteKeyId,
      name: "#inviteKey-" + inviteKeyId,
      purpose: ["sig"],
      ringLevel: Number.MAX_SAFE_INTEGER,
      permissions: [SPMessage.OP_KEY_REQUEST],
      meta: {
        quantity,
        expires: Date.now() + DAYS_MILLIS * expires,
        private: {
          content: inviteKeyS
        }
      },
      data: inviteKeyP
    }],
    signingKeyId: CSKid
  });
  return {
    inviteKeyId,
    creatorID,
    invitee
  };
}
function groupContractsByType(contracts) {
  const contractIDs = /* @__PURE__ */ Object.create(null);
  if (contracts) {
    Object.entries(contracts).filter(([id, value]) => !!value).forEach(([id, { references, type }]) => {
      if (!references) return;
      if (!contractIDs[type]) {
        contractIDs[type] = [];
      }
      contractIDs[type].push(id);
    });
  }
  return contractIDs;
}
async function syncContractsInOrder(groupedContractIDs) {
  const contractSyncPriorityList = [
    "gi.contracts/identity",
    "gi.contracts/group",
    "gi.contracts/chatroom"
  ];
  const getContractSyncPriority = (key) => {
    const index = contractSyncPriorityList.indexOf(key);
    return index === -1 ? contractSyncPriorityList.length : index;
  };
  const failedSyncs = [];
  try {
    const sortedContractTypes = Object.entries(groupedContractIDs).sort(([a], [b]) => {
      return getContractSyncPriority(a) - getContractSyncPriority(b);
    });
    for (const [type, contractIDs] of sortedContractTypes) {
      for (const contractID of contractIDs) {
        const { contracts } = esm_default("chelonia/rootState");
        if (contractID in contracts) {
          try {
            await esm_default("chelonia/contract/sync", contractID);
          } catch (e2) {
            console.error(`syncContractsInOrder: failed to sync ${type}(${contractID}):`, e2);
            if (e2.name === "ChelErrorResourceGone") {
              console.info("[syncContractsInOrder] Contract ID " + contractID + " has been deleted");
              esm_default("chelonia/contract/remove", contractID, { permanent: true }).catch((e3) => {
                console.error("[syncContractsInOrder] Error handling contract deletion", e3);
              });
            } else {
              failedSyncs.push(`${type}(\u2026${contractID.slice(-5)}) failed sync with '${e2.message}'`);
            }
          }
        } else {
          console.warn(`syncContractsInOrder: skipping ${type}(${contractID}) as it was removed while syncing previous contracts`);
        }
      }
    }
    if (failedSyncs.length > 0) throw new Error(failedSyncs.join(", "));
  } catch (err) {
    console.error("Error during contract sync (syncing all contractIDs)", err);
    throw err;
  }
}

// frontend/model/contracts/shared/functions.js
function paymentHashesFromPaymentPeriod(periodPayments) {
  let hashes = [];
  if (periodPayments) {
    const { paymentsFrom } = periodPayments;
    for (const fromMemberID in paymentsFrom) {
      for (const toMemberID in paymentsFrom[fromMemberID]) {
        hashes = hashes.concat(paymentsFrom[fromMemberID][toMemberID]);
      }
    }
  }
  return hashes;
}
function createPaymentInfo(paymentHash, payment) {
  return {
    fromMemberID: payment.data.fromMemberID,
    toMemberID: payment.data.toMemberID,
    hash: paymentHash,
    amount: payment.data.amount,
    isLate: !!payment.data.isLate,
    when: payment.data.completedDate
  };
}
function getProposalDetails(proposal) {
  const { creatorID, status } = proposal;
  const { proposalType: proposalType2, proposalData } = proposal.data;
  const settingsTranslationMap = {
    "mincomeAmount": L("mincome"),
    "distributionDate": L("distribution date"),
    "votingSystem": L("voting system"),
    "votingRule": L("voting rules")
  };
  const options = {};
  if (proposalType2 === PROPOSAL_PROPOSAL_SETTING_CHANGE) {
    if (proposalData.ruleName !== proposalData.current.ruleName) {
      options["settingType"] = "votingSystem";
    } else if (proposalData.ruleThreshold !== proposalData.current.ruleThreshold) {
      options["settingType"] = "votingRule";
    }
  } else if (proposalType2 === PROPOSAL_GROUP_SETTING_CHANGE) {
    options["settingType"] = proposalData.setting;
  } else if (proposalType2 === PROPOSAL_GENERIC) {
    options["title"] = proposalData.name;
  } else if (proposalType2 === PROPOSAL_INVITE_MEMBER) {
    options["member"] = proposalData.memberName;
  } else if (proposalType2 === PROPOSAL_REMOVE_MEMBER) {
    options["memberID"] = proposalData.memberID;
  }
  const { proposedValue } = proposalData;
  if (proposedValue) {
    if (options.settingType === "distributionDate") {
      options["value"] = humanDate(proposedValue, { month: "long", year: "numeric", day: "numeric" });
    } else {
      options["value"] = proposedValue;
    }
  }
  if (options.settingType) {
    options["setting"] = settingsTranslationMap[options.settingType];
  }
  return { creatorID, status, type: proposalType2, options };
}
function makeMentionFromUserID(userID) {
  return {
    me: userID ? `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${userID}` : "",
    all: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}all`
  };
}

// frontend/model/chatroom/utils.js
function makeChannelMention(str, withId = false) {
  return `${CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR}${withId ? ":chatID:" : ""}${str}`;
}
function getIdFromChannelMention(str) {
  return str.includes(":chatID:") ? str.split(":chatID:")[1] : "";
}
function swapMentionIDForDisplayname(text, options = {
  escaped: true,
  // this indicates that the text contains escaped characters
  forChat: true
  // this indicates that the function is being used for messages inside chatroom
}) {
  const {
    getChatroomNameById,
    usernameFromID,
    userDisplayNameFromID
  } = esm_default("state/vuex/getters");
  const { reverseNamespaceLookups } = esm_default("state/vuex/state");
  const possibleMentions = [
    ...Object.keys(reverseNamespaceLookups).map((u2) => makeMentionFromUserID(u2).me).filter((v2) => !!v2),
    makeChannelMention("[^\\s]+", true)
    // chat-mention as contractID has a format of `#:chatID:...`. So target them as a pattern instead of the exact strings.
  ];
  const { escaped, forChat } = options;
  const regEx = escaped ? new RegExp(`(?<=\\s|^)(${possibleMentions.join("|")})(?=[^\\w\\d]|$)`) : new RegExp(`(${possibleMentions.join("|")})`);
  const swap = (t) => {
    if (t.startsWith(CHATROOM_MEMBER_MENTION_SPECIAL_CHAR)) {
      const userID = t.slice(1);
      const prefix = forChat ? CHATROOM_MEMBER_MENTION_SPECIAL_CHAR : "";
      const body = forChat ? usernameFromID(userID) : userDisplayNameFromID(userID);
      return prefix + body;
    } else if (t.startsWith(CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR)) {
      const channelID = getIdFromChannelMention(t);
      const prefix = forChat ? CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR : "";
      return prefix + getChatroomNameById(channelID);
    }
    return t;
  };
  return text.split(regEx).map((t) => regEx.test(t) ? swap(t) : t).join("");
}

// frontend/model/notifications/messageReceivePostEffect.js
async function messageReceivePostEffect({
  contractID,
  messageHash,
  height,
  text,
  isDMOrMention,
  messageType,
  memberID,
  chatRoomName
}) {
  const rootGetters = await esm_default("state/vuex/getters");
  const rootState = await esm_default("state/vuex/state");
  const identityContractID2 = rootState.loggedIn?.identityContractID;
  if (!identityContractID2) return;
  const isDM = rootState[identityContractID2].chatRooms[contractID];
  const privacyLevelPrivate = rootState[contractID]?.attributes?.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE;
  const chatNotificationSettings = rootGetters.chatNotificationSettings[contractID] || (privacyLevelPrivate ? rootGetters.chatNotificationSettings.privateDefault : rootGetters.chatNotificationSettings.publicDefault);
  const { messageNotification, messageSound } = chatNotificationSettings;
  const shouldNotifyMessage = messageNotification === MESSAGE_NOTIFY_SETTINGS.ALL_MESSAGES || messageNotification === MESSAGE_NOTIFY_SETTINGS.DIRECT_MESSAGES && isDMOrMention;
  const shouldSoundMessage = messageSound === MESSAGE_NOTIFY_SETTINGS.ALL_MESSAGES || messageSound === MESSAGE_NOTIFY_SETTINGS.DIRECT_MESSAGES && isDMOrMention;
  const shouldAddToUnreadMessages = isDMOrMention || (shouldNotifyMessage || shouldSoundMessage) || [MESSAGE_TYPES.INTERACTIVE, MESSAGE_TYPES.POLL].includes(messageType);
  await esm_default("chelonia/contract/retain", contractID, { ephemeral: true });
  try {
    if (shouldAddToUnreadMessages) {
      esm_default("gi.actions/identity/kv/addChatRoomUnreadMessage", { contractID, messageHash, createdHeight: height }).catch((e2) => {
        console.error("[messageReceivePostEffect] Error calling addChatRoomUnreadMessage", e2);
      });
    }
    let title = `# ${chatRoomName}`;
    let icon;
    if (isDM) {
      const members = rootState[contractID].members;
      const membersList = Object.keys(members);
      const isDMToMyself = membersList.length === 1 && membersList[0] === identityContractID2;
      const partnersList = membersList.filter((memberID2) => memberID2 !== identityContractID2).sort((p1, p2) => {
        const p1JoinedDate = new Date(members[p1].joinedDate).getTime();
        const p2JoinedDate = new Date(members[p2].joinedDate).getTime();
        return p1JoinedDate - p2JoinedDate;
      });
      const lastJoinedPartner = isDMToMyself ? identityContractID2 : partnersList[partnersList.length - 1];
      title = isDMToMyself ? rootGetters.userDisplayNameFromID(identityContractID2) : partnersList.map((cID) => rootGetters.userDisplayNameFromID(cID)).join(", ");
      icon = rootGetters.ourContactProfilesById[lastJoinedPartner]?.picture;
    } else {
      icon = rootGetters.ourContactProfilesById[memberID]?.picture;
    }
    const path = `/group-chat/${contractID}`;
    const isSyncing = esm_default("chelonia/contract/isSyncing", contractID, { firstSync: true });
    if (isSyncing) return;
    shouldNotifyMessage && makeNotification({
      title,
      body: messageType === MESSAGE_TYPES.TEXT ? swapMentionIDForDisplayname(text) : L("New message"),
      icon,
      path
    });
    shouldSoundMessage && esm_default("okTurtles.events/emit", MESSAGE_RECEIVE, {
      contractID,
      messageHash,
      messageType
    });
  } finally {
    await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
  }
}
var messageReceivePostEffect_default = messageReceivePostEffect;

// frontend/controller/actions/chatroom.js
var messageReceivedRawQueue = [];
function messageReceivedRawHandler({ contractID, data, innerSigningContractID, newMessage }) {
  const rootState = esm_default("chelonia/rootState");
  const getters4 = esm_default("state/vuex/getters");
  const state = esm_default("chelonia/contract/state", contractID);
  const mentions = makeMentionFromUserID(rootState.loggedIn?.identityContractID);
  const msgData = newMessage || data;
  const isMentionedMe = (!!newMessage || data.type === MESSAGE_TYPES.TEXT) && msgData.text && (msgData.text.includes(mentions.me) || msgData.text.includes(mentions.all));
  if (!newMessage) {
    const isAlreadyAdded = !!getters4.chatRoomUnreadMessages(contractID).find((m3) => m3.messageHash === data.hash);
    if (isAlreadyAdded && !isMentionedMe) {
      esm_default("gi.actions/identity/kv/removeChatRoomUnreadMessage", { contractID, messageHash: data.hash }).catch((e2) => {
        console.error("[MESSAGE_RECEIVE_RAW handler] Error calling removeChatRoomUnreadMessage", e2);
      });
    }
    if (isAlreadyAdded) return;
  }
  const userReadUntil = getters4.ourUnreadMessages[contractID]?.readUntil;
  if (userReadUntil?.createdHeight >= msgData.height) {
    return;
  }
  messageReceivePostEffect_default({
    contractID,
    messageHash: msgData.hash,
    height: msgData.height,
    text: msgData.text,
    isDMOrMention: isMentionedMe || state.attributes?.type === CHATROOM_TYPES.DIRECT_MESSAGE,
    messageType: !newMessage ? MESSAGE_TYPES.TEXT : data.type,
    memberID: innerSigningContractID,
    chatRoomName: state.attributes?.name
  }).catch((e2) => {
    console.error("[action/chatroom.js] Error on messageReceivePostEffect", e2);
  });
}
esm_default("okTurtles.events/on", MESSAGE_RECEIVE_RAW, ({
  contractID,
  data,
  innerSigningContractID,
  // If newMessage is undefined, it means that an existing message is being edited
  newMessage
}) => {
  const rootState = esm_default("chelonia/rootState");
  const eventParams = { contractID, data, innerSigningContractID, newMessage };
  if (rootState.kvStoreStatus?.identity !== "loaded") {
    messageReceivedRawQueue.push(eventParams);
  } else {
    if (messageReceivedRawQueue.length) {
      messageReceivedRawQueue.push(eventParams);
    } else {
      messageReceivedRawHandler(eventParams);
    }
  }
});
esm_default("okTurtles.events/on", NEW_KV_LOAD_STATUS, ({ name, status }) => {
  if (name === "identity" && status === KV_LOAD_STATUS.LOADED) {
    while (messageReceivedRawQueue.length > 0) {
      messageReceivedRawHandler(messageReceivedRawQueue.shift());
    }
  }
});
var chatroom_default = esm_default("sbp/selectors/register", {
  "gi.actions/chatroom/create": async function(params, billableContractID) {
    const rootState = esm_default("state/vuex/state");
    const userID = rootState.loggedIn.identityContractID;
    await esm_default("chelonia/contract/retain", userID, { ephemeral: true });
    try {
      let cskOpts = params.options?.csk;
      let cekOpts = params.options?.cek;
      if (!cekOpts) {
        const CEK2 = keygen(CURVE25519XSALSA20POLY1305);
        const CEKid = keyId(CEK2);
        const CEKp = serializeKey(CEK2, false);
        const CEKs = encryptedOutgoingDataWithRawKey(CEK2, serializeKey(CEK2, true));
        cekOpts = {
          id: CEKid,
          foreignKey: void 0,
          meta: {
            private: {
              content: CEKs,
              shareable: true
            }
          },
          data: CEKp,
          _rawKey: CEK2
        };
      }
      const CEK = cekOpts._rawKey ? cekOpts._rawKey : deserializeKey(cekOpts.data);
      if (!cskOpts) {
        const CSK = keygen(EDWARDS25519SHA512BATCH);
        const CSKid = keyId(CSK);
        const CSKp = serializeKey(CSK, false);
        const CSKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(CSK, true));
        cskOpts = {
          id: CSKid,
          foreignKey: void 0,
          meta: {
            private: {
              content: CSKs,
              shareable: true
            }
          },
          data: CSKp,
          _rawKey: CSK
        };
      }
      await esm_default(
        "chelonia/storeSecretKeys",
        // $FlowFixMe[incompatible-use]
        new Secret([cekOpts._rawKey, cskOpts._rawKey].map((key) => ({ key, transient: true })))
      );
      const userCSKid = await esm_default("chelonia/contract/currentKeyIdByName", userID, "csk");
      if (!userCSKid) throw new Error("User CSK id not found");
      const SAK = keygen(EDWARDS25519SHA512BATCH);
      const SAKid = keyId(SAK);
      const SAKp = serializeKey(SAK, false);
      const SAKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(SAK, true));
      const chatroom = await esm_default("chelonia/out/registerContract", {
        ...omit(params, ["options"]),
        // any 'options' are for this action, not for Chelonia
        publishOptions: {
          billableContractID,
          ...params.publishOptions
        },
        signingKeyId: cskOpts.id,
        actionSigningKeyId: cskOpts.id,
        actionEncryptionKeyId: cekOpts.id,
        keys: [
          {
            id: cskOpts.id,
            name: "csk",
            purpose: ["sig"],
            ringLevel: 0,
            permissions: "*",
            allowedActions: "*",
            foreignKey: cskOpts.foreignKey,
            meta: cskOpts.meta,
            data: cskOpts.data
          },
          {
            id: cekOpts.id,
            name: "cek",
            purpose: ["enc"],
            ringLevel: 0,
            permissions: [SPMessage.OP_ACTION_ENCRYPTED],
            allowedActions: "*",
            foreignKey: cekOpts.foreignKey,
            meta: cekOpts.meta,
            data: cekOpts.data
          },
          ...params.options?.groupKeys ? [
            {
              id: params.options.groupKeys[0].id,
              name: "group-csk",
              purpose: ["sig"],
              ringLevel: 2,
              permissions: [SPMessage.OP_ATOMIC, SPMessage.OP_KEY_DEL, SPMessage.OP_ACTION_ENCRYPTED],
              allowedActions: ["gi.contracts/chatroom/leave"],
              foreignKey: params.options.groupKeys[0].foreignKey,
              meta: params.options.groupKeys[0].meta,
              data: params.options.groupKeys[0].data
            },
            {
              id: params.options.groupKeys[1].id,
              name: "group-cek",
              purpose: ["enc"],
              ringLevel: 2,
              permissions: [SPMessage.OP_ATOMIC, SPMessage.OP_KEY_ADD, SPMessage.OP_KEY_DEL, SPMessage.OP_ACTION_ENCRYPTED],
              allowedActions: ["gi.contracts/chatroom/join", "gi.contracts/chatroom/leave"],
              foreignKey: params.options.groupKeys[1].foreignKey,
              meta: params.options.groupKeys[1].meta,
              data: params.options.groupKeys[1].data
            }
          ] : [],
          {
            id: SAKid,
            name: "#sak",
            purpose: ["sak"],
            ringLevel: 0,
            permissions: [],
            allowedActions: [],
            meta: {
              private: {
                content: SAKs
              }
            },
            data: SAKp
          }
        ],
        data: {
          ...params.data,
          attributes: {
            ...params.data?.attributes,
            creatorID: userID
          }
        },
        contractName: "gi.contracts/chatroom"
      });
      await esm_default(
        "chelonia/storeSecretKeys",
        // $FlowFixMe[incompatible-use]
        new Secret([cekOpts._rawKey, cskOpts._rawKey].map((key) => ({ key })))
      );
      return chatroom;
    } catch (e2) {
      console.error("gi.actions/chatroom/register failed!", e2);
      throw new GIErrorUIRuntimeError(L("Failed to create chat channel."));
    } finally {
      await esm_default("chelonia/contract/release", userID, { ephemeral: true });
    }
  },
  "gi.actions/chatroom/shareNewKeys": async (contractID, newKeys) => {
    const state = esm_default("chelonia/contract/state", contractID);
    const mainCEKid = await esm_default("chelonia/contract/currentKeyIdByName", state, "cek");
    const originatingContractID = state.attributes.groupContractID ? state.attributes.groupContractID : contractID;
    const activeMemberIds = esm_default("state/vuex/getters").chatRoomActiveMemberIdsForChatRoom(state);
    return Promise.all(activeMemberIds.map(async (pContractID) => {
      const CEKid = await esm_default("chelonia/contract/currentKeyIdByName", pContractID, "cek");
      if (!CEKid) {
        console.warn(`Unable to share rotated keys for ${originatingContractID} with ${pContractID}: Missing CEK`);
        return;
      }
      return [
        "chelonia/out/keyShare",
        {
          data: encryptedOutgoingData(contractID, mainCEKid, {
            contractID,
            foreignContractID: pContractID,
            // $FlowFixMe
            keys: Object.values(newKeys).map(([, newKey, newId]) => ({
              id: newId,
              meta: {
                private: {
                  content: encryptedOutgoingData(pContractID, CEKid, serializeKey(newKey, true))
                }
              }
            }))
          })
        }
      ];
    })).then((keys) => [keys.filter(Boolean)]);
  },
  "gi.actions/chatroom/_ondeleted": async (contractID, state) => {
    const rootGetters = esm_default("state/vuex/getters");
    const identityState = rootGetters.currentIdentityState;
    if (identityState.chatRooms?.[contractID]) {
      const identityContractID2 = rootGetters.ourIdentityContractId;
      await esm_default("gi.actions/identity/deleteDirectMessage", { contractID: identityContractID2, data: { contractID } }).catch((e2) => {
        console.warn(`[handleDeletedContract] ${e2.name} thrown by gi.actions/identity/deleteDirectMessage ${identityContractID2} for ${contractID}:`, e2);
      });
    } else {
      const cIDs = Object.entries(identityState.groups || {}).filter(([cID, state2]) => {
        return !state2.hasLeft;
      }).map(([cID]) => {
        return cID;
      });
      for (const cID of cIDs) {
        const groupState = esm_default("chelonia/contract/state", cID);
        if (!groupState?.chatRooms?.[contractID]) continue;
        if (!groupState.chatRooms[contractID].deletedDate) {
          await esm_default("gi.actions/group/deleteChatRoom", {
            contractID: cID,
            data: { chatRoomID: contractID }
          }).catch((e2) => {
            console.warn(`[handleDeletedContract] ${e2.name} thrown by gi.actions/group/deleteChatRoom ${cID} for ${contractID}:`, e2);
          });
        }
        break;
      }
    }
  },
  ...encryptedNotification("gi.actions/chatroom/user-typing-event", L("Failed to send typing notification")),
  ...encryptedNotification("gi.actions/chatroom/user-stop-typing-event", L("Failed to send stopped typing notification")),
  ...encryptedAction("gi.actions/chatroom/addMessage", L("Failed to add message.")),
  ...encryptedAction("gi.actions/chatroom/editMessage", L("Failed to edit message.")),
  ...encryptedAction("gi.actions/chatroom/deleteMessage", L("Failed to delete message.")),
  ...encryptedAction("gi.actions/chatroom/deleteAttachment", L("Failed to delete attachment of message.")),
  ...encryptedAction("gi.actions/chatroom/makeEmotion", L("Failed to make emotion.")),
  ...encryptedAction("gi.actions/chatroom/pinMessage", L("Failed to pin message.")),
  ...encryptedAction("gi.actions/chatroom/unpinMessage", L("Failed to unpin message.")),
  ...encryptedAction("gi.actions/chatroom/join", L("Failed to join chat channel."), async (sendMessage, params, signingKeyId) => {
    const rootState = esm_default("state/vuex/state");
    const identityContractID2 = rootState.loggedIn.identityContractID;
    const userIDs = (Array.isArray(params.data.memberID) ? params.data.memberID : [params.data.memberID]).map((memberID) => memberID == null ? identityContractID2 : memberID);
    await esm_default("chelonia/contract/retain", userIDs, { ephemeral: true });
    try {
      await esm_default("chelonia/contract/wait", params.contractID);
      userIDs.forEach((cID) => {
        if (!cID || !has(rootState.contracts, cID) || !has(rootState, cID)) {
          throw new Error(`Unable to send gi.actions/chatroom/join on ${params.contractID} because user ID contract ${cID} is missing`);
        }
      });
      const CEKid = params.encryptionKeyId || await esm_default("chelonia/contract/currentKeyIdByName", params.contractID, "cek");
      const userCSKids = await Promise.all(userIDs.map(
        async (cID) => [cID, await esm_default("chelonia/contract/currentKeyIdByName", cID, "csk")]
      ));
      return await esm_default("chelonia/out/atomic", {
        ...params,
        contractName: "gi.contracts/chatroom",
        data: [
          // Add the user's CSK to the contract
          [
            "chelonia/out/keyAdd",
            {
              // TODO: Find a way to have this wrapping be done by Chelonia directly
              data: userCSKids.map(([cID, cskID]) => encryptedOutgoingData(params.contractID, CEKid, {
                foreignKey: `shelter:${encodeURIComponent(cID)}?keyName=${encodeURIComponent("csk")}`,
                id: cskID,
                data: rootState[cID]._vm.authorizedKeys[cskID].data,
                permissions: [SPMessage.OP_ACTION_ENCRYPTED + "#inner"],
                allowedActions: "*",
                purpose: ["sig"],
                ringLevel: Number.MAX_SAFE_INTEGER,
                name: `${cID}/${cskID}`
              }))
            }
          ],
          ...userIDs.map((cID) => sendMessage({
            ...params,
            data: cID === identityContractID2 ? {} : { memberID: cID },
            returnInvocation: true
          }))
        ],
        signingKeyId
      });
    } finally {
      await esm_default("chelonia/contract/release", userIDs, { ephemeral: true });
    }
  }),
  ...encryptedAction("gi.actions/chatroom/rename", L("Failed to rename chat channel.")),
  ...encryptedAction("gi.actions/chatroom/changeDescription", L("Failed to change chat channel description.")),
  ...encryptedAction("gi.actions/chatroom/leave", L("Failed to leave chat channel."), async (sendMessage, params, signingKeyId) => {
    const userID = params.data.memberID;
    const keyIds = userID && await esm_default("chelonia/contract/foreignKeysByContractID", params.contractID, userID);
    if (keyIds?.length) {
      return await esm_default("chelonia/out/atomic", {
        ...params,
        contractName: "gi.contracts/chatroom",
        data: [
          sendMessage({ ...params, returnInvocation: true }),
          // Remove the user's CSK from the contract
          [
            "chelonia/out/keyDel",
            {
              data: keyIds
            }
          ]
        ],
        signingKeyId
      });
    }
    return await sendMessage(params);
  }),
  ...encryptedAction("gi.actions/chatroom/delete", L("Failed to delete chat channel.")),
  ...encryptedAction("gi.actions/chatroom/voteOnPoll", L("Failed to vote on a poll.")),
  ...encryptedAction("gi.actions/chatroom/changeVoteOnPoll", L("Failed to change vote on a poll.")),
  ...encryptedAction("gi.actions/chatroom/closePoll", L("Failed to close a poll."))
});

// frontend/model/contracts/shared/voting/rules.js
var VOTE_AGAINST = ":against";
var VOTE_INDIFFERENT = ":indifferent";
var VOTE_UNDECIDED = ":undecided";
var VOTE_FOR = ":for";
var RULE_PERCENTAGE = "percentage";
var RULE_DISAGREEMENT = "disagreement";
var RULE_MULTI_CHOICE = "multi-choice";
var getPopulation = (state) => Object.keys(state.profiles).filter((p) => state.profiles[p].status === PROFILE_STATUS.ACTIVE).length;
var rules = {
  [RULE_PERCENTAGE]: function(state, proposalType2, votes) {
    votes = Object.values(votes);
    let population = getPopulation(state);
    if (proposalType2 === PROPOSAL_REMOVE_MEMBER) population -= 1;
    const defaultThreshold = state.settings.proposals[proposalType2].ruleSettings[RULE_PERCENTAGE].threshold;
    const threshold = getThresholdAdjusted(RULE_PERCENTAGE, defaultThreshold, population);
    const totalIndifferent = votes.filter((x2) => x2 === VOTE_INDIFFERENT).length;
    const totalFor = votes.filter((x2) => x2 === VOTE_FOR).length;
    const totalAgainst = votes.filter((x2) => x2 === VOTE_AGAINST).length;
    const totalForOrAgainst = totalFor + totalAgainst;
    const turnout = totalForOrAgainst + totalIndifferent;
    const absent = population - turnout;
    const neededToPass = Math.ceil(threshold * (population - totalIndifferent));
    console.debug(`votingRule ${RULE_PERCENTAGE} for ${proposalType2}:`, { neededToPass, totalFor, totalAgainst, totalIndifferent, threshold, absent, turnout, population });
    if (totalFor >= neededToPass) {
      return VOTE_FOR;
    }
    return totalFor + absent < neededToPass ? VOTE_AGAINST : VOTE_UNDECIDED;
  },
  [RULE_DISAGREEMENT]: function(state, proposalType2, votes) {
    votes = Object.values(votes);
    const population = getPopulation(state);
    const minimumMax = proposalType2 === PROPOSAL_REMOVE_MEMBER ? 2 : 1;
    const thresholdOriginal = Math.max(state.settings.proposals[proposalType2].ruleSettings[RULE_DISAGREEMENT].threshold, minimumMax);
    const threshold = getThresholdAdjusted(RULE_DISAGREEMENT, thresholdOriginal, population);
    const totalFor = votes.filter((x2) => x2 === VOTE_FOR).length;
    const totalAgainst = votes.filter((x2) => x2 === VOTE_AGAINST).length;
    const turnout = votes.length;
    const absent = population - turnout;
    console.debug(`votingRule ${RULE_DISAGREEMENT} for ${proposalType2}:`, { totalFor, totalAgainst, threshold, turnout, population, absent });
    if (totalAgainst >= threshold) {
      return VOTE_AGAINST;
    }
    return totalAgainst + absent < threshold ? VOTE_FOR : VOTE_UNDECIDED;
  },
  [RULE_MULTI_CHOICE]: function(state, proposalType2, votes) {
    throw new Error("unimplemented!");
  }
};
var rules_default = rules;
var ruleType = unionOf(...Object.keys(rules).map((k) => literalOf(k)));
var voteType = unionOf(...[VOTE_AGAINST, VOTE_INDIFFERENT, VOTE_UNDECIDED, VOTE_FOR].map((v2) => literalOf(v2)));
var getThresholdAdjusted = (rule, threshold, groupSize) => {
  const groupSizeVoting = Math.max(3, groupSize);
  return {
    [RULE_DISAGREEMENT]: () => {
      return Math.min(groupSizeVoting - 1, threshold);
    },
    [RULE_PERCENTAGE]: () => {
      const minThreshold = 2 / groupSizeVoting;
      return Math.max(minThreshold, threshold);
    }
  }[rule]();
};

// frontend/model/contracts/shared/voting/proposals.js
function notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height }) {
  delete state.proposals[proposalHash];
  esm_default(
    "gi.contracts/group/pushSideEffect",
    contractID,
    ["gi.contracts/group/makeNotificationWhenProposalClosed", state, contractID, meta, height, proposalHash, proposal]
  );
  esm_default(
    "gi.contracts/group/pushSideEffect",
    contractID,
    ["gi.contracts/group/archiveProposal", contractID, proposalHash, proposal]
  );
}
var proposalSettingsType = objectOf({
  rule: ruleType,
  expires_ms: number,
  ruleSettings: objectOf({
    [RULE_PERCENTAGE]: objectOf({ threshold: number }),
    [RULE_DISAGREEMENT]: objectOf({ threshold: number })
  })
});
function oneVoteToCloseWith(state, proposalHash, expectedResult) {
  const proposal = state.proposals[proposalHash];
  const votes = Object.assign({}, proposal.votes);
  const currentResult = rules_default[proposal.data.votingRule](state, proposal.data.proposalType, votes);
  votes[String(Math.random())] = expectedResult;
  const newResult = rules_default[proposal.data.votingRule](state, proposal.data.proposalType, votes);
  console.debug(`oneVoteToCloseWith currentResult(${currentResult}) newResult(${newResult})`);
  return newResult === expectedResult;
}
function oneVoteToPass(state, proposalHash) {
  return oneVoteToCloseWith(state, proposalHash, VOTE_FOR);
}
function oneVoteToFail(state, proposalHash) {
  return oneVoteToCloseWith(state, proposalHash, VOTE_AGAINST);
}
function voteAgainst(state, { meta, data, contractID, height }) {
  const { proposalHash } = data;
  const proposal = state.proposals[proposalHash];
  proposal.status = STATUS_FAILED;
  esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_AGAINST, data);
  notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
}
var proposalDefaults = {
  rule: RULE_PERCENTAGE,
  expires_ms: 14 * DAYS_MILLIS,
  ruleSettings: {
    [RULE_PERCENTAGE]: { threshold: 0.66 },
    [RULE_DISAGREEMENT]: { threshold: 1 }
  }
};
var proposals = {
  [PROPOSAL_INVITE_MEMBER]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.payload = data.passPayload;
      proposal.status = STATUS_PASSED;
      const forMessage = { ...message, data: data.passPayload };
      await esm_default("gi.contracts/group/invite/process", forMessage, state);
      esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_FOR, data);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_REMOVE_MEMBER]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash, passPayload } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      proposal.payload = passPayload;
      const messageData = proposal.data.proposalData;
      const forMessage = { ...message, data: messageData, proposalHash };
      await esm_default("gi.contracts/group/removeMember/process", forMessage, state);
      esm_default(
        "gi.contracts/group/pushSideEffect",
        contractID,
        ["gi.contracts/group/removeMember/sideEffect", forMessage]
      );
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_GROUP_SETTING_CHANGE]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      const { setting, proposedValue } = proposal.data.proposalData;
      const forMessage = {
        ...message,
        data: { [setting]: proposedValue },
        proposalHash
      };
      await esm_default("gi.contracts/group/updateSettings/process", forMessage, state);
      esm_default(
        "gi.contracts/group/pushSideEffect",
        contractID,
        ["gi.contracts/group/updateSettings/sideEffect", forMessage]
      );
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_PROPOSAL_SETTING_CHANGE]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      const forMessage = {
        ...message,
        data: proposal.data.proposalData,
        proposalHash
      };
      await esm_default("gi.contracts/group/updateAllVotingRules/process", forMessage, state);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_GENERIC]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: function(state, { data, contractID, meta, height }) {
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_FOR, data);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  }
};
var proposals_default = proposals;
var proposalType = unionOf(...Object.keys(proposals).map((k) => literalOf(k)));

// frontend/utils/image.js
function objectURLtoBlob(url) {
  return fetch(url).then((r) => r.blob());
}
var imageUpload = async (imageFile, params) => {
  const file = imageFile;
  console.debug("will upload a picture of type:", file.type);
  const { download } = await esm_default("chelonia/fileUpload", imageFile, { type: file.type, cipher: "aes256gcm" }, params);
  return download;
};

// frontend/controller/actions/group.js
esm_default("okTurtles.events/on", LEFT_GROUP, ({ identityContractID: identityContractID2, groupContractID }) => {
  const rootState = esm_default("chelonia/rootState");
  if (!rootState.notifications || rootState.loggedIn?.identityContractID !== identityContractID2) return;
  const notificationHashes = rootState.notifications.items.filter((item) => item.groupID === groupContractID).map((item) => item.hash);
  esm_default("gi.notifications/remove", notificationHashes);
});
var JOINED_FAILED_KEY = "gi.actions/group/join/failed";
var reattemptTimeoutId;
esm_default("okTurtles.events/on", CHELONIA_RESET, () => {
  esm_default("okTurtles.data/delete", JOINED_FAILED_KEY);
});
var group_default = esm_default("sbp/selectors/register", {
  "gi.actions/group/create": async function({
    data: {
      name,
      picture,
      sharedValues,
      mincomeAmount,
      mincomeCurrency,
      ruleName,
      ruleThreshold,
      distributionDate
    },
    publishOptions
  }) {
    let finalPicture = `${self.location.origin}/assets/images/group-avatar-default.png`;
    const rootState = esm_default("chelonia/rootState");
    const userID = rootState.loggedIn.identityContractID;
    if (picture) {
      try {
        finalPicture = await imageUpload(picture, { billableContractID: userID });
      } catch (e2) {
        console.error("actions/group.js failed to upload the group picture", e2);
        throw new GIErrorUIRuntimeError(L("Failed to upload the group picture. {codeError}", { codeError: e2.message }));
      }
    }
    const CSK = keygen(EDWARDS25519SHA512BATCH);
    const CEK = keygen(CURVE25519XSALSA20POLY1305);
    const inviteKey = keygen(EDWARDS25519SHA512BATCH);
    const SAK = keygen(EDWARDS25519SHA512BATCH);
    const CSKid = keyId(CSK);
    const CEKid = keyId(CEK);
    const inviteKeyId = keyId(inviteKey);
    const SAKid = keyId(SAK);
    const CSKp = serializeKey(CSK, false);
    const CEKp = serializeKey(CEK, false);
    const inviteKeyP = serializeKey(inviteKey, false);
    const SAKp = serializeKey(SAK, false);
    const CSKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(CSK, true));
    const CEKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(CEK, true));
    const inviteKeyS = encryptedOutgoingDataWithRawKey(CEK, serializeKey(inviteKey, true));
    const SAKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(SAK, true));
    try {
      const proposalSettings = {
        rule: ruleName,
        ruleSettings: {
          [ruleName]: {
            threshold: +ruleThreshold
            // ensure this is a number
          }
        }
      };
      if (!distributionDate) {
        distributionDate = dateToPeriodStamp(addTimeToDate(/* @__PURE__ */ new Date(), 3 * DAYS_MILLIS));
      }
      await esm_default(
        "chelonia/storeSecretKeys",
        new Secret([CEK, CSK].map((key) => ({ key, transient: true })))
      );
      const userCSKid = await esm_default("chelonia/contract/currentKeyIdByName", userID, "csk");
      if (!userCSKid) throw new Error("User CSK id not found");
      const userCEKid = await esm_default("chelonia/contract/currentKeyIdByName", userID, "cek");
      if (!userCEKid) throw new Error("User CEK id not found");
      const message = await esm_default("chelonia/out/registerContract", {
        contractName: "gi.contracts/group",
        publishOptions: {
          billableContractID: userID,
          ...publishOptions
        },
        signingKeyId: CSKid,
        actionSigningKeyId: CSKid,
        actionEncryptionKeyId: CEKid,
        keys: [
          {
            id: CSKid,
            name: "csk",
            purpose: ["sig"],
            ringLevel: 1,
            permissions: "*",
            allowedActions: "*",
            meta: {
              private: {
                content: CSKs,
                shareable: true
              }
            },
            data: CSKp
          },
          {
            id: CEKid,
            name: "cek",
            purpose: ["enc"],
            ringLevel: 1,
            permissions: "*",
            allowedActions: "*",
            meta: {
              private: {
                content: CEKs,
                shareable: true
              }
            },
            data: CEKp
          },
          {
            id: inviteKeyId,
            name: "#inviteKey-" + inviteKeyId,
            purpose: ["sig"],
            ringLevel: Number.MAX_SAFE_INTEGER,
            permissions: [SPMessage.OP_KEY_REQUEST],
            meta: {
              quantity: MAX_GROUP_MEMBER_COUNT,
              ...INVITE_EXPIRES_IN_DAYS.ON_BOARDING && {
                expires: await esm_default("chelonia/time") + DAYS_MILLIS * INVITE_EXPIRES_IN_DAYS.ON_BOARDING
              },
              private: {
                content: inviteKeyS
              }
            },
            data: inviteKeyP
          },
          {
            id: SAKid,
            name: "#sak",
            purpose: ["sak"],
            ringLevel: 0,
            permissions: [],
            allowedActions: [],
            meta: {
              private: {
                content: SAKs
              }
            },
            data: SAKp
          }
        ],
        data: {
          invites: {
            [inviteKeyId]: {
              creatorID: INVITE_INITIAL_CREATOR,
              inviteKeyId
            }
          },
          settings: {
            // authorizations: [contracts.CanModifyAuths.dummyAuth()], // TODO: this
            groupName: name,
            groupPicture: finalPicture,
            sharedValues,
            mincomeAmount: +mincomeAmount,
            mincomeCurrency,
            distributionDate,
            minimizeDistribution: true,
            proposals: {
              [PROPOSAL_GROUP_SETTING_CHANGE]: merge(
                merge({}, proposals_default[PROPOSAL_GROUP_SETTING_CHANGE].defaults),
                proposalSettings
              ),
              [PROPOSAL_INVITE_MEMBER]: merge(
                merge({}, proposals_default[PROPOSAL_INVITE_MEMBER].defaults),
                proposalSettings
              ),
              [PROPOSAL_REMOVE_MEMBER]: merge(
                merge({}, proposals_default[PROPOSAL_REMOVE_MEMBER].defaults),
                proposalSettings
              ),
              [PROPOSAL_PROPOSAL_SETTING_CHANGE]: merge(
                merge({}, proposals_default[PROPOSAL_PROPOSAL_SETTING_CHANGE].defaults),
                proposalSettings
              ),
              [PROPOSAL_GENERIC]: merge(
                merge({}, proposals_default[PROPOSAL_GENERIC].defaults),
                proposalSettings
              )
            }
          },
          groupOwnerID: userID
        }
      });
      const contractID = message.contractID();
      await esm_default(
        "chelonia/storeSecretKeys",
        new Secret([CEK, CSK, inviteKey].map((key) => ({ key })))
      );
      await esm_default("chelonia/contract/retain", contractID, { ephemeral: true });
      await Promise.race([
        (async () => {
          for (let i2 = 0; i2 < 10; i2++) {
            await esm_default("okTurtles.eventQueue/queueEvent", "encrypted-action", () => {
            });
            await esm_default("chelonia/contract/wait", contractID);
            const rootState2 = esm_default("chelonia/rootState");
            if (rootState2[contractID]?.generalChatRoomId) {
              return;
            }
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          throw new Error("#General still not found");
        })(),
        new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error("Waiting for chatroom creation is taking too long")), 5e3);
        })
      ]).catch((e2) => {
        console.error("Error waiting for new group contract to be ready", e2);
      });
      try {
        await esm_default("gi.actions/identity/joinGroup", {
          contractID: userID,
          data: {
            groupContractID: contractID,
            inviteSecret: serializeKey(CSK, true),
            creatorID: true
          }
        });
      } finally {
        await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
      }
      return message.contractID();
    } catch (e2) {
      console.error("gi.actions/group/create failed!", e2);
      throw new GIErrorUIRuntimeError(L("Failed to create the group: {reportError}", LError(e2)));
    }
  },
  // The 'gi.actions/group/join' selector handles joining a group. It can be
  // called from a variety of places: when accepting an invite, when logging
  // in, and asynchronously with an event handler defined in this function.
  // The function deals mostly with the group's contract state, and there are
  // multiple scenarios that need to be considered.
  // For example, when joining a group through an invite link, we need to
  // first send a key request that an existing group member must answer.
  // Until the key request has been answered, we cannot interact with the
  // group.
  // Once the key request is answered, we call the inviteAccept action to add
  // our profile to the group and then join the General chatroom. At this point,
  // we can fully interact with the group as a member.
  // When logging in, the situation is similar to immediately after joining
  // through an invite link, in that we could be: (a) waiting for the group
  // secret keys to be shared with us, (b) ready to call the inviteAccept
  // action if we haven't done so yet (because we were previously waiting for
  // the keys), or (c) already a member and ready to interact with the group.
  "gi.actions/group/join": function(params) {
    return esm_default("okTurtles.eventQueue/queueEvent", `JOIN_GROUP-${params.contractID}`, async () => {
      console.debug("[gi.actions/group/join] Scheduled call starting", params.contractID, params);
      const { loggedIn } = esm_default("chelonia/rootState");
      if (!loggedIn) throw new Error("[gi.actions/group/join] Not logged in");
      const { identityContractID: userID } = loggedIn;
      await esm_default("chelonia/contract/wait", [params.originatingContractID, params.contractID]);
      const retainedContracts = [.../* @__PURE__ */ new Set([params.contractID, params.originatingContractID])];
      await esm_default("chelonia/contract/retain", retainedContracts, { ephemeral: true });
      try {
        const rootState = esm_default("chelonia/rootState");
        if (!rootState.contracts[params.contractID]) {
          console.warn("[gi.actions/group/join] The group contract was removed after sync. If this happened during logging in, this likely means that we left the group on a different session.", { contractID: params.contractID });
          return;
        }
        if (rootState.contracts[params.contractID].type !== "gi.contracts/group") {
          throw Error(`Contract ${params.contractID} is not a group`);
        }
        const hasKeyShareBeenRespondedBy = await esm_default("chelonia/contract/hasKeyShareBeenRespondedBy", userID, params.contractID, params.reference);
        const state = rootState[params.contractID];
        const hasSecretKeys = await esm_default("chelonia/contract/receivedKeysToPerformOperation", userID, state, "*");
        const sendKeyRequest = !hasKeyShareBeenRespondedBy && !hasSecretKeys && !!params.originatingContractID;
        const pendingKeyShares = await esm_default("chelonia/contract/waitingForKeyShareTo", state, userID, params.reference);
        if (sendKeyRequest || pendingKeyShares) {
          const eventHandler = ({ contractID, sharedWithContractID, signingKeyName }) => {
            if (contractID !== params.contractID || sharedWithContractID !== userID || pendingKeyShares && !pendingKeyShares.includes(signingKeyName)) {
              return;
            }
            removeEventHandler();
            removeLogoutHandler();
            esm_default("gi.actions/group/join", params).catch((e2) => {
              console.error("[gi.actions/group/join] Error during join (inside CONTRACT_HAS_RECEIVED_KEYS event handler)", e2);
            });
          };
          const logoutHandler = () => {
            removeEventHandler();
          };
          const removeLogoutHandler = esm_default("okTurtles.events/once", LOGOUT, logoutHandler);
          const removeEventHandler = esm_default("okTurtles.events/on", CONTRACT_HAS_RECEIVED_KEYS, eventHandler);
        }
        if (sendKeyRequest) {
          await esm_default("chelonia/out/keyRequest", {
            ...omit(params, ["options"]),
            innerEncryptionKeyId: await esm_default("chelonia/contract/currentKeyIdByName", params.contractID, "cek"),
            reference: params.reference,
            encryptKeyRequestMetadata: true,
            hooks: {
              prepublish: params.hooks?.prepublish,
              postpublish: null
            }
          }).catch((e2) => {
            console.error(`[gi.actions/group/join] Error while sending key request for ${params.contractID}:`, e2?.message || e2, e2);
            throw e2;
          });
        } else if (hasSecretKeys && !pendingKeyShares) {
          if (state.profiles?.[userID]?.status !== PROFILE_STATUS.ACTIVE) {
            const CEKid = await esm_default("chelonia/contract/currentKeyIdByName", params.contractID, "cek");
            const PEKid = await esm_default("chelonia/contract/currentKeyIdByName", userID, "pek");
            const CSKid = await esm_default("chelonia/contract/currentKeyIdByName", params.contractID, "csk");
            const userCSKid = await esm_default("chelonia/contract/currentKeyIdByName", userID, "csk");
            const userCSKdata = rootState[userID]._vm.authorizedKeys[userCSKid].data;
            try {
              const existingForeignKeys = await esm_default("chelonia/contract/foreignKeysByContractID", params.contractID, userID);
              await esm_default("chelonia/out/atomic", {
                ...omit(params, ["options", "action", "hooks", "encryptionKeyId", "signingKeyId"]),
                data: [
                  // Share our PEK with the group so that group members can see
                  // our name and profile information
                  PEKid && await esm_default("gi.actions/out/shareVolatileKeys", {
                    contractID: params.contractID,
                    contractName: "gi.contracts/group",
                    subjectContractID: userID,
                    keyIds: [PEKid],
                    returnInvocation: true
                  }),
                  // Check to avoid adding existing keys to the contract
                  !existingForeignKeys?.includes(userCSKid) && ["chelonia/out/keyAdd", {
                    contractID: params.contractID,
                    contractName: "gi.contracts/group",
                    data: [encryptedOutgoingData(params.contractID, CEKid, {
                      foreignKey: `shelter:${encodeURIComponent(userID)}?keyName=${encodeURIComponent("csk")}`,
                      id: userCSKid,
                      data: userCSKdata,
                      permissions: [SPMessage.OP_ACTION_ENCRYPTED + "#inner"],
                      allowedActions: "*",
                      purpose: ["sig"],
                      ringLevel: Number.MAX_SAFE_INTEGER,
                      name: `${userID}/${userCSKid}`
                    })],
                    signingKeyId: CSKid
                  }],
                  // Send inviteAccept action to the group to add ourselves to the members list
                  await esm_default("gi.actions/group/inviteAccept", {
                    ...omit(params, ["options", "action", "hooks", "encryptionKeyId", "signingKeyId"]),
                    data: {
                      // The 'reference' value is used to help keep group joins
                      // updated. A matching value is required when leaving a group,
                      // which prevents us from accidentally leaving a group due to
                      // a previous leave action when re-joining
                      reference: rootState[userID].groups[params.contractID].hash
                    },
                    returnInvocation: true
                  })
                ].filter(Boolean),
                signingKeyId: CSKid,
                hooks: {
                  prepublish: params.hooks?.prepublish,
                  postpublish: null
                }
              });
            } catch (e2) {
              console.error(`[gi.actions/group/join] Error while accepting invite ${params.contractID}:`, e2);
              throw e2;
            }
          }
          await esm_default("chelonia/contract/wait", params.contractID);
          esm_default("okTurtles.events/emit", JOINED_GROUP, { identityContractID: userID, groupContractID: params.contractID });
        } else if (!hasSecretKeys && !pendingKeyShares) {
        } else if (pendingKeyShares) {
          console.info("Requested to join group but already waiting for OP_KEY_SHARE. contractID=" + params.contractID);
        } else {
          console.error("Requested to join group but the state appears invalid. This should be unreachable. contractID=" + params.contractID, { sendKeyRequest, hasSecretKeys, pendingKeyShares });
        }
      } catch (e2) {
        console.error("gi.actions/group/join failed!", e2);
        throw e2;
      } finally {
        await esm_default("chelonia/contract/release", retainedContracts, { ephemeral: true });
      }
    }).then(() => {
      const map = esm_default("okTurtles.data/get", JOINED_FAILED_KEY);
      map?.delete(params.contractID);
    }).catch((e2) => {
      let map = esm_default("okTurtles.data/get", JOINED_FAILED_KEY);
      if (!map) {
        map = /* @__PURE__ */ new Map();
        esm_default("okTurtles.data/set", JOINED_FAILED_KEY, map);
      }
      map.set(params.contractID, params);
      const scheduleReattempt = () => {
        if (reattemptTimeoutId === void 0) {
          reattemptTimeoutId = setTimeout(() => {
            reattemptTimeoutId = void 0;
            if (map.size === 0) return;
            esm_default("gi.actions/group/reattemptFailedJoins").catch((e3) => {
              console.error("Error running reattemptFailedJoins", e3);
              scheduleReattempt();
            });
          }, 6e4);
        }
      };
      scheduleReattempt();
      throw e2;
    });
  },
  "gi.actions/group/joinWithInviteSecret": async function(groupId, secret) {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn.identityContractID;
    await esm_default("chelonia/contract/wait", [groupId, identityContractID2]);
    try {
      await esm_default("chelonia/contract/retain", groupId, { ephemeral: true });
      await esm_default("gi.actions/identity/joinGroup", {
        contractID: identityContractID2,
        contractName: "gi.contracts/identity",
        data: {
          groupContractID: groupId,
          inviteSecret: secret
        }
      });
    } finally {
      await esm_default("chelonia/contract/release", groupId, { ephemeral: true });
    }
  },
  "gi.actions/group/reattemptFailedJoins": async function() {
    const ourGroups = esm_default("state/vuex/getters").ourGroups;
    const map = esm_default("okTurtles.data/get", JOINED_FAILED_KEY);
    if (!map) return;
    return await Promise.allSettled([...map.entries()].map(([contractID, params]) => {
      if (!ourGroups.includes(contractID)) {
        map.delete(contractID);
        return void 0;
      }
      return esm_default("gi.actions/group/join", params).catch((e2) => {
        console.error("Error on group join re-attempt", params, e2);
        throw e2;
      });
    })).then((results) => {
      if (results.some((result) => result.status === "rejected")) {
        throw new Error("Error on group join re-attempt");
      }
    });
  },
  "gi.actions/group/shareNewKeys": async (contractID, newKeys) => {
    const rootState = esm_default("chelonia/rootState");
    const state = rootState[contractID];
    const mainCEKid = await esm_default("chelonia/contract/currentKeyIdByName", state, "cek");
    return Promise.all(
      Object.entries(state.profiles).filter(([_, p]) => p.status === PROFILE_STATUS.ACTIVE).map(async ([pContractID]) => {
        const CEKid = await esm_default("chelonia/contract/currentKeyIdByName", rootState[pContractID], "cek");
        if (!CEKid) {
          console.warn(`Unable to share rotated keys for ${contractID} with ${pContractID}: Missing CEK`);
          return;
        }
        return [
          "chelonia/out/keyShare",
          {
            data: encryptedOutgoingData(contractID, mainCEKid, {
              contractID,
              foreignContractID: pContractID,
              // $FlowFixMe
              keys: Object.values(newKeys).map(([, newKey, newId]) => ({
                id: newId,
                meta: {
                  private: {
                    content: encryptedOutgoingData(pContractID, CEKid, serializeKey(newKey, true))
                  }
                }
              }))
            })
          }
        ];
      })
    ).then((keys) => [keys.filter(Boolean)]);
  },
  ...encryptedAction("gi.actions/group/addChatRoom", L("Failed to add chat channel"), async function(sendMessage, params) {
    const rootState = esm_default("chelonia/rootState");
    const contractState = rootState[params.contractID];
    const userID = rootState.loggedIn.identityContractID;
    for (const contractId in contractState.chatRooms) {
      if (params.data.attributes.name.toUpperCase().normalize() === contractState.chatRooms[contractId].name.toUpperCase().normalize()) {
        throw new GIErrorUIRuntimeError(L("Duplicate channel name"));
      }
    }
    const cskId = await esm_default("chelonia/contract/currentKeyIdByName", contractState, "csk");
    const csk = {
      id: cskId,
      foreignKey: `shelter:${encodeURIComponent(params.contractID)}?keyName=${encodeURIComponent("csk")}`,
      data: contractState._vm.authorizedKeys[cskId].data
    };
    const cekId = await esm_default("chelonia/contract/currentKeyIdByName", contractState, "cek");
    const cek = {
      id: cekId,
      foreignKey: `shelter:${encodeURIComponent(params.contractID)}?keyName=${encodeURIComponent("cek")}`,
      data: contractState._vm.authorizedKeys[cekId].data
    };
    const privateChatroom = ![CHATROOM_PRIVACY_LEVEL.GROUP, CHATROOM_PRIVACY_LEVEL.PUBLIC].includes(params.data.attributes.privacyLevel);
    const message = await esm_default("gi.actions/chatroom/create", {
      data: {
        ...params.data,
        attributes: {
          adminIDs: [contractState.groupOwnerID],
          ...params.data?.attributes
        }
      },
      options: {
        ...params.options,
        // The CSK and the CEK are the group's for non-private chatrooms
        // Otherwise, these are different from the group's, but they're still
        // passed as groupKeys, so that membership operations can be mirrored
        ...!privateChatroom ? {
          csk,
          cek
        } : {
          groupKeys: [csk, cek]
        }
      },
      hooks: {
        prepublish: params.hooks?.prepublish,
        postpublish: null
      }
    }, params.contractID);
    if (privateChatroom) {
      await esm_default("gi.actions/out/shareVolatileKeys", {
        contractID: userID,
        contractName: "gi.contracts/identity",
        subjectContractID: message.contractID(),
        keyIds: "*"
      });
    }
    await sendMessage({
      ...omit(params, ["options", "action", "data", "hooks"]),
      data: {
        ...params.data,
        chatRoomID: message.contractID()
      },
      hooks: {
        prepublish: null,
        postpublish: params.hooks?.postpublish
      }
    });
    return message;
  }),
  ...encryptedAction("gi.actions/group/joinChatRoom", L("Failed to join chat channel."), async function(sendMessage, params) {
    const rootState = esm_default("chelonia/rootState");
    const { identityContractID: identityContractID2 } = rootState.loggedIn;
    const memberID = params.data.memberID || identityContractID2;
    const chatRoomID = params.data.chatRoomID;
    const groupContractID = params.contractID;
    if (memberID !== identityContractID2 && rootState[chatRoomID].attributes.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE) {
      await esm_default("gi.actions/out/shareVolatileKeys", {
        contractID: memberID,
        contractName: "gi.contracts/identity",
        subjectContractID: chatRoomID,
        keyIds: "*"
      });
    }
    const switchChannelAfterJoined = (contractID) => {
      if (contractID === chatRoomID) {
        const getters4 = esm_default("state/vuex/getters");
        if (getters4.isJoinedChatRoom(contractID, identityContractID2)) {
          esm_default("okTurtles.events/emit", JOINED_CHATROOM, { identityContractID: identityContractID2, groupContractID, chatRoomID });
          esm_default("okTurtles.events/off", EVENT_HANDLED, switchChannelAfterJoined);
        }
      }
    };
    esm_default("okTurtles.events/on", EVENT_HANDLED, switchChannelAfterJoined);
    return sendMessage({
      ...omit(params, ["options", "action"])
    });
  }),
  "gi.actions/group/addAndJoinChatRoom": async function(params) {
    await esm_default("chelonia/contract/retain", params.contractID, { ephemeral: true });
    try {
      const message = await esm_default("gi.actions/group/addChatRoom", {
        ...omit(params, ["options", "hooks"]),
        hooks: {
          prepublish: params.hooks?.prepublish,
          postpublish: null
        }
      });
      const chatRoomID = message.contractID();
      await esm_default("chelonia/contract/sync", params.contractID);
      await esm_default("gi.actions/group/joinChatRoom", {
        ...omit(params, ["options", "data", "hooks"]),
        data: { chatRoomID },
        hooks: {
          postpublish: params.hooks?.postpublish
        }
      });
      return chatRoomID;
    } finally {
      esm_default("chelonia/contract/release", params.contractID, { ephemeral: true }).catch(
        (e2) => console.error("[gi.actions/group/addAndJoinChatRoom] Error releasing group chatroom", e2)
      );
    }
  },
  ...encryptedAction("gi.actions/group/renameChatRoom", L("Failed to rename chat channel."), async function(sendMessage, params) {
    await esm_default("gi.actions/chatroom/rename", {
      ...omit(params, ["options", "contractID", "data", "hooks"]),
      contractID: params.data.chatRoomID,
      data: {
        name: params.data.name
      },
      hooks: {
        prepublish: params.hooks?.prepublish,
        postpublish: null
      }
    });
    return await sendMessage({
      ...omit(params, ["options", "action", "hooks"]),
      hooks: {
        prepublish: null,
        postpublish: params.hooks?.postpublish
      }
    });
  }),
  "gi.actions/group/removeOurselves": (params) => {
    return esm_default("gi.actions/group/removeMember", {
      ...omit(params, ["options", "action"]),
      data: {}
    });
  },
  ...encryptedAction(
    "gi.actions/group/removeMember",
    (params, e2) => params.data.memberID ? L("Failed to remove {memberID}: {reportError}", { memberID: params.data.memberID, ...LError(e2) }) : L("Failed to leave group. {codeError}", { codeError: e2.message }),
    async function(sendMessage, params, signingKeyId) {
      await sendMessage({
        ...omit(params, ["options", "action"])
      });
    }
  ),
  ...encryptedAction(
    "gi.actions/group/changeChatRoomDescription",
    L("Failed to update description of chat channel."),
    async function(sendMessage, params) {
      await esm_default("gi.actions/chatroom/changeDescription", {
        ...omit(params, ["options", "contractID", "data", "hooks"]),
        contractID: params.data.chatRoomID,
        data: {
          description: params.data.description
        },
        hooks: {
          prepublish: params.hooks?.prepublish,
          postpublish: null
        }
      });
      return sendMessage({
        ...omit(params, ["options", "action", "hooks"]),
        hooks: {
          prepublish: null,
          postpublish: params.hooks?.postpublish
        }
      });
    }
  ),
  "gi.actions/group/autobanUser": async function(message, error, msgMeta, attempt = 1) {
    try {
      if (attempt === 1) {
        setTimeout(() => {
          esm_default("gi.actions/group/autobanUser", message, error, msgMeta, attempt + 1).catch((e2) => {
            console.error("[gi.actions/group/autobanUser] Error from setTimeout callback (1st attempt)", e2);
          });
        }, randomIntFromRange(0, 5e3));
        return;
      }
      const memberID = msgMeta && msgMeta.innerSigningContractID;
      const groupID = message.contractID();
      const rootState = esm_default("chelonia/rootState");
      const contractState = rootState[groupID];
      if (memberID && rootState.contracts[groupID]?.type === "gi.contracts/group" && contractState?.profiles?.[memberID]?.status === PROFILE_STATUS.ACTIVE) {
        const rootGetters = esm_default("state/vuex/getters");
        const username = rootGetters.usernameFromID(memberID);
        console.warn(`autoBanSenderOfMessage: autobanning ${memberID} (username ${username}) from ${groupID}`);
        let [proposalHash, proposal] = Object.entries(contractState.proposals).find(([hash, prop]) => prop.status === STATUS_OPEN && prop.data.proposalType === PROPOSAL_REMOVE_MEMBER && prop.data.proposalData.memberID === memberID) ?? ["", void 0];
        if (proposal) {
          if (!proposal.votes[rootState.loggedIn.identityContractID]) {
            await esm_default("gi.actions/group/proposalVote", {
              contractID: groupID,
              data: { proposalHash, vote: VOTE_FOR, passPayload: { secret: "" } },
              publishOptions: { maxAttempts: 3 }
            });
          }
        } else {
          try {
            proposal = await esm_default("gi.actions/group/proposal", {
              contractID: groupID,
              data: {
                proposalType: PROPOSAL_REMOVE_MEMBER,
                proposalData: {
                  memberID,
                  reason: L("Automated ban because they're sending malformed messages resulting in: {error}", { error: error.message }),
                  automated: true
                },
                votingRule: contractState.settings.proposals[PROPOSAL_REMOVE_MEMBER].rule,
                expires_date_ms: Date.now() + contractState.settings.proposals[PROPOSAL_REMOVE_MEMBER].expires_ms
              },
              publishOptions: { maxAttempts: 1 }
            });
          } catch (e2) {
            if (attempt > 3) {
              console.error(`autoBanSenderOfMessage: max attempts reached. Error ${e2.message} attempting to ban ${memberID}`, message, e2);
            } else {
              const randDelay = randomIntFromRange(0, 1500);
              console.warn(`autoBanSenderOfMessage: ${e2.message} attempting to ban ${memberID}, retrying in ${randDelay} ms...`, e2);
              setTimeout(() => {
                esm_default("gi.actions/group/autobanUser", message, error, msgMeta, attempt + 1).catch((e3) => {
                  console.error("[gi.actions/group/autobanUser] Error from setTimeout callback (> 3rd attempt)", e3);
                });
              }, randDelay);
            }
          }
        }
      }
    } catch (e2) {
      console.error(`${e2.name} during autoBanSenderOfMessage!`, message, e2);
    }
  },
  "gi.actions/group/notifyProposalStateInGeneralChatRoom": async function({ groupID, proposal }) {
    const { generalChatRoomId } = await esm_default("chelonia/contract/state", groupID);
    return esm_default("gi.actions/chatroom/addMessage", {
      contractID: generalChatRoomId,
      data: { type: MESSAGE_TYPES.INTERACTIVE, proposal }
    });
  },
  ...encryptedAction("gi.actions/group/notifyExpiringProposals", L("Failed to notify expiring proposals."), async function(sendMessage, params) {
    const { proposals: proposals2 } = params.data;
    await sendMessage({
      ...omit(params, ["options", "data", "action", "hooks"]),
      data: { proposalIds: proposals2.map((p) => p.proposalId) },
      hooks: {
        prepublish: params.hooks?.prepublish,
        postpublish: null
      }
    });
    for (let i2 = 0; i2 < proposals2.length; i2++) {
      await esm_default("gi.actions/group/notifyProposalStateInGeneralChatRoom", {
        groupID: params.contractID,
        proposal: { ...proposals2[i2], status: STATUS_EXPIRING }
      });
    }
  }),
  ...encryptedAction("gi.actions/group/leaveChatRoom", L("Failed to leave chat channel."), async (sendMessage, params) => {
    const state = await esm_default("chelonia/contract/state", params.contractID);
    const memberID = params.data.memberID || esm_default("state/vuex/state").loggedIn.identityContractID;
    const joinedHeight = state.chatRooms[params.data.chatRoomID].members[memberID].joinedHeight;
    await sendMessage({
      ...params,
      data: {
        ...params.data,
        joinedHeight
      }
    });
  }),
  ...encryptedAction("gi.actions/group/deleteChatRoom", L("Failed to delete chat channel.")),
  ...encryptedAction("gi.actions/group/invite", L("Failed to create invite.")),
  ...encryptedAction("gi.actions/group/inviteAccept", L("Failed to accept invite."), async function(sendMessage, params) {
    const response = await sendMessage(params);
    esm_default("okTurtles.events/emit", ACCEPTED_GROUP, { contractID: params.contractID });
    return response;
  }),
  ...encryptedAction("gi.actions/group/inviteRevoke", L("Failed to revoke invite."), async function(sendMessage, params, signingKeyId) {
    await esm_default("chelonia/out/keyDel", {
      contractID: params.contractID,
      contractName: "gi.contracts/group",
      data: [params.data.inviteKeyId],
      signingKeyId
    });
    return sendMessage(params);
  }),
  ...encryptedAction("gi.actions/group/payment", L("Failed to create payment.")),
  ...encryptedAction("gi.actions/group/paymentUpdate", L("Failed to update payment.")),
  ...encryptedAction("gi.actions/group/sendPaymentThankYou", L("Failed to send a payment thank you note.")),
  ...encryptedAction("gi.actions/group/groupProfileUpdate", L("Failed to update group profile.")),
  ...encryptedAction("gi.actions/group/proposal", L("Failed to create proposal."), (sendMessage, params) => {
    const { contractID } = params;
    return sendMessage({
      ...params,
      hooks: {
        onprocessed: async (message) => {
          try {
            const proposalId = message.hash();
            const state = await esm_default("chelonia/contract/state", contractID);
            const proposal = state.proposals[proposalId];
            const proposalToSend = extractProposalData(proposal, { proposalId, status: STATUS_OPEN });
            await esm_default("gi.actions/group/notifyProposalStateInGeneralChatRoom", { groupID: contractID, proposal: proposalToSend });
          } catch (e2) {
            console.error(`[gi.actions/group/proposal] Error while notifying proposal creation in general chatroom ${contractID}:`, e2);
            throw e2;
          }
        }
      }
    });
  }),
  ...encryptedAction("gi.actions/group/proposalVote", L("Failed to vote on proposal."), async (sendMessage, params) => {
    const { contractID, data } = params;
    const state = await esm_default("chelonia/contract/state", contractID);
    const proposalHash = data.proposalHash;
    const proposal = state.proposals[proposalHash];
    const type = proposal.data.proposalType;
    const willBePassed = oneVoteToPass(state, proposalHash);
    const willBeFailed = oneVoteToFail(state, proposalHash);
    const isVoteFor = data.vote === VOTE_FOR;
    const isVoteAgainst = !isVoteFor;
    let passPayload = isVoteFor ? {} : void 0;
    let proposalToSend;
    if (willBePassed && isVoteFor) {
      if (type === PROPOSAL_INVITE_MEMBER) {
        passPayload = await createInvite({
          contractID,
          invitee: proposal.data.proposalData.memberName,
          creatorID: proposal.creatorID,
          expires: state.settings.inviteExpiryProposal
        });
      }
      proposalToSend = extractProposalData(proposal, { proposalId: proposalHash, status: STATUS_PASSED });
    } else if (willBeFailed && isVoteAgainst) {
      proposalToSend = extractProposalData(proposal, { proposalId: proposalHash, status: STATUS_FAILED });
    }
    const response = await sendMessage({ ...params, data: { ...data, passPayload } });
    if (proposalToSend) {
      await esm_default("gi.actions/group/notifyProposalStateInGeneralChatRoom", {
        groupID: contractID,
        proposal: proposalToSend
      });
    }
    return response;
  }),
  ...encryptedAction("gi.actions/group/proposalCancel", L("Failed to cancel proposal."), async function(sendMessage, params) {
    const { contractID, data } = params;
    const state = await esm_default("chelonia/contract/state", contractID);
    const proposal = state.proposals[data.proposalHash];
    const proposalToSend = extractProposalData(proposal, { proposalId: data.proposalHash, status: STATUS_CANCELLED });
    const response = await sendMessage(params);
    await esm_default("gi.actions/group/notifyProposalStateInGeneralChatRoom", { groupID: contractID, proposal: proposalToSend });
    return response;
  }),
  ...encryptedAction("gi.actions/group/markProposalsExpired", L("Failed to mark proposals expired."), async function(sendMessage, params) {
    const { contractID, data } = params;
    const state = await esm_default("chelonia/contract/state", contractID);
    for (const proposalHash of data.proposalIds) {
      const proposal = state.proposals[proposalHash];
      const proposalToSend = extractProposalData(proposal, { proposalId: proposalHash, status: STATUS_EXPIRED });
      await esm_default("gi.actions/group/notifyProposalStateInGeneralChatRoom", { groupID: contractID, proposal: proposalToSend });
    }
    const response = await sendMessage(params);
    return response;
  }),
  "gi.actions/group/_ondeleted": async (contractID, state) => {
    const rootGetters = esm_default("state/vuex/getters");
    const identityContractID2 = rootGetters.ourIdentityContractId;
    const currentIdentityState = rootGetters.currentIdentityState;
    if (!!currentIdentityState.groups?.[contractID] && !currentIdentityState.groups[contractID].hasLeft) {
      await esm_default("gi.actions/identity/leaveGroup", {
        contractID: identityContractID2,
        data: {
          groupContractID: contractID,
          reference: state.profiles?.[identityContractID2]?.reference
        }
      }).catch((e2) => {
        console.warn(`[handleDeletedContract] ${e2.name} thrown by gi.actions/identity/leaveGroup ${identityContractID2} for ${contractID}:`, e2);
      });
    }
  },
  ...encryptedAction("gi.actions/group/updateSettings", L("Failed to update group settings.")),
  ...encryptedAction("gi.actions/group/updateAllVotingRules", (params, e2) => L("Failed to update voting rules. {codeError}", { codeError: e2.message })),
  ...encryptedAction("gi.actions/group/updateDistributionDate", L("Failed to update group distribution date.")),
  ...encryptedAction("gi.actions/group/updateGroupInviteExpiry", L("Failed to update group invite expiry.")),
  ...{
    ...encryptedAction("gi.actions/group/forceDistributionDate", L("Failed to force distribution date."))
  }
});

// frontend/controller/actions/group-kv.js
esm_default("okTurtles.events/on", ONLINE, () => {
  if (!esm_default("state/vuex/state").loggedIn?.identityContractID) {
    return;
  }
  esm_default("gi.actions/group/kv/load").catch((e2) => {
    console.error("Error from 'gi.actions/group/kv/load' after reestablished connection:", e2);
  });
});
var group_kv_default = esm_default("sbp/selectors/register", {
  "gi.actions/group/kv/load": async () => {
    console.info("loading data from group key-value store...");
    esm_default("okTurtles.events/emit", NEW_KV_LOAD_STATUS, { name: "group", status: KV_LOAD_STATUS.LOADING });
    const cheloniaState = await esm_default("chelonia/rootState");
    const identityContractID2 = cheloniaState.loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to fetch group data without an active session");
    }
    await Promise.all(
      Object.entries(cheloniaState[identityContractID2].groups || {}).map(([contractID, state]) => {
        if (state.hasLeft) return void 0;
        return esm_default("chelonia/queueInvocation", contractID, ["gi.actions/group/kv/loadLastLoggedIn", { contractID }]);
      })
    );
    console.info("group key-value store data loaded!");
    esm_default("okTurtles.events/emit", NEW_KV_LOAD_STATUS, { name: "group", status: KV_LOAD_STATUS.LOADED });
  },
  "gi.actions/group/kv/fetchLastLoggedIn": async ({ contractID }) => {
    const kvData = await esm_default("chelonia/kv/get", contractID, KV_KEYS.LAST_LOGGED_IN);
    if (kvData) {
      return kvData.data;
    }
    return /* @__PURE__ */ Object.create(null);
  },
  "gi.actions/group/kv/loadLastLoggedIn": ({ contractID }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const data = await esm_default("gi.actions/group/kv/fetchLastLoggedIn", { contractID });
      esm_default("okTurtles.events/emit", NEW_LAST_LOGGED_IN, [contractID, data]);
    }).catch((e2) => {
      console.error("[gi.actions/group/kv/loadLastLoggedIn] Error loading last logged in", e2);
    });
  },
  "gi.actions/group/kv/updateLastLoggedIn": ({ contractID, throttle: throttle2 }) => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to update lastLoggedIn without an active session");
    }
    const now = esm_default("chelonia/time");
    if (throttle2) {
      const state = esm_default("state/vuex/state");
      const lastLoggedInRawValue = state.lastLoggedIn?.[contractID]?.[identityContractID2];
      if (lastLoggedInRawValue) {
        const lastLoggedIn = new Date(lastLoggedInRawValue).getTime();
        if (now - lastLoggedIn < LAST_LOGGED_IN_THROTTLE_WINDOW) return;
      }
    }
    const nowString = new Date(now).toISOString();
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const constructUpdatedLastLoggedIn = ({ etag, currentData = {} } = {}) => {
        return [{ ...currentData, [identityContractID2]: nowString }, etag];
      };
      const data = constructUpdatedLastLoggedIn()[0];
      await esm_default("chelonia/kv/set", contractID, KV_KEYS.LAST_LOGGED_IN, data, {
        encryptionKeyId: await esm_default("chelonia/contract/currentKeyIdByName", contractID, "cek"),
        signingKeyId: await esm_default("chelonia/contract/currentKeyIdByName", contractID, "csk"),
        onconflict: constructUpdatedLastLoggedIn
      });
    });
  }
});

// frontend/model/database.js
var _instances = [];
var localforage = {
  async ready() {
    await Promise.all(_instances.map((lazyInitDb) => lazyInitDb()));
  },
  createInstance({ name, storeName }) {
    const lazyInitDb = /* @__PURE__ */ (() => {
      let promise;
      return () => {
        if (!promise) {
          promise = new Promise((resolve, reject) => {
            if (name.includes("-") || storeName.includes("-")) {
              reject(new Error("Unsupported characters in name: -"));
              return;
            }
            const openDB = (version) => {
              const request = self.indexedDB.open(name + "--" + storeName, version);
              request.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore(storeName);
              };
              request.onsuccess = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(storeName)) {
                  return openDB(db.version + 1);
                }
                resolve(db);
              };
              request.onerror = (error) => {
                reject(error);
              };
              request.onblocked = (event) => {
                reject(new Error("DB is blocked"));
              };
            };
            openDB();
          });
        }
        return promise;
      };
    })();
    _instances.push(lazyInitDb);
    return {
      async clear() {
        const db = await lazyInitDb();
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.clear();
        return new Promise((resolve, reject) => {
          request.onsuccess = () => {
            resolve();
          };
          request.onerror = (e2) => {
            reject(e2);
          };
        });
      },
      async getItem(key) {
        const db = await lazyInitDb();
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(key);
        return new Promise((resolve, reject) => {
          request.onsuccess = (event) => {
            resolve(event.target.result);
          };
          request.onerror = (e2) => {
            reject(e2);
          };
        });
      },
      async removeItem(key) {
        const db = await lazyInitDb();
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.delete(key);
        return new Promise((resolve, reject) => {
          request.onsuccess = () => {
            resolve();
          };
          request.onerror = (e2) => {
            reject(e2.target.error);
          };
        });
      },
      async removeMany(keys) {
        const db = await lazyInitDb();
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        for (const key of keys) {
          objectStore.delete(key);
        }
        return new Promise((resolve, reject) => {
          transaction.oncomplete = () => resolve();
          transaction.onerror = (e2) => reject(e2.target.error);
          transaction.onabort = (e2) => reject(e2.target.error);
        });
      },
      async setItem(key, value) {
        const db = await lazyInitDb();
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.put(value, key);
        return new Promise((resolve, reject) => {
          request.onsuccess = () => {
            resolve();
          };
          request.onerror = (e2) => {
            reject(e2.target.error);
          };
        });
      }
    };
  }
};
var generateEncryptionParams = async (stateKeyEncryptionKeyFn) => {
  const stateEncryptionKey = keygen(CURVE25519XSALSA20POLY1305);
  const stateEncryptionKeyId = keyId(stateEncryptionKey);
  const stateEncryptionKeyS = serializeKey(stateEncryptionKey, true);
  const stateEncryptionKeyP = serializeKey(stateEncryptionKey, false);
  const salt = generateSalt();
  const stateKeyEncryptionKey = await stateKeyEncryptionKeyFn(stateEncryptionKeyId, salt);
  const encryptedStateEncryptionKey = encrypt(stateKeyEncryptionKey, stateEncryptionKeyS, stateEncryptionKeyId);
  return {
    encryptionParams: {
      stateEncryptionKeyId,
      salt,
      encryptedStateEncryptionKey
    },
    stateEncryptionKeyP
  };
};
if (false) {
  const log = localforage.createInstance({
    name: "Group Income",
    storeName: "Contracts"
  });
  esm_default("sbp/selectors/overwrite", {
    "chelonia.db/get": (key) => log.getItem(key),
    // TODO: handle QuotaExceededError
    "chelonia.db/set": (key, value) => log.setItem(key, value),
    "chelonia.db/delete": (key) => log.removeItem(key)
  });
  esm_default("sbp/selectors/lock", ["chelonia.db/get", "chelonia.db/set", "chelonia.db/delete"]);
}
var appSettings = localforage.createInstance({
  name: "Group Income",
  storeName: "Settings"
});
var EmptyValue = class extends Error {
};
var SETTING_CURRENT_USER = "@settings/currentUser";
var SETTING_CHELONIA_STATE = "CHELONIA_STATE";
esm_default("sbp/selectors/register", {
  "gi.db/ready": function() {
    return localforage.ready();
  },
  "gi.db/settings/save": function(key, value) {
    return appSettings.setItem("u" + key, value);
  },
  "gi.db/settings/load": function(key) {
    return appSettings.getItem("u" + key);
  },
  "gi.db/settings/delete": function(key) {
    return appSettings.removeItem("u" + key);
  },
  "gi.db/settings/saveEncrypted": async function(key, value, encryptionParams) {
    const {
      stateEncryptionKeyId,
      salt,
      encryptedStateEncryptionKey
    } = encryptionParams;
    const stateEncryptionKeyP = await appSettings.getItem("k" + stateEncryptionKeyId);
    if (!stateEncryptionKeyP) throw new Error(`Unable to retrieve the key corresponding to key ID ${stateEncryptionKeyId}`);
    const encryptedState = encrypt(stateEncryptionKeyP, JSON.stringify(value), key);
    return appSettings.setItem("e" + key, `${btoa(stateEncryptionKeyId)}.${btoa(salt)}.${btoa(encryptedStateEncryptionKey)}.${btoa(encryptedState)}`).finally(() => {
      esm_default("gi.db/settings/delete", key).catch((e2) => {
        console.error("[gi.db/settings/saveEncrypted] Error deleting unencrypted data for key", key, e2);
      });
    });
  },
  "gi.db/settings/loadEncrypted": function(key, stateKeyEncryptionKeyFn) {
    return appSettings.getItem("e" + key).then(async (encryptedValue) => {
      if (!encryptedValue || typeof encryptedValue !== "string") {
        throw new EmptyValue(`Unable to retrive state for ${key || ""}`);
      }
      const [stateEncryptionKeyId, salt, encryptedStateEncryptionKey, data] = encryptedValue.split(".").map((x2) => atob(x2));
      const stateKeyEncryptionKey = await stateKeyEncryptionKeyFn(stateEncryptionKeyId, salt);
      const stateEncryptionKeyS = decrypt(stateKeyEncryptionKey, encryptedStateEncryptionKey, stateEncryptionKeyId);
      const stateEncryptionKeyIdActual = keyId(stateEncryptionKeyS);
      if (stateEncryptionKeyIdActual !== stateEncryptionKeyId) {
        throw new Error(`Invalid state key ID: expected ${stateEncryptionKeyId} but got ${stateEncryptionKeyIdActual}`);
      }
      const value = JSON.parse(decrypt(stateEncryptionKeyS, data, key || ""));
      await appSettings.setItem("k" + stateEncryptionKeyId, stateEncryptionKeyS);
      return {
        encryptionParams: {
          stateEncryptionKeyId,
          salt,
          encryptedStateEncryptionKey
        },
        value
      };
    }).catch(async (e2) => {
      if (!stateKeyEncryptionKeyFn) {
        throw e2;
      }
      if (!(e2 instanceof EmptyValue)) {
        console.warn("Error while retrieving local state", e2);
      }
      const { encryptionParams, stateEncryptionKeyP } = await generateEncryptionParams(stateKeyEncryptionKeyFn);
      await appSettings.setItem("k" + encryptionParams.stateEncryptionKeyId, stateEncryptionKeyP);
      return {
        encryptionParams,
        value: null
      };
    });
  },
  "gi.db/settings/deleteStateEncryptionKey": function({ stateEncryptionKeyId }) {
    return appSettings.removeItem("k" + stateEncryptionKeyId);
  },
  "gi.db/settings/deleteEncrypted": function(key) {
    return appSettings.removeItem("e" + key);
  }
});
var filesCache = localforage.createInstance({
  name: "Group Income",
  storeName: "Files Cache"
});
var maxFileEntries = 100;
esm_default("sbp/selectors/register", {
  "gi.db/filesCache/save": async function(cacheKey, blob) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    const keys = await filesCache.getItem("keys") ?? [];
    return esm_default("okTurtles.eventQueue/queueEvent", "gi.db/files", () => {
      return filesCache.setItem(cacheKey, blob).then(async (v2) => {
        console.log("successfully saved:", cacheKey);
        const idx = keys.indexOf(cacheKey);
        if (idx !== -1) {
          keys.splice(idx, 1);
        }
        keys.push(cacheKey);
        if (keys.length > maxFileEntries) {
          const last = keys.splice(0, keys.length - maxFileEntries);
          await Promise.all(last.map((e2) => filesCache.removeItem(e2)));
        }
        await filesCache.setItem("keys", keys);
      }).catch((e2) => {
        console.error("error saving:", cacheKey, e2);
      });
    });
  },
  "gi.db/filesCache/load": async function(cacheKey) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    const file = await filesCache.getItem(cacheKey);
    if (file) {
      esm_default("okTurtles.eventQueue/queueEvent", "gi.db/files", async () => {
        const keys = await filesCache.getItem("keys") ?? [];
        const idx = keys.indexOf(cacheKey);
        if (idx !== -1) {
          keys.splice(idx, 1);
          keys.push(cacheKey);
          await filesCache.setItem("keys", keys);
        }
      }).catch((e2) => {
        console.error("[gi.db/filesCache/load] Error updating keys");
      });
    }
    return file;
  },
  "gi.db/filesCache/delete": async function(cacheKey) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    await filesCache.removeItem(cacheKey);
    esm_default("okTurtles.eventQueue/queueEvent", "gi.db/files", async () => {
      const keys = await filesCache.getItem("keys") ?? [];
      const idx = keys.indexOf(cacheKey);
      if (idx !== -1) {
        keys.splice(idx, 1);
        await filesCache.setItem("keys", keys);
      }
    }).catch((e2) => {
      console.error("[gi.db/filesCache/delete] Error updating keys");
    });
  },
  "gi.db/filesCache/clear": async function() {
    await filesCache.clear();
  },
  "gi.db/filesCache/temporary/save": function(cacheKey, blob) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    return esm_default("gi.db/filesCache/save", `temporary/${cacheKey}/`, blob);
  },
  "gi.db/filesCache/temporary/load": function(cacheKey) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    return esm_default("gi.db/filesCache/load", `temporary/${cacheKey}/`);
  },
  "gi.db/filesCache/temporary/delete": function(cacheKey) {
    if (cacheKey.startsWith("__")) throw new Error("Invalid key");
    return esm_default("gi.db/filesCache/delete", `temporary/${cacheKey}/`);
  },
  "gi.db/filesCache/temporary/clear": function() {
    esm_default("okTurtles.eventQueue/queueEvent", "gi.db/files", async () => {
      const keys = await filesCache.getItem("keys") ?? [];
      const allTempKeys = keys.filter((k) => k.startsWith("temporary/"));
      await filesCache.removeMany(allTempKeys);
    }).catch((e2) => {
      console.error("[gi.db/filesCache/temporary/clear] Error removing temporary keys", e2);
    });
  }
});
var archive = localforage.createInstance({
  name: "Group Income",
  storeName: "Archive"
});
esm_default("sbp/selectors/register", {
  "gi.db/archive/save": function(key, value) {
    return archive.setItem(key, value);
  },
  "gi.db/archive/load": function(key) {
    return archive.getItem(key);
  },
  "gi.db/archive/delete": function(key) {
    return archive.removeItem(key);
  },
  "gi.db/archive/clear": function() {
    return archive.clear();
  }
});
var logs = localforage.createInstance({
  name: "Group Income",
  storeName: "Logs"
});
esm_default("sbp/selectors/register", {
  "gi.db/logs/save": function(key, value) {
    return logs.setItem(key, value);
  },
  "gi.db/logs/load": function(key) {
    return logs.getItem(key);
  },
  "gi.db/logs/delete": function(key) {
    return logs.removeItem(key);
  },
  "gi.db/logs/clear": function() {
    return logs.clear();
  }
});

// frontend/controller/utils/misc.js
function handleFetchResult2(type) {
  return function(r) {
    if (!r.ok) {
      const msg = `${r.status}: ${r.statusText}`;
      if (r.status === 404 || r.status === 410) throw new ChelErrorResourceGone(msg, { cause: r.status });
      throw new ChelErrorUnexpectedHttpResponseCode(msg);
    }
    return r[type]();
  };
}

// frontend/controller/actions/identity.js
var decryptOldIekList = (contractID, IEK, encryptedData) => {
  if (!encryptedData) return [];
  try {
    const parsedData = JSON.parse(encryptedData);
    const decryptedData = encryptedIncomingDataWithRawKey(IEK, parsedData, `meta.private.oldKeys;${contractID}`);
    const oldKeysList = JSON.parse(decryptedData.valueOf());
    return oldKeysList;
  } catch (error) {
    console.error("[decryptOldIekList] Error during decryption", error);
  }
};
var processOldIekList = async (identityContractID2, oldKeysAnchorCid, IEK) => {
  try {
    const result = await fetch(`${esm_default("okTurtles.data/get", "API_URL")}/file/${oldKeysAnchorCid}`).then(handleFetchResult2("json"));
    const oldKeys = (() => {
      const data = rawSignedIncomingData(result);
      const head = JSON.parse(data.get("head"));
      if (head.contractID !== identityContractID2) {
        throw new Error("Unexpected contract ID.");
      }
      if (![SPMessage.OP_ATOMIC, SPMessage.OP_KEY_UPDATE].includes(head.op)) {
        throw new Error("Unsupported opcode: " + head.op);
      }
      const payload = head.op === SPMessage.OP_KEY_UPDATE ? [[SPMessage.OP_KEY_UPDATE, data.valueOf()]] : data.valueOf();
      return payload.filter(([op]) => op === SPMessage.OP_KEY_UPDATE).flatMap(([, keys]) => keys).find((key) => key.name === "iek" && key.meta?.private?.oldKeys)?.meta.private.oldKeys;
    })();
    if (!oldKeys) {
      console.error("[processOldIekList] Error finding old IEKs, logging in will probably fail due to missing keys");
    }
    const decryptedKeys = decryptOldIekList(identityContractID2, IEK, oldKeys);
    if (!decryptedKeys) {
      console.error("[processOldIekList] Error decrypting old IEKs, logging in will probably fail due to missing keys");
    } else {
      const secretKeys = decryptedKeys.map((key) => ({ key: deserializeKey(key), transient: true }));
      await esm_default("chelonia/storeSecretKeys", new Secret(secretKeys));
    }
  } catch (error) {
    console.error("[processOldIekList] Error fetching or processing old keys:", error);
  }
};
var appendToIekList = (contractID, IEK, oldIEK, encryptedData) => {
  const oldKeys = decryptOldIekList(contractID, oldIEK, encryptedData);
  if (!oldKeys) {
    throw new Error("Error decrypting old IEK list");
  }
  const keysSet = new Set(oldKeys);
  const serializedOldIEK = serializeKey(oldIEK, true);
  keysSet.add(serializedOldIEK);
  const updatedKeysData = encryptedOutgoingDataWithRawKey(
    IEK,
    // Convert Set back to Array for serialization
    JSON.stringify(Array.from(keysSet))
  ).toString(`meta.private.oldKeys;${contractID}`);
  return updatedKeysData;
};
esm_default("okTurtles.events/on", EVENT_HANDLED, (contractID, message) => {
  const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
  if (contractID !== identityContractID2 || ![SPMessage.OP_ATOMIC, SPMessage.OP_KEY_UPDATE].includes(message.opType())) return;
  const hasNewCsk = esm_default("chelonia/contract/currentKeyIdByName", identityContractID2, "csk", true);
  if (hasNewCsk) return;
  console.warn("Likely password change for identity contract. Logging us out.", identityContractID2);
  esm_default("gi.actions/identity/logout").catch((e2) => {
    console.error("Error while automatically logging out", e2);
  });
});
var identity_default = esm_default("sbp/selectors/register", {
  "gi.actions/identity/create": async function({
    IPK: wIPK,
    IEK: wIEK,
    publishOptions,
    username,
    email,
    picture,
    token
  }) {
    let finalPicture = `${self.location.origin}/assets/images/user-avatar-default.png`;
    wIPK = wIPK.valueOf();
    wIEK = wIEK.valueOf();
    const IPK = typeof wIPK === "string" ? deserializeKey(wIPK) : wIPK;
    const IEK = typeof wIEK === "string" ? deserializeKey(wIEK) : wIEK;
    const deletionToken = "deletionToken" + generateSalt();
    const deletionTokenHash = blake32Hash(deletionToken);
    const CSK = keygen(EDWARDS25519SHA512BATCH);
    const CEK = keygen(CURVE25519XSALSA20POLY1305);
    const PEK = keygen(CURVE25519XSALSA20POLY1305);
    const DMK = keygen(EDWARDS25519SHA512BATCH);
    const SAK = keygen(EDWARDS25519SHA512BATCH);
    const IPKid = keyId(IPK);
    const IEKid = keyId(IEK);
    const CSKid = keyId(CSK);
    const CEKid = keyId(CEK);
    const PEKid = keyId(PEK);
    const DMKid = keyId(DMK);
    const SAKid = keyId(SAK);
    const IPKp = serializeKey(IPK, false);
    const IEKp = serializeKey(IEK, false);
    const CSKp = serializeKey(CSK, false);
    const CEKp = serializeKey(CEK, false);
    const PEKp = serializeKey(PEK, false);
    const DMKp = serializeKey(DMK, false);
    const SAKp = serializeKey(SAK, false);
    const CSKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(CSK, true));
    const CEKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(CEK, true));
    const PEKs = encryptedOutgoingDataWithRawKey(CEK, serializeKey(PEK, true));
    const DMKs = encryptedOutgoingDataWithRawKey(PEK, serializeKey(DMK, true));
    const SAKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(SAK, true));
    const encryptedDeletionToken = encryptedOutgoingDataWithRawKey(IEK, deletionToken);
    await esm_default(
      "chelonia/storeSecretKeys",
      new Secret([IPK, IEK, CEK, CSK, PEK, SAK, DMK].map((key) => ({ key, transient: true })))
    );
    let userID;
    try {
      await esm_default("chelonia/out/registerContract", {
        contractName: "gi.contracts/identity",
        publishOptions: {
          ...publishOptions,
          headers: {
            ...publishOptions?.headers,
            "shelter-deletion-token-digest": deletionTokenHash,
            "shelter-namespace-registration": username,
            "shelter-salt-registration-token": token.valueOf()
          }
        },
        signingKeyId: IPKid,
        actionSigningKeyId: CSKid,
        actionEncryptionKeyId: PEKid,
        keys: [
          {
            id: IPKid,
            name: "ipk",
            purpose: ["sig"],
            ringLevel: 0,
            permissions: "*",
            allowedActions: "*",
            meta: {
              private: {
                transient: true
              }
            },
            data: IPKp
          },
          {
            id: IEKid,
            name: "iek",
            purpose: ["enc"],
            ringLevel: 0,
            // TODO: Does this 'gi.contracts/identity/keymeta' pseudo selector
            // make sense here? It is not being used and these types of permissions
            // can be problematic because selectors can be updated
            permissions: ["gi.contracts/identity/keymeta"],
            meta: {
              private: {
                transient: true
              }
            },
            data: IEKp
          },
          {
            id: CSKid,
            name: "csk",
            purpose: ["sig"],
            ringLevel: 1,
            permissions: [SPMessage.OP_KEY_ADD, SPMessage.OP_KEY_DEL, SPMessage.OP_ACTION_UNENCRYPTED, SPMessage.OP_ACTION_ENCRYPTED, SPMessage.OP_ATOMIC, SPMessage.OP_CONTRACT_AUTH, SPMessage.OP_CONTRACT_DEAUTH, SPMessage.OP_KEY_SHARE, SPMessage.OP_KEY_UPDATE, SPMessage.OP_ACTION_ENCRYPTED + "#inner"],
            allowedActions: "*",
            meta: {
              private: {
                content: CSKs
              }
            },
            data: CSKp
          },
          {
            id: CEKid,
            name: "cek",
            purpose: ["enc"],
            ringLevel: 1,
            permissions: [SPMessage.OP_ACTION_ENCRYPTED, SPMessage.OP_KEY_ADD, SPMessage.OP_KEY_DEL, SPMessage.OP_KEY_REQUEST, SPMessage.OP_KEY_REQUEST_SEEN, SPMessage.OP_KEY_SHARE, SPMessage.OP_KEY_UPDATE],
            allowedActions: "*",
            meta: {
              private: {
                content: CEKs
              }
            },
            data: CEKp
          },
          {
            id: PEKid,
            name: "pek",
            purpose: ["enc"],
            ringLevel: 2,
            permissions: [SPMessage.OP_ACTION_ENCRYPTED],
            allowedActions: ["gi.actions/identity/setAttributes"],
            meta: {
              private: {
                content: PEKs
              }
            },
            data: PEKp
          },
          {
            id: DMKid,
            name: "dmk",
            purpose: ["sig"],
            ringLevel: 2,
            permissions: [SPMessage.OP_ACTION_ENCRYPTED],
            allowedActions: ["gi.contracts/identity/joinDirectMessage"],
            meta: {
              private: {
                content: DMKs
              }
            },
            data: DMKp
          },
          {
            id: SAKid,
            name: "#sak",
            purpose: ["sak"],
            ringLevel: 0,
            permissions: [],
            allowedActions: [],
            meta: {
              private: {
                content: SAKs
              }
            },
            data: SAKp
          }
        ],
        hooks: {
          postpublishContract: async (message) => {
            await esm_default("chelonia/contract/retain", message.contractID(), { ephemeral: true });
            try {
              userID = message.contractID();
              if (picture) {
                try {
                  finalPicture = await imageUpload(picture, { billableContractID: userID });
                } catch (e2) {
                  console.error("actions/identity.js picture upload error:", e2);
                  throw new GIErrorUIRuntimeError(L("Failed to upload the profile picture. {codeError}", { codeError: e2.message }), { cause: e2 });
                }
              }
            } finally {
              await esm_default("chelonia/contract/release", message.contractID(), { ephemeral: true });
            }
          }
        },
        data: {
          // finalPicture is set after OP_CONTRACT is sent, which is after
          // calling 'chelonia/out/registerContract' here. We use a getter for
          // `picture` so that the action sent has the correct value
          attributes: {
            username,
            email,
            get picture() {
              return finalPicture;
            },
            encryptedDeletionToken: encryptedDeletionToken.serialize("encryptedDeletionToken")
          }
        }
      });
      await esm_default(
        "chelonia/storeSecretKeys",
        new Secret([CEK, CSK, PEK, SAK, DMK].map((key) => ({ key })))
      );
    } catch (e2) {
      console.error("gi.actions/identity/create failed!", e2);
      throw new GIErrorUIRuntimeError(L("Failed to create user identity: {reportError}", LError(e2)), { cause: e2 });
    } finally {
      await esm_default("chelonia/clearTransientSecretKeys", [IEKid, IPKid]);
    }
    return userID;
  },
  "gi.actions/identity/login": function({ identityContractID: identityContractID2, encryptionParams, cheloniaState, state, transientSecretKeys, oldKeysAnchorCid }) {
    return esm_default("okTurtles.eventQueue/queueEvent", "ACTIONS-LOGIN", async () => {
      console.debug("[gi.actions/identity/login] Scheduled call starting", identityContractID2);
      transientSecretKeys = transientSecretKeys.valueOf().map((k) => ({ key: deserializeKey(k), transient: true }));
      if (typeof WorkerGlobalScope === "function") {
        await esm_default("swLogs/startCapture", identityContractID2);
      }
      await esm_default("chelonia/reset", { ...cheloniaState, loggedIn: { identityContractID: identityContractID2 } });
      await esm_default("chelonia/storeSecretKeys", new Secret(transientSecretKeys));
      if (oldKeysAnchorCid) {
        await processOldIekList(identityContractID2, oldKeysAnchorCid, transientSecretKeys[0].key);
      }
      try {
        if (!cheloniaState?.contracts[identityContractID2]?.references) {
          await esm_default("chelonia/contract/retain", identityContractID2);
        } else {
          await esm_default("chelonia/contract/sync", identityContractID2);
        }
      } catch (e2) {
        console.error("[gi.actions/identity] Error during login contract sync", e2);
        throw new GIErrorUIRuntimeError(L("Error during login contract sync"), { cause: e2 });
      }
      try {
        await esm_default("gi.db/settings/save", SETTING_CURRENT_USER, identityContractID2);
        esm_default("okTurtles.events/emit", LOGIN, { identityContractID: identityContractID2, encryptionParams, state });
        const contractIDs = groupContractsByType(cheloniaState?.contracts);
        await syncContractsInOrder(contractIDs);
        try {
          const cheloniaState2 = esm_default("chelonia/rootState");
          const groupIds = Object.keys(cheloniaState2[identityContractID2].groups);
          await esm_default("chelonia/contract/wait", Array.from(/* @__PURE__ */ new Set([...groupIds, ...Object.values(contractIDs).flat()])));
          await Promise.allSettled(
            groupIds.map(async (groupId) => (
              // (1) Check whether the contract exists (may have been removed
              //     after sync)
              has(cheloniaState2.contracts, groupId) && has(cheloniaState2[identityContractID2].groups, groupId) && // (2) Check whether the join process is still incomplete
              //     This needs to be re-checked because it may have changed after
              //     sync
              // //     We only check for groups where we don't have a profile, as
              // //     re-joining is handled by the group contract itself.
              // !state[groupId]?.profiles?.[identityContractID] && // ?.status !== PROFILE_STATUS.
              cheloniaState2[groupId]?.profiles?.[identityContractID2]?.status !== PROFILE_STATUS.ACTIVE && // (3) Call join
              esm_default("gi.actions/group/join", {
                originatingContractID: identityContractID2,
                originatingContractName: "gi.contracts/identity",
                contractID: groupId,
                contractName: "gi.contracts/group",
                reference: cheloniaState2[identityContractID2].groups[groupId].hash,
                signingKeyId: cheloniaState2[identityContractID2].groups[groupId].inviteSecretId,
                innerSigningKeyId: await esm_default("chelonia/contract/currentKeyIdByName", identityContractID2, "csk"),
                encryptionKeyId: await esm_default("chelonia/contract/currentKeyIdByName", identityContractID2, "cek")
              }).catch((e2) => {
                console.error(`Error during gi.actions/group/join for ${groupId} at login`, e2);
                const humanErr = L("Join group error during login: {msg}", { msg: e2?.message || "unknown error" });
                throw new GIErrorUIRuntimeError(humanErr);
              })
            ))
          );
          Object.entries(cheloniaState2[identityContractID2].groups).filter(([, { hasLeft }]) => !hasLeft).forEach(([cId]) => {
            if (cheloniaState2[cId]?.profiles?.[identityContractID2]?.status === PROFILE_STATUS.ACTIVE) {
              esm_default("gi.actions/group/kv/updateLastLoggedIn", { contractID: cId, throttle: false }).catch((e2) => console.error("Error sending updateLastLoggedIn", e2));
            }
          });
        } catch (e2) {
          console.error("[gi.actions/identity/login] Error re-joining groups after login", e2);
          throw e2;
        }
        return identityContractID2;
      } catch (e2) {
        esm_default("chelonia/clearTransientSecretKeys", transientSecretKeys.map(({ key }) => keyId(key)));
        console.error("gi.actions/identity/login failed!", e2);
        const humanErr = L("Failed to log in: {reportError}", LError(e2));
        await esm_default("gi.actions/identity/_private/logout").catch((e3) => {
          console.error("[gi.actions/identity/login] Error calling logout (after failure to login)", e3);
        });
        throw new GIErrorUIRuntimeError(humanErr, { cause: e2 });
      }
    });
  },
  // Unlike the login function, the wrapper for logging out is used using a
  // dedicated selector to allow it to be called from the login selector (if
  // error occurs)
  "gi.actions/identity/_private/logout": async function() {
    let cheloniaState;
    esm_default("okTurtles.events/emit", LOGGING_OUT);
    try {
      console.info("logging out, waiting for any events to finish...");
      await esm_default("okTurtles.eventQueue/queueEvent", "encrypted-action", () => {
      });
      cheloniaState = await esm_default("chelonia/reset", async () => {
        await esm_default("okTurtles.eventQueue/queueEvent", "encrypted-action", () => {
        });
        await esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, () => {
        });
        const cheloniaState2 = await esm_default("okTurtles.eventQueue/queueEvent", SETTING_CHELONIA_STATE, async () => {
          const cheloniaState3 = cloneDeep(esm_default("chelonia/rootState"));
          await esm_default("gi.db/settings/delete", SETTING_CHELONIA_STATE);
          return cheloniaState3;
        });
        await esm_default("gi.db/settings/save", SETTING_CURRENT_USER, null);
        return cheloniaState2;
      }).then((cheloniaState2) => {
        console.info("successfully logged out");
        return cheloniaState2;
      });
    } catch (e2) {
      console.error(`${e2.name} during logout: ${e2.message}`, e2);
    }
    esm_default("gi.db/filesCache/clear").catch((e2) => {
      console.error("Error clearing file cache", e2);
    });
    if (typeof WorkerGlobalScope === "function") {
      esm_default("swLogs/pauseCapture", { wipeOut: true }).catch((e2) => {
        console.error("Error clearing file cache", e2);
      });
    }
    esm_default("okTurtles.events/emit", LOGOUT);
    return cheloniaState;
  },
  "gi.actions/identity/addJoinDirectMessageKey": (contractID, foreignContractID, keyName) => {
  },
  "gi.actions/identity/shareNewPEK": async (contractID, newKeys) => {
    const rootState = esm_default("chelonia/rootState");
    const state = rootState[contractID];
    await Promise.all(Object.keys(state.groups || {}).filter((groupID) => !state.groups[groupID].hasLeft && !!rootState.contracts[groupID]).map(async (groupID) => {
      const CEKid = await esm_default("chelonia/contract/currentKeyIdByName", groupID, "cek");
      const CSKid = await esm_default("chelonia/contract/currentKeyIdByName", groupID, "csk");
      if (!CEKid || !CSKid) {
        console.warn(`Unable to share rotated keys for ${contractID} with ${groupID}: Missing CEK or CSK`);
        return;
      }
      return esm_default("chelonia/out/keyShare", {
        contractID: groupID,
        contractName: rootState.contracts[groupID].type,
        data: encryptedOutgoingData(groupID, CEKid, {
          contractID,
          // $FlowFixMe
          keys: Object.values(newKeys).map(([, newKey, newId]) => ({
            id: newId,
            meta: {
              private: {
                content: encryptedOutgoingData(groupID, CEKid, serializeKey(newKey, true))
              }
            }
          }))
        }),
        signingKeyId: CSKid,
        hooks: {
          preSendCheck: (_, state2) => {
            return state2?.profiles?.[contractID]?.status === PROFILE_STATUS.ACTIVE;
          }
        }
      }).catch((e2) => {
        if (e2.name !== "ChelErrorSignatureKeyNotFound") {
          throw e2;
        }
      });
    }));
    if (!newKeys.pek) return void 0;
    return [
      void 0,
      // Nothing before OP_KEY_UPDATE
      [
        // Re-encrypt attributes with the new PEK
        await esm_default("gi.actions/identity/setAttributes", {
          contractID,
          data: state.attributes,
          encryptionKey: newKeys.pek[1],
          encryptionKeyId: newKeys.pek[2],
          returnInvocation: true
        })
      ]
    ];
  },
  ...encryptedAction("gi.actions/identity/setAttributes", L("Failed to set profile attributes."), void 0, "pek"),
  ...encryptedAction("gi.actions/identity/updateSettings", L("Failed to update profile settings.")),
  ...encryptedAction("gi.actions/identity/createDirectMessage", L("Failed to create a new direct message channel."), async function(sendMessage, params) {
    const rootGetters = esm_default("state/vuex/getters");
    const partnerIDs = params.data.memberIDs.filter((memberID) => memberID !== rootGetters.ourIdentityContractId).map((memberID) => rootGetters.ourContactProfilesById[memberID].contractID);
    const currentGroupId = params.data.currentGroupId;
    const identityContractID2 = rootGetters.ourIdentityContractId;
    const message = await esm_default("gi.actions/chatroom/create", {
      data: {
        attributes: {
          name: "",
          description: "",
          privacyLevel: CHATROOM_PRIVACY_LEVEL.PRIVATE,
          type: CHATROOM_TYPES.DIRECT_MESSAGE
        }
      },
      hooks: {
        prepublish: params.hooks?.prepublish,
        postpublish: null
      }
    }, identityContractID2);
    await esm_default("gi.actions/out/shareVolatileKeys", {
      contractID: identityContractID2,
      contractName: "gi.contracts/identity",
      subjectContractID: message.contractID(),
      keyIds: "*"
    });
    await esm_default("gi.actions/chatroom/join", {
      ...omit(params, ["options", "contractID", "data", "hooks"]),
      contractID: message.contractID(),
      data: { memberID: [identityContractID2, ...partnerIDs] }
    });
    const switchChannelAfterJoined = (contractID) => {
      if (contractID === message.contractID()) {
        const getters4 = esm_default("state/vuex/getters");
        if (getters4.isJoinedChatRoom(contractID, identityContractID2)) {
          esm_default("okTurtles.events/emit", JOINED_CHATROOM, { identityContractID: identityContractID2, groupContractID: currentGroupId, chatRoomID: message.contractID() });
          esm_default("okTurtles.events/off", EVENT_HANDLED, switchChannelAfterJoined);
        }
      }
    };
    esm_default("okTurtles.events/on", EVENT_HANDLED, switchChannelAfterJoined);
    await sendMessage({
      ...omit(params, ["options", "data", "action", "hooks"]),
      data: {
        contractID: message.contractID()
      },
      hooks: {
        onprocessed: params.hooks?.onprocessed
      }
    });
    await esm_default("chelonia/contract/wait", partnerIDs);
    for (let index = 0; index < partnerIDs.length; index++) {
      const hooks = index < partnerIDs.length - 1 ? void 0 : { prepublish: null, postpublish: params.hooks?.postpublish };
      await esm_default("gi.actions/out/shareVolatileKeys", {
        contractID: partnerIDs[index],
        contractName: "gi.contracts/identity",
        subjectContractID: message.contractID(),
        keyIds: "*"
      });
      const signingKeyId = await esm_default("chelonia/contract/suitableSigningKey", partnerIDs[index], [SPMessage.OP_ACTION_ENCRYPTED], ["sig"], void 0, ["gi.contracts/identity/joinDirectMessage"]);
      await esm_default("gi.actions/identity/joinDirectMessage", {
        ...omit(params, ["options", "contractID", "data", "hooks"]),
        contractID: partnerIDs[index],
        data: {
          // TODO: We need to handle multiple groups and the possibility of not
          // having any groups in common
          contractID: message.contractID()
        },
        // For now, we assume that we're messaging someone which whom we
        // share a group
        signingKeyId,
        innerSigningContractID: null,
        innerSigningKeyId: null,
        hooks
      });
    }
    return message.contractID();
  }),
  ...encryptedAction("gi.actions/identity/joinDirectMessage", L("Failed to join a direct message.")),
  ...encryptedAction("gi.actions/identity/joinGroup", L("Failed to join a group.")),
  ...encryptedAction("gi.actions/identity/leaveGroup", L("Failed to leave a group.")),
  ...encryptedAction("gi.actions/identity/setDirectMessageVisibility", L("Failed to set direct message visibility.")),
  "gi.actions/identity/uploadFiles": async ({ attachments, billableContractID }) => {
    const { identityContractID: identityContractID2 } = esm_default("state/vuex/state").loggedIn;
    try {
      const attachmentsData = await Promise.all(attachments.map(async (attachment) => {
        const { url, compressedBlob } = attachment;
        const attachmentBlob = compressedBlob || await objectURLtoBlob(url);
        const response = await esm_default("chelonia/fileUpload", attachmentBlob, {
          type: attachment.mimeType,
          cipher: "aes256gcm"
        }, { billableContractID });
        const { delete: token, download: downloadData } = response;
        return {
          attributes: omit(attachment, ["url", "compressedBlob", "needsImageCompression"]),
          downloadData,
          deleteData: { token }
        };
      }));
      const tokensByManifestCid = attachmentsData.map(({ downloadData, deleteData }) => ({
        manifestCid: downloadData.manifestCid,
        token: deleteData.token
      }));
      await esm_default("gi.actions/identity/saveFileDeleteToken", {
        contractID: identityContractID2,
        data: { billableContractID, tokensByManifestCid }
      });
      return attachmentsData.map(({ attributes, downloadData }) => ({ ...attributes, downloadData }));
    } catch (err) {
      const humanErr = L("Failed to upload files: {reportError}", LError(err));
      throw new GIErrorUIRuntimeError(humanErr);
    }
  },
  "gi.actions/identity/removeFiles": async ({ manifestCids, option }) => {
    const { identityContractID: identityContractID2 } = esm_default("state/vuex/state").loggedIn;
    const { shouldDeleteFile, shouldDeleteToken, throwIfMissingToken } = option;
    let deleteResult, toDelete;
    const currentIdentityState = await esm_default("chelonia/contract/state", identityContractID2);
    if (shouldDeleteFile) {
      const credentials = Object.fromEntries(manifestCids.map((cid) => {
        if (!throwIfMissingToken && shouldDeleteToken && !currentIdentityState.fileDeleteTokens[cid]) {
          console.info("[gi.actions/identity/removeFiles] Skipping file as token is missing", cid);
          return [cid, null];
        }
        ;
        const credential = shouldDeleteToken ? { token: currentIdentityState.fileDeleteTokens[cid].token } : { billableContractID: identityContractID2 };
        return [cid, credential];
      }));
      toDelete = !throwIfMissingToken ? manifestCids.filter((cid) => !!credentials[cid]) : manifestCids;
      deleteResult = await esm_default("chelonia/fileDelete", toDelete, credentials);
    } else {
      toDelete = manifestCids;
    }
    if (shouldDeleteToken) {
      await esm_default("gi.actions/identity/removeFileDeleteToken", {
        contractID: identityContractID2,
        data: {
          manifestCids: deleteResult ? toDelete.filter((_, i2) => {
            return deleteResult[i2].status === "fulfilled";
          }) : toDelete
        }
      });
    }
    if (deleteResult?.some((r) => r.status === "rejected")) {
      console.error(
        "[gi.actions/identity/removeFiles] Some CIDs could not be deleted",
        deleteResult?.map((r, i2) => r.status === "rejected" && toDelete[i2]).filter(Boolean)
      );
      throw new Error("Some CIDs could not be deleted");
    }
  },
  "gi.actions/identity/logout": (...params) => {
    return esm_default("okTurtles.eventQueue/queueEvent", "ACTIONS-LOGIN", ["gi.actions/identity/_private/logout", ...params]);
  },
  "gi.actions/identity/changePassword": async ({
    identityContractID: identityContractID2,
    username,
    oldIPK,
    oldIEK,
    newIPK: IPK,
    newIEK: IEK,
    updateToken,
    hooks
  }) => {
    oldIPK = oldIPK.valueOf();
    oldIEK = oldIEK.valueOf();
    IPK = IPK.valueOf();
    IEK = IEK.valueOf();
    updateToken = updateToken.valueOf();
    const CSK = keygen(EDWARDS25519SHA512BATCH);
    const CEK = keygen(CURVE25519XSALSA20POLY1305);
    const SAK = keygen(EDWARDS25519SHA512BATCH);
    const oldIPKid = keyId(oldIPK);
    const oldIEKid = keyId(oldIEK);
    const IPKid = keyId(IPK);
    const IEKid = keyId(IEK);
    const CSKid = keyId(CSK);
    const CEKid = keyId(CEK);
    const SAKid = keyId(SAK);
    const IPKp = serializeKey(IPK, false);
    const IEKp = serializeKey(IEK, false);
    const CSKp = serializeKey(CSK, false);
    const CEKp = serializeKey(CEK, false);
    const SAKp = serializeKey(SAK, false);
    const CSKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(CSK, true));
    const CEKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(CEK, true));
    const SAKs = encryptedOutgoingDataWithRawKey(IEK, serializeKey(SAK, true));
    const state = esm_default("chelonia/contract/state", identityContractID2);
    await esm_default(
      "chelonia/storeSecretKeys",
      new Secret([oldIPK, oldIEK, IPK, IEK, CEK, CSK, SAK].map((key) => ({ key, transient: true })))
    );
    const oldKeysData = appendToIekList(
      identityContractID2,
      IEK,
      oldIEK,
      state._vm.authorizedKeys[oldIEKid]?.meta?.private?.oldKeys
    );
    await esm_default("chelonia/out/keyUpdate", {
      contractID: identityContractID2,
      contractName: "gi.contracts/identity",
      data: [
        {
          id: IPKid,
          name: "ipk",
          oldKeyId: oldIPKid,
          meta: {
            private: {
              transient: true
            }
          },
          data: IPKp
        },
        {
          id: IEKid,
          name: "iek",
          oldKeyId: oldIEKid,
          meta: {
            private: {
              transient: true,
              oldKeys: oldKeysData
            }
          },
          data: IEKp
        },
        {
          id: CSKid,
          name: "csk",
          oldKeyId: findKeyIdByName(state, "csk"),
          meta: {
            private: {
              content: CSKs
            }
          },
          data: CSKp
        },
        {
          id: CEKid,
          name: "cek",
          oldKeyId: findKeyIdByName(state, "cek"),
          meta: {
            private: {
              content: CEKs
            }
          },
          data: CEKp
        },
        {
          id: SAKid,
          name: "#sak",
          oldKeyId: findKeyIdByName(state, "#sak"),
          meta: {
            private: {
              content: SAKs
            }
          },
          data: SAKp
        }
      ],
      signingKeyId: oldIPKid,
      publishOptions: {
        headers: {
          "shelter-salt-update-token": updateToken
        }
      },
      hooks
    });
    await esm_default(
      "chelonia/storeSecretKeys",
      new Secret([CEK, CSK, SAK].map((key) => ({ key })))
    );
    esm_default("chelonia/clearTransientSecretKeys", [oldIEKid, oldIPKid, IEKid, IPKid]);
  },
  "gi.actions/identity/delete": async ({
    contractID,
    transientSecretKeys,
    oldKeysAnchorCid
  }) => {
    const state = esm_default("chelonia/contract/state", contractID);
    if (!state?.attributes?.encryptedDeletionToken) {
      throw new Error("Missing encrypted deletion token");
    }
    const transientSecretKeysEntries = transientSecretKeys.valueOf().map(
      (k) => [keyId(k), deserializeKey(k)]
    );
    const encryptedDeletionToken = state.attributes.encryptedDeletionToken;
    if (oldKeysAnchorCid) {
      const IEK = transientSecretKeysEntries[0][1];
      await processOldIekList(contractID, oldKeysAnchorCid, IEK);
    }
    const token = encryptedIncomingData(contractID, state, encryptedDeletionToken, NaN, Object.fromEntries(transientSecretKeysEntries), "encryptedDeletionToken");
    const { ourDirectMessages, ourGroups } = esm_default("state/vuex/getters");
    await Promise.all([
      ...Object.keys(ourDirectMessages).map((contractID2) => {
        return esm_default("gi.actions/chatroom/leave", { contractID: contractID2, data: {} }).catch((e2) => {
          console.warn("Error while leaving DM before deleting identity contract", contractID2, e2);
        });
      }),
      ...ourGroups.map((contractID2) => {
        return esm_default("gi.actions/group/removeOurselves", { contractID: contractID2 }).catch((e2) => {
          console.warn("Error while leaving group before deleting identity contract", contractID2, e2);
        });
      })
    ]);
    await esm_default("chelonia/out/deleteContract", contractID, {
      [contractID]: { token: new Secret(token.valueOf()) }
    });
  },
  "gi.actions/identity/addDmk": async (contractID) => {
    const dmkId = esm_default("chelonia/contract/currentKeyIdByName", contractID, "dmk");
    const contractState = esm_default("chelonia/contract/state", contractID);
    const keys = Object.values(contractState._vm.authorizedKeys).filter((key) => {
      return key._notAfterHeight == null && (key.permissions.includes(SPMessage.OP_ACTION_ENCRYPTED) || key.permissions.includes(SPMessage.OP_ACTION_ENCRYPTED + "#inner")) && (key.name.startsWith("#krrk-") || !!key.foreignKey);
    });
    const groupIds = Object.keys(contractState.groups || {});
    const krrks = [];
    const gfcsks = [];
    groupIds.forEach((groupId) => {
      const krrk = keys.filter((key) => key.name.startsWith("#krrk-") && key.meta?.keyRequest?.contractID === groupId);
      const gfcsk = keys.filter((key) => key.name.startsWith(groupId + "/"));
      krrks.push(...krrk);
      gfcsks.push(...gfcsk);
    });
    if (!dmkId && krrks.length === 0 && gfcsks.length === 0) return;
    await esm_default("chelonia/out/atomic", {
      contractID,
      contractName: "gi.contracts/identity",
      signingKeyId: esm_default("chelonia/contract/suitableSigningKey", contractID, [SPMessage.OP_ATOMIC, SPMessage.OP_KEY_ADD, SPMessage.OP_KEY_UPDATE, SPMessage.OP_KEY_DEL], ["sig"]),
      data: [
        ...!dmkId ? [["chelonia/out/keyAdd", {
          data: (() => {
            const PEKid = esm_default("chelonia/contract/currentKeyIdByName", contractState, "pek");
            if (!PEKid) {
              throw new Error(`PEK not found for contract ${contractID}`);
            }
            const DMK = keygen(EDWARDS25519SHA512BATCH);
            const DMKid = keyId(DMK);
            const DMKp = serializeKey(DMK, false);
            const DMKs = encryptedOutgoingData(contractID, PEKid, serializeKey(DMK, true));
            return [{
              id: DMKid,
              name: "dmk",
              purpose: ["sig"],
              ringLevel: 2,
              permissions: [SPMessage.OP_ACTION_ENCRYPTED],
              allowedActions: ["gi.contracts/identity/joinDirectMessage"],
              meta: {
                private: {
                  content: DMKs
                }
              },
              data: DMKp
            }];
          })()
        }]] : [],
        ...gfcsks.length ? [["chelonia/out/keyDel", {
          data: gfcsks.map((gfcsk) => encryptedOutgoingData(contractID, gfcsk._private, gfcsk.id))
        }]] : [],
        ...krrks.length ? [["chelonia/out/keyUpdate", {
          data: krrks.map((krrk) => ({
            name: krrk.name,
            oldKeyId: krrk.id,
            purpose: krrk.purpose,
            permissions: [SPMessage.OP_KEY_SHARE],
            allowedActions: []
          }))
        }]] : []
      ]
    });
  },
  "gi.actions/identity/_ondeleted": async (contractID, state) => {
    const ourIdentityContractId = esm_default("state/vuex/getters").ourIdentityContractId;
    if (contractID === ourIdentityContractId) {
      await esm_default("gi.actions/identity/logout");
    }
  },
  ...encryptedAction("gi.actions/identity/deleteDirectMessage", L("Failed to delete direct message.")),
  ...encryptedAction("gi.actions/identity/saveFileDeleteToken", L("Failed to save delete tokens for the attachments.")),
  ...encryptedAction("gi.actions/identity/removeFileDeleteToken", L("Failed to remove delete tokens for the attachments.")),
  ...encryptedAction("gi.actions/identity/setGroupAttributes", L("Failed to set group attributes."))
});

// frontend/controller/actions/identity-kv.js
var initNotificationStatus = (data = {}) => ({ ...data, read: false });
var checkAndAugmentNames = async (currentNames) => {
  const ourNames = Object.keys(esm_default("state/vuex/state").namespaceLookups || {});
  const unconflictedNames = intersection(currentNames, ourNames);
  const BATCH_SIZE = 10;
  const namesToCheck = difference(union(currentNames, ourNames), unconflictedNames);
  const recheckedNames = [];
  for (let i2 = 0; i2 < namesToCheck.length; i2 += BATCH_SIZE) {
    const batch = namesToCheck.slice(i2, i2 + BATCH_SIZE);
    const results = await Promise.all(batch.map(async (name) => {
      const value = await esm_default("namespace/lookup", name, { skipCache: true }).catch((e2) => {
        console.warn(`[checkAndAugmentNames] Failed to lookup name ${name}:`, e2);
      });
      return value ? name : null;
    }));
    recheckedNames.push(...results.filter((v2) => !!v2));
  }
  return union(unconflictedNames, recheckedNames);
};
var updateKVPreferences = (updater) => {
  return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
    const getUpdatedPreferences = ({ etag, currentData: currentPreferences = {} } = {}) => {
      return [updater(currentPreferences), etag];
    };
    const data = getUpdatedPreferences()[0];
    await esm_default("gi.actions/identity/kv/savePreferences", { data, onconflict: getUpdatedPreferences });
  });
};
esm_default("okTurtles.events/on", ONLINE, () => {
  if (!esm_default("state/vuex/state").loggedIn?.identityContractID) {
    return;
  }
  esm_default("gi.actions/identity/kv/load").catch((e2) => {
    console.error("Error from 'gi.actions/identity/kv/load' after reestablished connection:", e2);
  });
});
var identity_kv_default = esm_default("sbp/selectors/register", {
  "gi.actions/identity/kv/load": async () => {
    console.info("loading data from identity key-value store...");
    esm_default("okTurtles.events/emit", NEW_KV_LOAD_STATUS, { name: "identity", status: KV_LOAD_STATUS.LOADING });
    await esm_default("gi.actions/identity/kv/loadChatRoomUnreadMessages");
    await esm_default("gi.actions/identity/kv/loadPreferences");
    await esm_default("gi.actions/identity/kv/loadNotificationStatus");
    await esm_default("gi.actions/identity/kv/loadCachedNames");
    console.info("identity key-value store data loaded!");
    esm_default("okTurtles.events/emit", NEW_KV_LOAD_STATUS, { name: "identity", status: KV_LOAD_STATUS.LOADED });
  },
  // Unread Messages
  "gi.actions/identity/kv/fetchChatRoomUnreadMessages": async () => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to fetch chatroom unreadMessages without an active session");
    }
    return (await esm_default("chelonia/kv/get", identityContractID2, KV_KEYS.UNREAD_MESSAGES))?.data || {};
  },
  "gi.actions/identity/kv/saveChatRoomUnreadMessages": ({ data, onconflict }) => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to update chatroom unreadMessages without an active session");
    }
    return esm_default("chelonia/kv/queuedSet", {
      contractID: identityContractID2,
      key: KV_KEYS.UNREAD_MESSAGES,
      data,
      onconflict
    });
  },
  "gi.actions/identity/kv/loadChatRoomUnreadMessages": () => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const currentChatRoomUnreadMessages = await esm_default("gi.actions/identity/kv/fetchChatRoomUnreadMessages");
      esm_default("okTurtles.events/emit", NEW_UNREAD_MESSAGES, currentChatRoomUnreadMessages);
    });
  },
  "gi.actions/identity/kv/initChatRoomUnreadMessages": ({ contractID, messageHash, createdHeight }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        if (!currentData[contractID]) {
          return [{
            ...currentData,
            [contractID]: {
              readUntil: { messageHash, createdHeight },
              unreadMessages: []
            }
          }, etag];
        }
        return null;
      };
      const data = getUpdatedUnreadMessages()?.[0];
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { data, onconflict: getUpdatedUnreadMessages });
    });
  },
  "gi.actions/identity/kv/setChatRoomReadUntil": ({ contractID, messageHash, createdHeight, forceUpdate = false }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        if (forceUpdate || currentData[contractID]?.readUntil.createdHeight < createdHeight) {
          const { unreadMessages } = currentData[contractID];
          return [{
            ...currentData,
            [contractID]: {
              readUntil: { messageHash, createdHeight },
              unreadMessages: unreadMessages.filter((msg) => msg.createdHeight > createdHeight)
            }
          }, etag];
        }
        return null;
      };
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { onconflict: getUpdatedUnreadMessages });
    });
  },
  "gi.actions/identity/kv/markAsUnread": ({ contractID, messageHash, createdHeight, unreadMessages }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        const existingReadUntil = currentData[contractID]?.readUntil;
        if (existingReadUntil && existingReadUntil.isManuallyMarked && existingReadUntil?.messageHash === messageHash) {
          return null;
        }
        return [{
          ...currentData,
          [contractID]: {
            readUntil: { messageHash, createdHeight, isManuallyMarked: true },
            unreadMessages
          }
        }, etag];
      };
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { onconflict: getUpdatedUnreadMessages });
    });
  },
  "gi.actions/identity/kv/addChatRoomUnreadMessage": ({ contractID, messageHash, createdHeight }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        if (currentData[contractID]?.readUntil.createdHeight < createdHeight) {
          const index = currentData[contractID].unreadMessages.findIndex((msg) => msg.messageHash === messageHash);
          if (index === -1) {
            currentData[contractID].unreadMessages.push({ messageHash, createdHeight });
            return [currentData, etag];
          }
        }
        return null;
      };
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { onconflict: getUpdatedUnreadMessages });
    });
  },
  "gi.actions/identity/kv/removeChatRoomUnreadMessage": ({ contractID, messageHash }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        const index = currentData[contractID]?.unreadMessages.findIndex((msg) => msg.messageHash === messageHash);
        if (Number.isInteger(index) && index >= 0) {
          currentData[contractID].unreadMessages.splice(index, 1);
          return [currentData, etag];
        }
        return null;
      };
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { onconflict: getUpdatedUnreadMessages });
    });
  },
  "gi.actions/identity/kv/deleteChatRoomUnreadMessages": ({ contractID }) => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedUnreadMessages = ({ currentData = {}, etag } = {}) => {
        if (currentData[contractID]) {
          delete currentData[contractID];
          return [currentData, etag];
        }
        return null;
      };
      await esm_default("gi.actions/identity/kv/saveChatRoomUnreadMessages", { onconflict: getUpdatedUnreadMessages });
    });
  },
  // Preferences
  "gi.actions/identity/kv/fetchPreferences": async () => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to fetch preferences without an active session");
    }
    return (await esm_default("chelonia/kv/get", identityContractID2, KV_KEYS.PREFERENCES))?.data || {};
  },
  "gi.actions/identity/kv/savePreferences": ({ data, onconflict }) => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to update preferences without an active session");
    }
    return esm_default("chelonia/kv/queuedSet", {
      contractID: identityContractID2,
      key: KV_KEYS.PREFERENCES,
      data,
      onconflict
    });
  },
  "gi.actions/identity/kv/loadPreferences": () => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const preferences = await esm_default("gi.actions/identity/kv/fetchPreferences");
      esm_default("okTurtles.events/emit", NEW_PREFERENCES, preferences);
    });
  },
  "gi.actions/identity/kv/updateDistributionBannerVisibility": ({ contractID, hidden }) => {
    return updateKVPreferences((currentPreferences) => {
      const hideDistributionBanner = {
        ...currentPreferences.hideDistributionBanner || {},
        [contractID]: hidden
      };
      return { ...currentPreferences, hideDistributionBanner };
    });
  },
  "gi.actions/identity/kv/updatePreference": ({ key, value }) => {
    return updateKVPreferences((currentPreferences) => ({ ...currentPreferences, [key]: value }));
  },
  // Notifications
  "gi.actions/identity/kv/fetchNotificationStatus": async () => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to fetch notification status without an active session");
    }
    return (await esm_default("chelonia/kv/get", identityContractID2, KV_KEYS.NOTIFICATIONS))?.data || {};
  },
  "gi.actions/identity/kv/saveNotificationStatus": ({ data, onconflict }) => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to update notification status without an active session");
    }
    const applyStorageRules = (notificationStatus) => {
      return Object.keys(notificationStatus).reduce((acc, hash) => {
        if (!isExpired(notificationStatus[hash])) {
          acc[hash] = notificationStatus[hash];
        }
        return acc;
      }, {});
    };
    const updatedOnConflict = async (...args) => {
      const result = await onconflict(...args);
      if (!result) return null;
      const [data2, etag] = result;
      return [applyStorageRules(data2), etag];
    };
    return esm_default("chelonia/kv/queuedSet", {
      contractID: identityContractID2,
      key: KV_KEYS.NOTIFICATIONS,
      data: !!data && applyStorageRules(data),
      onconflict: typeof onconflict === "function" ? updatedOnConflict : null
    });
  },
  "gi.actions/identity/kv/loadNotificationStatus": () => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const status = await esm_default("gi.actions/identity/kv/fetchNotificationStatus");
      esm_default("gi.notifications/setNotificationStatus", status);
    });
  },
  "gi.actions/identity/kv/addNotificationStatus": (notification) => {
    const { hash, timestamp } = notification;
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const getUpdatedNotificationStatus = ({ currentData = {}, etag } = {}) => {
        if (!currentData?.[hash]) {
          return [{
            ...currentData,
            [hash]: initNotificationStatus({ timestamp })
          }, etag];
        }
        return null;
      };
      const data = getUpdatedNotificationStatus()?.[0];
      await esm_default("gi.actions/identity/kv/saveNotificationStatus", { data, onconflict: getUpdatedNotificationStatus });
    });
  },
  "gi.actions/identity/kv/markNotificationStatusRead": (hashes) => {
    if (typeof hashes === "string") {
      hashes = [hashes];
    }
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const notifications = esm_default("chelonia/rootState").notifications.items;
      const getUpdatedNotificationStatus = ({ currentData = {}, etag } = {}) => {
        let isUpdated = false;
        for (const hash of hashes) {
          const existing = notifications.find((n) => n.hash === hash);
          if (!currentData[hash]) {
            currentData[hash] = initNotificationStatus({ timestamp: existing.timestamp });
          }
          const isUnRead = currentData[hash].read === false;
          const isDifferent = currentData[hash].read !== existing.read;
          if (isUnRead || isDifferent) {
            currentData[hash].read = true;
            isUpdated = true;
          }
        }
        return isUpdated ? [currentData, etag] : null;
      };
      await esm_default("gi.actions/identity/kv/saveNotificationStatus", { onconflict: getUpdatedNotificationStatus });
    });
  },
  // Namespace lookups
  "gi.actions/identity/kv/fetchCachedNames": async () => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to fetch cached names without an active session");
    }
    return (await esm_default("chelonia/kv/get", identityContractID2, KV_KEYS.NS_CACHE))?.data || [];
  },
  "gi.actions/identity/kv/saveCachedNames": () => {
    const identityContractID2 = esm_default("state/vuex/state").loggedIn?.identityContractID;
    if (!identityContractID2) {
      throw new Error("Unable to update cached names without an active session");
    }
    const onconflict = async ({ currentData = [], etag } = {}) => {
      if (!currentData) currentData = [];
      const data = await checkAndAugmentNames(currentData);
      data.sort();
      currentData.sort();
      if (data.length === currentData.length) {
        let i2 = 0;
        for (; i2 < data.length; i2++) {
          if (data[i2] !== currentData[i2]) break;
        }
        if (i2 === data.length) return;
      }
      return [data, etag];
    };
    return esm_default("chelonia/kv/queuedSet", {
      contractID: identityContractID2,
      key: KV_KEYS.NS_CACHE,
      data: Object.keys(esm_default("state/vuex/state").namespaceLookups || {}).sort(),
      onconflict
    });
  },
  "gi.actions/identity/kv/loadCachedNames": () => {
    return esm_default("okTurtles.eventQueue/queueEvent", KV_QUEUE, async () => {
      const currentData = await esm_default("gi.actions/identity/kv/fetchCachedNames");
      await checkAndAugmentNames(currentData || []);
    });
  }
});
esm_default("okTurtles.events/on", NAMESPACE_REGISTRATION, debounce(() => esm_default("gi.actions/identity/kv/saveCachedNames"), 300));

// frontend/controller/actions/index.js
esm_default("sbp/selectors/register", {
  // Utility function that covers the common scenario of needing to share some
  // contract's secret keys with another contract. This function emits OP_KEY_SHARE
  // by calling 'chelonia/out/keyShare'.
  // One common use case for this function is sharing keys with ourselves after
  // creating a new contract (for example, when we create a group) or to share
  // keys of a child contract with a parent contract (such as sharing the keys to
  // a chat room with its parent group contract)
  "gi.actions/out/shareVolatileKeys": async ({
    contractID,
    contractName,
    subjectContractID,
    keyIds,
    returnInvocation
  }) => {
    if (contractID === subjectContractID) {
      return;
    }
    const contractState = await esm_default("chelonia/latestContractState", subjectContractID);
    try {
      await esm_default("chelonia/contract/retain", contractID, { ephemeral: true });
      const state = await esm_default("chelonia/latestContractState", contractID);
      const CEKid = findKeyIdByName(state, "cek");
      const signingKeyId = findSuitableSecretKeyId(state, [SPMessage.OP_KEY_SHARE], ["sig"]);
      if (!CEKid || !state?._vm?.authorizedKeys?.[CEKid]) {
        throw new Error("Missing CEK; unable to proceed sharing keys");
      }
      const secretKeys = await esm_default("chelonia/rootState")["secretKeys"];
      const keysToShare = Array.isArray(keyIds) ? pick(secretKeys, keyIds) : keyIds === "*" ? pick(
        secretKeys,
        Object.entries(contractState._vm.authorizedKeys).filter(([, key]) => {
          return !!key.meta?.private?.content;
        }).map(([id]) => id)
      ) : null;
      if (!keysToShare) {
        throw new TypeError("Invalid parameter: keyIds");
      }
      const payload = {
        contractID: subjectContractID,
        keys: Object.entries(keysToShare).map(([keyId2, key]) => ({
          id: keyId2,
          meta: {
            private: {
              content: encryptedOutgoingData(contractID, CEKid, key)
            }
          }
        }))
      };
      const invocation = ["chelonia/out/keyShare", {
        contractID,
        contractName,
        data: encryptedOutgoingData(contractID, CEKid, payload),
        signingKeyId
      }];
      if (returnInvocation) return invocation;
      await esm_default(...invocation);
    } finally {
      await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
    }
  },
  // TODO: Move to chelonia
  "gi.actions/out/rotateKeys": async (contractID, contractName, keysToRotate, addtionalOperationsSelector) => {
    const state = esm_default("chelonia/contract/state", contractID);
    if (!state) {
      throw new Error(`[gi.actions/out/rotateKeys] Cannot rotate keys for ${contractID}: No state exists`);
    }
    let ringLevel = Number.MAX_SAFE_INTEGER;
    const newKeys = Object.fromEntries(Object.entries(state._vm.authorizedKeys).filter(([id, data]) => {
      return !!data.meta?.private?.content && data._notAfterHeight == null && (Array.isArray(keysToRotate) ? keysToRotate.includes(data.name) : keysToRotate === "*" ? true : state._volatile?.pendingKeyRevocations && has(state._volatile.pendingKeyRevocations, id));
    }).map(([id, data]) => {
      const newKey = keygenOfSameType(data.data);
      return [data.name, [id, newKey, keyId(newKey), encryptedDataKeyId(data.meta.private.content)]];
    }));
    if (!Object.keys(newKeys).length) {
      console.debug("rotateKeys: No keys to rotate", { contractID });
      return;
    }
    const updatedKeys = Object.values(newKeys).map(([id, newKey, newId, eKID]) => {
      const encryptionKeyName = state._vm.authorizedKeys[eKID].name;
      const isRotatedEncryptionKey = has(newKeys, encryptionKeyName);
      const encryptionKey = isRotatedEncryptionKey ? newKeys[encryptionKeyName][1] : state._vm.authorizedKeys[eKID].data;
      if (state._vm.authorizedKeys[id].ringLevel < ringLevel) {
        ringLevel = state._vm.authorizedKeys[id].ringLevel;
      }
      return {
        name: state._vm.authorizedKeys[id].name,
        id: newId,
        oldKeyId: id,
        data: serializeKey(newKey, false),
        meta: {
          private: {
            // We have two cases to handle: (1) when there is a new encryption
            // key that is also being used to encrypt other keys and (2) when
            // the keys are encrypted with an existing key (which is not being
            // rotated)
            content: isRotatedEncryptionKey ? encryptedOutgoingDataWithRawKey(encryptionKey, serializeKey(newKey, true)) : encryptedOutgoingData(contractID, keyId(encryptionKey), serializeKey(newKey, true)),
            shareable: state._vm.authorizedKeys[id].meta.private.shareable
          }
        }
      };
    });
    const signingKeyId = findSuitableSecretKeyId(state, [SPMessage.OP_ATOMIC, SPMessage.OP_KEY_SHARE, SPMessage.OP_KEY_UPDATE], ["sig"], ringLevel);
    if (!signingKeyId) {
      throw new Error("No suitable signing key found");
    }
    const additionalOperations = addtionalOperationsSelector ? await esm_default(addtionalOperationsSelector, contractID, newKeys) : void 0;
    const preSendCheck = (msg, state2) => {
      const updatedKeysRemaining = updatedKeys.filter((key) => {
        return state2._vm.authorizedKeys[key.oldKeyId]._notAfterHeight == null;
      });
      if (updatedKeysRemaining.length === 0) return false;
      return true;
    };
    if (Array.isArray(additionalOperations) && additionalOperations.length > 0) {
      await esm_default("chelonia/out/atomic", {
        contractID,
        contractName,
        data: [
          ...additionalOperations[0] ?? [],
          ["chelonia/out/keyUpdate", { data: updatedKeys }],
          ...additionalOperations[1] ?? []
        ],
        signingKeyId,
        hooks: {
          preSendCheck
        }
      });
    } else {
      await esm_default("chelonia/out/keyUpdate", {
        contractID,
        contractName,
        data: updatedKeys,
        signingKeyId,
        hooks: {
          preSendCheck
        }
      });
    }
  }
});

// frontend/model/chatroom/getters.js
var getters = {
  currentChatRoomId(state, getters4, rootState) {
    return state.currentChatRoomIDs[rootState.currentGroupId] || null;
  },
  currentChatRoomState(state, getters4, rootState) {
    return rootState[getters4.currentChatRoomId] || {};
  },
  chatNotificationSettings(state) {
    return Object.assign({
      publicDefault: {
        messageNotification: MESSAGE_NOTIFY_SETTINGS.DIRECT_MESSAGES,
        messageSound: MESSAGE_NOTIFY_SETTINGS.DIRECT_MESSAGES
      },
      privateDefault: {
        messageNotification: MESSAGE_NOTIFY_SETTINGS.ALL_MESSAGES,
        messageSound: MESSAGE_NOTIFY_SETTINGS.ALL_MESSAGES
      }
    }, state.chatNotificationSettings || {});
  },
  ourUnreadMessages(state) {
    return state.unreadMessages || {};
  },
  directMessagesByGroup(state, getters4, rootState) {
    return (groupID) => {
      const currentGroupDirectMessages = {};
      if (!groupID) {
        return currentGroupDirectMessages;
      }
      for (const chatRoomID of Object.keys(getters4.ourDirectMessages)) {
        const chatRoomState = rootState[chatRoomID];
        const directMessageSettings = getters4.ourDirectMessages[chatRoomID];
        const myIdentityId = getters4.ourIdentityContractId;
        if (!getters4.isJoinedChatRoom(chatRoomID, myIdentityId)) {
          continue;
        }
        const members = Object.keys(chatRoomState.members);
        const isDMToMyself = members.length === 1 && members[0] === myIdentityId;
        const partners = members.filter((memberID) => memberID !== myIdentityId).sort((p1, p2) => {
          const p1JoinedDate = new Date(chatRoomState.members[p1].joinedDate).getTime();
          const p2JoinedDate = new Date(chatRoomState.members[p2].joinedDate).getTime();
          return p1JoinedDate - p2JoinedDate;
        });
        const hasActiveMember = partners.some((memberID) => !!rootState[groupID]?.profiles[memberID]);
        if (directMessageSettings.visible && (isDMToMyself || hasActiveMember)) {
          const lastJoinedPartner = isDMToMyself ? myIdentityId : partners[partners.length - 1];
          const lastMsgTimeStamp = chatRoomState.messages?.length > 0 ? new Date(chatRoomState.messages[chatRoomState.messages.length - 1].datetime).getTime() : 0;
          currentGroupDirectMessages[chatRoomID] = {
            ...directMessageSettings,
            members,
            partners: partners.map((memberID) => ({
              contractID: memberID,
              username: getters4.usernameFromID(memberID),
              displayName: getters4.userDisplayNameFromID(memberID)
            })),
            lastJoinedPartner,
            // TODO: The UI should display display names, usernames and (in the future)
            // identity contract IDs differently in some way (e.g., font, font size,
            // prefix (@), etc.) to make it impossible (or at least obvious) to impersonate
            // users (e.g., 'user1' changing their display name to 'user2')
            title: isDMToMyself ? getters4.userDisplayNameFromID(myIdentityId) : partners.map((cID) => getters4.userDisplayNameFromID(cID)).join(", "),
            lastMsgTimeStamp,
            picture: getters4.ourContactProfilesById[lastJoinedPartner]?.picture,
            isDMToMyself
            // Can be useful when certain things in UI are meant only for 'DM to myself'
          };
        }
      }
      return currentGroupDirectMessages;
    };
  },
  ourGroupDirectMessages(state, getters4, rootState) {
    return getters4.directMessagesByGroup(rootState.currentGroupId);
  },
  // NOTE: this getter is used to find the ID of the direct message in the current group
  //       with the name[s] of partner[s]. Normally it's more useful to find direct message
  //       by the partners instead of contractID
  ourGroupDirectMessageFromUserIds(state, getters4, rootState) {
    return (partners) => {
      if (typeof partners === "string") {
        partners = [partners];
      }
      const shouldFindDMToMyself = partners.length === 1 && partners[0] === rootState.loggedIn.identityContractID;
      const currentGroupDirectMessages = getters4.ourGroupDirectMessages;
      return Object.keys(currentGroupDirectMessages).find((chatRoomID) => {
        const chatRoomSettings = currentGroupDirectMessages[chatRoomID];
        if (shouldFindDMToMyself) return chatRoomSettings.isDMToMyself;
        else {
          const cPartners = chatRoomSettings.partners.map((partner) => partner.contractID);
          return cPartners.length === partners.length && union(cPartners, partners).length === partners.length;
        }
      });
    };
  },
  isGroupDirectMessage(state, getters4) {
    return (chatRoomID) => !!getters4.ourGroupDirectMessages[chatRoomID || getters4.currentChatRoomId];
  },
  isDirectMessage(state, getters4) {
    return (chatRoomID) => !!getters4.ourDirectMessages[chatRoomID || getters4.currentChatRoomId];
  },
  isGroupDirectMessageToMyself(state, getters4) {
    return (chatRoomID) => {
      const chatRoomSettings = getters4.ourGroupDirectMessages[chatRoomID || getters4.currentChatRoomId];
      return !!chatRoomSettings && chatRoomSettings?.isDMToMyself;
    };
  },
  isJoinedChatRoom(state, getters4, rootState) {
    return (chatRoomID, memberID) => {
      return getters4.isJoinedChatRoomForChatRoom(rootState[chatRoomID], memberID);
    };
  },
  chatRoomActiveMemberIds(state, getters4) {
    return getters4.chatRoomActiveMemberIdsForChatRoom(getters4.currentChatRoomState);
  },
  currentChatVm(state, getters4, rootState) {
    return rootState?.[getters4.currentChatRoomId]?._vm || null;
  },
  currentChatRoomScrollPosition(state, getters4) {
    return state.chatRoomScrollPosition?.[getters4.currentChatRoomId];
  },
  currentChatRoomReadUntil(state, getters4) {
    return getters4.ourUnreadMessages[getters4.currentChatRoomId]?.readUntil;
  },
  chatRoomUnreadMessages(state, getters4) {
    return (chatRoomID) => {
      return getters4.ourUnreadMessages[chatRoomID]?.unreadMessages || [];
    };
  },
  isChatRoomManuallyMarkedUnread(state, getters4) {
    return (chatroomID) => {
      return Boolean(getters4.ourUnreadMessages[chatroomID || getters4.currentChatRoomId]?.readUntil?.isManuallyMarked);
    };
  },
  groupUnreadMessages(state, getters4, rootState) {
    return (groupID) => {
      const isGroupDirectMessage = (cID) => Object.keys(getters4.directMessagesByGroup(groupID)).includes(cID);
      const isGroupChatroom = (cID) => Object.keys(rootState[groupID]?.chatRooms || {}).includes(cID);
      return Object.keys(getters4.ourUnreadMessages).filter((cID) => isGroupDirectMessage(cID) || isGroupChatroom(cID)).map((cID) => getters4.ourUnreadMessages[cID].unreadMessages.length).reduce((sum, n) => sum + n, 0);
    };
  },
  groupIdFromChatRoomId(state, getters4, rootState) {
    return (chatRoomID) => Object.keys(rootState.contracts).find((cId) => rootState.contracts[cId]?.type === "gi.contracts/group" && Object.keys(rootState[cId].chatRooms).includes(chatRoomID));
  },
  chatRoomsInDetail(state, getters4, rootState) {
    const chatRoomsInDetail = merge({}, getters4.groupChatRooms);
    const myIdentityId = rootState.loggedIn.identityContractID;
    for (const contractID in chatRoomsInDetail) {
      const chatRoom = rootState[contractID];
      if (chatRoom?.attributes && getters4.isJoinedChatRoom(contractID, myIdentityId)) {
        chatRoomsInDetail[contractID] = {
          ...chatRoom.attributes,
          id: contractID,
          unreadMessagesCount: getters4.chatRoomUnreadMessages(contractID).length,
          joined: true
        };
      } else {
        const { name, privacyLevel } = chatRoomsInDetail[contractID];
        chatRoomsInDetail[contractID] = { id: contractID, name, privacyLevel, joined: false };
      }
    }
    return chatRoomsInDetail;
  },
  mentionableChatroomsInDetails(state, getters4) {
    return Object.values(getters4.chatRoomsInDetail).filter(
      (details) => [CHATROOM_PRIVACY_LEVEL.GROUP, CHATROOM_PRIVACY_LEVEL.PUBLIC].includes(details.privacyLevel) || details.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE && details.joined
    );
  },
  getChatroomNameById(state, getters4) {
    return (chatRoomID) => {
      const found = Object.values(getters4.chatRoomsInDetail).find((details) => details.id === chatRoomID);
      return found ? found.name : null;
    };
  },
  chatRoomMembersInSort(state, getters4) {
    return getters4.groupMembersSorted.map((member) => ({ contractID: member.contractID, username: member.username, displayName: member.displayName })).filter((member) => !!getters4.chatRoomMembers[member.contractID]) || [];
  }
};
var getters_default = getters;

// frontend/model/contracts/shared/currencies.js
var DECIMALS_MAX = 8;
function commaToDots(value) {
  return typeof value === "string" ? value.replace(/,/, ".") : value.toString();
}
function isNumeric(nr) {
  return !isNaN(nr - parseFloat(nr));
}
function isInDecimalsLimit(nr, decimalsMax) {
  const decimals = nr.split(".")[1];
  return !decimals || decimals.length <= decimalsMax;
}
function validateMincome(value, decimalsMax) {
  const nr = commaToDots(value);
  return isNumeric(nr) && isInDecimalsLimit(nr, decimalsMax);
}
function decimalsOrInt(num, decimalsMax) {
  return num.toFixed(decimalsMax).replace(/\.0+$/, "");
}
function saferFloat(value) {
  return parseFloat(value.toFixed(DECIMALS_MAX));
}
var XTS = "XTS";
function withCurrency(code, amount) {
  if (!currencies[code]) {
    console.error("withCurrency: unsupported currency", code);
    return "Error: unsupported currency";
  }
  const { isCrypto, numberFormat, symbol } = currencies[code];
  return isCrypto ? numberFormat.format(amount).replace(XTS, symbol || code) : numberFormat.format(amount);
}
function makeCurrency(options) {
  const { code, symbol, decimalsMax, isCrypto = false } = options;
  return {
    numberFormat: new Intl.NumberFormat(
      // $FlowIgnore[incompatible-call]
      typeof navigator === "object" ? navigator.languages ?? navigator.language : "en-US",
      {
        style: "currency",
        currency: isCrypto ? XTS : code,
        // For cryptos we have to set the number of decimal places explicitly.
        maximumFractionDigits: isCrypto ? decimalsMax : void 0,
        // Don't show fraction digits *if* they are all zero.
        trailingZeroDisplay: "stripIfInteger"
      }
    ),
    symbol,
    symbolWithCode: `${symbol} ${code}`,
    decimalsMax,
    isCrypto,
    displayWithCurrency: (n) => withCurrency(code, n),
    displayWithoutCurrency: (n) => decimalsOrInt(n, decimalsMax),
    validate: (n) => validateMincome(n, decimalsMax)
  };
}
var currencies = {
  USD: makeCurrency({
    code: "USD",
    symbol: "$",
    decimalsMax: 2
  }),
  EUR: makeCurrency({
    code: "EUR",
    symbol: "\u20AC",
    decimalsMax: 2
  }),
  BTC: makeCurrency({
    code: "BTC",
    symbol: "\u20BF",
    decimalsMax: 8,
    isCrypto: true
  })
};
var currencies_default = currencies;

// frontend/model/contracts/shared/distribution/mincome-proportional.js
function mincomeProportional(haveNeeds) {
  let totalHave = 0;
  let totalNeed = 0;
  const havers = [];
  const needers = [];
  for (const haveNeed of haveNeeds) {
    if (haveNeed.haveNeed > 0) {
      havers.push(haveNeed);
      totalHave += haveNeed.haveNeed;
    } else if (haveNeed.haveNeed < 0) {
      needers.push(haveNeed);
      totalNeed += Math.abs(haveNeed.haveNeed);
    }
  }
  const totalPercent = Math.min(1, totalNeed / totalHave);
  const payments = [];
  for (const haver of havers) {
    const distributionAmount = totalPercent * haver.haveNeed;
    for (const needer of needers) {
      const belowPercentage = Math.abs(needer.haveNeed) / totalNeed;
      payments.push({
        amount: distributionAmount * belowPercentage,
        fromMemberID: haver.memberID,
        toMemberID: needer.memberID
      });
    }
  }
  return payments;
}

// frontend/model/contracts/shared/distribution/payments-minimizer.js
function minimizeTotalPaymentsCount(distribution) {
  const neederTotalReceived = {};
  const haverTotalHave = {};
  const haversSorted = [];
  const needersSorted = [];
  const minimizedDistribution = [];
  for (const todo of distribution) {
    neederTotalReceived[todo.toMemberID] = (neederTotalReceived[todo.toMemberID] || 0) + todo.amount;
    haverTotalHave[todo.fromMemberID] = (haverTotalHave[todo.fromMemberID] || 0) + todo.amount;
  }
  for (const memberID in haverTotalHave) {
    haversSorted.push({ memberID, amount: haverTotalHave[memberID] });
  }
  for (const memberID in neederTotalReceived) {
    needersSorted.push({ memberID, amount: neederTotalReceived[memberID] });
  }
  haversSorted.sort((a, b) => b.amount - a.amount);
  needersSorted.sort((a, b) => b.amount - a.amount);
  while (haversSorted.length > 0 && needersSorted.length > 0) {
    const mostHaver = haversSorted.pop();
    const mostNeeder = needersSorted.pop();
    const diff = mostHaver.amount - mostNeeder.amount;
    if (diff < 0) {
      minimizedDistribution.push({ amount: mostHaver.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
      mostNeeder.amount -= mostHaver.amount;
      needersSorted.push(mostNeeder);
    } else if (diff > 0) {
      minimizedDistribution.push({ amount: mostNeeder.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
      mostHaver.amount -= mostNeeder.amount;
      haversSorted.push(mostHaver);
    } else {
      minimizedDistribution.push({ amount: mostNeeder.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
    }
  }
  return minimizedDistribution;
}

// frontend/model/contracts/shared/distribution/distribution.js
var tinyNum = 1 / Math.pow(10, DECIMALS_MAX);
function unadjustedDistribution({ haveNeeds = [], minimize = true }) {
  const distribution = mincomeProportional(haveNeeds);
  return minimize ? minimizeTotalPaymentsCount(distribution) : distribution;
}
function adjustedDistribution({ distribution, payments, dueOn }) {
  distribution = cloneDeep(distribution);
  for (const todo of distribution) {
    todo.total = todo.amount;
  }
  distribution = subtractDistributions(distribution, payments).filter((todo) => todo.amount >= tinyNum);
  for (const todo of distribution) {
    todo.amount = saferFloat(todo.amount);
    todo.total = saferFloat(todo.total);
    todo.partial = todo.total !== todo.amount;
    todo.isLate = false;
    todo.dueOn = dueOn;
  }
  return distribution;
}
function reduceDistribution(payments) {
  payments = cloneDeep(payments);
  for (let i2 = 0; i2 < payments.length; i2++) {
    const paymentA = payments[i2];
    for (let j = i2 + 1; j < payments.length; j++) {
      const paymentB = payments[j];
      if (paymentA.fromMemberID === paymentB.fromMemberID && paymentA.toMemberID === paymentB.toMemberID || paymentA.toMemberID === paymentB.fromMemberID && paymentA.fromMemberID === paymentB.toMemberID) {
        paymentA.amount += (paymentA.fromMemberID === paymentB.fromMemberID ? 1 : -1) * paymentB.amount;
        paymentA.total += (paymentA.fromMemberID === paymentB.fromMemberID ? 1 : -1) * paymentB.total;
        payments.splice(j, 1);
        j--;
      }
    }
  }
  return payments;
}
function addDistributions(paymentsA, paymentsB) {
  return reduceDistribution([...paymentsA, ...paymentsB]);
}
function subtractDistributions(paymentsA, paymentsB) {
  paymentsB = cloneDeep(paymentsB);
  for (const p of paymentsB) {
    p.amount *= -1;
    p.total *= -1;
  }
  return addDistributions(paymentsA, paymentsB);
}

// frontend/model/contracts/shared/payments/index.js
var PAYMENT_PENDING = "pending";
var PAYMENT_CANCELLED = "cancelled";
var PAYMENT_ERROR = "error";
var PAYMENT_NOT_RECEIVED = "not-received";
var PAYMENT_COMPLETED = "completed";
var paymentStatusType = unionOf(...[PAYMENT_PENDING, PAYMENT_CANCELLED, PAYMENT_ERROR, PAYMENT_NOT_RECEIVED, PAYMENT_COMPLETED].map((k) => literalOf(k)));
var PAYMENT_TYPE_MANUAL = "manual";
var PAYMENT_TYPE_BITCOIN = "bitcoin";
var PAYMENT_TYPE_PAYPAL = "paypal";
var paymentType = unionOf(...[PAYMENT_TYPE_MANUAL, PAYMENT_TYPE_BITCOIN, PAYMENT_TYPE_PAYPAL].map((k) => literalOf(k)));

// frontend/model/contracts/shared/getters/chatroom.js
var chatroom_default2 = {
  chatRoomSettings(state, getters4) {
    return getters4.currentChatRoomState.settings || {};
  },
  chatRoomAttributes(state, getters4) {
    return getters4.currentChatRoomState.attributes || {};
  },
  chatRoomMembers(state, getters4) {
    return getters4.currentChatRoomState.members || {};
  },
  chatRoomRecentMessages(state, getters4) {
    return getters4.currentChatRoomState.messages || [];
  },
  chatRoomPinnedMessages(state, getters4) {
    return (getters4.currentChatRoomState.pinnedMessages || []).sort((a, b) => a.height < b.height ? 1 : -1);
  },
  isJoinedChatRoomForChatRoom(state, getters4) {
    return (state2, memberID) => {
      if (!memberID) memberID = getters4.ourIdentityContractId;
      const members = state2?.members;
      return !!members?.[memberID] && !members[memberID].hasLeft;
    };
  },
  chatRoomActiveMemberIdsForChatRoom() {
    return (state) => {
      const members = state?.members;
      if (!members) return [];
      return Object.keys(members).filter((memberID) => !members[memberID].hasLeft);
    };
  }
};

// frontend/model/contracts/shared/getters/group.js
var group_default2 = {
  currentGroupOwnerID(state, getters4) {
    return getters4.currentGroupState.groupOwnerID;
  },
  groupSettingsForGroup(state, getters4) {
    return (state2) => state2.settings || {};
  },
  groupSettings(state, getters4) {
    return getters4.groupSettingsForGroup(getters4.currentGroupState);
  },
  profileActive(state, getters4) {
    return (member) => {
      const profiles = getters4.currentGroupState.profiles;
      return profiles?.[member]?.status === PROFILE_STATUS.ACTIVE;
    };
  },
  pendingAccept(state, getters4) {
    return (member) => {
      const profiles = getters4.currentGroupState.profiles;
      return profiles?.[member]?.status === PROFILE_STATUS.PENDING;
    };
  },
  groupProfileForGroup(state, getters4) {
    return (state2, member) => {
      const profiles = state2.profiles;
      return profiles && profiles[member] && {
        ...profiles[member],
        get lastLoggedIn() {
          return getters4.currentGroupLastLoggedIn[member] || this.joinedDate;
        }
      };
    };
  },
  groupProfile(state, getters4) {
    return (member) => getters4.groupProfileForGroup(getters4.currentGroupState, member);
  },
  groupProfilesForGroup(state, getters4) {
    return (state2) => {
      const profiles = {};
      for (const member in state2.profiles || {}) {
        const profile = getters4.groupProfileForGroup(state2, member);
        if (profile.status === PROFILE_STATUS.ACTIVE) {
          profiles[member] = profile;
        }
      }
      return profiles;
    };
  },
  groupProfiles(state, getters4) {
    return getters4.groupProfilesForGroup(getters4.currentGroupState);
  },
  groupCreatedDate(state, getters4) {
    return getters4.groupProfile(getters4.currentGroupOwnerID).joinedDate;
  },
  groupMincomeAmountForGroup(state, getters4) {
    return (state2) => getters4.groupSettingsForGroup(state2).mincomeAmount;
  },
  groupMincomeAmount(state, getters4) {
    return getters4.groupMincomeAmountForGroup(getters4.currentGroupState);
  },
  groupMincomeCurrencyForGroup(state, getters4) {
    return (state2) => {
      return getters4.groupSettingsForGroup(state2).mincomeCurrency;
    };
  },
  groupMincomeCurrency(state, getters4) {
    return getters4.groupMincomeCurrencyForGroup(getters4.currentGroupState);
  },
  // Oldest period key first.
  groupSortedPeriodKeysForGroup(state, getters4) {
    return (state2) => {
      const { distributionDate, distributionPeriodLength } = getters4.groupSettingsForGroup(state2);
      if (!distributionDate) return [];
      const keys = Object.keys(getters4.groupPeriodPaymentsForGroup(state2)).sort();
      if (!keys.length && MAX_SAVED_PERIODS > 0) {
        keys.push(dateToPeriodStamp(addTimeToDate(distributionDate, -distributionPeriodLength)));
      }
      if (keys[keys.length - 1] !== distributionDate) {
        keys.push(distributionDate);
      }
      return keys;
    };
  },
  groupSortedPeriodKeys(state, getters4) {
    return getters4.groupSortedPeriodKeysForGroup(getters4.currentGroupState);
  },
  // paymentTotalfromMembertoMemberID (state, getters) {
  // // this code was removed in https://github.com/okTurtles/group-income/pull/1691
  // // because it was unused. feel free to bring it back if needed.
  // },
  //
  // The following three getters return either a known period stamp for the given date,
  // or a predicted one according to the period length.
  // They may also return 'undefined', in which case the caller should check archived data.
  periodStampGivenDateForGroup(state, getters4) {
    return (state2, date, periods) => {
      return periodStampsForDate(date, {
        knownSortedStamps: periods || getters4.groupSortedPeriodKeysForGroup(state2),
        periodLength: getters4.groupSettingsForGroup(state2).distributionPeriodLength
      }).current;
    };
  },
  periodStampGivenDate(state, getters4) {
    return (date, periods) => {
      return getters4.periodStampGivenDateForGroup(getters4.currentGroupState, date, periods);
    };
  },
  periodBeforePeriodForGroup(state, getters4) {
    return (groupState, periodStamp, periods) => {
      return periodStampsForDate(periodStamp, {
        knownSortedStamps: periods || getters4.groupSortedPeriodKeysForGroup(groupState),
        periodLength: getters4.groupSettingsForGroup(groupState).distributionPeriodLength
      }).previous;
    };
  },
  periodBeforePeriod(state, getters4) {
    return (periodStamp, periods) => getters4.periodBeforePeriodForGroup(getters4.currentGroupState, periodStamp, periods);
  },
  periodAfterPeriodForGroup(state, getters4) {
    return (groupState, periodStamp, periods) => {
      return periodStampsForDate(periodStamp, {
        knownSortedStamps: periods || getters4.groupSortedPeriodKeysForGroup(groupState),
        periodLength: getters4.groupSettingsForGroup(groupState).distributionPeriodLength
      }).next;
    };
  },
  periodAfterPeriod(state, getters4) {
    return (periodStamp, periods) => getters4.periodAfterPeriodForGroup(getters4.currentGroupState, periodStamp, periods);
  },
  dueDateForPeriodForGroup(state, getters4) {
    return (state2, periodStamp, periods) => {
      return getters4.periodAfterPeriodForGroup(state2, periodStamp, periods);
    };
  },
  dueDateForPeriod(state, getters4) {
    return (periodStamp, periods) => {
      return getters4.dueDateForPeriodForGroup(getters4.currentGroupState, periodStamp, periods);
    };
  },
  paymentHashesForPeriodForGroup(state, getters4) {
    return (state2, periodStamp) => {
      const periodPayments = getters4.groupPeriodPaymentsForGroup(state2)[periodStamp];
      if (periodPayments) {
        return paymentHashesFromPaymentPeriod(periodPayments);
      }
    };
  },
  paymentHashesForPeriod(state, getters4) {
    return (periodStamp) => {
      return getters4.paymentHashesForPeriodForGroup(getters4.currentGroupState, periodStamp);
    };
  },
  groupMembersByContractID(state, getters4) {
    return Object.keys(getters4.groupProfiles);
  },
  groupMembersCount(state, getters4) {
    return getters4.groupMembersByContractID.length;
  },
  groupMembersPending(state, getters4) {
    const invites = getters4.currentGroupState.invites;
    const vmInvites = getters4.currentGroupState._vm.invites;
    const pendingMembers = /* @__PURE__ */ Object.create(null);
    for (const inviteKeyId in invites) {
      if (vmInvites[inviteKeyId].status === INVITE_STATUS.VALID && invites[inviteKeyId].creatorID !== INVITE_INITIAL_CREATOR) {
        pendingMembers[inviteKeyId] = {
          displayName: invites[inviteKeyId].invitee,
          invitedBy: invites[inviteKeyId].creatorID,
          expires: vmInvites[inviteKeyId].expires
        };
      }
    }
    return pendingMembers;
  },
  groupShouldPropose(state, getters4) {
    return getters4.groupMembersCount >= 3;
  },
  groupDistributionStarted(state, getters4) {
    return (currentDate) => currentDate >= getters4.groupSettings?.distributionDate;
  },
  groupProposalSettings(state, getters4) {
    return (proposalType2 = PROPOSAL_GENERIC) => {
      return getters4.groupSettings.proposals?.[proposalType2];
    };
  },
  groupCurrencyForGroup(state, getters4) {
    return (state2) => {
      const mincomeCurrency = getters4.groupMincomeCurrencyForGroup(state2);
      return mincomeCurrency && currencies_default[mincomeCurrency];
    };
  },
  groupCurrency(state, getters4) {
    return getters4.groupCurrencyForGroup(getters4.currentGroupState);
  },
  groupMincomeSymbolWithCode(state, getters4) {
    return getters4.groupCurrency?.symbolWithCode;
  },
  groupPeriodPaymentsForGroup(state, getters4) {
    return (state2) => {
      return state2.paymentsByPeriod || {};
    };
  },
  groupPeriodPayments(state, getters4) {
    return getters4.groupPeriodPaymentsForGroup(getters4.currentGroupState);
  },
  groupThankYousFrom(state, getters4) {
    return getters4.currentGroupState.thankYousFrom || {};
  },
  groupStreaks(state, getters4) {
    return getters4.currentGroupState.streaks || {};
  },
  groupTotalPledgeAmount(state, getters4) {
    return getters4.currentGroupState.totalPledgeAmount || 0;
  },
  groupChatRooms(state, getters4) {
    return getters4.currentGroupState.chatRooms;
  },
  groupGeneralChatRoomId(state, getters4) {
    return getters4.currentGroupState.generalChatRoomId;
  },
  // getter is named haveNeedsForThisPeriod instead of haveNeedsForPeriod because it uses
  // getters.groupProfiles - and that is always based on the most recent values. we still
  // pass in the current period because it's used to set the "when" property
  haveNeedsForThisPeriodForGroup(state, getters4) {
    return (state2, currentPeriod) => {
      const groupProfiles = getters4.groupProfilesForGroup(state2);
      const haveNeeds = [];
      for (const memberID in groupProfiles) {
        const { incomeDetailsType, joinedDate } = groupProfiles[memberID];
        if (incomeDetailsType) {
          const amount = groupProfiles[memberID][incomeDetailsType];
          const haveNeed = incomeDetailsType === "incomeAmount" ? amount - getters4.groupMincomeAmountForGroup(state2) : amount;
          let when = dateFromPeriodStamp(currentPeriod).toISOString();
          if (dateIsWithinPeriod({
            date: joinedDate,
            periodStart: currentPeriod,
            periodLength: getters4.groupSettingsForGroup(state2).distributionPeriodLength
          })) {
            when = joinedDate;
          }
          haveNeeds.push({ memberID, haveNeed, when });
        }
      }
      return haveNeeds;
    };
  },
  haveNeedsForThisPeriod(state, getters4) {
    return (currentPeriod) => {
      return getters4.haveNeedsForThisPeriodForGroup(getters4.currentGroupState, currentPeriod);
    };
  },
  paymentsForPeriodForGroup(state, getters4) {
    return (state2, periodStamp) => {
      const hashes = getters4.paymentHashesForPeriodForGroup(state2, periodStamp);
      const events = [];
      if (hashes && hashes.length > 0) {
        const payments = state2.payments;
        for (const paymentHash of hashes) {
          const payment = payments[paymentHash];
          if (payment.data.status === PAYMENT_COMPLETED) {
            events.push(createPaymentInfo(paymentHash, payment));
          }
        }
      }
      return events;
    };
  },
  paymentsForPeriod(state, getters4) {
    return (periodStamp) => {
      return getters4.paymentsForPeriodForGroup(getters4.currentGroupState, periodStamp);
    };
  }
  // distributionEventsForMonth (state, getters) {
  //   return (monthstamp) => {
  //     // NOTE: if we ever switch back to the "real-time" adjusted distribution
  //     // algorithm, make sure that this function also handles userExitsGroupEvent
  //     const distributionEvents = getters.haveNeedEventsForMonth(monthstamp)
  //     const paymentEvents = getters.paymentEventsForMonth(monthstamp)
  //     distributionEvents.splice(distributionEvents.length, 0, paymentEvents)
  //     return distributionEvents.sort((a, b) => compareISOTimestamps(a.data.when, b.data.when))
  //   }
  // }
};

// frontend/model/contracts/shared/getters/identity.js
var identity_default2 = {
  loginState(state, getters4) {
    return getters4.currentIdentityState.loginState;
  },
  ourDirectMessages(state, getters4) {
    return getters4.currentIdentityState.chatRooms || {};
  }
};

// frontend/model/getters.js
var checkedUsername = (state, username, userID) => {
  if (username && state.namespaceLookups?.[username] === userID) {
    return username;
  }
};
var anyoneCanJoinInviteId = (invites, getters4) => Object.keys(invites).find(
  (invite) => (
    // First, we want 'anyone can join' invites
    invites[invite].creatorID === INVITE_INITIAL_CREATOR && // and that haven't been revoked
    getters4.currentGroupState._vm.invites[invite].status === INVITE_STATUS.VALID && // and that haven't expired (using negative logic because expires could be
    // undefined for non expiring-invites)
    !(getters4.currentGroupState._vm.invites[invite].expires < Date.now()) && // and that that haven't been entirely used up
    !(getters4.currentGroupState._vm.invites[invite].quantity <= 0)
  )
);
var getters2 = {
  // !!  IMPORTANT  !!
  //
  // We register pure Vuex getters here, but later on at the bottom of this file,
  // we will also import into Vuex the contract getters so that they can be reused
  // without having to be redefined. This is possible because Chelonia contract getters
  // are designed to be compatible with Vuex getters.
  //
  // We will use the getters 'currentGroupState', 'currentIdentityState', and
  // 'currentChatRoomState' as a "bridge" between the contract getters and Vuex.
  //
  // This makes it possible for the getters inside of contracts to refer to each
  // specific contractID instance, while the Vuex version of those getters that
  // are imported at the bottom of this file (in the listener for CONTRACT_REGISTERED
  // will reference the state for the specific contractID for either the current group,
  // the current user identity contract, or the current chatroom we're looking at.
  //
  // For getters that get data from only contract state, write them
  // under the 'getters' key of the object passed to 'chelonia/defineContract'.
  // See for example: frontend/model/contracts/group.js
  //
  // Again, for convenience, we've defined the same getter, `currentGroupState`,
  // twice, so that we can reuse the same getter definitions both here with Vuex,
  // and inside of the contracts (e.g. in group.js).
  //
  // The 'currentGroupState' here is based off the value of `state.currentGroupId`,
  // a user preference that does not exist in the group contract state.
  currentGroupState(state) {
    if (true) {
      if (typeof Window === "undefined") {
        const error = new Error("Tried to access currentGroupState from outside a browsing context");
        Promise.reject(error);
        throw error;
      }
    }
    return state[state.currentGroupId] || {};
  },
  currentIdentityState(state) {
    return state.loggedIn && state[state.loggedIn.identityContractID] || {};
  },
  ourUsername(state, getters4) {
    return state.loggedIn && getters4.usernameFromID(state.loggedIn.identityContractID);
  },
  ourPreferences(state) {
    return state.preferences;
  },
  ourProfileActive(state, getters4) {
    return getters4.profileActive(getters4.ourIdentityContractId);
  },
  ourPendingAccept(state, getters4) {
    return getters4.pendingAccept(getters4.ourIdentityContractId);
  },
  ourGroupProfileForGroup(state, getters4) {
    return (state2) => getters4.groupProfileForGroup(state2, getters4.ourIdentityContractId);
  },
  ourGroupProfile(state, getters4) {
    return getters4.ourGroupProfileForGroup(getters4.currentGroupState);
  },
  ourUserDisplayName(state, getters4) {
    const userContract = getters4.currentIdentityState || {};
    return userContract.attributes?.displayName || getters4.ourUsername || getters4.ourIdentityContractId;
  },
  ourIdentityContractId(state) {
    return state.loggedIn && state.loggedIn.identityContractID;
  },
  ourGroups(state, getters4) {
    const identityContractID2 = getters4.ourIdentityContractId;
    if (!identityContractID2) return [];
    return Object.keys(state[identityContractID2]?.groups || {}).filter(
      (gId) => !state[identityContractID2].groups[gId].hasLeft && state[gId]
    );
  },
  currentGroupLastLoggedIn(state) {
    return state.lastLoggedIn[state.currentGroupId] || {};
  },
  // NOTE: since this getter is written using `getters.ourUsername`, which is based
  //       on vuexState.loggedIn (a user preference), we cannot use this getter
  //       into group.js
  ourContributionSummary(state, getters4) {
    const groupProfiles = getters4.groupProfiles;
    const ourIdentityContractId = getters4.ourIdentityContractId;
    const ourGroupProfile = getters4.ourGroupProfile;
    if (!ourGroupProfile || !ourGroupProfile.incomeDetailsType) {
      return {};
    }
    const doWeNeedIncome = ourGroupProfile.incomeDetailsType === "incomeAmount";
    const distribution = getters4.groupIncomeDistribution;
    const nonMonetaryContributionsOf = (memberID) => groupProfiles[memberID].nonMonetaryContributions || [];
    return {
      givingMonetary: (() => {
        if (doWeNeedIncome) {
          return null;
        }
        const who = [];
        const whoIds = [];
        const total = distribution.filter((p) => p.fromMemberID === ourIdentityContractId).reduce((acc, payment) => {
          who.push(getters4.userDisplayNameFromID(payment.toMemberID));
          whoIds.push(payment.toMemberID);
          return acc + payment.amount;
        }, 0);
        return { who, whoIds, total, pledged: ourGroupProfile.pledgeAmount };
      })(),
      receivingMonetary: (() => {
        if (!doWeNeedIncome) {
          return null;
        }
        const needed = getters4.groupSettings.mincomeAmount - ourGroupProfile.incomeAmount;
        const who = [];
        const whoIds = [];
        const total = distribution.filter((p) => p.toMemberID === ourIdentityContractId).reduce((acc, payment) => {
          who.push(getters4.userDisplayNameFromID(payment.fromMemberID));
          whoIds.push(payment.fromMemberID);
          return acc + payment.amount;
        }, 0);
        return { who, whoIds, total, needed };
      })(),
      receivingNonMonetary: (() => {
        const listWho = Object.keys(groupProfiles).filter((memberID) => memberID !== ourIdentityContractId && nonMonetaryContributionsOf(memberID).length > 0);
        const listWhat = listWho.reduce((contr, memberID) => {
          const displayName = getters4.userDisplayNameFromID(memberID);
          const userContributions = nonMonetaryContributionsOf(memberID);
          userContributions.forEach((what) => {
            const contributionIndex = contr.findIndex((c) => c.what === what);
            if (contributionIndex >= 0) {
              contr[contributionIndex].who.push(displayName);
              contr[contributionIndex].whoIds.push(memberID);
            } else {
              contr.push({ who: [displayName], whoIds: [memberID], what });
            }
          });
          return contr;
        }, []);
        return listWho.length > 0 ? { what: listWhat, who: listWho } : null;
      })(),
      givingNonMonetary: (() => {
        const contributions = ourGroupProfile.nonMonetaryContributions;
        return contributions.length > 0 ? contributions : null;
      })()
    };
  },
  usernameFromID(state, getters4) {
    return (userID) => {
      const profile = getters4.ourContactProfilesById[userID];
      return profile?.username || state.reverseNamespaceLookups[userID] || userID;
    };
  },
  userDisplayNameFromID(state, getters4) {
    return (userID) => {
      if (userID === getters4.ourIdentityContractId) {
        return getters4.ourUserDisplayName;
      }
      const profile = getters4.ourContactProfilesById[userID];
      return profile?.displayName || profile?.username || state.reverseNamespaceLookups[userID] || userID;
    };
  },
  thisPeriodPaymentInfoForGroup(state, getters4) {
    return (state2) => {
      return getters4.groupPeriodPaymentsForGroup(state2)[getters4.currentPaymentPeriodForGroup(state2)];
    };
  },
  thisPeriodPaymentInfo(state, getters4) {
    return getters4.thisPeriodPaymentInfoForGroup(getters4.currentGroupState);
  },
  latePayments(state, getters4) {
    const periodPayments = getters4.groupPeriodPayments;
    if (Object.keys(periodPayments).length === 0) return;
    const ourIdentityContractId = getters4.ourIdentityContractId;
    const pPeriod = getters4.periodBeforePeriod(getters4.currentPaymentPeriod);
    const pPayments = periodPayments[pPeriod];
    if (pPayments) {
      return pPayments.lastAdjustedDistribution.filter((todo) => todo.fromMemberID === ourIdentityContractId);
    }
  },
  // used with graphs like those in the dashboard and in the income details modal
  groupIncomeDistribution(state, getters4) {
    return unadjustedDistribution({
      haveNeeds: getters4.haveNeedsForThisPeriod(getters4.currentPaymentPeriod),
      minimize: false
    });
  },
  // adjusted version of groupIncomeDistribution, used by the payments system
  groupIncomeAdjustedDistributionForGroup(state, getters4) {
    return (state2) => {
      const paymentInfo = getters4.thisPeriodPaymentInfoForGroup(state2);
      if (paymentInfo && paymentInfo.lastAdjustedDistribution) {
        return paymentInfo.lastAdjustedDistribution;
      } else {
        const period = getters4.currentPaymentPeriodForGroup(state2);
        return adjustedDistribution({
          distribution: unadjustedDistribution({
            haveNeeds: getters4.haveNeedsForThisPeriodForGroup(state2, period),
            minimize: getters4.groupSettingsForGroup(state2).minimizeDistribution
          }),
          payments: getters4.paymentsForPeriodForGroup(state2, period),
          dueOn: getters4.dueDateForPeriodForGroup(state2, period)
        });
      }
    };
  },
  groupIncomeAdjustedDistribution(state, getters4) {
    return getters4.groupIncomeAdjustedDistributionForGroup(getters4.currentGroupState);
  },
  ourPaymentsSentInPeriodForGroup(state, getters4) {
    return (state2, period) => {
      const periodPayments = getters4.groupPeriodPaymentsForGroup(state2);
      if (Object.keys(periodPayments).length === 0) return;
      const payments = [];
      const thisPeriodPayments = periodPayments[period];
      const paymentsFrom = thisPeriodPayments && thisPeriodPayments.paymentsFrom;
      if (paymentsFrom) {
        const ourIdentityContractId = getters4.ourIdentityContractId;
        const allPayments = state2.payments;
        for (const toMemberID in paymentsFrom[ourIdentityContractId]) {
          for (const paymentHash of paymentsFrom[ourIdentityContractId][toMemberID]) {
            const { data, meta, height } = allPayments[paymentHash];
            payments.push({ hash: paymentHash, height, data, meta, amount: data.amount, period });
          }
        }
      }
      return payments.sort((paymentA, paymentB) => paymentB.height - paymentA.height);
    };
  },
  ourPaymentsSentInPeriod(state, getters4) {
    return (period) => getters4.ourPaymentsSentInPeriodForGroup(getters4.currentGroupState, period);
  },
  ourPaymentsReceivedInPeriodForGroup(state, getters4) {
    return (state2, period) => {
      const periodPayments = getters4.groupPeriodPaymentsForGroup(state2);
      if (Object.keys(periodPayments).length === 0) return;
      const payments = [];
      const thisPeriodPayments = periodPayments[period];
      const paymentsFrom = thisPeriodPayments && thisPeriodPayments.paymentsFrom;
      if (paymentsFrom) {
        const ourIdentityContractId = getters4.ourIdentityContractId;
        const allPayments = state2.payments;
        for (const fromMemberID in paymentsFrom) {
          for (const toMemberID in paymentsFrom[fromMemberID]) {
            if (toMemberID === ourIdentityContractId) {
              for (const paymentHash of paymentsFrom[fromMemberID][toMemberID]) {
                const { data, meta, height } = allPayments[paymentHash];
                payments.push({ hash: paymentHash, height, data, meta, amount: data.amount });
              }
            }
          }
        }
      }
      return payments.sort((paymentA, paymentB) => paymentB.height - paymentA.height);
    };
  },
  ourPaymentsReceivedInPeriod(state, getters4) {
    return (period) => getters4.ourPaymentsReceivedInPeriodForGroup(getters4.currentGroupState, period);
  },
  ourPaymentsForGroup(state, getters4) {
    return (state2) => {
      const periodPayments = getters4.groupPeriodPaymentsForGroup(state2);
      if (Object.keys(periodPayments).length === 0) return;
      const ourIdentityContractId = getters4.ourIdentityContractId;
      const cPeriod = getters4.currentPaymentPeriodForGroup(state2);
      const pPeriod = getters4.periodBeforePeriodForGroup(state2, cPeriod);
      const currentSent = getters4.ourPaymentsSentInPeriodForGroup(state2, cPeriod);
      const previousSent = getters4.ourPaymentsSentInPeriodForGroup(state2, pPeriod);
      const currentReceived = getters4.ourPaymentsReceivedInPeriodForGroup(state2, cPeriod);
      const previousReceived = getters4.ourPaymentsReceivedInPeriodForGroup(state2, pPeriod);
      const todo = () => {
        return getters4.groupIncomeAdjustedDistributionForGroup(state2).filter((p) => p.fromMemberID === ourIdentityContractId);
      };
      return {
        sent: [...currentSent, ...previousSent],
        received: [...currentReceived, ...previousReceived],
        todo: todo()
      };
    };
  },
  ourPayments(state, getters4) {
    return getters4.ourPaymentsForGroup(getters4.currentGroupState);
  },
  ourPaymentsSummary(state, getters4) {
    const isNeeder = getters4.ourGroupProfile.incomeDetailsType === "incomeAmount";
    const ourIdentityContractId = getters4.ourIdentityContractId;
    const isOurPayment = (payment) => {
      return isNeeder ? payment.toMemberID === ourIdentityContractId : payment.fromMemberID === ourIdentityContractId;
    };
    const sumUpAmountReducer = (acc, payment) => acc + payment.amount;
    const cPeriod = getters4.currentPaymentPeriod;
    const ourAdjustedPayments = getters4.groupIncomeAdjustedDistribution.filter(isOurPayment);
    const receivedOrSent = isNeeder ? getters4.ourPaymentsReceivedInPeriod(cPeriod) : getters4.ourPaymentsSentInPeriod(cPeriod);
    const markedAsNotReceived = receivedOrSent.filter((payment) => payment.data.status === PAYMENT_NOT_RECEIVED);
    const markedAsNotReceivedTotal = markedAsNotReceived.reduce(sumUpAmountReducer, 0);
    const paymentsTotal = ourAdjustedPayments.length + receivedOrSent.length;
    const nonLateAdjusted = ourAdjustedPayments.filter((p) => !p.isLate);
    const paymentsDone = paymentsTotal - nonLateAdjusted.length - markedAsNotReceived.length;
    const hasPartials = ourAdjustedPayments.some((p) => p.partial);
    const amountDone = receivedOrSent.reduce(sumUpAmountReducer, 0) - markedAsNotReceivedTotal;
    const amountLeft = ourAdjustedPayments.reduce((acc, payment) => acc + payment.amount, 0) + markedAsNotReceivedTotal;
    const amountTotal = amountDone + amountLeft;
    return {
      paymentsDone,
      hasPartials,
      paymentsTotal,
      amountDone,
      amountTotal
    };
  },
  currentWelcomeInvite(state, getters4) {
    const invites = getters4.currentGroupState.invites;
    const inviteId = anyoneCanJoinInviteId(invites, getters4);
    const expires = getters4.currentGroupState._vm.invites[inviteId].expires;
    return { inviteId, expires };
  },
  // list of group names and contractIDs
  groupsByName(state, getters4) {
    const identityContractID2 = getters4.ourIdentityContractId;
    const groups = state[identityContractID2]?.groups;
    if (!groups) return [];
    return Object.entries(groups).filter(([, { hasLeft }]) => !hasLeft).map(([contractID]) => ({ groupName: state[contractID]?.settings?.groupName || L("Pending"), contractID, active: state[contractID]?.profiles?.[identityContractID2]?.status === PROFILE_STATUS.ACTIVE }));
  },
  profilesByGroup(state, getters4) {
    return (groupID) => {
      const profiles = {};
      if (state.contracts[groupID]?.type !== "gi.contracts/group") {
        return profiles;
      }
      const groupProfiles = state[groupID].profiles || {};
      for (const member in groupProfiles) {
        const profile = groupProfiles[member];
        if (profile.status === PROFILE_STATUS.ACTIVE) {
          profiles[member] = profile;
        }
      }
      return profiles;
    };
  },
  groupMembersSorted(state, getters4) {
    const profiles = getters4.currentGroupState.profiles;
    if (!profiles || !profiles[getters4.ourIdentityContractId]) return [];
    const weJoinedHeight = profiles[getters4.ourIdentityContractId].joinedHeight;
    const isNewMember = (memberID) => {
      if (memberID === getters4.ourIdentityContractId) {
        return false;
      }
      const memberProfile = profiles[memberID];
      if (!memberProfile) return false;
      const memberJoinedHeight = memberProfile.joinedHeight;
      const memberJoinedMs = new Date(memberProfile.joinedDate).getTime();
      const joinedAfterUs = weJoinedHeight < memberJoinedHeight;
      return joinedAfterUs && Date.now() - memberJoinedMs < 6048e5;
    };
    const groupMembersPending = getters4.groupMembersPending;
    return [groupMembersPending, getters4.groupProfiles].flatMap(Object.keys).filter((memberID) => getters4.groupProfiles[memberID] || !(getters4.groupMembersPending[memberID].expires < Date.now())).map((memberID) => {
      const { contractID, displayName, username } = getters4.globalProfile(memberID) || groupMembersPending[memberID] || (getters4.groupProfiles[memberID] ? { contractID: memberID } : {});
      return {
        id: memberID,
        // common unique ID: it can be either the contract ID or the invite key
        contractID,
        username,
        displayName: displayName || username || memberID,
        invitedBy: getters4.groupMembersPending[memberID],
        isNew: isNewMember(memberID)
      };
    }).sort((userA, userB) => {
      const nameA = userA.displayName.normalize().toUpperCase();
      const nameB = userB.displayName.normalize().toUpperCase();
      if (userA.invitedBy && !userB.invitedBy) {
        return -1;
      }
      if (!userA.invitedBy && userB.invitedBy) {
        return 1;
      }
      if (userA.isNew && !userB.isNew) {
        return -1;
      }
      if (!userA.isNew && userB.isNew) {
        return 1;
      }
      return nameA < nameB ? -1 : 1;
    });
  },
  groupProposals(state, getters4) {
    return (contractID) => state[contractID]?.proposals;
  },
  globalProfile(state, getters4) {
    return (memberID) => {
      return getters4.ourContactProfilesById[memberID];
    };
  },
  ourContactProfilesByUsername(state, getters4) {
    const profiles = {};
    Object.keys(state.contracts).filter((contractID) => state.contracts[contractID]?.type === "gi.contracts/identity").forEach((contractID) => {
      const attributes = state[contractID].attributes;
      if (attributes) {
        const username = checkedUsername(state, attributes.username, contractID);
        if (!username) return;
        profiles[username] = {
          ...attributes,
          username,
          contractID
        };
      }
    });
    return profiles;
  },
  ourContactProfilesById(state, getters4) {
    const profiles = {};
    Object.keys(state.contracts).filter((contractID) => state.contracts[contractID]?.type === "gi.contracts/identity").forEach((contractID) => {
      const attributes = state[contractID]?.attributes;
      if (attributes) {
        const username = checkedUsername(state, attributes.username, contractID);
        profiles[contractID] = {
          ...attributes,
          username,
          contractID
        };
      } else {
        profiles[contractID] = {
          contractID
        };
      }
    });
    Object.keys(state.reverseNamespaceLookups).forEach((contractID) => {
      if (profiles[contractID] || state.contracts[contractID] === null) return;
      profiles[contractID] = {
        username: state.reverseNamespaceLookups[contractID],
        contractID
      };
    });
    return profiles;
  },
  currentGroupContactProfilesById(state, getters4) {
    const currentGroupProfileIds = Object.keys(getters4.currentGroupState.profiles || {});
    const filtered = {};
    for (const identityContractID2 in getters4.ourContactProfilesById) {
      if (currentGroupProfileIds.includes(identityContractID2)) {
        filtered[identityContractID2] = getters4.ourContactProfilesById[identityContractID2];
      }
    }
    return filtered;
  },
  ourContactsById(state, getters4) {
    return Object.keys(getters4.ourContactProfilesById).sort((userIdA, userIdB) => {
      const nameA = getters4.ourContactProfilesById[userIdA].displayName || getters4.ourContactProfilesById[userIdA].username || userIdA;
      const nameB = getters4.ourContactProfilesById[userIdB].displayName || getters4.ourContactProfilesById[userIdB].username || userIdB;
      return nameA.normalize().toUpperCase() > nameB.normalize().toUpperCase() ? 1 : -1;
    });
  },
  ourContactsByUsername(state, getters4) {
    return Object.keys(getters4.ourContactProfilesByUsername).sort((usernameA, usernameB) => {
      const nameA = getters4.ourContactProfilesByUsername[usernameA].displayName || usernameA;
      const nameB = getters4.ourContactProfilesByUsername[usernameB].displayName || usernameB;
      return nameA.normalize().toUpperCase() > nameB.normalize().toUpperCase() ? 1 : -1;
    });
  },
  seenWelcomeScreen(state, getters4) {
    return getters4.currentIdentityState?.groups?.[state.currentGroupId]?.hasLeft || getters4.ourProfileActive && getters4.currentIdentityState?.groups?.[state.currentGroupId]?.seenWelcomeScreen;
  },
  ...chatroom_default2,
  ...group_default2,
  ...identity_default2
};
var getters_default2 = getters2;

// frontend/model/notifications/getters.js
var getters3 = {
  notifications(state, getters4, rootState) {
    return state.items.map((item) => {
      const notification = { ...item, ...state.status[item.hash] };
      if (age(notification) > MAX_AGE_UNREAD) {
        return null;
      } else if (!notification.read && age(notification) > MAX_AGE_READ) {
        notification.read = true;
      }
      return notification;
    }).filter(Boolean);
  },
  // Notifications relevant to the current group only.
  currentGroupNotifications(state, getters4, rootState) {
    return getters4.notifications.filter((item) => item.groupID === rootState.currentGroupId);
  },
  // Notifications relevant to a specific group.
  notificationsByGroup(state, getters4) {
    return (groupID) => getters4.notifications.filter((item) => item.groupID === groupID);
  },
  currentGroupUnreadNotificationCount(state, getters4) {
    return getters4.currentGroupUnreadNotifications.length;
  },
  // Unread notifications relevant to the current group only.
  currentGroupUnreadNotifications(state, getters4, rootState) {
    return getters4.currentGroupNotifications.filter((item) => !item.read);
  },
  currentNewNotifications(state, getters4) {
    return getters4.currentNotifications.filter(isNew);
  },
  currentNotificationCount(state, getters4) {
    return getters4.currentNotifications.length;
  },
  // Notifications relevant to the current group, plus notifications that don't belong to any group in particular.
  currentNotifications(state, getters4, rootState) {
    return getters4.notifications.filter((item) => !item.groupID || item.groupID === rootState.currentGroupId);
  },
  currentOlderNotifications(state, getters4) {
    return getters4.currentNotifications.filter(isOlder);
  },
  currentUnreadNotificationCount(state, getters4) {
    return getters4.currentNotifications.filter((item) => !item.read).length;
  },
  currentUnreadNotifications(state, getters4) {
    return getters4.currentNotifications.filter((item) => !item.read);
  },
  totalUnreadNotificationCount(state, getters4) {
    return getters4.notifications.filter((item) => !item.read).length;
  },
  // Finds what number to display on a group's avatar badge in the sidebar. Used in GroupsList.vue.
  unreadGroupNotificationCountFor(state, getters4) {
    return (groupID) => getters4.unreadGroupNotificationsFor(groupID).length;
  },
  unreadGroupNotificationsFor(state, getters4, rootState) {
    return (groupID) => groupID === rootState.currentGroupId ? getters4.currentGroupUnreadNotifications : getters4.notifications.filter((item) => !item.read && item.groupID === groupID);
  }
};
var getters_default3 = getters3;

// frontend/model/notifications/templates.js
var templates_default = {
  CHELONIA_ERROR(data) {
    const { activity, error, message, msgMeta } = data;
    const contractID = message.contractID();
    const opType = message.opType();
    const value = message.decryptedValue();
    let action;
    if (value) {
      if ([SPMessage.OP_ACTION_ENCRYPTED, SPMessage.OP_ACTION_UNENCRYPTED].includes(opType)) {
        action = value.action;
      } else if (msgMeta && opType === SPMessage.OP_ATOMIC && Number.isFinite(msgMeta.index) && [SPMessage.OP_ACTION_ENCRYPTED, SPMessage.OP_ACTION_UNENCRYPTED].includes(value[msgMeta.index][0])) {
        action = value[msgMeta.index][1].action;
      }
    }
    const state = esm_default("state/vuex/state");
    let who, plaintextWho;
    if (message.innerSigningKeyId()) {
      const innerSigningContractID = findContractIDByForeignKeyId(state[message.contractID()], message.innerSigningKeyId());
      if (innerSigningContractID) {
        who = `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${innerSigningContractID}`;
        plaintextWho = esm_default("state/vuex/getters").userDisplayNameFromID(innerSigningContractID);
      }
    }
    const LcommonParams = {
      errName: error.name,
      activity,
      action: action ?? opType,
      contract: state.contracts[contractID]?.type ?? contractID,
      errMsg: error.message
    };
    const Lparams = {
      ...LcommonParams,
      ...LTags("b"),
      who
    };
    const LplaintextParams = {
      ...LcommonParams,
      who: plaintextWho
    };
    return {
      title: L("Internal error"),
      body: who ? L("{errName} during {activity} for '{action}' from {b_}{who}{_b} to '{contract}': '{errMsg}'", Lparams) : L("{errName} during {activity} for '{action}' to '{contract}': '{errMsg}'", Lparams),
      plaintextBody: who ? L("{errName} during {activity} for '{action}' from {who} to '{contract}': '{errMsg}'", LplaintextParams) : L("{errName} during {activity} for '{action}' to '{contract}': '{errMsg}'", LplaintextParams),
      icon: "exclamation-triangle",
      level: "danger",
      linkTo: `/app/dashboard?modal=UserSettingsModal&tab=application-logs&errorMsg=${encodeURIComponent(error.message)}`,
      scope: "app"
    };
  },
  GENERAL(data) {
    return {
      title: L("Group Income"),
      body: data.message,
      plaintextBody: data.message,
      icon: "cog",
      level: "info",
      linkTo: "",
      scope: "app"
    };
  },
  WARNING(data) {
    return {
      title: L("Warning"),
      body: data.message,
      plaintextBody: data.message,
      icon: "exclamation-triangle",
      level: "danger",
      linkTo: "",
      scope: "app"
    };
  },
  ERROR(data) {
    return {
      title: L("Error"),
      body: data.message,
      plaintextBody: data.message,
      icon: "exclamation-triangle",
      level: "danger",
      linkTo: `/app/dashboard?modal=UserSettingsModal&tab=application-logs&errorMsg=${encodeURIComponent(data.message)}`,
      scope: "app"
    };
  },
  CONTRIBUTION_REMINDER(data) {
    return {
      title: L("Contribution reminder"),
      body: L("Do not forget to send your pledge by {strong_}{date}{_strong}.", {
        date: data.date,
        ...LTags("strong")
      }),
      plaintextBody: L("Do not forget to send your pledge by {strong_}{date}{_strong}.", {
        date: data.date
      }),
      icon: "coins",
      level: "info",
      linkTo: "/payments",
      scope: "user"
    };
  },
  INCOME_DETAILS_OLD(data) {
    return {
      title: L("Update income details"),
      body: L("You haven't updated your income details in more than {months} months. Would you like to review them now?", {
        months: Math.floor(data.months)
        // Avoid displaying decimals
      }),
      plaintextBody: L("You haven't updated your income details in more than {months} months. Would you like to review them now?", {
        months: Math.floor(data.months)
        // Avoid displaying decimals
      }),
      icon: "coins",
      level: "info",
      linkTo: "/contributions?modal=IncomeDetails",
      scope: "user",
      data: { lastUpdatedDate: data.lastUpdatedDate }
    };
  },
  MEMBER_ADDED(data) {
    const rootState = esm_default("state/vuex/state");
    const plaintextName = esm_default("state/vuex/getters").userDisplayNameFromID(data.memberID);
    const hasPlaintextName = plaintextName !== data.memberID;
    return {
      avatarUserID: data.memberID,
      title: rootState[data.groupID]?.settings?.groupName || L("Member added"),
      body: L("The group has a new member. Say hi to {strong_}{name}{_strong}!", {
        name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.memberID}`,
        ...LTags("strong")
      }),
      plaintextBody: hasPlaintextName ? L("The group has a new member. Say hi to {strong_}{name}{_strong}!", {
        name: plaintextName
      }) : L("The group has a new member. Say hi!"),
      icon: "user-plus",
      level: "info",
      linkTo: `/group-chat/${rootState[data.groupID]?.generalChatRoomId}`,
      scope: "group",
      groupID: data.groupID
    };
  },
  MEMBER_LEFT(data) {
    const rootState = esm_default("state/vuex/state");
    const plaintextName = esm_default("state/vuex/getters").userDisplayNameFromID(data.memberID);
    const hasPlaintextName = plaintextName !== data.memberID;
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Member added"),
      avatarUserID: data.memberID,
      body: L("{strong_}{name}{_strong} has left your group. Contributions were updated accordingly.", {
        name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.memberID}`,
        ...LTags("strong")
      }),
      plaintextBody: hasPlaintextName ? L("{strong_}{name}{_strong} has left your group. Contributions were updated accordingly.", {
        name: plaintextName
      }) : L("A member left your group. Contributions were updated accordingly.", {
        name: plaintextName
      }),
      icon: "user-minus",
      level: "danger",
      linkTo: "/contributions",
      scope: "group",
      groupID: data.groupID
    };
  },
  MEMBER_REMOVED(data) {
    const rootState = esm_default("state/vuex/state");
    const plaintextName = esm_default("state/vuex/getters").userDisplayNameFromID(data.memberID);
    const hasPlaintextName = plaintextName !== data.memberID;
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Member added"),
      avatarUserID: data.memberID,
      // REVIEW @mmbotelho - Not only contributions, but also proposals.
      body: L("{strong_}{name}{_strong} was kicked out of the group. Contributions were updated accordingly.", {
        name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.memberID}`,
        ...LTags("strong")
      }),
      plaintextBody: hasPlaintextName ? L("{strong_}{name}{_strong} was kicked out of the group. Contributions were updated accordingly.", {
        name: plaintextName
      }) : L("A member was kicked out of the group. Contributions were updated accordingly."),
      icon: "user-minus",
      level: "danger",
      linkTo: "/contributions",
      scope: "group",
      groupID: data.groupID
    };
  },
  NEW_PROPOSAL(data) {
    const rootState = esm_default("state/vuex/state");
    const isCreator = data.creatorID === esm_default("state/vuex/getters").ourIdentityContractId;
    const args = {
      name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.creatorID}`,
      ...LTags("strong")
    };
    const plaintextArgs = {
      name: esm_default("state/vuex/getters").userDisplayNameFromID(data.creatorID)
    };
    const bodyTemplateMap = {
      ADD_MEMBER: isCreator ? L("You proposed to add a member to the group.") : L("{strong_}{name}{_strong} proposed to add a member to the group. Vote now!", args),
      CHANGE_MINCOME: isCreator ? L("You proposed to change the group mincome.") : L("{strong_}{name}{_strong} proposed to change the group mincome. Vote now!", args),
      CHANGE_DISTRIBUTION_DATE: isCreator ? L("You proposed to change the group distribution date.") : L("{strong_}{name}{_strong} proposed to change the group distribution date. Vote now!", args),
      CHANGE_VOTING_RULE: isCreator ? L("You proposed to change the group voting system.") : L("{strong_}{name}{_strong} proposed to change the group voting system. Vote now!", args),
      REMOVE_MEMBER: isCreator ? L("You proposed to remove a member from the group.") : L("{strong_}{name}{_strong} proposed to remove a member from the group. Vote now!", args),
      GENERIC: isCreator ? L("You created a proposal.") : L("{strong_}{name}{_strong} created a proposal. Vote now!", args)
    };
    const plaintextBodyTemplateMap = {
      ADD_MEMBER: isCreator ? L("You proposed to add a member to the group.") : L("{strong_}{name}{_strong} proposed to add a member to the group. Vote now!", plaintextArgs),
      CHANGE_MINCOME: isCreator ? L("You proposed to change the group mincome.") : L("{strong_}{name}{_strong} proposed to change the group mincome. Vote now!", plaintextArgs),
      CHANGE_DISTRIBUTION_DATE: isCreator ? L("You proposed to change the group distribution date.") : L("{strong_}{name}{_strong} proposed to change the group distribution date. Vote now!", plaintextArgs),
      CHANGE_VOTING_RULE: isCreator ? L("You proposed to change the group voting system.") : L("{strong_}{name}{_strong} proposed to change the group voting system. Vote now!", plaintextArgs),
      REMOVE_MEMBER: isCreator ? L("You proposed to remove a member from the group.") : L("{strong_}{name}{_strong} proposed to remove a member from the group. Vote now!", plaintextArgs),
      GENERIC: isCreator ? L("You created a proposal.") : L("{strong_}{name}{_strong} created a proposal. Vote now!", plaintextArgs)
    };
    const iconMap = {
      ADD_MEMBER: "user-plus",
      CHANGE_MINCOME: "dollar-sign",
      CHANGE_DISTRIBUTION_DATE: "chart-pie",
      CHANGE_VOTING_RULE: "vote-yea",
      REMOVE_MEMBER: "user-minus",
      GENERIC: "envelope-open-text"
    };
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("New proposal"),
      avatarUserID: data.creatorID,
      body: bodyTemplateMap[data.subtype],
      plaintextBody: plaintextBodyTemplateMap[data.subtype],
      creatorID: data.creatorID,
      icon: iconMap[data.subtype],
      level: "info",
      subtype: data.subtype,
      scope: "group",
      sbpInvocation: ["gi.app/group/checkAndSeeProposal", {
        contractID: data.groupID,
        data: { proposalHash: data.proposalHash }
      }]
    };
  },
  PROPOSAL_EXPIRING(data) {
    const rootState = esm_default("state/vuex/state");
    const { proposalData, proposalType: proposalType2 } = data.proposal.data;
    const typeToTitleMap = {
      [PROPOSAL_INVITE_MEMBER]: L("Member addition"),
      [PROPOSAL_REMOVE_MEMBER]: L("Member removal"),
      [PROPOSAL_GROUP_SETTING_CHANGE]: {
        mincomeAmount: L("Mincome change"),
        distributionDate: L("Distribution date change")
      }[proposalData.setting],
      [PROPOSAL_PROPOSAL_SETTING_CHANGE]: L("Voting rule change"),
      [PROPOSAL_GENERIC]: proposalData.name
    };
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Proposal expiring"),
      avatarUserID: "",
      body: L('Proposal about to expire: {i_}"{proposalTitle}"{_i}. Please vote!', {
        ...LTags("i"),
        proposalTitle: typeToTitleMap[proposalType2]
      }),
      plaintextBody: L('Proposal about to expire: {i_}"{proposalTitle}"{_i}. Please vote!', {
        proposalTitle: typeToTitleMap[proposalType2]
      }),
      level: "info",
      icon: "exclamation-triangle",
      scope: "group",
      data: { proposalId: data.proposalId },
      sbpInvocation: ["gi.app/group/checkAndSeeProposal", {
        contractID: data.groupID,
        data: { proposalHash: data.proposalId }
      }]
    };
  },
  PROPOSAL_CLOSED(data) {
    const rootState = esm_default("state/vuex/state");
    const { creatorID, status, type, options } = getProposalDetails(data.proposal);
    const isCreator = creatorID === esm_default("state/vuex/getters").ourIdentityContractId;
    const statusMap = {
      [STATUS_PASSED]: { icon: "check", level: "success", closedWith: L("accepted") },
      [STATUS_FAILED]: { icon: "times", level: "danger", closedWith: L("rejected") },
      [STATUS_CANCELLED]: { icon: "times", level: "danger", closedWith: L("cancelled") },
      // TODO: define icon, level
      [STATUS_EXPIRED]: { icon: "times", level: "danger", closedWith: L("expired") }
      // TODO: define icon, level
    };
    const args = {
      ...options,
      ...LTags("strong"),
      closedWith: statusMap[status].closedWith,
      name: !isCreator ? `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${creatorID}` : ""
    };
    const plaintextArgs = {
      ...options,
      closedWith: statusMap[status].closedWith,
      name: !isCreator ? esm_default("state/vuex/getters").userDisplayNameFromID(creatorID) : ""
    };
    if (options.memberID) {
      args["member"] = `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${options.memberID}`;
      plaintextArgs["member"] = esm_default("state/vuex/getters").userDisplayNameFromID(options.memberID);
    }
    const bodyTemplateMap = {
      [PROPOSAL_INVITE_MEMBER]: isCreator ? L("Your proposal to add {member} to the group was {strong_}{closedWith}{_strong}.", args) : L("{strong_}{name}'s{_strong} proposal to add {member} to the group was {strong_}{closedWith}{_strong}.", args),
      [PROPOSAL_REMOVE_MEMBER]: isCreator ? L("Your proposal to remove {member} from the group was {strong_}{closedWith}{_strong}.", args) : L("{strong_}{name}'s{_strong} proposal to remove {member} from the group was {strong_}{closedWith}{_strong}.", args),
      [PROPOSAL_GROUP_SETTING_CHANGE]: isCreator ? L("Your proposal to change group's {setting} to {value} was {strong_}{closedWith}{_strong}.", args) : L("{strong_}{name}'s{_strong} proposal to change group's {setting} to {value} was {strong_}{closedWith}{_strong}.", args),
      [PROPOSAL_PROPOSAL_SETTING_CHANGE]: isCreator ? L("Your proposal to change group's {setting} was {strong_}{closedWith}{_strong}.", args) : L("{strong_}{name}'s{_strong} proposal to change group's {setting} was {strong_}{closedWith}{_strong}.", args),
      [PROPOSAL_GENERIC]: isCreator ? L('Your proposal "{title}" was {strong_}{closedWith}{_strong}.', args) : L(`{strong_}{name}'s{_strong} proposal "{title}" was {strong_}{closedWith}{_strong}.`, args)
    };
    const plaintextBodyTemplateMap = {
      [PROPOSAL_INVITE_MEMBER]: isCreator ? L("Your proposal to add {member} to the group was {strong_}{closedWith}{_strong}.", plaintextArgs) : L("{strong_}{name}'s{_strong} proposal to add {member} to the group was {strong_}{closedWith}{_strong}.", plaintextArgs),
      [PROPOSAL_REMOVE_MEMBER]: isCreator ? L("Your proposal to remove {member} from the group was {strong_}{closedWith}{_strong}.", plaintextArgs) : L("{strong_}{name}'s{_strong} proposal to remove {member} from the group was {strong_}{closedWith}{_strong}.", plaintextArgs),
      [PROPOSAL_GROUP_SETTING_CHANGE]: isCreator ? L("Your proposal to change group's {setting} to {value} was {strong_}{closedWith}{_strong}.", plaintextArgs) : L("{strong_}{name}'s{_strong} proposal to change group's {setting} to {value} was {strong_}{closedWith}{_strong}.", plaintextArgs),
      [PROPOSAL_PROPOSAL_SETTING_CHANGE]: isCreator ? L("Your proposal to change group's {setting} was {strong_}{closedWith}{_strong}.", plaintextArgs) : L("{strong_}{name}'s{_strong} proposal to change group's {setting} was {strong_}{closedWith}{_strong}.", plaintextArgs),
      [PROPOSAL_GENERIC]: isCreator ? L('Your proposal "{title}" was {strong_}{closedWith}{_strong}.', plaintextArgs) : L(`{strong_}{name}'s{_strong} proposal "{title}" was {strong_}{closedWith}{_strong}.`, plaintextArgs)
    };
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Proposal closed"),
      avatarUserID: creatorID,
      body: bodyTemplateMap[type],
      plaintextBody: plaintextBodyTemplateMap[type],
      icon: statusMap[status].icon,
      level: statusMap[status].level,
      scope: "group",
      sbpInvocation: ["gi.app/group/checkAndSeeProposal", {
        contractID: data.groupID,
        data: { proposalHash: data.proposalHash }
      }]
    };
  },
  PAYMENT_RECEIVED(data) {
    const rootState = esm_default("state/vuex/state");
    const formattedAmount = typeof data.amount === "string" ? data.amount : withCurrency(data.currency, data.amount);
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Payment received"),
      avatarUserID: data.creatorID,
      body: L("{strong_}{name}{_strong} sent you a {amount} mincome contribution. {strong_}Review and send a thank you note.{_strong}", {
        name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.creatorID}`,
        amount: formattedAmount,
        ...LTags("strong")
      }),
      plaintextBody: L("{strong_}{name}{_strong} sent you a {amount} mincome contribution. {strong_}Review and send a thank you note.{_strong}", {
        name: esm_default("state/vuex/getters").userDisplayNameFromID(data.creatorID),
        amount: formattedAmount
      }),
      creatorID: data.creatorID,
      icon: "",
      level: "info",
      linkTo: `/payments?modal=PaymentDetail&id=${data.paymentHash}`,
      scope: "group",
      groupID: data.groupID
    };
  },
  PAYMENT_THANKYOU_SENT(data) {
    const rootState = esm_default("state/vuex/state");
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Thank you note received"),
      avatarUserID: data.fromMemberID,
      body: L("{strong_}{name}{_strong} sent you a {strong_}thank you note{_strong} for your contribution.", {
        name: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.fromMemberID}`,
        ...LTags("strong")
      }),
      plaintextBody: L("{strong_}{name}{_strong} sent you a {strong_}thank you note{_strong} for your contribution.", {
        name: esm_default("state/vuex/getters").userDisplayNameFromID(data.fromMemberID)
      }),
      creatorID: data.fromMemberID,
      icon: "",
      level: "info",
      linkTo: `/payments?modal=ThankYouNoteModal&from=${data.fromMemberID}&to=${data.toMemberID}`,
      scope: "group",
      groupID: data.groupID
    };
  },
  MINCOME_CHANGED(data) {
    const rootState = esm_default("state/vuex/state");
    const { mincomeCurrency } = rootState[data.groupID].settings;
    const amount = withCurrency(mincomeCurrency, data.to);
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Mincome changes"),
      avatarUserID: data.creatorID,
      body: L("The mincome has changed to {amount}.", { amount }),
      plaintextBody: L("The mincome has changed to {amount}.", { amount }),
      creatorID: data.creatorID,
      icon: "dollar-sign",
      level: "info",
      scope: "group",
      sbpInvocation: ["gi.app/group/displayMincomeChangedPrompt", {
        contractID: data.groupID,
        data: {
          amount: data.to,
          memberType: data.memberType,
          increased: data.increased
        }
      }]
    };
  },
  NEW_DISTRIBUTION_PERIOD(data) {
    const rootState = esm_default("state/vuex/state");
    const { period, creatorID, memberType } = data;
    const periodDisplay = humanDate(period, { month: "short", day: "numeric", year: "numeric" });
    const bodyTemplate = {
      // Display the distribution period in the notification message (issue: https://github.com/okTurtles/group-income/issues/1903)
      "pledger": L("A new distribution period ({period}) has started. Please check Payment TODOs.", { period: periodDisplay }),
      "receiver": L("A new distribution period ({period}) has started. Please update your income details if they have changed.", { period: periodDisplay })
    };
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("New distribution period"),
      avatarUserID: creatorID,
      body: bodyTemplate[memberType],
      plaintextBody: bodyTemplate[memberType],
      level: "info",
      icon: "coins",
      linkTo: memberType === "pledger" ? "/payments" : "/contributions?modal=IncomeDetails",
      scope: "group",
      data: { period },
      // is used to check if a notification has already been sent for a particular dist-period
      groupID: data.groupID
    };
  },
  NEAR_DISTRIBUTION_END(data) {
    const rootState = esm_default("state/vuex/state");
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Distribution period ends soon"),
      body: L("Less than 1 week left before the distribution period ends - don't forget to send payments!"),
      plaintextBody: L("Less than 1 week left before the distribution period ends - don't forget to send payments!"),
      level: "info",
      icon: "coins",
      linkTo: "/payments",
      scope: "group",
      data,
      groupID: data.groupID
    };
  },
  NONMONETARY_CONTRIBUTION_UPDATE(data) {
    const rootState = esm_default("state/vuex/state");
    const { prev, after } = data.updateData;
    const added = after.filter((v2) => !prev.includes(v2));
    const removed = prev.filter((v2) => !after.includes(v2));
    const updateType = added.length ? removed.length ? "updated" : "added" : removed.length ? "removed" : null;
    if (!updateType) {
      throw new Error("Cannot emit a NONMONETARY_CONTRIBUTION_UPDATE notification for no updates.");
    }
    const name = `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${data.creatorID}`;
    const plaintextName = esm_default("state/vuex/getters").userDisplayNameFromID(data.creatorID);
    const contributionsFormatted = (entries) => {
      const first = entries[0];
      const len = entries.length;
      return entries.length > 1 ? L("{first} and {rest} more", { first, rest: len - 1 }) : first;
    };
    const bodyContentMap = {
      added: () => L("{name} added non-monetary contribution: {strong_}{added}{_strong}", { name, added: contributionsFormatted(added), ...LTags("strong") }),
      removed: () => L("{name} removed non-monetary contribution: {strong_}{removed}{_strong}", { name, removed: contributionsFormatted(removed), ...LTags("strong") }),
      updated: () => L("{name} updated non-monetary contribution: added {strong_}{added}{_strong} and removed {strong_}{removed}{_strong}", {
        name,
        added: contributionsFormatted(added),
        removed: contributionsFormatted(removed),
        ...LTags("strong")
      })
    };
    const plaintextBodyContentMap = {
      added: () => L("{name} added non-monetary contribution: {strong_}{added}{_strong}", { name: plaintextName, added: contributionsFormatted(added) }),
      removed: () => L("{name} removed non-monetary contribution: {strong_}{removed}{_strong}", { name: plaintextName, removed: contributionsFormatted(removed) }),
      updated: () => L("{name} updated non-monetary contribution: added {strong_}{added}{_strong} and removed {strong_}{removed}{_strong}", {
        name: plaintextName,
        added: contributionsFormatted(added),
        removed: contributionsFormatted(removed)
      })
    };
    return {
      title: rootState[data.groupID]?.settings?.groupName || L("Non-monetary contribution updated"),
      body: bodyContentMap[updateType](),
      plaintextBody: plaintextBodyContentMap[updateType](),
      scope: "group",
      avatarUserID: data.creatorID,
      level: "info",
      icon: "chart-pie",
      linkTo: "/contributions",
      groupID: data.groupID
    };
  }
};

// frontend/model/notifications/selectors.js
esm_default("sbp/selectors/register", {
  /*
   * Creates and dispatches a new notification.
   * NOTE: two arguments (type, data) need to be minimal to be identifiable
   *       for each notification in order to avoid the following two problems
   *       Problem 1 - same hash for different notifications
   *       Problem 2 - different hash for the same notifications
   *       for example, adding needless 'createdDate' inside the data could cause the Problem 2
   *                    removing necessary 'createdDate' from the data could cause the Problem 1
   * https://github.com/okTurtles/group-income/pull/2129#discussion_r1659219172
   */
  "gi.notifications/emit"(type, data) {
    const template2 = templates_default[type](data);
    if (template2.scope === "group" && !data.groupID) {
      throw new TypeError("Incomplete notification data: `data.groupID` is required.");
    }
    const notification = {
      ...template2,
      hash: makeNotificationHash({ ...data, type }),
      avatarUserID: template2.avatarUserID || esm_default("state/vuex/getters").ourIdentityContractId,
      // Sets 'groupID' if this notification only pertains to a certain group.
      ...template2.scope === "group" ? { groupID: data.groupID } : {},
      // Store integer timestamps rather than ISO strings here to make age comparisons easier.
      timestamp: new Date(data.createdDate ? data.createdDate : esm_default("chelonia/time")).getTime(),
      type
    };
    const rootState = esm_default("chelonia/rootState");
    if (rootState.notifications.items.some((item) => item.hash === notification.hash)) {
      return console.error("[gi.notifications/emit] This notification is already in the store.", notification.hash);
    }
    const index = rootState.notifications.items.findLastIndex((item) => item.timestamp < notification.timestamp);
    rootState.notifications.items.splice(Math.max(0, index), 0, notification);
    esm_default("okTurtles.events/emit", CHELONIA_STATE_MODIFIED);
    esm_default("gi.actions/identity/kv/addNotificationStatus", notification);
    esm_default("okTurtles.events/emit", NOTIFICATION_EMITTED, notification);
  },
  "gi.notifications/markAsRead"(notification) {
    esm_default("gi.actions/identity/kv/markNotificationStatusRead", notification.hash);
  },
  "gi.notifications/markAllAsRead"(groupID) {
    const rootState = esm_default("chelonia/rootState");
    if (!rootState.notifications) return;
    const hashes = rootState.notifications.items.filter((item) => {
      return !item.read && (!groupID || !item.groupID || item.groupID === groupID);
    }).map((item) => item.hash);
    esm_default("gi.actions/identity/kv/markNotificationStatusRead", hashes);
  },
  "gi.notifications/remove"(hashes) {
    if (!Array.isArray(hashes)) hashes = [hashes];
    const rootState = esm_default("chelonia/rootState");
    if (!rootState.notifications) return;
    const hashesSet = new Set(hashes);
    const indices = rootState.notifications.items.map((item, index) => {
      if (hashesSet.has(item.hash)) {
        hashesSet.delete(item.hash);
        return index;
      }
      return false;
    }).filter((v2) => v2 !== false).sort().map((v2, i2) => v2 - i2);
    indices.forEach((index) => rootState.notifications.items.splice(index, 1));
    esm_default("okTurtles.events/emit", NOTIFICATION_REMOVED, hashes);
  },
  "gi.notifications/setNotificationStatus"(status) {
    const rootState = esm_default("chelonia/rootState");
    rootState.notifications.status = status;
    esm_default("okTurtles.events/emit", CHELONIA_STATE_MODIFIED);
    esm_default("okTurtles.events/emit", NOTIFICATION_STATUS_LOADED, status);
  }
});

// node_modules/@chelonia/lib/node_modules/@sbp/okturtles.eventqueue/dist/esm/index.mjs
var isEventQueueSbpEvent2 = (e2) => {
  return Object.prototype.hasOwnProperty.call(e2, "sbpInvocation");
};
var esm_default4 = esm_default("sbp/selectors/register", {
  "okTurtles.eventQueue/_init": function() {
    this.eventQueues = /* @__PURE__ */ Object.create(null);
  },
  "okTurtles.eventQueue/isWaiting": function(name) {
    var _a2;
    return !!((_a2 = this.eventQueues[name]) === null || _a2 === void 0 ? void 0 : _a2.length);
  },
  "okTurtles.eventQueue/queuedInvocations": function(name) {
    var _a2, _b;
    if (name == null) {
      return Object.fromEntries(Object.entries(this.eventQueues).map(([name2, events]) => [name2, events.map((event) => {
        if (isEventQueueSbpEvent2(event)) {
          return event.sbpInvocation;
        } else {
          return event.fn;
        }
      })]));
    }
    return (_b = (_a2 = this.eventQueues[name]) === null || _a2 === void 0 ? void 0 : _a2.map((event) => {
      if (isEventQueueSbpEvent2(event)) {
        return event.sbpInvocation;
      } else {
        return event.fn;
      }
    })) !== null && _b !== void 0 ? _b : [];
  },
  "okTurtles.eventQueue/queueEvent": async function(name, invocation) {
    if (!Object.prototype.hasOwnProperty.call(this.eventQueues, name)) {
      this.eventQueues[name] = [];
    }
    const events = this.eventQueues[name];
    let accept;
    const promise = new Promise((resolve) => {
      accept = resolve;
    });
    const thisEvent = typeof invocation === "function" ? {
      fn: invocation,
      promise
    } : {
      sbpInvocation: invocation,
      promise
    };
    events.push(thisEvent);
    while (events.length > 0) {
      const event = events[0];
      if (event === thisEvent) {
        try {
          if (typeof invocation === "function") {
            return await invocation();
          } else {
            return await esm_default(...invocation);
          }
        } finally {
          accept();
          events.shift();
        }
      } else {
        await event.promise;
      }
    }
  }
});

// node_modules/@chelonia/lib/node_modules/@sbp/okturtles.data/dist/esm/index.mjs
var _store2 = /* @__PURE__ */ new Map();
var esm_default5 = esm_default("sbp/selectors/register", {
  "okTurtles.data/get": function(key) {
    return _store2.get(key);
  },
  "okTurtles.data/set": function(key, data) {
    _store2.set(key, data);
    return data;
  },
  "okTurtles.data/delete": function(key) {
    return _store2.delete(key);
  },
  "okTurtles.data/add": function(key, data) {
    const array = _store2.get(key);
    if (array) {
      array.push(data);
    } else {
      _store2.set(key, [data]);
    }
  },
  "okTurtles.data/remove": function(key, data) {
    const array = _store2.get(key);
    if (array) {
      const aLen = array.length;
      const filtered = array.filter((v2) => v2 !== data);
      _store2.set(key, filtered);
      return aLen - filtered.length;
    }
  },
  "okTurtles.data/iterKeys": function* () {
    yield* _store2.keys();
  },
  "okTurtles.data/keyCount": function() {
    return _store2.size;
  },
  "okTurtles.data/apply": function(key, fn) {
    return fn(_store2.get(key));
  }
});

// node_modules/@chelonia/lib/node_modules/@sbp/okturtles.events/dist/esm/index.mjs
var listenKey2 = (evt) => `events/${evt}/listeners`;
var esm_default6 = esm_default("sbp/selectors/register", {
  "okTurtles.events/_init": function() {
    this.errorHandler = (event, e2) => {
      console.error(`[okTurtles.events] Error at handler for ${event}`, e2);
    };
  },
  "okTurtles.events/on": function(event, handler2) {
    esm_default("okTurtles.data/add", listenKey2(event), handler2);
    return () => esm_default("okTurtles.events/off", event, handler2);
  },
  "okTurtles.events/once": function(event, handler2) {
    const cbWithOff = (...args) => {
      handler2(...args);
      esm_default("okTurtles.events/off", event, cbWithOff);
    };
    return esm_default("okTurtles.events/on", event, cbWithOff);
  },
  "okTurtles.events/emit": function(event, ...data) {
    var _a2;
    for (const listener of esm_default("okTurtles.data/get", listenKey2(event)) || []) {
      try {
        listener(...data);
      } catch (e2) {
        (_a2 = this.errorHandler) === null || _a2 === void 0 ? void 0 : _a2.call(this, event, e2);
      }
    }
  },
  // almost identical to Vue.prototype.$off, except we require `event` argument
  "okTurtles.events/off": function(event, handler2) {
    if (handler2) {
      esm_default("okTurtles.data/remove", listenKey2(event), handler2);
    } else {
      esm_default("okTurtles.data/delete", listenKey2(event));
    }
  },
  "okTurtles.events/setErrorHandler": function(errorHandler) {
    this.errorHandler = errorHandler;
  }
});

// node_modules/@chelonia/lib/dist/esm/chelonia.mjs
var import_buffer6 = __toESM(require_buffer(), 1);

// node_modules/@chelonia/lib/dist/esm/pubsub/index.mjs
var NOTIFICATION_TYPE = Object.freeze({
  ENTRY: "entry",
  DELETION: "deletion",
  KV: "kv",
  KV_FILTER: "kv_filter",
  PING: "ping",
  PONG: "pong",
  PUB: "pub",
  SUB: "sub",
  UNSUB: "unsub",
  VERSION_INFO: "version_info"
});
var REQUEST_TYPE = Object.freeze({
  PUB: "pub",
  SUB: "sub",
  UNSUB: "unsub",
  PUSH_ACTION: "push_action",
  KV_FILTER: "kv_filter"
});
var RESPONSE_TYPE = Object.freeze({
  ERROR: "error",
  OK: "ok"
});
var PUSH_SERVER_ACTION_TYPE = Object.freeze({
  SEND_PUBLIC_KEY: "send-public-key",
  STORE_SUBSCRIPTION: "store-subscription",
  DELETE_SUBSCRIPTION: "delete-subscription",
  SEND_PUSH_NOTIFICATION: "send-push-notification"
});
var defaultOptions = {
  logPingMessages: true,
  pingTimeout: 45e3,
  maxReconnectionDelay: 6e4,
  maxRetries: 10,
  minReconnectionDelay: 500,
  reconnectOnDisconnection: true,
  reconnectOnOnline: true,
  // Defaults to false to avoid reconnection attempts in case the server doesn't
  // respond because of a failed authentication.
  reconnectOnTimeout: false,
  reconnectionDelayGrowFactor: 2,
  timeout: 6e4,
  maxOpRetries: 4,
  opRetryInterval: 2e3
};
var PUBSUB_ERROR = "pubsub-error";
var PUBSUB_RECONNECTION_ATTEMPT = "pubsub-reconnection-attempt";
var PUBSUB_RECONNECTION_FAILED = "pubsub-reconnection-failed";
var PUBSUB_RECONNECTION_SCHEDULED = "pubsub-reconnection-scheduled";
var PUBSUB_RECONNECTION_SUCCEEDED = "pubsub-reconnection-succeeded";
var PUBSUB_SUBSCRIPTION_SUCCEEDED = "pubsub-subscription-succeeded";
var TieredMap = class extends Map {
  tGet(k1, k2) {
    return this.get(k1)?.get(k2);
  }
  tHas(k1, k2) {
    return !!this.get(k1)?.has(k2);
  }
  tSet(k1, k2, v2) {
    let submap = this.get(k1);
    if (!submap) {
      submap = /* @__PURE__ */ new Map();
      this.set(k1, submap);
    }
    return submap.set(k2, v2);
  }
  tDelete(k1, k2) {
    const submap = this.get(k1);
    if (submap) {
      const result = submap.delete(k2);
      if (submap.size === 0) {
        this.delete(k1);
      }
      return result;
    }
    return false;
  }
  tClear(k1) {
    this.delete(k1);
  }
};
var isKvFilterFresh = (ourKvFilter, theirKvFilter) => {
  if (!ourKvFilter !== !theirKvFilter) {
    return false;
  } else if (ourKvFilter && theirKvFilter) {
    if (ourKvFilter.length !== theirKvFilter.length) {
      return false;
    } else {
      const sortedA = [...ourKvFilter].sort();
      const sortedB = [...theirKvFilter].sort();
      for (let i2 = 0; i2 < sortedA.length; i2++) {
        if (sortedA[i2] !== sortedB[i2]) {
          return false;
        }
      }
    }
  }
  return true;
};
var pubPayloadFactory = (client, channelID) => () => {
  const kvFilter = client.kvFilter.get(channelID);
  return kvFilter ? { kvFilter, channelID } : { channelID };
};
function runWithRetry(client, channelID, type, getPayload) {
  let attemptNo = 0;
  const { socket, options } = client;
  const instance = {};
  client.pendingOperations.tSet(type, channelID, instance);
  const send = () => {
    if (client.socket !== socket || socket?.readyState !== WebSocket.OPEN)
      return;
    const currentInstance = client.pendingOperations.tGet(type, channelID);
    if (currentInstance !== instance)
      return;
    if (attemptNo++ > options.maxOpRetries) {
      console.warn(`[pubsub] Giving up ${type} for channel`, channelID);
      client.pendingOperations.tDelete(type, channelID);
      return;
    }
    const payload = getPayload();
    socket.send(createRequest(type, payload));
    const minDelay = (attemptNo - 1) * options.opRetryInterval;
    const jitter = randomIntFromRange(0, options.opRetryInterval);
    const delay2 = Math.min(200, minDelay) + jitter;
    setTimeout(send, delay2);
  };
  send();
}
function createClient(url, options = {}) {
  const client = {
    customEventHandlers: options.handlers || {},
    // The current number of connection attempts that failed.
    // Reset to 0 upon successful connection.
    // Used to compute how long to wait before the next reconnection attempt.
    failedConnectionAttempts: 0,
    isLocal: /\/\/(localhost|127\.0\.0\.1)([:?/]|$)/.test(url),
    // True if this client has never been connected yet.
    isNew: true,
    listeners: /* @__PURE__ */ Object.create(null),
    messageHandlers: { ...defaultMessageHandlers, ...options.messageHandlers },
    nextConnectionAttemptDelayID: void 0,
    options: { ...defaultOptions, ...options },
    pendingOperations: new TieredMap(),
    pingTimeoutID: void 0,
    shouldReconnect: true,
    // The underlying WebSocket object.
    // A new one is necessary for every connection or reconnection attempt.
    socket: null,
    subscriptionSet: /* @__PURE__ */ new Set(),
    kvFilter: /* @__PURE__ */ new Map(),
    connectionTimeoutID: void 0,
    url: url.replace(/^http/, "ws"),
    ...publicMethods
  };
  for (const name of Object.keys(defaultClientEventHandlers)) {
    client.listeners[name] = (event) => {
      try {
        defaultClientEventHandlers[name].call(client, event);
        client.customEventHandlers[name]?.call(client, event);
      } catch (error) {
        esm_default("okTurtles.events/emit", PUBSUB_ERROR, client, error?.message);
      }
    };
  }
  if (typeof self === "object" && self instanceof EventTarget) {
    for (const name of globalEventNames) {
      globalEventMap.set(name, client.listeners[name]);
    }
  }
  if (!client.options.manual) {
    client.connect();
  }
  return client;
}
function createMessage(type, data, meta) {
  const message = { ...meta, type, data };
  let string3;
  const stringify = function() {
    if (!string3)
      string3 = JSON.stringify(this);
    return string3;
  };
  Object.defineProperties(message, {
    [Symbol.toPrimitive]: {
      value: stringify
    }
  });
  return message;
}
function createPubMessage(channelID, data) {
  return JSON.stringify({ type: NOTIFICATION_TYPE.PUB, channelID, data });
}
function createRequest(type, data) {
  return JSON.stringify(Object.assign({ type }, data));
}
var defaultClientEventHandlers = {
  // Emitted when the connection is closed.
  close(event) {
    const client = this;
    console.debug("[pubsub] Event: close", event.code, event.reason);
    client.failedConnectionAttempts++;
    if (client.socket) {
      for (const name of socketEventNames) {
        client.socket.removeEventListener(name, client.listeners[name]);
      }
    }
    client.socket = null;
    client.clearAllTimers();
    if (client.shouldReconnect) {
      const pendingSubscriptionMap = client.pendingOperations.get(REQUEST_TYPE.SUB);
      if (pendingSubscriptionMap) {
        for (const [channelID] of pendingSubscriptionMap) {
          pendingSubscriptionMap.set(channelID, {});
        }
      }
      client.subscriptionSet.forEach((channelID) => {
        if (!client.pendingOperations.tHas(REQUEST_TYPE.UNSUB, channelID)) {
          client.pendingOperations.tSet(REQUEST_TYPE.SUB, channelID, {});
        }
      });
    }
    client.subscriptionSet.clear();
    client.pendingOperations.tClear(REQUEST_TYPE.UNSUB);
    client.pendingOperations.tClear(REQUEST_TYPE.KV_FILTER);
    if (client.shouldReconnect && client.options.reconnectOnDisconnection) {
      if (client.failedConnectionAttempts > client.options.maxRetries) {
        esm_default("okTurtles.events/emit", PUBSUB_RECONNECTION_FAILED, client);
      } else {
        if (!isDefinetelyOffline() || client.isLocal) {
          client.scheduleConnectionAttempt();
        }
      }
    }
  },
  // Emitted when an error has occured.
  // The socket will be closed automatically by the engine if necessary.
  error(event) {
    const client = this;
    console.warn("[pubsub] Event: error", event);
    clearTimeout(client.pingTimeoutID);
  },
  // Emitted when a message is received.
  // The connection will be terminated if the message is malformed or has an
  // unexpected data type (e.g. binary instead of text).
  message(event) {
    const client = this;
    const { data } = event;
    if (typeof data !== "string") {
      esm_default("okTurtles.events/emit", PUBSUB_ERROR, client, {
        message: `Wrong data type: ${typeof data}`
      });
      return client.destroy();
    }
    let msg = { type: "" };
    try {
      msg = messageParser(data);
    } catch (error) {
      esm_default("okTurtles.events/emit", PUBSUB_ERROR, client, {
        message: `Malformed message: ${error?.message}`
      });
      return client.destroy();
    }
    const handler2 = client.messageHandlers[msg.type];
    if (handler2) {
      handler2.call(client, msg);
    } else {
      throw new Error(`Unhandled message type: ${msg.type}`);
    }
  },
  offline() {
    console.info("[pubsub] Event: offline");
    const client = this;
    client.clearAllTimers();
    client.failedConnectionAttempts = 0;
    client.socket?.close();
  },
  online() {
    console.info("[pubsub] Event: online");
    const client = this;
    if (client.options.reconnectOnOnline && client.shouldReconnect) {
      if (!client.socket) {
        client.failedConnectionAttempts = 0;
        client.scheduleConnectionAttempt();
      }
    }
  },
  // Emitted when the connection is established.
  open() {
    console.debug("[pubsub] Event: open");
    const client = this;
    const { options } = this;
    client.connectionTimeUsed = void 0;
    client.clearAllTimers();
    esm_default("okTurtles.events/emit", PUBSUB_RECONNECTION_SUCCEEDED, client);
    client.failedConnectionAttempts = -1;
    client.isNew = false;
    if (options.pingTimeout > 0 && options.pingTimeout < Infinity) {
      client.pingTimeoutID = setTimeout(() => {
        client.socket?.close();
      }, options.pingTimeout);
    }
    for (const [channelID] of client.pendingOperations.get(REQUEST_TYPE.SUB) || []) {
      runWithRetry(client, channelID, REQUEST_TYPE.SUB, pubPayloadFactory(client, channelID));
    }
  },
  "reconnection-attempt"() {
    console.info("[pubsub] Trying to reconnect...");
  },
  "reconnection-succeeded"() {
    console.info("[pubsub] Connection re-established");
  },
  "reconnection-failed"() {
    console.warn("[pubsub] Reconnection failed");
    const client = this;
    client.destroy();
  },
  "reconnection-scheduled"(event) {
    const { delay: delay2, nth } = event.detail;
    console.info(`[pubsub] Scheduled connection attempt ${nth} in ~${delay2} ms`);
  },
  "subscription-succeeded"(event) {
    const { channelID } = event.detail;
    console.debug(`[pubsub] Subscribed to channel ${channelID}`);
  }
};
var defaultMessageHandlers = {
  [NOTIFICATION_TYPE.ENTRY](msg) {
    console.debug("[pubsub] Received ENTRY:", msg);
  },
  [NOTIFICATION_TYPE.PING]({ data }) {
    const client = this;
    if (client.options.logPingMessages) {
      console.debug(`[pubsub] Ping received in ${Date.now() - Number(data)} ms`);
    }
    client.socket?.send(createMessage(NOTIFICATION_TYPE.PONG, data));
    clearTimeout(client.pingTimeoutID);
    client.pingTimeoutID = setTimeout(() => {
      client.socket?.close();
    }, client.options.pingTimeout);
  },
  [NOTIFICATION_TYPE.PUB]({ channelID, data }) {
    console.log(`[pubsub] Received data from channel ${channelID}:`, data);
  },
  [NOTIFICATION_TYPE.KV]({ channelID, key, data }) {
    console.log(`[pubsub] Received KV update from channel ${channelID} ${key}:`, data);
  },
  [NOTIFICATION_TYPE.SUB](msg) {
    console.debug(`[pubsub] Ignoring ${msg.type} message:`, msg.data);
  },
  [NOTIFICATION_TYPE.UNSUB](msg) {
    console.debug(`[pubsub] Ignoring ${msg.type} message:`, msg.data);
  },
  [RESPONSE_TYPE.ERROR]({ data }) {
    const { type, channelID, reason } = data;
    console.warn(`[pubsub] Received ERROR response for ${type} request to ${channelID}`);
    const client = this;
    switch (type) {
      case REQUEST_TYPE.SUB: {
        console.warn(`[pubsub] Could not subscribe to ${channelID}: ${reason}`);
        client.pendingOperations.tDelete(REQUEST_TYPE.SUB, channelID);
        break;
      }
      case REQUEST_TYPE.UNSUB: {
        console.warn(`[pubsub] Could not unsubscribe from ${channelID}: ${reason}`);
        client.pendingOperations.tDelete(REQUEST_TYPE.UNSUB, channelID);
        break;
      }
      case REQUEST_TYPE.PUSH_ACTION: {
        const { actionType, message } = data;
        console.warn(`[pubsub] Received ERROR for PUSH_ACTION request with the action type '${actionType}' and the following message: ${message}`);
        break;
      }
      case REQUEST_TYPE.KV_FILTER: {
        console.warn(`[pubsub] Could not set KV filter for ${channelID}: ${reason}`);
        client.pendingOperations.tDelete(REQUEST_TYPE.KV_FILTER, channelID);
        break;
      }
      default: {
        console.error(`[pubsub] Malformed response: invalid request type ${type}`);
      }
    }
  },
  [RESPONSE_TYPE.OK]({ data: { type, channelID, kvFilter } }) {
    const client = this;
    switch (type) {
      case REQUEST_TYPE.SUB: {
        if (client.pendingOperations.tHas(REQUEST_TYPE.SUB, channelID)) {
          client.pendingOperations.tDelete(REQUEST_TYPE.SUB, channelID);
          client.subscriptionSet.add(channelID);
          esm_default("okTurtles.events/emit", PUBSUB_SUBSCRIPTION_SUCCEEDED, client, { channelID });
          const ourKvFilter = client.kvFilter.get(channelID);
          if (!isKvFilterFresh(ourKvFilter, kvFilter)) {
            console.debug(`[pubsub] Subscribed to ${channelID}, need to set new KV filter`);
            this.setKvFilter(channelID, ourKvFilter);
          }
        } else {
          console.debug(`[pubsub] Received unexpected sub for ${channelID}`);
        }
        break;
      }
      case REQUEST_TYPE.UNSUB: {
        if (client.pendingOperations.tHas(REQUEST_TYPE.UNSUB, channelID)) {
          console.debug(`[pubsub] Unsubscribed from ${channelID}`);
          client.pendingOperations.tDelete(REQUEST_TYPE.UNSUB, channelID);
          client.subscriptionSet.delete(channelID);
        } else {
          console.debug(`[pubsub] Received unexpected unsub for ${channelID}`);
        }
        break;
      }
      case REQUEST_TYPE.KV_FILTER: {
        if (client.pendingOperations.tHas(REQUEST_TYPE.KV_FILTER, channelID)) {
          const ourKvFilter = client.kvFilter.get(channelID);
          if (isKvFilterFresh(ourKvFilter, kvFilter)) {
            console.debug(`[pubsub] Set KV filter for ${channelID}`, kvFilter);
            client.pendingOperations.tDelete(REQUEST_TYPE.KV_FILTER, channelID);
          } else {
            console.debug(`[pubsub] Received stale KV filter ack for ${channelID}`, kvFilter, ourKvFilter);
          }
        } else {
          console.debug(`[pubsub] Received unexpected kv-filter for ${channelID}`);
        }
        break;
      }
      default: {
        console.error(`[pubsub] Malformed response: invalid request type ${type}`);
      }
    }
  }
};
var globalEventNames = ["offline", "online"];
var socketEventNames = ["close", "error", "message", "open"];
var globalEventMap = /* @__PURE__ */ new Map();
if (typeof self === "object" && self instanceof EventTarget) {
  for (const name of globalEventNames) {
    const handler2 = (ev) => {
      const h2 = globalEventMap.get(name);
      return h2?.(ev);
    };
    self.addEventListener(name, handler2, false);
  }
}
var isDefinetelyOffline = () => typeof navigator === "object" && navigator.onLine === false;
var messageParser = (data) => {
  const msg = JSON.parse(data);
  if (typeof msg !== "object" || msg === null) {
    throw new TypeError("Message is null or not an object");
  }
  const { type } = msg;
  if (typeof type !== "string" || type === "") {
    throw new TypeError("Message type must be a non-empty string");
  }
  return msg;
};
var publicMethods = {
  clearAllTimers() {
    const client = this;
    clearTimeout(client.connectionTimeoutID);
    clearTimeout(client.nextConnectionAttemptDelayID);
    clearTimeout(client.pingTimeoutID);
    client.connectionTimeoutID = void 0;
    client.nextConnectionAttemptDelayID = void 0;
    client.pingTimeoutID = void 0;
  },
  // Performs a connection or reconnection attempt.
  connect() {
    const client = this;
    if (client.socket !== null) {
      throw new Error("connect() can only be called if there is no current socket.");
    }
    if (client.nextConnectionAttemptDelayID) {
      throw new Error("connect() must not be called during a reconnection delay.");
    }
    if (!client.shouldReconnect) {
      throw new Error("connect() should no longer be called on this instance.");
    }
    client.socket = new WebSocket(client.url);
    client.socket.send = function(data) {
      const send = WebSocket.prototype.send.bind(this);
      if (typeof data === "object" && typeof data[Symbol.toPrimitive] === "function") {
        return send(data[Symbol.toPrimitive]());
      }
      return send(data);
    };
    if (client.options.timeout) {
      const start = performance.now();
      client.connectionTimeoutID = setTimeout(() => {
        client.connectionTimeoutID = void 0;
        if (client.options.reconnectOnTimeout) {
          client.connectionTimeUsed = performance.now() - start;
        }
        client.socket?.close(4e3, "timeout");
      }, client.options.timeout);
    }
    for (const name of socketEventNames) {
      client.socket.addEventListener(name, client.listeners[name]);
    }
  },
  /**
   * Immediately close the socket, stop listening for events and clear any cache.
   *
   * This method is used in unit tests.
   * - In particular, no 'close' event handler will be called.
   * - Any incoming or outgoing buffered data will be discarded.
   * - Any pending messages will be discarded.
   */
  destroy() {
    const client = this;
    client.clearAllTimers();
    client.pendingOperations.clear();
    client.subscriptionSet.clear();
    if (typeof self === "object" && self instanceof EventTarget) {
      for (const name of globalEventNames) {
        globalEventMap.delete(name);
      }
    }
    if (client.socket) {
      for (const name of socketEventNames) {
        client.socket.removeEventListener(name, client.listeners[name]);
      }
      client.socket.close();
    }
    client.listeners = /* @__PURE__ */ Object.create(null);
    client.socket = null;
    client.shouldReconnect = false;
  },
  getNextRandomDelay() {
    const client = this;
    const { maxReconnectionDelay, minReconnectionDelay, reconnectionDelayGrowFactor } = client.options;
    const minDelay = minReconnectionDelay * reconnectionDelayGrowFactor ** client.failedConnectionAttempts;
    const maxDelay = minDelay * reconnectionDelayGrowFactor;
    const connectionTimeUsed = client.connectionTimeUsed;
    client.connectionTimeUsed = void 0;
    return Math.min(
      // See issue #1943: Have the connection time used 'eat into' the
      // reconnection time used
      Math.max(minReconnectionDelay, connectionTimeUsed ? maxReconnectionDelay - connectionTimeUsed : maxReconnectionDelay),
      Math.round(minDelay + (0, Math.random)() * (maxDelay - minDelay))
    );
  },
  // Schedules a connection attempt to happen after a delay computed according to
  // a randomized exponential backoff algorithm variant.
  scheduleConnectionAttempt() {
    const client = this;
    if (!client.shouldReconnect) {
      throw new Error("Cannot call `scheduleConnectionAttempt()` when `shouldReconnect` is false.");
    }
    if (client.nextConnectionAttemptDelayID) {
      return console.warn("[pubsub] A reconnection attempt is already scheduled.");
    }
    const delay2 = client.getNextRandomDelay();
    const nth = client.failedConnectionAttempts + 1;
    client.nextConnectionAttemptDelayID = setTimeout(() => {
      esm_default("okTurtles.events/emit", PUBSUB_RECONNECTION_ATTEMPT, client);
      client.nextConnectionAttemptDelayID = void 0;
      client.connect();
    }, delay2);
    esm_default("okTurtles.events/emit", PUBSUB_RECONNECTION_SCHEDULED, client, { delay: delay2, nth });
  },
  // Can be used to send ephemeral messages outside of any contract log.
  // Does nothing if the socket is not in the OPEN state.
  pub(channelID, data) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(createPubMessage(channelID, data));
    }
  },
  /**
   * Sends a SUB request to the server as soon as possible.
   *
   * - The given channel ID will be cached until we get a relevant server
   * response, allowing us to resend the same request if necessary.
   * - Any identical UNSUB request that has not been sent yet will be cancelled.
   * - Calling this method again before the server has responded has no effect.
   * @param channelID - The ID of the channel whose updates we want to subscribe to.
   */
  sub(channelID) {
    const client = this;
    if (!client.pendingOperations.tHas(REQUEST_TYPE.SUB, channelID) && !client.subscriptionSet.has(channelID)) {
      client.pendingOperations.tDelete(REQUEST_TYPE.UNSUB, channelID);
      runWithRetry(client, channelID, REQUEST_TYPE.SUB, pubPayloadFactory(client, channelID));
    }
  },
  /**
   * Sends a KV_FILTER request to the server as soon as possible.
   */
  setKvFilter(channelID, kvFilter) {
    const client = this;
    if (kvFilter) {
      client.kvFilter.set(channelID, kvFilter);
    } else {
      client.kvFilter.delete(channelID);
    }
    if (client.subscriptionSet.has(channelID) && !client.pendingOperations.tHas(REQUEST_TYPE.UNSUB, channelID)) {
      runWithRetry(client, channelID, REQUEST_TYPE.KV_FILTER, pubPayloadFactory(client, channelID));
    }
  },
  /**
   * Sends an UNSUB request to the server as soon as possible.
   *
   * - The given channel ID will be cached until we get a relevant server
   * response, allowing us to resend the same request if necessary.
   * - Any identical SUB request that has not been sent yet will be cancelled.
   * - Calling this method again before the server has responded has no effect.
   * @param channelID - The ID of the channel whose updates we want to unsubscribe from.
   */
  unsub(channelID) {
    const client = this;
    if (!client.pendingOperations.tHas(REQUEST_TYPE.UNSUB, channelID) && (client.subscriptionSet.has(channelID) || client.pendingOperations.tHas(REQUEST_TYPE.SUB, channelID))) {
      client.pendingOperations.tDelete(REQUEST_TYPE.SUB, channelID);
      client.kvFilter.delete(channelID);
      runWithRetry(client, channelID, REQUEST_TYPE.UNSUB, () => ({ channelID }));
    }
  }
};
for (const name of Object.keys(defaultClientEventHandlers)) {
  if (name === "error" || !socketEventNames.includes(name)) {
    esm_default("okTurtles.events/on", `pubsub-${name}`, (target, detail) => {
      const ev = new CustomEvent(name, { detail });
      target.listeners[name].call(target, ev);
    });
  }
}

// node_modules/@chelonia/lib/dist/esm/chelonia-utils.mjs
var chelonia_utils_default = esm_default("sbp/selectors/register", {
  // This selector is a wrapper for the `chelonia/kv/set` selector that uses
  // the contract queue and allows referring to keys by name, with default key
  // names set to `csk` and `cek` for signatures and encryption, respectively.
  // For most 'simple' use cases, this selector is a better choice than
  // `chelonia/kv/set`. However, the `chelonia/kv/set` primitive is needed if
  // the queueing logic needs to be more advanced, the key to use requires
  // custom logic or _if the `onconflict` callback also needs to be queued_.
  "chelonia/kv/queuedSet": ({ contractID, key, data, onconflict, ifMatch, encryptionKeyName = "cek", signingKeyName = "csk" }) => {
    return esm_default("chelonia/queueInvocation", contractID, () => {
      return esm_default("chelonia/kv/set", contractID, key, data, {
        ifMatch,
        encryptionKeyId: esm_default("chelonia/contract/currentKeyIdByName", contractID, encryptionKeyName),
        signingKeyId: esm_default("chelonia/contract/currentKeyIdByName", contractID, signingKeyName),
        onconflict
      });
    });
  }
});

// node_modules/@apeleghq/multipart-parser/dist/encodeMultipartMessage.mjs
var m = /;\s*boundary=(?:"([0-9a-zA-Z'()+_,\-./:=? ]{0,69}[0-9a-zA-Z'()+_,\-./:=?])"|([0-9a-zA-Z'+_\-.]{0,69}[0-9a-zA-Z'+_\-.]))/;
var M = (a) => new ReadableStream({ pull(r) {
  if (ArrayBuffer.isView(a)) r.enqueue(a.buffer.slice(a.byteOffset, a.byteOffset + a.byteLength));
  else if (a instanceof ArrayBuffer) r.enqueue(a);
  else throw new TypeError("Expected ArrayBuffer or an ArrayBuffer view.");
  r.close();
} });
var u = M;
var T = /;\s*boundary=(?:"([^"]+)"|([^;",]+))/;
var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_-.";
var A = () => {
  let a = new Uint8Array(24);
  return globalThis.crypto.getRandomValues(a), Array.from(a).map((s) => h[s % h.length]).join("");
};
var i = { preventClose: true };
async function* g(a, s, r) {
  let d = new TextEncoder(), y = d.encode(`\r
--${a}`);
  if (Array.isArray(s) && s.length < 1) {
    await r.abort(Error("At least one part is required"));
    return;
  }
  let l = 0;
  for await (let e2 of s) {
    l++;
    let n, t;
    if (!e2.body && e2.parts) if (t = e2.headers.get("content-type"), !t) n = A(), t = `multipart/mixed; boundary="${n}"`;
    else if (!t.startsWith("multipart/") || !T.test(t)) {
      await r.abort(Error("Invalid multipart content type: " + t));
      return;
    } else {
      let o2 = t.match(m);
      (!o2 || !(n = o2[1] || o2[2])) && (n = A(), t = t.replace(T, `; boundary="${n}"`));
    }
    await u(y).pipeTo(r, i), yield;
    {
      let o2 = [""];
      if (t) {
        let p = false;
        e2.headers.forEach((f, c) => {
          c !== "content-type" ? o2.push(`${c}: ${f}`) : (p = true, o2.push(`${c}: ${t}`));
        }), p || o2.push(`content-type: ${t}`);
      } else e2.headers.forEach((p, f) => {
        o2.push(`${f}: ${p}`);
      });
      e2.parts || !e2.body ? o2.push("") : o2.push("", "");
      let B3 = d.encode(o2.join(`\r
`));
      o2.length = 0, await u(B3).pipeTo(r, i), yield;
    }
    if (e2.body) {
      if (e2.body instanceof ArrayBuffer || ArrayBuffer.isView(e2.body)) await u(e2.body).pipeTo(r, i);
      else if (e2.body instanceof Blob) await e2.body.stream().pipeTo(r, i);
      else if (e2.body instanceof ReadableStream) await e2.body.pipeTo(r, i);
      else {
        await r.abort(Error("Invalid body type"));
        return;
      }
      yield;
    } else if (e2.parts) {
      if (!n) {
        await r.abort(Error("Runtime exception: undefined part boundary"));
        return;
      }
      yield* g(n, e2.parts, r), yield;
    }
  }
  if (!l) {
    await r.abort(Error("At least one part is required"));
    return;
  }
  let b = d.encode(`\r
--${a}--`);
  await u(b).pipeTo(r, i);
}
var w = (a, s) => {
  let r = new TransformStream(), d = g(a, s, r.writable), y = false, l = r.readable.getReader();
  return new ReadableStream({ start(e2) {
    (async () => {
      for (; ; ) try {
        let n = await l.read();
        if (n.done) {
          let t = new Uint8Array([13, 10]);
          e2.enqueue(t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)), e2.close();
          return;
        }
        e2.enqueue(n.value);
      } catch (n) {
        e2.error(n);
        return;
      }
    })().catch(() => {
    });
  }, async pull() {
    if (y) return;
    (await d.next()).done && (y = true, await r.writable.close());
  } });
};
var x = w;

// node_modules/@chelonia/lib/node_modules/@apeleghq/rfc8188/dist/decrypt.mjs
var v = async (n, T2, w3, L2) => {
  let u2 = await globalThis.crypto.subtle.importKey("raw", T2, "HKDF", false, ["deriveKey", "deriveBits"]), d = await globalThis.crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", info: n.cek_info, salt: w3 }, u2, n.params, false, L2), A2 = await globalThis.crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", info: n.nonce_info, salt: w3 }, u2, n.nonce_length << 3);
  return [d, function* () {
    let s = new ArrayBuffer(n.nonce_length), e2 = new DataView(s), y = new Uint8Array(s), i2 = new Uint8Array(A2), b = 4294967295, f = (n.nonce_length >> 2) - 1, l = new Array(f).fill(0);
    for (; ; ) {
      for (let a = 0; a <= b; a++) {
        e2.setUint32(e2.byteLength - 4, a, false);
        let t = new Uint8Array(n.nonce_length);
        for (let r = 0; r < t.length; r++) t[r] = i2[r] ^ y[r];
        yield t;
      }
      for (let a = 0; a < f; a++) {
        if (a === f - 1 && l[a] === b) throw new RangeError("Maximum number of segments exceeded");
        if (l[a] = (l[a] + 1) % (b + 1), e2.setUint32(e2.byteLength - 4 * (a + 2), l[a], false), l[a] !== 0) break;
      }
    }
  }()];
};
var I = v;
var B = (n) => ArrayBuffer.isView(n) ? new Uint8Array(n.buffer).subarray(n.byteOffset, n.byteOffset + n.byteLength) : new Uint8Array(n);
var m2 = B;
var o = { salt: {}, recordSize: {}, keyIdLen: {}, keyId: {}, payload: {}, done: {} };
var R = (n, T2, w3, L2) => {
  let u2 = new Uint8Array(16), d, A2, E2, s = 0, e2 = 0, y = new Uint8Array(256), i2 = o.salt, b = new TransformStream({ start: () => {
  }, transform: async (f, l) => {
    let a = m2(f), t = 0;
    for (; t < f.byteLength; ) switch (i2) {
      case o.salt: {
        let r = a.subarray(t, t + u2.byteLength - e2);
        if (u2.set(r, e2), e2 += r.byteLength, t += r.byteLength, e2 === u2.byteLength) {
          e2 = 0, i2 = o.recordSize;
          continue;
        }
        break;
      }
      case o.recordSize: {
        let r = a.subarray(t, t + 4 - e2), g2 = new ArrayBuffer(4), h2 = new Uint8Array(g2), c = new DataView(g2);
        if (h2.set(r, e2), s |= c.getUint32(0, false), e2 += r.byteLength, t += r.byteLength, e2 === 4) {
          if (s <= n.tag_length + 1 || s > (L2 == null ? 4294967295 : Math.min(4294967295, L2))) throw new RangeError("Invalid record size: " + s);
          e2 = 0, i2 = o.keyIdLen;
          continue;
        }
        break;
      }
      case o.keyIdLen: {
        y[0] = a[t++], i2 = o.keyId;
        continue;
      }
      case o.keyId: {
        let r = a.subarray(t, t + y[0] - e2);
        if (y.set(r, 1 + e2), e2 += r.byteLength, t += r.byteLength, e2 === y[0]) {
          let g2 = await w3(y.subarray(1, 1 + y[0]));
          w3 = void 0;
          let h2 = await I(n, g2, u2, ["decrypt"]);
          A2 = h2[0], E2 = h2[1], d = new Uint8Array(s), e2 = 0, i2 = o.payload;
          continue;
        }
        break;
      }
      case o.payload: {
        let r = a.subarray(t, t + s - e2);
        if (d.set(r, e2), e2 += r.byteLength, t += r.byteLength, e2 === s) {
          let h2 = E2.next().value, c = m2(await globalThis.crypto.subtle.decrypt({ name: n.params.name, iv: h2, tagLength: n.tag_length << 3 }, A2, d.subarray(0, e2))), p = c.byteLength - 1;
          for (; p > 0 && c[p] === 0; p--) ;
          if (c[p] === 2) {
            if (t !== f.byteLength) throw new Error("Unexpected terminal padding delimiter");
            i2 = o.done;
          } else if (c[p] !== 1) throw new Error("Invalid padding delimiter");
          l.enqueue(c.buffer.slice(0, p)), c.fill(0), e2 = 0;
          continue;
        }
        break;
      }
      default:
        throw new Error("Invalid state");
    }
  }, flush: async (f) => {
    switch (i2) {
      case o.done:
        return;
      case o.payload: {
        if (e2 < 1 + n.tag_length) throw new Error("Unexpected end of data");
        let a = E2.next().value, t = m2(await globalThis.crypto.subtle.decrypt({ name: n.params.name, iv: a, tagLength: n.tag_length << 3 }, A2, d.subarray(0, e2))), r = t.byteLength - 1;
        for (; r > 0 && t[r] === 0; r--) ;
        if (t[r] !== 2) throw new Error("Unexpected non-terminal padding delimiter");
        f.enqueue(t.buffer.slice(0, r)), t.fill(0);
        return;
      }
      default:
        throw new Error("Invalid state");
    }
  } });
  return T2.pipeThrough(b), b.readable;
};
var S = R;

// node_modules/@chelonia/lib/node_modules/@apeleghq/rfc8188/dist/encodings.mjs
var e = { params: { name: "AES-GCM", length: 256 }, get cek_info() {
  return new Uint8Array([67, 111, 110, 116, 101, 110, 116, 45, 69, 110, 99, 111, 100, 105, 110, 103, 58, 32, 97, 101, 115, 50, 53, 54, 103, 99, 109, 0]);
}, get nonce_info() {
  return new Uint8Array([67, 111, 110, 116, 101, 110, 116, 45, 69, 110, 99, 111, 100, 105, 110, 103, 58, 32, 110, 111, 110, 99, 101, 0]);
}, block_size: 16, tag_length: 16, nonce_length: 12 };

// node_modules/@chelonia/lib/node_modules/@apeleghq/rfc8188/dist/encrypt.mjs
var R2 = async (e2, b, f, i2) => {
  let A2 = await globalThis.crypto.subtle.importKey("raw", b, "HKDF", false, ["deriveKey", "deriveBits"]), y = await globalThis.crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", info: e2.cek_info, salt: f }, A2, e2.params, false, i2), u2 = await globalThis.crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", info: e2.nonce_info, salt: f }, A2, e2.nonce_length << 3);
  return [y, function* () {
    let L2 = new ArrayBuffer(e2.nonce_length), c = new DataView(L2), h2 = new Uint8Array(L2), a = new Uint8Array(u2), g2 = 4294967295, o2 = (e2.nonce_length >> 2) - 1, s = new Array(o2).fill(0);
    for (; ; ) {
      for (let t = 0; t <= g2; t++) {
        c.setUint32(c.byteLength - 4, t, false);
        let n = new Uint8Array(e2.nonce_length);
        for (let r = 0; r < n.length; r++) n[r] = a[r] ^ h2[r];
        yield n;
      }
      for (let t = 0; t < o2; t++) {
        if (t === o2 - 1 && s[t] === g2) throw new RangeError("Maximum number of segments exceeded");
        if (s[t] = (s[t] + 1) % (g2 + 1), c.setUint32(c.byteLength - 4 * (t + 2), s[t], false), s[t] !== 0) break;
      }
    }
  }()];
};
var E = R2;
var B2 = (e2) => ArrayBuffer.isView(e2) ? new Uint8Array(e2.buffer).subarray(e2.byteOffset, e2.byteOffset + e2.byteLength) : new Uint8Array(e2);
var w2 = B2;
var N = () => {
  let e2 = new Uint8Array(16);
  return globalThis.crypto.getRandomValues(e2), e2;
};
var U = async (e2, b, f, i2, A2, y) => {
  if (f <= e2.tag_length + 1 || f > 4294967295) throw new RangeError("Invalid record size: " + f);
  if (i2.byteLength > 255) throw new RangeError("Key ID too long");
  if (y && y.byteLength !== 16) throw new RangeError("Invald salt length: " + y.byteLength);
  let u2 = f - e2.tag_length - 1, l = y ? w2(y) : N(), [L2, c] = await E(e2, A2, l, ["encrypt"]);
  A2 = void 0;
  let h2 = new Uint8Array(u2), a = 0, g2 = new TransformStream({ start: (o2) => {
    let s = l.byteLength + 4 + 1 + i2.byteLength, t = new ArrayBuffer(s);
    new Uint8Array(t, 0, l.byteLength).set(l);
    let r = new DataView(t, l.byteLength, 5);
    r.setUint32(0, f, false), r.setUint8(4, i2.byteLength);
    let d = new Uint8Array(t, l.byteLength + 4 + 1, i2.byteLength), m3 = w2(i2);
    d.set(m3), o2.enqueue(t);
  }, transform: async (o2, s) => {
    let t = w2(o2), n = 0;
    for (; n < o2.byteLength; ) {
      let r = t.subarray(n, n + u2 - a);
      if (h2.set(r, a), a += r.byteLength, n += r.byteLength, a === u2) {
        let m3 = c.next().value, p = new Uint8Array(u2 + 1);
        p.set(h2.subarray(0, a)), p[a] = 1;
        let T2 = await globalThis.crypto.subtle.encrypt({ name: e2.params.name, iv: m3, tagLength: e2.tag_length << 3 }, L2, p);
        s.enqueue(T2), a = 0;
      }
    }
  }, flush: async (o2) => {
    let t = c.next().value, n = new Uint8Array(a + 1);
    n.set(h2.subarray(0, a)), n[a] = 2;
    let r = await globalThis.crypto.subtle.encrypt({ name: e2.params.name, iv: t, tagLength: e2.tag_length << 3 }, L2, n);
    o2.enqueue(r), h2.fill(0), n.fill(0);
  } });
  return b.pipeThrough(g2), g2.readable;
};
var K = U;

// node_modules/@chelonia/lib/dist/esm/files.mjs
var import_buffer4 = __toESM(require_buffer(), 1);
var supportsRequestStreams = typeof window !== "object" || (() => {
  let duplexAccessed = false;
  const hasContentType = new Request("", {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("content-type");
  return duplexAccessed && !hasContentType;
})();
var streamToUint8Array = async (s) => {
  const reader = s.getReader();
  const chunks = [];
  let length2 = 0;
  for (; ; ) {
    const result = await reader.read();
    if (result.done)
      break;
    chunks.push(coerce(result.value));
    length2 += result.value.byteLength;
  }
  const body = new Uint8Array(length2);
  chunks.reduce((offset, chunk) => {
    body.set(chunk, offset);
    return offset + chunk.byteLength;
  }, 0);
  return body;
};
var ArrayBufferToUint8ArrayStream = async function(connectionURL, s) {
  if (supportsRequestStreams === true) {
    await this.config.fetch(`${connectionURL}/streams-test`, {
      method: "POST",
      body: new ReadableStream({
        start(c) {
          c.enqueue(import_buffer4.Buffer.from("ok"));
          c.close();
        }
      }),
      duplex: "half"
    }).then((r) => {
      if (!r.ok)
        throw new Error("Unexpected response");
      supportsRequestStreams = 2;
    }).catch(() => {
      console.info("files: Disabling streams support because the streams test failed");
      supportsRequestStreams = false;
    });
  }
  if (!supportsRequestStreams) {
    return await streamToUint8Array(s);
  }
  return s.pipeThrough(
    // eslint-disable-next-line no-undef
    new TransformStream({
      transform(chunk, controller) {
        controller.enqueue(coerce(chunk));
      }
    })
  );
};
var computeChunkDescriptors = (inStream) => {
  let length2 = 0;
  const [lengthStream, cidStream] = inStream.tee();
  const lengthPromise = new Promise((resolve, reject) => {
    lengthStream.pipeTo(new WritableStream({
      write(chunk) {
        length2 += chunk.byteLength;
      },
      close() {
        resolve(length2);
      },
      abort(reason) {
        reject(reason);
      }
    }));
  });
  const cidPromise = createCIDfromStream(cidStream, multicodes.SHELTER_FILE_CHUNK);
  return Promise.all([lengthPromise, cidPromise]);
};
var fileStream = (chelonia, manifest) => {
  const dataGenerator = async function* () {
    let readSize = 0;
    for (const chunk of manifest.chunks) {
      if (!Array.isArray(chunk) || typeof chunk[0] !== "number" || typeof chunk[1] !== "string") {
        throw new Error("Invalid chunk descriptor");
      }
      const chunkResponse = await chelonia.config.fetch(`${chelonia.config.connectionURL}/file/${chunk[1]}`, {
        method: "GET",
        signal: chelonia.abortController.signal
      });
      if (!chunkResponse.ok) {
        throw new Error("Unable to retrieve manifest");
      }
      const chunkBinary = await chunkResponse.arrayBuffer();
      if (chunkBinary.byteLength !== chunk[0])
        throw new Error("mismatched chunk size");
      readSize += chunkBinary.byteLength;
      if (readSize > manifest.size)
        throw new Error("read size exceeds declared size");
      if (createCID(coerce(chunkBinary), multicodes.SHELTER_FILE_CHUNK) !== chunk[1]) {
        throw new Error("mismatched chunk hash");
      }
      yield chunkBinary;
    }
    if (readSize !== manifest.size)
      throw new Error("mismatched size");
  };
  const dataIterator = dataGenerator();
  return new ReadableStream({
    async pull(controller) {
      try {
        const chunk = await dataIterator.next();
        if (chunk.done) {
          controller.close();
          return;
        }
        controller.enqueue(chunk.value);
      } catch (e2) {
        controller.error(e2);
      }
    }
  });
};
var aes256gcmHandlers = {
  upload: (_chelonia, manifestOptions) => {
    const params = manifestOptions["cipher-params"];
    let IKM = params?.IKM;
    const recordSize = params?.rs ?? 1 << 16;
    if (!IKM) {
      IKM = new Uint8Array(33);
      self.crypto.getRandomValues(IKM);
    }
    const keyId2 = blake32Hash("aes256gcm-keyId" + blake32Hash(IKM)).slice(-8);
    const binaryKeyId = import_buffer4.Buffer.from(keyId2);
    return {
      cipherParams: {
        keyId: keyId2
      },
      streamHandler: async (stream) => {
        return await K(e, stream, recordSize, binaryKeyId, IKM);
      },
      downloadParams: {
        IKM: import_buffer4.Buffer.from(IKM).toString("base64"),
        rs: recordSize
      }
    };
  },
  download: (chelonia, downloadParams, manifest) => {
    const IKMb64 = downloadParams.IKM;
    if (!IKMb64) {
      throw new Error("Missing IKM in downloadParams");
    }
    const IKM = import_buffer4.Buffer.from(IKMb64, "base64");
    const keyId2 = blake32Hash("aes256gcm-keyId" + blake32Hash(IKM)).slice(-8);
    if (!manifest["cipher-params"] || !manifest["cipher-params"].keyId) {
      throw new Error("Missing cipher-params");
    }
    if (keyId2 !== manifest["cipher-params"].keyId) {
      throw new Error("Key ID mismatch");
    }
    const maxRecordSize = downloadParams.rs ?? 1 << 27;
    return {
      payloadHandler: async () => {
        const bytes = await streamToUint8Array(S(e, fileStream(chelonia, manifest), (actualKeyId) => {
          if (import_buffer4.Buffer.from(actualKeyId).toString() !== keyId2) {
            throw new Error("Invalid key ID");
          }
          return IKM;
        }, maxRecordSize));
        return new Blob([bytes], { type: manifest.type || "application/octet-stream" });
      }
    };
  }
};
var noneHandlers = {
  upload: () => {
    return {
      cipherParams: void 0,
      streamHandler: (stream) => {
        return stream;
      },
      downloadParams: void 0
    };
  },
  download: (chelonia, _downloadParams, manifest) => {
    return {
      payloadHandler: async () => {
        const bytes = await streamToUint8Array(fileStream(chelonia, manifest));
        return new Blob([bytes], { type: manifest.type || "application/octet-stream" });
      }
    };
  }
};
var cipherHandlers = {
  aes256gcm: aes256gcmHandlers,
  none: noneHandlers
};
var files_default = esm_default("sbp/selectors/register", {
  "chelonia/fileUpload": async function(chunks, manifestOptions, { billableContractID } = {}) {
    if (!Array.isArray(chunks))
      chunks = [chunks];
    const chunkDescriptors = [];
    const cipherHandler = await cipherHandlers[manifestOptions.cipher]?.upload?.(this, manifestOptions);
    if (!cipherHandler)
      throw new Error("Unsupported cipher");
    const cipherParams = cipherHandler.cipherParams;
    const transferParts = await Promise.all(chunks.map(async (chunk, i2) => {
      const stream2 = chunk.stream();
      const encryptedStream = await cipherHandler.streamHandler(stream2);
      const [body, s] = encryptedStream.tee();
      chunkDescriptors.push(computeChunkDescriptors(s));
      return {
        headers: new Headers([
          ["content-disposition", `form-data; name="${i2}"; filename="${i2}"`],
          ["content-type", "application/octet-stream"]
        ]),
        body
      };
    }));
    transferParts.push({
      headers: new Headers([
        ["content-disposition", 'form-data; name="manifest"; filename="manifest.json"'],
        ["content-type", "application/vnd.shelter.filemanifest"]
      ]),
      body: new ReadableStream({
        async start(controller) {
          const chunks2 = await Promise.all(chunkDescriptors);
          const manifest = {
            version: "1.0.0",
            // ?? undefined coerces null and undefined to undefined
            // This ensures that null or undefined values don't make it to the
            // JSON (otherwise, null values _would_ be stringified as 'null')
            type: manifestOptions.type ?? void 0,
            meta: manifestOptions.meta ?? void 0,
            cipher: manifestOptions.cipher,
            "cipher-params": cipherParams,
            size: chunks2.reduce((acc, [cv]) => acc + cv, 0),
            chunks: chunks2,
            "name-map": manifestOptions["name-map"] ?? void 0,
            alternatives: manifestOptions.alternatives ?? void 0
          };
          controller.enqueue(import_buffer4.Buffer.from(JSON.stringify(manifest)));
          controller.close();
        }
      })
    });
    const boundary = typeof self.crypto?.randomUUID === "function" ? self.crypto.randomUUID() : new Array(36).fill("").map(() => "abcdefghijklmnopqrstuvwxyz"[(0, Math.random)() * 26 | 0]).join("");
    const stream = x(boundary, transferParts);
    const deletionToken = "deletionToken" + generateSalt();
    const deletionTokenHash = blake32Hash(deletionToken);
    const uploadResponse = await this.config.fetch(`${this.config.connectionURL}/file`, {
      method: "POST",
      signal: this.abortController.signal,
      body: await ArrayBufferToUint8ArrayStream.call(this, this.config.connectionURL, stream),
      headers: new Headers([
        ...billableContractID ? [["authorization", buildShelterAuthorizationHeader.call(this, billableContractID)]] : [],
        ["content-type", `multipart/form-data; boundary=${boundary}`],
        ["shelter-deletion-token-digest", deletionTokenHash]
      ]),
      duplex: "half"
    });
    if (!uploadResponse.ok)
      throw new Error("Error uploading file");
    return {
      download: {
        manifestCid: await uploadResponse.text(),
        downloadParams: cipherHandler.downloadParams
      },
      delete: deletionToken
    };
  },
  "chelonia/fileDownload": async function(downloadOptions, manifestChecker) {
    const { manifestCid, downloadParams } = downloadOptions.valueOf();
    const manifestResponse = await this.config.fetch(`${this.config.connectionURL}/file/${manifestCid}`, {
      method: "GET",
      signal: this.abortController.signal
    });
    if (!manifestResponse.ok) {
      throw new Error("Unable to retrieve manifest");
    }
    const manifestBinary = await manifestResponse.arrayBuffer();
    if (createCID(coerce(manifestBinary), multicodes.SHELTER_FILE_MANIFEST) !== manifestCid) {
      throw new Error("mismatched manifest hash");
    }
    const manifest = JSON.parse(import_buffer4.Buffer.from(manifestBinary).toString());
    if (typeof manifest !== "object")
      throw new Error("manifest format is invalid");
    if (manifest.version !== "1.0.0")
      throw new Error("unsupported manifest version");
    if (!Array.isArray(manifest.chunks))
      throw new Error("missing required field: chunks");
    if (manifestChecker) {
      const proceed = await manifestChecker?.(manifest);
      if (!proceed)
        return false;
    }
    const cipherHandler = await cipherHandlers[manifest.cipher]?.download?.(this, downloadParams, manifest);
    if (!cipherHandler)
      throw new Error("Unsupported cipher");
    return cipherHandler.payloadHandler();
  },
  "chelonia/fileDelete": async function(manifestCid, credentials = {}) {
    if (!manifestCid) {
      throw new TypeError("A manifest CID must be provided");
    }
    if (!Array.isArray(manifestCid))
      manifestCid = [manifestCid];
    return await Promise.allSettled(manifestCid.map(async (cid) => {
      const hasCredential = has(credentials, cid);
      const hasToken = has(credentials[cid], "token") && credentials[cid].token;
      const hasBillableContractID = has(credentials[cid], "billableContractID") && credentials[cid].billableContractID;
      if (!hasCredential || hasToken === hasBillableContractID) {
        throw new TypeError(`Either a token or a billable contract ID must be provided for ${cid}`);
      }
      const response = await this.config.fetch(`${this.config.connectionURL}/deleteFile/${cid}`, {
        method: "POST",
        signal: this.abortController.signal,
        headers: new Headers([
          [
            "authorization",
            hasToken ? `bearer ${credentials[cid].token.valueOf()}` : buildShelterAuthorizationHeader.call(this, credentials[cid].billableContractID)
          ]
        ])
      });
      if (!response.ok) {
        throw new Error(`Unable to delete file ${cid}`);
      }
    }));
  }
});

// node_modules/@chelonia/lib/dist/esm/db.mjs
var import_buffer5 = __toESM(require_buffer(), 1);
var headPrefix = "head=";
var getContractIdFromLogHead = (key) => {
  if (!key.startsWith(headPrefix))
    return;
  return key.slice(headPrefix.length);
};
var getLogHead = (contractID) => `${headPrefix}${contractID}`;
esm_default("sbp/selectors/unsafe", ["chelonia.db/get", "chelonia.db/set", "chelonia.db/delete", "chelonia.db/iterKeys", "chelonia.db/keyCount"]);
var dbPrimitiveSelectors = true ? {
  "chelonia.db/get": function(key) {
    const id = getContractIdFromLogHead(key);
    if (!id)
      return Promise.resolve();
    const state = esm_default("chelonia/rootState").contracts[id];
    const value = state?.HEAD ? JSON.stringify({
      HEAD: state.HEAD,
      height: state.height,
      previousKeyOp: state.previousKeyOp
    }) : void 0;
    return Promise.resolve(value);
  },
  "chelonia.db/set": function() {
    return Promise.resolve();
  },
  "chelonia.db/delete": function() {
    return Promise.resolve(true);
  },
  "chelonia.db/iterKeys": async function* () {
  },
  "chelonia.db/keyCount": function() {
    return Promise.resolve(0);
  }
} : {
  // eslint-disable-next-line require-await
  "chelonia.db/get": async function(prefixableKey) {
    const [prefix, key] = parsePrefixableKey(prefixableKey);
    const value = esm_default("okTurtles.data/get", key);
    if (value === void 0) {
      return;
    }
    return prefixHandlers[prefix](value);
  },
  // eslint-disable-next-line require-await
  "chelonia.db/set": async function(key, value) {
    checkKey(key);
    return esm_default("okTurtles.data/set", key, value);
  },
  // eslint-disable-next-line require-await
  "chelonia.db/delete": async function(key) {
    return esm_default("okTurtles.data/delete", key);
  },
  "chelonia.db/iterKeys": async function* () {
    yield* esm_default("okTurtles.data/iterKeys");
  },
  "chelonia.db/keyCount": function() {
    return Promise.resolve(esm_default("okTurtles.data/keyCount"));
  }
};
var db_default = esm_default("sbp/selectors/register", {
  ...dbPrimitiveSelectors,
  "chelonia/db/getEntryMeta": async (contractID, height) => {
    const entryMetaJson = await esm_default("chelonia.db/get", `_private_hidx=${contractID}#${height}`);
    if (!entryMetaJson)
      return;
    return JSON.parse(entryMetaJson);
  },
  "chelonia/db/setEntryMeta": async (contractID, height, entryMeta) => {
    const entryMetaJson = JSON.stringify(entryMeta);
    await esm_default("chelonia.db/set", `_private_hidx=${contractID}#${height}`, entryMetaJson);
  },
  "chelonia/db/latestHEADinfo": async (contractID) => {
    const r = await esm_default("chelonia.db/get", getLogHead(contractID));
    return r && JSON.parse(r);
  },
  "chelonia/db/deleteLatestHEADinfo": (contractID) => {
    return esm_default("chelonia.db/set", getLogHead(contractID), "");
  },
  "chelonia/db/getEntry": async function(hash) {
    try {
      const value = await esm_default("chelonia.db/get", hash);
      if (!value)
        throw new Error(`no entry for ${hash}!`);
      return SPMessage.deserialize(value, this.transientSecretKeys, void 0, this.config.unwrapMaybeEncryptedData);
    } catch (e2) {
      throw new ChelErrorDBConnection(`${e2.name} during getEntry: ${e2.message}`);
    }
  },
  "chelonia/db/addEntry": function(entry) {
    return esm_default("okTurtles.eventQueue/queueEvent", `chelonia/db/${entry.contractID()}`, ["chelonia/private/db/addEntry", entry]);
  },
  // NEVER call this directly yourself! _always_ call 'chelonia/db/addEntry' instead
  "chelonia/private/db/addEntry": async function(entry) {
    try {
      const { previousHEAD: entryPreviousHEAD, previousKeyOp: entryPreviousKeyOp, height: entryHeight } = entry.head();
      const contractID = entry.contractID();
      if (await esm_default("chelonia.db/get", entry.hash())) {
        console.warn(`[chelonia.db] entry exists: ${entry.hash()}`);
        return entry.hash();
      }
      const HEADinfo = await esm_default("chelonia/db/latestHEADinfo", contractID);
      if (!entry.isFirstMessage()) {
        if (!HEADinfo) {
          throw new Error(`No latest HEAD for ${contractID} when attempting to process entry with previous HEAD ${entryPreviousHEAD} at height ${entryHeight}`);
        }
        const { HEAD: contractHEAD, previousKeyOp: contractPreviousKeyOp, height: contractHeight } = HEADinfo;
        if (entryPreviousHEAD !== contractHEAD) {
          console.warn(`[chelonia.db] bad previousHEAD: ${entryPreviousHEAD}! Expected: ${contractHEAD} for contractID: ${contractID}`);
          throw new ChelErrorDBBadPreviousHEAD(`bad previousHEAD: ${entryPreviousHEAD}. Expected ${contractHEAD} for contractID: ${contractID}`);
        } else if (entryPreviousKeyOp !== contractPreviousKeyOp) {
          console.error(`[chelonia.db] bad previousKeyOp: ${entryPreviousKeyOp}! Expected: ${contractPreviousKeyOp} for contractID: ${contractID}`);
          throw new ChelErrorDBBadPreviousHEAD(`bad previousKeyOp: ${entryPreviousKeyOp}. Expected ${contractPreviousKeyOp} for contractID: ${contractID}`);
        } else if (!Number.isSafeInteger(entryHeight) || entryHeight !== contractHeight + 1) {
          console.error(`[chelonia.db] bad height: ${entryHeight}! Expected: ${contractHeight + 1} for contractID: ${contractID}`);
          throw new ChelErrorDBBadPreviousHEAD(`[chelonia.db] bad height: ${entryHeight}! Expected: ${contractHeight + 1} for contractID: ${contractID}`);
        }
      } else {
        if (HEADinfo) {
          console.error(`[chelonia.db] bad previousHEAD: ${entryPreviousHEAD}! Expected: <null> for contractID: ${contractID}`);
          throw new ChelErrorDBBadPreviousHEAD(`bad previousHEAD: ${entryPreviousHEAD}. Expected <null> for contractID: ${contractID}`);
        } else if (entryHeight !== 0) {
          console.error(`[chelonia.db] bad height: ${entryHeight}! Expected: 0 for contractID: ${contractID}`);
          throw new ChelErrorDBBadPreviousHEAD(`[chelonia.db] bad height: ${entryHeight}! Expected: 0 for contractID: ${contractID}`);
        }
      }
      await esm_default("chelonia.db/set", entry.hash(), entry.serialize());
      await esm_default("chelonia.db/set", getLogHead(contractID), JSON.stringify({
        HEAD: entry.hash(),
        previousKeyOp: entry.isKeyOp() ? entry.hash() : entry.previousKeyOp(),
        height: entry.height()
      }));
      console.debug(`[chelonia.db] HEAD for ${contractID} updated to:`, entry.hash());
      await esm_default("chelonia/db/setEntryMeta", contractID, entryHeight, {
        // The hash is used for reverse lookups (height to CID)
        hash: entry.hash(),
        // The date isn't currently used, but will be used for filtering messages
        date: (/* @__PURE__ */ new Date()).toISOString(),
        // isKeyOp is used for filtering messages (the actual filtering is
        // done more efficiently a separate index key, but `isKeyOp` allows
        // us to bootstrap this process without having to load the full message)
        // The separate index key bears the prefix `_private_keyop_idx_`.
        ...entry.isKeyOp() && { isKeyOp: true }
      });
      return entry.hash();
    } catch (e2) {
      if (e2.name.includes("ErrorDB")) {
        throw e2;
      }
      throw new ChelErrorDBConnection(`${e2.name} during addEntry: ${e2.message}`);
    }
  },
  "chelonia/db/lastEntry": async function(contractID) {
    try {
      const latestHEADinfo = await esm_default("chelonia/db/latestHEADinfo", contractID);
      if (!latestHEADinfo)
        throw new Error(`contract ${contractID} has no latest hash!`);
      return esm_default("chelonia/db/getEntry", latestHEADinfo.HEAD);
    } catch (e2) {
      throw new ChelErrorDBConnection(`${e2.name} during lastEntry: ${e2.message}`);
    }
  }
});

// node_modules/@chelonia/lib/dist/esm/internals.mjs
var missingDecryptionKeyIdsMap = /* @__PURE__ */ new WeakMap();
var getMsgMeta = function(message, contractID, state, index) {
  const signingKeyId = message.signingKeyId();
  let innerSigningKeyId = null;
  const config2 = this.config;
  const result = {
    signingKeyId,
    get signingContractID() {
      return getContractIDfromKeyId(contractID, signingKeyId, state);
    },
    get innerSigningKeyId() {
      if (innerSigningKeyId === null) {
        const value = message.message();
        const data = config2.unwrapMaybeEncryptedData(value);
        if (data?.data && isSignedData(data.data)) {
          innerSigningKeyId = data.data.signingKeyId;
        } else {
          innerSigningKeyId = void 0;
        }
        return innerSigningKeyId;
      }
    },
    get innerSigningContractID() {
      return getContractIDfromKeyId(contractID, result.innerSigningKeyId, state);
    },
    index
  };
  return result;
};
var keysToMap = function(keys_, height, authorizedKeys) {
  const keys = keys_.map((key) => {
    const data = this.config.unwrapMaybeEncryptedData(key);
    if (!data)
      return void 0;
    if (data.encryptionKeyId) {
      data.data._private = data.encryptionKeyId;
    }
    return data.data;
  }).filter(Boolean);
  const keysCopy = cloneDeep(keys);
  return Object.fromEntries(keysCopy.map((key) => {
    key._notBeforeHeight = height;
    if (authorizedKeys?.[key.id]) {
      if (authorizedKeys[key.id]._notAfterHeight == null) {
        throw new ChelErrorKeyAlreadyExists(`Cannot set existing unrevoked key: ${key.id}`);
      }
      key._notBeforeHeight = Math.min(height, authorizedKeys[key.id]._notBeforeHeight ?? 0);
    } else {
      key._notBeforeHeight = height;
    }
    delete key._notAfterHeight;
    return [key.id, key];
  }));
};
var keyRotationHelper = (contractID, state, config2, updatedKeysMap, requiredPermissions, outputSelector, outputMapper, internalSideEffectStack) => {
  if (!internalSideEffectStack || !Array.isArray(state._volatile?.watch))
    return;
  const rootState = esm_default(config2.stateSelector);
  const watchMap = /* @__PURE__ */ Object.create(null);
  state._volatile.watch.forEach(([name, cID]) => {
    if (!updatedKeysMap[name] || watchMap[cID] === null) {
      return;
    }
    if (!watchMap[cID]) {
      if (!rootState.contracts[cID]?.type || !findSuitableSecretKeyId(rootState[cID], [SPMessage.OP_KEY_UPDATE], ["sig"])) {
        watchMap[cID] = null;
        return;
      }
      watchMap[cID] = [];
    }
    watchMap[cID].push(name);
  });
  Object.entries(watchMap).forEach(([cID, names]) => {
    if (!Array.isArray(names) || !names.length)
      return;
    const [keyNamesToUpdate, signingKeyId] = names.map((name) => {
      const foreignContractKey = rootState[cID]?._vm?.authorizedKeys?.[updatedKeysMap[name].oldKeyId];
      if (!foreignContractKey)
        return void 0;
      const signingKeyId2 = findSuitableSecretKeyId(rootState[cID], requiredPermissions, ["sig"], foreignContractKey.ringLevel);
      if (signingKeyId2) {
        return [
          [name, foreignContractKey.name],
          signingKeyId2,
          rootState[cID]._vm.authorizedKeys[signingKeyId2].ringLevel
        ];
      }
      return void 0;
    }).filter(Boolean).reduce((acc, [name, signingKeyId2, ringLevel]) => {
      acc[0].push(name);
      return ringLevel < acc[2] ? [acc[0], signingKeyId2, ringLevel] : acc;
    }, [[], void 0, Number.POSITIVE_INFINITY]);
    if (!signingKeyId)
      return;
    const contractName = rootState.contracts[cID]?.type;
    internalSideEffectStack?.push(() => {
      esm_default(outputSelector, {
        contractID: cID,
        contractName,
        data: keyNamesToUpdate.map(outputMapper).map((v2) => {
          return v2;
        }),
        signingKeyId
      }).catch((e2) => {
        console.warn(`Error mirroring key operation (${outputSelector}) from ${contractID} to ${cID}: ${e2?.message || e2}`);
      });
    });
  });
};
var internals_default = esm_default("sbp/selectors/register", {
  //     DO NOT CALL ANY OF THESE YOURSELF!
  "chelonia/private/state": function() {
    return this.state;
  },
  "chelonia/private/invoke": function(instance, invocation) {
    if (this._instance !== instance) {
      console.info("['chelonia/private/invoke] Not proceeding with invocation as Chelonia was restarted", { invocation });
      return;
    }
    if (Array.isArray(invocation)) {
      return esm_default(...invocation);
    } else if (typeof invocation === "function") {
      return invocation();
    } else {
      throw new TypeError(`[chelonia/private/invoke] Expected invocation to be an array or a function. Saw ${typeof invocation} instead.`);
    }
  },
  "chelonia/private/queueEvent": function(queueName, invocation) {
    return esm_default("okTurtles.eventQueue/queueEvent", queueName, [
      "chelonia/private/invoke",
      this._instance,
      invocation
    ]);
  },
  "chelonia/private/verifyManifestSignature": function(contractName, manifestHash, manifest) {
    if (!has(manifest, "signature") || typeof manifest.signature.keyId !== "string" || typeof manifest.signature.value !== "string") {
      throw new Error(`Invalid or missing signature field for manifest ${manifestHash} (named ${contractName})`);
    }
    const rootState = esm_default(this.config.stateSelector);
    if (!has(rootState, "contractSigningKeys")) {
      this.config.reactiveSet(rootState, "contractSigningKeys", /* @__PURE__ */ Object.create(null));
    }
    const contractNameLookupKey = `name:${contractName}`;
    let signatureValidated = false;
    if (has(rootState.contractSigningKeys, contractNameLookupKey)) {
      console.info(`[chelonia] verifying signature for ${manifestHash} with an existing key`);
      if (!has(rootState.contractSigningKeys[contractNameLookupKey], manifest.signature.keyId)) {
        console.error(`The manifest with ${manifestHash} (named ${contractName}) claims to be signed with a key with ID ${manifest.signature.keyId}, which is not trusted. The trusted key IDs for this name are:`, Object.keys(rootState.contractSigningKeys[contractNameLookupKey]));
        throw new Error(`Invalid or missing signature in manifest ${manifestHash} (named ${contractName}). It claims to be signed with a key with ID ${manifest.signature.keyId}, which has not been authorized for this contract before.`);
      }
      const signingKey = rootState.contractSigningKeys[contractNameLookupKey][manifest.signature.keyId];
      verifySignature(signingKey, manifest.body + manifest.head, manifest.signature.value);
      console.info(`[chelonia] successful signature verification for ${manifestHash} (named ${contractName}) using the already-trusted key ${manifest.signature.keyId}.`);
      signatureValidated = true;
    }
    const body = JSON.parse(manifest.body);
    if (!signatureValidated) {
      console.info(`[chelonia] verifying signature for ${manifestHash} (named ${contractName}) for the first time`);
      if (!has(body, "signingKeys") || !Array.isArray(body.signingKeys)) {
        throw new Error(`Invalid manifest file ${manifestHash} (named ${contractName}). Its body doesn't contain a 'signingKeys' list'`);
      }
      let contractSigningKeys;
      try {
        contractSigningKeys = Object.fromEntries(body.signingKeys.map((serializedKey) => {
          return [keyId(serializedKey), serializedKey];
        }));
      } catch (e2) {
        console.error(`[chelonia] Error parsing the public keys list for ${manifestHash} (named ${contractName})`, e2);
        throw e2;
      }
      if (!has(contractSigningKeys, manifest.signature.keyId)) {
        throw new Error(`Invalid or missing signature in manifest ${manifestHash} (named ${contractName}). It claims to be signed with a key with ID ${manifest.signature.keyId}, which is not listed in its 'signingKeys' field.`);
      }
      verifySignature(contractSigningKeys[manifest.signature.keyId], manifest.body + manifest.head, manifest.signature.value);
      console.info(`[chelonia] successful signature verification for ${manifestHash} (named ${contractName}) using ${manifest.signature.keyId}. The following key IDs will now be trusted for this contract name`, Object.keys(contractSigningKeys));
      signatureValidated = true;
      rootState.contractSigningKeys[contractNameLookupKey] = contractSigningKeys;
    }
    return body;
  },
  "chelonia/private/loadManifest": async function(contractName, manifestHash) {
    if (!contractName || typeof contractName !== "string") {
      throw new Error("Invalid or missing contract name");
    }
    if (this.manifestToContract[manifestHash]) {
      console.warn("[chelonia]: already loaded manifest", manifestHash);
      return;
    }
    const manifestSource = await esm_default("chelonia/out/fetchResource", manifestHash, {
      code: multicodes.SHELTER_CONTRACT_MANIFEST
    });
    const manifest = JSON.parse(manifestSource);
    const body = esm_default("chelonia/private/verifyManifestSignature", contractName, manifestHash, manifest);
    if (body.name !== contractName) {
      throw new Error(`Mismatched contract name. Expected ${contractName} but got ${body.name}`);
    }
    const contractInfo = this.config.contracts.defaults.preferSlim && body.contractSlim || body.contract;
    console.info(`[chelonia] loading contract '${contractInfo.file}'@'${body.version}' from manifest: ${manifestHash}`);
    const source = await esm_default("chelonia/out/fetchResource", contractInfo.hash, {
      code: multicodes.SHELTER_CONTRACT_TEXT
    });
    const reduceAllow = (acc, v2) => {
      acc[v2] = true;
      return acc;
    };
    const allowedSels = [
      "okTurtles.events/on",
      "chelonia/defineContract",
      "chelonia/out/keyRequest"
    ].concat(this.config.contracts.defaults.allowedSelectors).reduce(reduceAllow, {});
    const allowedDoms = this.config.contracts.defaults.allowedDomains.reduce(reduceAllow, {});
    const contractSBP = (selector, ...args) => {
      const domain = domainFromSelector(selector);
      if (selector.startsWith(contractName + "/")) {
        selector = `${manifestHash}/${selector}`;
      }
      if (allowedSels[selector] || allowedDoms[domain]) {
        return esm_default(selector, ...args);
      } else {
        console.error("[chelonia] selector not on allowlist", {
          selector,
          allowedSels,
          allowedDoms
        });
        throw new Error(`[chelonia] selector not on allowlist: '${selector}'`);
      }
    };
    const saferEval = new Function(`
      return function (globals) {
        // almost a real sandbox
        // stops (() => this)().fetch
        // needs additional step of locking down Function constructor to stop:
        // new (()=>{}).constructor("console.log(typeof this.fetch)")()
        globals.self = globals
        globals.globalThis = globals
        with (new Proxy(globals, {
          get (o, p) { return o[p] },
          has (o, p) { /* console.log('has', p); */ return true }
        })) {
          (function () {
            'use strict'
            ${source}
          })()
        }
      }
    `)();
    this.defContractSBP = contractSBP;
    this.defContractManifest = manifestHash;
    saferEval({
      // pass in globals that we want access to by default in the sandbox
      // note: you can undefine these by setting them to undefined in exposedGlobals
      crypto: {
        getRandomValues: (v2) => globalThis.crypto.getRandomValues(v2)
      },
      ...typeof window === "object" && window && {
        alert: window.alert.bind(window),
        confirm: window.confirm.bind(window),
        prompt: window.prompt.bind(window)
      },
      isNaN,
      console,
      Object,
      Error,
      TypeError,
      RangeError,
      Math,
      Symbol,
      Date,
      Array,
      BigInt,
      Boolean,
      String,
      Number,
      Int8Array,
      Int16Array,
      Int32Array,
      Uint8Array,
      Uint16Array,
      Uint32Array,
      Float32Array,
      Float64Array,
      ArrayBuffer,
      JSON,
      RegExp,
      parseFloat,
      parseInt,
      Promise,
      Function,
      Map,
      WeakMap,
      ...this.config.contracts.defaults.exposedGlobals,
      require: (dep) => {
        return dep === "@sbp/sbp" ? contractSBP : this.config.contracts.defaults.modules[dep];
      },
      sbp: contractSBP,
      fetchServerTime: async (fallback = true) => {
        try {
          const response = await this.config.fetch(`${this.config.connectionURL}/time`, {
            signal: this.abortController.signal
          });
          return handleFetchResult("text")(response);
        } catch (e2) {
          console.warn("[fetchServerTime] Error", e2);
          if (fallback) {
            return new Date(esm_default("chelonia/time")).toISOString();
          }
          throw new ChelErrorFetchServerTimeFailed("Can not fetch server time. Please check your internet connection.");
        }
      }
    });
    if (contractName !== this.defContract.name) {
      throw new Error(`Invalid contract name for manifest ${manifestHash}. Expected ${contractName} but got ${this.defContract.name}`);
    }
    this.defContractSelectors.forEach((s) => {
      allowedSels[s] = true;
    });
    this.manifestToContract[manifestHash] = {
      slim: contractInfo === body.contractSlim,
      info: contractInfo,
      contract: this.defContract
    };
  },
  // Warning: avoid using this unless you know what you're doing. Prefer using /remove.
  "chelonia/private/removeImmediately": function(contractID, params) {
    const state = esm_default(this.config.stateSelector);
    const contractName = state.contracts[contractID]?.type;
    if (!contractName) {
      console.error("[chelonia/private/removeImmediately] Missing contract name for contract", {
        contractID
      });
      return;
    }
    const manifestHash = this.config.contracts.manifests[contractName];
    if (manifestHash) {
      const destructor = `${manifestHash}/${contractName}/_cleanup`;
      if (esm_default("sbp/selectors/fn", destructor)) {
        try {
          esm_default(destructor, { contractID, resync: !!params?.resync, state: state[contractID] });
        } catch (e2) {
          console.error(`[chelonia/private/removeImmediately] Error at destructor for ${contractID}`, e2);
        }
      }
    }
    if (params?.resync) {
      Object.keys(state.contracts[contractID]).filter((k) => k !== "references").forEach((k) => this.config.reactiveDel(state.contracts[contractID], k));
      Object.keys(state[contractID]).filter((k) => k !== "_volatile").forEach((k) => this.config.reactiveDel(state[contractID], k));
      if (state[contractID]._volatile) {
        Object.keys(state[contractID]._volatile).filter((k) => k !== "watch").forEach((k) => this.config.reactiveDel(state[contractID]._volatile, k));
      }
    } else {
      delete this.ephemeralReferenceCount[contractID];
      if (params?.permanent) {
        this.config.reactiveSet(state.contracts, contractID, null);
      } else {
        this.config.reactiveDel(state.contracts, contractID);
      }
      this.config.reactiveDel(state, contractID);
    }
    this.subscriptionSet.delete(contractID);
    esm_default("okTurtles.events/emit", CONTRACTS_MODIFIED, Array.from(this.subscriptionSet), {
      added: [],
      removed: [contractID],
      permanent: params?.permanent,
      resync: params?.resync
    });
  },
  // used by, e.g. 'chelonia/contract/wait'
  "chelonia/private/noop": function() {
  },
  "chelonia/private/out/sync": function(contractIDs, params) {
    const listOfIds = typeof contractIDs === "string" ? [contractIDs] : contractIDs;
    const forcedSync = !!params?.force;
    return Promise.all(listOfIds.map((contractID) => {
      if (!forcedSync && this.subscriptionSet.has(contractID)) {
        const rootState = esm_default(this.config.stateSelector);
        if (!rootState[contractID]?._volatile?.dirty) {
          return esm_default("chelonia/private/queueEvent", contractID, ["chelonia/private/noop"]);
        }
      }
      return esm_default("chelonia/private/queueEvent", contractID, [
        "chelonia/private/in/syncContract",
        contractID,
        params
      ]).catch((err) => {
        console.error(`[chelonia] failed to sync ${contractID}:`, err);
        throw err;
      });
    }));
  },
  "chelonia/private/out/publishEvent": function(entry, { maxAttempts = 5, headers, billableContractID, bearer, disableAutoDedup } = {}, hooks) {
    const contractID = entry.contractID();
    const originalEntry = entry;
    return esm_default("chelonia/private/queueEvent", `publish:${contractID}`, async () => {
      let attempt = 1;
      let lastAttemptedHeight;
      await hooks?.prepublish?.(entry);
      const onreceivedHandler = (_contractID, message) => {
        if (entry.hash() === message.hash()) {
          esm_default("okTurtles.events/off", EVENT_HANDLED, onreceivedHandler);
          hooks.onprocessed(entry);
        }
      };
      if (typeof hooks?.onprocessed === "function") {
        esm_default("okTurtles.events/on", EVENT_HANDLED, onreceivedHandler);
      }
      while (true) {
        lastAttemptedHeight = entry.height();
        const newEntry = await esm_default("chelonia/private/queueEvent", contractID, async () => {
          const rootState = esm_default(this.config.stateSelector);
          const state = rootState[contractID];
          const isFirstMessage = entry.isFirstMessage();
          if (!state && !isFirstMessage) {
            console.info(`[chelonia] Not sending message as contract state has been removed: ${entry.description()}`);
            return;
          }
          if (hooks?.preSendCheck) {
            if (!await hooks.preSendCheck(entry, state)) {
              console.info(`[chelonia] Not sending message as preSendCheck hook returned non-truish value: ${entry.description()}`);
              return;
            }
          }
          await esm_default("chelonia/private/in/processMessage", entry, cloneDeep(state || {}));
          if (!isFirstMessage) {
            return recreateEvent(entry, state, rootState.contracts[contractID], disableAutoDedup);
          }
          return entry;
        });
        if (!newEntry)
          return;
        await hooks?.beforeRequest?.(newEntry, entry);
        entry = newEntry;
        const r = await this.config.fetch(`${this.config.connectionURL}/event`, {
          method: "POST",
          body: entry.serialize(),
          headers: {
            ...headers,
            ...bearer && {
              Authorization: `Bearer ${bearer}`
            },
            ...billableContractID && {
              Authorization: buildShelterAuthorizationHeader.call(this, billableContractID)
            },
            "Content-Type": "text/plain"
          },
          signal: this.abortController.signal
        });
        if (r.ok) {
          await hooks?.postpublish?.(entry);
          return entry;
        }
        try {
          if (r.status === 409) {
            if (attempt + 1 > maxAttempts) {
              console.error(`[chelonia] failed to publish ${entry.description()} after ${attempt} attempts`, entry);
              throw new Error(`publishEvent: ${r.status} - ${r.statusText}. attempt ${attempt}`);
            }
            const randDelay = randomIntFromRange(0, 1500);
            console.warn(`[chelonia] publish attempt ${attempt} of ${maxAttempts} failed. Waiting ${randDelay} msec before resending ${entry.description()}`);
            attempt += 1;
            await delay(randDelay);
            if (!entry.isFirstMessage() && entry.height() === lastAttemptedHeight) {
              await esm_default("chelonia/private/out/sync", contractID, { force: true });
            }
          } else {
            const message = (await r.json())?.message;
            console.error(`[chelonia] ERROR: failed to publish ${entry.description()}: ${r.status} - ${r.statusText}: ${message}`, entry);
            throw new Error(`publishEvent: ${r.status} - ${r.statusText}: ${message}`);
          }
        } catch (e2) {
          esm_default("okTurtles.events/off", EVENT_HANDLED, onreceivedHandler);
          throw e2;
        }
      }
    }).then((entry2) => {
      esm_default("okTurtles.events/emit", EVENT_PUBLISHED, {
        contractID,
        message: entry2,
        originalMessage: originalEntry
      });
      return entry2;
    }).catch((e2) => {
      esm_default("okTurtles.events/emit", EVENT_PUBLISHING_ERROR, {
        contractID,
        message: entry,
        originalMessage: originalEntry,
        error: e2
      });
      throw e2;
    });
  },
  "chelonia/private/out/latestHEADinfo": function(contractID) {
    return this.config.fetch(`${this.config.connectionURL}/latestHEADinfo/${contractID}`, {
      cache: "no-store",
      signal: this.abortController.signal
    }).then(handleFetchResult("json"));
  },
  "chelonia/private/postKeyShare": function(contractID, previousVolatileState, signingKey) {
    const cheloniaState = esm_default(this.config.stateSelector);
    const targetState = cheloniaState[contractID];
    if (!targetState)
      return;
    if (previousVolatileState && has(previousVolatileState, "watch")) {
      if (!targetState._volatile) {
        this.config.reactiveSet(targetState, "_volatile", /* @__PURE__ */ Object.create(null));
      }
      if (!targetState._volatile.watch) {
        this.config.reactiveSet(targetState._volatile, "watch", previousVolatileState.watch);
      } else if (targetState._volatile.watch !== previousVolatileState.watch) {
        previousVolatileState.watch.forEach((pWatch) => {
          if (!targetState._volatile.watch.some((tWatch) => {
            return tWatch[0] === pWatch[0] && tWatch[1] === pWatch[1];
          })) {
            targetState._volatile.watch.push(pWatch);
          }
        });
      }
    }
    if (!Array.isArray(targetState._volatile?.pendingKeyRequests))
      return;
    this.config.reactiveSet(targetState._volatile, "pendingKeyRequests", targetState._volatile.pendingKeyRequests.filter((pkr) => pkr?.name !== signingKey.name));
  },
  "chelonia/private/in/processMessage": async function(message, state, internalSideEffectStack, contractName) {
    const [opT, opV] = message.op();
    const hash = message.hash();
    const height = message.height();
    const contractID = message.contractID();
    const manifestHash = message.manifest();
    const signingKeyId = message.signingKeyId();
    const direction = message.direction();
    const config2 = this.config;
    const self2 = this;
    const opName = Object.entries(SPMessage).find(([, y]) => y === opT)?.[0];
    console.debug("PROCESSING OPCODE:", opName, "to", contractID);
    if (state?._volatile?.dirty) {
      console.debug("IGNORING OPCODE BECAUSE CONTRACT STATE IS MARKED AS DIRTY.", "OPCODE:", opName, "CONTRACT:", contractID);
      return;
    }
    if (!state._vm)
      state._vm = /* @__PURE__ */ Object.create(null);
    const opFns = {
      /*
        There are two types of "errors" that we need to consider:
        1. "Ignoring" errors
        2. "Failure" errors
        Example: OP_KEY_ADD
        1. IGNORING: an error is thrown because we wanted to add a key but the
        key we wanted to add is already there. This is not a hard error, it's an
        ignoring error. We don't care that the operation failed in this case because the intent was accomplished.
        2. FAILURE: an error is thrown while attempting to add a key that doesn't exist.
        Example: OP_ACTION_ENCRYPTED
        1. IGNORING: An error is thrown because we don't have the key to decrypt the action. We ignore it.
        2. FAILURE: An error is thrown by the process function during processing.
        Handling these in OP_ATOMIC
        • ALL errors of class "IGNORING" should be ignored. They should not
        impact our ability to process the rest of the operations in the OP_ATOMIC.
        No matter how many of these are thrown, it doesn't affect the rest of the operations.
        • ANY error of class "FAILURE" will call the rest of the operations to
        fail and the state to be reverted to prior to the OP_ATOMIC. No side-effects should be run. Because an intention failed.
      */
      async [SPMessage.OP_ATOMIC](v2) {
        for (let i2 = 0; i2 < v2.length; i2++) {
          const u2 = v2[i2];
          try {
            if (u2[0] === SPMessage.OP_ATOMIC)
              throw new Error("Cannot nest OP_ATOMIC");
            if (!validateKeyPermissions(message, config2, state, signingKeyId, u2[0], u2[1])) {
              throw new Error("Inside OP_ATOMIC: no matching signing key was defined");
            }
            await opFns[u2[0]](u2[1]);
          } catch (e_) {
            const e2 = e_;
            if (e2 && typeof e2 === "object") {
              if (e2.name === "ChelErrorDecryptionKeyNotFound") {
                console.warn(`[chelonia] [OP_ATOMIC] WARN '${e2.name}' in processMessage for ${message.description()}: ${e2.message}`, e2, message.serialize());
                if (e2.cause) {
                  const missingDecryptionKeyIds = missingDecryptionKeyIdsMap.get(message);
                  if (missingDecryptionKeyIds) {
                    missingDecryptionKeyIds.add(e2.cause);
                  } else {
                    missingDecryptionKeyIdsMap.set(message, /* @__PURE__ */ new Set([e2.cause]));
                  }
                }
                continue;
              } else {
                logEvtError(message, `[chelonia] [OP_ATOMIC] ERROR '${e2.name}' in processMessage for ${message.description()}: ${e2.message || e2}`, e2, message.serialize());
              }
              console.warn(`[chelonia] [OP_ATOMIC] Error processing ${message.description()}: ${message.serialize()}. Any side effects will be skipped!`);
              if (config2.strictProcessing) {
                throw e2;
              }
              config2.hooks.processError?.(e2, message, getMsgMeta.call(self2, message, contractID, state));
              if (e2.name === "ChelErrorWarning")
                continue;
            } else {
              logEvtError(message, "Inside OP_ATOMIC: Non-object or null error thrown", contractID, message, i2, e2);
            }
            throw e2;
          }
        }
      },
      [SPMessage.OP_CONTRACT](v2) {
        state._vm.type = v2.type;
        const keys = keysToMap.call(self2, v2.keys, height);
        state._vm.authorizedKeys = keys;
        keyAdditionProcessor.call(self2, message, hash, v2.keys, state, contractID, signingKey, internalSideEffectStack);
      },
      [SPMessage.OP_ACTION_ENCRYPTED](v2) {
        if (config2.skipActionProcessing) {
          if (!config2.skipDecryptionAttempts) {
            console.log("OP_ACTION_ENCRYPTED: skipped action processing");
          }
          return;
        }
        return opFns[SPMessage.OP_ACTION_UNENCRYPTED](v2.valueOf());
      },
      async [SPMessage.OP_ACTION_UNENCRYPTED](v2) {
        if (!config2.skipActionProcessing) {
          let innerSigningKeyId;
          if (isSignedData(v2)) {
            innerSigningKeyId = v2.signingKeyId;
            v2 = v2.valueOf();
          }
          const { data, meta, action } = v2;
          if (!config2.whitelisted(action)) {
            throw new Error(`chelonia: action not whitelisted: '${action}'`);
          }
          await esm_default(`${manifestHash}/${action}/process`, {
            data,
            meta,
            hash,
            height,
            contractID,
            direction: message.direction(),
            signingKeyId,
            get signingContractID() {
              return getContractIDfromKeyId(contractID, signingKeyId, state);
            },
            innerSigningKeyId,
            get innerSigningContractID() {
              return getContractIDfromKeyId(contractID, innerSigningKeyId, state);
            }
          }, state);
        }
      },
      [SPMessage.OP_KEY_SHARE](wv) {
        const data = config2.unwrapMaybeEncryptedData(wv);
        if (!data)
          return;
        const v2 = data.data;
        for (const key of v2.keys) {
          if (key.id && key.meta?.private?.content) {
            if (!has(state._vm, "sharedKeyIds"))
              state._vm.sharedKeyIds = [];
            if (!state._vm.sharedKeyIds.some((sK) => sK.id === key.id)) {
              state._vm.sharedKeyIds.push({
                id: key.id,
                contractID: v2.contractID,
                height,
                keyRequestHash: v2.keyRequestHash,
                keyRequestHeight: v2.keyRequestHeight
              });
            }
          }
        }
        if (has(v2, "keyRequestHash") && state._vm.authorizedKeys[signingKeyId].meta?.keyRequest) {
          state._vm.authorizedKeys[signingKeyId].meta.keyRequest.responded = hash;
        }
        internalSideEffectStack?.push(async () => {
          delete self2.postSyncOperations[contractID]?.["pending-keys-for-" + v2.contractID];
          const cheloniaState = esm_default(self2.config.stateSelector);
          const targetState = cheloniaState[v2.contractID];
          const missingDecryptionKeyIds = cheloniaState.contracts[v2.contractID]?.missingDecryptionKeyIds;
          let newestEncryptionKeyHeight = Number.POSITIVE_INFINITY;
          for (const key of v2.keys) {
            if (key.id && key.meta?.private?.content) {
              const transient = direction === "outgoing" || key.meta.private.transient;
              if (!esm_default("chelonia/haveSecretKey", key.id, !transient)) {
                try {
                  const decrypted = key.meta.private.content.valueOf();
                  esm_default("chelonia/storeSecretKeys", new Secret([
                    {
                      key: deserializeKey(decrypted),
                      transient
                    }
                  ]));
                  if (missingDecryptionKeyIds?.includes(key.id)) {
                    newestEncryptionKeyHeight = Number.NEGATIVE_INFINITY;
                  } else if (
                    // Otherwise, we make an educated guess on whether a re-sync
                    // is needed based on the height.
                    targetState?._vm?.authorizedKeys?.[key.id]?._notBeforeHeight != null && Array.isArray(targetState._vm.authorizedKeys[key.id].purpose) && targetState._vm.authorizedKeys[key.id].purpose.includes("enc")
                  ) {
                    newestEncryptionKeyHeight = Math.min(newestEncryptionKeyHeight, targetState._vm.authorizedKeys[key.id]._notBeforeHeight);
                  }
                } catch (e_) {
                  const e2 = e_;
                  if (e2?.name === "ChelErrorDecryptionKeyNotFound") {
                    console.warn(`OP_KEY_SHARE (${hash} of ${contractID}) missing secret key: ${e2.message}`, e2);
                  } else {
                    console.error(`OP_KEY_SHARE (${hash} of ${contractID}) error '${e2.message || e2}':`, e2);
                  }
                }
              }
            }
          }
          const mustResync = !!(newestEncryptionKeyHeight < cheloniaState.contracts[v2.contractID]?.height);
          if (mustResync) {
            if (!has(targetState, "_volatile")) {
              config2.reactiveSet(targetState, "_volatile", /* @__PURE__ */ Object.create(null));
            }
            config2.reactiveSet(targetState._volatile, "dirty", true);
            if (!Object.keys(targetState).some((k) => k !== "_volatile")) {
              return;
            }
            const keyDict = /* @__PURE__ */ Object.create(null);
            targetState._volatile?.watch?.forEach(([keyName, contractID2]) => {
              if (!keyDict[keyName]) {
                keyDict[keyName] = [contractID2];
                return;
              }
              keyDict[keyName].push(contractID2);
            });
            const contractIdsToUpdate = Array.from(new Set(Object.entries(keyDict).flatMap(([keyName, contractIDs]) => {
              const keyId2 = findKeyIdByName(targetState, keyName);
              if (
                // Does the key exist? (i.e., is it a current key)
                keyId2 && // Is it an encryption key? (signing keys don't build up a
                // potentially invalid state because the private key isn't
                // required for validation; however, missing encryption keys
                // prevent message processing)
                targetState._vm.authorizedKeys[keyId2].purpose.includes("enc") && // Is this a newly set key? (avoid re-syncing contracts that
                // haven't been affected by the `OP_KEY_SHARE`)
                targetState._vm.authorizedKeys[keyId2]._notBeforeHeight >= newestEncryptionKeyHeight
              ) {
                return contractIDs;
              }
              return [];
            })));
            contractIdsToUpdate.forEach((contractID2) => {
              const targetState2 = cheloniaState[contractID2];
              if (!targetState2)
                return;
              if (!has(targetState2, "_volatile")) {
                config2.reactiveSet(targetState2, "_volatile", /* @__PURE__ */ Object.create(null));
              }
              config2.reactiveSet(targetState2._volatile, "dirty", true);
            });
            if (self2.subscriptionSet.has(v2.contractID)) {
              const resync = esm_default("chelonia/private/queueEvent", v2.contractID, [
                "chelonia/private/in/syncContract",
                v2.contractID
              ]).then(() => {
                esm_default("chelonia/private/out/sync", contractIdsToUpdate.filter((contractID2) => {
                  return self2.subscriptionSet.has(contractID2);
                }), { force: true, resync: true }).catch((e2) => {
                  console.error("[chelonia] Error resyncing contracts with foreign key references after key rotation", e2);
                });
              }).catch((e2) => {
                console.error(`[chelonia] Error during sync for ${v2.contractID} during OP_KEY_SHARE for ${contractID}`);
                if (v2.contractID === contractID) {
                  throw e2;
                }
              });
              if (v2.contractID !== contractID) {
                await resync;
              }
            }
          }
          const previousVolatileState = targetState?._volatile;
          esm_default("chelonia/private/queueEvent", v2.contractID, [
            "chelonia/private/postKeyShare",
            v2.contractID,
            mustResync ? previousVolatileState : null,
            signingKey
          ]).then(() => {
            esm_default("chelonia/private/queueEvent", contractID, () => {
              esm_default("okTurtles.events/emit", CONTRACT_HAS_RECEIVED_KEYS, {
                contractID: v2.contractID,
                sharedWithContractID: contractID,
                signingKeyId,
                get signingKeyName() {
                  return state._vm?.authorizedKeys?.[signingKeyId]?.name;
                }
              });
            }).catch((e2) => {
              console.error(`[chelonia] Error while emitting the CONTRACT_HAS_RECEIVED_KEYS event for ${contractID}`, e2);
            });
          });
        });
      },
      [SPMessage.OP_KEY_REQUEST](wv) {
        const data = config2.unwrapMaybeEncryptedData(wv);
        const v2 = data?.data || {
          contractID: "(private)",
          replyWith: { context: void 0 },
          request: "*"
        };
        const originatingContractID = v2.contractID;
        if (state._vm?.invites?.[signingKeyId]?.quantity != null) {
          if (state._vm.invites[signingKeyId].quantity > 0) {
            if (--state._vm.invites[signingKeyId].quantity <= 0) {
              state._vm.invites[signingKeyId].status = INVITE_STATUS.USED;
            }
          } else {
            logEvtError(message, "Ignoring OP_KEY_REQUEST because it exceeds allowed quantity: " + originatingContractID);
            return;
          }
        }
        if (state._vm?.invites?.[signingKeyId]?.expires != null) {
          if (state._vm.invites[signingKeyId].expires < Date.now()) {
            logEvtError(message, "Ignoring OP_KEY_REQUEST because it expired at " + state._vm.invites[signingKeyId].expires + ": " + originatingContractID);
            return;
          }
        }
        if (config2.skipActionProcessing || direction === "outgoing") {
          return;
        }
        if (!has(v2.replyWith, "context")) {
          logEvtError(message, "Ignoring OP_KEY_REQUEST because it is missing the context attribute");
          return;
        }
        const context = v2.replyWith.context;
        if (data && (!Array.isArray(context) || context[0] !== originatingContractID)) {
          logEvtError(message, "Ignoring OP_KEY_REQUEST because it is signed by the wrong contract");
          return;
        }
        if (v2.request !== "*") {
          logEvtError(message, "Ignoring OP_KEY_REQUEST because it has an unsupported request attribute", v2.request);
          return;
        }
        if (!state._vm.pendingKeyshares)
          state._vm.pendingKeyshares = /* @__PURE__ */ Object.create(null);
        state._vm.pendingKeyshares[message.hash()] = context ? [
          // Full-encryption (i.e., KRS encryption) requires that this request
          // was encrypted and that the invite is marked as private
          !!data?.encryptionKeyId,
          message.height(),
          signingKeyId,
          context
        ] : [!!data?.encryptionKeyId, message.height(), signingKeyId];
        if (data) {
          internalSideEffectStack?.push(() => {
            self2.setPostSyncOp(contractID, "respondToAllKeyRequests-" + message.contractID(), [
              "chelonia/private/respondToAllKeyRequests",
              contractID
            ]);
          });
        }
      },
      [SPMessage.OP_KEY_REQUEST_SEEN](wv) {
        if (config2.skipActionProcessing) {
          return;
        }
        const data = config2.unwrapMaybeEncryptedData(wv);
        if (!data)
          return;
        const v2 = data.data;
        if (state._vm.pendingKeyshares && v2.keyRequestHash in state._vm.pendingKeyshares) {
          const hash2 = v2.keyRequestHash;
          const pending = state._vm.pendingKeyshares[hash2];
          delete state._vm.pendingKeyshares[hash2];
          if (pending.length !== 4)
            return;
          const keyId2 = pending[2];
          const originatingContractID = pending[3][0];
          if (Array.isArray(state._vm?.invites?.[keyId2]?.responses)) {
            state._vm?.invites?.[keyId2]?.responses.push(originatingContractID);
          }
          if (!has(state._vm, "keyshares"))
            state._vm.keyshares = /* @__PURE__ */ Object.create(null);
          const success = v2.success;
          state._vm.keyshares[hash2] = {
            contractID: originatingContractID,
            height,
            success,
            ...success && {
              hash: v2.keyShareHash
            }
          };
        }
      },
      [SPMessage.OP_PROP_DEL]: notImplemented,
      [SPMessage.OP_PROP_SET](v2) {
        if (!state._vm.props)
          state._vm.props = {};
        state._vm.props[v2.key] = v2.value;
      },
      [SPMessage.OP_KEY_ADD](v2) {
        const keys = keysToMap.call(self2, v2, height, state._vm.authorizedKeys);
        const keysArray = Object.values(v2);
        keysArray.forEach((k) => {
          if (has(state._vm.authorizedKeys, k.id) && state._vm.authorizedKeys[k.id]._notAfterHeight == null) {
            throw new ChelErrorWarning("Cannot use OP_KEY_ADD on existing keys. Key ID: " + k.id);
          }
        });
        validateKeyAddPermissions.call(self2, contractID, signingKey, state, v2);
        state._vm.authorizedKeys = { ...state._vm.authorizedKeys, ...keys };
        keyAdditionProcessor.call(self2, message, hash, v2, state, contractID, signingKey, internalSideEffectStack);
      },
      [SPMessage.OP_KEY_DEL](v2) {
        if (!state._vm.authorizedKeys)
          state._vm.authorizedKeys = /* @__PURE__ */ Object.create(null);
        if (!state._volatile)
          state._volatile = /* @__PURE__ */ Object.create(null);
        if (!state._volatile.pendingKeyRevocations) {
          state._volatile.pendingKeyRevocations = /* @__PURE__ */ Object.create(null);
        }
        validateKeyDelPermissions.call(self2, contractID, signingKey, state, v2);
        const keyIds = v2.map((k) => {
          const data = config2.unwrapMaybeEncryptedData(k);
          if (!data)
            return void 0;
          return data.data;
        }).filter((keyId2) => {
          if (!keyId2 || typeof keyId2 !== "string")
            return false;
          if (!has(state._vm.authorizedKeys, keyId2) || state._vm.authorizedKeys[keyId2]._notAfterHeight != null) {
            console.warn("Attempted to delete non-existent key from contract", {
              contractID,
              keyId: keyId2
            });
            return false;
          }
          return true;
        });
        keyIds.forEach((keyId2) => {
          const key = state._vm.authorizedKeys[keyId2];
          state._vm.authorizedKeys[keyId2]._notAfterHeight = height;
          if (has(state._volatile.pendingKeyRevocations, keyId2)) {
            delete state._volatile.pendingKeyRevocations[keyId2];
          }
          if (key.foreignKey) {
            const fkUrl = new URL(key.foreignKey);
            const foreignContract = fkUrl.pathname;
            const foreignKeyName = fkUrl.searchParams.get("keyName");
            if (!foreignContract || !foreignKeyName) {
              throw new Error("Invalid foreign key: missing contract or key name");
            }
            internalSideEffectStack?.push(() => {
              esm_default("chelonia/private/queueEvent", foreignContract, () => {
                const rootState = esm_default(config2.stateSelector);
                if (Array.isArray(rootState[foreignContract]?._volatile?.watch)) {
                  const oldWatch = rootState[foreignContract]._volatile.watch;
                  rootState[foreignContract]._volatile.watch = oldWatch.filter(([name, cID]) => name !== foreignKeyName || cID !== contractID);
                  if (oldWatch.length !== rootState[foreignContract]._volatile.watch.length) {
                    esm_default("chelonia/contract/release", foreignContract, { try: true }).catch((e2) => {
                      console.error(`[chelonia] Error at OP_KEY_DEL internalSideEffectStack while attempting to release foreign contract ${foreignContract}`, e2);
                    });
                  }
                }
              }).catch((e2) => {
                console.error("Error stopping watching events after removing key", { contractID, foreignContract, foreignKeyName, fkUrl }, e2);
              });
            });
            const pendingWatch = state._vm.pendingWatch?.[foreignContract];
            if (pendingWatch) {
              state._vm.pendingWatch[foreignContract] = pendingWatch.filter(([, kId]) => kId !== keyId2);
            }
          }
          if (key.name.startsWith("#inviteKey-") && state._vm.invites[key.id]) {
            state._vm.invites[key.id].status = INVITE_STATUS.REVOKED;
          }
        });
        if (Array.isArray(state._volatile?.watch)) {
          const updatedKeysMap = /* @__PURE__ */ Object.create(null);
          keyIds.forEach((keyId2) => {
            updatedKeysMap[state._vm.authorizedKeys[keyId2].name] = {
              name: state._vm.authorizedKeys[keyId2].name,
              oldKeyId: keyId2
            };
          });
          keyRotationHelper(contractID, state, config2, updatedKeysMap, [SPMessage.OP_KEY_DEL], "chelonia/out/keyDel", (name) => updatedKeysMap[name[0]].oldKeyId, internalSideEffectStack);
        }
      },
      [SPMessage.OP_KEY_UPDATE](v2) {
        if (!state._volatile)
          state._volatile = /* @__PURE__ */ Object.create(null);
        if (!state._volatile.pendingKeyRevocations) {
          state._volatile.pendingKeyRevocations = /* @__PURE__ */ Object.create(null);
        }
        const [updatedKeys, updatedMap] = validateKeyUpdatePermissions.call(self2, contractID, signingKey, state, v2);
        const keysToDelete = Object.values(updatedMap);
        for (const keyId2 of keysToDelete) {
          if (has(state._volatile.pendingKeyRevocations, keyId2)) {
            delete state._volatile.pendingKeyRevocations[keyId2];
          }
          state._vm.authorizedKeys[keyId2]._notAfterHeight = height;
        }
        for (const key of updatedKeys) {
          if (!has(state._vm.authorizedKeys, key.id)) {
            key._notBeforeHeight = height;
            state._vm.authorizedKeys[key.id] = cloneDeep(key);
          }
        }
        keyAdditionProcessor.call(self2, message, hash, updatedKeys, state, contractID, signingKey, internalSideEffectStack);
        if (Array.isArray(state._volatile?.watch)) {
          const updatedKeysMap = /* @__PURE__ */ Object.create(null);
          updatedKeys.forEach((key) => {
            if (key.data) {
              updatedKeysMap[key.name] = cloneDeep(key);
              updatedKeysMap[key.name].oldKeyId = updatedMap[key.id];
            }
          });
          keyRotationHelper(contractID, state, config2, updatedKeysMap, [SPMessage.OP_KEY_UPDATE], "chelonia/out/keyUpdate", (name) => ({
            name: name[1],
            oldKeyId: updatedKeysMap[name[0]].oldKeyId,
            id: updatedKeysMap[name[0]].id,
            data: updatedKeysMap[name[0]].data
          }), internalSideEffectStack);
        }
      },
      [SPMessage.OP_PROTOCOL_UPGRADE]: notImplemented
    };
    if (!this.config.skipActionProcessing && !this.manifestToContract[manifestHash]) {
      const rootState = esm_default(this.config.stateSelector);
      if (!contractName) {
        contractName = has(rootState.contracts, contractID) && rootState.contracts[contractID] && has(rootState.contracts[contractID], "type") ? rootState.contracts[contractID].type : opT === SPMessage.OP_CONTRACT ? opV.type : "";
      }
      if (!contractName) {
        throw new Error(`Unable to determine the name for a contract and refusing to load it (contract ID was ${contractID} and its manifest hash was ${manifestHash})`);
      }
      await esm_default("chelonia/private/loadManifest", contractName, manifestHash);
    }
    let processOp = true;
    if (config2.preOp) {
      processOp = config2.preOp(message, state) !== false && processOp;
    }
    let signingKey;
    {
      const stateForValidation = opT === SPMessage.OP_CONTRACT && !state?._vm?.authorizedKeys ? {
        _vm: {
          authorizedKeys: keysToMap.call(this, opV.keys, height)
        }
      } : state;
      if (!validateKeyPermissions(message, config2, stateForValidation, signingKeyId, opT, opV)) {
        throw new Error("No matching signing key was defined");
      }
      signingKey = stateForValidation._vm.authorizedKeys[signingKeyId];
    }
    if (config2[`preOp_${opT}`]) {
      processOp = config2[`preOp_${opT}`](message, state) !== false && processOp;
    }
    if (processOp) {
      await opFns[opT](opV);
      config2.postOp?.(message, state);
      config2[`postOp_${opT}`]?.(message, state);
    }
  },
  "chelonia/private/in/enqueueHandleEvent": function(contractID, event) {
    return esm_default("chelonia/private/queueEvent", contractID, async () => {
      await esm_default("chelonia/private/in/handleEvent", contractID, event);
      esm_default("chelonia/private/enqueuePostSyncOps", contractID);
    });
  },
  "chelonia/private/in/syncContract": async function(contractID, params) {
    const state = esm_default(this.config.stateSelector);
    if (state.contracts[contractID] === null) {
      throw new ChelErrorResourceGone("Cannot sync permanently deleted contract " + contractID);
    }
    try {
      this.currentSyncs[contractID] = { firstSync: !state.contracts[contractID]?.type };
      esm_default("okTurtles.events/emit", CONTRACT_IS_SYNCING, contractID, true);
      const currentVolatileState = state[contractID]?._volatile || /* @__PURE__ */ Object.create(null);
      if (currentVolatileState?.dirty || params?.resync) {
        delete currentVolatileState.dirty;
        currentVolatileState.resyncing = true;
        esm_default("chelonia/private/removeImmediately", contractID, { resync: true });
        this.config.reactiveSet(state, contractID, /* @__PURE__ */ Object.create(null));
        this.config.reactiveSet(state[contractID], "_volatile", currentVolatileState);
      }
      const { HEAD: latestHEAD } = await esm_default("chelonia/out/latestHEADInfo", contractID);
      console.debug(`[chelonia] syncContract: ${contractID} latestHash is: ${latestHEAD}`);
      const { HEAD: recentHEAD, height: recentHeight } = state.contracts[contractID] || {};
      const isSubscribed = this.subscriptionSet.has(contractID);
      if (!isSubscribed) {
        const entry = this.pending.find((entry2) => entry2?.contractID === contractID);
        if (!entry) {
          this.pending.push({ contractID });
        }
      }
      this.postSyncOperations[contractID] = this.postSyncOperations[contractID] ?? /* @__PURE__ */ Object.create(null);
      if (latestHEAD !== recentHEAD) {
        console.debug(`[chelonia] Synchronizing Contract ${contractID}: our recent was ${recentHEAD || "undefined"} but the latest is ${latestHEAD}`);
        const eventsStream = esm_default("chelonia/out/eventsAfter", contractID, {
          sinceHeight: recentHeight ?? 0,
          sinceHash: recentHEAD ?? contractID
        });
        let latestHashFound = false;
        const eventReader = eventsStream.getReader();
        for (let skip = has(state.contracts, contractID) && has(state.contracts[contractID], "HEAD"); ; skip = false) {
          const { done, value: event } = await eventReader.read();
          if (done) {
            if (!latestHashFound) {
              throw new ChelErrorForkedChain(`expected hash ${latestHEAD} in list of events for contract ${contractID}`);
            }
            break;
          }
          if (!latestHashFound) {
            latestHashFound = SPMessage.deserializeHEAD(event).hash === latestHEAD;
          }
          if (skip)
            continue;
          await esm_default("chelonia/private/in/handleEvent", contractID, event);
        }
      } else if (!isSubscribed) {
        this.subscriptionSet.add(contractID);
        esm_default("okTurtles.events/emit", CONTRACTS_MODIFIED, Array.from(this.subscriptionSet), {
          added: [contractID],
          removed: []
        });
        const entryIndex = this.pending.findIndex((entry) => entry?.contractID === contractID);
        if (entryIndex !== -1) {
          this.pending.splice(entryIndex, 1);
        }
        console.debug(`[chelonia] added already synchronized ${contractID} to subscription set`);
      } else {
        console.debug(`[chelonia] contract ${contractID} was already synchronized`);
      }
      esm_default("chelonia/private/enqueuePostSyncOps", contractID);
    } catch (e2) {
      console.error(`[chelonia] syncContract error: ${e2.message || e2}`, e2);
      this.config.hooks.syncContractError?.(e2, contractID);
      throw e2;
    } finally {
      if (state[contractID]?._volatile?.resyncing) {
        this.config.reactiveDel(state[contractID]._volatile, "resyncing");
      }
      delete this.currentSyncs[contractID];
      esm_default("okTurtles.events/emit", CONTRACT_IS_SYNCING, contractID, false);
    }
  },
  "chelonia/private/enqueuePostSyncOps": function(contractID) {
    if (!has(this.postSyncOperations, contractID))
      return;
    Object.entries(this.postSyncOperations[contractID]).forEach(([key, op]) => {
      delete this.postSyncOperations[contractID][key];
      esm_default("chelonia/private/queueEvent", contractID, op).catch((e2) => {
        console.error(`Post-sync operation for ${contractID} failed`, { contractID, op, error: e2 });
      });
    });
  },
  "chelonia/private/watchForeignKeys": function(externalContractID) {
    const state = esm_default(this.config.stateSelector);
    const externalContractState = state[externalContractID];
    const pendingWatch = externalContractState?._vm?.pendingWatch;
    if (!pendingWatch || !Object.keys(pendingWatch).length)
      return;
    const signingKey = findSuitableSecretKeyId(externalContractState, [SPMessage.OP_KEY_DEL], ["sig"]);
    const canMirrorOperations = !!signingKey;
    if (!canMirrorOperations) {
      console.info("[chelonia/private/watchForeignKeys]: Returning as operations cannot be mirrored", { externalContractID });
      return;
    }
    Object.entries(pendingWatch).forEach(([contractID, keys]) => {
      if (!Array.isArray(keys) || // Check that the keys exist and haven't been revoked
      !keys.reduce((acc, [, id]) => {
        return acc || has(externalContractState._vm.authorizedKeys, id);
      }, false)) {
        console.info("[chelonia/private/watchForeignKeys]: Skipping as none of the keys to watch exist", {
          externalContractID,
          contractID
        });
        return;
      }
      esm_default("chelonia/private/queueEvent", contractID, [
        "chelonia/private/in/syncContractAndWatchKeys",
        contractID,
        externalContractID
      ]).catch((e2) => {
        console.error(`Error at syncContractAndWatchKeys for contractID ${contractID} and externalContractID ${externalContractID}`, e2);
      });
    });
  },
  "chelonia/private/in/syncContractAndWatchKeys": async function(contractID, externalContractID) {
    const rootState = esm_default(this.config.stateSelector);
    const externalContractState = rootState[externalContractID];
    const pendingWatch = externalContractState?._vm?.pendingWatch?.[contractID]?.splice(0);
    if (!Array.isArray(pendingWatch) || // Check that the keys exist and haven't been revoked
    !pendingWatch.reduce((acc, [, id]) => {
      return acc || has(externalContractState._vm.authorizedKeys, id) && findKeyIdByName(externalContractState, externalContractState._vm.authorizedKeys[id].name) != null;
    }, false)) {
      console.info("[chelonia/private/syncContractAndWatchKeys]: Skipping as none of the keys to watch exist", {
        externalContractID,
        contractID
      });
      return;
    }
    if (!this.subscriptionSet.has(contractID)) {
      await esm_default("chelonia/private/in/syncContract", contractID);
    }
    const contractState = rootState[contractID];
    const keysToDelete = [];
    const keysToUpdate = [];
    pendingWatch.forEach(([keyName, externalId]) => {
      const keyId2 = findKeyIdByName(contractState, keyName);
      if (!keyId2) {
        keysToDelete.push(externalId);
        return;
      } else if (keyId2 !== externalId) {
        keysToUpdate.push(externalId);
      }
      if (!contractState._volatile) {
        this.config.reactiveSet(contractState, "_volatile", Object.create(null, {
          watch: {
            value: [[keyName, externalContractID]],
            configurable: true,
            enumerable: true,
            writable: true
          }
        }));
      } else {
        if (!contractState._volatile.watch) {
          this.config.reactiveSet(contractState._volatile, "watch", [
            [keyName, externalContractID]
          ]);
        }
        if (Array.isArray(contractState._volatile.watch) && !contractState._volatile.watch.find((v2) => v2[0] === keyName && v2[1] === externalContractID)) {
          contractState._volatile.watch.push([keyName, externalContractID]);
        }
      }
    });
    if (keysToDelete.length || keysToUpdate.length) {
      if (!externalContractState._volatile) {
        this.config.reactiveSet(externalContractState, "_volatile", /* @__PURE__ */ Object.create(null));
      }
      if (!externalContractState._volatile.pendingKeyRevocations) {
        this.config.reactiveSet(externalContractState._volatile, "pendingKeyRevocations", /* @__PURE__ */ Object.create(null));
      }
      keysToDelete.forEach((id) => this.config.reactiveSet(externalContractState._volatile.pendingKeyRevocations, id, "del"));
      keysToUpdate.forEach((id) => this.config.reactiveSet(externalContractState._volatile.pendingKeyRevocations, id, true));
      esm_default("chelonia/private/queueEvent", externalContractID, [
        "chelonia/private/deleteOrRotateRevokedKeys",
        externalContractID
      ]).catch((e2) => {
        console.error(`Error at deleteOrRotateRevokedKeys for contractID ${contractID} and externalContractID ${externalContractID}`, e2);
      });
    }
  },
  // The following function gets called when we start watching a contract for
  // foreign keys for the first time, and it ensures that, at the point the
  // watching starts, keys are in sync between the two contracts (later on,
  // this will be handled automatically for incoming OP_KEY_DEL and
  // OP_KEY_UPDATE).
  // For any given foreign key, there are three possible states:
  //   1. The key is in sync with the foreign contract. In this case, there's
  //      nothing left to do.
  //   2. The key has been rotated in the foreign contract (replaced by another
  //      key of the same name). We need to mirror this operation manually
  //      since watching only affects new messages we receive.
  //   3. The key has been removed in the foreign contract. We also need to
  //      mirror the operation.
  "chelonia/private/deleteOrRotateRevokedKeys": function(contractID) {
    const rootState = esm_default(this.config.stateSelector);
    const contractState = rootState[contractID];
    const pendingKeyRevocations = contractState?._volatile?.pendingKeyRevocations;
    if (!pendingKeyRevocations || Object.keys(pendingKeyRevocations).length === 0)
      return;
    const keysToUpdate = Object.entries(pendingKeyRevocations).filter(([, v2]) => v2 === true).map(([id]) => id);
    const [, keyUpdateSigningKeyId, keyUpdateArgs] = keysToUpdate.reduce((acc, keyId2) => {
      const key = contractState._vm?.authorizedKeys?.[keyId2];
      if (!key || !key.foreignKey)
        return acc;
      const foreignKey = String(key.foreignKey);
      const fkUrl = new URL(foreignKey);
      const foreignContractID = fkUrl.pathname;
      const foreignKeyName = fkUrl.searchParams.get("keyName");
      if (!foreignKeyName)
        throw new Error("Missing foreign key name");
      const foreignState = rootState[foreignContractID];
      if (!foreignState)
        return acc;
      const fKeyId = findKeyIdByName(foreignState, foreignKeyName);
      if (!fKeyId) {
        if (pendingKeyRevocations[keyId2] === true) {
          this.config.reactiveSet(pendingKeyRevocations, keyId2, "del");
        }
        return acc;
      }
      const [currentRingLevel, currentSigningKeyId, currentKeyArgs] = acc;
      const ringLevel = Math.min(currentRingLevel, key.ringLevel ?? Number.POSITIVE_INFINITY);
      if (ringLevel >= currentRingLevel) {
        currentKeyArgs.push({
          name: key.name,
          oldKeyId: keyId2,
          id: fKeyId,
          data: foreignState._vm.authorizedKeys[fKeyId].data
        });
        return [currentRingLevel, currentSigningKeyId, currentKeyArgs];
      } else if (Number.isFinite(ringLevel)) {
        const signingKeyId = findSuitableSecretKeyId(contractState, [SPMessage.OP_KEY_UPDATE], ["sig"], ringLevel);
        if (signingKeyId) {
          currentKeyArgs.push({
            name: key.name,
            oldKeyId: keyId2,
            id: fKeyId,
            data: foreignState._vm.authorizedKeys[fKeyId].data
          });
          return [ringLevel, signingKeyId, currentKeyArgs];
        }
      }
      return acc;
    }, [
      Number.POSITIVE_INFINITY,
      "",
      []
    ]);
    if (keyUpdateArgs.length !== 0) {
      const contractName = contractState._vm.type;
      esm_default("chelonia/out/keyUpdate", {
        contractID,
        contractName,
        data: keyUpdateArgs,
        signingKeyId: keyUpdateSigningKeyId
      }).catch((e2) => {
        console.error(`[chelonia/private/deleteOrRotateRevokedKeys] Error sending OP_KEY_UPDATE for ${contractID}`, e2.message);
      });
    }
    const keysToDelete = Object.entries(pendingKeyRevocations).filter(([, v2]) => v2 === "del").map(([id]) => id);
    const [, keyDelSigningKeyId, keyIdsToDelete] = keysToDelete.reduce((acc, keyId2) => {
      const [currentRingLevel, currentSigningKeyId, currentKeyIds] = acc;
      const ringLevel = Math.min(currentRingLevel, contractState._vm?.authorizedKeys?.[keyId2]?.ringLevel ?? Number.POSITIVE_INFINITY);
      if (ringLevel >= currentRingLevel) {
        currentKeyIds.push(keyId2);
        return [currentRingLevel, currentSigningKeyId, currentKeyIds];
      } else if (Number.isFinite(ringLevel)) {
        const signingKeyId = findSuitableSecretKeyId(contractState, [SPMessage.OP_KEY_DEL], ["sig"], ringLevel);
        if (signingKeyId) {
          currentKeyIds.push(keyId2);
          return [ringLevel, signingKeyId, currentKeyIds];
        }
      }
      return acc;
    }, [Number.POSITIVE_INFINITY, "", []]);
    if (keyIdsToDelete.length !== 0) {
      const contractName = contractState._vm.type;
      esm_default("chelonia/out/keyDel", {
        contractID,
        contractName,
        data: keyIdsToDelete,
        signingKeyId: keyDelSigningKeyId
      }).catch((e2) => {
        console.error(`[chelonia/private/deleteRevokedKeys] Error sending OP_KEY_DEL for ${contractID}`, e2.message);
      });
    }
  },
  "chelonia/private/respondToAllKeyRequests": function(contractID) {
    const state = esm_default(this.config.stateSelector);
    const contractState = state[contractID] ?? {};
    const pending = contractState?._vm?.pendingKeyshares;
    if (!pending)
      return;
    const signingKeyId = findSuitableSecretKeyId(contractState, [SPMessage.OP_ATOMIC, SPMessage.OP_KEY_REQUEST_SEEN, SPMessage.OP_KEY_SHARE], ["sig"]);
    if (!signingKeyId) {
      console.log("Unable to respond to key request because there is no suitable secret key with OP_KEY_REQUEST_SEEN permission");
      return;
    }
    Object.entries(pending).map(([hash, entry]) => {
      if (!Array.isArray(entry) || entry.length !== 4) {
        return void 0;
      }
      const [, , , [originatingContractID]] = entry;
      return esm_default("chelonia/private/queueEvent", originatingContractID, [
        "chelonia/private/respondToKeyRequest",
        contractID,
        signingKeyId,
        hash
      ]).catch((e2) => {
        console.error(`respondToAllKeyRequests: Error responding to key request ${hash} from ${originatingContractID} to ${contractID}`, e2);
      });
    });
  },
  "chelonia/private/respondToKeyRequest": async function(contractID, signingKeyId, hash) {
    const state = esm_default(this.config.stateSelector);
    const contractState = state[contractID];
    const entry = contractState?._vm?.pendingKeyshares?.[hash];
    const instance = this._instance;
    if (!Array.isArray(entry) || entry.length !== 4) {
      return;
    }
    const [keyShareEncryption, height, , [originatingContractID, rv, originatingContractHeight, headJSON]] = entry;
    entry.pop();
    const krsEncryption = !!contractState._vm.authorizedKeys?.[signingKeyId]?._private;
    await esm_default("chelonia/private/in/syncContract", originatingContractID);
    if (instance !== this._instance)
      return;
    const originatingState = state[originatingContractID];
    const contractName = state.contracts[contractID].type;
    const originatingContractName = originatingState._vm.type;
    const v2 = signedIncomingData(originatingContractID, originatingState, rv, originatingContractHeight, headJSON).valueOf();
    const { encryptionKeyId } = v2;
    const responseKey = encryptedIncomingData(contractID, contractState, v2.responseKey, height, this.transientSecretKeys, headJSON).valueOf();
    const deserializedResponseKey = deserializeKey(responseKey);
    const responseKeyId = keyId(deserializedResponseKey);
    Promise.resolve().then(() => {
      if (instance !== this._instance)
        return;
      if (!has(originatingState._vm.authorizedKeys, responseKeyId) || originatingState._vm.authorizedKeys[responseKeyId]._notAfterHeight != null) {
        throw new Error(`Unable to respond to key request for ${originatingContractID}. Key ${responseKeyId} is not valid.`);
      }
      esm_default("chelonia/storeSecretKeys", new Secret([{ key: deserializedResponseKey }]));
      const keys = pick(state.secretKeys, Object.entries(contractState._vm.authorizedKeys).filter(([, key]) => !!key.meta?.private?.shareable).map(([kId]) => kId));
      if (!keys || Object.keys(keys).length === 0) {
        console.info("respondToAllKeyRequests: no keys to share", {
          contractID,
          originatingContractID
        });
        return;
      }
      const keySharePayload = {
        contractID,
        keys: Object.entries(keys).map(([keyId2, key]) => ({
          id: keyId2,
          meta: {
            private: {
              content: encryptedOutgoingData(originatingContractID, encryptionKeyId, key),
              shareable: true
            }
          }
        })),
        keyRequestHash: hash,
        keyRequestHeight: height
      };
      if (!contractState?._vm?.pendingKeyshares?.[hash]) {
        return;
      }
      return keySharePayload;
    }).then((keySharePayload) => {
      if (instance !== this._instance || !keySharePayload)
        return;
      return esm_default("chelonia/out/keyShare", {
        contractID: originatingContractID,
        contractName: originatingContractName,
        data: keyShareEncryption ? encryptedOutgoingData(originatingContractID, findSuitablePublicKeyIds(originatingState, [SPMessage.OP_KEY_SHARE], ["enc"])?.[0] || "", keySharePayload) : keySharePayload,
        signingKeyId: responseKeyId
      }).then((msg) => {
        if (instance !== this._instance)
          return;
        const payload = { keyRequestHash: hash, keyShareHash: msg.hash(), success: true };
        const connectionKeyPayload = {
          contractID: originatingContractID,
          keys: [
            {
              id: responseKeyId,
              meta: {
                private: {
                  content: encryptedOutgoingData(contractID, findSuitablePublicKeyIds(contractState, [SPMessage.OP_KEY_REQUEST_SEEN], ["enc"])?.[0] || "", responseKey),
                  shareable: true
                }
              }
            }
          ]
        };
        esm_default("chelonia/out/atomic", {
          contractID,
          contractName,
          signingKeyId,
          data: [
            [
              "chelonia/out/keyRequestResponse",
              {
                data: krsEncryption ? encryptedOutgoingData(contractID, findSuitablePublicKeyIds(contractState, [SPMessage.OP_KEY_REQUEST_SEEN], ["enc"])?.[0] || "", payload) : payload
              }
            ],
            [
              // Upon successful key share, we want to share deserializedResponseKey
              // with ourselves
              "chelonia/out/keyShare",
              {
                data: keyShareEncryption ? encryptedOutgoingData(contractID, findSuitablePublicKeyIds(contractState, [SPMessage.OP_KEY_SHARE], ["enc"])?.[0] || "", connectionKeyPayload) : connectionKeyPayload
              }
            ]
          ]
        }).catch((e2) => {
          console.error("Error at respondToKeyRequest while sending keyRequestResponse", e2);
        });
      });
    }).catch((e2) => {
      console.error("Error at respondToKeyRequest", e2);
      const payload = { keyRequestHash: hash, success: false };
      if (!contractState?._vm?.pendingKeyshares?.[hash]) {
        return;
      }
      esm_default("chelonia/out/keyRequestResponse", {
        contractID,
        contractName,
        signingKeyId,
        data: krsEncryption ? encryptedOutgoingData(contractID, findSuitablePublicKeyIds(contractState, [SPMessage.OP_KEY_REQUEST_SEEN], ["enc"])?.[0] || "", payload) : payload
      }).catch((e3) => {
        console.error("Error at respondToKeyRequest while sending keyRequestResponse in error handler", e3);
      });
    });
  },
  "chelonia/private/in/handleEvent": async function(contractID, rawMessage) {
    const state = esm_default(this.config.stateSelector);
    const { preHandleEvent, postHandleEvent, handleEventError } = this.config.hooks;
    let processingErrored = false;
    let message;
    try {
      if (!this.config.acceptAllMessages && !this.pending.some((entry) => entry?.contractID === contractID) && !this.subscriptionSet.has(contractID)) {
        console.warn(`[chelonia] WARN: ignoring unexpected event for ${contractID}:`, rawMessage);
        return;
      }
      const contractStateCopy = state[contractID] ? cloneDeep(state[contractID]) : /* @__PURE__ */ Object.create(null);
      message = SPMessage.deserialize(rawMessage, this.transientSecretKeys, contractStateCopy, this.config.unwrapMaybeEncryptedData);
      if (message.contractID() !== contractID) {
        throw new Error(`[chelonia] Wrong contract ID. Expected ${contractID} but got ${message.contractID()}`);
      }
      if (!message.isFirstMessage() && (!has(state.contracts, contractID) || !has(state, contractID))) {
        throw new ChelErrorUnrecoverable("The event is not for a first message but the contract state is missing");
      }
      preHandleEvent?.(message);
      const proceed = handleEvent.checkMessageOrdering.call(this, message);
      if (proceed === false)
        return;
      if (state[contractID]?._volatile?.dirty) {
        console.info(`[chelonia] Ignoring message ${message.description()} as the contract is marked as dirty`);
        return;
      }
      const internalSideEffectStack = !this.config.skipSideEffects ? [] : void 0;
      missingDecryptionKeyIdsMap.delete(message);
      try {
        await handleEvent.processMutation.call(this, message, contractStateCopy, internalSideEffectStack);
      } catch (e_) {
        const e2 = e_;
        if (e2?.name === "ChelErrorDecryptionKeyNotFound") {
          console.warn(`[chelonia] WARN '${e2.name}' in processMutation for ${message.description()}: ${e2.message}`, e2, message.serialize());
          if (e2.cause) {
            const missingDecryptionKeyIds = missingDecryptionKeyIdsMap.get(message);
            if (missingDecryptionKeyIds) {
              missingDecryptionKeyIds.add(e2.cause);
            } else {
              missingDecryptionKeyIdsMap.set(message, /* @__PURE__ */ new Set([e2.cause]));
            }
          }
        } else {
          console.error(`[chelonia] ERROR '${e2.name}' in processMutation for ${message.description()}: ${e2.message || e2}`, e2, message.serialize());
        }
        console.warn(`[chelonia] Error processing ${message.description()}: ${message.serialize()}. Any side effects will be skipped!`);
        if (this.config.strictProcessing) {
          throw e2;
        }
        processingErrored = e2?.name !== "ChelErrorWarning";
        this.config.hooks.processError?.(e2, message, getMsgMeta.call(this, message, contractID, contractStateCopy));
        if (e2.name === "ChelErrorUnrecoverable" || e2.name === "ChelErrorForkedChain" || message.isFirstMessage()) {
          throw e2;
        }
      }
      if (!processingErrored) {
        if (Array.isArray(internalSideEffectStack) && internalSideEffectStack.length > 0) {
          await Promise.all(internalSideEffectStack.map((fn) => Promise.resolve(fn({ state: contractStateCopy, message })).catch((e_) => {
            const e2 = e_;
            console.error(`[chelonia] ERROR '${e2.name}' in internal side effect for ${message.description()}: ${e2.message}`, e2, { message: message.serialize() });
          })));
        }
        if (!this.config.skipActionProcessing && !this.config.skipSideEffects) {
          await handleEvent.processSideEffects.call(this, message, contractStateCopy)?.catch((e_) => {
            const e2 = e_;
            console.error(`[chelonia] ERROR '${e2.name}' in sideEffect for ${message.description()}: ${e2.message}`, e2, { message: message.serialize() });
            this.config.hooks.sideEffectError?.(e2, message);
          });
        }
      }
      try {
        const state2 = esm_default(this.config.stateSelector);
        await handleEvent.applyProcessResult.call(this, {
          message,
          state: state2,
          contractState: contractStateCopy,
          processingErrored,
          postHandleEvent
        });
      } catch (e_) {
        const e2 = e_;
        console.error(`[chelonia] ERROR '${e2.name}' for ${message.description()} marking the event as processed: ${e2.message}`, e2, { message: message.serialize() });
      }
    } catch (e_) {
      const e2 = e_;
      console.error(`[chelonia] ERROR in handleEvent: ${e2.message || e2}`, e2);
      try {
        handleEventError?.(e2, message);
      } catch (e22) {
        console.error("[chelonia] Ignoring user error in handleEventError hook:", e22);
      }
      throw e2;
    } finally {
      if (message) {
        missingDecryptionKeyIdsMap.delete(message);
      }
    }
  }
});
var eventsToReingest = [];
var reprocessDebounced = debounce((contractID) => esm_default("chelonia/private/out/sync", contractID, { force: true }).catch((e2) => {
  console.error(`[chelonia] Error at reprocessDebounced for ${contractID}`, e2);
}), 1e3);
var handleEvent = {
  checkMessageOrdering(message) {
    const contractID = message.contractID();
    const hash = message.hash();
    const height = message.height();
    const state = esm_default(this.config.stateSelector);
    const latestProcessedHeight = state.contracts[contractID]?.height;
    if (!Number.isSafeInteger(height)) {
      throw new ChelErrorDBBadPreviousHEAD(`Message ${hash} in contract ${contractID} has an invalid height.`);
    }
    if (message.isFirstMessage() ? latestProcessedHeight != null : !(latestProcessedHeight < height)) {
      if (!this.config.strictOrdering) {
        return false;
      }
      throw new ChelErrorAlreadyProcessed(`Message ${hash} with height ${height} in contract ${contractID} has already been processed. Current height: ${latestProcessedHeight}.`);
    }
    if (latestProcessedHeight + 1 < height) {
      if (this.config.strictOrdering) {
        throw new ChelErrorDBBadPreviousHEAD(`Unexpected message ${hash} with height ${height} in contract ${contractID}: height is too high. Current height: ${latestProcessedHeight}.`);
      }
      if (eventsToReingest.length > 100) {
        throw new ChelErrorUnrecoverable("more than 100 different bad previousHEAD errors");
      }
      if (!eventsToReingest.includes(hash)) {
        console.warn(`[chelonia] WARN bad previousHEAD for ${message.description()}, will attempt to re-sync contract to reingest message`);
        eventsToReingest.push(hash);
        reprocessDebounced(contractID);
        return false;
      } else {
        console.error(`[chelonia] ERROR already attempted to reingest ${message.description()}, will not attempt again!`);
        throw new ChelErrorDBBadPreviousHEAD(`Already attempted to reingest ${hash}`);
      }
    }
    const reprocessIdx = eventsToReingest.indexOf(hash);
    if (reprocessIdx !== -1) {
      console.warn(`[chelonia] WARN: successfully reingested ${message.description()}`);
      eventsToReingest.splice(reprocessIdx, 1);
    }
  },
  async processMutation(message, state, internalSideEffectStack) {
    const contractID = message.contractID();
    if (message.isFirstMessage()) {
      if (Object.keys(state).some((k) => k !== "_volatile")) {
        throw new ChelErrorUnrecoverable(`state for ${contractID} is already set`);
      }
    }
    await esm_default("chelonia/private/in/processMessage", message, state, internalSideEffectStack);
  },
  processSideEffects(message, state) {
    const opT = message.opType();
    if (![
      SPMessage.OP_ATOMIC,
      SPMessage.OP_ACTION_ENCRYPTED,
      SPMessage.OP_ACTION_UNENCRYPTED
    ].includes(opT)) {
      return;
    }
    const contractID = message.contractID();
    const manifestHash = message.manifest();
    const hash = message.hash();
    const height = message.height();
    const signingKeyId = message.signingKeyId();
    const callSideEffect = async (field) => {
      const wv = this.config.unwrapMaybeEncryptedData(field);
      if (!wv)
        return;
      let v2 = wv.data;
      let innerSigningKeyId;
      if (isSignedData(v2)) {
        innerSigningKeyId = v2.signingKeyId;
        v2 = v2.valueOf();
      }
      const { action, data, meta } = v2;
      const mutation = {
        data,
        meta,
        hash,
        height,
        contractID,
        description: message.description(),
        direction: message.direction(),
        signingKeyId,
        get signingContractID() {
          return getContractIDfromKeyId(contractID, signingKeyId, state);
        },
        innerSigningKeyId,
        get innerSigningContractID() {
          return getContractIDfromKeyId(contractID, innerSigningKeyId, state);
        }
      };
      return await esm_default(`${manifestHash}/${action}/sideEffect`, mutation, state);
    };
    const msg = Object(message.message());
    if (opT !== SPMessage.OP_ATOMIC) {
      return callSideEffect(msg);
    }
    const reducer2 = (acc, [opT2, opV]) => {
      if ([SPMessage.OP_ACTION_ENCRYPTED, SPMessage.OP_ACTION_UNENCRYPTED].includes(opT2)) {
        acc.push(Object(opV));
      }
      return acc;
    };
    const actionsOpV = msg.reduce(reducer2, []);
    return Promise.allSettled(actionsOpV.map((action) => callSideEffect(action))).then((results) => {
      const errors = results.filter((r) => r.status === "rejected").map((r) => r.reason);
      if (errors.length > 0) {
        console.error("Side-effect errors", contractID, errors);
        throw new AggregateError(errors, `Error at side effects for ${contractID}`);
      }
    });
  },
  async applyProcessResult({ message, state, contractState, processingErrored, postHandleEvent }) {
    const contractID = message.contractID();
    const hash = message.hash();
    const height = message.height();
    await esm_default("chelonia/db/addEntry", message);
    if (!processingErrored) {
      this.config.reactiveSet(state, contractID, contractState);
      try {
        postHandleEvent?.(message);
      } catch (e2) {
        console.error(`[chelonia] ERROR '${e2.name}' for ${message.description()} in event post-handling: ${e2.message}`, e2, { message: message.serialize() });
      }
    }
    if (message.isFirstMessage()) {
      const { type } = message.opValue();
      if (!has(state.contracts, contractID)) {
        this.config.reactiveSet(state.contracts, contractID, /* @__PURE__ */ Object.create(null));
      }
      this.config.reactiveSet(state.contracts[contractID], "type", type);
      console.debug(`contract ${type} registered for ${contractID}`);
    }
    if (message.isKeyOp()) {
      this.config.reactiveSet(state.contracts[contractID], "previousKeyOp", hash);
    }
    this.config.reactiveSet(state.contracts[contractID], "HEAD", hash);
    this.config.reactiveSet(state.contracts[contractID], "height", height);
    const missingDecryptionKeyIdsForMessage = missingDecryptionKeyIdsMap.get(message);
    if (missingDecryptionKeyIdsForMessage) {
      let missingDecryptionKeyIds = state.contracts[contractID].missingDecryptionKeyIds;
      if (!missingDecryptionKeyIds) {
        missingDecryptionKeyIds = [];
        this.config.reactiveSet(state.contracts[contractID], "missingDecryptionKeyIds", missingDecryptionKeyIds);
      }
      missingDecryptionKeyIdsForMessage.forEach((keyId2) => {
        if (missingDecryptionKeyIds.includes(keyId2))
          return;
        missingDecryptionKeyIds.push(keyId2);
      });
    }
    if (!this.subscriptionSet.has(contractID)) {
      const entry = this.pending.find((entry2) => entry2?.contractID === contractID);
      if (entry) {
        const index = this.pending.indexOf(entry);
        if (index !== -1) {
          this.pending.splice(index, 1);
        }
      }
      this.subscriptionSet.add(contractID);
      esm_default("okTurtles.events/emit", CONTRACTS_MODIFIED, Array.from(this.subscriptionSet), {
        added: [contractID],
        removed: []
      });
    }
    if (!processingErrored) {
      esm_default("okTurtles.events/emit", hash, contractID, message);
      esm_default("okTurtles.events/emit", EVENT_HANDLED, contractID, message);
    }
  }
};
var notImplemented = (v2) => {
  throw new Error(`chelonia: action not implemented to handle: ${JSON.stringify(v2)}.`);
};

// node_modules/@chelonia/lib/dist/esm/time-sync.mjs
var wallBase = Date.now();
var monotonicBase = performance.now();
var resyncTimeout;
var watchdog;
var syncServerTime = async function() {
  const startTime = performance.now();
  const time = await this.config.fetch(`${this.config.connectionURL}/time`, {
    signal: this.abortController.signal
  });
  const requestTimeElapsed = performance.now();
  if (requestTimeElapsed - startTime > 8e3) {
    throw new Error("Error fetching server time: request took too long");
  }
  if (!time.ok)
    throw new Error("Error fetching server time");
  const serverTime = new Date(await time.text()).valueOf();
  if (Number.isNaN(serverTime))
    throw new Error("Unable to parse server time");
  const newMonotonicBase = performance.now();
  wallBase = serverTime + (requestTimeElapsed - startTime) / 2 + // Also take into account the time elapsed between `requestTimeElapsed`
  // and this line (which should be very little)
  (newMonotonicBase - requestTimeElapsed);
  monotonicBase = newMonotonicBase;
};
var time_sync_default = esm_default("sbp/selectors/register", {
  "chelonia/private/startClockSync": function() {
    if (resyncTimeout !== void 0) {
      throw new Error("chelonia/private/startClockSync has already been called");
    }
    const resync = (delay2 = 3e5) => {
      if (resyncTimeout !== null)
        return;
      const timeout = setTimeout(() => {
        syncServerTime.call(this).then(() => {
          if (resyncTimeout === timeout)
            resyncTimeout = null;
          resync();
        }).catch((e2) => {
          if (resyncTimeout === timeout) {
            resyncTimeout = null;
            console.error("Error re-syncing server time; will re-attempt in 5s", e2);
            setTimeout(() => resync(0), 5e3);
          } else {
            console.error("Error re-syncing server time; another attempt is in progress", e2);
          }
        });
      }, delay2);
      resyncTimeout = timeout;
    };
    let wallLast = Date.now();
    let monotonicLast = performance.now();
    watchdog = setInterval(() => {
      const wallNow = Date.now();
      const monotonicNow = performance.now();
      const difference2 = Math.abs(Math.abs(wallNow - wallLast) - Math.abs(monotonicNow - monotonicLast));
      if (difference2 > 10) {
        if (resyncTimeout != null)
          clearTimeout(resyncTimeout);
        resyncTimeout = null;
        resync(0);
      }
      wallLast = wallNow;
      monotonicLast = monotonicNow;
    }, 1e4);
    resyncTimeout = null;
    resync(0);
  },
  "chelonia/private/stopClockSync": () => {
    if (resyncTimeout !== void 0) {
      if (watchdog != null)
        clearInterval(watchdog);
      if (resyncTimeout != null)
        clearTimeout(resyncTimeout);
      watchdog = void 0;
      resyncTimeout = void 0;
    }
  },
  // Get an estimate of the server's current time based on the time elapsed as
  // measured locally (using a monotonic clock), which is used as an offset, and
  // a previously retrieved server time. The time value is returned as a UNIX
  // _millisecond_ timestamp (milliseconds since 1 Jan 1970 00:00:00 UTC)
  "chelonia/time": function() {
    const monotonicNow = performance.now();
    const wallNow = wallBase - monotonicBase + monotonicNow;
    return Math.round(wallNow);
  }
});

// node_modules/@chelonia/lib/dist/esm/chelonia.mjs
var ACTION_REGEX = /^((([\w.]+)\/([^/]+))(?:\/(?:([^/]+)\/)?)?)\w*/;
var chelonia_default = esm_default("sbp/selectors/register", {
  // https://www.wordnik.com/words/chelonia
  // https://gitlab.okturtles.org/okturtles/group-income/-/wikis/E2E-Protocol/Framework.md#alt-names
  "chelonia/_init": function() {
    this.config = {
      // TODO: handle connecting to multiple servers for federation
      get connectionURL() {
        throw new Error("Invalid use of connectionURL before initialization");
      },
      // override!
      set connectionURL(value) {
        Object.defineProperty(this, "connectionURL", { value, writable: true });
      },
      stateSelector: "chelonia/private/state",
      // override to integrate with, for example, vuex
      contracts: {
        defaults: {
          modules: {},
          // '<module name>' => resolved module import
          exposedGlobals: {},
          allowedDomains: [],
          allowedSelectors: [],
          preferSlim: false
        },
        overrides: {},
        // override default values per-contract
        manifests: {}
        // override! contract names => manifest hashes
      },
      whitelisted: (action) => !!this.whitelistedActions[action],
      reactiveSet: (obj, key, value) => {
        obj[key] = value;
        return value;
      },
      // example: set to Vue.set
      fetch: (...args) => fetch(...args),
      reactiveDel: (obj, key) => {
        delete obj[key];
      },
      // acceptAllMessages disables checking whether we are expecting a message
      // or not for processing
      acceptAllMessages: false,
      skipActionProcessing: false,
      skipDecryptionAttempts: false,
      skipSideEffects: false,
      // Strict processing will treat all processing errors as unrecoverable
      // This is useful, e.g., in the server, to prevent invalid messages from
      // being added to the database
      strictProcessing: false,
      // Strict ordering will throw on past events with ChelErrorAlreadyProcessed
      // Similarly, future events will not be reingested and will throw
      // with ChelErrorDBBadPreviousHEAD
      strictOrdering: false,
      connectionOptions: {
        maxRetries: Infinity,
        // See https://github.com/okTurtles/group-income/issues/1183
        reconnectOnTimeout: true
        // can be enabled since we are not doing auth via web sockets
      },
      hooks: {
        preHandleEvent: null,
        // async (message: SPMessage) => {}
        postHandleEvent: null,
        // async (message: SPMessage) => {}
        processError: null,
        // (e: Error, message: SPMessage) => {}
        sideEffectError: null,
        // (e: Error, message: SPMessage) => {}
        handleEventError: null,
        // (e: Error, message: SPMessage) => {}
        syncContractError: null,
        // (e: Error, contractID: string) => {}
        pubsubError: null
        // (e:Error, socket: Socket)
      },
      unwrapMaybeEncryptedData
    };
    this._instance = /* @__PURE__ */ Object.create(null);
    this.abortController = new AbortController();
    this.state = {
      contracts: {},
      // contractIDs => { type, HEAD } (contracts we've subscribed to)
      pending: []
      // prevents processing unexpected data from a malicious server
    };
    this.manifestToContract = {};
    this.whitelistedActions = {};
    this.currentSyncs = /* @__PURE__ */ Object.create(null);
    this.postSyncOperations = /* @__PURE__ */ Object.create(null);
    this.sideEffectStacks = /* @__PURE__ */ Object.create(null);
    this.sideEffectStack = (contractID) => {
      let stack = this.sideEffectStacks[contractID];
      if (!stack) {
        this.sideEffectStacks[contractID] = stack = [];
      }
      return stack;
    };
    this.setPostSyncOp = (contractID, key, op) => {
      this.postSyncOperations[contractID] = this.postSyncOperations[contractID] || /* @__PURE__ */ Object.create(null);
      this.postSyncOperations[contractID][key] = op;
    };
    const secretKeyGetter = (o2, p) => {
      if (has(o2, p))
        return o2[p];
      const rootState = esm_default(this.config.stateSelector);
      if (rootState?.secretKeys && has(rootState.secretKeys, p)) {
        const key = deserializeKey(rootState.secretKeys[p]);
        o2[p] = key;
        return key;
      }
    };
    const secretKeyList = (o2) => {
      const rootState = esm_default(this.config.stateSelector);
      const stateKeys = Object.keys(rootState?.secretKeys || {});
      return Array.from(/* @__PURE__ */ new Set([...Object.keys(o2), ...stateKeys]));
    };
    this.transientSecretKeys = new Proxy(/* @__PURE__ */ Object.create(null), {
      get: secretKeyGetter,
      ownKeys: secretKeyList
    });
    this.ephemeralReferenceCount = /* @__PURE__ */ Object.create(null);
    this.subscriptionSet = /* @__PURE__ */ new Set();
    this.pending = [];
  },
  "chelonia/config": function() {
    return {
      ...cloneDeep(this.config),
      fetch: this.config.fetch,
      reactiveSet: this.config.reactiveSet,
      reactiveDel: this.config.reactiveDel
    };
  },
  "chelonia/configure": async function(config2) {
    merge(this.config, config2);
    Object.assign(this.config.hooks, config2.hooks || {});
    if (config2.contracts) {
      Object.assign(this.config.contracts.defaults, config2.contracts.defaults || {});
      const manifests = this.config.contracts.manifests;
      console.debug("[chelonia] preloading manifests:", Object.keys(manifests));
      for (const contractName in manifests) {
        await esm_default("chelonia/private/loadManifest", contractName, manifests[contractName]);
      }
    }
    if (has(config2, "skipDecryptionAttempts")) {
      if (config2.skipDecryptionAttempts) {
        this.config.unwrapMaybeEncryptedData = (data) => {
          if (data == null)
            return;
          if (!isEncryptedData(data)) {
            return {
              encryptionKeyId: null,
              data
            };
          }
        };
      } else {
        this.config.unwrapMaybeEncryptedData = unwrapMaybeEncryptedData;
      }
    }
  },
  "chelonia/reset": async function(newState, postCleanupFn) {
    if (typeof newState === "function" && typeof postCleanupFn === "undefined") {
      postCleanupFn = newState;
      newState = void 0;
    }
    if (this.pubsub) {
      esm_default("chelonia/private/stopClockSync");
    }
    Object.keys(this.postSyncOperations).forEach((cID) => {
      esm_default("chelonia/private/enqueuePostSyncOps", cID);
    });
    await esm_default("chelonia/contract/waitPublish");
    await esm_default("chelonia/contract/wait");
    Object.keys(this.postSyncOperations).forEach((cID) => {
      esm_default("chelonia/private/enqueuePostSyncOps", cID);
    });
    await esm_default("chelonia/contract/waitPublish");
    await esm_default("chelonia/contract/wait");
    const result = await postCleanupFn?.();
    const rootState = esm_default(this.config.stateSelector);
    this._instance = /* @__PURE__ */ Object.create(null);
    this.abortController.abort();
    this.abortController = new AbortController();
    reactiveClearObject(rootState, this.config.reactiveDel);
    this.config.reactiveSet(rootState, "contracts", /* @__PURE__ */ Object.create(null));
    clearObject(this.ephemeralReferenceCount);
    this.pending.splice(0);
    clearObject(this.currentSyncs);
    clearObject(this.postSyncOperations);
    clearObject(this.sideEffectStacks);
    const removedContractIDs = Array.from(this.subscriptionSet);
    this.subscriptionSet.clear();
    esm_default("chelonia/clearTransientSecretKeys");
    esm_default("okTurtles.events/emit", CHELONIA_RESET);
    esm_default("okTurtles.events/emit", CONTRACTS_MODIFIED, Array.from(this.subscriptionSet), {
      added: [],
      removed: removedContractIDs
    });
    if (this.pubsub) {
      esm_default("chelonia/private/startClockSync");
    }
    if (newState) {
      Object.entries(newState).forEach(([key, value]) => {
        this.config.reactiveSet(rootState, key, value);
      });
    }
    return result;
  },
  "chelonia/storeSecretKeys": function(wkeys) {
    const rootState = esm_default(this.config.stateSelector);
    if (!rootState.secretKeys) {
      this.config.reactiveSet(rootState, "secretKeys", /* @__PURE__ */ Object.create(null));
    }
    let keys = wkeys.valueOf();
    if (!keys)
      return;
    if (!Array.isArray(keys))
      keys = [keys];
    keys.forEach(({ key, transient }) => {
      if (!key)
        return;
      if (typeof key === "string") {
        key = deserializeKey(key);
      }
      const id = keyId(key);
      if (!has(this.transientSecretKeys, id)) {
        this.transientSecretKeys[id] = key;
      }
      if (transient)
        return;
      if (!has(rootState.secretKeys, id)) {
        this.config.reactiveSet(rootState.secretKeys, id, serializeKey(key, true));
      }
    });
  },
  "chelonia/clearTransientSecretKeys": function(ids) {
    if (Array.isArray(ids)) {
      ids.forEach((id) => {
        delete this.transientSecretKeys[id];
      });
    } else {
      Object.keys(this.transientSecretKeys).forEach((id) => {
        delete this.transientSecretKeys[id];
      });
    }
  },
  "chelonia/haveSecretKey": function(keyId2, persistent) {
    if (!persistent && has(this.transientSecretKeys, keyId2))
      return true;
    const rootState = esm_default(this.config.stateSelector);
    return !!rootState?.secretKeys && has(rootState.secretKeys, keyId2);
  },
  "chelonia/contract/isResyncing": function(contractIDOrState) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    return !!contractIDOrState?._volatile?.dirty || !!contractIDOrState?._volatile?.resyncing;
  },
  "chelonia/contract/hasKeyShareBeenRespondedBy": function(contractIDOrState, requestedToContractID, reference) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const result = Object.values(contractIDOrState?._vm.authorizedKeys || {}).some((r) => {
      return r?.meta?.keyRequest?.responded && r.meta.keyRequest.contractID === requestedToContractID && (!reference || r.meta.keyRequest.reference === reference);
    });
    return result;
  },
  "chelonia/contract/waitingForKeyShareTo": function(contractIDOrState, requestingContractID, reference) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const result = contractIDOrState._volatile?.pendingKeyRequests?.filter((r) => {
      return r && (!requestingContractID || r.contractID === requestingContractID) && (!reference || r.reference === reference);
    })?.map(({ name }) => name);
    if (!result?.length)
      return null;
    return result;
  },
  "chelonia/contract/successfulKeySharesByContractID": function(contractIDOrState, requestingContractID) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const keyShares = Object.values(contractIDOrState._vm.keyshares || {});
    if (!keyShares?.length)
      return;
    const result = /* @__PURE__ */ Object.create(null);
    keyShares.forEach((kS) => {
      if (!kS.success)
        return;
      if (requestingContractID && kS.contractID !== requestingContractID)
        return;
      if (!result[kS.contractID])
        result[kS.contractID] = [];
      result[kS.contractID].push({ height: kS.height, hash: kS.hash });
    });
    Object.keys(result).forEach((cID) => {
      result[cID].sort((a, b) => {
        return b.height - a.height;
      });
    });
    return result;
  },
  "chelonia/contract/hasKeysToPerformOperation": function(contractIDOrState, operation) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const op = operation !== "*" ? [operation] : operation;
    return !!findSuitableSecretKeyId(contractIDOrState, op, ["sig"]);
  },
  // Did sourceContractIDOrState receive an OP_KEY_SHARE to perform the given
  // operation on contractIDOrState?
  "chelonia/contract/receivedKeysToPerformOperation": function(sourceContractIDOrState, contractIDOrState, operation) {
    const rootState = esm_default(this.config.stateSelector);
    if (typeof sourceContractIDOrState === "string") {
      sourceContractIDOrState = rootState[sourceContractIDOrState];
    }
    if (typeof contractIDOrState === "string") {
      contractIDOrState = rootState[contractIDOrState];
    }
    const op = operation !== "*" ? [operation] : operation;
    const keyId2 = findSuitableSecretKeyId(contractIDOrState, op, ["sig"]);
    return sourceContractIDOrState?._vm?.sharedKeyIds?.some((sK) => sK.id === keyId2);
  },
  "chelonia/contract/currentKeyIdByName": function(contractIDOrState, name, requireSecretKey) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const currentKeyId = findKeyIdByName(contractIDOrState, name);
    if (requireSecretKey && !esm_default("chelonia/haveSecretKey", currentKeyId)) {
      return;
    }
    return currentKeyId;
  },
  "chelonia/contract/foreignKeysByContractID": function(contractIDOrState, foreignContractID) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    return findForeignKeysByContractID(contractIDOrState, foreignContractID);
  },
  "chelonia/contract/historicalKeyIdsByName": function(contractIDOrState, name) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const currentKeyId = findKeyIdByName(contractIDOrState, name);
    const revokedKeyIds = findRevokedKeyIdsByName(contractIDOrState, name);
    return currentKeyId ? [currentKeyId, ...revokedKeyIds] : revokedKeyIds;
  },
  "chelonia/contract/suitableSigningKey": function(contractIDOrState, permissions, purposes, ringLevel, allowedActions) {
    if (typeof contractIDOrState === "string") {
      const rootState = esm_default(this.config.stateSelector);
      contractIDOrState = rootState[contractIDOrState];
    }
    const keyId2 = findSuitableSecretKeyId(contractIDOrState, permissions, purposes, ringLevel, allowedActions);
    return keyId2;
  },
  "chelonia/contract/setPendingKeyRevocation": function(contractID, names) {
    const rootState = esm_default(this.config.stateSelector);
    const state = rootState[contractID];
    if (!state._volatile)
      this.config.reactiveSet(state, "_volatile", /* @__PURE__ */ Object.create(null));
    if (!state._volatile.pendingKeyRevocations) {
      this.config.reactiveSet(state._volatile, "pendingKeyRevocations", /* @__PURE__ */ Object.create(null));
    }
    for (const name of names) {
      const keyId2 = findKeyIdByName(state, name);
      if (keyId2) {
        this.config.reactiveSet(state._volatile.pendingKeyRevocations, keyId2, true);
      } else {
        console.warn("[setPendingKeyRevocation] Unable to find keyId for name", {
          contractID,
          name
        });
      }
    }
  },
  "chelonia/shelterAuthorizationHeader"(contractID) {
    return buildShelterAuthorizationHeader.call(this, contractID);
  },
  // The purpose of the 'chelonia/crypto/*' selectors is so that they can be called
  // from contracts without including the crypto code (i.e., importing crypto.js)
  // This function takes a function as a parameter that returns a string
  // It does not a string directly to prevent accidentally logging the value,
  // which is a secret
  "chelonia/crypto/keyId": (inKey) => {
    return keyId(inKey.valueOf());
  },
  // TODO: allow connecting to multiple servers at once
  "chelonia/connect": function(options = {}) {
    if (!this.config.connectionURL)
      throw new Error("config.connectionURL missing");
    if (!this.config.connectionOptions)
      throw new Error("config.connectionOptions missing");
    if (this.pubsub) {
      this.pubsub.destroy();
    }
    let pubsubURL = this.config.connectionURL;
    if (true) {
      pubsubURL += `?debugID=${randomHexString(6)}`;
    }
    if (this.pubsub) {
      esm_default("chelonia/private/stopClockSync");
    }
    esm_default("chelonia/private/startClockSync");
    this.pubsub = createClient(pubsubURL, {
      ...this.config.connectionOptions,
      handlers: {
        ...options.handlers,
        // Every time we get a REQUEST_TYPE.SUB response, which happens for
        // 'new' subscriptions as well as every time the connection is reset
        "subscription-succeeded": function(event) {
          const { channelID } = event.detail;
          if (this.subscriptionSet.has(channelID)) {
            esm_default("chelonia/private/out/sync", channelID, { force: true }).catch((err) => {
              console.warn(`[chelonia] Syncing contract ${channelID} failed: ${err.message}`);
            });
          }
          options.handlers?.["subscription-succeeded"]?.call(this, event);
        }
      },
      // Map message handlers to transparently handle encryption and signatures
      messageHandlers: {
        ...Object.fromEntries(Object.entries(options.messageHandlers || {}).map(([k, v2]) => {
          switch (k) {
            case NOTIFICATION_TYPE.PUB:
              return [
                k,
                (msg) => {
                  if (!msg.channelID) {
                    console.info("[chelonia] Discarding pub event without channelID");
                    return;
                  }
                  if (!this.subscriptionSet.has(msg.channelID)) {
                    console.info(`[chelonia] Discarding pub event for ${msg.channelID} because it's not in the current subscriptionSet`);
                    return;
                  }
                  esm_default("chelonia/queueInvocation", msg.channelID, () => {
                    v2.call(this.pubsub, parseEncryptedOrUnencryptedMessage(this, {
                      contractID: msg.channelID,
                      serializedData: msg.data
                    }));
                  }).catch((e2) => {
                    console.error(`[chelonia] Error processing pub event for ${msg.channelID}`, e2);
                  });
                }
              ];
            case NOTIFICATION_TYPE.KV:
              return [
                k,
                (msg) => {
                  if (!msg.channelID || !msg.key) {
                    console.info("[chelonia] Discarding kv event without channelID or key");
                    return;
                  }
                  if (!this.subscriptionSet.has(msg.channelID)) {
                    console.info(`[chelonia] Discarding kv event for ${msg.channelID} because it's not in the current subscriptionSet`);
                    return;
                  }
                  esm_default("chelonia/queueInvocation", msg.channelID, () => {
                    v2.call(this.pubsub, [
                      msg.key,
                      parseEncryptedOrUnencryptedMessage(this, {
                        contractID: msg.channelID,
                        meta: msg.key,
                        serializedData: JSON.parse(import_buffer6.Buffer.from(msg.data).toString())
                      })
                    ]);
                  }).catch((e2) => {
                    console.error(`[chelonia] Error processing kv event for ${msg.channelID} and key ${msg.key}`, msg, e2);
                  });
                }
              ];
            case NOTIFICATION_TYPE.DELETION:
              return [
                k,
                (msg) => v2.call(this.pubsub, msg.data)
              ];
            default:
              return [k, v2];
          }
        })),
        [NOTIFICATION_TYPE.ENTRY](msg) {
          const { contractID } = SPMessage.deserializeHEAD(msg.data);
          esm_default("chelonia/private/in/enqueueHandleEvent", contractID, msg.data);
        }
      }
    });
    if (!this.contractsModifiedListener) {
      this.contractsModifiedListener = () => esm_default("chelonia/pubsub/update");
      esm_default("okTurtles.events/on", CONTRACTS_MODIFIED, this.contractsModifiedListener);
    }
    return this.pubsub;
  },
  // This selector is defined primarily for ingesting web push notifications,
  // although it can be used as a general-purpose API to process events received
  // from other external sources that are not managed by Chelonia itself (i.e. sources
  // other than the Chelonia-managed websocket connection and RESTful API).
  "chelonia/handleEvent": async function(event) {
    const { contractID } = SPMessage.deserializeHEAD(event);
    return await esm_default("chelonia/private/in/enqueueHandleEvent", contractID, event);
  },
  "chelonia/defineContract": function(contract) {
    if (!ACTION_REGEX.exec(contract.name))
      throw new Error(`bad contract name: ${contract.name}`);
    if (!contract.metadata)
      contract.metadata = { validate() {
      }, create: () => ({}) };
    if (!contract.getters)
      contract.getters = {};
    contract.state = (contractID) => esm_default(this.config.stateSelector)[contractID];
    contract.manifest = this.defContractManifest;
    contract.sbp = this.defContractSBP;
    this.defContractSelectors = [];
    this.defContract = contract;
    this.defContractSelectors.push(...esm_default("sbp/selectors/register", {
      // expose getters for Vuex integration and other conveniences
      [`${contract.manifest}/${contract.name}/getters`]: () => contract.getters,
      // 2 ways to cause sideEffects to happen: by defining a sideEffect function in the
      // contract, or by calling /pushSideEffect w/async SBP call. Can also do both.
      [`${contract.manifest}/${contract.name}/pushSideEffect`]: (contractID, asyncSbpCall) => {
        const [sel] = asyncSbpCall;
        if (sel.startsWith(contract.name + "/")) {
          asyncSbpCall[0] = `${contract.manifest}/${sel}`;
        }
        this.sideEffectStack(contractID).push(asyncSbpCall);
      }
    }));
    for (const action in contract.actions) {
      contractNameFromAction(action);
      this.whitelistedActions[action] = true;
      this.defContractSelectors.push(...esm_default("sbp/selectors/register", {
        [`${contract.manifest}/${action}/process`]: async (message, state) => {
          const { meta, data, contractID } = message;
          state = state || contract.state(contractID);
          const gProxy = gettersProxy(state, contract.getters);
          await contract.metadata.validate(meta, { state, ...gProxy, contractID });
          await contract.actions[action].validate(data, {
            state,
            ...gProxy,
            meta,
            message,
            contractID
          });
          this.sideEffectStacks[contractID] = [];
          await contract.actions[action].process(message, { state, ...gProxy });
        },
        // 'mutation' is an object that's similar to 'message', but not identical
        [`${contract.manifest}/${action}/sideEffect`]: async (mutation, state) => {
          if (contract.actions[action].sideEffect) {
            state = state || contract.state(mutation.contractID);
            if (!state) {
              console.warn(`[${contract.manifest}/${action}/sideEffect]: Skipping side-effect since there is no contract state for contract ${mutation.contractID}`);
              return;
            }
            const stateCopy = cloneDeep(state);
            const gProxy = gettersProxy(stateCopy, contract.getters);
            await contract.actions[action].sideEffect(mutation, { state: stateCopy, ...gProxy });
          }
          const sideEffects = this.sideEffectStack(mutation.contractID);
          while (sideEffects.length > 0) {
            const sideEffect = sideEffects.shift();
            try {
              await contract.sbp(...sideEffect);
            } catch (e_) {
              const e2 = e_;
              console.error(`[chelonia] ERROR: '${e2.name}' ${e2.message}, for pushed sideEffect of ${mutation.description}:`, sideEffect);
              this.sideEffectStacks[mutation.contractID] = [];
              throw e2;
            }
          }
        }
      }));
    }
    for (const method in contract.methods) {
      this.defContractSelectors.push(...esm_default("sbp/selectors/register", {
        [`${contract.manifest}/${method}`]: contract.methods[method]
      }));
    }
    esm_default("okTurtles.events/emit", CONTRACT_REGISTERED, contract);
  },
  "chelonia/queueInvocation": (contractID, sbpInvocation) => {
    return esm_default("chelonia/private/queueEvent", contractID, ["chelonia/private/noop"]).then(() => esm_default("chelonia/private/queueEvent", "public:" + contractID, sbpInvocation));
  },
  "chelonia/begin": async (...invocations) => {
    for (const invocation of invocations) {
      await esm_default(...invocation);
    }
  },
  // call this manually to resubscribe/unsubscribe from contracts as needed
  // if you are using a custom stateSelector and reload the state (e.g. upon login)
  "chelonia/pubsub/update": function() {
    const client = this.pubsub;
    const subscribedIDs = [...client.subscriptionSet];
    const currentIDs = Array.from(this.subscriptionSet);
    const leaveSubscribed = intersection(subscribedIDs, currentIDs);
    const toUnsubscribe = difference(subscribedIDs, leaveSubscribed);
    const toSubscribe = difference(currentIDs, leaveSubscribed);
    try {
      for (const contractID of toUnsubscribe) {
        client.unsub(contractID);
      }
      for (const contractID of toSubscribe) {
        client.sub(contractID);
      }
    } catch (e2) {
      console.error(`[chelonia] pubsub/update: error ${e2.name}: ${e2.message}`, { toUnsubscribe, toSubscribe }, e2);
      this.config.hooks.pubsubError?.(e2, client);
    }
  },
  // resolves when all pending actions for these contractID(s) finish
  "chelonia/contract/wait": function(contractIDs) {
    const listOfIds = contractIDs ? typeof contractIDs === "string" ? [contractIDs] : contractIDs : Object.keys(esm_default(this.config.stateSelector).contracts);
    return Promise.all(listOfIds.flatMap((cID) => {
      return esm_default("chelonia/queueInvocation", cID, ["chelonia/private/noop"]);
    }));
  },
  // resolves when all pending *writes* for these contractID(s) finish
  "chelonia/contract/waitPublish": function(contractIDs) {
    const listOfIds = contractIDs ? typeof contractIDs === "string" ? [contractIDs] : contractIDs : Object.keys(esm_default(this.config.stateSelector).contracts);
    return Promise.all(listOfIds.flatMap((cID) => {
      return esm_default("chelonia/private/queueEvent", `publish:${cID}`, ["chelonia/private/noop"]);
    }));
  },
  // 'chelonia/contract' - selectors related to injecting remote data and monitoring contracts
  // TODO: add an optional parameter to "retain" the contract (see #828)
  // eslint-disable-next-line require-await
  "chelonia/contract/sync": async function(contractIDs, params) {
    const listOfIds = typeof contractIDs === "string" ? [contractIDs] : contractIDs;
    listOfIds.forEach((id) => {
      if (checkCanBeGarbageCollected.call(this, id)) {
        if ("") {
          Promise.reject(new Error("[chelonia] Missing reference count for contract " + id));
        }
        console.error("[chelonia] Missing reference count for contract " + id);
        throw new Error("Missing reference count for contract");
      }
    });
    return esm_default("chelonia/private/out/sync", listOfIds, { ...params, force: true });
  },
  "chelonia/contract/isSyncing": function(contractID, { firstSync = false } = {}) {
    const isSyncing = !!this.currentSyncs[contractID];
    return firstSync ? isSyncing && this.currentSyncs[contractID].firstSync : isSyncing;
  },
  "chelonia/contract/currentSyncs": function() {
    return Object.keys(this.currentSyncs);
  },
  // Because `/remove` is done asynchronously and a contract might be removed
  // much later than when the call to remove was made, an optional callback
  // can be passed to verify whether to proceed with removal. This is used as
  // part of the `/release` mechanism to prevent removing contracts that have
  // acquired new references since the call to `/remove`.
  "chelonia/contract/remove": function(contractIDs, { confirmRemovalCallback, permanent } = {}) {
    const rootState = esm_default(this.config.stateSelector);
    const listOfIds = typeof contractIDs === "string" ? [contractIDs] : contractIDs;
    return Promise.all(listOfIds.map((contractID) => {
      if (!rootState?.contracts?.[contractID]) {
        return void 0;
      }
      return esm_default("chelonia/private/queueEvent", contractID, () => {
        if (confirmRemovalCallback && !confirmRemovalCallback(contractID)) {
          return;
        }
        const rootState2 = esm_default(this.config.stateSelector);
        const fkContractIDs = Array.from(new Set(Object.values(rootState2[contractID]?._vm?.authorizedKeys ?? {}).filter((k) => {
          return !!k.foreignKey;
        }).map((k) => {
          try {
            const fkUrl = new URL(k.foreignKey);
            return fkUrl.pathname;
          } catch {
            return void 0;
          }
        }).filter(Boolean)));
        esm_default("chelonia/private/removeImmediately", contractID, { permanent });
        if (fkContractIDs.length) {
          esm_default("chelonia/contract/release", fkContractIDs, { try: true }).catch((e2) => {
            console.error("[chelonia] Error attempting to release foreign key contracts", e2);
          });
        }
      });
    }));
  },
  "chelonia/contract/retain": async function(contractIDs, params) {
    const listOfIds = typeof contractIDs === "string" ? [contractIDs] : contractIDs;
    const rootState = esm_default(this.config.stateSelector);
    if (listOfIds.length === 0)
      return Promise.resolve();
    const checkIfDeleted = (id) => {
      if (rootState.contracts[id] === null) {
        console.error("[chelonia/contract/retain] Called /retain on permanently deleted contract.", id);
        throw new ChelErrorResourceGone("Unable to retain permanently deleted contract " + id);
      }
    };
    if (!params?.ephemeral) {
      listOfIds.forEach((id) => {
        checkIfDeleted(id);
        if (!has(rootState.contracts, id)) {
          this.config.reactiveSet(rootState.contracts, id, /* @__PURE__ */ Object.create(null));
        }
        this.config.reactiveSet(rootState.contracts[id], "references", (rootState.contracts[id].references ?? 0) + 1);
      });
    } else {
      listOfIds.forEach((id) => {
        checkIfDeleted(id);
        if (!has(this.ephemeralReferenceCount, id)) {
          this.ephemeralReferenceCount[id] = 1;
        } else {
          this.ephemeralReferenceCount[id] = this.ephemeralReferenceCount[id] + 1;
        }
      });
    }
    return await esm_default("chelonia/private/out/sync", listOfIds);
  },
  // the `try` parameter does not affect (ephemeral or persistent) reference
  // counts, but rather removes a contract if the reference count is zero
  // and the contract isn't being monitored for foreign keys. This parameter
  // is meant mostly for internal chelonia use, so that removing or releasing
  // a contract can also remove other contracts that this first contract
  // was monitoring.
  "chelonia/contract/release": async function(contractIDs, params) {
    const listOfIds = typeof contractIDs === "string" ? [contractIDs] : contractIDs;
    const rootState = esm_default(this.config.stateSelector);
    if (!params?.try) {
      if (!params?.ephemeral) {
        listOfIds.forEach((id) => {
          if (rootState.contracts[id] === null) {
            console.warn("[chelonia/contract/release] Called /release on permanently deleted contract. This has no effect.", id);
            return;
          }
          if (has(rootState.contracts, id) && has(rootState.contracts[id], "references")) {
            const current = rootState.contracts[id].references;
            if (current === 0) {
              console.error("[chelonia/contract/release] Invalid negative reference count for", id);
              if ("") {
                Promise.reject(new Error("Invalid negative reference count: " + id));
              }
              throw new Error("Invalid negative reference count");
            }
            if (current <= 1) {
              this.config.reactiveDel(rootState.contracts[id], "references");
            } else {
              this.config.reactiveSet(rootState.contracts[id], "references", current - 1);
            }
          } else {
            console.error("[chelonia/contract/release] Invalid negative reference count for", id);
            if ("") {
              Promise.reject(new Error("Invalid negative reference count: " + id));
            }
            throw new Error("Invalid negative reference count");
          }
        });
      } else {
        listOfIds.forEach((id) => {
          if (rootState.contracts[id] === null) {
            console.warn("[chelonia/contract/release] Called /release on permanently deleted contract. This has no effect.", id);
            return;
          }
          if (has(this.ephemeralReferenceCount, id)) {
            const current = this.ephemeralReferenceCount[id] ?? 0;
            if (current <= 1) {
              delete this.ephemeralReferenceCount[id];
            } else {
              this.ephemeralReferenceCount[id] = current - 1;
            }
          } else {
            console.error("[chelonia/contract/release] Invalid negative ephemeral reference count for", id);
            if ("") {
              Promise.reject(new Error("Invalid negative ephemeral reference count: " + id));
            }
            throw new Error("Invalid negative ephemeral reference count");
          }
        });
      }
    }
    const boundCheckCanBeGarbageCollected = checkCanBeGarbageCollected.bind(this);
    const idsToRemove = listOfIds.filter(boundCheckCanBeGarbageCollected);
    return idsToRemove.length ? await esm_default("chelonia/contract/remove", idsToRemove, {
      confirmRemovalCallback: boundCheckCanBeGarbageCollected
    }) : void 0;
  },
  "chelonia/contract/disconnect": async function(contractID, contractIDToDisconnect) {
    const state = esm_default(this.config.stateSelector);
    const contractState = state[contractID];
    const keyIds = Object.values(contractState._vm.authorizedKeys).filter((k) => {
      return k._notAfterHeight == null && k.meta?.keyRequest?.contractID === contractIDToDisconnect;
    }).map((k) => k.id);
    if (!keyIds.length)
      return;
    return await esm_default("chelonia/out/keyDel", {
      contractID,
      contractName: contractState._vm.type,
      data: keyIds,
      signingKeyId: findSuitableSecretKeyId(contractState, [SPMessage.OP_KEY_DEL], ["sig"])
    });
  },
  "chelonia/in/processMessage": function(messageOrRawMessage, state) {
    const stateCopy = cloneDeep(state);
    const message = typeof messageOrRawMessage === "string" ? SPMessage.deserialize(messageOrRawMessage, this.transientSecretKeys, stateCopy, this.config.unwrapMaybeEncryptedData) : messageOrRawMessage;
    return esm_default("chelonia/private/in/processMessage", message, stateCopy).then(() => stateCopy).catch((e2) => {
      console.warn(`chelonia/in/processMessage: reverting mutation ${message.description()}: ${message.serialize()}`, e2);
      return state;
    });
  },
  "chelonia/out/fetchResource": async function(cid, { code } = {}) {
    const parsedCID = parseCID(cid);
    if (code != null) {
      if (parsedCID.code !== code) {
        throw new Error(`Invalid CID content type. Expected ${code}, got ${parsedCID.code}`);
      }
    }
    const local = await esm_default("chelonia.db/get", cid);
    if (local != null)
      return local;
    const url = `${this.config.connectionURL}/file/${cid}`;
    const data = await this.config.fetch(url, { signal: this.abortController.signal }).then(handleFetchResult("text"));
    const ourHash = createCID(data, parsedCID.code);
    if (ourHash !== cid) {
      throw new Error(`expected hash ${cid}. Got: ${ourHash}`);
    }
    await esm_default("chelonia.db/set", cid, data);
    return data;
  },
  "chelonia/out/latestHEADInfo": function(contractID) {
    return this.config.fetch(`${this.config.connectionURL}/latestHEADinfo/${contractID}`, {
      cache: "no-store",
      signal: this.abortController.signal
    }).then(handleFetchResult("json"));
  },
  "chelonia/out/deserializedHEAD": async function(hash, { contractID } = {}) {
    const message = await esm_default("chelonia/out/fetchResource", hash, {
      code: multicodes.SHELTER_CONTRACT_DATA
    });
    const deserializedHEAD = SPMessage.deserializeHEAD(message);
    if (contractID && deserializedHEAD.contractID !== contractID) {
      throw new Error("chelonia/out/deserializedHEAD: Mismatched contract ID");
    }
    return deserializedHEAD;
  },
  "chelonia/out/eventsAfter": eventsAfter,
  "chelonia/out/eventsBefore": function(contractID, { beforeHeight, limit, stream }) {
    if (limit <= 0) {
      console.error('[chelonia] invalid params error: "limit" needs to be positive integer');
    }
    const offset = Math.max(0, beforeHeight - limit + 1);
    const eventsAfterLimit = Math.min(beforeHeight + 1, limit);
    return esm_default("chelonia/out/eventsAfter", contractID, {
      sinceHeight: offset,
      limit: eventsAfterLimit,
      stream
    });
  },
  "chelonia/out/eventsBetween": function(contractID, { startHash, endHeight = Number.POSITIVE_INFINITY, offset = 0, limit = 0, stream = true }) {
    if (offset < 0) {
      console.error('[chelonia] invalid params error: "offset" needs to be positive integer or zero');
      return;
    }
    let reader;
    const s = new ReadableStream({
      start: async (controller) => {
        const deserializedHEAD = await esm_default("chelonia/out/deserializedHEAD", startHash, { contractID });
        const startOffset = Math.max(0, deserializedHEAD.head.height - offset);
        const ourLimit = limit ? Math.min(endHeight - startOffset + 1, limit) : endHeight - startOffset + 1;
        if (ourLimit < 1) {
          controller.close();
          return;
        }
        reader = esm_default("chelonia/out/eventsAfter", contractID, {
          sinceHeight: startOffset,
          limit: ourLimit
        }).getReader();
      },
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      }
    });
    if (stream)
      return s;
    return collectEventStream(s);
  },
  "chelonia/rootState": function() {
    return esm_default(this.config.stateSelector);
  },
  "chelonia/latestContractState": async function(contractID, options = { forceSync: false }) {
    const rootState = esm_default(this.config.stateSelector);
    if (rootState.contracts[contractID] === null) {
      throw new ChelErrorResourceGone("Permanently deleted contract " + contractID);
    }
    if (!options.forceSync && rootState[contractID] && Object.keys(rootState[contractID]).some((x2) => x2 !== "_volatile")) {
      return cloneDeep(rootState[contractID]);
    }
    let state = /* @__PURE__ */ Object.create(null);
    let contractName = rootState.contracts[contractID]?.type;
    const eventsStream = esm_default("chelonia/out/eventsAfter", contractID, {
      sinceHeight: 0,
      sinceHash: contractID
    });
    const eventsStreamReader = eventsStream.getReader();
    if (rootState[contractID])
      state._volatile = rootState[contractID]._volatile;
    for (; ; ) {
      const { value: event, done } = await eventsStreamReader.read();
      if (done)
        return state;
      const stateCopy = cloneDeep(state);
      try {
        await esm_default("chelonia/private/in/processMessage", SPMessage.deserialize(event, this.transientSecretKeys, state, this.config.unwrapMaybeEncryptedData), state, void 0, contractName);
        if (!contractName && state._vm) {
          contractName = state._vm.type;
        }
      } catch (e2) {
        console.warn(`[chelonia] latestContractState: '${e2.name}': ${e2.message} processing:`, event, e2.stack);
        if (e2 instanceof ChelErrorUnrecoverable)
          throw e2;
        state = stateCopy;
      }
    }
  },
  "chelonia/contract/state": function(contractID, height) {
    const state = esm_default(this.config.stateSelector)[contractID];
    const stateCopy = state && cloneDeep(state);
    if (stateCopy?._vm && height != null) {
      Object.keys(stateCopy._vm.authorizedKeys).forEach((keyId2) => {
        if (stateCopy._vm.authorizedKeys[keyId2]._notBeforeHeight > height) {
          delete stateCopy._vm.authorizedKeys[keyId2];
        }
      });
    }
    return stateCopy;
  },
  "chelonia/contract/fullState": function(contractID) {
    const rootState = esm_default(this.config.stateSelector);
    if (Array.isArray(contractID)) {
      return Object.fromEntries(contractID.map((contractID2) => {
        return [
          contractID2,
          {
            contractState: rootState[contractID2],
            cheloniaState: rootState.contracts[contractID2]
          }
        ];
      }));
    }
    return {
      contractState: rootState[contractID],
      cheloniaState: rootState.contracts[contractID]
    };
  },
  // 'chelonia/out' - selectors that send data out to the server
  "chelonia/out/registerContract": async function(params) {
    const { contractName, keys, hooks, publishOptions, signingKeyId, actionSigningKeyId, actionEncryptionKeyId } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contractInfo = this.manifestToContract[manifestHash];
    if (!contractInfo)
      throw new Error(`contract not defined: ${contractName}`);
    const signingKey = this.transientSecretKeys[signingKeyId];
    if (!signingKey)
      throw new Error(`Signing key ${signingKeyId} is not defined`);
    const payload = {
      type: contractName,
      keys
    };
    const contractMsg = SPMessage.createV1_0({
      contractID: null,
      height: 0,
      op: [
        SPMessage.OP_CONTRACT,
        signedOutgoingDataWithRawKey(signingKey, payload)
      ],
      manifest: manifestHash
    });
    const contractID = contractMsg.hash();
    await esm_default("chelonia/private/out/publishEvent", contractMsg, params.namespaceRegistration ? {
      ...publishOptions,
      headers: {
        ...publishOptions?.headers,
        "shelter-namespace-registration": params.namespaceRegistration
      }
    } : publishOptions, hooks && {
      prepublish: hooks.prepublishContract,
      postpublish: hooks.postpublishContract
    });
    await esm_default("chelonia/private/out/sync", contractID);
    const msg = await esm_default(actionEncryptionKeyId ? "chelonia/out/actionEncrypted" : "chelonia/out/actionUnencrypted", {
      action: contractName,
      contractID,
      data: params.data,
      signingKeyId: actionSigningKeyId ?? signingKeyId,
      encryptionKeyId: actionEncryptionKeyId,
      hooks,
      publishOptions
    });
    return msg;
  },
  "chelonia/out/ownResources": async function(contractID) {
    if (!contractID) {
      throw new TypeError("A contract ID must be provided");
    }
    const response = await this.config.fetch(`${this.config.connectionURL}/ownResources`, {
      method: "GET",
      signal: this.abortController.signal,
      headers: new Headers([
        ["authorization", buildShelterAuthorizationHeader.call(this, contractID)]
      ])
    });
    if (!response.ok) {
      console.error("Unable to fetch own resources", contractID, response.status);
      throw new Error(`Unable to fetch own resources for ${contractID}: ${response.status}`);
    }
    return response.json();
  },
  "chelonia/out/deleteContract": async function(contractID, credentials = {}) {
    if (!contractID) {
      throw new TypeError("A contract ID must be provided");
    }
    if (!Array.isArray(contractID))
      contractID = [contractID];
    return await Promise.allSettled(contractID.map(async (cid) => {
      const hasCredential = has(credentials, cid);
      const hasToken = has(credentials[cid], "token") && credentials[cid].token;
      const hasBillableContractID = has(credentials[cid], "billableContractID") && credentials[cid].billableContractID;
      if (!hasCredential || hasToken === hasBillableContractID) {
        throw new TypeError(`Either a token or a billable contract ID must be provided for ${cid}`);
      }
      const response = await this.config.fetch(`${this.config.connectionURL}/deleteContract/${cid}`, {
        method: "POST",
        signal: this.abortController.signal,
        headers: new Headers([
          [
            "authorization",
            hasToken ? `bearer ${credentials[cid].token.valueOf()}` : buildShelterAuthorizationHeader.call(this, credentials[cid].billableContractID)
          ]
        ])
      });
      if (!response.ok) {
        if (response.status === 404 || response.status === 410) {
          console.warn("Contract appears to have been deleted already", cid, response.status);
          return;
        }
        console.error("Unable to delete contract", cid, response.status);
        throw new Error(`Unable to delete contract ${cid}: ${response.status}`);
      }
    }));
  },
  // all of these functions will do both the creation of the SPMessage
  // and the sending of it via 'chelonia/private/out/publishEvent'
  "chelonia/out/actionEncrypted": function(params) {
    return outEncryptedOrUnencryptedAction.call(this, SPMessage.OP_ACTION_ENCRYPTED, params);
  },
  "chelonia/out/actionUnencrypted": function(params) {
    return outEncryptedOrUnencryptedAction.call(this, SPMessage.OP_ACTION_UNENCRYPTED, params);
  },
  "chelonia/out/keyShare": async function(params) {
    const { atomic, originatingContractName, originatingContractID, contractName, contractID, data, hooks, publishOptions } = params;
    const originatingManifestHash = this.config.contracts.manifests[originatingContractName];
    const destinationManifestHash = this.config.contracts.manifests[contractName];
    const originatingContract = originatingContractID ? this.manifestToContract[originatingManifestHash]?.contract : void 0;
    const destinationContract = this.manifestToContract[destinationManifestHash]?.contract;
    if (originatingContractID && !originatingContract || !destinationContract) {
      throw new Error("Contract name not found");
    }
    const payload = data;
    if (!params.signingKeyId && !params.signingKey) {
      throw new TypeError("Either signingKeyId or signingKey must be specified");
    }
    let msg = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_KEY_SHARE,
        params.signingKeyId ? signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys) : signedOutgoingDataWithRawKey(params.signingKey, payload)
      ],
      manifest: destinationManifestHash
    });
    if (!atomic) {
      msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, hooks);
    }
    return msg;
  },
  "chelonia/out/keyAdd": async function(params) {
    const { atomic, contractID, contractName, data, hooks, publishOptions } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const state = contract.state(contractID);
    const payload = params.skipExistingKeyCheck ? data : data.filter((wk) => {
      const k = isEncryptedData(wk) ? wk.valueOf() : wk;
      if (has(state._vm.authorizedKeys, k.id)) {
        if (state._vm.authorizedKeys[k.id]._notAfterHeight == null) {
          return false;
        }
      }
      return true;
    });
    if (payload.length === 0)
      return;
    let msg = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_KEY_ADD,
        signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
      ],
      manifest: manifestHash
    });
    if (!atomic) {
      msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, hooks);
    }
    return msg;
  },
  "chelonia/out/keyDel": async function(params) {
    const { atomic, contractID, contractName, data, hooks, publishOptions } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const state = contract.state(contractID);
    const payload = data.map((keyId2) => {
      if (isEncryptedData(keyId2))
        return keyId2;
      if (!has(state._vm.authorizedKeys, keyId2) || state._vm.authorizedKeys[keyId2]._notAfterHeight != null) {
        return void 0;
      }
      if (state._vm.authorizedKeys[keyId2]._private) {
        return encryptedOutgoingData(contractID, state._vm.authorizedKeys[keyId2]._private, keyId2);
      } else {
        return keyId2;
      }
    }).filter(Boolean);
    let msg = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_KEY_DEL,
        signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
      ],
      manifest: manifestHash
    });
    if (!atomic) {
      msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, hooks);
    }
    return msg;
  },
  "chelonia/out/keyUpdate": async function(params) {
    const { atomic, contractID, contractName, data, hooks, publishOptions } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const state = contract.state(contractID);
    const payload = data.map((key) => {
      if (isEncryptedData(key))
        return key;
      const { oldKeyId } = key;
      if (state._vm.authorizedKeys[oldKeyId]._private) {
        return encryptedOutgoingData(contractID, state._vm.authorizedKeys[oldKeyId]._private, key);
      } else {
        return key;
      }
    });
    let msg = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_KEY_UPDATE,
        signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
      ],
      manifest: manifestHash
    });
    if (!atomic) {
      msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, hooks);
    }
    return msg;
  },
  "chelonia/out/keyRequest": async function(params) {
    const { originatingContractID, originatingContractName, contractID, contractName, hooks, publishOptions, innerSigningKeyId, encryptionKeyId, innerEncryptionKeyId, encryptKeyRequestMetadata, reference } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const originatingManifestHash = this.config.contracts.manifests[originatingContractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    const originatingContract = this.manifestToContract[originatingManifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const rootState = esm_default(this.config.stateSelector);
    try {
      await esm_default("chelonia/contract/retain", contractID, { ephemeral: true });
      const state = contract.state(contractID);
      const originatingState = originatingContract.state(originatingContractID);
      const havePendingKeyRequest = Object.values(originatingState._vm.authorizedKeys).findIndex((k) => {
        return k._notAfterHeight == null && k.meta?.keyRequest?.contractID === contractID && state?._volatile?.pendingKeyRequests?.some((pkr) => pkr.name === k.name);
      }) !== -1;
      if (havePendingKeyRequest) {
        return;
      }
      const keyRequestReplyKey = keygen(EDWARDS25519SHA512BATCH);
      const keyRequestReplyKeyId = keyId(keyRequestReplyKey);
      const keyRequestReplyKeyP = serializeKey(keyRequestReplyKey, false);
      const keyRequestReplyKeyS = serializeKey(keyRequestReplyKey, true);
      const signingKeyId = findSuitableSecretKeyId(originatingState, [SPMessage.OP_KEY_ADD], ["sig"]);
      if (!signingKeyId) {
        throw new ChelErrorUnexpected(`Unable to send key request. Originating contract is missing a key with OP_KEY_ADD permission. contractID=${contractID} originatingContractID=${originatingContractID}`);
      }
      const keyAddOp = () => esm_default("chelonia/out/keyAdd", {
        contractID: originatingContractID,
        contractName: originatingContractName,
        data: [
          {
            id: keyRequestReplyKeyId,
            name: "#krrk-" + keyRequestReplyKeyId,
            purpose: ["sig"],
            ringLevel: Number.MAX_SAFE_INTEGER,
            permissions: params.permissions === "*" ? "*" : Array.isArray(params.permissions) ? [...params.permissions, SPMessage.OP_KEY_SHARE] : [SPMessage.OP_KEY_SHARE],
            allowedActions: params.allowedActions,
            meta: {
              private: {
                content: encryptedOutgoingData(originatingContractID, encryptionKeyId, keyRequestReplyKeyS),
                shareable: false
              },
              keyRequest: {
                ...reference && {
                  reference: encryptKeyRequestMetadata ? encryptedOutgoingData(originatingContractID, encryptionKeyId, reference) : reference
                },
                contractID: encryptKeyRequestMetadata ? encryptedOutgoingData(originatingContractID, encryptionKeyId, contractID) : contractID
              }
            },
            data: keyRequestReplyKeyP
          }
        ],
        signingKeyId
      }).catch((e2) => {
        console.error(`[chelonia] Error sending OP_KEY_ADD for ${originatingContractID} during key request to ${contractID}`, e2);
        throw e2;
      });
      const payload = {
        contractID: originatingContractID,
        height: rootState.contracts[originatingContractID].height,
        replyWith: signedOutgoingData(originatingContractID, innerSigningKeyId, {
          encryptionKeyId,
          responseKey: encryptedOutgoingData(contractID, innerEncryptionKeyId, keyRequestReplyKeyS)
        }, this.transientSecretKeys),
        request: "*"
      };
      let msg = SPMessage.createV1_0({
        contractID,
        op: [
          SPMessage.OP_KEY_REQUEST,
          signedOutgoingData(contractID, params.signingKeyId, encryptKeyRequestMetadata ? encryptedOutgoingData(contractID, innerEncryptionKeyId, payload) : payload, this.transientSecretKeys)
        ],
        manifest: manifestHash
      });
      msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, {
        ...hooks,
        // We ensure that both messages are placed into the publish queue
        prepublish: (...args) => {
          return keyAddOp().then(() => hooks?.prepublish?.(...args));
        }
      });
      return msg;
    } finally {
      await esm_default("chelonia/contract/release", contractID, { ephemeral: true });
    }
  },
  "chelonia/out/keyRequestResponse": async function(params) {
    const { atomic, contractID, contractName, data, hooks, publishOptions } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const payload = data;
    let message = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_KEY_REQUEST_SEEN,
        signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
      ],
      manifest: manifestHash
    });
    if (!atomic) {
      message = await esm_default("chelonia/private/out/publishEvent", message, publishOptions, hooks);
    }
    return message;
  },
  "chelonia/out/atomic": async function(params) {
    const { contractID, contractName, data, hooks, publishOptions } = params;
    const manifestHash = this.config.contracts.manifests[contractName];
    const contract = this.manifestToContract[manifestHash]?.contract;
    if (!contract) {
      throw new Error("Contract name not found");
    }
    const payload = (await Promise.all(data.map(([selector, opParams]) => {
      if (![
        "chelonia/out/actionEncrypted",
        "chelonia/out/actionUnencrypted",
        "chelonia/out/keyAdd",
        "chelonia/out/keyDel",
        "chelonia/out/keyUpdate",
        "chelonia/out/keyRequestResponse",
        "chelonia/out/keyShare"
      ].includes(selector)) {
        throw new Error("Selector not allowed in OP_ATOMIC: " + selector);
      }
      return esm_default(selector, {
        ...opParams,
        ...params,
        data: opParams.data,
        atomic: true
      });
    }))).flat().filter(Boolean).map((msg2) => {
      return [msg2.opType(), msg2.opValue()];
    });
    let msg = SPMessage.createV1_0({
      contractID,
      op: [
        SPMessage.OP_ATOMIC,
        signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
      ],
      manifest: manifestHash
    });
    msg = await esm_default("chelonia/private/out/publishEvent", msg, publishOptions, hooks);
    return msg;
  },
  "chelonia/out/protocolUpgrade": async function() {
  },
  "chelonia/out/propSet": async function() {
  },
  "chelonia/out/propDel": async function() {
  },
  "chelonia/out/encryptedOrUnencryptedPubMessage": function({ contractID, innerSigningKeyId, encryptionKeyId, signingKeyId, data }) {
    const serializedData = outputEncryptedOrUnencryptedMessage.call(this, {
      contractID,
      innerSigningKeyId,
      encryptionKeyId,
      signingKeyId,
      data
    });
    this.pubsub.pub(contractID, serializedData);
  },
  // Note: This is a bare-bones function designed for precise control. In many
  // situations, the `chelonia/kv/queuedSet` selector (in chelonia-utils.js)
  // will be simpler and more appropriate to use.
  // In most situations, you want to use some queuing strategy (which this
  // selector doesn't provide) alongside writing to the KV store. Therefore, as
  // a general rule, you shouldn't be calling this selector directly unless
  // you're building a utility library or if you have very specific needs. In
  // this case, see if `chelonia/kv/queuedSet` covers your needs.
  // `data` is allowed to be falsy, in which case a fetch will occur first and
  // the `onconflict` handler will be called.
  "chelonia/kv/set": async function(contractID, key, data, { ifMatch, innerSigningKeyId, encryptionKeyId, signingKeyId, maxAttempts, onconflict }) {
    maxAttempts = maxAttempts ?? 3;
    const url = `${this.config.connectionURL}/kv/${encodeURIComponent(contractID)}/${encodeURIComponent(key)}`;
    const hasOnconflict = typeof onconflict === "function";
    let response;
    const resolveData = async () => {
      let currentValue;
      if (response.ok || response.status === 409 || response.status === 412) {
        const serializedDataText = await response.text();
        currentValue = serializedDataText ? parseEncryptedOrUnencryptedMessage(this, {
          contractID,
          serializedData: JSON.parse(serializedDataText),
          meta: key
        }) : void 0;
      } else if (response.status !== 404 && response.status !== 410) {
        throw new ChelErrorUnexpectedHttpResponseCode("[kv/set] Invalid response code: " + response.status);
      }
      const result = await onconflict({
        contractID,
        key,
        failedData: data,
        status: response.status,
        // If no x-cid or etag header was returned, `ifMatch` would likely be
        // returned as undefined, which will then use the `''` fallback value
        // when writing. This allows 404 / 410 responses to work even if no
        // etag is explicitly given
        etag: response.headers.get("x-cid") || response.headers.get("etag"),
        get currentData() {
          return currentValue?.data;
        },
        currentValue
      });
      if (!result)
        return false;
      data = result[0];
      ifMatch = result[1];
      return true;
    };
    for (; ; ) {
      if (data !== void 0) {
        const serializedData = outputEncryptedOrUnencryptedMessage.call(this, {
          contractID,
          innerSigningKeyId,
          encryptionKeyId,
          signingKeyId,
          data,
          meta: key
        });
        response = await this.config.fetch(url, {
          headers: new Headers([
            ["authorization", buildShelterAuthorizationHeader.call(this, contractID)],
            ["if-match", ifMatch || '""']
          ]),
          method: "POST",
          body: JSON.stringify(serializedData),
          signal: this.abortController.signal
        });
      } else {
        if (!hasOnconflict) {
          throw TypeError("onconflict required with empty data");
        }
        response = await this.config.fetch(url, {
          headers: new Headers([
            ["authorization", buildShelterAuthorizationHeader.call(this, contractID)]
          ]),
          signal: this.abortController.signal
        });
        if (await resolveData()) {
          continue;
        } else {
          break;
        }
      }
      if (!response.ok) {
        if (response.status === 409 || response.status === 412) {
          if (--maxAttempts <= 0) {
            throw new Error("kv/set conflict setting KV value");
          }
          await delay(randomIntFromRange(0, 1500));
          if (hasOnconflict) {
            if (await resolveData()) {
              continue;
            } else {
              break;
            }
          } else {
            throw new Error(`kv/set failed with status ${response.status} and no onconflict handler was provided`);
          }
        }
        throw new ChelErrorUnexpectedHttpResponseCode("kv/set invalid response status: " + response.status);
      }
      break;
    }
  },
  "chelonia/kv/get": async function(contractID, key) {
    const response = await this.config.fetch(`${this.config.connectionURL}/kv/${encodeURIComponent(contractID)}/${encodeURIComponent(key)}`, {
      headers: new Headers([
        ["authorization", buildShelterAuthorizationHeader.call(this, contractID)]
      ]),
      signal: this.abortController.signal
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error("Invalid response status: " + response.status);
    }
    const data = await response.json();
    return parseEncryptedOrUnencryptedMessage(this, {
      contractID,
      serializedData: data,
      meta: key
    });
  },
  // To set filters for a contract, call with `filter` set to an array of KV
  // keys to receive updates for over the WebSocket. An empty array means that
  // no KV updates will be sent.
  // Calling with a single argument (the contract ID) will remove filters,
  // meaning that KV updates will be sent for _any_ KV key.
  // The last call takes precedence, so, for example, calling with filter
  // set to `['foo', 'bar']` and then with `['baz']` means that KV updates will
  // be received for `baz` only, not for `foo`, `bar` or any other keys.
  "chelonia/kv/setFilter": function(contractID, filter) {
    this.pubsub.setKvFilter(contractID, filter);
  },
  "chelonia/parseEncryptedOrUnencryptedDetachedMessage": function({ contractID, serializedData, meta }) {
    return parseEncryptedOrUnencryptedMessage(this, {
      contractID,
      serializedData,
      meta
    });
  }
});
function contractNameFromAction(action) {
  const regexResult = ACTION_REGEX.exec(action);
  const contractName = regexResult?.[2];
  if (!contractName)
    throw new Error(`Poorly named action '${action}': missing contract name.`);
  return contractName;
}
function outputEncryptedOrUnencryptedMessage({ contractID, innerSigningKeyId, encryptionKeyId, signingKeyId, data, meta }) {
  const state = esm_default(this.config.stateSelector)[contractID];
  const signedMessage = innerSigningKeyId ? state._vm.authorizedKeys[innerSigningKeyId] && state._vm.authorizedKeys[innerSigningKeyId]?._notAfterHeight == null ? signedOutgoingData(contractID, innerSigningKeyId, data, this.transientSecretKeys) : signedOutgoingDataWithRawKey(this.transientSecretKeys[innerSigningKeyId], data) : data;
  const payload = !encryptionKeyId ? signedMessage : encryptedOutgoingData(contractID, encryptionKeyId, signedMessage);
  const message = signedOutgoingData(contractID, signingKeyId, payload, this.transientSecretKeys);
  const rootState = esm_default(this.config.stateSelector);
  const height = String(rootState.contracts[contractID].height);
  const serializedData = { ...message.serialize((meta ?? "") + height), height };
  return serializedData;
}
function parseEncryptedOrUnencryptedMessage(ctx, { contractID, serializedData, meta }) {
  if (!serializedData) {
    throw new TypeError("[chelonia] parseEncryptedOrUnencryptedMessage: serializedData is required");
  }
  const state = esm_default(ctx.config.stateSelector)[contractID];
  const numericHeight = parseInt(serializedData.height);
  const rootState = esm_default(ctx.config.stateSelector);
  const currentHeight = rootState.contracts[contractID].height;
  if (!(numericHeight >= 0) || !(numericHeight <= currentHeight)) {
    throw new Error(`[chelonia] parseEncryptedOrUnencryptedMessage: Invalid height ${serializedData.height}; it must be between 0 and ${currentHeight}`);
  }
  const aad = (meta ?? "") + serializedData.height;
  const v2 = signedIncomingData(contractID, state, serializedData, numericHeight, aad, (message) => {
    return maybeEncryptedIncomingData(contractID, state, message, numericHeight, ctx.transientSecretKeys, aad, void 0);
  });
  let encryptionKeyId;
  let innerSigningKeyId;
  const unwrap = /* @__PURE__ */ (() => {
    let result2;
    return () => {
      if (!result2) {
        try {
          let unwrapped;
          unwrapped = v2.valueOf();
          if (isEncryptedData(unwrapped)) {
            encryptionKeyId = unwrapped.encryptionKeyId;
            unwrapped = unwrapped.valueOf();
            if (isSignedData(unwrapped)) {
              innerSigningKeyId = unwrapped.signingKeyId;
              unwrapped = unwrapped.valueOf();
            } else {
              innerSigningKeyId = null;
            }
          } else {
            encryptionKeyId = null;
            innerSigningKeyId = null;
          }
          result2 = [unwrapped];
        } catch (e2) {
          result2 = [void 0, e2];
        }
      }
      if (result2.length === 2) {
        throw result2[1];
      }
      return result2[0];
    };
  })();
  const result = {
    get contractID() {
      return contractID;
    },
    get innerSigningKeyId() {
      if (innerSigningKeyId === void 0) {
        try {
          unwrap();
        } catch {
        }
      }
      return innerSigningKeyId;
    },
    get encryptionKeyId() {
      if (encryptionKeyId === void 0) {
        try {
          unwrap();
        } catch {
        }
      }
      return encryptionKeyId;
    },
    get signingKeyId() {
      return v2.signingKeyId;
    },
    get data() {
      return unwrap();
    },
    get signingContractID() {
      return getContractIDfromKeyId(contractID, result.signingKeyId, state);
    },
    get innerSigningContractID() {
      return getContractIDfromKeyId(contractID, result.innerSigningKeyId, state);
    }
  };
  return result;
}
async function outEncryptedOrUnencryptedAction(opType, params) {
  const { atomic, action, contractID, data, hooks, publishOptions } = params;
  const contractName = contractNameFromAction(action);
  const manifestHash = this.config.contracts.manifests[contractName];
  const { contract } = this.manifestToContract[manifestHash];
  const state = contract.state(contractID);
  const meta = await contract.metadata.create();
  const unencMessage = { action, data, meta };
  const signedMessage = params.innerSigningKeyId ? state._vm.authorizedKeys[params.innerSigningKeyId] && state._vm.authorizedKeys[params.innerSigningKeyId]?._notAfterHeight == null ? signedOutgoingData(contractID, params.innerSigningKeyId, unencMessage, this.transientSecretKeys) : signedOutgoingDataWithRawKey(this.transientSecretKeys[params.innerSigningKeyId], unencMessage) : unencMessage;
  if (opType === SPMessage.OP_ACTION_ENCRYPTED && !params.encryptionKeyId) {
    throw new Error("OP_ACTION_ENCRYPTED requires an encryption key ID be given");
  }
  if (params.encryptionKey) {
    if (params.encryptionKeyId !== keyId(params.encryptionKey)) {
      throw new Error("OP_ACTION_ENCRYPTED raw encryption key does not match encryptionKeyId");
    }
  }
  const payload = opType === SPMessage.OP_ACTION_UNENCRYPTED ? signedMessage : params.encryptionKey ? encryptedOutgoingDataWithRawKey(params.encryptionKey, signedMessage) : encryptedOutgoingData(contractID, params.encryptionKeyId, signedMessage);
  let message = SPMessage.createV1_0({
    contractID,
    op: [
      opType,
      signedOutgoingData(contractID, params.signingKeyId, payload, this.transientSecretKeys)
    ],
    manifest: manifestHash
  });
  if (!atomic) {
    message = await esm_default("chelonia/private/out/publishEvent", message, publishOptions, hooks);
  }
  return message;
}
function gettersProxy(state, getters4) {
  const proxyGetters = new Proxy({}, {
    get(_target, prop) {
      return getters4[prop](state, proxyGetters);
    }
  });
  return { getters: proxyGetters };
}
esm_default("sbp/domains/lock", ["chelonia"]);

// node_modules/@chelonia/lib/dist/esm/persistent-actions.mjs
var timer = Symbol("timer");
var coerceToError = (arg) => {
  if (arg && arg instanceof Error)
    return arg;
  console.warn(tag, "Please use Error objects when throwing or rejecting");
  return new Error((typeof arg === "string" ? arg : JSON.stringify(arg)) ?? "undefined");
};
var defaultOptions2 = {
  maxAttempts: Number.POSITIVE_INFINITY,
  retrySeconds: 30
};
var tag = "[chelonia.persistentActions]";
var PersistentAction = class {
  id;
  invocation;
  options;
  status;
  [timer];
  constructor(invocation, options = {}) {
    this.id = crypto.randomUUID();
    this.invocation = invocation;
    this.options = { ...defaultOptions2, ...options };
    this.status = {
      attempting: false,
      failedAttemptsSoFar: 0,
      lastError: "",
      nextRetry: "",
      resolved: false
    };
  }
  async attempt() {
    if (this.status.attempting || this.status.resolved)
      return;
    if (await this.trySBP(this.options.skipCondition))
      this.cancel();
    if (this.status.resolved)
      return;
    try {
      this.status.attempting = true;
      const result = await esm_default(...this.invocation);
      this.status.attempting = false;
      this.handleSuccess(result);
    } catch (error) {
      this.status.attempting = false;
      await this.handleError(coerceToError(error));
    }
  }
  cancel() {
    if (this[timer])
      clearTimeout(this[timer]);
    this.status.nextRetry = "";
    this.status.resolved = true;
  }
  async handleError(error) {
    const { id, options, status } = this;
    status.failedAttemptsSoFar++;
    status.lastError = error.message;
    const anyAttemptLeft = options.maxAttempts > status.failedAttemptsSoFar;
    if (!anyAttemptLeft)
      status.resolved = true;
    status.nextRetry = anyAttemptLeft && !status.resolved ? new Date(Date.now() + options.retrySeconds * 1e3).toISOString() : "";
    esm_default("okTurtles.events/emit", PERSISTENT_ACTION_FAILURE, { error, id });
    await this.trySBP(options.errorInvocation);
    if (!anyAttemptLeft) {
      esm_default("okTurtles.events/emit", PERSISTENT_ACTION_TOTAL_FAILURE, { error, id });
      await this.trySBP(options.totalFailureInvocation);
    }
    if (status.nextRetry) {
      this[timer] = setTimeout(() => {
        this.attempt().catch((e2) => {
          console.error("Error attempting persistent action", id, e2);
        });
      }, this.options.retrySeconds * 1e3);
    }
  }
  handleSuccess(result) {
    const { id, status } = this;
    status.lastError = "";
    status.nextRetry = "";
    status.resolved = true;
    esm_default("okTurtles.events/emit", PERSISTENT_ACTION_SUCCESS, { id, result });
  }
  async trySBP(invocation) {
    try {
      return invocation ? await esm_default(...invocation) : void 0;
    } catch (error) {
      console.error(tag, coerceToError(error).message);
    }
  }
};
var persistent_actions_default = esm_default("sbp/selectors/register", {
  "chelonia.persistentActions/_init"() {
    this.actionsByID = /* @__PURE__ */ Object.create(null);
    this.checkDatabaseKey = () => {
      if (!this.databaseKey)
        throw new TypeError(`${tag} No database key configured`);
    };
    esm_default("okTurtles.events/on", PERSISTENT_ACTION_SUCCESS, ({ id }) => {
      esm_default("chelonia.persistentActions/cancel", id);
    });
    esm_default("okTurtles.events/on", PERSISTENT_ACTION_TOTAL_FAILURE, ({ id }) => {
      esm_default("chelonia.persistentActions/cancel", id);
    });
  },
  // Cancels a specific action by its ID.
  // The action won't be retried again, but an async action cannot be aborted if its promise is stil attempting.
  async "chelonia.persistentActions/cancel"(id) {
    if (id in this.actionsByID) {
      this.actionsByID[id].cancel();
      delete this.actionsByID[id];
      return await esm_default("chelonia.persistentActions/save");
    }
  },
  // TODO: validation
  "chelonia.persistentActions/configure"({ databaseKey, options = {} }) {
    this.databaseKey = databaseKey;
    for (const key in options) {
      if (key in defaultOptions2) {
        defaultOptions2[key] = options[key];
      } else {
        throw new TypeError(`${tag} Unknown option: ${key}`);
      }
    }
  },
  "chelonia.persistentActions/enqueue"(...args) {
    const ids = [];
    for (const arg of args) {
      const action = Array.isArray(arg) ? new PersistentAction(arg) : new PersistentAction(arg.invocation, arg);
      this.actionsByID[action.id] = action;
      ids.push(action.id);
    }
    esm_default("chelonia.persistentActions/save").catch((e2) => {
      console.error("Error saving persistent actions", e2);
    });
    for (const id of ids) {
      this.actionsByID[id].attempt().catch((e2) => {
        console.error("Error attempting persistent action", id, e2);
      });
    }
    return ids;
  },
  // Forces retrying a given persisted action immediately, rather than waiting for the scheduled retry.
  // - 'status.failedAttemptsSoFar' will still be increased upon failure.
  // - Does nothing if a retry is already running.
  // - Does nothing if the action has already been resolved, rejected or cancelled.
  "chelonia.persistentActions/forceRetry"(id) {
    if (id in this.actionsByID) {
      return this.actionsByID[id].attempt();
    }
  },
  // Loads and tries every stored persistent action under the configured database key.
  async "chelonia.persistentActions/load"() {
    this.checkDatabaseKey();
    const storedActions = JSON.parse(await esm_default("chelonia.db/get", this.databaseKey) ?? "[]");
    for (const { id, invocation, options } of storedActions) {
      this.actionsByID[id] = new PersistentAction(invocation, options);
      this.actionsByID[id].id = id;
    }
    return esm_default("chelonia.persistentActions/retryAll");
  },
  // Retry all existing persisted actions.
  // TODO: add some delay between actions so as not to spam the server,
  // or have a way to issue them all at once in a single network call.
  "chelonia.persistentActions/retryAll"() {
    return Promise.allSettled(Object.keys(this.actionsByID).map((id) => esm_default("chelonia.persistentActions/forceRetry", id)));
  },
  // Updates the database version of the attempting action list.
  "chelonia.persistentActions/save"() {
    this.checkDatabaseKey();
    return esm_default("chelonia.db/set", this.databaseKey, JSON.stringify(Object.values(this.actionsByID)));
  },
  "chelonia.persistentActions/status"() {
    return Object.values(this.actionsByID).map((action) => ({
      id: action.id,
      invocation: action.invocation,
      ...action.status
    }));
  },
  // Pauses every currently loaded action, and removes them from memory.
  // Note: persistent storage is not affected, so that these actions can be later loaded again and retried.
  "chelonia.persistentActions/unload"() {
    for (const id in this.actionsByID) {
      if (this.actionsByID[id][timer]) {
        clearTimeout(this.actionsByID[id][timer]);
      }
      delete this.actionsByID[id];
    }
  }
});

// node_modules/@chelonia/lib/dist/esm/zkpp.mjs
var import_buffer7 = __toESM(require_buffer(), 1);
var import_scrypt_async2 = __toESM(require_scrypt_async(), 1);
var import_tweetnacl2 = __toESM(require_nacl_fast(), 1);

// node_modules/@chelonia/lib/dist/esm/index.mjs
var esm_default7 = [...chelonia_default, ...db_default, ...files_default, ...persistent_actions_default];

// frontend/controller/instance-keys.js
var PUBSUB_INSTANCE = "@instance/pubsub";

// frontend/model/contracts/manifests.json
var manifests_default = {
  manifests: {
    "gi.contracts/chatroom": "zL7mM9d4Xb4TTp57VcGmYNkXbmw3vYHneMZk5oLM6bwe91wGzXfNr77V",
    "gi.contracts/group": "zL7mM9d4Xb4TSoG13UfHQHqTJHLJyZ8rr46yjS6pQcnZCaFFcwVsTP8n",
    "gi.contracts/identity": "zL7mM9d4Xb4TLrdwzrjxAp9ZnW6po3yb1zXGpH7ym1er9mys3f6PZGEz"
  }
};

// frontend/setupChelonia.js
var handleDeletedContract = async (contractID) => {
  const { cheloniaState, contractState } = esm_default("chelonia/contract/fullState", contractID);
  if (!cheloniaState) return;
  await esm_default("chelonia/contract/remove", contractID, { permanent: true });
  const type = cheloniaState.type?.replace(/^gi\.contracts\//, "gi.actions/");
  const handler2 = type && esm_default("sbp/selectors/fn", `${type}/_ondeleted`);
  const currentIdentityState = esm_default("state/vuex/getters").currentIdentityState;
  if (currentIdentityState.fileDeleteTokens) {
    const manifestCids = Object.entries(currentIdentityState.fileDeleteTokens).filter(([, { billableContractID }]) => {
      return billableContractID === contractID;
    }).map(([cid]) => cid);
    await esm_default("gi.actions/identity/removeFiles", {
      manifestCids,
      option: {
        shouldDeleteToken: true
      }
    }).catch((e2) => {
      console.error("[handleDeletedContract] Error deleting saved tokens for deleted contract", contractID, e2);
    });
  }
  if (typeof handler2 === "function") {
    await handler2(contractID, contractState).catch((e2) => {
      console.error("[handleDeletedContract] Error handling deletion of contract", contractID, e2);
    });
  } else {
    console.warn("[handleDeletedContract] Received contract deletion notification for contract without a declared deletion handler", contractID, cheloniaState.type);
  }
};
var setupChelonia = async () => {
  await esm_default("gi.db/settings/load", SETTING_CHELONIA_STATE).then(async (cheloniaState) => {
    if (!cheloniaState) return;
    const identityContractID2 = await esm_default("gi.db/settings/load", SETTING_CURRENT_USER);
    if (!identityContractID2) return;
    await esm_default("chelonia/reset", cheloniaState);
    if (typeof WorkerGlobalScope === "function") {
      await esm_default("swLogs/startCapture", identityContractID2);
    }
  });
  const errorNotification = (activity, error, message, msgMeta) => {
    esm_default("gi.notifications/emit", "CHELONIA_ERROR", { createdDate: (/* @__PURE__ */ new Date()).toISOString(), activity, error, message, msgMeta });
    esm_default("appLogs/save").catch((e2) => {
      console.error("Error saving logs during error notification", e2);
    });
  };
  let logoutInProgress = false;
  const saveChelonia = () => esm_default("okTurtles.eventQueue/queueEvent", SETTING_CHELONIA_STATE, () => {
    if (logoutInProgress) return;
    return esm_default("gi.db/settings/save", SETTING_CHELONIA_STATE, esm_default("chelonia/rootState"));
  });
  const saveCheloniaDebounced = debounce(saveChelonia, 200);
  await esm_default("chelonia/configure", {
    connectionURL: esm_default("okTurtles.data/get", "API_URL"),
    // Because Chelonia state is kept separately from Vuex state, there is
    // no need to override stateSelector. However, `reactiveSet` and `reactiveDel`
    // are still needed to persist Chelonia state (this separation means that
    // Chelonia state and Vuex state need to be persisted separately).
    // // stateSelector: 'state/vuex/state',
    reactiveSet: (o2, k, v2) => {
      if (o2[k] !== v2) {
        o2[k] = v2;
        saveCheloniaDebounced();
      }
    },
    reactiveDel: (o2, k) => {
      if (has(o2, k)) {
        delete o2[k];
        saveCheloniaDebounced();
      }
    },
    contracts: {
      ...manifests_default,
      defaults: {
        modules: { "@common/common.js": common_exports },
        allowedSelectors: [
          "namespace/lookup",
          "namespace/lookupCached",
          // TODO: [SW] the `state/` selectors should _not_ be used from contracts
          // since they refer to Vuex (i.e., tab / window) state and not to
          // Chelonia state.
          "state/vuex/state",
          "state/vuex/settings",
          "state/vuex/commit",
          "state/vuex/getters",
          "chelonia/rootState",
          "chelonia/contract/state",
          "chelonia/contract/sync",
          "chelonia/contract/isSyncing",
          "chelonia/contract/remove",
          "chelonia/contract/retain",
          "chelonia/contract/release",
          "controller/router",
          "chelonia/contract/suitableSigningKey",
          "chelonia/contract/currentKeyIdByName",
          "chelonia/contract/foreignKeysByContractID",
          "chelonia/contract/setPendingKeyRevocation",
          "chelonia/storeSecretKeys",
          "chelonia/crypto/keyId",
          "chelonia/queueInvocation",
          "chelonia/contract/wait",
          "chelonia/out/deleteContract",
          "chelonia/contract/waitingForKeyShareTo",
          "chelonia/contract/successfulKeySharesByContractID",
          "gi.actions/group/removeOurselves",
          "gi.actions/group/groupProfileUpdate",
          "gi.actions/group/displayMincomeChangedPrompt",
          "gi.actions/group/addChatRoom",
          "gi.actions/group/join",
          "gi.actions/group/joinChatRoom",
          "gi.actions/identity/addJoinDirectMessageKey",
          "gi.actions/identity/leaveGroup",
          "gi.actions/chatroom/delete",
          "gi.notifications/emit",
          "gi.actions/out/rotateKeys",
          "gi.actions/group/shareNewKeys",
          "gi.actions/chatroom/shareNewKeys",
          "gi.actions/identity/shareNewPEK",
          "chelonia/out/keyDel",
          "chelonia/contract/disconnect",
          "gi.actions/identity/removeFiles",
          "gi.actions/chatroom/join",
          "gi.actions/chatroom/leave",
          "chelonia/contract/hasKeysToPerformOperation",
          "gi.actions/identity/kv/initChatRoomUnreadMessages",
          "gi.actions/identity/kv/deleteChatRoomUnreadMessages",
          "gi.actions/identity/kv/setChatRoomReadUntil",
          "gi.actions/identity/kv/addChatRoomUnreadMessage",
          "gi.actions/identity/kv/removeChatRoomUnreadMessage"
        ],
        allowedDomains: ["okTurtles.data", "okTurtles.events", "okTurtles.eventQueue", "gi.db", "gi.contracts"],
        preferSlim: true,
        exposedGlobals: {
          Intl: self.Intl,
          Set,
          // note: needs to be written this way and not simply "Notification"
          // because that breaks on mobile where Notification is undefined
          Notification: self.Notification
        }
      }
    },
    hooks: {
      syncContractError: (e2, contractID) => {
        if (!e2) return;
        if (e2.name === "ChelErrorResourceGone") {
          console.info("[syncContractError] Contract ID " + contractID + " has been deleted");
          handleDeletedContract(contractID).catch((e3) => {
            console.error("[syncContractError] Error handling contract deletion", e3);
          });
        }
        if (["ChelErrorUnrecoverable", "ChelErrorForkedChain"].includes(e2.name)) {
          esm_default("okTurtles.events/emit", SERIOUS_ERROR, e2, { contractID });
        }
      },
      handleEventError: (e2, message) => {
        if (["ChelErrorUnrecoverable", "ChelErrorForkedChain"].includes(e2?.name)) {
          const contractID = message.contractID();
          esm_default("okTurtles.events/emit", SERIOUS_ERROR, e2, { contractID, message });
        }
        if (esm_default("okTurtles.data/get", "sideEffectError") !== message.hash()) {
          errorNotification("handleEvent", e2, message);
        }
      },
      processError: (e2, message, msgMeta) => {
        if (e2.name === "GIErrorIgnoreAndBan") {
          esm_default("okTurtles.eventQueue/queueEvent", message.contractID(), [
            "gi.actions/group/autobanUser",
            message,
            e2,
            msgMeta
          ]);
        }
        if (e2.name === "ChelErrorDecryptionKeyNotFound") {
          return;
        }
        if (message.direction() === "outgoing") {
          console.warn("Ignoring error on outgoing message", message, e2);
          return;
        }
        errorNotification("process", e2, message, msgMeta);
      },
      sideEffectError: (e2, message) => {
        const contractID = message.contractID();
        esm_default("okTurtles.events/emit", SERIOUS_ERROR, e2, { contractID, message });
        esm_default("okTurtles.data/set", "sideEffectError", message.hash());
        errorNotification("sideEffect", e2, message);
      }
    }
  });
  esm_default("okTurtles.events/on", LOGIN_COMPLETE, () => {
    const state = esm_default("chelonia/rootState");
    if (!state.loggedIn) {
      console.warn("Received LOGIN_COMPLETE event but state.loggedIn is not an object");
      return;
    }
    esm_default("gi.actions/identity/kv/load").catch((e2) => {
      console.error("Error from 'gi.actions/identity/kv/load' during login:", e2);
    });
    saveChelonia().catch((e2) => {
      console.error("LOGIN_COMPLETE handler: Error saving Chelonia state", e2);
    });
  });
  esm_default("okTurtles.events/on", CHELONIA_STATE_MODIFIED, () => {
    saveChelonia().catch((e2) => {
      console.error("CHELONIA_STATE_MODIFIED handler: Error saving Chelonia state", e2);
    });
  });
  esm_default("okTurtles.events/on", LOGGING_OUT, () => {
    logoutInProgress = true;
  });
  esm_default("okTurtles.events/on", LOGOUT, () => {
    saveCheloniaDebounced.clear();
    Promise.all([
      esm_default("chelonia/reset"),
      esm_default("gi.db/settings/delete", SETTING_CHELONIA_STATE)
    ]).catch((e2) => {
      console.error("Logout event: error deleting Chelonia state:", e2);
    }).finally(() => {
      logoutInProgress = false;
    });
  });
  esm_default("okTurtles.events/on", CONTRACTS_MODIFIED, (_, { added }) => {
    if (!added.length) return;
    const rootState = esm_default("chelonia/rootState");
    added.forEach((cID) => {
      switch (rootState.contracts[cID]?.type) {
        case "gi.contracts/identity":
          if (cID === rootState.loggedIn?.identityContractID) {
            esm_default("chelonia/kv/setFilter", cID, [KV_KEYS.UNREAD_MESSAGES, KV_KEYS.PREFERENCES, KV_KEYS.NOTIFICATIONS]);
            return;
          }
          break;
        case "gi.contracts/group":
          esm_default("chelonia/kv/setFilter", cID, [KV_KEYS.LAST_LOGGED_IN]);
          return;
      }
      esm_default("chelonia/kv/setFilter", cID, []);
    });
  });
  esm_default("okTurtles.data/set", PUBSUB_INSTANCE, esm_default("chelonia/connect", {
    messageHandlers: {
      [NOTIFICATION_TYPE.VERSION_INFO](msg) {
        const ourVersion = "2.5.1@2026-01-21T06:08:30.231Z";
        const theirVersion = msg.data.GI_VERSION;
        const ourContractsVersion = "2.5.0";
        const theirContractsVersion = msg.data.CONTRACTS_VERSION;
        const isContractVersionDiff = ourContractsVersion !== theirContractsVersion;
        const isGIVersionDiff = ourVersion !== theirVersion;
        console.info("VERSION_INFO received:", {
          ourVersion,
          theirVersion,
          ourContractsVersion,
          theirContractsVersion
        });
        if (isContractVersionDiff || isGIVersionDiff) {
          esm_default("okTurtles.events/emit", NOTIFICATION_TYPE.VERSION_INFO, msg.data);
        }
      },
      [REQUEST_TYPE.PUSH_ACTION](msg) {
        esm_default("okTurtles.events/emit", REQUEST_TYPE.PUSH_ACTION, { data: msg.data });
      },
      [NOTIFICATION_TYPE.PUB](msg) {
        const { contractID, innerSigningContractID, data } = msg;
        switch (data[0]) {
          case "gi.contracts/chatroom/user-typing-event": {
            esm_default("okTurtles.events/emit", CHATROOM_USER_TYPING, { contractID, innerSigningContractID });
            break;
          }
          case "gi.contracts/chatroom/user-stop-typing-event": {
            esm_default("okTurtles.events/emit", CHATROOM_USER_STOP_TYPING, { contractID, innerSigningContractID });
            break;
          }
          default: {
            console.log(`[pubsub] Received data from channel ${contractID}:`, data);
          }
        }
      },
      [NOTIFICATION_TYPE.KV]([key, value]) {
        const { contractID, data } = value;
        if (!data) return;
        esm_default("okTurtles.events/emit", KV_EVENT, { contractID, key, data });
      },
      [NOTIFICATION_TYPE.DELETION](contractID) {
        console.info("[messageHandler] Contract ID " + contractID + " has been deleted");
        handleDeletedContract(contractID).catch((e2) => {
          console.error("[messageHandler] Error handling contract deletion", e2);
        });
      }
    },
    handlers: {
      offline() {
        esm_default("okTurtles.events/emit", OFFLINE);
      },
      online() {
        esm_default("okTurtles.events/emit", ONLINE);
        console.info("back online!");
      },
      "reconnection-attempt"() {
        esm_default("okTurtles.events/emit", RECONNECTING);
      },
      "reconnection-failed"() {
        esm_default("okTurtles.events/emit", RECONNECTION_FAILED);
      },
      "reconnection-succeeded"() {
        esm_default("okTurtles.events/emit", ONLINE);
        console.info("reconnected to pubsub!");
      }
    }
  }));
  esm_default("gi.db/settings/load", SETTING_CURRENT_USER).then(async (identityContractID2) => {
    const cheloniaState = await esm_default("chelonia/rootState");
    if (!cheloniaState || !identityContractID2) return;
    if (cheloniaState.loggedIn?.identityContractID !== identityContractID2) return;
    await esm_default("chelonia/contract/sync", identityContractID2).then(async () => {
      const contractIDs = groupContractsByType(cheloniaState.contracts);
      await syncContractsInOrder(contractIDs);
    }).catch((e2) => {
      console.error("[setupChelonia] Error syncing identity contract and groups", e2);
    });
  });
};
var setupChelonia_default = (() => {
  const singletonFn = () => {
    if (!promise) {
      promise = setupChelonia().catch((e2) => {
        console.error("[setupChelonia] Error during chelonia setup", e2);
        promise = void 0;
        throw e2;
      });
    }
    return promise;
  };
  let promise;
  esm_default("okTurtles.events/on", PUBSUB_ERROR, () => {
    if (!promise) return;
    promise = void 0;
    setTimeout(() => singletonFn().catch((e2) => {
      console.error("[PUBSUB_ERROR handler] Error setting up Chelonia", e2);
    }), 100);
  });
  return singletonFn;
})();

// frontend/controller/serviceworkers/push.js
var import_buffer8 = __toESM(require_buffer());
var strOrBufToBuf = (v2) => {
  if (typeof v2 === "string") {
    v2 = import_buffer8.Buffer.from(
      // Convert from base64url to base64
      v2.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat((4 - v2.length % 4) % 4),
      "base64"
    );
    return v2;
  }
  return new Uint8Array(v2);
};
var bufferEq = (a, b) => {
  if (a == null || b == null) return a == b;
  const ab = strOrBufToBuf(a);
  const bb = strOrBufToBuf(b);
  if (ab.byteLength !== bb.byteLength) return false;
  for (let i2 = ab.byteLength - 1; i2 >= 0; i2--) {
    if (ab[i2] !== bb[i2]) return false;
  }
  return true;
};
var push_default = esm_default("sbp/selectors/register", {
  "push/getSubscriptionOptions": (() => {
    let cachedVapidInformation;
    esm_default("okTurtles.events/on", REQUEST_TYPE.PUSH_ACTION, ({ data }) => {
      if (data.type !== PUSH_SERVER_ACTION_TYPE.SEND_PUBLIC_KEY) return;
      const oldKey = cachedVapidInformation?.[1].applicationServerKey;
      cachedVapidInformation = [performance.now(), {
        userVisibleOnly: true,
        applicationServerKey: data.data
      }];
      if (oldKey === data.data) return;
      (async () => {
        const subscription = await self.registration.pushManager.getSubscription();
        if (!subscription) return;
        if (bufferEq(subscription.options.applicationServerKey, data.data)) return;
        console.warn("VAPID server key changed; removing existing subscription and setting up a new one", {
          oldApplicationServerPublicKey: subscription.options.applicationServerKey && import_buffer8.Buffer.from(subscription.options.applicationServerKey).toString("base64"),
          newApplicationServerPublicKey: data.data
        });
        await subscription.unsubscribe();
        if (!esm_default("chelonia/rootState").loggedIn || esm_default("sw/deviceSettings/get", DEVICE_SETTINGS.DISABLE_NOTIFICATIONS)) return;
        const newSubscription = await self.registration.pushManager.subscribe(cachedVapidInformation[1]);
        await esm_default("push/reportExistingSubscription", newSubscription?.toJSON(), newSubscription?.options.applicationServerKey);
      })();
    });
    return () => {
      if (cachedVapidInformation && // Cache the VAPID information for one hour. The server public
      // information should change very infrequently, if it changes at all.
      performance.now() - cachedVapidInformation[0] < 36e5) {
        return Promise.resolve(cachedVapidInformation[1]);
      }
      return new Promise((resolve, reject) => {
        const handler2 = ({ data }) => {
          if (data.type !== PUSH_SERVER_ACTION_TYPE.SEND_PUBLIC_KEY) return;
          esm_default("okTurtles.events/off", REQUEST_TYPE.PUSH_ACTION, handler2);
          clearTimeout(timeoutId);
          resolve(cachedVapidInformation[1]);
        };
        const pubsub = esm_default("okTurtles.data/get", PUBSUB_INSTANCE);
        if (!pubsub) reject(new Error("Missing pubsub instance"));
        const readyState = pubsub.socket?.readyState;
        if (readyState !== WebSocket.OPEN) {
          reject(new Error("WebSocket connection is not open"));
        }
        esm_default("okTurtles.events/on", REQUEST_TYPE.PUSH_ACTION, handler2);
        const timeoutId = setTimeout(() => {
          esm_default("okTurtles.events/off", REQUEST_TYPE.PUSH_ACTION, handler2);
          reject(new Error("Timed out requesting VAPID key"));
        }, 1e4);
        pubsub.socket.send(createMessage(
          REQUEST_TYPE.PUSH_ACTION,
          { action: PUSH_SERVER_ACTION_TYPE.SEND_PUBLIC_KEY }
        ));
      });
    };
  })(),
  // This function reports the existing push subscription to the server
  // It is called in three scenarios:
  //   1. When a push subscription is created (usually right after granting the
  //      notification permission). This is done from outside of the SW, because
  //      requesting permissions can't be done from the SW itself and typically
  //      requires user interaction.
  //   2. When re-connecting (or connecting) to the server via WebSocket. This
  //      keeps push subscriptions paired to WS connections, so that we can
  //      seamlessly switch from WS to Web Push notifications on disconnection.
  //   3. On the 'pushsubscriptionchange' event. This is to let the server know
  //      to update the existing push subscription and replace it with a new
  //      one.
  "push/reportExistingSubscription": /* @__PURE__ */ (() => {
    const reportedSubscriptionBySocket = /* @__PURE__ */ new WeakMap();
    async function getSubID(subscription) {
      try {
        return await getSubscriptionId(subscription);
      } catch (e2) {
        return `ERR: ${e2.message}`;
      }
    }
    return async (subscriptionInfo, applicationServerKey) => {
      const pubsub = esm_default("okTurtles.data/get", PUBSUB_INSTANCE);
      if (!pubsub) throw new Error("Missing pubsub instance");
      const readyState = pubsub.socket?.readyState;
      if (readyState !== WebSocket.OPEN) {
        throw new Error("WebSocket connection is not open");
      }
      const socket = pubsub.socket;
      const reported = reportedSubscriptionBySocket.get(socket);
      reportedSubscriptionBySocket.set(socket, subscriptionInfo);
      if (subscriptionInfo?.endpoint) {
        if (!reported || subscriptionInfo.endpoint !== reported.endpoint) {
          const subID = await getSubID(subscriptionInfo);
          const host = new URL(subscriptionInfo.endpoint).host;
          console.info(`[reportExistingSubscription] reporting '${subID}':`, host);
          pubsub.socket.send(createMessage(
            REQUEST_TYPE.PUSH_ACTION,
            {
              action: PUSH_SERVER_ACTION_TYPE.STORE_SUBSCRIPTION,
              payload: {
                applicationServerKey: applicationServerKey ? import_buffer8.Buffer.from(applicationServerKey).toString("base64") : null,
                settings: {
                  heartbeatInterval: 12 * 60 * 60 * 1e3
                },
                subscriptionInfo
              }
            }
          ));
        }
      } else if (reported) {
        const subID = await getSubID(reported);
        const host = new URL(reported.endpoint).host;
        console.info(`[reportExistingSubscription] removing subscription '${subID}':`, host);
        pubsub.socket.send(createMessage(
          REQUEST_TYPE.PUSH_ACTION,
          { action: PUSH_SERVER_ACTION_TYPE.DELETE_SUBSCRIPTION, payload: null }
        ));
      }
    };
  })()
});
if (self.registration?.pushManager) {
  (() => {
    let inProgress = false;
    esm_default("okTurtles.events/on", PUBSUB_RECONNECTION_SUCCEEDED, async () => {
      if (inProgress) return;
      if (!esm_default("chelonia/rootState").loggedIn) return;
      inProgress = true;
      const disableNotifications = esm_default("sw/deviceSettings/get", DEVICE_SETTINGS.DISABLE_NOTIFICATIONS);
      console.info("pubsub reconnected. disableNotifications=", disableNotifications);
      if (!disableNotifications) {
        try {
          const subscription = await self.registration.pushManager.getSubscription();
          await esm_default("push/reportExistingSubscription", subscription?.toJSON(), subscription?.options.applicationServerKey);
        } catch (e2) {
          console.error("Error reporting subscription on reconnection", e2);
        }
      }
      inProgress = false;
    });
  })();
}
self.addEventListener("push", function(event) {
  if (!event.data) return;
  let data;
  try {
    data = event.data.json();
  } catch (e2) {
    console.error("[push event] Invalid JSON:", e2);
    return;
  }
  if (data.type === NOTIFICATION_TYPE.ENTRY) {
    event.waitUntil(setupChelonia_default().then(() => {
      if (data.data) return esm_default("chelonia/handleEvent", data.data);
      return esm_default("chelonia/contract/sync", data.contractID).catch((e2) => {
        console.error("[push event] Error syncing", data.contractID, e2);
      });
    }).catch((e2) => {
      console.error("Error processing push event", e2);
      if (data.contractType === "gi.contracts/chatroom") {
        return makeNotification({
          title: L("Chatroom activity"),
          body: L("New chatroom message. An iOS bug prevents us from saying what it is.")
        });
      } else if (data.contractType === "gi.contracts/group") {
        return makeNotification({
          title: L("Group activity"),
          body: L("New group activity. An iOS bug prevents us from saying what it is.")
        });
      }
    }));
  } else if (data.type === "recurring") {
    event.waitUntil(
      esm_default("gi.periodicNotifications/init")
    );
  }
}, false);
self.addEventListener("pushsubscriptionchange", function(event) {
  event.waitUntil((async () => {
    try {
      let subscription = null;
      if (event.oldSubscription) {
        subscription = await self.registration.pushManager.subscribe(event.oldSubscription.options);
      }
      await esm_default("push/reportExistingSubscription", subscription?.toJSON(), subscription?.options.applicationServerKey);
    } catch (e2) {
      console.error("[pushsubscriptionchange] Error resubscribing:", e2);
    }
  })());
}, false);
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "periodic-notifications") {
    event.waitUntil(
      esm_default("gi.periodicNotifications/init")
    );
  }
});

// frontend/controller/serviceworkers/sw-namespace.js
esm_default("sbp/selectors/register", {
  "namespace/lookupCached": (name) => {
    const cache2 = esm_default("chelonia/rootState").namespaceLookups;
    return cache2?.[name] ?? null;
  },
  "namespace/lookupReverseCached": (id) => {
    const cache2 = esm_default("chelonia/rootState").reverseNamespaceLookups;
    return cache2?.[id] ?? null;
  },
  "namespace/lookup": (name, { skipCache } = { skipCache: false }) => {
    if (!skipCache) {
      const cached = esm_default("namespace/lookupCached", name);
      if (cached) {
        return Promise.resolve(cached);
      }
    }
    return fetch(`${esm_default("okTurtles.data/get", "API_URL")}/name/${encodeURIComponent(name)}`).then((r) => {
      if (!r.ok) {
        console.warn(`namespace/lookup: ${r.status} for ${name}`);
        if (r.status !== 404) {
          throw new Error(`${r.status}: ${r.statusText}`);
        }
        return null;
      }
      return r["text"]();
    }).then((value) => {
      if (value !== null) {
        const reactiveSet = esm_default("chelonia/config").reactiveSet;
        const rootState = esm_default("chelonia/rootState");
        if (!rootState.namespaceLookups) reactiveSet(rootState, "namespaceLookups", /* @__PURE__ */ Object.create(null));
        if (!rootState.reverseNamespaceLookups) reactiveSet(rootState, "reverseNamespaceLookups", /* @__PURE__ */ Object.create(null));
        const cache2 = rootState.namespaceLookups;
        const reverseCache = rootState.reverseNamespaceLookups;
        reactiveSet(cache2, name, value);
        reactiveSet(reverseCache, value, name);
        esm_default("okTurtles.events/emit", NAMESPACE_REGISTRATION, { name, value });
      } else {
        const rootState = esm_default("chelonia/rootState");
        const cache2 = rootState.namespaceLookups;
        const currentValue = cache2?.[name];
        if (currentValue) {
          const reactiveDel = esm_default("chelonia/config").reactiveDel;
          const reverseCache = rootState.reverseNamespaceLookups;
          reactiveDel(cache2, name);
          if (reverseCache[currentValue] === name) {
            reactiveDel(cache2, currentValue);
          }
          esm_default("okTurtles.events/emit", NAMESPACE_REGISTRATION, { name, deletedValue: currentValue });
        }
      }
      return value;
    });
  }
});

// frontend/controller/serviceworkers/sw-primary.js
console.info("GI_VERSION:", "2.5.1@2026-01-21T06:08:30.231Z");
console.info("GI_GIT_VERSION:", "v2.5.1-24-g38225f05-dirty");
console.info("CONTRACTS_VERSION:", "2.5.0");
console.info("LIGHTWEIGHT_CLIENT:", "true");
console.info("NODE_ENV:", "development");
if ("") {
  const originalFetch = self.fetch;
  self.fetch = (...args) => {
    return originalFetch.apply(self, args).catch((e2) => {
      console.error("FETCH FAILED", args, new Error().stack, e2);
      throw e2;
    });
  };
}
deserializer.register(SPMessage);
deserializer.register(Secret);
var reducer = (o2, v2) => {
  o2[v2] = true;
  return o2;
};
var domainBlacklist = [
  "sbp",
  "okTurtles.data"
].reduce(reducer, {});
var selectorBlacklist = [
  "chelonia.db/get",
  "chelonia.db/set",
  "chelonia/rootState",
  "chelonia/haveSecretKey",
  "chelonia/private/enqueuePostSyncOps",
  "chelonia/private/invoke",
  "state/vuex/state",
  "state/vuex/getters",
  "state/vuex/settings",
  "gi.db/settings/save",
  "gi.db/logs/save"
].reduce(reducer, {});
esm_default("sbp/filters/global/add", (domain, selector, data) => {
  if (domainBlacklist[domain] || selectorBlacklist[selector]) return;
  console.debug(`[sbp] ${selector}`, data);
});
var setupRootState = () => {
  const rootState = esm_default("chelonia/rootState");
  if (!rootState.chatroom) rootState.chatroom = /* @__PURE__ */ Object.create(null);
  if (!rootState.chatroom.chatNotificationSettings) rootState.chatroom.chatNotificationSettings = /* @__PURE__ */ Object.create(null);
  if (!rootState.chatroom.chatRoomScrollPosition) rootState.chatroom.chatRoomScrollPosition = /* @__PURE__ */ Object.create(null);
  if (!rootState.chatroom.unreadMessages) rootState.chatroom.unreadMessages = /* @__PURE__ */ Object.create(null);
  if (!rootState.lastLoggedIn) rootState.lastLoggedIn = /* @__PURE__ */ Object.create(null);
  if (!rootState.notifications) rootState.notifications = /* @__PURE__ */ Object.create(null);
  if (!rootState.notifications.items) rootState.notifications.items = [];
  if (!rootState.notifications.status) rootState.notifications.status = /* @__PURE__ */ Object.create(null);
  if (!rootState.periodicNotificationAlreadyFiredMap) {
    rootState.periodicNotificationAlreadyFiredMap = {
      alreadyFired: /* @__PURE__ */ Object.create(null),
      // { notificationKey: boolean },
      lastRun: /* @__PURE__ */ Object.create(null)
      // { notificationKey: number },
    };
  }
  if (!rootState.namespaceLookups) rootState.namespaceLookups = /* @__PURE__ */ Object.create(null);
  if (!rootState.reverseNamespaceLookups) rootState.reverseNamespaceLookups = /* @__PURE__ */ Object.create(null);
  if (!rootState.deviceSettings) rootState.deviceSettings = /* @__PURE__ */ Object.create(null);
};
esm_default("okTurtles.events/on", CHELONIA_RESET, setupRootState);
var broadcastMessage = (...args) => {
  self.clients.matchAll().then((clientList) => {
    return Promise.all(clientList.map(async (client) => {
      return client.postMessage(...args);
    })).catch((e2) => {
      console.error("[broadcastMessage] Error", args, e2);
    });
  });
};
[
  CHELONIA_RESET,
  CONTRACTS_MODIFIED,
  CONTRACT_IS_SYNCING,
  ERROR_GROUP_GENERAL_CHATROOM_DOES_NOT_EXIST,
  ERROR_JOINING_CHATROOM,
  EVENT_HANDLED,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  LOGGING_OUT,
  ACCEPTED_GROUP,
  CHATROOM_USER_STOP_TYPING,
  CHATROOM_USER_TYPING,
  DELETED_CHATROOM,
  LEFT_CHATROOM,
  LEFT_GROUP,
  JOINED_CHATROOM,
  JOINED_GROUP,
  KV_EVENT,
  NEW_KV_LOAD_STATUS,
  NOTIFICATION_TYPE.VERSION_INFO,
  MESSAGE_RECEIVE,
  MESSAGE_SEND,
  NAMESPACE_REGISTRATION,
  NEW_LAST_LOGGED_IN,
  NEW_PREFERENCES,
  NEW_UNREAD_MESSAGES,
  NOTIFICATION_EMITTED,
  NOTIFICATION_REMOVED,
  NOTIFICATION_STATUS_LOADED,
  OFFLINE,
  ONLINE,
  RECONNECTING,
  RECONNECTION_FAILED,
  PROPOSAL_ARCHIVED,
  SERIOUS_ERROR,
  SWITCH_GROUP
].forEach((et) => {
  esm_default("okTurtles.events/on", et, (...args) => {
    const { data, transferables } = serializer(args);
    const message = {
      type: "event",
      subtype: et,
      data
    };
    broadcastMessage(message, transferables);
  });
});
esm_default("okTurtles.events/on", CONTRACT_REGISTERED, (contract) => {
  const argsCopy = {
    manifest: contract.manifest,
    name: contract.name
  };
  const { data, transferables } = serializer([argsCopy]);
  const message = {
    type: "event",
    subtype: CONTRACT_REGISTERED,
    data
  };
  broadcastMessage(message, transferables);
});
esm_default("okTurtles.events/on", NEW_CHATROOM_SCROLL_POSITION, (args) => {
  const argsCopy = { ...args, from: "sw" };
  const { data, transferables } = serializer([argsCopy]);
  const message = {
    type: "event",
    subtype: NEW_CHATROOM_SCROLL_POSITION,
    data
  };
  broadcastMessage(message, transferables);
});
esm_default("okTurtles.events/on", NEW_CHATROOM_NOTIFICATION_SETTINGS, (args) => {
  const argsCopy = { ...args, from: "sw" };
  const { data, transferables } = serializer([argsCopy]);
  const message = {
    type: "event",
    subtype: NEW_CHATROOM_NOTIFICATION_SETTINGS,
    data
  };
  broadcastMessage(message, transferables);
});
esm_default("okTurtles.events/on", CAPTURED_LOGS, (...args) => {
  const { data, transferables } = serializer(args);
  const message = {
    type: CAPTURED_LOGS,
    data
  };
  broadcastMessage(message, transferables);
});
esm_default("sbp/selectors/register", {
  "state/vuex/state": () => esm_default("chelonia/rootState"),
  "state/vuex/getters": /* @__PURE__ */ (() => {
    let computedGetters;
    return () => {
      if (!computedGetters) {
        computedGetters = /* @__PURE__ */ Object.create(null);
        Object.defineProperties(computedGetters, Object.fromEntries(Object.entries(getters_default2).map(([getter, fn]) => {
          return [getter, {
            get: function() {
              const state = esm_default("chelonia/rootState");
              return fn(state, this);
            }
          }];
        })));
        Object.defineProperties(computedGetters, Object.fromEntries(Object.entries(getters_default).map(([getter, fn]) => {
          return [getter, {
            get: function() {
              const state = esm_default("chelonia/rootState");
              return fn(state.chatroom || {}, this, state);
            }
          }];
        })));
        Object.defineProperties(computedGetters, Object.fromEntries(Object.entries(getters_default3).map(([getter, fn]) => {
          return [getter, {
            get: function() {
              const state = esm_default("chelonia/rootState");
              return fn(state.notifications || {}, this, state);
            }
          }];
        })));
        Object.defineProperty(computedGetters, "currentPaymentPeriodForGroup", {
          get: function() {
            return (state) => this.periodStampGivenDateForGroup(state, /* @__PURE__ */ new Date());
          }
        });
      }
      return computedGetters;
    };
  })()
});
var ourLocation = new URL(self.location);
esm_default("sbp/selectors/register", {
  "controller/router": () => {
    return { options: { base: ourLocation.searchParams.get("routerBase") } };
  }
});
esm_default("sbp/selectors/register", {
  "appLogs/save": () => esm_default("swLogs/save")
});
esm_default("sbp/selectors/register", {
  "sw/version": () => {
    return {
      GI_VERSION: "2.5.1@2026-01-21T06:08:30.231Z",
      GI_GIT_VERSION: "v2.5.1-24-g38225f05-dirty",
      CONTRACTS_VERSION: "2.5.0",
      LIGHTWEIGHT_CLIENT: "true",
      NODE_ENV: "development"
    };
  },
  "sw/deviceSettings/set": (key, value) => {
    const reactiveSet = esm_default("chelonia/config").reactiveSet;
    const rootState = esm_default("chelonia/rootState");
    reactiveSet(rootState.deviceSettings, key, value);
  },
  "sw/deviceSettings/get": (key) => {
    return esm_default("chelonia/rootState").deviceSettings[key];
  }
});
esm_default("gi.periodicNotifications/importNotifications", mainPeriodicNotificationEntries_default);
esm_default("okTurtles.events/on", CHELONIA_RESET, () => {
  esm_default("gi.periodicNotifications/clearStatesAndStopTimers");
  esm_default("gi.periodicNotifications/init");
});
var currentVersionInfo;
esm_default("okTurtles.events/on", NOTIFICATION_TYPE.VERSION_INFO, (versionInfo) => {
  currentVersionInfo = versionInfo;
});
esm_default("okTurtles.data/set", "API_URL", self.location.origin);
setupRootState();
var setupPromise = setupChelonia_default();
self.addEventListener("install", function(event) {
  console.debug("[sw] install");
  event.waitUntil(setupPromise.then(() => self.skipWaiting()));
});
self.addEventListener("activate", function(event) {
  console.debug("[sw] activate");
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function(event) {
  console.debug(`[sw] fetch : ${event.request.method} - ${event.request.url}`);
});
self.addEventListener("message", function(event) {
  console.debug(`[sw] message from ${event.source.id} of type ${event.data?.type}.`);
  if (typeof event.data === "object" && event.data.type) {
    console.debug("[sw] event received:", event.data);
    switch (event.data.type) {
      case "sbp": {
        const port = event.data.port;
        (async () => await esm_default(...deserializer(event.data.data)))().then((r) => {
          const { data, transferables } = serializer(r);
          port.postMessage([true, data], transferables);
        }).catch((e2) => {
          const { data, transferables } = serializer(e2);
          port.postMessage([false, data], transferables);
        }).finally(() => {
          port.close();
        });
        break;
      }
      case "ping":
        event.source.postMessage({ type: "pong" });
        break;
      case "shutdown":
        self.registration.unregister().then(function() {
          return self.clients.matchAll();
        }).then(function(clients) {
          clients.forEach((client) => client.navigate(client.url));
        });
        break;
      case "skip-waiting":
        self.skipWaiting();
        break;
      case "event":
        esm_default("okTurtles.events/emit", event.data.subtype, ...deserializer(event.data.data));
        break;
      case "ready": {
        const port = event.data.port;
        Promise.race([
          setupChelonia_default(),
          new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error("Timed out setting up Chelonia"));
            }, 3e4);
          })
        ]).then(() => {
          port.postMessage({
            type: "ready",
            currentSyncs: esm_default("chelonia/contract/currentSyncs"),
            GI_VERSION: "2.5.1@2026-01-21T06:08:30.231Z"
          });
        }, (e2) => {
          port.postMessage({ type: "error", error: e2 });
        }).finally(() => {
          port.close();
        });
        if (currentVersionInfo && event.source && event.data.GI_VERSION !== currentVersionInfo.GI_VERSION) {
          event.source.postMessage({
            type: "event",
            subtype: NOTIFICATION_TYPE.VERSION_INFO,
            data: [currentVersionInfo]
          });
        }
        break;
      }
      default:
        console.error("[sw] unknown message type:", event.data);
        break;
    }
  } else {
    console.error("[sw] unexpected data:", event.data);
  }
});
self.addEventListener("notificationclick", (event) => {
  console.debug("[sw] Notification clicked:", event.notification);
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clientList) => {
      clientList.sort((a, b) => {
        if (a.focused !== b.focused) {
          return a.focused ? -1 : 1;
        }
        if (a.visibilityState !== b.visibilityState) {
          if (a.visibilityState === "visible") return -1;
          if (b.visibilityState === "visible") return 1;
          if (a.visibilityState === "hidden") return 1;
          if (b.visibilityState === "hidden") return -1;
        }
        return 0;
      });
      if (!clientList.length) {
        return self.clients.openWindow(`${esm_default("controller/router").options.base}${event.notification.data.path ?? "/"}`).then((client2) => {
          if (event.notification.data?.sbpInvocation) {
            const { data } = serializer(event.notification.data.sbpInvocation);
            client2.postMessage({
              type: "sbp",
              data
            });
          } else if (event.notification.data?.groupID) {
            client2.postMessage({
              type: "sbp",
              data: ["state/vuex/commit", "setCurrentGroupId", { contractID: event.notification.data.groupID }]
            });
          }
          return client2;
        });
      }
      const client = clientList[0];
      if (event.notification.data?.sbpInvocation) {
        const { data } = serializer(event.notification.data.sbpInvocation);
        client.postMessage({
          type: "sbp",
          data
        });
      } else if (event.notification.data?.path) {
        client.postMessage({
          type: "navigate",
          groupID: event.notification.data.groupID,
          path: event.notification.data.path
        });
      }
      if (!client.focused) return client.focus();
    })
  );
});
esm_default("okTurtles.events/on", KV_EVENT, ({ contractID, key, data }) => {
  const rootState = esm_default("chelonia/rootState");
  const ourIdentityContractID = rootState.loggedIn?.identityContractID;
  if (contractID !== ourIdentityContractID) return;
  switch (key) {
    case KV_KEYS.LAST_LOGGED_IN: {
      rootState.lastLoggedIn[contractID] = data;
      break;
    }
    case KV_KEYS.UNREAD_MESSAGES: {
      rootState.chatroom.unreadMessages = data;
      break;
    }
    case KV_KEYS.PREFERENCES: {
      rootState.preferences = data;
      break;
    }
    case KV_KEYS.NOTIFICATIONS: {
      rootState.notifications.status = data;
      break;
    }
    case KV_KEYS.NS_CACHE: {
      esm_default("gi.actions/identity/kv/saveCachedNames").catch((e2) => {
        console.error("[NS_CACHE] Error on processing KV update", e2);
      });
      break;
    }
    default:
      return;
  }
  esm_default("okTurtles.events/emit", CHELONIA_STATE_MODIFIED);
});
esm_default("okTurtles.events/on", NEW_CHATROOM_SCROLL_POSITION, ({ chatRoomID, messageHash }) => {
  const rootState = esm_default("chelonia/rootState");
  if (messageHash) {
    rootState.chatroom.chatRoomScrollPosition[chatRoomID] = messageHash;
  } else {
    delete rootState.chatroom.chatRoomScrollPosition[chatRoomID];
  }
  esm_default("okTurtles.events/emit", CHELONIA_STATE_MODIFIED);
});
esm_default("okTurtles.events/on", NOTIFICATION_EMITTED, (notification) => {
  const rootState = esm_default("state/vuex/state");
  const rootGetters = esm_default("state/vuex/getters");
  const icon = notification.avatarUserID && rootGetters.ourContactProfilesById[notification.avatarUserID]?.picture ? rootGetters.ourContactProfilesById[notification.avatarUserID].picture : notification.groupID && rootState[notification.groupID] ? rootGetters.groupSettingsForGroup(rootState[notification.groupID]).groupPicture : void 0;
  makeNotification({
    icon: icon || void 0,
    title: notification.title,
    body: notification.plaintextBody,
    groupID: notification.groupID,
    path: notification.linkTo,
    sbpInvocation: notification.sbpInvocation
  }).catch((e2) => {
    console.error("Error displaying native notification", e2);
  });
});
esm_default("okTurtles.events/on", NEW_LAST_LOGGED_IN, ([contractID, data]) => {
  const rootState = esm_default("state/vuex/state");
  rootState.lastLoggedIn[contractID] = data;
});
esm_default("okTurtles.events/on", NEW_PREFERENCES, (preferences) => {
  const rootState = esm_default("state/vuex/state");
  rootState.preferences = preferences;
});
esm_default("okTurtles.events/on", NEW_UNREAD_MESSAGES, (currentChatRoomUnreadMessages) => {
  const rootState = esm_default("state/vuex/state");
  rootState.chatroom.unreadMessages = currentChatRoomUnreadMessages;
});
esm_default("okTurtles.events/on", NEW_CHATROOM_NOTIFICATION_SETTINGS, ({ chatRoomID, settings }) => {
  const rootState = esm_default("chelonia/rootState");
  if (chatRoomID) {
    if (!rootState.chatroom.chatNotificationSettings[chatRoomID]) {
      rootState.chatroom.chatNotificationSettings[chatRoomID] = {};
    }
    for (const key in settings) {
      rootState.chatroom.chatNotificationSettings[chatRoomID][key] = settings[key];
    }
  }
});
esm_default("okTurtles.events/on", NEW_KV_LOAD_STATUS, ({ name, status }) => {
  const rootState = esm_default("state/vuex/state");
  const defaultObj = {
    // enum of 'non-init' | 'loading' | 'loaded'
    identity: KV_LOAD_STATUS.NON_INIT,
    group: KV_LOAD_STATUS.NON_INIT
  };
  rootState.kvStoreStatus = {
    ...rootState?.kvStoreStatus || defaultObj,
    [name]: status
  };
});
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

scrypt-async/scrypt-async.js:
  (*!
   * Fast "async" scrypt implementation in JavaScript.
   * Copyright (c) 2013-2016 Dmitry Chestnykh | BSD License
   * https://github.com/dchest/scrypt-async-js
   *)
*/
//# sourceMappingURL=sw-primary.js.map
