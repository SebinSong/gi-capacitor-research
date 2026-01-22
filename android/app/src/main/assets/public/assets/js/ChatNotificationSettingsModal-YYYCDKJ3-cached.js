import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  CHATROOM_PRIVACY_LEVEL,
  MESSAGE_NOTIFY_SETTINGS
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
import {
  NEW_CHATROOM_NOTIFICATION_SETTINGS
} from "./chunk-4UEGBI3X-cached.js";
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

// frontend/views/containers/chatroom/ChatNotificationSettingsModal.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "ChatNotificationSettingsModal",
  mixins: [import_vuelidate.validationMixin],
  components: {
    ModalTemplate: ModalTemplate_default
  },
  computed: {
    ...mapGetters(["chatNotificationSettings", "currentChatRoomId"])
  },
  data() {
    return {
      options: MESSAGE_NOTIFY_SETTINGS,
      form: {
        messageNotification: null,
        messageSound: null
      }
    };
  },
  created() {
    let settingsFromState;
    if (this.chatNotificationSettings[this.currentChatRoomId]) {
      settingsFromState = this.chatNotificationSettings[this.currentChatRoomId];
    } else {
      const rootState = esm_default("state/vuex/state");
      const privacyLevelPrivate = rootState[this.currentChatRoomId]?.attributes?.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE;
      settingsFromState = privacyLevelPrivate ? this.chatNotificationSettings.privateDefault : this.chatNotificationSettings.publicDefault;
    }
    this.form.messageNotification = settingsFromState.messageNotification;
    this.form.messageSound = settingsFromState.messageSound;
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    submit() {
      esm_default("okTurtles.events/emit", NEW_CHATROOM_NOTIFICATION_SETTINGS, {
        chatRoomID: this.currentChatRoomId,
        settings: this.form
      });
      this.close();
    }
  },
  validations: {
    form: {
      messageNotification: {
        [L("This field is required")]: import_validators.required
      },
      messageSound: {
        [L("This field is required")]: import_validators.required
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Notifications") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Notifications")])],
        1
      ),
      _c(
        "form",
        {
          attrs: {
            novalidate: "novalidate",
            "data-test": "updateNotificationSettings"
          },
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c("fieldset", { staticClass: "is-column" }, [
            _c(
              "legend",
              { staticClass: "legend" },
              [_c("i18n", [_vm._v("Send notifications for:")])],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageNotification.$model,
                      expression: "$v.form.messageNotification.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageNotification" },
                  domProps: {
                    value: _vm.options.ALL_MESSAGES,
                    checked: _vm._q(
                      _vm.$v.form.messageNotification.$model,
                      _vm.options.ALL_MESSAGES
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageNotification,
                        "$model",
                        _vm.options.ALL_MESSAGES
                      );
                    }
                  }
                }),
                _c("i18n", [_vm._v("All new messages")])
              ],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageNotification.$model,
                      expression: "$v.form.messageNotification.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageNotification" },
                  domProps: {
                    value: _vm.options.DIRECT_MESSAGES,
                    checked: _vm._q(
                      _vm.$v.form.messageNotification.$model,
                      _vm.options.DIRECT_MESSAGES
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageNotification,
                        "$model",
                        _vm.options.DIRECT_MESSAGES
                      );
                    }
                  }
                }),
                _c("i18n", [_vm._v("Direct messages and mentions")])
              ],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageNotification.$model,
                      expression: "$v.form.messageNotification.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageNotification" },
                  domProps: {
                    value: _vm.options.NOTHING,
                    checked: _vm._q(
                      _vm.$v.form.messageNotification.$model,
                      _vm.options.NOTHING
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageNotification,
                        "$model",
                        _vm.options.NOTHING
                      );
                    }
                  }
                }),
                _c("i18n", [_vm._v("Nothing")])
              ],
              1
            )
          ]),
          _c("fieldset", { staticClass: "is-column" }, [
            _c(
              "legend",
              { staticClass: "legend" },
              [_c("i18n", [_vm._v("Sounds:")])],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageSound.$model,
                      expression: "$v.form.messageSound.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageSound" },
                  domProps: {
                    value: _vm.options.ALL_MESSAGES,
                    checked: _vm._q(
                      _vm.$v.form.messageSound.$model,
                      _vm.options.ALL_MESSAGES
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageSound,
                        "$model",
                        _vm.options.ALL_MESSAGES
                      );
                    }
                  }
                }),
                _c("i18n", [_vm._v("Play sounds for all new messages")])
              ],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageSound.$model,
                      expression: "$v.form.messageSound.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageSound" },
                  domProps: {
                    value: _vm.options.DIRECT_MESSAGES,
                    checked: _vm._q(
                      _vm.$v.form.messageSound.$model,
                      _vm.options.DIRECT_MESSAGES
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageSound,
                        "$model",
                        _vm.options.DIRECT_MESSAGES
                      );
                    }
                  }
                }),
                _c("i18n", [
                  _vm._v("Play sounds for direct messages and mentions")
                ])
              ],
              1
            ),
            _c(
              "label",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.form.messageSound.$model,
                      expression: "$v.form.messageSound.$model"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "messageSound" },
                  domProps: {
                    value: _vm.options.NOTHING,
                    checked: _vm._q(
                      _vm.$v.form.messageSound.$model,
                      _vm.options.NOTHING
                    )
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(
                        _vm.$v.form.messageSound,
                        "$model",
                        _vm.options.NOTHING
                      );
                    }
                  }
                }),
                _c("i18n", [_vm._v("Mute all sounds from chat notifications")])
              ],
              1
            )
          ]),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-outlined",
                  attrs: { tag: "button" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "i18n",
                {
                  staticClass: "is-success",
                  attrs: {
                    tag: "button",
                    "data-test": "updateNotificationSettings"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v("Save")]
              )
            ],
            1
          )
        ]
      )
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5779d9cb_0", { source: "fieldset[data-v-5779d9cb]:nth-child(2) {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=ChatNotificationSettingsModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/ChatNotificationSettingsModal.vue", "ChatNotificationSettingsModal.vue"], "names": [], "mappings": "AA2IA;EACA,gBAAA;AC1IA;;AAEA,4DAA4D", "file": "ChatNotificationSettingsModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Notifications")')
    template(slot='title')
      i18n Notifications

    form(novalidate @submit.prevent='' data-test='updateNotificationSettings')
      fieldset.is-column
        legend.legend
          i18n Send notifications for:
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.ALL_MESSAGES'
            v-model='$v.form.messageNotification.$model'
          )
          i18n All new messages
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.DIRECT_MESSAGES'
            v-model='$v.form.messageNotification.$model'
          )
          i18n Direct messages and mentions
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.NOTHING'
            v-model='$v.form.messageNotification.$model'
          )
          i18n Nothing

      fieldset.is-column
        legend.legend
          i18n Sounds:
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.ALL_MESSAGES'
            v-model='$v.form.messageSound.$model'
          )
          i18n Play sounds for all new messages
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.DIRECT_MESSAGES'
            v-model='$v.form.messageSound.$model'
          )
          i18n Play sounds for direct messages and mentions
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.NOTHING'
            v-model='$v.form.messageSound.$model'
          )
          i18n Mute all sounds from chat notifications

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        i18n.is-success(
          tag='button'
          @click='submit'
          data-test='updateNotificationSettings'
        ) Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import { CHATROOM_PRIVACY_LEVEL, MESSAGE_NOTIFY_SETTINGS } from '../../../../frontend/model/contracts/shared/constants.js'
