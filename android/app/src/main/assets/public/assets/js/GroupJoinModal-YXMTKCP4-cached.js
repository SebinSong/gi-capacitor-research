import {
  access_default
} from "./chunk-3UBAHI3N-cached.js";
import {
  invitation_default
} from "./chunk-4IQTUSSG-cached.js";
import {
  proposal_default
} from "./chunk-DBTA73EV-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  REPLACE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/group-settings/GroupJoinModal.vue
var __vue_script__ = {
  name: "GroupJoinModal",
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    SvgAccess: access_default,
    SvgInvitation: invitation_default,
    SvgProposal: proposal_default
  },
  data() {
    return {
      ephemeral: {
        indicator: 0
      },
      config: [
        "get-an-invitation",
        "use-your-unique-access-link"
      ]
    };
  },
  // TODO move this into slider component if we have more than one
  directives: {
    observer: {
      inserted: (el, { value, arg }) => {
        try {
          const io = new window.IntersectionObserver(
            // Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
            (elements) => {
              if (elements[0].intersectionRatio >= 0.5) {
                value(parseInt(arg));
              }
            },
            { threshold: [0.5] }
          );
          io.observe(el);
          el.giUnbind = () => {
            io.disconnect();
          };
        } catch (error) {
          console.error(error.message, "\n polyfill: https://github.com/w3c/IntersectionObserver");
        }
      },
      unbind(el) {
        el.giUnbind();
      }
    }
  },
  methods: {
    showCreateModal() {
      esm_default("okTurtles.events/emit", REPLACE_MODAL, "GroupCreationModal");
    },
    updateIndicator(i) {
      this.ephemeral.indicator = i;
      history.pushState(null, null, `#${this.config[i]}`);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    { attrs: { fullscreen: true, a11yTitle: _vm.L("How to join a group") } },
    [
      _c("i18n", { staticClass: "is-title-1 c-title", attrs: { tag: "h1" } }, [
        _vm._v("How to join a group")
      ]),
      _c("div", { staticClass: "wrapper" }, [
        _c("div", { staticClass: "slider" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "observer",
                  rawName: "v-observer:0",
                  value: _vm.updateIndicator,
                  expression: "updateIndicator",
                  arg: "0"
                }
              ],
              staticClass: "slide",
              attrs: { id: _vm.config[0] }
            },
            [
              _c(
                "div",
                { staticClass: "slide-img" },
                [_c("svg-invitation")],
                1
              ),
              _c("i18n", { staticClass: "is-title-4", attrs: { tag: "h4" } }, [
                _vm._v("1. Get an invitation")
              ]),
              _c("i18n", { attrs: { tag: "p" } }, [
                _vm._v(
                  "Click on the individual link you received from an existing group. Don't have an invite?"
                )
              ]),
              _c(
                "i18n",
                {
                  staticClass: "link",
                  attrs: { tag: "button" },
                  on: { click: _vm.showCreateModal }
                },
                [_vm._v("Create your own group")]
              )
            ],
            1
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "observer",
                  rawName: "v-observer:1",
                  value: _vm.updateIndicator,
                  expression: "updateIndicator",
                  arg: "1"
                }
              ],
              staticClass: "slide",
              attrs: { id: _vm.config[1] }
            },
            [
              _c("div", { staticClass: "slide-img" }, [_c("svg-access")], 1),
              _c("i18n", { staticClass: "is-title-4", attrs: { tag: "h4" } }, [
                _vm._v("2. Wait for an existing member to use the app")
              ]),
              _c("i18n", { attrs: { tag: "p" } }, [
                _vm._v(
                  "Because Group Income is end-to-end encrypted, an existing member must send you the secret keys to access the group. They will automatically do this when they load the app."
                )
              ])
            ],
            1
          )
        ]),
        _c(
          "div",
          { staticClass: "dots" },
          _vm._l(_vm.config, function(link, i) {
            return _c("a", {
              staticClass: "dot",
              class: { "is-active": _vm.ephemeral.indicator == i },
              attrs: {
                href: "#" + link,
                "aria-label": _vm.L("Go to step {num}", { num: i + 1 })
              }
            });
          }),
          0
        )
      ])
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-ca618054_0", { source: ".c-title[data-v-ca618054] {\n  margin-top: 5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-title[data-v-ca618054] {\n    margin-top: 15vh;\n}\n}\n.wrapper[data-v-ca618054] {\n  width: 100%;\n  margin: 0 auto;\n}\n@media screen and (min-width: 1200px) {\n.wrapper[data-v-ca618054] {\n    width: auto;\n}\n}\n.slider[data-v-ca618054] {\n  display: flex;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  /* make it smooth on iOS */\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-points-x: repeat(100vw);\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n}\n.slider[data-v-ca618054]::-webkit-scrollbar {\n  width: 0 !important;\n}\n.slide[data-v-ca618054] {\n  scroll-snap-align: center;\n  flex-shrink: 0;\n  width: 100%;\n  padding: 0.75rem;\n  text-align: center;\n}\n@media screen and (min-width: 1200px) {\n.slide[data-v-ca618054] {\n    text-align: left;\n    width: 16rem;\n}\n}\n.slide p[data-v-ca618054] {\n  max-width: 16rem;\n  margin: 1rem auto 0 auto;\n}\n.slide .link[data-v-ca618054] {\n  margin-bottom: 1rem;\n}\n.slide-img[data-v-ca618054] {\n  display: flex;\n  align-items: center;\n  height: 6rem;\n  margin: 2.5rem auto;\n}\n.slide-img svg[data-v-ca618054] {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (min-width: 1200px) {\n.slide-img[data-v-ca618054] {\n    margin: 3.5rem auto;\n}\n}\n.dots[data-v-ca618054] {\n  display: flex;\n  justify-content: center;\n}\n@media screen and (min-width: 1200px) {\n.dots[data-v-ca618054] {\n    display: none;\n}\n}\n.dot[data-v-ca618054] {\n  background-color: var(--general_0);\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.25rem;\n}\n.dot.is-active[data-v-ca618054] {\n  background-color: var(--primary_0);\n}\n#get-an-invitation svg[data-v-ca618054] {\n  height: 6.5rem;\n  margin-left: 0.5rem;\n  margin-top: -0.5rem;\n}\n#use-your-unique-access-link svg[data-v-ca618054] {\n  height: 5.5rem;\n  margin-top: 1.5rem;\n}\n#wait-for-you-group-vote svg[data-v-ca618054] {\n  height: 6.75rem;\n  margin-left: -0.5rem;\n}\n\n/*# sourceMappingURL=GroupJoinModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/GroupJoinModal.vue", "GroupJoinModal.vue"], "names": [], "mappings": "AAoGA;EACA,gBAAA;ACnGA;AACA;ADiGA;IAIA,gBAAA;AClGE;AACF;ADqGA;EACA,WAAA;EACA,cAAA;AClGA;AACA;AD+FA;IAKA,WAAA;ACjGE;AACF;ADoGA;EACA,aAAA;EACA,gBAAA;EACA,wBAAA;EACA,8BAAA;EAEA,0BAAA;EACA,iCAAA;EACA,mCAAA;EACA,6BAAA;EACA,qBAAA;AClGA;ADoGA;EACA,mBAAA;AClGA;ADsGA;EACA,yBAAA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;ACnGA;AACA;AD6FA;IAQA,gBAAA;IACA,YAAA;AClGE;AACF;ADoGA;EACA,gBAAA;EACA,wBAAA;AClGA;ADqGA;EACA,mBAAA;ACnGA;ADuGA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;ACpGA;ADsGA;EACA,WAAA;EACA,YAAA;ACpGA;AACA;AD2FA;IAYA,mBAAA;ACpGE;AACF;ADuGA;EACA,aAAA;EACA,uBAAA;ACpGA;AACA;ADiGA;IAKA,aAAA;ACnGE;AACF;ADsGA;EACA,kCAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;ACnGA;ADqGA;EACA,kCAAA;ACnGA;ADuGA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;ACpGA;ADuGA;EACA,cAAA;EACA,kBAAA;ACpGA;ADuGA;EACA,eAAA;EACA,oBAAA;ACpGA;;AAEA,6CAA6C", "file": "GroupJoinModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template(:fullscreen='true' :a11yTitle='L("How to join a group")')
  i18n.is-title-1.c-title(tag='h1') How to join a group

  .wrapper
    .slider
      .slide(v-observer:0='updateIndicator' :id='config[0]')
        .slide-img
          svg-invitation

        i18n.is-title-4(tag='h4') 1. Get an invitation
        i18n(tag='p') Click on the individual link you received from an existing group. Don't have an invite?
        i18n(tag='button' class='link' @click='showCreateModal') Create your own group

      .slide(v-observer:1='updateIndicator' :id='config[1]')
        .slide-img
          svg-access

        i18n.is-title-4(tag='h4') 2. Wait for an existing member to use the app
        i18n(tag='p') Because Group Income is end-to-end encrypted, an existing member must send you the secret keys to access the group. They will automatically do this when they load the app.

    .dots
      a.dot(
        v-for='(link, i) in config'
        :class='{ "is-active": ephemeral.indicator == i }'
        :href='"#"+link'
        :aria-label='L("Go to step {num}", { num: i + 1 })'
      )
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import SvgAccess from '../../../../frontend/assets/svgs/access.svg'
import SvgInvitation from '../../../../frontend/assets/svgs/invitation.svg'
import SvgProposal from '../../../../frontend/assets/svgs/proposal.svg'

export default ({
  name: 'GroupJoinModal',
  components: {
    ModalBaseTemplate,
    SvgAccess,
    SvgInvitation,
    SvgProposal
  },
  data () {
    return {
      ephemeral: {
        indicator: 0
      },
      config: [
        'get-an-invitation',
        'use-your-unique-access-link'
      ]
    }
  },
  // TODO move this into slider component if we have more than one
  directives: {
    observer: {
      inserted: (el, { value, arg }) => {
        try {
          const io = new window.IntersectionObserver( // Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
            (elements) => {
              if (elements[0].intersectionRatio >= 0.5) { // Wait for the middle of the screen
                value(parseInt(arg))
              }
            },
            { threshold: [0.5] }
          )

          io.observe(el)

          el.giUnbind = () => {
            io.disconnect()
          }
        } catch (error) {
          console.error(error.message, '\\n polyfill: https://github.com/w3c/IntersectionObserver')
        }
      },
      unbind (el) {
        el.giUnbind()
      }
    }
  },
  methods: {
    showCreateModal () {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'GroupCreationModal')
    },
    updateIndicator (i) {
      this.ephemeral.indicator = i
      history.pushState(null, null, \`#\${this.config[i]}\`)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-title {
  margin-top: 5rem;

  @include desktop {
    margin-top: 15vh;
  }
}

.wrapper {
  width: 100%;
  margin: 0 auto;

  @include desktop {
    width: auto;
  }
}

.slider {
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;

  /* make it smooth on iOS */
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-x: repeat(100vw);
  scroll-snap-type: x mandatory; // a helpful article for what this property does: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.slide {
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  padding: 0.75rem;
  text-align: center;

  @include desktop {
    text-align: left;
    width: 16rem;
  }

  p {
    max-width: 16rem;
    margin: 1rem auto 0 auto;
  }

  .link {
    margin-bottom: 1rem;
  }
}

.slide-img {
  display: flex;
  align-items: center;
  height: 6rem;
  margin: 2.5rem auto;

  svg {
    width: 100%;
    height: 100%;
  }

  @include desktop {
    margin: 3.5rem auto;
  }
}

.dots {
  display: flex;
  justify-content: center;

  @include desktop {
    display: none;
  }
}

.dot {
  background-color: $general_0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0.25rem;

  &.is-active {
    background-color: $primary_0;
  }
}

#get-an-invitation svg {
  height: 6.5rem;
  margin-left: 0.5rem;
  margin-top: -0.5rem;
}

#use-your-unique-access-link svg {
  height: 5.5rem;
  margin-top: 1.5rem;
}

#wait-for-you-group-vote svg {
  height: 6.75rem;
  margin-left: -0.5rem;
}
</style>
`, ".c-title {\n  margin-top: 5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-title {\n    margin-top: 15vh;\n  }\n}\n\n.wrapper {\n  width: 100%;\n  margin: 0 auto;\n}\n@media screen and (min-width: 1200px) {\n  .wrapper {\n    width: auto;\n  }\n}\n\n.slider {\n  display: flex;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  /* make it smooth on iOS */\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-points-x: repeat(100vw);\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n}\n.slider::-webkit-scrollbar {\n  width: 0 !important;\n}\n\n.slide {\n  scroll-snap-align: center;\n  flex-shrink: 0;\n  width: 100%;\n  padding: 0.75rem;\n  text-align: center;\n}\n@media screen and (min-width: 1200px) {\n  .slide {\n    text-align: left;\n    width: 16rem;\n  }\n}\n.slide p {\n  max-width: 16rem;\n  margin: 1rem auto 0 auto;\n}\n.slide .link {\n  margin-bottom: 1rem;\n}\n\n.slide-img {\n  display: flex;\n  align-items: center;\n  height: 6rem;\n  margin: 2.5rem auto;\n}\n.slide-img svg {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .slide-img {\n    margin: 3.5rem auto;\n  }\n}\n\n.dots {\n  display: flex;\n  justify-content: center;\n}\n@media screen and (min-width: 1200px) {\n  .dots {\n    display: none;\n  }\n}\n\n.dot {\n  background-color: var(--general_0);\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.25rem;\n}\n.dot.is-active {\n  background-color: var(--primary_0);\n}\n\n#get-an-invitation svg {\n  height: 6.5rem;\n  margin-left: 0.5rem;\n  margin-top: -0.5rem;\n}\n\n#use-your-unique-access-link svg {\n  height: 5.5rem;\n  margin-top: 1.5rem;\n}\n\n#wait-for-you-group-vote svg {\n  height: 6.75rem;\n  margin-left: -0.5rem;\n}\n\n/*# sourceMappingURL=GroupJoinModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-ca618054";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template(:fullscreen='true' :a11yTitle='L("How to join a group")')
  i18n.is-title-1.c-title(tag='h1') How to join a group

  .wrapper
    .slider
      .slide(v-observer:0='updateIndicator' :id='config[0]')
        .slide-img
          svg-invitation

        i18n.is-title-4(tag='h4') 1. Get an invitation
        i18n(tag='p') Click on the individual link you received from an existing group. Don't have an invite?
        i18n(tag='button' class='link' @click='showCreateModal') Create your own group

      .slide(v-observer:1='updateIndicator' :id='config[1]')
        .slide-img
          svg-access

        i18n.is-title-4(tag='h4') 2. Wait for an existing member to use the app
        i18n(tag='p') Because Group Income is end-to-end encrypted, an existing member must send you the secret keys to access the group. They will automatically do this when they load the app.

    .dots
      a.dot(
        v-for='(link, i) in config'
        :class='{ "is-active": ephemeral.indicator == i }'
        :href='"#"+link'
        :aria-label='L("Go to step {num}", { num: i + 1 })'
      )
</template>

<script>
import sbp from '@sbp/sbp'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { REPLACE_MODAL } from '../../../../frontend/utils/events.js'
import SvgAccess from '../../../../frontend/assets/svgs/access.svg'
import SvgInvitation from '../../../../frontend/assets/svgs/invitation.svg'
import SvgProposal from '../../../../frontend/assets/svgs/proposal.svg'

export default ({
  name: 'GroupJoinModal',
  components: {
    ModalBaseTemplate,
    SvgAccess,
    SvgInvitation,
    SvgProposal
  },
  data () {
    return {
      ephemeral: {
        indicator: 0
      },
      config: [
        'get-an-invitation',
        'use-your-unique-access-link'
      ]
    }
  },
  // TODO move this into slider component if we have more than one
  directives: {
    observer: {
      inserted: (el, { value, arg }) => {
        try {
          const io = new window.IntersectionObserver( // Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
            (elements) => {
              if (elements[0].intersectionRatio >= 0.5) { // Wait for the middle of the screen
                value(parseInt(arg))
              }
            },
            { threshold: [0.5] }
          )

          io.observe(el)

          el.giUnbind = () => {
            io.disconnect()
          }
        } catch (error) {
          console.error(error.message, '\\n polyfill: https://github.com/w3c/IntersectionObserver')
        }
      },
      unbind (el) {
        el.giUnbind()
      }
    }
  },
  methods: {
    showCreateModal () {
      sbp('okTurtles.events/emit', REPLACE_MODAL, 'GroupCreationModal')
    },
    updateIndicator (i) {
      this.ephemeral.indicator = i
      history.pushState(null, null, \`#\${this.config[i]}\`)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-title {
  margin-top: 5rem;

  @include desktop {
    margin-top: 15vh;
  }
}

.wrapper {
  width: 100%;
  margin: 0 auto;

  @include desktop {
    width: auto;
  }
}

.slider {
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;

  /* make it smooth on iOS */
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-x: repeat(100vw);
  scroll-snap-type: x mandatory; // a helpful article for what this property does: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.slide {
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  padding: 0.75rem;
  text-align: center;

  @include desktop {
    text-align: left;
    width: 16rem;
  }

  p {
    max-width: 16rem;
    margin: 1rem auto 0 auto;
  }

  .link {
    margin-bottom: 1rem;
  }
}

.slide-img {
  display: flex;
  align-items: center;
  height: 6rem;
  margin: 2.5rem auto;

  svg {
    width: 100%;
    height: 100%;
  }

  @include desktop {
    margin: 3.5rem auto;
  }
}

.dots {
  display: flex;
  justify-content: center;

  @include desktop {
    display: none;
  }
}

.dot {
  background-color: $general_0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0.25rem;

  &.is-active {
    background-color: $primary_0;
  }
}

#get-an-invitation svg {
  height: 6.5rem;
  margin-left: 0.5rem;
  margin-top: -0.5rem;
}

#use-your-unique-access-link svg {
  height: 5.5rem;
  margin-top: 1.5rem;
}

#wait-for-you-group-vote svg {
  height: 6.75rem;
  margin-left: -0.5rem;
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
var GroupJoinModal_default = __vue_component__;
export {
  GroupJoinModal_default as default
};
//# sourceMappingURL=GroupJoinModal-YXMTKCP4-cached.js.map
