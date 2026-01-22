import {
  allowedUrls_default
} from "./chunk-W7XZLSPA-cached.js";
import {
  has
} from "./chunk-MTWMQLQH-cached.js";

// frontend/views/utils/safeLinkTag.js
function safeLinkTag(key) {
  if (!has(allowedUrls_default, key)) {
    throw new Error(`Unknown URL key: ${key}`);
  }
  return `<a class="link" href="${allowedUrls_default[key]}" target="_blank" rel="noopener noreferrer">`;
}

export {
  safeLinkTag
};
//# sourceMappingURL=chunk-EMMKEFHJ-cached.js.map
