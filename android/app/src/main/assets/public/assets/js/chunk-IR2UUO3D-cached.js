import {
  require_buffer
} from "./chunk-SC5GGDZP-cached.js";
import {
  throttle
} from "./chunk-MTWMQLQH-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import {
  __toESM
} from "./chunk-MKFIN2WI-cached.js";

// frontend/model/notifications/nativeNotification.js
var import_buffer = __toESM(require_buffer());
var handler = throttle((status) => {
  const granted = status === "granted" || status === "prompt" && Notification.permission === "granted";
  const { notificationEnabled } = esm_default("state/vuex/state").settings;
  console.info(`Browser notifications have been: ${granted ? "enabled" : "disabled"}, notificationEnabled=${notificationEnabled}`);
  if (!granted || notificationEnabled) {
    esm_default("service-worker/setup-push-subscription").catch((e) => {
      console.error("[handler] Error calling service-worker/setup-push-subscription", e);
    });
  }
}, 250);
var fallbackChangeListener = () => {
  if (!Notification.permission) return;
  let oldValue = Notification.permission;
  handler(oldValue);
  setInterval(() => {
    const newValue = Notification.permission;
    if (oldValue !== newValue) {
      handler(oldValue = newValue);
    }
  }, 1e3);
};
var setupNativeNotificationsListeners = () => {
  if (typeof navigator !== "object" || typeof Notification !== "function" || typeof PushManager !== "function" || typeof ServiceWorker !== "function" || typeof navigator.serviceWorker !== "object") {
    console.warn("Notifications aren't available in this browser!");
    return;
  }
  const isWebkit = typeof navigator === "object" && navigator.vendor === "Apple Computer, Inc.";
  if (!isWebkit && // WebKit doesn't work
  typeof navigator.permissions === "object" && // $FlowFixMe[method-unbinding]
  typeof navigator.permissions.query === "function") {
    Promise.all([
      navigator.permissions.query({ name: "notifications" }),
      navigator.permissions.query({ name: "push", userVisibleOnly: true })
    ]).then(
      (statuses) => {
        handler(statuses[0].state);
        statuses[0].addEventListener("change", () => {
          handler(statuses[0].state);
        }, false);
        statuses[1].addEventListener("change", () => {
          handler(statuses[1].state);
        }, false);
      }
    ).catch((e) => {
      console.error("Error querying notifications permission", e);
      fallbackChangeListener();
    });
  } else {
    fallbackChangeListener();
  }
};
async function requestNotificationPermission({ enableIfGranted } = { enableIfGranted: false }) {
  if (typeof Notification !== "function") {
    return null;
  }
  try {
    const permission = await Notification.requestPermission();
    if (enableIfGranted && permission === "granted") {
      esm_default("state/vuex/commit", "setNotificationEnabled", true);
    }
    return permission;
  } catch (e) {
    console.error("requestNotificationPermission:", e.message);
    return null;
  }
}
async function makeNotification({ title, body, icon, path, groupID, sbpInvocation }) {
  if (typeof Notification !== "function") return;
  if (typeof icon === "object" && icon.manifestCid) {
    const cachedArrayBuffer = await esm_default("gi.db/filesCache/load", icon.manifestCid).catch((e) => {
      console.error("[Avatar.vue] Error loading file from cache", e);
    });
    if (cachedArrayBuffer) {
      icon = "data:;base64," + encodeURIComponent(import_buffer.Buffer.from(cachedArrayBuffer).toString("base64"));
    }
  }
  if (typeof WorkerGlobalScope !== "function") {
    try {
      if (navigator.vendor === "Apple Computer, Inc.") {
        throw new Error("Safari requires a service worker for the notification to be displayed");
      }
      const notification = new Notification(title, { body, icon });
      if (path) {
        notification.onclick = (event) => {
          esm_default("controller/router").push({ path }).catch(console.warn);
        };
      }
    } catch (e) {
      return navigator.serviceWorker?.ready.then((registration) => {
        return registration.showNotification(title, { body, icon, data: { groupID, path, sbpInvocation } });
      }).catch(console.warn);
    }
  } else {
    return self.clients.matchAll({ type: "window" }).then((clientList) => {
      if (clientList.some((client) => client.focused)) {
        return;
      }
      return self.registration.showNotification(
        title,
        { body, icon, data: { groupID, path, sbpInvocation } }
      ).catch(console.warn);
    });
  }
}

export {
  setupNativeNotificationsListeners,
  requestNotificationPermission,
  makeNotification
};
//# sourceMappingURL=chunk-IR2UUO3D-cached.js.map
