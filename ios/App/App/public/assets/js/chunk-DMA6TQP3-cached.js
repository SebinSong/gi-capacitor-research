import {
  TABLET
} from "./chunk-532VGDFI-cached.js";
import {
  trapFocus_default
} from "./chunk-UHGLFGQW-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/components/Tooltip.vue
var __vue_script__ = {
  name: "Tooltip",
  mixins: [trapFocus_default],
  props: {
    text: String,
    // Force to show tooltip manually
    isVisible: Boolean,
    manual: {
      // The option to opt out of the default behaviour of displaying tooltip when the trigger element is focused/hovered
      // and then using $ref.[name].toggle() from the parent component instead. (reference: ProfileCard.vue)
      type: Boolean,
      default: false
    },
    isTextCenter: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      validator: (value) => ["bottom", "bottom-left", "bottom-right", "right", "left", "top", "top-left"].includes(value),
      default: "bottom"
    },
    opacity: {
      type: Number,
      required: false,
      default: 0.95
    },
    deactivated: {
      type: Boolean,
      default: false
    },
    triggerElementSelector: {
      // Instead of taking the entire 'default-slot' as the trigger element(which is the default behaviour of this component),
      // specifying this prop will bind the tooltip to 'a particular element within the default-slot' content.
      // The value must be a valid css-selector string, which will be used in searching via HTMLElement.querySelector()
      // (Refer to GroupMembersActivity.vue for the use case.)
      type: String,
      required: false,
      default: ""
    },
    anchorToElement: {
      // An option to opt out of the v-append-to-body vue-directive. Instead of appending the tooltip to document.body,
      // It will be anchored to the trigger DOM element so it won't detached from the original position while scrolling the page etc..
      // (reference: https://github.com/okTurtles/group-income/issues/2450)
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    triggerDOM: null,
    trigger: null,
    // bounding-box info of the trigger DOM.
    tooltip: null,
    tooltipHeight: 0,
    tooltipWidth: 0,
    isActive: false,
    styles: null,
    lastFocus: null
  }),
  computed: {
    ...mapGetters([
      "isReducedMotionMode",
      "isDarkTheme"
    ]),
    rootElAttrs() {
      return {
        "tabindex": !this.triggerElementSelector ? this.manual ? "-1" : "0" : null,
        "aria-label": !this.triggerElementSelector ? this.text : void 0
      };
    },
    revealTooltip() {
      return this.isActive || this.isVisible;
    },
    tooltipClasses() {
      return {
        "has-text-center": this.isTextCenter,
        "is-active": this.isActive,
        "is-dark-theme": this.isDarkTheme,
        "in-reduced-motion": this.isReducedMotionMode,
        manual: this.manual
      };
    }
  },
  methods: {
    show() {
      if (!this.manual && !this.deactivated) this.isActive = true;
    },
    hide() {
      if (!this.manual) this.isActive = false;
    },
    toggle() {
      if (this.deactivated || !this.manual) {
        return;
      }
      this.isActive = !this.isActive;
    },
    handleKeyUp(e) {
      if (e.key === "Escape") {
        this.isActive = false;
      }
    },
    isIOSSafari() {
      const ua = window.navigator.userAgent;
      return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua);
    },
    hideTooltipOnTouchOutside(e) {
      if (this.isActive && !this.triggerDOM.contains(e.target)) {
        this.hide();
      }
    },
    adjustPosition() {
      this.trigger = (this.triggerDOM || this.$el).getBoundingClientRect();
      const { scrollX, scrollY } = window;
      const { width, height, left, top } = this.trigger;
      const windowHeight = window.innerHeight;
      const spacing = 16;
      let transform;
      let absPosition;
      if (this.manual && window.innerWidth < TABLET) {
        transform = `translate(-8px, ${windowHeight - this.tooltipHeight}px)`;
      } else if (this.anchorToElement) {
        let x, y;
        switch (this.direction) {
          case "right":
            x = `${spacing}px`;
            y = "-50%";
            absPosition = { top: "50%", left: "100%" };
            break;
          case "left":
            x = "-100%";
            y = "-50%";
            absPosition = { top: "50%", left: `-${spacing}px` };
            break;
          case "bottom-left":
            x = 0;
            y = `${spacing}px`;
            absPosition = { top: "100%" };
            break;
          case "bottom-right":
            x = "-100%";
            y = "100%";
            absPosition = { bottom: `-${spacing}px`, left: "100%" };
            break;
          case "top":
            x = "-50%";
            y = "-100%";
            absPosition = { top: `-${spacing}px`, left: "50%" };
            break;
          case "top-left":
            x = 0;
            y = "-100%";
            absPosition = { top: `-${spacing}px`, left: 0 };
            break;
          default:
            x = "-50%";
            y = "100%";
            absPosition = { left: "50%", bottom: `-${spacing}px` };
        }
        transform = `translate(${x}, ${y})`;
      } else {
        let x;
        let y = scrollY + top + height / 2 - this.tooltipHeight / 2;
        if (y < 0) y = spacing;
        if (y + this.tooltipHeight > windowHeight) y = windowHeight - spacing - this.tooltipHeight;
        switch (this.direction) {
          case "right":
            x = scrollX + left + width + spacing;
            break;
          case "left":
            x = scrollX + left - spacing - this.tooltipWidth;
            break;
          case "bottom-left":
            x = scrollX + left;
            y = scrollY + top + height + spacing;
            break;
          case "bottom-right":
            x = scrollX + left + width - this.tooltipWidth;
            y = scrollY + top + height + spacing;
            break;
          case "top":
            x = scrollX + left + width / 2 - this.tooltipWidth / 2;
            y = scrollY + top - (this.tooltipHeight + spacing);
            break;
          case "top-left":
            y = y - height - spacing;
            x = scrollX + left + spacing;
            break;
          default:
            x = scrollX + left + width / 2 - this.tooltipWidth / 2;
            y = scrollY + top + height + spacing;
        }
        transform = `translate(${x}px, ${y}px)`;
      }
      this.styles = {
        transform,
        ...absPosition || {},
        pointerEvents: this.manual ? "initial" : "none",
        backgroundColor: this.manual ? "transparent" : void 0,
        opacity: this.opacity
      };
    }
  },
  directives: {
    // The tooltip instead of being rendered on the original DOM position
    // it's appended to the 'div.l-page' page element, away from every other elements
    // so no element CSS can influence tooltip styles (position, size)
    appendToBody: {
      inserted(el, bindings, vnode) {
        document.body.appendChild(el);
        const $this = vnode.context;
        if (!$this.tooltip) {
          $this.tooltip = el.getBoundingClientRect();
        }
        if (!$this.tooltipWidth) {
          if ($this.$slots.tooltip) {
            const elm = $this.$slots.tooltip[0].elm;
            if (elm.offsetWidth) {
              $this.tooltipWidth = elm.offsetWidth;
              $this.tooltipHeight = elm.offsetHeight;
            }
          } else {
            const elm = el.getBoundingClientRect();
            $this.tooltipWidth = elm.width;
            $this.tooltipHeight = elm.height;
          }
        }
        $this.adjustPosition();
        window.addEventListener("resize", $this.adjustPosition);
        if (bindings.value && bindings.value.manual) {
          $this.focusedElement = el;
          document.addEventListener("keydown", $this.trapFocus);
          window.addEventListener("keyup", $this.handleKeyUp);
          $this.lastFocus = document.activeElement;
          $this.focusEl(el);
        }
      },
      unbind(el, bindings, vnode) {
        const $this = vnode.context;
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        if (bindings.value && bindings.value.manual) {
          $this.focusedElement = null;
          document.removeEventListener("keydown", $this.trapFocus);
          window.removeEventListener("keyup", $this.handleKeyUp);
          $this.lastFocus.focus();
        }
        window.removeEventListener("resize", $this.adjustPosition);
      }
    },
    anchorToTrigger: {
      inserted(el, bindings, vnode) {
        const $this = vnode.context;
        if ($this.triggerElementSelector) {
          $this.triggerDOM.appendChild(el);
        }
        $this.adjustPosition();
      }
    }
  },
  mounted() {
    this.triggerDOM = this.triggerElementSelector ? this.$el.querySelector(this.triggerElementSelector) : this.$el;
    this.triggerDOM.addEventListener("click", this.toggle);
    this.triggerDOM.addEventListener("mouseenter", this.show);
    this.triggerDOM.addEventListener("mouseleave", this.hide);
    this.triggerDOM.addEventListener("focus", this.show);
    this.triggerDOM.addEventListener("blur", this.hide);
    if (this.triggerElementSelector) {
      this.triggerDOM.style.cursor = "pointer";
      this.triggerDOM.style.position = "relative";
      if (this.isIOSSafari()) {
        document.body.addEventListener("touchstart", this.hideTooltipOnTouchOutside);
      }
    }
  },
  beforeDestroy() {
    this.triggerDOM.removeEventListener("click", this.toggle);
    this.triggerDOM.removeEventListener("mouseenter", this.show);
    this.triggerDOM.removeEventListener("mouseleave", this.hide);
    this.triggerDOM.removeEventListener("focus", this.show);
    this.triggerDOM.removeEventListener("blur", this.hide);
    if (this.triggerElementSelector && this.isIOSSafari()) {
      document.body.removeEventListener("touchstart", this.hideTooltipOnTouchOutside);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "c-twrapper",
        class: {
          "has-target-within": _vm.triggerElementSelector,
          "anchored-to-element": _vm.anchorToElement
        }
      },
      "span",
      _vm.rootElAttrs,
      false
    ),
    [
      _vm._t("default"),
      _vm.revealTooltip ? [
        _vm.anchorToElement ? _c(
          "div",
          {
            directives: [
              {
                name: "anchor-to-trigger",
                rawName: "v-anchor-to-trigger"
              }
            ],
            staticClass: "c-anchored-tooltip",
            class: _vm.tooltipClasses,
            style: _vm.styles
          },
          [_vm.text ? [_vm._v(_vm._s(_vm.text))] : _vm._t("tooltip")],
          2
        ) : [
          _c("transition", { attrs: { name: "fade" } }, [
            _vm.manual ? _c("div", {
              directives: [
                {
                  name: "append-to-body",
                  rawName: "v-append-to-body"
                }
              ],
              staticClass: "c-background",
              attrs: { "data-test": "closeProfileCard" },
              on: { click: _vm.toggle }
            }) : _vm._e()
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "append-to-body",
                  rawName: "v-append-to-body",
                  value: { manual: _vm.manual },
                  expression: "{ manual }"
                }
              ],
              staticClass: "c-tooltip",
              class: _vm.tooltipClasses,
              style: _vm.styles
            },
            [_vm.text ? [_vm._v(_vm._s(_vm.text))] : _vm._t("tooltip")],
            2
          )
        ]
      ] : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-227b3588_0", { source: ".c-twrapper.anchored-to-element[data-v-227b3588] {\n  position: relative;\n}\n.c-twrapper[data-v-227b3588]:not(.has-target-within) {\n  cursor: pointer;\n}\n.c-tooltip[data-v-227b3588],\n.c-anchored-tooltip[data-v-227b3588] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 3rem;\n  max-width: 12rem;\n  border-radius: 3px;\n  padding: 0.5rem;\n  z-index: 50;\n  pointer-events: none;\n  background-color: var(--text_0);\n  opacity: 0.95;\n  color: var(--background_0);\n}\n.c-tooltip.has-text-center[data-v-227b3588],\n.c-anchored-tooltip.has-text-center[data-v-227b3588] {\n  text-align: center;\n}\n.c-tooltip.manual[data-v-227b3588],\n.c-anchored-tooltip.manual[data-v-227b3588] {\n  max-width: unset;\n}\n.c-tooltip.is-dark-theme .card[data-v-227b3588],\n.c-anchored-tooltip.is-dark-theme .card[data-v-227b3588] {\n  background-color: var(--general_1);\n}\n.c-tooltip.in-reduced-motion *[data-v-227b3588],\n.c-anchored-tooltip.in-reduced-motion *[data-v-227b3588] {\n  animation-duration: 0ms !important;\n  transition: none !important;\n}\n.c-tooltip[data-v-227b3588]:focus,\n.c-anchored-tooltip[data-v-227b3588]:focus {\n  outline: none;\n}\n.c-anchored-tooltip[data-v-227b3588] {\n  width: max-content;\n  height: max-content;\n}\n.c-background[data-v-227b3588] {\n  position: absolute;\n  z-index: 49;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width: 768px) {\n.c-background[data-v-227b3588] {\n    background-color: rgba(0, 0, 0, 0.7);\n}\n}\n\n/*# sourceMappingURL=Tooltip.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/Tooltip.vue", "Tooltip.vue"], "names": [], "mappings": "AA8WA;EACA,kBAAA;AC7WA;ADgXA;EACA,eAAA;AC9WA;ADkXA;;EAEA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,+BAAA;EACA,aAAA;EACA,0BAAA;AC/WA;ADiXA;;EACA,kBAAA;AC9WA;ADiXA;;EACA,gBAAA;AC9WA;ADiXA;;EACA,kCAAA;AC9WA;ADkXA;;EACA,kCAAA;EACA,2BAAA;AC/WA;ADmXA;;EACA,aAAA;AChXA;ADoXA;EACA,kBAAA;EACA,mBAAA;ACjXA;ADoXA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;ACjXA;AACA;AD0WA;IASA,oCAAA;AChXE;AACF;;AAEA,sCAAsC", "file": "Tooltip.vue", "sourcesContent": ["<template lang='pug'>\nspan.c-twrapper(\n  :class='{ \"has-target-within\": triggerElementSelector, \"anchored-to-element\": anchorToElement }'\n  v-bind='rootElAttrs'\n)\n  slot\n\n  template(v-if='revealTooltip')\n    .c-anchored-tooltip(\n      v-if='anchorToElement'\n      :class='tooltipClasses'\n      :style='styles'\n      v-anchor-to-trigger=''\n    )\n      // Default tooltip is text\n      template(v-if='text') {{text}}\n      // But any content can fit in\n      slot(v-else='' name='tooltip')\n\n    template(v-else)\n      transition(name='fade')\n        .c-background(\n          v-if='manual'\n          @click='toggle'\n          v-append-to-body=''\n          data-test='closeProfileCard'\n        )\n\n      .c-tooltip(\n        :style='styles'\n        :class='tooltipClasses'\n        v-append-to-body='{ manual }'\n      )\n        // Default tooltip is text\n        template(v-if='text') {{text}}\n        // But any content can fit in\n        slot(v-else='' name='tooltip')\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport { TABLET } from '../../../frontend/views/utils/breakpoints.js'\nimport trapFocus from '../../../frontend/utils/trapFocus.js'\n\nexport default ({\n  name: 'Tooltip',\n  mixins: [trapFocus],\n  props: {\n    text: String,\n    // Force to show tooltip manually\n    isVisible: Boolean,\n    manual: {\n      // The option to opt out of the default behaviour of displaying tooltip when the trigger element is focused/hovered\n      // and then using $ref.[name].toggle() from the parent component instead. (reference: ProfileCard.vue)\n      type: Boolean,\n      default: false\n    },\n    isTextCenter: {\n      type: Boolean,\n      default: false\n    },\n    direction: {\n      type: String,\n      validator: (value) => ['bottom', 'bottom-left', 'bottom-right', 'right', 'left', 'top', 'top-left'].includes(value),\n      default: 'bottom'\n    },\n    opacity: {\n      type: Number,\n      required: false,\n      default: 0.95\n    },\n    deactivated: {\n      type: Boolean,\n      default: false\n    },\n    triggerElementSelector: {\n      // Instead of taking the entire 'default-slot' as the trigger element(which is the default behaviour of this component),\n      // specifying this prop will bind the tooltip to 'a particular element within the default-slot' content.\n      // The value must be a valid css-selector string, which will be used in searching via HTMLElement.querySelector()\n      // (Refer to GroupMembersActivity.vue for the use case.)\n      type: String,\n      required: false,\n      default: ''\n    },\n    anchorToElement: {\n      // An option to opt out of the v-append-to-body vue-directive. Instead of appending the tooltip to document.body,\n      // It will be anchored to the trigger DOM element so it won't detached from the original position while scrolling the page etc..\n      // (reference: https://github.com/okTurtles/group-income/issues/2450)\n      type: Boolean,\n      default: false\n    }\n  },\n  data: () => ({\n    triggerDOM: null,\n    trigger: null, // bounding-box info of the trigger DOM.\n    tooltip: null,\n    tooltipHeight: 0,\n    tooltipWidth: 0,\n    isActive: false,\n    styles: null,\n    lastFocus: null\n  }),\n  computed: {\n    ...mapGetters([\n      'isReducedMotionMode',\n      'isDarkTheme'\n    ]),\n    rootElAttrs () {\n      return {\n        'tabindex': !this.triggerElementSelector\n          ? (this.manual ? '-1' : '0')\n          : null,\n        'aria-label': !this.triggerElementSelector ? this.text : undefined\n      }\n    },\n    revealTooltip () {\n      return this.isActive || this.isVisible\n    },\n    tooltipClasses () {\n      return {\n        'has-text-center': this.isTextCenter,\n        'is-active': this.isActive,\n        'is-dark-theme': this.isDarkTheme,\n        'in-reduced-motion': this.isReducedMotionMode,\n        manual: this.manual\n      }\n    }\n  },\n  methods: {\n    show () {\n      if (!this.manual && !this.deactivated) this.isActive = true\n    },\n    hide () {\n      if (!this.manual) this.isActive = false\n    },\n    toggle () {\n      // Manually toggle on/off the tooltip (reference: ProfileCard.vue)\n      if (this.deactivated || !this.manual) { return }\n      this.isActive = !this.isActive\n    },\n    handleKeyUp (e) {\n      // Close after pressing escape\n      if (e.key === 'Escape') {\n        this.isActive = false\n      }\n    },\n    isIOSSafari () {\n      const ua = window.navigator.userAgent\n      return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua)\n    },\n    hideTooltipOnTouchOutside (e) {\n      // NOTE: This is a fix for the iOS-Safari-only issue https://github.com/okTurtles/group-income/issues/2492\n      //       where the tooltip does not close when the user touches outside the tooltip.\n      //       The issue happens because 'blur' event in iOS-Safari does not fire and as a workaround,\n      //       we listen for 'touchstart' event attached to the document.body and manually check if user touches outside the tooltip wrapper.\n      if (this.isActive && !this.triggerDOM.contains(e.target)) {\n        this.hide()\n      }\n    },\n    adjustPosition () {\n      this.trigger = (this.triggerDOM || this.$el).getBoundingClientRect()\n\n      const { scrollX, scrollY } = window\n      const { width, height, left, top } = this.trigger\n      const windowHeight = window.innerHeight\n      const spacing = 16\n      let transform\n      let absPosition // For css top/left/bottom/right properties to use along with 'position: absolute'\n\n      if (this.manual && window.innerWidth < TABLET) {\n        // On mobile, position tooltip at the bottom of the screen with the side-padding removed.\n        transform = `translate(-8px, ${windowHeight - this.tooltipHeight}px)`\n      } else if (this.anchorToElement) {\n        let x, y // for css transform: translate(...)\n\n        switch (this.direction) {\n          case 'right':\n            x = `${spacing}px`\n            y = '-50%'\n            absPosition = { top: '50%', left: '100%' }\n            break\n          case 'left':\n            x = '-100%'\n            y = '-50%'\n            absPosition = { top: '50%', left: `-${spacing}px` }\n            break\n          case 'bottom-left':\n            x = 0\n            y = `${spacing}px`\n            absPosition = { top: '100%' }\n            break\n          case 'bottom-right':\n            x = '-100%'\n            y = '100%'\n            absPosition = { bottom: `-${spacing}px`, left: '100%' }\n            break\n          case 'top':\n            x = '-50%'\n            y = '-100%'\n            absPosition = { top: `-${spacing}px`, left: '50%' }\n            break\n          case 'top-left':\n            x = 0\n            y = '-100%'\n            absPosition = { top: `-${spacing}px`, left: 0 }\n            break\n          default: // defaults to 'bottom'\n            x = '-50%'\n            y = '100%'\n            absPosition = { left: '50%', bottom: `-${spacing}px` }\n        }\n\n        transform = `translate(${x}, ${y})`\n      } else {\n        let x\n        let y = scrollY + top + height / 2 - this.tooltipHeight / 2 // y position defaults to the trigger's center.\n\n        // If y position is off-screen, move it to the edges with some spacing.\n        if (y < 0) y = spacing\n        if (y + this.tooltipHeight > windowHeight) y = windowHeight - spacing - this.tooltipHeight\n\n        switch (this.direction) {\n          case 'right':\n            x = scrollX + left + width + spacing\n            break\n          case 'left':\n            x = scrollX + left - spacing - this.tooltipWidth\n            break\n          case 'bottom-left':\n            x = scrollX + left\n            y = scrollY + top + height + spacing\n            break\n          case 'bottom-right':\n            x = scrollX + left + width - this.tooltipWidth\n            y = scrollY + top + height + spacing\n            break\n          case 'top':\n            x = scrollX + left + width / 2 - this.tooltipWidth / 2\n            y = scrollY + top - (this.tooltipHeight + spacing)\n            break\n          case 'top-left':\n            y = y - height - spacing\n            x = scrollX + left + spacing\n            break\n          default: // 'bottom' as default\n            x = scrollX + left + width / 2 - this.tooltipWidth / 2\n            y = scrollY + top + height + spacing\n        }\n\n        transform = `translate(${x}px, ${y}px)`\n      }\n\n      this.styles = {\n        transform,\n        ...(absPosition || {}),\n        pointerEvents: this.manual ? 'initial' : 'none',\n        backgroundColor: this.manual ? 'transparent' : undefined,\n        opacity: this.opacity\n      }\n    }\n  },\n  directives: {\n    // The tooltip instead of being rendered on the original DOM position\n    // it's appended to the 'div.l-page' page element, away from every other elements\n    // so no element CSS can influence tooltip styles (position, size)\n    appendToBody: {\n      inserted (el, bindings, vnode) {\n        document.body.appendChild(el)\n\n        const $this = vnode.context // Vue component instance\n        if (!$this.tooltip) {\n          $this.tooltip = el.getBoundingClientRect()\n        }\n\n        if (!$this.tooltipWidth) {\n          if ($this.$slots.tooltip) {\n            const elm = $this.$slots.tooltip[0].elm\n            if (elm.offsetWidth) {\n              $this.tooltipWidth = elm.offsetWidth\n              $this.tooltipHeight = elm.offsetHeight\n            }\n          } else {\n            const elm = el.getBoundingClientRect()\n            $this.tooltipWidth = elm.width\n            $this.tooltipHeight = elm.height\n          }\n        }\n\n        // That way the adjustPosition() method can have the same logic\n        // applied in every tooltip as expected\n        $this.adjustPosition()\n        window.addEventListener('resize', $this.adjustPosition)\n\n        if (bindings.value && bindings.value.manual) {\n          $this.focusedElement = el\n          document.addEventListener('keydown', $this.trapFocus)\n          window.addEventListener('keyup', $this.handleKeyUp)\n          $this.lastFocus = document.activeElement\n          $this.focusEl(el)\n        }\n      },\n      unbind (el, bindings, vnode) {\n        const $this = vnode.context\n        if (el.parentNode) {\n          el.parentNode.removeChild(el)\n        }\n        if (bindings.value && bindings.value.manual) {\n          $this.focusedElement = null\n          document.removeEventListener('keydown', $this.trapFocus)\n          window.removeEventListener('keyup', $this.handleKeyUp)\n          // move focus to latest focused element before opening the tooltip.\n          $this.lastFocus.focus()\n        }\n        window.removeEventListener('resize', $this.adjustPosition)\n      }\n    },\n    anchorToTrigger: {\n      inserted (el, bindings, vnode) {\n        const $this = vnode.context\n        if ($this.triggerElementSelector) {\n          // Append the tooltip to a particular element (which is specified by a selector)\n          $this.triggerDOM.appendChild(el)\n        }\n\n        $this.adjustPosition()\n      }\n    }\n  },\n  mounted () {\n    this.triggerDOM = this.triggerElementSelector ? this.$el.querySelector(this.triggerElementSelector) : this.$el\n\n    this.triggerDOM.addEventListener('click', this.toggle)\n    this.triggerDOM.addEventListener('mouseenter', this.show)\n    this.triggerDOM.addEventListener('mouseleave', this.hide)\n    this.triggerDOM.addEventListener('focus', this.show)\n    this.triggerDOM.addEventListener('blur', this.hide)\n\n    if (this.triggerElementSelector) {\n      this.triggerDOM.style.cursor = 'pointer'\n      this.triggerDOM.style.position = 'relative'\n\n      if (this.isIOSSafari()) {\n        // This is a fix for the iOS-Safari-only issue https://github.com/okTurtles/group-income/issues/2492\n        // Check hideTooltipOnTouchOutside() method for more details.\n        document.body.addEventListener('touchstart', this.hideTooltipOnTouchOutside)\n      }\n    }\n  },\n  beforeDestroy () {\n    this.triggerDOM.removeEventListener('click', this.toggle)\n    this.triggerDOM.removeEventListener('mouseenter', this.show)\n    this.triggerDOM.removeEventListener('mouseleave', this.hide)\n    this.triggerDOM.removeEventListener('focus', this.show)\n    this.triggerDOM.removeEventListener('blur', this.hide)\n\n    if (this.triggerElementSelector && this.isIOSSafari()) {\n      document.body.removeEventListener('touchstart', this.hideTooltipOnTouchOutside)\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-twrapper {\n  &.anchored-to-element {\n    position: relative;\n  }\n\n  &:not(.has-target-within) {\n    cursor: pointer;\n  }\n}\n\n.c-tooltip,\n.c-anchored-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 3rem;\n  max-width: 12rem;\n  border-radius: $radius;\n  padding: 0.5rem;\n  z-index: $zindex-tooltip;\n  pointer-events: none;\n  background-color: $text_0;\n  opacity: 0.95;\n  color: $background_0;\n\n  &.has-text-center {\n    text-align: center;\n  }\n\n  &.manual {\n    max-width: unset;\n  }\n\n  &.is-dark-theme .card {\n    background-color: $general_1;\n  }\n\n  &.in-reduced-motion {\n    * {\n      animation-duration: 0ms !important;\n      transition: none !important;\n    }\n  }\n\n  &:focus {\n    outline: none; // TODO #889\n  }\n}\n\n.c-anchored-tooltip {\n  width: max-content;\n  height: max-content;\n}\n\n.c-background {\n  position: absolute;\n  z-index: $zindex-tooltip - 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  @include phone {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n</style>\n", ".c-twrapper.anchored-to-element {\n  position: relative;\n}\n.c-twrapper:not(.has-target-within) {\n  cursor: pointer;\n}\n\n.c-tooltip,\n.c-anchored-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 3rem;\n  max-width: 12rem;\n  border-radius: 3px;\n  padding: 0.5rem;\n  z-index: 50;\n  pointer-events: none;\n  background-color: var(--text_0);\n  opacity: 0.95;\n  color: var(--background_0);\n}\n.c-tooltip.has-text-center,\n.c-anchored-tooltip.has-text-center {\n  text-align: center;\n}\n.c-tooltip.manual,\n.c-anchored-tooltip.manual {\n  max-width: unset;\n}\n.c-tooltip.is-dark-theme .card,\n.c-anchored-tooltip.is-dark-theme .card {\n  background-color: var(--general_1);\n}\n.c-tooltip.in-reduced-motion *,\n.c-anchored-tooltip.in-reduced-motion * {\n  animation-duration: 0ms !important;\n  transition: none !important;\n}\n.c-tooltip:focus,\n.c-anchored-tooltip:focus {\n  outline: none;\n}\n\n.c-anchored-tooltip {\n  width: max-content;\n  height: max-content;\n}\n\n.c-background {\n  position: absolute;\n  z-index: 49;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width: 768px) {\n  .c-background {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n/*# sourceMappingURL=Tooltip.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-227b3588";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\nspan.c-twrapper(\n  :class='{ \"has-target-within\": triggerElementSelector, \"anchored-to-element\": anchorToElement }'\n  v-bind='rootElAttrs'\n)\n  slot\n\n  template(v-if='revealTooltip')\n    .c-anchored-tooltip(\n      v-if='anchorToElement'\n      :class='tooltipClasses'\n      :style='styles'\n      v-anchor-to-trigger=''\n    )\n      // Default tooltip is text\n      template(v-if='text') {{text}}\n      // But any content can fit in\n      slot(v-else='' name='tooltip')\n\n    template(v-else)\n      transition(name='fade')\n        .c-background(\n          v-if='manual'\n          @click='toggle'\n          v-append-to-body=''\n          data-test='closeProfileCard'\n        )\n\n      .c-tooltip(\n        :style='styles'\n        :class='tooltipClasses'\n        v-append-to-body='{ manual }'\n      )\n        // Default tooltip is text\n        template(v-if='text') {{text}}\n        // But any content can fit in\n        slot(v-else='' name='tooltip')\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport { TABLET } from '../../../frontend/views/utils/breakpoints.js'\nimport trapFocus from '../../../frontend/utils/trapFocus.js'\n\nexport default ({\n  name: 'Tooltip',\n  mixins: [trapFocus],\n  props: {\n    text: String,\n    // Force to show tooltip manually\n    isVisible: Boolean,\n    manual: {\n      // The option to opt out of the default behaviour of displaying tooltip when the trigger element is focused/hovered\n      // and then using $ref.[name].toggle() from the parent component instead. (reference: ProfileCard.vue)\n      type: Boolean,\n      default: false\n    },\n    isTextCenter: {\n      type: Boolean,\n      default: false\n    },\n    direction: {\n      type: String,\n      validator: (value) => ['bottom', 'bottom-left', 'bottom-right', 'right', 'left', 'top', 'top-left'].includes(value),\n      default: 'bottom'\n    },\n    opacity: {\n      type: Number,\n      required: false,\n      default: 0.95\n    },\n    deactivated: {\n      type: Boolean,\n      default: false\n    },\n    triggerElementSelector: {\n      // Instead of taking the entire 'default-slot' as the trigger element(which is the default behaviour of this component),\n      // specifying this prop will bind the tooltip to 'a particular element within the default-slot' content.\n      // The value must be a valid css-selector string, which will be used in searching via HTMLElement.querySelector()\n      // (Refer to GroupMembersActivity.vue for the use case.)\n      type: String,\n      required: false,\n      default: ''\n    },\n    anchorToElement: {\n      // An option to opt out of the v-append-to-body vue-directive. Instead of appending the tooltip to document.body,\n      // It will be anchored to the trigger DOM element so it won't detached from the original position while scrolling the page etc..\n      // (reference: https://github.com/okTurtles/group-income/issues/2450)\n      type: Boolean,\n      default: false\n    }\n  },\n  data: () => ({\n    triggerDOM: null,\n    trigger: null, // bounding-box info of the trigger DOM.\n    tooltip: null,\n    tooltipHeight: 0,\n    tooltipWidth: 0,\n    isActive: false,\n    styles: null,\n    lastFocus: null\n  }),\n  computed: {\n    ...mapGetters([\n      'isReducedMotionMode',\n      'isDarkTheme'\n    ]),\n    rootElAttrs () {\n      return {\n        'tabindex': !this.triggerElementSelector\n          ? (this.manual ? '-1' : '0')\n          : null,\n        'aria-label': !this.triggerElementSelector ? this.text : undefined\n      }\n    },\n    revealTooltip () {\n      return this.isActive || this.isVisible\n    },\n    tooltipClasses () {\n      return {\n        'has-text-center': this.isTextCenter,\n        'is-active': this.isActive,\n        'is-dark-theme': this.isDarkTheme,\n        'in-reduced-motion': this.isReducedMotionMode,\n        manual: this.manual\n      }\n    }\n  },\n  methods: {\n    show () {\n      if (!this.manual && !this.deactivated) this.isActive = true\n    },\n    hide () {\n      if (!this.manual) this.isActive = false\n    },\n    toggle () {\n      // Manually toggle on/off the tooltip (reference: ProfileCard.vue)\n      if (this.deactivated || !this.manual) { return }\n      this.isActive = !this.isActive\n    },\n    handleKeyUp (e) {\n      // Close after pressing escape\n      if (e.key === 'Escape') {\n        this.isActive = false\n      }\n    },\n    isIOSSafari () {\n      const ua = window.navigator.userAgent\n      return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua)\n    },\n    hideTooltipOnTouchOutside (e) {\n      // NOTE: This is a fix for the iOS-Safari-only issue https://github.com/okTurtles/group-income/issues/2492\n      //       where the tooltip does not close when the user touches outside the tooltip.\n      //       The issue happens because 'blur' event in iOS-Safari does not fire and as a workaround,\n      //       we listen for 'touchstart' event attached to the document.body and manually check if user touches outside the tooltip wrapper.\n      if (this.isActive && !this.triggerDOM.contains(e.target)) {\n        this.hide()\n      }\n    },\n    adjustPosition () {\n      this.trigger = (this.triggerDOM || this.$el).getBoundingClientRect()\n\n      const { scrollX, scrollY } = window\n      const { width, height, left, top } = this.trigger\n      const windowHeight = window.innerHeight\n      const spacing = 16\n      let transform\n      let absPosition // For css top/left/bottom/right properties to use along with 'position: absolute'\n\n      if (this.manual && window.innerWidth < TABLET) {\n        // On mobile, position tooltip at the bottom of the screen with the side-padding removed.\n        transform = `translate(-8px, ${windowHeight - this.tooltipHeight}px)`\n      } else if (this.anchorToElement) {\n        let x, y // for css transform: translate(...)\n\n        switch (this.direction) {\n          case 'right':\n            x = `${spacing}px`\n            y = '-50%'\n            absPosition = { top: '50%', left: '100%' }\n            break\n          case 'left':\n            x = '-100%'\n            y = '-50%'\n            absPosition = { top: '50%', left: `-${spacing}px` }\n            break\n          case 'bottom-left':\n            x = 0\n            y = `${spacing}px`\n            absPosition = { top: '100%' }\n            break\n          case 'bottom-right':\n            x = '-100%'\n            y = '100%'\n            absPosition = { bottom: `-${spacing}px`, left: '100%' }\n            break\n          case 'top':\n            x = '-50%'\n            y = '-100%'\n            absPosition = { top: `-${spacing}px`, left: '50%' }\n            break\n          case 'top-left':\n            x = 0\n            y = '-100%'\n            absPosition = { top: `-${spacing}px`, left: 0 }\n            break\n          default: // defaults to 'bottom'\n            x = '-50%'\n            y = '100%'\n            absPosition = { left: '50%', bottom: `-${spacing}px` }\n        }\n\n        transform = `translate(${x}, ${y})`\n      } else {\n        let x\n        let y = scrollY + top + height / 2 - this.tooltipHeight / 2 // y position defaults to the trigger's center.\n\n        // If y position is off-screen, move it to the edges with some spacing.\n        if (y < 0) y = spacing\n        if (y + this.tooltipHeight > windowHeight) y = windowHeight - spacing - this.tooltipHeight\n\n        switch (this.direction) {\n          case 'right':\n            x = scrollX + left + width + spacing\n            break\n          case 'left':\n            x = scrollX + left - spacing - this.tooltipWidth\n            break\n          case 'bottom-left':\n            x = scrollX + left\n            y = scrollY + top + height + spacing\n            break\n          case 'bottom-right':\n            x = scrollX + left + width - this.tooltipWidth\n            y = scrollY + top + height + spacing\n            break\n          case 'top':\n            x = scrollX + left + width / 2 - this.tooltipWidth / 2\n            y = scrollY + top - (this.tooltipHeight + spacing)\n            break\n          case 'top-left':\n            y = y - height - spacing\n            x = scrollX + left + spacing\n            break\n          default: // 'bottom' as default\n            x = scrollX + left + width / 2 - this.tooltipWidth / 2\n            y = scrollY + top + height + spacing\n        }\n\n        transform = `translate(${x}px, ${y}px)`\n      }\n\n      this.styles = {\n        transform,\n        ...(absPosition || {}),\n        pointerEvents: this.manual ? 'initial' : 'none',\n        backgroundColor: this.manual ? 'transparent' : undefined,\n        opacity: this.opacity\n      }\n    }\n  },\n  directives: {\n    // The tooltip instead of being rendered on the original DOM position\n    // it's appended to the 'div.l-page' page element, away from every other elements\n    // so no element CSS can influence tooltip styles (position, size)\n    appendToBody: {\n      inserted (el, bindings, vnode) {\n        document.body.appendChild(el)\n\n        const $this = vnode.context // Vue component instance\n        if (!$this.tooltip) {\n          $this.tooltip = el.getBoundingClientRect()\n        }\n\n        if (!$this.tooltipWidth) {\n          if ($this.$slots.tooltip) {\n            const elm = $this.$slots.tooltip[0].elm\n            if (elm.offsetWidth) {\n              $this.tooltipWidth = elm.offsetWidth\n              $this.tooltipHeight = elm.offsetHeight\n            }\n          } else {\n            const elm = el.getBoundingClientRect()\n            $this.tooltipWidth = elm.width\n            $this.tooltipHeight = elm.height\n          }\n        }\n\n        // That way the adjustPosition() method can have the same logic\n        // applied in every tooltip as expected\n        $this.adjustPosition()\n        window.addEventListener('resize', $this.adjustPosition)\n\n        if (bindings.value && bindings.value.manual) {\n          $this.focusedElement = el\n          document.addEventListener('keydown', $this.trapFocus)\n          window.addEventListener('keyup', $this.handleKeyUp)\n          $this.lastFocus = document.activeElement\n          $this.focusEl(el)\n        }\n      },\n      unbind (el, bindings, vnode) {\n        const $this = vnode.context\n        if (el.parentNode) {\n          el.parentNode.removeChild(el)\n        }\n        if (bindings.value && bindings.value.manual) {\n          $this.focusedElement = null\n          document.removeEventListener('keydown', $this.trapFocus)\n          window.removeEventListener('keyup', $this.handleKeyUp)\n          // move focus to latest focused element before opening the tooltip.\n          $this.lastFocus.focus()\n        }\n        window.removeEventListener('resize', $this.adjustPosition)\n      }\n    },\n    anchorToTrigger: {\n      inserted (el, bindings, vnode) {\n        const $this = vnode.context\n        if ($this.triggerElementSelector) {\n          // Append the tooltip to a particular element (which is specified by a selector)\n          $this.triggerDOM.appendChild(el)\n        }\n\n        $this.adjustPosition()\n      }\n    }\n  },\n  mounted () {\n    this.triggerDOM = this.triggerElementSelector ? this.$el.querySelector(this.triggerElementSelector) : this.$el\n\n    this.triggerDOM.addEventListener('click', this.toggle)\n    this.triggerDOM.addEventListener('mouseenter', this.show)\n    this.triggerDOM.addEventListener('mouseleave', this.hide)\n    this.triggerDOM.addEventListener('focus', this.show)\n    this.triggerDOM.addEventListener('blur', this.hide)\n\n    if (this.triggerElementSelector) {\n      this.triggerDOM.style.cursor = 'pointer'\n      this.triggerDOM.style.position = 'relative'\n\n      if (this.isIOSSafari()) {\n        // This is a fix for the iOS-Safari-only issue https://github.com/okTurtles/group-income/issues/2492\n        // Check hideTooltipOnTouchOutside() method for more details.\n        document.body.addEventListener('touchstart', this.hideTooltipOnTouchOutside)\n      }\n    }\n  },\n  beforeDestroy () {\n    this.triggerDOM.removeEventListener('click', this.toggle)\n    this.triggerDOM.removeEventListener('mouseenter', this.show)\n    this.triggerDOM.removeEventListener('mouseleave', this.hide)\n    this.triggerDOM.removeEventListener('focus', this.show)\n    this.triggerDOM.removeEventListener('blur', this.hide)\n\n    if (this.triggerElementSelector && this.isIOSSafari()) {\n      document.body.removeEventListener('touchstart', this.hideTooltipOnTouchOutside)\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../frontend/assets/style/_variables.scss\";\n\n.c-twrapper {\n  &.anchored-to-element {\n    position: relative;\n  }\n\n  &:not(.has-target-within) {\n    cursor: pointer;\n  }\n}\n\n.c-tooltip,\n.c-anchored-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 3rem;\n  max-width: 12rem;\n  border-radius: $radius;\n  padding: 0.5rem;\n  z-index: $zindex-tooltip;\n  pointer-events: none;\n  background-color: $text_0;\n  opacity: 0.95;\n  color: $background_0;\n\n  &.has-text-center {\n    text-align: center;\n  }\n\n  &.manual {\n    max-width: unset;\n  }\n\n  &.is-dark-theme .card {\n    background-color: $general_1;\n  }\n\n  &.in-reduced-motion {\n    * {\n      animation-duration: 0ms !important;\n      transition: none !important;\n    }\n  }\n\n  &:focus {\n    outline: none; // TODO #889\n  }\n}\n\n.c-anchored-tooltip {\n  width: max-content;\n  height: max-content;\n}\n\n.c-background {\n  position: absolute;\n  z-index: $zindex-tooltip - 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  @include phone {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n</style>\n";
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
var Tooltip_default = __vue_component__;

export {
  Tooltip_default
};
//# sourceMappingURL=chunk-DMA6TQP3-cached.js.map
