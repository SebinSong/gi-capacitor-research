import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/common/stringTemplate.js
var nargs = /\{([0-9a-zA-Z_]+)\}/g;
function template(string, ...args) {
  const firstArg = args[0];
  const replacementsByKey = typeof firstArg === "object" && firstArg !== null ? firstArg : args;
  return string.replace(nargs, function replaceArg(match, capture, index) {
    if (string[index - 1] === "{" && string[index + match.length] === "}") {
      return capture;
    }
    const maybeReplacement = (
      // Avoid accessing inherited properties of the replacement table.
      // $FlowFixMe
      Object.prototype.hasOwnProperty.call(replacementsByKey, capture) ? replacementsByKey[capture] : void 0
    );
    if (maybeReplacement === null || maybeReplacement === void 0) {
      return "";
    }
    return String(maybeReplacement);
  });
}

// frontend/common/translations.js
var defaultLanguage = "en-US";
var defaultLanguageCode = "en";
var defaultTranslationTable = {};
var currentLanguage = defaultLanguage;
var currentLanguageCode = defaultLanguage.split("-")[0];
var currentTranslationTable = defaultTranslationTable;
var translations_default = esm_default("sbp/selectors/register", {
  "translations/init": async function init(language) {
    const [languageCode] = language.toLowerCase().split("-");
    if (language.toLowerCase() === currentLanguage.toLowerCase()) return;
    if (languageCode === currentLanguageCode) return;
    if (languageCode === defaultLanguageCode) {
      currentLanguage = defaultLanguage;
      currentLanguageCode = defaultLanguageCode;
      currentTranslationTable = defaultTranslationTable;
      return;
    }
    try {
      currentTranslationTable = await esm_default("backend/translations/get", language) || defaultTranslationTable;
      currentLanguage = language;
      currentLanguageCode = languageCode;
    } catch (error) {
      console.error(error);
    }
  }
});
function LTags(...tags) {
  const o = {
    "br_": "<br/>"
  };
  for (const tag of tags) {
    o[`${tag}_`] = `<${tag}>`;
    o[`_${tag}`] = `</${tag}>`;
  }
  return o;
}
function L(key, args) {
  return template(currentTranslationTable[key] || key, args).replace(/\s(?=[;:?!])/g, "\xA0");
}
function LError(error, toGithub) {
  let url = "https://github.com/okTurtles/group-income/issues";
  if (!toGithub && esm_default("state/vuex/state").loggedIn) {
    const baseRoute = esm_default("controller/router").options.base;
    url = `${baseRoute}?modal=UserSettingsModal&tab=application-logs&errorMsg=${encodeURIComponent(error.message)}`;
  }
  return {
    reportError: L('"{errorMsg}". You can {a_}report the error{_a}.', {
      errorMsg: error.message,
      "a_": `<a class="link" target="_blank" href="${url}">`,
      "_a": "</a>"
    })
  };
}

// node_modules/@chelonia/lib/dist/esm/errors.mjs
var ChelErrorGenerator = (name, base = Error) => class extends base {
  constructor(...params) {
    super(...params);
    this.name = name;
    if (params[1]?.cause !== this.cause) {
      Object.defineProperty(this, "cause", {
        configurable: true,
        writable: true,
        value: params[1]?.cause
      });
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var ChelErrorWarning = ChelErrorGenerator("ChelErrorWarning");
var ChelErrorAlreadyProcessed = ChelErrorGenerator("ChelErrorAlreadyProcessed");
var ChelErrorDBBadPreviousHEAD = ChelErrorGenerator("ChelErrorDBBadPreviousHEAD");
var ChelErrorDBConnection = ChelErrorGenerator("ChelErrorDBConnection");
var ChelErrorUnexpected = ChelErrorGenerator("ChelErrorUnexpected");
var ChelErrorKeyAlreadyExists = ChelErrorGenerator("ChelErrorKeyAlreadyExists");
var ChelErrorUnrecoverable = ChelErrorGenerator("ChelErrorUnrecoverable");
var ChelErrorForkedChain = ChelErrorGenerator("ChelErrorForkedChain");
var ChelErrorDecryptionError = ChelErrorGenerator("ChelErrorDecryptionError");
var ChelErrorDecryptionKeyNotFound = ChelErrorGenerator("ChelErrorDecryptionKeyNotFound", ChelErrorDecryptionError);
var ChelErrorSignatureError = ChelErrorGenerator("ChelErrorSignatureError");
var ChelErrorSignatureKeyUnauthorized = ChelErrorGenerator("ChelErrorSignatureKeyUnauthorized", ChelErrorSignatureError);
var ChelErrorSignatureKeyNotFound = ChelErrorGenerator("ChelErrorSignatureKeyNotFound", ChelErrorSignatureError);
var ChelErrorFetchServerTimeFailed = ChelErrorGenerator("ChelErrorFetchServerTimeFailed");
var ChelErrorUnexpectedHttpResponseCode = ChelErrorGenerator("ChelErrorUnexpectedHttpResponseCode");
var ChelErrorResourceGone = ChelErrorGenerator("ChelErrorResourceGone", ChelErrorUnexpectedHttpResponseCode);

// frontend/common/errors.js
var GIErrorIgnoreAndBan = ChelErrorGenerator("GIErrorIgnoreAndBan");
var GIErrorUIRuntimeError = ChelErrorGenerator("GIErrorUIRuntimeError");
var GIErrorMissingSigningKeyError = ChelErrorGenerator("GIErrorMissingSigningKeyError");

export {
  LTags,
  L,
  LError,
  ChelErrorUnexpected,
  ChelErrorDecryptionError,
  ChelErrorDecryptionKeyNotFound,
  ChelErrorSignatureError,
  ChelErrorSignatureKeyUnauthorized,
  ChelErrorUnexpectedHttpResponseCode,
  ChelErrorResourceGone,
  GIErrorUIRuntimeError
};
//# sourceMappingURL=chunk-5ORPBQD5-cached.js.map
