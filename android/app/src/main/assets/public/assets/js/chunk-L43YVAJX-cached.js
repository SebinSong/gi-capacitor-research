import {
  CalloutCard_default,
  contributions_default
} from "./chunk-3EJJCCO3-cached.js";
import {
  hello_default
} from "./chunk-6TVZJD4C-cached.js";
import {
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/containers/contributions/AddIncomeDetailsWidget.vue
var __vue_script__ = {
  name: "AddIncomeDetailsWidget",
  components: {
    CalloutCard: CalloutCard_default
  },
  props: {
    hasWelcomeMessage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      SvgHello: hello_default
    };
  },
  computed: {
    ...mapGetters([
      "ourUserDisplayName"
    ]),
    title() {
      return this.hasWelcomeMessage ? L("Welcome, {username}!", { username: this.ourUserDisplayName }) : L("Add your income details");
    },
    copy() {
      return this.hasWelcomeMessage ? L("Add your income details to start receiving or giving mincome.") : L("This will allow you to start receiving or giving mincome.");
    },
    image() {
      return this.hasWelcomeMessage ? hello_default : contributions_default;
    }
  },
  methods: {
    openModal(name) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, name);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "callout-card",
    {
      attrs: {
        "data-test": "addIncomeDetailsCard",
        isCard: true,
        title: _vm.title,
        svg: _vm.image
      }
    },
    [
      _c("p", [_vm._v(_vm._s(_vm.copy))]),
      _c(
        "i18n",
        {
          attrs: { tag: "button", "data-test": "openIncomeDetailsModal" },
          on: {
            click: function($event) {
              return _vm.openModal("IncomeDetails");
            }
          }
        },
        [_vm._v("Add income details")]
      )
    ],
    1
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
callout-card(
  data-test='addIncomeDetailsCard'
  :isCard='true'
  :title='title'
  :svg='image'
)
  p {{copy}}
  i18n(
    tag='button'
    data-test='openIncomeDetailsModal'
    @click='openModal("IncomeDetails")'
  ) Add income details
</template>

<script>
import sbp from '@sbp/sbp'
import { OPEN_MODAL } from '../../../../frontend/utils/events.js'
import { mapGetters } from 'vuex'
import CalloutCard from '../../../../frontend/views/components/CalloutCard.vue'
import SvgHello from '../../../../frontend/assets/svgs/hello.svg'
import SvgContributions from '../../../../frontend/assets/svgs/contributions.svg'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'AddIncomeDetailsWidget',
  components: {
    CalloutCard
  },
  props: {
    hasWelcomeMessage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      SvgHello
    }
  },
  computed: {
    ...mapGetters([
      'ourUserDisplayName'
    ]),

    title () {
      return this.hasWelcomeMessage ? L('Welcome, {username}!', { username: this.ourUserDisplayName }) : L('Add your income details')
    },

    copy () {
      return this.hasWelcomeMessage ? L('Add your income details to start receiving or giving mincome.') : L('This will allow you to start receiving or giving mincome.')
    },

    image () {
      return this.hasWelcomeMessage ? SvgHello : SvgContributions
    }
  },
  methods: {
    openModal (name) {
      sbp('okTurtles.events/emit', OPEN_MODAL, name)
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
var AddIncomeDetailsWidget_default = __vue_component__;

export {
  AddIncomeDetailsWidget_default
};
//# sourceMappingURL=chunk-L43YVAJX-cached.js.map
