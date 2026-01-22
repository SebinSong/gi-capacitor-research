// frontend/views/components/graphs/Progress.vue
var __vue_script__ = {
  name: "ProgressBar",
  props: {
    max: Number,
    value: Number,
    secValue: Number,
    // When there's a 2nd value, e.g MonthOverview
    hasMarks: Boolean
  },
  data: () => ({
    ephemeral: {
      widthZero: "width: 0;"
    }
  }),
  mounted() {
    setTimeout(() => {
      this.ephemeral.widthZero = "";
    }, 0);
  },
  computed: {
    percent() {
      return !this.max ? "0%" : `${100 * this.value / this.max}%`;
    },
    percentSoft() {
      if (!this.secValue) return false;
      return !this.max ? "0%" : `${100 * this.secValue / this.max}%`;
    },
    marksStyle() {
      const color = this.percent === "100%" ? this.$store.getters.colors.success_0 : this.$store.getters.colors.general_0;
      const percent = `${100 / this.max}%`;
      const markWidth = "2px";
      const gap = `calc(${percent} - ${markWidth})`;
      return {
        background: `repeating-linear-gradient(to right,
          transparent 0,
          transparent ${gap},
          ${color} ${gap},
          ${color} ${percent}
        )`
      };
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
      staticClass: "c-progress",
      class: {
        "is-completed": _vm.percent === "100%",
        "has-marks": _vm.hasMarks
      }
    },
    [
      _c("div", { staticClass: "c-bg" }),
      _vm.hasMarks ? _c("div", { staticClass: "c-marks", style: _vm.marksStyle }) : _vm._e(),
      _vm.percentSoft ? _c("div", {
        staticClass: "c-bar is-soft",
        style: "width: " + _vm.percentSoft + "; " + _vm.ephemeral.widthZero
      }) : _vm._e(),
      _c("div", {
        staticClass: "c-bar",
        style: "width: " + _vm.percent + "; " + _vm.ephemeral.widthZero
      })
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-33ef38f5_0", { source: ".c-progress[data-v-33ef38f5] {\n  position: relative;\n  height: 0.5rem;\n}\n.c-progress.has-marks[data-v-33ef38f5] {\n  height: 1rem;\n}\n.c-bg[data-v-33ef38f5],\n.c-bar[data-v-33ef38f5] {\n  position: absolute;\n  width: 100%;\n  height: 0.5rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  border-radius: 0.5rem;\n}\n.c-bg[data-v-33ef38f5] {\n  background-color: var(--general_0);\n}\n.c-bar[data-v-33ef38f5] {\n  background-color: var(--primary_0);\n  transition: width 450ms ease-out;\n}\n.is-completed .c-bar[data-v-33ef38f5] {\n  background-color: var(--success_0);\n}\n.has-marks:not(.is-completed) .c-bar[data-v-33ef38f5] {\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n.c-bar.is-soft[data-v-33ef38f5] {\n  background-color: var(--primary_1);\n}\n.c-marks[data-v-33ef38f5] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(0 0, calc(100% - 2px) 0, calc(100% - 2px) 100%, 0 100%);\n}\n\n/*# sourceMappingURL=Progress.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/graphs/Progress.vue", "Progress.vue"], "names": [], "mappings": "AAqEA;EACA,kBAAA;EACA,cAAA;ACpEA;ADsEA;EACA,YAAA;ACpEA;ADwEA;;EAEA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,OAAA;EACA,2BAAA;EACA,qBAAA;ACrEA;ADwEA;EACA,kCAAA;ACrEA;ADwEA;EACA,kCAAA;EACA,gCAAA;ACrEA;ADuEA;EACA,kCAAA;ACrEA;ADwEA;EACA,gCAAA;ACtEA;ADyEA;EACA,kCAAA;ACvEA;AD2EA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAIA,0EAAA;AC3EA;;AAEA,uCAAuC", "file": "Progress.vue", "sourcesContent": ["<template lang='pug'>\n.c-progress(\n    :class='{ \"is-completed\": percent === \"100%\", \"has-marks\": hasMarks }'\n  )\n  .c-bg\n  .c-marks(v-if='hasMarks' :style='marksStyle')\n  .c-bar.is-soft(v-if='percentSoft' :style='`width: ${percentSoft}; ${ephemeral.widthZero}`')\n  .c-bar(:style='`width: ${percent}; ${ephemeral.widthZero}`')\n</template>\n\n<script>\nexport default ({\n  name: 'ProgressBar',\n  props: {\n    max: Number,\n    value: Number,\n    secValue: Number, // When there's a 2nd value, e.g MonthOverview\n    hasMarks: Boolean\n  },\n  data: () => ({\n    ephemeral: {\n      widthZero: 'width: 0;'\n    }\n  }),\n  mounted () {\n    // Animate the progressBar width from 0 to this.percent on first render:\n    // 1.On the first render, the width must be zero. (widthZero)\n    // 2. Wait for the component to be mounted and the DOM processed.\n    setTimeout(() => {\n      // 3. Finally remove the widthZero, and it will animate from 0 to this.percent.\n      this.ephemeral.widthZero = ''\n    }, 0)\n  },\n  computed: {\n    percent () {\n      return !this.max\n        ? '0%' // When this.max 0, the calculation below becomes 'NaN%', so manually specifying 0% here.\n        : `${100 * this.value / this.max}%`\n    },\n    percentSoft () {\n      if (!this.secValue) return false\n\n      return !this.max ? '0%' : `${100 * this.secValue / this.max}%`\n    },\n    marksStyle () {\n      const color = this.percent === '100%'\n        ? this.$store.getters.colors.success_0\n        : this.$store.getters.colors.general_0\n\n      const percent = `${100 / this.max}%`\n      const markWidth = '2px'\n      const gap = `calc(${percent} - ${markWidth})`\n\n      return {\n        background: `repeating-linear-gradient(to right,\n          transparent 0,\n          transparent ${gap},\n          ${color} ${gap},\n          ${color} ${percent}\n        )`\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-progress {\n  position: relative;\n  height: 0.5rem;\n\n  &.has-marks {\n    height: 1rem;\n  }\n}\n\n.c-bg,\n.c-bar {\n  position: absolute;\n  width: 100%;\n  height: 0.5rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  border-radius: 0.5rem;\n}\n\n.c-bg {\n  background-color: $general_0;\n}\n\n.c-bar {\n  background-color: $primary_0;\n  transition: width 450ms ease-out;\n\n  .is-completed & {\n    background-color: $success_0;\n  }\n\n  .has-marks:not(.is-completed) & {\n    border-radius: 0.5rem 0 0 0.5rem;\n  }\n\n  &.is-soft {\n    background-color: $primary_1;\n  }\n}\n\n.c-marks {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  // hide last marker\n  $edge: calc(100% - 2px);\n  clip-path: polygon(0 0, $edge 0, $edge 100%, 0 100%);\n}\n</style>\n", ".c-progress {\n  position: relative;\n  height: 0.5rem;\n}\n.c-progress.has-marks {\n  height: 1rem;\n}\n\n.c-bg,\n.c-bar {\n  position: absolute;\n  width: 100%;\n  height: 0.5rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  border-radius: 0.5rem;\n}\n\n.c-bg {\n  background-color: var(--general_0);\n}\n\n.c-bar {\n  background-color: var(--primary_0);\n  transition: width 450ms ease-out;\n}\n.is-completed .c-bar {\n  background-color: var(--success_0);\n}\n.has-marks:not(.is-completed) .c-bar {\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n.c-bar.is-soft {\n  background-color: var(--primary_1);\n}\n\n.c-marks {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(0 0, calc(100% - 2px) 0, calc(100% - 2px) 100%, 0 100%);\n}\n\n/*# sourceMappingURL=Progress.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-33ef38f5";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.c-progress(\n    :class='{ \"is-completed\": percent === \"100%\", \"has-marks\": hasMarks }'\n  )\n  .c-bg\n  .c-marks(v-if='hasMarks' :style='marksStyle')\n  .c-bar.is-soft(v-if='percentSoft' :style='`width: ${percentSoft}; ${ephemeral.widthZero}`')\n  .c-bar(:style='`width: ${percent}; ${ephemeral.widthZero}`')\n</template>\n\n<script>\nexport default ({\n  name: 'ProgressBar',\n  props: {\n    max: Number,\n    value: Number,\n    secValue: Number, // When there's a 2nd value, e.g MonthOverview\n    hasMarks: Boolean\n  },\n  data: () => ({\n    ephemeral: {\n      widthZero: 'width: 0;'\n    }\n  }),\n  mounted () {\n    // Animate the progressBar width from 0 to this.percent on first render:\n    // 1.On the first render, the width must be zero. (widthZero)\n    // 2. Wait for the component to be mounted and the DOM processed.\n    setTimeout(() => {\n      // 3. Finally remove the widthZero, and it will animate from 0 to this.percent.\n      this.ephemeral.widthZero = ''\n    }, 0)\n  },\n  computed: {\n    percent () {\n      return !this.max\n        ? '0%' // When this.max 0, the calculation below becomes 'NaN%', so manually specifying 0% here.\n        : `${100 * this.value / this.max}%`\n    },\n    percentSoft () {\n      if (!this.secValue) return false\n\n      return !this.max ? '0%' : `${100 * this.secValue / this.max}%`\n    },\n    marksStyle () {\n      const color = this.percent === '100%'\n        ? this.$store.getters.colors.success_0\n        : this.$store.getters.colors.general_0\n\n      const percent = `${100 / this.max}%`\n      const markWidth = '2px'\n      const gap = `calc(${percent} - ${markWidth})`\n\n      return {\n        background: `repeating-linear-gradient(to right,\n          transparent 0,\n          transparent ${gap},\n          ${color} ${gap},\n          ${color} ${percent}\n        )`\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-progress {\n  position: relative;\n  height: 0.5rem;\n\n  &.has-marks {\n    height: 1rem;\n  }\n}\n\n.c-bg,\n.c-bar {\n  position: absolute;\n  width: 100%;\n  height: 0.5rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  border-radius: 0.5rem;\n}\n\n.c-bg {\n  background-color: $general_0;\n}\n\n.c-bar {\n  background-color: $primary_0;\n  transition: width 450ms ease-out;\n\n  .is-completed & {\n    background-color: $success_0;\n  }\n\n  .has-marks:not(.is-completed) & {\n    border-radius: 0.5rem 0 0 0.5rem;\n  }\n\n  &.is-soft {\n    background-color: $primary_1;\n  }\n}\n\n.c-marks {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  // hide last marker\n  $edge: calc(100% - 2px);\n  clip-path: polygon(0 0, $edge 0, $edge 100%, 0 100%);\n}\n</style>\n";
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
var Progress_default = __vue_component__;

export {
  Progress_default
};
//# sourceMappingURL=chunk-OMAB4AXT-cached.js.map
