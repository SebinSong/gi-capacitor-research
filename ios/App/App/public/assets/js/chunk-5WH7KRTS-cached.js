import {
  require_vue_clickaway_common
} from "./chunk-LA43UFR3-cached.js";
import {
  ListItem_default
} from "./chunk-LUECJCV2-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/components/menu/MenuParent.vue
var __vue_script__ = {
  name: "MenuParent",
  data() {
    return {
      config: {
        Menu: {
          isActive: false,
          handleSelect: this.handleSelect,
          handleTrigger: this.handleTrigger,
          closeMenu: this.closeMenu
        }
      }
    };
  },
  provide() {
    return {
      Menu: this.config.Menu
    };
  },
  methods: {
    handleToggle(e) {
      if (this.config.Menu.isActive === e.target.open) return;
      this.config.Menu.isActive = e.target.open;
      this.$emit(this.config.Menu.isActive ? "menu-open" : "menu-close");
    },
    handleTrigger() {
      this.$refs.details.open = true;
    },
    handleSelect(itemId) {
      this.closeMenu();
      this.$emit("select", itemId);
    },
    closeMenu() {
      this.$refs.details.open = false;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "details",
    { ref: "details", staticClass: "c-menu", on: { toggle: _vm.handleToggle } },
    [_vm._t("default")],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-3f4b0003_0", { source: ".c-menu[data-v-3f4b0003] {\n  position: relative;\n}\n\n/*# sourceMappingURL=MenuParent.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/menu/MenuParent.vue", "MenuParent.vue"], "names": [], "mappings": "AAmDA;EACA,kBAAA;AClDA;;AAEA,yCAAyC", "file": "MenuParent.vue", "sourcesContent": ["<template lang='pug'>\n  details.c-menu(:ref='\"details\"' @toggle='handleToggle')\n    slot\n</template>\n\n<script>\nexport default ({\n  name: 'MenuParent',\n  data () {\n    return {\n      config: {\n        Menu: {\n          isActive: false,\n          handleSelect: this.handleSelect,\n          handleTrigger: this.handleTrigger,\n          closeMenu: this.closeMenu\n        }\n      }\n    }\n  },\n  provide () {\n    return {\n      Menu: this.config.Menu\n    }\n  },\n  methods: {\n    handleToggle (e) {\n      if (this.config.Menu.isActive === e.target.open) return\n      this.config.Menu.isActive = e.target.open\n      // Because this handler relies on the native 'toggle' event, this should\n      // work every time the menu is opened or closed. Hence, the custom event\n      // is emitted here for reliability and doing it in `closeMenu` or\n      // `handleTrigger` (or `handleSelect`, which implies `closeMenu`) is\n      // redundant.\n      this.$emit(this.config.Menu.isActive ? 'menu-open' : 'menu-close')\n    },\n    handleTrigger () {\n      this.$refs.details.open = true\n    },\n    handleSelect (itemId) {\n      this.closeMenu()\n      this.$emit('select', itemId)\n    },\n    closeMenu () {\n      this.$refs.details.open = false\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n.c-menu {\n  position: relative;\n}\n</style>\n", ".c-menu {\n  position: relative;\n}\n\n/*# sourceMappingURL=MenuParent.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-3f4b0003";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  details.c-menu(:ref='\"details\"' @toggle='handleToggle')\n    slot\n</template>\n\n<script>\nexport default ({\n  name: 'MenuParent',\n  data () {\n    return {\n      config: {\n        Menu: {\n          isActive: false,\n          handleSelect: this.handleSelect,\n          handleTrigger: this.handleTrigger,\n          closeMenu: this.closeMenu\n        }\n      }\n    }\n  },\n  provide () {\n    return {\n      Menu: this.config.Menu\n    }\n  },\n  methods: {\n    handleToggle (e) {\n      if (this.config.Menu.isActive === e.target.open) return\n      this.config.Menu.isActive = e.target.open\n      // Because this handler relies on the native 'toggle' event, this should\n      // work every time the menu is opened or closed. Hence, the custom event\n      // is emitted here for reliability and doing it in `closeMenu` or\n      // `handleTrigger` (or `handleSelect`, which implies `closeMenu`) is\n      // redundant.\n      this.$emit(this.config.Menu.isActive ? 'menu-open' : 'menu-close')\n    },\n    handleTrigger () {\n      this.$refs.details.open = true\n    },\n    handleSelect (itemId) {\n      this.closeMenu()\n      this.$emit('select', itemId)\n    },\n    closeMenu () {\n      this.$refs.details.open = false\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n.c-menu {\n  position: relative;\n}\n</style>\n";
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
var MenuParent_default = __vue_component__;

// frontend/views/components/menu/MenuTrigger.vue
var __vue_script__2 = {
  name: "MenuTrigger",
  props: {
    hideWhenActive: Boolean
  },
  inject: ["Menu"],
  computed: {
    isActive() {
      return this.Menu.isActive;
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "summary",
    {
      staticClass: "button",
      class: { "is-active": _vm.isActive },
      attrs: { "data-test": "menuTrigger" }
    },
    [
      (_vm.hideWhenActive ? !_vm.isActive : true) ? _vm._t("default") : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-225b29c8_0", { source: "summary[data-v-225b29c8] {\n  list-style: none;\n}\nsummary[data-v-225b29c8]::-webkit-details-marker, summary[data-v-225b29c8]::marker {\n  display: none;\n}\n\n/*# sourceMappingURL=MenuTrigger.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/menu/MenuTrigger.vue", "MenuTrigger.vue"], "names": [], "mappings": "AAwBA;EACA,gBAAA;ACvBA;ADyBA;EAEA,aAAA;ACxBA;;AAEA,0CAA0C", "file": "MenuTrigger.vue", "sourcesContent": [`<template lang='pug'>
summary.button(
  data-test='menuTrigger'
  :class='{ "is-active" : isActive }'
)
  slot(v-if='hideWhenActive ? !isActive : true')
</template>

<script>
export default ({
  name: 'MenuTrigger',
  props: {
    hideWhenActive: Boolean
  },
  inject: ['Menu'],
  computed: {
    isActive () {
      return this.Menu.isActive
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
summary {
  list-style: none;

  &::-webkit-details-marker,
  &::marker {
    display: none;
  }
}
</style>
`, "summary {\n  list-style: none;\n}\nsummary::-webkit-details-marker, summary::marker {\n  display: none;\n}\n\n/*# sourceMappingURL=MenuTrigger.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-225b29c8";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
summary.button(
  data-test='menuTrigger'
  :class='{ "is-active" : isActive }'
)
  slot(v-if='hideWhenActive ? !isActive : true')
</template>

<script>
export default ({
  name: 'MenuTrigger',
  props: {
    hideWhenActive: Boolean
  },
  inject: ['Menu'],
  computed: {
    isActive () {
      return this.Menu.isActive
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
summary {
  list-style: none;

  &::-webkit-details-marker,
  &::marker {
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
var MenuTrigger_default = __vue_component__2;

// frontend/views/components/menu/MenuContent.vue
var import_vue_clickaway = __toESM(require_vue_clickaway_common());
var __vue_script__3 = {
  name: "MenuOptions",
  mixins: [
    import_vue_clickaway.mixin
  ],
  inject: ["Menu"],
  computed: {
    isActive() {
      return this.Menu.isActive;
    }
  },
  methods: {
    closeMenu(e) {
      if (e.target !== this.$el && e.target?.closest("details") === this.$el.closest("details")) {
        return;
      }
      this.Menu.closeMenu();
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
      staticClass: "c-content",
      class: { "is-active": _vm.isActive },
      attrs: { "data-test": "menuContent" }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "on-clickaway",
              rawName: "v-on-clickaway",
              value: _vm.closeMenu,
              expression: "closeMenu"
            }
          ],
          staticClass: "c-content-wrapper"
        },
        [_vm._t("default")],
        2
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-32dc7e91_0", { source: ".c-content-wrapper[data-v-32dc7e91] {\n  min-height: 100%;\n}\n@media screen and (max-width: 768px) {\n.c-responsive-menu .c-content-wrapper[data-v-32dc7e91] {\n    border-radius: 3px 3px 0 0;\n    background-color: var(--background_0);\n    position: relative;\n    z-index: 2;\n    padding-bottom: 2rem;\n    min-height: unset;\n}\n}\n.c-content[data-v-32dc7e91] {\n  position: absolute;\n  top: 0;\n  left: 0.5rem;\n  right: 0.5rem;\n  z-index: 10;\n  border-radius: 3px;\n  background-color: var(--background_0);\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.is-dark-theme .c-content[data-v-32dc7e91] {\n  box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);\n}\n.c-content.is-active[data-v-32dc7e91] {\n  pointer-events: initial;\n  max-height: 25rem;\n  opacity: 1;\n  transition: max-height cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s 100ms, opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms 100ms;\n}\n@media screen and (max-width: 768px) {\n.c-content.c-responsive-menu[data-v-32dc7e91] {\n    width: 100vw;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0;\n    margin: 0;\n    border-radius: 0;\n    background-color: rgba(0, 0, 0, 0.7) !important;\n    display: flex;\n    flex-direction: column-reverse;\n    max-height: unset;\n    max-width: unset;\n    position: fixed;\n    z-index: 40;\n}\n}\n.c-content[data-v-32dc7e91]  .c-item {\n  padding: 0;\n}\n.c-content[data-v-32dc7e91]  .c-item-link {\n  width: 100%;\n}\n.c-content[data-v-32dc7e91]  .c-item-link i {\n  margin-right: 0.5rem;\n}\n\n/*# sourceMappingURL=MenuContent.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/menu/MenuContent.vue", "MenuContent.vue"], "names": [], "mappings": "AAyCA;EACA,gBAAA;ACxCA;AAEA;ADyCA;IAEA,0BAAA;IACA,qCAAA;IACA,kBAAA;IACA,UAAA;IACA,oBAAA;IACA,iBAAA;ACxCE;AACF;AD2CA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,qCAAA;EACA,kDAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EACA,sBAAA;EACA,mBAAA;ACxCA;AD0CA;EACA,oDAAA;ACxCA;AD2CA;EAGA,uBAAA;EACA,iBAAA;EACA,UAAA;EACA,gIAAA;AC3CA;AACA;AD6CA;IAEA,YAAA;IACA,YAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;IACA,SAAA;IACA,gBAAA;IACA,+CAAA;IACA,aAAA;IACA,8BAAA;IACA,iBAAA;IACA,gBAAA;IACA,eAAA;IACA,WAAA;AC5CE;AACF;AD+CA;EACA,UAAA;AC7CA;ADgDA;EACA,WAAA;AC9CA;ADgDA;EACA,oBAAA;AC9CA;;AAEA,0CAA0C", "file": "MenuContent.vue", "sourcesContent": [`<template lang='pug'>
.c-content(
  :class='{ "is-active": isActive }'
  data-test='menuContent'
)
  .c-content-wrapper(
    v-on-clickaway='closeMenu'
  )
    slot
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default ({
  name: 'MenuOptions',
  mixins: [
    clickaway
  ],
  inject: ['Menu'],
  computed: {
    isActive () {
      return this.Menu.isActive
    }
  },
  methods: {
    closeMenu (e) {
      // Prevent closing the menu when clicking inside of the parent element,
      // except if the event was on \`.c-content\` (.c-responsive-menu)
      if (e.target !== this.$el && e.target?.closest('details') === this.$el.closest('details')) {
        return
      }
      this.Menu.closeMenu()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-content-wrapper {
  min-height: 100%;
}

.c-responsive-menu .c-content-wrapper {
  @include phone {
    border-radius: $radius $radius 0 0;
    background-color: $background;
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
    min-height: unset;
  }
}

.c-content {
  position: absolute;
  top: 0;
  left: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  border-radius: $radius;
  background-color: $background;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  .is-dark-theme & {
    box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);
  }

  &.is-active {
    // Is that enought for every menu?
    // Should we use mask transition instead?
    pointer-events: initial;
    max-height: 25rem;
    opacity: 1;
    transition: max-height cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s 100ms, opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms 100ms;
  }

  &.c-responsive-menu {
    @include phone {
      width: 100vw;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0;
      margin: 0;
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0.7) !important;
      display: flex;
      flex-direction: column-reverse;
      max-height: unset;
      max-width: unset;
      position: fixed;
      z-index: 40;
    }
  }

  ::v-deep .c-item {
    padding: 0;
  }

  ::v-deep .c-item-link {
    width: 100%;

    i {
      margin-right: 0.5rem;
    }
  }
}
</style>
`, ".c-content-wrapper {\n  min-height: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .c-responsive-menu .c-content-wrapper {\n    border-radius: 3px 3px 0 0;\n    background-color: var(--background_0);\n    position: relative;\n    z-index: 2;\n    padding-bottom: 2rem;\n    min-height: unset;\n  }\n}\n\n.c-content {\n  position: absolute;\n  top: 0;\n  left: 0.5rem;\n  right: 0.5rem;\n  z-index: 10;\n  border-radius: 3px;\n  background-color: var(--background_0);\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.is-dark-theme .c-content {\n  box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);\n}\n.c-content.is-active {\n  pointer-events: initial;\n  max-height: 25rem;\n  opacity: 1;\n  transition: max-height cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s 100ms, opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms 100ms;\n}\n@media screen and (max-width: 768px) {\n  .c-content.c-responsive-menu {\n    width: 100vw;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0;\n    margin: 0;\n    border-radius: 0;\n    background-color: rgba(0, 0, 0, 0.7) !important;\n    display: flex;\n    flex-direction: column-reverse;\n    max-height: unset;\n    max-width: unset;\n    position: fixed;\n    z-index: 40;\n  }\n}\n.c-content ::v-deep .c-item {\n  padding: 0;\n}\n.c-content ::v-deep .c-item-link {\n  width: 100%;\n}\n.c-content ::v-deep .c-item-link i {\n  margin-right: 0.5rem;\n}\n\n/*# sourceMappingURL=MenuContent.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-32dc7e91";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-content(
  :class='{ "is-active": isActive }'
  data-test='menuContent'
)
  .c-content-wrapper(
    v-on-clickaway='closeMenu'
  )
    slot
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default ({
  name: 'MenuOptions',
  mixins: [
    clickaway
  ],
  inject: ['Menu'],
  computed: {
    isActive () {
      return this.Menu.isActive
    }
  },
  methods: {
    closeMenu (e) {
      // Prevent closing the menu when clicking inside of the parent element,
      // except if the event was on \`.c-content\` (.c-responsive-menu)
      if (e.target !== this.$el && e.target?.closest('details') === this.$el.closest('details')) {
        return
      }
      this.Menu.closeMenu()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-content-wrapper {
  min-height: 100%;
}

.c-responsive-menu .c-content-wrapper {
  @include phone {
    border-radius: $radius $radius 0 0;
    background-color: $background;
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
    min-height: unset;
  }
}

.c-content {
  position: absolute;
  top: 0;
  left: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  border-radius: $radius;
  background-color: $background;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  .is-dark-theme & {
    box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);
  }

  &.is-active {
    // Is that enought for every menu?
    // Should we use mask transition instead?
    pointer-events: initial;
    max-height: 25rem;
    opacity: 1;
    transition: max-height cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s 100ms, opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms 100ms;
  }

  &.c-responsive-menu {
    @include phone {
      width: 100vw;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0;
      margin: 0;
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0.7) !important;
      display: flex;
      flex-direction: column-reverse;
      max-height: unset;
      max-width: unset;
      position: fixed;
      z-index: 40;
    }
  }

  ::v-deep .c-item {
    padding: 0;
  }

  ::v-deep .c-item-link {
    width: 100%;

    i {
      margin-right: 0.5rem;
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
var MenuContent_default = __vue_component__3;

// frontend/views/components/menu/MenuHeader.vue
var __vue_script__4 = {
  name: "MenuHeader"
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-header" }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-93e966f4_0", { source: ".c-header[data-v-93e966f4] {\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=MenuHeader.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/menu/MenuHeader.vue", "MenuHeader.vue"], "names": [], "mappings": "AAcA;EACA,oBAAA;EACA,iBAAA;EACA,yBAAA;ACbA;;AAEA,yCAAyC", "file": "MenuHeader.vue", "sourcesContent": [`<template lang='pug'>
.c-header
  slot
</template>

<script>
export default ({
  name: 'MenuHeader'
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-header {
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
`, ".c-header {\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=MenuHeader.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-93e966f4";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-header
  slot
</template>

<script>
export default ({
  name: 'MenuHeader'
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-header {
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
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
function __vue_create_injector__4() {
  const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var MenuHeader_default = __vue_component__4;

// frontend/views/components/menu/MenuItem.vue
var __vue_script__5 = {
  name: "MenuItem",
  inject: ["Menu"],
  components: { ListItem: ListItem_default },
  inheritAttrs: false,
  methods: {
    handleSelect() {
      this.Menu.handleSelect(this.$attrs["item-id"]);
    }
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "list-item",
    _vm._g(
      _vm._b(
        {
          staticClass: "c-menuItem",
          attrs: { "disable-radius": "" },
          on: { click: _vm.handleSelect }
        },
        "list-item",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  );
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-258e197c_0", { source: '.c-menuItem[data-v-258e197c] {\n  width: 100%;\n}\n.c-menuItem[data-v-258e197c]  .c-item-link {\n  height: 2rem;\n  font-family: "Lato";\n}\n.c-menuItem[data-v-258e197c]  .c-item-link i {\n  color: var(--general_0);\n}\n.c-menuItem[data-v-258e197c]  .c-item-link.is-active, .c-menuItem[data-v-258e197c]  .c-item-link:hover, .c-menuItem[data-v-258e197c]  .c-item-link:focus {\n  background-color: var(--general_2);\n}\n.c-menuItem[data-v-258e197c]  .c-item-link.is-active::before, .c-menuItem[data-v-258e197c]  .c-item-link:hover::before, .c-menuItem[data-v-258e197c]  .c-item-link:focus::before {\n  content: none;\n}\n\n/*# sourceMappingURL=MenuItem.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/menu/MenuItem.vue", "MenuItem.vue"], "names": [], "mappings": "AA0BA;EACA,WAAA;ACzBA;AD2BA;EACA,YAAA;EACA,mBAAA;ACzBA;AD2BA;EACA,uBAAA;ACzBA;AD4BA;EAGA,kCAAA;AC5BA;AD8BA;EACA,aAAA;AC5BA;;AAEA,uCAAuC", "file": "MenuItem.vue", "sourcesContent": [`<template lang='pug'>
//
  MenuItem is a wrapper around ListItem with extra styles
  and to update MenuSelect when an option was selected.
  QUESTION: Is v-bind='$attrs' the correct way to pass down
  the props and slot from MenuItem to ListItem?
list-item.c-menuItem(disable-radius='' v-bind='$attrs' v-on='$listeners' @click='handleSelect')
  slot
</template>
<script>
import ListItem from '../../../../frontend/views/components/ListItem.vue'
export default ({
  name: 'MenuItem',
  inject: ['Menu'],
  components: { ListItem },
  inheritAttrs: false,
  methods: {
    handleSelect () {
      this.Menu.handleSelect(this.$attrs['item-id']) // Use $attrs to access passed props
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-menuItem {
  width: 100%;

  ::v-deep .c-item-link {
    height: 2rem;
    font-family: "Lato";

    i {
      color: $general_0;
    }

    &.is-active,
    &:hover,
    &:focus {
      background-color: $general_2;

      &::before {
        content: none;
      }
    }
  }
}
</style>
`, '.c-menuItem {\n  width: 100%;\n}\n.c-menuItem ::v-deep .c-item-link {\n  height: 2rem;\n  font-family: "Lato";\n}\n.c-menuItem ::v-deep .c-item-link i {\n  color: var(--general_0);\n}\n.c-menuItem ::v-deep .c-item-link.is-active, .c-menuItem ::v-deep .c-item-link:hover, .c-menuItem ::v-deep .c-item-link:focus {\n  background-color: var(--general_2);\n}\n.c-menuItem ::v-deep .c-item-link.is-active::before, .c-menuItem ::v-deep .c-item-link:hover::before, .c-menuItem ::v-deep .c-item-link:focus::before {\n  content: none;\n}\n\n/*# sourceMappingURL=MenuItem.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-258e197c";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
//
  MenuItem is a wrapper around ListItem with extra styles
  and to update MenuSelect when an option was selected.
  QUESTION: Is v-bind='$attrs' the correct way to pass down
  the props and slot from MenuItem to ListItem?
list-item.c-menuItem(disable-radius='' v-bind='$attrs' v-on='$listeners' @click='handleSelect')
  slot
</template>
<script>
import ListItem from '../../../../frontend/views/components/ListItem.vue'
export default ({
  name: 'MenuItem',
  inject: ['Menu'],
  components: { ListItem },
  inheritAttrs: false,
  methods: {
    handleSelect () {
      this.Menu.handleSelect(this.$attrs['item-id']) // Use $attrs to access passed props
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-menuItem {
  width: 100%;

  ::v-deep .c-item-link {
    height: 2rem;
    font-family: "Lato";

    i {
      color: $general_0;
    }

    &.is-active,
    &:hover,
    &:focus {
      background-color: $general_2;

      &::before {
        content: none;
      }
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
function __vue_create_injector__5() {
  const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__5,
  void 0,
  void 0
);
var MenuItem_default = __vue_component__5;

export {
  MenuParent_default,
  MenuTrigger_default,
  MenuContent_default,
  MenuHeader_default,
  MenuItem_default
};
//# sourceMappingURL=chunk-5WH7KRTS-cached.js.map
