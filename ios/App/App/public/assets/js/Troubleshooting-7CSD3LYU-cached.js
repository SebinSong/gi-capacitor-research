import {
  Progress_default
} from "./chunk-OMAB4AXT-cached.js";
import {
  BannerScoped_default,
  BannerSimple_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LError
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/user-settings/Troubleshooting.vue
var __vue_script__ = {
  name: "Troubleshooting",
  components: {
    BannerScoped: BannerScoped_default,
    BannerSimple: BannerSimple_default,
    ProgressBar: Progress_default
  },
  data() {
    return {
      config: {
        ok: {
          statusText: L("Ok"),
          style: "success"
        }
      },
      ephemeral: {
        status: "ok",
        //  'ok' | 'corrupted' | 'recovering' | 'failed'
        sizeMb: "",
        // e.g. '9Mb'
        statusText: "",
        //  Corrupted | Ok
        style: "",
        // danger | success
        progress: {
          part: "",
          // e.g. 'Downloading...'
          percentage: 0
          // Number: e.g. 0.75
        }
      }
    };
  },
  created() {
    const status = "ok";
    this.ephemeral.status = status;
    this.ephemeral.statusText = this.config[status].statusText;
    this.ephemeral.style = this.config[status].style;
  },
  computed: {
    ...mapState([
      "appLogsFilter"
    ])
  },
  methods: {
    openAppLogs() {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: "application-logs"
        }
      });
    },
    async startResync() {
      const confirmString = L(`This will reset Group Income and log you out.

You will need to log back in with your password and wait for a bit while the app's state is being rebuilt from scratch.

Are you sure?`);
      if (this.ephemeral.status === "ok" && !confirm(confirmString)) {
        return null;
      }
      try {
        this.ephemeral.status = "recovering";
        await esm_default("gi.actions/identity/logout", null, true);
        this.ephemeral.status = "ok";
      } catch (e) {
        this.ephemeral.status = "failed";
        this.$refs.doneMsg.danger(L("Re-sync failed. {reportError}", LError(e)));
      }
    },
    updateProgress(part, percentage) {
      this.ephemeral.progress.part = part;
      this.ephemeral.progress.percentage = percentage;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "settings-container" }, [
    _c(
      "section",
      { staticClass: "card" },
      [
        _c("i18n", { staticClass: "is-title-3", attrs: { tag: "h3" } }, [
          _vm._v("Re-sync and rebuild data")
        ]),
        _c(
          "p",
          { staticClass: "c-desc has-text-1" },
          [
            _c("i18n", [
              _vm._v(
                "If you're having trouble with the app, you can try resetting Group Income. This will delete the current app state, and log you out. After you log back in, it may take a few minutes for the app to reset, but that should fix most problems. THIS WILL LOG YOU OUT."
              )
            ]),
            _c(
              "i18n",
              {
                staticClass: "link",
                attrs: { tag: "button" },
                on: { click: _vm.openAppLogs }
              },
              [_vm._v("For diagnostic info, see application logs.")]
            )
          ],
          1
        ),
        _c("banner-scoped", {
          ref: "doneMsg",
          attrs: { "data-test": "doneMsg" }
        }),
        _c(
          "div",
          { staticClass: "c-cta-container" },
          [
            _vm.ephemeral.status !== "recovering" ? _c(
              "i18n",
              {
                staticClass: "c-cta",
                attrs: { tag: "button" },
                on: { click: _vm.startResync }
              },
              [_vm._v("Reset Group Income")]
            ) : _vm._e()
          ],
          1
        )
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-ee24072c_0", { source: '@media screen and (min-width: 1200px) {\n.settings-container[data-v-ee24072c] {\n    padding-top: 1.5rem;\n}\n}\n.c-desc[data-v-ee24072c] {\n  margin: 1rem 0;\n}\n.c-legend[data-v-ee24072c] {\n  display: flex;\n}\n.c-legend-item[data-v-ee24072c] {\n  margin-right: 2.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-legend-item[data-v-ee24072c] {\n    margin-right: 1.5rem;\n}\n}\n.c-legend-dd[data-v-ee24072c] {\n  font-family: "Poppins";\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n.c-marker[data-v-ee24072c] {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem;\n  border-radius: 1px;\n  border: 1px solid;\n}\n.c-marker.has-background-success-solid[data-v-ee24072c] {\n  border-color: var(--success_0);\n}\n.c-marker.has-background-danger-solid[data-v-ee24072c] {\n  border-color: var(--danger_0);\n}\n.c-banner[data-v-ee24072c],\n.c-progress[data-v-ee24072c],\n.c-cta[data-v-ee24072c] {\n  margin-top: 1.5rem;\n}\n.c-progress-desc[data-v-ee24072c] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n}\n.c-cta-container[data-v-ee24072c] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 0.5rem;\n}\n.c-coming-soon[data-v-ee24072c] {\n  display: inline-flex;\n  align-items: center;\n  color: var(--text_1);\n  user-select: none;\n}\n.c-coming-soon i[data-v-ee24072c] {\n  margin-right: 0.2rem;\n}\n\n/*# sourceMappingURL=Troubleshooting.vue.map */', map: { "version": 3, "sources": ["Troubleshooting.vue", "frontend/views/containers/user-settings/Troubleshooting.vue"], "names": [], "mappings": "AAAA;ACyGA;IAEA,mBAAA;ADxGE;AACF;AC2GA;EACA,cAAA;ADxGA;AC2GA;EACA,aAAA;ADxGA;AC0GA;EACA,oBAAA;ADxGA;AACA;ACsGA;IAIA,oBAAA;ADvGE;AACF;AC0GA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;ADxGA;AC4GA;EACA,qBAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;ADzGA;AC2GA;EACA,8BAAA;ADzGA;AC4GA;EACA,6BAAA;AD1GA;AC8GA;;;EAGA,kBAAA;AD3GA;AC+GA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;AD5GA;ACgHA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;AD7GA;ACgHA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;AD7GA;AC+GA;EACA,oBAAA;AD7GA;;AAEA,8CAA8C", "file": "Troubleshooting.vue", "sourcesContent": ['@media screen and (min-width: 1200px) {\n  .settings-container {\n    padding-top: 1.5rem;\n  }\n}\n\n.c-desc {\n  margin: 1rem 0;\n}\n\n.c-legend {\n  display: flex;\n}\n.c-legend-item {\n  margin-right: 2.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-legend-item {\n    margin-right: 1.5rem;\n  }\n}\n.c-legend-dd {\n  font-family: "Poppins";\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n\n.c-marker {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.06rem;\n  border-radius: 1px;\n  border: 1px solid;\n}\n.c-marker.has-background-success-solid {\n  border-color: var(--success_0);\n}\n.c-marker.has-background-danger-solid {\n  border-color: var(--danger_0);\n}\n\n.c-banner,\n.c-progress,\n.c-cta {\n  margin-top: 1.5rem;\n}\n\n.c-progress-desc {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n}\n\n.c-cta-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 0.5rem;\n}\n\n.c-coming-soon {\n  display: inline-flex;\n  align-items: center;\n  color: var(--text_1);\n  user-select: none;\n}\n.c-coming-soon i {\n  margin-right: 0.2rem;\n}\n\n/*# sourceMappingURL=Troubleshooting.vue.map */', `<template lang='pug'>
  .settings-container
    section.card
      i18n.is-title-3(tag='h3') Re-sync and rebuild data
      p.c-desc.has-text-1
        i18n If you're having trouble with the app, you can try resetting Group Income. This will delete the current app state, and log you out. After you log back in, it may take a few minutes for the app to reset, but that should fix most problems. THIS WILL LOG YOU OUT.
        i18n.link(tag='button' @click='openAppLogs') For diagnostic info, see application logs.

      banner-scoped(ref='doneMsg' data-test='doneMsg')

      .c-cta-container
        i18n.c-cta(
          v-if='ephemeral.status !== "recovering"'
          tag='button'
          @click='startResync'
        ) Reset Group Income
</template>

<script>
import { L, LError } from '../../../../frontend/common/common.js'
import sbp from '@sbp/sbp'
import { mapState } from 'vuex'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'

export default ({
  name: 'Troubleshooting',
  components: {
    BannerScoped,
    BannerSimple,
    ProgressBar
  },
  data () {
    return {
      config: {
        ok: {
          statusText: L('Ok'),
          style: 'success'
        }
      },
      ephemeral: {
        status: 'ok', //  'ok' | 'corrupted' | 'recovering' | 'failed'
        sizeMb: '', // e.g. '9Mb'
        statusText: '', //  Corrupted | Ok
        style: '', // danger | success
        progress: {
          part: '', // e.g. 'Downloading...'
          percentage: 0 // Number: e.g. 0.75
        }
      }
    }
  },
  created () {
    // TODO #761
    const status = 'ok' // 'ok' or 'corrupted'

    this.ephemeral.status = status
    this.ephemeral.statusText = this.config[status].statusText
    this.ephemeral.style = this.config[status].style
  },
  computed: {
    ...mapState([
      'appLogsFilter'
    ])
  },
  methods: {
    openAppLogs () {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: 'application-logs'
        }
      })
    },
    async startResync () {
      const confirmString = L(\`This will reset Group Income and log you out.

You will need to log back in with your password and wait for a bit while the app's state is being rebuilt from scratch.

Are you sure?\`)
      if (this.ephemeral.status === 'ok' && !confirm(confirmString)) {
        return null
      }

      try {
        this.ephemeral.status = 'recovering'
        await sbp('gi.actions/identity/logout', null, true)
        this.ephemeral.status = 'ok'
      } catch (e) {
        this.ephemeral.status = 'failed'
        this.$refs.doneMsg.danger(L('Re-sync failed. {reportError}', LError(e)))
      }
    },
    updateProgress (part, percentage) {
      this.ephemeral.progress.part = part
      this.ephemeral.progress.percentage = percentage
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-desc {
  margin: 1rem 0;
}

.c-legend {
  display: flex;

  &-item {
    margin-right: 2.5rem;

    @include phone {
      margin-right: 1.5rem;
    }
  }

  &-dd {
    font-family: "Poppins";
    font-weight: 600;
    margin-left: 0.5rem;
  }
}

.c-marker {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.06rem; // visually aligned
  border-radius: 1px;
  border: 1px solid;

  &.has-background-success-solid {
    border-color: $success_0;
  }

  &.has-background-danger-solid {
    border-color: $danger_0;
  }
}

.c-banner,
.c-progress,
.c-cta {
  margin-top: 1.5rem;
}

.c-progress {
  &-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
}

.c-cta-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;
}

.c-coming-soon {
  display: inline-flex;
  align-items: center;
  color: $text_1;
  user-select: none;

  i {
    margin-right: 0.2rem;
  }
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-ee24072c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .settings-container
    section.card
      i18n.is-title-3(tag='h3') Re-sync and rebuild data
      p.c-desc.has-text-1
        i18n If you're having trouble with the app, you can try resetting Group Income. This will delete the current app state, and log you out. After you log back in, it may take a few minutes for the app to reset, but that should fix most problems. THIS WILL LOG YOU OUT.
        i18n.link(tag='button' @click='openAppLogs') For diagnostic info, see application logs.

      banner-scoped(ref='doneMsg' data-test='doneMsg')

      .c-cta-container
        i18n.c-cta(
          v-if='ephemeral.status !== "recovering"'
          tag='button'
          @click='startResync'
        ) Reset Group Income
</template>

<script>
import { L, LError } from '../../../../frontend/common/common.js'
import sbp from '@sbp/sbp'
import { mapState } from 'vuex'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import BannerSimple from '../../../../frontend/views/components/banners/BannerSimple.vue'
import ProgressBar from '../../../../frontend/views/components/graphs/Progress.vue'

export default ({
  name: 'Troubleshooting',
  components: {
    BannerScoped,
    BannerSimple,
    ProgressBar
  },
  data () {
    return {
      config: {
        ok: {
          statusText: L('Ok'),
          style: 'success'
        }
      },
      ephemeral: {
        status: 'ok', //  'ok' | 'corrupted' | 'recovering' | 'failed'
        sizeMb: '', // e.g. '9Mb'
        statusText: '', //  Corrupted | Ok
        style: '', // danger | success
        progress: {
          part: '', // e.g. 'Downloading...'
          percentage: 0 // Number: e.g. 0.75
        }
      }
    }
  },
  created () {
    // TODO #761
    const status = 'ok' // 'ok' or 'corrupted'

    this.ephemeral.status = status
    this.ephemeral.statusText = this.config[status].statusText
    this.ephemeral.style = this.config[status].style
  },
  computed: {
    ...mapState([
      'appLogsFilter'
    ])
  },
  methods: {
    openAppLogs () {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: 'application-logs'
        }
      })
    },
    async startResync () {
      const confirmString = L(\`This will reset Group Income and log you out.

You will need to log back in with your password and wait for a bit while the app's state is being rebuilt from scratch.

Are you sure?\`)
      if (this.ephemeral.status === 'ok' && !confirm(confirmString)) {
        return null
      }

      try {
        this.ephemeral.status = 'recovering'
        await sbp('gi.actions/identity/logout', null, true)
        this.ephemeral.status = 'ok'
      } catch (e) {
        this.ephemeral.status = 'failed'
        this.$refs.doneMsg.danger(L('Re-sync failed. {reportError}', LError(e)))
      }
    },
    updateProgress (part, percentage) {
      this.ephemeral.progress.part = part
      this.ephemeral.progress.percentage = percentage
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-desc {
  margin: 1rem 0;
}

.c-legend {
  display: flex;

  &-item {
    margin-right: 2.5rem;

    @include phone {
      margin-right: 1.5rem;
    }
  }

  &-dd {
    font-family: "Poppins";
    font-weight: 600;
    margin-left: 0.5rem;
  }
}

.c-marker {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.06rem; // visually aligned
  border-radius: 1px;
  border: 1px solid;

  &.has-background-success-solid {
    border-color: $success_0;
  }

  &.has-background-danger-solid {
    border-color: $danger_0;
  }
}

.c-banner,
.c-progress,
.c-cta {
  margin-top: 1.5rem;
}

.c-progress {
  &-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
}

.c-cta-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;
}

.c-coming-soon {
  display: inline-flex;
  align-items: center;
  color: $text_1;
  user-select: none;

  i {
    margin-right: 0.2rem;
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
var Troubleshooting_default = __vue_component__;
export {
  Troubleshooting_default as default
};
//# sourceMappingURL=Troubleshooting-7CSD3LYU-cached.js.map
