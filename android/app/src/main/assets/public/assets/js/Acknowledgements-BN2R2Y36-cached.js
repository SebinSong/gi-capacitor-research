import {
  safeLinkTag
} from "./chunk-EMMKEFHJ-cached.js";
import "./chunk-W7XZLSPA-cached.js";
import "./chunk-K33NK7LD-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/user-settings/Acknowledgements.vue
var __vue_script__ = {
  name: "Acknowledgements",
  data() {
    return {
      okTurtlesPageTag: safeLinkTag("OKTURTLES_PAGE"),
      list: [{
        legend: L("Libraries"),
        links: [
          {
            title: "Vue",
            name: "vuejs.org",
            url: "https://vuejs.org"
          },
          {
            title: "Grunt",
            name: "gruntjs.com",
            url: "https://gruntjs.com"
          },
          {
            title: "Cypress",
            name: "cypress.io",
            url: "https://www.cypress.io"
          },
          {
            title: "Hapi",
            name: "hapi.dev",
            url: "https://hapi.dev"
          }
        ]
      }, {
        legend: L("Illustrations"),
        links: [
          // {
          //   title: 'Voting',
          //   name: 'By Nikita Kozin',
          //   url: '#'
          // },
          // {
          //   title: 'Broken Link',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // },
          // {
          //   title: 'Send',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Hello',
          //   name: 'By Allie',
          //   url: '#'
          // },
          // {
          //   title: 'Conversation',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Vote',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // }
        ]
      }]
    };
  },
  methods: {
    openURL(url) {
      window.open(url, "_blank").focus();
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "settings-container" }, [
    _c(
      "section",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "c-header" }, [
          _c(
            "p",
            { staticClass: "c-instructions" },
            [
              _c(
                "i18n",
                { attrs: { args: { a_: _vm.okTurtlesPageTag, _a: "</a>" } } },
                [
                  _vm._v(
                    "Group Income is developed by the {a_}okTurtles Foundation{_a} and is funded entirely by individual contributions."
                  )
                ]
              )
            ],
            1
          )
        ]),
        _c(
          "i18n",
          {
            staticClass: "link",
            attrs: { tag: "button" },
            on: {
              click: function($event) {
                return _vm.openURL(_vm.ALLOWED_URLS.OKTURTLES_SUPPORT_PAGE);
              }
            }
          },
          [_vm._v("Support this project")]
        ),
        _vm._l(_vm.list, function(item, index) {
          return _c(
            "div",
            { key: index, staticClass: "c-wrapper" },
            [
              _c("div", { staticClass: "c-title", attrs: { tag: "h2" } }, [
                _vm._v(_vm._s(item.legend))
              ]),
              _vm._l(item.links, function(link, idx) {
                return _c("div", { key: idx, staticClass: "c-smaller-title" }, [
                  _vm._v(_vm._s(link.title)),
                  _c(
                    "a",
                    {
                      staticClass: "sublink",
                      on: {
                        click: function($event) {
                          return _vm.openURL(link.url);
                        }
                      }
                    },
                    [_vm._v(_vm._s(link.name))]
                  )
                ]);
              })
            ],
            2
          );
        })
      ],
      2
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-06b8dc41_0", { source: '@media screen and (min-width: 1200px) {\n.settings-container[data-v-06b8dc41] {\n    padding-top: 1.5rem;\n}\n}\n.c-header[data-v-06b8dc41] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-instructions[data-v-06b8dc41] {\n  margin-bottom: 1rem;\n}\n.c-wrapper[data-v-06b8dc41] {\n  margin-top: 2rem;\n}\n.c-wrapper .c-title[data-v-06b8dc41] {\n  font-family: "Poppins";\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n.c-wrapper .c-smaller-title[data-v-06b8dc41] {\n  font-family: "Lato";\n  font-size: 0.875rem;\n  font-weight: bold;\n  margin-top: 1rem;\n  display: flex;\n}\n.c-wrapper .c-smaller-title .sublink[data-v-06b8dc41] {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=Acknowledgements.vue.map */', map: { "version": 3, "sources": ["Acknowledgements.vue", "frontend/views/containers/user-settings/Acknowledgements.vue"], "names": [], "mappings": "AAAA;ACuGA;IAEA,mBAAA;ADtGE;AACF;ACyGA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;ADtGA;ACyGA;EACA,mBAAA;ADtGA;ACyGA;EACA,gBAAA;ADtGA;ACwGA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;ADtGA;ACyGA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;ADvGA;ACyGA;EACA,mBAAA;ADvGA;;AAEA,+CAA+C", "file": "Acknowledgements.vue", "sourcesContent": ['@media screen and (min-width: 1200px) {\n  .settings-container {\n    padding-top: 1.5rem;\n  }\n}\n\n.c-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-instructions {\n  margin-bottom: 1rem;\n}\n\n.c-wrapper {\n  margin-top: 2rem;\n}\n.c-wrapper .c-title {\n  font-family: "Poppins";\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n.c-wrapper .c-smaller-title {\n  font-family: "Lato";\n  font-size: 0.875rem;\n  font-weight: bold;\n  margin-top: 1rem;\n  display: flex;\n}\n.c-wrapper .c-smaller-title .sublink {\n  margin-left: 0.5rem;\n}\n\n/*# sourceMappingURL=Acknowledgements.vue.map */', `<template lang='pug'>
  .settings-container
    section.card
      .c-header
        p.c-instructions
          i18n(
            :args='{ a_: okTurtlesPageTag, _a: "</a>" }'
          ) Group Income is developed by the {a_}okTurtles Foundation{_a} and is funded entirely by individual contributions.
      i18n.link(tag='button' @click='openURL(ALLOWED_URLS.OKTURTLES_SUPPORT_PAGE)') Support this project

      .c-wrapper(
        v-for='(item, index) in list'
        :key='index'
      )
        .c-title(tag='h2') {{ item.legend }}
        .c-smaller-title(
          v-for='(link, idx) in item.links'
          :key='idx'
        ) {{ link.title }}
          a.sublink(@click='openURL(link.url)') {{ link.name }}
</template>

<script>
import safeLinkTag from '../../../../frontend/views/utils/safeLinkTag.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'Acknowledgements',
  data () {
    return {
      okTurtlesPageTag: safeLinkTag('OKTURTLES_PAGE'),
      list: [{
        legend: L('Libraries'),
        links: [
          {
            title: 'Vue',
            name: 'vuejs.org',
            url: 'https://vuejs.org'
          },
          {
            title: 'Grunt',
            name: 'gruntjs.com',
            url: 'https://gruntjs.com'
          },
          {
            title: 'Cypress',
            name: 'cypress.io',
            url: 'https://www.cypress.io'
          },
          {
            title: 'Hapi',
            name: 'hapi.dev',
            url: 'https://hapi.dev'
          }
        ]
      }, {
        legend: L('Illustrations'),
        links: [
          // {
          //   title: 'Voting',
          //   name: 'By Nikita Kozin',
          //   url: '#'
          // },
          // {
          //   title: 'Broken Link',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // },
          // {
          //   title: 'Send',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Hello',
          //   name: 'By Allie',
          //   url: '#'
          // },
          // {
          //   title: 'Conversation',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Vote',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // }
        ]
      }]
    }
  },
  methods: {
    openURL (url) {
      window.open(url, '_blank').focus()
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.c-instructions {
  margin-bottom: 1rem;
}

.c-wrapper {
  margin-top: 2rem;

  .c-title {
    font-family: "Poppins";
    font-size: $size_4;
    font-weight: bold;
  }

  .c-smaller-title {
    font-family: "Lato";
    font-size: $size_4;
    font-weight: bold;
    margin-top: 1rem;
    display: flex;

    .sublink {
      margin-left: 0.5rem;
    }
  }
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-06b8dc41";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .settings-container
    section.card
      .c-header
        p.c-instructions
          i18n(
            :args='{ a_: okTurtlesPageTag, _a: "</a>" }'
          ) Group Income is developed by the {a_}okTurtles Foundation{_a} and is funded entirely by individual contributions.
      i18n.link(tag='button' @click='openURL(ALLOWED_URLS.OKTURTLES_SUPPORT_PAGE)') Support this project

      .c-wrapper(
        v-for='(item, index) in list'
        :key='index'
      )
        .c-title(tag='h2') {{ item.legend }}
        .c-smaller-title(
          v-for='(link, idx) in item.links'
          :key='idx'
        ) {{ link.title }}
          a.sublink(@click='openURL(link.url)') {{ link.name }}
</template>

<script>
import safeLinkTag from '../../../../frontend/views/utils/safeLinkTag.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'Acknowledgements',
  data () {
    return {
      okTurtlesPageTag: safeLinkTag('OKTURTLES_PAGE'),
      list: [{
        legend: L('Libraries'),
        links: [
          {
            title: 'Vue',
            name: 'vuejs.org',
            url: 'https://vuejs.org'
          },
          {
            title: 'Grunt',
            name: 'gruntjs.com',
            url: 'https://gruntjs.com'
          },
          {
            title: 'Cypress',
            name: 'cypress.io',
            url: 'https://www.cypress.io'
          },
          {
            title: 'Hapi',
            name: 'hapi.dev',
            url: 'https://hapi.dev'
          }
        ]
      }, {
        legend: L('Illustrations'),
        links: [
          // {
          //   title: 'Voting',
          //   name: 'By Nikita Kozin',
          //   url: '#'
          // },
          // {
          //   title: 'Broken Link',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // },
          // {
          //   title: 'Send',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Hello',
          //   name: 'By Allie',
          //   url: '#'
          // },
          // {
          //   title: 'Conversation',
          //   name: 'By Gregor Cresnar',
          //   url: '#'
          // },
          // {
          //   title: 'Vote',
          //   name: 'By HeadsOfBirds',
          //   url: '#'
          // }
        ]
      }]
    }
  },
  methods: {
    openURL (url) {
      window.open(url, '_blank').focus()
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.c-instructions {
  margin-bottom: 1rem;
}

.c-wrapper {
  margin-top: 2rem;

  .c-title {
    font-family: "Poppins";
    font-size: $size_4;
    font-weight: bold;
  }

  .c-smaller-title {
    font-family: "Lato";
    font-size: $size_4;
    font-weight: bold;
    margin-top: 1rem;
    display: flex;

    .sublink {
      margin-left: 0.5rem;
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
var Acknowledgements_default = __vue_component__;
export {
  Acknowledgements_default as default
};
//# sourceMappingURL=Acknowledgements-BN2R2Y36-cached.js.map
