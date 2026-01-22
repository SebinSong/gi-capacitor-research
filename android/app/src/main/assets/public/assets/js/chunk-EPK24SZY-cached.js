import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/utils/buildInvitationUrl.js
function buildInvitationUrl(groupId, groupName, inviteSecret, creatorID) {
  const rootGetters = esm_default("state/vuex/getters");
  const creatorUsername = creatorID && rootGetters.usernameFromID(creatorID);
  return `${location.origin}/app/join#?${new URLSearchParams({
    groupId,
    groupName,
    secret: inviteSecret,
    ...creatorID && {
      creatorID,
      ...creatorUsername && {
        creatorUsername
      }
    }
  }).toString()}`;
}

export {
  buildInvitationUrl
};
//# sourceMappingURL=chunk-EPK24SZY-cached.js.map
