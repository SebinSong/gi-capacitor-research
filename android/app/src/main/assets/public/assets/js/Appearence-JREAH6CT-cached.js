import {
  colorsManipulation_default,
  colors_default
} from "./chunk-VV2DISHU-cached.js";
import {
  mapGetters,
  mapMutations
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/user-settings/ThemeSvg.vue
var __vue_script__ = {
  name: "ThemeSVG",
  props: {
    color: {
      type: Object,
      required: true
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "svg",
    {
      attrs: {
        width: "247",
        height: "128",
        viewBox: "0 0 247 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("path", {
        attrs: {
          d: "M243 0.5C244.933 0.5 246.5 2.067 246.5 4V124C246.5 125.933 244.933 127.5 243 127.5H4C2.06701 127.5 0.5 125.933 0.5 124V4C0.5 2.067 2.067 0.5 4 0.5H243Z",
          fill: _vm.color.general_2
        }
      }),
      _c("rect", {
        attrs: {
          x: "24",
          y: "28",
          width: "48",
          height: "9",
          rx: "4.5",
          fill: _vm.color.general_0
        }
      }),
      _c("rect", {
        attrs: {
          x: "24",
          y: "48",
          width: "48",
          height: "9",
          rx: "4.5",
          fill: _vm.color.general_0
        }
      }),
      _c("rect", {
        attrs: {
          x: "24",
          y: "68",
          width: "48",
          height: "9",
          rx: "4.5",
          fill: _vm.color.general_0
        }
      }),
      _c("rect", {
        attrs: {
          x: "24",
          y: "88",
          width: "48",
          height: "9",
          rx: "4.5",
          fill: _vm.color.general_0
        }
      }),
      _c("path", {
        attrs: {
          d: "M86 32C86 29.7909 87.7909 28 90 28H246V123C246 125.209 244.209 127 242 127H86V32Z",
          fill: _vm.color.background_0
        }
      }),
      _c("circle", {
        attrs: { cx: "12.5", cy: "32.5", r: "4.5", fill: _vm.color.primary_0 }
      }),
      _c("circle", {
        attrs: { cx: "12.5", cy: "52.5", r: "4.5", fill: _vm.color.primary_0 }
      }),
      _c("circle", {
        attrs: { cx: "12.5", cy: "72.5", r: "4.5", fill: _vm.color.primary_0 }
      }),
      _c("rect", {
        attrs: {
          x: "8",
          y: "8.00002",
          width: "64",
          height: "9",
          rx: "4.5",
          fill: _vm.color.general_0
        }
      }),
      _c("circle", {
        attrs: { cx: "12.5", cy: "92.5", r: "4.5", fill: _vm.color.primary_0 }
      })
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-34757eee_0", { source: "svg[data-v-34757eee] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=ThemeSvg.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/ThemeSvg.vue", "ThemeSvg.vue"], "names": [], "mappings": "AA8BA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AC7BA;;AAEA,uCAAuC", "file": "ThemeSvg.vue", "sourcesContent": [`<template lang='pug'>
svg(width='247' height='128' viewBox='0 0 247 128' fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M243 0.5C244.933 0.5 246.5 2.067 246.5 4V124C246.5 125.933 244.933 127.5 243 127.5H4C2.06701 127.5 0.5 125.933 0.5 124V4C0.5 2.067 2.067 0.5 4 0.5H243Z' :fill='color.general_2')
  rect(x='24' y='28' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='48' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='68' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='88' width='48' height='9' rx='4.5' :fill='color.general_0')
  path(d='M86 32C86 29.7909 87.7909 28 90 28H246V123C246 125.209 244.209 127 242 127H86V32Z' :fill='color.background_0')
  circle(cx='12.5' cy='32.5' r='4.5' :fill='color.primary_0')
  circle(cx='12.5' cy='52.5' r='4.5' :fill='color.primary_0')
  circle(cx='12.5' cy='72.5' r='4.5' :fill='color.primary_0')
  rect(x='8' y='8.00002' width='64' height='9' rx='4.5' :fill='color.general_0')
  circle(cx='12.5' cy='92.5' r='4.5' :fill='color.primary_0')
</template>

<script>
export default ({
  name: 'ThemeSVG',
  props: {
    color: {
      type: Object,
      required: true
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>
`, "svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=ThemeSvg.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-34757eee";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
svg(width='247' height='128' viewBox='0 0 247 128' fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M243 0.5C244.933 0.5 246.5 2.067 246.5 4V124C246.5 125.933 244.933 127.5 243 127.5H4C2.06701 127.5 0.5 125.933 0.5 124V4C0.5 2.067 2.067 0.5 4 0.5H243Z' :fill='color.general_2')
  rect(x='24' y='28' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='48' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='68' width='48' height='9' rx='4.5' :fill='color.general_0')
  rect(x='24' y='88' width='48' height='9' rx='4.5' :fill='color.general_0')
  path(d='M86 32C86 29.7909 87.7909 28 90 28H246V123C246 125.209 244.209 127 242 127H86V32Z' :fill='color.background_0')
  circle(cx='12.5' cy='32.5' r='4.5' :fill='color.primary_0')
  circle(cx='12.5' cy='52.5' r='4.5' :fill='color.primary_0')
  circle(cx='12.5' cy='72.5' r='4.5' :fill='color.primary_0')
  rect(x='8' y='8.00002' width='64' height='9' rx='4.5' :fill='color.general_0')
  circle(cx='12.5' cy='92.5' r='4.5' :fill='color.primary_0')
</template>

<script>
export default ({
  name: 'ThemeSVG',
  props: {
    color: {
      type: Object,
      required: true
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

svg {
  display: block;
  width: 100%;
  height: auto;
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
var ThemeSvg_default = __vue_component__;

// frontend/views/containers/user-settings/Theme.vue
var __vue_script__2 = {
  name: "SelectorTheme",
  mixins: [colorsManipulation_default],
  data() {
    return {
      themes: colors_default
      // TODO: needs translate label
    };
  },
  components: {
    ThemeSvg: ThemeSvg_default
  },
  methods: {
    ...mapMutations(["setTheme"])
  },
  computed: {
    ...mapGetters(["theme"])
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "theme-list" },
    [
      _c(
        "fieldset",
        {
          staticClass: "theme",
          on: {
            click: function($event) {
              $event.preventDefault();
              return _vm.setTheme("system");
            }
          }
        },
        [
          _c("label", { attrs: { for: "system" } }, [
            _c(
              "div",
              { staticClass: "c-combined-color" },
              [
                _c("ThemeSvg", { attrs: { color: _vm.themes.light } }),
                _c("ThemeSvg", { attrs: { color: _vm.themes.dark } })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "radio" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.theme,
                      expression: "theme"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "radio",
                    name: "theme",
                    value: "system",
                    id: "system"
                  },
                  domProps: { checked: _vm._q(_vm.theme, "system") },
                  on: {
                    change: function($event) {
                      _vm.theme = "system";
                    }
                  }
                }),
                _c("i18n", { attrs: { tag: "span" } }, [
                  _vm._v("Use system settings")
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._l(_vm.themes, function(color, label) {
        return _c(
          "fieldset",
          {
            key: label,
            staticClass: "theme",
            on: {
              click: function($event) {
                $event.preventDefault();
                return _vm.setTheme(label);
              }
            }
          },
          [
            _c("label", { attrs: { for: label } }, [
              _c(
                "div",
                { staticClass: "c-color" },
                [_c("ThemeSvg", { attrs: { color } })],
                1
              ),
              _c("div", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.theme,
                      expression: "theme"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "radio", name: "theme", id: label },
                  domProps: { value: label, checked: _vm._q(_vm.theme, label) },
                  on: {
                    change: function($event) {
                      _vm.theme = label;
                    }
                  }
                }),
                _c("span", [_vm._v(_vm._s(label))])
              ])
            ])
          ]
        );
      })
    ],
    2
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-60807a86_0", { source: ".theme-list[data-v-60807a86] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n.theme-list[data-v-60807a86] {\n    grid-template-columns: auto;\n}\n}\n.radio[data-v-60807a86] {\n  margin-top: 0.5rem;\n}\n.theme[data-v-60807a86] {\n  margin-bottom: 1.125rem;\n}\n.theme:hover .c-combined-color[data-v-60807a86],\n.theme:hover .c-color[data-v-60807a86] {\n  transform: scale(1.05);\n}\n.c-combined-color[data-v-60807a86],\n.c-color[data-v-60807a86] {\n  transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);\n  border: 1px solid var(--general_0);\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.c-combined-color[data-v-60807a86] {\n  display: flex;\n}\n.c-combined-color svg[data-v-60807a86] {\n  margin-right: -50%;\n}\n\n/*# sourceMappingURL=Theme.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/Theme.vue", "Theme.vue"], "names": [], "mappings": "AAmDA;EACA,aAAA;EACA,kCAAA;EACA,mBAAA;AClDA;AACA;AD8CA;IAMA,2BAAA;ACjDE;AACF;ADoDA;EACA,kBAAA;ACjDA;ADoDA;EACA,uBAAA;ACjDA;ADoDA;;EAEA,sBAAA;AClDA;ADuDA;;EAEA,qDAAA;EACA,kCAAA;EACA,sBAAA;EACA,gBAAA;ACpDA;ADuDA;EACA,aAAA;ACpDA;ADsDA;EACA,kBAAA;ACpDA;;AAEA,oCAAoC", "file": "Theme.vue", "sourcesContent": [`<template lang='pug'>
.theme-list
  fieldset.theme(@click.prevent='setTheme("system")')
    label(for='system')
      .c-combined-color
        ThemeSvg(:color='themes.light')
        ThemeSvg(:color='themes.dark')

      .radio
        input.input(type='radio' name='theme' value='system' id='system' v-model='theme')
        i18n(tag='span') Use system settings

  fieldset.theme(v-for='(color, label) in themes' :key='label' @click.prevent='setTheme(label)')
    label(:for='label')
      .c-color
        ThemeSvg(:color='color')

      .radio
        input.input(type='radio' name='theme' :value='label' :id='label' v-model='theme')
        span {{ label }}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Themes from '../../../../frontend/model/settings/colors.js'
import ThemeSvg from './ThemeSvg.vue'
import colorsMixins from '../../../../frontend/views/utils/colorsManipulation.js'

export default ({
  name: 'SelectorTheme',
  mixins: [colorsMixins],
  data () {
    return {
      themes: Themes // TODO: needs translate label
    }
  },
  components: {
    ThemeSvg
  },
  methods: {
    ...mapMutations(['setTheme'])
  },
  computed: {
    ...mapGetters(['theme'])
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.theme-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;

  @include phone {
    grid-template-columns: auto;
  }
}

.radio {
  margin-top: 0.5rem;
}

.theme {
  margin-bottom: 1.125rem;

  &:hover {
    .c-combined-color,
    .c-color {
      transform: scale(1.05);
    }
  }
}

.c-combined-color,
.c-color {
  transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);
  border: 1px solid $general_0;
  border-radius: 0.25rem;
  overflow: hidden;
}

.c-combined-color {
  display: flex;

  svg {
    margin-right: -50%;
  }
}
</style>
`, ".theme-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .theme-list {\n    grid-template-columns: auto;\n  }\n}\n\n.radio {\n  margin-top: 0.5rem;\n}\n\n.theme {\n  margin-bottom: 1.125rem;\n}\n.theme:hover .c-combined-color,\n.theme:hover .c-color {\n  transform: scale(1.05);\n}\n\n.c-combined-color,\n.c-color {\n  transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);\n  border: 1px solid var(--general_0);\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.c-combined-color {\n  display: flex;\n}\n.c-combined-color svg {\n  margin-right: -50%;\n}\n\n/*# sourceMappingURL=Theme.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-60807a86";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.theme-list
  fieldset.theme(@click.prevent='setTheme("system")')
    label(for='system')
      .c-combined-color
        ThemeSvg(:color='themes.light')
        ThemeSvg(:color='themes.dark')

      .radio
        input.input(type='radio' name='theme' value='system' id='system' v-model='theme')
        i18n(tag='span') Use system settings

  fieldset.theme(v-for='(color, label) in themes' :key='label' @click.prevent='setTheme(label)')
    label(:for='label')
      .c-color
        ThemeSvg(:color='color')

      .radio
        input.input(type='radio' name='theme' :value='label' :id='label' v-model='theme')
        span {{ label }}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Themes from '../../../../frontend/model/settings/colors.js'
import ThemeSvg from './ThemeSvg.vue'
import colorsMixins from '../../../../frontend/views/utils/colorsManipulation.js'

export default ({
  name: 'SelectorTheme',
  mixins: [colorsMixins],
  data () {
    return {
      themes: Themes // TODO: needs translate label
    }
  },
  components: {
    ThemeSvg
  },
  methods: {
    ...mapMutations(['setTheme'])
  },
  computed: {
    ...mapGetters(['theme'])
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.theme-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;

  @include phone {
    grid-template-columns: auto;
  }
}

.radio {
  margin-top: 0.5rem;
}

.theme {
  margin-bottom: 1.125rem;

  &:hover {
    .c-combined-color,
    .c-color {
      transform: scale(1.05);
    }
  }
}

.c-combined-color,
.c-color {
  transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);
  border: 1px solid $general_0;
  border-radius: 0.25rem;
  overflow: hidden;
}

.c-combined-color {
  display: flex;

  svg {
    margin-right: -50%;
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
var Theme_default = __vue_component__2;

// frontend/views/components/Slider.vue
var __vue_script__3 = {
  name: "AppSlider",
  data() {
    return {
      flag: false,
      size: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      interval: 1,
      lazy: true,
      realTime: false
    };
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    range: {
      type: Array,
      default: null
    },
    speed: {
      type: Number,
      default: 0.5
    },
    value: {
      type: [String, Number],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  computed: {
    slider() {
      return this.$refs.tooltip;
    },
    val: {
      get() {
        return this.data ? this.data[this.currentValue] : this.currentValue;
      },
      set(val) {
        if (this.data) {
          const index = this.data.indexOf(val);
          if (index > -1) {
            this.currentValue = index;
          }
        } else {
          this.currentValue = val;
        }
      }
    },
    currentIndex() {
      return (this.currentValue - this.minimum) / this.spacing;
    },
    indexRange() {
      return [0, this.currentIndex];
    },
    minimum() {
      return this.data ? 0 : this.min;
    },
    maximum() {
      return this.data ? this.data.length - 1 : this.max;
    },
    multiple() {
      const decimals = `${this.interval}`.split(".")[1];
      return decimals ? Math.pow(10, decimals.length) : 1;
    },
    spacing() {
      return this.data ? 1 : this.interval;
    },
    total() {
      if (this.data) {
        return this.data.length - 1;
      }
      return (this.maximum - this.minimum) / this.interval;
    },
    gap() {
      return this.size / this.total;
    },
    position() {
      return (this.currentValue - this.minimum) / this.spacing * this.gap;
    },
    limit() {
      return [0, this.size];
    },
    valueLimit() {
      return [this.minimum, this.maximum];
    }
  },
  watch: {
    value(val) {
      if (this.flag) this.setValue(val);
      else this.setValue(val, this.speed);
    },
    max() {
      const resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min() {
      const resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    }
  },
  methods: {
    bindEvents() {
      document.addEventListener("touchmove", this.moving, { passive: false });
      document.addEventListener("touchend", this.moveEnd, { passive: false });
      document.addEventListener("mousemove", this.moving);
      document.addEventListener("mouseup", this.moveEnd);
      document.addEventListener("mouseleave", this.moveEnd);
      window.addEventListener("resize", this.refresh);
    },
    unbindEvents() {
      window.removeEventListener("resize", this.refresh);
      document.removeEventListener("touchmove", this.moving);
      document.removeEventListener("touchend", this.moveEnd);
      document.removeEventListener("mousemove", this.moving);
      document.removeEventListener("mouseup", this.moveEnd);
      document.removeEventListener("mouseleave", this.moveEnd);
    },
    getPos(e) {
      this.realTime && this.getStaticData();
      return e.clientX - this.offset;
    },
    wrapClick(e) {
      const pos = this.getPos(e);
      this.setValueOnPos(pos);
    },
    moveStart() {
      this.flag = true;
      this.$emit("drag-start", this);
    },
    moving(e) {
      if (!this.flag) return false;
      e.preventDefault();
      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
      this.setValueOnPos(this.getPos(e), true);
    },
    moveEnd() {
      if (this.flag) {
        this.$emit("drag-end", this);
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false;
      }
      this.flag = false;
      this.setPosition();
    },
    setValueOnPos(pos, isDrag) {
      const range = this.limit;
      const valueRange = this.valueLimit;
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos);
        const v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
        this.setCurrentValue(v, isDrag);
      } else if (pos < range[0]) {
        this.setTransform(range[0]);
        this.setCurrentValue(valueRange[0]);
        if (this.currentSlider === 1) this.currentSlider = 0;
      } else {
        this.setTransform(range[1]);
        this.setCurrentValue(valueRange[1]);
        if (this.currentSlider === 0) this.currentSlider = 1;
      }
    },
    isDiff(a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true;
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i]);
      }
      return a !== b;
    },
    setCurrentValue(val, bool) {
      if (val < this.minimum || val > this.maximum) return false;
      if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val;
        if (!this.lazy || !this.flag) {
          this.syncValue();
        }
      }
      bool || this.setPosition();
    },
    setIndex(val) {
      val = this.spacing * val + this.minimum;
      this.setCurrentValue(val);
    },
    setValue(val, speed) {
      if (this.isDiff(this.val, val)) {
        const resetVal = this.limitValue(val);
        this.val = resetVal;
        this.syncValue();
      }
      this.$nextTick(() => this.setPosition(speed));
    },
    setPosition(speed) {
      if (!this.flag) this.setTransitionTime(speed === void 0 ? this.speed : speed);
      else this.setTransitionTime(0);
      this.setTransform(this.position);
    },
    setTransform(val) {
      const value = val - (this.$refs.tooltip.scrollWidth - 2) / 2;
      const translateValue = `translateX(${value}px)`;
      this.slider.style.transform = translateValue;
      this.slider.style.WebkitTransform = translateValue;
      this.slider.style.msTransform = translateValue;
      this.$refs.process.style.width = `${val}px`;
      this.$refs.process.style["left"] = 0;
    },
    setTransitionTime(time) {
      this.slider.style.transitionDuration = `${time}s`;
      this.slider.style.WebkitTransitionDuration = `${time}s`;
      this.$refs.process.style.transitionDuration = `${time}s`;
      this.$refs.process.style.WebkitTransitionDuration = `${time}s`;
    },
    limitValue(val) {
      if (this.data) {
        return val;
      }
      const inRange = (v) => {
        if (v < this.min) {
          return this.min;
        } else if (v > this.max) {
          return this.max;
        }
        return v;
      };
      return inRange(val);
    },
    syncValue() {
      const val = this.val;
      if (this.range) {
        this.$emit("callback-range", this.range[this.currentIndex]);
      }
      this.$emit("input", val);
    },
    getValue() {
      return this.val;
    },
    getIndex() {
      return this.currentIndex;
    },
    getStaticData() {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth;
        this.offset = this.$refs.elem.getBoundingClientRect().left;
      }
    },
    refresh() {
      if (this.$refs.elem) {
        this.getStaticData();
        this.setPosition();
      }
    }
  },
  mounted() {
    this.isComponentExists = true;
    this.$nextTick(() => {
      if (this.isComponentExists) {
        this.getStaticData();
        this.setValue(this.limitValue(this.value), 0);
        this.bindEvents();
      }
    });
  },
  beforeDestroy() {
    this.isComponentExists = false;
    this.unbindEvents();
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "wrap",
      staticClass: "slide-bar-component slide-bar-horizontal",
      on: { click: _vm.wrapClick }
    },
    [
      _c(
        "div",
        { ref: "elem", staticClass: "slide-bar" },
        [
          [
            _c(
              "div",
              {
                ref: "tooltip",
                staticClass: "slide-bar-always slide-bar-tooltip-container",
                on: { mousedown: _vm.moveStart, touchstart: _vm.moveStart }
              },
              [_vm._m(0)]
            )
          ],
          _c("div", { ref: "process", staticClass: "slide-bar-process" })
        ],
        2
      ),
      _vm.range ? _c(
        "div",
        { staticClass: "slide-bar-range" },
        _vm._l(_vm.range, function(r, index) {
          return _c(
            "div",
            { key: index, staticClass: "slide-bar-separate" },
            [
              _c(
                "span",
                {
                  staticClass: "slide-bar-separate-text",
                  class: { isActive: index === _vm.currentValue }
                },
                [_vm._v(_vm._s(r.label))]
              )
            ]
          );
        }),
        0
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__3 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      { staticClass: "slide-bar-tooltip-top slide-bar-tooltip-wrap" },
      [_c("span", { staticClass: "slide-bar-tooltip" })]
    );
  }
];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-0f8c4420_0", { source: '.slide-bar-component[data-v-0f8c4420] {\n  position: relative;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  user-select: none;\n}\n.slide-bar[data-v-0f8c4420] {\n  position: relative;\n  display: block;\n  height: 0.25rem;\n  border-radius: 1rem;\n  background-color: var(--general_0);\n  cursor: pointer;\n}\n.slide-bar[data-v-0f8c4420]::before {\n  content: "";\n  position: absolute;\n  right: -0.25rem;\n  height: 100%;\n  width: 0.3125rem;\n  background-color: var(--general_0);\n  border-radius: 100%;\n}\n.slide-bar[data-v-0f8c4420]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.slide-bar-process[data-v-0f8c4420] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: var(--primary_0);\n  border-radius: 1rem;\n  transition: all 0s;\n  will-change: width;\n}\n.slide-bar-process[data-v-0f8c4420]::before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 0.3125rem;\n  left: -0.25rem;\n  background-color: var(--primary_0);\n  border-radius: 100%;\n}\n.slide-bar-tooltip-container[data-v-0f8c4420] {\n  position: absolute;\n  z-index: 3;\n  left: 0.15rem;\n  width: 2rem;\n  height: 5rem;\n  top: -3rem;\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n}\n.slide-bar-tooltip-wrap[data-v-0f8c4420] {\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n}\n.slide-bar-tooltip-top[data-v-0f8c4420] {\n  top: 6.3rem;\n  left: 73%;\n  transform: translate(-50%, -100%);\n}\n.slide-bar-tooltip[data-v-0f8c4420] {\n  display: block;\n  position: relative;\n  top: 1.3rem;\n  height: 1rem;\n  width: 1rem;\n  white-space: nowrap;\n  text-align: center;\n  color: transparent;\n  background: var(--primary_0);\n  border-radius: 50%;\n  overflow: hidden;\n}\n.slide-bar-tooltip[data-v-0f8c4420]::before {\n  content: "";\n  position: absolute;\n  bottom: -0.625rem;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 0.3125rem solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%, 0);\n}\n.slide-bar-range[data-v-0f8c4420] {\n  display: flex;\n  padding: 0.3125rem 0;\n  justify-content: space-between;\n  margin-top: 0.05rem;\n}\n.slide-bar-separate-text[data-v-0f8c4420] {\n  position: absolute;\n  bottom: 2rem;\n  text-align: center;\n  white-space: nowrap;\n  transform: translate(-50%, 0);\n  color: var(--text_1);\n}\n.slide-bar-separate[data-v-0f8c4420] {\n  position: relative;\n  top: -1rem;\n  height: 1rem;\n  width: 0.125rem;\n  background-color: var(--general_0);\n  cursor: pointer;\n}\n.slide-bar-separate .isActive[data-v-0f8c4420] {\n  color: var(--primary_0);\n}\n.slide-bar-separate:nth-child(1) .slide-bar-separate-text[data-v-0f8c4420] {\n  left: 0.3125rem;\n  font-size: 12px;\n}\n.slide-bar-separate:nth-child(2) .slide-bar-separate-text[data-v-0f8c4420] {\n  left: 0.125rem;\n  font-size: 14px;\n}\n.slide-bar-separate:nth-child(3) .slide-bar-separate-text[data-v-0f8c4420] {\n  left: 0.3125rem;\n  font-size: 16px;\n}\n.slide-bar-separate:nth-child(4) .slide-bar-separate-text[data-v-0f8c4420] {\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=Slider.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/Slider.vue", "Slider.vue"], "names": [], "mappings": "AA0TA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,WAAA;EACA,iBAAA;ACzTA;AD4TA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kCAAA;EACA,eAAA;ACzTA;AD2TA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kCAAA;EACA,mBAAA;ACzTA;AD4TA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AC1TA;AD8TA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,kCAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AC3TA;AD6TA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,kCAAA;EACA,mBAAA;AC3TA;AD+TA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AC5TA;AD+TA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AC5TA;AD+TA;EACA,WAAA;EACA,SAAA;EACA,iCAAA;AC5TA;AD+TA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;AC5TA;AD8TA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,mCAAA;EACA,yBAAA;EACA,6BAAA;AC5TA;ADgUA;EACA,aAAA;EACA,oBAAA;EACA,8BAAA;EACA,mBAAA;AC7TA;ADgUA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,6BAAA;EACA,oBAAA;AC7TA;ADgUA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,kCAAA;EACA,eAAA;AC7TA;AD+TA;EACA,uBAAA;AC7TA;ADiUA;EACA,eAAA;EACA,eAAA;AC/TA;ADoUA;EACA,cAAA;EACA,eAAA;AClUA;ADuUA;EACA,eAAA;EACA,eAAA;ACrUA;AD0UA;EACA,eAAA;ACxUA;;AAEA,qCAAqC", "file": "Slider.vue", "sourcesContent": ["<template lang='pug'>\n.slide-bar-component.slide-bar-horizontal(ref='wrap' @click='wrapClick')\n  .slide-bar(ref='elem')\n    template\n      .slide-bar-always.slide-bar-tooltip-container(\n        ref='tooltip'\n        @mousedown='moveStart'\n        @touchstart='moveStart'\n      )\n        span.slide-bar-tooltip-top.slide-bar-tooltip-wrap\n          span.slide-bar-tooltip\n    .slide-bar-process(ref='process')\n  .slide-bar-range(v-if='range')\n    .slide-bar-separate(\n      v-for='(r, index) in range'\n      :key='index'\n    )\n      span.slide-bar-separate-text(:class='{isActive: index===currentValue}') {{ r.label }}\n</template>\n<script>\nexport default ({\n  name: 'AppSlider',\n\n  data () {\n    return {\n      flag: false,\n      size: 0,\n      currentValue: 0,\n      currentSlider: 0,\n      isComponentExists: true,\n      interval: 1,\n      lazy: true,\n      realTime: false\n    }\n  },\n\n  props: {\n    data: {\n      type: Array,\n      default: null\n    },\n    range: {\n      type: Array,\n      default: null\n    },\n    speed: {\n      type: Number,\n      default: 0.5\n    },\n    value: {\n      type: [String, Number],\n      default: 0\n    },\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    }\n  },\n\n  computed: {\n    slider () {\n      return this.$refs.tooltip\n    },\n    val: {\n      get () {\n        return this.data ? this.data[this.currentValue] : this.currentValue\n      },\n      set (val) {\n        if (this.data) {\n          const index = this.data.indexOf(val)\n          if (index > -1) {\n            this.currentValue = index\n          }\n        } else {\n          this.currentValue = val\n        }\n      }\n    },\n    currentIndex () {\n      return (this.currentValue - this.minimum) / this.spacing\n    },\n    indexRange () {\n      return [0, this.currentIndex]\n    },\n    minimum () {\n      return this.data ? 0 : this.min\n    },\n    maximum () {\n      return this.data ? (this.data.length - 1) : this.max\n    },\n    multiple () {\n      const decimals = `${this.interval}`.split('.')[1]\n      return decimals ? Math.pow(10, decimals.length) : 1\n    },\n    spacing () {\n      return this.data ? 1 : this.interval\n    },\n    total () {\n      if (this.data) {\n        return this.data.length - 1\n      }\n      return (this.maximum - this.minimum) / this.interval\n    },\n    gap () {\n      return this.size / this.total\n    },\n    position () {\n      return ((this.currentValue - this.minimum) / this.spacing * this.gap)\n    },\n    limit () {\n      return [0, this.size]\n    },\n    valueLimit () {\n      return [this.minimum, this.maximum]\n    }\n  },\n\n  watch: {\n    value (val) {\n      if (this.flag) this.setValue(val)\n      else this.setValue(val, this.speed)\n    },\n    max () {\n      const resetVal = this.limitValue(this.val)\n      this.setValue(resetVal)\n      this.refresh()\n    },\n    min () {\n      const resetVal = this.limitValue(this.val)\n      this.setValue(resetVal)\n      this.refresh()\n    }\n  },\n\n  methods: {\n    bindEvents () {\n      document.addEventListener('touchmove', this.moving, { passive: false })\n      document.addEventListener('touchend', this.moveEnd, { passive: false })\n      document.addEventListener('mousemove', this.moving)\n      document.addEventListener('mouseup', this.moveEnd)\n      document.addEventListener('mouseleave', this.moveEnd)\n      window.addEventListener('resize', this.refresh)\n    },\n    unbindEvents () {\n      window.removeEventListener('resize', this.refresh)\n      document.removeEventListener('touchmove', this.moving)\n      document.removeEventListener('touchend', this.moveEnd)\n      document.removeEventListener('mousemove', this.moving)\n      document.removeEventListener('mouseup', this.moveEnd)\n      document.removeEventListener('mouseleave', this.moveEnd)\n    },\n    getPos (e) {\n      this.realTime && this.getStaticData()\n      return e.clientX - this.offset\n    },\n    wrapClick (e) {\n      const pos = this.getPos(e)\n      this.setValueOnPos(pos)\n    },\n    moveStart () {\n      this.flag = true\n      this.$emit('drag-start', this)\n    },\n    moving (e) {\n      if (!this.flag) return false\n      e.preventDefault()\n      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]\n      this.setValueOnPos(this.getPos(e), true)\n    },\n    moveEnd () {\n      if (this.flag) {\n        this.$emit('drag-end', this)\n        if (this.lazy && this.isDiff(this.val, this.value)) {\n          this.syncValue()\n        }\n      } else {\n        return false\n      }\n      this.flag = false\n      this.setPosition()\n    },\n    setValueOnPos (pos, isDrag) {\n      const range = this.limit\n      const valueRange = this.valueLimit\n      if (pos >= range[0] && pos <= range[1]) {\n        this.setTransform(pos)\n        const v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + (this.minimum * this.multiple)) / this.multiple\n        this.setCurrentValue(v, isDrag)\n      } else if (pos < range[0]) {\n        this.setTransform(range[0])\n        this.setCurrentValue(valueRange[0])\n        if (this.currentSlider === 1) this.currentSlider = 0\n      } else {\n        this.setTransform(range[1])\n        this.setCurrentValue(valueRange[1])\n        if (this.currentSlider === 0) this.currentSlider = 1\n      }\n    },\n    isDiff (a, b) {\n      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {\n        return true\n      } else if (Array.isArray(a) && a.length === b.length) {\n        return a.some((v, i) => v !== b[i])\n      }\n      return a !== b\n    },\n    setCurrentValue (val, bool) {\n      if (val < this.minimum || val > this.maximum) return false\n      if (this.isDiff(this.currentValue, val)) {\n        this.currentValue = val\n        if (!this.lazy || !this.flag) {\n          this.syncValue()\n        }\n      }\n      bool || this.setPosition()\n    },\n    setIndex (val) {\n      val = this.spacing * val + this.minimum\n      this.setCurrentValue(val)\n    },\n    setValue (val, speed) {\n      if (this.isDiff(this.val, val)) {\n        const resetVal = this.limitValue(val)\n        this.val = resetVal\n        this.syncValue()\n      }\n      this.$nextTick(() => this.setPosition(speed))\n    },\n    setPosition (speed) {\n      if (!this.flag) this.setTransitionTime(speed === undefined ? this.speed : speed)\n      else this.setTransitionTime(0)\n      this.setTransform(this.position)\n    },\n    setTransform (val) {\n      const value = val - ((this.$refs.tooltip.scrollWidth - 2) / 2)\n      const translateValue = `translateX(${value}px)`\n      this.slider.style.transform = translateValue\n      this.slider.style.WebkitTransform = translateValue\n      this.slider.style.msTransform = translateValue\n      this.$refs.process.style.width = `${val}px`\n      this.$refs.process.style['left'] = 0\n    },\n    setTransitionTime (time) {\n      this.slider.style.transitionDuration = `${time}s`\n      this.slider.style.WebkitTransitionDuration = `${time}s`\n      this.$refs.process.style.transitionDuration = `${time}s`\n      this.$refs.process.style.WebkitTransitionDuration = `${time}s`\n    },\n    limitValue (val) {\n      if (this.data) {\n        return val\n      }\n      const inRange = (v) => {\n        if (v < this.min) {\n          return this.min\n        } else if (v > this.max) {\n          return this.max\n        }\n        return v\n      }\n      return inRange(val)\n    },\n    syncValue () {\n      const val = this.val\n      if (this.range) {\n        this.$emit('callback-range', this.range[this.currentIndex])\n      }\n      this.$emit('input', val)\n    },\n    getValue () {\n      return this.val\n    },\n    getIndex () {\n      return this.currentIndex\n    },\n    getStaticData () {\n      if (this.$refs.elem) {\n        this.size = this.$refs.elem.offsetWidth\n        this.offset = this.$refs.elem.getBoundingClientRect().left\n      }\n    },\n    refresh () {\n      if (this.$refs.elem) {\n        this.getStaticData()\n        this.setPosition()\n      }\n    }\n  },\n\n  mounted () {\n    this.isComponentExists = true\n    this.$nextTick(() => {\n      if (this.isComponentExists) {\n        this.getStaticData()\n        this.setValue(this.limitValue(this.value), 0)\n        this.bindEvents()\n      }\n    })\n  },\n\n  beforeDestroy () {\n    this.isComponentExists = false\n    this.unbindEvents()\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.slide-bar-component {\n  position: relative;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  user-select: none;\n}\n\n.slide-bar {\n  position: relative;\n  display: block;\n  height: 0.25rem;\n  border-radius: 1rem;\n  background-color: $general_0;\n  cursor: pointer;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    right: -0.25rem;\n    height: 100%;\n    width: 0.3125rem;\n    background-color: $general_0;\n    border-radius: 100%;\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n}\n\n.slide-bar-process {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: $primary_0;\n  border-radius: 1rem;\n  transition: all 0s;\n  will-change: width;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    height: 100%;\n    width: 0.3125rem;\n    left: -0.25rem;\n    background-color: $primary_0;\n    border-radius: 100%;\n  }\n}\n\n.slide-bar-tooltip-container {\n  position: absolute;\n  z-index: 3;\n  left: 0.15rem;\n  width: 2rem;\n  height: 5rem;\n  top: -3rem;\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n}\n\n.slide-bar-tooltip-wrap {\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-bar-tooltip-top {\n  top: 6.3rem;\n  left: 73%;\n  transform: translate(-50%, -100%);\n}\n\n.slide-bar-tooltip {\n  display: block;\n  position: relative;\n  top: 1.3rem;\n  height: 1rem;\n  width: 1rem;\n  white-space: nowrap;\n  text-align: center;\n  color: transparent;\n  background: $primary_0;\n  border-radius: 50%;\n  overflow: hidden;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    bottom: -0.625rem;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 0.3125rem solid transparent;\n    border-top-color: inherit;\n    transform: translate(-50%, 0);\n  }\n}\n\n.slide-bar-range {\n  display: flex;\n  padding: 0.3125rem 0;\n  justify-content: space-between;\n  margin-top: 0.05rem;\n}\n\n.slide-bar-separate-text {\n  position: absolute;\n  bottom: 2rem;\n  text-align: center;\n  white-space: nowrap;\n  transform: translate(-50%, 0);\n  color: $text_1;\n}\n\n.slide-bar-separate {\n  position: relative;\n  top: -1rem;\n  height: 1rem;\n  width: 0.125rem;\n  background-color: $general_0;\n  cursor: pointer;\n\n  .isActive {\n    color: $primary_0;\n  }\n\n  &:nth-child(1) {\n    .slide-bar-separate-text {\n      left: 0.3125rem;\n      font-size: 12px;\n    }\n  }\n\n  &:nth-child(2) {\n    .slide-bar-separate-text {\n      left: 0.125rem;\n      font-size: 14px;\n    }\n  }\n\n  &:nth-child(3) {\n    .slide-bar-separate-text {\n      left: 0.3125rem;\n      font-size: 16px;\n    }\n  }\n\n  &:nth-child(4) {\n    .slide-bar-separate-text {\n      font-size: 18px;\n    }\n  }\n}\n</style>\n", '.slide-bar-component {\n  position: relative;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  user-select: none;\n}\n\n.slide-bar {\n  position: relative;\n  display: block;\n  height: 0.25rem;\n  border-radius: 1rem;\n  background-color: var(--general_0);\n  cursor: pointer;\n}\n.slide-bar::before {\n  content: "";\n  position: absolute;\n  right: -0.25rem;\n  height: 100%;\n  width: 0.3125rem;\n  background-color: var(--general_0);\n  border-radius: 100%;\n}\n.slide-bar::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.slide-bar-process {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: var(--primary_0);\n  border-radius: 1rem;\n  transition: all 0s;\n  will-change: width;\n}\n.slide-bar-process::before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 0.3125rem;\n  left: -0.25rem;\n  background-color: var(--primary_0);\n  border-radius: 100%;\n}\n\n.slide-bar-tooltip-container {\n  position: absolute;\n  z-index: 3;\n  left: 0.15rem;\n  width: 2rem;\n  height: 5rem;\n  top: -3rem;\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n}\n\n.slide-bar-tooltip-wrap {\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-bar-tooltip-top {\n  top: 6.3rem;\n  left: 73%;\n  transform: translate(-50%, -100%);\n}\n\n.slide-bar-tooltip {\n  display: block;\n  position: relative;\n  top: 1.3rem;\n  height: 1rem;\n  width: 1rem;\n  white-space: nowrap;\n  text-align: center;\n  color: transparent;\n  background: var(--primary_0);\n  border-radius: 50%;\n  overflow: hidden;\n}\n.slide-bar-tooltip::before {\n  content: "";\n  position: absolute;\n  bottom: -0.625rem;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 0.3125rem solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%, 0);\n}\n\n.slide-bar-range {\n  display: flex;\n  padding: 0.3125rem 0;\n  justify-content: space-between;\n  margin-top: 0.05rem;\n}\n\n.slide-bar-separate-text {\n  position: absolute;\n  bottom: 2rem;\n  text-align: center;\n  white-space: nowrap;\n  transform: translate(-50%, 0);\n  color: var(--text_1);\n}\n\n.slide-bar-separate {\n  position: relative;\n  top: -1rem;\n  height: 1rem;\n  width: 0.125rem;\n  background-color: var(--general_0);\n  cursor: pointer;\n}\n.slide-bar-separate .isActive {\n  color: var(--primary_0);\n}\n.slide-bar-separate:nth-child(1) .slide-bar-separate-text {\n  left: 0.3125rem;\n  font-size: 12px;\n}\n.slide-bar-separate:nth-child(2) .slide-bar-separate-text {\n  left: 0.125rem;\n  font-size: 14px;\n}\n.slide-bar-separate:nth-child(3) .slide-bar-separate-text {\n  left: 0.3125rem;\n  font-size: 16px;\n}\n.slide-bar-separate:nth-child(4) .slide-bar-separate-text {\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=Slider.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-0f8c4420";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.slide-bar-component.slide-bar-horizontal(ref='wrap' @click='wrapClick')\n  .slide-bar(ref='elem')\n    template\n      .slide-bar-always.slide-bar-tooltip-container(\n        ref='tooltip'\n        @mousedown='moveStart'\n        @touchstart='moveStart'\n      )\n        span.slide-bar-tooltip-top.slide-bar-tooltip-wrap\n          span.slide-bar-tooltip\n    .slide-bar-process(ref='process')\n  .slide-bar-range(v-if='range')\n    .slide-bar-separate(\n      v-for='(r, index) in range'\n      :key='index'\n    )\n      span.slide-bar-separate-text(:class='{isActive: index===currentValue}') {{ r.label }}\n</template>\n<script>\nexport default ({\n  name: 'AppSlider',\n\n  data () {\n    return {\n      flag: false,\n      size: 0,\n      currentValue: 0,\n      currentSlider: 0,\n      isComponentExists: true,\n      interval: 1,\n      lazy: true,\n      realTime: false\n    }\n  },\n\n  props: {\n    data: {\n      type: Array,\n      default: null\n    },\n    range: {\n      type: Array,\n      default: null\n    },\n    speed: {\n      type: Number,\n      default: 0.5\n    },\n    value: {\n      type: [String, Number],\n      default: 0\n    },\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    }\n  },\n\n  computed: {\n    slider () {\n      return this.$refs.tooltip\n    },\n    val: {\n      get () {\n        return this.data ? this.data[this.currentValue] : this.currentValue\n      },\n      set (val) {\n        if (this.data) {\n          const index = this.data.indexOf(val)\n          if (index > -1) {\n            this.currentValue = index\n          }\n        } else {\n          this.currentValue = val\n        }\n      }\n    },\n    currentIndex () {\n      return (this.currentValue - this.minimum) / this.spacing\n    },\n    indexRange () {\n      return [0, this.currentIndex]\n    },\n    minimum () {\n      return this.data ? 0 : this.min\n    },\n    maximum () {\n      return this.data ? (this.data.length - 1) : this.max\n    },\n    multiple () {\n      const decimals = `${this.interval}`.split('.')[1]\n      return decimals ? Math.pow(10, decimals.length) : 1\n    },\n    spacing () {\n      return this.data ? 1 : this.interval\n    },\n    total () {\n      if (this.data) {\n        return this.data.length - 1\n      }\n      return (this.maximum - this.minimum) / this.interval\n    },\n    gap () {\n      return this.size / this.total\n    },\n    position () {\n      return ((this.currentValue - this.minimum) / this.spacing * this.gap)\n    },\n    limit () {\n      return [0, this.size]\n    },\n    valueLimit () {\n      return [this.minimum, this.maximum]\n    }\n  },\n\n  watch: {\n    value (val) {\n      if (this.flag) this.setValue(val)\n      else this.setValue(val, this.speed)\n    },\n    max () {\n      const resetVal = this.limitValue(this.val)\n      this.setValue(resetVal)\n      this.refresh()\n    },\n    min () {\n      const resetVal = this.limitValue(this.val)\n      this.setValue(resetVal)\n      this.refresh()\n    }\n  },\n\n  methods: {\n    bindEvents () {\n      document.addEventListener('touchmove', this.moving, { passive: false })\n      document.addEventListener('touchend', this.moveEnd, { passive: false })\n      document.addEventListener('mousemove', this.moving)\n      document.addEventListener('mouseup', this.moveEnd)\n      document.addEventListener('mouseleave', this.moveEnd)\n      window.addEventListener('resize', this.refresh)\n    },\n    unbindEvents () {\n      window.removeEventListener('resize', this.refresh)\n      document.removeEventListener('touchmove', this.moving)\n      document.removeEventListener('touchend', this.moveEnd)\n      document.removeEventListener('mousemove', this.moving)\n      document.removeEventListener('mouseup', this.moveEnd)\n      document.removeEventListener('mouseleave', this.moveEnd)\n    },\n    getPos (e) {\n      this.realTime && this.getStaticData()\n      return e.clientX - this.offset\n    },\n    wrapClick (e) {\n      const pos = this.getPos(e)\n      this.setValueOnPos(pos)\n    },\n    moveStart () {\n      this.flag = true\n      this.$emit('drag-start', this)\n    },\n    moving (e) {\n      if (!this.flag) return false\n      e.preventDefault()\n      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]\n      this.setValueOnPos(this.getPos(e), true)\n    },\n    moveEnd () {\n      if (this.flag) {\n        this.$emit('drag-end', this)\n        if (this.lazy && this.isDiff(this.val, this.value)) {\n          this.syncValue()\n        }\n      } else {\n        return false\n      }\n      this.flag = false\n      this.setPosition()\n    },\n    setValueOnPos (pos, isDrag) {\n      const range = this.limit\n      const valueRange = this.valueLimit\n      if (pos >= range[0] && pos <= range[1]) {\n        this.setTransform(pos)\n        const v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + (this.minimum * this.multiple)) / this.multiple\n        this.setCurrentValue(v, isDrag)\n      } else if (pos < range[0]) {\n        this.setTransform(range[0])\n        this.setCurrentValue(valueRange[0])\n        if (this.currentSlider === 1) this.currentSlider = 0\n      } else {\n        this.setTransform(range[1])\n        this.setCurrentValue(valueRange[1])\n        if (this.currentSlider === 0) this.currentSlider = 1\n      }\n    },\n    isDiff (a, b) {\n      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {\n        return true\n      } else if (Array.isArray(a) && a.length === b.length) {\n        return a.some((v, i) => v !== b[i])\n      }\n      return a !== b\n    },\n    setCurrentValue (val, bool) {\n      if (val < this.minimum || val > this.maximum) return false\n      if (this.isDiff(this.currentValue, val)) {\n        this.currentValue = val\n        if (!this.lazy || !this.flag) {\n          this.syncValue()\n        }\n      }\n      bool || this.setPosition()\n    },\n    setIndex (val) {\n      val = this.spacing * val + this.minimum\n      this.setCurrentValue(val)\n    },\n    setValue (val, speed) {\n      if (this.isDiff(this.val, val)) {\n        const resetVal = this.limitValue(val)\n        this.val = resetVal\n        this.syncValue()\n      }\n      this.$nextTick(() => this.setPosition(speed))\n    },\n    setPosition (speed) {\n      if (!this.flag) this.setTransitionTime(speed === undefined ? this.speed : speed)\n      else this.setTransitionTime(0)\n      this.setTransform(this.position)\n    },\n    setTransform (val) {\n      const value = val - ((this.$refs.tooltip.scrollWidth - 2) / 2)\n      const translateValue = `translateX(${value}px)`\n      this.slider.style.transform = translateValue\n      this.slider.style.WebkitTransform = translateValue\n      this.slider.style.msTransform = translateValue\n      this.$refs.process.style.width = `${val}px`\n      this.$refs.process.style['left'] = 0\n    },\n    setTransitionTime (time) {\n      this.slider.style.transitionDuration = `${time}s`\n      this.slider.style.WebkitTransitionDuration = `${time}s`\n      this.$refs.process.style.transitionDuration = `${time}s`\n      this.$refs.process.style.WebkitTransitionDuration = `${time}s`\n    },\n    limitValue (val) {\n      if (this.data) {\n        return val\n      }\n      const inRange = (v) => {\n        if (v < this.min) {\n          return this.min\n        } else if (v > this.max) {\n          return this.max\n        }\n        return v\n      }\n      return inRange(val)\n    },\n    syncValue () {\n      const val = this.val\n      if (this.range) {\n        this.$emit('callback-range', this.range[this.currentIndex])\n      }\n      this.$emit('input', val)\n    },\n    getValue () {\n      return this.val\n    },\n    getIndex () {\n      return this.currentIndex\n    },\n    getStaticData () {\n      if (this.$refs.elem) {\n        this.size = this.$refs.elem.offsetWidth\n        this.offset = this.$refs.elem.getBoundingClientRect().left\n      }\n    },\n    refresh () {\n      if (this.$refs.elem) {\n        this.getStaticData()\n        this.setPosition()\n      }\n    }\n  },\n\n  mounted () {\n    this.isComponentExists = true\n    this.$nextTick(() => {\n      if (this.isComponentExists) {\n        this.getStaticData()\n        this.setValue(this.limitValue(this.value), 0)\n        this.bindEvents()\n      }\n    })\n  },\n\n  beforeDestroy () {\n    this.isComponentExists = false\n    this.unbindEvents()\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.slide-bar-component {\n  position: relative;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  user-select: none;\n}\n\n.slide-bar {\n  position: relative;\n  display: block;\n  height: 0.25rem;\n  border-radius: 1rem;\n  background-color: $general_0;\n  cursor: pointer;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    right: -0.25rem;\n    height: 100%;\n    width: 0.3125rem;\n    background-color: $general_0;\n    border-radius: 100%;\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n}\n\n.slide-bar-process {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: $primary_0;\n  border-radius: 1rem;\n  transition: all 0s;\n  will-change: width;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    height: 100%;\n    width: 0.3125rem;\n    left: -0.25rem;\n    background-color: $primary_0;\n    border-radius: 100%;\n  }\n}\n\n.slide-bar-tooltip-container {\n  position: absolute;\n  z-index: 3;\n  left: 0.15rem;\n  width: 2rem;\n  height: 5rem;\n  top: -3rem;\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n}\n\n.slide-bar-tooltip-wrap {\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-bar-tooltip-top {\n  top: 6.3rem;\n  left: 73%;\n  transform: translate(-50%, -100%);\n}\n\n.slide-bar-tooltip {\n  display: block;\n  position: relative;\n  top: 1.3rem;\n  height: 1rem;\n  width: 1rem;\n  white-space: nowrap;\n  text-align: center;\n  color: transparent;\n  background: $primary_0;\n  border-radius: 50%;\n  overflow: hidden;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    bottom: -0.625rem;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 0.3125rem solid transparent;\n    border-top-color: inherit;\n    transform: translate(-50%, 0);\n  }\n}\n\n.slide-bar-range {\n  display: flex;\n  padding: 0.3125rem 0;\n  justify-content: space-between;\n  margin-top: 0.05rem;\n}\n\n.slide-bar-separate-text {\n  position: absolute;\n  bottom: 2rem;\n  text-align: center;\n  white-space: nowrap;\n  transform: translate(-50%, 0);\n  color: $text_1;\n}\n\n.slide-bar-separate {\n  position: relative;\n  top: -1rem;\n  height: 1rem;\n  width: 0.125rem;\n  background-color: $general_0;\n  cursor: pointer;\n\n  .isActive {\n    color: $primary_0;\n  }\n\n  &:nth-child(1) {\n    .slide-bar-separate-text {\n      left: 0.3125rem;\n      font-size: 12px;\n    }\n  }\n\n  &:nth-child(2) {\n    .slide-bar-separate-text {\n      left: 0.125rem;\n      font-size: 14px;\n    }\n  }\n\n  &:nth-child(3) {\n    .slide-bar-separate-text {\n      left: 0.3125rem;\n      font-size: 16px;\n    }\n  }\n\n  &:nth-child(4) {\n    .slide-bar-separate-text {\n      font-size: 18px;\n    }\n  }\n}\n</style>\n";
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
var Slider_default = __vue_component__3;

// frontend/views/containers/user-settings/FontSize.vue
var __vue_script__4 = {
  name: "FontSize",
  data() {
    return {
      fontVariations: 4,
      fontRange: [],
      fontData: []
    };
  },
  components: {
    Slider: Slider_default
  },
  methods: {
    ...mapMutations([
      "setFontSize"
    ])
  },
  computed: {
    ...mapGetters([
      "fontSize"
    ])
  },
  watch: {
    fontSize() {
      this.$refs.slider.refresh();
    }
  },
  created() {
    let size = 14;
    for (let index = 0; index < this.fontVariations; index++) {
      this.fontData.push(size);
      size += 2;
      this.fontRange.push({
        label: "Aa"
      });
    }
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Slider", {
    ref: "slider",
    attrs: { value: _vm.fontSize, data: _vm.fontData, range: _vm.fontRange },
    on: {
      input: function($event) {
        return _vm.setFontSize($event);
      }
    }
  });
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = void 0;
var __vue_scope_id__4 = void 0;
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\nSlider(\n  :value='fontSize'\n  :data='fontData'\n  :range='fontRange'\n  @input='setFontSize($event)'\n  ref='slider'\n)\n</template>\n\n<script>\nimport { mapGetters, mapMutations } from 'vuex'\nimport Slider from '../../../../frontend/views/components/Slider.vue'\n\nexport default ({\n  name: 'FontSize',\n\n  data () {\n    return {\n      fontVariations: 4,\n      fontRange: [],\n      fontData: []\n    }\n  },\n\n  components: {\n    Slider\n  },\n\n  methods: {\n    ...mapMutations([\n      'setFontSize'\n    ])\n  },\n\n  computed: {\n    ...mapGetters([\n      'fontSize'\n    ])\n  },\n\n  watch: {\n    fontSize () {\n      this.$refs.slider.refresh()\n    }\n  },\n\n  created () {\n    let size = 14\n    for (let index = 0; index < this.fontVariations; index++) {\n      // Add data to the slider\n      this.fontData.push(size)\n      size += 2\n\n      // Hise one label out of two\n      this.fontRange.push({\n        label: 'Aa'\n      })\n    }\n  }\n}: Object)\n<\/script>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  void 0,
  void 0,
  void 0
);
var FontSize_default = __vue_component__4;

// frontend/views/containers/user-settings/Appearence.vue
var __vue_script__5 = {
  name: "SettingsAppearence",
  components: {
    SelectorTheme: Theme_default,
    SelectorFontSize: FontSize_default
  },
  methods: {
    ...mapMutations([
      "setReducedMotion",
      "setIncreasedContrast"
    ]),
    handleIncreasedContrast(e) {
      this.setIncreasesContrast(e.target.checked);
    },
    handleReducedMotion(e) {
      this.setReducedMotion(e.target.checked);
    }
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "settings-container" }, [
    _c(
      "section",
      { staticClass: "card" },
      [
        _c(
          "i18n",
          { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
          [_vm._v("Theme")]
        ),
        _c("SelectorTheme"),
        _c(
          "i18n",
          { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
          [_vm._v("Text size")]
        ),
        _c("SelectorFontSize"),
        _c(
          "i18n",
          { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
          [_vm._v("Animations")]
        ),
        _c("div", { staticClass: "c-subcontent" }, [
          _c(
            "div",
            { staticClass: "c-text-content" },
            [
              _c(
                "i18n",
                { staticClass: "c-smaller-title", attrs: { tag: "h3" } },
                [_vm._v("Reduced Motion")]
              ),
              _c("i18n", { staticClass: "help", attrs: { tag: "p" } }, [
                _vm._v(
                  "When enabled the amount of animations you see around are reduced."
                )
              ])
            ],
            1
          ),
          _c(
            "label",
            [
              _c("i18n", { staticClass: "sr-only" }, [
                _vm._v("Reduced motion")
              ]),
              _c("input", {
                staticClass: "switch",
                attrs: { type: "checkbox", name: "switch" },
                domProps: { checked: _vm.$store.state.settings.reducedMotion },
                on: { change: _vm.handleReducedMotion }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-7ede5cde_0", { source: ".settings-container[data-v-7ede5cde] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n.settings-container[data-v-7ede5cde] {\n    padding-top: 1.5rem;\n}\n}\n.settings-container .c-title[data-v-7ede5cde] {\n  margin-bottom: 1rem;\n}\n.c-subcontent[data-v-7ede5cde] {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n}\n.c-subcontent[data-v-7ede5cde]:last-child {\n  margin-bottom: 1.5rem;\n}\n.c-smaller-title[data-v-7ede5cde] {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=Appearence.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/Appearence.vue", "Appearence.vue"], "names": [], "mappings": "AAkEA;EACA,WAAA;ACjEA;AACA;AD+DA;IAIA,mBAAA;AChEE;AACF;ADkEA;EACA,mBAAA;AChEA;ADoEA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;ACjEA;ADmEA;EACA,qBAAA;ACjEA;ADqEA;EACA,mBAAA;EACA,iBAAA;AClEA;;AAEA,yCAAyC", "file": "Appearence.vue", "sourcesContent": [`<template lang='pug'>
  .settings-container
    section.card
      i18n.is-title-2.c-title(tag='h2') Theme
      SelectorTheme

      //- .c-subcontent
      //-   .c-text-content
      //-     i18n.c-smaller-title(tag='h3') Use high-contrast colors
      //-     i18n.help(tag='p') Increases contrast and improves readability
      //-   label
      //-     i18n.sr-only Increases contrast
      //-     input.switch(
      //-       type='checkbox'
      //-       name='switch'
      //-       :checked='$store.state.increaseContrast'
      //-       @change='handleIncreasedContrast'
      //-     )

      i18n.is-title-2.c-title(tag='h2') Text size
      SelectorFontSize

      i18n.is-title-2.c-title(tag='h2') Animations
      .c-subcontent
        .c-text-content
          i18n.c-smaller-title(tag='h3') Reduced Motion
          i18n.help(tag='p') When enabled the amount of animations you see around are reduced.
        label
          i18n.sr-only Reduced motion
          input.switch(
            type='checkbox'
            name='switch'
            :checked='$store.state.settings.reducedMotion'
            @change='handleReducedMotion'
          )
</template>

<script>
import { mapMutations } from 'vuex'
import SelectorTheme from './Theme.vue'
import SelectorFontSize from './FontSize.vue'

export default ({
  name: 'SettingsAppearence',
  components: {
    SelectorTheme,
    SelectorFontSize
  },
  methods: {
    ...mapMutations([
      'setReducedMotion',
      'setIncreasedContrast'
    ]),
    handleIncreasedContrast (e) {
      this.setIncreasesContrast(e.target.checked)
    },
    handleReducedMotion (e) {
      this.setReducedMotion(e.target.checked)
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  width: 100%;

  @include desktop {
    padding-top: 1.5rem;
  }

  .c-title {
    margin-bottom: 1rem;
  }
}

.c-subcontent {
  border: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
}

.c-smaller-title {
  font-size: $size_4;
  font-weight: bold;
}
</style>
`, ".settings-container {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .settings-container {\n    padding-top: 1.5rem;\n  }\n}\n.settings-container .c-title {\n  margin-bottom: 1rem;\n}\n\n.c-subcontent {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n}\n.c-subcontent:last-child {\n  margin-bottom: 1.5rem;\n}\n\n.c-smaller-title {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=Appearence.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-7ede5cde";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .settings-container
    section.card
      i18n.is-title-2.c-title(tag='h2') Theme
      SelectorTheme

      //- .c-subcontent
      //-   .c-text-content
      //-     i18n.c-smaller-title(tag='h3') Use high-contrast colors
      //-     i18n.help(tag='p') Increases contrast and improves readability
      //-   label
      //-     i18n.sr-only Increases contrast
      //-     input.switch(
      //-       type='checkbox'
      //-       name='switch'
      //-       :checked='$store.state.increaseContrast'
      //-       @change='handleIncreasedContrast'
      //-     )

      i18n.is-title-2.c-title(tag='h2') Text size
      SelectorFontSize

      i18n.is-title-2.c-title(tag='h2') Animations
      .c-subcontent
        .c-text-content
          i18n.c-smaller-title(tag='h3') Reduced Motion
          i18n.help(tag='p') When enabled the amount of animations you see around are reduced.
        label
          i18n.sr-only Reduced motion
          input.switch(
            type='checkbox'
            name='switch'
            :checked='$store.state.settings.reducedMotion'
            @change='handleReducedMotion'
          )
</template>

<script>
import { mapMutations } from 'vuex'
import SelectorTheme from './Theme.vue'
import SelectorFontSize from './FontSize.vue'

export default ({
  name: 'SettingsAppearence',
  components: {
    SelectorTheme,
    SelectorFontSize
  },
  methods: {
    ...mapMutations([
      'setReducedMotion',
      'setIncreasedContrast'
    ]),
    handleIncreasedContrast (e) {
      this.setIncreasesContrast(e.target.checked)
    },
    handleReducedMotion (e) {
      this.setReducedMotion(e.target.checked)
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  width: 100%;

  @include desktop {
    padding-top: 1.5rem;
  }

  .c-title {
    margin-bottom: 1rem;
  }
}

.c-subcontent {
  border: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
}

.c-smaller-title {
  font-size: $size_4;
  font-weight: bold;
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var Appearence_default = __vue_component__5;
export {
  Appearence_default as default
};
//# sourceMappingURL=Appearence-JREAH6CT-cached.js.map
