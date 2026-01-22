import {
  hello_default
} from "./chunk-6TVZJD4C-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/ThankYouNoteModal.vue
var __vue_script__ = {
  name: "ThankYouNoteModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    SvgHello: hello_default
  },
  computed: {
    ...mapGetters([
      "groupThankYousFrom",
      "usernameFromID"
    ]),
    from() {
      return this.$route.query.from || "";
    },
    thankYouNote() {
      const to = this.$route.query.to;
      return this.groupThankYousFrom[this.from]?.[to] || "";
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    { ref: "modal", attrs: { a11yTitle: _vm.L("View Thank You Modal") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Thank you note!")])],
        1
      ),
      _c("div", { staticClass: "c-content" }, [
        _c(
          "div",
          { staticClass: "c-svg-container" },
          [_c("svg-hello", { staticClass: "c-svg" })],
          1
        ),
        _c(
          "div",
          { staticClass: "c-note-container" },
          [
            _c(
              "i18n",
              {
                staticClass: "has-text-1 c-label",
                attrs: {
                  "data-test": "memoLabel",
                  args: { name: _vm.usernameFromID(_vm.from) }
                }
              },
              [_vm._v("{name} Note:")]
            ),
            _c(
              "div",
              {
                staticClass: "c-note has-text-bold",
                attrs: { "data-test": "memo" }
              },
              [_vm._v(_vm._s(_vm.thankYouNote))]
            )
          ],
          1
        )
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-cf2b6308_0", { source: ".c-svg-container[data-v-cf2b6308] {\n  text-align: center;\n  margin-bottom: 1.375rem;\n}\n.c-content[data-v-cf2b6308] {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-content[data-v-cf2b6308] {\n    max-width: 25rem;\n}\n}\n.c-note-container[data-v-cf2b6308] {\n  width: 100%;\n  font-size: 0.875rem;\n  text-align: left;\n}\n.c-label[data-v-cf2b6308] {\n  margin-bottom: 0.25rem;\n}\n\n/*# sourceMappingURL=ThankYouNoteModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/ThankYouNoteModal.vue", "ThankYouNoteModal.vue"], "names": [], "mappings": "AAmDA;EACA,kBAAA;EACA,uBAAA;AClDA;ADqDA;EACA,WAAA;AClDA;AACA;ADgDA;IAIA,gBAAA;ACjDE;AACF;ADoDA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;ACjDA;ADoDA;EACA,sBAAA;ACjDA;;AAEA,gDAAgD", "file": "ThankYouNoteModal.vue", "sourcesContent": [`<template lang="pug">
modal-template(
  :a11yTitle='L("View Thank You Modal")'
  ref='modal'
)
  template(slot='title')
    i18n Thank you note!

  .c-content
    .c-svg-container
      svg-hello.c-svg

    .c-note-container
      i18n.has-text-1.c-label(
        data-test='memoLabel'
        :args='{ name: usernameFromID(from) }'
      ) {name} Note:

      .c-note.has-text-bold(data-test='memo') {{ thankYouNote }}
</template>

<script>
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import SvgHello from '../../../../frontend/assets/svgs/hello.svg'

export default ({
  name: 'ThankYouNoteModal',
  components: {
    ModalTemplate,
    SvgHello
  },
  computed: {
    ...mapGetters([
      'groupThankYousFrom',
      'usernameFromID'
    ]),
    from () {
      return this.$route.query.from || ''
    },
    thankYouNote () {
      const to = this.$route.query.to
      return this.groupThankYousFrom[this.from]?.[to] || ''
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-svg-container {
  text-align: center;
  margin-bottom: 1.375rem;
}

.c-content {
  width: 100%;

  @include tablet {
    max-width: 25rem;
  }
}

.c-note-container {
  width: 100%;
  font-size: $size_4;
  text-align: left;
}

.c-label {
  margin-bottom: 0.25rem;
}
</style>
`, ".c-svg-container {\n  text-align: center;\n  margin-bottom: 1.375rem;\n}\n\n.c-content {\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-content {\n    max-width: 25rem;\n  }\n}\n\n.c-note-container {\n  width: 100%;\n  font-size: 0.875rem;\n  text-align: left;\n}\n\n.c-label {\n  margin-bottom: 0.25rem;\n}\n\n/*# sourceMappingURL=ThankYouNoteModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-cf2b6308";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
modal-template(
  :a11yTitle='L("View Thank You Modal")'
  ref='modal'
)
  template(slot='title')
    i18n Thank you note!

  .c-content
    .c-svg-container
      svg-hello.c-svg

    .c-note-container
      i18n.has-text-1.c-label(
        data-test='memoLabel'
        :args='{ name: usernameFromID(from) }'
      ) {name} Note:

      .c-note.has-text-bold(data-test='memo') {{ thankYouNote }}
</template>

<script>
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import SvgHello from '../../../../frontend/assets/svgs/hello.svg'

export default ({
  name: 'ThankYouNoteModal',
  components: {
    ModalTemplate,
    SvgHello
  },
  computed: {
    ...mapGetters([
      'groupThankYousFrom',
      'usernameFromID'
    ]),
    from () {
      return this.$route.query.from || ''
    },
    thankYouNote () {
      const to = this.$route.query.to
      return this.groupThankYousFrom[this.from]?.[to] || ''
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-svg-container {
  text-align: center;
  margin-bottom: 1.375rem;
}

.c-content {
  width: 100%;

  @include tablet {
    max-width: 25rem;
  }
}

.c-note-container {
  width: 100%;
  font-size: $size_4;
  text-align: left;
}

.c-label {
  margin-bottom: 0.25rem;
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
var ThankYouNoteModal_default = __vue_component__;
export {
  ThankYouNoteModal_default as default
};
//# sourceMappingURL=ThankYouNoteModal-GB64LSZW-cached.js.map
