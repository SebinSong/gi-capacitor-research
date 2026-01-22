import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  uniq
} from "./chunk-MTWMQLQH-cached.js";
import {
  ModalTemplate_default
} from "./chunk-JWCCTDIV-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/payments/ExportPaymentsModal.vue
var __vue_script__ = {
  name: "ExportPaymentsModal",
  components: {
    ModalTemplate: ModalTemplate_default
  },
  data() {
    return {
      form: {
        period: "choose"
      },
      ephemeral: {
        periodOpts: [],
        downloadUrl: "",
        downloadName: ""
      }
    };
  },
  props: {
    data: Array
  },
  computed: {
    ...mapGetters([
      "userDisplayNameFromID",
      "withGroupCurrency"
    ]),
    paymentType() {
      return this.$route.query.type;
    },
    modalTitle() {
      return this.paymentType === "sent" ? L("Export sent payments") : L("Export received payments");
    },
    exportInstructions() {
      return this.paymentType === "sent" ? L("Export your sent payment history to .csv") : L("Export your received payment history to .csv");
    }
  },
  methods: {
    displayPeriod(period) {
      return humanDate(period, { month: "short", day: "numeric", year: "numeric" });
    },
    close() {
      this.$refs.modal.close();
    },
    exportToCSV() {
      const itemsToExport = this.form.period === "all" ? this.data : this.data.filter(
        (entry) => entry.period === this.form.period
      );
      const tableHeadings = [
        this.paymentType === "sent" ? L("Sent to") : L("Sent by"),
        L("Amount"),
        L("Payment method"),
        L("Date & Time"),
        L("Period"),
        L("Mincome at the time")
      ];
      const tableRows = itemsToExport.map((entry) => {
        return [
          this.paymentType === "sent" ? this.userDisplayNameFromID(entry.data.toMemberID) : this.userDisplayNameFromID(entry.data.fromMemberID),
          // 'Sent by' or 'Sent to'
          this.withGroupCurrency(entry.data.amount),
          // 'Amount',
          L("Manual"),
          // 'Payment metod' - !!TODO: once lightning payment is implemented in the app, update the logic here too.
          humanDate(
            entry.meta.createdDate,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }
          ).replaceAll(",", ""),
          // 'Date & Time'
          humanDate(
            entry.period,
            { month: "long", year: "numeric", day: "numeric" }
          ).replaceAll(",", ""),
          // 'Period'
          this.withGroupCurrency(entry.data.groupMincome)
          // Mincome at the time
        ];
      });
      let csvContent = tableHeadings.join(",") + "\r\n";
      for (const row of tableRows) {
        csvContent += row.join(",") + "\r\n";
      }
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
      const downloadUrl = URL.createObjectURL(blob);
      this.ephemeral.downloadName = `${this.paymentType === "sent" ? L("Sent") : L("Received")} payments.csv`;
      this.$refs.downloadHelper.setAttribute("href", downloadUrl);
      this.$nextTick(() => {
        this.$refs.downloadHelper.click();
      });
    }
  },
  mounted() {
    if (this.data?.length) {
      this.ephemeral.periodOpts = uniq(this.data.map((entry) => entry.period));
    } else {
      this.close();
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-template",
    { ref: "modal", attrs: { a11yTitle: _vm.modalTitle } },
    [
      _c("template", { slot: "title" }, [
        _c("span", [_vm._v(_vm._s(_vm.modalTitle))])
      ]),
      _c("div", { staticClass: "c-sub-title has-text-1" }, [
        _vm._v(_vm._s(_vm.exportInstructions))
      ]),
      _c("label", { staticClass: "field" }, [
        _c(
          "div",
          { staticClass: "label" },
          [_c("i18n", [_vm._v("Payment period")])],
          1
        ),
        _c("div", { staticClass: "selectbox" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.period,
                  expression: "form.period"
                }
              ],
              staticClass: "select c-period-select",
              class: { "is-empty": _vm.form.period === "choose" },
              attrs: { name: "period", required: "" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                    return o.selected;
                  }).map(function(o) {
                    var val = "_value" in o ? o._value : o.value;
                    return val;
                  });
                  _vm.$set(
                    _vm.form,
                    "period",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  );
                }
              }
            },
            [
              _c(
                "option",
                { attrs: { value: "choose", disabled: true } },
                [_c("i18n", [_vm._v("Select payment period")])],
                1
              ),
              _c(
                "option",
                { attrs: { value: "all" } },
                [_c("i18n", [_vm._v("Export all periods")])],
                1
              ),
              _vm._l(_vm.ephemeral.periodOpts, function(period) {
                return _c(
                  "option",
                  { key: period, domProps: { value: period } },
                  [_vm._v(_vm._s(_vm.displayPeriod(period)))]
                );
              })
            ],
            2
          )
        ])
      ]),
      _c(
        "div",
        { staticClass: "buttons c-btns-container" },
        [
          _c(
            "i18n",
            {
              staticClass: "is-outlined",
              attrs: { tag: "button", type: "button" },
              on: { click: _vm.close }
            },
            [_vm._v("Cancel")]
          ),
          _c(
            "i18n",
            {
              attrs: { tag: "button", disabled: _vm.form.period === "choose" },
              on: { click: _vm.exportToCSV }
            },
            [_vm._v("Export payments")]
          ),
          _c("a", {
            ref: "downloadHelper",
            staticClass: "c-invisible-download-helper",
            attrs: { download: _vm.ephemeral.downloadName }
          })
        ],
        1
      )
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-3e357f53_0", { source: ".c-sub-title[data-v-3e357f53] {\n  position: relative;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.c-btns-container[data-v-3e357f53] {\n  position: relative;\n  margin-top: 2rem;\n  width: 100%;\n  justify-content: space-between;\n}\n.c-invisible-download-helper[data-v-3e357f53] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=ExportPaymentsModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/payments/ExportPaymentsModal.vue", "ExportPaymentsModal.vue"], "names": [], "mappings": "AA+KA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;AC9KA;ADiLA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,8BAAA;AC9KA;ADiLA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AC9KA;;AAEA,kDAAkD", "file": "ExportPaymentsModal.vue", "sourcesContent": [`<template lang='pug'>
modal-template(ref='modal' :a11yTitle='modalTitle')
  template(slot='title')
    span {{ modalTitle }}

  .c-sub-title.has-text-1 {{ exportInstructions }}

  label.field
    .label
      i18n Payment period

    .selectbox
      select.select.c-period-select(
        name='period'
        required=''
        v-model='form.period'
        :class='{ "is-empty": form.period === "choose" }'
      )
        option(
          value='choose'
          :disabled='true'
        )
          i18n Select payment period

        option(value='all')
          i18n Export all periods

        option(
          v-for='period in ephemeral.periodOpts'
          :key='period'
          :value='period'
        ) {{ displayPeriod(period) }}

  .buttons.c-btns-container
    i18n.is-outlined(
      tag='button'
      type='button'
      @click='close'
    ) Cancel

    i18n(
      tag='button'
      @click='exportToCSV'
      :disabled='form.period === "choose"'
    ) Export payments

    a.c-invisible-download-helper(
      ref='downloadHelper'
      :download='ephemeral.downloadName'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import { uniq } from 'turtledash'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'ExportPaymentsModal',
  components: {
    ModalTemplate
  },
  data () {
    return {
      form: {
        period: 'choose'
      },
      ephemeral: {
        periodOpts: [],
        downloadUrl: '',
        downloadName: ''
      }
    }
  },
  props: {
    data: Array
  },
  computed: {
    ...mapGetters([
      'userDisplayNameFromID',
      'withGroupCurrency'
    ]),
    paymentType () {
      return this.$route.query.type
    },
    modalTitle () {
      return this.paymentType === 'sent'
        ? L('Export sent payments')
        : L('Export received payments')
    },
    exportInstructions () {
      return this.paymentType === 'sent'
        ? L('Export your sent payment history to .csv')
        : L('Export your received payment history to .csv')
    }
  },
  methods: {
    displayPeriod (period) {
      return humanDate(period, { month: 'short', day: 'numeric', year: 'numeric' })
    },
    close () {
      this.$refs.modal.close()
    },
    exportToCSV () {
      // logic here is inspired from the article below:
      // https://medium.com/@idorenyinudoh10/how-to-export-data-from-javascript-to-a-csv-file-955bdfc394a9
      const itemsToExport = this.form.period === 'all'
        ? this.data
        : this.data.filter(
          entry => entry.period === this.form.period
        )

      const tableHeadings = [
        this.paymentType === 'sent' ? L('Sent to') : L('Sent by'),
        L('Amount'),
        L('Payment method'),
        L('Date & Time'),
        L('Period'),
        L('Mincome at the time')
      ]
      const tableRows = itemsToExport.map(entry => {
        return [
          this.paymentType === 'sent'
            ? this.userDisplayNameFromID(entry.data.toMemberID)
            : this.userDisplayNameFromID(entry.data.fromMemberID), // 'Sent by' or 'Sent to'
          this.withGroupCurrency(entry.data.amount), // 'Amount',
          L('Manual'), // 'Payment metod' - !!TODO: once lightning payment is implemented in the app, update the logic here too.
          humanDate(
            entry.meta.createdDate,
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }
          ).replaceAll(',', ''), // 'Date & Time'
          humanDate(
            entry.period,
            { month: 'long', year: 'numeric', day: 'numeric' }
          ).replaceAll(',', ''), // 'Period'
          this.withGroupCurrency(entry.data.groupMincome) // Mincome at the time
        ]
      })

      let csvContent = tableHeadings.join(',') + '\\r\\n'
      for (const row of tableRows) {
        csvContent += row.join(',') + '\\r\\n'
      }

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
      const downloadUrl = URL.createObjectURL(blob)
      this.ephemeral.downloadName = \`\${this.paymentType === 'sent' ? L('Sent') : L('Received')} payments.csv\`
      this.$refs.downloadHelper.setAttribute('href', downloadUrl)

      this.$nextTick(() => {
        this.$refs.downloadHelper.click()
      })
    }
  },
  mounted () {
    if (this.data?.length) {
      this.ephemeral.periodOpts = uniq(this.data.map(entry => entry.period))
    } else {
      this.close()
    }
  }
})
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-sub-title {
  position: relative;
  width: 100%;
  text-align: left;
  margin-bottom: 1.5rem;
}

.c-btns-container {
  position: relative;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
}

.c-invisible-download-helper {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>
`, ".c-sub-title {\n  position: relative;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n\n.c-btns-container {\n  position: relative;\n  margin-top: 2rem;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.c-invisible-download-helper {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=ExportPaymentsModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-3e357f53";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-template(ref='modal' :a11yTitle='modalTitle')
  template(slot='title')
    span {{ modalTitle }}

  .c-sub-title.has-text-1 {{ exportInstructions }}

  label.field
    .label
      i18n Payment period

    .selectbox
      select.select.c-period-select(
        name='period'
        required=''
        v-model='form.period'
        :class='{ "is-empty": form.period === "choose" }'
      )
        option(
          value='choose'
          :disabled='true'
        )
          i18n Select payment period

        option(value='all')
          i18n Export all periods

        option(
          v-for='period in ephemeral.periodOpts'
          :key='period'
          :value='period'
        ) {{ displayPeriod(period) }}

  .buttons.c-btns-container
    i18n.is-outlined(
      tag='button'
      type='button'
      @click='close'
    ) Cancel

    i18n(
      tag='button'
      @click='exportToCSV'
      :disabled='form.period === "choose"'
    ) Export payments

    a.c-invisible-download-helper(
      ref='downloadHelper'
      :download='ephemeral.downloadName'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import ModalTemplate from '../../../../frontend/views/components/modal/ModalTemplate.vue'
import { uniq } from 'turtledash'
import { humanDate } from '../../../../frontend/model/contracts/shared/time.js'
import { L } from '../../../../frontend/common/common.js'

export default ({
  name: 'ExportPaymentsModal',
  components: {
    ModalTemplate
  },
  data () {
    return {
      form: {
        period: 'choose'
      },
      ephemeral: {
        periodOpts: [],
        downloadUrl: '',
        downloadName: ''
      }
    }
  },
  props: {
    data: Array
  },
  computed: {
    ...mapGetters([
      'userDisplayNameFromID',
      'withGroupCurrency'
    ]),
    paymentType () {
      return this.$route.query.type
    },
    modalTitle () {
      return this.paymentType === 'sent'
        ? L('Export sent payments')
        : L('Export received payments')
    },
    exportInstructions () {
      return this.paymentType === 'sent'
        ? L('Export your sent payment history to .csv')
        : L('Export your received payment history to .csv')
    }
  },
  methods: {
    displayPeriod (period) {
      return humanDate(period, { month: 'short', day: 'numeric', year: 'numeric' })
    },
    close () {
      this.$refs.modal.close()
    },
    exportToCSV () {
      // logic here is inspired from the article below:
      // https://medium.com/@idorenyinudoh10/how-to-export-data-from-javascript-to-a-csv-file-955bdfc394a9
      const itemsToExport = this.form.period === 'all'
        ? this.data
        : this.data.filter(
          entry => entry.period === this.form.period
        )

      const tableHeadings = [
        this.paymentType === 'sent' ? L('Sent to') : L('Sent by'),
        L('Amount'),
        L('Payment method'),
        L('Date & Time'),
        L('Period'),
        L('Mincome at the time')
      ]
      const tableRows = itemsToExport.map(entry => {
        return [
          this.paymentType === 'sent'
            ? this.userDisplayNameFromID(entry.data.toMemberID)
            : this.userDisplayNameFromID(entry.data.fromMemberID), // 'Sent by' or 'Sent to'
          this.withGroupCurrency(entry.data.amount), // 'Amount',
          L('Manual'), // 'Payment metod' - !!TODO: once lightning payment is implemented in the app, update the logic here too.
          humanDate(
            entry.meta.createdDate,
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }
          ).replaceAll(',', ''), // 'Date & Time'
          humanDate(
            entry.period,
            { month: 'long', year: 'numeric', day: 'numeric' }
          ).replaceAll(',', ''), // 'Period'
          this.withGroupCurrency(entry.data.groupMincome) // Mincome at the time
        ]
      })

      let csvContent = tableHeadings.join(',') + '\\r\\n'
      for (const row of tableRows) {
        csvContent += row.join(',') + '\\r\\n'
      }

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
      const downloadUrl = URL.createObjectURL(blob)
      this.ephemeral.downloadName = \`\${this.paymentType === 'sent' ? L('Sent') : L('Received')} payments.csv\`
      this.$refs.downloadHelper.setAttribute('href', downloadUrl)

      this.$nextTick(() => {
        this.$refs.downloadHelper.click()
      })
    }
  },
  mounted () {
    if (this.data?.length) {
      this.ephemeral.periodOpts = uniq(this.data.map(entry => entry.period))
    } else {
      this.close()
    }
  }
})
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-sub-title {
  position: relative;
  width: 100%;
  text-align: left;
  margin-bottom: 1.5rem;
}

.c-btns-container {
  position: relative;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
}

.c-invisible-download-helper {
  position: absolute;
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
var ExportPaymentsModal_default = __vue_component__;
export {
  ExportPaymentsModal_default as default
};
//# sourceMappingURL=ExportPaymentsModal-TBMB6GOS-cached.js.map
