import {
  imageUpload
} from "./chunk-DXIHOQP2-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  AVATAR_EDITED,
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  L,
  LError
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/components/AvatarUpload.vue
var __vue_script__ = {
  name: "AvatarUpload",
  props: {
    avatar: [String, Object],
    sbpParams: {
      type: Object,
      required: true
    },
    avatarType: {
      type: String,
      validator: (v) => ["user", "group"].includes(v)
      // feel free to extend this list.
    }
  },
  components: {
    Avatar: Avatar_default,
    BannerScoped: BannerScoped_default
  },
  methods: {
    fileChange(fileList) {
      if (!fileList.length) return;
      const imageUrl = URL.createObjectURL(fileList[0]);
      esm_default("okTurtles.events/emit", OPEN_MODAL, "AvatarEditorModal", { imageUrl, avatarType: this.avatarType });
    },
    async uploadEditedImage({ blob, avatarType }) {
      if (avatarType !== this.avatarType) {
        return;
      }
      let picture;
      try {
        picture = await imageUpload(blob, { billableContractID: this.sbpParams.contractID });
      } catch (e) {
        console.error("AvatarUpload imageUpload() error:", e);
        this.$refs.formMsg.danger(L("Failed to upload avatar. {reportError}", LError(e)));
        return false;
      }
      try {
        const { selector, contractID, key } = this.sbpParams;
        await esm_default(selector, { contractID, data: { [key]: picture } });
        this.$refs.formMsg.success(L("Avatar updated!"));
      } catch (e) {
        console.error("AvatarUpload fileChange() error:", e);
        this.$refs.formMsg.danger(L("Failed to save avatar. {reportError}", LError(e)));
      }
    }
  },
  beforeMount() {
    esm_default("okTurtles.events/on", AVATAR_EDITED, this.uploadEditedImage);
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", AVATAR_EDITED, this.uploadEditedImage);
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      staticClass: "c-avatar-form",
      on: {
        submit: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "c-avatar-wrapper" },
        [
          _c(
            "label",
            { staticClass: "c-avatar-label" },
            [
              _c("avatar", {
                ref: "picture",
                staticClass: "c-avatar-img",
                attrs: { src: _vm.avatar, size: "xl" }
              }),
              _c("i18n", { staticClass: "link c-avatar-text" }, [
                _vm._v("Change avatar")
              ]),
              _c("input", {
                staticClass: "sr-only",
                attrs: {
                  type: "file",
                  name: "picture",
                  accept: "image/*",
                  placeholder: "http://",
                  "data-test": "avatar"
                },
                on: {
                  change: function($event) {
                    return _vm.fileChange($event.target.files);
                  }
                }
              })
            ],
            1
          ),
          _c("banner-scoped", {
            ref: "formMsg",
            staticClass: "c-formMsg",
            attrs: { "data-test": "avatarMsg" }
          })
        ],
        1
      )
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-49076c6b_0", { source: ".c-avatar-form[data-v-49076c6b] {\n  position: relative;\n}\n.c-avatar-wrapper[data-v-49076c6b] {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\n@media screen and (min-width: 1200px) {\n.c-avatar-wrapper[data-v-49076c6b] {\n    align-items: flex-end;\n}\n}\n@media screen and (max-width: 1199px) {\n.c-avatar-label[data-v-49076c6b] {\n    margin-bottom: 1.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-avatar-label[data-v-49076c6b] {\n    position: absolute;\n    top: -6.5rem;\n    right: 0;\n    align-items: flex-end;\n    margin-bottom: -0.5rem;\n    z-index: 3;\n}\n}\n.c-avatar-img.is-xl.is-xl[data-v-49076c6b] {\n  margin: 0 auto;\n}\n@media screen and (min-width: 1200px) {\n.c-avatar-img.is-xl.is-xl[data-v-49076c6b] {\n    width: 4.5rem;\n    height: 4.5rem;\n}\n}\n.c-avatar-text[data-v-49076c6b] {\n  display: inline-block;\n}\n.c-formMsg[data-v-49076c6b] {\n  width: 100%;\n}\n.c-formMsg[data-v-49076c6b]  .c-banner {\n  margin: 0 0 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n.c-formMsg[data-v-49076c6b]  .c-banner {\n    margin: 0.5rem 0 1.5rem;\n}\n}\n\n/*# sourceMappingURL=AvatarUpload.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/AvatarUpload.vue", "AvatarUpload.vue"], "names": [], "mappings": "AA6FA;EACA,kBAAA;AC5FA;AD+FA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AC7FA;AACA;ADuFA;IAQA,qBAAA;AC5FE;AACF;AACA;AD8FA;IAEA,qBAAA;AC7FE;AACF;AACA;ADyFA;IAMA,kBAAA;IACA,YAAA;IACA,QAAA;IACA,qBAAA;IACA,sBAAA;IACA,UAAA;AC5FE;AACF;AD+FA;EACA,cAAA;AC7FA;AACA;AD2FA;IAIA,aAAA;IACA,cAAA;AC5FE;AACF;AD+FA;EACA,qBAAA;AC7FA;ADiGA;EACA,WAAA;AC9FA;ADgGA;EACA,kBAAA;AC9FA;AACA;AD4FA;IAIA,uBAAA;AC7FE;AACF;;AAEA,2CAA2C", "file": "AvatarUpload.vue", "sourcesContent": [`<template lang='pug'>
  form.c-avatar-form(@submit.prevent='')
    .c-avatar-wrapper
      label.c-avatar-label
        avatar.c-avatar-img(
          :src='avatar'
          ref='picture'
          size='xl'
        )
        i18n.link.c-avatar-text Change avatar

        input.sr-only(
          type='file'
          name='picture'
          accept='image/*'
          @change='fileChange($event.target.files)'
          placeholder='http://'
          data-test='avatar'
        )
      banner-scoped.c-formMsg(ref='formMsg' data-test='avatarMsg')
</template>
<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL, AVATAR_EDITED } from '../../../frontend/utils/events.js'
import { L, LError } from '../../../frontend/common/common.js'
import { imageUpload } from '../../../frontend/utils/image.js'
import Avatar from '../../../frontend/views/components/Avatar.vue'
import BannerScoped from '../../../frontend/views/components/banners/BannerScoped.vue'

export default ({
  name: 'AvatarUpload',
  props: {
    avatar: [String, Object],
    sbpParams: {
      type: Object,
      required: true
    },
    avatarType: {
      type: String,
      validator: v => ['user', 'group'].includes(v) // feel free to extend this list.
    }
  },
  components: {
    Avatar,
    BannerScoped
  },
  methods: {
    fileChange (fileList) {
      if (!fileList.length) return
      const imageUrl = URL.createObjectURL(fileList[0])

      sbp('okTurtles.events/emit', OPEN_MODAL, 'AvatarEditorModal', { imageUrl, avatarType: this.avatarType })
    },
    async uploadEditedImage ({ blob, avatarType }) {
      if (avatarType !== this.avatarType) { return }
      let picture

      try {
        picture = await imageUpload(blob, { billableContractID: this.sbpParams.contractID })
      } catch (e) {
        console.error('AvatarUpload imageUpload() error:', e)
        this.$refs.formMsg.danger(L('Failed to upload avatar. {reportError}', LError(e)))
        return false
      }

      try {
        const { selector, contractID, key } = this.sbpParams
        await sbp(selector, { contractID, data: { [key]: picture } })
        // calling \`setFromBlob\` seems unnecessary here since the bound :avatar
        // parameter should get updated after the upload completes.
        // also, calling it here prevents the avatar from switching in Group Settings if we
        // just uploaded a new image and then switch groups (see #1425)
        // this.$refs.picture.setFromBlob(fileReceived)
        this.$refs.formMsg.success(L('Avatar updated!'))
      } catch (e) {
        console.error('AvatarUpload fileChange() error:', e)
        this.$refs.formMsg.danger(L('Failed to save avatar. {reportError}', LError(e)))
      }
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', AVATAR_EDITED, this.uploadEditedImage)
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', AVATAR_EDITED, this.uploadEditedImage)
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-avatar {
  &-form {
    position: relative;
  }

  &-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @include desktop {
      align-items: flex-end;
    }
  }

  &-label {
    @include touch {
      margin-bottom: 1.5rem;
    }

    @include desktop {
      position: absolute;
      top: -6.5rem;
      right: 0;
      align-items: flex-end;
      margin-bottom: -0.5rem;
      z-index: 3;
    }
  }

  &-img.is-xl.is-xl { // need .is-xl 2x for specificity
    margin: 0 auto;

    @include desktop {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  &-text {
    display: inline-block;
  }
}

.c-formMsg {
  width: 100%;

  ::v-deep .c-banner {
    margin: 0 0 1.5rem;

    @include desktop {
      margin: 0.5rem 0 1.5rem;
    }
  }
}
</style>
`, ".c-avatar-form {\n  position: relative;\n}\n.c-avatar-wrapper {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\n@media screen and (min-width: 1200px) {\n  .c-avatar-wrapper {\n    align-items: flex-end;\n  }\n}\n@media screen and (max-width: 1199px) {\n  .c-avatar-label {\n    margin-bottom: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-avatar-label {\n    position: absolute;\n    top: -6.5rem;\n    right: 0;\n    align-items: flex-end;\n    margin-bottom: -0.5rem;\n    z-index: 3;\n  }\n}\n.c-avatar-img.is-xl.is-xl {\n  margin: 0 auto;\n}\n@media screen and (min-width: 1200px) {\n  .c-avatar-img.is-xl.is-xl {\n    width: 4.5rem;\n    height: 4.5rem;\n  }\n}\n.c-avatar-text {\n  display: inline-block;\n}\n\n.c-formMsg {\n  width: 100%;\n}\n.c-formMsg ::v-deep .c-banner {\n  margin: 0 0 1.5rem;\n}\n@media screen and (min-width: 1200px) {\n  .c-formMsg ::v-deep .c-banner {\n    margin: 0.5rem 0 1.5rem;\n  }\n}\n\n/*# sourceMappingURL=AvatarUpload.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-49076c6b";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  form.c-avatar-form(@submit.prevent='')
    .c-avatar-wrapper
      label.c-avatar-label
        avatar.c-avatar-img(
          :src='avatar'
          ref='picture'
          size='xl'
        )
        i18n.link.c-avatar-text Change avatar

        input.sr-only(
          type='file'
          name='picture'
          accept='image/*'
          @change='fileChange($event.target.files)'
          placeholder='http://'
          data-test='avatar'
        )
      banner-scoped.c-formMsg(ref='formMsg' data-test='avatarMsg')
</template>
<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL, AVATAR_EDITED } from '../../../frontend/utils/events.js'
import { L, LError } from '../../../frontend/common/common.js'
import { imageUpload } from '../../../frontend/utils/image.js'
import Avatar from '../../../frontend/views/components/Avatar.vue'
import BannerScoped from '../../../frontend/views/components/banners/BannerScoped.vue'

export default ({
  name: 'AvatarUpload',
  props: {
    avatar: [String, Object],
    sbpParams: {
      type: Object,
      required: true
    },
    avatarType: {
      type: String,
      validator: v => ['user', 'group'].includes(v) // feel free to extend this list.
    }
  },
  components: {
    Avatar,
    BannerScoped
  },
  methods: {
    fileChange (fileList) {
      if (!fileList.length) return
      const imageUrl = URL.createObjectURL(fileList[0])

      sbp('okTurtles.events/emit', OPEN_MODAL, 'AvatarEditorModal', { imageUrl, avatarType: this.avatarType })
    },
    async uploadEditedImage ({ blob, avatarType }) {
      if (avatarType !== this.avatarType) { return }
      let picture

      try {
        picture = await imageUpload(blob, { billableContractID: this.sbpParams.contractID })
      } catch (e) {
        console.error('AvatarUpload imageUpload() error:', e)
        this.$refs.formMsg.danger(L('Failed to upload avatar. {reportError}', LError(e)))
        return false
      }

      try {
        const { selector, contractID, key } = this.sbpParams
        await sbp(selector, { contractID, data: { [key]: picture } })
        // calling \`setFromBlob\` seems unnecessary here since the bound :avatar
        // parameter should get updated after the upload completes.
        // also, calling it here prevents the avatar from switching in Group Settings if we
        // just uploaded a new image and then switch groups (see #1425)
        // this.$refs.picture.setFromBlob(fileReceived)
        this.$refs.formMsg.success(L('Avatar updated!'))
      } catch (e) {
        console.error('AvatarUpload fileChange() error:', e)
        this.$refs.formMsg.danger(L('Failed to save avatar. {reportError}', LError(e)))
      }
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', AVATAR_EDITED, this.uploadEditedImage)
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', AVATAR_EDITED, this.uploadEditedImage)
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-avatar {
  &-form {
    position: relative;
  }

  &-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @include desktop {
      align-items: flex-end;
    }
  }

  &-label {
    @include touch {
      margin-bottom: 1.5rem;
    }

    @include desktop {
      position: absolute;
      top: -6.5rem;
      right: 0;
      align-items: flex-end;
      margin-bottom: -0.5rem;
      z-index: 3;
    }
  }

  &-img.is-xl.is-xl { // need .is-xl 2x for specificity
    margin: 0 auto;

    @include desktop {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  &-text {
    display: inline-block;
  }
}

.c-formMsg {
  width: 100%;

  ::v-deep .c-banner {
    margin: 0 0 1.5rem;

    @include desktop {
      margin: 0.5rem 0 1.5rem;
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
var AvatarUpload_default = __vue_component__;

export {
  AvatarUpload_default
};
//# sourceMappingURL=chunk-ZVL32ZU3-cached.js.map
