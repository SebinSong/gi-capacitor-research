import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/components/AvatarUser.vue
var __vue_script__ = {
  name: "AvatarUser",
  components: { Avatar: Avatar_default },
  props: {
    picture: {
      type: [String, Object]
    },
    contractID: {
      type: String
    },
    alt: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value)
    }
  },
  data() {
    return {
      ephemeral: {
        url: null
      }
    };
  },
  async mounted() {
    if (!this.profilePicture) {
      console.debug(`Looking for ${this.contractID} profile picture`);
      const state = await esm_default("chelonia/latestContractState", this.contractID).catch((e) => {
        console.warn("[AvatarUser.vue] Error on latestContractState", e);
      }) || {};
      this.ephemeral.url = state.attributes && state.attributes.picture;
    }
  },
  computed: {
    ...mapGetters(["globalProfile"]),
    profilePicture() {
      const profile = this.globalProfile(this.contractID);
      return this.picture || profile && profile.picture;
    },
    pictureURL() {
      return this.profilePicture || this.ephemeral.url;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("avatar", {
    attrs: { src: _vm.pictureURL, alt: _vm.alt, size: _vm.size }
  });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = void 0;
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  avatar(\n    :src='pictureURL'\n    :alt='alt'\n    :size='size'\n  )\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { mapGetters } from 'vuex'\nimport Avatar from '../../../frontend/views/components/Avatar.vue'\n\nexport default ({\n  name: 'AvatarUser',\n  components: { Avatar },\n  props: {\n    picture: {\n      type: [String, Object]\n    },\n    contractID: {\n      type: String\n    },\n    alt: {\n      type: String,\n      default: ''\n    },\n    size: {\n      type: String,\n      default: 'md',\n      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        url: null\n      }\n    }\n  },\n  async mounted () {\n    if (!this.profilePicture) {\n      console.debug(`Looking for ${this.contractID} profile picture`)\n      const state = await sbp('chelonia/latestContractState', this.contractID).catch((e) => {\n        console.warn('[AvatarUser.vue] Error on latestContractState', e)\n      }) || {}\n      this.ephemeral.url = state.attributes && state.attributes.picture\n    }\n  },\n  computed: {\n    ...mapGetters(['globalProfile']),\n    profilePicture () {\n      const profile = this.globalProfile(this.contractID)\n      return this.picture || (profile && profile.picture)\n    },\n    pictureURL () {\n      return this.profilePicture || this.ephemeral.url\n    }\n  }\n}: Object)\n<\/script>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  void 0,
  void 0,
  void 0
);
var AvatarUser_default = __vue_component__;

export {
  AvatarUser_default
};
//# sourceMappingURL=chunk-K4WYPR2K-cached.js.map
