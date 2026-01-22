import {
  throttle
} from "./chunk-MTWMQLQH-cached.js";

// frontend/views/utils/pointerEventsMixins.js
var PINCH_ZOOM_THRESHOLD = 2.5;
var PINCH_GESTURE = {
  OUT: "pinch-out",
  IN: "pinch-in"
};
var mixinGeneratorDefaultOpts = {
  pointerMoveOnWindow: false
};
var pointerEventsMixinFactory = (opts = mixinGeneratorDefaultOpts) => {
  return {
    data() {
      return {
        pointer: {
          evts: [],
          prevDistance: null,
          // tracking distance between two pointers when 'pinch' gesture is happening
          prevDistChangeFactor: null,
          prevPinchAction: null,
          prevPinchCenter: null
        },
        throttledHandlers: {
          pointerMove: throttle(this.onPointerMove, 5)
        },
        matchMedia: {
          handler: null,
          isTouch: false
        }
      };
    },
    methods: {
      onPointerDown(e) {
        const { pointerId, clientX, clientY } = e;
        this.pointer.evts.push({
          id: pointerId,
          prev: { x: clientX, y: clientY },
          current: { x: clientX, y: clientY }
        });
      },
      onPointerCancel(e) {
        this.pointer.evts = [];
        this.pointer.prevDistance = null;
        this.pointer.prevPinchCenter = null;
        this.pointer.prevDistChangeFactor = null;
        this.pointer.prevPinchAction = null;
        this.postPointerCancel && this.postPointerCancel();
      },
      onPointerMove(e) {
        if (!this.pointer.evts.length) return;
        const { pointerId, pointerType, clientX, clientY } = e;
        const { evts } = this.pointer;
        const evItem = evts.find(({ id }) => id === pointerId);
        if (!evItem) return;
        evItem.prev = { x: evItem.current.x, y: evItem.current.y };
        evItem.current = { x: clientX, y: clientY };
        if (evts.length === 1) {
          const adjustmentFactor = this.matchMedia.isTouch ? 1.5 : 1.1;
          this.translate({
            x: (evItem.current.x - evItem.prev.x) * adjustmentFactor,
            y: (evItem.current.y - evItem.prev.y) * adjustmentFactor
          });
          this.pointer.prevPinchCenter = null;
          this.pointer.prevDistance = null;
          this.pointer.prevDistChangeFactor = null;
          this.pointer.prevPinchAction = null;
        } else if (pointerType === "touch" && evts.length === 2) {
          const [evt1, evt2] = evts;
          const xDist = Math.abs(evt2.current.x - evt1.current.x);
          const yDist = Math.abs(evt2.current.y - evt1.current.y);
          const center = this.pointer.prevPinchCenter === null ? {
            x: Math.min(evt1.current.x, evt2.current.x) + xDist / 2,
            y: Math.min(evt1.current.y, evt2.current.y) + yDist / 2
          } : this.pointer.prevPinchCenter;
          if (this.pointer.prevPinchCenter === null) {
            this.pointer.prevPinchCenter = center;
          }
          const currentLinearDist = Math.sqrt(xDist * xDist + yDist * yDist);
          const prevLinearDist = this.pointer.prevDistance || currentLinearDist;
          const currPinchAction = currentLinearDist - prevLinearDist > PINCH_ZOOM_THRESHOLD ? PINCH_GESTURE.OUT : currentLinearDist - prevLinearDist < PINCH_ZOOM_THRESHOLD * -1 ? PINCH_GESTURE.IN : null;
          const distChangeFactorCalc = Math.abs(currentLinearDist - prevLinearDist);
          const changeFactorTooLarge = currPinchAction === this.pointer.prevPinchAction && this.pointer.prevDistChangeFactor > 0 && distChangeFactorCalc > this.pointer.prevDistChangeFactor * 3;
          if (changeFactorTooLarge) {
            return;
          }
          const args = { changeFactor: distChangeFactorCalc, center };
          this.pointer.prevDistChangeFactor = distChangeFactorCalc;
          if (currPinchAction === PINCH_GESTURE.OUT) {
            this.$emit("pinch-out", args);
            this.pinchOutHandler && this.pinchOutHandler(args);
          } else if (currPinchAction === PINCH_GESTURE.IN) {
            this.$emit("pinch-in", args);
            this.pinchInHandler && this.pinchInHandler(args);
          }
          this.pointer.prevDistance = currentLinearDist;
          this.pointer.prevPinchAction = currPinchAction;
        }
      }
    },
    mounted() {
      const moveEventEl = opts.pointerMoveOnWindow ? window : this.$el;
      this.$el.addEventListener("pointerdown", this.onPointerDown);
      moveEventEl.addEventListener("pointermove", this.throttledHandlers.pointerMove);
      moveEventEl.addEventListener("pointerup", this.onPointerCancel);
      this.$el.addEventListener("pointercancel", this.onPointerCancel);
      if (!opts.pointerMoveOnWindow) {
        this.$el.addEventListener("pointerout", this.onPointerCancel);
      }
      const checkTouch = window.matchMedia("(any-pointer:fine)");
      this.matchMedia.isTouch = !checkTouch.matches;
      this.matchMedia.handler = checkTouch;
      checkTouch.onchange = (e) => {
        this.matchMedia.isTouch = !e.matches;
      };
    },
    beforeDestroy() {
      const moveEventEl = opts.pointerMoveOnWindow ? window : this.$el;
      this.$el.removeEventListener("pointerdown", this.onPointerDown);
      moveEventEl.removeEventListener("pointermove", this.throttledHandlers.pointerMove);
      moveEventEl.removeEventListener("pointerup", this.onPointerCancel);
      this.$el.removeEventListener("pointercancel", this.onPointerCancel);
      if (!opts.pointerMoveOnWindow) {
        this.$el.removeEventListener("pointerout", this.onPointerCancel);
      }
      this.matchMedia.handler.onchange = null;
    }
  };
};
var pointerEventsMixins_default = pointerEventsMixinFactory;

export {
  pointerEventsMixins_default
};
//# sourceMappingURL=chunk-GPFZY2FS-cached.js.map
