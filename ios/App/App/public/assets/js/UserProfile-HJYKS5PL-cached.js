import {
  AvatarUpload_default
} from "./chunk-ZVL32ZU3-cached.js";
import "./chunk-DXIHOQP2-cached.js";
import "./chunk-LOAVQ5PN-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  CharLengthIndicator_default
} from "./chunk-PDM5OGIJ-cached.js";
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
  cloneDeep
} from "./chunk-MTWMQLQH-cached.js";
import {
  IDENTITY_BIO_MAX_CHARS,
  IDENTITY_USERNAME_MAX_CHARS
} from "./chunk-UYGYRQRQ-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
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

// frontend/views/containers/user-settings/UserProfile.vue
var import_vuelidate = __toESM(require_lib());
var __vue_script__ = {
  name: "UserProfile",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    AvatarUpload: AvatarUpload_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    CharLengthIndicator: CharLengthIndicator_default
  },
  data() {
    const attrsCopy = cloneDeep(this.$store.getters.currentIdentityState.attributes || {});
    return {
      form: {
        displayName: attrsCopy.displayName,
        bio: attrsCopy.bio
      },
      config: {
        bioMaxChar: IDENTITY_BIO_MAX_CHARS,
        displayNameMaxChar: IDENTITY_USERNAME_MAX_CHARS
      }
    };
  },
  validations: {
    form: {
      displayName: {
        [L("Reached character limit.")]: (value) => {
          return !value || Number(value.length) <= IDENTITY_USERNAME_MAX_CHARS;
        }
      },
      bio: {
        [L("Reached character limit.")]: (value) => {
          return !value || Number(value.length) <= IDENTITY_BIO_MAX_CHARS;
        }
      }
    }
  },
  computed: {
    ...mapState(["loggedIn"]),
    ...mapGetters(["ourUsername", "currentIdentityState"]),
    attributes() {
      return this.currentIdentityState.attributes || {};
    },
    sbpParams() {
      return {
        selector: "gi.actions/identity/setAttributes",
        contractID: this.loggedIn.identityContractID,
        key: "picture"
      };
    }
  },
  methods: {
    openModal(mode) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, mode);
      return false;
    },
    async saveProfile() {
      this.$refs.formMsg.clean();
      const attrs = {};
      for (const key in this.form) {
        if (this.form[key] !== this.attributes[key]) {
          attrs[key] = this.form[key];
        }
      }
      if (Object.keys(attrs).length) {
        try {
          await esm_default("gi.actions/identity/setAttributes", {
            data: attrs,
            contractID: this.loggedIn.identityContractID
          });
          this.$refs.formMsg.success(L("Your changes were saved!"));
        } catch (e) {
          console.error("UserProfile saveProfile() error:", e);
          this.$refs.formMsg.danger(e.message);
        }
      }
    },
    handleDeleteAccount() {
      esm_default("okTurtles.events/emit", OPEN_MODAL, "AccountRemovalModal");
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "settings-container" },
    [
      _c("span", { staticClass: "c-username" }, [
        _vm._v("@" + _vm._s(_vm.ourUsername))
      ]),
      _c("avatar-upload", {
        attrs: {
          avatar: _vm.attributes.picture,
          sbpParams: _vm.sbpParams,
          "avatar-type": "user"
        }
      }),
      _c("section", { staticClass: "card" }, [
        _c(
          "form",
          {
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
                _c(
                  "div",
                  { staticClass: "c-display-name-label-container" },
                  [
                    _c("i18n", { staticClass: "label" }, [
                      _vm._v("Display Name")
                    ]),
                    _vm.form.displayName ? _c("char-length-indicator", {
                      attrs: {
                        "current-length": _vm.form.displayName.length || 0,
                        max: _vm.config.displayNameMaxChar,
                        error: _vm.$v.form.displayName.$error
                      }
                    }) : _vm._e()
                  ],
                  1
                ),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.displayName,
                      expression: "form.displayName"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    name: "displayName",
                    type: "text",
                    maxlength: _vm.config.displayNameMaxChar,
                    placeholder: "Name",
                    "data-test": "displayName"
                  },
                  domProps: { value: _vm.form.displayName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "displayName", $event.target.value);
                    }
                  }
                }),
                _c("i18n", { staticClass: "helper" }, [
                  _vm._v(
                    "This is how others will see your name accross the platform."
                  )
                ])
              ],
              1
            ),
            _c("label", { staticClass: "field" }, [
              _c(
                "div",
                { staticClass: "c-bio-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [_vm._v("Bio")]),
                  _vm.form.bio ? _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.form.bio.length || 0,
                      max: _vm.config.bioMaxChar,
                      error: _vm.$v.form.bio.$error
                    }
                  }) : _vm._e()
                ],
                1
              ),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.bio,
                    expression: "form.bio"
                  }
                ],
                staticClass: "textarea",
                class: { error: _vm.$v.form.bio.$error },
                attrs: {
                  name: "bio",
                  maxlength: _vm.config.bioMaxChar,
                  placeholder: "Bio",
                  "data-test": "bio"
                },
                domProps: { value: _vm.form.bio },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(_vm.form, "bio", $event.target.value);
                  }
                }
              })
            ]),
            _c(
              "label",
              { staticClass: "field" },
              [
                _c("i18n", { staticClass: "label" }, [_vm._v("Password")]),
                _c(
                  "div",
                  {
                    staticClass: "fake-password",
                    attrs: { "aria-hidden": "true" }
                  },
                  [_vm._v("**********")]
                ),
                _c(
                  "i18n",
                  {
                    staticClass: "link",
                    attrs: {
                      tag: "button",
                      type: "button",
                      "data-test": "passwordBtn"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault();
                        return _vm.openModal("PasswordModal");
                      }
                    }
                  },
                  [_vm._v("Update Password")]
                )
              ],
              1
            ),
            _c("banner-scoped", {
              ref: "formMsg",
              attrs: { "data-test": "profileMsg" }
            }),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "button-submit",
                  {
                    staticClass: "is-success",
                    attrs: { "data-test": "saveAccount" },
                    on: { click: _vm.saveProfile }
                  },
                  [_vm._v(_vm._s(_vm.L("Save account changes")))]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _c("section", { staticClass: "card" }, [
        _c(
          "form",
          {
            attrs: { name: "DeleteProfileForm" },
            on: {
              submit: function($event) {
                $event.preventDefault();
              }
            }
          },
          [
            _c(
              "i18n",
              { staticClass: "is-title-3 card-header", attrs: { tag: "h3" } },
              [_vm._v("Delete account")]
            ),
            _c(
              "p",
              [
                _c("i18n", [
                  _vm._v(
                    "Deleting your account will erase all your data, and remove you from the groups you belong to."
                  )
                ]),
                _vm._v(_vm._s(" ")),
                _c("i18n", { staticClass: "is-danger" }, [
                  _vm._v("This action cannot be undone.")
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "i18n",
                  {
                    staticClass: "button error is-outlined",
                    attrs: {
                      tag: "button",
                      type: "submit",
                      "data-test": "deleteAccount"
                    },
                    on: { click: _vm.handleDeleteAccount }
                  },
                  [_vm._v("Delete account")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-461cbfe0_0", { source: ".c-username[data-v-461cbfe0] {\n  display: none;\n  margin-bottom: 2rem;\n  margin-top: 0.5rem;\n  color: var(--text_1);\n}\n@media screen and (min-width: 1200px) {\n.c-username[data-v-461cbfe0] {\n    display: block;\n}\n}\n.c-display-name-label-container[data-v-461cbfe0],\n.c-bio-label-container[data-v-461cbfe0] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.fake-password[data-v-461cbfe0] {\n  display: inline-block;\n  margin-top: 0.5rem;\n  margin-left: -1px;\n  margin-right: 0.5rem;\n}\n.legend[data-v-461cbfe0] {\n  font-size: 0.75rem;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.icon-check[data-v-461cbfe0] {\n  margin-right: 1rem;\n}\n\n/*# sourceMappingURL=UserProfile.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/UserProfile.vue", "UserProfile.vue"], "names": [], "mappings": "AA6LA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AC5LA;AACA;ADuLA;IAOA,cAAA;AC3LE;AACF;AD8LA;;EAEA,aAAA;EACA,qBAAA;EACA,8BAAA;AC3LA;AD8LA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AC3LA;AD8LA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AC3LA;AD8LA;EACA,kBAAA;AC3LA;;AAEA,0CAA0C", "file": "UserProfile.vue", "sourcesContent": [`<template lang='pug'>
  .settings-container
    span.c-username @{{ ourUsername }}

    avatar-upload(
      :avatar='attributes.picture'
      :sbpParams='sbpParams'
      avatar-type='user'
    )

    section.card
      form(@submit.prevent='')
        label.field
          .c-display-name-label-container
            i18n.label Display Name
            char-length-indicator(
              v-if='form.displayName'
              :current-length='form.displayName.length || 0'
              :max='config.displayNameMaxChar'
              :error='$v.form.displayName.$error'
            )

          input.input(
            name='displayName'
            type='text'
            v-model='form.displayName'
            :maxlength='config.displayNameMaxChar'
            placeholder='Name'
            data-test='displayName'
          )

          i18n.helper This is how others will see your name accross the platform.

        label.field
          .c-bio-label-container
            i18n.label Bio
            char-length-indicator(
              v-if='form.bio'
              :current-length='form.bio.length || 0'
              :max='config.bioMaxChar'
              :error='$v.form.bio.$error'
            )
          textarea.textarea(
            name='bio'
            v-model='form.bio'
            :maxlength='config.bioMaxChar'
            :class='{ error: $v.form.bio.$error }'
            placeholder='Bio'
            data-test='bio'
          )

        label.field
          i18n.label Password
          .fake-password(aria-hidden='true') **********

          i18n.link(
            tag='button'
            type='button'
            data-test='passwordBtn'
            @click.prevent='openModal("PasswordModal")'
          ) Update Password

        banner-scoped(ref='formMsg' data-test='profileMsg')

        .buttons
          button-submit.is-success(
            @click='saveProfile'
            data-test='saveAccount'
          ) {{ L('Save account changes') }}

    section.card
      form(name='DeleteProfileForm' @submit.prevent='')
        i18n.is-title-3(tag='h3' class='card-header') Delete account
        p
          i18n Deleting your account will erase all your data, and remove you from the groups you belong to.
          | {{ ' ' }}
          i18n.is-danger This action cannot be undone.

        .buttons
          i18n.button.error.is-outlined(
            tag='button'
            type='submit'
            data-test='deleteAccount'
            @click='handleDeleteAccount'
          ) Delete account
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { cloneDeep } from 'turtledash'
import { mapGetters, mapState } from 'vuex'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import AvatarUpload from '../../../../frontend/views/components/AvatarUpload.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import { L } from '../../../../frontend/common/common.js'
import { IDENTITY_BIO_MAX_CHARS, IDENTITY_USERNAME_MAX_CHARS } from '../../../../frontend/model/contracts/shared/constants.js'
export default ({
  name: 'UserProfile',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    AvatarUpload,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  data () {
    // create a copy of the attributes to avoid any Vue.js reactivity weirdness
    // so that we do not directly modify the values in the store
    const attrsCopy = cloneDeep(this.$store.getters.currentIdentityState.attributes || {})
    return {
      form: {
        displayName: attrsCopy.displayName,
        bio: attrsCopy.bio
      },
      config: {
        bioMaxChar: IDENTITY_BIO_MAX_CHARS,
        displayNameMaxChar: IDENTITY_USERNAME_MAX_CHARS
      }
    }
  },
  validations: {
    form: {
      displayName: {
        [L('Reached character limit.')]: (value) => {
          return !value || Number(value.length) <= IDENTITY_USERNAME_MAX_CHARS
        }
      },
      bio: {
        [L('Reached character limit.')]: (value) => {
          return !value || Number(value.length) <= IDENTITY_BIO_MAX_CHARS
        }
      }
    }
  },
  computed: {
    ...mapState(['loggedIn']),
    ...mapGetters(['ourUsername', 'currentIdentityState']),
    attributes () {
      return this.currentIdentityState.attributes || {}
    },
    sbpParams () {
      return {
        selector: 'gi.actions/identity/setAttributes',
        contractID: this.loggedIn.identityContractID,
        key: 'picture'
      }
    }
  },
  methods: {
    openModal (mode) {
      sbp('okTurtles.events/emit', OPEN_MODAL, mode)
      return false
    },
    async saveProfile () {
      this.$refs.formMsg.clean()
      const attrs = {}

      for (const key in this.form) {
        if (this.form[key] !== this.attributes[key]) {
          attrs[key] = this.form[key]
        }
      }

      if (Object.keys(attrs).length) {
        try {
          await sbp('gi.actions/identity/setAttributes', {
            data: attrs, contractID: this.loggedIn.identityContractID
          })
          this.$refs.formMsg.success(L('Your changes were saved!'))
        } catch (e) {
          console.error('UserProfile saveProfile() error:', e)
          this.$refs.formMsg.danger(e.message)
        }
      }
    },
    handleDeleteAccount () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'AccountRemovalModal')
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-username {
  display: none;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  color: $text_1;

  @include desktop {
    display: block;
  }
}

.c-display-name-label-container,
.c-bio-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.fake-password {
  display: inline-block;
  margin-top: 0.5rem;
  margin-left: -1px;
  margin-right: 0.5rem;
}

.legend {
  font-size: $size_5;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}

.icon-check {
  margin-right: 1rem;
}

</style>
`, ".c-username {\n  display: none;\n  margin-bottom: 2rem;\n  margin-top: 0.5rem;\n  color: var(--text_1);\n}\n@media screen and (min-width: 1200px) {\n  .c-username {\n    display: block;\n  }\n}\n\n.c-display-name-label-container,\n.c-bio-label-container {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.fake-password {\n  display: inline-block;\n  margin-top: 0.5rem;\n  margin-left: -1px;\n  margin-right: 0.5rem;\n}\n\n.legend {\n  font-size: 0.75rem;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.icon-check {\n  margin-right: 1rem;\n}\n\n/*# sourceMappingURL=UserProfile.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-461cbfe0";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .settings-container
    span.c-username @{{ ourUsername }}

    avatar-upload(
      :avatar='attributes.picture'
      :sbpParams='sbpParams'
      avatar-type='user'
    )

    section.card
      form(@submit.prevent='')
        label.field
          .c-display-name-label-container
            i18n.label Display Name
            char-length-indicator(
              v-if='form.displayName'
              :current-length='form.displayName.length || 0'
              :max='config.displayNameMaxChar'
              :error='$v.form.displayName.$error'
            )

          input.input(
            name='displayName'
            type='text'
            v-model='form.displayName'
            :maxlength='config.displayNameMaxChar'
            placeholder='Name'
            data-test='displayName'
          )

          i18n.helper This is how others will see your name accross the platform.

        label.field
          .c-bio-label-container
            i18n.label Bio
            char-length-indicator(
              v-if='form.bio'
              :current-length='form.bio.length || 0'
              :max='config.bioMaxChar'
              :error='$v.form.bio.$error'
            )
          textarea.textarea(
            name='bio'
            v-model='form.bio'
            :maxlength='config.bioMaxChar'
            :class='{ error: $v.form.bio.$error }'
            placeholder='Bio'
            data-test='bio'
          )

        label.field
          i18n.label Password
          .fake-password(aria-hidden='true') **********

          i18n.link(
            tag='button'
            type='button'
            data-test='passwordBtn'
            @click.prevent='openModal("PasswordModal")'
          ) Update Password

        banner-scoped(ref='formMsg' data-test='profileMsg')

        .buttons
          button-submit.is-success(
            @click='saveProfile'
            data-test='saveAccount'
          ) {{ L('Save account changes') }}

    section.card
      form(name='DeleteProfileForm' @submit.prevent='')
        i18n.is-title-3(tag='h3' class='card-header') Delete account
        p
          i18n Deleting your account will erase all your data, and remove you from the groups you belong to.
          | {{ ' ' }}
          i18n.is-danger This action cannot be undone.

        .buttons
          i18n.button.error.is-outlined(
            tag='button'
            type='submit'
            data-test='deleteAccount'
            @click='handleDeleteAccount'
          ) Delete account
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { cloneDeep } from 'turtledash'
import { mapGetters, mapState } from 'vuex'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import AvatarUpload from '../../../../frontend/views/components/AvatarUpload.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import { L } from '../../../../frontend/common/common.js'
import { IDENTITY_BIO_MAX_CHARS, IDENTITY_USERNAME_MAX_CHARS } from '../../../../frontend/model/contracts/shared/constants.js'
export default ({
  name: 'UserProfile',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    AvatarUpload,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  data () {
    // create a copy of the attributes to avoid any Vue.js reactivity weirdness
    // so that we do not directly modify the values in the store
    const attrsCopy = cloneDeep(this.$store.getters.currentIdentityState.attributes || {})
    return {
      form: {
        displayName: attrsCopy.displayName,
        bio: attrsCopy.bio
      },
      config: {
        bioMaxChar: IDENTITY_BIO_MAX_CHARS,
        displayNameMaxChar: IDENTITY_USERNAME_MAX_CHARS
      }
    }
  },
  validations: {
    form: {
      displayName: {
        [L('Reached character limit.')]: (value) => {
          return !value || Number(value.length) <= IDENTITY_USERNAME_MAX_CHARS
        }
      },
      bio: {
        [L('Reached character limit.')]: (value) => {
          return !value || Number(value.length) <= IDENTITY_BIO_MAX_CHARS
        }
      }
    }
  },
  computed: {
    ...mapState(['loggedIn']),
    ...mapGetters(['ourUsername', 'currentIdentityState']),
    attributes () {
      return this.currentIdentityState.attributes || {}
    },
    sbpParams () {
      return {
        selector: 'gi.actions/identity/setAttributes',
        contractID: this.loggedIn.identityContractID,
        key: 'picture'
      }
    }
  },
  methods: {
    openModal (mode) {
      sbp('okTurtles.events/emit', OPEN_MODAL, mode)
      return false
    },
    async saveProfile () {
      this.$refs.formMsg.clean()
      const attrs = {}

      for (const key in this.form) {
        if (this.form[key] !== this.attributes[key]) {
          attrs[key] = this.form[key]
        }
      }

      if (Object.keys(attrs).length) {
        try {
          await sbp('gi.actions/identity/setAttributes', {
            data: attrs, contractID: this.loggedIn.identityContractID
          })
          this.$refs.formMsg.success(L('Your changes were saved!'))
        } catch (e) {
          console.error('UserProfile saveProfile() error:', e)
          this.$refs.formMsg.danger(e.message)
        }
      }
    },
    handleDeleteAccount () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'AccountRemovalModal')
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-username {
  display: none;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  color: $text_1;

  @include desktop {
    display: block;
  }
}

.c-display-name-label-container,
.c-bio-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.fake-password {
  display: inline-block;
  margin-top: 0.5rem;
  margin-left: -1px;
  margin-right: 0.5rem;
}

.legend {
  font-size: $size_5;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}

.icon-check {
  margin-right: 1rem;
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
var UserProfile_default = __vue_component__;
export {
  UserProfile_default as default
};
//# sourceMappingURL=UserProfile-HJYKS5PL-cached.js.map
