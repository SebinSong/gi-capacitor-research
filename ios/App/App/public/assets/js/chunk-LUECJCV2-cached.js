import {
  Badge_default
} from "./chunk-EUGZI4EZ-cached.js";

// frontend/views/components/ListItem.vue
var __vue_script__ = {
  name: "ListItem",
  components: {
    Badge: Badge_default
  },
  props: {
    itemId: String,
    icon: String,
    badgeCount: Number,
    /** When true a 1px border is added to the bottom of the list item. */
    isActive: Boolean,
    tag: {
      validator(value) {
        return ["router-link", "a", "button", "div"].indexOf(value) > -1;
      },
      default: "div",
      required: false
    }
  },
  inheritAttrs: false,
  computed: {
    itemLinkClasses() {
      return {
        "is-active": this.isActive
      };
    }
  }
};
var __vue_render__ = function() {
  var _obj;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    {
      staticClass: "c-item",
      on: {
        click: function($event) {
          return _vm.$emit("click");
        }
      }
    },
    [
      _c(
        _vm.tag,
        _vm._g(
          _vm._b(
            {
              tag: "component",
              staticClass: "c-item-link is-unstyled",
              class: _vm.itemLinkClasses,
              attrs: {
                "active-class": _vm.tag === "router-link" && "is-active"
              }
            },
            "component",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [
          _vm.icon ? _c(
            "i",
            {
              class: (_obj = {}, _obj["icon-" + _vm.icon] = _vm.icon, _obj)
            },
            [
              _vm.badgeCount ? _c("badge", { attrs: { type: "compact" } }, [
                _vm._v(_vm._s(_vm.badgeCount))
              ]) : _vm._e()
            ],
            1
          ) : _vm._e(),
          _c("span", { staticClass: "c-item-slot" }, [_vm._t("default")], 2)
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
  inject("data-v-09b59cb0_0", { source: '.c-item.has-divider[data-v-09b59cb0] {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--general_0);\n}\n.c-item-slot[data-v-09b59cb0] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  white-space: normal;\n}\n.c-item-link[data-v-09b59cb0] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 3rem;\n  transition: background-color ease-out 0.3s;\n  color: var(--text_0);\n  font-family: "Poppins";\n  text-align: center;\n  cursor: pointer;\n}\n.c-item-link i[data-v-09b59cb0] {\n  position: relative;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n  font-size: 1rem;\n  color: var(--text_1);\n  transform: translateY(0.125rem);\n  transition: color ease-in 0.3s;\n}\n.c-item-link[data-v-09b59cb0]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 2px;\n  height: 0%;\n  background-color: var(--text_0);\n  transition: height 0.3s ease-out, 0.3s background-color ease-out 0.3s;\n}\n.c-item-link.is-active i[data-v-09b59cb0], .c-item-link:hover i[data-v-09b59cb0], .c-item-link:focus i[data-v-09b59cb0] {\n  color: var(--text_0);\n}\n.c-item-link.is-active[data-v-09b59cb0]::before, .c-item-link[data-v-09b59cb0]:hover::before, .c-item-link[data-v-09b59cb0]:focus::before {\n  height: 100%;\n  transition: height 0.3s ease-out, 0s background-color;\n}\n.c-item-link[data-v-09b59cb0]:hover {\n  background-color: var(--general_1);\n}\n.c-item-link[data-v-09b59cb0]:hover::before {\n  background-color: var(--general_0);\n}\n.c-item-link.is-active[data-v-09b59cb0] {\n  font-weight: 600;\n}\n.c-item-link.is-active[data-v-09b59cb0]:focus::before, .c-item-link.is-active[data-v-09b59cb0]:hover::before {\n  background-color: var(--text_0);\n}\n.c-item-link.no-radius[data-v-09b59cb0] {\n  border-radius: 0;\n}\n\n/*# sourceMappingURL=ListItem.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/ListItem.vue", "ListItem.vue"], "names": [], "mappings": "AAuDA;EACA,qBAAA;EACA,sBAAA;EACA,yCAAA;ACtDA;ADyDA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;ACvDA;AD2DA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,0CAAA;EACA,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;ACxDA;AD0DA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,+BAAA;EACA,8BAAA;ACxDA;AD2DA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,UAAA;EACA,UAAA;EACA,+BAAA;EACA,qEAAA;ACzDA;AD+DA;EACA,oBAAA;AC7DA;ADgEA;EACA,YAAA;EACA,qDAAA;AC9DA;ADkEA;EACA,kCAAA;AChEA;ADkEA;EACA,kCAAA;AChEA;ADoEA;EACA,gBAAA;AClEA;ADoEA;EAEA,+BAAA;ACnEA;ADuEA;EACA,gBAAA;ACrEA;;AAEA,uCAAuC", "file": "ListItem.vue", "sourcesContent": [`<template lang='pug'>
li.c-item(@click='$emit("click")')
  component.c-item-link.is-unstyled(
    :is='tag'
    :class='itemLinkClasses'
    :active-class='tag === "router-link" && "is-active"'
    v-bind='$attrs'
    v-on='$listeners'
  )
    i(
      v-if='icon'
      :class='{ [\`icon-\${icon}\`]: icon }'
    )
      badge(v-if='badgeCount' type='compact') {{ badgeCount }}
    span.c-item-slot
      slot
</template>

<script>
import Badge from './Badge.vue'

export default ({
  name: 'ListItem',
  components: {
    Badge
  },
  props: {
    itemId: String,
    icon: String,
    badgeCount: Number,
    /** When true a 1px border is added to the bottom of the list item. */
    isActive: Boolean,
    tag: {
      validator (value) {
        return ['router-link', 'a', 'button', 'div'].indexOf(value) > -1
      },
      default: 'div',
      required: false
    }
  },
  inheritAttrs: false,
  computed: {
    itemLinkClasses () {
      return {
        'is-active': this.isActive
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-item {
  &.has-divider {
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $general_0;
  }

  &-slot {
    display: flex;
    align-items: center;
    flex-grow: 1;
    white-space: normal;
  }
}

.c-item-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  transition: background-color ease-out 0.3s;
  color: $text_0;
  font-family: "Poppins";
  text-align: center;
  cursor: pointer;

  i {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    color: $text_1;
    transform: translateY(0.125rem); // visually vertical aligned
    transition: color ease-in 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 0%;
    background-color: $text_0;
    transition: height 0.3s ease-out, 0.3s background-color ease-out 0.3s;
  }

  &.is-active,
  &:hover,
  &:focus {
    i {
      color: $text_0;
    }

    &::before {
      height: 100%;
      transition: height 0.3s ease-out, 0s background-color;
    }
  }

  &:hover {
    background-color: $general_1;

    &::before {
      background-color: $general_0;
    }
  }

  &.is-active {
    font-weight: 600;

    &:focus::before,
    &:hover::before {
      background-color: $text_0;
    }
  }

  &.no-radius {
    border-radius: 0;
  }
}
</style>
`, '.c-item.has-divider {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--general_0);\n}\n.c-item-slot {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  white-space: normal;\n}\n\n.c-item-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 3rem;\n  transition: background-color ease-out 0.3s;\n  color: var(--text_0);\n  font-family: "Poppins";\n  text-align: center;\n  cursor: pointer;\n}\n.c-item-link i {\n  position: relative;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n  font-size: 1rem;\n  color: var(--text_1);\n  transform: translateY(0.125rem);\n  transition: color ease-in 0.3s;\n}\n.c-item-link::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 2px;\n  height: 0%;\n  background-color: var(--text_0);\n  transition: height 0.3s ease-out, 0.3s background-color ease-out 0.3s;\n}\n.c-item-link.is-active i, .c-item-link:hover i, .c-item-link:focus i {\n  color: var(--text_0);\n}\n.c-item-link.is-active::before, .c-item-link:hover::before, .c-item-link:focus::before {\n  height: 100%;\n  transition: height 0.3s ease-out, 0s background-color;\n}\n.c-item-link:hover {\n  background-color: var(--general_1);\n}\n.c-item-link:hover::before {\n  background-color: var(--general_0);\n}\n.c-item-link.is-active {\n  font-weight: 600;\n}\n.c-item-link.is-active:focus::before, .c-item-link.is-active:hover::before {\n  background-color: var(--text_0);\n}\n.c-item-link.no-radius {\n  border-radius: 0;\n}\n\n/*# sourceMappingURL=ListItem.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-09b59cb0";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
li.c-item(@click='$emit("click")')
  component.c-item-link.is-unstyled(
    :is='tag'
    :class='itemLinkClasses'
    :active-class='tag === "router-link" && "is-active"'
    v-bind='$attrs'
    v-on='$listeners'
  )
    i(
      v-if='icon'
      :class='{ [\`icon-\${icon}\`]: icon }'
    )
      badge(v-if='badgeCount' type='compact') {{ badgeCount }}
    span.c-item-slot
      slot
</template>

<script>
import Badge from './Badge.vue'

export default ({
  name: 'ListItem',
  components: {
    Badge
  },
  props: {
    itemId: String,
    icon: String,
    badgeCount: Number,
    /** When true a 1px border is added to the bottom of the list item. */
    isActive: Boolean,
    tag: {
      validator (value) {
        return ['router-link', 'a', 'button', 'div'].indexOf(value) > -1
      },
      default: 'div',
      required: false
    }
  },
  inheritAttrs: false,
  computed: {
    itemLinkClasses () {
      return {
        'is-active': this.isActive
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-item {
  &.has-divider {
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $general_0;
  }

  &-slot {
    display: flex;
    align-items: center;
    flex-grow: 1;
    white-space: normal;
  }
}

.c-item-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  transition: background-color ease-out 0.3s;
  color: $text_0;
  font-family: "Poppins";
  text-align: center;
  cursor: pointer;

  i {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    color: $text_1;
    transform: translateY(0.125rem); // visually vertical aligned
    transition: color ease-in 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 0%;
    background-color: $text_0;
    transition: height 0.3s ease-out, 0.3s background-color ease-out 0.3s;
  }

  &.is-active,
  &:hover,
  &:focus {
    i {
      color: $text_0;
    }

    &::before {
      height: 100%;
      transition: height 0.3s ease-out, 0s background-color;
    }
  }

  &:hover {
    background-color: $general_1;

    &::before {
      background-color: $general_0;
    }
  }

  &.is-active {
    font-weight: 600;

    &:focus::before,
    &:hover::before {
      background-color: $text_0;
    }
  }

  &.no-radius {
    border-radius: 0;
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
var ListItem_default = __vue_component__;

export {
  ListItem_default
};
//# sourceMappingURL=chunk-LUECJCV2-cached.js.map
