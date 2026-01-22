import {
  MenuContent_default,
  MenuHeader_default,
  MenuItem_default,
  MenuParent_default,
  MenuTrigger_default
} from "./chunk-5WH7KRTS-cached.js";

// frontend/views/components/ButtonDropdownMenu.vue
var __vue_script__ = {
  name: "ButtonDropdownMenu",
  components: {
    MenuParent: MenuParent_default,
    MenuTrigger: MenuTrigger_default,
    MenuContent: MenuContent_default
  },
  props: {
    buttonText: String,
    options: {
      type: Array
      /**
       * NOTE: Shape of the array must strictly follow below statement.
       *
       * - An item to be mapped to a 'menu-item' component:
       *  { type: 'item', id: string, name: string, icon: string, isDisabled?: boolean }
       *
       * - An item to be mapped to a 'menu-header' component:
       *  { type: 'header', name: string }
       */
    },
    boundEdge: {
      type: String,
      default: "right",
      validator: (val) => ["left", "right"].includes(val)
    }
  },
  methods: {
    propObj(item) {
      return item.type === "item" ? {
        tag: "button",
        "item-id": item.id,
        icon: item.icon,
        ...item.isDisabled ? { "disabled": true } : {}
      } : {};
    },
    onItemSelect(itemId) {
      this.$emit("select", itemId);
    }
  },
  data() {
    return {
      config: {
        components: {
          "item": MenuItem_default,
          "header": MenuHeader_default
        }
      }
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        select: this.onItemSelect
      };
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "menu-parent",
    _vm._g({ staticClass: "c-menu" }, _vm.listeners),
    [
      _c(
        "menu-trigger",
        {
          staticClass: "is-small c-trigger-btn",
          attrs: { "aria-label": _vm.buttonText }
        },
        [
          _vm._v(_vm._s(_vm.buttonText)),
          _c("i", { staticClass: "icon-angle-down is-suffix" })
        ]
      ),
      _c(
        "menu-content",
        { staticClass: "c-menu-content", class: "bound-to-" + _vm.boundEdge },
        [
          _c(
            "menu",
            [
              _vm.options ? _vm._l(_vm.options, function(item) {
                return _c(
                  _vm.config.components[item.type],
                  _vm._b(
                    { key: item.id || item.name, tag: "component" },
                    "component",
                    _vm.propObj(item),
                    false
                  ),
                  [_vm._v(_vm._s(item.name))]
                );
              }) : _vm._t("default")
            ],
            2
          )
        ]
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-c78aa494_0", { source: ".c-menu[data-v-c78aa494] {\n  position: relative;\n  width: max-content;\n}\n.c-menu .c-menu-content[data-v-c78aa494] {\n  min-width: 100%;\n  max-width: 16rem;\n  width: max-content;\n  top: 100%;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  left: unset;\n  right: 0;\n}\n.c-menu .c-menu-content.bound-to-left[data-v-c78aa494] {\n  left: 0;\n  right: unset;\n}\n.c-menu .c-menu-content[data-v-c78aa494]  .c-header {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--text_1);\n  line-height: 1rem;\n}\n.c-menu .c-menu-content[data-v-c78aa494]  .c-menuItem:not(:last-child) {\n  margin-bottom: 0.25rem;\n}\n.c-menu .c-menu-content[data-v-c78aa494]  .c-menuItem .c-item-link {\n  height: 1.875rem;\n}\n.c-menu .c-menu-content[data-v-c78aa494]  .c-menuItem i {\n  line-height: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.c-menu .c-menu-content[data-v-c78aa494]  .c-menuItem i,\n.c-menu .c-menu-content[data-v-c78aa494]  .c-menuItem .c-item-slot {\n  font-size: 0.875rem;\n}\n.c-trigger-btn i[data-v-c78aa494] {\n  transition: transform 250ms ease-in-out;\n}\n.c-trigger-btn.is-active > i[data-v-c78aa494] {\n  transform: rotate(180deg);\n}\n\n/*# sourceMappingURL=ButtonDropdownMenu.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/ButtonDropdownMenu.vue", "ButtonDropdownMenu.vue"], "names": [], "mappings": "AA0FA;EACA,kBAAA;EACA,kBAAA;ACzFA;AD2FA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;ACzFA;AD2FA;EACA,OAAA;EACA,YAAA;ACzFA;AD4FA;EAEA,kBAAA;EACA,gBAAA;EAEA,oBAAA;EACA,iBAAA;AC5FA;ADgGA;EACA,sBAAA;AC9FA;ADiGA;EACA,gBAAA;AC/FA;ADkGA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;AChGA;ADmGA;;EAEA,mBAAA;ACjGA;ADwGA;EACA,uCAAA;ACrGA;ADwGA;EACA,yBAAA;ACtGA;;AAEA,iDAAiD", "file": "ButtonDropdownMenu.vue", "sourcesContent": [`<template lang="pug">
menu-parent.c-menu(v-on='listeners')
  menu-trigger.is-small.c-trigger-btn(:aria-label='buttonText')
    | {{ buttonText }}
    i.icon-angle-down.is-suffix

  menu-content.c-menu-content(:class='"bound-to-" + boundEdge')
    menu
      template(v-if='options')
        component(
          v-for='item in options'
          :key='item.id || item.name'
          :is='config.components[item.type]'
          v-bind='propObj(item)'
        ) {{ item.name }}

      slot(v-else)
</template>

<script>
import {
  MenuParent, MenuContent, MenuTrigger, MenuItem, MenuHeader
} from '../../../frontend/views/components/menu'

export default ({
  name: 'ButtonDropdownMenu',
  components: {
    MenuParent,
    MenuTrigger,
    MenuContent
  },
  props: {
    buttonText: String,
    options: {
      type: Array
      /**
       * NOTE: Shape of the array must strictly follow below statement.
       *
       * - An item to be mapped to a 'menu-item' component:
       *  { type: 'item', id: string, name: string, icon: string, isDisabled?: boolean }
       *
       * - An item to be mapped to a 'menu-header' component:
       *  { type: 'header', name: string }
       */
    },
    boundEdge: {
      type: String,
      default: 'right',
      validator: val => ['left', 'right'].includes(val)
    }
  },
  methods: {
    propObj (item) {
      return item.type === 'item'
        ? {
            tag: 'button',
            'item-id': item.id,
            icon: item.icon,
            ...(item.isDisabled ? { 'disabled': true } : {})
          }
        : {}
    },
    onItemSelect (itemId) {
      this.$emit('select', itemId)
    }
  },
  data () {
    return {
      config: {
        components: {
          'item': MenuItem,
          'header': MenuHeader
        }
      }
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        select: this.onItemSelect
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-menu {
  position: relative;
  width: max-content;

  .c-menu-content {
    min-width: 100%;
    max-width: 16rem;
    width: max-content;
    top: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    left: unset;
    right: 0;

    &.bound-to-left {
      left: 0;
      right: unset;
    }

    ::v-deep .c-header {
      font: {
        size: $size_5;
        weight: 400;
      }
      color: $text_1;
      line-height: 1rem;
    }

    ::v-deep .c-menuItem {
      &:not(:last-child) {
        margin-bottom: 0.25rem;
      }

      .c-item-link {
        height: 1.875rem;
      }

      i {
        line-height: 1.2rem;
        width: 1.2rem;
        height: 1.2rem;
      }

      i,
      .c-item-slot {
        font-size: $size_4;
      }
    }
  }
}

.c-trigger-btn {
  i {
    transition: transform 250ms ease-in-out;
  }

  &.is-active > i {
    transform: rotate(180deg);
  }
}
</style>
`, ".c-menu {\n  position: relative;\n  width: max-content;\n}\n.c-menu .c-menu-content {\n  min-width: 100%;\n  max-width: 16rem;\n  width: max-content;\n  top: 100%;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  left: unset;\n  right: 0;\n}\n.c-menu .c-menu-content.bound-to-left {\n  left: 0;\n  right: unset;\n}\n.c-menu .c-menu-content ::v-deep .c-header {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--text_1);\n  line-height: 1rem;\n}\n.c-menu .c-menu-content ::v-deep .c-menuItem:not(:last-child) {\n  margin-bottom: 0.25rem;\n}\n.c-menu .c-menu-content ::v-deep .c-menuItem .c-item-link {\n  height: 1.875rem;\n}\n.c-menu .c-menu-content ::v-deep .c-menuItem i {\n  line-height: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.c-menu .c-menu-content ::v-deep .c-menuItem i,\n.c-menu .c-menu-content ::v-deep .c-menuItem .c-item-slot {\n  font-size: 0.875rem;\n}\n\n.c-trigger-btn i {\n  transition: transform 250ms ease-in-out;\n}\n.c-trigger-btn.is-active > i {\n  transform: rotate(180deg);\n}\n\n/*# sourceMappingURL=ButtonDropdownMenu.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-c78aa494";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
menu-parent.c-menu(v-on='listeners')
  menu-trigger.is-small.c-trigger-btn(:aria-label='buttonText')
    | {{ buttonText }}
    i.icon-angle-down.is-suffix

  menu-content.c-menu-content(:class='"bound-to-" + boundEdge')
    menu
      template(v-if='options')
        component(
          v-for='item in options'
          :key='item.id || item.name'
          :is='config.components[item.type]'
          v-bind='propObj(item)'
        ) {{ item.name }}

      slot(v-else)
</template>

<script>
import {
  MenuParent, MenuContent, MenuTrigger, MenuItem, MenuHeader
} from '../../../frontend/views/components/menu'

export default ({
  name: 'ButtonDropdownMenu',
  components: {
    MenuParent,
    MenuTrigger,
    MenuContent
  },
  props: {
    buttonText: String,
    options: {
      type: Array
      /**
       * NOTE: Shape of the array must strictly follow below statement.
       *
       * - An item to be mapped to a 'menu-item' component:
       *  { type: 'item', id: string, name: string, icon: string, isDisabled?: boolean }
       *
       * - An item to be mapped to a 'menu-header' component:
       *  { type: 'header', name: string }
       */
    },
    boundEdge: {
      type: String,
      default: 'right',
      validator: val => ['left', 'right'].includes(val)
    }
  },
  methods: {
    propObj (item) {
      return item.type === 'item'
        ? {
            tag: 'button',
            'item-id': item.id,
            icon: item.icon,
            ...(item.isDisabled ? { 'disabled': true } : {})
          }
        : {}
    },
    onItemSelect (itemId) {
      this.$emit('select', itemId)
    }
  },
  data () {
    return {
      config: {
        components: {
          'item': MenuItem,
          'header': MenuHeader
        }
      }
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        select: this.onItemSelect
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-menu {
  position: relative;
  width: max-content;

  .c-menu-content {
    min-width: 100%;
    max-width: 16rem;
    width: max-content;
    top: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    left: unset;
    right: 0;

    &.bound-to-left {
      left: 0;
      right: unset;
    }

    ::v-deep .c-header {
      font: {
        size: $size_5;
        weight: 400;
      }
      color: $text_1;
      line-height: 1rem;
    }

    ::v-deep .c-menuItem {
      &:not(:last-child) {
        margin-bottom: 0.25rem;
      }

      .c-item-link {
        height: 1.875rem;
      }

      i {
        line-height: 1.2rem;
        width: 1.2rem;
        height: 1.2rem;
      }

      i,
      .c-item-slot {
        font-size: $size_4;
      }
    }
  }
}

.c-trigger-btn {
  i {
    transition: transform 250ms ease-in-out;
  }

  &.is-active > i {
    transform: rotate(180deg);
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
var ButtonDropdownMenu_default = __vue_component__;

// frontend/assets/svgs/conversation.svg
var conversation_default = { render: function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "svg-conversation", attrs: { "viewBox": "0 0 97 101", "fill": "none", "xmlns": "http://www.w3.org/2000/svg", "width": "97", "height": "101" } }, [_c("g", { attrs: { "clip-path": "url(#eclip0)" } }, [_c("path", { attrs: { "d": "M38.64 72.24a2.53 2.53 0 103.03 4.05 13.14 13.14 0 002.5-18.34 2.53 2.53 0 00-4.05 3.03 8.08 8.08 0 01-1.48 11.26z", "fill": "var(--warning_1)" } }), _c("path", { attrs: { "d": "M45.6 79.65a2.53 2.53 0 003.03 4.04 22.14 22.14 0 004.21-31.02 2.53 2.53 0 10-4.04 3.03 17.07 17.07 0 01-3.25 23.94l.05.01z", "fill": "var(--success_1)" } }), _c("path", { attrs: { "d": "M8.22 97.5V87.09c5.03.7 10.15.58 15.15-.33a8.93 8.93 0 006.82-11.6c-.02-.82.06-1.65.25-2.45l.33-1.28a4.22 4.22 0 00-3.36-5.19c-3.16-.55-5.23-1.89-6.2-3.85 3.38.06 6.75-.41 9.97-1.4a2.53 2.53 0 001.71-2.52l-.3-5.98c1.88-.7 3.57-1.84 4.93-3.32a6.12 6.12 0 00.65-7.28 7.44 7.44 0 00-3.03-2.6 12.85 12.85 0 01-6.95-10.77 35.93 35.93 0 00-.4-4.13C25.64 11.04 17.3 2.98 3.67 1.01a2.55 2.55 0 00-.7 5.05C14.48 7.7 21 13.97 22.81 25.26c.18 1.18.29 2.37.33 3.56a17.85 17.85 0 009.64 14.93c.41.18.8.44 1.12.75a1.1 1.1 0 01-.11 1.3 8.98 8.98 0 01-4.44 2.46 2.53 2.53 0 00-1.85 2.55l.29 5.85c-2.32.52-4.7.73-7.08.65a4.62 4.62 0 00-4.69 3.75c-.12.72-.08 1.45.14 2.14.71 2.34 2.89 6.36 9.44 7.82l-.1.46c-.4 1.59-.49 3.24-.25 4.86.02.1.05.2.1.31a3.89 3.89 0 01-2.93 5.14c-5.38.96-10.9.9-16.27-.15a2.53 2.53 0 00-3.03 2.49V97.5a2.53 2.53 0 105.05 0h.04zM93.34 1.01C79.71 2.95 71.37 11.02 69.2 24.36a35.9 35.9 0 00-.4 4.13 12.9 12.9 0 01-7.06 10.8 7.36 7.36 0 00-3.03 2.57 6.12 6.12 0 00.65 7.27 12.84 12.84 0 004.92 3.32l-.29 5.98a2.53 2.53 0 001.7 2.52 31.67 31.67 0 0010.1 1.43c-.9 1.96-3.03 3.29-6.12 3.84a4.22 4.22 0 00-3.36 5.19l.33 1.28c.19.8.27 1.63.25 2.45a8.93 8.93 0 006.82 11.6c5 .91 10.12 1.02 15.16.33V97.5a2.53 2.53 0 005.05 0V84.1a2.53 2.53 0 00-3.03-2.48 44.25 44.25 0 01-16.27.15 3.8 3.8 0 01-2.64-1.88 3.89 3.89 0 01-.28-3.26c.04-.1.07-.2.09-.31.23-1.62.14-3.28-.26-4.86L71.4 71c6.55-1.46 8.73-5.48 9.44-7.82a4.54 4.54 0 00-4.56-5.88c-2.38.08-4.75-.14-7.08-.65l.29-5.85a2.53 2.53 0 00-1.85-2.55 9 9 0 01-4.44-2.46 1.1 1.1 0 01-.12-1.34c.34-.33.74-.59 1.17-.78a17.82 17.82 0 009.6-14.97 31 31 0 01.33-3.56c1.82-11.2 8.32-17.47 19.87-19.09a2.55 2.55 0 00-.7-5.05h-.02z", "fill": "var(--primary_1)" } })]), _c("defs", [_c("clipPath", { attrs: { "id": "eclip0" } }, [_c("path", { attrs: { "fill": "var(--background_0)", "d": "M0 0h97v100.03H0z" } })])])]);
} };

// frontend/assets/svgs/vote.svg
var vote_default = { render: function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "svg-vote", attrs: { "viewBox": "0 0 97 98", "fill": "none", "xmlns": "http://www.w3.org/2000/svg", "width": "97", "height": "98" } }, [_c("g", { attrs: { "clip-path": "url(#lclip0)" } }, [_c("path", { attrs: { "d": "M1.49 49.42c.3-.13.63-.23.96-.23.83 0 1.62.46 2.12 1.25l3.74 6.57s.36-.1.99-.13L6.65 38.13c-.33-1.39.43-2.74 1.66-3.1l.3-.07c1.25-.33 2.54.53 2.9 1.92l2.02 12.14 1.63-.3-1.23-15.08c-.2-1.42.7-2.7 1.95-2.9l.14.03c1.25-.17 2.45.8 2.68 2.18l1.65 15.22 1.62.06-.5-12.7c-.03-.27 0-.5.04-.73-1.03-7-1.69-14.53-1.75-15.65a4.87 4.87 0 013.07-5.61 4.88 4.88 0 016.42 3.17c0 .06.04.13.04.16l1.29 7.03-1.2-13.93V9.9a5.27 5.27 0 014.77-5.54 5.3 5.3 0 015.82 4.82l.87 7.56-.4-11.46v-.1A5.28 5.28 0 0145.77.03H46c2.91 0 5.3 2.35 5.33 5.25l.9 13.5.26-9.5v-.13a5.27 5.27 0 011.98-3.57 5.26 5.26 0 013.9-1.12l.47.06a5.38 5.38 0 014.7 5.68v22.22l2.75-6.24c0-.03.03-.03.03-.07a5.55 5.55 0 016.49-2.9 5.45 5.45 0 013.84 6.6l-.1.46c-.76 2.97-1.46 5.85-2.12 8.2l-1.16 8.6 1.79.17 3.17-14.92a2.61 2.61 0 013.15-1.82l.13.04a2.56 2.56 0 011.89 3.13l-2.72 14.86 1.76.5 3.34-11.86a2.6 2.6 0 013.34-1.52l.3.14a2.57 2.57 0 011.52 3.3l-4.6 18.29c.7.13 1.1.26 1.1.26l4.7-6.04a2.8 2.8 0 012.11-.99 2.77 2.77 0 012.42 4.06c-1.52 2.8-3.94 7.36-4.87 8.65a28.11 28.11 0 01-4.73 5.31 11.33 11.33 0 01-5.6 2.58l-.79 3.17c.07 0 .14.03.17.07 4.53 1.68 4.4 3.36 4.23 4.06l-.03.13-4.83 18.02c-.2.73-.86 1.22-1.59 1.22-.13 0-.3 0-.43-.06a1.6 1.6 0 01-1.16-2.02l4.14-15.51c-.6-.03-1.16-.1-1.62-.17-2.32-.3-5.5-.92-9.17-1.85a82.02 82.02 0 01-3.7-.99V96.2c0 .93-.73 1.65-1.66 1.65-.93 0-1.66-.72-1.66-1.65V68.24c-.06.03-.13.03-.2.06-.56.14-1.19.27-1.95.43a66.43 66.43 0 01-8.3 1.16A70.38 70.38 0 0132.5 68.6c-.2-.03-.37-.1-.56-.13V96.2c0 .93-.73 1.65-1.66 1.65-.93 0-1.65-.72-1.65-1.65V78.37c-1.76.4-4 .8-6.72 1.2-3.41.45-6.32.72-8.47.72h-.27c-.3 0-.66 0-1.03-.03l2.35 15.68c.14.89-.5 1.75-1.39 1.88h-.23c-.8 0-1.52-.6-1.62-1.42L8.5 78.18v-.07-.07-.1-.1c-.06-1.48 1.36-2.64 4.27-3.43.07-.03.14-.03.24-.03l-.47-3.24a10.71 10.71 0 01-4.83-3.23 27.54 27.54 0 01-3.84-5.84c-.73-1.4-2.55-6.21-3.67-9.18-.5-1.32.03-2.87 1.29-3.47zM23.03 18.5c.04.1.04.16.04.26 0 .13.6 7.26 1.55 14.23.6 4.23 1.3 8.39 2.12 10.83.07.23.13.43.23.63.66 1.71 1.26 3.1 1.89 4.25a16.6 16.6 0 004.83 5.58c.4.33.83.66 1.29 1 .43.3.66.79.66 1.32v9.2c2.19.4 4.34.67 6.39.8a236.78 236.78 0 0010.06 0c2.35-.17 4.47-.43 6.25-.73v-8.68c0-.66.4-1.26 1-1.52l.43-.2c3.04-1.38 5.26-3.76 7.08-6.86l.8-1.42a56.74 56.74 0 002.18-4.89c.63-1.62 1.95-6.73 2.98-10.76.2-.73.36-1.42.53-2.08l.13-.46a2.2 2.2 0 00-1.56-2.68c-1.02-.3-2.11.2-2.61 1.16l-3.94 8.91-.43.96c-.3.66-1 1.05-1.72.99 0 0-.63-.07-1.62.03-.83.1-1.95.3-3.15.76-1.42.6-2.48 1.29-2.51 1.29a1.64 1.64 0 11-1.82-2.74 16.34 16.34 0 016.09-2.48l.03-25.09v-.16c.1-1.1-.7-2.05-1.75-2.18L58 7.69c-.53-.06-1.06.1-1.49.43-.4.33-.66.8-.72 1.29l-.5 17.23c0 .43-.2.86-.53 1.16-.33.3-.76.46-1.2.46L51 28.19a1.63 1.63 0 01-1.6-1.55L48.03 5.41v-.1c0-1.08-.9-2-2.02-2h-.2a2 2 0 00-2.02 1.9l.76 21.4c.04.82-.56 1.55-1.39 1.68l-2.51.4c-.43.06-.9-.03-1.26-.3-.36-.26-.6-.7-.63-1.12L36.73 9.5v-.07a1.99 1.99 0 00-.72-1.38c-.43-.37-.93-.5-1.5-.47a1.97 1.97 0 00-1.78 2.08l1.82 21.16a1.6 1.6 0 01-1 1.66l-2.44 1.05c-.47.2-1 .17-1.43-.06a1.71 1.71 0 01-.86-1.16l-2.74-14.79c-.13-.4-.43-.73-.8-.9a1.6 1.6 0 00-1.29-.06 1.67 1.67 0 00-.96 1.92z", "fill": "var(--primary_1)" } })]), _c("defs", [_c("clipPath", { attrs: { "id": "lclip0" } }, [_c("path", { attrs: { "fill": "var(--background_0)", "transform": "rotate(-180 48.5 48.93)", "d": "M0 0h97v97.85H0z" } })])])]);
} };

export {
  ButtonDropdownMenu_default,
  conversation_default,
  vote_default
};
//# sourceMappingURL=chunk-AJMLFVUA-cached.js.map
