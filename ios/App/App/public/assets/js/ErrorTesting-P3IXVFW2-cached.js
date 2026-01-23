import {
  PageSection_default
} from "./chunk-36LKA4A3-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import "./chunk-532VGDFI-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import "./chunk-J6S33KSG-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/pages/ErrorTesting.vue
var __vue_script__ = {
  name: "ErrorTesting",
  components: {
    Page: Page_default,
    PageSection: PageSection_default
  },
  data() {
    return {
      form: {
        mutationErrorType: "GIErrorIgnoreAndBan",
        sideEffectErrorType: "GIErrorUIRuntimeError"
      }
    };
  },
  methods: {
    async sendMalformedSideEffect() {
      await esm_default("chelonia/out/actionEncrypted", {
        action: "gi.contracts/group/malformedMutation",
        data: { errorType: this.form.mutationErrorType, sideEffect: true },
        contractID: this.$store.state.currentGroupId
      });
    },
    async sendMalformedMutationOfType() {
      await esm_default("chelonia/out/actionEncrypted", {
        action: "gi.contracts/group/malformedMutation",
        data: { errorType: this.form.mutationErrorType },
        contractID: this.$store.state.currentGroupId
      });
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "page",
    {
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function() {
            return [_vm._v("Error Testing")];
          },
          proxy: true
        }
      ])
    },
    [
      _c("page-section", [
        _c("p", [
          _vm._v("Send malformed mutation of type:\xA0"),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.mutationErrorType,
                  expression: "form.mutationErrorType"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                    return o.selected;
                  }).map(function(o) {
                    var val = "_value" in o ? o._value : o.value;
                    return val;
                  });
                  _vm.$set(
                    _vm.form,
                    "mutationErrorType",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  );
                }
              }
            },
            [
              _c("option", { attrs: { value: "GIErrorIgnoreAndBan" } }, [
                _vm._v("GIErrorIgnoreAndBan")
              ]),
              _c("option", { attrs: { value: "GIErrorUIRuntimeError" } }, [
                _vm._v("GIErrorUIRuntimeError")
              ]),
              _c("option", { attrs: { value: "unknownType" } }, [
                _vm._v("unknownType")
              ])
            ]
          ),
          _c(
            "a",
            {
              staticClass: "button",
              on: { click: _vm.sendMalformedMutationOfType }
            },
            [_vm._v("Send malformed mutation")]
          )
        ])
      ]),
      _c("page-section", [
        _c("p", [
          _vm._v("Enable side effect error type on handleEvent:\xA0"),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.sideEffectErrorType,
                  expression: "form.sideEffectErrorType"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                    return o.selected;
                  }).map(function(o) {
                    var val = "_value" in o ? o._value : o.value;
                    return val;
                  });
                  _vm.$set(
                    _vm.form,
                    "sideEffectErrorType",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  );
                }
              }
            },
            [
              _c("option", { attrs: { value: "GIErrorIgnoreAndBan" } }, [
                _vm._v("GIErrorIgnoreAndBan")
              ]),
              _c("option", { attrs: { value: "GIErrorUIRuntimeError" } }, [
                _vm._v("GIErrorUIRuntimeError")
              ]),
              _c("option", { attrs: { value: "unknown" } }, [
                _vm._v("Unknown")
              ])
            ]
          ),
          _c(
            "a",
            {
              staticClass: "button",
              on: { click: _vm.sendMalformedSideEffect }
            },
            [_vm._v("Send malformed sideEffect")]
          )
        ])
      ])
    ],
    1
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
  component.__file = "<template lang='pug'>\n//- This is a debug/testing page that shouldn't use i18n tag or L function\npage\n  template(#title='') Error Testing\n  page-section\n    p Send malformed mutation of type:&nbsp;\n      select(v-model='form.mutationErrorType')\n        option(value='GIErrorIgnoreAndBan') GIErrorIgnoreAndBan\n        option(value='GIErrorUIRuntimeError') GIErrorUIRuntimeError\n        option(value='unknownType') unknownType\n      a.button(@click='sendMalformedMutationOfType') Send malformed mutation\n  page-section\n    p Enable side effect error type on handleEvent:&nbsp;\n      select(v-model='form.sideEffectErrorType')\n        option(value='GIErrorIgnoreAndBan') GIErrorIgnoreAndBan\n        option(value='GIErrorUIRuntimeError') GIErrorUIRuntimeError\n        option(value='unknown') Unknown\n      a.button(@click='sendMalformedSideEffect') Send malformed sideEffect\n</template>\n<script>\nimport sbp from '@sbp/sbp'\nimport Page from '../../../frontend/views/components/Page.vue'\nimport PageSection from '../../../frontend/views/components/PageSection.vue'\n\nexport default ({\n  name: 'ErrorTesting',\n  components: {\n    Page,\n    PageSection\n  },\n  data () {\n    return {\n      form: {\n        mutationErrorType: 'GIErrorIgnoreAndBan',\n        sideEffectErrorType: 'GIErrorUIRuntimeError'\n      }\n    }\n  },\n  methods: {\n    async sendMalformedSideEffect () {\n      await sbp('chelonia/out/actionEncrypted', {\n        action: 'gi.contracts/group/malformedMutation',\n        data: { errorType: this.form.mutationErrorType, sideEffect: true },\n        contractID: this.$store.state.currentGroupId\n      })\n    },\n    async sendMalformedMutationOfType () {\n      await sbp('chelonia/out/actionEncrypted', {\n        action: 'gi.contracts/group/malformedMutation',\n        data: { errorType: this.form.mutationErrorType },\n        contractID: this.$store.state.currentGroupId\n      })\n    }\n  }\n}: Object)\n<\/script>\n";
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
var ErrorTesting_default = __vue_component__;
export {
  ErrorTesting_default as default
};
//# sourceMappingURL=ErrorTesting-P3IXVFW2-cached.js.map
