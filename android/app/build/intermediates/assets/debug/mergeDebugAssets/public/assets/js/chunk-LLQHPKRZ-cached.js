// frontend/views/components/modal/ModalClose.vue
var __vue_script__ = {
  name: "ModalClose",
  props: {
    backOnMobile: Boolean,
    fullscreen: Boolean
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      staticClass: "c-modal-close",
      class: { backOnMobile: _vm.backOnMobile, fullscreen: _vm.fullscreen },
      attrs: { "aria-label": _vm.L("close modal"), "data-test": "closeModal" },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }
          $event.stopPropagation();
          return _vm.$emit("close");
        }
      }
    },
    [
      _c("i", {
        staticClass: "icon-chevron-left c-iconBack",
        attrs: { "aria-hidden": "true" }
      }),
      _c("i18n", { staticClass: "c-modal-close-txt has-text-small" }, [
        _vm._v("ESC")
      ])
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-81b2a7f0_0", { source: '.c-modal-close[data-v-81b2a7f0] {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 4;\n  height: 2.75rem;\n  width: 2.75rem;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  background-color: var(--general_1);\n}\n@media (forced-colors: active) {\n.c-modal-close[data-v-81b2a7f0] {\n    border: 1px solid buttonborder;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-modal-close[data-v-81b2a7f0] {\n    top: 1.5rem;\n    right: 1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-close[data-v-81b2a7f0] {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-close.fullscreen[data-v-81b2a7f0] {\n    top: 1.5rem;\n    position: fixed;\n    right: 2.5rem;\n}\n}\n.c-modal-close.fullscreen .c-modal-close-text[data-v-81b2a7f0] {\n  display: block;\n  position: absolute;\n  bottom: calc(-1em - 0.5rem);\n  left: 0;\n  text-align: center;\n  width: 100%;\n  color: var(--text_0);\n}\n@media screen and (max-width: 1199px) {\n.c-modal-close.fullscreen .c-modal-close-text[data-v-81b2a7f0] {\n    display: none;\n}\n}\n.c-modal-close .c-iconBack[data-v-81b2a7f0] {\n  display: none;\n}\n.c-modal-close[data-v-81b2a7f0]::before, .c-modal-close[data-v-81b2a7f0]::after {\n  background-color: var(--text_0);\n  content: "";\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0.75rem;\n  height: 0.125rem;\n  transition: transform 0.15s ease-in;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n@media (forced-colors: active) {\n.c-modal-close[data-v-81b2a7f0]::before, .c-modal-close[data-v-81b2a7f0]::after {\n    background-color: buttonborder;\n}\n}\n.c-modal-close[data-v-81b2a7f0]::after {\n  transform: translateX(-50%) translateY(-50%) rotate(-45deg);\n}\n.c-modal-close[data-v-81b2a7f0]:focus {\n  outline: none;\n}\n.c-modal-close[data-v-81b2a7f0]:focus::before, .c-modal-close[data-v-81b2a7f0]:hover::before {\n  transform: translateX(-50%) translateY(-50%) rotate(0);\n}\n.c-modal-close[data-v-81b2a7f0]:focus::after, .c-modal-close[data-v-81b2a7f0]:hover::after {\n  transform: translateX(-50%) translateY(-50%) rotate(0);\n}\n@media screen and (max-width: 768px) {\n.c-modal-close.backOnMobile[data-v-81b2a7f0] {\n    position: relative;\n    left: 0;\n    top: 0;\n    margin-right: 1rem;\n}\n.c-modal-close.backOnMobile .c-iconBack[data-v-81b2a7f0] {\n    display: block;\n    color: var(--text_0);\n    margin-left: 0;\n}\n.c-modal-close.backOnMobile[data-v-81b2a7f0]::before, .c-modal-close.backOnMobile[data-v-81b2a7f0]::after {\n    content: none;\n}\n}\n.c-modal-close-txt[data-v-81b2a7f0] {\n  display: none;\n}\n\n/*# sourceMappingURL=ModalClose.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/modal/ModalClose.vue", "ModalClose.vue"], "names": [], "mappings": "AAwBA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,wBAAA;EACA,eAAA;EACA,kCAAA;ACvBA;AD4DA;AAlDA;IAgBA,8BAAA;ACtBE;AACF;AD+BA;AA1BA;IAoBA,WAAA;IACA,aAAA;ACrBE;AACF;ADqCA;AAtCA;IAyBA,kBAAA;IACA,SAAA;IACA,WAAA;ACpBE;AACF;AD8BA;AARA;IAEA,WAAA;IACA,eAAA;IACA,aAAA;ACpBE;AACF;ADsBA;EACA,cAAA;EACA,kBAAA;EACA,2BAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,oBAAA;ACpBA;ADQA;AAKA;IAUA,aAAA;ACnBE;AACF;ADuBA;EACA,aAAA;ACrBA;ADwBA;EAEA,+BAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;EACA,mCAAA;EACA,0DAAA;EACA,+BAAA;ACvBA;ADKA;AAMA;IAeA,8BAAA;ACtBE;AACF;ADyBA;EACA,2DAAA;ACvBA;AD0BA;EACA,aAAA;ACxBA;AD6BA;EACA,sDAAA;AC3BA;AD8BA;EACA,sDAAA;AC5BA;AACA;AD+BA;IAEA,kBAAA;IACA,OAAA;IACA,MAAA;IACA,kBAAA;AC9BE;ADgCF;IACA,cAAA;IACA,oBAAA;IACA,cAAA;AC9BE;ADiCF;IAEA,aAAA;AChCE;AACF;ADoCA;EACA,aAAA;AClCA;;AAEA,yCAAyC", "file": "ModalClose.vue", "sourcesContent": [`<template lang='pug'>
  button.c-modal-close(
    :class='{ backOnMobile, fullscreen }'
    @click.self.stop='$emit("close")'
    :aria-label='L("close modal")'
    data-test='closeModal'
  )
    i.icon-chevron-left.c-iconBack(aria-hidden='true')
    i18n.c-modal-close-txt.has-text-small ESC
</template>

<script>
export default ({
  name: 'ModalClose',
  props: {
    backOnMobile: Boolean,
    fullscreen: Boolean
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-modal-close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 4;
  height: 2.75rem;
  width: 2.75rem;
  border: none;
  border-radius: 50%;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: $general_1;

  @include if-forced-color-mode {
    border: 1px solid buttonborder;
  }

  @include tablet {
    top: 1.5rem;
    right: 1.5rem;
  }

  @include desktop {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &.fullscreen {
    @include desktop {
      top: 1.5rem;
      position: fixed;
      right: 2.5rem;
    }

    .c-modal-close-text {
      display: block;
      position: absolute;
      bottom: calc(-1em - 0.5rem);
      left: 0;
      text-align: center;
      width: 100%;
      color: $text_0;

      @include touch {
        display: none;
      }
    }
  }

  .c-iconBack {
    display: none;
  }

  &::before,
  &::after {
    background-color: $text_0;
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.75rem;
    height: 0.125rem;
    transition: transform 0.15s ease-in;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;

    @include if-forced-color-mode {
      background-color: buttonborder;
    }
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    &::before {
      transform: translateX(-50%) translateY(-50%) rotate(0);
    }

    &::after {
      transform: translateX(-50%) translateY(-50%) rotate(0);
    }
  }

  &.backOnMobile {
    @include until($tablet) {
      position: relative;
      left: 0;
      top: 0;
      margin-right: 1rem;

      .c-iconBack {
        display: block;
        color: $text_0;
        margin-left: 0;
      }

      &::before,
      &::after {
        content: none;
      }
    }
  }

  &-txt {
    display: none;
  }
}
</style>
`, '.c-modal-close {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 4;\n  height: 2.75rem;\n  width: 2.75rem;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  background-color: var(--general_1);\n}\n@media (forced-colors: active) {\n  .c-modal-close {\n    border: 1px solid buttonborder;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-close {\n    top: 1.5rem;\n    right: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-close {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-close.fullscreen {\n    top: 1.5rem;\n    position: fixed;\n    right: 2.5rem;\n  }\n}\n.c-modal-close.fullscreen .c-modal-close-text {\n  display: block;\n  position: absolute;\n  bottom: calc(-1em - 0.5rem);\n  left: 0;\n  text-align: center;\n  width: 100%;\n  color: var(--text_0);\n}\n@media screen and (max-width: 1199px) {\n  .c-modal-close.fullscreen .c-modal-close-text {\n    display: none;\n  }\n}\n.c-modal-close .c-iconBack {\n  display: none;\n}\n.c-modal-close::before, .c-modal-close::after {\n  background-color: var(--text_0);\n  content: "";\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0.75rem;\n  height: 0.125rem;\n  transition: transform 0.15s ease-in;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n@media (forced-colors: active) {\n  .c-modal-close::before, .c-modal-close::after {\n    background-color: buttonborder;\n  }\n}\n.c-modal-close::after {\n  transform: translateX(-50%) translateY(-50%) rotate(-45deg);\n}\n.c-modal-close:focus {\n  outline: none;\n}\n.c-modal-close:focus::before, .c-modal-close:hover::before {\n  transform: translateX(-50%) translateY(-50%) rotate(0);\n}\n.c-modal-close:focus::after, .c-modal-close:hover::after {\n  transform: translateX(-50%) translateY(-50%) rotate(0);\n}\n@media screen and (max-width: 768px) {\n  .c-modal-close.backOnMobile {\n    position: relative;\n    left: 0;\n    top: 0;\n    margin-right: 1rem;\n  }\n  .c-modal-close.backOnMobile .c-iconBack {\n    display: block;\n    color: var(--text_0);\n    margin-left: 0;\n  }\n  .c-modal-close.backOnMobile::before, .c-modal-close.backOnMobile::after {\n    content: none;\n  }\n}\n.c-modal-close-txt {\n  display: none;\n}\n\n/*# sourceMappingURL=ModalClose.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-81b2a7f0";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  button.c-modal-close(
    :class='{ backOnMobile, fullscreen }'
    @click.self.stop='$emit("close")'
    :aria-label='L("close modal")'
    data-test='closeModal'
  )
    i.icon-chevron-left.c-iconBack(aria-hidden='true')
    i18n.c-modal-close-txt.has-text-small ESC
