import {
  ModalMixins_default
} from "./chunk-WNIDE56S-cached.js";
import {
  trapFocus_default
} from "./chunk-UHGLFGQW-cached.js";

// frontend/views/components/modal/ModalBaseTemplate.vue
var __vue_script__ = {
  name: "ModalBaseTemplate",
  mixins: [ModalMixins_default, trapFocus_default],
  props: {
    fullscreen: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: true
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: { name: "zoom", appear: "appear" },
      on: { "after-leave": _vm.unload }
    },
    [
      _vm.modalIsActive ? _c(
        "div",
        {
          directives: [
            {
              name: "focus",
              rawName: "v-focus",
              value: _vm.autofocus,
              expression: "autofocus"
            }
          ],
          staticClass: "modal",
          class: { fullscreen: _vm.fullscreen },
          attrs: {
            role: "dialog",
            tabindex: "-1",
            "aria-label": _vm.a11yTitle,
            "data-test": "modal"
          },
          on: { close: _vm.close }
        },
        [
          !_vm.modalForceAction ? _c("modal-close", {
            attrs: { fullscreen: _vm.fullscreen },
            on: { close: _vm.close }
          }) : _vm._e(),
          _vm._t("default")
        ],
        2
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-fedbc44e_0", { source: ".modal[data-v-fedbc44e] {\n  display: flex;\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n}\n.modal.fullscreen[data-v-fedbc44e] {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: var(--general_2);\n  padding: 0 1rem;\n  overflow-x: hidden;\n}\n@media screen and (min-width: 769px), print {\n.modal.fullscreen[data-v-fedbc44e] {\n    padding: 0 1.5rem;\n}\n}\n.modal-body[data-v-fedbc44e] {\n  height: 100%;\n}\n.modal .c-modal-close[data-v-fedbc44e] {\n  background-color: var(--background_0);\n}\n.has-background .c-modal-close[data-v-fedbc44e] {\n  background-color: var(--general_1);\n  top: 0.75rem;\n}\n@media screen and (min-width: 769px), print {\n.has-background .c-modal-close[data-v-fedbc44e] {\n    top: 1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.has-background .c-modal-close[data-v-fedbc44e] {\n    background-color: var(--background_0);\n}\n}\n\n/*# sourceMappingURL=ModalBaseTemplate.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/modal/ModalBaseTemplate.vue", "ModalBaseTemplate.vue"], "names": [], "mappings": "AAuCA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;ACtCA;ADwCA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,4BAAA;EACA,eAAA;EACA,kBAAA;ACtCA;ADiCA;AADA;IASA,iBAAA;ACrCE;AACF;ADyCA;EACA,YAAA;ACtCA;ADyCA;EACA,qCAAA;ACtCA;ADyCA;EACA,kCAAA;EACA,YAAA;ACtCA;ADeA;AAqBA;IAKA,WAAA;ACrCE;AACF;AACA;AD8BA;IASA,qCAAA;ACpCE;AACF;;AAEA,gDAAgD", "file": "ModalBaseTemplate.vue", "sourcesContent": [`<template lang='pug'>
  transition(name='zoom' appear @after-leave='unload')
    .modal(
      v-if='modalIsActive'
      :class='{ fullscreen }'
      role='dialog'
      tabindex='-1'
      :aria-label='a11yTitle'
      v-focus='autofocus'
      data-test='modal'
      @close='close'
    )
      modal-close(@close='close' :fullscreen='fullscreen' v-if='!modalForceAction')
      slot
</template>

<script>
import modalMixins from './ModalMixins.js'
import trapFocus from '../../../../frontend/utils/trapFocus.js'

export default ({
  name: 'ModalBaseTemplate',
  mixins: [modalMixins, trapFocus],
  props: {
    fullscreen: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: true
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.modal {
  display: flex;
  position: fixed;
  z-index: $zindex-modal;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  &.fullscreen {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: $general_2;
    padding: 0 1rem;
    overflow-x: hidden;

    @include tablet {
      padding: 0 1.5rem;
    }
  }
}

.modal-body {
  height: 100%;
}

.modal .c-modal-close {
  background-color: $background;
}

.has-background .c-modal-close {
  background-color: $general_1;
  top: 0.75rem;

  @include tablet {
    top: 1.5rem;
  }

  @include desktop {
    background-color: $background;
  }
}
</style>
`, ".modal {\n  display: flex;\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n}\n.modal.fullscreen {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: var(--general_2);\n  padding: 0 1rem;\n  overflow-x: hidden;\n}\n@media screen and (min-width: 769px), print {\n  .modal.fullscreen {\n    padding: 0 1.5rem;\n  }\n}\n\n.modal-body {\n  height: 100%;\n}\n\n.modal .c-modal-close {\n  background-color: var(--background_0);\n}\n\n.has-background .c-modal-close {\n  background-color: var(--general_1);\n  top: 0.75rem;\n}\n@media screen and (min-width: 769px), print {\n  .has-background .c-modal-close {\n    top: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .has-background .c-modal-close {\n    background-color: var(--background_0);\n  }\n}\n\n/*# sourceMappingURL=ModalBaseTemplate.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-fedbc44e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  transition(name='zoom' appear @after-leave='unload')
    .modal(
      v-if='modalIsActive'
      :class='{ fullscreen }'
      role='dialog'
      tabindex='-1'
      :aria-label='a11yTitle'
      v-focus='autofocus'
      data-test='modal'
      @close='close'
    )
      modal-close(@close='close' :fullscreen='fullscreen' v-if='!modalForceAction')
      slot
</template>

<script>
import modalMixins from './ModalMixins.js'
import trapFocus from '../../../../frontend/utils/trapFocus.js'

export default ({
  name: 'ModalBaseTemplate',
  mixins: [modalMixins, trapFocus],
  props: {
    fullscreen: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: true
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.modal {
  display: flex;
  position: fixed;
  z-index: $zindex-modal;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  &.fullscreen {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: $general_2;
    padding: 0 1rem;
    overflow-x: hidden;

    @include tablet {
      padding: 0 1.5rem;
    }
  }
}

.modal-body {
  height: 100%;
}

.modal .c-modal-close {
  background-color: $background;
}

.has-background .c-modal-close {
  background-color: $general_1;
  top: 0.75rem;

  @include tablet {
    top: 1.5rem;
  }

  @include desktop {
    background-color: $background;
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
var ModalBaseTemplate_default = __vue_component__;

export {
  ModalBaseTemplate_default
};
//# sourceMappingURL=chunk-PVWMN5B2-cached.js.map
