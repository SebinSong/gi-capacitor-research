import {
  ProfileCardContent_default
} from "./chunk-3T5W4UPP-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/components/ProfileCard.vue
var __vue_script__ = {
  name: "ProfileCard",
  components: {
    Tooltip: Tooltip_default,
    ProfileCardContent: ProfileCardContent_default
  },
  props: {
    contractID: String,
    direction: {
      type: String,
      validator: (value) => ["left", "top-left", "bottom"].includes(value),
      default: "left"
    },
    deactivated: {
      type: Boolean,
      default: false
    },
    isVisible: Boolean
  },
  computed: {
    ...mapGetters([
      "globalProfile"
    ]),
    profile() {
      return this.globalProfile(this.contractID);
    }
  },
  methods: {
    toggleTooltip() {
      this.$refs.tooltip?.toggle();
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tooltip",
    {
      ref: "tooltip",
      attrs: {
        direction: _vm.direction,
        manual: true,
        opacity: 1,
        deactivated: _vm.deactivated,
        isVisible: _vm.isVisible,
        "aria-label": _vm.L("Show profile")
      }
    },
    [
      _vm._t("default"),
      _c(
        "template",
        { slot: "tooltip" },
        [
          _vm.profile ? _c("profile-card-content", {
            attrs: {
              contractID: _vm.contractID,
              deactivated: _vm.deactivated,
              "on-post-cta-click": _vm.toggleTooltip
            },
            on: { "modal-close": _vm.toggleTooltip }
          }) : _vm._e()
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
  inject("data-v-2b81f49a_0", { source: ".c-twrapper[data-v-2b81f49a] {\n  display: flex;\n  align-items: center;\n}\n.c-twrapper[data-v-2b81f49a]:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=ProfileCard.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/ProfileCard.vue", "ProfileCard.vue"], "names": [], "mappings": "AAiEA;EACA,aAAA;EACA,mBAAA;AChEA;ADkEA;EACA,aAAA;AChEA;;AAEA,0CAA0C", "file": "ProfileCard.vue", "sourcesContent": [`<template lang='pug'>
tooltip(
  ref='tooltip'
  :direction='direction'
  :manual='true'
  :opacity='1'
  :deactivated='deactivated'
  :isVisible='isVisible'
  :aria-label='L("Show profile")'
)
  slot

  template(slot='tooltip')
    profile-card-content(
      v-if='profile'
      :contractID='contractID'
      :deactivated='deactivated'
      :on-post-cta-click='toggleTooltip'
      @modal-close='toggleTooltip'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import ProfileCardContent from './ProfileCardContent.vue'

export default ({
  name: 'ProfileCard',
  components: {
    Tooltip,
    ProfileCardContent
  },
  props: {
    contractID: String,
    direction: {
      type: String,
      validator: (value) => ['left', 'top-left', 'bottom'].includes(value),
      default: 'left'
    },
    deactivated: {
      type: Boolean,
      default: false
    },
    isVisible: Boolean
  },
  computed: {
    ...mapGetters([
      'globalProfile'
    ]),
    profile () {
      return this.globalProfile(this.contractID)
    }
  },
  methods: {
    toggleTooltip () {
      this.$refs.tooltip?.toggle()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-twrapper {
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }
}
</style>
`, ".c-twrapper {\n  display: flex;\n  align-items: center;\n}\n.c-twrapper:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=ProfileCard.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-2b81f49a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
tooltip(
  ref='tooltip'
  :direction='direction'
  :manual='true'
  :opacity='1'
  :deactivated='deactivated'
  :isVisible='isVisible'
  :aria-label='L("Show profile")'
)
  slot

  template(slot='tooltip')
    profile-card-content(
      v-if='profile'
      :contractID='contractID'
      :deactivated='deactivated'
      :on-post-cta-click='toggleTooltip'
      @modal-close='toggleTooltip'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import ProfileCardContent from './ProfileCardContent.vue'

export default ({
  name: 'ProfileCard',
  components: {
    Tooltip,
    ProfileCardContent
  },
  props: {
    contractID: String,
    direction: {
      type: String,
      validator: (value) => ['left', 'top-left', 'bottom'].includes(value),
      default: 'left'
    },
    deactivated: {
      type: Boolean,
      default: false
    },
    isVisible: Boolean
  },
  computed: {
    ...mapGetters([
      'globalProfile'
    ]),
    profile () {
      return this.globalProfile(this.contractID)
    }
  },
  methods: {
    toggleTooltip () {
      this.$refs.tooltip?.toggle()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-twrapper {
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
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
var ProfileCard_default = __vue_component__;

export {
  ProfileCard_default
};
//# sourceMappingURL=chunk-GDHKI2YN-cached.js.map
