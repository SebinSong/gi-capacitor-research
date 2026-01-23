import {
  RULE_DISAGREEMENT,
  RULE_PERCENTAGE,
  VOTE_AGAINST,
  VOTE_FOR,
  getPercentFromDecimal,
  ruleType
} from "./chunk-XIIXXSLC-cached.js";
import {
  SliderContinuous_default
} from "./chunk-WUIM2XSU-cached.js";
import {
  literalOf,
  number,
  objectOf,
  unionOf
} from "./chunk-KTNZHYGC-cached.js";
import {
  DAYS_MILLIS
} from "./chunk-V3SQGGAF-cached.js";
import {
  BannerSimple_default,
  TransitionExpand_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  PROPOSAL_GENERIC,
  PROPOSAL_GROUP_SETTING_CHANGE,
  PROPOSAL_INVITE_MEMBER,
  PROPOSAL_PROPOSAL_SETTING_CHANGE,
  PROPOSAL_REMOVE_MEMBER,
  PROPOSAL_RESULT,
  STATUS_FAILED,
  STATUS_PASSED
} from "./chunk-UYGYRQRQ-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/model/contracts/shared/voting/proposals.js
function notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height }) {
  delete state.proposals[proposalHash];
  esm_default(
    "gi.contracts/group/pushSideEffect",
    contractID,
    ["gi.contracts/group/makeNotificationWhenProposalClosed", state, contractID, meta, height, proposalHash, proposal]
  );
  esm_default(
    "gi.contracts/group/pushSideEffect",
    contractID,
    ["gi.contracts/group/archiveProposal", contractID, proposalHash, proposal]
  );
}
var proposalSettingsType = objectOf({
  rule: ruleType,
  expires_ms: number,
  ruleSettings: objectOf({
    [RULE_PERCENTAGE]: objectOf({ threshold: number }),
    [RULE_DISAGREEMENT]: objectOf({ threshold: number })
  })
});
function voteAgainst(state, { meta, data, contractID, height }) {
  const { proposalHash } = data;
  const proposal = state.proposals[proposalHash];
  proposal.status = STATUS_FAILED;
  esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_AGAINST, data);
  notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
}
var proposalDefaults = {
  rule: RULE_PERCENTAGE,
  expires_ms: 14 * DAYS_MILLIS,
  ruleSettings: {
    [RULE_PERCENTAGE]: { threshold: 0.66 },
    [RULE_DISAGREEMENT]: { threshold: 1 }
  }
};
var proposals = {
  [PROPOSAL_INVITE_MEMBER]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.payload = data.passPayload;
      proposal.status = STATUS_PASSED;
      const forMessage = { ...message, data: data.passPayload };
      await esm_default("gi.contracts/group/invite/process", forMessage, state);
      esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_FOR, data);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_REMOVE_MEMBER]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash, passPayload } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      proposal.payload = passPayload;
      const messageData = proposal.data.proposalData;
      const forMessage = { ...message, data: messageData, proposalHash };
      await esm_default("gi.contracts/group/removeMember/process", forMessage, state);
      esm_default(
        "gi.contracts/group/pushSideEffect",
        contractID,
        ["gi.contracts/group/removeMember/sideEffect", forMessage]
      );
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_GROUP_SETTING_CHANGE]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      const { setting, proposedValue } = proposal.data.proposalData;
      const forMessage = {
        ...message,
        data: { [setting]: proposedValue },
        proposalHash
      };
      await esm_default("gi.contracts/group/updateSettings/process", forMessage, state);
      esm_default(
        "gi.contracts/group/pushSideEffect",
        contractID,
        ["gi.contracts/group/updateSettings/sideEffect", forMessage]
      );
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_PROPOSAL_SETTING_CHANGE]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: async function(state, message) {
      const { data, contractID, meta, height } = message;
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      const forMessage = {
        ...message,
        data: proposal.data.proposalData,
        proposalHash
      };
      await esm_default("gi.contracts/group/updateAllVotingRules/process", forMessage, state);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  },
  [PROPOSAL_GENERIC]: {
    defaults: proposalDefaults,
    [VOTE_FOR]: function(state, { data, contractID, meta, height }) {
      const { proposalHash } = data;
      const proposal = state.proposals[proposalHash];
      proposal.status = STATUS_PASSED;
      esm_default("okTurtles.events/emit", PROPOSAL_RESULT, state, VOTE_FOR, data);
      notifyAndArchiveProposal({ state, proposalHash, proposal, contractID, meta, height });
    },
    [VOTE_AGAINST]: voteAgainst
  }
};
var proposals_default = proposals;
var proposalType = unionOf(...Object.keys(proposals).map((k) => literalOf(k)));

