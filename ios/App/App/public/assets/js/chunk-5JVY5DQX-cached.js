import {
  DECIMALS_MAX,
  saferFloat
} from "./chunk-AS6YVRB6-cached.js";
import {
  cloneDeep
} from "./chunk-MTWMQLQH-cached.js";

// frontend/model/contracts/shared/distribution/mincome-proportional.js
function mincomeProportional(haveNeeds) {
  let totalHave = 0;
  let totalNeed = 0;
  const havers = [];
  const needers = [];
  for (const haveNeed of haveNeeds) {
    if (haveNeed.haveNeed > 0) {
      havers.push(haveNeed);
      totalHave += haveNeed.haveNeed;
    } else if (haveNeed.haveNeed < 0) {
      needers.push(haveNeed);
      totalNeed += Math.abs(haveNeed.haveNeed);
    }
  }
  const totalPercent = Math.min(1, totalNeed / totalHave);
  const payments = [];
  for (const haver of havers) {
    const distributionAmount = totalPercent * haver.haveNeed;
    for (const needer of needers) {
      const belowPercentage = Math.abs(needer.haveNeed) / totalNeed;
      payments.push({
        amount: distributionAmount * belowPercentage,
        fromMemberID: haver.memberID,
        toMemberID: needer.memberID
      });
    }
  }
  return payments;
}

// frontend/model/contracts/shared/distribution/payments-minimizer.js
function minimizeTotalPaymentsCount(distribution) {
  const neederTotalReceived = {};
  const haverTotalHave = {};
  const haversSorted = [];
  const needersSorted = [];
  const minimizedDistribution = [];
  for (const todo of distribution) {
    neederTotalReceived[todo.toMemberID] = (neederTotalReceived[todo.toMemberID] || 0) + todo.amount;
    haverTotalHave[todo.fromMemberID] = (haverTotalHave[todo.fromMemberID] || 0) + todo.amount;
  }
  for (const memberID in haverTotalHave) {
    haversSorted.push({ memberID, amount: haverTotalHave[memberID] });
  }
  for (const memberID in neederTotalReceived) {
    needersSorted.push({ memberID, amount: neederTotalReceived[memberID] });
  }
  haversSorted.sort((a, b) => b.amount - a.amount);
  needersSorted.sort((a, b) => b.amount - a.amount);
  while (haversSorted.length > 0 && needersSorted.length > 0) {
    const mostHaver = haversSorted.pop();
    const mostNeeder = needersSorted.pop();
    const diff = mostHaver.amount - mostNeeder.amount;
    if (diff < 0) {
      minimizedDistribution.push({ amount: mostHaver.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
      mostNeeder.amount -= mostHaver.amount;
      needersSorted.push(mostNeeder);
    } else if (diff > 0) {
      minimizedDistribution.push({ amount: mostNeeder.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
      mostHaver.amount -= mostNeeder.amount;
      haversSorted.push(mostHaver);
    } else {
      minimizedDistribution.push({ amount: mostNeeder.amount, fromMemberID: mostHaver.memberID, toMemberID: mostNeeder.memberID });
    }
  }
  return minimizedDistribution;
}

// frontend/model/contracts/shared/distribution/distribution.js
var tinyNum = 1 / Math.pow(10, DECIMALS_MAX);
function unadjustedDistribution({ haveNeeds = [], minimize = true }) {
  const distribution = mincomeProportional(haveNeeds);
  return minimize ? minimizeTotalPaymentsCount(distribution) : distribution;
}
function adjustedDistribution({ distribution, payments, dueOn }) {
  distribution = cloneDeep(distribution);
  for (const todo of distribution) {
    todo.total = todo.amount;
  }
  distribution = subtractDistributions(distribution, payments).filter((todo) => todo.amount >= tinyNum);
  for (const todo of distribution) {
    todo.amount = saferFloat(todo.amount);
    todo.total = saferFloat(todo.total);
    todo.partial = todo.total !== todo.amount;
    todo.isLate = false;
    todo.dueOn = dueOn;
  }
  return distribution;
}
function reduceDistribution(payments) {
  payments = cloneDeep(payments);
  for (let i = 0; i < payments.length; i++) {
    const paymentA = payments[i];
    for (let j = i + 1; j < payments.length; j++) {
      const paymentB = payments[j];
      if (paymentA.fromMemberID === paymentB.fromMemberID && paymentA.toMemberID === paymentB.toMemberID || paymentA.toMemberID === paymentB.fromMemberID && paymentA.fromMemberID === paymentB.toMemberID) {
        paymentA.amount += (paymentA.fromMemberID === paymentB.fromMemberID ? 1 : -1) * paymentB.amount;
        paymentA.total += (paymentA.fromMemberID === paymentB.fromMemberID ? 1 : -1) * paymentB.total;
        payments.splice(j, 1);
        j--;
      }
    }
  }
  return payments;
}
function addDistributions(paymentsA, paymentsB) {
  return reduceDistribution([...paymentsA, ...paymentsB]);
}
function subtractDistributions(paymentsA, paymentsB) {
  paymentsB = cloneDeep(paymentsB);
  for (const p of paymentsB) {
    p.amount *= -1;
    p.total *= -1;
  }
  return addDistributions(paymentsA, paymentsB);
}

export {
  unadjustedDistribution,
  adjustedDistribution
};
//# sourceMappingURL=chunk-5JVY5DQX-cached.js.map
