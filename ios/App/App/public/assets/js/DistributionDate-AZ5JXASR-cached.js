import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  DAYS_MILLIS,
  addTimeToDate,
  dateToPeriodStamp,
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
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

// frontend/views/containers/proposals/DistributionDate.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "DistributionDateProposal",
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
        distributionDate: null
      },
      ephemeral: {
        distributionDayRange: [],
        errorMsg: null,
        currentStep: 0
      },
      config: {
        steps: [
          "GroupDistributionDate"
        ]
      }
    };
  },
  watch: {
    "ephemeral.currentStep": function(step) {
      if (step === 1 && !this.skipToProposeDistributionDate) {
        this.validateDistributionDate();
      }
    }
  },
  validations: {
    form: {
      distributionDate: {
        required: import_validators.required
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupDistributionDate: [
        "form.distributionDate"
      ]
    }
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupDistributionStarted",
      "ourIdentityContractId",
      "groupShouldPropose",
      "groupSettings",
      "currentGroupOwnerID",
      "groupMembersCount"
    ]),
    currentDistributionDate() {
      return humanDate(this.groupSettings.distributionDate, { month: "long", day: "numeric" });
    },
    distributionStarted() {
      return this.groupDistributionStarted((/* @__PURE__ */ new Date()).toISOString());
    },
    shouldImmediateChangeDistributionDate() {
      return !this.distributionStarted && this.ourIdentityContractId === this.currentGroupOwnerID;
    }
  },
  beforeMount() {
    for (let index = 1; index <= 30; index++) {
      this.ephemeral.distributionDayRange.push(dateToPeriodStamp(addTimeToDate((/* @__PURE__ */ new Date()).setUTCHours(0, 0, 0, 0), index * DAYS_MILLIS)));
    }
  },
  mounted() {
    this.$refs.distributionDate.focus();
  },
  methods: {
    humanDate,
    validateDistributionDate() {
      if (this.form.distributionDate === this.groupSettings.distributionDate) {
        this.$refs.formMsg.danger(L("The new distribution date should be different from the current one."));
        this.ephemeral.currentStep = 0;
        return false;
      }
      this.$refs.formMsg.clean();
      return true;
    },
    async submit(form) {
      if (!this.validateDistributionDate()) {
        return;
      }
      const { distributionDate } = this.form;
      if (this.shouldImmediateChangeDistributionDate) {
        try {
          await esm_default("gi.actions/group/updateSettings", {
            contractID: this.currentGroupId,
            data: { distributionDate }
          });
          this.$refs.proposal.close();
        } catch (e) {
          console.error("DistributionDate.vue submit() error:", e);
          this.$refs.formMsg.danger(e.message);
        }
        return;
      }
      try {
        await esm_default("gi.actions/group/proposal", {
          contractID: this.currentGroupId,
          data: {
            proposalType: PROPOSAL_GROUP_SETTING_CHANGE,
            proposalData: {
              setting: "distributionDate",
              proposedValue: distributionDate,
              currentValue: this.groupSettings.distributionDate,
              reason: form.reason
            },
            votingRule: this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].rule,
            expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].expires_ms
          }
        });
        this.ephemeral.currentStep += 1;
      } catch (e) {
        console.error("DistributionDate.vue submit() error:", e);
        this.$refs.formMsg.danger(e.message);
        this.ephemeral.currentStep = 0;
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
        title: _vm.L("Change distribution date"),
        disabled: _vm.$v.form.$invalid || _vm.distributionStarted,
        maxSteps: _vm.config.steps.length,
        currentStep: _vm.ephemeral.currentStep,
        shouldImmediateChange: _vm.shouldImmediateChangeDistributionDate
      },
      on: {
        "update:currentStep": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        "update:current-step": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        submit: _vm.submit
      },
      scopedSlots: _vm._u(
        [
          _vm.shouldImmediateChangeDistributionDate ? {
            key: "shouldImmediateChangeFooter",
            fn: function() {
              return [
                _c("i18n", { attrs: { args: _vm.LTags("strong") } }, [
                  _vm._v(
                    "The first distribution period is not started yet, so {strong_}this change will be immediate{_strong} (no voting required)."
                  )
                ])
              ];
            },
            proxy: true
          } : null
        ],
        null,
        true
      )
    },
    [
      _vm.ephemeral.currentStep === 0 ? _c(
        "label",
        { key: "0", staticClass: "field" },
        [
          _c("i18n", { staticClass: "label" }, [
            _vm._v("New distribution date")
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "error",
                  rawName: "v-error:distributionDate",
                  arg: "distributionDate"
                }
              ],
              staticClass: "inputgroup selectbox",
              class: { error: _vm.$v.form.distributionDate.$error }
            },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.distributionDate.$model,
                      expression: "$v.form.distributionDate.$model"
                    }
                  ],
                  ref: "distributionDate",
                  staticClass: "select",
                  attrs: {
                    "aria-label": _vm.L(
                      "Choose your group's distribution date"
                    ),
                    name: "distributionDate",
                    required: "required"
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                        return o.selected;
                      }).map(function(o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(
                        _vm.$v.form.distributionDate,
                        "$model",
                        $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                      );
                    }
                  }
                },
                [
                  _c(
                    "i18n",
                    {
                      attrs: {
                        tag: "option",
                        disabled: "disabled",
                        value: ""
                      }
                    },
                    [_vm._v("Choose your group's distribution date")]
                  ),
                  _vm._l(
                    _vm.ephemeral.distributionDayRange,
                    function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.humanDate(item, {
                                month: "long",
                                year: "numeric",
                                day: "numeric"
                              })
                            )
                          )
                        ]
                      );
                    }
                  )
                ],
                2
              )
            ]
          ),
          _c(
            "i18n",
            {
              staticClass: "helper",
              attrs: {
                args: {
                  currentDistributionDate: _vm.currentDistributionDate
                }
              }
            },
            [
              _vm._v(
                "Current distribution date is on {currentDistributionDate}."
              )
            ]
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
  inject("data-v-7a51bcab_0", { source: "\n\n/*# sourceMappingURL=DistributionDate.vue.map */", map: { "version": 3, "sources": ["DistributionDate.vue"], "names": [], "mappings": ";;AAEA,+CAA+C", "file": "DistributionDate.vue", "sourcesContent": ["\n\n/*# sourceMappingURL=DistributionDate.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-7a51bcab";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  proposal-template(
    ref='proposal'
    :title='L("Change distribution date")'
    :disabled='$v.form.$invalid || distributionStarted'
    :maxSteps='config.steps.length'
    :currentStep.sync='ephemeral.currentStep'
    :shouldImmediateChange='shouldImmediateChangeDistributionDate'
    @submit='submit'
  )

    label.field(v-if='ephemeral.currentStep === 0' key='0')
      i18n.label New distribution date
      .inputgroup.selectbox(
        :class='{ error: $v.form.distributionDate.$error }'
        v-error:distributionDate=''
      )
        select.select(
          ref='distributionDate'
          :aria-label='L("Choose your group\\'s distribution date")'
          name='distributionDate'
          required
          v-model='$v.form.distributionDate.$model'
        )
          i18n(tag='option' disabled value='') Choose your group's distribution date
          option(
            v-for='(item, index) in ephemeral.distributionDayRange'
            :key='index'
            :value='item'
          ) {{ humanDate(item, { month: 'long', year: 'numeric', day: 'numeric' }) }}
      i18n.helper(:args='{currentDistributionDate}') Current distribution date is on {currentDistributionDate}.

    template(#shouldImmediateChangeFooter='' v-if='shouldImmediateChangeDistributionDate')
      i18n(
        :args='LTags("strong")'
      ) The first distribution period is not started yet, so {strong_}this change will be immediate{_strong} (no voting required).

    banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import ProposalTemplate from './ProposalTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import { PROPOSAL_GROUP_SETTING_CHANGE } from '../../../../frontend/model/contracts/shared/constants.js'
import { dateToPeriodStamp, addTimeToDate, DAYS_MILLIS, humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'DistributionDateProposal',
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
        distributionDate: null
      },
      ephemeral: {
        distributionDayRange: [],
        errorMsg: null,
        currentStep: 0
      },
      config: {
        steps: [
          'GroupDistributionDate'
        ]
      }
    }
  },
  watch: {
    'ephemeral.currentStep': function (step) {
      if (step === 1 && !this.skipToProposeDistributionDate) {
        this.validateDistributionDate()
      }
    }
  },
  validations: {
    form: {
      distributionDate: {
        required
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupDistributionDate: [
        'form.distributionDate'
      ]
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupDistributionStarted',
      'ourIdentityContractId',
      'groupShouldPropose',
      'groupSettings',
      'currentGroupOwnerID',
      'groupMembersCount'
    ]),
    currentDistributionDate () {
      return humanDate(this.groupSettings.distributionDate, { month: 'long', day: 'numeric' })
    },
    distributionStarted () {
      return this.groupDistributionStarted(new Date().toISOString())
    },
    shouldImmediateChangeDistributionDate () {
      return !this.distributionStarted && this.ourIdentityContractId === this.currentGroupOwnerID
    }
  },
  beforeMount () {
    for (let index = 1; index <= 30; index++) {
      this.ephemeral.distributionDayRange.push(dateToPeriodStamp(addTimeToDate(new Date().setUTCHours(0, 0, 0, 0), index * DAYS_MILLIS)))
    }
  },
  mounted () {
    this.$refs.distributionDate.focus()
  },
  methods: {
    humanDate,
    validateDistributionDate () {
      if (this.form.distributionDate === this.groupSettings.distributionDate) {
        this.$refs.formMsg.danger(L('The new distribution date should be different from the current one.'))
        this.ephemeral.currentStep = 0
        return false
      }
      this.$refs.formMsg.clean()
      return true
    },
    async submit (form) {
      if (!this.validateDistributionDate()) {
        return
      }

      const { distributionDate } = this.form
      if (this.shouldImmediateChangeDistributionDate) {
        try {
          await sbp('gi.actions/group/updateSettings', {
            contractID: this.currentGroupId, data: { distributionDate }
          })
          this.$refs.proposal.close()
        } catch (e) {
          console.error('DistributionDate.vue submit() error:', e)
          this.$refs.formMsg.danger(e.message)
        }
        return
      }

      try {
        await sbp('gi.actions/group/proposal', {
          contractID: this.currentGroupId,
          data: {
            proposalType: PROPOSAL_GROUP_SETTING_CHANGE,
            proposalData: {
              setting: 'distributionDate',
              proposedValue: distributionDate,
              currentValue: this.groupSettings.distributionDate,
              reason: form.reason
            },
            votingRule: this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].rule,
            expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_GROUP_SETTING_CHANGE].expires_ms
          }
        })
        this.ephemeral.currentStep += 1 // Show Success step
      } catch (e) {
        console.error('DistributionDate.vue submit() error:', e)
        this.$refs.formMsg.danger(e.message)
        this.ephemeral.currentStep = 0
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
var DistributionDate_default = __vue_component__;
export {
  DistributionDate_default as default
};
//# sourceMappingURL=DistributionDate-AZ5JXASR-cached.js.map
