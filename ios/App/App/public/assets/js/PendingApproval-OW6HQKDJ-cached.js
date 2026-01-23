import {
  invitation_default
} from "./chunk-4IQTUSSG-cached.js";
import {
  CHELONIA_RESET
} from "./chunk-76TQH32R-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  linearScale,
  randomIntFromRange
} from "./chunk-MTWMQLQH-cached.js";
import {
  PROFILE_STATUS
} from "./chunk-UYGYRQRQ-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/components/confetti-animation/confettiComponents/ConfettiCircle.vue
var __vue_script__ = {
  name: "ConfettiCircle",
  inheritAttrs: false,
  props: {
    position: Object,
    innerGroupY: [Number, String],
    opacity: [Number, String],
    transforms: Object,
    color: String
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "g",
    {
      staticClass: "confetti",
      attrs: {
        transform: "translate(" + _vm.position.x + "," + _vm.position.y + ")",
        opacity: _vm.opacity
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "inner",
          attrs: {
            stroke: _vm.color,
            fill: _vm.color,
            transform: "translate(0," + _vm.innerGroupY + ")"
          }
        },
        [
          _c(
            "g",
            {
              staticClass: "object",
              attrs: {
                transform: "translate(" + _vm.transforms.translate + ",0) rotate(" + _vm.transforms.rotate + ") scale(1," + _vm.transforms.scale + ")"
              }
            },
            [
              _c("circle", {
                staticClass: "circle",
                attrs: {
                  cx: "0",
                  cy: "0",
                  r: "8",
                  "stroke-width": "3",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round"
                }
              })
            ]
          )
        ]
      )
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = void 0;
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  g.confetti(\n    :transform='`translate(${position.x},${position.y})`'\n    :opacity='opacity'\n  )\n    g.inner(\n      :stroke='color'\n      :fill='color'\n      :transform='`translate(0,${innerGroupY})`'\n    )\n      g.object(\n        :transform='`translate(${transforms.translate},0) rotate(${transforms.rotate}) scale(1,${transforms.scale})`'\n      )\n        circle.circle(\n          cx='0' cy='0' r='8'\n          stroke-width='3'\n          stroke-linejoin='round'\n          stroke-linecap='round'\n        )\n</template>\n\n<script>\nexport default ({\n  name: 'ConfettiCircle',\n  inheritAttrs: false,\n  props: {\n    position: Object,\n    innerGroupY: [Number, String],\n    opacity: [Number, String],\n    transforms: Object,\n    color: String\n  }\n}: Object)\n<\/script>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  void 0,
  void 0,
  void 0
);
var ConfettiCircle_default = __vue_component__;

// frontend/views/components/confetti-animation/confettiComponents/ConfettiRectangle.vue
var __vue_script__2 = {
  name: "ConfettiRectangle",
  inheritAttrs: false,
  props: {
    position: Object,
    innerGroupY: [Number, String],
    opacity: [Number, String],
    transforms: Object,
    color: String
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "g",
    {
      staticClass: "confetti",
      attrs: {
        transform: "translate(" + _vm.position.x + "," + _vm.position.y + ")",
        opacity: _vm.opacity
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "inner",
          attrs: {
            stroke: _vm.color,
            fill: _vm.color,
            transform: "translate(0," + _vm.innerGroupY + ")"
          }
        },
        [
          _c(
            "g",
            {
              staticClass: "object",
              attrs: {
                transform: "translate(" + _vm.transforms.translate + ",0) rotate(" + _vm.transforms.rotate + ") scale(1," + _vm.transforms.scale + ")"
              }
            },
            [
              _c("rect", {
                staticClass: "rect",
                attrs: {
                  x: "-6",
                  y: "-6",
                  width: "12",
                  height: "12",
                  "stroke-width": "3",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round"
                }
              })
            ]
          )
        ]
      )
    ]
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = void 0;
var __vue_scope_id__2 = void 0;
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  g.confetti(\n    :transform='`translate(${position.x},${position.y})`'\n    :opacity='opacity'\n  )\n    g.inner(\n      :stroke='color'\n      :fill='color'\n      :transform='`translate(0,${innerGroupY})`'\n    )\n      g.object(\n        :transform='`translate(${transforms.translate},0) rotate(${transforms.rotate}) scale(1,${transforms.scale})`'\n      )\n        rect.rect(\n          x='-6' y='-6' width='12' height='12'\n          stroke-width='3'\n          stroke-linejoin='round'\n          stroke-linecap='round'\n        )\n</template>\n\n<script>\nexport default ({\n  name: 'ConfettiRectangle',\n  inheritAttrs: false,\n  props: {\n    position: Object,\n    innerGroupY: [Number, String],\n    opacity: [Number, String],\n    transforms: Object,\n    color: String\n  }\n}: Object)\n<\/script>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2(
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
  __vue_inject_styles__2,
  __vue_script__2,
  __vue_scope_id__2,
  __vue_is_functional_template__2,
  __vue_module_identifier__2,
  false,
  void 0,
  void 0,
  void 0
);
var ConfettiRectangle_default = __vue_component__2;

// frontend/views/components/confetti-animation/confettiComponents/ConfettiTriangle.vue
var __vue_script__3 = {
  name: "ConfettiTriangle",
  inheritAttrs: false,
  props: {
    position: Object,
    innerGroupY: [Number, String],
    opacity: [Number, String],
    transforms: Object,
    color: String
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "g",
    {
      staticClass: "confetti",
      attrs: {
        transform: "translate(" + _vm.position.x + "," + _vm.position.y + ")",
        opacity: _vm.opacity
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "inner",
          attrs: {
            stroke: _vm.color,
            fill: _vm.color,
            transform: "translate(0," + _vm.innerGroupY + ")"
          }
        },
        [
          _c(
            "g",
            {
              staticClass: "object",
              attrs: {
                transform: "translate(" + _vm.transforms.translate + ",0) rotate(" + _vm.transforms.rotate + ") scale(1," + _vm.transforms.scale + ")"
              }
            },
            [
              _c("polygon", {
                staticClass: "triangle",
                attrs: {
                  points: "0 -12, 8 6, -8 6",
                  "stroke-width": "3",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round"
                }
              })
            ]
          )
        ]
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = void 0;
var __vue_scope_id__3 = void 0;
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  g.confetti(\n    :transform='`translate(${position.x},${position.y})`'\n    :opacity='opacity'\n  )\n    g.inner(\n      :stroke='color'\n      :fill='color'\n      :transform='`translate(0,${innerGroupY})`'\n    )\n      g.object(\n        :transform='`translate(${transforms.translate},0) rotate(${transforms.rotate}) scale(1,${transforms.scale})`'\n      )\n        polygon.triangle(\n          points='0 -12, 8 6, -8 6'\n          stroke-width='3'\n          stroke-linejoin='round'\n          stroke-linecap='round'\n        )\n</template>\n\n<script>\nexport default ({\n  name: 'ConfettiTriangle',\n  inheritAttrs: false,\n  props: {\n    position: Object,\n    innerGroupY: [Number, String],\n    opacity: [Number, String],\n    transforms: Object,\n    color: String\n  }\n}: Object)\n<\/script>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  void 0,
  void 0,
  void 0
);
var ConfettiTriangle_default = __vue_component__3;

// frontend/views/components/confetti-animation/confettiComponents/ConfettiLogo.vue
var __vue_script__4 = {
  name: "ConfettiLogo",
  inheritAttrs: false,
  data() {
    return {
      hooks: [
        { stroke: "rgb(160,209,14)", tx: 23, ty: -16, rotate: -137, id: "lightgreen" },
        { stroke: "rgb(93,200,240)", tx: 2, ty: 2, rotate: -10, id: "skyblue" },
        { stroke: "rgb(248,146,1)", tx: -4, ty: -24, rotate: 105, id: "orange" }
      ]
    };
  },
  props: {
    position: Object,
    innerGroupY: [Number, String],
    opacity: [Number, String],
    transforms: Object
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "g",
    {
      staticClass: "confetti gi-logo",
      attrs: {
        transform: "translate(" + _vm.position.x + "," + _vm.position.y + ")",
        opacity: _vm.opacity
      }
    },
    [
      _c("defs", [
        _c("path", {
          ref: "refPath",
          attrs: {
            id: "hook",
            d: "M 0,0 a 12.5,12.5 0 1 0 25,0 q -10,-15 -12,-22"
          }
        })
      ]),
      _c(
        "g",
        {
          staticClass: "inner",
          attrs: {
            stroke: "rgb(93,200,240)",
            transform: "translate(0," + _vm.innerGroupY + ")"
          }
        },
        [
          _c(
            "g",
            {
              staticClass: "object",
              attrs: {
                stroke: "inherit",
                transform: "translate(" + _vm.transforms.translate + ",0) rotate(" + _vm.transforms.rotate + ")"
              }
            },
            [
              _c(
                "g",
                {
                  staticClass: "scale",
                  attrs: {
                    transform: "scale(0.5)",
                    "data-logo": "true",
                    stroke: "inherit",
                    fill: "none"
                  }
                },
                _vm._l(_vm.hooks, function(hook) {
                  return _c("use", {
                    attrs: {
                      "xlink:href": "#hook",
                      stroke: hook.stroke,
                      transform: "translate(" + hook.tx + "," + hook.ty + ") rotate(" + hook.rotate + ")",
                      id: hook.id
                    }
                  });
                }),
                0
              )
            ]
          )
        ]
      )
    ]
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-6201c77b_0", { source: "#hook[data-v-6201c77b] {\n  fill: none;\n  stroke-width: 4;\n  stroke-linejoin: round;\n}\n\n/*# sourceMappingURL=ConfettiLogo.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/confetti-animation/confettiComponents/ConfettiLogo.vue", "ConfettiLogo.vue"], "names": [], "mappings": "AAmDA;EACA,UAAA;EAEA,eAAA;EACA,sBAAA;ACnDA;;AAEA,2CAA2C", "file": "ConfettiLogo.vue", "sourcesContent": ["<template lang='pug'>\n  g.confetti.gi-logo(\n    :transform='`translate(${position.x},${position.y})`'\n    :opacity='opacity'\n  )\n    defs\n      path#hook(\n        ref='refPath'\n        d='M 0,0 a 12.5,12.5 0 1 0 25,0 q -10,-15 -12,-22'\n      )\n    g.inner(\n      stroke='rgb(93,200,240)'\n      :transform='`translate(0,${innerGroupY})`'\n    )\n      g.object(\n        stroke='inherit'\n        :transform='`translate(${transforms.translate},0) rotate(${transforms.rotate})`'\n      )\n        g.scale(transform='scale(0.5)' data-logo='true' stroke='inherit' fill='none')\n          use(\n            v-for='hook in hooks'\n            xlink:href='#hook'\n            :stroke='hook.stroke'\n            :transform='`translate(${hook.tx},${hook.ty}) rotate(${hook.rotate})`'\n            :id='hook.id'\n          )\n</template>\n\n<script>\nexport default ({\n  name: 'ConfettiLogo',\n  inheritAttrs: false,\n  data () {\n    return {\n      hooks: [\n        { stroke: 'rgb(160,209,14)', tx: 23, ty: -16, rotate: -137, id: 'lightgreen' },\n        { stroke: 'rgb(93,200,240)', tx: 2, ty: 2, rotate: -10, id: 'skyblue' },\n        { stroke: 'rgb(248,146,1)', tx: -4, ty: -24, rotate: 105, id: 'orange' }\n      ]\n    }\n  },\n  props: {\n    position: Object,\n    innerGroupY: [Number, String],\n    opacity: [Number, String],\n    transforms: Object\n  }\n}: Object)\n<\/script>\n\n<style scoped lang=\"scss\">\n#hook {\n  fill: none;\n  stroke: {\n    width: 4;\n    linejoin: round;\n  }\n}\n</style>\n", "#hook {\n  fill: none;\n  stroke-width: 4;\n  stroke-linejoin: round;\n}\n\n/*# sourceMappingURL=ConfettiLogo.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-6201c77b";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  g.confetti.gi-logo(\n    :transform='`translate(${position.x},${position.y})`'\n    :opacity='opacity'\n  )\n    defs\n      path#hook(\n        ref='refPath'\n        d='M 0,0 a 12.5,12.5 0 1 0 25,0 q -10,-15 -12,-22'\n      )\n    g.inner(\n      stroke='rgb(93,200,240)'\n      :transform='`translate(0,${innerGroupY})`'\n    )\n      g.object(\n        stroke='inherit'\n        :transform='`translate(${transforms.translate},0) rotate(${transforms.rotate})`'\n      )\n        g.scale(transform='scale(0.5)' data-logo='true' stroke='inherit' fill='none')\n          use(\n            v-for='hook in hooks'\n            xlink:href='#hook'\n            :stroke='hook.stroke'\n            :transform='`translate(${hook.tx},${hook.ty}) rotate(${hook.rotate})`'\n            :id='hook.id'\n          )\n</template>\n\n<script>\nexport default ({\n  name: 'ConfettiLogo',\n  inheritAttrs: false,\n  data () {\n    return {\n      hooks: [\n        { stroke: 'rgb(160,209,14)', tx: 23, ty: -16, rotate: -137, id: 'lightgreen' },\n        { stroke: 'rgb(93,200,240)', tx: 2, ty: 2, rotate: -10, id: 'skyblue' },\n        { stroke: 'rgb(248,146,1)', tx: -4, ty: -24, rotate: 105, id: 'orange' }\n      ]\n    }\n  },\n  props: {\n    position: Object,\n    innerGroupY: [Number, String],\n    opacity: [Number, String],\n    transforms: Object\n  }\n}: Object)\n<\/script>\n\n<style scoped lang=\"scss\">\n#hook {\n  fill: none;\n  stroke: {\n    width: 4;\n    linejoin: round;\n  }\n}\n</style>\n";
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__,
  void 0,
  void 0
);
var ConfettiLogo_default = __vue_component__4;

// frontend/views/components/confetti-animation/confettiComponents/index.js
var confettiComponents = {
  "confetti-circle": ConfettiCircle_default,
  "confetti-rectangle": ConfettiRectangle_default,
  "confetii-triangle": ConfettiTriangle_default,
  "confetti-logo": ConfettiLogo_default
};
var confettiNames = Object.keys(confettiComponents);

// frontend/views/components/confetti-animation/AnimationMixins.js
var canvas = {
  width: null,
  height: null
};
var CONFETTI_AMOUNT_MIN = 25;
var CONFETTI_AMOUNT_MAX = 40;
var BP_PHONE = 400;
var BP_LARGESCREEN = 1e3;
var COLORS = [
  "var(--primary_0)",
  "var(--success_0)",
  "var(--warning_0)",
  "var(--danger_0)"
];
var confettiAmountScaler = linearScale(
  [BP_PHONE, BP_LARGESCREEN],
  [CONFETTI_AMOUNT_MIN, CONFETTI_AMOUNT_MAX]
);
var requestId = null;
var unitExplosionDistance = 0;
function getPositionTo(pFrom, d, angle) {
  const absAngle = Math.abs(angle);
  const [xSign, ySign, theta] = [
    absAngle > 90 ? -1 : 1,
    angle >= 0 ? 1 : -1,
    absAngle > 90 ? 180 - absAngle : absAngle
  ];
  return {
    x: pFrom.x + xSign * d * Math.cos(theta * Math.PI / 180),
    y: pFrom.y + ySign * d * Math.sin(theta * Math.PI / 180)
  };
}
function randomSign() {
  return Math.random() > 0.5 ? 1 : -1;
}
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function createEase({
  type,
  init,
  end,
  duration
}) {
  switch (type) {
    case "QuadInOut":
      return (t) => {
        t /= duration / 2;
        if (t < 1) return (end - init) / 2 * t * t + init;
        t--;
        return -(end - init) / 2 * (t * (t - 2) - 1) + init;
      };
    case "ExpoOut":
      return (t) => {
        return t === duration ? end : (end - init) * (-Math.pow(2, -10 * t / duration) + 1) + init;
      };
    default:
      return (t) => {
        return (end - init) * t / duration + init;
      };
  }
}
var Confetti = class {
  index;
  confettiType;
  disappeared;
  explosion;
  fadeOut;
  props;
  sway;
  tPassedMaster;
  tRefMaster;
  yVelocity;
  // Confetti Object constructor
  constructor(x, y, index, color, confettiType) {
    this.confettiType = confettiType;
    this.index = index;
    this.props = {
      position: { x, y },
      color,
      innerGroupY: y,
      opacity: 1,
      transforms: {
        translate: 0,
        scale: 1,
        rotate: 0
      }
    };
    const EXLPOSION_REF_ANGLE = -90;
    const MAX_ANGLE_DEVIATION = 80;
    const ELPLOSION_REF_DURATION = 800;
    const ELPLOSION_DURATION_DEVIATION = 300;
    const explosionAngle = EXLPOSION_REF_ANGLE + randomSign() * Math.floor(MAX_ANGLE_DEVIATION * Math.random());
    const explosionDuration = ELPLOSION_REF_DURATION + randomSign() * Math.floor(ELPLOSION_DURATION_DEVIATION * Math.random());
    const explosionDistance = unitExplosionDistance * (index + 1);
    const explosionTo = getPositionTo(
      this.props.position,
      explosionDistance,
      explosionAngle
    );
    this.explosion = {
      duration: explosionDuration,
      distance: explosionDistance,
      easeFunctions: {
        x: createEase({
          type: "ExpoOut",
          init: this.props.position.x,
          end: explosionTo.x,
          duration: explosionDuration
        }),
        y: createEase({
          type: "ExpoOut",
          init: this.props.position.y,
          end: explosionTo.y,
          duration: explosionDuration
        })
      }
    };
    const Y_VEL_MIN = 0.75;
    const Y_VEL_DEVIATION = 2;
    const SWAY_DURATION = randomIntFromRange(800, 1200);
    const TRANSLATE_MAX_VALUE = randomIntFromRange(5, 10);
    const ROTATION_REF_ANGLE = 120;
    const SCALE_MAX = 1;
    const SCALE_MIN = -1;
    const SCALE_DEVIATION = 0.3;
    this.yVelocity = Y_VEL_MIN + Math.random() * Y_VEL_DEVIATION;
    this.sway = {
      direction: "forward",
      tRef: null,
      duration: SWAY_DURATION,
      easeFunctions: {
        translate: createEase({
          type: "QuadInOut",
          init: -TRANSLATE_MAX_VALUE,
          end: TRANSLATE_MAX_VALUE,
          duration: SWAY_DURATION
        }),
        rotate: createEase({
          type: "QuadInOut",
          init: -1 * Math.floor(ROTATION_REF_ANGLE * Math.random()),
          end: Math.floor(ROTATION_REF_ANGLE * Math.random()),
          duration: SWAY_DURATION
        }),
        scale: createEase({
          type: "Linear",
          init: SCALE_MIN + Math.floor(SCALE_DEVIATION * Math.random()),
          end: SCALE_MAX + Math.floor(SCALE_DEVIATION * Math.random()),
          duration: SWAY_DURATION
        })
      }
    };
    const REF_REMOVAL_TIME = 5e3;
    const REMOVAL_TIME_DEVIATION = 500;
    const MIN_REMOVAL_DURATION = 500;
    const REMOVAL_DURATION_DEVIATION = 300;
    const removalDuration = MIN_REMOVAL_DURATION + Math.floor(REMOVAL_DURATION_DEVIATION * Math.random());
    this.fadeOut = {
      tStart: REF_REMOVAL_TIME + randomSign() * Math.floor(REMOVAL_TIME_DEVIATION * Math.random()),
      duration: removalDuration,
      easeFunction: createEase({
        type: "Linear",
        init: 1,
        end: 0,
        duration: removalDuration
      })
    };
    this.disappeared = false;
    this.tRefMaster = null;
    this.tPassedMaster = 0;
  }
  update() {
    const { tRefMaster } = this;
    if (this.disappeared) return;
    if (tRefMaster == null) {
      this.tRefMaster = Date.now();
      this.tPassedMaster = 0;
    } else {
      this.tPassedMaster = Date.now() - tRefMaster;
    }
    this.explode();
    this.fall();
    this.wiggle();
    if (this.tPassedMaster >= this.fadeOut.tStart) {
      this.remove();
    }
  }
  explode() {
    if (this.tPassedMaster <= this.explosion.duration) {
      this.props.position.x = this.explosion.easeFunctions.x(this.tPassedMaster);
      this.props.position.y = this.explosion.easeFunctions.y(this.tPassedMaster);
    }
  }
  fall() {
    this.props.innerGroupY += this.yVelocity;
  }
  wiggle() {
    if (this.sway.tRef === null) {
      this.sway.tRef = Date.now();
    }
    const transformTypes = ["translate", "scale", "rotate"];
    const tPassed = Date.now() - this.sway.tRef;
    const tUse = this.sway.direction === "forward" ? tPassed : this.sway.direction === "backward" && this.sway.duration - tPassed;
    transformTypes.forEach((type) => {
      this.props.transforms[type] = this.sway.easeFunctions[type](tUse);
    });
    if (tPassed >= this.sway.duration) {
      this.sway.tRef = Date.now();
      this.sway.direction = this.sway.direction === "forward" ? "backward" : "forward";
    }
  }
  remove() {
    const {
      tStart,
      duration
    } = this.fadeOut;
    if (this.tPassedMaster != null) {
      this.props.opacity = this.fadeOut.easeFunction(this.tPassedMaster - tStart);
      if (this.tPassedMaster >= tStart + duration) {
        this.disappeared = true;
      }
    }
  }
};
var animationMixins = {
  components: {
    ...confettiComponents
  },
  data() {
    return {
      confettis: [],
      animationActive: true,
      timeout: null
      // animation begins after a bit of delay
    };
  },
  methods: {
    initializeAnimation() {
      const {
        width: canvasWidth,
        height: canvasHeight
      } = this.$refs.svg.getBoundingClientRect();
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const explosionTip = {
        x: canvasWidth / 2,
        y: canvasHeight * 0.125
      };
      const confettiAmount = confettiAmountScaler(canvasWidth);
      const MAX_EXPLOSION_DISTANCE = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight) * 0.35;
      unitExplosionDistance = MAX_EXPLOSION_DISTANCE / confettiAmount;
      const confettis = [];
      for (let i = 0; i < confettiAmount; i++) {
        confettis.push(
          new Confetti(
            explosionTip.x,
            explosionTip.y,
            i,
            randomFromArray(COLORS),
            randomFromArray(confettiNames)
          )
        );
      }
      this.confettis = confettis;
    },
    animate() {
      requestId = window.requestAnimationFrame(this.animate);
      let hasAllDisappeared = true;
      this.confettis.forEach((confetti) => {
        confetti.update && confetti.update();
        if (!confetti.disappeared) {
          hasAllDisappeared = false;
        }
      });
      if (hasAllDisappeared) {
        this.animationActive = false;
        this.stopAnimation();
      }
    },
    stopAnimation() {
      clearTimeout(this.timeout);
      window.cancelAnimationFrame(requestId);
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.initializeAnimation();
      this.animate();
    }, 500);
  },
  beforeDestroy() {
    this.stopAnimation();
  }
};
var AnimationMixins_default = animationMixins;

// frontend/views/components/confetti-animation/ConfettiAnimation.vue
var __vue_script__5 = {
  mixins: [AnimationMixins_default],
  name: "ConfettiAnimation"
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.animationActive ? _c(
    "svg",
    {
      ref: "svg",
      staticClass: "c-svg",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }
    },
    _vm._l(_vm.confettis, function(confetti, index) {
      return _c(
        confetti.confettiType,
        _vm._b(
          { key: index, tag: "component" },
          "component",
          confetti.props,
          false
        )
      );
    }),
    1
  ) : _vm._e();
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-95d16c5e_0", { source: ".c-svg[data-v-95d16c5e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -3;\n}\n\n/*# sourceMappingURL=ConfettiAnimation.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/confetti-animation/ConfettiAnimation.vue", "ConfettiAnimation.vue"], "names": [], "mappings": "AAwBA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;ACvBA;;AAEA,gDAAgD", "file": "ConfettiAnimation.vue", "sourcesContent": [`<template lang='pug'>
svg.c-svg(
  v-if='animationActive'
  xmlns='http://www.w3.org/2000/svg'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  ref='svg'
)
  component(
    v-for='(confetti, index) in confettis'
    v-bind='confetti.props'
    :key='index'
    :is='confetti.confettiType'
  )
</template>

<script>
import animationMixins from './AnimationMixins.js'
export default ({
  mixins: [animationMixins],
  name: 'ConfettiAnimation'
}: Object)
<\/script>

<style lang="scss" scoped>
.c-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
</style>
`, ".c-svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -3;\n}\n\n/*# sourceMappingURL=ConfettiAnimation.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-95d16c5e";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
svg.c-svg(
  v-if='animationActive'
  xmlns='http://www.w3.org/2000/svg'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  ref='svg'
)
  component(
    v-for='(confetti, index) in confettis'
    v-bind='confetti.props'
    :key='index'
    :is='confetti.confettiType'
  )
</template>

<script>
import animationMixins from './AnimationMixins.js'
export default ({
  mixins: [animationMixins],
  name: 'ConfettiAnimation'
}: Object)
<\/script>

<style lang="scss" scoped>
.c-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__2,
  void 0,
  void 0
);
var ConfettiAnimation_default = __vue_component__5;

// frontend/views/components/GroupWelcome.vue
var __vue_script__6 = {
  name: "GroupWelcome",
  components: {
    Avatar: Avatar_default,
    ConfettiAnimation: ConfettiAnimation_default
  },
  props: {
    // Passed from CreateGroup.vue. Prevent from attaching it to the DOM.
    $v: { type: Object }
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["groupSettings", "ourIdentityContractId"])
  },
  data() {
    return {
      isButtonClicked: false
    };
  },
  methods: {
    toDashboard() {
      if (this.isButtonClicked) return;
      this.isButtonClicked = true;
      const groupContractID = this.currentGroupId;
      esm_default("gi.actions/identity/setGroupAttributes", {
        contractID: this.ourIdentityContractId,
        data: {
          groupContractID,
          attributes: { seenWelcomeScreen: true }
        }
      }).catch((e) => console.warn("[GroupWelcome.vue] Error setting seenWelcomeScreen attribute", groupContractID, e));
      this.$router.push({ path: "/dashboard" });
    }
  }
};
var __vue_render__6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrapper", attrs: { "data-test": "welcome" } },
    [
      _c("avatar", {
        attrs: {
          src: _vm.groupSettings.groupPicture,
          "aria-label": _vm.L("{groupName}'s avatar", {
            groupName: _vm.groupSettings.groupName
          }),
          size: "xl"
        }
      }),
      _c(
        "i18n",
        {
          staticClass: "is-title-1 c-title",
          attrs: {
            tag: "h1",
            "data-test": "welcomeGroup",
            args: { groupName: _vm.groupSettings.groupName }
          }
        },
        [_vm._v("Welcome to {groupName}!")]
      ),
      _c(
        "i18n",
        { staticClass: "has-text-0 c-description", attrs: { tag: "p" } },
        [
          _vm._v(
            "You are now embarking on a new journey. We hope you have a blast!"
          )
        ]
      ),
      _c(
        "div",
        { staticClass: "buttons is-centered" },
        [
          _c(
            "i18n",
            {
              attrs: {
                tag: "button",
                disabled: _vm.isButtonClicked,
                "data-test": "toDashboardBtn"
              },
              on: { click: _vm.toDashboard }
            },
            [_vm._v("Awesome")]
          )
        ],
        1
      ),
      _c("confetti-animation")
    ],
    1
  );
};
var __vue_staticRenderFns__6 = [];
__vue_render__6._withStripped = true;
var __vue_inject_styles__6 = function(inject) {
  if (!inject) return;
  inject("data-v-3dfad834_0", { source: ".wrapper[data-v-3dfad834] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n@media screen and (max-width: 768px) {\n.wrapper[data-v-3dfad834] {\n    justify-content: left;\n    padding-top: 8rem;\n}\n}\n.wrapper .c-title[data-v-3dfad834],\n.wrapper .c-description[data-v-3dfad834] {\n  text-align: center;\n  padding: 0 1rem;\n}\n.wrapper .c-title[data-v-3dfad834] {\n  margin-top: 1rem;\n}\n.wrapper .c-description[data-v-3dfad834] {\n  margin: 0 0 0.5rem;\n}\n\n/*# sourceMappingURL=GroupWelcome.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/GroupWelcome.vue", "GroupWelcome.vue"], "names": [], "mappings": "AAyEA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;ACxEA;AACA;ADiEA;IASA,qBAAA;IACA,iBAAA;ACvEE;AACF;ADyEA;;EAEA,kBAAA;EACA,eAAA;ACvEA;AD0EA;EACA,gBAAA;ACxEA;AD2EA;EACA,kBAAA;ACzEA;;AAEA,2CAA2C", "file": "GroupWelcome.vue", "sourcesContent": [`<template lang='pug'>
.wrapper(data-test='welcome')
  avatar(
    :src='groupSettings.groupPicture'
    :aria-label='L("{groupName}\\'s avatar", { groupName: groupSettings.groupName })'
    size='xl'
  )

  i18n.is-title-1.c-title(
    tag='h1'
    data-test='welcomeGroup'
    :args='{ groupName: groupSettings.groupName }'
  ) Welcome to {groupName}!

  i18n(tag='p' class='has-text-0 c-description') You are now embarking on a new journey. We hope you have a blast!

  .buttons.is-centered
    i18n(
      tag='button'
      :disabled='isButtonClicked'
      @click='toDashboard'
      data-test='toDashboardBtn'
    ) Awesome

  confetti-animation
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import Avatar from '../../../frontend/views/components/Avatar.vue'
import ConfettiAnimation from '../../../frontend/views/components/confetti-animation/ConfettiAnimation.vue'

export default ({
  name: 'GroupWelcome',
  components: {
    Avatar,
    ConfettiAnimation
  },
  props: {
    // Passed from CreateGroup.vue. Prevent from attaching it to the DOM.
    $v: { type: Object }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['groupSettings', 'ourIdentityContractId'])
  },
  data () {
    return {
      isButtonClicked: false
    }
  },
  methods: {
    toDashboard () {
      if (this.isButtonClicked) return
      this.isButtonClicked = true
      const groupContractID = this.currentGroupId
      sbp('gi.actions/identity/setGroupAttributes', {
        contractID: this.ourIdentityContractId,
        data: {
          groupContractID,
          attributes: { seenWelcomeScreen: true }
        }
      }).catch(e => console.warn('[GroupWelcome.vue] Error setting seenWelcomeScreen attribute', groupContractID, e))
      this.$router.push({ path: '/dashboard' })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  @include phone {
    justify-content: left;
    padding-top: 8rem;
  }

  .c-title,
  .c-description {
    text-align: center;
    padding: 0 1rem;
  }

  .c-title {
    margin-top: 1rem;
  }

  .c-description {
    margin: 0 0 0.5rem;
  }
}
</style>
`, ".wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n@media screen and (max-width: 768px) {\n  .wrapper {\n    justify-content: left;\n    padding-top: 8rem;\n  }\n}\n.wrapper .c-title,\n.wrapper .c-description {\n  text-align: center;\n  padding: 0 1rem;\n}\n.wrapper .c-title {\n  margin-top: 1rem;\n}\n.wrapper .c-description {\n  margin: 0 0 0.5rem;\n}\n\n/*# sourceMappingURL=GroupWelcome.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__6 = "data-v-3dfad834";
var __vue_module_identifier__6 = void 0;
var __vue_is_functional_template__6 = false;
function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.wrapper(data-test='welcome')
  avatar(
    :src='groupSettings.groupPicture'
    :aria-label='L("{groupName}\\'s avatar", { groupName: groupSettings.groupName })'
    size='xl'
  )

  i18n.is-title-1.c-title(
    tag='h1'
    data-test='welcomeGroup'
    :args='{ groupName: groupSettings.groupName }'
  ) Welcome to {groupName}!

  i18n(tag='p' class='has-text-0 c-description') You are now embarking on a new journey. We hope you have a blast!

  .buttons.is-centered
    i18n(
      tag='button'
      :disabled='isButtonClicked'
      @click='toDashboard'
      data-test='toDashboardBtn'
    ) Awesome

  confetti-animation
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import Avatar from '../../../frontend/views/components/Avatar.vue'
import ConfettiAnimation from '../../../frontend/views/components/confetti-animation/ConfettiAnimation.vue'

export default ({
  name: 'GroupWelcome',
  components: {
    Avatar,
    ConfettiAnimation
  },
  props: {
    // Passed from CreateGroup.vue. Prevent from attaching it to the DOM.
    $v: { type: Object }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['groupSettings', 'ourIdentityContractId'])
  },
  data () {
    return {
      isButtonClicked: false
    }
  },
  methods: {
    toDashboard () {
      if (this.isButtonClicked) return
      this.isButtonClicked = true
      const groupContractID = this.currentGroupId
      sbp('gi.actions/identity/setGroupAttributes', {
        contractID: this.ourIdentityContractId,
        data: {
          groupContractID,
          attributes: { seenWelcomeScreen: true }
        }
      }).catch(e => console.warn('[GroupWelcome.vue] Error setting seenWelcomeScreen attribute', groupContractID, e))
      this.$router.push({ path: '/dashboard' })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  @include phone {
    justify-content: left;
    padding-top: 8rem;
  }

  .c-title,
  .c-description {
    text-align: center;
    padding: 0 1rem;
  }

  .c-title {
    margin-top: 1rem;
  }

  .c-description {
    margin: 0 0 0.5rem;
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
var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6(
  { render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 },
  __vue_inject_styles__6,
  __vue_script__6,
  __vue_scope_id__6,
  __vue_is_functional_template__6,
  __vue_module_identifier__6,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var GroupWelcome_default = __vue_component__6;

// frontend/views/pages/PendingApproval.vue
var __vue_script__7 = {
  name: "PendingApproval",
  components: {
    SvgInvitation: invitation_default,
    GroupWelcome: GroupWelcome_default
  },
  data() {
    return {
      ephemeral: {
        contractFinishedSyncing: false,
        groupIdWhenMounted: null,
        groupJoined: false,
        settings: {}
      }
    };
  },
  computed: {
    ...mapGetters(["ourIdentityContractId"]),
    ...mapState(["currentGroupId"]),
    groupState() {
      if (!this.ephemeral.groupIdWhenMounted) return;
      return this.$store.state[this.ephemeral.groupIdWhenMounted];
    },
    haveActiveGroupProfile() {
      const state = this.groupState;
      return (
        // We want the group state to be active
        state?.profiles?.[this.ourIdentityContractId]?.status === PROFILE_STATUS.ACTIVE
      );
    }
  },
  mounted() {
    this.ephemeral.groupIdWhenMounted = this.currentGroupId;
    let reset = false;
    let destroyed = false;
    const syncPromise = esm_default("chelonia/externalStateWait", this.ourIdentityContractId).then(async () => {
      if (destroyed) return;
      reset = false;
      await esm_default("chelonia/contract/retain", this.ephemeral.groupIdWhenMounted, { ephemeral: true });
      this.ephemeral.contractFinishedSyncing = true;
      if (this.haveActiveGroupProfile) {
        this.ephemeral.groupJoined = true;
      } else {
        const [state, innerSigningKeyId, encryptionKeyId] = await Promise.all([
          esm_default("chelonia/contract/state", this.ourIdentityContractId),
          esm_default("chelonia/contract/currentKeyIdByName", this.ourIdentityContractId, "csk"),
          esm_default("chelonia/contract/currentKeyIdByName", this.ourIdentityContractId, "cek")
        ]);
        if (!state.groups[this.ephemeral.groupIdWhenMounted]) return;
        await esm_default("gi.actions/group/join", {
          originatingContractID: this.ourIdentityContractId,
          originatingContractName: "gi.contracts/identity",
          contractID: this.ephemeral.groupIdWhenMounted,
          contractName: "gi.contracts/group",
          reference: state.groups[this.ephemeral.groupIdWhenMounted].hash,
          signingKeyId: state.groups[this.ephemeral.groupIdWhenMounted].inviteSecretId,
          innerSigningKeyId,
          encryptionKeyId
        });
      }
    }).catch((e) => {
      console.error("[PendingApproval.vue]: Error waiting for contract to finish syncing", e);
    });
    const listener = () => {
      reset = true;
    };
    this.ephemeral.ondestroy = () => {
      destroyed = true;
      esm_default("okTurtles.events/off", CHELONIA_RESET, listener);
      syncPromise.finally(() => {
        if (reset) return;
        esm_default("chelonia/contract/release", this.ephemeral.groupIdWhenMounted, { ephemeral: true }).catch((e) => {
          console.error("[PendingApproval.vue]: Error releasing contract", e);
        });
      });
    };
    esm_default("okTurtles.events/on", CHELONIA_RESET, listener);
  },
  beforeDestroy() {
    this.ephemeral.ondestroy?.();
  },
  watch: {
    groupState(to) {
      if (to?.settings && this.ephemeral.settings !== to.settings) {
        this.ephemeral.settings = to.settings;
      }
    },
    haveActiveGroupProfile(to) {
      const newValue = to && this.ephemeral.contractFinishedSyncing;
      if (newValue !== this.ephemeral.groupJoined) {
        this.ephemeral.groupJoined = newValue;
      }
    }
  }
};
var __vue_render__7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _vm.ephemeral.groupJoined ? _c("group-welcome", { staticClass: "c-welcome" }) : _c(
        "div",
        { staticClass: "c-container" },
        [
          _c("svg-invitation", { staticClass: "c-svg" }),
          _c(
            "i18n",
            {
              staticClass: "is-title-1",
              attrs: {
                "data-test": "pendingApprovalTitle",
                "data-groupId": _vm.ephemeral.groupIdWhenMounted,
                tag: "h2",
                args: { groupName: _vm.ephemeral.settings.groupName }
              }
            },
            [_vm._v("Waiting for approval to join {groupName}!")]
          ),
          _c(
            "i18n",
            { staticClass: "has-text-1 c-text", attrs: { tag: "p" } },
            [
              _vm._v(
                "You have used a public link to join a group. Once a member of the group approves your member request you\u2019ll be able to access the group."
              )
            ]
          )
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__7 = [];
__vue_render__7._withStripped = true;
var __vue_inject_styles__7 = function(inject) {
  if (!inject) return;
  inject("data-v-959040f2_0", { source: ".c-container[data-v-959040f2] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 34.5rem;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n.c-container[data-v-959040f2] {\n    padding: 0 1rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-container[data-v-959040f2] {\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n}\n}\n.c-svg[data-v-959040f2] {\n  display: inline-block;\n  margin-top: -3rem;\n}\n@media screen and (min-width: 769px), print {\n.c-svg[data-v-959040f2] {\n    transform: scale(1.25);\n    margin-bottom: 1rem;\n}\n}\n.c-text[data-v-959040f2] {\n  font-size: 0.875rem;\n}\n[data-v-959040f2] .c-welcome.wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  width: 100vw;\n  height: 100%;\n  background-color: var(--background_0);\n  z-index: 41;\n}\n\n/*# sourceMappingURL=PendingApproval.vue.map */", map: { "version": 3, "sources": ["frontend/views/pages/PendingApproval.vue", "PendingApproval.vue"], "names": [], "mappings": "AA+IA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AC9IA;AACA;ADmIA;IAaA,eAAA;AC7IE;AACF;AACA;AD8HA;IAiBA,eAAA;IACA,SAAA;IACA,2BAAA;AC5IE;AACF;AD+IA;EACA,qBAAA;EACA,iBAAA;AC5IA;AACA;ADyIA;IAKA,sBAAA;IACA,mBAAA;AC3IE;AACF;AD8IA;EACA,mBAAA;AC3IA;AD8IA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,qCAAA;EACA,WAAA;AC3IA;;AAEA,8CAA8C", "file": "PendingApproval.vue", "sourcesContent": ["<template lang=\"pug\">\ndiv\n  group-welcome.c-welcome(v-if='ephemeral.groupJoined')\n  .c-container(v-else)\n    svg-invitation.c-svg\n\n    i18n.is-title-1(\n      data-test='pendingApprovalTitle'\n      :data-groupId='ephemeral.groupIdWhenMounted'\n      tag='h2'\n      :args='{ groupName: ephemeral.settings.groupName }'\n    ) Waiting for approval to join {groupName}!\n\n    i18n.has-text-1.c-text(tag='p') You have used a public link to join a group. Once a member of the group approves your member request you\u2019ll be able to access the group.\n</template>\n\n<script>\nimport GroupWelcome from '../../../frontend/views/components/GroupWelcome.vue'\nimport { PROFILE_STATUS } from '../../../frontend/model/contracts/shared/constants'\nimport sbp from '@sbp/sbp'\nimport SvgInvitation from '../../../frontend/assets/svgs/invitation.svg'\nimport { mapGetters, mapState } from 'vuex'\nimport { CHELONIA_RESET } from '@chelonia/lib/events'\n\nexport default ({\n  name: 'PendingApproval',\n  components: {\n    SvgInvitation,\n    GroupWelcome\n  },\n  data () {\n    return {\n      ephemeral: {\n        contractFinishedSyncing: false,\n        groupIdWhenMounted: null,\n        groupJoined: false,\n        settings: {}\n      }\n    }\n  },\n  computed: {\n    ...mapGetters(['ourIdentityContractId']),\n    ...mapState(['currentGroupId']),\n    groupState () {\n      if (!this.ephemeral.groupIdWhenMounted) return\n      return this.$store.state[this.ephemeral.groupIdWhenMounted]\n    },\n    haveActiveGroupProfile () {\n      const state = this.groupState\n      return (\n        // We want the group state to be active\n        state?.profiles?.[this.ourIdentityContractId]?.status === PROFILE_STATUS.ACTIVE\n      )\n    }\n  },\n  mounted () {\n    this.ephemeral.groupIdWhenMounted = this.currentGroupId\n    let reset = false\n    let destroyed = false\n\n    const syncPromise = sbp('chelonia/externalStateWait', this.ourIdentityContractId).then(async () => {\n      if (destroyed) return\n      reset = false\n      // We don't want to accidentally unsubscribe from the group while this\n      // page is rendered, so we increase the ephemeral reference count.\n      // When this page is destroyed, the reference count is decreased as well.\n      // Proper (non-ephemeral) references are handled by the `identity/joinGroup`\n      // side-effects. In general, UI elements should not be changing\n      // non-ephemeral references.\n      await sbp('chelonia/contract/retain', this.ephemeral.groupIdWhenMounted, { ephemeral: true })\n      this.ephemeral.contractFinishedSyncing = true\n      if (this.haveActiveGroupProfile) {\n        this.ephemeral.groupJoined = true\n      } else {\n        // The `join` action could have failed for a variety of reasons, such as\n        // an unreliable network connection. Calling `join` multiple times with\n        // the same parameter should pick up from where we last left off, so it\n        // shouldn't break things.\n        // We call `join` again here for two purposes:\n        //   1. If `join` failed, we'll ensure that it will be retried.\n        //   2. If `join` failed, this will retry when the page is refreshed,\n        //      which align with user expectations.\n        // In addition, there's `gi.actions/group/reattemptFailedJoins`, which\n        // is non-persistent (i.e., restarting the SW will erase it).\n        const [state, innerSigningKeyId, encryptionKeyId] = await Promise.all([\n          sbp('chelonia/contract/state', this.ourIdentityContractId),\n          sbp('chelonia/contract/currentKeyIdByName', this.ourIdentityContractId, 'csk'),\n          sbp('chelonia/contract/currentKeyIdByName', this.ourIdentityContractId, 'cek')\n        ])\n\n        if (!state.groups[this.ephemeral.groupIdWhenMounted]) return\n        await sbp('gi.actions/group/join', {\n          originatingContractID: this.ourIdentityContractId,\n          originatingContractName: 'gi.contracts/identity',\n          contractID: this.ephemeral.groupIdWhenMounted,\n          contractName: 'gi.contracts/group',\n          reference: state.groups[this.ephemeral.groupIdWhenMounted].hash,\n          signingKeyId: state.groups[this.ephemeral.groupIdWhenMounted].inviteSecretId,\n          innerSigningKeyId,\n          encryptionKeyId\n        })\n      }\n    }).catch(e => {\n      console.error('[PendingApproval.vue]: Error waiting for contract to finish syncing', e)\n    })\n    const listener = () => { reset = true }\n    this.ephemeral.ondestroy = () => {\n      destroyed = true\n      sbp('okTurtles.events/off', CHELONIA_RESET, listener)\n      syncPromise.finally(() => {\n        if (reset) return\n        sbp('chelonia/contract/release', this.ephemeral.groupIdWhenMounted, { ephemeral: true }).catch(e => {\n          console.error('[PendingApproval.vue]: Error releasing contract', e)\n        })\n      })\n    }\n    // If Chelonia was reset, it means that ephemeral references have been\n    // lost, and we should not release the contract.\n    sbp('okTurtles.events/on', CHELONIA_RESET, listener)\n  },\n  beforeDestroy () {\n    this.ephemeral.ondestroy?.()\n  },\n  watch: {\n    groupState (to) {\n      if (to?.settings && this.ephemeral.settings !== to.settings) {\n        this.ephemeral.settings = to.settings\n      }\n    },\n    haveActiveGroupProfile (to) {\n      // if our group profile appears in the group state, it means we've joined the group\n      const newValue = to && this.ephemeral.contractFinishedSyncing\n      if (newValue !== this.ephemeral.groupJoined) {\n        this.ephemeral.groupJoined = newValue\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 34.5rem;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n\n  @include phone {\n    padding: 0 1rem;\n  }\n\n  @include desktop {\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.c-svg {\n  display: inline-block;\n  margin-top: -3rem;\n\n  @include tablet {\n    transform: scale(1.25);\n    margin-bottom: 1rem;\n  }\n}\n\n.c-text {\n  font-size: $size_4;\n}\n\n::v-deep .c-welcome.wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  width: 100vw;\n  height: 100%;\n  background-color: $background_0;\n  z-index: $zindex-sidebar + 1;\n}\n</style>\n", ".c-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 34.5rem;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-container {\n    padding: 0 1rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-container {\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.c-svg {\n  display: inline-block;\n  margin-top: -3rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-svg {\n    transform: scale(1.25);\n    margin-bottom: 1rem;\n  }\n}\n\n.c-text {\n  font-size: 0.875rem;\n}\n\n::v-deep .c-welcome.wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  width: 100vw;\n  height: 100%;\n  background-color: var(--background_0);\n  z-index: 41;\n}\n\n/*# sourceMappingURL=PendingApproval.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__7 = "data-v-959040f2";
var __vue_module_identifier__7 = void 0;
var __vue_is_functional_template__7 = false;
function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang=\"pug\">\ndiv\n  group-welcome.c-welcome(v-if='ephemeral.groupJoined')\n  .c-container(v-else)\n    svg-invitation.c-svg\n\n    i18n.is-title-1(\n      data-test='pendingApprovalTitle'\n      :data-groupId='ephemeral.groupIdWhenMounted'\n      tag='h2'\n      :args='{ groupName: ephemeral.settings.groupName }'\n    ) Waiting for approval to join {groupName}!\n\n    i18n.has-text-1.c-text(tag='p') You have used a public link to join a group. Once a member of the group approves your member request you\u2019ll be able to access the group.\n</template>\n\n<script>\nimport GroupWelcome from '../../../frontend/views/components/GroupWelcome.vue'\nimport { PROFILE_STATUS } from '../../../frontend/model/contracts/shared/constants'\nimport sbp from '@sbp/sbp'\nimport SvgInvitation from '../../../frontend/assets/svgs/invitation.svg'\nimport { mapGetters, mapState } from 'vuex'\nimport { CHELONIA_RESET } from '@chelonia/lib/events'\n\nexport default ({\n  name: 'PendingApproval',\n  components: {\n    SvgInvitation,\n    GroupWelcome\n  },\n  data () {\n    return {\n      ephemeral: {\n        contractFinishedSyncing: false,\n        groupIdWhenMounted: null,\n        groupJoined: false,\n        settings: {}\n      }\n    }\n  },\n  computed: {\n    ...mapGetters(['ourIdentityContractId']),\n    ...mapState(['currentGroupId']),\n    groupState () {\n      if (!this.ephemeral.groupIdWhenMounted) return\n      return this.$store.state[this.ephemeral.groupIdWhenMounted]\n    },\n    haveActiveGroupProfile () {\n      const state = this.groupState\n      return (\n        // We want the group state to be active\n        state?.profiles?.[this.ourIdentityContractId]?.status === PROFILE_STATUS.ACTIVE\n      )\n    }\n  },\n  mounted () {\n    this.ephemeral.groupIdWhenMounted = this.currentGroupId\n    let reset = false\n    let destroyed = false\n\n    const syncPromise = sbp('chelonia/externalStateWait', this.ourIdentityContractId).then(async () => {\n      if (destroyed) return\n      reset = false\n      // We don't want to accidentally unsubscribe from the group while this\n      // page is rendered, so we increase the ephemeral reference count.\n      // When this page is destroyed, the reference count is decreased as well.\n      // Proper (non-ephemeral) references are handled by the `identity/joinGroup`\n      // side-effects. In general, UI elements should not be changing\n      // non-ephemeral references.\n      await sbp('chelonia/contract/retain', this.ephemeral.groupIdWhenMounted, { ephemeral: true })\n      this.ephemeral.contractFinishedSyncing = true\n      if (this.haveActiveGroupProfile) {\n        this.ephemeral.groupJoined = true\n      } else {\n        // The `join` action could have failed for a variety of reasons, such as\n        // an unreliable network connection. Calling `join` multiple times with\n        // the same parameter should pick up from where we last left off, so it\n        // shouldn't break things.\n        // We call `join` again here for two purposes:\n        //   1. If `join` failed, we'll ensure that it will be retried.\n        //   2. If `join` failed, this will retry when the page is refreshed,\n        //      which align with user expectations.\n        // In addition, there's `gi.actions/group/reattemptFailedJoins`, which\n        // is non-persistent (i.e., restarting the SW will erase it).\n        const [state, innerSigningKeyId, encryptionKeyId] = await Promise.all([\n          sbp('chelonia/contract/state', this.ourIdentityContractId),\n          sbp('chelonia/contract/currentKeyIdByName', this.ourIdentityContractId, 'csk'),\n          sbp('chelonia/contract/currentKeyIdByName', this.ourIdentityContractId, 'cek')\n        ])\n\n        if (!state.groups[this.ephemeral.groupIdWhenMounted]) return\n        await sbp('gi.actions/group/join', {\n          originatingContractID: this.ourIdentityContractId,\n          originatingContractName: 'gi.contracts/identity',\n          contractID: this.ephemeral.groupIdWhenMounted,\n          contractName: 'gi.contracts/group',\n          reference: state.groups[this.ephemeral.groupIdWhenMounted].hash,\n          signingKeyId: state.groups[this.ephemeral.groupIdWhenMounted].inviteSecretId,\n          innerSigningKeyId,\n          encryptionKeyId\n        })\n      }\n    }).catch(e => {\n      console.error('[PendingApproval.vue]: Error waiting for contract to finish syncing', e)\n    })\n    const listener = () => { reset = true }\n    this.ephemeral.ondestroy = () => {\n      destroyed = true\n      sbp('okTurtles.events/off', CHELONIA_RESET, listener)\n      syncPromise.finally(() => {\n        if (reset) return\n        sbp('chelonia/contract/release', this.ephemeral.groupIdWhenMounted, { ephemeral: true }).catch(e => {\n          console.error('[PendingApproval.vue]: Error releasing contract', e)\n        })\n      })\n    }\n    // If Chelonia was reset, it means that ephemeral references have been\n    // lost, and we should not release the contract.\n    sbp('okTurtles.events/on', CHELONIA_RESET, listener)\n  },\n  beforeDestroy () {\n    this.ephemeral.ondestroy?.()\n  },\n  watch: {\n    groupState (to) {\n      if (to?.settings && this.ephemeral.settings !== to.settings) {\n        this.ephemeral.settings = to.settings\n      }\n    },\n    haveActiveGroupProfile (to) {\n      // if our group profile appears in the group state, it means we've joined the group\n      const newValue = to && this.ephemeral.contractFinishedSyncing\n      if (newValue !== this.ephemeral.groupJoined) {\n        this.ephemeral.groupJoined = newValue\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 34.5rem;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n\n  @include phone {\n    padding: 0 1rem;\n  }\n\n  @include desktop {\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.c-svg {\n  display: inline-block;\n  margin-top: -3rem;\n\n  @include tablet {\n    transform: scale(1.25);\n    margin-bottom: 1rem;\n  }\n}\n\n.c-text {\n  font-size: $size_4;\n}\n\n::v-deep .c-welcome.wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  width: 100vw;\n  height: 100%;\n  background-color: $background_0;\n  z-index: $zindex-sidebar + 1;\n}\n</style>\n";
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
function __vue_create_injector__4() {
  const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
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
var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7(
  { render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7 },
  __vue_inject_styles__7,
  __vue_script__7,
  __vue_scope_id__7,
  __vue_is_functional_template__7,
  __vue_module_identifier__7,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var PendingApproval_default = __vue_component__7;
export {
  PendingApproval_default as default
};
//# sourceMappingURL=PendingApproval-OW6HQKDJ-cached.js.map
