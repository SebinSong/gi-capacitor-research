import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import {
  EDWARDS25519SHA512BATCH,
  SPMessage,
  encryptedOutgoingData,
  keyId,
  keygen,
  serializeKey
} from "./chunk-NVV2HOKV-cached.js";
import "./chunk-76TQH32R-cached.js";
import "./chunk-F2DYOYGG-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  DAYS_MILLIS
} from "./chunk-V3SQGGAF-cached.js";
import {
  require_buffer
} from "./chunk-SC5GGDZP-cached.js";
import {
  init_vue_esm,
  vue_esm_default
} from "./chunk-K33NK7LD-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-PDM5OGIJ-cached.js";
import "./chunk-YUM5UY76-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  PROPOSAL_INVITE_MEMBER
} from "./chunk-UYGYRQRQ-cached.js";
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
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/proposals/AddMembers.vue
init_vue_esm();
var import_vuelidate = __toESM(require_lib());

// node_modules/@chelonia/lib/dist/esm/utils.mjs
var import_buffer = __toESM(require_buffer(), 1);
var MAX_EVENTS_AFTER = Number.parseInt("", 10) || Infinity;
var copiedExistingData = Symbol("copiedExistingData");
var findKeyIdByName = (state, name) => state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).find((k) => k.name === name && k._notAfterHeight == null)?.id;
var findSuitableSecretKeyId = (state, permissions, purposes, ringLevel, allowedActions) => {
  return state._vm?.authorizedKeys && Object.values(state._vm.authorizedKeys).filter((k) => {
    return k._notAfterHeight == null && k.ringLevel <= (ringLevel ?? Number.POSITIVE_INFINITY) && esm_default("chelonia/haveSecretKey", k.id) && (Array.isArray(permissions) ? permissions.reduce((acc, permission) => acc && (k.permissions === "*" || k.permissions.includes(permission)), true) : permissions === k.permissions) && purposes.reduce((acc, purpose) => acc && k.purpose.includes(purpose), true) && (Array.isArray(allowedActions) ? allowedActions.reduce((acc, action) => acc && (k.allowedActions === "*" || !!k.allowedActions?.includes(action)), true) : allowedActions ? allowedActions === k.allowedActions : true);
  }).sort((a, b) => b.ringLevel - a.ringLevel)[0]?.id;
};

// frontend/controller/actions/utils.js
async function createInvite({ contractID, quantity = 1, creatorID, expires, invitee }) {
  const state = await esm_default("chelonia/contract/state", contractID);
  if (!state || !state._vm || !findSuitableSecretKeyId(state, "*", ["sig"]) || state._volatile?.pendingKeyRequests?.length) {
    throw new Error("Invalid or missing current group state");
  }
  const CEKid = findKeyIdByName(state, "cek");
  const CSKid = findKeyIdByName(state, "csk");
  if (!CEKid || !CSKid) {
    throw new Error("Contract is missing a CEK or CSK");
  }
  const inviteKey = keygen(EDWARDS25519SHA512BATCH);
  const inviteKeyId = keyId(inviteKey);
  const inviteKeyP = serializeKey(inviteKey, false);
  const inviteKeyS = encryptedOutgoingData(state, CEKid, serializeKey(inviteKey, true));
  await esm_default("chelonia/out/keyAdd", {
    contractID,
    contractName: "gi.contracts/group",
    data: [{
      id: inviteKeyId,
      name: "#inviteKey-" + inviteKeyId,
      purpose: ["sig"],
      ringLevel: Number.MAX_SAFE_INTEGER,
      permissions: [SPMessage.OP_KEY_REQUEST],
      meta: {
        quantity,
        expires: Date.now() + DAYS_MILLIS * expires,
        private: {
          content: inviteKeyS
        }
      },
      data: inviteKeyP
    }],
    signingKeyId: CSKid
  });
  return {
    inviteKeyId,
    creatorID,
    invitee
  };
}

