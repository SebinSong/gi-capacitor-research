import {
  pointerEventsMixins_default
} from "./chunk-GPFZY2FS-cached.js";
import {
  SliderContinuous_default
} from "./chunk-WUIM2XSU-cached.js";
import {
  imageDataURItoBlob
} from "./chunk-DXIHOQP2-cached.js";
import "./chunk-LOAVQ5PN-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  linearScale,
  randomHexString
} from "./chunk-MTWMQLQH-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  AVATAR_EDITED
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/components/avatar-editor/avatar-editor-constants.js
var ZOOM_SLIDER_MIN = 0;
var ZOOM_SLIDER_MAX = 100;
var IMAGE_SCALE_MIN = 1;
var IMAGE_SCALE_MAX = 5;
var EDITED_AVATAR_DIAMETER = 512;

// frontend/views/components/avatar-editor/EditorCanvas.vue
var __vue_script__ = {
  name: "AvatarEditorCanvas",
  mixins: [pointerEventsMixins_default()],
  data() {
    return {
      ephemeral: {
        image: {
          src: "",
          loaded: false,
          intrinsic: { width: null, height: null, aspectRatio: null },
          onCanvas: { x: null, y: null, width: null, height: null }
        },
        canvas: {
          style: { width: null, height: null },
          onCanvas: {
            width: null,
            height: null,
            origin: {
              translation: { x: 0, y: 0 },
              rotation: 0
            }
          },
          boundingRect: null
        },
        clipCircle: {
          x: null,
          y: null,
          diameter: 0
        }
      }
    };
  },
  props: {
    zoom: {
      type: Number,
      required: false,
      default: 1
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  watch: {
    zoom() {
      this.calculate();
      this.draw();
    }
  },
  computed: {
    ...mapGetters([
      "isDarkTheme",
      "colors"
    ]),
    canvasCommonAttrs() {
      return {
        width: this.ephemeral.canvas.onCanvas.width,
        height: this.ephemeral.canvas.onCanvas.height
      };
    },
    isWiderThanTaller() {
      const img = this.ephemeral.image;
      return img.loaded && img.intrinsic.aspectRatio <= 1;
    },
    onCanvasColors() {
      return {
        clipCircleBg: this.isDarkTheme ? "rgba(46, 48, 50, 0.5)" : "rgba(245, 245, 245, 0.5)",
        // $general_2 with opacity .5
        canvasBg: this.colors["general_2"]
      };
    }
  },
  methods: {
    onImageLoad() {
      const img = this.ephemeral.image;
      const { naturalWidth, naturalHeight } = this.$refs.img;
      img.loaded = true;
      img.intrinsic.width = naturalWidth;
      img.intrinsic.height = naturalHeight;
      img.intrinsic.aspectRatio = naturalHeight / naturalWidth;
      this.$refs.helperCanvas.width = EDITED_AVATAR_DIAMETER;
      this.$refs.helperCanvas.height = EDITED_AVATAR_DIAMETER;
      this.$nextTick(() => {
        this.calculate();
        this.draw();
      });
    },
    onWindowResize() {
      const pixelRatio = window.devicePixelRatio || 1;
      const rootElComputedStyle = window.getComputedStyle(this.$el);
      const extractStyle = (prop) => parseFloat(rootElComputedStyle.getPropertyValue(prop));
      this.ephemeral.canvas.style.width = `${extractStyle("width")}px`;
      this.ephemeral.canvas.style.height = `${extractStyle("height")}px`;
      this.ephemeral.canvas.onCanvas.width = extractStyle("width") * pixelRatio;
      this.ephemeral.canvas.onCanvas.height = extractStyle("height") * pixelRatio;
      if (this.ephemeral.image.loaded) {
        this.$nextTick(() => {
          this.calculate();
          this.draw();
        });
      }
    },
    calculate(isForZoomChange = false) {
      const { image, clipCircle } = this.ephemeral;
      const canvas = this.ephemeral.canvas.onCanvas;
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 };
      image.onCanvas.width = canvas.height * (1 / image.intrinsic.aspectRatio);
      image.onCanvas.height = canvas.height;
      if (this.isWiderThanTaller) {
        clipCircle.diameter = canvas.height;
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2;
        clipCircle.y = 0;
      } else {
        clipCircle.diameter = image.onCanvas.width;
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2;
        clipCircle.y = canvasCenter.y - clipCircle.diameter / 2;
      }
      if (this.zoom > 1) {
        image.onCanvas.width *= this.zoom;
        image.onCanvas.height *= this.zoom;
      }
      image.onCanvas.x = -1 * (image.onCanvas.width / 2);
      image.onCanvas.y = -1 * (image.onCanvas.height / 2);
      this.adjustOriginTranslation();
    },
    draw() {
      const cx = this.$refs.canvas.getContext("2d");
      const image = this.ephemeral.image.onCanvas;
      const canvas = this.ephemeral.canvas.onCanvas;
      const clipCircle = this.ephemeral.clipCircle;
      const circleRadius = clipCircle.diameter / 2;
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 };
      cx.clearRect(0, 0, canvas.width, canvas.height);
      cx.fillStyle = this.onCanvasColors.canvasBg;
      cx.fillRect(0, 0, canvas.width, canvas.height);
      cx.save();
      cx.translate(
        canvasCenter.x + canvas.origin.translation.x,
        canvasCenter.y + canvas.origin.translation.y
      );
      cx.drawImage(this.$refs.img, image.x, image.y, image.width, image.height);
      cx.restore();
      const cx2 = this.$refs.clip.getContext("2d");
      cx2.clearRect(0, 0, canvas.width, canvas.height);
      cx2.fillStyle = this.onCanvasColors.clipCircleBg;
      cx2.fillRect(0, 0, canvas.width, canvas.height);
      cx2.beginPath();
      cx2.moveTo(canvasCenter.x + circleRadius, canvasCenter.y);
      cx2.arc(canvasCenter.x, canvasCenter.y, circleRadius, 0, Math.PI * 2, true);
      cx2.save();
      cx2.clip();
      cx2.drawImage(
        this.$refs.canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter
      );
      cx2.restore();
    },
    extractEditedImage() {
      const { canvas, helperCanvas } = this.$refs;
      const { clipCircle } = this.ephemeral;
      const cx = helperCanvas.getContext("2d");
      cx.drawImage(
        canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        0,
        0,
        helperCanvas.width,
        helperCanvas.height
      );
      return imageDataURItoBlob(helperCanvas.toDataURL("image/jpeg"));
    },
    translate({ x = 0, y = 0 }) {
      this.ephemeral.canvas.onCanvas.origin.translation.x += x;
      this.ephemeral.canvas.onCanvas.origin.translation.y += y;
      this.adjustOriginTranslation();
      this.draw();
    },
    adjustOriginTranslation() {
      const { canvas, clipCircle } = this.ephemeral;
      const image = this.ephemeral.image.onCanvas;
      const originTranslation = canvas.onCanvas.origin.translation;
      const onCanvasCenter = { x: canvas.onCanvas.width / 2, y: canvas.onCanvas.height / 2 };
      const onCanvasImageTopLeft = {
        x: onCanvasCenter.x + originTranslation.x + image.x,
        y: onCanvasCenter.y + originTranslation.y + image.y
      };
      const onCanvasImageBottomRight = {
        x: onCanvasImageTopLeft.x + image.width,
        y: onCanvasImageTopLeft.y + image.height
      };
      if (onCanvasImageTopLeft.x > clipCircle.x) {
        originTranslation.x -= onCanvasImageTopLeft.x - clipCircle.x;
      } else if (onCanvasImageBottomRight.x < clipCircle.x + clipCircle.diameter) {
        originTranslation.x += clipCircle.x + clipCircle.diameter - onCanvasImageBottomRight.x;
      }
      if (onCanvasImageTopLeft.y > clipCircle.y) {
        originTranslation.y -= onCanvasImageTopLeft.y - clipCircle.y;
      } else if (onCanvasImageBottomRight.y < clipCircle.y + clipCircle.diameter) {
        originTranslation.y += clipCircle.y + clipCircle.diameter - onCanvasImageBottomRight.y;
      }
    }
  },
  created() {
    this.ephemeral.image.src = this.imageUrl || this.$route.query.imageUrl || "";
  },
  mounted() {
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-editor-canvas",
      on: {
        wheel: function($event) {
          $event.preventDefault();
          return _vm.$emit("pointer-wheel", $event);
        }
      }
    },
    [
      _vm.ephemeral.image.loaded ? [
        _c(
          "canvas",
          _vm._b(
            {
              ref: "canvas",
              staticClass: "c-canvas bottom",
              style: _vm.ephemeral.canvas.style,
              attrs: { "data-test": "imageCanvas" }
            },
            "canvas",
            _vm.canvasCommonAttrs,
            false
          )
        ),
        _c(
          "canvas",
          _vm._b(
            {
              ref: "clip",
              staticClass: "c-canvas top",
              style: _vm.ephemeral.canvas.style
            },
            "canvas",
            _vm.canvasCommonAttrs,
            false
          )
        )
      ] : _vm._e(),
      _c("div", { staticClass: "c-invisible-utils" }, [
        _c("img", {
          ref: "img",
          attrs: {
            "data-test": "imageHelperTag",
            src: _vm.ephemeral.image.src
          },
          on: { load: _vm.onImageLoad }
        }),
        _c("canvas", {
          ref: "helperCanvas",
          staticClass: "c-canvas-img-extract"
        })
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-d64c5fac_0", { source: ".c-editor-canvas[data-v-d64c5fac] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 15.625rem;\n  overflow: hidden;\n  cursor: move;\n}\n.c-canvas[data-v-d64c5fac] {\n  position: absolute;\n  touch-action: none;\n  top: 0;\n  left: 0;\n}\n.c-canvas.bottom[data-v-d64c5fac] {\n  filter: brightness(0.8) blur(4px);\n}\n.c-invisible-utils[data-v-d64c5fac] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  top: -10rem;\n  left: -10rem;\n  pointer-events: none;\n  overflow: hidden;\n}\n.c-canvas-img-extract[data-v-d64c5fac] {\n  position: absolute;\n}\n\n/*# sourceMappingURL=EditorCanvas.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/avatar-editor/EditorCanvas.vue", "EditorCanvas.vue"], "names": [], "mappings": "AA4SA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;AC3SA;AD8SA;EACA,kBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AC3SA;AD6SA;EACA,iCAAA;AC3SA;AD+SA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;AC5SA;AD+SA;EACA,kBAAA;AC5SA;;AAEA,2CAA2C", "file": "EditorCanvas.vue", "sourcesContent": [`<template lang="pug">
.c-editor-canvas(
  @wheel.prevent='$emit("pointer-wheel", $event)'
)
  template(v-if='ephemeral.image.loaded')
    canvas.c-canvas.bottom(
      data-test='imageCanvas'
      ref='canvas'
      :style='ephemeral.canvas.style'
      v-bind='canvasCommonAttrs'
    )

    canvas.c-canvas.top(
      ref='clip'
      :style='ephemeral.canvas.style'
      v-bind='canvasCommonAttrs'
    )

  .c-invisible-utils
    img(ref='img' data-test='imageHelperTag' :src='ephemeral.image.src' @load='onImageLoad')
    canvas.c-canvas-img-extract(ref='helperCanvas')
</template>

<script>
import { mapGetters } from 'vuex'
import { imageDataURItoBlob } from '../../../../frontend/utils/image.js'
import { EDITED_AVATAR_DIAMETER } from './avatar-editor-constants.js'
import pointerEventsMixinFactory from '../../../../frontend/views/utils/pointerEventsMixins.js'

export default {
  name: 'AvatarEditorCanvas',
  mixins: [pointerEventsMixinFactory()],
  data () {
    return {
      ephemeral: {
        image: {
          src: '',
          loaded: false,
          intrinsic: { width: null, height: null, aspectRatio: null },
          onCanvas: { x: null, y: null, width: null, height: null }
        },
        canvas: {
          style: { width: null, height: null },
          onCanvas: {
            width: null,
            height: null,
            origin: {
              translation: { x: 0, y: 0 },
              rotation: 0
            }
          },
          boundingRect: null
        },
        clipCircle: {
          x: null,
          y: null,
          diameter: 0
        }
      }
    }
  },
  props: {
    zoom: {
      type: Number,
      required: false,
      default: 1
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  watch: {
    zoom () {
      this.calculate()
      this.draw()
    }
  },
  computed: {
    ...mapGetters([
      'isDarkTheme',
      'colors'
    ]),
    canvasCommonAttrs () {
      return {
        width: this.ephemeral.canvas.onCanvas.width,
        height: this.ephemeral.canvas.onCanvas.height
      }
    },
    isWiderThanTaller () {
      const img = this.ephemeral.image
      return img.loaded && img.intrinsic.aspectRatio <= 1
    },
    onCanvasColors () {
      return {
        clipCircleBg: this.isDarkTheme ? 'rgba(46, 48, 50, 0.5)' : 'rgba(245, 245, 245, 0.5)', // $general_2 with opacity .5
        canvasBg: this.colors['general_2']
      }
    }
  },
  methods: {
    onImageLoad () {
      // once the image is loaded, extract the image info regarding the intrinsic size that are needed in
      // calculation of the iamge drawn on the canvas.
      const img = this.ephemeral.image
      const { naturalWidth, naturalHeight } = this.$refs.img

      img.loaded = true
      img.intrinsic.width = naturalWidth
      img.intrinsic.height = naturalHeight
      img.intrinsic.aspectRatio = naturalHeight / naturalWidth

      // init helper-canvas
      this.$refs.helperCanvas.width = EDITED_AVATAR_DIAMETER
      this.$refs.helperCanvas.height = EDITED_AVATAR_DIAMETER

      this.$nextTick(() => {
        this.calculate()
        this.draw()
      })
    },
    onWindowResize () {
      const pixelRatio = window.devicePixelRatio || 1
      const rootElComputedStyle = window.getComputedStyle(this.$el)
      const extractStyle = prop => parseFloat(rootElComputedStyle.getPropertyValue(prop))

      // canvas css width & height has to be the same as thier container
      this.ephemeral.canvas.style.width = \`\${extractStyle('width')}px\`
      this.ephemeral.canvas.style.height = \`\${extractStyle('height')}px\`
      // if window.devicePixelRatio is not taken into account in the on-canvas dimensions, the image gets blurry
      // (reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#examples)
      this.ephemeral.canvas.onCanvas.width = extractStyle('width') * pixelRatio
      this.ephemeral.canvas.onCanvas.height = extractStyle('height') * pixelRatio

      if (this.ephemeral.image.loaded) {
        this.$nextTick(() => {
          // re. the usage of $nextTick() here:
          // painting on canvas has to be deferred until canvas DOM size has been updated. (it's a bug-fix)
          this.calculate()
          this.draw()
        })
      }
    },
    calculate (isForZoomChange = false) {
      const { image, clipCircle } = this.ephemeral
      const canvas = this.ephemeral.canvas.onCanvas
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 }

      // calculate various on-canvas values of the image
      image.onCanvas.width = canvas.height * (1 / image.intrinsic.aspectRatio) // always respect the instrinsic aspect ratio of the image
      image.onCanvas.height = canvas.height

      // calculate the values of the clipping clipping circle
      if (this.isWiderThanTaller) {
        clipCircle.diameter = canvas.height
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2
        clipCircle.y = 0
      } else {
        clipCircle.diameter = image.onCanvas.width
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2
        clipCircle.y = canvasCenter.y - clipCircle.diameter / 2
      }

      // scale the on-canvas image dimension based on the current zoom value
      if (this.zoom > 1) {
        image.onCanvas.width *= this.zoom
        image.onCanvas.height *= this.zoom
      }

      // center the on-canvas image relative to the canvas origin
      image.onCanvas.x = -1 * (image.onCanvas.width / 2)
      image.onCanvas.y = -1 * (image.onCanvas.height / 2)

      this.adjustOriginTranslation()
    },
    draw () {
      const cx = this.$refs.canvas.getContext('2d')
      const image = this.ephemeral.image.onCanvas
      const canvas = this.ephemeral.canvas.onCanvas
      const clipCircle = this.ephemeral.clipCircle
      const circleRadius = clipCircle.diameter / 2
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 }

      cx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. draw the background
      cx.fillStyle = this.onCanvasColors.canvasBg
      cx.fillRect(0, 0, canvas.width, canvas.height)

      // 2. apply origin transformation to the bottom canvas
      cx.save()
      cx.translate(
        canvasCenter.x + canvas.origin.translation.x,
        canvasCenter.y + canvas.origin.translation.y
      )

      // 3. paint the image on the bottom canvas
      cx.drawImage(this.$refs.img, image.x, image.y, image.width, image.height)
      cx.restore()

      // 4. draw a mask on the top canvas
      const cx2 = this.$refs.clip.getContext('2d')
      cx2.clearRect(0, 0, canvas.width, canvas.height)
      cx2.fillStyle = this.onCanvasColors.clipCircleBg
      cx2.fillRect(0, 0, canvas.width, canvas.height)

      // 5. paint the image again on the top canvas with a circlular clipping-path applied
      cx2.beginPath()
      cx2.moveTo(canvasCenter.x + circleRadius, canvasCenter.y)
      cx2.arc(canvasCenter.x, canvasCenter.y, circleRadius, 0, Math.PI * 2, true)
      cx2.save()
      cx2.clip()
      cx2.drawImage(
        this.$refs.canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter
      )
      cx2.restore()
    },
    extractEditedImage () {
      const { canvas, helperCanvas } = this.$refs
      const { clipCircle } = this.ephemeral
      const cx = helperCanvas.getContext('2d')

      cx.drawImage(
        canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        0,
        0,
        helperCanvas.width,
        helperCanvas.height
      )

      return imageDataURItoBlob(helperCanvas.toDataURL('image/jpeg'))
    },
    translate ({ x = 0, y = 0 }) {
      this.ephemeral.canvas.onCanvas.origin.translation.x += x
      this.ephemeral.canvas.onCanvas.origin.translation.y += y

      this.adjustOriginTranslation()
      this.draw()
    },
    adjustOriginTranslation () {
      // limit translating of image to the points where the clipping circle never goes beyond
      // the bounding-box of the on-canvas image.

      const { canvas, clipCircle } = this.ephemeral
      const image = this.ephemeral.image.onCanvas
      const originTranslation = canvas.onCanvas.origin.translation
      const onCanvasCenter = { x: canvas.onCanvas.width / 2, y: canvas.onCanvas.height / 2 }

      const onCanvasImageTopLeft = {
        x: onCanvasCenter.x + originTranslation.x + image.x,
        y: onCanvasCenter.y + originTranslation.y + image.y
      }
      const onCanvasImageBottomRight = {
        x: onCanvasImageTopLeft.x + image.width,
        y: onCanvasImageTopLeft.y + image.height
      }

      // if the applied translation makes the image go beyond its limit,
      // adjust the value of the translation.
      if (onCanvasImageTopLeft.x > clipCircle.x) {
        originTranslation.x -= (onCanvasImageTopLeft.x - clipCircle.x)
      } else if (onCanvasImageBottomRight.x < (clipCircle.x + clipCircle.diameter)) {
        originTranslation.x += ((clipCircle.x + clipCircle.diameter) - onCanvasImageBottomRight.x)
      }

      if (onCanvasImageTopLeft.y > clipCircle.y) {
        originTranslation.y -= (onCanvasImageTopLeft.y - clipCircle.y)
      } else if (onCanvasImageBottomRight.y < (clipCircle.y + clipCircle.diameter)) {
        originTranslation.y += ((clipCircle.y + clipCircle.diameter) - onCanvasImageBottomRight.y)
      }
    }
  },
  created () {
    this.ephemeral.image.src = this.imageUrl || this.$route.query.imageUrl || ''
  },
  mounted () {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-editor-canvas {
  position: relative;
  display: block;
  width: 100%;
  height: 15.625rem;
  overflow: hidden;
  cursor: move;
}

.c-canvas {
  position: absolute;
  touch-action: none;
  top: 0;
  left: 0;

  &.bottom {
    filter: brightness(0.8) blur(4px);
  }
}

.c-invisible-utils {
  position: absolute;
  width: 1px;
  height: 1px;
  top: -10rem;
  left: -10rem;
  pointer-events: none;
  overflow: hidden;
}

.c-canvas-img-extract {
  position: absolute;
}
</style>
`, ".c-editor-canvas {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 15.625rem;\n  overflow: hidden;\n  cursor: move;\n}\n\n.c-canvas {\n  position: absolute;\n  touch-action: none;\n  top: 0;\n  left: 0;\n}\n.c-canvas.bottom {\n  filter: brightness(0.8) blur(4px);\n}\n\n.c-invisible-utils {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  top: -10rem;\n  left: -10rem;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.c-canvas-img-extract {\n  position: absolute;\n}\n\n/*# sourceMappingURL=EditorCanvas.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-d64c5fac";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-editor-canvas(
  @wheel.prevent='$emit("pointer-wheel", $event)'
)
  template(v-if='ephemeral.image.loaded')
    canvas.c-canvas.bottom(
      data-test='imageCanvas'
      ref='canvas'
      :style='ephemeral.canvas.style'
      v-bind='canvasCommonAttrs'
    )

    canvas.c-canvas.top(
      ref='clip'
      :style='ephemeral.canvas.style'
      v-bind='canvasCommonAttrs'
    )

  .c-invisible-utils
    img(ref='img' data-test='imageHelperTag' :src='ephemeral.image.src' @load='onImageLoad')
    canvas.c-canvas-img-extract(ref='helperCanvas')
</template>

<script>
import { mapGetters } from 'vuex'
import { imageDataURItoBlob } from '../../../../frontend/utils/image.js'
import { EDITED_AVATAR_DIAMETER } from './avatar-editor-constants.js'
import pointerEventsMixinFactory from '../../../../frontend/views/utils/pointerEventsMixins.js'

export default {
  name: 'AvatarEditorCanvas',
  mixins: [pointerEventsMixinFactory()],
  data () {
    return {
      ephemeral: {
        image: {
          src: '',
          loaded: false,
          intrinsic: { width: null, height: null, aspectRatio: null },
          onCanvas: { x: null, y: null, width: null, height: null }
        },
        canvas: {
          style: { width: null, height: null },
          onCanvas: {
            width: null,
            height: null,
            origin: {
              translation: { x: 0, y: 0 },
              rotation: 0
            }
          },
          boundingRect: null
        },
        clipCircle: {
          x: null,
          y: null,
          diameter: 0
        }
      }
    }
  },
  props: {
    zoom: {
      type: Number,
      required: false,
      default: 1
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  watch: {
    zoom () {
      this.calculate()
      this.draw()
    }
  },
  computed: {
    ...mapGetters([
      'isDarkTheme',
      'colors'
    ]),
    canvasCommonAttrs () {
      return {
        width: this.ephemeral.canvas.onCanvas.width,
        height: this.ephemeral.canvas.onCanvas.height
      }
    },
    isWiderThanTaller () {
      const img = this.ephemeral.image
      return img.loaded && img.intrinsic.aspectRatio <= 1
    },
    onCanvasColors () {
      return {
        clipCircleBg: this.isDarkTheme ? 'rgba(46, 48, 50, 0.5)' : 'rgba(245, 245, 245, 0.5)', // $general_2 with opacity .5
        canvasBg: this.colors['general_2']
      }
    }
  },
  methods: {
    onImageLoad () {
      // once the image is loaded, extract the image info regarding the intrinsic size that are needed in
      // calculation of the iamge drawn on the canvas.
      const img = this.ephemeral.image
      const { naturalWidth, naturalHeight } = this.$refs.img

      img.loaded = true
      img.intrinsic.width = naturalWidth
      img.intrinsic.height = naturalHeight
      img.intrinsic.aspectRatio = naturalHeight / naturalWidth

      // init helper-canvas
      this.$refs.helperCanvas.width = EDITED_AVATAR_DIAMETER
      this.$refs.helperCanvas.height = EDITED_AVATAR_DIAMETER

      this.$nextTick(() => {
        this.calculate()
        this.draw()
      })
    },
    onWindowResize () {
      const pixelRatio = window.devicePixelRatio || 1
      const rootElComputedStyle = window.getComputedStyle(this.$el)
      const extractStyle = prop => parseFloat(rootElComputedStyle.getPropertyValue(prop))

      // canvas css width & height has to be the same as thier container
      this.ephemeral.canvas.style.width = \`\${extractStyle('width')}px\`
      this.ephemeral.canvas.style.height = \`\${extractStyle('height')}px\`
      // if window.devicePixelRatio is not taken into account in the on-canvas dimensions, the image gets blurry
      // (reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#examples)
      this.ephemeral.canvas.onCanvas.width = extractStyle('width') * pixelRatio
      this.ephemeral.canvas.onCanvas.height = extractStyle('height') * pixelRatio

      if (this.ephemeral.image.loaded) {
        this.$nextTick(() => {
          // re. the usage of $nextTick() here:
          // painting on canvas has to be deferred until canvas DOM size has been updated. (it's a bug-fix)
          this.calculate()
          this.draw()
        })
      }
    },
    calculate (isForZoomChange = false) {
      const { image, clipCircle } = this.ephemeral
      const canvas = this.ephemeral.canvas.onCanvas
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 }

      // calculate various on-canvas values of the image
      image.onCanvas.width = canvas.height * (1 / image.intrinsic.aspectRatio) // always respect the instrinsic aspect ratio of the image
      image.onCanvas.height = canvas.height

      // calculate the values of the clipping clipping circle
      if (this.isWiderThanTaller) {
        clipCircle.diameter = canvas.height
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2
        clipCircle.y = 0
      } else {
        clipCircle.diameter = image.onCanvas.width
        clipCircle.x = canvasCenter.x - clipCircle.diameter / 2
        clipCircle.y = canvasCenter.y - clipCircle.diameter / 2
      }

      // scale the on-canvas image dimension based on the current zoom value
      if (this.zoom > 1) {
        image.onCanvas.width *= this.zoom
        image.onCanvas.height *= this.zoom
      }

      // center the on-canvas image relative to the canvas origin
      image.onCanvas.x = -1 * (image.onCanvas.width / 2)
      image.onCanvas.y = -1 * (image.onCanvas.height / 2)

      this.adjustOriginTranslation()
    },
    draw () {
      const cx = this.$refs.canvas.getContext('2d')
      const image = this.ephemeral.image.onCanvas
      const canvas = this.ephemeral.canvas.onCanvas
      const clipCircle = this.ephemeral.clipCircle
      const circleRadius = clipCircle.diameter / 2
      const canvasCenter = { x: canvas.width / 2, y: canvas.height / 2 }

      cx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. draw the background
      cx.fillStyle = this.onCanvasColors.canvasBg
      cx.fillRect(0, 0, canvas.width, canvas.height)

      // 2. apply origin transformation to the bottom canvas
      cx.save()
      cx.translate(
        canvasCenter.x + canvas.origin.translation.x,
        canvasCenter.y + canvas.origin.translation.y
      )

      // 3. paint the image on the bottom canvas
      cx.drawImage(this.$refs.img, image.x, image.y, image.width, image.height)
      cx.restore()

      // 4. draw a mask on the top canvas
      const cx2 = this.$refs.clip.getContext('2d')
      cx2.clearRect(0, 0, canvas.width, canvas.height)
      cx2.fillStyle = this.onCanvasColors.clipCircleBg
      cx2.fillRect(0, 0, canvas.width, canvas.height)

      // 5. paint the image again on the top canvas with a circlular clipping-path applied
      cx2.beginPath()
      cx2.moveTo(canvasCenter.x + circleRadius, canvasCenter.y)
      cx2.arc(canvasCenter.x, canvasCenter.y, circleRadius, 0, Math.PI * 2, true)
      cx2.save()
      cx2.clip()
      cx2.drawImage(
        this.$refs.canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter
      )
      cx2.restore()
    },
    extractEditedImage () {
      const { canvas, helperCanvas } = this.$refs
      const { clipCircle } = this.ephemeral
      const cx = helperCanvas.getContext('2d')

      cx.drawImage(
        canvas,
        clipCircle.x,
        clipCircle.y,
        clipCircle.diameter,
        clipCircle.diameter,
        0,
        0,
        helperCanvas.width,
        helperCanvas.height
      )

      return imageDataURItoBlob(helperCanvas.toDataURL('image/jpeg'))
    },
    translate ({ x = 0, y = 0 }) {
      this.ephemeral.canvas.onCanvas.origin.translation.x += x
      this.ephemeral.canvas.onCanvas.origin.translation.y += y

      this.adjustOriginTranslation()
      this.draw()
    },
    adjustOriginTranslation () {
      // limit translating of image to the points where the clipping circle never goes beyond
      // the bounding-box of the on-canvas image.

      const { canvas, clipCircle } = this.ephemeral
      const image = this.ephemeral.image.onCanvas
      const originTranslation = canvas.onCanvas.origin.translation
      const onCanvasCenter = { x: canvas.onCanvas.width / 2, y: canvas.onCanvas.height / 2 }

      const onCanvasImageTopLeft = {
        x: onCanvasCenter.x + originTranslation.x + image.x,
        y: onCanvasCenter.y + originTranslation.y + image.y
      }
      const onCanvasImageBottomRight = {
        x: onCanvasImageTopLeft.x + image.width,
        y: onCanvasImageTopLeft.y + image.height
      }

      // if the applied translation makes the image go beyond its limit,
      // adjust the value of the translation.
      if (onCanvasImageTopLeft.x > clipCircle.x) {
        originTranslation.x -= (onCanvasImageTopLeft.x - clipCircle.x)
      } else if (onCanvasImageBottomRight.x < (clipCircle.x + clipCircle.diameter)) {
        originTranslation.x += ((clipCircle.x + clipCircle.diameter) - onCanvasImageBottomRight.x)
      }

      if (onCanvasImageTopLeft.y > clipCircle.y) {
        originTranslation.y -= (onCanvasImageTopLeft.y - clipCircle.y)
      } else if (onCanvasImageBottomRight.y < (clipCircle.y + clipCircle.diameter)) {
        originTranslation.y += ((clipCircle.y + clipCircle.diameter) - onCanvasImageBottomRight.y)
      }
    }
  },
  created () {
    this.ephemeral.image.src = this.imageUrl || this.$route.query.imageUrl || ''
  },
  mounted () {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-editor-canvas {
  position: relative;
  display: block;
  width: 100%;
  height: 15.625rem;
  overflow: hidden;
  cursor: move;
}

.c-canvas {
  position: absolute;
  touch-action: none;
  top: 0;
  left: 0;

  &.bottom {
    filter: brightness(0.8) blur(4px);
  }
}

.c-invisible-utils {
  position: absolute;
  width: 1px;
  height: 1px;
  top: -10rem;
  left: -10rem;
  pointer-events: none;
  overflow: hidden;
}

.c-canvas-img-extract {
  position: absolute;
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
var EditorCanvas_default = __vue_component__;

// frontend/views/components/avatar-editor/AvatarEditorModal.vue
var zoomCalculator = linearScale([ZOOM_SLIDER_MIN, ZOOM_SLIDER_MAX], [IMAGE_SCALE_MIN, IMAGE_SCALE_MAX]);
var __vue_script__2 = {
  name: "AvatarEditor",
  components: {
    ModalTemplate: ModalTemplate_default,
    ButtonSubmit: ButtonSubmit_default,
    SliderContinuous: SliderContinuous_default,
    EditorCanvas: EditorCanvas_default
  },
  data() {
    return {
      config: {
        sliderMin: ZOOM_SLIDER_MIN,
        sliderMax: ZOOM_SLIDER_MAX
      },
      form: {
        slider: ZOOM_SLIDER_MIN
      },
      ephemeral: {
        replaceImageUrl: "",
        // 'canvasComponentKey' below is updated every time a new image is loaded and is used to destory/re-render the children components.
        canvasComponentKey: randomHexString(10)
      }
    };
  },
  computed: {
    zoom() {
      return zoomCalculator(this.form.slider);
    }
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    onReplacePhotoClick() {
      this.$refs.replacePhotoInput.click();
    },
    submit() {
      const blob = this.$refs.editorCanvas.extractEditedImage();
      esm_default("okTurtles.events/emit", AVATAR_EDITED, { blob, avatarType: this.$route.query.avatarType || "" });
      this.close();
    },
    onSliderInput(e) {
      this.form.slider = parseFloat(e.target.value);
    },
    incrementSlider(incVal = 1) {
      this.form.slider = Math.min(ZOOM_SLIDER_MAX, this.form.slider + incVal);
      this.$refs.slider.updateSlider(this.form.slider);
    },
    decrementSlider(decVal = 1) {
      this.form.slider = Math.max(ZOOM_SLIDER_MIN, this.form.slider - decVal);
      this.$refs.slider.updateSlider(this.form.slider);
    },
    HandleWheelOnCanvas({ deltaY }) {
      if (deltaY < 0) this.incrementSlider(3);
      else this.decrementSlider(3);
    },
    loadPhotoChange(fileList) {
      if (!fileList.length) return;
      if (this.ephemeral.replaceImageUrl) {
        URL.revokeObjectURL(this.ephemeral.replaceImageUrl);
      }
      this.ephemeral.replaceImageUrl = URL.createObjectURL(fileList[0]);
      this.form.slider = ZOOM_SLIDER_MIN;
      this.ephemeral.canvasComponentKey = randomHexString(10);
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    {
      ref: "modal",
      staticClass: "is-centered",
      attrs: {
        "data-test": "AvatarEditorModal",
        a11yTitle: _vm.L("Edit avatar")
      }
    },
    [
      _c(
        "template",
        { slot: "title" },
        [_c("i18n", [_vm._v("Edit avatar")])],
        1
      ),
      _c("input", {
        ref: "replacePhotoInput",
        staticClass: "sr-only",
        attrs: {
          type: "file",
          name: "load-photo",
          accept: "image/*",
          "data-test-id": "replacePhotoInput"
        },
        on: {
          change: function($event) {
            return _vm.loadPhotoChange($event.target.files);
          }
        }
      }),
      _c(
        "form",
        {
          staticClass: "c-form",
          on: {
            submit: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _c("editor-canvas", {
            key: _vm.ephemeral.canvasComponentKey,
            ref: "editorCanvas",
            staticClass: "c-canvas-container",
            attrs: { zoom: _vm.zoom, imageUrl: _vm.ephemeral.replaceImageUrl },
            on: {
              "pointer-wheel": _vm.HandleWheelOnCanvas,
              "pinch-in": function($event) {
                return _vm.decrementSlider(4);
              },
              "pinch-out": function($event) {
                return _vm.incrementSlider(4);
              }
            }
          }),
          _c(
            "div",
            { staticClass: "c-slider-container" },
            [
              _c(
                "button",
                {
                  staticClass: "is-icon-small",
                  on: {
                    pointerdown: function($event) {
                      return _vm.decrementSlider();
                    }
                  }
                },
                [_c("i", { staticClass: "icon-magnifying-minus" })]
              ),
              _c("slider-continuous", {
                key: _vm.ephemeral.canvasComponentKey + "-slider",
                ref: "slider",
                staticClass: "c-slider",
                attrs: {
                  hideText: true,
                  uid: "avatar-zoom",
                  min: _vm.config.sliderMin,
                  max: _vm.config.sliderMax,
                  value: _vm.form.slider
                },
                on: { input: _vm.onSliderInput }
              }),
              _c(
                "button",
                {
                  staticClass: "is-icon-small",
                  on: {
                    pointerdown: function($event) {
                      return _vm.incrementSlider();
                    }
                  }
                },
                [_c("i", { staticClass: "icon-magnifying-plus" })]
              )
            ],
            1
          ),
          _c(
            "i18n",
            {
              staticClass: "has-text-1 hide-touch-device",
              attrs: { tag: "p" }
            },
            [_vm._v("Click and drag to reposition")]
          ),
          _c(
            "i18n",
            {
              staticClass: "has-text-1 hide-hoverable-device",
              attrs: { tag: "p" }
            },
            [_vm._v("Pinch to zoom, drag to reposition")]
          ),
          _c(
            "div",
            { staticClass: "buttons" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-outlined",
                  attrs: { tag: "button" },
                  on: { click: _vm.onReplacePhotoClick }
                },
                [_vm._v("Replace photo")]
              ),
              _c(
                "button-submit",
                {
                  key: "save",
                  attrs: { "data-test": "saveBtn" },
                  on: { click: _vm.submit }
                },
                [_c("i18n", [_vm._v("Save")])],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-4893305c_0", { source: ".c-form[data-v-4893305c] {\n  max-width: 25rem;\n  width: 100%;\n  margin: 0 auto;\n}\n.c-canvas-container[data-v-4893305c] {\n  position: relative;\n  opacity: 0.7;\n  height: 15.625rem;\n  margin-bottom: 0.5rem;\n}\n.c-slider-container[data-v-4893305c] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.buttons[data-v-4893305c] {\n  margin-top: 2rem;\n}\n.c-slider[data-v-4893305c] {\n  flex-grow: 1;\n}\n.c-slider[data-v-4893305c]  .marks {\n  margin-top: -0.5rem;\n}\n\n/*# sourceMappingURL=AvatarEditorModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/avatar-editor/AvatarEditorModal.vue", "AvatarEditorModal.vue"], "names": [], "mappings": "AAkKA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;ACjKA;ADoKA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;ACjKA;ADoKA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,WAAA;EACA,qBAAA;ACjKA;ADoKA;EACA,gBAAA;ACjKA;ADoKA;EACA,YAAA;ACjKA;ADmKA;EACA,mBAAA;ACjKA;;AAEA,gDAAgD", "file": "AvatarEditorModal.vue", "sourcesContent": [`<template lang="pug">
modal-template(
  class='is-centered'
  ref='modal'
  data-test='AvatarEditorModal'
  :a11yTitle='L("Edit avatar")'
)
  template(slot='title')
    i18n Edit avatar

  input.sr-only(
    ref='replacePhotoInput'
    type='file'
    name='load-photo'
    accept='image/*'
    @change='loadPhotoChange($event.target.files)'
    data-test-id='replacePhotoInput'
  )

  form.c-form(@submit.prevent='')
    editor-canvas.c-canvas-container(
      :key='ephemeral.canvasComponentKey'
      ref='editorCanvas'
      :zoom='zoom'
      :imageUrl='ephemeral.replaceImageUrl'
      @pointer-wheel='HandleWheelOnCanvas'
      @pinch-in='decrementSlider(4)'
      @pinch-out='incrementSlider(4)'
    )

    .c-slider-container
      button.is-icon-small(@pointerdown='decrementSlider()')
        i.icon-magnifying-minus

      slider-continuous.c-slider(
        :key='ephemeral.canvasComponentKey + "-slider"'
        ref='slider'
        :hideText='true'
        uid='avatar-zoom'
        :min='config.sliderMin'
        :max='config.sliderMax'
        :value='form.slider'
        @input='onSliderInput'
      )

      button.is-icon-small(@pointerdown='incrementSlider()')
        i.icon-magnifying-plus

    i18n.has-text-1.hide-touch-device(tag='p') Click and drag to reposition
    i18n.has-text-1.hide-hoverable-device(tag='p') Pinch to zoom, drag to reposition

    .buttons
      i18n.is-outlined(
        tag='button'
        @click='onReplacePhotoClick'
      ) Replace photo

      button-submit(
        key='save'
        data-test='saveBtn'
        @click='submit'
      )
        i18n Save
</template>

<script>
import sbp from '@sbp/sbp'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import SliderContinuous from '../../../../frontend/views/components/SliderContinuous.vue'
import EditorCanvas from './EditorCanvas.vue'
import { linearScale, randomHexString } from 'turtledash'
import { AVATAR_EDITED } from '../../../../frontend/utils/events.js'
import { ZOOM_SLIDER_MIN, ZOOM_SLIDER_MAX, IMAGE_SCALE_MIN, IMAGE_SCALE_MAX } from './avatar-editor-constants.js'

const zoomCalculator = linearScale([ZOOM_SLIDER_MIN, ZOOM_SLIDER_MAX], [IMAGE_SCALE_MIN, IMAGE_SCALE_MAX])
/*
  e.g)
  if const zoomCalculator = linearScale([0, 100], [1, 5]),

  zoomCalculator(0) => 1,
  zoomCalculator(100) => 5,
  zoomCalculator(50) => 3 which is 1 + (5 - 1) * 0.5,
  zoomCalculator(25) => 2 which is 1 + (5 - 1) * 0.25,
*/

export default ({
  name: 'AvatarEditor',
  components: {
    ModalTemplate,
    ButtonSubmit,
    SliderContinuous,
    EditorCanvas
  },
  data () {
    return {
      config: {
        sliderMin: ZOOM_SLIDER_MIN,
        sliderMax: ZOOM_SLIDER_MAX
      },
      form: {
        slider: ZOOM_SLIDER_MIN
      },
      ephemeral: {
        replaceImageUrl: '',
        // 'canvasComponentKey' below is updated every time a new image is loaded and is used to destory/re-render the children components.
        canvasComponentKey: randomHexString(10)
      }
    }
  },
  computed: {
    zoom () {
      return zoomCalculator(this.form.slider)
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    onReplacePhotoClick () {
      this.$refs.replacePhotoInput.click()
    },
    submit () {
      const blob = this.$refs.editorCanvas.extractEditedImage()
      sbp('okTurtles.events/emit', AVATAR_EDITED, { blob, avatarType: this.$route.query.avatarType || '' })

      this.close()
    },
    onSliderInput (e) {
      this.form.slider = parseFloat(e.target.value)
    },
    incrementSlider (incVal = 1) {
      this.form.slider = Math.min(ZOOM_SLIDER_MAX, this.form.slider + incVal)
      this.$refs.slider.updateSlider(this.form.slider)
    },
    decrementSlider (decVal = 1) {
      this.form.slider = Math.max(ZOOM_SLIDER_MIN, this.form.slider - decVal)
      this.$refs.slider.updateSlider(this.form.slider)
    },
    HandleWheelOnCanvas ({ deltaY }) {
      if (deltaY < 0) this.incrementSlider(3)
      else this.decrementSlider(3)
    },
    loadPhotoChange (fileList) {
      if (!fileList.length) return

      if (this.ephemeral.replaceImageUrl) {
        // if there is an objectURL previously created,
        // make sure to destroy it before renewing it for better app performance.
        URL.revokeObjectURL(this.ephemeral.replaceImageUrl)
      }
      this.ephemeral.replaceImageUrl = URL.createObjectURL(fileList[0])
      this.form.slider = ZOOM_SLIDER_MIN // init the slider zoom value before re-rendering components
      this.ephemeral.canvasComponentKey = randomHexString(10)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-form {
  max-width: 25rem;
  width: 100%;
  margin: 0 auto;
}

.c-canvas-container {
  position: relative;
  opacity: 0.7;
  height: 15.625rem;
  margin-bottom: 0.5rem;
}

.c-slider-container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.buttons {
  margin-top: 2rem;
}

.c-slider {
  flex-grow: 1;

  ::v-deep .marks {
    margin-top: -0.5rem;
  }
}
</style>
`, ".c-form {\n  max-width: 25rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.c-canvas-container {\n  position: relative;\n  opacity: 0.7;\n  height: 15.625rem;\n  margin-bottom: 0.5rem;\n}\n\n.c-slider-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.buttons {\n  margin-top: 2rem;\n}\n\n.c-slider {\n  flex-grow: 1;\n}\n.c-slider ::v-deep .marks {\n  margin-top: -0.5rem;\n}\n\n/*# sourceMappingURL=AvatarEditorModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-4893305c";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
modal-template(
  class='is-centered'
  ref='modal'
  data-test='AvatarEditorModal'
  :a11yTitle='L("Edit avatar")'
)
  template(slot='title')
    i18n Edit avatar

  input.sr-only(
    ref='replacePhotoInput'
    type='file'
    name='load-photo'
    accept='image/*'
    @change='loadPhotoChange($event.target.files)'
    data-test-id='replacePhotoInput'
  )

  form.c-form(@submit.prevent='')
    editor-canvas.c-canvas-container(
      :key='ephemeral.canvasComponentKey'
      ref='editorCanvas'
      :zoom='zoom'
      :imageUrl='ephemeral.replaceImageUrl'
      @pointer-wheel='HandleWheelOnCanvas'
      @pinch-in='decrementSlider(4)'
      @pinch-out='incrementSlider(4)'
    )

    .c-slider-container
      button.is-icon-small(@pointerdown='decrementSlider()')
        i.icon-magnifying-minus

      slider-continuous.c-slider(
        :key='ephemeral.canvasComponentKey + "-slider"'
        ref='slider'
        :hideText='true'
        uid='avatar-zoom'
        :min='config.sliderMin'
        :max='config.sliderMax'
        :value='form.slider'
        @input='onSliderInput'
      )

      button.is-icon-small(@pointerdown='incrementSlider()')
        i.icon-magnifying-plus

    i18n.has-text-1.hide-touch-device(tag='p') Click and drag to reposition
    i18n.has-text-1.hide-hoverable-device(tag='p') Pinch to zoom, drag to reposition

    .buttons
      i18n.is-outlined(
        tag='button'
        @click='onReplacePhotoClick'
      ) Replace photo

      button-submit(
        key='save'
        data-test='saveBtn'
        @click='submit'
      )
        i18n Save
</template>

<script>
import sbp from '@sbp/sbp'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import SliderContinuous from '../../../../frontend/views/components/SliderContinuous.vue'
import EditorCanvas from './EditorCanvas.vue'
import { linearScale, randomHexString } from 'turtledash'
import { AVATAR_EDITED } from '../../../../frontend/utils/events.js'
import { ZOOM_SLIDER_MIN, ZOOM_SLIDER_MAX, IMAGE_SCALE_MIN, IMAGE_SCALE_MAX } from './avatar-editor-constants.js'

const zoomCalculator = linearScale([ZOOM_SLIDER_MIN, ZOOM_SLIDER_MAX], [IMAGE_SCALE_MIN, IMAGE_SCALE_MAX])
/*
  e.g)
  if const zoomCalculator = linearScale([0, 100], [1, 5]),

  zoomCalculator(0) => 1,
  zoomCalculator(100) => 5,
  zoomCalculator(50) => 3 which is 1 + (5 - 1) * 0.5,
  zoomCalculator(25) => 2 which is 1 + (5 - 1) * 0.25,
*/

export default ({
  name: 'AvatarEditor',
  components: {
    ModalTemplate,
    ButtonSubmit,
    SliderContinuous,
    EditorCanvas
  },
  data () {
    return {
      config: {
        sliderMin: ZOOM_SLIDER_MIN,
        sliderMax: ZOOM_SLIDER_MAX
      },
      form: {
        slider: ZOOM_SLIDER_MIN
      },
      ephemeral: {
        replaceImageUrl: '',
        // 'canvasComponentKey' below is updated every time a new image is loaded and is used to destory/re-render the children components.
        canvasComponentKey: randomHexString(10)
      }
    }
  },
  computed: {
    zoom () {
      return zoomCalculator(this.form.slider)
    }
  },
  methods: {
    close () {
      this.$refs.modal.close()
    },
    onReplacePhotoClick () {
      this.$refs.replacePhotoInput.click()
    },
    submit () {
      const blob = this.$refs.editorCanvas.extractEditedImage()
      sbp('okTurtles.events/emit', AVATAR_EDITED, { blob, avatarType: this.$route.query.avatarType || '' })

      this.close()
    },
    onSliderInput (e) {
      this.form.slider = parseFloat(e.target.value)
    },
    incrementSlider (incVal = 1) {
      this.form.slider = Math.min(ZOOM_SLIDER_MAX, this.form.slider + incVal)
      this.$refs.slider.updateSlider(this.form.slider)
    },
    decrementSlider (decVal = 1) {
      this.form.slider = Math.max(ZOOM_SLIDER_MIN, this.form.slider - decVal)
      this.$refs.slider.updateSlider(this.form.slider)
    },
    HandleWheelOnCanvas ({ deltaY }) {
      if (deltaY < 0) this.incrementSlider(3)
      else this.decrementSlider(3)
    },
    loadPhotoChange (fileList) {
      if (!fileList.length) return

      if (this.ephemeral.replaceImageUrl) {
        // if there is an objectURL previously created,
        // make sure to destroy it before renewing it for better app performance.
        URL.revokeObjectURL(this.ephemeral.replaceImageUrl)
      }
      this.ephemeral.replaceImageUrl = URL.createObjectURL(fileList[0])
      this.form.slider = ZOOM_SLIDER_MIN // init the slider zoom value before re-rendering components
      this.ephemeral.canvasComponentKey = randomHexString(10)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-form {
  max-width: 25rem;
  width: 100%;
  margin: 0 auto;
}

.c-canvas-container {
  position: relative;
  opacity: 0.7;
  height: 15.625rem;
  margin-bottom: 0.5rem;
}

.c-slider-container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.buttons {
  margin-top: 2rem;
}

.c-slider {
  flex-grow: 1;

  ::v-deep .marks {
    margin-top: -0.5rem;
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
var AvatarEditorModal_default = __vue_component__2;
export {
  AvatarEditorModal_default as default
};
//# sourceMappingURL=AvatarEditorModal-KOWJLGL5-cached.js.map
