import {
  literalOf,
  unionOf
} from "./chunk-KTNZHYGC-cached.js";
import {
  PROFILE_STATUS,
  PROPOSAL_REMOVE_MEMBER
} from "./chunk-UYGYRQRQ-cached.js";

// frontend/model/contracts/shared/voting/rules.js
var VOTE_AGAINST = ":against";
var VOTE_INDIFFERENT = ":indifferent";
var VOTE_UNDECIDED = ":undecided";
var VOTE_FOR = ":for";
var RULE_PERCENTAGE = "percentage";
var RULE_DISAGREEMENT = "disagreement";
var RULE_MULTI_CHOICE = "multi-choice";
var getPopulation = (state) => Object.keys(state.profiles).filter((p) => state.profiles[p].status === PROFILE_STATUS.ACTIVE).length;
var rules = {
  [RULE_PERCENTAGE]: function(state, proposalType, votes) {
    votes = Object.values(votes);
    let population = getPopulation(state);
    if (proposalType === PROPOSAL_REMOVE_MEMBER) population -= 1;
    const defaultThreshold = state.settings.proposals[proposalType].ruleSettings[RULE_PERCENTAGE].threshold;
    const threshold = getThresholdAdjusted(RULE_PERCENTAGE, defaultThreshold, population);
    const totalIndifferent = votes.filter((x) => x === VOTE_INDIFFERENT).length;
    const totalFor = votes.filter((x) => x === VOTE_FOR).length;
    const totalAgainst = votes.filter((x) => x === VOTE_AGAINST).length;
    const totalForOrAgainst = totalFor + totalAgainst;
    const turnout = totalForOrAgainst + totalIndifferent;
    const absent = population - turnout;
    const neededToPass = Math.ceil(threshold * (population - totalIndifferent));
    console.debug(`votingRule ${RULE_PERCENTAGE} for ${proposalType}:`, { neededToPass, totalFor, totalAgainst, totalIndifferent, threshold, absent, turnout, population });
    if (totalFor >= neededToPass) {
      return VOTE_FOR;
    }
    return totalFor + absent < neededToPass ? VOTE_AGAINST : VOTE_UNDECIDED;
  },
  [RULE_DISAGREEMENT]: function(state, proposalType, votes) {
    votes = Object.values(votes);
    const population = getPopulation(state);
    const minimumMax = proposalType === PROPOSAL_REMOVE_MEMBER ? 2 : 1;
    const thresholdOriginal = Math.max(state.settings.proposals[proposalType].ruleSettings[RULE_DISAGREEMENT].threshold, minimumMax);
    const threshold = getThresholdAdjusted(RULE_DISAGREEMENT, thresholdOriginal, population);
    const totalFor = votes.filter((x) => x === VOTE_FOR).length;
    const totalAgainst = votes.filter((x) => x === VOTE_AGAINST).length;
    const turnout = votes.length;
    const absent = population - turnout;
    console.debug(`votingRule ${RULE_DISAGREEMENT} for ${proposalType}:`, { totalFor, totalAgainst, threshold, turnout, population, absent });
    if (totalAgainst >= threshold) {
      return VOTE_AGAINST;
    }
    return totalAgainst + absent < threshold ? VOTE_FOR : VOTE_UNDECIDED;
  },
  [RULE_MULTI_CHOICE]: function(state, proposalType, votes) {
    throw new Error("unimplemented!");
  }
};
var ruleType = unionOf(...Object.keys(rules).map((k) => literalOf(k)));
var voteType = unionOf(...[VOTE_AGAINST, VOTE_INDIFFERENT, VOTE_UNDECIDED, VOTE_FOR].map((v) => literalOf(v)));
var getThresholdAdjusted = (rule, threshold, groupSize) => {
  const groupSizeVoting = Math.max(3, groupSize);
  return {
    [RULE_DISAGREEMENT]: () => {
      return Math.min(groupSizeVoting - 1, threshold);
    },
    [RULE_PERCENTAGE]: () => {
      const minThreshold = 2 / groupSizeVoting;
      return Math.max(minThreshold, threshold);
    }
  }[rule]();
};
var getCountOutOfMembers = (groupSize, decimal) => {
  const minGroupSize = 3;
  return Math.ceil(Math.max(minGroupSize, groupSize) * decimal);
};
var getPercentFromDecimal = (decimal) => {
  return Math.round(decimal * 100);
};

export {
  VOTE_AGAINST,
  VOTE_FOR,
  RULE_PERCENTAGE,
  RULE_DISAGREEMENT,
  ruleType,
  getThresholdAdjusted,
  getCountOutOfMembers,
  getPercentFromDecimal
};
//# sourceMappingURL=chunk-XIIXXSLC-cached.js.map
