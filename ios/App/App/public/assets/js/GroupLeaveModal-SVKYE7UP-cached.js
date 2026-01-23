import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  validationsDebouncedMixins_default
} from "./chunk-LO4V4OP4-cached.js";
import {
  BannerScoped_default,
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  normalizeString
} from "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/group-settings/GroupLeaveModal.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "GroupLeaveModal",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    ModalTemplate: ModalTemplate_default,
    BannerSimple: BannerSimple_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      form: {
        username: null,
        confirmation: null
      }
    };
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupSettings",
      "ourUsername",
      "ourIdentityContractId"
    ]),
    code() {
      const groupName = this.groupSettings.groupName || "";
      return L("LEAVE {GROUP_NAME}", {
        GROUP_NAME: groupName.toUpperCase()
      });
    }
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    async submit() {
      if (this.$v.form.$invalid) {
        return;
      }
      try {
        const groupContractID = this.currentGroupId;
        await esm_default("gi.actions/group/removeMember", {
          contractID: groupContractID,
          data: {}
        });
        this.close();
      } catch (e) {
        console.error("GroupLeaveModal submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  },
  validations: {
    form: {
      username: {
        [L("This field is required")]: import_validators.required,
        [L("Your username is different")]: function(value) {
          return value === this.ourUsername;
        }
      },
      confirmation: {
        [L("This field is required")]: import_validators.required,
        [L("Does not match")]: function(value) {
          return normalizeString(value || "") === normalizeString(this.code);
        }
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    { ref: "modal", attrs: { a11yTitle: _vm.L("Leave group") } },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Leave group")])],
        1
      ),
      _c(
        "form",
        {
          attrs: { novalidate: "novalidate", "data-test": "leaveGroup" },
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c("i18n", { attrs: { tag: "p", args: _vm.LTags("strong") } }, [
            _vm._v(
              "If you leave, you will stop having access to the {strong_}group chat{_strong} and {strong_}contributions{_strong}. Re-joining the group is possible, but requires other members to {strong_}vote and reach an agreement{_strong}."
            )
          ]),
          _c(
            "banner-simple",
            { staticClass: "c-banner", attrs: { severity: "danger" } },
            [
              _c("i18n", { attrs: { args: _vm.LTags("strong") } }, [
                _vm._v("This action {strong_}cannot be undone{_strong}.")
              ])
            ],
            1
          ),
          _c(
            "label",
            { staticClass: "field" },
            [
              _c("i18n", { staticClass: "label" }, [_vm._v("Username")]),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.username,
                    expression: "form.username"
                  },
                  {
                    name: "error",
                    rawName: "v-error:username",
                    value: { attrs: { "data-test": "usernameError" } },
                    expression: '{ attrs: { "data-test": "usernameError" } }',
                    arg: "username"
                  }
                ],
                staticClass: "input",
                class: { error: _vm.$v.form.username.$error },
                attrs: { type: "text", "data-test": "username" },
                domProps: { value: _vm.form.username },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "username", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("username");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("username");
                  }
                }
              })
            ],
            1
          ),
          _c(
            "label",
            { staticClass: "field" },
            [
              _c(
                "i18n",
                { staticClass: "label", attrs: { args: { code: _vm.code } } },
                [_vm._v('Type "{code}" below')]
              ),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.confirmation,
                    expression: "form.confirmation"
                  },
                  {
                    name: "error",
                    rawName: "v-error:confirmation",
                    value: { attrs: { "data-test": "confirmationError" } },
                    expression: '{ attrs: { "data-test": "confirmationError" } }',
                    arg: "confirmation"
                  }
                ],
                staticClass: "input",
                class: { error: _vm.$v.form.confirmation.$error },
                attrs: { type: "text", "data-test": "confirmation" },
                domProps: { value: _vm.form.confirmation },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "confirmation", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("confirmation");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("confirmation");
                  }
                }
              })
            ],
            1
          ),
          _c("banner-scoped", { ref: "formMsg" }),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-outlined",
                  attrs: { tag: "button", type: "button" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-danger",
                  attrs: {
                    disabled: _vm.$v.form.$invalid,
                    "data-test": "btnSubmit"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.L("Leave Group")))]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-0d859674_0", { source: ".c-banner[data-v-0d859674] {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=GroupLeaveModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/GroupLeaveModal.vue", "GroupLeaveModal.vue"], "names": [], "mappings": "AA2IA;EACA,gBAAA;AC1IA;;AAEA,8CAA8C", "file": "GroupLeaveModal.vue", "sourcesContent": [`<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Leave group")')
    template(slot='title')
      i18n Leave group

    form(novalidate @submit.prevent='' data-test='leaveGroup')
      i18n(
        tag='p'
        :args='LTags("strong")'
      ) If you leave, you will stop having access to the {strong_}group chat{_strong} and {strong_}contributions{_strong}. Re-joining the group is possible, but requires other members to {strong_}vote and reach an agreement{_strong}.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      label.field
        i18n.label Username
        input.input(
          :class='{error: $v.form.username.$error}'
          type='text'
          v-model='form.username'
          @input='debounceField("username")'
          @blur='updateField("username")'
          data-test='username'
          v-error:username='{ attrs: { "data-test": "usernameError" } }'
        )

      label.field
        i18n.label(:args='{ code }') Type "{code}" below
        input.input(
          :class='{error: $v.form.confirmation.$error}'
          type='text'
          v-model='form.confirmation'
          @input='debounceField("confirmation")'
          @blur='updateField("confirmation")'
          v-error:confirmation='{ attrs: { "data-test": "confirmationError" } }'
          data-test='confirmation'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='btnSubmit'
          ) {{ L('Leave Group') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { normalizeString } from 'turtledash'

export default ({
  name: 'GroupLeaveModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        username: null,
        confirmation: null
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupSettings',
      'ourUsername',
      'ourIdentityContractId'
    ]),
    code () {
      // NOTE: this.groupSettings.groupName could be undefined while leaving the group
      const groupName = this.groupSettings.groupName || ''
      return L('LEAVE {GROUP_NAME}', {
        GROUP_NAME: groupName.toUpperCase()
      })
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }
      try {
        const groupContractID = this.currentGroupId
        await sbp('gi.actions/group/removeMember', {
          contractID: groupContractID,
          data: {}
        })
        this.close()
      } catch (e) {
        console.error('GroupLeaveModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      username: {
        [L('This field is required')]: required,
        [L('Your username is different')]: function (value) {
          return value === this.ourUsername
        }
      },
      confirmation: {
        [L('This field is required')]: required,
        [L('Does not match')]: function (value) {
          return normalizeString(value || '') === normalizeString(this.code)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0;
}
</style>
`, ".c-banner {\n  margin: 1.5rem 0;\n}\n\n/*# sourceMappingURL=GroupLeaveModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-0d859674";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  modal-template(ref='modal' :a11yTitle='L("Leave group")')
    template(slot='title')
      i18n Leave group

    form(novalidate @submit.prevent='' data-test='leaveGroup')
      i18n(
        tag='p'
        :args='LTags("strong")'
      ) If you leave, you will stop having access to the {strong_}group chat{_strong} and {strong_}contributions{_strong}. Re-joining the group is possible, but requires other members to {strong_}vote and reach an agreement{_strong}.

      banner-simple.c-banner(severity='danger')
        i18n(
          :args='LTags("strong")'
        ) This action {strong_}cannot be undone{_strong}.

      label.field
        i18n.label Username
        input.input(
          :class='{error: $v.form.username.$error}'
          type='text'
          v-model='form.username'
          @input='debounceField("username")'
          @blur='updateField("username")'
          data-test='username'
          v-error:username='{ attrs: { "data-test": "usernameError" } }'
        )

      label.field
        i18n.label(:args='{ code }') Type "{code}" below
        input.input(
          :class='{error: $v.form.confirmation.$error}'
          type='text'
          v-model='form.confirmation'
          @input='debounceField("confirmation")'
          @blur='updateField("confirmation")'
          v-error:confirmation='{ attrs: { "data-test": "confirmationError" } }'
          data-test='confirmation'
        )

      banner-scoped(ref='formMsg')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='close') Cancel
        button-submit.is-danger(
          @click='submit'
          :disabled='$v.form.$invalid'
          data-test='btnSubmit'
          ) {{ L('Leave Group') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'
import { normalizeString } from 'turtledash'

export default ({
  name: 'GroupLeaveModal',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    ModalTemplate,
    BannerSimple,
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        username: null,
        confirmation: null
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupSettings',
      'ourUsername',
      'ourIdentityContractId'
    ]),
    code () {
      // NOTE: this.groupSettings.groupName could be undefined while leaving the group
      const groupName = this.groupSettings.groupName || ''
      return L('LEAVE {GROUP_NAME}', {
        GROUP_NAME: groupName.toUpperCase()
      })
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) { return }
      try {
        const groupContractID = this.currentGroupId
        await sbp('gi.actions/group/removeMember', {
          contractID: groupContractID,
          data: {}
        })
        this.close()
      } catch (e) {
        console.error('GroupLeaveModal submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations: {
    form: {
      username: {
        [L('This field is required')]: required,
        [L('Your username is different')]: function (value) {
          return value === this.ourUsername
        }
      },
      confirmation: {
        [L('This field is required')]: required,
        [L('Does not match')]: function (value) {
          return normalizeString(value || '') === normalizeString(this.code)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-banner {
  margin: 1.5rem 0;
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
var GroupLeaveModal_default = __vue_component__;
export {
  GroupLeaveModal_default as default
};
//# sourceMappingURL=GroupLeaveModal-SVKYE7UP-cached.js.map
