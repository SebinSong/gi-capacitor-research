import {
  PageSection_default
} from "./chunk-36LKA4A3-cached.js";
import {
  MenuContent_default,
  MenuItem_default,
  MenuParent_default,
  MenuTrigger_default
} from "./chunk-5WH7KRTS-cached.js";
import {
  require_vue_clickaway_common
} from "./chunk-LA43UFR3-cached.js";
import {
  AvatarUpload_default
} from "./chunk-ZVL32ZU3-cached.js";
import {
  invitation_default
} from "./chunk-4IQTUSSG-cached.js";
import {
  RULE_DISAGREEMENT,
  RULE_PERCENTAGE,
  getCountOutOfMembers,
  getPercentFromDecimal,
  getThresholdAdjusted
} from "./chunk-XIIXXSLC-cached.js";
import {
  buildInvitationUrl
} from "./chunk-EPK24SZY-cached.js";
import {
  LinkToCopy_default
} from "./chunk-U5MBT6RH-cached.js";
import "./chunk-LUECJCV2-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import {
  INVITE_STATUS
} from "./chunk-F2DYOYGG-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import "./chunk-DXIHOQP2-cached.js";
import "./chunk-LOAVQ5PN-cached.js";
import "./chunk-K33NK7LD-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  currencies_default
} from "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  CharLengthIndicator_default
} from "./chunk-PDM5OGIJ-cached.js";
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
import "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  GROUP_DESCRIPTION_MAX_CHAR,
  GROUP_NAME_MAX_CHAR,
  GROUP_PERMISSIONS,
  GROUP_PERMISSIONS_PRESET,
  GROUP_ROLES,
  INVITE_INITIAL_CREATOR
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import {
  ModalClose_default
} from "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/pages/GroupSettings.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());

