import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/views/containers/dashboard/GroupMembersTooltipPending.vue
var __vue_script__ = {
  name: "GroupMembersTooltipPending",
  components: {
    Tooltip: Tooltip_default
  },
  props: {
    contractID: String,
    data: Object
  },
  methods: {
    getDisplayName(memberID) {
      const profile = this.globalProfile(memberID);
      return profile?.displayName || profile?.username || memberID;
    }
  },
  computed: {
    ...mapGetters([
      "ourIdentityContractId",
      "globalProfile"
    ]),
    tooltipText() {
      const invitedBy = this.getDisplayName(this.data?.invitedBy);
      return this.ourIdentityContractId === this.data?.invitedBy ? L("This member did not use their invite link to join the group yet. This link should be given to them by {invitedBy} (you).", { invitedBy }) : L("This member did not use their invite link to join the group yet. This link should be given to them by {invitedBy}.", { invitedBy });
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tooltip",
    { attrs: { direction: "bottom-right" } },
    [
      _c(
        "span",
        {
          staticClass: "button is-icon-small",
          attrs: { "data-test": "pendingTooltip" }
        },
        [_c("i", { staticClass: "icon-question-circle" })]
      ),
      _c("template", { slot: "tooltip" }, [
        _c("p", [_vm._v(_vm._s(_vm.tooltipText))])
      ])
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = void 0;
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
  tooltip(direction='bottom-right')
    span.button.is-icon-small(data-test='pendingTooltip')
      i.icon-question-circle
    template(slot='tooltip')
      p {{ tooltipText }}
</template>

<script>
import { mapGetters } from 'vuex'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'GroupMembersTooltipPending',
  components: {
    Tooltip
  },
  props: {
    contractID: String,
    data: Object
  },
  methods: {
    getDisplayName (memberID) {
      const profile = this.globalProfile(memberID)
      return profile?.displayName || profile?.username || memberID
    }
  },
  computed: {
    ...mapGetters([
      'ourIdentityContractId',
      'globalProfile'
    ]),
    tooltipText () {
      const invitedBy = this.getDisplayName(this.data?.invitedBy)

      return this.ourIdentityContractId === this.data?.invitedBy
        ? L('This member did not use their invite link to join the group yet. This link should be given to them by {invitedBy} (you).', { invitedBy })
        : L('This member did not use their invite link to join the group yet. This link should be given to them by {invitedBy}.', { invitedBy })
    }
  }
}: Object)
<\/script>
`;
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (false) {
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
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  void 0,
  void 0,
  void 0
);
var GroupMembersTooltipPending_default = __vue_component__;

export {
  GroupMembersTooltipPending_default
};
//# sourceMappingURL=chunk-ZB6G6ME6-cached.js.map
