import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  logExceptNavigationDuplicated
} from "./chunk-OBUPKMDO-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  PROFILE_STATUS
} from "./chunk-UYGYRQRQ-cached.js";
import {
  ModalClose_default
} from "./chunk-LLQHPKRZ-cached.js";
import {
  OPEN_MODAL,
  REPLACE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
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

// frontend/views/containers/chatroom/DMMixin.js
var DMMixin = {
  computed: {
    ...mapGetters([
      "currentChatRoomId",
      "isGroupDirectMessage",
      "ourGroupDirectMessages",
      "ourIdentityContractId",
      "ourGroupDirectMessageFromUserIds"
    ]),
    ...mapState(["currentGroupId"])
  },
  methods: {
    async createDirectMessage(memberIDs) {
      if (typeof memberIDs === "string") {
        memberIDs = [memberIDs];
      }
      try {
        const identityContractID = this.ourIdentityContractId;
        const currentGroupId = this.currentGroupId;
        let dmChatRoomId;
        await esm_default("gi.actions/identity/createDirectMessage", {
          contractID: identityContractID,
          data: { currentGroupId, memberIDs },
          hooks: {
            prepublish(message) {
              dmChatRoomId = message.contractID();
              esm_default("state/vuex/commit", "setPendingChatRoomId", { chatRoomID: dmChatRoomId, groupID: currentGroupId });
            }
          }
        });
        return dmChatRoomId;
      } catch (err) {
        console.error("[DMMixin.js] Failed to create a new chatroom", err);
        await esm_default("gi.ui/prompt", {
          heading: L("Failed to create a new chatroom"),
          question: err.message,
          primaryButton: L("Close")
        });
      }
    },
    async setDMVisibility(chatRoomID, visible) {
      try {
        await esm_default("gi.actions/identity/setDirectMessageVisibility", {
          contractID: this.ourIdentityContractId,
          data: { contractID: chatRoomID, visible }
        });
      } catch (err) {
        await esm_default("gi.ui/prompt", {
          heading: L("Failed to change the chatroom settings"),
          question: err.message,
          primaryButton: L("Close")
        });
      }
    },
    redirect(chatRoomID) {
      this.$router.push({
        name: "GroupChatConversation",
        params: { chatRoomID }
      }).catch(logExceptNavigationDuplicated);
    }
  }
};
var DMMixin_default = DMMixin;

// frontend/views/components/UserName.vue
var __vue_script__ = {
  name: "UserName",
  props: {
    contractID: String
  },
  computed: {
    ...mapGetters([
      "globalProfile",
      "usernameFromID"
    ]),
    username() {
      return this.usernameFromID(this.contractID);
    },
    displayName() {
      return this.globalProfile(this.contractID).displayName;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-name", attrs: { "data-test": "username" } },
    [
      _c("strong", { staticClass: "has-ellipsis" }, [
        _vm._v(_vm._s(_vm.displayName ? _vm.displayName : "@" + _vm.username))
      ]),
      _vm.displayName ? _c(
        "div",
        {
          staticClass: "c-display-name",
          attrs: { "data-test": "profileName" }
        },
        [_vm._v("@" + _vm._s(_vm.username))]
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-7d7e8024_0", { source: ".c-name[data-v-7d7e8024] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n  font-size: 0.875rem;\n  flex-grow: 1;\n  width: calc(100% - 4.5rem);\n}\n.c-name strong[data-v-7d7e8024] {\n  position: relative;\n  width: 100%;\n  font-size: 1.5rem;\n  color: var(--text_0);\n  font-family: Poppins;\n}\n@media screen and (max-width: 768px) {\n.c-name strong[data-v-7d7e8024] {\n    width: calc(100% - 2.75rem);\n}\n}\n.c-display-name[data-v-7d7e8024] {\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=UserName.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/UserName.vue", "UserName.vue"], "names": [], "mappings": "AAmCA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,0BAAA;AClCA;ADoCA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EACA,oBAAA;AClCA;AD8BA;AADA;IAQA,2BAAA;ACjCE;AACF;ADqCA;EACA,oBAAA;AClCA;;AAEA,uCAAuC", "file": "UserName.vue", "sourcesContent": [`<template lang='pug'>
.c-name(data-test='username')
  strong.has-ellipsis {{ displayName ? displayName : '@' + username }}
  .c-display-name(
    data-test='profileName'
    v-if='displayName'
  ) @{{ username }}
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
  name: 'UserName',
  props: {
    contractID: String
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    username () {
      return this.usernameFromID(this.contractID)
    },
    displayName () {
      return this.globalProfile(this.contractID).displayName
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-name {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  font-size: $size_4;
  flex-grow: 1;
  width: calc(100% - 4.5rem);

  strong {
    position: relative;
    width: 100%;
    font-size: $size_2;
    color: $text_0;
    font-family: Poppins;

    @include phone {
      width: calc(100% - 2.75rem);
    }
  }
}

.c-display-name {
  color: $text_1;
}
</style>
`, ".c-name {\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n  font-size: 0.875rem;\n  flex-grow: 1;\n  width: calc(100% - 4.5rem);\n}\n.c-name strong {\n  position: relative;\n  width: 100%;\n  font-size: 1.5rem;\n  color: var(--text_0);\n  font-family: Poppins;\n}\n@media screen and (max-width: 768px) {\n  .c-name strong {\n    width: calc(100% - 2.75rem);\n  }\n}\n\n.c-display-name {\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=UserName.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-7d7e8024";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-name(data-test='username')
  strong.has-ellipsis {{ displayName ? displayName : '@' + username }}
  .c-display-name(
    data-test='profileName'
    v-if='displayName'
  ) @{{ username }}
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
  name: 'UserName',
  props: {
    contractID: String
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    username () {
      return this.usernameFromID(this.contractID)
    },
    displayName () {
      return this.globalProfile(this.contractID).displayName
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-name {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  font-size: $size_4;
  flex-grow: 1;
  width: calc(100% - 4.5rem);

  strong {
    position: relative;
    width: 100%;
    font-size: $size_2;
    color: $text_0;
    font-family: Poppins;

    @include phone {
      width: calc(100% - 2.75rem);
    }
  }
}

.c-display-name {
  color: $text_1;
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
var UserName_default = __vue_component__;

// frontend/views/components/ProfileCardContent.vue
var __vue_script__2 = {
  name: "ProfileCardContent",
  mixins: [
    DMMixin_default
  ],
  components: {
    AvatarUser: AvatarUser_default,
    ModalClose: ModalClose_default,
    UserName: UserName_default,
    Tooltip: Tooltip_default,
    ButtonSubmit: ButtonSubmit_default
  },
  props: {
    contractID: String,
    onPostCtaClick: Function,
    deactivated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      "groupProfiles",
      "currentGroupOwnerID",
      "globalProfile",
      "groupShouldPropose",
      "ourContributionSummary",
      "ourGroupDirectMessageFromUserIds",
      "ourIdentityContractId"
    ]),
    profile() {
      return this.globalProfile(this.contractID);
    },
    userGroupProfile() {
      return this.groupProfiles[this.contractID];
    },
    isSelf() {
      return this.contractID === this.ourIdentityContractId;
    },
    username() {
      return this.profile?.username || this.contractID;
    },
    isGroupCreator() {
      return this.ourIdentityContractId === this.currentGroupOwnerID;
    },
    isActiveGroupMember() {
      return this.userGroupProfile?.status === PROFILE_STATUS.ACTIVE;
    },
    paymentMethods() {
      return this.userGroupProfile?.paymentMethods;
    },
    hasIncomeDetails() {
      return !!this.userGroupProfile?.incomeDetailsType;
    },
    receivingMonetary() {
      return !!this.ourContributionSummary.receivingMonetary;
    }
  },
  methods: {
    openModal(modal, props) {
      if (this.deactivated) {
        return;
      }
      esm_default("okTurtles.events/emit", OPEN_MODAL, modal, props);
      this.onPostCtaClick && this.onPostCtaClick();
    },
    onRemoveMemberClick() {
      if (this.deactivated) {
        return;
      }
      esm_default(
        "okTurtles.events/emit",
        this.$route.query?.modal === "GroupMembersAllModal" ? REPLACE_MODAL : OPEN_MODAL,
        "RemoveMember",
        { memberID: this.contractID }
      );
      this.onPostCtaClick && this.onPostCtaClick();
    },
    async sendMessage() {
      const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.contractID);
      if (!chatRoomID) {
        const freshChatRoomID = await this.createDirectMessage(this.contractID);
        if (freshChatRoomID) {
          this.redirect(freshChatRoomID);
        }
      } else {
        if (!this.ourGroupDirectMessages[chatRoomID].visible) {
          this.setDMVisibility(chatRoomID, true);
        } else {
          this.redirect(chatRoomID);
        }
      }
      this.onPostCtaClick && this.onPostCtaClick();
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "card c-profile",
      attrs: {
        role: "dialog",
        "data-test": "memberProfileCard",
        "aria-label": _vm.L("{username} profile", { username: _vm.username })
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "c-identity",
          class: { "not-group-member": !_vm.isActiveGroupMember }
        },
        [
          _c("avatar-user", {
            attrs: { contractID: _vm.contractID, size: "lg" }
          }),
          _c("user-name", { attrs: { contractID: _vm.contractID } })
        ],
        1
      ),
      !_vm.isActiveGroupMember ? _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
        _vm._v("No longer a member of the group")
      ]) : _vm._e(),
      _vm.profile.bio ? _c(
        "p",
        { staticClass: "c-bio" },
        [
          _vm._v(_vm._s(_vm.profile.bio)),
          _vm.isSelf ? _c(
            "i18n",
            {
              staticClass: "c-bio-link is-unstyled link",
              attrs: { tag: "button", "data-test": "linkEditBio" },
              on: {
                click: function($event) {
                  return _vm.openModal("UserSettingsModal");
                }
              }
            },
            [_vm._v("Edit bio")]
          ) : _vm._e()
        ],
        1
      ) : _vm.isSelf && _vm.hasIncomeDetails ? _c(
        "i18n",
        {
          staticClass: "button is-small is-outlined c-bio-button",
          attrs: { tag: "button", "data-test": "buttonEditBio" },
          on: {
            click: function($event) {
              return _vm.openModal("UserSettingsModal");
            }
          }
        },
        [_vm._v("Add a bio")]
      ) : _vm._e(),
      _vm.hasIncomeDetails ? _c(
        "div",
        { attrs: { "data-test": "profilePaymentMethods" } },
        [
          _c(
            "ul",
            { staticClass: "c-payment-list" },
            _vm._l(_vm.paymentMethods, function(paymentMethod, name) {
              return _c(
                "li",
                {
                  staticClass: "c-payment-item",
                  attrs: { "data-test": "profilePaymentMethod" }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass: "c-payment-type has-text-0 has-text-bold"
                    },
                    [_vm._v(_vm._s(paymentMethod.name))]
                  ),
                  _c("span", { staticClass: "has-text-1" }, [
                    _vm._v(_vm._s(paymentMethod.value))
                  ])
                ]
              );
            }),
            0
          ),
          _vm.isSelf && _vm.receivingMonetary ? _c(
            "i18n",
            {
              staticClass: "link",
              attrs: { tag: "button", "data-test": "linkEditPayment" },
              on: {
                click: function($event) {
                  return _vm.openModal("incomeDetails");
                }
              }
            },
            [_vm._v("Edit payment info")]
          ) : _vm._e()
        ],
        1
      ) : _vm.isSelf ? _c(
        "div",
        { staticClass: "c-add-payment" },
        [
          _c("i18n", { staticClass: "has-text-1", attrs: { tag: "p" } }, [
            _vm._v(
              "Help other users send monthly contributions your way by adding your payment information."
            )
          ]),
          _c(
            "i18n",
            {
              staticClass: "button c-add-payment-button",
              attrs: { tag: "button", "data-test": "buttonAddPayment" },
              on: {
                click: function($event) {
                  return _vm.openModal("incomeDetails");
                }
              }
            },
            [_vm._v("Add payment information")]
          )
        ],
        1
      ) : _vm._e(),
      !_vm.isSelf ? _c(
        "div",
        { staticClass: "buttons" },
        [
          _c(
            "button-submit",
            {
              staticClass: "is-outlined is-small",
              attrs: { type: "button", "data-test": "buttonSendMessage" },
              on: { click: _vm.sendMessage }
            },
            [_c("i18n", [_vm._v("Send message")])],
            1
          ),
          _vm.groupShouldPropose || _vm.isGroupCreator ? _c(
            "i18n",
            {
              staticClass: "button is-outlined is-small",
              attrs: {
                tag: "button",
                "data-test": "buttonRemoveMember"
              },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  return _vm.onRemoveMemberClick($event);
                }
              }
            },
            [_vm._v("Remove member")]
          ) : _vm._e()
        ],
        1
      ) : _vm._e(),
      _c("modal-close", {
        staticClass: "c-close",
        attrs: { "aria-label": _vm.L("Close profile") },
        on: {
          close: function($event) {
            return _vm.$emit("modal-close");
          }
        }
      })
    ],
    1
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-5b6f5ccf_0", { source: ".card[data-v-5b6f5ccf] {\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  color: var(--text_1);\n  max-width: 100vw;\n  width: 24.3rem;\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n}\n.card[data-v-5b6f5ccf]:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.card[data-v-5b6f5ccf] {\n    box-shadow: none;\n    width: 100vw;\n    padding-bottom: 4rem;\n}\n}\n.c-profile[data-v-5b6f5ccf] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.is-active .c-profile[data-v-5b6f5ccf] {\n  animation: zoom 100ms both cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n@media screen and (max-width: 768px) {\n.is-active .c-profile[data-v-5b6f5ccf] {\n    animation-name: enterFromBottom;\n}\n}\n.c-identity[data-v-5b6f5ccf] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 1.5rem;\n}\n.not-group-member[data-v-5b6f5ccf] {\n  filter: saturate(0.3);\n}\n.c-bio-button[data-v-5b6f5ccf] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.c-bio-link[data-v-5b6f5ccf] {\n  margin-left: 0.3rem;\n}\n.c-payment-list[data-v-5b6f5ccf] {\n  margin-top: 1rem;\n}\n.c-payment-item[data-v-5b6f5ccf] {\n  margin-bottom: 0.5rem;\n}\n.c-payment-type[data-v-5b6f5ccf] {\n  padding-right: 0.5rem;\n  user-select: none;\n}\n.c-add-payment-button[data-v-5b6f5ccf] {\n  margin-top: 1.5rem;\n  width: 100%;\n}\n.c-bio + .c-add-payment[data-v-5b6f5ccf] {\n  margin-top: 2rem;\n}\n.buttons[data-v-5b6f5ccf] {\n  margin-top: 1rem;\n}\n.buttons .is-outlined[data-v-5b6f5ccf] {\n  width: calc(50% - 0.5rem);\n}\n.c-close[data-v-5b6f5ccf] {\n  position: absolute;\n  left: calc(100vw - 4rem);\n  top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-close[data-v-5b6f5ccf] {\n    left: auto;\n    right: 1rem;\n    /* Hide it visually... */\n    opacity: 0;\n    pointer-events: none;\n    /* ...but keep it for keyboard users. */\n}\n.c-close[data-v-5b6f5ccf]:focus {\n    opacity: 1;\n}\n}\n\n/*# sourceMappingURL=ProfileCardContent.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/ProfileCardContent.vue", "ProfileCardContent.vue"], "names": [], "mappings": "AA4LA;EACA,kCAAA;EACA,oBAAA;EACA,gBAAA;EACA,cAAA;EACA,kDAAA;AC3LA;AD6LA;EACA,gBAAA;AC3LA;AACA;ADkLA;IAYA,gBAAA;IACA,YAAA;IACA,oBAAA;AC3LE;AACF;AD8LA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;AC3LA;AD6LA;EACA,6DAAA;AC3LA;AACA;ADyLA;IAGA,+BAAA;ACzLE;AACF;AD6LA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;AC1LA;AD6LA;EACA,qBAAA;AC1LA;AD6LA;EACA,WAAA;EACA,qBAAA;AC1LA;AD6LA;EACA,mBAAA;AC1LA;AD6LA;EACA,gBAAA;AC1LA;AD6LA;EACA,qBAAA;AC1LA;AD6LA;EACA,qBAAA;EACA,iBAAA;AC1LA;AD6LA;EACA,kBAAA;EACA,WAAA;AC1LA;AD6LA;EACA,gBAAA;AC1LA;AD6LA;EACA,gBAAA;AC1LA;AD4LA;EACA,yBAAA;AC1LA;AD8LA;EACA,kBAAA;EACA,wBAAA;EACA,WAAA;AC3LA;AACA;ADuLA;IAMA,UAAA;IACA,WAAA;IAEA,wBAAA;IACA,UAAA;IACA,oBAAA;IAEA,uCAAA;AC5LE;AD6LF;IACA,UAAA;AC3LE;AACF;;AAEA,iDAAiD", "file": "ProfileCardContent.vue", "sourcesContent": [`<template lang='pug'>
.card.c-profile(
  role='dialog'
  data-test='memberProfileCard'
  :aria-label='L("{username} profile", { username })'
)
  .c-identity(:class='{ "not-group-member": !isActiveGroupMember }')
    avatar-user(:contractID='contractID' size='lg')
    user-name(:contractID='contractID')

  i18n.has-text-1(
    tag='p'
    v-if='!isActiveGroupMember'
  ) No longer a member of the group

  p.c-bio(v-if='profile.bio')
    | {{profile.bio}}
    i18n.c-bio-link.is-unstyled.link(
      v-if='isSelf'
      tag='button'
      @click='openModal("UserSettingsModal")'
      data-test='linkEditBio'
    ) Edit bio

  i18n.button.is-small.is-outlined.c-bio-button(
    v-else-if='isSelf && hasIncomeDetails'
    tag='button'
    @click='openModal("UserSettingsModal")'
    data-test='buttonEditBio'
  ) Add a bio

  div(v-if='hasIncomeDetails' data-test='profilePaymentMethods')
    ul.c-payment-list
      li.c-payment-item(v-for='(paymentMethod, name) in paymentMethods'
        data-test='profilePaymentMethod')
        span.c-payment-type.has-text-0.has-text-bold {{ paymentMethod.name }}
        span.has-text-1 {{ paymentMethod.value }}

    i18n.link(
      v-if='isSelf && receivingMonetary'
      tag='button'
      @click='openModal("incomeDetails")'
      data-test='linkEditPayment'
    ) Edit payment info

  .c-add-payment(v-else-if='isSelf')
    i18n.has-text-1(tag='p') Help other users send monthly contributions your way by adding your payment information.
    i18n.button.c-add-payment-button(
      tag='button'
      @click='openModal("incomeDetails")'
      data-test='buttonAddPayment'
    ) Add payment information

  .buttons(v-if='!isSelf')
    button-submit.is-outlined.is-small(
      type='button'
      data-test='buttonSendMessage'
      @click='sendMessage'
    )
      i18n Send message

    i18n.button.is-outlined.is-small(
      v-if='groupShouldPropose || isGroupCreator'
      tag='button'
      @click.stop='onRemoveMemberClick'
      data-test='buttonRemoveMember'
    ) Remove member

  modal-close.c-close(
    :aria-label='L("Close profile")'
    @close='$emit("modal-close")'
  )
</template>

<script>
import sbp from '@sbp/sbp'
import AvatarUser from '../../../frontend/views/components/AvatarUser.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'
import UserName from '../../../frontend/views/components/UserName.vue'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import ModalClose from '../../../frontend/views/components/modal/ModalClose.vue'
import DMMixin from '../../../frontend/views/containers/chatroom/DMMixin.js'
import { OPEN_MODAL, REPLACE_MODAL } from '../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import { PROFILE_STATUS } from '../../../frontend/model/contracts/shared/constants.js'

export default {
  name: 'ProfileCardContent',
  mixins: [
    DMMixin
  ],
  components: {
    AvatarUser,
    ModalClose,
    UserName,
    Tooltip,
    ButtonSubmit
  },
  props: {
    contractID: String,
    onPostCtaClick: Function,
    deactivated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'groupProfiles',
      'currentGroupOwnerID',
      'globalProfile',
      'groupShouldPropose',
      'ourContributionSummary',
      'ourGroupDirectMessageFromUserIds',
      'ourIdentityContractId'
    ]),
    profile () {
      return this.globalProfile(this.contractID)
    },
    userGroupProfile () {
      return this.groupProfiles[this.contractID]
    },
    isSelf () {
      return this.contractID === this.ourIdentityContractId
    },
    username () {
      return this.profile?.username || this.contractID
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    },
    isActiveGroupMember () {
      return this.userGroupProfile?.status === PROFILE_STATUS.ACTIVE
    },
    paymentMethods () {
      return this.userGroupProfile?.paymentMethods
    },
    hasIncomeDetails () {
      return !!this.userGroupProfile?.incomeDetailsType
    },
    receivingMonetary () {
      return !!this.ourContributionSummary.receivingMonetary
    }
  },
  methods: {
    openModal (modal, props) {
      if (this.deactivated) { return }

      sbp('okTurtles.events/emit', OPEN_MODAL, modal, props)
      this.onPostCtaClick && this.onPostCtaClick()
    },
    onRemoveMemberClick () {
      if (this.deactivated) { return }

      sbp(
        'okTurtles.events/emit',
        this.$route.query?.modal === 'GroupMembersAllModal' ? REPLACE_MODAL : OPEN_MODAL,
        'RemoveMember',
        { memberID: this.contractID }
      )

      this.onPostCtaClick && this.onPostCtaClick()
    },
    async sendMessage () {
      const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.contractID)

      if (!chatRoomID) {
        const freshChatRoomID = await this.createDirectMessage(this.contractID)
        if (freshChatRoomID) {
          this.redirect(freshChatRoomID)
        }
      } else {
        if (!this.ourGroupDirectMessages[chatRoomID].visible) {
          this.setDMVisibility(chatRoomID, true)
        } else {
          this.redirect(chatRoomID)
        }
      }

      this.onPostCtaClick && this.onPostCtaClick()
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.card {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  color: $text_1;
  max-width: 100vw;
  width: 24.3rem;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);

  &:last-child {
    margin-bottom: 0;
  }

  @include phone {
    box-shadow: none;
    width: 100vw;
    padding-bottom: 4rem;
  }
}

.c-profile {
  position: relative;
  display: flex;
  flex-direction: column;

  .is-active & {
    animation: zoom 100ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    @include phone {
      animation-name: enterFromBottom;
    }
  }
}

.c-identity {
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
}

.not-group-member {
  filter: saturate(0.3);
}

.c-bio-button {
  width: 100%;
  margin-bottom: 0.5rem;
}

.c-bio-link {
  margin-left: 0.3rem;
}

.c-payment-list {
  margin-top: 1rem;
}

.c-payment-item {
  margin-bottom: 0.5rem;
}

.c-payment-type {
  padding-right: 0.5rem;
  user-select: none;
}

.c-add-payment-button {
  margin-top: 1.5rem;
  width: 100%;
}

.c-bio + .c-add-payment {
  margin-top: 2rem;
}

.buttons {
  margin-top: 1rem;

  .is-outlined {
    width: calc(50% - 0.5rem);
  }
}

.c-close {
  position: absolute;
  left: calc(100vw - 4rem);
  top: 1.5rem;

  @include tablet {
    left: auto;
    right: 1rem;

    /* Hide it visually... */
    opacity: 0;
    pointer-events: none;

    /* ...but keep it for keyboard users. */
    &:focus {
      opacity: 1;
    }
  }
}
</style>
`, ".card {\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  color: var(--text_1);\n  max-width: 100vw;\n  width: 24.3rem;\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n}\n.card:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .card {\n    box-shadow: none;\n    width: 100vw;\n    padding-bottom: 4rem;\n  }\n}\n\n.c-profile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.is-active .c-profile {\n  animation: zoom 100ms both cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n@media screen and (max-width: 768px) {\n  .is-active .c-profile {\n    animation-name: enterFromBottom;\n  }\n}\n\n.c-identity {\n  display: flex;\n  align-items: center;\n  padding-bottom: 1.5rem;\n}\n\n.not-group-member {\n  filter: saturate(0.3);\n}\n\n.c-bio-button {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n\n.c-bio-link {\n  margin-left: 0.3rem;\n}\n\n.c-payment-list {\n  margin-top: 1rem;\n}\n\n.c-payment-item {\n  margin-bottom: 0.5rem;\n}\n\n.c-payment-type {\n  padding-right: 0.5rem;\n  user-select: none;\n}\n\n.c-add-payment-button {\n  margin-top: 1.5rem;\n  width: 100%;\n}\n\n.c-bio + .c-add-payment {\n  margin-top: 2rem;\n}\n\n.buttons {\n  margin-top: 1rem;\n}\n.buttons .is-outlined {\n  width: calc(50% - 0.5rem);\n}\n\n.c-close {\n  position: absolute;\n  left: calc(100vw - 4rem);\n  top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-close {\n    left: auto;\n    right: 1rem;\n    /* Hide it visually... */\n    opacity: 0;\n    pointer-events: none;\n    /* ...but keep it for keyboard users. */\n  }\n  .c-close:focus {\n    opacity: 1;\n  }\n}\n\n/*# sourceMappingURL=ProfileCardContent.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-5b6f5ccf";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.card.c-profile(
  role='dialog'
  data-test='memberProfileCard'
  :aria-label='L("{username} profile", { username })'
)
  .c-identity(:class='{ "not-group-member": !isActiveGroupMember }')
    avatar-user(:contractID='contractID' size='lg')
    user-name(:contractID='contractID')

  i18n.has-text-1(
    tag='p'
    v-if='!isActiveGroupMember'
  ) No longer a member of the group

  p.c-bio(v-if='profile.bio')
    | {{profile.bio}}
    i18n.c-bio-link.is-unstyled.link(
      v-if='isSelf'
      tag='button'
      @click='openModal("UserSettingsModal")'
      data-test='linkEditBio'
    ) Edit bio

  i18n.button.is-small.is-outlined.c-bio-button(
    v-else-if='isSelf && hasIncomeDetails'
    tag='button'
    @click='openModal("UserSettingsModal")'
    data-test='buttonEditBio'
  ) Add a bio

  div(v-if='hasIncomeDetails' data-test='profilePaymentMethods')
    ul.c-payment-list
      li.c-payment-item(v-for='(paymentMethod, name) in paymentMethods'
        data-test='profilePaymentMethod')
        span.c-payment-type.has-text-0.has-text-bold {{ paymentMethod.name }}
        span.has-text-1 {{ paymentMethod.value }}

    i18n.link(
      v-if='isSelf && receivingMonetary'
      tag='button'
      @click='openModal("incomeDetails")'
      data-test='linkEditPayment'
    ) Edit payment info

  .c-add-payment(v-else-if='isSelf')
    i18n.has-text-1(tag='p') Help other users send monthly contributions your way by adding your payment information.
    i18n.button.c-add-payment-button(
      tag='button'
      @click='openModal("incomeDetails")'
      data-test='buttonAddPayment'
    ) Add payment information

  .buttons(v-if='!isSelf')
    button-submit.is-outlined.is-small(
      type='button'
      data-test='buttonSendMessage'
      @click='sendMessage'
    )
      i18n Send message

    i18n.button.is-outlined.is-small(
      v-if='groupShouldPropose || isGroupCreator'
      tag='button'
      @click.stop='onRemoveMemberClick'
      data-test='buttonRemoveMember'
    ) Remove member

  modal-close.c-close(
    :aria-label='L("Close profile")'
    @close='$emit("modal-close")'
  )
</template>

<script>
import sbp from '@sbp/sbp'
import AvatarUser from '../../../frontend/views/components/AvatarUser.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'
import UserName from '../../../frontend/views/components/UserName.vue'
import Tooltip from '../../../frontend/views/components/Tooltip.vue'
import ModalClose from '../../../frontend/views/components/modal/ModalClose.vue'
import DMMixin from '../../../frontend/views/containers/chatroom/DMMixin.js'
import { OPEN_MODAL, REPLACE_MODAL } from '../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import { PROFILE_STATUS } from '../../../frontend/model/contracts/shared/constants.js'

export default {
  name: 'ProfileCardContent',
  mixins: [
    DMMixin
  ],
  components: {
    AvatarUser,
    ModalClose,
    UserName,
    Tooltip,
    ButtonSubmit
  },
  props: {
    contractID: String,
    onPostCtaClick: Function,
    deactivated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'groupProfiles',
      'currentGroupOwnerID',
      'globalProfile',
      'groupShouldPropose',
      'ourContributionSummary',
      'ourGroupDirectMessageFromUserIds',
      'ourIdentityContractId'
    ]),
    profile () {
      return this.globalProfile(this.contractID)
    },
    userGroupProfile () {
      return this.groupProfiles[this.contractID]
    },
    isSelf () {
      return this.contractID === this.ourIdentityContractId
    },
    username () {
      return this.profile?.username || this.contractID
    },
    isGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    },
    isActiveGroupMember () {
      return this.userGroupProfile?.status === PROFILE_STATUS.ACTIVE
    },
    paymentMethods () {
      return this.userGroupProfile?.paymentMethods
    },
    hasIncomeDetails () {
      return !!this.userGroupProfile?.incomeDetailsType
    },
    receivingMonetary () {
      return !!this.ourContributionSummary.receivingMonetary
    }
  },
  methods: {
    openModal (modal, props) {
      if (this.deactivated) { return }

      sbp('okTurtles.events/emit', OPEN_MODAL, modal, props)
      this.onPostCtaClick && this.onPostCtaClick()
    },
    onRemoveMemberClick () {
      if (this.deactivated) { return }

      sbp(
        'okTurtles.events/emit',
        this.$route.query?.modal === 'GroupMembersAllModal' ? REPLACE_MODAL : OPEN_MODAL,
        'RemoveMember',
        { memberID: this.contractID }
      )

      this.onPostCtaClick && this.onPostCtaClick()
    },
    async sendMessage () {
      const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.contractID)

      if (!chatRoomID) {
        const freshChatRoomID = await this.createDirectMessage(this.contractID)
        if (freshChatRoomID) {
          this.redirect(freshChatRoomID)
        }
      } else {
        if (!this.ourGroupDirectMessages[chatRoomID].visible) {
          this.setDMVisibility(chatRoomID, true)
        } else {
          this.redirect(chatRoomID)
        }
      }

      this.onPostCtaClick && this.onPostCtaClick()
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.card {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  color: $text_1;
  max-width: 100vw;
  width: 24.3rem;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);

  &:last-child {
    margin-bottom: 0;
  }

  @include phone {
    box-shadow: none;
    width: 100vw;
    padding-bottom: 4rem;
  }
}

.c-profile {
  position: relative;
  display: flex;
  flex-direction: column;

  .is-active & {
    animation: zoom 100ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    @include phone {
      animation-name: enterFromBottom;
    }
  }
}

.c-identity {
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
}

.not-group-member {
  filter: saturate(0.3);
}

.c-bio-button {
  width: 100%;
  margin-bottom: 0.5rem;
}

.c-bio-link {
  margin-left: 0.3rem;
}

.c-payment-list {
  margin-top: 1rem;
}

.c-payment-item {
  margin-bottom: 0.5rem;
}

.c-payment-type {
  padding-right: 0.5rem;
  user-select: none;
}

.c-add-payment-button {
  margin-top: 1.5rem;
  width: 100%;
}

.c-bio + .c-add-payment {
  margin-top: 2rem;
}

.buttons {
  margin-top: 1rem;

  .is-outlined {
    width: calc(50% - 0.5rem);
  }
}

.c-close {
  position: absolute;
  left: calc(100vw - 4rem);
  top: 1.5rem;

  @include tablet {
    left: auto;
    right: 1rem;

    /* Hide it visually... */
    opacity: 0;
    pointer-events: none;

    /* ...but keep it for keyboard users. */
    &:focus {
      opacity: 1;
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
function __vue_create_injector__2() {
  const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2(
  { render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 },
  __vue_inject_styles__2,
  __vue_script__2,
  __vue_scope_id__2,
  __vue_is_functional_template__2,
  __vue_module_identifier__2,
  false,
  __vue_create_injector__2,
  void 0,
  void 0
);
var ProfileCardContent_default = __vue_component__2;

export {
  DMMixin_default,
  ProfileCardContent_default
};
//# sourceMappingURL=chunk-3T5W4UPP-cached.js.map
