import {
  RecordPaymentsList_default
} from "./chunk-IVKMRDAZ-cached.js";
import "./chunk-NO7PSN3H-cached.js";
import {
  PAYMENT_COMPLETED,
  PAYMENT_NOT_RECEIVED,
  PAYMENT_PENDING,
  PAYMENT_TYPE_MANUAL
} from "./chunk-5AEIP7HX-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  dateToMonthstamp
} from "./chunk-V3SQGGAF-cached.js";
import {
  init_vue_esm,
  vue_esm_default
} from "./chunk-K33NK7LD-cached.js";
import "./chunk-GDHKI2YN-cached.js";
import "./chunk-3T5W4UPP-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import "./chunk-K4WYPR2K-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default,
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  PAYMENTS_RECORDED
} from "./chunk-4UEGBI3X-cached.js";
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

// frontend/views/containers/payments/RecordPayment.vue
var import_vuelidate = __toESM(require_lib());

// frontend/assets/svgs/success.svg
var success_default = { render: function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "svg-success", attrs: { "width": "81", "height": "81", "viewBox": "0 0 81 81", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M28.0625 42.9623C30.1102 45.7683 32.0518 48.7317 33.642 51.8214C34.5968 53.6765 34.4403 53.7972 35.2605 51.864C39.4018 42.1022 46.3523 33.5764 56.4286 29.5459", "stroke": "var(--primary_0)", "stroke-width": "6", "stroke-linecap": "round", "stroke-linejoin": "round" } }), _c("circle", { attrs: { "cx": "40.5", "cy": "40.5", "r": "37.5", "stroke": "var(--primary_1)", "stroke-width": "6" } })]);
} };

