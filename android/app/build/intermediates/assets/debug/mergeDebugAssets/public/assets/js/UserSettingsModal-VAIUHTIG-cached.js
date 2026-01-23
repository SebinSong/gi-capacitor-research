import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import {
  logExceptNavigationDuplicated
} from "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  SET_MODAL_QUERIES
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/components/tabs/TabItem.vue
var __vue_script__ = {
  name: "TabItem"
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "tab-item" }, [
    _c(
      "div",
      { staticClass: "tab-header" },
      [
        _c(
          "button",
          {
            staticClass: "is-icon tab-back has-background",
            attrs: { "aria-label": "back" },
            on: {
              click: function($event) {
                _vm.$parent.open = !_vm.$parent.open;
              }
            }
          },
          [
            _c("i", {
              staticClass: "icon-chevron-left",
              attrs: { "aria-hidden": "true" }
            })
          ]
        ),
        _c(
          "transition",
          { attrs: { name: _vm.$parent.transitionName, mode: "out-in" } },
          [
            _c(
              "h2",
              { key: _vm.$parent.title, staticClass: "is-title-2 main-title" },
              [_vm._v(_vm._s(_vm.$parent.title))]
            )
          ]
        )
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "tab-body" },
      [
        _c(
          "transition",
          { attrs: { name: _vm.$parent.transitionName, mode: "out-in" } },
          [_c(_vm.$parent.activeComponent, { tag: "component" })],
          1
        )
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-3f0c32e0_0", { source: ".tab-header[data-v-3f0c32e0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  height: 4.75rem;\n  width: 100%;\n  z-index: 3;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 1200px) {\n.tab-header[data-v-3f0c32e0] {\n    justify-content: start;\n    background-color: transparent;\n    position: relative;\n}\n}\n@media screen and (min-width: 1200px) {\n.main-title[data-v-3f0c32e0] {\n    margin: 2.5rem 0 0 27px;\n}\n}\n.tab-back[data-v-3f0c32e0] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  z-index: 1;\n}\n@media screen and (min-width: 1200px) {\n.tab-back[data-v-3f0c32e0] {\n    display: none;\n}\n}\n.tab-body[data-v-3f0c32e0] {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n.tab-body[data-v-3f0c32e0] {\n    justify-content: flex-start;\n    padding-top: 0;\n    max-width: 43rem;\n}\n}\n\n/*# sourceMappingURL=TabItem.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/tabs/TabItem.vue", "TabItem.vue"], "names": [], "mappings": "AA2BA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,MAAA;EACA,eAAA;EACA,WAAA;EACA,UAAA;EACA,qCAAA;AC1BA;ADoDA;AAnCA;IAYA,sBAAA;IACA,6BAAA;IACA,kBAAA;ACzBE;AACF;AD6CA;AAjBA;IAEA,uBAAA;ACzBE;AACF;AD4BA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;ACzBA;ADgCA;AAXA;IAOA,aAAA;ACxBE;AACF;AD2BA;EACA,aAAA;EACA,uBAAA;EACA,+BAAA;ACxBA;ADqBA;AAAA;IAMA,2BAAA;IACA,cAAA;IACA,gBAAA;ACvBE;AACF;;AAEA,sCAAsC", "file": "TabItem.vue", "sourcesContent": [`<template lang='pug'>
  .tab-item
    .tab-header
      button.is-icon.tab-back.has-background(
        aria-label='back'
        @click='$parent.open = !$parent.open'
      )
        i.icon-chevron-left(aria-hidden='true')

      transition(:name='$parent.transitionName' mode='out-in')
        h2.is-title-2.main-title(:key='$parent.title') {{ $parent.title }}

    .tab-body
      transition(:name='$parent.transitionName' mode='out-in')
        component(v-bind:is='$parent.activeComponent')
</template>

<script>
export default ({
  name: 'TabItem'
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

// Header
.tab-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 4.75rem;
  width: 100%;
  z-index: 3;
  background-color: $background;

  @include desktop {
    justify-content: start;
    background-color: transparent;
    position: relative;
  }
}

.main-title {
  @include desktop {
    margin: 2.5rem 0 0 27px;
  }
}

.tab-back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;

  @include desktop {
    display: none;
  }
}

.tab-body {
  display: flex;
  justify-content: center;
  padding: 1.5rem 1.5rem 0 1.5rem;

  @include desktop {
    justify-content: flex-start;
    padding-top: 0;
    max-width: 43rem;
  }
}
</style>
`, ".tab-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  height: 4.75rem;\n  width: 100%;\n  z-index: 3;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 1200px) {\n  .tab-header {\n    justify-content: start;\n    background-color: transparent;\n    position: relative;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .main-title {\n    margin: 2.5rem 0 0 27px;\n  }\n}\n\n.tab-back {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  z-index: 1;\n}\n@media screen and (min-width: 1200px) {\n  .tab-back {\n    display: none;\n  }\n}\n\n.tab-body {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .tab-body {\n    justify-content: flex-start;\n    padding-top: 0;\n    max-width: 43rem;\n  }\n}\n\n/*# sourceMappingURL=TabItem.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-3f0c32e0";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .tab-item
    .tab-header
      button.is-icon.tab-back.has-background(
        aria-label='back'
        @click='$parent.open = !$parent.open'
      )
        i.icon-chevron-left(aria-hidden='true')

      transition(:name='$parent.transitionName' mode='out-in')
        h2.is-title-2.main-title(:key='$parent.title') {{ $parent.title }}

    .tab-body
      transition(:name='$parent.transitionName' mode='out-in')
        component(v-bind:is='$parent.activeComponent')
</template>

<script>
export default ({
  name: 'TabItem'
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

// Header
.tab-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 4.75rem;
  width: 100%;
  z-index: 3;
  background-color: $background;

  @include desktop {
    justify-content: start;
    background-color: transparent;
    position: relative;
  }
}

.main-title {
  @include desktop {
    margin: 2.5rem 0 0 27px;
  }
}

.tab-back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;

  @include desktop {
    display: none;
  }
}

.tab-body {
  display: flex;
  justify-content: center;
  padding: 1.5rem 1.5rem 0 1.5rem;

  @include desktop {
    justify-content: flex-start;
    padding-top: 0;
    max-width: 43rem;
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
var TabItem_default = __vue_component__;

// frontend/views/components/tabs/TabWrapper.vue
var __vue_script__2 = {
  name: "TabWrapper",
  components: {
    TabItem: TabItem_default
  },
  props: {
    tabNav: Array,
    defaultTab: String
    // initial tab name
  },
  data() {
    return {
      activeTab: 0,
      activeComponent: null,
      title: "",
      transitionName: "",
      open: true,
      // reveal/hide the side-menu
      subNav: [
        { html: "" },
        // this will get filled in `mounted()` below
        {
          title: L("Acknowledgements"),
          url: "acknowledgements",
          component: "Acknowledgements",
          index: 11
          // NOTE: index should not be duplicated with the link of tabNav
        }
      ]
    };
  },
  computed: {
    ...mapGetters([
      "isDarkTheme"
    ])
  },
  watch: {
    "$route"(to, from) {
      const tab = to.query.tab;
      if (!tab) return;
      for (const tabItem of this.tabNav) {
        for (const link of tabItem.links) {
          if (this.activeTab !== link.index && link.url === tab) {
            this.activeComponent = link.component;
            return this.changeTab(link.index);
          }
        }
      }
    }
  },
  methods: {
    /**
     * Change the active tab.
     */
    changeTab(newIndex) {
      if (this.activeTab === newIndex) return;
      this.transitionName = this.activeTab < newIndex ? "slide-next" : "slide-prev";
      this.activeTab = newIndex;
    },
    /**
     * Tab click listener change active tab.
     */
    async tabClick(tabItem) {
      if (!tabItem.url) {
        return;
      }
      this.title = tabItem.title;
      this.activeComponent = tabItem.component;
      if (tabItem.index !== void 0) {
        const query = {
          ...this.$route.query,
          tab: tabItem.url
        };
        this.$router.push({ query }).catch(logExceptNavigationDuplicated);
        this.changeTab(tabItem.index);
      } else {
        try {
          await esm_default(tabItem.action);
          this.$emit("close");
        } catch (e) {
          console.error(`Error on tabClick: [${e?.name}] ${e?.message || e}`, tabItem, e);
          alert(`An error occurred: ${e?.name}`);
        }
      }
      this.hideMenu();
    },
    hideMenu() {
      this.open = false;
    },
    showMenu() {
      this.open = true;
    }
  },
  mounted() {
    const defaultTab = this.$route.query.tab || this.defaultTab;
    const hasQueriedTab = defaultTab === this.$route.query.tab;
    if (defaultTab) {
      const switchTabIfMatch = (link) => {
        if (defaultTab === link.url) {
          this.activeTab = link.index;
          this.title = link.title;
          this.activeComponent = link.component;
          if (hasQueriedTab) {
            this.hideMenu();
          }
        }
      };
      const allTabNavLinks = this.tabNav.reduce(
        (allLinks, item) => [...allLinks, ...item.links],
        []
      );
      const fallbackLink = allTabNavLinks.find((item) => item.url === "my-account");
      allTabNavLinks.forEach((item) => {
        switchTabIfMatch(item);
      });
      this.subNav.forEach((navItem) => {
        switchTabIfMatch(navItem);
      });
      if (!this.activeComponent) {
        this.tabClick(fallbackLink);
      }
    }
    ;
    (async () => {
      const appVersion = "2.5.1@2026-01-22T10:19:51.672Z".split("@")[0];
      const contractsVersion = "2.5.0";
      let swVer = "";
      try {
        swVer = (await esm_default("sw/version")).GI_GIT_VERSION.slice(1);
      } catch (e) {
        swVer = `ERR: ${e.message}`;
      }
      this.subNav[0].html = L("App Version: {appVersion}{br_}Contracts Version: {contractsVersion}{br_}SW Version: {swVer}", {
        ...LTags(),
        appVersion,
        contractsVersion,
        swVer
      });
    })();
  },
  beforeDestroy() {
    this.$router.push(this.$route.query).catch(logExceptNavigationDuplicated);
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "tab-wrapper", class: { open: _vm.open } }, [
    _c(
      "nav",
      { staticClass: "tab-nav-sidebar", attrs: { "aria-label": "navigation" } },
      [
        _c(
          "div",
          { staticClass: "tab-nav-header" },
          [
            _c(
              "i18n",
              { staticClass: "is-title-2 menu-title", attrs: { tag: "h2" } },
              [_vm._v("Settings")]
            )
          ],
          1
        ),
        _vm._l(_vm.tabNav, function(tabItem, index) {
          return _c(
            "div",
            { key: index, staticClass: "tab-nav-list" },
            [
              tabItem.legend ? _c("legend", { staticClass: "tab-legend" }, [
                _vm._v(_vm._s(tabItem.legend))
              ]) : _vm._e(),
              _vm._l(tabItem.links, function(link, index2) {
                return _c(
                  "a",
                  {
                    key: index2,
                    staticClass: "tab-link no-border",
                    class: {
                      "is-active": _vm.activeTab === link.index,
                      "has-text-white": _vm.isDarkTheme
                    },
                    attrs: { "data-test": "link-" + link.url },
                    on: {
                      click: function($event) {
                        return _vm.tabClick(link);
                      }
                    }
                  },
                  [_vm._v(_vm._s(link.title)), _vm._m(0, true)]
                );
              }),
              _c("hr", { staticClass: "tab-nav-separator" })
            ],
            2
          );
        }),
        _vm._l(_vm.subNav, function(tabItem, index) {
          return _c(
            "div",
            {
              key: "sub-" + index,
              staticClass: "tab-nav-list is-subtitle",
              class: { sublink: tabItem.url },
              attrs: { "data-test": "link-" + tabItem.url },
              on: {
                click: function($event) {
                  return _vm.tabClick(tabItem);
                }
              }
            },
            [
              tabItem.html ? _c("span", {
                directives: [
                  {
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: tabItem.html,
                    expression: "tabItem.html"
                  }
                ]
              }) : _c("span", [_vm._v(" " + _vm._s(tabItem.title))])
            ]
          );
        })
      ],
      2
    ),
    _c("section", { staticClass: "tab-section" }, [_c("tab-item")], 1)
  ]);
};
var __vue_staticRenderFns__2 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "c-icons" }, [
      _c("i", { staticClass: "icon-chevron-right" })
    ]);
  }
];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-f31cba2c_0", { source: '.tab-wrapper[data-v-f31cba2c] {\n  position: relative;\n  z-index: 4;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n@media screen and (min-width: 1200px) {\n.tab-wrapper[data-v-f31cba2c] {\n    z-index: 2;\n}\n}\n.tab-nav-header[data-v-f31cba2c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  min-height: 4.75rem;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 769px), print {\n.tab-nav-header[data-v-f31cba2c] {\n    min-height: 5.75rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.tab-nav-header[data-v-f31cba2c] {\n    display: none;\n}\n}\n.tab-nav-sidebar[data-v-f31cba2c] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(-100%);\n  z-index: 2;\n  font-family: "Poppins";\n  background-color: var(--general_2);\n  overflow: hidden auto;\n}\n@media screen and (min-width: 1200px) {\n.tab-nav-sidebar[data-v-f31cba2c] {\n    position: relative;\n    align-items: flex-end;\n    width: 35%;\n    transform: translateX(0);\n}\n}\n.tab-legend[data-v-f31cba2c] {\n  color: var(--text_1);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n.tab-legend[data-v-f31cba2c] {\n    letter-spacing: 0.1px;\n}\n}\n.tab-link[data-v-f31cba2c] {\n  display: flex;\n  justify-content: space-between;\n  height: 3rem;\n}\n.tab-legend[data-v-f31cba2c],\n.tab-link[data-v-f31cba2c] {\n  display: flex;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 150ms cubic-bezier(0.4, 0.25, 0.3, 1);\n}\n.c-icons[data-v-f31cba2c] {\n  color: var(--text_1);\n}\n@media screen and (min-width: 1200px) {\n.c-icons[data-v-f31cba2c] {\n    display: none;\n}\n}\n.tab-nav-list[data-v-f31cba2c] {\n  display: flex;\n  flex-direction: column;\n  width: 28rem;\n  max-width: calc(100% - 1rem);\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n.tab-nav-list[data-v-f31cba2c] {\n    width: 11rem;\n}\n}\n.tab-nav-list.is-subtitle[data-v-f31cba2c] {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  text-transform: unset;\n  font-family: "Lato";\n}\n.tab-nav-header + .tab-nav-list[data-v-f31cba2c] {\n  padding-top: 3rem;\n}\n.tab-link[data-v-f31cba2c]:hover {\n  background-color: var(--general_1);\n}\n@media screen and (min-width: 1200px) {\n.is-active[data-v-f31cba2c] {\n    background-color: var(--background_0);\n    font-weight: bold;\n}\n}\n.tab-nav-separator[data-v-f31cba2c] {\n  height: 1px;\n  margin: 1rem 1rem 0;\n  background: var(--general_0);\n}\n@media screen and (min-width: 1200px) {\n.tab-nav-separator[data-v-f31cba2c] {\n    margin-right: 0;\n}\n}\n.tab-section[data-v-f31cba2c] {\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(0%);\n  overflow: auto;\n  width: 100%;\n}\n.open[data-v-f31cba2c] {\n  z-index: 2;\n}\n.open .tab-nav-sidebar[data-v-f31cba2c] {\n  transform: translateX(0);\n}\n@media screen and (min-width: 1200px) {\n.open .tab-section[data-v-f31cba2c] {\n    transform: translateX(0);\n}\n}\n\n/*# sourceMappingURL=TabWrapper.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/tabs/TabWrapper.vue", "TabWrapper.vue"], "names": [], "mappings": "AA4MA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;AC3MA;AACA;ADqMA;IAQA,UAAA;AC1ME;AACF;AD8MA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,qCAAA;AC3MA;AACA;ADmMA;IAUA,mBAAA;AC1ME;AACF;AACA;AD8LA;IAcA,aAAA;ACzME;AACF;AD6MA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,8DAAA;EACA,4BAAA;EACA,UAAA;EACA,sBAAA;EACA,kCAAA;EACA,qBAAA;AC1MA;AACA;AD6LA;IAeA,kBAAA;IACA,qBAAA;IACA,UAAA;IACA,wBAAA;ACzME;AACF;AD4MA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qBAAA;ACzMA;AACA;ADoMA;IAOA,qBAAA;ACxME;AACF;AD2MA;EACA,aAAA;EACA,8BAAA;EACA,YAAA;ACxMA;AD2MA;;EAEA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,kEAAA;ACxMA;AD2MA;EACA,oBAAA;ACxMA;AACA;ADsMA;IAIA,aAAA;ACvME;AACF;AD0MA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,4BAAA;EACA,mBAAA;ACvMA;AACA;ADiMA;IAQA,YAAA;ACtME;AACF;ADyMA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;ACtMA;ADyMA;EACA,iBAAA;ACtMA;ADyMA;EACA,kCAAA;ACtMA;AAEA;ADuMA;IAEA,qCAAA;IACA,iBAAA;ACtME;AACF;ADyMA;EACA,WAAA;EACA,mBAAA;EACA,4BAAA;ACtMA;AACA;ADkMA;IAMA,eAAA;ACrME;AACF;ADyMA;EACA,8DAAA;EACA,yBAAA;EACA,cAAA;EACA,WAAA;ACtMA;AD0MA;EACA,UAAA;ACvMA;ADwMA;EACA,wBAAA;ACtMA;AACA;ADwMA;IAIA,wBAAA;ACzME;AACF;;AAEA,yCAAyC", "file": "TabWrapper.vue", "sourcesContent": ["<template lang='pug'>\n  .tab-wrapper(:class='{\"open\": open}')\n    nav.tab-nav-sidebar(aria-label='navigation')\n      .tab-nav-header\n        i18n.is-title-2.menu-title(tag='h2') Settings\n\n      .tab-nav-list(\n        v-for='(tabItem, index) in tabNav'\n        :key='index'\n      )\n        legend.tab-legend(v-if='tabItem.legend') {{ tabItem.legend }}\n\n        a.tab-link.no-border(\n          v-for='(link, index) in tabItem.links'\n          :key='index'\n          :class='{ \"is-active\": activeTab === link.index, \"has-text-white\": isDarkTheme}'\n          :data-test='`link-${link.url}`'\n          @click='tabClick(link)'\n        )\n          | {{ link.title }}\n          .c-icons\n            i.icon-chevron-right\n\n        hr.tab-nav-separator\n\n      .tab-nav-list.is-subtitle(\n        v-for='(tabItem, index) in subNav'\n        :key='\"sub-\" + index'\n        :class='{ \"sublink\": tabItem.url }'\n        :data-test='`link-${tabItem.url}`'\n        @click='tabClick(tabItem)'\n      )\n        span(v-if='tabItem.html' v-safe-html='tabItem.html')\n        span(v-else)  {{ tabItem.title }}\n\n    section.tab-section\n      tab-item\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { mapGetters } from 'vuex'\nimport TabItem from '../../../../frontend/views/components/tabs/TabItem.vue'\nimport { logExceptNavigationDuplicated } from '../../../../frontend/views/utils/misc.js'\nimport { L, LTags } from '../../../../frontend/common/common.js'\n\nexport default ({\n  name: 'TabWrapper',\n  components: {\n    TabItem\n  },\n  props: {\n    tabNav: Array,\n    defaultTab: String // initial tab name\n  },\n  data () {\n    return {\n      activeTab: 0,\n      activeComponent: null,\n      title: '',\n      transitionName: '',\n      open: true, // reveal/hide the side-menu\n      subNav: [\n        { html: '' }, // this will get filled in `mounted()` below\n        {\n          title: L('Acknowledgements'),\n          url: 'acknowledgements',\n          component: 'Acknowledgements',\n          index: 11 // NOTE: index should not be duplicated with the link of tabNav\n        }\n      ]\n    }\n  },\n  computed: {\n    ...mapGetters([\n      'isDarkTheme'\n    ])\n  },\n  watch: {\n    '$route' (to, from) {\n      const tab = to.query.tab\n      if (!tab) return\n\n      for (const tabItem of this.tabNav) {\n        for (const link of tabItem.links) {\n          if (this.activeTab !== link.index && link.url === tab) {\n            this.activeComponent = link.component\n            return this.changeTab(link.index)\n          }\n        }\n      }\n    }\n  },\n  methods: {\n    /**\n     * Change the active tab.\n     */\n    changeTab (newIndex) {\n      if (this.activeTab === newIndex) return\n      this.transitionName = this.activeTab < newIndex\n        ? 'slide-next'\n        : 'slide-prev'\n      this.activeTab = newIndex\n    },\n    /**\n     * Tab click listener change active tab.\n     */\n    async tabClick (tabItem) {\n      if (!tabItem.url) {\n        return\n      }\n      this.title = tabItem.title\n      this.activeComponent = tabItem.component\n\n      if (tabItem.index !== undefined) {\n        const query = {\n          ...this.$route.query,\n          tab: tabItem.url\n        }\n        this.$router.push({ query }).catch(logExceptNavigationDuplicated)\n        this.changeTab(tabItem.index)\n      } else {\n        // The action could be asynchronous, so we wrap it in a try-catch block\n        try {\n          await sbp(tabItem.action)\n          this.$emit('close')\n        } catch (e) {\n          console.error(`Error on tabClick: [${e?.name}] ${e?.message || e}`, tabItem, e)\n          alert(`An error occurred: ${e?.name}`)\n        }\n      }\n\n      this.hideMenu()\n    },\n    hideMenu () {\n      this.open = false\n    },\n    showMenu () {\n      this.open = true\n    }\n  },\n  mounted () {\n    const defaultTab = this.$route.query.tab || this.defaultTab\n    const hasQueriedTab = defaultTab === this.$route.query.tab\n\n    if (defaultTab) {\n      const switchTabIfMatch = (link) => {\n        if (defaultTab === link.url) {\n          this.activeTab = link.index\n          this.title = link.title\n          this.activeComponent = link.component\n\n          if (hasQueriedTab) {\n            this.hideMenu()\n          }\n        }\n      }\n      const allTabNavLinks = this.tabNav.reduce(\n        (allLinks, item) => [...allLinks, ...item.links], []\n      )\n      // 'fallbackLink' below is for the case where the specified tab route query doesn't match any available tab items in the list. (e.g. ?modal=UserSettings&tab=asdfsadf)\n      // we need to manually direct it to the 'my-account' tab in this case.\n      const fallbackLink = allTabNavLinks.find(item => item.url === 'my-account')\n\n      allTabNavLinks.forEach(item => {\n        switchTabIfMatch(item)\n      })\n      this.subNav.forEach(navItem => {\n        switchTabIfMatch(navItem)\n      })\n\n      if (!this.activeComponent) {\n        // if still no matching link is found, fallback to 'my-account' tab.\n        this.tabClick(fallbackLink)\n      }\n    }\n\n    ;(async () => {\n      const appVersion = process.env.GI_VERSION.split('@')[0]\n      const contractsVersion = process.env.CONTRACTS_VERSION\n      let swVer: string = ''\n      try {\n        swVer = (await sbp('sw/version')).GI_GIT_VERSION.slice(1)\n      } catch (e) {\n        swVer = `ERR: ${e.message}`\n      }\n      this.subNav[0].html = L('App Version: {appVersion}{br_}Contracts Version: {contractsVersion}{br_}SW Version: {swVer}', {\n        ...LTags(),\n        appVersion,\n        contractsVersion,\n        swVer\n      })\n    })()\n  },\n  beforeDestroy () {\n    this.$router.push(this.$route.query).catch(logExceptNavigationDuplicated)\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n// Page wrapper\n.tab-wrapper {\n  position: relative;\n  z-index: 4; // Hide close button on mobile\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n\n  @include desktop {\n    z-index: 2;\n  }\n}\n\n// Header\n.tab-nav-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  min-height: 4.75rem;\n  background-color: $background;\n\n  @include tablet {\n    min-height: 5.75rem;\n  }\n\n  @include desktop {\n    display: none;\n  }\n}\n\n// Sidebar\n.tab-nav-sidebar {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(-100%);\n  z-index: 2;\n  font-family: \"Poppins\";\n  background-color: $general_2;\n  overflow: hidden auto;\n\n  @include desktop {\n    position: relative;\n    align-items: flex-end;\n    width: 35%;\n    transform: translateX(0);\n  }\n}\n\n.tab-legend {\n  color: $text_1;\n  font-size: $size_5;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n\n  @include desktop {\n    letter-spacing: 0.1px;\n  }\n}\n\n.tab-link {\n  display: flex;\n  justify-content: space-between;\n  height: 3rem;\n}\n\n.tab-legend,\n.tab-link {\n  display: flex;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 150ms cubic-bezier(0.4, 0.25, 0.3, 1);\n}\n\n.c-icons {\n  color: $text_1;\n\n  @include desktop {\n    display: none;\n  }\n}\n\n.tab-nav-list {\n  display: flex;\n  flex-direction: column;\n  width: 28rem;\n  max-width: calc(100% - 1rem);\n  padding-top: 1.5rem;\n\n  @include desktop {\n    width: 11rem;\n  }\n}\n\n.tab-nav-list.is-subtitle {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  text-transform: unset;\n  font-family: \"Lato\";\n}\n\n.tab-nav-header + .tab-nav-list {\n  padding-top: 3rem;\n}\n\n.tab-link:hover {\n  background-color: $general_1;\n}\n\n.is-active {\n  @include desktop {\n    background-color: $background_0;\n    font-weight: bold;\n  }\n}\n\n.tab-nav-separator {\n  height: 1px;\n  margin: 1rem 1rem 0;\n  background: $general_0;\n\n  @include desktop {\n    margin-right: 0;\n  }\n}\n\n// Main content\n.tab-section {\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(0%);\n  overflow: auto;\n  width: 100%;\n}\n\n// Open state\n.open {\n  z-index: 2; // Show close button on mobile\n  .tab-nav-sidebar {\n    transform: translateX(0);\n  }\n\n  .tab-section {\n    // transform: translateX(10%);\n\n    @include desktop {\n      transform: translateX(0);\n    }\n  }\n}\n</style>\n", '.tab-wrapper {\n  position: relative;\n  z-index: 4;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n@media screen and (min-width: 1200px) {\n  .tab-wrapper {\n    z-index: 2;\n  }\n}\n\n.tab-nav-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  min-height: 4.75rem;\n  background-color: var(--background_0);\n}\n@media screen and (min-width: 769px), print {\n  .tab-nav-header {\n    min-height: 5.75rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .tab-nav-header {\n    display: none;\n  }\n}\n\n.tab-nav-sidebar {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(-100%);\n  z-index: 2;\n  font-family: "Poppins";\n  background-color: var(--general_2);\n  overflow: hidden auto;\n}\n@media screen and (min-width: 1200px) {\n  .tab-nav-sidebar {\n    position: relative;\n    align-items: flex-end;\n    width: 35%;\n    transform: translateX(0);\n  }\n}\n\n.tab-legend {\n  color: var(--text_1);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .tab-legend {\n    letter-spacing: 0.1px;\n  }\n}\n\n.tab-link {\n  display: flex;\n  justify-content: space-between;\n  height: 3rem;\n}\n\n.tab-legend,\n.tab-link {\n  display: flex;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 150ms cubic-bezier(0.4, 0.25, 0.3, 1);\n}\n\n.c-icons {\n  color: var(--text_1);\n}\n@media screen and (min-width: 1200px) {\n  .c-icons {\n    display: none;\n  }\n}\n\n.tab-nav-list {\n  display: flex;\n  flex-direction: column;\n  width: 28rem;\n  max-width: calc(100% - 1rem);\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .tab-nav-list {\n    width: 11rem;\n  }\n}\n\n.tab-nav-list.is-subtitle {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  text-transform: unset;\n  font-family: "Lato";\n}\n\n.tab-nav-header + .tab-nav-list {\n  padding-top: 3rem;\n}\n\n.tab-link:hover {\n  background-color: var(--general_1);\n}\n\n@media screen and (min-width: 1200px) {\n  .is-active {\n    background-color: var(--background_0);\n    font-weight: bold;\n  }\n}\n\n.tab-nav-separator {\n  height: 1px;\n  margin: 1rem 1rem 0;\n  background: var(--general_0);\n}\n@media screen and (min-width: 1200px) {\n  .tab-nav-separator {\n    margin-right: 0;\n  }\n}\n\n.tab-section {\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(0%);\n  overflow: auto;\n  width: 100%;\n}\n\n.open {\n  z-index: 2;\n}\n.open .tab-nav-sidebar {\n  transform: translateX(0);\n}\n@media screen and (min-width: 1200px) {\n  .open .tab-section {\n    transform: translateX(0);\n  }\n}\n\n/*# sourceMappingURL=TabWrapper.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-f31cba2c";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  .tab-wrapper(:class='{\"open\": open}')\n    nav.tab-nav-sidebar(aria-label='navigation')\n      .tab-nav-header\n        i18n.is-title-2.menu-title(tag='h2') Settings\n\n      .tab-nav-list(\n        v-for='(tabItem, index) in tabNav'\n        :key='index'\n      )\n        legend.tab-legend(v-if='tabItem.legend') {{ tabItem.legend }}\n\n        a.tab-link.no-border(\n          v-for='(link, index) in tabItem.links'\n          :key='index'\n          :class='{ \"is-active\": activeTab === link.index, \"has-text-white\": isDarkTheme}'\n          :data-test='`link-${link.url}`'\n          @click='tabClick(link)'\n        )\n          | {{ link.title }}\n          .c-icons\n            i.icon-chevron-right\n\n        hr.tab-nav-separator\n\n      .tab-nav-list.is-subtitle(\n        v-for='(tabItem, index) in subNav'\n        :key='\"sub-\" + index'\n        :class='{ \"sublink\": tabItem.url }'\n        :data-test='`link-${tabItem.url}`'\n        @click='tabClick(tabItem)'\n      )\n        span(v-if='tabItem.html' v-safe-html='tabItem.html')\n        span(v-else)  {{ tabItem.title }}\n\n    section.tab-section\n      tab-item\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { mapGetters } from 'vuex'\nimport TabItem from '../../../../frontend/views/components/tabs/TabItem.vue'\nimport { logExceptNavigationDuplicated } from '../../../../frontend/views/utils/misc.js'\nimport { L, LTags } from '../../../../frontend/common/common.js'\n\nexport default ({\n  name: 'TabWrapper',\n  components: {\n    TabItem\n  },\n  props: {\n    tabNav: Array,\n    defaultTab: String // initial tab name\n  },\n  data () {\n    return {\n      activeTab: 0,\n      activeComponent: null,\n      title: '',\n      transitionName: '',\n      open: true, // reveal/hide the side-menu\n      subNav: [\n        { html: '' }, // this will get filled in `mounted()` below\n        {\n          title: L('Acknowledgements'),\n          url: 'acknowledgements',\n          component: 'Acknowledgements',\n          index: 11 // NOTE: index should not be duplicated with the link of tabNav\n        }\n      ]\n    }\n  },\n  computed: {\n    ...mapGetters([\n      'isDarkTheme'\n    ])\n  },\n  watch: {\n    '$route' (to, from) {\n      const tab = to.query.tab\n      if (!tab) return\n\n      for (const tabItem of this.tabNav) {\n        for (const link of tabItem.links) {\n          if (this.activeTab !== link.index && link.url === tab) {\n            this.activeComponent = link.component\n            return this.changeTab(link.index)\n          }\n        }\n      }\n    }\n  },\n  methods: {\n    /**\n     * Change the active tab.\n     */\n    changeTab (newIndex) {\n      if (this.activeTab === newIndex) return\n      this.transitionName = this.activeTab < newIndex\n        ? 'slide-next'\n        : 'slide-prev'\n      this.activeTab = newIndex\n    },\n    /**\n     * Tab click listener change active tab.\n     */\n    async tabClick (tabItem) {\n      if (!tabItem.url) {\n        return\n      }\n      this.title = tabItem.title\n      this.activeComponent = tabItem.component\n\n      if (tabItem.index !== undefined) {\n        const query = {\n          ...this.$route.query,\n          tab: tabItem.url\n        }\n        this.$router.push({ query }).catch(logExceptNavigationDuplicated)\n        this.changeTab(tabItem.index)\n      } else {\n        // The action could be asynchronous, so we wrap it in a try-catch block\n        try {\n          await sbp(tabItem.action)\n          this.$emit('close')\n        } catch (e) {\n          console.error(`Error on tabClick: [${e?.name}] ${e?.message || e}`, tabItem, e)\n          alert(`An error occurred: ${e?.name}`)\n        }\n      }\n\n      this.hideMenu()\n    },\n    hideMenu () {\n      this.open = false\n    },\n    showMenu () {\n      this.open = true\n    }\n  },\n  mounted () {\n    const defaultTab = this.$route.query.tab || this.defaultTab\n    const hasQueriedTab = defaultTab === this.$route.query.tab\n\n    if (defaultTab) {\n      const switchTabIfMatch = (link) => {\n        if (defaultTab === link.url) {\n          this.activeTab = link.index\n          this.title = link.title\n          this.activeComponent = link.component\n\n          if (hasQueriedTab) {\n            this.hideMenu()\n          }\n        }\n      }\n      const allTabNavLinks = this.tabNav.reduce(\n        (allLinks, item) => [...allLinks, ...item.links], []\n      )\n      // 'fallbackLink' below is for the case where the specified tab route query doesn't match any available tab items in the list. (e.g. ?modal=UserSettings&tab=asdfsadf)\n      // we need to manually direct it to the 'my-account' tab in this case.\n      const fallbackLink = allTabNavLinks.find(item => item.url === 'my-account')\n\n      allTabNavLinks.forEach(item => {\n        switchTabIfMatch(item)\n      })\n      this.subNav.forEach(navItem => {\n        switchTabIfMatch(navItem)\n      })\n\n      if (!this.activeComponent) {\n        // if still no matching link is found, fallback to 'my-account' tab.\n        this.tabClick(fallbackLink)\n      }\n    }\n\n    ;(async () => {\n      const appVersion = process.env.GI_VERSION.split('@')[0]\n      const contractsVersion = process.env.CONTRACTS_VERSION\n      let swVer: string = ''\n      try {\n        swVer = (await sbp('sw/version')).GI_GIT_VERSION.slice(1)\n      } catch (e) {\n        swVer = `ERR: ${e.message}`\n      }\n      this.subNav[0].html = L('App Version: {appVersion}{br_}Contracts Version: {contractsVersion}{br_}SW Version: {swVer}', {\n        ...LTags(),\n        appVersion,\n        contractsVersion,\n        swVer\n      })\n    })()\n  },\n  beforeDestroy () {\n    this.$router.push(this.$route.query).catch(logExceptNavigationDuplicated)\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n// Page wrapper\n.tab-wrapper {\n  position: relative;\n  z-index: 4; // Hide close button on mobile\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n\n  @include desktop {\n    z-index: 2;\n  }\n}\n\n// Header\n.tab-nav-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  min-height: 4.75rem;\n  background-color: $background;\n\n  @include tablet {\n    min-height: 5.75rem;\n  }\n\n  @include desktop {\n    display: none;\n  }\n}\n\n// Sidebar\n.tab-nav-sidebar {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(-100%);\n  z-index: 2;\n  font-family: \"Poppins\";\n  background-color: $general_2;\n  overflow: hidden auto;\n\n  @include desktop {\n    position: relative;\n    align-items: flex-end;\n    width: 35%;\n    transform: translateX(0);\n  }\n}\n\n.tab-legend {\n  color: $text_1;\n  font-size: $size_5;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n\n  @include desktop {\n    letter-spacing: 0.1px;\n  }\n}\n\n.tab-link {\n  display: flex;\n  justify-content: space-between;\n  height: 3rem;\n}\n\n.tab-legend,\n.tab-link {\n  display: flex;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 150ms cubic-bezier(0.4, 0.25, 0.3, 1);\n}\n\n.c-icons {\n  color: $text_1;\n\n  @include desktop {\n    display: none;\n  }\n}\n\n.tab-nav-list {\n  display: flex;\n  flex-direction: column;\n  width: 28rem;\n  max-width: calc(100% - 1rem);\n  padding-top: 1.5rem;\n\n  @include desktop {\n    width: 11rem;\n  }\n}\n\n.tab-nav-list.is-subtitle {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  text-transform: unset;\n  font-family: \"Lato\";\n}\n\n.tab-nav-header + .tab-nav-list {\n  padding-top: 3rem;\n}\n\n.tab-link:hover {\n  background-color: $general_1;\n}\n\n.is-active {\n  @include desktop {\n    background-color: $background_0;\n    font-weight: bold;\n  }\n}\n\n.tab-nav-separator {\n  height: 1px;\n  margin: 1rem 1rem 0;\n  background: $general_0;\n\n  @include desktop {\n    margin-right: 0;\n  }\n}\n\n// Main content\n.tab-section {\n  transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: translateX(0%);\n  overflow: auto;\n  width: 100%;\n}\n\n// Open state\n.open {\n  z-index: 2; // Show close button on mobile\n  .tab-nav-sidebar {\n    transform: translateX(0);\n  }\n\n  .tab-section {\n    // transform: translateX(10%);\n\n    @include desktop {\n      transform: translateX(0);\n    }\n  }\n}\n</style>\n";
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
var TabWrapper_default = __vue_component__2;

// frontend/views/containers/user-settings/settings.js
var settings_default = {
  activeTab: 3,
  settings: [{
    legend: L("User settings"),
    links: [
      {
        title: L("My account"),
        url: "my-account",
        component: "UserProfile",
        index: 0
      }
    ]
  }, {
    legend: L("App settings"),
    links: [
      {
        title: L("Notifications"),
        url: "notifications",
        component: "NotificationSettings",
        index: 2
      },
      {
        title: L("Appearance"),
        url: "appearance",
        component: "Appearence",
        index: 3
      }
    ]
  }, {
    legend: L("Advanced"),
    links: [
      {
        title: L("Application Logs"),
        url: "application-logs",
        component: "AppLogs",
        index: 4
      },
      {
        title: L("Troubleshooting"),
        url: "troubleshooting",
        component: "Troubleshooting",
        index: 5
      }
    ]
  }, {
    links: [
      {
        title: L("Log Out"),
        url: "logout",
        action: "gi.app/identity/logout"
      }
    ]
  }]
};

// frontend/views/containers/user-settings/UserSettingsModal.vue
var __vue_script__3 = {
  name: "UserSettingsModal",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    TabWrapper: TabWrapper_default
  },
  data() {
    return settings_default;
  },
  created() {
    esm_default("okTurtles.events/emit", SET_MODAL_QUERIES, "UserSettingsModal", { tab: true });
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    { staticClass: "has-background", attrs: { a11yTitle: _vm.L("Settings") } },
    [
      _c(
        "div",
        { staticClass: "wrapper-container" },
        [
          _c("tab-wrapper", {
            attrs: { tabNav: _vm.settings, defaultTab: "my-account" },
            on: {
              close: function($event) {
                return _vm.$emit("close");
              }
            }
          })
        ],
        1
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-4e460696_0", { source: ".wrapper-container[data-v-4e460696] {\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  background-color: var(--general_2);\n}\n@media screen and (max-width: 768px) {\n.wrapper-container[data-v-4e460696] {\n    width: calc(100% + 2rem);\n}\n}\n@media screen and (min-width: 769px), print {\n.wrapper-container[data-v-4e460696] {\n    width: calc(100% + 3rem);\n}\n}\n\n/*# sourceMappingURL=UserSettingsModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/UserSettingsModal.vue", "UserSettingsModal.vue"], "names": [], "mappings": "AAmCA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,kCAAA;AClCA;AACA;AD6BA;IAOA,wBAAA;ACjCE;AACF;AACA;ADwBA;IAWA,wBAAA;AChCE;AACF;;AAEA,gDAAgD", "file": "UserSettingsModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template(class='has-background' :a11yTitle='L("Settings")')
  .wrapper-container
    tab-wrapper(
      :tabNav='settings'
      defaultTab='my-account'
      @close='$emit("close")'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import { SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import TabWrapper from '../../../../frontend/views/components/tabs/TabWrapper.vue'
import settings from './settings.js'

export default ({
  name: 'UserSettingsModal',
  components: {
    ModalBaseTemplate,
    TabWrapper
  },
  data () {
    return settings
  },
  created () {
    sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'UserSettingsModal', { tab: true })
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.wrapper-container {
  height: 100%;
  width: 100%;
  opacity: 1;
  background-color: $general_2;

  @include phone {
    width: calc(100% + 2rem);
  }

  @include tablet {
    width: calc(100% + 3rem);
  }
}
</style>
`, ".wrapper-container {\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  background-color: var(--general_2);\n}\n@media screen and (max-width: 768px) {\n  .wrapper-container {\n    width: calc(100% + 2rem);\n  }\n}\n@media screen and (min-width: 769px), print {\n  .wrapper-container {\n    width: calc(100% + 3rem);\n  }\n}\n\n/*# sourceMappingURL=UserSettingsModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-4e460696";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template(class='has-background' :a11yTitle='L("Settings")')
  .wrapper-container
    tab-wrapper(
      :tabNav='settings'
      defaultTab='my-account'
      @close='$emit("close")'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import { SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import TabWrapper from '../../../../frontend/views/components/tabs/TabWrapper.vue'
import settings from './settings.js'

export default ({
  name: 'UserSettingsModal',
  components: {
    ModalBaseTemplate,
    TabWrapper
  },
  data () {
    return settings
  },
  created () {
    sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'UserSettingsModal', { tab: true })
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.wrapper-container {
  height: 100%;
  width: 100%;
  opacity: 1;
  background-color: $general_2;

  @include phone {
    width: calc(100% + 2rem);
  }

  @include tablet {
    width: calc(100% + 3rem);
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
var UserSettingsModal_default = __vue_component__3;
export {
  UserSettingsModal_default as default
};
//# sourceMappingURL=UserSettingsModal-VAIUHTIG-cached.js.map
