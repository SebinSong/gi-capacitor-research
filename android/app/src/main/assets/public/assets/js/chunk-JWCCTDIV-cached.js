import {
  ModalMixins_default
} from "./chunk-WNIDE56S-cached.js";
import {
  trapFocus_default
} from "./chunk-UHGLFGQW-cached.js";

// frontend/views/components/modal/ModalTemplate.vue
var __vue_script__ = {
  name: "ModalTemplate",
  mixins: [ModalMixins_default, trapFocus_default],
  methods: {
    closeModal() {
      if (!this.modalForceAction) {
        this.close();
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
    {
      directives: [{ name: "focus", rawName: "v-focus" }],
      staticClass: "c-modal",
      attrs: {
        "data-test": "modal",
        role: "dialog",
        tabindex: "-1",
        "aria-label": _vm.a11yTitle
      }
    },
    [
      _c("transition", { attrs: { name: "fade", appear: "appear" } }, [
        _vm.modalIsActive ? _c("div", {
          staticClass: "c-modal-background",
          on: { click: _vm.closeModal }
        }) : _vm._e()
      ]),
      _c(
        "transition",
        {
          attrs: { name: "slide-left", appear: "appear" },
          on: { "after-leave": _vm.unload }
        },
        [
          _vm.modalIsActive ? _c("div", { ref: "card", staticClass: "c-modal-content" }, [
            _vm.$scopedSlots.title || _vm.$scopedSlots.subtitle ? _c(
              "header",
              {
                staticClass: "c-modal-header",
                class: { "has-subtitle": _vm.$scopedSlots.subtitle }
              },
              [
                !_vm.modalForceAction ? _c("modal-close", {
                  attrs: { "back-on-mobile": _vm.backOnMobile },
                  on: { close: _vm.close }
                }) : _vm._e(),
                _vm.$scopedSlots.subtitle ? _c(
                  "h2",
                  { staticClass: "is-subtitle" },
                  [_vm._t("subtitle")],
                  2
                ) : _vm._e(),
                _vm.$scopedSlots.title ? _c(
                  "h1",
                  {
                    staticClass: "is-title-1",
                    attrs: { "data-test": "modal-header-title" }
                  },
                  [_vm._t("title")],
                  2
                ) : _vm._e()
              ],
              1
            ) : _vm._e(),
            _c(
              "section",
              { staticClass: "c-modal-body" },
              [_vm._t("default")],
              2
            ),
            _vm.$scopedSlots.footer ? _c(
              "footer",
              { staticClass: "c-modal-footer" },
              [_vm._t("footer")],
              2
            ) : _vm._e()
          ]) : _vm._e()
        ]
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-3063a800_0", { source: ".c-modal[data-v-3063a800] {\n  display: flex;\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n}\n.c-modal.is-prompt[data-v-3063a800] {\n  z-index: 45;\n}\n@media screen and (min-width: 1200px) {\n.c-modal-background[data-v-3063a800] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    background-color: rgba(10, 10, 10, 0.86);\n}\n}\n.c-modal-content[data-v-3063a800] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden auto;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background: var(--background_0);\n}\n@media screen and (min-width: 1200px) {\n.c-modal-content[data-v-3063a800] {\n    position: relative;\n    border-radius: 0.375rem;\n    max-width: 40rem;\n    height: auto;\n    margin: auto;\n    transition: none !important;\n    overflow: hidden;\n}\n}\n.c-modal-header[data-v-3063a800],\n.c-modal-body[data-v-3063a800],\n.c-modal-footer[data-v-3063a800] {\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n@media screen and (min-width: 769px), print {\n.c-modal-header[data-v-3063a800],\n  .c-modal-body[data-v-3063a800] {\n    align-items: center;\n}\n}\n.c-modal-body[data-v-3063a800],\n.c-modal-footer[data-v-3063a800] {\n  align-self: center;\n  width: 100%;\n  max-width: calc(100% - 2rem);\n}\n@media screen and (min-width: 769px), print {\n.c-modal-body[data-v-3063a800],\n  .c-modal-footer[data-v-3063a800] {\n    max-width: 33.375rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-body[data-v-3063a800],\n  .c-modal-footer[data-v-3063a800] {\n    max-width: 25rem;\n}\n}\n.c-modal-header[data-v-3063a800] {\n  position: relative;\n  padding: 0 1rem;\n  min-height: 4.75rem;\n}\n@media screen and (min-width: 769px), print {\n.c-modal-header[data-v-3063a800] {\n    min-height: 5.75rem;\n    align-items: center;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-header[data-v-3063a800] {\n    min-height: 6.5rem;\n}\n}\n.c-modal-header.has-subtitle[data-v-3063a800] {\n  min-height: 5.625rem;\n}\n@media screen and (min-width: 769px), print {\n.c-modal-header.has-subtitle[data-v-3063a800] {\n    min-height: 6.625rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-header.has-subtitle[data-v-3063a800] {\n    min-height: 7.5rem;\n}\n}\n@media screen and (max-height: 31rem) {\n.c-modal-header[data-v-3063a800] {\n    min-height: 5.125rem;\n}\n}\n@media screen and (max-width: 1199px) {\n.is-left-aligned .c-modal-header[data-v-3063a800] {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n}\n}\n.c-modal-body[data-v-3063a800] {\n  margin: 1rem 1rem 2rem 1rem;\n}\n.c-modal-body[data-v-3063a800]:last-child {\n  padding-bottom: 2rem;\n}\n.c-modal-body > *[data-v-3063a800] {\n  align-self: stretch;\n}\n@media screen and (max-height: 500px) {\n.c-modal-body[data-v-3063a800] {\n    justify-content: normal;\n    overflow: auto;\n}\n}\n.c-modal-footer[data-v-3063a800] {\n  min-height: 53px;\n}\n@media screen and (max-width: 1199px) {\n.c-modal-footer[data-v-3063a800] {\n    border-radius: 0.25rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-modal-footer[data-v-3063a800] {\n    padding-bottom: 4rem;\n    max-width: 100%;\n    align-self: normal;\n}\n}\n@media screen and (max-height: 500px) {\n.c-modal-footer[data-v-3063a800] {\n    padding-bottom: 1rem;\n}\n}\n.c-modal-footer .button[data-v-3063a800]:not(:last-child) {\n  margin-right: 10px;\n}\n.c-modal-close[data-v-3063a800] {\n  background-color: var(--background_0);\n}\n.has-background .c-modal-close[data-v-3063a800] {\n  background-color: var(--background_0);\n}\n.has-background .c-modal-header[data-v-3063a800] {\n  background-color: var(--general_2);\n}\n.has-background .c-modal-body[data-v-3063a800] {\n  margin-top: 2rem;\n}\n.has-background .c-modal-footer[data-v-3063a800] {\n  background-color: var(--general_2);\n  margin: 1rem;\n  padding: 1rem;\n}\n@media screen and (min-width: 1200px) {\n.has-background .c-modal-footer[data-v-3063a800] {\n    align-items: flex-start;\n    margin: 0;\n    padding: 0 1.5rem;\n}\n}\n.is-centered .modal-card-body[data-v-3063a800] {\n  width: 100%;\n  max-width: calc(400px + 2rem);\n  align-self: center;\n}\n@media screen and (min-width: 1200px) {\n.is-centered .modal-card-body[data-v-3063a800] {\n    text-align: center;\n}\n}\n\n/*# sourceMappingURL=ModalTemplate.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/modal/ModalTemplate.vue", "ModalTemplate.vue"], "names": [], "mappings": "AAkDA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;ACjDA;ADmDA;EACA,WAAA;ACjDA;AAEA;ADoDA;IACA,eAAA;IACA,SAAA;IACA,OAAA;IACA,QAAA;IACA,MAAA;IACA,wCAAA;AClDE;AACF;ADqDA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,+BAAA;ACnDA;AACA;AD0CA;IAWA,kBAAA;IACA,uBAAA;IACA,gBAAA;IACA,YAAA;IACA,YAAA;IACA,2BAAA;IACA,gBAAA;AClDE;AACF;ADqDA;;;EAGA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,aAAA;AClDA;ADNA;AA2DA;;IAGA,mBAAA;AClDE;AACF;ADqDA;;EAEA,kBAAA;EACA,WAAA;EACA,4BAAA;AClDA;ADpBA;AAkEA;;IAOA,oBAAA;AChDE;AACF;AACA;ADuCA;;IAUA,gBAAA;AC7CE;AACF;ADgDA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;AC7CA;ADtCA;AAgFA;IAMA,mBAAA;IACA,mBAAA;AC5CE;AACF;AACA;ADmCA;IAWA,kBAAA;AC3CE;AACF;AD6CA;EACA,oBAAA;AC3CA;ADpDA;AA8FA;IAIA,oBAAA;AC1CE;AACF;AACA;ADoCA;IAOA,kBAAA;ACxCE;AACF;AD2CA;AAzBA;IA0BA,oBAAA;ACxCE;AACF;AD7DA;AAyGA;IAEA,mBAAA;IACA,2BAAA;IACA,mBAAA;ACzCE;AACF;AD6CA;EACA,2BAAA;AC1CA;AD4CA;EACA,oBAAA;AC1CA;AD6CA;EACA,mBAAA;AC3CA;AD8CA;AAXA;IAYA,uBAAA;IACA,cAAA;AC3CE;AACF;AD8CA;EACA,gBAAA;AC3CA;ADzFA;AAmIA;IAIA,sBAAA;AC1CE;AACF;AACA;ADoCA;IAQA,oBAAA;IACA,eAAA;IACA,kBAAA;ACzCE;AACF;AD2CA;AAbA;IAcA,oBAAA;ACxCE;AACF;AD2CA;EACA,kBAAA;ACzCA;AD8CA;EACA,qCAAA;AC3CA;ADgDA;EACA,qCAAA;AC7CA;ADgDA;EACA,kCAAA;AC9CA;ADiDA;EACA,gBAAA;AC/CA;ADkDA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;AChDA;AACA;AD4CA;IAMA,uBAAA;IACA,SAAA;IACA,iBAAA;AC/CE;AACF;ADqDA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AClDA;AACA;AD8CA;IAMA,kBAAA;ACjDE;AACF;;AAEA,4CAA4C", "file": "ModalTemplate.vue", "sourcesContent": [`<template lang='pug'>
  .c-modal(
    data-test='modal'
    role='dialog'
    tabindex='-1'
    :aria-label='a11yTitle'
    v-focus=''
  )
    transition(name='fade' appear)
      .c-modal-background(@click='closeModal' v-if='modalIsActive')

    transition(name='slide-left' appear @after-leave='unload')
      .c-modal-content(ref='card' v-if='modalIsActive')
        header.c-modal-header(
          :class='{ "has-subtitle": $scopedSlots.subtitle }'
          v-if='$scopedSlots.title || $scopedSlots.subtitle'
        )
          modal-close(@close='close' :back-on-mobile='backOnMobile' v-if='!modalForceAction')
          h2.is-subtitle(v-if='$scopedSlots.subtitle')
            slot(name='subtitle')
          h1.is-title-1(v-if='$scopedSlots.title' data-test='modal-header-title')
            slot(name='title')

        section.c-modal-body
          slot

        footer.c-modal-footer(v-if='$scopedSlots.footer')
          slot(name='footer')
</template>

<script>
import modalMixins from './ModalMixins.js'
import trapFocus from '../../../../frontend/utils/trapFocus.js'

export default ({
  name: 'ModalTemplate',
  mixins: [modalMixins, trapFocus],
  methods: {
    closeModal () {
      if (!this.modalForceAction) {
        this.close()
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-modal {
  display: flex;
  position: fixed;
  z-index: $zindex-modal;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow: auto;

  &.is-prompt {
    z-index: $zindex-prompt;
  }
}

@include desktop {
  .c-modal-background {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(10, 10, 10, 0.86);
  }
}

.c-modal-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: $background_0;

  @include desktop {
    position: relative;
    border-radius: 0.375rem;
    max-width: 40rem;
    height: auto;
    margin: auto;
    transition: none !important;
    overflow: hidden;
  }
}

.c-modal-header,
.c-modal-body,
.c-modal-footer {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.c-modal-header,
.c-modal-body {
  @include tablet {
    align-items: center;
  }
}

.c-modal-body,
.c-modal-footer {
  align-self: center;
  width: 100%;
  max-width: calc(100% - 2rem);

  @include tablet {
    max-width: 33.375rem;
  }
  @include desktop {
    max-width: 25rem;
  }
}

.c-modal-header {
  position: relative;
  padding: 0 1rem;
  min-height: 4.75rem;

  @include tablet {
    min-height: 5.75rem;
    align-items: center;
  }

  @include desktop {
    min-height: 6.5rem;
  }

  &.has-subtitle {
    min-height: 5.625rem;

    @include tablet {
      min-height: 6.625rem;
    }
    @include desktop {
      min-height: 7.5rem;
    }
  }

  @media screen and (max-height: 31rem) {
    min-height: 5.125rem;
  }
}

.is-left-aligned {
  .c-modal-header {
    @include touch {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
}

.c-modal-body {
  margin: 1rem 1rem 2rem 1rem;

  &:last-child {
    padding-bottom: 2rem;
  }

  > * {
    align-self: stretch;
  }

  @media screen and (max-height: 500px) {
    justify-content: normal;
    overflow: auto;
  }
}

.c-modal-footer {
  min-height: 53px;

  @include touch {
    border-radius: 0.25rem;
  }

  @include desktop {
    padding-bottom: 4rem;
    max-width: 100%;
    align-self: normal;
  }

  @media screen and (max-height: 500px) {
    padding-bottom: 1rem;
  }

  .button {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.c-modal-close {
  background-color: $background_0;
}

// Mofifiers
.has-background {
  .c-modal-close {
    background-color: $background_0;
  }

  .c-modal-header {
    background-color: $general_2;
  }

  .c-modal-body {
    margin-top: 2rem;
  }

  .c-modal-footer {
    background-color: $general_2;
    margin: 1rem;
    padding: 1rem;

    @include desktop {
      align-items: flex-start;
      margin: 0;
      padding: 0 1.5rem;
    }
  }
}

.is-centered {
  .modal-card {
    &-body {
      width: 100%;
      max-width: calc(400px + 2rem);
      align-self: center;

      @include desktop {
        text-align: center;
      }
    }
  }
}
</style>
`, ".c-modal {\n  display: flex;\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n}\n.c-modal.is-prompt {\n  z-index: 45;\n}\n\n@media screen and (min-width: 1200px) {\n  .c-modal-background {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    background-color: rgba(10, 10, 10, 0.86);\n  }\n}\n.c-modal-content {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden auto;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background: var(--background_0);\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-content {\n    position: relative;\n    border-radius: 0.375rem;\n    max-width: 40rem;\n    height: auto;\n    margin: auto;\n    transition: none !important;\n    overflow: hidden;\n  }\n}\n\n.c-modal-header,\n.c-modal-body,\n.c-modal-footer {\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n\n@media screen and (min-width: 769px), print {\n  .c-modal-header,\n  .c-modal-body {\n    align-items: center;\n  }\n}\n\n.c-modal-body,\n.c-modal-footer {\n  align-self: center;\n  width: 100%;\n  max-width: calc(100% - 2rem);\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-body,\n  .c-modal-footer {\n    max-width: 33.375rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-body,\n  .c-modal-footer {\n    max-width: 25rem;\n  }\n}\n\n.c-modal-header {\n  position: relative;\n  padding: 0 1rem;\n  min-height: 4.75rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-header {\n    min-height: 5.75rem;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-header {\n    min-height: 6.5rem;\n  }\n}\n.c-modal-header.has-subtitle {\n  min-height: 5.625rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-header.has-subtitle {\n    min-height: 6.625rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-header.has-subtitle {\n    min-height: 7.5rem;\n  }\n}\n@media screen and (max-height: 31rem) {\n  .c-modal-header {\n    min-height: 5.125rem;\n  }\n}\n\n@media screen and (max-width: 1199px) {\n  .is-left-aligned .c-modal-header {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n\n.c-modal-body {\n  margin: 1rem 1rem 2rem 1rem;\n}\n.c-modal-body:last-child {\n  padding-bottom: 2rem;\n}\n.c-modal-body > * {\n  align-self: stretch;\n}\n@media screen and (max-height: 500px) {\n  .c-modal-body {\n    justify-content: normal;\n    overflow: auto;\n  }\n}\n\n.c-modal-footer {\n  min-height: 53px;\n}\n@media screen and (max-width: 1199px) {\n  .c-modal-footer {\n    border-radius: 0.25rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-footer {\n    padding-bottom: 4rem;\n    max-width: 100%;\n    align-self: normal;\n  }\n}\n@media screen and (max-height: 500px) {\n  .c-modal-footer {\n    padding-bottom: 1rem;\n  }\n}\n.c-modal-footer .button:not(:last-child) {\n  margin-right: 10px;\n}\n\n.c-modal-close {\n  background-color: var(--background_0);\n}\n\n.has-background .c-modal-close {\n  background-color: var(--background_0);\n}\n.has-background .c-modal-header {\n  background-color: var(--general_2);\n}\n.has-background .c-modal-body {\n  margin-top: 2rem;\n}\n.has-background .c-modal-footer {\n  background-color: var(--general_2);\n  margin: 1rem;\n  padding: 1rem;\n}\n@media screen and (min-width: 1200px) {\n  .has-background .c-modal-footer {\n    align-items: flex-start;\n    margin: 0;\n    padding: 0 1.5rem;\n  }\n}\n\n.is-centered .modal-card-body {\n  width: 100%;\n  max-width: calc(400px + 2rem);\n  align-self: center;\n}\n@media screen and (min-width: 1200px) {\n  .is-centered .modal-card-body {\n    text-align: center;\n  }\n}\n\n/*# sourceMappingURL=ModalTemplate.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-3063a800";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .c-modal(
    data-test='modal'
    role='dialog'
    tabindex='-1'
    :aria-label='a11yTitle'
    v-focus=''
  )
    transition(name='fade' appear)
      .c-modal-background(@click='closeModal' v-if='modalIsActive')

    transition(name='slide-left' appear @after-leave='unload')
      .c-modal-content(ref='card' v-if='modalIsActive')
        header.c-modal-header(
          :class='{ "has-subtitle": $scopedSlots.subtitle }'
          v-if='$scopedSlots.title || $scopedSlots.subtitle'
        )
          modal-close(@close='close' :back-on-mobile='backOnMobile' v-if='!modalForceAction')
          h2.is-subtitle(v-if='$scopedSlots.subtitle')
            slot(name='subtitle')
          h1.is-title-1(v-if='$scopedSlots.title' data-test='modal-header-title')
            slot(name='title')

        section.c-modal-body
          slot

        footer.c-modal-footer(v-if='$scopedSlots.footer')
          slot(name='footer')
</template>

<script>
import modalMixins from './ModalMixins.js'
import trapFocus from '../../../../frontend/utils/trapFocus.js'

export default ({
  name: 'ModalTemplate',
  mixins: [modalMixins, trapFocus],
  methods: {
    closeModal () {
      if (!this.modalForceAction) {
        this.close()
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-modal {
  display: flex;
  position: fixed;
  z-index: $zindex-modal;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow: auto;

  &.is-prompt {
    z-index: $zindex-prompt;
  }
}

@include desktop {
  .c-modal-background {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(10, 10, 10, 0.86);
  }
}

.c-modal-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: $background_0;

  @include desktop {
    position: relative;
    border-radius: 0.375rem;
    max-width: 40rem;
    height: auto;
    margin: auto;
    transition: none !important;
    overflow: hidden;
  }
}

.c-modal-header,
.c-modal-body,
.c-modal-footer {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.c-modal-header,
.c-modal-body {
  @include tablet {
    align-items: center;
  }
}

.c-modal-body,
.c-modal-footer {
  align-self: center;
  width: 100%;
  max-width: calc(100% - 2rem);

  @include tablet {
    max-width: 33.375rem;
  }
  @include desktop {
    max-width: 25rem;
  }
}

.c-modal-header {
  position: relative;
  padding: 0 1rem;
  min-height: 4.75rem;

  @include tablet {
    min-height: 5.75rem;
    align-items: center;
  }

  @include desktop {
    min-height: 6.5rem;
  }

  &.has-subtitle {
    min-height: 5.625rem;

    @include tablet {
      min-height: 6.625rem;
    }
    @include desktop {
      min-height: 7.5rem;
    }
  }

  @media screen and (max-height: 31rem) {
    min-height: 5.125rem;
  }
}

.is-left-aligned {
  .c-modal-header {
    @include touch {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
}

.c-modal-body {
  margin: 1rem 1rem 2rem 1rem;

  &:last-child {
    padding-bottom: 2rem;
  }

  > * {
    align-self: stretch;
  }

  @media screen and (max-height: 500px) {
    justify-content: normal;
    overflow: auto;
  }
}

.c-modal-footer {
  min-height: 53px;

  @include touch {
    border-radius: 0.25rem;
  }

  @include desktop {
    padding-bottom: 4rem;
    max-width: 100%;
    align-self: normal;
  }

  @media screen and (max-height: 500px) {
    padding-bottom: 1rem;
  }

  .button {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.c-modal-close {
  background-color: $background_0;
}

// Mofifiers
.has-background {
  .c-modal-close {
    background-color: $background_0;
  }

  .c-modal-header {
    background-color: $general_2;
  }

  .c-modal-body {
    margin-top: 2rem;
  }

  .c-modal-footer {
    background-color: $general_2;
    margin: 1rem;
    padding: 1rem;

    @include desktop {
      align-items: flex-start;
      margin: 0;
      padding: 0 1.5rem;
    }
  }
}

.is-centered {
  .modal-card {
    &-body {
      width: 100%;
      max-width: calc(400px + 2rem);
      align-self: center;

      @include desktop {
        text-align: center;
      }
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
var ModalTemplate_default = __vue_component__;

export {
  ModalTemplate_default
};
//# sourceMappingURL=chunk-JWCCTDIV-cached.js.map
