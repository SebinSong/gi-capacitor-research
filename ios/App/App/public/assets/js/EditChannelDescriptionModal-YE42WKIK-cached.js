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
  BannerScoped_default,
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
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
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/EditChannelDescriptionModal.vue
var import_vuelidate = __toESM(require_lib());
var __vue_script__ = {
  name: "EditChannelDescriptionModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerSimple: BannerSimple_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    CharLengthIndicator: CharLengthIndicator_default
  },
  data() {
    return {
      form: {
        description: null
      }
    };
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["currentChatRoomId", "groupSettings", "currentChatRoomState"]),
    maxDescriptionCharacters() {
      return this.currentChatRoomState.settings.maxDescriptionLength;
    },
    code() {
      return L("DELETE {GROUP_NAME}", { GROUP_NAME: this.groupSettings.groupName.toUpperCase() });
    }
  },
  created() {
    this.form.description = this.currentChatRoomState.attributes.description;
  },
  mounted() {
    this.$refs.description.focus();
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      try {
        await esm_default("gi.actions/group/changeChatRoomDescription", {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            description: this.form.description
          }
        });
      } catch (e) {
        console.error("ChangeChannelDescriptionModal submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
      this.close();
    }
  },
  validations: {
    form: {
      description: {
        [L("Reached character limit.")]: function(value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters;
        }
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Channel description") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Channel description")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate" },
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
                { staticClass: "c-label-group" },
                [
                  _c("i18n", { staticClass: "label" }, [_vm._v("Description")]),
                  _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.form.description.length || 0,
                      max: _vm.maxDescriptionCharacters,
                      error: _vm.$v.form.description.$error
                    }
                  })
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
                ref: "description",
                staticClass: "textarea",
                class: { error: _vm.$v.form.description.$error },
                attrs: {
                  name: "description",
                  placeholder: _vm.L("Description of the channel"),
                  maxlength: _vm.maxDescriptionCharacters,
                  "data-test": "updateChannelDescription"
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
          _c("banner-scoped", { ref: "formMsg" }),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "button is-outlined",
                  on: {
                    click: function($event) {
                      $event.preventDefault();
                      return _vm.close($event);
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-success",
                  attrs: {
                    type: "button",
                    disabled: _vm.$v.form.$invalid,
                    "data-test": "updateChannelDescriptionSubmit"
                  },
                  on: { click: _vm.submit }
                },
                [_c("i18n", [_vm._v("Save")])],
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
  inject("data-v-29ee373a_0", { source: ".c-banner[data-v-29ee373a] {\n  margin: 1.5rem 0;\n}\n.c-label-group[data-v-29ee373a] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.is-danger[data-v-29ee373a] {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=EditChannelDescriptionModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/EditChannelDescriptionModal.vue", "EditChannelDescriptionModal.vue"], "names": [], "mappings": "AA0HA;EACA,gBAAA;ACzHA;AD4HA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;ACzHA;AD4HA;EACA,sBAAA;ACzHA;;AAEA,0DAA0D", "file": "EditChannelDescriptionModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Channel description")')
    template(slot='title')
      i18n Channel description

    form(novalidate @submit.prevent='')
      label.field
        .c-label-group
          i18n.label Description
          char-length-indicator(
            :current-length='form.description.length || 0'
            :max='maxDescriptionCharacters'
            :error='$v.form.description.$error'
          )

        textarea.textarea(
          ref='description'
          name='description'
          :placeholder='L("Description of the channel")'
          :maxlength='maxDescriptionCharacters'
          :class='{ error: $v.form.description.$error }'
          v-model='form.description'
          @input='debounceField("description")'
          @blur='updateField("description")'
          v-error:description=''
          data-test='updateChannelDescription'
        )
        i18n.helper This is optional.

      banner-scoped(ref='formMsg')

      .buttons
        i18n.button.is-outlined(@click.prevent='close') Cancel
        button-submit.is-success(
          type='button'
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='updateChannelDescriptionSubmit'
        )
          i18n Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'EditChannelDescriptionModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  data () {
    return {
      form: {
        description: null
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentChatRoomId', 'groupSettings', 'currentChatRoomState']),
    maxDescriptionCharacters () {
      return this.currentChatRoomState.settings.maxDescriptionLength
    },
    code () {
      return L('DELETE {GROUP_NAME}', { GROUP_NAME: this.groupSettings.groupName.toUpperCase() })
    }
  },
  created () {
    this.form.description = this.currentChatRoomState.attributes.description
  },
  mounted () {
    this.$refs.description.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        await sbp('gi.actions/group/changeChatRoomDescription', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            description: this.form.description
          }
        })
      } catch (e) {
        console.error('ChangeChannelDescriptionModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
      this.close()
    }
  },
  validations: {
    form: {
      description: {
        [L('Reached character limit.')]: function (value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters
        }
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

.c-label-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.is-danger {
  color: $danger_0;
}
</style>
`, ".c-banner {\n  margin: 1.5rem 0;\n}\n\n.c-label-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.is-danger {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=EditChannelDescriptionModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-29ee373a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Channel description")')
    template(slot='title')
      i18n Channel description

    form(novalidate @submit.prevent='')
      label.field
        .c-label-group
          i18n.label Description
          char-length-indicator(
            :current-length='form.description.length || 0'
            :max='maxDescriptionCharacters'
            :error='$v.form.description.$error'
          )

        textarea.textarea(
          ref='description'
          name='description'
          :placeholder='L("Description of the channel")'
          :maxlength='maxDescriptionCharacters'
          :class='{ error: $v.form.description.$error }'
          v-model='form.description'
          @input='debounceField("description")'
          @blur='updateField("description")'
          v-error:description=''
          data-test='updateChannelDescription'
        )
        i18n.helper This is optional.

      banner-scoped(ref='formMsg')

      .buttons
        i18n.button.is-outlined(@click.prevent='close') Cancel
        button-submit.is-success(
          type='button'
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='updateChannelDescriptionSubmit'
        )
          i18n Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'EditChannelDescriptionModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit,
    CharLengthIndicator
  },
  data () {
    return {
      form: {
        description: null
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentChatRoomId', 'groupSettings', 'currentChatRoomState']),
    maxDescriptionCharacters () {
      return this.currentChatRoomState.settings.maxDescriptionLength
    },
    code () {
      return L('DELETE {GROUP_NAME}', { GROUP_NAME: this.groupSettings.groupName.toUpperCase() })
    }
  },
  created () {
    this.form.description = this.currentChatRoomState.attributes.description
  },
  mounted () {
    this.$refs.description.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        await sbp('gi.actions/group/changeChatRoomDescription', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            description: this.form.description
          }
        })
      } catch (e) {
        console.error('ChangeChannelDescriptionModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
      this.close()
    }
  },
  validations: {
    form: {
      description: {
        [L('Reached character limit.')]: function (value) {
          return !value || Number(value.length) <= this.maxDescriptionCharacters
        }
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

.c-label-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.is-danger {
  color: $danger_0;
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
var EditChannelDescriptionModal_default = __vue_component__;
export {
  EditChannelDescriptionModal_default as default
};
//# sourceMappingURL=EditChannelDescriptionModal-YE42WKIK-cached.js.map
