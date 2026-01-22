import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/components/banners/BannerSimple.vue
var __vue_script__ = {
  name: "BannerSimple",
  props: {
    severity: {
      type: String,
      default: "info",
      validator: function(value) {
        return ["success", "info", "warning", "danger", "general"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    getIcon() {
      return {
        warning: "icon-exclamation-triangle c-icon",
        danger: "icon-times-circle c-icon",
        info: "icon-info-circle c-icon",
        success: "icon-check-circle c-icon",
        general: "icon-info-circle c-icon"
      }[this.severity];
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-message",
      class: "is-" + _vm.severity,
      attrs: { "aria-live": "polite" }
    },
    [
      _c("i", { class: _vm.getIcon }),
      _c("div", { staticClass: "c-content" }, [
        _c("div", { staticClass: "c-header" }, [_vm._t("header")], 2),
        _c(
          "div",
          { staticClass: "c-body", attrs: { "data-test": "bannerMsg" } },
          [_vm._t("default")],
          2
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-77cdaf4b_0", { source: ".c-message[data-v-77cdaf4b] {\n  padding: 1rem;\n  border-radius: 5px;\n  display: flex;\n  align-items: flex-start;\n}\n.c-message strong[data-v-77cdaf4b] {\n  color: currentColor;\n}\n.c-message[data-v-77cdaf4b]  .link {\n  font-weight: inherit;\n  color: currentColor;\n  border-bottom-color: currentColor;\n}\n.c-message[data-v-77cdaf4b]  .link:hover, .c-message[data-v-77cdaf4b]  .link:focus {\n  color: var(--text_0);\n  border-bottom-color: var(--text_0);\n}\n.c-message.is-general[data-v-77cdaf4b] {\n  background-color: var(--general_1);\n  color: var(--text_1);\n}\n.c-message.is-general .c-icon[data-v-77cdaf4b] {\n  color: var(--text_1);\n}\n.c-message.is-info[data-v-77cdaf4b] {\n  background-color: var(--primary_2);\n  color: var(--primary_0);\n}\n.c-message.is-info .c-icon[data-v-77cdaf4b] {\n  color: var(--primary_1);\n}\n.c-message.is-danger[data-v-77cdaf4b] {\n  background-color: var(--danger_2);\n  color: var(--danger_0);\n}\n.c-message.is-danger .c-icon[data-v-77cdaf4b] {\n  color: var(--danger_1);\n}\n.c-message.is-warning[data-v-77cdaf4b] {\n  background-color: var(--warning_2);\n  color: var(--warning_0_text);\n}\n.c-message.is-warning .c-icon[data-v-77cdaf4b] {\n  color: var(--warning_1);\n}\n.c-message.is-success[data-v-77cdaf4b] {\n  background-color: var(--success_2);\n  color: var(--success_0);\n}\n.c-message.is-success .c-icon[data-v-77cdaf4b] {\n  color: var(--success_1);\n}\n.c-icon[data-v-77cdaf4b] {\n  font-size: 1.125rem;\n  margin-right: 1rem;\n}\n.c-content[data-v-77cdaf4b] {\n  margin-top: 0.125rem;\n  flex-grow: 1;\n}\n.c-header[data-v-77cdaf4b] {\n  display: block;\n  color: var(--text_0);\n}\n.is-dark-theme .c-message[data-v-77cdaf4b] {\n  color: var(--text_0);\n}\n.is-dark-theme .c-message.is-info .c-icon[data-v-77cdaf4b] {\n  color: var(--primary_0);\n}\n.is-dark-theme .c-message.is-danger .c-icon[data-v-77cdaf4b] {\n  color: var(--danger_0);\n}\n.is-dark-theme .c-message.is-warning .c-icon[data-v-77cdaf4b] {\n  color: var(--warning_0);\n}\n.is-dark-theme .c-message.is-success .c-icon[data-v-77cdaf4b] {\n  color: var(--success_0);\n}\n\n/*# sourceMappingURL=BannerSimple.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/banners/BannerSimple.vue", "BannerSimple.vue"], "names": [], "mappings": "AA0CA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;ACzCA;AD2CA;EACA,mBAAA;ACzCA;AD4CA;EACA,oBAAA;EACA,mBAAA;EACA,iCAAA;AC1CA;AD4CA;EAEA,oBAAA;EACA,kCAAA;AC3CA;AD+CA;EACA,kCAAA;EACA,oBAAA;AC7CA;AD+CA;EACA,oBAAA;AC7CA;ADiDA;EACA,kCAAA;EACA,uBAAA;AC/CA;ADiDA;EACA,uBAAA;AC/CA;ADmDA;EACA,iCAAA;EACA,sBAAA;ACjDA;ADmDA;EACA,sBAAA;ACjDA;ADqDA;EACA,kCAAA;EACA,4BAAA;ACnDA;ADqDA;EACA,uBAAA;ACnDA;ADuDA;EACA,kCAAA;EACA,uBAAA;ACrDA;ADuDA;EACA,uBAAA;ACrDA;AD0DA;EACA,mBAAA;EACA,kBAAA;ACvDA;AD0DA;EACA,oBAAA;EACA,YAAA;ACvDA;AD0DA;EACA,cAAA;EACA,oBAAA;ACvDA;AD0DA;EACA,oBAAA;ACvDA;ADyDA;EACA,uBAAA;ACvDA;AD0DA;EACA,sBAAA;ACxDA;AD2DA;EACA,uBAAA;ACzDA;AD4DA;EACA,uBAAA;AC1DA;;AAEA,2CAA2C", "file": "BannerSimple.vue", "sourcesContent": [`<template lang='pug'>
.c-message(:class='\`is-\${severity}\`' aria-live='polite')
  i(:class='getIcon')

  .c-content
    .c-header
      slot(name='header')

    .c-body(data-test='bannerMsg')
      slot
</template>

<script>
export default ({
  name: 'BannerSimple',
  props: {
    severity: {
      type: String,
      default: 'info',
      validator: function (value) {
        // The value must match one of these strings
        return ['success', 'info', 'warning', 'danger', 'general'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    getIcon () {
      return {
        warning: 'icon-exclamation-triangle c-icon',
        danger: 'icon-times-circle c-icon',
        info: 'icon-info-circle c-icon',
        success: 'icon-check-circle c-icon',
        general: 'icon-info-circle c-icon'
      }[this.severity]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-message {
  padding: 1rem;
  border-radius: $radius-large;
  display: flex;
  align-items: flex-start;

  strong {
    color: currentColor;
  }

  ::v-deep .link {
    font-weight: inherit;
    color: currentColor;
    border-bottom-color: currentColor;

    &:hover,
    &:focus {
      color: $text_0;
      border-bottom-color: $text_0;
    }
  }

  &.is-general {
    background-color: $general_1;
    color: $text_1;

    .c-icon {
      color: $text_1;
    }
  }

  &.is-info {
    background-color: $primary_2;
    color: $primary_0;

    .c-icon {
      color: $primary_1;
    }
  }

  &.is-danger {
    background-color: $danger_2;
    color: $danger_0;

    .c-icon {
      color: $danger_1;
    }
  }

  &.is-warning {
    background-color: $warning_2;
    color: $warning_0_text;

    .c-icon {
      color: $warning_1;
    }
  }

  &.is-success {
    background-color: $success_2;
    color: $success_0;

    .c-icon {
      color: $success_1;
    }
  }
}

.c-icon {
  font-size: $size_3;
  margin-right: 1rem;
}

.c-content {
  margin-top: 0.125rem; // visually better, with 1 or multiple lines
  flex-grow: 1;
}

.c-header {
  display: block;
  color: $text_0;
}

.is-dark-theme .c-message {
  color: $text_0;

  &.is-info .c-icon {
    color: $primary_0;
  }

  &.is-danger .c-icon {
    color: $danger_0;
  }

  &.is-warning .c-icon {
    color: $warning_0;
  }

  &.is-success .c-icon {
    color: $success_0;
  }
}
</style>
`, ".c-message {\n  padding: 1rem;\n  border-radius: 5px;\n  display: flex;\n  align-items: flex-start;\n}\n.c-message strong {\n  color: currentColor;\n}\n.c-message ::v-deep .link {\n  font-weight: inherit;\n  color: currentColor;\n  border-bottom-color: currentColor;\n}\n.c-message ::v-deep .link:hover, .c-message ::v-deep .link:focus {\n  color: var(--text_0);\n  border-bottom-color: var(--text_0);\n}\n.c-message.is-general {\n  background-color: var(--general_1);\n  color: var(--text_1);\n}\n.c-message.is-general .c-icon {\n  color: var(--text_1);\n}\n.c-message.is-info {\n  background-color: var(--primary_2);\n  color: var(--primary_0);\n}\n.c-message.is-info .c-icon {\n  color: var(--primary_1);\n}\n.c-message.is-danger {\n  background-color: var(--danger_2);\n  color: var(--danger_0);\n}\n.c-message.is-danger .c-icon {\n  color: var(--danger_1);\n}\n.c-message.is-warning {\n  background-color: var(--warning_2);\n  color: var(--warning_0_text);\n}\n.c-message.is-warning .c-icon {\n  color: var(--warning_1);\n}\n.c-message.is-success {\n  background-color: var(--success_2);\n  color: var(--success_0);\n}\n.c-message.is-success .c-icon {\n  color: var(--success_1);\n}\n\n.c-icon {\n  font-size: 1.125rem;\n  margin-right: 1rem;\n}\n\n.c-content {\n  margin-top: 0.125rem;\n  flex-grow: 1;\n}\n\n.c-header {\n  display: block;\n  color: var(--text_0);\n}\n\n.is-dark-theme .c-message {\n  color: var(--text_0);\n}\n.is-dark-theme .c-message.is-info .c-icon {\n  color: var(--primary_0);\n}\n.is-dark-theme .c-message.is-danger .c-icon {\n  color: var(--danger_0);\n}\n.is-dark-theme .c-message.is-warning .c-icon {\n  color: var(--warning_0);\n}\n.is-dark-theme .c-message.is-success .c-icon {\n  color: var(--success_0);\n}\n\n/*# sourceMappingURL=BannerSimple.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-77cdaf4b";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-message(:class='\`is-\${severity}\`' aria-live='polite')
  i(:class='getIcon')

  .c-content
    .c-header
      slot(name='header')

    .c-body(data-test='bannerMsg')
      slot
</template>

<script>
export default ({
  name: 'BannerSimple',
  props: {
    severity: {
      type: String,
      default: 'info',
      validator: function (value) {
        // The value must match one of these strings
        return ['success', 'info', 'warning', 'danger', 'general'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    getIcon () {
      return {
        warning: 'icon-exclamation-triangle c-icon',
        danger: 'icon-times-circle c-icon',
        info: 'icon-info-circle c-icon',
        success: 'icon-check-circle c-icon',
        general: 'icon-info-circle c-icon'
      }[this.severity]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-message {
  padding: 1rem;
  border-radius: $radius-large;
  display: flex;
  align-items: flex-start;

  strong {
    color: currentColor;
  }

  ::v-deep .link {
    font-weight: inherit;
    color: currentColor;
    border-bottom-color: currentColor;

    &:hover,
    &:focus {
      color: $text_0;
      border-bottom-color: $text_0;
    }
  }

  &.is-general {
    background-color: $general_1;
    color: $text_1;

    .c-icon {
      color: $text_1;
    }
  }

  &.is-info {
    background-color: $primary_2;
    color: $primary_0;

    .c-icon {
      color: $primary_1;
    }
  }

  &.is-danger {
    background-color: $danger_2;
    color: $danger_0;

    .c-icon {
      color: $danger_1;
    }
  }

  &.is-warning {
    background-color: $warning_2;
    color: $warning_0_text;

    .c-icon {
      color: $warning_1;
    }
  }

  &.is-success {
    background-color: $success_2;
    color: $success_0;

    .c-icon {
      color: $success_1;
    }
  }
}

.c-icon {
  font-size: $size_3;
  margin-right: 1rem;
}

.c-content {
  margin-top: 0.125rem; // visually better, with 1 or multiple lines
  flex-grow: 1;
}

.c-header {
  display: block;
  color: $text_0;
}

.is-dark-theme .c-message {
  color: $text_0;

  &.is-info .c-icon {
    color: $primary_0;
  }

  &.is-danger .c-icon {
    color: $danger_0;
  }

  &.is-warning .c-icon {
    color: $warning_0;
  }

  &.is-success .c-icon {
    color: $success_0;
  }
}
</style>
`;
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
var BannerSimple_default = __vue_component__;

// frontend/views/components/TransitionExpand.vue
var __vue_script__2 = {
  name: "TransitionExpand",
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: "expand"
      },
      on: {
        afterEnter(element) {
          element.style.height = "auto";
        },
        enter(element) {
          if (esm_default("state/vuex/state").reducedMotion) {
            return;
          }
          const { width } = getComputedStyle(element);
          element.style.width = width;
          element.style.position = "absolute";
          element.style.visibility = "hidden";
          element.style.height = "auto";
          const { height } = getComputedStyle(element);
          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;
          getComputedStyle(element).height;
          setTimeout(() => {
            element.style.height = height;
          });
        },
        leave(element) {
          if (esm_default("state/vuex/state").reducedMotion) {
            return;
          }
          const { height } = getComputedStyle(element);
          element.style.height = height;
          getComputedStyle(element).height;
          setTimeout(() => {
            element.style.height = 0;
          });
        }
      }
    };
    return createElement("transition", data, context.children);
  }
};
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-6638a9d2_0", { source: "\n*[data-v-6638a9d2] {\n  will-change: height;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n  overflow: hidden;\n}\n", map: { "version": 3, "sources": ["frontend/views/components/TransitionExpand.vue"], "names": [], "mappings": ";AA8DA;EACA,mBAAA;EACA,wBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AACA", "file": "TransitionExpand.vue", "sourcesContent": ["<script>\nimport sbp from '@sbp/sbp'\n\n// From https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/\nexport default ({\n  name: 'TransitionExpand',\n  functional: true,\n  render (createElement, context) {\n    const data = {\n      props: {\n        name: 'expand'\n      },\n      on: {\n        afterEnter (element) {\n          element.style.height = 'auto'\n        },\n        enter (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { width } = getComputedStyle(element)\n          element.style.width = width\n          element.style.position = 'absolute'\n          element.style.visibility = 'hidden'\n          element.style.height = 'auto'\n\n          const { height } = getComputedStyle(element)\n          element.style.width = null\n          element.style.position = null\n          element.style.visibility = null\n          element.style.height = 0\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n          setTimeout(() => {\n            element.style.height = height\n          })\n        },\n        leave (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { height } = getComputedStyle(element)\n          element.style.height = height\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n\n          setTimeout(() => {\n            element.style.height = 0\n          })\n        }\n      }\n    }\n    return createElement('transition', data, context.children)\n  }\n}: Object)\n<\/script>\n\n<style scoped>\n  * {\n    will-change: height;\n    transform: translateZ(0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n    overflow: hidden;\n  }\n</style>\n\n<style>\n#app:not(.js-reducedMotion) .expand-enter-active,\n#app:not(.js-reducedMotion) .expand-leave-active {\n  opacity: 1;\n  transition:\n    height 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92),\n    opacity 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92);\n  overflow: hidden;\n}\n\n#app:not(.js-reducedMotion) .expand-enter,\n#app:not(.js-reducedMotion) .expand-leave-to {\n  opacity: 0;\n  height: 0;\n}\n</style>\n"] }, media: void 0 }), inject("data-v-6638a9d2_1", { source: "\n#app:not(.js-reducedMotion) .expand-enter-active,\n#app:not(.js-reducedMotion) .expand-leave-active {\n  opacity: 1;\n  transition:\n    height 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92),\n    opacity 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92);\n  overflow: hidden;\n}\n#app:not(.js-reducedMotion) .expand-enter,\n#app:not(.js-reducedMotion) .expand-leave-to {\n  opacity: 0;\n  height: 0;\n}\n", map: { "version": 3, "sources": ["frontend/views/components/TransitionExpand.vue"], "names": [], "mappings": ";AAwEA;;EAEA,UAAA;EACA;;qDAEA;EACA,gBAAA;AACA;AAEA;;EAEA,UAAA;EACA,SAAA;AACA", "file": "TransitionExpand.vue", "sourcesContent": ["<script>\nimport sbp from '@sbp/sbp'\n\n// From https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/\nexport default ({\n  name: 'TransitionExpand',\n  functional: true,\n  render (createElement, context) {\n    const data = {\n      props: {\n        name: 'expand'\n      },\n      on: {\n        afterEnter (element) {\n          element.style.height = 'auto'\n        },\n        enter (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { width } = getComputedStyle(element)\n          element.style.width = width\n          element.style.position = 'absolute'\n          element.style.visibility = 'hidden'\n          element.style.height = 'auto'\n\n          const { height } = getComputedStyle(element)\n          element.style.width = null\n          element.style.position = null\n          element.style.visibility = null\n          element.style.height = 0\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n          setTimeout(() => {\n            element.style.height = height\n          })\n        },\n        leave (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { height } = getComputedStyle(element)\n          element.style.height = height\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n\n          setTimeout(() => {\n            element.style.height = 0\n          })\n        }\n      }\n    }\n    return createElement('transition', data, context.children)\n  }\n}: Object)\n<\/script>\n\n<style scoped>\n  * {\n    will-change: height;\n    transform: translateZ(0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n    overflow: hidden;\n  }\n</style>\n\n<style>\n#app:not(.js-reducedMotion) .expand-enter-active,\n#app:not(.js-reducedMotion) .expand-leave-active {\n  opacity: 1;\n  transition:\n    height 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92),\n    opacity 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92);\n  overflow: hidden;\n}\n\n#app:not(.js-reducedMotion) .expand-enter,\n#app:not(.js-reducedMotion) .expand-leave-to {\n  opacity: 0;\n  height: 0;\n}\n</style>\n"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-6638a9d2";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = void 0;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<script>\nimport sbp from '@sbp/sbp'\n\n// From https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/\nexport default ({\n  name: 'TransitionExpand',\n  functional: true,\n  render (createElement, context) {\n    const data = {\n      props: {\n        name: 'expand'\n      },\n      on: {\n        afterEnter (element) {\n          element.style.height = 'auto'\n        },\n        enter (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { width } = getComputedStyle(element)\n          element.style.width = width\n          element.style.position = 'absolute'\n          element.style.visibility = 'hidden'\n          element.style.height = 'auto'\n\n          const { height } = getComputedStyle(element)\n          element.style.width = null\n          element.style.position = null\n          element.style.visibility = null\n          element.style.height = 0\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n          setTimeout(() => {\n            element.style.height = height\n          })\n        },\n        leave (element) {\n          if (sbp('state/vuex/state').reducedMotion) { return }\n\n          const { height } = getComputedStyle(element)\n          element.style.height = height\n\n          // Force repaint to make sure the\n          // animation is triggered correctly.\n          // eslint-disable-next-line no-unused-expressions\n          getComputedStyle(element).height\n\n          setTimeout(() => {\n            element.style.height = 0\n          })\n        }\n      }\n    }\n    return createElement('transition', data, context.children)\n  }\n}: Object)\n<\/script>\n\n<style scoped>\n  * {\n    will-change: height;\n    transform: translateZ(0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n    overflow: hidden;\n  }\n</style>\n\n<style>\n#app:not(.js-reducedMotion) .expand-enter-active,\n#app:not(.js-reducedMotion) .expand-leave-active {\n  opacity: 1;\n  transition:\n    height 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92),\n    opacity 200ms cubic-bezier(0.82, 0.09, 0.4, 0.92);\n  overflow: hidden;\n}\n\n#app:not(.js-reducedMotion) .expand-enter,\n#app:not(.js-reducedMotion) .expand-leave-to {\n  opacity: 0;\n  height: 0;\n}\n</style>\n";
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
function __vue_create_injector__2() {
  const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2(
  {},
  __vue_inject_styles__2,
  __vue_script__2,
  __vue_scope_id__2,
  __vue_is_functional_template__2,
  __vue_module_identifier__2,
  false,
  __vue_create_injector__2,
  void 0,
  void 0
);
var TransitionExpand_default = __vue_component__2;

// frontend/views/components/banners/BannerScoped.vue
var __vue_script__3 = {
  name: "BannerScoped",
  components: {
    BannerSimple: BannerSimple_default,
    TransitionExpand: TransitionExpand_default
  },
  props: {
    dataTest: {
      type: String,
      default: "feedbackMsg"
    },
    allowA: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ephemeral: {
      text: null,
      severity: null
    }
  }),
  methods: {
    // To be used by parent. Example:
    // this.$refs.BannerScoped.success(L('Changes saved!'))
    clean() {
      this.updateBanner("", "");
    },
    danger(text) {
      this.updateBanner(text, "danger");
    },
    success(text) {
      this.updateBanner(text, "success");
    },
    updateBanner(text, severity) {
      this.ephemeral.text = text;
      this.ephemeral.severity = severity;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition-expand", [
    _vm.ephemeral.text ? _c(
      "div",
      { staticClass: "c-container" },
      [
        _c(
          "banner-simple",
          {
            staticClass: "c-banner",
            attrs: { severity: _vm.ephemeral.severity }
          },
          [
            _c("div", { staticClass: "c-inner" }, [
              _vm.allowA ? _c(
                "div",
                {
                  staticClass: "c-inner-text",
                  attrs: { "data-test": _vm.dataTest, role: "alert" }
                },
                [
                  _c("span", {
                    directives: [
                      {
                        name: "safe-html",
                        rawName: "v-safe-html:a",
                        value: _vm.ephemeral.text,
                        expression: "ephemeral.text",
                        arg: "a"
                      }
                    ]
                  })
                ]
              ) : _c("div", {
                directives: [
                  {
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: _vm.ephemeral.text,
                    expression: "ephemeral.text"
                  }
                ],
                staticClass: "c-inner-text",
                attrs: { "data-test": _vm.dataTest, role: "alert" }
              }),
              _c(
                "button",
                {
                  staticClass: "is-icon-small c-button",
                  class: "is-" + _vm.ephemeral.severity,
                  attrs: {
                    type: "button",
                    "aria-label": _vm.L("Dismiss message")
                  },
                  on: { click: _vm.clean }
                },
                [_c("i", { staticClass: "icon-times" })]
              )
            ])
          ]
        )
      ],
      1
    ) : _vm._e()
  ]);
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-2ddb0df2_0", { source: ".c-container[data-v-2ddb0df2] {\n  display: flex; /* so margins don't collapse and transition is smooth */\n  align-items: flex-start;\n  overflow: hidden;\n}\n.c-banner[data-v-2ddb0df2] {\n  width: 100%;\n  margin-top: 1.5rem;\n  overflow: hidden;\n}\n.c-inner[data-v-2ddb0df2] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.c-inner-text[data-v-2ddb0df2] {\n  text-align: left;\n  word-break: break-word;\n  font-weight: 600;\n}\n.c-button[data-v-2ddb0df2] {\n  transition: box-shadow 150ms ease-in;\n  margin-left: 0.5rem;\n}\n.c-button.is-success[data-v-2ddb0df2] {\n  color: var(--success_0);\n}\n.c-button.is-success[data-v-2ddb0df2]:hover, .c-button.is-success[data-v-2ddb0df2]:focus {\n  background-color: var(--success_1);\n}\n.c-button.is-success[data-v-2ddb0df2]:focus {\n  box-shadow: 0 0 0 1px var(--success_0);\n}\n.c-button.is-danger[data-v-2ddb0df2] {\n  color: var(--danger_0);\n}\n.c-button.is-danger[data-v-2ddb0df2]:hover, .c-button.is-danger[data-v-2ddb0df2]:focus {\n  background-color: var(--danger_1);\n}\n.c-button.is-danger[data-v-2ddb0df2]:focus {\n  box-shadow: 0 0 0 1px var(--danger_0);\n}\n\n/*# sourceMappingURL=BannerScoped.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/banners/BannerScoped.vue", "BannerScoped.vue"], "names": [], "mappings": "AAkEA;EACA,aAAA,EAAA,uDAAA;EACA,uBAAA;EACA,gBAAA;ACjEA;ADoEA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;ACjEA;ADoEA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;ACjEA;ADmEA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;ACjEA;ADuEA;EACA,oCAAA;EACA,mBAAA;ACpEA;ADuEA;EACA,uBARA;AC7DA;ADuEA;EAEA,kCAZA;AC1DA;ADyEA;EACA,sCAAA;ACvEA;AD8DA;EACA,sBARA;ACpDA;AD8DA;EAEA,iCAZA;ACjDA;ADgEA;EACA,qCAAA;AC9DA;;AAEA,2CAA2C", "file": "BannerScoped.vue", "sourcesContent": [`<template lang='pug'>
  transition-expand
    .c-container(v-if='ephemeral.text')
      banner-simple(class='c-banner' :severity='ephemeral.severity')
        .c-inner
          .c-inner-text(v-if='allowA' :data-test='dataTest' role='alert')
            span(v-safe-html:a='ephemeral.text')
          .c-inner-text(v-else :data-test='dataTest' role='alert' v-safe-html='ephemeral.text')
          button.is-icon-small.c-button(
            type='button'
            :class='\`is-\${ephemeral.severity}\`'
            :aria-label='L("Dismiss message")'
            @click='clean'
          )
            i.icon-times
</template>

<script>
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'

export default ({
  name: 'BannerScoped',
  components: {
    BannerSimple,
    TransitionExpand
  },
  props: {
    dataTest: {
      type: String,
      default: 'feedbackMsg'
    },
    allowA: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ephemeral: {
      text: null,
      severity: null
    }
  }),
  methods: {
    // To be used by parent. Example:
    // this.$refs.BannerScoped.success(L('Changes saved!'))
    clean () {
      this.updateBanner('', '')
    },
    danger (text) {
      this.updateBanner(text, 'danger')
    },
    success (text) {
      this.updateBanner(text, 'success')
    },
    updateBanner (text, severity) {
      this.ephemeral.text = text
      this.ephemeral.severity = severity
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  display: flex; /* so margins don't collapse and transition is smooth */
  align-items: flex-start;
  overflow: hidden;
}

.c-banner {
  width: 100%;
  margin-top: 1.5rem;
  overflow: hidden;
}

.c-inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &-text {
    text-align: left; // force even when the parent has another alignment
    word-break: break-word; // handle long messages
    font-weight: 600;
  }
}

$severities: "success" $success_0 $success_1, "danger" $danger_0 $danger_1;

.c-button {
  transition: box-shadow 150ms ease-in;
  margin-left: 0.5rem;

  @each $class, $color, $hover in $severities {
    &.is-#{$class} {
      color: $color;

      &:hover,
      &:focus {
        background-color: $hover;
      }

      &:focus {
        box-shadow: 0 0 0 1px $color;
      }
    }
  }
}
</style>
`, ".c-container {\n  display: flex; /* so margins don't collapse and transition is smooth */\n  align-items: flex-start;\n  overflow: hidden;\n}\n\n.c-banner {\n  width: 100%;\n  margin-top: 1.5rem;\n  overflow: hidden;\n}\n\n.c-inner {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.c-inner-text {\n  text-align: left;\n  word-break: break-word;\n  font-weight: 600;\n}\n\n.c-button {\n  transition: box-shadow 150ms ease-in;\n  margin-left: 0.5rem;\n}\n.c-button.is-success {\n  color: var(--success_0);\n}\n.c-button.is-success:hover, .c-button.is-success:focus {\n  background-color: var(--success_1);\n}\n.c-button.is-success:focus {\n  box-shadow: 0 0 0 1px var(--success_0);\n}\n.c-button.is-danger {\n  color: var(--danger_0);\n}\n.c-button.is-danger:hover, .c-button.is-danger:focus {\n  background-color: var(--danger_1);\n}\n.c-button.is-danger:focus {\n  box-shadow: 0 0 0 1px var(--danger_0);\n}\n\n/*# sourceMappingURL=BannerScoped.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-2ddb0df2";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  transition-expand
    .c-container(v-if='ephemeral.text')
      banner-simple(class='c-banner' :severity='ephemeral.severity')
        .c-inner
          .c-inner-text(v-if='allowA' :data-test='dataTest' role='alert')
            span(v-safe-html:a='ephemeral.text')
          .c-inner-text(v-else :data-test='dataTest' role='alert' v-safe-html='ephemeral.text')
          button.is-icon-small.c-button(
            type='button'
            :class='\`is-\${ephemeral.severity}\`'
            :aria-label='L("Dismiss message")'
            @click='clean'
          )
            i.icon-times
</template>

<script>
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'

export default ({
  name: 'BannerScoped',
  components: {
    BannerSimple,
    TransitionExpand
  },
  props: {
    dataTest: {
      type: String,
      default: 'feedbackMsg'
    },
    allowA: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ephemeral: {
      text: null,
      severity: null
    }
  }),
  methods: {
    // To be used by parent. Example:
    // this.$refs.BannerScoped.success(L('Changes saved!'))
    clean () {
      this.updateBanner('', '')
    },
    danger (text) {
      this.updateBanner(text, 'danger')
    },
    success (text) {
      this.updateBanner(text, 'success')
    },
    updateBanner (text, severity) {
      this.ephemeral.text = text
      this.ephemeral.severity = severity
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  display: flex; /* so margins don't collapse and transition is smooth */
  align-items: flex-start;
  overflow: hidden;
}

.c-banner {
  width: 100%;
  margin-top: 1.5rem;
  overflow: hidden;
}

.c-inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &-text {
    text-align: left; // force even when the parent has another alignment
    word-break: break-word; // handle long messages
    font-weight: 600;
  }
}

$severities: "success" $success_0 $success_1, "danger" $danger_0 $danger_1;

.c-button {
  transition: box-shadow 150ms ease-in;
  margin-left: 0.5rem;

  @each $class, $color, $hover in $severities {
    &.is-#{$class} {
      color: $color;

      &:hover,
      &:focus {
        background-color: $hover;
      }

      &:focus {
        box-shadow: 0 0 0 1px $color;
      }
    }
  }
}
</style>
`;
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
function __vue_create_injector__3() {
  const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var BannerScoped_default = __vue_component__3;

export {
  BannerSimple_default,
  TransitionExpand_default,
  BannerScoped_default
};
//# sourceMappingURL=chunk-VVR7NWXN-cached.js.map
