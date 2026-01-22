// frontend/model/contracts/shared/currencies.js
var DECIMALS_MAX = 8;
function commaToDots(value) {
  return typeof value === "string" ? value.replace(/,/, ".") : value.toString();
}
function isNumeric(nr) {
  return !isNaN(nr - parseFloat(nr));
}
function isInDecimalsLimit(nr, decimalsMax) {
  const decimals = nr.split(".")[1];
  return !decimals || decimals.length <= decimalsMax;
}
function validateMincome(value, decimalsMax) {
  const nr = commaToDots(value);
  return isNumeric(nr) && isInDecimalsLimit(nr, decimalsMax);
}
function decimalsOrInt(num, decimalsMax) {
  return num.toFixed(decimalsMax).replace(/\.0+$/, "");
}
function saferFloat(value) {
  return parseFloat(value.toFixed(DECIMALS_MAX));
}
function normalizeCurrency(value) {
  return saferFloat(parseFloat(commaToDots(value)));
}
function mincomePositive(value) {
  return parseFloat(commaToDots(value)) > 0;
}
var XTS = "XTS";
function withCurrency(code, amount) {
  if (!currencies[code]) {
    console.error("withCurrency: unsupported currency", code);
    return "Error: unsupported currency";
  }
  const { isCrypto, numberFormat, symbol } = currencies[code];
  return isCrypto ? numberFormat.format(amount).replace(XTS, symbol || code) : numberFormat.format(amount);
}
function makeCurrency(options) {
  const { code, symbol, decimalsMax, isCrypto = false } = options;
  return {
    numberFormat: new Intl.NumberFormat(
      // $FlowIgnore[incompatible-call]
      typeof navigator === "object" ? navigator.languages ?? navigator.language : "en-US",
      {
        style: "currency",
        currency: isCrypto ? XTS : code,
        // For cryptos we have to set the number of decimal places explicitly.
        maximumFractionDigits: isCrypto ? decimalsMax : void 0,
        // Don't show fraction digits *if* they are all zero.
        trailingZeroDisplay: "stripIfInteger"
      }
    ),
    symbol,
    symbolWithCode: `${symbol} ${code}`,
    decimalsMax,
    isCrypto,
    displayWithCurrency: (n) => withCurrency(code, n),
    displayWithoutCurrency: (n) => decimalsOrInt(n, decimalsMax),
    validate: (n) => validateMincome(n, decimalsMax)
  };
}
var currencies = {
  USD: makeCurrency({
    code: "USD",
    symbol: "$",
    decimalsMax: 2
  }),
  EUR: makeCurrency({
    code: "EUR",
    symbol: "\u20AC",
    decimalsMax: 2
  }),
  BTC: makeCurrency({
    code: "BTC",
    symbol: "\u20BF",
    decimalsMax: 8,
    isCrypto: true
  })
};
var currencies_default = currencies;

export {
  DECIMALS_MAX,
  saferFloat,
  normalizeCurrency,
  mincomePositive,
  withCurrency,
  currencies_default
};
//# sourceMappingURL=chunk-AS6YVRB6-cached.js.map
