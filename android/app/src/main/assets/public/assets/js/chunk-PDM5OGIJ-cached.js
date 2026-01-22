// frontend/views/components/CharLengthIndicator.vue
var __vue_script__ = {
  name: "CharLengthIndicator",
  props: {
    max: {
      type: Number,
      required: true
    },
    currentLength: {
      type: Number,
      required: true
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isError() {
      return this.error || this.currentLength > this.max;
    },
    desc() {
      return `${this.currentLength}/${this.max}`;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { staticClass: "c-char-len", class: { "is-error": _vm.isError } },
    [_vm._v(_vm._s(_vm.desc))]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5ecc27ec_0", { source: ".c-char-len[data-v-5ecc27ec] {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.5rem;\n}\n.c-char-len.is-error[data-v-5ecc27ec] {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=CharLengthIndicator.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/CharLengthIndicator.vue", "CharLengthIndicator.vue"], "names": [], "mappings": "AAmCA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,qBAAA;AClCA;ADoCA;EACA,sBAAA;AClCA;;AAEA,kDAAkD", "file": "CharLengthIndicator.vue", "sourcesContent": ['<template lang="pug">\n  span.c-char-len(:class=\'{ "is-error": isError }\') {{ desc }}\n</template>\n\n<script>\nexport default {\n  name: \'CharLengthIndicator\',\n  props: {\n    max: {\n      type: Number,\n      required: true\n    },\n    currentLength: {\n      type: Number,\n      required: true\n    },\n    error: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    isError () {\n      return this.error || this.currentLength > this.max\n    },\n    desc () {\n      return `${this.currentLength}/${this.max}`\n    }\n  }\n}\n<\/script>\n\n<style lang="scss" scoped>\n@import "../../../frontend/assets/style/_variables.scss";\n\n.c-char-len {\n  display: inline-block;\n  line-height: $size_4;\n  font-size: $size_5;\n  color: $text_1;\n  flex-shrink: 0;\n  margin-bottom: 0.5rem;\n\n  &.is-error {\n    color: $danger_0;\n  }\n}\n</style>\n', ".c-char-len {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.5rem;\n}\n.c-char-len.is-error {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=CharLengthIndicator.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5ecc27ec";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = '<template lang="pug">\n  span.c-char-len(:class=\'{ "is-error": isError }\') {{ desc }}\n</template>\n\n<script>\nexport default {\n  name: \'CharLengthIndicator\',\n  props: {\n    max: {\n      type: Number,\n      required: true\n    },\n    currentLength: {\n      type: Number,\n      required: true\n    },\n    error: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    isError () {\n      return this.error || this.currentLength > this.max\n    },\n    desc () {\n      return `${this.currentLength}/${this.max}`\n    }\n  }\n}\n<\/script>\n\n<style lang="scss" scoped>\n@import "../../../frontend/assets/style/_variables.scss";\n\n.c-char-len {\n  display: inline-block;\n  line-height: $size_4;\n  font-size: $size_5;\n  color: $text_1;\n  flex-shrink: 0;\n  margin-bottom: 0.5rem;\n\n  &.is-error {\n    color: $danger_0;\n  }\n}\n</style>\n';
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (true) {
    let hook;
    if (false) {
      hook = function(context) {
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      component._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function(context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function(context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook !== void 0) {
      if (component.functional) {
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }
  return component;
}
function __vue_create_injector__() {
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;
    const group = isOldIE ? css.media || "default" : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);
      if (false) {
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
        code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
      }
      if (isOldIE) {
        style.element = style.element || document.querySelector("style[data-group=" + group + "]");
      }
      if (!style.element) {
        const head = document.head || document.getElementsByTagName("head")[0];
        const el = style.element = document.createElement("style");
        el.type = "text/css";
        if (css.media) el.setAttribute("media", css.media);
        if (isOldIE) {
          el.setAttribute("data-group", group);
          el.setAttribute("data-next-index", "0");
        }
        head.appendChild(el);
      }
      if (isOldIE) {
        index = parseInt(style.element.getAttribute("data-next-index"));
        style.element.setAttribute("data-next-index", index + 1);
      }
      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  };
}
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  __vue_create_injector__,
  void 0,
  void 0
);
var CharLengthIndicator_default = __vue_component__;

export {
  CharLengthIndicator_default
};
//# sourceMappingURL=chunk-PDM5OGIJ-cached.js.map
