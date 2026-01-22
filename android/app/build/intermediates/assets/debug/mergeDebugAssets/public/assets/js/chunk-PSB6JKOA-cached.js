import {
  CHATROOM_ATTACHMENT_TYPES
} from "./chunk-UYGYRQRQ-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/views/utils/filters.js
var toPercent = (decimal) => Math.floor(decimal * 100);
var getFileExtension = (name, toUppercase = false) => {
  const lastDotIndex = name.lastIndexOf(".");
  const ext = lastDotIndex === -1 ? "" : name.substring(lastDotIndex + 1);
  return toUppercase ? ext.toUpperCase() : ext.toLowerCase();
};
var isPlayableAudioMime = (mimeType) => {
  const audio = document.createElement("audio");
  return !!audio.canPlayType(mimeType);
};
var getFileType = (mimeType = "") => {
  return mimeType.match("image/") ? CHATROOM_ATTACHMENT_TYPES.IMAGE : mimeType.match("video/") ? CHATROOM_ATTACHMENT_TYPES.VIDEO : mimeType.match("audio/") || isPlayableAudioMime(mimeType) ? CHATROOM_ATTACHMENT_TYPES.AUDIO : CHATROOM_ATTACHMENT_TYPES.NON_MEDIA;
};
var formatBytesDecimal = (bytes, decimals = 2) => {
  if (bytes < 0 || !Number.isFinite(bytes)) return L("Invalid size");
  else if (bytes === 0) return L("0 Bytes");
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedValue = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));
  return `${formattedValue} ${sizes[i]}`;
};
var filterByKeyword = (list, keyword, keys = [], caseSensitive = false) => {
  if (!Array.isArray(list) || typeof keyword !== "string") {
    return [];
  }
  if (!keyword) {
    return list;
  } else if (!caseSensitive) {
    keyword = keyword.toUpperCase();
  }
  return list.filter((item) => {
    const values = (typeof item === "object" ? keys.map((key) => item[key]) : [item]).filter((value) => value !== void 0 && value !== null);
    for (let value of values) {
      if (!caseSensitive) {
        value = String(value).toUpperCase();
      }
      if (value.indexOf(keyword) > -1) {
        return true;
      }
    }
    return false;
  });
};

export {
  toPercent,
  getFileExtension,
  getFileType,
  formatBytesDecimal,
  filterByKeyword
};
//# sourceMappingURL=chunk-PSB6JKOA-cached.js.map
