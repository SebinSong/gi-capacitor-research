import {
  PAYMENT_COMPLETED
} from "./chunk-5AEIP7HX-cached.js";
import {
  createPaymentInfo,
  paymentHashesFromPaymentPeriod
} from "./chunk-A3KNU2XZ-cached.js";
import {
  dateFromPeriodStamp,
  humanDate,
  periodStampsForDate
} from "./chunk-V3SQGGAF-cached.js";
import {
  cloneDeep
} from "./chunk-MTWMQLQH-cached.js";
import {
  mapGetters,
  mapState
} from "./chunk-J6S33KSG-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/views/containers/payments/PaymentsMixin.js
var PaymentsMixin = {
  computed: {
    ...mapState(["currentGroupId"]),
    ...mapGetters([
      "currentGroupState",
      "dueDateForPeriod",
      "groupPeriodPayments",
      "groupSettings",
      "groupCreatedDate",
      "groupSortedPeriodKeys",
      "ourIdentityContractId",
      "ourPayments",
      "periodAfterPeriod",
      "periodBeforePeriod",
      "periodStampGivenDate",
      "paymentHashesForPeriod"
    ])
  },
  methods: {
    async historicalPeriodStampGivenPayment(payment) {
      return await this.historicalPeriodStampGivenDate(payment.date);
    },
    async getAllPeriodPayments() {
      return { ...await this.getHistoricalPeriodPayments(), ...this.groupPeriodPayments };
    },
    // Oldest key first.
    async getAllSortedPeriodKeys() {
      const currentDate = /* @__PURE__ */ new Date();
      const distributionDate = new Date(this.groupSettings.distributionDate);
      const groupCreatedDate = new Date(this.groupCreatedDate);
      const historicalPeriodPayments = Object.keys(await this.getHistoricalPeriodPayments()).sort();
      const periods = [
        ...historicalPeriodPayments,
        ...this.groupSortedPeriodKeys
      ].filter((period) => {
        const dPeriod = new Date(period);
        return dPeriod > new Date(groupCreatedDate) && dPeriod <= currentDate;
      });
      if (periods.length === 1 && new Date(periods[0]) < distributionDate) {
        return [];
      }
      return periods;
    },
    async historicalPeriodStampGivenDate(givenDate) {
      return periodStampsForDate(givenDate, {
        knownSortedStamps: await this.getAllSortedPeriodKeys(),
        periodLength: this.groupSettings.distributionPeriodLength
      }).current;
    },
    async historicalPeriodBeforePeriod(periodStamp) {
      return periodStampsForDate(periodStamp, {
        knownSortedStamps: await this.getAllSortedPeriodKeys(),
        periodLength: this.groupSettings.distributionPeriodLength
      }).previous;
    },
    async historicalPeriodAfterPeriod(periodStamp) {
      return periodStampsForDate(periodStamp, {
        knownSortedStamps: await this.getAllSortedPeriodKeys(),
        periodLength: this.groupSettings.distributionPeriodLength
      }).next;
    },
    async getDueDateForPeriod(periodStamp) {
      return await this.historicalPeriodAfterPeriod(periodStamp);
    },
    // ====================
    async getHistoricalPeriodPayments() {
      const ourArchiveKey = `paymentsByPeriod/${this.ourIdentityContractId}/${this.currentGroupId}`;
      return await esm_default("gi.db/archive/load", ourArchiveKey) ?? {};
    },
    async getAllPaymentsInTypes() {
      const sent = [];
      const received = [];
      const todo = cloneDeep(this.ourPayments?.todo ?? []);
      const periodPayments = await this.getAllPeriodPayments();
      const sortPayments = (f, l) => f.meta.createdDate > l.meta.createdDate ? 1 : -1;
      for (const periodStamp of Object.keys(periodPayments).sort().reverse()) {
        const paymentsByHash = await this.getPaymentDetailsByPeriod(periodStamp);
        const { paymentsFrom } = periodPayments[periodStamp];
        for (const fromMemberID of Object.keys(paymentsFrom)) {
          for (const toMemberID of Object.keys(paymentsFrom[fromMemberID])) {
            if (toMemberID === this.ourIdentityContractId || fromMemberID === this.ourIdentityContractId) {
              const receivedOrSent = toMemberID === this.ourIdentityContractId ? received : sent;
              for (const hash of paymentsFrom[fromMemberID][toMemberID]) {
                if (hash in paymentsByHash) {
                  const { data, meta } = paymentsByHash[hash];
                  receivedOrSent.push({ hash, data, meta, amount: data.amount, toMemberID, period: periodStamp });
                } else {
                  console.error(`getAllPaymentsInTypes: couldn't find payment ${hash} for period ${periodStamp}!`);
                }
              }
            }
          }
        }
      }
      sent.sort(sortPayments);
      received.sort(sortPayments);
      return { received, sent, todo };
    },
    // Returns archived or in-memory stored data by payment hash for the given period.
    async getPaymentDetailsByPeriod(period) {
      let detailedPayments = {};
      if (period in this.groupPeriodPayments) {
        const paymentHashes = this.paymentHashesForPeriod(period) || [];
        detailedPayments = Object.fromEntries(paymentHashes.map((hash) => [hash, this.currentGroupState.payments[hash]]));
      } else {
        const paymentsByPeriod = await this.getHistoricalPeriodPayments();
        const paymentHashes = paymentHashesFromPaymentPeriod(paymentsByPeriod[period]);
        const historicalPaymentDetails = await this.getHistoricalPaymentDetailsByPeriod(period);
        for (const hash of paymentHashes) {
          detailedPayments[hash] = historicalPaymentDetails[hash];
        }
      }
      return detailedPayments;
    },
    // Returns a list of payment info objects for completed payments during the given period.
    async getPaymentsByPeriod(period) {
      const payments = [];
      const paymentsByHash = await this.getPaymentDetailsByPeriod(period);
      for (const hash of Object.keys(paymentsByHash)) {
        const payment = paymentsByHash[hash];
        if (payment.data.status === PAYMENT_COMPLETED) {
          payments.push(createPaymentInfo(hash, payment));
        }
      }
      return payments;
    },
    async getHistoricalPaymentDetailsByPeriod(period) {
      const paymentsKey = `payments/${this.ourIdentityContractId}/${period}/${this.currentGroupId}`;
      const paymentDetails = await esm_default("gi.db/archive/load", paymentsKey) || {};
      return paymentDetails;
    },
    async getHaveNeedsSnapshotByPeriod(period) {
      if (Object.keys(this.groupPeriodPayments).includes(period)) {
        return this.groupPeriodPayments[period].haveNeedsSnapshot || [];
      }
      const paymentsByPeriod = await this.getHistoricalPeriodPayments();
      return Object.keys(paymentsByPeriod).includes(period) ? paymentsByPeriod[period].haveNeedsSnapshot || [] : [];
    },
    async getTotalTodoAmountForPeriod(period) {
      const haveNeeds = await this.getHaveNeedsSnapshotByPeriod(period);
      let total = 0;
      for (const { haveNeed } of haveNeeds) {
        if (haveNeed < 0) {
          total += -1 * haveNeed;
        }
      }
      return total;
    },
    async getTotalPledgesDoneForPeriod(period) {
      const payments = await this.getPaymentsByPeriod(period);
      let total = 0;
      for (const { amount } of payments) {
        total += amount;
      }
      return total;
    },
    // Returns the stored payment period object for a given period stamp,
    // or an empty object if not found.
    // TODOs: rename to getPaymentPeriod, and maybe avoid loading all historical payment periods.
    async getPaymentPeriod(period) {
      return this.groupPeriodPayments[period] ?? (await this.getHistoricalPeriodPayments())[period] ?? {};
    },
    // Returns a human-readable description of the time interval identified by a given period stamp.
    getPeriodFromStartToDueDate(period, knownPeriods) {
      const dueDate = this.dueDateForPeriod(period, knownPeriods);
      return `${humanDate(dateFromPeriodStamp(period))} - ${humanDate(dateFromPeriodStamp(dueDate))}`;
    }
  }
};
var PaymentsMixin_default = PaymentsMixin;

export {
  PaymentsMixin_default
};
//# sourceMappingURL=chunk-LNZF2O32-cached.js.map
