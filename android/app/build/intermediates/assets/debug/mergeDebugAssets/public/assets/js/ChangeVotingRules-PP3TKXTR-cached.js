import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import {
  VotingRulesInput_default,
  proposalDefaults
} from "./chunk-YAAJQAKL-cached.js";
import {
  RULE_DISAGREEMENT,
  RULE_PERCENTAGE
} from "./chunk-XIIXXSLC-cached.js";
import "./chunk-WUIM2XSU-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-V3SQGGAF-cached.js";
import "./chunk-PDM5OGIJ-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  PROPOSAL_PROPOSAL_SETTING_CHANGE
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL,
  SET_MODAL_QUERIES
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/proposals/ChangeVotingRules.vue
var __vue_script__ = {
  name: "ChangeVotingRules",
  components: {
    BannerScoped: BannerScoped_default,
    ProposalTemplate: ProposalTemplate_default,
    VotingRulesInput: VotingRulesInput_default
  },
  data() {
    return {
      RULE_DISAGREEMENT,
      config: {
        steps: ["VotingSystem"],
        rule: null
      },
      form: {
        threshold: null
      },
      ephemeral: {
        errorMsg: null,
        currentStep: 0
      }
    };
  },
  created() {
    const rule = this.$route.query.rule;
    if (rule) {
      esm_default("okTurtles.events/emit", SET_MODAL_QUERIES, "ChangeVotingRules", { rule });
      this.config.rule = rule;
      this.form.threshold = rule === this.proposalSettings.rule ? this.currentThreshold : proposalDefaults.ruleSettings[rule].threshold;
    } else {
      console.warn('RemoveMember: Missing valid query "rule".');
      esm_default("okTurtles.events/emit", CLOSE_MODAL);
    }
  },
  watch: {
    "ephemeral.currentStep": function(step) {
      if (this.groupShouldPropose && step === 1) {
        this.validateThreshold();
      }
    }
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupShouldPropose",
      "groupProposalSettings",
      "groupSettings"
    ]),
    proposalSettings() {
      return this.groupProposalSettings();
    },
    currentThreshold() {
      return this.changeSystem ? null : this.proposalSettings.ruleSettings[this.config.rule].threshold;
    },
    title() {
      if (this.proposalSettings.rule === this.config.rule) {
        return L("Change voting rules");
      }
      return L("Change voting system");
    },
    changeSystem() {
      if (this.proposalSettings.rule === this.config.rule) {
        return "";
      }
      const nameMap = {
        [RULE_DISAGREEMENT]: L("disagreement number"),
        [RULE_PERCENTAGE]: L("percentage based")
      };
      return L("Change from a {b_}{oldSystem}{_b} voting system to a {b_}{newSystem}{_b} voting system.", {
        ...LTags("b"),
        oldSystem: nameMap[this.proposalSettings.rule],
        newSystem: nameMap[this.config.rule]
      });
    }
  },
  methods: {
    setThreshold(value) {
      this.form.threshold = value;
    },
    validateThreshold() {
      if (+this.form.threshold === this.currentThreshold) {
        this.ephemeral.currentStep = 0;
        this.$refs.formMsg.danger(L("You are proposing to keep the same value as the actual."));
        return false;
      }
      this.$refs.formMsg.clean();
      return true;
    },
    async submit(arg) {
      if (!this.validateThreshold()) {
        return;
      }
      if (this.groupShouldPropose) {
        const { reason } = arg;
        try {
          await esm_default("gi.actions/group/proposal", {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_PROPOSAL_SETTING_CHANGE,
              proposalData: {
                current: {
                  ruleName: this.proposalSettings.rule,
                  ruleThreshold: this.currentThreshold
                },
                ruleName: this.config.rule,
                ruleThreshold: +this.form.threshold,
                reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].expires_ms
            }
          });
          this.ephemeral.currentStep += 1;
        } catch (e) {
          console.error("ChangeVotingRules.vue failed:", e);
          this.$refs.formMsg.danger(e.message);
          this.ephemeral.currentStep = 0;
        }
      } else {
        try {
          await esm_default("gi.actions/group/updateAllVotingRules", {
            contractID: this.currentGroupId,
            data: {
              ruleName: this.config.rule,
              ruleThreshold: +this.form.threshold
            }
          });
          this.$refs.proposal.close();
        } catch (e) {
          console.error("ChangeVotingRules.vue failed:", e);
          this.$refs.formMsg.danger(e.message);
        }
      }
    }
  },
  validations: {
    form: {},
    steps: {
      VotingSystem: [
        "form.threshold"
      ]
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
        title: _vm.title,
        disabled: false,
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
        "div",
        { key: "0", staticClass: "c-step" },
        [
          _vm.changeSystem ? _c("p", {
            directives: [
              {
                name: "safe-html",
                rawName: "v-safe-html",
                value: _vm.changeSystem,
                expression: "changeSystem"
              }
            ],
            staticClass: "has-text-1 c-desc",
            attrs: { "data-test": "changeSystem" }
          }) : _vm._e(),
          _vm.config.rule ? _c("voting-rules-input", {
            staticClass: "c-input",
            attrs: { rule: _vm.config.rule, value: _vm.form.threshold },
            on: { update: _vm.setThreshold }
          }) : _vm._e(),
          _vm.config.rule === _vm.RULE_DISAGREEMENT ? [
            _vm.form.threshold > 1 ? _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: { args: { nr: _vm.form.threshold } }
              },
              [
                _vm._v(
                  "Future proposals would be accepted if {nr} or fewer members disagree."
                )
              ]
            ) : _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: { args: _vm.LTags("b") }
              },
              [
                _vm._v(
                  "Future proposals would be accepted if {b_}no one{_b} disagrees."
                )
              ]
            )
          ] : _vm._e()
        ],
        2
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
  inject("data-v-395e572e_0", { source: ".c-step[data-v-395e572e],\n.c-desc[data-v-395e572e] {\n  margin-bottom: 2rem;\n}\n.c-input[data-v-395e572e] {\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=ChangeVotingRules.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/ChangeVotingRules.vue", "ChangeVotingRules.vue"], "names": [], "mappings": "AAuMA;;EAEA,mBAAA;ACtMA;ADyMA;EACA,mBAAA;ACtMA;;AAEA,gDAAgD", "file": "ChangeVotingRules.vue", "sourcesContent": [`<template lang='pug'>
proposal-template(
  ref='proposal'
  :title='title'
  :disabled='false'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  @submit='submit'
)
  .c-step(v-if='ephemeral.currentStep === 0' key='0')
    p.has-text-1.c-desc(v-if='changeSystem' v-safe-html='changeSystem' data-test='changeSystem')

    voting-rules-input.c-input(
      v-if='config.rule'
      :rule='config.rule'
      :value='form.threshold'
      @update='setThreshold'
    )

    // REVIEW - Why disagreement has an explanation but percentage doesn't?
    template(v-if='config.rule === RULE_DISAGREEMENT')
      i18n.has-text-1(v-if='form.threshold > 1' :args='{nr: form.threshold}') Future proposals would be accepted if {nr} or fewer members disagree.
      i18n.has-text-1(v-else :args='LTags("b")') Future proposals would be accepted if {b_}no one{_b} disagrees.

  banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { CLOSE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import { L, LTags } from '../../../../frontend/common/common.js'
import { proposalDefaults } from '../../../../frontend/model/contracts/shared/voting/proposals.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { PROPOSAL_PROPOSAL_SETTING_CHANGE } from '../../../../frontend/model/contracts/shared/constants.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalTemplate from './ProposalTemplate.vue'
import VotingRulesInput from '../../../../frontend/views/components/VotingRulesInput.vue'

export default ({
  name: 'ChangeVotingRules',
  components: {
    BannerScoped,
    ProposalTemplate,
    VotingRulesInput
  },
  data () {
    return {
      RULE_DISAGREEMENT,
      config: {
        steps: ['VotingSystem'],
        rule: null
      },
      form: {
        threshold: null
      },
      ephemeral: {
        errorMsg: null,
        currentStep: 0
      }
    }
  },
  created () {
    const rule = this.$route.query.rule

    if (rule) {
      sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'ChangeVotingRules', { rule })
      this.config.rule = rule
      this.form.threshold = rule === this.proposalSettings.rule
        ? this.currentThreshold
        : proposalDefaults.ruleSettings[rule].threshold
    } else {
      console.warn('RemoveMember: Missing valid query "rule".')
      sbp('okTurtles.events/emit', CLOSE_MODAL)
    }
  },
  watch: {
    'ephemeral.currentStep': function (step) {
      // Validate threshold when reaching step 1
      if (this.groupShouldPropose && step === 1) {
        this.validateThreshold()
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupShouldPropose',
      'groupProposalSettings',
      'groupSettings'
    ]),
    proposalSettings () {
      return this.groupProposalSettings()
    },
    currentThreshold () {
      // Only check currentThreshold if the system is the same.
      return this.changeSystem ? null : this.proposalSettings.ruleSettings[this.config.rule].threshold
    },
    title () {
      if (this.proposalSettings.rule === this.config.rule) {
        return L('Change voting rules')
      }
      return L('Change voting system')
    },
    changeSystem () {
      if (this.proposalSettings.rule === this.config.rule) {
        return ''
      }

      const nameMap = {
        [RULE_DISAGREEMENT]: L('disagreement number'),
        [RULE_PERCENTAGE]: L('percentage based')
      }

      return L('Change from a {b_}{oldSystem}{_b} voting system to a {b_}{newSystem}{_b} voting system.', {
        ...LTags('b'),
        oldSystem: nameMap[this.proposalSettings.rule],
        newSystem: nameMap[this.config.rule]
      })
    }
  },
  methods: {
    setThreshold (value) {
      this.form.threshold = value
    },
    validateThreshold () {
      if (+this.form.threshold === this.currentThreshold) {
        this.ephemeral.currentStep = 0
        this.$refs.formMsg.danger(L('You are proposing to keep the same value as the actual.'))
        return false
      }
      this.$refs.formMsg.clean()
      return true
    },
    async submit (arg) {
      if (!this.validateThreshold()) {
        return
      }

      if (this.groupShouldPropose) {
        const { reason } = arg // reason gets delivered from 'ProposalTemplate.vue'

        try {
          await sbp('gi.actions/group/proposal', {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_PROPOSAL_SETTING_CHANGE,
              proposalData: {
                current: {
                  ruleName: this.proposalSettings.rule,
                  ruleThreshold: this.currentThreshold
                },
                ruleName: this.config.rule,
                ruleThreshold: +this.form.threshold,
                reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].expires_ms
            }
          })
          this.ephemeral.currentStep += 1 // Show Success step
        } catch (e) {
          console.error('ChangeVotingRules.vue failed:', e)
          this.$refs.formMsg.danger(e.message)
          this.ephemeral.currentStep = 0
        }
      } else {
        try {
          await sbp('gi.actions/group/updateAllVotingRules', {
            contractID: this.currentGroupId,
            data: {
              ruleName: this.config.rule,
              ruleThreshold: +this.form.threshold
            }
          })
          this.$refs.proposal.close()
        } catch (e) {
          console.error('ChangeVotingRules.vue failed:', e)
          this.$refs.formMsg.danger(e.message)
        }
      }
    }
  },
  validations: {
    form: {},
    steps: {
      VotingSystem: [
        'form.threshold'
      ]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-step,
.c-desc {
  margin-bottom: 2rem;
}

.c-input {
  margin-bottom: 1rem;
}
</style>
`, ".c-step,\n.c-desc {\n  margin-bottom: 2rem;\n}\n\n.c-input {\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=ChangeVotingRules.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-395e572e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
proposal-template(
  ref='proposal'
  :title='title'
  :disabled='false'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  @submit='submit'
)
  .c-step(v-if='ephemeral.currentStep === 0' key='0')
    p.has-text-1.c-desc(v-if='changeSystem' v-safe-html='changeSystem' data-test='changeSystem')

    voting-rules-input.c-input(
      v-if='config.rule'
      :rule='config.rule'
      :value='form.threshold'
      @update='setThreshold'
    )

    // REVIEW - Why disagreement has an explanation but percentage doesn't?
    template(v-if='config.rule === RULE_DISAGREEMENT')
      i18n.has-text-1(v-if='form.threshold > 1' :args='{nr: form.threshold}') Future proposals would be accepted if {nr} or fewer members disagree.
      i18n.has-text-1(v-else :args='LTags("b")') Future proposals would be accepted if {b_}no one{_b} disagrees.

  banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { CLOSE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import { L, LTags } from '../../../../frontend/common/common.js'
import { proposalDefaults } from '../../../../frontend/model/contracts/shared/voting/proposals.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { PROPOSAL_PROPOSAL_SETTING_CHANGE } from '../../../../frontend/model/contracts/shared/constants.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalTemplate from './ProposalTemplate.vue'
import VotingRulesInput from '../../../../frontend/views/components/VotingRulesInput.vue'

export default ({
  name: 'ChangeVotingRules',
  components: {
    BannerScoped,
    ProposalTemplate,
    VotingRulesInput
  },
  data () {
    return {
      RULE_DISAGREEMENT,
      config: {
        steps: ['VotingSystem'],
        rule: null
      },
      form: {
        threshold: null
      },
      ephemeral: {
        errorMsg: null,
        currentStep: 0
      }
    }
  },
  created () {
    const rule = this.$route.query.rule

    if (rule) {
      sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'ChangeVotingRules', { rule })
      this.config.rule = rule
      this.form.threshold = rule === this.proposalSettings.rule
        ? this.currentThreshold
        : proposalDefaults.ruleSettings[rule].threshold
    } else {
      console.warn('RemoveMember: Missing valid query "rule".')
      sbp('okTurtles.events/emit', CLOSE_MODAL)
    }
  },
  watch: {
    'ephemeral.currentStep': function (step) {
      // Validate threshold when reaching step 1
      if (this.groupShouldPropose && step === 1) {
        this.validateThreshold()
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupShouldPropose',
      'groupProposalSettings',
      'groupSettings'
    ]),
    proposalSettings () {
      return this.groupProposalSettings()
    },
    currentThreshold () {
      // Only check currentThreshold if the system is the same.
      return this.changeSystem ? null : this.proposalSettings.ruleSettings[this.config.rule].threshold
    },
    title () {
      if (this.proposalSettings.rule === this.config.rule) {
        return L('Change voting rules')
      }
      return L('Change voting system')
    },
    changeSystem () {
      if (this.proposalSettings.rule === this.config.rule) {
        return ''
      }

      const nameMap = {
        [RULE_DISAGREEMENT]: L('disagreement number'),
        [RULE_PERCENTAGE]: L('percentage based')
      }

      return L('Change from a {b_}{oldSystem}{_b} voting system to a {b_}{newSystem}{_b} voting system.', {
        ...LTags('b'),
        oldSystem: nameMap[this.proposalSettings.rule],
        newSystem: nameMap[this.config.rule]
      })
    }
  },
  methods: {
    setThreshold (value) {
      this.form.threshold = value
    },
    validateThreshold () {
      if (+this.form.threshold === this.currentThreshold) {
        this.ephemeral.currentStep = 0
        this.$refs.formMsg.danger(L('You are proposing to keep the same value as the actual.'))
        return false
      }
      this.$refs.formMsg.clean()
      return true
    },
    async submit (arg) {
      if (!this.validateThreshold()) {
        return
      }

      if (this.groupShouldPropose) {
        const { reason } = arg // reason gets delivered from 'ProposalTemplate.vue'

        try {
          await sbp('gi.actions/group/proposal', {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_PROPOSAL_SETTING_CHANGE,
              proposalData: {
                current: {
                  ruleName: this.proposalSettings.rule,
                  ruleThreshold: this.currentThreshold
                },
                ruleName: this.config.rule,
                ruleThreshold: +this.form.threshold,
                reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_PROPOSAL_SETTING_CHANGE].expires_ms
            }
          })
          this.ephemeral.currentStep += 1 // Show Success step
        } catch (e) {
          console.error('ChangeVotingRules.vue failed:', e)
          this.$refs.formMsg.danger(e.message)
          this.ephemeral.currentStep = 0
        }
      } else {
        try {
          await sbp('gi.actions/group/updateAllVotingRules', {
            contractID: this.currentGroupId,
            data: {
              ruleName: this.config.rule,
              ruleThreshold: +this.form.threshold
            }
          })
          this.$refs.proposal.close()
        } catch (e) {
          console.error('ChangeVotingRules.vue failed:', e)
          this.$refs.formMsg.danger(e.message)
        }
      }
    }
  },
  validations: {
    form: {},
    steps: {
      VotingSystem: [
        'form.threshold'
      ]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-step,
.c-desc {
  margin-bottom: 2rem;
}

.c-input {
  margin-bottom: 1rem;
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
var ChangeVotingRules_default = __vue_component__;
export {
  ChangeVotingRules_default as default
};
//# sourceMappingURL=ChangeVotingRules-PP3TKXTR-cached.js.map
