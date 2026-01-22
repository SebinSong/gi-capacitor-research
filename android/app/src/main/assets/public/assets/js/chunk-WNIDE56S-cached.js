import {
  ModalClose_default
} from "./chunk-LLQHPKRZ-cached.js";
import {
  CLOSE_MODAL
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapMutations
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/components/modal/ModalMixins.js
var modalMixins = {
  props: {
    a11yTitle: {
      type: String,
      // NOTE: this really should be required but I can't find
      // where ModalTemplate is called with `undefined` for a11yTitle
      // see: https://github.com/okTurtles/group-income/issues/2828
      // and: https://github.com/okTurtles/group-income/pull/2820
      default: L("Modal Title Missing")
    },
    backOnMobile: {
      type: Boolean,
      default: false
    },
    modalForceAction: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modalIsActive: true
    };
  },
  mounted() {
    document.addEventListener("keydown", this.trapFocus);
  },
  beforeDestroy() {
    if (this.loading) this.setTemporaryReducedMotion();
    document.removeEventListener("keydown", this.trapFocus);
  },
  components: {
    ModalClose: ModalClose_default
  },
  methods: {
    ...mapMutations([
      "setTemporaryReducedMotion"
    ]),
    close(e) {
      this.unload();
    },
    unload(targetModal) {
      if (!this.loading) esm_default("okTurtles.events/emit", CLOSE_MODAL, targetModal);
    }
  }
};
var ModalMixins_default = modalMixins;

export {
  ModalMixins_default
};
//# sourceMappingURL=chunk-WNIDE56S-cached.js.map
