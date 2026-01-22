// frontend/views/components/SliderContinuous.vue
var __vue_script__ = {
  name: "SliderContinuous",
  props: {
    /** Unique id to connect form and label */
    uid: {
      type: String,
      required: true
    },
    label: String,
    min: [String, Number],
    max: [String, Number],
    unit: String,
    value: [String, Number],
    hideText: Boolean
  },
  data: () => ({
    ephemeral: {
      styleVars: ""
    }
  }),
  created() {
    this.updateSlider(this.value);
  },
  methods: {
    getPercent(value) {
      return ((value - this.min) / (this.max - this.min) * 100).toFixed(2);
    },
    getFactor(percent) {
      return ((percent / 100 - 0.5) * -1).toFixed(2);
    },
    handleChange(e) {
      this.updateSlider(e.target.value);
      this.$emit("input", e);
    },
    updateSlider(value) {
      const percent = this.getPercent(value);
      this.ephemeral.styleVars = `--percent: ${percent}%; --factor: ${this.getFactor(percent)};`;
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== void 0) {
        this.updateSlider(newVal);
      }
    },
    min() {
      this.updateSlider(this.value);
    },
    max() {
      this.updateSlider(this.value);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "wrapper" }, [
    _vm.label ? _c(
      "label",
      { staticClass: "label", attrs: { for: "range" + _vm.uid } },
      [_vm._v(_vm._s(_vm.label))]
    ) : _vm._e(),
    _c("span", { staticClass: "marks" }, [
      !_vm.hideText ? _c(
        "span",
        { staticClass: "edge", attrs: { "aria-hidden": "true" } },
        [_vm._v(_vm._s(_vm.min))]
      ) : _vm._e(),
      _c("span", { staticClass: "slider", style: _vm.ephemeral.styleVars }, [
        _c("input", {
          staticClass: "sInput",
          attrs: {
            type: "range",
            id: "range" + _vm.uid,
            min: _vm.min,
            max: _vm.max
          },
          domProps: { value: _vm.value },
          on: { input: _vm.handleChange }
        }),
        !_vm.hideText ? _c(
          "output",
          {
            staticClass: "sOutput",
            style: _vm.ephemeral.outputStyle,
            attrs: { for: "range" + _vm.uid }
          },
          [_vm._v(_vm._s(_vm.value + _vm.unit))]
        ) : _vm._e()
      ]),
      !_vm.hideText ? _c(
        "span",
        { staticClass: "edge", attrs: { "aria-hidden": "true" } },
        [_vm._v(_vm._s(_vm.max))]
      ) : _vm._e()
    ])
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-296a106a_0", { source: ".wrapper[data-v-296a106a] {\n  position: relative;\n}\n.marks[data-v-296a106a] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  color: var(--text_1);\n  margin-top: 2rem;\n}\n.slider[data-v-296a106a] {\n  position: relative;\n  flex: 1;\n  color: var(--primary_0);\n  --percent: 0;\n  --factor: 0;\n}\n.sInput[data-v-296a106a] {\n  position: relative;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0.25rem;\n  border-radius: 0.25rem;\n  color: currentColor;\n  outline: none;\n  background: var(--general_0);\n  background: linear-gradient(to right, currentColor var(--percent, 0), var(--general_0) var(--percent, 0));\n}\n.sInput[data-v-296a106a]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: none;\n  border-radius: 50%;\n  background: currentColor;\n  transition: transform 200ms;\n  cursor: pointer;\n}\n.sInput[data-v-296a106a]::-webkit-slider-thumb:hover {\n  transform: scale(1.2);\n}\n.sInput[data-v-296a106a]::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  border: none;\n  border-radius: 50%;\n  background: currentColor;\n  transition: transform 200ms;\n  cursor: pointer;\n}\n.sInput[data-v-296a106a]::-moz-range-thumb:hover {\n  transform: scale(1.2);\n}\n.sOutput[data-v-296a106a] {\n  position: absolute;\n  top: -1.5rem;\n  left: var(--percent);\n  background: var(--background_0);\n  color: currentColor;\n  transform: translateX(calc(-50% + var(--factor) * 1rem));\n}\n.edge[data-v-296a106a]:first-child {\n  margin-right: 0.5rem;\n}\n.edge[data-v-296a106a]:last-child {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=SliderContinuous.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/SliderContinuous.vue", "SliderContinuous.vue"], "names": [], "mappings": "AA4FA;EACA,kBAAA;AC3FA;AD8FA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,gBAAA;AC3FA;AD8FA;EACA,kBAAA;EACA,OAAA;EAGA,uBAAA;EAGA,YAAA;EACA,WAAA;AC/FA;ADkGA;EACA,kBAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,4BAAA;EACA,yGAAA;AC/FA;AD+GA;EACA,wBAAA;EACA,gBAAA;EAfA,WAtCA;EAuCA,YAvCA;EAwCA,YAAA;EACA,kBAAA;EACA,wBAAA;EACA,2BAAA;EACA,eAAA;AC7FA;AD+FA;EACA,qBAAA;AC7FA;ADuGA;EAnBA,WAtCA;EAuCA,YAvCA;EAwCA,YAAA;EACA,kBAAA;EACA,wBAAA;EACA,2BAAA;EACA,eAAA;ACjFA;ADmFA;EACA,qBAAA;ACjFA;ADgGA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,+BAAA;EACA,mBAAA;EACA,wDAAA;AC7FA;ADiGA;EACA,oBAAA;AC9FA;ADiGA;EACA,mBAAA;AC/FA;;AAEA,+CAA+C", "file": "SliderContinuous.vue", "sourcesContent": ["<template lang='pug'>\n.wrapper\n  label.label(v-if='label' :for='`range${uid}`') {{ label }}\n\n  span.marks\n    span.edge(\n      v-if='!hideText'\n      aria-hidden='true'\n    ) {{ min }}\n\n    span.slider(:style='ephemeral.styleVars')\n      input.sInput(\n        type='range'\n        :id='`range${uid}`'\n        :min='min'\n        :max='max'\n        :value='value'\n        @input='handleChange'\n      )\n      output.sOutput(\n        v-if='!hideText'\n        :for='`range${uid}`'\n        :style='ephemeral.outputStyle'\n      ) {{ value + unit }}\n\n    span.edge(\n      v-if='!hideText'\n      aria-hidden='true'\n    ) {{ max }}\n</template>\n\n<script>\nexport default ({\n  name: 'SliderContinuous',\n  props: {\n    /** Unique id to connect form and label */\n    uid: {\n      type: String,\n      required: true\n    },\n    label: String,\n    min: [String, Number],\n    max: [String, Number],\n    unit: String,\n    value: [String, Number],\n    hideText: Boolean\n  },\n  data: () => ({\n    ephemeral: {\n      styleVars: ''\n    }\n  }),\n  created () {\n    this.updateSlider(this.value)\n  },\n  methods: {\n    getPercent (value) {\n      // ex: min: 50, max: 100 // getPercent(75) -> 50\n      return ((value - this.min) / (this.max - this.min) * 100).toFixed(2)\n    },\n    getFactor (percent) {\n      return ((percent / 100 - 0.5) * -1).toFixed(2)\n    },\n    handleChange (e) {\n      this.updateSlider(e.target.value)\n      this.$emit('input', e)\n    },\n    updateSlider (value) {\n      const percent = this.getPercent(value)\n      this.ephemeral.styleVars = `--percent: ${percent}%; --factor: ${this.getFactor(percent)};`\n    }\n  },\n  watch: {\n    value (newVal) {\n      if (newVal !== undefined) {\n        this.updateSlider(newVal)\n      }\n    },\n    min () {\n      this.updateSlider(this.value)\n    },\n    max () {\n      this.updateSlider(this.value)\n    }\n  }\n}: Object)\n<\/script>\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n$rangeSize: 1rem;\n\n.wrapper {\n  position: relative;\n}\n\n.marks {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  color: $text_1;\n  margin-top: 2rem;\n}\n\n.slider {\n  position: relative;\n  flex: 1;\n\n  // affects input color and may be overridden by parent component.\n  color: $primary_0;\n\n  // Updated by JS\n  --percent: 0; // controls the thumb position\n  --factor: 0; // used to align correctly the .sOutput\n}\n\n.sInput {\n  position: relative;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0.25rem;\n  border-radius: 0.25rem;\n  color: currentColor;\n  outline: none;\n  background: $general_0; // fallback\n  background: linear-gradient(to right, currentColor var(--percent, 0), $general_0 var(--percent, 0));\n\n  @mixin rangeThumb {\n    width: $rangeSize;\n    height: $rangeSize;\n    border: none;\n    border-radius: 50%;\n    background: currentColor;\n    transition: transform 200ms;\n    cursor: pointer;\n\n    &:hover {\n      transform: scale(1.2);\n    }\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    @include rangeThumb;\n  }\n\n  &::-moz-range-thumb {\n    @include rangeThumb;\n  }\n}\n\n.sOutput {\n  position: absolute;\n  top: -1.5rem;\n  left: var(--percent);\n  background: $background;\n  color: currentColor;\n  transform: translateX(calc(-50% + var(--factor) * #{$rangeSize}));\n}\n\n.edge {\n  &:first-child {\n    margin-right: 0.5rem;\n  }\n\n  &:last-child {\n    margin-left: 0.5rem;\n  }\n}\n</style>\n", ".wrapper {\n  position: relative;\n}\n\n.marks {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  color: var(--text_1);\n  margin-top: 2rem;\n}\n\n.slider {\n  position: relative;\n  flex: 1;\n  color: var(--primary_0);\n  --percent: 0;\n  --factor: 0;\n}\n\n.sInput {\n  position: relative;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0.25rem;\n  border-radius: 0.25rem;\n  color: currentColor;\n  outline: none;\n  background: var(--general_0);\n  background: linear-gradient(to right, currentColor var(--percent, 0), var(--general_0) var(--percent, 0));\n}\n.sInput::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: none;\n  border-radius: 50%;\n  background: currentColor;\n  transition: transform 200ms;\n  cursor: pointer;\n}\n.sInput::-webkit-slider-thumb:hover {\n  transform: scale(1.2);\n}\n.sInput::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  border: none;\n  border-radius: 50%;\n  background: currentColor;\n  transition: transform 200ms;\n  cursor: pointer;\n}\n.sInput::-moz-range-thumb:hover {\n  transform: scale(1.2);\n}\n\n.sOutput {\n  position: absolute;\n  top: -1.5rem;\n  left: var(--percent);\n  background: var(--background_0);\n  color: currentColor;\n  transform: translateX(calc(-50% + var(--factor) * 1rem));\n}\n\n.edge:first-child {\n  margin-right: 0.5rem;\n}\n.edge:last-child {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=SliderContinuous.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-296a106a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.wrapper\n  label.label(v-if='label' :for='`range${uid}`') {{ label }}\n\n  span.marks\n    span.edge(\n      v-if='!hideText'\n      aria-hidden='true'\n    ) {{ min }}\n\n    span.slider(:style='ephemeral.styleVars')\n      input.sInput(\n        type='range'\n        :id='`range${uid}`'\n        :min='min'\n        :max='max'\n        :value='value'\n        @input='handleChange'\n      )\n      output.sOutput(\n        v-if='!hideText'\n        :for='`range${uid}`'\n        :style='ephemeral.outputStyle'\n      ) {{ value + unit }}\n\n    span.edge(\n      v-if='!hideText'\n      aria-hidden='true'\n    ) {{ max }}\n</template>\n\n<script>\nexport default ({\n  name: 'SliderContinuous',\n  props: {\n    /** Unique id to connect form and label */\n    uid: {\n      type: String,\n      required: true\n    },\n    label: String,\n    min: [String, Number],\n    max: [String, Number],\n    unit: String,\n    value: [String, Number],\n    hideText: Boolean\n  },\n  data: () => ({\n    ephemeral: {\n      styleVars: ''\n    }\n  }),\n  created () {\n    this.updateSlider(this.value)\n  },\n  methods: {\n    getPercent (value) {\n      // ex: min: 50, max: 100 // getPercent(75) -> 50\n      return ((value - this.min) / (this.max - this.min) * 100).toFixed(2)\n    },\n    getFactor (percent) {\n      return ((percent / 100 - 0.5) * -1).toFixed(2)\n    },\n    handleChange (e) {\n      this.updateSlider(e.target.value)\n      this.$emit('input', e)\n    },\n    updateSlider (value) {\n      const percent = this.getPercent(value)\n      this.ephemeral.styleVars = `--percent: ${percent}%; --factor: ${this.getFactor(percent)};`\n    }\n  },\n  watch: {\n    value (newVal) {\n      if (newVal !== undefined) {\n        this.updateSlider(newVal)\n      }\n    },\n    min () {\n      this.updateSlider(this.value)\n    },\n    max () {\n      this.updateSlider(this.value)\n    }\n  }\n}: Object)\n<\/script>\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n$rangeSize: 1rem;\n\n.wrapper {\n  position: relative;\n}\n\n.marks {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  color: $text_1;\n  margin-top: 2rem;\n}\n\n.slider {\n  position: relative;\n  flex: 1;\n\n  // affects input color and may be overridden by parent component.\n  color: $primary_0;\n\n  // Updated by JS\n  --percent: 0; // controls the thumb position\n  --factor: 0; // used to align correctly the .sOutput\n}\n\n.sInput {\n  position: relative;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0.25rem;\n  border-radius: 0.25rem;\n  color: currentColor;\n  outline: none;\n  background: $general_0; // fallback\n  background: linear-gradient(to right, currentColor var(--percent, 0), $general_0 var(--percent, 0));\n\n  @mixin rangeThumb {\n    width: $rangeSize;\n    height: $rangeSize;\n    border: none;\n    border-radius: 50%;\n    background: currentColor;\n    transition: transform 200ms;\n    cursor: pointer;\n\n    &:hover {\n      transform: scale(1.2);\n    }\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    @include rangeThumb;\n  }\n\n  &::-moz-range-thumb {\n    @include rangeThumb;\n  }\n}\n\n.sOutput {\n  position: absolute;\n  top: -1.5rem;\n  left: var(--percent);\n  background: $background;\n  color: currentColor;\n  transform: translateX(calc(-50% + var(--factor) * #{$rangeSize}));\n}\n\n.edge {\n  &:first-child {\n    margin-right: 0.5rem;\n  }\n\n  &:last-child {\n    margin-left: 0.5rem;\n  }\n}\n</style>\n";
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
var SliderContinuous_default = __vue_component__;

export {
  SliderContinuous_default
};
//# sourceMappingURL=chunk-WUIM2XSU-cached.js.map
