import {
  L
} from "./chunk-5ORPBQD5-cached.js";

// frontend/model/contracts/shared/time.js
var MINS_MILLIS = 6e4;
var HOURS_MILLIS = 60 * MINS_MILLIS;
var DAYS_MILLIS = 24 * HOURS_MILLIS;
var MONTHS_MILLIS = 30 * DAYS_MILLIS;
var YEARS_MILLIS = 365 * DAYS_MILLIS;
var plusOnePeriodLength = (timestamp, periodLength) => dateToPeriodStamp(addTimeToDate(timestamp, periodLength));
var minusOnePeriodLength = (timestamp, periodLength) => dateToPeriodStamp(addTimeToDate(timestamp, -periodLength));
function periodStampsForDate(date, { knownSortedStamps, periodLength, guess }) {
  if (!(isIsoString(date) || Object.prototype.toString.call(date) === "[object Date]")) {
    throw new TypeError("must be ISO string or Date object");
  }
  const timestamp = typeof date === "string" ? date : date.toISOString();
  let previous, current, next;
  if (knownSortedStamps.length) {
    const latest = knownSortedStamps[knownSortedStamps.length - 1];
    const earliest = knownSortedStamps[0];
    if (timestamp >= latest) {
      current = periodStampGivenDate({ recentDate: timestamp, periodStart: latest, periodLength });
      next = plusOnePeriodLength(current, periodLength);
      previous = current > latest ? minusOnePeriodLength(current, periodLength) : knownSortedStamps[knownSortedStamps.length - 2];
    } else if (guess && timestamp < earliest) {
      current = periodStampGivenDate({ recentDate: timestamp, periodStart: earliest, periodLength });
      next = plusOnePeriodLength(current, periodLength);
      previous = minusOnePeriodLength(current, periodLength);
    } else {
      for (let i = knownSortedStamps.length - 2; i >= 0; i--) {
        if (timestamp >= knownSortedStamps[i]) {
          current = knownSortedStamps[i];
          next = knownSortedStamps[i + 1];
          previous = i > 0 ? knownSortedStamps[i - 1] : guess ? minusOnePeriodLength(current, periodLength) : void 0;
          break;
        }
      }
    }
  }
  return { previous, current, next };
}
function dateToPeriodStamp(date) {
  return new Date(date).toISOString();
}
function dateFromPeriodStamp(daystamp) {
  return new Date(daystamp);
}
function periodStampGivenDate({ recentDate, periodStart, periodLength }) {
  const periodStartDate = dateFromPeriodStamp(periodStart);
  let nextPeriod = addTimeToDate(periodStartDate, periodLength);
  const curDate = new Date(recentDate);
  let curPeriod;
  if (curDate < nextPeriod) {
    if (curDate >= periodStartDate) {
      return periodStart;
    } else {
      curPeriod = periodStartDate;
      do {
        curPeriod = addTimeToDate(curPeriod, -periodLength);
      } while (curDate < curPeriod);
    }
  } else {
    do {
      curPeriod = nextPeriod;
      nextPeriod = addTimeToDate(nextPeriod, periodLength);
    } while (curDate >= nextPeriod);
  }
  return dateToPeriodStamp(curPeriod);
}
function dateIsWithinPeriod({ date, periodStart, periodLength }) {
  const dateObj = new Date(date);
  const start = dateFromPeriodStamp(periodStart);
  return dateObj > start && dateObj < addTimeToDate(start, periodLength);
}
function addTimeToDate(date, timeMillis) {
  const d = new Date(date);
  d.setTime(d.getTime() + timeMillis);
  return d;
}
function dateToMonthstamp(date) {
  return new Date(date).toISOString().slice(0, 7);
}
function comparePeriodStamps(periodA, periodB) {
  return dateFromPeriodStamp(periodA).getTime() - dateFromPeriodStamp(periodB).getTime();
}
function compareISOTimestamps(a, b) {
  return new Date(a).getTime() - new Date(b).getTime();
}
function getLocale() {
  const fallback = "en-US-POSIX";
  return typeof navigator === "undefined" ? fallback : navigator.languages ?? navigator.language ?? fallback;
}
function humanDate(date, options = { month: "short", day: "numeric" }) {
  const dateObj = new Date(date);
  const locale = getLocale();
  if (!isNaN(dateObj.valueOf())) return dateObj.toLocaleDateString(locale, options);
  return "";
}
function humanTimeString(date, options = { hour: "2-digit", minute: "2-digit" }) {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString(getLocale(), options);
}
function isIsoString(arg) {
  return typeof arg === "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(arg);
}
function proximityDate(date) {
  date = new Date(date);
  const today = /* @__PURE__ */ new Date();
  const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(/* @__PURE__ */ new Date());
  const lastWeek = ((d) => new Date(d.setDate(d.getDate() - 7)))(/* @__PURE__ */ new Date());
  for (const toReset of [date, today, yesterday, lastWeek]) {
    toReset.setHours(0);
    toReset.setMinutes(0);
    toReset.setSeconds(0, 0);
  }
  const datems = Number(date);
  let pd = date > lastWeek ? humanDate(datems, { month: "short", day: "numeric", year: "numeric" }) : humanDate(datems);
  if (date.getTime() === yesterday.getTime()) pd = L("Yesterday");
  if (date.getTime() === today.getTime()) pd = L("Today");
  return pd;
}
function timeSince(datems, dateNow = Date.now()) {
  const interval = dateNow - datems;
  if (interval >= DAYS_MILLIS * 2) {
    return humanDate(datems).replaceAll(" ", "\xA0");
  }
  if (interval >= DAYS_MILLIS) {
    return L("1d");
  }
  if (interval >= HOURS_MILLIS) {
    return L("{hours}h", { hours: Math.floor(interval / HOURS_MILLIS) });
  }
  if (interval >= MINS_MILLIS) {
    return L("{minutes}m", { minutes: Math.max(1, Math.floor(interval / MINS_MILLIS)) });
  }
  return L("<1m");
}

export {
  MINS_MILLIS,
  HOURS_MILLIS,
  DAYS_MILLIS,
  MONTHS_MILLIS,
  periodStampsForDate,
  dateToPeriodStamp,
  dateFromPeriodStamp,
  dateIsWithinPeriod,
  addTimeToDate,
  dateToMonthstamp,
  comparePeriodStamps,
  compareISOTimestamps,
  humanDate,
  humanTimeString,
  proximityDate,
  timeSince
};
//# sourceMappingURL=chunk-V3SQGGAF-cached.js.map
