import {
  AddIncomeDetailsWidget_default
} from "./chunk-L43YVAJX-cached.js";
import {
  PageSection_default
} from "./chunk-36LKA4A3-cached.js";
import {
  CalloutCard_default
} from "./chunk-3EJJCCO3-cached.js";
import {
  require_vue_clickaway_common
} from "./chunk-LA43UFR3-cached.js";
import "./chunk-6TVZJD4C-cached.js";
import {
  Page_default
} from "./chunk-EUGZI4EZ-cached.js";
import "./chunk-K33NK7LD-cached.js";
import {
  ProfileCardContent_default
} from "./chunk-3T5W4UPP-cached.js";
import "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import "./chunk-K4WYPR2K-cached.js";
import "./chunk-OZHDGR4V-cached.js";
import {
  withGroupCurrency
} from "./chunk-OBUPKMDO-cached.js";
import "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import "./chunk-MTWMQLQH-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
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
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/contributions/Contribution.vue
var import_vuelidate = __toESM(require_lib());
var import_validators = __toESM(require_validators());
var __vue_script__ = {
  name: "Contribution",
  mixins: [import_vuelidate.validationMixin],
  components: {
    ButtonSubmit: ButtonSubmit_default
  },
  props: {
    variant: {
      type: String,
      validator(value) {
        return [
          "default",
          // Display the contribution
          "unfilled",
          // Add a new contribution
          "editable"
          // Edit a contribution
        ].indexOf(value) > -1;
      },
      default: "default"
    },
    initialValue: {
      type: String
    },
    needsIncome: Boolean,
    contributionsList: Array
  },
  data() {
    return {
      isAdding: false,
      isEditing: false,
      isFilled: null,
      // decide what input buttons to show
      placeholders: [L("Portuguese classes"), L("Programming"), L("Cooking"), L("Parties"), L("Free cinema tickets")],
      form: {
        contribution: this.initialValue
      },
      contributionMaxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
    };
  },
  computed: {
    itemClasses() {
      return [
        `c-item is-${this.variant}`,
        { "has-controls": this.isEditable }
      ];
    },
    isEditable() {
      return this.variant === "editable";
    },
    isUnfilled() {
      return this.variant === "unfilled";
    },
    receiverHasOnlyOneItem() {
      return this.needsIncome && this.contributionsList?.length === 1;
    },
    showRemoveBtn() {
      return this.isEditing && !this.isAdding && !this.receiverHasOnlyOneItem;
    },
    editAriaLabel() {
      return L("Edit contribution settings");
    },
    randomPlaceholder() {
      return this.placeholders[Math.floor(Math.random() * this.placeholders.length)];
    },
    contributionCharLen() {
      const len = this.form.contribution?.length || 0;
      return `${len}/${this.contributionMaxChar}`;
    }
  },
  methods: {
    handleEditClick(e) {
      this.isEditing = true;
      this.isFilled = !!this.initialValue;
      this.form.contribution = this.initialValue;
    },
    verifyValue(event) {
      this.isFilled = !!event.target.value;
    },
    cancel() {
      this.isAdding = false;
      this.isEditing = false;
      this.isFilled = false;
    },
    handleEnter(e) {
      if (this.isAdding && !this.isFilled) {
        this.setError();
        return false;
      }
      return this.isFilled ? this.handleSubmit() : this.handleDelete();
    },
    async handleDelete() {
      await this.$listeners["new-value"]("nonMonetaryRemove", this.initialValue);
      this.cancel();
    },
    async handleSubmit() {
      if (this.$v.form.$invalid) {
        this.cancel();
      } else {
        if (this.isAdding) {
          const value = this.form.contribution;
          this.form.contribution = null;
          this.$v.$reset();
          await this.$listeners["new-value"]("nonMonetaryAdd", value);
          this.isAdding = false;
        }
        if (this.isEditing) {
          await this.$listeners["new-value"]("nonMonetaryEdit", {
            replace: this.initialValue,
            with: this.form.contribution
          });
          this.isEditing = false;
        }
      }
    }
  },
  directives: {
    focus: {
      inserted(el, binding, vnode) {
        if (binding.value) {
          el.value = binding.value;
        }
        el.focus();
      }
    }
  },
  validations: {
    form: {
      contribution: {
        [L("A contribution is required.")]: import_validators.required,
        [L("This contribution already exists.")]: function(x) {
          return !this.contributionsList || !this.contributionsList.includes(x);
        }
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "replace-list" } }, [
    _vm.isEditing || _vm.isAdding ? _c(
      "li",
      {
        key: "editing",
        staticClass: "c-contribution-edit",
        attrs: { "data-test": "editing" }
      },
      [
        _c(
          "form",
          {
            staticClass: "c-contribution",
            attrs: { novalidate: "true" },
            on: {
              submit: function($event) {
                $event.preventDefault();
              }
            }
          },
          [
            _c("div", { staticClass: "c-label-container" }, [
              _c("span", { staticClass: "c-char-len" }, [
                _vm._v(_vm._s(_vm.contributionCharLen))
              ])
            ]),
            _c("input", {
              directives: [
                {
                  name: "error",
                  rawName: "v-error:contribution",
                  arg: "contribution"
                },
                { name: "focus", rawName: "v-focus" },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.$v.form.contribution.$model,
                  expression: "$v.form.contribution.$model"
                }
              ],
              staticClass: "input",
              attrs: {
                type: "text",
                placeholder: _vm.randomPlaceholder,
                "aria-label": _vm.L("Your contribution"),
                maxlength: _vm.contributionMaxChar,
                "data-test": "inputNonMonetaryContribution"
              },
              domProps: { value: _vm.$v.form.contribution.$model },
              on: {
                keyup: _vm.verifyValue,
                keydown: [
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])) {
                      return null;
                    }
                    return _vm.cancel($event);
                  },
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k(
                      $event.keyCode,
                      "enter",
                      13,
                      $event.key,
                      "Enter"
                    )) {
                      return null;
                    }
                    $event.preventDefault();
                    return _vm.handleEnter($event);
                  }
                ],
                input: function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.$set(
                    _vm.$v.form.contribution,
                    "$model",
                    $event.target.value
                  );
                }
              }
            }),
            _vm.receiverHasOnlyOneItem ? _c(
              "div",
              { staticClass: "c-helper" },
              [
                _c("i", { staticClass: "icon-info-circle" }),
                _c("i18n", [
                  _vm._v(
                    "At least one non-monetary contribution is required."
                  )
                ])
              ],
              1
            ) : _vm._e(),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _vm.showRemoveBtn ? _c(
                  "button-submit",
                  {
                    staticClass: "is-small is-danger is-outlined",
                    attrs: {
                      "data-test": "buttonRemoveNonMonetaryContribution"
                    },
                    on: { click: _vm.handleDelete }
                  },
                  [_vm._v(_vm._s(_vm.L("Remove")))]
                ) : _vm._e(),
                _c(
                  "div",
                  { staticClass: "c-buttons-right" },
                  [
                    _c(
                      "i18n",
                      {
                        staticClass: "button is-small is-outlined",
                        attrs: {
                          tag: "button",
                          "data-test": "buttonCancelNonMonetaryContribution"
                        },
                        on: { click: _vm.cancel }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm.isAdding && _vm.isFilled ? _c(
                      "button-submit",
                      {
                        staticClass: "is-small",
                        attrs: {
                          "data-test": "buttonAddNonMonetaryContribution"
                        },
                        on: { click: _vm.handleSubmit }
                      },
                      [_vm._v(_vm._s(_vm.L("Add")))]
                    ) : _vm._e(),
                    _vm.isEditing && _vm.isFilled ? _c(
                      "button-submit",
                      {
                        staticClass: "is-small",
                        attrs: {
                          "data-test": "buttonSaveNonMonetaryContribution"
                        },
                        on: { click: _vm.handleSubmit }
                      },
                      [_vm._v(_vm._s(_vm.L("Save")))]
                    ) : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      ]
    ) : _vm.isEditable ? _c(
      "li",
      {
        key: "editable",
        class: _vm.itemClasses,
        attrs: { "data-test": "editable" }
      },
      [
        _vm._t("default"),
        _c(
          "button",
          {
            staticClass: "button is-small is-outlined c-inline-button",
            attrs: {
              "aria-label": _vm.editAriaLabel,
              "data-test": "buttonEditNonMonetaryContribution"
            },
            on: { click: _vm.handleEditClick }
          },
          [
            _c("i", { staticClass: "icon-pencil-alt is-prefix" }),
            _vm._v(_vm._s(_vm.L("Edit")))
          ]
        )
      ],
      2
    ) : _vm.isUnfilled ? _c(
      "li",
      {
        key: "unfilled",
        staticClass: "c-spacer-above",
        attrs: { "data-test": "unfilled" }
      },
      [
        _c(
          "button",
          {
            staticClass: "button is-small",
            class: _vm.itemClasses,
            attrs: { "data-test": "addNonMonetaryContribution" },
            on: {
              click: function($event) {
                _vm.isAdding = true;
              }
            }
          },
          [_vm._t("default")],
          2
        )
      ]
    ) : _c(
      "li",
      {
        key: "basic",
        class: _vm.itemClasses,
        attrs: { "data-test": "basic" }
      },
      [_vm._t("default")],
      2
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-111ee7a3_0", { source: ".c-contribution[data-v-111ee7a3] {\n  padding: 1.5rem 0 1rem 0;\n}\n.c-item.is-default[data-v-111ee7a3] {\n  display: flex;\n}\n.c-contribution-edit[data-v-111ee7a3]:first-child,\n.c-contribution-edit .c-contribution + .c-contribution[data-v-111ee7a3] {\n  padding-top: 0;\n}\n.c-contribution-edit + .c-spacer-above .c-contribution[data-v-111ee7a3] {\n  padding-top: 1rem;\n}\n.c-spacer-above[data-v-111ee7a3] {\n  padding-top: 1.5rem;\n}\n.c-label-container[data-v-111ee7a3] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len[data-v-111ee7a3] {\n  font-size: 0.75rem;\n  color: var(--text_1);\n}\n.c-helper[data-v-111ee7a3] {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 0.25rem;\n  color: var(--text_1);\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n.buttons[data-v-111ee7a3] {\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n  margin-top: 0;\n}\n.buttons button[data-v-111ee7a3] {\n  margin-top: 0;\n}\n.c-inline-button[data-v-111ee7a3] {\n  margin-left: 1rem;\n}\n.c-inline-button .icon-pencil-alt[data-v-111ee7a3] {\n  margin-left: 0;\n}\n.has-controls[data-v-111ee7a3] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.c-buttons-right[data-v-111ee7a3] {\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n.button + .c-buttons-right[data-v-111ee7a3] {\n  width: auto;\n}\n\n/*# sourceMappingURL=Contribution.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/Contribution.vue", "Contribution.vue"], "names": [], "mappings": "AAyNA;EACA,wBAAA;ACxNA;AD2NA;EACA,aAAA;ACxNA;AD4NA;;EAEA,cAAA;ACzNA;AD4NA;EACA,iBAAA;AC1NA;AD8NA;EACA,mBAAA;AC3NA;AD8NA;EACA,aAAA;EACA,yBAAA;EACA,uBAAA;AC3NA;AD6NA;EACA,kBAAA;EACA,oBAAA;AC3NA;AD+NA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;AC5NA;AD+NA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;AC5NA;AD8NA;EACA,aAAA;AC5NA;ADgOA;EACA,iBAAA;AC7NA;AD+NA;EACA,cAAA;AC7NA;ADiOA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;AC9NA;ADiOA;EACA,aAAA;EACA,yBAAA;EACA,YAAA;AC9NA;ADiOA;EACA,WAAA;AC9NA;;AAEA,2CAA2C", "file": "Contribution.vue", "sourcesContent": [`<template lang='pug'>
transition(name='replace-list')
  li.c-contribution-edit(v-if='isEditing || isAdding' data-test='editing' key='editing')
    form.c-contribution(
      @submit.prevent=''
      novalidate='true'
    )
      .c-label-container
        span.c-char-len {{ contributionCharLen }}
      input.input(
        type='text'
        :placeholder='randomPlaceholder'
        :aria-label='L("Your contribution")'
        :maxlength='contributionMaxChar'
        v-error:contribution=''
        v-focus=''
        v-model='$v.form.contribution.$model'
        data-test='inputNonMonetaryContribution'
        @keyup='verifyValue'
        @keydown.esc='cancel'
        @keydown.enter.prevent='handleEnter'
      )

      .c-helper(v-if='receiverHasOnlyOneItem')
        i.icon-info-circle
        i18n At least one non-monetary contribution is required.

      .buttons
        button-submit.is-small.is-danger.is-outlined(
          v-if='showRemoveBtn'
          @click='handleDelete'
          data-test='buttonRemoveNonMonetaryContribution'
        ) {{ L('Remove') }}
        .c-buttons-right
          i18n.button.is-small.is-outlined(
            tag='button'
            @click='cancel'
            data-test='buttonCancelNonMonetaryContribution'
          ) Cancel
          button-submit.is-small(
            v-if='isAdding && isFilled'
            @click='handleSubmit'
            data-test='buttonAddNonMonetaryContribution'
          ) {{ L('Add') }}
          button-submit.is-small(
            v-if='isEditing && isFilled'
            @click='handleSubmit'
            data-test='buttonSaveNonMonetaryContribution'
          ) {{ L('Save') }}

  li(v-else-if='isEditable' :class='itemClasses' data-test='editable' key='editable')
    slot

    button.button.is-small.is-outlined.c-inline-button(
      :aria-label='editAriaLabel'
      @click='handleEditClick'
      data-test='buttonEditNonMonetaryContribution'
    )
      i.icon-pencil-alt.is-prefix
      | {{ L('Edit') }}

  li.c-spacer-above(v-else-if='isUnfilled' data-test='unfilled' key='unfilled')
    button.button.is-small(
      data-test='addNonMonetaryContribution'
      :class='itemClasses'
      @click='isAdding = true'
    )
      slot

  li(v-else='' :class='itemClasses' data-test='basic' key='basic')
    slot
</template>

<script>
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import { GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'Contribution',
  mixins: [validationMixin],
  components: {
    ButtonSubmit
  },
  props: {
    variant: {
      type: String,
      validator (value) {
        return [
          'default', // Display the contribution
          'unfilled', // Add a new contribution
          'editable' // Edit a contribution
        ].indexOf(value) > -1
      },
      default: 'default'
    },
    initialValue: {
      type: String
    },
    needsIncome: Boolean,
    contributionsList: Array
  },
  data () {
    return {
      isAdding: false,
      isEditing: false,
      isFilled: null, // decide what input buttons to show
      placeholders: [L('Portuguese classes'), L('Programming'), L('Cooking'), L('Parties'), L('Free cinema tickets')],
      form: {
        contribution: this.initialValue
      },
      contributionMaxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
    }
  },
  computed: {
    itemClasses () {
      return [
        \`c-item is-\${this.variant}\`,
        { 'has-controls': this.isEditable }
      ]
    },
    isEditable () {
      return this.variant === 'editable'
    },
    isUnfilled () {
      return this.variant === 'unfilled'
    },
    receiverHasOnlyOneItem () {
      return this.needsIncome && this.contributionsList?.length === 1
    },
    showRemoveBtn () {
      return this.isEditing && !this.isAdding && !this.receiverHasOnlyOneItem
    },
    editAriaLabel () {
      return L('Edit contribution settings')
    },
    randomPlaceholder () {
      return this.placeholders[Math.floor(Math.random() * this.placeholders.length)]
    },
    contributionCharLen () {
      const len = this.form.contribution?.length || 0
      return \`\${len}/\${this.contributionMaxChar}\`
    }
  },
  methods: {
    handleEditClick (e) {
      this.isEditing = true
      this.isFilled = !!this.initialValue
      this.form.contribution = this.initialValue
    },
    verifyValue (event) {
      this.isFilled = !!event.target.value
    },
    cancel () {
      this.isAdding = false
      this.isEditing = false
      this.isFilled = false
    },
    handleEnter (e) {
      if (this.isAdding && !this.isFilled) {
        this.setError()
        return false
      }
      return this.isFilled ? this.handleSubmit() : this.handleDelete()
    },
    async handleDelete () {
      await this.$listeners['new-value']('nonMonetaryRemove', this.initialValue)
      this.cancel()
    },
    async handleSubmit () {
      if (this.$v.form.$invalid) {
        this.cancel()
      } else {
        if (this.isAdding) {
          const value = this.form.contribution
          this.form.contribution = null
          this.$v.$reset() // workaround #858
          await this.$listeners['new-value']('nonMonetaryAdd', value)
          this.isAdding = false
        }
        if (this.isEditing) {
          await this.$listeners['new-value']('nonMonetaryEdit', {
            replace: this.initialValue,
            with: this.form.contribution
          })
          this.isEditing = false
        }
      }
    }
  },
  directives: {
    focus: {
      inserted (el, binding, vnode) {
        // This was the only working way I've found to set "contribution" as defaultValue
        if (binding.value) { el.value = binding.value }
        el.focus()
      }
    }
  },
  validations: {
    form: {
      contribution: {
        [L('A contribution is required.')]: required,
        [L('This contribution already exists.')]: function (x) {
          return !this.contributionsList || !this.contributionsList.includes(x)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-contribution {
  padding: 1.5rem 0 1rem 0;
}

.c-item.is-default {
  display: flex;
}

.c-contribution-edit {
  &:first-child,
  .c-contribution + .c-contribution {
    padding-top: 0;
  }

  & + .c-spacer-above .c-contribution {
    padding-top: 1rem;
  }
}

.c-spacer-above {
  padding-top: 1.5rem;
}

.c-label-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.625rem;

  .c-char-len {
    font-size: $size_5;
    color: $text_1;
  }
}

.c-helper {
  display: flex;
  align-items: flex-start;
  column-gap: 0.25rem;
  color: $text_1;
  margin-top: 0.5rem;
  font-size: $size_4;
}

.buttons {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  margin-top: 0;

  button {
    margin-top: 0;
  }
}

.c-inline-button {
  margin-left: 1rem;

  .icon-pencil-alt {
    margin-left: 0;
  }
}

.has-controls {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.c-buttons-right {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.button + .c-buttons-right {
  width: auto;
}
</style>
`, ".c-contribution {\n  padding: 1.5rem 0 1rem 0;\n}\n\n.c-item.is-default {\n  display: flex;\n}\n\n.c-contribution-edit:first-child,\n.c-contribution-edit .c-contribution + .c-contribution {\n  padding-top: 0;\n}\n.c-contribution-edit + .c-spacer-above .c-contribution {\n  padding-top: 1rem;\n}\n\n.c-spacer-above {\n  padding-top: 1.5rem;\n}\n\n.c-label-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len {\n  font-size: 0.75rem;\n  color: var(--text_1);\n}\n\n.c-helper {\n  display: flex;\n  align-items: flex-start;\n  column-gap: 0.25rem;\n  color: var(--text_1);\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.buttons {\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n  margin-top: 0;\n}\n.buttons button {\n  margin-top: 0;\n}\n\n.c-inline-button {\n  margin-left: 1rem;\n}\n.c-inline-button .icon-pencil-alt {\n  margin-left: 0;\n}\n\n.has-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.c-buttons-right {\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n\n.button + .c-buttons-right {\n  width: auto;\n}\n\n/*# sourceMappingURL=Contribution.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-111ee7a3";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
transition(name='replace-list')
  li.c-contribution-edit(v-if='isEditing || isAdding' data-test='editing' key='editing')
    form.c-contribution(
      @submit.prevent=''
      novalidate='true'
    )
      .c-label-container
        span.c-char-len {{ contributionCharLen }}
      input.input(
        type='text'
        :placeholder='randomPlaceholder'
        :aria-label='L("Your contribution")'
        :maxlength='contributionMaxChar'
        v-error:contribution=''
        v-focus=''
        v-model='$v.form.contribution.$model'
        data-test='inputNonMonetaryContribution'
        @keyup='verifyValue'
        @keydown.esc='cancel'
        @keydown.enter.prevent='handleEnter'
      )

      .c-helper(v-if='receiverHasOnlyOneItem')
        i.icon-info-circle
        i18n At least one non-monetary contribution is required.

      .buttons
        button-submit.is-small.is-danger.is-outlined(
          v-if='showRemoveBtn'
          @click='handleDelete'
          data-test='buttonRemoveNonMonetaryContribution'
        ) {{ L('Remove') }}
        .c-buttons-right
          i18n.button.is-small.is-outlined(
            tag='button'
            @click='cancel'
            data-test='buttonCancelNonMonetaryContribution'
          ) Cancel
          button-submit.is-small(
            v-if='isAdding && isFilled'
            @click='handleSubmit'
            data-test='buttonAddNonMonetaryContribution'
          ) {{ L('Add') }}
          button-submit.is-small(
            v-if='isEditing && isFilled'
            @click='handleSubmit'
            data-test='buttonSaveNonMonetaryContribution'
          ) {{ L('Save') }}

  li(v-else-if='isEditable' :class='itemClasses' data-test='editable' key='editable')
    slot

    button.button.is-small.is-outlined.c-inline-button(
      :aria-label='editAriaLabel'
      @click='handleEditClick'
      data-test='buttonEditNonMonetaryContribution'
    )
      i.icon-pencil-alt.is-prefix
      | {{ L('Edit') }}

  li.c-spacer-above(v-else-if='isUnfilled' data-test='unfilled' key='unfilled')
    button.button.is-small(
      data-test='addNonMonetaryContribution'
      :class='itemClasses'
      @click='isAdding = true'
    )
      slot

  li(v-else='' :class='itemClasses' data-test='basic' key='basic')
    slot
</template>

<script>
import { L } from '../../../../frontend/common/common.js'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import { GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'Contribution',
  mixins: [validationMixin],
  components: {
    ButtonSubmit
  },
  props: {
    variant: {
      type: String,
      validator (value) {
        return [
          'default', // Display the contribution
          'unfilled', // Add a new contribution
          'editable' // Edit a contribution
        ].indexOf(value) > -1
      },
      default: 'default'
    },
    initialValue: {
      type: String
    },
    needsIncome: Boolean,
    contributionsList: Array
  },
  data () {
    return {
      isAdding: false,
      isEditing: false,
      isFilled: null, // decide what input buttons to show
      placeholders: [L('Portuguese classes'), L('Programming'), L('Cooking'), L('Parties'), L('Free cinema tickets')],
      form: {
        contribution: this.initialValue
      },
      contributionMaxChar: GROUP_NON_MONETARY_CONTRIBUTION_MAX_CHAR
    }
  },
  computed: {
    itemClasses () {
      return [
        \`c-item is-\${this.variant}\`,
        { 'has-controls': this.isEditable }
      ]
    },
    isEditable () {
      return this.variant === 'editable'
    },
    isUnfilled () {
      return this.variant === 'unfilled'
    },
    receiverHasOnlyOneItem () {
      return this.needsIncome && this.contributionsList?.length === 1
    },
    showRemoveBtn () {
      return this.isEditing && !this.isAdding && !this.receiverHasOnlyOneItem
    },
    editAriaLabel () {
      return L('Edit contribution settings')
    },
    randomPlaceholder () {
      return this.placeholders[Math.floor(Math.random() * this.placeholders.length)]
    },
    contributionCharLen () {
      const len = this.form.contribution?.length || 0
      return \`\${len}/\${this.contributionMaxChar}\`
    }
  },
  methods: {
    handleEditClick (e) {
      this.isEditing = true
      this.isFilled = !!this.initialValue
      this.form.contribution = this.initialValue
    },
    verifyValue (event) {
      this.isFilled = !!event.target.value
    },
    cancel () {
      this.isAdding = false
      this.isEditing = false
      this.isFilled = false
    },
    handleEnter (e) {
      if (this.isAdding && !this.isFilled) {
        this.setError()
        return false
      }
      return this.isFilled ? this.handleSubmit() : this.handleDelete()
    },
    async handleDelete () {
      await this.$listeners['new-value']('nonMonetaryRemove', this.initialValue)
      this.cancel()
    },
    async handleSubmit () {
      if (this.$v.form.$invalid) {
        this.cancel()
      } else {
        if (this.isAdding) {
          const value = this.form.contribution
          this.form.contribution = null
          this.$v.$reset() // workaround #858
          await this.$listeners['new-value']('nonMonetaryAdd', value)
          this.isAdding = false
        }
        if (this.isEditing) {
          await this.$listeners['new-value']('nonMonetaryEdit', {
            replace: this.initialValue,
            with: this.form.contribution
          })
          this.isEditing = false
        }
      }
    }
  },
  directives: {
    focus: {
      inserted (el, binding, vnode) {
        // This was the only working way I've found to set "contribution" as defaultValue
        if (binding.value) { el.value = binding.value }
        el.focus()
      }
    }
  },
  validations: {
    form: {
      contribution: {
        [L('A contribution is required.')]: required,
        [L('This contribution already exists.')]: function (x) {
          return !this.contributionsList || !this.contributionsList.includes(x)
        }
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-contribution {
  padding: 1.5rem 0 1rem 0;
}

.c-item.is-default {
  display: flex;
}

.c-contribution-edit {
  &:first-child,
  .c-contribution + .c-contribution {
    padding-top: 0;
  }

  & + .c-spacer-above .c-contribution {
    padding-top: 1rem;
  }
}

.c-spacer-above {
  padding-top: 1.5rem;
}

.c-label-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.625rem;

  .c-char-len {
    font-size: $size_5;
    color: $text_1;
  }
}

.c-helper {
  display: flex;
  align-items: flex-start;
  column-gap: 0.25rem;
  color: $text_1;
  margin-top: 0.5rem;
  font-size: $size_4;
}

.buttons {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  margin-top: 0;

  button {
    margin-top: 0;
  }
}

.c-inline-button {
  margin-left: 1rem;

  .icon-pencil-alt {
    margin-left: 0;
  }
}

.has-controls {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.c-buttons-right {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.button + .c-buttons-right {
  width: auto;
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
var Contribution_default = __vue_component__;

// frontend/views/containers/contributions/ContributionItem.vue
var import_vue_clickaway = __toESM(require_vue_clickaway_common());
var __vue_script__2 = {
  name: "ContributionItem",
  components: {
    ProfileCardContent: ProfileCardContent_default
  },
  mixins: [import_vue_clickaway.mixin],
  props: {
    who: [String, Array],
    whoIds: Array,
    what: String,
    action: {
      type: String,
      validator: function(value) {
        return ["RECEIVING", "GIVING"].indexOf(value) !== -1;
      },
      default: "RECEIVING"
    },
    type: {
      type: String,
      validator: function(value) {
        return ["NON_MONETARY", "MONETARY"].indexOf(value) !== -1;
      },
      default: "NON_MONETARY"
    }
  },
  data() {
    return {
      ephemeral: {
        isVisible: false,
        profileTooltip: {
          show: false,
          userId: null
        }
      }
    };
  },
  computed: {
    listOfName() {
      const html = {
        amount: `<span class="has-text-bold">${this.what}</span>`,
        listName: this.who.map((name, index) => {
          return `<p class="has-text-1 c-contribution-list-item">${name}</p>`;
        }).join("")
      };
      if (this.action === "RECEIVING") {
        return L("{amount} from {listName}", html);
      } else {
        return L("A total of {amount} to {listName}", html);
      }
    },
    firstWho() {
      const who = this.who;
      const btnHtml = {
        button_: '<button class="is-unstyled is-link-inherit link user-name">',
        _button: "</button>"
      };
      if (!Array.isArray(who)) return L("{button_}{who}{_button}", { who, ...btnHtml });
      return who.length === 2 ? L("{button_}{who0}{_button} and {button_}{who1}{_button}", { who0: who[0], who1: who[1], ...btnHtml }) : L("{button_}{who}{_button}", { who: who[0], ...btnHtml });
    },
    otherContributor() {
      return this.who.length;
    },
    hasWhoElse() {
      return Array.isArray(this.who) && this.who.length > 2;
    },
    contributionText() {
      if (this.hasWhoElse) {
        const html = {
          service: `<span class="has-text-bold">${this.what}</span>`,
          numMembers: this.otherContributor,
          button_: '<button class="is-unstyled is-link-inherit link">',
          _button: "</button>"
        };
        if (this.action === "GIVING" && this.type === "MONETARY") {
          return L("A total of {service} to {button_}{numMembers} members{_button}", html);
        } else {
          return L("{service} from {button_}{numMembers} members{_button}", html);
        }
      } else {
        if (this.action === "RECEIVING") {
          const html = {
            service: `<span class="has-text-bold">${this.what}</span>`,
            who: this.firstWho
          };
          return L("{service} from {who}", html);
        } else {
          if (this.type === "MONETARY") {
            const html = {
              amount: `<span class="has-text-bold">${this.what}</span>`,
              who: this.firstWho
            };
            return L("{amount} to {who}", html);
          } else {
            return `<span class="has-text-bold">${this.what}</span>`;
          }
        }
      }
    },
    iconClass() {
      const style = {
        "NON_MONETARY": {
          icon: "heart",
          color: "warning"
        },
        "MONETARY": {
          icon: "coins",
          color: "success"
        }
      };
      return `icon-${style[this.type].icon} icon-round has-background-${style[this.type].color} has-text-${style[this.type].color}`;
    }
  },
  methods: {
    toggleVisibility() {
      this.ephemeral.isVisible = !this.ephemeral.isVisible;
    },
    showProfileTooltip(e) {
      const el = e.target;
      const isAlreadyShowing = this.ephemeral.profileTooltip.show;
      if (el.matches("button.user-name")) {
        const displayName = el.textContent.trim();
        const index = !Array.isArray(this.who) ? 0 : this.who.findIndex((name) => displayName === name);
        if (index >= 0) {
          setTimeout(
            () => {
              this.ephemeral.profileTooltip.userId = this.whoIds[index];
              this.ephemeral.profileTooltip.show = true;
            },
            // If the tooltip is already open, clicking on another username executes closeProfileTooltip() too (which is triggered via v-on-clickaway directive),
            // So showProfileTooltip() needs a bit of delay to seemlessly update the content of the profile tooltip.
            isAlreadyShowing ? 150 : 0
          );
        }
      }
    },
    closeProfileTooltip() {
      if (this.ephemeral.profileTooltip.show) {
        this.ephemeral.profileTooltip.show = false;
        this.ephemeral.profileTooltip.userId = null;
      }
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-contribution-item" }, [
    _c("i", { class: _vm.iconClass }),
    _vm.hasWhoElse ? _c(
      "div",
      [
        _c("transition", { attrs: { name: "replace-list" } }, [
          _vm.ephemeral.isVisible ? _c(
            "div",
            { key: "visible" },
            [
              _c("div", {
                directives: [
                  {
                    name: "safe-html",
                    rawName: "v-safe-html",
                    value: _vm.listOfName,
                    expression: "listOfName"
                  }
                ],
                staticClass: "c-contribution-list"
              }),
              _c(
                "i18n",
                {
                  staticClass: "is-unstyled is-link-inherit link",
                  attrs: { tag: "button", type: "button" },
                  on: { click: _vm.toggleVisibility }
                },
                [_vm._v("Hide")]
              )
            ],
            1
          ) : _c("div", {
            directives: [
              {
                name: "safe-html",
                rawName: "v-safe-html",
                value: _vm.contributionText,
                expression: "contributionText"
              }
            ],
            key: "hidden",
            on: { click: _vm.toggleVisibility }
          })
        ])
      ],
      1
    ) : _c("div", {
      directives: [
        {
          name: "safe-html",
          rawName: "v-safe-html:button",
          value: _vm.contributionText,
          expression: "contributionText",
          arg: "button"
        }
      ],
      staticClass: "c-contribution-list",
      on: { click: _vm.showProfileTooltip }
    }),
    _vm.ephemeral.profileTooltip.show ? _c(
      "div",
      {
        directives: [
          {
            name: "on-clickaway",
            rawName: "v-on-clickaway",
            value: _vm.closeProfileTooltip,
            expression: "closeProfileTooltip"
          }
        ],
        staticClass: "c-profile-card-container is-active"
      },
      [
        _c("div", {
          staticClass: "c-profile-card-overlay",
          on: {
            click: function($event) {
              $event.stopPropagation();
              return _vm.closeProfileTooltip($event);
            }
          }
        }),
        _c("profile-card-content", {
          staticClass: "c-card",
          attrs: {
            contractID: _vm.ephemeral.profileTooltip.userId,
            "on-post-cta-click": _vm.closeProfileTooltip
          },
          on: { "modal-close": _vm.closeProfileTooltip }
        })
      ],
      1
    ) : _vm._e()
  ]);
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-74194be6_0", { source: ".c-contribution-item[data-v-74194be6] {\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  margin: 0.5rem 0;\n}\n[data-v-74194be6] .c-contribution-list-item:nth-child(2) {\n  padding-top: 0.5rem;\n}\n[data-v-74194be6] .c-contribution-list-item:last-child {\n  padding-bottom: 0.5rem;\n}\n.c-profile-card-container[data-v-74194be6] {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: -1rem;\n  z-index: 50;\n}\n@media screen and (max-width: 768px) {\n.c-profile-card-container[data-v-74194be6] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: stretch;\n}\n}\n.c-profile-card-overlay[data-v-74194be6] {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 0;\n}\n@media screen and (max-width: 768px) {\n.c-profile-card-overlay[data-v-74194be6] {\n    display: block;\n}\n}\n.c-card[data-v-74194be6] {\n  position: relative;\n  z-index: 1;\n  background-color: var(--background_0);\n}\n@media screen and (max-width: 768px) {\n.c-card[data-v-74194be6] {\n    border-radius: 0.625rem 0.625rem 0 0;\n}\n}\n.is-dark-theme .c-card[data-v-74194be6] {\n  background-color: var(--general_1);\n}\n.c-card[data-v-74194be6]  .c-close {\n  position: absolute;\n}\n\n/*# sourceMappingURL=ContributionItem.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/contributions/ContributionItem.vue", "ContributionItem.vue"], "names": [], "mappings": "AAmNA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;AClNA;ADsNA;EACA,mBAAA;ACnNA;ADsNA;EACA,sBAAA;ACpNA;ADwNA;EACA,kBAAA;EACA,wBAAA;EACA,WAAA;EACA,WAAA;ACrNA;AACA;ADgNA;IAOA,eAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;IACA,YAAA;IACA,WAAA;IACA,aAAA;IACA,8BAAA;IACA,oBAAA;ACpNE;AACF;ADuNA;EACA,kBAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;EACA,UAAA;ACpNA;AACA;AD2MA;IAWA,cAAA;ACnNE;AACF;ADsNA;EACA,kBAAA;EACA,UAAA;EACA,qCAAA;ACnNA;AACA;AD+MA;IAMA,oCAAA;AClNE;AACF;ADoNA;EACA,kCAAA;AClNA;ADqNA;EACA,kBAAA;ACnNA;;AAEA,+CAA+C", "file": "ContributionItem.vue", "sourcesContent": ["<template lang='pug'>\n.c-contribution-item\n  i(:class='iconClass')\n\n  div(v-if='hasWhoElse')\n    transition(name='replace-list')\n      div(\n        v-if='ephemeral.isVisible'\n        key='visible'\n      )\n        .c-contribution-list(v-safe-html='listOfName')\n\n        i18n.is-unstyled.is-link-inherit.link(\n          tag='button'\n          type='button'\n          @click='toggleVisibility'\n        ) Hide\n\n      div(\n        v-else\n        key='hidden'\n        @click='toggleVisibility'\n        v-safe-html='contributionText'\n      )\n\n  .c-contribution-list(\n    v-else\n    v-safe-html:button='contributionText'\n    @click='showProfileTooltip'\n  )\n\n  .c-profile-card-container.is-active(\n    v-if='ephemeral.profileTooltip.show'\n    v-on-clickaway='closeProfileTooltip'\n  )\n    .c-profile-card-overlay(\n      @click.stop='closeProfileTooltip'\n    )\n\n    // NOTE: Why not ProfileCard.vue here?\n    // In here, we need to display the profile card UI when one or more text 'segments' of the sentence are hovered/focused [1].\n    // ProfileCard.vue is currently implemented with Tooltip.vue component which requires the 'entire sentence' to be the trigger [2].\n    // So instead of further complicating the ProfileCard.vue with the logic for [1] above, we are implementing the logic here and only reusing the\n    // user card UI of ProfileCard.vue (which is ProfileCardContent.vue).\n    profile-card-content.c-card(\n      :contractID='ephemeral.profileTooltip.userId'\n      :on-post-cta-click='closeProfileTooltip'\n      @modal-close='closeProfileTooltip'\n    )\n</template>\n\n<script>\nimport { L } from '../../../../frontend/common/common.js'\nimport ProfileCardContent from '../../../../frontend/views/components/ProfileCardContent.vue'\nimport { mixin as clickaway } from 'vue-clickaway'\n\nexport default ({\n  name: 'ContributionItem',\n  components: {\n    ProfileCardContent\n  },\n  mixins: [clickaway],\n  props: {\n    who: [String, Array],\n    whoIds: Array,\n    what: String,\n    action: {\n      type: String,\n      validator: function (value) {\n        // The value must match one of these strings\n        return ['RECEIVING', 'GIVING'].indexOf(value) !== -1\n      },\n      default: 'RECEIVING'\n    },\n    type: {\n      type: String,\n      validator: function (value) {\n        // The value must match one of these strings\n        return ['NON_MONETARY', 'MONETARY'].indexOf(value) !== -1\n      },\n      default: 'NON_MONETARY'\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        isVisible: false,\n        profileTooltip: {\n          show: false,\n          userId: null\n        }\n      }\n    }\n  },\n  computed: {\n    listOfName () {\n      const html = {\n        amount: `<span class=\"has-text-bold\">${this.what}</span>`,\n        listName: this.who.map((name, index) => {\n          return `<p class=\"has-text-1 c-contribution-list-item\">${name}</p>`\n        }).join('')\n      }\n      if (this.action === 'RECEIVING') {\n        return L('{amount} from {listName}', html)\n      } else {\n        return L('A total of {amount} to {listName}', html)\n      }\n    },\n    firstWho () {\n      const who = this.who\n      const btnHtml = {\n        button_: '<button class=\"is-unstyled is-link-inherit link user-name\">',\n        _button: '</button>'\n      }\n      if (!Array.isArray(who)) return L('{button_}{who}{_button}', { who, ...btnHtml })\n      return who.length === 2\n        ? L('{button_}{who0}{_button} and {button_}{who1}{_button}', { who0: who[0], who1: who[1], ...btnHtml })\n        : L('{button_}{who}{_button}', { who: who[0], ...btnHtml })\n    },\n    otherContributor () {\n      return this.who.length // (-1 contributor + 1 array length)\n    },\n    hasWhoElse () {\n      return Array.isArray(this.who) && this.who.length > 2\n    },\n    contributionText () {\n      if (this.hasWhoElse) {\n        const html = {\n          service: `<span class=\"has-text-bold\">${this.what}</span>`,\n          numMembers: this.otherContributor,\n          button_: '<button class=\"is-unstyled is-link-inherit link\">',\n          _button: '</button>'\n        }\n\n        if (this.action === 'GIVING' && this.type === 'MONETARY') {\n          return L('A total of {service} to {button_}{numMembers} members{_button}', html)\n        } else {\n          return L('{service} from {button_}{numMembers} members{_button}', html)\n        }\n      } else {\n        if (this.action === 'RECEIVING') {\n          const html = {\n            service: `<span class=\"has-text-bold\">${this.what}</span>`,\n            who: this.firstWho\n          }\n          return L('{service} from {who}', html)\n        } else {\n          if (this.type === 'MONETARY') {\n            const html = {\n              amount: `<span class=\"has-text-bold\">${this.what}</span>`,\n              who: this.firstWho\n            }\n            return L('{amount} to {who}', html)\n          } else {\n            return `<span class=\"has-text-bold\">${this.what}</span>`\n          }\n        }\n      }\n    },\n    iconClass () {\n      const style = {\n        'NON_MONETARY': {\n          icon: 'heart',\n          color: 'warning'\n        },\n        'MONETARY': {\n          icon: 'coins',\n          color: 'success'\n        }\n      }\n      return `icon-${style[this.type].icon} icon-round has-background-${style[this.type].color} has-text-${style[this.type].color}`\n    }\n  },\n  methods: {\n    toggleVisibility () {\n      this.ephemeral.isVisible = !this.ephemeral.isVisible\n    },\n    showProfileTooltip (e) {\n      const el = e.target\n      const isAlreadyShowing = this.ephemeral.profileTooltip.show\n\n      if (el.matches('button.user-name')) {\n        const displayName = el.textContent.trim()\n        const index = !Array.isArray(this.who)\n          ? 0\n          : this.who.findIndex(name => displayName === name)\n\n        if (index >= 0) {\n          setTimeout(() => {\n            this.ephemeral.profileTooltip.userId = this.whoIds[index]\n            this.ephemeral.profileTooltip.show = true\n          },\n          // If the tooltip is already open, clicking on another username executes closeProfileTooltip() too (which is triggered via v-on-clickaway directive),\n          // So showProfileTooltip() needs a bit of delay to seemlessly update the content of the profile tooltip.\n          isAlreadyShowing ? 150 : 0)\n        }\n      }\n    },\n    closeProfileTooltip () {\n      if (this.ephemeral.profileTooltip.show) {\n        this.ephemeral.profileTooltip.show = false\n        this.ephemeral.profileTooltip.userId = null\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-contribution-item {\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  margin: 0.5rem 0;\n}\n\n::v-deep .c-contribution-list-item {\n  &:nth-child(2) {\n    padding-top: 0.5rem;\n  }\n\n  &:last-child {\n    padding-bottom: 0.5rem;\n  }\n}\n\n.c-profile-card-container {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: -1rem;\n  z-index: $zindex-tooltip;\n\n  @include phone {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n}\n\n.c-profile-card-overlay {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 0;\n\n  @include phone {\n    display: block;\n  }\n}\n\n.c-card {\n  position: relative;\n  z-index: 1;\n  background-color: $background_0;\n\n  @include phone {\n    border-radius: 0.625rem 0.625rem 0 0;\n  }\n\n  .is-dark-theme & {\n    background-color: $general_1;\n  }\n\n  ::v-deep .c-close {\n    position: absolute;\n  }\n}\n</style>\n", ".c-contribution-item {\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  margin: 0.5rem 0;\n}\n\n::v-deep .c-contribution-list-item:nth-child(2) {\n  padding-top: 0.5rem;\n}\n::v-deep .c-contribution-list-item:last-child {\n  padding-bottom: 0.5rem;\n}\n\n.c-profile-card-container {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: -1rem;\n  z-index: 50;\n}\n@media screen and (max-width: 768px) {\n  .c-profile-card-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n}\n\n.c-profile-card-overlay {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 0;\n}\n@media screen and (max-width: 768px) {\n  .c-profile-card-overlay {\n    display: block;\n  }\n}\n\n.c-card {\n  position: relative;\n  z-index: 1;\n  background-color: var(--background_0);\n}\n@media screen and (max-width: 768px) {\n  .c-card {\n    border-radius: 0.625rem 0.625rem 0 0;\n  }\n}\n.is-dark-theme .c-card {\n  background-color: var(--general_1);\n}\n.c-card ::v-deep .c-close {\n  position: absolute;\n}\n\n/*# sourceMappingURL=ContributionItem.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-74194be6";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.c-contribution-item\n  i(:class='iconClass')\n\n  div(v-if='hasWhoElse')\n    transition(name='replace-list')\n      div(\n        v-if='ephemeral.isVisible'\n        key='visible'\n      )\n        .c-contribution-list(v-safe-html='listOfName')\n\n        i18n.is-unstyled.is-link-inherit.link(\n          tag='button'\n          type='button'\n          @click='toggleVisibility'\n        ) Hide\n\n      div(\n        v-else\n        key='hidden'\n        @click='toggleVisibility'\n        v-safe-html='contributionText'\n      )\n\n  .c-contribution-list(\n    v-else\n    v-safe-html:button='contributionText'\n    @click='showProfileTooltip'\n  )\n\n  .c-profile-card-container.is-active(\n    v-if='ephemeral.profileTooltip.show'\n    v-on-clickaway='closeProfileTooltip'\n  )\n    .c-profile-card-overlay(\n      @click.stop='closeProfileTooltip'\n    )\n\n    // NOTE: Why not ProfileCard.vue here?\n    // In here, we need to display the profile card UI when one or more text 'segments' of the sentence are hovered/focused [1].\n    // ProfileCard.vue is currently implemented with Tooltip.vue component which requires the 'entire sentence' to be the trigger [2].\n    // So instead of further complicating the ProfileCard.vue with the logic for [1] above, we are implementing the logic here and only reusing the\n    // user card UI of ProfileCard.vue (which is ProfileCardContent.vue).\n    profile-card-content.c-card(\n      :contractID='ephemeral.profileTooltip.userId'\n      :on-post-cta-click='closeProfileTooltip'\n      @modal-close='closeProfileTooltip'\n    )\n</template>\n\n<script>\nimport { L } from '../../../../frontend/common/common.js'\nimport ProfileCardContent from '../../../../frontend/views/components/ProfileCardContent.vue'\nimport { mixin as clickaway } from 'vue-clickaway'\n\nexport default ({\n  name: 'ContributionItem',\n  components: {\n    ProfileCardContent\n  },\n  mixins: [clickaway],\n  props: {\n    who: [String, Array],\n    whoIds: Array,\n    what: String,\n    action: {\n      type: String,\n      validator: function (value) {\n        // The value must match one of these strings\n        return ['RECEIVING', 'GIVING'].indexOf(value) !== -1\n      },\n      default: 'RECEIVING'\n    },\n    type: {\n      type: String,\n      validator: function (value) {\n        // The value must match one of these strings\n        return ['NON_MONETARY', 'MONETARY'].indexOf(value) !== -1\n      },\n      default: 'NON_MONETARY'\n    }\n  },\n  data () {\n    return {\n      ephemeral: {\n        isVisible: false,\n        profileTooltip: {\n          show: false,\n          userId: null\n        }\n      }\n    }\n  },\n  computed: {\n    listOfName () {\n      const html = {\n        amount: `<span class=\"has-text-bold\">${this.what}</span>`,\n        listName: this.who.map((name, index) => {\n          return `<p class=\"has-text-1 c-contribution-list-item\">${name}</p>`\n        }).join('')\n      }\n      if (this.action === 'RECEIVING') {\n        return L('{amount} from {listName}', html)\n      } else {\n        return L('A total of {amount} to {listName}', html)\n      }\n    },\n    firstWho () {\n      const who = this.who\n      const btnHtml = {\n        button_: '<button class=\"is-unstyled is-link-inherit link user-name\">',\n        _button: '</button>'\n      }\n      if (!Array.isArray(who)) return L('{button_}{who}{_button}', { who, ...btnHtml })\n      return who.length === 2\n        ? L('{button_}{who0}{_button} and {button_}{who1}{_button}', { who0: who[0], who1: who[1], ...btnHtml })\n        : L('{button_}{who}{_button}', { who: who[0], ...btnHtml })\n    },\n    otherContributor () {\n      return this.who.length // (-1 contributor + 1 array length)\n    },\n    hasWhoElse () {\n      return Array.isArray(this.who) && this.who.length > 2\n    },\n    contributionText () {\n      if (this.hasWhoElse) {\n        const html = {\n          service: `<span class=\"has-text-bold\">${this.what}</span>`,\n          numMembers: this.otherContributor,\n          button_: '<button class=\"is-unstyled is-link-inherit link\">',\n          _button: '</button>'\n        }\n\n        if (this.action === 'GIVING' && this.type === 'MONETARY') {\n          return L('A total of {service} to {button_}{numMembers} members{_button}', html)\n        } else {\n          return L('{service} from {button_}{numMembers} members{_button}', html)\n        }\n      } else {\n        if (this.action === 'RECEIVING') {\n          const html = {\n            service: `<span class=\"has-text-bold\">${this.what}</span>`,\n            who: this.firstWho\n          }\n          return L('{service} from {who}', html)\n        } else {\n          if (this.type === 'MONETARY') {\n            const html = {\n              amount: `<span class=\"has-text-bold\">${this.what}</span>`,\n              who: this.firstWho\n            }\n            return L('{amount} to {who}', html)\n          } else {\n            return `<span class=\"has-text-bold\">${this.what}</span>`\n          }\n        }\n      }\n    },\n    iconClass () {\n      const style = {\n        'NON_MONETARY': {\n          icon: 'heart',\n          color: 'warning'\n        },\n        'MONETARY': {\n          icon: 'coins',\n          color: 'success'\n        }\n      }\n      return `icon-${style[this.type].icon} icon-round has-background-${style[this.type].color} has-text-${style[this.type].color}`\n    }\n  },\n  methods: {\n    toggleVisibility () {\n      this.ephemeral.isVisible = !this.ephemeral.isVisible\n    },\n    showProfileTooltip (e) {\n      const el = e.target\n      const isAlreadyShowing = this.ephemeral.profileTooltip.show\n\n      if (el.matches('button.user-name')) {\n        const displayName = el.textContent.trim()\n        const index = !Array.isArray(this.who)\n          ? 0\n          : this.who.findIndex(name => displayName === name)\n\n        if (index >= 0) {\n          setTimeout(() => {\n            this.ephemeral.profileTooltip.userId = this.whoIds[index]\n            this.ephemeral.profileTooltip.show = true\n          },\n          // If the tooltip is already open, clicking on another username executes closeProfileTooltip() too (which is triggered via v-on-clickaway directive),\n          // So showProfileTooltip() needs a bit of delay to seemlessly update the content of the profile tooltip.\n          isAlreadyShowing ? 150 : 0)\n        }\n      }\n    },\n    closeProfileTooltip () {\n      if (this.ephemeral.profileTooltip.show) {\n        this.ephemeral.profileTooltip.show = false\n        this.ephemeral.profileTooltip.userId = null\n      }\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../frontend/assets/style/_variables.scss\";\n\n.c-contribution-item {\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  margin: 0.5rem 0;\n}\n\n::v-deep .c-contribution-list-item {\n  &:nth-child(2) {\n    padding-top: 0.5rem;\n  }\n\n  &:last-child {\n    padding-bottom: 0.5rem;\n  }\n}\n\n.c-profile-card-container {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: -1rem;\n  z-index: $zindex-tooltip;\n\n  @include phone {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n}\n\n.c-profile-card-overlay {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 0;\n\n  @include phone {\n    display: block;\n  }\n}\n\n.c-card {\n  position: relative;\n  z-index: 1;\n  background-color: $background_0;\n\n  @include phone {\n    border-radius: 0.625rem 0.625rem 0 0;\n  }\n\n  .is-dark-theme & {\n    background-color: $general_1;\n  }\n\n  ::v-deep .c-close {\n    position: absolute;\n  }\n}\n</style>\n";
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
var ContributionItem_default = __vue_component__2;

// frontend/views/pages/Contributions.vue
var __vue_script__3 = {
  name: "Contributions",
  components: {
    Page: Page_default,
    PageSection: PageSection_default,
    CalloutCard: CalloutCard_default,
    Contribution: Contribution_default,
    ContributionItem: ContributionItem_default,
    AddIncomeDetailsWidget: AddIncomeDetailsWidget_default
  },
  data() {
    return {
      form: {
        incomeDetailsType: "incomeAmount",
        incomeAmount: 0,
        pledgeAmount: 0
      },
      ephemeral: {
        isEditingIncome: false,
        isActive: true
      },
      paymentMethod: "Manual"
      // static
    };
  },
  computed: {
    ...mapGetters([
      "ourGroupProfile",
      "groupSettings",
      "groupMembersCount",
      "groupProfiles",
      "globalProfile",
      "groupIncomeDistribution",
      "ourContributionSummary"
    ]),
    upTo() {
      const amount = this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType];
      if (typeof amount !== "number") return false;
      return this.withGroupCurrency(this.needsIncome ? this.groupSettings.mincomeAmount - amount : amount);
    },
    someoneNeedsIncome() {
      return Boolean(this.groupIncomeDistribution.length);
    },
    needsIncome() {
      return this.ourGroupProfile.incomeDetailsType === "incomeAmount";
    },
    receivingNonMonetary() {
      return this.ourContributionSummary.receivingNonMonetary;
    },
    receivingMonetary() {
      return this.ourContributionSummary.receivingMonetary;
    },
    givingMonetary() {
      return this.ourContributionSummary.givingMonetary;
    },
    doesReceiveNonMonetary() {
      return this.receivingNonMonetary && this.receivingNonMonetary.who.length > 0;
    },
    doesReceiveMonetary() {
      return (this.receivingMonetary || {}).total > 0;
    },
    doesReceiveAny() {
      return this.doesReceiveMonetary || this.doesReceiveNonMonetary;
    },
    doesGiveMonetary() {
      return (this.givingMonetary || {}).total > 0;
    },
    notContributing() {
      return this.needsIncome && !this.ourContributionSummary.givingNonMonetary;
    },
    noOneToGive() {
      return (this.givingMonetary || {}).total === 0;
    }
  },
  beforeMount() {
    const profile = this.ourGroupProfile || {};
    const incomeDetailsType = profile.incomeDetailsType;
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType;
      this.form[incomeDetailsType] = profile[incomeDetailsType];
    }
  },
  methods: {
    openModal(modal) {
      esm_default("okTurtles.events/emit", OPEN_MODAL, modal);
    },
    async handleNonMonetary(type, value) {
      try {
        await esm_default("gi.actions/group/groupProfileUpdate", {
          data: { [type]: value },
          contractID: this.$store.state.currentGroupId
        });
      } catch (e) {
        await esm_default("gi.ui/prompt", {
          heading: L("Failed to add a contribution"),
          question: e.message,
          primaryButton: L("Close")
        });
      }
    },
    displayName(username) {
      return this.globalProfile(username).displayName || username;
    },
    withGroupCurrency
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "page",
    {
      attrs: {
        pageTestName: "contributionsPage",
        pageTestHeaderName: "contributionsTitle"
      },
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function() {
            return [_vm._v(_vm._s(_vm.L("Contributions")))];
          },
          proxy: true
        }
      ])
    },
    [
      !_vm.ourGroupProfile || !_vm.ourGroupProfile.incomeDetailsType ? _c("add-income-details-widget") : [
        _c(
          "div",
          { staticClass: "c-contribution-header" },
          [
            _c(
              "div",
              { staticClass: "has-text-1" },
              [
                _vm.needsIncome ? _c(
                  "i18n",
                  {
                    attrs: {
                      tag: "p",
                      "data-test": "headerNeed",
                      args: {
                        amount: '<span class="has-text-bold has-text-0">' + _vm.upTo + "</span>"
                      }
                    }
                  },
                  [_vm._v("You need {amount}")]
                ) : _c(
                  "i18n",
                  {
                    attrs: {
                      tag: "p",
                      "data-test": "headerPledge",
                      args: {
                        upTo: '<span class="has-text-bold has-text-0">' + _vm.upTo + "</span>"
                      }
                    }
                  },
                  [_vm._v("You are pledging up to {upTo}")]
                ),
                _c(
                  "i18n",
                  {
                    attrs: {
                      tag: "p",
                      args: {
                        paymentMethod: '<span class="has-text-bold has-text-0">' + _vm.paymentMethod + "</span>"
                      }
                    }
                  },
                  [_vm._v("Payment method {paymentMethod}")]
                )
              ],
              1
            ),
            _c(
              "i18n",
              {
                staticClass: "button is-small",
                attrs: {
                  tag: "button",
                  "data-test": "openIncomeDetailsModal"
                },
                on: {
                  click: function($event) {
                    return _vm.openModal("IncomeDetails");
                  }
                }
              },
              [_vm._v("Change")]
            )
          ],
          1
        ),
        _c("section", { staticClass: "card contribution-card" }, [
          _c(
            "div",
            { staticClass: "receiving" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-title-3 card-header",
                  attrs: { tag: "h3" }
                },
                [_vm._v("Receiving")]
              ),
              !_vm.doesReceiveAny ? _c(
                "i18n",
                {
                  staticClass: "has-text-1 spacer-around",
                  attrs: {
                    tag: "p",
                    "data-test": "receivingParagraph"
                  }
                },
                [
                  _vm._v(
                    "When other members pledge a monetary or non-monetary contribution, they will appear here."
                  )
                ]
              ) : _vm.needsIncome && !_vm.doesReceiveMonetary ? _c(
                "i18n",
                {
                  staticClass: "has-text-1 spacer-around",
                  attrs: {
                    tag: "p",
                    "data-test": "receivingParagraph"
                  }
                },
                [_vm._v("No one is pledging money at the moment.")]
              ) : _vm._e(),
              _vm.doesReceiveAny ? _c(
                "ul",
                {
                  staticClass: "spacer",
                  attrs: { "data-test": "receivingList" }
                },
                [
                  _vm.doesReceiveMonetary ? _c(
                    "contribution",
                    [
                      _c("contribution-item", {
                        attrs: {
                          what: _vm.withGroupCurrency(
                            _vm.receivingMonetary.total
                          ),
                          who: _vm.receivingMonetary.who,
                          whoIds: _vm.receivingMonetary.whoIds,
                          type: "MONETARY"
                        }
                      })
                    ],
                    1
                  ) : _vm._e(),
                  _vm.receivingNonMonetary ? _vm._l(
                    _vm.receivingNonMonetary.what,
                    function(contribution, index) {
                      return _c(
                        "contribution",
                        { key: "contribution-" + index },
                        [
                          _c("contribution-item", {
                            attrs: {
                              what: contribution.what,
                              who: contribution.who,
                              whoIds: contribution.whoIds,
                              type: "NON_MONETARY"
                            }
                          })
                        ],
                        1
                      );
                    }
                  ) : _vm._e()
                ],
                2
              ) : _vm._e(),
              _vm.groupMembersCount === 1 ? _c(
                "button",
                {
                  staticClass: "button is-small c-cta",
                  on: {
                    click: function($event) {
                      return _vm.openModal("InvitationLinkModal");
                    }
                  }
                },
                [
                  _c("i", { staticClass: "icon-plus is-prefix" }),
                  _c("i18n", [_vm._v("Add members to group")])
                ],
                1
              ) : _vm._e()
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "giving" },
            [
              _c(
                "i18n",
                {
                  staticClass: "is-title-3 card-header",
                  attrs: { tag: "h3" }
                },
                [_vm._v("Giving")]
              ),
              _vm.notContributing ? _c(
                "i18n",
                {
                  staticClass: "has-text-1 spacer-around",
                  attrs: { tag: "p", "data-test": "givingParagraph" }
                },
                [
                  _vm._v(
                    "You can contribute to your group with money or other valuables like teaching skills, sharing your time to help someone. The sky is the limit!"
                  )
                ]
              ) : !_vm.someoneNeedsIncome ? _c(
                "i18n",
                {
                  staticClass: "has-text-1 spacer-around",
                  attrs: { "data-test": "givingParagraph", tag: "p" }
                },
                [
                  _vm._v(
                    "No one needs monetary contributions at the moment. You can still add non-monetary contributions if you would like."
                  )
                ]
              ) : _vm.noOneToGive ? _c(
                "i18n",
                {
                  staticClass: "has-text-1 spacer-around",
                  attrs: { "data-test": "givingParagraph", tag: "p" }
                },
                [
                  _vm._v(
                    "You can add non-monetary contributions for the group here."
                  )
                ]
              ) : _vm._e(),
              _c(
                "ul",
                { attrs: { "data-test": "givingList" } },
                [
                  _vm.doesGiveMonetary ? _c(
                    "contribution",
                    [
                      _c("contribution-item", {
                        attrs: {
                          what: _vm.withGroupCurrency(
                            _vm.givingMonetary.total
                          ),
                          who: _vm.givingMonetary.who,
                          whoIds: _vm.givingMonetary.whoIds,
                          type: "MONETARY",
                          action: "GIVING"
                        }
                      })
                    ],
                    1
                  ) : _vm._e(),
                  _vm._l(
                    _vm.ourGroupProfile.nonMonetaryContributions,
                    function(contribution, index) {
                      return _c(
                        "contribution",
                        {
                          key: "contribution-" + index,
                          staticClass: "has-text-weight-bold",
                          attrs: {
                            "needs-income": _vm.needsIncome,
                            variant: "editable",
                            "contributions-list": _vm.ourGroupProfile.nonMonetaryContributions,
                            "initial-value": contribution
                          },
                          on: { "new-value": _vm.handleNonMonetary }
                        },
                        [
                          _c("contribution-item", {
                            attrs: {
                              what: contribution,
                              type: "NON_MONETARY",
                              action: "GIVING"
                            }
                          })
                        ],
                        1
                      );
                    }
                  ),
                  _c(
                    "contribution",
                    {
                      attrs: {
                        variant: "unfilled",
                        "contributions-list": _vm.ourGroupProfile.nonMonetaryContributions
                      },
                      on: { "new-value": _vm.handleNonMonetary }
                    },
                    [
                      _c("i", { staticClass: "icon-plus is-prefix" }),
                      _c("i18n", [_vm._v("Add a non-monetary pledge")])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ])
      ]
    ],
    2
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-4095a546_0", { source: '.c-contribution-header .has-text-bold {\n  font-family: "Poppins";\n  padding-left: 0.5rem;\n}\n\n/*# sourceMappingURL=Contributions.vue.map */', map: { "version": 3, "sources": ["frontend/views/pages/Contributions.vue", "Contributions.vue"], "names": [], "mappings": "AAgQA;EACA,sBAAA;EACA,oBAAA;AC/PA;;AAEA,4CAA4C", "file": "Contributions.vue", "sourcesContent": [`<template lang='pug'>
page(pageTestName='contributionsPage' pageTestHeaderName='contributionsTitle')
  template(#title='') {{ L('Contributions') }}

  add-income-details-widget(v-if='!ourGroupProfile || !ourGroupProfile.incomeDetailsType')

  template(v-else)
    .c-contribution-header
      .has-text-1
        i18n(
          v-if='needsIncome'
          tag='p'
          data-test='headerNeed'
          :args='{ amount: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You need {amount}
        i18n(
          v-else
          tag='p'
          data-test='headerPledge'
          :args='{ upTo: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You are pledging up to {upTo}

        i18n(
          tag='p'
          :args='{ paymentMethod: \`<span class="has-text-bold has-text-0">\${paymentMethod}</span>\` }'
        ) Payment method {paymentMethod}

      i18n(
        tag='button'
        class='button is-small'
        data-test='openIncomeDetailsModal'
        @click='openModal("IncomeDetails")'
      ) Change

    section.card.contribution-card
      .receiving
        i18n.is-title-3(tag='h3' class='card-header') Receiving
        i18n.has-text-1.spacer-around(
          v-if='!doesReceiveAny'
          tag='p'
          data-test='receivingParagraph'
        ) When other members pledge a monetary or non-monetary contribution, they will appear here.

        i18n.has-text-1.spacer-around(
          v-else-if='needsIncome && !doesReceiveMonetary'
          tag='p'
          data-test='receivingParagraph'
        ) No one is pledging money at the moment.

        ul.spacer(
          v-if='doesReceiveAny'
          data-test='receivingList'
        )
          contribution(
            v-if='doesReceiveMonetary'
          )
            contribution-item(
              :what='withGroupCurrency(receivingMonetary.total)'
              :who='receivingMonetary.who'
              :whoIds='receivingMonetary.whoIds'
              type='MONETARY'
            )

          template(v-if='receivingNonMonetary')
            contribution(
              v-for='(contribution, index) in receivingNonMonetary.what'
              :key='\`contribution-\${index}\`'
            )
              contribution-item(
                :what='contribution.what'
                :who='contribution.who'
                :whoIds='contribution.whoIds'
                type='NON_MONETARY'
              )

        button.button.is-small.c-cta(
          v-if='groupMembersCount === 1'
          @click='openModal("InvitationLinkModal")'
        )
          i.icon-plus.is-prefix
          i18n Add members to group

      .giving
        i18n.is-title-3(tag='h3' class='card-header') Giving

        i18n.has-text-1.spacer-around(
          v-if='notContributing'
          tag='p'
          data-test='givingParagraph'
        ) You can contribute to your group with money or other valuables like teaching skills, sharing your time to help someone. The sky is the limit!

        i18n.has-text-1.spacer-around(
          v-else-if='!someoneNeedsIncome'
          data-test='givingParagraph'
          tag='p'
        ) No one needs monetary contributions at the moment. You can still add non-monetary contributions if you would like.

        i18n.has-text-1.spacer-around(
          v-else-if='noOneToGive'
          data-test='givingParagraph'
          tag='p'
        ) You can add non-monetary contributions for the group here.

        ul(data-test='givingList')
          contribution(v-if='doesGiveMonetary')
            contribution-item(
              :what='withGroupCurrency(givingMonetary.total)'
              :who='givingMonetary.who'
              :whoIds='givingMonetary.whoIds'
              type='MONETARY'
              action='GIVING'
            )

          contribution.has-text-weight-bold(
            v-for='(contribution, index) in ourGroupProfile.nonMonetaryContributions'
            :key='\`contribution-\${index}\`'
            :needs-income='needsIncome'
            variant='editable'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            :initial-value='contribution'
            @new-value='handleNonMonetary'
          )
            contribution-item(:what='contribution' type='NON_MONETARY' action='GIVING')

          contribution(
            variant='unfilled'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            @new-value='handleNonMonetary'
          )
            i.icon-plus.is-prefix
            i18n Add a non-monetary pledge
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import CalloutCard from '../../../frontend/views/components/CalloutCard.vue'
import Page from '../../../frontend/views/components/Page.vue'
import PageSection from '../../../frontend/views/components/PageSection.vue'
import { withGroupCurrency } from '../../../frontend/views/utils/misc.js'
import Contribution from '../../../frontend/views/containers/contributions/Contribution.vue'
import ContributionItem from '../../../frontend/views/containers/contributions/ContributionItem.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'Contributions',
  components: {
    Page,
    PageSection,
    CalloutCard,
    Contribution,
    ContributionItem,
    AddIncomeDetailsWidget
  },
  data () {
    return {
      form: {
        incomeDetailsType: 'incomeAmount',
        incomeAmount: 0,
        pledgeAmount: 0
      },
      ephemeral: {
        isEditingIncome: false,
        isActive: true
      },
      paymentMethod: 'Manual' // static
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile',
      'groupSettings',
      'groupMembersCount',
      'groupProfiles',
      'globalProfile',
      'groupIncomeDistribution',
      'ourContributionSummary'
    ]),
    upTo () {
      const amount = this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType]
      if (typeof amount !== 'number') return false
      return this.withGroupCurrency(this.needsIncome ? this.groupSettings.mincomeAmount - amount : amount)
    },
    someoneNeedsIncome () {
      return Boolean(this.groupIncomeDistribution.length)
    },
    needsIncome () {
      return this.ourGroupProfile.incomeDetailsType === 'incomeAmount'
    },
    receivingNonMonetary () {
      return this.ourContributionSummary.receivingNonMonetary
    },
    receivingMonetary () {
      return this.ourContributionSummary.receivingMonetary
    },
    givingMonetary () {
      return this.ourContributionSummary.givingMonetary
    },
    doesReceiveNonMonetary () {
      return this.receivingNonMonetary && this.receivingNonMonetary.who.length > 0
    },
    doesReceiveMonetary () {
      return (this.receivingMonetary || {}).total > 0
    },
    doesReceiveAny () {
      return this.doesReceiveMonetary || this.doesReceiveNonMonetary
    },
    doesGiveMonetary () {
      return (this.givingMonetary || {}).total > 0
    },
    notContributing () {
      return this.needsIncome && !this.ourContributionSummary.givingNonMonetary
    },
    noOneToGive () {
      return (this.givingMonetary || {}).total === 0
    }
  },
  beforeMount () {
    const profile = this.ourGroupProfile || {}
    const incomeDetailsType = profile.incomeDetailsType
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType
      this.form[incomeDetailsType] = profile[incomeDetailsType]
    }
  },
  methods: {
    openModal (modal) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal)
    },
    async handleNonMonetary (type, value) {
      try {
        await sbp('gi.actions/group/groupProfileUpdate', {
          data: { [type]: value },
          contractID: this.$store.state.currentGroupId
        })
      } catch (e) {
        await sbp('gi.ui/prompt', {
          heading: L('Failed to add a contribution'),
          question: e.message,
          primaryButton: L('Close')
        })
      }
    },
    displayName (username) {
      return this.globalProfile(username).displayName || username
    },
    withGroupCurrency
  }
}: Object)
<\/script>

<style lang="scss">
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header .has-text-bold {
  font-family: "Poppins";
  padding-left: 0.5rem;
}
</style>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0 1.5rem 0;

  button {
    margin-top: -0.25rem;
  }

  @include tablet {
    padding-top: 0;

    p {
      float: left;
      margin-right: 1.5rem;
    }
  }
}

