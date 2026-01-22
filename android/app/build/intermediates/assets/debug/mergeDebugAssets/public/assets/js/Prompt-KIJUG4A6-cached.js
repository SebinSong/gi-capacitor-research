import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  MODAL_RESPONSE
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/components/modal/Prompt.vue
var __vue_script__ = {
  name: "Prompt",
  components: {
    ModalTemplate: ModalTemplate_default,
    ButtonSubmit: ButtonSubmit_default,
    L
  },
  props: {
    primaryButtonStyle: {
      type: String,
      default: "outlined"
    },
    isContentCentered: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if (Object.keys(this.$attrs).length === 0) this.closeModal();
  },
  methods: {
    closeModal() {
      esm_default("okTurtles.events/emit", MODAL_RESPONSE, false);
      this.$refs.modal.unload("Prompt");
    },
    submit() {
      esm_default("okTurtles.events/emit", MODAL_RESPONSE, true);
      this.$refs.modal.unload("Prompt");
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
      staticClass: "is-prompt",
      attrs: { a11yTitle: _vm.$attrs.heading, modalForceAction: true },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._v(_vm._s(_vm.$attrs.heading))];
            },
            proxy: true
          },
          _vm.$attrs.subtitle ? {
            key: "subtitle",
            fn: function() {
              return [_vm._v(_vm._s(_vm.$attrs.subtitle))];
            },
            proxy: true
          } : null
        ],
        null,
        true
      )
    },
    [
      _c("div", { staticClass: "c-container" }, [
        _c(
          "form",
          {
            attrs: { novalidate: "true" },
            on: {
              submit: function($event) {
                $event.preventDefault();
              }
            }
          },
          [
            _c(
              "fieldset",
              {
                staticClass: "field c-prompt-content",
                class: { "is-text-center": _vm.isContentCentered }
              },
              [
                _c("legend", {
                  directives: [
                    {
                      name: "safe-html",
                      rawName: "v-safe-html:a",
                      value: _vm.$attrs.question,
                      expression: "$attrs.question",
                      arg: "a"
                    }
                  ],
                  staticClass: "label"
                })
              ]
            ),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _vm.$attrs.secondaryButton ? _c(
                  "button",
                  {
                    staticClass: "is-outlined",
                    attrs: { type: "button" },
                    on: { click: _vm.closeModal }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.$attrs.secondaryButton || _vm.L("No"))
                    )
                  ]
                ) : _vm._e(),
                _vm.$attrs.primaryButton ? _c(
                  "button-submit",
                  {
                    class: "is-" + _vm.primaryButtonStyle,
                    attrs: { "data-test": "submitPrompt" },
                    on: { click: _vm.submit }
                  },
                  [_vm._v(_vm._s(_vm.$attrs.primaryButton || _vm.L("Yes")))]
                ) : _vm._e()
              ],
              1
            )
          ]
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-1d782c7c_0", { source: ".c-container[data-v-1d782c7c] {\n  width: 100%;\n}\n.c-container .buttons[data-v-1d782c7c] {\n  justify-content: center;\n}\n.c-container .buttons button[data-v-1d782c7c]:not(:last-child) {\n  margin-right: 1.375rem;\n}\n.c-container .c-prompt-content[data-v-1d782c7c] {\n  position: relative;\n}\n.c-container .c-prompt-content.is-text-center[data-v-1d782c7c] {\n  text-align: center;\n}\n.c-container .c-prompt-content legend.label[data-v-1d782c7c] {\n  margin: 0 auto 0.5rem auto;\n}\n[data-v-1d782c7c] .c-modal-header {\n  max-width: 37rem;\n  align-self: center;\n  text-align: center;\n}\n[data-v-1d782c7c] .c-modal-header h1 {\n  padding: 1.2rem 0;\n}\n\n/*# sourceMappingURL=Prompt.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/modal/Prompt.vue", "Prompt.vue"], "names": [], "mappings": "AAuEA;EACA,WAAA;ACtEA;ADwEA;EACA,uBAAA;ACtEA;ADwEA;EACA,sBAAA;ACtEA;AD0EA;EACA,kBAAA;ACxEA;AD0EA;EACA,kBAAA;ACxEA;AD2EA;EACA,0BAAA;ACzEA;AD8EA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AC3EA;AD6EA;EACA,iBAAA;AC3EA;;AAEA,qCAAqC", "file": "Prompt.vue", "sourcesContent": [`<template lang='pug'>
modal-template(ref='modal' class='is-prompt' :a11yTitle='$attrs.heading' :modalForceAction='true')
  template(#title='') {{ $attrs.heading }}
  template(#subtitle='' v-if='$attrs.subtitle') {{ $attrs.subtitle }}

  .c-container
    form(
      @submit.prevent=''
      novalidate='true'
    )
      fieldset.field.c-prompt-content(:class='{ "is-text-center": isContentCentered }')
        legend.label(v-safe-html:a='$attrs.question')

      .buttons
        button.is-outlined(
          v-if='$attrs.secondaryButton'
          type='button'
          @click='closeModal'
        ) {{ $attrs.secondaryButton || L('No')}}

        button-submit(
          v-if='$attrs.primaryButton'
          :class='"is-" + primaryButtonStyle'
          @click='submit'
          data-test='submitPrompt'
        ) {{ $attrs.primaryButton || L('Yes')}}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { MODAL_RESPONSE } from '../../../../frontend/utils/events.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'Prompt',
  components: {
    ModalTemplate,
    ButtonSubmit,
    L
  },
  props: {
    primaryButtonStyle: {
      type: String,
      default: 'outlined'
    },
    isContentCentered: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if (Object.keys(this.$attrs).length === 0) this.closeModal()
  },
  methods: {
    closeModal () {
      sbp('okTurtles.events/emit', MODAL_RESPONSE, false)
      this.$refs.modal.unload('Prompt')
    },
    submit () {
      sbp('okTurtles.events/emit', MODAL_RESPONSE, true)
      this.$refs.modal.unload('Prompt')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  width: 100%;

  .buttons {
    justify-content: center;

    button:not(:last-child) {
      margin-right: 1.375rem;
    }
  }

  .c-prompt-content {
    position: relative;

    &.is-text-center {
      text-align: center;
    }

    legend.label {
      margin: 0 auto 0.5rem auto;
    }
  }
}

::v-deep .c-modal-header {
  max-width: 37rem;
  align-self: center;
  text-align: center;

  h1 {
    padding: 1.2rem 0;
  }
}
</style>
`, ".c-container {\n  width: 100%;\n}\n.c-container .buttons {\n  justify-content: center;\n}\n.c-container .buttons button:not(:last-child) {\n  margin-right: 1.375rem;\n}\n.c-container .c-prompt-content {\n  position: relative;\n}\n.c-container .c-prompt-content.is-text-center {\n  text-align: center;\n}\n.c-container .c-prompt-content legend.label {\n  margin: 0 auto 0.5rem auto;\n}\n\n::v-deep .c-modal-header {\n  max-width: 37rem;\n  align-self: center;\n  text-align: center;\n}\n::v-deep .c-modal-header h1 {\n  padding: 1.2rem 0;\n}\n\n/*# sourceMappingURL=Prompt.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-1d782c7c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(ref='modal' class='is-prompt' :a11yTitle='$attrs.heading' :modalForceAction='true')
  template(#title='') {{ $attrs.heading }}
  template(#subtitle='' v-if='$attrs.subtitle') {{ $attrs.subtitle }}

  .c-container
    form(
      @submit.prevent=''
      novalidate='true'
    )
      fieldset.field.c-prompt-content(:class='{ "is-text-center": isContentCentered }')
        legend.label(v-safe-html:a='$attrs.question')

      .buttons
        button.is-outlined(
          v-if='$attrs.secondaryButton'
          type='button'
          @click='closeModal'
        ) {{ $attrs.secondaryButton || L('No')}}

        button-submit(
          v-if='$attrs.primaryButton'
          :class='"is-" + primaryButtonStyle'
          @click='submit'
          data-test='submitPrompt'
        ) {{ $attrs.primaryButton || L('Yes')}}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { MODAL_RESPONSE } from '../../../../frontend/utils/events.js'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'Prompt',
  components: {
    ModalTemplate,
    ButtonSubmit,
    L
  },
  props: {
    primaryButtonStyle: {
      type: String,
      default: 'outlined'
    },
    isContentCentered: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if (Object.keys(this.$attrs).length === 0) this.closeModal()
  },
  methods: {
    closeModal () {
      sbp('okTurtles.events/emit', MODAL_RESPONSE, false)
      this.$refs.modal.unload('Prompt')
    },
    submit () {
      sbp('okTurtles.events/emit', MODAL_RESPONSE, true)
      this.$refs.modal.unload('Prompt')
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  width: 100%;

  .buttons {
    justify-content: center;

    button:not(:last-child) {
      margin-right: 1.375rem;
    }
  }

  .c-prompt-content {
    position: relative;

    &.is-text-center {
      text-align: center;
    }

    legend.label {
      margin: 0 auto 0.5rem auto;
    }
  }
}

::v-deep .c-modal-header {
  max-width: 37rem;
  align-self: center;
  text-align: center;

  h1 {
    padding: 1.2rem 0;
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
var Prompt_default = __vue_component__;
export {
  Prompt_default as default
};
//# sourceMappingURL=Prompt-KIJUG4A6-cached.js.map
