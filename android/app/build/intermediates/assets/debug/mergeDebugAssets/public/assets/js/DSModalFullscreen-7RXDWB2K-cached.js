import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/design-system/DSModalFullscreen.vue
var __vue_script__ = {
  name: "ModalDSNestedExample",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default
  },
  data() {
    return {
      background: false
    };
  },
  methods: {
    toggleBackground() {
      this.background = !this.background;
    },
    openModal(mode) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, mode);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    {
      class: { "has-background": _vm.background },
      attrs: { a11yTitle: _vm.L("Modal title") }
    },
    [
      _c("div", { staticClass: "wrapper-container" }, [
        _c("div", { staticClass: "example-header" }, [
          _c("h2", { staticClass: "is-title-2" }, [
            _vm._v("Modal base example")
          ])
        ]),
        _c("div", { staticClass: "example-container" }, [
          _c("form", [
            _c(
              "div",
              { staticClass: "field" },
              [
                _c("i18n", { staticClass: "label", attrs: { tag: "label" } }, [
                  _vm._v("Full name")
                ]),
                _c("input", {
                  staticClass: "input",
                  attrs: { value: "Felix Kubin" }
                })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "field" },
              [
                _c("i18n", { staticClass: "label", attrs: { tag: "label" } }, [
                  _vm._v("Introduce the potential new member(s) to your group")
                ]),
                _c(
                  "textarea",
                  { staticClass: "textarea", attrs: { rows: "5" } },
                  [
                    _vm._v(
                      "Felix and Brian are two very important figures in the electronic music scene. They have greatly contributed to the development of genres like ambient music and are now ready to contribute to this group. They are Dreamers like us!'"
                    )
                  ]
                )
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
                    attrs: { tag: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault();
                        return _vm.toggleBackground($event);
                      }
                    }
                  },
                  [_vm._v("Toggle background")]
                ),
                _c(
                  "i18n",
                  {
                    attrs: { tag: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault();
                        return _vm.openModal("DSModalNested");
                      }
                    }
                  },
                  [_vm._v("Open Modal")]
                )
              ],
              1
            )
          ])
        ])
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-44ba842f_0", { source: ".wrapper-container[data-v-44ba842f] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n@media screen and (min-width: 769px), print {\n.example-header[data-v-44ba842f],\n  .example-container[data-v-44ba842f] {\n    margin: 0 auto;\n    max-width: 620px;\n}\n}\n.example-header[data-v-44ba842f] {\n  display: flex;\n  height: 4.75rem;\n  width: 100%;\n  padding-left: 2rem;\n  padding-top: 2rem;\n}\n.has-background .example-header[data-v-44ba842f] {\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 769px), print {\n.has-background .example-header[data-v-44ba842f] {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n}\n}\nform[data-v-44ba842f] {\n  padding: 2rem;\n}\n\n/*# sourceMappingURL=DSModalFullscreen.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/design-system/DSModalFullscreen.vue", "DSModalFullscreen.vue"], "names": [], "mappings": "AA2DA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;AC1DA;AAEA;AD2DA;;IAGA,cAAA;IACA,gBAAA;AC1DE;AACF;AD6DA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;AC1DA;AD6DA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qCAAA;AC1DA;AACA;ADqDA;IAOA,iBAAA;IACA,2BAAA;IACA,6BAAA;ACzDE;AACF;AD4DA;EACA,aAAA;ACzDA;;AAEA,gDAAgD", "file": "DSModalFullscreen.vue", "sourcesContent": [`<template lang="pug">
modal-base-template(:class='{ "has-background": background }' :a11yTitle='L("Modal title")')
  .wrapper-container
    .example-header
      h2.is-title-2 Modal base example

    .example-container

      form
        .field
          i18n.label(tag='label') Full name
          input.input(value='Felix Kubin')

        .field
          i18n.label(tag='label') Introduce the potential new member(s) to your group
          textarea.textarea(rows='5')
            | Felix and Brian are two very important figures in the electronic music scene. They have greatly contributed to the development of genres like ambient music and are now ready to contribute to this group. They are Dreamers like us!'

        .buttons
          i18n(
            tag='button'
            @click.prevent='toggleBackground'
          ) Toggle background

          i18n(
            tag='button'
            @click.prevent='openModal("DSModalNested")'
          ) Open Modal
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'

export default ({
  name: 'ModalDSNestedExample',
  components: {
    ModalBaseTemplate
  },
  data () {
    return {
      background: false
    }
  },
  methods: {
    toggleBackground () {
      this.background = !this.background
    },
    openModal (mode) {
      sbp('okTurtles.events/emit', OPEN_MODAL, mode)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.wrapper-container {
  height: 100%;
  width: 100%;
  background-color: $general_2;
}

.example-header,
.example-container {
  @include tablet {
    margin: 0 auto;
    max-width: 620px;
  }
}

.example-header {
  display: flex;
  height: 4.75rem;
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
}

.has-background .example-header {
  justify-content: center;
  align-items: center;
  padding-top: 0;
  background-color: $background_0;

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
  }
}

form {
  padding: 2rem;
}
</style>
`, ".wrapper-container {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n\n@media screen and (min-width: 769px), print {\n  .example-header,\n  .example-container {\n    margin: 0 auto;\n    max-width: 620px;\n  }\n}\n\n.example-header {\n  display: flex;\n  height: 4.75rem;\n  width: 100%;\n  padding-left: 2rem;\n  padding-top: 2rem;\n}\n\n.has-background .example-header {\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 769px), print {\n  .has-background .example-header {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n  }\n}\n\nform {\n  padding: 2rem;\n}\n\n/*# sourceMappingURL=DSModalFullscreen.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-44ba842f";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
modal-base-template(:class='{ "has-background": background }' :a11yTitle='L("Modal title")')
  .wrapper-container
    .example-header
      h2.is-title-2 Modal base example

    .example-container

      form
        .field
          i18n.label(tag='label') Full name
          input.input(value='Felix Kubin')

        .field
          i18n.label(tag='label') Introduce the potential new member(s) to your group
          textarea.textarea(rows='5')
            | Felix and Brian are two very important figures in the electronic music scene. They have greatly contributed to the development of genres like ambient music and are now ready to contribute to this group. They are Dreamers like us!'

        .buttons
          i18n(
            tag='button'
            @click.prevent='toggleBackground'
          ) Toggle background

          i18n(
            tag='button'
            @click.prevent='openModal("DSModalNested")'
          ) Open Modal
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'

export default ({
  name: 'ModalDSNestedExample',
  components: {
    ModalBaseTemplate
  },
  data () {
    return {
      background: false
    }
  },
  methods: {
    toggleBackground () {
      this.background = !this.background
    },
    openModal (mode) {
      sbp('okTurtles.events/emit', OPEN_MODAL, mode)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.wrapper-container {
  height: 100%;
  width: 100%;
  background-color: $general_2;
}

.example-header,
.example-container {
  @include tablet {
    margin: 0 auto;
    max-width: 620px;
  }
}

.example-header {
  display: flex;
  height: 4.75rem;
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
}

.has-background .example-header {
  justify-content: center;
  align-items: center;
  padding-top: 0;
  background-color: $background_0;

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
  }
}

form {
  padding: 2rem;
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
var DSModalFullscreen_default = __vue_component__;
export {
  DSModalFullscreen_default as default
};
//# sourceMappingURL=DSModalFullscreen-7RXDWB2K-cached.js.map
