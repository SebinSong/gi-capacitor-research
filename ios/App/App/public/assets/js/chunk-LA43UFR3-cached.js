import {
  init_vue_esm,
  vue_esm_exports
} from "./chunk-K33NK7LD-cached.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-MKFIN2WI-cached.js";

// node_modules/vue-clickaway/dist/vue-clickaway.common.js
var require_vue_clickaway_common = __commonJS({
  "node_modules/vue-clickaway/dist/vue-clickaway.common.js"(exports) {
    "use strict";
    var Vue = (init_vue_esm(), __toCommonJS(vue_esm_exports));
    Vue = "default" in Vue ? Vue["default"] : Vue;
    var version = "2.2.2";
    var compatible = /^2\./.test(Vue.version);
    if (!compatible) {
      Vue.util.warn("VueClickaway " + version + " only supports Vue 2.x, and does not support Vue " + Vue.version);
    }
    var HANDLER = "_vue_clickaway_handler";
    function bind(el, binding, vnode) {
      unbind(el);
      var vm = vnode.context;
      var callback = binding.value;
      if (typeof callback !== "function") {
        if (true) {
          Vue.util.warn(
            "v-" + binding.name + '="' + binding.expression + '" expects a function value, got ' + callback
          );
        }
        return;
      }
      var initialMacrotaskEnded = false;
      setTimeout(function() {
        initialMacrotaskEnded = true;
      }, 0);
      el[HANDLER] = function(ev) {
        var path = ev.path || (ev.composedPath ? ev.composedPath() : void 0);
        if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
          return callback.call(vm, ev);
        }
      };
      document.documentElement.addEventListener("click", el[HANDLER], false);
    }
    function unbind(el) {
      document.documentElement.removeEventListener("click", el[HANDLER], false);
      delete el[HANDLER];
    }
    var directive = {
      bind,
      update: function(el, binding) {
        if (binding.value === binding.oldValue) return;
        bind(el, binding);
      },
      unbind
    };
    var mixin = {
      directives: { onClickaway: directive }
    };
    exports.version = version;
    exports.directive = directive;
    exports.mixin = mixin;
  }
});

export {
  require_vue_clickaway_common
};
//# sourceMappingURL=chunk-LA43UFR3-cached.js.map
