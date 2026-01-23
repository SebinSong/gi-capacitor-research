import {
  DESKTOP
} from "./chunk-532VGDFI-cached.js";
import {
  debounce
} from "./chunk-MTWMQLQH-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/components/Badge.vue
var __vue_script__ = {
  name: "Badge",
  props: {
    type: {
      default: "default",
      validator: (type) => ["default", "compact"].indexOf(type) !== -1
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      staticClass: "c-badge",
      class: "is-" + _vm.type,
      attrs: {
        "aria-label": _vm.L("{num} new notifications", {
          num: _vm.$slots.default ? _vm.$slots.default[0].text : ""
        }),
        role: "alert"
      }
    },
    [_vm._t("default")],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-461937ca_0", { source: ".c-badge[data-v-461937ca] {\n  display: flex;\n  position: absolute;\n  top: -0.25rem;\n  right: -0.25rem;\n  align-items: center;\n  background-color: var(--danger_0);\n  border: 1px solid var(--background_0);\n  border-radius: 50%;\n  color: var(--background_0);\n  font-size: 0.7rem;\n  font-weight: 600;\n  justify-content: center;\n  height: 1rem;\n  line-height: 0.2;\n  min-width: 1rem;\n  padding: 0 2px 1px 1px;\n}\n.c-badge.is-compact[data-v-461937ca] {\n  top: 0;\n  right: 0;\n  min-width: 0.5rem;\n  height: 0.5rem;\n  font-size: 0;\n}\n\n/*# sourceMappingURL=Badge.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/Badge.vue", "Badge.vue"], "names": [], "mappings": "AAwBA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,iCADA;EAEA,qCAAA;EACA,kBAAA;EACA,0BAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;ACvBA;ADyBA;EACA,MAAA;EACA,QAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;ACvBA;;AAEA,oCAAoC", "file": "Badge.vue", "sourcesContent": [`<template lang="pug">
span.c-badge(
  :class='\`is-\${type}\`'
  :aria-label='L("{num} new notifications", { num: $slots.default ? $slots.default[0].text : "" })'
  role='alert'
)
  slot
</template>

<script>
export default ({
  name: 'Badge',
  props: {
    type: {
      default: 'default',
      validator: (type) => ['default', 'compact'].indexOf(type) !== -1
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-badge {
  display: flex;
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  align-items: center;
  background-color: $danger_0;
  border: 1px solid $background;
  border-radius: 50%;
  color: $background;
  font-size: 0.7rem;
  font-weight: 600;
  justify-content: center;
  height: 1rem;
  line-height: 0.2; // Force pixel alignment in Chrome.
  min-width: 1rem; // Allow expansion when several digits must be displayed.
  padding: 0 2px 1px 1px; // Prevent contents from touching rounded corners.

  &.is-compact {
    top: 0;
    right: 0;
    min-width: 0.5rem;
    height: 0.5rem;
    font-size: 0;
  }
}
</style>
`, ".c-badge {\n  display: flex;\n  position: absolute;\n  top: -0.25rem;\n  right: -0.25rem;\n  align-items: center;\n  background-color: var(--danger_0);\n  border: 1px solid var(--background_0);\n  border-radius: 50%;\n  color: var(--background_0);\n  font-size: 0.7rem;\n  font-weight: 600;\n  justify-content: center;\n  height: 1rem;\n  line-height: 0.2;\n  min-width: 1rem;\n  padding: 0 2px 1px 1px;\n}\n.c-badge.is-compact {\n  top: 0;\n  right: 0;\n  min-width: 0.5rem;\n  height: 0.5rem;\n  font-size: 0;\n}\n\n/*# sourceMappingURL=Badge.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-461937ca";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
span.c-badge(
  :class='\`is-\${type}\`'
  :aria-label='L("{num} new notifications", { num: $slots.default ? $slots.default[0].text : "" })'
  role='alert'
)
  slot
</template>

<script>
export default ({
  name: 'Badge',
  props: {
    type: {
      default: 'default',
      validator: (type) => ['default', 'compact'].indexOf(type) !== -1
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-badge {
  display: flex;
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  align-items: center;
  background-color: $danger_0;
  border: 1px solid $background;
  border-radius: 50%;
  color: $background;
  font-size: 0.7rem;
  font-weight: 600;
  justify-content: center;
  height: 1rem;
  line-height: 0.2; // Force pixel alignment in Chrome.
  min-width: 1rem; // Allow expansion when several digits must be displayed.
  padding: 0 2px 1px 1px; // Prevent contents from touching rounded corners.

  &.is-compact {
    top: 0;
    right: 0;
    min-width: 0.5rem;
    height: 0.5rem;
    font-size: 0;
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
var Badge_default = __vue_component__;

// frontend/views/components/Toggle.vue
var __vue_script__2 = {
  name: "Toggle",
  components: {
    Badge: Badge_default
  },
  props: {
    element: {
      type: String,
      validator: (value) => ["navigation", "sidebar"].includes(value),
      required: true
    },
    showBadge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters([
      "groupUnreadMessages"
    ]),
    currentGroupUnreadMessagesCount() {
      return !this.currentGroupId ? 0 : this.groupUnreadMessages(this.currentGroupId);
    },
    hasChatNotification() {
      return ["GroupChat", "GroupChatConversation"].includes(this.$route.name) && this.showBadge && this.currentGroupUnreadMessagesCount;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      staticClass: "c-toggle is-unstyled",
      class: _vm.element,
      attrs: { "aria-label": _vm.L("Toggle navigation") },
      on: {
        click: function($event) {
          return _vm.$emit("toggle");
        }
      }
    },
    [
      _vm.element === "navigation" ? _c("i", { staticClass: "icon-bars" }, [_vm._t("default")], 2) : _vm.element === "sidebar" ? _c(
        "i",
        {
          staticClass: "icon-info",
          class: { "c-toggle-bg": _vm.hasChatNotification }
        },
        [
          _vm._t("default"),
          _vm.hasChatNotification ? _c("badge", [
            _vm._v(_vm._s(_vm.currentGroupUnreadMessagesCount))
          ]) : _vm._e()
        ],
        2
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-c781bb06_0", { source: ".c-toggle[data-v-c781bb06] {\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  min-height: auto;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */\n}\n.c-toggle[data-v-c781bb06]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.c-toggle[data-v-c781bb06] {\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  min-height: auto;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */\n}\n.c-toggle[data-v-c781bb06]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.c-toggle[data-v-c781bb06] {\n  height: 4rem;\n  position: absolute;\n  top: 0;\n  padding: 0.5rem 0;\n  width: 4.75rem;\n  background-color: transparent;\n  transition: height 1ms 300ms, width 1ms 300ms, background 150ms;\n  overflow: hidden;\n  color: var(--text_0);\n}\n.c-toggle:hover .icon-bars[data-v-c781bb06],\n.c-toggle:hover .icon-info[data-v-c781bb06], .c-toggle:focus .icon-bars[data-v-c781bb06],\n.c-toggle:focus .icon-info[data-v-c781bb06] {\n  background-color: var(--general_1);\n}\n.c-toggle:focus .icon-bars[data-v-c781bb06],\n.c-toggle:focus .icon-info[data-v-c781bb06] {\n  box-shadow: 0 0 0 2px var(--primary_1);\n}\n.c-toggle.navigation[data-v-c781bb06] {\n  text-align: right;\n}\n.c-toggle.sidebar[data-v-c781bb06] {\n  text-align: left;\n}\n.c-toggle .icon-bars[data-v-c781bb06],\n.c-toggle .icon-info[data-v-c781bb06] {\n  position: relative;\n  border-radius: 50%;\n  width: 2.75rem;\n  height: 2.75rem;\n  text-align: center;\n  line-height: 2.75rem;\n  transition: opacity 150ms 300ms;\n}\n.c-toggle .icon-bars.c-toggle-bg[data-v-c781bb06],\n.c-toggle .icon-info.c-toggle-bg[data-v-c781bb06] {\n  background-color: var(--general_1);\n}\n.is-active .c-toggle[data-v-c781bb06] {\n  background-color: rgba(0, 0, 0, 0.7);\n  height: 100%;\n  width: 200vw;\n  top: 0;\n  transition: height 1ms 1ms, width 1ms 1ms, background 150ms;\n}\n.is-active .c-toggle .icon-info[data-v-c781bb06],\n.is-active .c-toggle .icon-bars[data-v-c781bb06] {\n  transition: opacity 1ms 1ms;\n  opacity: 0;\n}\n@media screen and (min-width: 769px), print {\n.c-toggle[data-v-c781bb06] {\n    width: 5.75rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-toggle[data-v-c781bb06] {\n    display: none;\n}\n}\n\n/*# sourceMappingURL=Toggle.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/Toggle.vue", "Toggle.vue"], "names": [], "mappings": "AA+FA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EC9FE,iBAAiB;EDgGnB,gBAAA;EACA,uBAAA;EAEA,uCAAA;EC/FE,cAAc;EDiGhB,aAAA;EAEA,4EAAA;EACA,mBAAA;EAEA,uCAAA;ECjGE,+BAA+B;EDmGjC,gCAAA;EAEA,+DAAA;EACA,wBAAA;EAEA,mDAAA;ACnGA;AAEA;EDmGA,SAAA;EACA,UAAA;ACjGA;ADsEA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;ECnEE,iBAAiB;EDqEnB,gBAAA;EACA,uBAAA;EAEA,uCAAA;ECpEE,cAAc;EDsEhB,aAAA;EAEA,4EAAA;EACA,mBAAA;EAEA,uCAAA;ECtEE,+BAA+B;EDwEjC,gCAAA;EAEA,+DAAA;EACA,wBAAA;EAEA,mDAAA;ACxEA;AACA;EDyEA,SAAA;EACA,UAAA;ACvEA;ADKA;EAEA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,iBAAA;EACA,cAAA;EACA,6BAAA;EACA,+DAAA;EACA,gBAAA;EACA,oBAAA;ACHA;ADQA;;;EAEA,kCAAA;ACLA;ADUA;;EAEA,sCAAA;ACRA;ADYA;EACA,iBAAA;ACVA;ADaA;EACA,gBAAA;ACXA;ADcA;;EAEA,kBAAA;EACA,kBAAA;EACA,cA1CA;EA2CA,eA3CA;EA4CA,kBAAA;EACA,oBA7CA;EA8CA,+BAAA;ACZA;ADcA;;EACA,kCAAA;ACXA;ADeA;EACA,oCAAA;EACA,YAAA;EACA,YAAA;EACA,MAAA;EACA,2DAAA;ACbA;ADeA;;EAEA,2BAAA;EACA,UAAA;ACbA;ADtDA;AAMA;IAkEA,cAAA;ACdE;AACF;AD/CA;AANA;IAsEA,aAAA;ACbE;AACF;;AAEA,qCAAqC", "file": "Toggle.vue", "sourcesContent": [`<template lang='pug'>
button.c-toggle.is-unstyled(
  :class='element'
  @click='$emit("toggle")'
  :aria-label='L("Toggle navigation")'
)
  i.icon-bars(v-if='element === "navigation"')
    slot
  i.icon-info(v-else-if='element === "sidebar"' :class='{"c-toggle-bg": hasChatNotification}')
    slot
    badge(v-if='hasChatNotification') {{ currentGroupUnreadMessagesCount }}

</template>

<script>
import Badge from './Badge.vue'
import { mapState, mapGetters } from 'vuex'

export default ({
  name: 'Toggle',
  components: {
    Badge
  },
  props: {
    element: {
      type: String,
      validator: (value) => ['navigation', 'sidebar'].includes(value),
      required: true
    },
    showBadge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'groupUnreadMessages'
    ]),
    currentGroupUnreadMessagesCount () {
      return !this.currentGroupId ? 0 : this.groupUnreadMessages(this.currentGroupId)
    },
    hasChatNotification () {
      return ['GroupChat', 'GroupChatConversation'].includes(this.$route.name) && this.showBadge && this.currentGroupUnreadMessagesCount
    }
  }
}: Object)

<\/script>
<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";
@import "../../../frontend/assets/style/_mixins.scss";

$speed: 300ms;
$iconSize: 2.75rem;

.c-toggle {
  @extend %reset-button;
  height: 4rem;
  position: absolute;
  top: 0;
  padding: 0.5rem 0;
  width: 2rem + $iconSize; // Gap on the edge.
  background-color: transparent;
  transition: height 1ms $speed, width 1ms $speed, background $speed * 0.5;
  overflow: hidden;
  color: $text_0;

  // Similar to \`.button.is-icon\` but adapted to a "corner" button.
  &:hover,
  &:focus {
    .icon-bars,
    .icon-info {
      background-color: $general_1;
    }
  }

  &:focus {
    .icon-bars,
    .icon-info {
      box-shadow: 0 0 0 2px $primary_1;
    }
  }

  &.navigation {
    text-align: right;
  }

  &.sidebar {
    text-align: left;
  }

  .icon-bars,
  .icon-info {
    position: relative; // Allow the badge to be anchored to the icon rather than to the button.
    border-radius: 50%;
    width: $iconSize;
    height: $iconSize;
    text-align: center;
    line-height: $iconSize;
    transition: opacity $speed * 0.5 $speed;

    &.c-toggle-bg {
      background-color: var(--general_1);
    }
  }

  .is-active & {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 200vw;
    top: 0;
    transition: height 1ms 1ms, width 1ms 1ms, background $speed * 0.5;

    .icon-info,
    .icon-bars {
      transition: opacity 1ms 1ms;
      opacity: 0;
    }
  }

  @include tablet {
    width: 3rem + $iconSize;
  }

  @include desktop {
    display: none;
  }
}
</style>
`, ".c-toggle {\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  min-height: auto;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */\n}\n\n.c-toggle::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.c-toggle {\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  min-height: auto;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */\n}\n.c-toggle::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.c-toggle {\n  height: 4rem;\n  position: absolute;\n  top: 0;\n  padding: 0.5rem 0;\n  width: 4.75rem;\n  background-color: transparent;\n  transition: height 1ms 300ms, width 1ms 300ms, background 150ms;\n  overflow: hidden;\n  color: var(--text_0);\n}\n.c-toggle:hover .icon-bars,\n.c-toggle:hover .icon-info, .c-toggle:focus .icon-bars,\n.c-toggle:focus .icon-info {\n  background-color: var(--general_1);\n}\n.c-toggle:focus .icon-bars,\n.c-toggle:focus .icon-info {\n  box-shadow: 0 0 0 2px var(--primary_1);\n}\n.c-toggle.navigation {\n  text-align: right;\n}\n.c-toggle.sidebar {\n  text-align: left;\n}\n.c-toggle .icon-bars,\n.c-toggle .icon-info {\n  position: relative;\n  border-radius: 50%;\n  width: 2.75rem;\n  height: 2.75rem;\n  text-align: center;\n  line-height: 2.75rem;\n  transition: opacity 150ms 300ms;\n}\n.c-toggle .icon-bars.c-toggle-bg,\n.c-toggle .icon-info.c-toggle-bg {\n  background-color: var(--general_1);\n}\n.is-active .c-toggle {\n  background-color: rgba(0, 0, 0, 0.7);\n  height: 100%;\n  width: 200vw;\n  top: 0;\n  transition: height 1ms 1ms, width 1ms 1ms, background 150ms;\n}\n.is-active .c-toggle .icon-info,\n.is-active .c-toggle .icon-bars {\n  transition: opacity 1ms 1ms;\n  opacity: 0;\n}\n@media screen and (min-width: 769px), print {\n  .c-toggle {\n    width: 5.75rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-toggle {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=Toggle.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-c781bb06";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
button.c-toggle.is-unstyled(
  :class='element'
  @click='$emit("toggle")'
  :aria-label='L("Toggle navigation")'
)
  i.icon-bars(v-if='element === "navigation"')
    slot
  i.icon-info(v-else-if='element === "sidebar"' :class='{"c-toggle-bg": hasChatNotification}')
    slot
    badge(v-if='hasChatNotification') {{ currentGroupUnreadMessagesCount }}

</template>

<script>
import Badge from './Badge.vue'
import { mapState, mapGetters } from 'vuex'

export default ({
  name: 'Toggle',
  components: {
    Badge
  },
  props: {
    element: {
      type: String,
      validator: (value) => ['navigation', 'sidebar'].includes(value),
      required: true
    },
    showBadge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters([
      'groupUnreadMessages'
    ]),
    currentGroupUnreadMessagesCount () {
      return !this.currentGroupId ? 0 : this.groupUnreadMessages(this.currentGroupId)
    },
    hasChatNotification () {
      return ['GroupChat', 'GroupChatConversation'].includes(this.$route.name) && this.showBadge && this.currentGroupUnreadMessagesCount
    }
  }
}: Object)

<\/script>
<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";
@import "../../../frontend/assets/style/_mixins.scss";

$speed: 300ms;
$iconSize: 2.75rem;

.c-toggle {
  @extend %reset-button;
  height: 4rem;
  position: absolute;
  top: 0;
  padding: 0.5rem 0;
  width: 2rem + $iconSize; // Gap on the edge.
  background-color: transparent;
  transition: height 1ms $speed, width 1ms $speed, background $speed * 0.5;
  overflow: hidden;
  color: $text_0;

  // Similar to \`.button.is-icon\` but adapted to a "corner" button.
  &:hover,
  &:focus {
    .icon-bars,
    .icon-info {
      background-color: $general_1;
    }
  }

  &:focus {
    .icon-bars,
    .icon-info {
      box-shadow: 0 0 0 2px $primary_1;
    }
  }

  &.navigation {
    text-align: right;
  }

  &.sidebar {
    text-align: left;
  }

  .icon-bars,
  .icon-info {
    position: relative; // Allow the badge to be anchored to the icon rather than to the button.
    border-radius: 50%;
    width: $iconSize;
    height: $iconSize;
    text-align: center;
    line-height: $iconSize;
    transition: opacity $speed * 0.5 $speed;

    &.c-toggle-bg {
      background-color: var(--general_1);
    }
  }

  .is-active & {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 200vw;
    top: 0;
    transition: height 1ms 1ms, width 1ms 1ms, background $speed * 0.5;

    .icon-info,
    .icon-bars {
      transition: opacity 1ms 1ms;
      opacity: 0;
    }
  }

  @include tablet {
    width: 3rem + $iconSize;
  }

  @include desktop {
    display: none;
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
function __vue_create_injector__2() {
  const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2(
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
  __vue_inject_styles__2,
  __vue_script__2,
  __vue_scope_id__2,
  __vue_is_functional_template__2,
  __vue_module_identifier__2,
  false,
  __vue_create_injector__2,
  void 0,
  void 0
);
var Toggle_default = __vue_component__2;

// frontend/views/components/Page.vue
var __vue_script__3 = {
  name: "Page",
  components: {
    Toggle: Toggle_default
  },
  props: {
    pageTestName: String,
    pageTestHeaderName: String,
    mainClass: String,
    miniHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      config: {
        debounceResize: debounce(this.checkIsTouch, 250)
      },
      ephemeral: {
        isActive: false,
        isTouch: null
      }
    };
  },
  created() {
    this.checkIsTouch();
  },
  mounted() {
    window.addEventListener("resize", this.config.debounceResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.config.debounceResize);
  },
  computed: {
    isInert() {
      return !this.ephemeral.isActive && this.ephemeral.isTouch;
    }
  },
  methods: {
    toggleMenuIfTouch() {
      if (this.ephemeral.isTouch) {
        this.toggleMenu();
      }
    },
    toggleMenu() {
      this.ephemeral.isActive = !this.ephemeral.isActive;
    },
    checkIsTouch() {
      this.ephemeral.isTouch = window.innerWidth < DESKTOP;
    },
    findAndScrollToAnchor(str) {
      const anchorEl = document.getElementById(str) || this.$el.querySelector(`[name="${CSS.escape(str)}"]`);
      if (anchorEl) {
        anchorEl.scrollIntoView({ behavior: "smooth", block: "start" });
        if (anchorEl.tabIndex >= 0 || anchorEl.hasAttribute("tabindex")) {
          anchorEl.focus();
        }
      }
    }
  },
  watch: {
    "$route": {
      immediate: true,
      handler(to, from) {
        if (to.hash && from?.hash !== to.hash) {
          setTimeout(() => {
            this.findAndScrollToAnchor(to.hash.slice(1));
          }, 100);
        }
      }
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: _vm.$scopedSlots.sidebar ? "p-with-sidebar" : "p-no-sidebar",
      attrs: { "data-test": _vm.pageTestName + "-page" }
    },
    [
      _c(
        "header",
        {
          staticClass: "p-header",
          class: _vm.miniHeader ? "p-mini-header" : ""
        },
        [
          _vm._t("header"),
          _vm.$slots.title ? _c(
            "h1",
            {
              staticClass: "is-title-2 p-title",
              attrs: { "data-test": _vm.pageTestHeaderName }
            },
            [
              _c("img", {
                staticClass: "c-logo",
                attrs: {
                  src: "/assets/images/group-income-icon-transparent.png",
                  alt: ""
                }
              }),
              _c("span", [_vm._t("title")], 2)
            ]
          ) : _vm._e(),
          _vm.$scopedSlots.sidebar ? _c("toggle", {
            attrs: {
              element: "sidebar",
              "aria-expanded": _vm.ephemeral.isActive,
              "show-badge": true
            },
            on: { toggle: _vm.toggleMenu }
          }) : _vm._e(),
          _vm._t("description")
        ],
        2
      ),
      _c(
        "main",
        { staticClass: "p-main", class: _vm.mainClass },
        [_vm._t("default")],
        2
      ),
      _vm.$scopedSlots.sidebar ? _c(
        "section",
        {
          staticClass: "p-sidebar",
          class: { "is-active": _vm.ephemeral.isActive }
        },
        [
          _c("i18n", { staticClass: "sr-only", attrs: { tag: "h2" } }, [
            _vm._v("Page details")
          ]),
          _c("toggle", {
            attrs: {
              element: "sidebar",
              "aria-expanded": _vm.ephemeral.isActive
            },
            on: { toggle: _vm.toggleMenu }
          }),
          _c(
            "div",
            {
              staticClass: "p-sidebar-inner",
              attrs: { inert: _vm.isInert }
            },
            [_vm._t("sidebar", null, { toggle: _vm.toggleMenuIfTouch })],
            2
          )
        ],
        1
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-6bb40b95_0", { source: '.p-with-sidebar[data-v-6bb40b95],\n.p-no-sidebar[data-v-6bb40b95] {\n  height: 100%;\n  width: 100vw;\n}\n@media screen and (min-width: 1200px) {\n.p-with-sidebar[data-v-6bb40b95],\n  .p-no-sidebar[data-v-6bb40b95] {\n    height: 100%;\n    width: auto;\n}\n}\n.p-with-sidebar[data-v-6bb40b95] {\n  display: grid;\n  grid-template-areas: "p-header" "p-main";\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: auto minmax(0, 1fr);\n}\n@media screen and (min-width: 1200px) {\n.p-with-sidebar[data-v-6bb40b95] {\n    grid-template-columns: minmax(0, 1fr) 16.5rem;\n    grid-template-areas: "p-header p-sidebar" "p-main p-sidebar";\n}\n}\n.p-main[data-v-6bb40b95] {\n  grid-area: p-main;\n  width: calc(100% - 2rem);\n  margin: 0 auto;\n  padding-top: 1.5rem;\n  max-width: 50rem;\n  height: fit-content;\n  -webkit-overflow-scrolling: touch;\n}\n.p-main.full-width[data-v-6bb40b95] {\n  max-width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.p-main[data-v-6bb40b95] {\n    width: calc(100% - 4rem);\n}\n}\n@media screen and (min-width: 1200px) {\n.p-main[data-v-6bb40b95] {\n    width: auto;\n    padding-top: 0;\n    margin-right: 2rem;\n    margin-left: 5.5rem;\n}\n}\n.p-header[data-v-6bb40b95] {\n  grid-area: p-header;\n  transition: padding ease-out 300ms;\n  text-align: center;\n  min-height: 4rem;\n}\n@media screen and (max-width: 1199px) {\n.p-header[data-v-6bb40b95] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    background: var(--general_2);\n    z-index: 3;\n    padding: 0 5.75rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.p-header[data-v-6bb40b95] {\n    display: block;\n    padding-top: 1.125rem;\n    text-align: left;\n    min-height: 4.75rem;\n    padding-left: 5.5rem;\n    padding-right: 2rem;\n}\n}\n@media screen and (max-width: 768px) {\n.p-header[data-v-6bb40b95] {\n    padding: 0 4.75rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.p-header.p-mini-header[data-v-6bb40b95] {\n    min-height: 2.75rem;\n}\n}\n.p-header .c-toggle.sidebar[data-v-6bb40b95] {\n  right: 0;\n}\n@media screen and (min-width: 1200px) {\n.p-header .c-toggle.sidebar[data-v-6bb40b95] {\n    display: none;\n}\n}\n.p-title[data-v-6bb40b95] {\n  display: flex;\n  align-items: center;\n}\n.p-title > span[data-v-6bb40b95] {\n  width: fit-content;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 1199px) {\n.p-title[data-v-6bb40b95] {\n    max-width: 65vw;\n}\n}\n.c-logo[data-v-6bb40b95] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n@media screen and (min-width: 1200px) {\n.c-logo[data-v-6bb40b95] {\n    display: none;\n}\n}\n.p-sidebar[data-v-6bb40b95] {\n  grid-area: p-sidebar;\n  position: fixed;\n  z-index: 40;\n  right: 0;\n  width: 16.5rem;\n  height: 100%;\n  background-color: var(--general_2);\n  transform: translateX(100%);\n  transition: transform 300ms;\n}\n.p-sidebar-inner[data-v-6bb40b95] {\n  height: 100%;\n  padding: 1.5rem 0.5rem 0.5rem 1.5rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media screen and (min-width: 1200px) {\n.p-sidebar[data-v-6bb40b95] {\n    transform: translateX(0%);\n}\n}\n.p-sidebar .c-toggle[data-v-6bb40b95] {\n  right: 100%;\n}\n@media screen and (max-width: 1199px) {\n.p-sidebar .c-toggle[data-v-6bb40b95] {\n    display: none;\n}\n}\n.p-sidebar.is-active[data-v-6bb40b95] {\n  transform: translateX(0);\n}\n.p-sidebar.is-active .c-toggle[data-v-6bb40b95] {\n  height: 100%;\n  display: block;\n}\n\n/*# sourceMappingURL=Page.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/Page.vue", "Page.vue"], "names": [], "mappings": "AAsHA;;EAEA,YAAA;EACA,YAAA;ACrHA;AACA;ADiHA;;IAMA,YAAA;IACA,WAAA;ACnHE;AACF;ADsHA;EACA,aAAA;EACA,wCAAA;EACA,qCAAA;EACA,uCAAA;ACnHA;AACA;AD8GA;IAOA,6CAAA;IACA,4DACA;ACnHE;AACF;ADuHA;EACA,iBAAA;EACA,wBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;ECpHE,iCAAiC;AACnC;ADsHA;EACA,eAAA;ACpHA;AACA;ADyGA;IAcA,wBAAA;ACpHE;AACF;AACA;ADoGA;IAkBA,WAAA;IACA,cAAA;IACA,kBAAA;IACA,mBAhDA;ACnEE;AACF;ADsHA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;ACnHA;AACA;AD8GA;IAOA,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,gBAAA;IACA,MAAA;IACA,4BAAA;IACA,UAAA;IACA,kBAAA;AClHE;AACF;AACA;ADkGA;IAkBA,cAAA;IACA,qBAAA;IACA,gBAAA;IACA,mBAAA;IACA,oBA1EA;IA2EA,mBAAA;ACjHE;AACF;AACA;ADwFA;IA2BA,kBAAA;AChHE;AACF;AACA;ADiHA;IAEA,mBAAA;AChHE;AACF;ADmHA;EACA,QAAA;ACjHA;AACA;AD+GA;IAIA,aAAA;AChHE;AACF;ADoHA;EACA,aAAA;EACA,mBAAA;ACjHA;ADmHA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;ACjHA;AACA;ADwGA;IAYA,eAAA;ACjHE;AACF;ADoHA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;ACjHA;AACA;AD6GA;IAMA,aAAA;AChHE;AACF;ADmHA;EACA,oBAAA;EACA,eAAA;EACA,WAAA;EACA,QAAA;EACA,cAAA;EACA,YAAA;EACA,kCAAA;EACA,2BAAA;EACA,2BAAA;AChHA;ADkHA;EACA,YAAA;EACA,oCAAA;EACA,cAAA;EACA,iCAAA;AChHA;AACA;ADgGA;IAmBA,yBAAA;AChHE;AACF;ADkHA;EACA,WAAA;AChHA;AACA;AD8GA;IAIA,aAAA;AC/GE;AACF;ADkHA;EACA,wBAAA;AChHA;ADkHA;EACA,YAAA;EACA,cAAA;AChHA;;AAEA,mCAAmC", "file": "Page.vue", "sourcesContent": [`<template lang='pug'>
div(:data-test='pageTestName + "-page"' :class='$scopedSlots.sidebar ? "p-with-sidebar" : "p-no-sidebar"')
  header.p-header(
    :class='miniHeader ? "p-mini-header" : ""'
  )
    slot(name='header')
    h1.is-title-2.p-title(:data-test='pageTestHeaderName' v-if='$slots.title')
      img.c-logo(
        src='/assets/images/group-income-icon-transparent.png'
        alt=''
      )
      span
        slot(name='title')

    toggle(v-if='$scopedSlots.sidebar' @toggle='toggleMenu' element='sidebar' :aria-expanded='ephemeral.isActive' :show-badge='true')
    slot(name='description')

  main.p-main(:class='mainClass')
    slot

  section.p-sidebar(
    v-if='$scopedSlots.sidebar'
    :class='{ "is-active": ephemeral.isActive }'
  )
    i18n.sr-only(tag='h2') Page details
    toggle(@toggle='toggleMenu' element='sidebar' :aria-expanded='ephemeral.isActive')
    .p-sidebar-inner(:inert='isInert')
      slot(name='sidebar' :toggle='toggleMenuIfTouch')
</template>

<script>
import Toggle from '../../../frontend/views/components/Toggle.vue'
import { DESKTOP } from '../../../frontend/views/utils/breakpoints.js'
import { debounce } from 'turtledash'

export default ({
  name: 'Page',
  components: {
    Toggle
  },
  props: {
    pageTestName: String,
    pageTestHeaderName: String,
    mainClass: String,
    miniHeader: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      config: {
        debounceResize: debounce(this.checkIsTouch, 250)
      },
      ephemeral: {
        isActive: false,
        isTouch: null
      }
    }
  },
  created () {
    this.checkIsTouch()
  },
  mounted () {
    // TODO - Create a single resize listener to be reused on components
    window.addEventListener('resize', this.config.debounceResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.config.debounceResize)
  },
  computed: {
    isInert () {
      return !this.ephemeral.isActive && this.ephemeral.isTouch
    }
  },
  methods: {
    toggleMenuIfTouch () {
      if (this.ephemeral.isTouch) {
        this.toggleMenu()
      }
    },
    toggleMenu () {
      this.ephemeral.isActive = !this.ephemeral.isActive
    },
    checkIsTouch () {
      this.ephemeral.isTouch = window.innerWidth < DESKTOP
    },
    findAndScrollToAnchor (str) {
      const anchorEl = document.getElementById(str) || this.$el.querySelector(\`[name="\${CSS.escape(str)}"]\`)
      if (anchorEl) {
        anchorEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if (anchorEl.tabIndex >= 0 || anchorEl.hasAttribute('tabindex')) {
          anchorEl.focus()
        }
      }
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler (to, from) {
        if (to.hash && from?.hash !== to.hash) {
          setTimeout(() => {
            this.findAndScrollToAnchor(to.hash.slice(1))
          }, 100)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

$pagePadding: 1rem;
$pagePaddingDesktop: 5.5rem;

.p-with-sidebar,
.p-no-sidebar {
  height: 100%;
  width: 100vw;

  @include desktop {
    height: 100%;
    width: auto;
  }
}

.p-with-sidebar {
  display: grid;
  grid-template-areas: "p-header" "p-main";
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);

  @include desktop {
    grid-template-columns: minmax(0, 1fr) $rightSideWidth;
    grid-template-areas:
      "p-header p-sidebar"
      "p-main p-sidebar";
  }
}

.p-main {
  grid-area: p-main;
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding-top: 1.5rem;
  max-width: 50rem;
  height: fit-content;
  @include overflow-touch;

  &.full-width {
    max-width: 100%;
  }

  @include tablet {
    width: calc(100% - 4rem);
  }

  @include desktop {
    width: auto;
    padding-top: 0;
    margin-right: 2rem;
    margin-left: $pagePaddingDesktop;
  }
}

.p-header {
  grid-area: p-header;
  transition: padding ease-out 300ms;
  text-align: center;
  min-height: 4rem;

  @include touch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: $general_2;
    z-index: 3;
    padding: 0 5.75rem;
  }

  @include desktop {
    display: block;
    padding-top: 1.125rem;
    text-align: left;
    min-height: 4.75rem;
    padding-left: $pagePaddingDesktop;
    padding-right: 2rem;
  }

  @include phone {
    padding: 0 4.75rem;
  }

  &.p-mini-header {
    @include desktop {
      min-height: 2.75rem;
    }
  }

  .c-toggle.sidebar {
    right: 0;

    @include desktop {
      display: none;
    }
  }
}

.p-title {
  display: flex;
  align-items: center;

  & > span {
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @include touch {
    max-width: 65vw;
  }
}

.c-logo {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;

  @include desktop {
    display: none;
  }
}

.p-sidebar {
  grid-area: p-sidebar;
  position: fixed;
  z-index: $zindex-sidebar;
  right: 0;
  width: $rightSideWidth;
  height: 100%;
  background-color: $general_2;
  transform: translateX(100%);
  transition: transform $transitionSpeed;

  &-inner {
    height: 100%;
    padding: 1.5rem 0.5rem 0.5rem 1.5rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  @include desktop {
    transform: translateX(0%);
  }

  .c-toggle {
    right: 100%;

    @include until($desktop) {
      display: none;
    }
  }

  &.is-active {
    transform: translateX(0);

    .c-toggle {
      height: 100%;
      display: block;
    }
  }
}
</style>
`, '.p-with-sidebar,\n.p-no-sidebar {\n  height: 100%;\n  width: 100vw;\n}\n@media screen and (min-width: 1200px) {\n  .p-with-sidebar,\n  .p-no-sidebar {\n    height: 100%;\n    width: auto;\n  }\n}\n\n.p-with-sidebar {\n  display: grid;\n  grid-template-areas: "p-header" "p-main";\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: auto minmax(0, 1fr);\n}\n@media screen and (min-width: 1200px) {\n  .p-with-sidebar {\n    grid-template-columns: minmax(0, 1fr) 16.5rem;\n    grid-template-areas: "p-header p-sidebar" "p-main p-sidebar";\n  }\n}\n\n.p-main {\n  grid-area: p-main;\n  width: calc(100% - 2rem);\n  margin: 0 auto;\n  padding-top: 1.5rem;\n  max-width: 50rem;\n  height: fit-content;\n  -webkit-overflow-scrolling: touch;\n}\n.p-main.full-width {\n  max-width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .p-main {\n    width: calc(100% - 4rem);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .p-main {\n    width: auto;\n    padding-top: 0;\n    margin-right: 2rem;\n    margin-left: 5.5rem;\n  }\n}\n\n.p-header {\n  grid-area: p-header;\n  transition: padding ease-out 300ms;\n  text-align: center;\n  min-height: 4rem;\n}\n@media screen and (max-width: 1199px) {\n  .p-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    background: var(--general_2);\n    z-index: 3;\n    padding: 0 5.75rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .p-header {\n    display: block;\n    padding-top: 1.125rem;\n    text-align: left;\n    min-height: 4.75rem;\n    padding-left: 5.5rem;\n    padding-right: 2rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .p-header {\n    padding: 0 4.75rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .p-header.p-mini-header {\n    min-height: 2.75rem;\n  }\n}\n.p-header .c-toggle.sidebar {\n  right: 0;\n}\n@media screen and (min-width: 1200px) {\n  .p-header .c-toggle.sidebar {\n    display: none;\n  }\n}\n\n.p-title {\n  display: flex;\n  align-items: center;\n}\n.p-title > span {\n  width: fit-content;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 1199px) {\n  .p-title {\n    max-width: 65vw;\n  }\n}\n\n.c-logo {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-logo {\n    display: none;\n  }\n}\n\n.p-sidebar {\n  grid-area: p-sidebar;\n  position: fixed;\n  z-index: 40;\n  right: 0;\n  width: 16.5rem;\n  height: 100%;\n  background-color: var(--general_2);\n  transform: translateX(100%);\n  transition: transform 300ms;\n}\n.p-sidebar-inner {\n  height: 100%;\n  padding: 1.5rem 0.5rem 0.5rem 1.5rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media screen and (min-width: 1200px) {\n  .p-sidebar {\n    transform: translateX(0%);\n  }\n}\n.p-sidebar .c-toggle {\n  right: 100%;\n}\n@media screen and (max-width: 1199px) {\n  .p-sidebar .c-toggle {\n    display: none;\n  }\n}\n.p-sidebar.is-active {\n  transform: translateX(0);\n}\n.p-sidebar.is-active .c-toggle {\n  height: 100%;\n  display: block;\n}\n\n/*# sourceMappingURL=Page.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-6bb40b95";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
div(:data-test='pageTestName + "-page"' :class='$scopedSlots.sidebar ? "p-with-sidebar" : "p-no-sidebar"')
  header.p-header(
    :class='miniHeader ? "p-mini-header" : ""'
  )
    slot(name='header')
    h1.is-title-2.p-title(:data-test='pageTestHeaderName' v-if='$slots.title')
      img.c-logo(
        src='/assets/images/group-income-icon-transparent.png'
        alt=''
      )
      span
        slot(name='title')

    toggle(v-if='$scopedSlots.sidebar' @toggle='toggleMenu' element='sidebar' :aria-expanded='ephemeral.isActive' :show-badge='true')
    slot(name='description')

  main.p-main(:class='mainClass')
    slot

  section.p-sidebar(
    v-if='$scopedSlots.sidebar'
    :class='{ "is-active": ephemeral.isActive }'
  )
    i18n.sr-only(tag='h2') Page details
    toggle(@toggle='toggleMenu' element='sidebar' :aria-expanded='ephemeral.isActive')
    .p-sidebar-inner(:inert='isInert')
      slot(name='sidebar' :toggle='toggleMenuIfTouch')
</template>

<script>
import Toggle from '../../../frontend/views/components/Toggle.vue'
import { DESKTOP } from '../../../frontend/views/utils/breakpoints.js'
import { debounce } from 'turtledash'

export default ({
  name: 'Page',
  components: {
    Toggle
  },
  props: {
    pageTestName: String,
    pageTestHeaderName: String,
    mainClass: String,
    miniHeader: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      config: {
        debounceResize: debounce(this.checkIsTouch, 250)
      },
      ephemeral: {
        isActive: false,
        isTouch: null
      }
    }
  },
  created () {
    this.checkIsTouch()
  },
  mounted () {
    // TODO - Create a single resize listener to be reused on components
    window.addEventListener('resize', this.config.debounceResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.config.debounceResize)
  },
  computed: {
    isInert () {
      return !this.ephemeral.isActive && this.ephemeral.isTouch
    }
  },
  methods: {
    toggleMenuIfTouch () {
      if (this.ephemeral.isTouch) {
        this.toggleMenu()
      }
    },
    toggleMenu () {
      this.ephemeral.isActive = !this.ephemeral.isActive
    },
    checkIsTouch () {
      this.ephemeral.isTouch = window.innerWidth < DESKTOP
    },
    findAndScrollToAnchor (str) {
      const anchorEl = document.getElementById(str) || this.$el.querySelector(\`[name="\${CSS.escape(str)}"]\`)
      if (anchorEl) {
        anchorEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if (anchorEl.tabIndex >= 0 || anchorEl.hasAttribute('tabindex')) {
          anchorEl.focus()
        }
      }
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler (to, from) {
        if (to.hash && from?.hash !== to.hash) {
          setTimeout(() => {
            this.findAndScrollToAnchor(to.hash.slice(1))
          }, 100)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

$pagePadding: 1rem;
$pagePaddingDesktop: 5.5rem;

.p-with-sidebar,
.p-no-sidebar {
  height: 100%;
  width: 100vw;

  @include desktop {
    height: 100%;
    width: auto;
  }
}

.p-with-sidebar {
  display: grid;
  grid-template-areas: "p-header" "p-main";
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);

  @include desktop {
    grid-template-columns: minmax(0, 1fr) $rightSideWidth;
    grid-template-areas:
      "p-header p-sidebar"
      "p-main p-sidebar";
  }
}

.p-main {
  grid-area: p-main;
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding-top: 1.5rem;
  max-width: 50rem;
  height: fit-content;
  @include overflow-touch;

  &.full-width {
    max-width: 100%;
  }

  @include tablet {
    width: calc(100% - 4rem);
  }

  @include desktop {
    width: auto;
    padding-top: 0;
    margin-right: 2rem;
    margin-left: $pagePaddingDesktop;
  }
}

.p-header {
  grid-area: p-header;
  transition: padding ease-out 300ms;
  text-align: center;
  min-height: 4rem;

  @include touch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: $general_2;
    z-index: 3;
    padding: 0 5.75rem;
  }

  @include desktop {
    display: block;
    padding-top: 1.125rem;
    text-align: left;
    min-height: 4.75rem;
    padding-left: $pagePaddingDesktop;
    padding-right: 2rem;
  }

  @include phone {
    padding: 0 4.75rem;
  }

  &.p-mini-header {
    @include desktop {
      min-height: 2.75rem;
    }
  }

  .c-toggle.sidebar {
    right: 0;

    @include desktop {
      display: none;
    }
  }
}

.p-title {
  display: flex;
  align-items: center;

  & > span {
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @include touch {
    max-width: 65vw;
  }
}

.c-logo {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;

  @include desktop {
    display: none;
  }
}

.p-sidebar {
  grid-area: p-sidebar;
  position: fixed;
  z-index: $zindex-sidebar;
  right: 0;
  width: $rightSideWidth;
  height: 100%;
  background-color: $general_2;
  transform: translateX(100%);
  transition: transform $transitionSpeed;

  &-inner {
    height: 100%;
    padding: 1.5rem 0.5rem 0.5rem 1.5rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  @include desktop {
    transform: translateX(0%);
  }

  .c-toggle {
    right: 100%;

    @include until($desktop) {
      display: none;
    }
  }

  &.is-active {
    transform: translateX(0);

    .c-toggle {
      height: 100%;
      display: block;
    }
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
function __vue_create_injector__3() {
  const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var Page_default = __vue_component__3;

export {
  Badge_default,
  Toggle_default,
  Page_default
};
//# sourceMappingURL=chunk-EUGZI4EZ-cached.js.map
