import {
  VotingRulesInput_default,
  proposals_default
} from "./chunk-YAAJQAKL-cached.js";
import {
  RULE_PERCENTAGE
} from "./chunk-XIIXXSLC-cached.js";
import "./chunk-WUIM2XSU-cached.js";
import "./chunk-KTNZHYGC-cached.js";
import {
  imageDataURItoBlob
} from "./chunk-DXIHOQP2-cached.js";
import "./chunk-LOAVQ5PN-cached.js";
import {
  DAYS_MILLIS,
  addTimeToDate,
  dateToPeriodStamp,
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  Tooltip_default
} from "./chunk-DMA6TQP3-cached.js";
import "./chunk-532VGDFI-cached.js";
import {
  ModalBaseTemplate_default
} from "./chunk-PVWMN5B2-cached.js";
import {
  Avatar_default
} from "./chunk-OZHDGR4V-cached.js";
import {
  logExceptNavigationDuplicated
} from "./chunk-OBUPKMDO-cached.js";
import {
  currencies_default,
  mincomePositive,
  normalizeCurrency
} from "./chunk-AS6YVRB6-cached.js";
import "./chunk-DRW7AMFK-cached.js";
import {
  CharLengthIndicator_default
} from "./chunk-PDM5OGIJ-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default,
  TransitionExpand_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  require_validators
} from "./chunk-AMO3YQCO-cached.js";
import {
  GROUP_DESCRIPTION_MAX_CHAR,
  GROUP_MINCOME_MAX,
  GROUP_NAME_MAX_CHAR,
  PROPOSAL_GENERIC
} from "./chunk-UYGYRQRQ-cached.js";
import "./chunk-YH4VCTQW-cached.js";
import {
  require_lib
} from "./chunk-OQLS3DKT-cached.js";
import "./chunk-WNIDE56S-cached.js";
import "./chunk-LLQHPKRZ-cached.js";
import "./chunk-UHGLFGQW-cached.js";
import {
  AVATAR_EDITED,
  OPEN_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/group-settings/GroupCreationModal.vue
var import_vuelidate = __toESM(require_lib());

// frontend/views/utils/stepAssistant.js
var stepAssistant_default = {
  name: "StepAssistant",
  mounted() {
    this.redirect(this.config.steps[this.currentStep]);
  },
  provide() {
    return {
      "$assistant": this
    };
  },
  methods: {
    redirect(content) {
      let query = { name: content };
      if (this.$route.query.modal) {
        query = { query: { modal: this.$route.query.modal, step: content } };
      }
      this.$router.push(query).catch(logExceptNavigationDuplicated);
      this.content = content;
    },
    next() {
      if (this.currentStep + 1 < this.config.steps.length) {
        this.redirect(this.config.steps[this.currentStep + 1]);
      }
    },
    prev() {
      if (this.currentStep > 0) {
        this.redirect(this.config.steps[this.currentStep - 1]);
      } else {
        this.$router.push({ query: { modal: null } });
      }
    },
    finish() {
      this.$emit("done");
    }
  },
  data() {
    return {
      content: "",
      config: { steps: [] }
    };
  },
  computed: {
    currentStep() {
      let current = this.$route.name;
      if (this.$route.query.modal) {
        current = this.$route.query.step;
      }
      return Math.max(this.config.steps.indexOf(current), 0);
    }
  }
};

// frontend/views/components/group-creation-steps/GroupName.vue
var __vue_script__ = {
  name: "GroupName",
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data() {
    return {
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR
      }
    };
  },
  inject: ["$assistant"],
  components: {
    Avatar: Avatar_default,
    CharLengthIndicator: CharLengthIndicator_default
  },
  watch: {
    "groupInitials": function(initials) {
      this.updatePictureCanvas(initials);
    }
  },
  beforeMount() {
    esm_default("okTurtles.events/on", AVATAR_EDITED, this.updateGroupPictureByEditor);
  },
  mounted() {
    window.setTimeout(() => {
      this.$refs.name.focus();
    }, 300);
    const c = this.$refs.pictureCanvas;
    c.width = 256;
    c.height = 256;
    if (this.$assistant.ephemeral.groupPictureType === "image") {
      this.$refs.pictureAvatar.setFromBlob(this.$assistant.ephemeral.groupPictureFile);
    } else {
      this.updatePictureCanvas(this.groupInitials);
    }
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", AVATAR_EDITED, this.updateGroupPictureByEditor);
    if (this.$assistant.ephemeral.groupPictureType !== "image") {
      const pictureBase64 = this.$refs.pictureCanvas.toDataURL("image/png");
      this.$v.form.groupPicture.$touch();
      this.$assistant.ephemeral.groupPictureFile = imageDataURItoBlob(pictureBase64);
      this.$assistant.ephemeral.groupPictureType = "canvas";
    }
  },
  computed: {
    groupInitials() {
      const intialsCombined = (str) => str.split(/\s+/).map((segment) => segment.match(/\b\w/)?.[0] || "").join("").toUpperCase();
      return this.group.groupName ? intialsCombined(this.group.groupName).slice(0, 2) ?? "" : "";
    }
  },
  methods: {
    updatePictureCanvas(initials) {
      const c = this.$refs.pictureCanvas;
      const ctx = c.getContext("2d");
      ctx.rect(0, 0, 256, 256);
      ctx.fillStyle = "#7a7a7a";
      ctx.fill();
      ctx.font = "140px Lato";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(initials, 256 / 2, 180);
    },
    updateName(e) {
      this.$v.form.groupName.$touch();
      this.$emit("input", {
        data: {
          groupName: e.target.value
        }
      });
    },
    updateGroupPictureByEditor({ blob }) {
      this.$v.form.groupPicture.$touch();
      this.$assistant.ephemeral.groupPictureFile = blob;
      this.$refs.pictureAvatar.setFromBlob(blob);
      this.$assistant.ephemeral.groupPictureType = "image";
    },
    next(e) {
      this.$v.form[e.target.name].$touch();
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit("next");
      }
    },
    fileChange(files) {
      if (!files.length) return;
      const imageUrl = URL.createObjectURL(files[0]);
      esm_default("okTurtles.events/emit", OPEN_MODAL, "AvatarEditorModal", { imageUrl });
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "i18n",
        { staticClass: "is-title-4 steps-title", attrs: { tag: "h4" } },
        [_vm._v("1. Create a new group")]
      ),
      _c(
        "label",
        { staticClass: "avatar", attrs: { for: "groupPicture" } },
        [
          _c("canvas", {
            ref: "pictureCanvas",
            staticClass: "c-pictureCanvas",
            class: {
              isHidden: _vm.$assistant.ephemeral.groupPictureType === "image"
            }
          }),
          _c("avatar", {
            ref: "pictureAvatar",
            staticClass: "c-pictureAvatar",
            attrs: {
              size: "xl",
              src: "/assets/images/group-avatar-default.png",
              alt: _vm.L("Group avatar")
            }
          }),
          _c("i18n", { staticClass: "link" }, [_vm._v("Upload an image")]),
          _c("input", {
            staticClass: "groupPictureInput",
            class: { error: _vm.$v.form.groupPicture.$error },
            attrs: {
              id: "groupPicture",
              type: "file",
              name: "groupPicture",
              accept: "image/*",
              placeholder: "http://",
              "data-test": "groupPicture"
            },
            on: {
              change: function($event) {
                return _vm.fileChange($event.target.files);
              }
            }
          })
        ],
        1
      ),
      _vm.$v.form.groupPicture.$error ? _c("i18n", { staticClass: "error", attrs: { tag: "p" } }, [
        _vm._v("The group picture must be a valid url")
      ]) : _vm._e(),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("label", { staticClass: "field" }, [
            _c(
              "div",
              { staticClass: "c-label-container" },
              [
                _c("i18n", { staticClass: "label" }, [
                  _vm._v("What is the name of your group?")
                ]),
                _vm.group.groupName ? _c("char-length-indicator", {
                  attrs: {
                    "current-length": _vm.group.groupName.length || 0,
                    max: _vm.config.nameMaxChar,
                    error: _vm.$v.form.groupName.$error
                  }
                }) : _vm._e()
              ],
              1
            ),
            _c("input", {
              directives: [
                {
                  name: "error",
                  rawName: "v-error:groupName",
                  arg: "groupName"
                }
              ],
              ref: "name",
              staticClass: "input is-large is-primary",
              class: { error: _vm.$v.form.groupName.$error },
              attrs: {
                type: "text",
                name: "groupName",
                maxlength: _vm.config.nameMaxChar,
                "data-test": "groupName"
              },
              domProps: { value: _vm.group.groupName },
              on: {
                input: _vm.updateName,
                keyup: function($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                    return null;
                  }
                  return _vm.next($event);
                }
              }
            })
          ]),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-cf6dd1fa_0", { source: ".avatar[data-v-cf6dd1fa] {\n  height: 10rem;\n  margin: 2.5rem auto 2rem auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.avatar .link[data-v-cf6dd1fa] {\n  display: inline-block;\n  margin-top: 0.5rem;\n}\n.c-pictureCanvas[data-v-cf6dd1fa] {\n  position: absolute;\n  background: var(--text_1);\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n}\n.c-pictureCanvas.isHidden[data-v-cf6dd1fa] {\n  opacity: 0;\n  pointer-events: none;\n}\n.groupPictureInput[data-v-cf6dd1fa] {\n  position: absolute;\n  opacity: 0;\n}\n.c-label-container[data-v-cf6dd1fa] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupName.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/group-creation-steps/GroupName.vue", "GroupName.vue"], "names": [], "mappings": "AAuKA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;ACtKA;ADwKA;EACA,qBAAA;EACA,kBAAA;ACtKA;AD0KA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ACvKA;ADyKA;EACA,UAAA;EACA,oBAAA;ACvKA;AD2KA;EACA,kBAAA;EACA,UAAA;ACxKA;AD2KA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;ACxKA;;AAEA,wCAAwC", "file": "GroupName.vue", "sourcesContent": [`<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 1. Create a new group

  label.avatar(for='groupPicture')
    canvas.c-pictureCanvas(ref='pictureCanvas' :class='{isHidden: $assistant.ephemeral.groupPictureType === "image" }')
    avatar.c-pictureAvatar(ref='pictureAvatar' size='xl' src='/assets/images/group-avatar-default.png' :alt='L("Group avatar")')

    i18n.link Upload an image
    input.groupPictureInput#groupPicture(
      type='file'
      name='groupPicture'
      accept='image/*'
      :class='{error: $v.form.groupPicture.$error}'
      @change='fileChange($event.target.files)'
      placeholder='http://'
      data-test='groupPicture'
    )

  i18n.error(v-if='$v.form.groupPicture.$error' tag='p') The group picture must be a valid url

  .card
    label.field
      .c-label-container
        i18n.label What is the name of your group?
        char-length-indicator(
          v-if='group.groupName'
          :current-length='group.groupName.length || 0'
          :max='config.nameMaxChar'
          :error='$v.form.groupName.$error'
        )

      input.input.is-large.is-primary(
        ref='name'
        type='text'
        name='groupName'
        :maxlength='config.nameMaxChar'
        :class='{ error: $v.form.groupName.$error }'
        :value='group.groupName'
        @input='updateName'
        @keyup.enter='next'
        data-test='groupName'
        v-error:groupName=''
      )

    slot
