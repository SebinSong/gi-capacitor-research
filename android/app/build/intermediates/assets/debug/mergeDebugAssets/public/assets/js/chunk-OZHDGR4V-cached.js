import {
  Secret
} from "./chunk-DRW7AMFK-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/components/Avatar.vue
var __vue_script__ = {
  name: "Avatar",
  props: {
    src: [String, Object],
    // acts as a placeholder when used together with blobURL
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
  mounted() {
    if (this.src && typeof this.src === "object") {
      this.downloadFile(this.src).catch((e) => {
        console.error("[Avatar.vue] Error in downloadFile", e);
      });
    }
  },
  beforeDestroy() {
    this.revokeObjectURL();
  },
  data() {
    return {
      revokableObjectURL: null,
      blobURL: null
    };
  },
  methods: {
    // See <https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_object_urls>
    revokeObjectURL() {
      if (this.revokableObjectURL) {
        URL.revokeObjectURL(this.revokableObjectURL);
      }
      this.revokableObjectURL = null;
    },
    setFromBlob(blob) {
      this.revokableObjectURL = this.blobURL = URL.createObjectURL(blob);
    },
    async downloadFile(src) {
      const cachedArrayBuffer = await esm_default("gi.db/filesCache/load", src.manifestCid).catch((e) => {
        console.error("[Avatar.vue] Error loading file from cache", e);
      });
      const cached = cachedArrayBuffer ? new Blob([cachedArrayBuffer]) : null;
      if (src !== this.src) return;
      if (cached) {
        this.setFromBlob(cached);
        return;
      }
      try {
        const blob = await esm_default("chelonia/fileDownload", new Secret(src));
        const arrayBuffer = await blob.arrayBuffer();
        esm_default("gi.db/filesCache/save", src.manifestCid, arrayBuffer).catch((e) => {
          console.error("[Avatar.vue] Error caching avatar blob", e);
        });
        if (src !== this.src) return;
        this.setFromBlob(blob);
      } catch (e) {
        console.error("[Avatar.vue] Error setting avatar blob", e);
      }
    }
  },
  watch: {
    src(to) {
      if (to && typeof to === "object") {
        this.downloadFile(to).catch((e) => {
          console.error("[Avatar.vue] Error in downloadFile", e);
        });
      }
    }
  },
  computed: {
    imageURL() {
      return this.blobURL || typeof this.src === "string" && this.src;
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.imageURL ? _c(
    "img",
    _vm._g(
      {
        ref: "img",
        staticClass: "c-avatar",
        class: "is-" + _vm.size,
        attrs: { src: _vm.imageURL, alt: _vm.alt, draggable: "false" },
        on: { load: _vm.revokeObjectURL, error: _vm.revokeObjectURL }
      },
      _vm.$listeners
    )
  ) : _c("div", { staticClass: "c-avatar is-empty", class: "is-" + _vm.size });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-20b8b25a_0", { source: '.c-avatar[data-v-20b8b25a] {\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.c-avatar[data-v-20b8b25a]::after {\n  content: "";\n  display: block;\n  padding-bottom: 100%;\n}\n.c-avatar.is-empty[data-v-20b8b25a] {\n  background-color: var(--general_0);\n}\n.c-avatar.is-xs[data-v-20b8b25a] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.c-avatar.is-sm[data-v-20b8b25a] {\n  width: 2rem;\n  height: 2rem;\n}\n.c-avatar.is-md[data-v-20b8b25a] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.c-avatar.is-lg[data-v-20b8b25a] {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.c-avatar.is-xl[data-v-20b8b25a] {\n  width: 8rem;\n  height: 8rem;\n}\n\n/*# sourceMappingURL=Avatar.vue.map */', map: { "version": 3, "sources": ["frontend/views/components/Avatar.vue", "Avatar.vue"], "names": [], "mappings": "AAkHA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;ACjHA;ADmHA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;ACjHA;ADoHA;EACA,kCAAA;AClHA;ADqHA;EAnBA,aAmBA;EAlBA,cAkBA;ACjHA;ADkHA;EApBA,WAoBA;EAnBA,YAmBA;AC9GA;AD+GA;EArBA,aAqBA;EApBA,cAoBA;AC3GA;AD4GA;EAtBA,aAsBA;EArBA,cAqBA;ACxGA;ADyGA;EAvBA,WAuBA;EAtBA,YAsBA;ACrGA;;AAEA,qCAAqC", "file": "Avatar.vue", "sourcesContent": ["<template lang='pug'>\n  img.c-avatar(\n    v-if='imageURL'\n    :class='`is-${size}`'\n    :src='imageURL'\n    :alt='alt'\n    @load='revokeObjectURL'\n    @error='revokeObjectURL'\n    ref='img'\n    v-on='$listeners'\n    draggable='false'\n  )\n  .c-avatar.is-empty(v-else :class='`is-${size}`')\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { Secret } from '@chelonia/lib/Secret'\n\nexport default ({\n  name: 'Avatar',\n  props: {\n    src: [String, Object], // acts as a placeholder when used together with blobURL\n    alt: {\n      type: String,\n      default: ''\n    },\n    size: {\n      type: String,\n      default: 'md',\n      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)\n    }\n  },\n  mounted () {\n    // typeof null === 'object', so both checks are needed\n    if (this.src && typeof this.src === 'object') {\n      this.downloadFile(this.src).catch((e) => {\n        console.error('[Avatar.vue] Error in downloadFile', e)\n      })\n    }\n  },\n  beforeDestroy () {\n    this.revokeObjectURL()\n  },\n  data () {\n    return {\n      revokableObjectURL: null,\n      blobURL: null\n    }\n  },\n  methods: {\n    // See <https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_object_urls>\n    revokeObjectURL () {\n      if (this.revokableObjectURL) {\n        URL.revokeObjectURL(this.revokableObjectURL)\n      }\n      this.revokableObjectURL = null\n    },\n    setFromBlob (blob) {\n      // this.revokeObjectURL()\n      this.revokableObjectURL = this.blobURL = URL.createObjectURL(blob)\n    },\n    async downloadFile (src) {\n      // convert Blob to/from ArrayBuffer for Safari compatibility\n      // see: https://github.com/okTurtles/group-income/issues/2191\n      const cachedArrayBuffer = await sbp('gi.db/filesCache/load', src.manifestCid).catch((e) => {\n        console.error('[Avatar.vue] Error loading file from cache', e)\n      })\n      const cached = cachedArrayBuffer ? new Blob([cachedArrayBuffer]) : null\n      if (src !== this.src) return\n      if (cached) {\n        this.setFromBlob(cached)\n        return\n      }\n      try {\n        const blob = await sbp('chelonia/fileDownload', new Secret(src))\n        const arrayBuffer = await blob.arrayBuffer()\n        sbp('gi.db/filesCache/save', src.manifestCid, arrayBuffer).catch((e) => {\n          console.error('[Avatar.vue] Error caching avatar blob', e)\n        })\n        if (src !== this.src) return\n        this.setFromBlob(blob)\n      } catch (e) {\n        console.error('[Avatar.vue] Error setting avatar blob', e)\n      }\n    }\n  },\n  watch: {\n    src (to) {\n      // NOTE: src could be null while logging out\n      //       since typeof null === 'object', we should check if it's falsy\n      if (to && typeof to === 'object') {\n        this.downloadFile(to).catch((e) => {\n          console.error('[Avatar.vue] Error in downloadFile', e)\n        })\n      }\n    }\n  },\n  computed: {\n    imageURL () {\n      return this.blobURL || (typeof this.src === 'string' && this.src)\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n@mixin size($size) {\n  width: $size;\n  height: $size;\n}\n\n.c-avatar {\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n\n  &::after {\n    content: \"\";\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  &.is-empty {\n    background-color: $general_0;\n  }\n\n  &.is-xs { @include size(1.5rem); }\n  &.is-sm { @include size(2rem); }\n  &.is-md { @include size(2.5rem); }\n  &.is-lg { @include size(4.5rem); }\n  &.is-xl { @include size(8rem); }\n}\n</style>\n", '.c-avatar {\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.c-avatar::after {\n  content: "";\n  display: block;\n  padding-bottom: 100%;\n}\n.c-avatar.is-empty {\n  background-color: var(--general_0);\n}\n.c-avatar.is-xs {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.c-avatar.is-sm {\n  width: 2rem;\n  height: 2rem;\n}\n.c-avatar.is-md {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.c-avatar.is-lg {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.c-avatar.is-xl {\n  width: 8rem;\n  height: 8rem;\n}\n\n/*# sourceMappingURL=Avatar.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-20b8b25a";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n  img.c-avatar(\n    v-if='imageURL'\n    :class='`is-${size}`'\n    :src='imageURL'\n    :alt='alt'\n    @load='revokeObjectURL'\n    @error='revokeObjectURL'\n    ref='img'\n    v-on='$listeners'\n    draggable='false'\n  )\n  .c-avatar.is-empty(v-else :class='`is-${size}`')\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { Secret } from '@chelonia/lib/Secret'\n\nexport default ({\n  name: 'Avatar',\n  props: {\n    src: [String, Object], // acts as a placeholder when used together with blobURL\n    alt: {\n      type: String,\n      default: ''\n    },\n    size: {\n      type: String,\n      default: 'md',\n      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)\n    }\n  },\n  mounted () {\n    // typeof null === 'object', so both checks are needed\n    if (this.src && typeof this.src === 'object') {\n      this.downloadFile(this.src).catch((e) => {\n        console.error('[Avatar.vue] Error in downloadFile', e)\n      })\n    }\n  },\n  beforeDestroy () {\n    this.revokeObjectURL()\n  },\n  data () {\n    return {\n      revokableObjectURL: null,\n      blobURL: null\n    }\n  },\n  methods: {\n    // See <https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_object_urls>\n    revokeObjectURL () {\n      if (this.revokableObjectURL) {\n        URL.revokeObjectURL(this.revokableObjectURL)\n      }\n      this.revokableObjectURL = null\n    },\n    setFromBlob (blob) {\n      // this.revokeObjectURL()\n      this.revokableObjectURL = this.blobURL = URL.createObjectURL(blob)\n    },\n    async downloadFile (src) {\n      // convert Blob to/from ArrayBuffer for Safari compatibility\n      // see: https://github.com/okTurtles/group-income/issues/2191\n      const cachedArrayBuffer = await sbp('gi.db/filesCache/load', src.manifestCid).catch((e) => {\n        console.error('[Avatar.vue] Error loading file from cache', e)\n      })\n      const cached = cachedArrayBuffer ? new Blob([cachedArrayBuffer]) : null\n      if (src !== this.src) return\n      if (cached) {\n        this.setFromBlob(cached)\n        return\n      }\n      try {\n        const blob = await sbp('chelonia/fileDownload', new Secret(src))\n        const arrayBuffer = await blob.arrayBuffer()\n        sbp('gi.db/filesCache/save', src.manifestCid, arrayBuffer).catch((e) => {\n          console.error('[Avatar.vue] Error caching avatar blob', e)\n        })\n        if (src !== this.src) return\n        this.setFromBlob(blob)\n      } catch (e) {\n        console.error('[Avatar.vue] Error setting avatar blob', e)\n      }\n    }\n  },\n  watch: {\n    src (to) {\n      // NOTE: src could be null while logging out\n      //       since typeof null === 'object', we should check if it's falsy\n      if (to && typeof to === 'object') {\n        this.downloadFile(to).catch((e) => {\n          console.error('[Avatar.vue] Error in downloadFile', e)\n        })\n      }\n    }\n  },\n  computed: {\n    imageURL () {\n      return this.blobURL || (typeof this.src === 'string' && this.src)\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n@mixin size($size) {\n  width: $size;\n  height: $size;\n}\n\n.c-avatar {\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n\n  &::after {\n    content: \"\";\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  &.is-empty {\n    background-color: $general_0;\n  }\n\n  &.is-xs { @include size(1.5rem); }\n  &.is-sm { @include size(2rem); }\n  &.is-md { @include size(2.5rem); }\n  &.is-lg { @include size(4.5rem); }\n  &.is-xl { @include size(8rem); }\n}\n</style>\n";
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
var Avatar_default = __vue_component__;

export {
  Avatar_default
};
//# sourceMappingURL=chunk-OZHDGR4V-cached.js.map
