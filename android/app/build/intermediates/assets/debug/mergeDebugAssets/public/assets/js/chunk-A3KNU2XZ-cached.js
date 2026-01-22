import {
  humanDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  CHATROOM_MEMBER_MENTION_SPECIAL_CHAR,
  PROPOSAL_GENERIC,
  PROPOSAL_GROUP_SETTING_CHANGE,
  PROPOSAL_INVITE_MEMBER,
  PROPOSAL_PROPOSAL_SETTING_CHANGE,
  PROPOSAL_REMOVE_MEMBER
} from "./chunk-UYGYRQRQ-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/model/contracts/shared/functions.js
function paymentHashesFromPaymentPeriod(periodPayments) {
  let hashes = [];
  if (periodPayments) {
    const { paymentsFrom } = periodPayments;
    for (const fromMemberID in paymentsFrom) {
      for (const toMemberID in paymentsFrom[fromMemberID]) {
        hashes = hashes.concat(paymentsFrom[fromMemberID][toMemberID]);
      }
    }
  }
  return hashes;
}
function createPaymentInfo(paymentHash, payment) {
  return {
    fromMemberID: payment.data.fromMemberID,
    toMemberID: payment.data.toMemberID,
    hash: paymentHash,
    amount: payment.data.amount,
    isLate: !!payment.data.isLate,
    when: payment.data.completedDate
  };
}
function getProposalDetails(proposal) {
  const { creatorID, status } = proposal;
  const { proposalType, proposalData } = proposal.data;
  const settingsTranslationMap = {
    "mincomeAmount": L("mincome"),
    "distributionDate": L("distribution date"),
    "votingSystem": L("voting system"),
    "votingRule": L("voting rules")
  };
  const options = {};
  if (proposalType === PROPOSAL_PROPOSAL_SETTING_CHANGE) {
    if (proposalData.ruleName !== proposalData.current.ruleName) {
      options["settingType"] = "votingSystem";
    } else if (proposalData.ruleThreshold !== proposalData.current.ruleThreshold) {
      options["settingType"] = "votingRule";
    }
  } else if (proposalType === PROPOSAL_GROUP_SETTING_CHANGE) {
    options["settingType"] = proposalData.setting;
  } else if (proposalType === PROPOSAL_GENERIC) {
    options["title"] = proposalData.name;
  } else if (proposalType === PROPOSAL_INVITE_MEMBER) {
    options["member"] = proposalData.memberName;
  } else if (proposalType === PROPOSAL_REMOVE_MEMBER) {
    options["memberID"] = proposalData.memberID;
  }
  const { proposedValue } = proposalData;
  if (proposedValue) {
    if (options.settingType === "distributionDate") {
      options["value"] = humanDate(proposedValue, { month: "long", year: "numeric", day: "numeric" });
    } else {
      options["value"] = proposedValue;
    }
  }
  if (options.settingType) {
    options["setting"] = settingsTranslationMap[options.settingType];
  }
  return { creatorID, status, type: proposalType, options };
}
function findMessageIdx(hash, messages = []) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].hash === hash) {
      return i;
    }
  }
  return -1;
}
function makeMentionFromUserID(userID) {
  return {
    me: userID ? `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${userID}` : "",
    all: `${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}all`
  };
}

export {
  paymentHashesFromPaymentPeriod,
  createPaymentInfo,
  getProposalDetails,
  findMessageIdx,
  makeMentionFromUserID
};
//# sourceMappingURL=chunk-A3KNU2XZ-cached.js.map