</template>

<script>
import sbp from '@sbp/sbp'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import { OPEN_MODAL, AVATAR_EDITED } from '../../../../frontend/utils/events.js'
import { imageDataURItoBlob } from '../../../../frontend/utils/image.js'
import { GROUP_NAME_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'GroupName',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data () {
    return {
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR
      }
    }
  },
  inject: ['$assistant'],
  components: {
    Avatar,
    CharLengthIndicator
  },
  watch: {
    'groupInitials': function (initials) {
      this.updatePictureCanvas(initials)
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', AVATAR_EDITED, this.updateGroupPictureByEditor)
  },
  mounted () {
    window.setTimeout(() => {
      // An arbitrary delay here is to fix the issue #2020.
      // See the PR description here for the details: https://github.com/okTurtles/group-income/pull/2036#issue-2332505747
      this.$refs.name.focus()
    }, 300)

    const c = this.$refs.pictureCanvas
    c.width = 256
    c.height = 256

    // Recover the saved picture, in case user is coming back to this step.
    if (this.$assistant.ephemeral.groupPictureType === 'image') {
      this.$refs.pictureAvatar.setFromBlob(this.$assistant.ephemeral.groupPictureFile)
    } else {
      this.updatePictureCanvas(this.groupInitials)
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', AVATAR_EDITED, this.updateGroupPictureByEditor)

    if (this.$assistant.ephemeral.groupPictureType !== 'image') {
      const pictureBase64 = this.$refs.pictureCanvas.toDataURL('image/png')
      this.$v.form.groupPicture.$touch()
      this.$assistant.ephemeral.groupPictureFile = imageDataURItoBlob(pictureBase64)
      this.$assistant.ephemeral.groupPictureType = 'canvas'
    }
  },
  computed: {
    groupInitials () {
      const intialsCombined = str => str.split(/\\s+/) // 1. Split the groupname by white-space.
        .map(segment => segment.match(/\\b\\w/)?.[0] || '') // 2. Extract intial from each segment.
        .join('').toUpperCase() // 3. Combine them & uppercase it.

      return this.group.groupName
        ? intialsCombined(this.group.groupName).slice(0, 2) ?? ''
        : ''
    }
  },
  methods: {
    updatePictureCanvas (initials) {
      const c = this.$refs.pictureCanvas
      const ctx = c.getContext('2d')
      ctx.rect(0, 0, 256, 256)
      ctx.fillStyle = '#7a7a7a'
      ctx.fill()

      ctx.font = '140px Lato'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText(initials, 256 / 2, 180)
    },
    updateName (e) {
      this.$v.form.groupName.$touch()
      this.$emit('input', {
        data: {
          groupName: e.target.value
        }
      })
    },
    updateGroupPictureByEditor ({ blob }) {
      this.$v.form.groupPicture.$touch()
      this.$assistant.ephemeral.groupPictureFile = blob
      this.$refs.pictureAvatar.setFromBlob(blob)
      this.$assistant.ephemeral.groupPictureType = 'image'
    },
    next (e) {
      this.$v.form[e.target.name].$touch()
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit('next')
      }
    },
    fileChange (files) {
      if (!files.length) return

      const imageUrl = URL.createObjectURL(files[0])
      sbp('okTurtles.events/emit', OPEN_MODAL, 'AvatarEditorModal', { imageUrl })
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.avatar {
  height: 10rem;
  margin: 2.5rem auto 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .link {
    display: inline-block;
    margin-top: 0.5rem;
  }
}

.c-pictureCanvas {
  position: absolute;
  background: $text_1;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  &.isHidden {
    opacity: 0;
    pointer-events: none;
  }
}

.groupPictureInput {
  position: absolute;
  opacity: 0;
}

.c-label-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
`, ".avatar {\n  height: 10rem;\n  margin: 2.5rem auto 2rem auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.avatar .link {\n  display: inline-block;\n  margin-top: 0.5rem;\n}\n\n.c-pictureCanvas {\n  position: absolute;\n  background: var(--text_1);\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n}\n.c-pictureCanvas.isHidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.groupPictureInput {\n  position: absolute;\n  opacity: 0;\n}\n\n.c-label-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupName.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-cf6dd1fa";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 1. Create a new group

  label.avatar(for='groupPicture')
    canvas.c-pictureCanvas(ref='pictureCanvas' :class='{isHidden: $assistant.ephemeral.groupPictureType === "image" }')
    avatar.c-pictureAvatar(ref='pictureAvatar' size='xl' src='/assets/images/group-avatar-default.png' :alt='L("Group avatar")')

    i18n.link Upload an image
    input.groupPictureInput#groupPicture(
      type='file'
      name='groupPicture'
      accept='image/*'
      :class='{error: $v.form.groupPicture.$error}'
      @change='fileChange($event.target.files)'
      placeholder='http://'
      data-test='groupPicture'
    )

  i18n.error(v-if='$v.form.groupPicture.$error' tag='p') The group picture must be a valid url

  .card
    label.field
      .c-label-container
        i18n.label What is the name of your group?
        char-length-indicator(
          v-if='group.groupName'
          :current-length='group.groupName.length || 0'
          :max='config.nameMaxChar'
          :error='$v.form.groupName.$error'
        )

      input.input.is-large.is-primary(
        ref='name'
        type='text'
        name='groupName'
        :maxlength='config.nameMaxChar'
        :class='{ error: $v.form.groupName.$error }'
        :value='group.groupName'
        @input='updateName'
        @keyup.enter='next'
        data-test='groupName'
        v-error:groupName=''
      )

    slot
</template>

<script>
import sbp from '@sbp/sbp'
import Avatar from '../../../../frontend/views/components/Avatar.vue'
import CharLengthIndicator from '../../../../frontend/views/components/CharLengthIndicator.vue'
import { OPEN_MODAL, AVATAR_EDITED } from '../../../../frontend/utils/events.js'
import { imageDataURItoBlob } from '../../../../frontend/utils/image.js'
import { GROUP_NAME_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'GroupName',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data () {
    return {
      config: {
        nameMaxChar: GROUP_NAME_MAX_CHAR
      }
    }
  },
  inject: ['$assistant'],
  components: {
    Avatar,
    CharLengthIndicator
  },
  watch: {
    'groupInitials': function (initials) {
      this.updatePictureCanvas(initials)
    }
  },
  beforeMount () {
    sbp('okTurtles.events/on', AVATAR_EDITED, this.updateGroupPictureByEditor)
  },
  mounted () {
    window.setTimeout(() => {
      // An arbitrary delay here is to fix the issue #2020.
      // See the PR description here for the details: https://github.com/okTurtles/group-income/pull/2036#issue-2332505747
      this.$refs.name.focus()
    }, 300)

    const c = this.$refs.pictureCanvas
    c.width = 256
    c.height = 256

    // Recover the saved picture, in case user is coming back to this step.
    if (this.$assistant.ephemeral.groupPictureType === 'image') {
      this.$refs.pictureAvatar.setFromBlob(this.$assistant.ephemeral.groupPictureFile)
    } else {
      this.updatePictureCanvas(this.groupInitials)
    }
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', AVATAR_EDITED, this.updateGroupPictureByEditor)

    if (this.$assistant.ephemeral.groupPictureType !== 'image') {
      const pictureBase64 = this.$refs.pictureCanvas.toDataURL('image/png')
      this.$v.form.groupPicture.$touch()
      this.$assistant.ephemeral.groupPictureFile = imageDataURItoBlob(pictureBase64)
      this.$assistant.ephemeral.groupPictureType = 'canvas'
    }
  },
  computed: {
    groupInitials () {
      const intialsCombined = str => str.split(/\\s+/) // 1. Split the groupname by white-space.
        .map(segment => segment.match(/\\b\\w/)?.[0] || '') // 2. Extract intial from each segment.
        .join('').toUpperCase() // 3. Combine them & uppercase it.

      return this.group.groupName
        ? intialsCombined(this.group.groupName).slice(0, 2) ?? ''
        : ''
    }
  },
  methods: {
    updatePictureCanvas (initials) {
      const c = this.$refs.pictureCanvas
      const ctx = c.getContext('2d')
      ctx.rect(0, 0, 256, 256)
      ctx.fillStyle = '#7a7a7a'
      ctx.fill()

      ctx.font = '140px Lato'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText(initials, 256 / 2, 180)
    },
    updateName (e) {
      this.$v.form.groupName.$touch()
      this.$emit('input', {
        data: {
          groupName: e.target.value
        }
      })
    },
    updateGroupPictureByEditor ({ blob }) {
      this.$v.form.groupPicture.$touch()
      this.$assistant.ephemeral.groupPictureFile = blob
      this.$refs.pictureAvatar.setFromBlob(blob)
      this.$assistant.ephemeral.groupPictureType = 'image'
    },
    next (e) {
      this.$v.form[e.target.name].$touch()
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit('next')
      }
    },
    fileChange (files) {
      if (!files.length) return

      const imageUrl = URL.createObjectURL(files[0])
      sbp('okTurtles.events/emit', OPEN_MODAL, 'AvatarEditorModal', { imageUrl })
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.avatar {
  height: 10rem;
  margin: 2.5rem auto 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .link {
    display: inline-block;
    margin-top: 0.5rem;
  }
}

.c-pictureCanvas {
  position: absolute;
  background: $text_1;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  &.isHidden {
    opacity: 0;
    pointer-events: none;
  }
}

.groupPictureInput {
  position: absolute;
  opacity: 0;
}

.c-label-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
var GroupName_default = __vue_component__;

// frontend/views/components/group-creation-steps/GroupPurpose.vue
var __vue_script__2 = {
  name: "GroupPurpose",
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  mounted() {
    this.$refs.purpose.focus();
  },
  data() {
    return {
      config: {
        maxChar: GROUP_DESCRIPTION_MAX_CHAR
      }
    };
  },
  computed: {
    isFieldError() {
      return this.$v.form.sharedValues.$error;
    },
    charLen() {
      const len = this.group.sharedValues?.length || 0;
      return `${len}/${GROUP_DESCRIPTION_MAX_CHAR}`;
    }
  },
  methods: {
    update(e) {
      this.$v.form.sharedValues.$touch();
      this.$emit("input", {
        data: {
          sharedValues: e.target.value
        }
      });
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "i18n",
        { staticClass: "is-title-4 steps-title", attrs: { tag: "h4" } },
        [_vm._v("2. Group Purpose")]
      ),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c(
            "label",
            { staticClass: "field c-label" },
            [
              _c(
                "div",
                { staticClass: "c-label-container" },
                [
                  _c("i18n", { staticClass: "label" }, [
                    _vm._v("How would you describe your group?")
                  ]),
                  _c(
                    "span",
                    {
                      staticClass: "c-char-len",
                      class: { "is-error": _vm.isFieldError }
                    },
                    [_vm._v(_vm._s(_vm.charLen))]
                  )
                ],
                1
              ),
              _c("textarea", {
                directives: [
                  {
                    name: "error",
                    rawName: "v-error:sharedValues",
                    arg: "sharedValues"
                  }
                ],
                ref: "purpose",
                staticClass: "textarea c-textarea",
                class: { error: _vm.isFieldError },
                attrs: {
                  name: "sharedValues",
                  placeholder: _vm.L("Group Purpose"),
                  maxlength: _vm.config.maxChar
                },
                domProps: { value: _vm.group.sharedValues },
                on: { input: _vm.update }
              }),
              !_vm.isFieldError ? _c("i18n", { staticClass: "helper" }, [
                _vm._v("This is optional.")
              ]) : _vm._e()
            ],
            1
          ),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject) return;
  inject("data-v-7fd06788_0", { source: ".c-label-container[data-v-7fd06788] {\n  position: relative;\n  display: flex;\n  column-gap: 0.5rem;\n  align-items: flex-end;\n}\n.c-label-container .label[data-v-7fd06788] {\n  flex-grow: 1;\n}\n.c-label-container .c-char-len[data-v-7fd06788] {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len.is-error[data-v-7fd06788] {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=GroupPurpose.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/group-creation-steps/GroupPurpose.vue", "GroupPurpose.vue"], "names": [], "mappings": "AAsEA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,qBAAA;ACrEA;ADuEA;EACA,YAAA;ACrEA;ADwEA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,uBAAA;ACtEA;ADwEA;EACA,sBAAA;ACtEA;;AAEA,2CAA2C", "file": "GroupPurpose.vue", "sourcesContent": [`<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 2. Group Purpose

  .card
    label.field.c-label
      .c-label-container
        i18n.label How would you describe your group?
        span.c-char-len(:class='{ "is-error": isFieldError }') {{ charLen }}

      textarea.textarea.c-textarea(
        name='sharedValues'
        ref='purpose'
        :placeholder='L("Group Purpose")'
        :maxlength='config.maxChar'
        :class='{ error: isFieldError }'
        :value='group.sharedValues'
        v-error:sharedValues=''
        @input='update'
      )

      i18n.helper(v-if='!isFieldError') This is optional.

    slot
</template>

<script>
import { GROUP_DESCRIPTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'GroupPurpose',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  mounted () {
    this.$refs.purpose.focus()
  },
  data () {
    return {
      config: {
        maxChar: GROUP_DESCRIPTION_MAX_CHAR
      }
    }
  },
  computed: {
    isFieldError () {
      return this.$v.form.sharedValues.$error
    },
    charLen () {
      const len = this.group.sharedValues?.length || 0
      return \`\${len}/\${GROUP_DESCRIPTION_MAX_CHAR}\`
    }
  },
  methods: {
    update (e) {
      this.$v.form.sharedValues.$touch()
      this.$emit('input', {
        data: {
          sharedValues: e.target.value
        }
      })
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-label-container {
  position: relative;
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  .label {
    flex-grow: 1;
  }

  .c-char-len {
    display: inline-block;
    line-height: $size_4;
    font-size: $size_5;
    color: $text_1;
    flex-shrink: 0;
    margin-bottom: 0.625rem;

    &.is-error {
      color: $danger_0;
    }
  }
}
</style>
`, ".c-label-container {\n  position: relative;\n  display: flex;\n  column-gap: 0.5rem;\n  align-items: flex-end;\n}\n.c-label-container .label {\n  flex-grow: 1;\n}\n.c-label-container .c-char-len {\n  display: inline-block;\n  line-height: 0.875rem;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  flex-shrink: 0;\n  margin-bottom: 0.625rem;\n}\n.c-label-container .c-char-len.is-error {\n  color: var(--danger_0);\n}\n\n/*# sourceMappingURL=GroupPurpose.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-7fd06788";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 2. Group Purpose

  .card
    label.field.c-label
      .c-label-container
        i18n.label How would you describe your group?
        span.c-char-len(:class='{ "is-error": isFieldError }') {{ charLen }}

      textarea.textarea.c-textarea(
        name='sharedValues'
        ref='purpose'
        :placeholder='L("Group Purpose")'
        :maxlength='config.maxChar'
        :class='{ error: isFieldError }'
        :value='group.sharedValues'
        v-error:sharedValues=''
        @input='update'
      )

      i18n.helper(v-if='!isFieldError') This is optional.

    slot
</template>

<script>
import { GROUP_DESCRIPTION_MAX_CHAR } from '../../../../frontend/model/contracts/shared/constants.js'

export default ({
  name: 'GroupPurpose',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  mounted () {
    this.$refs.purpose.focus()
  },
  data () {
    return {
      config: {
        maxChar: GROUP_DESCRIPTION_MAX_CHAR
      }
    }
  },
  computed: {
    isFieldError () {
      return this.$v.form.sharedValues.$error
    },
    charLen () {
      const len = this.group.sharedValues?.length || 0
      return \`\${len}/\${GROUP_DESCRIPTION_MAX_CHAR}\`
    }
  },
  methods: {
    update (e) {
      this.$v.form.sharedValues.$touch()
      this.$emit('input', {
        data: {
          sharedValues: e.target.value
        }
      })
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-label-container {
  position: relative;
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  .label {
    flex-grow: 1;
  }

  .c-char-len {
    display: inline-block;
    line-height: $size_4;
    font-size: $size_5;
    color: $text_1;
    flex-shrink: 0;
    margin-bottom: 0.625rem;

    &.is-error {
      color: $danger_0;
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
var GroupPurpose_default = __vue_component__2;

// frontend/views/components/group-creation-steps/GroupMincome.vue
var __vue_script__3 = {
  name: "GroupMincome",
  components: {
    Tooltip: Tooltip_default
  },
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data() {
    return {
      currencies: currencies_default,
      ephemeral: {
        distributionDayRange: []
      }
    };
  },
  beforeMount() {
    for (let index = 1; index <= 30; index++) {
      this.ephemeral.distributionDayRange.push(dateToPeriodStamp(addTimeToDate((/* @__PURE__ */ new Date()).setUTCHours(0, 0, 0, 0), index * DAYS_MILLIS)));
    }
  },
  mounted() {
    this.$refs.mincome.focus();
  },
  methods: {
    humanDate,
    update(e) {
      this.$v.form[e.target.name].$touch();
      this.$emit("input", {
        data: {
          [e.target.name]: e.target.value
        }
      });
    },
    next(e) {
      this.$v.form[e.target.name].$touch();
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit("next");
      }
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "i18n",
        { staticClass: "is-title-4 steps-title", attrs: { tag: "h4" } },
        [_vm._v("3. Minimum Income")]
      ),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c(
            "fieldset",
            { staticClass: "field" },
            [
              _c("i18n", { staticClass: "label" }, [
                _vm._v(
                  "What is the minimum monthly income this group is trying to ensure for its members?"
                )
              ]),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "error",
                      rawName: "v-error:mincomeAmount",
                      arg: "mincomeAmount"
                    }
                  ],
                  staticClass: "selectgroup",
                  class: { error: _vm.$v.form.mincomeAmount.$error }
                },
                [
                  _c("input", {
                    ref: "mincome",
                    staticClass: "input",
                    attrs: {
                      inputmode: "decimal",
                      pattern: "[0-9]*",
                      placeholder: "Amount",
                      "aria-label": _vm.L("Amount"),
                      name: "mincomeAmount",
                      step: "1",
                      min: "0",
                      required: ""
                    },
                    domProps: { value: _vm.group.mincomeAmount },
                    on: {
                      input: _vm.update,
                      keyup: function($event) {
                        if (!$event.type.indexOf("key") && _vm._k(
                          $event.keyCode,
                          "enter",
                          13,
                          $event.key,
                          "Enter"
                        )) {
                          return null;
                        }
                        return _vm.next($event);
                      }
                    }
                  }),
                  _c(
                    "select",
                    {
                      staticClass: "select",
                      attrs: {
                        "aria-label": _vm.L("Currency"),
                        name: "mincomeCurrency",
                        required: ""
                      },
                      domProps: { value: _vm.group.mincomeCurrency },
                      on: { input: _vm.update }
                    },
                    _vm._l(_vm.currencies, function(currency, code) {
                      return _c(
                        "option",
                        { key: code, domProps: { value: code } },
                        [_vm._v(_vm._s(currency.symbolWithCode))]
                      );
                    }),
                    0
                  )
                ]
              ),
              _c("i18n", { staticClass: "helper" }, [
                _vm._v("This value can be adjusted in the future.")
              ])
            ],
            1
          ),
          _c(
            "fieldset",
            { staticClass: "field" },
            [
              _c(
                "div",
                { staticClass: "label c-label-tooltip" },
                [
                  _c("i18n", [
                    _vm._v(
                      "On what day should the first payment distribution be calculated?"
                    )
                  ]),
                  _c(
                    "tooltip",
                    { attrs: { direction: "bottom-right" } },
                    [
                      _c("span", { staticClass: "button is-icon-small" }, [
                        _c("i", { staticClass: "icon-question-circle" })
                      ]),
                      _c(
                        "template",
                        { slot: "tooltip" },
                        [
                          _c("i18n", { attrs: { tag: "p" } }, [
                            _vm._v(
                              "Select which day of the month the distribution should be calculated. Every group member will need to update their mincome details before this date to ensure that the algorithm can fairly distribute available funds between group members."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _c("div", { staticClass: "selectbox" }, [
                _c(
                  "select",
                  {
                    staticClass: "select",
                    attrs: {
                      "aria-label": _vm.L(
                        "Choose your group's distribution date"
                      ),
                      name: "distributionDate",
                      required: ""
                    },
                    domProps: { value: _vm.group.distributionDate },
                    on: { change: _vm.update }
                  },
                  [
                    _c(
                      "i18n",
                      {
                        attrs: {
                          tag: "option",
                          disabled: "disabled",
                          value: ""
                        }
                      },
                      [_vm._v("Choose your group's distribution date")]
                    ),
                    _vm._l(
                      _vm.ephemeral.distributionDayRange,
                      function(item, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: item } },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.humanDate(item, {
                                  month: "long",
                                  year: "numeric",
                                  day: "numeric"
                                })
                              )
                            )
                          ]
                        );
                      }
                    )
                  ],
                  2
                )
              ]),
              _c("i18n", { staticClass: "helper" }, [
                _vm._v(
                  "Payment distribution will be calculated every 30 days."
                )
              ])
            ],
            1
          ),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject) return;
  inject("data-v-01c9ec7c_0", { source: ".c-label-tooltip[data-v-01c9ec7c] {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupMincome.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/group-creation-steps/GroupMincome.vue", "GroupMincome.vue"], "names": [], "mappings": "AAuHA;EACA,aAAA;EACA,8BAAA;ACtHA;;AAEA,2CAA2C", "file": "GroupMincome.vue", "sourcesContent": [`<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 3. Minimum Income

  .card
    fieldset.field
      i18n.label What is the minimum monthly income this group is trying to ensure for its members?
      .selectgroup(
        :class='{ error: $v.form.mincomeAmount.$error }'
        v-error:mincomeAmount=''
      )
        input.input(
          ref='mincome'
          inputmode='decimal'
          pattern='[0-9]*'
          placeholder='Amount'
          :aria-label='L("Amount")'
          name='mincomeAmount'
          step='1'
          min='0'
          required=''
          :value='group.mincomeAmount'
          @input='update'
          @keyup.enter='next'
        )
        select.select(
          :aria-label='L("Currency")'
          name='mincomeCurrency'
          required=''
          :value='group.mincomeCurrency'
          @input='update'
        )
          option(
            v-for='(currency, code) in currencies'
            :value='code'
            :key='code'
          ) {{ currency.symbolWithCode }}

      i18n.helper This value can be adjusted in the future.

    fieldset.field
      .label.c-label-tooltip
        i18n On what day should the first payment distribution be calculated?
        tooltip(direction='bottom-right')
          span.button.is-icon-small
            i.icon-question-circle
          template(slot='tooltip')
            i18n(tag='p') Select which day of the month the distribution should be calculated. Every group member will need to update their mincome details before this date to ensure that the algorithm can fairly distribute available funds between group members.

      .selectbox
        select.select(
          :aria-label='L("Choose your group\\'s distribution date")'
          name='distributionDate'
          required=''
          :value='group.distributionDate'
          @change='update'
        )
          i18n(tag='option' disabled value='') Choose your group's distribution date
          option(
            v-for='(item, index) in ephemeral.distributionDayRange'
            :key='index'
            :value='item'
          ) {{ humanDate(item, { month: 'long', year: 'numeric', day: 'numeric' }) }}

      i18n.helper Payment distribution will be calculated every 30 days.
    slot
</template>

<script>
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import currencies from '../../../../frontend/model/contracts/shared/currencies.js'
import { dateToPeriodStamp, addTimeToDate, DAYS_MILLIS, humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'GroupMincome',
  components: {
    Tooltip
  },
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data () {
    return {
      currencies,
      ephemeral: {
        distributionDayRange: []
      }
    }
  },
  beforeMount () {
    for (let index = 1; index <= 30; index++) {
      this.ephemeral.distributionDayRange.push(dateToPeriodStamp(addTimeToDate(new Date().setUTCHours(0, 0, 0, 0), index * DAYS_MILLIS)))
    }
  },
  mounted () {
    this.$refs.mincome.focus()
  },
  methods: {
    humanDate,
    update (e) {
      this.$v.form[e.target.name].$touch()
      this.$emit('input', {
        data: {
          [e.target.name]: e.target.value
        }
      })
    },
    next (e) {
      this.$v.form[e.target.name].$touch()
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit('next')
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-label-tooltip {
  display: flex;
  justify-content: space-between;
}
</style>
`, ".c-label-tooltip {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=GroupMincome.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-01c9ec7c";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.wrapper
  i18n.is-title-4.steps-title(tag='h4') 3. Minimum Income

  .card
    fieldset.field
      i18n.label What is the minimum monthly income this group is trying to ensure for its members?
      .selectgroup(
        :class='{ error: $v.form.mincomeAmount.$error }'
        v-error:mincomeAmount=''
      )
        input.input(
          ref='mincome'
          inputmode='decimal'
          pattern='[0-9]*'
          placeholder='Amount'
          :aria-label='L("Amount")'
          name='mincomeAmount'
          step='1'
          min='0'
          required=''
          :value='group.mincomeAmount'
          @input='update'
          @keyup.enter='next'
        )
        select.select(
          :aria-label='L("Currency")'
          name='mincomeCurrency'
          required=''
          :value='group.mincomeCurrency'
          @input='update'
        )
          option(
            v-for='(currency, code) in currencies'
            :value='code'
            :key='code'
          ) {{ currency.symbolWithCode }}

      i18n.helper This value can be adjusted in the future.

    fieldset.field
      .label.c-label-tooltip
        i18n On what day should the first payment distribution be calculated?
        tooltip(direction='bottom-right')
          span.button.is-icon-small
            i.icon-question-circle
          template(slot='tooltip')
            i18n(tag='p') Select which day of the month the distribution should be calculated. Every group member will need to update their mincome details before this date to ensure that the algorithm can fairly distribute available funds between group members.

      .selectbox
        select.select(
          :aria-label='L("Choose your group\\'s distribution date")'
          name='distributionDate'
          required=''
          :value='group.distributionDate'
          @change='update'
        )
          i18n(tag='option' disabled value='') Choose your group's distribution date
          option(
            v-for='(item, index) in ephemeral.distributionDayRange'
            :key='index'
            :value='item'
          ) {{ humanDate(item, { month: 'long', year: 'numeric', day: 'numeric' }) }}

      i18n.helper Payment distribution will be calculated every 30 days.
    slot
</template>

<script>
import Tooltip from '../../../../frontend/views/components/Tooltip.vue'
import currencies from '../../../../frontend/model/contracts/shared/currencies.js'
import { dateToPeriodStamp, addTimeToDate, DAYS_MILLIS, humanDate } from '../../../../frontend/model/contracts/shared/time.js'

export default ({
  name: 'GroupMincome',
  components: {
    Tooltip
  },
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  data () {
    return {
      currencies,
      ephemeral: {
        distributionDayRange: []
      }
    }
  },
  beforeMount () {
    for (let index = 1; index <= 30; index++) {
      this.ephemeral.distributionDayRange.push(dateToPeriodStamp(addTimeToDate(new Date().setUTCHours(0, 0, 0, 0), index * DAYS_MILLIS)))
    }
  },
  mounted () {
    this.$refs.mincome.focus()
  },
  methods: {
    humanDate,
    update (e) {
      this.$v.form[e.target.name].$touch()
      this.$emit('input', {
        data: {
          [e.target.name]: e.target.value
        }
      })
    },
    next (e) {
      this.$v.form[e.target.name].$touch()
      if (!this.$v.form[e.target.name].$invalid) {
        this.$emit('next')
      }
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
.c-label-tooltip {
  display: flex;
  justify-content: space-between;
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
var GroupMincome_default = __vue_component__3;

// frontend/views/components/group-creation-steps/GroupRules.vue
var __vue_script__4 = {
  name: "GroupRules",
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  components: {
    TransitionExpand: TransitionExpand_default,
    VotingRulesInput: VotingRulesInput_default
  },
  methods: {
    setThreshold(threshold) {
      this.$v.form.ruleThreshold.$touch();
      this.$emit("input", {
        data: {
          ruleThreshold: threshold
        }
      });
    }
  }
};
var __vue_render__4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrapper", attrs: { "data-test": "rulesStep" } },
    [
      _c(
        "i18n",
        { staticClass: "is-title-4 steps-title", attrs: { tag: "h4" } },
        [_vm._v("4. Voting System")]
      ),
      _c(
        "div",
        { staticClass: "card c-card" },
        [
          _c(
            "fieldset",
            { staticClass: "c-step" },
            [
              _c(
                "i18n",
                { staticClass: "has-text-bold", attrs: { tag: "legend" } },
                [_vm._v("Voting on proposals")]
              ),
              _c(
                "i18n",
                { staticClass: "has-text-1 c-desc", attrs: { tag: "p" } },
                [
                  _vm._v(
                    "Proposals are how the group makes decisions. You can propose for example, to add or remove members, or to change your group\u2019s mincome value."
                  )
                ]
              ),
              _c("voting-rules-input", {
                staticClass: "c-input",
                attrs: {
                  rule: _vm.group.ruleName,
                  value: _vm.group.ruleThreshold
                },
                on: { update: _vm.setThreshold }
              })
            ],
            1
          ),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__4 = [];
__vue_render__4._withStripped = true;
var __vue_inject_styles__4 = function(inject) {
  if (!inject) return;
  inject("data-v-2748982a_0", { source: ".c-card[data-v-2748982a] {\n  padding: 1.5rem 1rem 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n.c-card[data-v-2748982a] {\n    padding: 1.5rem 1.5rem 2.5rem;\n}\n}\n@media screen and (min-width: 1200px) {\n.c-card[data-v-2748982a] {\n    padding: 2.5rem;\n}\n}\n.c-step[data-v-2748982a] {\n  margin-bottom: 2rem;\n}\n.c-desc[data-v-2748982a] {\n  margin-top: 0.25rem;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=GroupRules.vue.map */", map: { "version": 3, "sources": ["frontend/views/components/group-creation-steps/GroupRules.vue", "GroupRules.vue"], "names": [], "mappings": "AA2CA;EACA,2BAAA;AC1CA;ADgDA;AAPA;IAIA,6BAAA;ACzCE;AACF;ADuDA;AAnBA;IAQA,eAAA;ACxCE;AACF;AD2CA;EACA,mBAAA;ACxCA;AD2CA;EACA,mBAAA;EACA,qBAAA;ACxCA;;AAEA,yCAAyC", "file": "GroupRules.vue", "sourcesContent": [`<template lang='pug'>
.wrapper(data-test='rulesStep')
  i18n.is-title-4.steps-title(tag='h4') 4. Voting System

  .card.c-card
    fieldset.c-step
      i18n.has-text-bold(tag='legend') Voting on proposals
      i18n.has-text-1.c-desc(tag='p') Proposals are how the group makes decisions. You can propose for example, to add or remove members, or to change your group\u2019s mincome value.

      voting-rules-input.c-input(:rule='group.ruleName' :value='group.ruleThreshold' @update='setThreshold')
    slot
</template>

<script>
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'
import VotingRulesInput from '../../../../frontend/views/components/VotingRulesInput.vue'

export default ({
  name: 'GroupRules',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  components: {
    TransitionExpand,
    VotingRulesInput
  },
  methods: {
    setThreshold (threshold) {
      this.$v.form.ruleThreshold.$touch()
      this.$emit('input', {
        data: {
          ruleThreshold: threshold
        }
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-card {
  padding: 1.5rem 1rem 2.5rem;

  @include tablet {
    padding: 1.5rem 1.5rem 2.5rem;
  }

  @include desktop {
    padding: 2.5rem;
  }
}

.c-step {
  margin-bottom: 2rem;
}

.c-desc {
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
}
</style>
`, ".c-card {\n  padding: 1.5rem 1rem 2.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .c-card {\n    padding: 1.5rem 1.5rem 2.5rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .c-card {\n    padding: 2.5rem;\n  }\n}\n\n.c-step {\n  margin-bottom: 2rem;\n}\n\n.c-desc {\n  margin-top: 0.25rem;\n  margin-bottom: 1.5rem;\n}\n\n/*# sourceMappingURL=GroupRules.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__4 = "data-v-2748982a";
var __vue_module_identifier__4 = void 0;
var __vue_is_functional_template__4 = false;
function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
.wrapper(data-test='rulesStep')
  i18n.is-title-4.steps-title(tag='h4') 4. Voting System

  .card.c-card
    fieldset.c-step
      i18n.has-text-bold(tag='legend') Voting on proposals
      i18n.has-text-1.c-desc(tag='p') Proposals are how the group makes decisions. You can propose for example, to add or remove members, or to change your group\u2019s mincome value.

      voting-rules-input.c-input(:rule='group.ruleName' :value='group.ruleThreshold' @update='setThreshold')
    slot
</template>

<script>
import TransitionExpand from '../../../../frontend/views/components/TransitionExpand.vue'
import VotingRulesInput from '../../../../frontend/views/components/VotingRulesInput.vue'

export default ({
  name: 'GroupRules',
  props: {
    group: { type: Object },
    $v: { type: Object }
  },
  components: {
    TransitionExpand,
    VotingRulesInput
  },
  methods: {
    setThreshold (threshold) {
      this.$v.form.ruleThreshold.$touch()
      this.$emit('input', {
        data: {
          ruleThreshold: threshold
        }
      })
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.c-card {
  padding: 1.5rem 1rem 2.5rem;

  @include tablet {
    padding: 1.5rem 1.5rem 2.5rem;
  }

  @include desktop {
    padding: 2.5rem;
  }
}

.c-step {
  margin-bottom: 2rem;
}

.c-desc {
  margin-top: 0.25rem;
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
var GroupRules_default = __vue_component__4;

// frontend/views/components/group-creation-steps/GroupPrivacy.vue
var __vue_script__5 = {
  name: "GroupPrivacy",
  props: {
    group: { type: Object }
  },
  mounted() {
    this.$emit("focusref", "next");
  }
};
var __vue_render__5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c(
      "h1",
      { staticClass: "is-title-1", attrs: { "data-test": "privacyStep" } },
      [_c("i18n", [_vm._v("Privacy Settings")])],
      1
    ),
    _c(
      "p",
      [
        _c("i18n", [
          _vm._v(
            "This step is to be designed. What group privacy settings would you feel more comfortable having control over? Let us know at dunno@groupincome.org!"
          )
        ])
      ],
      1
    )
  ]);
};
var __vue_staticRenderFns__5 = [];
__vue_render__5._withStripped = true;
var __vue_inject_styles__5 = void 0;
var __vue_scope_id__5 = void 0;
var __vue_module_identifier__5 = void 0;
var __vue_is_functional_template__5 = false;
function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\ndiv\n  h1.is-title-1(data-test='privacyStep')\n    i18n Privacy Settings\n\n  p\n    i18n\n      | This step is to be designed. What group privacy settings would you feel more comfortable having control over? Let us know at dunno@groupincome.org!\n</template>\n\n<script>\nexport default ({\n  name: 'GroupPrivacy',\n  props: {\n    group: { type: Object }\n  },\n  mounted () {\n    this.$emit('focusref', 'next')\n  }\n}: Object)\n<\/script>\n";
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
var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5(
  { render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 },
  __vue_inject_styles__5,
  __vue_script__5,
  __vue_scope_id__5,
  __vue_is_functional_template__5,
  __vue_module_identifier__5,
  false,
  void 0,
  void 0,
  void 0
);
var GroupPrivacy_default = __vue_component__5;

// frontend/views/containers/group-settings/GroupCreationModal.vue
var import_validators = __toESM(require_validators());
var __vue_script__6 = {
  name: "GroupCreationModal",
  mixins: [
    stepAssistant_default,
    import_vuelidate.validationMixin
  ],
  components: {
    ModalBaseTemplate: ModalBaseTemplate_default,
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default,
    GroupName: GroupName_default,
    GroupPurpose: GroupPurpose_default,
    GroupMincome: GroupMincome_default,
    GroupRules: GroupRules_default,
    GroupPrivacy: GroupPrivacy_default
  },
  methods: {
    focusRef(ref) {
      this.$refs[ref].focus();
    },
    updateGroupData(payload) {
      this.$refs.formMsg && this.$refs.formMsg.clean();
      Object.assign(this.form, payload.data);
    },
    async submit() {
      if (this.$v.form.$invalid) {
        this.$refs.formMsg.danger(L("Some information is invalid, please review it and try again."));
        return;
      }
      try {
        this.$refs.formMsg.clean();
        await esm_default("gi.app/group/createAndSwitch", {
          data: {
            name: this.form.groupName,
            picture: this.ephemeral.groupPictureFile,
            sharedValues: this.form.sharedValues,
            mincomeAmount: normalizeCurrency(this.form.mincomeAmount),
            mincomeCurrency: this.form.mincomeCurrency,
            ruleName: this.form.ruleName,
            ruleThreshold: this.form.ruleThreshold,
            distributionDate: this.form.distributionDate
          }
        });
        this.$router.push({
          path: "/pending-approval",
          // NOTE: during a series of consecutive async steps of group-creation, error can occur that leads to displaying 'Prompt.vue' pop-up.
          //       in that case, leave that pop-up open. (reference: https://github.com/okTurtles/group-income/pull/2091)
          query: this.$route.query?.modal === "Prompt" ? this.$route.query : void 0
        });
      } catch (e) {
        console.error("CreateGroup.vue submit() error:", e);
        this.$refs.formMsg.danger(e.message);
      }
    }
  },
  data() {
    const proposalsSettings = proposals_default[PROPOSAL_GENERIC].defaults.ruleSettings;
    return {
      form: {
        groupName: "",
        groupPicture: "",
        sharedValues: "",
        mincomeAmount: "",
        mincomeCurrency: "USD",
        distributionDate: dateToPeriodStamp(addTimeToDate((/* @__PURE__ */ new Date()).setUTCHours(0, 0, 0, 0), 3 * DAYS_MILLIS)),
        ruleName: RULE_PERCENTAGE,
        ruleThreshold: proposalsSettings[RULE_PERCENTAGE].threshold
      },
      ephemeral: {
        groupPictureFile: "",
        // passed by GroupName.vue
        groupPictureType: null
        // 'canvas' || 'image'
      },
      config: {
        steps: [
          "GroupName",
          "GroupPurpose",
          "GroupMincome",
          "GroupRules"
        ]
      }
    };
  },
  mounted() {
    if (this.currentStep !== 0 && !this.form.groupName) {
      this.redirect("GroupName");
    }
  },
  validations: {
    form: {
      groupName: {
        [L("Group name is required")]: import_validators.required,
        [L("Group name cannot exceed {maxchar} characters", { maxchar: GROUP_NAME_MAX_CHAR })]: (0, import_validators.maxLength)(GROUP_NAME_MAX_CHAR)
      },
      groupPicture: {},
      sharedValues: {
        [L("Group purpose cannot exceed {maxchar} characters", { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: (0, import_validators.maxLength)(GROUP_DESCRIPTION_MAX_CHAR)
      },
      mincomeAmount: {
        [L("This field is required")]: import_validators.required,
        [L("The amount must be a number. (E.g. 100.75)")]: function(value) {
          return currencies_default[this.form.mincomeCurrency].validate(value);
        },
        [L("Mincome must be greater than 0")]: mincomePositive,
        [L("Mincome cannot exceed {max}", { max: GROUP_MINCOME_MAX })]: (0, import_validators.maxValue)(GROUP_MINCOME_MAX)
      },
      mincomeCurrency: {
        required: import_validators.required
      },
      distributionDate: {
        required: import_validators.required
      },
      ruleThreshold: {
        required: import_validators.required,
        between: (0, import_validators.between)(0, 100)
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupName: [
        "form.groupName",
        "form.groupPicture"
      ],
      GroupPurpose: ["form.sharedValues"],
      GroupMincome: [
        "form.mincomeAmount",
        "form.mincomeCurrency"
      ],
      GroupRules: [
        "form.changeThreshold",
        "form.memberApprovalThreshold",
        "form.memberRemovalThreshold"
      ]
    }
  }
};
var __vue_render__6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "modal-base-template",
    {
      attrs: {
        "data-test": "groupCreationModal",
        fullscreen: true,
        a11yTitle: _vm.L("Create Group")
      }
    },
    [
      _vm.currentStep < _vm.config.steps.length ? _c(
        "div",
        { staticClass: "steps" },
        _vm._l(_vm.config.steps, function(step, index) {
          return _c(
            "button",
            {
              key: index,
              staticClass: "step",
              class: [
                _vm.currentStep === index ? "active" : "",
                _vm.currentStep < index ? "next" : ""
              ],
              on: {
                click: function($event) {
                  return _vm.redirect(step);
                }
              }
            },
            [_vm._v(_vm._s(index + 1))]
          );
        }),
        0
      ) : _vm._e(),
      _vm.currentStep < _vm.config.steps.length ? _c(
        "div",
        { staticClass: "wrapper mobile-steps subtitle" },
        [
          _c(
            "i18n",
            {
              staticClass: "is-subtitle",
              attrs: {
                args: {
                  current: _vm.currentStep + 1,
                  max: _vm.config.steps.length
                }
              }
            },
            [_vm._v("Step {current} of {max}")]
          )
        ],
        1
      ) : _vm._e(),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c(
            _vm.content,
            {
              tag: "component",
              attrs: { group: _vm.form, $v: _vm.$v },
              on: {
                next: _vm.next,
                focusref: _vm.focusRef,
                input: function(payload) {
                  return _vm.updateGroupData(payload);
                }
              }
            },
            [
              _c("banner-scoped", { ref: "formMsg", attrs: { allowA: true } }),
              _vm.currentStep < _vm.config.steps.length ? _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "is-outlined",
                      attrs: { "data-test": "prevBtn" },
                      on: { click: _vm.prev }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.currentStep === 0 ? _vm.L("Cancel") : _vm.L("Back")
                        )
                      )
                    ]
                  ),
                  _vm.currentStep + 1 < _vm.config.steps.length ? _c(
                    "button",
                    {
                      ref: "next",
                      staticClass: "is-primary",
                      attrs: {
                        disabled: _vm.$v.steps[_vm.content] && _vm.$v.steps[_vm.content].$invalid,
                        "data-test": "nextBtn"
                      },
                      on: { click: _vm.next }
                    },
                    [
                      _vm._v(_vm._s(_vm.L("Next"))),
                      _c("i", {
                        staticClass: "icon-arrow-right is-suffix"
                      })
                    ]
                  ) : _c(
                    "button-submit",
                    {
                      ref: "finish",
                      staticClass: "is-success",
                      attrs: { "data-test": "finishBtn" },
                      on: { click: _vm.submit }
                    },
                    [_vm._v(_vm._s(_vm.L("Create Group")))]
                  )
                ],
                1
              ) : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__6 = [];
__vue_render__6._withStripped = true;
var __vue_inject_styles__6 = function(inject) {
  if (!inject) return;
  inject("data-v-4321d3a1_0", { source: ".steps[data-v-4321d3a1] {\n  width: 100%;\n  max-width: 34rem;\n  margin-top: 3.5rem;\n  flex-shrink: 0;\n}\n.wrapper[data-v-4321d3a1] {\n  width: 100%;\n  max-width: 33rem;\n}\n\n/*# sourceMappingURL=GroupCreationModal.vue.map */", map: { "version": 3, "sources": ["frontend/views/containers/group-settings/GroupCreationModal.vue", "GroupCreationModal.vue"], "names": [], "mappings": "AAqOA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;ACpOA;ADuOA;EACA,WAAA;EACA,gBAAA;ACpOA;;AAEA,iDAAiD", "file": "GroupCreationModal.vue", "sourcesContent": [`<template lang='pug'>
modal-base-template(data-test='groupCreationModal' :fullscreen='true' :a11yTitle='L("Create Group")')
  .steps(v-if='currentStep < config.steps.length')
    button.step(
      v-for='(step, index) in config.steps'
      :key='index'
      :class='[currentStep === index ? "active" : "", currentStep < index ? "next" : ""]'
      @click='redirect(step)'
    ) {{ index + 1 }}

  .wrapper.mobile-steps.subtitle(v-if='currentStep < config.steps.length')
    i18n.is-subtitle(:args='{ current: currentStep + 1, max: config.steps.length }') Step {current} of {max}

  transition(name='fade' mode='out-in')
    component(
      :is='content'
      :group='form'
      :$v='$v'
      @next='next'
      @focusref='focusRef'
      @input='payload => updateGroupData(payload)'
    )

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons(v-if='currentStep < config.steps.length')
        button.is-outlined(
          @click='prev'
          data-test='prevBtn'
        ) {{ currentStep === 0 ? L('Cancel') : L('Back') }}

        button.is-primary(
          v-if='currentStep + 1 < config.steps.length'
          ref='next'
          @click='next'
          :disabled='$v.steps[content] && $v.steps[content].$invalid'
          data-test='nextBtn'
        )
          | {{ L('Next') }}
          i.icon-arrow-right.is-suffix

        button-submit.is-success(
          v-else=''
          ref='finish'
          @click='submit'
          data-test='finishBtn'
        ) {{ L('Create Group') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { RULE_PERCENTAGE } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import proposals from '../../../../frontend/model/contracts/shared/voting/proposals.js'
import {
  PROPOSAL_GENERIC,
  GROUP_NAME_MAX_CHAR,
  GROUP_DESCRIPTION_MAX_CHAR,
  GROUP_MINCOME_MAX
} from '../../../../frontend/model/contracts/shared/constants.js'
import currencies, { mincomePositive, normalizeCurrency } from '../../../../frontend/model/contracts/shared/currencies.js'
import { L } from '../../../../frontend/common/common.js'
import { dateToPeriodStamp, addTimeToDate, DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import StepAssistant from '../../../../frontend/views/utils/stepAssistant.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import {
  GroupName,
  GroupPurpose,
  GroupMincome,
  GroupRules,
  GroupPrivacy
} from '../../../../frontend/views/components/group-creation-steps/index.js'

// we use require instead of import with this file to make rollup happy
// or not... using require only makes rollup happy during compilation
// but then the browser complains about "require is not defined"
import { required, between, maxLength, maxValue } from 'vuelidate/lib/validators'

export default ({
  name: 'GroupCreationModal',
  mixins: [
    StepAssistant,
    validationMixin
  ],
  components: {
    ModalBaseTemplate,
    BannerScoped,
    ButtonSubmit,
    GroupName,
    GroupPurpose,
    GroupMincome,
    GroupRules,
    GroupPrivacy
  },
  methods: {
    focusRef (ref) {
      this.$refs[ref].focus()
    },
    updateGroupData (payload) {
      this.$refs.formMsg && this.$refs.formMsg.clean() // It doesn't exist when changing to Welcome step.
      Object.assign(this.form, payload.data)
    },
    async submit () {
      if (this.$v.form.$invalid) {
        // TODO: more descriptive error message. Perhaps highlight error step
        this.$refs.formMsg.danger(L('Some information is invalid, please review it and try again.'))
        return
      }

      try {
        this.$refs.formMsg.clean()

        await sbp('gi.app/group/createAndSwitch', {
          data: {
            name: this.form.groupName,
            picture: this.ephemeral.groupPictureFile,
            sharedValues: this.form.sharedValues,
            mincomeAmount: normalizeCurrency(this.form.mincomeAmount),
            mincomeCurrency: this.form.mincomeCurrency,
            ruleName: this.form.ruleName,
            ruleThreshold: this.form.ruleThreshold,
            distributionDate: this.form.distributionDate
          }
        })

        this.$router.push({
          path: '/pending-approval',
          // NOTE: during a series of consecutive async steps of group-creation, error can occur that leads to displaying 'Prompt.vue' pop-up.
          //       in that case, leave that pop-up open. (reference: https://github.com/okTurtles/group-income/pull/2091)
          query: this.$route.query?.modal === 'Prompt'
            ? this.$route.query
            : undefined
        })
      } catch (e) {
        console.error('CreateGroup.vue submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  data () {
    // It's okay to use "PROPOSAL_GENERIC" as an example because all the settings are the same.
    const proposalsSettings = proposals[PROPOSAL_GENERIC].defaults.ruleSettings
    return {
      form: {
        groupName: '',
        groupPicture: '',
        sharedValues: '',
        mincomeAmount: '',
        mincomeCurrency: 'USD',
        distributionDate: dateToPeriodStamp(addTimeToDate(new Date().setUTCHours(0, 0, 0, 0), 3 * DAYS_MILLIS)),
        ruleName: RULE_PERCENTAGE,
        ruleThreshold: proposalsSettings[RULE_PERCENTAGE].threshold
      },
      ephemeral: {
        groupPictureFile: '', // passed by GroupName.vue
        groupPictureType: null // 'canvas' || 'image'
      },
      config: {
        steps: [
          'GroupName',
          'GroupPurpose',
          'GroupMincome',
          'GroupRules'
        ]
      }
    }
  },
  mounted () {
    if (this.currentStep !== 0 && !this.form.groupName) {
      // when the modal has been opened with the queried step not being the first one,
      // check if groupName has been set and redirect to the the first step if not.
      this.redirect('GroupName')
    }
  },
  validations: {
    form: {
      groupName: {
        [L('Group name is required')]: required,
        [L('Group name cannot exceed {maxchar} characters', { maxchar: GROUP_NAME_MAX_CHAR })]: maxLength(GROUP_NAME_MAX_CHAR)
      },
      groupPicture: { },
      sharedValues: {
        [L('Group purpose cannot exceed {maxchar} characters', { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: maxLength(GROUP_DESCRIPTION_MAX_CHAR)
      },
      mincomeAmount: {
        [L('This field is required')]: required,
        [L('The amount must be a number. (E.g. 100.75)')]: function (value) {
          return currencies[this.form.mincomeCurrency].validate(value)
        },
        [L('Mincome must be greater than 0')]: mincomePositive,
        [L('Mincome cannot exceed {max}', { max: GROUP_MINCOME_MAX })]: maxValue(GROUP_MINCOME_MAX)
      },
      mincomeCurrency: {
        required
      },
      distributionDate: {
        required
      },
      ruleThreshold: {
        required,
        between: between(0, 100)
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupName: [
        'form.groupName',
        'form.groupPicture'
      ],
      GroupPurpose: ['form.sharedValues'],
      GroupMincome: [
        'form.mincomeAmount',
        'form.mincomeCurrency'
      ],
      GroupRules: [
        'form.changeThreshold',
        'form.memberApprovalThreshold',
        'form.memberRemovalThreshold'
      ]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.steps {
  width: 100%;
  max-width: 34rem;
  margin-top: 3.5rem;
  flex-shrink: 0;
}

.wrapper {
  width: 100%;
  max-width: 33rem;
}
</style>
`, ".steps {\n  width: 100%;\n  max-width: 34rem;\n  margin-top: 3.5rem;\n  flex-shrink: 0;\n}\n\n.wrapper {\n  width: 100%;\n  max-width: 33rem;\n}\n\n/*# sourceMappingURL=GroupCreationModal.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__6 = "data-v-4321d3a1";
var __vue_module_identifier__6 = void 0;
var __vue_is_functional_template__6 = false;
function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
modal-base-template(data-test='groupCreationModal' :fullscreen='true' :a11yTitle='L("Create Group")')
  .steps(v-if='currentStep < config.steps.length')
    button.step(
      v-for='(step, index) in config.steps'
      :key='index'
      :class='[currentStep === index ? "active" : "", currentStep < index ? "next" : ""]'
      @click='redirect(step)'
    ) {{ index + 1 }}

  .wrapper.mobile-steps.subtitle(v-if='currentStep < config.steps.length')
    i18n.is-subtitle(:args='{ current: currentStep + 1, max: config.steps.length }') Step {current} of {max}

  transition(name='fade' mode='out-in')
    component(
      :is='content'
      :group='form'
      :$v='$v'
      @next='next'
      @focusref='focusRef'
      @input='payload => updateGroupData(payload)'
    )

      banner-scoped(ref='formMsg' :allowA='true')

      .buttons(v-if='currentStep < config.steps.length')
        button.is-outlined(
          @click='prev'
          data-test='prevBtn'
        ) {{ currentStep === 0 ? L('Cancel') : L('Back') }}

        button.is-primary(
          v-if='currentStep + 1 < config.steps.length'
          ref='next'
          @click='next'
          :disabled='$v.steps[content] && $v.steps[content].$invalid'
          data-test='nextBtn'
        )
          | {{ L('Next') }}
          i.icon-arrow-right.is-suffix

        button-submit.is-success(
          v-else=''
          ref='finish'
          @click='submit'
          data-test='finishBtn'
        ) {{ L('Create Group') }}
</template>

<script>
import sbp from '@sbp/sbp'
import { validationMixin } from 'vuelidate'
import ModalBaseTemplate from '../../../../frontend/views/components/modal/ModalBaseTemplate.vue'
import { RULE_PERCENTAGE } from '../../../../frontend/model/contracts/shared/voting/rules.js'
import proposals from '../../../../frontend/model/contracts/shared/voting/proposals.js'
import {
  PROPOSAL_GENERIC,
  GROUP_NAME_MAX_CHAR,
  GROUP_DESCRIPTION_MAX_CHAR,
  GROUP_MINCOME_MAX
} from '../../../../frontend/model/contracts/shared/constants.js'
import currencies, { mincomePositive, normalizeCurrency } from '../../../../frontend/model/contracts/shared/currencies.js'
import { L } from '../../../../frontend/common/common.js'
import { dateToPeriodStamp, addTimeToDate, DAYS_MILLIS } from '../../../../frontend/model/contracts/shared/time.js'
import StepAssistant from '../../../../frontend/views/utils/stepAssistant.js'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'
import {
  GroupName,
  GroupPurpose,
  GroupMincome,
  GroupRules,
  GroupPrivacy
} from '../../../../frontend/views/components/group-creation-steps/index.js'

// we use require instead of import with this file to make rollup happy
// or not... using require only makes rollup happy during compilation
// but then the browser complains about "require is not defined"
import { required, between, maxLength, maxValue } from 'vuelidate/lib/validators'

export default ({
  name: 'GroupCreationModal',
  mixins: [
    StepAssistant,
    validationMixin
  ],
  components: {
    ModalBaseTemplate,
    BannerScoped,
    ButtonSubmit,
    GroupName,
    GroupPurpose,
    GroupMincome,
    GroupRules,
    GroupPrivacy
  },
  methods: {
    focusRef (ref) {
      this.$refs[ref].focus()
    },
    updateGroupData (payload) {
      this.$refs.formMsg && this.$refs.formMsg.clean() // It doesn't exist when changing to Welcome step.
      Object.assign(this.form, payload.data)
    },
    async submit () {
      if (this.$v.form.$invalid) {
        // TODO: more descriptive error message. Perhaps highlight error step
        this.$refs.formMsg.danger(L('Some information is invalid, please review it and try again.'))
        return
      }

      try {
        this.$refs.formMsg.clean()

        await sbp('gi.app/group/createAndSwitch', {
          data: {
            name: this.form.groupName,
            picture: this.ephemeral.groupPictureFile,
            sharedValues: this.form.sharedValues,
            mincomeAmount: normalizeCurrency(this.form.mincomeAmount),
            mincomeCurrency: this.form.mincomeCurrency,
            ruleName: this.form.ruleName,
            ruleThreshold: this.form.ruleThreshold,
            distributionDate: this.form.distributionDate
          }
        })

        this.$router.push({
          path: '/pending-approval',
          // NOTE: during a series of consecutive async steps of group-creation, error can occur that leads to displaying 'Prompt.vue' pop-up.
          //       in that case, leave that pop-up open. (reference: https://github.com/okTurtles/group-income/pull/2091)
          query: this.$route.query?.modal === 'Prompt'
            ? this.$route.query
            : undefined
        })
      } catch (e) {
        console.error('CreateGroup.vue submit() error:', e)
        this.$refs.formMsg.danger(e.message)
      }
    }
  },
  data () {
    // It's okay to use "PROPOSAL_GENERIC" as an example because all the settings are the same.
    const proposalsSettings = proposals[PROPOSAL_GENERIC].defaults.ruleSettings
    return {
      form: {
        groupName: '',
        groupPicture: '',
        sharedValues: '',
        mincomeAmount: '',
        mincomeCurrency: 'USD',
        distributionDate: dateToPeriodStamp(addTimeToDate(new Date().setUTCHours(0, 0, 0, 0), 3 * DAYS_MILLIS)),
        ruleName: RULE_PERCENTAGE,
        ruleThreshold: proposalsSettings[RULE_PERCENTAGE].threshold
      },
      ephemeral: {
        groupPictureFile: '', // passed by GroupName.vue
        groupPictureType: null // 'canvas' || 'image'
      },
      config: {
        steps: [
          'GroupName',
          'GroupPurpose',
          'GroupMincome',
          'GroupRules'
        ]
      }
    }
  },
  mounted () {
    if (this.currentStep !== 0 && !this.form.groupName) {
      // when the modal has been opened with the queried step not being the first one,
      // check if groupName has been set and redirect to the the first step if not.
      this.redirect('GroupName')
    }
  },
  validations: {
    form: {
      groupName: {
        [L('Group name is required')]: required,
        [L('Group name cannot exceed {maxchar} characters', { maxchar: GROUP_NAME_MAX_CHAR })]: maxLength(GROUP_NAME_MAX_CHAR)
      },
      groupPicture: { },
      sharedValues: {
        [L('Group purpose cannot exceed {maxchar} characters', { maxchar: GROUP_DESCRIPTION_MAX_CHAR })]: maxLength(GROUP_DESCRIPTION_MAX_CHAR)
      },
      mincomeAmount: {
        [L('This field is required')]: required,
        [L('The amount must be a number. (E.g. 100.75)')]: function (value) {
          return currencies[this.form.mincomeCurrency].validate(value)
        },
        [L('Mincome must be greater than 0')]: mincomePositive,
        [L('Mincome cannot exceed {max}', { max: GROUP_MINCOME_MAX })]: maxValue(GROUP_MINCOME_MAX)
      },
      mincomeCurrency: {
        required
      },
      distributionDate: {
        required
      },
      ruleThreshold: {
        required,
        between: between(0, 100)
      }
    },
    // validation groups by route name for steps
    steps: {
      GroupName: [
        'form.groupName',
        'form.groupPicture'
      ],
      GroupPurpose: ['form.sharedValues'],
      GroupMincome: [
        'form.mincomeAmount',
        'form.mincomeCurrency'
      ],
      GroupRules: [
        'form.changeThreshold',
        'form.memberApprovalThreshold',
        'form.memberRemovalThreshold'
      ]
    }
  }
}: Object)
<\/script>

<style lang="scss" scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.steps {
  width: 100%;
  max-width: 34rem;
  margin-top: 3.5rem;
  flex-shrink: 0;
}

.wrapper {
  width: 100%;
  max-width: 33rem;
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
function __vue_create_injector__5() {
  const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
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
var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6(
  { render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6 },
  __vue_inject_styles__6,
  __vue_script__6,
  __vue_scope_id__6,
  __vue_is_functional_template__6,
  __vue_module_identifier__6,
  false,
  __vue_create_injector__5,
  void 0,
  void 0
);
var GroupCreationModal_default = __vue_component__6;
export {
  GroupCreationModal_default as default
};
//# sourceMappingURL=GroupCreationModal-SC5AXRTR-cached.js.map
