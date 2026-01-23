import {
  usernameValidations
} from "./chunk-OLAVKC5T-cached.js";
import {
  requestNotificationPermission
} from "./chunk-IR2UUO3D-cached.js";
import {
  PasswordForm_default
} from "./chunk-GLMIE3CJ-cached.js";
import {
  Secret
} from "./chunk-DRW7AMFK-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  validationsDebouncedMixins_default
} from "./chunk-LO4V4OP4-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/access/LoginForm.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "LoginForm",
  mixins: [
    import_vuelidate.validationMixin,
    validationsDebouncedMixins_default
  ],
  props: {
    // ButtonSubmit component waits until the `click` listener (which is `login` function) is finished
    // This prop is something we could add to wait for it to be finished in `login` process
    postSubmit: {
      type: Function,
      default: () => {
      }
    }
  },
  components: {
    PasswordForm: PasswordForm_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.username.focus();
    });
  },
  methods: {
    async login() {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L("The form is invalid."));
        return;
      }
      try {
        this.$refs.formMsg.clean();
        const username = this.form.username;
        this.$emit("login-status", "submitting");
        await esm_default("gi.app/identity/login", {
          username,
          password: new Secret(this.form.password)
        });
        await this.postSubmit();
        this.$emit("login-status", "success");
        requestNotificationPermission({ enableIfGranted: true });
      } catch (e) {
        console.error("FormLogin.vue login() error:", e);
        this.$refs.formMsg.danger(e.message);
        this.$emit("login-status", "error");
      }
    },
    forgotPassword() {
      alert(L("Coming soon"));
    }
  },
  validations: {
    form: {
      username: {
        ...usernameValidations
      },
      password: {
        [L("A password is required.")]: import_validators.required
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      attrs: { "data-test": "login" },
      on: {
        submit: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _c(
        "label",
        { staticClass: "field" },
        [
          _c("i18n", { staticClass: "label" }, [_vm._v("Username")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.username,
                expression: "form.username"
              },
              {
                name: "error",
                rawName: "v-error:username",
                value: { attrs: { "data-test": "badUsername" } },
                expression: '{ attrs: { "data-test": "badUsername" } }',
                arg: "username"
              }
            ],
            ref: "username",
            staticClass: "input",
            class: { error: _vm.$v.form.username.$error },
            attrs: {
              autocapitalize: "off",
              name: "username",
              "data-test": "loginName"
            },
            domProps: { value: _vm.form.username },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.$set(_vm.form, "username", $event.target.value);
                },
                function($event) {
                  return _vm.debounceField("username");
                }
              ],
              blur: function($event) {
                return _vm.updateField("username");
              }
            }
          })
        ],
        1
      ),
      _c("password-form", {
        attrs: { label: _vm.L("Password"), name: "password", $v: _vm.$v }
      }),
      _c(
        "i18n",
        {
          staticClass: "link c-forgot",
          attrs: { tag: "button", type: "button" },
          on: { click: _vm.forgotPassword }
        },
        [_vm._v("Forgot your password?")]
      ),
      _c("banner-scoped", {
        ref: "formMsg",
        attrs: { "data-test": "loginError" }
      }),
      _c(
        "div",
        { staticClass: "buttons is-centered" },
        [
          _c(
            "button-submit",
            {
              attrs: {
                disabled: _vm.$v.form.$invalid,
                "data-test": "loginSubmit"
              },
              on: { click: _vm.login }
            },
            [_vm._v(_vm._s(_vm.L("Login")))]
          )
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5fa28539_0", { source: ".c-forgot[data-v-5fa28539] {\n  display: inline-block;\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=LoginForm.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/access/LoginForm.vue", "LoginForm.vue"], "names": [], "mappings": "AA4HA;EACA,qBAAA;EACA,gBAAA;AC3HA;;AAEA,wCAAwC", "file": "LoginForm.vue", "sourcesContent": [`<template lang='pug'>
form(data-test='login' @submit.prevent='')
  label.field
    i18n.label Username
    input.input(
      :class='{error: $v.form.username.$error}'
      autocapitalize='off'
      name='username'
      ref='username'
      v-model='form.username'
      @input='debounceField("username")'
      @blur='updateField("username")'
      data-test='loginName'
      v-error:username='{ attrs: { "data-test": "badUsername" } }'
    )

  password-form(:label='L("Password")' name='password' :$v='$v')

  i18n.link.c-forgot(tag='button' type='button' @click='forgotPassword') Forgot your password?

  banner-scoped(ref='formMsg' data-test='loginError')

  .buttons.is-centered
    button-submit(
      @click='login'
      :disabled='$v.form.$invalid'
      data-test='loginSubmit'
    ) {{ L('Login') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { L } from '../../../../frontend/common/common.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import { requestNotificationPermission } from '../../../../frontend/model/notifications/nativeNotification.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { usernameValidations } from '../../../../frontend/views/containers/access/SignupForm.vue'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'LoginForm',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  props: {
    // ButtonSubmit component waits until the \`click\` listener (which is \`login\` function) is finished
    // This prop is something we could add to wait for it to be finished in \`login\` process
    postSubmit: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    PasswordForm,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    // NOTE: nextTick is needed because debounceField is called once after the form is mounted
    this.$nextTick(() => {
      this.$refs.username.focus()
    })
  },
  methods: {
    async login () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      try {
        this.$refs.formMsg.clean()

        const username = this.form.username

        this.$emit('login-status', 'submitting')
        await sbp('gi.app/identity/login', {
          username,
          password: new Secret(this.form.password)
        })
        await this.postSubmit()
        this.$emit('login-status', 'success')
        // Request notification permissions now (within short time window of user action:
        // https://github.com/whatwg/notifications/issues/108 )
        requestNotificationPermission({ enableIfGranted: true })
      } catch (e) {
        console.error('FormLogin.vue login() error:', e)
        this.$refs.formMsg.danger(e.message)
        this.$emit('login-status', 'error')
      }
    },
    forgotPassword () {
      // TODO: implement forgot password
      alert(L('Coming soon'))
    }
  },
  validations: {
    form: {
      username: {
        ...usernameValidations
      },
      password: {
        [L('A password is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-forgot {
  display: inline-block;
  margin-top: 1rem;
}
</style>
`, ".c-forgot {\n  display: inline-block;\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=LoginForm.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5fa28539";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
form(data-test='login' @submit.prevent='')
  label.field
    i18n.label Username
    input.input(
      :class='{error: $v.form.username.$error}'
      autocapitalize='off'
      name='username'
      ref='username'
      v-model='form.username'
      @input='debounceField("username")'
      @blur='updateField("username")'
      data-test='loginName'
      v-error:username='{ attrs: { "data-test": "badUsername" } }'
    )

  password-form(:label='L("Password")' name='password' :$v='$v')

  i18n.link.c-forgot(tag='button' type='button' @click='forgotPassword') Forgot your password?

  banner-scoped(ref='formMsg' data-test='loginError')

  .buttons.is-centered
    button-submit(
      @click='login'
      :disabled='$v.form.$invalid'
      data-test='loginSubmit'
    ) {{ L('Login') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { L } from '../../../../frontend/common/common.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import { requestNotificationPermission } from '../../../../frontend/model/notifications/nativeNotification.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { usernameValidations } from '../../../../frontend/views/containers/access/SignupForm.vue'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'LoginForm',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  props: {
    // ButtonSubmit component waits until the \`click\` listener (which is \`login\` function) is finished
    // This prop is something we could add to wait for it to be finished in \`login\` process
    postSubmit: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    PasswordForm,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    // NOTE: nextTick is needed because debounceField is called once after the form is mounted
    this.$nextTick(() => {
      this.$refs.username.focus()
    })
  },
  methods: {
    async login () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      try {
        this.$refs.formMsg.clean()

        const username = this.form.username

        this.$emit('login-status', 'submitting')
        await sbp('gi.app/identity/login', {
          username,
          password: new Secret(this.form.password)
        })
        await this.postSubmit()
        this.$emit('login-status', 'success')
        // Request notification permissions now (within short time window of user action:
        // https://github.com/whatwg/notifications/issues/108 )
        requestNotificationPermission({ enableIfGranted: true })
      } catch (e) {
        console.error('FormLogin.vue login() error:', e)
        this.$refs.formMsg.danger(e.message)
        this.$emit('login-status', 'error')
      }
    },
    forgotPassword () {
      // TODO: implement forgot password
      alert(L('Coming soon'))
    }
  },
  validations: {
    form: {
      username: {
        ...usernameValidations
      },
      password: {
        [L('A password is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-forgot {
  display: inline-block;
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
var LoginForm_default = __vue_component__;

export {
  LoginForm_default
};
//# sourceMappingURL=chunk-XCZJSM7Z-cached.js.map