.contribution-card {

  @include tablet {
    display: flex;
    justify-content: space-between;

    > div {
      width: calc(50% - 1rem);
    }
  }
}

.c-cta {
  margin-top: 1.5rem;

  @include phone {
    margin-bottom: 4rem;
  }
}

.spacer-around {
  margin: 0 0 1rem 0;

  @include tablet {
    margin: 1rem 0 0;
  }
}

.spacer {
  margin-bottom: 2.5rem;

  @include tablet {
    margin-bottom: 1rem;
  }
}

.c-card-empty {
  display: flex;

  .c-svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    flex-shrink: 0;

    @include desktop {
      width: 6.25rem;
      height: 6.25rem;
      margin-right: 2.5rem;
    }
  }
}
</style>
`, '.c-contribution-header .has-text-bold {\n  font-family: "Poppins";\n  padding-left: 0.5rem;\n}\n\n/*# sourceMappingURL=Contributions.vue.map */'] }, media: void 0 }), inject("data-v-4095a546_1", { source: ".c-contribution-header[data-v-4095a546] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1rem 0 1.5rem 0;\n}\n.c-contribution-header button[data-v-4095a546] {\n  margin-top: -0.25rem;\n}\n@media screen and (min-width: 769px), print {\n.c-contribution-header[data-v-4095a546] {\n    padding-top: 0;\n}\n.c-contribution-header p[data-v-4095a546] {\n    float: left;\n    margin-right: 1.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.contribution-card[data-v-4095a546] {\n    display: flex;\n    justify-content: space-between;\n}\n.contribution-card > div[data-v-4095a546] {\n    width: calc(50% - 1rem);\n}\n}\n.c-cta[data-v-4095a546] {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.c-cta[data-v-4095a546] {\n    margin-bottom: 4rem;\n}\n}\n.spacer-around[data-v-4095a546] {\n  margin: 0 0 1rem 0;\n}\n@media screen and (min-width: 769px), print {\n.spacer-around[data-v-4095a546] {\n    margin: 1rem 0 0;\n}\n}\n.spacer[data-v-4095a546] {\n  margin-bottom: 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n.spacer[data-v-4095a546] {\n    margin-bottom: 1rem;\n}\n}\n.c-card-empty[data-v-4095a546] {\n  display: flex;\n}\n.c-card-empty .c-svg[data-v-4095a546] {\n  width: 4rem;\n  height: 4rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n@media screen and (min-width: 1200px) {\n.c-card-empty .c-svg[data-v-4095a546] {\n    width: 6.25rem;\n    height: 6.25rem;\n    margin-right: 2.5rem;\n}\n}\n\n/*# sourceMappingURL=Contributions.vue.map */", map: { "version": 3, "sources": ["frontend/views/pages/Contributions.vue", "Contributions.vue"], "names": [], "mappings": "AAyQA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,wBAAA;ACxQA;AD0QA;EACA,oBAAA;ACxQA;AACA;ADgQA;IAWA,cAAA;ACxQE;AD0QF;IACA,WAAA;IACA,oBAAA;ACxQE;AACF;AAEA;AD0QA;IAGA,aAAA;IACA,8BAAA;AC1QE;AD4QF;IACA,uBAAA;AC1QE;AACF;AD8QA;EACA,kBAAA;AC3QA;AACA;ADyQA;IAIA,mBAAA;AC1QE;AACF;AD6QA;EACA,kBAAA;AC1QA;AACA;ADwQA;IAIA,gBAAA;ACzQE;AACF;AD4QA;EACA,qBAAA;ACzQA;AACA;ADuQA;IAIA,mBAAA;ACxQE;AACF;AD2QA;EACA,aAAA;ACxQA;AD0QA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;ACxQA;AACA;ADmQA;IAOA,cAAA;IACA,eAAA;IACA,oBAAA;ACvQE;AACF;;AAEA,4CAA4C", "file": "Contributions.vue", "sourcesContent": [`<template lang='pug'>
page(pageTestName='contributionsPage' pageTestHeaderName='contributionsTitle')
  template(#title='') {{ L('Contributions') }}

  add-income-details-widget(v-if='!ourGroupProfile || !ourGroupProfile.incomeDetailsType')

  template(v-else)
    .c-contribution-header
      .has-text-1
        i18n(
          v-if='needsIncome'
          tag='p'
          data-test='headerNeed'
          :args='{ amount: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You need {amount}
        i18n(
          v-else
          tag='p'
          data-test='headerPledge'
          :args='{ upTo: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You are pledging up to {upTo}

        i18n(
          tag='p'
          :args='{ paymentMethod: \`<span class="has-text-bold has-text-0">\${paymentMethod}</span>\` }'
        ) Payment method {paymentMethod}

      i18n(
        tag='button'
        class='button is-small'
        data-test='openIncomeDetailsModal'
        @click='openModal("IncomeDetails")'
      ) Change

    section.card.contribution-card
      .receiving
        i18n.is-title-3(tag='h3' class='card-header') Receiving
        i18n.has-text-1.spacer-around(
          v-if='!doesReceiveAny'
          tag='p'
          data-test='receivingParagraph'
        ) When other members pledge a monetary or non-monetary contribution, they will appear here.

        i18n.has-text-1.spacer-around(
          v-else-if='needsIncome && !doesReceiveMonetary'
          tag='p'
          data-test='receivingParagraph'
        ) No one is pledging money at the moment.

        ul.spacer(
          v-if='doesReceiveAny'
          data-test='receivingList'
        )
          contribution(
            v-if='doesReceiveMonetary'
          )
            contribution-item(
              :what='withGroupCurrency(receivingMonetary.total)'
              :who='receivingMonetary.who'
              :whoIds='receivingMonetary.whoIds'
              type='MONETARY'
            )

          template(v-if='receivingNonMonetary')
            contribution(
              v-for='(contribution, index) in receivingNonMonetary.what'
              :key='\`contribution-\${index}\`'
            )
              contribution-item(
                :what='contribution.what'
                :who='contribution.who'
                :whoIds='contribution.whoIds'
                type='NON_MONETARY'
              )

        button.button.is-small.c-cta(
          v-if='groupMembersCount === 1'
          @click='openModal("InvitationLinkModal")'
        )
          i.icon-plus.is-prefix
          i18n Add members to group

      .giving
        i18n.is-title-3(tag='h3' class='card-header') Giving

        i18n.has-text-1.spacer-around(
          v-if='notContributing'
          tag='p'
          data-test='givingParagraph'
        ) You can contribute to your group with money or other valuables like teaching skills, sharing your time to help someone. The sky is the limit!

        i18n.has-text-1.spacer-around(
          v-else-if='!someoneNeedsIncome'
          data-test='givingParagraph'
          tag='p'
        ) No one needs monetary contributions at the moment. You can still add non-monetary contributions if you would like.

        i18n.has-text-1.spacer-around(
          v-else-if='noOneToGive'
          data-test='givingParagraph'
          tag='p'
        ) You can add non-monetary contributions for the group here.

        ul(data-test='givingList')
          contribution(v-if='doesGiveMonetary')
            contribution-item(
              :what='withGroupCurrency(givingMonetary.total)'
              :who='givingMonetary.who'
              :whoIds='givingMonetary.whoIds'
              type='MONETARY'
              action='GIVING'
            )

          contribution.has-text-weight-bold(
            v-for='(contribution, index) in ourGroupProfile.nonMonetaryContributions'
            :key='\`contribution-\${index}\`'
            :needs-income='needsIncome'
            variant='editable'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            :initial-value='contribution'
            @new-value='handleNonMonetary'
          )
            contribution-item(:what='contribution' type='NON_MONETARY' action='GIVING')

          contribution(
            variant='unfilled'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            @new-value='handleNonMonetary'
          )
            i.icon-plus.is-prefix
            i18n Add a non-monetary pledge
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import CalloutCard from '../../../frontend/views/components/CalloutCard.vue'
import Page from '../../../frontend/views/components/Page.vue'
import PageSection from '../../../frontend/views/components/PageSection.vue'
import { withGroupCurrency } from '../../../frontend/views/utils/misc.js'
import Contribution from '../../../frontend/views/containers/contributions/Contribution.vue'
import ContributionItem from '../../../frontend/views/containers/contributions/ContributionItem.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'Contributions',
  components: {
    Page,
    PageSection,
    CalloutCard,
    Contribution,
    ContributionItem,
    AddIncomeDetailsWidget
  },
  data () {
    return {
      form: {
        incomeDetailsType: 'incomeAmount',
        incomeAmount: 0,
        pledgeAmount: 0
      },
      ephemeral: {
        isEditingIncome: false,
        isActive: true
      },
      paymentMethod: 'Manual' // static
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile',
      'groupSettings',
      'groupMembersCount',
      'groupProfiles',
      'globalProfile',
      'groupIncomeDistribution',
      'ourContributionSummary'
    ]),
    upTo () {
      const amount = this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType]
      if (typeof amount !== 'number') return false
      return this.withGroupCurrency(this.needsIncome ? this.groupSettings.mincomeAmount - amount : amount)
    },
    someoneNeedsIncome () {
      return Boolean(this.groupIncomeDistribution.length)
    },
    needsIncome () {
      return this.ourGroupProfile.incomeDetailsType === 'incomeAmount'
    },
    receivingNonMonetary () {
      return this.ourContributionSummary.receivingNonMonetary
    },
    receivingMonetary () {
      return this.ourContributionSummary.receivingMonetary
    },
    givingMonetary () {
      return this.ourContributionSummary.givingMonetary
    },
    doesReceiveNonMonetary () {
      return this.receivingNonMonetary && this.receivingNonMonetary.who.length > 0
    },
    doesReceiveMonetary () {
      return (this.receivingMonetary || {}).total > 0
    },
    doesReceiveAny () {
      return this.doesReceiveMonetary || this.doesReceiveNonMonetary
    },
    doesGiveMonetary () {
      return (this.givingMonetary || {}).total > 0
    },
    notContributing () {
      return this.needsIncome && !this.ourContributionSummary.givingNonMonetary
    },
    noOneToGive () {
      return (this.givingMonetary || {}).total === 0
    }
  },
  beforeMount () {
    const profile = this.ourGroupProfile || {}
    const incomeDetailsType = profile.incomeDetailsType
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType
      this.form[incomeDetailsType] = profile[incomeDetailsType]
    }
  },
  methods: {
    openModal (modal) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal)
    },
    async handleNonMonetary (type, value) {
      try {
        await sbp('gi.actions/group/groupProfileUpdate', {
          data: { [type]: value },
          contractID: this.$store.state.currentGroupId
        })
      } catch (e) {
        await sbp('gi.ui/prompt', {
          heading: L('Failed to add a contribution'),
          question: e.message,
          primaryButton: L('Close')
        })
      }
    },
    displayName (username) {
      return this.globalProfile(username).displayName || username
    },
    withGroupCurrency
  }
}: Object)
<\/script>

