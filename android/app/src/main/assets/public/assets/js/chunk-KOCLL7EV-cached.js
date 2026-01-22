import {
  RenderMessageWithMarkdown_default
} from "./chunk-ZWWQHF5P-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  fetchNews
} from "./chunk-OBUPKMDO-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LError
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/containers/global-dashboard/NewsAndUpdates.vue
var __vue_script__ = {
  name: "NewAndUpdates",
  components: {
    Avatar: Avatar_default,
    BannerScoped: BannerScoped_default,
    RenderMessageWithMarkdown: RenderMessageWithMarkdown_default
  },
  data() {
    return {
      ephemeral: {
        posts: [],
        loadStatus: ""
      }
    };
  },
  computed: {
    ...mapGetters(["ourIdentityContractId"])
  },
  async mounted() {
    await this.fetchNews();
    await this.markNewsAsSeen();
  },
  methods: {
    displayDate(date) {
      return humanDate(date, { month: "long", year: "numeric", day: "numeric" });
    },
    isStatus(status) {
      return this.ephemeral.loadStatus === status;
    },
    async fetchNews() {
      try {
        this.ephemeral.loadStatus = "loading";
        const data = await fetchNews();
        this.ephemeral.posts = data.map((post) => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }));
        this.ephemeral.loadStatus = "loaded";
      } catch (error) {
        this.ephemeral.loadStatus = "error";
        console.error("Failed to fetch news:", error);
        this.$nextTick(() => {
          this.$refs.errorMsg.danger(L("Failed to load news: {reportError}", LError(error)));
        });
      }
    },
    async markNewsAsSeen() {
      if (this.ephemeral.posts.length > 0 && this.ourIdentityContractId) {
        try {
          await esm_default("gi.actions/identity/kv/updatePreference", {
            key: "lastSeenNewsDate",
            value: this.ephemeral.posts[0].createdAt.toISOString()
          });
        } catch (error) {
          console.error("Failed to update last seen news date:", error);
        }
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-news-and-updates-container" },
    [
      _vm.isStatus("loading") ? _c(
        "div",
        { staticClass: "c-loader-skeleton-container" },
        _vm._l(2, function(i) {
          return _c("div", { key: i, staticClass: "c-skeleton-block" }, [
            _c("div", { staticClass: "c-loading-box c-skeleton-date" }),
            _c("div", { staticClass: "c-loading-box c-skeleton-card" })
          ]);
        }),
        0
      ) : _vm.isStatus("error") ? _c("banner-scoped", {
        ref: "errorMsg",
        attrs: { "allow-a": "allow-a" }
      }) : _vm.isStatus("loaded") ? _vm._l(_vm.ephemeral.posts, function(post, index) {
        return _c("div", { key: index, staticClass: "c-post-block" }, [
          _c("div", { staticClass: "c-post-created-date" }, [
            _vm._v(_vm._s(_vm.displayDate(post.createdAt)))
          ]),
          _c("div", { staticClass: "card c-post-card" }, [
            _c(
              "div",
              { staticClass: "c-post-img-container" },
              [
                _c("avatar", {
                  staticClass: "c-post-img",
                  attrs: {
                    src: "/assets/images/group-income-icon-transparent-circle.png",
                    alt: "GI Logo",
                    size: "xs"
                  }
                })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "c-post-content" },
              [
                _c("h3", { staticClass: "is-title-4" }, [
                  _vm._v(_vm._s(post.title))
                ]),
                _c("render-message-with-markdown", {
                  attrs: { text: post.content }
                })
              ],
              1
            )
          ])
        ]);
      }) : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-4a6d24c5_0", { source: ".c-loading[data-v-4a6d24c5],\n.c-error[data-v-4a6d24c5] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text_1);\n}\n.c-loader-skeleton-container[data-v-4a6d24c5] {\n  position: relative;\n  display: block;\n}\n.c-loader-skeleton-container .c-skeleton-block[data-v-4a6d24c5] {\n  display: block;\n}\n.c-loader-skeleton-container .c-skeleton-block[data-v-4a6d24c5]:not(:last-of-type) {\n  margin-bottom: 4rem;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-loading-box[data-v-4a6d24c5] {\n  animation: loading-heartbeat-data-v-4a6d24c5 3s linear infinite;\n  background-color: var(--general_1);\n  opacity: 0.625;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-skeleton-date[data-v-4a6d24c5] {\n  margin-bottom: 0.625rem;\n  width: 8.75rem;\n  min-height: 0;\n  height: 1.25rem;\n  border-radius: 5px;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-skeleton-card[data-v-4a6d24c5] {\n  width: 100%;\n  min-height: 0;\n  height: 10rem;\n  border-radius: 5px;\n}\n@keyframes loading-heartbeat-data-v-4a6d24c5 {\n0% {\n    background-color: var(--general_1);\n}\n50% {\n    background-color: var(--general_0);\n}\n100% {\n    background-color: var(--general_1);\n}\n}\n@keyframes loading-heartbeat-data-v-4a6d24c5 {\n0% {\n    opacity: 0.325;\n}\n50% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.325;\n}\n}\n.c-error[data-v-4a6d24c5] {\n  color: var(--danger_0);\n}\n.c-post-block[data-v-4a6d24c5] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.c-post-created-date[data-v-4a6d24c5] {\n  padding-left: 1rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.c-post-card[data-v-4a6d24c5] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1.5rem;\n}\n.c-post-card .c-post-img-container[data-v-4a6d24c5] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background-color: var(--general_2);\n  flex-shrink: 0;\n}\n.c-post-card .c-post-content[data-v-4a6d24c5] {\n  flex-grow: 1;\n}\n.c-post-card .c-post-content h3[data-v-4a6d24c5] {\n  margin-bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=NewsAndUpdates.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/global-dashboard/NewsAndUpdates.vue", "NewsAndUpdates.vue"], "names": [], "mappings": "AAwGA;;EAEA,aAAA;EACA,kBAAA;EACA,oBAAA;ACvGA;AD0GA;EACA,kBAAA;EACA,cAAA;ACvGA;ADyGA;EACA,cAAA;ACvGA;ADyGA;EACA,mBAAA;ACvGA;AD0GA;EACA,+DAAA;EACA,kCAAA;EACA,cAAA;ACxGA;AD2GA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;ACzGA;AD4GA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;AC1GA;AD+GA;AACA;IAAA,kCAAA;AC3GE;AD4GF;IAAA,kCAAA;ACzGE;AD0GF;IAAA,kCAAA;ACvGE;AACF;AD0GA;AACA;IAAA,cAAA;ACvGE;ADwGF;IAAA,UAAA;ACrGE;ADsGF;IAAA,cAAA;ACnGE;AACF;ADsGA;EACA,sBAAA;ACnGA;ADsGA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;ACnGA;ADsGA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;ACnGA;ADsGA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;ACnGA;ADqGA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;ACnGA;ADsGA;EACA,YAAA;ACpGA;ADsGA;EACA,qBAAA;ACpGA;;AAEA,6CAA6C", "file": "NewsAndUpdates.vue", "sourcesContent": [`<template lang='pug'>
.c-news-and-updates-container
  .c-loader-skeleton-container(v-if='isStatus("loading")')
    .c-skeleton-block(v-for='i in 2' :key='i')
      .c-loading-box.c-skeleton-date
      .c-loading-box.c-skeleton-card

  banner-scoped(v-else-if='isStatus("error")' ref='errorMsg' allow-a)

  template(v-else-if='isStatus("loaded")')
    .c-post-block(v-for='(post, index) in ephemeral.posts' :key='index')
      .c-post-created-date {{ displayDate(post.createdAt) }}

      .card.c-post-card
        .c-post-img-container
          avatar.c-post-img(
            src='/assets/images/group-income-icon-transparent-circle.png'
            alt='GI Logo'
            size='xs'
          )
        .c-post-content
          h3.is-title-4 {{ post.title }}
          render-message-with-markdown(:text='post.content')
</template>

<script>
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { mapGetters } from 'vuex'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import RenderMessageWithMarkdown from '../../../../frontend/views/containers/chatroom/chat-mentions/RenderMessageWithMarkdown.js'
import sbp from '@sbp/sbp'
import { L, LError } from '../../../../frontend/common/common.js'
import { fetchNews } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'NewAndUpdates',
  components: {
    Avatar,
    BannerScoped,
    RenderMessageWithMarkdown
  },
  data () {
    return {
      ephemeral: {
        posts: [],
        loadStatus: ''
      }
    }
  },
  computed: {
    ...mapGetters(['ourIdentityContractId'])
  },
  async mounted () {
    await this.fetchNews()
    await this.markNewsAsSeen()
  },
  methods: {
    displayDate (date) {
      return humanDate(date, { month: 'long', year: 'numeric', day: 'numeric' })
    },
    isStatus (status) {
      return this.ephemeral.loadStatus === status
    },
    async fetchNews () {
      try {
        this.ephemeral.loadStatus = 'loading'
        const data = await fetchNews()

        // Convert createdAt strings to Date objects for proper formatting
        this.ephemeral.posts = data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }))
        this.ephemeral.loadStatus = 'loaded'
      } catch (error) {
        this.ephemeral.loadStatus = 'error'
        console.error('Failed to fetch news:', error)

        this.$nextTick(() => {
          this.$refs.errorMsg.danger(L('Failed to load news: {reportError}', LError(error)))
        })
      }
    },
    async markNewsAsSeen () {
      // Update the last seen news date when user visits the page
      if (this.ephemeral.posts.length > 0 && this.ourIdentityContractId) {
        try {
          await sbp('gi.actions/identity/kv/updatePreference', {
            key: 'lastSeenNewsDate',
            value: this.ephemeral.posts[0].createdAt.toISOString()
          })
        } catch (error) {
          console.error('Failed to update last seen news date:', error)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-loading,
.c-error {
  padding: 2rem;
  text-align: center;
  color: $text_1;
}

.c-loader-skeleton-container {
  position: relative;
  display: block;

  .c-skeleton-block {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }

    .c-loading-box {
      animation: loading-heartbeat 3s linear infinite;
      background-color: $general_1;
      opacity: 0.625;
    }

    .c-skeleton-date {
      margin-bottom: 0.625rem;
      width: 8.75rem;
      min-height: 0;
      height: 1.25rem;
      border-radius: $radius-large;
    }

    .c-skeleton-card {
      width: 100%;
      min-height: 0;
      height: 10rem;
      border-radius: $radius-large;
    }
  }
}

@keyframes loading-heartbeat {
  0% { background-color: $general_1; }
  50% { background-color: $general_0; }
  100% { background-color: $general_1; }
}

.is-dark-theme {
  @keyframes loading-heartbeat {
    0% { opacity: 0.325; }
    50% { opacity: 1; }
    100% { opacity: 0.325; }
  }
}

.c-error {
  color: $danger_0;
}

.c-post-block {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.c-post-created-date {
  padding-left: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.c-post-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.5rem;

  .c-post-img-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    background-color: $general_2;
    flex-shrink: 0;
  }

  .c-post-content {
    flex-grow: 1;

    h3 {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
`, ".c-loading,\n.c-error {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text_1);\n}\n\n.c-loader-skeleton-container {\n  position: relative;\n  display: block;\n}\n.c-loader-skeleton-container .c-skeleton-block {\n  display: block;\n}\n.c-loader-skeleton-container .c-skeleton-block:not(:last-of-type) {\n  margin-bottom: 4rem;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-loading-box {\n  animation: loading-heartbeat 3s linear infinite;\n  background-color: var(--general_1);\n  opacity: 0.625;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-skeleton-date {\n  margin-bottom: 0.625rem;\n  width: 8.75rem;\n  min-height: 0;\n  height: 1.25rem;\n  border-radius: 5px;\n}\n.c-loader-skeleton-container .c-skeleton-block .c-skeleton-card {\n  width: 100%;\n  min-height: 0;\n  height: 10rem;\n  border-radius: 5px;\n}\n\n@keyframes loading-heartbeat {\n  0% {\n    background-color: var(--general_1);\n  }\n  50% {\n    background-color: var(--general_0);\n  }\n  100% {\n    background-color: var(--general_1);\n  }\n}\n@keyframes loading-heartbeat {\n  0% {\n    opacity: 0.325;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.325;\n  }\n}\n\n.c-error {\n  color: var(--danger_0);\n}\n\n.c-post-block {\n  position: relative;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n\n.c-post-created-date {\n  padding-left: 1rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.c-post-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1.5rem;\n}\n.c-post-card .c-post-img-container {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background-color: var(--general_2);\n  flex-shrink: 0;\n}\n.c-post-card .c-post-content {\n  flex-grow: 1;\n}\n.c-post-card .c-post-content h3 {\n  margin-bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=NewsAndUpdates.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-4a6d24c5";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-news-and-updates-container
  .c-loader-skeleton-container(v-if='isStatus("loading")')
    .c-skeleton-block(v-for='i in 2' :key='i')
      .c-loading-box.c-skeleton-date
      .c-loading-box.c-skeleton-card

  banner-scoped(v-else-if='isStatus("error")' ref='errorMsg' allow-a)

  template(v-else-if='isStatus("loaded")')
    .c-post-block(v-for='(post, index) in ephemeral.posts' :key='index')
      .c-post-created-date {{ displayDate(post.createdAt) }}

      .card.c-post-card
        .c-post-img-container
          avatar.c-post-img(
            src='/assets/images/group-income-icon-transparent-circle.png'
            alt='GI Logo'
            size='xs'
          )
        .c-post-content
          h3.is-title-4 {{ post.title }}
          render-message-with-markdown(:text='post.content')
</template>

<script>
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { mapGetters } from 'vuex'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import RenderMessageWithMarkdown from '../../../../frontend/views/containers/chatroom/chat-mentions/RenderMessageWithMarkdown.js'
import sbp from '@sbp/sbp'
import { L, LError } from '../../../../frontend/common/common.js'
import { fetchNews } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'NewAndUpdates',
  components: {
    Avatar,
    BannerScoped,
    RenderMessageWithMarkdown
  },
  data () {
    return {
      ephemeral: {
        posts: [],
        loadStatus: ''
      }
    }
  },
  computed: {
    ...mapGetters(['ourIdentityContractId'])
  },
  async mounted () {
    await this.fetchNews()
    await this.markNewsAsSeen()
  },
  methods: {
    displayDate (date) {
      return humanDate(date, { month: 'long', year: 'numeric', day: 'numeric' })
    },
    isStatus (status) {
      return this.ephemeral.loadStatus === status
    },
    async fetchNews () {
      try {
        this.ephemeral.loadStatus = 'loading'
        const data = await fetchNews()

        // Convert createdAt strings to Date objects for proper formatting
        this.ephemeral.posts = data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }))
        this.ephemeral.loadStatus = 'loaded'
      } catch (error) {
        this.ephemeral.loadStatus = 'error'
        console.error('Failed to fetch news:', error)

        this.$nextTick(() => {
          this.$refs.errorMsg.danger(L('Failed to load news: {reportError}', LError(error)))
        })
      }
    },
    async markNewsAsSeen () {
      // Update the last seen news date when user visits the page
      if (this.ephemeral.posts.length > 0 && this.ourIdentityContractId) {
        try {
          await sbp('gi.actions/identity/kv/updatePreference', {
            key: 'lastSeenNewsDate',
            value: this.ephemeral.posts[0].createdAt.toISOString()
          })
        } catch (error) {
          console.error('Failed to update last seen news date:', error)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-loading,
.c-error {
  padding: 2rem;
  text-align: center;
  color: $text_1;
}

.c-loader-skeleton-container {
  position: relative;
  display: block;

  .c-skeleton-block {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }

    .c-loading-box {
      animation: loading-heartbeat 3s linear infinite;
      background-color: $general_1;
      opacity: 0.625;
    }

    .c-skeleton-date {
      margin-bottom: 0.625rem;
      width: 8.75rem;
      min-height: 0;
      height: 1.25rem;
      border-radius: $radius-large;
    }

    .c-skeleton-card {
      width: 100%;
      min-height: 0;
      height: 10rem;
      border-radius: $radius-large;
    }
  }
}

@keyframes loading-heartbeat {
  0% { background-color: $general_1; }
  50% { background-color: $general_0; }
  100% { background-color: $general_1; }
}

.is-dark-theme {
  @keyframes loading-heartbeat {
    0% { opacity: 0.325; }
    50% { opacity: 1; }
    100% { opacity: 0.325; }
  }
}

.c-error {
  color: $danger_0;
}

.c-post-block {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.c-post-created-date {
  padding-left: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.c-post-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.5rem;

  .c-post-img-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    background-color: $general_2;
    flex-shrink: 0;
  }

  .c-post-content {
    flex-grow: 1;

    h3 {
      margin-bottom: 0.5rem;
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
var NewsAndUpdates_default = __vue_component__;

// frontend/views/containers/global-dashboard/DirectMessages.vue
var __vue_script__2 = {
  name: "NewAndUpdates"
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-news-and-updates-container" },
    [
      _c("i18n", { attrs: { tag: "p" } }, [
        _vm._v("Direct Messages: Coming soon!")
      ])
    ],
    1
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-0bd335f2_0", { source: "\n\n/*# sourceMappingURL=DirectMessages.vue.map */", map: { "version": 3, "sources": ["DirectMessages.vue"], "names": [], "mappings": ";;AAEA,6CAA6C", "file": "DirectMessages.vue", "sourcesContent": ["\n\n/*# sourceMappingURL=DirectMessages.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-0bd335f2";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-news-and-updates-container
  i18n(tag='p') Direct Messages: Coming soon!
</template>

<script>
export default ({
  name: 'NewAndUpdates'
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";
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
var DirectMessages_default = __vue_component__2;

// frontend/views/pages/GlobalDashboard.vue
var GLOBAL_DASHBOARD_SETTINGS = {
  "news-and-updates": {
    title: L("News & Updates"),
    routeTo: "/global-dashboard/news-and-updates",
    icon: "newspaper"
  },
  "direct-messages": {
    title: L("Direct Messages"),
    routeTo: "/global-dashboard/direct-messages",
    icon: "comment"
  }
};
var contentComponentsMap = {
  "news-and-updates": NewsAndUpdates_default,
  "direct-messages": DirectMessages_default
};
var __vue_script__3 = {
  name: "GlobalDashboard",
  components: {
    Page: Page_default
  },
  computed: {
    currentTabSetting() {
      return GLOBAL_DASHBOARD_SETTINGS[this.$route.params.id || "news-and-updates"];
    },
    currentContent() {
      return contentComponentsMap[this.$route.params.id || "news-and-updates"];
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "page",
    {
      attrs: {
        pageTestName: "GlobalDashboard",
        pageTestHeaderName: "pageHeaderName"
      },
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function() {
            return [_vm._v(_vm._s(_vm.currentTabSetting.title))];
          },
          proxy: true
        }
      ])
    },
    [_c(_vm.currentContent, { key: _vm.$route.params.id, tag: "component" })],
    1
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-53c29af0_0", { source: "\n\n/*# sourceMappingURL=GlobalDashboard.vue.map */", map: { "version": 3, "sources": ["GlobalDashboard.vue"], "names": [], "mappings": ";;AAEA,8CAA8C", "file": "GlobalDashboard.vue", "sourcesContent": ["\n\n/*# sourceMappingURL=GlobalDashboard.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-53c29af0";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
page(
  pageTestName='GlobalDashboard'
  pageTestHeaderName='pageHeaderName'
)
  template(#title='') {{ currentTabSetting.title }}

  component(:is='currentContent' :key='$route.params.id')
</template>

<script>
import { L } from '../../../frontend/common/common.js'
import Page from '../../../frontend/views/components/Page.vue'
import NewsAndUpdates from '../../../frontend/views/containers/global-dashboard/NewsAndUpdates.vue'
import DirectMessages from '../../../frontend/views/containers/global-dashboard/DirectMessages.vue'

export const GLOBAL_DASHBOARD_SETTINGS: {[string]: Object } = {
  'news-and-updates': {
    title: L('News & Updates'),
    routeTo: '/global-dashboard/news-and-updates',
    icon: 'newspaper'
  },
  'direct-messages': {
    title: L('Direct Messages'),
    routeTo: '/global-dashboard/direct-messages',
    icon: 'comment'
  }
}

const contentComponentsMap = {
  'news-and-updates': NewsAndUpdates,
  'direct-messages': DirectMessages
}

export default ({
  name: 'GlobalDashboard',
  components: {
    Page
  },
  computed: {
    currentTabSetting () {
      return GLOBAL_DASHBOARD_SETTINGS[this.$route.params.id || 'news-and-updates']
    },
    currentContent () {
      return contentComponentsMap[this.$route.params.id || 'news-and-updates']
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";
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
var GlobalDashboard_default = __vue_component__3;

export {
  GLOBAL_DASHBOARD_SETTINGS,
  GlobalDashboard_default
};
//# sourceMappingURL=chunk-KOCLL7EV-cached.js.map
