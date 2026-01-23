import {
  VideoPlayer_default
} from "./chunk-SQMUD3PG-cached.js";
import {
  formatBytesDecimal
} from "./chunk-PSB6JKOA-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import {
  trapFocus_default
} from "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/video-viewer/VideoViewerModal.vue
var __vue_script__ = {
  name: "VideoViewerModal",
  mixins: [trapFocus_default],
  components: {
    AvatarUser: AvatarUser_default,
    VideoPlayer: VideoPlayer_default
  },
  props: {
    videos: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: false
    },
    initialTime: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      ephemeral: {
        videosToShow: [],
        currentIndex: 0,
        hideCtas: {
          header: false,
          navButtons: false
        },
        hideCta: false
      },
      matchMedia: {
        handler: null,
        isDesktop: false
      }
    };
  },
  computed: {
    ...mapGetters([
      "globalProfile",
      "usernameFromID"
    ]),
    currentVideo() {
      return this.ephemeral.videosToShow[this.ephemeral.currentIndex];
    },
    displayName() {
      if (!this.currentVideo) {
        return "";
      }
      const contractID = this.currentVideo.ownerID;
      return this.globalProfile(contractID)?.displayName || this.usernameFromID(contractID);
    },
    showPrevButton() {
      const len = this.ephemeral.videosToShow.length;
      return len > 1 && this.ephemeral.currentIndex > 0;
    },
    showNextButton() {
      const len = this.ephemeral.videosToShow.length;
      return len > 1 && this.ephemeral.currentIndex < len - 1;
    }
  },
  methods: {
    displayFilesize(size) {
      return `(${formatBytesDecimal(size)})`;
    },
    close() {
      esm_default("okTurtles.events/emit", CLOSE_MODAL, "VideoViewerModal");
    },
    initMatchMedia() {
      this.matchMedia.handler = window.matchMedia("(min-width: 769px) and (hover: hover) and (pointer: fine)");
      this.matchMedia.handler.onchange = (e) => {
        this.matchMedia.isDesktop = e.matches;
      };
      this.matchMedia.isDesktop = this.matchMedia.handler.matches;
    },
    onMouseEnter() {
      this.ephemeral.hideCtas.header = false;
      this.ephemeral.hideCtas.navButtons = false;
    },
    onVideoPlay() {
      if (this.matchMedia.isDesktop) {
        this.ephemeral.hideCtas.header = true;
      }
      this.ephemeral.hideCtas.navButtons = true;
    },
    onVideoPause() {
      this.ephemeral.hideCtas.header = false;
      this.ephemeral.hideCtas.navButtons = false;
    },
    onVideoFullscreenChange() {
      const currentActiveElement = document.activeElement;
      if (currentActiveElement && currentActiveElement.matches('[data-plyr="fullscreen"]')) {
        currentActiveElement.blur();
      }
    },
    onMouseLeave() {
      if (this.matchMedia.isDesktop && this.$refs.videoPlayer.isPlaying()) {
        this.ephemeral.hideCtas.header = true;
        this.ephemeral.hideCtas.navButtons = true;
      }
    },
    selectNextVideo() {
      if (this.ephemeral.currentIndex < this.ephemeral.videosToShow.length - 1) {
        this.ephemeral.currentIndex += 1;
      }
    },
    selectPrevVideo() {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1;
      }
    },
    keyUpHandler(e) {
      if (e.code === "Space") {
        this.$refs.videoPlayer.togglePlay();
      }
    }
  },
  created() {
    if (!Array.isArray(this.videos)) {
      this.$nextTick(() => this.close());
    } else {
      this.ephemeral.currentIndex = this.initialIndex || 0;
      this.ephemeral.videosToShow = this.videos;
      this.initMatchMedia();
    }
  },
  mounted() {
    window.addEventListener("keyup", this.keyUpHandler);
  },
  beforeDestroy() {
    if (this.matchMedia.handler) {
      this.matchMedia.handler.onchange = null;
    }
    window.removeEventListener("keyup", this.keyUpHandler);
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-video-viewer-modal" }, [
    _c(
      "div",
      {
        staticClass: "c-video-viewer-content",
        class: { "nav-buttons-hidden": _vm.ephemeral.hideCtas.navButtons },
        on: { mouseenter: _vm.onMouseEnter, mouseleave: _vm.onMouseLeave }
      },
      [
        _c(
          "header",
          {
            staticClass: "c-modal-header",
            class: { "is-hidden": _vm.ephemeral.hideCtas.header }
          },
          [
            _vm.currentVideo ? [
              _vm.currentVideo.ownerID ? _c("avatar-user", {
                staticClass: "c-avatar",
                attrs: {
                  contractID: _vm.currentVideo.ownerID,
                  size: "sm"
                }
              }) : _vm._e(),
              _c("div", { staticClass: "media-data" }, [
                _c("div", { staticClass: "name has-ellipsis" }, [
                  _vm._v(_vm._s(_vm.displayName))
                ]),
                _c("div", { staticClass: "filename-and-size" }, [
                  _c("div", { staticClass: "filename has-ellipsis" }, [
                    _vm._v(_vm._s(_vm.currentVideo.name))
                  ]),
                  _c("div", { staticClass: "file-size" }, [
                    _vm._v(
                      _vm._s(_vm.displayFilesize(_vm.currentVideo.size))
                    )
                  ])
                ])
              ])
            ] : _vm._e(),
            _c(
              "button",
              {
                staticClass: "is-icon-small c-close-btn",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.close($event);
                  }
                }
              },
              [_c("i", { staticClass: "icon-times" })]
            )
          ],
          2
        ),
        _c("section", { staticClass: "c-video-viewer-body" }, [
          _c(
            "div",
            { staticClass: "c-video-viewer-body-inner" },
            [
              _vm.currentVideo ? _c("video-player", {
                key: _vm.currentVideo.videoUrl,
                ref: "videoPlayer",
                staticClass: "c-video-player for-video-modal",
                attrs: {
                  src: _vm.currentVideo.videoUrl,
                  mimeType: _vm.currentVideo.mimeType,
                  initialTime: _vm.ephemeral.currentIndex === _vm.initialIndex ? _vm.initialTime : void 0
                },
                on: {
                  play: _vm.onVideoPlay,
                  pause: _vm.onVideoPause,
                  enterfullscreen: _vm.onVideoFullscreenChange,
                  exitfullscreen: _vm.onVideoFullscreenChange
                }
              }) : _vm._e()
            ],
            1
          ),
          _vm.showPrevButton ? _c(
            "button",
            {
              staticClass: "is-icon c-video-nav-btn is-prev",
              attrs: {
                title: 'L("Previous video")',
                "aria-label": 'L("Previous video")',
                type: "button"
              },
              on: { click: _vm.selectPrevVideo }
            },
            [_c("i", { staticClass: "icon-chevron-left" })]
          ) : _vm._e(),
          _vm.showNextButton ? _c(
            "button",
            {
              staticClass: "is-icon c-video-nav-btn is-next",
              attrs: {
                title: 'L("Next video")',
                "aria-label": 'L("Next video")',
                type: "button"
              },
              on: { click: _vm.selectNextVideo }
            },
            [_c("i", { staticClass: "icon-chevron-right" })]
          ) : _vm._e()
        ])
      ]
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-68f31b29_0", { source: '.c-video-viewer-modal[data-v-68f31b29] {\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: rgba(10, 10, 10, 0.86);\n  --viewer-bg-color: #1e2021;\n  --viewer-text-color: #e8e8e8;\n  --viewer-cta-bg-color: #1e2021;\n  --viewer-cta-text-color: #e8e8e8;\n  --viewer-cta-border-color: #717879;\n  --viewer-cta-box-shadow-color: #383c3e;\n  display: flex;\n  flex-direction: column;\n}\n.is-dark-theme .c-video-viewer-modal[data-v-68f31b29] {\n  --viewer-bg-color: #717879;\n}\n.is-dark-theme .c-video-viewer-modal[data-v-68f31b29] {\n  --viewer-bg-color: var(--general_2);\n}\n@media screen and (min-width: 769px) {\n.c-video-viewer-modal[data-v-68f31b29] {\n    display: block;\n}\n}\n.c-video-viewer-content[data-v-68f31b29] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background-color: var(--viewer-bg-color);\n  overflow: hidden;\n  background-color: var(--viewer-bg-color);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px) {\n.c-video-viewer-content[data-v-68f31b29] {\n    display: block;\n    width: 92.5vw;\n    height: auto;\n    max-height: 90vh;\n    max-width: 68rem;\n    border-radius: 0.375rem;\n}\n}\n.c-modal-header[data-v-68f31b29] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: auto;\n  z-index: 3;\n  padding: 1rem;\n  padding-right: 3rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 0.75rem;\n  position: absolute;\n  transition: transform 350ms ease-in-out;\n  flex-shrink: 0;\n}\n.c-modal-header > *[data-v-68f31b29] {\n  z-index: 1;\n}\n.c-modal-header[data-v-68f31b29]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 135%;\n  background: linear-gradient(rgba(30, 32, 33, 0.7333333333), rgba(30, 32, 33, 0));\n  z-index: 0;\n}\n.c-modal-header .viewer-avatar[data-v-68f31b29] {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data[data-v-68f31b29] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  line-height: 1.125;\n  color: var(--viewer-text-color);\n  min-width: 0;\n}\n.c-modal-header .media-data .name[data-v-68f31b29] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.c-modal-header .media-data .filename-and-size[data-v-68f31b29] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  column-gap: 0.5rem;\n}\n.c-modal-header .media-data .file-size[data-v-68f31b29] {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data .filename[data-v-68f31b29],\n.c-modal-header .media-data .file-size[data-v-68f31b29] {\n  font-size: 0.75rem;\n}\n.c-modal-header .media-data .name[data-v-68f31b29],\n.c-modal-header .media-data .filename[data-v-68f31b29],\n.c-modal-header .media-data .file-size[data-v-68f31b29] {\n  user-select: none;\n  text-shadow: 1px 1px 2px #1e2021;\n}\n.c-modal-header[data-v-68f31b29]::after {\n  background: linear-gradient(rgba(0, 0, 0, 0.7490196078) 10%, rgba(0, 0, 0, 0));\n  height: 120%;\n}\n.c-modal-header .is-hidden[data-v-68f31b29] {\n  transform: translateY(-200%);\n}\nbutton.c-close-btn[data-v-68f31b29] {\n  position: absolute;\n  right: 0.75rem;\n  top: 1rem;\n  background-color: var(--general_1);\n  color: var(--text_0);\n}\n.c-video-viewer-body[data-v-68f31b29] {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  max-height: 100%;\n  min-height: 0;\n}\n.c-video-viewer-body-inner[data-v-68f31b29] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n}\n@media screen and (min-width: 769px) {\n.c-video-viewer-body-inner[data-v-68f31b29] {\n    display: block;\n    aspect-ratio: 16/9;\n    flex-grow: unset;\n}\n}\n.c-video-player[data-v-68f31b29] {\n  display: block;\n  width: 100%;\n  max-height: 100%;\n  aspect-ratio: 16/9;\n}\nbutton.c-video-nav-btn[data-v-68f31b29] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--viewer-cta-bg-color);\n  color: var(--viewer-cta-text-color);\n  border-color: var(--viewer-cta-border-color);\n  width: 2.5rem;\n  height: 2.5rem;\n  transition: opacity 350ms ease-in-out, box-shadow 150ms ease-in-out;\n}\nbutton.c-video-nav-btn[data-v-68f31b29]:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\n.nav-buttons-hidden button.c-video-nav-btn[data-v-68f31b29] {\n  opacity: 0;\n  pointer-events: none;\n}\nbutton.c-video-nav-btn.is-prev[data-v-68f31b29] {\n  left: 1.5rem;\n}\nbutton.c-video-nav-btn.is-next[data-v-68f31b29] {\n  right: 1.5rem;\n}\nbutton.c-video-nav-btn[data-v-68f31b29]:hover, button.c-video-nav-btn[data-v-68f31b29]:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\n@media screen and (max-width: 768px) {\nbutton.c-video-nav-btn[data-v-68f31b29] {\n    width: 2rem;\n    height: 2rem;\n    font-size: 0.75rem;\n}\nbutton.c-video-nav-btn.is-prev[data-v-68f31b29] {\n    left: 0.75rem;\n}\nbutton.c-video-nav-btn.is-next[data-v-68f31b29] {\n    right: 0.75rem;\n}\n}\n\n/*# sourceMappingURL=VideoViewerModal.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/chatroom/video-viewer/VideoViewerModal.vue", "VideoViewerModal.vue"], "names": [], "mappings": "AA8NA;EC7NE,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,cAAc;EACd,wCAAwC;EACxC,0BAA0B;EAC1B,4BAA4B;EAC5B,8BAA8B;EAC9B,gCAAgC;EAChC,kCAAkC;EAClC,sCAAsC;EDkNxC,aAAA;EACA,sBAAA;AChNA;AACA;EACE,0BAA0B;AAC5B;AD+MA;EACA,mCAAA;AC7MA;AACA;ADsMA;IAUA,cAAA;AC7ME;AACF;ADgNA;EC7ME,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,wCAAwC;EACxC,gBAAgB;EDwMlB,wCAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,uBAAA;EACA,YAAA;ACtMA;AACA;AD8LA;IAUA,cAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;IACA,uBAAA;ACrME;AACF;ADwMA;ECrME,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,OAAO;EACP,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;ED4LrB,kBAAA;EACA,uCAAA;EACA,cAAA;AC1LA;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,gFAAgF;EAChF,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;AACA;;;EAGE,iBAAiB;EACjB,gCAAgC;AAClC;AD6IA;EACA,8EAAA;EACA,YAAA;AC3IA;AD8IA;EACA,4BAAA;AC5IA;ADgJA;EACA,kBAAA;EACA,cAAA;EACA,SAAA;EACA,kCAAA;EACA,oBAAA;AC7IA;ADgJA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;AC7IA;ADgJA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,uBAAA;AC7IA;AACA;ADqIA;IAUA,cAAA;IACA,kBAAA;IACA,gBAAA;AC5IE;AACF;AD+IA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;AC5IA;AD+IA;EC5IE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,2BAA2B;EAC3B,4CAA4C;EAC5C,mCAAmC;EACnC,4CAA4C;EAC5C,aAAa;EACb,cAAc;EDsIhB,mEACA;ACrIA;AACA;EACE,wDAAwD;AAC1D;ADqIA;EACA,UAAA;EACA,oBAAA;ACnIA;ADsIA;EACA,YAAA;ACpIA;ADuIA;EACA,aAAA;ACrIA;ADwIA;EAEA,wDAAA;ACvIA;AACA;ADiHA;IAyBA,WAAA;IACA,YAAA;IACA,kBAAA;ACvIE;ADyIF;IACA,aAAA;ACvIE;AD0IF;IACA,cAAA;ACxIE;AACF;;AAEA,+CAA+C", "file": "VideoViewerModal.vue", "sourcesContent": [`<template lang="pug">
.c-video-viewer-modal
  .c-video-viewer-content(
    :class='{ "nav-buttons-hidden": ephemeral.hideCtas.navButtons }'
    @mouseenter='onMouseEnter'
    @mouseleave='onMouseLeave'
  )
    header.c-modal-header(:class='{ "is-hidden": ephemeral.hideCtas.header }')
      template(v-if='currentVideo')
        avatar-user.c-avatar(
          v-if='currentVideo.ownerID'
          :contractID='currentVideo.ownerID'
          size='sm'
        )

        .media-data
          .name.has-ellipsis {{ displayName }}
          .filename-and-size
            .filename.has-ellipsis {{ currentVideo.name }}
            .file-size {{ displayFilesize(currentVideo.size) }}

      button.is-icon-small.c-close-btn(
        type='button'
        @click.stop='close'
      )
        i.icon-times

    section.c-video-viewer-body
      .c-video-viewer-body-inner
        video-player.c-video-player.for-video-modal(
          v-if='currentVideo'
          ref='videoPlayer'
          :key='currentVideo.videoUrl'
          :src='currentVideo.videoUrl'
          :mimeType='currentVideo.mimeType'
          :initialTime='ephemeral.currentIndex === initialIndex ? initialTime : undefined'
          @play='onVideoPlay'
          @pause='onVideoPause'
          @enterfullscreen='onVideoFullscreenChange'
          @exitfullscreen='onVideoFullscreenChange'
        )

      button.is-icon.c-video-nav-btn.is-prev(
        v-if='showPrevButton'
        @click='selectPrevVideo'
        title='L("Previous video")'
        aria-label='L("Previous video")'
        type='button'
      )
        i.icon-chevron-left

      button.is-icon.c-video-nav-btn.is-next(
        v-if='showNextButton'
        @click='selectNextVideo'
        title='L("Next video")'
        aria-label='L("Next video")'
        type='button'
      )
        i.icon-chevron-right
</template>

<script>
import { mapGetters } from 'vuex'
import sbp from '@sbp/sbp'
import { CLOSE_MODAL } from '../../../../../frontend/utils/events.js'
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import VideoPlayer from '../../../../../frontend/views/containers/chatroom/video-viewer/VideoPlayer.vue'
import trapFocus from '../../../../../frontend/utils/trapFocus.js'
import { formatBytesDecimal } from '../../../../../frontend/views/utils/filters.js'

export default {
  name: 'VideoViewerModal',
  mixins: [trapFocus],
  components: {
    AvatarUser,
    VideoPlayer
  },
  props: {
    videos: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: false
    },
    initialTime: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      ephemeral: {
        videosToShow: [],
        currentIndex: 0,
        hideCtas: {
          header: false,
          navButtons: false
        },
        hideCta: false
      },
      matchMedia: {
        handler: null,
        isDesktop: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    currentVideo () {
      return this.ephemeral.videosToShow[this.ephemeral.currentIndex]
    },
    displayName () {
      if (!this.currentVideo) {
        return ''
      }

      const contractID = this.currentVideo.ownerID
      return this.globalProfile(contractID)?.displayName ||
        this.usernameFromID(contractID)
    },
    showPrevButton () {
      const len = this.ephemeral.videosToShow.length
      return len > 1 && this.ephemeral.currentIndex > 0
    },
    showNextButton () {
      const len = this.ephemeral.videosToShow.length
      return len > 1 && this.ephemeral.currentIndex < len - 1
    }
  },
  methods: {
    displayFilesize (size) {
      return \`(\${formatBytesDecimal(size)})\`
    },
    close () {
      sbp('okTurtles.events/emit', CLOSE_MODAL, 'VideoViewerModal')
    },
    initMatchMedia () {
      this.matchMedia.handler = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)')
      this.matchMedia.handler.onchange = (e) => {
        this.matchMedia.isDesktop = e.matches
      }
      this.matchMedia.isDesktop = this.matchMedia.handler.matches
    },
    onMouseEnter () {
      this.ephemeral.hideCtas.header = false
      this.ephemeral.hideCtas.navButtons = false
    },
    onVideoPlay () {
      if (this.matchMedia.isDesktop) {
        this.ephemeral.hideCtas.header = true
      }
      this.ephemeral.hideCtas.navButtons = true
    },
    onVideoPause () {
      this.ephemeral.hideCtas.header = false
      this.ephemeral.hideCtas.navButtons = false
    },
    onVideoFullscreenChange () {
      const currentActiveElement = document.activeElement
      if (currentActiveElement && currentActiveElement.matches('[data-plyr="fullscreen"]')) {
        currentActiveElement.blur()
      }
    },
    onMouseLeave () {
      if (this.matchMedia.isDesktop && this.$refs.videoPlayer.isPlaying()) {
        this.ephemeral.hideCtas.header = true
        this.ephemeral.hideCtas.navButtons = true
      }
    },
    selectNextVideo () {
      if (this.ephemeral.currentIndex < this.ephemeral.videosToShow.length - 1) {
        this.ephemeral.currentIndex += 1
      }
    },
    selectPrevVideo () {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1
      }
    },
    keyUpHandler (e) {
      if (e.code === 'Space') {
        this.$refs.videoPlayer.togglePlay()
      }
    }
  },
  created () {
    if (!Array.isArray(this.videos)) {
      this.$nextTick(() => this.close())
    } else {
      this.ephemeral.currentIndex = this.initialIndex || 0
      this.ephemeral.videosToShow = this.videos

      this.initMatchMedia()
    }
  },
  mounted () {
    window.addEventListener('keyup', this.keyUpHandler)
  },
  beforeDestroy () {
    if (this.matchMedia.handler) {
      this.matchMedia.handler.onchange = null
    }
    window.removeEventListener('keyup', this.keyUpHandler)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";
@import "../../../../../frontend/assets/style/components/_media-viewer_utils.scss";

.c-video-viewer-modal {
  @include media-viewer-modal-container($zindex:$zindex-modal);
  display: flex;
  flex-direction: column;

  .is-dark-theme & {
    --viewer-bg-color: var(--general_2);
  }

  @include from($tablet) {
    display: block;
  }
}

.c-video-viewer-content {
  @include media-viewer-modal-content;
  background-color: var(--viewer-bg-color);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-grow: 1;

  @include from($tablet) {
    display: block;
    width: 92.5vw;
    height: auto;
    max-height: 90vh;
    max-width: 68rem;
    border-radius: 0.375rem;
  }
}

.c-modal-header {
  @include media-viewer-modal-header;
  position: absolute;
  transition: transform 350ms ease-in-out;
  flex-shrink: 0;

  &::after {
    background: linear-gradient(rgba(0, 0, 0, 0.7490196078) 10%, rgba(0, 0, 0, 0));
    height: 120%;
  }

  .is-hidden {
    transform: translateY(-200%);
  }
}

button.c-close-btn {
  position: absolute;
  right: 0.75rem;
  top: 1rem;
  background-color: $general_1;
  color: $text_0;
}

.c-video-viewer-body {
  position: relative;
  width: 100%;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

.c-video-viewer-body-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  @include from($tablet) {
    display: block;
    aspect-ratio: 16/9;
    flex-grow: unset;
  }
}

.c-video-player {
  display: block;
  width: 100%;
  max-height: 100%;
  aspect-ratio: 16/9;
}

button.c-video-nav-btn {
  @include media-viewer-navigation-btn;
  transition:
    opacity 350ms ease-in-out,
    box-shadow 150ms ease-in-out;

  .nav-buttons-hidden & {
    opacity: 0;
    pointer-events: none;
  }

  &.is-prev {
    left: 1.5rem;
  }

  &.is-next {
    right: 1.5rem;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);
  }

  @include phone {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;

    &.is-prev {
      left: 0.75rem;
    }

    &.is-next {
      right: 0.75rem;
    }
  }
}
</style>
`, '.c-video-viewer-modal {\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: rgba(10, 10, 10, 0.86);\n  --viewer-bg-color: #1e2021;\n  --viewer-text-color: #e8e8e8;\n  --viewer-cta-bg-color: #1e2021;\n  --viewer-cta-text-color: #e8e8e8;\n  --viewer-cta-border-color: #717879;\n  --viewer-cta-box-shadow-color: #383c3e;\n  display: flex;\n  flex-direction: column;\n}\n.is-dark-theme .c-video-viewer-modal {\n  --viewer-bg-color: #717879;\n}\n.is-dark-theme .c-video-viewer-modal {\n  --viewer-bg-color: var(--general_2);\n}\n@media screen and (min-width: 769px) {\n  .c-video-viewer-modal {\n    display: block;\n  }\n}\n\n.c-video-viewer-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background-color: var(--viewer-bg-color);\n  overflow: hidden;\n  background-color: var(--viewer-bg-color);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px) {\n  .c-video-viewer-content {\n    display: block;\n    width: 92.5vw;\n    height: auto;\n    max-height: 90vh;\n    max-width: 68rem;\n    border-radius: 0.375rem;\n  }\n}\n\n.c-modal-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: auto;\n  z-index: 3;\n  padding: 1rem;\n  padding-right: 3rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 0.75rem;\n  position: absolute;\n  transition: transform 350ms ease-in-out;\n  flex-shrink: 0;\n}\n.c-modal-header > * {\n  z-index: 1;\n}\n.c-modal-header::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 135%;\n  background: linear-gradient(rgba(30, 32, 33, 0.7333333333), rgba(30, 32, 33, 0));\n  z-index: 0;\n}\n.c-modal-header .viewer-avatar {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  line-height: 1.125;\n  color: var(--viewer-text-color);\n  min-width: 0;\n}\n.c-modal-header .media-data .name {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.c-modal-header .media-data .filename-and-size {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  column-gap: 0.5rem;\n}\n.c-modal-header .media-data .file-size {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data .filename,\n.c-modal-header .media-data .file-size {\n  font-size: 0.75rem;\n}\n.c-modal-header .media-data .name,\n.c-modal-header .media-data .filename,\n.c-modal-header .media-data .file-size {\n  user-select: none;\n  text-shadow: 1px 1px 2px #1e2021;\n}\n.c-modal-header::after {\n  background: linear-gradient(rgba(0, 0, 0, 0.7490196078) 10%, rgba(0, 0, 0, 0));\n  height: 120%;\n}\n.c-modal-header .is-hidden {\n  transform: translateY(-200%);\n}\n\nbutton.c-close-btn {\n  position: absolute;\n  right: 0.75rem;\n  top: 1rem;\n  background-color: var(--general_1);\n  color: var(--text_0);\n}\n\n.c-video-viewer-body {\n  position: relative;\n  width: 100%;\n  flex-grow: 1;\n  max-height: 100%;\n  min-height: 0;\n}\n\n.c-video-viewer-body-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n}\n@media screen and (min-width: 769px) {\n  .c-video-viewer-body-inner {\n    display: block;\n    aspect-ratio: 16/9;\n    flex-grow: unset;\n  }\n}\n\n.c-video-player {\n  display: block;\n  width: 100%;\n  max-height: 100%;\n  aspect-ratio: 16/9;\n}\n\nbutton.c-video-nav-btn {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--viewer-cta-bg-color);\n  color: var(--viewer-cta-text-color);\n  border-color: var(--viewer-cta-border-color);\n  width: 2.5rem;\n  height: 2.5rem;\n  transition: opacity 350ms ease-in-out, box-shadow 150ms ease-in-out;\n}\nbutton.c-video-nav-btn:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\n.nav-buttons-hidden button.c-video-nav-btn {\n  opacity: 0;\n  pointer-events: none;\n}\nbutton.c-video-nav-btn.is-prev {\n  left: 1.5rem;\n}\nbutton.c-video-nav-btn.is-next {\n  right: 1.5rem;\n}\nbutton.c-video-nav-btn:hover, button.c-video-nav-btn:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\n@media screen and (max-width: 768px) {\n  button.c-video-nav-btn {\n    width: 2rem;\n    height: 2rem;\n    font-size: 0.75rem;\n  }\n  button.c-video-nav-btn.is-prev {\n    left: 0.75rem;\n  }\n  button.c-video-nav-btn.is-next {\n    right: 0.75rem;\n  }\n}\n\n/*# sourceMappingURL=VideoViewerModal.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-68f31b29";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-video-viewer-modal
  .c-video-viewer-content(
    :class='{ "nav-buttons-hidden": ephemeral.hideCtas.navButtons }'
    @mouseenter='onMouseEnter'
    @mouseleave='onMouseLeave'
  )
    header.c-modal-header(:class='{ "is-hidden": ephemeral.hideCtas.header }')
      template(v-if='currentVideo')
        avatar-user.c-avatar(
          v-if='currentVideo.ownerID'
          :contractID='currentVideo.ownerID'
          size='sm'
        )

        .media-data
          .name.has-ellipsis {{ displayName }}
          .filename-and-size
            .filename.has-ellipsis {{ currentVideo.name }}
            .file-size {{ displayFilesize(currentVideo.size) }}

      button.is-icon-small.c-close-btn(
        type='button'
        @click.stop='close'
      )
        i.icon-times

    section.c-video-viewer-body
      .c-video-viewer-body-inner
        video-player.c-video-player.for-video-modal(
          v-if='currentVideo'
          ref='videoPlayer'
          :key='currentVideo.videoUrl'
          :src='currentVideo.videoUrl'
          :mimeType='currentVideo.mimeType'
          :initialTime='ephemeral.currentIndex === initialIndex ? initialTime : undefined'
          @play='onVideoPlay'
          @pause='onVideoPause'
          @enterfullscreen='onVideoFullscreenChange'
          @exitfullscreen='onVideoFullscreenChange'
        )

      button.is-icon.c-video-nav-btn.is-prev(
        v-if='showPrevButton'
        @click='selectPrevVideo'
        title='L("Previous video")'
        aria-label='L("Previous video")'
        type='button'
      )
        i.icon-chevron-left

      button.is-icon.c-video-nav-btn.is-next(
        v-if='showNextButton'
        @click='selectNextVideo'
        title='L("Next video")'
        aria-label='L("Next video")'
        type='button'
      )
        i.icon-chevron-right
</template>

<script>
import { mapGetters } from 'vuex'
import sbp from '@sbp/sbp'
import { CLOSE_MODAL } from '../../../../../frontend/utils/events.js'
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import VideoPlayer from '../../../../../frontend/views/containers/chatroom/video-viewer/VideoPlayer.vue'
import trapFocus from '../../../../../frontend/utils/trapFocus.js'
import { formatBytesDecimal } from '../../../../../frontend/views/utils/filters.js'

export default {
  name: 'VideoViewerModal',
  mixins: [trapFocus],
  components: {
    AvatarUser,
    VideoPlayer
  },
  props: {
    videos: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: false
    },
    initialTime: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      ephemeral: {
        videosToShow: [],
        currentIndex: 0,
        hideCtas: {
          header: false,
          navButtons: false
        },
        hideCta: false
      },
      matchMedia: {
        handler: null,
        isDesktop: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    currentVideo () {
      return this.ephemeral.videosToShow[this.ephemeral.currentIndex]
    },
    displayName () {
      if (!this.currentVideo) {
        return ''
      }

      const contractID = this.currentVideo.ownerID
      return this.globalProfile(contractID)?.displayName ||
        this.usernameFromID(contractID)
    },
    showPrevButton () {
      const len = this.ephemeral.videosToShow.length
      return len > 1 && this.ephemeral.currentIndex > 0
    },
    showNextButton () {
      const len = this.ephemeral.videosToShow.length
      return len > 1 && this.ephemeral.currentIndex < len - 1
    }
  },
  methods: {
    displayFilesize (size) {
      return \`(\${formatBytesDecimal(size)})\`
    },
    close () {
      sbp('okTurtles.events/emit', CLOSE_MODAL, 'VideoViewerModal')
    },
    initMatchMedia () {
      this.matchMedia.handler = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)')
      this.matchMedia.handler.onchange = (e) => {
        this.matchMedia.isDesktop = e.matches
      }
      this.matchMedia.isDesktop = this.matchMedia.handler.matches
    },
    onMouseEnter () {
      this.ephemeral.hideCtas.header = false
      this.ephemeral.hideCtas.navButtons = false
    },
    onVideoPlay () {
      if (this.matchMedia.isDesktop) {
        this.ephemeral.hideCtas.header = true
      }
      this.ephemeral.hideCtas.navButtons = true
    },
    onVideoPause () {
      this.ephemeral.hideCtas.header = false
      this.ephemeral.hideCtas.navButtons = false
    },
    onVideoFullscreenChange () {
      const currentActiveElement = document.activeElement
      if (currentActiveElement && currentActiveElement.matches('[data-plyr="fullscreen"]')) {
        currentActiveElement.blur()
      }
    },
    onMouseLeave () {
      if (this.matchMedia.isDesktop && this.$refs.videoPlayer.isPlaying()) {
        this.ephemeral.hideCtas.header = true
        this.ephemeral.hideCtas.navButtons = true
      }
    },
    selectNextVideo () {
      if (this.ephemeral.currentIndex < this.ephemeral.videosToShow.length - 1) {
        this.ephemeral.currentIndex += 1
      }
    },
    selectPrevVideo () {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1
      }
    },
    keyUpHandler (e) {
      if (e.code === 'Space') {
        this.$refs.videoPlayer.togglePlay()
      }
    }
  },
  created () {
    if (!Array.isArray(this.videos)) {
      this.$nextTick(() => this.close())
    } else {
      this.ephemeral.currentIndex = this.initialIndex || 0
      this.ephemeral.videosToShow = this.videos

      this.initMatchMedia()
    }
  },
  mounted () {
    window.addEventListener('keyup', this.keyUpHandler)
  },
  beforeDestroy () {
    if (this.matchMedia.handler) {
      this.matchMedia.handler.onchange = null
    }
    window.removeEventListener('keyup', this.keyUpHandler)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";
@import "../../../../../frontend/assets/style/components/_media-viewer_utils.scss";

.c-video-viewer-modal {
  @include media-viewer-modal-container($zindex:$zindex-modal);
  display: flex;
  flex-direction: column;

  .is-dark-theme & {
    --viewer-bg-color: var(--general_2);
  }

  @include from($tablet) {
    display: block;
  }
}

.c-video-viewer-content {
  @include media-viewer-modal-content;
  background-color: var(--viewer-bg-color);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-grow: 1;

  @include from($tablet) {
    display: block;
    width: 92.5vw;
    height: auto;
    max-height: 90vh;
    max-width: 68rem;
    border-radius: 0.375rem;
  }
}

.c-modal-header {
  @include media-viewer-modal-header;
  position: absolute;
  transition: transform 350ms ease-in-out;
  flex-shrink: 0;

  &::after {
    background: linear-gradient(rgba(0, 0, 0, 0.7490196078) 10%, rgba(0, 0, 0, 0));
    height: 120%;
  }

  .is-hidden {
    transform: translateY(-200%);
  }
}

button.c-close-btn {
  position: absolute;
  right: 0.75rem;
  top: 1rem;
  background-color: $general_1;
  color: $text_0;
}

.c-video-viewer-body {
  position: relative;
  width: 100%;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

.c-video-viewer-body-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  @include from($tablet) {
    display: block;
    aspect-ratio: 16/9;
    flex-grow: unset;
  }
}

.c-video-player {
  display: block;
  width: 100%;
  max-height: 100%;
  aspect-ratio: 16/9;
}

button.c-video-nav-btn {
  @include media-viewer-navigation-btn;
  transition:
    opacity 350ms ease-in-out,
    box-shadow 150ms ease-in-out;

  .nav-buttons-hidden & {
    opacity: 0;
    pointer-events: none;
  }

  &.is-prev {
    left: 1.5rem;
  }

  &.is-next {
    right: 1.5rem;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);
  }

  @include phone {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;

    &.is-prev {
      left: 0.75rem;
    }

    &.is-next {
      right: 0.75rem;
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
var VideoViewerModal_default = __vue_component__;
export {
  VideoViewerModal_default as default
};
//# sourceMappingURL=VideoViewerModal-QH44XZWP-cached.js.map
