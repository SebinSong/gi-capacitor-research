import {
  hello_default
} from "./chunk-6TVZJD4C-cached.js";
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
import "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/SendThankYouModal.vue
var __vue_script__ = {
  name: "SendThankYouModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    ButtonSubmit: ButtonSubmit_default,
    SvgHello: hello_default
  },
  data() {
    return {
      isConfirmation: false,
      form: {
        memo: null
      }
    };
  },
  methods: {
    close() {
      this.$refs.modal.close(0);
    },
    onEnterPressed() {
      if (this.form.memo) {
        this.submit();
      }
    },
    async submit() {
      try {
        await esm_default("gi.actions/group/sendPaymentThankYou", {
          contractID: this.$store.state.currentGroupId,
          data: {
            toMemberID: this.$route.query.toMemberID,
            memo: this.form.memo
          }
        });
        this.isConfirmation = true;
      } catch (err) {
        console.error("SendThankYouModal caught:", err);
        alert(L("something went wrong! couldn't process your request to send a thank you note."));
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
    {
      ref: "modal",
      staticClass: "has-background",
      attrs: { a11yTitle: _vm.L("Send Thank You Modal") }
    },
    [
      _c(
        "template",
        { slot: "subtitle" },
        [_c("i18n", [_vm._v("Received payments")])],
        1
      ),
      _c(
        "template",
        { slot: "title" },
        [
          !_vm.isConfirmation ? _c("i18n", [_vm._v("Thank you!")]) : _c("i18n", { key: "title_confirm" }, [
            _vm._v("Your Thank You was sent!")
          ])
        ],
        1
      ),
      _c(
        "form",
        {
          staticClass: "c-form",
          on: {
            submit: function($event) {
              $event.preventDefault();
            },
            keyup: function($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                return null;
              }
              return _vm.onEnterPressed($event);
            }
          }
        },
        [
          !_vm.isConfirmation ? _c(
            "label",
            { key: "thanks", staticClass: "field" },
            [
              _c("i18n", { staticClass: "label" }, [
                _vm._v("What message would you like to send?")
              ]),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.memo,
                    expression: "form.memo"
                  }
                ],
                ref: "thanks",
                staticClass: "textarea",
                attrs: { maxlength: "500" },
                domProps: { value: _vm.form.memo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(_vm.form, "memo", $event.target.value);
                  }
                }
              })
            ],
            1
          ) : _c(
            "div",
            { staticClass: "c-confirmation" },
            [_c("svg-hello", { staticClass: "c-svg" })],
            1
          ),
          _c(
            "div",
            {
              staticClass: "buttons c-buttons-container",
              class: { "is-centered": _vm.isConfirmation }
            },
            [
              _vm.isConfirmation ? _c(
                "button",
                {
                  key: "awesome",
                  staticClass: "is-outlined",
                  attrs: { "data-test": "confirmBtn", type: "button" },
                  on: { click: _vm.close }
                },
                [_vm._v(_vm._s(_vm.L("Awesome")))]
              ) : [
                _c(
                  "button",
                  {
                    key: "back",
                    staticClass: "is-outlined",
                    attrs: { type: "button" },
                    on: { click: _vm.close }
                  },
                  [_vm._v(_vm._s(_vm.L("Back")))]
                ),
                _c(
                  "button-submit",
                  {
                    key: "submit",
                    staticClass: "is-success",
                    attrs: {
                      "data-test": "submitBtn",
                      disabled: !_vm.form.memo
                    },
                    on: { click: _vm.submit }
                  },
                  [_vm._v(_vm._s(_vm.L("Send Thanks!")))]
                )
              ]
            ],
            2
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
  inject("data-v-0e73cf39_0", { source: ".c-confirmation[data-v-0e73cf39] {\n  text-align: center;\n  margin-bottom: 2.875rem;\n}\n@media screen and (max-width: 768px) {\n.c-buttons-container[data-v-0e73cf39] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    gap: 1rem;\n}\n}\n\n/*# sourceMappingURL=SendThankYouModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/SendThankYouModal.vue", "SendThankYouModal.vue"], "names": [], "mappings": "AA0GA;EACA,kBAAA;EACA,uBAAA;ACzGA;AAEA;AD0GA;IAEA,8BAAA;IACA,oBAAA;IACA,SAAA;ACzGE;AACF;;AAEA,gDAAgD", "file": "SendThankYouModal.vue", "sourcesContent": [`<template lang="pug">
modal-template(
  class='has-background'
  ref='modal'
  :a11yTitle='L("Send Thank You Modal")'
)
  template(slot='subtitle')
    i18n Received payments
  template(slot='title')
    i18n(v-if='!isConfirmation') Thank you!
    i18n(v-else key='title_confirm') Your Thank You was sent!

  form.c-form(
    @submit.prevent=''
    @keyup.enter='onEnterPressed'
  )
    label.field(v-if='!isConfirmation' key='thanks')
      i18n.label What message would you like to send?

      textarea.textarea(
        v-model='form.memo'
        ref='thanks'
        maxlength='500'
      )

    .c-confirmation(v-else)
      svg-hello.c-svg

    .buttons.c-buttons-container(:class='{ "is-centered": isConfirmation }')
      button.is-outlined(
        data-test='confirmBtn'
        v-if='isConfirmation'
        key='awesome'
        type='button'
        @click='close'
      ) {{ L('Awesome') }}

      template(v-else)
        button.is-outlined(
          key='back'
          type='button'
          @click='close'
        ) {{ L('Back') }}

        button-submit.is-success(
          data-test='submitBtn'
          key='submit'
          :disabled='!form.memo'
          @click='submit'
        ) {{ L('Send Thanks!') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import SvgHello from '../../../../frontend/assets/svgs/hello.svg'

export default ({
  name: 'SendThankYouModal',
  components: {
    ModalTemplate,
    ButtonSubmit,
    SvgHello
  },
  data () {
    return {
      isConfirmation: false,
      form: {
        memo: null
      }
    }
  },
  methods: {
    close () {
      this.$refs.modal.close(0)
    },
    onEnterPressed () {
      if (this.form.memo) {
        this.submit()
      }
    },
    async submit () {
      try {
        await sbp('gi.actions/group/sendPaymentThankYou', {
          contractID: this.$store.state.currentGroupId,
          data: {
            toMemberID: this.$route.query.toMemberID,
            memo: this.form.memo
          }
        })

        this.isConfirmation = true
      } catch (err) {
        console.error('SendThankYouModal caught:', err)
        alert(L("something went wrong! couldn't process your request to send a thank you note."))
      }
    }
  }
})
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-confirmation {
  text-align: center;
  margin-bottom: 2.875rem;
}

.c-buttons-container {
  @include phone {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 1rem;
  }
}
</style>
`, ".c-confirmation {\n  text-align: center;\n  margin-bottom: 2.875rem;\n}\n\n@media screen and (max-width: 768px) {\n  .c-buttons-container {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    gap: 1rem;\n  }\n}\n\n/*# sourceMappingURL=SendThankYouModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-0e73cf39";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
modal-template(
  class='has-background'
  ref='modal'
  :a11yTitle='L("Send Thank You Modal")'
)
  template(slot='subtitle')
    i18n Received payments
  template(slot='title')
    i18n(v-if='!isConfirmation') Thank you!
    i18n(v-else key='title_confirm') Your Thank You was sent!

  form.c-form(
    @submit.prevent=''
    @keyup.enter='onEnterPressed'
  )
    label.field(v-if='!isConfirmation' key='thanks')
      i18n.label What message would you like to send?

      textarea.textarea(
        v-model='form.memo'
        ref='thanks'
        maxlength='500'
      )

    .c-confirmation(v-else)
      svg-hello.c-svg

    .buttons.c-buttons-container(:class='{ "is-centered": isConfirmation }')
      button.is-outlined(
        data-test='confirmBtn'
        v-if='isConfirmation'
        key='awesome'
        type='button'
        @click='close'
      ) {{ L('Awesome') }}

      template(v-else)
        button.is-outlined(
          key='back'
          type='button'
          @click='close'
        ) {{ L('Back') }}

        button-submit.is-success(
          data-test='submitBtn'
          key='submit'
          :disabled='!form.memo'
          @click='submit'
        ) {{ L('Send Thanks!') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import SvgHello from '../../../../frontend/assets/svgs/hello.svg'

export default ({
  name: 'SendThankYouModal',
  components: {
    ModalTemplate,
    ButtonSubmit,
    SvgHello
  },
  data () {
    return {
      isConfirmation: false,
      form: {
        memo: null
      }
    }
  },
  methods: {
    close () {
      this.$refs.modal.close(0)
    },
    onEnterPressed () {
      if (this.form.memo) {
        this.submit()
      }
    },
    async submit () {
      try {
        await sbp('gi.actions/group/sendPaymentThankYou', {
          contractID: this.$store.state.currentGroupId,
          data: {
            toMemberID: this.$route.query.toMemberID,
            memo: this.form.memo
          }
        })

        this.isConfirmation = true
      } catch (err) {
        console.error('SendThankYouModal caught:', err)
        alert(L("something went wrong! couldn't process your request to send a thank you note."))
      }
    }
  }
})
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-confirmation {
  text-align: center;
  margin-bottom: 2.875rem;
}

.c-buttons-container {
  @include phone {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 1rem;
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
var SendThankYouModal_default = __vue_component__;
export {
  SendThankYouModal_default as default
};
//# sourceMappingURL=SendThankYouModal-JGX6MDIT-cached.js.map