<style lang="scss">
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header .has-text-bold {
  font-family: "Poppins";
  padding-left: 0.5rem;
}
</style>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0 1.5rem 0;

  button {
    margin-top: -0.25rem;
  }

  @include tablet {
    padding-top: 0;

    p {
      float: left;
      margin-right: 1.5rem;
    }
  }
}

.contribution-card {

  @include tablet {
    display: flex;
    justify-content: space-between;

    > div {
      width: calc(50% - 1rem);
    }
  }
}

.c-cta {
  margin-top: 1.5rem;

  @include phone {
    margin-bottom: 4rem;
  }
}

.spacer-around {
  margin: 0 0 1rem 0;

  @include tablet {
    margin: 1rem 0 0;
  }
}

.spacer {
  margin-bottom: 2.5rem;

  @include tablet {
    margin-bottom: 1rem;
  }
}

.c-card-empty {
  display: flex;

  .c-svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    flex-shrink: 0;

    @include desktop {
      width: 6.25rem;
      height: 6.25rem;
      margin-right: 2.5rem;
    }
  }
}
</style>
`, ".c-contribution-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1rem 0 1.5rem 0;\n}\n.c-contribution-header button {\n  margin-top: -0.25rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-contribution-header {\n    padding-top: 0;\n  }\n  .c-contribution-header p {\n    float: left;\n    margin-right: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .contribution-card {\n    display: flex;\n    justify-content: space-between;\n  }\n  .contribution-card > div {\n    width: calc(50% - 1rem);\n  }\n}\n\n.c-cta {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .c-cta {\n    margin-bottom: 4rem;\n  }\n}\n\n.spacer-around {\n  margin: 0 0 1rem 0;\n}\n@media screen and (min-width: 769px), print {\n  .spacer-around {\n    margin: 1rem 0 0;\n  }\n}\n\n.spacer {\n  margin-bottom: 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .spacer {\n    margin-bottom: 1rem;\n  }\n}\n\n.c-card-empty {\n  display: flex;\n}\n.c-card-empty .c-svg {\n  width: 4rem;\n  height: 4rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n@media screen and (min-width: 1200px) {\n  .c-card-empty .c-svg {\n    width: 6.25rem;\n    height: 6.25rem;\n    margin-right: 2.5rem;\n  }\n}\n\n/*# sourceMappingURL=Contributions.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-4095a546";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
page(pageTestName='contributionsPage' pageTestHeaderName='contributionsTitle')
  template(#title='') {{ L('Contributions') }}

  add-income-details-widget(v-if='!ourGroupProfile || !ourGroupProfile.incomeDetailsType')

  template(v-else)
    .c-contribution-header
      .has-text-1
        i18n(
          v-if='needsIncome'
          tag='p'
          data-test='headerNeed'
          :args='{ amount: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You need {amount}
        i18n(
          v-else
          tag='p'
          data-test='headerPledge'
          :args='{ upTo: \`<span class="has-text-bold has-text-0">\${upTo}</span>\` }'
        ) You are pledging up to {upTo}

        i18n(
          tag='p'
          :args='{ paymentMethod: \`<span class="has-text-bold has-text-0">\${paymentMethod}</span>\` }'
        ) Payment method {paymentMethod}

      i18n(
        tag='button'
        class='button is-small'
        data-test='openIncomeDetailsModal'
        @click='openModal("IncomeDetails")'
      ) Change

    section.card.contribution-card
      .receiving
        i18n.is-title-3(tag='h3' class='card-header') Receiving
        i18n.has-text-1.spacer-around(
          v-if='!doesReceiveAny'
          tag='p'
          data-test='receivingParagraph'
        ) When other members pledge a monetary or non-monetary contribution, they will appear here.

        i18n.has-text-1.spacer-around(
          v-else-if='needsIncome && !doesReceiveMonetary'
          tag='p'
          data-test='receivingParagraph'
        ) No one is pledging money at the moment.

        ul.spacer(
          v-if='doesReceiveAny'
          data-test='receivingList'
        )
          contribution(
            v-if='doesReceiveMonetary'
          )
            contribution-item(
              :what='withGroupCurrency(receivingMonetary.total)'
              :who='receivingMonetary.who'
              :whoIds='receivingMonetary.whoIds'
              type='MONETARY'
            )

          template(v-if='receivingNonMonetary')
            contribution(
              v-for='(contribution, index) in receivingNonMonetary.what'
              :key='\`contribution-\${index}\`'
            )
              contribution-item(
                :what='contribution.what'
                :who='contribution.who'
                :whoIds='contribution.whoIds'
                type='NON_MONETARY'
              )

        button.button.is-small.c-cta(
          v-if='groupMembersCount === 1'
          @click='openModal("InvitationLinkModal")'
        )
          i.icon-plus.is-prefix
          i18n Add members to group

      .giving
        i18n.is-title-3(tag='h3' class='card-header') Giving

        i18n.has-text-1.spacer-around(
          v-if='notContributing'
          tag='p'
          data-test='givingParagraph'
        ) You can contribute to your group with money or other valuables like teaching skills, sharing your time to help someone. The sky is the limit!

        i18n.has-text-1.spacer-around(
          v-else-if='!someoneNeedsIncome'
          data-test='givingParagraph'
          tag='p'
        ) No one needs monetary contributions at the moment. You can still add non-monetary contributions if you would like.

        i18n.has-text-1.spacer-around(
          v-else-if='noOneToGive'
          data-test='givingParagraph'
          tag='p'
        ) You can add non-monetary contributions for the group here.

        ul(data-test='givingList')
          contribution(v-if='doesGiveMonetary')
            contribution-item(
              :what='withGroupCurrency(givingMonetary.total)'
              :who='givingMonetary.who'
              :whoIds='givingMonetary.whoIds'
              type='MONETARY'
              action='GIVING'
            )

          contribution.has-text-weight-bold(
            v-for='(contribution, index) in ourGroupProfile.nonMonetaryContributions'
            :key='\`contribution-\${index}\`'
            :needs-income='needsIncome'
            variant='editable'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            :initial-value='contribution'
            @new-value='handleNonMonetary'
          )
            contribution-item(:what='contribution' type='NON_MONETARY' action='GIVING')

          contribution(
            variant='unfilled'
            :contributions-list='ourGroupProfile.nonMonetaryContributions'
            @new-value='handleNonMonetary'
          )
            i.icon-plus.is-prefix
            i18n Add a non-monetary pledge
</template>

<script>
import sbp from '@sbp/sbp'
import { mapGetters } from 'vuex'
import { OPEN_MODAL } from '../../../frontend/utils/events.js'
import CalloutCard from '../../../frontend/views/components/CalloutCard.vue'
import Page from '../../../frontend/views/components/Page.vue'
import PageSection from '../../../frontend/views/components/PageSection.vue'
import { withGroupCurrency } from '../../../frontend/views/utils/misc.js'
import Contribution from '../../../frontend/views/containers/contributions/Contribution.vue'
import ContributionItem from '../../../frontend/views/containers/contributions/ContributionItem.vue'
import AddIncomeDetailsWidget from '../../../frontend/views/containers/contributions/AddIncomeDetailsWidget.vue'
import { L } from '../../../frontend/common/common.js'

export default ({
  name: 'Contributions',
  components: {
    Page,
    PageSection,
    CalloutCard,
    Contribution,
    ContributionItem,
    AddIncomeDetailsWidget
  },
  data () {
    return {
      form: {
        incomeDetailsType: 'incomeAmount',
        incomeAmount: 0,
        pledgeAmount: 0
      },
      ephemeral: {
        isEditingIncome: false,
        isActive: true
      },
      paymentMethod: 'Manual' // static
    }
  },
  computed: {
    ...mapGetters([
      'ourGroupProfile',
      'groupSettings',
      'groupMembersCount',
      'groupProfiles',
      'globalProfile',
      'groupIncomeDistribution',
      'ourContributionSummary'
    ]),
    upTo () {
      const amount = this.ourGroupProfile[this.ourGroupProfile.incomeDetailsType]
      if (typeof amount !== 'number') return false
      return this.withGroupCurrency(this.needsIncome ? this.groupSettings.mincomeAmount - amount : amount)
    },
    someoneNeedsIncome () {
      return Boolean(this.groupIncomeDistribution.length)
    },
    needsIncome () {
      return this.ourGroupProfile.incomeDetailsType === 'incomeAmount'
    },
    receivingNonMonetary () {
      return this.ourContributionSummary.receivingNonMonetary
    },
    receivingMonetary () {
      return this.ourContributionSummary.receivingMonetary
    },
    givingMonetary () {
      return this.ourContributionSummary.givingMonetary
    },
    doesReceiveNonMonetary () {
      return this.receivingNonMonetary && this.receivingNonMonetary.who.length > 0
    },
    doesReceiveMonetary () {
      return (this.receivingMonetary || {}).total > 0
    },
    doesReceiveAny () {
      return this.doesReceiveMonetary || this.doesReceiveNonMonetary
    },
    doesGiveMonetary () {
      return (this.givingMonetary || {}).total > 0
    },
    notContributing () {
      return this.needsIncome && !this.ourContributionSummary.givingNonMonetary
    },
    noOneToGive () {
      return (this.givingMonetary || {}).total === 0
    }
  },
  beforeMount () {
    const profile = this.ourGroupProfile || {}
    const incomeDetailsType = profile.incomeDetailsType
    if (incomeDetailsType) {
      this.form.incomeDetailsType = incomeDetailsType
      this.form[incomeDetailsType] = profile[incomeDetailsType]
    }
  },
  methods: {
    openModal (modal) {
      sbp('okTurtles.events/emit', OPEN_MODAL, modal)
    },
    async handleNonMonetary (type, value) {
      try {
        await sbp('gi.actions/group/groupProfileUpdate', {
          data: { [type]: value },
          contractID: this.$store.state.currentGroupId
        })
      } catch (e) {
        await sbp('gi.ui/prompt', {
          heading: L('Failed to add a contribution'),
          question: e.message,
          primaryButton: L('Close')
        })
      }
    },
    displayName (username) {
      return this.globalProfile(username).displayName || username
    },
    withGroupCurrency
  }
}: Object)
<\/script>

<style lang="scss">
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header .has-text-bold {
  font-family: "Poppins";
  padding-left: 0.5rem;
}
</style>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-contribution-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0 1.5rem 0;

  button {
    margin-top: -0.25rem;
  }

  @include tablet {
    padding-top: 0;

    p {
      float: left;
      margin-right: 1.5rem;
    }
  }
}

.contribution-card {

  @include tablet {
    display: flex;
    justify-content: space-between;

    > div {
      width: calc(50% - 1rem);
    }
  }
}

.c-cta {
  margin-top: 1.5rem;

  @include phone {
    margin-bottom: 4rem;
  }
}

.spacer-around {
  margin: 0 0 1rem 0;

  @include tablet {
    margin: 1rem 0 0;
  }
}

.spacer {
  margin-bottom: 2.5rem;

  @include tablet {
    margin-bottom: 1rem;
  }
}

.c-card-empty {
  display: flex;

  .c-svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    flex-shrink: 0;

    @include desktop {
      width: 6.25rem;
      height: 6.25rem;
      margin-right: 2.5rem;
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
var Contributions_default = __vue_component__3;
export {
  Contributions_default as default
};
//# sourceMappingURL=Contributions-KH2AFUWH-cached.js.map
