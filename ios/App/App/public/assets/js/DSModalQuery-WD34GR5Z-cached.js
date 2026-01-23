import {
  LoginForm_default
} from "./chunk-XCZJSM7Z-cached.js";
import "./chunk-OLAVKC5T-cached.js";
import "./chunk-IR2UUO3D-cached.js";
import "./chunk-W7XZLSPA-cached.js";
import "./chunk-SC5GGDZP-cached.js";
import "./chunk-K33NK7LD-cached.js";
import "./chunk-GLMIE3CJ-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-YUM5UY76-cached.js";
import "./chunk-LO4V4OP4-cached.js";
import "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import "./chunk-AMO3YQCO-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import "./chunk-OQLS3DKT-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_QUERIES
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/design-system/DSModalQuery.vue
var __vue_script__ = {
  name: "LoginModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    LoginForm: LoginForm_default
  },
  created() {
    const name = this.$route.query.name;
    if (name) {
      this.name = name;
      esm_default("okTurtles.events/emit", SET_MODAL_QUERIES, "DSModalQuery", { name });
    } else {
      console.warn('DSModalQuery: Missing valid query "name".');
      esm_default("okTurtles.events/emit", CLOSE_MODAL);
    }
  },
  data: () => ({
    name: null
  }),
  methods: {
    openModal(name) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, name);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    {
      ref: "modal",
      staticClass: "has-background",
      attrs: { a11yTitle: _vm.L("Hello") }
    },
    [
      _c("template", { slot: "title" }, [
        _c("h1", { staticClass: "is-title-1" }, [
          _vm._v("Hello " + _vm._s(_vm.name) + "!")
        ])
      ]),
      _c("p", [
        _vm._v("Check in this demo, the "),
        _c("code", [_vm._v("create()")]),
        _vm._v(" method: we read the query and update the modal using "),
        _c("code", [_vm._v("SET_MODAL_QUERIES")]),
        _vm._v(
          ". That's used to remove the passed query from the URL when the modal is closed, even if the user accesses the modal through direct link or does refresh the page."
        )
      ]),
      _c("p", [
        _vm._v("Real world examples: "),
        _c("code", [_vm._v("RemoveMember.vue")]),
        _vm._v(" and "),
        _c("code", [_vm._v("PaymentDetail.vue")]),
        _vm._v(".")
      ]),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.openModal("SignupModal");
            }
          }
        },
        [_vm._v("Open SubModal")]
      )
    ],
    2
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
  component.__file = `<template lang='pug'>
  modal-template(class='has-background' ref='modal' :a11yTitle='L("Hello")')
    template(slot='title')
      h1.is-title-1 Hello {{name}}!

    p Check in this demo, the #[code create()] method: we read the query and update the modal using #[code SET_MODAL_QUERIES]. That's used to remove the passed query from the URL when the modal is closed, even if the user accesses the modal through direct link or does refresh the page.
    p Real world examples: #[code RemoveMember.vue] and #[code PaymentDetail.vue].

    button(@click='openModal("SignupModal")') Open SubModal
</template>

<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import LoginForm from '../../../../frontend/views/containers/access/LoginForm.vue'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'

export default ({
  name: 'LoginModal',
  components: {
    ModalTemplate,
    LoginForm
  },
  created () {
    const name = this.$route.query.name

    if (name) {
      this.name = name
      sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'DSModalQuery', { name })
    } else {
      console.warn('DSModalQuery: Missing valid query "name".')
      sbp('okTurtles.events/emit', CLOSE_MODAL)
    }
  },
  data: () => ({
    name: null
  }),
  methods: {
    openModal (name) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name)
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
var DSModalQuery_default = __vue_component__;
export {
  DSModalQuery_default as default
};
//# sourceMappingURL=DSModalQuery-WD34GR5Z-cached.js.map
