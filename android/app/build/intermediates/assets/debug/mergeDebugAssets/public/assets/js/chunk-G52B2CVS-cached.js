import {
  RULE_DISAGREEMENT,
  RULE_PERCENTAGE,
  VOTE_AGAINST,
  VOTE_FOR,
  getPercentFromDecimal
} from "./chunk-XIIXXSLC-cached.js";
import {
  buildInvitationUrl
} from "./chunk-EPK24SZY-cached.js";
import {
  LinkToCopy_default
} from "./chunk-U5MBT6RH-cached.js";
import {
  INVITE_STATUS
} from "./chunk-F2DYOYGG-cached.js";
import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  TABLET
} from "./chunk-532VGDFI-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  PROPOSAL_GENERIC,
  PROPOSAL_GROUP_SETTING_CHANGE,
  PROPOSAL_INVITE_MEMBER,
  PROPOSAL_PROPOSAL_SETTING_CHANGE,
  PROPOSAL_REMOVE_MEMBER,
  STATUS_CANCELLED,
  STATUS_EXPIRED,
  STATUS_FAILED,
  STATUS_OPEN,
  STATUS_PASSED
} from "./chunk-UYGYRQRQ-cached.js";
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

// frontend/views/containers/proposals/ProposalVoteOptions.vue
var __vue_script__ = {
  name: "Vote",
  props: {
    proposalHash: String
  },
  components: {
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      ephemeral: {
        changingVote: false
      }
    };
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "ourIdentityContractId",
      "currentGroupState",
      "groupSettings",
      "currentIdentityState"
    ]),
    proposal() {
      return this.currentGroupState.proposals[this.proposalHash];
    },
    voteStatus() {
      const humanStatus = {
        [VOTE_FOR]: L("yes"),
        [VOTE_AGAINST]: L("no")
      };
      return humanStatus[this.proposal.votes[this.ourIdentityContractId]];
    },
    meta() {
      return this.proposal.meta;
    },
    type() {
      return this.proposal.data.proposalType;
    },
    data() {
      return this.proposal.data.proposalData;
    },
    isToRemoveMe() {
      return this.type === PROPOSAL_REMOVE_MEMBER && this.data.memberID === this.ourIdentityContractId;
    },
    hadVoted() {
      return this.proposal.votes[this.ourIdentityContractId];
    },
    ownProposal() {
      return this.ourIdentityContractId === this.proposal.creatorID;
    },
    refVoteMsg() {
      return this.$parent.$refs.voteMsg;
    }
  },
  methods: {
    startChangingVote() {
      this.ephemeral.changingVote = true;
    },
    async voteFor() {
      if (!confirm(L("Are you sure you want to vote yes?")) || this.proposal.votes[this.ourIdentityContractId] === VOTE_FOR) {
        return null;
      }
      this.ephemeral.changingVote = false;
      try {
        this.refVoteMsg.clean();
        const proposalHash = this.proposalHash;
        await esm_default("gi.actions/group/proposalVote", {
          contractID: this.currentGroupId,
          data: { vote: VOTE_FOR, proposalHash }
        });
      } catch (e) {
        console.error("ProposalVoteOptions voteFor failed:", e);
        this.refVoteMsg.danger(e.message);
      }
    },
    async voteAgainst() {
      if (!confirm(L("Are you sure you want to vote no?")) || this.proposal.votes[this.ourIdentityContractId] === VOTE_AGAINST) {
        return null;
      }
      this.ephemeral.changingVote = false;
      try {
        this.refVoteMsg.clean();
        await esm_default("gi.actions/group/proposalVote", {
          contractID: this.currentGroupId,
          data: { vote: VOTE_AGAINST, proposalHash: this.proposalHash }
        });
      } catch (e) {
        console.error("ProposalVoteOptions voteAgainst failed:", e);
        this.refVoteMsg.danger(e.message);
      }
    },
    async cancelProposal() {
      if (!confirm(L("Are you sure you want to cancel this proposal?"))) {
        return null;
      }
      try {
        this.refVoteMsg.clean();
        await esm_default("gi.actions/group/proposalCancel", {
          contractID: this.currentGroupId,
          data: { proposalHash: this.proposalHash }
        });
      } catch (e) {
        console.error("ProposalVoteOptions cancelProposal failed:", e);
        this.refVoteMsg.danger(e.message);
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.isToRemoveMe ? _c("div", { staticClass: "c-ctas" }, [
    !_vm.hadVoted || _vm.ephemeral.changingVote ? _c(
      "div",
      { staticClass: "buttons c-options" },
      [
        _c(
          "button-submit",
          {
            staticClass: "is-outlined is-small is-success",
            attrs: { "data-test": "voteFor" },
            on: { click: _vm.voteFor }
          },
          [_vm._v(_vm._s(_vm.L("Vote yes")))]
        ),
        _c(
          "button-submit",
          {
            staticClass: "is-outlined is-small is-danger",
            attrs: { "data-test": "voteAgainst" },
            on: { click: _vm.voteAgainst }
          },
          [_vm._v(_vm._s(_vm.L("Vote no")))]
        )
      ],
      1
    ) : _c(
      "div",
      { staticClass: "buttons" },
      [
        _vm.ownProposal ? _c(
          "button-submit",
          {
            staticClass: "is-outlined is-small",
            attrs: { "data-test": "cancelProposal" },
            on: { click: _vm.cancelProposal }
          },
          [_vm._v(_vm._s(_vm.L("Cancel proposal")))]
        ) : _c(
          "p",
          {
            staticClass: "has-text-1",
            attrs: { "data-test": "voted" }
          },
          [
            _vm._v(
              _vm._s(
                _vm.L("You voted {voteStatus}", {
                  voteStatus: _vm.voteStatus
                })
              ) + ".\n\xA0"
            ),
            _c(
              "i18n",
              {
                staticClass: "link",
                attrs: { tag: "button" },
                on: { click: _vm.startChangingVote }
              },
              [_vm._v("Change vote.")]
            )
          ],
          1
        )
      ],
      1
    )
  ]) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-1bc5698b_0", { source: ".c-ctas[data-v-1bc5698b] {\n  grid-area: actions;\n}\n@media screen and (max-width: 768px) {\n.c-ctas[data-v-1bc5698b] {\n    flex: auto;\n    margin: 1rem 1rem 1rem 0;\n}\n.c-ctas .buttons[data-v-1bc5698b] {\n    justify-content: flex-end;\n    gap: 1rem;\n}\n.c-ctas button[data-v-1bc5698b] {\n    flex-grow: 1;\n    margin-right: 0;\n}\n}\n.buttons[data-v-1bc5698b] {\n  margin-top: 0;\n}\n@media screen and (min-width: 769px), print {\n.c-options[data-v-1bc5698b] {\n    flex-wrap: nowrap;\n}\n}\n.c-error[data-v-1bc5698b] {\n  margin-top: 0.25rem;\n  text-align: right;\n}\n\n/*# sourceMappingURL=ProposalVoteOptions.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/ProposalVoteOptions.vue", "ProposalVoteOptions.vue"], "names": [], "mappings": "AAqJA;EACA,kBAAA;ACpJA;AACA;ADkJA;IAGA,UAAA;IACA,wBAAA;AClJE;ADoJF;IACA,yBAAA;IACA,SAAA;AClJE;ADqJF;IACA,YAAA;IACA,eAAA;ACnJE;AACF;ADuJA;EACA,aAAA;ACpJA;AAEA;ADqJA;IAEA,iBAAA;ACpJE;AACF;ADuJA;EACA,mBAAA;EACA,iBAAA;ACpJA;;AAEA,kDAAkD", "file": "ProposalVoteOptions.vue", "sourcesContent": [`<template lang='pug'>
.c-ctas(v-if='!isToRemoveMe')
  .buttons.c-options(v-if='!hadVoted || ephemeral.changingVote')
    button-submit.is-outlined.is-small.is-success(
      @click='voteFor'
      data-test='voteFor'
    ) {{ L('Vote yes') }}

    button-submit.is-outlined.is-small.is-danger(
      @click='voteAgainst'
      data-test='voteAgainst'
    ) {{ L('Vote no') }}
  .buttons(v-else)
    button-submit.is-outlined.is-small(
      v-if='ownProposal'
      @click='cancelProposal'
      data-test='cancelProposal'
    ) {{ L('Cancel proposal') }}
    p.has-text-1(v-else data-test='voted')
      | {{ L('You voted {voteStatus}', { voteStatus }) }}.
      | &nbsp;
      i18n.link(tag='button' @click='startChangingVote') Change vote.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { VOTE_FOR, VOTE_AGAINST } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { PROPOSAL_REMOVE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'Vote',
  props: {
    proposalHash: String
  },
  components: {
    ButtonSubmit
  },
  data () {
    return {
      ephemeral: {
        changingVote: false
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'ourIdentityContractId',
      'currentGroupState',
      'groupSettings',
      'currentIdentityState'
    ]),
    proposal () {
      return this.currentGroupState.proposals[this.proposalHash]
    },
    voteStatus () {
      const humanStatus = {
        [VOTE_FOR]: L('yes'),
        [VOTE_AGAINST]: L('no')
      }
      return humanStatus[this.proposal.votes[this.ourIdentityContractId]]
    },
    meta () {
      return this.proposal.meta
    },
    type () {
      return this.proposal.data.proposalType
    },
    data () {
      return this.proposal.data.proposalData
    },
    isToRemoveMe () {
      return this.type === PROPOSAL_REMOVE_MEMBER && this.data.memberID === this.ourIdentityContractId
    },
    hadVoted () {
      return this.proposal.votes[this.ourIdentityContractId]
    },
    ownProposal () {
      return this.ourIdentityContractId === this.proposal.creatorID
    },
    refVoteMsg () {
      return this.$parent.$refs.voteMsg
    }
  },
  methods: {
    startChangingVote () {
      this.ephemeral.changingVote = true
    },
    async voteFor () {
      // Avoid redundant vote from "Change vote" if already voted FOR before
      if (!confirm(L('Are you sure you want to vote yes?')) || this.proposal.votes[this.ourIdentityContractId] === VOTE_FOR) {
        return null
      }
      this.ephemeral.changingVote = false
      try {
        this.refVoteMsg.clean()
        const proposalHash = this.proposalHash

        await sbp('gi.actions/group/proposalVote', {
          contractID: this.currentGroupId,
          data: { vote: VOTE_FOR, proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions voteFor failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    },
    async voteAgainst () {
      // Avoid redundant vote from "Change vote" if already voted AGAINST before
      if (!confirm(L('Are you sure you want to vote no?')) || this.proposal.votes[this.ourIdentityContractId] === VOTE_AGAINST) {
        return null
      }
      this.ephemeral.changingVote = false
      try {
        this.refVoteMsg.clean()
        await sbp('gi.actions/group/proposalVote', {
          contractID: this.currentGroupId,
          data: { vote: VOTE_AGAINST, proposalHash: this.proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions voteAgainst failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    },
    async cancelProposal () {
      if (!confirm(L('Are you sure you want to cancel this proposal?'))) {
        return null
      }
      try {
        this.refVoteMsg.clean()
        await sbp('gi.actions/group/proposalCancel', {
          contractID: this.currentGroupId, data: { proposalHash: this.proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions cancelProposal failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-ctas {
  grid-area: actions;
  @include phone {
    flex: auto;
    margin: 1rem 1rem 1rem 0;

    .buttons {
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      flex-grow: 1;
      margin-right: 0;
    }
  }
}

.buttons {
  margin-top: 0;
}

.c-options {
  @include tablet {
    flex-wrap: nowrap;
  }
}

.c-error {
  margin-top: 0.25rem;
  text-align: right;
}
</style>
`, ".c-ctas {\n  grid-area: actions;\n}\n@media screen and (max-width: 768px) {\n  .c-ctas {\n    flex: auto;\n    margin: 1rem 1rem 1rem 0;\n  }\n  .c-ctas .buttons {\n    justify-content: flex-end;\n    gap: 1rem;\n  }\n  .c-ctas button {\n    flex-grow: 1;\n    margin-right: 0;\n  }\n}\n\n.buttons {\n  margin-top: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-options {\n    flex-wrap: nowrap;\n  }\n}\n\n.c-error {\n  margin-top: 0.25rem;\n  text-align: right;\n}\n\n/*# sourceMappingURL=ProposalVoteOptions.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-1bc5698b";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-ctas(v-if='!isToRemoveMe')
  .buttons.c-options(v-if='!hadVoted || ephemeral.changingVote')
    button-submit.is-outlined.is-small.is-success(
      @click='voteFor'
      data-test='voteFor'
    ) {{ L('Vote yes') }}

    button-submit.is-outlined.is-small.is-danger(
      @click='voteAgainst'
      data-test='voteAgainst'
    ) {{ L('Vote no') }}
  .buttons(v-else)
    button-submit.is-outlined.is-small(
      v-if='ownProposal'
      @click='cancelProposal'
      data-test='cancelProposal'
    ) {{ L('Cancel proposal') }}
    p.has-text-1(v-else data-test='voted')
      | {{ L('You voted {voteStatus}', { voteStatus }) }}.
      | &nbsp;
      i18n.link(tag='button' @click='startChangingVote') Change vote.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { VOTE_FOR, VOTE_AGAINST } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { PROPOSAL_REMOVE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'Vote',
  props: {
    proposalHash: String
  },
  components: {
    ButtonSubmit
  },
  data () {
    return {
      ephemeral: {
        changingVote: false
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'ourIdentityContractId',
      'currentGroupState',
      'groupSettings',
      'currentIdentityState'
    ]),
    proposal () {
      return this.currentGroupState.proposals[this.proposalHash]
    },
    voteStatus () {
      const humanStatus = {
        [VOTE_FOR]: L('yes'),
        [VOTE_AGAINST]: L('no')
      }
      return humanStatus[this.proposal.votes[this.ourIdentityContractId]]
    },
    meta () {
      return this.proposal.meta
    },
    type () {
      return this.proposal.data.proposalType
    },
    data () {
      return this.proposal.data.proposalData
    },
    isToRemoveMe () {
      return this.type === PROPOSAL_REMOVE_MEMBER && this.data.memberID === this.ourIdentityContractId
    },
    hadVoted () {
      return this.proposal.votes[this.ourIdentityContractId]
    },
    ownProposal () {
      return this.ourIdentityContractId === this.proposal.creatorID
    },
    refVoteMsg () {
      return this.$parent.$refs.voteMsg
    }
  },
  methods: {
    startChangingVote () {
      this.ephemeral.changingVote = true
    },
    async voteFor () {
      // Avoid redundant vote from "Change vote" if already voted FOR before
      if (!confirm(L('Are you sure you want to vote yes?')) || this.proposal.votes[this.ourIdentityContractId] === VOTE_FOR) {
        return null
      }
      this.ephemeral.changingVote = false
      try {
        this.refVoteMsg.clean()
        const proposalHash = this.proposalHash

        await sbp('gi.actions/group/proposalVote', {
          contractID: this.currentGroupId,
          data: { vote: VOTE_FOR, proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions voteFor failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    },
    async voteAgainst () {
      // Avoid redundant vote from "Change vote" if already voted AGAINST before
      if (!confirm(L('Are you sure you want to vote no?')) || this.proposal.votes[this.ourIdentityContractId] === VOTE_AGAINST) {
        return null
      }
      this.ephemeral.changingVote = false
      try {
        this.refVoteMsg.clean()
        await sbp('gi.actions/group/proposalVote', {
          contractID: this.currentGroupId,
          data: { vote: VOTE_AGAINST, proposalHash: this.proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions voteAgainst failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    },
    async cancelProposal () {
      if (!confirm(L('Are you sure you want to cancel this proposal?'))) {
        return null
      }
      try {
        this.refVoteMsg.clean()
        await sbp('gi.actions/group/proposalCancel', {
          contractID: this.currentGroupId, data: { proposalHash: this.proposalHash }
        })
      } catch (e) {
        console.error('ProposalVoteOptions cancelProposal failed:', e)
        this.refVoteMsg.danger(e.message)
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-ctas {
  grid-area: actions;
  @include phone {
    flex: auto;
    margin: 1rem 1rem 1rem 0;

    .buttons {
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      flex-grow: 1;
      margin-right: 0;
    }
  }
}

.buttons {
  margin-top: 0;
}

.c-options {
  @include tablet {
    flex-wrap: nowrap;
  }
}

.c-error {
  margin-top: 0.25rem;
  text-align: right;
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
var ProposalVoteOptions_default = __vue_component__;

// frontend/views/containers/proposals/ProposalItem.vue
var __vue_script__2 = {
  name: "ProposalItem",
  props: {
    proposalHash: String,
    proposalObject: Object
  },
  data() {
    return {
      config: {
        reasonMaxLength: window.innerWidth < TABLET ? 50 : 170
      },
      ephemeral: {
        isReasonHidden: true
      }
    };
  },
  components: {
    BannerScoped: BannerScoped_default,
    ProposalVoteOptions: ProposalVoteOptions_default,
    AvatarUser: AvatarUser_default,
    Avatar: Avatar_default,
    LinkToCopy: LinkToCopy_default,
    Tooltip: Tooltip_default
  },
  computed: {
    ...mapGetters([
      "currentGroupState",
      "groupMembersCount",
      "userDisplayNameFromID",
      "ourIdentityContractId",
      "ourUserDisplayName"
    ]),
    ...mapState(["currentGroupId"]),
    statuses() {
      return { STATUS_OPEN, STATUS_PASSED, STATUS_FAILED, STATUS_EXPIRED, STATUS_CANCELLED };
    },
    proposal() {
      return this.proposalObject || this.currentGroupState.proposals[this.proposalHash];
    },
    subtitle() {
      const creatorID = this.proposal.creatorID;
      const username = this.userDisplayNameFromID(creatorID);
      const isOwnProposal = creatorID === this.ourIdentityContractId;
      if (this.proposal.data.proposalData.automated) {
        return L("Group Income system is proposing");
      }
      if (this.proposal.status === STATUS_OPEN) {
        return isOwnProposal ? L("You are proposing") : L("{username} is proposing", { username });
      }
      return isOwnProposal ? L("You proposed") : L("{username} proposed", { username });
    },
    proposalType() {
      return this.proposal.data.proposalType;
    },
    isOurProposal() {
      return this.proposal.creatorID === this.ourIdentityContractId;
    },
    isToRemoveMe() {
      return this.proposalType === PROPOSAL_REMOVE_MEMBER && this.proposal.data.proposalData.memberID === this.ourIdentityContractId;
    },
    typeDescription() {
      return {
        [PROPOSAL_INVITE_MEMBER]: () => L("Add {user} to group.", {
          user: this.proposal.data.proposalData.memberName
        }),
        [PROPOSAL_REMOVE_MEMBER]: () => {
          const user = this.userDisplayNameFromID(this.proposal.data.proposalData.memberID);
          const automated = this.proposal.data.proposalData.automated ? `[${L("Automated")}] ` : "";
          return this.isToRemoveMe ? L("{automated}Remove {user} (you) from the group.", { user, automated }) : L("{automated}Remove {user} from the group.", { user, automated });
        },
        [PROPOSAL_GROUP_SETTING_CHANGE]: () => {
          const { setting } = this.proposal.data.proposalData;
          const variablesMap = {
            "mincomeAmount": () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData;
              return {
                setting: L("mincome"),
                currentValue: this.withGroupCurrency(currentValue),
                proposedValue: this.withGroupCurrency(proposedValue)
              };
            },
            "distributionDate": () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData;
              return {
                setting: L("distribution date"),
                currentValue: humanDate(currentValue, { month: "long", year: "numeric", day: "numeric" }),
                proposedValue: humanDate(proposedValue, { month: "long", year: "numeric", day: "numeric" })
              };
            }
          }[setting]();
          return L("Change {setting} from {currentValue} to {proposedValue}", variablesMap);
        },
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: () => {
          const { current, ruleName, ruleThreshold } = this.proposal.data.proposalData;
          if (current.ruleName === ruleName) {
            return {
              [RULE_DISAGREEMENT]: () => L("Change disagreement number from {X} to {N}.", {
                X: current.ruleThreshold,
                N: ruleThreshold
              }),
              [RULE_PERCENTAGE]: () => L("Change percentage based from {X} to {N}.", {
                X: getPercentFromDecimal(current.ruleThreshold) + "%",
                N: getPercentFromDecimal(ruleThreshold) + "%"
              })
            }[ruleName]();
          }
          return {
            [RULE_DISAGREEMENT]: () => L("Change from a percentage based voting system to a disagreement based one, with a maximum of {N} \u201Cno\u201D votes.", {
              N: ruleThreshold
            }),
            [RULE_PERCENTAGE]: () => L("Change from a disagreement based voting system to a percentage based one, with minimum agreement of {percent}.", {
              percent: getPercentFromDecimal(ruleThreshold) + "%"
            })
          }[ruleName]();
        },
        [PROPOSAL_GENERIC]: () => this.proposal.data.proposalData.name
      }[this.proposalType]();
    },
    statusDescription() {
      const votes = Object.values(this.proposal.votes);
      const format = { year: "numeric", month: "long", day: "numeric" };
      const yay = votes.filter((v) => v === VOTE_FOR).length;
      const nay = votes.filter((v) => v === VOTE_AGAINST).length;
      const total = yay + nay;
      switch (this.proposal.status) {
        case STATUS_OPEN: {
          const excludeVotes = this.proposalType === PROPOSAL_REMOVE_MEMBER ? 1 : 0;
          const date = humanDate(this.proposal.data.expires_date_ms, format);
          return L("{count} out of {total} members voted. Expires on {date}.", {
            count: votes.length,
            total: this.groupMembersCount - excludeVotes,
            date
          });
        }
        case STATUS_FAILED: {
          const date = humanDate(this.proposal.dateClosed, format);
          return L("Proposal rejected on {date} with {nay} against out of {total} total votes.", { nay, total, date });
        }
        case STATUS_CANCELLED: {
          return L("Proposal cancelled.");
        }
        case STATUS_PASSED: {
          const date = humanDate(this.proposal.dateClosed, format);
          return L("Proposal accepted on {date} with {yay} in favor out of {total} total votes.", { yay, total, date });
        }
        case STATUS_EXPIRED: {
          const date = humanDate(this.proposal.data.expires_date_ms, format);
          return L("Expired on {date}", { date });
        }
        default:
          return `status: ${this.proposal.status}`;
      }
    },
    iconClass() {
      const type = {
        [PROPOSAL_INVITE_MEMBER]: "icon-user-plus",
        [PROPOSAL_REMOVE_MEMBER]: "icon-user-minus",
        [PROPOSAL_GROUP_SETTING_CHANGE]: "icon-coins",
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: "icon-vote-yea",
        [PROPOSAL_GENERIC]: "icon-envelope-open-text"
      };
      const status = {
        [STATUS_OPEN]: "has-background-primary has-text-primary",
        [STATUS_PASSED]: "icon-check has-background-success has-text-success",
        [STATUS_FAILED]: "icon-times has-background-danger has-text-danger",
        [STATUS_CANCELLED]: "has-background-general has-text-1",
        [STATUS_EXPIRED]: "has-background-general has-text-1"
      };
      if ([STATUS_PASSED, STATUS_FAILED].includes(this.proposal.status)) {
        return `${status[this.proposal.status]} icon-round`;
      }
      return `${type[this.proposalType]} ${status[this.proposal.status]} icon-round`;
    },
    shouldTruncateReason() {
      const reason = this.proposal.data.proposalData.reason;
      const threshold = 40;
      return reason.length > this.config.reasonMaxLength + threshold;
    },
    humanReason() {
      const reason = this.proposal.data.proposalData.reason;
      const maxlength = this.config.reasonMaxLength;
      if (this.ephemeral.isReasonHidden && this.shouldTruncateReason) {
        const charToTruncate = reason.charAt(maxlength - 1) === " " ? maxlength - 1 : maxlength;
        return `"${reason.substr(0, charToTruncate)}..."`;
      }
      return reason ? `"${reason}"` : "";
    },
    invitationLink() {
      if (this.proposalType === PROPOSAL_INVITE_MEMBER && this.proposal.status === STATUS_PASSED && this.isOurProposal) {
        const inviteKeyId = this.proposal.payload.inviteKeyId;
        if (this.currentGroupState._vm.invites?.[inviteKeyId]?.status === INVITE_STATUS.VALID && this.currentGroupState._vm.authorizedKeys?.[inviteKeyId] && this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight == null && this.currentGroupState._vm.invites[inviteKeyId].inviteSecret) {
          return buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, this.currentGroupState._vm.invites[inviteKeyId].inviteSecret, this.ourIdentityContractId);
        }
      }
      return false;
    },
    isExpiredInvitationLink() {
      const inviteKeyId = this.proposal.payload.inviteKeyId;
      if (this.currentGroupState._vm.invites[inviteKeyId]?.status !== INVITE_STATUS.VALID || // inviteKeyId should be present in authorizedKeys. If it's not, it's
      // an error but it also means that the invite cannot be used
      !this.currentGroupState._vm?.authorizedKeys?.[inviteKeyId] || // If _notAfterHeight is *not* undefined, it means that the key has been
      // revoked. Hence, it cannot be used
      this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight !== void 0 || // If the expiration date is less than the current date, it means that
      // the invite can no longer be used
      // Note: Using negative logic to allow for undefined expiry, which means
      // it never expires
      this.currentGroupState._vm.invites[inviteKeyId].expires < Date.now()) {
        return true;
      }
      return false;
    }
  },
  methods: {
    withGroupCurrency,
    toggleReason(e) {
      e.target.blur();
      this.ephemeral.isReasonHidden = !this.ephemeral.isReasonHidden;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    {
      staticClass: "c-item-wrapper",
      attrs: {
        "data-test": "proposalItem",
        "data-proposal-hash": _vm.proposalHash
      }
    },
    [
      _c("div", { staticClass: "c-item" }, [
        _c(
          "div",
          { staticClass: "c-main" },
          [
            _c(
              "div",
              { staticClass: "c-icons" },
              [
                _c("i", { class: _vm.iconClass }),
                this.proposal.data.proposalData.automated ? _c("avatar", {
                  staticClass: "c-avatar",
                  attrs: {
                    src: _vm.currentGroupState.settings.groupPicture
                  }
                }) : _c("avatar-user", {
                  staticClass: "c-avatar",
                  attrs: { contractID: _vm.proposal.creatorID, size: "xs" }
                })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "c-main-content" },
              [
                _c(
                  "p",
                  {
                    staticClass: "c-proposal-title has-text-bold",
                    attrs: { "data-test": "typeDescription" }
                  },
                  [
                    _vm._v(_vm._s(_vm.typeDescription)),
                    _vm.isToRemoveMe && _vm.proposal.status === _vm.statuses.STATUS_OPEN ? _c(
                      "tooltip",
                      {
                        staticClass: "c-tip",
                        attrs: {
                          direction: "top",
                          text: _vm.L("You cannot vote.")
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "button is-icon-smaller is-primary"
                          },
                          [_c("i", { staticClass: "icon-question" })]
                        )
                      ]
                    ) : _vm._e()
                  ],
                  1
                ),
                _c("p", {
                  directives: [
                    {
                      name: "safe-html",
                      rawName: "v-safe-html",
                      value: _vm.subtitle,
                      expression: "subtitle"
                    }
                  ],
                  staticClass: "c-content-title",
                  attrs: { "data-test": "title" }
                }),
                _c(
                  "p",
                  {
                    staticClass: "has-text-1",
                    class: {
                      "has-text-danger": _vm.proposal.status === _vm.statuses.STATUS_FAILED,
                      "has-text-success": _vm.proposal.status === _vm.statuses.STATUS_PASSED
                    },
                    attrs: { "data-test": "statusDescription" }
                  },
                  [_vm._v(_vm._s(_vm.statusDescription))]
                ),
                _vm.humanReason ? _c("div", { staticClass: "c-reason" }, [
                  _vm.humanReason ? _c("p", { staticClass: "has-text-1 c-reason-text" }, [
                    _vm._v(_vm._s(_vm.humanReason))
                  ]) : _vm._e(),
                  _vm._v("\xA0"),
                  _vm.shouldTruncateReason ? _c(
                    "button",
                    {
                      staticClass: "link",
                      attrs: { type: "button" },
                      on: { click: _vm.toggleReason }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.ephemeral.isReasonHidden ? _vm.L("Read more") : _vm.L("Hide")
                        )
                      )
                    ]
                  ) : _vm._e()
                ]) : _vm._e(),
                _c("banner-scoped", {
                  ref: "voteMsg",
                  attrs: { "data-test": "voteMsg" }
                }),
                _vm.invitationLink ? _c(
                  "p",
                  {
                    staticClass: "c-sendLink",
                    attrs: { "data-test": "sendLink" }
                  },
                  [
                    _c(
                      "i18n",
                      {
                        attrs: {
                          args: {
                            user: _vm.proposal.data.proposalData.memberName
                          }
                        }
                      },
                      [
                        _vm._v(
                          "Please send the following link to {user} so they can join the group:"
                        )
                      ]
                    ),
                    _c("link-to-copy", {
                      staticClass: "c-invite-link",
                      attrs: { link: _vm.invitationLink, tag: "p" }
                    }),
                    _vm.isExpiredInvitationLink ? _c("i18n", { staticClass: "has-text-danger" }, [
                      _vm._v("Expired")
                    ]) : _vm._e()
                  ],
                  1
                ) : _vm._e()
              ],
              1
            ),
            _vm.proposal.status === _vm.statuses.STATUS_OPEN ? _c("proposal-vote-options", {
              attrs: { proposalHash: _vm.proposalHash }
            }) : _vm._e()
          ],
          1
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-c834f6ca_0", { source: '.c-item-wrapper[data-v-c834f6ca] {\n  margin-top: 2rem;\n}\n.c-item-wrapper[data-v-c834f6ca]:not(:last-child) {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--general_1);\n}\n.c-item[data-v-c834f6ca] {\n  display: flex;\n  align-items: flex-start;\n}\n@media screen and (max-width: 768px) {\n.c-item[data-v-c834f6ca] {\n    flex-wrap: wrap;\n}\n}\n.c-main[data-v-c834f6ca] {\n  grid-template-columns: auto 1fr auto;\n  display: grid;\n  grid-template-areas: "icons content actions";\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n.c-main[data-v-c834f6ca] {\n    grid-template-areas: "icons content content" "icons actions actions";\n}\n}\n.c-main-content[data-v-c834f6ca] {\n  flex-grow: 1;\n}\n.c-main .c-content-title[data-v-c834f6ca] {\n  word-break: break-word;\n}\n.c-tip[data-v-c834f6ca] {\n  margin-left: 0.25rem;\n}\n.c-sendLink[data-v-c834f6ca] {\n  border-radius: 0.25rem;\n  background-color: var(--general_2);\n  padding: 1.1875rem 1rem;\n  margin-top: 1rem;\n  display: grid;\n}\n@media screen and (min-width: 769px), print {\n.c-sendLink[data-v-c834f6ca] {\n    padding: 1rem;\n}\n}\n.c-sendLink .c-invite-link[data-v-c834f6ca]  .c-copy-button {\n  background: var(--background_0);\n}\n@media screen and (max-width: 768px) {\n.icon-round[data-v-c834f6ca] {\n    margin-left: 0.5rem;\n}\n}\n.c-icons[data-v-c834f6ca] {\n  position: relative;\n  align-self: flex-start;\n  grid-area: icons;\n}\n.c-icons .icon-round[data-v-c834f6ca] {\n  width: 3.75rem;\n  height: 3.75rem;\n  display: grid;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n.c-icons .icon-round[data-v-c834f6ca] {\n    width: 2.75rem;\n    height: 2.75rem;\n}\n}\n.c-icons .c-avatar[data-v-c834f6ca] {\n  position: absolute;\n  bottom: -0.2rem;\n  right: 1rem;\n}\n@media screen and (max-width: 768px) {\n.c-icons .c-avatar[data-v-c834f6ca] {\n    display: none;\n}\n}\n.c-reason[data-v-c834f6ca] {\n  position: relative;\n  margin-top: 1rem;\n}\n.c-reason-text[data-v-c834f6ca] {\n  display: inline;\n}\n.c-proposal-title[data-v-c834f6ca],\n.c-reason[data-v-c834f6ca] {\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=ProposalItem.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/proposals/ProposalItem.vue", "ProposalItem.vue"], "names": [], "mappings": "AAkWA;EACA,gBAAA;ACjWA;ADmWA;EACA,oBAAA;EACA,yCAAA;ACjWA;ADqWA;EACA,aAAA;EACA,uBAAA;AClWA;AACA;AD+VA;IAKA,eAAA;ACjWE;AACF;ADoWA;EACA,oCAAA;EACA,aAAA;EACA,4CAAA;EACA,WAAA;ACjWA;AACA;AD4VA;IAOA,oEAAA;AChWE;AACF;ADkWA;EACA,YAAA;AChWA;ADmWA;EACA,sBAAA;ACjWA;ADqWA;EACA,oBAAA;AClWA;ADqWA;EACA,sBAAA;EACA,kCAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;AClWA;AACA;AD4VA;IAQA,aAAA;ACjWE;AACF;ADoWA;EACA,+BAAA;AClWA;AAEA;ADqWA;IAEA,mBAAA;ACpWE;AACF;ADuWA;EACA,kBAAA;EACA,sBAAA;EACA,gBAAA;ACpWA;ADsWA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;ACpWA;AACA;AD+VA;IAOA,cAAA;IACA,eAAA;ACnWE;AACF;ADsWA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;ACpWA;AACA;ADgWA;IAMA,aAAA;ACnWE;AACF;ADuWA;EACA,kBAAA;EACA,gBAAA;ACpWA;ADsWA;EACA,eAAA;ACpWA;ADwWA;;EAEA,sBAAA;ACrWA;;AAEA,2CAA2C", "file": "ProposalItem.vue", "sourcesContent": [`<template lang='pug'>
li.c-item-wrapper(data-test='proposalItem' :data-proposal-hash='proposalHash')
  .c-item
    .c-main
      .c-icons
        i(:class='iconClass')
        avatar.c-avatar(
          v-if='this.proposal.data.proposalData.automated'
          :src='currentGroupState.settings.groupPicture'
        )
        avatar-user.c-avatar(
          v-else
          :contractID='proposal.creatorID' size='xs'
        )

      .c-main-content
        p.c-proposal-title.has-text-bold(data-test='typeDescription')
          | {{typeDescription}}
          tooltip.c-tip(
            v-if='isToRemoveMe && proposal.status === statuses.STATUS_OPEN'
            direction='top'
            :text='L("You cannot vote.")'
          )
            .button.is-icon-smaller.is-primary
              i.icon-question

        p.c-content-title(data-test='title' v-safe-html='subtitle')

        p.has-text-1(
          :class='{ "has-text-danger": proposal.status === statuses.STATUS_FAILED, "has-text-success": proposal.status === statuses.STATUS_PASSED }'
          data-test='statusDescription'
        ) {{statusDescription}}

        .c-reason(v-if='humanReason')
          p.has-text-1.c-reason-text(v-if='humanReason') {{ humanReason }}
          | &nbsp;
          button.link(
            type='button'
            v-if='shouldTruncateReason'
            @click='toggleReason'
          ) {{ ephemeral.isReasonHidden ? L('Read more') : L('Hide') }}

        // Note: $refs.voteMsg is used by children ProposalVoteOptions
        banner-scoped(ref='voteMsg' data-test='voteMsg')
        p.c-sendLink(v-if='invitationLink' data-test='sendLink')
          i18n(
            :args='{ user: proposal.data.proposalData.memberName}'
          ) Please send the following link to {user} so they can join the group:

          link-to-copy.c-invite-link(
            :link='invitationLink'
            tag='p'
          )
          i18n.has-text-danger(
            v-if='isExpiredInvitationLink'
          ) Expired

      proposal-vote-options(
        v-if='proposal.status === statuses.STATUS_OPEN'
        :proposalHash='proposalHash'
      )
</template>

<script>
import { L } from '../../../../frontend/common/common.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalVoteOptions from '../../../../frontend/views/containers/proposals/ProposalVoteOptions.vue'
import {
  PROPOSAL_GENERIC,
  PROPOSAL_GROUP_SETTING_CHANGE,
  PROPOSAL_INVITE_MEMBER,
  PROPOSAL_PROPOSAL_SETTING_CHANGE,
  PROPOSAL_REMOVE_MEMBER,
  STATUS_CANCELLED,
  STATUS_EXPIRED,
  STATUS_FAILED,
  STATUS_OPEN,
  STATUS_PASSED
} from '../../../../frontend/model/contracts/shared/constants.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { RULE_DISAGREEMENT, RULE_PERCENTAGE, VOTE_AGAINST, VOTE_FOR, getPercentFromDecimal } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { TABLET } from '../../../../frontend/views/utils/breakpoints.js'
import { mapGetters, mapState } from 'vuex'
import { INVITE_STATUS } from '@chelonia/lib/constants'

export default ({
  name: 'ProposalItem',
  props: {
    proposalHash: String,
    proposalObject: Object
  },
  data () {
    return {
      config: {
        reasonMaxLength: window.innerWidth < TABLET ? 50 : 170
      },
      ephemeral: {
        isReasonHidden: true
      }
    }
  },
  components: {
    BannerScoped,
    ProposalVoteOptions,
    AvatarUser,
    Avatar,
    LinkToCopy,
    Tooltip
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'groupMembersCount',
      'userDisplayNameFromID',
      'ourIdentityContractId',
      'ourUserDisplayName'
    ]),
    ...mapState(['currentGroupId']),
    statuses () {
      return { STATUS_OPEN, STATUS_PASSED, STATUS_FAILED, STATUS_EXPIRED, STATUS_CANCELLED }
    },
    proposal () {
      return this.proposalObject || this.currentGroupState.proposals[this.proposalHash]
    },
    subtitle () {
      const creatorID = this.proposal.creatorID
      const username = this.userDisplayNameFromID(creatorID)
      const isOwnProposal = creatorID === this.ourIdentityContractId

      if (this.proposal.data.proposalData.automated) {
        return L('Group Income system is proposing')
      }
      if (this.proposal.status === STATUS_OPEN) {
        return isOwnProposal
          ? L('You are proposing')
          : L('{username} is proposing', { username })
      }

      // Note: In English, no matter the subject, the wording is the same,
      // but in other languages the wording is different (ex: Portuguese)
      return isOwnProposal
        ? L('You proposed')
        : L('{username} proposed', { username })
    },
    proposalType () {
      return this.proposal.data.proposalType
    },
    isOurProposal () {
      return this.proposal.creatorID === this.ourIdentityContractId
    },
    isToRemoveMe () {
      return this.proposalType === PROPOSAL_REMOVE_MEMBER && this.proposal.data.proposalData.memberID === this.ourIdentityContractId
    },
    typeDescription () {
      return {
        [PROPOSAL_INVITE_MEMBER]: () => L('Add {user} to group.', {
          user: this.proposal.data.proposalData.memberName
        }),
        [PROPOSAL_REMOVE_MEMBER]: () => {
          const user = this.userDisplayNameFromID(this.proposal.data.proposalData.memberID)
          const automated = this.proposal.data.proposalData.automated ? \`[\${L('Automated')}] \` : ''
          return this.isToRemoveMe
            ? L('{automated}Remove {user} (you) from the group.', { user, automated })
            : L('{automated}Remove {user} from the group.', { user, automated })
        },
        [PROPOSAL_GROUP_SETTING_CHANGE]: () => {
          const { setting } = this.proposal.data.proposalData
          // TODO layout for this type of proposal. Waiting for designs.
          const variablesMap = {
            'mincomeAmount': () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData

              return {
                setting: L('mincome'),
                currentValue: this.withGroupCurrency(currentValue),
                proposedValue: this.withGroupCurrency(proposedValue)
              }
            },
            'distributionDate': () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData

              return {
                setting: L('distribution date'),
                currentValue: humanDate(currentValue, { month: 'long', year: 'numeric', day: 'numeric' }),
                proposedValue: humanDate(proposedValue, { month: 'long', year: 'numeric', day: 'numeric' })
              }
            }
          }[setting]()

          return L('Change {setting} from {currentValue} to {proposedValue}', variablesMap)
        },
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: () => {
          const { current, ruleName, ruleThreshold } = this.proposal.data.proposalData

          if (current.ruleName === ruleName) {
            return {
              [RULE_DISAGREEMENT]: () => L('Change disagreement number from {X} to {N}.', {
                X: current.ruleThreshold,
                N: ruleThreshold
              }),
              [RULE_PERCENTAGE]: () => L('Change percentage based from {X} to {N}.', {
                X: getPercentFromDecimal(current.ruleThreshold) + '%',
                N: getPercentFromDecimal(ruleThreshold) + '%'
              })
            }[ruleName]()
          }

          return {
            [RULE_DISAGREEMENT]: () => L('Change from a percentage based voting system to a disagreement based one, with a maximum of {N} \u201Cno\u201D votes.', {
              N: ruleThreshold
            }),
            [RULE_PERCENTAGE]: () => L('Change from a disagreement based voting system to a percentage based one, with minimum agreement of {percent}.', {
              percent: getPercentFromDecimal(ruleThreshold) + '%'
            })
          }[ruleName]()
        },
        [PROPOSAL_GENERIC]: () => this.proposal.data.proposalData.name
      }[this.proposalType]()
    },
    statusDescription () {
      const votes = Object.values(this.proposal.votes)
      const format = { year: 'numeric', month: 'long', day: 'numeric' }
      const yay = votes.filter(v => v === VOTE_FOR).length
      const nay = votes.filter(v => v === VOTE_AGAINST).length
      const total = yay + nay
      switch (this.proposal.status) {
        case STATUS_OPEN: {
          const excludeVotes = this.proposalType === PROPOSAL_REMOVE_MEMBER ? 1 : 0
          const date = humanDate(this.proposal.data.expires_date_ms, format)
          return L('{count} out of {total} members voted. Expires on {date}.', {
            count: votes.length,
            total: this.groupMembersCount - excludeVotes,
            date
          })
        }
        case STATUS_FAILED: {
          const date = humanDate(this.proposal.dateClosed, format)
          return L('Proposal rejected on {date} with {nay} against out of {total} total votes.', { nay, total, date })
        }
        case STATUS_CANCELLED: {
          return L('Proposal cancelled.')
        }
        case STATUS_PASSED: {
          const date = humanDate(this.proposal.dateClosed, format)
          return L('Proposal accepted on {date} with {yay} in favor out of {total} total votes.', { yay, total, date })
        }
        case STATUS_EXPIRED: {
          const date = humanDate(this.proposal.data.expires_date_ms, format)
          return L('Expired on {date}', { date })
        }
        default:
          return \`status: \${this.proposal.status}\`
      }
    },
    iconClass () {
      const type = {
        [PROPOSAL_INVITE_MEMBER]: 'icon-user-plus',
        [PROPOSAL_REMOVE_MEMBER]: 'icon-user-minus',
        [PROPOSAL_GROUP_SETTING_CHANGE]: 'icon-coins',
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: 'icon-vote-yea',
        [PROPOSAL_GENERIC]: 'icon-envelope-open-text'
      }

      const status = {
        [STATUS_OPEN]: 'has-background-primary has-text-primary',
        [STATUS_PASSED]: 'icon-check has-background-success has-text-success',
        [STATUS_FAILED]: 'icon-times has-background-danger has-text-danger',
        [STATUS_CANCELLED]: 'has-background-general has-text-1',
        [STATUS_EXPIRED]: 'has-background-general has-text-1'
      }

      if ([STATUS_PASSED, STATUS_FAILED].includes(this.proposal.status)) {
        // Show the status icon, no matter the proposal type
        return \`\${status[this.proposal.status]} icon-round\`
      }

      return \`\${type[this.proposalType]} \${status[this.proposal.status]} icon-round\`
    },
    shouldTruncateReason () {
      const reason = this.proposal.data.proposalData.reason
      const threshold = 40 // avoid clicking "read more" and see only a few more characters.
      return reason.length > this.config.reasonMaxLength + threshold
    },
    humanReason () {
      const reason = this.proposal.data.proposalData.reason
      const maxlength = this.config.reasonMaxLength
      if (this.ephemeral.isReasonHidden && this.shouldTruncateReason) {
        // Prevent "..." to be added after an empty space. ex: "they would ..." -> "they would..."
        const charToTruncate = reason.charAt(maxlength - 1) === ' ' ? maxlength - 1 : maxlength
        return \`"\${reason.substr(0, charToTruncate)}..."\`
      }

      return reason ? \`"\${reason}"\` : ''
    },
    invitationLink () {
      if (this.proposalType === PROPOSAL_INVITE_MEMBER &&
        this.proposal.status === STATUS_PASSED &&
        this.isOurProposal
      ) {
        const inviteKeyId = this.proposal.payload.inviteKeyId
        // Display the link for (1) valid invites for which (2) there is a
        // corresponding authorizedKey for which (3) we have access to its
        // secret key
        if (
          this.currentGroupState._vm.invites?.[inviteKeyId]?.status === INVITE_STATUS.VALID &&
          this.currentGroupState._vm.authorizedKeys?.[inviteKeyId] &&
          this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight == null &&
          this.currentGroupState._vm.invites[inviteKeyId].inviteSecret
        ) {
          return buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, this.currentGroupState._vm.invites[inviteKeyId].inviteSecret, this.ourIdentityContractId)
        }
      }
      return false
    },
    isExpiredInvitationLink () {
      const inviteKeyId = this.proposal.payload.inviteKeyId
      if (
        this.currentGroupState._vm.invites[inviteKeyId]?.status !== INVITE_STATUS.VALID ||
        // inviteKeyId should be present in authorizedKeys. If it's not, it's
        // an error but it also means that the invite cannot be used
        !this.currentGroupState._vm?.authorizedKeys?.[inviteKeyId] ||
        // If _notAfterHeight is *not* undefined, it means that the key has been
        // revoked. Hence, it cannot be used
        this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight !== undefined ||
        // If the expiration date is less than the current date, it means that
        // the invite can no longer be used
        // Note: Using negative logic to allow for undefined expiry, which means
        // it never expires
        this.currentGroupState._vm.invites[inviteKeyId].expires < Date.now()
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    withGroupCurrency,
    toggleReason (e) {
      e.target.blur() // so the button doesnt remain focused (with black color).
      this.ephemeral.isReasonHidden = !this.ephemeral.isReasonHidden
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-item-wrapper {
  margin-top: 2rem;

  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid $general_1;
  }
}

.c-item {
  display: flex;
  align-items: flex-start;

  @include phone {
    flex-wrap: wrap;
  }
}

.c-main {
  grid-template-columns: auto 1fr auto;
  display: grid;
  grid-template-areas: "icons content actions";
  width: 100%;

  @include phone {
    grid-template-areas: "icons content content" "icons actions actions";
  }

  &-content {
    flex-grow: 1;
  }

  .c-content-title {
    word-break: break-word;
  }
}

.c-tip {
  margin-left: 0.25rem;
}

.c-sendLink {
  border-radius: 0.25rem;
  background-color: $general_2;
  padding: 1.1875rem 1rem;
  margin-top: 1rem;
  display: grid;

  @include tablet {
    padding: 1rem;
  }

  .c-invite-link {
    ::v-deep .c-copy-button {
      background: $background_0;
    }
  }
}

.icon-round {
  @include phone {
    margin-left: 0.5rem;
  }
}

.c-icons {
  position: relative;
  align-self: flex-start;
  grid-area: icons;

  .icon-round {
    width: 3.75rem;
    height: 3.75rem;
    display: grid;
    align-items: center;

    @include phone {
      width: 2.75rem;
      height: 2.75rem;
    }
  }

  .c-avatar {
    position: absolute;
    bottom: -0.2rem;
    right: 1rem;

    @include phone {
      display: none;
    }
  }
}

.c-reason {
  position: relative;
  margin-top: 1rem;

  &-text {
    display: inline;
  }
}

.c-proposal-title,
.c-reason {
  word-break: break-word;
}
</style>
`, '.c-item-wrapper {\n  margin-top: 2rem;\n}\n.c-item-wrapper:not(:last-child) {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--general_1);\n}\n\n.c-item {\n  display: flex;\n  align-items: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .c-item {\n    flex-wrap: wrap;\n  }\n}\n\n.c-main {\n  grid-template-columns: auto 1fr auto;\n  display: grid;\n  grid-template-areas: "icons content actions";\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  .c-main {\n    grid-template-areas: "icons content content" "icons actions actions";\n  }\n}\n.c-main-content {\n  flex-grow: 1;\n}\n.c-main .c-content-title {\n  word-break: break-word;\n}\n\n.c-tip {\n  margin-left: 0.25rem;\n}\n\n.c-sendLink {\n  border-radius: 0.25rem;\n  background-color: var(--general_2);\n  padding: 1.1875rem 1rem;\n  margin-top: 1rem;\n  display: grid;\n}\n@media screen and (min-width: 769px), print {\n  .c-sendLink {\n    padding: 1rem;\n  }\n}\n.c-sendLink .c-invite-link ::v-deep .c-copy-button {\n  background: var(--background_0);\n}\n\n@media screen and (max-width: 768px) {\n  .icon-round {\n    margin-left: 0.5rem;\n  }\n}\n\n.c-icons {\n  position: relative;\n  align-self: flex-start;\n  grid-area: icons;\n}\n.c-icons .icon-round {\n  width: 3.75rem;\n  height: 3.75rem;\n  display: grid;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  .c-icons .icon-round {\n    width: 2.75rem;\n    height: 2.75rem;\n  }\n}\n.c-icons .c-avatar {\n  position: absolute;\n  bottom: -0.2rem;\n  right: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-icons .c-avatar {\n    display: none;\n  }\n}\n\n.c-reason {\n  position: relative;\n  margin-top: 1rem;\n}\n.c-reason-text {\n  display: inline;\n}\n\n.c-proposal-title,\n.c-reason {\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=ProposalItem.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-c834f6ca";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
li.c-item-wrapper(data-test='proposalItem' :data-proposal-hash='proposalHash')
  .c-item
    .c-main
      .c-icons
        i(:class='iconClass')
        avatar.c-avatar(
          v-if='this.proposal.data.proposalData.automated'
          :src='currentGroupState.settings.groupPicture'
        )
        avatar-user.c-avatar(
          v-else
          :contractID='proposal.creatorID' size='xs'
        )

      .c-main-content
        p.c-proposal-title.has-text-bold(data-test='typeDescription')
          | {{typeDescription}}
          tooltip.c-tip(
            v-if='isToRemoveMe && proposal.status === statuses.STATUS_OPEN'
            direction='top'
            :text='L("You cannot vote.")'
          )
            .button.is-icon-smaller.is-primary
              i.icon-question

        p.c-content-title(data-test='title' v-safe-html='subtitle')

        p.has-text-1(
          :class='{ "has-text-danger": proposal.status === statuses.STATUS_FAILED, "has-text-success": proposal.status === statuses.STATUS_PASSED }'
          data-test='statusDescription'
        ) {{statusDescription}}

        .c-reason(v-if='humanReason')
          p.has-text-1.c-reason-text(v-if='humanReason') {{ humanReason }}
          | &nbsp;
          button.link(
            type='button'
            v-if='shouldTruncateReason'
            @click='toggleReason'
          ) {{ ephemeral.isReasonHidden ? L('Read more') : L('Hide') }}

        // Note: $refs.voteMsg is used by children ProposalVoteOptions
        banner-scoped(ref='voteMsg' data-test='voteMsg')
        p.c-sendLink(v-if='invitationLink' data-test='sendLink')
          i18n(
            :args='{ user: proposal.data.proposalData.memberName}'
          ) Please send the following link to {user} so they can join the group:

          link-to-copy.c-invite-link(
            :link='invitationLink'
            tag='p'
          )
          i18n.has-text-danger(
            v-if='isExpiredInvitationLink'
          ) Expired

      proposal-vote-options(
        v-if='proposal.status === statuses.STATUS_OPEN'
        :proposalHash='proposalHash'
      )
</template>

<script>
import { L } from '../../../../frontend/common/common.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalVoteOptions from '../../../../frontend/views/containers/proposals/ProposalVoteOptions.vue'
import {
  PROPOSAL_GENERIC,
  PROPOSAL_GROUP_SETTING_CHANGE,
  PROPOSAL_INVITE_MEMBER,
  PROPOSAL_PROPOSAL_SETTING_CHANGE,
  PROPOSAL_REMOVE_MEMBER,
  STATUS_CANCELLED,
  STATUS_EXPIRED,
  STATUS_FAILED,
  STATUS_OPEN,
  STATUS_PASSED
} from '../../../../frontend/model/contracts/shared/constants.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { RULE_DISAGREEMENT, RULE_PERCENTAGE, VOTE_AGAINST, VOTE_FOR, getPercentFromDecimal } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { TABLET } from '../../../../frontend/views/utils/breakpoints.js'
import { mapGetters, mapState } from 'vuex'
import { INVITE_STATUS } from '@chelonia/lib/constants'

export default ({
  name: 'ProposalItem',
  props: {
    proposalHash: String,
    proposalObject: Object
  },
  data () {
    return {
      config: {
        reasonMaxLength: window.innerWidth < TABLET ? 50 : 170
      },
      ephemeral: {
        isReasonHidden: true
      }
    }
  },
  components: {
    BannerScoped,
    ProposalVoteOptions,
    AvatarUser,
    Avatar,
    LinkToCopy,
    Tooltip
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'groupMembersCount',
      'userDisplayNameFromID',
      'ourIdentityContractId',
      'ourUserDisplayName'
    ]),
    ...mapState(['currentGroupId']),
    statuses () {
      return { STATUS_OPEN, STATUS_PASSED, STATUS_FAILED, STATUS_EXPIRED, STATUS_CANCELLED }
    },
    proposal () {
      return this.proposalObject || this.currentGroupState.proposals[this.proposalHash]
    },
    subtitle () {
      const creatorID = this.proposal.creatorID
      const username = this.userDisplayNameFromID(creatorID)
      const isOwnProposal = creatorID === this.ourIdentityContractId

      if (this.proposal.data.proposalData.automated) {
        return L('Group Income system is proposing')
      }
      if (this.proposal.status === STATUS_OPEN) {
        return isOwnProposal
          ? L('You are proposing')
          : L('{username} is proposing', { username })
      }

      // Note: In English, no matter the subject, the wording is the same,
      // but in other languages the wording is different (ex: Portuguese)
      return isOwnProposal
        ? L('You proposed')
        : L('{username} proposed', { username })
    },
    proposalType () {
      return this.proposal.data.proposalType
    },
    isOurProposal () {
      return this.proposal.creatorID === this.ourIdentityContractId
    },
    isToRemoveMe () {
      return this.proposalType === PROPOSAL_REMOVE_MEMBER && this.proposal.data.proposalData.memberID === this.ourIdentityContractId
    },
    typeDescription () {
      return {
        [PROPOSAL_INVITE_MEMBER]: () => L('Add {user} to group.', {
          user: this.proposal.data.proposalData.memberName
        }),
        [PROPOSAL_REMOVE_MEMBER]: () => {
          const user = this.userDisplayNameFromID(this.proposal.data.proposalData.memberID)
          const automated = this.proposal.data.proposalData.automated ? \`[\${L('Automated')}] \` : ''
          return this.isToRemoveMe
            ? L('{automated}Remove {user} (you) from the group.', { user, automated })
            : L('{automated}Remove {user} from the group.', { user, automated })
        },
        [PROPOSAL_GROUP_SETTING_CHANGE]: () => {
          const { setting } = this.proposal.data.proposalData
          // TODO layout for this type of proposal. Waiting for designs.
          const variablesMap = {
            'mincomeAmount': () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData

              return {
                setting: L('mincome'),
                currentValue: this.withGroupCurrency(currentValue),
                proposedValue: this.withGroupCurrency(proposedValue)
              }
            },
            'distributionDate': () => {
              const { currentValue, proposedValue } = this.proposal.data.proposalData

              return {
                setting: L('distribution date'),
                currentValue: humanDate(currentValue, { month: 'long', year: 'numeric', day: 'numeric' }),
                proposedValue: humanDate(proposedValue, { month: 'long', year: 'numeric', day: 'numeric' })
              }
            }
          }[setting]()

          return L('Change {setting} from {currentValue} to {proposedValue}', variablesMap)
        },
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: () => {
          const { current, ruleName, ruleThreshold } = this.proposal.data.proposalData

          if (current.ruleName === ruleName) {
            return {
              [RULE_DISAGREEMENT]: () => L('Change disagreement number from {X} to {N}.', {
                X: current.ruleThreshold,
                N: ruleThreshold
              }),
              [RULE_PERCENTAGE]: () => L('Change percentage based from {X} to {N}.', {
                X: getPercentFromDecimal(current.ruleThreshold) + '%',
                N: getPercentFromDecimal(ruleThreshold) + '%'
              })
            }[ruleName]()
          }

          return {
            [RULE_DISAGREEMENT]: () => L('Change from a percentage based voting system to a disagreement based one, with a maximum of {N} \u201Cno\u201D votes.', {
              N: ruleThreshold
            }),
            [RULE_PERCENTAGE]: () => L('Change from a disagreement based voting system to a percentage based one, with minimum agreement of {percent}.', {
              percent: getPercentFromDecimal(ruleThreshold) + '%'
            })
          }[ruleName]()
        },
        [PROPOSAL_GENERIC]: () => this.proposal.data.proposalData.name
      }[this.proposalType]()
    },
    statusDescription () {
      const votes = Object.values(this.proposal.votes)
      const format = { year: 'numeric', month: 'long', day: 'numeric' }
      const yay = votes.filter(v => v === VOTE_FOR).length
      const nay = votes.filter(v => v === VOTE_AGAINST).length
      const total = yay + nay
      switch (this.proposal.status) {
        case STATUS_OPEN: {
          const excludeVotes = this.proposalType === PROPOSAL_REMOVE_MEMBER ? 1 : 0
          const date = humanDate(this.proposal.data.expires_date_ms, format)
          return L('{count} out of {total} members voted. Expires on {date}.', {
            count: votes.length,
            total: this.groupMembersCount - excludeVotes,
            date
          })
        }
        case STATUS_FAILED: {
          const date = humanDate(this.proposal.dateClosed, format)
          return L('Proposal rejected on {date} with {nay} against out of {total} total votes.', { nay, total, date })
        }
        case STATUS_CANCELLED: {
          return L('Proposal cancelled.')
        }
        case STATUS_PASSED: {
          const date = humanDate(this.proposal.dateClosed, format)
          return L('Proposal accepted on {date} with {yay} in favor out of {total} total votes.', { yay, total, date })
        }
        case STATUS_EXPIRED: {
          const date = humanDate(this.proposal.data.expires_date_ms, format)
          return L('Expired on {date}', { date })
        }
        default:
          return \`status: \${this.proposal.status}\`
      }
    },
    iconClass () {
      const type = {
        [PROPOSAL_INVITE_MEMBER]: 'icon-user-plus',
        [PROPOSAL_REMOVE_MEMBER]: 'icon-user-minus',
        [PROPOSAL_GROUP_SETTING_CHANGE]: 'icon-coins',
        [PROPOSAL_PROPOSAL_SETTING_CHANGE]: 'icon-vote-yea',
        [PROPOSAL_GENERIC]: 'icon-envelope-open-text'
      }

      const status = {
        [STATUS_OPEN]: 'has-background-primary has-text-primary',
        [STATUS_PASSED]: 'icon-check has-background-success has-text-success',
        [STATUS_FAILED]: 'icon-times has-background-danger has-text-danger',
        [STATUS_CANCELLED]: 'has-background-general has-text-1',
        [STATUS_EXPIRED]: 'has-background-general has-text-1'
      }

      if ([STATUS_PASSED, STATUS_FAILED].includes(this.proposal.status)) {
        // Show the status icon, no matter the proposal type
        return \`\${status[this.proposal.status]} icon-round\`
      }

      return \`\${type[this.proposalType]} \${status[this.proposal.status]} icon-round\`
    },
    shouldTruncateReason () {
      const reason = this.proposal.data.proposalData.reason
      const threshold = 40 // avoid clicking "read more" and see only a few more characters.
      return reason.length > this.config.reasonMaxLength + threshold
    },
    humanReason () {
      const reason = this.proposal.data.proposalData.reason
      const maxlength = this.config.reasonMaxLength
      if (this.ephemeral.isReasonHidden && this.shouldTruncateReason) {
        // Prevent "..." to be added after an empty space. ex: "they would ..." -> "they would..."
        const charToTruncate = reason.charAt(maxlength - 1) === ' ' ? maxlength - 1 : maxlength
        return \`"\${reason.substr(0, charToTruncate)}..."\`
      }

      return reason ? \`"\${reason}"\` : ''
    },
    invitationLink () {
      if (this.proposalType === PROPOSAL_INVITE_MEMBER &&
        this.proposal.status === STATUS_PASSED &&
        this.isOurProposal
      ) {
        const inviteKeyId = this.proposal.payload.inviteKeyId
        // Display the link for (1) valid invites for which (2) there is a
        // corresponding authorizedKey for which (3) we have access to its
        // secret key
        if (
          this.currentGroupState._vm.invites?.[inviteKeyId]?.status === INVITE_STATUS.VALID &&
          this.currentGroupState._vm.authorizedKeys?.[inviteKeyId] &&
          this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight == null &&
          this.currentGroupState._vm.invites[inviteKeyId].inviteSecret
        ) {
          return buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, this.currentGroupState._vm.invites[inviteKeyId].inviteSecret, this.ourIdentityContractId)
        }
      }
      return false
    },
    isExpiredInvitationLink () {
      const inviteKeyId = this.proposal.payload.inviteKeyId
      if (
        this.currentGroupState._vm.invites[inviteKeyId]?.status !== INVITE_STATUS.VALID ||
        // inviteKeyId should be present in authorizedKeys. If it's not, it's
        // an error but it also means that the invite cannot be used
        !this.currentGroupState._vm?.authorizedKeys?.[inviteKeyId] ||
        // If _notAfterHeight is *not* undefined, it means that the key has been
        // revoked. Hence, it cannot be used
        this.currentGroupState._vm.authorizedKeys[inviteKeyId]._notAfterHeight !== undefined ||
        // If the expiration date is less than the current date, it means that
        // the invite can no longer be used
        // Note: Using negative logic to allow for undefined expiry, which means
        // it never expires
        this.currentGroupState._vm.invites[inviteKeyId].expires < Date.now()
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    withGroupCurrency,
    toggleReason (e) {
      e.target.blur() // so the button doesnt remain focused (with black color).
      this.ephemeral.isReasonHidden = !this.ephemeral.isReasonHidden
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-item-wrapper {
  margin-top: 2rem;

  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid $general_1;
  }
}

.c-item {
  display: flex;
  align-items: flex-start;

  @include phone {
    flex-wrap: wrap;
  }
}

.c-main {
  grid-template-columns: auto 1fr auto;
  display: grid;
  grid-template-areas: "icons content actions";
  width: 100%;

  @include phone {
    grid-template-areas: "icons content content" "icons actions actions";
  }

  &-content {
    flex-grow: 1;
  }

  .c-content-title {
    word-break: break-word;
  }
}

.c-tip {
  margin-left: 0.25rem;
}

.c-sendLink {
  border-radius: 0.25rem;
  background-color: $general_2;
  padding: 1.1875rem 1rem;
  margin-top: 1rem;
  display: grid;

  @include tablet {
    padding: 1rem;
  }

  .c-invite-link {
    ::v-deep .c-copy-button {
      background: $background_0;
    }
  }
}

.icon-round {
  @include phone {
    margin-left: 0.5rem;
  }
}

.c-icons {
  position: relative;
  align-self: flex-start;
  grid-area: icons;

  .icon-round {
    width: 3.75rem;
    height: 3.75rem;
    display: grid;
    align-items: center;

    @include phone {
      width: 2.75rem;
      height: 2.75rem;
    }
  }

  .c-avatar {
    position: absolute;
    bottom: -0.2rem;
    right: 1rem;

    @include phone {
      display: none;
    }
  }
}

.c-reason {
  position: relative;
  margin-top: 1rem;

  &-text {
    display: inline;
  }
}

.c-proposal-title,
.c-reason {
  word-break: break-word;
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
var ProposalItem_default = __vue_component__2;

export {
  ProposalItem_default
};
//# sourceMappingURL=chunk-G52B2CVS-cached.js.map
