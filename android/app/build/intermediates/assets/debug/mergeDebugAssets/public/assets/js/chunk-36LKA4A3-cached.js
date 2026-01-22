// frontend/views/components/PageSection.vue
var __vue_script__ = {
  name: "PageSection",
  props: {
    title: String,
    anchor: {
      type: String,
      default: ""
    }
  },
  computed: {
    titleHtml() {
      return this.anchor ? `<a class='c-section-anchor' href='#${this.anchor}'>${this.title}</a>` : this.title;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "section",
    { staticClass: "card", attrs: { id: _vm.anchor } },
    [
      _vm.$slots.cta ? _c(
        "div",
        { staticClass: "c-title-wrapper" },
        [
          _vm.title ? _c("h2", {
            directives: [
              {
                name: "safe-html",
                rawName: "v-safe-html:a",
                value: _vm.titleHtml,
                expression: "titleHtml",
                arg: "a"
              }
            ],
            staticClass: "is-title-3"
          }) : _vm._e(),
          _vm._t("cta")
        ],
        2
      ) : _vm.title ? _c("h2", {
        directives: [
          {
            name: "safe-html",
            rawName: "v-safe-html:a",
            value: _vm.titleHtml,
            expression: "titleHtml",
            arg: "a"
          }
        ],
        staticClass: "is-title-3"
      }) : _vm._e(),
      _vm._t("default")
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-56c090de_0", { source: ".c-title-wrapper[data-v-56c090de] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 1rem;\n}\n\n/*# sourceMappingURL=PageSection.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/PageSection.vue", "PageSection.vue"], "names": [], "mappings": "AA8BA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,aAAA;AC7BA;;AAEA,0CAA0C", "file": "PageSection.vue", "sourcesContent": ["<template lang='pug'>\nsection.card(:id='anchor')\n  .c-title-wrapper(v-if='$slots.cta')\n    h2.is-title-3(v-if='title' v-safe-html:a='titleHtml')\n    slot(name='cta')\n  h2.is-title-3(v-else-if='title' v-safe-html:a='titleHtml')\n  slot\n</template>\n\n<script>\nexport default ({\n  name: 'PageSection',\n  props: {\n    title: String,\n    anchor: {\n      type: String,\n      default: ''\n    }\n  },\n  computed: {\n    titleHtml () {\n      return this.anchor ? `<a class='c-section-anchor' href='#${this.anchor}'>${this.title}</a>` : this.title\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 1rem; // There should be a space between the title and the cta when they become two rows.\n}\n</style>\n", ".c-title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 1rem;\n}\n\n/*# sourceMappingURL=PageSection.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-56c090de";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\nsection.card(:id='anchor')\n  .c-title-wrapper(v-if='$slots.cta')\n    h2.is-title-3(v-if='title' v-safe-html:a='titleHtml')\n    slot(name='cta')\n  h2.is-title-3(v-else-if='title' v-safe-html:a='titleHtml')\n  slot\n</template>\n\n<script>\nexport default ({\n  name: 'PageSection',\n  props: {\n    title: String,\n    anchor: {\n      type: String,\n      default: ''\n    }\n  },\n  computed: {\n    titleHtml () {\n      return this.anchor ? `<a class='c-section-anchor' href='#${this.anchor}'>${this.title}</a>` : this.title\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 1rem; // There should be a space between the title and the cta when they become two rows.\n}\n</style>\n";
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
var PageSection_default = __vue_component__;

export {
  PageSection_default
};
//# sourceMappingURL=chunk-36LKA4A3-cached.js.map
