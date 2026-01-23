import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
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
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/LeaveChannelModal.vue
var __vue_script__ = {
  name: "LeaveChannelModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    ButtonSubmit: ButtonSubmit_default
  },
  computed: {
    ...mapGetters([
      "currentChatRoomId",
      "currentChatRoomState",
      "ourGroupDirectMessages",
      "isGroupDirectMessage"
    ]),
    ...mapState(["loggedIn", "currentGroupId"]),
    channelName() {
      if (!this.currentChatRoomState.attributes) {
        return "";
      } else if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        return this.ourGroupDirectMessages[this.currentChatRoomId].title;
      } else {
        return this.currentChatRoomState.attributes.name;
      }
    }
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      try {
        await esm_default("gi.actions/group/leaveChatRoom", {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId
          }
        });
        this.close();
      } catch (e) {
        console.error("LeaveChannelModal submit() error:", e);
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Leave Channel") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Leave Channel")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate", "data-test": "leaveChannel" },
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c(
            "i18n",
            {
              attrs: { tag: "strong", args: { channelName: _vm.channelName } }
            },
            [_vm._v("Are you sure you want to leave {channelName}?")]
          ),
          _c("i18n", { attrs: { tag: "p" } }, [
            _vm._v(
              "You will no longer be able to send or see messages in this channel."
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
                "button-submit",
                {
                  staticClass: "is-danger",
                  attrs: { "data-test": "leaveChannelSubmit" },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.L("Leave Channel")))]
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
  inject("data-v-34687b5a_0", { source: ".c-banner[data-v-34687b5a] {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=LeaveChannelModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/LeaveChannelModal.vue", "LeaveChannelModal.vue"], "names": [], "mappings": "AA6EA;EACA,gBAAA;AC5EA;;AAEA,gDAAgD", "file": "LeaveChannelModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Leave Channel")')
    template(slot='title')
      i18n Leave Channel

    form(novalidate @submit.prevent='' data-test='leaveChannel')
      i18n(
        tag='strong'
        :args='{ channelName: channelName }'
      ) Are you sure you want to leave {channelName}?

      i18n(
        tag='p'
      ) You will no longer be able to send or see messages in this channel.

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          data-test='leaveChannelSubmit'
        ) {{ L('Leave Channel') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'LeaveChannelModal',
  components: {
    ModalTemplate,
    ButtonSubmit
  },
  computed: {
    ...mapGetters([
      'currentChatRoomId',
      'currentChatRoomState',
      'ourGroupDirectMessages',
      'isGroupDirectMessage'
    ]),
    ...mapState(['loggedIn', 'currentGroupId']),
    channelName () {
      if (!this.currentChatRoomState.attributes) {
        return ''
      } else if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        return this.ourGroupDirectMessages[this.currentChatRoomId].title
      } else {
        return this.currentChatRoomState.attributes.name
      }
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        await sbp('gi.actions/group/leaveChatRoom', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId
          }
        })
        this.close()
      } catch (e) {
        console.error('LeaveChannelModal submit() error:', e)
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
`, ".c-banner {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=LeaveChannelModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-34687b5a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Leave Channel")')
    template(slot='title')
      i18n Leave Channel

    form(novalidate @submit.prevent='' data-test='leaveChannel')
      i18n(
        tag='strong'
        :args='{ channelName: channelName }'
      ) Are you sure you want to leave {channelName}?

      i18n(
        tag='p'
      ) You will no longer be able to send or see messages in this channel.

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          data-test='leaveChannelSubmit'
        ) {{ L('Leave Channel') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'LeaveChannelModal',
  components: {
    ModalTemplate,
    ButtonSubmit
  },
  computed: {
    ...mapGetters([
      'currentChatRoomId',
      'currentChatRoomState',
      'ourGroupDirectMessages',
      'isGroupDirectMessage'
    ]),
    ...mapState(['loggedIn', 'currentGroupId']),
    channelName () {
      if (!this.currentChatRoomState.attributes) {
        return ''
      } else if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        return this.ourGroupDirectMessages[this.currentChatRoomId].title
      } else {
        return this.currentChatRoomState.attributes.name
      }
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      try {
        await sbp('gi.actions/group/leaveChatRoom', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId
          }
        })
        this.close()
      } catch (e) {
        console.error('LeaveChannelModal submit() error:', e)
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
var LeaveChannelModal_default = __vue_component__;
export {
  LeaveChannelModal_default as default
};
//# sourceMappingURL=LeaveChannelModal-TWI5LBH3-cached.js.map
