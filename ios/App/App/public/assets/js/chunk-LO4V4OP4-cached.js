import {
  debounce
} from "./chunk-MTWMQLQH-cached.js";

// frontend/views/utils/validationsDebouncedMixins.js
var validationsDebouncedMixins_default = {
  methods: {
    /**
     * Validate the field but debounce the visual error ($error).
     * - It avoids showing the error while the user is still typing.
     */
    debounceField(fieldName, value) {
      this.$v.form[fieldName].$reset();
      this.debounceValidation(fieldName, value);
    },
    /**
     * Validate the field and update it immediatelly.
     * - Usually used on @blur.
     */
    updateField(fieldName, value) {
      if (value) {
        this.form[fieldName] = value;
      }
      this.$v.form[fieldName].$touch();
    },
    /**
     * Debounce field validations.
     * - You can call it when u want to debounce expensive validations.
     */
    debounceValidation: debounce(function(fieldName, value) {
      this.updateField(fieldName, value);
    }, 1e3)
  }
};

export {
  validationsDebouncedMixins_default
};
//# sourceMappingURL=chunk-LO4V4OP4-cached.js.map
