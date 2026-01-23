import {
  buildInvitationUrl
} from "./chunk-EPK24SZY-cached.js";
import {
  LinkToCopy_default
} from "./chunk-U5MBT6RH-cached.js";
import {
  broken_link_default
} from "./chunk-WFO36DTC-cached.js";
import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  MAX_GROUP_MEMBER_COUNT
} from "./chunk-UYGYRQRQ-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  REPLACE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/group-settings/InvitationLinkModal.vue
var __vue_script__ = {
  name: "InvitationLinkModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    LinkToCopy: LinkToCopy_default,
    SvgBrokenLink: broken_link_default
  },
  computed: {
    ...mapGetters([
      "currentWelcomeInvite",
      "currentGroupState"
    ]),
    welcomeInviteSecret() {
      const key = this.currentGroupState._vm.invites?.[this.currentWelcomeInvite.inviteId]?.inviteSecret;
      if (!key) {
        console.error(`undefined key for welcomeInviteId: ${this.currentWelcomeInvite.inviteId}`);
        return void 0;
      }
      return key;
    },
    link() {
      const key = this.welcomeInviteSecret;
      if (key) {
        return buildInvitationUrl(this.$store.state.currentGroupId, this.currentGroupState.settings?.groupName, key);
      }
    },
    expireDate() {
      return humanDate(this.currentWelcomeInvite.expires, { month: "long", day: "numeric" });
    },
    anyoneLinkMax() {
      return MAX_GROUP_MEMBER_COUNT;
    }
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    handleBrokenInviteClick(e) {
      if (e.target.classList.contains("js-click")) {
        esm_default("okTurtles.events/emit", REPLACE_MODAL, "UserSettingsModal", {
          section: "application-logs",
          errorMsg: "Undefined key for invite"
        });
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    {
      ref: "modal",
      attrs: { a11yTitle: _vm.L("Add new members") },
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function() {
            return [_c("i18n", [_vm._v("Add new members")])];
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "div",
        { staticClass: "c-container" },
        [
          _vm.link ? [
            _c(
              "i18n",
              { staticClass: "is-title-4", attrs: { tag: "h3" } },
              [_vm._v("Share this link to grant access to your group.")]
            ),
            _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: { tag: "p", args: { count: _vm.anyoneLinkMax } }
              },
              [
                _vm._v(
                  "After the onboarding period has ended, everyone will be asked to vote on whether or not a new member should be added. But for now, enjoy {count} free passes!"
                )
              ]
            ),
            _c("link-to-copy", {
              staticClass: "c-link",
              attrs: { link: _vm.link }
            }),
            _vm.expireDate ? _c(
              "i18n",
              {
                staticClass: "has-text-1",
                attrs: {
                  tag: "p",
                  args: { expireDate: _vm.expireDate }
                }
              },
              [_vm._v("This invite link expires on {expireDate}.")]
            ) : _c(
              "i18n",
              { staticClass: "has-text-1", attrs: { tag: "p" } },
              [_vm._v("This invite link doesn't expire")]
            ),
            _c(
              "i18n",
              {
                staticClass: "is-outlined c-cta",
                attrs: { tag: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.close($event);
                  }
                }
              },
              [_vm._v("Awesome")]
            )
          ] : _c(
            "div",
            { staticClass: "c-broken" },
            [
              _c("svg-broken-link", { staticClass: "c-svg" }),
              _c(
                "i18n",
                { staticClass: "is-title-4", attrs: { tag: "h3" } },
                [_vm._v("Broken invite link!")]
              ),
              _c(
                "i18n",
                {
                  attrs: {
                    tag: "p",
                    args: {
                      a_: '<button class="link js-click">',
                      _a: "</button>"
                    }
                  },
                  on: { click: _vm.handleBrokenInviteClick }
                },
                [_vm._v("See {a_}logs for details{_a}.")]
              ),
              _c(
                "i18n",
                {
                  staticClass: "is-outlined c-cta",
                  attrs: { tag: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault();
                      return _vm.close($event);
                    }
                  }
                },
                [_vm._v("OK")]
              )
            ],
            1
          )
        ],
        2
      )
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-ff7ea93e_0", { source: ".c-container[data-v-ff7ea93e] {\n  text-align: center;\n  max-width: 100%;\n}\n.c-link[data-v-ff7ea93e] {\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n.c-cta[data-v-ff7ea93e] {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=InvitationLinkModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/InvitationLinkModal.vue", "InvitationLinkModal.vue"], "names": [], "mappings": "AAwFA;EACA,kBAAA;EACA,eAAA;ACvFA;AD0FA;EACA,gBAAA;EACA,qBAAA;ACvFA;AD0FA;EACA,gBAAA;ACvFA;;AAEA,kDAAkD", "file": "InvitationLinkModal.vue", "sourcesContent": [`<template lang='pug'>
modal-template(ref='modal' :a11yTitle='L("Add new members")')
  template(#title='')
    i18n Add new members

  .c-container
    template(v-if='link')
      i18n.is-title-4(tag='h3') Share this link to grant access to your group.
      i18n.has-text-1(tag='p' :args='{ count: anyoneLinkMax }') After the onboarding period has ended, everyone will be asked to vote on whether or not a new member should be added. But for now, enjoy {count} free passes!
      link-to-copy.c-link(:link='link')
      i18n.has-text-1(v-if='expireDate' tag='p' :args='{ expireDate }') This invite link expires on {expireDate}.
      i18n.has-text-1(v-else tag='p') This invite link doesn't expire
      i18n.is-outlined.c-cta(tag='button' @click.prevent='close') Awesome
    .c-broken(v-else)
      svg-broken-link.c-svg
      i18n.is-title-4(tag='h3') Broken invite link!
      i18n(
        tag='p'
        @click='handleBrokenInviteClick'
        :args='{ \\
          a_: \`<button class="link js-click">\`, \\
          _a: "</button>" \\
        }'
      ) See {a_}logs for details{_a}.
      i18n.is-outlined.c-cta(tag='button' @click.prevent='close') OK
</template>
<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import SvgBrokenLink from '../../../../frontend/assets/svgs/broken-link.svg'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { MAX_GROUP_MEMBER_COUNT } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'InvitationLinkModal',
  components: {
    ModalTemplate,
    LinkToCopy,
    SvgBrokenLink
  },
  computed: {
    ...mapGetters([
      'currentWelcomeInvite',
      'currentGroupState'
    ]),
    welcomeInviteSecret () {
      const key = this.currentGroupState._vm.invites?.[this.currentWelcomeInvite.inviteId]?.inviteSecret
      if (!key) {
        console.error(\`undefined key for welcomeInviteId: \${this.currentWelcomeInvite.inviteId}\`)
        return undefined
      }
      return key
    },
    link () {
      const key = this.welcomeInviteSecret
      if (key) {
        return buildInvitationUrl(this.$store.state.currentGroupId, this.currentGroupState.settings?.groupName, key)
      }
    },
    expireDate () {
      return humanDate(this.currentWelcomeInvite.expires, { month: 'long', day: 'numeric' })
    },
    anyoneLinkMax () {
      return MAX_GROUP_MEMBER_COUNT
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    handleBrokenInviteClick (e) {
      if (e.target.classList.contains('js-click')) {
        sbp('okTurtles.events/emit', REPLACE_MODAL, 'UserSettingsModal', {
          section: 'application-logs',
          errorMsg: 'Undefined key for invite'
        })
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  text-align: center;
  max-width: 100%;
}

.c-link {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.c-cta {
  margin-top: 2rem;
}
</style>
`, ".c-container {\n  text-align: center;\n  max-width: 100%;\n}\n\n.c-link {\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.c-cta {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=InvitationLinkModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-ff7ea93e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(ref='modal' :a11yTitle='L("Add new members")')
  template(#title='')
    i18n Add new members

  .c-container
    template(v-if='link')
      i18n.is-title-4(tag='h3') Share this link to grant access to your group.
      i18n.has-text-1(tag='p' :args='{ count: anyoneLinkMax }') After the onboarding period has ended, everyone will be asked to vote on whether or not a new member should be added. But for now, enjoy {count} free passes!
      link-to-copy.c-link(:link='link')
      i18n.has-text-1(v-if='expireDate' tag='p' :args='{ expireDate }') This invite link expires on {expireDate}.
      i18n.has-text-1(v-else tag='p') This invite link doesn't expire
      i18n.is-outlined.c-cta(tag='button' @click.prevent='close') Awesome
    .c-broken(v-else)
      svg-broken-link.c-svg
      i18n.is-title-4(tag='h3') Broken invite link!
      i18n(
        tag='p'
        @click='handleBrokenInviteClick'
        :args='{ \\
          a_: \`<button class="link js-click">\`, \\
          _a: "</button>" \\
        }'
      ) See {a_}logs for details{_a}.
      i18n.is-outlined.c-cta(tag='button' @click.prevent='close') OK
</template>
<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import LinkToCopy from '../../../../frontend/views/components/LinkToCopy.vue'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import SvgBrokenLink from '../../../../frontend/assets/svgs/broken-link.svg'
import { buildInvitationUrl } from '../../../../frontend/views/utils/buildInvitationUrl.js'
import { MAX_GROUP_MEMBER_COUNT } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'InvitationLinkModal',
  components: {
    ModalTemplate,
    LinkToCopy,
    SvgBrokenLink
  },
  computed: {
    ...mapGetters([
      'currentWelcomeInvite',
      'currentGroupState'
    ]),
    welcomeInviteSecret () {
      const key = this.currentGroupState._vm.invites?.[this.currentWelcomeInvite.inviteId]?.inviteSecret
      if (!key) {
        console.error(\`undefined key for welcomeInviteId: \${this.currentWelcomeInvite.inviteId}\`)
        return undefined
      }
      return key
    },
    link () {
      const key = this.welcomeInviteSecret
      if (key) {
        return buildInvitationUrl(this.$store.state.currentGroupId, this.currentGroupState.settings?.groupName, key)
      }
    },
    expireDate () {
      return humanDate(this.currentWelcomeInvite.expires, { month: 'long', day: 'numeric' })
    },
    anyoneLinkMax () {
      return MAX_GROUP_MEMBER_COUNT
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    handleBrokenInviteClick (e) {
      if (e.target.classList.contains('js-click')) {
        sbp('okTurtles.events/emit', REPLACE_MODAL, 'UserSettingsModal', {
          section: 'application-logs',
          errorMsg: 'Undefined key for invite'
        })
      }
    }
  }
}: Object)
<\/script>
<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-container {
  text-align: center;
  max-width: 100%;
}

.c-link {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.c-cta {
  margin-top: 2rem;
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
var InvitationLinkModal_default = __vue_component__;
export {
  InvitationLinkModal_default as default
};
//# sourceMappingURL=InvitationLinkModal-N2GOBLNM-cached.js.map