// frontend/views/utils/time.js
function timeLeft(expiryTime) {
  const now = /* @__PURE__ */ new Date();
  const expiry = new Date(expiryTime);
  if (expiry < now) {
    return { expired: true, years: 0, months: 0, days: 0, hours: 0, minutes: 0 };
  }
  let years = expiry.getFullYear() - now.getFullYear();
  let months = expiry.getMonth() - now.getMonth();
  let days = expiry.getDate() - now.getDate();
  let hours = expiry.getHours() - now.getHours();
  let minutes = expiry.getMinutes() - now.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(expiry.getFullYear(), expiry.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { expired: false, years, months, days, hours, minutes };
}

// frontend/views/containers/group-settings/InvitationsTable.vue
var __vue_script__ = {
  name: "InvitationsTable",
  components: {
    BannerScoped: BannerScoped_default,
    PageSection: PageSection_default,
    SvgInvitation: invitation_default,
    Tooltip: Tooltip_default,
    LinkToCopy: LinkToCopy_default,
    MenuParent: MenuParent_default,
    MenuTrigger: MenuTrigger_default,
    MenuContent: MenuContent_default,
    MenuItem: MenuItem_default
  },
  data() {
    return {
      ephemeral: {
        selectbox: {
          focused: false,
          selectedOption: "Active"
        },
        // keep invite in "Active" list for a few seconds after being revoked
        inviteRevokedNow: null,
        isMobile: false
      },
      matchMediaMobile: null
    };
  },
  computed: {
    ...mapGetters([
      "currentGroupState",
      "ourIdentityContractId",
      "ourUserDisplayName",
      "currentGroupOwnerID",
      "currentWelcomeInvite",
      "groupShouldPropose"
    ]),
    ...mapState([
      "currentGroupId"
    ]),
    invitesToShow() {
      const vmInvites = this.currentGroupState._vm?.invites;
      if (!vmInvites) {
        return [];
      }
      const invites = this.currentGroupState.invites || {};
      const invitesList = Object.entries(vmInvites).map(([id, invite]) => [id, { ...invite, creatorID: invites[id]?.creatorID, invitee: invites[id]?.invitee }]).filter(([, invite]) => invite.creatorID === INVITE_INITIAL_CREATOR || invite.creatorID === this.ourIdentityContractId).map(this.mapInvite);
      const options = {
        Active: () => invitesList.filter((invite) => invite.status.isActive || invite.status.isRevoked && invite.id === this.ephemeral.inviteRevokedNow),
        All: () => invitesList
      };
      return options[this.ephemeral.selectbox.selectedOption]();
    },
    isUserGroupCreator() {
      return this.ourIdentityContractId === this.currentGroupOwnerID;
    }
  },
  methods: {
    unfocusSelect() {
      this.$refs.select.blur();
    },
    copyInviteLink(inviteLink) {
      const copyToClipBoard = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(inviteLink);
        } else {
          const inputAid = this.$refs.copyInput;
          inputAid.value = inviteLink;
          inputAid.select();
          this.$nextTick(() => {
            document.execCommand("copy");
            inputAid.blur();
          });
        }
      };
      if (navigator.share) {
        navigator.share({
          title: L("Your invite"),
          url: inviteLink
        }).catch((error) => {
          console.error("navigator.share failed with:", error);
          copyToClipBoard();
        });
        return;
      }
      copyToClipBoard();
    },
    inviteStatusDescription({
      isAnyoneLink,
      isInviteExpired,
      isInviteRevoked,
      isAllInviteUsed,
      quantity,
      numberOfResponses
    }) {
      if (isAnyoneLink) return L("{numberOfResponses}/{quantity} used", { numberOfResponses, quantity });
      else if (isAllInviteUsed) return L("Used");
      else if (isInviteRevoked) return L("Not used");
      else return isInviteExpired || isInviteRevoked ? L("Not used") : L("Not used yet");
    },
    readableExpiryInfo(expiryTime) {
      if (expiryTime == null) return L("Doesn't expire");
      const { expired, years, months, days, hours, minutes } = timeLeft(expiryTime);
      if (expired) return L("Expired");
      if (years) return L("{years}y {months}mo {days}d left", { years, months, days: days + (hours || minutes ? 1 : 0) });
      if (months) return L("{months}mo {days}d left", { months, days: days + (hours || minutes ? 1 : 0) });
      if (days) return L("{days}d {hours}h {minutes}m left", { days, hours, minutes });
      if (hours) return L("{hours}h {minutes}m left", { hours, minutes });
      if (minutes) return L("{minutes}m left", { minutes });
      return L("Expired");
    },
    mapInvite([id, {
      creatorID,
      expires: expiryTime,
      invitee,
      inviteSecret,
      initialQuantity,
      quantity,
      status
    }]) {
      const isAnyoneLink = creatorID === INVITE_INITIAL_CREATOR;
      const isInviteExpired = expiryTime < Date.now();
      const isInviteRevoked = status === INVITE_STATUS.REVOKED;
      const numberOfResponses = initialQuantity - quantity;
      const isAllInviteUsed = quantity === 0;
      return {
        id,
        isAnyoneLink,
        invitee: isAnyoneLink ? L("Anyone") : invitee,
        inviteSecret,
        inviteLink: buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, inviteSecret, isAnyoneLink ? void 0 : this.ourIdentityContractId),
        description: this.inviteStatusDescription({
          isAnyoneLink,
          isInviteExpired,
          isInviteRevoked,
          isAllInviteUsed,
          quantity: initialQuantity,
          numberOfResponses
        }),
        expiryInfo: isInviteExpired ? L("Expired") : isInviteRevoked ? L("Revoked") : isAllInviteUsed ? "" : this.readableExpiryInfo(expiryTime),
        status: {
          isExpired: isInviteExpired,
          isActive: !isInviteExpired && !isInviteRevoked && !isAllInviteUsed,
          isRevoked: isInviteRevoked
        }
      };
    },
    showRevokeLinkMenu(inviteItem) {
      if (inviteItem.status.isActive) {
        if (inviteItem.isAnyoneLink) {
          return this.isUserGroupCreator && this.groupShouldPropose;
        }
        return true;
      }
      return false;
    },
    handleInviteClick(e) {
      if (e.target.classList.contains("js-btnInvite")) {
        if (this.groupShouldPropose) {
          const contractID = this.currentGroupId;
          esm_default("gi.app/group/checkGroupSizeAndProposeMember", { contractID }).catch((e2) => {
            console.error(`Error on action checkGroupSizeAndProposeMember (handleInviteClock) for ${contractID}`, e2);
          });
        } else {
          esm_default("okTurtles.events/emit", OPEN_MODAL, "InvitationLinkModal");
        }
      }
    },
    async handleSeeOriginal() {
      await esm_default("okTurtles.events/emit", OPEN_MODAL, "PropositionsAllModal");
    },
    async handleRevokeClick(inviteKeyId) {
      const yesSelected = await esm_default("gi.ui/prompt", {
        heading: L("Revoke invite link"),
        question: L("Are you sure you want to revoke this link?{br_}This action cannot be undone.", LTags()),
        primaryButton: L("Yes"),
        secondaryButton: L("Cancel")
      });
      if (!yesSelected) {
        return null;
      }
      try {
        this.ephemeral.inviteRevokedNow = inviteKeyId;
        await esm_default("gi.actions/group/inviteRevoke", {
          data: { inviteKeyId },
          contractID: this.currentGroupId
        });
        setTimeout(() => {
          this.ephemeral.inviteRevokedNow = null;
        }, 2e3);
      } catch (e) {
        this.ephemeral.inviteRevokedNow = null;
        console.error("InvitationsTable.vue handleRevokeClick() error:", e);
        this.$refs.inviteError.danger(e.message);
      }
    }
  },
  mounted() {
    this.matchMediaMobile = window.matchMedia("screen and (max-width: 769px)");
    this.ephemeral.isMobile = this.matchMediaMobile.matches;
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches;
    };
  },
  beforeDestroy() {
    this.matchMediaMobile.onchange = null;
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "page-section",
    {
      staticClass: "c-section",
      attrs: { title: _vm.L("Invite links") },
      scopedSlots: _vm._u([
        {
          key: "cta",
          fn: function() {
            return [
              _c(
                "label",
                {
                  staticClass: "selectsolo",
                  class: { focus: _vm.ephemeral.selectbox.focused }
                },
                [
                  _c("i18n", { staticClass: "sr-only" }, [
                    _vm._v("Filter links")
                  ]),
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
                      _c("option", { attrs: { value: "Active" } }, [
                        _vm._v(_vm._s(_vm.L("Active links")))
                      ]),
                      _c("option", { attrs: { value: "All" } }, [
                        _vm._v(_vm._s(_vm.L("All links")))
                      ])
                    ]
                  )
                ],
                1
              )
            ];
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "i18n",
        { staticClass: "has-text-1 c-invite-description", attrs: { tag: "p" } },
        [_vm._v("Here's a list of all invite links you own")]
      ),
      _c("banner-scoped", {
        ref: "inviteError",
        attrs: { "data-test": "inviteError" }
      }),
      _vm.invitesToShow && _vm.invitesToShow.length !== 0 ? _c(
        "table",
        { staticClass: "table table-in-card c-table" },
        [
          _c("thead", [
            _c(
              "tr",
              [
                _c(
                  "i18n",
                  { staticClass: "c-name", attrs: { tag: "th" } },
                  [_vm._v("created for")]
                ),
                _c(
                  "i18n",
                  { staticClass: "c-invite-link", attrs: { tag: "th" } },
                  [_vm._v("invite link")]
                ),
                _c(
                  "i18n",
                  { staticClass: "c-state", attrs: { tag: "th" } },
                  [_vm._v("state")]
                ),
                _c("th", {
                  staticClass: "c-action",
                  attrs: { "aria-label": _vm.L("action") }
                })
              ],
              1
            )
          ]),
          _c(
            "transition-group",
            { attrs: { name: "slidedown", tag: "tbody" } },
            _vm._l(_vm.invitesToShow, function(item, index) {
              return _c("tr", { key: index }, [
                _c(
                  "td",
                  { staticClass: "c-name" },
                  [
                    _vm._v(_vm._s(item.invitee)),
                    item.isAnyoneLink ? _c(
                      "tooltip",
                      {
                        staticClass: "c-name-tooltip",
                        attrs: {
                          direction: _vm.ephemeral.isMobile ? "right" : "top",
                          isTextCenter: true,
                          anchorToElement: true,
                          text: _vm.L(
                            "Anyone with this link can join the group."
                          )
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "button is-icon-smaller is-primary c-tip"
                          },
                          [_c("i", { staticClass: "icon-info" })]
                        )
                      ]
                    ) : _vm._e()
                  ],
                  1
                ),
                _c(
                  "td",
                  { staticClass: "c-invite-link" },
                  [
                    _c("link-to-copy", {
                      staticClass: "c-invite-link-wrapper",
                      attrs: { link: item.inviteLink }
                    }),
                    _c(
                      "menu-parent",
                      {
                        staticClass: "c-invite-link-options-mobile hide-tablet"
                      },
                      [
                        _c(
                          "menu-trigger",
                          { staticClass: "is-icon-small" },
                          [_c("i", { staticClass: "icon-ellipsis-v" })]
                        ),
                        _c(
                          "menu-content",
                          { staticClass: "c-dropdown-invite-link" },
                          [
                            _c(
                              "ul",
                              [
                                !item.isAnyoneLink ? _c(
                                  "menu-item",
                                  {
                                    attrs: {
                                      tag: "button",
                                      "item-id": "original",
                                      icon: "check-to-slot"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleSeeOriginal(
                                          item
                                        );
                                      }
                                    }
                                  },
                                  [
                                    _c("i18n", [
                                      _vm._v("See original proposal")
                                    ])
                                  ],
                                  1
                                ) : _vm._e(),
                                _c(
                                  "menu-item",
                                  {
                                    attrs: { tag: "button", icon: "link" },
                                    on: {
                                      click: function($event) {
                                        return _vm.copyInviteLink(
                                          item.inviteLink
                                        );
                                      }
                                    }
                                  },
                                  [_c("i18n", [_vm._v("Copy link")])],
                                  1
                                ),
                                _vm.showRevokeLinkMenu(item) ? _c(
                                  "menu-item",
                                  {
                                    attrs: {
                                      tag: "button",
                                      "item-id": "revoke",
                                      icon: "times"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation();
                                        return _vm.handleRevokeClick(
                                          item.id
                                        );
                                      }
                                    }
                                  },
                                  [_c("i18n", [_vm._v("Revoke Link")])],
                                  1
                                ) : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c("td", { staticClass: "c-state" }, [
                  _c("span", { staticClass: "c-state-description" }, [
                    _vm._v(_vm._s(item.description))
                  ]),
                  item.expiryInfo ? _c(
                    "span",
                    {
                      staticClass: "c-state-expire",
                      class: {
                        "is-danger": item.status.isExpired || item.status.isRevoked
                      }
                    },
                    [_vm._v(_vm._s(item.expiryInfo))]
                  ) : _vm._e()
                ]),
                _c(
                  "td",
                  { staticClass: "c-action" },
                  [
                    _vm.showRevokeLinkMenu(item) ? _c(
                      "menu-parent",
                      [
                        _c(
                          "menu-trigger",
                          {
                            staticClass: "is-icon",
                            attrs: { "aria-label": _vm.L("Show list") }
                          },
                          [_c("i", { staticClass: "icon-ellipsis-v" })]
                        ),
                        _c(
                          "menu-content",
                          { staticClass: "c-dropdown-action" },
                          [
                            _c(
                              "ul",
                              [
                                !item.isAnyoneLink ? _c(
                                  "menu-item",
                                  {
                                    attrs: {
                                      tag: "button",
                                      "item-id": "original",
                                      icon: "check-to-slot"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleSeeOriginal(
                                          item
                                        );
                                      }
                                    }
                                  },
                                  [
                                    _c("i18n", [
                                      _vm._v(
                                        "See original proposal"
                                      )
                                    ])
                                  ],
                                  1
                                ) : _vm._e(),
                                item.status.isActive ? _c(
                                  "menu-item",
                                  {
                                    attrs: {
                                      tag: "button",
                                      "item-id": "revoke",
                                      icon: "times"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation();
                                        return _vm.handleRevokeClick(
                                          item.id
                                        );
                                      }
                                    }
                                  },
                                  [
                                    _c("i18n", [
                                      _vm._v("Revoke Link")
                                    ])
                                  ],
                                  1
                                ) : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ) : _vm._e()
                  ],
                  1
                )
              ]);
            }),
            0
          )
        ],
        1
      ) : _c("div", { staticClass: "c-empty-list" }, [_c("SvgInvitation")], 1),
      _c(
        "i18n",
        {
          staticClass: "c-invite-footer",
          attrs: {
            tag: "p",
            args: { r1: '<button class="link js-btnInvite">', r2: "</button>" }
          },
          on: { click: _vm.handleInviteClick }
        },
        [
          _vm._v(
            "To generate a new link, you need to {r1}propose adding a new member{r2} to your group."
          )
        ]
      ),
      _c("input", {
        ref: "copyInput",
        staticClass: "c-invisible-input",
        attrs: { type: "text" }
      })
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-4c94c8ae_0", { source: '@charset "UTF-8";\n.c-section[data-v-4c94c8ae] {\n  position: relative;\n}\n.c-title[data-v-4c94c8ae] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-invite-description[data-v-4c94c8ae] {\n  margin: 0.5rem 0;\n}\n.c-table[data-v-4c94c8ae] {\n  table-layout: fixed;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-table tr[data-v-4c94c8ae] {\n  display: grid;\n  grid-template-columns: 28.4% 36.1% 23.7% auto;\n  grid-template-areas: "name invite-link state action";\n}\n@media screen and (max-width: 768px) {\n.c-table thead tr[data-v-4c94c8ae] {\n    grid-template-columns: 81% auto;\n    grid-template-areas: "name invite-link";\n}\n.c-table tbody tr[data-v-4c94c8ae] {\n    grid-template-columns: 81% auto;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: "name invite-link" "state invite-link";\n}\n}\n.c-table th[data-v-4c94c8ae],\n.c-table td[data-v-4c94c8ae] {\n  display: flex;\n  align-items: center;\n}\n.c-table .c-name[data-v-4c94c8ae] {\n  grid-area: name;\n  padding-right: 1.5rem;\n  line-height: 1.3125rem;\n  align-items: center;\n}\n.c-table .c-name .c-tip[data-v-4c94c8ae] {\n  margin-left: 0.4375rem;\n  line-height: 1.3125rem;\n}\n.c-table .c-invite-link[data-v-4c94c8ae] {\n  position: relative;\n  grid-area: invite-link;\n  padding-right: 1.5rem;\n}\n.c-table .c-invite-link-wrapper[data-v-4c94c8ae] {\n  display: inherit;\n  align-items: inherit;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n.c-table .c-invite-link[data-v-4c94c8ae] {\n    justify-content: flex-end;\n    padding-right: 0.5rem;\n}\n.c-table .c-invite-link-wrapper[data-v-4c94c8ae] {\n    display: none;\n}\n}\n@media screen and (max-width: 768px) {\n.c-table th.c-invite-link[data-v-4c94c8ae] {\n    white-space: nowrap;\n    opacity: 0;\n}\n}\n.c-table .c-state[data-v-4c94c8ae] {\n  grid-area: state;\n  padding-right: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.c-table .c-state .c-state-expire[data-v-4c94c8ae] {\n  line-height: 1.125rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n}\n.c-table .c-state .c-state-expire.is-danger[data-v-4c94c8ae] {\n  color: var(--danger_0);\n}\n@media screen and (max-width: 768px) {\n.c-table .c-state[data-v-4c94c8ae] {\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: flex-start;\n    padding-left: 1rem;\n}\n}\n@media screen and (max-width: 768px) {\n.c-table th.c-state[data-v-4c94c8ae] {\n    display: none;\n}\n}\n@media screen and (max-width: 768px) {\n.c-table td.c-state .c-state-expire[data-v-4c94c8ae]::before {\n    content: "\xB7";\n    display: inline-block;\n    color: var(--text_0);\n    padding: 0 0.25rem;\n}\n}\n.c-table .c-action[data-v-4c94c8ae] {\n  grid-area: action;\n  justify-content: flex-end;\n}\n.c-table .c-action .c-invite-action-button[data-v-4c94c8ae] {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-table .c-action[data-v-4c94c8ae] {\n    display: none;\n}\n}\n.c-table .c-dropdown-action[data-v-4c94c8ae],\n.c-table .c-dropdown-invite-link[data-v-4c94c8ae] {\n  width: max-content;\n  transform: translateX(-100%);\n}\n.c-table .c-dropdown-action[data-v-4c94c8ae] {\n  min-width: 13.375rem;\n  margin: 3.5rem 0 0 3rem;\n}\n.c-table .c-dropdown-invite-link[data-v-4c94c8ae] {\n  min-width: 8.5rem;\n  margin-top: 2rem;\n  right: unset;\n  left: 2rem;\n  top: 0.5rem;\n}\n.c-table .c-webshare-fallback[data-v-4c94c8ae] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: 0.5rem;\n  z-index: 50;\n}\n.c-empty-list[data-v-4c94c8ae] {\n  margin: 1.5rem 0;\n  text-align: center;\n}\n.c-name-tooltip[data-v-4c94c8ae] {\n  text-align: center;\n}\n.c-active-button .c-arrow[data-v-4c94c8ae] {\n  margin-right: 0;\n}\n.c-invisible-input[data-v-4c94c8ae] {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n\n/*# sourceMappingURL=InvitationsTable.vue.map */', map: { "version": 3, "sources": ["InvitationsTable.vue", "frontend/views/containers/group-settings/InvitationsTable.vue"], "names": [], "mappings": "AAAA,gBAAgB;AC+XhB;EACA,kBAAA;AD7XA;ACgYA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AD7XA;ACgYA;EACA,gBAAA;AD7XA;ACgYA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;AD7XA;AC+XA;EACA,aAAA;EACA,6CAAA;EACA,oDAAA;AD7XA;AACA;ACgYA;IACA,+BAAA;IACA,uCAAA;AD9XE;ACiYF;IACA,+BAAA;IACA,2BAAA;IACA,2DACA;ADhYE;AACF;ACoYA;;EAEA,aAAA;EACA,mBAAA;ADlYA;ACqYA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ADnYA;ACqYA;EACA,sBAAA;EACA,sBAAA;ADnYA;ACuYA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;ADrYA;ACuYA;EACA,gBAAA;EACA,oBAAA;EACA,WAAA;ADrYA;AACA;AC4XA;IAYA,yBAAA;IACA,qBAAA;ADrYE;ACuYF;IACA,aAAA;ADrYE;AACF;AACA;ACwYA;IAEA,mBAAA;IACA,UAAA;ADvYE;AACF;AC0YA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;ADxYA;AC0YA;EACA,qBAAA;EACA,kBAAA;EACA,oBAAA;ADxYA;AC0YA;EACA,sBAAA;ADxYA;AACA;ACyXA;IAmBA,mBAAA;IACA,qBAAA;IACA,2BAAA;IACA,kBAAA;ADzYE;AACF;AACA;AC2YA;IAEA,aAAA;AD1YE;AACF;AACA;AC8YA;IACA,YAAA;IACA,qBAAA;IACA,oBAAA;IACA,kBAAA;AD5YE;AACF;ACgZA;EACA,iBAAA;EACA,yBAAA;AD9YA;ACgZA;EACA,oBAAA;AD9YA;AACA;ACwYA;IASA,aAAA;AD9YE;AACF;ACiZA;;EAEA,kBAAA;EACA,4BAAA;AD/YA;ACkZA;EACA,oBAAA;EACA,uBAAA;ADhZA;ACmZA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;ADjZA;ACoZA;EACA,kBAAA;EACA,QAAA;EACA,QAAA;EACA,2BAAA;EACA,oBAAA;EACA,WAAA;ADlZA;ACsZA;EACA,gBAAA;EACA,kBAAA;ADnZA;ACsZA;EACA,kBAAA;ADnZA;ACuZA;EACA,eAAA;ADpZA;ACwZA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;ADrZA;;AAEA,+CAA+C", "file": "InvitationsTable.vue", "sourcesContent": ['@charset "UTF-8";\n.c-section {\n  position: relative;\n}\n\n.c-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-invite-description {\n  margin: 0.5rem 0;\n}\n\n.c-table {\n  table-layout: fixed;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-table tr {\n  display: grid;\n  grid-template-columns: 28.4% 36.1% 23.7% auto;\n  grid-template-areas: "name invite-link state action";\n}\n@media screen and (max-width: 768px) {\n  .c-table thead tr {\n    grid-template-columns: 81% auto;\n    grid-template-areas: "name invite-link";\n  }\n  .c-table tbody tr {\n    grid-template-columns: 81% auto;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: "name invite-link" "state invite-link";\n  }\n}\n.c-table th,\n.c-table td {\n  display: flex;\n  align-items: center;\n}\n.c-table .c-name {\n  grid-area: name;\n  padding-right: 1.5rem;\n  line-height: 1.3125rem;\n  align-items: center;\n}\n.c-table .c-name .c-tip {\n  margin-left: 0.4375rem;\n  line-height: 1.3125rem;\n}\n.c-table .c-invite-link {\n  position: relative;\n  grid-area: invite-link;\n  padding-right: 1.5rem;\n}\n.c-table .c-invite-link-wrapper {\n  display: inherit;\n  align-items: inherit;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  .c-table .c-invite-link {\n    justify-content: flex-end;\n    padding-right: 0.5rem;\n  }\n  .c-table .c-invite-link-wrapper {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-table th.c-invite-link {\n    white-space: nowrap;\n    opacity: 0;\n  }\n}\n.c-table .c-state {\n  grid-area: state;\n  padding-right: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.c-table .c-state .c-state-expire {\n  line-height: 1.125rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n}\n.c-table .c-state .c-state-expire.is-danger {\n  color: var(--danger_0);\n}\n@media screen and (max-width: 768px) {\n  .c-table .c-state {\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: flex-start;\n    padding-left: 1rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-table th.c-state {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .c-table td.c-state .c-state-expire::before {\n    content: "\xB7";\n    display: inline-block;\n    color: var(--text_0);\n    padding: 0 0.25rem;\n  }\n}\n.c-table .c-action {\n  grid-area: action;\n  justify-content: flex-end;\n}\n.c-table .c-action .c-invite-action-button {\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-table .c-action {\n    display: none;\n  }\n}\n.c-table .c-dropdown-action,\n.c-table .c-dropdown-invite-link {\n  width: max-content;\n  transform: translateX(-100%);\n}\n.c-table .c-dropdown-action {\n  min-width: 13.375rem;\n  margin: 3.5rem 0 0 3rem;\n}\n.c-table .c-dropdown-invite-link {\n  min-width: 8.5rem;\n  margin-top: 2rem;\n  right: unset;\n  left: 2rem;\n  top: 0.5rem;\n}\n.c-table .c-webshare-fallback {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: 0.5rem;\n  z-index: 50;\n}\n\n.c-empty-list {\n  margin: 1.5rem 0;\n  text-align: center;\n}\n\n.c-name-tooltip {\n  text-align: center;\n}\n\n.c-active-button .c-arrow {\n  margin-right: 0;\n}\n\n.c-invisible-input {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n\n/*# sourceMappingURL=InvitationsTable.vue.map */', `<template lang="pug">
page-section.c-section(:title='L("Invite links")')
  template(#cta='')
    label.selectsolo(:class='{ focus: ephemeral.selectbox.focused }')
      i18n.sr-only Filter links
      select.select(
        ref='select'
        v-model='ephemeral.selectbox.selectedOption'
        @change='unfocusSelect'
      )
        option(value='Active') {{ L('Active links') }}
        option(value='All') {{ L('All links') }}

  i18n.has-text-1.c-invite-description(tag='p') Here's a list of all invite links you own

  banner-scoped(ref='inviteError' data-test='inviteError')

  table.table.table-in-card.c-table(v-if='invitesToShow && invitesToShow.length !== 0')
    thead
      tr
        i18n.c-name(tag='th') created for
        i18n.c-invite-link(tag='th') invite link
        i18n.c-state(tag='th') state
        th.c-action(
          :aria-label='L("action")'
        )
    transition-group(name='slidedown' tag='tbody')
      tr(
        v-for='(item, index) in invitesToShow'
        :key='index'
      )
        td.c-name
          | {{ item.invitee }}
          tooltip.c-name-tooltip(
            v-if='item.isAnyoneLink'
            :direction='ephemeral.isMobile ? "right" : "top"'
            :isTextCenter='true'
            :anchorToElement='true'
            :text='L("Anyone with this link can join the group.")'
          )
            .button.is-icon-smaller.is-primary.c-tip
              i.icon-info
        td.c-invite-link
          link-to-copy.c-invite-link-wrapper(:link='item.inviteLink')

          menu-parent.c-invite-link-options-mobile.hide-tablet
            menu-trigger.is-icon-small
              i.icon-ellipsis-v
            menu-content.c-dropdown-invite-link
              ul
                menu-item(
                  v-if='!item.isAnyoneLink'
                  tag='button'
                  item-id='original'
                  @click='handleSeeOriginal(item)'
                  icon='check-to-slot'
                )
                  i18n See original proposal
                menu-item(
                  tag='button'
                  icon='link'
                  @click='copyInviteLink(item.inviteLink)'
                )
                  i18n Copy link
                menu-item(
                  v-if='showRevokeLinkMenu(item)'
                  tag='button'
                  item-id='revoke'
                  icon='times'
                  @click.stop='handleRevokeClick(item.id)'
                )
                  i18n Revoke Link
        td.c-state
          span.c-state-description {{ item.description }}
          span.c-state-expire(
            v-if='item.expiryInfo'
            :class='{ "is-danger": item.status.isExpired || item.status.isRevoked }'
          ) {{ item.expiryInfo }}
        td.c-action
          menu-parent(v-if='showRevokeLinkMenu(item)')
            menu-trigger.is-icon(:aria-label='L("Show list")')
              i.icon-ellipsis-v

            menu-content.c-dropdown-action
              ul
                menu-item(
                  v-if='!item.isAnyoneLink'
                  tag='button'
                  item-id='original'
                  @click='handleSeeOriginal(item)'
                  icon='check-to-slot'
                )
                  i18n See original proposal
                menu-item(
                  v-if='item.status.isActive'
                  tag='button'
                  item-id='revoke'
                  icon='times'
                  @click.stop='handleRevokeClick(item.id)'
                )
                  i18n Revoke Link

  .c-empty-list(v-else)
    SvgInvitation

  i18n.c-invite-footer(
    tag='p'
    @click='handleInviteClick'
    :args='{ r1: \`<button class="link js-btnInvite">\`, r2: "</button>"}'
  ) To generate a new link, you need to {r1}propose adding a new member{r2} to your group.

  input.c-invisible-input(
    type='text'
    ref='copyInput'
  )
</template>

<script>
import sbp from '@sbp/sbp'
import { MenuParent, MenuTrigger, MenuContent, MenuItem } from '../../../../frontend/views/components/menu/index.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import SvgInvitation from '../../../../frontend/assets/svgs/invitation.svg'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import { INVITE_STATUS } from '@chelonia/lib/constants'
import { INVITE_INITIAL_CREATOR } from '../../../../frontend/model/contracts/shared/constants.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters, mapState } from 'vuex'
import { L, LTags } from '../../../../frontend/common/common.js'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { timeLeft } from '../../../../frontend/views/utils/time.js'

export default ({
  name: 'InvitationsTable',
  components: {
    BannerScoped,
    PageSection,
    SvgInvitation,
    Tooltip,
    LinkToCopy,
    MenuParent,
    MenuTrigger,
    MenuContent,
    MenuItem
  },
  data () {
    return {
      ephemeral: {
        selectbox: {
          focused: false,
          selectedOption: 'Active'
        },
        // keep invite in "Active" list for a few seconds after being revoked
        inviteRevokedNow: null,
        isMobile: false
      },
      matchMediaMobile: null
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'ourIdentityContractId',
      'ourUserDisplayName',
      'currentGroupOwnerID',
      'currentWelcomeInvite',
      'groupShouldPropose'
    ]),
    ...mapState([
      'currentGroupId'
    ]),
    invitesToShow () {
      const vmInvites = this.currentGroupState._vm?.invites
      if (!vmInvites) { return [] }

      const invites = this.currentGroupState.invites || {}

      const invitesList = Object.entries(vmInvites)
        .map(([id, invite]) => [id, { ...invite, creatorID: invites[id]?.creatorID, invitee: invites[id]?.invitee }])
        .filter(([, invite]) => invite.creatorID === INVITE_INITIAL_CREATOR || invite.creatorID === this.ourIdentityContractId)
        .map(this.mapInvite)

      const options = {
        Active: () => invitesList.filter(invite => invite.status.isActive || (invite.status.isRevoked && invite.id === this.ephemeral.inviteRevokedNow)),
        All: () => invitesList
      }

      return options[this.ephemeral.selectbox.selectedOption]()
    },
    isUserGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    }
  },
  methods: {
    unfocusSelect () {
      this.$refs.select.blur()
    },
    copyInviteLink (inviteLink) {
      const copyToClipBoard = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(inviteLink)
        } else {
          const inputAid = this.$refs.copyInput

          inputAid.value = inviteLink
          inputAid.select()

          this.$nextTick(() => {
            document.execCommand('copy')
            inputAid.blur()
          })
        }
      }

      if (navigator.share) {
        navigator.share({
          title: L('Your invite'),
          url: inviteLink
        }).catch((error) => {
          console.error('navigator.share failed with:', error)
          copyToClipBoard()
        })

        return
      }

      copyToClipBoard()
    },
    inviteStatusDescription ({
      isAnyoneLink,
      isInviteExpired,
      isInviteRevoked,
      isAllInviteUsed,
      quantity,
      numberOfResponses
    }) {
      if (isAnyoneLink) return L('{numberOfResponses}/{quantity} used', { numberOfResponses, quantity })
      else if (isAllInviteUsed) return L('Used')
      else if (isInviteRevoked) return L('Not used')
      else return isInviteExpired || isInviteRevoked ? L('Not used') : L('Not used yet')
    },
    readableExpiryInfo (expiryTime) {
      if (expiryTime == null) return L("Doesn't expire")
      const { expired, years, months, days, hours, minutes } = timeLeft(expiryTime)
      if (expired) return L('Expired')

      // In the cases when displaying years/months, count the remainer hours/mins as +1 day eg) 3days 15hrs 25mins -> 4days.
      if (years) return L('{years}y {months}mo {days}d left', { years, months, days: days + ((hours || minutes) ? 1 : 0) })
      if (months) return L('{months}mo {days}d left', { months, days: days + ((hours || minutes) ? 1 : 0) })

      if (days) return L('{days}d {hours}h {minutes}m left', { days, hours, minutes })
      if (hours) return L('{hours}h {minutes}m left', { hours, minutes })
      if (minutes) return L('{minutes}m left', { minutes })

      return L('Expired')
    },
    mapInvite ([id, {
      creatorID,
      expires: expiryTime,
      invitee,
      inviteSecret,
      initialQuantity,
      quantity,
      status
    }]) {
      const isAnyoneLink = creatorID === INVITE_INITIAL_CREATOR
      const isInviteExpired = expiryTime < Date.now()
      const isInviteRevoked = status === INVITE_STATUS.REVOKED
      const numberOfResponses = initialQuantity - quantity
      const isAllInviteUsed = (quantity === 0)

      return {
        id,
        isAnyoneLink,
        invitee: isAnyoneLink ? L('Anyone') : invitee,
        inviteSecret,
        inviteLink: buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, inviteSecret, isAnyoneLink ? undefined : this.ourIdentityContractId),
        description: this.inviteStatusDescription({
          isAnyoneLink, isInviteExpired, isInviteRevoked, isAllInviteUsed, quantity: initialQuantity, numberOfResponses
        }),
        expiryInfo: isInviteExpired ? L('Expired') : isInviteRevoked ? L('Revoked') : isAllInviteUsed ? '' : this.readableExpiryInfo(expiryTime),
        status: {
          isExpired: isInviteExpired,
          isActive: !isInviteExpired && !isInviteRevoked && !isAllInviteUsed,
          isRevoked: isInviteRevoked
        }
      }
    },
    showRevokeLinkMenu (inviteItem) {
      if (inviteItem.status.isActive) {
        if (inviteItem.isAnyoneLink) {
          // 'Anyone' link must only be revokable when the group size is >= 3 (context: https://github.com/okTurtles/group-income/issues/1670)
          return this.isUserGroupCreator && this.groupShouldPropose
        }
        return true
      }
      return false
    },
    handleInviteClick (e) {
      if (e.target.classList.contains('js-btnInvite')) {
        if (this.groupShouldPropose) {
          const contractID = this.currentGroupId
          sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID }).catch(e => {
            console.error(\`Error on action checkGroupSizeAndProposeMember (handleInviteClock) for \${contractID}\`, e)
          })
        } else {
          sbp('okTurtles.events/emit', OPEN_MODAL, 'InvitationLinkModal')
        }
      }
    },
    async handleSeeOriginal (/* { inviteSecret } */) {
      // TODO: Ricardo - please update this code so that it checks for inviteKeyId
      //       however, make sure that proposals actually have that on them
      //       (instead of, or in addition to, the inviteSecret).
      //       An alternative, is to grab the inviteSecret from currentGroupState.invites
      //       and on line 175 pass that in, and keep this code as-is
      //       Honestly this is fairly low priority because the proposal should be there
      //       and all this code ends up doing is bringing up the proposal modal anyway
      //       (instead of somehow linking directly to the proposal), so this is unnecessary
      //       complexity.
      await sbp('okTurtles.events/emit', OPEN_MODAL, 'PropositionsAllModal')
      /*
      const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
      const archivedProposals = await sbp('gi.db/archive/load', key) || []
      const proposalItemExists = archivedProposals.length > 0 || archivedProposals.some(entry => {
        const { data, payload } = entry[1]

        return data.proposalType === PROPOSAL_INVITE_MEMBER &&
          payload.inviteSecret === inviteSecret
      })

      if (proposalItemExists) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'PropositionsAllModal')
      } else {
        alert(L('Unable to find the original proposal.'))
      }
      */
    },
    async handleRevokeClick (inviteKeyId) {
      const yesSelected = await sbp('gi.ui/prompt', {
        heading: L('Revoke invite link'),
        question: L('Are you sure you want to revoke this link?{br_}This action cannot be undone.', LTags()),
        primaryButton: L('Yes'),
        secondaryButton: L('Cancel')
      })

      if (!yesSelected) {
        return null
      }

      try {
        this.ephemeral.inviteRevokedNow = inviteKeyId
        await sbp('gi.actions/group/inviteRevoke', {
          data: { inviteKeyId },
          contractID: this.currentGroupId
        })
        setTimeout(() => {
          this.ephemeral.inviteRevokedNow = null
        }, 2000)
      } catch (e) {
        this.ephemeral.inviteRevokedNow = null
        console.error('InvitationsTable.vue handleRevokeClick() error:', e)
        this.$refs.inviteError.danger(e.message)
      }
    }
  },
  mounted () {
    this.matchMediaMobile = window.matchMedia('screen and (max-width: 769px)')
    this.ephemeral.isMobile = this.matchMediaMobile.matches
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches
    }
  },
  beforeDestroy () {
    this.matchMediaMobile.onchange = null
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-section {
  position: relative;
}

.c-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-invite-description {
  margin: 0.5rem 0;
}

.c-table {
  table-layout: fixed;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  tr {
    display: grid;
    grid-template-columns: 28.4% 36.1% 23.7% auto;
    grid-template-areas: "name invite-link state action";
  }

  @include phone {
    thead tr {
      grid-template-columns: 81% auto;
      grid-template-areas: "name invite-link";
    }

    tbody tr {
      grid-template-columns: 81% auto;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "name invite-link"
        "state invite-link";
    }
  }

  th,
  td {
    display: flex;
    align-items: center;
  }

  .c-name {
    grid-area: name;
    padding-right: 1.5rem;
    line-height: 1.3125rem;
    align-items: center;

    .c-tip {
      margin-left: $size_4 * 0.5;
      line-height: 1.3125rem;
    }
  }

  .c-invite-link {
    position: relative;
    grid-area: invite-link;
    padding-right: 1.5rem;

    &-wrapper {
      display: inherit;
      align-items: inherit;
      width: 100%;
    }

    @include phone {
      justify-content: flex-end;
      padding-right: 0.5rem;

      &-wrapper {
        display: none;
      }
    }
  }

  th.c-invite-link {
    @include phone {
      white-space: nowrap;
      opacity: 0;
    }
  }

  .c-state {
    grid-area: state;
    padding-right: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .c-state-expire {
      line-height: $size_3;
      font-size: $size_5;
      color: $text-1;

      &.is-danger {
        color: $danger_0;
      }
    }

    @include phone {
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;
      padding-left: 1rem;
    }
  }

  th.c-state {
    @include phone {
      display: none;
    }
  }

  td.c-state .c-state-expire {
    @include phone {
      &::before {
        content: "\\00b7";
        display: inline-block;
        color: $text_0;
        padding: 0 0.25rem;
      }
    }
  }

  .c-action {
    grid-area: action;
    justify-content: flex-end;

    .c-invite-action-button {
      margin-right: 0.5rem;
    }

    @include until($tablet) {
      display: none;
    }
  }

  .c-dropdown-action,
  .c-dropdown-invite-link {
    width: max-content;
    transform: translateX(-100%);
  }

  .c-dropdown-action {
    min-width: 13.375rem;
    margin: 3.5rem 0 0 3rem;
  }

  .c-dropdown-invite-link {
    min-width: 8.5rem;
    margin-top: 2rem;
    right: unset;
    left: 2rem;
    top: 0.5rem;
  }

  .c-webshare-fallback {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    z-index: $zindex-tooltip;
  }
}

.c-empty-list {
  margin: 1.5rem 0;
  text-align: center;
}

.c-name-tooltip {
  text-align: center;
}

.c-active-button {
  .c-arrow {
    margin-right: 0;
  }
}

.c-invisible-input {
  position: absolute;
  pointer-events: none;
  opacity: 0;
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-4c94c8ae";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
page-section.c-section(:title='L("Invite links")')
  template(#cta='')
    label.selectsolo(:class='{ focus: ephemeral.selectbox.focused }')
      i18n.sr-only Filter links
      select.select(
        ref='select'
        v-model='ephemeral.selectbox.selectedOption'
        @change='unfocusSelect'
      )
        option(value='Active') {{ L('Active links') }}
        option(value='All') {{ L('All links') }}

  i18n.has-text-1.c-invite-description(tag='p') Here's a list of all invite links you own

  banner-scoped(ref='inviteError' data-test='inviteError')

  table.table.table-in-card.c-table(v-if='invitesToShow && invitesToShow.length !== 0')
    thead
      tr
        i18n.c-name(tag='th') created for
        i18n.c-invite-link(tag='th') invite link
        i18n.c-state(tag='th') state
        th.c-action(
          :aria-label='L("action")'
        )
    transition-group(name='slidedown' tag='tbody')
      tr(
        v-for='(item, index) in invitesToShow'
        :key='index'
      )
        td.c-name
          | {{ item.invitee }}
          tooltip.c-name-tooltip(
            v-if='item.isAnyoneLink'
            :direction='ephemeral.isMobile ? "right" : "top"'
            :isTextCenter='true'
            :anchorToElement='true'
            :text='L("Anyone with this link can join the group.")'
          )
            .button.is-icon-smaller.is-primary.c-tip
              i.icon-info
        td.c-invite-link
          link-to-copy.c-invite-link-wrapper(:link='item.inviteLink')

          menu-parent.c-invite-link-options-mobile.hide-tablet
            menu-trigger.is-icon-small
              i.icon-ellipsis-v
            menu-content.c-dropdown-invite-link
              ul
                menu-item(
                  v-if='!item.isAnyoneLink'
                  tag='button'
                  item-id='original'
                  @click='handleSeeOriginal(item)'
                  icon='check-to-slot'
                )
                  i18n See original proposal
                menu-item(
                  tag='button'
                  icon='link'
                  @click='copyInviteLink(item.inviteLink)'
                )
                  i18n Copy link
                menu-item(
                  v-if='showRevokeLinkMenu(item)'
                  tag='button'
                  item-id='revoke'
                  icon='times'
                  @click.stop='handleRevokeClick(item.id)'
                )
                  i18n Revoke Link
        td.c-state
          span.c-state-description {{ item.description }}
          span.c-state-expire(
            v-if='item.expiryInfo'
            :class='{ "is-danger": item.status.isExpired || item.status.isRevoked }'
          ) {{ item.expiryInfo }}
        td.c-action
          menu-parent(v-if='showRevokeLinkMenu(item)')
            menu-trigger.is-icon(:aria-label='L("Show list")')
              i.icon-ellipsis-v

            menu-content.c-dropdown-action
              ul
                menu-item(
                  v-if='!item.isAnyoneLink'
                  tag='button'
                  item-id='original'
                  @click='handleSeeOriginal(item)'
                  icon='check-to-slot'
                )
                  i18n See original proposal
                menu-item(
                  v-if='item.status.isActive'
                  tag='button'
                  item-id='revoke'
                  icon='times'
                  @click.stop='handleRevokeClick(item.id)'
                )
                  i18n Revoke Link

  .c-empty-list(v-else)
    SvgInvitation

  i18n.c-invite-footer(
    tag='p'
    @click='handleInviteClick'
    :args='{ r1: \`<button class="link js-btnInvite">\`, r2: "</button>"}'
  ) To generate a new link, you need to {r1}propose adding a new member{r2} to your group.

  input.c-invisible-input(
    type='text'
    ref='copyInput'
  )
</template>

<script>
import sbp from '@sbp/sbp'
import { MenuParent, MenuTrigger, MenuContent, MenuItem } from '../../../../frontend/views/components/menu/index.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import PageSection from '../../../../frontend/views/components/PageSection.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import SvgInvitation from '../../../../frontend/assets/svgs/invitation.svg'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import { INVITE_STATUS } from '@chelonia/lib/constants'
import { INVITE_INITIAL_CREATOR } from '../../../../frontend/model/contracts/shared/constants.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters, mapState } from 'vuex'
import { L, LTags } from '../../../../frontend/common/common.js'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { timeLeft } from '../../../../frontend/views/utils/time.js'

export default ({
  name: 'InvitationsTable',
  components: {
    BannerScoped,
    PageSection,
    SvgInvitation,
    Tooltip,
    LinkToCopy,
    MenuParent,
    MenuTrigger,
    MenuContent,
    MenuItem
  },
  data () {
    return {
      ephemeral: {
        selectbox: {
          focused: false,
          selectedOption: 'Active'
        },
        // keep invite in "Active" list for a few seconds after being revoked
        inviteRevokedNow: null,
        isMobile: false
      },
      matchMediaMobile: null
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupState',
      'ourIdentityContractId',
      'ourUserDisplayName',
      'currentGroupOwnerID',
      'currentWelcomeInvite',
      'groupShouldPropose'
    ]),
    ...mapState([
      'currentGroupId'
    ]),
    invitesToShow () {
      const vmInvites = this.currentGroupState._vm?.invites
      if (!vmInvites) { return [] }

      const invites = this.currentGroupState.invites || {}

      const invitesList = Object.entries(vmInvites)
        .map(([id, invite]) => [id, { ...invite, creatorID: invites[id]?.creatorID, invitee: invites[id]?.invitee }])
        .filter(([, invite]) => invite.creatorID === INVITE_INITIAL_CREATOR || invite.creatorID === this.ourIdentityContractId)
        .map(this.mapInvite)

      const options = {
        Active: () => invitesList.filter(invite => invite.status.isActive || (invite.status.isRevoked && invite.id === this.ephemeral.inviteRevokedNow)),
        All: () => invitesList
      }

      return options[this.ephemeral.selectbox.selectedOption]()
    },
    isUserGroupCreator () {
      return this.ourIdentityContractId === this.currentGroupOwnerID
    }
  },
  methods: {
    unfocusSelect () {
      this.$refs.select.blur()
    },
    copyInviteLink (inviteLink) {
      const copyToClipBoard = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(inviteLink)
        } else {
          const inputAid = this.$refs.copyInput

          inputAid.value = inviteLink
          inputAid.select()

          this.$nextTick(() => {
            document.execCommand('copy')
            inputAid.blur()
          })
        }
      }

      if (navigator.share) {
        navigator.share({
          title: L('Your invite'),
          url: inviteLink
        }).catch((error) => {
          console.error('navigator.share failed with:', error)
          copyToClipBoard()
        })

        return
      }

      copyToClipBoard()
    },
    inviteStatusDescription ({
      isAnyoneLink,
      isInviteExpired,
      isInviteRevoked,
      isAllInviteUsed,
      quantity,
      numberOfResponses
    }) {
      if (isAnyoneLink) return L('{numberOfResponses}/{quantity} used', { numberOfResponses, quantity })
      else if (isAllInviteUsed) return L('Used')
      else if (isInviteRevoked) return L('Not used')
      else return isInviteExpired || isInviteRevoked ? L('Not used') : L('Not used yet')
    },
    readableExpiryInfo (expiryTime) {
      if (expiryTime == null) return L("Doesn't expire")
      const { expired, years, months, days, hours, minutes } = timeLeft(expiryTime)
      if (expired) return L('Expired')

      // In the cases when displaying years/months, count the remainer hours/mins as +1 day eg) 3days 15hrs 25mins -> 4days.
      if (years) return L('{years}y {months}mo {days}d left', { years, months, days: days + ((hours || minutes) ? 1 : 0) })
      if (months) return L('{months}mo {days}d left', { months, days: days + ((hours || minutes) ? 1 : 0) })

      if (days) return L('{days}d {hours}h {minutes}m left', { days, hours, minutes })
      if (hours) return L('{hours}h {minutes}m left', { hours, minutes })
      if (minutes) return L('{minutes}m left', { minutes })

      return L('Expired')
    },
    mapInvite ([id, {
      creatorID,
      expires: expiryTime,
      invitee,
      inviteSecret,
      initialQuantity,
      quantity,
      status
    }]) {
      const isAnyoneLink = creatorID === INVITE_INITIAL_CREATOR
      const isInviteExpired = expiryTime < Date.now()
      const isInviteRevoked = status === INVITE_STATUS.REVOKED
      const numberOfResponses = initialQuantity - quantity
      const isAllInviteUsed = (quantity === 0)

      return {
        id,
        isAnyoneLink,
        invitee: isAnyoneLink ? L('Anyone') : invitee,
        inviteSecret,
        inviteLink: buildInvitationUrl(this.currentGroupId, this.currentGroupState.settings?.groupName, inviteSecret, isAnyoneLink ? undefined : this.ourIdentityContractId),
        description: this.inviteStatusDescription({
          isAnyoneLink, isInviteExpired, isInviteRevoked, isAllInviteUsed, quantity: initialQuantity, numberOfResponses
        }),
        expiryInfo: isInviteExpired ? L('Expired') : isInviteRevoked ? L('Revoked') : isAllInviteUsed ? '' : this.readableExpiryInfo(expiryTime),
        status: {
          isExpired: isInviteExpired,
          isActive: !isInviteExpired && !isInviteRevoked && !isAllInviteUsed,
          isRevoked: isInviteRevoked
        }
      }
    },
    showRevokeLinkMenu (inviteItem) {
      if (inviteItem.status.isActive) {
        if (inviteItem.isAnyoneLink) {
          // 'Anyone' link must only be revokable when the group size is >= 3 (context: https://github.com/okTurtles/group-income/issues/1670)
          return this.isUserGroupCreator && this.groupShouldPropose
        }
        return true
      }
      return false
    },
    handleInviteClick (e) {
      if (e.target.classList.contains('js-btnInvite')) {
        if (this.groupShouldPropose) {
          const contractID = this.currentGroupId
          sbp('gi.app/group/checkGroupSizeAndProposeMember', { contractID }).catch(e => {
            console.error(\`Error on action checkGroupSizeAndProposeMember (handleInviteClock) for \${contractID}\`, e)
          })
        } else {
          sbp('okTurtles.events/emit', OPEN_MODAL, 'InvitationLinkModal')
        }
      }
    },
    async handleSeeOriginal (/* { inviteSecret } */) {
      // TODO: Ricardo - please update this code so that it checks for inviteKeyId
      //       however, make sure that proposals actually have that on them
      //       (instead of, or in addition to, the inviteSecret).
      //       An alternative, is to grab the inviteSecret from currentGroupState.invites
      //       and on line 175 pass that in, and keep this code as-is
      //       Honestly this is fairly low priority because the proposal should be there
      //       and all this code ends up doing is bringing up the proposal modal anyway
      //       (instead of somehow linking directly to the proposal), so this is unnecessary
      //       complexity.
      await sbp('okTurtles.events/emit', OPEN_MODAL, 'PropositionsAllModal')
      /*
      const key = \`proposals/\${this.ourIdentityContractId}/\${this.currentGroupId}\`
      const archivedProposals = await sbp('gi.db/archive/load', key) || []
      const proposalItemExists = archivedProposals.length > 0 || archivedProposals.some(entry => {
        const { data, payload } = entry[1]

        return data.proposalType === PROPOSAL_INVITE_MEMBER &&
          payload.inviteSecret === inviteSecret
      })

      if (proposalItemExists) {
        sbp('okTurtles.events/emit', OPEN_MODAL, 'PropositionsAllModal')
      } else {
        alert(L('Unable to find the original proposal.'))
      }
      */
    },
    async handleRevokeClick (inviteKeyId) {
      const yesSelected = await sbp('gi.ui/prompt', {
        heading: L('Revoke invite link'),
        question: L('Are you sure you want to revoke this link?{br_}This action cannot be undone.', LTags()),
        primaryButton: L('Yes'),
        secondaryButton: L('Cancel')
      })

      if (!yesSelected) {
        return null
      }

      try {
        this.ephemeral.inviteRevokedNow = inviteKeyId
        await sbp('gi.actions/group/inviteRevoke', {
          data: { inviteKeyId },
          contractID: this.currentGroupId
        })
        setTimeout(() => {
          this.ephemeral.inviteRevokedNow = null
        }, 2000)
      } catch (e) {
        this.ephemeral.inviteRevokedNow = null
        console.error('InvitationsTable.vue handleRevokeClick() error:', e)
        this.$refs.inviteError.danger(e.message)
      }
    }
  },
  mounted () {
    this.matchMediaMobile = window.matchMedia('screen and (max-width: 769px)')
    this.ephemeral.isMobile = this.matchMediaMobile.matches
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches
    }
  },
  beforeDestroy () {
    this.matchMediaMobile.onchange = null
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-section {
  position: relative;
}

.c-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-invite-description {
  margin: 0.5rem 0;
}

.c-table {
  table-layout: fixed;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  tr {
    display: grid;
    grid-template-columns: 28.4% 36.1% 23.7% auto;
    grid-template-areas: "name invite-link state action";
  }

  @include phone {
    thead tr {
      grid-template-columns: 81% auto;
      grid-template-areas: "name invite-link";
    }

    tbody tr {
      grid-template-columns: 81% auto;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "name invite-link"
        "state invite-link";
    }
  }

  th,
  td {
    display: flex;
    align-items: center;
  }

  .c-name {
    grid-area: name;
    padding-right: 1.5rem;
    line-height: 1.3125rem;
    align-items: center;

    .c-tip {
      margin-left: $size_4 * 0.5;
      line-height: 1.3125rem;
    }
  }

  .c-invite-link {
    position: relative;
    grid-area: invite-link;
    padding-right: 1.5rem;

    &-wrapper {
      display: inherit;
      align-items: inherit;
      width: 100%;
    }

    @include phone {
      justify-content: flex-end;
      padding-right: 0.5rem;

      &-wrapper {
        display: none;
      }
    }
  }

  th.c-invite-link {
    @include phone {
      white-space: nowrap;
      opacity: 0;
    }
  }

  .c-state {
    grid-area: state;
    padding-right: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .c-state-expire {
      line-height: $size_3;
      font-size: $size_5;
      color: $text-1;

      &.is-danger {
        color: $danger_0;
      }
    }

    @include phone {
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;
      padding-left: 1rem;
    }
  }

  th.c-state {
    @include phone {
      display: none;
    }
  }

  td.c-state .c-state-expire {
    @include phone {
      &::before {
        content: "\\00b7";
        display: inline-block;
        color: $text_0;
        padding: 0 0.25rem;
      }
    }
  }

  .c-action {
    grid-area: action;
    justify-content: flex-end;

    .c-invite-action-button {
      margin-right: 0.5rem;
    }

    @include until($tablet) {
      display: none;
    }
  }

  .c-dropdown-action,
  .c-dropdown-invite-link {
    width: max-content;
    transform: translateX(-100%);
  }

  .c-dropdown-action {
    min-width: 13.375rem;
    margin: 3.5rem 0 0 3rem;
  }

  .c-dropdown-invite-link {
    min-width: 8.5rem;
    margin-top: 2rem;
    right: unset;
    left: 2rem;
    top: 0.5rem;
  }

  .c-webshare-fallback {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    z-index: $zindex-tooltip;
  }
}

.c-empty-list {
  margin: 1.5rem 0;
  text-align: center;
}

.c-name-tooltip {
  text-align: center;
}

.c-active-button {
  .c-arrow {
    margin-right: 0;
  }
}

.c-invisible-input {
  position: absolute;
  pointer-events: none;
  opacity: 0;
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
var InvitationsTable_default = __vue_component__;

// frontend/views/containers/group-settings/roles-and-permissions/PermissionActionMenu.vue
var __vue_script__2 = {
  name: "PermissionActionMenu",
  inject: ["permissionsUtils"],
  components: {
    MenuParent: MenuParent_default,
    MenuContent: MenuContent_default,
    MenuTrigger: MenuTrigger_default,
    MenuItem: MenuItem_default
  },
  computed: {
    menuOptions() {
      const list = [
        {
          id: "edit",
          label: L("Edit permissions"),
          icon: "edit",
          enabled: () => this.permissionsUtils.canDelegatePermissions
        },
        {
          id: "remove",
          label: L("Remove"),
          icon: "trash-alt",
          enabled: () => this.permissionsUtils.canDelegatePermissions
        }
      ];
      return list.filter((entry) => entry.enabled());
    }
  },
  methods: {
    onMenuSelect(itemId) {
      alert(L("Coming soon"));
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.menuOptions.length ? _c(
    "menu-parent",
    {
      staticClass: "c-permission-action-menu",
      on: { select: _vm.onMenuSelect }
    },
    [
      _c(
        "menu-trigger",
        {
          staticClass: "is-icon-small c-trigger-btn",
          attrs: { "aria-label": _vm.L("Open permission action menu") }
        },
        [_c("i", { staticClass: "icon-ellipsis-v" })]
      ),
      _c("menu-content", { staticClass: "c-menu-content" }, [
        _c(
          "ul",
          _vm._l(_vm.menuOptions, function(option) {
            return _c(
              "menu-item",
              {
                key: option.id,
                staticClass: "c-menu-item",
                attrs: {
                  tag: "button",
                  "item-id": option.id,
                  icon: option.icon
                }
              },
              [_vm._v(_vm._s(option.label))]
            );
          }),
          1
        )
      ])
    ],
    1
  ) : _vm._e();
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-216e2792_0", { source: ".c-permission-action-menu[data-v-216e2792] {\n  position: relative;\n  width: max-content;\n}\n.c-permission-action-menu .c-menu-content[data-v-216e2792] {\n  max-width: 16rem;\n  width: max-content;\n  top: 100%;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  left: unset;\n  right: 0;\n}\n\n/*# sourceMappingURL=PermissionActionMenu.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/roles-and-permissions/PermissionActionMenu.vue", "PermissionActionMenu.vue"], "names": [], "mappings": "AA+DA;EACA,kBAAA;EACA,kBAAA;AC9DA;ADgEA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;AC9DA;;AAEA,mDAAmD", "file": "PermissionActionMenu.vue", "sourcesContent": [`<template lang='pug'>
menu-parent.c-permission-action-menu(
  v-if='menuOptions.length'
  @select='onMenuSelect'
)
  menu-trigger.is-icon-small.c-trigger-btn(:aria-label='L("Open permission action menu")')
    i.icon-ellipsis-v

  menu-content.c-menu-content
    ul
      menu-item.c-menu-item(
        v-for='option in menuOptions'
        tag='button'
        :key='option.id'
        :item-id='option.id'
        :icon='option.icon'
      ) {{ option.label }}
</template>

<script>
import { L } from '../../../../../frontend/common/common.js'
import { MenuParent, MenuContent, MenuTrigger, MenuItem } from '../../../../../frontend/views/components/menu'

export default {
  name: 'PermissionActionMenu',
  inject: ['permissionsUtils'],
  components: {
    MenuParent,
    MenuContent,
    MenuTrigger,
    MenuItem
  },
  computed: {
    menuOptions () {
      const list = [
        {
          id: 'edit',
          label: L('Edit permissions'),
          icon: 'edit',
          enabled: () => this.permissionsUtils.canDelegatePermissions
        },
        {
          id: 'remove',
          label: L('Remove'),
          icon: 'trash-alt',
          enabled: () => this.permissionsUtils.canDelegatePermissions
        }
      ]

      return list.filter(entry => entry.enabled())
    }
  },
  methods: {
    onMenuSelect (itemId) {
      alert(L('Coming soon'))
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-permission-action-menu {
  position: relative;
  width: max-content;

  .c-menu-content {
    max-width: 16rem;
    width: max-content;
    top: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    left: unset;
    right: 0;
  }
}
</style>
`, ".c-permission-action-menu {\n  position: relative;\n  width: max-content;\n}\n.c-permission-action-menu .c-menu-content {\n  max-width: 16rem;\n  width: max-content;\n  top: 100%;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  left: unset;\n  right: 0;\n}\n\n/*# sourceMappingURL=PermissionActionMenu.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-216e2792";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
menu-parent.c-permission-action-menu(
  v-if='menuOptions.length'
  @select='onMenuSelect'
)
  menu-trigger.is-icon-small.c-trigger-btn(:aria-label='L("Open permission action menu")')
    i.icon-ellipsis-v

  menu-content.c-menu-content
    ul
      menu-item.c-menu-item(
        v-for='option in menuOptions'
        tag='button'
        :key='option.id'
        :item-id='option.id'
        :icon='option.icon'
      ) {{ option.label }}
</template>

<script>
import { L } from '../../../../../frontend/common/common.js'
import { MenuParent, MenuContent, MenuTrigger, MenuItem } from '../../../../../frontend/views/components/menu'

export default {
  name: 'PermissionActionMenu',
  inject: ['permissionsUtils'],
  components: {
    MenuParent,
    MenuContent,
    MenuTrigger,
    MenuItem
  },
  computed: {
    menuOptions () {
      const list = [
        {
          id: 'edit',
          label: L('Edit permissions'),
          icon: 'edit',
          enabled: () => this.permissionsUtils.canDelegatePermissions
        },
        {
          id: 'remove',
          label: L('Remove'),
          icon: 'trash-alt',
          enabled: () => this.permissionsUtils.canDelegatePermissions
        }
      ]

      return list.filter(entry => entry.enabled())
    }
  },
  methods: {
    onMenuSelect (itemId) {
      alert(L('Coming soon'))
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-permission-action-menu {
  position: relative;
  width: max-content;

  .c-menu-content {
    max-width: 16rem;
    width: max-content;
    top: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    left: unset;
    right: 0;
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
var PermissionActionMenu_default = __vue_component__2;

// frontend/views/containers/group-settings/roles-and-permissions/permissions-utils.js
var GROUP_ROLES_DISPLAY_NAME = {
  [GROUP_ROLES.ADMIN]: L("Admin"),
  [GROUP_ROLES.MODERATOR]: L("Moderator"),
  [GROUP_ROLES.MODERATOR_DELEGATOR]: L("Moderator (Delegator)"),
  [GROUP_ROLES.CUSTOM]: L("Custom")
};
var GROUP_PERIMSSIONS_DISPLAY_NAME = {
  [GROUP_PERMISSIONS.VIEW_PERMISSIONS]: L("View permissions"),
  [GROUP_PERMISSIONS.ASSIGN_DELEGATOR]: L("Assign delegator"),
  [GROUP_PERMISSIONS.DELEGATE_PERMISSIONS]: L("Delegate permissions"),
  [GROUP_PERMISSIONS.REMOVE_MEMBER]: L("Remove member"),
  [GROUP_PERMISSIONS.REVOKE_INVITE]: L("Revoke invites"),
  [GROUP_PERMISSIONS.DELETE_CHANNEL]: L("Delete channels")
};
function getPermissionDisplayName(permissionId) {
  return GROUP_PERIMSSIONS_DISPLAY_NAME[permissionId];
}
function getRoleDisplayName(roleId) {
  return GROUP_ROLES_DISPLAY_NAME[roleId];
}

// frontend/views/containers/group-settings/roles-and-permissions/ViewPermissions.vue
var import_vue_clickaway = __toESM(require_vue_clickaway_common());
var __vue_script__3 = {
  name: "ViewPermissions",
  components: {
    ModalClose: ModalClose_default
  },
  mixins: [import_vue_clickaway.mixin],
  data() {
    return {
      ephemeral: {
        isTooltipActive: false
      }
    };
  },
  props: {
    permissions: {
      type: Array
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    permissionsNo() {
      return this.permissions?.length || 0;
    },
    displayText() {
      const p = this.permissions || [];
      const len = p.length;
      return len === 1 ? `- '${getPermissionDisplayName(p[0])}'` : len > 1 ? L("'{first}' and {restCount} more", { first: getPermissionDisplayName(p[0]), restCount: len - 1 }) : "";
    }
  },
  methods: {
    getPermissionDisplayName,
    openTooltip() {
      this.ephemeral.isTooltipActive = true;
    },
    closeTooltip() {
      this.ephemeral.isTooltipActive = false;
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-permissions-wrapper",
      class: { "is-mobile": _vm.isMobile }
    },
    [
      _c("span", { staticClass: "c-display-text has-text-1" }, [
        _vm._v(_vm._s(_vm.displayText))
      ]),
      _c(
        "div",
        {
          directives: [
            {
              name: "on-clickaway",
              rawName: "v-on-clickaway",
              value: _vm.closeTooltip,
              expression: "closeTooltip"
            }
          ],
          staticClass: "c-see-all-wrapper"
        },
        [
          _vm.permissionsNo > 1 ? _c(
            "i18n",
            {
              staticClass: "link c-see-all",
              attrs: { tag: "button" },
              on: { click: _vm.openTooltip }
            },
            [_vm._v("See all")]
          ) : _vm._e(),
          _c(
            "div",
            {
              staticClass: "c-permissions-tooltip",
              class: { "is-active": _vm.ephemeral.isTooltipActive }
            },
            [
              _c("div", {
                staticClass: "c-permissions-tooltip-overlay",
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.closeTooltip($event);
                  }
                }
              }),
              _c("div", { staticClass: "c-permissions-tooltip-content" }, [
                _c(
                  "header",
                  { staticClass: "c-permissions-tooltip-header" },
                  [
                    _c(
                      "i18n",
                      {
                        staticClass: "c-tooltip-title",
                        attrs: { tag: "h2", args: { no: _vm.permissionsNo } }
                      },
                      [_vm._v("{no} permissions")]
                    ),
                    _c("modal-close", {
                      staticClass: "c-permissions-close-btn",
                      attrs: { "data-test": "closeViewPermission" },
                      on: { close: _vm.closeTooltip }
                    })
                  ],
                  1
                ),
                _c(
                  "ul",
                  { staticClass: "c-permissions-list" },
                  _vm._l(_vm.permissions, function(permissionId) {
                    return _c(
                      "li",
                      { key: permissionId, staticClass: "c-permission-item" },
                      [
                        _c("span", { staticClass: "c-permission-name" }, [
                          _vm._v(
                            _vm._s(
                              "- " + _vm.getPermissionDisplayName(permissionId)
                            )
                          )
                        ])
                      ]
                    );
                  }),
                  0
                )
              ])
            ]
          )
        ],
        1
      )
    ]
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-09d8d966_0", { source: ".c-permissions-wrapper[data-v-09d8d966] {\n  position: relative;\n  padding: 0.75rem 0.5rem 0.75rem 0;\n}\n.c-permissions-wrapper.is-mobile[data-v-09d8d966] {\n  padding: 0;\n}\n.c-display-text[data-v-09d8d966] {\n  font-size: 0.875rem;\n}\n.c-see-all-wrapper[data-v-09d8d966] {\n  position: relative;\n  display: inline-flex;\n  margin-left: 0.25rem;\n  width: max-content;\n}\n.c-see-all[data-v-09d8d966] {\n  display: inline-block;\n}\n.c-permissions-tooltip[data-v-09d8d966] {\n  position: absolute;\n  display: block;\n  bottom: -0.5rem;\n  transform: translateY(100%);\n  right: 0;\n  width: max-content;\n  min-width: 10.75rem;\n  max-width: 14rem;\n  padding: 1rem;\n  z-index: 50;\n  background-color: var(--background_0);\n  border-radius: 10px;\n  opacity: 0;\n  height: 0;\n  pointer-events: none;\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n}\n.is-dark-theme .c-permissions-tooltip[data-v-09d8d966] {\n  box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);\n}\n.c-permissions-tooltip.is-active[data-v-09d8d966] {\n  opacity: 1;\n  height: max-content;\n  transition: opacity 200ms ease-out;\n  pointer-events: initial;\n}\n.c-permissions-tooltip-header[data-v-09d8d966] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n.c-permissions-tooltip .c-tooltip-title[data-v-09d8d966] {\n  font-size: 0.925rem;\n  font-weight: 700;\n}\n.c-permissions-tooltip-content[data-v-09d8d966] {\n  border-radius: 10px;\n}\n.c-permissions-tooltip .c-permissions-list[data-v-09d8d966] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n.c-permissions-tooltip .c-permission-item[data-v-09d8d966]:not(:last-child) {\n  margin-bottom: 0.2rem;\n}\n.c-permissions-tooltip .c-permission-name[data-v-09d8d966] {\n  background-color: var(--general_1_opacity_6);\n  padding: 0.125rem 0.25rem;\n  border-radius: 4px;\n  line-height: 1.175;\n  display: inline-block;\n}\nbutton.c-permissions-close-btn[data-v-09d8d966] {\n  position: relative;\n  top: unset;\n  right: unset;\n  left: unset;\n  width: 1.5rem;\n  height: 1.5rem;\n  min-height: unset;\n  flex-shrink: 0;\n}\nbutton.c-permissions-close-btn[data-v-09d8d966]::before, button.c-permissions-close-btn[data-v-09d8d966]::after {\n  width: 0.625rem;\n}\n\n/*# sourceMappingURL=ViewPermissions.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/roles-and-permissions/ViewPermissions.vue", "ViewPermissions.vue"], "names": [], "mappings": "AAgGA;EACA,kBAAA;EACA,iCAAA;AC/FA;ADiGA;EACA,UAAA;AC/FA;ADmGA;EACA,mBAAA;AChGA;ADmGA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;AChGA;ADmGA;EACA,qBAAA;AChGA;ADmGA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,2BAAA;EACA,QAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,qCAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;EACA,kDAAA;AChGA;ADkGA;EACA,oDAAA;AChGA;ADmGA;EACA,UAAA;EACA,mBAAA;EACA,kCAAA;EACA,uBAAA;ACjGA;ADoGA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;AClGA;ADqGA;EACA,mBAAA;EACA,gBAAA;ACnGA;ADsGA;EACA,mBAAA;ACpGA;ADuGA;EACA,kBAAA;EACA,mBAAA;ACrGA;ADwGA;EACA,qBAAA;ACtGA;ADyGA;EACA,4CAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;ACvGA;AD2GA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;ACxGA;AD0GA;EAEA,eAAA;ACzGA;;AAEA,8CAA8C", "file": "ViewPermissions.vue", "sourcesContent": [`<template lang="pug">
.c-permissions-wrapper(:class='{ "is-mobile": isMobile }')
  span.c-display-text.has-text-1 {{ displayText }}

  .c-see-all-wrapper(
    v-on-clickaway='closeTooltip'
  )
    i18n.link.c-see-all(
      v-if='permissionsNo > 1'
      tag='button'
      @click='openTooltip'
    ) See all

    .c-permissions-tooltip(
      :class='{ "is-active": ephemeral.isTooltipActive }'
    )
      .c-permissions-tooltip-overlay(@click.stop='closeTooltip')

      .c-permissions-tooltip-content
        header.c-permissions-tooltip-header
          i18n.c-tooltip-title(
            tag='h2'
            :args='{ no: permissionsNo }'
          ) {no} permissions

          modal-close.c-permissions-close-btn(
            @close='closeTooltip'
            data-test='closeViewPermission'
          )

        ul.c-permissions-list
          li.c-permission-item(
            v-for='permissionId in permissions'
            :key='permissionId'
          )
            span.c-permission-name {{ \`- \${getPermissionDisplayName(permissionId)}\` }}
</template>

<script>
import { L } from '../../../../../frontend/common/common.js'
import { getPermissionDisplayName } from './permissions-utils.js'
import { mixin as clickaway } from 'vue-clickaway'
import ModalClose from '../../../../../frontend/views/components/modal/ModalClose.vue'

export default {
  name: 'ViewPermissions',
  components: {
    ModalClose
  },
  mixins: [clickaway],
  data () {
    return {
      ephemeral: {
        isTooltipActive: false
      }
    }
  },
  props: {
    permissions: {
      type: Array
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    permissionsNo () {
      return this.permissions?.length || 0
    },
    displayText () {
      const p = this.permissions || []
      const len = p.length

      return len === 1
        ? \`- '\${getPermissionDisplayName(p[0])}'\`
        : len > 1
          ? L("'{first}' and {restCount} more", { first: getPermissionDisplayName(p[0]), restCount: len - 1 })
          : ''
    }
  },
  methods: {
    getPermissionDisplayName,
    openTooltip () {
      this.ephemeral.isTooltipActive = true
    },
    closeTooltip () {
      this.ephemeral.isTooltipActive = false
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-permissions-wrapper {
  position: relative;
  padding: 0.75rem 0.5rem 0.75rem 0;

  &.is-mobile {
    padding: 0;
  }
}

.c-display-text {
  font-size: $size_4;
}

.c-see-all-wrapper {
  position: relative;
  display: inline-flex;
  margin-left: 0.25rem;
  width: max-content;
}

.c-see-all {
  display: inline-block;
}

.c-permissions-tooltip {
  position: absolute;
  display: block;
  bottom: -0.5rem;
  transform: translateY(100%);
  right: 0;
  width: max-content;
  min-width: 10.75rem;
  max-width: 14rem;
  padding: 1rem;
  z-index: $zindex-tooltip;
  background-color: $background_0;
  border-radius: 10px;
  opacity: 0;
  height: 0;
  pointer-events: none;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);

  .is-dark-theme & {
    box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);
  }

  &.is-active {
    opacity: 1;
    height: max-content;
    transition: opacity 200ms ease-out;
    pointer-events: initial;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;
  }

  .c-tooltip-title {
    font-size: 0.925rem;
    font-weight: 700;
  }

  &-content {
    border-radius: 10px;
  }

  .c-permissions-list {
    margin-top: 0.5rem;
    font-size: $size_4;
  }

  .c-permission-item:not(:last-child) {
    margin-bottom: 0.2rem;
  }

  .c-permission-name {
    background-color: $general_1_opacity_6;
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    line-height: 1.175;
    display: inline-block;
  }
}

button.c-permissions-close-btn {
  position: relative;
  top: unset;
  right: unset;
  left: unset;
  width: 1.5rem;
  height: 1.5rem;
  min-height: unset;
  flex-shrink: 0;

  &::before,
  &::after {
    width: 0.625rem;
  }
}
</style>
`, ".c-permissions-wrapper {\n  position: relative;\n  padding: 0.75rem 0.5rem 0.75rem 0;\n}\n.c-permissions-wrapper.is-mobile {\n  padding: 0;\n}\n\n.c-display-text {\n  font-size: 0.875rem;\n}\n\n.c-see-all-wrapper {\n  position: relative;\n  display: inline-flex;\n  margin-left: 0.25rem;\n  width: max-content;\n}\n\n.c-see-all {\n  display: inline-block;\n}\n\n.c-permissions-tooltip {\n  position: absolute;\n  display: block;\n  bottom: -0.5rem;\n  transform: translateY(100%);\n  right: 0;\n  width: max-content;\n  min-width: 10.75rem;\n  max-width: 14rem;\n  padding: 1rem;\n  z-index: 50;\n  background-color: var(--background_0);\n  border-radius: 10px;\n  opacity: 0;\n  height: 0;\n  pointer-events: none;\n  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);\n}\n.is-dark-theme .c-permissions-tooltip {\n  box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);\n}\n.c-permissions-tooltip.is-active {\n  opacity: 1;\n  height: max-content;\n  transition: opacity 200ms ease-out;\n  pointer-events: initial;\n}\n.c-permissions-tooltip-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  column-gap: 0.5rem;\n}\n.c-permissions-tooltip .c-tooltip-title {\n  font-size: 0.925rem;\n  font-weight: 700;\n}\n.c-permissions-tooltip-content {\n  border-radius: 10px;\n}\n.c-permissions-tooltip .c-permissions-list {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n.c-permissions-tooltip .c-permission-item:not(:last-child) {\n  margin-bottom: 0.2rem;\n}\n.c-permissions-tooltip .c-permission-name {\n  background-color: var(--general_1_opacity_6);\n  padding: 0.125rem 0.25rem;\n  border-radius: 4px;\n  line-height: 1.175;\n  display: inline-block;\n}\n\nbutton.c-permissions-close-btn {\n  position: relative;\n  top: unset;\n  right: unset;\n  left: unset;\n  width: 1.5rem;\n  height: 1.5rem;\n  min-height: unset;\n  flex-shrink: 0;\n}\nbutton.c-permissions-close-btn::before, button.c-permissions-close-btn::after {\n  width: 0.625rem;\n}\n\n/*# sourceMappingURL=ViewPermissions.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-09d8d966";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-permissions-wrapper(:class='{ "is-mobile": isMobile }')
  span.c-display-text.has-text-1 {{ displayText }}

  .c-see-all-wrapper(
    v-on-clickaway='closeTooltip'
  )
    i18n.link.c-see-all(
      v-if='permissionsNo > 1'
      tag='button'
      @click='openTooltip'
    ) See all

    .c-permissions-tooltip(
      :class='{ "is-active": ephemeral.isTooltipActive }'
    )
      .c-permissions-tooltip-overlay(@click.stop='closeTooltip')

      .c-permissions-tooltip-content
        header.c-permissions-tooltip-header
          i18n.c-tooltip-title(
            tag='h2'
            :args='{ no: permissionsNo }'
          ) {no} permissions

          modal-close.c-permissions-close-btn(
            @close='closeTooltip'
            data-test='closeViewPermission'
          )

        ul.c-permissions-list
          li.c-permission-item(
            v-for='permissionId in permissions'
            :key='permissionId'
          )
            span.c-permission-name {{ \`- \${getPermissionDisplayName(permissionId)}\` }}
</template>

<script>
import { L } from '../../../../../frontend/common/common.js'
import { getPermissionDisplayName } from './permissions-utils.js'
import { mixin as clickaway } from 'vue-clickaway'
import ModalClose from '../../../../../frontend/views/components/modal/ModalClose.vue'

export default {
  name: 'ViewPermissions',
  components: {
    ModalClose
  },
  mixins: [clickaway],
  data () {
    return {
      ephemeral: {
        isTooltipActive: false
      }
    }
  },
  props: {
    permissions: {
      type: Array
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    permissionsNo () {
      return this.permissions?.length || 0
    },
    displayText () {
      const p = this.permissions || []
      const len = p.length

      return len === 1
        ? \`- '\${getPermissionDisplayName(p[0])}'\`
        : len > 1
          ? L("'{first}' and {restCount} more", { first: getPermissionDisplayName(p[0]), restCount: len - 1 })
          : ''
    }
  },
  methods: {
    getPermissionDisplayName,
    openTooltip () {
      this.ephemeral.isTooltipActive = true
    },
    closeTooltip () {
      this.ephemeral.isTooltipActive = false
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-permissions-wrapper {
  position: relative;
  padding: 0.75rem 0.5rem 0.75rem 0;

  &.is-mobile {
    padding: 0;
  }
}

.c-display-text {
  font-size: $size_4;
}

.c-see-all-wrapper {
  position: relative;
  display: inline-flex;
  margin-left: 0.25rem;
  width: max-content;
}

.c-see-all {
  display: inline-block;
}

.c-permissions-tooltip {
  position: absolute;
  display: block;
  bottom: -0.5rem;
  transform: translateY(100%);
  right: 0;
  width: max-content;
  min-width: 10.75rem;
  max-width: 14rem;
  padding: 1rem;
  z-index: $zindex-tooltip;
  background-color: $background_0;
  border-radius: 10px;
  opacity: 0;
  height: 0;
  pointer-events: none;
  box-shadow: 0 0.5rem 1.25rem rgba(54, 54, 54, 0.3);

  .is-dark-theme & {
    box-shadow: 0 0.5rem 1.25rem rgba(38, 38, 38, 0.895);
  }

  &.is-active {
    opacity: 1;
    height: max-content;
    transition: opacity 200ms ease-out;
    pointer-events: initial;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;
  }

  .c-tooltip-title {
    font-size: 0.925rem;
    font-weight: 700;
  }

  &-content {
    border-radius: 10px;
  }

  .c-permissions-list {
    margin-top: 0.5rem;
    font-size: $size_4;
  }

  .c-permission-item:not(:last-child) {
    margin-bottom: 0.2rem;
  }

  .c-permission-name {
    background-color: $general_1_opacity_6;
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    line-height: 1.175;
    display: inline-block;
  }
}

button.c-permissions-close-btn {
  position: relative;
  top: unset;
  right: unset;
  left: unset;
  width: 1.5rem;
  height: 1.5rem;
  min-height: unset;
  flex-shrink: 0;

  &::before,
  &::after {
    width: 0.625rem;
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
function __vue_create_injector__3() {
  const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var ViewPermissions_default = __vue_component__3;

// frontend/views/containers/group-settings/roles-and-permissions/PermissionTableRow.vue
var __vue_script__4 = {
  name: "PermissionTableRow",
  components: {
    Avatar: Avatar_default,
    ViewPermissions: ViewPermissions_default,
    PermissionActionMenu: PermissionActionMenu_default
  },
  props: {
    data: {
      type: Object
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pillClasses() {
      if (!this.data?.role) {
        return "";
      }
      return {
        [GROUP_ROLES.ADMIN]: "is-success",
        [GROUP_ROLES.MODERATOR_DELEGATOR]: "is-primary",
        [GROUP_ROLES.MODERATOR]: "is-neutral",
        [GROUP_ROLES.CUSTOM]: "is-warning"
      }[this.data.role];
    }
  },
  methods: {
    getRoleDisplayName,
    getPermissionDisplayName
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tr",
    {
      staticClass: "c-permission-table-row",
      class: { "is-mobile": _vm.isMobile }
    },
    [
      _c("td", { staticClass: "td-user" }, [
        _c(
          "div",
          { staticClass: "c-user-wrapper" },
          [
            _c("avatar", {
              staticClass: "c-avatar",
              attrs: {
                src: "/assets/images/user-avatar-default.png",
                size: "xs"
              }
            }),
            _vm.isMobile ? _c("div", { staticClass: "c-name-and-role-mobile" }, [
              _c("strong", { staticClass: "c-name has-ellipsis" }, [
                _vm._v(_vm._s(_vm.data.username))
              ]),
              _c("div", { staticClass: "c-pill-container" }, [
                _c(
                  "span",
                  {
                    staticClass: "pill c-role-pill",
                    class: _vm.pillClasses
                  },
                  [_vm._v(_vm._s(_vm.getRoleDisplayName(_vm.data.role)))]
                )
              ])
            ]) : _c("strong", { staticClass: "c-name has-ellipsis" }, [
              _vm._v(_vm._s(_vm.data.username))
            ])
          ],
          1
        )
      ]),
      !_vm.isMobile ? _c("td", { staticClass: "td-role" }, [
        _c(
          "span",
          { staticClass: "pill c-role-pill", class: _vm.pillClasses },
          [_vm._v(_vm._s(_vm.getRoleDisplayName(_vm.data.role)))]
        )
      ]) : _vm._e(),
      _c(
        "td",
        { staticClass: "td-permissions" },
        [
          _c("view-permissions", {
            attrs: { permissions: _vm.data.permissions }
          })
        ],
        1
      ),
      _c("td", { staticClass: "td-action" }, [
        _c(
          "div",
          { staticClass: "c-action-wrapper" },
          [_c("permission-action-menu")],
          1
        )
      ])
    ]
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-4430b3a7_0", { source: ".c-user-wrapper[data-v-4430b3a7] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.75rem 0;\n}\n.c-user-wrapper .c-avatar[data-v-4430b3a7] {\n  flex-shrink: 0;\n}\n.c-user-wrapper .c-name-and-role-mobile[data-v-4430b3a7] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.25rem;\n  align-items: flex-start;\n  flex-grow: 1;\n  max-width: calc(100% - 2rem);\n}\n.c-user-wrapper .c-name-and-role-mobile .c-name[data-v-4430b3a7] {\n  align-self: stretch;\n}\ntd.td-user[data-v-4430b3a7],\ntd.td-role[data-v-4430b3a7] {\n  padding-right: 0.5rem;\n}\n.c-permission-table-row.is-mobile td.td-user[data-v-4430b3a7] {\n  padding-right: 0.75rem;\n  max-width: 10.25rem;\n}\ntd.td-action[data-v-4430b3a7] {\n  padding-right: 1rem;\n}\n@media screen and (min-width: 1200px) {\ntd.td-action[data-v-4430b3a7] {\n    padding-right: 1.5rem;\n}\n}\n.c-pill-container[data-v-4430b3a7] {\n  display: inline-block;\n}\n.c-role-pill[data-v-4430b3a7] {\n  display: inline;\n  white-space: initial;\n}\n.c-action-wrapper[data-v-4430b3a7] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=PermissionTableRow.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/roles-and-permissions/PermissionTableRow.vue", "PermissionTableRow.vue"], "names": [], "mappings": "AAyEA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;ACxEA;AD0EA;EACA,cAAA;ACxEA;AD2EA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,uBAAA;EACA,YAAA;EACA,4BAAA;ACzEA;AD2EA;EACA,mBAAA;ACzEA;AD8EA;;EAEA,qBAAA;AC3EA;AD8EA;EACA,sBAAA;EACA,mBAAA;AC3EA;AD8EA;EACA,mBAAA;AC3EA;AACA;ADyEA;IAIA,qBAAA;AC1EE;AACF;AD6EA;EACA,qBAAA;AC1EA;AD6EA;EACA,eAAA;EACA,oBAAA;AC1EA;AD6EA;EACA,aAAA;EACA,yBAAA;AC1EA;;AAEA,iDAAiD", "file": "PermissionTableRow.vue", "sourcesContent": [`<template lang="pug">
  tr.c-permission-table-row(:class='{ "is-mobile": isMobile }')
    td.td-user
      .c-user-wrapper
        // TODO: Use 'AvatarUser.vue' instead and also wrap these with 'ProfileCard.vue'
        //       when implementing it with real data.
        avatar.c-avatar(src='/assets/images/user-avatar-default.png' size='xs')

        .c-name-and-role-mobile(v-if='isMobile')
          strong.c-name.has-ellipsis {{ data.username }}
          .c-pill-container
            span.pill.c-role-pill(:class='pillClasses') {{ getRoleDisplayName(data.role ) }}
        strong.c-name.has-ellipsis(v-else) {{ data.username }}

    td.td-role(v-if='!isMobile')
      span.pill.c-role-pill(:class='pillClasses') {{ getRoleDisplayName(data.role ) }}

    td.td-permissions
      view-permissions(:permissions='data.permissions')

    td.td-action
      .c-action-wrapper
        permission-action-menu
</template>

<script>
import Avatar from '../../../../../frontend/views/components/Avatar.vue'
import PermissionActionMenu from './PermissionActionMenu.vue'
import ViewPermissions from './ViewPermissions.vue'
import { GROUP_ROLES } from '../../../../../frontend/model/contracts/shared/constants.js'
import {
  getRoleDisplayName,
  getPermissionDisplayName
} from './permissions-utils.js'

export default {
  name: 'PermissionTableRow',
  components: {
    Avatar,
    ViewPermissions,
    PermissionActionMenu
  },
  props: {
    data: {
      type: Object
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pillClasses () {
      if (!this.data?.role) { return '' }

      return ({
        [GROUP_ROLES.ADMIN]: 'is-success',
        [GROUP_ROLES.MODERATOR_DELEGATOR]: 'is-primary',
        [GROUP_ROLES.MODERATOR]: 'is-neutral',
        [GROUP_ROLES.CUSTOM]: 'is-warning'
      })[this.data.role]
    }
  },
  methods: {
    getRoleDisplayName,
    getPermissionDisplayName
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-user-wrapper {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.75rem 0;

  .c-avatar {
    flex-shrink: 0;
  }

  .c-name-and-role-mobile {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    align-items: flex-start;
    flex-grow: 1;
    max-width: calc(100% - 2rem);

    .c-name {
      align-self: stretch;
    }
  }
}

td.td-user,
td.td-role {
  padding-right: 0.5rem;
}

.c-permission-table-row.is-mobile td.td-user {
  padding-right: 0.75rem;
  max-width: 10.25rem;
}

td.td-action {
  padding-right: 1rem;

  @include desktop {
    padding-right: 1.5rem;
  }
}

.c-pill-container {
  display: inline-block;
}

.c-role-pill {
  display: inline;
  white-space: initial;
}

.c-action-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
`, ".c-user-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.75rem 0;\n}\n.c-user-wrapper .c-avatar {\n  flex-shrink: 0;\n}\n.c-user-wrapper .c-name-and-role-mobile {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.25rem;\n  align-items: flex-start;\n  flex-grow: 1;\n  max-width: calc(100% - 2rem);\n}\n.c-user-wrapper .c-name-and-role-mobile .c-name {\n  align-self: stretch;\n}\n\ntd.td-user,\ntd.td-role {\n  padding-right: 0.5rem;\n}\n\n.c-permission-table-row.is-mobile td.td-user {\n  padding-right: 0.75rem;\n  max-width: 10.25rem;\n}\n\ntd.td-action {\n  padding-right: 1rem;\n}\n@media screen and (min-width: 1200px) {\n  td.td-action {\n    padding-right: 1.5rem;\n  }\n}\n\n.c-pill-container {\n  display: inline-block;\n}\n\n.c-role-pill {\n  display: inline;\n  white-space: initial;\n}\n\n.c-action-wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=PermissionTableRow.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-4430b3a7";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
  tr.c-permission-table-row(:class='{ "is-mobile": isMobile }')
    td.td-user
      .c-user-wrapper
        // TODO: Use 'AvatarUser.vue' instead and also wrap these with 'ProfileCard.vue'
        //       when implementing it with real data.
        avatar.c-avatar(src='/assets/images/user-avatar-default.png' size='xs')

        .c-name-and-role-mobile(v-if='isMobile')
          strong.c-name.has-ellipsis {{ data.username }}
          .c-pill-container
            span.pill.c-role-pill(:class='pillClasses') {{ getRoleDisplayName(data.role ) }}
        strong.c-name.has-ellipsis(v-else) {{ data.username }}

    td.td-role(v-if='!isMobile')
      span.pill.c-role-pill(:class='pillClasses') {{ getRoleDisplayName(data.role ) }}

    td.td-permissions
      view-permissions(:permissions='data.permissions')

    td.td-action
      .c-action-wrapper
        permission-action-menu
</template>

<script>
import Avatar from '../../../../../frontend/views/components/Avatar.vue'
import PermissionActionMenu from './PermissionActionMenu.vue'
import ViewPermissions from './ViewPermissions.vue'
import { GROUP_ROLES } from '../../../../../frontend/model/contracts/shared/constants.js'
import {
  getRoleDisplayName,
  getPermissionDisplayName
} from './permissions-utils.js'

export default {
  name: 'PermissionTableRow',
  components: {
    Avatar,
    ViewPermissions,
    PermissionActionMenu
  },
  props: {
    data: {
      type: Object
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pillClasses () {
      if (!this.data?.role) { return '' }

      return ({
        [GROUP_ROLES.ADMIN]: 'is-success',
        [GROUP_ROLES.MODERATOR_DELEGATOR]: 'is-primary',
        [GROUP_ROLES.MODERATOR]: 'is-neutral',
        [GROUP_ROLES.CUSTOM]: 'is-warning'
      })[this.data.role]
    }
  },
  methods: {
    getRoleDisplayName,
    getPermissionDisplayName
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-user-wrapper {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.75rem 0;

  .c-avatar {
    flex-shrink: 0;
  }

  .c-name-and-role-mobile {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    align-items: flex-start;
    flex-grow: 1;
    max-width: calc(100% - 2rem);

    .c-name {
      align-self: stretch;
    }
  }
}

td.td-user,
td.td-role {
  padding-right: 0.5rem;
}

.c-permission-table-row.is-mobile td.td-user {
  padding-right: 0.75rem;
  max-width: 10.25rem;
}

td.td-action {
  padding-right: 1rem;

  @include desktop {
    padding-right: 1.5rem;
  }
}

.c-pill-container {
  display: inline-block;
}

.c-role-pill {
  display: inline;
  white-space: initial;
}

.c-action-wrapper {
  display: flex;
  justify-content: flex-end;
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
function __vue_create_injector__4() {
  const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var PermissionTableRow_default = __vue_component__4;

// frontend/views/containers/group-settings/roles-and-permissions/RolesAndPermissions.vue
var fakeRolesData = [
  // NOTE: This is a fake user data created for development purpose.
  //       Should be removed once the roles & permissions features are implemented in the contract.
  {
    id: "user-1",
    username: "Fake user 1",
    role: GROUP_ROLES.ADMIN,
    permissions: GROUP_PERMISSIONS_PRESET.ADMIN
  },
  {
    id: "user-2",
    username: "Fake user 2",
    role: GROUP_ROLES.MODERATOR_DELEGATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR_DELEGATOR
  },
  {
    id: "user-3",
    username: "Fake user 3",
    role: GROUP_ROLES.MODERATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR
  },
  {
    id: "user-4",
    username: "Fake user 4",
    role: GROUP_ROLES.CUSTOM,
    permissions: [
      GROUP_PERMISSIONS.VIEW_PERMISSIONS,
      GROUP_PERMISSIONS.DELETE_CHANNEL
    ]
  }
];
var __vue_script__5 = {
  name: "RolesAndPermissions",
  components: {
    PageSection: PageSection_default,
    BannerScoped: BannerScoped_default,
    PermissionTableRow: PermissionTableRow_default
  },
  data() {
    return {
      ephemeral: {
        fakeRolesData,
        isMobile: false
      },
      matchMediaMobile: null
    };
  },
  computed: {
    displayComponent() {
      return true;
    },
    myPermissions() {
      return GROUP_PERMISSIONS_PRESET.ADMIN;
    },
    canDelegatePermissions() {
      return this.myPermissions.includes(GROUP_PERMISSIONS.DELEGATE_PERMISSIONS);
    }
  },
  methods: {
    handleAddPermissionsClick() {
      alert(L("Coming soon!"));
    }
  },
  provide() {
    return {
      permissionsUtils: {
        myPermissions: this.myPermissions,
        canDelegatePermissions: this.canDelegatePermissions
      }
    };
  },
  mounted() {
    this.matchMediaMobile = window.matchMedia("screen and (max-width: 570px)");
    this.ephemeral.isMobile = this.matchMediaMobile.matches;
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches;
    };
  },
  beforeDestroy() {
    this.matchMediaMobile.onchange = null;
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.displayComponent ? _c(
    "page-section",
    {
      staticClass: "c-section",
      attrs: { title: _vm.L("Roles and Permissions") }
    },
    [
      _c(
        "i18n",
        {
          staticClass: "has-text-1 c-section-description",
          attrs: { tag: "p" }
        },
        [
          _vm._v(
            "Here's a list of roles and permissions granted to your group members."
          )
        ]
      ),
      _c("banner-scoped", { ref: "feedbackMsg", attrs: { allowA: true } }),
      _c(
        "table",
        { staticClass: "table table-in-card c-permissions-table" },
        [
          _c("thead", [
            _c(
              "tr",
              [
                _vm.ephemeral.isMobile ? _c(
                  "i18n",
                  {
                    staticClass: "th-user-and-role-combined",
                    attrs: { tag: "th" }
                  },
                  [_vm._v("User / Role")]
                ) : [
                  _c(
                    "i18n",
                    { staticClass: "th-user", attrs: { tag: "th" } },
                    [_vm._v("User")]
                  ),
                  _c(
                    "i18n",
                    { staticClass: "th-role", attrs: { tag: "th" } },
                    [_vm._v("Role")]
                  )
                ],
                _c(
                  "i18n",
                  { staticClass: "th-permissions", attrs: { tag: "th" } },
                  [_vm._v("Permissions")]
                ),
                _c("th", {
                  staticClass: "th-action",
                  attrs: { "aria-label": _vm.L("action") }
                })
              ],
              2
            )
          ]),
          _c(
            "tbody",
            _vm._l(_vm.ephemeral.fakeRolesData, function(entry) {
              return _c("permission-table-row", {
                key: entry.id,
                attrs: { data: entry, "is-mobile": _vm.ephemeral.isMobile }
              });
            }),
            1
          )
        ]
      ),
      _c("div", { staticClass: "c-buttons-container" }, [
        _vm.canDelegatePermissions ? _c(
          "button",
          {
            staticClass: "is-small is-outlined",
            attrs: { type: "button" },
            on: { click: _vm.handleAddPermissionsClick }
          },
          [_c("i18n", [_vm._v("Add Permissions")])],
          1
        ) : _vm._e()
      ])
    ],
    1
  ) : _vm._e();
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = function(inject) {
  if (!inject) return;
  inject("data-v-29a20e0c_0", { source: ".c-section[data-v-29a20e0c] {\n  position: relative;\n}\n.c-section-description[data-v-29a20e0c] {\n  margin: 0.5rem 0;\n}\n.c-table[data-v-29a20e0c] {\n  table-layout: fixed;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-buttons-container[data-v-29a20e0c] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.c-permissions-table[data-v-29a20e0c] {\n  margin-top: 2rem;\n}\n.c-permissions-table th.th-user[data-v-29a20e0c] {\n  padding-right: 0.5rem;\n}\n.c-permissions-table th.th-role[data-v-29a20e0c] {\n  min-width: 7.25rem;\n}\n.c-permissions-table th.th-action[data-v-29a20e0c] {\n  width: 2.75rem;\n  padding-right: 1rem;\n}\n@media screen and (min-width: 571px) {\n.c-permissions-table th.th-user[data-v-29a20e0c] {\n    width: auto;\n    min-width: 12.25rem;\n}\n.c-permissions-table th.th-action[data-v-29a20e0c] {\n    width: 4.25rem;\n}\n}\n\n/*# sourceMappingURL=RolesAndPermissions.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/roles-and-permissions/RolesAndPermissions.vue", "RolesAndPermissions.vue"], "names": [], "mappings": "AA6IA;EACA,kBAAA;AC5IA;AD+IA;EACA,gBAAA;AC5IA;AD+IA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;AC5IA;AD+IA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;AC5IA;AD+IA;EACA,gBAAA;AC5IA;AD8IA;EACA,qBAAA;AC5IA;AD+IA;EACA,kBAAA;AC7IA;ADgJA;EACA,cAAA;EACA,mBAAA;AC9IA;ADwGA;AA0CA;IACA,WAAA;IACA,mBAAA;AC/IE;ADkJF;IACA,cAAA;AChJE;AACF;;AAEA,kDAAkD", "file": "RolesAndPermissions.vue", "sourcesContent": [`<template lang="pug">
page-section.c-section(
  v-if='displayComponent'
  :title='L("Roles and Permissions")'
)
  i18n.has-text-1.c-section-description(tag='p') Here's a list of roles and permissions granted to your group members.

  banner-scoped(ref='feedbackMsg' :allowA='true')

  table.table.table-in-card.c-permissions-table
    thead
      tr
        // User and role columns are combined when the screen is not wide enough.
        i18n.th-user-and-role-combined(v-if='ephemeral.isMobile' tag='th') User / Role
        template(v-else)
          i18n.th-user(tag='th') User
          i18n.th-role(tag='th') Role
        i18n.th-permissions(tag='th') Permissions
        th.th-action(:aria-label='L("action")')

    tbody
      permission-table-row(
        v-for='entry in ephemeral.fakeRolesData'
        :key='entry.id'
        :data='entry'
        :is-mobile='ephemeral.isMobile'
      )

  .c-buttons-container
    button.is-small.is-outlined(
      v-if='canDelegatePermissions'
      type='button'
      @click='handleAddPermissionsClick'
    )
      i18n Add Permissions
</template>

<script>
import PageSection from '../../../../../frontend/views/components/PageSection.vue'
import BannerScoped from '../../../../../frontend/views/components/banners/BannerScoped.vue'
import PermissionTableRow from './PermissionTableRow.vue'
import { GROUP_ROLES, GROUP_PERMISSIONS_PRESET, GROUP_PERMISSIONS } from '../../../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../../../frontend/common/common.js'

const fakeRolesData = [
  // NOTE: This is a fake user data created for development purpose.
  //       Should be removed once the roles & permissions features are implemented in the contract.
  {
    id: 'user-1',
    username: 'Fake user 1',
    role: GROUP_ROLES.ADMIN,
    permissions: GROUP_PERMISSIONS_PRESET.ADMIN
  },
  {
    id: 'user-2',
    username: 'Fake user 2',
    role: GROUP_ROLES.MODERATOR_DELEGATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR_DELEGATOR
  },
  {
    id: 'user-3',
    username: 'Fake user 3',
    role: GROUP_ROLES.MODERATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR
  },
  {
    id: 'user-4',
    username: 'Fake user 4',
    role: GROUP_ROLES.CUSTOM,
    permissions: [
      GROUP_PERMISSIONS.VIEW_PERMISSIONS,
      GROUP_PERMISSIONS.DELETE_CHANNEL
    ]
  }
]

export default ({
  name: 'RolesAndPermissions',
  components: {
    PageSection,
    BannerScoped,
    PermissionTableRow
  },
  data () {
    return {
      ephemeral: {
        fakeRolesData,
        isMobile: false
      },
      matchMediaMobile: null
    }
  },
  computed: {
    displayComponent () {
      // TODO: Remove this once the development is complete and the feature is ready for release.
      return process.env.NODE_ENV === 'development'
    },
    myPermissions () {
      // NOTE: Using ADMIN preset here for a development purpose for now.
      // (TODO: Replace with logic that uses actual permissions eg. Implement a vuex getter)
      return GROUP_PERMISSIONS_PRESET.ADMIN
    },
    canDelegatePermissions () {
      return this.myPermissions.includes(GROUP_PERMISSIONS.DELEGATE_PERMISSIONS)
    }
  },
  methods: {
    handleAddPermissionsClick () {
      alert(L('Coming soon!'))
    }
  },
  provide () {
    return {
      permissionsUtils: {
        myPermissions: this.myPermissions,
        canDelegatePermissions: this.canDelegatePermissions
      }
    }
  },
  mounted () {
    this.matchMediaMobile = window.matchMedia('screen and (max-width: 570px)')
    this.ephemeral.isMobile = this.matchMediaMobile.matches
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches
    }
  },
  beforeDestroy () {
    this.matchMediaMobile.onchange = null
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

@mixin component-non-mobile {
  @media screen and (min-width: 571px) {
    @content;
  }
}

.c-section {
  position: relative;
}

.c-section-description {
  margin: 0.5rem 0;
}

.c-table {
  table-layout: fixed;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.c-buttons-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.c-permissions-table {
  margin-top: 2rem;

  th.th-user {
    padding-right: 0.5rem;
  }

  th.th-role {
    min-width: 7.25rem;
  }

  th.th-action {
    width: 2.75rem;
    padding-right: 1rem;
  }

  @include component-non-mobile {
    th.th-user {
      width: auto;
      min-width: 12.25rem;
    }

    th.th-action {
      width: 4.25rem;
    }
  }
}
</style>
`, ".c-section {\n  position: relative;\n}\n\n.c-section-description {\n  margin: 0.5rem 0;\n}\n\n.c-table {\n  table-layout: fixed;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-buttons-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.c-permissions-table {\n  margin-top: 2rem;\n}\n.c-permissions-table th.th-user {\n  padding-right: 0.5rem;\n}\n.c-permissions-table th.th-role {\n  min-width: 7.25rem;\n}\n.c-permissions-table th.th-action {\n  width: 2.75rem;\n  padding-right: 1rem;\n}\n@media screen and (min-width: 571px) {\n  .c-permissions-table th.th-user {\n    width: auto;\n    min-width: 12.25rem;\n  }\n  .c-permissions-table th.th-action {\n    width: 4.25rem;\n  }\n}\n\n/*# sourceMappingURL=RolesAndPermissions.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__5 = "data-v-29a20e0c";
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
page-section.c-section(
  v-if='displayComponent'
  :title='L("Roles and Permissions")'
)
  i18n.has-text-1.c-section-description(tag='p') Here's a list of roles and permissions granted to your group members.

  banner-scoped(ref='feedbackMsg' :allowA='true')

  table.table.table-in-card.c-permissions-table
    thead
      tr
        // User and role columns are combined when the screen is not wide enough.
        i18n.th-user-and-role-combined(v-if='ephemeral.isMobile' tag='th') User / Role
        template(v-else)
          i18n.th-user(tag='th') User
          i18n.th-role(tag='th') Role
        i18n.th-permissions(tag='th') Permissions
        th.th-action(:aria-label='L("action")')

    tbody
      permission-table-row(
        v-for='entry in ephemeral.fakeRolesData'
        :key='entry.id'
        :data='entry'
        :is-mobile='ephemeral.isMobile'
      )

  .c-buttons-container
    button.is-small.is-outlined(
      v-if='canDelegatePermissions'
      type='button'
      @click='handleAddPermissionsClick'
    )
      i18n Add Permissions
</template>

<script>
import PageSection from '../../../../../frontend/views/components/PageSection.vue'
import BannerScoped from '../../../../../frontend/views/components/banners/BannerScoped.vue'
import PermissionTableRow from './PermissionTableRow.vue'
import { GROUP_ROLES, GROUP_PERMISSIONS_PRESET, GROUP_PERMISSIONS } from '../../../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../../../frontend/common/common.js'

const fakeRolesData = [
  // NOTE: This is a fake user data created for development purpose.
  //       Should be removed once the roles & permissions features are implemented in the contract.
  {
    id: 'user-1',
    username: 'Fake user 1',
    role: GROUP_ROLES.ADMIN,
    permissions: GROUP_PERMISSIONS_PRESET.ADMIN
  },
  {
    id: 'user-2',
    username: 'Fake user 2',
    role: GROUP_ROLES.MODERATOR_DELEGATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR_DELEGATOR
  },
  {
    id: 'user-3',
    username: 'Fake user 3',
    role: GROUP_ROLES.MODERATOR,
    permissions: GROUP_PERMISSIONS_PRESET.MODERATOR
  },
  {
    id: 'user-4',
    username: 'Fake user 4',
    role: GROUP_ROLES.CUSTOM,
    permissions: [
      GROUP_PERMISSIONS.VIEW_PERMISSIONS,
      GROUP_PERMISSIONS.DELETE_CHANNEL
    ]
  }
]

export default ({
  name: 'RolesAndPermissions',
  components: {
    PageSection,
    BannerScoped,
    PermissionTableRow
  },
  data () {
    return {
      ephemeral: {
        fakeRolesData,
        isMobile: false
      },
      matchMediaMobile: null
    }
  },
  computed: {
    displayComponent () {
      // TODO: Remove this once the development is complete and the feature is ready for release.
      return process.env.NODE_ENV === 'development'
    },
    myPermissions () {
      // NOTE: Using ADMIN preset here for a development purpose for now.
      // (TODO: Replace with logic that uses actual permissions eg. Implement a vuex getter)
      return GROUP_PERMISSIONS_PRESET.ADMIN
    },
    canDelegatePermissions () {
      return this.myPermissions.includes(GROUP_PERMISSIONS.DELEGATE_PERMISSIONS)
    }
  },
  methods: {
    handleAddPermissionsClick () {
      alert(L('Coming soon!'))
    }
  },
  provide () {
    return {
      permissionsUtils: {
        myPermissions: this.myPermissions,
        canDelegatePermissions: this.canDelegatePermissions
      }
    }
  },
  mounted () {
    this.matchMediaMobile = window.matchMedia('screen and (max-width: 570px)')
    this.ephemeral.isMobile = this.matchMediaMobile.matches
    this.matchMediaMobile.onchange = (e) => {
      this.ephemeral.isMobile = e.matches
    }
  },
  beforeDestroy () {
    this.matchMediaMobile.onchange = null
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

@mixin component-non-mobile {
  @media screen and (min-width: 571px) {
    @content;
  }
}

.c-section {
  position: relative;
}

.c-section-description {
  margin: 0.5rem 0;
}

.c-table {
  table-layout: fixed;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.c-buttons-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.c-permissions-table {
  margin-top: 2rem;

  th.th-user {
    padding-right: 0.5rem;
  }

  th.th-role {
    min-width: 7.25rem;
  }

  th.th-action {
    width: 2.75rem;
    padding-right: 1rem;
  }

  @include component-non-mobile {
    th.th-user {
      width: auto;
      min-width: 12.25rem;
    }

    th.th-action {
      width: 4.25rem;
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
function __vue_create_injector__5() {
  const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  __vue_create_injector__5,
  void 0,
  void 0
);
var RolesAndPermissions_default = __vue_component__5;

// frontend/views/containers/group-settings/GroupRulesSettings.vue
var __vue_script__6 = {
  name: "GroupVotingSystem",
  components: {
    BannerSimple: BannerSimple_default
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        title: L("Percentage based"),
        explanation: L("Proposals are accepted when the required percentage of members agree to the proposal."),
        status: L("Percentage of members that need to agree:")
      },
      [RULE_DISAGREEMENT]: {
        title: L("Disagreement number"),
        explanation: L("Proposals are rejected when a certain number of members disagree with the proposal."),
        status: L('Maximum number of "no" votes:')
      }
    }
  }),
  computed: {
    ...mapGetters([
      "groupMembersCount",
      "groupProposalSettings",
      "groupShouldPropose"
    ]),
    proposalSettings() {
      return this.groupProposalSettings() || {};
    },
    votingRulesSorted() {
      return [RULE_PERCENTAGE];
    },
    votingRuleSettings() {
      return this.proposalSettings.ruleSettings[this.proposalSettings.rule];
    },
    thresholdOriginal() {
      return this.votingRuleSettings.threshold;
    },
    thresholdAdjusted() {
      return getThresholdAdjusted(this.proposalSettings.rule, this.thresholdOriginal, this.groupMembersCount);
    }
  },
  methods: {
    openVotingProposal(rule) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, "ChangeVotingRules", { rule });
    },
    isRuleActive(rule) {
      return rule === this.proposalSettings.rule;
    },
    votingValue(option) {
      const HTMLTags = {
        b_: '<span class="has-text-bold">',
        _b: "</span>",
        sm_: '<span class="has-text-1 has-text-small">',
        _sm: "</span>"
      };
      const count = this.thresholdOriginal;
      const adjusted = this.thresholdAdjusted;
      return {
        [RULE_DISAGREEMENT]: () => {
          if (!this.groupShouldPropose || count === adjusted) {
            return L("{b_}{count}{_b}", { count, ...HTMLTags });
          }
          return L("{b_}{count}{_b} {sm_}(adjusted to {nr}*){_sm}", { count, nr: adjusted, ...HTMLTags });
        },
        [RULE_PERCENTAGE]: () => {
          const percent = getPercentFromDecimal(this.thresholdOriginal) + "%";
          const LArgs = {
            percent,
            count: getCountOutOfMembers(this.groupMembersCount, adjusted),
            total: Math.max(3, this.groupMembersCount),
            // 3 = minimum groupSize to vote,
            ...HTMLTags
          };
          if (!this.groupShouldPropose) {
            return L("{b_}{percent}{_b}", LArgs);
          }
          if (count === adjusted) {
            return L("{b_}{percent}{_b} {sm_}({count} out of {total} members){_sm}", LArgs);
          }
          return L("{b_}{percent}{_b} {sm_}({count}* out of {total} members){_sm}", LArgs);
        }
      }[option]();
    },
    votingRuleAdjusted(ruleName) {
      if (!this.groupShouldPropose || !this.isRuleActive(ruleName) || this.thresholdAdjusted === this.thresholdOriginal) {
        return "";
      }
      return {
        [RULE_DISAGREEMENT]: L("*This value was automatically adjusted because your group is too small for the disagreement number."),
        [RULE_PERCENTAGE]: L('*This value was automatically adjusted because there should always be at least 2 "yes" votes.')
      }[ruleName];
    }
  }
};
var __vue_render__6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "ul",
    { staticClass: "c-wrapper", attrs: { "data-test": "votingRules" } },
    _vm._l(_vm.votingRulesSorted, function(rule) {
      return _c(
        "li",
        {
          staticClass: "cardBox c-card",
          class: { isActive: _vm.isRuleActive(rule) },
          attrs: { "aria-current": _vm.isRuleActive(rule), "data-test": rule }
        },
        [
          _c("p", { staticClass: "is-title-4" }, [
            _vm._v(_vm._s(_vm.config[rule].title))
          ]),
          _c("p", {
            directives: [
              {
                name: "safe-html",
                rawName: "v-safe-html",
                value: _vm.config[rule].explanation,
                expression: "config[rule].explanation"
              }
            ],
            staticClass: "has-text-1 c-expl"
          }),
          false ? _c("i18n", { staticClass: "pill is-primary c-active" }, [
            _vm._v("Active")
          ]) : _vm._e(),
          _vm.isRuleActive(rule) ? _c("dl", { staticClass: "c-status" }, [
            _c("dt", { staticClass: "c-status-term" }, [
              _vm._v(_vm._s(_vm.config[rule].status))
            ]),
            _c("dd", { staticClass: "c-status-desc" }, [
              _c("span", {
                directives: [
                  {
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: _vm.votingValue(rule),
                    expression: "votingValue(rule)"
                  }
                ],
                attrs: { "data-test": "ruleStatus" }
              }),
              _c(
                "button",
                {
                  staticClass: "link",
                  attrs: { tag: "button", "data-test": "changeRule" },
                  on: {
                    click: function($event) {
                      return _vm.openVotingProposal(rule);
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.groupShouldPropose ? _vm.L("Propose change") : _vm.L("Change")
                    )
                  )
                ]
              )
            ])
          ]) : _vm._e(),
          _vm.groupShouldPropose && _vm.votingRuleAdjusted(rule) ? _c(
            "banner-simple",
            {
              staticClass: "c-banner",
              attrs: { severity: "info", "data-test": "ruleAdjusted" }
            },
            [_vm._v(_vm._s(_vm.votingRuleAdjusted(rule)))]
          ) : _vm._e(),
          !_vm.isRuleActive(rule) ? _c(
            "button",
            {
              staticClass: "link",
              attrs: { "data-test": "changeRule" },
              on: {
                click: function($event) {
                  return _vm.openVotingProposal(rule);
                }
              }
            },
            [
              _vm._v(
                _vm._s(
                  _vm.groupShouldPropose ? _vm.L("Propose changing to this system") : _vm.L("Change to this system")
                )
              )
            ]
          ) : _vm._e()
        ],
        1
      );
    }),
    0
  );
};
var __vue_staticRenderFns__6 = [];
__vue_render__6._withStripped = true;
var __vue_inject_styles__6 = function(inject) {
  if (!inject) return;
  inject("data-v-dfe50112_0", { source: ".c-wrapper[data-v-dfe50112] {\n  margin-top: 1.5rem;\n}\n.c-active[data-v-dfe50112] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.c-expl[data-v-dfe50112] {\n  margin-bottom: 1.5rem;\n}\n.c-status[data-v-dfe50112] {\n  margin-bottom: -0.5rem;\n}\n.c-status-term[data-v-dfe50112], .c-status-desc[data-v-dfe50112] > :first-child {\n  margin-right: 0.5rem;\n}\n.c-status-term[data-v-dfe50112] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.c-status-desc[data-v-dfe50112] {\n  display: inline;\n}\n@media screen and (max-width: 768px) {\n.c-status-desc[data-v-dfe50112] {\n    display: block;\n}\n}\n.c-banner[data-v-dfe50112] {\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-card[data-v-dfe50112] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.c-active[data-v-dfe50112] {\n    right: 1.5rem;\n}\n}\n\n/*# sourceMappingURL=GroupRulesSettings.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/GroupRulesSettings.vue", "GroupRulesSettings.vue"], "names": [], "mappings": "AAsJA;EACA,kBAAA;ACrJA;ADwJA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;ACrJA;ADwJA;EACA,qBAAA;ACrJA;ADwJA;EACA,sBAAA;ACrJA;ADuJA;EAEA,oBAAA;ACtJA;ADyJA;EACA,qBAAA;EACA,qBAAA;ACvJA;AD0JA;EACA,eAAA;ACxJA;AACA;ADsJA;IAIA,cAAA;ACvJE;AACF;AD2JA;EACA,kBAAA;ACxJA;AAEA;AD0JA;IACA,oBAAA;IACA,qBAAA;ACxJE;AD2JF;IACA,aAAA;ACzJE;AACF;;AAEA,iDAAiD", "file": "GroupRulesSettings.vue", "sourcesContent": [`<template lang='pug'>
  ul.c-wrapper(data-test='votingRules')
    li.cardBox.c-card(
      v-for='rule in votingRulesSorted'
      :class='{ isActive: isRuleActive(rule) }'
      :aria-current='isRuleActive(rule)'
      :data-test='rule'
    )
      p.is-title-4 {{ config[rule].title }}
      p.has-text-1.c-expl(v-safe-html='config[rule].explanation')
      // disabling below 'active' badge temporarily until 'disagreement-rule' is re-implemented.
      i18n.pill.is-primary.c-active(v-if='false && isRuleActive(rule)') Active

      dl.c-status(v-if='isRuleActive(rule)')
        dt.c-status-term {{ config[rule].status }}
        dd.c-status-desc
          span(v-safe-html='votingValue(rule)' data-test='ruleStatus')
          button.link(
            tag='button'
            data-test='changeRule'
            @click='openVotingProposal(rule)'
          ) {{ groupShouldPropose ? L('Propose change') : L('Change') }}

      banner-simple.c-banner(
        severity='info'
        data-test='ruleAdjusted'
        v-if='groupShouldPropose && votingRuleAdjusted(rule)'
      ) {{ votingRuleAdjusted(rule) }}

      button.link(
        v-if='!isRuleActive(rule)'
        data-test='changeRule'
        @click='openVotingProposal(rule)'
      ) {{ groupShouldPropose ? L('Propose changing to this system') : L('Change to this system') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getThresholdAdjusted, getCountOutOfMembers, getPercentFromDecimal } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { L } from '../../../../frontend/common/common.js'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'

export default ({
  name: 'GroupVotingSystem',
  components: {
    BannerSimple
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        title: L('Percentage based'),
        explanation: L('Proposals are accepted when the required percentage of members agree to the proposal.'),
        status: L('Percentage of members that need to agree:')
      },
      [RULE_DISAGREEMENT]: {
        title: L('Disagreement number'),
        explanation: L('Proposals are rejected when a certain number of members disagree with the proposal.'),
        status: L('Maximum number of "no" votes:')
      }
    }
  }),
  computed: {
    ...mapGetters([
      'groupMembersCount',
      'groupProposalSettings',
      'groupShouldPropose'
    ]),
    proposalSettings () {
      // note: a console error can happen here if we're on this page and logout
      // because the group disappears. it's not a big deal though
      return this.groupProposalSettings() || {}
    },
    votingRulesSorted () {
      // NOTE: temporarily hiding DISAGREEMENT_RULE from the settings.
      // TODO: once disagreement-rule implementation is ready, put this back to
      //       return this.proposalSettings.rule === RULE_DISAGREEMENT ? [RULE_DISAGREEMENT, RULE_PERCENTAGE] : [RULE_PERCENTAGE, RULE_DISAGREEMENT]
      return [RULE_PERCENTAGE]
    },
    votingRuleSettings () {
      return this.proposalSettings.ruleSettings[this.proposalSettings.rule]
    },
    thresholdOriginal () {
      return this.votingRuleSettings.threshold
    },
    thresholdAdjusted () {
      return getThresholdAdjusted(this.proposalSettings.rule, this.thresholdOriginal, this.groupMembersCount)
    }
  },
  methods: {
    openVotingProposal (rule) {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'ChangeVotingRules', { rule })
    },
    isRuleActive (rule) {
      return rule === this.proposalSettings.rule
    },
    votingValue (option) {
      const HTMLTags = {
        b_: '<span class="has-text-bold">',
        _b: '</span>',
        sm_: '<span class="has-text-1 has-text-small">',
        _sm: '</span>'
      }
      const count = this.thresholdOriginal
      const adjusted = this.thresholdAdjusted

      return {
        [RULE_DISAGREEMENT]: () => {
          if (!this.groupShouldPropose || count === adjusted) {
            return L('{b_}{count}{_b}', { count, ...HTMLTags })
          }
          return L('{b_}{count}{_b} {sm_}(adjusted to {nr}*){_sm}', { count, nr: adjusted, ...HTMLTags })
        },
        [RULE_PERCENTAGE]: () => {
          const percent = getPercentFromDecimal(this.thresholdOriginal) + '%'
          const LArgs = {
            percent,
            count: getCountOutOfMembers(this.groupMembersCount, adjusted),
            total: Math.max(3, this.groupMembersCount), // 3 = minimum groupSize to vote,
            ...HTMLTags
          }

          if (!this.groupShouldPropose) {
            return L('{b_}{percent}{_b}', LArgs)
          }
          if (count === adjusted) {
            return L('{b_}{percent}{_b} {sm_}({count} out of {total} members){_sm}', LArgs)
          }
          return L('{b_}{percent}{_b} {sm_}({count}* out of {total} members){_sm}', LArgs)
        }
      }[option]()
    },
    votingRuleAdjusted (ruleName) {
      if (!this.groupShouldPropose || !this.isRuleActive(ruleName) || this.thresholdAdjusted === this.thresholdOriginal) {
        return ''
      }

      return {
        [RULE_DISAGREEMENT]: L('*This value was automatically adjusted because your group is too small for the disagreement number.'),
        [RULE_PERCENTAGE]: L('*This value was automatically adjusted because there should always be at least 2 "yes" votes.')
      }[ruleName]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  margin-top: 1.5rem;
}

.c-active {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.c-expl {
  margin-bottom: 1.5rem;
}

.c-status {
  margin-bottom: -0.5rem;

  &-term,
  &-desc > :first-child {
    margin-right: 0.5rem;
  }

  &-term {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  &-desc {
    display: inline;

    @include phone {
      display: block;
    }
  }
}

.c-banner {
  margin-top: 1.5rem;
}

@include tablet {
  .c-card {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .c-active {
    right: 1.5rem;
  }
}
</style>
`, ".c-wrapper {\n  margin-top: 1.5rem;\n}\n\n.c-active {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n\n.c-expl {\n  margin-bottom: 1.5rem;\n}\n\n.c-status {\n  margin-bottom: -0.5rem;\n}\n.c-status-term, .c-status-desc > :first-child {\n  margin-right: 0.5rem;\n}\n.c-status-term {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.c-status-desc {\n  display: inline;\n}\n@media screen and (max-width: 768px) {\n  .c-status-desc {\n    display: block;\n  }\n}\n\n.c-banner {\n  margin-top: 1.5rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-card {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .c-active {\n    right: 1.5rem;\n  }\n}\n\n/*# sourceMappingURL=GroupRulesSettings.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__6 = "data-v-dfe50112";
var __vue_module_identifier__6 = void 0;
var __vue_is_functional_template__6 = false;
function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  ul.c-wrapper(data-test='votingRules')
    li.cardBox.c-card(
      v-for='rule in votingRulesSorted'
      :class='{ isActive: isRuleActive(rule) }'
      :aria-current='isRuleActive(rule)'
      :data-test='rule'
    )
      p.is-title-4 {{ config[rule].title }}
      p.has-text-1.c-expl(v-safe-html='config[rule].explanation')
      // disabling below 'active' badge temporarily until 'disagreement-rule' is re-implemented.
      i18n.pill.is-primary.c-active(v-if='false && isRuleActive(rule)') Active

      dl.c-status(v-if='isRuleActive(rule)')
        dt.c-status-term {{ config[rule].status }}
        dd.c-status-desc
          span(v-safe-html='votingValue(rule)' data-test='ruleStatus')
          button.link(
            tag='button'
            data-test='changeRule'
            @click='openVotingProposal(rule)'
          ) {{ groupShouldPropose ? L('Propose change') : L('Change') }}

      banner-simple.c-banner(
        severity='info'
        data-test='ruleAdjusted'
        v-if='groupShouldPropose && votingRuleAdjusted(rule)'
      ) {{ votingRuleAdjusted(rule) }}

      button.link(
        v-if='!isRuleActive(rule)'
        data-test='changeRule'
        @click='openVotingProposal(rule)'
      ) {{ groupShouldPropose ? L('Propose changing to this system') : L('Change to this system') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { RULE_PERCENTAGE, RULE_DISAGREEMENT, getThresholdAdjusted, getCountOutOfMembers, getPercentFromDecimal } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { L } from '../../../../frontend/common/common.js'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'

export default ({
  name: 'GroupVotingSystem',
  components: {
    BannerSimple
  },
  data: () => ({
    config: {
      [RULE_PERCENTAGE]: {
        title: L('Percentage based'),
        explanation: L('Proposals are accepted when the required percentage of members agree to the proposal.'),
        status: L('Percentage of members that need to agree:')
      },
      [RULE_DISAGREEMENT]: {
        title: L('Disagreement number'),
        explanation: L('Proposals are rejected when a certain number of members disagree with the proposal.'),
        status: L('Maximum number of "no" votes:')
      }
    }
  }),
  computed: {
    ...mapGetters([
      'groupMembersCount',
      'groupProposalSettings',
      'groupShouldPropose'
    ]),
    proposalSettings () {
      // note: a console error can happen here if we're on this page and logout
      // because the group disappears. it's not a big deal though
      return this.groupProposalSettings() || {}
    },
    votingRulesSorted () {
      // NOTE: temporarily hiding DISAGREEMENT_RULE from the settings.
      // TODO: once disagreement-rule implementation is ready, put this back to
      //       return this.proposalSettings.rule === RULE_DISAGREEMENT ? [RULE_DISAGREEMENT, RULE_PERCENTAGE] : [RULE_PERCENTAGE, RULE_DISAGREEMENT]
      return [RULE_PERCENTAGE]
    },
    votingRuleSettings () {
      return this.proposalSettings.ruleSettings[this.proposalSettings.rule]
    },
    thresholdOriginal () {
      return this.votingRuleSettings.threshold
    },
    thresholdAdjusted () {
      return getThresholdAdjusted(this.proposalSettings.rule, this.thresholdOriginal, this.groupMembersCount)
    }
  },
  methods: {
    openVotingProposal (rule) {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'ChangeVotingRules', { rule })
    },
    isRuleActive (rule) {
      return rule === this.proposalSettings.rule
    },
    votingValue (option) {
      const HTMLTags = {
        b_: '<span class="has-text-bold">',
        _b: '</span>',
        sm_: '<span class="has-text-1 has-text-small">',
        _sm: '</span>'
      }
      const count = this.thresholdOriginal
      const adjusted = this.thresholdAdjusted

      return {
        [RULE_DISAGREEMENT]: () => {
          if (!this.groupShouldPropose || count === adjusted) {
            return L('{b_}{count}{_b}', { count, ...HTMLTags })
          }
          return L('{b_}{count}{_b} {sm_}(adjusted to {nr}*){_sm}', { count, nr: adjusted, ...HTMLTags })
        },
        [RULE_PERCENTAGE]: () => {
          const percent = getPercentFromDecimal(this.thresholdOriginal) + '%'
          const LArgs = {
            percent,
            count: getCountOutOfMembers(this.groupMembersCount, adjusted),
            total: Math.max(3, this.groupMembersCount), // 3 = minimum groupSize to vote,
            ...HTMLTags
          }

          if (!this.groupShouldPropose) {
            return L('{b_}{percent}{_b}', LArgs)
          }
          if (count === adjusted) {
            return L('{b_}{percent}{_b} {sm_}({count} out of {total} members){_sm}', LArgs)
          }
          return L('{b_}{percent}{_b} {sm_}({count}* out of {total} members){_sm}', LArgs)
        }
      }[option]()
    },
    votingRuleAdjusted (ruleName) {
      if (!this.groupShouldPropose || !this.isRuleActive(ruleName) || this.thresholdAdjusted === this.thresholdOriginal) {
        return ''
      }

      return {
        [RULE_DISAGREEMENT]: L('*This value was automatically adjusted because your group is too small for the disagreement number.'),
        [RULE_PERCENTAGE]: L('*This value was automatically adjusted because there should always be at least 2 "yes" votes.')
      }[ruleName]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  margin-top: 1.5rem;
}

.c-active {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.c-expl {
  margin-bottom: 1.5rem;
}

.c-status {
  margin-bottom: -0.5rem;

  &-term,
  &-desc > :first-child {
    margin-right: 0.5rem;
  }

  &-term {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  &-desc {
    display: inline;

    @include phone {
      display: block;
    }
  }
}

.c-banner {
  margin-top: 1.5rem;
}

@include tablet {
  .c-card {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .c-active {
    right: 1.5rem;
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
function __vue_create_injector__6() {
  const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
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
var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6(
  { render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 },
  __vue_inject_styles__6,
  __vue_script__6,
  __vue_scope_id__6,
  __vue_is_functional_template__6,
  __vue_module_identifier__6,
  false,
  __vue_create_injector__6,
  void 0,
  void 0
);
var GroupRulesSettings_default = __vue_component__6;

// frontend/views/pages/GroupSettings.vue
var __vue_script__7 = {
  name: "GroupSettings",
  mixins: [import_vuelidate.validationMixin, validationsDebouncedMixins_default],
  components: {
    AvatarUpload: AvatarUpload_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    GroupRulesSettings: GroupRulesSettings_default,
    InvitationsTable: InvitationsTable_default,
    RolesAndPermissions: RolesAndPermissions_default,
    CharLengthIndicator: CharLengthIndicator_default,
    Page: Page_default,
    PageSection: PageSection_default
  },
  data() {
    const { groupName, sharedValues, mincomeCurrency } = this.$store.getters.groupSettings;
    return {
      form: {
        groupName,
        sharedValues,
        mincomeCurrency
      },
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR,
        descMaxChar: GROUP_DESCRIPTION_MAX_CHAR
      },
      allowPublicChannels: false
    };
  },
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters(["currentGroupOwnerID", "groupSettings", "ourIdentityContractId"]),
    currencies() {
      return currencies_default;
    },
    sbpParams() {
      return {
        selector: "gi.actions/group/updateSettings",
        contractID: this.$store.state.currentGroupId,
        key: "groupPicture"
      };
    },
    isGroupAdmin() {
      return false;
    },
    configurePublicChannel() {
      return this.isGroupAdmin && false;
    },
    nameCharLen() {
      return this.form.groupName?.length || 0;
    },
    descCharLen() {
      return this.form.sharedValues?.length || 0;
    }
  },
  mounted() {
    this.allowPublicChannels = this.groupSettings.allowPublicChannels;
  },
  methods: {
    openProposal(component) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, component);
    },
    async saveSettings(e) {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L("The form is invalid."));
        return;
      }
      const attrs = {};
      for (const key in this.form) {
        if (this.form[key] !== this.groupSettings[key]) {
          attrs[key] = this.form[key];
        }
      }
      try {
        await esm_default("gi.actions/group/updateSettings", {
          contractID: this.currentGroupId,
          data: attrs
        });
        this.$refs.formMsg.success(L("Your changes were saved!"));
      } catch (e2) {
        console.error("GroupSettings saveSettings() error:", e2);
        this.$refs.formMsg.danger(e2.message);
      }
    },
    handleLeaveGroup() {
      if (this.currentGroupOwnerID === this.ourIdentityContractId) {
        this.openProposal("GroupDeletionModal");
      } else {
        this.openProposal("GroupLeaveModal");
      }
    },
    refreshForm() {
      const { groupName, sharedValues, mincomeCurrency } = this.groupSettings;
      this.form = {
        groupName,
        sharedValues,
        mincomeCurrency
      };
    },
    async togglePublicChannelCreateAllownace(v) {
      const checked = v.target.checked;
      if (this.groupSettings.allowPublicChannels !== checked) {
        await esm_default("gi.actions/group/updateSettings", {
          contractID: this.currentGroupId,
          data: {
            allowPublicChannels: checked
          }
        });
        this.allowPublicChannels = checked;
      }
    }
  },
  validations: {
    form: {
      groupName: {
        [L("This field is required")]: import_validators.required,
        [L("Group name cannot exceed {maxchar} characters", { maxchar: GROUP_NAME_MAX_CHAR })]: (0, import_validators.maxLength)(GROUP_NAME_MAX_CHAR)
      },
      sharedValues: {
        [L("Group description cannot exceed {maxchar} characters", { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: (0, import_validators.maxLength)(GROUP_DESCRIPTION_MAX_CHAR)
      }
    }
  },
  watch: {
    groupSettings() {
      this.refreshForm();
    }
  }
};
var __vue_render__7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "page",
    {
      staticClass: "c-page",
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function() {
            return [_vm._v(_vm._s(_vm.L("Group Settings")))];
          },
          proxy: true
        },
        {
          key: "description",
          fn: function() {
            return [
              _c("p", { staticClass: "p-descritpion has-text-1" }, [
                _vm._v(
                  _vm._s(
                    _vm.L(
                      "Changes to these settings will be visible to all group members"
                    )
                  )
                )
              ])
            ];
          },
          proxy: true
        }
      ])
    },
    [
      _c("avatar-upload", {
        attrs: {
          avatar: _vm.$store.getters.groupSettings.groupPicture,
          sbpParams: _vm.sbpParams,
          "avatar-type": "group"
        }
      }),
      _c("page-section", [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault();
              }
            }
          },
          [
            _c("label", { staticClass: "field" }, [
              _c(
                "div",
                { staticClass: "c-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [_vm._v("Group name")]),
                  _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.nameCharLen,
                      max: _vm.config.nameMaxChar,
                      error: _vm.nameCharLen > _vm.config.nameMaxChar
                    }
                  })
                ],
                1
              ),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.groupName,
                    expression: "form.groupName"
                  },
                  {
                    name: "error",
                    rawName: "v-error:groupName",
                    arg: "groupName"
                  }
                ],
                staticClass: "input",
                class: { error: _vm.$v.form.groupName.$error },
                attrs: {
                  type: "text",
                  maxlength: _vm.config.nameMaxChar,
                  "data-test": "groupName"
                },
                domProps: { value: _vm.form.groupName },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "groupName", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("groupName");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("groupName");
                  }
                }
              })
            ]),
            _c("label", { staticClass: "field" }, [
              _c(
                "div",
                { staticClass: "c-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [
                    _vm._v("About the group")
                  ]),
                  _c("char-length-indicator", {
                    attrs: {
                      "current-length": _vm.descCharLen,
                      max: _vm.config.descMaxChar,
                      error: _vm.descCharLen > _vm.config.descMaxChar
                    }
                  })
                ],
                1
              ),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.sharedValues,
                    expression: "form.sharedValues"
                  },
                  {
                    name: "error",
                    rawName: "v-error:sharedValues",
                    arg: "sharedValues"
                  }
                ],
                staticClass: "textarea",
                class: { error: _vm.$v.form.sharedValues.$error },
                attrs: {
                  maxlength: _vm.config.descMaxChar,
                  "data-test": "sharedValues"
                },
                domProps: { value: _vm.form.sharedValues },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.$set(_vm.form, "sharedValues", $event.target.value);
                    },
                    function($event) {
                      return _vm.debounceField("sharedValues");
                    }
                  ],
                  blur: function($event) {
                    return _vm.updateField("sharedValues");
                  }
                }
              })
            ]),
            _c(
              "label",
              { staticClass: "field" },
              [
                _c(
                  "div",
                  { staticClass: "c-current-label-container" },
                  [
                    _c("i18n", { staticClass: "label" }, [
                      _vm._v("Default currency")
                    ]),
                    _c(
                      "div",
                      { staticClass: "c-coming-soon" },
                      [
                        _c("i", { staticClass: "icon-info-circle" }),
                        _c("i18n", [_vm._v("Feature coming soon")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c("div", { staticClass: "selectbox c-currency" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.mincomeCurrency,
                          expression: "form.mincomeCurrency"
                        }
                      ],
                      staticClass: "select",
                      attrs: { name: "mincomeCurrency", disabled: true },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                            return o.selected;
                          }).map(function(o) {
                            var val = "_value" in o ? o._value : o.value;
                            return val;
                          });
                          _vm.$set(
                            _vm.form,
                            "mincomeCurrency",
                            $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                          );
                        }
                      }
                    },
                    _vm._l(_vm.currencies, function(currency, code) {
                      return _c(
                        "option",
                        { key: code, domProps: { value: code } },
                        [_vm._v(_vm._s(currency.symbolWithCode))]
                      );
                    }),
                    0
                  )
                ]),
                _c("i18n", { staticClass: "helper" }, [
                  _vm._v(
                    "This is the currency that will be displayed for every member of the group, across the platform."
                  )
                ])
              ],
              1
            ),
            _c("banner-scoped", {
              ref: "formMsg",
              attrs: { "data-test": "formMsg", allowA: true }
            }),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "button-submit",
                  {
                    staticClass: "is-success",
                    attrs: { "data-test": "saveBtn" },
                    on: { click: _vm.saveSettings }
                  },
                  [_vm._v(_vm._s(_vm.L("Save changes")))]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _c("roles-and-permissions"),
      _c("invitations-table"),
      _vm.configurePublicChannel ? _c("page-section", { attrs: { title: _vm.L("Public Channels") } }, [
        _c(
          "div",
          {
            staticClass: "c-subcontent",
            attrs: { "data-test": "allowPublicChannels" }
          },
          [
            _c(
              "div",
              { staticClass: "c-text-content" },
              [
                _c(
                  "i18n",
                  { staticClass: "c-smaller-title", attrs: { tag: "h3" } },
                  [_vm._v("Allow members to create public channels")]
                ),
                _c(
                  "i18n",
                  { staticClass: "c-description", attrs: { tag: "p" } },
                  [
                    _vm._v(
                      "Let users create public channels. The data in public channels is intended to be completely public and should be treated with the same care and expectations of privacy that one has with normal social media: that is, you should have zero expectation of any privacy of the content you post to public channels."
                    )
                  ]
                )
              ],
              1
            ),
            _c("div", { staticClass: "switch-wrapper" }, [
              _c("input", {
                staticClass: "switch",
                attrs: { type: "checkbox", name: "switch" },
                domProps: { checked: _vm.allowPublicChannels },
                on: { change: _vm.togglePublicChannelCreateAllownace }
              })
            ])
          ]
        )
      ]) : _vm._e(),
      _c(
        "page-section",
        { attrs: { title: _vm.L("Voting System") } },
        [_c("group-rules-settings")],
        1
      ),
      _c(
        "page-section",
        { attrs: { title: _vm.L("Leave Group") } },
        [
          _c(
            "i18n",
            {
              staticClass: "has-text-1",
              attrs: { tag: "p", args: _vm.LTags("b") }
            },
            [
              _vm._v(
                "This means you will stop having access to the {b_}group chat{_b} (including direct messages to other group members) and {b_}contributions{_b}. Re-joining the group is possible, but requires other members to vote and reach an agreement."
              )
            ]
          ),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  ref: "leave",
                  staticClass: "is-danger is-outlined",
                  attrs: { tag: "button", "data-test": "leaveModalBtn" },
                  on: { click: _vm.handleLeaveGroup }
                },
                [_vm._v("Leave group")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__7 = [];
__vue_render__7._withStripped = true;
var __vue_inject_styles__7 = function(inject) {
  if (!inject) return;
  inject("data-v-6aaa231a_0", { source: ".c-page[data-v-6aaa231a]  .p-main {\n  max-width: 37rem;\n}\n.c-label-container[data-v-6aaa231a] {\n  position: relative;\n  display: flex;\n  column-gap: 0.5rem;\n  align-items: flex-end;\n}\n.c-label-container .label[data-v-6aaa231a] {\n  flex-grow: 1;\n}\n.c-label-container .c-char-len[data-v-6aaa231a] {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len.is-error[data-v-6aaa231a] {\n  color: var(--danger_0);\n}\n.c-current-label-container[data-v-6aaa231a] {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 0.5rem;\n}\n.c-current-label-container .c-coming-soon[data-v-6aaa231a] {\n  color: var(--text_1);\n  margin-bottom: 0.5rem;\n  user-select: none;\n}\n.c-current-label-container .c-coming-soon i[data-v-6aaa231a] {\n  margin-right: 0.2rem;\n}\n@media screen and (min-width: 769px), print {\n.c-currency[data-v-6aaa231a] {\n    width: 50%;\n}\n}\n.p-descritpion[data-v-6aaa231a] {\n  display: none;\n  margin-top: 0.25rem;\n  padding-bottom: 3rem;\n}\n@media screen and (min-width: 1200px) {\n.p-descritpion[data-v-6aaa231a] {\n    display: block;\n}\n}\n.c-subcontent[data-v-6aaa231a] {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n}\n.c-subcontent[data-v-6aaa231a]:last-child {\n  margin-bottom: 1.5rem;\n}\n.c-smaller-title[data-v-6aaa231a] {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n.c-description[data-v-6aaa231a] {\n  margin-top: 0.125rem;\n  font-size: 0.875rem;\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=GroupSettings.vue.map */", map: { "version": 3, "sources": ["frontend/views/pages/GroupSettings.vue", "GroupSettings.vue"], "names": [], "mappings": "AAuSA;EACA,gBAAA;ACtSA;ADySA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,qBAAA;ACtSA;ADwSA;EACA,YAAA;ACtSA;ADySA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,uBAAA;ACvSA;ADySA;EACA,sBAAA;ACvSA;AD4SA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;ACzSA;AD2SA;EACA,oBAAA;EACA,qBAAA;EACA,iBAAA;ACzSA;AD2SA;EACA,oBAAA;ACzSA;AAEA;AD4SA;IAEA,UAAA;AC3SE;AACF;AD8SA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AC3SA;AACA;ADuSA;IAMA,cAAA;AC1SE;AACF;AD6SA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;AC1SA;AD4SA;EACA,qBAAA;AC1SA;AD8SA;EACA,mBAAA;EACA,iBAAA;AC3SA;AD8SA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;AC3SA;;AAEA,4CAA4C", "file": "GroupSettings.vue", "sourcesContent": [`<template lang='pug'>
page.c-page
  template(#title='') {{ L('Group Settings') }}
  template(#description='')
    p.p-descritpion.has-text-1 {{ L('Changes to these settings will be visible to all group members') }}

  avatar-upload(
    :avatar='$store.getters.groupSettings.groupPicture'
    :sbpParams='sbpParams'
    avatar-type='group'
  )

  page-section
    form(@submit.prevent='')
      label.field
        .c-label-container
          i18n.label Group name
          char-length-indicator(
            :current-length='nameCharLen'
            :max='config.nameMaxChar'
            :error='nameCharLen > config.nameMaxChar'
          )

        input.input(
          type='text'
          :class='{ error: $v.form.groupName.$error }'
          :maxlength='config.nameMaxChar'
          v-model='form.groupName'
          @input='debounceField("groupName")'
          @blur='updateField("groupName")'
          v-error:groupName=''
          data-test='groupName'
        )

      label.field
        .c-label-container
          i18n.label About the group
          char-length-indicator(
            :current-length='descCharLen'
            :max='config.descMaxChar'
            :error='descCharLen > config.descMaxChar'
          )

        textarea.textarea(
          :class='{ error: $v.form.sharedValues.$error }'
          :maxlength='config.descMaxChar'
          v-model='form.sharedValues'
          v-error:sharedValues = ''
          @input='debounceField("sharedValues")'
          @blur='updateField("sharedValues")'
          data-test='sharedValues'
        )

      label.field
        .c-current-label-container
          i18n.label Default currency
          .c-coming-soon
            i.icon-info-circle
            i18n Feature coming soon

        .selectbox.c-currency
          select.select(
            name='mincomeCurrency'
            v-model='form.mincomeCurrency'
            :disabled='true'
          )
            option(
              v-for='(currency, code) in currencies'
              :value='code'
              :key='code'
            ) {{ currency.symbolWithCode }}

        i18n.helper This is the currency that will be displayed for every member of the group, across the platform.

      banner-scoped(ref='formMsg' data-test='formMsg' :allowA='true')

      .buttons
        button-submit.is-success(
          @click='saveSettings'
          data-test='saveBtn'
        ) {{ L('Save changes') }}

  roles-and-permissions

  invitations-table

  page-section(
    v-if='configurePublicChannel'
    :title='L("Public Channels")'
  )
    .c-subcontent(data-test='allowPublicChannels')
      .c-text-content
        i18n.c-smaller-title(tag='h3') Allow members to create public channels
        i18n.c-description(tag='p') Let users create public channels. The data in public channels is intended to be completely public and should be treated with the same care and expectations of privacy that one has with normal social media: that is, you should have zero expectation of any privacy of the content you post to public channels.
      .switch-wrapper
        input.switch(
          type='checkbox'
          name='switch'
          :checked='allowPublicChannels'
          @change='togglePublicChannelCreateAllownace'
        )

  page-section(:title='L("Voting System")')
    group-rules-settings

  page-section(:title='L("Leave Group")')
    i18n.has-text-1(
      tag='p'
      :args='LTags("b")'
    ) This means you will stop having access to the {b_}group chat{_b} (including direct messages to other group members) and {b_}contributions{_b}. Re-joining the group is possible, but requires other members to vote and reach an agreement.

    .buttons
      i18n.is-danger.is-outlined(
        tag='button'
        ref='leave'
        @click='handleLeaveGroup'
        data-test='leaveModalBtn'
      ) Leave group

  //- | ::: Delete Group won't be implemented for prototype.
  //- page-section(:title='L("Delete Group")')
  //-   i18n.has-text-1(tag='p') This will delete all the data associated with this group permanently.

  //-   .buttons(v-if='membersLeft === 0')
  //-     i18n.is-danger.is-outlined(
  //-       tag='button'
  //-       ref='delete'
  //-       @click='openProposal("GroupDeletionModal")'
  //-       data-test='deleteBtn'
  //-     ) Delete group

  //-   banner-simple(severity='info' v-else)
  //-     i18n(
  //-       :args='{ count: membersLeft, groupName: groupSettings.groupName, ...LTags("b")}'
  //-     ) You can only delete a group when all the other members have left. {groupName} still has {b_}{count} other members{_b}.
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import validationsDebouncedMixins from '../../../frontend/views/utils/validationsDebouncedMixins.js'
import { mapState, mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import { required, maxLength } from 'vuelidate/lib/validators'
import currencies from '../../../frontend/model/contracts/shared/currencies.js'
import Page from '../../../frontend/views/components/Page.vue'
import PageSection from '../../../frontend/views/components/PageSection.vue'
import AvatarUpload from '../../../frontend/views/components/AvatarUpload.vue'
import InvitationsTable from '../../../frontend/views/containers/group-settings/InvitationsTable.vue'
import RolesAndPermissions from '../../../frontend/views/containers/group-settings/roles-and-permissions/RolesAndPermissions.vue'
import GroupRulesSettings from '../../../frontend/views/containers/group-settings/GroupRulesSettings.vue'
import BannerScoped from '../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../frontend/views/components/CharLengthIndicator.vue'
import { GROUP_NAME_MAX_CHAR, GROUP_DESCRIPTION_MAX_CHAR } from '../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'GroupSettings',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    AvatarUpload,
    BannerScoped,
    ButtonSubmit,
    GroupRulesSettings,
    InvitationsTable,
    RolesAndPermissions,
    CharLengthIndicator,
    Page,
    PageSection
  },
  data () {
    const { groupName, sharedValues, mincomeCurrency } = this.$store.getters.groupSettings
    return {
      form: {
        groupName,
        sharedValues,
        mincomeCurrency
      },
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR,
        descMaxChar: GROUP_DESCRIPTION_MAX_CHAR
      },
      allowPublicChannels: false
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentGroupOwnerID', 'groupSettings', 'ourIdentityContractId']),
    currencies () {
      return currencies
    },
    sbpParams () {
      return {
        selector: 'gi.actions/group/updateSettings',
        contractID: this.$store.state.currentGroupId,
        key: 'groupPicture'
      }
    },
    isGroupAdmin () {
      // TODO: https://github.com/okTurtles/group-income/issues/202
      return false
    },
    configurePublicChannel () {
      // TODO: check if Chelonia server admin allows to create public channels
      return this.isGroupAdmin && false
    },
    nameCharLen () {
      return this.form.groupName?.length || 0
    },
    descCharLen () {
      return this.form.sharedValues?.length || 0
    }
  },
  mounted () {
    this.allowPublicChannels = this.groupSettings.allowPublicChannels
  },
  methods: {
    openProposal (component) {
      sbp('okTurtles.events/emit', OPEN_MODAL, component)
    },
    async saveSettings (e) {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      const attrs = {}

      for (const key in this.form) {
        if (this.form[key] !== this.groupSettings[key]) {
          attrs[key] = this.form[key]
        }
      }

      try {
        await sbp('gi.actions/group/updateSettings', {
          contractID: this.currentGroupId, data: attrs
        })
        this.$refs.formMsg.success(L('Your changes were saved!'))
      } catch (e) {
        console.error('GroupSettings saveSettings() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    },
    handleLeaveGroup () {
      if (this.currentGroupOwnerID === this.ourIdentityContractId) {
        this.openProposal('GroupDeletionModal')
      } else {
        this.openProposal('GroupLeaveModal')
      }
    },
    refreshForm () {
      const { groupName, sharedValues, mincomeCurrency } = this.groupSettings
      this.form = {
        groupName,
        sharedValues,
        mincomeCurrency
      }
    },
    async togglePublicChannelCreateAllownace (v) {
      const checked = v.target.checked
      if (this.groupSettings.allowPublicChannels !== checked) {
        await sbp('gi.actions/group/updateSettings', {
          contractID: this.currentGroupId,
          data: {
            allowPublicChannels: checked
          }
        })
        this.allowPublicChannels = checked
      }
    }
  },
  validations: {
    form: {
      groupName: {
        [L('This field is required')]: required,
        [L('Group name cannot exceed {maxchar} characters', { maxchar: GROUP_NAME_MAX_CHAR })]: maxLength(GROUP_NAME_MAX_CHAR)
      },
      sharedValues: {
        [L('Group description cannot exceed {maxchar} characters', { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: maxLength(GROUP_DESCRIPTION_MAX_CHAR)
      }
    }
  },
  watch: {
    groupSettings () {
      // re-fetch the latest correct values whenever the user switches groups
      this.refreshForm()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-page ::v-deep .p-main {
  max-width: 37rem;
}

.c-label-container {
  position: relative;
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  .label {
    flex-grow: 1;
  }

  .c-char-len {
    display: inline-block;
    line-height: $size_4;
    font-size: $size_5;
    color: $text_1;
    flex-shrink: 0;
    margin-bottom: 0.625rem;

    &.is-error {
      color: $danger_0;
    }
  }
}

.c-current-label-container {
  display: flex;
  align-items: flex-end;
  column-gap: 0.5rem;

  .c-coming-soon {
    color: $text_1;
    margin-bottom: 0.5rem;
    user-select: none;

    i {
      margin-right: 0.2rem;
    }
  }
}

.c-currency {
  @include tablet {
    width: 50%;
  }
}

.p-descritpion {
  display: none;
  margin-top: 0.25rem;
  padding-bottom: 3rem;

  @include desktop {
    display: block;
  }
}

.c-subcontent {
  border: none;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
}

.c-smaller-title {
  font-size: $size_4;
  font-weight: bold;
}

.c-description {
  margin-top: 0.125rem;
  font-size: $size_4;
  color: $text_1;
}
</style>
`, ".c-page ::v-deep .p-main {\n  max-width: 37rem;\n}\n\n.c-label-container {\n  position: relative;\n  display: flex;\n  column-gap: 0.5rem;\n  align-items: flex-end;\n}\n.c-label-container .label {\n  flex-grow: 1;\n}\n.c-label-container .c-char-len {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len.is-error {\n  color: var(--danger_0);\n}\n\n.c-current-label-container {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 0.5rem;\n}\n.c-current-label-container .c-coming-soon {\n  color: var(--text_1);\n  margin-bottom: 0.5rem;\n  user-select: none;\n}\n.c-current-label-container .c-coming-soon i {\n  margin-right: 0.2rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-currency {\n    width: 50%;\n  }\n}\n\n.p-descritpion {\n  display: none;\n  margin-top: 0.25rem;\n  padding-bottom: 3rem;\n}\n@media screen and (min-width: 1200px) {\n  .p-descritpion {\n    display: block;\n  }\n}\n\n.c-subcontent {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n}\n.c-subcontent:last-child {\n  margin-bottom: 1.5rem;\n}\n\n.c-smaller-title {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n\n.c-description {\n  margin-top: 0.125rem;\n  font-size: 0.875rem;\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=GroupSettings.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__7 = "data-v-6aaa231a";
var __vue_module_identifier__7 = void 0;
var __vue_is_functional_template__7 = false;
function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
page.c-page
  template(#title='') {{ L('Group Settings') }}
  template(#description='')
    p.p-descritpion.has-text-1 {{ L('Changes to these settings will be visible to all group members') }}

  avatar-upload(
    :avatar='$store.getters.groupSettings.groupPicture'
    :sbpParams='sbpParams'
    avatar-type='group'
  )

  page-section
    form(@submit.prevent='')
      label.field
        .c-label-container
          i18n.label Group name
          char-length-indicator(
            :current-length='nameCharLen'
            :max='config.nameMaxChar'
            :error='nameCharLen > config.nameMaxChar'
          )

        input.input(
          type='text'
          :class='{ error: $v.form.groupName.$error }'
          :maxlength='config.nameMaxChar'
          v-model='form.groupName'
          @input='debounceField("groupName")'
          @blur='updateField("groupName")'
          v-error:groupName=''
          data-test='groupName'
        )

      label.field
        .c-label-container
          i18n.label About the group
          char-length-indicator(
            :current-length='descCharLen'
            :max='config.descMaxChar'
            :error='descCharLen > config.descMaxChar'
          )

        textarea.textarea(
          :class='{ error: $v.form.sharedValues.$error }'
          :maxlength='config.descMaxChar'
          v-model='form.sharedValues'
          v-error:sharedValues = ''
          @input='debounceField("sharedValues")'
          @blur='updateField("sharedValues")'
          data-test='sharedValues'
        )

      label.field
        .c-current-label-container
          i18n.label Default currency
          .c-coming-soon
            i.icon-info-circle
            i18n Feature coming soon

        .selectbox.c-currency
          select.select(
            name='mincomeCurrency'
            v-model='form.mincomeCurrency'
            :disabled='true'
          )
            option(
              v-for='(currency, code) in currencies'
              :value='code'
              :key='code'
            ) {{ currency.symbolWithCode }}

        i18n.helper This is the currency that will be displayed for every member of the group, across the platform.

      banner-scoped(ref='formMsg' data-test='formMsg' :allowA='true')

      .buttons
        button-submit.is-success(
          @click='saveSettings'
          data-test='saveBtn'
        ) {{ L('Save changes') }}

  roles-and-permissions

  invitations-table

  page-section(
    v-if='configurePublicChannel'
    :title='L("Public Channels")'
  )
    .c-subcontent(data-test='allowPublicChannels')
      .c-text-content
        i18n.c-smaller-title(tag='h3') Allow members to create public channels
        i18n.c-description(tag='p') Let users create public channels. The data in public channels is intended to be completely public and should be treated with the same care and expectations of privacy that one has with normal social media: that is, you should have zero expectation of any privacy of the content you post to public channels.
      .switch-wrapper
        input.switch(
          type='checkbox'
          name='switch'
          :checked='allowPublicChannels'
          @change='togglePublicChannelCreateAllownace'
        )

  page-section(:title='L("Voting System")')
    group-rules-settings

  page-section(:title='L("Leave Group")')
    i18n.has-text-1(
      tag='p'
      :args='LTags("b")'
    ) This means you will stop having access to the {b_}group chat{_b} (including direct messages to other group members) and {b_}contributions{_b}. Re-joining the group is possible, but requires other members to vote and reach an agreement.

    .buttons
      i18n.is-danger.is-outlined(
        tag='button'
        ref='leave'
        @click='handleLeaveGroup'
        data-test='leaveModalBtn'
      ) Leave group

  //- | ::: Delete Group won't be implemented for prototype.
  //- page-section(:title='L("Delete Group")')
  //-   i18n.has-text-1(tag='p') This will delete all the data associated with this group permanently.

  //-   .buttons(v-if='membersLeft === 0')
  //-     i18n.is-danger.is-outlined(
  //-       tag='button'
  //-       ref='delete'
  //-       @click='openProposal("GroupDeletionModal")'
  //-       data-test='deleteBtn'
  //-     ) Delete group

  //-   banner-simple(severity='info' v-else)
  //-     i18n(
  //-       :args='{ count: membersLeft, groupName: groupSettings.groupName, ...LTags("b")}'
  //-     ) You can only delete a group when all the other members have left. {groupName} still has {b_}{count} other members{_b}.
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import validationsDebouncedMixins from '../../../frontend/views/utils/validationsDebouncedMixins.js'
import { mapState, mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import { required, maxLength } from 'vuelidate/lib/validators'
import currencies from '../../../frontend/model/contracts/shared/currencies.js'
import Page from '../../../frontend/views/components/Page.vue'
import PageSection from '../../../frontend/views/components/PageSection.vue'
import AvatarUpload from '../../../frontend/views/components/AvatarUpload.vue'
import InvitationsTable from '../../../frontend/views/containers/group-settings/InvitationsTable.vue'
import RolesAndPermissions from '../../../frontend/views/containers/group-settings/roles-and-permissions/RolesAndPermissions.vue'
import GroupRulesSettings from '../../../frontend/views/containers/group-settings/GroupRulesSettings.vue'
import BannerScoped from '../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'
import CharLengthIndicator from '../../../frontend/views/components/CharLengthIndicator.vue'
import { GROUP_NAME_MAX_CHAR, GROUP_DESCRIPTION_MAX_CHAR } from '../../../frontend/model/contracts/shared/constants.js'
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'GroupSettings',
  mixins: [validationMixin, validationsDebouncedMixins],
  components: {
    AvatarUpload,
    BannerScoped,
    ButtonSubmit,
    GroupRulesSettings,
    InvitationsTable,
    RolesAndPermissions,
    CharLengthIndicator,
    Page,
    PageSection
  },
  data () {
    const { groupName, sharedValues, mincomeCurrency } = this.$store.getters.groupSettings
    return {
      form: {
        groupName,
        sharedValues,
        mincomeCurrency
      },
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR,
        descMaxChar: GROUP_DESCRIPTION_MAX_CHAR
      },
      allowPublicChannels: false
    }
  },
  computed: {
    ...mapState(['currentGroupId']),
    ...mapGetters(['currentGroupOwnerID', 'groupSettings', 'ourIdentityContractId']),
    currencies () {
      return currencies
    },
    sbpParams () {
      return {
        selector: 'gi.actions/group/updateSettings',
        contractID: this.$store.state.currentGroupId,
        key: 'groupPicture'
      }
    },
    isGroupAdmin () {
      // TODO: https://github.com/okTurtles/group-income/issues/202
      return false
    },
    configurePublicChannel () {
      // TODO: check if Chelonia server admin allows to create public channels
      return this.isGroupAdmin && false
    },
    nameCharLen () {
      return this.form.groupName?.length || 0
    },
    descCharLen () {
      return this.form.sharedValues?.length || 0
    }
  },
  mounted () {
    this.allowPublicChannels = this.groupSettings.allowPublicChannels
  },
  methods: {
    openProposal (component) {
      sbp('okTurtles.events/emit', OPEN_MODAL, component)
    },
    async saveSettings (e) {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('The form is invalid.'))
        return
      }
      const attrs = {}

      for (const key in this.form) {
        if (this.form[key] !== this.groupSettings[key]) {
          attrs[key] = this.form[key]
        }
      }

      try {
        await sbp('gi.actions/group/updateSettings', {
          contractID: this.currentGroupId, data: attrs
        })
        this.$refs.formMsg.success(L('Your changes were saved!'))
      } catch (e) {
        console.error('GroupSettings saveSettings() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    },
    handleLeaveGroup () {
      if (this.currentGroupOwnerID === this.ourIdentityContractId) {
        this.openProposal('GroupDeletionModal')
      } else {
        this.openProposal('GroupLeaveModal')
      }
    },
    refreshForm () {
      const { groupName, sharedValues, mincomeCurrency } = this.groupSettings
      this.form = {
        groupName,
        sharedValues,
        mincomeCurrency
      }
    },
    async togglePublicChannelCreateAllownace (v) {
      const checked = v.target.checked
      if (this.groupSettings.allowPublicChannels !== checked) {
        await sbp('gi.actions/group/updateSettings', {
          contractID: this.currentGroupId,
          data: {
            allowPublicChannels: checked
          }
        })
        this.allowPublicChannels = checked
      }
    }
  },
  validations: {
    form: {
      groupName: {
        [L('This field is required')]: required,
        [L('Group name cannot exceed {maxchar} characters', { maxchar: GROUP_NAME_MAX_CHAR })]: maxLength(GROUP_NAME_MAX_CHAR)
      },
      sharedValues: {
        [L('Group description cannot exceed {maxchar} characters', { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: maxLength(GROUP_DESCRIPTION_MAX_CHAR)
      }
    }
  },
  watch: {
    groupSettings () {
      // re-fetch the latest correct values whenever the user switches groups
      this.refreshForm()
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-page ::v-deep .p-main {
  max-width: 37rem;
}

.c-label-container {
  position: relative;
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  .label {
    flex-grow: 1;
  }

  .c-char-len {
    display: inline-block;
    line-height: $size_4;
    font-size: $size_5;
    color: $text_1;
    flex-shrink: 0;
    margin-bottom: 0.625rem;

    &.is-error {
      color: $danger_0;
    }
  }
}

.c-current-label-container {
  display: flex;
  align-items: flex-end;
  column-gap: 0.5rem;

  .c-coming-soon {
    color: $text_1;
    margin-bottom: 0.5rem;
    user-select: none;

    i {
      margin-right: 0.2rem;
    }
  }
}

.c-currency {
  @include tablet {
    width: 50%;
  }
}

.p-descritpion {
  display: none;
  margin-top: 0.25rem;
  padding-bottom: 3rem;

  @include desktop {
    display: block;
  }
}

.c-subcontent {
  border: none;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
}

.c-smaller-title {
  font-size: $size_4;
  font-weight: bold;
}

.c-description {
  margin-top: 0.125rem;
  font-size: $size_4;
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
function __vue_create_injector__7() {
  const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
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
var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7(
  { render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7 },
  __vue_inject_styles__7,
  __vue_script__7,
  __vue_scope_id__7,
  __vue_is_functional_template__7,
  __vue_module_identifier__7,
  false,
  __vue_create_injector__7,
  void 0,
  void 0
);
var GroupSettings_default = __vue_component__7;
export {
  GroupSettings_default as default
};
//# sourceMappingURL=GroupSettings-UVY2S7VH-cached.js.map
