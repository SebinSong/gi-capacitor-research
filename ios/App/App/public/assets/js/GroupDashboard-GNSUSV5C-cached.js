import {
  AddIncomeDetailsWidget_default
} from "./chunk-L43YVAJX-cached.js";
import {
  PageSection_default
} from "./chunk-36LKA4A3-cached.js";
import {
  ButtonDropdownMenu_default,
  conversation_default,
  vote_default
} from "./chunk-AJMLFVUA-cached.js";
import {
  CalloutCard_default
} from "./chunk-3EJJCCO3-cached.js";
import "./chunk-5WH7KRTS-cached.js";
import "./chunk-LA43UFR3-cached.js";
import {
  ProposalItem_default
} from "./chunk-G52B2CVS-cached.js";
import {
  PaymentsMixin_default
} from "./chunk-LNZF2O32-cached.js";
import {
  Bars_default,
  GraphLegendItem_default
} from "./chunk-PCDU7CB5-cached.js";
import {
  Progress_default
} from "./chunk-OMAB4AXT-cached.js";
import "./chunk-6TVZJD4C-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-EPK24SZY-cached.js";
import "./chunk-U5MBT6RH-cached.js";
import "./chunk-LUECJCV2-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import {
  PAYMENT_NOT_RECEIVED
} from "./chunk-5AEIP7HX-cached.js";
import "./chunk-F2DYOYGG-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-A3KNU2XZ-cached.js";
import {
  DAYS_MILLIS,
  addTimeToDate,
  compareISOTimestamps,
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import "./chunk-K33NK7LD-cached.js";
import {
  GroupMembersTooltipPending_default
} from "./chunk-ZB6G6ME6-cached.js";
import {
  toPercent
} from "./chunk-PSB6JKOA-cached.js";
import {
  ProfileCard_default
} from "./chunk-GDHKI2YN-cached.js";
import "./chunk-3T5W4UPP-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  MAX_HISTORY_PERIODS,
  PROPOSAL_ARCHIVED,
  STATUS_OPEN,
  STREAK_MISSED_PAYMENTS,
  STREAK_MISSED_PROPSAL_VOTE,
  STREAK_NOT_LOGGED_IN_DAYS,
  STREAK_ON_TIME_PAYMENTS
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  INCOME_DETAILS_UPDATE,
  OPEN_MODAL
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

// frontend/views/containers/dashboard/StartInvitingWidget.vue
var __vue_script__ = {
  name: "StartInvitingWidget",
  components: {
    CalloutCard: CalloutCard_default,
    SvgConversation: conversation_default
  },
  data() {
    return {
      SvgConversation: conversation_default
    };
  },
  methods: {
    openModal() {
      esm_default("okTurtles.events/emit", OPEN_MODAL, "InvitationLinkModal");
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "callout-card",
    {
      attrs: {
        isCard: true,
        title: _vm.L("Invite members to your group"),
        svg: _vm.SvgConversation
      }
    },
    [
      _c("i18n", { attrs: { tag: "p" } }, [
        _vm._v("Start sharing your resources with the ones who matter to you!")
      ]),
      _c("i18n", { attrs: { tag: "button" }, on: { click: _vm.openModal } }, [
        _vm._v("Add members")
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
  component.__file = `<template lang="pug">
  callout-card(
    :isCard='true'
    :title='L("Invite members to your group")'
    :svg='SvgConversation'
  )
    i18n(tag='p') Start sharing your resources with the ones who matter to you!
    i18n(tag='button' @click='openModal') Add members
</template>

<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import SvgConversation from '../../../../frontend/assets/svgs/conversation.svg'

export default ({
  name: 'StartInvitingWidget',
  components: {
    CalloutCard,
    SvgConversation
  },
  data () {
    return {
      SvgConversation
    }
  },
  methods: {
    openModal () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'InvitationLinkModal')
    }
  }
}: Object)
<\/script>
`;
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
var StartInvitingWidget_default = __vue_component__;

// frontend/views/components/graphs/Overview.vue
var __vue_script__2 = {
  name: "Overview",
  components: {
    GraphLegendItem: GraphLegendItem_default,
    Bars: Bars_default
  },
  computed: {
    ...mapGetters([
      "groupProfiles",
      "groupSettings",
      "groupIncomeDistribution"
    ]),
    mincome() {
      return this.groupSettings.mincomeAmount;
    },
    distribution() {
      return this.groupIncomeDistribution;
    },
    // Extract members incomes
    members() {
      let list = {};
      if (this.distribution.length === 0) {
        Object.keys(this.groupProfiles).forEach((memberID) => {
          const profile = this.groupProfiles[memberID];
          if (profile.incomeDetailsType) {
            list[memberID] = {
              amount: 0,
              total: profile.incomeDetailsType === "incomeAmount" ? profile.incomeAmount - this.mincome : profile.pledgeAmount
            };
          }
        });
      } else {
        this.distribution.forEach((distribution) => {
          list = this.addToList(list, distribution.fromMemberID, distribution.amount);
          list = this.addToList(list, distribution.toMemberID, -distribution.amount);
        });
      }
      list = Object.values(list).sort((a, b) => a.total - b.total);
      return list;
    },
    totals() {
      return this.members.map((a) => a.total);
    },
    amounts() {
      return this.members.map((a) => a.amount);
    },
    totalCovered() {
      const pledgePeople = this.amounts.filter((member) => member > 0);
      return pledgePeople.length > 0 ? pledgePeople.reduce((total, amount) => total + amount) : 0;
    },
    surplus() {
      const needyPeople = this.totals.filter((member) => member < 0);
      const totalNeeded = needyPeople.length > 0 ? Math.abs(needyPeople.reduce((total, amount) => total + amount)) : 0;
      const pledgePeople = this.totals.filter((member) => member > 0);
      const totalPledge = pledgePeople.length > 0 ? Math.abs(pledgePeople.reduce((total, amount) => total + amount)) : 0;
      return totalPledge - totalNeeded;
    }
  },
  methods: {
    withGroupCurrency,
    addToList(list, id, amount) {
      const existingUser = list[id];
      if (typeof existingUser !== "undefined") {
        list[id].amount = existingUser.amount + amount;
      } else {
        list[id] = {
          amount,
          total: amount > 0 ? this.groupProfiles[id].pledgeAmount : this.groupProfiles[id].incomeAmount - this.mincome
        };
      }
      return list;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h2" } }, [
        _vm._v("This month's overview")
      ]),
      _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
        _vm._v("Group members and their pledges")
      ]),
      _c(
        "div",
        { staticClass: "c-chart" },
        [
          _c(
            "ul",
            { staticClass: "c-chart-legends" },
            [
              _c(
                "graph-legend-item",
                {
                  attrs: {
                    amount: _vm.withGroupCurrency(_vm.totalCovered),
                    color: "warning-solid",
                    variant: "inline"
                  }
                },
                [_vm._v(_vm._s(_vm.L("Total covered")))]
              ),
              _c(
                "graph-legend-item",
                {
                  attrs: {
                    amount: _vm.withGroupCurrency(_vm.totalCovered),
                    color: "primary-solid",
                    variant: "inline"
                  }
                },
                [_vm._v(_vm._s(_vm.L("Total given")))]
              ),
              _vm.surplus > 0 ? _c(
                "graph-legend-item",
                {
                  attrs: {
                    amount: _vm.withGroupCurrency(_vm.surplus),
                    color: "success-solid",
                    variant: "inline"
                  }
                },
                [_vm._v(_vm._s(_vm.L("Surplus")))]
              ) : _c(
                "graph-legend-item",
                {
                  attrs: {
                    amount: _vm.withGroupCurrency(Math.abs(_vm.surplus)),
                    color: "danger-solid",
                    variant: "inline"
                  }
                },
                [_vm._v(_vm._s(_vm.L("Total needed")))]
              )
            ],
            1
          ),
          _c("bars", { attrs: { totals: _vm.totals, members: _vm.members } })
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-b812027a_0", { source: "@media screen and (max-width: 768px) {\n.c-chart[data-v-b812027a] {\n    display: flex;\n    flex-direction: column-reverse;\n    padding-top: 1.5rem;\n}\n}\n.c-chart-legends[data-v-b812027a] {\n  display: flex;\n}\n@media screen and (max-width: 768px) {\n.c-chart-legends[data-v-b812027a] {\n    display: flex;\n    flex-direction: column;\n}\n}\n\n/*# sourceMappingURL=Overview.vue.map */", map: { "version": 3, "sources": ["Overview.vue", "frontend/views/components/graphs/Overview.vue"], "names": [], "mappings": "AAAA;ACwIA;IAEA,aAAA;IACA,8BAAA;IACA,mBAAA;ADvIE;AACF;AC0IA;EACA,aAAA;ADvIA;AACA;ACqIA;IAIA,aAAA;IACA,sBAAA;ADtIE;AACF;;AAEA,uCAAuC", "file": "Overview.vue", "sourcesContent": ["@media screen and (max-width: 768px) {\n  .c-chart {\n    display: flex;\n    flex-direction: column-reverse;\n    padding-top: 1.5rem;\n  }\n}\n\n.c-chart-legends {\n  display: flex;\n}\n@media screen and (max-width: 768px) {\n  .c-chart-legends {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=Overview.vue.map */", `<template lang='pug'>
div
  i18n.is-title-3(
    tag='h2'
  ) This month's overview

  i18n.has-text-1(tag='p') Group members and their pledges
  .c-chart
    ul.c-chart-legends
      graph-legend-item(
        :amount='withGroupCurrency(totalCovered)'
        color='warning-solid'
        variant='inline'
      ) {{ L('Total covered') }}

      graph-legend-item(
        :amount='withGroupCurrency(totalCovered)'
        color='primary-solid'
        variant='inline'
      ) {{ L('Total given') }}

      graph-legend-item(
        v-if='surplus > 0'
        :amount='withGroupCurrency(surplus)'
        color='success-solid'
        variant='inline'
      ) {{ L('Surplus') }}

      graph-legend-item(
        v-else
        :amount='withGroupCurrency(Math.abs(surplus))'
        color='danger-solid'
        variant='inline'
      ) {{ L('Total needed') }}

    bars(:totals='totals' :members='members')
</template>

<script>
import { mapGetters } from 'vuex'
import { GraphLegendItem, Bars } from '../../../../frontend/views/components/graphs/index.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'Overview',
  components: {
    GraphLegendItem,
    Bars
  },
  computed: {
    ...mapGetters([
      'groupProfiles',
      'groupSettings',
      'groupIncomeDistribution'
    ]),
    mincome () {
      return this.groupSettings.mincomeAmount
    },
    distribution () {
      return this.groupIncomeDistribution
    },
    // Extract members incomes
    members () {
      // Create object that contain what people need / pledge and what people receive / give
      let list = {}
      // TODO: cleanup/improve this code
      if (this.distribution.length === 0) {
        Object.keys(this.groupProfiles).forEach(memberID => {
          const profile = this.groupProfiles[memberID]
          if (profile.incomeDetailsType) {
            list[memberID] = {
              amount: 0,
              total: profile.incomeDetailsType === 'incomeAmount' ? profile.incomeAmount - this.mincome : profile.pledgeAmount
            }
          }
        })
      } else {
        this.distribution.forEach(distribution => {
          list = this.addToList(list, distribution.fromMemberID, distribution.amount)
          list = this.addToList(list, distribution.toMemberID, -distribution.amount)
        })
      }
      // Sort object by need / pledge
      list = Object.values(list).sort((a, b) => a.total - b.total)
      return list
    },
    totals () {
      return this.members.map(a => a.total)
    },
    amounts () {
      return this.members.map(a => a.amount)
    },
    totalCovered () {
      const pledgePeople = this.amounts.filter(member => member > 0)
      return pledgePeople.length > 0
        ? pledgePeople.reduce((total, amount) => total + amount)
        : 0
    },
    surplus () {
      const needyPeople = this.totals.filter(member => member < 0)
      const totalNeeded = needyPeople.length > 0
        ? Math.abs(needyPeople.reduce((total, amount) => total + amount))
        : 0
      const pledgePeople = this.totals.filter(member => member > 0)
      const totalPledge = pledgePeople.length > 0
        ? Math.abs(pledgePeople.reduce((total, amount) => total + amount))
        : 0

      return totalPledge - totalNeeded
    }
  },
  methods: {
    withGroupCurrency,
    addToList (list, id, amount) {
      const existingUser = list[id]
      // Test if user already in the list
      if (typeof existingUser !== 'undefined') {
        list[id].amount = existingUser.amount + amount
      } else {
        // Add new user to the list
        list[id] = {
          amount: amount,
          total: amount > 0
            ? this.groupProfiles[id].pledgeAmount
            : this.groupProfiles[id].incomeAmount - this.mincome
        }
      }
      return list
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-chart {
  @include phone {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1.5rem;
  }
}

.c-chart-legends {
  display: flex;

  @include phone {
    display: flex;
    flex-direction: column;
  }
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-b812027a";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
div
  i18n.is-title-3(
    tag='h2'
  ) This month's overview

  i18n.has-text-1(tag='p') Group members and their pledges
  .c-chart
    ul.c-chart-legends
      graph-legend-item(
        :amount='withGroupCurrency(totalCovered)'
        color='warning-solid'
        variant='inline'
      ) {{ L('Total covered') }}

      graph-legend-item(
        :amount='withGroupCurrency(totalCovered)'
        color='primary-solid'
        variant='inline'
      ) {{ L('Total given') }}

      graph-legend-item(
        v-if='surplus > 0'
        :amount='withGroupCurrency(surplus)'
        color='success-solid'
        variant='inline'
      ) {{ L('Surplus') }}

      graph-legend-item(
        v-else
        :amount='withGroupCurrency(Math.abs(surplus))'
        color='danger-solid'
        variant='inline'
      ) {{ L('Total needed') }}

    bars(:totals='totals' :members='members')
</template>

<script>
import { mapGetters } from 'vuex'
import { GraphLegendItem, Bars } from '../../../../frontend/views/components/graphs/index.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'Overview',
  components: {
    GraphLegendItem,
    Bars
  },
  computed: {
    ...mapGetters([
      'groupProfiles',
      'groupSettings',
      'groupIncomeDistribution'
    ]),
    mincome () {
      return this.groupSettings.mincomeAmount
    },
    distribution () {
      return this.groupIncomeDistribution
    },
    // Extract members incomes
    members () {
      // Create object that contain what people need / pledge and what people receive / give
      let list = {}
      // TODO: cleanup/improve this code
      if (this.distribution.length === 0) {
        Object.keys(this.groupProfiles).forEach(memberID => {
          const profile = this.groupProfiles[memberID]
          if (profile.incomeDetailsType) {
            list[memberID] = {
              amount: 0,
              total: profile.incomeDetailsType === 'incomeAmount' ? profile.incomeAmount - this.mincome : profile.pledgeAmount
            }
          }
        })
      } else {
        this.distribution.forEach(distribution => {
          list = this.addToList(list, distribution.fromMemberID, distribution.amount)
          list = this.addToList(list, distribution.toMemberID, -distribution.amount)
        })
      }
      // Sort object by need / pledge
      list = Object.values(list).sort((a, b) => a.total - b.total)
      return list
    },
    totals () {
      return this.members.map(a => a.total)
    },
    amounts () {
      return this.members.map(a => a.amount)
    },
    totalCovered () {
      const pledgePeople = this.amounts.filter(member => member > 0)
      return pledgePeople.length > 0
        ? pledgePeople.reduce((total, amount) => total + amount)
        : 0
    },
    surplus () {
      const needyPeople = this.totals.filter(member => member < 0)
      const totalNeeded = needyPeople.length > 0
        ? Math.abs(needyPeople.reduce((total, amount) => total + amount))
        : 0
      const pledgePeople = this.totals.filter(member => member > 0)
      const totalPledge = pledgePeople.length > 0
        ? Math.abs(pledgePeople.reduce((total, amount) => total + amount))
        : 0

      return totalPledge - totalNeeded
    }
  },
  methods: {
    withGroupCurrency,
    addToList (list, id, amount) {
      const existingUser = list[id]
      // Test if user already in the list
      if (typeof existingUser !== 'undefined') {
        list[id].amount = existingUser.amount + amount
      } else {
        // Add new user to the list
        list[id] = {
          amount: amount,
          total: amount > 0
            ? this.groupProfiles[id].pledgeAmount
            : this.groupProfiles[id].incomeAmount - this.mincome
        }
      }
      return list
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-chart {
  @include phone {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1.5rem;
  }
}

.c-chart-legends {
  display: flex;

  @include phone {
    display: flex;
    flex-direction: column;
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2(
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
  __vue_inject_styles__2,
  __vue_script__2,
  __vue_scope_id__2,
  __vue_is_functional_template__2,
  __vue_module_identifier__2,
  false,
  __vue_create_injector__,
  void 0,
  void 0
);
var Overview_default = __vue_component__2;

// frontend/views/components/graphs/bar-graph/SingleBar.vue
var __vue_script__3 = {
  name: "SingleBar",
  props: {
    data: {
      type: Object,
      // { total: number, title: string, tooltipContent: Array<string> }
      required: true
    }
  },
  data() {
    return {
      ephemeral: {
        tooltipVisible: false
      }
    };
  },
  methods: {
    getPercentage(percentage) {
      return percentage >= 1 ? "100%" : `${Math.floor(percentage * 100)}%`;
    },
    getResult(percentage) {
      if (percentage < 0.6) return "danger";
      if (percentage < 1) return "warning";
      return "success";
    },
    isLow(percentage) {
      return percentage <= 0.35;
    },
    toggleTooltip() {
      this.ephemeral.tooltipVisible = !this.ephemeral.tooltipVisible;
    }
  },
  filters: {
    toPercent
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "bar-graph",
      on: {
        mouseenter: function($event) {
          _vm.ephemeral.tooltipVisible = true;
        },
        mouseleave: function($event) {
          _vm.ephemeral.tooltipVisible = false;
        },
        click: _vm.toggleTooltip
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "bar-graph-column",
          class: "has-background-" + _vm.getResult(_vm.data.total)
        },
        [
          _c(
            "div",
            {
              staticClass: "bar-graph-progress",
              class: [
                { isLow: _vm.isLow(_vm.data.total) },
                "has-background-" + _vm.getResult(_vm.data.total) + "-solid"
              ],
              style: {
                height: _vm.getPercentage(_vm.data.total),
                width: _vm.getPercentage(_vm.data.total)
              }
            },
            [
              _c("div", { staticClass: "bar-graph-content" }, [
                _c("h4", { staticClass: "bar-graph-title" }, [
                  _vm._v(_vm._s(_vm.data.title))
                ]),
                _c("p", { staticClass: "bar-graph-txt" }, [
                  _vm._v(_vm._s(_vm._f("toPercent")(_vm.data.total)) + "%")
                ])
              ])
            ]
          ),
          _vm.data.tooltipContent && _vm.ephemeral.tooltipVisible ? _c(
            "div",
            { staticClass: "c-bar-tooltip hide-phone" },
            _vm._l(_vm.data.tooltipContent, function(content, index) {
              return _c("div", { staticClass: "c-tooltip-content" }, [
                _vm._v(_vm._s(content))
              ]);
            }),
            0
          ) : _vm._e()
        ]
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-22a6ae7f_0", { source: '.bar-graph[data-v-22a6ae7f] {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.bar-graph[data-v-22a6ae7f] {\n    max-width: 7.5rem;\n}\n}\n.bar-graph-column[data-v-22a6ae7f] {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  min-height: 12.5rem;\n  color: var(--background_0);\n  text-align: center;\n  font-size: 2rem;\n  line-height: 1.2;\n}\n@media screen and (max-width: 768px) {\n.bar-graph-column[data-v-22a6ae7f] {\n    display: block;\n    min-height: 2.5rem;\n}\n}\n.bar-graph-column[data-v-22a6ae7f]:first-child {\n  border-left: 0;\n}\n.bar-graph-column[data-v-22a6ae7f]:last-child {\n  border-right: 0;\n}\n.bar-graph-column[data-v-22a6ae7f]::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: "";\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: var(--background_0);\n}\n.bar-graph-content[data-v-22a6ae7f] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n.bar-graph-content[data-v-22a6ae7f] {\n    align-items: flex-end;\n    text-align: right;\n    top: 50%;\n    left: unset;\n    right: 0.5rem;\n    transform: translateY(-50%);\n}\n}\n.bar-graph-title[data-v-22a6ae7f], .bar-graph-txt[data-v-22a6ae7f] {\n  position: relative;\n  font-size: 0.875rem;\n  color: #fff;\n  z-index: 2;\n  transition: opacity 0.7s ease-out;\n}\n.bar-graph-title[data-v-22a6ae7f] {\n  font-weight: 600;\n}\n@media screen and (min-width: 769px) {\n.bar-graph-title[data-v-22a6ae7f] {\n    padding: 0.5rem 0.3rem 0.2rem 0.3rem;\n}\n}\n@media screen and (max-width: 768px) {\n.bar-graph-title[data-v-22a6ae7f] {\n    width: max-content;\n}\n}\n.bar-graph-progress[data-v-22a6ae7f] {\n  transition: width 0.7s ease-out, height 0.7s ease-out;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n@media screen and (min-width: 769px) {\n.bar-graph-progress[data-v-22a6ae7f] {\n    width: 100% !important;\n}\n}\n@media screen and (max-width: 768px) {\n.bar-graph-progress[data-v-22a6ae7f] {\n    height: 100% !important;\n}\n}\n.isLow .bar-graph-content[data-v-22a6ae7f] {\n  top: -0.5rem;\n  transform: translate(-50%, -100%);\n}\n@media screen and (max-width: 768px) {\n.isLow .bar-graph-content[data-v-22a6ae7f] {\n    align-items: flex-start;\n    text-align: left;\n    top: 50%;\n    right: -0.5rem;\n    transform: translate(100%, -50%);\n}\n}\n.isLow .bar-graph-title[data-v-22a6ae7f],\n.isLow .bar-graph-txt[data-v-22a6ae7f] {\n  color: var(--danger_0);\n}\n.c-bar-tooltip[data-v-22a6ae7f] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 10rem;\n  max-width: 16rem;\n  width: max-content;\n  border-radius: 3px;\n  padding: 0.5rem;\n  z-index: 50;\n  pointer-events: none;\n  background-color: var(--text_0);\n  opacity: 0.95;\n  color: var(--background_0);\n  text-align: center;\n  font-size: 0.875rem;\n}\n\n/*# sourceMappingURL=SingleBar.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/graphs/bar-graph/SingleBar.vue", "SingleBar.vue"], "names": [], "mappings": "AA8DA;EACA,WAAA;AC7DA;AACA;AD2DA;IAIA,iBAAA;AC5DE;AACF;AD8DA;EACA,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AC5DA;AACA;ADmDA;IAWA,cAAA;IACA,kBAAA;AC3DE;AACF;AD6DA;EACA,cAAA;AC3DA;AD8DA;EACA,eAAA;AC5DA;AD+DA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,qCAAA;AC7DA;ADiEA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;AC/DA;AACA;ADsDA;IAWA,qBAAA;IACA,iBAAA;IACA,QAAA;IACA,WAAA;IACA,aAAA;IACA,2BAAA;AC9DE;AACF;ADiEA;EAEA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,UAAA;EACA,iCAAA;AChEA;ADmEA;EACA,gBAAA;ACjEA;AACA;AD+DA;IAIA,oCAAA;AChEE;AACF;AACA;AD0DA;IAQA,kBAAA;AC/DE;AACF;ADkEA;EACA,qDAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;AChEA;AACA;ADsDA;IAYA,sBAAA;AC/DE;AACF;AACA;ADiDA;IAgBA,uBAAA;AC9DE;AACF;ADmEA;EACA,YAAA;EACA,iCAAA;AChEA;AACA;AD6DA;IAKA,uBAAA;IACA,gBAAA;IACA,QAAA;IACA,cAAA;IACA,gCAAA;AC/DE;AACF;ADkEA;;EAEA,sBAAA;AChEA;ADoEA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,+BAAA;EACA,aAAA;EACA,0BAAA;EACA,kBAAA;EACA,mBAAA;ACjEA;;AAEA,wCAAwC", "file": "SingleBar.vue", "sourcesContent": ["<template lang='pug'>\n.bar-graph(\n  @mouseenter='ephemeral.tooltipVisible = true'\n  @mouseleave='ephemeral.tooltipVisible = false'\n  @click='toggleTooltip'\n)\n  .bar-graph-column(:class='`has-background-${getResult(data.total)}`')\n    .bar-graph-progress(\n      :style='{height: getPercentage(data.total), width: getPercentage(data.total)}'\n      :class='[{ isLow: isLow(data.total) }, `has-background-${getResult(data.total)}-solid`]'\n    )\n      .bar-graph-content\n        h4.bar-graph-title {{ data.title }}\n        p.bar-graph-txt {{ data.total | toPercent }}%\n\n    .c-bar-tooltip.hide-phone(v-if='data.tooltipContent && ephemeral.tooltipVisible')\n      .c-tooltip-content(v-for='(content, index) in data.tooltipContent') {{ content }}\n</template>\n\n<script>\nimport { toPercent } from '../../../../../frontend/views/utils/filters.js'\n\nexport default ({\n  name: 'SingleBar',\n  props: {\n    data: {\n      type: Object, // { total: number, title: string, tooltipContent: Array<string> }\n      required: true\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        tooltipVisible: false\n      }\n    }\n  },\n  methods: {\n    getPercentage (percentage) {\n      return percentage >= 1 ? '100%' : `${Math.floor(percentage * 100)}%`\n    },\n    getResult (percentage) {\n      if (percentage < 0.6) return 'danger'\n      if (percentage < 1) return 'warning'\n      return 'success'\n    },\n    isLow (percentage) {\n      return percentage <= 0.35\n    },\n    toggleTooltip () {\n      this.ephemeral.tooltipVisible = !this.ephemeral.tooltipVisible\n    }\n  },\n  filters: {\n    toPercent\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../../frontend/assets/style/_variables.scss\";\n\n.bar-graph {\n  width: 100%;\n\n  @include tablet {\n    max-width: 7.5rem;\n  }\n\n  &-column {\n    position: relative;\n    width: 100%;\n    display: inline-block;\n    min-height: 12.5rem;\n    color: $background_0;\n    text-align: center;\n    font-size: $size_1;\n    line-height: 1.2;\n\n    @include phone {\n      display: block;\n      min-height: 2.5rem;\n    }\n\n    &:first-child {\n      border-left: 0;\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      opacity: 0.5;\n      background-color: $background_0;\n    }\n  }\n\n  &-content {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n    @include phone {\n      align-items: flex-end;\n      text-align: right;\n      top: 50%;\n      left: unset;\n      right: 0.5rem;\n      transform: translateY(-50%);\n    }\n  }\n\n  &-title,\n  &-txt {\n    position: relative;\n    font-size: 0.875rem;\n    color: $white;\n    z-index: 2;\n    transition: opacity 0.7s ease-out;\n  }\n\n  &-title {\n    font-weight: 600;\n\n    @include from($tablet) {\n      padding: 0.5rem 0.3rem 0.2rem 0.3rem;\n    }\n\n    @include phone {\n      width: max-content;\n    }\n  }\n\n  &-progress {\n    transition: width 0.7s ease-out, height 0.7s ease-out;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n\n    @include from($tablet) {\n      width: 100% !important;\n    }\n\n    @include phone {\n      height: 100% !important;\n    }\n  }\n}\n\n.isLow {\n  .bar-graph-content {\n    top: -0.5rem;\n    transform: translate(-50%, -100%);\n\n    @include phone {\n      align-items: flex-start;\n      text-align: left;\n      top: 50%;\n      right: -0.5rem;\n      transform: translate(100%, -50%);\n    }\n  }\n\n  .bar-graph-title,\n  .bar-graph-txt {\n    color: var(--danger_0);\n  }\n}\n\n.c-bar-tooltip {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 10rem;\n  max-width: 16rem;\n  width: max-content;\n  border-radius: $radius;\n  padding: 0.5rem;\n  z-index: $zindex-tooltip;\n  pointer-events: none;\n  background-color: $text_0;\n  opacity: 0.95;\n  color: $background_0;\n  text-align: center;\n  font-size: $size_4;\n}\n</style>\n", '.bar-graph {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .bar-graph {\n    max-width: 7.5rem;\n  }\n}\n.bar-graph-column {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  min-height: 12.5rem;\n  color: var(--background_0);\n  text-align: center;\n  font-size: 2rem;\n  line-height: 1.2;\n}\n@media screen and (max-width: 768px) {\n  .bar-graph-column {\n    display: block;\n    min-height: 2.5rem;\n  }\n}\n.bar-graph-column:first-child {\n  border-left: 0;\n}\n.bar-graph-column:last-child {\n  border-right: 0;\n}\n.bar-graph-column::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: "";\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: var(--background_0);\n}\n.bar-graph-content {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  .bar-graph-content {\n    align-items: flex-end;\n    text-align: right;\n    top: 50%;\n    left: unset;\n    right: 0.5rem;\n    transform: translateY(-50%);\n  }\n}\n.bar-graph-title, .bar-graph-txt {\n  position: relative;\n  font-size: 0.875rem;\n  color: #fff;\n  z-index: 2;\n  transition: opacity 0.7s ease-out;\n}\n.bar-graph-title {\n  font-weight: 600;\n}\n@media screen and (min-width: 769px) {\n  .bar-graph-title {\n    padding: 0.5rem 0.3rem 0.2rem 0.3rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .bar-graph-title {\n    width: max-content;\n  }\n}\n.bar-graph-progress {\n  transition: width 0.7s ease-out, height 0.7s ease-out;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n@media screen and (min-width: 769px) {\n  .bar-graph-progress {\n    width: 100% !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .bar-graph-progress {\n    height: 100% !important;\n  }\n}\n\n.isLow .bar-graph-content {\n  top: -0.5rem;\n  transform: translate(-50%, -100%);\n}\n@media screen and (max-width: 768px) {\n  .isLow .bar-graph-content {\n    align-items: flex-start;\n    text-align: left;\n    top: 50%;\n    right: -0.5rem;\n    transform: translate(100%, -50%);\n  }\n}\n.isLow .bar-graph-title,\n.isLow .bar-graph-txt {\n  color: var(--danger_0);\n}\n\n.c-bar-tooltip {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 10rem;\n  max-width: 16rem;\n  width: max-content;\n  border-radius: 3px;\n  padding: 0.5rem;\n  z-index: 50;\n  pointer-events: none;\n  background-color: var(--text_0);\n  opacity: 0.95;\n  color: var(--background_0);\n  text-align: center;\n  font-size: 0.875rem;\n}\n\n/*# sourceMappingURL=SingleBar.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-22a6ae7f";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.bar-graph(\n  @mouseenter='ephemeral.tooltipVisible = true'\n  @mouseleave='ephemeral.tooltipVisible = false'\n  @click='toggleTooltip'\n)\n  .bar-graph-column(:class='`has-background-${getResult(data.total)}`')\n    .bar-graph-progress(\n      :style='{height: getPercentage(data.total), width: getPercentage(data.total)}'\n      :class='[{ isLow: isLow(data.total) }, `has-background-${getResult(data.total)}-solid`]'\n    )\n      .bar-graph-content\n        h4.bar-graph-title {{ data.title }}\n        p.bar-graph-txt {{ data.total | toPercent }}%\n\n    .c-bar-tooltip.hide-phone(v-if='data.tooltipContent && ephemeral.tooltipVisible')\n      .c-tooltip-content(v-for='(content, index) in data.tooltipContent') {{ content }}\n</template>\n\n<script>\nimport { toPercent } from '../../../../../frontend/views/utils/filters.js'\n\nexport default ({\n  name: 'SingleBar',\n  props: {\n    data: {\n      type: Object, // { total: number, title: string, tooltipContent: Array<string> }\n      required: true\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        tooltipVisible: false\n      }\n    }\n  },\n  methods: {\n    getPercentage (percentage) {\n      return percentage >= 1 ? '100%' : `${Math.floor(percentage * 100)}%`\n    },\n    getResult (percentage) {\n      if (percentage < 0.6) return 'danger'\n      if (percentage < 1) return 'warning'\n      return 'success'\n    },\n    isLow (percentage) {\n      return percentage <= 0.35\n    },\n    toggleTooltip () {\n      this.ephemeral.tooltipVisible = !this.ephemeral.tooltipVisible\n    }\n  },\n  filters: {\n    toPercent\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../../frontend/assets/style/_variables.scss\";\n\n.bar-graph {\n  width: 100%;\n\n  @include tablet {\n    max-width: 7.5rem;\n  }\n\n  &-column {\n    position: relative;\n    width: 100%;\n    display: inline-block;\n    min-height: 12.5rem;\n    color: $background_0;\n    text-align: center;\n    font-size: $size_1;\n    line-height: 1.2;\n\n    @include phone {\n      display: block;\n      min-height: 2.5rem;\n    }\n\n    &:first-child {\n      border-left: 0;\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      opacity: 0.5;\n      background-color: $background_0;\n    }\n  }\n\n  &-content {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n    @include phone {\n      align-items: flex-end;\n      text-align: right;\n      top: 50%;\n      left: unset;\n      right: 0.5rem;\n      transform: translateY(-50%);\n    }\n  }\n\n  &-title,\n  &-txt {\n    position: relative;\n    font-size: 0.875rem;\n    color: $white;\n    z-index: 2;\n    transition: opacity 0.7s ease-out;\n  }\n\n  &-title {\n    font-weight: 600;\n\n    @include from($tablet) {\n      padding: 0.5rem 0.3rem 0.2rem 0.3rem;\n    }\n\n    @include phone {\n      width: max-content;\n    }\n  }\n\n  &-progress {\n    transition: width 0.7s ease-out, height 0.7s ease-out;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n\n    @include from($tablet) {\n      width: 100% !important;\n    }\n\n    @include phone {\n      height: 100% !important;\n    }\n  }\n}\n\n.isLow {\n  .bar-graph-content {\n    top: -0.5rem;\n    transform: translate(-50%, -100%);\n\n    @include phone {\n      align-items: flex-start;\n      text-align: left;\n      top: 50%;\n      right: -0.5rem;\n      transform: translate(100%, -50%);\n    }\n  }\n\n  .bar-graph-title,\n  .bar-graph-txt {\n    color: var(--danger_0);\n  }\n}\n\n.c-bar-tooltip {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 10rem;\n  max-width: 16rem;\n  width: max-content;\n  border-radius: $radius;\n  padding: 0.5rem;\n  z-index: $zindex-tooltip;\n  pointer-events: none;\n  background-color: $text_0;\n  opacity: 0.95;\n  color: $background_0;\n  text-align: center;\n  font-size: $size_4;\n}\n</style>\n";
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__2,
  void 0,
  void 0
);
var SingleBar_default = __vue_component__3;

// frontend/views/components/graphs/bar-graph/BarGraph.vue
var __vue_script__4 = {
  name: "BarGraph",
  components: {
    SingleBar: SingleBar_default
  },
  props: {
    bars: {
      type: Array,
      // [{ total, value }]
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isReady: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isReady = true;
    }, 0);
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "bar-graph-container",
      class: { "c-getting-ready": !_vm.isReady }
    },
    _vm._l(_vm.bars, function(bar, index) {
      return _c("single-bar", {
        key: "percentage-" + index,
        attrs: { data: bar }
      });
    }),
    1
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-ddc16476_0", { source: ".bar-graph-container[data-v-ddc16476] {\n  display: flex;\n  margin: 1.5rem 0 1rem 0;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n.bar-graph-container[data-v-ddc16476] {\n    flex-direction: column-reverse;\n    overflow: hidden;\n}\n}\n.c-getting-ready[data-v-ddc16476]  .bar-graph-progress {\n  height: 0% !important;\n}\n@media screen and (max-width: 768px) {\n.c-getting-ready[data-v-ddc16476]  .bar-graph-progress {\n    width: 0% !important;\n    height: 100% !important;\n}\n}\n.c-getting-ready[data-v-ddc16476]  .bar-graph-title, .c-getting-ready[data-v-ddc16476]  .bar-graph-txt {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=BarGraph.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/graphs/bar-graph/BarGraph.vue", "BarGraph.vue"], "names": [], "mappings": "AAqCA;EACA,aAAA;EACA,uBAAA;EACA,SAAA;ACpCA;ADwCA;AAPA;IAMA,8BAAA;IACA,gBAAA;ACnCE;AACF;ADuCA;EACA,qBAAA;ACpCA;AD8BA;AAKA;IAIA,oBAAA;IACA,uBAAA;ACnCE;AACF;ADsCA;EAEA,UAAA;ACrCA;;AAEA,uCAAuC", "file": "BarGraph.vue", "sourcesContent": [`<template lang='pug'>
.bar-graph-container(:class='{"c-getting-ready": !isReady}')
  single-bar(
    v-for='(bar, index) in bars'
    :key='\`percentage-\${index}\`'
    :data='bar'
  )
</template>

<script>
import SingleBar from './SingleBar.vue'

export default ({
  name: 'BarGraph',
  components: {
    SingleBar
  },
  props: {
    bars: {
      type: Array, // [{ total, value }]
      default () { return [] }
    }
  },
  data () {
    return {
      isReady: false
    }
  },
  mounted () {
    setTimeout(() => { this.isReady = true }, 0)
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.bar-graph-container {
  display: flex;
  margin: 1.5rem 0 1rem 0;
  gap: 1rem;

  @include phone {
    flex-direction: column-reverse;
    overflow: hidden;
  }
}

.c-getting-ready ::v-deep .bar-graph {
  &-progress {
    height: 0% !important;

    @include phone {
      width: 0% !important;
      height: 100% !important;
    }
  }

  &-title,
  &-txt {
    opacity: 0;
  }
}
</style>
`, ".bar-graph-container {\n  display: flex;\n  margin: 1.5rem 0 1rem 0;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .bar-graph-container {\n    flex-direction: column-reverse;\n    overflow: hidden;\n  }\n}\n\n.c-getting-ready ::v-deep .bar-graph-progress {\n  height: 0% !important;\n}\n@media screen and (max-width: 768px) {\n  .c-getting-ready ::v-deep .bar-graph-progress {\n    width: 0% !important;\n    height: 100% !important;\n  }\n}\n.c-getting-ready ::v-deep .bar-graph-title, .c-getting-ready ::v-deep .bar-graph-txt {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=BarGraph.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-ddc16476";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.bar-graph-container(:class='{"c-getting-ready": !isReady}')
  single-bar(
    v-for='(bar, index) in bars'
    :key='\`percentage-\${index}\`'
    :data='bar'
  )
</template>

<script>
import SingleBar from './SingleBar.vue'

export default ({
  name: 'BarGraph',
  components: {
    SingleBar
  },
  props: {
    bars: {
      type: Array, // [{ total, value }]
      default () { return [] }
    }
  },
  data () {
    return {
      isReady: false
    }
  },
  mounted () {
    setTimeout(() => { this.isReady = true }, 0)
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.bar-graph-container {
  display: flex;
  margin: 1.5rem 0 1rem 0;
  gap: 1rem;

  @include phone {
    flex-direction: column-reverse;
    overflow: hidden;
  }
}

.c-getting-ready ::v-deep .bar-graph {
  &-progress {
    height: 0% !important;

    @include phone {
      width: 0% !important;
      height: 100% !important;
    }
  }

  &-title,
  &-txt {
    opacity: 0;
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var BarGraph_default = __vue_component__4;

// frontend/views/containers/contributions/SupportHistory.vue
var __vue_script__5 = {
  name: "SupportHistory",
  data() {
    return {
      isReady: false,
      history: []
    };
  },
  mixins: [PaymentsMixin_default],
  components: {
    BarGraph: BarGraph_default
  },
  computed: {
    ...mapGetters([
      "currentPaymentPeriod",
      "withGroupCurrency",
      "groupTotalPledgeAmount",
      "groupCreatedDate",
      "thisPeriodPaymentInfo"
    ])
  },
  mounted() {
    this.updateHistory();
  },
  methods: {
    async updateHistory() {
      const allPeriods = await this.getAllSortedPeriodKeys();
      const periods = allPeriods.slice(-MAX_HISTORY_PERIODS);
      this.history = await Promise.all(periods.map(async (period) => {
        const totalTodo = await this.getTotalTodoAmountForPeriod(period);
        const totalDone = await this.getTotalPledgesDoneForPeriod(period);
        return {
          total: totalDone === 0 || totalTodo === 0 ? 0 : totalDone / totalTodo,
          title: this.getPeriodFromStartToDueDate(period, periods),
          tooltipContent: [
            L("Needed: {todo}", { todo: this.withGroupCurrency(totalTodo) }),
            L("Distributed: {done}", { done: this.withGroupCurrency(totalDone) })
          ]
        };
      }));
    }
  },
  watch: {
    currentPaymentPeriod() {
      this.updateHistory();
    },
    thisPeriodPaymentInfo() {
      this.updateHistory();
    }
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.isReady ? "" : "c-ready" },
    [
      _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h2" } }, [
        _vm._v("Support history")
      ]),
      _c("i18n", { attrs: { tag: "p" } }, [
        _vm._v("Percentage of the group income goal reached by the group.")
      ]),
      _vm.history.length === 0 ? _c(
        "p",
        [
          _c("i18n", [
            _vm._v("The first distribution period hasn't started yet.")
          ])
        ],
        1
      ) : _c(
        "div",
        [
          _c("bar-graph", { attrs: { bars: _vm.history } }),
          _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
            _vm._v(
              "* This month contains delayed payments for prior months."
            )
          ]),
          _c(
            "i18n",
            {
              staticClass: "has-text-bold c-total-distribution-txt",
              attrs: {
                tag: "p",
                args: {
                  amount: _vm.withGroupCurrency(_vm.groupTotalPledgeAmount)
                }
              }
            },
            [_vm._v("Total distributed since start: {amount}")]
          )
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-dc4a9cee_0", { source: ".c-total-distribution-txt[data-v-dc4a9cee] {\n  margin-top: 0.5rem;\n}\n\n/*# sourceMappingURL=SupportHistory.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/SupportHistory.vue", "SupportHistory.vue"], "names": [], "mappings": "AAkFA;EACA,kBAAA;ACjFA;;AAEA,6CAA6C", "file": "SupportHistory.vue", "sourcesContent": [`<template lang='pug'>
div(:class='isReady ? "" : "c-ready"')
  i18n.is-title-3(
    tag='h2'
  ) Support history

  i18n(tag='p') Percentage of the group income goal reached by the group.

  p(v-if='history.length === 0')
    i18n The first distribution period hasn't started yet.

  div(v-else)
    bar-graph(:bars='history')
    i18n.has-text-1(tag='p') * This month contains delayed payments for prior months.
    i18n.has-text-bold.c-total-distribution-txt(
      tag='p'
      :args='{ amount: withGroupCurrency(groupTotalPledgeAmount) }'
    ) Total distributed since start: {amount}
</template>

<script>
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import BarGraph from '../../../../frontend/views/components/graphs/bar-graph/BarGraph.vue'
import { MAX_HISTORY_PERIODS } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'SupportHistory',
  data () {
    return {
      isReady: false,
      history: []
    }
  },
  mixins: [PaymentsMixin],
  components: {
    BarGraph
  },
  computed: {
    ...mapGetters([
      'currentPaymentPeriod',
      'withGroupCurrency',
      'groupTotalPledgeAmount',
      'groupCreatedDate',
      'thisPeriodPaymentInfo'
    ])
  },
  mounted () {
    this.updateHistory()
  },
  methods: {
    async updateHistory () {
      const allPeriods = await this.getAllSortedPeriodKeys()
      const periods = allPeriods.slice(-MAX_HISTORY_PERIODS)
      this.history = await Promise.all(periods.map(async (period) => {
        const totalTodo = await this.getTotalTodoAmountForPeriod(period)
        const totalDone = await this.getTotalPledgesDoneForPeriod(period)

        return {
          total: totalDone === 0 || totalTodo === 0 ? 0 : totalDone / totalTodo,
          title: this.getPeriodFromStartToDueDate(period, periods),
          tooltipContent: [
            L('Needed: {todo}', { todo: this.withGroupCurrency(totalTodo) }),
            L('Distributed: {done}', { done: this.withGroupCurrency(totalDone) })
          ]
        }
      }))
    }
  },
  watch: {
    currentPaymentPeriod () {
      this.updateHistory()
    },
    thisPeriodPaymentInfo () {
      this.updateHistory()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-total-distribution-txt {
  margin-top: 0.5rem;
}
</style>
`, ".c-total-distribution-txt {\n  margin-top: 0.5rem;\n}\n\n/*# sourceMappingURL=SupportHistory.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-dc4a9cee";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
div(:class='isReady ? "" : "c-ready"')
  i18n.is-title-3(
    tag='h2'
  ) Support history

  i18n(tag='p') Percentage of the group income goal reached by the group.

  p(v-if='history.length === 0')
    i18n The first distribution period hasn't started yet.

  div(v-else)
    bar-graph(:bars='history')
    i18n.has-text-1(tag='p') * This month contains delayed payments for prior months.
    i18n.has-text-bold.c-total-distribution-txt(
      tag='p'
      :args='{ amount: withGroupCurrency(groupTotalPledgeAmount) }'
    ) Total distributed since start: {amount}
</template>

<script>
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import BarGraph from '../../../../frontend/views/components/graphs/bar-graph/BarGraph.vue'
import { MAX_HISTORY_PERIODS } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'SupportHistory',
  data () {
    return {
      isReady: false,
      history: []
    }
  },
  mixins: [PaymentsMixin],
  components: {
    BarGraph
  },
  computed: {
    ...mapGetters([
      'currentPaymentPeriod',
      'withGroupCurrency',
      'groupTotalPledgeAmount',
      'groupCreatedDate',
      'thisPeriodPaymentInfo'
    ])
  },
  mounted () {
    this.updateHistory()
  },
  methods: {
    async updateHistory () {
      const allPeriods = await this.getAllSortedPeriodKeys()
      const periods = allPeriods.slice(-MAX_HISTORY_PERIODS)
      this.history = await Promise.all(periods.map(async (period) => {
        const totalTodo = await this.getTotalTodoAmountForPeriod(period)
        const totalDone = await this.getTotalPledgesDoneForPeriod(period)

        return {
          total: totalDone === 0 || totalTodo === 0 ? 0 : totalDone / totalTodo,
          title: this.getPeriodFromStartToDueDate(period, periods),
          tooltipContent: [
            L('Needed: {todo}', { todo: this.withGroupCurrency(totalTodo) }),
            L('Distributed: {done}', { done: this.withGroupCurrency(totalDone) })
          ]
        }
      }))
    }
  },
  watch: {
    currentPaymentPeriod () {
      this.updateHistory()
    },
    thisPeriodPaymentInfo () {
      this.updateHistory()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-total-distribution-txt {
  margin-top: 0.5rem;
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var SupportHistory_default = __vue_component__5;

// frontend/views/containers/contributions/TodoHistory.vue
var __vue_script__6 = {
  name: "TodoHistory",
  data() {
    return {
      isReady: false,
      history: []
    };
  },
  mixins: [PaymentsMixin_default],
  components: {
    BarGraph: BarGraph_default
  },
  computed: {
    ...mapGetters([
      "currentPaymentPeriod",
      "groupCreatedDate",
      "thisPeriodPaymentInfo"
    ])
  },
  created() {
    this.updateHistory();
  },
  methods: {
    async updateHistory() {
      const getLen = (obj) => Object.keys(obj).length;
      const allPeriods = await this.getAllSortedPeriodKeys();
      const periods = allPeriods.slice(-MAX_HISTORY_PERIODS);
      this.history = await Promise.all(periods.map(async (period) => {
        const paymentDetails = await this.getPaymentDetailsByPeriod(period);
        const { lastAdjustedDistribution } = await this.getPaymentPeriod(period);
        const doneCount = getLen(paymentDetails);
        const markedAsNotReceivedCount = Object.values(paymentDetails).filter(({ data }) => data.status === PAYMENT_NOT_RECEIVED).length;
        const missedCount = getLen(lastAdjustedDistribution || {});
        return {
          total: doneCount === 0 ? 0 : (doneCount - markedAsNotReceivedCount) / (doneCount + missedCount),
          title: this.getPeriodFromStartToDueDate(period, periods),
          tooltipContent: [
            L("Total: {total}", { total: doneCount + missedCount }),
            L("Completed: {completed}", { completed: doneCount - markedAsNotReceivedCount })
          ]
        };
      }));
    }
  },
  watch: {
    // update the graph when we enter a new payment period
    currentPaymentPeriod() {
      this.updateHistory();
    },
    // update the graph updates when a payment is made
    thisPeriodPaymentInfo() {
      this.updateHistory();
    }
  }
};
var __vue_render__6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.isReady ? "" : "c-ready" },
    [
      _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h2" } }, [
        _vm._v("TODO history")
      ]),
      _c("i18n", { attrs: { tag: "p" } }, [
        _vm._v("Percentage of payments completed by those pledging.")
      ]),
      _vm.history.length === 0 ? _c(
        "p",
        [
          _c("i18n", [
            _vm._v("The first distribution period hasn't started yet.")
          ])
        ],
        1
      ) : _c(
        "div",
        [
          _c("bar-graph", { attrs: { bars: _vm.history } }),
          _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
            _vm._v(
              "* This month contains delayed payments for prior months."
            )
          ])
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__6 = [];
__vue_render__6._withStripped = true;
var __vue_inject_styles__6 = void 0;
var __vue_scope_id__6 = void 0;
var __vue_module_identifier__6 = void 0;
var __vue_is_functional_template__6 = false;
function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
div(:class='isReady ? "" : "c-ready"')
  i18n.is-title-3(
    tag='h2'
  ) TODO history

  i18n(tag='p') Percentage of payments completed by those pledging.

  p(v-if='history.length === 0')
    i18n The first distribution period hasn't started yet.

  div(v-else)
    bar-graph(:bars='history')
    i18n.has-text-1(tag='p') * This month contains delayed payments for prior months.
</template>

<script>
import { mapGetters } from 'vuex'
import { MAX_HISTORY_PERIODS } from '../../../../frontend/model/contracts/shared/constants.js'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import BarGraph from '../../../../frontend/views/components/graphs/bar-graph/BarGraph.vue'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'TodoHistory',
  data () {
    return {
      isReady: false,
      history: []
    }
  },
  mixins: [PaymentsMixin],
  components: {
    BarGraph
  },
  computed: {
    ...mapGetters([
      'currentPaymentPeriod',
      'groupCreatedDate',
      'thisPeriodPaymentInfo'
    ])
  },
  created () {
    this.updateHistory()
  },
  methods: {
    async updateHistory () {
      const getLen = obj => Object.keys(obj).length
      const allPeriods = await this.getAllSortedPeriodKeys()
      const periods = allPeriods.slice(-MAX_HISTORY_PERIODS)
      this.history = await Promise.all(periods.map(async (period) => {
        const paymentDetails = await this.getPaymentDetailsByPeriod(period)
        const { lastAdjustedDistribution } = await this.getPaymentPeriod(period)
        const doneCount = getLen(paymentDetails)
        const markedAsNotReceivedCount = Object.values(paymentDetails)
          .filter(({ data }) => data.status === PAYMENT_NOT_RECEIVED).length
        const missedCount = getLen(lastAdjustedDistribution || {})
        return {
          total: doneCount === 0 ? 0 : (doneCount - markedAsNotReceivedCount) / (doneCount + missedCount),
          title: this.getPeriodFromStartToDueDate(period, periods),
          tooltipContent: [
            L('Total: {total}', { total: doneCount + missedCount }),
            L('Completed: {completed}', { completed: doneCount - markedAsNotReceivedCount })
          ]
        }
      }))
    }
  },
  watch: {
    // update the graph when we enter a new payment period
    currentPaymentPeriod () {
      this.updateHistory()
    },
    // update the graph updates when a payment is made
    thisPeriodPaymentInfo () {
      this.updateHistory()
    }
  }
}: Object)
<\/script>
`;
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
var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6(
  { render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 },
  __vue_inject_styles__6,
  __vue_script__6,
  __vue_scope_id__6,
  __vue_is_functional_template__6,
  __vue_module_identifier__6,
  false,
  void 0,
  void 0,
  void 0
);
var TodoHistory_default = __vue_component__6;

// frontend/views/containers/dashboard/SentenceWithMemberTooltip.vue
var __vue_script__7 = {
  name: "SentenceWithMemberTooltip",
  components: {
    Tooltip: Tooltip_default
  },
  props: {
    members: Array,
    noEllpsis: {
      type: Boolean,
      default: false
    }
  }
};
var __vue_render__7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "Tooltip",
    {
      key: _vm.members.length,
      tag: "component",
      attrs: {
        opacity: _vm.members.length === 0 ? 0 : 0.95,
        triggerElementSelector: ".t-trigger",
        direction: "bottom-left",
        anchorToElement: true
      }
    },
    [
      _vm._t("default"),
      _vm.members && _vm.members.length ? _c(
        "template",
        { slot: "tooltip" },
        _vm._l(_vm.members, function(name, index) {
          return _c(
            "div",
            { key: "member-" + index, staticClass: "c-member-name" },
            [
              !_vm.noEllpsis ? _c("div", { staticClass: "has-ellipsis" }, [
                _vm._v(_vm._s(name))
              ]) : _c("div", [_vm._v(_vm._s(name))])
            ]
          );
        }),
        0
      ) : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__7 = [];
__vue_render__7._withStripped = true;
var __vue_inject_styles__7 = function(inject) {
  if (!inject) return;
  inject("data-v-4419231f_0", { source: ".c-member-name[data-v-4419231f] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  font-weight: normal;\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=SentenceWithMemberTooltip.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/SentenceWithMemberTooltip.vue", "SentenceWithMemberTooltip.vue"], "names": [], "mappings": "AA0CA;EAEA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;AC1CA;;AAEA,wDAAwD", "file": "SentenceWithMemberTooltip.vue", "sourcesContent": [`<template lang="pug">\r
component(\r
  is='Tooltip'\r
  :key='members.length'\r
  :opacity='members.length === 0 ? 0 : 0.95'\r
  triggerElementSelector='.t-trigger'\r
  direction='bottom-left'\r
  :anchorToElement='true'\r
)\r
  // The reason for using <component /> tag here instead of <tooltip /> and specifying 'key' attr is,\r
  // to fix the bug where the link between the tooltip content(template(slot='tooltip') below) and the trigger target element(.t-trigger)\r
  // gets broken when "members" prop is updated. Tooltip gets destoryed and re-mounted in response to the prop change this way.\r
  slot\r
\r
  template(v-if='members && members.length' slot='tooltip')\r
    .c-member-name(\r
      v-for='(name, index) in members'\r
      :key='\`member-\${index}\`'\r
    )\r
      .has-ellipsis(v-if='!noEllpsis') {{ name }}\r
      div(v-else) {{ name }}\r
</template>\r
\r
<script>\r
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'\r
\r
export default ({\r
  name: 'SentenceWithMemberTooltip',\r
  components: {\r
    Tooltip\r
  },\r
  props: {\r
    members: Array,\r
    noEllpsis: {\r
      type: Boolean,\r
      default: false\r
    }\r
  }\r
}: Object)\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.c-member-name {\r
  // Turn the parent element into flex-box to render ellipsis style properly.\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;\r
  font-weight: normal;\r
  word-break: break-word;\r
}\r
</style>\r
`, ".c-member-name {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  font-weight: normal;\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=SentenceWithMemberTooltip.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__7 = "data-v-4419231f";
var __vue_module_identifier__7 = void 0;
var __vue_is_functional_template__7 = false;
function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">\r
component(\r
  is='Tooltip'\r
  :key='members.length'\r
  :opacity='members.length === 0 ? 0 : 0.95'\r
  triggerElementSelector='.t-trigger'\r
  direction='bottom-left'\r
  :anchorToElement='true'\r
)\r
  // The reason for using <component /> tag here instead of <tooltip /> and specifying 'key' attr is,\r
  // to fix the bug where the link between the tooltip content(template(slot='tooltip') below) and the trigger target element(.t-trigger)\r
  // gets broken when "members" prop is updated. Tooltip gets destoryed and re-mounted in response to the prop change this way.\r
  slot\r
\r
  template(v-if='members && members.length' slot='tooltip')\r
    .c-member-name(\r
      v-for='(name, index) in members'\r
      :key='\`member-\${index}\`'\r
    )\r
      .has-ellipsis(v-if='!noEllpsis') {{ name }}\r
      div(v-else) {{ name }}\r
</template>\r
\r
<script>\r
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'\r
\r
export default ({\r
  name: 'SentenceWithMemberTooltip',\r
  components: {\r
    Tooltip\r
  },\r
  props: {\r
    members: Array,\r
    noEllpsis: {\r
      type: Boolean,\r
      default: false\r
    }\r
  }\r
}: Object)\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.c-member-name {\r
  // Turn the parent element into flex-box to render ellipsis style properly.\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;\r
  font-weight: normal;\r
  word-break: break-word;\r
}\r
</style>\r
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
function __vue_create_injector__5() {
  const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
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
  __vue_create_injector__5,
  void 0,
  void 0
);
var SentenceWithMemberTooltip_default = __vue_component__7;

// frontend/views/containers/dashboard/GroupMembersActivity.vue
var __vue_script__8 = {
  name: "GroupMembersActivity",
  components: {
    SentenceWithMemberTooltip: SentenceWithMemberTooltip_default
  },
  data() {
    return {
      isReady: false,
      history: [],
      config: {
        proposalNumber: STREAK_MISSED_PROPSAL_VOTE,
        notLoggedInDays: STREAK_NOT_LOGGED_IN_DAYS
      }
    };
  },
  computed: {
    ...mapGetters([
      "groupStreaks",
      "userDisplayNameFromID",
      "groupProfiles"
    ]),
    onTimePayments() {
      return Object.entries(this.groupStreaks.onTimePayments || {}).filter(([, streak]) => streak >= STREAK_ON_TIME_PAYMENTS).sort((a, b) => b[1] - a[1]).map(([memberID, streak]) => L("{user} - {count} month streak", { user: this.userDisplayNameFromID(memberID), count: streak }));
    },
    missedPayments() {
      return Object.entries(this.groupStreaks.missedPayments || {}).filter(([, streak]) => streak >= STREAK_MISSED_PAYMENTS).map(([memberID, streak]) => {
        const Largs = { user: this.userDisplayNameFromID(memberID), streak };
        return streak >= 2 ? L("{user} missed {streak} payments", Largs) : L("{user} missed {streak} payment", Largs);
      });
    },
    haventLoggedIn() {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      return Object.entries(this.groupProfiles).filter(([, profile]) => compareISOTimestamps(now, profile.lastLoggedIn) >= STREAK_NOT_LOGGED_IN_DAYS * DAYS_MILLIS).map(([memberID]) => this.userDisplayNameFromID(memberID));
    },
    noIncomeDetails() {
      return Object.entries(this.groupProfiles).filter(([, profile]) => !profile.incomeDetailsType).map(([memberID]) => this.userDisplayNameFromID(memberID));
    },
    noVotes() {
      return Object.entries(this.groupStreaks.noVotes || {}).filter(([, streak]) => streak >= STREAK_MISSED_PROPSAL_VOTE).map(([memberID, streak]) => {
        const Largs = { user: this.userDisplayNameFromID(memberID), streak };
        return streak >= 2 ? L("{user} missed {streak} votes", Largs) : L("{user} missed {streak} vote", Largs);
      });
    },
    groupStreaksSentences() {
      return {
        "fullMonthlyPledges": this.groupStreaks.fullMonthlyPledges === 1 ? L("100% completed TODO streak of: 1 month") : L("100% completed TODO streak of: {streak} months", { streak: this.groupStreaks.fullMonthlyPledges || 0 }),
        "fullMonthlySupport": this.groupStreaks.fullMonthlySupport === 1 ? L("Mincome goal streak of: 1 month") : L("Mincome goal streak of: {streak} months", { streak: this.groupStreaks.fullMonthlySupport || 0 })
      };
    },
    memberCountSentences() {
      const argsCommon = {
        ...this.LTags("strong"),
        "btn_": '<button type="button" class="is-unstyled link t-trigger">',
        "_btn": "</button>"
      };
      const argsMap = {
        "onTimePayments": { ...argsCommon, membercount: this.onTimePayments.length },
        "haventLoggedIn": { ...argsCommon, days: this.config.notLoggedInDays, membercount: this.haventLoggedIn.length },
        "noIncomeDetails": { ...argsCommon, membercount: this.noIncomeDetails.length },
        "missedPayments": { ...argsCommon, membercount: this.missedPayments.length },
        "noVotes": { ...argsCommon, membercount: this.noVotes.length, proposalcount: this.config.proposalNumber }
      };
      return {
        "onTimePayments": this.onTimePayments.length === 1 ? L("{btn_}1 member{_btn} has {strong_} on-time payment streaks{_strong}", argsMap["onTimePayments"]) : L("{btn_}{membercount} members{_btn} have {strong_} on-time payment streaks{_strong}", argsMap["onTimePayments"]),
        "haventLoggedIn": this.haventLoggedIn.length === 1 ? L("{btn_}1 member{_btn} hasn't {strong_} logged in past {days} days or more {_strong}", argsMap["haventLoggedIn"]) : L("{btn_}{membercount} members{_btn} haven't {strong_} logged in past {days} days or more {_strong}", argsMap["haventLoggedIn"]),
        "noIncomeDetails": this.noIncomeDetails.length === 1 ? L("{btn_}1 member{_btn} hasn't {strong_} entered income details{_strong}", argsMap["noIncomeDetails"]) : L("{btn_}{membercount} members{_btn} haven't {strong_} entered income details{_strong}", argsMap["noIncomeDetails"]),
        "missedPayments": this.missedPayments.length === 1 ? L("{btn_}1 member{_btn} has {strong_} missed payments {_strong}", argsMap["missedPayments"]) : L("{btn_}{membercount} members{_btn} have {strong_} missed payments {_strong}", argsMap["missedPayments"]),
        "noVotes": this.noVotes.length === 1 ? L("{btn_}1 member{_btn} hasn't {strong_} voted in the last {proposalcount} proposals {_strong}", argsMap["noVotes"]) : L("{btn_}{membercount} members{_btn} haven't {strong_} voted in the last {proposalcount} proposals {_strong}", argsMap["noVotes"])
      };
    }
  }
};
var __vue_render__8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-wrapper" }, [
    _c("div", { staticClass: "c-columns" }, [
      _c(
        "div",
        { staticClass: "c-column" },
        [
          _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h2" } }, [
            _vm._v("Streaks")
          ]),
          _c("i18n", { staticClass: "has-text-1 c-para" }, [
            _vm._v(
              "Information about your pledges streaks and other streak members appears here."
            )
          ]),
          _c("ul", { staticClass: "spacer" }, [
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-star icon-round has-background-success has-text-success"
                }),
                _c("div", { staticClass: "c-item-copy" }, [
                  _c("strong", {
                    directives: [
                      {
                        name: "safe-html",
                        rawName: "v-safe-html",
                        value: _vm.groupStreaksSentences.fullMonthlyPledges,
                        expression: "groupStreaksSentences.fullMonthlyPledges"
                      }
                    ]
                  })
                ])
              ])
            ]),
            _c("li", { staticClass: "c-item wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-star icon-round has-background-success has-text-success"
                }),
                _c("div", { staticClass: "c-item-copy" }, [
                  _c("strong", {
                    directives: [
                      {
                        name: "safe-html",
                        rawName: "v-safe-html",
                        value: _vm.groupStreaksSentences.fullMonthlySupport,
                        expression: "groupStreaksSentences.fullMonthlySupport"
                      }
                    ]
                  })
                ])
              ])
            ]),
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-star icon-round has-background-success has-text-success"
                }),
                _c(
                  "div",
                  { staticClass: "c-item-copy" },
                  [
                    _c(
                      "sentence-with-member-tooltip",
                      {
                        attrs: { members: _vm.onTimePayments, noEllpsis: true }
                      },
                      [
                        _c("div", {
                          directives: [
                            {
                              name: "safe-html",
                              rawName: "v-safe-html:button",
                              value: _vm.memberCountSentences["onTimePayments"],
                              expression: 'memberCountSentences["onTimePayments"]',
                              arg: "button"
                            }
                          ],
                          staticClass: "member-count-sentence"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "c-column" },
        [
          _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h2" } }, [
            _vm._v("Inactivity")
          ]),
          _c("div", { staticClass: "has-text-1 c-para" }, [
            _vm._v(
              "Members that haven\u2019t logged in, missed their pledges or haven\xB4t voted last proposals will appear here."
            )
          ]),
          _c("ul", { staticClass: "spacer" }, [
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-user icon-round has-background-general"
                }),
                _c(
                  "div",
                  { staticClass: "c-item-copy" },
                  [
                    _c(
                      "sentence-with-member-tooltip",
                      { attrs: { members: _vm.haventLoggedIn } },
                      [
                        _c("div", {
                          directives: [
                            {
                              name: "safe-html",
                              rawName: "v-safe-html:button",
                              value: _vm.memberCountSentences["haventLoggedIn"],
                              expression: 'memberCountSentences["haventLoggedIn"]',
                              arg: "button"
                            }
                          ],
                          staticClass: "member-count-sentence"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-comment-dollar icon-round has-background-general"
                }),
                _c(
                  "div",
                  { staticClass: "c-item-copy" },
                  [
                    _c(
                      "sentence-with-member-tooltip",
                      { attrs: { members: _vm.noIncomeDetails } },
                      [
                        _c("div", {
                          directives: [
                            {
                              name: "safe-html",
                              rawName: "v-safe-html:button",
                              value: _vm.memberCountSentences["noIncomeDetails"],
                              expression: 'memberCountSentences["noIncomeDetails"]',
                              arg: "button"
                            }
                          ],
                          staticClass: "member-count-sentence"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-dollar-sign icon-round has-background-general"
                }),
                _c(
                  "div",
                  { staticClass: "c-item-copy" },
                  [
                    _c(
                      "sentence-with-member-tooltip",
                      { attrs: { members: _vm.missedPayments } },
                      [
                        _c("div", {
                          directives: [
                            {
                              name: "safe-html",
                              rawName: "v-safe-html:button",
                              value: _vm.memberCountSentences["missedPayments"],
                              expression: 'memberCountSentences["missedPayments"]',
                              arg: "button"
                            }
                          ],
                          staticClass: "member-count-sentence"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _c("li", { staticClass: "c-item-wrapper" }, [
              _c("div", { staticClass: "c-item" }, [
                _c("div", {
                  staticClass: "icon-vote-yea icon-round has-background-general"
                }),
                _c(
                  "div",
                  { staticClass: "c-item-copy" },
                  [
                    _c(
                      "sentence-with-member-tooltip",
                      { attrs: { members: _vm.noVotes } },
                      [
                        _c("div", {
                          directives: [
                            {
                              name: "safe-html",
                              rawName: "v-safe-html:button",
                              value: _vm.memberCountSentences["noVotes"],
                              expression: 'memberCountSentences["noVotes"]',
                              arg: "button"
                            }
                          ],
                          staticClass: "member-count-sentence"
                        })
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ],
        1
      )
    ])
  ]);
};
var __vue_staticRenderFns__8 = [];
__vue_render__8._withStripped = true;
var __vue_inject_styles__8 = function(inject) {
  if (!inject) return;
  inject("data-v-26700cda_0", { source: ".c-columns[data-v-26700cda] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n@media screen and (min-width: 769px), print {\n.c-columns[data-v-26700cda] {\n    flex-wrap: nowrap;\n}\n}\n.c-columns + .c-inactive[data-v-26700cda],\n.c-columns + .c-columns[data-v-26700cda] {\n  margin-top: 2rem;\n}\n@media screen and (min-width: 769px), print {\n.c-column[data-v-26700cda] {\n    width: 50%;\n}\n}\n.c-member-count[data-v-26700cda] {\n  display: inline-block;\n  margin-right: 0.25rem;\n}\n.c-para[data-v-26700cda] {\n  margin: 1rem 1rem 1rem 0;\n  display: block;\n}\n.c-item-wrapper[data-v-26700cda] {\n  display: flex;\n}\n.c-item[data-v-26700cda] {\n  display: flex;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.icon-round[data-v-26700cda] {\n  width: 2rem;\n  height: 2rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2rem;\n}\n.table[data-v-26700cda] {\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=GroupMembersActivity.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupMembersActivity.vue", "GroupMembersActivity.vue"], "names": [], "mappings": "AAqLA;EACA,aAAA;EACA,eAAA;EACA,SAAA;ACpLA;AACA;ADgLA;IAMA,iBAAA;ACnLE;AACF;ADqLA;;EAEA,gBAAA;ACnLA;AAEA;ADqLA;IAEA,UAAA;ACpLE;AACF;ADuLA;EACA,qBAAA;EACA,qBAAA;ACpLA;ADuLA;EACA,wBAAA;EACA,cAAA;ACpLA;ADuLA;EACA,aAAA;ACpLA;ADuLA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;ACpLA;ADuLA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;ACpLA;ADuLA;EACA,gBAAA;ACpLA;;AAEA,mDAAmD", "file": "GroupMembersActivity.vue", "sourcesContent": [`<template lang='pug'>
.c-wrapper
  .c-columns
    .c-column
      i18n.is-title-3(tag='h2') Streaks
      i18n.has-text-1.c-para Information about your pledges streaks and other streak members appears here.

      ul.spacer
        li.c-item-wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              strong(v-safe-html='groupStreaksSentences.fullMonthlyPledges')

        li.c-item.wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              strong(v-safe-html='groupStreaksSentences.fullMonthlySupport')

        li.c-item-wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              //- Todo: discuss if tooltip better than toggle
              sentence-with-member-tooltip(:members='onTimePayments' :noEllpsis='true')
                .member-count-sentence(v-safe-html:button='memberCountSentences["onTimePayments"]')

    .c-column
      i18n.is-title-3(tag='h2') Inactivity
      .has-text-1.c-para Members that haven\u2019t logged in, missed their pledges or haven\xB4t voted last proposals will appear here.

      ul.spacer
        li.c-item-wrapper
          .c-item
            .icon-user.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='haventLoggedIn')
                .member-count-sentence(v-safe-html:button='memberCountSentences["haventLoggedIn"]')

        li.c-item-wrapper
          .c-item
            .icon-comment-dollar.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='noIncomeDetails')
                .member-count-sentence(v-safe-html:button='memberCountSentences["noIncomeDetails"]')

        li.c-item-wrapper
          .c-item
            .icon-dollar-sign.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='missedPayments')
                .member-count-sentence(v-safe-html:button='memberCountSentences["missedPayments"]')

        li.c-item-wrapper
          .c-item
            .icon-vote-yea.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='noVotes')
                .member-count-sentence(v-safe-html:button='memberCountSentences["noVotes"]')

</template>

<script>
import { mapGetters } from 'vuex'
import SentenceWithMemberTooltip from './SentenceWithMemberTooltip.vue'
import { compareISOTimestamps, DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import { STREAK_MISSED_PROPSAL_VOTE, STREAK_NOT_LOGGED_IN_DAYS, STREAK_ON_TIME_PAYMENTS, STREAK_MISSED_PAYMENTS } from '../../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'GroupMembersActivity',
  components: {
    SentenceWithMemberTooltip
  },
  data () {
    return {
      isReady: false,
      history: [],
      config: {
        proposalNumber: STREAK_MISSED_PROPSAL_VOTE,
        notLoggedInDays: STREAK_NOT_LOGGED_IN_DAYS
      }
    }
  },
  computed: {
    ...mapGetters([
      'groupStreaks',
      'userDisplayNameFromID',
      'groupProfiles'
    ]),
    onTimePayments () {
      return Object.entries(this.groupStreaks.onTimePayments || {})
        .filter(([, streak]) => streak >= STREAK_ON_TIME_PAYMENTS)
        .sort((a, b) => b[1] - a[1])
        .map(([memberID, streak]) => L('{user} - {count} month streak', { user: this.userDisplayNameFromID(memberID), count: streak }))
    },
    missedPayments () {
      return Object.entries(this.groupStreaks.missedPayments || {})
        .filter(([, streak]) => streak >= STREAK_MISSED_PAYMENTS)
        .map(([memberID, streak]) => {
          const Largs = { user: this.userDisplayNameFromID(memberID), streak }

          return streak >= 2
            ? L('{user} missed {streak} payments', Largs)
            : L('{user} missed {streak} payment', Largs)
        })
    },
    haventLoggedIn () { // group members that haven't logged in for the past 14 days or more
      const now = new Date().toISOString()

      return Object.entries(this.groupProfiles)
        .filter(([, profile]) => compareISOTimestamps(now, profile.lastLoggedIn) >= STREAK_NOT_LOGGED_IN_DAYS * DAYS_MILLIS)
        .map(([memberID]) => this.userDisplayNameFromID(memberID))
    },
    noIncomeDetails () { // group members that haven't entered their income details yet
      return Object.entries(this.groupProfiles)
        .filter(([, profile]) => !profile.incomeDetailsType)
        .map(([memberID]) => this.userDisplayNameFromID(memberID))
    },
    noVotes () {
      return Object.entries(this.groupStreaks.noVotes || {})
        .filter(([, streak]) => streak >= STREAK_MISSED_PROPSAL_VOTE)
        .map(([memberID, streak]) => {
          const Largs = { user: this.userDisplayNameFromID(memberID), streak }

          return streak >= 2
            ? L('{user} missed {streak} votes', Largs)
            : L('{user} missed {streak} vote', Largs)
        })
    },
    groupStreaksSentences () {
      return {
        'fullMonthlyPledges': this.groupStreaks.fullMonthlyPledges === 1
          ? L('100% completed TODO streak of: 1 month')
          : L('100% completed TODO streak of: {streak} months', { streak: this.groupStreaks.fullMonthlyPledges || 0 }),
        'fullMonthlySupport': this.groupStreaks.fullMonthlySupport === 1
          ? L('Mincome goal streak of: 1 month')
          : L('Mincome goal streak of: {streak} months', { streak: this.groupStreaks.fullMonthlySupport || 0 })
      }
    },
    memberCountSentences () {
      const argsCommon = {
        ...this.LTags('strong'),
        'btn_': '<button type="button" class="is-unstyled link t-trigger">',
        '_btn': '</button>'
      }
      const argsMap = {
        'onTimePayments': { ...argsCommon, membercount: this.onTimePayments.length },
        'haventLoggedIn': { ...argsCommon, days: this.config.notLoggedInDays, membercount: this.haventLoggedIn.length },
        'noIncomeDetails': { ...argsCommon, membercount: this.noIncomeDetails.length },
        'missedPayments': { ...argsCommon, membercount: this.missedPayments.length },
        'noVotes': { ...argsCommon, membercount: this.noVotes.length, proposalcount: this.config.proposalNumber }
      }

      return {
        'onTimePayments': this.onTimePayments.length === 1
          ? L('{btn_}1 member{_btn} has {strong_} on-time payment streaks{_strong}', argsMap['onTimePayments'])
          : L('{btn_}{membercount} members{_btn} have {strong_} on-time payment streaks{_strong}', argsMap['onTimePayments']),
        'haventLoggedIn': this.haventLoggedIn.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} logged in past {days} days or more {_strong}', argsMap['haventLoggedIn'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} logged in past {days} days or more {_strong}', argsMap['haventLoggedIn']),
        'noIncomeDetails': this.noIncomeDetails.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} entered income details{_strong}', argsMap['noIncomeDetails'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} entered income details{_strong}', argsMap['noIncomeDetails']),
        'missedPayments': this.missedPayments.length === 1
          ? L('{btn_}1 member{_btn} has {strong_} missed payments {_strong}', argsMap['missedPayments'])
          : L('{btn_}{membercount} members{_btn} have {strong_} missed payments {_strong}', argsMap['missedPayments']),
        'noVotes': this.noVotes.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} voted in the last {proposalcount} proposals {_strong}', argsMap['noVotes'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} voted in the last {proposalcount} proposals {_strong}', argsMap['noVotes'])
      }
    }
  }
}: Object)

<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @include tablet {
    flex-wrap: nowrap;
  }

  + .c-inactive,
  + .c-columns {
    margin-top: 2rem;
  }
}

.c-column {
  @include tablet {
    width: 50%;
  }
}

.c-member-count {
  display: inline-block;
  margin-right: 0.25rem;
}

.c-para {
  margin: 1rem 1rem 1rem 0;
  display: block;
}

.c-item-wrapper {
  display: flex;
}

.c-item {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.icon-round {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
}

.table {
  margin-top: 1rem;
}
</style>
`, ".c-columns {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-columns {\n    flex-wrap: nowrap;\n  }\n}\n.c-columns + .c-inactive,\n.c-columns + .c-columns {\n  margin-top: 2rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-column {\n    width: 50%;\n  }\n}\n\n.c-member-count {\n  display: inline-block;\n  margin-right: 0.25rem;\n}\n\n.c-para {\n  margin: 1rem 1rem 1rem 0;\n  display: block;\n}\n\n.c-item-wrapper {\n  display: flex;\n}\n\n.c-item {\n  display: flex;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.icon-round {\n  width: 2rem;\n  height: 2rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2rem;\n}\n\n.table {\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=GroupMembersActivity.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__8 = "data-v-26700cda";
var __vue_module_identifier__8 = void 0;
var __vue_is_functional_template__8 = false;
function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-wrapper
  .c-columns
    .c-column
      i18n.is-title-3(tag='h2') Streaks
      i18n.has-text-1.c-para Information about your pledges streaks and other streak members appears here.

      ul.spacer
        li.c-item-wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              strong(v-safe-html='groupStreaksSentences.fullMonthlyPledges')

        li.c-item.wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              strong(v-safe-html='groupStreaksSentences.fullMonthlySupport')

        li.c-item-wrapper
          .c-item
            .icon-star.icon-round.has-background-success.has-text-success
            .c-item-copy
              //- Todo: discuss if tooltip better than toggle
              sentence-with-member-tooltip(:members='onTimePayments' :noEllpsis='true')
                .member-count-sentence(v-safe-html:button='memberCountSentences["onTimePayments"]')

    .c-column
      i18n.is-title-3(tag='h2') Inactivity
      .has-text-1.c-para Members that haven\u2019t logged in, missed their pledges or haven\xB4t voted last proposals will appear here.

      ul.spacer
        li.c-item-wrapper
          .c-item
            .icon-user.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='haventLoggedIn')
                .member-count-sentence(v-safe-html:button='memberCountSentences["haventLoggedIn"]')

        li.c-item-wrapper
          .c-item
            .icon-comment-dollar.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='noIncomeDetails')
                .member-count-sentence(v-safe-html:button='memberCountSentences["noIncomeDetails"]')

        li.c-item-wrapper
          .c-item
            .icon-dollar-sign.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='missedPayments')
                .member-count-sentence(v-safe-html:button='memberCountSentences["missedPayments"]')

        li.c-item-wrapper
          .c-item
            .icon-vote-yea.icon-round.has-background-general
            .c-item-copy
              sentence-with-member-tooltip(:members='noVotes')
                .member-count-sentence(v-safe-html:button='memberCountSentences["noVotes"]')

</template>

<script>
import { mapGetters } from 'vuex'
import SentenceWithMemberTooltip from './SentenceWithMemberTooltip.vue'
import { compareISOTimestamps, DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import { STREAK_MISSED_PROPSAL_VOTE, STREAK_NOT_LOGGED_IN_DAYS, STREAK_ON_TIME_PAYMENTS, STREAK_MISSED_PAYMENTS } from '../../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'GroupMembersActivity',
  components: {
    SentenceWithMemberTooltip
  },
  data () {
    return {
      isReady: false,
      history: [],
      config: {
        proposalNumber: STREAK_MISSED_PROPSAL_VOTE,
        notLoggedInDays: STREAK_NOT_LOGGED_IN_DAYS
      }
    }
  },
  computed: {
    ...mapGetters([
      'groupStreaks',
      'userDisplayNameFromID',
      'groupProfiles'
    ]),
    onTimePayments () {
      return Object.entries(this.groupStreaks.onTimePayments || {})
        .filter(([, streak]) => streak >= STREAK_ON_TIME_PAYMENTS)
        .sort((a, b) => b[1] - a[1])
        .map(([memberID, streak]) => L('{user} - {count} month streak', { user: this.userDisplayNameFromID(memberID), count: streak }))
    },
    missedPayments () {
      return Object.entries(this.groupStreaks.missedPayments || {})
        .filter(([, streak]) => streak >= STREAK_MISSED_PAYMENTS)
        .map(([memberID, streak]) => {
          const Largs = { user: this.userDisplayNameFromID(memberID), streak }

          return streak >= 2
            ? L('{user} missed {streak} payments', Largs)
            : L('{user} missed {streak} payment', Largs)
        })
    },
    haventLoggedIn () { // group members that haven't logged in for the past 14 days or more
      const now = new Date().toISOString()

      return Object.entries(this.groupProfiles)
        .filter(([, profile]) => compareISOTimestamps(now, profile.lastLoggedIn) >= STREAK_NOT_LOGGED_IN_DAYS * DAYS_MILLIS)
        .map(([memberID]) => this.userDisplayNameFromID(memberID))
    },
    noIncomeDetails () { // group members that haven't entered their income details yet
      return Object.entries(this.groupProfiles)
        .filter(([, profile]) => !profile.incomeDetailsType)
        .map(([memberID]) => this.userDisplayNameFromID(memberID))
    },
    noVotes () {
      return Object.entries(this.groupStreaks.noVotes || {})
        .filter(([, streak]) => streak >= STREAK_MISSED_PROPSAL_VOTE)
        .map(([memberID, streak]) => {
          const Largs = { user: this.userDisplayNameFromID(memberID), streak }

          return streak >= 2
            ? L('{user} missed {streak} votes', Largs)
            : L('{user} missed {streak} vote', Largs)
        })
    },
    groupStreaksSentences () {
      return {
        'fullMonthlyPledges': this.groupStreaks.fullMonthlyPledges === 1
          ? L('100% completed TODO streak of: 1 month')
          : L('100% completed TODO streak of: {streak} months', { streak: this.groupStreaks.fullMonthlyPledges || 0 }),
        'fullMonthlySupport': this.groupStreaks.fullMonthlySupport === 1
          ? L('Mincome goal streak of: 1 month')
          : L('Mincome goal streak of: {streak} months', { streak: this.groupStreaks.fullMonthlySupport || 0 })
      }
    },
    memberCountSentences () {
      const argsCommon = {
        ...this.LTags('strong'),
        'btn_': '<button type="button" class="is-unstyled link t-trigger">',
        '_btn': '</button>'
      }
      const argsMap = {
        'onTimePayments': { ...argsCommon, membercount: this.onTimePayments.length },
        'haventLoggedIn': { ...argsCommon, days: this.config.notLoggedInDays, membercount: this.haventLoggedIn.length },
        'noIncomeDetails': { ...argsCommon, membercount: this.noIncomeDetails.length },
        'missedPayments': { ...argsCommon, membercount: this.missedPayments.length },
        'noVotes': { ...argsCommon, membercount: this.noVotes.length, proposalcount: this.config.proposalNumber }
      }

      return {
        'onTimePayments': this.onTimePayments.length === 1
          ? L('{btn_}1 member{_btn} has {strong_} on-time payment streaks{_strong}', argsMap['onTimePayments'])
          : L('{btn_}{membercount} members{_btn} have {strong_} on-time payment streaks{_strong}', argsMap['onTimePayments']),
        'haventLoggedIn': this.haventLoggedIn.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} logged in past {days} days or more {_strong}', argsMap['haventLoggedIn'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} logged in past {days} days or more {_strong}', argsMap['haventLoggedIn']),
        'noIncomeDetails': this.noIncomeDetails.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} entered income details{_strong}', argsMap['noIncomeDetails'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} entered income details{_strong}', argsMap['noIncomeDetails']),
        'missedPayments': this.missedPayments.length === 1
          ? L('{btn_}1 member{_btn} has {strong_} missed payments {_strong}', argsMap['missedPayments'])
          : L('{btn_}{membercount} members{_btn} have {strong_} missed payments {_strong}', argsMap['missedPayments']),
        'noVotes': this.noVotes.length === 1
          ? L('{btn_}1 member{_btn} hasn\\'t {strong_} voted in the last {proposalcount} proposals {_strong}', argsMap['noVotes'])
          : L('{btn_}{membercount} members{_btn} haven\\'t {strong_} voted in the last {proposalcount} proposals {_strong}', argsMap['noVotes'])
      }
    }
  }
}: Object)

<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @include tablet {
    flex-wrap: nowrap;
  }

  + .c-inactive,
  + .c-columns {
    margin-top: 2rem;
  }
}

.c-column {
  @include tablet {
    width: 50%;
  }
}

.c-member-count {
  display: inline-block;
  margin-right: 0.25rem;
}

.c-para {
  margin: 1rem 1rem 1rem 0;
  display: block;
}

.c-item-wrapper {
  display: flex;
}

.c-item {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.icon-round {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
}

.table {
  margin-top: 1rem;
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
function __vue_create_injector__6() {
  const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
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
var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8(
  { render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8 },
  __vue_inject_styles__8,
  __vue_script__8,
  __vue_scope_id__8,
  __vue_is_functional_template__8,
  __vue_module_identifier__8,
  false,
  __vue_create_injector__6,
  void 0,
  void 0
);
var GroupMembersActivity_default = __vue_component__8;

// frontend/views/containers/dashboard/GroupActivity.vue
var __vue_script__9 = {
  name: "GroupActivity",
  data() {
    return {
      tabItems: [{
        title: L("Overview"),
        url: "Overview"
      }, {
        title: L("Support %"),
        url: "SupportHistory"
      }, {
        title: L("Todo %"),
        url: "TodoHistory"
      }, {
        title: L("Activity"),
        url: "GroupMembersActivity"
      }],
      ephemeral: {
        activeTab: "Overview"
      }
    };
  },
  components: {
    Overview: Overview_default,
    SupportHistory: SupportHistory_default,
    TodoHistory: TodoHistory_default,
    GroupMembersActivity: GroupMembersActivity_default
  },
  methods: {
    handleTabClick(url) {
      this.ephemeral.activeTab = url;
    }
  }
};
var __vue_render__9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { staticClass: "card" }, [
    _vm.tabItems.length > 0 ? _c(
      "nav",
      {
        staticClass: "tabs",
        attrs: {
          "aria-label": _vm.L("Payments type"),
          "data-test": "payNav"
        }
      },
      _vm._l(_vm.tabItems, function(link, index) {
        return _c(
          "button",
          {
            key: index,
            staticClass: "is-unstyled tabs-link",
            class: { "is-active": _vm.ephemeral.activeTab === link.url },
            attrs: {
              "data-test": "link-" + link.url,
              "aria-expanded": _vm.ephemeral.activeTab === link.url
            },
            on: {
              click: function($event) {
                return _vm.handleTabClick(link.url);
              }
            }
          },
          [_vm._v(_vm._s(link.title))]
        );
      }),
      0
    ) : _vm._e(),
    _c("div", { staticClass: "tab-section" }, [
      _c(
        "div",
        { staticClass: "c-container" },
        [_c(_vm.ephemeral.activeTab, { tag: "component" })],
        1
      )
    ])
  ]);
};
var __vue_staticRenderFns__9 = [];
__vue_render__9._withStripped = true;
var __vue_inject_styles__9 = function(inject) {
  if (!inject) return;
  inject("data-v-dd908a42_0", { source: ".c-container[data-v-dd908a42] {\n  margin-top: 2rem;\n}\n.tabs[data-v-dd908a42] {\n  max-width: calc(100vw - 2rem);\n}\n.tabs-link[data-v-dd908a42] {\n  min-width: 0;\n}\n\n/*# sourceMappingURL=GroupActivity.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupActivity.vue", "GroupActivity.vue"], "names": [], "mappings": "AAqEA;EACA,gBAAA;ACpEA;ADuEA;EACA,6BAAA;ACpEA;ADuEA;EACA,YAAA;ACpEA;;AAEA,4CAA4C", "file": "GroupActivity.vue", "sourcesContent": [`<template lang='pug'>
section.card
  nav.tabs(
    v-if='tabItems.length > 0'
    :aria-label='L("Payments type")'
    data-test='payNav'
  )
    button.is-unstyled.tabs-link(
      v-for='(link, index) in tabItems'
      :key='index'
      :class='{ "is-active": ephemeral.activeTab === link.url}'
      :data-test='\`link-\${link.url}\`'
      :aria-expanded='ephemeral.activeTab === link.url'
      @click='handleTabClick(link.url)'
    )
      | {{ link.title }}

  .tab-section
    .c-container
      component(:is='ephemeral.activeTab')

</template>

<script>
import Overview from '../../../../frontend/views/components/graphs/Overview.vue'
import SupportHistory from '../../../../frontend/views/containers/contributions/SupportHistory.vue'
import TodoHistory from '../../../../frontend/views/containers/contributions/TodoHistory.vue'
import GroupMembersActivity from '../../../../frontend/views/containers/dashboard/GroupMembersActivity.vue'

import { L } from '../../../../frontend/common/common.js'
export default ({
  name: 'GroupActivity',
  data () {
    return {
      tabItems: [{
        title: L('Overview'),
        url: 'Overview'
      }, {
        title: L('Support %'),
        url: 'SupportHistory'
      }, {
        title: L('Todo %'),
        url: 'TodoHistory'
      }, {
        title: L('Activity'),
        url: 'GroupMembersActivity'
      }],
      ephemeral: {
        activeTab: 'Overview'
      }
    }
  },
  components: {
    Overview,
    SupportHistory,
    TodoHistory,
    GroupMembersActivity
  },
  methods: {
    handleTabClick (url) {
      this.ephemeral.activeTab = url
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  margin-top: 2rem;
}

.tabs {
  max-width: calc(100vw - 2rem);
}

.tabs-link {
  min-width: 0;
}
</style>
`, ".c-container {\n  margin-top: 2rem;\n}\n\n.tabs {\n  max-width: calc(100vw - 2rem);\n}\n\n.tabs-link {\n  min-width: 0;\n}\n\n/*# sourceMappingURL=GroupActivity.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__9 = "data-v-dd908a42";
var __vue_module_identifier__9 = void 0;
var __vue_is_functional_template__9 = false;
function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
section.card
  nav.tabs(
    v-if='tabItems.length > 0'
    :aria-label='L("Payments type")'
    data-test='payNav'
  )
    button.is-unstyled.tabs-link(
      v-for='(link, index) in tabItems'
      :key='index'
      :class='{ "is-active": ephemeral.activeTab === link.url}'
      :data-test='\`link-\${link.url}\`'
      :aria-expanded='ephemeral.activeTab === link.url'
      @click='handleTabClick(link.url)'
    )
      | {{ link.title }}

  .tab-section
    .c-container
      component(:is='ephemeral.activeTab')

</template>

<script>
import Overview from '../../../../frontend/views/components/graphs/Overview.vue'
import SupportHistory from '../../../../frontend/views/containers/contributions/SupportHistory.vue'
import TodoHistory from '../../../../frontend/views/containers/contributions/TodoHistory.vue'
import GroupMembersActivity from '../../../../frontend/views/containers/dashboard/GroupMembersActivity.vue'

import { L } from '../../../../frontend/common/common.js'
export default ({
  name: 'GroupActivity',
  data () {
    return {
      tabItems: [{
        title: L('Overview'),
        url: 'Overview'
      }, {
        title: L('Support %'),
        url: 'SupportHistory'
      }, {
        title: L('Todo %'),
        url: 'TodoHistory'
      }, {
        title: L('Activity'),
        url: 'GroupMembersActivity'
      }],
      ephemeral: {
        activeTab: 'Overview'
      }
    }
  },
  components: {
    Overview,
    SupportHistory,
    TodoHistory,
    GroupMembersActivity
  },
  methods: {
    handleTabClick (url) {
      this.ephemeral.activeTab = url
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  margin-top: 2rem;
}

.tabs {
  max-width: calc(100vw - 2rem);
}

.tabs-link {
  min-width: 0;
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
function __vue_create_injector__7() {
  const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
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
var __vue_component__9 = /* @__PURE__ */ __vue_normalize__9(
  { render: __vue_render__9, staticRenderFns: __vue_staticRenderFns__9 },
  __vue_inject_styles__9,
  __vue_script__9,
  __vue_scope_id__9,
  __vue_is_functional_template__9,
  __vue_module_identifier__9,
  false,
  __vue_create_injector__7,
  void 0,
  void 0
);
var GroupActivity_default = __vue_component__9;

// frontend/views/containers/contributions/ContributionsWidget.vue
var __vue_script__10 = {
  name: "ContributionsWidget",
  components: {
    PageSection: PageSection_default,
    ProgressBar: Progress_default
  },
  computed: {
    ...mapGetters([
      "groupSettings",
      "currentGroupState",
      "groupProfiles",
      "currentIdentityState",
      "ourGroupProfile",
      "ourContributionSummary",
      "ourPaymentsSummary"
    ]),
    distributionStart() {
      return humanDate(
        this.groupSettings.distributionDate,
        { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
      );
    },
    distributionStarted() {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime();
    },
    copy() {
      const {
        givingMonetary,
        givingNonMonetary,
        receivingMonetary,
        receivingNonMonetary
      } = this.ourContributionSummary;
      const copy = {};
      if (receivingMonetary) {
        copy.payments = {
          title: !receivingMonetary.total && L("Payments received"),
          status: !receivingMonetary.total && L("No members in the group are pledging yet! \u{1F614}"),
          ctaText: receivingMonetary.total && L("See more")
        };
        copy.monetary = {
          title: L("You need {br_}{amount}", {
            ...LTags(),
            amount: this.withGroupCurrency(receivingMonetary.needed)
          }),
          status: L("You will receive {amount}.", {
            amount: this.withGroupCurrency(receivingMonetary.total)
          })
        };
      } else if (givingMonetary) {
        const copyMonetaryTitle = (amount) => L("You are pledging {br_}{amount}", {
          ...LTags(),
          amount: this.withGroupCurrency(amount)
        });
        if (givingMonetary.pledged > 0) {
          const payedAll = this.ourPaymentsSummary.paymentsTotal === this.ourPaymentsSummary.paymentsDone;
          copy.payments = {
            title: !givingMonetary.total && L("Payments sent"),
            status: !givingMonetary.total && L("At the moment, no one is in need of contributions."),
            ctaText: givingMonetary.total ? payedAll ? L("Review payments") : L("Send payments") : null,
            ctaClass: payedAll && "is-outlined"
          };
          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.pledged),
            status: L("{amount} will be used.", {
              amount: this.withGroupCurrency(givingMonetary.total)
            })
          };
        } else {
          copy.payments = {
            title: L("Payments"),
            status: L("{b1}Make a pledge{b2} to start contributing to other members.", {
              b1: '<button class="link js-btnPledge">',
              b2: "</button>"
            })
          };
          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.total)
          };
        }
      }
      copy.nonMonetary = (() => {
        let status;
        if (receivingNonMonetary) {
          const count = receivingNonMonetary.who.length;
          const isSingularCount = count === 1;
          status = givingNonMonetary ? isSingularCount ? L("You and 1 other member are contributing.") : L("You and {count} other members are contributing.", { count }) : isSingularCount ? L("1 member is contributing.") : L("{count} members are contributing.", { count });
        } else {
          status = givingNonMonetary ? L("You are contributing.") : L("There are no non-monetary contributions.");
        }
        return { title: L("Non-monetary"), status };
      })();
      return copy;
    },
    pSummary() {
      const { paymentsTotal, paymentsDone, hasPartials } = this.ourPaymentsSummary;
      return {
        title: this.ourGroupProfile.incomeDetailsType === "incomeAmount" ? L("Payments received") : L("Payments sent"),
        value: paymentsDone,
        max: paymentsTotal,
        hasMarks: true,
        hasPartials,
        label: L("{value} out of {max}", {
          value: paymentsDone,
          max: paymentsTotal
        })
      };
    }
  },
  methods: {
    withGroupCurrency,
    openModal(modal) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, modal);
    },
    handlePaymentStatusClick(e) {
      if (e.target.classList.contains("js-btnPledge")) {
        this.openModal("incomeDetails");
      }
    }
  }
};
var __vue_render__10 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("page-section", { attrs: { title: _vm.L("Contributions") } }, [
    _c(
      "div",
      {
        staticClass: "c-widget",
        attrs: { "data-test": "contributionsWidget" }
      },
      [
        _c(
          "div",
          { staticClass: "c-column" },
          [
            !_vm.distributionStarted ? _c(
              "div",
              { staticClass: "c-status" },
              [
                _c(
                  "h3",
                  {
                    staticClass: "is-title-4 c-title",
                    attrs: { "data-test": "paymentsTitle" }
                  },
                  [_vm._v(_vm._s(_vm.pSummary.title))]
                ),
                _c(
                  "i18n",
                  {
                    staticClass: "has-text-1",
                    attrs: {
                      tag: "p",
                      "data-test": "paymentsStatus",
                      args: { startDate: _vm.distributionStart }
                    }
                  },
                  [_vm._v("The distribution period begins on: {startDate}")]
                )
              ],
              1
            ) : [
              _vm.copy.payments.title ? _c("div", { staticClass: "c-status" }, [
                _c(
                  "h3",
                  {
                    staticClass: "is-title-4 c-title",
                    attrs: { "data-test": "paymentsTitle" }
                  },
                  [_vm._v(_vm._s(_vm.copy.payments.title))]
                ),
                _c("div", {
                  directives: [
                    {
                      name: "safe-html",
                      rawName: "v-safe-html",
                      value: _vm.copy.payments.status,
                      expression: "copy.payments.status"
                    }
                  ],
                  staticClass: "has-text-1",
                  attrs: { "data-test": "paymentsStatus" },
                  on: { click: _vm.handlePaymentStatusClick }
                })
              ]) : _c(
                "div",
                {
                  staticClass: "c-status",
                  attrs: { "data-test": "paymentsSummary" }
                },
                [
                  _c("div", { staticClass: "c-pSummary" }, [
                    _c("h3", { staticClass: "is-title-4" }, [
                      _vm._v(_vm._s(_vm.pSummary.title))
                    ]),
                    _c(
                      "p",
                      {
                        staticClass: "c-pSummary-status",
                        class: {
                          "has-text-success": _vm.pSummary.max === _vm.pSummary.value
                        }
                      },
                      [
                        _vm.pSummary.max === _vm.pSummary.value ? _c("i", {
                          staticClass: "icon-check is-prefix"
                        }) : _vm._e(),
                        _c("span", { staticClass: "has-text-1" }, [
                          _vm._v(_vm._s(_vm.pSummary.label))
                        ])
                      ]
                    )
                  ]),
                  _c("progress-bar", {
                    staticClass: "c-progress",
                    attrs: {
                      max: _vm.pSummary.max,
                      value: _vm.pSummary.value,
                      hasMarks: _vm.pSummary.hasMarks
                    }
                  })
                ],
                1
              ),
              _vm.copy.payments.ctaText ? _c(
                "router-link",
                {
                  staticClass: "button is-small",
                  class: _vm.copy.payments.ctaClass,
                  attrs: { to: "/payments" }
                },
                [_vm._v(_vm._s(_vm.copy.payments.ctaText))]
              ) : _vm._e()
            ]
          ],
          2
        ),
        _c(
          "div",
          { staticClass: "c-column" },
          [
            _c("h3", {
              directives: [
                {
                  name: "safe-html",
                  rawName: "v-safe-html",
                  value: _vm.copy.monetary.title,
                  expression: "copy.monetary.title"
                }
              ],
              staticClass: "is-title-4 c-title",
              attrs: { "data-test": "monetaryTitle" }
            }),
            _c(
              "div",
              {
                staticClass: "has-text-1 c-status",
                attrs: { "data-test": "monetaryStatus" }
              },
              [_vm._v(_vm._s(_vm.copy.monetary.status))]
            ),
            _c(
              "i18n",
              {
                staticClass: "link",
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    return _vm.openModal("IncomeDetails");
                  }
                }
              },
              [_vm._v("Change")]
            )
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "c-column" },
          [
            _c("h3", { staticClass: "is-title-4 c-title" }, [
              _vm._v(_vm._s(_vm.copy.nonMonetary.title))
            ]),
            _c(
              "div",
              {
                staticClass: "has-text-1 c-status",
                attrs: { "data-test": "nonMonetaryStatus" }
              },
              [_vm._v(_vm._s(_vm.copy.nonMonetary.status))]
            ),
            _c(
              "router-link",
              { staticClass: "link", attrs: { to: "/contributions" } },
              [_vm._v(_vm._s(_vm.L("See all contributions")))]
            )
          ],
          1
        )
      ]
    )
  ]);
};
var __vue_staticRenderFns__10 = [];
__vue_render__10._withStripped = true;
var __vue_inject_styles__10 = function(inject) {
  if (!inject) return;
  inject("data-v-aa8a4bf0_0", { source: '.c-widget[data-v-aa8a4bf0] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "payments payments" "monetary nonMonetary";\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-widget[data-v-aa8a4bf0] {\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-areas: "payments monetary nonMonetary";\n}\n}\n.c-column[data-v-aa8a4bf0]:nth-child(1) {\n  grid-area: payments;\n}\n.c-column[data-v-aa8a4bf0]:nth-child(2) {\n  grid-area: monetary;\n}\n.c-column[data-v-aa8a4bf0]:nth-child(3) {\n  grid-area: nonMonetary;\n}\n.c-title[data-v-aa8a4bf0] {\n  margin-bottom: 0.5rem;\n}\n.c-status[data-v-aa8a4bf0] {\n  margin-bottom: 1.5rem;\n}\n.c-pSummary[data-v-aa8a4bf0] {\n  display: flex;\n  margin-bottom: 1rem;\n}\n.c-pSummary-status[data-v-aa8a4bf0] {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=ContributionsWidget.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/contributions/ContributionsWidget.vue", "ContributionsWidget.vue"], "names": [], "mappings": "AA4MA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,+DACA;EAEA,uBAAA;EACA,oBAAA;AC7MA;AACA;ADoMA;IAWA,kCAAA;IACA,oDAAA;AC5ME;AACF;ADgNA;EAAA,mBAAA;AC5MA;AD6MA;EAAA,mBAAA;AC1MA;AD2MA;EAAA,sBAAA;ACxMA;AD2MA;EACA,qBAAA;ACxMA;AD2MA;EACA,qBAAA;ACxMA;AD2MA;EACA,aAAA;EACA,mBAAA;ACxMA;AD0MA;EACA,mBAAA;ACxMA;;AAEA,kDAAkD", "file": "ContributionsWidget.vue", "sourcesContent": [`<template lang='pug'>
  page-section(:title='L("Contributions")')
    .c-widget(data-test='contributionsWidget')
      .c-column
        .c-status(v-if='!distributionStarted')
          h3.is-title-4.c-title(data-test='paymentsTitle') {{ pSummary.title }}
          i18n.has-text-1(
            tag='p'
            data-test='paymentsStatus'
            :args='{ startDate: distributionStart }'
          ) The distribution period begins on: {startDate}
        template(v-else)
          .c-status(v-if='copy.payments.title')
            h3.is-title-4.c-title(data-test='paymentsTitle') {{ copy.payments.title }}
            .has-text-1(
              data-test='paymentsStatus'
              v-safe-html='copy.payments.status'
              @click='handlePaymentStatusClick'
            )
          .c-status(v-else data-test='paymentsSummary')
            .c-pSummary
              h3.is-title-4 {{ pSummary.title }}
              p.c-pSummary-status(:class='{"has-text-success": pSummary.max === pSummary.value}')
                i.icon-check.is-prefix(v-if='pSummary.max === pSummary.value')
                span.has-text-1 {{ pSummary.label }}
            progress-bar.c-progress(
              :max='pSummary.max'
              :value='pSummary.value'
              :hasMarks='pSummary.hasMarks'
            )

          router-link.button.is-small(
            v-if='copy.payments.ctaText'
            to='/payments'
            :class='copy.payments.ctaClass'
          ) {{ copy.payments.ctaText }}

      .c-column
        h3.is-title-4.c-title(v-safe-html='copy.monetary.title' data-test='monetaryTitle')
        .has-text-1.c-status(data-test='monetaryStatus') {{ copy.monetary.status }}
        i18n.link(tag='button' @click='openModal("IncomeDetails")') Change

      .c-column
        h3.is-title-4.c-title {{ copy.nonMonetary.title }}
        .has-text-1.c-status(data-test='nonMonetaryStatus') {{ copy.nonMonetary.status }}
        router-link.link(
          to='/contributions'
        ) {{ L('See all contributions') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'ContributionsWidget',
  components: {
    PageSection,
    ProgressBar
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'currentGroupState',
      'groupProfiles',
      'currentIdentityState',
      'ourGroupProfile',
      'ourContributionSummary',
      'ourPaymentsSummary'
    ]),
    distributionStart () {
      return humanDate(
        this.groupSettings.distributionDate,
        { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      )
    },
    distributionStarted () {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime()
    },
    copy () {
      const {
        givingMonetary,
        givingNonMonetary,
        receivingMonetary,
        receivingNonMonetary
      } = this.ourContributionSummary

      const copy = {}

      if (receivingMonetary) {
        copy.payments = {
          title: !receivingMonetary.total && L('Payments received'),
          status: !receivingMonetary.total && L('No members in the group are pledging yet! \u{1F614}'),
          ctaText: receivingMonetary.total && L('See more')
        }

        copy.monetary = {
          title: L('You need {br_}{amount}', {
            ...LTags(),
            amount: this.withGroupCurrency(receivingMonetary.needed)
          }),
          status: L('You will receive {amount}.', {
            amount: this.withGroupCurrency(receivingMonetary.total)
          })
        }
      } else if (givingMonetary) {
        const copyMonetaryTitle = (amount) => L('You are pledging {br_}{amount}', {
          ...LTags(),
          amount: this.withGroupCurrency(amount)
        })

        if (givingMonetary.pledged > 0) {
          const payedAll = this.ourPaymentsSummary.paymentsTotal === this.ourPaymentsSummary.paymentsDone

          copy.payments = {
            title: !givingMonetary.total && L('Payments sent'),
            status: !givingMonetary.total && L('At the moment, no one is in need of contributions.'),
            ctaText: givingMonetary.total ? (payedAll ? L('Review payments') : L('Send payments')) : null,
            ctaClass: payedAll && 'is-outlined'
          }

          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.pledged),
            status: L('{amount} will be used.', {
              amount: this.withGroupCurrency(givingMonetary.total)
            })
          }
        } else {
          copy.payments = {
            title: L('Payments'),
            status: L('{b1}Make a pledge{b2} to start contributing to other members.', {
              b1: '<button class="link js-btnPledge">',
              b2: '</button>'
            })
          }

          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.total)
          }
        }
      }

      copy.nonMonetary = (() => {
        let status

        if (receivingNonMonetary) {
          const count = receivingNonMonetary.who.length
          const isSingularCount = count === 1
          status = givingNonMonetary
            ? isSingularCount
              ? L('You and 1 other member are contributing.')
              : L('You and {count} other members are contributing.', { count })
            : isSingularCount
              ? L('1 member is contributing.')
              : L('{count} members are contributing.', { count })
        } else {
          status = givingNonMonetary
            ? L('You are contributing.')
            : L('There are no non-monetary contributions.')
        }

        return { title: L('Non-monetary'), status }
      })()

      return copy
    },
    pSummary () {
      const { paymentsTotal, paymentsDone, hasPartials } = this.ourPaymentsSummary

      return {
        title: this.ourGroupProfile.incomeDetailsType === 'incomeAmount' ? L('Payments received') : L('Payments sent'),
        value: paymentsDone,
        max: paymentsTotal,
        hasMarks: true,
        hasPartials,
        label: L('{value} out of {max}', {
          value: paymentsDone,
          max: paymentsTotal
        })
      }
    }
  },
  methods: {
    withGroupCurrency,
    openModal (modal) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal)
    },
    handlePaymentStatusClick (e) {
      if (e.target.classList.contains('js-btnPledge')) {
        this.openModal('incomeDetails')
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-widget {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "payments payments"
    "monetary nonMonetary";
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @include tablet {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "payments monetary nonMonetary";
  }
}

.c-column {
  &:nth-child(1) { grid-area: payments; }
  &:nth-child(2) { grid-area: monetary; }
  &:nth-child(3) { grid-area: nonMonetary; }
}

.c-title {
  margin-bottom: 0.5rem;
}

.c-status {
  margin-bottom: 1.5rem;
}

.c-pSummary {
  display: flex;
  margin-bottom: 1rem;

  &-status {
    margin-left: 0.5rem;
  }
}
</style>
`, '.c-widget {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "payments payments" "monetary nonMonetary";\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-widget {\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-areas: "payments monetary nonMonetary";\n  }\n}\n\n.c-column:nth-child(1) {\n  grid-area: payments;\n}\n.c-column:nth-child(2) {\n  grid-area: monetary;\n}\n.c-column:nth-child(3) {\n  grid-area: nonMonetary;\n}\n\n.c-title {\n  margin-bottom: 0.5rem;\n}\n\n.c-status {\n  margin-bottom: 1.5rem;\n}\n\n.c-pSummary {\n  display: flex;\n  margin-bottom: 1rem;\n}\n.c-pSummary-status {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=ContributionsWidget.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__10 = "data-v-aa8a4bf0";
var __vue_module_identifier__10 = void 0;
var __vue_is_functional_template__10 = false;
function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  page-section(:title='L("Contributions")')
    .c-widget(data-test='contributionsWidget')
      .c-column
        .c-status(v-if='!distributionStarted')
          h3.is-title-4.c-title(data-test='paymentsTitle') {{ pSummary.title }}
          i18n.has-text-1(
            tag='p'
            data-test='paymentsStatus'
            :args='{ startDate: distributionStart }'
          ) The distribution period begins on: {startDate}
        template(v-else)
          .c-status(v-if='copy.payments.title')
            h3.is-title-4.c-title(data-test='paymentsTitle') {{ copy.payments.title }}
            .has-text-1(
              data-test='paymentsStatus'
              v-safe-html='copy.payments.status'
              @click='handlePaymentStatusClick'
            )
          .c-status(v-else data-test='paymentsSummary')
            .c-pSummary
              h3.is-title-4 {{ pSummary.title }}
              p.c-pSummary-status(:class='{"has-text-success": pSummary.max === pSummary.value}')
                i.icon-check.is-prefix(v-if='pSummary.max === pSummary.value')
                span.has-text-1 {{ pSummary.label }}
            progress-bar.c-progress(
              :max='pSummary.max'
              :value='pSummary.value'
              :hasMarks='pSummary.hasMarks'
            )

          router-link.button.is-small(
            v-if='copy.payments.ctaText'
            to='/payments'
            :class='copy.payments.ctaClass'
          ) {{ copy.payments.ctaText }}

      .c-column
        h3.is-title-4.c-title(v-safe-html='copy.monetary.title' data-test='monetaryTitle')
        .has-text-1.c-status(data-test='monetaryStatus') {{ copy.monetary.status }}
        i18n.link(tag='button' @click='openModal("IncomeDetails")') Change

      .c-column
        h3.is-title-4.c-title {{ copy.nonMonetary.title }}
        .has-text-1.c-status(data-test='nonMonetaryStatus') {{ copy.nonMonetary.status }}
        router-link.link(
          to='/contributions'
        ) {{ L('See all contributions') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'ContributionsWidget',
  components: {
    PageSection,
    ProgressBar
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'currentGroupState',
      'groupProfiles',
      'currentIdentityState',
      'ourGroupProfile',
      'ourContributionSummary',
      'ourPaymentsSummary'
    ]),
    distributionStart () {
      return humanDate(
        this.groupSettings.distributionDate,
        { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      )
    },
    distributionStarted () {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime()
    },
    copy () {
      const {
        givingMonetary,
        givingNonMonetary,
        receivingMonetary,
        receivingNonMonetary
      } = this.ourContributionSummary

      const copy = {}

      if (receivingMonetary) {
        copy.payments = {
          title: !receivingMonetary.total && L('Payments received'),
          status: !receivingMonetary.total && L('No members in the group are pledging yet! \u{1F614}'),
          ctaText: receivingMonetary.total && L('See more')
        }

        copy.monetary = {
          title: L('You need {br_}{amount}', {
            ...LTags(),
            amount: this.withGroupCurrency(receivingMonetary.needed)
          }),
          status: L('You will receive {amount}.', {
            amount: this.withGroupCurrency(receivingMonetary.total)
          })
        }
      } else if (givingMonetary) {
        const copyMonetaryTitle = (amount) => L('You are pledging {br_}{amount}', {
          ...LTags(),
          amount: this.withGroupCurrency(amount)
        })

        if (givingMonetary.pledged > 0) {
          const payedAll = this.ourPaymentsSummary.paymentsTotal === this.ourPaymentsSummary.paymentsDone

          copy.payments = {
            title: !givingMonetary.total && L('Payments sent'),
            status: !givingMonetary.total && L('At the moment, no one is in need of contributions.'),
            ctaText: givingMonetary.total ? (payedAll ? L('Review payments') : L('Send payments')) : null,
            ctaClass: payedAll && 'is-outlined'
          }

          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.pledged),
            status: L('{amount} will be used.', {
              amount: this.withGroupCurrency(givingMonetary.total)
            })
          }
        } else {
          copy.payments = {
            title: L('Payments'),
            status: L('{b1}Make a pledge{b2} to start contributing to other members.', {
              b1: '<button class="link js-btnPledge">',
              b2: '</button>'
            })
          }

          copy.monetary = {
            title: copyMonetaryTitle(givingMonetary.total)
          }
        }
      }

      copy.nonMonetary = (() => {
        let status

        if (receivingNonMonetary) {
          const count = receivingNonMonetary.who.length
          const isSingularCount = count === 1
          status = givingNonMonetary
            ? isSingularCount
              ? L('You and 1 other member are contributing.')
              : L('You and {count} other members are contributing.', { count })
            : isSingularCount
              ? L('1 member is contributing.')
              : L('{count} members are contributing.', { count })
        } else {
          status = givingNonMonetary
            ? L('You are contributing.')
            : L('There are no non-monetary contributions.')
        }

        return { title: L('Non-monetary'), status }
      })()

      return copy
    },
    pSummary () {
      const { paymentsTotal, paymentsDone, hasPartials } = this.ourPaymentsSummary

      return {
        title: this.ourGroupProfile.incomeDetailsType === 'incomeAmount' ? L('Payments received') : L('Payments sent'),
        value: paymentsDone,
        max: paymentsTotal,
        hasMarks: true,
        hasPartials,
        label: L('{value} out of {max}', {
          value: paymentsDone,
          max: paymentsTotal
        })
      }
    }
  },
  methods: {
    withGroupCurrency,
    openModal (modal) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal)
    },
    handlePaymentStatusClick (e) {
      if (e.target.classList.contains('js-btnPledge')) {
        this.openModal('incomeDetails')
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-widget {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "payments payments"
    "monetary nonMonetary";
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @include tablet {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "payments monetary nonMonetary";
  }
}

.c-column {
  &:nth-child(1) { grid-area: payments; }
  &:nth-child(2) { grid-area: monetary; }
  &:nth-child(3) { grid-area: nonMonetary; }
}

.c-title {
  margin-bottom: 0.5rem;
}

.c-status {
  margin-bottom: 1.5rem;
}

.c-pSummary {
  display: flex;
  margin-bottom: 1rem;

  &-status {
    margin-left: 0.5rem;
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
function __vue_create_injector__8() {
  const styles = __vue_create_injector__8.styles || (__vue_create_injector__8.styles = {});
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
var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10(
  { render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10 },
  __vue_inject_styles__10,
  __vue_script__10,
  __vue_scope_id__10,
  __vue_is_functional_template__10,
  __vue_module_identifier__10,
  false,
  __vue_create_injector__8,
  void 0,
  void 0
);
var ContributionsWidget_default = __vue_component__10;

// frontend/views/containers/proposals/ProposalsWidget.vue
var __vue_script__11 = {
  name: "ProposalsWidget",
  components: {
    ProposalItem: ProposalItem_default,
    ButtonDropdownMenu: ButtonDropdownMenu_default
  },
  mounted() {
    this.refreshArchivedProposals();
    esm_default("okTurtles.events/on", PROPOSAL_ARCHIVED, this.onProposalArchived);
    this.matchMediaPhone = window.matchMedia("screen and (max-width: 515px)");
    this.ephemeral.isPhone = this.matchMediaPhone.matches;
    this.matchMediaPhone.onchange = (e) => {
      this.ephemeral.isPhone = e.matches;
    };
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", PROPOSAL_ARCHIVED, this.onProposalArchived);
    this.matchMediaPhone.onchange = null;
    this.clearTimeouts();
  },
  data() {
    return {
      matchMediaPhone: null,
      ephemeral: {
        archivedProposals: [],
        timeouts: [],
        isPhone: false,
        isMenuOpen: false
      }
    };
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters([
      "currentGroupState",
      "currentWelcomeInvite",
      "currentIdentityState",
      "groupDistributionStarted",
      "groupShouldPropose",
      "currentGroupOwnerID",
      "ourIdentityContractId",
      "groupMembersCount"
    ]),
    hasProposals() {
      return Object.keys(this.currentGroupState.proposals).length > 0 || this.ephemeral.archivedProposals.length > 0;
    },
    proposals() {
      const openProposals = Object.entries(this.currentGroupState.proposals).sort((a, b) => {
        return b[1].data.expires_date_ms - a[1].data.expires_date_ms;
      });
      return openProposals.map((x) => x[0]);
    },
    componentData() {
      return {
        type: this.hasProposals ? PageSection_default : CalloutCard_default,
        props: this.hasProposals ? {
          title: L("Proposals"),
          anchor: "proposals"
        } : {
          title: L("Proposals"),
          anchor: "proposals",
          svg: vote_default,
          isCard: true
        }
      };
    },
    proposalOptions() {
      const isUserGroupCreator = this.ourIdentityContractId === this.currentGroupOwnerID;
      const defaultDisableConfig = !this.groupShouldPropose && !isUserGroupCreator;
      return [
        { type: "header", name: L("Group Members") },
        { type: "item", id: "add-new-member", name: L("Add new member"), icon: "user-plus" },
        {
          type: "item",
          id: "remove-member",
          name: L("Remove member"),
          icon: "user-minus",
          isDisabled: this.groupMembersCount < (isUserGroupCreator ? 2 : 3)
        },
        { type: "header", name: L("Voting Systems") },
        // { type: 'item', id: 'change-disagreeing-number', name: 'Change disagreeing number', icon: 'vote-yea' },
        {
          type: "item",
          id: "change-voting-threshold",
          name: L("Change voting threshold"),
          icon: "vote-yea",
          isDisabled: defaultDisableConfig
        },
        { type: "header", name: L("Other Proposals") },
        {
          type: "item",
          id: "change-mincome",
          name: L("Change mincome"),
          icon: "dollar-sign",
          isDisabled: defaultDisableConfig
        },
        {
          type: "item",
          id: "change-distribution-date",
          name: L("Change distribution date"),
          icon: "chart-pie",
          isDisabled: this.groupDistributionStarted((/* @__PURE__ */ new Date()).toISOString()) || defaultDisableConfig
        },
        {
          type: "item",
          id: "generic-proposal",
          name: L("Generic proposal"),
          icon: "envelope-open-text",
          isDisabled: !this.groupShouldPropose
        }
      ];
    }
  },
  methods: {
    onProposalArchived(groupId, hash, proposal) {
      if (groupId === this.currentGroupId) {
        this.ephemeral.archivedProposals.unshift([hash, proposal]);
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter((x) => x[0] !== hash);
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS));
      }
    },
    async refreshArchivedProposals() {
      const key = `proposals/${this.ourIdentityContractId}/${this.currentGroupId}`;
      const archivedProposals = await esm_default("gi.db/archive/load", key) || [];
      this.ephemeral.archivedProposals = archivedProposals.filter(([hash, prop]) => Date.now() - new Date(prop.dateClosed).getTime() < DAYS_MILLIS).sort(([hash1, prop1], [hash2, prop2]) => new Date(prop2.dateClosed).getTime() - new Date(prop1.dateClosed).getTime());
      this.clearTimeouts();
      for (const [hash, proposal] of this.ephemeral.archivedProposals) {
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter((x) => x[0] !== hash);
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS));
      }
    },
    clearTimeouts() {
      while (this.ephemeral.timeouts.length > 0) {
        clearTimeout(this.ephemeral.timeouts.pop());
      }
    },
    hadVoted(proposal) {
      return proposal.votes[this.currentIdentityState.attributes.username] || proposal.status !== STATUS_OPEN;
    },
    openModal(modal, queries) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, modal, queries);
    },
    onDropdownItemSelect(itemId) {
      const modalNameMap = {
        "add-new-member": "InvitationLinkModal",
        "remove-member": "GroupMembersAllModal",
        "change-mincome": "MincomeProposal",
        "change-distribution-date": "DistributionDateProposal",
        "generic-proposal": "GenericProposal",
        "change-disagreeing-number": "ChangeVotingRules",
        "change-voting-threshold": "ChangeVotingRules"
      };
      const queries = {
        "change-disagreeing-number": { rule: "disagreement" },
        "change-voting-threshold": { rule: "percentage" },
        "remove-member": { toRemove: true }
      };
      const isWelcomeInviteExpired = this.currentWelcomeInvite.expires < Date.now();
      if (itemId === "add-new-member" && (this.groupShouldPropose || isWelcomeInviteExpired)) {
        return esm_default("gi.app/group/checkGroupSizeAndProposeMember", { contractID: this.$store.state.currentGroupId });
      }
      this.openModal(modalNameMap[itemId], queries[itemId] || void 0);
    },
    onMenuOpen() {
      this.ephemeral.isMenuOpen = true;
      this.$nextTick(() => {
        const proposalsMenu = document.querySelector(".c-proposals-menu");
        if (proposalsMenu) {
          proposalsMenu.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },
    onMenuClose() {
      this.ephemeral.isMenuOpen = false;
    }
  },
  watch: {
    currentGroupId() {
      this.refreshArchivedProposals();
    }
  }
};
var __vue_render__11 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.componentData.type,
    _vm._b(
      {
        tag: "component",
        class: { "c-has-extra-bottom-margin": _vm.ephemeral.isMenuOpen },
        attrs: { "data-test": "proposalsSection" },
        scopedSlots: _vm._u([
          {
            key: "cta",
            fn: function() {
              return [
                _c(
                  "div",
                  { staticClass: "c-all-actions" },
                  [
                    _c(
                      "i18n",
                      {
                        staticClass: "button is-outlined is-small",
                        attrs: { tag: "span", "data-test": "openAllProposals" },
                        on: {
                          click: function($event) {
                            return _vm.openModal("PropositionsAllModal");
                          }
                        }
                      },
                      [_vm._v("Archived proposals")]
                    ),
                    _c("button-dropdown-menu", {
                      staticClass: "c-proposals-menu",
                      attrs: {
                        buttonText: _vm.L("Create proposal"),
                        options: _vm.proposalOptions,
                        boundEdge: _vm.ephemeral.isPhone ? "left" : "right"
                      },
                      on: {
                        select: _vm.onDropdownItemSelect,
                        "menu-open": _vm.onMenuOpen,
                        "menu-close": _vm.onMenuClose
                      }
                    })
                  ],
                  1
                )
              ];
            },
            proxy: true
          }
        ])
      },
      "component",
      _vm.componentData.props,
      false
    ),
    [
      _vm.hasProposals ? _c(
        "ul",
        {
          staticClass: "c-proposals",
          attrs: { "data-test": "proposalsWidget" }
        },
        [
          _vm._l(_vm.proposals, function(hash) {
            return _c("proposal-item", {
              key: "proposal-" + hash,
              attrs: { proposalHash: hash }
            });
          }),
          _vm._l(_vm.ephemeral.archivedProposals, function(ref) {
            var hash = ref[0];
            var obj = ref[1];
            return _c("proposal-item", {
              key: "archived-proposal-" + hash,
              attrs: { proposalHash: hash, proposalObject: obj }
            });
          })
        ],
        2
      ) : _c(
        "div",
        { staticClass: "c-description" },
        [
          _c("i18n", { attrs: { tag: "p" } }, [
            _vm._v(
              "In Group Income, every member of the group gets to vote on important decisions, like removing or adding members, changing the mincome value and others."
            )
          ]),
          _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
            _vm._v("There are no open proposals.")
          ])
        ],
        1
      )
    ]
  );
};
var __vue_staticRenderFns__11 = [];
__vue_render__11._withStripped = true;
var __vue_inject_styles__11 = function(inject) {
  if (!inject) return;
  inject("data-v-4619f1f6_0", { source: ".card[data-v-4619f1f6] {\n  position: relative;\n}\n.c-all-actions[data-v-4619f1f6] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: baseline;\n}\n.c-all-actions .c-see-all-proposal-btn[data-v-4619f1f6] {\n  font-weight: 400;\n}\n@media screen and (max-width: 768px) {\n.c-all-actions .c-see-all-proposal-btn[data-v-4619f1f6] {\n    display: none;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-all-actions[data-v-4619f1f6] {\n    top: 1rem;\n}\n}\n.c-description p[data-v-4619f1f6] {\n  margin-top: 1rem;\n}\n.c-has-extra-bottom-margin[data-v-4619f1f6] {\n  margin-bottom: 12rem;\n}\n\n/*# sourceMappingURL=ProposalsWidget.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/ProposalsWidget.vue", "ProposalsWidget.vue"], "names": [], "mappings": "AAmQA;EACA,kBAAA;AClQA;ADqQA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;AClQA;ADoQA;EACA,gBAAA;AClQA;AACA;ADgQA;IAIA,aAAA;ACjQE;AACF;AACA;ADqPA;IAeA,SAAA;ACjQE;AACF;ADoQA;EACA,gBAAA;ACjQA;ADoQA;EACA,oBAAA;ACjQA;;AAEA,8CAA8C", "file": "ProposalsWidget.vue", "sourcesContent": [`<template lang='pug'>
component(
  :is='componentData.type'
  v-bind='componentData.props'
  :class='{ "c-has-extra-bottom-margin": ephemeral.isMenuOpen }'
  data-test='proposalsSection'
)
  template(#cta='')
    .c-all-actions
      i18n.button.is-outlined.is-small(
        tag='span'
        data-test='openAllProposals'
        @click='openModal("PropositionsAllModal")'
      ) Archived proposals

      button-dropdown-menu.c-proposals-menu(
        :buttonText='L("Create proposal")'
        :options='proposalOptions'
        @select='onDropdownItemSelect'
        @menu-open='onMenuOpen'
        @menu-close='onMenuClose'
        :boundEdge='ephemeral.isPhone ? "left" : "right"'
      )

  ul.c-proposals(v-if='hasProposals' data-test='proposalsWidget')
    proposal-item(
      v-for='hash in proposals'
      :key='\`proposal-\${hash}\`'
      :proposalHash='hash'
    )
    proposal-item(
      v-for='[hash, obj] of ephemeral.archivedProposals'
      :key='\`archived-proposal-\${hash}\`'
      :proposalHash='hash'
      :proposalObject='obj'
    )

  .c-description(v-else)
    i18n(tag='p') In Group Income, every member of the group gets to vote on important decisions, like removing or adding members, changing the mincome value and others.
    i18n.has-text-1(tag='p') There are no open proposals.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import SvgVote from '../../../../frontend/assets/svgs/vote.svg'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import ProposalItem from './ProposalItem.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import ButtonDropdownMenu from '../../../../frontend/views/components/ButtonDropdownMenu.vue'
import { STATUS_OPEN, PROPOSAL_ARCHIVED } from '../../../../frontend/model/contracts/shared/constants.js'
import { DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'ProposalsWidget',
  components: {
    ProposalItem,
    ButtonDropdownMenu
  },
  mounted () {
    this.refreshArchivedProposals()
    sbp('okTurtles.events/on', PROPOSAL_ARCHIVED, this.onProposalArchived)

    this.matchMediaPhone = window.matchMedia('screen and (max-width: 515px)')
    this.ephemeral.isPhone = this.matchMediaPhone.matches
    this.matchMediaPhone.onchange = (e) => {
      this.ephemeral.isPhone = e.matches
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', PROPOSAL_ARCHIVED, this.onProposalArchived)
    this.matchMediaPhone.onchange = null
    this.clearTimeouts()
  },
  data () {
    return {
      matchMediaPhone: null,
      ephemeral: {
        archivedProposals: [],
        timeouts: [],
        isPhone: false,
        isMenuOpen: false
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'currentGroupState',
      'currentWelcomeInvite',
      'currentIdentityState',
      'groupDistributionStarted',
      'groupShouldPropose',
      'currentGroupOwnerID',
      'ourIdentityContractId',
      'groupMembersCount'
    ]),
    hasProposals () {
      return Object.keys(this.currentGroupState.proposals).length > 0 ||
        this.ephemeral.archivedProposals.length > 0
    },
    proposals () {
      const openProposals = Object.entries(this.currentGroupState.proposals)
        .sort((a, b) => {
          return b[1].data.expires_date_ms - a[1].data.expires_date_ms
        })
      return openProposals.map(x => x[0])
    },
    componentData () {
      return {
        type: this.hasProposals ? PageSection : CalloutCard,
        props: this.hasProposals
          ? {
              title: L('Proposals'),
              anchor: 'proposals'
            }
          : {
              title: L('Proposals'),
              anchor: 'proposals',
              svg: SvgVote,
              isCard: true
            }
      }
    },
    proposalOptions () {
      const isUserGroupCreator = this.ourIdentityContractId === this.currentGroupOwnerID
      const defaultDisableConfig = !this.groupShouldPropose && !isUserGroupCreator

      return [
        { type: 'header', name: L('Group Members') },
        { type: 'item', id: 'add-new-member', name: L('Add new member'), icon: 'user-plus' },
        {
          type: 'item',
          id: 'remove-member',
          name: L('Remove member'),
          icon: 'user-minus',
          isDisabled: this.groupMembersCount < (isUserGroupCreator ? 2 : 3)
        },
        { type: 'header', name: L('Voting Systems') },
        // { type: 'item', id: 'change-disagreeing-number', name: 'Change disagreeing number', icon: 'vote-yea' },
        {
          type: 'item',
          id: 'change-voting-threshold',
          name: L('Change voting threshold'),
          icon: 'vote-yea',
          isDisabled: defaultDisableConfig
        },
        { type: 'header', name: L('Other Proposals') },
        {
          type: 'item',
          id: 'change-mincome',
          name: L('Change mincome'),
          icon: 'dollar-sign',
          isDisabled: defaultDisableConfig
        },
        {
          type: 'item',
          id: 'change-distribution-date',
          name: L('Change distribution date'),
          icon: 'chart-pie',
          isDisabled: this.groupDistributionStarted(new Date().toISOString()) || defaultDisableConfig
        },
        {
          type: 'item',
          id: 'generic-proposal',
          name: L('Generic proposal'),
          icon: 'envelope-open-text',
          isDisabled: !this.groupShouldPropose
        }
      ]
    }
  },
  methods: {
    onProposalArchived (groupId, hash, proposal) {
      if (groupId === this.currentGroupId) {
        this.ephemeral.archivedProposals.unshift([hash, proposal])
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter(x => x[0] !== hash)
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS))
      }
    },
    async refreshArchivedProposals () {
      // NOTE: all the archived proposals are displayed in the dashboard widget for 24 hours
      //       https://github.com/okTurtles/group-income/pull/1723#discussion_r1323369824
      const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
      const archivedProposals = await sbp('gi.db/archive/load', key) || []
      // proposals which are archived in the last 24 hours
      this.ephemeral.archivedProposals = archivedProposals
        .filter(([hash, prop]) => Date.now() - new Date(prop.dateClosed).getTime() < DAYS_MILLIS)
        .sort(([hash1, prop1], [hash2, prop2]) => new Date(prop2.dateClosed).getTime() - new Date(prop1.dateClosed).getTime())
      // after a day, remove it from the list
      this.clearTimeouts()
      for (const [hash, proposal] of this.ephemeral.archivedProposals) {
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter(x => x[0] !== hash)
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS))
      }
    },
    clearTimeouts () {
      while (this.ephemeral.timeouts.length > 0) {
        clearTimeout(this.ephemeral.timeouts.pop())
      }
    },
    hadVoted (proposal) {
      return proposal.votes[this.currentIdentityState.attributes.username] || proposal.status !== STATUS_OPEN
    },
    openModal (modal, queries) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal, queries)
    },
    onDropdownItemSelect (itemId) {
      const modalNameMap = {
        'add-new-member': 'InvitationLinkModal',
        'remove-member': 'GroupMembersAllModal',
        'change-mincome': 'MincomeProposal',
        'change-distribution-date': 'DistributionDateProposal',
        'generic-proposal': 'GenericProposal',
        'change-disagreeing-number': 'ChangeVotingRules',
        'change-voting-threshold': 'ChangeVotingRules'
      }
      const queries = {
        'change-disagreeing-number': { rule: 'disagreement' },
        'change-voting-threshold': { rule: 'percentage' },
        'remove-member': { toRemove: true }
      }

      const isWelcomeInviteExpired = this.currentWelcomeInvite.expires < Date.now()
      if (itemId === 'add-new-member' && (this.groupShouldPropose || isWelcomeInviteExpired)) {
        return sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID: this.$store.state.currentGroupId })
      }

      this.openModal(modalNameMap[itemId], queries[itemId] || undefined)
    },
    onMenuOpen () {
      this.ephemeral.isMenuOpen = true

      this.$nextTick(() => {
        const proposalsMenu = document.querySelector('.c-proposals-menu')
        if (proposalsMenu) {
          proposalsMenu.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    },
    onMenuClose () {
      this.ephemeral.isMenuOpen = false
    }
  },
  watch: {
    currentGroupId () {
      this.refreshArchivedProposals()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.card {
  position: relative;
}

.c-all-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: baseline;

  .c-see-all-proposal-btn {
    font-weight: 400;

    @include phone {
      display: none;
    }
  }

  @include desktop {
    top: 1rem;
  }
}

.c-description p {
  margin-top: 1rem;
}

.c-has-extra-bottom-margin {
  margin-bottom: 12rem;
}
</style>
`, ".card {\n  position: relative;\n}\n\n.c-all-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: baseline;\n}\n.c-all-actions .c-see-all-proposal-btn {\n  font-weight: 400;\n}\n@media screen and (max-width: 768px) {\n  .c-all-actions .c-see-all-proposal-btn {\n    display: none;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-all-actions {\n    top: 1rem;\n  }\n}\n\n.c-description p {\n  margin-top: 1rem;\n}\n\n.c-has-extra-bottom-margin {\n  margin-bottom: 12rem;\n}\n\n/*# sourceMappingURL=ProposalsWidget.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__11 = "data-v-4619f1f6";
var __vue_module_identifier__11 = void 0;
var __vue_is_functional_template__11 = false;
function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
component(
  :is='componentData.type'
  v-bind='componentData.props'
  :class='{ "c-has-extra-bottom-margin": ephemeral.isMenuOpen }'
  data-test='proposalsSection'
)
  template(#cta='')
    .c-all-actions
      i18n.button.is-outlined.is-small(
        tag='span'
        data-test='openAllProposals'
        @click='openModal("PropositionsAllModal")'
      ) Archived proposals

      button-dropdown-menu.c-proposals-menu(
        :buttonText='L("Create proposal")'
        :options='proposalOptions'
        @select='onDropdownItemSelect'
        @menu-open='onMenuOpen'
        @menu-close='onMenuClose'
        :boundEdge='ephemeral.isPhone ? "left" : "right"'
      )

  ul.c-proposals(v-if='hasProposals' data-test='proposalsWidget')
    proposal-item(
      v-for='hash in proposals'
      :key='\`proposal-\${hash}\`'
      :proposalHash='hash'
    )
    proposal-item(
      v-for='[hash, obj] of ephemeral.archivedProposals'
      :key='\`archived-proposal-\${hash}\`'
      :proposalHash='hash'
      :proposalObject='obj'
    )

  .c-description(v-else)
    i18n(tag='p') In Group Income, every member of the group gets to vote on important decisions, like removing or adding members, changing the mincome value and others.
    i18n.has-text-1(tag='p') There are no open proposals.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import SvgVote from '../../../../frontend/assets/svgs/vote.svg'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import ProposalItem from './ProposalItem.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import ButtonDropdownMenu from '../../../../frontend/views/components/ButtonDropdownMenu.vue'
import { STATUS_OPEN, PROPOSAL_ARCHIVED } from '../../../../frontend/model/contracts/shared/constants.js'
import { DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'ProposalsWidget',
  components: {
    ProposalItem,
    ButtonDropdownMenu
  },
  mounted () {
    this.refreshArchivedProposals()
    sbp('okTurtles.events/on', PROPOSAL_ARCHIVED, this.onProposalArchived)

    this.matchMediaPhone = window.matchMedia('screen and (max-width: 515px)')
    this.ephemeral.isPhone = this.matchMediaPhone.matches
    this.matchMediaPhone.onchange = (e) => {
      this.ephemeral.isPhone = e.matches
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', PROPOSAL_ARCHIVED, this.onProposalArchived)
    this.matchMediaPhone.onchange = null
    this.clearTimeouts()
  },
  data () {
    return {
      matchMediaPhone: null,
      ephemeral: {
        archivedProposals: [],
        timeouts: [],
        isPhone: false,
        isMenuOpen: false
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'currentGroupState',
      'currentWelcomeInvite',
      'currentIdentityState',
      'groupDistributionStarted',
      'groupShouldPropose',
      'currentGroupOwnerID',
      'ourIdentityContractId',
      'groupMembersCount'
    ]),
    hasProposals () {
      return Object.keys(this.currentGroupState.proposals).length > 0 ||
        this.ephemeral.archivedProposals.length > 0
    },
    proposals () {
      const openProposals = Object.entries(this.currentGroupState.proposals)
        .sort((a, b) => {
          return b[1].data.expires_date_ms - a[1].data.expires_date_ms
        })
      return openProposals.map(x => x[0])
    },
    componentData () {
      return {
        type: this.hasProposals ? PageSection : CalloutCard,
        props: this.hasProposals
          ? {
              title: L('Proposals'),
              anchor: 'proposals'
            }
          : {
              title: L('Proposals'),
              anchor: 'proposals',
              svg: SvgVote,
              isCard: true
            }
      }
    },
    proposalOptions () {
      const isUserGroupCreator = this.ourIdentityContractId === this.currentGroupOwnerID
      const defaultDisableConfig = !this.groupShouldPropose && !isUserGroupCreator

      return [
        { type: 'header', name: L('Group Members') },
        { type: 'item', id: 'add-new-member', name: L('Add new member'), icon: 'user-plus' },
        {
          type: 'item',
          id: 'remove-member',
          name: L('Remove member'),
          icon: 'user-minus',
          isDisabled: this.groupMembersCount < (isUserGroupCreator ? 2 : 3)
        },
        { type: 'header', name: L('Voting Systems') },
        // { type: 'item', id: 'change-disagreeing-number', name: 'Change disagreeing number', icon: 'vote-yea' },
        {
          type: 'item',
          id: 'change-voting-threshold',
          name: L('Change voting threshold'),
          icon: 'vote-yea',
          isDisabled: defaultDisableConfig
        },
        { type: 'header', name: L('Other Proposals') },
        {
          type: 'item',
          id: 'change-mincome',
          name: L('Change mincome'),
          icon: 'dollar-sign',
          isDisabled: defaultDisableConfig
        },
        {
          type: 'item',
          id: 'change-distribution-date',
          name: L('Change distribution date'),
          icon: 'chart-pie',
          isDisabled: this.groupDistributionStarted(new Date().toISOString()) || defaultDisableConfig
        },
        {
          type: 'item',
          id: 'generic-proposal',
          name: L('Generic proposal'),
          icon: 'envelope-open-text',
          isDisabled: !this.groupShouldPropose
        }
      ]
    }
  },
  methods: {
    onProposalArchived (groupId, hash, proposal) {
      if (groupId === this.currentGroupId) {
        this.ephemeral.archivedProposals.unshift([hash, proposal])
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter(x => x[0] !== hash)
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS))
      }
    },
    async refreshArchivedProposals () {
      // NOTE: all the archived proposals are displayed in the dashboard widget for 24 hours
      //       https://github.com/okTurtles/group-income/pull/1723#discussion_r1323369824
      const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
      const archivedProposals = await sbp('gi.db/archive/load', key) || []
      // proposals which are archived in the last 24 hours
      this.ephemeral.archivedProposals = archivedProposals
        .filter(([hash, prop]) => Date.now() - new Date(prop.dateClosed).getTime() < DAYS_MILLIS)
        .sort(([hash1, prop1], [hash2, prop2]) => new Date(prop2.dateClosed).getTime() - new Date(prop1.dateClosed).getTime())
      // after a day, remove it from the list
      this.clearTimeouts()
      for (const [hash, proposal] of this.ephemeral.archivedProposals) {
        this.ephemeral.timeouts.push(setTimeout(() => {
          this.ephemeral.archivedProposals = this.ephemeral.archivedProposals.filter(x => x[0] !== hash)
        }, new Date(proposal.dateClosed).getTime() - Date.now() + DAYS_MILLIS))
      }
    },
    clearTimeouts () {
      while (this.ephemeral.timeouts.length > 0) {
        clearTimeout(this.ephemeral.timeouts.pop())
      }
    },
    hadVoted (proposal) {
      return proposal.votes[this.currentIdentityState.attributes.username] || proposal.status !== STATUS_OPEN
    },
    openModal (modal, queries) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal, queries)
    },
    onDropdownItemSelect (itemId) {
      const modalNameMap = {
        'add-new-member': 'InvitationLinkModal',
        'remove-member': 'GroupMembersAllModal',
        'change-mincome': 'MincomeProposal',
        'change-distribution-date': 'DistributionDateProposal',
        'generic-proposal': 'GenericProposal',
        'change-disagreeing-number': 'ChangeVotingRules',
        'change-voting-threshold': 'ChangeVotingRules'
      }
      const queries = {
        'change-disagreeing-number': { rule: 'disagreement' },
        'change-voting-threshold': { rule: 'percentage' },
        'remove-member': { toRemove: true }
      }

      const isWelcomeInviteExpired = this.currentWelcomeInvite.expires < Date.now()
      if (itemId === 'add-new-member' && (this.groupShouldPropose || isWelcomeInviteExpired)) {
        return sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID: this.$store.state.currentGroupId })
      }

      this.openModal(modalNameMap[itemId], queries[itemId] || undefined)
    },
    onMenuOpen () {
      this.ephemeral.isMenuOpen = true

      this.$nextTick(() => {
        const proposalsMenu = document.querySelector('.c-proposals-menu')
        if (proposalsMenu) {
          proposalsMenu.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    },
    onMenuClose () {
      this.ephemeral.isMenuOpen = false
    }
  },
  watch: {
    currentGroupId () {
      this.refreshArchivedProposals()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.card {
  position: relative;
}

.c-all-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: baseline;

  .c-see-all-proposal-btn {
    font-weight: 400;

    @include phone {
      display: none;
    }
  }

  @include desktop {
    top: 1rem;
  }
}

.c-description p {
  margin-top: 1rem;
}

.c-has-extra-bottom-margin {
  margin-bottom: 12rem;
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
function __vue_create_injector__9() {
  const styles = __vue_create_injector__9.styles || (__vue_create_injector__9.styles = {});
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
var __vue_component__11 = /* @__PURE__ */ __vue_normalize__11(
  { render: __vue_render__11, staticRenderFns: __vue_staticRenderFns__11 },
  __vue_inject_styles__11,
  __vue_script__11,
  __vue_scope_id__11,
  __vue_is_functional_template__11,
  __vue_module_identifier__11,
  false,
  __vue_create_injector__9,
  void 0,
  void 0
);
var ProposalsWidget_default = __vue_component__11;

// frontend/views/containers/proposals/MemberRequest.vue
var __vue_script__12 = {
  name: "MemberRequest",
  components: {
    CalloutCard: CalloutCard_default,
    SvgConversation: conversation_default,
    PageSection: PageSection_default,
    Avatar: Avatar_default,
    AvatarUser: AvatarUser_default,
    ProfileCard: ProfileCard_default
  },
  data() {
    return {
      SvgConversation: conversation_default,
      requestsSorted: [
        {
          contractID: "1",
          username: "Pierre",
          date: (/* @__PURE__ */ new Date()).toISOString(),
          displayName: "Pierre",
          status: "requested"
        },
        {
          contractID: "2",
          username: "Pierre",
          date: (/* @__PURE__ */ new Date()).toISOString(),
          displayName: "Pierre",
          status: "rejected"
        },
        {
          contractID: "3",
          username: "Greg",
          date: (/* @__PURE__ */ new Date()).toISOString(),
          displayName: "Greg",
          status: "approuved"
        }
      ]
    };
  },
  computed: {
    ...mapGetters([
      "currentGroupState",
      "ourUserIdentityContract"
    ]),
    hasMemberRequest() {
      return this.requests;
    },
    requests() {
      if (this.requestsSorted) {
        return this.requestsSorted;
      }
      return [];
    }
  },
  methods: {
    humanDate,
    approve(request) {
      return true;
    },
    reject(request) {
      return true;
    },
    approveAll() {
      return true;
    },
    rejectAll() {
      return true;
    },
    undo() {
      return true;
    }
  }
};
var __vue_render__12 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.hasMemberRequest ? _c(
    "callout-card",
    {
      attrs: {
        title: _vm.L("Member Requests"),
        svg: _vm.SvgConversation,
        isCard: true
      }
    },
    [
      _c("i18n", { attrs: { tag: "p" } }, [
        _vm._v(
          "In Group Income, you can use an invitation link to add members to the group and invite up to 60 people. Once someone uses that link to join the group, they\u2019ll need to be approved by a member of the group with member approval permissions."
        )
      ]),
      _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
        _vm._v("There are no open requests right now.")
      ]),
      _c(
        "i18n",
        {
          staticClass: "c-all-requests button is-outlined is-small",
          attrs: { tag: "span" },
          on: { click: _vm.toggleHistory }
        },
        [_vm._v("See all requests")]
      )
    ],
    1
  ) : _c("page-section", { attrs: { title: _vm.L("Member Requests") } }, [
    _c(
      "div",
      { staticClass: "c-all-actions" },
      [
        _c(
          "i18n",
          {
            staticClass: "button is-outlined is-small",
            attrs: { tag: "span" },
            on: { click: _vm.approveAll }
          },
          [_vm._v("Approve All")]
        ),
        _c(
          "i18n",
          {
            staticClass: "button is-outlined is-small",
            attrs: { tag: "span" },
            on: { click: _vm.rejectAll }
          },
          [_vm._v("Reject All")]
        )
      ],
      1
    ),
    _c(
      "ul",
      { staticClass: "c-group-list" },
      _vm._l(_vm.requestsSorted, function(ref) {
        var contractID = ref.contractID;
        var username = ref.username;
        var displayName = ref.displayName;
        var status = ref.status;
        var date = ref.date;
        return _c(
          "li",
          {
            key: contractID,
            staticClass: "c-group-member",
            attrs: { "data-test": "request-" + username }
          },
          [
            _c(
              "profile-card",
              { attrs: { contractID } },
              [
                _c("avatar-user", {
                  attrs: { contractID, size: "sm" }
                }),
                _c("div", { staticClass: "c-name has-text-bold" }, [
                  _vm._v(_vm._s(username))
                ]),
                _c("div", { staticClass: "c-date has-text-1" }, [
                  _vm._v(
                    _vm._s(
                      _vm.humanDate(date, {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })
                    )
                  )
                ]),
                status === "requested" ? _c(
                  "div",
                  { staticClass: "c-action-container" },
                  [
                    _c(
                      "i18n",
                      {
                        staticClass: "button is-outlined is-small",
                        attrs: { tag: "span" },
                        on: { click: _vm.approve }
                      },
                      [_vm._v("Approve")]
                    ),
                    _c(
                      "i18n",
                      {
                        staticClass: "button is-outlined is-small",
                        attrs: { tag: "span" },
                        on: { click: _vm.reject }
                      },
                      [_vm._v("Reject")]
                    )
                  ],
                  1
                ) : _c(
                  "div",
                  {
                    staticClass: "c-action-container c-undo-container"
                  },
                  [
                    status === "rejected" ? _c(
                      "div",
                      { staticClass: "has-text-danger" },
                      [
                        _c("i", { staticClass: "icon-times" }),
                        _c("i18n", { attrs: { tag: "span" } }, [
                          _vm._v("Request Rejected.")
                        ])
                      ],
                      1
                    ) : _c(
                      "div",
                      { staticClass: "has-text-success" },
                      [
                        _c("i", { staticClass: "icon-check" }),
                        _c("i18n", { attrs: { tag: "span" } }, [
                          _vm._v("Request Approved.")
                        ])
                      ],
                      1
                    ),
                    _c(
                      "i18n",
                      {
                        staticClass: "is-link-inherit has-text-1",
                        attrs: { tag: "span" },
                        on: { click: _vm.undo }
                      },
                      [_vm._v("Undo")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      }),
      0
    )
  ]);
};
var __vue_staticRenderFns__12 = [];
__vue_render__12._withStripped = true;
var __vue_inject_styles__12 = function(inject) {
  if (!inject) return;
  inject("data-v-44f20e16_0", { source: ".card[data-v-44f20e16] {\n  position: relative;\n}\n.c-all-requests[data-v-44f20e16] {\n  position: absolute;\n  right: 2.5rem;\n  top: 1rem;\n}\n.c-all-actions[data-v-44f20e16] {\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-all-actions[data-v-44f20e16] {\n    position: absolute;\n    right: 2.5rem;\n    top: 1rem;\n}\n}\n.c-calloutCard p + .has-text-1[data-v-44f20e16] {\n  margin-top: 1rem;\n}\n.c-action-container[data-v-44f20e16] {\n  margin-top: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-action-container[data-v-44f20e16] {\n    margin-left: auto;\n    margin-top: 0;\n}\n}\n.button + .button[data-v-44f20e16] {\n  margin-left: 1rem;\n}\n.c-name[data-v-44f20e16] {\n  margin: 0 1rem;\n}\n.c-group-members[data-v-44f20e16] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n.c-group-members-header[data-v-44f20e16] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.c-group-list[data-v-44f20e16] {\n  margin-bottom: 1.5rem;\n  margin-top: 1.5rem;\n}\n.c-group-member[data-v-44f20e16] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 4.625rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--general_0);\n}\n.c-group-member[data-v-44f20e16]:first-child {\n  border-top: 1px solid var(--general_0);\n}\n.c-group-member > .c-twrapper[data-v-44f20e16] {\n  width: 100%;\n  flex-wrap: wrap;\n}\n.c-avatar[data-v-44f20e16] {\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 0;\n}\n.c-undo-container[data-v-44f20e16] {\n  display: flex;\n}\n.c-undo-container > div[data-v-44f20e16] {\n  min-width: 9rem;\n}\n.c-undo-container span[data-v-44f20e16],\n.c-undo-container i[data-v-44f20e16] {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=MemberRequest.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/MemberRequest.vue", "MemberRequest.vue"], "names": [], "mappings": "AA8JA;EACA,kBAAA;AC7JA;ADgKA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;AC7JA;ADgKA;EACA,kBAAA;AC7JA;AACA;AD2JA;IAIA,kBAAA;IACA,aAAA;IACA,SAAA;AC5JE;AACF;AD+JA;EACA,gBAAA;AC5JA;AD+JA;EACA,kBAAA;AC5JA;AACA;AD0JA;IAIA,iBAAA;IACA,aAAA;AC3JE;AACF;AD8JA;EACA,iBAAA;AC3JA;AD8JA;EACA,cAAA;AC3JA;AD8JA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AC3JA;AD8JA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,qBAAA;AC3JA;AD8JA;EACA,qBAAA;EACA,kBAAA;AC3JA;AD8JA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;EACA,yCAAA;AC3JA;AD6JA;EACA,sCAAA;AC3JA;AD8JA;EACA,WAAA;EACA,eAAA;AC5JA;ADgKA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AC7JA;ADgKA;EACA,aAAA;AC7JA;AD+JA;EACA,eAAA;AC7JA;ADgKA;;EAEA,mBAAA;AC9JA;;AAEA,4CAA4C", "file": "MemberRequest.vue", "sourcesContent": [`<template lang='pug'>
  callout-card(
    v-if='!hasMemberRequest'
    :title='L("Member Requests")'
    :svg='SvgConversation'
    :isCard='true'
  )

    i18n(tag='p') In Group Income, you can use an invitation link to add members to the group and invite up to 60 people. Once someone uses that link to join the group, they\u2019ll need to be approved by a member of the group with member approval permissions.
    i18n.has-text-1(tag='p') There are no open requests right now.

    i18n.c-all-requests.button.is-outlined.is-small(
      tag='span'
      @click='toggleHistory'
    ) See all requests

  // TODO: view without current requests
  // TODO: button "see all requests"
  page-section(
    v-else
    :title='L("Member Requests")'
  )
    .c-all-actions
      i18n.button.is-outlined.is-small(
        tag='span'
        @click='approveAll'
      ) Approve All
      i18n.button.is-outlined.is-small(
        tag='span'
        @click='rejectAll'
      ) Reject All

    ul.c-group-list
      li.c-group-member(
        v-for='{contractID, username, displayName, status, date} in requestsSorted'
        :data-test='\`request-\${username}\`'
        :key='contractID'
      )
        profile-card(:contractID='contractID')
          avatar-user(:contractID='contractID' size='sm')
          .c-name.has-text-bold {{username}}
          .c-date.has-text-1 {{ humanDate(date, { month: 'long', day: 'numeric', year: 'numeric' }) }}
          .c-action-container(v-if='status === "requested"')
            i18n.button.is-outlined.is-small(
              tag='span'
              @click='approve'
            ) Approve
            i18n.button.is-outlined.is-small(
              tag='span'
              @click='reject'
            ) Reject
          .c-action-container.c-undo-container(v-else)
            .has-text-danger(v-if='status === "rejected"')
              i.icon-times
              i18n(
                tag='span'
              ) Request Rejected.

            .has-text-success(v-else)
              i.icon-check
              i18n(
                tag='span'
              ) Request Approved.

            i18n.is-link-inherit.has-text-1(
              tag='span'
              @click='undo'
            ) Undo

</template>

<script>
import { mapGetters } from 'vuex'
import SvgConversation from '../../../../frontend/assets/svgs/conversation.svg'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default {
  name: 'MemberRequest',
  components: {
    CalloutCard,
    SvgConversation,
    PageSection,
    Avatar,
    AvatarUser,
    ProfileCard
  },
  data () {
    return {
      SvgConversation,
      requestsSorted: [
        {
          contractID: '1',
          username: 'Pierre',
          date: new Date().toISOString(),
          displayName: 'Pierre',
          status: 'requested'
        },
        {
          contractID: '2',
          username: 'Pierre',
          date: new Date().toISOString(),
          displayName: 'Pierre',
          status: 'rejected'
        },
        {
          contractID: '3',
          username: 'Greg',
          date: new Date().toISOString(),
          displayName: 'Greg',
          status: 'approuved'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'ourUserIdentityContract'
    ]),
    hasMemberRequest () {
      return this.requests
    },
    requests () {
      if (this.requestsSorted) {
        return this.requestsSorted
      }
      return []
    }
  },
  methods: {
    humanDate,
    approve (request) {
      return true
    },
    reject (request) {
      return true
    },
    approveAll () {
      return true
    },
    rejectAll () {
      return true
    },
    undo () {
      return true
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.card {
  position: relative;
}

.c-all-requests {
  position: absolute;
  right: 2.5rem;
  top: 1rem;
}

.c-all-actions {
  margin-top: 1.5rem;

  @include tablet {
    position: absolute;
    right: 2.5rem;
    top: 1rem;
  }
}

.c-calloutCard p + .has-text-1 {
  margin-top: 1rem;
}

.c-action-container {
  margin-top: 0.5rem;

  @include tablet {
    margin-left: auto;
    margin-top: 0;
  }
}

.button + .button {
  margin-left: 1rem;
}

.c-name {
  margin: 0 1rem;
}

.c-group-members {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-group-members-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.c-group-list {
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.c-group-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.625rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid $general_0;

  &:first-child {
    border-top: 1px solid $general_0;
  }

  > .c-twrapper {
    width: 100%;
    flex-wrap: wrap;
  }
}

.c-avatar {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
}

.c-undo-container {
  display: flex;

  & > div {
    min-width: 9rem;
  }

  span,
  i {
    margin-left: 0.5rem;
  }
}
</style>
`, ".card {\n  position: relative;\n}\n\n.c-all-requests {\n  position: absolute;\n  right: 2.5rem;\n  top: 1rem;\n}\n\n.c-all-actions {\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-all-actions {\n    position: absolute;\n    right: 2.5rem;\n    top: 1rem;\n  }\n}\n\n.c-calloutCard p + .has-text-1 {\n  margin-top: 1rem;\n}\n\n.c-action-container {\n  margin-top: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-action-container {\n    margin-left: auto;\n    margin-top: 0;\n  }\n}\n\n.button + .button {\n  margin-left: 1rem;\n}\n\n.c-name {\n  margin: 0 1rem;\n}\n\n.c-group-members {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n\n.c-group-members-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.c-group-list {\n  margin-bottom: 1.5rem;\n  margin-top: 1.5rem;\n}\n\n.c-group-member {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 4.625rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--general_0);\n}\n.c-group-member:first-child {\n  border-top: 1px solid var(--general_0);\n}\n.c-group-member > .c-twrapper {\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.c-avatar {\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 0;\n}\n\n.c-undo-container {\n  display: flex;\n}\n.c-undo-container > div {\n  min-width: 9rem;\n}\n.c-undo-container span,\n.c-undo-container i {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=MemberRequest.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__12 = "data-v-44f20e16";
var __vue_module_identifier__12 = void 0;
var __vue_is_functional_template__12 = false;
function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  callout-card(
    v-if='!hasMemberRequest'
    :title='L("Member Requests")'
    :svg='SvgConversation'
    :isCard='true'
  )

    i18n(tag='p') In Group Income, you can use an invitation link to add members to the group and invite up to 60 people. Once someone uses that link to join the group, they\u2019ll need to be approved by a member of the group with member approval permissions.
    i18n.has-text-1(tag='p') There are no open requests right now.

    i18n.c-all-requests.button.is-outlined.is-small(
      tag='span'
      @click='toggleHistory'
    ) See all requests

  // TODO: view without current requests
  // TODO: button "see all requests"
  page-section(
    v-else
    :title='L("Member Requests")'
  )
    .c-all-actions
      i18n.button.is-outlined.is-small(
        tag='span'
        @click='approveAll'
      ) Approve All
      i18n.button.is-outlined.is-small(
        tag='span'
        @click='rejectAll'
      ) Reject All

    ul.c-group-list
      li.c-group-member(
        v-for='{contractID, username, displayName, status, date} in requestsSorted'
        :data-test='\`request-\${username}\`'
        :key='contractID'
      )
        profile-card(:contractID='contractID')
          avatar-user(:contractID='contractID' size='sm')
          .c-name.has-text-bold {{username}}
          .c-date.has-text-1 {{ humanDate(date, { month: 'long', day: 'numeric', year: 'numeric' }) }}
          .c-action-container(v-if='status === "requested"')
            i18n.button.is-outlined.is-small(
              tag='span'
              @click='approve'
            ) Approve
            i18n.button.is-outlined.is-small(
              tag='span'
              @click='reject'
            ) Reject
          .c-action-container.c-undo-container(v-else)
            .has-text-danger(v-if='status === "rejected"')
              i.icon-times
              i18n(
                tag='span'
              ) Request Rejected.

            .has-text-success(v-else)
              i.icon-check
              i18n(
                tag='span'
              ) Request Approved.

            i18n.is-link-inherit.has-text-1(
              tag='span'
              @click='undo'
            ) Undo

</template>

<script>
import { mapGetters } from 'vuex'
import SvgConversation from '../../../../frontend/assets/svgs/conversation.svg'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default {
  name: 'MemberRequest',
  components: {
    CalloutCard,
    SvgConversation,
    PageSection,
    Avatar,
    AvatarUser,
    ProfileCard
  },
  data () {
    return {
      SvgConversation,
      requestsSorted: [
        {
          contractID: '1',
          username: 'Pierre',
          date: new Date().toISOString(),
          displayName: 'Pierre',
          status: 'requested'
        },
        {
          contractID: '2',
          username: 'Pierre',
          date: new Date().toISOString(),
          displayName: 'Pierre',
          status: 'rejected'
        },
        {
          contractID: '3',
          username: 'Greg',
          date: new Date().toISOString(),
          displayName: 'Greg',
          status: 'approuved'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'ourUserIdentityContract'
    ]),
    hasMemberRequest () {
      return this.requests
    },
    requests () {
      if (this.requestsSorted) {
        return this.requestsSorted
      }
      return []
    }
  },
  methods: {
    humanDate,
    approve (request) {
      return true
    },
    reject (request) {
      return true
    },
    approveAll () {
      return true
    },
    rejectAll () {
      return true
    },
    undo () {
      return true
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.card {
  position: relative;
}

.c-all-requests {
  position: absolute;
  right: 2.5rem;
  top: 1rem;
}

.c-all-actions {
  margin-top: 1.5rem;

  @include tablet {
    position: absolute;
    right: 2.5rem;
    top: 1rem;
  }
}

.c-calloutCard p + .has-text-1 {
  margin-top: 1rem;
}

.c-action-container {
  margin-top: 0.5rem;

  @include tablet {
    margin-left: auto;
    margin-top: 0;
  }
}

.button + .button {
  margin-left: 1rem;
}

.c-name {
  margin: 0 1rem;
}

.c-group-members {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-group-members-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.c-group-list {
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.c-group-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.625rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid $general_0;

  &:first-child {
    border-top: 1px solid $general_0;
  }

  > .c-twrapper {
    width: 100%;
    flex-wrap: wrap;
  }
}

.c-avatar {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
}

.c-undo-container {
  display: flex;

  & > div {
    min-width: 9rem;
  }

  span,
  i {
    margin-left: 0.5rem;
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
function __vue_create_injector__10() {
  const styles = __vue_create_injector__10.styles || (__vue_create_injector__10.styles = {});
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
var __vue_component__12 = /* @__PURE__ */ __vue_normalize__12(
  { render: __vue_render__12, staticRenderFns: __vue_staticRenderFns__12 },
  __vue_inject_styles__12,
  __vue_script__12,
  __vue_scope_id__12,
  __vue_is_functional_template__12,
  __vue_module_identifier__12,
  false,
  __vue_create_injector__10,
  void 0,
  void 0
);
var MemberRequest_default = __vue_component__12;

// frontend/views/containers/dashboard/GroupMincome.vue
var __vue_script__13 = {
  name: "GroupMincome",
  computed: {
    ...mapGetters([
      "groupSettings",
      "groupMincomeAmount"
    ]),
    groupMincomeFormatted() {
      return withGroupCurrency(this.groupMincomeAmount);
    }
  },
  methods: {
    openProposal() {
      esm_default("okTurtles.events/emit", OPEN_MODAL, "MincomeProposal");
    }
  }
};
var __vue_render__13 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { "data-test": "groupMincome" } },
    [
      _c("i18n", { staticClass: "is-title-4", attrs: { tag: "h3" } }, [
        _vm._v("Minimum Income")
      ]),
      _c(
        "p",
        {
          staticClass: "is-title-2 income",
          attrs: { "data-test": "minIncome" }
        },
        [_vm._v(_vm._s(_vm.groupMincomeFormatted))]
      ),
      _c(
        "i18n",
        {
          staticClass: "link",
          attrs: { tag: "button", "aria-label": _vm.L("Change Mincome") },
          on: { click: _vm.openProposal }
        },
        [_vm._v("Change")]
      )
    ],
    1
  );
};
var __vue_staticRenderFns__13 = [];
__vue_render__13._withStripped = true;
var __vue_inject_styles__13 = function(inject) {
  if (!inject) return;
  inject("data-v-41ec63d7_0", { source: ".income[data-v-41ec63d7] {\n  margin: 0.25rem 0;\n}\n\n/*# sourceMappingURL=GroupMincome.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupMincome.vue", "GroupMincome.vue"], "names": [], "mappings": "AAyCA;EACA,iBAAA;ACxCA;;AAEA,2CAA2C", "file": "GroupMincome.vue", "sourcesContent": [`<template lang='pug'>
div(data-test='groupMincome')
  i18n.is-title-4(tag='h3') Minimum Income

  p.is-title-2.income(data-test='minIncome') {{ groupMincomeFormatted }}

  i18n.link(
    tag='button'
    :aria-label='L("Change Mincome")'
    @click='openProposal'
  ) Change
</template>

<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'GroupMincome',
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupMincomeAmount'
    ]),
    groupMincomeFormatted () {
      return withGroupCurrency(this.groupMincomeAmount)
    }
  },
  methods: {
    openProposal () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'MincomeProposal')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.income {
  margin: 0.25rem 0;
}
</style>
`, ".income {\n  margin: 0.25rem 0;\n}\n\n/*# sourceMappingURL=GroupMincome.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__13 = "data-v-41ec63d7";
var __vue_module_identifier__13 = void 0;
var __vue_is_functional_template__13 = false;
function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
div(data-test='groupMincome')
  i18n.is-title-4(tag='h3') Minimum Income

  p.is-title-2.income(data-test='minIncome') {{ groupMincomeFormatted }}

  i18n.link(
    tag='button'
    :aria-label='L("Change Mincome")'
    @click='openProposal'
  ) Change
</template>

<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'GroupMincome',
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupMincomeAmount'
    ]),
    groupMincomeFormatted () {
      return withGroupCurrency(this.groupMincomeAmount)
    }
  },
  methods: {
    openProposal () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'MincomeProposal')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.income {
  margin: 0.25rem 0;
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
function __vue_create_injector__11() {
  const styles = __vue_create_injector__11.styles || (__vue_create_injector__11.styles = {});
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
var __vue_component__13 = /* @__PURE__ */ __vue_normalize__13(
  { render: __vue_render__13, staticRenderFns: __vue_staticRenderFns__13 },
  __vue_inject_styles__13,
  __vue_script__13,
  __vue_scope_id__13,
  __vue_is_functional_template__13,
  __vue_module_identifier__13,
  false,
  __vue_create_injector__11,
  void 0,
  void 0
);
var GroupMincome_default = __vue_component__13;

// frontend/views/containers/dashboard/GroupMembers.vue
var __vue_script__14 = {
  name: "GroupMembers",
  components: {
    Avatar: Avatar_default,
    AvatarUser: AvatarUser_default,
    ProfileCard: ProfileCard_default,
    GroupMembersTooltipPending: GroupMembersTooltipPending_default
  },
  props: {
    title: {
      type: String,
      default: L("Members")
    }
  },
  computed: {
    ...mapGetters([
      "groupMembersCount",
      "groupMembersSorted",
      "groupShouldPropose",
      "currentWelcomeInvite",
      "ourIdentityContractId"
    ]),
    firstTenMembers() {
      return this.groupMembersSorted.slice(0, 10);
    }
  },
  methods: {
    invite() {
      this.$router.push({ path: "/invite" });
    },
    openModal(modal, queries) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, modal, queries);
    },
    localizedName(contractID, displayName) {
      const name = displayName;
      return contractID === this.ourIdentityContractId ? L("{name} (you)", { name }) : name;
    },
    headerButtonAction() {
      if (!this.groupShouldPropose) {
        this.openModal("InvitationLinkModal");
      } else {
        const contractID = this.$store.state.currentGroupId;
        esm_default("gi.app/group/checkGroupSizeAndProposeMember", { contractID }).catch((e) => {
          console.error(`Error on action checkGroupSizeAndProposeMember (headerButtonAction) for ${contractID}`, e);
        });
      }
    }
  }
};
var __vue_render__14 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-group-members", attrs: { "data-test": "groupMembers" } },
    [
      _c("div", { staticClass: "c-group-members-header" }, [
        _c("h3", { staticClass: "is-title-4" }, [_vm._v(_vm._s(_vm.title))]),
        _c(
          "button",
          {
            staticClass: "button is-small is-outlined",
            attrs: { "data-test": "inviteButton" },
            on: { click: _vm.headerButtonAction }
          },
          [
            _c("i", { staticClass: "icon-plus is-prefix" }),
            _c("i18n", [_vm._v("Add")])
          ],
          1
        )
      ]),
      _c(
        "ul",
        { staticClass: "c-group-list" },
        _vm._l(_vm.firstTenMembers, function(ref) {
          var id = ref.id;
          var contractID = ref.contractID;
          var username = ref.username;
          var displayName = ref.displayName;
          var invitedBy = ref.invitedBy;
          var isNew = ref.isNew;
          return _c(
            "li",
            {
              key: id,
              staticClass: "c-group-member",
              class: invitedBy && "is-pending",
              attrs: { "data-test": displayName }
            },
            [
              _c(
                "profile-card",
                { attrs: { contractID } },
                [
                  invitedBy ? _c("avatar", {
                    attrs: {
                      src: "/assets/images/user-avatar-pending.png",
                      size: "sm",
                      "data-test": "openMembersProfileCard"
                    }
                  }) : _c("avatar-user", {
                    attrs: {
                      contractID,
                      size: "sm",
                      "data-test": "openMemberProfileCard"
                    }
                  }),
                  _c(
                    "button",
                    {
                      staticClass: "is-unstyled c-name has-ellipsis",
                      attrs: { "data-test": "username" }
                    },
                    [_vm._v(_vm._s(_vm.localizedName(contractID, displayName)))]
                  ),
                  invitedBy ? _c(
                    "i18n",
                    {
                      staticClass: "pill is-neutral",
                      attrs: { "data-test": "pillPending" }
                    },
                    [_vm._v("pending")]
                  ) : isNew ? _c(
                    "i18n",
                    {
                      staticClass: "pill is-primary",
                      attrs: { "data-test": "pillNew" }
                    },
                    [_vm._v("new")]
                  ) : _vm._e(),
                  invitedBy ? _c("group-members-tooltip-pending", {
                    staticClass: "c-menu",
                    attrs: { contractID, data: invitedBy }
                  }) : _vm._e()
                ],
                1
              )
            ],
            1
          );
        }),
        0
      ),
      _vm.groupMembersCount > 10 ? _c(
        "i18n",
        {
          staticClass: "link",
          attrs: {
            tag: "button",
            args: { groupMembersCount: _vm.groupMembersCount },
            "data-test": "seeAllMembers"
          },
          on: {
            click: function($event) {
              return _vm.openModal("GroupMembersAllModal");
            }
          }
        },
        [_vm._v("See all {groupMembersCount} members")]
      ) : _vm._e()
    ],
    1
  );
};
var __vue_staticRenderFns__14 = [];
__vue_render__14._withStripped = true;
var __vue_inject_styles__14 = function(inject) {
  if (!inject) return;
  inject("data-v-772491de_0", { source: ".c-group-members[data-v-772491de] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n.c-group-members-header[data-v-772491de] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.c-group-list[data-v-772491de] {\n  margin-bottom: 1.5rem;\n}\n.c-group-member[data-v-772491de] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 3rem;\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n  margin: 0 -0.5rem 0 -1.5rem;\n}\n.c-group-member[data-v-772491de]:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n.c-group-member > .c-twrapper[data-v-772491de] {\n  width: 100%;\n}\n.c-avatar[data-v-772491de] {\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 0;\n}\n.c-name[data-v-772491de] {\n  display: inline-block;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  font-family: inherit;\n  border-bottom: 1px solid transparent;\n}\n.c-name[data-v-772491de]:hover, .c-name[data-v-772491de]:focus {\n  border-bottom-color: var(--text_0);\n}\n.c-menu[data-v-772491de] {\n  margin-left: 0.5rem;\n}\n.c-actions-content.c-content[data-v-772491de] {\n  top: calc(100% + 0.5rem);\n  left: auto;\n  min-width: 13rem;\n}\n\n/*# sourceMappingURL=GroupMembers.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupMembers.vue", "GroupMembers.vue"], "names": [], "mappings": "AAsGA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;ACrGA;ADwGA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,qBAAA;ACrGA;ADwGA;EACA,qBAAA;ACrGA;ADwGA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EACA,oCAAA;EACA,2BAAA;ACrGA;ADuGA;EACA,kCAAA;EACA,eAAA;ACrGA;ADwGA;EACA,WAAA;ACtGA;AD0GA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;ACvGA;AD0GA;EACA,qBAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oCAAA;ACvGA;ADyGA;EAEA,kCAAA;ACxGA;AD4GA;EACA,mBAAA;ACzGA;AD4GA;EACA,wBAAA;EACA,UAAA;EACA,gBAAA;ACzGA;;AAEA,2CAA2C", "file": "GroupMembers.vue", "sourcesContent": [`<template lang="pug">
.c-group-members(data-test='groupMembers')
  .c-group-members-header
    h3.is-title-4 {{title}}

    button.button.is-small.is-outlined(
      data-test='inviteButton'
      @click='headerButtonAction'
    )
      i.icon-plus.is-prefix
      i18n Add

  ul.c-group-list
    li.c-group-member(
      v-for='{id, contractID, username, displayName, invitedBy, isNew} of firstTenMembers'
      :data-test='displayName'
      :class='invitedBy && "is-pending"'
      :key='id'
    )
      profile-card(:contractID='contractID')
        avatar(v-if='invitedBy' src='/assets/images/user-avatar-pending.png' size='sm' data-test='openMembersProfileCard')
        avatar-user(v-else :contractID='contractID' size='sm' data-test='openMemberProfileCard')

        button.is-unstyled.c-name.has-ellipsis(data-test='username') {{ localizedName(contractID, displayName) }}
        i18n.pill.is-neutral(v-if='invitedBy' data-test='pillPending') pending
        i18n.pill.is-primary(v-else-if='isNew' data-test='pillNew') new

        group-members-tooltip-pending.c-menu(v-if='invitedBy' :contractID='contractID' :data='invitedBy')

  i18n.link(
    tag='button'
    v-if='groupMembersCount > 10'
    :args='{ groupMembersCount }'
    @click='openModal("GroupMembersAllModal")'
    data-test='seeAllMembers'
  ) See all {groupMembersCount} members
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'GroupMembers',
  components: {
    Avatar,
    AvatarUser,
    ProfileCard,
    GroupMembersTooltipPending
  },
  props: {
    title: {
      type: String,
      default: L('Members')
    }
  },
  computed: {
    ...mapGetters([
      'groupMembersCount',
      'groupMembersSorted',
      'groupShouldPropose',
      'currentWelcomeInvite',
      'ourIdentityContractId'
    ]),
    firstTenMembers () {
      return this.groupMembersSorted.slice(0, 10)
    }
  },
  methods: {
    invite () {
      this.$router.push({ path: '/invite' })
    },
    openModal (modal, queries) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal, queries)
    },
    localizedName (contractID, displayName) {
      const name = displayName
      return contractID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    headerButtonAction () {
      if (!this.groupShouldPropose) {
        this.openModal('InvitationLinkModal')
      } else {
        const contractID = this.$store.state.currentGroupId
        sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID }).catch(e => {
          console.error(\`Error on action checkGroupSizeAndProposeMember (headerButtonAction) for \${contractID}\`, e)
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-group-members {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-group-members-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.c-group-list {
  margin-bottom: 1.5rem;
}

.c-group-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  margin: 0 -0.5rem 0 -1.5rem;

  &:hover {
    background-color: $general_1;
    cursor: pointer;
  }

  > .c-twrapper {
    width: 100%;
  }
}

.c-avatar {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
}

.c-name {
  display: inline-block;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-family: inherit;
  border-bottom: 1px solid transparent;

  &:hover,
  &:focus {
    border-bottom-color: $text_0;
  }
}

.c-menu {
  margin-left: 0.5rem;
}

.c-actions-content.c-content {
  top: calc(100% + 0.5rem);
  left: auto;
  min-width: 13rem;
}

</style>
`, ".c-group-members {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n\n.c-group-members-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.c-group-list {\n  margin-bottom: 1.5rem;\n}\n\n.c-group-member {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 3rem;\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n  margin: 0 -0.5rem 0 -1.5rem;\n}\n.c-group-member:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n.c-group-member > .c-twrapper {\n  width: 100%;\n}\n\n.c-avatar {\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 0;\n}\n\n.c-name {\n  display: inline-block;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  font-family: inherit;\n  border-bottom: 1px solid transparent;\n}\n.c-name:hover, .c-name:focus {\n  border-bottom-color: var(--text_0);\n}\n\n.c-menu {\n  margin-left: 0.5rem;\n}\n\n.c-actions-content.c-content {\n  top: calc(100% + 0.5rem);\n  left: auto;\n  min-width: 13rem;\n}\n\n/*# sourceMappingURL=GroupMembers.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__14 = "data-v-772491de";
var __vue_module_identifier__14 = void 0;
var __vue_is_functional_template__14 = false;
function __vue_normalize__14(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-group-members(data-test='groupMembers')
  .c-group-members-header
    h3.is-title-4 {{title}}

    button.button.is-small.is-outlined(
      data-test='inviteButton'
      @click='headerButtonAction'
    )
      i.icon-plus.is-prefix
      i18n Add

  ul.c-group-list
    li.c-group-member(
      v-for='{id, contractID, username, displayName, invitedBy, isNew} of firstTenMembers'
      :data-test='displayName'
      :class='invitedBy && "is-pending"'
      :key='id'
    )
      profile-card(:contractID='contractID')
        avatar(v-if='invitedBy' src='/assets/images/user-avatar-pending.png' size='sm' data-test='openMembersProfileCard')
        avatar-user(v-else :contractID='contractID' size='sm' data-test='openMemberProfileCard')

        button.is-unstyled.c-name.has-ellipsis(data-test='username') {{ localizedName(contractID, displayName) }}
        i18n.pill.is-neutral(v-if='invitedBy' data-test='pillPending') pending
        i18n.pill.is-primary(v-else-if='isNew' data-test='pillNew') new

        group-members-tooltip-pending.c-menu(v-if='invitedBy' :contractID='contractID' :data='invitedBy')

  i18n.link(
    tag='button'
    v-if='groupMembersCount > 10'
    :args='{ groupMembersCount }'
    @click='openModal("GroupMembersAllModal")'
    data-test='seeAllMembers'
  ) See all {groupMembersCount} members
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'GroupMembers',
  components: {
    Avatar,
    AvatarUser,
    ProfileCard,
    GroupMembersTooltipPending
  },
  props: {
    title: {
      type: String,
      default: L('Members')
    }
  },
  computed: {
    ...mapGetters([
      'groupMembersCount',
      'groupMembersSorted',
      'groupShouldPropose',
      'currentWelcomeInvite',
      'ourIdentityContractId'
    ]),
    firstTenMembers () {
      return this.groupMembersSorted.slice(0, 10)
    }
  },
  methods: {
    invite () {
      this.$router.push({ path: '/invite' })
    },
    openModal (modal, queries) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal, queries)
    },
    localizedName (contractID, displayName) {
      const name = displayName
      return contractID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    headerButtonAction () {
      if (!this.groupShouldPropose) {
        this.openModal('InvitationLinkModal')
      } else {
        const contractID = this.$store.state.currentGroupId
        sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID }).catch(e => {
          console.error(\`Error on action checkGroupSizeAndProposeMember (headerButtonAction) for \${contractID}\`, e)
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-group-members {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-group-members-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.c-group-list {
  margin-bottom: 1.5rem;
}

.c-group-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  margin: 0 -0.5rem 0 -1.5rem;

  &:hover {
    background-color: $general_1;
    cursor: pointer;
  }

  > .c-twrapper {
    width: 100%;
  }
}

.c-avatar {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
}

.c-name {
  display: inline-block;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-family: inherit;
  border-bottom: 1px solid transparent;

  &:hover,
  &:focus {
    border-bottom-color: $text_0;
  }
}

.c-menu {
  margin-left: 0.5rem;
}

.c-actions-content.c-content {
  top: calc(100% + 0.5rem);
  left: auto;
  min-width: 13rem;
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
function __vue_create_injector__12() {
  const styles = __vue_create_injector__12.styles || (__vue_create_injector__12.styles = {});
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
var __vue_component__14 = /* @__PURE__ */ __vue_normalize__14(
  { render: __vue_render__14, staticRenderFns: __vue_staticRenderFns__14 },
  __vue_inject_styles__14,
  __vue_script__14,
  __vue_scope_id__14,
  __vue_is_functional_template__14,
  __vue_module_identifier__14,
  false,
  __vue_create_injector__12,
  void 0,
  void 0
);
var GroupMembers_default = __vue_component__14;

// frontend/views/containers/dashboard/GroupPurpose.vue
var __vue_script__15 = {
  name: "GroupPurpose",
  computed: {
    ...mapGetters([
      "groupSettings"
    ])
  },
  methods: {
    updateSharedValues() {
      console.log("Open shared value form");
    }
  }
};
var __vue_render__15 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-group-purpose" },
    [
      _c(
        "div",
        { staticClass: "c-group-purpose-header" },
        [
          _c("i18n", { staticClass: "is-title-4", attrs: { tag: "h3" } }, [
            _vm._v("About the group")
          ])
        ],
        1
      ),
      _vm.groupSettings.sharedValues ? _c(
        "div",
        [
          _c(
            "p",
            {
              staticClass: "c-text has-text-1",
              attrs: { "data-test": "sharedValues" }
            },
            [_vm._v(_vm._s(_vm.groupSettings.sharedValues))]
          ),
          _c(
            "router-link",
            { staticClass: "link", attrs: { to: "/group-settings" } },
            [_c("i18n", [_vm._v("Edit")])],
            1
          )
        ],
        1
      ) : _c(
        "router-link",
        { staticClass: "link", attrs: { to: "/group-settings" } },
        [_c("i18n", [_vm._v("Add description")])],
        1
      ),
      _vm._t("default")
    ],
    2
  );
};
var __vue_staticRenderFns__15 = [];
__vue_render__15._withStripped = true;
var __vue_inject_styles__15 = function(inject) {
  if (!inject) return;
  inject("data-v-0a1692e6_0", { source: ".c-group-purpose-header[data-v-0a1692e6] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-group-purpose[data-v-0a1692e6] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n.c-text[data-v-0a1692e6] {\n  margin: 0.5rem 0;\n}\n\n/*# sourceMappingURL=GroupPurpose.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupPurpose.vue", "GroupPurpose.vue"], "names": [], "mappings": "AA6CA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AC5CA;AD+CA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AC5CA;AD+CA;EACA,gBAAA;AC5CA;;AAEA,2CAA2C", "file": "GroupPurpose.vue", "sourcesContent": [`<template lang='pug'>
.c-group-purpose
  .c-group-purpose-header
    i18n.is-title-4(tag='h3') About the group

  div(v-if='groupSettings.sharedValues')
    p.c-text.has-text-1(data-test='sharedValues')
      | {{ groupSettings.sharedValues }}

    router-link.link(
      to='/group-settings'
    )
      i18n Edit

  router-link.link(
    v-else
    to='/group-settings'
  )
    i18n Add description

  slot
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
  name: 'GroupPurpose',
  computed: {
    ...mapGetters([
      'groupSettings'
    ])
  },
  methods: {
    updateSharedValues () {
      // TODO
      console.log('Open shared value form')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-group-purpose-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-group-purpose {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-text {
  margin: 0.5rem 0;
}
</style>
`, ".c-group-purpose-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.c-group-purpose {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n\n.c-text {\n  margin: 0.5rem 0;\n}\n\n/*# sourceMappingURL=GroupPurpose.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__15 = "data-v-0a1692e6";
var __vue_module_identifier__15 = void 0;
var __vue_is_functional_template__15 = false;
function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-group-purpose
  .c-group-purpose-header
    i18n.is-title-4(tag='h3') About the group

  div(v-if='groupSettings.sharedValues')
    p.c-text.has-text-1(data-test='sharedValues')
      | {{ groupSettings.sharedValues }}

    router-link.link(
      to='/group-settings'
    )
      i18n Edit

  router-link.link(
    v-else
    to='/group-settings'
  )
    i18n Add description

  slot
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
  name: 'GroupPurpose',
  computed: {
    ...mapGetters([
      'groupSettings'
    ])
  },
  methods: {
    updateSharedValues () {
      // TODO
      console.log('Open shared value form')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-group-purpose-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-group-purpose {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
}

.c-text {
  margin: 0.5rem 0;
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
function __vue_create_injector__13() {
  const styles = __vue_create_injector__13.styles || (__vue_create_injector__13.styles = {});
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
var __vue_component__15 = /* @__PURE__ */ __vue_normalize__15(
  { render: __vue_render__15, staticRenderFns: __vue_staticRenderFns__15 },
  __vue_inject_styles__15,
  __vue_script__15,
  __vue_scope_id__15,
  __vue_is_functional_template__15,
  __vue_module_identifier__15,
  false,
  __vue_create_injector__13,
  void 0,
  void 0
);
var GroupPurpose_default = __vue_component__15;

// frontend/views/pages/GroupDashboard.vue
var __vue_script__16 = {
  name: "GroupDashboard",
  components: {
    Page: Page_default,
    AddIncomeDetailsWidget: AddIncomeDetailsWidget_default,
    StartInvitingWidget: StartInvitingWidget_default,
    GroupActivity: GroupActivity_default,
    ContributionsSummaryWidget: ContributionsWidget_default,
    ProposalsWidget: ProposalsWidget_default,
    MemberRequest: MemberRequest_default,
    GroupMincome: GroupMincome_default,
    GroupMembers: GroupMembers_default,
    GroupPurpose: GroupPurpose_default,
    BannerSimple: BannerSimple_default
    // GroupSettings
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters([
      "currentGroupState",
      // TODO normalize getters names
      "ourPreferences",
      "groupSettings",
      "groupsByName",
      "groupMembersCount",
      "groupProfiles",
      "ourGroupProfile"
    ]),
    canDisplayGraph() {
      return Object.values(this.groupProfiles).filter((profile) => profile.incomeDetailsType).length > 0;
    },
    shouldHideBanner(state, getters) {
      return this.ourPreferences.hideDistributionBanner?.[this.currentGroupId];
    },
    hasIncomeDetails() {
      return !!this.ourGroupProfile?.incomeDetailsType;
    },
    isCloseToDistributionTime() {
      const dDay = new Date(this.groupSettings.distributionDate);
      const warningDate = addTimeToDate(dDay, -7 * DAYS_MILLIS);
      return Date.now() >= new Date(warningDate).getTime() && Date.now() < dDay.getTime();
    },
    shouldShowBanner() {
      return this.isCloseToDistributionTime && !this.shouldHideBanner;
    },
    hasMemberRequest() {
      return this.requests && false;
    }
  },
  beforeMount() {
    esm_default("okTurtles.events/on", INCOME_DETAILS_UPDATE, this.hideBanner);
    if (!this.isCloseToDistributionTime) {
      this.showBanner();
    }
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", INCOME_DETAILS_UPDATE, this.hideBanner);
  },
  methods: {
    humanDate,
    handleIncomeClick(e) {
      if (e.target.classList.contains("js-btnInvite")) {
        esm_default("okTurtles.events/emit", OPEN_MODAL, "IncomeDetails");
      }
    },
    hideBanner() {
      esm_default("gi.actions/identity/kv/updateDistributionBannerVisibility", {
        contractID: this.currentGroupId,
        hidden: true
      });
    },
    showBanner() {
      esm_default("gi.actions/identity/kv/updateDistributionBannerVisibility", {
        contractID: this.currentGroupId,
        hidden: false
      });
    }
  }
};
var __vue_render__16 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.groupSettings.groupName ? _c(
    "page",
    {
      attrs: { pageTestName: "dashboard", pageTestHeaderName: "groupName" },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._v(_vm._s(_vm.groupSettings.groupName))];
            },
            proxy: true
          },
          {
            key: "sidebar",
            fn: function() {
              return [
                _c("group-mincome"),
                _c("group-members"),
                _c("group-purpose")
              ];
            },
            proxy: true
          }
        ],
        null,
        false,
        2835352694
      )
    },
    [
      _vm.shouldShowBanner ? _c(
        "banner-simple",
        { staticClass: "c-banner", attrs: { severity: "warning" } },
        [
          _c(
            "i18n",
            {
              attrs: {
                args: {
                  r1: '<button class="link js-btnInvite" data-test="openWarningIncomeDetailsModal">',
                  r2: "</button>",
                  date: _vm.humanDate(
                    _vm.groupSettings.distributionDate,
                    { month: "long", day: "numeric" }
                  )
                }
              },
              on: { click: _vm.handleIncomeClick }
            },
            [
              _vm._v(
                "Next distribution date is on {date}. Make sure to update your {r1}income details{r2} by then."
              )
            ]
          ),
          _c(
            "button",
            {
              staticClass: "is-unstyled",
              on: { click: _vm.hideBanner }
            },
            [_c("i", { staticClass: "icon-times" })]
          )
        ],
        1
      ) : _vm._e(),
      !_vm.hasIncomeDetails ? _c("add-income-details-widget", {
        attrs: { welcomeMessage: true }
      }) : [
        _vm.groupMembersCount === 1 ? _c("start-inviting-widget") : _vm._e(),
        _vm.canDisplayGraph ? _c("group-activity") : _vm._e(),
        _c("contributions-summary-widget")
      ],
      _c("proposals-widget"),
      _vm.hasMemberRequest ? _c("member-request") : _vm._e()
    ],
    2
  ) : _vm._e();
};
var __vue_staticRenderFns__16 = [];
__vue_render__16._withStripped = true;
var __vue_inject_styles__16 = function(inject) {
  if (!inject) return;
  inject("data-v-01d7f1f5_0", { source: ".c-banner.c-message[data-v-01d7f1f5] {\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n.c-banner.c-message button[data-v-01d7f1f5] {\n  float: right;\n  margin-left: 0.5rem;\n  margin-top: 0.2rem;\n}\n.c-banner.c-message[data-v-01d7f1f5]  .c-body {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupDashboard.vue.map */", map: { "version": 3, "sources": ["frontend/views/pages/GroupDashboard.vue", "GroupDashboard.vue"], "names": [], "mappings": "AA6IA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AC5IA;AD8IA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AC5IA;AD+IA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;AC7IA;;AAEA,6CAA6C", "file": "GroupDashboard.vue", "sourcesContent": [`<template lang="pug">
page(pageTestName='dashboard' pageTestHeaderName='groupName' v-if='groupSettings.groupName')
  template(#title='') {{ groupSettings.groupName }}

  banner-simple(severity='warning' class='c-banner' v-if='shouldShowBanner')
    i18n(
      @click='handleIncomeClick'
      :args='{ \\
        r1: \`<button class="link js-btnInvite" data-test="openWarningIncomeDetailsModal">\`, \\
        r2: "</button>", \\
        date: humanDate(groupSettings.distributionDate, { month: "long", day: "numeric" }) \\
      }'
    ) Next distribution date is on {date}. Make sure to update your {r1}income details{r2} by then.

    button.is-unstyled(@click='hideBanner')
      i.icon-times

  add-income-details-widget(v-if='!hasIncomeDetails' :welcomeMessage='true')

  template(v-else)
    start-inviting-widget(v-if='groupMembersCount === 1')

    group-activity(v-if='canDisplayGraph')

    contributions-summary-widget

  proposals-widget

  member-request(v-if='hasMemberRequest')

  //- page-section(title='Group Settings')
  //-   group-settings-widget

  template(#sidebar='')
    group-mincome
    group-members
    group-purpose
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { OPEN_MODAL, INCOME_DETAILS_UPDATE } from '../../../frontend/utils/events.js'
import Page from '../../../frontend/views/components/Page.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import StartInvitingWidget from '../../../frontend/views/containers/dashboard/StartInvitingWidget.vue'
import GroupActivity from '../../../frontend/views/containers/dashboard/GroupActivity.vue'
import ContributionsSummaryWidget from '../../../frontend/views/containers/contributions/ContributionsWidget.vue'
import ProposalsWidget from '../../../frontend/views/containers/proposals/ProposalsWidget.vue'
import MemberRequest from '../../../frontend/views/containers/proposals/MemberRequest.vue'
import GroupMincome from '../../../frontend/views/containers/dashboard/GroupMincome.vue'
import GroupMembers from '../../../frontend/views/containers/dashboard/GroupMembers.vue'
import GroupPurpose from '../../../frontend/views/containers/dashboard/GroupPurpose.vue'
import BannerSimple from '../../../frontend/views/components/banners/BannerSimple.vue'
// import GroupSettings from '../../../frontend/views/components/GroupSettings.vue'
import { addTimeToDate, DAYS_MILLIS, humanDate } from '../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'GroupDashboard',
  components: {
    Page,
    AddIncomeDetailsWidget,
    StartInvitingWidget,
    GroupActivity,
    ContributionsSummaryWidget,
    ProposalsWidget,
    MemberRequest,
    GroupMincome,
    GroupMembers,
    GroupPurpose,
    BannerSimple
    // GroupSettings
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'currentGroupState', // TODO normalize getters names
      'ourPreferences',
      'groupSettings',
      'groupsByName',
      'groupMembersCount',
      'groupProfiles',
      'ourGroupProfile'
    ]),
    canDisplayGraph () {
      return Object.values(this.groupProfiles).filter(profile => profile.incomeDetailsType).length > 0
    },
    shouldHideBanner (state, getters) {
      return this.ourPreferences.hideDistributionBanner?.[this.currentGroupId]
    },
    hasIncomeDetails () {
      return !!this.ourGroupProfile?.incomeDetailsType
    },
    isCloseToDistributionTime () {
      const dDay = new Date(this.groupSettings.distributionDate)
      const warningDate = addTimeToDate(dDay, -7 * DAYS_MILLIS)

      // when (D-day - 7d) <= today < D-day
      return Date.now() >= new Date(warningDate).getTime() && Date.now() < dDay.getTime()
    },
    shouldShowBanner () {
      return this.isCloseToDistributionTime && !this.shouldHideBanner
    },
    hasMemberRequest () {
      return this.requests && false // NOTE: not using it at the moment
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', INCOME_DETAILS_UPDATE, this.hideBanner)

    if (!this.isCloseToDistributionTime) {
      this.showBanner()
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', INCOME_DETAILS_UPDATE, this.hideBanner)
  },
  methods: {
    humanDate,
    handleIncomeClick (e) {
      if (e.target.classList.contains('js-btnInvite')) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'IncomeDetails')
      }
    },
    hideBanner () {
      sbp('gi.actions/identity/kv/updateDistributionBannerVisibility', {
        contractID: this.currentGroupId,
        hidden: true
      })
    },
    showBanner () {
      sbp('gi.actions/identity/kv/updateDistributionBannerVisibility', {
        contractID: this.currentGroupId,
        hidden: false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-banner.c-message {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  button {
    float: right;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }

  ::v-deep .c-body {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
}
</style>
`, ".c-banner.c-message {\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n.c-banner.c-message button {\n  float: right;\n  margin-left: 0.5rem;\n  margin-top: 0.2rem;\n}\n.c-banner.c-message ::v-deep .c-body {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupDashboard.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__16 = "data-v-01d7f1f5";
var __vue_module_identifier__16 = void 0;
var __vue_is_functional_template__16 = false;
function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
page(pageTestName='dashboard' pageTestHeaderName='groupName' v-if='groupSettings.groupName')
  template(#title='') {{ groupSettings.groupName }}

  banner-simple(severity='warning' class='c-banner' v-if='shouldShowBanner')
    i18n(
      @click='handleIncomeClick'
      :args='{ \\
        r1: \`<button class="link js-btnInvite" data-test="openWarningIncomeDetailsModal">\`, \\
        r2: "</button>", \\
        date: humanDate(groupSettings.distributionDate, { month: "long", day: "numeric" }) \\
      }'
    ) Next distribution date is on {date}. Make sure to update your {r1}income details{r2} by then.

    button.is-unstyled(@click='hideBanner')
      i.icon-times

  add-income-details-widget(v-if='!hasIncomeDetails' :welcomeMessage='true')

  template(v-else)
    start-inviting-widget(v-if='groupMembersCount === 1')

    group-activity(v-if='canDisplayGraph')

    contributions-summary-widget

  proposals-widget

  member-request(v-if='hasMemberRequest')

  //- page-section(title='Group Settings')
  //-   group-settings-widget

  template(#sidebar='')
    group-mincome
    group-members
    group-purpose
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters, mapState } from 'vuex'
import { OPEN_MODAL, INCOME_DETAILS_UPDATE } from '../../../frontend/utils/events.js'
import Page from '../../../frontend/views/components/Page.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import StartInvitingWidget from '../../../frontend/views/containers/dashboard/StartInvitingWidget.vue'
import GroupActivity from '../../../frontend/views/containers/dashboard/GroupActivity.vue'
import ContributionsSummaryWidget from '../../../frontend/views/containers/contributions/ContributionsWidget.vue'
import ProposalsWidget from '../../../frontend/views/containers/proposals/ProposalsWidget.vue'
import MemberRequest from '../../../frontend/views/containers/proposals/MemberRequest.vue'
import GroupMincome from '../../../frontend/views/containers/dashboard/GroupMincome.vue'
import GroupMembers from '../../../frontend/views/containers/dashboard/GroupMembers.vue'
import GroupPurpose from '../../../frontend/views/containers/dashboard/GroupPurpose.vue'
import BannerSimple from '../../../frontend/views/components/banners/BannerSimple.vue'
// import GroupSettings from '../../../frontend/views/components/GroupSettings.vue'
import { addTimeToDate, DAYS_MILLIS, humanDate } from '../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'GroupDashboard',
  components: {
    Page,
    AddIncomeDetailsWidget,
    StartInvitingWidget,
    GroupActivity,
    ContributionsSummaryWidget,
    ProposalsWidget,
    MemberRequest,
    GroupMincome,
    GroupMembers,
    GroupPurpose,
    BannerSimple
    // GroupSettings
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'currentGroupState', // TODO normalize getters names
      'ourPreferences',
      'groupSettings',
      'groupsByName',
      'groupMembersCount',
      'groupProfiles',
      'ourGroupProfile'
    ]),
    canDisplayGraph () {
      return Object.values(this.groupProfiles).filter(profile => profile.incomeDetailsType).length > 0
    },
    shouldHideBanner (state, getters) {
      return this.ourPreferences.hideDistributionBanner?.[this.currentGroupId]
    },
    hasIncomeDetails () {
      return !!this.ourGroupProfile?.incomeDetailsType
    },
    isCloseToDistributionTime () {
      const dDay = new Date(this.groupSettings.distributionDate)
      const warningDate = addTimeToDate(dDay, -7 * DAYS_MILLIS)

      // when (D-day - 7d) <= today < D-day
      return Date.now() >= new Date(warningDate).getTime() && Date.now() < dDay.getTime()
    },
    shouldShowBanner () {
      return this.isCloseToDistributionTime && !this.shouldHideBanner
    },
    hasMemberRequest () {
      return this.requests && false // NOTE: not using it at the moment
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', INCOME_DETAILS_UPDATE, this.hideBanner)

    if (!this.isCloseToDistributionTime) {
      this.showBanner()
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', INCOME_DETAILS_UPDATE, this.hideBanner)
  },
  methods: {
    humanDate,
    handleIncomeClick (e) {
      if (e.target.classList.contains('js-btnInvite')) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'IncomeDetails')
      }
    },
    hideBanner () {
      sbp('gi.actions/identity/kv/updateDistributionBannerVisibility', {
        contractID: this.currentGroupId,
        hidden: true
      })
    },
    showBanner () {
      sbp('gi.actions/identity/kv/updateDistributionBannerVisibility', {
        contractID: this.currentGroupId,
        hidden: false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-banner.c-message {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  button {
    float: right;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }

  ::v-deep .c-body {
    display: flex;
    align-content: center;
    justify-content: space-between;
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
function __vue_create_injector__14() {
  const styles = __vue_create_injector__14.styles || (__vue_create_injector__14.styles = {});
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
var __vue_component__16 = /* @__PURE__ */ __vue_normalize__16(
  { render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__16 },
  __vue_inject_styles__16,
  __vue_script__16,
  __vue_scope_id__16,
  __vue_is_functional_template__16,
  __vue_module_identifier__16,
  false,
  __vue_create_injector__14,
  void 0,
  void 0
);
var GroupDashboard_default = __vue_component__16;
export {
  GroupDashboard_default as default
};
//# sourceMappingURL=GroupDashboard-GNSUSV5C-cached.js.map
