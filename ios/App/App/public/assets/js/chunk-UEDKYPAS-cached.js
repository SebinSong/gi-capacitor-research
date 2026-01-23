import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/views/components/Search.vue
var __vue_script__ = {
  name: "Search",
  props: {
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: L("Search...")
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      staticClass: "c-search-form",
      on: {
        submit: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _c("label", { staticClass: "field" }, [
        _c("div", { staticClass: "sr-only" }, [_vm._v(_vm._s(_vm.label))]),
        _c("div", { staticClass: "inputgroup c-search" }, [
          _vm._m(0),
          _c("input", {
            directives: [
              {
                name: "focus",
                rawName: "v-focus",
                value: _vm.autofocus,
                expression: "autofocus"
              }
            ],
            staticClass: "input",
            attrs: {
              type: "text",
              name: "search",
              "data-test": "search",
              placeholder: _vm.placeholder
            },
            domProps: { value: _vm.value },
            on: {
              keyup: function($event) {
                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                  "Esc",
                  "Escape"
                ])) {
                  return null;
                }
                return _vm.$emit("input", "");
              },
              input: function($event) {
                return _vm.$emit("input", $event.target.value);
              }
            }
          }),
          _c("div", { staticClass: "addons" }, [
            _vm.value !== "" ? _c(
              "div",
              {
                staticClass: "button c-clear is-icon-small",
                attrs: { "aria-label": _vm.L("Clear search") },
                on: {
                  click: function($event) {
                    return _vm.$emit("input", "");
                  }
                }
              },
              [_c("i", { staticClass: "icon-times" })]
            ) : _vm._e()
          ])
        ])
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "is-icon prefix", attrs: { "aria-hidden": "true" } },
      [_c("i", { staticClass: "icon-search" })]
    );
  }
];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-0b835834_0", { source: ".c-search .addons[data-v-0b835834] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.c-search .input:focus + .addons .c-clear[data-v-0b835834],\n.c-search .input:hover + .addons .c-clear[data-v-0b835834] {\n  opacity: 1;\n}\n.c-search .c-clear[data-v-0b835834] {\n  opacity: 0;\n  background-color: var(--general_2);\n}\n.c-search .c-clear[data-v-0b835834]:hover, .c-search .c-clear[data-v-0b835834]:focus {\n  opacity: 1;\n  background-color: var(--general_1);\n}\n\n/*# sourceMappingURL=Search.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/Search.vue", "Search.vue"], "names": [], "mappings": "AA6DA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AC5DA;ADgEA;;EAEA,UAAA;AC9DA;ADiEA;EAEA,UAAA;EACA,kCAAA;AChEA;ADkEA;EAEA,UAAA;EACA,kCAAA;ACjEA;;AAEA,qCAAqC", "file": "Search.vue", "sourcesContent": [`<template lang='pug'>
form.c-search-form(@submit.prevent='')
  label.field
    .sr-only {{label}}
    .inputgroup.c-search
      .is-icon.prefix(aria-hidden='true')
        i.icon-search
      input.input(
        type='text'
        name='search'
        data-test='search'
        :placeholder='placeholder'
        :value='value'
        @keyup.esc='$emit("input", "")'
        @input='$emit("input", $event.target.value)'
        v-focus='autofocus'
      )
      .addons
        .button.c-clear.is-icon-small(
          v-if='value !== ""'
          :aria-label='L("Clear search")'
          @click='$emit("input", "")'
        )
          i.icon-times
</template>

<script>
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'Search',
  props: {
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: L('Search...')
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-search {
  .addons {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  // visible when interacted
  .input:focus + .addons .c-clear,
  .input:hover + .addons .c-clear {
    opacity: 1;
  }

  .c-clear {
    // hide close by default...
    opacity: 0;
    background-color: $general_2;

    &:hover,
    &:focus {
      opacity: 1;
      background-color: $general_1;
    }
  }
}
</style>
`, ".c-search .addons {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.c-search .input:focus + .addons .c-clear,\n.c-search .input:hover + .addons .c-clear {\n  opacity: 1;\n}\n.c-search .c-clear {\n  opacity: 0;\n  background-color: var(--general_2);\n}\n.c-search .c-clear:hover, .c-search .c-clear:focus {\n  opacity: 1;\n  background-color: var(--general_1);\n}\n\n/*# sourceMappingURL=Search.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-0b835834";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
form.c-search-form(@submit.prevent='')
  label.field
    .sr-only {{label}}
    .inputgroup.c-search
      .is-icon.prefix(aria-hidden='true')
        i.icon-search
      input.input(
        type='text'
        name='search'
        data-test='search'
        :placeholder='placeholder'
        :value='value'
        @keyup.esc='$emit("input", "")'
        @input='$emit("input", $event.target.value)'
        v-focus='autofocus'
      )
      .addons
        .button.c-clear.is-icon-small(
          v-if='value !== ""'
          :aria-label='L("Clear search")'
          @click='$emit("input", "")'
        )
          i.icon-times
</template>

<script>
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'Search',
  props: {
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: L('Search...')
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-search {
  .addons {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  // visible when interacted
  .input:focus + .addons .c-clear,
  .input:hover + .addons .c-clear {
    opacity: 1;
  }

  .c-clear {
    // hide close by default...
    opacity: 0;
    background-color: $general_2;

    &:hover,
    &:focus {
      opacity: 1;
      background-color: $general_1;
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
var Search_default = __vue_component__;

export {
  Search_default
};
//# sourceMappingURL=chunk-UEDKYPAS-cached.js.map
