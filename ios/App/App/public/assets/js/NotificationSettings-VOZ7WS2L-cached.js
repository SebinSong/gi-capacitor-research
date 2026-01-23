import {
  SliderContinuous_default
} from "./chunk-WUIM2XSU-cached.js";
import {
  makeNotification,
  requestNotificationPermission
} from "./chunk-IR2UUO3D-cached.js";
import "./chunk-SC5GGDZP-cached.js";
import {
  debounce
} from "./chunk-MTWMQLQH-cached.js";
import {
  mapMutations
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/user-settings/NotificationVolume.vue
var __vue_script__ = {
  name: "NotificationVolume",
  components: {
    SliderContinuous: SliderContinuous_default
  },
  data() {
    return {
      config: {
        sliderMin: 0,
        sliderMax: 100,
        sliderUnit: "%"
      },
      ephemeral: {
        volume: 100
      }
    };
  },
  computed: {
    volumeFromStore() {
      return this.$store.getters.notificationVolume ?? 1;
    }
  },
  methods: {
    ...mapMutations(["setNotificationVolume"]),
    handleVolumeUpdate(e) {
      this.ephemeral.volume = e.target.value;
      this.debouncedPostVolumeChange();
    },
    debouncedPostVolumeChange: debounce(function() {
      const volume = this.ephemeral.volume / 100;
      const audioEl = this.$refs.exampleAudio;
      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.volume = volume;
      setTimeout(() => {
        audioEl.play();
      }, 10);
      this.setNotificationVolume(volume);
    }, 350)
  },
  created() {
    this.ephemeral.volume = Math.round(this.volumeFromStore * 100);
  },
  mounted() {
    this.$refs.exampleAudio.playbackRate = 1.25;
    this.$refs.exampleAudio.volume = this.volumeFromStore;
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-notification-volume" },
    [
      _c("i18n", { staticClass: "c-title" }, [_vm._v("Volume")]),
      _c(
        "div",
        { staticClass: "c-volume-slider-container" },
        [
          _c("slider-continuous", {
            staticClass: "c-volume-slider",
            attrs: {
              uid: "notification-volume",
              min: _vm.config.sliderMin,
              max: _vm.config.sliderMax,
              unit: _vm.config.sliderUnit,
              hideText: true,
              value: _vm.ephemeral.volume
            },
            on: { input: _vm.handleVolumeUpdate }
          }),
          _c("div", { staticClass: "c-volume-value" }, [
            _vm._v(
              _vm._s(_vm.ephemeral.volume) + _vm._s(_vm.config.sliderUnit)
            )
          ])
        ],
        1
      ),
      _c("audio", {
        ref: "exampleAudio",
        attrs: { src: "/assets/audio/msg-received.mp3", type: "audio/mpeg" }
      })
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-f3f0546e_0", { source: ".c-notification-volume[data-v-f3f0546e] {\n  position: relative;\n}\n.c-title[data-v-f3f0546e] {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n.c-volume-slider-container[data-v-f3f0546e] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  column-gap: 0.5rem;\n}\n.c-volume-slider-container .c-volume-slider[data-v-f3f0546e] {\n  flex-grow: 1;\n}\n.c-volume-slider-container .c-volume-slider[data-v-f3f0546e]  .marks {\n  margin-top: 1rem;\n}\n.c-volume-slider-container .c-volume-value[data-v-f3f0546e] {\n  position: relative;\n  font-size: 0.875rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n}\n\n/*# sourceMappingURL=NotificationVolume.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/NotificationVolume.vue", "NotificationVolume.vue"], "names": [], "mappings": "AAqFA;EACA,kBAAA;ACpFA;ADuFA;EACA,mBAAA;EACA,iBAAA;ACpFA;ADuFA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;ACpFA;ADsFA;EACA,YAAA;ACpFA;ADsFA;EACA,gBAAA;ACpFA;ADwFA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,cAAA;ACtFA;;AAEA,iDAAiD", "file": "NotificationVolume.vue", "sourcesContent": [`<template lang='pug'>
.c-notification-volume
  i18n.c-title Volume
  .c-volume-slider-container
    slider-continuous.c-volume-slider(
      uid='notification-volume'
      :min='config.sliderMin'
      :max='config.sliderMax'
      :unit='config.sliderUnit'
      :hideText='true'
      :value='ephemeral.volume'
      @input='handleVolumeUpdate'
    )

    .c-volume-value {{ ephemeral.volume }}{{ config.sliderUnit }}

  audio(ref='exampleAudio'
    src='/assets/audio/msg-received.mp3'
    type='audio/mpeg'
  )
</template>

<script>
import { mapMutations } from 'vuex'
import SliderContinuous from '../../../../frontend/views/components/SliderContinuous.vue'
import { debounce } from 'turtledash'

export default ({
  name: 'NotificationVolume',
  components: {
    SliderContinuous
  },
  data () {
    return {
      config: {
        sliderMin: 0,
        sliderMax: 100,
        sliderUnit: '%'
      },
      ephemeral: {
        volume: 100
      }
    }
  },
  computed: {
    volumeFromStore () {
      return this.$store.getters.notificationVolume ?? 1
    }
  },
  methods: {
    ...mapMutations(['setNotificationVolume']),
    handleVolumeUpdate (e) {
      this.ephemeral.volume = e.target.value
      this.debouncedPostVolumeChange()
    },
    debouncedPostVolumeChange: debounce(function () {
      // 1. Play the example sound for the user to hear the change.
      const volume = this.ephemeral.volume / 100
      const audioEl = this.$refs.exampleAudio

      // In case the sound is still playing when the volume is chnaged, pause and reset the playhead first.
      audioEl.pause()
      audioEl.currentTime = 0
      audioEl.volume = volume
      setTimeout(() => { audioEl.play() }, 10)

      // 2. Update the value in the store, so that the update propagates to the background sound.
      this.setNotificationVolume(volume)
    }, 350)
  },
  created () {
    this.ephemeral.volume = Math.round(this.volumeFromStore * 100)
  },
  mounted () {
    // Speed up the play speed of the example sound a little bit, so that user can play it more frequently.
    this.$refs.exampleAudio.playbackRate = 1.25
    // Init the volume of the example sound to the value in the store.
    this.$refs.exampleAudio.volume = this.volumeFromStore
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-notification-volume {
  position: relative;
}

.c-title {
  font-size: $size_4;
  font-weight: bold;
}

.c-volume-slider-container {
  position: relative;
  display: flex;
  align-items: flex-end;
  column-gap: 0.5rem;

  .c-volume-slider {
    flex-grow: 1;

    ::v-deep .marks {
      margin-top: 1rem;
    }
  }

  .c-volume-value {
    position: relative;
    font-size: $size_4;
    color: $text_1;
    flex-shrink: 0;
  }
}
</style>
`, ".c-notification-volume {\n  position: relative;\n}\n\n.c-title {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n\n.c-volume-slider-container {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  column-gap: 0.5rem;\n}\n.c-volume-slider-container .c-volume-slider {\n  flex-grow: 1;\n}\n.c-volume-slider-container .c-volume-slider ::v-deep .marks {\n  margin-top: 1rem;\n}\n.c-volume-slider-container .c-volume-value {\n  position: relative;\n  font-size: 0.875rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n}\n\n/*# sourceMappingURL=NotificationVolume.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-f3f0546e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-notification-volume
  i18n.c-title Volume
  .c-volume-slider-container
    slider-continuous.c-volume-slider(
      uid='notification-volume'
      :min='config.sliderMin'
      :max='config.sliderMax'
      :unit='config.sliderUnit'
      :hideText='true'
      :value='ephemeral.volume'
      @input='handleVolumeUpdate'
    )

    .c-volume-value {{ ephemeral.volume }}{{ config.sliderUnit }}

  audio(ref='exampleAudio'
    src='/assets/audio/msg-received.mp3'
    type='audio/mpeg'
  )
</template>

<script>
import { mapMutations } from 'vuex'
import SliderContinuous from '../../../../frontend/views/components/SliderContinuous.vue'
import { debounce } from 'turtledash'

export default ({
  name: 'NotificationVolume',
  components: {
    SliderContinuous
  },
  data () {
    return {
      config: {
        sliderMin: 0,
        sliderMax: 100,
        sliderUnit: '%'
      },
      ephemeral: {
        volume: 100
      }
    }
  },
  computed: {
    volumeFromStore () {
      return this.$store.getters.notificationVolume ?? 1
    }
  },
  methods: {
    ...mapMutations(['setNotificationVolume']),
    handleVolumeUpdate (e) {
      this.ephemeral.volume = e.target.value
      this.debouncedPostVolumeChange()
    },
    debouncedPostVolumeChange: debounce(function () {
      // 1. Play the example sound for the user to hear the change.
      const volume = this.ephemeral.volume / 100
      const audioEl = this.$refs.exampleAudio

      // In case the sound is still playing when the volume is chnaged, pause and reset the playhead first.
      audioEl.pause()
      audioEl.currentTime = 0
      audioEl.volume = volume
      setTimeout(() => { audioEl.play() }, 10)

      // 2. Update the value in the store, so that the update propagates to the background sound.
      this.setNotificationVolume(volume)
    }, 350)
  },
  created () {
    this.ephemeral.volume = Math.round(this.volumeFromStore * 100)
  },
  mounted () {
    // Speed up the play speed of the example sound a little bit, so that user can play it more frequently.
    this.$refs.exampleAudio.playbackRate = 1.25
    // Init the volume of the example sound to the value in the store.
    this.$refs.exampleAudio.volume = this.volumeFromStore
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-notification-volume {
  position: relative;
}

.c-title {
  font-size: $size_4;
  font-weight: bold;
}

.c-volume-slider-container {
  position: relative;
  display: flex;
  align-items: flex-end;
  column-gap: 0.5rem;

  .c-volume-slider {
    flex-grow: 1;

    ::v-deep .marks {
      margin-top: 1rem;
    }
  }

  .c-volume-value {
    position: relative;
    font-size: $size_4;
    color: $text_1;
    flex-shrink: 0;
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
var NotificationVolume_default = __vue_component__;

// frontend/views/containers/user-settings/NotificationSettings.vue
var __vue_script__2 = {
  name: "NotificationSettings",
  components: {
    NotificationVolume: NotificationVolume_default
  },
  data() {
    return {
      pushNotificationSupported: false,
      pushNotificationGranted: null,
      cancelListener: () => {
      },
      checkboxValue: false
    };
  },
  beforeMount() {
    if (typeof Notification !== "function" || typeof PushManager !== "function" || !navigator.serviceWorker) {
      this.pushNotificationGranted = false;
      return;
    }
    this.pushNotificationSupported = true;
    const handler = (permissionState) => {
      let newPermission = null;
      if (permissionState === "granted") {
        newPermission = true;
      } else if (permissionState === "denied") {
        newPermission = false;
      }
      if (newPermission !== this.pushNotificationGranted) {
        this.pushNotificationGranted = newPermission;
        this.checkboxValue = this.notificationEnabled === true && newPermission;
        console.info("[NotifSettings] handler called with:", permissionState, "and this.notificationsEnabled=", this.notificationEnabled);
      }
    };
    const fallback = () => {
      handler(Notification.permission);
      const intervalId = setInterval(() => {
        handler(Notification.permission);
      }, 500);
      this.cancelListener = () => clearInterval(intervalId);
    };
    const isWebkit = typeof navigator === "object" && navigator.vendor === "Apple Computer, Inc.";
    if (!isWebkit && typeof navigator.permissions === "object" && // $FlowFixMe[method-unbinding]
    typeof navigator.permissions.query === "function") {
      navigator.permissions.query({ name: "notifications" }).then((status) => {
        const listener = () => {
          const state = status.state === "prompt" && Notification.permission !== "default" ? Notification.permission : status.state;
          handler(state);
        };
        listener();
        status.addEventListener("change", listener, false);
        this.cancelListener = () => status.removeEventListener("change", listener, false);
      }, fallback);
    } else {
      fallback();
    }
  },
  destroyed() {
    this.cancelListener();
  },
  computed: {
    notificationEnabled() {
      return this.$store.state.settings.notificationEnabled;
    },
    notificationsToggleDisabled() {
      return !this.pushNotificationSupported || !this.pushNotificationGranted && this.notificationEnabled;
    }
  },
  methods: {
    ...mapMutations(["setNotificationEnabled"]),
    async handleNotificationSettings(e) {
      if (typeof Notification !== "function") return;
      let permission = Notification.permission;
      const disableCheckbox = () => {
        this.$nextTick(() => {
          this.checkboxValue = false;
        });
      };
      if (permission === "default") {
        permission = await requestNotificationPermission();
        if (!permission) {
          alert(L("There was a problem requesting notifications permission"));
          return disableCheckbox();
        } else if (permission !== "granted") {
          return disableCheckbox();
        }
      } else if (permission === "denied") {
        permission = await requestNotificationPermission();
        if (!permission) {
          alert(L("There was a problem requesting notifications permission"));
          return disableCheckbox();
        } else if (permission !== "granted") {
          alert(L("Try granting notifications permissions in your browser settings first"));
          return disableCheckbox();
        }
      } else if (permission === "granted" && this.notificationEnabled) {
        permission = "denied";
      }
      const granted = permission === "granted";
      this.setNotificationEnabled(granted);
      if (granted) {
        makeNotification({ title: L("Congratulations"), body: L("You have granted browser notification!") });
      }
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "settings-container" }, [
    _c(
      "section",
      { staticClass: "card" },
      [
        _c(
          "i18n",
          { staticClass: "is-title-3 c-title", attrs: { tag: "h2" } },
          [_vm._v("Browser notifications")]
        ),
        _c("div", { staticClass: "c-subcontent" }, [
          _c(
            "div",
            { staticClass: "c-text-content" },
            [
              _c(
                "i18n",
                { staticClass: "c-smaller-title", attrs: { tag: "h3" } },
                [_vm._v("Allow browser notifications")]
              ),
              _c(
                "i18n",
                { staticClass: "c-description", attrs: { tag: "p" } },
                [
                  _vm._v(
                    "Get notifications to find out what's going on when you're not on Group Income. You can turn them off anytime."
                  )
                ]
              ),
              _c(
                "p",
                [
                  !_vm.pushNotificationSupported ? _c(
                    "i18n",
                    {
                      staticClass: "c-description",
                      attrs: { tag: "strong" }
                    },
                    [
                      _vm._v(
                        "Your browser doesn't support push notifications"
                      )
                    ]
                  ) : _vm.pushNotificationGranted === false ? _c(
                    "i18n",
                    {
                      staticClass: "has-text-danger",
                      attrs: { tag: "strong" }
                    },
                    [
                      _vm._v(
                        "Push notifications are disabled because your browser settings have disabled them."
                      )
                    ]
                  ) : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _c("div", { staticClass: "switch-wrapper" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.checkboxValue,
                  expression: "checkboxValue"
                }
              ],
              staticClass: "switch",
              attrs: { type: "checkbox", name: "switch" },
              domProps: {
                checked: Array.isArray(_vm.checkboxValue) ? _vm._i(_vm.checkboxValue, null) > -1 : _vm.checkboxValue
              },
              on: {
                click: _vm.handleNotificationSettings,
                change: function($event) {
                  var $$a = _vm.checkboxValue, $$el = $event.target, $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = null, $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && (_vm.checkboxValue = $$a.concat([$$v]));
                    } else {
                      $$i > -1 && (_vm.checkboxValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                    }
                  } else {
                    _vm.checkboxValue = $$c;
                  }
                }
              }
            })
          ])
        ]),
        _c("notification-volume")
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-32374e18_0", { source: ".settings-container[data-v-32374e18] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n.settings-container[data-v-32374e18] {\n    padding-top: 1.5rem;\n}\n}\n.settings-container .c-title[data-v-32374e18] {\n  margin-bottom: 2rem;\n}\n.c-subcontent[data-v-32374e18] {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  column-gap: 1rem;\n  margin-bottom: 2.5rem;\n}\n.c-subcontent[data-v-32374e18]:last-child {\n  margin-bottom: 1.5rem;\n}\n.c-smaller-title[data-v-32374e18] {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n.c-description[data-v-32374e18] {\n  margin-top: 0.125rem;\n  font-size: 0.875rem;\n  color: var(--text_1);\n}\n.c-divider[data-v-32374e18] {\n  margin: -0.5rem -1rem 1.5rem -1rem;\n  border: solid 1px var(--general_1);\n}\n@media screen and (min-width: 769px), print {\n.c-divider[data-v-32374e18] {\n    margin: -0.5rem -1.5rem 1.5rem -1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-divider[data-v-32374e18] {\n    margin: -0.5rem -2.5rem 1.5rem -2.5rem;\n}\n}\n.c-name[data-v-32374e18] {\n  color: var(--text_1);\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-top: -1rem;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=NotificationSettings.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/user-settings/NotificationSettings.vue", "NotificationSettings.vue"], "names": [], "mappings": "AAoJA;EACA,WAAA;ACnJA;AACA;ADiJA;IAIA,mBAAA;AClJE;AACF;ADoJA;EACA,mBAAA;AClJA;ADsJA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,qBAAA;ACnJA;ADqJA;EACA,qBAAA;ACnJA;ADuJA;EACA,mBAAA;EACA,iBAAA;ACpJA;ADuJA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;ACpJA;ADuJA;EACA,kCAAA;EACA,kCAAA;ACpJA;AACA;ADiJA;IAKA,sCAAA;ACnJE;AACF;AACA;AD4IA;IASA,sCAAA;AClJE;AACF;ADqJA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;AClJA;;AAEA,mDAAmD", "file": "NotificationSettings.vue", "sourcesContent": ["<template lang='pug'>\n  .settings-container\n    section.card\n      i18n.is-title-3.c-title(tag='h2') Browser notifications\n      .c-subcontent\n        .c-text-content\n          i18n.c-smaller-title(tag='h3') Allow browser notifications\n          i18n.c-description(tag='p') Get notifications to find out what's going on when you're not on Group Income. You can turn them off anytime.\n          p\n            i18n.c-description(v-if='!pushNotificationSupported' tag='strong') Your browser doesn't support push notifications\n            i18n.has-text-danger(v-else-if='pushNotificationGranted === false' tag='strong') Push notifications are disabled because your browser settings have disabled them.\n        .switch-wrapper\n          input.switch(\n            type='checkbox'\n            name='switch'\n            v-model='checkboxValue'\n            @click='handleNotificationSettings'\n          )\n        //- TODO: disable the checkbox and display an info field when we're offline\n\n      notification-volume\n</template>\n\n<script>\nimport { mapMutations } from 'vuex'\nimport { L } from '../../../../frontend/common/common.js'\nimport {\n  requestNotificationPermission,\n  makeNotification\n} from '../../../../frontend/model/notifications/nativeNotification.js'\nimport NotificationVolume from './NotificationVolume.vue'\n\nexport default ({\n  name: 'NotificationSettings',\n  components: {\n    NotificationVolume\n  },\n  data () {\n    return {\n      pushNotificationSupported: false,\n      pushNotificationGranted: null,\n      cancelListener: () => {},\n      checkboxValue: false\n    }\n  },\n  beforeMount () {\n    if (typeof Notification !== 'function' || typeof PushManager !== 'function' || !navigator.serviceWorker) {\n      this.pushNotificationGranted = false\n      return\n    }\n    this.pushNotificationSupported = true\n    const handler = (permissionState) => {\n      let newPermission = null\n      if (permissionState === 'granted') {\n        newPermission = true\n      } else if (permissionState === 'denied') {\n        newPermission = false\n      }\n      // since the fallback calls this handler repeatedly and often, have this check here\n      if (newPermission !== this.pushNotificationGranted) {\n        this.pushNotificationGranted = newPermission\n        this.checkboxValue = this.notificationEnabled === true && newPermission\n        console.info('[NotifSettings] handler called with:', permissionState, 'and this.notificationsEnabled=', this.notificationEnabled)\n      }\n    }\n    const fallback = () => {\n      handler(Notification.permission)\n      const intervalId = setInterval(() => {\n        handler(Notification.permission)\n      }, 500)\n      this.cancelListener = () => clearInterval(intervalId)\n    }\n    // Check if browser is Webkit-based\n    const isWebkit = typeof navigator === 'object' && navigator.vendor === 'Apple Computer, Inc.'\n    if (\n      !isWebkit &&\n      typeof navigator.permissions === 'object' &&\n      // $FlowFixMe[method-unbinding]\n      typeof navigator.permissions.query === 'function'\n    ) {\n      navigator.permissions.query({ name: 'notifications' }).then((status) => {\n        const listener = () => {\n          // For some reason, Safari seems to always return `'prompt'` with\n          // `Notification.permission` being correct.\n          const state = (status.state === 'prompt' && Notification.permission !== 'default') ? Notification.permission : status.state\n          handler(state)\n        }\n        listener()\n        status.addEventListener('change', listener, false)\n        this.cancelListener = () => status.removeEventListener('change', listener, false)\n      }, fallback)\n    } else {\n      fallback()\n    }\n  },\n  destroyed () {\n    this.cancelListener()\n  },\n  computed: {\n    notificationEnabled () {\n      return this.$store.state.settings.notificationEnabled\n    },\n    notificationsToggleDisabled () {\n      return !this.pushNotificationSupported || (!this.pushNotificationGranted && this.notificationEnabled)\n    }\n  },\n  methods: {\n    ...mapMutations(['setNotificationEnabled']),\n    async handleNotificationSettings (e) {\n      if (typeof Notification !== 'function') return\n      let permission = Notification.permission\n      const disableCheckbox = () => {\n        this.$nextTick(() => { this.checkboxValue = false })\n      }\n      if (permission === 'default') {\n        permission = await requestNotificationPermission()\n        if (!permission) {\n          alert(L('There was a problem requesting notifications permission'))\n          return disableCheckbox()\n        } else if (permission !== 'granted') {\n          return disableCheckbox()\n        }\n      } else if (permission === 'denied') {\n        // attempt to request permissions again\n        permission = await requestNotificationPermission()\n        if (!permission) {\n          alert(L('There was a problem requesting notifications permission'))\n          return disableCheckbox()\n        } else if (permission !== 'granted') {\n          alert(L('Try granting notifications permissions in your browser settings first'))\n          return disableCheckbox()\n        }\n      } else if (permission === 'granted' && this.notificationEnabled) {\n        permission = 'denied'\n      }\n      const granted = permission === 'granted'\n      this.setNotificationEnabled(granted)\n      if (granted) {\n        makeNotification({ title: L('Congratulations'), body: L('You have granted browser notification!') })\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.settings-container {\n  width: 100%;\n\n  @include desktop {\n    padding-top: 1.5rem;\n  }\n\n  .c-title {\n    margin-bottom: 2rem;\n  }\n}\n\n.c-subcontent {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  column-gap: 1rem;\n  margin-bottom: 2.5rem;\n\n  &:last-child {\n    margin-bottom: 1.5rem;\n  }\n}\n\n.c-smaller-title {\n  font-size: $size_4;\n  font-weight: bold;\n}\n\n.c-description {\n  margin-top: 0.125rem;\n  font-size: $size_4;\n  color: $text_1;\n}\n\n.c-divider {\n  margin: -0.5rem -1rem 1.5rem -1rem;\n  border: solid 1px $general_1;\n\n  @include tablet {\n    margin: -0.5rem -1.5rem 1.5rem -1.5rem;\n  }\n\n  @include desktop {\n    margin: -0.5rem -2.5rem 1.5rem -2.5rem;\n  }\n}\n\n.c-name {\n  color: $text_1;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-top: -1rem;\n  margin-bottom: 1.5rem;\n}\n</style>\n", ".settings-container {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .settings-container {\n    padding-top: 1.5rem;\n  }\n}\n.settings-container .c-title {\n  margin-bottom: 2rem;\n}\n\n.c-subcontent {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  column-gap: 1rem;\n  margin-bottom: 2.5rem;\n}\n.c-subcontent:last-child {\n  margin-bottom: 1.5rem;\n}\n\n.c-smaller-title {\n  font-size: 0.875rem;\n  font-weight: bold;\n}\n\n.c-description {\n  margin-top: 0.125rem;\n  font-size: 0.875rem;\n  color: var(--text_1);\n}\n\n.c-divider {\n  margin: -0.5rem -1rem 1.5rem -1rem;\n  border: solid 1px var(--general_1);\n}\n@media screen and (min-width: 769px), print {\n  .c-divider {\n    margin: -0.5rem -1.5rem 1.5rem -1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-divider {\n    margin: -0.5rem -2.5rem 1.5rem -2.5rem;\n  }\n}\n\n.c-name {\n  color: var(--text_1);\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-top: -1rem;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=NotificationSettings.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-32374e18";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  .settings-container\n    section.card\n      i18n.is-title-3.c-title(tag='h2') Browser notifications\n      .c-subcontent\n        .c-text-content\n          i18n.c-smaller-title(tag='h3') Allow browser notifications\n          i18n.c-description(tag='p') Get notifications to find out what's going on when you're not on Group Income. You can turn them off anytime.\n          p\n            i18n.c-description(v-if='!pushNotificationSupported' tag='strong') Your browser doesn't support push notifications\n            i18n.has-text-danger(v-else-if='pushNotificationGranted === false' tag='strong') Push notifications are disabled because your browser settings have disabled them.\n        .switch-wrapper\n          input.switch(\n            type='checkbox'\n            name='switch'\n            v-model='checkboxValue'\n            @click='handleNotificationSettings'\n          )\n        //- TODO: disable the checkbox and display an info field when we're offline\n\n      notification-volume\n</template>\n\n<script>\nimport { mapMutations } from 'vuex'\nimport { L } from '../../../../frontend/common/common.js'\nimport {\n  requestNotificationPermission,\n  makeNotification\n} from '../../../../frontend/model/notifications/nativeNotification.js'\nimport NotificationVolume from './NotificationVolume.vue'\n\nexport default ({\n  name: 'NotificationSettings',\n  components: {\n    NotificationVolume\n  },\n  data () {\n    return {\n      pushNotificationSupported: false,\n      pushNotificationGranted: null,\n      cancelListener: () => {},\n      checkboxValue: false\n    }\n  },\n  beforeMount () {\n    if (typeof Notification !== 'function' || typeof PushManager !== 'function' || !navigator.serviceWorker) {\n      this.pushNotificationGranted = false\n      return\n    }\n    this.pushNotificationSupported = true\n    const handler = (permissionState) => {\n      let newPermission = null\n      if (permissionState === 'granted') {\n        newPermission = true\n      } else if (permissionState === 'denied') {\n        newPermission = false\n      }\n      // since the fallback calls this handler repeatedly and often, have this check here\n      if (newPermission !== this.pushNotificationGranted) {\n        this.pushNotificationGranted = newPermission\n        this.checkboxValue = this.notificationEnabled === true && newPermission\n        console.info('[NotifSettings] handler called with:', permissionState, 'and this.notificationsEnabled=', this.notificationEnabled)\n      }\n    }\n    const fallback = () => {\n      handler(Notification.permission)\n      const intervalId = setInterval(() => {\n        handler(Notification.permission)\n      }, 500)\n      this.cancelListener = () => clearInterval(intervalId)\n    }\n    // Check if browser is Webkit-based\n    const isWebkit = typeof navigator === 'object' && navigator.vendor === 'Apple Computer, Inc.'\n    if (\n      !isWebkit &&\n      typeof navigator.permissions === 'object' &&\n      // $FlowFixMe[method-unbinding]\n      typeof navigator.permissions.query === 'function'\n    ) {\n      navigator.permissions.query({ name: 'notifications' }).then((status) => {\n        const listener = () => {\n          // For some reason, Safari seems to always return `'prompt'` with\n          // `Notification.permission` being correct.\n          const state = (status.state === 'prompt' && Notification.permission !== 'default') ? Notification.permission : status.state\n          handler(state)\n        }\n        listener()\n        status.addEventListener('change', listener, false)\n        this.cancelListener = () => status.removeEventListener('change', listener, false)\n      }, fallback)\n    } else {\n      fallback()\n    }\n  },\n  destroyed () {\n    this.cancelListener()\n  },\n  computed: {\n    notificationEnabled () {\n      return this.$store.state.settings.notificationEnabled\n    },\n    notificationsToggleDisabled () {\n      return !this.pushNotificationSupported || (!this.pushNotificationGranted && this.notificationEnabled)\n    }\n  },\n  methods: {\n    ...mapMutations(['setNotificationEnabled']),\n    async handleNotificationSettings (e) {\n      if (typeof Notification !== 'function') return\n      let permission = Notification.permission\n      const disableCheckbox = () => {\n        this.$nextTick(() => { this.checkboxValue = false })\n      }\n      if (permission === 'default') {\n        permission = await requestNotificationPermission()\n        if (!permission) {\n          alert(L('There was a problem requesting notifications permission'))\n          return disableCheckbox()\n        } else if (permission !== 'granted') {\n          return disableCheckbox()\n        }\n      } else if (permission === 'denied') {\n        // attempt to request permissions again\n        permission = await requestNotificationPermission()\n        if (!permission) {\n          alert(L('There was a problem requesting notifications permission'))\n          return disableCheckbox()\n        } else if (permission !== 'granted') {\n          alert(L('Try granting notifications permissions in your browser settings first'))\n          return disableCheckbox()\n        }\n      } else if (permission === 'granted' && this.notificationEnabled) {\n        permission = 'denied'\n      }\n      const granted = permission === 'granted'\n      this.setNotificationEnabled(granted)\n      if (granted) {\n        makeNotification({ title: L('Congratulations'), body: L('You have granted browser notification!') })\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.settings-container {\n  width: 100%;\n\n  @include desktop {\n    padding-top: 1.5rem;\n  }\n\n  .c-title {\n    margin-bottom: 2rem;\n  }\n}\n\n.c-subcontent {\n  border: none;\n  display: flex;\n  justify-content: space-between;\n  column-gap: 1rem;\n  margin-bottom: 2.5rem;\n\n  &:last-child {\n    margin-bottom: 1.5rem;\n  }\n}\n\n.c-smaller-title {\n  font-size: $size_4;\n  font-weight: bold;\n}\n\n.c-description {\n  margin-top: 0.125rem;\n  font-size: $size_4;\n  color: $text_1;\n}\n\n.c-divider {\n  margin: -0.5rem -1rem 1.5rem -1rem;\n  border: solid 1px $general_1;\n\n  @include tablet {\n    margin: -0.5rem -1.5rem 1.5rem -1.5rem;\n  }\n\n  @include desktop {\n    margin: -0.5rem -2.5rem 1.5rem -2.5rem;\n  }\n}\n\n.c-name {\n  color: $text_1;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-top: -1rem;\n  margin-bottom: 1.5rem;\n}\n</style>\n";
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
var NotificationSettings_default = __vue_component__2;
export {
  NotificationSettings_default as default
};
//# sourceMappingURL=NotificationSettings-VOZ7WS2L-cached.js.map
