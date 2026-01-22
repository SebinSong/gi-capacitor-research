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
import "./chunk-3T5W4UPP-cached.js";
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
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  REPLACE_MODAL
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

// frontend/views/containers/dashboard/GroupMembersAllModal.vue
var __vue_script__ = {
  name: "GroupMembersAllModal",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    Search: Search_default,
    AvatarUser: AvatarUser_default,
    GroupMembersTooltipPending: GroupMembersTooltipPending_default,
    ProfileCard: ProfileCard_default
  },
  data() {
    return {
      searchText: "",
      addedMember: [],
      canAddMember: false,
      name: "",
      isPrivate: true
    };
  },
  created() {
    this.name = this.$route.query.name;
    if (this.name) this.canAddMember = true;
    this.addedMember = this.groupMembersSorted;
  },
  computed: {
    ...mapGetters([
      "groupMembersSorted",
      "groupMembersCount",
      "ourIdentityContractId",
      "userDisplayNameFromID"
    ]),
    searchResult() {
      return filterByKeyword(this.groupMembersSorted, this.searchText, ["username", "displayName"]);
    },
    searchCount() {
      return Object.keys(this.searchResult).length;
    },
    resultsCopy() {
      const args = { searchCount: `<strong>${this.searchCount}</strong>`, searchTerm: `<strong>${this.searchText}</strong>`, ...LTags("strong") };
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args);
    }
  },
  methods: {
    localizedName(memberID) {
      const name = this.userDisplayNameFromID(memberID);
      return memberID === this.ourIdentityContractId ? L("{name} (you)", { name }) : name;
    },
    closeModal() {
      this.$refs.modal.close();
    },
    removeMember(memberID) {
      esm_default("okTurtles.events/emit", REPLACE_MODAL, "RemoveMember", { memberID });
    },
    addToChannel() {
      console.log("TODO addToChannel");
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
        a11yTitle: _vm.L("Group members"),
        autofocus: false
      }
    },
    [
      _c("div", { staticClass: "c-container" }, [
        _c(
          "div",
          { staticClass: "c-header" },
          [
            _vm.canAddMember ? _c(
              "div",
              [
                _c(
                  "i18n",
                  {
                    staticClass: "is-title-2 c-title",
                    attrs: { tag: "h2" }
                  },
                  [_vm._v("Members")]
                ),
                _c("div", { staticClass: "c-description" }, [
                  _vm._v(
                    _vm._s(_vm.name) + " . " + _vm._s(
                      _vm.isPrivate ? _vm.L("Private channel") : _vm.L("Public channel")
                    )
                  )
                ])
              ],
              1
            ) : _c(
              "i18n",
              { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
              [_vm._v("Group members")]
            )
          ],
          1
        ),
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
            !_vm.searchText && !_vm.canAddMember ? _c(
              "i18n",
              {
                staticClass: "c-member-count has-text-1",
                attrs: {
                  tag: "div",
                  args: { groupMembersCount: _vm.groupMembersCount },
                  "data-test": "memberCount"
                }
              },
              [_vm._v("{groupMembersCount} members")]
            ) : _vm._e(),
            _vm.canAddMember ? _c(
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
                          args: {
                            nbMembers: _vm.groupMembersSorted.length
                          }
                        }
                      },
                      [_vm._v("Channel members ({nbMembers})")]
                    )
                  ],
                  1
                ),
                _vm.addedMember ? _c(
                  "transition-group",
                  { attrs: { name: "slide-list", tag: "ul" } },
                  _vm._l(_vm.addedMember, function(ref) {
                    var contractID = ref.contractID;
                    var username = ref.username;
                    var displayName = ref.displayName;
                    var invitedBy = ref.invitedBy;
                    var isNew = ref.isNew;
                    return _c(
                      "li",
                      {
                        key: _vm.addedMember,
                        staticClass: "c-search-member"
                      },
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
                                            _vm.localizedName(username)
                                          )
                                        )
                                      ]),
                                      displayName !== username ? _c(
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
                            _c("div", { staticClass: "c-actions" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "is-icon",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation();
                                      return _vm.removeMember($event);
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "icon-times" })]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  0
                ) : _vm._e(),
                _c(
                  "div",
                  { staticClass: "is-subtitle c-second-section" },
                  [
                    _c(
                      "i18n",
                      {
                        attrs: {
                          tag: "h3",
                          args: { nbMembers: _vm.addedMember.length }
                        }
                      },
                      [_vm._v("Others ({nbMembers})")]
                    )
                  ],
                  1
                )
              ],
              1
            ) : _vm._e(),
            _vm.searchResult ? _c(
              "transition-group",
              { attrs: { name: "slide-list", tag: "ul" } },
              _vm._l(_vm.searchResult, function(ref) {
                var contractID = ref.contractID;
                var username = ref.username;
                var displayName = ref.displayName;
                var invitedBy = ref.invitedBy;
                var isNew = ref.isNew;
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
                                      _vm._s(_vm.localizedName(username))
                                    )
                                  ]),
                                  displayName !== username ? _c(
                                    "div",
                                    {
                                      staticClass: "c-display-name",
                                      attrs: {
                                        "data-test": "profileName"
                                      }
                                    },
                                    [_vm._v("@" + _vm._s(username))]
                                  ) : _vm._e()
                                ]),
                                invitedBy ? _c(
                                  "i18n",
                                  {
                                    staticClass: "pill is-neutral",
                                    attrs: {
                                      "data-test": "pillPending"
                                    }
                                  },
                                  [_vm._v("pending")]
                                ) : isNew ? _c(
                                  "i18n",
                                  {
                                    staticClass: "pill is-primary",
                                    attrs: { "data-test": "pillNew" }
                                  },
                                  [_vm._v("new")]
                                ) : _vm._e()
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "c-actions" },
                          [
                            _vm.$route.query.toRemove ? _c(
                              "button",
                              {
                                staticClass: "is-icon",
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation();
                                    return _vm.removeMember(contractID);
                                  }
                                }
                              },
                              [_c("i", { staticClass: "icon-times" })]
                            ) : _vm.addedMember ? _c(
                              "i18n",
                              {
                                staticClass: "button is-outlined is-small",
                                attrs: {
                                  tag: "button",
                                  "data-test": "addToChannel",
                                  args: _vm.LTags("span")
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation();
                                    return _vm.addToChannel();
                                  }
                                }
                              },
                              [_vm._v("Add {span_}to channel{_span}")]
                            ) : invitedBy ? _c("group-members-tooltip-pending", {
                              attrs: { contractID }
                            }) : _vm._e()
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
            ) : _vm._e()
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
  inject("data-v-086afacb_0", { source: '.c-container[data-v-086afacb] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-086afacb],\n  .c-container[data-v-086afacb] {\n    width: 50rem;\n    max-width: 100%;\n}\n}\n.c-header[data-v-086afacb] {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n.c-header[data-v-086afacb] {\n    justify-content: left;\n    padding-left: 1rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-086afacb] {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n}\n}\n.c-description[data-v-086afacb] {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n.c-description[data-v-086afacb] {\n    position: absolute;\n    top: 5.5rem;\n}\n}\n.c-card[data-v-086afacb] {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-card[data-v-086afacb] {\n    margin-top: 3rem;\n}\n}\n.c-member-count[data-v-086afacb] {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.c-identity[data-v-086afacb] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.c-name[data-v-086afacb] {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-display-name[data-v-086afacb] {\n  color: var(--text_1);\n}\n.c-search-member .c-twrapper[data-v-086afacb] {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper[data-v-086afacb]:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper[data-v-086afacb]:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n.slide-list-enter[data-v-086afacb],\n.slide-list-leave-to[data-v-086afacb] {\n  height: 0;\n  opacity: 0;\n}\n.slide-list-leave-active[data-v-086afacb] {\n  overflow: hidden;\n  border-bottom: 0;\n}\n.c-actions-buttons[data-v-086afacb] {\n  display: none;\n  margin-top: 0;\n}\n.c-actions-buttons i[data-v-086afacb] {\n  margin-right: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-actions-buttons[data-v-086afacb] {\n    display: block;\n}\n}\n@media screen and (max-width: 768px) {\n[data-v-086afacb] .c-actions span {\n    display: none;\n}\n}\n[data-v-086afacb] .c-actions i + span {\n  margin-left: 0.3rem;\n}\n@media screen and (min-width: 769px), print {\n.c-action-menu[data-v-086afacb] {\n    display: none;\n}\n}\n.is-subtitle[data-v-086afacb] {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n.c-second-section[data-v-086afacb]::before {\n  content: "";\n  position: absolute;\n  background-color: var(--general_2);\n  height: 1px;\n  width: calc(100% + 6rem);\n  top: 0;\n  left: -3rem;\n}\n\n/*# sourceMappingURL=GroupMembersAllModal.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/dashboard/GroupMembersAllModal.vue", "GroupMembersAllModal.vue"], "names": [], "mappings": "AAkMA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;ACjMA;AAEA;ADkMA;;IAGA,YAAA;IACA,eAAA;ACjME;AACF;ADoMA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qCAAA;EACA,eAAA;ACjMA;AACA;ADyLA;IAUA,qBAAA;IACA,kBAAA;AChME;AACF;AACA;ADmLA;IAeA,iBAAA;IACA,2BAAA;IACA,6BAAA;IACA,SAAA;AC/LE;AACF;ADkMA;EACA,oBAAA;AC/LA;AACA;AD6LA;IAIA,kBAAA;IACA,WAAA;AC9LE;AACF;ADiMA;EACA,kBAAA;AC9LA;AACA;AD4LA;IAIA,gBAAA;AC7LE;AACF;ADgMA;EACA,kBAAA;EACA,qBAAA;AC7LA;ADgMA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AC7LA;ADgMA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AC7LA;ADgMA;EACA,oBAAA;AC7LA;ADgMA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,8BAAA;EACA,mBAAA;EACA,yCAAA;EACA,uDAAA;AC7LA;AD+LA;EACA,gBAAA;AC7LA;ADgMA;EACA,kCAAA;EACA,eAAA;AC9LA;ADkMA;;EAEA,SAAA;EACA,UAAA;AC/LA;ADkMA;EACA,gBAAA;EACA,gBAAA;AC/LA;ADkMA;EACA,aAAA;EACA,aAAA;AC/LA;ADiMA;EACA,oBAAA;AC/LA;AACA;ADyLA;IASA,cAAA;AC/LE;AACF;AAEA;ADiMA;IAEA,aAAA;AChME;AACF;ADmMA;EACA,mBAAA;ACjMA;AAEA;ADmMA;IAEA,aAAA;AClME;AACF;ADqMA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;AClMA;ADqMA;EACA,WAAA;EACA,kBAAA;EACA,kCAAA;EACA,WAAA;EACA,wBAAA;EACA,MAAA;EACA,WAAA;AClMA;;AAEA,mDAAmD", "file": "GroupMembersAllModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template.has-background(
  ref='modal'
  :fullscreen='true'
  :a11yTitle='L("Group members")'
  :autofocus='false'
)
  .c-container
    .c-header
      div(v-if='canAddMember')
        i18n.is-title-2.c-title(
          tag='h2'
        ) Members
        .c-description {{ name }} . {{isPrivate ? L("Private channel") : L("Public channel")}}

      i18n.is-title-2.c-title(
        v-else
        tag='h2'
      ) Group members

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

      i18n.c-member-count.has-text-1(
        v-if='!searchText && !canAddMember'
        tag='div'
        :args='{ groupMembersCount }'
        data-test='memberCount'
      ) {groupMembersCount} members

      .c-list-to-add(v-if='canAddMember')
        .is-subtitle
          i18n(
            tag='h3'
            :args='{  nbMembers: groupMembersSorted.length }'
          ) Channel members ({nbMembers})

        transition-group(
          v-if='addedMember'
          name='slide-list'
          tag='ul'
        )
          li.c-search-member(
            v-for='{contractID, username, displayName, invitedBy, isNew} in addedMember'
            :key='addedMember'
          )
            profile-card(:contractID='contractID' direction='top-left')
              .c-identity
                avatar-user(:contractID='contractID' size='sm')
                .c-name(data-test='username')
                  span
                    strong {{ localizedName(username) }}
                    .c-display-name(v-if='displayName !== username' data-test='profileName') @{{ username }}

              .c-actions
                button.is-icon(@click.stop='removeMember')
                  i.icon-times

        .is-subtitle.c-second-section
          i18n(
            tag='h3'
            :args='{  nbMembers: addedMember.length }'
          ) Others ({nbMembers})

      transition-group(
        v-if='searchResult'
        name='slide-list'
        tag='ul'
      )
        li.c-search-member(
          v-for='{contractID, username, displayName, invitedBy, isNew} in searchResult'
          :key='contractID'
        )
          profile-card(:contractID='contractID' direction='top-left')
            .c-identity
              avatar-user(:contractID='contractID' size='sm')
              .c-name(data-test='username')
                span
                  strong {{ localizedName(username) }}
                  .c-display-name(v-if='displayName !== username' data-test='profileName') @{{ username }}

                i18n.pill.is-neutral(v-if='invitedBy' data-test='pillPending') pending
                i18n.pill.is-primary(v-else-if='isNew' data-test='pillNew') new

            .c-actions
              button.is-icon(
                v-if='$route.query.toRemove'
                @click.stop='removeMember(contractID)'
              )
                i.icon-times

              i18n.button.is-outlined.is-small(
                v-else-if='addedMember'
                tag='button'
                @click.stop='addToChannel()'
                data-test='addToChannel'
                :args='LTags("span")'
              ) Add {span_}to channel{_span}

              group-members-tooltip-pending(v-else-if='invitedBy' :contractID='contractID')
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import Search from '../../../../frontend/views/components/Search.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'

export default ({
  name: 'GroupMembersAllModal',
  components: {
    ModalBaseTemplate,
    Search,
    AvatarUser,
    GroupMembersTooltipPending,
    ProfileCard
  },
  data () {
    return {
      searchText: '',
      addedMember: [],
      canAddMember: false,
      name: '',
      isPrivate: true
    }
  },
  created () {
    this.name = this.$route.query.name
    if (this.name) this.canAddMember = true
    // TODO: get chat member and filter groupMembersSorted
    this.addedMember = this.groupMembersSorted
  },
  computed: {
    ...mapGetters([
      'groupMembersSorted',
      'groupMembersCount',
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    searchResult () {
      return filterByKeyword(this.groupMembersSorted, this.searchText, ['username', 'displayName'])
    },
    searchCount () {
      return Object.keys(this.searchResult).length
    },
    resultsCopy () {
      const args = { searchCount: \`<strong>\${this.searchCount}</strong>\`, searchTerm: \`<strong>\${this.searchText}</strong>\`, ...LTags('strong') }
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    }
  },
  methods: {
    localizedName (memberID) {
      const name = this.userDisplayNameFromID(memberID)
      return memberID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    closeModal () {
      this.$refs.modal.close()
    },
    removeMember (memberID) {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'RemoveMember', { memberID })
    },
    addToChannel () {
      console.log('TODO addToChannel')
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

::v-deep .c-actions {
  span {
    @include phone {
      display: none;
    }
  }

  i + span {
    margin-left: 0.3rem;
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
`, '.c-container {\n  height: 100%;\n  width: 100%;\n  background-color: var(--general_2);\n}\n\n@media screen and (min-width: 769px), print {\n  .c-header,\n  .c-container {\n    width: 50rem;\n    max-width: 100%;\n  }\n}\n\n.c-header {\n  display: flex;\n  height: 4.75rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  background-color: var(--background_0);\n  margin: 0 -1rem;\n}\n@media screen and (max-width: 768px) {\n  .c-header {\n    justify-content: left;\n    padding-left: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    padding-top: 2rem;\n    justify-content: flex-start;\n    background-color: transparent;\n    margin: 0;\n  }\n}\n\n.c-description {\n  color: var(--text_1);\n}\n@media screen and (max-width: 768px) {\n  .c-description {\n    position: absolute;\n    top: 5.5rem;\n  }\n}\n\n.c-card {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-card {\n    margin-top: 3rem;\n  }\n}\n\n.c-member-count {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-identity {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.c-name {\n  margin: 0 0.5rem 0 1.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-display-name {\n  color: var(--text_1);\n}\n\n.c-search-member .c-twrapper {\n  display: flex;\n  height: 4.5rem;\n  padding: 0 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--general_0);\n  transition: opacity ease-in 0.25s, height ease-in 0.25s;\n}\n.c-search-member .c-twrapper:last-child {\n  border-bottom: 0;\n}\n.c-search-member .c-twrapper:hover {\n  background-color: var(--general_1);\n  cursor: pointer;\n}\n\n.slide-list-enter,\n.slide-list-leave-to {\n  height: 0;\n  opacity: 0;\n}\n\n.slide-list-leave-active {\n  overflow: hidden;\n  border-bottom: 0;\n}\n\n.c-actions-buttons {\n  display: none;\n  margin-top: 0;\n}\n.c-actions-buttons i {\n  margin-right: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-actions-buttons {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  ::v-deep .c-actions span {\n    display: none;\n  }\n}\n::v-deep .c-actions i + span {\n  margin-left: 0.3rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-action-menu {\n    display: none;\n  }\n}\n\n.is-subtitle {\n  display: flex;\n  margin-top: 1.875rem;\n  margin-bottom: 0.5rem;\n}\n\n.c-second-section::before {\n  content: "";\n  position: absolute;\n  background-color: var(--general_2);\n  height: 1px;\n  width: calc(100% + 6rem);\n  top: 0;\n  left: -3rem;\n}\n\n/*# sourceMappingURL=GroupMembersAllModal.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-086afacb";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template.has-background(
  ref='modal'
  :fullscreen='true'
  :a11yTitle='L("Group members")'
  :autofocus='false'
)
  .c-container
    .c-header
      div(v-if='canAddMember')
        i18n.is-title-2.c-title(
          tag='h2'
        ) Members
        .c-description {{ name }} . {{isPrivate ? L("Private channel") : L("Public channel")}}

      i18n.is-title-2.c-title(
        v-else
        tag='h2'
      ) Group members

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

      i18n.c-member-count.has-text-1(
        v-if='!searchText && !canAddMember'
        tag='div'
        :args='{ groupMembersCount }'
        data-test='memberCount'
      ) {groupMembersCount} members

      .c-list-to-add(v-if='canAddMember')
        .is-subtitle
          i18n(
            tag='h3'
            :args='{  nbMembers: groupMembersSorted.length }'
          ) Channel members ({nbMembers})

        transition-group(
          v-if='addedMember'
          name='slide-list'
          tag='ul'
        )
          li.c-search-member(
            v-for='{contractID, username, displayName, invitedBy, isNew} in addedMember'
            :key='addedMember'
          )
            profile-card(:contractID='contractID' direction='top-left')
              .c-identity
                avatar-user(:contractID='contractID' size='sm')
                .c-name(data-test='username')
                  span
                    strong {{ localizedName(username) }}
                    .c-display-name(v-if='displayName !== username' data-test='profileName') @{{ username }}

              .c-actions
                button.is-icon(@click.stop='removeMember')
                  i.icon-times

        .is-subtitle.c-second-section
          i18n(
            tag='h3'
            :args='{  nbMembers: addedMember.length }'
          ) Others ({nbMembers})

      transition-group(
        v-if='searchResult'
        name='slide-list'
        tag='ul'
      )
        li.c-search-member(
          v-for='{contractID, username, displayName, invitedBy, isNew} in searchResult'
          :key='contractID'
        )
          profile-card(:contractID='contractID' direction='top-left')
            .c-identity
              avatar-user(:contractID='contractID' size='sm')
              .c-name(data-test='username')
                span
                  strong {{ localizedName(username) }}
                  .c-display-name(v-if='displayName !== username' data-test='profileName') @{{ username }}

                i18n.pill.is-neutral(v-if='invitedBy' data-test='pillPending') pending
                i18n.pill.is-primary(v-else-if='isNew' data-test='pillNew') new

            .c-actions
              button.is-icon(
                v-if='$route.query.toRemove'
                @click.stop='removeMember(contractID)'
              )
                i.icon-times

              i18n.button.is-outlined.is-small(
                v-else-if='addedMember'
                tag='button'
                @click.stop='addToChannel()'
                data-test='addToChannel'
                :args='LTags("span")'
              ) Add {span_}to channel{_span}

              group-members-tooltip-pending(v-else-if='invitedBy' :contractID='contractID')
</template>

<script>
import sbp from '@sbp/sbp'
import { L, LTags } from '../../../../frontend/common/common.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import Search from '../../../../frontend/views/components/Search.vue'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import ProfileCard from '../../../../frontend/views/components/ProfileCard.vue'
import GroupMembersTooltipPending from '../../../../frontend/views/containers/dashboard/GroupMembersTooltipPending.vue'
import { filterByKeyword } from '../../../../frontend/views/utils/filters.js'

export default ({
  name: 'GroupMembersAllModal',
  components: {
    ModalBaseTemplate,
    Search,
    AvatarUser,
    GroupMembersTooltipPending,
    ProfileCard
  },
  data () {
    return {
      searchText: '',
      addedMember: [],
      canAddMember: false,
      name: '',
      isPrivate: true
    }
  },
  created () {
    this.name = this.$route.query.name
    if (this.name) this.canAddMember = true
    // TODO: get chat member and filter groupMembersSorted
    this.addedMember = this.groupMembersSorted
  },
  computed: {
    ...mapGetters([
      'groupMembersSorted',
      'groupMembersCount',
      'ourIdentityContractId',
      'userDisplayNameFromID'
    ]),
    searchResult () {
      return filterByKeyword(this.groupMembersSorted, this.searchText, ['username', 'displayName'])
    },
    searchCount () {
      return Object.keys(this.searchResult).length
    },
    resultsCopy () {
      const args = { searchCount: \`<strong>\${this.searchCount}</strong>\`, searchTerm: \`<strong>\${this.searchText}</strong>\`, ...LTags('strong') }
      return this.searchCount === 1 ? L('Showing {strong_}1 result{_strong} for "{searchTerm}"', args) : L('Showing {searchCount} {strong_}results{_strong} for "{searchTerm}"', args)
    }
  },
  methods: {
    localizedName (memberID) {
      const name = this.userDisplayNameFromID(memberID)
      return memberID === this.ourIdentityContractId ? L('{name} (you)', { name }) : name
    },
    closeModal () {
      this.$refs.modal.close()
    },
    removeMember (memberID) {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'RemoveMember', { memberID })
    },
    addToChannel () {
      console.log('TODO addToChannel')
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

::v-deep .c-actions {
  span {
    @include phone {
      display: none;
    }
  }

  i + span {
    margin-left: 0.3rem;
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
var GroupMembersAllModal_default = __vue_component__;
export {
  GroupMembersAllModal_default as default
};
//# sourceMappingURL=GroupMembersAllModal-UCW7UHAT-cached.js.map
