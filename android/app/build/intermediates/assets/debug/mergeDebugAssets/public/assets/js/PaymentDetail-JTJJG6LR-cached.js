import {
  PaymentsMixin_default
} from "./chunk-LNZF2O32-cached.js";
import {
  LinkToCopy_default
} from "./chunk-U5MBT6RH-cached.js";
import "./chunk-5AEIP7HX-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-A3KNU2XZ-cached.js";
import {
  comparePeriodStamps,
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import {
  cloneDeep
} from "./chunk-MTWMQLQH-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL,
  REPLACE_MODAL,
  SET_MODAL_QUERIES
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/PaymentDetail.vue
var __vue_script__ = {
  name: "PaymentDetail",
  components: {
    ModalTemplate: ModalTemplate_default,
    LinkToCopy: LinkToCopy_default
  },
  mixins: [PaymentsMixin_default],
  created() {
    this.initializeDetails();
  },
  data: () => ({
    payment: null
  }),
  props: {
    lightningPayment: {
      // temporary prop for dummy lightning payment data.
      // TODO: onece lightning networki is implemented, remove this prop and get the payment data from Vuex getter.
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters([
      "ourIdentityContractId",
      "userDisplayNameFromID"
    ]),
    fromMemberID() {
      return this.payment?.data.fromMemberID || "";
    },
    isPaidByMyself() {
      return this.fromMemberID === this.ourIdentityContractId;
    },
    buttonCount() {
      return Number(!this.isPaidByMyself) + Number(this.isPaidByMyself && !this.payment.isOldPayment);
    },
    subtitleCopy() {
      const toMemberID = this.payment.data.toMemberID;
      const arg = (memberID) => ({ name: this.userDisplayNameFromID(memberID) });
      return toMemberID === this.ourIdentityContractId ? L("Sent by {name}", arg(this.fromMemberID)) : L("Sent to {name}", arg(toMemberID));
    }
  },
  methods: {
    withGroupCurrency,
    humanDate,
    async initializeDetails() {
      const { id, period } = this.$route.query;
      const payment = this.lightningPayment || // TODO: to be re-worked once lightning network is implemented.
      this.currentGroupState.payments[id] || (await this.getHistoricalPaymentDetailsByPeriod(period))[id];
      if (id) {
        esm_default("okTurtles.events/emit", SET_MODAL_QUERIES, "PaymentDetail", { id });
      }
      if (payment) {
        const periodstamp = await this.historicalPeriodStampGivenDate(payment.meta.createdDate);
        this.payment = {
          ...cloneDeep(payment),
          isOldPayment: comparePeriodStamps(periodstamp, this.currentPaymentPeriod) < 0,
          periodstamp
        };
      } else {
        console.warn('PaymentDetail: Missing valid query "id"');
        esm_default("okTurtles.events/emit", CLOSE_MODAL);
      }
    },
    closeModal() {
      this.$refs.modal.close();
    },
    cancelPayment() {
      alert("TODO: Implement cancel payment");
    },
    sendThankYou() {
      esm_default("okTurtles.events/emit", REPLACE_MODAL, "SendThankYouModal", { toMemberID: this.payment.data.fromMemberID });
    }
  },
  validations: {
    form: {}
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.payment ? _c(
    "modal-template",
    { ref: "modal", attrs: { a11yTitle: _vm.L("Payment details") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Payment details")])],
        1
      ),
      _c(
        "div",
        {
          staticClass: "is-title-2 c-title",
          attrs: { "data-test": "amount" }
        },
        [_vm._v(_vm._s(_vm.withGroupCurrency(_vm.payment.data.amount)))]
      ),
      _c(
        "div",
        {
          staticClass: "c-subtitle has-text-1",
          attrs: { "data-test": "subtitle" }
        },
        [_vm._v(_vm._s(_vm.subtitleCopy))]
      ),
      _c(
        "ul",
        {
          staticClass: "c-payment-list",
          attrs: { "data-test": "details" }
        },
        [
          _c(
            "li",
            { staticClass: "c-payment-list-item" },
            [
              _c(
                "i18n",
                { staticClass: "has-text-1", attrs: { tag: "label" } },
                [_vm._v("Date & Time")]
              ),
              _c("strong", [
                _vm._v(
                  _vm._s(
                    _vm.humanDate(_vm.payment.meta.createdDate, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })
                  )
                )
              ])
            ],
            1
          ),
          _c(
            "li",
            { staticClass: "c-payment-list-item" },
            [
              _c("i18n", { staticClass: "has-text-1" }, [
                _vm._v("Relative to")
              ]),
              _c("strong", [
                _vm._v(
                  _vm._s(
                    _vm.humanDate(_vm.payment.periodstamp, {
                      month: "long",
                      year: "numeric",
                      day: "numeric"
                    })
                  )
                )
              ])
            ],
            1
          ),
          _c(
            "li",
            { staticClass: "c-payment-list-item" },
            [
              _c("i18n", { staticClass: "has-text-1" }, [
                _vm._v("Mincome at the time")
              ]),
              _c("strong", [
                _vm._v(
                  _vm._s(
                    _vm.withGroupCurrency(_vm.payment.data.groupMincome)
                  )
                )
              ])
            ],
            1
          ),
          _vm.lightningPayment ? _c(
            "li",
            { staticClass: "c-payment-list-item" },
            [
              _c("i18n", { staticClass: "has-text-1" }, [
                _vm._v("Transaction ID")
              ]),
              _c("link-to-copy", {
                staticClass: "c-lightning-trxn-id",
                attrs: { link: _vm.payment.data.transactionId }
              })
            ],
            1
          ) : _vm._e(),
          _vm.payment.data.memo ? _c(
            "li",
            { staticClass: "c-payment-list-item c-column" },
            [
              _c("i18n", { staticClass: "has-text-1" }, [
                _vm._v("Notes")
              ]),
              _c("p", { staticClass: "has-text-bold" }, [
                _vm._v(_vm._s(_vm.payment.data.memo))
              ])
            ],
            1
          ) : _vm._e()
        ]
      ),
      !_vm.lightningPayment && _vm.buttonCount > 0 ? _c(
        "div",
        {
          staticClass: "buttons c-buttons-container",
          class: { "is-centered": _vm.buttonCount === 1 }
        },
        [
          _vm.isPaidByMyself && !_vm.payment.isOldPayment ? _c(
            "i18n",
            {
              staticClass: "button is-outlined",
              attrs: { tag: "button" },
              on: { click: _vm.cancelPayment }
            },
            [_vm._v("Cancel payment")]
          ) : _vm._e(),
          !_vm.isPaidByMyself ? _c(
            "i18n",
            {
              staticClass: "button",
              attrs: { tag: "button" },
              on: { click: _vm.sendThankYou }
            },
            [_vm._v("Send Thanks!")]
          ) : _vm._e()
        ],
        1
      ) : _vm._e()
    ],
    2
  ) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5c090db4_0", { source: ".c-payment-list[data-v-5c090db4] {\n  margin: 1rem auto 0.5rem auto;\n  width: 100%;\n  max-width: 25rem;\n}\n.c-subtitle[data-v-5c090db4],\n.c-title[data-v-5c090db4] {\n  text-align: center;\n  width: 100%;\n}\n.c-subtitle[data-v-5c090db4] {\n  margin-top: 0.25rem;\n}\n@media screen and (min-width: 769px), print {\n.c-subtitle[data-v-5c090db4] {\n    margin-bottom: 0.25rem;\n}\n}\n.c-payment-list-item[data-v-5c090db4] {\n  height: 3.3125rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--general_0);\n}\n.c-payment-list-item.c-column[data-v-5c090db4] {\n  flex-direction: column;\n  height: auto;\n  align-items: flex-start;\n}\n.c-payment-list-item.c-column .has-text-1[data-v-5c090db4] {\n  padding-top: 1rem;\n  padding-bottom: 0.3125rem;\n}\n.c-payment-list-item .c-lightning-trxn-id[data-v-5c090db4] {\n  max-width: 60%;\n}\n.c-buttons-container[data-v-5c090db4] {\n  flex-direction: column-reverse;\n  align-items: stretch;\n  gap: 1rem;\n  max-width: 25rem;\n  margin: 1.625rem auto 0;\n  width: 100%;\n}\n.c-buttons-container.is-centered[data-v-5c090db4] {\n  justify-content: center;\n}\n.c-buttons-container .button[data-v-5c090db4]:not(:last-child) {\n  margin-right: 0;\n}\n@media screen and (min-width: 769px), print {\n.c-buttons-container[data-v-5c090db4] {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 2rem;\n    align-items: center;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-buttons-container[data-v-5c090db4] {\n    max-width: unset;\n}\n}\n\n/*# sourceMappingURL=PaymentDetail.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentDetail.vue", "PaymentDetail.vue"], "names": [], "mappings": "AAgJA;EACA,6BAAA;EACA,WAAA;EACA,gBAAA;AC/IA;ADkJA;;EAEA,kBAAA;EACA,WAAA;AC/IA;ADkJA;EACA,mBAAA;AC/IA;AACA;AD6IA;IAIA,sBAAA;AC9IE;AACF;ADiJA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCAAA;AC9IA;ADgJA;EACA,sBAAA;EACA,YAAA;EACA,uBAAA;AC9IA;ADgJA;EACA,iBAAA;EACA,yBAAA;AC9IA;ADkJA;EACA,cAAA;AChJA;ADoJA;EACA,8BAAA;EACA,oBAAA;EACA,SAAA;EACA,gBAAA;EACA,uBAAA;EACA,WAAA;ACjJA;ADmJA;EACA,uBAAA;ACjJA;ADoJA;EACA,eAAA;AClJA;AACA;ADoIA;IAiBA,mBAAA;IACA,8BAAA;IACA,gBAAA;IACA,mBAAA;AClJE;AACF;AACA;AD4HA;IAwBA,gBAAA;ACjJE;AACF;;AAEA,4CAA4C", "file": "PaymentDetail.vue", "sourcesContent": [`<template lang='pug'>
modal-template(ref='modal' v-if='payment' :a11yTitle='L("Payment details")')
  template(slot='title')
    i18n Payment details

  .is-title-2.c-title(data-test='amount') {{ withGroupCurrency(payment.data.amount) }}
  .c-subtitle.has-text-1(data-test='subtitle') {{ subtitleCopy }}

  //- TODO This should be a table...
  ul.c-payment-list(data-test='details')
    li.c-payment-list-item
      i18n.has-text-1(tag='label') Date & Time
      strong {{ humanDate(payment.meta.createdDate, { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
    li.c-payment-list-item
      i18n.has-text-1 Relative to
      strong {{ humanDate(payment.periodstamp, { month: 'long', year: 'numeric', day: 'numeric' }) }}
    li.c-payment-list-item
      i18n.has-text-1 Mincome at the time
      strong {{ withGroupCurrency(payment.data.groupMincome) }}
    li.c-payment-list-item(v-if='lightningPayment')
      i18n.has-text-1 Transaction ID
      link-to-copy.c-lightning-trxn-id(
        :link='payment.data.transactionId'
      )

    li.c-payment-list-item.c-column(v-if='payment.data.memo')
      i18n.has-text-1 Notes
      p.has-text-bold {{ payment.data.memo }}

  .buttons.c-buttons-container(
    v-if='!lightningPayment && buttonCount > 0'
    :class='{ "is-centered": buttonCount === 1 }'
  )
    i18n.button.is-outlined(
      tag='button'
      v-if='isPaidByMyself && !payment.isOldPayment'
      @click='cancelPayment'
    ) Cancel payment

    i18n.button(
      v-if='!isPaidByMyself'
      tag='button'
      @click='sendThankYou'
    ) Send Thanks!
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { CLOSE_MODAL, REPLACE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate, comparePeriodStamps } from '../../../../frontend/model/contracts/shared/time.js'
import { cloneDeep } from 'turtledash'

export default ({
  name: 'PaymentDetail',
  components: {
    ModalTemplate,
    LinkToCopy
  },
  mixins: [PaymentsMixin],
  created () {
    this.initializeDetails()
  },
  data: () => ({
    payment: null
  }),
  props: {
    lightningPayment: {
      // temporary prop for dummy lightning payment data.
      // TODO: onece lightning networki is implemented, remove this prop and get the payment data from Vuex getter.
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters([
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    fromMemberID () {
      return this.payment?.data.fromMemberID || ''
    },
    isPaidByMyself () {
      return this.fromMemberID === this.ourIdentityContractId
    },
    buttonCount () {
      return Number(!this.isPaidByMyself) + Number(this.isPaidByMyself && !this.payment.isOldPayment)
    },
    subtitleCopy () {
      const toMemberID = this.payment.data.toMemberID
      const arg = (memberID) => ({ name: this.userDisplayNameFromID(memberID) })
      return toMemberID === this.ourIdentityContractId ? L('Sent by {name}', arg(this.fromMemberID)) : L('Sent to {name}', arg(toMemberID))
    }
  },
  methods: {
    withGroupCurrency,
    humanDate,
    async initializeDetails () {
      // NOTE: Only for the historical payments, there is 'period'
      const { id, period } = this.$route.query
      const payment = this.lightningPayment || // TODO: to be re-worked once lightning network is implemented.
        this.currentGroupState.payments[id] ||
        (await this.getHistoricalPaymentDetailsByPeriod(period))[id]

      if (id) {
        sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'PaymentDetail', { id })
      }
      if (payment) {
        const periodstamp = await this.historicalPeriodStampGivenDate(payment.meta.createdDate)
        // TODO: the payment augmentation duplication in Payment and PaymentRecord, and between todo/sent/received, needs to be resolved more thoroughly
        this.payment = {
          ...cloneDeep(payment),
          isOldPayment: comparePeriodStamps(periodstamp, this.currentPaymentPeriod) < 0,
          periodstamp
        }
      } else {
        console.warn('PaymentDetail: Missing valid query "id"')
        sbp('okTurtles.events/emit', CLOSE_MODAL)
      }
    },
    closeModal () {
      this.$refs.modal.close()
    },
    cancelPayment () {
      alert('TODO: Implement cancel payment')
    },
    sendThankYou () {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'SendThankYouModal', { toMemberID: this.payment.data.fromMemberID })
    }
  },
  validations: {
    form: {}
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payment-list {
  margin: 1rem auto 0.5rem auto;
  width: 100%;
  max-width: 25rem;
}

.c-subtitle,
.c-title {
  text-align: center;
  width: 100%;
}

.c-subtitle {
  margin-top: 0.25rem;

  @include tablet {
    margin-bottom: 0.25rem;
  }
}

.c-payment-list-item {
  height: 3.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $general_0;

  &.c-column {
    flex-direction: column;
    height: auto;
    align-items: flex-start;

    .has-text-1 {
      padding-top: 1rem;
      padding-bottom: 0.3125rem;
    }
  }

  .c-lightning-trxn-id {
    max-width: 60%;
  }
}

.c-buttons-container {
  flex-direction: column-reverse;
  align-items: stretch;
  gap: 1rem;
  max-width: 25rem;
  margin: 1.625rem auto 0;
  width: 100%;

  &.is-centered {
    justify-content: center;
  }

  .button:not(:last-child) {
    margin-right: 0;
  }

  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: center;
  }

  @include desktop {
    max-width: unset;
  }
}
</style>
`, ".c-payment-list {\n  margin: 1rem auto 0.5rem auto;\n  width: 100%;\n  max-width: 25rem;\n}\n\n.c-subtitle,\n.c-title {\n  text-align: center;\n  width: 100%;\n}\n\n.c-subtitle {\n  margin-top: 0.25rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-subtitle {\n    margin-bottom: 0.25rem;\n  }\n}\n\n.c-payment-list-item {\n  height: 3.3125rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--general_0);\n}\n.c-payment-list-item.c-column {\n  flex-direction: column;\n  height: auto;\n  align-items: flex-start;\n}\n.c-payment-list-item.c-column .has-text-1 {\n  padding-top: 1rem;\n  padding-bottom: 0.3125rem;\n}\n.c-payment-list-item .c-lightning-trxn-id {\n  max-width: 60%;\n}\n\n.c-buttons-container {\n  flex-direction: column-reverse;\n  align-items: stretch;\n  gap: 1rem;\n  max-width: 25rem;\n  margin: 1.625rem auto 0;\n  width: 100%;\n}\n.c-buttons-container.is-centered {\n  justify-content: center;\n}\n.c-buttons-container .button:not(:last-child) {\n  margin-right: 0;\n}\n@media screen and (min-width: 769px), print {\n  .c-buttons-container {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 2rem;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-buttons-container {\n    max-width: unset;\n  }\n}\n\n/*# sourceMappingURL=PaymentDetail.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5c090db4";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(ref='modal' v-if='payment' :a11yTitle='L("Payment details")')
  template(slot='title')
    i18n Payment details

  .is-title-2.c-title(data-test='amount') {{ withGroupCurrency(payment.data.amount) }}
  .c-subtitle.has-text-1(data-test='subtitle') {{ subtitleCopy }}

  //- TODO This should be a table...
  ul.c-payment-list(data-test='details')
    li.c-payment-list-item
      i18n.has-text-1(tag='label') Date & Time
      strong {{ humanDate(payment.meta.createdDate, { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
    li.c-payment-list-item
      i18n.has-text-1 Relative to
      strong {{ humanDate(payment.periodstamp, { month: 'long', year: 'numeric', day: 'numeric' }) }}
    li.c-payment-list-item
      i18n.has-text-1 Mincome at the time
      strong {{ withGroupCurrency(payment.data.groupMincome) }}
    li.c-payment-list-item(v-if='lightningPayment')
      i18n.has-text-1 Transaction ID
      link-to-copy.c-lightning-trxn-id(
        :link='payment.data.transactionId'
      )

    li.c-payment-list-item.c-column(v-if='payment.data.memo')
      i18n.has-text-1 Notes
      p.has-text-bold {{ payment.data.memo }}

  .buttons.c-buttons-container(
    v-if='!lightningPayment && buttonCount > 0'
    :class='{ "is-centered": buttonCount === 1 }'
  )
    i18n.button.is-outlined(
      tag='button'
      v-if='isPaidByMyself && !payment.isOldPayment'
      @click='cancelPayment'
    ) Cancel payment

    i18n.button(
      v-if='!isPaidByMyself'
      tag='button'
      @click='sendThankYou'
    ) Send Thanks!
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { CLOSE_MODAL, REPLACE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import { humanDate, comparePeriodStamps } from '../../../../frontend/model/contracts/shared/time.js'
import { cloneDeep } from 'turtledash'

export default ({
  name: 'PaymentDetail',
  components: {
    ModalTemplate,
    LinkToCopy
  },
  mixins: [PaymentsMixin],
  created () {
    this.initializeDetails()
  },
  data: () => ({
    payment: null
  }),
  props: {
    lightningPayment: {
      // temporary prop for dummy lightning payment data.
      // TODO: onece lightning networki is implemented, remove this prop and get the payment data from Vuex getter.
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters([
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    fromMemberID () {
      return this.payment?.data.fromMemberID || ''
    },
    isPaidByMyself () {
      return this.fromMemberID === this.ourIdentityContractId
    },
    buttonCount () {
      return Number(!this.isPaidByMyself) + Number(this.isPaidByMyself && !this.payment.isOldPayment)
    },
    subtitleCopy () {
      const toMemberID = this.payment.data.toMemberID
      const arg = (memberID) => ({ name: this.userDisplayNameFromID(memberID) })
      return toMemberID === this.ourIdentityContractId ? L('Sent by {name}', arg(this.fromMemberID)) : L('Sent to {name}', arg(toMemberID))
    }
  },
  methods: {
    withGroupCurrency,
    humanDate,
    async initializeDetails () {
      // NOTE: Only for the historical payments, there is 'period'
      const { id, period } = this.$route.query
      const payment = this.lightningPayment || // TODO: to be re-worked once lightning network is implemented.
        this.currentGroupState.payments[id] ||
        (await this.getHistoricalPaymentDetailsByPeriod(period))[id]

      if (id) {
        sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'PaymentDetail', { id })
      }
      if (payment) {
        const periodstamp = await this.historicalPeriodStampGivenDate(payment.meta.createdDate)
        // TODO: the payment augmentation duplication in Payment and PaymentRecord, and between todo/sent/received, needs to be resolved more thoroughly
        this.payment = {
          ...cloneDeep(payment),
          isOldPayment: comparePeriodStamps(periodstamp, this.currentPaymentPeriod) < 0,
          periodstamp
        }
      } else {
        console.warn('PaymentDetail: Missing valid query "id"')
        sbp('okTurtles.events/emit', CLOSE_MODAL)
      }
    },
    closeModal () {
      this.$refs.modal.close()
    },
    cancelPayment () {
      alert('TODO: Implement cancel payment')
    },
    sendThankYou () {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'SendThankYouModal', { toMemberID: this.payment.data.fromMemberID })
    }
  },
  validations: {
    form: {}
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payment-list {
  margin: 1rem auto 0.5rem auto;
  width: 100%;
  max-width: 25rem;
}

.c-subtitle,
.c-title {
  text-align: center;
  width: 100%;
}

.c-subtitle {
  margin-top: 0.25rem;

  @include tablet {
    margin-bottom: 0.25rem;
  }
}

.c-payment-list-item {
  height: 3.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $general_0;

  &.c-column {
    flex-direction: column;
    height: auto;
    align-items: flex-start;

    .has-text-1 {
      padding-top: 1rem;
      padding-bottom: 0.3125rem;
    }
  }

  .c-lightning-trxn-id {
    max-width: 60%;
  }
}

.c-buttons-container {
  flex-direction: column-reverse;
  align-items: stretch;
  gap: 1rem;
  max-width: 25rem;
  margin: 1.625rem auto 0;
  width: 100%;

  &.is-centered {
    justify-content: center;
  }

  .button:not(:last-child) {
    margin-right: 0;
  }

  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: center;
  }

  @include desktop {
    max-width: unset;
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
var PaymentDetail_default = __vue_component__;
export {
  PaymentDetail_default as default
};
//# sourceMappingURL=PaymentDetail-JTJJG6LR-cached.js.map
