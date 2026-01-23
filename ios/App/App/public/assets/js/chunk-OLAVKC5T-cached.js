import {
  requestNotificationPermission
} from "./chunk-IR2UUO3D-cached.js";
import {
  allowedUrls_default
} from "./chunk-W7XZLSPA-cached.js";
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
  IDENTITY_PASSWORD_MIN_CHARS,
  IDENTITY_USERNAME_MAX_CHARS
} from "./chunk-UYGYRQRQ-cached.js";
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

// frontend/views/containers/access/SignupForm.vue
var import_validators = __toESM(require_validators());
var import_vuelidate = __toESM(require_lib());

// frontend/model/contracts/shared/validators.js
var allowedUsernameCharacters = (value) => /^[\w-]*$/.test(value);
var noConsecutiveHyphensOrUnderscores = (value) => !value.includes("--") && !value.includes("__");
var noLeadingOrTrailingHyphen = (value) => !value.startsWith("-") && !value.endsWith("-");
var noLeadingOrTrailingUnderscore = (value) => !value.startsWith("_") && !value.endsWith("_");
var noUppercase = (value) => value.toLowerCase() === value;
var noWhitespace = (value) => /^\S+$/.test(value);

// frontend/views/containers/access/SignupForm.vue
var usernameValidations = {
  [L("A username is required.")]: import_validators.required,
  [L("A username cannot contain whitespace.")]: noWhitespace,
  [L("A username can only contain letters, digits, hyphens or underscores.")]: allowedUsernameCharacters,
  [L("A username cannot exceed {maxChars} characters.", { maxChars: IDENTITY_USERNAME_MAX_CHARS })]: (0, import_validators.maxLength)(IDENTITY_USERNAME_MAX_CHARS),
  [L("A username cannot contain uppercase letters.")]: noUppercase,
  [L("A username cannot start or end with a hyphen.")]: noLeadingOrTrailingHyphen,
  [L("A username cannot start or end with an underscore.")]: noLeadingOrTrailingUnderscore,
  [L("A username cannot contain two consecutive hyphens or underscores.")]: noConsecutiveHyphensOrUnderscores
};
var __vue_script__ = {
  name: "SignupForm",
  mixins: [
    import_vuelidate.validationMixin,
    validationsDebouncedMixins_default
  ],
  props: {
    // ButtonSubmit component waits until the `click` listener (which is `signup` function) is finished
    // This prop is something we could add to wait for it to be finished in `signup` process
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
  mounted() {
    this.$nextTick(() => {
      this.$refs.username.focus();
    });
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwordConfirm: "",
        terms: false,
        pictureBase64: ""
      },
      linkToTerms: allowedUrls_default.TERMS_PAGE,
      usernameAsyncValidation: {
        timer: null,
        resolveFn: null
      }
    };
  },
  methods: {
    async signup() {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L("The form is invalid."));
        return;
      }
      try {
        this.$emit("signup-status", "submitting");
        await esm_default("gi.app/identity/signupAndLogin", {
          username: this.form.username,
          password: new Secret(this.form.password)
        });
        await this.postSubmit();
        this.$emit("signup-status", "success");
        requestNotificationPermission({ enableIfGranted: true });
      } catch (e) {
        console.error("Signup.vue submit() error:", e);
        this.$refs.formMsg?.danger(e.message);
        this.$emit("signup-status", "error");
      }
    }
  },
  // we use dynamic validation schema to support accessing this.usernameAsyncValidation
  // https://vuelidate.js.org/#sub-dynamic-validation-schema
  validations() {
    return {
      form: {
        username: {
          ...usernameValidations,
          [L("This username is already being used.")]: (value) => {
            if (!value) return true;
            if (this.usernameAsyncValidation.timer) {
              clearTimeout(this.usernameAsyncValidation.timer);
            }
            if (this.usernameAsyncValidation.resolveFn) {
              this.usernameAsyncValidation.resolveFn(true);
              this.usernameAsyncValidation.resolveFn = null;
            }
            return new Promise((resolve) => {
              this.usernameAsyncValidation.resolveFn = resolve;
              this.usernameAsyncValidation.timer = setTimeout(async () => {
                try {
                  resolve(!await esm_default("namespace/lookup", value, { skipCache: true }));
                } catch (e) {
                  console.warn("unexpected exception in SignupForm validation:", e);
                  resolve(true);
                }
              }, 1e3);
            });
          }
        },
        password: {
          [L("A password is required.")]: import_validators.required,
          [L("Your password must be at least {minChars} characters long.", { minChars: IDENTITY_PASSWORD_MIN_CHARS })]: (0, import_validators.minLength)(IDENTITY_PASSWORD_MIN_CHARS)
        },
        passwordConfirm: {
          [L("Passwords do not match.")]: (0, import_validators.sameAs)("password")
        },
        terms: {
          [L("You need to agree to the terms and conditions.")]: (value) => {
            return Boolean(value);
          }
        }
      }
    };
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      attrs: { "data-test": "signup" },
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
                rawName: "v-model.trim",
                value: _vm.form.username,
                expression: "form.username",
                modifiers: { trim: true }
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
              "data-test": "signName"
            },
            domProps: { value: _vm.form.username },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.$set(_vm.form, "username", $event.target.value.trim());
                },
                function($event) {
                  return _vm.debounceField("username");
                }
              ],
              blur: [
                function($event) {
                  return _vm.updateField("username");
                },
                function($event) {
                  return _vm.$forceUpdate();
                }
              ]
            }
          })
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "c-password-fields-container" },
        [
          _c("password-form", {
            attrs: { label: _vm.L("Password"), name: "password", $v: _vm.$v }
          }),
          _c("password-form", {
            attrs: {
              label: _vm.L("Confirm Password"),
              name: "passwordConfirm",
              $v: _vm.$v
            }
          })
        ],
        1
      ),
      _c(
        "label",
        { staticClass: "checkbox" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.terms,
                expression: "form.terms"
              }
            ],
            staticClass: "input",
            attrs: {
              type: "checkbox",
              name: "terms",
              "data-test": "signTerms"
            },
            domProps: {
              checked: Array.isArray(_vm.form.terms) ? _vm._i(_vm.form.terms, null) > -1 : _vm.form.terms
            },
            on: {
              click: function($event) {
                $event.stopPropagation();
              },
              change: function($event) {
                var $$a = _vm.form.terms, $$el = $event.target, $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = null, $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.form, "terms", $$a.concat([$$v]));
                  } else {
                    $$i > -1 && _vm.$set(
                      _vm.form,
                      "terms",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    );
                  }
                } else {
                  _vm.$set(_vm.form, "terms", $$c);
                }
              }
            }
          }),
          _c(
            "i18n",
            {
              attrs: {
                args: {
                  a_: '<a class="link" target="_blank" href="' + _vm.linkToTerms + '">',
                  _a: "</a>"
                }
              }
            },
            [_vm._v("I agree to the {a_}terms and conditions{_a}")]
          )
        ],
        1
      ),
      _c("banner-scoped", { ref: "formMsg", attrs: { "allow-a": "allow-a" } }),
      _c(
        "div",
        { staticClass: "buttons is-centered" },
        [
          _c(
            "button-submit",
            {
              attrs: {
                "data-test": "signSubmit",
                disabled: _vm.$v.form.$invalid
              },
              on: { click: _vm.signup }
            },
            [_vm._v(_vm._s(_vm.L("Create an account")))]
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
  inject("data-v-32d0f26a_0", { source: ".c-password-fields-container[data-v-32d0f26a] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-password-fields-container[data-v-32d0f26a] {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 1.5rem;\n}\n}\n@media screen and (max-width: 768px) {\n.c-password-fields-container[data-v-32d0f26a] {\n    margin-bottom: 1.5rem;\n}\n}\n\n/*# sourceMappingURL=SignupForm.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/access/SignupForm.vue", "SignupForm.vue"], "names": [], "mappings": "AAkMA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;ACjMA;AACA;AD4LA;IAOA,mBAAA;IACA,uBAAA;IACA,WAAA;AChME;AACF;AACA;ADqLA;IAaA,qBAAA;AC/LE;AACF;;AAEA,yCAAyC", "file": "SignupForm.vue", "sourcesContent": [`<template lang='pug'>
form(data-test='signup' @submit.prevent='')
  label.field
    i18n.label Username
    input.input(
      :class='{error: $v.form.username.$error}'
      autocapitalize='off'
      name='username'
      ref='username'
      v-model.trim='form.username'
      @input='debounceField("username")'
      @blur='updateField("username")'
      data-test='signName'
      v-error:username='{ attrs: { "data-test": "badUsername" } }'
    )

  .c-password-fields-container
    password-form(:label='L("Password")' name='password' :$v='$v')

    password-form(:label='L("Confirm Password")' name='passwordConfirm' :$v='$v')

  label.checkbox
    input.input(
      type='checkbox'
      name='terms'
      v-model='form.terms'
      data-test='signTerms'
      @click.stop=''
    )
    i18n(
      :args='{ a_: \`<a class="link" target="_blank" href="\${linkToTerms}">\`, _a: "</a>"}'
    ) I agree to the {a_}terms and conditions{_a}

  banner-scoped(ref='formMsg' allow-a)

  .buttons.is-centered
    button-submit(
      @click='signup'
      data-test='signSubmit'
      :disabled='$v.form.$invalid'
    ) {{ L('Create an account') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import {
  IDENTITY_PASSWORD_MIN_CHARS as passwordMinChars,
  IDENTITY_USERNAME_MAX_CHARS as usernameMaxChars
} from '../../../../frontend/model/contracts/shared/constants.js'
import { requestNotificationPermission } from '../../../../frontend/model/notifications/nativeNotification.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import {
  allowedUsernameCharacters,
  noConsecutiveHyphensOrUnderscores,
  noLeadingOrTrailingHyphen,
  noLeadingOrTrailingUnderscore,
  noUppercase,
  noWhitespace
} from '../../../../frontend/model/contracts/shared/validators.js'
import { Secret } from '@chelonia/lib/Secret'
import ALLOWED_URLS from '../../../../frontend/views/utils/allowedUrls.js'

export const usernameValidations = {
  [L('A username is required.')]: required,
  [L('A username cannot contain whitespace.')]: noWhitespace,
  [L('A username can only contain letters, digits, hyphens or underscores.')]: allowedUsernameCharacters,
  [L('A username cannot exceed {maxChars} characters.', { maxChars: usernameMaxChars })]: maxLength(usernameMaxChars),
  [L('A username cannot contain uppercase letters.')]: noUppercase,
  [L('A username cannot start or end with a hyphen.')]: noLeadingOrTrailingHyphen,
  [L('A username cannot start or end with an underscore.')]: noLeadingOrTrailingUnderscore,
  [L('A username cannot contain two consecutive hyphens or underscores.')]: noConsecutiveHyphensOrUnderscores
}

export default ({
  name: 'SignupForm',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  props: {
    // ButtonSubmit component waits until the \`click\` listener (which is \`signup\` function) is finished
    // This prop is something we could add to wait for it to be finished in \`signup\` process
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
  mounted () {
    // NOTE: nextTick is needed because debounceField is called once after the form is mounted
    this.$nextTick(() => {
      this.$refs.username.focus()
    })
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        passwordConfirm: '',
        terms: false,
        pictureBase64: ''
      },
      linkToTerms: ALLOWED_URLS.TERMS_PAGE,
      usernameAsyncValidation: {
        timer: null,
        resolveFn: null
      }
    }
  },
  methods: {
    async signup () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      try {
        this.$emit('signup-status', 'submitting')
        await sbp('gi.app/identity/signupAndLogin', {
          username: this.form.username,
          password: new Secret(this.form.password)
        })
        await this.postSubmit()
        this.$emit('signup-status', 'success')
        // Request notification permissions now (within short time window of user action:
        // https://github.com/whatwg/notifications/issues/108 )
        requestNotificationPermission({ enableIfGranted: true })
      } catch (e) {
        console.error('Signup.vue submit() error:', e)
        this.$refs.formMsg?.danger(e.message)
        this.$emit('signup-status', 'error')
      }
    }
  },
  // we use dynamic validation schema to support accessing this.usernameAsyncValidation
  // https://vuelidate.js.org/#sub-dynamic-validation-schema
  validations () {
    return {
      form: {
        username: {
          ...usernameValidations,
          [L('This username is already being used.')]: (value) => {
            if (!value) return true
            if (this.usernameAsyncValidation.timer) {
              clearTimeout(this.usernameAsyncValidation.timer)
            }
            if (this.usernameAsyncValidation.resolveFn) {
              this.usernameAsyncValidation.resolveFn(true)
              this.usernameAsyncValidation.resolveFn = null
            }
            return new Promise((resolve) => {
              this.usernameAsyncValidation.resolveFn = resolve
              this.usernameAsyncValidation.timer = setTimeout(async () => {
                try {
                  resolve(!await sbp('namespace/lookup', value, { skipCache: true }))
                } catch (e) {
                  console.warn('unexpected exception in SignupForm validation:', e)
                  resolve(true)
                }
              }, 1000)
            })
          }
        },
        password: {
          [L('A password is required.')]: required,
          [L('Your password must be at least {minChars} characters long.', { minChars: passwordMinChars })]: minLength(passwordMinChars)
        },
        passwordConfirm: {
          [L('Passwords do not match.')]: sameAs('password')
        },
        terms: {
          [L('You need to agree to the terms and conditions.')]: (value) => {
            return Boolean(value)
          }
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-password-fields-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 1.5rem;

  @include tablet {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }

  @include phone {
    margin-bottom: 1.5rem;
  }
}
</style>
`, ".c-password-fields-container {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-password-fields-container {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-password-fields-container {\n    margin-bottom: 1.5rem;\n  }\n}\n\n/*# sourceMappingURL=SignupForm.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-32d0f26a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
form(data-test='signup' @submit.prevent='')
  label.field
    i18n.label Username
    input.input(
      :class='{error: $v.form.username.$error}'
      autocapitalize='off'
      name='username'
      ref='username'
      v-model.trim='form.username'
      @input='debounceField("username")'
      @blur='updateField("username")'
      data-test='signName'
      v-error:username='{ attrs: { "data-test": "badUsername" } }'
    )

  .c-password-fields-container
    password-form(:label='L("Password")' name='password' :$v='$v')

    password-form(:label='L("Confirm Password")' name='passwordConfirm' :$v='$v')

  label.checkbox
    input.input(
      type='checkbox'
      name='terms'
      v-model='form.terms'
      data-test='signTerms'
      @click.stop=''
    )
    i18n(
      :args='{ a_: \`<a class="link" target="_blank" href="\${linkToTerms}">\`, _a: "</a>"}'
    ) I agree to the {a_}terms and conditions{_a}

  banner-scoped(ref='formMsg' allow-a)

  .buttons.is-centered
    button-submit(
      @click='signup'
      data-test='signSubmit'
      :disabled='$v.form.$invalid'
    ) {{ L('Create an account') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import {
  IDENTITY_PASSWORD_MIN_CHARS as passwordMinChars,
  IDENTITY_USERNAME_MAX_CHARS as usernameMaxChars
} from '../../../../frontend/model/contracts/shared/constants.js'
import { requestNotificationPermission } from '../../../../frontend/model/notifications/nativeNotification.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import {
  allowedUsernameCharacters,
  noConsecutiveHyphensOrUnderscores,
  noLeadingOrTrailingHyphen,
  noLeadingOrTrailingUnderscore,
  noUppercase,
  noWhitespace
} from '../../../../frontend/model/contracts/shared/validators.js'
import { Secret } from '@chelonia/lib/Secret'
import ALLOWED_URLS from '../../../../frontend/views/utils/allowedUrls.js'

export const usernameValidations = {
  [L('A username is required.')]: required,
  [L('A username cannot contain whitespace.')]: noWhitespace,
  [L('A username can only contain letters, digits, hyphens or underscores.')]: allowedUsernameCharacters,
  [L('A username cannot exceed {maxChars} characters.', { maxChars: usernameMaxChars })]: maxLength(usernameMaxChars),
  [L('A username cannot contain uppercase letters.')]: noUppercase,
  [L('A username cannot start or end with a hyphen.')]: noLeadingOrTrailingHyphen,
  [L('A username cannot start or end with an underscore.')]: noLeadingOrTrailingUnderscore,
  [L('A username cannot contain two consecutive hyphens or underscores.')]: noConsecutiveHyphensOrUnderscores
}

export default ({
  name: 'SignupForm',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  props: {
    // ButtonSubmit component waits until the \`click\` listener (which is \`signup\` function) is finished
    // This prop is something we could add to wait for it to be finished in \`signup\` process
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
  mounted () {
    // NOTE: nextTick is needed because debounceField is called once after the form is mounted
    this.$nextTick(() => {
      this.$refs.username.focus()
    })
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        passwordConfirm: '',
        terms: false,
        pictureBase64: ''
      },
      linkToTerms: ALLOWED_URLS.TERMS_PAGE,
      usernameAsyncValidation: {
        timer: null,
        resolveFn: null
      }
    }
  },
  methods: {
    async signup () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      try {
        this.$emit('signup-status', 'submitting')
        await sbp('gi.app/identity/signupAndLogin', {
          username: this.form.username,
          password: new Secret(this.form.password)
        })
        await this.postSubmit()
        this.$emit('signup-status', 'success')
        // Request notification permissions now (within short time window of user action:
        // https://github.com/whatwg/notifications/issues/108 )
        requestNotificationPermission({ enableIfGranted: true })
      } catch (e) {
        console.error('Signup.vue submit() error:', e)
        this.$refs.formMsg?.danger(e.message)
        this.$emit('signup-status', 'error')
      }
    }
  },
  // we use dynamic validation schema to support accessing this.usernameAsyncValidation
  // https://vuelidate.js.org/#sub-dynamic-validation-schema
  validations () {
    return {
      form: {
        username: {
          ...usernameValidations,
          [L('This username is already being used.')]: (value) => {
            if (!value) return true
            if (this.usernameAsyncValidation.timer) {
              clearTimeout(this.usernameAsyncValidation.timer)
            }
            if (this.usernameAsyncValidation.resolveFn) {
              this.usernameAsyncValidation.resolveFn(true)
              this.usernameAsyncValidation.resolveFn = null
            }
            return new Promise((resolve) => {
              this.usernameAsyncValidation.resolveFn = resolve
              this.usernameAsyncValidation.timer = setTimeout(async () => {
                try {
                  resolve(!await sbp('namespace/lookup', value, { skipCache: true }))
                } catch (e) {
                  console.warn('unexpected exception in SignupForm validation:', e)
                  resolve(true)
                }
              }, 1000)
            })
          }
        },
        password: {
          [L('A password is required.')]: required,
          [L('Your password must be at least {minChars} characters long.', { minChars: passwordMinChars })]: minLength(passwordMinChars)
        },
        passwordConfirm: {
          [L('Passwords do not match.')]: sameAs('password')
        },
        terms: {
          [L('You need to agree to the terms and conditions.')]: (value) => {
            return Boolean(value)
          }
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-password-fields-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 1.5rem;

  @include tablet {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }

  @include phone {
    margin-bottom: 1.5rem;
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
var SignupForm_default = __vue_component__;

export {
  usernameValidations,
  SignupForm_default
};
//# sourceMappingURL=chunk-OLAVKC5T-cached.js.map
