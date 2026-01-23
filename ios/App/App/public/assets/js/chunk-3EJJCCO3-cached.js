// frontend/views/components/CalloutCard.vue
var __vue_script__ = {
  name: "CalloutCard",
  props: {
    title: String,
    svg: Object,
    // Svg file as component
    isCard: Boolean,
    anchor: String
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "section",
    {
      staticClass: "c-calloutCard",
      class: { card: _vm.isCard },
      attrs: { id: _vm.anchor }
    },
    [
      _c(_vm.svg, { tag: "component", staticClass: "c-svg" }),
      _c(
        "div",
        [
          _vm.title ? _c(
            "h2",
            {
              staticClass: "c-title",
              class: { "has-cta": _vm.$slots.cta }
            },
            [
              _c("span", { staticClass: "is-title-3 c-title-text" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._t("cta")
            ],
            2
          ) : _vm._e(),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-bcffee8e_0", { source: ".c-calloutCard[data-v-bcffee8e] {\n  display: flex;\n}\n.c-calloutCard p + button[data-v-bcffee8e] {\n  margin-top: 2rem;\n}\n.c-svg[data-v-bcffee8e] {\n  width: 4rem;\n  height: 4rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n@media screen and (min-width: 769px), print {\n.c-svg[data-v-bcffee8e] {\n    width: 6.25rem;\n    height: auto;\n    margin-right: 2.5rem;\n}\n}\n.c-title[data-v-bcffee8e] {\n  margin-bottom: 0.5rem;\n}\n.c-title.has-cta[data-v-bcffee8e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 100%;\n  gap: 0.5rem;\n}\n\n/*# sourceMappingURL=CalloutCard.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/CalloutCard.vue", "CalloutCard.vue"], "names": [], "mappings": "AA4BA;EACA,aAAA;AC3BA;AD6BA;EACA,gBAAA;AC3BA;AD+BA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;AC5BA;ADsCA;AAdA;IAOA,cAAA;IACA,YAAA;IACA,oBAAA;AC3BE;AACF;AD8BA;EACA,qBAAA;AC3BA;AD6BA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;AC3BA;;AAEA,0CAA0C", "file": "CalloutCard.vue", "sourcesContent": [`<template lang='pug'>
  section.c-calloutCard(:class='{ card: isCard }' :id='anchor')
    component.c-svg(:is='svg')
    div
      h2.c-title(
        v-if='title'
        :class='{ "has-cta": $slots.cta }'
      )
        span.is-title-3.c-title-text {{ title }}
        slot(name='cta')
      slot
</template>

<script>
export default ({
  name: 'CalloutCard',
  props: {
    title: String,
    svg: Object, // Svg file as component
    isCard: Boolean,
    anchor: String
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-calloutCard {
  display: flex;

  p + button {
    margin-top: 2rem;
  }
}

.c-svg {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  flex-shrink: 0;

  @include tablet {
    width: 6.25rem;
    height: auto;
    margin-right: 2.5rem;
  }
}

.c-title {
  margin-bottom: 0.5rem;

  &.has-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;
  }
}
</style>
`, ".c-calloutCard {\n  display: flex;\n}\n.c-calloutCard p + button {\n  margin-top: 2rem;\n}\n\n.c-svg {\n  width: 4rem;\n  height: 4rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n@media screen and (min-width: 769px), print {\n  .c-svg {\n    width: 6.25rem;\n    height: auto;\n    margin-right: 2.5rem;\n  }\n}\n\n.c-title {\n  margin-bottom: 0.5rem;\n}\n.c-title.has-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 100%;\n  gap: 0.5rem;\n}\n\n/*# sourceMappingURL=CalloutCard.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-bcffee8e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  section.c-calloutCard(:class='{ card: isCard }' :id='anchor')
    component.c-svg(:is='svg')
    div
      h2.c-title(
        v-if='title'
        :class='{ "has-cta": $slots.cta }'
      )
        span.is-title-3.c-title-text {{ title }}
        slot(name='cta')
      slot
</template>

<script>
export default ({
  name: 'CalloutCard',
  props: {
    title: String,
    svg: Object, // Svg file as component
    isCard: Boolean,
    anchor: String
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-calloutCard {
  display: flex;

  p + button {
    margin-top: 2rem;
  }
}

.c-svg {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  flex-shrink: 0;

  @include tablet {
    width: 6.25rem;
    height: auto;
    margin-right: 2.5rem;
  }
}

.c-title {
  margin-bottom: 0.5rem;

  &.has-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;
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
var CalloutCard_default = __vue_component__;

// frontend/assets/svgs/contributions.svg
var contributions_default = { render: function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("svg", { staticClass: "svg-contributions", attrs: { "viewBox": "0 0 120 138", "fill": "none", "xmlns": "http://www.w3.org/2000/svg", "width": "120", "height": "138" } }, [_c("g", { attrs: { "clip-path": "url(#dclip0)" } }, [_c("path", { staticClass: "special", attrs: { "d": "M80.7 69.02h-1.57c-4.34 0-7.9-2.8-7.9-6.36v-.58h4.34v.58c0 .97 1.52 2.05 3.56 2.05h1.57c2.04 0 3.56-1.08 3.56-2.05 0-.97-1.02-1.75-2.76-2l-3.76-.57a6.97 6.97 0 01-6.5-6.17c0-3.66 3.47-6.47 7.9-6.47h1.56c4.42 0 7.9 2.8 7.9 6.47v.59h-4.34v-.59c0-.97-1.52-2.05-3.56-2.05h-1.57c-2.04-.1-3.56.98-3.56 2.05 0 1.08 1.02 1.75 2.76 2.01l3.82.56a6.96 6.96 0 016.51 6.28c-.06 3.45-3.54 6.25-7.96 6.25z", "fill": "var(--primary_0)" } }), _c("path", { staticClass: "special", attrs: { "d": "M82.09 66.87h-4.34v4.31h4.34v-4.31z", "fill": "var(--primary_0)" } }), _c("path", { attrs: { "d": "M79.92 79.8a21.8 21.8 0 01-12.06-3.63 21.45 21.45 0 01-3.29-33.19 21.74 21.74 0 0123.65-4.67 21.67 21.67 0 019.74 7.94 21.48 21.48 0 01-9.74 31.92 21.82 21.82 0 01-8.3 1.64zm0-38.82a17.44 17.44 0 00-16.04 10.65 17.16 17.16 0 003.76 18.8 17.4 17.4 0 0018.92 3.75 17.34 17.34 0 007.8-6.36 17.18 17.18 0 00-2.17-21.78 17.42 17.42 0 00-12.27-5.06z", "fill": "var(--primary_1)" } }), _c("path", { staticClass: "special", attrs: { "d": "M82.09 45.3h-4.34v4.31h4.34V45.3zM43.54 38.83H42.5a5.73 5.73 0 01-5.99-5.33v-1.15h4.34v1.15c0 .47.7 1.01 1.65 1.01h1.04c.96 0 1.65-.54 1.65-1.01 0-.48-.47-.84-1.25-.97l-2.54-.41a5.57 5.57 0 01-4.89-5.22 5.66 5.66 0 016-5.33h1.03a5.73 5.73 0 016 5.33v1.14h-4.35V26.9c0-.48-.69-1.02-1.65-1.02H42.5c-.95 0-1.65.54-1.65 1.02 0 .47.48.84 1.26.97l2.54.4a5.57 5.57 0 014.88 5.23 5.66 5.66 0 01-5.99 5.33z", "fill": "var(--primary_0)" } }), _c("path", { staticClass: "special", attrs: { "d": "M45.2 36.67h-4.35v4.31h4.34v-4.31z", "fill": "var(--primary_0)" } }), _c("path", { attrs: { "d": "M43.02 47.45A17.44 17.44 0 0126.98 36.8 17.16 17.16 0 0130.75 18a17.4 17.4 0 0118.92-3.74 17.34 17.34 0 017.79 6.35A17.18 17.18 0 0155.3 42.4a17.42 17.42 0 01-12.28 5.05zm0-30.2a13.08 13.08 0 00-12.03 8 12.87 12.87 0 002.83 14.1 13.05 13.05 0 0022.22-9.15 12.9 12.9 0 00-3.81-9.15 13.06 13.06 0 00-9.2-3.8z", "fill": "var(--primary_1)" } }), _c("path", { staticClass: "special", attrs: { "d": "M45.2 19.41h-4.35v4.32h4.34V19.4zM99.97 25.88h-1.04a5.73 5.73 0 01-6-5.32V19.4h4.35v1.15c0 .47.69 1.01 1.65 1.01h1.04c.95 0 1.65-.54 1.65-1.01 0-.48-.48-.85-1.26-.97l-2.54-.41a5.57 5.57 0 01-4.88-5.22 5.66 5.66 0 015.99-5.33h1.04a5.73 5.73 0 015.99 5.33v1.14h-4.34v-1.14c0-.48-.7-1.02-1.65-1.02h-1.04c-.96 0-1.65.54-1.65 1.02 0 .47.47.84 1.25.97l2.54.4a5.57 5.57 0 014.89 5.23 5.66 5.66 0 01-6 5.32z", "fill": "var(--primary_0)" } }), _c("path", { staticClass: "special", attrs: { "d": "M101.62 23.73h-4.34v4.31h4.34v-4.31z", "fill": "var(--primary_0)" } }), _c("path", { attrs: { "d": "M99.45 34.51A17.44 17.44 0 0183.4 23.86a17.16 17.16 0 013.76-18.8A17.4 17.4 0 01106.1 1.3a17.34 17.34 0 017.8 6.36 17.18 17.18 0 01-2.17 21.79 17.42 17.42 0 01-12.27 5.05zm0-30.2a13.08 13.08 0 00-12.03 8 12.87 12.87 0 002.82 14.1 13.05 13.05 0 0022.23-9.15 12.9 12.9 0 00-3.82-9.16 13.06 13.06 0 00-9.2-3.79z", "fill": "var(--primary_1)" } }), _c("path", { staticClass: "special", attrs: { "d": "M101.62 6.47h-4.34v4.31h4.34v-4.3z", "fill": "var(--primary_0)" } }), _c("path", { attrs: { "d": "M118.98 45.3h-4.34v15.1h4.34V45.3zM118.98 36.67h-4.34v4.31h4.34v-4.31z", "fill": "var(--success_1)" } }), _c("path", { attrs: { "d": "M43.02 62.55h-4.34v15.1h4.34v-15.1zM43.02 53.92h-4.34v4.32h4.34v-4.32z", "fill": "var(--warning_1)" } }), _c("path", { attrs: { "d": "M110.3 66.87h-4.34v10.78h4.34V66.87z", "fill": "var(--danger_1)" } }), _c("path", { attrs: { "d": "M73.4 8.63h-4.33v19.41h4.34V8.63z", "fill": "var(--success_1)" } }), _c("path", { attrs: { "d": "M38.68 0h-4.34v6.47h4.34V0z", "fill": "var(--danger_1)" } }), _c("path", { attrs: { "d": "M7.78 121.56l17.83 2.8c2.7.43 5.47-1.69 6.18-4.72v-.03l15.58 9.03a21.5 21.5 0 007.46 2.64c3.64.57 7.49.23 11.3-1.04l30.1-10.46a8.47 8.47 0 004.53-3.89 8.82 8.82 0 001.05-5.96c-.77-4.09-4.53-6.33-8.37-5l-17.2 5.95c.07-3.62-2.12-6.66-5.46-7.19l-10.66-1.68-3.24-2.85a21.53 21.53 0 00-10.9-5.1l-7.9-1.26.02-.13c.71-3.03-.9-5.85-3.6-6.27l-17.83-2.81c-2.7-.42-5.48 1.7-6.19 4.73l-6.3 26.97c-.72 3.03.9 5.84 3.6 6.27zM44.9 98.73c3.37.53 6.5 2 9.06 4.25l3.64 3.2.07.04.26.17.15.08.29.1c.05 0 .1.03.14.03h.03l11.15 1.76c1.62.26 2.6 1.94 2.16 3.77-.42 1.82-2.08 3.09-3.7 2.83l-15.61-2.46c-1.15-.18-2.33.72-2.63 2.01-.3 1.3.38 2.49 1.53 2.67l15.61 2.46c2.75.43 5.54-.95 7.32-3.33l19.92-6.9c1.52-.52 3 .37 3.31 1.98.15.8 0 1.63-.41 2.36a3.34 3.34 0 01-1.8 1.55L65.3 125.73c-5.42 1.82-10.96 1.34-15.58-1.33l-16.77-9.73 4.03-17.2 7.91 1.25zm-30.25-9.75c.11-.46.53-.78.93-.72l17.83 2.81c.4.07.65.49.54.94l-6.31 26.97c-.1.46-.52.77-.93.71l-17.82-2.8c-.4-.07-.65-.5-.55-.95l6.31-26.96z", "fill": "var(--primary_0)" } })]), _c("defs", [_c("clipPath", { attrs: { "id": "dclip0" } }, [_c("path", { attrs: { "fill": "var(--background_0)", "transform": "translate(.33)", "d": "M0 0h118.7v137.77H0z" } })])])]);
} };

export {
  CalloutCard_default,
  contributions_default
};
//# sourceMappingURL=chunk-3EJJCCO3-cached.js.map
