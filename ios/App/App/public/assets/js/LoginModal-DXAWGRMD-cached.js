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
  REPLACE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/access/LoginModal.vue
var __vue_script__ = {
  name: "LoginModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    LoginForm: LoginForm_default
  },
  data() {
    return {
      ephemeral: {
        isLoggingIn: false
      }
    };
  },
  methods: {
    onPostSubmit() {
      this.$refs.modal.close();
      this.$router.push({ query: this.$route.query, path: this.$route.query.next ?? "/" }).catch(() => {
      });
    },
    onLoginStatusChange(status) {
      switch (status) {
        case "submitting":
          this.ephemeral.isLoggingIn = true;
          break;
        case "success": {
          this.ephemeral.isLoggingIn = false;
          this.$nextTick(this.onPostSubmit);
          break;
        }
        default:
          this.ephemeral.isLoggingIn = false;
      }
    },
    showSignupModal() {
      esm_default("okTurtles.events/emit", REPLACE_MODAL, "SignupModal");
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
      attrs: { a11yTitle: _vm.L("Log in"), loading: _vm.ephemeral.isLoggingIn }
    },
    [
      _c("template", { slot: "title" }, [_c("i18n", [_vm._v("Log in")])], 1),
      _c("login-form", { on: { "login-status": _vm.onLoginStatusChange } }),
      _c("template", { slot: "footer" }, [
        _c(
          "p",
          [
            _c("i18n", [_vm._v("Not on Group Income yet?")]),
            _vm._v("\xA0"),
            _c(
              "i18n",
              {
                staticClass: "link",
                attrs: { tag: "button", "data-test": "goToSignup" },
                on: { click: _vm.showSignupModal }
              },
              [_vm._v("Create an account")]
            )
          ],
          1
        )
      ])
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
  modal-template(
    class='has-background'
    ref='modal'
    :a11yTitle='L("Log in")'
    :loading='ephemeral.isLoggingIn'
  )
    template(slot='title')
      i18n Log in

    login-form(@login-status='onLoginStatusChange')

    template(slot='footer')
      p
        i18n Not on Group Income yet?
        | &nbsp;
        i18n.link(tag='button' @click='showSignupModal' data-test='goToSignup') Create an account
</template>

<script>
import sbp from '@sbp/sbp'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import LoginForm from '../../../../frontend/views/containers/access/LoginForm.vue'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'

export default ({
  name: 'LoginModal',
  components: {
    ModalTemplate,
    LoginForm
  },
  data () {
    return {
      ephemeral: {
        isLoggingIn: false
      }
    }
  },
  methods: {
    onPostSubmit () {
      this.$refs.modal.close()
      this.$router.push({ query: this.$route.query, path: this.$route.query.next ?? '/' }).catch(() => {})
    },
    onLoginStatusChange (status) {
      switch (status) {
        case 'submitting':
          this.ephemeral.isLoggingIn = true
          break
        case 'success': {
          this.ephemeral.isLoggingIn = false
          this.$nextTick(this.onPostSubmit)
          break
        }
        default: // 'error' status
          this.ephemeral.isLoggingIn = false
      }
    },
    showSignupModal () {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'SignupModal')
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
var LoginModal_default = __vue_component__;
export {
  LoginModal_default as default
};
//# sourceMappingURL=LoginModal-DXAWGRMD-cached.js.map
