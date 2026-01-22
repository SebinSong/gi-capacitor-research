import {
  WebPlugin
} from "./chunk-IOJ2MM6V-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// node_modules/@capacitor/dialog/dist/esm/web.js
var DialogWeb = class extends WebPlugin {
  async alert(options) {
    window.alert(options.message);
  }
  async prompt(options) {
    const val = window.prompt(options.message, options.inputText || "");
    return {
      value: val !== null ? val : "",
      cancelled: val === null
    };
  }
  async confirm(options) {
    const val = window.confirm(options.message);
    return {
      value: val
    };
  }
};
export {
  DialogWeb
};
//# sourceMappingURL=web-7F4COR6A-cached.js.map
