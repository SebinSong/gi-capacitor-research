import {
  CopyableInput_default,
  QrCode_default
} from "./chunk-LK3YAPWY-cached.js";
import {
  RecordPaymentsList_default
} from "./chunk-IVKMRDAZ-cached.js";
import "./chunk-NO7PSN3H-cached.js";
import "./chunk-V3SQGGAF-cached.js";
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
import "./chunk-YUM5UY76-cached.js";
import {
  debounce
} from "./chunk-MTWMQLQH-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/SendPaymentsViaLightning.vue
init_vue_esm();
var __vue_script__ = {
  name: "SendPayemntsViaLightning",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    RecordPaymentsList: RecordPaymentsList_default,
    CopyableInput: CopyableInput_default,
    QrCode: QrCode_default
  },
  props: {
    todoItems: {
      type: Array
    }
  },
  data() {
    return {
      ephemeral: {
        displayMemo: false,
        addDonationFee: true
      },
      config: {
        debouncedMemoUpdate: debounce(this.onMemoUpdate, 650)
      },
      form: {
        memo: "",
        paymentsToSend: []
      }
    };
  },
  created() {
    this.form.paymentsToSend = this.todoItems.map((payment, index) => ({
      ...payment,
      index,
      // A link between original payment and this copy
      checked: false
    }));
  },
  computed: {
    dummyQueryString() {
      const checkedToStr = this.form.paymentsToSend.filter((item) => item.checked).map(({ username, amount }) => `to=${username}_amount=${amount}`).join("?");
      const allStr = [
        checkedToStr,
        this.ephemeral.displayMemo && this.form.memo && `memo=${this.form.memo}`,
        this.ephemeral.addDonationFee && checkedToStr && "donation=true"
      ].filter(Boolean).join("?");
      return allStr ? `?${allStr}` : "";
    },
    dummyLinkToCopy() {
      return `https://groupincome.org/dummy-pay-link/f4k3_H45h_t0_5h4r3${this.dummyQueryString}`;
    },
    dummyQRstring() {
      return `https://groupincome.org/dummy-qr${this.dummyQueryString}`;
    }
  },
  methods: {
    updateItem({ index, ...data }) {
      vue_esm_default.set(this.form.paymentsToSend, index, {
        ...this.form.paymentsToSend[index],
        ...data
      });
    },
    onMemoUpdate({ target }) {
      this.form.memo = target.value;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    {
      staticClass: "has-background",
      attrs: {
        fullscreen: true,
        a11yTitle: _vm.L("Send payments via Lightning")
      }
    },
    [
      _c(
        "div",
        { staticClass: "c-header" },
        [
          _c(
            "i18n",
            { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
            [_vm._v("Send payment via Lightning")]
          )
        ],
        1
      ),
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
              "div",
              { staticClass: "c-section-payments-list" },
              [
                _c(
                  "i18n",
                  {
                    staticClass: "is-title-3 c-sub-title",
                    attrs: { tag: "h3" }
                  },
                  [_vm._v("Send payment")]
                ),
                _c("record-payments-list", {
                  attrs: {
                    paymentsList: _vm.form.paymentsToSend,
                    addDonationFee: _vm.ephemeral.addDonationFee,
                    paymentType: "lightning"
                  },
                  on: { update: _vm.updateItem }
                }),
                _c("div", { staticClass: "c-toggles-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "c-toggle-comment" },
                    [
                      _c("div", { staticClass: "c-toggle-flex" }, [
                        _c(
                          "div",
                          { staticClass: "c-toggle-flex-info" },
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
                          { staticClass: "c-toggle-flex-action" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.ephemeral.displayMemo,
                                  expression: "ephemeral.displayMemo"
                                }
                              ],
                              staticClass: "switch",
                              attrs: {
                                type: "checkbox",
                                name: "displayComment"
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.ephemeral.displayMemo
                                ) ? _vm._i(_vm.ephemeral.displayMemo, null) > -1 : _vm.ephemeral.displayMemo
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.ephemeral.displayMemo, $$el = $event.target, $$c = $$el.checked ? true : false;
                                  if (Array.isArray($$a)) {
                                    var $$v = null, $$i = _vm._i($$a, $$v);
                                    if ($$el.checked) {
                                      $$i < 0 && _vm.$set(
                                        _vm.ephemeral,
                                        "displayMemo",
                                        $$a.concat([$$v])
                                      );
                                    } else {
                                      $$i > -1 && _vm.$set(
                                        _vm.ephemeral,
                                        "displayMemo",
                                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                      );
                                    }
                                  } else {
                                    _vm.$set(_vm.ephemeral, "displayMemo", $$c);
                                  }
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
                              staticClass: "textarea c-comment",
                              attrs: { rows: "4" },
                              domProps: { value: _vm.form.memo },
                              on: { input: _vm.config.debouncedMemoUpdate }
                            })
                          ],
                          1
                        ) : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "c-toggle-donation c-toggle-flex" },
                    [
                      _c(
                        "div",
                        { staticClass: "c-toggle-flex-info" },
                        [
                          _c(
                            "i18n",
                            {
                              staticClass: "has-text-bold",
                              attrs: { tag: "h4" }
                            },
                            [_vm._v("Donation fee")]
                          ),
                          _c(
                            "i18n",
                            {
                              staticClass: "has-text-small has-text-1",
                              attrs: { tag: "p" }
                            },
                            [
                              _vm._v(
                                "Donate 1% to support the development of Group Income"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: "c-toggle-flex-action" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.ephemeral.addDonationFee,
                                expression: "ephemeral.addDonationFee"
                              }
                            ],
                            staticClass: "switch",
                            attrs: { type: "checkbox", name: "addDonationFee" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.ephemeral.addDonationFee
                              ) ? _vm._i(_vm.ephemeral.addDonationFee, null) > -1 : _vm.ephemeral.addDonationFee
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.ephemeral.addDonationFee, $$el = $event.target, $$c = $$el.checked ? true : false;
                                if (Array.isArray($$a)) {
                                  var $$v = null, $$i = _vm._i($$a, $$v);
                                  if ($$el.checked) {
                                    $$i < 0 && _vm.$set(
                                      _vm.ephemeral,
                                      "addDonationFee",
                                      $$a.concat([$$v])
                                    );
                                  } else {
                                    $$i > -1 && _vm.$set(
                                      _vm.ephemeral,
                                      "addDonationFee",
                                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                    );
                                  }
                                } else {
                                  _vm.$set(_vm.ephemeral, "addDonationFee", $$c);
                                }
                              }
                            }
                          }),
                          _c(
                            "i18n",
                            {
                              staticClass: "sr-only",
                              attrs: { tag: "label", for: "addDonationFee" }
                            },
                            [_vm._v("Toggle donation fee")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "c-section-qr-code" },
              [
                _c(
                  "i18n",
                  {
                    staticClass: "has-text-bold c-qr-code-header",
                    attrs: { tag: "h4" }
                  },
                  [_vm._v("QR code payment")]
                ),
                _c("qr-code", {
                  staticClass: "c-qr-code-img",
                  attrs: { sideLength: 172, value: _vm.dummyQRstring }
                }),
                _c(
                  "i18n",
                  {
                    staticClass: "c-qr-code-instruction has-text-1",
                    attrs: { tag: "p" }
                  },
                  [
                    _vm._v(
                      "To complete your payment,\nplease use your payment app to scan the QR code with your phone or copy the payment link."
                    )
                  ]
                ),
                _c("copyable-input", {
                  staticClass: "c-copy-link",
                  attrs: {
                    uneditable: true,
                    value: _vm.dummyLinkToCopy,
                    tooltipDirection: "top"
                  }
                })
              ],
              1
            )
          ]
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-c1b87e58_0", { source: ".c-header[data-v-c1b87e58] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--background_0);\n  padding: 1.5rem 0 1.5rem 2rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-c1b87e58] {\n    text-align: center;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-header[data-v-c1b87e58] {\n    position: relative;\n    background: transparent;\n    max-width: 50.25rem;\n    text-align: left;\n}\n}\n.c-card[data-v-c1b87e58] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.375rem;\n}\n@media screen and (min-width: 1200px) {\n.c-card[data-v-c1b87e58] {\n    padding: 2.5rem 2rem 2.5rem 0;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2.25rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-section-payments-list[data-v-c1b87e58] {\n    flex-grow: 1;\n}\n}\n.c-section-qr-code[data-v-c1b87e58] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 19.375rem;\n  margin: 0 auto;\n  min-height: 12.875rem;\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 3px;\n}\n@media screen and (min-width: 769px), print {\n.c-section-qr-code[data-v-c1b87e58] {\n    border-color: var(--general_0);\n    align-items: stretch;\n    max-width: unset;\n    padding: 1rem 13rem 1rem 1rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-section-qr-code[data-v-c1b87e58] {\n    width: 13.75rem;\n    padding: 2.5rem 1.5rem 1.5rem;\n}\n}\n.c-qr-code-header[data-v-c1b87e58] {\n  margin-bottom: 0.75rem;\n}\n.c-qr-code-img[data-v-c1b87e58] {\n  margin-bottom: 0.75rem;\n}\n@media screen and (min-width: 769px) and (max-width: 1199px) {\n.c-qr-code-img[data-v-c1b87e58] {\n    position: absolute !important;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 1;\n    margin-bottom: 0;\n}\n}\n.c-qr-code-instruction[data-v-c1b87e58] {\n  font-size: 0.875rem;\n  margin-bottom: 1.375rem;\n}\n@media screen and (min-width: 1200px) {\n.c-qr-code-instruction[data-v-c1b87e58] {\n    margin-bottom: 3.25rem;\n}\n}\n.c-content[data-v-c1b87e58] {\n  position: relative;\n  display: block;\n  padding-top: 7.25rem;\n  width: 100%;\n  max-width: 33.375rem;\n}\n@media screen and (min-width: 1200px) {\n.c-content[data-v-c1b87e58] {\n    padding-top: 0;\n    max-width: 50.25rem;\n}\n}\n.c-sub-title[data-v-c1b87e58] {\n  padding-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-sub-title[data-v-c1b87e58] {\n    padding-left: 2.5rem;\n}\n}\n.c-toggle-comment[data-v-c1b87e58],\n.c-toggle-donation[data-v-c1b87e58] {\n  padding: 0.75rem 0 0.75rem 0.5rem;\n  box-shadow: inset 0 -2px 0 var(--general_2);\n}\n@media screen and (min-width: 1200px) {\n.c-toggle-comment[data-v-c1b87e58],\n  .c-toggle-donation[data-v-c1b87e58] {\n    padding-left: 2.5rem;\n    box-shadow: none;\n}\n}\n.c-toggle-comment[data-v-c1b87e58] {\n  box-shadow: inset 0 -2px 0 var(--general_2);\n}\n.c-toggle-flex[data-v-c1b87e58] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-comment[data-v-c1b87e58] {\n  margin-top: 1rem;\n}\n.c-copy-link[data-v-c1b87e58] {\n  align-self: stretch;\n}\n@media screen and (max-width: 768px) {\n.c-copy-link[data-v-c1b87e58] {\n    margin-bottom: 0.5rem;\n}\n}\n\n/*# sourceMappingURL=SendPaymentsViaLightning.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/SendPaymentsViaLightning.vue", "SendPaymentsViaLightning.vue"], "names": [], "mappings": "AA+KA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,+BAAA;EACA,6BAAA;EACA,WAAA;AC9KA;AACA;ADuKA;IASA,kBAAA;AC7KE;AACF;AACA;ADkKA;IAaA,kBAAA;IACA,uBAAA;IACA,mBAAA;IACA,gBAAA;AC5KE;AACF;AD+KA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AC5KA;AACA;ADuKA;IAOA,6BAAA;IACA,mBAAA;IACA,uBAAA;IACA,YAAA;AC3KE;AACF;AAEA;AD4KA;IAEA,YAAA;AC3KE;AACF;AD8KA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;EACA,cAAA;EACA,qBAAA;EACA,kCAAA;EACA,kBAAA;AC3KA;AACA;ADgKA;IAaA,8BAAA;IACA,oBAAA;IACA,gBAAA;IACA,6BAAA;AC1KE;AACF;AACA;ADwJA;IAoBA,eAAA;IACA,6BAAA;ACzKE;AACF;AD4KA;EACA,sBAAA;ACzKA;AD4KA;EACA,sBAAA;ACzKA;AD8FA;AA0EA;IAIA,6BAAA;IACA,WAAA;IACA,QAAA;IACA,2BAAA;IACA,UAAA;IACA,gBAAA;ACxKE;AACF;AD2KA;EACA,mBAAA;EACA,uBAAA;ACxKA;AACA;ADqKA;IAKA,sBAAA;ACvKE;AACF;AD0KA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,WAAA;EACA,oBAAA;ACvKA;AACA;ADiKA;IAQA,cAAA;IACA,mBAAA;ACtKE;AACF;ADyKA;EACA,oBAAA;ACtKA;AACA;ADoKA;IAIA,oBAAA;ACrKE;AACF;ADwKA;;EAEA,iCAAA;EA3HA,2CAAA;ACzCA;AACA;ADiKA;;IAMA,oBAAA;IACA,gBAAA;ACnKE;AACF;ADsKA;EApIA,2CAAA;AC9BA;ADsKA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACnKA;ADsKA;EACA,gBAAA;ACnKA;ADsKA;EACA,mBAAA;ACnKA;AACA;ADiKA;IAIA,qBAAA;AClKE;AACF;;AAEA,uDAAuD", "file": "SendPaymentsViaLightning.vue", "sourcesContent": ["<template lang=\"pug\">\nmodal-base-template(\n  :fullscreen='true'\n  class='has-background'\n  :a11yTitle='L(\"Send payments via Lightning\")'\n)\n  .c-header\n    i18n.is-title-2.c-title(tag='h2') Send payment via Lightning\n\n  .c-content\n    form.card.c-card(\n      @submit.prevent=''\n      novalidate='true'\n    )\n      .c-section-payments-list\n        i18n.is-title-3.c-sub-title(tag='h3') Send payment\n\n        record-payments-list(\n          :paymentsList='form.paymentsToSend'\n          :addDonationFee='ephemeral.addDonationFee'\n          paymentType='lightning'\n          @update='updateItem'\n        )\n\n        .c-toggles-wrapper\n          .c-toggle-comment\n            .c-toggle-flex\n              .c-toggle-flex-info\n                i18n.has-text-bold(\n                  tag='h4'\n                  :args='{ span_: `<span class=\"has-text-small has-text-1 has-text-normal\">`, _span: \"</span>\" }'\n                ) Add a note {span_}(optional){_span}\n\n                i18n.has-text-small.has-text-1(tag='p') Leave a message to the group members selected above.\n\n              .c-toggle-flex-action\n                input.switch(\n                  type='checkbox'\n                  name='displayComment'\n                  v-model='ephemeral.displayMemo'\n                )\n                i18n.sr-only(tag='label' for='displayComment') Toggle comment box\n\n            transition(name='slidedown')\n              label.field(v-if='ephemeral.displayMemo')\n                i18n.sr-only.label Leave a message\n                textarea.textarea.c-comment(\n                  rows='4'\n                  @input='config.debouncedMemoUpdate'\n                  :value='form.memo'\n                )\n\n          .c-toggle-donation.c-toggle-flex\n            .c-toggle-flex-info\n              i18n.has-text-bold(tag='h4') Donation fee\n              i18n.has-text-small.has-text-1(tag='p') Donate 1% to support the development of Group Income\n\n            .c-toggle-flex-action\n              input.switch(\n                type='checkbox'\n                name='addDonationFee'\n                v-model='ephemeral.addDonationFee'\n              )\n              i18n.sr-only(tag='label' for='addDonationFee') Toggle donation fee\n\n      .c-section-qr-code\n        i18n.has-text-bold.c-qr-code-header(tag='h4') QR code payment\n\n        qr-code.c-qr-code-img(\n          :sideLength='172'\n          :value='dummyQRstring'\n        )\n\n        i18n.c-qr-code-instruction.has-text-1(tag='p')\n          | To complete your payment,\n          | please use your payment app to scan the QR code with your phone or copy the payment link.\n\n        copyable-input.c-copy-link(\n          :uneditable='true'\n          :value='dummyLinkToCopy'\n          tooltipDirection='top'\n        )\n</template>\n\n<script>\nimport Vue from '../../../../node_modules/vue/dist/vue.esm.js'\nimport ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'\nimport RecordPaymentsList from './RecordPaymentsList.vue'\nimport QrCode from '../../../../frontend/views/components/QrCode.vue'\nimport CopyableInput from '../../../../frontend/views/components/CopyableInput.vue'\nimport { debounce } from 'turtledash'\n\nexport default ({\n  name: 'SendPayemntsViaLightning',\n  components: {\n    ModalBaseTemplate,\n    RecordPaymentsList,\n    CopyableInput,\n    QrCode\n  },\n  props: {\n    todoItems: {\n      type: Array\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        displayMemo: false,\n        addDonationFee: true\n      },\n      config: {\n        debouncedMemoUpdate: debounce(this.onMemoUpdate, 650)\n      },\n      form: {\n        memo: '',\n        paymentsToSend: []\n      }\n    }\n  },\n  created () {\n    this.form.paymentsToSend = this.todoItems.map((payment, index) => ({\n      ...payment,\n      index, // A link between original payment and this copy\n      checked: false\n    }))\n  },\n  computed: {\n    dummyQueryString () {\n      const checkedToStr = this.form.paymentsToSend.filter(item => item.checked)\n        .map(({ username, amount }) => `to=${username}_amount=${amount}`)\n        .join('?')\n\n      const allStr = [\n        checkedToStr,\n        this.ephemeral.displayMemo && this.form.memo && `memo=${this.form.memo}`,\n        this.ephemeral.addDonationFee && checkedToStr && 'donation=true'\n      ].filter(Boolean).join('?')\n\n      return allStr ? `?${allStr}` : ''\n    },\n    dummyLinkToCopy () {\n      return `https://groupincome.org/dummy-pay-link/f4k3_H45h_t0_5h4r3${this.dummyQueryString}`\n    },\n    dummyQRstring () {\n      return `https://groupincome.org/dummy-qr${this.dummyQueryString}`\n    }\n  },\n  methods: {\n    updateItem ({ index, ...data }) {\n      Vue.set(this.form.paymentsToSend, index, {\n        ...this.form.paymentsToSend[index],\n        ...data\n      })\n    },\n    onMemoUpdate ({ target }) {\n      this.form.memo = target.value\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n@mixin divider-bottom {\n  box-shadow: inset 0 -2px 0 $general_2;\n}\n\n@mixin only-tablet {\n  @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {\n    @content;\n  }\n}\n\n.c-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: $background_0;\n  padding: 1.5rem 0 1.5rem 2rem;\n  width: 100%;\n\n  @include tablet {\n    text-align: center;\n  }\n\n  @include desktop {\n    position: relative;\n    background: transparent;\n    max-width: 50.25rem;\n    text-align: left;\n  }\n}\n\n.c-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.375rem;\n\n  @include desktop {\n    padding: 2.5rem 2rem 2.5rem 0;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2.25rem;\n  }\n}\n\n.c-section-payments-list {\n  @include tablet {\n    flex-grow: 1;\n  }\n}\n\n.c-section-qr-code {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 19.375rem;\n  margin: 0 auto;\n  min-height: 12.875rem;\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 3px;\n\n  @include tablet {\n    border-color: $general_0;\n    align-items: stretch;\n    max-width: unset;\n    padding: 1rem 13rem 1rem 1rem;\n  }\n\n  @include desktop {\n    width: 13.75rem;\n    padding: 2.5rem 1.5rem 1.5rem;\n  }\n}\n\n.c-qr-code-header {\n  margin-bottom: 0.75rem;\n}\n\n.c-qr-code-img {\n  margin-bottom: 0.75rem;\n\n  @include only-tablet {\n    position: absolute !important;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 1;\n    margin-bottom: 0;\n  }\n}\n\n.c-qr-code-instruction {\n  font-size: $size_4;\n  margin-bottom: 1.375rem;\n\n  @include desktop {\n    margin-bottom: 3.25rem;\n  }\n}\n\n.c-content {\n  position: relative;\n  display: block;\n  padding-top: 7.25rem;\n  width: 100%;\n  max-width: 33.375rem;\n\n  @include desktop {\n    padding-top: 0;\n    max-width: 50.25rem;\n  }\n}\n\n.c-sub-title {\n  padding-left: 0.5rem;\n\n  @include desktop {\n    padding-left: 2.5rem;\n  }\n}\n\n.c-toggle-comment,\n.c-toggle-donation {\n  padding: 0.75rem 0 0.75rem 0.5rem;\n  @include divider-bottom;\n\n  @include desktop {\n    padding-left: 2.5rem;\n    box-shadow: none;\n  }\n}\n\n.c-toggle-comment {\n  @include divider-bottom;\n}\n\n.c-toggle-flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-comment {\n  margin-top: 1rem;\n}\n\n.c-copy-link {\n  align-self: stretch;\n\n  @include phone {\n    margin-bottom: 0.5rem;\n  }\n}\n</style>\n", ".c-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--background_0);\n  padding: 1.5rem 0 1.5rem 2rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    text-align: center;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-header {\n    position: relative;\n    background: transparent;\n    max-width: 50.25rem;\n    text-align: left;\n  }\n}\n\n.c-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.375rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-card {\n    padding: 2.5rem 2rem 2.5rem 0;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .c-section-payments-list {\n    flex-grow: 1;\n  }\n}\n\n.c-section-qr-code {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 19.375rem;\n  margin: 0 auto;\n  min-height: 12.875rem;\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 3px;\n}\n@media screen and (min-width: 769px), print {\n  .c-section-qr-code {\n    border-color: var(--general_0);\n    align-items: stretch;\n    max-width: unset;\n    padding: 1rem 13rem 1rem 1rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-section-qr-code {\n    width: 13.75rem;\n    padding: 2.5rem 1.5rem 1.5rem;\n  }\n}\n\n.c-qr-code-header {\n  margin-bottom: 0.75rem;\n}\n\n.c-qr-code-img {\n  margin-bottom: 0.75rem;\n}\n@media screen and (min-width: 769px) and (max-width: 1199px) {\n  .c-qr-code-img {\n    position: absolute !important;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 1;\n    margin-bottom: 0;\n  }\n}\n\n.c-qr-code-instruction {\n  font-size: 0.875rem;\n  margin-bottom: 1.375rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-qr-code-instruction {\n    margin-bottom: 3.25rem;\n  }\n}\n\n.c-content {\n  position: relative;\n  display: block;\n  padding-top: 7.25rem;\n  width: 100%;\n  max-width: 33.375rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-content {\n    padding-top: 0;\n    max-width: 50.25rem;\n  }\n}\n\n.c-sub-title {\n  padding-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-sub-title {\n    padding-left: 2.5rem;\n  }\n}\n\n.c-toggle-comment,\n.c-toggle-donation {\n  padding: 0.75rem 0 0.75rem 0.5rem;\n  box-shadow: inset 0 -2px 0 var(--general_2);\n}\n@media screen and (min-width: 1200px) {\n  .c-toggle-comment,\n  .c-toggle-donation {\n    padding-left: 2.5rem;\n    box-shadow: none;\n  }\n}\n\n.c-toggle-comment {\n  box-shadow: inset 0 -2px 0 var(--general_2);\n}\n\n.c-toggle-flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-comment {\n  margin-top: 1rem;\n}\n\n.c-copy-link {\n  align-self: stretch;\n}\n@media screen and (max-width: 768px) {\n  .c-copy-link {\n    margin-bottom: 0.5rem;\n  }\n}\n\n/*# sourceMappingURL=SendPaymentsViaLightning.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-c1b87e58";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang=\"pug\">\nmodal-base-template(\n  :fullscreen='true'\n  class='has-background'\n  :a11yTitle='L(\"Send payments via Lightning\")'\n)\n  .c-header\n    i18n.is-title-2.c-title(tag='h2') Send payment via Lightning\n\n  .c-content\n    form.card.c-card(\n      @submit.prevent=''\n      novalidate='true'\n    )\n      .c-section-payments-list\n        i18n.is-title-3.c-sub-title(tag='h3') Send payment\n\n        record-payments-list(\n          :paymentsList='form.paymentsToSend'\n          :addDonationFee='ephemeral.addDonationFee'\n          paymentType='lightning'\n          @update='updateItem'\n        )\n\n        .c-toggles-wrapper\n          .c-toggle-comment\n            .c-toggle-flex\n              .c-toggle-flex-info\n                i18n.has-text-bold(\n                  tag='h4'\n                  :args='{ span_: `<span class=\"has-text-small has-text-1 has-text-normal\">`, _span: \"</span>\" }'\n                ) Add a note {span_}(optional){_span}\n\n                i18n.has-text-small.has-text-1(tag='p') Leave a message to the group members selected above.\n\n              .c-toggle-flex-action\n                input.switch(\n                  type='checkbox'\n                  name='displayComment'\n                  v-model='ephemeral.displayMemo'\n                )\n                i18n.sr-only(tag='label' for='displayComment') Toggle comment box\n\n            transition(name='slidedown')\n              label.field(v-if='ephemeral.displayMemo')\n                i18n.sr-only.label Leave a message\n                textarea.textarea.c-comment(\n                  rows='4'\n                  @input='config.debouncedMemoUpdate'\n                  :value='form.memo'\n                )\n\n          .c-toggle-donation.c-toggle-flex\n            .c-toggle-flex-info\n              i18n.has-text-bold(tag='h4') Donation fee\n              i18n.has-text-small.has-text-1(tag='p') Donate 1% to support the development of Group Income\n\n            .c-toggle-flex-action\n              input.switch(\n                type='checkbox'\n                name='addDonationFee'\n                v-model='ephemeral.addDonationFee'\n              )\n              i18n.sr-only(tag='label' for='addDonationFee') Toggle donation fee\n\n      .c-section-qr-code\n        i18n.has-text-bold.c-qr-code-header(tag='h4') QR code payment\n\n        qr-code.c-qr-code-img(\n          :sideLength='172'\n          :value='dummyQRstring'\n        )\n\n        i18n.c-qr-code-instruction.has-text-1(tag='p')\n          | To complete your payment,\n          | please use your payment app to scan the QR code with your phone or copy the payment link.\n\n        copyable-input.c-copy-link(\n          :uneditable='true'\n          :value='dummyLinkToCopy'\n          tooltipDirection='top'\n        )\n</template>\n\n<script>\nimport Vue from '../../../../node_modules/vue/dist/vue.esm.js'\nimport ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'\nimport RecordPaymentsList from './RecordPaymentsList.vue'\nimport QrCode from '../../../../frontend/views/components/QrCode.vue'\nimport CopyableInput from '../../../../frontend/views/components/CopyableInput.vue'\nimport { debounce } from 'turtledash'\n\nexport default ({\n  name: 'SendPayemntsViaLightning',\n  components: {\n    ModalBaseTemplate,\n    RecordPaymentsList,\n    CopyableInput,\n    QrCode\n  },\n  props: {\n    todoItems: {\n      type: Array\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        displayMemo: false,\n        addDonationFee: true\n      },\n      config: {\n        debouncedMemoUpdate: debounce(this.onMemoUpdate, 650)\n      },\n      form: {\n        memo: '',\n        paymentsToSend: []\n      }\n    }\n  },\n  created () {\n    this.form.paymentsToSend = this.todoItems.map((payment, index) => ({\n      ...payment,\n      index, // A link between original payment and this copy\n      checked: false\n    }))\n  },\n  computed: {\n    dummyQueryString () {\n      const checkedToStr = this.form.paymentsToSend.filter(item => item.checked)\n        .map(({ username, amount }) => `to=${username}_amount=${amount}`)\n        .join('?')\n\n      const allStr = [\n        checkedToStr,\n        this.ephemeral.displayMemo && this.form.memo && `memo=${this.form.memo}`,\n        this.ephemeral.addDonationFee && checkedToStr && 'donation=true'\n      ].filter(Boolean).join('?')\n\n      return allStr ? `?${allStr}` : ''\n    },\n    dummyLinkToCopy () {\n      return `https://groupincome.org/dummy-pay-link/f4k3_H45h_t0_5h4r3${this.dummyQueryString}`\n    },\n    dummyQRstring () {\n      return `https://groupincome.org/dummy-qr${this.dummyQueryString}`\n    }\n  },\n  methods: {\n    updateItem ({ index, ...data }) {\n      Vue.set(this.form.paymentsToSend, index, {\n        ...this.form.paymentsToSend[index],\n        ...data\n      })\n    },\n    onMemoUpdate ({ target }) {\n      this.form.memo = target.value\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n@mixin divider-bottom {\n  box-shadow: inset 0 -2px 0 $general_2;\n}\n\n@mixin only-tablet {\n  @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {\n    @content;\n  }\n}\n\n.c-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: $background_0;\n  padding: 1.5rem 0 1.5rem 2rem;\n  width: 100%;\n\n  @include tablet {\n    text-align: center;\n  }\n\n  @include desktop {\n    position: relative;\n    background: transparent;\n    max-width: 50.25rem;\n    text-align: left;\n  }\n}\n\n.c-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.375rem;\n\n  @include desktop {\n    padding: 2.5rem 2rem 2.5rem 0;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2.25rem;\n  }\n}\n\n.c-section-payments-list {\n  @include tablet {\n    flex-grow: 1;\n  }\n}\n\n.c-section-qr-code {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 19.375rem;\n  margin: 0 auto;\n  min-height: 12.875rem;\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 3px;\n\n  @include tablet {\n    border-color: $general_0;\n    align-items: stretch;\n    max-width: unset;\n    padding: 1rem 13rem 1rem 1rem;\n  }\n\n  @include desktop {\n    width: 13.75rem;\n    padding: 2.5rem 1.5rem 1.5rem;\n  }\n}\n\n.c-qr-code-header {\n  margin-bottom: 0.75rem;\n}\n\n.c-qr-code-img {\n  margin-bottom: 0.75rem;\n\n  @include only-tablet {\n    position: absolute !important;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 1;\n    margin-bottom: 0;\n  }\n}\n\n.c-qr-code-instruction {\n  font-size: $size_4;\n  margin-bottom: 1.375rem;\n\n  @include desktop {\n    margin-bottom: 3.25rem;\n  }\n}\n\n.c-content {\n  position: relative;\n  display: block;\n  padding-top: 7.25rem;\n  width: 100%;\n  max-width: 33.375rem;\n\n  @include desktop {\n    padding-top: 0;\n    max-width: 50.25rem;\n  }\n}\n\n.c-sub-title {\n  padding-left: 0.5rem;\n\n  @include desktop {\n    padding-left: 2.5rem;\n  }\n}\n\n.c-toggle-comment,\n.c-toggle-donation {\n  padding: 0.75rem 0 0.75rem 0.5rem;\n  @include divider-bottom;\n\n  @include desktop {\n    padding-left: 2.5rem;\n    box-shadow: none;\n  }\n}\n\n.c-toggle-comment {\n  @include divider-bottom;\n}\n\n.c-toggle-flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-comment {\n  margin-top: 1rem;\n}\n\n.c-copy-link {\n  align-self: stretch;\n\n  @include phone {\n    margin-bottom: 0.5rem;\n  }\n}\n</style>\n";
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
var SendPaymentsViaLightning_default = __vue_component__;
export {
  SendPaymentsViaLightning_default as default
};
//# sourceMappingURL=SendPaymentsViaLightning-TLSLZSHC-cached.js.map
