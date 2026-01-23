import {
  UsersSelector_default
} from "./chunk-GN75GYHU-cached.js";
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
import "./chunk-YUM5UY76-cached.js";
import {
  difference
} from "./chunk-MTWMQLQH-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LTags
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/NewDirectMessageModal.vue
var __vue_script__ = {
  name: "NewDirectMessageModal",
  mixins: [
    DMMixin_default
  ],
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    UsersSelector: UsersSelector_default,
    ProfileCard: ProfileCard_default,
    AvatarUser: AvatarUser_default
  },
  data() {
    return {
      searchText: "",
      selections: []
    };
  },
  computed: {
    ...mapGetters([
      "userDisplayNameFromID",
      "usernameFromID",
      "ourUsername",
      "ourContactProfilesById",
      "ourIdentityContractId",
      "currentGroupContactProfilesById"
    ]),
    ourNewDMContacts() {
      const currentGroupUserIds = Object.keys(this.currentGroupContactProfilesById);
      return currentGroupUserIds.filter((userID) => {
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(userID);
        return !chatRoomID || !this.ourGroupDirectMessages[chatRoomID].visible;
      }).map((userID) => this.currentGroupContactProfilesById[userID]);
    },
    ourRecentConversations() {
      return Object.keys(this.ourGroupDirectMessages).filter((chatRoomID) => this.ourGroupDirectMessages[chatRoomID].visible).map((chatRoomID) => {
        const { title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself } = this.ourGroupDirectMessages[chatRoomID];
        return { chatRoomID, title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself };
      }).sort((former, latter) => {
        const diff = former.lastMsgTimeStamp - latter.lastMsgTimeStamp;
        return diff > 0 ? -1 : diff < 0 ? 1 : former.title > latter.title ? 1 : -1;
      });
    },
    filteredRecents() {
      if (!this.searchText && !this.selections.length) {
        return this.ourRecentConversations;
      }
      return this.ourRecentConversations.filter(({ title, partners, isDMToMyself }) => {
        const partnerIDs = partners.map((p) => p.contractID);
        const upperCasedSearchText = String(this.searchText).toUpperCase().normalize();
        if (!isDMToMyself && !difference(partnerIDs, this.selections).length) {
          return false;
        } else if (String(title).toUpperCase().normalize().includes(upperCasedSearchText)) {
          return true;
        } else {
          const userKeywords = upperCasedSearchText.replace(/\s/g, "").split(",");
          return userKeywords.reduce((found, userKeyword, index, arr) => {
            const isLastUserKeyword = index === arr.length - 1;
            let currentFound = false;
            if (isLastUserKeyword) {
              currentFound = partners.findIndex((p) => {
                return p.username.toUpperCase().normalize().includes(userKeyword) || p.displayName.toUpperCase().normalize().includes(userKeyword);
              }) >= 0;
            } else {
              currentFound = partners.findIndex((p) => {
                return p.username.toUpperCase().normalize() === userKeyword || p.displayName.toUpperCase().normalize() === userKeyword;
              }) >= 0;
            }
            return found && currentFound;
          }, true);
        }
      }).sort((a, b) => a.partners.length > b.partners.length ? 1 : -1);
    },
    hasDMToMyself() {
      return !!this.filteredRecents.length && this.filteredRecents.some((convo) => convo.isDMToMyself);
    },
    filteredOthers() {
      return filterByKeyword(this.ourNewDMContacts, this.searchText, ["username", "displayName"]).filter((profile) => !this.selections.includes(profile.contractID));
    },
    searchCount() {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length;
    },
    resultsCopy() {
      const args = { searchCount: `<strong>${this.searchCount}</strong>`, searchTerm: `<strong>${this.searchText}</strong>`, ...LTags("strong") };
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args);
    }
  },
  methods: {
    localizedName(username, displayName) {
      const name = displayName || `@${username}`;
      return username === this.ourUsername ? L("{name} (you)", { name }) : name;
    },
    onChangeKeyword(keyword) {
      this.searchText = keyword;
    },
    onAddSelection(contractIDs) {
      if (typeof contractIDs === "string") {
        contractIDs = [contractIDs];
      }
      for (const contractID of contractIDs) {
        if (!this.selections.includes(contractID)) {
          this.selections.push(contractID);
        }
      }
    },
    onRecentConvoSelection(convo) {
      const { isDMToMyself, partners } = convo;
      if (isDMToMyself) {
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.ourIdentityContractId);
        this.redirect(chatRoomID);
      } else {
        this.onAddSelection(partners.map((p) => p.contractID));
      }
    },
    onRemoveSelection(contractID) {
      this.selections = this.selections.filter((cID) => cID !== contractID);
    },
    async onSubmit() {
      if (this.selections.length) {
        const isDMToMyself = this.selections.length === 1 && this.selections[0] === this.ourIdentityContractId;
        const memberIds = isDMToMyself ? this.selections : this.selections.filter((id) => id !== this.ourIdentityContractId);
        const existingChatRoomID = this.ourGroupDirectMessageFromUserIds(memberIds);
        if (existingChatRoomID) {
          this.redirect(existingChatRoomID);
        } else {
          await this.createDirectMessage(memberIds);
        }
      } else if (this.searchText) {
        if (this.filteredRecents.length) {
          this.redirect(this.filteredRecents[0].chatRoomID);
        } else if (this.filteredOthers.length) {
          await this.createDirectMessage(this.filteredOthers[0].contractID);
        }
      }
      this.closeModal();
    },
    closeModal() {
      esm_default("okTurtles.events/emit", CLOSE_MODAL);
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
      staticClass: "has-background",
      attrs: {
        fullscreen: true,
        a11yTitle: _vm.L("New Direct Message"),
        autofocus: false
      }
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
              [_vm._v("Direct Messages")]
            )
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "card c-card" },
          [
            _c("users-selector", {
              attrs: {
                label: _vm.L("Search"),
                userIDs: _vm.selections,
                autofocus: true
              },
              on: {
                change: _vm.onChangeKeyword,
                remove: _vm.onRemoveSelection,
                submit: _vm.onSubmit
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
                  [_vm._v("Recent Conversations ({nbMembers})")]
                )
              ],
              1
            ),
            _c(
              "transition-group",
              {
                attrs: {
                  name: "slide-list",
                  "data-test": "recentConversations",
                  tag: "ul"
                }
              },
              _vm._l(_vm.filteredRecents, function(ref, index) {
                var chatRoomID = ref.chatRoomID;
                var partners = ref.partners;
                var members = ref.members;
                var lastJoinedPartner = ref.lastJoinedPartner;
                var title = ref.title;
                var picture = ref.picture;
                var isDMToMyself = ref.isDMToMyself;
                return _c(
                  "li",
                  {
                    key: chatRoomID,
                    staticClass: "c-search-member",
                    on: {
                      click: function($event) {
                        return _vm.onRecentConvoSelection(
                          _vm.filteredRecents[index]
                        );
                      }
                    }
                  },
                  [
                    _c(
                      "profile-card",
                      {
                        attrs: {
                          contractID: lastJoinedPartner,
                          deactivated: "deactivated",
                          direction: "top-left"
                        }
                      },
                      [
                        _c("div", { staticClass: "c-identity" }, [
                          _c(
                            "div",
                            { staticClass: "picture-wrapper" },
                            [
                              _c("avatar-user", {
                                attrs: {
                                  contractID: lastJoinedPartner,
                                  size: "sm"
                                }
                              }),
                              partners.length > 1 ? _c("div", { staticClass: "c-badge" }, [
                                _vm._v(_vm._s(partners.length))
                              ]) : _vm._e()
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: "c-name",
                              attrs: { "data-test": "lastJoinedPartner" }
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("strong", [_vm._v(_vm._s(title))]),
                                  isDMToMyself ? _c(
                                    "i18n",
                                    {
                                      staticClass: "c-display-name",
                                      attrs: { "data-test": "profileName" }
                                    },
                                    [_vm._v("(you)")]
                                  ) : title !== lastJoinedPartner ? _c(
                                    "div",
                                    {
                                      staticClass: "c-display-name",
                                      attrs: { "data-test": "profileName" }
                                    },
                                    [
                                      _vm._v(
                                        "@" + _vm._s(
                                          partners.map(function(p) {
                                            return p.username;
                                          }).join(", @")
                                        )
                                      )
                                    ]
                                  ) : _vm._e()
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                );
              }),
              0
            ),
            _c(
              "div",
              { staticClass: "is-subtitle" },
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
                attrs: { name: "slide-list", "data-test": "others", tag: "ul" }
              },
              _vm._l(_vm.filteredOthers, function(ref) {
                var contractID = ref.contractID;
                var username = ref.username;
                var displayName = ref.displayName;
                return _c(
                  "li",
                  {
                    key: username,
                    staticClass: "c-search-member",
                    on: {
                      click: function($event) {
                        return _vm.onAddSelection(contractID);
                      }
                    }
                  },
                  [
                    _c(
                      "profile-card",
                      {
                        attrs: {
                          contractID,
                          deactivated: "deactivated",
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
                                        _vm.localizedName(username, displayName)
                                      )
                                    )
                                  ]),
                                  displayName ? _c(
                                    "div",
                                    {
                                      staticClass: "c-display-name",
                                      attrs: { "data-test": "profileName" }
                                    },
                                    [_vm._v("@" + _vm._s(username))]
                                  ) : _vm._e()
                                ])
                              ]
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
  inject("data-v-6dd597dc_0", { source: ".c-container[data-v-6dd597dc] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-6dd597dc],\n  .c-container[data-v-6dd597dc] {\n    width: 50rem;\n    max-width: 100%;\n}\n}\n.c-header[data-v-6dd597dc] {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-6dd597dc] {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n}\n}\n.c-card[data-v-6dd597dc] {\n  margin-top: 1.5rem;\n}\n.c-member-count[data-v-6dd597dc] {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-identity[data-v-6dd597dc] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.c-name[data-v-6dd597dc] {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-display-name[data-v-6dd597dc] {\n  display: block;\n  color: var(--text_1);\n}\n.c-search-member .c-twrapper[data-v-6dd597dc] {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper[data-v-6dd597dc]:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper[data-v-6dd597dc]:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n.slide-list-enter[data-v-6dd597dc],\n.slide-list-leave-to[data-v-6dd597dc] {\n  height: 0;\n  opacity: 0;\n}\n.slide-list-leave-active[data-v-6dd597dc] {\n  overflow: hidden;\n  border-bottom: 0;\n}\n.c-actions-buttons[data-v-6dd597dc] {\n  display: none;\n  margin-top: 0;\n}\n.c-actions-buttons i[data-v-6dd597dc] {\n  margin-right: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-actions-buttons[data-v-6dd597dc] {\n    display: block;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-action-menu[data-v-6dd597dc] {\n    display: none;\n}\n}\n.is-subtitle[data-v-6dd597dc] {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n.picture-wrapper[data-v-6dd597dc] {\n  position: relative;\n  min-width: 2rem;\n  margin-right: 0.5rem;\n}\n.c-badge[data-v-6dd597dc] {\n  position: absolute;\n  bottom: -0.25rem;\n  right: 0;\n  border-radius: 0.5rem;\n  background-color: var(--general_0);\n  color: var(--text_0);\n  width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n/*# sourceMappingURL=NewDirectMessageModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/chatroom/NewDirectMessageModal.vue", "NewDirectMessageModal.vue"], "names": [], "mappings": "AAuQA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;ACtQA;AAEA;ADuQA;;IAGA,YAAA;IACA,eAAA;ACtQE;AACF;ADyQA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qCAAA;EACA,eAAA;ACtQA;AACA;AD8PA;IAUA,iBAAA;IACA,2BAAA;IACA,6BAAA;IACA,SAAA;ACrQE;AACF;ADwQA;EACA,kBAAA;ACrQA;ADwQA;EACA,kBAAA;EACA,qBAAA;ACrQA;ADwQA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;ACrQA;ADwQA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACrQA;ADwQA;EACA,cAAA;EACA,oBAAA;ACrQA;ADwQA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yCAAA;EACA,uDAAA;ACrQA;ADuQA;EACA,gBAAA;ACrQA;ADwQA;EACA,kCAAA;EACA,eAAA;ACtQA;AD0QA;;EAEA,SAAA;EACA,UAAA;ACvQA;AD0QA;EACA,gBAAA;EACA,gBAAA;ACvQA;AD0QA;EACA,aAAA;EACA,aAAA;ACvQA;ADyQA;EACA,oBAAA;ACvQA;AACA;ADiQA;IASA,cAAA;ACvQE;AACF;AAEA;ADwQA;IAEA,aAAA;ACvQE;AACF;AD0QA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;ACvQA;AD0QA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;ACvQA;AD0QA;EACA,kBAAA;EACA,gBAAA;EACA,QAAA;EACA,qBAAA;EACA,kCAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ACvQA;;AAEA,oDAAoD", "file": "NewDirectMessageModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template.has-background(
  :fullscreen='true'
  :a11yTitle='L("New Direct Message")'
  :autofocus='false'
)
  .c-container
    .c-header
      i18n.is-title-2.c-title(tag='h2') Direct Messages

    .card.c-card
      users-selector(
        :label='L("Search")'
        :userIDs='selections'
        :autofocus='true'
        @change='onChangeKeyword'
        @remove='onRemoveSelection'
        @submit='onSubmit'
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

      .is-subtitle
        i18n(
          tag='h3'
          :args='{  nbMembers: filteredRecents.length }'
        ) Recent Conversations ({nbMembers})
      transition-group(
        name='slide-list'
        data-test='recentConversations'
        tag='ul'
      )
        li.c-search-member(
          v-for='({chatRoomID, partners, members, lastJoinedPartner, title, picture, isDMToMyself}, index) in filteredRecents'
          @click='onRecentConvoSelection(filteredRecents[index])'
          :key='chatRoomID'
        )
          profile-card(
            :contractID='lastJoinedPartner'
            deactivated
            direction='top-left'
          )
            .c-identity
              .picture-wrapper
                avatar-user(:contractID='lastJoinedPartner' size='sm')
                .c-badge(v-if='partners.length > 1') {{ partners.length }}
              .c-name(data-test='lastJoinedPartner')
                span
                  strong {{ title }}
                  i18n.c-display-name(v-if='isDMToMyself' data-test='profileName') (you)
                  .c-display-name(v-else-if='title !== lastJoinedPartner' data-test='profileName') @{{ partners.map(p => p.username).join(', @') }}

      .is-subtitle
        i18n(
          tag='h3'
          :args='{ nbMembers: filteredOthers.length }'
        ) Others ({nbMembers})
      transition-group(
        name='slide-list'
        data-test='others'
        tag='ul'
      )
        li.c-search-member(
          v-for='{contractID, username, displayName} in filteredOthers'
          @click='onAddSelection(contractID)'
          :key='username'
        )
          profile-card(:contractID='contractID' deactivated direction='top-left')
            .c-identity
              avatar-user(:contractID='contractID' size='sm')
              .c-name(data-test='username')
                span
                  strong {{ localizedName(username, displayName) }}
                  .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { difference } from 'turtledash'
import { mapGetters } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import UsersSelector from '../../../../frontend/views/components/UsersSelector.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import DMMixin from './DMMixin.js'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'
import { CLOSE_MODAL } from '../../../../frontend/utils/events.js'

export default ({
  name: 'NewDirectMessageModal',
  mixins: [
    DMMixin
  ],
  components: {
    ModalBaseTemplate,
    UsersSelector,
    ProfileCard,
    AvatarUser
  },
  data () {
    return {
      searchText: '',
      selections: []
    }
  },
  computed: {
    ...mapGetters([
      'userDisplayNameFromID',
      'usernameFromID',
      'ourUsername',
      'ourContactProfilesById',
      'ourIdentityContractId',
      'currentGroupContactProfilesById'
    ]),
    ourNewDMContacts () {
      const currentGroupUserIds = Object.keys(this.currentGroupContactProfilesById)

      return currentGroupUserIds
        .filter(userID => {
          const chatRoomID = this.ourGroupDirectMessageFromUserIds(userID)
          return !chatRoomID || !this.ourGroupDirectMessages[chatRoomID].visible
        })
        .map(userID => this.currentGroupContactProfilesById[userID])
    },
    ourRecentConversations () {
      return Object.keys(this.ourGroupDirectMessages)
        .filter(chatRoomID => this.ourGroupDirectMessages[chatRoomID].visible)
        .map(chatRoomID => {
          const { title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself } = this.ourGroupDirectMessages[chatRoomID]
          return { chatRoomID, title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself }
        })
        .sort((former, latter) => {
          const diff = former.lastMsgTimeStamp - latter.lastMsgTimeStamp
          return diff > 0 ? -1 : (diff < 0 ? 1 : (former.title > latter.title ? 1 : -1))
        })
    },
    filteredRecents () {
      if (!this.searchText && !this.selections.length) {
        return this.ourRecentConversations
      }
      return this.ourRecentConversations.filter(({ title, partners, isDMToMyself }) => {
        const partnerIDs = partners.map(p => p.contractID)
        const upperCasedSearchText = String(this.searchText).toUpperCase().normalize()

        if (!isDMToMyself && !difference(partnerIDs, this.selections).length) {
          // match with contractIDs
          return false
        } else if (String(title).toUpperCase().normalize().includes(upperCasedSearchText)) {
          // match with title
          return true
        } else {
          // match with username and displayname
          const userKeywords = upperCasedSearchText.replace(/\\s/g, '').split(',')
          return userKeywords.reduce((found, userKeyword, index, arr) => {
            const isLastUserKeyword = index === arr.length - 1
            let currentFound = false
            if (isLastUserKeyword) {
              currentFound = partners.findIndex(p => {
                return p.username.toUpperCase().normalize().includes(userKeyword) ||
                  p.displayName.toUpperCase().normalize().includes(userKeyword)
              }) >= 0
            } else {
              currentFound = partners.findIndex(p => {
                return p.username.toUpperCase().normalize() === userKeyword ||
                  p.displayName.toUpperCase().normalize() === userKeyword
              }) >= 0
            }
            return found && currentFound
          }, true)
        }
      }).sort((a, b) => a.partners.length > b.partners.length ? 1 : -1)
    },
    hasDMToMyself () {
      return !!this.filteredRecents.length && this.filteredRecents.some(convo => convo.isDMToMyself)
    },
    filteredOthers () {
      return filterByKeyword(this.ourNewDMContacts, this.searchText, ['username', 'displayName'])
        .filter(profile => !this.selections.includes(profile.contractID))
    },
    searchCount () {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length
    },
    resultsCopy () {
      const args = { searchCount: \`<strong>\${this.searchCount}</strong>\`, searchTerm: \`<strong>\${this.searchText}</strong>\`, ...LTags('strong') }
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    }
  },
  methods: {
    localizedName (username, displayName) {
      const name = displayName || \`@\${username}\`
      return username === this.ourUsername ? L('{name} (you)', { name }) : name
    },
    onChangeKeyword (keyword) {
      this.searchText = keyword
    },
    onAddSelection (contractIDs) {
      if (typeof contractIDs === 'string') {
        contractIDs = [contractIDs]
      }
      for (const contractID of contractIDs) {
        if (!this.selections.includes(contractID)) {
          this.selections.push(contractID)
        }
      }
    },
    onRecentConvoSelection (convo) {
      const { isDMToMyself, partners } = convo

      if (isDMToMyself) {
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.ourIdentityContractId)
        this.redirect(chatRoomID)
      } else {
        this.onAddSelection(partners.map(p => p.contractID))
      }
    },
    onRemoveSelection (contractID) {
      this.selections = this.selections.filter(cID => cID !== contractID)
    },
    async onSubmit () {
      if (this.selections.length) {
        const isDMToMyself = this.selections.length === 1 &&
          this.selections[0] === this.ourIdentityContractId
        const memberIds = isDMToMyself
          ? this.selections
          : this.selections.filter(id => id !== this.ourIdentityContractId)

        const existingChatRoomID = this.ourGroupDirectMessageFromUserIds(memberIds)
        if (existingChatRoomID) {
          this.redirect(existingChatRoomID)
        } else {
          await this.createDirectMessage(memberIds)
        }
      } else if (this.searchText) {
        if (this.filteredRecents.length) {
          this.redirect(this.filteredRecents[0].chatRoomID)
        } else if (this.filteredOthers.length) {
          await this.createDirectMessage(this.filteredOthers[0].contractID)
        }
      }

      this.closeModal()
    },
    closeModal () {
      sbp('okTurtles.events/emit', CLOSE_MODAL)
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

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
    margin: 0;
  }
}

.c-card {
  margin-top: 1.5rem;
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
  display: block;
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

.c-actions-buttons {
  display: none;
  margin-top: 0;

  i {
    margin-right: 0.5rem;
  }

  @include tablet {
    display: block;
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

.picture-wrapper {
  position: relative;
  min-width: 2rem;
  margin-right: 0.5rem;
}

.c-badge {
  position: absolute;
  bottom: -0.25rem;
  right: 0;
  border-radius: 0.5rem;
  background-color: $general_0;
  color: $text_0;
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  text-align: center;
}
</style>
`, ".c-container {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n\n@media screen and (min-width: 769px), print {\n  .c-header,\n  .c-container {\n    width: 50rem;\n    max-width: 100%;\n  }\n}\n\n.c-header {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n  }\n}\n\n.c-card {\n  margin-top: 1.5rem;\n}\n\n.c-member-count {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-identity {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.c-name {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-display-name {\n  display: block;\n  color: var(--text_1);\n}\n\n.c-search-member .c-twrapper {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n\n.slide-list-enter,\n.slide-list-leave-to {\n  height: 0;\n  opacity: 0;\n}\n\n.slide-list-leave-active {\n  overflow: hidden;\n  border-bottom: 0;\n}\n\n.c-actions-buttons {\n  display: none;\n  margin-top: 0;\n}\n.c-actions-buttons i {\n  margin-right: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-actions-buttons {\n    display: block;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .c-action-menu {\n    display: none;\n  }\n}\n\n.is-subtitle {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n\n.picture-wrapper {\n  position: relative;\n  min-width: 2rem;\n  margin-right: 0.5rem;\n}\n\n.c-badge {\n  position: absolute;\n  bottom: -0.25rem;\n  right: 0;\n  border-radius: 0.5rem;\n  background-color: var(--general_0);\n  color: var(--text_0);\n  width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n/*# sourceMappingURL=NewDirectMessageModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-6dd597dc";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template.has-background(
  :fullscreen='true'
  :a11yTitle='L("New Direct Message")'
  :autofocus='false'
)
  .c-container
    .c-header
      i18n.is-title-2.c-title(tag='h2') Direct Messages

    .card.c-card
      users-selector(
        :label='L("Search")'
        :userIDs='selections'
        :autofocus='true'
        @change='onChangeKeyword'
        @remove='onRemoveSelection'
        @submit='onSubmit'
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

      .is-subtitle
        i18n(
          tag='h3'
          :args='{  nbMembers: filteredRecents.length }'
        ) Recent Conversations ({nbMembers})
      transition-group(
        name='slide-list'
        data-test='recentConversations'
        tag='ul'
      )
        li.c-search-member(
          v-for='({chatRoomID, partners, members, lastJoinedPartner, title, picture, isDMToMyself}, index) in filteredRecents'
          @click='onRecentConvoSelection(filteredRecents[index])'
          :key='chatRoomID'
        )
          profile-card(
            :contractID='lastJoinedPartner'
            deactivated
            direction='top-left'
          )
            .c-identity
              .picture-wrapper
                avatar-user(:contractID='lastJoinedPartner' size='sm')
                .c-badge(v-if='partners.length > 1') {{ partners.length }}
              .c-name(data-test='lastJoinedPartner')
                span
                  strong {{ title }}
                  i18n.c-display-name(v-if='isDMToMyself' data-test='profileName') (you)
                  .c-display-name(v-else-if='title !== lastJoinedPartner' data-test='profileName') @{{ partners.map(p => p.username).join(', @') }}

      .is-subtitle
        i18n(
          tag='h3'
          :args='{ nbMembers: filteredOthers.length }'
        ) Others ({nbMembers})
      transition-group(
        name='slide-list'
        data-test='others'
        tag='ul'
      )
        li.c-search-member(
          v-for='{contractID, username, displayName} in filteredOthers'
          @click='onAddSelection(contractID)'
          :key='username'
        )
          profile-card(:contractID='contractID' deactivated direction='top-left')
            .c-identity
              avatar-user(:contractID='contractID' size='sm')
              .c-name(data-test='username')
                span
                  strong {{ localizedName(username, displayName) }}
                  .c-display-name(v-if='displayName' data-test='profileName') @{{ username }}
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { difference } from 'turtledash'
import { mapGetters } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import UsersSelector from '../../../../frontend/views/components/UsersSelector.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import DMMixin from './DMMixin.js'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'
import { CLOSE_MODAL } from '../../../../frontend/utils/events.js'

export default ({
  name: 'NewDirectMessageModal',
  mixins: [
    DMMixin
  ],
  components: {
    ModalBaseTemplate,
    UsersSelector,
    ProfileCard,
    AvatarUser
  },
  data () {
    return {
      searchText: '',
      selections: []
    }
  },
  computed: {
    ...mapGetters([
      'userDisplayNameFromID',
      'usernameFromID',
      'ourUsername',
      'ourContactProfilesById',
      'ourIdentityContractId',
      'currentGroupContactProfilesById'
    ]),
    ourNewDMContacts () {
      const currentGroupUserIds = Object.keys(this.currentGroupContactProfilesById)

      return currentGroupUserIds
        .filter(userID => {
          const chatRoomID = this.ourGroupDirectMessageFromUserIds(userID)
          return !chatRoomID || !this.ourGroupDirectMessages[chatRoomID].visible
        })
        .map(userID => this.currentGroupContactProfilesById[userID])
    },
    ourRecentConversations () {
      return Object.keys(this.ourGroupDirectMessages)
        .filter(chatRoomID => this.ourGroupDirectMessages[chatRoomID].visible)
        .map(chatRoomID => {
          const { title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself } = this.ourGroupDirectMessages[chatRoomID]
          return { chatRoomID, title, partners, lastJoinedPartner, picture, lastMsgTimeStamp, isDMToMyself }
        })
        .sort((former, latter) => {
          const diff = former.lastMsgTimeStamp - latter.lastMsgTimeStamp
          return diff > 0 ? -1 : (diff < 0 ? 1 : (former.title > latter.title ? 1 : -1))
        })
    },
    filteredRecents () {
      if (!this.searchText && !this.selections.length) {
        return this.ourRecentConversations
      }
      return this.ourRecentConversations.filter(({ title, partners, isDMToMyself }) => {
        const partnerIDs = partners.map(p => p.contractID)
        const upperCasedSearchText = String(this.searchText).toUpperCase().normalize()

        if (!isDMToMyself && !difference(partnerIDs, this.selections).length) {
          // match with contractIDs
          return false
        } else if (String(title).toUpperCase().normalize().includes(upperCasedSearchText)) {
          // match with title
          return true
        } else {
          // match with username and displayname
          const userKeywords = upperCasedSearchText.replace(/\\s/g, '').split(',')
          return userKeywords.reduce((found, userKeyword, index, arr) => {
            const isLastUserKeyword = index === arr.length - 1
            let currentFound = false
            if (isLastUserKeyword) {
              currentFound = partners.findIndex(p => {
                return p.username.toUpperCase().normalize().includes(userKeyword) ||
                  p.displayName.toUpperCase().normalize().includes(userKeyword)
              }) >= 0
            } else {
              currentFound = partners.findIndex(p => {
                return p.username.toUpperCase().normalize() === userKeyword ||
                  p.displayName.toUpperCase().normalize() === userKeyword
              }) >= 0
            }
            return found && currentFound
          }, true)
        }
      }).sort((a, b) => a.partners.length > b.partners.length ? 1 : -1)
    },
    hasDMToMyself () {
      return !!this.filteredRecents.length && this.filteredRecents.some(convo => convo.isDMToMyself)
    },
    filteredOthers () {
      return filterByKeyword(this.ourNewDMContacts, this.searchText, ['username', 'displayName'])
        .filter(profile => !this.selections.includes(profile.contractID))
    },
    searchCount () {
      return Object.keys(this.filteredOthers).length + Object.keys(this.filteredRecents).length
    },
    resultsCopy () {
      const args = { searchCount: \`<strong>\${this.searchCount}</strong>\`, searchTerm: \`<strong>\${this.searchText}</strong>\`, ...LTags('strong') }
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    }
  },
  methods: {
    localizedName (username, displayName) {
      const name = displayName || \`@\${username}\`
      return username === this.ourUsername ? L('{name} (you)', { name }) : name
    },
    onChangeKeyword (keyword) {
      this.searchText = keyword
    },
    onAddSelection (contractIDs) {
      if (typeof contractIDs === 'string') {
        contractIDs = [contractIDs]
      }
      for (const contractID of contractIDs) {
        if (!this.selections.includes(contractID)) {
          this.selections.push(contractID)
        }
      }
    },
    onRecentConvoSelection (convo) {
      const { isDMToMyself, partners } = convo

      if (isDMToMyself) {
        const chatRoomID = this.ourGroupDirectMessageFromUserIds(this.ourIdentityContractId)
        this.redirect(chatRoomID)
      } else {
        this.onAddSelection(partners.map(p => p.contractID))
      }
    },
    onRemoveSelection (contractID) {
      this.selections = this.selections.filter(cID => cID !== contractID)
    },
    async onSubmit () {
      if (this.selections.length) {
        const isDMToMyself = this.selections.length === 1 &&
          this.selections[0] === this.ourIdentityContractId
        const memberIds = isDMToMyself
          ? this.selections
          : this.selections.filter(id => id !== this.ourIdentityContractId)

        const existingChatRoomID = this.ourGroupDirectMessageFromUserIds(memberIds)
        if (existingChatRoomID) {
          this.redirect(existingChatRoomID)
        } else {
          await this.createDirectMessage(memberIds)
        }
      } else if (this.searchText) {
        if (this.filteredRecents.length) {
          this.redirect(this.filteredRecents[0].chatRoomID)
        } else if (this.filteredOthers.length) {
          await this.createDirectMessage(this.filteredOthers[0].contractID)
        }
      }

      this.closeModal()
    },
    closeModal () {
      sbp('okTurtles.events/emit', CLOSE_MODAL)
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

  @include tablet {
    padding-top: 2rem;
    justify-content: flex-start;
    background-color: transparent;
    margin: 0;
  }
}

.c-card {
  margin-top: 1.5rem;
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
  display: block;
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

.c-actions-buttons {
  display: none;
  margin-top: 0;

  i {
    margin-right: 0.5rem;
  }

  @include tablet {
    display: block;
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

.picture-wrapper {
  position: relative;
  min-width: 2rem;
  margin-right: 0.5rem;
}

.c-badge {
  position: absolute;
  bottom: -0.25rem;
  right: 0;
  border-radius: 0.5rem;
  background-color: $general_0;
  color: $text_0;
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  text-align: center;
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
var NewDirectMessageModal_default = __vue_component__;
export {
  NewDirectMessageModal_default as default
};
//# sourceMappingURL=NewDirectMessageModal-URTQJBZW-cached.js.map