</template>

<script>
export default ({
  name: 'ModalClose',
  props: {
    backOnMobile: Boolean,
    fullscreen: Boolean
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-modal-close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 4;
  height: 2.75rem;
  width: 2.75rem;
  border: none;
  border-radius: 50%;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: $general_1;

  @include if-forced-color-mode {
    border: 1px solid buttonborder;
  }

  @include tablet {
    top: 1.5rem;
    right: 1.5rem;
  }

  @include desktop {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &.fullscreen {
    @include desktop {
      top: 1.5rem;
      position: fixed;
      right: 2.5rem;
    }

    .c-modal-close-text {
      display: block;
      position: absolute;
      bottom: calc(-1em - 0.5rem);
      left: 0;
      text-align: center;
      width: 100%;
      color: $text_0;

      @include touch {
        display: none;
      }
    }
  }

  .c-iconBack {
    display: none;
  }

  &::before,
  &::after {
    background-color: $text_0;
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.75rem;
    height: 0.125rem;
    transition: transform 0.15s ease-in;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;

    @include if-forced-color-mode {
      background-color: buttonborder;
    }
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    &::before {
      transform: translateX(-50%) translateY(-50%) rotate(0);
    }

    &::after {
      transform: translateX(-50%) translateY(-50%) rotate(0);
    }
  }

  &.backOnMobile {
    @include until($tablet) {
      position: relative;
      left: 0;
      top: 0;
      margin-right: 1rem;

      .c-iconBack {
        display: block;
        color: $text_0;
        margin-left: 0;
      }

      &::before,
      &::after {
        content: none;
      }
    }
  }

  &-txt {
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
var ModalClose_default = __vue_component__;

export {
  ModalClose_default
};
//# sourceMappingURL=chunk-LLQHPKRZ-cached.js.map
