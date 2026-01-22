import {
  literalOf,
  unionOf
} from "./chunk-KTNZHYGC-cached.js";

// frontend/model/contracts/shared/payments/index.js
var PAYMENT_PENDING = "pending";
var PAYMENT_CANCELLED = "cancelled";
var PAYMENT_ERROR = "error";
var PAYMENT_NOT_RECEIVED = "not-received";
var PAYMENT_COMPLETED = "completed";
var paymentStatusType = unionOf(...[PAYMENT_PENDING, PAYMENT_CANCELLED, PAYMENT_ERROR, PAYMENT_NOT_RECEIVED, PAYMENT_COMPLETED].map((k) => literalOf(k)));
var PAYMENT_TYPE_MANUAL = "manual";
var PAYMENT_TYPE_BITCOIN = "bitcoin";
var PAYMENT_TYPE_PAYPAL = "paypal";
var paymentType = unionOf(...[PAYMENT_TYPE_MANUAL, PAYMENT_TYPE_BITCOIN, PAYMENT_TYPE_PAYPAL].map((k) => literalOf(k)));

export {
  PAYMENT_PENDING,
  PAYMENT_CANCELLED,
  PAYMENT_NOT_RECEIVED,
  PAYMENT_COMPLETED,
  PAYMENT_TYPE_MANUAL
};
//# sourceMappingURL=chunk-5AEIP7HX-cached.js.map
