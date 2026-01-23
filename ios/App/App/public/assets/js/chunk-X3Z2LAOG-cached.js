import {
  proposal_default
} from "./chunk-DBTA73EV-cached.js";
import {
  RULE_DISAGREEMENT,
  RULE_PERCENTAGE,
  getCountOutOfMembers,
  getThresholdAdjusted
} from "./chunk-XIIXXSLC-cached.js";
import {
  CharLengthIndicator_default
} from "./chunk-PDM5OGIJ-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  PROPOSAL_REASON_MAX_CHAR
} from "./chunk-UYGYRQRQ-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";

// frontend/views/containers/proposals/ProposalTemplate.vue
var __vue_script__ = {
  name: "ModalForm",
  components: {
    ModalTemplate: ModalTemplate_default,
    SvgProposal: proposal_default,
    ButtonSubmit: ButtonSubmit_default,
    CharLengthIndicator: CharLengthIndicator_default
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    currentStep: Number,
    maxSteps: {
      type: Number,
      required: true
    },
    variant: {
      validator(value) {
        return ["addMember", "addMemberImmediate", "removeMember"].indexOf(value) > -1;
      }
    },
    shouldImmediateChange: Boolean
  },
  data() {
    return {
      form: {
        reason: ""
        // optional field
      },
      config: {
        reasonMaxChar: PROPOSAL_REASON_MAX_CHAR
      }
    };
  },
  computed: {
    ...mapGetters([
      "currentGroupOwnerID",
      "ourIdentityContractId",
      "groupMembersCount",
      "groupShouldPropose",
      "groupProposalSettings"
    ]),
    shouldPropose() {
      return this.groupShouldPropose && !this.shouldImmediateChange;
    },
    proposalSettings() {
      return this.groupProposalSettings();
    },
    isGroupCreator() {
      return this.ourIdentityContractId === this.currentGroupOwnerID;
    },
    hasNextStep() {
      return this.currentStep <= this.maxSteps - 1;
    },
    isReasonStep() {
      return this.currentStep === this.maxSteps;
    },
    isConfirmation() {
      return this.currentStep === this.maxSteps + 1;
    },
    threshold() {
      const threshold = this.proposalSettings.ruleSettings[this.proposalSettings.rule].threshold;
      return getThresholdAdjusted(this.proposalSettings.rule, threshold, this.groupMembersCount);
    },
    footerVotingExplanation() {
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L("Your proposal will pass if {b_}no one{_b} disagrees.", LTags("b"));
          }
          return L("Your proposal will pass if {b_}fewer than {n} members{_b} disagree.", { n: this.threshold, ...LTags("b") });
        },
        [RULE_PERCENTAGE]: () => {
          return L("Your proposal will pass if {b_}{value} out of {total} members{_b} agree.", {
            value: this.fixedCount(),
            total: this.groupMembersCount,
            ...LTags("b")
          });
        }
      }[this.proposalSettings.rule]();
    },
    confirmationVotingExplanation() {
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L("Your proposal will pass if {b_}no one{_b} disagrees.", LTags("b"));
          }
          return L("Your proposal will pass if {b_}less than {n} members{_b} disagree.", { n: this.threshold, ...LTags("b") });
        },
        [RULE_PERCENTAGE]: () => {
          return L("You need {b_}{n} yes votes{_b} for your proposal to be accepted.", {
            n: this.fixedCount(),
            ...LTags("b")
          });
        }
      }[this.proposalSettings.rule]();
    },
    submitStyleNonProposal() {
      return this.variant === "removeMember" ? "is-danger" : "is-success";
    },
    submitTextNonProposal() {
      const text = {
        addMember: L("Send invitation"),
        addMemberImmediate: L("Create invitation"),
        removeMember: L("Remove Member"),
        default: L("Change")
      };
      return text[this.variant] || text.default;
    }
  },
  methods: {
    close() {
      this.$refs.modal.unload();
    },
    next() {
      this.$emit("update:currentStep", this.currentStep + 1);
    },
    prev() {
      if (this.currentStep > 0) {
        this.$emit("update:currentStep", this.currentStep - 1);
      } else {
        this.close();
      }
    },
    fixedCount() {
      let n = getCountOutOfMembers(this.groupMembersCount, this.threshold);
      if (this.variant === "removeMember" && n === this.groupMembersCount) {
        n -= 1;
      }
      return n;
    },
    async submit() {
      const form = this.shouldPropose ? { reason: this.$refs.reason.value } : null;
      await this.$listeners.submit(form);
    },
    onEnterPressed() {
      if (this.hasNextStep && this.shouldPropose && !this.disabled) {
        this.next();
      }
    }
  },
  watch: {
    isReasonStep(newValue, oldValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.reason.focus();
        });
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    {
      ref: "modal",
      staticClass: "is-centered",
      class: { "has-background": !_vm.isConfirmation },
      attrs: { "data-test": "modalProposal", a11yTitle: _vm.title }
    },
    [
      _c(
        "template",
        { slot: "subtitle" },
        [_vm.shouldPropose ? _c("i18n", [_vm._v("New proposal")]) : _vm._e()],
        1
      ),
      _c(
        "template",
        { slot: "title" },
        [
          _vm.isConfirmation ? _c("i18n", { key: "title1" }, [
            _vm._v("Your proposal was created")
          ]) : _c("span", [_vm._v(_vm._s(_vm.title))])
        ],
        1
      ),
      _c(
        "form",
        {
          staticClass: "c-form",
          on: {
            submit: function($event) {
              $event.preventDefault();
            },
            keyup: function($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                return null;
              }
              return _vm.onEnterPressed($event);
            }
          }
        },
        [
          _vm._t("default"),
          _vm.isReasonStep ? _c(
            "label",
            { key: "reason", staticClass: "field" },
            [
              _c(
                "div",
                { staticClass: "c-reason-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [
                    _vm._v("Why are you proposing this change?")
                  ]),
                  _vm.form.reason ? _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.form.reason.length || 0,
                      max: _vm.config.reasonMaxChar
                    }
                  }) : _vm._e()
                ],
                1
              ),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.reason,
                    expression: "form.reason"
                  }
                ],
                ref: "reason",
                staticClass: "textarea",
                attrs: {
                  maxlength: _vm.config.reasonMaxChar,
                  "data-test": "reason"
                },
                domProps: { value: _vm.form.reason },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(_vm.form, "reason", $event.target.value);
                  }
                }
              }),
              _c("i18n", { staticClass: "helper" }, [
                _vm._v("This is optional.")
              ])
            ],
            1
          ) : _vm._e(),
          _vm.isConfirmation ? _c(
            "div",
            { key: "confirmation", staticClass: "c-confirmation" },
            [
              _c("svg-proposal", { staticClass: "c-svg" }),
              _c("i18n", [
                _vm._v("Members of your group will now be asked to vote.")
              ]),
              _c("span", {
                directives: [
                  {
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: _vm.confirmationVotingExplanation,
                    expression: "confirmationVotingExplanation"
                  }
                ]
              })
            ],
            1
          ) : _vm._e(),
          _c(
            "div",
            {
              staticClass: "buttons",
              class: { "is-centered": _vm.isConfirmation }
            },
            [
              !_vm.isConfirmation ? _c(
                "button",
                {
                  key: "back",
                  staticClass: "is-outlined",
                  attrs: { type: "button", "data-test": "prevBtn" },
                  on: {
                    click: function($event) {
                      $event.preventDefault();
                      return _vm.prev($event);
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.currentStep === 0 ? _vm.L("Cancel") : _vm.L("Back")
                    )
                  )
                ]
              ) : _vm._e(),
              !_vm.isConfirmation && !_vm.shouldPropose ? _c(
                "button-submit",
                {
                  key: "change",
                  class: _vm.submitStyleNonProposal,
                  attrs: {
                    disabled: _vm.disabled || !_vm.isGroupCreator,
                    "data-test": "submitBtn"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.submitTextNonProposal))]
              ) : _vm._e(),
              _vm.shouldPropose && _vm.hasNextStep ? _c(
                "button",
                {
                  key: "next",
                  attrs: {
                    type: "button",
                    disabled: _vm.disabled,
                    "data-test": "nextBtn"
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault();
                      return _vm.next($event);
                    }
                  }
                },
                [
                  _c("i18n", [_vm._v("Next")]),
                  _c("i", { staticClass: "icon-arrow-right is-suffix" })
                ],
                1
              ) : _vm._e(),
              _vm.isReasonStep ? _c(
                "button-submit",
                {
                  key: "create",
                  staticClass: "is-success",
                  attrs: {
                    disabled: _vm.disabled,
                    "data-test": "submitBtn"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v("Create Proposal")]
              ) : _vm._e(),
              _vm.isConfirmation ? _c(
                "i18n",
                {
                  key: "awesome",
                  ref: "close",
                  staticClass: "is-outlined",
                  attrs: {
                    tag: "button",
                    type: "button",
                    "data-test": "finishBtn"
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault();
                      return _vm.close($event);
                    }
                  }
                },
                [_vm._v("Awesome")]
              ) : _vm._e()
            ],
            1
          )
        ],
        2
      ),
      !_vm.isConfirmation ? _c("template", { slot: "footer" }, [
        _c(
          "div",
          { staticClass: "c-footer" },
          [
            _c("i", { staticClass: "icon-vote-yea" }),
            _vm.shouldPropose ? _c("span", {
              directives: [
                {
                  name: "safe-html",
                  rawName: "v-safe-html",
                  value: _vm.footerVotingExplanation,
                  expression: "footerVotingExplanation"
                }
              ]
            }) : _vm.shouldImmediateChange ? _vm._t("shouldImmediateChangeFooter") : !_vm.groupShouldPropose ? _c("i18n", { attrs: { args: _vm.LTags("strong") } }, [
              _vm._v(
                "Your group has less than 3 members, so {strong_}this change will be immediate{_strong} (no voting required)."
              )
            ]) : _vm._e()
          ],
          2
        )
      ]) : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-a3659d88_0", { source: ".c-sprite[data-v-a3659d88] {\n  display: none;\n}\n.c-reason-label-container[data-v-a3659d88] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n.c-confirmation[data-v-a3659d88] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.c-svg[data-v-a3659d88] {\n  height: 7rem;\n  margin-bottom: 2rem;\n}\n.c-form[data-v-a3659d88] {\n  position: relative;\n}\n.c-footer[data-v-a3659d88] {\n  display: flex;\n}\n.c-footer .icon-vote-yea[data-v-a3659d88] {\n  color: var(--primary_0);\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-footer .icon-vote-yea[data-v-a3659d88] {\n    display: none;\n}\n}\n\n/*# sourceMappingURL=ProposalTemplate.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/ProposalTemplate.vue", "ProposalTemplate.vue"], "names": [], "mappings": "AAgRA;EACA,aAAA;AC/QA;ADkRA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,kBAAA;AC/QA;ADkRA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AC/QA;ADkRA;EACA,YAAA;EACA,mBAAA;AC/QA;ADkRA;EACA,kBAAA;AC/QA;ADkRA;EACA,aAAA;AC/QA;ADiRA;EACA,uBAAA;EACA,oBAAA;AC/QA;AACA;AD4QA;IAKA,aAAA;AC9QE;AACF;;AAEA,+CAA+C", "file": "ProposalTemplate.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(
    data-test='modalProposal'
    class='is-centered'
    :class='{"has-background": !isConfirmation}'
    ref='modal'
    :a11yTitle='title'
  )
    template(slot='subtitle')
      i18n(v-if='shouldPropose') New proposal
    template(slot='title')
      i18n(key='title1' v-if='isConfirmation') Your proposal was created
      span(v-else) {{ title }}

    form.c-form(
      @submit.prevent=''
      @keyup.enter='onEnterPressed'
    )
      slot

      label.field(v-if='isReasonStep' key='reason')
        .c-reason-label-container
          i18n.label Why are you proposing this change?
          char-length-indicator(
            v-if='form.reason'
            :current-length='form.reason.length || 0'
            :max='config.reasonMaxChar'
          )
        textarea.textarea(
          v-model='form.reason'
          ref='reason'
          :maxlength='config.reasonMaxChar'
          data-test='reason'
        )
        i18n.helper This is optional.

      .c-confirmation(v-if='isConfirmation' key='confirmation')
        svg-proposal.c-svg
        i18n Members of your group will now be asked to vote.
        span(v-safe-html='confirmationVotingExplanation')

      .buttons(:class='{ "is-centered": isConfirmation }')
        button.is-outlined(
          key='back'
          v-if='!isConfirmation'
          type='button'
          @click.prevent='prev'
          data-test='prevBtn'
        ) {{ currentStep === 0 ? L('Cancel') : L('Back') }}

        button-submit(
          key='change'
          :class='submitStyleNonProposal'
          v-if='!isConfirmation && !shouldPropose'
          @click='submit'
          :disabled='disabled || !isGroupCreator'
          data-test='submitBtn'
        ) {{ submitTextNonProposal }}

        button(
          type='button'
          key='next'
          v-if='shouldPropose && hasNextStep'
          @click.prevent='next'
          :disabled='disabled'
          data-test='nextBtn'
        )
          i18n Next
          i.icon-arrow-right.is-suffix

        button-submit.is-success(
          key='create'
          v-if='isReasonStep'
          @click='submit'
          :disabled='disabled'
          data-test='submitBtn'
        ) Create Proposal

        i18n.is-outlined(
          key='awesome'
          tag='button'
          type='button'
          v-if='isConfirmation'
          ref='close'
          @click.prevent='close'
          data-test='finishBtn'
        ) Awesome

    template(slot='footer' v-if='!isConfirmation')
      .c-footer
        i.icon-vote-yea
        span(v-if='shouldPropose' v-safe-html='footerVotingExplanation')
        slot(v-else-if='shouldImmediateChange' name='shouldImmediateChangeFooter')
        i18n(
          v-else-if='!groupShouldPropose'
          :args='LTags("strong")'
        ) Your group has less than 3 members, so {strong_}this change will be immediate{_strong} (no voting required).
</template>

<script>
import { mapGetters } from 'vuex'
import { L, LTags } from '../../../../frontend/common/common.js'
import { PROPOSAL_REASON_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getThresholdAdjusted, getCountOutOfMembers } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import SvgProposal from '../../../../frontend/assets/svgs/proposal.svg'

export default ({
  name: 'ModalForm',
  components: {
    ModalTemplate,
    SvgProposal,
    ButtonSubmit,
    CharLengthIndicator
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    currentStep: Number,
    maxSteps: {
      type: Number,
      required: true
    },
    variant: {
      validator (value) {
        return ['addMember', 'addMemberImmediate', 'removeMember'].indexOf(value) > -1
      }
    },
    shouldImmediateChange: Boolean
  },
  data () {
    return {
      form: {
        reason: '' // optional field
      },
      config: {
        reasonMaxChar: PROPOSAL_REASON_MAX_CHAR
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupOwnerID',
      'ourIdentityContractId',
      'groupMembersCount',
      'groupShouldPropose',
      'groupProposalSettings'
    ]),
    shouldPropose () {
      return this.groupShouldPropose && !this.shouldImmediateChange
    },
    proposalSettings () {
      return this.groupProposalSettings()
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    },
    hasNextStep () {
      return this.currentStep <= this.maxSteps - 1
    },
    isReasonStep () {
      return this.currentStep === this.maxSteps
    },
    isConfirmation () {
      return this.currentStep === this.maxSteps + 1
    },
    threshold () {
      const threshold = this.proposalSettings.ruleSettings[this.proposalSettings.rule].threshold
      return getThresholdAdjusted(this.proposalSettings.rule, threshold, this.groupMembersCount)
    },
    footerVotingExplanation () {
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L('Your proposal will pass if {b_}no one{_b} disagrees.', LTags('b'))
          }
          return L('Your proposal will pass if {b_}fewer than {n} members{_b} disagree.', { n: this.threshold, ...LTags('b') })
        },
        [RULE_PERCENTAGE]: () => {
          return L('Your proposal will pass if {b_}{value} out of {total} members{_b} agree.', {
            value: this.fixedCount(),
            total: this.groupMembersCount,
            ...LTags('b')
          })
        }
      }[this.proposalSettings.rule]()
    },
    confirmationVotingExplanation () {
      // REVIEW PR - @mmbotelho - This and footerVotingExplanation could be the same text for simplicity.
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L('Your proposal will pass if {b_}no one{_b} disagrees.', LTags('b'))
          }
          return L('Your proposal will pass if {b_}less than {n} members{_b} disagree.', { n: this.threshold, ...LTags('b') })
        },
        [RULE_PERCENTAGE]: () => {
          return L('You need {b_}{n} yes votes{_b} for your proposal to be accepted.', {
            n: this.fixedCount(),
            ...LTags('b')
          })
        }
      }[this.proposalSettings.rule]()
    },
    submitStyleNonProposal () {
      return this.variant === 'removeMember' ? 'is-danger' : 'is-success'
    },
    submitTextNonProposal () {
      const text = {
        addMember: L('Send invitation'),
        addMemberImmediate: L('Create invitation'),
        removeMember: L('Remove Member'),
        default: L('Change')
      }

      return text[this.variant] || text.default
    }
  },
  methods: {
    close () {
      this.$refs.modal.unload()
    },
    next () {
      // TODO/BUG - we must clear formMsg (if visible) when changing steps.
      this.$emit('update:currentStep', this.currentStep + 1)
    },
    prev () {
      if (this.currentStep > 0) {
        this.$emit('update:currentStep', this.currentStep - 1)
      } else {
        this.close()
      }
    },
    fixedCount () {
      let n = getCountOutOfMembers(this.groupMembersCount, this.threshold)
      if (this.variant === 'removeMember' && n === this.groupMembersCount) {
        n -= 1 // don't include the member to-be-removed in the count
      }
      return n
    },
    async submit () {
      const form = this.shouldPropose ? { reason: this.$refs.reason.value } : null
      await this.$listeners.submit(form)
    },
    onEnterPressed () {
      if (this.hasNextStep && this.shouldPropose && !this.disabled) {
        this.next()
      }
    }
  },
  watch: {
    isReasonStep (newValue, oldValue) {
      if (newValue) {
        // NOTE: nextTick is necessary because \`reason\` textarea is created
        //       when isReasonStep becomes true since v-if is used
        this.$nextTick(() => {
          this.$refs.reason.focus()
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-sprite {
  display: none;
}

.c-reason-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  column-gap: 0.5rem;
}

.c-confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
}

.c-svg {
  height: 7rem;
  margin-bottom: 2rem;
}

.c-form {
  position: relative;
}

.c-footer {
  display: flex;

  .icon-vote-yea {
    color: $primary_0;
    margin-right: 0.5rem;

    @include phone {
      display: none;
    }
  }
}
</style>
`, ".c-sprite {\n  display: none;\n}\n\n.c-reason-label-container {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n\n.c-confirmation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.c-svg {\n  height: 7rem;\n  margin-bottom: 2rem;\n}\n\n.c-form {\n  position: relative;\n}\n\n.c-footer {\n  display: flex;\n}\n.c-footer .icon-vote-yea {\n  color: var(--primary_0);\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-footer .icon-vote-yea {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=ProposalTemplate.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-a3659d88";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(
    data-test='modalProposal'
    class='is-centered'
    :class='{"has-background": !isConfirmation}'
    ref='modal'
    :a11yTitle='title'
  )
    template(slot='subtitle')
      i18n(v-if='shouldPropose') New proposal
    template(slot='title')
      i18n(key='title1' v-if='isConfirmation') Your proposal was created
      span(v-else) {{ title }}

    form.c-form(
      @submit.prevent=''
      @keyup.enter='onEnterPressed'
    )
      slot

      label.field(v-if='isReasonStep' key='reason')
        .c-reason-label-container
          i18n.label Why are you proposing this change?
          char-length-indicator(
            v-if='form.reason'
            :current-length='form.reason.length || 0'
            :max='config.reasonMaxChar'
          )
        textarea.textarea(
          v-model='form.reason'
          ref='reason'
          :maxlength='config.reasonMaxChar'
          data-test='reason'
        )
        i18n.helper This is optional.

      .c-confirmation(v-if='isConfirmation' key='confirmation')
        svg-proposal.c-svg
        i18n Members of your group will now be asked to vote.
        span(v-safe-html='confirmationVotingExplanation')

      .buttons(:class='{ "is-centered": isConfirmation }')
        button.is-outlined(
          key='back'
          v-if='!isConfirmation'
          type='button'
          @click.prevent='prev'
          data-test='prevBtn'
        ) {{ currentStep === 0 ? L('Cancel') : L('Back') }}

        button-submit(
          key='change'
          :class='submitStyleNonProposal'
          v-if='!isConfirmation && !shouldPropose'
          @click='submit'
          :disabled='disabled || !isGroupCreator'
          data-test='submitBtn'
        ) {{ submitTextNonProposal }}

        button(
          type='button'
          key='next'
          v-if='shouldPropose && hasNextStep'
          @click.prevent='next'
          :disabled='disabled'
          data-test='nextBtn'
        )
          i18n Next
          i.icon-arrow-right.is-suffix

        button-submit.is-success(
          key='create'
          v-if='isReasonStep'
          @click='submit'
          :disabled='disabled'
          data-test='submitBtn'
        ) Create Proposal

        i18n.is-outlined(
          key='awesome'
          tag='button'
          type='button'
          v-if='isConfirmation'
          ref='close'
          @click.prevent='close'
          data-test='finishBtn'
        ) Awesome

    template(slot='footer' v-if='!isConfirmation')
      .c-footer
        i.icon-vote-yea
        span(v-if='shouldPropose' v-safe-html='footerVotingExplanation')
        slot(v-else-if='shouldImmediateChange' name='shouldImmediateChangeFooter')
        i18n(
          v-else-if='!groupShouldPropose'
          :args='LTags("strong")'
        ) Your group has less than 3 members, so {strong_}this change will be immediate{_strong} (no voting required).
</template>

<script>
import { mapGetters } from 'vuex'
import { L, LTags } from '../../../../frontend/common/common.js'
import { PROPOSAL_REASON_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getThresholdAdjusted, getCountOutOfMembers } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import SvgProposal from '../../../../frontend/assets/svgs/proposal.svg'

export default ({
  name: 'ModalForm',
  components: {
    ModalTemplate,
    SvgProposal,
    ButtonSubmit,
    CharLengthIndicator
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    currentStep: Number,
    maxSteps: {
      type: Number,
      required: true
    },
    variant: {
      validator (value) {
        return ['addMember', 'addMemberImmediate', 'removeMember'].indexOf(value) > -1
      }
    },
    shouldImmediateChange: Boolean
  },
  data () {
    return {
      form: {
        reason: '' // optional field
      },
      config: {
        reasonMaxChar: PROPOSAL_REASON_MAX_CHAR
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupOwnerID',
      'ourIdentityContractId',
      'groupMembersCount',
      'groupShouldPropose',
      'groupProposalSettings'
    ]),
    shouldPropose () {
      return this.groupShouldPropose && !this.shouldImmediateChange
    },
    proposalSettings () {
      return this.groupProposalSettings()
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    },
    hasNextStep () {
      return this.currentStep <= this.maxSteps - 1
    },
    isReasonStep () {
      return this.currentStep === this.maxSteps
    },
    isConfirmation () {
      return this.currentStep === this.maxSteps + 1
    },
    threshold () {
      const threshold = this.proposalSettings.ruleSettings[this.proposalSettings.rule].threshold
      return getThresholdAdjusted(this.proposalSettings.rule, threshold, this.groupMembersCount)
    },
    footerVotingExplanation () {
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L('Your proposal will pass if {b_}no one{_b} disagrees.', LTags('b'))
          }
          return L('Your proposal will pass if {b_}fewer than {n} members{_b} disagree.', { n: this.threshold, ...LTags('b') })
        },
        [RULE_PERCENTAGE]: () => {
          return L('Your proposal will pass if {b_}{value} out of {total} members{_b} agree.', {
            value: this.fixedCount(),
            total: this.groupMembersCount,
            ...LTags('b')
          })
        }
      }[this.proposalSettings.rule]()
    },
    confirmationVotingExplanation () {
      // REVIEW PR - @mmbotelho - This and footerVotingExplanation could be the same text for simplicity.
      return {
        [RULE_DISAGREEMENT]: () => {
          if (this.threshold === 1) {
            return L('Your proposal will pass if {b_}no one{_b} disagrees.', LTags('b'))
          }
          return L('Your proposal will pass if {b_}less than {n} members{_b} disagree.', { n: this.threshold, ...LTags('b') })
        },
        [RULE_PERCENTAGE]: () => {
          return L('You need {b_}{n} yes votes{_b} for your proposal to be accepted.', {
            n: this.fixedCount(),
            ...LTags('b')
          })
        }
      }[this.proposalSettings.rule]()
    },
    submitStyleNonProposal () {
      return this.variant === 'removeMember' ? 'is-danger' : 'is-success'
    },
    submitTextNonProposal () {
      const text = {
        addMember: L('Send invitation'),
        addMemberImmediate: L('Create invitation'),
        removeMember: L('Remove Member'),
        default: L('Change')
      }

      return text[this.variant] || text.default
    }
  },
  methods: {
    close () {
      this.$refs.modal.unload()
    },
    next () {
      // TODO/BUG - we must clear formMsg (if visible) when changing steps.
      this.$emit('update:currentStep', this.currentStep + 1)
    },
    prev () {
      if (this.currentStep > 0) {
        this.$emit('update:currentStep', this.currentStep - 1)
      } else {
        this.close()
      }
    },
    fixedCount () {
      let n = getCountOutOfMembers(this.groupMembersCount, this.threshold)
      if (this.variant === 'removeMember' && n === this.groupMembersCount) {
        n -= 1 // don't include the member to-be-removed in the count
      }
      return n
    },
    async submit () {
      const form = this.shouldPropose ? { reason: this.$refs.reason.value } : null
      await this.$listeners.submit(form)
    },
    onEnterPressed () {
      if (this.hasNextStep && this.shouldPropose && !this.disabled) {
        this.next()
      }
    }
  },
  watch: {
    isReasonStep (newValue, oldValue) {
      if (newValue) {
        // NOTE: nextTick is necessary because \`reason\` textarea is created
        //       when isReasonStep becomes true since v-if is used
        this.$nextTick(() => {
          this.$refs.reason.focus()
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-sprite {
  display: none;
}

.c-reason-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  column-gap: 0.5rem;
}

.c-confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
}

.c-svg {
  height: 7rem;
  margin-bottom: 2rem;
}

.c-form {
  position: relative;
}

.c-footer {
  display: flex;

  .icon-vote-yea {
    color: $primary_0;
    margin-right: 0.5rem;

    @include phone {
      display: none;
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
var ProposalTemplate_default = __vue_component__;

export {
  ProposalTemplate_default
};
//# sourceMappingURL=chunk-X3Z2LAOG-cached.js.map
