import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  ProfileCard_default
} from "./chunk-GDHKI2YN-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";

// frontend/views/containers/payments/payment-row/PaymentRow.vue
var __vue_script__ = {
  name: "PaymentRowSent",
  components: {
    ProfileCard: ProfileCard_default,
    AvatarUser: AvatarUser_default
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  methods: {
    humanDate
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tr", { staticClass: "c-row", attrs: { "data-test": "payRow" } }, [
    _vm.$slots["cellPrefix"] ? _c("td", [_vm._t("cellPrefix")], 2) : _vm._e(),
    _c(
      "td",
      { staticClass: "c-td-user" },
      [
        _vm._t("cellUser"),
        !_vm.$slots["cellUser"] ? [
          _c(
            "div",
            { staticClass: "c-user" },
            [
              _c(
                "profile-card",
                {
                  attrs: {
                    contractID: _vm.payment.toMemberID,
                    direction: "top-left"
                  }
                },
                [
                  _c("avatar-user", {
                    staticClass: "c-avatar",
                    attrs: {
                      contractID: _vm.payment.toMemberID,
                      size: "xs"
                    }
                  }),
                  _c("strong", { staticClass: "c-name" }, [
                    _vm._v(_vm._s(_vm.payment.displayName))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _c(
            "span",
            {
              staticClass: "c-user-date",
              class: _vm.payment.isLate ? "pill is-danger" : "has-text-1"
            },
            [_vm._v(_vm._s(_vm.humanDate(_vm.payment.date)))]
          )
        ] : _vm._e()
      ],
      2
    ),
    _vm.$slots["cellAmount"] ? _c("td", { staticClass: "c-td-amount" }, [_vm._t("cellAmount")], 2) : _vm._e(),
    _vm.$slots["cellMethod"] ? _c("td", [_vm._t("cellMethod")], 2) : _vm._e(),
    _vm.$slots["cellDate"] ? _c("td", [_vm._t("cellDate")], 2) : _vm._e(),
    _vm.$slots["cellRelativeTo"] ? _c("td", [_vm._t("cellRelativeTo")], 2) : _vm._e(),
    _c("td", { staticClass: "c-td-actions" }, [
      _c("div", { staticClass: "cpr-actions" }, [_vm._t("cellActions")], 2)
    ]),
    _vm.$slots["cellSuffix"] ? _c("td", [_vm._t("cellSuffix")], 2) : _vm._e()
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-ebffae6c_0", { source: ".cpr-date[data-v-ebffae6c] {\n  margin-left: 0;\n  white-space: nowrap;\n}\n@media screen and (max-width: 768px) {\n.cpr-date[data-v-ebffae6c] {\n    display: none;\n}\n}\n.cpr-actions[data-v-ebffae6c],\n.c-user[data-v-ebffae6c] {\n  display: flex;\n  align-items: center;\n}\n.cpr-actions[data-v-ebffae6c] {\n  justify-content: space-between;\n}\n.c-avatar[data-v-ebffae6c] {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-avatar[data-v-ebffae6c] {\n    display: none;\n}\n}\n.c-name[data-v-ebffae6c] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n@media screen and (max-width: 768px) {\n.c-td-amount[data-v-ebffae6c] {\n    text-align: right;\n}\n}\n.c-user-date[data-v-ebffae6c] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n.c-user-date[data-v-ebffae6c] {\n    display: inline-block;\n    margin-left: 0;\n}\n}\n@media screen and (min-width: 1200px) {\ntd.c-td-actions[data-v-ebffae6c] {\n    padding-right: 1.5rem;\n}\n}\n\n/*# sourceMappingURL=PaymentRow.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/payment-row/PaymentRow.vue", "PaymentRow.vue"], "names": [], "mappings": "AAkEA;EACA,cAAA;EACA,mBAAA;ACjEA;AACA;AD8DA;IAKA,aAAA;AChEE;AACF;ADmEA;;EAEA,aAAA;EACA,mBAAA;AChEA;ADmEA;EACA,8BAAA;AChEA;ADmEA;EACA,oBAAA;AChEA;AACA;AD8DA;IAIA,aAAA;AC/DE;AACF;ADkEA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AC/DA;AAEA;ADgEA;IAEA,iBAAA;AC/DE;AACF;ADkEA;EACA,aAAA;AC/DA;AACA;AD6DA;IAIA,qBAAA;IACA,cAAA;AC9DE;AACF;AAEA;AD+DA;IAEA,qBAAA;AC9DE;AACF;;AAEA,yCAAyC", "file": "PaymentRow.vue", "sourcesContent": [`<template lang='pug'>
  tr.c-row(data-test='payRow')
    td(v-if='$slots["cellPrefix"]')
      slot(name='cellPrefix')
    td.c-td-user
      slot(name='cellUser')
      template(v-if='!$slots["cellUser"]')
        .c-user
          profile-card(
            :contractID='payment.toMemberID'
            direction='top-left'
          )
            avatar-user.c-avatar(:contractID='payment.toMemberID' size='xs')
            strong.c-name {{payment.displayName}}

        span.c-user-date(:class='payment.isLate ? "pill is-danger" : "has-text-1"') {{ humanDate(payment.date) }}

    td.c-td-amount(v-if='$slots["cellAmount"]')
      slot(name='cellAmount')

    td(v-if='$slots["cellMethod"]')
      slot(name='cellMethod')

    td(v-if='$slots["cellDate"]')
      slot(name='cellDate')

    td(v-if='$slots["cellRelativeTo"]')
      slot(name='cellRelativeTo')

    td.c-td-actions
      .cpr-actions
        slot(name='cellActions')

    td(v-if='$slots["cellSuffix"]')
      slot(name='cellSuffix')
</template>

<script>
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../../frontend/views/components/ProfileCard.vue'
import { humanDate } from '../../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'PaymentRowSent',
  components: {
    ProfileCard,
    AvatarUser
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  methods: {
    humanDate
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

// .cpr = c-payments-row
// .cpr-* is used/overridden by parents

.cpr-date {
  margin-left: 0;
  white-space: nowrap;

  @include phone {
    display: none;
  }
}

.cpr-actions,
.c-user {
  display: flex;
  align-items: center;
}

.cpr-actions {
  justify-content: space-between;
}

.c-avatar {
  margin-right: 0.5rem;

  @include phone {
    display: none;
  }
}

.c-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.c-td-amount {
  @include phone {
    text-align: right;
  }
}

.c-user-date {
  display: none;

  @include phone {
    display: inline-block;
    margin-left: 0;
  }
}

td.c-td-actions {
  @include desktop {
    padding-right: 1.5rem;
  }
}
</style>
`, ".cpr-date {\n  margin-left: 0;\n  white-space: nowrap;\n}\n@media screen and (max-width: 768px) {\n  .cpr-date {\n    display: none;\n  }\n}\n\n.cpr-actions,\n.c-user {\n  display: flex;\n  align-items: center;\n}\n\n.cpr-actions {\n  justify-content: space-between;\n}\n\n.c-avatar {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-avatar {\n    display: none;\n  }\n}\n\n.c-name {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 768px) {\n  .c-td-amount {\n    text-align: right;\n  }\n}\n\n.c-user-date {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .c-user-date {\n    display: inline-block;\n    margin-left: 0;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  td.c-td-actions {\n    padding-right: 1.5rem;\n  }\n}\n\n/*# sourceMappingURL=PaymentRow.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-ebffae6c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  tr.c-row(data-test='payRow')
    td(v-if='$slots["cellPrefix"]')
      slot(name='cellPrefix')
    td.c-td-user
      slot(name='cellUser')
      template(v-if='!$slots["cellUser"]')
        .c-user
          profile-card(
            :contractID='payment.toMemberID'
            direction='top-left'
          )
            avatar-user.c-avatar(:contractID='payment.toMemberID' size='xs')
            strong.c-name {{payment.displayName}}

        span.c-user-date(:class='payment.isLate ? "pill is-danger" : "has-text-1"') {{ humanDate(payment.date) }}

    td.c-td-amount(v-if='$slots["cellAmount"]')
      slot(name='cellAmount')

    td(v-if='$slots["cellMethod"]')
      slot(name='cellMethod')

    td(v-if='$slots["cellDate"]')
      slot(name='cellDate')

    td(v-if='$slots["cellRelativeTo"]')
      slot(name='cellRelativeTo')

    td.c-td-actions
      .cpr-actions
        slot(name='cellActions')

    td(v-if='$slots["cellSuffix"]')
      slot(name='cellSuffix')
</template>

<script>
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../../frontend/views/components/ProfileCard.vue'
import { humanDate } from '../../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'PaymentRowSent',
  components: {
    ProfileCard,
    AvatarUser
  },
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  methods: {
    humanDate
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

// .cpr = c-payments-row
// .cpr-* is used/overridden by parents

.cpr-date {
  margin-left: 0;
  white-space: nowrap;

  @include phone {
    display: none;
  }
}

.cpr-actions,
.c-user {
  display: flex;
  align-items: center;
}

.cpr-actions {
  justify-content: space-between;
}

.c-avatar {
  margin-right: 0.5rem;

  @include phone {
    display: none;
  }
}

.c-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.c-td-amount {
  @include phone {
    text-align: right;
  }
}

.c-user-date {
  display: none;

  @include phone {
    display: inline-block;
    margin-left: 0;
  }
}

td.c-td-actions {
  @include desktop {
    padding-right: 1.5rem;
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
var PaymentRow_default = __vue_component__;

export {
  PaymentRow_default
};
//# sourceMappingURL=chunk-NO7PSN3H-cached.js.map
