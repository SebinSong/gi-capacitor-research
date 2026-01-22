// frontend/utils/constants.js
var KILOBYTE = 1 << 10;
var MEGABYTE = 1 << 20;
var CHAT_ATTACHMENT_SIZE_LIMIT = 30 * MEGABYTE;
var IMAGE_ATTACHMENT_MAX_SIZE = 400 * KILOBYTE;
var CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_DESKTOP = 500 * 1.25;
var CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_MOBILE = 500 * 1.5;
var TextObjectType = {
  Text: "TEXT",
  InAppLink: "IN_APP_LINK",
  MemberMention: "MEMBER_MENTION",
  ChannelMention: "CHANNEL_MENTION"
};
var KV_KEYS = {
  UNREAD_MESSAGES: "unreadMessages",
  // identity contract
  LAST_LOGGED_IN: "lastLoggedIn",
  // group contract
  PREFERENCES: "preferences",
  // identity contract
  NOTIFICATIONS: "notifications",
  // identity contract
  NS_CACHE: "namespace-cache"
  // identity contract
};
var KV_LOAD_STATUS = {
  NON_INIT: "non-init",
  LOADING: "loading",
  LOADED: "loaded"
};
var MAX_LOG_ENTRIES = 2e3;
var LAST_LOGGED_IN_THROTTLE_WINDOW = 30 * 6e4;
var DEVICE_SETTINGS = {
  DISABLE_NOTIFICATIONS: "disableNotifications"
};

export {
  KILOBYTE,
  CHAT_ATTACHMENT_SIZE_LIMIT,
  IMAGE_ATTACHMENT_MAX_SIZE,
  CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_DESKTOP,
  CHAT_LONG_MESSAGE_HEIGHT_THRESHOLD_MOBILE,
  TextObjectType,
  KV_KEYS,
  KV_LOAD_STATUS,
  MAX_LOG_ENTRIES,
  DEVICE_SETTINGS
};
//# sourceMappingURL=chunk-LOAVQ5PN-cached.js.map
