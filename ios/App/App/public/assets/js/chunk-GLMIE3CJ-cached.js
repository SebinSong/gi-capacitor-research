import {
  validationsDebouncedMixins_default
} from "./chunk-LO4V4OP4-cached.js";

// frontend/views/containers/access/PasswordForm.vue
var __vue_script__ = {
  name: "PasswordForm",
  data() {
    return {
      isLock: true
    };
  },
  mixins: [validationsDebouncedMixins_default],
  props: {
    name: {
      type: String,
      required: false,
      default: "password"
    },
    label: {
      type: String,
      required: false
    },
    $v: {
      type: Object,
      required: true
    },
    hasIconRight: {
      type: Boolean,
      default: true
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false
    }
  },
  created() {
    this.isLock = !this.showPassword;
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { staticClass: "field" }, [
    _vm.label ? _c("div", { staticClass: "label" }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(),
    _c(
      "div",
      {
        directives: [
          {
            name: "error",
            rawName: "v-error:[name]",
            value: { attrs: { "data-test": "badPassword" } },
            expression: '{ attrs: { "data-test": "badPassword" }}',
            arg: _vm.name
          }
        ],
        staticClass: "inputgroup"
      },
      [
        (_vm.isLock ? "password" : "text") === "checkbox" ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.$v.form[_vm.name].$model,
              expression: "$v.form[name].$model"
            }
          ],
          staticClass: "input with-single-addon",
          class: [{ error: _vm.$v.form[_vm.name].$error }, _vm.size],
          attrs: {
            placeholder: _vm.showPlaceholder ? _vm.name : "",
            name: _vm.name,
            "data-test": _vm.name,
            type: "checkbox"
          },
          domProps: {
            checked: Array.isArray(_vm.$v.form[_vm.name].$model) ? _vm._i(_vm.$v.form[_vm.name].$model, null) > -1 : _vm.$v.form[_vm.name].$model
          },
          on: {
            input: function($event) {
              return _vm.debounceField(_vm.name);
            },
            blur: function($event) {
              return _vm.updateField(_vm.name);
            },
            change: function($event) {
              var $$a = _vm.$v.form[_vm.name].$model, $$el = $event.target, $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null, $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(
                    _vm.$v.form[_vm.name],
                    "$model",
                    $$a.concat([$$v])
                  );
                } else {
                  $$i > -1 && _vm.$set(
                    _vm.$v.form[_vm.name],
                    "$model",
                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                  );
                }
              } else {
                _vm.$set(_vm.$v.form[_vm.name], "$model", $$c);
              }
            }
          }
        }) : (_vm.isLock ? "password" : "text") === "radio" ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.$v.form[_vm.name].$model,
              expression: "$v.form[name].$model"
            }
          ],
          staticClass: "input with-single-addon",
          class: [{ error: _vm.$v.form[_vm.name].$error }, _vm.size],
          attrs: {
            placeholder: _vm.showPlaceholder ? _vm.name : "",
            name: _vm.name,
            "data-test": _vm.name,
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.$v.form[_vm.name].$model, null) },
          on: {
            input: function($event) {
              return _vm.debounceField(_vm.name);
            },
            blur: function($event) {
              return _vm.updateField(_vm.name);
            },
            change: function($event) {
              return _vm.$set(_vm.$v.form[_vm.name], "$model", null);
            }
          }
        }) : _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.$v.form[_vm.name].$model,
              expression: "$v.form[name].$model"
            }
          ],
          staticClass: "input with-single-addon",
          class: [{ error: _vm.$v.form[_vm.name].$error }, _vm.size],
          attrs: {
            placeholder: _vm.showPlaceholder ? _vm.name : "",
            name: _vm.name,
            "data-test": _vm.name,
            type: _vm.isLock ? "password" : "text"
          },
          domProps: { value: _vm.$v.form[_vm.name].$model },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return;
                }
                _vm.$set(
                  _vm.$v.form[_vm.name],
                  "$model",
                  $event.target.value
                );
              },
              function($event) {
                return _vm.debounceField(_vm.name);
              }
            ],
            blur: function($event) {
              return _vm.updateField(_vm.name);
            }
          }
        }),
        _c("div", { staticClass: "addons" }, [
          _vm.hasIconRight ? _c(
            "button",
            {
              staticClass: "is-icon",
              attrs: {
                type: "button",
                "aria-label": _vm.L("Toggle password visibility"),
                "aria-pressed": !_vm.isLock
              },
              on: {
                click: function($event) {
                  $event.preventDefault();
                  _vm.isLock = !_vm.isLock;
                }
              }
            },
            [_c("i", { class: _vm.isLock ? "icon-eye" : "icon-eye-slash" })]
          ) : _vm._e()
        ])
      ]
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-77a58bc5_0", { source: ".icon[data-v-77a58bc5] {\n  cursor: pointer;\n  pointer-events: initial !important;\n}\n\n/*# sourceMappingURL=PasswordForm.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/access/PasswordForm.vue", "PasswordForm.vue"], "names": [], "mappings": "AA4EA;EACA,eAAA;EACA,kCAAA;AC3EA;;AAEA,2CAA2C", "file": "PasswordForm.vue", "sourcesContent": [`<template lang='pug'>
label.field
  .label(v-if='label') {{ label }}
  .inputgroup(
    v-error:[name]='{ attrs: { "data-test": "badPassword" }}'
  )
    input.input.with-single-addon(
      :type='isLock ? "password" : "text"'
      :class='[{error: $v.form[name].$error}, size]'
      :placeholder='showPlaceholder ? name : ""'
      :name='name'
      :data-test='name'
      v-model='$v.form[name].$model'
      @input='debounceField(name)'
      @blur='updateField(name)'
    )
    .addons
      button.is-icon(
        type='button'
        v-if='hasIconRight'
        :aria-label='L("Toggle password visibility")'
        :aria-pressed='!isLock'
        @click.prevent='isLock = !isLock'
      )
        i(:class='isLock ? "icon-eye" : "icon-eye-slash"')
</template>

<script>
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'PasswordForm',
  data () {
    return {
      isLock: true
    }
  },
  mixins: [validationsDebouncedMixins],
  props: {
    name: {
      type: String,
      required: false,
      default: 'password'
    },
    label: {
      type: String,
      required: false
    },
    $v: {
      type: Object,
      required: true
    },
    hasIconRight: {
      type: Boolean,
      default: true
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false
    }
  },
  created () {
    this.isLock = !this.showPassword
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  pointer-events: initial !important;
}
</style>
`, ".icon {\n  cursor: pointer;\n  pointer-events: initial !important;\n}\n\n/*# sourceMappingURL=PasswordForm.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-77a58bc5";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
label.field
  .label(v-if='label') {{ label }}
  .inputgroup(
    v-error:[name]='{ attrs: { "data-test": "badPassword" }}'
  )
    input.input.with-single-addon(
      :type='isLock ? "password" : "text"'
      :class='[{error: $v.form[name].$error}, size]'
      :placeholder='showPlaceholder ? name : ""'
      :name='name'
      :data-test='name'
      v-model='$v.form[name].$model'
      @input='debounceField(name)'
      @blur='updateField(name)'
    )
    .addons
      button.is-icon(
        type='button'
        v-if='hasIconRight'
        :aria-label='L("Toggle password visibility")'
        :aria-pressed='!isLock'
        @click.prevent='isLock = !isLock'
      )
        i(:class='isLock ? "icon-eye" : "icon-eye-slash"')
</template>

<script>
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'PasswordForm',
  data () {
    return {
      isLock: true
    }
  },
  mixins: [validationsDebouncedMixins],
  props: {
    name: {
      type: String,
      required: false,
      default: 'password'
    },
    label: {
      type: String,
      required: false
    },
    $v: {
      type: Object,
      required: true
    },
    hasIconRight: {
      type: Boolean,
      default: true
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false
    }
  },
  created () {
    this.isLock = !this.showPassword
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  pointer-events: initial !important;
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
var PasswordForm_default = __vue_component__;

export {
  PasswordForm_default
};
//# sourceMappingURL=chunk-GLMIE3CJ-cached.js.map
