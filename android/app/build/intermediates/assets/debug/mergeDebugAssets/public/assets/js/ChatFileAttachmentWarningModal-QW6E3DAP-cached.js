import {
  CHAT_ATTACHMENT_SIZE_LIMIT
} from "./chunk-LOAVQ5PN-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/file-attachment/ChatFileAttachmentWarningModal.vue
var __vue_script__ = {
  name: "ChatFileAttachmentWarningModal",
  components: {
    ModalTemplate: ModalTemplate_default
  },
  data() {
    return {
      config: {
        sizeLimit: (CHAT_ATTACHMENT_SIZE_LIMIT / Math.pow(10, 6)).toFixed(2)
      }
    };
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
      attrs: { a11yTitle: _vm.L("Chat attachment too large modal") }
    },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("File too large")])],
        1
      ),
      _c(
        "div",
        { staticClass: "c-content" },
        [
          _c("i18n", { attrs: { args: { sizeLimit: _vm.config.sizeLimit } } }, [
            _vm._v(
              "That file is too large and cannot be uploaded. The limit is {sizeLimit} MB"
            )
          ])
        ],
        1
      ),
      _c("div", { staticClass: "buttons is-centered" }, [
        _c(
          "button",
          {
            staticClass: "is-primary c-dismiss-btn",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$refs.modal.close();
              }
            }
          },
          [_c("i18n", [_vm._v("OK")])],
          1
        )
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-182fd803_0", { source: ".c-content[data-v-182fd803] {\n  margin-bottom: 1rem;\n}\n.c-dismiss-btn[data-v-182fd803] {\n  min-width: 9.6875rem;\n}\n\n/*# sourceMappingURL=ChatFileAttachmentWarningModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/file-attachment/ChatFileAttachmentWarningModal.vue", "ChatFileAttachmentWarningModal.vue"], "names": [], "mappings": "AAuCA;EACA,mBAAA;ACtCA;ADyCA;EACA,oBAAA;ACtCA;;AAEA,6DAA6D", "file": "ChatFileAttachmentWarningModal.vue", "sourcesContent": [`<template lang='pug'>
modal-template(
  ref='modal'
  :a11yTitle='L("Chat attachment too large modal")'
)
  template(slot='title')
    i18n File too large

  .c-content
    i18n(:args='{ sizeLimit: config.sizeLimit }') That file is too large and cannot be uploaded. The limit is {sizeLimit} MB

  .buttons.is-centered
    button.is-primary.c-dismiss-btn(
      type='button'
      @click='$refs.modal.close()'
    )
      i18n OK
</template>

<script>
import ModalTemplate from '../../../../../frontend/views/components/modal/ModalTemplate.vue'
import { CHAT_ATTACHMENT_SIZE_LIMIT } from '../../../../../frontend/utils/constants.js'

export default {
  name: 'ChatFileAttachmentWarningModal',
  components: {
    ModalTemplate
  },
  data () {
    return {
      config: {
        sizeLimit: (CHAT_ATTACHMENT_SIZE_LIMIT / Math.pow(10, 6)).toFixed(2)
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
.c-content {
  margin-bottom: 1rem;
}

.c-dismiss-btn {
  min-width: 9.6875rem;
}
</style>
`, ".c-content {\n  margin-bottom: 1rem;\n}\n\n.c-dismiss-btn {\n  min-width: 9.6875rem;\n}\n\n/*# sourceMappingURL=ChatFileAttachmentWarningModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-182fd803";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(
  ref='modal'
  :a11yTitle='L("Chat attachment too large modal")'
)
  template(slot='title')
    i18n File too large

  .c-content
    i18n(:args='{ sizeLimit: config.sizeLimit }') That file is too large and cannot be uploaded. The limit is {sizeLimit} MB

  .buttons.is-centered
    button.is-primary.c-dismiss-btn(
      type='button'
      @click='$refs.modal.close()'
    )
      i18n OK
</template>

<script>
import ModalTemplate from '../../../../../frontend/views/components/modal/ModalTemplate.vue'
import { CHAT_ATTACHMENT_SIZE_LIMIT } from '../../../../../frontend/utils/constants.js'

export default {
  name: 'ChatFileAttachmentWarningModal',
  components: {
    ModalTemplate
  },
  data () {
    return {
      config: {
        sizeLimit: (CHAT_ATTACHMENT_SIZE_LIMIT / Math.pow(10, 6)).toFixed(2)
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
.c-content {
  margin-bottom: 1rem;
}

.c-dismiss-btn {
  min-width: 9.6875rem;
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
var ChatFileAttachmentWarningModal_default = __vue_component__;
export {
  ChatFileAttachmentWarningModal_default as default
};
//# sourceMappingURL=ChatFileAttachmentWarningModal-QW6E3DAP-cached.js.map
