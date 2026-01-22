// frontend/utils/events.js
var LOGIN = "login";
var LOGIN_ERROR = "login-error";
var LOGIN_COMPLETE = "login-complete";
var LOGOUT = "logout";
var ONLINE = "online";
var OFFLINE = "offline";
var RECONNECTING = "reconnecting";
var RECONNECTION_FAILED = "reconnection-failed";
var KV_EVENT = "kv-event";
var NEW_KV_LOAD_STATUS = "new-kv-load-status";
var ACCEPTED_GROUP = "accepted-group";
var SWITCH_GROUP = "switch-group";
var JOINED_GROUP = "joined-group";
var LEFT_GROUP = "left-group";
var ERROR_GROUP_GENERAL_CHATROOM_DOES_NOT_EXIST = "error-group-non-existent-#general";
var JOINED_CHATROOM = "joined-chatroom";
var LEFT_CHATROOM = "left-chatroom";
var DELETED_CHATROOM = "deleted-chatroom";
var DELETE_ATTACHMENT = "delete-attachment";
var DELETE_ATTACHMENT_FEEDBACK = "delete-attachment-complete";
var ERROR_JOINING_CHATROOM = "error-joining-chatroom";
var OPEN_MODAL = "open-modal";
var CLOSE_MODAL = "close-modal";
var REPLACE_MODAL = "replace-modal";
var SET_MODAL_QUERIES = "set-modal-queries";
var MODAL_RESPONSE = "modal-response";
var OPEN_EMOTICON = "open-emoticon";
var CLOSE_EMOTICON = "close-emoticon";
var SELECT_EMOTICON = "select-emoticon";
var OPEN_TOUCH_LINK_HELPER = "open-touch-link-helper";
var CAPTURED_LOGS = "captured-logs";
var SET_APP_LOGS_FILTER = "set-app-logs-filter";
var INCOME_DETAILS_UPDATE = "income-details-update";
var PAYMENTS_RECORDED = "payments-recorded";
var AVATAR_EDITED = "avatar-edited";
var THEME_CHANGE = "theme-change";
var CHATROOM_EVENTS = "chatroom-events";
var CHATROOM_USER_TYPING = "chatroom-user-typing";
var CHATROOM_USER_STOP_TYPING = "chatroom-user-stop-typing";
var NAMESPACE_REGISTRATION = "namespace-registration";
var PWA_INSTALLABLE = "pwa-installable";
var NOTIFICATION_EMITTED = "notification-emitted";
var NOTIFICATION_REMOVED = "notification-removed";
var NOTIFICATION_STATUS_LOADED = "notification-status-loaded";
var NEW_CHATROOM_SCROLL_POSITION = "new-chatroom-scroll-position";
var NEW_LAST_LOGGED_IN = "new-last-logged-in";
var NEW_UNREAD_MESSAGES = "new-unread-messages";
var NEW_PREFERENCES = "new-preferences";
var NEW_CHATROOM_NOTIFICATION_SETTINGS = "new-chatroom-notification-settings";
var CONTRACT_SYNCS_RESET = "new-current-syncs";
var SERIOUS_ERROR = "serious-error";

export {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_COMPLETE,
  LOGOUT,
  ONLINE,
  OFFLINE,
  RECONNECTING,
  RECONNECTION_FAILED,
  KV_EVENT,
  NEW_KV_LOAD_STATUS,
  ACCEPTED_GROUP,
  SWITCH_GROUP,
  JOINED_GROUP,
  LEFT_GROUP,
  ERROR_GROUP_GENERAL_CHATROOM_DOES_NOT_EXIST,
  JOINED_CHATROOM,
  LEFT_CHATROOM,
  DELETED_CHATROOM,
  DELETE_ATTACHMENT,
  DELETE_ATTACHMENT_FEEDBACK,
  ERROR_JOINING_CHATROOM,
  OPEN_MODAL,
  CLOSE_MODAL,
  REPLACE_MODAL,
  SET_MODAL_QUERIES,
  MODAL_RESPONSE,
  OPEN_EMOTICON,
  CLOSE_EMOTICON,
  SELECT_EMOTICON,
  OPEN_TOUCH_LINK_HELPER,
  CAPTURED_LOGS,
  SET_APP_LOGS_FILTER,
  INCOME_DETAILS_UPDATE,
  PAYMENTS_RECORDED,
  AVATAR_EDITED,
  THEME_CHANGE,
  CHATROOM_EVENTS,
  CHATROOM_USER_TYPING,
  CHATROOM_USER_STOP_TYPING,
  NAMESPACE_REGISTRATION,
  PWA_INSTALLABLE,
  NOTIFICATION_EMITTED,
  NOTIFICATION_REMOVED,
  NOTIFICATION_STATUS_LOADED,
  NEW_CHATROOM_SCROLL_POSITION,
  NEW_LAST_LOGGED_IN,
  NEW_UNREAD_MESSAGES,
  NEW_PREFERENCES,
  NEW_CHATROOM_NOTIFICATION_SETTINGS,
  CONTRACT_SYNCS_RESET,
  SERIOUS_ERROR
};
//# sourceMappingURL=chunk-4UEGBI3X-cached.js.map
