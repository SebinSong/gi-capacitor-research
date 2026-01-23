import {
  GraphLegendItem_default,
  PieChart_default
} from "./chunk-PCDU7CB5-cached.js";
import "./chunk-OMAB4AXT-cached.js";
import {
  unadjustedDistribution
} from "./chunk-5JVY5DQX-cached.js";
import {
  init_vue_esm,
  vue_esm_default
} from "./chunk-K33NK7LD-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import {
  currencies_default,
  normalizeCurrency
} from "./chunk-AS6YVRB6-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default,
  TransitionExpand_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  randomHexString
} from "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  GROUP_MAX_PLEDGE_AMOUNT,
  GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR,
  GROUP_PAYMENT_METHOD_MAX_CHAR
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  INCOME_DETAILS_UPDATE
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
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/contributions/IncomeDetails.vue
var import_vuelidate3 = __toESM(require_lib());
var import_validators3 = __toESM(require_validators());

// frontend/views/containers/contributions/PaymentMethods.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
init_vue_esm();
var __vue_script__ = {
  name: "PaymentMethods",
  components: {},
  mixins: [import_vuelidate.validationMixin],
  data: () => ({
    config: {
      options: {
        // Key to store on the state and corresponding translation.
        bitcoin: L("Bitcoin"),
        lightning: L("Lightning"),
        paypal: L("Paypal"),
        venmo: L("Venmo"),
        other: L("Other")
      },
      placeholders: {
        bitcoin: L("BTC address"),
        paypal: L("Email, name or URL"),
        venmo: L("Username"),
        lightning: L("Lightning address")
      }
    },
    form: {
      methods: []
    },
    savedMethods: []
  }),
  validations() {
    return {
      form: {
        methods: {
          $each: {
            value: {
              [L("Payment info is required.")]: import_validators.required,
              [L("Payment info cannot exceed {maxChars} characters.", {
                maxChars: GROUP_PAYMENT_METHOD_MAX_CHAR
              })]: (0, import_validators.maxLength)(GROUP_PAYMENT_METHOD_MAX_CHAR)
            }
          }
        }
      }
    };
  },
  created() {
    this.savedMethods = this.ourGroupProfile.paymentMethods || [];
    const savedMethodsCount = this.savedMethods.length;
    if (savedMethodsCount === 0) {
      vue_esm_default.set(this.form.methods, 0, {
        name: "choose",
        value: ""
      });
      return;
    }
    for (let index = 0; index < savedMethodsCount; index++) {
      const method = this.savedMethods[index];
      vue_esm_default.set(this.form.methods, index, {
        name: method.name,
        value: method.value
      });
    }
  },
  computed: {
    ...mapGetters([
      "ourGroupProfile"
    ]),
    methodsCount() {
      return Object.keys(this.form.methods).length;
    }
  },
  methods: {
    handleSelectChange(methName, index) {
      this.$refs.fields.childNodes[index].getElementsByTagName("input")[0].focus();
    },
    getFirstErrorMessage(index) {
      const cur = this.$v.form.methods.$each[index].value;
      if (cur.$error) {
        for (const key in cur.$params) {
          if (!cur[key]) {
            return key;
          }
        }
      }
      return "";
    },
    handleAddMethod() {
      vue_esm_default.set(this.form.methods, this.methodsCount, {
        name: "choose",
        value: ""
      });
    },
    removeMethod(index) {
      if (this.form.methods.length > 1) {
        this.form.methods.splice(index, 1);
      } else {
        vue_esm_default.set(this.form.methods, 0, {
          name: "choose",
          value: ""
        });
      }
    },
    checkHasUpdates() {
      const entriesToCheck = this.form.methods.filter((method) => method.name !== "choose");
      if (entriesToCheck.length !== this.savedMethods.length) return true;
      else {
        return entriesToCheck.some(
          (method) => this.savedMethods.findIndex((saved) => saved.name === method.name && saved.value === method.value) === -1
        );
      }
    },
    getPaymentInfoPlaceholder(method) {
      return this.config.placeholders[method] || "";
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fieldset",
    { attrs: { "data-test": "paymentMethods" } },
    [
      _c(
        "legend",
        { staticClass: "has-text-bold c-legend" },
        [_c("i18n", { staticClass: "is-title-4" }, [_vm._v("Payment info")])],
        1
      ),
      _c("i18n", { staticClass: "has-text-1" }, [
        _vm._v(
          "Other group members will be able to use this information to send you monthly contributions."
        )
      ]),
      _c(
        "ul",
        {
          ref: "fields",
          staticClass: "c-fields",
          attrs: { "data-test": "fields" }
        },
        _vm._l(_vm.form.methods, function(method, index) {
          return _c(
            "li",
            {
              key: "method-" + index,
              staticClass: "c-fields-item",
              attrs: { "data-test": "method" }
            },
            [
              _c("fieldset", [
                _c(
                  "div",
                  {
                    staticClass: "selectgroup is-reversed c-select",
                    class: {
                      "is-shifted": _vm.methodsCount > 1 || method.name !== "choose" || method.value
                    }
                  },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: method.name,
                            expression: "method.name"
                          }
                        ],
                        staticClass: "select",
                        class: { "is-empty": method.name === "choose" },
                        attrs: { "aria-label": _vm.L("Payment method") },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                                return o.selected;
                              }).map(function(o) {
                                var val = "_value" in o ? o._value : o.value;
                                return val;
                              });
                              _vm.$set(
                                method,
                                "name",
                                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                              );
                            },
                            function($event) {
                              return _vm.handleSelectChange(
                                $event.target.value,
                                index
                              );
                            }
                          ]
                        }
                      },
                      [
                        _c(
                          "i18n",
                          {
                            attrs: {
                              tag: "option",
                              value: "choose",
                              disabled: "true"
                            }
                          },
                          [_vm._v("Choose...")]
                        ),
                        _vm._l(_vm.config.options, function(option, key) {
                          return _c("option", { domProps: { value: key } }, [
                            _vm._v(_vm._s(option))
                          ]);
                        })
                      ],
                      2
                    ),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: method.value,
                          expression: "method.value"
                        }
                      ],
                      staticClass: "input",
                      class: {
                        error: _vm.$v.form.methods.$each[index].value.$error
                      },
                      attrs: {
                        type: "text",
                        "aria-label": _vm.L("Payment value"),
                        placeholder: _vm.getPaymentInfoPlaceholder(method.name)
                      },
                      domProps: { value: method.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return;
                          }
                          _vm.$set(method, "value", $event.target.value);
                        }
                      }
                    }),
                    _c(
                      "button",
                      {
                        staticClass: "is-icon-small is-btn-shifted",
                        attrs: {
                          type: "button",
                          "aria-label": _vm.L("Remove method"),
                          "data-test": "remove"
                        },
                        on: {
                          click: function($event) {
                            return _vm.removeMethod(index);
                          }
                        }
                      },
                      [_c("i", { staticClass: "icon-times" })]
                    )
                  ]
                ),
                _vm.$v.form.methods.$each[index].value.$error ? _c("span", { staticClass: "error" }, [
                  _vm._v(_vm._s(_vm.getFirstErrorMessage(index)))
                ]) : _vm._e()
              ])
            ]
          );
        }),
        0
      ),
      _c(
        "button",
        {
          staticClass: "link has-icon",
          attrs: { type: "button", "data-test": "addMethod" },
          on: { click: _vm.handleAddMethod }
        },
        [
          _c("i", { staticClass: "icon-plus" }),
          _c("i18n", [_vm._v("Add more")])
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-a8a5aa02_0", { source: ".c-optional[data-v-a8a5aa02] {\n  font-weight: 400;\n}\n.c-legend[data-v-a8a5aa02] {\n  margin-bottom: 0.25rem;\n}\n.c-fields[data-v-a8a5aa02] {\n  margin-top: 1rem;\n}\n.c-fields-item[data-v-a8a5aa02] {\n  display: block;\n  margin-bottom: 1rem;\n}\n.c-select .select[data-v-a8a5aa02] {\n  min-width: 7rem;\n}\n.c-select[data-v-a8a5aa02]::after {\n  left: 5.5rem;\n}\n.c-select .is-btn-shifted[data-v-a8a5aa02] {\n  display: none;\n}\n.c-select.is-shifted .is-btn-shifted[data-v-a8a5aa02] {\n  display: block;\n}\n\n/*# sourceMappingURL=PaymentMethods.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/PaymentMethods.vue", "PaymentMethods.vue"], "names": [], "mappings": "AAwLA;EACA,gBAAA;ACvLA;AD0LA;EACA,sBAAA;ACvLA;AD0LA;EACA,gBAAA;ACvLA;ADyLA;EACA,cAAA;EACA,mBAAA;ACvLA;AD4LA;EACA,eAAA;ACzLA;AD4LA;EACA,YAAA;AC1LA;AD6LA;EACA,aAAA;AC3LA;AD+LA;EACA,cAAA;AC7LA;;AAEA,6CAA6C", "file": "PaymentMethods.vue", "sourcesContent": [`<template lang='pug'>
fieldset(data-test='paymentMethods')
  legend.has-text-bold.c-legend
    i18n.is-title-4 Payment info

  i18n.has-text-1 Other group members will be able to use this information to send you monthly contributions.

  ul.c-fields(ref='fields' data-test='fields')
    li.c-fields-item(
      v-for='(method, index) in form.methods'
      :key='\`method-\${index}\`'
      data-test='method'
    )
      fieldset
        .selectgroup.is-reversed.c-select(
          :class='{"is-shifted": methodsCount > 1 || method.name !== "choose" || method.value }'
        )
          select.select(
            v-model='method.name'
            :class='{ "is-empty": method.name === "choose"}'
            :aria-label='L("Payment method")'
            @change='handleSelectChange($event.target.value, index)'
          )
            i18n(tag='option' value='choose' disabled='true') Choose...
            option(v-for='(option, key) in config.options' :value='key') {{ option }}
          input.input(
            type='text'
            v-model='method.value'
            :aria-label='L("Payment value")'
            :placeholder='getPaymentInfoPlaceholder(method.name)'
            :class='{error: $v.form.methods.$each[index].value.$error}'
          )
          button.is-icon-small.is-btn-shifted(
            type='button'
            :aria-label='L("Remove method")'
            @click='removeMethod(index)'
            data-test='remove'
          )
            i.icon-times
        span.error(v-if='$v.form.methods.$each[index].value.$error') {{ getFirstErrorMessage(index) }}

  button.link.has-icon(
    type='button'
    @click='handleAddMethod'
    data-test='addMethod'
  )
    i.icon-plus
    i18n Add more
</template>

<script>
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { L } from '../../../../frontend/common/common.js'
import { maxLength, required } from 'vuelidate/lib/validators'
import { GROUP_PAYMENT_METHOD_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'

export default ({
  name: 'PaymentMethods',
  components: {},
  mixins: [validationMixin],
  data: () => ({
    config: {
      options: {
        // Key to store on the state and corresponding translation.
        bitcoin: L('Bitcoin'),
        lightning: L('Lightning'),
        paypal: L('Paypal'),
        venmo: L('Venmo'),
        other: L('Other')
      },
      placeholders: {
        bitcoin: L('BTC address'),
        paypal: L('Email, name or URL'),
        venmo: L('Username'),
        lightning: L('Lightning address')
      }
    },
    form: {
      methods: []
    },
    savedMethods: []
  }),
  validations () {
    return {
      form: {
        methods: {
          $each: {
            value: {
              [L('Payment info is required.')]: required,
              [L('Payment info cannot exceed {maxChars} characters.', {
                maxChars: GROUP_PAYMENT_METHOD_MAX_CHAR
              })]: maxLength(GROUP_PAYMENT_METHOD_MAX_CHAR)
            }
          }
        }
      }
    }
  },
  created () {
    this.savedMethods = this.ourGroupProfile.paymentMethods || []
    const savedMethodsCount = this.savedMethods.length

    if (savedMethodsCount === 0) {
      // set the minimum necessary to show the first empty field.
      Vue.set(this.form.methods, 0, {
        name: 'choose',
        value: ''
      })
      return
    }

    for (let index = 0; index < savedMethodsCount; index++) {
      const method = this.savedMethods[index]
      Vue.set(this.form.methods, index, {
        name: method.name,
        value: method.value
      })
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ]),
    methodsCount () {
      return Object.keys(this.form.methods).length
    }
  },
  methods: {
    handleSelectChange (methName, index) {
      // Focus the respective input
      this.$refs.fields.childNodes[index].getElementsByTagName('input')[0].focus()
    },
    getFirstErrorMessage (index) {
      const cur = this.$v.form.methods.$each[index].value
      if (cur.$error) {
        for (const key in cur.$params) {
          if (!cur[key]) {
            return key
          }
        }
      }
      return ''
    },
    handleAddMethod () {
      Vue.set(this.form.methods, this.methodsCount, {
        name: 'choose',
        value: ''
      })
    },
    removeMethod (index) {
      if (this.form.methods.length > 1) {
        // Remove the method from the list
        this.form.methods.splice(index, 1)
      } else {
        // Reset the method if it's the only one
        Vue.set(this.form.methods, 0, {
          name: 'choose',
          value: ''
        })
      }
    },
    checkHasUpdates () {
      // check if the payment details have been updated since load.
      const entriesToCheck = this.form.methods.filter(method => method.name !== 'choose')

      if (entriesToCheck.length !== this.savedMethods.length) return true
      else {
        return entriesToCheck.some(
          method => this.savedMethods.findIndex(saved => saved.name === method.name && saved.value === method.value) === -1
        )
      }
    },
    getPaymentInfoPlaceholder (method) {
      return this.config.placeholders[method] || ''
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-optional {
  font-weight: 400;
}

.c-legend {
  margin-bottom: 0.25rem;
}

.c-fields {
  margin-top: 1rem;

  &-item {
    display: block;
    margin-bottom: 1rem;
  }
}

.c-select {
  .select {
    min-width: 7rem;
  }

  &::after { // icon-sort-down
    left: 5.5rem;
  }

  .is-btn-shifted {
    display: none;
  }

  &.is-shifted {
    .is-btn-shifted {
      display: block;
    }
  }
}
</style>
`, ".c-optional {\n  font-weight: 400;\n}\n\n.c-legend {\n  margin-bottom: 0.25rem;\n}\n\n.c-fields {\n  margin-top: 1rem;\n}\n.c-fields-item {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.c-select .select {\n  min-width: 7rem;\n}\n.c-select::after {\n  left: 5.5rem;\n}\n.c-select .is-btn-shifted {\n  display: none;\n}\n.c-select.is-shifted .is-btn-shifted {\n  display: block;\n}\n\n/*# sourceMappingURL=PaymentMethods.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-a8a5aa02";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
fieldset(data-test='paymentMethods')
  legend.has-text-bold.c-legend
    i18n.is-title-4 Payment info

  i18n.has-text-1 Other group members will be able to use this information to send you monthly contributions.

  ul.c-fields(ref='fields' data-test='fields')
    li.c-fields-item(
      v-for='(method, index) in form.methods'
      :key='\`method-\${index}\`'
      data-test='method'
    )
      fieldset
        .selectgroup.is-reversed.c-select(
          :class='{"is-shifted": methodsCount > 1 || method.name !== "choose" || method.value }'
        )
          select.select(
            v-model='method.name'
            :class='{ "is-empty": method.name === "choose"}'
            :aria-label='L("Payment method")'
            @change='handleSelectChange($event.target.value, index)'
          )
            i18n(tag='option' value='choose' disabled='true') Choose...
            option(v-for='(option, key) in config.options' :value='key') {{ option }}
          input.input(
            type='text'
            v-model='method.value'
            :aria-label='L("Payment value")'
            :placeholder='getPaymentInfoPlaceholder(method.name)'
            :class='{error: $v.form.methods.$each[index].value.$error}'
          )
          button.is-icon-small.is-btn-shifted(
            type='button'
            :aria-label='L("Remove method")'
            @click='removeMethod(index)'
            data-test='remove'
          )
            i.icon-times
        span.error(v-if='$v.form.methods.$each[index].value.$error') {{ getFirstErrorMessage(index) }}

  button.link.has-icon(
    type='button'
    @click='handleAddMethod'
    data-test='addMethod'
  )
    i.icon-plus
    i18n Add more
</template>

<script>
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { L } from '../../../../frontend/common/common.js'
import { maxLength, required } from 'vuelidate/lib/validators'
import { GROUP_PAYMENT_METHOD_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import Vue from '../../../../node_modules/vue/dist/vue.esm.js'

export default ({
  name: 'PaymentMethods',
  components: {},
  mixins: [validationMixin],
  data: () => ({
    config: {
      options: {
        // Key to store on the state and corresponding translation.
        bitcoin: L('Bitcoin'),
        lightning: L('Lightning'),
        paypal: L('Paypal'),
        venmo: L('Venmo'),
        other: L('Other')
      },
      placeholders: {
        bitcoin: L('BTC address'),
        paypal: L('Email, name or URL'),
        venmo: L('Username'),
        lightning: L('Lightning address')
      }
    },
    form: {
      methods: []
    },
    savedMethods: []
  }),
  validations () {
    return {
      form: {
        methods: {
          $each: {
            value: {
              [L('Payment info is required.')]: required,
              [L('Payment info cannot exceed {maxChars} characters.', {
                maxChars: GROUP_PAYMENT_METHOD_MAX_CHAR
              })]: maxLength(GROUP_PAYMENT_METHOD_MAX_CHAR)
            }
          }
        }
      }
    }
  },
  created () {
    this.savedMethods = this.ourGroupProfile.paymentMethods || []
    const savedMethodsCount = this.savedMethods.length

    if (savedMethodsCount === 0) {
      // set the minimum necessary to show the first empty field.
      Vue.set(this.form.methods, 0, {
        name: 'choose',
        value: ''
      })
      return
    }

    for (let index = 0; index < savedMethodsCount; index++) {
      const method = this.savedMethods[index]
      Vue.set(this.form.methods, index, {
        name: method.name,
        value: method.value
      })
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ]),
    methodsCount () {
      return Object.keys(this.form.methods).length
    }
  },
  methods: {
    handleSelectChange (methName, index) {
      // Focus the respective input
      this.$refs.fields.childNodes[index].getElementsByTagName('input')[0].focus()
    },
    getFirstErrorMessage (index) {
      const cur = this.$v.form.methods.$each[index].value
      if (cur.$error) {
        for (const key in cur.$params) {
          if (!cur[key]) {
            return key
          }
        }
      }
      return ''
    },
    handleAddMethod () {
      Vue.set(this.form.methods, this.methodsCount, {
        name: 'choose',
        value: ''
      })
    },
    removeMethod (index) {
      if (this.form.methods.length > 1) {
        // Remove the method from the list
        this.form.methods.splice(index, 1)
      } else {
        // Reset the method if it's the only one
        Vue.set(this.form.methods, 0, {
          name: 'choose',
          value: ''
        })
      }
    },
    checkHasUpdates () {
      // check if the payment details have been updated since load.
      const entriesToCheck = this.form.methods.filter(method => method.name !== 'choose')

      if (entriesToCheck.length !== this.savedMethods.length) return true
      else {
        return entriesToCheck.some(
          method => this.savedMethods.findIndex(saved => saved.name === method.name && saved.value === method.value) === -1
        )
      }
    },
    getPaymentInfoPlaceholder (method) {
      return this.config.placeholders[method] || ''
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-optional {
  font-weight: 400;
}

.c-legend {
  margin-bottom: 0.25rem;
}

.c-fields {
  margin-top: 1rem;

  &-item {
    display: block;
    margin-bottom: 1rem;
  }
}

.c-select {
  .select {
    min-width: 7rem;
  }

  &::after { // icon-sort-down
    left: 5.5rem;
  }

  .is-btn-shifted {
    display: none;
  }

  &.is-shifted {
    .is-btn-shifted {
      display: block;
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
var PaymentMethods_default = __vue_component__;

// frontend/views/containers/contributions/NonMonetaryPledges.vue
var import_vuelidate2 = __toESM(require_lib());
var import_validators2 = __toESM(require_validators());
var __vue_script__2 = {
  name: "NonMonetaryPledges",
  mixins: [import_vuelidate2.validationMixin],
  props: {
    optional: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        pledges: [
          { id: randomHexString(10), value: "" }
        ]
      },
      config: {
        maxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
      }
    };
  },
  computed: {
    ...mapGetters([
      "ourGroupProfile"
    ])
  },
  created() {
    if (this.ourGroupProfile.nonMonetaryContributions.length) {
      this.form.pledges = this.ourGroupProfile.nonMonetaryContributions.map(
        (v) => ({ id: randomHexString(10), value: v })
      );
    }
  },
  methods: {
    removeEntry(index) {
      if (this.form.pledges.length > 1) {
        this.form.pledges.splice(index, 1);
      } else {
        this.form.pledges = [{ id: randomHexString(10), value: "" }];
      }
    },
    addPledgeEntry() {
      this.form.pledges.push({ id: randomHexString(10), value: "" });
    },
    getFieldErrorMsg(index) {
      const currValidation = this.$v.form.pledges.$each[index].value;
      if (currValidation.$error) {
        for (const key in currValidation.$params) {
          if (!currValidation[key]) {
            return key;
          }
        }
      }
      return "";
    },
    checkHasUpdates() {
      const inProfile = this.ourGroupProfile.nonMonetaryContributions;
      if (this.form.pledges.length !== inProfile.length) return true;
      else {
        return this.form.pledges.some((entry) => !inProfile.includes(entry.value));
      }
    },
    getValues() {
      return this.form.pledges.map((entry) => entry.value).filter(Boolean);
    },
    validate() {
      this.$v.form.$touch();
      return !this.$v.form.$invalid;
    }
  },
  validations() {
    return {
      form: {
        pledges: {
          [L("At least one non-monetary pledge is required")]: (value) => {
            return this.optional || // Don't need to validate when 'optional'
            value?.length && value.some((entry) => entry.value);
          },
          $each: {
            value: {
              [L("Non-monetary pledge cannot exceed {maxChars} characters", {
                maxChars: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
              })]: (0, import_validators2.maxLength)(GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR)
            }
          }
        }
      }
    };
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fieldset",
    {
      directives: [
        {
          name: "error",
          rawName: "v-error:pledges",
          value: { attrs: { "data-test": "badPledges" } },
          expression: '{ attrs: { "data-test": "badPledges" } }',
          arg: "pledges"
        }
      ],
      attrs: { "data-test": "nonMonetaryPledges" }
    },
    [
      _c(
        "legend",
        { staticClass: "has-text-bold c-legend" },
        [
          _c("i18n", { staticClass: "is-title-4" }, [
            _vm._v("Non-monetary pledge")
          ]),
          _vm.optional ? _c("i18n", { staticClass: "c-optional" }, [_vm._v("(optional)")]) : _vm._e()
        ],
        1
      ),
      _c("i18n", { staticClass: "has-text-1" }, [
        _vm._v(
          "All members can support each other with non-monetary contributions. There's value in time, skills, and willingness to help the group."
        )
      ]),
      _c(
        "ul",
        {
          staticClass: "c-fields",
          attrs: { "data-test": "nonMonetaryFields" }
        },
        _vm._l(_vm.form.pledges, function(pledge, index) {
          return _c(
            "li",
            {
              key: "pledge-" + pledge.id,
              staticClass: "c-fields-item",
              attrs: { "data-test": "pledgeEntry" }
            },
            [
              _c("fieldset", [
                _c("div", { staticClass: "inputgroup" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: pledge.value,
                        expression: "pledge.value",
                        modifiers: { trim: true }
                      }
                    ],
                    staticClass: "input",
                    class: {
                      error: _vm.$v.form.pledges.$each[index].value.$error
                    },
                    attrs: {
                      type: "text",
                      "data-test": "inputNonMonetaryPledge",
                      maxlength: _vm.config.maxChar,
                      "aria-label": _vm.L("Pledge value")
                    },
                    domProps: { value: pledge.value },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return;
                        }
                        _vm.$set(pledge, "value", $event.target.value.trim());
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate();
                      }
                    }
                  }),
                  _c(
                    "button",
                    {
                      staticClass: "is-icon-small is-btn-shifted",
                      attrs: {
                        type: "button",
                        "aria-label": _vm.L("Remove pledge entry"),
                        "data-test": "removePledgeEntry"
                      },
                      on: {
                        click: function($event) {
                          return _vm.removeEntry(index);
                        }
                      }
                    },
                    [_c("i", { staticClass: "icon-times" })]
                  )
                ]),
                _vm.$v.form.pledges.$each[index].value.$error ? _c("span", { staticClass: "error" }, [
                  _vm._v(_vm._s(_vm.getFieldErrorMsg(index)))
                ]) : _vm._e()
              ])
            ]
          );
        }),
        0
      ),
      _c(
        "button",
        {
          staticClass: "link has-icon",
          attrs: { type: "button", "data-test": "addPledgeEntry" },
          on: { click: _vm.addPledgeEntry }
        },
        [
          _c("i", { staticClass: "icon-plus" }),
          _c("i18n", [_vm._v("Add more")])
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-437bef4a_0", { source: ".c-optional[data-v-437bef4a] {\n  display: inline-block;\n  color: var(--text_1);\n  user-select: none;\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n}\n.c-legend[data-v-437bef4a] {\n  margin-bottom: 0.25rem;\n}\n.c-fields[data-v-437bef4a] {\n  margin-top: 1rem;\n}\n.c-fields-item[data-v-437bef4a] {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=NonMonetaryPledges.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/NonMonetaryPledges.vue", "NonMonetaryPledges.vue"], "names": [], "mappings": "AAyJA;EACA,qBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;ACxJA;AD2JA;EACA,sBAAA;ACxJA;AD2JA;EACA,gBAAA;ACxJA;AD0JA;EACA,cAAA;EACA,mBAAA;ACxJA;;AAEA,iDAAiD", "file": "NonMonetaryPledges.vue", "sourcesContent": [`<template lang='pug'>
fieldset(
  data-test='nonMonetaryPledges'
  v-error:pledges='{ attrs: { "data-test": "badPledges" } }'
)
  legend.has-text-bold.c-legend
    i18n.is-title-4 Non-monetary pledge
    i18n.c-optional(v-if='optional') (optional)

  i18n.has-text-1 All members can support each other with non-monetary contributions. There's value in time, skills, and willingness to help the group.

  ul.c-fields(data-test='nonMonetaryFields')
    li.c-fields-item(
      v-for='(pledge, index) in form.pledges'
      :key='\`pledge-\${pledge.id}\`'
      data-test='pledgeEntry'
    )
      fieldset
        .inputgroup
          input.input(
            type='text'
            v-model.trim='pledge.value'
            data-test='inputNonMonetaryPledge'
            :maxlength='config.maxChar'
            :aria-label='L("Pledge value")'
            :class='{ error: $v.form.pledges.$each[index].value.$error }'
          )
          button.is-icon-small.is-btn-shifted(
            type='button'
            :aria-label='L("Remove pledge entry")'
            @click='removeEntry(index)'
            data-test='removePledgeEntry'
          )
            i.icon-times

        span.error(v-if='$v.form.pledges.$each[index].value.$error') {{ getFieldErrorMsg(index) }}

  button.link.has-icon(
    type='button'
    @click='addPledgeEntry'
    data-test='addPledgeEntry'
  )
    i.icon-plus
    i18n Add more
</template>

<script>
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { maxLength } from 'vuelidate/lib/validators'
import { GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import { randomHexString } from 'turtledash'

export default {
  name: 'NonMonetaryPledges',
  mixins: [validationMixin],
  props: {
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        pledges: [
          { id: randomHexString(10), value: '' }
        ]
      },
      config: {
        maxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
      }
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ])
  },
  created () {
    if (this.ourGroupProfile.nonMonetaryContributions.length) {
      this.form.pledges = this.ourGroupProfile.nonMonetaryContributions.map(
        v => ({ id: randomHexString(10), value: v })
      )
    }
  },
  methods: {
    removeEntry (index) {
      if (this.form.pledges.length > 1) {
        // Remove the method from the list
        this.form.pledges.splice(index, 1)
      } else {
        this.form.pledges = [{ id: randomHexString(10), value: '' }]
      }
    },
    addPledgeEntry () {
      this.form.pledges.push({ id: randomHexString(10), value: '' })
    },
    getFieldErrorMsg (index) {
      // reference: https://vuelidate.js.org/#sub-collections-validation
      const currValidation = this.$v.form.pledges.$each[index].value

      if (currValidation.$error) {
        for (const key in currValidation.$params) {
          if (!currValidation[key]) {
            return key
          }
        }
      }
      return ''
    },
    checkHasUpdates () {
      const inProfile = this.ourGroupProfile.nonMonetaryContributions

      if (this.form.pledges.length !== inProfile.length) return true
      else {
        return this.form.pledges.some(entry => !inProfile.includes(entry.value))
      }
    },
    getValues () {
      return this.form.pledges.map(entry => entry.value).filter(Boolean)
    },
    validate () {
      this.$v.form.$touch()
      return !this.$v.form.$invalid
    }
  },
  validations () {
    return {
      form: {
        pledges: {
          [L('At least one non-monetary pledge is required')]: (value) => {
            return this.optional || // Don't need to validate when 'optional'
              (value?.length && value.some(entry => entry.value))
          },
          $each: {
            value: {
              [L('Non-monetary pledge cannot exceed {maxChars} characters', {
                maxChars: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
              })]: maxLength(GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR)
            }
          }
        }
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-optional {
  display: inline-block;
  color: $text_1;
  user-select: none;
  font-size: $size_5;
  margin-left: 0.5rem;
}

.c-legend {
  margin-bottom: 0.25rem;
}

.c-fields {
  margin-top: 1rem;

  &-item {
    display: block;
    margin-bottom: 1rem;
  }
}
</style>
`, ".c-optional {\n  display: inline-block;\n  color: var(--text_1);\n  user-select: none;\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n}\n\n.c-legend {\n  margin-bottom: 0.25rem;\n}\n\n.c-fields {\n  margin-top: 1rem;\n}\n.c-fields-item {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=NonMonetaryPledges.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-437bef4a";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
fieldset(
  data-test='nonMonetaryPledges'
  v-error:pledges='{ attrs: { "data-test": "badPledges" } }'
)
  legend.has-text-bold.c-legend
    i18n.is-title-4 Non-monetary pledge
    i18n.c-optional(v-if='optional') (optional)

  i18n.has-text-1 All members can support each other with non-monetary contributions. There's value in time, skills, and willingness to help the group.

  ul.c-fields(data-test='nonMonetaryFields')
    li.c-fields-item(
      v-for='(pledge, index) in form.pledges'
      :key='\`pledge-\${pledge.id}\`'
      data-test='pledgeEntry'
    )
      fieldset
        .inputgroup
          input.input(
            type='text'
            v-model.trim='pledge.value'
            data-test='inputNonMonetaryPledge'
            :maxlength='config.maxChar'
            :aria-label='L("Pledge value")'
            :class='{ error: $v.form.pledges.$each[index].value.$error }'
          )
          button.is-icon-small.is-btn-shifted(
            type='button'
            :aria-label='L("Remove pledge entry")'
            @click='removeEntry(index)'
            data-test='removePledgeEntry'
          )
            i.icon-times

        span.error(v-if='$v.form.pledges.$each[index].value.$error') {{ getFieldErrorMsg(index) }}

  button.link.has-icon(
    type='button'
    @click='addPledgeEntry'
    data-test='addPledgeEntry'
  )
    i.icon-plus
    i18n Add more
</template>

<script>
import { mapGetters } from 'vuex'
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { maxLength } from 'vuelidate/lib/validators'
import { GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'
import { randomHexString } from 'turtledash'

export default {
  name: 'NonMonetaryPledges',
  mixins: [validationMixin],
  props: {
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        pledges: [
          { id: randomHexString(10), value: '' }
        ]
      },
      config: {
        maxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
      }
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile'
    ])
  },
  created () {
    if (this.ourGroupProfile.nonMonetaryContributions.length) {
      this.form.pledges = this.ourGroupProfile.nonMonetaryContributions.map(
        v => ({ id: randomHexString(10), value: v })
      )
    }
  },
  methods: {
    removeEntry (index) {
      if (this.form.pledges.length > 1) {
        // Remove the method from the list
        this.form.pledges.splice(index, 1)
      } else {
        this.form.pledges = [{ id: randomHexString(10), value: '' }]
      }
    },
    addPledgeEntry () {
      this.form.pledges.push({ id: randomHexString(10), value: '' })
    },
    getFieldErrorMsg (index) {
      // reference: https://vuelidate.js.org/#sub-collections-validation
      const currValidation = this.$v.form.pledges.$each[index].value

      if (currValidation.$error) {
        for (const key in currValidation.$params) {
          if (!currValidation[key]) {
            return key
          }
        }
      }
      return ''
    },
    checkHasUpdates () {
      const inProfile = this.ourGroupProfile.nonMonetaryContributions

      if (this.form.pledges.length !== inProfile.length) return true
      else {
        return this.form.pledges.some(entry => !inProfile.includes(entry.value))
      }
    },
    getValues () {
      return this.form.pledges.map(entry => entry.value).filter(Boolean)
    },
    validate () {
      this.$v.form.$touch()
      return !this.$v.form.$invalid
    }
  },
  validations () {
    return {
      form: {
        pledges: {
          [L('At least one non-monetary pledge is required')]: (value) => {
            return this.optional || // Don't need to validate when 'optional'
              (value?.length && value.some(entry => entry.value))
          },
          $each: {
            value: {
              [L('Non-monetary pledge cannot exceed {maxChars} characters', {
                maxChars: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
              })]: maxLength(GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR)
            }
          }
        }
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-optional {
  display: inline-block;
  color: $text_1;
  user-select: none;
  font-size: $size_5;
  margin-left: 0.5rem;
}

.c-legend {
  margin-bottom: 0.25rem;
}

.c-fields {
  margin-top: 1rem;

  &-item {
    display: block;
    margin-bottom: 1rem;
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
var NonMonetaryPledges_default = __vue_component__2;

// frontend/views/containers/contributions/GroupPledgesGraph.vue
var __vue_script__3 = {
  name: "GroupPledgesGraph",
  components: {
    PieChart: PieChart_default,
    GraphLegendItem: GraphLegendItem_default,
    Tooltip: Tooltip_default
  },
  props: {
    type: {
      type: String,
      // incomeAmount || pledgeAmount TODO validator
      default: null
    },
    amount: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      "groupSettings",
      "groupProfiles",
      "currentPaymentPeriod",
      "haveNeedsForThisPeriod",
      "ourIdentityContractId"
    ]),
    graphData() {
      const doWePledge = this.type === "pledgeAmount";
      const doWeNeedIncome = this.type === "incomeAmount";
      const mincome = this.groupSettings.mincomeAmount;
      const ourPledgeAmount = doWePledge && this.amount >= 0 && this.amount;
      const ourIncomeAmount = doWeNeedIncome && this.amount < mincome && this.amount;
      const haveNeeds = this.haveNeedsForThisPeriod(this.currentPaymentPeriod).filter((entry) => entry.memberID !== this.ourIdentityContractId);
      const othersIncomeNeeded = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed < 0 ? accu + -1 * entry.haveNeed : accu,
        0
      );
      const othersPledgesAmount = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed > 0 ? accu + entry.haveNeed : accu,
        0
      );
      const ourIncomeNeeded = doWeNeedIncome && ourIncomeAmount !== null ? mincome - ourIncomeAmount : null;
      const pledgeTotal = othersPledgesAmount + ourPledgeAmount;
      const groupGoal = othersIncomeNeeded + ourIncomeNeeded;
      const neededPledges = Math.max(0, groupGoal - pledgeTotal);
      let ourIncomeToReceive = ourIncomeNeeded;
      if (!doWePledge && neededPledges > 0) {
        haveNeeds.push({ memberID: this.ourIdentityContractId, haveNeed: ourIncomeAmount - mincome });
        ourIncomeToReceive = unadjustedDistribution({ haveNeeds, minimize: false }).filter((i) => i.toMemberID === this.ourIdentityContractId).reduce((acc, cur) => cur.amount + acc, 0);
      }
      return {
        othersPledgesAmount,
        ourPledgeAmount,
        ourIncomeNeeded,
        ourIncomeToReceive,
        pledgeTotal,
        groupGoal,
        neededPledges,
        surplus: Math.max(0, pledgeTotal - othersIncomeNeeded - ourIncomeNeeded)
      };
    },
    mainSlices() {
      const { groupGoal, othersPledgesAmount, ourPledgeAmount, pledgeTotal, surplus } = this.graphData;
      if (groupGoal === 0) {
        return pledgeTotal > 0 ? [{ id: "goal_zero", percent: 1, color: "primary" }] : [];
      }
      const slices = [];
      if (othersPledgesAmount > 0) {
        const pledgePerc = (othersPledgesAmount / pledgeTotal).toFixed(2);
        const surplusToBeRemoved = surplus * pledgePerc;
        slices.push({
          id: "othersPledgesAmount",
          percent: this.decimalSlice(othersPledgesAmount - surplusToBeRemoved),
          color: "primary"
        });
      }
      if (ourPledgeAmount > 0) {
        const pledgePerc = (ourPledgeAmount / pledgeTotal).toFixed(2);
        const surplusToBeRemoved = surplus * pledgePerc;
        slices.push({
          id: "ourPledgeAmount",
          percent: this.decimalSlice(ourPledgeAmount - surplusToBeRemoved),
          color: "primary"
        });
      }
      return slices;
    },
    innerSlices() {
      const { ourIncomeToReceive, surplus } = this.graphData;
      if (ourIncomeToReceive > 0) {
        return [{
          id: "ourIncomeToReceive",
          percent: this.decimalSlice(ourIncomeToReceive),
          color: "warning"
        }];
      }
      if (surplus > 0) {
        return [{
          id: "surplus",
          percent: this.decimalSlice(surplus),
          color: "success"
        }];
      }
      return [];
    }
  },
  methods: {
    withGroupCurrency,
    decimalSlice(amount) {
      const perc = amount / this.graphData.groupGoal;
      return Math.min(Math.max(0, perc), 1);
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-wrapper" },
    [
      _c("i18n", { staticClass: "sr-only", attrs: { tag: "h3" } }, [
        _vm._v("Group Pledging Status")
      ]),
      _c(
        "pie-chart",
        {
          staticClass: "c-chart",
          attrs: { slices: _vm.mainSlices, "inner-slices": _vm.innerSlices }
        },
        [
          _c(
            "i18n",
            {
              staticClass: "has-text-1 c-title",
              attrs: { tag: "p", args: _vm.LTags("span") }
            },
            [_vm._v("{span_}Group{_span} goal")]
          ),
          _c("span", { staticClass: "is-title-4" }, [
            _vm._v(_vm._s(_vm.withGroupCurrency(_vm.graphData.groupGoal)))
          ])
        ],
        1
      ),
      _c(
        "ul",
        {
          staticClass: "c-legendList",
          attrs: {
            "aria-label": _vm.L("Group pledging summary"),
            "data-test": "groupPledgeSummary"
          }
        },
        [
          _c(
            "graph-legend-item",
            {
              attrs: {
                amount: _vm.withGroupCurrency(_vm.graphData.pledgeTotal),
                color: "primary-solid",
                variant: "side"
              }
            },
            [_vm._v(_vm._s(_vm.L("Total Pledged")))]
          ),
          _c(
            "graph-legend-item",
            {
              attrs: {
                amount: _vm.withGroupCurrency(_vm.graphData.neededPledges),
                color: "blank",
                variant: "side"
              }
            },
            [_vm._v(_vm._s(_vm.L("Needed Pledges")))]
          ),
          _vm.graphData.surplus ? _c(
            "graph-legend-item",
            {
              attrs: {
                amount: _vm.withGroupCurrency(_vm.graphData.surplus),
                color: "success-solid",
                variant: "side"
              }
            },
            [
              _vm._v(_vm._s(_vm.L("Surplus"))),
              _c(
                "template",
                { slot: "description" },
                [
                  _c("i18n", [
                    _vm._v(
                      "This amount will not be used until someone needs it."
                    )
                  ])
                ],
                1
              )
            ],
            2
          ) : _vm._e(),
          _vm.graphData.ourIncomeToReceive > 0 ? _c(
            "graph-legend-item",
            {
              attrs: {
                amount: _vm.withGroupCurrency(
                  _vm.graphData.ourIncomeToReceive
                ),
                color: "warning-solid",
                variant: "side"
              }
            },
            [
              _vm._v(_vm._s(_vm.L("You'll receive"))),
              _vm.graphData.ourIncomeNeeded !== _vm.graphData.ourIncomeToReceive ? _c(
                "tooltip",
                {
                  attrs: {
                    isTextCenter: true,
                    text: _vm.L(
                      "Based on other members pledges, the group is not able to provide a full mincome yet."
                    )
                  }
                },
                [
                  _c("i", {
                    staticClass: "icon-info-circle is-suffix has-text-primary"
                  })
                ]
              ) : _vm._e()
            ],
            1
          ) : _vm._e()
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-3089ed05_0", { source: ".c-wrapper[data-v-3089ed05] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  align-content: flex-start;\n}\n@media screen and (min-width: 769px), print {\n.c-wrapper[data-v-3089ed05] {\n    flex-direction: column;\n}\n}\n.c-chart[data-v-3089ed05]  .c-piechart {\n  width: 7.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-chart[data-v-3089ed05]  .c-piechart {\n    width: 10rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-chart[data-v-3089ed05]  .c-piechart {\n    width: 12rem;\n}\n}\n.c-title[data-v-3089ed05] {\n  margin-bottom: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n.c-title[data-v-3089ed05] {\n    text-transform: capitalize;\n}\n.c-title[data-v-3089ed05]  span {\n    display: none;\n}\n}\n.c-legendList[data-v-3089ed05] {\n  flex-grow: 1;\n  margin: 0 0.5rem 0 1rem;\n  max-width: 20rem;\n}\n@media screen and (min-width: 769px), print {\n.c-legendList[data-v-3089ed05] {\n    margin: 1.5rem 0 0 0;\n    width: 100%;\n}\n}\n\n/*# sourceMappingURL=GroupPledgesGraph.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/GroupPledgesGraph.vue", "GroupPledgesGraph.vue"], "names": [], "mappings": "AAiMA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AChMA;AACA;AD2LA;IAOA,sBAAA;AC/LE;AACF;ADmMA;EACA,aAAA;AChMA;AACA;AD8LA;IAIA,YAAA;AC/LE;AACF;AACA;ADyLA;IAQA,YAAA;AC9LE;AACF;ADkMA;EACA,sBAAA;AC/LA;AACA;AD6LA;IAIA,0BAAA;AC9LE;ADgMF;IACA,aAAA;AC9LE;AACF;ADkMA;EACA,YAAA;EACA,uBAAA;EACA,gBAAA;AC/LA;AACA;AD2LA;IAMA,oBAAA;IACA,WAAA;AC9LE;AACF;;AAEA,gDAAgD", "file": "GroupPledgesGraph.vue", "sourcesContent": [`<template lang='pug'>
.c-wrapper
  i18n.sr-only(tag='h3') Group Pledging Status
  pie-chart.c-chart(
    :slices='mainSlices'
    :inner-slices='innerSlices'
  )
    i18n.has-text-1.c-title(tag='p' :args='LTags("span")') {span_}Group{_span} goal
    span.is-title-4 {{ withGroupCurrency(graphData.groupGoal) }}

  ul.c-legendList(:aria-label='L("Group pledging summary")' data-test='groupPledgeSummary')
    graph-legend-item(
      :amount='withGroupCurrency(graphData.pledgeTotal)'
      color='primary-solid'
      variant='side'
    ) {{ L('Total Pledged') }}

    graph-legend-item(
      :amount='withGroupCurrency(graphData.neededPledges)'
      color='blank'
      variant='side'
    ) {{ L('Needed Pledges') }}

    graph-legend-item(
      v-if='graphData.surplus'
      :amount='withGroupCurrency(graphData.surplus)'
      color='success-solid'
      variant='side'
    ) {{ L('Surplus') }}
      template(slot='description')
        i18n This amount will not be used until someone needs it.

    graph-legend-item(
      v-if='graphData.ourIncomeToReceive > 0'
      :amount='withGroupCurrency(graphData.ourIncomeToReceive)'
      color='warning-solid'
      variant='side'
    ) {{ L("You'll receive") }}
      tooltip(
        v-if='graphData.ourIncomeNeeded !== graphData.ourIncomeToReceive'
        :isTextCenter='true'
        :text='L("Based on other members pledges, the group is not able to provide a full mincome yet.")'
      )
        i.icon-info-circle.is-suffix.has-text-primary
</template>

<script>
import { unadjustedDistribution } from '../../../../frontend/model/contracts/shared/distribution/distribution.js'
import { mapGetters } from 'vuex'
import { PieChart, GraphLegendItem } from '../../../../frontend/views/components/graphs/index.js'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'GroupPledgesGraph',
  components: {
    PieChart,
    GraphLegendItem,
    Tooltip
  },
  props: {
    type: {
      type: String, // incomeAmount || pledgeAmount TODO validator
      default: null
    },
    amount: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupProfiles',
      'currentPaymentPeriod',
      'haveNeedsForThisPeriod',
      'ourIdentityContractId'
    ]),
    graphData () {
      const doWePledge = this.type === 'pledgeAmount'
      const doWeNeedIncome = this.type === 'incomeAmount'
      const mincome = this.groupSettings.mincomeAmount
      // NOTE: validate this.amount to avoid negative values in the graph
      const ourPledgeAmount = doWePledge && this.amount >= 0 && this.amount
      const ourIncomeAmount = doWeNeedIncome && this.amount < mincome && this.amount
      const haveNeeds = this.haveNeedsForThisPeriod(this.currentPaymentPeriod)
        .filter(entry => entry.memberID !== this.ourIdentityContractId)
      const othersIncomeNeeded = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed < 0 ? accu + (-1 * entry.haveNeed) : accu, 0
      )
      const othersPledgesAmount = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed > 0 ? accu + entry.haveNeed : accu, 0
      )

      const ourIncomeNeeded = doWeNeedIncome && ourIncomeAmount !== null ? mincome - ourIncomeAmount : null
      const pledgeTotal = othersPledgesAmount + ourPledgeAmount
      const groupGoal = othersIncomeNeeded + ourIncomeNeeded
      const neededPledges = Math.max(0, groupGoal - pledgeTotal)
      let ourIncomeToReceive = ourIncomeNeeded

      if (!doWePledge && neededPledges > 0) {
        haveNeeds.push({ memberID: this.ourIdentityContractId, haveNeed: ourIncomeAmount - mincome })

        ourIncomeToReceive = unadjustedDistribution({ haveNeeds, minimize: false })
          .filter(i => i.toMemberID === this.ourIdentityContractId)
          .reduce((acc, cur) => cur.amount + acc, 0)
      }

      return {
        othersPledgesAmount,
        ourPledgeAmount,
        ourIncomeNeeded,
        ourIncomeToReceive,
        pledgeTotal,
        groupGoal,
        neededPledges,
        surplus: Math.max(0, pledgeTotal - othersIncomeNeeded - ourIncomeNeeded)
      }
    },
    mainSlices () {
      const { groupGoal, othersPledgesAmount, ourPledgeAmount, pledgeTotal, surplus } = this.graphData

      if (groupGoal === 0) {
        return pledgeTotal > 0
          ? [{ id: 'goal_zero', percent: 1, color: 'primary' }]
          : []
      }

      // Note: surplus is added on the innerSlices, so we need to substract its part from the pledges.
      // To be fair, we remove the equivalent percentage of each pledge part (others and ours)

      const slices = []

      if (othersPledgesAmount > 0) {
        const pledgePerc = (othersPledgesAmount / pledgeTotal).toFixed(2)
        const surplusToBeRemoved = surplus * pledgePerc

        slices.push({
          id: 'othersPledgesAmount',
          percent: this.decimalSlice(othersPledgesAmount - surplusToBeRemoved),
          color: 'primary'
        })
      }

      if (ourPledgeAmount > 0) {
        const pledgePerc = (ourPledgeAmount / pledgeTotal).toFixed(2)
        const surplusToBeRemoved = surplus * pledgePerc

        slices.push({
          id: 'ourPledgeAmount',
          percent: this.decimalSlice(ourPledgeAmount - surplusToBeRemoved),
          color: 'primary'
        })
      }

      return slices
    },
    innerSlices () {
      const { ourIncomeToReceive, surplus } = this.graphData

      if (ourIncomeToReceive > 0) {
        return [{
          id: 'ourIncomeToReceive',
          percent: this.decimalSlice(ourIncomeToReceive),
          color: 'warning'
        }]
      }

      if (surplus > 0) {
        return [{
          id: 'surplus',
          percent: this.decimalSlice(surplus),
          color: 'success'
        }]
      }

      return []
    }
  },
  methods: {
    withGroupCurrency,
    decimalSlice (amount) {
      const perc = amount / this.graphData.groupGoal
      // avoid breaking the graph when perc is bigger than 1 or smaller than 0
      return Math.min(Math.max(0, perc), 1)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  align-content: flex-start;

  @include tablet {
    flex-direction: column;
  }
}

.c-chart {
  ::v-deep .c-piechart {
    width: 7.5rem;

    @include tablet {
      width: 10rem;
    }

    @include desktop {
      width: 12rem;
    }
  }
}

.c-title {
  margin-bottom: 0.25rem;

  @include phone {
    text-transform: capitalize;

    ::v-deep span {
      display: none;
    }
  }
}

.c-legendList {
  flex-grow: 1;
  margin: 0 0.5rem 0 1rem;
  max-width: 20rem;

  @include tablet {
    margin: 1.5rem 0 0 0;
    width: 100%;
  }
}
</style>
`, ".c-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  align-content: flex-start;\n}\n@media screen and (min-width: 769px), print {\n  .c-wrapper {\n    flex-direction: column;\n  }\n}\n\n.c-chart ::v-deep .c-piechart {\n  width: 7.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-chart ::v-deep .c-piechart {\n    width: 10rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-chart ::v-deep .c-piechart {\n    width: 12rem;\n  }\n}\n\n.c-title {\n  margin-bottom: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .c-title {\n    text-transform: capitalize;\n  }\n  .c-title ::v-deep span {\n    display: none;\n  }\n}\n\n.c-legendList {\n  flex-grow: 1;\n  margin: 0 0.5rem 0 1rem;\n  max-width: 20rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-legendList {\n    margin: 1.5rem 0 0 0;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=GroupPledgesGraph.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-3089ed05";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.c-wrapper
  i18n.sr-only(tag='h3') Group Pledging Status
  pie-chart.c-chart(
    :slices='mainSlices'
    :inner-slices='innerSlices'
  )
    i18n.has-text-1.c-title(tag='p' :args='LTags("span")') {span_}Group{_span} goal
    span.is-title-4 {{ withGroupCurrency(graphData.groupGoal) }}

  ul.c-legendList(:aria-label='L("Group pledging summary")' data-test='groupPledgeSummary')
    graph-legend-item(
      :amount='withGroupCurrency(graphData.pledgeTotal)'
      color='primary-solid'
      variant='side'
    ) {{ L('Total Pledged') }}

    graph-legend-item(
      :amount='withGroupCurrency(graphData.neededPledges)'
      color='blank'
      variant='side'
    ) {{ L('Needed Pledges') }}

    graph-legend-item(
      v-if='graphData.surplus'
      :amount='withGroupCurrency(graphData.surplus)'
      color='success-solid'
      variant='side'
    ) {{ L('Surplus') }}
      template(slot='description')
        i18n This amount will not be used until someone needs it.

    graph-legend-item(
      v-if='graphData.ourIncomeToReceive > 0'
      :amount='withGroupCurrency(graphData.ourIncomeToReceive)'
      color='warning-solid'
      variant='side'
    ) {{ L("You'll receive") }}
      tooltip(
        v-if='graphData.ourIncomeNeeded !== graphData.ourIncomeToReceive'
        :isTextCenter='true'
        :text='L("Based on other members pledges, the group is not able to provide a full mincome yet.")'
      )
        i.icon-info-circle.is-suffix.has-text-primary
</template>

<script>
import { unadjustedDistribution } from '../../../../frontend/model/contracts/shared/distribution/distribution.js'
import { mapGetters } from 'vuex'
import { PieChart, GraphLegendItem } from '../../../../frontend/views/components/graphs/index.js'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'

export default ({
  name: 'GroupPledgesGraph',
  components: {
    PieChart,
    GraphLegendItem,
    Tooltip
  },
  props: {
    type: {
      type: String, // incomeAmount || pledgeAmount TODO validator
      default: null
    },
    amount: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupProfiles',
      'currentPaymentPeriod',
      'haveNeedsForThisPeriod',
      'ourIdentityContractId'
    ]),
    graphData () {
      const doWePledge = this.type === 'pledgeAmount'
      const doWeNeedIncome = this.type === 'incomeAmount'
      const mincome = this.groupSettings.mincomeAmount
      // NOTE: validate this.amount to avoid negative values in the graph
      const ourPledgeAmount = doWePledge && this.amount >= 0 && this.amount
      const ourIncomeAmount = doWeNeedIncome && this.amount < mincome && this.amount
      const haveNeeds = this.haveNeedsForThisPeriod(this.currentPaymentPeriod)
        .filter(entry => entry.memberID !== this.ourIdentityContractId)
      const othersIncomeNeeded = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed < 0 ? accu + (-1 * entry.haveNeed) : accu, 0
      )
      const othersPledgesAmount = haveNeeds.reduce(
        (accu, entry) => entry.haveNeed > 0 ? accu + entry.haveNeed : accu, 0
      )

      const ourIncomeNeeded = doWeNeedIncome && ourIncomeAmount !== null ? mincome - ourIncomeAmount : null
      const pledgeTotal = othersPledgesAmount + ourPledgeAmount
      const groupGoal = othersIncomeNeeded + ourIncomeNeeded
      const neededPledges = Math.max(0, groupGoal - pledgeTotal)
      let ourIncomeToReceive = ourIncomeNeeded

      if (!doWePledge && neededPledges > 0) {
        haveNeeds.push({ memberID: this.ourIdentityContractId, haveNeed: ourIncomeAmount - mincome })

        ourIncomeToReceive = unadjustedDistribution({ haveNeeds, minimize: false })
          .filter(i => i.toMemberID === this.ourIdentityContractId)
          .reduce((acc, cur) => cur.amount + acc, 0)
      }

      return {
        othersPledgesAmount,
        ourPledgeAmount,
        ourIncomeNeeded,
        ourIncomeToReceive,
        pledgeTotal,
        groupGoal,
        neededPledges,
        surplus: Math.max(0, pledgeTotal - othersIncomeNeeded - ourIncomeNeeded)
      }
    },
    mainSlices () {
      const { groupGoal, othersPledgesAmount, ourPledgeAmount, pledgeTotal, surplus } = this.graphData

      if (groupGoal === 0) {
        return pledgeTotal > 0
          ? [{ id: 'goal_zero', percent: 1, color: 'primary' }]
          : []
      }

      // Note: surplus is added on the innerSlices, so we need to substract its part from the pledges.
      // To be fair, we remove the equivalent percentage of each pledge part (others and ours)

      const slices = []

      if (othersPledgesAmount > 0) {
        const pledgePerc = (othersPledgesAmount / pledgeTotal).toFixed(2)
        const surplusToBeRemoved = surplus * pledgePerc

        slices.push({
          id: 'othersPledgesAmount',
          percent: this.decimalSlice(othersPledgesAmount - surplusToBeRemoved),
          color: 'primary'
        })
      }

      if (ourPledgeAmount > 0) {
        const pledgePerc = (ourPledgeAmount / pledgeTotal).toFixed(2)
        const surplusToBeRemoved = surplus * pledgePerc

        slices.push({
          id: 'ourPledgeAmount',
          percent: this.decimalSlice(ourPledgeAmount - surplusToBeRemoved),
          color: 'primary'
        })
      }

      return slices
    },
    innerSlices () {
      const { ourIncomeToReceive, surplus } = this.graphData

      if (ourIncomeToReceive > 0) {
        return [{
          id: 'ourIncomeToReceive',
          percent: this.decimalSlice(ourIncomeToReceive),
          color: 'warning'
        }]
      }

      if (surplus > 0) {
        return [{
          id: 'surplus',
          percent: this.decimalSlice(surplus),
          color: 'success'
        }]
      }

      return []
    }
  },
  methods: {
    withGroupCurrency,
    decimalSlice (amount) {
      const perc = amount / this.graphData.groupGoal
      // avoid breaking the graph when perc is bigger than 1 or smaller than 0
      return Math.min(Math.max(0, perc), 1)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  align-content: flex-start;

  @include tablet {
    flex-direction: column;
  }
}

.c-chart {
  ::v-deep .c-piechart {
    width: 7.5rem;

    @include tablet {
      width: 10rem;
    }

    @include desktop {
      width: 12rem;
    }
  }
}

.c-title {
  margin-bottom: 0.25rem;

  @include phone {
    text-transform: capitalize;

    ::v-deep span {
      display: none;
    }
  }
}

.c-legendList {
  flex-grow: 1;
  margin: 0 0.5rem 0 1rem;
  max-width: 20rem;

  @include tablet {
    margin: 1.5rem 0 0 0;
    width: 100%;
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
function __vue_create_injector__3() {
  const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3(
  { render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 },
  __vue_inject_styles__3,
  __vue_script__3,
  __vue_scope_id__3,
  __vue_is_functional_template__3,
  __vue_module_identifier__3,
  false,
  __vue_create_injector__3,
  void 0,
  void 0
);
var GroupPledgesGraph_default = __vue_component__3;

// frontend/views/containers/contributions/IncomeDetails.vue
var __vue_script__4 = {
  name: "IncomeDetails",
  mixins: [import_vuelidate3.validationMixin],
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    TransitionExpand: TransitionExpand_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    Tooltip: Tooltip_default,
    PaymentMethods: PaymentMethods_default,
    NonMonetaryPledges: NonMonetaryPledges_default,
    GroupPledgesGraph: GroupPledgesGraph_default
  },
  data() {
    return {
      form: {
        incomeDetailsType: null,
        amount: null
      }
    };
  },
  computed: {
    ...mapGetters([
      "groupSettings",
      "groupProfile",
      "groupProfiles",
      "groupMincomeAmount",
      "groupMincomeSymbolWithCode",
      "ourIdentityContractId",
      "ourGroupProfile",
      "usernameFromID"
    ]),
    groupMincomeFormatted() {
      return withGroupCurrency(this.groupMincomeAmount);
    },
    needsIncome() {
      return this.form.incomeDetailsType === "incomeAmount";
    },
    isPledging() {
      return this.form.incomeDetailsType === "pledgeAmount";
    },
    whoIsPledging() {
      const groupProfiles = this.groupProfiles;
      return Object.keys(groupProfiles).filter((memberID) => {
        return groupProfiles[memberID].incomeDetailsType === "pledgeAmount" && memberID !== this.ourIdentityContractId;
      });
    },
    contributionMemberText() {
      const who = this.whoIsPledging.map((w) => this.usernameFromID(w));
      switch (who.length) {
        case 1:
          return L("{firstMember} will ensure you meet the mincome", {
            firstMember: who[0]
          });
        case 2:
          return L("{firstMember} and {othersMember} will ensure you meet the mincome", {
            firstMember: who[0],
            othersMember: who[1]
          });
        default:
          return L("{firstMember} and {othersMembersCount} others will ensure you meet the mincome", {
            firstMember: who[0],
            othersMembersCount: who.length - 1
          });
      }
    }
  },
  created() {
    const incomeDetailsType = this.ourGroupProfile.incomeDetailsType;
    this.form.amount = "";
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType;
      this.form.amount = this.ourGroupProfile[incomeDetailsType];
    }
  },
  methods: {
    normalizeCurrency,
    resetAmount() {
      this.form.amount = this.form.incomeDetailsType === this.ourGroupProfile.incomeDetailsType ? this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType] : "";
      this.$v.form.$reset();
    },
    closeModal() {
      this.$refs.modal.close();
    },
    async submit() {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L("Your income details are missing. Please review them and try again."));
        return;
      }
      let paymentMethodsUpdates = null;
      let nonMonetaryPledgeUpdates = null;
      if (this.needsIncome) {
        this.$refs.paymentMethods.$v.form.$touch();
        const filledMethods = this.$refs.paymentMethods.form.methods.filter((method) => method.name !== "choose" || method.value);
        if (!filledMethods.length) {
          this.$refs.formMsg.danger(L("Payment details required. Please let people know how they can pay you."));
          return;
        }
        const incompletedMethod = filledMethods.find((method) => method.name === "choose" || !method.value);
        if (incompletedMethod) {
          if (!incompletedMethod.value) {
            this.$refs.formMsg.danger(L('The method "{methodName}" is incomplete.', { methodName: incompletedMethod.name }));
          } else {
            this.$refs.formMsg.danger(L('The method name for "{methodValue}" is missing.', { methodValue: incompletedMethod.value }));
          }
          return;
        }
        if (this.$refs.paymentMethods.$v.form.$invalid) {
          this.$refs.formMsg.danger(L("Your payment methods are invalid. Please review them and try again."));
          return;
        }
        if (this.$refs.paymentMethods.checkHasUpdates()) {
          paymentMethodsUpdates = filledMethods;
        }
      }
      if (!this.$refs.nonMonetaryPledges.validate()) return;
      if (this.$refs.nonMonetaryPledges.checkHasUpdates()) {
        nonMonetaryPledgeUpdates = this.$refs.nonMonetaryPledges.getValues();
      }
      try {
        const incomeDetailsType = this.form.incomeDetailsType;
        await esm_default("gi.actions/group/groupProfileUpdate", {
          contractID: this.$store.state.currentGroupId,
          data: {
            incomeDetailsType,
            [incomeDetailsType]: normalizeCurrency(this.form.amount),
            ...Object.assign(
              {},
              Boolean(paymentMethodsUpdates?.length) && { paymentMethods: paymentMethodsUpdates },
              Boolean(nonMonetaryPledgeUpdates) && { nonMonetaryReplace: nonMonetaryPledgeUpdates }
            )
          }
        });
        this.closeModal();
        esm_default("okTurtles.events/emit", INCOME_DETAILS_UPDATE);
      } catch (e) {
        console.error("IncomeDetails submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  },
  validations() {
    return {
      form: {
        incomeDetailsType: {
          [L("This field is required")]: import_validators3.required
        },
        amount: {
          [L("This field is required")]: import_validators3.required,
          [L("The amount must be a number (e.g. 100.75)")]: function(value) {
            return currencies_default[this.groupSettings.mincomeCurrency].validate(value);
          },
          [L("Oops, you entered a negative number")]: function(value) {
            return normalizeCurrency(value) >= 0;
          },
          [L("Your income must be lower than the group mincome")]: function(value) {
            return !this.needsIncome || normalizeCurrency(value) < this.groupSettings.mincomeAmount;
          },
          [L("Pledge amount cannot exceed {max}", { max: withGroupCurrency(GROUP_MAX_PLEDGE_AMOUNT) })]: function(value) {
            return !this.isPledging || normalizeCurrency(value) < GROUP_MAX_PLEDGE_AMOUNT;
          }
        }
      }
    };
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    {
      ref: "modal",
      attrs: { fullscreen: true, a11yTitle: _vm.L("Income Details") }
    },
    [
      _c(
        "div",
        { staticClass: "c-content" },
        [
          _c(
            "i18n",
            { staticClass: "is-title-2 c-title", attrs: { tag: "h2" } },
            [_vm._v("Income Details")]
          ),
          _c(
            "form",
            {
              staticClass: "card c-card",
              attrs: { novalidate: "true" },
              on: {
                submit: function($event) {
                  $event.preventDefault();
                }
              }
            },
            [
              _c("fieldset", { staticClass: "field" }, [
                _c(
                  "legend",
                  { staticClass: "label" },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.L(
                          "Do you make at least {groupMincomeFormatted} per month?",
                          { groupMincomeFormatted: _vm.groupMincomeFormatted }
                        )
                      )
                    ),
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          text: _vm.L(
                            "This is the minimum income in your group"
                          ),
                          direction: "top"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "button is-icon-smaller is-primary c-tip"
                          },
                          [_c("i", { staticClass: "icon-info" })]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _c(
                  "label",
                  { staticClass: "radio" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.$v.form.incomeDetailsType.$model,
                          expression: "$v.form.incomeDetailsType.$model"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        type: "radio",
                        name: "incomeDetailsType",
                        value: "pledgeAmount"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.$v.form.incomeDetailsType.$model,
                          "pledgeAmount"
                        )
                      },
                      on: {
                        change: [
                          function($event) {
                            return _vm.$set(
                              _vm.$v.form.incomeDetailsType,
                              "$model",
                              "pledgeAmount"
                            );
                          },
                          _vm.resetAmount
                        ]
                      }
                    }),
                    _c(
                      "i18n",
                      { attrs: { "data-test": "doesntNeedIncomeRadio" } },
                      [_vm._v("Yes, I do")]
                    )
                  ],
                  1
                ),
                _c(
                  "label",
                  {
                    directives: [
                      {
                        name: "error",
                        rawName: "v-error:incomeDetailsType",
                        arg: "incomeDetailsType"
                      }
                    ],
                    staticClass: "radio"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.$v.form.incomeDetailsType.$model,
                          expression: "$v.form.incomeDetailsType.$model"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        type: "radio",
                        name: "incomeDetailsType",
                        value: "incomeAmount"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.$v.form.incomeDetailsType.$model,
                          "incomeAmount"
                        )
                      },
                      on: {
                        change: [
                          function($event) {
                            return _vm.$set(
                              _vm.$v.form.incomeDetailsType,
                              "$model",
                              "incomeAmount"
                            );
                          },
                          _vm.resetAmount
                        ]
                      }
                    }),
                    _c("i18n", { attrs: { "data-test": "needsIncomeRadio" } }, [
                      _vm._v("No, I don't")
                    ])
                  ],
                  1
                )
              ]),
              _c("transition-expand", [
                !!_vm.form.incomeDetailsType ? _c(
                  "fieldset",
                  [
                    _c(
                      "label",
                      { staticClass: "field" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "label",
                            attrs: { "data-test": "introIncomeOrPledge" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.needsIncome ? _vm.L("What's your monthly income?") : _vm.L("How much do you want to pledge?")
                              )
                            )
                          ]
                        ),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "error",
                                rawName: "v-error:amount",
                                value: {
                                  attrs: { "data-test": "badIncome" }
                                },
                                expression: '{ attrs: { "data-test": "badIncome" } }',
                                arg: "amount"
                              }
                            ],
                            staticClass: "inputgroup",
                            class: { error: _vm.$v.form.amount.$error }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.$v.form.amount.$model,
                                  expression: "$v.form.amount.$model"
                                }
                              ],
                              staticClass: "input",
                              attrs: {
                                inputmode: "decimal",
                                pattern: "[0-9]*",
                                "data-test": "inputIncomeOrPledge"
                              },
                              domProps: {
                                value: _vm.$v.form.amount.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return;
                                  }
                                  _vm.$set(
                                    _vm.$v.form.amount,
                                    "$model",
                                    $event.target.value
                                  );
                                }
                              }
                            }),
                            _c("div", { staticClass: "suffix" }, [
                              _vm._v(
                                _vm._s(_vm.groupMincomeSymbolWithCode)
                              )
                            ])
                          ]
                        ),
                        _vm.needsIncome && _vm.whoIsPledging.length ? _c("div", { staticClass: "helper" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.contributionMemberText))
                          ])
                        ]) : !_vm.needsIncome ? _c("i18n", { staticClass: "helper" }, [
                          _vm._v(
                            "Define up to how much you pledge to contribute to the group every 30 days. Only the minimum amount needed will be distributed."
                          )
                        ]) : _vm._e()
                      ],
                      1
                    ),
                    _vm.needsIncome ? _c("payment-methods", {
                      ref: "paymentMethods",
                      staticClass: "c-methods"
                    }) : _vm._e(),
                    _c("non-monetary-pledges", {
                      ref: "nonMonetaryPledges",
                      staticClass: "c-non-monetary-pledges",
                      attrs: { optional: _vm.isPledging }
                    })
                  ],
                  1
                ) : _vm._e()
              ]),
              _c("banner-scoped", { ref: "formMsg", attrs: { allowA: true } }),
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "i18n",
                    {
                      staticClass: "is-outlined",
                      attrs: { tag: "button", type: "button" },
                      on: { click: _vm.closeModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _c(
                    "button-submit",
                    {
                      staticClass: "is-success",
                      attrs: {
                        "data-test": "submitIncome",
                        disabled: _vm.$v.form.$invalid
                      },
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
          ),
          _c("group-pledges-graph", {
            staticClass: "c-graph",
            attrs: {
              type: _vm.form.incomeDetailsType,
              amount: _vm.form.amount === "" ? void 0 : _vm.normalizeCurrency(_vm.form.amount)
            }
          })
        ],
        1
      )
    ]
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-1b1c5aa7_0", { source: '.c-content[data-v-1b1c5aa7] {\n  display: grid;\n  grid-template-areas: "title title" "graph graph" "card card";\n  width: 100%;\n  max-width: 55rem;\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-content[data-v-1b1c5aa7] {\n    grid-template-columns: auto 12rem;\n    grid-column-gap: 1.5rem;\n    grid-template-areas: "title title" "card graph";\n    margin-top: 2.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-content[data-v-1b1c5aa7] {\n    grid-column-gap: 4rem;\n}\n}\n.c-title[data-v-1b1c5aa7] {\n  grid-area: title;\n  margin-bottom: 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-title[data-v-1b1c5aa7] {\n    margin-bottom: 1.5rem;\n}\n}\n.c-card[data-v-1b1c5aa7] {\n  grid-area: card;\n  align-self: flex-start;\n}\n@media screen and (min-width: 1200px) {\n.c-card[data-v-1b1c5aa7] {\n    padding: 2.5rem;\n}\n}\n.c-methods[data-v-1b1c5aa7],\n.c-non-monetary-pledges[data-v-1b1c5aa7] {\n  margin-top: 1.5rem;\n}\n.c-tip[data-v-1b1c5aa7] {\n  display: inline-block;\n  margin-left: 0.25rem;\n}\n.c-graph[data-v-1b1c5aa7] {\n  grid-area: graph;\n  flex-shrink: 0;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=IncomeDetails.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/contributions/IncomeDetails.vue", "IncomeDetails.vue"], "names": [], "mappings": "AA2RA;EACA,aAAA;EACA,4DACA;EAGA,WAAA;EACA,gBAAA;EACA,kBAAA;AC7RA;AACA;ADoRA;IAWA,iCAAA;IACA,uBAAA;IACA,+CACA;IAEA,kBAAA;AC9RE;AACF;AACA;AD4QA;IAoBA,qBAAA;AC7RE;AACF;ADgSA;EACA,gBAAA;EACA,qBAAA;AC7RA;AACA;AD0RA;IAKA,qBAAA;AC5RE;AACF;AD+RA;EACA,eAAA;EACA,sBAAA;AC5RA;AACA;ADyRA;IAKA,eAAA;AC3RE;AACF;AD8RA;;EAEA,kBAAA;AC3RA;AD8RA;EACA,qBAAA;EACA,oBAAA;AC3RA;AD8RA;EACA,gBAAA;EACA,cAAA;EACA,qBAAA;AC3RA;;AAEA,4CAA4C", "file": "IncomeDetails.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template(ref='modal' :fullscreen='true' :a11yTitle='L("Income Details")')
  .c-content
    i18n.is-title-2.c-title(tag='h2') Income Details

    form.card.c-card(
      @submit.prevent=''
      novalidate='true'
    )
      fieldset.field
        legend.label
          | {{ L('Do you make at least {groupMincomeFormatted} per month?', { groupMincomeFormatted }) }}
          tooltip(:text='L("This is the minimum income in your group")' direction='top')
            .button.is-icon-smaller.is-primary.c-tip
              i.icon-info
        label.radio
          input.input(
            type='radio'
            name='incomeDetailsType'
            value='pledgeAmount'
            v-model='$v.form.incomeDetailsType.$model'
            @change='resetAmount'
          )
          i18n(data-test='doesntNeedIncomeRadio') Yes, I do
        label.radio(v-error:incomeDetailsType='')
          input.input(
            type='radio'
            name='incomeDetailsType'
            value='incomeAmount'
            v-model='$v.form.incomeDetailsType.$model'
            @change='resetAmount'
          )
          i18n(data-test='needsIncomeRadio') No, I don't
      transition-expand
        fieldset(v-if='!!form.incomeDetailsType')
          label.field
            .label(
              data-test='introIncomeOrPledge'
            ) {{ needsIncome ? L("What's your monthly income?") : L('How much do you want to pledge?') }}
            .inputgroup(
              :class='{"error": $v.form.amount.$error }'
              v-error:amount='{ attrs: { "data-test": "badIncome" } }'
            )
              input.input(
                inputmode='decimal'
                pattern='[0-9]*'
                v-model='$v.form.amount.$model'
                data-test='inputIncomeOrPledge'
              )
              .suffix {{ groupMincomeSymbolWithCode }}
            .helper(v-if='needsIncome && whoIsPledging.length')
              p {{ contributionMemberText }}
            i18n.helper(v-else-if='!needsIncome') Define up to how much you pledge to contribute to the group every 30 days. Only the minimum amount needed will be distributed.

          payment-methods.c-methods(v-if='needsIncome' ref='paymentMethods')

          non-monetary-pledges.c-non-monetary-pledges( ref='nonMonetaryPledges' :optional='isPledging')

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='closeModal') Cancel
        button-submit.is-success(
          @click='submit'
          data-test='submitIncome'
          :disabled='$v.form.$invalid'
        )
          i18n Save

    group-pledges-graph.c-graph(
      :type='form.incomeDetailsType'
      :amount='form.amount === "" ? undefined : normalizeCurrency(form.amount)'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import currencies, { normalizeCurrency } from '../../../../frontend/model/contracts/shared/currencies.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import PaymentMethods from './PaymentMethods.vue'
import NonMonetaryPledges from './NonMonetaryPledges.vue'
import GroupPledgesGraph from './GroupPledgesGraph.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'
import { L } from '../../../../frontend/common/common.js'
import { INCOME_DETAILS_UPDATE } from '../../../../frontend/utils/events.js'
import { GROUP_MAX_PLEDGE_AMOUNT } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'IncomeDetails',
  mixins: [validationMixin],
  components: {
    ModalBaseTemplate,
    TransitionExpand,
    BannerScoped,
    ButtonSubmit,
    Tooltip,
    PaymentMethods,
    NonMonetaryPledges,
    GroupPledgesGraph
  },
  data () {
    return {
      form: {
        incomeDetailsType: null,
        amount: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupProfile',
      'groupProfiles',
      'groupMincomeAmount',
      'groupMincomeSymbolWithCode',
      'ourIdentityContractId',
      'ourGroupProfile',
      'usernameFromID'
    ]),
    groupMincomeFormatted () {
      return withGroupCurrency(this.groupMincomeAmount)
    },
    needsIncome () {
      return this.form.incomeDetailsType === 'incomeAmount'
    },
    isPledging () {
      return this.form.incomeDetailsType === 'pledgeAmount'
    },
    whoIsPledging () {
      const groupProfiles = this.groupProfiles
      return Object.keys(groupProfiles).filter(memberID => {
        return groupProfiles[memberID].incomeDetailsType === 'pledgeAmount' && memberID !== this.ourIdentityContractId
      })
    },
    contributionMemberText () {
      const who = this.whoIsPledging.map(w => this.usernameFromID(w))
      switch (who.length) {
        case 1:
          return L('{firstMember} will ensure you meet the mincome', {
            firstMember: who[0]
          })
        case 2:
          return L('{firstMember} and {othersMember} will ensure you meet the mincome', {
            firstMember: who[0],
            othersMember: who[1]
          })
        default:
          return L('{firstMember} and {othersMembersCount} others will ensure you meet the mincome', {
            firstMember: who[0],
            othersMembersCount: who.length - 1
          })
      }
    }
  },
  created () {
    const incomeDetailsType = this.ourGroupProfile.incomeDetailsType
    this.form.amount = ''
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType
      this.form.amount = this.ourGroupProfile[incomeDetailsType]
    }
  },
  methods: {
    normalizeCurrency,
    resetAmount () {
      this.form.amount = this.form.incomeDetailsType === this.ourGroupProfile.incomeDetailsType ? this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType] : ''
      this.$v.form.$reset()
    },
    closeModal () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('Your income details are missing. Please review them and try again.'))
        return
      }

      let paymentMethodsUpdates = null
      let nonMonetaryPledgeUpdates = null

      if (this.needsIncome) {
        // - validations in the children components : 1. PaymentMethods.vue
        this.$refs.paymentMethods.$v.form.$touch()

        // Find the methods that have some info filled...
        const filledMethods = this.$refs.paymentMethods.form.methods.filter(method => method.name !== 'choose' || method.value)

        if (!filledMethods.length) {
          this.$refs.formMsg.danger(L('Payment details required. Please let people know how they can pay you.'))
          return
        }
        // From those, find a method with missing info
        const incompletedMethod = filledMethods.find(method => method.name === 'choose' || !method.value)
        // and warn the user about it, if necessary!
        if (incompletedMethod) {
          if (!incompletedMethod.value) {
            this.$refs.formMsg.danger(L('The method "{methodName}" is incomplete.', { methodName: incompletedMethod.name }))
          } else {
            this.$refs.formMsg.danger(L('The method name for "{methodValue}" is missing.', { methodValue: incompletedMethod.value }))
          }
          return
        }

        // check other validations
        if (this.$refs.paymentMethods.$v.form.$invalid) {
          this.$refs.formMsg.danger(L('Your payment methods are invalid. Please review them and try again.'))
          return
        }

        if (this.$refs.paymentMethods.checkHasUpdates()) {
          // if payment methods have been updated, add them to the payload too
          paymentMethodsUpdates = filledMethods
        }
      }

      // - validations in the children components : 2. nonMonetaryPledges.vue
      if (!this.$refs.nonMonetaryPledges.validate()) return

      if (this.$refs.nonMonetaryPledges.checkHasUpdates()) {
        nonMonetaryPledgeUpdates = this.$refs.nonMonetaryPledges.getValues()
      }

      try {
        const incomeDetailsType = this.form.incomeDetailsType

        await sbp('gi.actions/group/groupProfileUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            incomeDetailsType,
            [incomeDetailsType]: normalizeCurrency(this.form.amount),
            ...Object.assign(
              {},
              Boolean(paymentMethodsUpdates?.length) && { paymentMethods: paymentMethodsUpdates },
              Boolean(nonMonetaryPledgeUpdates) && { nonMonetaryReplace: nonMonetaryPledgeUpdates }
            )
          }
        })

        this.closeModal()
        sbp('okTurtles.events/emit', INCOME_DETAILS_UPDATE)
      } catch (e) {
        console.error('IncomeDetails submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations () {
    return {
      form: {
        incomeDetailsType: {
          [L('This field is required')]: required
        },
        amount: {
          [L('This field is required')]: required,
          [L('The amount must be a number (e.g. 100.75)')]: function (value) {
            return currencies[this.groupSettings.mincomeCurrency].validate(value)
          },
          [L('Oops, you entered a negative number')]: function (value) {
            return normalizeCurrency(value) >= 0
          },
          [L('Your income must be lower than the group mincome')]: function (value) {
            return !this.needsIncome || normalizeCurrency(value) < this.groupSettings.mincomeAmount
          },
          [L('Pledge amount cannot exceed {max}', { max: withGroupCurrency(GROUP_MAX_PLEDGE_AMOUNT) })]: function (value) {
            return !this.isPledging || normalizeCurrency(value) < GROUP_MAX_PLEDGE_AMOUNT
          }
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-content {
  display: grid;
  grid-template-areas:
    "title title"
    "graph graph"
    "card card";
  width: 100%;
  max-width: 55rem;
  margin-top: 1.5rem;

  @include tablet {
    grid-template-columns: auto 12rem;
    grid-column-gap: 1.5rem;
    grid-template-areas:
      "title title"
      "card graph";
    margin-top: 2.5rem;
  }

  @include desktop {
    grid-column-gap: 4rem;
  }
}

.c-title {
  grid-area: title;
  margin-bottom: 2.5rem;

  @include tablet {
    margin-bottom: 1.5rem;
  }
}

.c-card {
  grid-area: card;
  align-self: flex-start;

  @include desktop {
    padding: 2.5rem;
  }
}

.c-methods,
.c-non-monetary-pledges {
  margin-top: 1.5rem;
}

.c-tip {
  display: inline-block;
  margin-left: 0.25rem;
}

.c-graph {
  grid-area: graph;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
}
</style>
`, '.c-content {\n  display: grid;\n  grid-template-areas: "title title" "graph graph" "card card";\n  width: 100%;\n  max-width: 55rem;\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-content {\n    grid-template-columns: auto 12rem;\n    grid-column-gap: 1.5rem;\n    grid-template-areas: "title title" "card graph";\n    margin-top: 2.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-content {\n    grid-column-gap: 4rem;\n  }\n}\n\n.c-title {\n  grid-area: title;\n  margin-bottom: 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-title {\n    margin-bottom: 1.5rem;\n  }\n}\n\n.c-card {\n  grid-area: card;\n  align-self: flex-start;\n}\n@media screen and (min-width: 1200px) {\n  .c-card {\n    padding: 2.5rem;\n  }\n}\n\n.c-methods,\n.c-non-monetary-pledges {\n  margin-top: 1.5rem;\n}\n\n.c-tip {\n  display: inline-block;\n  margin-left: 0.25rem;\n}\n\n.c-graph {\n  grid-area: graph;\n  flex-shrink: 0;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=IncomeDetails.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-1b1c5aa7";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template(ref='modal' :fullscreen='true' :a11yTitle='L("Income Details")')
  .c-content
    i18n.is-title-2.c-title(tag='h2') Income Details

    form.card.c-card(
      @submit.prevent=''
      novalidate='true'
    )
      fieldset.field
        legend.label
          | {{ L('Do you make at least {groupMincomeFormatted} per month?', { groupMincomeFormatted }) }}
          tooltip(:text='L("This is the minimum income in your group")' direction='top')
            .button.is-icon-smaller.is-primary.c-tip
              i.icon-info
        label.radio
          input.input(
            type='radio'
            name='incomeDetailsType'
            value='pledgeAmount'
            v-model='$v.form.incomeDetailsType.$model'
            @change='resetAmount'
          )
          i18n(data-test='doesntNeedIncomeRadio') Yes, I do
        label.radio(v-error:incomeDetailsType='')
          input.input(
            type='radio'
            name='incomeDetailsType'
            value='incomeAmount'
            v-model='$v.form.incomeDetailsType.$model'
            @change='resetAmount'
          )
          i18n(data-test='needsIncomeRadio') No, I don't
      transition-expand
        fieldset(v-if='!!form.incomeDetailsType')
          label.field
            .label(
              data-test='introIncomeOrPledge'
            ) {{ needsIncome ? L("What's your monthly income?") : L('How much do you want to pledge?') }}
            .inputgroup(
              :class='{"error": $v.form.amount.$error }'
              v-error:amount='{ attrs: { "data-test": "badIncome" } }'
            )
              input.input(
                inputmode='decimal'
                pattern='[0-9]*'
                v-model='$v.form.amount.$model'
                data-test='inputIncomeOrPledge'
              )
              .suffix {{ groupMincomeSymbolWithCode }}
            .helper(v-if='needsIncome && whoIsPledging.length')
              p {{ contributionMemberText }}
            i18n.helper(v-else-if='!needsIncome') Define up to how much you pledge to contribute to the group every 30 days. Only the minimum amount needed will be distributed.

          payment-methods.c-methods(v-if='needsIncome' ref='paymentMethods')

          non-monetary-pledges.c-non-monetary-pledges( ref='nonMonetaryPledges' :optional='isPledging')

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons
        i18n.is-outlined(tag='button' type='button' @click='closeModal') Cancel
        button-submit.is-success(
          @click='submit'
          data-test='submitIncome'
          :disabled='$v.form.$invalid'
        )
          i18n Save

    group-pledges-graph.c-graph(
      :type='form.incomeDetailsType'
      :amount='form.amount === "" ? undefined : normalizeCurrency(form.amount)'
    )
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import currencies, { normalizeCurrency } from '../../../../frontend/model/contracts/shared/currencies.js'
import { withGroupCurrency } from '../../../../frontend/views/utils/misc.js'
import PaymentMethods from './PaymentMethods.vue'
import NonMonetaryPledges from './NonMonetaryPledges.vue'
import GroupPledgesGraph from './GroupPledgesGraph.vue'
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'
import { L } from '../../../../frontend/common/common.js'
import { INCOME_DETAILS_UPDATE } from '../../../../frontend/utils/events.js'
import { GROUP_MAX_PLEDGE_AMOUNT } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'IncomeDetails',
  mixins: [validationMixin],
  components: {
    ModalBaseTemplate,
    TransitionExpand,
    BannerScoped,
    ButtonSubmit,
    Tooltip,
    PaymentMethods,
    NonMonetaryPledges,
    GroupPledgesGraph
  },
  data () {
    return {
      form: {
        incomeDetailsType: null,
        amount: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'groupSettings',
      'groupProfile',
      'groupProfiles',
      'groupMincomeAmount',
      'groupMincomeSymbolWithCode',
      'ourIdentityContractId',
      'ourGroupProfile',
      'usernameFromID'
    ]),
    groupMincomeFormatted () {
      return withGroupCurrency(this.groupMincomeAmount)
    },
    needsIncome () {
      return this.form.incomeDetailsType === 'incomeAmount'
    },
    isPledging () {
      return this.form.incomeDetailsType === 'pledgeAmount'
    },
    whoIsPledging () {
      const groupProfiles = this.groupProfiles
      return Object.keys(groupProfiles).filter(memberID => {
        return groupProfiles[memberID].incomeDetailsType === 'pledgeAmount' && memberID !== this.ourIdentityContractId
      })
    },
    contributionMemberText () {
      const who = this.whoIsPledging.map(w => this.usernameFromID(w))
      switch (who.length) {
        case 1:
          return L('{firstMember} will ensure you meet the mincome', {
            firstMember: who[0]
          })
        case 2:
          return L('{firstMember} and {othersMember} will ensure you meet the mincome', {
            firstMember: who[0],
            othersMember: who[1]
          })
        default:
          return L('{firstMember} and {othersMembersCount} others will ensure you meet the mincome', {
            firstMember: who[0],
            othersMembersCount: who.length - 1
          })
      }
    }
  },
  created () {
    const incomeDetailsType = this.ourGroupProfile.incomeDetailsType
    this.form.amount = ''
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType
      this.form.amount = this.ourGroupProfile[incomeDetailsType]
    }
  },
  methods: {
    normalizeCurrency,
    resetAmount () {
      this.form.amount = this.form.incomeDetailsType === this.ourGroupProfile.incomeDetailsType ? this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType] : ''
      this.$v.form.$reset()
    },
    closeModal () {
      this.$refs.modal.close()
    },
    async submit () {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L('Your income details are missing. Please review them and try again.'))
        return
      }

      let paymentMethodsUpdates = null
      let nonMonetaryPledgeUpdates = null

      if (this.needsIncome) {
        // - validations in the children components : 1. PaymentMethods.vue
        this.$refs.paymentMethods.$v.form.$touch()

        // Find the methods that have some info filled...
        const filledMethods = this.$refs.paymentMethods.form.methods.filter(method => method.name !== 'choose' || method.value)

        if (!filledMethods.length) {
          this.$refs.formMsg.danger(L('Payment details required. Please let people know how they can pay you.'))
          return
        }
        // From those, find a method with missing info
        const incompletedMethod = filledMethods.find(method => method.name === 'choose' || !method.value)
        // and warn the user about it, if necessary!
        if (incompletedMethod) {
          if (!incompletedMethod.value) {
            this.$refs.formMsg.danger(L('The method "{methodName}" is incomplete.', { methodName: incompletedMethod.name }))
          } else {
            this.$refs.formMsg.danger(L('The method name for "{methodValue}" is missing.', { methodValue: incompletedMethod.value }))
          }
          return
        }

        // check other validations
        if (this.$refs.paymentMethods.$v.form.$invalid) {
          this.$refs.formMsg.danger(L('Your payment methods are invalid. Please review them and try again.'))
          return
        }

        if (this.$refs.paymentMethods.checkHasUpdates()) {
          // if payment methods have been updated, add them to the payload too
          paymentMethodsUpdates = filledMethods
        }
      }

      // - validations in the children components : 2. nonMonetaryPledges.vue
      if (!this.$refs.nonMonetaryPledges.validate()) return

      if (this.$refs.nonMonetaryPledges.checkHasUpdates()) {
        nonMonetaryPledgeUpdates = this.$refs.nonMonetaryPledges.getValues()
      }

      try {
        const incomeDetailsType = this.form.incomeDetailsType

        await sbp('gi.actions/group/groupProfileUpdate', {
          contractID: this.$store.state.currentGroupId,
          data: {
            incomeDetailsType,
            [incomeDetailsType]: normalizeCurrency(this.form.amount),
            ...Object.assign(
              {},
              Boolean(paymentMethodsUpdates?.length) && { paymentMethods: paymentMethodsUpdates },
              Boolean(nonMonetaryPledgeUpdates) && { nonMonetaryReplace: nonMonetaryPledgeUpdates }
            )
          }
        })

        this.closeModal()
        sbp('okTurtles.events/emit', INCOME_DETAILS_UPDATE)
      } catch (e) {
        console.error('IncomeDetails submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  validations () {
    return {
      form: {
        incomeDetailsType: {
          [L('This field is required')]: required
        },
        amount: {
          [L('This field is required')]: required,
          [L('The amount must be a number (e.g. 100.75)')]: function (value) {
            return currencies[this.groupSettings.mincomeCurrency].validate(value)
          },
          [L('Oops, you entered a negative number')]: function (value) {
            return normalizeCurrency(value) >= 0
          },
          [L('Your income must be lower than the group mincome')]: function (value) {
            return !this.needsIncome || normalizeCurrency(value) < this.groupSettings.mincomeAmount
          },
          [L('Pledge amount cannot exceed {max}', { max: withGroupCurrency(GROUP_MAX_PLEDGE_AMOUNT) })]: function (value) {
            return !this.isPledging || normalizeCurrency(value) < GROUP_MAX_PLEDGE_AMOUNT
          }
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-content {
  display: grid;
  grid-template-areas:
    "title title"
    "graph graph"
    "card card";
  width: 100%;
  max-width: 55rem;
  margin-top: 1.5rem;

  @include tablet {
    grid-template-columns: auto 12rem;
    grid-column-gap: 1.5rem;
    grid-template-areas:
      "title title"
      "card graph";
    margin-top: 2.5rem;
  }

  @include desktop {
    grid-column-gap: 4rem;
  }
}

.c-title {
  grid-area: title;
  margin-bottom: 2.5rem;

  @include tablet {
    margin-bottom: 1.5rem;
  }
}

.c-card {
  grid-area: card;
  align-self: flex-start;

  @include desktop {
    padding: 2.5rem;
  }
}

.c-methods,
.c-non-monetary-pledges {
  margin-top: 1.5rem;
}

.c-tip {
  display: inline-block;
  margin-left: 0.25rem;
}

.c-graph {
  grid-area: graph;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
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
function __vue_create_injector__4() {
  const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
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
var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4(
  { render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 },
  __vue_inject_styles__4,
  __vue_script__4,
  __vue_scope_id__4,
  __vue_is_functional_template__4,
  __vue_module_identifier__4,
  false,
  __vue_create_injector__4,
  void 0,
  void 0
);
var IncomeDetails_default = __vue_component__4;
export {
  IncomeDetails_default as default
};
//# sourceMappingURL=IncomeDetails-GELUCIM7-cached.js.map
