import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  CharLengthIndicator_default
} from "./chunk-PDM5OGIJ-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  validationsDebouncedMixins_default
} from "./chunk-LO4V4OP4-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  PROPOSAL_GENERIC,
  PROPOSAL_NAME_MAX_CHAR
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-JWCCTDIV-cached.js";
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

// frontend/views/containers/proposals/GenericProposal.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "GenericProposal",
  mixins: [
    import_vuelidate.validationMixin,
    validationsDebouncedMixins_default
  ],
  components: {
    CharLengthIndicator: CharLengthIndicator_default,
    ProposalTemplate: ProposalTemplate_default,
    Tooltip: Tooltip_default,
    BannerScoped: BannerScoped_default
  },
  data() {
    return {
      config: {
        proposalNameMaxChar: PROPOSAL_NAME_MAX_CHAR
      },
      form: {
        proposalName: null
      },
      ephemeral: {
        currentStep: 0
      }
    };
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "groupShouldPropose",
      "groupSettings"
    ])
  },
  mounted() {
    this.$refs.proposalname.focus();
  },
  methods: {
    async submit({ reason }) {
      const proposalSettings = this.groupSettings.proposals[PROPOSAL_GENERIC];
      try {
        await esm_default("gi.actions/group/proposal", {
          contractID: this.currentGroupId,
          data: {
            proposalType: PROPOSAL_GENERIC,
            proposalData: {
              name: this.form.proposalName,
              reason
            },
            votingRule: proposalSettings.rule,
            expires_date_ms: Date.now() + proposalSettings.expires_ms
          }
        });
      } catch (e) {
        console.error(`Creating a generic proposal "${this.form.proposalName}"" failed!:`, e.message);
        this.$refs.formMsg.danger(e.message);
        return;
      }
      this.ephemeral.currentStep += 1;
    }
  },
  validations: {
    form: {
      proposalName: {
        [L("A proposal name is required.")]: import_validators.required
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "proposal-template",
    {
      attrs: {
        title: _vm.L("Generic Proposal"),
        maxSteps: 0,
        disabled: _vm.$v.form.$invalid || !this.groupShouldPropose,
        currentStep: _vm.ephemeral.currentStep
      },
      on: {
        "update:currentStep": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        "update:current-step": function($event) {
          return _vm.$set(_vm.ephemeral, "currentStep", $event);
        },
        submit: _vm.submit
      }
    },
    [
      _c("banner-scoped", { ref: "formMsg" }),
      _vm.ephemeral.currentStep === 0 ? _c("label", { key: "0", staticClass: "field" }, [
        _c(
          "div",
          { staticClass: "c-name-label-container" },
          [
            _c(
              "div",
              { staticClass: "label" },
              [
                _c("i18n", [_vm._v("Name your proposal")]),
                _c(
                  "tooltip",
                  {
                    staticClass: "c-name-tooltip",
                    attrs: {
                      direction: "top",
                      isTextCenter: true,
                      text: _vm.L(
                        "Group members will be able to vote Yes/No on this proposal. Make sure it is clear and concise."
                      )
                    }
                  },
                  [
                    _c(
                      "button",
                      { staticClass: "is-icon-smaller c-name-tooltip-btn" },
                      [_c("i", { staticClass: "icon-info" })]
                    )
                  ]
                )
              ],
              1
            ),
            _vm.form.proposalName ? _c("char-length-indicator", {
              attrs: {
                "current-length": _vm.form.proposalName.length || 0,
                max: _vm.config.proposalNameMaxChar,
                error: _vm.$v.form.proposalName.$error
              }
            }) : _vm._e()
          ],
          1
        ),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.proposalName,
              expression: "form.proposalName"
            },
            {
              name: "error",
              rawName: "v-error:proposalName",
              arg: "proposalName"
            }
          ],
          ref: "proposalname",
          staticClass: "input",
          class: { error: _vm.$v.form.proposalName.$error },
          attrs: {
            maxlength: _vm.config.proposalNameMaxChar,
            name: "proposalname",
            autofocus: "autofocus"
          },
          domProps: { value: _vm.form.proposalName },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return;
                }
                _vm.$set(_vm.form, "proposalName", $event.target.value);
              },
              function($event) {
                return _vm.debounceField("proposalName");
              }
            ],
            blur: function($event) {
              return _vm.updateField("proposalName");
            }
          }
        })
      ]) : _vm._e()
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-957f8db0_0", { source: ".c-name-label-container[data-v-957f8db0] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n.c-name-tooltip[data-v-957f8db0] {\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.c-name-tooltip-btn[data-v-957f8db0] {\n  background-color: var(--primary_0);\n  color: var(--background_0);\n}\n.c-name-tooltip-btn[data-v-957f8db0]:hover, .c-name-tooltip-btn[data-v-957f8db0]:focus {\n  background-color: var(--primary_0);\n  color: var(--background_0);\n}\n\n/*# sourceMappingURL=GenericProposal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/GenericProposal.vue", "GenericProposal.vue"], "names": [], "mappings": "AAmIA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,kBAAA;AClIA;ADqIA;EACA,qBAAA;EACA,mBAAA;AClIA;ADoIA;EACA,kCAAA;EACA,0BAAA;AClIA;ADoIA;EAEA,kCAAA;EACA,0BAAA;ACnIA;;AAEA,8CAA8C", "file": "GenericProposal.vue", "sourcesContent": [`<template lang="pug">
proposal-template(
  :title='L("Generic Proposal")'
  :maxSteps='0'
  :disabled='$v.form.$invalid || !this.groupShouldPropose'
  :currentStep.sync='ephemeral.currentStep'
  @submit='submit'
)
  banner-scoped(ref='formMsg')

  label.field(v-if='ephemeral.currentStep === 0' key='0')
    .c-name-label-container
      .label
        i18n Name your proposal
        tooltip.c-name-tooltip(
          direction='top'
          :isTextCenter='true'
          :text='L("Group members will be able to vote Yes/No on this proposal. Make sure it is clear and concise.")'
        )
          button.is-icon-smaller.c-name-tooltip-btn
            i.icon-info
      char-length-indicator(
        v-if='form.proposalName'
        :current-length='form.proposalName.length || 0'
        :max='config.proposalNameMaxChar'
        :error='$v.form.proposalName.$error'
      )

    input.input(
      :class='{error: $v.form.proposalName.$error}'
      :maxlength='config.proposalNameMaxChar'
      name='proposalname'
      ref='proposalname'
      v-model='form.proposalName'
      @input='debounceField("proposalName")'
      @blur='updateField("proposalName")'
      v-error:proposalName=''
      autofocus
    )
</template>

<script>
import { PROPOSAL_GENERIC, PROPOSAL_NAME_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import ProposalTemplate from './ProposalTemplate.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { L } from '../../../../frontend/common/translations.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'GenericProposal',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  components: {
    CharLengthIndicator,
    ProposalTemplate,
    Tooltip,
    BannerScoped
  },
  data () {
    return {
      config: {
        proposalNameMaxChar: PROPOSAL_NAME_MAX_CHAR
      },
      form: {
        proposalName: null
      },
      ephemeral: {
        currentStep: 0
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupShouldPropose',
      'groupSettings'
    ])
  },
  mounted () {
    this.$refs.proposalname.focus()
  },
  methods: {
    async submit ({ reason }) {
      const proposalSettings = this.groupSettings.proposals[PROPOSAL_GENERIC]

      try {
        await sbp('gi.actions/group/proposal', {
          contractID: this.currentGroupId,
          data: {
            proposalType: PROPOSAL_GENERIC,
            proposalData: {
              name: this.form.proposalName,
              reason
            },
            votingRule: proposalSettings.rule,
            expires_date_ms: Date.now() + proposalSettings.expires_ms
          }
        })
      } catch (e) {
        console.error(\`Creating a generic proposal "\${this.form.proposalName}"" failed!:\`, e.message)
        this.$refs.formMsg.danger(e.message)

        return
      }

      this.ephemeral.currentStep += 1 // Show Success step!
    }
  },
  validations: {
    form: {
      proposalName: {
        [L('A proposal name is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-name-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  column-gap: 0.5rem;
}

.c-name-tooltip {
  display: inline-block;
  margin-left: 0.5rem;

  &-btn {
    background-color: $primary_0;
    color: $background_0;

    &:hover,
    &:focus {
      background-color: $primary_0;
      color: $background_0;
    }
  }
}
</style>
`, ".c-name-label-container {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n\n.c-name-tooltip {\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.c-name-tooltip-btn {\n  background-color: var(--primary_0);\n  color: var(--background_0);\n}\n.c-name-tooltip-btn:hover, .c-name-tooltip-btn:focus {\n  background-color: var(--primary_0);\n  color: var(--background_0);\n}\n\n/*# sourceMappingURL=GenericProposal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-957f8db0";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
proposal-template(
  :title='L("Generic Proposal")'
  :maxSteps='0'
  :disabled='$v.form.$invalid || !this.groupShouldPropose'
  :currentStep.sync='ephemeral.currentStep'
  @submit='submit'
)
  banner-scoped(ref='formMsg')

  label.field(v-if='ephemeral.currentStep === 0' key='0')
    .c-name-label-container
      .label
        i18n Name your proposal
        tooltip.c-name-tooltip(
          direction='top'
          :isTextCenter='true'
          :text='L("Group members will be able to vote Yes/No on this proposal. Make sure it is clear and concise.")'
        )
          button.is-icon-smaller.c-name-tooltip-btn
            i.icon-info
      char-length-indicator(
        v-if='form.proposalName'
        :current-length='form.proposalName.length || 0'
        :max='config.proposalNameMaxChar'
        :error='$v.form.proposalName.$error'
      )

    input.input(
      :class='{error: $v.form.proposalName.$error}'
      :maxlength='config.proposalNameMaxChar'
      name='proposalname'
      ref='proposalname'
      v-model='form.proposalName'
      @input='debounceField("proposalName")'
      @blur='updateField("proposalName")'
      v-error:proposalName=''
      autofocus
    )
</template>

<script>
import { PROPOSAL_GENERIC, PROPOSAL_NAME_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import ProposalTemplate from './ProposalTemplate.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { L } from '../../../../frontend/common/translations.js'
import validationsDebouncedMixins from '../../../../frontend/views/utils/validationsDebouncedMixins.js'

export default ({
  name: 'GenericProposal',
  mixins: [
    validationMixin,
    validationsDebouncedMixins
  ],
  components: {
    CharLengthIndicator,
    ProposalTemplate,
    Tooltip,
    BannerScoped
  },
  data () {
    return {
      config: {
        proposalNameMaxChar: PROPOSAL_NAME_MAX_CHAR
      },
      form: {
        proposalName: null
      },
      ephemeral: {
        currentStep: 0
      }
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'groupShouldPropose',
      'groupSettings'
    ])
  },
  mounted () {
    this.$refs.proposalname.focus()
  },
  methods: {
    async submit ({ reason }) {
      const proposalSettings = this.groupSettings.proposals[PROPOSAL_GENERIC]

      try {
        await sbp('gi.actions/group/proposal', {
          contractID: this.currentGroupId,
          data: {
            proposalType: PROPOSAL_GENERIC,
            proposalData: {
              name: this.form.proposalName,
              reason
            },
            votingRule: proposalSettings.rule,
            expires_date_ms: Date.now() + proposalSettings.expires_ms
          }
        })
      } catch (e) {
        console.error(\`Creating a generic proposal "\${this.form.proposalName}"" failed!:\`, e.message)
        this.$refs.formMsg.danger(e.message)

        return
      }

      this.ephemeral.currentStep += 1 // Show Success step!
    }
  },
  validations: {
    form: {
      proposalName: {
        [L('A proposal name is required.')]: required
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-name-label-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  column-gap: 0.5rem;
}

.c-name-tooltip {
  display: inline-block;
  margin-left: 0.5rem;

  &-btn {
    background-color: $primary_0;
    color: $background_0;

    &:hover,
    &:focus {
      background-color: $primary_0;
      color: $background_0;
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
var GenericProposal_default = __vue_component__;
export {
  GenericProposal_default as default
};
//# sourceMappingURL=GenericProposal-7SJI3RBK-cached.js.map
