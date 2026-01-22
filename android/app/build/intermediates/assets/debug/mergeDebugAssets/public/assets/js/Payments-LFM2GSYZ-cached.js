import {
  AddIncomeDetailsWidget_default
} from "./chunk-L43YVAJX-cached.js";
import {
  contributions_default
} from "./chunk-3EJJCCO3-cached.js";
import {
  MenuContent_default,
  MenuItem_default,
  MenuParent_default,
  MenuTrigger_default
} from "./chunk-5WH7KRTS-cached.js";
import "./chunk-LA43UFR3-cached.js";
import {
  PaymentsMixin_default
} from "./chunk-LNZF2O32-cached.js";
import {
  PaymentRow_default
} from "./chunk-NO7PSN3H-cached.js";
import {
  Progress_default
} from "./chunk-OMAB4AXT-cached.js";
import "./chunk-6TVZJD4C-cached.js";
import "./chunk-LUECJCV2-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import {
  PAYMENT_CANCELLED,
  PAYMENT_COMPLETED,
  PAYMENT_NOT_RECEIVED
} from "./chunk-5AEIP7HX-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-A3KNU2XZ-cached.js";
import {
  comparePeriodStamps,
  dateFromPeriodStamp,
  dateToMonthstamp,
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import "./chunk-K33NK7LD-cached.js";
import {
  Search_default
} from "./chunk-UEDKYPAS-cached.js";
import "./chunk-GDHKI2YN-cached.js";
import "./chunk-3T5W4UPP-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import {
  logExceptNavigationDuplicated,
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  deepEqualJSONType,
  omit,
  randomHexString,
  uniq
} from "./chunk-MTWMQLQH-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  OPEN_MODAL,
  PAYMENTS_RECORDED
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/payment-row/PaymentNotReceivedTooltip.vue
var __vue_script__ = {
  name: "PaymentNotReceivedTooltip",
  components: {
    Tooltip: Tooltip_default
  },
  props: {
    member: String,
    hideText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tooltip",
    {
      staticClass: "c-tooltip-warning",
      attrs: {
        direction: "top",
        isTextCenter: true,
        text: _vm.L("{member} marked this payment as not received.", {
          member: _vm.member
        })
      }
    },
    [
      _c("div", { staticClass: "button is-icon-smaller c-tip" }, [
        _c("i", { staticClass: "icon-info" })
      ]),
      !_vm.hideText ? _c("i18n", { staticClass: "pill is-warning c-tip-text" }, [
        _vm._v("Not received")
      ]) : _vm._e()
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-ce8dee82_0", { source: ".c-tooltip-warning[data-v-ce8dee82] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  outline: none;\n}\n.c-tooltip-warning .c-tip[data-v-ce8dee82] {\n  background: var(--warning_0);\n}\n.c-tooltip-warning:focus .c-tip[data-v-ce8dee82] {\n  box-shadow: 0 0 4px var(--primary_0);\n}\n.c-tip[data-v-ce8dee82] {\n  margin-left: 0.5rem;\n  margin-right: 0.25rem;\n}\n.c-tip[data-v-ce8dee82], .c-tip[data-v-ce8dee82]:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=PaymentNotReceivedTooltip.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/payment-row/PaymentNotReceivedTooltip.vue", "PaymentNotReceivedTooltip.vue"], "names": [], "mappings": "AAiCA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;AChCA;ADkCA;EACA,4BAAA;AChCA;ADmCA;EACA,oCAAA;ACjCA;AD8CA;EACA,mBAAA;EACA,qBAAA;AC3CA;AD6CA;EAEA,WAAA;AC5CA;;AAEA,wDAAwD", "file": "PaymentNotReceivedTooltip.vue", "sourcesContent": [`<template lang='pug'>
  tooltip.c-tooltip-warning(
    direction='top'
    :isTextCenter='true'
    :text='L("{member} marked this payment as not received.", { member })'
  )
    .button.is-icon-smaller.c-tip
      i.icon-info
    i18n.pill.is-warning.c-tip-text(v-if='!hideText') Not received
</template>

<script>
import Tooltip from '../../../../../frontend/views/components/Tooltip.vue'

export default ({
  name: 'PaymentNotReceivedTooltip',
  components: {
    Tooltip
  },
  props: {
    member: String,
    hideText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-tooltip-warning {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  outline: none;

  .c-tip {
    background: $warning_0;
  }

  &:focus .c-tip {
    box-shadow: 0 0 4px $primary_0;
  }
}

// TODO: check if we need generic rule for this (keep until we know)
// .c-tooltip {
//   @each $name in $colors {
//     &-#{$name} .c-tip{
//       background: var(--#{$name}_0);
//     }
//   }
// }

.c-tip {
  margin-left: 0.5rem;
  margin-right: 0.25rem;

  &,
  &:hover {
    color: #fff;
  }
}
</style>
`, ".c-tooltip-warning {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  outline: none;\n}\n.c-tooltip-warning .c-tip {\n  background: var(--warning_0);\n}\n.c-tooltip-warning:focus .c-tip {\n  box-shadow: 0 0 4px var(--primary_0);\n}\n\n.c-tip {\n  margin-left: 0.5rem;\n  margin-right: 0.25rem;\n}\n.c-tip, .c-tip:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=PaymentNotReceivedTooltip.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-ce8dee82";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  tooltip.c-tooltip-warning(
    direction='top'
    :isTextCenter='true'
    :text='L("{member} marked this payment as not received.", { member })'
  )
    .button.is-icon-smaller.c-tip
      i.icon-info
    i18n.pill.is-warning.c-tip-text(v-if='!hideText') Not received
</template>

<script>
import Tooltip from '../../../../../frontend/views/components/Tooltip.vue'

export default ({
  name: 'PaymentNotReceivedTooltip',
  components: {
    Tooltip
  },
  props: {
    member: String,
    hideText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-tooltip-warning {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  outline: none;

  .c-tip {
    background: $warning_0;
  }

  &:focus .c-tip {
    box-shadow: 0 0 4px $primary_0;
  }
}

// TODO: check if we need generic rule for this (keep until we know)
// .c-tooltip {
//   @each $name in $colors {
//     &-#{$name} .c-tip{
//       background: var(--#{$name}_0);
//     }
//   }
// }

.c-tip {
  margin-left: 0.5rem;
  margin-right: 0.25rem;

  &,
  &:hover {
    color: #fff;
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
var PaymentNotReceivedTooltip_default = __vue_component__;

// frontend/views/containers/payments/PaymentRowTodo.vue
var __vue_script__2 = {
  name: "PaymentRowTodo",
  components: {
    MenuItem: MenuItem_default,
    PaymentNotReceivedTooltip: PaymentNotReceivedTooltip_default,
    PaymentRow: PaymentRow_default
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        checked: false
      }
    };
  },
  computed: {
    wasNotReceived() {
      const { data } = this.payment;
      return data && data.status === PAYMENT_NOT_RECEIVED;
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    // TODO: make multiple payments
    select() {
      this.form.checked = true;
    },
    deselect() {
      this.form.checked = false;
    }
  },
  watch: {
    "form.checked"(checked) {
      this.$emit("change", {
        hash: this.payment?.hash,
        checked
      });
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "payment-row",
    { attrs: { payment: _vm.payment, "data-test": "payRow" } },
    [
      _c("template", { slot: "cellPrefix" }, [
        _c(
          "label",
          {
            staticClass: "checkbox c-check",
            attrs: { "data-test": "todoCheck" }
          },
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
                  _vm._v("Select payment item")
                ])
              ],
              1
            )
          ]
        )
      ]),
      _c("template", { slot: "cellAmount" }, [
        _c("div", { staticClass: "c-amount-container" }, [
          _c(
            "div",
            { staticClass: "c-amount-value-container" },
            [
              _vm.payment.partial ? [
                _c(
                  "i18n",
                  {
                    staticClass: "c-partial",
                    attrs: {
                      args: {
                        partial_amount: '<strong class="has-text-0">' + _vm.withGroupCurrency(_vm.payment.amount) + "</strong>",
                        partial_total: _vm.withGroupCurrency(
                          _vm.payment.total
                        )
                      }
                    }
                  },
                  [_vm._v("{partial_amount} out of {partial_total}")]
                )
              ] : _c("strong", [
                _vm._v(_vm._s(_vm.withGroupCurrency(_vm.payment.amount)))
              ]),
              _vm.wasNotReceived ? _c("payment-not-received-tooltip", {
                staticClass: "c-not-received-tooltip",
                attrs: { member: _vm.payment.displayName }
              }) : _vm._e()
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "c-amount-pill-container" },
            [
              _vm.payment.partial ? _c("i18n", { staticClass: "pill is-primary" }, [
                _vm._v("Partial")
              ]) : _vm._e(),
              _c("i18n", { staticClass: "pill is-neutral hide-tablet" }, [
                _vm._v("Manual")
              ])
            ],
            1
          )
        ])
      ]),
      _c("template", { slot: "cellMethod" }, [
        _c(
          "div",
          { staticClass: "c-methods-container" },
          [_c("i18n", { staticClass: "pill is-neutral" }, [_vm._v("Manual")])],
          1
        )
      ]),
      _c("template", { slot: "cellActions" }, [
        _c(
          "div",
          {
            staticClass: "cpr-date",
            class: _vm.payment.isLate ? "pill is-danger" : "has-text-1"
          },
          [_vm._v(_vm._s(_vm.humanDate(_vm.payment.date)))]
        )
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-ff48c6f2_0", { source: ".c-check[data-v-ff48c6f2] {\n  margin-right: 0.2rem;\n}\n.c-partial[data-v-ff48c6f2] {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n.c-partial[data-v-ff48c6f2] {\n    display: block;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-partial[data-v-ff48c6f2] {\n    margin-right: 0.5rem;\n}\n}\n.c-amount-container[data-v-ff48c6f2] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-amount-container[data-v-ff48c6f2] {\n    align-items: flex-start;\n}\n}\n.c-amount-container .c-amount-value-container[data-v-ff48c6f2] {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n.c-amount-container .c-amount-value-container[data-v-ff48c6f2] {\n    gap: 0.25rem;\n    justify-content: flex-end;\n}\n}\n@media screen and (max-width: 768px) {\n.c-amount-container .c-not-received-tooltip[data-v-ff48c6f2] {\n    order: -1;\n}\n}\n.c-amount-container .c-amount-pill-container[data-v-ff48c6f2] {\n  margin-top: 2px;\n  display: flex;\n  gap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-methods-container[data-v-ff48c6f2] {\n    display: none;\n}\n}\n\n/*# sourceMappingURL=PaymentRowTodo.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentRowTodo.vue", "PaymentRowTodo.vue"], "names": [], "mappings": "AA8FA;EACA,oBAAA;AC7FA;ADgGA;EACA,oBAAA;AC7FA;AACA;AD2FA;IAIA,cAAA;AC5FE;AACF;AACA;ADsFA;IAQA,oBAAA;AC3FE;AACF;AD8FA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;AC3FA;AACA;ADsFA;IAOA,uBAAA;AC1FE;AACF;AD4FA;EACA,aAAA;EACA,eAAA;AC1FA;AACA;ADuFA;IAKA,YAAA;IACA,yBAAA;ACzFE;AACF;AACA;AD2FA;IAEA,SAAA;AC1FE;AACF;AD6FA;EACA,eAAA;EACA,aAAA;EACA,WAAA;AC3FA;AAEA;AD6FA;IAEA,aAAA;AC5FE;AACF;;AAEA,6CAA6C", "file": "PaymentRowTodo.vue", "sourcesContent": [`<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment' data-test='payRow')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-test='todoCheck')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Select payment item

    template(slot='cellAmount')
      .c-amount-container
        .c-amount-value-container
          template(v-if='payment.partial')
            i18n.c-partial(
              :args='{ \\
                partial_amount: \`<strong class="has-text-0">\${withGroupCurrency(payment.amount)}</strong>\`, \\
                partial_total: withGroupCurrency(payment.total) \\
              }'
            ) {partial_amount} out of {partial_total}
          strong(v-else) {{withGroupCurrency(payment.amount)}}

          payment-not-received-tooltip.c-not-received-tooltip(v-if='wasNotReceived' :member='payment.displayName')

        .c-amount-pill-container
          i18n.pill.is-primary(v-if='payment.partial') Partial
          i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container
        i18n.pill.is-neutral Manual

    template(slot='cellActions')
      .cpr-date(:class='payment.isLate ? "pill is-danger" : "has-text-1"') {{ humanDate(payment.date) }}
</template>

<script>
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'PaymentRowTodo',
  components: {
    MenuItem,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: {
        checked: false
      }
    }
  },
  computed: {
    wasNotReceived () {
      const { data } = this.payment
      return data && data.status === PAYMENT_NOT_RECEIVED
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    // TODO: make multiple payments
    select () {
      this.form.checked = true
    },
    deselect () {
      this.form.checked = false
    }
  },
  watch: {
    'form.checked' (checked) {
      this.$emit('change', {
        hash: this.payment?.hash,
        checked
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-check {
  margin-right: 0.2rem;
}

.c-partial {
  color: $text_1;

  @include phone {
    display: block;
  }

  @include tablet {
    margin-right: 0.5rem;
  }
}

.c-amount-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  @include tablet {
    align-items: flex-start;
  }

  .c-amount-value-container {
    display: flex;
    flex-wrap: wrap;

    @include phone {
      gap: 0.25rem;
      justify-content: flex-end;
    }
  }

  .c-not-received-tooltip {
    @include phone {
      order: -1;
    }
  }

  .c-amount-pill-container {
    margin-top: 2px;
    display: flex;
    gap: 0.5rem;
  }
}

.c-methods-container {
  @include phone {
    display: none;
  }
}
</style>
`, ".c-check {\n  margin-right: 0.2rem;\n}\n\n.c-partial {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n  .c-partial {\n    display: block;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-partial {\n    margin-right: 0.5rem;\n  }\n}\n\n.c-amount-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-amount-container {\n    align-items: flex-start;\n  }\n}\n.c-amount-container .c-amount-value-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container .c-amount-value-container {\n    gap: 0.25rem;\n    justify-content: flex-end;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container .c-not-received-tooltip {\n    order: -1;\n  }\n}\n.c-amount-container .c-amount-pill-container {\n  margin-top: 2px;\n  display: flex;\n  gap: 0.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .c-methods-container {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=PaymentRowTodo.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-ff48c6f2";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment' data-test='payRow')
    template(slot='cellPrefix')
      label.checkbox.c-check(data-test='todoCheck')
        input.input(type='checkbox' v-model='form.checked')
        span
          i18n.sr-only Select payment item

    template(slot='cellAmount')
      .c-amount-container
        .c-amount-value-container
          template(v-if='payment.partial')
            i18n.c-partial(
              :args='{ \\
                partial_amount: \`<strong class="has-text-0">\${withGroupCurrency(payment.amount)}</strong>\`, \\
                partial_total: withGroupCurrency(payment.total) \\
              }'
            ) {partial_amount} out of {partial_total}
          strong(v-else) {{withGroupCurrency(payment.amount)}}

          payment-not-received-tooltip.c-not-received-tooltip(v-if='wasNotReceived' :member='payment.displayName')

        .c-amount-pill-container
          i18n.pill.is-primary(v-if='payment.partial') Partial
          i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container
        i18n.pill.is-neutral Manual

    template(slot='cellActions')
      .cpr-date(:class='payment.isLate ? "pill is-danger" : "has-text-1"') {{ humanDate(payment.date) }}
</template>

<script>
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'PaymentRowTodo',
  components: {
    MenuItem,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: {
        checked: false
      }
    }
  },
  computed: {
    wasNotReceived () {
      const { data } = this.payment
      return data && data.status === PAYMENT_NOT_RECEIVED
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    // TODO: make multiple payments
    select () {
      this.form.checked = true
    },
    deselect () {
      this.form.checked = false
    }
  },
  watch: {
    'form.checked' (checked) {
      this.$emit('change', {
        hash: this.payment?.hash,
        checked
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-check {
  margin-right: 0.2rem;
}

.c-partial {
  color: $text_1;

  @include phone {
    display: block;
  }

  @include tablet {
    margin-right: 0.5rem;
  }
}

.c-amount-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  @include tablet {
    align-items: flex-start;
  }

  .c-amount-value-container {
    display: flex;
    flex-wrap: wrap;

    @include phone {
      gap: 0.25rem;
      justify-content: flex-end;
    }
  }

  .c-not-received-tooltip {
    @include phone {
      order: -1;
    }
  }

  .c-amount-pill-container {
    margin-top: 2px;
    display: flex;
    gap: 0.5rem;
  }
}

.c-methods-container {
  @include phone {
    display: none;
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
var PaymentRowTodo_default = __vue_component__2;

// frontend/views/containers/payments/payment-row/PaymentActionsMenu.vue
var __vue_script__3 = {
  name: "PaymentNotReceivedTooltip",
  components: {
    MenuParent: MenuParent_default,
    MenuTrigger: MenuTrigger_default,
    MenuContent: MenuContent_default,
    MenuItem: MenuItem_default
  },
  props: {
    memberID: String
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "menu-parent",
    { staticClass: "c-menu" },
    [
      _c(
        "menu-trigger",
        {
          staticClass: "is-icon-small",
          attrs: { "aria-label": _vm.L("Payment actions") }
        },
        [_c("i", { staticClass: "icon-ellipsis-v" })]
      ),
      _c("menu-content", [_c("menu", [_vm._t("default")], 2)])
    ],
    1
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-6b54ae22_0", { source: ".c-menu[data-v-6b54ae22] {\n  margin-left: 1rem;\n}\n.c-menu[data-v-6b54ae22]  .c-content {\n  width: 13.375rem;\n  left: -12rem;\n  top: 2rem;\n}\n\n/*# sourceMappingURL=PaymentActionsMenu.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/payment-row/PaymentActionsMenu.vue", "PaymentActionsMenu.vue"], "names": [], "mappings": "AA6BA;EACA,iBAAA;AC5BA;AD+BA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;AC5BA;;AAEA,iDAAiD", "file": "PaymentActionsMenu.vue", "sourcesContent": [`<template lang='pug'>
  menu-parent.c-menu
    menu-trigger.is-icon-small(:aria-label='L("Payment actions")')
      i.icon-ellipsis-v
    menu-content
      menu
        slot
</template>

<script>
import { MenuParent, MenuTrigger, MenuContent, MenuItem } from '../../../../../frontend/views/components/menu/index.js'

export default ({
  name: 'PaymentNotReceivedTooltip',
  components: {
    MenuParent,
    MenuTrigger,
    MenuContent,
    MenuItem
  },
  props: {
    memberID: String
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-menu {
  margin-left: 1rem;
}

.c-menu ::v-deep .c-content {
  width: 13.375rem;
  left: -12rem;
  top: 2rem;
}
</style>
`, ".c-menu {\n  margin-left: 1rem;\n}\n\n.c-menu ::v-deep .c-content {\n  width: 13.375rem;\n  left: -12rem;\n  top: 2rem;\n}\n\n/*# sourceMappingURL=PaymentActionsMenu.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-6b54ae22";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  menu-parent.c-menu
    menu-trigger.is-icon-small(:aria-label='L("Payment actions")')
      i.icon-ellipsis-v
    menu-content
      menu
        slot
</template>

<script>
import { MenuParent, MenuTrigger, MenuContent, MenuItem } from '../../../../../frontend/views/components/menu/index.js'

export default ({
  name: 'PaymentNotReceivedTooltip',
  components: {
    MenuParent,
    MenuTrigger,
    MenuContent,
    MenuItem
  },
  props: {
    memberID: String
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-menu {
  margin-left: 1rem;
}

.c-menu ::v-deep .c-content {
  width: 13.375rem;
  left: -12rem;
  top: 2rem;
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
var PaymentActionsMenu_default = __vue_component__3;

// frontend/views/containers/payments/PaymentRowSent.vue
var __vue_script__4 = {
  name: "PaymentRowSent",
  components: {
    AvatarUser: AvatarUser_default,
    MenuItem: MenuItem_default,
    PaymentActionsMenu: PaymentActionsMenu_default,
    PaymentNotReceivedTooltip: PaymentNotReceivedTooltip_default,
    PaymentRow: PaymentRow_default
  },
  mixins: [PaymentsMixin_default],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      "ourGroupProfile"
    ]),
    notReceived() {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED;
    },
    isOldPayment() {
      return comparePeriodStamps(this.payment.period, this.currentPaymentPeriod) < 0;
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal(name, props) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, name, props);
    },
    // TODO: make multiple payments
    async cancelPayment() {
      try {
        await esm_default("gi.actions/group/paymentUpdate", {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_CANCELLED
            }
          }
        });
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    }
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "payment-row",
    { attrs: { payment: _vm.payment } },
    [
      _c("template", { slot: "cellAmount" }, [
        _c(
          "div",
          { staticClass: "c-amount-container" },
          [
            _c("strong", [
              _vm._v(_vm._s(_vm.withGroupCurrency(_vm.payment.amount)))
            ]),
            _vm.notReceived ? _c("payment-not-received-tooltip", {
              staticClass: "c-not-received-badge",
              attrs: { member: _vm.payment.displayName, hideText: true }
            }) : _vm._e()
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "c-amount-pill-container" },
          [
            _c("i18n", { staticClass: "pill is-neutral hide-tablet" }, [
              _vm._v("Manual")
            ])
          ],
          1
        )
      ]),
      _c("template", { slot: "cellMethod" }, [
        _c(
          "div",
          { staticClass: "c-methods-container hide-phone" },
          [_c("i18n", { staticClass: "pill is-neutral" }, [_vm._v("Manual")])],
          1
        )
      ]),
      _c("template", { slot: "cellDate" }, [
        _c("div", { staticClass: "cpr-date has-text-1" }, [
          _vm._v(_vm._s(_vm.humanDate(_vm.payment.date)))
        ])
      ]),
      _c("template", { slot: "cellRelativeTo" }, [
        _c("div", { staticClass: "c-relative-to has-text-1" }, [
          _vm._v(_vm._s(_vm.humanDate(_vm.payment.period)))
        ])
      ]),
      _c(
        "template",
        { slot: "cellActions" },
        [
          _c(
            "payment-actions-menu",
            [
              _c(
                "menu-item",
                {
                  attrs: { tag: "button", "item-id": "message", icon: "info" },
                  on: {
                    click: function($event) {
                      return _vm.openModal("PaymentDetail", {
                        id: _vm.payment.hash,
                        period: _vm.payment.period
                      });
                    }
                  }
                },
                [_c("i18n", [_vm._v("Payment details")])],
                1
              ),
              !_vm.isOldPayment ? _c(
                "menu-item",
                {
                  attrs: {
                    tag: "button",
                    "item-id": "message",
                    icon: "times"
                  },
                  on: { click: _vm.cancelPayment }
                },
                [_c("i18n", [_vm._v("Cancel this payment")])],
                1
              ) : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    2
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-06dd8726_0", { source: ".c-relative-to[data-v-06dd8726] {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n.c-relative-to[data-v-06dd8726] {\n    display: block;\n}\n}\n.c-amount-container[data-v-06dd8726] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 768px) {\n.c-amount-container[data-v-06dd8726] {\n    justify-content: flex-end;\n}\n}\n@media screen and (max-width: 768px) {\n.c-amount-container .c-not-received-badge[data-v-06dd8726] {\n    order: -1;\n}\n}\n.c-amount-pill-container[data-v-06dd8726] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 2px;\n}\n@media screen and (max-width: 768px) {\n.c-amount-pill-container[data-v-06dd8726] {\n    justify-content: flex-end;\n}\n}\n\n/*# sourceMappingURL=PaymentRowSent.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentRowSent.vue", "PaymentRowSent.vue"], "names": [], "mappings": "AAqHA;EACA,aAAA;ACpHA;AACA;ADkHA;IAIA,cAAA;ACnHE;AACF;ADsHA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;ACnHA;AACA;AD+GA;IAMA,yBAAA;AClHE;AACF;AACA;ADmHA;IAEA,SAAA;AClHE;AACF;ADsHA;EACA,aAAA;EACA,WAAA;EACA,eAAA;ACnHA;AACA;AD+GA;IAMA,yBAAA;AClHE;AACF;;AAEA,6CAA6C", "file": "PaymentRowSent.vue", "sourcesContent": [`<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellAmount')
      .c-amount-container
        strong {{ withGroupCurrency(payment.amount) }}
        payment-not-received-tooltip.c-not-received-badge(
          v-if='notReceived'
          :member='payment.displayName'
          :hideText='true'
        )

      .c-amount-pill-container
        i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container.hide-phone
        i18n.pill.is-neutral Manual

    template(slot='cellDate')
      .cpr-date.has-text-1 {{ humanDate(payment.date) }}

    template(slot='cellRelativeTo')
      .c-relative-to.has-text-1 {{ humanDate(payment.period) }}

    template(slot='cellActions')
      payment-actions-menu
        menu-item(
          tag='button'
          item-id='message'
          icon='info'
          @click='openModal("PaymentDetail", { id: payment.hash, period: payment.period })'
        )
          i18n Payment details

        menu-item(
          v-if='!isOldPayment'
          tag='button'
          item-id='message'
          icon='times'
          @click='cancelPayment'
        )
          i18n Cancel this payment
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { PAYMENT_CANCELLED, PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { humanDate, comparePeriodStamps } from '../../../../frontend/model/contracts/shared/time.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentActionsMenu from './payment-row/PaymentActionsMenu.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'PaymentRowSent',
  components: {
    AvatarUser,
    MenuItem,
    PaymentActionsMenu,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  mixins: [PaymentsMixin],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ]),
    notReceived () {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED
    },
    isOldPayment () {
      // Check if the payment is relative to an older period.
      return comparePeriodStamps(this.payment.period, this.currentPaymentPeriod) < 0
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, props)
    },
    // TODO: make multiple payments
    async cancelPayment () {
      try {
        await sbp('gi.actions/group/paymentUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_CANCELLED
            }
          }
        })
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-relative-to {
  display: none;

  @include payment-table-desktop {
    display: block;
  }
}

.c-amount-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @include phone {
    justify-content: flex-end;
  }

  .c-not-received-badge {
    @include phone {
      order: -1;
    }
  }
}

.c-amount-pill-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 2px;

  @include phone {
    justify-content: flex-end;
  }
}
</style>
`, ".c-relative-to {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n  .c-relative-to {\n    display: block;\n  }\n}\n\n.c-amount-container {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container {\n    justify-content: flex-end;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container .c-not-received-badge {\n    order: -1;\n  }\n}\n\n.c-amount-pill-container {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 2px;\n}\n@media screen and (max-width: 768px) {\n  .c-amount-pill-container {\n    justify-content: flex-end;\n  }\n}\n\n/*# sourceMappingURL=PaymentRowSent.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-06dd8726";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellAmount')
      .c-amount-container
        strong {{ withGroupCurrency(payment.amount) }}
        payment-not-received-tooltip.c-not-received-badge(
          v-if='notReceived'
          :member='payment.displayName'
          :hideText='true'
        )

      .c-amount-pill-container
        i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container.hide-phone
        i18n.pill.is-neutral Manual

    template(slot='cellDate')
      .cpr-date.has-text-1 {{ humanDate(payment.date) }}

    template(slot='cellRelativeTo')
      .c-relative-to.has-text-1 {{ humanDate(payment.period) }}

    template(slot='cellActions')
      payment-actions-menu
        menu-item(
          tag='button'
          item-id='message'
          icon='info'
          @click='openModal("PaymentDetail", { id: payment.hash, period: payment.period })'
        )
          i18n Payment details

        menu-item(
          v-if='!isOldPayment'
          tag='button'
          item-id='message'
          icon='times'
          @click='cancelPayment'
        )
          i18n Cancel this payment
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { PAYMENT_CANCELLED, PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { humanDate, comparePeriodStamps } from '../../../../frontend/model/contracts/shared/time.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentActionsMenu from './payment-row/PaymentActionsMenu.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'PaymentRowSent',
  components: {
    AvatarUser,
    MenuItem,
    PaymentActionsMenu,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  mixins: [PaymentsMixin],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ]),
    notReceived () {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED
    },
    isOldPayment () {
      // Check if the payment is relative to an older period.
      return comparePeriodStamps(this.payment.period, this.currentPaymentPeriod) < 0
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, props)
    },
    // TODO: make multiple payments
    async cancelPayment () {
      try {
        await sbp('gi.actions/group/paymentUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_CANCELLED
            }
          }
        })
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-relative-to {
  display: none;

  @include payment-table-desktop {
    display: block;
  }
}

.c-amount-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @include phone {
    justify-content: flex-end;
  }

  .c-not-received-badge {
    @include phone {
      order: -1;
    }
  }
}

.c-amount-pill-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 2px;

  @include phone {
    justify-content: flex-end;
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var PaymentRowSent_default = __vue_component__4;

// frontend/views/containers/payments/PaymentRowReceived.vue
var __vue_script__5 = {
  name: "PaymentRowReceived",
  components: {
    MenuItem: MenuItem_default,
    PaymentActionsMenu: PaymentActionsMenu_default,
    PaymentNotReceivedTooltip: PaymentNotReceivedTooltip_default,
    PaymentRow: PaymentRow_default
  },
  mixins: [PaymentsMixin_default],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    notReceived() {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED;
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal(name, props) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, name, props);
    },
    // TODO: make multiple payments
    async markNotReceived() {
      try {
        if (this.payment.data.status === PAYMENT_NOT_RECEIVED) {
          alert(L("Already marked as not received!"));
          return;
        }
        await esm_default("gi.actions/group/paymentUpdate", {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_NOT_RECEIVED
            }
          }
        });
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    }
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "payment-row",
    { attrs: { payment: _vm.payment } },
    [
      _c("template", { slot: "cellAmount" }, [
        _c(
          "div",
          { staticClass: "c-amount-container" },
          [
            _c("strong", [
              _vm._v(_vm._s(_vm.withGroupCurrency(_vm.payment.amount)))
            ]),
            _vm.notReceived ? _c("payment-not-received-tooltip", {
              staticClass: "c-not-received-badge",
              attrs: { member: _vm.payment.displayName, hideText: true }
            }) : _vm._e()
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "c-amount-pill-container" },
          [
            _c("i18n", { staticClass: "pill is-neutral hide-tablet" }, [
              _vm._v("Manual")
            ])
          ],
          1
        )
      ]),
      _c("template", { slot: "cellMethod" }, [
        _c(
          "div",
          { staticClass: "c-methods-container" },
          [_c("i18n", { staticClass: "pill is-neutral" }, [_vm._v("Manual")])],
          1
        )
      ]),
      _c("template", { slot: "cellDate" }, [
        _c("div", { staticClass: "cpr-date has-text-1" }, [
          _vm._v(_vm._s(_vm.humanDate(_vm.payment.date)))
        ])
      ]),
      _c("template", { slot: "cellRelativeTo" }, [
        _c("div", { staticClass: "c-relative-to has-text-1" }, [
          _vm._v(_vm._s(_vm.humanDate(_vm.payment.period)))
        ])
      ]),
      _c(
        "template",
        { slot: "cellActions" },
        [
          _c(
            "payment-actions-menu",
            [
              _c(
                "menu-item",
                {
                  attrs: { tag: "button", "item-id": "message", icon: "info" },
                  on: {
                    click: function($event) {
                      return _vm.openModal("PaymentDetail", {
                        id: _vm.payment.hash,
                        period: _vm.payment.period
                      });
                    }
                  }
                },
                [_c("i18n", [_vm._v("Payment details")])],
                1
              ),
              _c(
                "menu-item",
                {
                  attrs: { tag: "button", "item-id": "message", icon: "times" },
                  on: { click: _vm.markNotReceived }
                },
                [_c("i18n", [_vm._v("I did not receive this")])],
                1
              ),
              _c(
                "menu-item",
                {
                  attrs: { tag: "button", icon: "comment" },
                  on: {
                    click: function($event) {
                      return _vm.openModal("SendThankYouModal", {
                        toMemberID: _vm.payment.fromMemberID
                      });
                    }
                  }
                },
                [_c("i18n", [_vm._v("Send thank you")])],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  );
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-7eb8cde0_0", { source: "@media screen and (max-width: 768px) {\n.c-methods-container[data-v-7eb8cde0] {\n    display: none;\n}\n}\n.c-relative-to[data-v-7eb8cde0] {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n.c-relative-to[data-v-7eb8cde0] {\n    display: block;\n}\n}\n.c-amount-container[data-v-7eb8cde0] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 768px) {\n.c-amount-container[data-v-7eb8cde0] {\n    justify-content: flex-end;\n}\n}\n@media screen and (max-width: 768px) {\n.c-amount-container .c-not-received-badge[data-v-7eb8cde0] {\n    order: -1;\n}\n}\n.c-amount-pill-container[data-v-7eb8cde0] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 2px;\n}\n@media screen and (max-width: 768px) {\n.c-amount-pill-container[data-v-7eb8cde0] {\n    justify-content: flex-end;\n}\n}\n\n/*# sourceMappingURL=PaymentRowReceived.vue.map */", map: { "version": 3, "sources": ["PaymentRowReceived.vue", "frontend/views/containers/payments/PaymentRowReceived.vue"], "names": [], "mappings": "AAAA;ACwHA;IAEA,aAAA;ADvHE;AACF;AC0HA;EACA,aAAA;ADvHA;AACA;ACqHA;IAIA,cAAA;ADtHE;AACF;ACyHA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;ADtHA;AACA;ACkHA;IAMA,yBAAA;ADrHE;AACF;AACA;ACsHA;IAEA,SAAA;ADrHE;AACF;ACyHA;EACA,aAAA;EACA,WAAA;EACA,eAAA;ADtHA;AACA;ACkHA;IAMA,yBAAA;ADrHE;AACF;;AAEA,iDAAiD", "file": "PaymentRowReceived.vue", "sourcesContent": ["@media screen and (max-width: 768px) {\n  .c-methods-container {\n    display: none;\n  }\n}\n\n.c-relative-to {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n  .c-relative-to {\n    display: block;\n  }\n}\n\n.c-amount-container {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container {\n    justify-content: flex-end;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-amount-container .c-not-received-badge {\n    order: -1;\n  }\n}\n\n.c-amount-pill-container {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 2px;\n}\n@media screen and (max-width: 768px) {\n  .c-amount-pill-container {\n    justify-content: flex-end;\n  }\n}\n\n/*# sourceMappingURL=PaymentRowReceived.vue.map */", `<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellAmount')
      .c-amount-container
        strong {{ withGroupCurrency(payment.amount) }}
        payment-not-received-tooltip.c-not-received-badge(
          v-if='notReceived'
          :member='payment.displayName'
          :hideText='true'
        )

      .c-amount-pill-container
        i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container
        i18n.pill.is-neutral Manual

    template(slot='cellDate')
      .cpr-date.has-text-1 {{ humanDate(payment.date) }}

    template(slot='cellRelativeTo')
      .c-relative-to.has-text-1 {{ humanDate(payment.period) }}

    template(slot='cellActions')
      payment-actions-menu
        menu-item(
          tag='button'
          item-id='message'
          icon='info'
          @click='openModal("PaymentDetail", { id: payment.hash, period: payment.period })'
        )
          i18n Payment details

        menu-item(
          tag='button'
          item-id='message'
          icon='times'
          @click='markNotReceived'
        )
          i18n I did not receive this

        menu-item(
          tag='button'
          icon='comment'
          @click='openModal("SendThankYouModal", { toMemberID: payment.fromMemberID })'
        )
          i18n Send thank you
</template>

<script>
import sbp from '@sbp/sbp'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentActionsMenu from './payment-row/PaymentActionsMenu.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { L } from '../../../../frontend/common/common.js'

// TODO: handle showing PAYMENT_CANCELLED ?

export default ({
  name: 'PaymentRowReceived',
  components: {
    MenuItem,
    PaymentActionsMenu,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  mixins: [PaymentsMixin],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    notReceived () {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, props)
    },
    // TODO: make multiple payments
    async markNotReceived () {
      try {
        if (this.payment.data.status === PAYMENT_NOT_RECEIVED) {
          alert(L('Already marked as not received!'))
          return
        }
        await sbp('gi.actions/group/paymentUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_NOT_RECEIVED
            }
          }
        })
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-methods-container {
  @include phone {
    display: none;
  }
}

.c-relative-to {
  display: none;

  @include payment-table-desktop {
    display: block;
  }
}

.c-amount-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @include phone {
    justify-content: flex-end;
  }

  .c-not-received-badge {
    @include phone {
      order: -1;
    }
  }
}

.c-amount-pill-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 2px;

  @include phone {
    justify-content: flex-end;
  }
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-7eb8cde0";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  // Note: .cpr- is from payment-row
  payment-row(:payment='payment')
    template(slot='cellAmount')
      .c-amount-container
        strong {{ withGroupCurrency(payment.amount) }}
        payment-not-received-tooltip.c-not-received-badge(
          v-if='notReceived'
          :member='payment.displayName'
          :hideText='true'
        )

      .c-amount-pill-container
        i18n.pill.is-neutral.hide-tablet Manual

    template(slot='cellMethod')
      .c-methods-container
        i18n.pill.is-neutral Manual

    template(slot='cellDate')
      .cpr-date.has-text-1 {{ humanDate(payment.date) }}

    template(slot='cellRelativeTo')
      .c-relative-to.has-text-1 {{ humanDate(payment.period) }}

    template(slot='cellActions')
      payment-actions-menu
        menu-item(
          tag='button'
          item-id='message'
          icon='info'
          @click='openModal("PaymentDetail", { id: payment.hash, period: payment.period })'
        )
          i18n Payment details

        menu-item(
          tag='button'
          item-id='message'
          icon='times'
          @click='markNotReceived'
        )
          i18n I did not receive this

        menu-item(
          tag='button'
          icon='comment'
          @click='openModal("SendThankYouModal", { toMemberID: payment.fromMemberID })'
        )
          i18n Send thank you
</template>

<script>
import sbp from '@sbp/sbp'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import PaymentRow from './payment-row/PaymentRow.vue'
import PaymentActionsMenu from './payment-row/PaymentActionsMenu.vue'
import PaymentNotReceivedTooltip from './payment-row/PaymentNotReceivedTooltip.vue'
import PaymentsMixin from '../../../../frontend/views/containers/payments/PaymentsMixin.js'
import { MenuItem } from '../../../../frontend/views/components/menu/index.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { L } from '../../../../frontend/common/common.js'

// TODO: handle showing PAYMENT_CANCELLED ?

export default ({
  name: 'PaymentRowReceived',
  components: {
    MenuItem,
    PaymentActionsMenu,
    PaymentNotReceivedTooltip,
    PaymentRow
  },
  mixins: [PaymentsMixin],
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  computed: {
    notReceived () {
      return this.payment.data.status === PAYMENT_NOT_RECEIVED
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, props)
    },
    // TODO: make multiple payments
    async markNotReceived () {
      try {
        if (this.payment.data.status === PAYMENT_NOT_RECEIVED) {
          alert(L('Already marked as not received!'))
          return
        }
        await sbp('gi.actions/group/paymentUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            paymentHash: this.payment.hash,
            updatedProperties: {
              status: PAYMENT_NOT_RECEIVED
            }
          }
        })
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-methods-container {
  @include phone {
    display: none;
  }
}

.c-relative-to {
  display: none;

  @include payment-table-desktop {
    display: block;
  }
}

.c-amount-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @include phone {
    justify-content: flex-end;
  }

  .c-not-received-badge {
    @include phone {
      order: -1;
    }
  }
}

.c-amount-pill-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 2px;

  @include phone {
    justify-content: flex-end;
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__5,
  void 0,
  void 0
);
var PaymentRowReceived_default = __vue_component__5;

// frontend/views/containers/payments/PaymentsList.vue
var __vue_script__6 = {
  name: "PaymentsList",
  components: {
    AvatarUser: AvatarUser_default,
    Tooltip: Tooltip_default,
    PaymentRowTodo: PaymentRowTodo_default,
    PaymentRowSent: PaymentRowSent_default,
    PaymentRowReceived: PaymentRowReceived_default
  },
  props: {
    titles: {
      type: Object,
      required: true
    },
    paymentsList: {
      type: Array,
      required: true
    },
    paymentsType: {
      type: String,
      validator: (value) => ["PaymentRowTodo", "PaymentRowSent", "PaymentRowReceived"].includes(value),
      required: true
    },
    selectedTodoItems: {
      // a prop that is specifically for 'PaymentRowTodo' type.
      type: Array
    }
  },
  beforeMount() {
    esm_default("okTurtles.events/on", PAYMENTS_RECORDED, this.resetTodoSelectionInfo);
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", PAYMENTS_RECORDED, this.resetTodoSelectionInfo);
  },
  data() {
    return {
      form: {
        checkAll: false,
        selectedItemHashes: []
      }
    };
  },
  computed: {
    tableClass() {
      const map = {
        "PaymentRowTodo": "todo",
        "PaymentRowSent": "sent",
        "PaymentRowReceived": "received"
      };
      return `c-is-${map[this.paymentsType]}`;
    },
    allSelectedTodoItems() {
      return this.paymentsType === "PaymentRowTodo" ? this.form.selectedItemHashes.map((hash) => this.paymentsList.find((p) => p.hash === hash)).filter(Boolean) : null;
    }
  },
  watch: {
    "form.checkAll"(val) {
      const method = val ? "select" : "deselect";
      this.$refs.paymentItem.forEach((c) => c[method](true));
    },
    "paymentsType": {
      immediate: true,
      handler(type) {
        if (type === "PaymentRowTodo") {
          this.syncSelectedTodoItems();
        }
      }
    }
  },
  methods: {
    onItemChange(data) {
      if (this.paymentsType === "PaymentRowTodo") {
        const { hash, checked } = data;
        if (checked) {
          this.form.selectedItemHashes.push(hash);
        } else {
          this.form.selectedItemHashes = this.form.selectedItemHashes.filter((v) => v !== hash);
        }
        this.syncSelectedTodoItems();
      }
    },
    resetTodoSelectionInfo() {
      this.form.selectedItemHashes = [];
      this.syncSelectedTodoItems();
    },
    syncSelectedTodoItems() {
      this.$emit("update:selectedTodoItems", this.allSelectedTodoItems);
    }
  }
};
var __vue_render__6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "table",
    {
      staticClass: "table table-in-card c-payments",
      class: _vm.tableClass,
      attrs: { "data-test": "payList" }
    },
    [
      _c("thead", [
        _c("tr", [
          _vm.paymentsType === "PaymentRowTodo" ? _c("th", { staticClass: "c-th-check-all" }, [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.checkAll,
                    expression: "form.checkAll"
                  }
                ],
                staticClass: "input",
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.form.checkAll) ? _vm._i(_vm.form.checkAll, null) > -1 : _vm.form.checkAll
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.checkAll, $$el = $event.target, $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null, $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && _vm.$set(_vm.form, "checkAll", $$a.concat([$$v]));
                      } else {
                        $$i > -1 && _vm.$set(
                          _vm.form,
                          "checkAll",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        );
                      }
                    } else {
                      _vm.$set(_vm.form, "checkAll", $$c);
                    }
                  }
                }
              }),
              _c(
                "span",
                [
                  _c("i18n", { staticClass: "sr-only" }, [
                    _vm._v("Select payment item")
                  ])
                ],
                1
              )
            ])
          ]) : _vm._e(),
          _c("th", { staticClass: "c-th-who" }, [
            _vm._v(_vm._s(_vm.titles.one))
          ]),
          _c("th", { staticClass: "c-th-amount" }, [
            _vm._v(_vm._s(_vm.titles.two))
          ]),
          _c("th", { staticClass: "c-th-method hide-phone" }, [
            _vm._v(_vm._s(_vm.titles.three))
          ]),
          _c("th", { staticClass: "c-th-date hide-phone" }, [
            _vm._v(_vm._s(_vm.titles.four))
          ]),
          _vm.paymentsType !== "PaymentRowTodo" ? _c("th", { staticClass: "c-th-relative-to" }, [
            _vm._v(_vm._s(_vm.L("Relative to"))),
            _c("i", { staticClass: "icon-sort-down c-action-arrow" })
          ]) : _vm._e(),
          _vm.paymentsType !== "PaymentRowTodo" ? _c("th", { staticClass: "c-th-action" }) : _vm._e()
        ])
      ]),
      _c(
        "tbody",
        _vm._l(_vm.paymentsList, function(payment, index) {
          return _c(_vm.paymentsType, {
            key: payment.hash || index,
            ref: "paymentItem",
            refInFor: true,
            tag: "component",
            attrs: { payment },
            on: { change: _vm.onItemChange }
          });
        }),
        1
      )
    ]
  );
};
var __vue_staticRenderFns__6 = [];
__vue_render__6._withStripped = true;
var __vue_inject_styles__6 = function(inject) {
  if (!inject) return;
  inject("data-v-3ec280d3_0", { source: ".c-payments[data-v-3ec280d3] {\n  margin-top: 1rem;\n}\n@media screen and (max-width: 768px) {\n.c-payments th.c-th-amount[data-v-3ec280d3] {\n    text-align: right;\n}\n}\n@media screen and (min-width: 1290px) {\n.c-payments th.c-th-amount[data-v-3ec280d3] {\n    min-width: 4.5rem;\n}\n}\n@media screen and (min-width: 1290px) {\n.c-payments th.c-th-method[data-v-3ec280d3] {\n    min-width: 7.25rem;\n}\n}\n@media screen and (min-width: 1290px) {\n.c-payments th.c-th-date[data-v-3ec280d3] {\n    min-width: 6.25rem;\n}\n}\n@media screen and (min-width: 1290px) {\n.c-payments th.c-th-relative-to[data-v-3ec280d3] {\n    min-width: 5.25rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-payments[data-v-3ec280d3]  td.c-td-user {\n    padding-right: 0.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-payments[data-v-3ec280d3]  td.c-td-user {\n    max-width: 12rem;\n    min-width: 10rem;\n    overflow: hidden;\n}\n.c-payments[data-v-3ec280d3]  td.c-td-user .c-user {\n    max-width: inherit;\n}\n.c-payments[data-v-3ec280d3]  td.c-td-user .c-user .c-twrapper {\n    width: 100%;\n}\n}\n@media screen and (min-width: 1360px) {\n.c-payments[data-v-3ec280d3]  td.c-td-user {\n    max-width: 16rem;\n}\n}\n.c-payments.c-is-todo th.c-th-check-all[data-v-3ec280d3] {\n  width: 1.125rem;\n  font-size: 14px;\n}\n.c-payments.c-is-todo th.c-th-check-all .checkbox[data-v-3ec280d3] {\n  margin-right: 0.2rem;\n}\n.c-payments.c-is-todo th.c-th-who[data-v-3ec280d3] {\n  width: 40%;\n}\n@media screen and (min-width: 769px), print {\n.c-payments.c-is-todo th.c-th-who[data-v-3ec280d3] {\n    width: 35%;\n}\n}\n.c-payments.c-is-todo th.c-th-method[data-v-3ec280d3] {\n  width: 20%;\n}\n@media screen and (min-width: 769px), print {\n.c-payments.c-is-todo th.c-th-method[data-v-3ec280d3] {\n    padding-right: 0.5rem;\n    min-width: 8rem;\n}\n}\n.c-payments.c-is-todo th.c-th-amount[data-v-3ec280d3] {\n  width: 55%;\n}\n@media screen and (min-width: 769px), print {\n.c-payments.c-is-todo th.c-th-amount[data-v-3ec280d3] {\n    width: 16%;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-payments.c-is-todo th.c-th-date[data-v-3ec280d3] {\n    padding-right: 1.5rem;\n    min-width: 4.25rem;\n}\n}\n.c-payments:not(.c-is-todo) th.c-th-who[data-v-3ec280d3] {\n  width: 40%;\n}\n@media screen and (min-width: 769px), print {\n.c-payments:not(.c-is-todo) th.c-th-who[data-v-3ec280d3] {\n    width: 30%;\n}\n}\n.c-payments:not(.c-is-todo) th.c-th-amount[data-v-3ec280d3] {\n  width: 55%;\n}\n@media screen and (min-width: 769px), print {\n.c-payments:not(.c-is-todo) th.c-th-amount[data-v-3ec280d3] {\n    width: 20%;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-payments:not(.c-is-todo) th.c-th-amount[data-v-3ec280d3] {\n    width: 14%;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-payments:not(.c-is-todo) th.c-th-method[data-v-3ec280d3] {\n    width: 24%;\n    padding-right: 0.5rem;\n}\n}\n@media screen and (min-width: 1290px) {\n.c-payments:not(.c-is-todo) th.c-th-method[data-v-3ec280d3] {\n    width: 19%;\n}\n}\n.c-payments:not(.c-is-todo) th.c-th-date[data-v-3ec280d3] {\n  width: 18%;\n  padding-right: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-payments:not(.c-is-todo) th.c-th-date[data-v-3ec280d3] {\n    width: 22%;\n}\n}\n.c-payments:not(.c-is-todo) th.c-th-relative-to[data-v-3ec280d3] {\n  display: none;\n  padding-right: 0;\n}\n@media screen and (min-width: 1290px) {\n.c-payments:not(.c-is-todo) th.c-th-relative-to[data-v-3ec280d3] {\n    display: table-cell;\n    width: 14%;\n}\n}\n.c-payments:not(.c-is-todo) th.c-th-action[data-v-3ec280d3] {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n.c-payments:not(.c-is-todo) th.c-th-action[data-v-3ec280d3] {\n    display: table-cell;\n    width: 5%;\n}\n}\n.c-action-arrow[data-v-3ec280d3] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  transform: translateY(-2px);\n}\n\n/*# sourceMappingURL=PaymentsList.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentsList.vue", "PaymentsList.vue"], "names": [], "mappings": "AAgJA;EACA,gBAAA;AC/IA;AACA;ADgJA;IAEA,iBAAA;AC/IE;AACF;AACA;AD2IA;IAMA,iBAAA;AC9IE;AACF;AACA;ADgJA;IAEA,kBAAA;AC/IE;AACF;AACA;ADiJA;IAEA,kBAAA;AChJE;AACF;AACA;ADkJA;IAEA,kBAAA;ACjJE;AACF;AACA;ADmJA;IAEA,qBAAA;AClJE;AACF;AACA;AD8IA;IAMA,gBAAA;IACA,gBAAA;IACA,gBAAA;ACjJE;ADmJF;IACA,kBAAA;ACjJE;ADmJF;IACA,WAAA;ACjJE;AACF;AACA;ADiIA;IAoBA,gBAAA;AClJE;AACF;ADsJA;EACA,eAAA;EACA,eAAA;ACpJA;ADsJA;EACA,oBAAA;ACpJA;ADwJA;EACA,UAAA;ACtJA;AACA;ADoJA;IAIA,UAAA;ACrJE;AACF;ADwJA;EACA,UAAA;ACtJA;AACA;ADoJA;IAIA,qBAAA;IACA,eAAA;ACrJE;AACF;ADwJA;EACA,UAAA;ACtJA;AACA;ADoJA;IAIA,UAAA;ACrJE;AACF;AACA;ADuJA;IAEA,qBAAA;IACA,kBAAA;ACtJE;AACF;AD2JA;EACA,UAAA;ACzJA;AACA;ADuJA;IAIA,UAAA;ACxJE;AACF;AD2JA;EACA,UAAA;ACzJA;AACA;ADuJA;IAIA,UAAA;ACxJE;AACF;AACA;ADkJA;IAQA,UAAA;ACvJE;AACF;AACA;ADyJA;IAEA,UAAA;IACA,qBAAA;ACxJE;AACF;AACA;ADmJA;IAOA,UAAA;ACvJE;AACF;AD0JA;EACA,UAAA;EACA,qBAAA;ACxJA;AACA;ADqJA;IAKA,UAAA;ACvJE;AACF;AD0JA;EACA,aAAA;EACA,gBAAA;ACxJA;AACA;ADqJA;IAKA,mBAAA;IACA,UAAA;ACvJE;AACF;AD0JA;EACA,aAAA;ACxJA;AACA;ADsJA;IAIA,mBAAA;IACA,SAAA;ACvJE;AACF;AD4JA;EACA,qBAAA;EACA,mBAAA;EACA,2BAAA;ACzJA;;AAEA,2CAA2C", "file": "PaymentsList.vue", "sourcesContent": [`<template lang='pug'>
table.table.table-in-card.c-payments(data-test='payList' :class='tableClass')
  thead
    tr
      th.c-th-check-all(v-if='paymentsType === "PaymentRowTodo"')
        label.checkbox
          input.input(
            type='checkbox'
            v-model='form.checkAll'
          )
          span
            i18n.sr-only Select payment item
      th.c-th-who {{ titles.one }}
      th.c-th-amount {{ titles.two }}
      th.c-th-method.hide-phone {{ titles.three }}
      th.c-th-date.hide-phone {{ titles.four }}
      th.c-th-relative-to(v-if='paymentsType !== "PaymentRowTodo"')
        | {{ L('Relative to') }}
        i.icon-sort-down.c-action-arrow
      th.c-th-action(v-if='paymentsType !== "PaymentRowTodo"')
  tbody
    component(
      v-for='(payment, index) in paymentsList'
      ref='paymentItem'
      :key='payment.hash || index'
      :payment='payment'
      :is='paymentsType'
      @change='onItemChange'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import PaymentRowTodo from './PaymentRowTodo.vue'
import PaymentRowSent from './PaymentRowSent.vue'
import PaymentRowReceived from './PaymentRowReceived.vue'
import { PAYMENTS_RECORDED } from '../../../../frontend/utils/events.js'

export default ({
  name: 'PaymentsList',
  components: {
    AvatarUser,
    Tooltip,
    PaymentRowTodo,
    PaymentRowSent,
    PaymentRowReceived
  },
  props: {
    titles: {
      type: Object,
      required: true
    },
    paymentsList: {
      type: Array,
      required: true
    },
    paymentsType: {
      type: String,
      validator: (value) => ['PaymentRowTodo', 'PaymentRowSent', 'PaymentRowReceived'].includes(value),
      required: true
    },
    selectedTodoItems: {
      // a prop that is specifically for 'PaymentRowTodo' type.
      type: Array
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', PAYMENTS_RECORDED, this.resetTodoSelectionInfo)
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', PAYMENTS_RECORDED, this.resetTodoSelectionInfo)
  },
  data () {
    return {
      form: {
        checkAll: false,
        selectedItemHashes: []
      }
    }
  },
  computed: {
    tableClass () {
      const map = {
        'PaymentRowTodo': 'todo',
        'PaymentRowSent': 'sent',
        'PaymentRowReceived': 'received'
      }

      return \`c-is-\${map[this.paymentsType]}\`
    },
    allSelectedTodoItems () {
      return this.paymentsType === 'PaymentRowTodo'
        ? this.form.selectedItemHashes
          .map(hash => this.paymentsList.find(p => p.hash === hash))
          .filter(Boolean)
        : null
    }
  },
  watch: {
    'form.checkAll' (val) {
      const method = val ? 'select' : 'deselect'

      this.$refs.paymentItem.forEach(c => c[method](true))
    },
    'paymentsType': {
      immediate: true,
      handler (type) {
        if (type === 'PaymentRowTodo') {
          this.syncSelectedTodoItems()
        }
      }
    }
  },
  methods: {
    onItemChange (data) {
      if (this.paymentsType === 'PaymentRowTodo') {
        const { hash, checked } = data

        if (checked) {
          this.form.selectedItemHashes.push(hash)
        } else {
          this.form.selectedItemHashes = this.form.selectedItemHashes
            .filter(v => v !== hash)
        }

        this.syncSelectedTodoItems()
      }
    },
    resetTodoSelectionInfo () {
      this.form.selectedItemHashes = []
      this.syncSelectedTodoItems()
    },
    syncSelectedTodoItems () {
      this.$emit('update:selectedTodoItems', this.allSelectedTodoItems)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payments {
  margin-top: 1rem;

  th.c-th-amount {
    @include phone {
      text-align: right;
    }

    @include payment-table-desktop {
      min-width: 4.5rem;
    }
  }

  th.c-th-method {
    @include payment-table-desktop {
      min-width: 7.25rem;
    }
  }

  th.c-th-date {
    @include payment-table-desktop {
      min-width: 6.25rem;
    }
  }

  th.c-th-relative-to {
    @include payment-table-desktop {
      min-width: 5.25rem;
    }
  }

  ::v-deep td.c-td-user {
    @include tablet {
      padding-right: 0.5rem;
    }

    @include desktop {
      max-width: 12rem;
      min-width: 10rem;
      overflow: hidden;

      .c-user {
        max-width: inherit;

        .c-twrapper {
          width: 100%;
        }
      }
    }

    @include from (1360px) {
      max-width: 16rem;
    }
  }

  &.c-is-todo {
    th.c-th-check-all {
      width: 1.125rem;
      font-size: 14px; // font-size here has to be fixed. Otherwise, it leads to a UI bug(The check icon moving downwards)

      .checkbox {
        margin-right: 0.2rem;
      }
    }

    th.c-th-who {
      width: 40%;

      @include tablet {
        width: 35%;
      }
    }

    th.c-th-method {
      width: 20%;

      @include tablet {
        padding-right: 0.5rem;
        min-width: 8rem;
      }
    }

    th.c-th-amount {
      width: 55%;

      @include tablet {
        width: 16%;
      }
    }

    th.c-th-date {
      @include desktop {
        padding-right: 1.5rem;
        min-width: 4.25rem;
      }
    }
  }

  &:not(.c-is-todo) {
    th.c-th-who {
      width: 40%;

      @include tablet {
        width: 30%;
      }
    }

    th.c-th-amount {
      width: 55%;

      @include tablet {
        width: 20%;
      }

      @include desktop {
        width: 14%;
      }
    }

    th.c-th-method {
      @include tablet {
        width: 24%;
        padding-right: 0.5rem;
      }

      @include payment-table-desktop {
        width: 19%;
      }
    }

    th.c-th-date {
      width: 18%;
      padding-right: 0.5rem;

      @include desktop {
        width: 22%;
      }
    }

    th.c-th-relative-to {
      display: none;
      padding-right: 0;

      @include payment-table-desktop {
        display: table-cell;
        width: 14%;
      }
    }

    th.c-th-action {
      display: none;

      @include payment-table-desktop {
        display: table-cell;
        width: 5%;
      }
    }
  }
}

.c-action-arrow {
  display: inline-block;
  margin-left: 0.5rem;
  transform: translateY(-2px);
}
</style>
`, ".c-payments {\n  margin-top: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-payments th.c-th-amount {\n    text-align: right;\n  }\n}\n@media screen and (min-width: 1290px) {\n  .c-payments th.c-th-amount {\n    min-width: 4.5rem;\n  }\n}\n@media screen and (min-width: 1290px) {\n  .c-payments th.c-th-method {\n    min-width: 7.25rem;\n  }\n}\n@media screen and (min-width: 1290px) {\n  .c-payments th.c-th-date {\n    min-width: 6.25rem;\n  }\n}\n@media screen and (min-width: 1290px) {\n  .c-payments th.c-th-relative-to {\n    min-width: 5.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-payments ::v-deep td.c-td-user {\n    padding-right: 0.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-payments ::v-deep td.c-td-user {\n    max-width: 12rem;\n    min-width: 10rem;\n    overflow: hidden;\n  }\n  .c-payments ::v-deep td.c-td-user .c-user {\n    max-width: inherit;\n  }\n  .c-payments ::v-deep td.c-td-user .c-user .c-twrapper {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1360px) {\n  .c-payments ::v-deep td.c-td-user {\n    max-width: 16rem;\n  }\n}\n.c-payments.c-is-todo th.c-th-check-all {\n  width: 1.125rem;\n  font-size: 14px;\n}\n.c-payments.c-is-todo th.c-th-check-all .checkbox {\n  margin-right: 0.2rem;\n}\n.c-payments.c-is-todo th.c-th-who {\n  width: 40%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payments.c-is-todo th.c-th-who {\n    width: 35%;\n  }\n}\n.c-payments.c-is-todo th.c-th-method {\n  width: 20%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payments.c-is-todo th.c-th-method {\n    padding-right: 0.5rem;\n    min-width: 8rem;\n  }\n}\n.c-payments.c-is-todo th.c-th-amount {\n  width: 55%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payments.c-is-todo th.c-th-amount {\n    width: 16%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-payments.c-is-todo th.c-th-date {\n    padding-right: 1.5rem;\n    min-width: 4.25rem;\n  }\n}\n.c-payments:not(.c-is-todo) th.c-th-who {\n  width: 40%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payments:not(.c-is-todo) th.c-th-who {\n    width: 30%;\n  }\n}\n.c-payments:not(.c-is-todo) th.c-th-amount {\n  width: 55%;\n}\n@media screen and (min-width: 769px), print {\n  .c-payments:not(.c-is-todo) th.c-th-amount {\n    width: 20%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-payments:not(.c-is-todo) th.c-th-amount {\n    width: 14%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-payments:not(.c-is-todo) th.c-th-method {\n    width: 24%;\n    padding-right: 0.5rem;\n  }\n}\n@media screen and (min-width: 1290px) {\n  .c-payments:not(.c-is-todo) th.c-th-method {\n    width: 19%;\n  }\n}\n.c-payments:not(.c-is-todo) th.c-th-date {\n  width: 18%;\n  padding-right: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-payments:not(.c-is-todo) th.c-th-date {\n    width: 22%;\n  }\n}\n.c-payments:not(.c-is-todo) th.c-th-relative-to {\n  display: none;\n  padding-right: 0;\n}\n@media screen and (min-width: 1290px) {\n  .c-payments:not(.c-is-todo) th.c-th-relative-to {\n    display: table-cell;\n    width: 14%;\n  }\n}\n.c-payments:not(.c-is-todo) th.c-th-action {\n  display: none;\n}\n@media screen and (min-width: 1290px) {\n  .c-payments:not(.c-is-todo) th.c-th-action {\n    display: table-cell;\n    width: 5%;\n  }\n}\n\n.c-action-arrow {\n  display: inline-block;\n  margin-left: 0.5rem;\n  transform: translateY(-2px);\n}\n\n/*# sourceMappingURL=PaymentsList.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__6 = "data-v-3ec280d3";
var __vue_module_identifier__6 = void 0;
var __vue_is_functional_template__6 = false;
function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
table.table.table-in-card.c-payments(data-test='payList' :class='tableClass')
  thead
    tr
      th.c-th-check-all(v-if='paymentsType === "PaymentRowTodo"')
        label.checkbox
          input.input(
            type='checkbox'
            v-model='form.checkAll'
          )
          span
            i18n.sr-only Select payment item
      th.c-th-who {{ titles.one }}
      th.c-th-amount {{ titles.two }}
      th.c-th-method.hide-phone {{ titles.three }}
      th.c-th-date.hide-phone {{ titles.four }}
      th.c-th-relative-to(v-if='paymentsType !== "PaymentRowTodo"')
        | {{ L('Relative to') }}
        i.icon-sort-down.c-action-arrow
      th.c-th-action(v-if='paymentsType !== "PaymentRowTodo"')
  tbody
    component(
      v-for='(payment, index) in paymentsList'
      ref='paymentItem'
      :key='payment.hash || index'
      :payment='payment'
      :is='paymentsType'
      @change='onItemChange'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import PaymentRowTodo from './PaymentRowTodo.vue'
import PaymentRowSent from './PaymentRowSent.vue'
import PaymentRowReceived from './PaymentRowReceived.vue'
import { PAYMENTS_RECORDED } from '../../../../frontend/utils/events.js'

export default ({
  name: 'PaymentsList',
  components: {
    AvatarUser,
    Tooltip,
    PaymentRowTodo,
    PaymentRowSent,
    PaymentRowReceived
  },
  props: {
    titles: {
      type: Object,
      required: true
    },
    paymentsList: {
      type: Array,
      required: true
    },
    paymentsType: {
      type: String,
      validator: (value) => ['PaymentRowTodo', 'PaymentRowSent', 'PaymentRowReceived'].includes(value),
      required: true
    },
    selectedTodoItems: {
      // a prop that is specifically for 'PaymentRowTodo' type.
      type: Array
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', PAYMENTS_RECORDED, this.resetTodoSelectionInfo)
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', PAYMENTS_RECORDED, this.resetTodoSelectionInfo)
  },
  data () {
    return {
      form: {
        checkAll: false,
        selectedItemHashes: []
      }
    }
  },
  computed: {
    tableClass () {
      const map = {
        'PaymentRowTodo': 'todo',
        'PaymentRowSent': 'sent',
        'PaymentRowReceived': 'received'
      }

      return \`c-is-\${map[this.paymentsType]}\`
    },
    allSelectedTodoItems () {
      return this.paymentsType === 'PaymentRowTodo'
        ? this.form.selectedItemHashes
          .map(hash => this.paymentsList.find(p => p.hash === hash))
          .filter(Boolean)
        : null
    }
  },
  watch: {
    'form.checkAll' (val) {
      const method = val ? 'select' : 'deselect'

      this.$refs.paymentItem.forEach(c => c[method](true))
    },
    'paymentsType': {
      immediate: true,
      handler (type) {
        if (type === 'PaymentRowTodo') {
          this.syncSelectedTodoItems()
        }
      }
    }
  },
  methods: {
    onItemChange (data) {
      if (this.paymentsType === 'PaymentRowTodo') {
        const { hash, checked } = data

        if (checked) {
          this.form.selectedItemHashes.push(hash)
        } else {
          this.form.selectedItemHashes = this.form.selectedItemHashes
            .filter(v => v !== hash)
        }

        this.syncSelectedTodoItems()
      }
    },
    resetTodoSelectionInfo () {
      this.form.selectedItemHashes = []
      this.syncSelectedTodoItems()
    },
    syncSelectedTodoItems () {
      this.$emit('update:selectedTodoItems', this.allSelectedTodoItems)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-payments {
  margin-top: 1rem;

  th.c-th-amount {
    @include phone {
      text-align: right;
    }

    @include payment-table-desktop {
      min-width: 4.5rem;
    }
  }

  th.c-th-method {
    @include payment-table-desktop {
      min-width: 7.25rem;
    }
  }

  th.c-th-date {
    @include payment-table-desktop {
      min-width: 6.25rem;
    }
  }

  th.c-th-relative-to {
    @include payment-table-desktop {
      min-width: 5.25rem;
    }
  }

  ::v-deep td.c-td-user {
    @include tablet {
      padding-right: 0.5rem;
    }

    @include desktop {
      max-width: 12rem;
      min-width: 10rem;
      overflow: hidden;

      .c-user {
        max-width: inherit;

        .c-twrapper {
          width: 100%;
        }
      }
    }

    @include from (1360px) {
      max-width: 16rem;
    }
  }

  &.c-is-todo {
    th.c-th-check-all {
      width: 1.125rem;
      font-size: 14px; // font-size here has to be fixed. Otherwise, it leads to a UI bug(The check icon moving downwards)

      .checkbox {
        margin-right: 0.2rem;
      }
    }

    th.c-th-who {
      width: 40%;

      @include tablet {
        width: 35%;
      }
    }

    th.c-th-method {
      width: 20%;

      @include tablet {
        padding-right: 0.5rem;
        min-width: 8rem;
      }
    }

    th.c-th-amount {
      width: 55%;

      @include tablet {
        width: 16%;
      }
    }

    th.c-th-date {
      @include desktop {
        padding-right: 1.5rem;
        min-width: 4.25rem;
      }
    }
  }

  &:not(.c-is-todo) {
    th.c-th-who {
      width: 40%;

      @include tablet {
        width: 30%;
      }
    }

    th.c-th-amount {
      width: 55%;

      @include tablet {
        width: 20%;
      }

      @include desktop {
        width: 14%;
      }
    }

    th.c-th-method {
      @include tablet {
        width: 24%;
        padding-right: 0.5rem;
      }

      @include payment-table-desktop {
        width: 19%;
      }
    }

    th.c-th-date {
      width: 18%;
      padding-right: 0.5rem;

      @include desktop {
        width: 22%;
      }
    }

    th.c-th-relative-to {
      display: none;
      padding-right: 0;

      @include payment-table-desktop {
        display: table-cell;
        width: 14%;
      }
    }

    th.c-th-action {
      display: none;

      @include payment-table-desktop {
        display: table-cell;
        width: 5%;
      }
    }
  }
}

.c-action-arrow {
  display: inline-block;
  margin-left: 0.5rem;
  transform: translateY(-2px);
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
var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6(
  { render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 },
  __vue_inject_styles__6,
  __vue_script__6,
  __vue_scope_id__6,
  __vue_is_functional_template__6,
  __vue_module_identifier__6,
  false,
  __vue_create_injector__6,
  void 0,
  void 0
);
var PaymentsList_default = __vue_component__6;

// frontend/views/containers/payments/PaymentNextDistributionPill.vue
var __vue_script__7 = {
  name: "PaymentNextDistributionPill",
  computed: {
    ...mapGetters([
      "groupSettings",
      "currentPaymentPeriod",
      "dueDateForPeriod"
    ]),
    nextDistributionDateShort() {
      const nextDisDate = this.dueDateForPeriod(this.currentPaymentPeriod);
      return humanDate(nextDisDate, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  }
};
var __vue_render__7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i18n",
    {
      staticClass: "c-distribution-chip pill is-primary",
      attrs: { args: { dDate: _vm.nextDistributionDateShort } }
    },
    [_vm._v("Next distribution Date: {dDate}")]
  );
};
var __vue_staticRenderFns__7 = [];
__vue_render__7._withStripped = true;
var __vue_inject_styles__7 = function(inject) {
  if (!inject) return;
  inject("data-v-4a2b7c78_0", { source: ".c-distribution-chip[data-v-4a2b7c78] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1.6rem;\n}\n\n/*# sourceMappingURL=PaymentNextDistributionPill.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentNextDistributionPill.vue", "PaymentNextDistributionPill.vue"], "names": [], "mappings": "AAgCA;EACA,wBAAA;EACA,qBAAA;AC/BA;;AAEA,0DAA0D", "file": "PaymentNextDistributionPill.vue", "sourcesContent": [`<template lang="pug">
  i18n.c-distribution-chip.pill.is-primary(
    :args='{ dDate: nextDistributionDateShort }'
  ) Next distribution Date: {dDate}
</template>

<script>
import { mapGetters } from 'vuex'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'PaymentNextDistributionPill',
  computed: {
    ...mapGetters([
      'groupSettings',
      'currentPaymentPeriod',
      'dueDateForPeriod'
    ]),
    nextDistributionDateShort () {
      const nextDisDate = this.dueDateForPeriod(this.currentPaymentPeriod)
      return humanDate(nextDisDate, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
})
<\/script>

<style lang="scss" scoped>
.c-distribution-chip {
  padding: 0.25rem 0.75rem;
  border-radius: 1.6rem;
}
</style>
`, ".c-distribution-chip {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1.6rem;\n}\n\n/*# sourceMappingURL=PaymentNextDistributionPill.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__7 = "data-v-4a2b7c78";
var __vue_module_identifier__7 = void 0;
var __vue_is_functional_template__7 = false;
function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
  i18n.c-distribution-chip.pill.is-primary(
    :args='{ dDate: nextDistributionDateShort }'
  ) Next distribution Date: {dDate}
</template>

<script>
import { mapGetters } from 'vuex'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'PaymentNextDistributionPill',
  computed: {
    ...mapGetters([
      'groupSettings',
      'currentPaymentPeriod',
      'dueDateForPeriod'
    ]),
    nextDistributionDateShort () {
      const nextDisDate = this.dueDateForPeriod(this.currentPaymentPeriod)
      return humanDate(nextDisDate, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
})
<\/script>

<style lang="scss" scoped>
.c-distribution-chip {
  padding: 0.25rem 0.75rem;
  border-radius: 1.6rem;
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
var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7(
  { render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7 },
  __vue_inject_styles__7,
  __vue_script__7,
  __vue_scope_id__7,
  __vue_is_functional_template__7,
  __vue_module_identifier__7,
  false,
  __vue_create_injector__7,
  void 0,
  void 0
);
var PaymentNextDistributionPill_default = __vue_component__7;

// frontend/views/containers/payments/PaymentsPagination.vue
var __vue_script__8 = {
  name: "PaymentsPagination",
  props: {
    count: Number,
    page: Number,
    rowsPerPage: Number
    // @change-page('next'|'prev')
    // @change-rows-per-page(String) // Page Number
  },
  data: () => ({
    config: {
      options: [10, 20, 30]
    }
  }),
  computed: {
    maxPages() {
      return Math.ceil(this.count / this.rowsPerPage);
    },
    paginationInfo() {
      const start = this.rowsPerPage * this.page;
      return {
        begin: start + 1,
        end: Math.min(start + this.rowsPerPage, this.count),
        count: this.count
      };
    }
  },
  methods: {
    updatePagination(e) {
      this.$emit("change-rows-per-page", +e.target.value);
    },
    previousPage() {
      this.$emit("change-page", "prev");
    },
    nextPage() {
      this.$emit("change-page", "next");
    }
  }
};
var __vue_render__8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-pagination" }, [
    _c(
      "div",
      { staticClass: "c-pagination-settings hide-phone" },
      [
        _c(
          "i18n",
          {
            staticClass: "has-text-1",
            attrs: { tag: "span", "aria-hidden": "true" }
          },
          [_vm._v("Show:")]
        ),
        _c(
          "label",
          { staticClass: "selectsolo c-select" },
          [
            _c("i18n", { staticClass: "sr-only" }, [_vm._v("Show per page")]),
            _c(
              "select",
              {
                staticClass: "select",
                domProps: { value: _vm.rowsPerPage },
                on: { change: _vm.updatePagination }
              },
              _vm._l(_vm.config.options, function(count) {
                return _c(
                  "option",
                  { attrs: { index: count }, domProps: { value: count } },
                  [_vm._v(_vm._s(count + " " + _vm.L("results")))]
                );
              }),
              0
            )
          ],
          1
        ),
        _c(
          "i18n",
          {
            staticClass: "has-text-1",
            attrs: { tag: "span", "aria-hidden": "true" }
          },
          [_vm._v("per page")]
        )
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "c-pagination-controls" },
      [
        _c(
          "i18n",
          {
            staticClass: "has-text-1",
            attrs: {
              tag: "p",
              "data-test": "paginationInfo",
              args: {
                range: '<span class="has-text-0">' + _vm.paginationInfo.begin + " - " + _vm.paginationInfo.end + "</span>",
                count: '<span class="has-text-0">' + _vm.paginationInfo.count + "</span>"
              }
            }
          },
          [_vm._v("{range} out of {count}")]
        ),
        _c(
          "button",
          {
            staticClass: "is-icon-small c-btn",
            attrs: {
              disabled: _vm.page === 0,
              "aria-label": _vm.L("Previous page")
            },
            on: { click: _vm.previousPage }
          },
          [_c("i", { staticClass: "icon-chevron-left" })]
        ),
        _c(
          "button",
          {
            staticClass: "is-icon-small c-btn",
            attrs: {
              disabled: _vm.page + 1 >= _vm.maxPages,
              "aria-label": _vm.L("Next page")
            },
            on: { click: _vm.nextPage }
          },
          [_c("i", { staticClass: "icon-chevron-right" })]
        )
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__8 = [];
__vue_render__8._withStripped = true;
var __vue_inject_styles__8 = function(inject) {
  if (!inject) return;
  inject("data-v-702d27b5_0", { source: ".c-pagination-settings[data-v-702d27b5],\n.c-pagination-controls[data-v-702d27b5],\n.c-previous-next[data-v-702d27b5] {\n  display: flex;\n  align-items: center;\n}\n.c-select[data-v-702d27b5] {\n  margin: 0 0.5rem;\n}\n.c-btn[data-v-702d27b5] {\n  background-color: var(--general_2);\n}\n.c-btn[disabled][data-v-702d27b5] {\n  background-color: var(--general_2);\n  color: var(--general_0);\n}\n.c-btn[data-v-702d27b5]:hover, .c-btn[data-v-702d27b5]:focus {\n  background-color: var(--general_0);\n}\n.c-btn:first-child i[data-v-702d27b5] {\n  margin-left: -1px;\n}\n.c-btn:last-child i[data-v-702d27b5] {\n  margin-right: -1px;\n}\n@media screen and (min-width: 769px), print {\n.c-btn[data-v-702d27b5] {\n    margin: 0 0.25rem;\n}\n.c-btn[data-v-702d27b5]:first-of-type {\n    margin-left: 1rem;\n}\n}\n@media screen and (max-width: 768px) {\n.c-pagination-controls[data-v-702d27b5] {\n    width: 100%;\n    justify-content: space-between;\n}\n.c-btn[data-v-702d27b5]:first-of-type {\n    order: -1;\n    margin-top: 0;\n}\n}\n\n/*# sourceMappingURL=PaymentsPagination.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/PaymentsPagination.vue", "PaymentsPagination.vue"], "names": [], "mappings": "AA2FA;;;EAGA,aAAA;EACA,mBAAA;AC1FA;AD6FA;EACA,gBAAA;AC1FA;AD6FA;EACA,kCAAA;AC1FA;AD4FA;EACA,kCAAA;EACA,uBAAA;AC1FA;AD6FA;EAEA,kCAAA;AC5FA;AD+FA;EACA,iBAAA;AC7FA;ADgGA;EACA,kBAAA;AC9FA;AACA;AD2EA;IAsBA,iBAAA;AC9FE;ADgGF;IACA,iBAAA;AC9FE;AACF;AAEA;ADiGA;IACA,WAAA;IACA,8BAAA;AC/FE;ADkGF;IACA,SAAA;IACA,aAAA;AChGE;AACF;;AAEA,iDAAiD", "file": "PaymentsPagination.vue", "sourcesContent": [`<template lang='pug'>
.c-pagination
  .c-pagination-settings.hide-phone
    i18n.has-text-1(
      tag='span' aria-hidden='true'
    ) Show:
    label.selectsolo.c-select
      i18n.sr-only Show per page
      select.select(
        :value='rowsPerPage'
        @change='updatePagination'
      )
        option(
          v-for='count in config.options'
          :index='count'
          :value='count'
        ) {{ \`\${count} \${L('results')}\` }}
    i18n.has-text-1(
      tag='span' aria-hidden='true'
    ) per page

  .c-pagination-controls
    i18n.has-text-1(
      tag='p'
      data-test='paginationInfo'
      :args='{ \\
        range: \`<span class="has-text-0">\${paginationInfo.begin} - \${paginationInfo.end}</span>\`, \\
        count: \`<span class="has-text-0">\${paginationInfo.count}</span>\` \\
      }'
    ) {range} out of {count}

    button.is-icon-small.c-btn(
      :disabled='page === 0'
      @click='previousPage'
      :aria-label='L("Previous page")'
    )
      i.icon-chevron-left

    button.is-icon-small.c-btn(
      :disabled='page + 1 >= maxPages'
      @click='nextPage'
      :aria-label='L("Next page")'
    )
      i.icon-chevron-right
</template>

<script>
export default ({
  name: 'PaymentsPagination',
  props: {
    count: Number,
    page: Number,
    rowsPerPage: Number
    // @change-page('next'|'prev')
    // @change-rows-per-page(String) // Page Number
  },
  data: () => ({
    config: {
      options: [10, 20, 30]
    }
  }),
  computed: {
    maxPages () {
      return Math.ceil(this.count / this.rowsPerPage)
    },
    paginationInfo () {
      const start = this.rowsPerPage * this.page
      return {
        begin: start + 1,
        end: Math.min(start + this.rowsPerPage, this.count),
        count: this.count
      }
    }
  },
  methods: {
    updatePagination (e) {
      this.$emit('change-rows-per-page', +e.target.value)
    },
    previousPage () {
      this.$emit('change-page', 'prev')
    },
    nextPage () {
      this.$emit('change-page', 'next')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-pagination-settings,
.c-pagination-controls,
.c-previous-next {
  display: flex;
  align-items: center;
}

.c-select {
  margin: 0 0.5rem;
}

.c-btn {
  background-color: $general_2;

  &[disabled] {
    background-color: $general_2;
    color: $general_0;
  }

  &:hover,
  &:focus {
    background-color: $general_0;
  }

  &:first-child i {
    margin-left: -1px;
  }

  &:last-child i {
    margin-right: -1px;
  }

  @include tablet {
    margin: 0 0.25rem;

    &:first-of-type {
      margin-left: 1rem;
    }
  }
}

@include phone {
  .c-pagination-controls {
    width: 100%;
    justify-content: space-between;
  }

  .c-btn:first-of-type {
    order: -1;
    margin-top: 0;
  }
}
</style>
`, ".c-pagination-settings,\n.c-pagination-controls,\n.c-previous-next {\n  display: flex;\n  align-items: center;\n}\n\n.c-select {\n  margin: 0 0.5rem;\n}\n\n.c-btn {\n  background-color: var(--general_2);\n}\n.c-btn[disabled] {\n  background-color: var(--general_2);\n  color: var(--general_0);\n}\n.c-btn:hover, .c-btn:focus {\n  background-color: var(--general_0);\n}\n.c-btn:first-child i {\n  margin-left: -1px;\n}\n.c-btn:last-child i {\n  margin-right: -1px;\n}\n@media screen and (min-width: 769px), print {\n  .c-btn {\n    margin: 0 0.25rem;\n  }\n  .c-btn:first-of-type {\n    margin-left: 1rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .c-pagination-controls {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .c-btn:first-of-type {\n    order: -1;\n    margin-top: 0;\n  }\n}\n\n/*# sourceMappingURL=PaymentsPagination.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__8 = "data-v-702d27b5";
var __vue_module_identifier__8 = void 0;
var __vue_is_functional_template__8 = false;
function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-pagination
  .c-pagination-settings.hide-phone
    i18n.has-text-1(
      tag='span' aria-hidden='true'
    ) Show:
    label.selectsolo.c-select
      i18n.sr-only Show per page
      select.select(
        :value='rowsPerPage'
        @change='updatePagination'
      )
        option(
          v-for='count in config.options'
          :index='count'
          :value='count'
        ) {{ \`\${count} \${L('results')}\` }}
    i18n.has-text-1(
      tag='span' aria-hidden='true'
    ) per page

  .c-pagination-controls
    i18n.has-text-1(
      tag='p'
      data-test='paginationInfo'
      :args='{ \\
        range: \`<span class="has-text-0">\${paginationInfo.begin} - \${paginationInfo.end}</span>\`, \\
        count: \`<span class="has-text-0">\${paginationInfo.count}</span>\` \\
      }'
    ) {range} out of {count}

    button.is-icon-small.c-btn(
      :disabled='page === 0'
      @click='previousPage'
      :aria-label='L("Previous page")'
    )
      i.icon-chevron-left

    button.is-icon-small.c-btn(
      :disabled='page + 1 >= maxPages'
      @click='nextPage'
      :aria-label='L("Next page")'
    )
      i.icon-chevron-right
</template>

<script>
export default ({
  name: 'PaymentsPagination',
  props: {
    count: Number,
    page: Number,
    rowsPerPage: Number
    // @change-page('next'|'prev')
    // @change-rows-per-page(String) // Page Number
  },
  data: () => ({
    config: {
      options: [10, 20, 30]
    }
  }),
  computed: {
    maxPages () {
      return Math.ceil(this.count / this.rowsPerPage)
    },
    paginationInfo () {
      const start = this.rowsPerPage * this.page
      return {
        begin: start + 1,
        end: Math.min(start + this.rowsPerPage, this.count),
        count: this.count
      }
    }
  },
  methods: {
    updatePagination (e) {
      this.$emit('change-rows-per-page', +e.target.value)
    },
    previousPage () {
      this.$emit('change-page', 'prev')
    },
    nextPage () {
      this.$emit('change-page', 'next')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-pagination-settings,
.c-pagination-controls,
.c-previous-next {
  display: flex;
  align-items: center;
}

.c-select {
  margin: 0 0.5rem;
}

.c-btn {
  background-color: $general_2;

  &[disabled] {
    background-color: $general_2;
    color: $general_0;
  }

  &:hover,
  &:focus {
    background-color: $general_0;
  }

  &:first-child i {
    margin-left: -1px;
  }

  &:last-child i {
    margin-right: -1px;
  }

  @include tablet {
    margin: 0 0.25rem;

    &:first-of-type {
      margin-left: 1rem;
    }
  }
}

@include phone {
  .c-pagination-controls {
    width: 100%;
    justify-content: space-between;
  }

  .c-btn:first-of-type {
    order: -1;
    margin-top: 0;
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
var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8(
  { render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8 },
  __vue_inject_styles__8,
  __vue_script__8,
  __vue_scope_id__8,
  __vue_is_functional_template__8,
  __vue_module_identifier__8,
  false,
  __vue_create_injector__8,
  void 0,
  void 0
);
var PaymentsPagination_default = __vue_component__8;

// frontend/views/containers/payments/MonthOverview.vue
var __vue_script__9 = {
  name: "MonthOverview",
  components: {
    ProgressBar: Progress_default
  },
  methods: {
    withGroupCurrency,
    statusIsSent(user) {
      return ["completed", "pending"].includes(user.status);
    },
    statusIsCompleted(user) {
      return user.status === "completed";
    }
  },
  computed: {
    ...mapGetters([
      "currentPaymentPeriod",
      "dueDateForPeriod",
      "ourGroupProfile",
      "groupSettings",
      "ourPaymentsSummary",
      "ourPayments",
      "periodStampGivenDate"
    ]),
    humanDueDate() {
      return humanDate(this.dueDateForPeriod(this.currentPaymentPeriod));
    },
    humanStartDate() {
      return humanDate(this.periodStampGivenDate(this.currentPaymentPeriod));
    },
    summaryCopy() {
      const { paymentsTotal, paymentsDone, hasPartials, amountTotal, amountDone } = this.ourPaymentsSummary;
      const pS = [
        {
          title: this.needsIncome ? L("Payments received") : L("Payments sent"),
          value: paymentsDone,
          max: paymentsTotal,
          hasMarks: true,
          hasPartials,
          label: L("{value} out of {max}", {
            value: paymentsDone,
            max: paymentsTotal
          })
        }
      ];
      if (this.needsIncome) {
        pS.push({
          title: L("Amount received"),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L("{value} out of {max}", {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        });
      } else {
        pS.push({
          title: L("Amount sent"),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L("{value} out of {max}", {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        });
      }
      return pS;
    },
    notReceivedPayments() {
      const { received, sent } = this.ourPayments;
      const payments = this.needsIncome ? received : sent;
      return payments.filter((p) => p.data.status === PAYMENT_NOT_RECEIVED).length;
    },
    needsIncome() {
      return this.ourGroupProfile.incomeDetailsType === "incomeAmount";
    }
  }
};
var __vue_render__9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-summary", attrs: { "data-test": "monthOverview" } },
    [
      _c(
        "i18n",
        {
          staticClass: "c-summary-title is-title-4",
          attrs: {
            tag: "h4",
            "data-test": "monthOverviewTitle",
            args: { start: _vm.humanStartDate, end: _vm.humanDueDate }
          }
        },
        [_vm._v("Period: {start} - {end}")]
      ),
      _c(
        "ul",
        [
          _vm._l(_vm.summaryCopy, function(item, index) {
            return _c(
              "li",
              { key: index, staticClass: "c-summary-item" },
              [
                _c("div", { staticClass: "label" }, [
                  _vm._v(_vm._s(item.title))
                ]),
                _c("progress-bar", {
                  staticClass: "c-progress",
                  attrs: {
                    max: item.max,
                    value: item.value,
                    secValue: item.hasPartials ? item.value + 0.5 : 0,
                    hasMarks: item.hasMarks
                  }
                }),
                _c(
                  "p",
                  {
                    class: {
                      "has-text-success": item.max && item.max === item.value
                    }
                  },
                  [
                    item.max && item.max === item.value ? _c("i", { staticClass: "icon-check is-prefix" }) : _vm._e(),
                    _c("span", { staticClass: "has-text-1" }, [
                      _vm._v(_vm._s(item.label))
                    ])
                  ]
                )
              ],
              1
            );
          }),
          _vm.notReceivedPayments ? _c(
            "li",
            { staticClass: "c-summary-item" },
            [
              _c("i18n", { staticClass: "label is-title-4" }, [
                _vm._v("Payment not received")
              ]),
              _c(
                "i18n",
                {
                  staticClass: "c-desc has-text-1",
                  attrs: { args: { nr: 1 } }
                },
                [_vm._v("There was a problem with {nr} of your payments.")]
              )
            ],
            1
          ) : _vm._e()
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__9 = [];
__vue_render__9._withStripped = true;
var __vue_inject_styles__9 = function(inject) {
  if (!inject) return;
  inject("data-v-255751a7_0", { source: ".c-summary-title[data-v-255751a7] {\n  margin-bottom: 1.75rem;\n  margin-top: -0.25rem;\n}\n.c-summary-item[data-v-255751a7] {\n  margin-bottom: 3rem;\n}\n.c-summary-item .label[data-v-255751a7] {\n  margin-bottom: 0.25rem;\n}\n.c-summary-item .icon-check[data-v-255751a7] {\n  margin-right: 0.5rem;\n}\n.c-progress[data-v-255751a7] {\n  margin: 0.25rem 0;\n}\n\n/*# sourceMappingURL=MonthOverview.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/MonthOverview.vue", "MonthOverview.vue"], "names": [], "mappings": "AA+HA;EACA,sBAAA;EACA,oBAAA;AC9HA;ADiIA;EACA,mBAAA;AC/HA;ADiIA;EACA,sBAAA;AC/HA;ADkIA;EACA,oBAAA;AChIA;ADqIA;EACA,iBAAA;AClIA;;AAEA,4CAA4C", "file": "MonthOverview.vue", "sourcesContent": [`<template lang='pug'>
.c-summary(data-test='monthOverview')
  i18n.c-summary-title.is-title-4(
    tag='h4'
    data-test='monthOverviewTitle'
    :args='{ start: humanStartDate, end: humanDueDate }'
  ) Period: {start} - {end}

  ul
    li.c-summary-item(
      v-for='(item, index) in summaryCopy'
      :key='index'
    )
      .label {{ item.title }}

      progress-bar.c-progress(
        :max='item.max'
        :value='item.value'
        :secValue='item.hasPartials ? item.value + 0.5 : 0'
        :hasMarks='item.hasMarks'
      )
      p(:class='{ "has-text-success": item.max && (item.max === item.value) }')
        i.icon-check.is-prefix(v-if='item.max && (item.max === item.value)')
        span.has-text-1 {{ item.label }}

    li.c-summary-item(v-if='notReceivedPayments')
      i18n.label.is-title-4 Payment not received
      i18n.c-desc.has-text-1(:args='{nr: 1 }') There was a problem with {nr} of your payments.

  // TODO: Overdue payments (only visible for who's giving)
</template>

<script>
import { mapGetters } from 'vuex'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'
import { L } from '../../../../frontend/common/common.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'MonthOverview',
  components: {
    ProgressBar
  },
  methods: {
    withGroupCurrency,
    statusIsSent (user) {
      return ['completed', 'pending'].includes(user.status)
    },
    statusIsCompleted (user) {
      return user.status === 'completed'
    }
  },
  computed: {
    ...mapGetters([
      'currentPaymentPeriod',
      'dueDateForPeriod',
      'ourGroupProfile',
      'groupSettings',
      'ourPaymentsSummary',
      'ourPayments',
      'periodStampGivenDate'
    ]),
    humanDueDate () {
      return humanDate(this.dueDateForPeriod(this.currentPaymentPeriod))
    },
    humanStartDate () {
      return humanDate(this.periodStampGivenDate(this.currentPaymentPeriod))
    },
    summaryCopy () {
      const { paymentsTotal, paymentsDone, hasPartials, amountTotal, amountDone } = this.ourPaymentsSummary

      const pS = [
        {
          title: this.needsIncome ? L('Payments received') : L('Payments sent'),
          value: paymentsDone,
          max: paymentsTotal,
          hasMarks: true,
          hasPartials,
          label: L('{value} out of {max}', {
            value: paymentsDone,
            max: paymentsTotal
          })
        }
      ]
      if (this.needsIncome) {
        pS.push({
          title: L('Amount received'),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L('{value} out of {max}', {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        })
      } else {
        pS.push({
          title: L('Amount sent'),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L('{value} out of {max}', {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        })
      }
      return pS
    },
    notReceivedPayments () {
      const { received, sent } = this.ourPayments
      const payments = this.needsIncome ? received : sent
      return payments.filter(p => p.data.status === PAYMENT_NOT_RECEIVED).length
    },
    needsIncome () {
      return this.ourGroupProfile.incomeDetailsType === 'incomeAmount'
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-summary {
  &-title {
    margin-bottom: 1.75rem;
    margin-top: -0.25rem;
  }

  &-item {
    margin-bottom: 3rem;

    .label {
      margin-bottom: 0.25rem;
    }

    .icon-check {
      margin-right: 0.5rem;
    }
  }
}

.c-progress {
  margin: 0.25rem 0;
}
</style>
`, ".c-summary-title {\n  margin-bottom: 1.75rem;\n  margin-top: -0.25rem;\n}\n.c-summary-item {\n  margin-bottom: 3rem;\n}\n.c-summary-item .label {\n  margin-bottom: 0.25rem;\n}\n.c-summary-item .icon-check {\n  margin-right: 0.5rem;\n}\n\n.c-progress {\n  margin: 0.25rem 0;\n}\n\n/*# sourceMappingURL=MonthOverview.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__9 = "data-v-255751a7";
var __vue_module_identifier__9 = void 0;
var __vue_is_functional_template__9 = false;
function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-summary(data-test='monthOverview')
  i18n.c-summary-title.is-title-4(
    tag='h4'
    data-test='monthOverviewTitle'
    :args='{ start: humanStartDate, end: humanDueDate }'
  ) Period: {start} - {end}

  ul
    li.c-summary-item(
      v-for='(item, index) in summaryCopy'
      :key='index'
    )
      .label {{ item.title }}

      progress-bar.c-progress(
        :max='item.max'
        :value='item.value'
        :secValue='item.hasPartials ? item.value + 0.5 : 0'
        :hasMarks='item.hasMarks'
      )
      p(:class='{ "has-text-success": item.max && (item.max === item.value) }')
        i.icon-check.is-prefix(v-if='item.max && (item.max === item.value)')
        span.has-text-1 {{ item.label }}

    li.c-summary-item(v-if='notReceivedPayments')
      i18n.label.is-title-4 Payment not received
      i18n.c-desc.has-text-1(:args='{nr: 1 }') There was a problem with {nr} of your payments.

  // TODO: Overdue payments (only visible for who's giving)
</template>

<script>
import { mapGetters } from 'vuex'
import { PAYMENT_NOT_RECEIVED } from '../../../../frontend/model/contracts/shared/payments/index.js'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'
import { L } from '../../../../frontend/common/common.js'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'MonthOverview',
  components: {
    ProgressBar
  },
  methods: {
    withGroupCurrency,
    statusIsSent (user) {
      return ['completed', 'pending'].includes(user.status)
    },
    statusIsCompleted (user) {
      return user.status === 'completed'
    }
  },
  computed: {
    ...mapGetters([
      'currentPaymentPeriod',
      'dueDateForPeriod',
      'ourGroupProfile',
      'groupSettings',
      'ourPaymentsSummary',
      'ourPayments',
      'periodStampGivenDate'
    ]),
    humanDueDate () {
      return humanDate(this.dueDateForPeriod(this.currentPaymentPeriod))
    },
    humanStartDate () {
      return humanDate(this.periodStampGivenDate(this.currentPaymentPeriod))
    },
    summaryCopy () {
      const { paymentsTotal, paymentsDone, hasPartials, amountTotal, amountDone } = this.ourPaymentsSummary

      const pS = [
        {
          title: this.needsIncome ? L('Payments received') : L('Payments sent'),
          value: paymentsDone,
          max: paymentsTotal,
          hasMarks: true,
          hasPartials,
          label: L('{value} out of {max}', {
            value: paymentsDone,
            max: paymentsTotal
          })
        }
      ]
      if (this.needsIncome) {
        pS.push({
          title: L('Amount received'),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L('{value} out of {max}', {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        })
      } else {
        pS.push({
          title: L('Amount sent'),
          value: amountDone,
          max: amountTotal,
          hasMarks: false,
          label: L('{value} out of {max}', {
            value: this.withGroupCurrency(amountDone),
            max: this.withGroupCurrency(amountTotal)
          })
        })
      }
      return pS
    },
    notReceivedPayments () {
      const { received, sent } = this.ourPayments
      const payments = this.needsIncome ? received : sent
      return payments.filter(p => p.data.status === PAYMENT_NOT_RECEIVED).length
    },
    needsIncome () {
      return this.ourGroupProfile.incomeDetailsType === 'incomeAmount'
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-summary {
  &-title {
    margin-bottom: 1.75rem;
    margin-top: -0.25rem;
  }

  &-item {
    margin-bottom: 3rem;

    .label {
      margin-bottom: 0.25rem;
    }

    .icon-check {
      margin-right: 0.5rem;
    }
  }
}

.c-progress {
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
var __vue_component__9 = /* @__PURE__ */ __vue_normalize__9(
  { render: __vue_render__9, staticRenderFns: __vue_staticRenderFns__9 },
  __vue_inject_styles__9,
  __vue_script__9,
  __vue_scope_id__9,
  __vue_is_functional_template__9,
  __vue_module_identifier__9,
  false,
  __vue_create_injector__9,
  void 0,
  void 0
);
var MonthOverview_default = __vue_component__9;

// frontend/views/utils/lightning-dummy-data.js
var dummyLightningUsers = [
  {
    username: "fake-user-1",
    email: "fake1@abc.com",
    password: "123456789"
  },
  {
    username: "fake-user-2",
    email: "fake2@def.com",
    password: "123456789"
  }
];
var dummyLightningTodoItems = [
  {
    // $FlowFixMe
    hash: randomHexString(10),
    username: "fake-user-1",
    displayName: "fake-user-1",
    amount: 98.57,
    total: 98.57,
    partial: false,
    isLate: false,
    date: "2022-09-24T11:27:28.893Z"
  },
  {
    // $FlowFixMe
    hash: randomHexString(10),
    username: "fake-user-2",
    displayName: "fake-user-2",
    amount: 250,
    total: 250,
    partial: false,
    isLate: false,
    date: "2022-09-24T11:27:28.893Z"
  }
];
var dummyLightningPaymentDetails = {
  data: {
    // $FlowFixMe
    transactionId: randomHexString(50),
    toMemberID: "fake-user-2",
    amount: 98.57142857,
    groupMincome: 1e3,
    memo: "Love you so much! Thank you for the Portuguese class last week. P.S.: sent to the Paypal email on your profile.",
    currencyFromTo: ["USD", "USD"]
  },
  meta: {
    createdDate: "2022-09-08T07:54:13.809Z",
    username: "fake-user-1"
  }
};

// frontend/views/pages/Payments.vue
var __vue_script__10 = {
  name: "Payments",
  mixins: [PaymentsMixin_default],
  components: {
    Page: Page_default,
    SvgContributions: contributions_default,
    Search: Search_default,
    Tooltip: Tooltip_default,
    PaymentsList: PaymentsList_default,
    PaymentsPagination: PaymentsPagination_default,
    NextDistributionPill: PaymentNextDistributionPill_default,
    MonthOverview: MonthOverview_default,
    AddIncomeDetailsWidget: AddIncomeDetailsWidget_default
  },
  data() {
    return {
      form: {
        searchText: ""
      },
      ephemeral: {
        activeTab: "",
        rowsPerPage: 10,
        currentPage: 0,
        paymentMethodFilter: "all",
        // defaults to 'all' options
        enableSendPaymentBtn: false,
        selectedTodoItems: null
      },
      config: {
        // TODO: maybe externalize the option names as contants, (e.g. PAYMENTS_METHOD.MANUAL, PAYMENTS_METHOD.LIGHTNING)
        //       once the payment method is implemented in the 'gi.contracts/group'
        paymentMethodFilterOptions: {
          "all": L("ALL"),
          "lightning": L("Lightning"),
          "manual": L("Manual")
        },
        paymentLockedWarningOptions: {
          title: L("Distribution Locked"),
          tooltip: L("First payment sent. Distribution is now locked.")
        }
      },
      historicalPayments: {
        received: [],
        sent: [],
        todo: []
      }
    };
  },
  created() {
    this.updatePayments();
  },
  watch: {
    ourPayments(to, from) {
      if (!deepEqualJSONType(to, from)) {
        this.updatePayments();
      }
    },
    "$route": {
      immediate: true,
      handler(to, from) {
        const section = to.query.section;
        if (section && this.tabSections.includes(section)) {
          this.ephemeral.activeTab = section;
        } else {
          const fromQuery = from?.query || {};
          const isFromTableRelatedModals = [
            "PaymentDetail",
            "ExportPaymentsModal"
          ].includes(fromQuery.modal);
          const defaultTab = isFromTableRelatedModals ? fromQuery.section || this.tabSections[0] : this.tabSections[0];
          if (defaultTab) {
            this.handleTabClick(defaultTab);
          } else if (section) {
            const query = omit(this.$route.query, ["section"]);
            this.$router.push({ query }).catch(logExceptNavigationDuplicated);
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      "currentGroupState",
      "thisPeriodPaymentInfo",
      "ourGroupProfile",
      "groupSettings",
      "userDisplayNameFromID"
    ]),
    needsIncome() {
      return this.ourGroupProfile?.incomeDetailsType === "incomeAmount";
    },
    distributionStart() {
      return this.prettyDate(this.groupSettings.distributionDate);
    },
    distributionStarted() {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime();
    },
    distributionLocked() {
      if (!this.thisPeriodPaymentInfo) {
        return false;
      }
      const { paymentsFrom } = this.thisPeriodPaymentInfo;
      const { payments } = this.currentGroupState;
      for (const fromMemberID of Object.keys(paymentsFrom)) {
        for (const toMemberID of Object.keys(paymentsFrom[fromMemberID])) {
          for (const hash of paymentsFrom[fromMemberID][toMemberID]) {
            if (payments[hash].data.status === PAYMENT_COMPLETED) {
              return true;
            }
          }
        }
      }
      return false;
    },
    tabItems() {
      const items = [];
      if (!this.distributionStarted) {
        return items;
      }
      if (!this.needsIncome) {
        items.push({
          title: L("Todo"),
          url: "PaymentRowTodo",
          notification: this.paymentsTodo.length
        });
      }
      const doesNotNeedIncomeAndDidReceiveBefore = !this.needsIncome && this.paymentsReceived.length;
      if (this.needsIncome || doesNotNeedIncomeAndDidReceiveBefore) {
        items.push({
          title: L("Received"),
          url: "PaymentRowReceived"
        });
      }
      if (!this.needsIncome || this.paymentsSent.length) {
        items.push({
          title: L("Completed"),
          url: "PaymentRowSent"
        });
      }
      return items;
    },
    tableTitles() {
      const { activeTab } = this.ephemeral;
      return activeTab === "PaymentRowTodo" ? {
        one: L("Sent to"),
        two: L("Amount"),
        three: L("Accepted methods"),
        four: L("Due on")
      } : {
        one: activeTab === "PaymentRowSent" ? L("Sent to") : L("Sent by"),
        two: L("Amount"),
        three: L("Payment method"),
        four: L("Payment date")
      };
    },
    tabSections() {
      return this.tabItems.map((tabItem) => tabItem.url);
    },
    introTitle() {
      return this.needsIncome ? L("You are currently {strong_}receiving{_strong} mincome.", LTags("strong")) : L("You are currently {strong_}sending{_strong} mincome.", LTags("strong"));
    },
    // paymentsCount () {
    //   if (Object.keys(this.groupSettings).length) {
    //     return this.paymentHashesForPeriod(await this.historicalPeriodStampGivenDate(this.groupSettings.distributionDate))?.length
    //   }
    // },
    paymentsTodo() {
      const payments = [];
      const sentPayments = this.paymentsSent;
      for (const payment of this.historicalPayments.todo) {
        payments.push({
          hash: payment.hash || randomHexString(15),
          toMemberID: payment.toMemberID,
          displayName: this.userDisplayNameFromID(payment.toMemberID),
          amount: payment.amount,
          total: payment.total,
          partial: payment.partial,
          isLate: payment.isLate,
          date: payment.dueOn
        });
      }
      const notReceived = sentPayments.filter((p) => p.data.status === PAYMENT_NOT_RECEIVED);
      return [notReceived, payments].flat();
    },
    paymentsSent() {
      return this.historicalPayments.sent.map((payment) => ({
        ...payment,
        toMemberID: payment.data.toMemberID,
        displayName: this.userDisplayNameFromID(payment.data.toMemberID),
        monthstamp: dateToMonthstamp(payment.meta.createdDate),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod);
    },
    paymentsReceived() {
      return this.historicalPayments.received.map((payment) => ({
        ...payment,
        fromMemberID: payment.data.fromMemberID,
        displayName: this.userDisplayNameFromID(payment.data.fromMemberID),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod);
    },
    paymentsListData() {
      return {
        PaymentRowTodo: () => this.paymentsTodo,
        PaymentRowSent: () => this.paymentsSent,
        PaymentRowReceived: () => this.paymentsReceived
      }[this.ephemeral.activeTab]?.() || [];
    },
    hasIncomeDetails() {
      return !!this.ourGroupProfile?.incomeDetailsType;
    },
    paymentsFiltered() {
      return this.paymentsListData.filter(this.filterPayment);
    },
    footerTodoStatus() {
      const amount = this.paymentsTodo.reduce((total, p) => total + p.amount, 0);
      const memberIds = uniq(this.paymentsTodo.map((item) => item.toMemberID));
      const membersLen = memberIds.length;
      return membersLen === 1 ? L("{amt} in total, to 1 member", { amt: this.withGroupCurrency(amount) }) : L("{amt} in total, to {count} members", { amt: this.withGroupCurrency(amount), count: membersLen });
    },
    showTabSelectionMenu() {
      return this.tabItems.length > 0;
    },
    showExportPaymentsButton() {
      return ["PaymentRowSent", "PaymentRowReceived"].includes(this.ephemeral.activeTab) && this.paymentsListData.length > 0;
    },
    isDevEnv() {
      return true;
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    prettyDate(date) {
      return humanDate(date, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" });
    },
    openModal(name, props) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, name, null, props);
    },
    filterPayment(payment) {
      const {
        amount,
        displayName,
        // NOTE: 'accepted payment method' is not implemented yet, so 'acceptedMethods' just a dummy field for now.
        // TODO: update the field name & the related logic (e.g. 'matchesMethodFilter' below) accordingly
        //       once 'accepted payment method' is implemented in the contract.
        acceptedMethods = ["manual"]
      } = payment;
      const methodFilterVal = this.ephemeral.paymentMethodFilter;
      const searchQuery = this.form.searchText;
      const matchesMethodFilter = methodFilterVal === "all" || acceptedMethods.includes(methodFilterVal);
      const matchesSearchQuery = searchQuery === "" || `${amount}${displayName.toUpperCase()}`.indexOf(searchQuery.toUpperCase()) !== -1;
      return matchesMethodFilter && matchesSearchQuery;
    },
    sortPaymentByDescendingPeriod(a, b) {
      return dateFromPeriodStamp(b.period) - dateFromPeriodStamp(a.period);
    },
    paginateList(list) {
      const start = this.ephemeral.rowsPerPage * this.ephemeral.currentPage;
      return list.slice(start, start + this.ephemeral.rowsPerPage);
    },
    handleTabClick(url) {
      const query = {
        ...this.$route.query,
        section: url
      };
      this.$router.push({ query }).catch(logExceptNavigationDuplicated);
    },
    handleAnchorClick({ target }) {
      const contains = (className) => target.classList.contains(className);
      if (contains("js-btnInvite")) {
        esm_default("okTurtles.events/emit", OPEN_MODAL, "IncomeDetails");
      } else if (contains("js-btnSimulator")) {
        window.open(
          "https://groupincome.org/simulator/",
          "_blank"
        );
      }
    },
    handlePageChange(type) {
      const current = this.ephemeral.currentPage;
      this.ephemeral.currentPage = type === "next" ? current + 1 : current - 1;
    },
    handleRowsPerPageChange(value) {
      this.ephemeral.rowsPerPage = value;
      this.ephemeral.currentPage = 0;
    },
    onRecordPaymentClick() {
      this.openModal("RecordPayment", { todoItems: this.ephemeral.selectedTodoItems });
    },
    async openLightningPayments() {
      const wait = (milli) => new Promise((resolve) => setTimeout(resolve, milli));
      let contractID;
      for (const userData of dummyLightningUsers) {
        contractID = await esm_default("namespace/lookup", userData.username);
        if (!contractID) {
          console.log(`signing up a fake user [${userData.username}]`);
          await esm_default("gi.app/identity/signup", userData);
        }
      }
      if (!contractID) {
        await wait(100);
      }
      this.openModal("SendPaymentsViaLightning", { todoItems: dummyLightningTodoItems });
    },
    openLightningPaymentDetail() {
      this.openModal("PaymentDetail", {
        lightningPayment: dummyLightningPaymentDetails
      });
    },
    async updatePayments() {
      if (Object.keys(this.groupSettings).length) {
        this.historicalPayments = await this.getAllPaymentsInTypes();
      }
    },
    openExportPaymentsModal() {
      const modalTypeMap = {
        "PaymentRowSent": "sent",
        "PaymentRowReceived": "received"
      };
      esm_default(
        "okTurtles.events/emit",
        OPEN_MODAL,
        "ExportPaymentsModal",
        { type: modalTypeMap[this.ephemeral.activeTab] },
        // query params
        { data: this.paymentsListData }
      );
    }
  }
};
var __vue_render__10 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.ourGroupProfile ? _c(
    "page",
    {
      attrs: {
        pageTestName: "paymentsPage",
        pageTestHeaderName: "paymentsTitle",
        "data-test-date": _vm.humanDate(Date.now())
      },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._v(_vm._s(_vm.L("Payments")))];
            },
            proxy: true
          },
          _vm.showTabSelectionMenu || _vm.paymentsListData.length > 0 ? {
            key: "sidebar",
            fn: function() {
              return [_c("month-overview")];
            },
            proxy: true
          } : null
        ],
        null,
        true
      )
    },
    [
      !_vm.hasIncomeDetails ? _c("add-income-details-widget") : [
        _c(
          "p",
          { staticClass: "p-description" },
          [
            _c("span", {
              directives: [
                {
                  name: "safe-html",
                  rawName: "v-safe-html",
                  value: _vm.introTitle,
                  expression: "introTitle"
                }
              ],
              staticClass: "has-text-1"
            }),
            _vm._v("\xA0"),
            _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: {
                  args: {
                    r1: '<button class="link js-btnInvite" data-test="openIncomeDetailsModal">',
                    r2: "</button>"
                  }
                },
                on: { click: _vm.handleAnchorClick }
              },
              [
                _vm._v(
                  "You can change this at any time by updating your {r1}income details{r2}."
                )
              ]
            ),
            _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: {
                  tag: "div",
                  args: {
                    r1: '<button class="link js-btnSimulator">',
                    r2: "</button>"
                  }
                },
                on: { click: _vm.handleAnchorClick }
              },
              [_vm._v("Try out the {r1}payments simulator.{r2}")]
            )
          ],
          1
        ),
        !_vm.distributionStarted ? _c("section", [
          _c(
            "div",
            { staticClass: "c-container-empty" },
            [
              _c("svg-contributions", { staticClass: "c-svg" }),
              _c(
                "i18n",
                {
                  staticClass: "c-description",
                  attrs: {
                    tag: "p",
                    args: { startDate: _vm.distributionStart }
                  }
                },
                [
                  _vm._v(
                    "The distribution period begins on: {startDate}"
                  )
                ]
              )
            ],
            1
          )
        ]) : _vm.tabItems.length === 0 && _vm.paymentsListData.length === 0 ? _c("section", [
          _c(
            "div",
            { staticClass: "c-container-empty" },
            [
              _c("svg-contributions", { staticClass: "c-svg" }),
              _c(
                "i18n",
                {
                  staticClass: "c-description",
                  attrs: { tag: "p" }
                },
                [_vm._v("You haven\u2019t received any payments yet")]
              )
            ],
            1
          )
        ]) : _c("section", { staticClass: "card" }, [
          _vm.showTabSelectionMenu ? _c(
            "nav",
            {
              staticClass: "tabs",
              attrs: { "aria-label": _vm.L("Payments type") }
            },
            [
              _c(
                "div",
                {
                  staticClass: "c-tabs-link-container",
                  attrs: { "data-test": "payNav" }
                },
                _vm._l(_vm.tabItems, function(link, index) {
                  return _c(
                    "button",
                    {
                      key: index,
                      staticClass: "is-unstyled tabs-link",
                      class: {
                        "is-active": _vm.ephemeral.activeTab === link.url
                      },
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
                    [
                      _vm._v(_vm._s(link.title)),
                      link.notification ? _c(
                        "span",
                        {
                          staticClass: "tabs-notification"
                        },
                        [_vm._v(_vm._s(link.notification))]
                      ) : _vm._e()
                    ]
                  );
                }),
                0
              ),
              _c(
                "div",
                {
                  staticClass: "c-tabs-chip-container hide-phone"
                },
                [_c("next-distribution-pill")],
                1
              )
            ]
          ) : _vm._e(),
          _c(
            "div",
            {
              staticClass: "c-chip-container-below-tabs hide-tablet"
            },
            [
              _c("next-distribution-pill", {
                staticClass: "c-distribution-pill"
              })
            ],
            1
          ),
          _vm.paymentsListData.length > 0 ? _c(
            "div",
            { staticClass: "c-filters" },
            [
              _c(
                "div",
                { staticClass: "c-method-filters" },
                _vm._l(
                  _vm.config.paymentMethodFilterOptions,
                  function(name, method) {
                    return _c(
                      "button",
                      {
                        key: method,
                        staticClass: "is-small c-payment-method-filter-opt",
                        class: {
                          "is-active": _vm.ephemeral.paymentMethodFilter === method
                        },
                        attrs: {
                          type: "button",
                          disabled: method === "lightning" && _vm.ephemeral.activeTab !== "PaymentRowTodo"
                        },
                        on: {
                          click: function($event) {
                            _vm.ephemeral.paymentMethodFilter = method;
                          }
                        }
                      },
                      [_vm._v(_vm._s(name))]
                    );
                  }
                ),
                0
              ),
              _vm.paymentsListData.length ? _c("search", {
                staticClass: "c-search-input",
                attrs: {
                  placeholder: _vm.L("Search payments..."),
                  label: _vm.L("Search for a payment")
                },
                model: {
                  value: _vm.form.searchText,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "searchText", $$v);
                  },
                  expression: "form.searchText"
                }
              }) : _vm._e()
            ],
            1
          ) : _vm._e(),
          _c("div", { staticClass: "tab-section" }, [
            _vm.paymentsFiltered.length ? _c(
              "div",
              { staticClass: "c-container" },
              [
                _c("payments-list", {
                  ref: "paymentList",
                  attrs: {
                    titles: _vm.tableTitles,
                    paymentsList: _vm.paginateList(
                      _vm.paymentsFiltered
                    ),
                    paymentsType: _vm.ephemeral.activeTab,
                    selectedTodoItems: _vm.ephemeral.selectedTodoItems
                  },
                  on: {
                    "update:selectedTodoItems": function($event) {
                      return _vm.$set(
                        _vm.ephemeral,
                        "selectedTodoItems",
                        $event
                      );
                    },
                    "update:selected-todo-items": function($event) {
                      return _vm.$set(
                        _vm.ephemeral,
                        "selectedTodoItems",
                        $event
                      );
                    }
                  }
                }),
                _c(
                  "div",
                  { staticClass: "c-footer" },
                  [
                    _vm.ephemeral.activeTab === "PaymentRowTodo" ? _c(
                      "div",
                      { staticClass: "c-payment-record" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "c-payment-info-wrapper"
                          },
                          [
                            _c(
                              "b",
                              {
                                staticClass: "c-payment-info",
                                attrs: {
                                  "data-test": "paymentInfo"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.footerTodoStatus
                                  )
                                )
                              ]
                            ),
                            _vm.distributionLocked ? _c(
                              "div",
                              {
                                staticClass: "c-distribution-locked-warning-wrapper"
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: "pill is-warning"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.config.paymentLockedWarningOptions.title
                                      )
                                    )
                                  ]
                                ),
                                _c(
                                  "tooltip",
                                  {
                                    attrs: {
                                      text: _vm.config.paymentLockedWarningOptions.tooltip,
                                      isTextCenter: true
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "icon-info-circle has-text-warning"
                                    })
                                  ]
                                )
                              ],
                              1
                            ) : _vm._e()
                          ]
                        ),
                        _c(
                          "i18n",
                          {
                            staticClass: "button",
                            attrs: {
                              tag: "button",
                              "data-test": "recordPayment",
                              disabled: !_vm.ephemeral.selectedTodoItems || _vm.ephemeral.selectedTodoItems.length === 0
                            },
                            on: {
                              click: _vm.onRecordPaymentClick
                            }
                          },
                          [_vm._v("Send payments")]
                        )
                      ],
                      1
                    ) : _c("payments-pagination", {
                      attrs: {
                        count: _vm.paymentsFiltered.length,
                        rowsPerPage: _vm.ephemeral.rowsPerPage,
                        page: _vm.ephemeral.currentPage
                      },
                      on: {
                        "update:page": function($event) {
                          return _vm.$set(
                            _vm.ephemeral,
                            "currentPage",
                            $event
                          );
                        },
                        "change-page": _vm.handlePageChange,
                        "change-rows-per-page": _vm.handleRowsPerPageChange
                      }
                    }),
                    _c(
                      "div",
                      { staticClass: "c-export-csv-container" },
                      [
                        _vm.showExportPaymentsButton ? _c(
                          "i18n",
                          {
                            staticClass: "is-outlined is-small c-export-csv-btn",
                            attrs: {
                              tag: "button",
                              type: "button"
                            },
                            on: {
                              click: _vm.openExportPaymentsModal
                            }
                          },
                          [_vm._v("Export CSV")]
                        ) : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ) : _vm.ephemeral.activeTab === "PaymentRowTodo" && _vm.ephemeral.paymentMethodFilter === "lightning" ? _c("div", { staticClass: "c-container" }, [
              _c("p", { staticClass: "c-lightning-todo-msg" }, [
                _vm._v("Coming Soon.")
              ]),
              _c("div", { staticClass: "c-footer" }, [
                _vm.isDevEnv ? _c(
                  "div",
                  {
                    staticClass: "c-payment-record c-lightning-temp"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "is-success is-outlined is-small",
                        attrs: { type: "button" },
                        on: {
                          click: _vm.openLightningPayments
                        }
                      },
                      [_vm._v("Open Placeholder Modal")]
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "is-outlined is-small",
                        attrs: { type: "button" },
                        on: {
                          click: _vm.openLightningPaymentDetail
                        }
                      },
                      [
                        _vm._v(
                          "Open Placeholder Detail Modal"
                        )
                      ]
                    )
                  ]
                ) : _vm._e()
              ])
            ]) : _vm.paymentsListData.length && !_vm.paymentsFiltered.length ? _c(
              "div",
              {
                staticClass: "c-container-noresults",
                attrs: { "data-test": "noResults" }
              },
              [
                _c(
                  "i18n",
                  {
                    attrs: {
                      tag: "p",
                      args: { query: _vm.form.searchText }
                    }
                  },
                  [_vm._v('No results for "{query}".')]
                )
              ],
              1
            ) : _c(
              "div",
              {
                staticClass: "c-container-empty no-payments",
                attrs: { "data-test": "noPayments" }
              },
              [
                _c("svg-contributions", {
                  staticClass: "c-svg"
                }),
                _c(
                  "i18n",
                  {
                    staticClass: "c-description",
                    attrs: { tag: "p" }
                  },
                  [_vm._v("There are no payments.")]
                )
              ],
              1
            )
          ])
        ])
      ]
    ],
    2
  ) : _vm._e();
};
var __vue_staticRenderFns__10 = [];
__vue_render__10._withStripped = true;
var __vue_inject_styles__10 = function(inject) {
  if (!inject) return;
  inject("data-v-ad2266be_0", { source: ".p-description[data-v-ad2266be] {\n  margin-top: -1.5rem;\n  padding-bottom: 1rem;\n}\n.p-description > div[data-v-ad2266be] {\n  margin-top: 0.25rem;\n}\n@media screen and (min-width: 1200px) {\n.p-description[data-v-ad2266be] {\n    margin-top: -1rem;\n    padding-bottom: 1.5rem;\n}\n}\n.tabs[data-v-ad2266be] {\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.tabs .c-tabs-link-container[data-v-ad2266be] {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n}\n.tabs .c-tabs-chip-container[data-v-ad2266be] {\n  align-self: center;\n  height: max-content;\n  padding: 0 1.5rem 0 0;\n  margin: 0.75rem 0;\n}\n.c-chip-container-below-tabs[data-v-ad2266be] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-bottom: 1.25rem;\n}\n@media screen and (min-width: 769px), print {\n.c-chip-container-below-tabs[data-v-ad2266be] {\n    margin-bottom: 2.5rem;\n}\n}\n.c-below-tabs-chip-container[data-v-ad2266be] {\n  margin-bottom: 1.5rem;\n}\n.c-filters[data-v-ad2266be] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.5rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-filters[data-v-ad2266be] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n}\n}\n.c-filters .c-method-filters[data-v-ad2266be] {\n  display: inline-flex;\n  gap: 0.5rem;\n  width: max-content;\n}\n.c-filters .c-search-input[data-v-ad2266be] {\n  order: -1;\n}\n@media screen and (min-width: 769px), print {\n.c-filters .c-search-input[data-v-ad2266be] {\n    order: unset;\n    max-width: 12.125rem;\n}\n}\n.c-payment-method-filter-opt[data-v-ad2266be] {\n  text-transform: uppercase;\n  color: var(--text_0);\n  background-color: var(--general_2);\n}\n.c-payment-method-filter-opt.is-active[data-v-ad2266be] {\n  color: var(--primary_0);\n  border: 1px solid var(--primary_0);\n}\n.c-payment-method-filter-opt[data-v-ad2266be]:hover, .c-payment-method-filter-opt.is-active[data-v-ad2266be] {\n  background-color: var(--primary_2);\n}\n.c-payment-method-filter-opt[disabled][data-v-ad2266be] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.c-search-input[data-v-ad2266be]  .inputgroup .input {\n  padding-right: 2.75rem;\n}\n.c-search-input[data-v-ad2266be]  .inputgroup .input:placeholder-shown {\n  padding-right: 1.375rem;\n}\n.c-container-empty[data-v-ad2266be] {\n  max-width: 25rem;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 2.5rem;\n}\n.c-container-empty.no-payments[data-v-ad2266be] {\n  max-width: unset;\n}\n@media screen and (min-width: 1200px) {\n.c-container-empty[data-v-ad2266be]:not(.no-payments) {\n    padding-top: 4rem;\n}\n}\n.c-container-empty .c-description[data-v-ad2266be] {\n  margin: 1rem 0 0 0;\n  color: var(--text_1);\n}\n.c-container-empty .c-svg[data-v-ad2266be] {\n  display: inline-block;\n  width: 8.25rem;\n  height: 8.25rem;\n  margin-left: -0.5rem;\n  filter: contrast(0%) brightness(172%);\n}\n.c-container-noresults[data-v-ad2266be] {\n  padding-top: 1.5rem;\n}\n.card .c-container-empty[data-v-ad2266be] {\n  padding-top: 2rem;\n}\n@media screen and (min-width: 1200px) {\n.card .c-container-empty[data-v-ad2266be] {\n    padding-top: 2.5rem;\n}\n}\n.card .c-container-empty .c-svg[data-v-ad2266be] {\n  filter: contrast(0%) brightness(186%);\n}\n.is-dark-theme .card .c-container-empty .c-svg[data-v-ad2266be] {\n  opacity: 0.5;\n}\n.c-footer[data-v-ad2266be] {\n  position: relative;\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-footer[data-v-ad2266be] {\n    padding-top: 1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-footer[data-v-ad2266be] {\n    padding-top: 1.5rem;\n}\n}\n.c-footer .c-pagination[data-v-ad2266be],\n.c-footer .c-payment-record[data-v-ad2266be] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-footer .c-pagination.c-lightning-temp[data-v-ad2266be],\n.c-footer .c-payment-record.c-lightning-temp[data-v-ad2266be] {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n.c-footer .c-pagination .c-payment-info-wrapper[data-v-ad2266be],\n  .c-footer .c-payment-record .c-payment-info-wrapper[data-v-ad2266be] {\n    margin-bottom: 1.5rem;\n}\n}\n.c-footer .c-pagination .c-payment-info-wrapper .c-distribution-locked-warning-wrapper[data-v-ad2266be],\n.c-footer .c-payment-record .c-payment-info-wrapper .c-distribution-locked-warning-wrapper[data-v-ad2266be] {\n  display: flex;\n  gap: 0.25rem;\n  width: fit-content;\n}\n.c-footer .c-pagination .c-payment-info-wrapper .c-distribution-locked-warning-wrapper .pill[data-v-ad2266be],\n.c-footer .c-payment-record .c-payment-info-wrapper .c-distribution-locked-warning-wrapper .pill[data-v-ad2266be] {\n  height: fit-content;\n  margin: auto;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 768px) {\n.c-footer .c-pagination[data-v-ad2266be] {\n    justify-content: center;\n}\n.c-footer .c-payment-record[data-v-ad2266be] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n}\n.c-footer .c-payment-record .c-payment-info[data-v-ad2266be] {\n    margin-bottom: 2rem;\n}\n.c-footer .c-payment-record .button[data-v-ad2266be] {\n    width: 100%;\n}\n}\n.c-lightning-todo-msg[data-v-ad2266be] {\n  margin-top: 2rem;\n}\n.c-export-csv-container[data-v-ad2266be] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.c-export-csv-btn[data-v-ad2266be] {\n  margin-top: 0.75rem;\n}\n@media screen and (min-width: 769px), print {\n.c-export-csv-btn[data-v-ad2266be] {\n    position: absolute;\n    bottom: 0;\n    right: 11.75rem;\n    margin-top: 0;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1310px) {\n.c-export-csv-btn[data-v-ad2266be] {\n    position: relative;\n    bottom: unset;\n    right: unset;\n    margin-top: 0.75rem;\n}\n}\n\n/*# sourceMappingURL=Payments.vue.map */", map: { "version": 3, "sources": ["frontend/views/pages/Payments.vue", "Payments.vue"], "names": [], "mappings": "AAwiBA;EACA,mBAAA;EACA,oBAAA;ACviBA;ADyiBA;EACA,mBAAA;ACviBA;AACA;ADiiBA;IASA,iBAAA;IACA,sBAAA;ACviBE;AACF;AD2iBA;EACA,eAAA;EACA,qBAAA;ACxiBA;AD0iBA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;ACxiBA;AD2iBA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;ACziBA;AD6iBA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,sBAAA;AC1iBA;AACA;ADqiBA;IAOA,qBAAA;ACziBE;AACF;AD4iBA;EACA,qBAAA;ACziBA;AD6iBA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;AC1iBA;AACA;ADoiBA;IAQA,mBAAA;IACA,mBAAA;IACA,8BAAA;ACziBE;AACF;AD2iBA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;ACziBA;AD4iBA;EACA,SAAA;AC1iBA;AACA;ADwiBA;IAIA,YAAA;IACA,oBAAA;ACziBE;AACF;AD6iBA;EACA,yBAAA;EACA,oBAAA;EACA,kCAAA;AC1iBA;AD4iBA;EACA,uBAAA;EACA,kCAAA;AC1iBA;AD6iBA;EAEA,kCAAA;AC5iBA;AD+iBA;EACA,mBAAA;EACA,YAAA;AC7iBA;ADkjBA;EACA,sBAAA;AC/iBA;ADijBA;EAEA,uBAAA;AChjBA;ADqjBA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;ACljBA;ADojBA;EACA,gBAAA;ACljBA;AACA;ADqjBA;IACA,iBAAA;ACnjBE;AACF;ADsjBA;EACA,kBAAA;EACA,oBAAA;ACpjBA;ADujBA;EACA,qBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,qCAAA;ACrjBA;ADyjBA;EACA,mBAAA;ACtjBA;ADyjBA;EACA,iBAAA;ACtjBA;AACA;ADojBA;IAIA,mBAAA;ACrjBE;AACF;ADujBA;EACA,qCAAA;ACrjBA;AD0jBA;EACA,YAAA;ACvjBA;AD4jBA;EACA,kBAAA;EACA,mBAAA;ACzjBA;AACA;ADsjBA;IAKA,mBAAA;ACxjBE;AACF;AACA;ADijBA;IASA,mBAAA;ACvjBE;AACF;ADyjBA;;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;ACvjBA;ADyjBA;;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,SAAA;ACtjBA;AACA;ADwjBA;;IAEA,qBAAA;ACtjBE;AACF;ADwjBA;;EACA,aAAA;EACA,YAAA;EACA,kBAAA;ACrjBA;ADujBA;;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;ACpjBA;AACA;AD0jBA;IACA,uBAAA;ACxjBE;AD2jBF;IACA,sBAAA;IACA,2BAAA;IACA,oBAAA;ACzjBE;AD2jBF;IACA,mBAAA;ACzjBE;AD4jBF;IACA,WAAA;AC1jBE;AACF;AD+jBA;EACA,gBAAA;AC5jBA;AD+jBA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;AC5jBA;AD+jBA;EACA,mBAAA;AC5jBA;AACA;AD0jBA;IAIA,kBAAA;IACA,SAAA;IACA,eAAA;IACA,aAAA;AC3jBE;AACF;AD6jBA;AAVA;IAWA,kBAAA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;AC1jBE;AACF;;AAEA,uCAAuC", "file": "Payments.vue", "sourcesContent": [`<template lang='pug'>
// Stop initialization if group data not available
page(
  pageTestName='paymentsPage'
  pageTestHeaderName='paymentsTitle'
  :data-test-date='humanDate(Date.now())'
  v-if='ourGroupProfile'
)
  template(#title='') {{ L('Payments') }}

  template(#sidebar='' v-if='showTabSelectionMenu || paymentsListData.length > 0')
    month-overview

  add-income-details-widget(v-if='!hasIncomeDetails')

  template(v-else)
    p.p-description
      span.has-text-1(v-safe-html='introTitle')
      | &nbsp;
      i18n.has-text-1(
        @click='handleAnchorClick'
        :args='{ \\
          r1: \`<button class="link js-btnInvite" data-test="openIncomeDetailsModal">\`, \\
          r2: "</button>" \\
        }'
      ) You can change this at any time by updating your {r1}income details{r2}.

      i18n.has-text-1(
        @click='handleAnchorClick'
        tag='div'
        :args='{ \\
          r1: \`<button class="link js-btnSimulator">\`, \\
          r2: "</button>" \\
        }'
      ) Try out the {r1}payments simulator.{r2}

    section(v-if='!distributionStarted')
      .c-container-empty
        svg-contributions.c-svg
        i18n.c-description(
          tag='p'
          :args='{ startDate: distributionStart }'
        ) The distribution period begins on: {startDate}

    section(v-else-if='tabItems.length === 0 && paymentsListData.length === 0')
      .c-container-empty
        svg-contributions.c-svg
        i18n.c-description(tag='p') You haven\u2019t received any payments yet

    section.card(v-else)
      nav.tabs(
        v-if='showTabSelectionMenu'
        :aria-label='L("Payments type")'
      )
        .c-tabs-link-container(data-test='payNav')
          button.is-unstyled.tabs-link(
            v-for='(link, index) in tabItems'
            :key='index'
            :class='{ "is-active": ephemeral.activeTab === link.url}'
            :data-test='\`link-\${link.url}\`'
            :aria-expanded='ephemeral.activeTab === link.url'
            @click='handleTabClick(link.url)'
          )
            | {{ link.title }}
            span.tabs-notification(v-if='link.notification') {{ link.notification }}

        .c-tabs-chip-container.hide-phone
          next-distribution-pill

      .c-chip-container-below-tabs.hide-tablet
        next-distribution-pill.c-distribution-pill

      .c-filters(v-if='paymentsListData.length > 0')
        .c-method-filters
          button.is-small.c-payment-method-filter-opt(
            v-for='(name, method) in config.paymentMethodFilterOptions'
            type='button'
            :key='method'
            :disabled='method === "lightning" && ephemeral.activeTab !== "PaymentRowTodo"'
            :class='{ "is-active":  ephemeral.paymentMethodFilter === method }'
            @click='ephemeral.paymentMethodFilter = method'
          ) {{ name }}

        search.c-search-input(
          v-if='paymentsListData.length'
          :placeholder='L("Search payments...")'
          :label='L("Search for a payment")'
          v-model='form.searchText'
        )

      .tab-section
        .c-container(v-if='paymentsFiltered.length')
          payments-list(
            ref='paymentList'
            :titles='tableTitles'
            :paymentsList='paginateList(paymentsFiltered)'
            :paymentsType='ephemeral.activeTab'
            :selectedTodoItems.sync='ephemeral.selectedTodoItems'
          )

          .c-footer
            .c-payment-record(v-if='ephemeral.activeTab === "PaymentRowTodo"')
              .c-payment-info-wrapper
                b.c-payment-info(data-test='paymentInfo') {{ footerTodoStatus }}
                .c-distribution-locked-warning-wrapper(v-if='distributionLocked')
                  span.pill.is-warning {{ config.paymentLockedWarningOptions.title }}
                  tooltip(
                    :text='config.paymentLockedWarningOptions.tooltip'
                    :isTextCenter='true'
                  )
                    i.icon-info-circle.has-text-warning

              i18n.button(
                tag='button'
                data-test='recordPayment'
                :disabled='!ephemeral.selectedTodoItems || ephemeral.selectedTodoItems.length === 0'
                @click='onRecordPaymentClick'
              ) Send payments

            payments-pagination(
              v-else
              :count='paymentsFiltered.length'
              :rowsPerPage='ephemeral.rowsPerPage'
              :page.sync='ephemeral.currentPage'
              @change-page='handlePageChange'
              @change-rows-per-page='handleRowsPerPageChange'
            )

            .c-export-csv-container
              i18n.is-outlined.is-small.c-export-csv-btn(
                v-if='showExportPaymentsButton'
                tag='button'
                type='button'
                @click='openExportPaymentsModal'
              ) Export CSV

        .c-container(v-else-if='ephemeral.activeTab === "PaymentRowTodo" && ephemeral.paymentMethodFilter === "lightning"')
          p.c-lightning-todo-msg Coming Soon.

          .c-footer
            .c-payment-record.c-lightning-temp(v-if='isDevEnv')
              button.is-success.is-outlined.is-small(
                type='button'
                @click='openLightningPayments'
              ) Open Placeholder Modal

              button.is-outlined.is-small(
                type='button'
                @click='openLightningPaymentDetail'
              ) Open Placeholder Detail Modal

        .c-container-noresults(v-else-if='paymentsListData.length && !paymentsFiltered.length' data-test='noResults')
          i18n(tag='p' :args='{query: form.searchText }') No results for "{query}".

        .c-container-empty.no-payments(v-else data-test='noPayments')
          svg-contributions.c-svg
          i18n.c-description(tag='p') There are no payments.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import Page from '../../../frontend/views/components/Page.vue'
import Search from '../../../frontend/views/components/Search.vue'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import SvgContributions from '../../../frontend/assets/svgs/contributions.svg'
import PaymentsList from '../../../frontend/views/containers/payments/PaymentsList.vue'
import NextDistributionPill from '../../../frontend/views/containers/payments/PaymentNextDistributionPill.vue'
import PaymentsPagination from '../../../frontend/views/containers/payments/PaymentsPagination.vue'
import MonthOverview from '../../../frontend/views/containers/payments/MonthOverview.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import PaymentsMixin from '../../../frontend/views/containers/payments/PaymentsMixin.js'
import { PAYMENT_NOT_RECEIVED, PAYMENT_COMPLETED } from '../../../frontend/model/contracts/shared/payments/index.js'
import { dateToMonthstamp, dateFromPeriodStamp, humanDate } from '../../../frontend/model/contracts/shared/time.js'
import { randomHexString, deepEqualJSONType, omit, uniq } from 'turtledash'
import { L, LTags } from '../../../frontend/common/common.js'
import {
  dummyLightningUsers,
  dummyLightningTodoItems,
  dummyLightningPaymentDetails
} from '../../../frontend/views/utils/lightning-dummy-data.js'
import { logExceptNavigationDuplicated, withGroupCurrency } from '../../../frontend/views/utils/misc.js'

export default ({
  name: 'Payments',
  mixins: [PaymentsMixin],
  components: {
    Page,
    SvgContributions,
    Search,
    Tooltip,
    PaymentsList,
    PaymentsPagination,
    NextDistributionPill,
    MonthOverview,
    AddIncomeDetailsWidget
  },
  data () {
    return {
      form: {
        searchText: ''
      },
      ephemeral: {
        activeTab: '',
        rowsPerPage: 10,
        currentPage: 0,
        paymentMethodFilter: 'all', // defaults to 'all' options
        enableSendPaymentBtn: false,
        selectedTodoItems: null
      },
      config: {
        // TODO: maybe externalize the option names as contants, (e.g. PAYMENTS_METHOD.MANUAL, PAYMENTS_METHOD.LIGHTNING)
        //       once the payment method is implemented in the 'gi.contracts/group'
        paymentMethodFilterOptions: {
          'all': L('ALL'),
          'lightning': L('Lightning'),
          'manual': L('Manual')
        },
        paymentLockedWarningOptions: {
          title: L('Distribution Locked'),
          tooltip: L('First payment sent. Distribution is now locked.')
        }
      },
      historicalPayments: {
        received: [],
        sent: [],
        todo: []
      }
    }
  },
  created () {
    this.updatePayments()
  },
  watch: {
    ourPayments (to, from) {
      if (!deepEqualJSONType(to, from)) {
        this.updatePayments()
      }
    },
    '$route': {
      immediate: true,
      handler (to, from) {
        const section = to.query.section
        if (section && this.tabSections.includes(section)) {
          this.ephemeral.activeTab = section
        } else {
          const fromQuery = from?.query || {}
          const isFromTableRelatedModals = [
            'PaymentDetail',
            'ExportPaymentsModal'
          ].includes(fromQuery.modal)
          const defaultTab = isFromTableRelatedModals
            // When payment detail modal is closed, the payment table has to remain in the previously active tab.
            // (context: https://github.com/okTurtles/group-income/issues/1686)
            ? fromQuery.section || this.tabSections[0]
            : this.tabSections[0]

          if (defaultTab) {
            this.handleTabClick(defaultTab)
          } else if (section) {
            const query = omit(this.$route.query, ['section'])
            this.$router.push({ query }).catch(logExceptNavigationDuplicated)
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'thisPeriodPaymentInfo',
      'ourGroupProfile',
      'groupSettings',
      'userDisplayNameFromID'
    ]),
    needsIncome () {
      return this.ourGroupProfile?.incomeDetailsType === 'incomeAmount'
    },
    distributionStart () {
      return this.prettyDate(this.groupSettings.distributionDate)
    },
    distributionStarted () {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime()
    },
    distributionLocked () {
      if (!this.thisPeriodPaymentInfo) {
        return false
      }
      const { paymentsFrom } = this.thisPeriodPaymentInfo
      const { payments } = this.currentGroupState

      for (const fromMemberID of Object.keys(paymentsFrom)) {
        for (const toMemberID of Object.keys(paymentsFrom[fromMemberID])) {
          for (const hash of paymentsFrom[fromMemberID][toMemberID]) {
            if (payments[hash].data.status === PAYMENT_COMPLETED) {
              return true
            }
          }
        }
      }
      return false
    },
    tabItems () {
      const items = []

      if (!this.distributionStarted) {
        return items
      }

      if (!this.needsIncome) {
        items.push({
          title: L('Todo'),
          url: 'PaymentRowTodo',
          notification: this.paymentsTodo.length
        })
      }

      const doesNotNeedIncomeAndDidReceiveBefore = !this.needsIncome && this.paymentsReceived.length

      if (this.needsIncome || doesNotNeedIncomeAndDidReceiveBefore) {
        items.push({
          title: L('Received'),
          url: 'PaymentRowReceived'
        })
      }

      if (!this.needsIncome || this.paymentsSent.length) {
        items.push({
          title: L('Completed'),
          url: 'PaymentRowSent'
        })
      }

      return items
    },
    tableTitles () {
      const { activeTab } = this.ephemeral

      return activeTab === 'PaymentRowTodo'
        ? {
            one: L('Sent to'),
            two: L('Amount'),
            three: L('Accepted methods'),
            four: L('Due on')
          }
        : {
            one: activeTab === 'PaymentRowSent' ? L('Sent to') : L('Sent by'),
            two: L('Amount'),
            three: L('Payment method'),
            four: L('Payment date')
          }
    },
    tabSections () {
      return this.tabItems.map(tabItem => tabItem.url)
    },
    introTitle () {
      return this.needsIncome
        ? L('You are currently {strong_}receiving{_strong} mincome.', LTags('strong'))
        : L('You are currently {strong_}sending{_strong} mincome.', LTags('strong'))
    },
    // paymentsCount () {
    //   if (Object.keys(this.groupSettings).length) {
    //     return this.paymentHashesForPeriod(await this.historicalPeriodStampGivenDate(this.groupSettings.distributionDate))?.length
    //   }
    // },
    paymentsTodo () {
      const payments = []
      const sentPayments = this.paymentsSent

      for (const payment of this.historicalPayments.todo) {
        payments.push({
          hash: payment.hash || randomHexString(15),
          toMemberID: payment.toMemberID,
          displayName: this.userDisplayNameFromID(payment.toMemberID),
          amount: payment.amount,
          total: payment.total,
          partial: payment.partial,
          isLate: payment.isLate,
          date: payment.dueOn
        })
      }

      const notReceived = sentPayments.filter(p => p.data.status === PAYMENT_NOT_RECEIVED)
      return [notReceived, payments].flat()
    },
    paymentsSent () {
      return this.historicalPayments.sent.map(payment => ({
        ...payment,
        toMemberID: payment.data.toMemberID,
        displayName: this.userDisplayNameFromID(payment.data.toMemberID),
        monthstamp: dateToMonthstamp(payment.meta.createdDate),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod)
    },
    paymentsReceived () {
      return this.historicalPayments.received.map(payment => ({
        ...payment,
        fromMemberID: payment.data.fromMemberID,
        displayName: this.userDisplayNameFromID(payment.data.fromMemberID),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod)
    },
    paymentsListData () {
      return {
        PaymentRowTodo: () => this.paymentsTodo,
        PaymentRowSent: () => this.paymentsSent,
        PaymentRowReceived: () => this.paymentsReceived
      }[this.ephemeral.activeTab]?.() || []
    },
    hasIncomeDetails () {
      return !!this.ourGroupProfile?.incomeDetailsType
    },
    paymentsFiltered () {
      return this.paymentsListData.filter(this.filterPayment)
    },
    footerTodoStatus () {
      const amount = this.paymentsTodo.reduce((total, p) => total + p.amount, 0)
      const memberIds = uniq(this.paymentsTodo.map(item => item.toMemberID))
      const membersLen = memberIds.length

      return membersLen === 1
        ? L('{amt} in total, to 1 member', { amt: this.withGroupCurrency(amount) })
        : L('{amt} in total, to {count} members', { amt: this.withGroupCurrency(amount), count: membersLen })
    },
    showTabSelectionMenu () {
      return this.tabItems.length > 0
    },
    showExportPaymentsButton () {
      return ['PaymentRowSent', 'PaymentRowReceived'].includes(this.ephemeral.activeTab) &&
        this.paymentsListData.length > 0
    },
    isDevEnv () {
      return process.env.NODE_ENV === 'development'
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    prettyDate (date) {
      return humanDate(date, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
    },
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, null, props)
    },
    filterPayment (payment) {
      const {
        amount, displayName,
        // NOTE: 'accepted payment method' is not implemented yet, so 'acceptedMethods' just a dummy field for now.
        // TODO: update the field name & the related logic (e.g. 'matchesMethodFilter' below) accordingly
        //       once 'accepted payment method' is implemented in the contract.
        acceptedMethods = ['manual']
      } = payment
      const methodFilterVal = this.ephemeral.paymentMethodFilter
      const searchQuery = this.form.searchText

      const matchesMethodFilter = methodFilterVal === 'all' || acceptedMethods.includes(methodFilterVal)
      const matchesSearchQuery = searchQuery === '' ||
        \`\${amount}\${displayName.toUpperCase()}\`.indexOf(searchQuery.toUpperCase()) !== -1

      return matchesMethodFilter && matchesSearchQuery
    },
    sortPaymentByDescendingPeriod (a, b) {
      return dateFromPeriodStamp(b.period) - dateFromPeriodStamp(a.period)
    },
    paginateList (list) {
      const start = this.ephemeral.rowsPerPage * this.ephemeral.currentPage
      return list.slice(start, start + this.ephemeral.rowsPerPage)
    },
    handleTabClick (url) {
      const query = {
        ...this.$route.query,
        section: url
      }
      this.$router.push({ query }).catch(logExceptNavigationDuplicated)
    },
    handleAnchorClick ({ target }) {
      const contains = className => target.classList.contains(className)

      if (contains('js-btnInvite')) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'IncomeDetails')
      } else if (contains('js-btnSimulator')) {
        window.open(
          'https://groupincome.org/simulator/',
          '_blank'
        )
      }
    },
    handlePageChange (type) {
      const current = this.ephemeral.currentPage
      this.ephemeral.currentPage = type === 'next' ? current + 1 : current - 1
    },
    handleRowsPerPageChange (value) {
      this.ephemeral.rowsPerPage = value
      this.ephemeral.currentPage = 0 // go back to first page.
    },
    onRecordPaymentClick () {
      this.openModal('RecordPayment', { todoItems: this.ephemeral.selectedTodoItems })
    },
    async openLightningPayments () {
      const wait = (milli) => new Promise(resolve => setTimeout(resolve, milli))
      let contractID

      // check if the fake users have been created and sign them up if not.
      // TODO: to be removed once lightning network is implemented
      for (const userData of dummyLightningUsers) {
        contractID = await sbp('namespace/lookup', userData.username)

        if (!contractID) {
          console.log(\`signing up a fake user [\${userData.username}]\`)
          await sbp('gi.app/identity/signup', userData)
        }
      }

      if (!contractID) {
        // if fake users have just been created,
        // wait a little bit for the avatar image to be prepared
        await wait(100)
      }

      this.openModal('SendPaymentsViaLightning', { todoItems: dummyLightningTodoItems })
    },
    openLightningPaymentDetail () {
      this.openModal('PaymentDetail', {
        lightningPayment: dummyLightningPaymentDetails
      })
    },
    async updatePayments () {
      // NOTE: no need to calculate while logging out
      if (Object.keys(this.groupSettings).length) {
        this.historicalPayments = await this.getAllPaymentsInTypes()
      }
    },
    openExportPaymentsModal () {
      const modalTypeMap = {
        'PaymentRowSent': 'sent',
        'PaymentRowReceived': 'received'
      }

      sbp('okTurtles.events/emit', OPEN_MODAL, 'ExportPaymentsModal',
        { type: modalTypeMap[this.ephemeral.activeTab] }, // query params
        { data: this.paymentsListData }
      )
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

// Header
.p-description {
  margin-top: -1.5rem;
  padding-bottom: 1rem;

  > div {
    margin-top: 0.25rem;
  }

  @include desktop {
    margin-top: -1rem;
    padding-bottom: 1.5rem;
  }
}

// Tabs
.tabs {
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  .c-tabs-link-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .c-tabs-chip-container {
    align-self: center;
    height: max-content;
    padding: 0 1.5rem 0 0;
    margin: 0.75rem 0;
  }
}

.c-chip-container-below-tabs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.25rem;

  @include tablet {
    margin-bottom: 2.5rem;
  }
}

.c-below-tabs-chip-container {
  margin-bottom: 1.5rem;
}

// Search
.c-filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @include tablet {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .c-method-filters {
    display: inline-flex;
    gap: 0.5rem;
    width: max-content;
  }

  .c-search-input {
    order: -1;

    @include tablet {
      order: unset;
      max-width: 12.125rem;
    }
  }
}

.c-payment-method-filter-opt {
  text-transform: uppercase;
  color: $text_0;
  background-color: $general_2;

  &.is-active {
    color: $primary_0;
    border: 1px solid $primary_0;
  }

  &:hover,
  &.is-active {
    background-color: $primary_2;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.c-search-input {
  ::v-deep .inputgroup .input {
    padding-right: 2.75rem;

    &:placeholder-shown {
      // if the text input element is empty.
      padding-right: 1.375rem;
    }
  }
}

.c-container-empty {
  max-width: 25rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 2.5rem;

  &.no-payments {
    max-width: unset;
  }

  @include desktop {
    &:not(.no-payments) {
      padding-top: 4rem;
    }
  }

  .c-description {
    margin: 1rem 0 0 0;
    color: $text_1;
  }

  .c-svg {
    display: inline-block;
    width: 8.25rem;
    height: 8.25rem;
    margin-left: -0.5rem;
    filter: contrast(0%) brightness(172%);
  }
}

.c-container-noresults {
  padding-top: 1.5rem;
}

.card .c-container-empty {
  padding-top: 2rem;

  @include desktop {
    padding-top: 2.5rem;
  }

  .c-svg {
    filter: contrast(0%) brightness(186%);
  }
}

.is-dark-theme {
  .card .c-container-empty .c-svg {
    opacity: 0.5;
  }
}

// Footer
.c-footer {
  position: relative;
  padding-top: 1.5rem;

  @include tablet {
    padding-top: 1.5rem;
  }

  @include desktop {
    padding-top: 1.5rem;
  }

  .c-pagination,
  .c-payment-record {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.c-lightning-temp {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }

    .c-payment-info-wrapper {
      @include phone {
        margin-bottom: 1.5rem;
      }

      .c-distribution-locked-warning-wrapper {
        display: flex;
        gap: 0.25rem;
        width: fit-content;

        .pill {
          height: fit-content;
          margin: auto;
          text-transform: uppercase;
        }
      }
    }
  }

  @include phone {
    .c-pagination {
      justify-content: center;
    }

    .c-payment-record {
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;

      .c-payment-info {
        margin-bottom: 2rem;
      }

      .button {
        width: 100%;
      }
    }
  }
}

.c-lightning-todo-msg {
  margin-top: 2rem;
}

.c-export-csv-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.c-export-csv-btn {
  margin-top: 0.75rem;

  @include tablet {
    position: absolute;
    bottom: 0;
    right: 11.75rem;
    margin-top: 0;
  }

  @media screen and (min-width: $desktop) and (max-width: 1310px) {
    position: relative;
    bottom: unset;
    right: unset;
    margin-top: 0.75rem;
  }
}
</style>
`, ".p-description {\n  margin-top: -1.5rem;\n  padding-bottom: 1rem;\n}\n.p-description > div {\n  margin-top: 0.25rem;\n}\n@media screen and (min-width: 1200px) {\n  .p-description {\n    margin-top: -1rem;\n    padding-bottom: 1.5rem;\n  }\n}\n\n.tabs {\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.tabs .c-tabs-link-container {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n}\n.tabs .c-tabs-chip-container {\n  align-self: center;\n  height: max-content;\n  padding: 0 1.5rem 0 0;\n  margin: 0.75rem 0;\n}\n\n.c-chip-container-below-tabs {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-bottom: 1.25rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-chip-container-below-tabs {\n    margin-bottom: 2.5rem;\n  }\n}\n\n.c-below-tabs-chip-container {\n  margin-bottom: 1.5rem;\n}\n\n.c-filters {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.5rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-filters {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.c-filters .c-method-filters {\n  display: inline-flex;\n  gap: 0.5rem;\n  width: max-content;\n}\n.c-filters .c-search-input {\n  order: -1;\n}\n@media screen and (min-width: 769px), print {\n  .c-filters .c-search-input {\n    order: unset;\n    max-width: 12.125rem;\n  }\n}\n\n.c-payment-method-filter-opt {\n  text-transform: uppercase;\n  color: var(--text_0);\n  background-color: var(--general_2);\n}\n.c-payment-method-filter-opt.is-active {\n  color: var(--primary_0);\n  border: 1px solid var(--primary_0);\n}\n.c-payment-method-filter-opt:hover, .c-payment-method-filter-opt.is-active {\n  background-color: var(--primary_2);\n}\n.c-payment-method-filter-opt[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.c-search-input ::v-deep .inputgroup .input {\n  padding-right: 2.75rem;\n}\n.c-search-input ::v-deep .inputgroup .input:placeholder-shown {\n  padding-right: 1.375rem;\n}\n\n.c-container-empty {\n  max-width: 25rem;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 2.5rem;\n}\n.c-container-empty.no-payments {\n  max-width: unset;\n}\n@media screen and (min-width: 1200px) {\n  .c-container-empty:not(.no-payments) {\n    padding-top: 4rem;\n  }\n}\n.c-container-empty .c-description {\n  margin: 1rem 0 0 0;\n  color: var(--text_1);\n}\n.c-container-empty .c-svg {\n  display: inline-block;\n  width: 8.25rem;\n  height: 8.25rem;\n  margin-left: -0.5rem;\n  filter: contrast(0%) brightness(172%);\n}\n\n.c-container-noresults {\n  padding-top: 1.5rem;\n}\n\n.card .c-container-empty {\n  padding-top: 2rem;\n}\n@media screen and (min-width: 1200px) {\n  .card .c-container-empty {\n    padding-top: 2.5rem;\n  }\n}\n.card .c-container-empty .c-svg {\n  filter: contrast(0%) brightness(186%);\n}\n\n.is-dark-theme .card .c-container-empty .c-svg {\n  opacity: 0.5;\n}\n\n.c-footer {\n  position: relative;\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-footer {\n    padding-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-footer {\n    padding-top: 1.5rem;\n  }\n}\n.c-footer .c-pagination,\n.c-footer .c-payment-record {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-footer .c-pagination.c-lightning-temp,\n.c-footer .c-payment-record.c-lightning-temp {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-footer .c-pagination .c-payment-info-wrapper,\n  .c-footer .c-payment-record .c-payment-info-wrapper {\n    margin-bottom: 1.5rem;\n  }\n}\n.c-footer .c-pagination .c-payment-info-wrapper .c-distribution-locked-warning-wrapper,\n.c-footer .c-payment-record .c-payment-info-wrapper .c-distribution-locked-warning-wrapper {\n  display: flex;\n  gap: 0.25rem;\n  width: fit-content;\n}\n.c-footer .c-pagination .c-payment-info-wrapper .c-distribution-locked-warning-wrapper .pill,\n.c-footer .c-payment-record .c-payment-info-wrapper .c-distribution-locked-warning-wrapper .pill {\n  height: fit-content;\n  margin: auto;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 768px) {\n  .c-footer .c-pagination {\n    justify-content: center;\n  }\n  .c-footer .c-payment-record {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n  }\n  .c-footer .c-payment-record .c-payment-info {\n    margin-bottom: 2rem;\n  }\n  .c-footer .c-payment-record .button {\n    width: 100%;\n  }\n}\n\n.c-lightning-todo-msg {\n  margin-top: 2rem;\n}\n\n.c-export-csv-container {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.c-export-csv-btn {\n  margin-top: 0.75rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-export-csv-btn {\n    position: absolute;\n    bottom: 0;\n    right: 11.75rem;\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 1200px) and (max-width: 1310px) {\n  .c-export-csv-btn {\n    position: relative;\n    bottom: unset;\n    right: unset;\n    margin-top: 0.75rem;\n  }\n}\n\n/*# sourceMappingURL=Payments.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__10 = "data-v-ad2266be";
var __vue_module_identifier__10 = void 0;
var __vue_is_functional_template__10 = false;
function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
// Stop initialization if group data not available
page(
  pageTestName='paymentsPage'
  pageTestHeaderName='paymentsTitle'
  :data-test-date='humanDate(Date.now())'
  v-if='ourGroupProfile'
)
  template(#title='') {{ L('Payments') }}

  template(#sidebar='' v-if='showTabSelectionMenu || paymentsListData.length > 0')
    month-overview

  add-income-details-widget(v-if='!hasIncomeDetails')

  template(v-else)
    p.p-description
      span.has-text-1(v-safe-html='introTitle')
      | &nbsp;
      i18n.has-text-1(
        @click='handleAnchorClick'
        :args='{ \\
          r1: \`<button class="link js-btnInvite" data-test="openIncomeDetailsModal">\`, \\
          r2: "</button>" \\
        }'
      ) You can change this at any time by updating your {r1}income details{r2}.

      i18n.has-text-1(
        @click='handleAnchorClick'
        tag='div'
        :args='{ \\
          r1: \`<button class="link js-btnSimulator">\`, \\
          r2: "</button>" \\
        }'
      ) Try out the {r1}payments simulator.{r2}

    section(v-if='!distributionStarted')
      .c-container-empty
        svg-contributions.c-svg
        i18n.c-description(
          tag='p'
          :args='{ startDate: distributionStart }'
        ) The distribution period begins on: {startDate}

    section(v-else-if='tabItems.length === 0 && paymentsListData.length === 0')
      .c-container-empty
        svg-contributions.c-svg
        i18n.c-description(tag='p') You haven\u2019t received any payments yet

    section.card(v-else)
      nav.tabs(
        v-if='showTabSelectionMenu'
        :aria-label='L("Payments type")'
      )
        .c-tabs-link-container(data-test='payNav')
          button.is-unstyled.tabs-link(
            v-for='(link, index) in tabItems'
            :key='index'
            :class='{ "is-active": ephemeral.activeTab === link.url}'
            :data-test='\`link-\${link.url}\`'
            :aria-expanded='ephemeral.activeTab === link.url'
            @click='handleTabClick(link.url)'
          )
            | {{ link.title }}
            span.tabs-notification(v-if='link.notification') {{ link.notification }}

        .c-tabs-chip-container.hide-phone
          next-distribution-pill

      .c-chip-container-below-tabs.hide-tablet
        next-distribution-pill.c-distribution-pill

      .c-filters(v-if='paymentsListData.length > 0')
        .c-method-filters
          button.is-small.c-payment-method-filter-opt(
            v-for='(name, method) in config.paymentMethodFilterOptions'
            type='button'
            :key='method'
            :disabled='method === "lightning" && ephemeral.activeTab !== "PaymentRowTodo"'
            :class='{ "is-active":  ephemeral.paymentMethodFilter === method }'
            @click='ephemeral.paymentMethodFilter = method'
          ) {{ name }}

        search.c-search-input(
          v-if='paymentsListData.length'
          :placeholder='L("Search payments...")'
          :label='L("Search for a payment")'
          v-model='form.searchText'
        )

      .tab-section
        .c-container(v-if='paymentsFiltered.length')
          payments-list(
            ref='paymentList'
            :titles='tableTitles'
            :paymentsList='paginateList(paymentsFiltered)'
            :paymentsType='ephemeral.activeTab'
            :selectedTodoItems.sync='ephemeral.selectedTodoItems'
          )

          .c-footer
            .c-payment-record(v-if='ephemeral.activeTab === "PaymentRowTodo"')
              .c-payment-info-wrapper
                b.c-payment-info(data-test='paymentInfo') {{ footerTodoStatus }}
                .c-distribution-locked-warning-wrapper(v-if='distributionLocked')
                  span.pill.is-warning {{ config.paymentLockedWarningOptions.title }}
                  tooltip(
                    :text='config.paymentLockedWarningOptions.tooltip'
                    :isTextCenter='true'
                  )
                    i.icon-info-circle.has-text-warning

              i18n.button(
                tag='button'
                data-test='recordPayment'
                :disabled='!ephemeral.selectedTodoItems || ephemeral.selectedTodoItems.length === 0'
                @click='onRecordPaymentClick'
              ) Send payments

            payments-pagination(
              v-else
              :count='paymentsFiltered.length'
              :rowsPerPage='ephemeral.rowsPerPage'
              :page.sync='ephemeral.currentPage'
              @change-page='handlePageChange'
              @change-rows-per-page='handleRowsPerPageChange'
            )

            .c-export-csv-container
              i18n.is-outlined.is-small.c-export-csv-btn(
                v-if='showExportPaymentsButton'
                tag='button'
                type='button'
                @click='openExportPaymentsModal'
              ) Export CSV

        .c-container(v-else-if='ephemeral.activeTab === "PaymentRowTodo" && ephemeral.paymentMethodFilter === "lightning"')
          p.c-lightning-todo-msg Coming Soon.

          .c-footer
            .c-payment-record.c-lightning-temp(v-if='isDevEnv')
              button.is-success.is-outlined.is-small(
                type='button'
                @click='openLightningPayments'
              ) Open Placeholder Modal

              button.is-outlined.is-small(
                type='button'
                @click='openLightningPaymentDetail'
              ) Open Placeholder Detail Modal

        .c-container-noresults(v-else-if='paymentsListData.length && !paymentsFiltered.length' data-test='noResults')
          i18n(tag='p' :args='{query: form.searchText }') No results for "{query}".

        .c-container-empty.no-payments(v-else data-test='noPayments')
          svg-contributions.c-svg
          i18n.c-description(tag='p') There are no payments.
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import Page from '../../../frontend/views/components/Page.vue'
import Search from '../../../frontend/views/components/Search.vue'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import SvgContributions from '../../../frontend/assets/svgs/contributions.svg'
import PaymentsList from '../../../frontend/views/containers/payments/PaymentsList.vue'
import NextDistributionPill from '../../../frontend/views/containers/payments/PaymentNextDistributionPill.vue'
import PaymentsPagination from '../../../frontend/views/containers/payments/PaymentsPagination.vue'
import MonthOverview from '../../../frontend/views/containers/payments/MonthOverview.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import PaymentsMixin from '../../../frontend/views/containers/payments/PaymentsMixin.js'
import { PAYMENT_NOT_RECEIVED, PAYMENT_COMPLETED } from '../../../frontend/model/contracts/shared/payments/index.js'
import { dateToMonthstamp, dateFromPeriodStamp, humanDate } from '../../../frontend/model/contracts/shared/time.js'
import { randomHexString, deepEqualJSONType, omit, uniq } from 'turtledash'
import { L, LTags } from '../../../frontend/common/common.js'
import {
  dummyLightningUsers,
  dummyLightningTodoItems,
  dummyLightningPaymentDetails
} from '../../../frontend/views/utils/lightning-dummy-data.js'
import { logExceptNavigationDuplicated, withGroupCurrency } from '../../../frontend/views/utils/misc.js'

export default ({
  name: 'Payments',
  mixins: [PaymentsMixin],
  components: {
    Page,
    SvgContributions,
    Search,
    Tooltip,
    PaymentsList,
    PaymentsPagination,
    NextDistributionPill,
    MonthOverview,
    AddIncomeDetailsWidget
  },
  data () {
    return {
      form: {
        searchText: ''
      },
      ephemeral: {
        activeTab: '',
        rowsPerPage: 10,
        currentPage: 0,
        paymentMethodFilter: 'all', // defaults to 'all' options
        enableSendPaymentBtn: false,
        selectedTodoItems: null
      },
      config: {
        // TODO: maybe externalize the option names as contants, (e.g. PAYMENTS_METHOD.MANUAL, PAYMENTS_METHOD.LIGHTNING)
        //       once the payment method is implemented in the 'gi.contracts/group'
        paymentMethodFilterOptions: {
          'all': L('ALL'),
          'lightning': L('Lightning'),
          'manual': L('Manual')
        },
        paymentLockedWarningOptions: {
          title: L('Distribution Locked'),
          tooltip: L('First payment sent. Distribution is now locked.')
        }
      },
      historicalPayments: {
        received: [],
        sent: [],
        todo: []
      }
    }
  },
  created () {
    this.updatePayments()
  },
  watch: {
    ourPayments (to, from) {
      if (!deepEqualJSONType(to, from)) {
        this.updatePayments()
      }
    },
    '$route': {
      immediate: true,
      handler (to, from) {
        const section = to.query.section
        if (section && this.tabSections.includes(section)) {
          this.ephemeral.activeTab = section
        } else {
          const fromQuery = from?.query || {}
          const isFromTableRelatedModals = [
            'PaymentDetail',
            'ExportPaymentsModal'
          ].includes(fromQuery.modal)
          const defaultTab = isFromTableRelatedModals
            // When payment detail modal is closed, the payment table has to remain in the previously active tab.
            // (context: https://github.com/okTurtles/group-income/issues/1686)
            ? fromQuery.section || this.tabSections[0]
            : this.tabSections[0]

          if (defaultTab) {
            this.handleTabClick(defaultTab)
          } else if (section) {
            const query = omit(this.$route.query, ['section'])
            this.$router.push({ query }).catch(logExceptNavigationDuplicated)
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'thisPeriodPaymentInfo',
      'ourGroupProfile',
      'groupSettings',
      'userDisplayNameFromID'
    ]),
    needsIncome () {
      return this.ourGroupProfile?.incomeDetailsType === 'incomeAmount'
    },
    distributionStart () {
      return this.prettyDate(this.groupSettings.distributionDate)
    },
    distributionStarted () {
      return Date.now() >= new Date(this.groupSettings.distributionDate).getTime()
    },
    distributionLocked () {
      if (!this.thisPeriodPaymentInfo) {
        return false
      }
      const { paymentsFrom } = this.thisPeriodPaymentInfo
      const { payments } = this.currentGroupState

      for (const fromMemberID of Object.keys(paymentsFrom)) {
        for (const toMemberID of Object.keys(paymentsFrom[fromMemberID])) {
          for (const hash of paymentsFrom[fromMemberID][toMemberID]) {
            if (payments[hash].data.status === PAYMENT_COMPLETED) {
              return true
            }
          }
        }
      }
      return false
    },
    tabItems () {
      const items = []

      if (!this.distributionStarted) {
        return items
      }

      if (!this.needsIncome) {
        items.push({
          title: L('Todo'),
          url: 'PaymentRowTodo',
          notification: this.paymentsTodo.length
        })
      }

      const doesNotNeedIncomeAndDidReceiveBefore = !this.needsIncome && this.paymentsReceived.length

      if (this.needsIncome || doesNotNeedIncomeAndDidReceiveBefore) {
        items.push({
          title: L('Received'),
          url: 'PaymentRowReceived'
        })
      }

      if (!this.needsIncome || this.paymentsSent.length) {
        items.push({
          title: L('Completed'),
          url: 'PaymentRowSent'
        })
      }

      return items
    },
    tableTitles () {
      const { activeTab } = this.ephemeral

      return activeTab === 'PaymentRowTodo'
        ? {
            one: L('Sent to'),
            two: L('Amount'),
            three: L('Accepted methods'),
            four: L('Due on')
          }
        : {
            one: activeTab === 'PaymentRowSent' ? L('Sent to') : L('Sent by'),
            two: L('Amount'),
            three: L('Payment method'),
            four: L('Payment date')
          }
    },
    tabSections () {
      return this.tabItems.map(tabItem => tabItem.url)
    },
    introTitle () {
      return this.needsIncome
        ? L('You are currently {strong_}receiving{_strong} mincome.', LTags('strong'))
        : L('You are currently {strong_}sending{_strong} mincome.', LTags('strong'))
    },
    // paymentsCount () {
    //   if (Object.keys(this.groupSettings).length) {
    //     return this.paymentHashesForPeriod(await this.historicalPeriodStampGivenDate(this.groupSettings.distributionDate))?.length
    //   }
    // },
    paymentsTodo () {
      const payments = []
      const sentPayments = this.paymentsSent

      for (const payment of this.historicalPayments.todo) {
        payments.push({
          hash: payment.hash || randomHexString(15),
          toMemberID: payment.toMemberID,
          displayName: this.userDisplayNameFromID(payment.toMemberID),
          amount: payment.amount,
          total: payment.total,
          partial: payment.partial,
          isLate: payment.isLate,
          date: payment.dueOn
        })
      }

      const notReceived = sentPayments.filter(p => p.data.status === PAYMENT_NOT_RECEIVED)
      return [notReceived, payments].flat()
    },
    paymentsSent () {
      return this.historicalPayments.sent.map(payment => ({
        ...payment,
        toMemberID: payment.data.toMemberID,
        displayName: this.userDisplayNameFromID(payment.data.toMemberID),
        monthstamp: dateToMonthstamp(payment.meta.createdDate),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod)
    },
    paymentsReceived () {
      return this.historicalPayments.received.map(payment => ({
        ...payment,
        fromMemberID: payment.data.fromMemberID,
        displayName: this.userDisplayNameFromID(payment.data.fromMemberID),
        date: payment.meta.createdDate
      })).sort(this.sortPaymentByDescendingPeriod)
    },
    paymentsListData () {
      return {
        PaymentRowTodo: () => this.paymentsTodo,
        PaymentRowSent: () => this.paymentsSent,
        PaymentRowReceived: () => this.paymentsReceived
      }[this.ephemeral.activeTab]?.() || []
    },
    hasIncomeDetails () {
      return !!this.ourGroupProfile?.incomeDetailsType
    },
    paymentsFiltered () {
      return this.paymentsListData.filter(this.filterPayment)
    },
    footerTodoStatus () {
      const amount = this.paymentsTodo.reduce((total, p) => total + p.amount, 0)
      const memberIds = uniq(this.paymentsTodo.map(item => item.toMemberID))
      const membersLen = memberIds.length

      return membersLen === 1
        ? L('{amt} in total, to 1 member', { amt: this.withGroupCurrency(amount) })
        : L('{amt} in total, to {count} members', { amt: this.withGroupCurrency(amount), count: membersLen })
    },
    showTabSelectionMenu () {
      return this.tabItems.length > 0
    },
    showExportPaymentsButton () {
      return ['PaymentRowSent', 'PaymentRowReceived'].includes(this.ephemeral.activeTab) &&
        this.paymentsListData.length > 0
    },
    isDevEnv () {
      return process.env.NODE_ENV === 'development'
    }
  },
  methods: {
    humanDate,
    withGroupCurrency,
    prettyDate (date) {
      return humanDate(date, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
    },
    openModal (name, props) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name, null, props)
    },
    filterPayment (payment) {
      const {
        amount, displayName,
        // NOTE: 'accepted payment method' is not implemented yet, so 'acceptedMethods' just a dummy field for now.
        // TODO: update the field name & the related logic (e.g. 'matchesMethodFilter' below) accordingly
        //       once 'accepted payment method' is implemented in the contract.
        acceptedMethods = ['manual']
      } = payment
      const methodFilterVal = this.ephemeral.paymentMethodFilter
      const searchQuery = this.form.searchText

      const matchesMethodFilter = methodFilterVal === 'all' || acceptedMethods.includes(methodFilterVal)
      const matchesSearchQuery = searchQuery === '' ||
        \`\${amount}\${displayName.toUpperCase()}\`.indexOf(searchQuery.toUpperCase()) !== -1

      return matchesMethodFilter && matchesSearchQuery
    },
    sortPaymentByDescendingPeriod (a, b) {
      return dateFromPeriodStamp(b.period) - dateFromPeriodStamp(a.period)
    },
    paginateList (list) {
      const start = this.ephemeral.rowsPerPage * this.ephemeral.currentPage
      return list.slice(start, start + this.ephemeral.rowsPerPage)
    },
    handleTabClick (url) {
      const query = {
        ...this.$route.query,
        section: url
      }
      this.$router.push({ query }).catch(logExceptNavigationDuplicated)
    },
    handleAnchorClick ({ target }) {
      const contains = className => target.classList.contains(className)

      if (contains('js-btnInvite')) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'IncomeDetails')
      } else if (contains('js-btnSimulator')) {
        window.open(
          'https://groupincome.org/simulator/',
          '_blank'
        )
      }
    },
    handlePageChange (type) {
      const current = this.ephemeral.currentPage
      this.ephemeral.currentPage = type === 'next' ? current + 1 : current - 1
    },
    handleRowsPerPageChange (value) {
      this.ephemeral.rowsPerPage = value
      this.ephemeral.currentPage = 0 // go back to first page.
    },
    onRecordPaymentClick () {
      this.openModal('RecordPayment', { todoItems: this.ephemeral.selectedTodoItems })
    },
    async openLightningPayments () {
      const wait = (milli) => new Promise(resolve => setTimeout(resolve, milli))
      let contractID

      // check if the fake users have been created and sign them up if not.
      // TODO: to be removed once lightning network is implemented
      for (const userData of dummyLightningUsers) {
        contractID = await sbp('namespace/lookup', userData.username)

        if (!contractID) {
          console.log(\`signing up a fake user [\${userData.username}]\`)
          await sbp('gi.app/identity/signup', userData)
        }
      }

      if (!contractID) {
        // if fake users have just been created,
        // wait a little bit for the avatar image to be prepared
        await wait(100)
      }

      this.openModal('SendPaymentsViaLightning', { todoItems: dummyLightningTodoItems })
    },
    openLightningPaymentDetail () {
      this.openModal('PaymentDetail', {
        lightningPayment: dummyLightningPaymentDetails
      })
    },
    async updatePayments () {
      // NOTE: no need to calculate while logging out
      if (Object.keys(this.groupSettings).length) {
        this.historicalPayments = await this.getAllPaymentsInTypes()
      }
    },
    openExportPaymentsModal () {
      const modalTypeMap = {
        'PaymentRowSent': 'sent',
        'PaymentRowReceived': 'received'
      }

      sbp('okTurtles.events/emit', OPEN_MODAL, 'ExportPaymentsModal',
        { type: modalTypeMap[this.ephemeral.activeTab] }, // query params
        { data: this.paymentsListData }
      )
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

// Header
.p-description {
  margin-top: -1.5rem;
  padding-bottom: 1rem;

  > div {
    margin-top: 0.25rem;
  }

  @include desktop {
    margin-top: -1rem;
    padding-bottom: 1.5rem;
  }
}

// Tabs
.tabs {
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  .c-tabs-link-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .c-tabs-chip-container {
    align-self: center;
    height: max-content;
    padding: 0 1.5rem 0 0;
    margin: 0.75rem 0;
  }
}

.c-chip-container-below-tabs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.25rem;

  @include tablet {
    margin-bottom: 2.5rem;
  }
}

.c-below-tabs-chip-container {
  margin-bottom: 1.5rem;
}

// Search
.c-filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @include tablet {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .c-method-filters {
    display: inline-flex;
    gap: 0.5rem;
    width: max-content;
  }

  .c-search-input {
    order: -1;

    @include tablet {
      order: unset;
      max-width: 12.125rem;
    }
  }
}

.c-payment-method-filter-opt {
  text-transform: uppercase;
  color: $text_0;
  background-color: $general_2;

  &.is-active {
    color: $primary_0;
    border: 1px solid $primary_0;
  }

  &:hover,
  &.is-active {
    background-color: $primary_2;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.c-search-input {
  ::v-deep .inputgroup .input {
    padding-right: 2.75rem;

    &:placeholder-shown {
      // if the text input element is empty.
      padding-right: 1.375rem;
    }
  }
}

.c-container-empty {
  max-width: 25rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 2.5rem;

  &.no-payments {
    max-width: unset;
  }

  @include desktop {
    &:not(.no-payments) {
      padding-top: 4rem;
    }
  }

  .c-description {
    margin: 1rem 0 0 0;
    color: $text_1;
  }

  .c-svg {
    display: inline-block;
    width: 8.25rem;
    height: 8.25rem;
    margin-left: -0.5rem;
    filter: contrast(0%) brightness(172%);
  }
}

.c-container-noresults {
  padding-top: 1.5rem;
}

.card .c-container-empty {
  padding-top: 2rem;

  @include desktop {
    padding-top: 2.5rem;
  }

  .c-svg {
    filter: contrast(0%) brightness(186%);
  }
}

.is-dark-theme {
  .card .c-container-empty .c-svg {
    opacity: 0.5;
  }
}

// Footer
.c-footer {
  position: relative;
  padding-top: 1.5rem;

  @include tablet {
    padding-top: 1.5rem;
  }

  @include desktop {
    padding-top: 1.5rem;
  }

  .c-pagination,
  .c-payment-record {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.c-lightning-temp {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }

    .c-payment-info-wrapper {
      @include phone {
        margin-bottom: 1.5rem;
      }

      .c-distribution-locked-warning-wrapper {
        display: flex;
        gap: 0.25rem;
        width: fit-content;

        .pill {
          height: fit-content;
          margin: auto;
          text-transform: uppercase;
        }
      }
    }
  }

  @include phone {
    .c-pagination {
      justify-content: center;
    }

    .c-payment-record {
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;

      .c-payment-info {
        margin-bottom: 2rem;
      }

      .button {
        width: 100%;
      }
    }
  }
}

.c-lightning-todo-msg {
  margin-top: 2rem;
}

.c-export-csv-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.c-export-csv-btn {
  margin-top: 0.75rem;

  @include tablet {
    position: absolute;
    bottom: 0;
    right: 11.75rem;
    margin-top: 0;
  }

  @media screen and (min-width: $desktop) and (max-width: 1310px) {
    position: relative;
    bottom: unset;
    right: unset;
    margin-top: 0.75rem;
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
var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10(
  { render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10 },
  __vue_inject_styles__10,
  __vue_script__10,
  __vue_scope_id__10,
  __vue_is_functional_template__10,
  __vue_module_identifier__10,
  false,
  __vue_create_injector__10,
  void 0,
  void 0
);
var Payments_default = __vue_component__10;
export {
  Payments_default as default
};
//# sourceMappingURL=Payments-LFM2GSYZ-cached.js.map