// frontend/views/components/VotingRulesInput.vue
var SUPERMAJORITY = 0.6;
var __vue_script__ = {
  name: "VotingRulesInput",
  components: {
    BannerSimple: BannerSimple_default,
    SliderContinuous: SliderContinuous_default,
    TransitionExpand: TransitionExpand_default
  },
  props: {
    rule: {
      type: String,
      validator: (rule) => [RULE_PERCENTAGE, RULE_DISAGREEMENT].includes(rule)
    },
    value: [String, Number]
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        sliderLabel: L("What percentage of members need to agree to pass a proposal?"),
        sliderMin: 1,
        sliderMax: 100,
        sliderUnit: "%"
      },
      [RULE_DISAGREEMENT]: {
        sliderLabel: L('"No" votes required to block a proposal'),
        sliderMin: 1,
        sliderMax: 60,
        sliderUnit: ""
      }
    },
    ephemeral: {
      sliderClass: ""
    }
  }),
  created() {
    this.ephemeral.sliderClass = this.warnMajority ? "is-warning" : "";
  },
  watch: {
    value(value) {
      this.ephemeral.sliderClass = this.warnMajority ? "is-warning" : "";
    }
  },
  computed: {
    sliderValue() {
      if (this.rule === RULE_PERCENTAGE) {
        return getPercentFromDecimal(this.value);
      }
      return this.value;
    },
    warnMajority() {
      return this.rule === RULE_PERCENTAGE && this.value < SUPERMAJORITY;
    }
  },
  methods: {
    handleInput(e) {
      const value = this.rule === RULE_PERCENTAGE ? e.target.value / 100 : e.target.value;
      this.$emit("update", value);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("slider-continuous", {
        staticClass: "c-slider",
        class: _vm.ephemeral.sliderClass,
        attrs: {
          uid: _vm.rule,
          label: _vm.config[_vm.rule].sliderLabel,
          min: _vm.config[_vm.rule].sliderMin,
          max: _vm.config[_vm.rule].sliderMax,
          unit: _vm.config[_vm.rule].sliderUnit,
          value: _vm.sliderValue
        },
        on: { input: _vm.handleInput }
      }),
      _c("transition-expand", [
        _vm.warnMajority ? _c(
          "div",
          [
            _c(
              "banner-simple",
              { staticClass: "c-banner", attrs: { severity: "warning" } },
              [
                _c(
                  "i18n",
                  {
                    attrs: {
                      args: {
                        a_: '<a class="link" href="https://groupincome.org/2016/09/deprecating-mays-theorem/#when-majority-rule-can-harm" target="_blank">',
                        _a: "</a>"
                      }
                    }
                  },
                  [
                    _vm._v(
                      "The percentage value you are choosing is most likely too low for a decision that can have a potentially significant impact on a person's life. Please consider using a {a_}supermajority threshold{_a}."
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        ) : _vm._e()
      ])
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-2634638b_0", { source: ".c-slider.is-warning[data-v-2634638b]  .slider {\n  color: var(--warning_0);\n}\n.c-banner[data-v-2634638b] {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=VotingRulesInput.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/VotingRulesInput.vue", "VotingRulesInput.vue"], "names": [], "mappings": "AAgGA;EACA,uBAAA;AC/FA;ADmGA;EACA,kBAAA;AChGA;;AAEA,+CAA+C", "file": "VotingRulesInput.vue", "sourcesContent": [`<template lang='pug'>
  div
    slider-continuous.c-slider(
      :class='ephemeral.sliderClass'
      :uid='rule'
      :label='config[rule].sliderLabel'
      :min='config[rule].sliderMin'
      :max='config[rule].sliderMax'
      :unit='config[rule].sliderUnit'
      :value='sliderValue'
      @input='handleInput'
    )

    transition-expand
      // inner el has paddings. A wrap is needed for a smooth transition.
      div(v-if='warnMajority')
        banner-simple.c-banner(severity='warning')
          i18n(
            :args='{ a_:\`<a class="link" href="https://groupincome.org/2016/09/deprecating-mays-theorem/#when-majority-rule-can-harm" target="_blank">\`, _a: "</a>" }'
          ) The percentage value you are choosing is most likely too low for a decision that can have a potentially significant impact on a person's life. Please consider using a {a_}supermajority threshold{_a}.
</template>

<script>
import { L } from '../../../frontend/common/common.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getPercentFromDecimal } from '../../../frontend/model/contracts/shared/voting/rules.js'
import BannerSimple from '../../../frontend/views/components/banners/BannerSimple.vue'
import SliderContinuous from '../../../frontend/views/components/SliderContinuous.vue'
import TransitionExpand from '../../../frontend/views/components/TransitionExpand.vue'

const SUPERMAJORITY = 0.60

export default ({
  name: 'VotingRulesInput',
  components: {
    BannerSimple,
    SliderContinuous,
    TransitionExpand
  },
  props: {
    rule: {
      type: String,
      validator: (rule) => [RULE_PERCENTAGE, RULE_DISAGREEMENT].includes(rule)
    },
    value: [String, Number]
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        sliderLabel: L('What percentage of members need to agree to pass a proposal?'),
        sliderMin: 1,
        sliderMax: 100,
        sliderUnit: '%'
      },
      [RULE_DISAGREEMENT]: {
        sliderLabel: L('"No" votes required to block a proposal'),
        sliderMin: 1,
        sliderMax: 60,
        sliderUnit: ''
      }
    },
    ephemeral: {
      sliderClass: ''
    }
  }),
  created () {
    this.ephemeral.sliderClass = this.warnMajority ? 'is-warning' : ''
  },
  watch: {
    value (value) {
      this.ephemeral.sliderClass = this.warnMajority ? 'is-warning' : ''
    }
  },
  computed: {
    sliderValue () {
      if (this.rule === RULE_PERCENTAGE) {
        return getPercentFromDecimal(this.value)
      }
      return this.value
    },
    warnMajority () {
      return this.rule === RULE_PERCENTAGE && this.value < SUPERMAJORITY
    }
  },
  methods: {
    handleInput (e) {
      const value = this.rule === RULE_PERCENTAGE ? e.target.value / 100 : e.target.value
      this.$emit('update', value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-slider {
  &.is-warning ::v-deep .slider {
    color: $warning_0;
  }
}

.c-banner {
  margin-top: 1.5rem;
}
</style>
`, ".c-slider.is-warning ::v-deep .slider {\n  color: var(--warning_0);\n}\n\n.c-banner {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=VotingRulesInput.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-2634638b";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  div
    slider-continuous.c-slider(
      :class='ephemeral.sliderClass'
      :uid='rule'
      :label='config[rule].sliderLabel'
      :min='config[rule].sliderMin'
      :max='config[rule].sliderMax'
      :unit='config[rule].sliderUnit'
      :value='sliderValue'
      @input='handleInput'
    )

    transition-expand
      // inner el has paddings. A wrap is needed for a smooth transition.
      div(v-if='warnMajority')
        banner-simple.c-banner(severity='warning')
          i18n(
            :args='{ a_:\`<a class="link" href="https://groupincome.org/2016/09/deprecating-mays-theorem/#when-majority-rule-can-harm" target="_blank">\`, _a: "</a>" }'
          ) The percentage value you are choosing is most likely too low for a decision that can have a potentially significant impact on a person's life. Please consider using a {a_}supermajority threshold{_a}.
</template>

<script>
import { L } from '../../../frontend/common/common.js'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getPercentFromDecimal } from '../../../frontend/model/contracts/shared/voting/rules.js'
import BannerSimple from '../../../frontend/views/components/banners/BannerSimple.vue'
import SliderContinuous from '../../../frontend/views/components/SliderContinuous.vue'
import TransitionExpand from '../../../frontend/views/components/TransitionExpand.vue'

const SUPERMAJORITY = 0.60

export default ({
  name: 'VotingRulesInput',
  components: {
    BannerSimple,
    SliderContinuous,
    TransitionExpand
  },
  props: {
    rule: {
      type: String,
      validator: (rule) => [RULE_PERCENTAGE, RULE_DISAGREEMENT].includes(rule)
    },
    value: [String, Number]
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        sliderLabel: L('What percentage of members need to agree to pass a proposal?'),
        sliderMin: 1,
        sliderMax: 100,
        sliderUnit: '%'
      },
      [RULE_DISAGREEMENT]: {
        sliderLabel: L('"No" votes required to block a proposal'),
        sliderMin: 1,
        sliderMax: 60,
        sliderUnit: ''
      }
    },
    ephemeral: {
      sliderClass: ''
    }
  }),
  created () {
    this.ephemeral.sliderClass = this.warnMajority ? 'is-warning' : ''
  },
  watch: {
    value (value) {
      this.ephemeral.sliderClass = this.warnMajority ? 'is-warning' : ''
    }
  },
  computed: {
    sliderValue () {
      if (this.rule === RULE_PERCENTAGE) {
        return getPercentFromDecimal(this.value)
      }
      return this.value
    },
    warnMajority () {
      return this.rule === RULE_PERCENTAGE && this.value < SUPERMAJORITY
    }
  },
  methods: {
    handleInput (e) {
      const value = this.rule === RULE_PERCENTAGE ? e.target.value / 100 : e.target.value
      this.$emit('update', value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-slider {
  &.is-warning ::v-deep .slider {
    color: $warning_0;
  }
}

.c-banner {
  margin-top: 1.5rem;
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
var VotingRulesInput_default = __vue_component__;

export {
  proposalDefaults,
  proposals_default,
  VotingRulesInput_default
};
//# sourceMappingURL=chunk-YAAJQAKL-cached.js.map