import { NEW_CHATROOM_NOTIFICATION_SETTINGS } from '../../../../frontend/utils/events.js'

export default ({
  name: 'ChatNotificationSettingsModal',
  mixins: [validationMixin],
  components: {
    ModalTemplate
  },
  computed: {
    ...mapGetters(['chatNotificationSettings', 'currentChatRoomId'])
  },
  data () {
    return {
      options: MESSAGE_NOTIFY_SETTINGS,
      form: {
        messageNotification: null,
        messageSound: null
      }
    }
  },
  created () {
    let settingsFromState
    if (this.chatNotificationSettings[this.currentChatRoomId]) {
      settingsFromState = this.chatNotificationSettings[this.currentChatRoomId]
    } else {
      const rootState = sbp('state/vuex/state')
      const privacyLevelPrivate = rootState[this.currentChatRoomId]?.attributes?.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE
      settingsFromState = privacyLevelPrivate ? this.chatNotificationSettings.privateDefault : this.chatNotificationSettings.publicDefault
    }
    this.form.messageNotification = settingsFromState.messageNotification
    this.form.messageSound = settingsFromState.messageSound
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    submit () {
      sbp('okTurtles.events/emit', NEW_CHATROOM_NOTIFICATION_SETTINGS, {
        chatRoomID: this.currentChatRoomId,
        settings: this.form
      })
      this.close()
    }
  },
  validations: {
    form: {
      messageNotification: {
        [L('This field is required')]: required
      },
      messageSound: {
        [L('This field is required')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

fieldset:nth-child(2) {
  margin-top: 2rem;
}
</style>
`, "fieldset:nth-child(2) {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=ChatNotificationSettingsModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5779d9cb";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Notifications")')
    template(slot='title')
      i18n Notifications

    form(novalidate @submit.prevent='' data-test='updateNotificationSettings')
      fieldset.is-column
        legend.legend
          i18n Send notifications for:
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.ALL_MESSAGES'
            v-model='$v.form.messageNotification.$model'
          )
          i18n All new messages
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.DIRECT_MESSAGES'
            v-model='$v.form.messageNotification.$model'
          )
          i18n Direct messages and mentions
        label.radio
          input.input(
            type='radio'
            name='messageNotification'
            :value='options.NOTHING'
            v-model='$v.form.messageNotification.$model'
          )
          i18n Nothing

      fieldset.is-column
        legend.legend
          i18n Sounds:
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.ALL_MESSAGES'
            v-model='$v.form.messageSound.$model'
          )
          i18n Play sounds for all new messages
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.DIRECT_MESSAGES'
            v-model='$v.form.messageSound.$model'
          )
          i18n Play sounds for direct messages and mentions
        label.radio
          input.input(
            type='radio'
            name='messageSound'
            :value='options.NOTHING'
            v-model='$v.form.messageSound.$model'
          )
          i18n Mute all sounds from chat notifications

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        i18n.is-success(
          tag='button'
          @click='submit'
          data-test='updateNotificationSettings'
        ) Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import { CHATROOM_PRIVACY_LEVEL, MESSAGE_NOTIFY_SETTINGS } from '../../../../frontend/model/contracts/shared/constants.js'
import { NEW_CHATROOM_NOTIFICATION_SETTINGS } from '../../../../frontend/utils/events.js'

export default ({
  name: 'ChatNotificationSettingsModal',
  mixins: [validationMixin],
  components: {
    ModalTemplate
  },
  computed: {
    ...mapGetters(['chatNotificationSettings', 'currentChatRoomId'])
  },
  data () {
    return {
      options: MESSAGE_NOTIFY_SETTINGS,
      form: {
        messageNotification: null,
        messageSound: null
      }
    }
  },
  created () {
    let settingsFromState
    if (this.chatNotificationSettings[this.currentChatRoomId]) {
      settingsFromState = this.chatNotificationSettings[this.currentChatRoomId]
    } else {
      const rootState = sbp('state/vuex/state')
      const privacyLevelPrivate = rootState[this.currentChatRoomId]?.attributes?.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE
      settingsFromState = privacyLevelPrivate ? this.chatNotificationSettings.privateDefault : this.chatNotificationSettings.publicDefault
    }
    this.form.messageNotification = settingsFromState.messageNotification
    this.form.messageSound = settingsFromState.messageSound
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    submit () {
      sbp('okTurtles.events/emit', NEW_CHATROOM_NOTIFICATION_SETTINGS, {
        chatRoomID: this.currentChatRoomId,
        settings: this.form
      })
      this.close()
    }
  },
  validations: {
    form: {
      messageNotification: {
        [L('This field is required')]: required
      },
      messageSound: {
        [L('This field is required')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

fieldset:nth-child(2) {
  margin-top: 2rem;
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
var ChatNotificationSettingsModal_default = __vue_component__;
export {
  ChatNotificationSettingsModal_default as default
};
//# sourceMappingURL=ChatNotificationSettingsModal-YYYCDKJ3-cached.js.map
