import {
  AvatarUser_default
} from "./chunk-K4WYPR2K-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";

// frontend/views/components/UsersSelector.vue
var __vue_script__ = {
  name: "UsersSelector",
  components: {
    AvatarUser: AvatarUser_default,
    ButtonSubmit: ButtonSubmit_default
  },
  props: {
    label: {
      type: String,
      required: true
    },
    userIDs: {
      type: Array,
      default: []
    },
    defaultValue: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // NOTE: v-model can't be used here since it's only for limited elements; input, select, textarea
      //       https://vuejs.org/api/built-in-directives.html#v-model
      value: "",
      submitting: false
    };
  },
  computed: {
    ...mapGetters(["userDisplayNameFromID"])
  },
  mounted() {
    this.$refs.input.innerHTML = this.defaultValue;
    this.value = this.defaultValue;
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  },
  methods: {
    remove(contractID) {
      this.$emit("remove", contractID);
    },
    clear() {
      this.$refs.input.focus();
      this.$refs.input.innerHTML = "";
      this.value = "";
    },
    onHandleKeyDown(e) {
      const { keyCode } = e;
      if (keyCode === 13 || keyCode === 39) {
        e.preventDefault();
      }
    },
    onHandleKeyUp(e) {
      const { keyCode } = e;
      if (keyCode === 13 || keyCode === 39) {
        this.$emit("submit");
        return;
      }
      this.value = this.$refs.input.textContent;
    },
    async submitHandler(event) {
      await this.$listeners.submit(event);
    }
  },
  watch: {
    value() {
      this.$emit("change", this.value);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      staticClass: "c-search-form",
      on: {
        submit: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _c("label", { staticClass: "field" }, [
        _c("div", { staticClass: "sr-only" }, [_vm._v(_vm._s(_vm.label))]),
        _c(
          "div",
          { staticClass: "inputgroup c-search", on: { click: _vm.clear } },
          [
            _vm._m(0),
            _c(
              "div",
              { staticClass: "input", attrs: { type: "text", name: "search" } },
              [
                _vm._l(_vm.userIDs, function(contractID, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "profile-wrapper" },
                    [
                      _c(
                        "div",
                        { staticClass: "profile" },
                        [
                          _c("avatar-user", {
                            attrs: { contractID, size: "xs" }
                          }),
                          _c("div", { staticClass: "c-name has-text-bold" }, [
                            _vm._v(
                              _vm._s(_vm.userDisplayNameFromID(contractID))
                            )
                          ]),
                          _c(
                            "div",
                            {
                              staticClass: "button is-icon-small",
                              attrs: { "aria-label": _vm.L("Clear search") },
                              on: {
                                click: function($event) {
                                  $event.preventDefault();
                                  $event.stopPropagation();
                                  return _vm.remove(contractID);
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-times" })]
                          )
                        ],
                        1
                      )
                    ]
                  );
                }),
                _c("div", {
                  ref: "input",
                  staticClass: "c-keyword",
                  attrs: {
                    contenteditable: "contenteditable",
                    "data-test": "users-selector"
                  },
                  on: {
                    keydown: _vm.onHandleKeyDown,
                    keyup: _vm.onHandleKeyUp
                  }
                })
              ],
              2
            )
          ]
        )
      ]),
      _vm.userIDs.length ? _c(
        "div",
        { staticClass: "buttons is-end c-button-container" },
        [
          _c(
            "button-submit",
            {
              staticClass: "is-success c-create-btn",
              on: { click: _vm.submitHandler }
            },
            [_c("i18n", [_vm._v("Create")])],
            1
          )
        ],
        1
      ) : _vm._e()
    ]
  );
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "is-icon prefix", attrs: { "aria-hidden": "true" } },
      [_c("i", { staticClass: "icon-search" })]
    );
  }
];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-7d6c7a62_0", { source: ".c-search-form[data-v-7d6c7a62] {\n  display: block;\n}\n@media screen and (min-width: 769px), print {\n.c-search-form[data-v-7d6c7a62] {\n    display: flex;\n    flex-direction: row;\n}\n}\n.c-button-container[data-v-7d6c7a62] {\n  margin-top: 1rem;\n}\n@media screen and (min-width: 769px), print {\n.c-button-container[data-v-7d6c7a62] {\n    margin-top: 0;\n}\n.c-button-container .c-create-btn[data-v-7d6c7a62] {\n    border-radius: 3px;\n    margin-left: 0.5rem;\n    height: 100%;\n}\n}\n.c-search .addons[data-v-7d6c7a62] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.c-search .input[data-v-7d6c7a62] {\n  position: relative;\n  padding: 0 0 5px 2.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  min-height: 2.75rem;\n  height: fit-content;\n  cursor: text;\n}\n.c-search .input p[data-v-7d6c7a62] {\n  display: inline;\n}\n.c-search .input[data-v-7d6c7a62]:focus-within {\n  box-shadow: 0 0 0 2px var(--primary_1);\n  border-color: var(--primary_0);\n}\n.c-search .profile-wrapper[data-v-7d6c7a62] {\n  display: inline-flex;\n  margin: 5px 5px 0 0;\n}\n.c-search .profile-wrapper .profile[data-v-7d6c7a62] {\n  cursor: default;\n  display: flex;\n  align-items: flex-start;\n  border-radius: 3px;\n  background-color: var(--general_1);\n  line-height: 1;\n  padding: 0.25rem;\n  width: fit-content;\n}\n.c-search .profile-wrapper .profile[data-v-7d6c7a62]:hover {\n  background-color: var(--general_0);\n}\n.c-search .profile-wrapper .profile .c-name[data-v-7d6c7a62] {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.5rem;\n  min-height: 1.5rem;\n  color: var(--text_0);\n  word-break: break-word;\n}\n.c-search .profile-wrapper .profile .button[data-v-7d6c7a62] {\n  margin-left: 0.5rem;\n}\n.c-search .c-keyword[data-v-7d6c7a62] {\n  margin-top: 5px;\n  display: block;\n  line-height: 2.2rem;\n  overflow-wrap: anywhere;\n  min-width: 1rem;\n}\n.c-search .c-keyword[data-v-7d6c7a62]:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=UsersSelector.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/UsersSelector.vue", "UsersSelector.vue"], "names": [], "mappings": "AA6HA;EACA,cAAA;AC5HA;AACA;AD0HA;IAIA,aAAA;IACA,mBAAA;AC3HE;AACF;AD8HA;EACA,gBAAA;AC3HA;AACA;ADyHA;IAIA,aAAA;AC1HE;AD4HF;IACA,kBAAA;IACA,mBAAA;IACA,YAAA;AC1HE;AACF;AD+HA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AC5HA;AD+HA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,2BAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AC7HA;AD+HA;EACA,eAAA;AC7HA;ADgIA;EACA,sCAAA;EACA,8BAAA;AC9HA;ADkIA;EACA,oBAAA;EACA,mBAAA;AChIA;ADkIA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AChIA;ADkIA;EACA,kCAAA;AChIA;ADmIA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,sBAAA;ACjIA;ADoIA;EACA,mBAAA;AClIA;ADuIA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;ACrIA;ADuIA;EACA,aAAA;ACrIA;;AAEA,4CAA4C", "file": "UsersSelector.vue", "sourcesContent": [`<template lang='pug'>
form.c-search-form(@submit.prevent='')
  label.field
    .sr-only {{label}}
    .inputgroup.c-search(
      @click='clear'
    )
      .is-icon.prefix(aria-hidden='true')
        i.icon-search
      .input(
        type='text'
        name='search'
      )
        .profile-wrapper(
          v-for='(contractID, index) in userIDs'
          :key='index'
        )
          .profile
            avatar-user(:contractID='contractID' size='xs')
            .c-name.has-text-bold {{ userDisplayNameFromID(contractID) }}
            .button.is-icon-small(
              @click.prevent.stop='remove(contractID)'
              :aria-label='L("Clear search")'
            )
              i.icon-times
        .c-keyword(
          contenteditable
          ref='input'
          data-test='users-selector'
          @keydown='onHandleKeyDown'
          @keyup='onHandleKeyUp'
        )

  .buttons.is-end.c-button-container(v-if='userIDs.length')
    button-submit.is-success.c-create-btn(@click='submitHandler')
      i18n Create
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarUser from '../../../frontend/views/components/AvatarUser.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'UsersSelector',
  components: {
    AvatarUser,
    ButtonSubmit
  },
  props: {
    label: {
      type: String,
      required: true
    },
    userIDs: {
      type: Array,
      default: []
    },
    defaultValue: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // NOTE: v-model can't be used here since it's only for limited elements; input, select, textarea
      //       https://vuejs.org/api/built-in-directives.html#v-model
      value: '',
      submitting: false
    }
  },
  computed: {
    ...mapGetters(['userDisplayNameFromID'])
  },
  mounted () {
    this.$refs.input.innerHTML = this.defaultValue
    this.value = this.defaultValue
    if (this.autofocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    remove (contractID) {
      this.$emit('remove', contractID)
    },
    clear () {
      this.$refs.input.focus()
      this.$refs.input.innerHTML = ''
      this.value = ''
    },
    onHandleKeyDown (e: KeyboardEvent) {
      const { keyCode } = e
      if (keyCode === 13 || keyCode === 39) { // Enter
        e.preventDefault()
      }
    },
    onHandleKeyUp (e: KeyboardEvent) {
      const { keyCode } = e

      if (keyCode === 13 || keyCode === 39) { // Enter
        this.$emit('submit')
        return
      }

      this.value = this.$refs.input.textContent
    },
    async submitHandler (event) {
      await this.$listeners.submit(event)
    }
  },
  watch: {
    value () {
      this.$emit('change', this.value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-search-form {
  display: block;

  @include tablet {
    display: flex;
    flex-direction: row;
  }
}

.c-button-container {
  margin-top: 1rem;

  @include tablet {
    margin-top: 0;

    .c-create-btn {
      border-radius: 3px;
      margin-left: 0.5rem;
      height: 100%;
    }
  }
}

.c-search {
  .addons {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  .input {
    position: relative;
    padding: 0 0 5px 2.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    min-height: 2.75rem;
    height: fit-content;
    cursor: text;

    p {
      display: inline;
    }

    &:focus-within {
      box-shadow: 0 0 0 2px var(--primary_1);
      border-color: var(--primary_0);
    }
  }

  .profile-wrapper {
    display: inline-flex;
    margin: 5px 5px 0 0;

    .profile {
      cursor: default;
      display: flex;
      align-items: flex-start;
      border-radius: 3px;
      background-color: $general_1;
      line-height: 1;
      padding: 0.25rem;
      width: fit-content;

      &:hover {
        background-color: $general_0;
      }

      .c-name {
        display: inline-flex;
        align-items: center;
        margin-left: 0.5rem;
        min-height: 1.5rem;
        color: $text_0;
        word-break: break-word;
      }

      .button {
        margin-left: 0.5rem;
      }
    }
  }

  .c-keyword {
    margin-top: 5px;
    display: block;
    line-height: 2.2rem;
    overflow-wrap: anywhere;
    min-width: 1rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
`, ".c-search-form {\n  display: block;\n}\n@media screen and (min-width: 769px), print {\n  .c-search-form {\n    display: flex;\n    flex-direction: row;\n  }\n}\n\n.c-button-container {\n  margin-top: 1rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-button-container {\n    margin-top: 0;\n  }\n  .c-button-container .c-create-btn {\n    border-radius: 3px;\n    margin-left: 0.5rem;\n    height: 100%;\n  }\n}\n\n.c-search .addons {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.c-search .input {\n  position: relative;\n  padding: 0 0 5px 2.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  min-height: 2.75rem;\n  height: fit-content;\n  cursor: text;\n}\n.c-search .input p {\n  display: inline;\n}\n.c-search .input:focus-within {\n  box-shadow: 0 0 0 2px var(--primary_1);\n  border-color: var(--primary_0);\n}\n.c-search .profile-wrapper {\n  display: inline-flex;\n  margin: 5px 5px 0 0;\n}\n.c-search .profile-wrapper .profile {\n  cursor: default;\n  display: flex;\n  align-items: flex-start;\n  border-radius: 3px;\n  background-color: var(--general_1);\n  line-height: 1;\n  padding: 0.25rem;\n  width: fit-content;\n}\n.c-search .profile-wrapper .profile:hover {\n  background-color: var(--general_0);\n}\n.c-search .profile-wrapper .profile .c-name {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.5rem;\n  min-height: 1.5rem;\n  color: var(--text_0);\n  word-break: break-word;\n}\n.c-search .profile-wrapper .profile .button {\n  margin-left: 0.5rem;\n}\n.c-search .c-keyword {\n  margin-top: 5px;\n  display: block;\n  line-height: 2.2rem;\n  overflow-wrap: anywhere;\n  min-width: 1rem;\n}\n.c-search .c-keyword:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=UsersSelector.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-7d6c7a62";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
form.c-search-form(@submit.prevent='')
  label.field
    .sr-only {{label}}
    .inputgroup.c-search(
      @click='clear'
    )
      .is-icon.prefix(aria-hidden='true')
        i.icon-search
      .input(
        type='text'
        name='search'
      )
        .profile-wrapper(
          v-for='(contractID, index) in userIDs'
          :key='index'
        )
          .profile
            avatar-user(:contractID='contractID' size='xs')
            .c-name.has-text-bold {{ userDisplayNameFromID(contractID) }}
            .button.is-icon-small(
              @click.prevent.stop='remove(contractID)'
              :aria-label='L("Clear search")'
            )
              i.icon-times
        .c-keyword(
          contenteditable
          ref='input'
          data-test='users-selector'
          @keydown='onHandleKeyDown'
          @keyup='onHandleKeyUp'
        )

  .buttons.is-end.c-button-container(v-if='userIDs.length')
    button-submit.is-success.c-create-btn(@click='submitHandler')
      i18n Create
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarUser from '../../../frontend/views/components/AvatarUser.vue'
import ButtonSubmit from '../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'UsersSelector',
  components: {
    AvatarUser,
    ButtonSubmit
  },
  props: {
    label: {
      type: String,
      required: true
    },
    userIDs: {
      type: Array,
      default: []
    },
    defaultValue: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // NOTE: v-model can't be used here since it's only for limited elements; input, select, textarea
      //       https://vuejs.org/api/built-in-directives.html#v-model
      value: '',
      submitting: false
    }
  },
  computed: {
    ...mapGetters(['userDisplayNameFromID'])
  },
  mounted () {
    this.$refs.input.innerHTML = this.defaultValue
    this.value = this.defaultValue
    if (this.autofocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    remove (contractID) {
      this.$emit('remove', contractID)
    },
    clear () {
      this.$refs.input.focus()
      this.$refs.input.innerHTML = ''
      this.value = ''
    },
    onHandleKeyDown (e: KeyboardEvent) {
      const { keyCode } = e
      if (keyCode === 13 || keyCode === 39) { // Enter
        e.preventDefault()
      }
    },
    onHandleKeyUp (e: KeyboardEvent) {
      const { keyCode } = e

      if (keyCode === 13 || keyCode === 39) { // Enter
        this.$emit('submit')
        return
      }

      this.value = this.$refs.input.textContent
    },
    async submitHandler (event) {
      await this.$listeners.submit(event)
    }
  },
  watch: {
    value () {
      this.$emit('change', this.value)
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../frontend/assets/style/_variables.scss";

.c-search-form {
  display: block;

  @include tablet {
    display: flex;
    flex-direction: row;
  }
}

.c-button-container {
  margin-top: 1rem;

  @include tablet {
    margin-top: 0;

    .c-create-btn {
      border-radius: 3px;
      margin-left: 0.5rem;
      height: 100%;
    }
  }
}

.c-search {
  .addons {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  .input {
    position: relative;
    padding: 0 0 5px 2.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    min-height: 2.75rem;
    height: fit-content;
    cursor: text;

    p {
      display: inline;
    }

    &:focus-within {
      box-shadow: 0 0 0 2px var(--primary_1);
      border-color: var(--primary_0);
    }
  }

  .profile-wrapper {
    display: inline-flex;
    margin: 5px 5px 0 0;

    .profile {
      cursor: default;
      display: flex;
      align-items: flex-start;
      border-radius: 3px;
      background-color: $general_1;
      line-height: 1;
      padding: 0.25rem;
      width: fit-content;

      &:hover {
        background-color: $general_0;
      }

      .c-name {
        display: inline-flex;
        align-items: center;
        margin-left: 0.5rem;
        min-height: 1.5rem;
        color: $text_0;
        word-break: break-word;
      }

      .button {
        margin-left: 0.5rem;
      }
    }
  }

  .c-keyword {
    margin-top: 5px;
    display: block;
    line-height: 2.2rem;
    overflow-wrap: anywhere;
    min-width: 1rem;

    &:focus {
      outline: none;
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
var UsersSelector_default = __vue_component__;

export {
  UsersSelector_default
};
//# sourceMappingURL=chunk-GN75GYHU-cached.js.map
