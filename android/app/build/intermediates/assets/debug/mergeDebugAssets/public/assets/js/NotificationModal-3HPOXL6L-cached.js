import {
  NotificationList_default
} from "./chunk-DNBNZGVL-cached.js";
import "./chunk-HRFGMP2Q-cached.js";
import "./chunk-A3KNU2XZ-cached.js";
import "./chunk-V3SQGGAF-cached.js";
import "./chunk-K4WYPR2K-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapState
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/notifications/NotificationModal.vue
var __vue_script__ = {
  name: "NotificationModal",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    NotificationList: NotificationList_default
  },
  data() {
    return {
      searchText: ""
    };
  },
  computed: {
    ...mapState([
      "currentGroupId"
    ])
  },
  methods: {
    clickSettings() {
      esm_default("okTurtles.events/emit", OPEN_MODAL, "UserSettingsModal", {
        tab: "notifications"
      });
    },
    markAllNotificationsAsRead() {
      esm_default("gi.notifications/markAllAsRead", this.currentGroupId);
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
        "data-test": "notificationModal"
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
              [_vm._v("Notifications")]
            ),
            _c(
              "div",
              { staticClass: "c-btn-container" },
              [
                _c(
                  "i18n",
                  {
                    staticClass: "link",
                    attrs: {
                      tag: "button",
                      "data-test": "MarkAllAsRead_In_Modal"
                    },
                    on: { click: _vm.markAllNotificationsAsRead }
                  },
                  [_vm._v("Mark all as read")]
                ),
                _c(
                  "button",
                  {
                    staticClass: "is-small is-outlined c-btnSettings",
                    on: { click: _vm.clickSettings }
                  },
                  [
                    _c("i", { staticClass: "icon-cog is-prefix" }),
                    _c("i18n", [_vm._v("Settings")])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "card c-card" },
          [_c("notification-list", { attrs: { variant: "default" } })],
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
  inject("data-v-44f6a352_0", { source: ".c-btn-container[data-v-44f6a352] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  flex-grow: 1;\n  padding: 0 1rem;\n  left: 0;\n  margin-top: 8rem;\n}\n@media screen and (min-width: 769px), print {\n.c-btn-container[data-v-44f6a352] {\n    position: relative;\n    width: auto;\n    padding: 0;\n    margin-top: 0;\n    margin-left: 0.5rem;\n}\n}\n.c-card[data-v-44f6a352] {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-card[data-v-44f6a352] {\n    margin-top: 3.5rem;\n}\n}\n.c-container[data-v-44f6a352] {\n  background-color: var(--general_2);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-container[data-v-44f6a352] {\n    max-width: 100%;\n    width: 50rem;\n}\n}\n.c-header[data-v-44f6a352] {\n  display: flex;\n  align-items: center;\n  background-color: var(--background_0);\n  justify-content: flex-start;\n  margin: 0 -1rem;\n  min-height: 4.75rem;\n  padding: 0 1rem;\n}\n@media screen and (min-width: 769px), print {\n.c-header[data-v-44f6a352] {\n    align-items: baseline;\n    background-color: transparent;\n    justify-content: space-between;\n    margin: 0;\n    max-width: 100%;\n    padding: 2rem 0 0;\n    width: 50rem;\n}\n}\n\n/*# sourceMappingURL=NotificationModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/notifications/NotificationModal.vue", "NotificationModal.vue"], "names": [], "mappings": "AA4DA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,OAAA;EACA,gBAAA;AC3DA;AACA;ADiDA;IAYA,kBAAA;IACA,WAAA;IACA,UAAA;IACA,aAAA;IACA,mBAAA;AC1DE;AACF;AD6DA;EACA,kBAAA;AC1DA;AACA;ADwDA;IAIA,kBAAA;ACzDE;AACF;AD4DA;EACA,kCAAA;EACA,YAAA;EACA,WAAA;ACzDA;AACA;ADqDA;IAMA,eAAA;IACA,YAAA;ACxDE;AACF;AD2DA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,2BAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;ACxDA;AACA;ADgDA;IAUA,qBAAA;IACA,6BAAA;IACA,8BAAA;IACA,SAAA;IACA,eAAA;IACA,iBAAA;IACA,YAAA;ACvDE;AACF;;AAEA,gDAAgD", "file": "NotificationModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template.has-background(ref='modal' :fullscreen='true' :a11yTitle='L("Group members")' data-test='notificationModal')
  .c-container
    .c-header
      i18n.is-title-2.c-title(tag='h2') Notifications

      .c-btn-container
        i18n.link(
          tag='button'
          data-test='MarkAllAsRead_In_Modal'
          @click='markAllNotificationsAsRead'
        ) Mark all as read

        button.is-small.is-outlined.c-btnSettings(@click='clickSettings')
          i.icon-cog.is-prefix
          i18n Settings

    .card.c-card
      notification-list(variant='default')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import NotificationList from './NotificationList.vue'

export default {
  name: 'NotificationModal',
  components: {
    ModalBaseTemplate,
    NotificationList
  },
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ])
  },
  methods: {
    clickSettings () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'UserSettingsModal', {
        tab: 'notifications'
      })
    },
    markAllNotificationsAsRead () {
      sbp('gi.notifications/markAllAsRead', this.currentGroupId)
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  flex-grow: 1;
  padding: 0 1rem;
  left: 0;
  margin-top: 8rem;

  @include tablet {
    position: relative;
    width: auto;
    padding: 0;
    margin-top: 0;
    margin-left: 0.5rem;
  }
}

.c-card {
  margin-top: 1.5rem;

  @include phone {
    margin-top: 3.5rem;
  }
}

.c-container {
  background-color: $general_2;
  height: 100%;
  width: 100%;

  @include tablet {
    max-width: 100%;
    width: 50rem;
  }
}

.c-header {
  display: flex;
  align-items: center;
  background-color: $background_0;
  justify-content: flex-start;
  margin: 0 -1rem;
  min-height: 4.75rem;
  padding: 0 1rem;

  @include tablet {
    align-items: baseline;
    background-color: transparent;
    justify-content: space-between;
    margin: 0;
    max-width: 100%;
    padding: 2rem 0 0;
    width: 50rem;
  }
}
</style>
`, ".c-btn-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  flex-grow: 1;\n  padding: 0 1rem;\n  left: 0;\n  margin-top: 8rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-btn-container {\n    position: relative;\n    width: auto;\n    padding: 0;\n    margin-top: 0;\n    margin-left: 0.5rem;\n  }\n}\n\n.c-card {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-card {\n    margin-top: 3.5rem;\n  }\n}\n\n.c-container {\n  background-color: var(--general_2);\n  height: 100%;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-container {\n    max-width: 100%;\n    width: 50rem;\n  }\n}\n\n.c-header {\n  display: flex;\n  align-items: center;\n  background-color: var(--background_0);\n  justify-content: flex-start;\n  margin: 0 -1rem;\n  min-height: 4.75rem;\n  padding: 0 1rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-header {\n    align-items: baseline;\n    background-color: transparent;\n    justify-content: space-between;\n    margin: 0;\n    max-width: 100%;\n    padding: 2rem 0 0;\n    width: 50rem;\n  }\n}\n\n/*# sourceMappingURL=NotificationModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-44f6a352";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template.has-background(ref='modal' :fullscreen='true' :a11yTitle='L("Group members")' data-test='notificationModal')
  .c-container
    .c-header
      i18n.is-title-2.c-title(tag='h2') Notifications

      .c-btn-container
        i18n.link(
          tag='button'
          data-test='MarkAllAsRead_In_Modal'
          @click='markAllNotificationsAsRead'
        ) Mark all as read

        button.is-small.is-outlined.c-btnSettings(@click='clickSettings')
          i.icon-cog.is-prefix
          i18n Settings

    .card.c-card
      notification-list(variant='default')
</template>

<script>
import sbp from '@sbp/sbp'
import { mapState } from 'vuex'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import NotificationList from './NotificationList.vue'

export default {
  name: 'NotificationModal',
  components: {
    ModalBaseTemplate,
    NotificationList
  },
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'currentGroupId'
    ])
  },
  methods: {
    clickSettings () {
      sbp('okTurtles.events/emit', OPEN_MODAL, 'UserSettingsModal', {
        tab: 'notifications'
      })
    },
    markAllNotificationsAsRead () {
      sbp('gi.notifications/markAllAsRead', this.currentGroupId)
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  flex-grow: 1;
  padding: 0 1rem;
  left: 0;
  margin-top: 8rem;

  @include tablet {
    position: relative;
    width: auto;
    padding: 0;
    margin-top: 0;
    margin-left: 0.5rem;
  }
}

.c-card {
  margin-top: 1.5rem;

  @include phone {
    margin-top: 3.5rem;
  }
}

.c-container {
  background-color: $general_2;
  height: 100%;
  width: 100%;

  @include tablet {
    max-width: 100%;
    width: 50rem;
  }
}

.c-header {
  display: flex;
  align-items: center;
  background-color: $background_0;
  justify-content: flex-start;
  margin: 0 -1rem;
  min-height: 4.75rem;
  padding: 0 1rem;

  @include tablet {
    align-items: baseline;
    background-color: transparent;
    justify-content: space-between;
    margin: 0;
    max-width: 100%;
    padding: 2rem 0 0;
    width: 50rem;
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
var NotificationModal_default = __vue_component__;
export {
  NotificationModal_default as default
};
//# sourceMappingURL=NotificationModal-3HPOXL6L-cached.js.map
