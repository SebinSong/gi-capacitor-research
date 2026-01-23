import {
  PaymentRow_default
} from "./chunk-NO7PSN3H-cached.js";
import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  currencies_default
} from "./chunk-AS6YVRB6-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/containers/payments/PaymentRowRecord.vue
var __vue_script__ = {
  name: "PaymentRowRecord",
  components: {
    PaymentRow: PaymentRow_default
  },
  props: {
    payment: {
      type: Object,
      // { index, checked, ...paymentData }
      required: true
    }
  },
  data() {
    const gCurrency = currencies_default[this.$store.getters.groupSettings.mincomeCurrency];
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: gCurrency.displayWithoutCurrency(this.payment.amount)
      }
    };
  },
  watch: {
    "form.amount"(amount) {
      this.$emit("update", { index: this.payment.index, checked: true, amount });
    },
    "form.checked"(checked) {
      this.$emit("update", { index: this.payment.index, checked });
    },
    "payment.checked"(checked) {
      this.form.checked = checked;
    }
  },
  computed: {
    ...mapGetters([
      "groupSettings"
    ]),
    currencies() {
      return currencies_default[this.groupSettings.mincomeCurrency];
    }
  },
  methods: {
    humanDate,
    reset() {
      this.form.amount = this.config.initialAmount;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "payment-row",
    { attrs: { payment: _vm.payment } },
    [
      _c("template", { slot: "cellPrefix" }, [
        _c(
          "label",
          { staticClass: "checkbox c-check", attrs: { "data-test": "check" } },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.checked,
                  expression: "form.checked"
                }
              ],
              staticClass: "input",
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.form.checked) ? _vm._i(_vm.form.checked, null) > -1 : _vm.form.checked
              },
              on: {
                change: function($event) {
                  var $$a = _vm.form.checked, $$el = $event.target, $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = null, $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(_vm.form, "checked", $$a.concat([$$v]));
                    } else {
                      $$i > -1 && _vm.$set(
                        _vm.form,
                        "checked",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      );
                    }
                  } else {
                    _vm.$set(_vm.form, "checked", $$c);
                  }
                }
              }
            }),
            _c(
              "span",
              [
                _c("i18n", { staticClass: "sr-only" }, [
                  _vm._v("Mark as sent")
                ])
              ],
              1
            )
          ]
        )
      ]),
      _c(
        "template",
        { slot: "cellActions" },
        [
          _c(
            "div",
            {
              staticClass: "cpr-date",
              class: _vm.payment.isLate ? "pull is-danger" : "has-text-1"
            },
            [_vm._v(_vm._s(_vm.humanDate(_vm.payment.date)))]
          ),
          _vm.payment.amount !== _vm.config.initialAmount ? _c(
            "i18n",
            {
              staticClass: "is-unstyled is-link-inherit link c-reset",
              attrs: { tag: "button", type: "button" },
              on: { click: _vm.reset }
            },
            [_vm._v("Reset")]
          ) : _vm._e()
        ],
        1
      ),
      _c("template", { slot: "cellSuffix" }, [
        _c("label", { staticClass: "field" }, [
          _c("div", { staticClass: "inputgroup" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.amount,
                  expression: "form.amount"
                }
              ],
              staticClass: "input",
              attrs: {
                "data-test": "amount",
                inputmode: "decimal",
                pattern: "[0-9]*"
              },
              domProps: { value: _vm.form.amount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.$set(_vm.form, "amount", $event.target.value);
                }
              }
            }),
            _c("div", { staticClass: "suffix hide-phone" }, [
              _vm._v(_vm._s(_vm.currencies.symbolWithCode))
            ]),
            _c("div", { staticClass: "suffix hide-tablet" }, [
              _vm._v(_vm._s(_vm.currencies.symbol))
            ])
          ])
        ])
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-15681969_0", { source: ".c-check[data-v-15681969] {\n  margin-right: 0.5rem;\n}\n.c-reset[data-v-15681969] {\n  margin-left: 1rem;\n}\n@media screen and (max-width: 768px) {\n.inputgroup .input[data-v-15681969] {\n    padding-right: 2rem;\n}\n}\n\n/*# sourceMappingURL=PaymentRowRecord.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentRowRecord.vue", "PaymentRowRecord.vue"], "names": [], "mappings": "AAsFA;EACA,oBAAA;ACrFA;ADwFA;EACA,iBAAA;ACrFA;AAEA;ADsFA;IAEA,mBAAA;ACrFE;AACF;;AAEA,+CAA+C", "file": "PaymentRowRecord.vue", "sourcesContent": [`<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-test='check')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Mark as sent

    template(slot='cellActions')
      .cpr-date(:class='payment.isLate ? "pull is-danger" : "has-text-1"') {{ humanDate(payment.date) }}
      i18n.is-unstyled.is-link-inherit.link.c-reset(
        tag='button'
        type='button'
        v-if='payment.amount !== config.initialAmount'
        @click='reset'
      ) Reset

    template(slot='cellSuffix')
      label.field
        .inputgroup
          input.input(data-test='amount' inputmode='decimal' pattern='[0-9]*' v-model='form.amount')
          .suffix.hide-phone {{currencies.symbolWithCode}}
          .suffix.hide-tablet {{currencies.symbol}}
</template>

<script>
import { mapGetters } from 'vuex'
import currencies from '../../../../frontend/model/contracts/shared/currencies.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import PaymentRow from './payment-row/PaymentRow.vue'

export default ({
  name: 'PaymentRowRecord',
  components: {
    PaymentRow
  },
  props: {
    payment: {
      type: Object, // { index, checked, ...paymentData }
      required: true
    }
  },
  data () {
    const gCurrency = currencies[this.$store.getters.groupSettings.mincomeCurrency]
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: gCurrency.displayWithoutCurrency(this.payment.amount)
      }
    }
  },
  watch: {
    'form.amount' (amount) {
      this.$emit('update', { index: this.payment.index, checked: true, amount })
    },
    'form.checked' (checked) {
      this.$emit('update', { index: this.payment.index, checked })
    },
    'payment.checked' (checked) {
      this.form.checked = checked
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings'
    ]),
    currencies () {
      return currencies[this.groupSettings.mincomeCurrency]
    }
  },
  methods: {
    humanDate,
    reset () {
      this.form.amount = this.config.initialAmount
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-check {
  margin-right: 0.5rem;
}

.c-reset {
  margin-left: 1rem;
}

.inputgroup .input {
  @include phone {
    padding-right: 2rem;
  }
}
</style>
`, ".c-check {\n  margin-right: 0.5rem;\n}\n\n.c-reset {\n  margin-left: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .inputgroup .input {\n    padding-right: 2rem;\n  }\n}\n\n/*# sourceMappingURL=PaymentRowRecord.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-15681969";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-test='check')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Mark as sent

    template(slot='cellActions')
      .cpr-date(:class='payment.isLate ? "pull is-danger" : "has-text-1"') {{ humanDate(payment.date) }}
      i18n.is-unstyled.is-link-inherit.link.c-reset(
        tag='button'
        type='button'
        v-if='payment.amount !== config.initialAmount'
        @click='reset'
      ) Reset

    template(slot='cellSuffix')
      label.field
        .inputgroup
          input.input(data-test='amount' inputmode='decimal' pattern='[0-9]*' v-model='form.amount')
          .suffix.hide-phone {{currencies.symbolWithCode}}
          .suffix.hide-tablet {{currencies.symbol}}
</template>

<script>
import { mapGetters } from 'vuex'
import currencies from '../../../../frontend/model/contracts/shared/currencies.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import PaymentRow from './payment-row/PaymentRow.vue'

export default ({
  name: 'PaymentRowRecord',
  components: {
    PaymentRow
  },
  props: {
    payment: {
      type: Object, // { index, checked, ...paymentData }
      required: true
    }
  },
  data () {
    const gCurrency = currencies[this.$store.getters.groupSettings.mincomeCurrency]
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: gCurrency.displayWithoutCurrency(this.payment.amount)
      }
    }
  },
  watch: {
    'form.amount' (amount) {
      this.$emit('update', { index: this.payment.index, checked: true, amount })
    },
    'form.checked' (checked) {
      this.$emit('update', { index: this.payment.index, checked })
    },
    'payment.checked' (checked) {
      this.form.checked = checked
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings'
    ]),
    currencies () {
      return currencies[this.groupSettings.mincomeCurrency]
    }
  },
  methods: {
    humanDate,
    reset () {
      this.form.amount = this.config.initialAmount
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-check {
  margin-right: 0.5rem;
}

.c-reset {
  margin-left: 1rem;
}

.inputgroup .input {
  @include phone {
    padding-right: 2rem;
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
var PaymentRowRecord_default = __vue_component__;

// frontend/views/containers/payments/PaymentRowSendLightning.vue
var __vue_script__2 = {
  name: "PaymentRowSendLightning",
  components: {
    PaymentRow: PaymentRow_default,
    AvatarUser: AvatarUser_default
  },
  props: {
    payment: {
      type: Object,
      // { index, checked, ...paymentsData }
      required: true
    }
  },
  data() {
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: this.payment.amount
      }
    };
  },
  watch: {
    "form.amount"(amount) {
      this.$emit("update", {
        index: this.payment.index,
        checked: true,
        amount
      });
    },
    "form.checked"(checked) {
      this.$emit("update", {
        index: this.payment.index,
        checked
      });
    },
    "payment.checked"(checked) {
      this.form.checked = checked;
    }
  },
  computed: {
    ...mapGetters([
      "groupSettings",
      "groupCurrency"
    ])
  },
  methods: {
    reset() {
      this.form.amount = this.config.initialAmount;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "payment-row",
    { attrs: { payment: _vm.payment } },
    [
      _c("template", { slot: "cellPrefix" }, [
        _c(
          "label",
          { staticClass: "checkbox c-check", attrs: { "data-set": "check" } },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.checked,
                  expression: "form.checked"
                }
              ],
              staticClass: "input",
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.form.checked) ? _vm._i(_vm.form.checked, null) > -1 : _vm.form.checked
              },
              on: {
                change: function($event) {
                  var $$a = _vm.form.checked, $$el = $event.target, $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = null, $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(_vm.form, "checked", $$a.concat([$$v]));
                    } else {
                      $$i > -1 && _vm.$set(
                        _vm.form,
                        "checked",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      );
                    }
                  } else {
                    _vm.$set(_vm.form, "checked", $$c);
                  }
                }
              }
            }),
            _c(
              "span",
              [
                _c("i18n", { staticClass: "sr-only" }, [
                  _vm._v("Mark as an item to pay")
                ])
              ],
              1
            )
          ]
        )
      ]),
      _c("template", { slot: "cellUser" }, [
        _c(
          "div",
          { staticClass: "c-user-wrapper" },
          [
            _c(
              "div",
              { staticClass: "c-user-avatar-name" },
              [
                _c("avatar-user", {
                  staticClass: "c-avatar",
                  attrs: { contractID: _vm.payment.toMemberID, size: "xs" }
                }),
                _c("strong", { staticClass: "c-name" }, [
                  _vm._v(_vm._s(_vm.payment.displayName))
                ])
              ],
              1
            ),
            _c(
              "i18n",
              {
                staticClass: "pill is-neutral hide-tablet",
                attrs: { tag: "div" }
              },
              [_vm._v("Lightning")]
            )
          ],
          1
        )
      ]),
      _c(
        "template",
        { slot: "cellActions" },
        [
          _c("i18n", { staticClass: "pill is-neutral hide-phone" }, [
            _vm._v("Lightning")
          ]),
          _vm.payment.amount !== _vm.config.initialAmount ? _c(
            "i18n",
            {
              staticClass: "is-unstyled link is-link-inherit c-reset",
              attrs: { tag: "button", type: "button" },
              on: { click: _vm.reset }
            },
            [_vm._v("Reset")]
          ) : _vm._e()
        ],
        1
      ),
      _c("template", { slot: "cellSuffix" }, [
        _c("label", { staticClass: "field" }, [
          _c("div", { staticClass: "inputgroup" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.amount,
                  expression: "form.amount"
                }
              ],
              staticClass: "input",
              attrs: {
                "data-test": "amount",
                inputmode: "decimal",
                pattern: "[0-9]*"
              },
              domProps: { value: _vm.form.amount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.$set(_vm.form, "amount", $event.target.value);
                }
              }
            }),
            _c("div", { staticClass: "suffix hide-phone" }, [
              _vm._v(_vm._s(_vm.groupCurrency.symbolWithCode))
            ]),
            _c("div", { staticClass: "suffix hide-tablet" }, [
              _vm._v(_vm._s(_vm.groupCurrency.symbol))
            ])
          ])
        ])
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-0cdcd9d3_0", { source: ".c-user-avatar-name[data-v-0cdcd9d3] {\n  display: flex;\n  align-items: center;\n}\n.c-user-avatar-name .c-avatar[data-v-0cdcd9d3] {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-user-avatar-name .c-avatar[data-v-0cdcd9d3] {\n    display: none;\n}\n}\n.c-check[data-v-0cdcd9d3] {\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-check[data-v-0cdcd9d3] {\n    margin-left: 2.5rem;\n}\n}\n.c-reset[data-v-0cdcd9d3] {\n  margin-left: 1rem;\n}\n@media screen and (max-width: 768px) {\n.inputgroup .input[data-v-0cdcd9d3] {\n    padding-right: 2rem;\n}\n}\n\n/*# sourceMappingURL=PaymentRowSendLightning.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentRowSendLightning.vue", "PaymentRowSendLightning.vue"], "names": [], "mappings": "AAgGA;EACA,aAAA;EACA,mBAAA;AC/FA;ADiGA;EACA,oBAAA;AC/FA;AACA;AD6FA;IAIA,aAAA;AC9FE;AACF;ADkGA;EACA,oBAAA;EACA,mBAAA;AC/FA;AACA;AD4FA;IAKA,mBAAA;AC9FE;AACF;ADiGA;EACA,iBAAA;AC9FA;AAEA;AD+FA;IAEA,mBAAA;AC9FE;AACF;;AAEA,sDAAsD", "file": "PaymentRowSendLightning.vue", "sourcesContent": [`<template lang="pug">
  // Note: .cpr- is for payment-row
  payment-row(:payment='payment')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-set='check')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Mark as an item to pay

    template(slot='cellUser')
      .c-user-wrapper
        .c-user-avatar-name
          avatar-user.c-avatar(:contractID='payment.toMemberID' size='xs')
          strong.c-name {{ payment.displayName }}
        i18n.pill.is-neutral.hide-tablet(tag='div') Lightning

    template(slot='cellActions')
      i18n.pill.is-neutral.hide-phone Lightning
      i18n.is-unstyled.link.is-link-inherit.c-reset(
        tag='button'
        type='button'
        v-if='payment.amount !== config.initialAmount'
        @click='reset'
      ) Reset

    template(slot='cellSuffix')
      label.field
        .inputgroup
          input.input(data-test='amount' inputmode='decimal' pattern='[0-9]*' v-model='form.amount')
          .suffix.hide-phone {{ groupCurrency.symbolWithCode }}
          .suffix.hide-tablet {{ groupCurrency.symbol }}
</template>

<script>
import { mapGetters } from 'vuex'
import PaymentRow from './payment-row/PaymentRow.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'

export default ({
  name: 'PaymentRowSendLightning',
  components: {
    PaymentRow,
    AvatarUser
  },
  props: {
    payment: {
      type: Object, // { index, checked, ...paymentsData }
      required: true
    }
  },
  data () {
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: this.payment.amount
      }
    }
  },
  watch: {
    'form.amount' (amount) {
      this.$emit('update', {
        index: this.payment.index,
        checked: true,
        amount
      })
    },
    'form.checked' (checked) {
      this.$emit('update', {
        index: this.payment.index,
        checked
      })
    },
    'payment.checked' (checked) {
      this.form.checked = checked
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupCurrency'
    ])
  },
  methods: {
    reset () {
      this.form.amount = this.config.initialAmount
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-user-avatar-name {
  display: flex;
  align-items: center;

  .c-avatar {
    margin-right: 0.5rem;

    @include phone {
      display: none;
    }
  }
}

.c-check {
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @include desktop {
    margin-left: 2.5rem;
  }
}

.c-reset {
  margin-left: 1rem;
}

.inputgroup .input {
  @include phone {
    padding-right: 2rem;
  }
}
</style>
`, ".c-user-avatar-name {\n  display: flex;\n  align-items: center;\n}\n.c-user-avatar-name .c-avatar {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-user-avatar-name .c-avatar {\n    display: none;\n  }\n}\n\n.c-check {\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-check {\n    margin-left: 2.5rem;\n  }\n}\n\n.c-reset {\n  margin-left: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .inputgroup .input {\n    padding-right: 2rem;\n  }\n}\n\n/*# sourceMappingURL=PaymentRowSendLightning.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-0cdcd9d3";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
  // Note: .cpr- is for payment-row
  payment-row(:payment='payment')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-set='check')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Mark as an item to pay

    template(slot='cellUser')
      .c-user-wrapper
        .c-user-avatar-name
          avatar-user.c-avatar(:contractID='payment.toMemberID' size='xs')
          strong.c-name {{ payment.displayName }}
        i18n.pill.is-neutral.hide-tablet(tag='div') Lightning

    template(slot='cellActions')
      i18n.pill.is-neutral.hide-phone Lightning
      i18n.is-unstyled.link.is-link-inherit.c-reset(
        tag='button'
        type='button'
        v-if='payment.amount !== config.initialAmount'
        @click='reset'
      ) Reset

    template(slot='cellSuffix')
      label.field
        .inputgroup
          input.input(data-test='amount' inputmode='decimal' pattern='[0-9]*' v-model='form.amount')
          .suffix.hide-phone {{ groupCurrency.symbolWithCode }}
          .suffix.hide-tablet {{ groupCurrency.symbol }}
</template>

<script>
import { mapGetters } from 'vuex'
import PaymentRow from './payment-row/PaymentRow.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'

export default ({
  name: 'PaymentRowSendLightning',
  components: {
    PaymentRow,
    AvatarUser
  },
  props: {
    payment: {
      type: Object, // { index, checked, ...paymentsData }
      required: true
    }
  },
  data () {
    return {
      config: {
        initialAmount: this.payment.amount
      },
      form: {
        checked: this.payment.checked,
        amount: this.payment.amount
      }
    }
  },
  watch: {
    'form.amount' (amount) {
      this.$emit('update', {
        index: this.payment.index,
        checked: true,
        amount
      })
    },
    'form.checked' (checked) {
      this.$emit('update', {
        index: this.payment.index,
        checked
      })
    },
    'payment.checked' (checked) {
      this.form.checked = checked
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupCurrency'
    ])
  },
  methods: {
    reset () {
      this.form.amount = this.config.initialAmount
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-user-avatar-name {
  display: flex;
  align-items: center;

  .c-avatar {
    margin-right: 0.5rem;

    @include phone {
      display: none;
    }
  }
}

.c-check {
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @include desktop {
    margin-left: 2.5rem;
  }
}

.c-reset {
  margin-left: 1rem;
}

.inputgroup .input {
  @include phone {
    padding-right: 2rem;
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
var PaymentRowSendLightning_default = __vue_component__2;

// frontend/views/containers/payments/RecordPaymentsList.vue
var __vue_script__3 = {
  name: "RecordPaymentsList",
  components: {
    AvatarUser: AvatarUser_default,
    Tooltip: Tooltip_default,
    PaymentRowRecord: PaymentRowRecord_default,
    PaymentRowSendLightning: PaymentRowSendLightning_default
  },
  props: {
    paymentsList: {
      type: Array,
      required: true
    },
    paymentType: {
      type: String,
      default: "manual",
      validator: (v) => ["manual", "lightning"].includes(v)
    },
    addDonationFee: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      config: {
        tableRowComponent: this.paymentType === "lightning" ? PaymentRowSendLightning_default : PaymentRowRecord_default
      },
      tableChecked: false
    };
  },
  computed: {
    ...mapGetters([
      "currentGroupState",
      "groupIncomeAdjustedDistribution",
      "ourGroupProfile",
      "groupSettings",
      "groupCurrency",
      "userDisplayNameFromID"
    ]),
    isLightning() {
      return this.paymentType === "lightning";
    },
    tableClasses() {
      return {
        "is-lightning": this.isLightning,
        "table-in-card": !this.isLightning
      };
    },
    totalAmount() {
      const total = this.paymentsList.filter((item) => item.checked).reduce((acc, p) => acc + p.amount, 0);
      return this.groupCurrency.displayWithoutCurrency(total * (this.addDonationFee ? 1.01 : 1));
    }
  },
  watch: {
    tableChecked(newVal) {
      for (const payment of this.paymentsList) {
        payment.checked = newVal;
      }
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "table",
    {
      staticClass: "table c-payments is-editing",
      class: _vm.tableClasses,
      attrs: {
        "data-test": _vm.isLightning ? "payRecordLightning" : "payRecord"
      }
    },
    [
      _c("thead", [
        _c(
          "tr",
          [
            _c("th", { staticClass: "c-th-checkbox" }, [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tableChecked,
                      expression: "tableChecked"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.tableChecked) ? _vm._i(_vm.tableChecked, null) > -1 : _vm.tableChecked
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.tableChecked, $$el = $event.target, $$c = $$el.checked ? true : false;
                      if (Array.isArray($$a)) {
                        var $$v = null, $$i = _vm._i($$a, $$v);
                        if ($$el.checked) {
                          $$i < 0 && (_vm.tableChecked = $$a.concat([$$v]));
                        } else {
                          $$i > -1 && (_vm.tableChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                        }
                      } else {
                        _vm.tableChecked = $$c;
                      }
                    }
                  }
                }),
                _c(
                  "span",
                  [
                    _c("i18n", { staticClass: "sr-only" }, [
                      _vm._v("Mark sent to all")
                    ])
                  ],
                  1
                )
              ])
            ]),
            _c("i18n", { attrs: { tag: "th" } }, [_vm._v("Sent to")]),
            _c("i18n", { staticClass: "sr-only", attrs: { tag: "th" } }, [
              _vm._v("Due")
            ]),
            _c("th", { staticClass: "c-th-amount" }, [
              _vm._v(
                _vm._s(_vm.isLightning ? _vm.L("Amount") : _vm.L("Amount sent"))
              )
            ])
          ],
          1
        )
      ]),
      _c(
        "tbody",
        [
          _vm._l(_vm.paymentsList, function(payment, index) {
            return _c(_vm.config.tableRowComponent, {
              key: index,
              tag: "component",
              attrs: { payment },
              on: {
                update: function(data) {
                  return _vm.$emit("update", data);
                }
              }
            });
          }),
          _vm.isLightning ? _c("tr", [
            _c("td", { attrs: { colspan: "4" } }, [
              _c(
                "div",
                { staticClass: "c-total-amount-wrapper" },
                [
                  _c(
                    "i18n",
                    {
                      staticClass: "c-total-label",
                      attrs: { tag: "label" }
                    },
                    [_vm._v("Total")]
                  ),
                  _c("div", { staticClass: "inputgroup disabled" }, [
                    _c("input", {
                      staticClass: "input c-total-amount",
                      domProps: { value: _vm.totalAmount }
                    }),
                    _c("div", { staticClass: "suffix hide-phone" }, [
                      _vm._v(_vm._s(_vm.groupCurrency.symbolWithCode))
                    ]),
                    _c("div", { staticClass: "suffix hide-tablet" }, [
                      _vm._v(_vm._s(_vm.groupCurrency.symbol))
                    ])
                  ])
                ],
                1
              )
            ])
          ]) : _vm._e()
        ],
        2
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-7e76ecca_0", { source: ".c-payments.is-editing[data-v-7e76ecca] {\n  margin-top: 1rem;\n}\n.c-payments.is-editing th[data-v-7e76ecca]:first-child,\n.c-payments.is-editing td[data-v-7e76ecca]:first-child {\n  width: 10%;\n}\n@media screen and (max-width: 768px) {\n.c-payments.is-editing th[data-v-7e76ecca]:first-child,\n  .c-payments.is-editing td[data-v-7e76ecca]:first-child {\n    width: 3rem;\n}\n}\n.c-payments.is-editing th[data-v-7e76ecca]:nth-child(2),\n.c-payments.is-editing td[data-v-7e76ecca]:nth-child(2) {\n  max-width: 20vh;\n}\n.c-payments.is-editing th[data-v-7e76ecca]:last-child,\n.c-payments.is-editing td[data-v-7e76ecca]:last-child {\n  width: 35%;\n  min-width: 9.375rem;\n  display: table-cell;\n}\n.c-payments.is-editing.is-lightning th.c-th-checkbox[data-v-7e76ecca] {\n  padding-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-payments.is-editing.is-lightning th.c-th-checkbox[data-v-7e76ecca] {\n    padding-left: 2.5rem;\n}\n}\n.c-total-amount-wrapper[data-v-7e76ecca] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n.c-total-amount-wrapper .c-total-label[data-v-7e76ecca] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-right: 1rem;\n}\n.c-total-amount-wrapper .inputgroup[data-v-7e76ecca] {\n  width: 35%;\n}\n[data-v-7e76ecca] .cpr-actions {\n  margin-right: 1rem;\n  justify-content: flex-end;\n}\n.c-th-checkbox[data-v-7e76ecca] {\n  line-height: 1.5rem;\n}\n.c-th-checkbox .checkbox[data-v-7e76ecca] {\n  margin-right: 0.5rem;\n}\n\n/*# sourceMappingURL=RecordPaymentsList.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/RecordPaymentsList.vue", "RecordPaymentsList.vue"], "names": [], "mappings": "AAkHA;EACA,gBAAA;ACjHA;ADqHA;;EACA,UAAA;AClHA;AACA;ADgHA;;IAIA,WAAA;AChHE;AACF;ADmHA;;EACA,eAAA;AChHA;ADmHA;;EACA,UAAA;EACA,mBAAA;EACA,mBAAA;AChHA;ADqHA;EACA,oBAAA;ACnHA;AACA;ADiHA;IAIA,oBAAA;AClHE;AACF;ADuHA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;ACpHA;ADsHA;EAEA,mBAAA;EACA,gBAAA;EAEA,kBAAA;ACtHA;ADyHA;EACA,UAAA;ACvHA;AD2HA;EACA,kBAAA;EACA,yBAAA;ACxHA;AD2HA;EACA,mBAAA;ACxHA;AD0HA;EACA,oBAAA;ACxHA;;AAEA,iDAAiD", "file": "RecordPaymentsList.vue", "sourcesContent": [`<template lang='pug'>
table.table.c-payments.is-editing(
  :data-test='isLightning ? "payRecordLightning" : "payRecord"'
  :class='tableClasses'
)
  thead
    tr
      th.c-th-checkbox
        label.checkbox
          input.input(type='checkbox' v-model='tableChecked')
          span
            i18n.sr-only Mark sent to all
      i18n(tag='th') Sent to
      i18n.sr-only(tag='th') Due
      th.c-th-amount {{ isLightning ? L('Amount') : L('Amount sent') }}

  tbody
    component(
      :is='config.tableRowComponent'
      v-for='(payment, index) in paymentsList'
      :key='index'
      :payment='payment'
      @update='(data) => $emit("update", data)'
    )

    tr(v-if='isLightning')
      td(colspan='4')
        .c-total-amount-wrapper
          i18n.c-total-label(tag='label') Total
          .inputgroup.disabled
            input.input.c-total-amount(:value='totalAmount')
            .suffix.hide-phone {{ groupCurrency.symbolWithCode }}
            .suffix.hide-tablet {{ groupCurrency.symbol }}
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import PaymentRowRecord from './PaymentRowRecord.vue'
import PaymentRowSendLightning from './PaymentRowSendLightning.vue'

export default ({
  name: 'RecordPaymentsList',
  components: {
    AvatarUser,
    Tooltip,
    PaymentRowRecord,
    PaymentRowSendLightning
  },
  props: {
    paymentsList: {
      type: Array,
      required: true
    },
    paymentType: {
      type: String,
      default: 'manual',
      validator: v => ['manual', 'lightning'].includes(v)
    },
    addDonationFee: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      config: {
        tableRowComponent: this.paymentType === 'lightning'
          ? PaymentRowSendLightning
          : PaymentRowRecord
      },
      tableChecked: false
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'groupIncomeAdjustedDistribution',
      'ourGroupProfile',
      'groupSettings',
      'groupCurrency',
      'userDisplayNameFromID'
    ]),
    isLightning () {
      return this.paymentType === 'lightning'
    },
    tableClasses () {
      return {
        'is-lightning': this.isLightning,
        'table-in-card': !this.isLightning
      }
    },
    totalAmount () {
      const total = this.paymentsList
        .filter(item => item.checked)
        .reduce((acc, p) => acc + p.amount, 0)

      return this.groupCurrency.displayWithoutCurrency(total * (this.addDonationFee ? 1.01 : 1))
    }
  },
  watch: {
    tableChecked (newVal) {
      for (const payment of this.paymentsList) {
        payment.checked = newVal
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payments.is-editing {
  margin-top: 1rem;

  th,
  td {
    &:first-child {
      width: 10%;

      @include phone {
        width: 3rem;
      }
    }

    &:nth-child(2) { // Sent to
      max-width: 20vh;
    }

    &:last-child {
      width: 35%;
      min-width: 9.375rem;
      display: table-cell;
    }
  }

  &.is-lightning {
    th.c-th-checkbox {
      padding-left: 0.5rem;

      @include desktop {
        padding-left: 2.5rem;
      }
    }
  }
}

.c-total-amount-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .c-total-label {
    font: {
      size: $size_4;
      weight: 600;
    }
    margin-right: 1rem;
  }

  .inputgroup {
    width: 35%;
  }
}

::v-deep .cpr-actions { // PaymentRow.vue
  margin-right: 1rem;
  justify-content: flex-end;
}

.c-th-checkbox {
  line-height: 1.5rem;

  .checkbox {
    margin-right: 0.5rem;
  }
}
</style>
`, ".c-payments.is-editing {\n  margin-top: 1rem;\n}\n.c-payments.is-editing th:first-child,\n.c-payments.is-editing td:first-child {\n  width: 10%;\n}\n@media screen and (max-width: 768px) {\n  .c-payments.is-editing th:first-child,\n  .c-payments.is-editing td:first-child {\n    width: 3rem;\n  }\n}\n.c-payments.is-editing th:nth-child(2),\n.c-payments.is-editing td:nth-child(2) {\n  max-width: 20vh;\n}\n.c-payments.is-editing th:last-child,\n.c-payments.is-editing td:last-child {\n  width: 35%;\n  min-width: 9.375rem;\n  display: table-cell;\n}\n.c-payments.is-editing.is-lightning th.c-th-checkbox {\n  padding-left: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-payments.is-editing.is-lightning th.c-th-checkbox {\n    padding-left: 2.5rem;\n  }\n}\n\n.c-total-amount-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n.c-total-amount-wrapper .c-total-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-right: 1rem;\n}\n.c-total-amount-wrapper .inputgroup {\n  width: 35%;\n}\n\n::v-deep .cpr-actions {\n  margin-right: 1rem;\n  justify-content: flex-end;\n}\n\n.c-th-checkbox {\n  line-height: 1.5rem;\n}\n.c-th-checkbox .checkbox {\n  margin-right: 0.5rem;\n}\n\n/*# sourceMappingURL=RecordPaymentsList.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-7e76ecca";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
table.table.c-payments.is-editing(
  :data-test='isLightning ? "payRecordLightning" : "payRecord"'
  :class='tableClasses'
)
  thead
    tr
      th.c-th-checkbox
        label.checkbox
          input.input(type='checkbox' v-model='tableChecked')
          span
            i18n.sr-only Mark sent to all
      i18n(tag='th') Sent to
      i18n.sr-only(tag='th') Due
      th.c-th-amount {{ isLightning ? L('Amount') : L('Amount sent') }}

  tbody
    component(
      :is='config.tableRowComponent'
      v-for='(payment, index) in paymentsList'
      :key='index'
      :payment='payment'
      @update='(data) => $emit("update", data)'
    )

    tr(v-if='isLightning')
      td(colspan='4')
        .c-total-amount-wrapper
          i18n.c-total-label(tag='label') Total
          .inputgroup.disabled
            input.input.c-total-amount(:value='totalAmount')
            .suffix.hide-phone {{ groupCurrency.symbolWithCode }}
            .suffix.hide-tablet {{ groupCurrency.symbol }}
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import PaymentRowRecord from './PaymentRowRecord.vue'
import PaymentRowSendLightning from './PaymentRowSendLightning.vue'

export default ({
  name: 'RecordPaymentsList',
  components: {
    AvatarUser,
    Tooltip,
    PaymentRowRecord,
    PaymentRowSendLightning
  },
  props: {
    paymentsList: {
      type: Array,
      required: true
    },
    paymentType: {
      type: String,
      default: 'manual',
      validator: v => ['manual', 'lightning'].includes(v)
    },
    addDonationFee: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      config: {
        tableRowComponent: this.paymentType === 'lightning'
          ? PaymentRowSendLightning
          : PaymentRowRecord
      },
      tableChecked: false
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'groupIncomeAdjustedDistribution',
      'ourGroupProfile',
      'groupSettings',
      'groupCurrency',
      'userDisplayNameFromID'
    ]),
    isLightning () {
      return this.paymentType === 'lightning'
    },
    tableClasses () {
      return {
        'is-lightning': this.isLightning,
        'table-in-card': !this.isLightning
      }
    },
    totalAmount () {
      const total = this.paymentsList
        .filter(item => item.checked)
        .reduce((acc, p) => acc + p.amount, 0)

      return this.groupCurrency.displayWithoutCurrency(total * (this.addDonationFee ? 1.01 : 1))
    }
  },
  watch: {
    tableChecked (newVal) {
      for (const payment of this.paymentsList) {
        payment.checked = newVal
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payments.is-editing {
  margin-top: 1rem;

  th,
  td {
    &:first-child {
      width: 10%;

      @include phone {
        width: 3rem;
      }
    }

    &:nth-child(2) { // Sent to
      max-width: 20vh;
    }

    &:last-child {
      width: 35%;
      min-width: 9.375rem;
      display: table-cell;
    }
  }

  &.is-lightning {
    th.c-th-checkbox {
      padding-left: 0.5rem;

      @include desktop {
        padding-left: 2.5rem;
      }
    }
  }
}

.c-total-amount-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .c-total-label {
    font: {
      size: $size_4;
      weight: 600;
    }
    margin-right: 1rem;
  }

  .inputgroup {
    width: 35%;
  }
}

::v-deep .cpr-actions { // PaymentRow.vue
  margin-right: 1rem;
  justify-content: flex-end;
}

.c-th-checkbox {
  line-height: 1.5rem;

  .checkbox {
    margin-right: 0.5rem;
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var RecordPaymentsList_default = __vue_component__3;

export {
  RecordPaymentsList_default
};
//# sourceMappingURL=chunk-IVKMRDAZ-cached.js.map
