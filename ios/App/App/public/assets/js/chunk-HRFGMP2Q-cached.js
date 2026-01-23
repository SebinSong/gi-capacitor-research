import {
  makeMentionFromUserID
} from "./chunk-A3KNU2XZ-cached.js";
import {
  CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR,
  CHATROOM_MEMBER_MENTION_SPECIAL_CHAR
} from "./chunk-UYGYRQRQ-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/model/chatroom/utils.js
function makeChannelMention(str, withId = false) {
  return `${CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR}${withId ? ":chatID:" : ""}${str}`;
}
function getIdFromChannelMention(str) {
  return str.includes(":chatID:") ? str.split(":chatID:")[1] : "";
}
function swapMentionIDForDisplayname(text, options = {
  escaped: true,
  // this indicates that the text contains escaped characters
  forChat: true
  // this indicates that the function is being used for messages inside chatroom
}) {
  const {
    getChatroomNameById,
    usernameFromID,
    userDisplayNameFromID
  } = esm_default("state/vuex/getters");
  const { reverseNamespaceLookups } = esm_default("state/vuex/state");
  const possibleMentions = [
    ...Object.keys(reverseNamespaceLookups).map((u) => makeMentionFromUserID(u).me).filter((v) => !!v),
    makeChannelMention("[^\\s]+", true)
    // chat-mention as contractID has a format of `#:chatID:...`. So target them as a pattern instead of the exact strings.
  ];
  const { escaped, forChat } = options;
  const regEx = escaped ? new RegExp(`(?<=\\s|^)(${possibleMentions.join("|")})(?=[^\\w\\d]|$)`) : new RegExp(`(${possibleMentions.join("|")})`);
  const swap = (t) => {
    if (t.startsWith(CHATROOM_MEMBER_MENTION_SPECIAL_CHAR)) {
      const userID = t.slice(1);
      const prefix = forChat ? CHATROOM_MEMBER_MENTION_SPECIAL_CHAR : "";
      const body = forChat ? usernameFromID(userID) : userDisplayNameFromID(userID);
      return prefix + body;
    } else if (t.startsWith(CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR)) {
      const channelID = getIdFromChannelMention(t);
      const prefix = forChat ? CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR : "";
      return prefix + getChatroomNameById(channelID);
    }
    return t;
  };
  return text.split(regEx).map((t) => regEx.test(t) ? swap(t) : t).join("");
}
function makeMentionFromUsername(username, forceUsername) {
  const rootGetters = esm_default("state/vuex/getters");
  const userID = rootGetters.ourContactProfilesByUsername[username]?.contractID;
  return makeMentionFromUserID(forceUsername && userID ? username : userID);
}

export {
  makeChannelMention,
  getIdFromChannelMention,
  swapMentionIDForDisplayname,
  makeMentionFromUsername
};
//# sourceMappingURL=chunk-HRFGMP2Q-cached.js.map
