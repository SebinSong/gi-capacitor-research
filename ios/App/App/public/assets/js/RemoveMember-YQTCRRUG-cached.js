import {
  ProposalTemplate_default
} from "./chunk-X3Z2LAOG-cached.js";
import "./chunk-DBTA73EV-cached.js";
import "./chunk-XIIXXSLC-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-PDM5OGIJ-cached.js";
import "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  PROPOSAL_REMOVE_MEMBER
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL,
  SET_MODAL_QUERIES
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/proposals/RemoveMember.vue
var __vue_script__ = {
  name: "RemoveMember",
  components: {
    Avatar: Avatar_default,
    BannerScoped: BannerScoped_default,
    ProposalTemplate: ProposalTemplate_default
  },
  data() {
    return {
      memberID: null,
      ephemeral: {
        currentStep: 0
      },
      form: {
        useAdminPermission: false
      },
      config: {
        steps: [
          "RemoveMember"
        ]
      }
    };
  },
  created() {
    const memberID = this.$route.query.memberID;
    const isPartOfGroup = this.groupProfiles[memberID];
    if (memberID) {
      esm_default("okTurtles.events/emit", SET_MODAL_QUERIES, "RemoveMember", { memberID });
    }
    if (isPartOfGroup) {
      this.memberID = memberID;
    } else {
      console.warn('RemoveMember: Missing valid query "memberID".');
      esm_default("okTurtles.events/emit", CLOSE_MODAL);
    }
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ]),
    ...mapGetters([
      "currentGroupState",
      "currentGroupOwnerID",
      "globalProfile",
      "groupProfiles",
      "groupSettings",
      "groupShouldPropose",
      "groupMembersCount",
      "ourIdentityContractId",
      "userDisplayNameFromID"
    ]),
    memberGlobalProfile() {
      return this.globalProfile(this.memberID) || {};
    },
    isGroupCreator() {
      return this.ourIdentityContractId === this.currentGroupOwnerID;
    }
  },
  methods: {
    async submit(form) {
      this.$refs.formMsg.clean();
      const memberID = this.memberID;
      if (this.groupShouldPropose && !this.form.useAdminPermission) {
        try {
          await esm_default("gi.actions/group/proposal", {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_REMOVE_MEMBER,
              proposalData: {
                memberID,
                reason: form.reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].expires_ms
            }
          });
          this.ephemeral.currentStep += 1;
        } catch (e) {
          console.error("RemoveMember submit() error:", memberID, e);
          this.$refs.formMsg.danger(e.message);
          this.ephemeral.currentStep = 0;
        }
        return;
      }
      try {
        await esm_default("gi.actions/group/removeMember", {
          contractID: this.currentGroupId,
          data: { memberID }
        });
        this.$refs.proposal.close();
      } catch (e) {
        console.error(`Failed to remove member ${memberID}:`, e.message);
        this.$refs.formMsg.danger(e.message);
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
      ref: "proposal",
      attrs: {
        variant: "removeMember",
        title: _vm.L("Remove Member"),
        maxSteps: _vm.config.steps.length,
        currentStep: _vm.ephemeral.currentStep,
        shouldImmediateChange: _vm.form.useAdminPermission
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
      _vm.ephemeral.currentStep === 0 ? _c(
        "div",
        { key: "0", staticClass: "c-step" },
        [
          _c("avatar", {
            staticClass: "c-avatar",
            attrs: { src: _vm.memberGlobalProfile.picture, size: "lg" }
          }),
          _c(
            "p",
            {
              staticClass: "is-title-4 c-descr",
              attrs: { "data-test": "description" }
            },
            [
              _vm.groupShouldPropose ? _c(
                "i18n",
                {
                  attrs: {
                    args: {
                      name: _vm.userDisplayNameFromID(_vm.memberID)
                    }
                  }
                },
                [_vm._v("Remove {name} from the group")]
              ) : _c(
                "i18n",
                {
                  attrs: {
                    args: {
                      name: _vm.userDisplayNameFromID(_vm.memberID)
                    }
                  }
                },
                [
                  _vm._v(
                    "Are you sure you want to remove {name} from the group?"
                  )
                ]
              )
            ],
            1
          ),
          _vm.groupShouldPropose && _vm.isGroupCreator ? _c(
            "label",
            { staticClass: "checkbox c-use-admin-permissions" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.useAdminPermission,
                    expression: "form.useAdminPermission"
                  }
                ],
                staticClass: "input",
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.form.useAdminPermission) ? _vm._i(_vm.form.useAdminPermission, null) > -1 : _vm.form.useAdminPermission
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.form.useAdminPermission, $$el = $event.target, $$c = $$el.checked ? true : false;
                    if (Array.isArray($$a)) {
                      var $$v = null, $$i = _vm._i($$a, $$v);
                      if ($$el.checked) {
                        $$i < 0 && _vm.$set(
                          _vm.form,
                          "useAdminPermission",
                          $$a.concat([$$v])
                        );
                      } else {
                        $$i > -1 && _vm.$set(
                          _vm.form,
                          "useAdminPermission",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        );
                      }
                    } else {
                      _vm.$set(_vm.form, "useAdminPermission", $$c);
                    }
                  }
                }
              }),
              _c("i18n", [
                _vm._v("Use admin permissions to remove immediately")
              ])
            ],
            1
          ) : _vm._e()
        ],
        1
      ) : _vm._e(),
      _c("banner-scoped", {
        ref: "formMsg",
        attrs: { "data-test": "proposalError" }
      })
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-6e2029ee_0", { source: ".c-step[data-v-6e2029ee] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.c-step .c-avatar[data-v-6e2029ee] {\n  margin-bottom: 1rem;\n}\n.c-descr[data-v-6e2029ee] {\n  text-align: center;\n}\n.c-use-admin-permissions[data-v-6e2029ee] {\n  margin-top: 0.5rem;\n  margin-bottom: 1.25rem;\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=RemoveMember.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/proposals/RemoveMember.vue", "RemoveMember.vue"], "names": [], "mappings": "AAyIA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;ACxIA;AD2IA;EACA,mBAAA;ACzIA;AD6IA;EACA,kBAAA;AC1IA;AD6IA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AC1IA;;AAEA,2CAA2C", "file": "RemoveMember.vue", "sourcesContent": [`<template lang="pug">
proposal-template(
  ref='proposal'
  variant='removeMember'
  :title='L("Remove Member")'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  :shouldImmediateChange='form.useAdminPermission'
  @submit='submit'
)
  .c-step(v-if='ephemeral.currentStep === 0' key='0')
    avatar.c-avatar(:src='memberGlobalProfile.picture' size='lg')

    p.is-title-4.c-descr(data-test='description')
      i18n(:args='{ name: userDisplayNameFromID(memberID) }' v-if='groupShouldPropose') Remove {name} from the group
      i18n(:args='{ name: userDisplayNameFromID(memberID) }' v-else) Are you sure you want to remove {name} from the group?

    label.checkbox.c-use-admin-permissions(v-if='groupShouldPropose && isGroupCreator')
      input.input(type='checkbox' v-model='form.useAdminPermission')
      i18n Use admin permissions to remove immediately

  banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import { CLOSE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import { PROPOSAL_REMOVE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalTemplate from './ProposalTemplate.vue'

export default ({
  name: 'RemoveMember',
  components: {
    Avatar,
    BannerScoped,
    ProposalTemplate
  },
  data () {
    return {
      memberID: null,
      ephemeral: {
        currentStep: 0
      },
      form: {
        useAdminPermission: false
      },
      config: {
        steps: [
          'RemoveMember'
        ]
      }
    }
  },
  created () {
    const memberID = this.$route.query.memberID
    const isPartOfGroup = this.groupProfiles[memberID]

    if (memberID) {
      sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'RemoveMember', { memberID })
    }
    if (isPartOfGroup) {
      this.memberID = memberID
    } else {
      console.warn('RemoveMember: Missing valid query "memberID".')
      sbp('okTurtles.events/emit', CLOSE_MODAL)
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'currentGroupState',
      'currentGroupOwnerID',
      'globalProfile',
      'groupProfiles',
      'groupSettings',
      'groupShouldPropose',
      'groupMembersCount',
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    memberGlobalProfile () {
      return this.globalProfile(this.memberID) || {}
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    }
  },
  methods: {
    async submit (form) {
      this.$refs.formMsg.clean()
      const memberID = this.memberID

      if (this.groupShouldPropose && !this.form.useAdminPermission) {
        try {
          await sbp('gi.actions/group/proposal', {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_REMOVE_MEMBER,
              proposalData: {
                memberID,
                reason: form.reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].expires_ms
            }
          })
          this.ephemeral.currentStep += 1
        } catch (e) {
          console.error('RemoveMember submit() error:', memberID, e)
          this.$refs.formMsg.danger(e.message)

          this.ephemeral.currentStep = 0
        }
        return
      }

      try {
        await sbp('gi.actions/group/removeMember', {
          contractID: this.currentGroupId, data: { memberID }
        })
        this.$refs.proposal.close()
      } catch (e) {
        console.error(\`Failed to remove member \${memberID}:\`, e.message)
        this.$refs.formMsg.danger(e.message)
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-step {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;

  // BUG on VUE? - without nesting it doesn't work
  .c-avatar {
    margin-bottom: 1rem;
  }
}

.c-descr {
  text-align: center;
}

.c-use-admin-permissions {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  margin-right: 0;
}
</style>
`, ".c-step {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.c-step .c-avatar {\n  margin-bottom: 1rem;\n}\n\n.c-descr {\n  text-align: center;\n}\n\n.c-use-admin-permissions {\n  margin-top: 0.5rem;\n  margin-bottom: 1.25rem;\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=RemoveMember.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-6e2029ee";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
proposal-template(
  ref='proposal'
  variant='removeMember'
  :title='L("Remove Member")'
  :maxSteps='config.steps.length'
  :currentStep.sync='ephemeral.currentStep'
  :shouldImmediateChange='form.useAdminPermission'
  @submit='submit'
)
  .c-step(v-if='ephemeral.currentStep === 0' key='0')
    avatar.c-avatar(:src='memberGlobalProfile.picture' size='lg')

    p.is-title-4.c-descr(data-test='description')
      i18n(:args='{ name: userDisplayNameFromID(memberID) }' v-if='groupShouldPropose') Remove {name} from the group
      i18n(:args='{ name: userDisplayNameFromID(memberID) }' v-else) Are you sure you want to remove {name} from the group?

    label.checkbox.c-use-admin-permissions(v-if='groupShouldPropose && isGroupCreator')
      input.input(type='checkbox' v-model='form.useAdminPermission')
      i18n Use admin permissions to remove immediately

  banner-scoped(ref='formMsg' data-test='proposalError')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState, mapGetters } from 'vuex'
import { CLOSE_MODAL, SET_MODAL_QUERIES } from '../../../../frontend/utils/events.js'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import { PROPOSAL_REMOVE_MEMBER } from '../../../../frontend/model/contracts/shared/constants.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ProposalTemplate from './ProposalTemplate.vue'

export default ({
  name: 'RemoveMember',
  components: {
    Avatar,
    BannerScoped,
    ProposalTemplate
  },
  data () {
    return {
      memberID: null,
      ephemeral: {
        currentStep: 0
      },
      form: {
        useAdminPermission: false
      },
      config: {
        steps: [
          'RemoveMember'
        ]
      }
    }
  },
  created () {
    const memberID = this.$route.query.memberID
    const isPartOfGroup = this.groupProfiles[memberID]

    if (memberID) {
      sbp('okTurtles.events/emit', SET_MODAL_QUERIES, 'RemoveMember', { memberID })
    }
    if (isPartOfGroup) {
      this.memberID = memberID
    } else {
      console.warn('RemoveMember: Missing valid query "memberID".')
      sbp('okTurtles.events/emit', CLOSE_MODAL)
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ]),
    ...mapGetters([
      'currentGroupState',
      'currentGroupOwnerID',
      'globalProfile',
      'groupProfiles',
      'groupSettings',
      'groupShouldPropose',
      'groupMembersCount',
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    memberGlobalProfile () {
      return this.globalProfile(this.memberID) || {}
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    }
  },
  methods: {
    async submit (form) {
      this.$refs.formMsg.clean()
      const memberID = this.memberID

      if (this.groupShouldPropose && !this.form.useAdminPermission) {
        try {
          await sbp('gi.actions/group/proposal', {
            contractID: this.currentGroupId,
            data: {
              proposalType: PROPOSAL_REMOVE_MEMBER,
              proposalData: {
                memberID,
                reason: form.reason
              },
              votingRule: this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].rule,
              expires_date_ms: Date.now() + this.groupSettings.proposals[PROPOSAL_REMOVE_MEMBER].expires_ms
            }
          })
          this.ephemeral.currentStep += 1
        } catch (e) {
          console.error('RemoveMember submit() error:', memberID, e)
          this.$refs.formMsg.danger(e.message)

          this.ephemeral.currentStep = 0
        }
        return
      }

      try {
        await sbp('gi.actions/group/removeMember', {
          contractID: this.currentGroupId, data: { memberID }
        })
        this.$refs.proposal.close()
      } catch (e) {
        console.error(\`Failed to remove member \${memberID}:\`, e.message)
        this.$refs.formMsg.danger(e.message)
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-step {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;

  // BUG on VUE? - without nesting it doesn't work
  .c-avatar {
    margin-bottom: 1rem;
  }
}

.c-descr {
  text-align: center;
}

.c-use-admin-permissions {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  margin-right: 0;
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
var RemoveMember_default = __vue_component__;
export {
  RemoveMember_default as default
};
//# sourceMappingURL=RemoveMember-YQTCRRUG-cached.js.map