// frontend/views/containers/payments/RecordPayment.vue
init_vue_esm();
var __vue_script__ = {
  name: "RecordPayment",
  mixins: [import_vuelidate.validationMixin],
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    RecordPaymentsList: RecordPaymentsList_default,
    SvgSuccess: success_default,
    BannerScoped: BannerScoped_default,
    BannerSimple: BannerSimple_default,
    ButtonSubmit: ButtonSubmit_default
  },
  props: {
    todoItems: {
      type: Array
    }
  },
  data() {
    return {
      form: {
        paymentsToRecord: [],
        memo: ""
      },
      ephemeral: {
        displayMemo: false
      },
      donePayment: false
    };
  },
  created() {
    this.form.paymentsToRecord = this.paymentsList.map((payment, index) => ({
      ...payment,
      index,
      // A link between original payment and this copy
      checked: false
    }));
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupSettings",
      "groupMincomeCurrency",
      "thisPeriodPaymentInfo",
      "ourPayments",
      "userDisplayNameFromID"
    ]),
    paymentsList() {
      return this.todoItems.map((item) => {
        return item.data && item.data.status === PAYMENT_NOT_RECEIVED ? {
          hash: item.hash,
          data: item.data,
          meta: item.meta,
          toMemberID: item.data.toMemberID,
          displayName: this.userDisplayNameFromID(item.data.toMemberID),
          date: item.meta.createdDate,
          monthstamp: dateToMonthstamp(item.meta.createdDate),
          amount: item.data.amount
        } : item;
      });
    },
    recordNumber() {
      return this.form.paymentsToRecord.filter((p) => p.checked).length;
    },
    registerPaymentCopy() {
      return this.recordNumber === 1 ? L("Record 1 payment") : L("Record {number} payments", { number: this.recordNumber });
    }
  },
  methods: {
    closeModal() {
      this.$refs.modal.close();
    },
    updateRecord({ index, ...data }) {
      vue_esm_default.set(this.form.paymentsToRecord, index, {
        ...this.form.paymentsToRecord[index],
        ...data
      });
    },
    async submit() {
      const groupCurrency = this.groupMincomeCurrency;
      const paymentsToRecord = this.form.paymentsToRecord.filter((p) => p.checked);
      let hasError = false;
      this.$refs.formMsg.clean();
      for (const pRecord of paymentsToRecord) {
        const payment = this.paymentsList[pRecord.index];
        const isStatusNotReceived = payment.data && payment.data.status === PAYMENT_NOT_RECEIVED;
        if (pRecord.amount > payment.amount) {
        }
        try {
          const memo = this.form.memo;
          const paymentInfo = {
            toMemberID: payment.toMemberID,
            amount: +pRecord.amount,
            total: payment.amount,
            isLate: payment.isLate,
            // Even if amount is the same, it can be a partial from a previous partial payment
            // TODO: Maybe this can fix the Payments.vue bug when looking for other partials' hash.
            partial: payment.partial || pRecord.amount - payment.amount > 0,
            monthstamp: payment.monthstamp,
            currencyFromTo: ["USD", groupCurrency],
            // TODO: this!
            exchangeRate: 1,
            txid: "" + Math.random(),
            status: PAYMENT_PENDING,
            paymentType: PAYMENT_TYPE_MANUAL,
            ...memo ? { memo } : {}
            // TODO/BUG with flowTyper validation. Empty string '' fails.
          };
          if (isStatusNotReceived) {
            await esm_default("gi.actions/group/paymentUpdate", {
              contractID: this.currentGroupId,
              data: {
                paymentHash: payment.hash,
                updatedProperties: {
                  ...paymentInfo,
                  status: PAYMENT_COMPLETED
                }
              }
            });
          } else {
            const msg = await esm_default("gi.actions/group/payment", {
              contractID: this.currentGroupId,
              data: paymentInfo
            });
            await esm_default("gi.actions/group/paymentUpdate", {
              contractID: this.currentGroupId,
              data: {
                paymentHash: msg.hash(),
                updatedProperties: {
                  status: PAYMENT_COMPLETED
                }
              }
            });
          }
        } catch (e) {
          hasError = true;
          console.error("RecordPayment submit() error:", e);
          this.$refs.formMsg.danger(e);
        }
      }
      if (!hasError) {
        this.donePayment = true;
        esm_default("okTurtles.events/emit", PAYMENTS_RECORDED, {
          hashes: paymentsToRecord.map((p) => p.hash)
        });
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.paymentsList ? _c(
    "modal-base-template",
    {
      ref: "modal",
      staticClass: "has-background",
      attrs: { fullscreen: true, a11yTitle: _vm.L("Record payments") }
    },
    [
      _c(
        "div",
        {
          staticClass: "c-header",
          class: { "hide-desktop": _vm.donePayment }
        },
        [
          _c(
            "i18n",
            { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
            [_vm._v("Record payments")]
          )
        ],
        1
      ),
      !_vm.donePayment ? _c("div", { staticClass: "c-payment-form" }, [
        _c("div", { staticClass: "c-content" }, [
          _c(
            "form",
            {
              staticClass: "card c-card",
              attrs: { novalidate: "true" },
              on: {
                submit: function($event) {
                  $event.preventDefault();
                }
              }
            },
            [
              _c(
                "i18n",
                {
                  staticClass: "has-text-bold c-title",
                  attrs: { tag: "h3" }
                },
                [_vm._v("Who did you send money to?")]
              ),
              _c("record-payments-list", {
                attrs: { paymentsList: _vm.form.paymentsToRecord },
                on: { update: _vm.updateRecord }
              }),
              _c("div", { staticClass: "c-footer" }, [
                _c(
                  "div",
                  { staticClass: "c-footer-info" },
                  [
                    _c(
                      "i18n",
                      {
                        staticClass: "has-text-bold",
                        attrs: {
                          tag: "h4",
                          args: {
                            span_: '<span class="has-text-small has-text-1 has-text-normal">',
                            _span: "</span>"
                          }
                        }
                      },
                      [_vm._v("Add a note {span_}(optional){_span}")]
                    ),
                    _c(
                      "i18n",
                      {
                        staticClass: "has-text-small has-text-1",
                        attrs: { tag: "p" }
                      },
                      [
                        _vm._v(
                          "Leave a message to the group members selected above."
                        )
                      ]
                    )
                  ],
                  1
                ),
                _c(
                  "div",
                  { staticClass: "c-footer-action" },
                  [
                    _c("input", {
                      staticClass: "switch",
                      attrs: {
                        id: "showComment",
                        type: "checkbox",
                        name: "displayComment"
                      },
                      on: {
                        change: function($event) {
                          _vm.ephemeral.displayMemo = !_vm.ephemeral.displayMemo;
                        }
                      }
                    }),
                    _c(
                      "i18n",
                      {
                        staticClass: "sr-only",
                        attrs: { tag: "label", for: "displayComment" }
                      },
                      [_vm._v("Toggle comment box")]
                    )
                  ],
                  1
                )
              ]),
              _c("transition", { attrs: { name: "slidedown" } }, [
                _vm.ephemeral.displayMemo ? _c(
                  "label",
                  { staticClass: "field" },
                  [
                    _c("i18n", { staticClass: "sr-only label" }, [
                      _vm._v("Leave a message")
                    ]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.memo,
                          expression: "form.memo"
                        }
                      ],
                      staticClass: "textarea c-comment",
                      attrs: { rows: "4" },
                      domProps: { value: _vm.form.memo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return;
                          }
                          _vm.$set(
                            _vm.form,
                            "memo",
                            $event.target.value
                          );
                        }
                      }
                    })
                  ],
                  1
                ) : _vm._e()
              ]),
              _c("banner-scoped", {
                ref: "formMsg",
                attrs: { "data-test": "formMsg" }
              }),
              _c(
                "div",
                { staticClass: "buttons c-buttons" },
                [
                  _c(
                    "i18n",
                    {
                      staticClass: "is-outlined",
                      attrs: { tag: "button", type: "button" },
                      on: { click: _vm.closeModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _c(
                    "button-submit",
                    {
                      staticClass: "is-success",
                      attrs: { disabled: this.recordNumber === 0 },
                      on: { click: _vm.submit }
                    },
                    [_vm._v(_vm._s(_vm.registerPaymentCopy))]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]) : _c(
        "div",
        { staticClass: "c-payment-success" },
        [
          _c("svg-success"),
          _c(
            "i18n",
            { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
            [_vm._v("Your payments were recorded")]
          ),
          _c(
            "banner-simple",
            { attrs: { severity: "info" } },
            [
              _c(
                "i18n",
                {
                  attrs: {
                    args: {
                      r1: '<a class="link" href="https://donorbox.org/okturtles-donation" target="_blank">',
                      r2: "</a>"
                    }
                  }
                },
                [
                  _vm._v(
                    "Please support the development of Group Income by {r1}sending a donation{r2}!"
                  )
                ]
              )
            ],
            1
          ),
          _c(
            "i18n",
            {
              staticClass: "is-outlined",
              attrs: { tag: "button", "data-test": "successClose" },
              on: { click: _vm.closeModal }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ]
  ) : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-22372ca7_0", { source: ".c-header[data-v-22372ca7] {\n  background: var(--background_0);\n  padding: 1.5rem 0 1.125rem 2rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-22372ca7] {\n    text-align: center;\n    padding: 2rem 0 1.625rem 0;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-header[data-v-22372ca7] {\n    max-width: 33rem;\n    width: 100%;\n    background: transparent;\n    text-align: left;\n    position: relative;\n    padding-top: 2.5rem;\n    padding-bottom: 1rem;\n}\n}\n.c-payment-form[data-v-22372ca7] {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-payment-form[data-v-22372ca7] {\n    max-width: 33rem;\n}\n}\n.c-content[data-v-22372ca7] {\n  padding-top: 6.125rem;\n}\n@media screen and (min-width: 769px), print {\n.c-content[data-v-22372ca7] {\n    padding-top: 7.25rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-content[data-v-22372ca7] {\n    padding-top: 0;\n}\n}\n.c-content .c-title[data-v-22372ca7] {\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n@media screen and (min-width: 769px), print {\n.c-content .c-title[data-v-22372ca7] {\n    margin-bottom: 1rem;\n}\n}\n.c-footer[data-v-22372ca7] {\n  padding-top: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (min-width: 769px), print {\n.c-footer[data-v-22372ca7] {\n    padding-top: 1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-footer[data-v-22372ca7] {\n    padding-top: 1.5rem;\n}\n}\n.c-comment[data-v-22372ca7] {\n  margin-top: 1rem;\n}\n@media screen and (max-width: 768px) {\n.c-buttons[data-v-22372ca7] {\n    flex-direction: column-reverse;\n}\n.c-buttons button[data-v-22372ca7]:first-child {\n    margin-top: 1rem;\n    margin-right: 0;\n}\n.c-buttons button[data-v-22372ca7] {\n    width: 100%;\n}\n}\n.c-payment-success[data-v-22372ca7] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 9rem;\n}\n@media screen and (min-width: 769px), print {\n.c-payment-success[data-v-22372ca7] {\n    padding-top: 10rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-payment-success[data-v-22372ca7] {\n    padding-top: 8rem;\n}\n}\n.c-payment-success .c-title[data-v-22372ca7] {\n  margin: 2rem;\n}\n.c-payment-success .c-message[data-v-22372ca7] {\n  max-width: 24.5rem;\n}\n.c-payment-success button[data-v-22372ca7] {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=RecordPayment.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/RecordPayment.vue", "RecordPayment.vue"], "names": [], "mappings": "AA8PA;EACA,+BAAA;EACA,+BAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;AC7PA;AACA;ADuPA;IAQA,kBAAA;IACA,0BAAA;AC5PE;AACF;AACA;ADiPA;IAaA,gBAAA;IACA,WAAA;IACA,uBAAA;IACA,gBAAA;IACA,kBAAA;IACA,mBAAA;IACA,oBAAA;AC3PE;AACF;AD8PA;EACA,WAAA;AC3PA;AACA;ADyPA;IAIA,gBAAA;AC1PE;AACF;AD6PA;EACA,qBAAA;AC1PA;AACA;ADwPA;IAIA,oBAAA;ACzPE;AACF;AACA;ADmPA;IAQA,cAAA;ACxPE;AACF;AD0PA;EACA,qBAAA;EACA,mBAAA;ACxPA;AACA;ADqPA;IAKA,mBAAA;ACvPE;AACF;AD4PA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;ACzPA;AACA;ADqPA;IAMA,mBAAA;ACxPE;AACF;AACA;ADgPA;IAUA,mBAAA;ACvPE;AACF;AD2PA;EACA,gBAAA;ACxPA;AAEA;ADyPA;IAEA,8BAAA;ACxPE;AD0PF;IACA,gBAAA;IACA,eAAA;ACxPE;AD2PF;IACA,WAAA;ACzPE;AACF;AD8PA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AC3PA;AACA;ADqPA;IAQA,kBAAA;AC1PE;AACF;AACA;ADgPA;IAYA,iBAAA;ACzPE;AACF;AD2PA;EACA,YAAA;ACzPA;AD4PA;EACA,kBAAA;AC1PA;AD6PA;EACA,gBAAA;AC3PA;;AAEA,4CAA4C", "file": "RecordPayment.vue", "sourcesContent": [`<template lang='pug'>
// Stop initialization if paymentDistribution not present
modal-base-template(ref='modal' :fullscreen='true' class='has-background' v-if='paymentsList' :a11yTitle='L("Record payments")')
  .c-header(:class='{"hide-desktop": donePayment}')
    i18n.is-title-2.c-title(tag='h2') Record payments

  .c-payment-form(v-if='!donePayment')
    .c-content
      form.card.c-card(
        @submit.prevent=''
        novalidate='true'
      )
        i18n.has-text-bold.c-title(tag='h3') Who did you send money to?
        record-payments-list(
          :paymentsList='form.paymentsToRecord'
          @update='updateRecord'
        )

        .c-footer
          .c-footer-info
            i18n.has-text-bold(
              tag='h4'
              :args='{ span_: \`<span class="has-text-small has-text-1 has-text-normal">\`, _span: "</span>"}'
            ) Add a note {span_}(optional){_span}

            i18n.has-text-small.has-text-1(
              tag='p'
            ) Leave a message to the group members selected above.
          .c-footer-action
            input.switch#showComment(
              type='checkbox'
              name='displayComment'
              @change='ephemeral.displayMemo = !ephemeral.displayMemo'
            )
            i18n.sr-only(tag='label' for='displayComment') Toggle comment box

        transition(name='slidedown')
          label.field(v-if='ephemeral.displayMemo')
            i18n.sr-only.label Leave a message
            textarea.textarea.c-comment(v-model='form.memo' rows='4')

        banner-scoped(ref='formMsg' data-test='formMsg')

        .buttons.c-buttons
          i18n.is-outlined(
            tag='button'
            type='button'
            @click='closeModal'
          ) Cancel

          button-submit.is-success(
            @click='submit'
            :disabled='this.recordNumber === 0'
          ) {{ registerPaymentCopy }}

  .c-payment-success(v-else)
    svg-success
    i18n.is-title-2.c-title(tag='h2') Your payments were recorded
    banner-simple(severity='info')
      i18n(
        :args='{ r1: \`<a class="link" href="https://donorbox.org/okturtles-donation" target="_blank">\`, r2: "</a>"}'
      ) Please support the development of Group Income by {r1}sending a donation{r2}!

    i18n.is-outlined(
      tag='button'
      data-test='successClose'
      @click='closeModal'
    ) Close
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapState, mapGetters } from 'vuex'
import { PAYMENT_PENDING, PAYMENT_COMPLETED, PAYMENT_NOT_RECEIVED, PAYMENT_TYPE_MANUAL } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { validationMixin } from 'vuelidate'
import SvgSuccess from '../../../../frontend/assets/svgs/success.svg'
import { dateToMonthstamp } from '../../../../frontend/model/contracts/shared/time.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import RecordPaymentsList from '../../../../frontend/views/containers/payments/RecordPaymentsList.vue'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import { PAYMENTS_RECORDED } from '../../../../frontend/utils/events.js'

export default ({
  name: 'RecordPayment',
  mixins: [validationMixin],
  components: {
    ModalBaseTemplate,
    RecordPaymentsList,
    SvgSuccess,
    BannerScoped,
    BannerSimple,
    ButtonSubmit
  },
  props: {
    todoItems: {
      type: Array
    }
  },
  data () {
    return {
      form: {
        paymentsToRecord: [],
        memo: ''
      },
      ephemeral: {
        displayMemo: false
      },
      donePayment: false
    }
  },
  created () {
    this.form.paymentsToRecord = this.paymentsList.map((payment, index) => ({
      ...payment,
      index: index, // A link between original payment and this copy
      checked: false
    }))
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupSettings',
      'groupMincomeCurrency',
      'thisPeriodPaymentInfo',
      'ourPayments',
      'userDisplayNameFromID'
    ]),
    paymentsList () {
      return this.todoItems.map(item => {
        return item.data && item.data.status === PAYMENT_NOT_RECEIVED // if not received item, re-format the obj
          ? {
              hash: item.hash,
              data: item.data,
              meta: item.meta,
              toMemberID: item.data.toMemberID,
              displayName: this.userDisplayNameFromID(item.data.toMemberID),
              date: item.meta.createdDate,
              monthstamp: dateToMonthstamp(item.meta.createdDate),
              amount: item.data.amount
            }
          : item
      })
    },
    recordNumber () {
      return this.form.paymentsToRecord.filter(p => p.checked).length
    },
    registerPaymentCopy () {
      return this.recordNumber === 1
        ? L('Record 1 payment')
        : L('Record {number} payments', { number: this.recordNumber })
    }
  },
  methods: {
    closeModal () {
      this.$refs.modal.close()
    },
    updateRecord ({ index, ...data }) {
      Vue.set(this.form.paymentsToRecord, index, {
        ...this.form.paymentsToRecord[index],
        ...data
      })
    },
    async submit () {
      const groupCurrency = this.groupMincomeCurrency
      const paymentsToRecord = this.form.paymentsToRecord.filter(p => p.checked)
      let hasError = false
      this.$refs.formMsg.clean()

      for (const pRecord of paymentsToRecord) {
        const payment = this.paymentsList[pRecord.index]
        const isStatusNotReceived = payment.data && payment.data.status === PAYMENT_NOT_RECEIVED

        if (pRecord.amount > payment.amount) {
          // TODO/REVIEW - Should we show a warning?
        }

        try {
          // TODO: do currency conversion here using initialCurrency?
          // TODO: remember when creating 'gi.contracts/group/payment' to set the payment
          //       currency using:
          //       getters.thisPeriodPaymentInfo.initialCurrency || getters.groupMincomeCurrency
          const memo = this.form.memo
          const paymentInfo = {
            toMemberID: payment.toMemberID,
            amount: +pRecord.amount,
            total: payment.amount,
            isLate: payment.isLate,
            // Even if amount is the same, it can be a partial from a previous partial payment
            // TODO: Maybe this can fix the Payments.vue bug when looking for other partials' hash.
            partial: payment.partial || pRecord.amount - payment.amount > 0,
            monthstamp: payment.monthstamp,
            currencyFromTo: ['USD', groupCurrency], // TODO: this!
            exchangeRate: 1,
            txid: '' + Math.random(),
            status: PAYMENT_PENDING,
            paymentType: PAYMENT_TYPE_MANUAL,
            ...(memo ? { memo } : {}) // TODO/BUG with flowTyper validation. Empty string '' fails.
          }

          if (isStatusNotReceived) {
            // If it's re-sending the payment that has been marked as 'not-recieved' by the receiver,
            // only update the details of the existing payment item so that it doesn't lead to duplication bug in the payment UI.
            await sbp('gi.actions/group/paymentUpdate', {
              contractID: this.currentGroupId,
              data: {
                paymentHash: payment.hash,
                updatedProperties: {
                  ...paymentInfo,
                  status: PAYMENT_COMPLETED
                }
              }
            })
          } else {
            const msg = await sbp('gi.actions/group/payment', {
              contractID: this.currentGroupId, data: paymentInfo
            })
            // TODO: hack until /payment supports sending completed payment
            //       (and "uncompleting" a payment)
            await sbp('gi.actions/group/paymentUpdate', {
              contractID: this.currentGroupId,
              data: {
                paymentHash: msg.hash(),
                updatedProperties: {
                  status: PAYMENT_COMPLETED
                }
              }
            })
          }
        } catch (e) {
          hasError = true
          console.error('RecordPayment submit() error:', e)
          this.$refs.formMsg.danger(e)
        }
      }

      if (!hasError) {
        this.donePayment = true
        sbp('okTurtles.events/emit', PAYMENTS_RECORDED, {
          hashes: paymentsToRecord.map(p => p.hash)
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-header {
  background: $background_0;
  padding: 1.5rem 0 1.125rem 2rem;
  position: absolute;
  left: 0;
  right: 0;

  @include tablet {
    text-align: center;
    padding: 2rem 0 1.625rem 0;
  }

  @include desktop {
    max-width: 33rem;
    width: 100%;
    background: transparent;
    text-align: left;
    position: relative;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
  }
}

.c-payment-form {
  width: 100%;

  @include tablet {
    max-width: 33rem;
  }
}

.c-content {
  padding-top: 6.125rem;

  @include tablet {
    padding-top: 7.25rem;
  }

  @include desktop {
    padding-top: 0;
  }

  .c-title {
    margin-bottom: 0.5rem;
    font-size: $size_4;

    @include tablet {
      margin-bottom: 1rem;
    }
  }
}

// Footer
.c-footer {
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @include tablet {
    padding-top: 1.5rem;
  }

  @include desktop {
    padding-top: 1.5rem;
  }
}

// Actions
.c-comment {
  margin-top: 1rem;
}

.c-buttons {
  @include phone {
    flex-direction: column-reverse;

    button:first-child {
      margin-top: 1rem;
      margin-right: 0;
    }

    button {
      width: 100%;
    }
  }
}

// Sucess
.c-payment-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9rem;

  @include tablet {
    padding-top: 10rem;
  }

  @include desktop {
    padding-top: 8rem;
  }

  .c-title {
    margin: 2rem;
  }

  .c-message {
    max-width: 24.5rem;
  }

  button {
    margin-top: 2rem;
  }
}
</style>
`, ".c-header {\n  background: var(--background_0);\n  padding: 1.5rem 0 1.125rem 2rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    text-align: center;\n    padding: 2rem 0 1.625rem 0;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-header {\n    max-width: 33rem;\n    width: 100%;\n    background: transparent;\n    text-align: left;\n    position: relative;\n    padding-top: 2.5rem;\n    padding-bottom: 1rem;\n  }\n}\n\n.c-payment-form {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payment-form {\n    max-width: 33rem;\n  }\n}\n\n.c-content {\n  padding-top: 6.125rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-content {\n    padding-top: 7.25rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-content {\n    padding-top: 0;\n  }\n}\n.c-content .c-title {\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-content .c-title {\n    margin-bottom: 1rem;\n  }\n}\n\n.c-footer {\n  padding-top: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (min-width: 769px), print {\n  .c-footer {\n    padding-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-footer {\n    padding-top: 1.5rem;\n  }\n}\n\n.c-comment {\n  margin-top: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .c-buttons {\n    flex-direction: column-reverse;\n  }\n  .c-buttons button:first-child {\n    margin-top: 1rem;\n    margin-right: 0;\n  }\n  .c-buttons button {\n    width: 100%;\n  }\n}\n\n.c-payment-success {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 9rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-payment-success {\n    padding-top: 10rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-payment-success {\n    padding-top: 8rem;\n  }\n}\n.c-payment-success .c-title {\n  margin: 2rem;\n}\n.c-payment-success .c-message {\n  max-width: 24.5rem;\n}\n.c-payment-success button {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=RecordPayment.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-22372ca7";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
// Stop initialization if paymentDistribution not present
modal-base-template(ref='modal' :fullscreen='true' class='has-background' v-if='paymentsList' :a11yTitle='L("Record payments")')
  .c-header(:class='{"hide-desktop": donePayment}')
    i18n.is-title-2.c-title(tag='h2') Record payments

  .c-payment-form(v-if='!donePayment')
    .c-content
      form.card.c-card(
        @submit.prevent=''
        novalidate='true'
      )
        i18n.has-text-bold.c-title(tag='h3') Who did you send money to?
        record-payments-list(
          :paymentsList='form.paymentsToRecord'
          @update='updateRecord'
        )

        .c-footer
          .c-footer-info
            i18n.has-text-bold(
              tag='h4'
              :args='{ span_: \`<span class="has-text-small has-text-1 has-text-normal">\`, _span: "</span>"}'
            ) Add a note {span_}(optional){_span}

            i18n.has-text-small.has-text-1(
              tag='p'
            ) Leave a message to the group members selected above.
          .c-footer-action
            input.switch#showComment(
              type='checkbox'
              name='displayComment'
              @change='ephemeral.displayMemo = !ephemeral.displayMemo'
            )
            i18n.sr-only(tag='label' for='displayComment') Toggle comment box

        transition(name='slidedown')
          label.field(v-if='ephemeral.displayMemo')
            i18n.sr-only.label Leave a message
            textarea.textarea.c-comment(v-model='form.memo' rows='4')

        banner-scoped(ref='formMsg' data-test='formMsg')

        .buttons.c-buttons
          i18n.is-outlined(
            tag='button'
            type='button'
            @click='closeModal'
          ) Cancel

          button-submit.is-success(
            @click='submit'
            :disabled='this.recordNumber === 0'
          ) {{ registerPaymentCopy }}

  .c-payment-success(v-else)
    svg-success
    i18n.is-title-2.c-title(tag='h2') Your payments were recorded
    banner-simple(severity='info')
      i18n(
        :args='{ r1: \`<a class="link" href="https://donorbox.org/okturtles-donation" target="_blank">\`, r2: "</a>"}'
      ) Please support the development of Group Income by {r1}sending a donation{r2}!

    i18n.is-outlined(
      tag='button'
      data-test='successClose'
      @click='closeModal'
    ) Close
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapState, mapGetters } from 'vuex'
import { PAYMENT_PENDING, PAYMENT_COMPLETED, PAYMENT_NOT_RECEIVED, PAYMENT_TYPE_MANUAL } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { validationMixin } from 'vuelidate'
import SvgSuccess from '../../../../frontend/assets/svgs/success.svg'
import { dateToMonthstamp } from '../../../../frontend/model/contracts/shared/time.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import RecordPaymentsList from '../../../../frontend/views/containers/payments/RecordPaymentsList.vue'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import { PAYMENTS_RECORDED } from '../../../../frontend/utils/events.js'

export default ({
  name: 'RecordPayment',
  mixins: [validationMixin],
  components: {
    ModalBaseTemplate,
    RecordPaymentsList,
    SvgSuccess,
    BannerScoped,
    BannerSimple,
    ButtonSubmit
  },
  props: {
    todoItems: {
      type: Array
    }
  },
  data () {
    return {
      form: {
        paymentsToRecord: [],
        memo: ''
      },
      ephemeral: {
        displayMemo: false
      },
      donePayment: false
    }
  },
  created () {
    this.form.paymentsToRecord = this.paymentsList.map((payment, index) => ({
      ...payment,
      index: index, // A link between original payment and this copy
      checked: false
    }))
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupSettings',
      'groupMincomeCurrency',
      'thisPeriodPaymentInfo',
      'ourPayments',
      'userDisplayNameFromID'
    ]),
    paymentsList () {
      return this.todoItems.map(item => {
        return item.data && item.data.status === PAYMENT_NOT_RECEIVED // if not received item, re-format the obj
          ? {
              hash: item.hash,
              data: item.data,
              meta: item.meta,
              toMemberID: item.data.toMemberID,
              displayName: this.userDisplayNameFromID(item.data.toMemberID),
              date: item.meta.createdDate,
              monthstamp: dateToMonthstamp(item.meta.createdDate),
              amount: item.data.amount
            }
          : item
      })
    },
    recordNumber () {
      return this.form.paymentsToRecord.filter(p => p.checked).length
    },
    registerPaymentCopy () {
      return this.recordNumber === 1
        ? L('Record 1 payment')
        : L('Record {number} payments', { number: this.recordNumber })
    }
  },
  methods: {
    closeModal () {
      this.$refs.modal.close()
    },
    updateRecord ({ index, ...data }) {
      Vue.set(this.form.paymentsToRecord, index, {
        ...this.form.paymentsToRecord[index],
        ...data
      })
    },
    async submit () {
      const groupCurrency = this.groupMincomeCurrency
      const paymentsToRecord = this.form.paymentsToRecord.filter(p => p.checked)
      let hasError = false
      this.$refs.formMsg.clean()

      for (const pRecord of paymentsToRecord) {
        const payment = this.paymentsList[pRecord.index]
        const isStatusNotReceived = payment.data && payment.data.status === PAYMENT_NOT_RECEIVED

        if (pRecord.amount > payment.amount) {
          // TODO/REVIEW - Should we show a warning?
        }

        try {
          // TODO: do currency conversion here using initialCurrency?
          // TODO: remember when creating 'gi.contracts/group/payment' to set the payment
          //       currency using:
          //       getters.thisPeriodPaymentInfo.initialCurrency || getters.groupMincomeCurrency
          const memo = this.form.memo
          const paymentInfo = {
            toMemberID: payment.toMemberID,
            amount: +pRecord.amount,
            total: payment.amount,
            isLate: payment.isLate,
            // Even if amount is the same, it can be a partial from a previous partial payment
            // TODO: Maybe this can fix the Payments.vue bug when looking for other partials' hash.
            partial: payment.partial || pRecord.amount - payment.amount > 0,
            monthstamp: payment.monthstamp,
            currencyFromTo: ['USD', groupCurrency], // TODO: this!
            exchangeRate: 1,
            txid: '' + Math.random(),
            status: PAYMENT_PENDING,
            paymentType: PAYMENT_TYPE_MANUAL,
            ...(memo ? { memo } : {}) // TODO/BUG with flowTyper validation. Empty string '' fails.
          }

          if (isStatusNotReceived) {
            // If it's re-sending the payment that has been marked as 'not-recieved' by the receiver,
            // only update the details of the existing payment item so that it doesn't lead to duplication bug in the payment UI.
            await sbp('gi.actions/group/paymentUpdate', {
              contractID: this.currentGroupId,
              data: {
                paymentHash: payment.hash,
                updatedProperties: {
                  ...paymentInfo,
                  status: PAYMENT_COMPLETED
                }
              }
            })
          } else {
            const msg = await sbp('gi.actions/group/payment', {
              contractID: this.currentGroupId, data: paymentInfo
            })
            // TODO: hack until /payment supports sending completed payment
            //       (and "uncompleting" a payment)
            await sbp('gi.actions/group/paymentUpdate', {
              contractID: this.currentGroupId,
              data: {
                paymentHash: msg.hash(),
                updatedProperties: {
                  status: PAYMENT_COMPLETED
                }
              }
            })
          }
        } catch (e) {
          hasError = true
          console.error('RecordPayment submit() error:', e)
          this.$refs.formMsg.danger(e)
        }
      }

      if (!hasError) {
        this.donePayment = true
        sbp('okTurtles.events/emit', PAYMENTS_RECORDED, {
          hashes: paymentsToRecord.map(p => p.hash)
        })
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-header {
  background: $background_0;
  padding: 1.5rem 0 1.125rem 2rem;
  position: absolute;
  left: 0;
  right: 0;

  @include tablet {
    text-align: center;
    padding: 2rem 0 1.625rem 0;
  }

  @include desktop {
    max-width: 33rem;
    width: 100%;
    background: transparent;
    text-align: left;
    position: relative;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
  }
}

.c-payment-form {
  width: 100%;

  @include tablet {
    max-width: 33rem;
  }
}

.c-content {
  padding-top: 6.125rem;

  @include tablet {
    padding-top: 7.25rem;
  }

  @include desktop {
    padding-top: 0;
  }

  .c-title {
    margin-bottom: 0.5rem;
    font-size: $size_4;

    @include tablet {
      margin-bottom: 1rem;
    }
  }
}

// Footer
.c-footer {
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @include tablet {
    padding-top: 1.5rem;
  }

  @include desktop {
    padding-top: 1.5rem;
  }
}

// Actions
.c-comment {
  margin-top: 1rem;
}

.c-buttons {
  @include phone {
    flex-direction: column-reverse;

    button:first-child {
      margin-top: 1rem;
      margin-right: 0;
    }

    button {
      width: 100%;
    }
  }
}

// Sucess
.c-payment-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9rem;

  @include tablet {
    padding-top: 10rem;
  }

  @include desktop {
    padding-top: 8rem;
  }

  .c-title {
    margin: 2rem;
  }

  .c-message {
    max-width: 24.5rem;
  }

  button {
    margin-top: 2rem;
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
var RecordPayment_default = __vue_component__;
export {
  RecordPayment_default as default
};
//# sourceMappingURL=RecordPayment-NQKTBVNU-cached.js.map
