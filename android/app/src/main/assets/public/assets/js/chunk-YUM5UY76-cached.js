// frontend/views/components/ButtonSubmit.vue
var __vue_script__ = {
  name: "ButtonSubmit",
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: "submit"
    }
  },
  data: () => ({
    ephemeral: {
      isSubmitting: false
    }
  }),
  methods: {
    async submit(event) {
      if (this.ephemeral.isSubmitting) {
        return;
      }
      this.ephemeral.isSubmitting = true;
      try {
        await this.$listeners.click(event);
      } catch (error) {
        console.error("ButtonSubmit exception:", error);
      }
      this.ephemeral.isSubmitting = false;
    },
    focus() {
      this.$refs.btn.focus();
    }
  },
  computed: {
    bindListeners() {
      return {
        ...this.$listeners,
        // overrides passed @click handler with a custom @click handler
        // so it goes through "isSubmitting guard"
        click: this.submit
      };
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    _vm._g(
      _vm._b(
        {
          ref: "btn",
          staticClass: "is-loader",
          attrs: {
            type: _vm.type,
            "data-loading": _vm.ephemeral.isSubmitting,
            disabled: _vm.disabled || _vm.ephemeral.isSubmitting
          }
        },
        "button",
        _vm.$attrs,
        false
      ),
      _vm.bindListeners
    ),
    [
      _vm._t("default"),
      _vm.ephemeral.isSubmitting ? _c("i18n", { staticClass: "sr-only" }, [_vm._v("Loading")]) : _vm._e()
    ],
    2
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
  button.is-loader(
    :type='type'
    ref='btn'
    v-bind='$attrs'
    v-on='bindListeners'
    :data-loading='ephemeral.isSubmitting'
    :disabled='disabled || ephemeral.isSubmitting'
  )
    slot
    i18n.sr-only(v-if='ephemeral.isSubmitting') Loading
</template>

<script>
/*
Use ButtonSubmit on buttons that will trigger an **async** action.

button-submit(
  @click='handleLogin'
) Login

This will display a spinner (the loading state) on the button while the login is happening.

The button has type="submit" to catch any way of form submission (ex: press Enter).

That way we don't need to use $refs on the parent.

// \u274C DO NOT do this, it's INCORRECT:
form(@submit.prevent='$refs.btnSubmit.click')

// \u2705 DO this instead:
form(@submit.prevent='')

\`@submit.prevent\` prevents the original behavior of a form submit (page reload)
but it will still look for a submit element and its event handler (@click).

In this case ButtonSubmit is the submit element thanks to type="submit".
So, when pressing Enter, buttonSubmit(@click) gets called directly too.

More details about this approach:
https://github.com/okTurtles/group-income/pull/854/files#r388638068
*/
export default ({
  name: 'ButtonSubmit',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'submit'
    }
  },
  data: () => ({
    ephemeral: {
      isSubmitting: false
    }
  }),
  methods: {
    async submit (event) {
      if (this.ephemeral.isSubmitting) {
        return
      }
      this.ephemeral.isSubmitting = true

      // Call the original @click handler.
      // this.$listeners can await for async handlers.
      // An advantage over using $emit().
      // More at: https://stackoverflow.com/questions/60554270/vuejs-difference-between-emit-and-listeners
      try {
        await this.$listeners.click(event)
      } catch (error) {
        console.error('ButtonSubmit exception:', error)
      }

      this.ephemeral.isSubmitting = false
    },
    focus () {
      // Used to focus the btn from the parent (ex:GroupCreationModal)
      this.$refs.btn.focus()
    }
  },
  computed: {
    bindListeners () {
      return {
        ...this.$listeners,
        // overrides passed @click handler with a custom @click handler
        // so it goes through "isSubmitting guard"
        click: this.submit
      }
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
var ButtonSubmit_default = __vue_component__;

export {
  ButtonSubmit_default
};
//# sourceMappingURL=chunk-YUM5UY76-cached.js.map
