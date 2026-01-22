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

// frontend/views/containers/chatroom/DeleteChannelModal.vue
var import_vuelidate = __toESM(require_lib());
var __vue_script__ = {
  name: "DeleteChannelModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerSimple: BannerSimple_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      form: {
        confirmation: false
      }
    };
  },
  computed: {
    ...mapGetters(["currentChatRoomId", "chatRoomAttributes", "groupGeneralChatRoomId"]),
    ...mapState(["currentGroupId"])
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
        const chatRoomID = this.currentChatRoomId;
        await esm_default("gi.actions/group/deleteChatRoom", {
          contractID: this.currentGroupId,
          data: { chatRoomID }
        });
        this.close();
      } catch (e) {
        console.error("RemoveChannelModal submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  },
  validations: {
    form: {
      confirmation: {
        [L("Please confirm that you want to delete this channel")]: (value) => value === true
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
    { ref: "modal", attrs: { a11yTitle: _vm.L("Delete channel") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Delete channel")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate", "data-test": "deleteGroup" },
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
              attrs: {
                tag: "strong",
                args: { name: _vm.chatRoomAttributes.name }
              }
            },
            [_vm._v("Are you sure you want to delete {name}?")]
          ),
          _c(
            "ul",
            { staticClass: "c-list" },
            [
              _c("i18n", { staticClass: "c-list-item", attrs: { tag: "li" } }, [
                _vm._v("All messages will be deleted;")
              ]),
              _c("i18n", { staticClass: "c-list-item", attrs: { tag: "li" } }, [
                _vm._v("Members will be removed from the channel;")
              ]),
              _c("i18n", { staticClass: "c-list-item", attrs: { tag: "li" } }, [
                _vm._v("This channel will no longer be visible.")
              ])
            ],
            1
          ),
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
          _c(
            "label",
            {
              staticClass: "checkbox",
              attrs: { "data-test": "deleteChannelConfirmation" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.confirmation,
                    expression: "form.confirmation"
                  }
                ],
                staticClass: "input",
                attrs: { type: "checkbox", name: "confirmation" },
                domProps: {
                  checked: Array.isArray(_vm.form.confirmation) ? _vm._i(_vm.form.confirmation, null) > -1 : _vm.form.confirmation
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.confirmation, $$el = $event.target, $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null, $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && _vm.$set(_vm.form, "confirmation", $$a.concat([$$v]));
                      } else {
                        $$i > -1 && _vm.$set(
                          _vm.form,
                          "confirmation",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        );
                      }
                    } else {
                      _vm.$set(_vm.form, "confirmation", $$c);
                    }
                  }
                }
              }),
              _c(
                "i18n",
                {
                  attrs: {
                    args: Object.assign(
                      {},
                      { name: _vm.chatRoomAttributes.name },
                      _vm.LTags("strong")
                    )
                  }
                },
                [
                  _vm._v(
                    "Yes, I want to {strong_}delete {name} permanently{_strong}."
                  )
                ]
              )
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
                  attrs: { tag: "button" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-danger",
                  attrs: {
                    disabled: _vm.$v.form.$invalid,
                    "data-test": "deleteChannelSubmit"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.L("Delete channel")))]
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
  inject("data-v-b5edd596_0", { source: ".c-banner[data-v-b5edd596] {\n  margin: 1.5rem 0 1rem 0;\n}\n.c-banner[data-v-b5edd596]  strong {\n  color: var(--danger_0);\n}\n.c-list[data-v-b5edd596] {\n  padding-top: 0.5rem;\n}\n.c-list .c-list-item[data-v-b5edd596] {\n  list-style: initial;\n  margin: 0.5rem 1rem;\n}\n\n/*# sourceMappingURL=DeleteChannelModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/DeleteChannelModal.vue", "DeleteChannelModal.vue"], "names": [], "mappings": "AAoGA;EACA,uBAAA;ACnGA;ADqGA;EACA,sBAAA;ACnGA;ADuGA;EACA,mBAAA;ACpGA;ADsGA;EACA,mBAAA;EACA,mBAAA;ACpGA;;AAEA,iDAAiD", "file": "DeleteChannelModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Delete channel")')
    template(slot='title')
      i18n Delete channel

    form(novalidate @submit.prevent='' data-test='deleteGroup')
      i18n(
        tag='strong'
        :args='{ name: chatRoomAttributes.name }'
      ) Are you sure you want to delete {name}?

      ul.c-list
        i18n.c-list-item(tag='li') All messages will be deleted;
        i18n.c-list-item(tag='li') Members will be removed from the channel;
        i18n.c-list-item(tag='li') This channel will no longer be visible.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      label.checkbox(data-test='deleteChannelConfirmation')
        input.input(type='checkbox' name='confirmation' v-model='form.confirmation')
        i18n(:args='{ name: chatRoomAttributes.name, ...LTags("strong") }') Yes, I want to {strong_}delete {name} permanently{_strong}.

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='deleteChannelSubmit'
          ) {{ L('Delete channel') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapGetters, mapState } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'DeleteChannelModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        confirmation: false
      }
    }
  },
  computed: {
    ...mapGetters(['currentChatRoomId', 'chatRoomAttributes', 'groupGeneralChatRoomId']),
    ...mapState(['currentGroupId'])
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }

      try {
        const chatRoomID = this.currentChatRoomId
        await sbp('gi.actions/group/deleteChatRoom', {
          contractID: this.currentGroupId,
          data: { chatRoomID }
        })
        this.close()
      } catch (e) {
        console.error('RemoveChannelModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      confirmation: {
        [L('Please confirm that you want to delete this channel')]: value => value === true
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0 1rem 0;

  ::v-deep strong {
    color: $danger_0;
  }
}

.c-list {
  padding-top: 0.5rem;

  .c-list-item {
    list-style: initial;
    margin: 0.5rem 1rem;
  }
}
</style>
`, ".c-banner {\n  margin: 1.5rem 0 1rem 0;\n}\n.c-banner ::v-deep strong {\n  color: var(--danger_0);\n}\n\n.c-list {\n  padding-top: 0.5rem;\n}\n.c-list .c-list-item {\n  list-style: initial;\n  margin: 0.5rem 1rem;\n}\n\n/*# sourceMappingURL=DeleteChannelModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-b5edd596";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Delete channel")')
    template(slot='title')
      i18n Delete channel

    form(novalidate @submit.prevent='' data-test='deleteGroup')
      i18n(
        tag='strong'
        :args='{ name: chatRoomAttributes.name }'
      ) Are you sure you want to delete {name}?

      ul.c-list
        i18n.c-list-item(tag='li') All messages will be deleted;
        i18n.c-list-item(tag='li') Members will be removed from the channel;
        i18n.c-list-item(tag='li') This channel will no longer be visible.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      label.checkbox(data-test='deleteChannelConfirmation')
        input.input(type='checkbox' name='confirmation' v-model='form.confirmation')
        i18n(:args='{ name: chatRoomAttributes.name, ...LTags("strong") }') Yes, I want to {strong_}delete {name} permanently{_strong}.

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='deleteChannelSubmit'
          ) {{ L('Delete channel') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { mapGetters, mapState } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'DeleteChannelModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        confirmation: false
      }
    }
  },
  computed: {
    ...mapGetters(['currentChatRoomId', 'chatRoomAttributes', 'groupGeneralChatRoomId']),
    ...mapState(['currentGroupId'])
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }

      try {
        const chatRoomID = this.currentChatRoomId
        await sbp('gi.actions/group/deleteChatRoom', {
          contractID: this.currentGroupId,
          data: { chatRoomID }
        })
        this.close()
      } catch (e) {
        console.error('RemoveChannelModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      confirmation: {
        [L('Please confirm that you want to delete this channel')]: value => value === true
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0 1rem 0;

  ::v-deep strong {
    color: $danger_0;
  }
}

.c-list {
  padding-top: 0.5rem;

  .c-list-item {
    list-style: initial;
    margin: 0.5rem 1rem;
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
var DeleteChannelModal_default = __vue_component__;
export {
  DeleteChannelModal_default as default
};
//# sourceMappingURL=DeleteChannelModal-5SBSEIHI-cached.js.map
