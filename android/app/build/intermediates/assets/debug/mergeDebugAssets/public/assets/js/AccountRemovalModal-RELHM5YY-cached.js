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
  BannerScoped_default,
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  normalizeString
} from "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
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
import {
  mapGetters
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

// frontend/views/containers/user-settings/AccountRemovalModal.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "AccountRemovalModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerSimple: BannerSimple_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    PasswordForm: PasswordForm_default
  },
  beforeMount() {
    esm_default("chelonia/out/ownResources", this.ourIdentityContractId).then((ownResources) => {
      const rootState = esm_default("state/vuex/state");
      this.ownResources = ownResources.filter((cid) => {
        return rootState.contracts[cid]?.type === "gi.contracts/group";
      }).map((cid) => {
        const rootGetters = esm_default("state/vuex/getters");
        return rootGetters.groupSettingsForGroup(rootState[cid]).groupName;
      });
    }).catch((e) => {
      this.ownResources = new Error(e?.message);
      console.error("Error fetching own resources", { contractID: this.ourIdentityContractId }, e);
    });
  },
  data() {
    return {
      form: {
        username: null,
        confirmation: null,
        password: null
      },
      ownResources: null
    };
  },
  computed: {
    ...mapGetters([
      "groupSettings",
      "ourUsername",
      "ourIdentityContractId"
    ]),
    code() {
      return L("DELETE ACCOUNT");
    }
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      if (this.$v.form.$invalid) {
        return;
      }
      try {
        await esm_default("gi.app/identity/delete", this.ourIdentityContractId, new Secret(this.form.password));
        this.close();
      } catch (e) {
        console.error("AccountRemovalModal submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  },
  validations: {
    form: {
      username: {
        [L("This field is required")]: import_validators.required,
        [L("Your username is different")]: function(value) {
          return value === this.ourUsername;
        }
      },
      confirmation: {
        [L("This field is required")]: import_validators.required,
        [L("Does not match")]: function(value) {
          return normalizeString(value) === normalizeString(this.code);
        }
      },
      password: {
        [L("Your current password is required.")]: import_validators.required
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    { ref: "modal", attrs: { a11yTitle: _vm.L("Delete account") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Delete account")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate", "data-test": "deleteAccount" },
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c("i18n", { attrs: { tag: "p" } }, [
            _vm._v(
              "Deleting your account will erase all your data, and remove you from the groups you belong to."
            )
          ]),
          _c(
            "banner-simple",
            { staticClass: "c-banner", attrs: { severity: "danger" } },
            [
              _c("i18n", { attrs: { args: _vm.LTags("strong") } }, [
                _vm._v("This action {strong_}cannot be undone{_strong}.")
              ])
            ],
            1
          ),
          !_vm.ownResources ? _c(
            "banner-simple",
            { staticClass: "c-banner", attrs: { severity: "general" } },
            [_c("i18n", [_vm._v("Loading")])],
            1
          ) : Array.isArray(_vm.ownResources) && _vm.ownResources.length ? _c(
            "banner-simple",
            { staticClass: "c-banner", attrs: { severity: "warning" } },
            [
              _c("i18n", { attrs: { tag: "p" } }, [
                _vm._v(
                  "This action will also delete the following groups:"
                )
              ]),
              _c(
                "ul",
                { staticClass: "c-list" },
                _vm._l(_vm.ownResources, function(groupName) {
                  return _c("li", { staticClass: "c-item" }, [
                    _vm._v(_vm._s(groupName))
                  ]);
                }),
                0
              )
            ],
            1
          ) : _vm.ownResources.message ? _c(
            "banner-simple",
            { staticClass: "c-banner", attrs: { severity: "danger" } },
            [
              _c("i18n", { attrs: { tag: "p" } }, [
                _vm._v(
                  "This action will also delete any groups you've created."
                )
              ]),
              _c(
                "i18n",
                {
                  attrs: {
                    tag: "p",
                    args: { message: _vm.ownResources.message }
                  }
                },
                [
                  _vm._v(
                    "An error occurred that prevents us from showing a list of these groups. The error was: {message}"
                  )
                ]
              )
            ],
            1
          ) : _vm._e(),
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
                    value: { attrs: { "data-test": "usernameError" } },
                    expression: '{ attrs: { "data-test": "usernameError" } }',
                    arg: "username"
                  }
                ],
                staticClass: "input",
                class: { error: _vm.$v.form.username.$error },
                attrs: { type: "text", "data-test": "username" },
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
            attrs: {
              name: "password",
              label: _vm.L("Password"),
              value: _vm.form,
              $v: _vm.$v,
              hasIconRight: true,
              showPlaceholder: false,
              showPassword: false,
              size: "is-large"
            }
          }),
          _c(
            "label",
            { staticClass: "field" },
            [
              _c(
                "i18n",
                { staticClass: "label", attrs: { args: { code: _vm.code } } },
                [_vm._v('Type "{code}" below')]
              ),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.confirmation,
                    expression: "form.confirmation"
                  },
                  {
                    name: "error",
                    rawName: "v-error:confirmation",
                    value: { attrs: { "data-test": "confirmationError" } },
                    expression: '{ attrs: { "data-test": "confirmationError" } }',
                    arg: "confirmation"
                  }
                ],
                staticClass: "input",
                class: { error: _vm.$v.form.confirmation.$error },
                attrs: { type: "text", "data-test": "confirmation" },
                domProps: { value: _vm.form.confirmation },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "confirmation", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("confirmation");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("confirmation");
                  }
                }
              })
            ],
            1
          ),
          _c("banner-scoped", { ref: "formMsg" }),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-outlined",
                  attrs: { tag: "button", type: "button" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-danger",
                  attrs: {
                    disabled: _vm.$v.form.$invalid || !this.ownResources,
                    "data-test": "btnSubmit"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.L("Delete account")))]
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
  inject("data-v-5b4db3c2_0", { source: ".c-banner[data-v-5b4db3c2] {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=AccountRemovalModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/AccountRemovalModal.vue", "AccountRemovalModal.vue"], "names": [], "mappings": "AA0KA;EACA,gBAAA;ACzKA;;AAEA,kDAAkD", "file": "AccountRemovalModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Delete account")')
    template(slot='title')
      i18n Delete account

    form(novalidate @submit.prevent='' data-test='deleteAccount')
      i18n(
        tag='p'
      ) Deleting your account will erase all your data, and remove you from the groups you belong to.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      banner-simple.c-banner(severity='general' v-if='!ownResources')
        i18n Loading
      banner-simple.c-banner(severity='warning' v-else-if='Array.isArray(ownResources) && ownResources.length')
        i18n(tag='p') This action will also delete the following groups:
        ul.c-list
          li.c-item(v-for='groupName in ownResources') {{groupName}}
      banner-simple.c-banner(severity='danger' v-else-if='ownResources.message')
        i18n(tag='p') This action will also delete any groups you've created.
        i18n(tag='p' :args='{message: ownResources.message}') An error occurred that prevents us from showing a list of these groups. The error was: {message}

      label.field
        i18n.label Username
        input.input(
          :class='{error: $v.form.username.$error}'
          type='text'
          v-model='form.username'
          @input='debounceField("username")'
          @blur='updateField("username")'
          data-test='username'
          v-error:username='{ attrs: { "data-test": "usernameError" } }'
        )

      password-form(
        name='password'
        :label='L("Password")'
        :value='form'
        :$v='$v'
        :hasIconRight='true'
        :showPlaceholder='false'
        :showPassword='false'
        size='is-large'
      )

      label.field
        i18n.label(:args='{ code }') Type "{code}" below
        input.input(
          :class='{error: $v.form.confirmation.$error}'
          type='text'
          v-model='form.confirmation'
          @input='debounceField("confirmation")'
          @blur='updateField("confirmation")'
          v-error:confirmation='{ attrs: { "data-test": "confirmationError" } }'
          data-test='confirmation'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid || !this.ownResources'
          data-test='btnSubmit'
          ) {{ L('Delete account') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { normalizeString } from 'turtledash'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'AccountRemovalModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit,
    PasswordForm
  },
  beforeMount () {
    sbp('chelonia/out/ownResources', this.ourIdentityContractId).then((ownResources) => {
      const rootState = sbp('state/vuex/state')
      this.ownResources = ownResources.filter((cid) => {
        return rootState.contracts[cid]?.type === 'gi.contracts/group'
      }).map((cid) => {
        const rootGetters = sbp('state/vuex/getters')
        return rootGetters.groupSettingsForGroup(rootState[cid]).groupName
      })
    }).catch((e) => {
      this.ownResources = new Error(e?.message)
      console.error('Error fetching own resources', { contractID: this.ourIdentityContractId }, e)
    })
  },
  data () {
    return {
      form: {
        username: null,
        confirmation: null,
        password: null
      },
      ownResources: null
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'ourUsername',
      'ourIdentityContractId'
    ]),
    code () {
      return L('DELETE ACCOUNT')
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }
      try {
        await sbp('gi.app/identity/delete', this.ourIdentityContractId, new Secret(this.form.password))
        this.close()
      } catch (e) {
        console.error('AccountRemovalModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      username: {
        [L('This field is required')]: required,
        [L('Your username is different')]: function (value) {
          return value === this.ourUsername
        }
      },
      confirmation: {
        [L('This field is required')]: required,
        [L('Does not match')]: function (value) {
          return normalizeString(value) === normalizeString(this.code)
        }
      },
      password: {
        [L('Your current password is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0;
}
</style>
`, ".c-banner {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=AccountRemovalModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5b4db3c2";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Delete account")')
    template(slot='title')
      i18n Delete account

    form(novalidate @submit.prevent='' data-test='deleteAccount')
      i18n(
        tag='p'
      ) Deleting your account will erase all your data, and remove you from the groups you belong to.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      banner-simple.c-banner(severity='general' v-if='!ownResources')
        i18n Loading
      banner-simple.c-banner(severity='warning' v-else-if='Array.isArray(ownResources) && ownResources.length')
        i18n(tag='p') This action will also delete the following groups:
        ul.c-list
          li.c-item(v-for='groupName in ownResources') {{groupName}}
      banner-simple.c-banner(severity='danger' v-else-if='ownResources.message')
        i18n(tag='p') This action will also delete any groups you've created.
        i18n(tag='p' :args='{message: ownResources.message}') An error occurred that prevents us from showing a list of these groups. The error was: {message}

      label.field
        i18n.label Username
        input.input(
          :class='{error: $v.form.username.$error}'
          type='text'
          v-model='form.username'
          @input='debounceField("username")'
          @blur='updateField("username")'
          data-test='username'
          v-error:username='{ attrs: { "data-test": "usernameError" } }'
        )

      password-form(
        name='password'
        :label='L("Password")'
        :value='form'
        :$v='$v'
        :hasIconRight='true'
        :showPlaceholder='false'
        :showPassword='false'
        size='is-large'
      )

      label.field
        i18n.label(:args='{ code }') Type "{code}" below
        input.input(
          :class='{error: $v.form.confirmation.$error}'
          type='text'
          v-model='form.confirmation'
          @input='debounceField("confirmation")'
          @blur='updateField("confirmation")'
          v-error:confirmation='{ attrs: { "data-test": "confirmationError" } }'
          data-test='confirmation'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid || !this.ownResources'
          data-test='btnSubmit'
          ) {{ L('Delete account') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import PasswordForm from '../../../../frontend/views/containers/access/PasswordForm.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { normalizeString } from 'turtledash'
import { Secret } from '@chelonia/lib/Secret'

export default ({
  name: 'AccountRemovalModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit,
    PasswordForm
  },
  beforeMount () {
    sbp('chelonia/out/ownResources', this.ourIdentityContractId).then((ownResources) => {
      const rootState = sbp('state/vuex/state')
      this.ownResources = ownResources.filter((cid) => {
        return rootState.contracts[cid]?.type === 'gi.contracts/group'
      }).map((cid) => {
        const rootGetters = sbp('state/vuex/getters')
        return rootGetters.groupSettingsForGroup(rootState[cid]).groupName
      })
    }).catch((e) => {
      this.ownResources = new Error(e?.message)
      console.error('Error fetching own resources', { contractID: this.ourIdentityContractId }, e)
    })
  },
  data () {
    return {
      form: {
        username: null,
        confirmation: null,
        password: null
      },
      ownResources: null
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'ourUsername',
      'ourIdentityContractId'
    ]),
    code () {
      return L('DELETE ACCOUNT')
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }
      try {
        await sbp('gi.app/identity/delete', this.ourIdentityContractId, new Secret(this.form.password))
        this.close()
      } catch (e) {
        console.error('AccountRemovalModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      username: {
        [L('This field is required')]: required,
        [L('Your username is different')]: function (value) {
          return value === this.ourUsername
        }
      },
      confirmation: {
        [L('This field is required')]: required,
        [L('Does not match')]: function (value) {
          return normalizeString(value) === normalizeString(this.code)
        }
      },
      password: {
        [L('Your current password is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0;
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
var AccountRemovalModal_default = __vue_component__;
export {
  AccountRemovalModal_default as default
};
//# sourceMappingURL=AccountRemovalModal-RELHM5YY-cached.js.map
