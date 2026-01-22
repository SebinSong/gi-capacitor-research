import {
  TABLET
} from "./chunk-532VGDFI-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import {
  debounce
} from "./chunk-MTWMQLQH-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/components/graphs/GraphLegendItem.vue
var __vue_script__ = {
  name: "GraphLegendItem",
  props: {
    amount: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: "side"
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    { staticClass: "c-wlegend", class: "c-wlegend-" + _vm.variant },
    [
      _c("div", { staticClass: "c-inner" }, [
        _c(
          "span",
          { staticClass: "has-text-1 c-desc" },
          [_vm._t("default")],
          2
        ),
        _c("span", { staticClass: "is-title-4 c-amount" }, [
          _vm._v(_vm._s(_vm.amount)),
          _c("span", {
            staticClass: "c-marker",
            class: "has-background-" + _vm.color
          })
        ])
      ]),
      _vm.$slots.description ? _c(
        "div",
        { staticClass: "c-description help" },
        [_vm._t("description")],
        2
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-846122a4_0", { source: ".c-wlegend[data-v-846122a4] {\n  padding: 1rem 0;\n}\n.c-wlegend.c-wlegend-side[data-v-846122a4]:first-child {\n  padding-top: 0;\n}\n.c-wlegend.c-wlegend-side[data-v-846122a4]:last-child {\n  padding-bottom: 0;\n}\n.c-wlegend.c-wlegend-side[data-v-846122a4]:not(:last-child) {\n  border-bottom: 1px solid var(--general_0);\n}\n.c-wlegend.c-wlegend-inline[data-v-846122a4] {\n  padding: 0.25rem 0;\n}\n.c-wlegend.c-wlegend-inline[data-v-846122a4]:first-child {\n  padding-top: 1rem;\n}\n@media screen and (min-width: 769px), print {\n.c-wlegend.c-wlegend-inline[data-v-846122a4] {\n    padding: 1rem 0;\n    position: relative;\n    margin-right: 2.5rem;\n    padding-left: 1rem;\n}\n.c-wlegend.c-wlegend-inline .c-marker[data-v-846122a4] {\n    position: absolute;\n    left: 0;\n    top: 1.45rem;\n    margin-left: 0;\n}\n}\n.c-inner[data-v-846122a4] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-desc[data-v-846122a4] {\n  display: block;\n  margin-right: 0.5rem;\n}\n.c-amount[data-v-846122a4] {\n  white-space: nowrap;\n}\n.c-marker[data-v-846122a4] {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem;\n  border-radius: 1px;\n  border: 1px solid;\n}\n.c-marker.has-background-blank[data-v-846122a4] {\n  border-color: var(--general_0);\n}\n.c-marker.has-background-primary-solid[data-v-846122a4] {\n  border-color: var(--primary_0);\n}\n.c-marker.has-background-success-solid[data-v-846122a4] {\n  border-color: var(--success_0);\n}\n.c-marker.has-background-warning-solid[data-v-846122a4] {\n  border-color: var(--warning_0);\n}\n.c-marker.has-background-danger-solid[data-v-846122a4] {\n  border-color: var(--danger_3);\n}\n.c-description[data-v-846122a4] {\n  margin-top: 0.5rem;\n}\n\n/*# sourceMappingURL=GraphLegendItem.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/graphs/GraphLegendItem.vue", "GraphLegendItem.vue"], "names": [], "mappings": "AAmCA;EACA,eAAA;AClCA;ADqCA;EACA,cAAA;ACnCA;ADsCA;EACA,iBAAA;ACpCA;ADuCA;EACA,yCAAA;ACrCA;ADyCA;EACA,kBAAA;ACvCA;ADyCA;EACA,iBAAA;ACvCA;ADiCA;AAWA;IACA,eAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;ACzCE;AD2CF;IACA,kBAAA;IACA,OAAA;IACA,YAAA;IACA,cAAA;ACzCE;AACF;AD8CA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AC3CA;AD8CA;EACA,cAAA;EACA,oBAAA;AC3CA;AD8CA;EACA,mBAAA;AC3CA;AD8CA;EACA,qBAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;AC3CA;AD6CA;EACA,8BAAA;AC3CA;AD8CA;EACA,8BAAA;AC5CA;AD+CA;EACA,8BAAA;AC7CA;ADgDA;EACA,8BAAA;AC9CA;ADiDA;EACA,6BArFA;ACsCA;ADmDA;EACA,kBAAA;AChDA;;AAEA,8CAA8C", "file": "GraphLegendItem.vue", "sourcesContent": ["<template lang='pug'>\nli.c-wlegend(:class='`c-wlegend-${variant}`')\n  .c-inner\n    span.has-text-1.c-desc\n      slot\n    span.is-title-4.c-amount\n      | {{ amount }}\n      span.c-marker(:class='`has-background-${color}`')\n  .c-description.help(v-if='$slots.description')\n    slot(name='description')\n</template>\n\n<script>\nexport default ({\n  name: 'GraphLegendItem',\n  props: {\n    amount: {\n      type: String,\n      required: true\n    },\n    color: {\n      type: String,\n      required: true\n    },\n    variant: {\n      type: String,\n      default: 'side'\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-wlegend {\n  padding: 1rem 0;\n\n  &.c-wlegend-side {\n    &:first-child {\n      padding-top: 0;\n    }\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      border-bottom: 1px solid $general_0;\n    }\n  }\n\n  &.c-wlegend-inline {\n    padding: 0.25rem 0;\n\n    &:first-child {\n      padding-top: 1rem;\n    }\n  }\n\n  @include tablet {\n    &.c-wlegend-inline {\n      padding: 1rem 0;\n      position: relative;\n      margin-right: 2.5rem;\n      padding-left: 1rem;\n\n      .c-marker {\n        position: absolute;\n        left: 0;\n        top: 1.45rem;\n        margin-left: 0;\n      }\n    }\n  }\n}\n\n.c-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-desc {\n  display: block;\n  margin-right: 0.5rem;\n}\n\n.c-amount {\n  white-space: nowrap;\n}\n\n.c-marker {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem; // visually aligned\n  border-radius: 1px;\n  border: 1px solid;\n\n  &.has-background-blank {\n    border-color: $general_0;\n  }\n\n  &.has-background-primary-solid {\n    border-color: $primary_0;\n  }\n\n  &.has-background-success-solid {\n    border-color: $success_0;\n  }\n\n  &.has-background-warning-solid {\n    border-color: $warning_0;\n  }\n\n  &.has-background-danger-solid {\n    border-color: $danger_3;\n  }\n}\n\n.c-description {\n  margin-top: 0.5rem;\n}\n</style>\n", ".c-wlegend {\n  padding: 1rem 0;\n}\n.c-wlegend.c-wlegend-side:first-child {\n  padding-top: 0;\n}\n.c-wlegend.c-wlegend-side:last-child {\n  padding-bottom: 0;\n}\n.c-wlegend.c-wlegend-side:not(:last-child) {\n  border-bottom: 1px solid var(--general_0);\n}\n.c-wlegend.c-wlegend-inline {\n  padding: 0.25rem 0;\n}\n.c-wlegend.c-wlegend-inline:first-child {\n  padding-top: 1rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-wlegend.c-wlegend-inline {\n    padding: 1rem 0;\n    position: relative;\n    margin-right: 2.5rem;\n    padding-left: 1rem;\n  }\n  .c-wlegend.c-wlegend-inline .c-marker {\n    position: absolute;\n    left: 0;\n    top: 1.45rem;\n    margin-left: 0;\n  }\n}\n\n.c-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-desc {\n  display: block;\n  margin-right: 0.5rem;\n}\n\n.c-amount {\n  white-space: nowrap;\n}\n\n.c-marker {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem;\n  border-radius: 1px;\n  border: 1px solid;\n}\n.c-marker.has-background-blank {\n  border-color: var(--general_0);\n}\n.c-marker.has-background-primary-solid {\n  border-color: var(--primary_0);\n}\n.c-marker.has-background-success-solid {\n  border-color: var(--success_0);\n}\n.c-marker.has-background-warning-solid {\n  border-color: var(--warning_0);\n}\n.c-marker.has-background-danger-solid {\n  border-color: var(--danger_3);\n}\n\n.c-description {\n  margin-top: 0.5rem;\n}\n\n/*# sourceMappingURL=GraphLegendItem.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-846122a4";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\nli.c-wlegend(:class='`c-wlegend-${variant}`')\n  .c-inner\n    span.has-text-1.c-desc\n      slot\n    span.is-title-4.c-amount\n      | {{ amount }}\n      span.c-marker(:class='`has-background-${color}`')\n  .c-description.help(v-if='$slots.description')\n    slot(name='description')\n</template>\n\n<script>\nexport default ({\n  name: 'GraphLegendItem',\n  props: {\n    amount: {\n      type: String,\n      required: true\n    },\n    color: {\n      type: String,\n      required: true\n    },\n    variant: {\n      type: String,\n      default: 'side'\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-wlegend {\n  padding: 1rem 0;\n\n  &.c-wlegend-side {\n    &:first-child {\n      padding-top: 0;\n    }\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      border-bottom: 1px solid $general_0;\n    }\n  }\n\n  &.c-wlegend-inline {\n    padding: 0.25rem 0;\n\n    &:first-child {\n      padding-top: 1rem;\n    }\n  }\n\n  @include tablet {\n    &.c-wlegend-inline {\n      padding: 1rem 0;\n      position: relative;\n      margin-right: 2.5rem;\n      padding-left: 1rem;\n\n      .c-marker {\n        position: absolute;\n        left: 0;\n        top: 1.45rem;\n        margin-left: 0;\n      }\n    }\n  }\n}\n\n.c-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-desc {\n  display: block;\n  margin-right: 0.5rem;\n}\n\n.c-amount {\n  white-space: nowrap;\n}\n\n.c-marker {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem; // visually aligned\n  border-radius: 1px;\n  border: 1px solid;\n\n  &.has-background-blank {\n    border-color: $general_0;\n  }\n\n  &.has-background-primary-solid {\n    border-color: $primary_0;\n  }\n\n  &.has-background-success-solid {\n    border-color: $success_0;\n  }\n\n  &.has-background-warning-solid {\n    border-color: $warning_0;\n  }\n\n  &.has-background-danger-solid {\n    border-color: $danger_3;\n  }\n}\n\n.c-description {\n  margin-top: 0.5rem;\n}\n</style>\n";
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
var GraphLegendItem_default = __vue_component__;

// frontend/views/components/graphs/PieChart.vue
var __vue_script__2 = {
  name: "PieChart",
  props: {
    slices: {
      type: Array,
      // [{ id, percent, color }]
      default() {
        return [];
      }
    },
    innerSlices: {
      type: Array,
      // [{ id, percent, color }]
      default() {
        return [];
      }
    }
  },
  data: () => ({
    ephemeral: {
      labelActiveIndex: 0,
      labelStyle: {},
      isLabelVisible: false
    }
  }),
  computed: {
    missingSlice() {
      const index = this.slices.length;
      const totalPercent = this.getStartPercent(index);
      const percent = 1 - totalPercent;
      if (percent === 0) {
        return false;
      }
      return {
        data: this.sliceData({ percent }, index),
        color: "blank",
        percent
      };
    }
  },
  methods: {
    sliceClasses(slice, isInner) {
      return {
        [`c-slice u-has-fill-${slice.color}`]: true,
        "c-inner": isInner,
        "c-full": slice.percent === 1
      };
    },
    // Apply the same method to build any kind of slice.
    // Then use CSS scale() to decrease the innerSlices's size.
    sliceData(slice, index) {
      const startPoint = this.getStartPercent(index);
      const [startX, startY] = this.getCoordinatesForPercent(startPoint);
      const [endX, endY] = this.getCoordinatesForPercent(startPoint + slice.percent);
      const isLargeArc = slice.percent > 0.5 ? 1 : 0;
      return [
        `M ${startX} ${startY}`,
        // Move starting point
        `A 1 1 0 ${isLargeArc} 1 ${endX} ${endY}`,
        // draw an Arc
        "L 0 0",
        // and draw a Line to this point
        "Z"
        // cloZe the path back to first point - needed to have a stroke
      ].join(" ");
    },
    getStartPercent(index) {
      return this.slices.slice(0, index).reduce((acc, cur) => acc + cur.percent, 0);
    },
    getCoordinatesForPercent(percent) {
      return [
        Math.cos(2 * Math.PI * percent),
        // x coordinate
        Math.sin(2 * Math.PI * percent)
        // y coordinate
      ];
    },
    showLabel: debounce(function(e, index) {
      this.ephemeral.labelActiveIndex = index;
      this.ephemeral.labelStyle = { position: "fixed", top: `${e.clientY}px`, left: `${e.clientX}px` };
      this.ephemeral.isLabelVisible = true;
    }, 100),
    hideLabel(event) {
      this.ephemeral.isLabelVisible = false;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-container" }, [
    _c(
      "svg",
      {
        staticClass: "c-piechart",
        attrs: { viewBox: "-1 -1 2 2", "aria-hidden": "hidden" }
      },
      [
        _vm._l(_vm.slices, function(slice, index) {
          return _c("path", {
            key: "slice-" + index,
            class: _vm.sliceClasses(slice, false),
            attrs: { d: _vm.sliceData(slice, index), "data-id": slice.id },
            on: {
              mouseenter: function(e) {
                return _vm.showLabel(e, index);
              },
              mouseleave: function(e) {
                return _vm.hideLabel(e, index);
              }
            }
          });
        }),
        _vm.missingSlice ? _c("path", {
          class: _vm.sliceClasses(_vm.missingSlice, false),
          attrs: { d: _vm.missingSlice.data, "data-id": "_missingSlice_" }
        }) : _vm._e(),
        _c("circle", { staticClass: "c-pie-donut", attrs: { r: "39%" } }),
        _vm._l(_vm.innerSlices, function(slice, index) {
          return _c("path", {
            key: "inner-slice-" + index,
            class: _vm.sliceClasses(slice, true),
            attrs: { d: _vm.sliceData(slice, index), "data-id": slice.id }
          });
        }),
        _c("circle", { staticClass: "c-pie-donut", attrs: { r: "34%" } })
      ],
      2
    ),
    _c("div", { staticClass: "c-slot" }, [_vm._t("default")], 2)
  ]);
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-979919dc_0", { source: ".c-container[data-v-979919dc] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.c-piechart[data-v-979919dc] {\n  transform: rotate(-90deg);\n}\n.c-slice[data-v-979919dc] {\n  stroke: var(--general_2);\n  stroke-width: 0.03;\n}\n.c-slice.c-full[data-v-979919dc] {\n  stroke-width: 0;\n}\n.c-slice.c-inner[data-v-979919dc] {\n  transform: scale(0.75);\n}\n.c-pie-donut[data-v-979919dc] {\n  fill: var(--general_2);\n}\n.c-slot[data-v-979919dc] {\n  position: absolute;\n  width: 53%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  line-height: 1.2;\n}\n\n/*# sourceMappingURL=PieChart.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/graphs/PieChart.vue", "PieChart.vue"], "names": [], "mappings": "AA+HA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AC9HA;ADiIA;EACA,yBAAA;AC9HA;ADiIA;EAEA,wBAAA;EACA,kBAAA;AC/HA;ADiIA;EACA,eAAA;AC/HA;ADkIA;EACA,sBAAA;AChIA;ADoIA;EACA,sBAAA;ACjIA;ADoIA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;EACA,gBAAA;ACjIA;;AAEA,uCAAuC", "file": "PieChart.vue", "sourcesContent": ["<template lang='pug'>\n.c-container\n  svg.c-piechart(viewBox='-1 -1 2 2' aria-hidden='hidden')\n    path(\n      v-for='(slice, index) in slices'\n      :key='`slice-${index}`'\n      :class='sliceClasses(slice, false)'\n      :d='sliceData(slice, index)'\n      :data-id='slice.id'\n      @mouseenter='(e) => showLabel(e, index)'\n      @mouseleave='(e) => hideLabel(e, index)'\n    )\n    path(\n      v-if='missingSlice'\n      :class='sliceClasses(missingSlice, false)'\n      :d='missingSlice.data'\n      data-id='_missingSlice_'\n    )\n    circle.c-pie-donut(r='39%')\n    path(\n      v-for='(slice, index) in innerSlices'\n      :key='`inner-slice-${index}`'\n      :class='sliceClasses(slice, true)'\n      :d='sliceData(slice, index)'\n      :data-id='slice.id'\n    )\n    circle.c-pie-donut(r='34%')\n\n  .c-slot\n    slot\n</template>\n\n<script>\n// Learn more about SVG & PieCharts\n// -> https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936\n\nimport { debounce } from 'turtledash'\n\nexport default ({\n  name: 'PieChart',\n  props: {\n    slices: {\n      type: Array, // [{ id, percent, color }]\n      default () { return [] }\n    },\n    innerSlices: {\n      type: Array, // [{ id, percent, color }]\n      default () { return [] }\n    }\n  },\n  data: () => ({\n    ephemeral: {\n      labelActiveIndex: 0,\n      labelStyle: {},\n      isLabelVisible: false\n    }\n  }),\n  computed: {\n    missingSlice () {\n      // When all slices together don't reach 100%, add a last light slice to complete the circle\n      const index = this.slices.length\n      const totalPercent = this.getStartPercent(index)\n      const percent = 1 - totalPercent\n\n      if (percent === 0) { return false }\n\n      return {\n        data: this.sliceData({ percent }, index),\n        color: 'blank',\n        percent\n      }\n    }\n  },\n  methods: {\n    sliceClasses (slice, isInner) {\n      return {\n        [`c-slice u-has-fill-${slice.color}`]: true,\n        'c-inner': isInner,\n        'c-full': slice.percent === 1\n      }\n    },\n    // Apply the same method to build any kind of slice.\n    // Then use CSS scale() to decrease the innerSlices's size.\n    sliceData (slice, index) {\n      const startPoint = this.getStartPercent(index)\n      const [startX, startY] = this.getCoordinatesForPercent(startPoint)\n      const [endX, endY] = this.getCoordinatesForPercent(startPoint + slice.percent)\n\n      // When a slice is more than 50%, the large arc point should be 1\n      const isLargeArc = slice.percent > 0.5 ? 1 : 0\n\n      // pathData - create an array and join it just for code readability\n      return [\n        `M ${startX} ${startY}`, // Move starting point\n        `A 1 1 0 ${isLargeArc} 1 ${endX} ${endY}`, // draw an Arc\n        'L 0 0', // and draw a Line to this point\n        'Z' // cloZe the path back to first point - needed to have a stroke\n      ].join(' ')\n    },\n    getStartPercent (index) {\n      // Each slice starts where the previous slice ended,\n      // so we need to know the total percent so far\n      return this.slices.slice(0, index).reduce((acc, cur) => acc + cur.percent, 0)\n    },\n    getCoordinatesForPercent (percent) {\n      return [\n        Math.cos(2 * Math.PI * percent), // x coordinate\n        Math.sin(2 * Math.PI * percent) // y coordinate\n      ]\n    },\n    showLabel: debounce(function (e, index) {\n      this.ephemeral.labelActiveIndex = index\n      this.ephemeral.labelStyle = { position: 'fixed', top: `${e.clientY}px`, left: `${e.clientX}px` }\n      this.ephemeral.isLabelVisible = true\n    }, 100),\n    hideLabel (event) {\n      this.ephemeral.isLabelVisible = false\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n$graphBg: $general_2;\n\n.c-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.c-piechart {\n  transform: rotate(-90deg);\n}\n\n.c-slice {\n  // Simulate a gap between each slice\n  stroke: $graphBg;\n  stroke-width: 0.03; // small unit because this SVG is a 1x1 grid system\n\n  &.c-full {\n    stroke-width: 0;\n  }\n\n  &.c-inner {\n    transform: scale(0.75);\n  }\n}\n\n.c-pie-donut {\n  fill: $graphBg;\n}\n\n.c-slot {\n  position: absolute;\n  width: 53%; // almost 2x inner .c-pie-donut radius\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  line-height: 1.2;\n}\n</style>\n", ".c-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.c-piechart {\n  transform: rotate(-90deg);\n}\n\n.c-slice {\n  stroke: var(--general_2);\n  stroke-width: 0.03;\n}\n.c-slice.c-full {\n  stroke-width: 0;\n}\n.c-slice.c-inner {\n  transform: scale(0.75);\n}\n\n.c-pie-donut {\n  fill: var(--general_2);\n}\n\n.c-slot {\n  position: absolute;\n  width: 53%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  line-height: 1.2;\n}\n\n/*# sourceMappingURL=PieChart.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-979919dc";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.c-container\n  svg.c-piechart(viewBox='-1 -1 2 2' aria-hidden='hidden')\n    path(\n      v-for='(slice, index) in slices'\n      :key='`slice-${index}`'\n      :class='sliceClasses(slice, false)'\n      :d='sliceData(slice, index)'\n      :data-id='slice.id'\n      @mouseenter='(e) => showLabel(e, index)'\n      @mouseleave='(e) => hideLabel(e, index)'\n    )\n    path(\n      v-if='missingSlice'\n      :class='sliceClasses(missingSlice, false)'\n      :d='missingSlice.data'\n      data-id='_missingSlice_'\n    )\n    circle.c-pie-donut(r='39%')\n    path(\n      v-for='(slice, index) in innerSlices'\n      :key='`inner-slice-${index}`'\n      :class='sliceClasses(slice, true)'\n      :d='sliceData(slice, index)'\n      :data-id='slice.id'\n    )\n    circle.c-pie-donut(r='34%')\n\n  .c-slot\n    slot\n</template>\n\n<script>\n// Learn more about SVG & PieCharts\n// -> https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936\n\nimport { debounce } from 'turtledash'\n\nexport default ({\n  name: 'PieChart',\n  props: {\n    slices: {\n      type: Array, // [{ id, percent, color }]\n      default () { return [] }\n    },\n    innerSlices: {\n      type: Array, // [{ id, percent, color }]\n      default () { return [] }\n    }\n  },\n  data: () => ({\n    ephemeral: {\n      labelActiveIndex: 0,\n      labelStyle: {},\n      isLabelVisible: false\n    }\n  }),\n  computed: {\n    missingSlice () {\n      // When all slices together don't reach 100%, add a last light slice to complete the circle\n      const index = this.slices.length\n      const totalPercent = this.getStartPercent(index)\n      const percent = 1 - totalPercent\n\n      if (percent === 0) { return false }\n\n      return {\n        data: this.sliceData({ percent }, index),\n        color: 'blank',\n        percent\n      }\n    }\n  },\n  methods: {\n    sliceClasses (slice, isInner) {\n      return {\n        [`c-slice u-has-fill-${slice.color}`]: true,\n        'c-inner': isInner,\n        'c-full': slice.percent === 1\n      }\n    },\n    // Apply the same method to build any kind of slice.\n    // Then use CSS scale() to decrease the innerSlices's size.\n    sliceData (slice, index) {\n      const startPoint = this.getStartPercent(index)\n      const [startX, startY] = this.getCoordinatesForPercent(startPoint)\n      const [endX, endY] = this.getCoordinatesForPercent(startPoint + slice.percent)\n\n      // When a slice is more than 50%, the large arc point should be 1\n      const isLargeArc = slice.percent > 0.5 ? 1 : 0\n\n      // pathData - create an array and join it just for code readability\n      return [\n        `M ${startX} ${startY}`, // Move starting point\n        `A 1 1 0 ${isLargeArc} 1 ${endX} ${endY}`, // draw an Arc\n        'L 0 0', // and draw a Line to this point\n        'Z' // cloZe the path back to first point - needed to have a stroke\n      ].join(' ')\n    },\n    getStartPercent (index) {\n      // Each slice starts where the previous slice ended,\n      // so we need to know the total percent so far\n      return this.slices.slice(0, index).reduce((acc, cur) => acc + cur.percent, 0)\n    },\n    getCoordinatesForPercent (percent) {\n      return [\n        Math.cos(2 * Math.PI * percent), // x coordinate\n        Math.sin(2 * Math.PI * percent) // y coordinate\n      ]\n    },\n    showLabel: debounce(function (e, index) {\n      this.ephemeral.labelActiveIndex = index\n      this.ephemeral.labelStyle = { position: 'fixed', top: `${e.clientY}px`, left: `${e.clientX}px` }\n      this.ephemeral.isLabelVisible = true\n    }, 100),\n    hideLabel (event) {\n      this.ephemeral.isLabelVisible = false\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n$graphBg: $general_2;\n\n.c-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.c-piechart {\n  transform: rotate(-90deg);\n}\n\n.c-slice {\n  // Simulate a gap between each slice\n  stroke: $graphBg;\n  stroke-width: 0.03; // small unit because this SVG is a 1x1 grid system\n\n  &.c-full {\n    stroke-width: 0;\n  }\n\n  &.c-inner {\n    transform: scale(0.75);\n  }\n}\n\n.c-pie-donut {\n  fill: $graphBg;\n}\n\n.c-slot {\n  position: absolute;\n  width: 53%; // almost 2x inner .c-pie-donut radius\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  line-height: 1.2;\n}\n</style>\n";
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
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
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
var PieChart_default = __vue_component__2;

// frontend/views/components/graphs/Bars.vue
var __vue_script__3 = {
  name: "Bars",
  props: {
    totals: Array,
    members: Array
  },
  data: () => ({
    ratioWidthPadding: 1.5,
    ratioX: 720,
    ratioY: 160,
    labelPadding: 10,
    maxWidth: 48,
    isReady: false,
    isMobile: false,
    barTotal: 0,
    barAmount: 0,
    labelX: 0,
    labelY: 0
  }),
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    setTimeout(() => {
      this.isReady = true;
    }, 0);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapGetters([
      "groupProfiles",
      "groupSettings"
    ]),
    membersNumber() {
      return this.members.length;
    },
    // Graphic proportions
    width() {
      return Math.min(this.availableWidth / this.membersNumber / this.ratioWidthPadding, this.maxWidth);
    },
    availableWidth() {
      return this.ratioX - this.labelWidth;
    },
    labelWidth() {
      return this.max.toString().length * 9;
    },
    max() {
      const max = Math.max.apply(Math, this.totals);
      return max > 0 ? Math.max.apply(Math, this.totals) : 0;
    },
    min() {
      const min = Math.min.apply(Math, this.totals);
      return min > 0 ? 0 : min;
    },
    middle() {
      return this.max > 0 ? this.calculRatioY(this.max) : 0;
    },
    middleTag() {
      return { transform: "translate(0," + (this.middle - this.labelPadding) + "px)" };
    },
    createScale() {
      const range = this.max + Math.abs(this.min);
      const maxScalesCount = 4;
      const roundedTickRange = this.toPrecision(range / maxScalesCount);
      const scales = [];
      let scale = Math.ceil(this.min / roundedTickRange) * roundedTickRange;
      while (scale <= this.max) {
        let label = this.withGroupCurrency(Math.abs(scale));
        if (scale < 0) label = "-" + label;
        scales.push({ label, position: this.calculRatioY(scale) });
        scale = scale + roundedTickRange;
      }
      return scales;
    }
  },
  methods: {
    withGroupCurrency,
    handleResize: debounce(function() {
      if (this.$refs.graph) {
        this.isMobile = this.verifyIsMobile();
        this.ratioX = this.$refs.graph.clientWidth;
      }
    }, 100),
    toPrecision(nbr) {
      if (typeof nbr !== "number") return 0;
      if (nbr === 0) return 0;
      const num = Math.abs(nbr);
      if (nbr > 10) nbr = parseInt(nbr);
      const precision = nbr.toString().length > 3 ? 2 : 1;
      const digits = Math.ceil(Math.log(num) / Math.LN10);
      const factor = Math.pow(10, precision - digits);
      let result = Math.round(num * factor, 0) / factor;
      if (num > 1e3) result = parseInt(result);
      return nbr > 0 ? result : -result;
    },
    verifyIsMobile() {
      return window.innerWidth < TABLET;
    },
    calculRatioY(y) {
      return y !== 0 ? this.ratioY / (this.max + Math.abs(this.min)) * y : 0;
    },
    height(delta) {
      return delta !== 0 ? this.calculRatioY(Math.abs(delta)) : 0;
    },
    calculPositionX(index) {
      const marginLeft = Math.min((this.availableWidth - this.width * this.membersNumber) / this.membersNumber, 28);
      const maxWidth = this.membersNumber * (this.width + marginLeft);
      const positionX = maxWidth / this.membersNumber * index;
      const offset = (this.availableWidth - maxWidth) / 2 - marginLeft;
      return positionX + marginLeft + offset;
    },
    positionX(index) {
      return `translate(${this.calculPositionX(index)}, 0)`;
    },
    positionY(delta) {
      return delta > 0 ? -this.calculRatioY(delta) : 0;
    },
    color(delta, surplus) {
      if (delta >= 0) return surplus ? "g-positive" : "g-surplus";
      else return surplus ? "g-negative" : "g-needed";
    },
    roundedRect(up, squared, x, y, w, h, r) {
      let retval = "M" + (x + r) + "," + y;
      retval += "h" + (w - 2 * r);
      if (up && !squared) retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r;
      else {
        retval += "h" + r;
        retval += "v" + r;
      }
      retval += "v" + (h - 2 * r);
      if (up || squared) {
        retval += "v" + r;
        retval += "h" + -r;
      } else retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r;
      retval += "h" + (2 * r - w);
      if (up || squared) {
        retval += "h" + -r;
        retval += "v" + -r;
      } else retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r;
      retval += "v" + (2 * r - h);
      if (up && !squared) retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r;
      else {
        retval += "v" + -r;
        retval += "h" + r;
      }
      retval += "z";
      return retval;
    },
    hideLabel() {
      this.barTotal = 0;
      this.barAmount = 0;
    },
    showLabel(index, member) {
      this.labelX = this.calculPositionX(index) + this.width / 2;
      if (member) {
        this.labelY = member.total > 0 ? this.positionY(member.amount) + this.middle : this.height(member.amount) + this.middle;
        this.barTotal = member.total - member.amount;
        this.barAmount = member.amount;
      }
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-chart-wrapper" },
    [
      _c(
        "svg",
        {
          ref: "graph",
          attrs: {
            width: "100%",
            viewBox: "0 0 " + _vm.ratioX + " " + _vm.ratioY,
            preserveAspectRatio: "xMidYMid meet",
            "aria-labelledby": "title",
            role: "img"
          },
          on: {
            mouseleave: function($event) {
              return _vm.hideLabel();
            }
          }
        },
        [
          _c("g", { attrs: { transform: "translate(0," + _vm.middle + ")" } }, [
            _c(
              "g",
              {
                staticClass: "g-animate",
                style: "transform: scale3d(1," + (_vm.isReady ? 1 : 0) + ",1)"
              },
              [
                _vm._l(_vm.createScale, function(scaleLine) {
                  return _c(
                    "g",
                    {
                      attrs: {
                        transform: "translate(0," + -scaleLine.position + ")"
                      }
                    },
                    [
                      _c("line", {
                        staticClass: "g-animate g-animate-delay",
                        style: "transform: scale3d(" + (_vm.isReady ? 1 : 0) + ",1,1)",
                        attrs: {
                          x1: "0",
                          y1: "0",
                          x2: _vm.ratioX,
                          y2: "0",
                          stroke: "#dbdbdb",
                          "stroke-width": "1",
                          "stroke-dasharray": "1"
                        }
                      })
                    ]
                  );
                }),
                _vm._l(_vm.members, function(member, index) {
                  return _c(
                    "g",
                    {
                      staticClass: "graph-bar",
                      attrs: { transform: _vm.positionX(index) },
                      on: {
                        mouseover: function($event) {
                          return _vm.showLabel(index, member);
                        },
                        mouseleave: function($event) {
                          return _vm.showLabel(index);
                        }
                      }
                    },
                    _vm._l(
                      [member.total, member.amount],
                      function(values, index2) {
                        return _c("path", {
                          class: _vm.color(values, index2),
                          attrs: {
                            d: _vm.roundedRect(
                              values >= 0,
                              index2 === 1 && member.total !== Math.round(member.amount),
                              0,
                              _vm.positionY(values),
                              _vm.width,
                              _vm.height(values),
                              _vm.width > 15 ? 3 : 1
                            )
                          }
                        });
                      }
                    ),
                    0
                  );
                })
              ],
              2
            ),
            _c("line", {
              attrs: {
                x1: "0",
                y1: "0",
                x2: _vm.ratioX,
                y2: "0",
                stroke: "#dbdbdb",
                "stroke-width": "1"
              }
            })
          ])
        ]
      ),
      _c(
        "div",
        {
          staticClass: "c-tag-user",
          class: { positive: _vm.barTotal >= 0 },
          style: {
            opacity: _vm.barTotal || _vm.barAmount ? 1 : 0,
            transform: "translate3d(" + _vm.labelX + "px," + _vm.labelY + "px,0)"
          }
        },
        [
          Math.round(_vm.barTotal) !== 0 ? _c("div", { staticClass: "c-tag-total" }, [
            _vm._v(_vm._s(_vm.withGroupCurrency(Math.abs(_vm.barTotal))))
          ]) : _vm._e(),
          _vm.barAmount !== 0 && Math.round(_vm.barAmount) !== Math.round(_vm.barTotal) ? _c("div", { staticClass: "c-tag-amount" }, [
            _vm._v(_vm._s(_vm.withGroupCurrency(Math.abs(_vm.barAmount))))
          ]) : _vm._e()
        ]
      ),
      _c("div", { staticClass: "c-tag mincome", style: _vm.middleTag }, [
        _vm._v(_vm._s(_vm.withGroupCurrency(0)))
      ]),
      _vm._l(_vm.createScale, function(scaleLine) {
        return _c(
          "div",
          {
            staticClass: "c-tag g-animate-opacity g-animate-delay",
            style: {
              opacity: _vm.isReady ? 1 : 0,
              transform: "translate(0," + (-scaleLine.position + _vm.middle - _vm.labelPadding) + "px)"
            }
          },
          [_vm._v(_vm._s(scaleLine.label))]
        );
      })
    ],
    2
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-025ce4cd_0", { source: ".c-chart-wrapper[data-v-025ce4cd] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  min-height: 160px;\n}\n.c-tag[data-v-025ce4cd] {\n  position: absolute;\n  right: 0;\n  font-size: 0.75rem;\n  min-width: 1.875rem;\n  background-color: var(--background_0);\n  color: var(--text_1);\n  text-align: right;\n  padding-left: 0.125rem;\n}\n.c-tag-user[data-v-025ce4cd] {\n  width: 3.75rem;\n  position: absolute;\n  z-index: 2;\n  top: -1.5rem;\n  left: -1.875rem;\n  pointer-events: none;\n  border-radius: 3px;\n  text-align: center;\n  color: var(--danger_3);\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  transition: opacity 0.2s ease-in 0.2s, transform 0.2s ease-out;\n}\n.c-tag-user .c-tag-amount[data-v-025ce4cd] {\n  color: var(--warning_0);\n  margin-bottom: 0.375rem;\n}\n.c-tag-user .c-tag-amount[data-v-025ce4cd],\n.c-tag-user .c-tag-total[data-v-025ce4cd] {\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.4);\n  padding: 0 0.125rem;\n}\n.c-tag-user.positive[data-v-025ce4cd] {\n  flex-direction: column;\n}\n.c-tag-user.positive .c-tag-amount[data-v-025ce4cd] {\n  color: var(--primary_0);\n  margin-bottom: 0;\n}\n.c-tag-user.positive .c-tag-total[data-v-025ce4cd] {\n  color: var(--success_0);\n  margin-bottom: 0.375rem;\n}\n.c-tag-user.positive .c-tag-total[data-v-025ce4cd]:last-child {\n  margin-top: 1.625rem;\n}\n.c-no-activities[data-v-025ce4cd] {\n  display: flex;\n}\n.g-surplus[data-v-025ce4cd] {\n  fill: var(--success_0);\n}\n.g-positive[data-v-025ce4cd] {\n  fill: var(--primary_0);\n}\n.g-negative[data-v-025ce4cd] {\n  fill: var(--warning_0);\n}\n.g-needed[data-v-025ce4cd] {\n  fill: var(--danger_3);\n}\n.g-animate[data-v-025ce4cd] {\n  transition: transform 0.7s ease-out;\n}\n.g-animate-opacity[data-v-025ce4cd] {\n  transition: opacity 0.7s ease-out;\n}\n.g-animate-delay[data-v-025ce4cd] {\n  transition-delay: 0.5s;\n}\n\n/*# sourceMappingURL=Bars.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/graphs/Bars.vue", "Bars.vue"], "names": [], "mappings": "AAoQA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;ACnQA;ADsQA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,oBAAA;EACA,iBAAA;EACA,sBAAA;ACnQA;ADsQA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,8DAAA;ACnQA;ADqQA;EACA,uBAAA;EACA,uBAAA;ACnQA;ADsQA;;EAEA,kBAAA;EACA,oCAAA;EACA,mBAAA;ACpQA;ADuQA;EACA,sBAAA;ACrQA;ADuQA;EACA,uBAAA;EACA,gBAAA;ACrQA;ADwQA;EACA,uBAAA;EACA,uBAAA;ACtQA;ADyQA;EACA,oBAAA;ACvQA;AD4QA;EACA,aAAA;ACzQA;AD4QA;EACA,sBAAA;ACzQA;AD4QA;EACA,sBAAA;ACzQA;AD4QA;EACA,sBAAA;ACzQA;AD4QA;EACA,qBAAA;ACzQA;AD4QA;EACA,mCAAA;ACzQA;AD4QA;EACA,iCAAA;ACzQA;AD4QA;EACA,sBAAA;ACzQA;;AAEA,mCAAmC", "file": "Bars.vue", "sourcesContent": ["<template lang='pug'>\n.c-chart-wrapper\n  svg(\n    width='100%'\n    :viewBox='`0 0 ${ratioX} ${ratioY}`'\n    preserveAspectRatio='xMidYMid meet'\n    aria-labelledby='title'\n    role='img'\n    ref='graph'\n    @mouseleave='hideLabel()'\n  )\n    // Move graph origin to the middle\n    g(:transform='`translate(0,${middle})`')\n      // Animate using scale from the middle\n      g.g-animate(:style='`transform: scale3d(1,${ isReady ? 1 : 0 },1)`')\n        // Surplus line on top of bars\n        g(\n          v-for='scaleLine in createScale'\n          :transform='`translate(0,${-scaleLine.position})`'\n        )\n          line.g-animate.g-animate-delay(\n            :style='`transform: scale3d(${isReady ? 1 : 0},1,1)`'\n            x1='0'\n            y1='0'\n            :x2='ratioX'\n            y2='0'\n            stroke='#dbdbdb'\n            stroke-width='1'\n            stroke-dasharray='1'\n          )\n\n        g.graph-bar(\n          v-for='(member, index) in members'\n          :transform='positionX(index)'\n          @mouseover='showLabel(index, member)'\n          @mouseleave='showLabel(index)'\n        )\n          // Total needed or total pledge bars\n          path(\n            v-for='(values, index) in [member.total, member.amount]'\n            :class='color(values, index)'\n            :d='roundedRect(values >= 0, index === 1 && member.total !== Math.round(member.amount), 0, positionY(values), width, height(values), width > 15 ? 3 : 1)'\n          )\n\n      // Base with $0 on top of bars\n      line(x1='0' y1='0' :x2='ratioX' y2='0' stroke='#dbdbdb' stroke-width='1')\n\n  .c-tag-user(\n    :class='{ positive: barTotal >= 0 }'\n    :style='{ opacity: barTotal || barAmount ? 1 : 0, transform: `translate3d(${labelX}px,${labelY}px,0)`} '\n  )\n    .c-tag-total(v-if='Math.round(barTotal) !== 0') {{withGroupCurrency(Math.abs(barTotal))}}\n    .c-tag-amount(v-if='barAmount !== 0 && Math.round(barAmount) !== Math.round(barTotal)') {{withGroupCurrency(Math.abs(barAmount))}}\n\n  .c-tag.mincome(:style='middleTag') {{ withGroupCurrency(0) }}\n  .c-tag.g-animate-opacity.g-animate-delay(\n    v-for='scaleLine in createScale'\n    :style='{ opacity: isReady ? 1 : 0, transform: \"translate(0,\" + (-scaleLine.position + middle - labelPadding) + \"px)\" }'\n  ) {{ scaleLine.label }}\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport { TABLET } from '../../../../frontend/views/utils/breakpoints.js'\nimport { debounce } from 'turtledash'\nimport { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'\n\nexport default ({\n  name: 'Bars',\n  props: {\n    totals: Array,\n    members: Array\n  },\n  data: () => ({\n    ratioWidthPadding: 1.5,\n    ratioX: 720,\n    ratioY: 160,\n    labelPadding: 10,\n    maxWidth: 48,\n    isReady: false,\n    isMobile: false,\n    barTotal: 0,\n    barAmount: 0,\n    labelX: 0,\n    labelY: 0\n  }),\n  mounted () {\n    window.addEventListener('resize', this.handleResize)\n    this.handleResize()\n    setTimeout(() => { this.isReady = true }, 0)\n  },\n  beforeDestroy: function () {\n    window.removeEventListener('resize', this.handleResize)\n  },\n  computed: {\n    ...mapGetters([\n      'groupProfiles',\n      'groupSettings'\n    ]),\n    membersNumber () {\n      return this.members.length\n    },\n    // Graphic proportions\n    width () {\n      return Math.min(this.availableWidth / this.membersNumber / this.ratioWidthPadding, this.maxWidth)\n    },\n    availableWidth () {\n      return this.ratioX - this.labelWidth\n    },\n    labelWidth () {\n      return this.max.toString().length * 9\n    },\n    max () {\n      const max = Math.max.apply(Math, this.totals)\n      return max > 0 ? Math.max.apply(Math, this.totals) : 0\n    },\n    min () {\n      const min = Math.min.apply(Math, this.totals)\n      return min > 0 ? 0 : min\n    },\n    middle () {\n      return this.max > 0 ? this.calculRatioY(this.max) : 0\n    },\n    middleTag () {\n      return { transform: 'translate(0,' + (this.middle - this.labelPadding) + 'px)' }\n    },\n    createScale () {\n      const range = this.max + Math.abs(this.min)\n      const maxScalesCount = 4\n      const roundedTickRange = this.toPrecision(range / maxScalesCount)\n      const scales = []\n      let scale = Math.ceil(this.min / roundedTickRange) * roundedTickRange\n      while (scale <= this.max) {\n        let label = this.withGroupCurrency(Math.abs(scale))\n        if (scale < 0) label = '-' + label\n        // Add scale label and positition\n        scales.push({ label: label, position: this.calculRatioY(scale) })\n        scale = scale + roundedTickRange\n      }\n      return scales\n    }\n  },\n  methods: {\n    withGroupCurrency,\n    handleResize: debounce(function () {\n      if (this.$refs.graph) {\n        this.isMobile = this.verifyIsMobile()\n        this.ratioX = this.$refs.graph.clientWidth\n      }\n    }, 100),\n\n    toPrecision (nbr) {\n      if (typeof nbr !== 'number') return 0\n      if (nbr === 0) return 0\n      // log only for positive number\n      const num = Math.abs(nbr)\n      // Remove floating number for large number to calcul the precision\n      if (nbr > 10) nbr = parseInt(nbr)\n      // Increase precision for small value\n      const precision = nbr.toString().length > 3 ? 2 : 1\n      // Rounding technic\n      const digits = Math.ceil(Math.log(num) / Math.LN10)\n      const factor = Math.pow(10, precision - digits)\n      let result = Math.round(num * factor, 0) / factor\n      // Remove floating number for large number\n      if (num > 1000) result = parseInt(result)\n      // Bring sign back\n      return nbr > 0 ? result : -result\n    },\n\n    verifyIsMobile () {\n      return window.innerWidth < TABLET\n    },\n\n    calculRatioY (y) {\n      return (y !== 0) ? this.ratioY / (this.max + Math.abs(this.min)) * y : 0\n    },\n\n    height (delta) {\n      return (delta !== 0) ? this.calculRatioY(Math.abs(delta)) : 0\n    },\n\n    calculPositionX (index) {\n      const marginLeft = Math.min((this.availableWidth - (this.width * this.membersNumber)) / this.membersNumber, 28)\n      const maxWidth = this.membersNumber * (this.width + marginLeft)\n      const positionX = maxWidth / this.membersNumber * index\n      const offset = (this.availableWidth - maxWidth) / 2 - marginLeft\n      return positionX + marginLeft + offset\n    },\n\n    positionX (index) {\n      return `translate(${this.calculPositionX(index)}, 0)`\n    },\n\n    positionY (delta) {\n      // If delta is positive, the bar start at 0 otherwise we start at the top of the bar\n      return delta > 0 ? -(this.calculRatioY(delta)) : 0\n    },\n\n    color (delta, surplus) {\n      if (delta >= 0) return surplus ? 'g-positive' : 'g-surplus'\n      else return surplus ? 'g-negative' : 'g-needed'\n    },\n\n    roundedRect (up, squared, x, y, w, h, r) {\n      let retval = 'M' + (x + r) + ',' + y\n      retval += 'h' + (w - 2 * r)\n      // Top right corner\n      if (up && !squared) retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + r // Arc\n      else {\n        // Square corner\n        retval += 'h' + r\n        retval += 'v' + r\n      }\n      retval += 'v' + (h - 2 * r)\n      // Bottom right corner\n      if (up || squared) {\n        // Square corner\n        retval += 'v' + r\n        retval += 'h' + -r\n      } else retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + r // Arc\n      retval += 'h' + (2 * r - w)\n      // Bottom left corner\n      if (up || squared) {\n        // Square corner\n        retval += 'h' + -r\n        retval += 'v' + -r\n      } else retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + -r // Arc\n      retval += 'v' + (2 * r - h)\n      // Top left corner\n      if (up && !squared) retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + -r // Arc\n      else {\n        // Square corner\n        retval += 'v' + -r\n        retval += 'h' + r\n      }\n      retval += 'z'\n      return retval\n    },\n\n    hideLabel () {\n      this.barTotal = 0\n      this.barAmount = 0\n    },\n\n    showLabel (index, member) {\n      this.labelX = this.calculPositionX(index) + this.width / 2\n      if (member) {\n        this.labelY = member.total > 0 ? this.positionY(member.amount) + this.middle : this.height(member.amount) + this.middle\n        this.barTotal = member.total - member.amount\n        this.barAmount = member.amount\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-chart-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  min-height: 160px;\n}\n\n.c-tag {\n  position: absolute;\n  right: 0;\n  font-size: $size_5;\n  min-width: 1.875rem;\n  background-color: $background_0;\n  color: $text_1;\n  text-align: right;\n  padding-left: 0.125rem;\n}\n\n.c-tag-user {\n  width: 3.75rem;\n  position: absolute;\n  z-index: 2;\n  top: -1.5rem;\n  left: -1.875rem;\n  pointer-events: none;\n  border-radius: 3px;\n  text-align: center;\n  color: $danger_3;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  transition: opacity 0.2s ease-in 0.2s, transform 0.2s ease-out;\n\n  .c-tag-amount {\n    color: $warning_0;\n    margin-bottom: 0.375rem;\n  }\n\n  .c-tag-amount,\n  .c-tag-total {\n    border-radius: 3px;\n    background: rgba(256, 256, 256, 0.4);\n    padding: 0 0.125rem;\n  }\n\n  &.positive {\n    flex-direction: column;\n\n    .c-tag-amount {\n      color: $primary_0;\n      margin-bottom: 0;\n    }\n\n    .c-tag-total {\n      color: $success_0;\n      margin-bottom: 0.375rem;\n    }\n\n    .c-tag-total:last-child {\n      margin-top: 1.625rem;\n    }\n  }\n}\n\n.c-no-activities {\n  display: flex;\n}\n\n.g-surplus {\n  fill: $success_0;\n}\n\n.g-positive {\n  fill: $primary_0;\n}\n\n.g-negative {\n  fill: $warning_0;\n}\n\n.g-needed {\n  fill: $danger_3;\n}\n\n.g-animate {\n  transition: transform 0.7s ease-out;\n}\n\n.g-animate-opacity {\n  transition: opacity 0.7s ease-out;\n}\n\n.g-animate-delay {\n  transition-delay: 0.5s;\n}\n</style>\n", ".c-chart-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  min-height: 160px;\n}\n\n.c-tag {\n  position: absolute;\n  right: 0;\n  font-size: 0.75rem;\n  min-width: 1.875rem;\n  background-color: var(--background_0);\n  color: var(--text_1);\n  text-align: right;\n  padding-left: 0.125rem;\n}\n\n.c-tag-user {\n  width: 3.75rem;\n  position: absolute;\n  z-index: 2;\n  top: -1.5rem;\n  left: -1.875rem;\n  pointer-events: none;\n  border-radius: 3px;\n  text-align: center;\n  color: var(--danger_3);\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  transition: opacity 0.2s ease-in 0.2s, transform 0.2s ease-out;\n}\n.c-tag-user .c-tag-amount {\n  color: var(--warning_0);\n  margin-bottom: 0.375rem;\n}\n.c-tag-user .c-tag-amount,\n.c-tag-user .c-tag-total {\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.4);\n  padding: 0 0.125rem;\n}\n.c-tag-user.positive {\n  flex-direction: column;\n}\n.c-tag-user.positive .c-tag-amount {\n  color: var(--primary_0);\n  margin-bottom: 0;\n}\n.c-tag-user.positive .c-tag-total {\n  color: var(--success_0);\n  margin-bottom: 0.375rem;\n}\n.c-tag-user.positive .c-tag-total:last-child {\n  margin-top: 1.625rem;\n}\n\n.c-no-activities {\n  display: flex;\n}\n\n.g-surplus {\n  fill: var(--success_0);\n}\n\n.g-positive {\n  fill: var(--primary_0);\n}\n\n.g-negative {\n  fill: var(--warning_0);\n}\n\n.g-needed {\n  fill: var(--danger_3);\n}\n\n.g-animate {\n  transition: transform 0.7s ease-out;\n}\n\n.g-animate-opacity {\n  transition: opacity 0.7s ease-out;\n}\n\n.g-animate-delay {\n  transition-delay: 0.5s;\n}\n\n/*# sourceMappingURL=Bars.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-025ce4cd";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.c-chart-wrapper\n  svg(\n    width='100%'\n    :viewBox='`0 0 ${ratioX} ${ratioY}`'\n    preserveAspectRatio='xMidYMid meet'\n    aria-labelledby='title'\n    role='img'\n    ref='graph'\n    @mouseleave='hideLabel()'\n  )\n    // Move graph origin to the middle\n    g(:transform='`translate(0,${middle})`')\n      // Animate using scale from the middle\n      g.g-animate(:style='`transform: scale3d(1,${ isReady ? 1 : 0 },1)`')\n        // Surplus line on top of bars\n        g(\n          v-for='scaleLine in createScale'\n          :transform='`translate(0,${-scaleLine.position})`'\n        )\n          line.g-animate.g-animate-delay(\n            :style='`transform: scale3d(${isReady ? 1 : 0},1,1)`'\n            x1='0'\n            y1='0'\n            :x2='ratioX'\n            y2='0'\n            stroke='#dbdbdb'\n            stroke-width='1'\n            stroke-dasharray='1'\n          )\n\n        g.graph-bar(\n          v-for='(member, index) in members'\n          :transform='positionX(index)'\n          @mouseover='showLabel(index, member)'\n          @mouseleave='showLabel(index)'\n        )\n          // Total needed or total pledge bars\n          path(\n            v-for='(values, index) in [member.total, member.amount]'\n            :class='color(values, index)'\n            :d='roundedRect(values >= 0, index === 1 && member.total !== Math.round(member.amount), 0, positionY(values), width, height(values), width > 15 ? 3 : 1)'\n          )\n\n      // Base with $0 on top of bars\n      line(x1='0' y1='0' :x2='ratioX' y2='0' stroke='#dbdbdb' stroke-width='1')\n\n  .c-tag-user(\n    :class='{ positive: barTotal >= 0 }'\n    :style='{ opacity: barTotal || barAmount ? 1 : 0, transform: `translate3d(${labelX}px,${labelY}px,0)`} '\n  )\n    .c-tag-total(v-if='Math.round(barTotal) !== 0') {{withGroupCurrency(Math.abs(barTotal))}}\n    .c-tag-amount(v-if='barAmount !== 0 && Math.round(barAmount) !== Math.round(barTotal)') {{withGroupCurrency(Math.abs(barAmount))}}\n\n  .c-tag.mincome(:style='middleTag') {{ withGroupCurrency(0) }}\n  .c-tag.g-animate-opacity.g-animate-delay(\n    v-for='scaleLine in createScale'\n    :style='{ opacity: isReady ? 1 : 0, transform: \"translate(0,\" + (-scaleLine.position + middle - labelPadding) + \"px)\" }'\n  ) {{ scaleLine.label }}\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport { TABLET } from '../../../../frontend/views/utils/breakpoints.js'\nimport { debounce } from 'turtledash'\nimport { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'\n\nexport default ({\n  name: 'Bars',\n  props: {\n    totals: Array,\n    members: Array\n  },\n  data: () => ({\n    ratioWidthPadding: 1.5,\n    ratioX: 720,\n    ratioY: 160,\n    labelPadding: 10,\n    maxWidth: 48,\n    isReady: false,\n    isMobile: false,\n    barTotal: 0,\n    barAmount: 0,\n    labelX: 0,\n    labelY: 0\n  }),\n  mounted () {\n    window.addEventListener('resize', this.handleResize)\n    this.handleResize()\n    setTimeout(() => { this.isReady = true }, 0)\n  },\n  beforeDestroy: function () {\n    window.removeEventListener('resize', this.handleResize)\n  },\n  computed: {\n    ...mapGetters([\n      'groupProfiles',\n      'groupSettings'\n    ]),\n    membersNumber () {\n      return this.members.length\n    },\n    // Graphic proportions\n    width () {\n      return Math.min(this.availableWidth / this.membersNumber / this.ratioWidthPadding, this.maxWidth)\n    },\n    availableWidth () {\n      return this.ratioX - this.labelWidth\n    },\n    labelWidth () {\n      return this.max.toString().length * 9\n    },\n    max () {\n      const max = Math.max.apply(Math, this.totals)\n      return max > 0 ? Math.max.apply(Math, this.totals) : 0\n    },\n    min () {\n      const min = Math.min.apply(Math, this.totals)\n      return min > 0 ? 0 : min\n    },\n    middle () {\n      return this.max > 0 ? this.calculRatioY(this.max) : 0\n    },\n    middleTag () {\n      return { transform: 'translate(0,' + (this.middle - this.labelPadding) + 'px)' }\n    },\n    createScale () {\n      const range = this.max + Math.abs(this.min)\n      const maxScalesCount = 4\n      const roundedTickRange = this.toPrecision(range / maxScalesCount)\n      const scales = []\n      let scale = Math.ceil(this.min / roundedTickRange) * roundedTickRange\n      while (scale <= this.max) {\n        let label = this.withGroupCurrency(Math.abs(scale))\n        if (scale < 0) label = '-' + label\n        // Add scale label and positition\n        scales.push({ label: label, position: this.calculRatioY(scale) })\n        scale = scale + roundedTickRange\n      }\n      return scales\n    }\n  },\n  methods: {\n    withGroupCurrency,\n    handleResize: debounce(function () {\n      if (this.$refs.graph) {\n        this.isMobile = this.verifyIsMobile()\n        this.ratioX = this.$refs.graph.clientWidth\n      }\n    }, 100),\n\n    toPrecision (nbr) {\n      if (typeof nbr !== 'number') return 0\n      if (nbr === 0) return 0\n      // log only for positive number\n      const num = Math.abs(nbr)\n      // Remove floating number for large number to calcul the precision\n      if (nbr > 10) nbr = parseInt(nbr)\n      // Increase precision for small value\n      const precision = nbr.toString().length > 3 ? 2 : 1\n      // Rounding technic\n      const digits = Math.ceil(Math.log(num) / Math.LN10)\n      const factor = Math.pow(10, precision - digits)\n      let result = Math.round(num * factor, 0) / factor\n      // Remove floating number for large number\n      if (num > 1000) result = parseInt(result)\n      // Bring sign back\n      return nbr > 0 ? result : -result\n    },\n\n    verifyIsMobile () {\n      return window.innerWidth < TABLET\n    },\n\n    calculRatioY (y) {\n      return (y !== 0) ? this.ratioY / (this.max + Math.abs(this.min)) * y : 0\n    },\n\n    height (delta) {\n      return (delta !== 0) ? this.calculRatioY(Math.abs(delta)) : 0\n    },\n\n    calculPositionX (index) {\n      const marginLeft = Math.min((this.availableWidth - (this.width * this.membersNumber)) / this.membersNumber, 28)\n      const maxWidth = this.membersNumber * (this.width + marginLeft)\n      const positionX = maxWidth / this.membersNumber * index\n      const offset = (this.availableWidth - maxWidth) / 2 - marginLeft\n      return positionX + marginLeft + offset\n    },\n\n    positionX (index) {\n      return `translate(${this.calculPositionX(index)}, 0)`\n    },\n\n    positionY (delta) {\n      // If delta is positive, the bar start at 0 otherwise we start at the top of the bar\n      return delta > 0 ? -(this.calculRatioY(delta)) : 0\n    },\n\n    color (delta, surplus) {\n      if (delta >= 0) return surplus ? 'g-positive' : 'g-surplus'\n      else return surplus ? 'g-negative' : 'g-needed'\n    },\n\n    roundedRect (up, squared, x, y, w, h, r) {\n      let retval = 'M' + (x + r) + ',' + y\n      retval += 'h' + (w - 2 * r)\n      // Top right corner\n      if (up && !squared) retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + r // Arc\n      else {\n        // Square corner\n        retval += 'h' + r\n        retval += 'v' + r\n      }\n      retval += 'v' + (h - 2 * r)\n      // Bottom right corner\n      if (up || squared) {\n        // Square corner\n        retval += 'v' + r\n        retval += 'h' + -r\n      } else retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + r // Arc\n      retval += 'h' + (2 * r - w)\n      // Bottom left corner\n      if (up || squared) {\n        // Square corner\n        retval += 'h' + -r\n        retval += 'v' + -r\n      } else retval += 'a' + r + ',' + r + ' 0 0 1 ' + -r + ',' + -r // Arc\n      retval += 'v' + (2 * r - h)\n      // Top left corner\n      if (up && !squared) retval += 'a' + r + ',' + r + ' 0 0 1 ' + r + ',' + -r // Arc\n      else {\n        // Square corner\n        retval += 'v' + -r\n        retval += 'h' + r\n      }\n      retval += 'z'\n      return retval\n    },\n\n    hideLabel () {\n      this.barTotal = 0\n      this.barAmount = 0\n    },\n\n    showLabel (index, member) {\n      this.labelX = this.calculPositionX(index) + this.width / 2\n      if (member) {\n        this.labelY = member.total > 0 ? this.positionY(member.amount) + this.middle : this.height(member.amount) + this.middle\n        this.barTotal = member.total - member.amount\n        this.barAmount = member.amount\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-chart-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  min-height: 160px;\n}\n\n.c-tag {\n  position: absolute;\n  right: 0;\n  font-size: $size_5;\n  min-width: 1.875rem;\n  background-color: $background_0;\n  color: $text_1;\n  text-align: right;\n  padding-left: 0.125rem;\n}\n\n.c-tag-user {\n  width: 3.75rem;\n  position: absolute;\n  z-index: 2;\n  top: -1.5rem;\n  left: -1.875rem;\n  pointer-events: none;\n  border-radius: 3px;\n  text-align: center;\n  color: $danger_3;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  transition: opacity 0.2s ease-in 0.2s, transform 0.2s ease-out;\n\n  .c-tag-amount {\n    color: $warning_0;\n    margin-bottom: 0.375rem;\n  }\n\n  .c-tag-amount,\n  .c-tag-total {\n    border-radius: 3px;\n    background: rgba(256, 256, 256, 0.4);\n    padding: 0 0.125rem;\n  }\n\n  &.positive {\n    flex-direction: column;\n\n    .c-tag-amount {\n      color: $primary_0;\n      margin-bottom: 0;\n    }\n\n    .c-tag-total {\n      color: $success_0;\n      margin-bottom: 0.375rem;\n    }\n\n    .c-tag-total:last-child {\n      margin-top: 1.625rem;\n    }\n  }\n}\n\n.c-no-activities {\n  display: flex;\n}\n\n.g-surplus {\n  fill: $success_0;\n}\n\n.g-positive {\n  fill: $primary_0;\n}\n\n.g-negative {\n  fill: $warning_0;\n}\n\n.g-needed {\n  fill: $danger_3;\n}\n\n.g-animate {\n  transition: transform 0.7s ease-out;\n}\n\n.g-animate-opacity {\n  transition: opacity 0.7s ease-out;\n}\n\n.g-animate-delay {\n  transition-delay: 0.5s;\n}\n</style>\n";
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
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
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
var Bars_default = __vue_component__3;

export {
  Bars_default,
  GraphLegendItem_default,
  PieChart_default
};
//# sourceMappingURL=chunk-PCDU7CB5-cached.js.map
