import {
  Search_default
} from "./chunk-UEDKYPAS-cached.js";
import {
  GroupMembersTooltipPending_default
} from "./chunk-ZB6G6ME6-cached.js";
import {
  filterByKeyword
} from "./chunk-PSB6JKOA-cached.js";
import {
  ProfileCard_default
} from "./chunk-GDHKI2YN-cached.js";
import {
  DMMixin_default
} from "./chunk-3T5W4UPP-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  uniq
} from "./chunk-MTWMQLQH-cached.js";
import {
  CHATROOM_PRIVACY_LEVEL,
  PROFILE_STATUS
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  REPLACE_MODAL
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
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/ChatMembersAllModal.vue
var __vue_script__ = {
  name: "ChatMembersAllModal",
  mixins: [
    DMMixin_default
  ],
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    Search: Search_default,
    AvatarUser: AvatarUser_default,
    GroupMembersTooltipPending: GroupMembersTooltipPending_default,
    ProfileCard: ProfileCard_default,
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      searchText: "",
      addedMembers: [],
      canAddMembers: []
    };
  },
  computed: {
    ...mapGetters([
      "currentChatRoomState",
      "groupGeneralChatRoomId",
      "groupMembersSorted",
      "groupChatRooms",
      "chatRoomMembers",
      "chatRoomMembersInSort",
      "globalProfile",
      "isJoinedChatRoom",
      "ourIdentityContractId",
      "ourContactsById",
      "ourContactProfilesById"
    ]),
    ...mapState([
      "currentGroupId"
    ]),
    chatroomActiveMembers() {
      const activeMemberEntries = Object.entries(this.chatRoomMembers).filter(([, joinInfo]) => !joinInfo.hasLeft);
      return Object.fromEntries(activeMemberEntries);
    },
    filteredRecents() {
      return filterByKeyword(this.addedMembers, this.searchText, ["username", "displayName"]);
    },
    filteredOthers() {
      return filterByKeyword(this.canAddMembers, this.searchText, ["username", "displayName"]);
    },
    searchCount() {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length;
    },
    resultsCopy() {
      const args = {
        searchCount: `<strong>${this.searchCount}</strong>`,
        searchTerm: `<strong>${this.searchText}</strong>`,
        ...LTags("strong")
      };
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args);
    },
    attributes() {
      const { name, description, privacyLevel } = this.chatRoomAttribute;
      let title = name;
      if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        title = this.ourGroupDirectMessages[this.currentChatRoomId].title;
      }
      const privacy = {
        [CHATROOM_PRIVACY_LEVEL.PRIVATE]: L("Private channel"),
        [CHATROOM_PRIVACY_LEVEL.GROUP]: L("Group members only"),
        [CHATROOM_PRIVACY_LEVEL.PUBLIC]: L("Public channel")
      }[privacyLevel];
      return { name: title, description, privacy };
    },
    isJoined() {
      return this.isJoinedChatRoom(this.currentChatRoomId);
    },
    chatRoomAttribute() {
      return this.isJoined ? this.currentChatRoomState.attributes : this.groupChatRooms[this.currentChatRoomId];
    },
    chatRoomMembersInOrder() {
      return this.isJoined ? this.chatRoomMembersInSort : this.groupMembersSorted.filter((member) => this.groupChatRooms[this.currentChatRoomId].members[member.contractID]?.status === PROFILE_STATUS.ACTIVE).map((member) => ({ contractID: member.contractID, username: member.username, displayName: member.displayName }));
    }
  },
  mounted() {
    this.initializeMembers();
  },
  methods: {
    initializeMembers() {
      if (this.isGroupDirectMessage()) {
        this.addedMembers = Object.keys(this.chatroomActiveMembers).map((contractID) => {
          const profile = contractID === this.ourIdentityContractId ? this.globalProfile(contractID) : this.ourContactProfilesById[contractID];
          return {
            displayName: profile.displayName,
            username: profile.username,
            contractID,
            departedDate: null
          };
        });
        this.canAddMembers = this.ourContactsById.filter((contractID) => !this.addedMembers.find((mb) => mb.contractID === contractID)).map((contractID) => {
          const profile = this.ourContactProfilesById[contractID] || {};
          return {
            contractID,
            username: profile.username,
            displayName: profile.displayName,
            joinedDate: null
          };
        });
      } else {
        this.addedMembers = this.chatRoomMembersInOrder.filter((member) => !!this.chatroomActiveMembers[member.contractID]).map((member) => ({ ...member, departedDate: null }));
        this.canAddMembers = this.groupMembersSorted.filter((member) => !this.addedMembers.find((mb) => mb.contractID === member.contractID) && !member.invitedBy).map((member) => ({
          username: member.username,
          displayName: member.displayName,
          contractID: member.contractID,
          joinedDate: null
        }));
      }
    },
    localizedName(contractID, username, displayName) {
      const name = displayName || `@${username || contractID}`;
      return contractID === this.ourIdentityContractId ? L("{name} (you)", { name }) : name;
    },
    closeModal() {
      this.$refs.modal.close();
    },
    removable(memberID) {
      if (!this.isJoined) {
        return false;
      }
      const { creatorID } = this.chatRoomAttribute;
      if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
        return false;
      } else if (this.ourIdentityContractId === creatorID) {
        return true;
      } else if (this.ourIdentityContractId === memberID) {
        return true;
      }
      return false;
    },
    async removeMember(contractID, undoing = false) {
      if (!this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(`${contractID} is not part of this chatroom`);
        return;
      }
      if (contractID === this.ourIdentityContractId && !undoing) {
        return esm_default("okTurtles.events/emit", REPLACE_MODAL, "LeaveChannelModal");
      }
      try {
        await esm_default("gi.actions/group/leaveChatRoom", {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            memberID: contractID
          }
        });
        if (undoing) {
          this.canAddMembers = this.canAddMembers.map((member) => member.contractID === contractID ? { ...member, joinedDate: null } : member);
        } else {
          this.addedMembers = this.addedMembers.map((member) => member.contractID === contractID ? { ...member, departedDate: (/* @__PURE__ */ new Date()).toISOString() } : member);
        }
      } catch (e) {
        console.error("ChatMembersAllModal.vue removeMember() error:", e);
      }
    },
    async addToChannel(contractID, undoing = false) {
      if (this.isGroupDirectMessage()) {
        const currentPartnerIDs = this.ourGroupDirectMessages[this.currentChatRoomId].partners.map((p) => p.contractID);
        const memberIDs = uniq(currentPartnerIDs.concat(contractID));
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(memberIDs);
        if (chatRoomID) {
          this.redirect(chatRoomID);
        } else {
          this.createDirectMessage(memberIDs);
        }
        this.closeModal();
        return;
      }
      if (this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(`${contractID} is already joined this chatroom`);
        return;
      }
      try {
        await esm_default("gi.actions/group/joinChatRoom", {
          contractID: this.currentGroupId,
          data: { memberID: contractID, chatRoomID: this.currentChatRoomId }
        });
        if (undoing) {
          this.addedMembers = this.addedMembers.map((member) => member.contractID === contractID ? { ...member, departedDate: null } : member);
        } else {
          this.canAddMembers = this.canAddMembers.map((member) => member.contractID === contractID ? { ...member, joinedDate: (/* @__PURE__ */ new Date()).toISOString() } : member);
        }
      } catch (e) {
        console.error("ChatMembersAllModal.vue addToChannel() error:", e);
      }
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
      attrs: {
        fullscreen: true,
        a11yTitle: _vm.L("Channel members"),
        autofocus: false
      }
    },
    [
      _c("div", { staticClass: "c-container" }, [
        _c("div", { staticClass: "c-header" }, [
          _c(
            "div",
            [
              _c(
                "i18n",
                { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
                [_vm._v("Members")]
              ),
              _c("div", { staticClass: "c-description" }, [
                _vm._v(
                  _vm._s(_vm.attributes.name) + " \u2219 " + _vm._s(_vm.attributes.privacy)
                )
              ])
            ],
            1
          )
        ]),
        _c(
          "div",
          { staticClass: "card c-card" },
          [
            _c("search", {
              attrs: {
                placeholder: _vm.L("Search..."),
                label: _vm.L("Search"),
                autofocus: true
              },
              model: {
                value: _vm.searchText,
                callback: function($$v) {
                  _vm.searchText = $$v;
                },
                expression: "searchText"
              }
            }),
            _vm.searchText && _vm.searchCount > 0 ? _c("div", {
              directives: [
                {
                  name: "safe-html",
                  rawName: "v-safe-html",
                  value: _vm.resultsCopy,
                  expression: "resultsCopy"
                }
              ],
              staticClass: "c-member-count has-text-1",
              attrs: { "data-test": "memberSearchCount" }
            }) : _vm._e(),
            _vm.searchText && _vm.searchCount === 0 ? _c(
              "i18n",
              {
                staticClass: "c-member-count has-text-1",
                attrs: {
                  tag: "div",
                  args: {
                    searchTerm: "<strong>" + _vm.searchText + "</strong>"
                  }
                }
              },
              [
                _vm._v(
                  `Sorry, we couldn't find anyone called "{searchTerm}"`
                )
              ]
            ) : _vm._e(),
            _c(
              "div",
              { staticClass: "c-list-to-add" },
              [
                _c(
                  "div",
                  { staticClass: "is-subtitle" },
                  [
                    _c(
                      "i18n",
                      {
                        attrs: {
                          tag: "h3",
                          args: { nbMembers: _vm.filteredRecents.length }
                        }
                      },
                      [_vm._v("Channel members ({nbMembers})")]
                    )
                  ],
                  1
                ),
                _c(
                  "transition-group",
                  {
                    attrs: {
                      name: "slide-list",
                      tag: "ul",
                      "data-test": "joinedChannelMembersList"
                    }
                  },
                  _vm._l(_vm.filteredRecents, function(ref) {
                    var contractID = ref.contractID;
                    var username = ref.username;
                    var displayName = ref.displayName;
                    var departedDate = ref.departedDate;
                    return _c(
                      "li",
                      { key: contractID, staticClass: "c-search-member" },
                      [
                        _c(
                          "profile-card",
                          {
                            attrs: {
                              contractID,
                              direction: "top-left"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "c-identity" },
                              [
                                _c("avatar-user", {
                                  attrs: { contractID, size: "sm" }
                                }),
                                _c(
                                  "div",
                                  {
                                    staticClass: "c-name",
                                    attrs: { "data-test": "username" }
                                  },
                                  [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.localizedName(
                                              contractID,
                                              username,
                                              displayName
                                            )
                                          )
                                        )
                                      ]),
                                      displayName ? _c(
                                        "div",
                                        {
                                          staticClass: "c-display-name",
                                          attrs: {
                                            "data-test": "profileName"
                                          }
                                        },
                                        [_vm._v("@" + _vm._s(username))]
                                      ) : _vm._e()
                                    ])
                                  ]
                                )
                              ],
                              1
                            ),
                            !_vm.isGroupDirectMessage() && _vm.isJoined && _vm.removable(contractID) ? _c("div", { staticClass: "c-actions" }, [
                              !departedDate ? _c(
                                "button",
                                {
                                  staticClass: "is-icon",
                                  attrs: {
                                    "data-test": "removeMember-" + username
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation();
                                      return _vm.removeMember(
                                        contractID
                                      );
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "icon-times" })]
                              ) : _c(
                                "div",
                                { staticClass: "has-text-success" },
                                [
                                  _c("i", {
                                    staticClass: "icon-check"
                                  }),
                                  _c("i18n", [_vm._v("Removed.")]),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "is-unstyled c-action-undo",
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation();
                                          return _vm.addToChannel(
                                            contractID,
                                            true
                                          );
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.L("Undo")))]
                                  )
                                ],
                                1
                              )
                            ]) : _vm._e()
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  0
                ),
                _vm.isJoined ? [
                  _c(
                    "div",
                    { staticClass: "is-subtitle c-second-section" },
                    [
                      _c(
                        "i18n",
                        {
                          attrs: {
                            tag: "h3",
                            args: { nbMembers: _vm.filteredOthers.length }
                          }
                        },
                        [_vm._v("Others ({nbMembers})")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "transition-group",
                    {
                      attrs: {
                        name: "slide-list",
                        tag: "ul",
                        "data-test": "unjoinedChannelMembersList"
                      }
                    },
                    _vm._l(_vm.filteredOthers, function(ref) {
                      var contractID = ref.contractID;
                      var username = ref.username;
                      var displayName = ref.displayName;
                      var joinedDate = ref.joinedDate;
                      return _c(
                        "li",
                        { key: contractID, staticClass: "c-search-member" },
                        [
                          _c(
                            "profile-card",
                            {
                              attrs: {
                                contractID,
                                direction: "top-left"
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "c-identity" },
                                [
                                  _c("avatar-user", {
                                    attrs: {
                                      contractID,
                                      size: "sm"
                                    }
                                  }),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "c-name",
                                      attrs: { "data-test": "username" }
                                    },
                                    [
                                      _c("span", [
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.localizedName(
                                                contractID,
                                                username,
                                                displayName
                                              )
                                            )
                                          )
                                        ]),
                                        displayName ? _c(
                                          "div",
                                          {
                                            staticClass: "c-display-name",
                                            attrs: {
                                              "data-test": "profileName"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "@" + _vm._s(username)
                                            )
                                          ]
                                        ) : _vm._e()
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _c(
                                "div",
                                { staticClass: "c-actions" },
                                [
                                  !joinedDate ? _c(
                                    "button-submit",
                                    {
                                      staticClass: "button is-outlined is-small",
                                      attrs: {
                                        type: "button",
                                        "data-test": "addToChannel-" + username
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation();
                                          return _vm.addToChannel(
                                            contractID
                                          );
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "i18n",
                                        {
                                          attrs: {
                                            args: _vm.LTags("span")
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Add {span_}to channel{_span}"
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ) : _c(
                                    "div",
                                    { staticClass: "has-text-success" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-check"
                                      }),
                                      _c("i18n", [_vm._v("Added.")]),
                                      !_vm.isGroupDirectMessage() ? _c(
                                        "button-submit",
                                        {
                                          staticClass: "is-unstyled c-action-undo",
                                          on: {
                                            click: function($event) {
                                              $event.stopPropagation();
                                              return _vm.removeMember(
                                                contractID,
                                                true
                                              );
                                            }
                                          }
                                        },
                                        [
                                          _c("i18n", [
                                            _vm._v("Undo")
                                          ])
                                        ],
                                        1
                                      ) : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      );
                    }),
                    0
                  )
                ] : _vm._e()
              ],
              2
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
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-29c94dd8_0", { source: '.c-container[data-v-29c94dd8] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-29c94dd8],\n  .c-container[data-v-29c94dd8] {\n    width: 50rem;\n    max-width: 100%;\n}\n}\n.c-header[data-v-29c94dd8] {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n.c-header[data-v-29c94dd8] {\n    justify-content: left;\n    padding-left: 1rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-29c94dd8] {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n}\n}\n.c-description[data-v-29c94dd8] {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n.c-description[data-v-29c94dd8] {\n    position: absolute;\n    top: 5.5rem;\n}\n}\n.c-card[data-v-29c94dd8] {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-card[data-v-29c94dd8] {\n    margin-top: 3rem;\n}\n}\n.c-member-count[data-v-29c94dd8] {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-identity[data-v-29c94dd8] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.c-name[data-v-29c94dd8] {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-display-name[data-v-29c94dd8] {\n  color: var(--text_1);\n}\n.c-search-member .c-twrapper[data-v-29c94dd8] {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper[data-v-29c94dd8]:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper[data-v-29c94dd8]:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n.slide-list-enter[data-v-29c94dd8],\n.slide-list-leave-to[data-v-29c94dd8] {\n  height: 0;\n  opacity: 0;\n}\n.slide-list-leave-active[data-v-29c94dd8] {\n  overflow: hidden;\n  border-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n[data-v-29c94dd8] .c-actions span {\n    display: none;\n}\n}\n[data-v-29c94dd8] .c-actions i + span {\n  margin-left: 0.3rem;\n}\n[data-v-29c94dd8] .c-actions .c-action-undo {\n  margin-left: 0.5rem;\n  color: var(--text_1);\n}\n[data-v-29c94dd8] .c-actions .c-action-undo:hover,[data-v-29c94dd8] .c-actions .c-action-undo:focus {\n  cursor: pointer;\n  border-bottom: 1px solid var(--text_1);\n}\n@media screen and (min-width: 769px), print {\n.c-action-menu[data-v-29c94dd8] {\n    display: none;\n}\n}\n.is-subtitle[data-v-29c94dd8] {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n.c-second-section[data-v-29c94dd8]::before {\n  content: "";\n  position: absolute;\n  background-color: var(--general_2);\n  height: 1px;\n  width: calc(100% + 6rem);\n  top: 0;\n  left: -3rem;\n}\n\n/*# sourceMappingURL=ChatMembersAllModal.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/chatroom/ChatMembersAllModal.vue", "ChatMembersAllModal.vue"], "names": [], "mappings": "AAsWA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;ACrWA;AAEA;ADsWA;;IAGA,YAAA;IACA,eAAA;ACrWE;AACF;ADwWA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qCAAA;EACA,eAAA;ACrWA;AACA;AD6VA;IAUA,qBAAA;IACA,kBAAA;ACpWE;AACF;AACA;ADuVA;IAeA,iBAAA;IACA,2BAAA;IACA,6BAAA;IACA,SAAA;ACnWE;AACF;ADsWA;EACA,oBAAA;ACnWA;AACA;ADiWA;IAIA,kBAAA;IACA,WAAA;AClWE;AACF;ADqWA;EACA,kBAAA;AClWA;AACA;ADgWA;IAIA,gBAAA;ACjWE;AACF;ADoWA;EACA,kBAAA;EACA,qBAAA;ACjWA;ADoWA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;ACjWA;ADoWA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACjWA;ADoWA;EACA,oBAAA;ACjWA;ADoWA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yCAAA;EACA,uDAAA;ACjWA;ADmWA;EACA,gBAAA;ACjWA;ADoWA;EACA,kCAAA;EACA,eAAA;AClWA;ADsWA;;EAEA,SAAA;EACA,UAAA;ACnWA;ADsWA;EACA,gBAAA;EACA,gBAAA;ACnWA;AAEA;ADqWA;IAEA,aAAA;ACpWE;AACF;ADuWA;EACA,mBAAA;ACrWA;ADwWA;EACA,mBAAA;EACA,oBAAA;ACtWA;ADwWA;EAEA,eAAA;EACA,sCAAA;ACvWA;AAEA;AD0WA;IAEA,aAAA;ACzWE;AACF;AD4WA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;ACzWA;AD4WA;EACA,WAAA;EACA,kBAAA;EACA,kCAAA;EACA,WAAA;EACA,wBAAA;EACA,MAAA;EACA,WAAA;ACzWA;;AAEA,kDAAkD", "file": "ChatMembersAllModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template.has-background(
  ref='modal'
  :fullscreen='true'
  :a11yTitle='L("Channel members")'
  :autofocus='false'
)
  .c-container
    .c-header
      div
        i18n.is-title-2.c-title(
          tag='h2'
        ) Members
        .c-description {{ attributes.name }} \u2219 {{attributes.privacy}}

    .card.c-card
      search(
        :placeholder='L("Search...")'
        :label='L("Search")'
        :autofocus='true'
        v-model='searchText'
      )

      .c-member-count.has-text-1(
        v-if='searchText && searchCount > 0'
        data-test='memberSearchCount'
        v-safe-html='resultsCopy'
      )

      i18n.c-member-count.has-text-1(
        v-if='searchText && searchCount === 0'
        tag='div'
        :args='{searchTerm: \`<strong>\${searchText}</strong>\`}'
      ) Sorry, we couldn't find anyone called "{searchTerm}"

      .c-list-to-add
        .is-subtitle
          i18n(
            tag='h3'
            :args='{  nbMembers: filteredRecents.length }'
          ) Channel members ({nbMembers})

        transition-group(
          name='slide-list'
          tag='ul'
          data-test='joinedChannelMembersList'
        )
          li.c-search-member(
            v-for='{contractID, username, displayName, departedDate} in filteredRecents'
            :key='contractID'
          )
            profile-card(:contractID='contractID' direction='top-left')
              .c-identity
                avatar-user(:contractID='contractID' size='sm')
                .c-name(data-test='username')
                  span
                    strong {{ localizedName(contractID, username, displayName) }}
                    .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}

              .c-actions(v-if='!isGroupDirectMessage() && isJoined && removable(contractID)')
                button.is-icon(
                  v-if='!departedDate'
                  :data-test='"removeMember-" + username'
                  @click.stop='removeMember(contractID)'
                )
                  i.icon-times
                .has-text-success(v-else)
                  i.icon-check
                  i18n Removed.
                  button.is-unstyled.c-action-undo(
                    @click.stop='addToChannel(contractID, true)'
                  ) {{L("Undo")}}

        template(v-if='isJoined')
          .is-subtitle.c-second-section
            i18n(
              tag='h3'
              :args='{ nbMembers: filteredOthers.length }'
            ) Others ({nbMembers})

          transition-group(
            name='slide-list'
            tag='ul'
            data-test='unjoinedChannelMembersList'
          )
            li.c-search-member(
              v-for='{contractID, username, displayName, joinedDate} in filteredOthers'
              :key='contractID'
            )
              profile-card(:contractID='contractID' direction='top-left')
                .c-identity
                  avatar-user(:contractID='contractID' size='sm')
                  .c-name(data-test='username')
                    span
                      strong {{ localizedName(contractID, username, displayName) }}
                      .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}

                .c-actions
                  button-submit.button.is-outlined.is-small(
                    v-if='!joinedDate'
                    type='button'
                    @click.stop='addToChannel(contractID)'
                    :data-test='"addToChannel-" + username'
                  )
                    i18n(:args='LTags("span")') Add {span_}to channel{_span}

                  .has-text-success(v-else)
                    i.icon-check
                    i18n Added.
                    button-submit.is-unstyled.c-action-undo(
                      v-if='!isGroupDirectMessage()'
                      @click.stop='removeMember(contractID, true)'
                    )
                      i18n Undo
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { mapGetters, mapState } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import Search from '../../../../frontend/views/components/Search.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import DMMixin from './DMMixin.js'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { CHATROOM_PRIVACY_LEVEL, PROFILE_STATUS } from '../../../../frontend/model/contracts/shared/constants.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import { uniq } from 'turtledash'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'

export default ({
  name: 'ChatMembersAllModal',
  mixins: [
    DMMixin
  ],
  components: {
    ModalBaseTemplate,
    Search,
    AvatarUser,
    GroupMembersTooltipPending,
    ProfileCard,
    ButtonSubmit
  },
  data () {
    return {
      searchText: '',
      addedMembers: [],
      canAddMembers: []
    }
  },
  computed: {
    ...mapGetters([
      'currentChatRoomState',
      'groupGeneralChatRoomId',
      'groupMembersSorted',
      'groupChatRooms',
      'chatRoomMembers',
      'chatRoomMembersInSort',
      'globalProfile',
      'isJoinedChatRoom',
      'ourIdentityContractId',
      'ourContactsById',
      'ourContactProfilesById'
    ]),
    ...mapState([
      'currentGroupId'
    ]),
    chatroomActiveMembers () {
      const activeMemberEntries = Object.entries(this.chatRoomMembers).filter(([, joinInfo]) => !joinInfo.hasLeft)
      return Object.fromEntries(activeMemberEntries)
    },
    filteredRecents () {
      return filterByKeyword(this.addedMembers, this.searchText, ['username', 'displayName'])
    },
    filteredOthers () {
      return filterByKeyword(this.canAddMembers, this.searchText, ['username', 'displayName'])
    },
    searchCount () {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length
    },
    resultsCopy () {
      const args = {
        searchCount: \`<strong>\${this.searchCount}</strong>\`,
        searchTerm: \`<strong>\${this.searchText}</strong>\`,
        ...LTags('strong')
      }
      return this.searchCount === 1
        ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args)
        : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    },
    attributes () {
      const { name, description, privacyLevel } = this.chatRoomAttribute
      let title = name
      if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        title = this.ourGroupDirectMessages[this.currentChatRoomId].title
      }
      const privacy = {
        [CHATROOM_PRIVACY_LEVEL.PRIVATE]: L('Private channel'),
        [CHATROOM_PRIVACY_LEVEL.GROUP]: L('Group members only'),
        [CHATROOM_PRIVACY_LEVEL.PUBLIC]: L('Public channel')
      }[privacyLevel]
      return { name: title, description, privacy }
    },
    isJoined () {
      return this.isJoinedChatRoom(this.currentChatRoomId)
    },
    chatRoomAttribute () {
      // NOTE: Do not consider to get attributes of private chatroom which the user is not part of
      //       because it couldn't be happened
      // TODO: remove 'users', 'deletedDate' to keep consistency when this.isJoined === false
      return this.isJoined ? this.currentChatRoomState.attributes : this.groupChatRooms[this.currentChatRoomId]
    },
    chatRoomMembersInOrder () {
      return this.isJoined
        ? this.chatRoomMembersInSort
        : this.groupMembersSorted
          .filter(member => this.groupChatRooms[this.currentChatRoomId].members[member.contractID]?.status === PROFILE_STATUS.ACTIVE)
          .map(member => ({ contractID: member.contractID, username: member.username, displayName: member.displayName }))
    }
  },
  mounted () {
    this.initializeMembers()
  },
  methods: {
    initializeMembers () {
      if (this.isGroupDirectMessage()) {
        this.addedMembers = Object.keys(this.chatroomActiveMembers)
          .map(contractID => {
            const profile = contractID === this.ourIdentityContractId ? this.globalProfile(contractID) : this.ourContactProfilesById[contractID]
            return {
              displayName: profile.displayName,
              username: profile.username,
              contractID,
              departedDate: null
            }
          })
        // TODO: every user needs to sync his contacts and also users from group messages
        // https://okturtles.slack.com/archives/C0EH7P20Y/p1669109352107659
        this.canAddMembers = this.ourContactsById
          .filter(contractID => !this.addedMembers.find(mb => mb.contractID === contractID))
          .map(contractID => {
            const profile = this.ourContactProfilesById[contractID] || {}
            return {
              contractID,
              username: profile.username,
              displayName: profile.displayName,
              joinedDate: null
            }
          })
      } else {
        this.addedMembers = this.chatRoomMembersInOrder.filter(member => !!this.chatroomActiveMembers[member.contractID])
          .map(member => ({ ...member, departedDate: null }))
        this.canAddMembers = this.groupMembersSorted
          .filter(member => !this.addedMembers.find(mb => mb.contractID === member.contractID) && !member.invitedBy)
          .map(member => ({
            username: member.username,
            displayName: member.displayName,
            contractID: member.contractID,
            joinedDate: null
          }))
      }
    },
    localizedName (contractID, username, displayName) {
      const name = displayName || \`@\${username || contractID}\`
      return contractID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    closeModal () {
      this.$refs.modal.close()
    },
    removable (memberID: string) {
      if (!this.isJoined) {
        return false
      }
      const { creatorID } = this.chatRoomAttribute
      if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
        return false
      } else if (this.ourIdentityContractId === creatorID) {
        return true
      } else if (this.ourIdentityContractId === memberID) {
        return true
      }
      return false
    },
    async removeMember (contractID: string, undoing = false) {
      if (!this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(\`\${contractID} is not part of this chatroom\`)
        return
      }

      if (contractID === this.ourIdentityContractId && !undoing) {
        // If it's the current user,open the 'Leave-channel' modal instead.
        return sbp('okTurtles.events/emit', REPLACE_MODAL, 'LeaveChannelModal')
      }

      try {
        await sbp('gi.actions/group/leaveChatRoom', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            memberID: contractID
          }
        })
        if (undoing) {
          this.canAddMembers = this.canAddMembers.map(member =>
            member.contractID === contractID ? { ...member, joinedDate: null } : member)
        } else {
          this.addedMembers = this.addedMembers.map(member =>
            member.contractID === contractID ? { ...member, departedDate: new Date().toISOString() } : member)
        }
      } catch (e) {
        console.error('ChatMembersAllModal.vue removeMember() error:', e)
      }
    },
    async addToChannel (contractID: string, undoing = false) {
      if (this.isGroupDirectMessage()) {
        const currentPartnerIDs = this.ourGroupDirectMessages[this.currentChatRoomId].partners.map(p => p.contractID)
        const memberIDs = uniq(currentPartnerIDs.concat(contractID))
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(memberIDs)
        if (chatRoomID) {
          this.redirect(chatRoomID)
        } else {
          this.createDirectMessage(memberIDs)
        }
        this.closeModal()

        return
      }

      if (this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(\`\${contractID} is already joined this chatroom\`)
        return
      }

      try {
        await sbp('gi.actions/group/joinChatRoom', {
          contractID: this.currentGroupId,
          data: { memberID: contractID, chatRoomID: this.currentChatRoomId }
        })
        if (undoing) {
          this.addedMembers = this.addedMembers.map(member =>
            member.contractID === contractID ? { ...member, departedDate: null } : member)
        } else {
          this.canAddMembers = this.canAddMembers.map(member =>
            member.contractID === contractID ? { ...member, joinedDate: new Date().toISOString() } : member)
        }
      } catch (e) {
        console.error('ChatMembersAllModal.vue addToChannel() error:', e)
      }
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

.c-card {
  margin-top: 1.5rem;

  @include phone {
    margin-top: 3rem;
  }
}

.c-member-count {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.c-identity {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.c-name {
  margin: 0 0.5rem 0 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-display-name {
  color: var(--text_1);
}

.c-search-member .c-twrapper {
  display: flex;
  height: 4.5rem;
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $general_0;
  transition: opacity ease-in 0.25s, height ease-in 0.25s;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: $general_1;
    cursor: pointer;
  }
}

.slide-list-enter,
.slide-list-leave-to {
  height: 0;
  opacity: 0;
}

.slide-list-leave-active {
  overflow: hidden;
  border-bottom: 0;
}

::v-deep .c-actions {
  span {
    @include phone {
      display: none;
    }
  }

  i + span {
    margin-left: 0.3rem;
  }

  .c-action-undo {
    margin-left: 0.5rem;
    color: $text_1;

    &:hover,
    &:focus {
      cursor: pointer;
      border-bottom: 1px solid $text_1;
    }
  }
}

.c-action-menu {
  @include tablet {
    display: none;
  }
}

.is-subtitle {
  display: flex;
  margin-top: 1.875rem;
  margin-bottom: 0.5rem;
}

.c-second-section::before {
  content: "";
  position: absolute;
  background-color: $general_2;
  height: 1px;
  width: calc(100% + 6rem);
  top: 0;
  left: -3rem;
}
</style>
`, '.c-container {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n\n@media screen and (min-width: 769px), print {\n  .c-header,\n  .c-container {\n    width: 50rem;\n    max-width: 100%;\n  }\n}\n\n.c-header {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-header {\n    justify-content: left;\n    padding-left: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n  }\n}\n\n.c-description {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n  .c-description {\n    position: absolute;\n    top: 5.5rem;\n  }\n}\n\n.c-card {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-card {\n    margin-top: 3rem;\n  }\n}\n\n.c-member-count {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-identity {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.c-name {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-display-name {\n  color: var(--text_1);\n}\n\n.c-search-member .c-twrapper {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n\n.slide-list-enter,\n.slide-list-leave-to {\n  height: 0;\n  opacity: 0;\n}\n\n.slide-list-leave-active {\n  overflow: hidden;\n  border-bottom: 0;\n}\n\n@media screen and (max-width: 768px) {\n  ::v-deep .c-actions span {\n    display: none;\n  }\n}\n::v-deep .c-actions i + span {\n  margin-left: 0.3rem;\n}\n::v-deep .c-actions .c-action-undo {\n  margin-left: 0.5rem;\n  color: var(--text_1);\n}\n::v-deep .c-actions .c-action-undo:hover, ::v-deep .c-actions .c-action-undo:focus {\n  cursor: pointer;\n  border-bottom: 1px solid var(--text_1);\n}\n\n@media screen and (min-width: 769px), print {\n  .c-action-menu {\n    display: none;\n  }\n}\n\n.is-subtitle {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n\n.c-second-section::before {\n  content: "";\n  position: absolute;\n  background-color: var(--general_2);\n  height: 1px;\n  width: calc(100% + 6rem);\n  top: 0;\n  left: -3rem;\n}\n\n/*# sourceMappingURL=ChatMembersAllModal.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-29c94dd8";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template.has-background(
  ref='modal'
  :fullscreen='true'
  :a11yTitle='L("Channel members")'
  :autofocus='false'
)
  .c-container
    .c-header
      div
        i18n.is-title-2.c-title(
          tag='h2'
        ) Members
        .c-description {{ attributes.name }} \u2219 {{attributes.privacy}}

    .card.c-card
      search(
        :placeholder='L("Search...")'
        :label='L("Search")'
        :autofocus='true'
        v-model='searchText'
      )

      .c-member-count.has-text-1(
        v-if='searchText && searchCount > 0'
        data-test='memberSearchCount'
        v-safe-html='resultsCopy'
      )

      i18n.c-member-count.has-text-1(
        v-if='searchText && searchCount === 0'
        tag='div'
        :args='{searchTerm: \`<strong>\${searchText}</strong>\`}'
      ) Sorry, we couldn't find anyone called "{searchTerm}"

      .c-list-to-add
        .is-subtitle
          i18n(
            tag='h3'
            :args='{  nbMembers: filteredRecents.length }'
          ) Channel members ({nbMembers})

        transition-group(
          name='slide-list'
          tag='ul'
          data-test='joinedChannelMembersList'
        )
          li.c-search-member(
            v-for='{contractID, username, displayName, departedDate} in filteredRecents'
            :key='contractID'
          )
            profile-card(:contractID='contractID' direction='top-left')
              .c-identity
                avatar-user(:contractID='contractID' size='sm')
                .c-name(data-test='username')
                  span
                    strong {{ localizedName(contractID, username, displayName) }}
                    .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}

              .c-actions(v-if='!isGroupDirectMessage() && isJoined && removable(contractID)')
                button.is-icon(
                  v-if='!departedDate'
                  :data-test='"removeMember-" + username'
                  @click.stop='removeMember(contractID)'
                )
                  i.icon-times
                .has-text-success(v-else)
                  i.icon-check
                  i18n Removed.
                  button.is-unstyled.c-action-undo(
                    @click.stop='addToChannel(contractID, true)'
                  ) {{L("Undo")}}

        template(v-if='isJoined')
          .is-subtitle.c-second-section
            i18n(
              tag='h3'
              :args='{ nbMembers: filteredOthers.length }'
            ) Others ({nbMembers})

          transition-group(
            name='slide-list'
            tag='ul'
            data-test='unjoinedChannelMembersList'
          )
            li.c-search-member(
              v-for='{contractID, username, displayName, joinedDate} in filteredOthers'
              :key='contractID'
            )
              profile-card(:contractID='contractID' direction='top-left')
                .c-identity
                  avatar-user(:contractID='contractID' size='sm')
                  .c-name(data-test='username')
                    span
                      strong {{ localizedName(contractID, username, displayName) }}
                      .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}

                .c-actions
                  button-submit.button.is-outlined.is-small(
                    v-if='!joinedDate'
                    type='button'
                    @click.stop='addToChannel(contractID)'
                    :data-test='"addToChannel-" + username'
                  )
                    i18n(:args='LTags("span")') Add {span_}to channel{_span}

                  .has-text-success(v-else)
                    i.icon-check
                    i18n Added.
                    button-submit.is-unstyled.c-action-undo(
                      v-if='!isGroupDirectMessage()'
                      @click.stop='removeMember(contractID, true)'
                    )
                      i18n Undo
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { mapGetters, mapState } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import Search from '../../../../frontend/views/components/Search.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import DMMixin from './DMMixin.js'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { CHATROOM_PRIVACY_LEVEL, PROFILE_STATUS } from '../../../../frontend/model/contracts/shared/constants.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import { uniq } from 'turtledash'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'

export default ({
  name: 'ChatMembersAllModal',
  mixins: [
    DMMixin
  ],
  components: {
    ModalBaseTemplate,
    Search,
    AvatarUser,
    GroupMembersTooltipPending,
    ProfileCard,
    ButtonSubmit
  },
  data () {
    return {
      searchText: '',
      addedMembers: [],
      canAddMembers: []
    }
  },
  computed: {
    ...mapGetters([
      'currentChatRoomState',
      'groupGeneralChatRoomId',
      'groupMembersSorted',
      'groupChatRooms',
      'chatRoomMembers',
      'chatRoomMembersInSort',
      'globalProfile',
      'isJoinedChatRoom',
      'ourIdentityContractId',
      'ourContactsById',
      'ourContactProfilesById'
    ]),
    ...mapState([
      'currentGroupId'
    ]),
    chatroomActiveMembers () {
      const activeMemberEntries = Object.entries(this.chatRoomMembers).filter(([, joinInfo]) => !joinInfo.hasLeft)
      return Object.fromEntries(activeMemberEntries)
    },
    filteredRecents () {
      return filterByKeyword(this.addedMembers, this.searchText, ['username', 'displayName'])
    },
    filteredOthers () {
      return filterByKeyword(this.canAddMembers, this.searchText, ['username', 'displayName'])
    },
    searchCount () {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length
    },
    resultsCopy () {
      const args = {
        searchCount: \`<strong>\${this.searchCount}</strong>\`,
        searchTerm: \`<strong>\${this.searchText}</strong>\`,
        ...LTags('strong')
      }
      return this.searchCount === 1
        ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args)
        : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    },
    attributes () {
      const { name, description, privacyLevel } = this.chatRoomAttribute
      let title = name
      if (this.isGroupDirectMessage(this.currentChatRoomId)) {
        title = this.ourGroupDirectMessages[this.currentChatRoomId].title
      }
      const privacy = {
        [CHATROOM_PRIVACY_LEVEL.PRIVATE]: L('Private channel'),
        [CHATROOM_PRIVACY_LEVEL.GROUP]: L('Group members only'),
        [CHATROOM_PRIVACY_LEVEL.PUBLIC]: L('Public channel')
      }[privacyLevel]
      return { name: title, description, privacy }
    },
    isJoined () {
      return this.isJoinedChatRoom(this.currentChatRoomId)
    },
    chatRoomAttribute () {
      // NOTE: Do not consider to get attributes of private chatroom which the user is not part of
      //       because it couldn't be happened
      // TODO: remove 'users', 'deletedDate' to keep consistency when this.isJoined === false
      return this.isJoined ? this.currentChatRoomState.attributes : this.groupChatRooms[this.currentChatRoomId]
    },
    chatRoomMembersInOrder () {
      return this.isJoined
        ? this.chatRoomMembersInSort
        : this.groupMembersSorted
          .filter(member => this.groupChatRooms[this.currentChatRoomId].members[member.contractID]?.status === PROFILE_STATUS.ACTIVE)
          .map(member => ({ contractID: member.contractID, username: member.username, displayName: member.displayName }))
    }
  },
  mounted () {
    this.initializeMembers()
  },
  methods: {
    initializeMembers () {
      if (this.isGroupDirectMessage()) {
        this.addedMembers = Object.keys(this.chatroomActiveMembers)
          .map(contractID => {
            const profile = contractID === this.ourIdentityContractId ? this.globalProfile(contractID) : this.ourContactProfilesById[contractID]
            return {
              displayName: profile.displayName,
              username: profile.username,
              contractID,
              departedDate: null
            }
          })
        // TODO: every user needs to sync his contacts and also users from group messages
        // https://okturtles.slack.com/archives/C0EH7P20Y/p1669109352107659
        this.canAddMembers = this.ourContactsById
          .filter(contractID => !this.addedMembers.find(mb => mb.contractID === contractID))
          .map(contractID => {
            const profile = this.ourContactProfilesById[contractID] || {}
            return {
              contractID,
              username: profile.username,
              displayName: profile.displayName,
              joinedDate: null
            }
          })
      } else {
        this.addedMembers = this.chatRoomMembersInOrder.filter(member => !!this.chatroomActiveMembers[member.contractID])
          .map(member => ({ ...member, departedDate: null }))
        this.canAddMembers = this.groupMembersSorted
          .filter(member => !this.addedMembers.find(mb => mb.contractID === member.contractID) && !member.invitedBy)
          .map(member => ({
            username: member.username,
            displayName: member.displayName,
            contractID: member.contractID,
            joinedDate: null
          }))
      }
    },
    localizedName (contractID, username, displayName) {
      const name = displayName || \`@\${username || contractID}\`
      return contractID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    closeModal () {
      this.$refs.modal.close()
    },
    removable (memberID: string) {
      if (!this.isJoined) {
        return false
      }
      const { creatorID } = this.chatRoomAttribute
      if (this.groupGeneralChatRoomId === this.currentChatRoomId) {
        return false
      } else if (this.ourIdentityContractId === creatorID) {
        return true
      } else if (this.ourIdentityContractId === memberID) {
        return true
      }
      return false
    },
    async removeMember (contractID: string, undoing = false) {
      if (!this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(\`\${contractID} is not part of this chatroom\`)
        return
      }

      if (contractID === this.ourIdentityContractId && !undoing) {
        // If it's the current user,open the 'Leave-channel' modal instead.
        return sbp('okTurtles.events/emit', REPLACE_MODAL, 'LeaveChannelModal')
      }

      try {
        await sbp('gi.actions/group/leaveChatRoom', {
          contractID: this.currentGroupId,
          data: {
            chatRoomID: this.currentChatRoomId,
            memberID: contractID
          }
        })
        if (undoing) {
          this.canAddMembers = this.canAddMembers.map(member =>
            member.contractID === contractID ? { ...member, joinedDate: null } : member)
        } else {
          this.addedMembers = this.addedMembers.map(member =>
            member.contractID === contractID ? { ...member, departedDate: new Date().toISOString() } : member)
        }
      } catch (e) {
        console.error('ChatMembersAllModal.vue removeMember() error:', e)
      }
    },
    async addToChannel (contractID: string, undoing = false) {
      if (this.isGroupDirectMessage()) {
        const currentPartnerIDs = this.ourGroupDirectMessages[this.currentChatRoomId].partners.map(p => p.contractID)
        const memberIDs = uniq(currentPartnerIDs.concat(contractID))
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(memberIDs)
        if (chatRoomID) {
          this.redirect(chatRoomID)
        } else {
          this.createDirectMessage(memberIDs)
        }
        this.closeModal()

        return
      }

      if (this.isJoinedChatRoom(this.currentChatRoomId, contractID)) {
        console.log(\`\${contractID} is already joined this chatroom\`)
        return
      }

      try {
        await sbp('gi.actions/group/joinChatRoom', {
          contractID: this.currentGroupId,
          data: { memberID: contractID, chatRoomID: this.currentChatRoomId }
        })
        if (undoing) {
          this.addedMembers = this.addedMembers.map(member =>
            member.contractID === contractID ? { ...member, departedDate: null } : member)
        } else {
          this.canAddMembers = this.canAddMembers.map(member =>
            member.contractID === contractID ? { ...member, joinedDate: new Date().toISOString() } : member)
        }
      } catch (e) {
        console.error('ChatMembersAllModal.vue addToChannel() error:', e)
      }
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

.c-card {
  margin-top: 1.5rem;

  @include phone {
    margin-top: 3rem;
  }
}

.c-member-count {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.c-identity {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.c-name {
  margin: 0 0.5rem 0 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-display-name {
  color: var(--text_1);
}

.c-search-member .c-twrapper {
  display: flex;
  height: 4.5rem;
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $general_0;
  transition: opacity ease-in 0.25s, height ease-in 0.25s;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: $general_1;
    cursor: pointer;
  }
}

.slide-list-enter,
.slide-list-leave-to {
  height: 0;
  opacity: 0;
}

.slide-list-leave-active {
  overflow: hidden;
  border-bottom: 0;
}

::v-deep .c-actions {
  span {
    @include phone {
      display: none;
    }
  }

  i + span {
    margin-left: 0.3rem;
  }

  .c-action-undo {
    margin-left: 0.5rem;
    color: $text_1;

    &:hover,
    &:focus {
      cursor: pointer;
      border-bottom: 1px solid $text_1;
    }
  }
}

.c-action-menu {
  @include tablet {
    display: none;
  }
}

.is-subtitle {
  display: flex;
  margin-top: 1.875rem;
  margin-bottom: 0.5rem;
}

.c-second-section::before {
  content: "";
  position: absolute;
  background-color: $general_2;
  height: 1px;
  width: calc(100% + 6rem);
  top: 0;
  left: -3rem;
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
var ChatMembersAllModal_default = __vue_component__;
export {
  ChatMembersAllModal_default as default
};
//# sourceMappingURL=ChatMembersAllModal-4S4XJB6N-cached.js.map
