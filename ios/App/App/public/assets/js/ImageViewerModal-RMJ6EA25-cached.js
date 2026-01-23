import {
  pointerEventsMixins_default
} from "./chunk-GPFZY2FS-cached.js";
import {
  SliderContinuous_default
} from "./chunk-WUIM2XSU-cached.js";
import {
  formatBytesDecimal
} from "./chunk-PSB6JKOA-cached.js";
import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  debounce,
  linearScale
} from "./chunk-MTWMQLQH-cached.js";
import "./chunk-UYGYRQRQ-cached.js";
import {
  trapFocus_default
} from "./chunk-UHGLFGQW-cached.js";
import {
  CLOSE_MODAL,
  DELETE_ATTACHMENT,
  DELETE_ATTACHMENT_FEEDBACK
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/chatroom/image-viewer/PreviewImageArea.vue
var linearScaler = {
  deltaToZoom: linearScale([0, 5], [0, 12]),
  // maps deltaY value of 'scroll' event to zoom value
  pinchToZoom: linearScale([0, 20], [0, 15])
  // maps pinch gesture factor value to zoom value
};
var getSign = (v) => v < 0 ? -1 : 1;
var __vue_script__ = {
  name: "PreviewImageArea",
  mixins: [pointerEventsMixins_default({ pointerMoveOnWindow: true })],
  components: {
    SliderContinuous: SliderContinuous_default
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: String,
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ephemeral: {
        isLoaded: false,
        imgInitDone: false,
        previewImgAttrs: {
          width: void 0,
          height: void 0,
          topX: void 0,
          topY: void 0
        },
        imgTranslation: { x: 0, y: 0 },
        currentZoom: 100,
        previousZoom: null,
        pointedZoomAction: {
          percentX: null,
          percentY: null,
          zoomCenter: null
        },
        mousedownCapture: null,
        showSliderOutput: false
      },
      config: {
        imgData: {
          naturalWidth: null,
          naturalHeight: null,
          aspectRatio: 1
          // intrinsic ratio value of width / height
        },
        zoomMin: 0,
        zoomMax: 400,
        // for now.
        sliderUnit: "%",
        resizeHandlerDebounced: debounce(this.resizeHandler, 100)
      }
    };
  },
  computed: {
    previewImgStyles() {
      const attrs = this.config.imgData;
      const tx = this.ephemeral.imgTranslation.x || 0;
      const ty = this.ephemeral.imgTranslation.y || 0;
      const scaleVal = this.ephemeral.currentZoom / 100;
      return {
        height: attrs.naturalHeight ? `${attrs.naturalHeight}px` : void 0,
        transform: `translate3d(${tx}px, ${ty}px, 0px) scale(${scaleVal}, ${scaleVal})`
      };
    },
    isImageMovable() {
      return this.config.zoomMin < this.ephemeral.currentZoom;
    },
    movableDistances() {
      if (!this.isImageMovable) {
        return { x: 0, y: 0 };
      } else {
        const percentDiff = (this.ephemeral.currentZoom - this.config.zoomMin) / 100;
        return {
          x: this.config.imgData.naturalWidth * percentDiff / 2,
          y: this.config.imgData.naturalHeight * percentDiff / 2
        };
      }
    }
  },
  methods: {
    onImgLoad() {
      const imgEl = this.$refs.previewImg;
      const naturalWidth = imgEl.naturalWidth;
      const naturalHeight = imgEl.naturalHeight;
      const aspectRatio = naturalWidth / naturalHeight;
      this.ephemeral.isLoaded = true;
      this.config.imgData.naturalWidth = naturalWidth;
      this.config.imgData.naturalHeight = naturalHeight;
      this.config.imgData.aspectRatio = aspectRatio;
      this.config.imgData.isWiderThanTall = aspectRatio >= 1;
      this.initViewerSettings();
      this.calcPreviewImageDimension();
      this.$nextTick(() => {
        this.ephemeral.imgInitDone = true;
      });
    },
    initViewerSettings() {
      const { naturalWidth, naturalHeight, aspectRatio } = this.config.imgData;
      let {
        width: viewAreaWidth,
        height: viewAreaHeight
      } = this.$el.getBoundingClientRect();
      viewAreaHeight *= 0.8;
      let zoomMin = 100;
      let minWidth = naturalWidth;
      let minHeight = naturalHeight;
      if (viewAreaWidth < naturalWidth) {
        const wFraction = viewAreaWidth / naturalWidth;
        minWidth = wFraction * naturalWidth;
        minHeight = minWidth / aspectRatio;
      }
      if (viewAreaHeight < minHeight) {
        minHeight = viewAreaHeight;
        minWidth = minHeight * aspectRatio;
      }
      zoomMin = Math.ceil(minWidth / naturalWidth * 100);
      this.config.zoomMin = zoomMin;
      this.ephemeral.currentZoom = zoomMin;
      this.ephemeral.imgTranslation = { x: 0, y: 0 };
    },
    calcPreviewImageDimension() {
      const { naturalWidth, aspectRatio } = this.config.imgData;
      const fraction = this.ephemeral.currentZoom / 100;
      const center = this.getViewAreaCenter();
      const { x: transX, y: transY } = this.ephemeral.imgTranslation;
      const widthCalc = fraction * naturalWidth;
      const heightCalc = widthCalc / aspectRatio;
      this.ephemeral.previewImgAttrs.width = widthCalc;
      this.ephemeral.previewImgAttrs.height = heightCalc;
      this.ephemeral.previewImgAttrs.topX = center.x - widthCalc / 2 + transX;
      this.ephemeral.previewImgAttrs.topY = center.y - heightCalc / 2 + transY;
    },
    getViewAreaCenter() {
      const {
        width: viewAreaWidth,
        height: viewAreaHeight,
        top: viewAreaTop,
        left: viewAreaLeft
      } = this.$el.getBoundingClientRect();
      return {
        x: viewAreaLeft + viewAreaWidth / 2,
        y: viewAreaTop + viewAreaHeight / 2
      };
    },
    isPointInsidePreviewImage({ x, y }) {
      const center = this.getViewAreaCenter();
      const { width, height } = this.ephemeral.previewImgAttrs;
      const { x: transX, y: transY } = this.ephemeral.imgTranslation;
      const half = { w: width / 2, h: height / 2 };
      const boundary = {
        top: transY + center.y - half.h,
        left: transX + center.x - half.w,
        bottom: transY + center.y + half.h,
        right: transX + center.x + half.w
      };
      return x > boundary.left && x < boundary.right && y > boundary.top && y < boundary.bottom;
    },
    onSliderUpdate(e) {
      const center = this.getViewAreaCenter();
      this.handleZoomUpdate(Number(e.target.value), center);
      this.calcPreviewImageDimension();
      this.clearPointedZoomActionState();
    },
    handleZoomUpdate(val, zoomPoint = null) {
      const twoPointsAreSame = (p1, p2) => {
        return p1 && p2 && p1?.x === p2.x && p1?.y === p2?.y;
      };
      this.ephemeral.previousZoom = this.ephemeral.currentZoom;
      this.ephemeral.currentZoom = val;
      if (zoomPoint) {
        let centerUpdated = false;
        if (!twoPointsAreSame(zoomPoint, this.ephemeral.pointedZoomAction.zoomCenter)) {
          this.ephemeral.pointedZoomAction.zoomCenter = zoomPoint;
          centerUpdated = true;
        }
        const { width: prevWidth, height: prevHeight, topX: prevTopX, topY: prevTopY } = this.ephemeral.previewImgAttrs;
        const center = this.ephemeral.pointedZoomAction.zoomCenter;
        let percentX = this.ephemeral.pointedZoomAction.percentX;
        let percentY = this.ephemeral.pointedZoomAction.percentY;
        if (percentX === null || centerUpdated) {
          percentX = (center.x - prevTopX) / prevWidth;
          percentX = parseFloat(percentX.toFixed(2));
          this.ephemeral.pointedZoomAction.percentX = percentX;
        }
        if (percentY === null || centerUpdated) {
          percentY = (center.y - prevTopY) / prevHeight;
          percentY = parseFloat(percentY.toFixed(2));
          this.ephemeral.pointedZoomAction.percentY = percentY;
        }
        this.calcPreviewImageDimension();
        const { width: afterWidth, height: afterHeight, topX: afterTopX, topY: afterTopY } = this.ephemeral.previewImgAttrs;
        const toX = Math.ceil(afterTopX + afterWidth * percentX);
        const toY = Math.ceil(afterTopY + afterHeight * percentY);
        this.translate({ x: (toX - center.x) * -1, y: (toY - center.y) * -1 });
      } else {
        this.calcPreviewImageDimension();
        const { naturalWidth, naturalHeight } = this.config.imgData;
        const zoomDiff = (this.ephemeral.currentZoom - this.ephemeral.previousZoom) / 100;
        let moveX = 0;
        let moveY = 0;
        if (this.ephemeral.imgTranslation.x !== 0) {
          const wUpdate = zoomDiff * naturalWidth;
          moveX = wUpdate * -0.5;
        }
        if (this.ephemeral.imgTranslation.y !== 0) {
          const hUpdate = zoomDiff * naturalHeight;
          moveY = hUpdate * -0.5;
        }
        this.translate({ x: moveX, y: moveY });
      }
      if (!this.ephemeral.showSliderOutput) {
        this.ephemeral.showSliderOutput = true;
      }
      clearTimeout(this.sliderOutputTimeoutId);
      this.sliderOutputTimeoutId = setTimeout(() => {
        this.ephemeral.showSliderOutput = false;
      }, 1500);
    },
    translate({ x = 0, y = 0 }, override = false) {
      if (!this.isImageMovable) {
        this.ephemeral.imgTranslation = { x: 0, y: 0 };
      } else if (override) {
        this.ephemeral.imgTranslation = { x, y };
      } else {
        const { x: movableX, y: movableY } = this.movableDistances;
        let newX = this.ephemeral.imgTranslation.x + x;
        let newY = this.ephemeral.imgTranslation.y + y;
        const signX = getSign(newX);
        const signY = getSign(newY);
        if (Math.abs(newX) > movableX) {
          newX = signX * movableX;
        }
        if (Math.abs(newY) > movableY) {
          newY = signY * movableY;
        }
        this.ephemeral.imgTranslation.x = newX;
        this.ephemeral.imgTranslation.y = newY;
        this.calcPreviewImageDimension();
      }
    },
    resizeHandler() {
      this.initViewerSettings();
      this.calcPreviewImageDimension();
      this.clearPointedZoomActionState();
    },
    clipZoomValue(newVal) {
      return newVal > this.config.zoomMax ? this.config.zoomMax : newVal < this.config.zoomMin ? this.config.zoomMin : newVal;
    },
    pinchInHandler({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) {
        return;
      }
      const currZoom = this.ephemeral.currentZoom;
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      );
      const newVal = Math.ceil(currZoom - updateVal);
      this.handleZoomUpdate(this.clipZoomValue(newVal), center);
    },
    pinchOutHandler({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) {
        return;
      }
      const currZoom = this.ephemeral.currentZoom;
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      );
      const newVal = Math.ceil(currZoom + updateVal);
      this.handleZoomUpdate(this.clipZoomValue(newVal), center);
    },
    wheelEventHandler(e) {
      const point = { x: e.clientX, y: e.clientY };
      if (!e.ctrlKey || !this.isPointInsidePreviewImage(point)) {
        return;
      }
      const currZoom = this.ephemeral.currentZoom;
      const updateVal = Math.ceil(
        linearScaler.deltaToZoom(Math.abs(e.deltaY))
      );
      let newVal;
      if (e.deltaY < 0) {
        newVal = currZoom + updateVal;
      } else {
        newVal = currZoom - updateVal;
      }
      if (newVal !== void 0) {
        this.handleZoomUpdate(this.clipZoomValue(newVal), point);
      }
    },
    clearPointedZoomActionState() {
      this.ephemeral.pointedZoomAction.percentX = null;
      this.ephemeral.pointedZoomAction.percentY = null;
      this.ephemeral.pointedZoomAction.zoomCenter = null;
    },
    postPointerCancel() {
      this.clearPointedZoomActionState();
    },
    mouseDownHandler(e) {
      const point = { x: e.clientX, y: e.clientY };
      this.ephemeral.mousedownCapture = this.matchMedia.isTouch || !this.isPointInsidePreviewImage(point) ? null : point;
    },
    mouseUpHandler(e) {
      if (this.matchMedia.isTouch || !this.ephemeral.mousedownCapture) {
        return;
      }
      const point = { x: e.clientX, y: e.clientY };
      const mdownPoint = this.ephemeral.mousedownCapture;
      const distance = (() => {
        const dx = Math.abs(point.x - mdownPoint.x);
        const dy = Math.abs(point.y - mdownPoint.y);
        return Math.sqrt(dx * dx + dy * dy);
      })();
      if (distance < 1.5) {
        const shouldZoomOut = this.isImageMovable;
        const center = this.getViewAreaCenter();
        if (shouldZoomOut) {
          this.handleZoomUpdate(this.config.zoomMin, center);
        } else {
          const zoomInVal = this.config.zoomMin < 70 ? 100 : this.config.zoomMin < 100 ? 150 : 200;
          this.handleZoomUpdate(zoomInVal, mdownPoint);
        }
        this.calcPreviewImageDimension();
        this.clearPointedZoomActionState();
        this.ephemeral.mousedownCapture = null;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.config.resizeHandlerDebounced);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.config.resizeHandlerDebounced);
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-image-view-area",
      on: {
        wheel: function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.wheelEventHandler($event);
        },
        mousedown: _vm.mouseDownHandler,
        mouseup: _vm.mouseUpHandler
      }
    },
    [
      _c("img", {
        ref: "previewImg",
        staticClass: "c-preview-image",
        class: {
          "is-movable": _vm.isImageMovable,
          "is-hidden": !_vm.ephemeral.imgInitDone
        },
        style: _vm.previewImgStyles,
        attrs: {
          src: _vm.imgSrc,
          width: _vm.config.imgData.naturalWidth,
          height: _vm.config.imgData.naturalHeight,
          alt: _vm.L("Image preview"),
          draggable: "false"
        },
        on: { load: _vm.onImgLoad }
      }),
      _vm.ephemeral.isLoaded ? _c(
        "div",
        {
          staticClass: "c-cta-container",
          on: {
            pointerdown: function($event) {
              $event.stopPropagation();
            },
            pointermove: function($event) {
              $event.stopPropagation();
            },
            pointerup: function($event) {
              $event.stopPropagation();
            },
            mousedown: function($event) {
              $event.stopPropagation();
            },
            mouseup: function($event) {
              $event.stopPropagation();
            }
          }
        },
        [
          _vm.ephemeral.currentZoom !== null ? _c("slider-continuous", {
            staticClass: "c-zoom-slider",
            class: {
              "show-slider-output": _vm.ephemeral.showSliderOutput
            },
            attrs: {
              uid: "zoomslider",
              value: _vm.ephemeral.currentZoom,
              min: _vm.config.zoomMin,
              max: _vm.config.zoomMax,
              unit: _vm.config.sliderUnit
            },
            on: { input: _vm.onSliderUpdate }
          }) : _vm._e(),
          _c("div", { staticClass: "c-btns-container" }, [
            _c(
              "button",
              {
                staticClass: "is-icon-small c-cta-btn",
                attrs: { "aria-label": _vm.L("Download") },
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.$emit("download");
                  }
                }
              },
              [_c("i", { staticClass: "icon-download" })]
            ),
            _vm.canDelete ? _c(
              "button",
              {
                staticClass: "is-icon-small c-cta-btn",
                class: { "is-loader": _vm.deleting },
                attrs: {
                  "aria-label": _vm.L("Delete"),
                  disabled: _vm.deleting,
                  "data-loading": _vm.deleting
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.$emit("delete-attachment");
                  }
                }
              },
              [
                !_vm.deleting ? _c("i", { staticClass: "icon-trash-alt" }) : _vm._e()
              ]
            ) : _vm._e()
          ])
        ],
        1
      ) : _vm._e(),
      !_vm.ephemeral.isLoaded ? _c("div", { staticClass: "c-loader-animation" }) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-660970af_0", { source: '.c-image-view-area[data-v-660970af] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: none;\n  flex-shrink: 0;\n  overflow: hidden;\n}\nimg.c-preview-image[data-v-660970af] {\n  max-width: unset;\n  user-select: none;\n  will-change: transform;\n  cursor: zoom-in;\n}\nimg.c-preview-image.is-movable[data-v-660970af] {\n  cursor: zoom-out;\n}\nimg.c-preview-image.is-hidden[data-v-660970af] {\n  opacity: 0;\n}\n.c-cta-container[data-v-660970af] {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  z-index: 5;\n  padding: 0.25rem 0.75rem 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 0.75rem;\n}\n.c-cta-container[data-v-660970af]::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  background-color: var(--image-viewer-slider-bg-color);\n  border-radius: 0.5rem;\n  opacity: 0.675;\n}\n@media (forced-colors: active) {\n.c-cta-container[data-v-660970af]::after {\n    border: 1px solid buttonborder;\n    opacity: 1;\n}\n}\n.c-btns-container[data-v-660970af] {\n  display: flex;\n  align-items: center;\n  transform: translateY(0.25rem);\n  column-gap: 0.5rem;\n  z-index: 1;\n}\n.c-btns-container button.c-cta-btn[data-v-660970af] {\n  color: var(--image-viewer-cta-color);\n  background-color: var(--image-viewer-slider-bg-color);\n  border-radius: 0.25rem;\n  border: 1px solid var(--image-viewer-cta-color);\n}\n@media screen and (max-width: 768px) {\n.c-btns-container button.c-cta-btn[data-v-660970af] {\n    font-size: 0.75rem;\n    width: 1.5rem;\n    height: 1.5rem;\n}\n}\n.c-btns-container button.c-cta-btn[data-v-660970af]:hover, .c-btns-container button.c-cta-btn[data-v-660970af]:focus {\n  color: var(--image-viewer-cta-color_active);\n  border-color: var(--image-viewer-cta-color_active);\n}\n.c-btns-container button.c-cta-btn.is-loader[data-v-660970af]::after {\n  width: 0.75rem;\n  height: 0.75rem;\n  color: var(--image-viewer-cta-color);\n}\n.c-zoom-slider[data-v-660970af] {\n  width: 9.25rem;\n  z-index: 1;\n}\n.c-zoom-slider[data-v-660970af]  .edge {\n  display: none;\n}\n.c-zoom-slider[data-v-660970af]  .sOutput {\n  display: none;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  font-size: 0.85em;\n  top: -2rem;\n}\n.c-zoom-slider[data-v-660970af]  .marks {\n  margin-top: 0;\n}\n.c-zoom-slider.show-slider-output[data-v-660970af]  .sOutput {\n  display: inline-block;\n}\n.c-zoom-slider[data-v-660970af]  input.sInput {\n  forced-color-adjust: none;\n}\n@media (forced-colors: active) {\n.c-zoom-slider[data-v-660970af]  input.sInput {\n    background: none;\n    border: 1px solid buttonborder;\n    color: buttontext;\n}\n}\n.c-loader-animation[data-v-660970af] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 2px solid;\n  border-top-color: transparent;\n  border-radius: 50%;\n  color: var(--viewer-text-color);\n  animation: loader-ani-data-v-660970af 1.75s infinite linear;\n  z-index: 2;\n}\n@media screen and (min-width: 1200px) {\n.c-loader-animation[data-v-660970af] {\n    width: 1.75rem;\n    height: 1.75rem;\n}\n}\n@keyframes loader-ani-data-v-660970af {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n\n/*# sourceMappingURL=PreviewImageArea.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/chatroom/image-viewer/PreviewImageArea.vue", "PreviewImageArea.vue"], "names": [], "mappings": "AAqdA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;ACpdA;ADudA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;ACpdA;ADsdA;EACA,gBAAA;ACpdA;ADudA;EACA,UAAA;ACrdA;ADydA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;ACtdA;ADwdA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,qDAAA;EACA,qBAAA;EACA,cAAA;ACtdA;AACA;AD0cA;IAcA,8BAAA;IACA,UAAA;ACrdE;AACF;ADydA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;ACtdA;ADwdA;EACA,oCAAA;EACA,qDAAA;EACA,sBAAA;EACA,+CAAA;ACtdA;AACA;ADidA;IAOA,kBAAA;IACA,aAAA;IACA,cAAA;ACrdE;AACF;ADudA;EAEA,2CAAA;EACA,kDAAA;ACtdA;ADydA;EACA,cAAA;EACA,eAAA;EACA,oCAAA;ACvdA;AD4dA;EACA,cAAA;EACA,UAAA;ACzdA;AD2dA;EACA,aAAA;ACzdA;AD4dA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;EACA,UAAA;AC1dA;AD6dA;EACA,aAAA;AC3dA;AD8dA;EACA,qBAAA;AC5dA;AD+dA;EACA,yBAAA;AC7dA;AACA;AD2dA;IAIA,gBAAA;IACA,8BAAA;IACA,iBAAA;AC5dE;AACF;ADgeA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oBAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,6BAAA;EACA,kBAAA;EACA,+BAAA;EACA,2DAAA;EACA,UAAA;AC7dA;AACA;AD+cA;IAgBA,cAAA;IACA,eAAA;AC5dE;AACF;AD+dA;AACA;IAAA,uBAAA;AC3dE;AD4dF;IAAA,yBAAA;ACzdE;AACF;;AAEA,+CAA+C", "file": "PreviewImageArea.vue", "sourcesContent": [`<template lang="pug">
.c-image-view-area(
  @wheel.prevent.stop='wheelEventHandler'
  @mousedown='mouseDownHandler'
  @mouseup='mouseUpHandler'
)
  img.c-preview-image(ref='previewImg'
    :class='{ "is-movable": isImageMovable, "is-hidden": !ephemeral.imgInitDone }'
    :src='imgSrc'
    :width='config.imgData.naturalWidth'
    :height='config.imgData.naturalHeight'
    :style='previewImgStyles'
    :alt='L("Image preview")'
    draggable='false'
    @load='onImgLoad'
  )

  .c-cta-container(
    v-if='ephemeral.isLoaded'
    @pointerdown.stop=''
    @pointermove.stop=''
    @pointerup.stop=''
    @mousedown.stop=''
    @mouseup.stop=''
  )
    slider-continuous.c-zoom-slider(
      v-if='ephemeral.currentZoom !== null'
      :class='{ "show-slider-output": ephemeral.showSliderOutput }'
      uid='zoomslider'
      :value='ephemeral.currentZoom'
      :min='config.zoomMin'
      :max='config.zoomMax'
      :unit='config.sliderUnit'
      @input='onSliderUpdate'
    )

    .c-btns-container
      button.is-icon-small.c-cta-btn(
        :aria-label='L("Download")'
        @click.stop='$emit("download")'
      )
        i.icon-download

      button.is-icon-small.c-cta-btn(
        v-if='canDelete'
        :aria-label='L("Delete")'
        :disabled='deleting'
        :class='{ "is-loader": deleting }'
        :data-loading='deleting'
        @click.stop='$emit("delete-attachment")'
      )
        i.icon-trash-alt(v-if='!deleting')

  .c-loader-animation(v-if='!ephemeral.isLoaded')
</template>

<script>
import SliderContinuous from '../../../../../frontend/views/components/SliderContinuous.vue'
import pointerEventsMixinFactory from '../../../../../frontend/views/utils/pointerEventsMixins.js'
import { linearScale, debounce } from 'turtledash'

const linearScaler = {
  deltaToZoom: linearScale([0, 5], [0, 12]), // maps deltaY value of 'scroll' event to zoom value
  pinchToZoom: linearScale([0, 20], [0, 15]) // maps pinch gesture factor value to zoom value
}

const getSign = v => v < 0 ? -1 : 1

export default {
  name: 'PreviewImageArea',
  mixins: [pointerEventsMixinFactory({ pointerMoveOnWindow: true })],
  components: {
    SliderContinuous
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: String,
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ephemeral: {
        isLoaded: false,
        imgInitDone: false,
        previewImgAttrs: {
          width: undefined,
          height: undefined,
          topX: undefined,
          topY: undefined
        },
        imgTranslation: { x: 0, y: 0 },
        currentZoom: 100,
        previousZoom: null,
        pointedZoomAction: {
          percentX: null,
          percentY: null,
          zoomCenter: null
        },
        mousedownCapture: null,
        showSliderOutput: false
      },
      config: {
        imgData: {
          naturalWidth: null,
          naturalHeight: null,
          aspectRatio: 1 // intrinsic ratio value of width / height
        },
        zoomMin: 0,
        zoomMax: 400, // for now.
        sliderUnit: '%',
        resizeHandlerDebounced: debounce(this.resizeHandler, 100)
      }
    }
  },
  computed: {
    previewImgStyles () {
      const attrs = this.config.imgData
      const tx = this.ephemeral.imgTranslation.x || 0
      const ty = this.ephemeral.imgTranslation.y || 0
      const scaleVal = this.ephemeral.currentZoom / 100

      return {
        height: attrs.naturalHeight ? \`\${attrs.naturalHeight}px\` : undefined,
        transform: \`translate3d(\${tx}px, \${ty}px, 0px) scale(\${scaleVal}, \${scaleVal})\`
      }
    },
    isImageMovable () {
      return this.config.zoomMin < this.ephemeral.currentZoom // currentZoom is higher than the minimum value.
    },
    movableDistances () {
      // calculates how much vertical/horizontal spaces are available to move image around in.
      if (!this.isImageMovable) {
        return { x: 0, y: 0 }
      } else {
        const percentDiff = (this.ephemeral.currentZoom - this.config.zoomMin) / 100
        return {
          x: this.config.imgData.naturalWidth * percentDiff / 2,
          y: this.config.imgData.naturalHeight * percentDiff / 2
        }
      }
    }
  },
  methods: {
    onImgLoad () {
      const imgEl = this.$refs.previewImg
      const naturalWidth = imgEl.naturalWidth
      const naturalHeight = imgEl.naturalHeight
      const aspectRatio = naturalWidth / naturalHeight

      this.ephemeral.isLoaded = true
      this.config.imgData.naturalWidth = naturalWidth
      this.config.imgData.naturalHeight = naturalHeight
      this.config.imgData.aspectRatio = aspectRatio
      this.config.imgData.isWiderThanTall = aspectRatio >= 1

      this.initViewerSettings()
      this.calcPreviewImageDimension()

      this.$nextTick(() => {
        this.ephemeral.imgInitDone = true
      })
    },
    initViewerSettings () {
      const { naturalWidth, naturalHeight, aspectRatio } = this.config.imgData
      let {
        width: viewAreaWidth,
        height: viewAreaHeight
      } = this.$el.getBoundingClientRect()

      viewAreaHeight *= 0.8 // for initial render, use up to 80% of the available height. (close button should be visible)

      let zoomMin = 100 // defaults to 100%
      let minWidth = naturalWidth
      let minHeight = naturalHeight

      // Calculate 'minimum' zoom value. the idea is that,
      // - If the intrinsic size of the image is larger than current view-area: the percentage value that makes the image just fit the available space.
      // - If the intrinsic size of the image is smaller than current view-area: 100%

      if (viewAreaWidth < naturalWidth) {
        const wFraction = viewAreaWidth / naturalWidth
        minWidth = wFraction * naturalWidth
        minHeight = minWidth / aspectRatio
      }

      if (viewAreaHeight < minHeight) {
        minHeight = viewAreaHeight
        minWidth = minHeight * aspectRatio
      }

      zoomMin = Math.ceil(minWidth / naturalWidth * 100)

      this.config.zoomMin = zoomMin
      this.ephemeral.currentZoom = zoomMin
      this.ephemeral.imgTranslation = { x: 0, y: 0 }
    },
    calcPreviewImageDimension () {
      // update the preview image width/height values based on the current zoom value
      const { naturalWidth, aspectRatio } = this.config.imgData
      const fraction = this.ephemeral.currentZoom / 100
      const center = this.getViewAreaCenter()
      const { x: transX, y: transY } = this.ephemeral.imgTranslation
      const widthCalc = fraction * naturalWidth
      const heightCalc = widthCalc / aspectRatio

      this.ephemeral.previewImgAttrs.width = widthCalc
      this.ephemeral.previewImgAttrs.height = heightCalc
      this.ephemeral.previewImgAttrs.topX = center.x - widthCalc / 2 + transX
      this.ephemeral.previewImgAttrs.topY = center.y - heightCalc / 2 + transY
    },
    getViewAreaCenter () {
      const {
        width: viewAreaWidth,
        height: viewAreaHeight,
        top: viewAreaTop,
        left: viewAreaLeft
      } = this.$el.getBoundingClientRect()

      return {
        x: viewAreaLeft + viewAreaWidth / 2,
        y: viewAreaTop + viewAreaHeight / 2
      }
    },
    isPointInsidePreviewImage ({ x, y }) {
      // check if the given point is within the currently-scaled preview-image.
      const center = this.getViewAreaCenter()
      const { width, height } = this.ephemeral.previewImgAttrs
      const { x: transX, y: transY } = this.ephemeral.imgTranslation
      const half = { w: width / 2, h: height / 2 }
      const boundary = {
        top: transY + center.y - half.h,
        left: transX + center.x - half.w,
        bottom: transY + center.y + half.h,
        right: transX + center.x + half.w
      }

      return x > boundary.left &&
        x < boundary.right &&
        y > boundary.top &&
        y < boundary.bottom
    },
    onSliderUpdate (e) {
      const center = this.getViewAreaCenter()
      this.handleZoomUpdate(Number(e.target.value), center)
      this.calcPreviewImageDimension()
      this.clearPointedZoomActionState()
    },
    handleZoomUpdate (val, zoomPoint = null) {
      const twoPointsAreSame = (p1, p2) => {
        return p1 && p2 && p1?.x === p2.x && p1?.y === p2?.y
      }
      this.ephemeral.previousZoom = this.ephemeral.currentZoom
      this.ephemeral.currentZoom = val

      if (zoomPoint) {
        let centerUpdated = false

        if (!twoPointsAreSame(zoomPoint, this.ephemeral.pointedZoomAction.zoomCenter)) {
          this.ephemeral.pointedZoomAction.zoomCenter = zoomPoint
          centerUpdated = true
        }

        const { width: prevWidth, height: prevHeight, topX: prevTopX, topY: prevTopY } = this.ephemeral.previewImgAttrs
        const center = this.ephemeral.pointedZoomAction.zoomCenter
        let percentX = this.ephemeral.pointedZoomAction.percentX
        let percentY = this.ephemeral.pointedZoomAction.percentY

        if (percentX === null || centerUpdated) {
          percentX = (center.x - prevTopX) / prevWidth
          percentX = parseFloat(percentX.toFixed(2))

          this.ephemeral.pointedZoomAction.percentX = percentX // need to record it
        }

        if (percentY === null || centerUpdated) {
          percentY = (center.y - prevTopY) / prevHeight
          percentY = parseFloat(percentY.toFixed(2))

          this.ephemeral.pointedZoomAction.percentY = percentY // need to record it
        }

        this.calcPreviewImageDimension()
        const { width: afterWidth, height: afterHeight, topX: afterTopX, topY: afterTopY } = this.ephemeral.previewImgAttrs
        const toX = Math.ceil(afterTopX + afterWidth * percentX)
        const toY = Math.ceil(afterTopY + afterHeight * percentY)
        this.translate({ x: (toX - center.x) * -1, y: (toY - center.y) * -1 })
      } else {
        this.calcPreviewImageDimension()

        const { naturalWidth, naturalHeight } = this.config.imgData
        const zoomDiff = (this.ephemeral.currentZoom - this.ephemeral.previousZoom) / 100
        let moveX = 0 // x-value to auto-translate
        let moveY = 0 // y-value to auto-translate

        if (this.ephemeral.imgTranslation.x !== 0) {
          const wUpdate = zoomDiff * naturalWidth

          moveX = wUpdate * -0.5
        }

        if (this.ephemeral.imgTranslation.y !== 0) {
          const hUpdate = zoomDiff * naturalHeight

          moveY = hUpdate * -0.5
        }

        this.translate({ x: moveX, y: moveY })
      }

      if (!this.ephemeral.showSliderOutput) {
        this.ephemeral.showSliderOutput = true
      }

      clearTimeout(this.sliderOutputTimeoutId)
      this.sliderOutputTimeoutId = setTimeout(() => {
        this.ephemeral.showSliderOutput = false
      }, 1500)
    },
    translate ({ x = 0, y = 0 }, override = false) {
      if (!this.isImageMovable) {
        this.ephemeral.imgTranslation = { x: 0, y: 0 }
      } else if (override) {
        this.ephemeral.imgTranslation = { x, y }
      } else {
        const { x: movableX, y: movableY } = this.movableDistances
        let newX = this.ephemeral.imgTranslation.x + x
        let newY = this.ephemeral.imgTranslation.y + y
        const signX = getSign(newX)
        const signY = getSign(newY)

        if (Math.abs(newX) > movableX) {
          newX = signX * movableX
        }
        if (Math.abs(newY) > movableY) {
          newY = signY * movableY
        }

        this.ephemeral.imgTranslation.x = newX
        this.ephemeral.imgTranslation.y = newY

        this.calcPreviewImageDimension()
      }
    },
    resizeHandler () {
      this.initViewerSettings()
      this.calcPreviewImageDimension()
      this.clearPointedZoomActionState()
    },
    clipZoomValue (newVal) {
      return newVal > this.config.zoomMax
        ? this.config.zoomMax
        : newVal < this.config.zoomMin
          ? this.config.zoomMin
          : newVal
    },
    pinchInHandler ({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) { return }

      // should zoom-out (shrink)
      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      )
      const newVal = Math.ceil(currZoom - updateVal)
      this.handleZoomUpdate(this.clipZoomValue(newVal), center)
    },
    pinchOutHandler ({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) { return }

      // should zoom-in (magnify)
      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      )

      const newVal = Math.ceil(currZoom + updateVal)
      this.handleZoomUpdate(this.clipZoomValue(newVal), center)
    },
    wheelEventHandler (e) {
      // reference: https://kenneth.io/post/detecting-multi-touch-trackpad-gestures-in-javascript
      const point = { x: e.clientX, y: e.clientY }

      if (!e.ctrlKey || !this.isPointInsidePreviewImage(point)) { return }

      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.deltaToZoom(Math.abs(e.deltaY))
      )
      let newVal

      if (e.deltaY < 0) {
        // 'zoom-in' action using track-pad
        newVal = currZoom + updateVal
      } else {
        // 'zoom-out' action using track-pad
        newVal = currZoom - updateVal
      }

      if (newVal !== undefined) {
        this.handleZoomUpdate(this.clipZoomValue(newVal), point)
      }
    },
    clearPointedZoomActionState () {
      this.ephemeral.pointedZoomAction.percentX = null
      this.ephemeral.pointedZoomAction.percentY = null
      this.ephemeral.pointedZoomAction.zoomCenter = null
    },
    postPointerCancel () {
      this.clearPointedZoomActionState()
    },
    mouseDownHandler (e) {
      const point = { x: e.clientX, y: e.clientY }
      this.ephemeral.mousedownCapture = this.matchMedia.isTouch || !this.isPointInsidePreviewImage(point)
        ? null
        : point
    },
    mouseUpHandler (e) {
      if (this.matchMedia.isTouch || !this.ephemeral.mousedownCapture) { return }

      const point = { x: e.clientX, y: e.clientY }
      const mdownPoint = this.ephemeral.mousedownCapture
      const distance = (() => {
        const dx = Math.abs(point.x - mdownPoint.x)
        const dy = Math.abs(point.y - mdownPoint.y)
        return Math.sqrt(dx * dx + dy * dy)
      })()

      if (distance < 1.5) {
        const shouldZoomOut = this.isImageMovable
        const center = this.getViewAreaCenter()
        if (shouldZoomOut) {
          this.handleZoomUpdate(this.config.zoomMin, center)
        } else {
          const zoomInVal = this.config.zoomMin < 70
            ? 100
            : this.config.zoomMin < 100
              ? 150
              : 200
          this.handleZoomUpdate(zoomInVal, mdownPoint)
        }

        this.calcPreviewImageDimension()
        this.clearPointedZoomActionState()
        this.ephemeral.mousedownCapture = null
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.config.resizeHandlerDebounced)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.config.resizeHandlerDebounced)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-image-view-area {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  flex-shrink: 0;
  overflow: hidden;
}

img.c-preview-image {
  max-width: unset;
  user-select: none;
  will-change: transform;
  cursor: zoom-in;

  &.is-movable {
    cursor: zoom-out;
  }

  &.is-hidden {
    opacity: 0;
  }
}

.c-cta-container {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 5;
  padding: 0.25rem 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: var(--image-viewer-slider-bg-color);
    border-radius: 0.5rem;
    opacity: 0.675;

    @include if-forced-color-mode {
      border: 1px solid buttonborder;
      opacity: 1;
    }
  }
}

.c-btns-container {
  display: flex;
  align-items: center;
  transform: translateY(0.25rem);
  column-gap: 0.5rem;
  z-index: 1;

  button.c-cta-btn {
    color: var(--image-viewer-cta-color);
    background-color: var(--image-viewer-slider-bg-color);
    border-radius: 0.25rem;
    border: 1px solid var(--image-viewer-cta-color);

    @include phone {
      font-size: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover,
    &:focus {
      color: var(--image-viewer-cta-color_active);
      border-color: var(--image-viewer-cta-color_active);
    }

    &.is-loader::after {
      width: 0.75rem;
      height: 0.75rem;
      color: var(--image-viewer-cta-color);
    }
  }
}

.c-zoom-slider {
  width: 9.25rem;
  z-index: 1;

  ::v-deep .edge {
    display: none;
  }

  ::v-deep .sOutput {
    display: none;
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.85em;
    top: -2rem;
  }

  ::v-deep .marks {
    margin-top: 0;
  }

  &.show-slider-output ::v-deep .sOutput {
    display: inline-block;
  }

  ::v-deep input.sInput {
    forced-color-adjust: none;

    @include if-forced-color-mode {
      background: none;
      border: 1px solid buttonborder;
      color: buttontext;
    }
  }
}

.c-loader-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid;
  border-top-color: transparent;
  border-radius: 50%;
  color: var(--viewer-text-color);
  animation: loader-ani 1.75s infinite linear;
  z-index: 2;

  @include desktop {
    width: 1.75rem;
    height: 1.75rem;
  }
}

@keyframes loader-ani {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
`, '.c-image-view-area {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: none;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\nimg.c-preview-image {\n  max-width: unset;\n  user-select: none;\n  will-change: transform;\n  cursor: zoom-in;\n}\nimg.c-preview-image.is-movable {\n  cursor: zoom-out;\n}\nimg.c-preview-image.is-hidden {\n  opacity: 0;\n}\n\n.c-cta-container {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  z-index: 5;\n  padding: 0.25rem 0.75rem 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 0.75rem;\n}\n.c-cta-container::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  background-color: var(--image-viewer-slider-bg-color);\n  border-radius: 0.5rem;\n  opacity: 0.675;\n}\n@media (forced-colors: active) {\n  .c-cta-container::after {\n    border: 1px solid buttonborder;\n    opacity: 1;\n  }\n}\n\n.c-btns-container {\n  display: flex;\n  align-items: center;\n  transform: translateY(0.25rem);\n  column-gap: 0.5rem;\n  z-index: 1;\n}\n.c-btns-container button.c-cta-btn {\n  color: var(--image-viewer-cta-color);\n  background-color: var(--image-viewer-slider-bg-color);\n  border-radius: 0.25rem;\n  border: 1px solid var(--image-viewer-cta-color);\n}\n@media screen and (max-width: 768px) {\n  .c-btns-container button.c-cta-btn {\n    font-size: 0.75rem;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n}\n.c-btns-container button.c-cta-btn:hover, .c-btns-container button.c-cta-btn:focus {\n  color: var(--image-viewer-cta-color_active);\n  border-color: var(--image-viewer-cta-color_active);\n}\n.c-btns-container button.c-cta-btn.is-loader::after {\n  width: 0.75rem;\n  height: 0.75rem;\n  color: var(--image-viewer-cta-color);\n}\n\n.c-zoom-slider {\n  width: 9.25rem;\n  z-index: 1;\n}\n.c-zoom-slider ::v-deep .edge {\n  display: none;\n}\n.c-zoom-slider ::v-deep .sOutput {\n  display: none;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  font-size: 0.85em;\n  top: -2rem;\n}\n.c-zoom-slider ::v-deep .marks {\n  margin-top: 0;\n}\n.c-zoom-slider.show-slider-output ::v-deep .sOutput {\n  display: inline-block;\n}\n.c-zoom-slider ::v-deep input.sInput {\n  forced-color-adjust: none;\n}\n@media (forced-colors: active) {\n  .c-zoom-slider ::v-deep input.sInput {\n    background: none;\n    border: 1px solid buttonborder;\n    color: buttontext;\n  }\n}\n\n.c-loader-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 2px solid;\n  border-top-color: transparent;\n  border-radius: 50%;\n  color: var(--viewer-text-color);\n  animation: loader-ani 1.75s infinite linear;\n  z-index: 2;\n}\n@media screen and (min-width: 1200px) {\n  .c-loader-animation {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n}\n\n@keyframes loader-ani {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=PreviewImageArea.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-660970af";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-image-view-area(
  @wheel.prevent.stop='wheelEventHandler'
  @mousedown='mouseDownHandler'
  @mouseup='mouseUpHandler'
)
  img.c-preview-image(ref='previewImg'
    :class='{ "is-movable": isImageMovable, "is-hidden": !ephemeral.imgInitDone }'
    :src='imgSrc'
    :width='config.imgData.naturalWidth'
    :height='config.imgData.naturalHeight'
    :style='previewImgStyles'
    :alt='L("Image preview")'
    draggable='false'
    @load='onImgLoad'
  )

  .c-cta-container(
    v-if='ephemeral.isLoaded'
    @pointerdown.stop=''
    @pointermove.stop=''
    @pointerup.stop=''
    @mousedown.stop=''
    @mouseup.stop=''
  )
    slider-continuous.c-zoom-slider(
      v-if='ephemeral.currentZoom !== null'
      :class='{ "show-slider-output": ephemeral.showSliderOutput }'
      uid='zoomslider'
      :value='ephemeral.currentZoom'
      :min='config.zoomMin'
      :max='config.zoomMax'
      :unit='config.sliderUnit'
      @input='onSliderUpdate'
    )

    .c-btns-container
      button.is-icon-small.c-cta-btn(
        :aria-label='L("Download")'
        @click.stop='$emit("download")'
      )
        i.icon-download

      button.is-icon-small.c-cta-btn(
        v-if='canDelete'
        :aria-label='L("Delete")'
        :disabled='deleting'
        :class='{ "is-loader": deleting }'
        :data-loading='deleting'
        @click.stop='$emit("delete-attachment")'
      )
        i.icon-trash-alt(v-if='!deleting')

  .c-loader-animation(v-if='!ephemeral.isLoaded')
