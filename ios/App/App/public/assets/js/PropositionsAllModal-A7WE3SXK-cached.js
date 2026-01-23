import {
  ProposalItem_default
} from "./chunk-G52B2CVS-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-EPK24SZY-cached.js";
import "./chunk-U5MBT6RH-cached.js";
import "./chunk-F2DYOYGG-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-V3SQGGAF-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import "./chunk-K4WYPR2K-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-YUM5UY76-cached.js";
import "./chunk-VVR7NWXN-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/proposals/PropositionsAllModal.vue
var __vue_script__ = {
  name: "PropositionsAllModal",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    ProposalItem: ProposalItem_default
  },
  data: () => ({
    ephemeral: {
      selectbox: {
        focused: false,
        selectedOption: "Newest"
      },
      proposals: []
    }
  }),
  async mounted() {
    const key = `proposals/${this.ourIdentityContractId}/${this.currentGroupId}`;
    this.ephemeral.proposals = await esm_default("gi.db/archive/load", key) || [];
    this.checkTargetAndScroll();
  },
  methods: {
    unfocusSelect() {
      this.$refs.select.blur();
    },
    checkTargetAndScroll() {
      const targetId = this.$route.query?.targetProposal || "";
      if (targetId && this.ephemeral.proposals.some((entry) => entry[0] === targetId)) {
        this.$nextTick(() => {
          const targetEl = this.$refs.pList.querySelector(`[data-proposal-hash="${targetId}"]`);
          targetEl && targetEl.scrollIntoView({ block: "center" });
        });
      }
    }
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["currentGroupState", "ourIdentityContractId"]),
    proposals() {
      const p = this.ephemeral.proposals;
      return this.ephemeral.selectbox.selectedOption === "Newest" ? p : [...p].reverse();
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    {
      ref: "modal",
      staticClass: "has-background",
      attrs: { fullscreen: true, a11yTitle: _vm.L("All proposals") }
    },
    [
      _c("div", { staticClass: "c-container" }, [
        _c(
          "div",
          { staticClass: "c-header" },
          [
            _c(
              "i18n",
              { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
              [_vm._v("Archived proposals")]
            )
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "c-header-info" },
          [
            _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: {
                  tag: "div",
                  args: { groupProposalsCount: _vm.proposals.length }
                }
              },
              [_vm._v("{groupProposalsCount} proposals")]
            ),
            _c("div", { staticClass: "selectsolo" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ephemeral.selectbox.selectedOption,
                      expression: "ephemeral.selectbox.selectedOption"
                    }
                  ],
                  ref: "select",
                  staticClass: "select",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                          return o.selected;
                        }).map(function(o) {
                          var val = "_value" in o ? o._value : o.value;
                          return val;
                        });
                        _vm.$set(
                          _vm.ephemeral.selectbox,
                          "selectedOption",
                          $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                        );
                      },
                      _vm.unfocusSelect
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "Newest" } }, [
                    _vm._v(_vm._s(_vm.L("Newest first")))
                  ]),
                  _c("option", { attrs: { value: "Oldest" } }, [
                    _vm._v(_vm._s(_vm.L("Oldest first")))
                  ])
                ]
              )
            ])
          ],
          1
        ),
        _c("div", { staticClass: "card c-card" }, [
          _c(
            "ul",
            { ref: "pList", attrs: { "data-test": "proposalsWidget" } },
            _vm._l(_vm.proposals, function(ref) {
              var hash = ref[0];
              var obj = ref[1];
              return _c("proposal-item", {
                key: hash,
                attrs: { proposalHash: hash, proposalObject: obj }
              });
            }),
            1
          )
        ])
      ])
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-67ac1430_0", { source: ".c-container[data-v-67ac1430] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-67ac1430],\n  .c-container[data-v-67ac1430] {\n    width: 50rem;\n    max-width: 100%;\n}\n}\n.c-header[data-v-67ac1430] {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n.c-header[data-v-67ac1430] {\n    justify-content: left;\n    padding-left: 1rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-67ac1430] {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n}\n}\n.c-description[data-v-67ac1430] {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n.c-description[data-v-67ac1430] {\n    position: absolute;\n    top: 5.5rem;\n}\n}\n.c-header-info[data-v-67ac1430] {\n  display: flex;\n  height: 3.75rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=PropositionsAllModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/PropositionsAllModal.vue", "PropositionsAllModal.vue"], "names": [], "mappings": "AA0FA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;ACzFA;AAEA;AD0FA;;IAGA,YAAA;IACA,eAAA;ACzFE;AACF;AD4FA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qCAAA;EACA,eAAA;ACzFA;AACA;ADiFA;IAUA,qBAAA;IACA,kBAAA;ACxFE;AACF;AACA;AD2EA;IAeA,iBAAA;IACA,2BAAA;IACA,6BAAA;IACA,SAAA;ACvFE;AACF;AD0FA;EACA,oBAAA;ACvFA;AACA;ADqFA;IAIA,kBAAA;IACA,WAAA;ACtFE;AACF;ADyFA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;ACtFA;;AAEA,mDAAmD", "file": "PropositionsAllModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template.has-background(ref='modal' :fullscreen='true' :a11yTitle='L("All proposals")')
  .c-container
    .c-header
      i18n.is-title-2.c-title(
        tag='h2'
      ) Archived proposals

    .c-header-info
      i18n.has-text-1(
        tag='div'
        :args='{ groupProposalsCount: proposals.length }'
      ) {groupProposalsCount} proposals

      .selectsolo
        select.select(
          ref='select'
          v-model='ephemeral.selectbox.selectedOption'
          @change='unfocusSelect'
        )
          option(value='Newest') {{ L('Newest first') }}
          option(value='Oldest') {{ L('Oldest first') }}

    .card.c-card
      ul(data-test='proposalsWidget' ref='pList')
        proposal-item(
          v-for='[hash, obj] of proposals'
          :key='hash'
          :proposalHash='hash'
          :proposalObject='obj'
        )
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import ProposalItem from './ProposalItem.vue'
import { mapGetters, mapState } from 'vuex'

export default ({
  name: 'PropositionsAllModal',
  components: {
    ModalBaseTemplate,
    ProposalItem
  },
  data: () => ({
    ephemeral: {
      selectbox: {
        focused: false,
        selectedOption: 'Newest'
      },
      proposals: []
    }
  }),
  async mounted () {
    const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
    this.ephemeral.proposals = await sbp('gi.db/archive/load', key) || []

    this.checkTargetAndScroll()
  },
  methods: {
    unfocusSelect () {
      this.$refs.select.blur()
    },
    checkTargetAndScroll () {
      const targetId = this.$route.query?.targetProposal || ''

      if (targetId && this.ephemeral.proposals.some(entry => entry[0] === targetId)) {
        this.$nextTick(() => {
          const targetEl = this.$refs.pList.querySelector(\`[data-proposal-hash="\${targetId}"]\`)

          targetEl && targetEl.scrollIntoView({ block: 'center' })
        })
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentGroupState', 'ourIdentityContractId']),
    proposals () {
      const p = this.ephemeral.proposals
      return this.ephemeral.selectbox.selectedOption === 'Newest' ? p : [...p].reverse()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  height: 100%;
  width: 100%;
  background-color: $general_2;
}

.c-header,
.c-container {
  @include tablet {
    width: 50rem;
    max-width: 100%;
  }
}

.c-header {
  display: flex;
  height: 4.75rem;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  background-color: $background_0;
  margin: 0 -1rem;

  @include phone {
    justify-content: left;
    padding-left: 1rem;
  }

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
    margin: 0;
  }
}

.c-description {
  color: $text_1;

  @include phone {
    position: absolute;
    top: 5.5rem;
  }
}

.c-header-info {
  display: flex;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
}
</style>
`, ".c-container {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n\n@media screen and (min-width: 769px), print {\n  .c-header,\n  .c-container {\n    width: 50rem;\n    max-width: 100%;\n  }\n}\n\n.c-header {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-header {\n    justify-content: left;\n    padding-left: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n  }\n}\n\n.c-description {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n  .c-description {\n    position: absolute;\n    top: 5.5rem;\n  }\n}\n\n.c-header-info {\n  display: flex;\n  height: 3.75rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=PropositionsAllModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-67ac1430";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template.has-background(ref='modal' :fullscreen='true' :a11yTitle='L("All proposals")')
  .c-container
    .c-header
      i18n.is-title-2.c-title(
        tag='h2'
      ) Archived proposals

    .c-header-info
      i18n.has-text-1(
        tag='div'
        :args='{ groupProposalsCount: proposals.length }'
      ) {groupProposalsCount} proposals

      .selectsolo
        select.select(
          ref='select'
          v-model='ephemeral.selectbox.selectedOption'
          @change='unfocusSelect'
        )
          option(value='Newest') {{ L('Newest first') }}
          option(value='Oldest') {{ L('Oldest first') }}

    .card.c-card
      ul(data-test='proposalsWidget' ref='pList')
        proposal-item(
          v-for='[hash, obj] of proposals'
          :key='hash'
          :proposalHash='hash'
          :proposalObject='obj'
        )
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import ProposalItem from './ProposalItem.vue'
import { mapGetters, mapState } from 'vuex'

export default ({
  name: 'PropositionsAllModal',
  components: {
    ModalBaseTemplate,
    ProposalItem
  },
  data: () => ({
    ephemeral: {
      selectbox: {
        focused: false,
        selectedOption: 'Newest'
      },
      proposals: []
    }
  }),
  async mounted () {
    const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
    this.ephemeral.proposals = await sbp('gi.db/archive/load', key) || []

    this.checkTargetAndScroll()
  },
  methods: {
    unfocusSelect () {
      this.$refs.select.blur()
    },
    checkTargetAndScroll () {
      const targetId = this.$route.query?.targetProposal || ''

      if (targetId && this.ephemeral.proposals.some(entry => entry[0] === targetId)) {
        this.$nextTick(() => {
          const targetEl = this.$refs.pList.querySelector(\`[data-proposal-hash="\${targetId}"]\`)

          targetEl && targetEl.scrollIntoView({ block: 'center' })
        })
      }
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentGroupState', 'ourIdentityContractId']),
    proposals () {
      const p = this.ephemeral.proposals
      return this.ephemeral.selectbox.selectedOption === 'Newest' ? p : [...p].reverse()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  height: 100%;
  width: 100%;
  background-color: $general_2;
}

.c-header,
.c-container {
  @include tablet {
    width: 50rem;
    max-width: 100%;
  }
}

.c-header {
  display: flex;
  height: 4.75rem;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  background-color: $background_0;
  margin: 0 -1rem;

  @include phone {
    justify-content: left;
    padding-left: 1rem;
  }

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
    margin: 0;
  }
}

.c-description {
  color: $text_1;

  @include phone {
    position: absolute;
    top: 5.5rem;
  }
}

.c-header-info {
  display: flex;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
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
var PropositionsAllModal_default = __vue_component__;
export {
  PropositionsAllModal_default as default
};
//# sourceMappingURL=PropositionsAllModal-A7WE3SXK-cached.js.map
