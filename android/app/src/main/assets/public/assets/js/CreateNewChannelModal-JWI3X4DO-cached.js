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
import "./chunk-MTWMQLQH-cached.js";
import {
  CHATROOM_DESCRIPTION_LIMITS_IN_CHARS,
  CHATROOM_NAME_LIMITS_IN_CHARS,
  CHATROOM_PRIVACY_LEVEL,
  CHATROOM_TYPES
} from "./chunk-UYGYRQRQ-cached.js";
import {
  require_required
} from "./chunk-YH4VCTQW-cached.js";
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
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LError
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/CreateNewChannelModal.vue
var import_vuelidate = __toESM(require_lib());
var import_required = __toESM(require_required());
var privacyLevelToDisplay = {
  [CHATROOM_PRIVACY_LEVEL.GROUP]: {
    label: L("Group channel"),
    description: L("All group members will be able to see or join this channel."),
    icon: "hashtag"
  },
  [CHATROOM_PRIVACY_LEVEL.PRIVATE]: {
    label: L("Private channel"),
    description: L("Only added members will have access."),
    icon: "lock"
  },
  [CHATROOM_PRIVACY_LEVEL.PUBLIC]: {
    label: L("Public channel"),
    description: L("People from outside the group can see the channel's content"),
    icon: "unlock-alt"
  }
};
var __vue_script__ = {
  name: "CreateNewChannelModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    CharLengthIndicator: CharLengthIndicator_default
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["groupSettings", "groupChatRooms"]),
    maxNameCharacters() {
      return CHATROOM_NAME_LIMITS_IN_CHARS;
    },
    maxDescriptionCharacters() {
      return CHATROOM_DESCRIPTION_LIMITS_IN_CHARS;
    },
    isPublicChannelCreateAllowed() {
      return this.groupSettings.allowPublicChannels;
    },
    privacyLevels() {
      return Object.values(CHATROOM_PRIVACY_LEVEL).map((value) => ({
        value,
        label: privacyLevelToDisplay[value].label
      }));
    },
    privacyLevel() {
      return this.isPublicChannelCreateAllowed ? this.form.privacy : !this.form.private ? CHATROOM_PRIVACY_LEVEL.GROUP : CHATROOM_PRIVACY_LEVEL.PRIVATE;
    },
    privacyLevelDescription() {
      return privacyLevelToDisplay[this.privacyLevel].description;
    },
    privacyLevelIcon() {
      return privacyLevelToDisplay[this.privacyLevel].icon;
    }
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        private: false,
        privacy: "",
        existingNames: []
      }
    };
  },
  created() {
    this.form.existingNames = Object.keys(this.groupChatRooms).map((cId) => this.groupChatRooms[cId].name);
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      const { name, description } = this.form;
      try {
        await esm_default("gi.app/group/addAndJoinChatRoom", {
          contractID: this.currentGroupId,
          data: {
            attributes: {
              name,
              description,
              privacyLevel: this.privacyLevel,
              type: CHATROOM_TYPES.GROUP
            }
          }
        });
        this.close();
      } catch (e) {
        this.$refs.formMsg.danger(L("Failed to create chat channel. {reportError}", LError(e)));
      }
    },
    toggleChannelPrivate(e) {
      this.form.private = e.target.checked;
    },
    handlePrivacyLevel(e) {
      this.form.privacy = e.target.value;
    }
  },
  validations: {
    form: {
      name: {
        [L("This field is required")]: import_required.default,
        [L("Reached character limit.")]: function(value) {
          return value ? Number(value.length) <= this.maxNameCharacters : false;
        },
        [L("Duplicate channel name")]: (name, siblings) => {
          for (const existingName of siblings.existingNames) {
            if (name.toUpperCase() === existingName.toUpperCase()) {
              return false;
            }
          }
          return true;
        }
      },
      description: {
        [L("Reached character limit.")]: function(value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters;
        }
      },
      privacy: {
        [L("This field is required")]: function(value) {
          return !this.isPublicChannelCreateAllowed || !!value;
        }
      }
    }
  },
  watch: {
    "form.name"(newVal, oldVal) {
      if (newVal.length) {
        this.form.name = newVal.replaceAll(/\s/g, "-").toLowerCase();
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Create a channel") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Create a channel")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate", "data-test": "createChannel" },
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c("label", { staticClass: "field" }, [
            _c(
              "div",
              { staticClass: "c-name-label-container" },
              [
                _c("i18n", { staticClass: "label c-label-name" }, [
                  _vm._v("Name")
                ]),
                _vm.form.name ? _c("char-length-indicator", {
                  attrs: {
                    "current-length": _vm.form.name.length || 0,
                    max: _vm.maxNameCharacters
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
                  value: _vm.form.name,
                  expression: "form.name"
                },
                { name: "error", rawName: "v-error:name", arg: "name" }
              ],
              ref: "name",
              staticClass: "input",
              class: { error: _vm.$v.form.name.$error },
              attrs: {
                type: "text",
                name: "name",
                maxlength: "50",
                "data-test": "createChannelName"
              },
              domProps: { value: _vm.form.name },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(_vm.form, "name", $event.target.value);
                  },
                  function($event) {
                    return _vm.debounceField("name");
                  }
                ],
                blur: function($event) {
                  return _vm.updateField("name");
                }
              }
            })
          ]),
          _c(
            "label",
            { staticClass: "field" },
            [
              _c(
                "div",
                { staticClass: "c-desc-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [_vm._v("Description")]),
                  _vm.form.description ? _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.form.description.length || 0,
                      max: _vm.maxDescriptionCharacters,
                      error: _vm.$v.form.description.$error
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
                    value: _vm.form.description,
                    expression: "form.description"
                  },
                  {
                    name: "error",
                    rawName: "v-error:description",
                    arg: "description"
                  }
                ],
                staticClass: "textarea",
                class: { error: _vm.$v.form.description.$error },
                attrs: {
                  name: "description",
                  placeholder: _vm.L("Description of the channel"),
                  maxlength: _vm.maxDescriptionCharacters,
                  "data-test": "createChannelDescription"
                },
                domProps: { value: _vm.form.description },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "description", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("description");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("description");
                  }
                }
              }),
              _c("i18n", { staticClass: "helper" }, [
                _vm._v("This is optional.")
              ])
            ],
            1
          ),
          _vm.isPublicChannelCreateAllowed ? _c(
            "label",
            { staticClass: "field" },
            [
              _c("i18n", { staticClass: "label" }, [
                _vm._v("Channel Privacy")
              ]),
              _c(
                "div",
                {
                  staticClass: "selectbox",
                  class: { error: _vm.$v.form.privacy.$error }
                },
                [
                  _c(
                    "select",
                    {
                      staticClass: "select",
                      attrs: {
                        "aria-label": _vm.L("Please select"),
                        name: "privacy",
                        "data-test": "createChannelPrivacyLevel"
                      },
                      domProps: { value: _vm.form.privacy },
                      on: {
                        change: _vm.handlePrivacyLevel,
                        blur: function($event) {
                          return _vm.updateField("privacy");
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        {
                          staticClass: "placeholder",
                          attrs: { value: "", disabled: "disabled" }
                        },
                        [_vm._v(_vm._s(_vm.L("Please select")))]
                      ),
                      _vm._l(_vm.privacyLevels, function(pLevel, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: pLevel.value } },
                          [_vm._v(_vm._s(pLevel.label))]
                        );
                      })
                    ],
                    2
                  )
                ]
              )
            ],
            1
          ) : _c(
            "label",
            { staticClass: "c-inline-input" },
            [
              _c("i18n", { staticClass: "label" }, [
                _vm._v("Private channel")
              ]),
              _c("input", {
                staticClass: "switch",
                attrs: {
                  type: "checkbox",
                  "data-test": "createChannelPrivate"
                },
                domProps: { checked: _vm.form.private },
                on: { change: _vm.toggleChannelPrivate }
              })
            ],
            1
          ),
          _vm.privacyLevel ? _c("hr") : _vm._e(),
          _vm.privacyLevel ? _c("div", { staticClass: "c-helper" }, [
            _c("i", {
              class: "icon-" + _vm.privacyLevelIcon + " c-group-i"
            }),
            _c("div", { staticClass: "helper", attrs: { tag: "p" } }, [
              _vm._v(_vm._s(_vm.privacyLevelDescription))
            ])
          ]) : _vm._e(),
          _c("banner-scoped", { ref: "formMsg", attrs: { allowA: true } }),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                { staticClass: "button is-outlined", on: { click: _vm.close } },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-success",
                  attrs: {
                    "data-test": "createChannelSubmit",
                    disabled: _vm.$v.form.$invalid
                  },
                  on: { click: _vm.submit }
                },
                [_c("i18n", [_vm._v("Create channel")])],
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
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-0ce5186e_0", { source: ".c-name-label-container[data-v-0ce5186e],\n.c-desc-label-container[data-v-0ce5186e] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-label-name[data-v-0ce5186e] {\n  float: left;\n}\n.c-max-count[data-v-0ce5186e] {\n  float: right;\n  color: var(--text_1);\n}\n.c-inline-input[data-v-0ce5186e] {\n  display: flex;\n  justify-content: space-between;\n}\nhr[data-v-0ce5186e] {\n  background-color: var(--general_0);\n  margin: 1rem 0;\n  height: 1px;\n}\n.helper[data-v-0ce5186e] {\n  color: var(--text_1);\n}\n.c-helper[data-v-0ce5186e] {\n  display: flex;\n}\n.c-group-i[data-v-0ce5186e] {\n  margin-right: 0.5rem;\n}\n.select option.placeholder[data-v-0ce5186e] {\n  display: none;\n}\n\n/*# sourceMappingURL=CreateNewChannelModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/CreateNewChannelModal.vue", "CreateNewChannelModal.vue"], "names": [], "mappings": "AAsQA;;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;ACrQA;ADwQA;EACA,WAAA;ACrQA;ADwQA;EACA,YAAA;EACA,oBAAA;ACrQA;ADwQA;EACA,aAAA;EACA,8BAAA;ACrQA;ADwQA;EACA,kCAAA;EACA,cAAA;EACA,WAAA;ACrQA;ADwQA;EACA,oBAAA;ACrQA;ADwQA;EACA,aAAA;ACrQA;ADwQA;EACA,oBAAA;ACrQA;ADwQA;EACA,aAAA;ACrQA;;AAEA,oDAAoD", "file": "CreateNewChannelModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Create a channel")')
    template(slot='title')
      i18n Create a channel

    form(novalidate @submit.prevent='' data-test='createChannel')
      label.field
        .c-name-label-container
          i18n.label.c-label-name Name
          char-length-indicator(
            v-if='form.name'
            :current-length='form.name.length || 0'
            :max='maxNameCharacters'
          )
        input.input(
          ref='name'
          type='text'
          name='name'
          maxlength='50'
          :class='{ error: $v.form.name.$error }'
          v-model='form.name'
          data-test='createChannelName'
          @input='debounceField("name")'
          @blur='updateField("name")'
          v-error:name=''
        )

      label.field
        .c-desc-label-container
          i18n.label Description
          char-length-indicator(
            v-if='form.description'
            :current-length='form.description.length || 0'
            :max='maxDescriptionCharacters'
            :error='$v.form.description.$error'
          )

        textarea.textarea(
          name='description'
          :placeholder='L("Description of the channel")'
          :maxlength='maxDescriptionCharacters'
          :class='{ error: $v.form.description.$error }'
          v-model='form.description'
          data-test='createChannelDescription'
          @input='debounceField("description")'
          @blur='updateField("description")'
          v-error:description=''
        )
        i18n.helper This is optional.

      label.field(v-if='isPublicChannelCreateAllowed')
        i18n.label Channel Privacy
        .selectbox(
          :class='{ error: $v.form.privacy.$error }'
        )
          select.select(
            :aria-label='L("Please select")'
            name='privacy'
            :value='form.privacy'
            @change='handlePrivacyLevel'
            data-test='createChannelPrivacyLevel'
            @blur='updateField("privacy")'
          )
            option.placeholder(value='' disabled) {{L("Please select")}}
            option(
              v-for='(pLevel, index) in privacyLevels'
              :value='pLevel.value'
              :key='index'
            ) {{ pLevel.label }}

      label.c-inline-input(v-else)
        i18n.label Private channel
        input.switch(
          type='checkbox'
          :checked='form.private'
          data-test='createChannelPrivate'
          @change='toggleChannelPrivate'
        )

      hr(v-if='privacyLevel')

      .c-helper(v-if='privacyLevel')
        i(:class='\`icon-\${ privacyLevelIcon } c-group-i\`')

        .helper(tag='p') {{ privacyLevelDescription }}

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons
        i18n.button.is-outlined(@click='close') Cancel
        button-submit.is-success(
          data-test='createChannelSubmit'
          @click='submit'
          :disabled='$v.form.$invalid'
        )
          i18n Create channel
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LError } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import required from 'vuelidate/lib/validators/required'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import {
  CHATROOM_TYPES,
  CHATROOM_PRIVACY_LEVEL,
  CHATROOM_NAME_LIMITS_IN_CHARS,
  CHATROOM_DESCRIPTION_LIMITS_IN_CHARS
} from '../../../../frontend/model/contracts/shared/constants.js'

const privacyLevelToDisplay = {
  [CHATROOM_PRIVACY_LEVEL.GROUP]: {
    label: L('Group channel'),
    description: L('All group members will be able to see or join this channel.'),
    icon: 'hashtag'
  },
  [CHATROOM_PRIVACY_LEVEL.PRIVATE]: {
    label: L('Private channel'),
    description: L('Only added members will have access.'),
    icon: 'lock'
  },
  [CHATROOM_PRIVACY_LEVEL.PUBLIC]: {
    label: L('Public channel'),
    description: L('People from outside the group can see the channel\\'s content'),
    icon: 'unlock-alt'
  }
}

export default ({
  name: 'CreateNewChannelModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['groupSettings', 'groupChatRooms']),
    maxNameCharacters () {
      return CHATROOM_NAME_LIMITS_IN_CHARS
    },
    maxDescriptionCharacters () {
      return CHATROOM_DESCRIPTION_LIMITS_IN_CHARS
    },
    isPublicChannelCreateAllowed () {
      return this.groupSettings.allowPublicChannels
    },
    privacyLevels () {
      return Object.values(CHATROOM_PRIVACY_LEVEL).map(value => ({
        value, label: privacyLevelToDisplay[value].label
      }))
    },
    privacyLevel () {
      return this.isPublicChannelCreateAllowed
        ? this.form.privacy
        : !this.form.private ? CHATROOM_PRIVACY_LEVEL.GROUP : CHATROOM_PRIVACY_LEVEL.PRIVATE
    },
    privacyLevelDescription () {
      return privacyLevelToDisplay[this.privacyLevel].description
    },
    privacyLevelIcon () {
      return privacyLevelToDisplay[this.privacyLevel].icon
    }
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        private: false,
        privacy: '',
        existingNames: []
      }
    }
  },
  created () {
    // HACK: using rootGetters inside validator makes \`Duplicate channel name\` error
    // as soon as a new channel is created
    this.form.existingNames = Object.keys(this.groupChatRooms).map(cId => this.groupChatRooms[cId].name)
  },
  mounted () {
    this.$refs.name.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      const { name, description } = this.form
      try {
        await sbp('gi.app/group/addAndJoinChatRoom', {
          contractID: this.currentGroupId,
          data: {
            attributes: {
              name,
              description,
              privacyLevel: this.privacyLevel,
              type: CHATROOM_TYPES.GROUP
            }
          }
        })
        this.close()
      } catch (e) {
        this.$refs.formMsg.danger(L('Failed to create chat channel. {reportError}', LError(e)))
      }
    },
    toggleChannelPrivate (e) {
      this.form.private = e.target.checked
    },
    handlePrivacyLevel (e) {
      this.form.privacy = e.target.value
    }
  },
  validations: {
    form: {
      name: {
        [L('This field is required')]: required,
        [L('Reached character limit.')]: function (value) {
          return value ? Number(value.length) <= this.maxNameCharacters : false
        },
        [L('Duplicate channel name')]: (name, siblings) => {
          for (const existingName of siblings.existingNames) {
            if (name.toUpperCase() === existingName.toUpperCase()) {
              return false
            }
          }
          return true
        }
      },
      description: {
        [L('Reached character limit.')]: function (value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters
        }
      },
      privacy: {
        [L('This field is required')]: function (value) {
          return !this.isPublicChannelCreateAllowed || !!value
        }
      }
    }
  },
  watch: {
    'form.name' (newVal, oldVal) {
      if (newVal.length) {
        this.form.name = newVal.replaceAll(/\\s/g, '-').toLowerCase()
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-name-label-container,
.c-desc-label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-label-name {
  float: left;
}

.c-max-count {
  float: right;
  color: $text_1;
}

.c-inline-input {
  display: flex;
  justify-content: space-between;
}

hr {
  background-color: var(--general_0);
  margin: 1rem 0;
  height: 1px;
}

.helper {
  color: $text_1;
}

.c-helper {
  display: flex;
}

.c-group-i {
  margin-right: 0.5rem;
}

.select option.placeholder {
  display: none;
}
</style>
`, ".c-name-label-container,\n.c-desc-label-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.c-label-name {\n  float: left;\n}\n\n.c-max-count {\n  float: right;\n  color: var(--text_1);\n}\n\n.c-inline-input {\n  display: flex;\n  justify-content: space-between;\n}\n\nhr {\n  background-color: var(--general_0);\n  margin: 1rem 0;\n  height: 1px;\n}\n\n.helper {\n  color: var(--text_1);\n}\n\n.c-helper {\n  display: flex;\n}\n\n.c-group-i {\n  margin-right: 0.5rem;\n}\n\n.select option.placeholder {\n  display: none;\n}\n\n/*# sourceMappingURL=CreateNewChannelModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-0ce5186e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Create a channel")')
    template(slot='title')
      i18n Create a channel

    form(novalidate @submit.prevent='' data-test='createChannel')
      label.field
        .c-name-label-container
          i18n.label.c-label-name Name
          char-length-indicator(
            v-if='form.name'
            :current-length='form.name.length || 0'
            :max='maxNameCharacters'
          )
        input.input(
          ref='name'
          type='text'
          name='name'
          maxlength='50'
          :class='{ error: $v.form.name.$error }'
          v-model='form.name'
          data-test='createChannelName'
          @input='debounceField("name")'
          @blur='updateField("name")'
          v-error:name=''
        )

      label.field
        .c-desc-label-container
          i18n.label Description
          char-length-indicator(
            v-if='form.description'
            :current-length='form.description.length || 0'
            :max='maxDescriptionCharacters'
            :error='$v.form.description.$error'
          )

        textarea.textarea(
          name='description'
          :placeholder='L("Description of the channel")'
          :maxlength='maxDescriptionCharacters'
          :class='{ error: $v.form.description.$error }'
          v-model='form.description'
          data-test='createChannelDescription'
          @input='debounceField("description")'
          @blur='updateField("description")'
          v-error:description=''
        )
        i18n.helper This is optional.

      label.field(v-if='isPublicChannelCreateAllowed')
        i18n.label Channel Privacy
        .selectbox(
          :class='{ error: $v.form.privacy.$error }'
        )
          select.select(
            :aria-label='L("Please select")'
            name='privacy'
            :value='form.privacy'
            @change='handlePrivacyLevel'
            data-test='createChannelPrivacyLevel'
            @blur='updateField("privacy")'
          )
            option.placeholder(value='' disabled) {{L("Please select")}}
            option(
              v-for='(pLevel, index) in privacyLevels'
              :value='pLevel.value'
              :key='index'
            ) {{ pLevel.label }}

      label.c-inline-input(v-else)
        i18n.label Private channel
        input.switch(
          type='checkbox'
          :checked='form.private'
          data-test='createChannelPrivate'
          @change='toggleChannelPrivate'
        )

      hr(v-if='privacyLevel')

      .c-helper(v-if='privacyLevel')
        i(:class='\`icon-\${ privacyLevelIcon } c-group-i\`')

        .helper(tag='p') {{ privacyLevelDescription }}

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons
        i18n.button.is-outlined(@click='close') Cancel
        button-submit.is-success(
          data-test='createChannelSubmit'
          @click='submit'
          :disabled='$v.form.$invalid'
        )
          i18n Create channel
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LError } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import required from 'vuelidate/lib/validators/required'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import {
  CHATROOM_TYPES,
  CHATROOM_PRIVACY_LEVEL,
  CHATROOM_NAME_LIMITS_IN_CHARS,
  CHATROOM_DESCRIPTION_LIMITS_IN_CHARS
} from '../../../../frontend/model/contracts/shared/constants.js'

const privacyLevelToDisplay = {
  [CHATROOM_PRIVACY_LEVEL.GROUP]: {
    label: L('Group channel'),
    description: L('All group members will be able to see or join this channel.'),
    icon: 'hashtag'
  },
  [CHATROOM_PRIVACY_LEVEL.PRIVATE]: {
    label: L('Private channel'),
    description: L('Only added members will have access.'),
    icon: 'lock'
  },
  [CHATROOM_PRIVACY_LEVEL.PUBLIC]: {
    label: L('Public channel'),
    description: L('People from outside the group can see the channel\\'s content'),
    icon: 'unlock-alt'
  }
}

export default ({
  name: 'CreateNewChannelModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['groupSettings', 'groupChatRooms']),
    maxNameCharacters () {
      return CHATROOM_NAME_LIMITS_IN_CHARS
    },
    maxDescriptionCharacters () {
      return CHATROOM_DESCRIPTION_LIMITS_IN_CHARS
    },
    isPublicChannelCreateAllowed () {
      return this.groupSettings.allowPublicChannels
    },
    privacyLevels () {
      return Object.values(CHATROOM_PRIVACY_LEVEL).map(value => ({
        value, label: privacyLevelToDisplay[value].label
      }))
    },
    privacyLevel () {
      return this.isPublicChannelCreateAllowed
        ? this.form.privacy
        : !this.form.private ? CHATROOM_PRIVACY_LEVEL.GROUP : CHATROOM_PRIVACY_LEVEL.PRIVATE
    },
    privacyLevelDescription () {
      return privacyLevelToDisplay[this.privacyLevel].description
    },
    privacyLevelIcon () {
      return privacyLevelToDisplay[this.privacyLevel].icon
    }
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        private: false,
        privacy: '',
        existingNames: []
      }
    }
  },
  created () {
    // HACK: using rootGetters inside validator makes \`Duplicate channel name\` error
    // as soon as a new channel is created
    this.form.existingNames = Object.keys(this.groupChatRooms).map(cId => this.groupChatRooms[cId].name)
  },
  mounted () {
    this.$refs.name.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      const { name, description } = this.form
      try {
        await sbp('gi.app/group/addAndJoinChatRoom', {
          contractID: this.currentGroupId,
          data: {
            attributes: {
              name,
              description,
              privacyLevel: this.privacyLevel,
              type: CHATROOM_TYPES.GROUP
            }
          }
        })
        this.close()
      } catch (e) {
        this.$refs.formMsg.danger(L('Failed to create chat channel. {reportError}', LError(e)))
      }
    },
    toggleChannelPrivate (e) {
      this.form.private = e.target.checked
    },
    handlePrivacyLevel (e) {
      this.form.privacy = e.target.value
    }
  },
  validations: {
    form: {
      name: {
        [L('This field is required')]: required,
        [L('Reached character limit.')]: function (value) {
          return value ? Number(value.length) <= this.maxNameCharacters : false
        },
        [L('Duplicate channel name')]: (name, siblings) => {
          for (const existingName of siblings.existingNames) {
            if (name.toUpperCase() === existingName.toUpperCase()) {
              return false
            }
          }
          return true
        }
      },
      description: {
        [L('Reached character limit.')]: function (value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters
        }
      },
      privacy: {
        [L('This field is required')]: function (value) {
          return !this.isPublicChannelCreateAllowed || !!value
        }
      }
    }
  },
  watch: {
    'form.name' (newVal, oldVal) {
      if (newVal.length) {
        this.form.name = newVal.replaceAll(/\\s/g, '-').toLowerCase()
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-name-label-container,
.c-desc-label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-label-name {
  float: left;
}

.c-max-count {
  float: right;
  color: $text_1;
}

.c-inline-input {
  display: flex;
  justify-content: space-between;
}

hr {
  background-color: var(--general_0);
  margin: 1rem 0;
  height: 1px;
}

.helper {
  color: $text_1;
}

.c-helper {
  display: flex;
}

.c-group-i {
  margin-right: 0.5rem;
}

.select option.placeholder {
  display: none;
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
var CreateNewChannelModal_default = __vue_component__;
export {
  CreateNewChannelModal_default as default
};
//# sourceMappingURL=CreateNewChannelModal-JWI3X4DO-cached.js.map
