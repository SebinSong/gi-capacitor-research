import {
  __commonJS
} from "./chunk-MKFIN2WI-cached.js";

// node_modules/vue2-touch-events/index.js
var require_vue2_touch_events = __commonJS({
  "node_modules/vue2-touch-events/index.js"(exports, module) {
    function touchX(event) {
      if (event.type.indexOf("mouse") !== -1) {
        return event.clientX;
      }
      return event.touches[0].clientX;
    }
    function touchY(event) {
      if (event.type.indexOf("mouse") !== -1) {
        return event.clientY;
      }
      return event.touches[0].clientY;
    }
    var isPassiveSupported = function() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {
      }
      return supportsPassive;
    }();
    var vueTouchEvents = {
      install: function(Vue2, constructorOptions) {
        var globalOptions = Object.assign({}, {
          disableClick: false,
          tapTolerance: 10,
          // px
          swipeTolerance: 30,
          // px
          touchHoldTolerance: 400,
          // ms
          longTapTimeInterval: 400,
          // ms
          touchClass: ""
        }, constructorOptions);
        function touchStartEvent(event) {
          var $this = this.$$touchObj, isTouchEvent = event.type.indexOf("touch") >= 0, isMouseEvent = event.type.indexOf("mouse") >= 0, $el = this;
          if (isTouchEvent) {
            $this.lastTouchStartTime = event.timeStamp;
          }
          if (isMouseEvent && $this.lastTouchStartTime && event.timeStamp - $this.lastTouchStartTime < 350) {
            return;
          }
          if ($this.touchStarted) {
            return;
          }
          addTouchClass(this);
          $this.touchStarted = true;
          $this.touchMoved = false;
          $this.swipeOutBounded = false;
          $this.startX = touchX(event);
          $this.startY = touchY(event);
          $this.currentX = 0;
          $this.currentY = 0;
          $this.touchStartTime = event.timeStamp;
          $this.touchHoldTimer = setTimeout(function() {
            $this.touchHoldTimer = null;
            triggerEvent(event, $el, "touchhold");
          }, $this.options.touchHoldTolerance);
          triggerEvent(event, this, "start");
        }
        function touchMoveEvent(event) {
          var $this = this.$$touchObj;
          $this.currentX = touchX(event);
          $this.currentY = touchY(event);
          if (!$this.touchMoved) {
            var tapTolerance = $this.options.tapTolerance;
            $this.touchMoved = Math.abs($this.startX - $this.currentX) > tapTolerance || Math.abs($this.startY - $this.currentY) > tapTolerance;
            if ($this.touchMoved) {
              cancelTouchHoldTimer($this);
              triggerEvent(event, this, "moved");
            }
          } else if (!$this.swipeOutBounded) {
            var swipeOutBounded = $this.options.swipeTolerance;
            $this.swipeOutBounded = Math.abs($this.startX - $this.currentX) > swipeOutBounded && Math.abs($this.startY - $this.currentY) > swipeOutBounded;
          }
          if ($this.touchMoved) {
            triggerEvent(event, this, "moving");
          }
        }
        function touchCancelEvent() {
          var $this = this.$$touchObj;
          cancelTouchHoldTimer($this);
          removeTouchClass(this);
          $this.touchStarted = $this.touchMoved = false;
          $this.startX = $this.startY = 0;
        }
        function touchEndEvent(event) {
          var $this = this.$$touchObj, isTouchEvent = event.type.indexOf("touch") >= 0, isMouseEvent = event.type.indexOf("mouse") >= 0;
          if (isTouchEvent) {
            $this.lastTouchEndTime = event.timeStamp;
          }
          var touchholdEnd = isTouchEvent && !$this.touchHoldTimer;
          cancelTouchHoldTimer($this);
          $this.touchStarted = false;
          removeTouchClass(this);
          if (isMouseEvent && $this.lastTouchEndTime && event.timeStamp - $this.lastTouchEndTime < 350) {
            return;
          }
          triggerEvent(event, this, "end");
          if (!$this.touchMoved) {
            if ($this.callbacks.longtap && event.timeStamp - $this.touchStartTime > $this.options.longTapTimeInterval) {
              if (event.cancelable) {
                event.preventDefault();
              }
              triggerEvent(event, this, "longtap");
            } else if ($this.callbacks.touchhold && touchholdEnd) {
              if (event.cancelable) {
                event.preventDefault();
              }
              return;
            } else {
              triggerEvent(event, this, "tap");
            }
          } else if (!$this.swipeOutBounded) {
            var swipeOutBounded = $this.options.swipeTolerance, direction;
            if (Math.abs($this.startX - $this.currentX) < swipeOutBounded) {
              direction = $this.startY > $this.currentY ? "top" : "bottom";
            } else {
              direction = $this.startX > $this.currentX ? "left" : "right";
            }
            if ($this.callbacks["swipe." + direction]) {
              triggerEvent(event, this, "swipe." + direction, direction);
            } else {
              triggerEvent(event, this, "swipe", direction);
            }
          }
        }
        function mouseEnterEvent() {
          addTouchClass(this);
        }
        function mouseLeaveEvent() {
          removeTouchClass(this);
        }
        function triggerEvent(e, $el, eventType, param) {
          var $this = $el.$$touchObj;
          var callbacks = $this.callbacks[eventType] || [];
          if (callbacks.length === 0) {
            return null;
          }
          for (var i = 0; i < callbacks.length; i++) {
            var binding = callbacks[i];
            if (binding.modifiers.stop) {
              e.stopPropagation();
            }
            if (binding.modifiers.prevent) {
              e.preventDefault();
            }
            if (binding.modifiers.self && e.target !== e.currentTarget) {
              continue;
            }
            if (typeof binding.value === "function") {
              if (param) {
                binding.value(param, e);
              } else {
                binding.value(e);
              }
            }
          }
        }
        function addTouchClass($el) {
          var className = $el.$$touchObj.options.touchClass;
          className && $el.classList.add(className);
        }
        function removeTouchClass($el) {
          var className = $el.$$touchObj.options.touchClass;
          className && $el.classList.remove(className);
        }
        function cancelTouchHoldTimer($this) {
          if ($this.touchHoldTimer) {
            clearTimeout($this.touchHoldTimer);
            $this.touchHoldTimer = null;
          }
        }
        function buildTouchObj($el, extraOptions) {
          var touchObj = $el.$$touchObj || {
            // an object contains all callbacks registered,
            // key is event name, value is an array
            callbacks: {},
            // prevent bind twice, set to true when event bound
            hasBindTouchEvents: false,
            // default options, would be override by v-touch-options
            options: globalOptions
          };
          if (extraOptions) {
            touchObj.options = Object.assign({}, touchObj.options, extraOptions);
          }
          $el.$$touchObj = touchObj;
          return $el.$$touchObj;
        }
        Vue2.directive("touch", {
          bind: function($el, binding) {
            var $this = buildTouchObj($el);
            var passiveOpt = isPassiveSupported ? { passive: true } : false;
            var eventType = binding.arg || "tap";
            switch (eventType) {
              case "swipe":
                var _m = binding.modifiers;
                if (_m.left || _m.right || _m.top || _m.bottom) {
                  for (var i in binding.modifiers) {
                    if (["left", "right", "top", "bottom"].indexOf(i) >= 0) {
                      var _e = "swipe." + i;
                      $this.callbacks[_e] = $this.callbacks[_e] || [];
                      $this.callbacks[_e].push(binding);
                    }
                  }
                } else {
                  $this.callbacks.swipe = $this.callbacks.swipe || [];
                  $this.callbacks.swipe.push(binding);
                }
                break;
              case "start":
              case "moving":
                if (binding.modifiers.disablePassive) {
                  passiveOpt = false;
                }
              default:
                $this.callbacks[eventType] = $this.callbacks[eventType] || [];
                $this.callbacks[eventType].push(binding);
            }
            if ($this.hasBindTouchEvents) {
              return;
            }
            $el.addEventListener("touchstart", touchStartEvent, passiveOpt);
            $el.addEventListener("touchmove", touchMoveEvent, passiveOpt);
            $el.addEventListener("touchcancel", touchCancelEvent);
            $el.addEventListener("touchend", touchEndEvent);
            if (!$this.options.disableClick) {
              $el.addEventListener("mousedown", touchStartEvent);
              $el.addEventListener("mousemove", touchMoveEvent);
              $el.addEventListener("mouseup", touchEndEvent);
              $el.addEventListener("mouseenter", mouseEnterEvent);
              $el.addEventListener("mouseleave", mouseLeaveEvent);
            }
            $this.hasBindTouchEvents = true;
          },
          unbind: function($el) {
            $el.removeEventListener("touchstart", touchStartEvent);
            $el.removeEventListener("touchmove", touchMoveEvent);
            $el.removeEventListener("touchcancel", touchCancelEvent);
            $el.removeEventListener("touchend", touchEndEvent);
            if ($el.$$touchObj && !$el.$$touchObj.options.disableClick) {
              $el.removeEventListener("mousedown", touchStartEvent);
              $el.removeEventListener("mousemove", touchMoveEvent);
              $el.removeEventListener("mouseup", touchEndEvent);
              $el.removeEventListener("mouseenter", mouseEnterEvent);
              $el.removeEventListener("mouseleave", mouseLeaveEvent);
            }
            delete $el.$$touchObj;
          }
        });
        Vue2.directive("touch-class", {
          bind: function($el, binding) {
            buildTouchObj($el, {
              touchClass: binding.value
            });
          }
        });
        Vue2.directive("touch-options", {
          bind: function($el, binding) {
            buildTouchObj($el, binding.value);
          }
        });
      }
    };
    if (typeof module === "object") {
      module.exports = vueTouchEvents;
    } else if (typeof define === "function" && define.amd) {
      define([], function() {
        return vueTouchEvents;
      });
    } else if (window.Vue) {
      window.vueTouchEvents = vueTouchEvents;
      Vue.use(vueTouchEvents);
    }
  }
});
export default require_vue2_touch_events();
//# sourceMappingURL=vue2-touch-events-HO5ZLWF2-cached.js.map
