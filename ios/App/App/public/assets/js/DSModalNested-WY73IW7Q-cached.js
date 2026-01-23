import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/design-system/DSModalNested.vue
var __vue_script__ = {
  name: "DSModalSimple",
  data() {
    return {
      type: "",
      subtitle: false,
      background: false,
      backOnMobile: true
    };
  },
  components: {
    ModalTemplate: ModalTemplate_default
  },
  methods: {
    toggleSubtitle() {
      this.subtitle = !this.subtitle;
    },
    toggleBackground() {
      this.background = !this.background;
    },
    toggleBackOnMobile() {
      this.backOnMobile = !this.backOnMobile;
    },
    openModal(mode) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, mode);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    {
      class: {
        "has-background": _vm.background,
        "is-left-aligned": _vm.backOnMobile
      },
      attrs: {
        "back-on-mobile": _vm.backOnMobile,
        a11yTitle: _vm.L("Modal example")
      },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._v("Title")];
            },
            proxy: true
          },
          _vm.subtitle ? {
            key: "subtitle",
            fn: function() {
              return [_vm._v("subtitle")];
            },
            proxy: true
          } : null,
          {
            key: "footer",
            fn: function() {
              return [
                _c("p", [
                  _vm._v(
                    "According to your voting rules, 8 out of 10 members will have to agree with this."
                  )
                ])
              ];
            },
            proxy: true
          }
        ],
        null,
        true
      )
    },
    [
      _c("form", [
        _c(
          "div",
          { staticClass: "field" },
          [
            _c("i18n", { staticClass: "label", attrs: { tag: "label" } }, [
              _vm._v("Full name")
            ]),
            _c("input", {
              staticClass: "input",
              attrs: { value: "Felix Kubin" }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "field" },
          [
            _c("i18n", { staticClass: "label", attrs: { tag: "label" } }, [
              _vm._v("Introduce the potential new member(s) to your group")
            ]),
            _c("textarea", { staticClass: "textarea", attrs: { rows: "5" } }, [
              _vm._v(
                "Felix and Brian are two very important figures in the electronic music scene. They have greatly contributed to the development of genres like ambient music and are now ready to contribute to this group. They are Dreamers like us!'"
              )
            ])
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "i18n",
              {
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.toggleSubtitle($event);
                  }
                }
              },
              [_vm._v("Toggle subtitle")]
            ),
            _c(
              "i18n",
              {
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.toggleBackground($event);
                  }
                }
              },
              [_vm._v("Toggle background")]
            ),
            _c(
              "i18n",
              {
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.toggleBackOnMobile($event);
                  }
                }
              },
              [_vm._v("Toggle back button")]
            ),
            _c(
              "i18n",
              {
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.openModal("SignupModal");
                  }
                }
              },
              [_vm._v("Open SubModal")]
            )
          ],
          1
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = void 0;
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
//- NOTE: If you use it as an example when creating other modals
//-       (instead of existing modals), make sure to replace many
//-       of the tags below with their equivalent i18n tags.
modal-template(:class='{ "has-background": background, "is-left-aligned": backOnMobile }' :back-on-mobile='backOnMobile' :a11yTitle='L("Modal example")')
  template(#title='') Title
  template(#subtitle='' v-if='subtitle') subtitle

  form
    .field
      i18n.label(tag='label') Full name
      input.input(value='Felix Kubin')

    .field
      i18n.label(tag='label') Introduce the potential new member(s) to your group
      //- We aren't using L or i18n here to avoid this example text being
      //- translated by the translators (since it won't appear in the UI)
      textarea.textarea(rows='5')
        | Felix and Brian are two very important figures in the electronic music scene. They have greatly contributed to the development of genres like ambient music and are now ready to contribute to this group. They are Dreamers like us!'

    .buttons
      i18n(
        tag='button'
        @click.prevent='toggleSubtitle'
      ) Toggle subtitle

      i18n(
        tag='button'
        @click.prevent='toggleBackground'
      ) Toggle background

      i18n(
        tag='button'
        @click.prevent='toggleBackOnMobile'
      ) Toggle back button

      i18n(
        tag='button'
        @click.prevent='openModal("SignupModal")'
      ) Open SubModal

  template(#footer='')
    //- We aren't using i18n in this DesignSystem.vue file because
    //- this string shouldn't be translated. However, if you copy this file,
    //- you must change this to be i18n(tag='p')
    p According to your voting rules, 8 out of 10 members will have to agree with this.
</template>
<script>
import sbp from '@sbp/sbp'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'

export default ({
  name: 'DSModalSimple',
  data () {
    return {
      type: '',
      subtitle: false,
      background: false,
      backOnMobile: true
    }
  },
  components: {
    ModalTemplate
  },
  methods: {
    toggleSubtitle () {
      this.subtitle = !this.subtitle
    },
    toggleBackground () {
      this.background = !this.background
    },
    toggleBackOnMobile () {
      this.backOnMobile = !this.backOnMobile
    },
    openModal (mode) {
      sbp('okTurtles.events/emit', OPEN_MODAL, mode)
    }
  }
}: Object)
<\/script>
`;
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
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  void 0,
  void 0,
  void 0
);
var DSModalNested_default = __vue_component__;
export {
  DSModalNested_default as default
};
//# sourceMappingURL=DSModalNested-WY73IW7Q-cached.js.map
