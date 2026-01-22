import {
  PasswordForm_default
} from "./chunk-GLMIE3CJ-cached.js";
import {
  Secret
} from "./chunk-DRW7AMFK-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import "./chunk-LO4V4OP4-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  require_sameAs,
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  IDENTITY_PASSWORD_MIN_CHARS
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/access/PasswordModal.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var import_sameAs = __toESM(require_sameAs());
var __vue_script__ = {
  name: "PasswordModal",
  mixins: [import_vuelidate.validationMixin],
  data() {
    return {
      form: {
        current: null,
        newPassword: null,
        confirm: null
      },
      processing: false
    };
  },
  validations: {
    form: {
      current: {
        [L("Your current password is required.")]: import_validators.required
      },
      newPassword: {
        [L("A password is required.")]: import_validators.required,
        nonWhitespace: (value) => /^\S+$/.test(value),
        [L("Your password must be at least {minChars} characters long.", { minChars: IDENTITY_PASSWORD_MIN_CHARS })]: (0, import_validators.minLength)(IDENTITY_PASSWORD_MIN_CHARS)
      },
      confirm: {
        [L("Please confirm your password.")]: import_validators.required,
        [L("Passwords do not match.")]: (0, import_sameAs.default)("newPassword")
      }
    }
  },
  components: {
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    ModalTemplate: ModalTemplate_default,
    PasswordForm: PasswordForm_default
  },
  methods: {
    closeModal() {
      this.$refs.modalTemplate.close();
    },
    changePassword() {
      if (this.processing) return;
      this.processing = true;
      (async () => {
        try {
          await esm_default(
            "gi.app/identity/changePassword",
            new Secret(this.form.current),
            new Secret(this.form.newPassword)
          );
          this.closeModal();
        } catch (error) {
          console.error("[PasswordModal.vue]", error);
          this.$refs.formMsg.danger(L("Invalid password"));
        }
      })().finally(() => {
        this.processing = false;
      });
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
      ref: "modalTemplate",
      staticClass: "is-centered is-left-aligned",
      attrs: {
        "back-on-mobile": "back-on-mobile",
        "data-test": "PasswordModal",
        a11yTitle: _vm.L("Change Password")
      }
    },
    [
      _c("template", { slot: "title" }, [_vm._v("Change password")]),
      _c(
        "form",
        {
          ref: "form",
          attrs: { novalidate: "novalidate", name: "formData" },
          on: {
            submit: function($event) {
              $event.preventDefault();
              return _vm.changePassword($event);
            }
          }
        },
        [
          _c("password-form", {
            attrs: {
              name: "current",
              label: _vm.L("Current Password"),
              value: _vm.form,
              $v: _vm.$v,
              hasIconRight: true,
              showPlaceholder: false,
              showPassword: false,
              size: "is-large"
            },
            on: { enter: _vm.changePassword }
          }),
          _c("password-form", {
            attrs: {
              name: "newPassword",
              label: _vm.L("New Password"),
              value: _vm.form,
              $v: _vm.$v,
              hasIconRight: true,
              showPlaceholder: false,
              showPassword: false,
              size: "is-large"
            },
            on: { enter: _vm.changePassword }
          }),
          _c("password-form", {
            attrs: {
              name: "confirm",
              label: _vm.L("Confirm new Password"),
              value: _vm.form,
              $v: _vm.$v,
              hasIconRight: true,
              showPlaceholder: false,
              showPassword: false,
              size: "is-large"
            },
            on: { enter: _vm.changePassword }
          }),
          _c("banner-scoped", { ref: "formMsg" }),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-outlined",
                  attrs: {
                    tag: "button",
                    type: "button",
                    "data-test": "cancel"
                  },
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  attrs: {
                    "data-test": "submit",
                    disabled: _vm.$v.form.$invalid || _vm.processing
                  },
                  on: { click: _vm.changePassword }
                },
                [_vm._v(_vm._s(_vm.L("Change password")))]
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
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-cb863340_0", { source: ".modal-card-body[data-v-cb863340] {\n  padding-top: 0;\n}\n\n/*# sourceMappingURL=PasswordModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/access/PasswordModal.vue", "PasswordModal.vue"], "names": [], "mappings": "AA0IA;EACA,cAAA;ACzIA;;AAEA,4CAA4C", "file": "PasswordModal.vue", "sourcesContent": [`<template lang='pug'>
modal-template(class='is-centered is-left-aligned' back-on-mobile=true ref='modalTemplate' data-test='PasswordModal' :a11yTitle='L("Change Password")')
  template(slot='title') Change password

  form(
    novalidate
    ref='form'
    name='formData'
    @submit.prevent='changePassword'
  )
    password-form(
      name='current'
      :label='L("Current Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    password-form(
      name='newPassword'
      :label='L("New Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    password-form(
      name='confirm'
      :label='L("Confirm new Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    banner-scoped(ref='formMsg')

    .buttons
      i18n.is-outlined(
        tag='button'
        type='button'
        data-test='cancel'
        @click='closeModal'
      ) Cancel

      button-submit(
        @click='changePassword'
        data-test='submit'
        :disabled='$v.form.$invalid || processing'
      ) {{ L('Change password') }}
</template>
<script>
import { validationMixin } from 'vuelidate'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import { IDENTITY_PASSWORD_MIN_CHARS as passwordMinChars } from '../../../../frontend/model/contracts/shared/constants.js'
import sbp from '@sbp/sbp'
import { required, minLength } from 'vuelidate/lib/validators'
import sameAs from 'vuelidate/lib/validators/sameAs.js'
import { L } from '../../../../frontend/common/common.js'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'PasswordModal',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        current: null,
        newPassword: null,
        confirm: null
      },
      processing: false
    }
  },
  validations: {
    form: {
      current: {
        [L('Your current password is required.')]: required
      },
      newPassword: {
        [L('A password is required.')]: required,
        nonWhitespace: value => /^\\S+$/.test(value),
        [L('Your password must be at least {minChars} characters long.', { minChars: passwordMinChars })]: minLength(passwordMinChars)
      },
      confirm: {
        [L('Please confirm your password.')]: required,
        [L('Passwords do not match.')]: sameAs('newPassword')
      }
    }
  },
  components: {
    BannerScoped,
    ButtonSubmit,
    ModalTemplate,
    PasswordForm
  },
  methods: {
    closeModal () {
      // We access directly the modal here to avoid broacasting event to every possible modal
      this.$refs.modalTemplate.close()
    },
    changePassword () {
      if (this.processing) return
      this.processing = true
      ;(async () => {
        try {
          await sbp('gi.app/identity/changePassword',
            new Secret(this.form.current),
            new Secret(this.form.newPassword)
          )
          this.closeModal()
        } catch (error) {
          console.error('[PasswordModal.vue]', error)
          this.$refs.formMsg.danger(L('Invalid password'))
        }
      })().finally(() => {
        this.processing = false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.modal-card-body {
  padding-top: 0;
}
</style>
`, ".modal-card-body {\n  padding-top: 0;\n}\n\n/*# sourceMappingURL=PasswordModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-cb863340";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(class='is-centered is-left-aligned' back-on-mobile=true ref='modalTemplate' data-test='PasswordModal' :a11yTitle='L("Change Password")')
  template(slot='title') Change password

  form(
    novalidate
    ref='form'
    name='formData'
    @submit.prevent='changePassword'
  )
    password-form(
      name='current'
      :label='L("Current Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    password-form(
      name='newPassword'
      :label='L("New Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    password-form(
      name='confirm'
      :label='L("Confirm new Password")'
      :value='form'
      :$v='$v'
      @enter='changePassword'
      :hasIconRight='true'
      :showPlaceholder='false'
      :showPassword='false'
      size='is-large'
    )

    banner-scoped(ref='formMsg')

    .buttons
      i18n.is-outlined(
        tag='button'
        type='button'
        data-test='cancel'
        @click='closeModal'
      ) Cancel

      button-submit(
        @click='changePassword'
        data-test='submit'
        :disabled='$v.form.$invalid || processing'
      ) {{ L('Change password') }}
</template>
<script>
import { validationMixin } from 'vuelidate'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import { IDENTITY_PASSWORD_MIN_CHARS as passwordMinChars } from '../../../../frontend/model/contracts/shared/constants.js'
import sbp from '@sbp/sbp'
import { required, minLength } from 'vuelidate/lib/validators'
import sameAs from 'vuelidate/lib/validators/sameAs.js'
import { L } from '../../../../frontend/common/common.js'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'PasswordModal',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        current: null,
        newPassword: null,
        confirm: null
      },
      processing: false
    }
  },
  validations: {
    form: {
      current: {
        [L('Your current password is required.')]: required
      },
      newPassword: {
        [L('A password is required.')]: required,
        nonWhitespace: value => /^\\S+$/.test(value),
        [L('Your password must be at least {minChars} characters long.', { minChars: passwordMinChars })]: minLength(passwordMinChars)
      },
      confirm: {
        [L('Please confirm your password.')]: required,
        [L('Passwords do not match.')]: sameAs('newPassword')
      }
    }
  },
  components: {
    BannerScoped,
    ButtonSubmit,
    ModalTemplate,
    PasswordForm
  },
  methods: {
    closeModal () {
      // We access directly the modal here to avoid broacasting event to every possible modal
      this.$refs.modalTemplate.close()
    },
    changePassword () {
      if (this.processing) return
      this.processing = true
      ;(async () => {
        try {
          await sbp('gi.app/identity/changePassword',
            new Secret(this.form.current),
            new Secret(this.form.newPassword)
          )
          this.closeModal()
        } catch (error) {
          console.error('[PasswordModal.vue]', error)
          this.$refs.formMsg.danger(L('Invalid password'))
        }
      })().finally(() => {
        this.processing = false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.modal-card-body {
  padding-top: 0;
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
var PasswordModal_default = __vue_component__;
export {
  PasswordModal_default as default
};
//# sourceMappingURL=PasswordModal-JJ4IURVR-cached.js.map
