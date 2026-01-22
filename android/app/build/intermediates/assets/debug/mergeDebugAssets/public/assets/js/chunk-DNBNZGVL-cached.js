import {
  swapMentionIDForDisplayname
} from "./chunk-HRFGMP2Q-cached.js";
import {
  timeSince
} from "./chunk-V3SQGGAF-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/containers/notifications/NotificationList.vue
var __vue_script__ = {
  name: "NotificationList",
  props: {
    variant: {
      type: String,
      validator: (value) => ["compact", "default"].includes(value),
      default: "default"
    }
  },
  data: () => ({
    ephemeral: {
      isLoading: false,
      // Whether the user is currently dragging the pointer to highlight some notification text.
      // This flag is used to ignore the click event fired upon releasing the pointer in that case.
      isSelectingText: false
    }
  }),
  components: {
    AvatarUser: AvatarUser_default
  },
  computed: {
    ...mapGetters([
      "currentNotificationCount",
      "currentNewNotifications",
      "currentOlderNotifications"
    ]),
    notificationLists() {
      const defaultCategory = "OLDER";
      const lists = [
        { title: L("NEW"), items: this.currentNewNotifications },
        { title: L("OLDER"), items: this.currentOlderNotifications }
      ].filter((list) => list.items.length > 0);
      if (lists.length === 1 && lists[0].title === defaultCategory) {
        lists[0].title = "";
      }
      return lists;
    }
  },
  methods: {
    ageTag(item) {
      return timeSince(item.timestamp);
    },
    handleItemClick(item) {
      if (!this.ephemeral.isSelectingText || !window.getSelection().toString()) {
        this.markAsRead(item);
        if (item.sbpInvocation) {
          esm_default(...item.sbpInvocation);
        } else if (item.linkTo) {
          this.$router.push(item.linkTo).catch(console.warn);
        }
        this.$emit("select");
      }
      this.ephemeral.isSelectingText = false;
    },
    iconBg(level) {
      return {
        info: "has-background-primary has-text-primary",
        success: "has-background-success has-text-success",
        danger: "has-background-danger has-text-danger"
      }[level];
    },
    markAsRead(item) {
      esm_default("gi.notifications/markAsRead", item);
    },
    swapMemberMention(text) {
      return swapMentionIDForDisplayname(text, {
        escaped: false,
        forChat: false
      });
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.variant, attrs: { "data-test": "notificationList" } },
    [
      _vm.ephemeral.isLoading ? _c(
        "div",
        { staticClass: "c-loading" },
        [
          _c("i18n", { staticClass: "sr-only" }, [_vm._v("Loading...")]),
          _vm._l([0, 1, 2, 3], function(i) {
            return _c("div", { key: i, staticClass: "c-skeleton" }, [
              _c("div", { staticClass: "c-skeleton-circle" }),
              _c("div", { staticClass: "c-skeleton-line" })
            ]);
          })
        ],
        2
      ) : !_vm.currentNotificationCount ? _c(
        "div",
        { staticClass: "c-empty" },
        [
          _c("i18n", { staticClass: "has-text-1" }, [
            _vm._v("Nothing to see here... yet!")
          ])
        ],
        1
      ) : _vm._l(_vm.notificationLists, function(list) {
        return [
          list.title ? _c("span", { staticClass: "is-subtitle c-title" }, [
            _vm._v(_vm._s(list.title))
          ]) : _vm._e(),
          _c(
            "ul",
            { staticClass: "c-list", attrs: { "aria-label": list.title } },
            _vm._l(list.items, function(item) {
              return _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "c-item",
                    class: item.read ? "" : "unread",
                    attrs: { draggable: "false" },
                    on: {
                      click: function($event) {
                        return _vm.handleItemClick(item);
                      },
                      selectstart: function($event) {
                        _vm.ephemeral.isSelectingText = true;
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "c-thumbCircle" },
                      [
                        _c("avatar-user", {
                          attrs: {
                            contractID: item.avatarUserID,
                            size: "md"
                          }
                        }),
                        item.icon ? _c("i", {
                          class: "icon-" + item.icon + " " + _vm.iconBg(item.level)
                        }) : _vm._e()
                      ],
                      1
                    ),
                    _c("span", { staticClass: "c-item-content" }, [
                      _c("span", {
                        directives: [
                          {
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: _vm.swapMemberMention(item.body),
                            expression: "swapMemberMention(item.body)"
                          }
                        ],
                        staticClass: "c-item-text"
                      }),
                      _c(
                        "span",
                        {
                          staticClass: "c-item-date has-text-1 has-text-small"
                        },
                        [_vm._v(_vm._s(_vm.ageTag(item)))]
                      )
                    ])
                  ]
                )
              ]);
            }),
            0
          )
        ];
      })
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-e5f14534_0", { source: ".c-empty[data-v-e5f14534] {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.compact .c-loading[data-v-e5f14534] {\n  padding: 0 1rem;\n}\n.c-skeleton[data-v-e5f14534] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n}\n.c-skeleton-circle[data-v-e5f14534] {\n  display: block;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 0.5rem;\n  background-color: var(--general_2);\n}\n.c-skeleton-line[data-v-e5f14534] {\n  flex-grow: 1;\n  height: 1.5rem;\n  border-radius: 0.7rem;\n  background-color: var(--general_2);\n}\n.c-title[data-v-e5f14534] {\n  display: block;\n  padding: 0 0 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-title[data-v-e5f14534] {\n    padding-left: 0.5rem;\n}\n}\n.compact .c-title[data-v-e5f14534] {\n  padding-left: 1rem;\n}\n.c-list[data-v-e5f14534] {\n  margin-bottom: 0.5rem;\n}\n.c-item[data-v-e5f14534] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 3rem;\n  cursor: pointer;\n}\n.c-item[data-v-e5f14534]:hover, .c-item[data-v-e5f14534]:focus {\n  background-color: var(--general_2);\n}\n.c-item[data-v-e5f14534]:focus {\n  z-index: 1;\n  outline: 1px solid var(--primary_0);\n}\n.c-item.unread[data-v-e5f14534] {\n  background-color: var(--general_2);\n}\n.default .c-item[data-v-e5f14534] {\n  padding: 1rem 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.default .c-item .c-item-text[data-v-e5f14534] {\n    display: block;\n}\n}\n.compact .c-item[data-v-e5f14534] {\n  padding: 1rem;\n}\n.c-item-content[data-v-e5f14534] {\n  flex-grow: 1;\n  margin-left: 0.5rem;\n}\n.c-item-date[data-v-e5f14534] {\n  margin-left: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n.default .c-item-date[data-v-e5f14534] {\n    margin-left: 0;\n}\n}\n.c-item-text[data-v-e5f14534] {\n  word-break: break-word;\n  word-wrap: break-word;\n}\n.c-thumbCircle[data-v-e5f14534] {\n  position: relative;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.c-thumbCircle i[data-v-e5f14534] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1rem;\n  height: 1rem;\n  font-size: 0.5rem;\n  line-height: 1rem;\n  text-align: center;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=NotificationList.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/notifications/NotificationList.vue", "NotificationList.vue"], "names": [], "mappings": "AA2HA;EACA,kBAAA;EACA,kBAAA;AC1HA;AD8HA;EACA,eAAA;AC3HA;AD+HA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AC5HA;AD8HA;EACA,cAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,kCAAA;AC5HA;AD+HA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;EACA,kCAAA;AC7HA;ADiIA;EACA,cAAA;EACA,mBAAA;AC9HA;AACA;AD2HA;IAKA,oBAAA;AC7HE;AACF;AD+HA;EACA,kBAAA;AC7HA;ADiIA;EACA,qBAAA;AC9HA;ADiIA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AC9HA;ADgIA;EAEA,kCAAA;AC/HA;ADkIA;EACA,UAAA;EACA,mCAAA;AChIA;ADmIA;EACA,kCAAA;ACjIA;ADoIA;EACA,oBAAA;AClIA;AACA;ADoIA;IACA,cAAA;AClIE;AACF;ADsIA;EACA,aAAA;ACpIA;ADwIA;EACA,YAAA;EACA,mBAAA;ACrIA;ADwIA;EACA,mBAAA;ACrIA;AACA;ADuIA;IACA,cAAA;ACrIE;AACF;ADyIA;EACA,sBAAA;EACA,qBAAA;ACtIA;ADyIA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;ACtIA;ADwIA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;ACtIA;;AAEA,+CAA+C", "file": "NotificationList.vue", "sourcesContent": [`<template lang='pug'>
  div(
    data-test='notificationList'
    :class='variant'
  )
    .c-loading(v-if='ephemeral.isLoading')
      i18n.sr-only Loading...
      .c-skeleton(v-for='i in [0, 1, 2, 3]' :key='i')
        .c-skeleton-circle
        .c-skeleton-line

    .c-empty(v-else-if='!currentNotificationCount')
      i18n.has-text-1 Nothing to see here... yet!

    template(v-else v-for='list of notificationLists')
      span.is-subtitle.c-title(v-if='list.title') {{ list.title }}
      ul.c-list(
        :aria-label='list.title'
      )
        li(v-for='item of list.items')
          a.c-item(
            :class='item.read ? "" : "unread"'
            @click='handleItemClick(item)'
            draggable='false'
            @selectstart='ephemeral.isSelectingText = true'
          )
            span.c-thumbCircle
              avatar-user(:contractID='item.avatarUserID' size='md')
              i(v-if='item.icon' :class='\`icon-\${item.icon} \${iconBg(item.level)}\`')
            span.c-item-content
              span.c-item-text(v-safe-html='swapMemberMention(item.body)')
              span.c-item-date.has-text-1.has-text-small {{ ageTag(item) }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { timeSince } from '../../../../frontend/model/contracts/shared/time.js'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import { L } from '../../../../frontend/common/common.js'
import { swapMentionIDForDisplayname } from '../../../../frontend/model/chatroom/utils.js'

export default ({
  name: 'NotificationList',
  props: {
    variant: {
      type: String,
      validator: (value) => ['compact', 'default'].includes(value),
      default: 'default'
    }
  },
  data: () => ({
    ephemeral: {
      isLoading: false,
      // Whether the user is currently dragging the pointer to highlight some notification text.
      // This flag is used to ignore the click event fired upon releasing the pointer in that case.
      isSelectingText: false
    }
  }),
  components: {
    AvatarUser
  },
  computed: {
    ...mapGetters([
      'currentNotificationCount',
      'currentNewNotifications',
      'currentOlderNotifications'
    ]),
    notificationLists () {
      const defaultCategory = 'OLDER'
      const lists = [
        { title: L('NEW'), items: this.currentNewNotifications },
        { title: L('OLDER'), items: this.currentOlderNotifications }
      ].filter(list => list.items.length > 0)

      // If the only currently non-empty list has a category like 'OLDER' or 'UNREAD', then its title does not need to be displayed.
      // See https://www.figma.com/file/mxGadAHfkWH6qApebQvcdN/Group-Income-2.0?node-id=4107%3A0
      if (lists.length === 1 && lists[0].title === defaultCategory) {
        lists[0].title = ''
      }
      return lists
    }
  },
  methods: {
    ageTag (item: Object): string {
      return timeSince(item.timestamp)
    },
    handleItemClick (item) {
      if (!this.ephemeral.isSelectingText || !window.getSelection().toString()) {
        this.markAsRead(item)

        if (item.sbpInvocation) {
          sbp(...item.sbpInvocation)
        } else if (item.linkTo) {
          this.$router.push(item.linkTo).catch(console.warn)
        }
        this.$emit('select')
      }
      this.ephemeral.isSelectingText = false
    },
    iconBg (level: string): string {
      return {
        info: 'has-background-primary has-text-primary',
        success: 'has-background-success has-text-success',
        danger: 'has-background-danger has-text-danger'
      }[level]
    },
    markAsRead (item: Object): void {
      sbp('gi.notifications/markAsRead', item)
    },
    swapMemberMention (text: string): string {
      return swapMentionIDForDisplayname(text, {
        escaped: false,
        forChat: false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-empty {
  padding: 3rem 1rem;
  text-align: center;
}

.c-loading {
  .compact & {
    padding: 0 1rem;
  }
}

.c-skeleton {
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &-circle {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background-color: $general_2;
  }

  &-line {
    flex-grow: 1;
    height: 1.5rem;
    border-radius: 0.7rem;
    background-color: $general_2;
  }
}

.c-title {
  display: block;
  padding: 0 0 0.5rem;

  @include tablet {
    padding-left: 0.5rem;
  }

  .compact & {
    padding-left: 1rem;
  }
}

.c-list {
  margin-bottom: 0.5rem;
}

.c-item {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 3rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: $general_2;
  }

  &:focus {
    z-index: 1;
    outline: 1px solid $primary_0;
  }

  &.unread {
    background-color: $general_2;
  }

  .default & {
    padding: 1rem 0.5rem;

    @include tablet {
      .c-item-text {
        display: block;
      }
    }
  }

  .compact & {
    padding: 1rem;
  }
}

.c-item-content {
  flex-grow: 1;
  margin-left: 0.5rem;
}

.c-item-date {
  margin-left: 0.5rem;

  @include tablet {
    .default & {
      margin-left: 0;
    }
  }
}

.c-item-text {
  word-break: break-word;
  word-wrap: break-word;
}

.c-thumbCircle {
  position: relative;
  display: inline-block;
  flex-shrink: 0;

  i {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
`, ".c-empty {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n\n.compact .c-loading {\n  padding: 0 1rem;\n}\n\n.c-skeleton {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n}\n.c-skeleton-circle {\n  display: block;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 0.5rem;\n  background-color: var(--general_2);\n}\n.c-skeleton-line {\n  flex-grow: 1;\n  height: 1.5rem;\n  border-radius: 0.7rem;\n  background-color: var(--general_2);\n}\n\n.c-title {\n  display: block;\n  padding: 0 0 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-title {\n    padding-left: 0.5rem;\n  }\n}\n.compact .c-title {\n  padding-left: 1rem;\n}\n\n.c-list {\n  margin-bottom: 0.5rem;\n}\n\n.c-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 3rem;\n  cursor: pointer;\n}\n.c-item:hover, .c-item:focus {\n  background-color: var(--general_2);\n}\n.c-item:focus {\n  z-index: 1;\n  outline: 1px solid var(--primary_0);\n}\n.c-item.unread {\n  background-color: var(--general_2);\n}\n.default .c-item {\n  padding: 1rem 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .default .c-item .c-item-text {\n    display: block;\n  }\n}\n.compact .c-item {\n  padding: 1rem;\n}\n\n.c-item-content {\n  flex-grow: 1;\n  margin-left: 0.5rem;\n}\n\n.c-item-date {\n  margin-left: 0.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .default .c-item-date {\n    margin-left: 0;\n  }\n}\n\n.c-item-text {\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\n.c-thumbCircle {\n  position: relative;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.c-thumbCircle i {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1rem;\n  height: 1rem;\n  font-size: 0.5rem;\n  line-height: 1rem;\n  text-align: center;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=NotificationList.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-e5f14534";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  div(
    data-test='notificationList'
    :class='variant'
  )
    .c-loading(v-if='ephemeral.isLoading')
      i18n.sr-only Loading...
      .c-skeleton(v-for='i in [0, 1, 2, 3]' :key='i')
        .c-skeleton-circle
        .c-skeleton-line

    .c-empty(v-else-if='!currentNotificationCount')
      i18n.has-text-1 Nothing to see here... yet!

    template(v-else v-for='list of notificationLists')
      span.is-subtitle.c-title(v-if='list.title') {{ list.title }}
      ul.c-list(
        :aria-label='list.title'
      )
        li(v-for='item of list.items')
          a.c-item(
            :class='item.read ? "" : "unread"'
            @click='handleItemClick(item)'
            draggable='false'
            @selectstart='ephemeral.isSelectingText = true'
          )
            span.c-thumbCircle
              avatar-user(:contractID='item.avatarUserID' size='md')
              i(v-if='item.icon' :class='\`icon-\${item.icon} \${iconBg(item.level)}\`')
            span.c-item-content
              span.c-item-text(v-safe-html='swapMemberMention(item.body)')
              span.c-item-date.has-text-1.has-text-small {{ ageTag(item) }}
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { timeSince } from '../../../../frontend/model/contracts/shared/time.js'
import AvatarUser from '../../../../frontend/views/components/AvatarUser.vue'
import { L } from '../../../../frontend/common/common.js'
import { swapMentionIDForDisplayname } from '../../../../frontend/model/chatroom/utils.js'

export default ({
  name: 'NotificationList',
  props: {
    variant: {
      type: String,
      validator: (value) => ['compact', 'default'].includes(value),
      default: 'default'
    }
  },
  data: () => ({
    ephemeral: {
      isLoading: false,
      // Whether the user is currently dragging the pointer to highlight some notification text.
      // This flag is used to ignore the click event fired upon releasing the pointer in that case.
      isSelectingText: false
    }
  }),
  components: {
    AvatarUser
  },
  computed: {
    ...mapGetters([
      'currentNotificationCount',
      'currentNewNotifications',
      'currentOlderNotifications'
    ]),
    notificationLists () {
      const defaultCategory = 'OLDER'
      const lists = [
        { title: L('NEW'), items: this.currentNewNotifications },
        { title: L('OLDER'), items: this.currentOlderNotifications }
      ].filter(list => list.items.length > 0)

      // If the only currently non-empty list has a category like 'OLDER' or 'UNREAD', then its title does not need to be displayed.
      // See https://www.figma.com/file/mxGadAHfkWH6qApebQvcdN/Group-Income-2.0?node-id=4107%3A0
      if (lists.length === 1 && lists[0].title === defaultCategory) {
        lists[0].title = ''
      }
      return lists
    }
  },
  methods: {
    ageTag (item: Object): string {
      return timeSince(item.timestamp)
    },
    handleItemClick (item) {
      if (!this.ephemeral.isSelectingText || !window.getSelection().toString()) {
        this.markAsRead(item)

        if (item.sbpInvocation) {
          sbp(...item.sbpInvocation)
        } else if (item.linkTo) {
          this.$router.push(item.linkTo).catch(console.warn)
        }
        this.$emit('select')
      }
      this.ephemeral.isSelectingText = false
    },
    iconBg (level: string): string {
      return {
        info: 'has-background-primary has-text-primary',
        success: 'has-background-success has-text-success',
        danger: 'has-background-danger has-text-danger'
      }[level]
    },
    markAsRead (item: Object): void {
      sbp('gi.notifications/markAsRead', item)
    },
    swapMemberMention (text: string): string {
      return swapMentionIDForDisplayname(text, {
        escaped: false,
        forChat: false
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-empty {
  padding: 3rem 1rem;
  text-align: center;
}

.c-loading {
  .compact & {
    padding: 0 1rem;
  }
}

.c-skeleton {
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &-circle {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background-color: $general_2;
  }

  &-line {
    flex-grow: 1;
    height: 1.5rem;
    border-radius: 0.7rem;
    background-color: $general_2;
  }
}

.c-title {
  display: block;
  padding: 0 0 0.5rem;

  @include tablet {
    padding-left: 0.5rem;
  }

  .compact & {
    padding-left: 1rem;
  }
}

.c-list {
  margin-bottom: 0.5rem;
}

.c-item {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 3rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: $general_2;
  }

  &:focus {
    z-index: 1;
    outline: 1px solid $primary_0;
  }

  &.unread {
    background-color: $general_2;
  }

  .default & {
    padding: 1rem 0.5rem;

    @include tablet {
      .c-item-text {
        display: block;
      }
    }
  }

  .compact & {
    padding: 1rem;
  }
}

.c-item-content {
  flex-grow: 1;
  margin-left: 0.5rem;
}

.c-item-date {
  margin-left: 0.5rem;

  @include tablet {
    .default & {
      margin-left: 0;
    }
  }
}

.c-item-text {
  word-break: break-word;
  word-wrap: break-word;
}

.c-thumbCircle {
  position: relative;
  display: inline-block;
  flex-shrink: 0;

  i {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
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
var NotificationList_default = __vue_component__;

export {
  NotificationList_default
};
//# sourceMappingURL=chunk-DNBNZGVL-cached.js.map
