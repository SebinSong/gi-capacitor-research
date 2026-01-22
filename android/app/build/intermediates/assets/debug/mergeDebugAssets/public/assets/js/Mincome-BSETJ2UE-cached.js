import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import {
  currencies_default,
  mincomePositive,
  normalizeCurrency
} from "./chunk-AS6YVRB6-cached.js";
import "./chunk-PDM5OGIJ-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  PROPOSAL_GROUP_SETTING_CHANGE
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/proposals/Mincome.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "MincomeProposal",
  components: {
    ProposalTemplate: ProposalTemplate_default,
    BannerScoped: BannerScoped_default
  },
  mixins: [
    import_vuelidate.validationMixin
  ],
  data() {
    return {
      form: {
        mincomeAmount: null
      },
      ephemeral: {
        errorMsg: null,
        currentStep: 0
      },
      config: {
        steps: [
          "GroupMincome"
        ]
      }
    };
  },
  watch: {
    "ephemeral.currentStep": function(step) {
      if (step === 1 && this.groupShouldPropose) {
        this.validateMincome();
      }
    }
  },
  validations: {
    form: {
      mincomeAmount: {
        [L("This field is required")]: import_validators.required,
        [L("The amount must be a number. (E.g. 100.75)")]: function(value) {
          return currencies_default[this.groupSettings.mincomeCurrency].validate(value);
        },
        [L("Mincome must be greater than 0")]: mincomePositive
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupMincome: [
        "form.mincomeAmount"
      ]
    }
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupShouldPropose",
      "groupSettings",
      "groupMembersCount",
      "groupMincomeAmount",
      "groupMincomeSymbolWithCode"
    ]),
    groupMincomeFormatted() {
      return withGroupCurrency(this.groupMincomeAmount);
    }
  },
  mounted() {
    this.$refs.mincomeAmount.focus();
  },
  methods: {
    validateMincome() {
      const mincomeAmount = normalizeCurrency(this.form.mincomeAmount);
      if (mincomeAmount === this.groupSettings.mincomeAmount) {
        this.$refs.formMsg.danger(L("The new mincome should be different than the current one."));
        this.ephemeral.currentStep = 0;
        return false;
      }
      this.$refs.formMsg.clean();
      return true;
    },
    async submit(form) {
      if (!this.validateMincome()) {
        return;
      }
      const mincomeAmount = normalizeCurrency(this.form.mincomeAmount);
      if (this.groupShouldPropose) {
        try {
          await esm_default("gi.actions/group/proposal", {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_GROUP_SETTING_CHANGE,
              proposalData: {
                setting: "mincomeAmount",
                proposedValue: mincomeAmount,
                currentValue: this.groupSettings.mincomeAmount,
                mincomeCurrency: this.groupSettings.mincomeCurrency,
                reason: form.reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].expires_ms
            }
          });
          this.ephemeral.currentStep += 1;
        } catch (e) {
          this.$refs.formMsg.danger(e.message);
          this.ephemeral.currentStep = 0;
        }
        return;
      }
      try {
        await esm_default("gi.actions/group/updateSettings", {
          contractID: this.currentGroupId,
          data: { mincomeAmount }
        });
        this.$refs.proposal.close();
      } catch (e) {
        console.error("Mincome.vue submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "proposal-template",
    {
      ref: "proposal",
      attrs: {
        title: _vm.L("Change minimum income"),
        disabled: _vm.$v.form.$invalid,
        maxSteps: _vm.config.steps.length,
        currentStep: _vm.ephemeral.currentStep
      },
      on: {
        "update:currentStep": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        "update:current-step": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        submit: _vm.submit
      }
    },
    [
      _vm.ephemeral.currentStep === 0 ? _c(
        "label",
        { key: "0", staticClass: "field" },
        [
          _c("i18n", { staticClass: "label" }, [
            _vm._v("New minimum income")
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "error",
                  rawName: "v-error:mincomeAmount",
                  arg: "mincomeAmount"
                }
              ],
              staticClass: "inputgroup",
              class: { error: _vm.$v.form.mincomeAmount.$error }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.form.mincomeAmount.$model,
                    expression: "$v.form.mincomeAmount.$model"
                  }
                ],
                ref: "mincomeAmount",
                staticClass: "input",
                attrs: {
                  name: "mincomeAmount",
                  inputmode: "decimal",
                  pattern: "[0-9]*"
                },
                domProps: { value: _vm.$v.form.mincomeAmount.$model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(
                      _vm.$v.form.mincomeAmount,
                      "$model",
                      $event.target.value
                    );
                  }
                }
              }),
              _c("div", { staticClass: "suffix" }, [
                _vm._v(_vm._s(_vm.groupMincomeSymbolWithCode))
              ])
            ]
          ),
          _c(
            "i18n",
            {
              staticClass: "helper",
              attrs: {
                args: { groupMincomeFormatted: _vm.groupMincomeFormatted }
              }
            },
            [_vm._v("Currently {groupMincomeFormatted} monthly.")]
          )
        ],
        1
      ) : _vm._e(),
      _c("banner-scoped", {
        ref: "formMsg",
        attrs: { "data-test": "proposalError" }
      })
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-2cf31c10_0", { source: "\n\n/*# sourceMappingURL=Mincome.vue.map */", map: { "version": 3, "sources": ["Mincome.vue"], "names": [], "mappings": ";;AAEA,sCAAsC", "file": "Mincome.vue", "sourcesContent": ["\n\n/*# sourceMappingURL=Mincome.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-2cf31c10";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  proposal-template(
    ref='proposal'
    :title='L("Change minimum income")'
    :disabled='$v.form.$invalid'
    :maxSteps='config.steps.length'
    :currentStep.sync='ephemeral.currentStep'
    @submit='submit'
  )

    label.field(v-if='ephemeral.currentStep === 0' key='0')
      i18n.label New minimum income
      .inputgroup(
        :class='{ error: $v.form.mincomeAmount.$error }'
        v-error:mincomeAmount=''
      )
        input.input(
          v-model='$v.form.mincomeAmount.$model'
          name='mincomeAmount'
          ref='mincomeAmount'
          inputmode='decimal'
          pattern='[0-9]*'
        )
        .suffix {{ groupMincomeSymbolWithCode }}
      i18n.helper(:args='{groupMincomeFormatted}') Currently {groupMincomeFormatted} monthly.

    banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import currencies, { mincomePositive, normalizeCurrency } from '../../../../frontend/model/contracts/shared/currencies.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { L } from '../../../../frontend/common/common.js'
import ProposalTemplate from './ProposalTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import { PROPOSAL_GROUP_SETTING_CHANGE } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'MincomeProposal',
  components: {
    ProposalTemplate,
    BannerScoped
  },
  mixins: [
    validationMixin
  ],
  data () {
    return {
      form: {
        mincomeAmount: null
      },
      ephemeral: {
        errorMsg: null,
        currentStep: 0
      },
      config: {
        steps: [
          'GroupMincome'
        ]
      }
    }
  },
  watch: {
    'ephemeral.currentStep': function (step) {
      if (step === 1 && this.groupShouldPropose) {
        this.validateMincome()
      }
    }
  },
  validations: {
    form: {
      mincomeAmount: {
        [L('This field is required')]: required,
        [L('The amount must be a number. (E.g. 100.75)')]: function (value) {
          return currencies[this.groupSettings.mincomeCurrency].validate(value)
        },
        [L('Mincome must be greater than 0')]: mincomePositive
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupMincome: [
        'form.mincomeAmount'
      ]
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupShouldPropose',
      'groupSettings',
      'groupMembersCount',
      'groupMincomeAmount',
      'groupMincomeSymbolWithCode'
    ]),
    groupMincomeFormatted () {
      return withGroupCurrency(this.groupMincomeAmount)
    }
  },
  mounted () {
    this.$refs.mincomeAmount.focus()
  },
  methods: {
    validateMincome () {
      const mincomeAmount = normalizeCurrency(this.form.mincomeAmount)
      if (mincomeAmount === this.groupSettings.mincomeAmount) {
        this.$refs.formMsg.danger(L('The new mincome should be different than the current one.'))
        this.ephemeral.currentStep = 0
        return false
      }
      this.$refs.formMsg.clean()
      return true
    },
    async submit (form) {
      if (!this.validateMincome()) {
        return
      }

      const mincomeAmount = normalizeCurrency(this.form.mincomeAmount)

      if (this.groupShouldPropose) {
        try {
          await sbp('gi.actions/group/proposal', {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_GROUP_SETTING_CHANGE,
              proposalData: {
                setting: 'mincomeAmount',
                proposedValue: mincomeAmount,
                currentValue: this.groupSettings.mincomeAmount,
                mincomeCurrency: this.groupSettings.mincomeCurrency,
                reason: form.reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].expires_ms
            }
          })
          this.ephemeral.currentStep += 1 // Show Success step
        } catch (e) {
          this.$refs.formMsg.danger(e.message)
          this.ephemeral.currentStep = 0
        }
        return
      }

      try {
        await sbp('gi.actions/group/updateSettings', {
          contractID: this.currentGroupId, data: { mincomeAmount }
        })
        this.$refs.proposal.close()
      } catch (e) {
        console.error('Mincome.vue submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";
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
var Mincome_default = __vue_component__;
export {
  Mincome_default as default
};
//# sourceMappingURL=Mincome-BSETJ2UE-cached.js.map
