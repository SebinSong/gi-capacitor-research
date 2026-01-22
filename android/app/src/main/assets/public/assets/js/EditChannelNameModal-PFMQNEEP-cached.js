import {
  validationsDebouncedMixins_default
} from "./chunk-LO4V4OP4-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
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
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/EditChannelNameModal.vue
var import_vuelidate = __toESM(require_lib());
var import_required = __toESM(require_required());
var __vue_script__ = {
  name: "EditChannelNameModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerScoped: BannerScoped_default
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["currentChatRoomId", "currentChatRoomState", "groupGeneralChatRoomId", "groupChatRooms"]),
    maxNameCharacters() {
      return this.currentChatRoomState.settings.maxNameLength;
    }
  },
  data() {
    return {
      channelId: this.$route.query.channel,
      submitting: false,
      form: {
        name: null,
        existingNames: []
      }
    };
  },
  created() {
    this.form.name = this.currentChatRoomState.attributes.name;
    this.form.existingNames = Object.keys(this.groupChatRooms).map((cId) => this.groupChatRooms[cId].name);
  },
  mounted() {
    if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
      this.close();
    }
    this.$refs.name.focus();
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      try {
        if (this.submitting) return;
        this.submitting = true;
        if (this.currentChatRoomState.attributes.name === this.form.name) {
          console.log("TODO: Channel name is not changed");
        } else if (this.currentChatRoomId === this.groupGeneralChatRoomId) {
          console.log('TODO: "General" chatroom can not be renamed');
        } else {
          await esm_default("gi.actions/group/renameChatRoom", {
            contractID: this.currentGroupId,
            data: {
              chatRoomID: this.currentChatRoomId,
              name: this.form.name
            }
          });
        }
        this.close();
      } catch (e) {
        console.error("RenameChannelModal submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      } finally {
        this.submitting = false;
      }
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Rename channel") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Rename channel")])],
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
              _c("i18n", { staticClass: "label c-label-name" }, [
                _vm._v("Name")
              ]),
              _vm.form.name ? _c(
                "div",
                {
                  staticClass: "c-max-count",
                  class: {
                    "is-danger": _vm.form.name.length >= _vm.maxNameCharacters
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.maxNameCharacters - _vm.form.name.length)
                  )
                ]
              ) : _vm._e(),
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
                  maxlength: _vm.maxNameCharacters,
                  "data-test": "updateChannelName"
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
                { staticClass: "button is-outlined", on: { click: _vm.close } },
                [_vm._v("Cancel")]
              ),
              _c(
                "i18n",
                {
                  staticClass: "is-success",
                  attrs: {
                    tag: "button",
                    disabled: _vm.submitting || _vm.$v.form.$invalid,
                    "data-test": "updateChannelNameSubmit"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v("Save")]
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
  inject("data-v-0ff57b92_0", { source: ".c-label-name[data-v-0ff57b92] {\n  float: left;\n}\n.c-max-count[data-v-0ff57b92] {\n  float: right;\n  color: var(--text_1);\n}\n.c-max-count.is-danger[data-v-0ff57b92] {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=EditChannelNameModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/EditChannelNameModal.vue", "EditChannelNameModal.vue"], "names": [], "mappings": "AA0IA;EACA,WAAA;ACzIA;AD4IA;EACA,YAAA;EACA,oBAAA;ACzIA;AD2IA;EACA,sBAAA;ACzIA;;AAEA,mDAAmD", "file": "EditChannelNameModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Rename channel")')
    template(slot='title')
      i18n Rename channel

    form(novalidate @submit.prevent='')
      label.field
        i18n.label.c-label-name Name
        .c-max-count(
          v-if='form.name'
          :class='{"is-danger": form.name.length >= maxNameCharacters}'
        ) {{maxNameCharacters - form.name.length}}

        input.input(
          ref='name'
          type='text'
          name='name'
          :maxlength='maxNameCharacters'
          :class='{ error: $v.form.name.$error }'
          v-model='form.name'
          @input='debounceField("name")'
          @blur='updateField("name")'
          v-error:name=''
          data-test='updateChannelName'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.button.is-outlined(@click='close') Cancel
        i18n.is-success(
          tag='button'
          @click='submit'
          :disabled='submitting || $v.form.$invalid'
          data-test='updateChannelNameSubmit'
        ) Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapState, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import required from 'vuelidate/lib/validators/required'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'EditChannelNameModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerScoped
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentChatRoomId', 'currentChatRoomState', 'groupGeneralChatRoomId', 'groupChatRooms']),
    maxNameCharacters () {
      return this.currentChatRoomState.settings.maxNameLength
    }
  },
  data () {
    return {
      channelId: this.$route.query.channel,
      submitting: false,
      form: {
        name: null,
        existingNames: []
      }
    }
  },
  created () {
    this.form.name = this.currentChatRoomState.attributes.name
    this.form.existingNames = Object.keys(this.groupChatRooms).map(cId => this.groupChatRooms[cId].name)
  },
  mounted () {
    if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
      this.close()
    }
    this.$refs.name.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        if (this.submitting) return
        this.submitting = true
        if (this.currentChatRoomState.attributes.name === this.form.name) {
          // TODO: No need to update chatroom name. Display message box or toast or sth else
          console.log('TODO: Channel name is not changed')
        } else if (this.currentChatRoomId === this.groupGeneralChatRoomId) {
          // TODO: display warning message '"General" chatroom can not be renamed'
          console.log('TODO: "General" chatroom can not be renamed')
        } else {
          await sbp('gi.actions/group/renameChatRoom', {
            contractID: this.currentGroupId,
            data: {
              chatRoomID: this.currentChatRoomId,
              name: this.form.name
            }
          })
        }
        this.close()
      } catch (e) {
        console.error('RenameChannelModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      } finally {
        this.submitting = false
      }
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
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-label-name {
  float: left;
}

.c-max-count {
  float: right;
  color: $text_1;

  &.is-danger {
    color: $danger_0;
  }
}
</style>
`, ".c-label-name {\n  float: left;\n}\n\n.c-max-count {\n  float: right;\n  color: var(--text_1);\n}\n.c-max-count.is-danger {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=EditChannelNameModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-0ff57b92";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Rename channel")')
    template(slot='title')
      i18n Rename channel

    form(novalidate @submit.prevent='')
      label.field
        i18n.label.c-label-name Name
        .c-max-count(
          v-if='form.name'
          :class='{"is-danger": form.name.length >= maxNameCharacters}'
        ) {{maxNameCharacters - form.name.length}}

        input.input(
          ref='name'
          type='text'
          name='name'
          :maxlength='maxNameCharacters'
          :class='{ error: $v.form.name.$error }'
          v-model='form.name'
          @input='debounceField("name")'
          @blur='updateField("name")'
          v-error:name=''
          data-test='updateChannelName'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.button.is-outlined(@click='close') Cancel
        i18n.is-success(
          tag='button'
          @click='submit'
          :disabled='submitting || $v.form.$invalid'
          data-test='updateChannelNameSubmit'
        ) Save
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { mapState, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import required from 'vuelidate/lib/validators/required'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'EditChannelNameModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerScoped
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentChatRoomId', 'currentChatRoomState', 'groupGeneralChatRoomId', 'groupChatRooms']),
    maxNameCharacters () {
      return this.currentChatRoomState.settings.maxNameLength
    }
  },
  data () {
    return {
      channelId: this.$route.query.channel,
      submitting: false,
      form: {
        name: null,
        existingNames: []
      }
    }
  },
  created () {
    this.form.name = this.currentChatRoomState.attributes.name
    this.form.existingNames = Object.keys(this.groupChatRooms).map(cId => this.groupChatRooms[cId].name)
  },
  mounted () {
    if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
      this.close()
    }
    this.$refs.name.focus()
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        if (this.submitting) return
        this.submitting = true
        if (this.currentChatRoomState.attributes.name === this.form.name) {
          // TODO: No need to update chatroom name. Display message box or toast or sth else
          console.log('TODO: Channel name is not changed')
        } else if (this.currentChatRoomId === this.groupGeneralChatRoomId) {
          // TODO: display warning message '"General" chatroom can not be renamed'
          console.log('TODO: "General" chatroom can not be renamed')
        } else {
          await sbp('gi.actions/group/renameChatRoom', {
            contractID: this.currentGroupId,
            data: {
              chatRoomID: this.currentChatRoomId,
              name: this.form.name
            }
          })
        }
        this.close()
      } catch (e) {
        console.error('RenameChannelModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      } finally {
        this.submitting = false
      }
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
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-label-name {
  float: left;
}

.c-max-count {
  float: right;
  color: $text_1;

  &.is-danger {
    color: $danger_0;
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
var EditChannelNameModal_default = __vue_component__;
export {
  EditChannelNameModal_default as default
};
//# sourceMappingURL=EditChannelNameModal-PFMQNEEP-cached.js.map
