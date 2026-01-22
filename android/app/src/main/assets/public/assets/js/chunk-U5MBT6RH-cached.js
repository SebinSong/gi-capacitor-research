import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/views/components/LinkToCopy.vue
var isMobile = !window.matchMedia("(any-pointer:fine)").matches;
var __vue_script__ = {
  name: "LinkToCopy",
  components: {
    Tooltip: Tooltip_default
  },
  data: () => ({
    ephemeral: {
      isTooltipActive: false
    }
  }),
  props: {
    link: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  methods: {
    copyToClipboard() {
      if (navigator.share && isMobile) {
        navigator.share({
          title: L("Your invite"),
          url: this.link
        }).catch((error) => console.error("navigator.share failed with:", error));
        return;
      }
      const displayTooltip = () => {
        this.ephemeral.isTooltipActive = true;
        setTimeout(() => {
          this.ephemeral.isTooltipActive = false;
        }, 1500);
      };
      this.$refs.input.select();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.link).then(displayTooltip);
      } else {
        document.execCommand("copy");
        displayTooltip();
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.tag,
    {
      tag: "component",
      staticClass: "c-wrapper",
      attrs: { "data-test": "invitationLink" },
      on: { click: _vm.copyToClipboard }
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "c-invisible-input",
        attrs: { type: "text" },
        domProps: { value: _vm.link }
      }),
      _c(
        "a",
        {
          staticClass: "link has-ellipsis c-link",
          attrs: { "aria-hidden": "true" },
          on: {
            click: function($event) {
              $event.preventDefault();
            }
          }
        },
        [_vm._v(_vm._s(_vm.link))]
      ),
      _c(
        "button",
        {
          staticClass: "is-icon-small has-background c-copy-button",
          attrs: { "aria-label": _vm.L("Copy link") }
        },
        [_c("i", { staticClass: "icon-copy is-regular" })]
      ),
      _vm.ephemeral.isTooltipActive ? _c("tooltip", {
        staticClass: "c-feedback",
        attrs: {
          isVisible: true,
          anchorToElement: true,
          direction: "top",
          text: _vm.L("Copied to clipboard!")
        }
      }) : _vm._e()
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-cc86f460_0", { source: ".c-wrapper[data-v-cc86f460] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n.c-wrapper .c-invisible-input[data-v-cc86f460] {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n.c-feedback[data-v-cc86f460] {\n  position: absolute !important;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.c-copy-button[data-v-cc86f460] {\n  margin-left: 0.25rem;\n  flex-shrink: 0;\n  font-weight: normal;\n}\n\n/*# sourceMappingURL=LinkToCopy.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/LinkToCopy.vue", "LinkToCopy.vue"], "names": [], "mappings": "AA0FA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;ACzFA;AD0FA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;ACxFA;AD4FA;EACA,6BAAA;EACA,SAAA;EACA,2BAAA;ACzFA;AD4FA;EACA,oBAAA;EACA,cAAA;EACA,mBAAA;ACzFA;;AAEA,yCAAyC", "file": "LinkToCopy.vue", "sourcesContent": [`<template lang='pug'>
component.c-wrapper(
  :is='tag'
  @click='copyToClipboard'
  data-test='invitationLink'
)
  input.c-invisible-input(
    type='text'
    ref='input'
    :value='link'
  )
  a.link.has-ellipsis.c-link(
    aria-hidden='true'
    @click.prevent=''
  ) {{ link }}
  button.is-icon-small.has-background.c-copy-button(:aria-label='L("Copy link")')
    i.icon-copy.is-regular
  tooltip.c-feedback(
    v-if='ephemeral.isTooltipActive'
    :isVisible='true'
    :anchorToElement='true'
    direction='top'
    :text='L("Copied to clipboard!")'
  )
</template>

<script>
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import { L } from '../../../frontend/common/common.js'

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser#comment95674193_51774045
const isMobile = !window.matchMedia('(any-pointer:fine)').matches

export default ({
  name: 'LinkToCopy',
  components: {
    Tooltip
  },
  data: () => ({
    ephemeral: {
      isTooltipActive: false
    }
  }),
  props: {
    link: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  methods: {
    copyToClipboard () {
      // if the device supports the Web Share API, use it and then skip other logic below.
      if (navigator.share && isMobile) {
        navigator.share({
          title: L('Your invite'),
          url: this.link
        }).catch((error) => console.error('navigator.share failed with:', error))
        return
      }

      const displayTooltip = () => {
        this.ephemeral.isTooltipActive = true

        setTimeout(() => {
          this.ephemeral.isTooltipActive = false
        }, 1500)
      }

      this.$refs.input.select()
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.link).then(displayTooltip)
      } else {
        // document.execCommand is deprecated, so only use it as a fallback of Clipboard API.
        // reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        document.execCommand('copy')

        displayTooltip()
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0; // So ellipsis works correctly inside grid. pls refer to a discussion here(https://github.com/okTurtles/group-income/pull/765#issuecomment-551691920) for the context.
  .c-invisible-input {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }
}

.c-feedback {
  position: absolute !important;
  left: 50%;
  transform: translateX(-50%);
}

.c-copy-button {
  margin-left: 0.25rem;
  flex-shrink: 0;
  font-weight: normal;
}
</style>
`, ".c-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n.c-wrapper .c-invisible-input {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.c-feedback {\n  position: absolute !important;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.c-copy-button {\n  margin-left: 0.25rem;\n  flex-shrink: 0;\n  font-weight: normal;\n}\n\n/*# sourceMappingURL=LinkToCopy.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-cc86f460";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
component.c-wrapper(
  :is='tag'
  @click='copyToClipboard'
  data-test='invitationLink'
)
  input.c-invisible-input(
    type='text'
    ref='input'
    :value='link'
  )
  a.link.has-ellipsis.c-link(
    aria-hidden='true'
    @click.prevent=''
  ) {{ link }}
  button.is-icon-small.has-background.c-copy-button(:aria-label='L("Copy link")')
    i.icon-copy.is-regular
  tooltip.c-feedback(
    v-if='ephemeral.isTooltipActive'
    :isVisible='true'
    :anchorToElement='true'
    direction='top'
    :text='L("Copied to clipboard!")'
  )
</template>

<script>
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import { L } from '../../../frontend/common/common.js'

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser#comment95674193_51774045
const isMobile = !window.matchMedia('(any-pointer:fine)').matches

export default ({
  name: 'LinkToCopy',
  components: {
    Tooltip
  },
  data: () => ({
    ephemeral: {
      isTooltipActive: false
    }
  }),
  props: {
    link: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  methods: {
    copyToClipboard () {
      // if the device supports the Web Share API, use it and then skip other logic below.
      if (navigator.share && isMobile) {
        navigator.share({
          title: L('Your invite'),
          url: this.link
        }).catch((error) => console.error('navigator.share failed with:', error))
        return
      }

      const displayTooltip = () => {
        this.ephemeral.isTooltipActive = true

        setTimeout(() => {
          this.ephemeral.isTooltipActive = false
        }, 1500)
      }

      this.$refs.input.select()
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.link).then(displayTooltip)
      } else {
        // document.execCommand is deprecated, so only use it as a fallback of Clipboard API.
        // reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        document.execCommand('copy')

        displayTooltip()
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0; // So ellipsis works correctly inside grid. pls refer to a discussion here(https://github.com/okTurtles/group-income/pull/765#issuecomment-551691920) for the context.
  .c-invisible-input {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }
}

.c-feedback {
  position: absolute !important;
  left: 50%;
  transform: translateX(-50%);
}

.c-copy-button {
  margin-left: 0.25rem;
  flex-shrink: 0;
  font-weight: normal;
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
var LinkToCopy_default = __vue_component__;

export {
  LinkToCopy_default
};
//# sourceMappingURL=chunk-U5MBT6RH-cached.js.map
