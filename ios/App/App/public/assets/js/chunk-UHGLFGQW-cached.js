// frontend/utils/trapFocus.js
var trapFocus = {
  data() {
    return {
      // focusedElement used when $el is not available (ex: the tooltip)
      focusedElement: null,
      focusableElements: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
    };
  },
  methods: {
    focusEl(el = this.$el) {
      el.setAttribute("tabindex", "-1");
      el.focus();
    },
    trapFocus(e) {
      const el = this.focusedElement || this.$el;
      if (e.key === "Tab") {
        const focusableChilds = Array.from(el.querySelectorAll(this.focusableElements));
        const firstFocusChild = focusableChilds[0];
        const lastFocusChild = focusableChilds[focusableChilds.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === firstFocusChild) {
            e.preventDefault();
            lastFocusChild.focus();
          }
        } else if (document.activeElement === lastFocusChild) {
          e.preventDefault();
          firstFocusChild.focus();
        }
      }
    }
  }
};
var trapFocus_default = trapFocus;

export {
  trapFocus_default
};
//# sourceMappingURL=chunk-UHGLFGQW-cached.js.map