// frontend/views/containers/proposals/AddMembers.vue
var __vue_script__ = {
  name: "AddMembers",
  mixins: [import_vuelidate.validationMixin],
  components: {
    ProposalTemplate: ProposalTemplate_default
  },
  data() {
    return {
      form: {
        invitees: []
      },
      ephemeral: {
        currentStep: 0,
        isValid: false,
        invitesCount: 1
      },
      config: {
        steps: [
          "Member"
        ]
      }
    };
  },
  computed: {
    ...mapState([
      "currentGroupId",
      "loggedIn"
    ]),
    ...mapGetters([
      "ourIdentityContractId",
      "currentGroupState",
      "currentWelcomeInvite",
      "groupShouldPropose",
      "groupSettings"
    ]),
    shouldGenerateInvitesImmediately() {
      return this.currentWelcomeInvite.expires < Date.now() && // 1. anyone-can-join invite has expired
      !this.groupShouldPropose;
    }
  },
  methods: {
    inviteeUpdate(e, index) {
      if (e.target.value.length > 0 && !this.ephemeral.isValid) {
        this.ephemeral.isValid = true;
      }
      if (e.target.value.length === 0 && this.ephemeral.invitesCount === 1 && this.ephemeral.isValid) {
        this.ephemeral.isValid = false;
      }
    },
    removeInvitee(index) {
      this.ephemeral.invitesCount -= 1;
      this.form.invitees.splice(index, 1);
    },
    addInviteeSlot(e) {
      this.ephemeral.invitesCount += 1;
      vue_esm_default.nextTick(() => {
        const inviteeSlots = this.$refs.fieldset.getElementsByTagName("label");
        const newInviteeSlot = inviteeSlots[inviteeSlots.length - 1];
        newInviteeSlot && newInviteeSlot.focus();
      });
    },
    async generateInviteImmediately() {
      const groupId = this.currentGroupId;
      for (const invitee of this.form.invitees) {
        try {
          const inviteCreated = await createInvite({
            contractID: groupId,
            invitee,
            creatorID: this.ourIdentityContractId,
            expires: this.groupSettings.inviteExpiryProposal
          });
          await esm_default("gi.actions/group/invite", {
            contractID: groupId,
            data: inviteCreated
          });
        } catch (err) {
          console.error(`Invite to ${invitee} failed to be sent!`, err?.message);
          break;
        }
      }
    },
    async submit(form) {
      if (this.shouldGenerateInvitesImmediately) {
        await this.generateInviteImmediately();
        this.$refs.modalTemplate.close();
      } else {
        let hasFailed = false;
        const expiresDateMs = Date.now() + this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].expires_ms;
        for (const invitee of this.form.invitees) {
          const groupId = this.currentGroupId;
          try {
            await esm_default("gi.actions/group/proposal", {
              contractID: groupId,
              data: {
                proposalType: PROPOSAL_INVITE_MEMBER,
                proposalData: {
                  memberName: invitee,
                  reason: form.reason
                },
                votingRule: this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].rule,
                expires_date_ms: expiresDateMs
              }
            });
          } catch (e) {
            hasFailed = true;
            console.error(`Invite to ${invitee} failed to be sent!`, e.message);
            break;
          }
        }
        if (!hasFailed) {
          this.ephemeral.currentStep += 1;
        }
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
      ref: "modalTemplate",
      attrs: {
        title: _vm.L("Add new members"),
        disabled: !_vm.ephemeral.isValid,
        maxSteps: _vm.config.steps.length,
        currentStep: _vm.ephemeral.currentStep,
        variant: _vm.shouldGenerateInvitesImmediately ? "addMemberImmediate" : "addMember"
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
        "fieldset",
        {
          ref: "fieldset",
          staticClass: "c-fieldset",
          class: { "is-shifted": _vm.ephemeral.invitesCount > 1 }
        },
        [
          _c("i18n", { staticClass: "label", attrs: { tag: "legend" } }, [
            _vm._v("Full name")
          ]),
          _vm._l(_vm.ephemeral.invitesCount, function(member, index) {
            return _c(
              "div",
              {
                key: "member-" + index,
                staticClass: "field c-fields-item",
                attrs: { "data-test": "invitee" }
              },
              [
                _c("i18n", { staticClass: "label sr-only" }, [
                  _vm._v("Invitee name")
                ]),
                _c("div", { staticClass: "inputgroup" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.invitees[index],
                        expression: "form.invitees[index]"
                      }
                    ],
                    staticClass: "input",
                    attrs: {
                      type: "text",
                      "aria-label": _vm.L("Full name"),
                      "aria-required": "aria-required"
                    },
                    domProps: { value: _vm.form.invitees[index] },
                    on: {
                      keyup: function(e) {
                        return _vm.inviteeUpdate(e, index);
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return;
                        }
                        _vm.$set(
                          _vm.form.invitees,
                          index,
                          $event.target.value
                        );
                      }
                    }
                  }),
                  _c(
                    "button",
                    {
                      staticClass: "is-icon-small is-btn-shifted",
                      attrs: {
                        type: "button",
                        "data-test": "remove",
                        "aria-label": _vm.L("Remove invitee")
                      },
                      on: {
                        click: function($event) {
                          return _vm.removeInvitee(index);
                        }
                      }
                    },
                    [_c("i", { staticClass: "icon-times" })]
                  )
                ])
              ],
              1
            );
          }),
          _c(
            "button",
            {
              staticClass: "link has-icon",
              attrs: { type: "button", "data-test": "addInviteeSlot" },
              on: { click: _vm.addInviteeSlot }
            },
            [
              _c("i", { staticClass: "icon-plus" }),
              _c("i18n", [_vm._v("Add more")])
            ],
            1
          )
        ],
        2
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5ce5f27c_0", { source: ".c-fields-item[data-v-5ce5f27c] {\n  margin-bottom: 1rem;\n}\n.c-feedback[data-v-5ce5f27c] {\n  text-align: center;\n}\n.c-fieldset .is-btn-shifted[data-v-5ce5f27c] {\n  display: none;\n}\n.c-fieldset.is-shifted .is-btn-shifted[data-v-5ce5f27c] {\n  display: block;\n}\n\n/*# sourceMappingURL=AddMembers.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/AddMembers.vue", "AddMembers.vue"], "names": [], "mappings": "AAsLA;EACA,mBAAA;ACrLA;ADwLA;EACA,kBAAA;ACrLA;ADyLA;EACA,aAAA;ACtLA;AD0LA;EACA,cAAA;ACxLA;;AAEA,yCAAyC", "file": "AddMembers.vue", "sourcesContent": [`<template lang='pug'>
proposal-template(
  ref='modalTemplate'
  :title='L("Add new members")'
  :disabled='!ephemeral.isValid'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  :variant='shouldGenerateInvitesImmediately ? "addMemberImmediate" : "addMember"'
  @submit='submit'
)
  fieldset.c-fieldset(
    v-if='ephemeral.currentStep === 0'
    :class='{"is-shifted": ephemeral.invitesCount > 1}'
    ref='fieldset'
  )
    i18n.label(tag='legend') Full name
    .field.c-fields-item(
      v-for='(member, index) in ephemeral.invitesCount'
      :key='\`member-\${index}\`'
      data-test='invitee'
    )
      i18n.label.sr-only Invitee name
      .inputgroup
        input.input(
          type='text'
          :aria-label='L("Full name")'
          v-model='form.invitees[index]'
          @keyup='(e) => inviteeUpdate(e, index)'
          aria-required
        )
        button.is-icon-small.is-btn-shifted(
          type='button'
          @click='removeInvitee(index)'
          data-test='remove'
          :aria-label='L("Remove invitee")'
        )
          i.icon-times

    button.link.has-icon(
      type='button'
      @click='addInviteeSlot'
      data-test='addInviteeSlot'
    )
      i.icon-plus
      i18n Add more
</template>

<script>
import sbp from '@sbp/sbp'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'
import { mapState, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { PROPOSAL_INVITE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import ProposalTemplate from './ProposalTemplate.vue'
import { createInvite } from '../../../../frontend/controller/actions/utils.js'
export default ({
  name: 'AddMembers',
  mixins: [validationMixin],
  components: {
    ProposalTemplate
  },
  data () {
    return {
      form: {
        invitees: []
      },
      ephemeral: {
        currentStep: 0,
        isValid: false,
        invitesCount: 1
      },
      config: {
        steps: [
          'Member'
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId',
      'loggedIn'
    ]),
    ...mapGetters([
      'ourIdentityContractId',
      'currentGroupState',
      'currentWelcomeInvite',
      'groupShouldPropose',
      'groupSettings'
    ]),
    shouldGenerateInvitesImmediately () {
      return this.currentWelcomeInvite.expires < Date.now() && // 1. anyone-can-join invite has expired
        !this.groupShouldPropose // 2. The group is not big enough to create a proposal
    }
  },
  methods: {
    inviteeUpdate (e, index) {
      if (e.target.value.length > 0 && !this.ephemeral.isValid) {
        this.ephemeral.isValid = true
      }
      if (e.target.value.length === 0 && this.ephemeral.invitesCount === 1 && this.ephemeral.isValid) {
        this.ephemeral.isValid = false
      }
    },
    removeInvitee (index) {
      this.ephemeral.invitesCount -= 1
      this.form.invitees.splice(index, 1)
    },
    addInviteeSlot (e) {
      this.ephemeral.invitesCount += 1
      Vue.nextTick(() => {
        const inviteeSlots = this.$refs.fieldset.getElementsByTagName('label')
        const newInviteeSlot = inviteeSlots[inviteeSlots.length - 1]
        newInviteeSlot && newInviteeSlot.focus()
      })
    },
    async generateInviteImmediately () {
      const groupId = this.currentGroupId
      for (const invitee of this.form.invitees) {
        try {
          const inviteCreated = await createInvite({
            contractID: groupId,
            invitee,
            creatorID: this.ourIdentityContractId,
            expires: this.groupSettings.inviteExpiryProposal
          })

          await sbp('gi.actions/group/invite', {
            contractID: groupId,
            data: inviteCreated
          })
        } catch (err) {
          // TODO: add a logic to present the error in the UI
          console.error(\`Invite to \${invitee} failed to be sent!\`, err?.message)
          break
        }
      }
    },
    async submit (form) {
      if (this.shouldGenerateInvitesImmediately) {
        await this.generateInviteImmediately()

        this.$refs.modalTemplate.close()
      } else {
        let hasFailed = false
        // NOTE: All invitees proposals will expire at the exact same time.
        // That plus the proposal creator is what we'll use to know
        // which proposals should be displayed visually together.
        const expiresDateMs = Date.now() + this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].expires_ms

        for (const invitee of this.form.invitees) {
          const groupId = this.currentGroupId
          try {
            await sbp('gi.actions/group/proposal', {
              contractID: groupId,
              data: {
                proposalType: PROPOSAL_INVITE_MEMBER,
                proposalData: {
                  memberName: invitee,
                  reason: form.reason
                },
                votingRule: this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].rule,
                expires_date_ms: expiresDateMs
              }
            })
          } catch (e) {
            hasFailed = true
            console.error(\`Invite to \${invitee} failed to be sent!\`, e.message)
            break
          }
        }
        if (!hasFailed) {
          this.ephemeral.currentStep += 1 // Show Success step!
        }
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-fields-item {
  margin-bottom: 1rem;
}

.c-feedback {
  text-align: center;
}

.c-fieldset {
  .is-btn-shifted {
    display: none;
  }

  &.is-shifted {
    .is-btn-shifted {
      display: block;
    }
  }
}
</style>
`, ".c-fields-item {\n  margin-bottom: 1rem;\n}\n\n.c-feedback {\n  text-align: center;\n}\n\n.c-fieldset .is-btn-shifted {\n  display: none;\n}\n.c-fieldset.is-shifted .is-btn-shifted {\n  display: block;\n}\n\n/*# sourceMappingURL=AddMembers.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5ce5f27c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
proposal-template(
  ref='modalTemplate'
  :title='L("Add new members")'
  :disabled='!ephemeral.isValid'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  :variant='shouldGenerateInvitesImmediately ? "addMemberImmediate" : "addMember"'
  @submit='submit'
)
  fieldset.c-fieldset(
    v-if='ephemeral.currentStep === 0'
    :class='{"is-shifted": ephemeral.invitesCount > 1}'
    ref='fieldset'
  )
    i18n.label(tag='legend') Full name
    .field.c-fields-item(
      v-for='(member, index) in ephemeral.invitesCount'
      :key='\`member-\${index}\`'
      data-test='invitee'
    )
      i18n.label.sr-only Invitee name
      .inputgroup
        input.input(
          type='text'
          :aria-label='L("Full name")'
          v-model='form.invitees[index]'
          @keyup='(e) => inviteeUpdate(e, index)'
          aria-required
        )
        button.is-icon-small.is-btn-shifted(
          type='button'
          @click='removeInvitee(index)'
          data-test='remove'
          :aria-label='L("Remove invitee")'
        )
          i.icon-times

    button.link.has-icon(
      type='button'
      @click='addInviteeSlot'
      data-test='addInviteeSlot'
    )
      i.icon-plus
      i18n Add more
</template>

<script>
import sbp from '@sbp/sbp'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'
import { mapState, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { PROPOSAL_INVITE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import ProposalTemplate from './ProposalTemplate.vue'
import { createInvite } from '../../../../frontend/controller/actions/utils.js'
export default ({
  name: 'AddMembers',
  mixins: [validationMixin],
  components: {
    ProposalTemplate
  },
  data () {
    return {
      form: {
        invitees: []
      },
      ephemeral: {
        currentStep: 0,
        isValid: false,
        invitesCount: 1
      },
      config: {
        steps: [
          'Member'
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId',
      'loggedIn'
    ]),
    ...mapGetters([
      'ourIdentityContractId',
      'currentGroupState',
      'currentWelcomeInvite',
      'groupShouldPropose',
      'groupSettings'
    ]),
    shouldGenerateInvitesImmediately () {
      return this.currentWelcomeInvite.expires < Date.now() && // 1. anyone-can-join invite has expired
        !this.groupShouldPropose // 2. The group is not big enough to create a proposal
    }
  },
  methods: {
    inviteeUpdate (e, index) {
      if (e.target.value.length > 0 && !this.ephemeral.isValid) {
        this.ephemeral.isValid = true
      }
      if (e.target.value.length === 0 && this.ephemeral.invitesCount === 1 && this.ephemeral.isValid) {
        this.ephemeral.isValid = false
      }
    },
    removeInvitee (index) {
      this.ephemeral.invitesCount -= 1
      this.form.invitees.splice(index, 1)
    },
    addInviteeSlot (e) {
      this.ephemeral.invitesCount += 1
      Vue.nextTick(() => {
        const inviteeSlots = this.$refs.fieldset.getElementsByTagName('label')
        const newInviteeSlot = inviteeSlots[inviteeSlots.length - 1]
        newInviteeSlot && newInviteeSlot.focus()
      })
    },
    async generateInviteImmediately () {
      const groupId = this.currentGroupId
      for (const invitee of this.form.invitees) {
        try {
          const inviteCreated = await createInvite({
            contractID: groupId,
            invitee,
            creatorID: this.ourIdentityContractId,
            expires: this.groupSettings.inviteExpiryProposal
          })

          await sbp('gi.actions/group/invite', {
            contractID: groupId,
            data: inviteCreated
          })
        } catch (err) {
          // TODO: add a logic to present the error in the UI
          console.error(\`Invite to \${invitee} failed to be sent!\`, err?.message)
          break
        }
      }
    },
    async submit (form) {
      if (this.shouldGenerateInvitesImmediately) {
        await this.generateInviteImmediately()

        this.$refs.modalTemplate.close()
      } else {
        let hasFailed = false
        // NOTE: All invitees proposals will expire at the exact same time.
        // That plus the proposal creator is what we'll use to know
        // which proposals should be displayed visually together.
        const expiresDateMs = Date.now() + this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].expires_ms

        for (const invitee of this.form.invitees) {
          const groupId = this.currentGroupId
          try {
            await sbp('gi.actions/group/proposal', {
              contractID: groupId,
              data: {
                proposalType: PROPOSAL_INVITE_MEMBER,
                proposalData: {
                  memberName: invitee,
                  reason: form.reason
                },
                votingRule: this.groupSettings.proposals[PROPOSAL_INVITE_MEMBER].rule,
                expires_date_ms: expiresDateMs
              }
            })
          } catch (e) {
            hasFailed = true
            console.error(\`Invite to \${invitee} failed to be sent!\`, e.message)
            break
          }
        }
        if (!hasFailed) {
          this.ephemeral.currentStep += 1 // Show Success step!
        }
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-fields-item {
  margin-bottom: 1rem;
}

.c-feedback {
  text-align: center;
}

.c-fieldset {
  .is-btn-shifted {
    display: none;
  }

  &.is-shifted {
    .is-btn-shifted {
      display: block;
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
var AddMembers_default = __vue_component__;
export {
  AddMembers_default as default
};
//# sourceMappingURL=AddMembers-2XGLAWXP-cached.js.map