</template>

<script>
import SliderContinuous from '../../../../../frontend/views/components/SliderContinuous.vue'
import pointerEventsMixinFactory from '../../../../../frontend/views/utils/pointerEventsMixins.js'
import { linearScale, debounce } from 'turtledash'

const linearScaler = {
  deltaToZoom: linearScale([0, 5], [0, 12]), // maps deltaY value of 'scroll' event to zoom value
  pinchToZoom: linearScale([0, 20], [0, 15]) // maps pinch gesture factor value to zoom value
}

const getSign = v => v < 0 ? -1 : 1

export default {
  name: 'PreviewImageArea',
  mixins: [pointerEventsMixinFactory({ pointerMoveOnWindow: true })],
  components: {
    SliderContinuous
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: String,
    canDelete: {
      type: Boolean,
      default: false
    },
    deleting: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ephemeral: {
        isLoaded: false,
        imgInitDone: false,
        previewImgAttrs: {
          width: undefined,
          height: undefined,
          topX: undefined,
          topY: undefined
        },
        imgTranslation: { x: 0, y: 0 },
        currentZoom: 100,
        previousZoom: null,
        pointedZoomAction: {
          percentX: null,
          percentY: null,
          zoomCenter: null
        },
        mousedownCapture: null,
        showSliderOutput: false
      },
      config: {
        imgData: {
          naturalWidth: null,
          naturalHeight: null,
          aspectRatio: 1 // intrinsic ratio value of width / height
        },
        zoomMin: 0,
        zoomMax: 400, // for now.
        sliderUnit: '%',
        resizeHandlerDebounced: debounce(this.resizeHandler, 100)
      }
    }
  },
  computed: {
    previewImgStyles () {
      const attrs = this.config.imgData
      const tx = this.ephemeral.imgTranslation.x || 0
      const ty = this.ephemeral.imgTranslation.y || 0
      const scaleVal = this.ephemeral.currentZoom / 100

      return {
        height: attrs.naturalHeight ? \`\${attrs.naturalHeight}px\` : undefined,
        transform: \`translate3d(\${tx}px, \${ty}px, 0px) scale(\${scaleVal}, \${scaleVal})\`
      }
    },
    isImageMovable () {
      return this.config.zoomMin < this.ephemeral.currentZoom // currentZoom is higher than the minimum value.
    },
    movableDistances () {
      // calculates how much vertical/horizontal spaces are available to move image around in.
      if (!this.isImageMovable) {
        return { x: 0, y: 0 }
      } else {
        const percentDiff = (this.ephemeral.currentZoom - this.config.zoomMin) / 100
        return {
          x: this.config.imgData.naturalWidth * percentDiff / 2,
          y: this.config.imgData.naturalHeight * percentDiff / 2
        }
      }
    }
  },
  methods: {
    onImgLoad () {
      const imgEl = this.$refs.previewImg
      const naturalWidth = imgEl.naturalWidth
      const naturalHeight = imgEl.naturalHeight
      const aspectRatio = naturalWidth / naturalHeight

      this.ephemeral.isLoaded = true
      this.config.imgData.naturalWidth = naturalWidth
      this.config.imgData.naturalHeight = naturalHeight
      this.config.imgData.aspectRatio = aspectRatio
      this.config.imgData.isWiderThanTall = aspectRatio >= 1

      this.initViewerSettings()
      this.calcPreviewImageDimension()

      this.$nextTick(() => {
        this.ephemeral.imgInitDone = true
      })
    },
    initViewerSettings () {
      const { naturalWidth, naturalHeight, aspectRatio } = this.config.imgData
      let {
        width: viewAreaWidth,
        height: viewAreaHeight
      } = this.$el.getBoundingClientRect()

      viewAreaHeight *= 0.8 // for initial render, use up to 80% of the available height. (close button should be visible)

      let zoomMin = 100 // defaults to 100%
      let minWidth = naturalWidth
      let minHeight = naturalHeight

      // Calculate 'minimum' zoom value. the idea is that,
      // - If the intrinsic size of the image is larger than current view-area: the percentage value that makes the image just fit the available space.
      // - If the intrinsic size of the image is smaller than current view-area: 100%

      if (viewAreaWidth < naturalWidth) {
        const wFraction = viewAreaWidth / naturalWidth
        minWidth = wFraction * naturalWidth
        minHeight = minWidth / aspectRatio
      }

      if (viewAreaHeight < minHeight) {
        minHeight = viewAreaHeight
        minWidth = minHeight * aspectRatio
      }

      zoomMin = Math.ceil(minWidth / naturalWidth * 100)

      this.config.zoomMin = zoomMin
      this.ephemeral.currentZoom = zoomMin
      this.ephemeral.imgTranslation = { x: 0, y: 0 }
    },
    calcPreviewImageDimension () {
      // update the preview image width/height values based on the current zoom value
      const { naturalWidth, aspectRatio } = this.config.imgData
      const fraction = this.ephemeral.currentZoom / 100
      const center = this.getViewAreaCenter()
      const { x: transX, y: transY } = this.ephemeral.imgTranslation
      const widthCalc = fraction * naturalWidth
      const heightCalc = widthCalc / aspectRatio

      this.ephemeral.previewImgAttrs.width = widthCalc
      this.ephemeral.previewImgAttrs.height = heightCalc
      this.ephemeral.previewImgAttrs.topX = center.x - widthCalc / 2 + transX
      this.ephemeral.previewImgAttrs.topY = center.y - heightCalc / 2 + transY
    },
    getViewAreaCenter () {
      const {
        width: viewAreaWidth,
        height: viewAreaHeight,
        top: viewAreaTop,
        left: viewAreaLeft
      } = this.$el.getBoundingClientRect()

      return {
        x: viewAreaLeft + viewAreaWidth / 2,
        y: viewAreaTop + viewAreaHeight / 2
      }
    },
    isPointInsidePreviewImage ({ x, y }) {
      // check if the given point is within the currently-scaled preview-image.
      const center = this.getViewAreaCenter()
      const { width, height } = this.ephemeral.previewImgAttrs
      const { x: transX, y: transY } = this.ephemeral.imgTranslation
      const half = { w: width / 2, h: height / 2 }
      const boundary = {
        top: transY + center.y - half.h,
        left: transX + center.x - half.w,
        bottom: transY + center.y + half.h,
        right: transX + center.x + half.w
      }

      return x > boundary.left &&
        x < boundary.right &&
        y > boundary.top &&
        y < boundary.bottom
    },
    onSliderUpdate (e) {
      const center = this.getViewAreaCenter()
      this.handleZoomUpdate(Number(e.target.value), center)
      this.calcPreviewImageDimension()
      this.clearPointedZoomActionState()
    },
    handleZoomUpdate (val, zoomPoint = null) {
      const twoPointsAreSame = (p1, p2) => {
        return p1 && p2 && p1?.x === p2.x && p1?.y === p2?.y
      }
      this.ephemeral.previousZoom = this.ephemeral.currentZoom
      this.ephemeral.currentZoom = val

      if (zoomPoint) {
        let centerUpdated = false

        if (!twoPointsAreSame(zoomPoint, this.ephemeral.pointedZoomAction.zoomCenter)) {
          this.ephemeral.pointedZoomAction.zoomCenter = zoomPoint
          centerUpdated = true
        }

        const { width: prevWidth, height: prevHeight, topX: prevTopX, topY: prevTopY } = this.ephemeral.previewImgAttrs
        const center = this.ephemeral.pointedZoomAction.zoomCenter
        let percentX = this.ephemeral.pointedZoomAction.percentX
        let percentY = this.ephemeral.pointedZoomAction.percentY

        if (percentX === null || centerUpdated) {
          percentX = (center.x - prevTopX) / prevWidth
          percentX = parseFloat(percentX.toFixed(2))

          this.ephemeral.pointedZoomAction.percentX = percentX // need to record it
        }

        if (percentY === null || centerUpdated) {
          percentY = (center.y - prevTopY) / prevHeight
          percentY = parseFloat(percentY.toFixed(2))

          this.ephemeral.pointedZoomAction.percentY = percentY // need to record it
        }

        this.calcPreviewImageDimension()
        const { width: afterWidth, height: afterHeight, topX: afterTopX, topY: afterTopY } = this.ephemeral.previewImgAttrs
        const toX = Math.ceil(afterTopX + afterWidth * percentX)
        const toY = Math.ceil(afterTopY + afterHeight * percentY)
        this.translate({ x: (toX - center.x) * -1, y: (toY - center.y) * -1 })
      } else {
        this.calcPreviewImageDimension()

        const { naturalWidth, naturalHeight } = this.config.imgData
        const zoomDiff = (this.ephemeral.currentZoom - this.ephemeral.previousZoom) / 100
        let moveX = 0 // x-value to auto-translate
        let moveY = 0 // y-value to auto-translate

        if (this.ephemeral.imgTranslation.x !== 0) {
          const wUpdate = zoomDiff * naturalWidth

          moveX = wUpdate * -0.5
        }

        if (this.ephemeral.imgTranslation.y !== 0) {
          const hUpdate = zoomDiff * naturalHeight

          moveY = hUpdate * -0.5
        }

        this.translate({ x: moveX, y: moveY })
      }

      if (!this.ephemeral.showSliderOutput) {
        this.ephemeral.showSliderOutput = true
      }

      clearTimeout(this.sliderOutputTimeoutId)
      this.sliderOutputTimeoutId = setTimeout(() => {
        this.ephemeral.showSliderOutput = false
      }, 1500)
    },
    translate ({ x = 0, y = 0 }, override = false) {
      if (!this.isImageMovable) {
        this.ephemeral.imgTranslation = { x: 0, y: 0 }
      } else if (override) {
        this.ephemeral.imgTranslation = { x, y }
      } else {
        const { x: movableX, y: movableY } = this.movableDistances
        let newX = this.ephemeral.imgTranslation.x + x
        let newY = this.ephemeral.imgTranslation.y + y
        const signX = getSign(newX)
        const signY = getSign(newY)

        if (Math.abs(newX) > movableX) {
          newX = signX * movableX
        }
        if (Math.abs(newY) > movableY) {
          newY = signY * movableY
        }

        this.ephemeral.imgTranslation.x = newX
        this.ephemeral.imgTranslation.y = newY

        this.calcPreviewImageDimension()
      }
    },
    resizeHandler () {
      this.initViewerSettings()
      this.calcPreviewImageDimension()
      this.clearPointedZoomActionState()
    },
    clipZoomValue (newVal) {
      return newVal > this.config.zoomMax
        ? this.config.zoomMax
        : newVal < this.config.zoomMin
          ? this.config.zoomMin
          : newVal
    },
    pinchInHandler ({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) { return }

      // should zoom-out (shrink)
      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      )
      const newVal = Math.ceil(currZoom - updateVal)
      this.handleZoomUpdate(this.clipZoomValue(newVal), center)
    },
    pinchOutHandler ({ changeFactor, center }) {
      if (!this.isPointInsidePreviewImage(center)) { return }

      // should zoom-in (magnify)
      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.pinchToZoom(changeFactor)
      )

      const newVal = Math.ceil(currZoom + updateVal)
      this.handleZoomUpdate(this.clipZoomValue(newVal), center)
    },
    wheelEventHandler (e) {
      // reference: https://kenneth.io/post/detecting-multi-touch-trackpad-gestures-in-javascript
      const point = { x: e.clientX, y: e.clientY }

      if (!e.ctrlKey || !this.isPointInsidePreviewImage(point)) { return }

      const currZoom = this.ephemeral.currentZoom
      const updateVal = Math.ceil(
        linearScaler.deltaToZoom(Math.abs(e.deltaY))
      )
      let newVal

      if (e.deltaY < 0) {
        // 'zoom-in' action using track-pad
        newVal = currZoom + updateVal
      } else {
        // 'zoom-out' action using track-pad
        newVal = currZoom - updateVal
      }

      if (newVal !== undefined) {
        this.handleZoomUpdate(this.clipZoomValue(newVal), point)
      }
    },
    clearPointedZoomActionState () {
      this.ephemeral.pointedZoomAction.percentX = null
      this.ephemeral.pointedZoomAction.percentY = null
      this.ephemeral.pointedZoomAction.zoomCenter = null
    },
    postPointerCancel () {
      this.clearPointedZoomActionState()
    },
    mouseDownHandler (e) {
      const point = { x: e.clientX, y: e.clientY }
      this.ephemeral.mousedownCapture = this.matchMedia.isTouch || !this.isPointInsidePreviewImage(point)
        ? null
        : point
    },
    mouseUpHandler (e) {
      if (this.matchMedia.isTouch || !this.ephemeral.mousedownCapture) { return }

      const point = { x: e.clientX, y: e.clientY }
      const mdownPoint = this.ephemeral.mousedownCapture
      const distance = (() => {
        const dx = Math.abs(point.x - mdownPoint.x)
        const dy = Math.abs(point.y - mdownPoint.y)
        return Math.sqrt(dx * dx + dy * dy)
      })()

      if (distance < 1.5) {
        const shouldZoomOut = this.isImageMovable
        const center = this.getViewAreaCenter()
        if (shouldZoomOut) {
          this.handleZoomUpdate(this.config.zoomMin, center)
        } else {
          const zoomInVal = this.config.zoomMin < 70
            ? 100
            : this.config.zoomMin < 100
              ? 150
              : 200
          this.handleZoomUpdate(zoomInVal, mdownPoint)
        }

        this.calcPreviewImageDimension()
        this.clearPointedZoomActionState()
        this.ephemeral.mousedownCapture = null
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.config.resizeHandlerDebounced)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.config.resizeHandlerDebounced)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";

.c-image-view-area {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  flex-shrink: 0;
  overflow: hidden;
}

img.c-preview-image {
  max-width: unset;
  user-select: none;
  will-change: transform;
  cursor: zoom-in;

  &.is-movable {
    cursor: zoom-out;
  }

  &.is-hidden {
    opacity: 0;
  }
}

.c-cta-container {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 5;
  padding: 0.25rem 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: var(--image-viewer-slider-bg-color);
    border-radius: 0.5rem;
    opacity: 0.675;

    @include if-forced-color-mode {
      border: 1px solid buttonborder;
      opacity: 1;
    }
  }
}

.c-btns-container {
  display: flex;
  align-items: center;
  transform: translateY(0.25rem);
  column-gap: 0.5rem;
  z-index: 1;

  button.c-cta-btn {
    color: var(--image-viewer-cta-color);
    background-color: var(--image-viewer-slider-bg-color);
    border-radius: 0.25rem;
    border: 1px solid var(--image-viewer-cta-color);

    @include phone {
      font-size: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover,
    &:focus {
      color: var(--image-viewer-cta-color_active);
      border-color: var(--image-viewer-cta-color_active);
    }

    &.is-loader::after {
      width: 0.75rem;
      height: 0.75rem;
      color: var(--image-viewer-cta-color);
    }
  }
}

.c-zoom-slider {
  width: 9.25rem;
  z-index: 1;

  ::v-deep .edge {
    display: none;
  }

  ::v-deep .sOutput {
    display: none;
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.85em;
    top: -2rem;
  }

  ::v-deep .marks {
    margin-top: 0;
  }

  &.show-slider-output ::v-deep .sOutput {
    display: inline-block;
  }

  ::v-deep input.sInput {
    forced-color-adjust: none;

    @include if-forced-color-mode {
      background: none;
      border: 1px solid buttonborder;
      color: buttontext;
    }
  }
}

.c-loader-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid;
  border-top-color: transparent;
  border-radius: 50%;
  color: var(--viewer-text-color);
  animation: loader-ani 1.75s infinite linear;
  z-index: 2;

  @include desktop {
    width: 1.75rem;
    height: 1.75rem;
  }
}

@keyframes loader-ani {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
var PreviewImageArea_default = __vue_component__;

// frontend/views/containers/chatroom/image-viewer/ImageViewerModal.vue
var __vue_script__2 = {
  // NOTE: gave this component a generic name in case this is used outside the chatroom area. (eg. instead of 'ChatImageViewer' etc.)
  name: "ImageViewerModal",
  mixins: [trapFocus_default],
  components: {
    AvatarUser: AvatarUser_default,
    PreviewImageArea: PreviewImageArea_default
  },
  props: {
    images: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      touchMatchMedia: null,
      ephemeral: {
        imagesToShow: [],
        deletingImages: [],
        currentIndex: 0,
        isTouch: false
      }
    };
  },
  computed: {
    ...mapGetters([
      "globalProfile",
      "usernameFromID"
    ]),
    blurryBgStyles() {
      return {
        backgroundImage: `url(${this.currentImage.imgUrl})`
      };
    },
    displayName() {
      const contractID = this.currentImage.ownerID;
      return this.globalProfile(contractID)?.displayName || this.usernameFromID(contractID);
    },
    showPrevButton() {
      const len = this.ephemeral.imagesToShow.length;
      return len > 1 && this.ephemeral.currentIndex > 0;
    },
    showNextButton() {
      const len = this.ephemeral.imagesToShow.length;
      return len > 1 && this.ephemeral.currentIndex < len - 1;
    },
    currentImage() {
      return this.ephemeral.imagesToShow[this.ephemeral.currentIndex];
    },
    deletingCurrentImage() {
      return this.ephemeral.deletingImages.includes(this.currentImage.manifestCid);
    }
  },
  created() {
    if (!Array.isArray(this.images)) {
      this.$nextTick(() => this.close());
    } else {
      this.ephemeral.currentIndex = this.initialIndex;
      this.ephemeral.imagesToShow = this.images;
    }
    this.touchMatchMedia = window.matchMedia("(hover: none) and (pointer: coarse)");
    this.ephemeral.isTouch = this.touchMatchMedia.matches;
    this.touchMatchMedia.onchange = (e) => {
      this.ephemeral.isTouch = e.matches;
    };
  },
  mounted() {
    document.addEventListener("keydown", this.keydownHandler);
    esm_default("okTurtles.events/on", DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydownHandler);
    this.touchMatchMedia.onchange = null;
    esm_default("okTurtles.events/off", DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback);
  },
  methods: {
    displayFilesize(size) {
      return `(${formatBytesDecimal(size)})`;
    },
    close() {
      esm_default("okTurtles.events/emit", CLOSE_MODAL, "ImageViewerModal");
    },
    selectNextImage() {
      if (this.ephemeral.currentIndex < this.ephemeral.imagesToShow.length - 1) {
        this.ephemeral.currentIndex += 1;
      }
    },
    selectPrevImage() {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1;
      }
    },
    keydownHandler(e) {
      this.trapFocus(e);
      switch (e.key) {
        case "ArrowLeft":
          this.selectPrevImage();
          break;
        case "ArrowRight":
          this.selectNextImage();
      }
    },
    downloadImage() {
      const aTag = this.$refs.downloadHelper;
      aTag.setAttribute("href", this.currentImage.imgUrl);
      aTag.setAttribute("download", this.currentImage.name);
      aTag.click();
    },
    deleteAttachment() {
      if (this.deletingCurrentImage) {
        return;
      }
      esm_default("okTurtles.events/emit", DELETE_ATTACHMENT, { type: "image", url: this.currentImage.imgUrl });
      this.ephemeral.deletingImages.push(this.currentImage.manifestCid);
    },
    onDeleteAttachmentFeedback({ action, manifestCid }) {
      this.ephemeral.deletingImages = this.ephemeral.deletingImages.filter((cid) => cid !== manifestCid);
      if (action === "complete") {
        this.ephemeral.imagesToShow = this.ephemeral.imagesToShow.filter((image) => image.manifestCid !== manifestCid);
        if (this.ephemeral.imagesToShow.length === 0) {
          this.close();
        } else if (this.ephemeral.currentIndex >= this.ephemeral.imagesToShow.length) {
          this.ephemeral.currentIndex = this.ephemeral.imagesToShow.length - 1;
        }
      }
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-image-viewer-modal",
      on: {
        wheel: function($event) {
          $event.preventDefault();
          $event.stopPropagation();
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "c-image-viewer-content" },
        [
          _c("div", {
            staticClass: "c-image-blurry-background",
            style: _vm.blurryBgStyles
          }),
          _vm.currentImage ? _c("preview-image-area", {
            key: _vm.currentImage.id,
            attrs: {
              "img-src": _vm.currentImage.imgUrl,
              name: _vm.currentImage.name,
              "can-delete": _vm.canDelete,
              deleting: _vm.deletingCurrentImage
            },
            on: {
              download: _vm.downloadImage,
              "delete-attachment": _vm.deleteAttachment
            }
          }) : _vm._e(),
          _c(
            "header",
            { staticClass: "c-modal-header" },
            [
              _vm.currentImage.ownerID ? _c("avatar-user", {
                staticClass: "viewer-avatar",
                attrs: { contractID: _vm.currentImage.ownerID, size: "sm" }
              }) : _vm._e(),
              _c("div", { staticClass: "media-data" }, [
                _c("div", { staticClass: "name has-ellipsis" }, [
                  _vm._v(_vm._s(_vm.displayName))
                ]),
                _c("div", { staticClass: "filename-and-size" }, [
                  _c("div", { staticClass: "filename has-ellipsis" }, [
                    _vm._v(_vm._s(_vm.currentImage.name))
                  ]),
                  _c("div", { staticClass: "file-size" }, [
                    _vm._v(_vm._s(_vm.displayFilesize(_vm.currentImage.size)))
                  ])
                ])
              ]),
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
            1
          ),
          _vm.showPrevButton ? _c(
            "button",
            {
              staticClass: "is-icon c-image-nav-btn is-prev",
              attrs: { type: "button" },
              on: { click: _vm.selectPrevImage }
            },
            [_c("i", { staticClass: "icon-chevron-left" })]
          ) : _vm._e(),
          _vm.showNextButton ? _c(
            "button",
            {
              staticClass: "is-icon c-image-nav-btn is-next",
              attrs: { type: "button" },
              on: { click: _vm.selectNextImage }
            },
            [_c("i", { staticClass: "icon-chevron-right" })]
          ) : _vm._e()
        ],
        1
      ),
      _c("a", {
        ref: "downloadHelper",
        staticClass: "c-invisible-link",
        on: {
          click: function($event) {
            $event.stopPropagation();
          }
        }
      })
    ]
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-6c36b316_0", { source: '.c-image-viewer-modal[data-v-6c36b316] {\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: rgba(10, 10, 10, 0.86);\n  --viewer-bg-color: #1e2021;\n  --viewer-text-color: #e8e8e8;\n  --viewer-cta-bg-color: #1e2021;\n  --viewer-cta-text-color: #e8e8e8;\n  --viewer-cta-border-color: #717879;\n  --viewer-cta-box-shadow-color: #383c3e;\n  --image-viewer-btn-color: #2e3032;\n  --image-viewer-slider-bg-color: #2e3032;\n  --image-viewer-btn-color_active: #717879;\n  --image-viewer-btn-text-color_active: #1e2021;\n}\n.is-dark-theme .c-image-viewer-modal[data-v-6c36b316] {\n  --viewer-bg-color: #717879;\n}\n.is-dark-theme .c-image-viewer-modal[data-v-6c36b316] {\n  --image-viewer-btn-color: #1e2021;\n  --image-viewer-slider-bg-color: #1e2021;\n  --image-viewer-btn-color_active: #2e3032;\n  --image-viewer-btn-text-color_active: #e8e8e8;\n}\n.c-image-viewer-content[data-v-6c36b316] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background-color: var(--viewer-bg-color);\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  background-color: var(--viewer-bg-color);\n}\n@media screen and (min-width: 769px) {\n.c-image-viewer-content[data-v-6c36b316] {\n    border-radius: 0.375rem;\n    width: 92.5vw;\n    height: 90vh;\n}\n}\n.c-modal-header[data-v-6c36b316] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: auto;\n  z-index: 3;\n  padding: 1rem;\n  padding-right: 3rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 0.75rem;\n}\n.c-modal-header > *[data-v-6c36b316] {\n  z-index: 1;\n}\n.c-modal-header[data-v-6c36b316]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 135%;\n  background: linear-gradient(rgba(30, 32, 33, 0.7333333333), rgba(30, 32, 33, 0));\n  z-index: 0;\n}\n.c-modal-header .viewer-avatar[data-v-6c36b316] {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data[data-v-6c36b316] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  line-height: 1.125;\n  color: var(--viewer-text-color);\n  min-width: 0;\n}\n.c-modal-header .media-data .name[data-v-6c36b316] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.c-modal-header .media-data .filename-and-size[data-v-6c36b316] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  column-gap: 0.5rem;\n}\n.c-modal-header .media-data .file-size[data-v-6c36b316] {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data .filename[data-v-6c36b316],\n.c-modal-header .media-data .file-size[data-v-6c36b316] {\n  font-size: 0.75rem;\n}\n.c-modal-header .media-data .name[data-v-6c36b316],\n.c-modal-header .media-data .filename[data-v-6c36b316],\n.c-modal-header .media-data .file-size[data-v-6c36b316] {\n  user-select: none;\n  text-shadow: 1px 1px 2px #1e2021;\n}\n.c-image-blurry-background[data-v-6c36b316] {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  filter: blur(50px) brightness(0.4);\n  background-position: 50%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: var(--viewer-bg-color);\n  inset: -100px;\n}\n.c-close-btn[data-v-6c36b316] {\n  position: absolute;\n  right: 0.75rem;\n  top: 1rem;\n  background-color: var(--image-viewer-btn-color);\n  color: var(--viewer-text-color);\n}\n.c-close-btn[data-v-6c36b316]:hover, .c-close-btn[data-v-6c36b316]:focus {\n  background-color: var(--image-viewer-btn-color_active);\n  color: var(--image-viewer-btn-text-color_active);\n}\nbutton.c-image-nav-btn[data-v-6c36b316] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--viewer-cta-bg-color);\n  color: var(--viewer-cta-text-color);\n  border-color: var(--viewer-cta-border-color);\n  width: 2.5rem;\n  height: 2.5rem;\n}\nbutton.c-image-nav-btn[data-v-6c36b316]:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\nbutton.c-image-nav-btn.is-prev[data-v-6c36b316] {\n  left: 1rem;\n}\nbutton.c-image-nav-btn.is-next[data-v-6c36b316] {\n  right: 1rem;\n}\n@media screen and (max-width: 768px) {\nbutton.c-image-nav-btn[data-v-6c36b316] {\n    width: 2rem;\n    height: 2rem;\n    font-size: 0.75rem;\n}\nbutton.c-image-nav-btn.is-prev[data-v-6c36b316] {\n    left: 0.75rem;\n}\nbutton.c-image-nav-btn.is-next[data-v-6c36b316] {\n    right: 0.75rem;\n}\n}\n.c-invisible-link[data-v-6c36b316] {\n  position: relative;\n  top: -10rem;\n  left: -10rem;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=ImageViewerModal.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/chatroom/image-viewer/ImageViewerModal.vue", "ImageViewerModal.vue"], "names": [], "mappings": "AAmNA;EClNE,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,cAAc;EACd,wCAAwC;EACxC,0BAA0B;EAC1B,4BAA4B;EAC5B,8BAA8B;EAC9B,gCAAgC;EAChC,kCAAkC;EAClC,sCAAsC;EDwMxC,iCAAA;EACA,uCAAA;EACA,wCAAA;EACA,6CAAA;ACtMA;AACA;EACE,0BAA0B;AAC5B;ADqMA;EACA,iCAAA;EACA,uCAAA;EACA,wCAAA;EACA,6CAAA;ACnMA;ADuMA;ECpME,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,wCAAwC;EACxC,gBAAgB;ED+LlB,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,wCAAA;AC7LA;AACA;ADuLA;IAQA,uBAAA;IACA,aAAA;IACA,YAAA;AC5LE;AACF;AD+LA;EC5LE,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,OAAO;EACP,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,gFAAgF;EAChF,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;AACA;;;EAGE,iBAAiB;EACjB,gCAAgC;AAClC;ADqIA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,kCAAA;EACA,wBAAA;EACA,wBAAA;EACA,4BAAA;EACA,wCAAA;EACA,aAAA;AClIA;ADqIA;EACA,kBAAA;EACA,cAAA;EACA,SAAA;EACA,+CAAA;EACA,+BAAA;AClIA;ADoIA;EAEA,sDAAA;EACA,gDAAA;ACnIA;ADuIA;ECpIE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,2BAA2B;EAC3B,4CAA4C;EAC5C,mCAAmC;EACnC,4CAA4C;EAC5C,aAAa;EACb,cAAc;AAChB;AACA;EACE,wDAAwD;AAC1D;AD2HA;EACA,UAAA;ACzHA;AD4HA;EACA,WAAA;AC1HA;AACA;ADiHA;IAYA,WAAA;IACA,YAAA;IACA,kBAAA;AC1HE;AD4HF;IACA,aAAA;AC1HE;AD6HF;IACA,cAAA;AC3HE;AACF;AD+HA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AC5HA;;AAEA,+CAA+C", "file": "ImageViewerModal.vue", "sourcesContent": [`<template lang="pug">
.c-image-viewer-modal(@wheel.prevent.stop='')
  .c-image-viewer-content
    .c-image-blurry-background(:style='blurryBgStyles')
    preview-image-area(
      v-if='currentImage'
      :key='currentImage.id'
      :img-src='currentImage.imgUrl'
      :name='currentImage.name'
      :can-delete='canDelete'
      :deleting='deletingCurrentImage'
      @download='downloadImage'
      @delete-attachment='deleteAttachment'
    )

    header.c-modal-header
      avatar-user.viewer-avatar(
        v-if='currentImage.ownerID'
        :contractID='currentImage.ownerID'
        size='sm'
      )

      .media-data
        .name.has-ellipsis {{ displayName }}
        .filename-and-size
          .filename.has-ellipsis {{ currentImage.name }}
          .file-size {{ displayFilesize(currentImage.size) }}

      button.is-icon-small.c-close-btn(
        type='button'
        @click.stop='close'
      )
        i.icon-times

    button.is-icon.c-image-nav-btn.is-prev(
      v-if='showPrevButton'
      type='button'
      @click='selectPrevImage'
    )
      i.icon-chevron-left

    button.is-icon.c-image-nav-btn.is-next(
      v-if='showNextButton'
      type='button'
      @click='selectNextImage'
    )
      i.icon-chevron-right

  a.c-invisible-link(
    ref='downloadHelper'
    @click.stop=''
  )
</template>

<script>
import { mapGetters } from 'vuex'
import sbp from '@sbp/sbp'
import trapFocus from '../../../../../frontend/utils/trapFocus.js'
import { CLOSE_MODAL, DELETE_ATTACHMENT, DELETE_ATTACHMENT_FEEDBACK } from '../../../../../frontend/utils/events.js'
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import PreviewImageArea from './PreviewImageArea.vue'
import { formatBytesDecimal } from '../../../../../frontend/views/utils/filters.js'

export default {
  // NOTE: gave this component a generic name in case this is used outside the chatroom area. (eg. instead of 'ChatImageViewer' etc.)
  name: 'ImageViewerModal',
  mixins: [trapFocus],
  components: {
    AvatarUser,
    PreviewImageArea
  },
  props: {
    images: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      touchMatchMedia: null,
      ephemeral: {
        imagesToShow: [],
        deletingImages: [],
        currentIndex: 0,
        isTouch: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    blurryBgStyles () {
      return {
        backgroundImage: \`url(\${this.currentImage.imgUrl})\`
      }
    },
    displayName () {
      const contractID = this.currentImage.ownerID
      return this.globalProfile(contractID)?.displayName ||
        this.usernameFromID(contractID)
    },
    showPrevButton () {
      const len = this.ephemeral.imagesToShow.length
      return len > 1 && this.ephemeral.currentIndex > 0
    },
    showNextButton () {
      const len = this.ephemeral.imagesToShow.length
      return len > 1 && this.ephemeral.currentIndex < len - 1
    },
    currentImage () {
      return this.ephemeral.imagesToShow[this.ephemeral.currentIndex]
    },
    deletingCurrentImage () {
      return this.ephemeral.deletingImages.includes(this.currentImage.manifestCid)
    }
  },
  created () {
    if (!Array.isArray(this.images)) {
      this.$nextTick(() => this.close())
    } else {
      this.ephemeral.currentIndex = this.initialIndex
      this.ephemeral.imagesToShow = this.images
    }

    this.touchMatchMedia = window.matchMedia('(hover: none) and (pointer: coarse)')
    this.ephemeral.isTouch = this.touchMatchMedia.matches
    this.touchMatchMedia.onchange = (e) => {
      this.ephemeral.isTouch = e.matches
    }
  },
  mounted () {
    document.addEventListener('keydown', this.keydownHandler)
    sbp('okTurtles.events/on', DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydownHandler)
    this.touchMatchMedia.onchange = null
    sbp('okTurtles.events/off', DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback)
  },
  methods: {
    displayFilesize (size) {
      return \`(\${formatBytesDecimal(size)})\`
    },
    close () {
      sbp('okTurtles.events/emit', CLOSE_MODAL, 'ImageViewerModal')
    },
    selectNextImage () {
      if (this.ephemeral.currentIndex < this.ephemeral.imagesToShow.length - 1) {
        this.ephemeral.currentIndex += 1
      }
    },
    selectPrevImage () {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1
      }
    },
    keydownHandler (e) {
      this.trapFocus(e)

      switch (e.key) {
        case 'ArrowLeft':
          this.selectPrevImage()
          break
        case 'ArrowRight':
          this.selectNextImage()
      }
    },
    downloadImage () {
      const aTag = this.$refs.downloadHelper

      aTag.setAttribute('href', this.currentImage.imgUrl)
      aTag.setAttribute('download', this.currentImage.name)
      aTag.click()
    },
    deleteAttachment () {
      if (this.deletingCurrentImage) {
        return
      }

      sbp('okTurtles.events/emit', DELETE_ATTACHMENT, { type: 'image', url: this.currentImage.imgUrl })
      this.ephemeral.deletingImages.push(this.currentImage.manifestCid)
    },
    onDeleteAttachmentFeedback ({ action, manifestCid }) {
      this.ephemeral.deletingImages = this.ephemeral.deletingImages.filter(cid => cid !== manifestCid)

      if (action === 'complete') {
        this.ephemeral.imagesToShow = this.ephemeral.imagesToShow.filter(image => image.manifestCid !== manifestCid)

        if (this.ephemeral.imagesToShow.length === 0) {
          this.close()
        } else if (this.ephemeral.currentIndex >= this.ephemeral.imagesToShow.length) {
          this.ephemeral.currentIndex = this.ephemeral.imagesToShow.length - 1
        }
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";
@import "../../../../../frontend/assets/style/components/_media-viewer_utils.scss";

.c-image-viewer-modal {
  @include media-viewer-modal-container($zindex: $zindex-modal);

  --image-viewer-btn-color: #2e3032;
  --image-viewer-slider-bg-color: #2e3032;
  --image-viewer-btn-color_active: #717879;
  --image-viewer-btn-text-color_active: #1e2021;

  .is-dark-theme & {
    --image-viewer-btn-color: #1e2021;
    --image-viewer-slider-bg-color: #1e2021;
    --image-viewer-btn-color_active: #2e3032;
    --image-viewer-btn-text-color_active: #e8e8e8;
  }
}

.c-image-viewer-content {
  @include media-viewer-modal-content;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--viewer-bg-color);

  @include from($tablet) {
    border-radius: 0.375rem;
    width: 92.5vw;
    height: 90vh;
  }
}

.c-modal-header {
  @include media-viewer-modal-header;
}

.c-image-blurry-background {
  position: absolute;
  display: block;
  pointer-events: none;
  filter: blur(50px) brightness(0.4);
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: var(--viewer-bg-color);
  inset: -100px;
}

.c-close-btn {
  position: absolute;
  right: 0.75rem;
  top: 1rem;
  background-color: var(--image-viewer-btn-color);
  color: var(--viewer-text-color);

  &:hover,
  &:focus {
    background-color: var(--image-viewer-btn-color_active);
    color: var(--image-viewer-btn-text-color_active);
  }
}

button.c-image-nav-btn {
  @include media-viewer-navigation-btn;

  &.is-prev {
    left: 1rem;
  }

  &.is-next {
    right: 1rem;
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

.c-invisible-link {
  position: relative;
  top: -10rem;
  left: -10rem;
  opacity: 0;
  pointer-events: none;
}
</style>
`, '.c-image-viewer-modal {\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: rgba(10, 10, 10, 0.86);\n  --viewer-bg-color: #1e2021;\n  --viewer-text-color: #e8e8e8;\n  --viewer-cta-bg-color: #1e2021;\n  --viewer-cta-text-color: #e8e8e8;\n  --viewer-cta-border-color: #717879;\n  --viewer-cta-box-shadow-color: #383c3e;\n  --image-viewer-btn-color: #2e3032;\n  --image-viewer-slider-bg-color: #2e3032;\n  --image-viewer-btn-color_active: #717879;\n  --image-viewer-btn-text-color_active: #1e2021;\n}\n.is-dark-theme .c-image-viewer-modal {\n  --viewer-bg-color: #717879;\n}\n.is-dark-theme .c-image-viewer-modal {\n  --image-viewer-btn-color: #1e2021;\n  --image-viewer-slider-bg-color: #1e2021;\n  --image-viewer-btn-color_active: #2e3032;\n  --image-viewer-btn-text-color_active: #e8e8e8;\n}\n\n.c-image-viewer-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background-color: var(--viewer-bg-color);\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  background-color: var(--viewer-bg-color);\n}\n@media screen and (min-width: 769px) {\n  .c-image-viewer-content {\n    border-radius: 0.375rem;\n    width: 92.5vw;\n    height: 90vh;\n  }\n}\n\n.c-modal-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: auto;\n  z-index: 3;\n  padding: 1rem;\n  padding-right: 3rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 0.75rem;\n}\n.c-modal-header > * {\n  z-index: 1;\n}\n.c-modal-header::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 135%;\n  background: linear-gradient(rgba(30, 32, 33, 0.7333333333), rgba(30, 32, 33, 0));\n  z-index: 0;\n}\n.c-modal-header .viewer-avatar {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  line-height: 1.125;\n  color: var(--viewer-text-color);\n  min-width: 0;\n}\n.c-modal-header .media-data .name {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.c-modal-header .media-data .filename-and-size {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  column-gap: 0.5rem;\n}\n.c-modal-header .media-data .file-size {\n  flex-shrink: 0;\n}\n.c-modal-header .media-data .filename,\n.c-modal-header .media-data .file-size {\n  font-size: 0.75rem;\n}\n.c-modal-header .media-data .name,\n.c-modal-header .media-data .filename,\n.c-modal-header .media-data .file-size {\n  user-select: none;\n  text-shadow: 1px 1px 2px #1e2021;\n}\n\n.c-image-blurry-background {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  filter: blur(50px) brightness(0.4);\n  background-position: 50%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: var(--viewer-bg-color);\n  inset: -100px;\n}\n\n.c-close-btn {\n  position: absolute;\n  right: 0.75rem;\n  top: 1rem;\n  background-color: var(--image-viewer-btn-color);\n  color: var(--viewer-text-color);\n}\n.c-close-btn:hover, .c-close-btn:focus {\n  background-color: var(--image-viewer-btn-color_active);\n  color: var(--image-viewer-btn-text-color_active);\n}\n\nbutton.c-image-nav-btn {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--viewer-cta-bg-color);\n  color: var(--viewer-cta-text-color);\n  border-color: var(--viewer-cta-border-color);\n  width: 2.5rem;\n  height: 2.5rem;\n}\nbutton.c-image-nav-btn:focus {\n  box-shadow: 0 0 0 2px var(--viewer-cta-box-shadow-color);\n}\nbutton.c-image-nav-btn.is-prev {\n  left: 1rem;\n}\nbutton.c-image-nav-btn.is-next {\n  right: 1rem;\n}\n@media screen and (max-width: 768px) {\n  button.c-image-nav-btn {\n    width: 2rem;\n    height: 2rem;\n    font-size: 0.75rem;\n  }\n  button.c-image-nav-btn.is-prev {\n    left: 0.75rem;\n  }\n  button.c-image-nav-btn.is-next {\n    right: 0.75rem;\n  }\n}\n\n.c-invisible-link {\n  position: relative;\n  top: -10rem;\n  left: -10rem;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=ImageViewerModal.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-6c36b316";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-image-viewer-modal(@wheel.prevent.stop='')
  .c-image-viewer-content
    .c-image-blurry-background(:style='blurryBgStyles')
    preview-image-area(
      v-if='currentImage'
      :key='currentImage.id'
      :img-src='currentImage.imgUrl'
      :name='currentImage.name'
      :can-delete='canDelete'
      :deleting='deletingCurrentImage'
      @download='downloadImage'
      @delete-attachment='deleteAttachment'
    )

    header.c-modal-header
      avatar-user.viewer-avatar(
        v-if='currentImage.ownerID'
        :contractID='currentImage.ownerID'
        size='sm'
      )

      .media-data
        .name.has-ellipsis {{ displayName }}
        .filename-and-size
          .filename.has-ellipsis {{ currentImage.name }}
          .file-size {{ displayFilesize(currentImage.size) }}

      button.is-icon-small.c-close-btn(
        type='button'
        @click.stop='close'
      )
        i.icon-times

    button.is-icon.c-image-nav-btn.is-prev(
      v-if='showPrevButton'
      type='button'
      @click='selectPrevImage'
    )
      i.icon-chevron-left

    button.is-icon.c-image-nav-btn.is-next(
      v-if='showNextButton'
      type='button'
      @click='selectNextImage'
    )
      i.icon-chevron-right

  a.c-invisible-link(
    ref='downloadHelper'
    @click.stop=''
  )
</template>

<script>
import { mapGetters } from 'vuex'
import sbp from '@sbp/sbp'
import trapFocus from '../../../../../frontend/utils/trapFocus.js'
import { CLOSE_MODAL, DELETE_ATTACHMENT, DELETE_ATTACHMENT_FEEDBACK } from '../../../../../frontend/utils/events.js'
import AvatarUser from '../../../../../frontend/views/components/AvatarUser.vue'
import PreviewImageArea from './PreviewImageArea.vue'
import { formatBytesDecimal } from '../../../../../frontend/views/utils/filters.js'

export default {
  // NOTE: gave this component a generic name in case this is used outside the chatroom area. (eg. instead of 'ChatImageViewer' etc.)
  name: 'ImageViewerModal',
  mixins: [trapFocus],
  components: {
    AvatarUser,
    PreviewImageArea
  },
  props: {
    images: Array,
    initialIndex: {
      type: Number,
      required: false,
      default: 0
    },
    canDelete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      touchMatchMedia: null,
      ephemeral: {
        imagesToShow: [],
        deletingImages: [],
        currentIndex: 0,
        isTouch: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'globalProfile',
      'usernameFromID'
    ]),
    blurryBgStyles () {
      return {
        backgroundImage: \`url(\${this.currentImage.imgUrl})\`
      }
    },
    displayName () {
      const contractID = this.currentImage.ownerID
      return this.globalProfile(contractID)?.displayName ||
        this.usernameFromID(contractID)
    },
    showPrevButton () {
      const len = this.ephemeral.imagesToShow.length
      return len > 1 && this.ephemeral.currentIndex > 0
    },
    showNextButton () {
      const len = this.ephemeral.imagesToShow.length
      return len > 1 && this.ephemeral.currentIndex < len - 1
    },
    currentImage () {
      return this.ephemeral.imagesToShow[this.ephemeral.currentIndex]
    },
    deletingCurrentImage () {
      return this.ephemeral.deletingImages.includes(this.currentImage.manifestCid)
    }
  },
  created () {
    if (!Array.isArray(this.images)) {
      this.$nextTick(() => this.close())
    } else {
      this.ephemeral.currentIndex = this.initialIndex
      this.ephemeral.imagesToShow = this.images
    }

    this.touchMatchMedia = window.matchMedia('(hover: none) and (pointer: coarse)')
    this.ephemeral.isTouch = this.touchMatchMedia.matches
    this.touchMatchMedia.onchange = (e) => {
      this.ephemeral.isTouch = e.matches
    }
  },
  mounted () {
    document.addEventListener('keydown', this.keydownHandler)
    sbp('okTurtles.events/on', DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydownHandler)
    this.touchMatchMedia.onchange = null
    sbp('okTurtles.events/off', DELETE_ATTACHMENT_FEEDBACK, this.onDeleteAttachmentFeedback)
  },
  methods: {
    displayFilesize (size) {
      return \`(\${formatBytesDecimal(size)})\`
    },
    close () {
      sbp('okTurtles.events/emit', CLOSE_MODAL, 'ImageViewerModal')
    },
    selectNextImage () {
      if (this.ephemeral.currentIndex < this.ephemeral.imagesToShow.length - 1) {
        this.ephemeral.currentIndex += 1
      }
    },
    selectPrevImage () {
      if (this.ephemeral.currentIndex > 0) {
        this.ephemeral.currentIndex -= 1
      }
    },
    keydownHandler (e) {
      this.trapFocus(e)

      switch (e.key) {
        case 'ArrowLeft':
          this.selectPrevImage()
          break
        case 'ArrowRight':
          this.selectNextImage()
      }
    },
    downloadImage () {
      const aTag = this.$refs.downloadHelper

      aTag.setAttribute('href', this.currentImage.imgUrl)
      aTag.setAttribute('download', this.currentImage.name)
      aTag.click()
    },
    deleteAttachment () {
      if (this.deletingCurrentImage) {
        return
      }

      sbp('okTurtles.events/emit', DELETE_ATTACHMENT, { type: 'image', url: this.currentImage.imgUrl })
      this.ephemeral.deletingImages.push(this.currentImage.manifestCid)
    },
    onDeleteAttachmentFeedback ({ action, manifestCid }) {
      this.ephemeral.deletingImages = this.ephemeral.deletingImages.filter(cid => cid !== manifestCid)

      if (action === 'complete') {
        this.ephemeral.imagesToShow = this.ephemeral.imagesToShow.filter(image => image.manifestCid !== manifestCid)

        if (this.ephemeral.imagesToShow.length === 0) {
          this.close()
        } else if (this.ephemeral.currentIndex >= this.ephemeral.imagesToShow.length) {
          this.ephemeral.currentIndex = this.ephemeral.imagesToShow.length - 1
        }
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../../frontend/assets/style/_variables.scss";
@import "../../../../../frontend/assets/style/components/_media-viewer_utils.scss";

.c-image-viewer-modal {
  @include media-viewer-modal-container($zindex: $zindex-modal);

  --image-viewer-btn-color: #2e3032;
  --image-viewer-slider-bg-color: #2e3032;
  --image-viewer-btn-color_active: #717879;
  --image-viewer-btn-text-color_active: #1e2021;

  .is-dark-theme & {
    --image-viewer-btn-color: #1e2021;
    --image-viewer-slider-bg-color: #1e2021;
    --image-viewer-btn-color_active: #2e3032;
    --image-viewer-btn-text-color_active: #e8e8e8;
  }
}

.c-image-viewer-content {
  @include media-viewer-modal-content;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--viewer-bg-color);

  @include from($tablet) {
    border-radius: 0.375rem;
    width: 92.5vw;
    height: 90vh;
  }
}

.c-modal-header {
  @include media-viewer-modal-header;
}

.c-image-blurry-background {
  position: absolute;
  display: block;
  pointer-events: none;
  filter: blur(50px) brightness(0.4);
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: var(--viewer-bg-color);
  inset: -100px;
}

.c-close-btn {
  position: absolute;
  right: 0.75rem;
  top: 1rem;
  background-color: var(--image-viewer-btn-color);
  color: var(--viewer-text-color);

  &:hover,
  &:focus {
    background-color: var(--image-viewer-btn-color_active);
    color: var(--image-viewer-btn-text-color_active);
  }
}

button.c-image-nav-btn {
  @include media-viewer-navigation-btn;

  &.is-prev {
    left: 1rem;
  }

  &.is-next {
    right: 1rem;
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

.c-invisible-link {
  position: relative;
  top: -10rem;
  left: -10rem;
  opacity: 0;
  pointer-events: none;
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
var ImageViewerModal_default = __vue_component__2;
export {
  ImageViewerModal_default as default
};
//# sourceMappingURL=ImageViewerModal-RMJ6EA25-cached.js.map
