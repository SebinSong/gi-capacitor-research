import {
  safeLinkTag
} from "./chunk-EMMKEFHJ-cached.js";
import {
  MAX_LOG_ENTRIES
} from "./chunk-LOAVQ5PN-cached.js";
import "./chunk-W7XZLSPA-cached.js";
import "./chunk-K33NK7LD-cached.js";
import {
  ButtonSubmit_default
} from "./chunk-YUM5UY76-cached.js";
import {
  BannerScoped_default
} from "./chunk-VVR7NWXN-cached.js";
import {
  omit
} from "./chunk-MTWMQLQH-cached.js";
import {
  CAPTURED_LOGS
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapMutations
} from "./chunk-J6S33KSG-cached.js";
import {
  L,
  LError
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";
import "./chunk-MKFIN2WI-cached.js";

// frontend/views/containers/user-settings/AppLogs.vue
var __vue_script__ = {
  name: "AppLogs",
  components: {
    BannerScoped: BannerScoped_default,
    ButtonSubmit: ButtonSubmit_default
  },
  data() {
    return {
      form: {
        filter: this.$store.state.settings.appLogsFilter,
        source: "combined"
      },
      ephemeral: {
        ready: false,
        logs: [],
        useWebShare: false,
        versionInfos: {
          loading: true,
          app_version: "",
          contracts_version: "",
          service_worker_version: ""
        }
      }
    };
  },
  created() {
    esm_default("okTurtles.events/on", CAPTURED_LOGS, this.addLog);
    this.getLogs();
    this.loadVersionInfo();
  },
  mounted() {
    window.addEventListener("resize", this.checkWebShareAvailable);
    this.checkWebShareAvailable();
  },
  beforeDestroy() {
    esm_default("okTurtles.events/off", CAPTURED_LOGS, this.addLog);
    window.removeEventListener("resize", this.checkWebShareAvailable);
  },
  watch: {
    "form.filter"(filter) {
      this.setAppLogsFilter(filter);
    },
    "form.source"(to, from) {
      if (to === from) return;
      this.getLogs();
    },
    prettyLogs() {
      this.$nextTick(() => {
        if (this.$refs.textarea) {
          this.$refs.textarea.scrollTop = this.$refs.textarea.scrollHeight;
        }
      });
    }
  },
  computed: {
    errorMsg() {
      return this.$route.query.errorMsg;
    },
    prettyLogs() {
      return this.ephemeral.logs.filter(({ type }) => this.form.filter.includes(type)).map(({ type, source, msg, timestamp }) => `${timestamp} (${source}) [${type}] ${msg.map((x) => JSON.stringify(x)).join(" ")}`).join("\n");
    },
    issuePageTag() {
      return safeLinkTag("ISSUE_PAGE");
    }
  },
  methods: {
    ...mapMutations([
      "setAppLogsFilter"
    ]),
    async loadVersionInfo() {
      let swVersion = "";
      try {
        swVersion = (await esm_default("sw/version")).GI_GIT_VERSION.slice(1);
      } catch (e) {
        console.error("AppLogs.vue caught:", e);
      } finally {
        this.ephemeral.versionInfos = {
          loading: false,
          app_version: "2.5.1@2026-01-21T06:08:30.231Z".split("@")[0],
          contracts_version: "2.5.0",
          service_worker_version: swVersion
        };
      }
    },
    addLog(entry) {
      if (entry) {
        if (this.form.source === "browser" && entry.source !== "browser") return;
        if (this.form.source === "serviceworker" && entry.source !== "sw") return;
        this.ephemeral.logs.push(entry);
        const maxEntries = this.form.source === "combined" ? 2 * MAX_LOG_ENTRIES : MAX_LOG_ENTRIES;
        if (this.ephemeral.logs.length >= maxEntries + 100) {
          this.ephemeral.logs.splice(0, 100);
        }
      }
    },
    openTroubleshooting() {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: "troubleshooting"
        }
      });
    },
    downloadOrShareLogs() {
      const actionType = this.ephemeral.useWebShare ? "share" : "download";
      const isDownload = actionType === "download";
      try {
        const elLink = this.$refs.linkDownload;
        const filename = "gi_logs.json.txt";
        const mimeType = "text/plain";
        const blob = new Blob([JSON.stringify({
          // Add instructions in case the user opens the file.
          _instructions: "GROUP INCOME - Application Logs - Attach this file when reporting an issue: https://github.com/okTurtles/group-income/issues",
          ua: navigator.userAgent,
          version_info: omit(this.ephemeral.versionInfos, ["loading"]),
          logs: this.ephemeral.logs
        }, void 0, 2)], { type: mimeType });
        if (isDownload) {
          if (!elLink) {
            return;
          }
          const url = URL.createObjectURL(blob);
          elLink.href = url;
          elLink.download = filename;
          elLink.click();
          setTimeout(() => {
            elLink.href = "#";
            URL.revokeObjectURL(url);
          }, 0);
        } else {
          return navigator.share({
            files: [new File([blob], filename, { type: blob.type })],
            title: L("Application Logs")
          });
        }
      } catch (err) {
        const errorDisplay = isDownload ? L("Failed to download the app logs. {reportError}", LError(err)) : L("Failed to share the app logs. {reportError}", LError(err));
        console.error(`AppLogs.vue downloadOrShareLogs() '${actionType}' action error:`, err);
        this.$refs.errBanner.danger(errorDisplay);
      }
    },
    checkWebShareAvailable() {
      this.ephemeral.useWebShare = Boolean(navigator.share) && window.matchMedia("(hover: none) and (pointer: coarse)").matches && window.matchMedia("screen and (max-width: 1199px)").matches;
    },
    getLogs() {
      switch (this.form.source) {
        case "combined": {
          this.ephemeral.ready = false;
          const tempLogs = [];
          this.ephemeral.logs = tempLogs;
          esm_default("swLogs/get").then((logs) => {
            if (this.ephemeral.logs !== tempLogs) {
              return;
            }
            const appLogs = esm_default("appLogs/get");
            const combinedLogs = [...appLogs, ...logs].sort();
            this.ephemeral.logs = combinedLogs;
            this.ephemeral.ready = true;
          }).catch((err) => {
            const errorDisplay = L("Error obtaining logs. {reportError}", LError(err));
            console.error("AppLogs.vue getLogs() error:", err);
            this.$refs.errBanner.danger(errorDisplay);
          });
          break;
        }
        case "browser": {
          this.ephemeral.logs = esm_default("appLogs/get");
          this.ephemeral.ready = true;
          break;
        }
        case "serviceworker": {
          this.ephemeral.ready = false;
          const tempLogs = [];
          this.ephemeral.logs = tempLogs;
          esm_default("swLogs/get").then((logs) => {
            if (this.ephemeral.logs !== tempLogs) {
              return;
            }
            this.ephemeral.logs = logs;
            this.ephemeral.ready = true;
          }).catch((err) => {
            const errorDisplay = L("Error obtaining logs. {reportError}", LError(err));
            console.error("AppLogs.vue getLogs() error:", err);
            this.$refs.errBanner.danger(errorDisplay);
          });
          break;
        }
      }
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "settings-container" }, [
    _c(
      "section",
      { staticClass: "card" },
      [
        _vm.ephemeral.versionInfos.loading ? _c("div", { staticClass: "c-loader-container" }, [
          _c("div", { staticClass: "loading-box" }),
          _c("div", { staticClass: "loading-box" }),
          _c("div", { staticClass: "loading-box" }),
          _c("div", { staticClass: "loading-box" })
        ]) : [
          _c(
            "div",
            { staticClass: "c-header" },
            [
              _c(
                "p",
                { staticClass: "c-instructions" },
                [
                  _vm.errorMsg ? _c(
                    "i18n",
                    {
                      attrs: {
                        args: {
                          a_: _vm.issuePageTag,
                          _a: "</a>",
                          errorMsg: _vm.errorMsg
                        }
                      }
                    },
                    [
                      _vm._v(
                        'Recent error: "{errorMsg}". Please download the logs and {a_}send them to us{_a}, so we can help troubleshoot.'
                      )
                    ]
                  ) : _c(
                    "i18n",
                    {
                      attrs: {
                        args: { a_: _vm.issuePageTag, _a: "</a>" }
                      }
                    },
                    [
                      _vm._v(
                        "If you encounter problems, please download the logs and {a_}send them to us{_a}."
                      )
                    ]
                  )
                ],
                1
              ),
              _c("fieldset", { staticClass: "c-filters" }, [
                _c("div", { staticClass: "c-filters-inner" }, [
                  _c("legend", { staticClass: "c-filters-legend" }, [
                    _vm._v("Optional logs:")
                  ]),
                  _c(
                    "label",
                    { staticClass: "checkbox" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.filter,
                            expression: "form.filter"
                          }
                        ],
                        staticClass: "input",
                        attrs: {
                          type: "checkbox",
                          name: "filter",
                          value: "debug"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.form.filter) ? _vm._i(_vm.form.filter, "debug") > -1 : _vm.form.filter
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.filter, $$el = $event.target, $$c = $$el.checked ? true : false;
                            if (Array.isArray($$a)) {
                              var $$v = "debug", $$i = _vm._i($$a, $$v);
                              if ($$el.checked) {
                                $$i < 0 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.concat([$$v])
                                );
                              } else {
                                $$i > -1 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                );
                              }
                            } else {
                              _vm.$set(_vm.form, "filter", $$c);
                            }
                          }
                        }
                      }),
                      _c("i18n", [_vm._v("Debug")])
                    ],
                    1
                  ),
                  _c(
                    "label",
                    { staticClass: "checkbox" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.filter,
                            expression: "form.filter"
                          }
                        ],
                        staticClass: "input",
                        attrs: {
                          type: "checkbox",
                          name: "filter",
                          value: "info"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.form.filter) ? _vm._i(_vm.form.filter, "info") > -1 : _vm.form.filter
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.filter, $$el = $event.target, $$c = $$el.checked ? true : false;
                            if (Array.isArray($$a)) {
                              var $$v = "info", $$i = _vm._i($$a, $$v);
                              if ($$el.checked) {
                                $$i < 0 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.concat([$$v])
                                );
                              } else {
                                $$i > -1 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                );
                              }
                            } else {
                              _vm.$set(_vm.form, "filter", $$c);
                            }
                          }
                        }
                      }),
                      _c("i18n", [_vm._v("Info")])
                    ],
                    1
                  ),
                  _c(
                    "label",
                    { staticClass: "checkbox" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.filter,
                            expression: "form.filter"
                          }
                        ],
                        staticClass: "input",
                        attrs: {
                          type: "checkbox",
                          name: "filter",
                          value: "log"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.form.filter) ? _vm._i(_vm.form.filter, "log") > -1 : _vm.form.filter
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.filter, $$el = $event.target, $$c = $$el.checked ? true : false;
                            if (Array.isArray($$a)) {
                              var $$v = "log", $$i = _vm._i($$a, $$v);
                              if ($$el.checked) {
                                $$i < 0 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.concat([$$v])
                                );
                              } else {
                                $$i > -1 && _vm.$set(
                                  _vm.form,
                                  "filter",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                );
                              }
                            } else {
                              _vm.$set(_vm.form, "filter", $$c);
                            }
                          }
                        }
                      }),
                      _c("i18n", [_vm._v("Log")])
                    ],
                    1
                  )
                ])
              ]),
              _c(
                "fieldset",
                {
                  staticClass: "c-source",
                  attrs: { "aria-label": _vm.L("Source:") }
                },
                [
                  _c("div", { staticClass: "c-source-inner" }, [
                    _c(
                      "label",
                      { staticClass: "c-label" },
                      [
                        _c("i18n", { staticClass: "c-source-legend" }, [
                          _vm._v("Log source:")
                        ]),
                        _c("div", { staticClass: "selectbox" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.source,
                                  expression: "form.source"
                                }
                              ],
                              staticClass: "select",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter.call(
                                    $event.target.options,
                                    function(o) {
                                      return o.selected;
                                    }
                                  ).map(function(o) {
                                    var val = "_value" in o ? o._value : o.value;
                                    return val;
                                  });
                                  _vm.$set(
                                    _vm.form,
                                    "source",
                                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                                  );
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "combined" } },
                                [_c("i18n", [_vm._v("Combined")])],
                                1
                              ),
                              _c(
                                "option",
                                { attrs: { value: "browser" } },
                                [_c("i18n", [_vm._v("Browser")])],
                                1
                              ),
                              _c(
                                "option",
                                { attrs: { value: "serviceworker" } },
                                [_c("i18n", [_vm._v("Service worker")])],
                                1
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                ]
              ),
              _c(
                "button-submit",
                {
                  staticClass: "is-small c-download",
                  on: { click: _vm.downloadOrShareLogs }
                },
                [
                  _vm.ephemeral.useWebShare ? [
                    _c("i", {
                      staticClass: "icon-share-alt is-prefix"
                    }),
                    _c("i18n", [_vm._v("Share")])
                  ] : [
                    _c("i", { staticClass: "icon-download is-prefix" }),
                    _c("i18n", [_vm._v("Download")])
                  ]
                ],
                2
              ),
              _c("a", { ref: "linkDownload", attrs: { hidden: "hidden" } })
            ],
            1
          ),
          _c("banner-scoped", {
            ref: "errBanner",
            staticClass: "c-err-banner"
          }),
          _vm.ephemeral.ready ? _c(
            "textarea",
            {
              ref: "textarea",
              staticClass: "textarea c-logs",
              attrs: { rows: "12", readonly: "readonly" }
            },
            [_vm._v(_vm._s(_vm.prettyLogs))]
          ) : _c("div", [_c("i18n", [_vm._v("Loading")])], 1),
          _c(
            "i18n",
            {
              staticClass: "link",
              attrs: { tag: "button" },
              on: { click: _vm.openTroubleshooting }
            },
            [_vm._v("Troubleshooting")]
          )
        ]
      ],
      2
    )
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-18002a7e_0", { source: '@charset "UTF-8";\n.settings-container[data-v-18002a7e] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n.settings-container[data-v-18002a7e] {\n    padding-top: 1.5rem;\n}\n}\n.c-header[data-v-18002a7e] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-instructions[data-v-18002a7e] {\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n.c-filters[data-v-18002a7e],\n.c-source[data-v-18002a7e] {\n  width: 100%;\n  flex-grow: 99;\n}\n.c-filters-inner[data-v-18002a7e],\n.c-source-inner[data-v-18002a7e] {\n  display: flex;\n}\n.c-filters-legend[data-v-18002a7e]::after,\n.c-source-legend[data-v-18002a7e]::after {\n  content: "\u2003";\n}\n.c-filters .checkbox[data-v-18002a7e]:last-child::after,\n.c-source .checkbox[data-v-18002a7e]:last-child::after {\n  content: "\u2002";\n}\n.c-source .c-label[data-v-18002a7e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.c-download[data-v-18002a7e] {\n  flex-grow: 1;\n}\n.c-filters[data-v-18002a7e],\n.c-source[data-v-18002a7e],\n.c-download[data-v-18002a7e],\n.c-logs[data-v-18002a7e] {\n  margin-bottom: 1rem;\n}\n.c-logs[data-v-18002a7e] {\n  font-family: "Monaco", "Menlo", "Courier", monospace;\n  font-size: 0.75rem;\n  white-space: pre;\n}\n.c-err-banner[data-v-18002a7e] {\n  margin-bottom: 1.5rem;\n}\n.c-err-banner[data-v-18002a7e]  .c-banner {\n  margin-top: 0;\n}\n.c-loader-container[data-v-18002a7e] {\n  position: relative;\n  width: 100%;\n}\n.c-loader-container .loading-box[data-v-18002a7e] {\n  display: block;\n  width: 100%;\n  min-height: unset;\n}\n.c-loader-container .loading-box[data-v-18002a7e]:first-child {\n  height: 1.25rem;\n  max-width: 20rem;\n}\n.c-loader-container .loading-box[data-v-18002a7e]:nth-child(2), .c-loader-container .loading-box[data-v-18002a7e]:nth-child(3) {\n  height: 1.25rem;\n}\n.c-loader-container .loading-box[data-v-18002a7e]:nth-child(2) {\n  max-width: 31.25rem;\n}\n.c-loader-container .loading-box[data-v-18002a7e]:last-child {\n  height: 16.25rem;\n}\n\n/*# sourceMappingURL=AppLogs.vue.map */', map: { "version": 3, "sources": ["AppLogs.vue", "frontend/views/containers/user-settings/AppLogs.vue"], "names": [], "mappings": "AAAA,gBAAgB;AC6ShB;EACA,WAAA;AD3SA;AACA;ACySA;IAIA,mBAAA;AD1SE;AACF;AC6SA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;AD1SA;AC6SA;EACA,qBAAA;EACA,WAAA;AD1SA;AC6SA;;EAEA,WAAA;EACA,aAAA;AD1SA;AC4SA;;EACA,aAAA;ADzSA;AC4SA;;EACA,YAAA;ADzSA;AC4SA;;EACA,YAAA;ADzSA;AC6SA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AD1SA;AC6SA;EACA,YAAA;AD1SA;AC6SA;;;;EAIA,mBAAA;AD1SA;AC6SA;EACA,oDAAA;EACA,kBAAA;EACA,gBAAA;AD1SA;AC6SA;EACA,qBAAA;AD1SA;AC4SA;EACA,aAAA;AD1SA;AC8SA;EACA,kBAAA;EACA,WAAA;AD3SA;AC6SA;EACA,cAAA;EACA,WAAA;EACA,iBAAA;AD3SA;AC6SA;EACA,eAAA;EACA,gBAAA;AD3SA;AC8SA;EAEA,eAAA;AD7SA;ACgTA;EAAA,mBAAA;AD7SA;AC+SA;EAAA,gBAAA;AD5SA;;AAEA,sCAAsC", "file": "AppLogs.vue", "sourcesContent": ['@charset "UTF-8";\n.settings-container {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .settings-container {\n    padding-top: 1.5rem;\n  }\n}\n\n.c-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-instructions {\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n\n.c-filters,\n.c-source {\n  width: 100%;\n  flex-grow: 99;\n}\n.c-filters-inner,\n.c-source-inner {\n  display: flex;\n}\n.c-filters-legend::after,\n.c-source-legend::after {\n  content: "\u2003";\n}\n.c-filters .checkbox:last-child::after,\n.c-source .checkbox:last-child::after {\n  content: "\u2002";\n}\n\n.c-source .c-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.c-download {\n  flex-grow: 1;\n}\n\n.c-filters,\n.c-source,\n.c-download,\n.c-logs {\n  margin-bottom: 1rem;\n}\n\n.c-logs {\n  font-family: "Monaco", "Menlo", "Courier", monospace;\n  font-size: 0.75rem;\n  white-space: pre;\n}\n\n.c-err-banner {\n  margin-bottom: 1.5rem;\n}\n.c-err-banner ::v-deep .c-banner {\n  margin-top: 0;\n}\n\n.c-loader-container {\n  position: relative;\n  width: 100%;\n}\n.c-loader-container .loading-box {\n  display: block;\n  width: 100%;\n  min-height: unset;\n}\n.c-loader-container .loading-box:first-child {\n  height: 1.25rem;\n  max-width: 20rem;\n}\n.c-loader-container .loading-box:nth-child(2), .c-loader-container .loading-box:nth-child(3) {\n  height: 1.25rem;\n}\n.c-loader-container .loading-box:nth-child(2) {\n  max-width: 31.25rem;\n}\n.c-loader-container .loading-box:last-child {\n  height: 16.25rem;\n}\n\n/*# sourceMappingURL=AppLogs.vue.map */', `<template lang='pug'>
  .settings-container
    section.card
      .c-loader-container(v-if='ephemeral.versionInfos.loading')
        .loading-box
        .loading-box
        .loading-box
        .loading-box

      template(v-else)
        .c-header
          p.c-instructions
            i18n(
              v-if='errorMsg'
              :args='{ a_: issuePageTag, _a: "</a>", errorMsg }'
            ) Recent error: "{errorMsg}". Please download the logs and {a_}send them to us{_a}, so we can help troubleshoot.
            i18n(
              v-else
              :args='{ a_: issuePageTag, _a: "</a>" }'
            ) If you encounter problems, please download the logs and {a_}send them to us{_a}.

          fieldset.c-filters
            .c-filters-inner
              legend.c-filters-legend Optional logs:
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='debug')
                i18n Debug
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='info')
                i18n Info
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='log')
                i18n Log

          fieldset.c-source(:aria-label='L("Source:")')
            .c-source-inner
              label.c-label
                i18n.c-source-legend Log source:
                .selectbox
                  select.select(v-model='form.source')
                    option(value='combined')
                      i18n Combined
                    option(value='browser')
                      i18n Browser
                    option(value='serviceworker')
                      i18n Service worker

          button-submit.is-small.c-download(@click='downloadOrShareLogs')
            template(v-if='ephemeral.useWebShare')
              i.icon-share-alt.is-prefix
              i18n Share
            template(v-else)
              i.icon-download.is-prefix
              i18n Download

          a(ref='linkDownload' hidden)

        banner-scoped.c-err-banner(ref='errBanner')

        textarea.textarea.c-logs(ref='textarea' rows='12' v-if='ephemeral.ready' readonly)
          | {{ prettyLogs }}
        div(v-else)
          i18n Loading

        i18n.link(tag='button' @click='openTroubleshooting') Troubleshooting

</template>

<script>
import sbp from '@sbp/sbp'
import { mapMutations } from 'vuex'
import { CAPTURED_LOGS } from '../../../../frontend/utils/events.js'
import { MAX_LOG_ENTRIES } from '../../../../frontend/utils/constants.js'
import safeLinkTag from '../../../../frontend/views/utils/safeLinkTag.js'
import { L, LError } from '../../../../frontend/common/common.js'
import { omit } from 'turtledash'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'AppLogs',
  components: {
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        filter: this.$store.state.settings.appLogsFilter,
        source: 'combined'
      },
      ephemeral: {
        ready: false,
        logs: [],
        useWebShare: false,
        versionInfos: {
          loading: true,
          app_version: '',
          contracts_version: '',
          service_worker_version: ''
        }
      }
    }
  },
  created () {
    sbp('okTurtles.events/on', CAPTURED_LOGS, this.addLog)
    this.getLogs()
    this.loadVersionInfo()
  },
  mounted () {
    window.addEventListener('resize', this.checkWebShareAvailable)
    this.checkWebShareAvailable()
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', CAPTURED_LOGS, this.addLog)
    window.removeEventListener('resize', this.checkWebShareAvailable)
  },
  watch: {
    'form.filter' (filter) {
      this.setAppLogsFilter(filter)
    },
    'form.source' (to, from) {
      if (to === from) return
      this.getLogs()
    },
    prettyLogs () {
      this.$nextTick(() => {
        if (this.$refs.textarea) {
          // Automatically scroll the textarea to the bottom.
          this.$refs.textarea.scrollTop = this.$refs.textarea.scrollHeight
        }
      })
    }
  },
  computed: {
    errorMsg () {
      return this.$route.query.errorMsg
    },
    prettyLogs () {
      return this.ephemeral.logs
        .filter(({ type }) => this.form.filter.includes(type))
        .map(({ type, source, msg, timestamp }) => \`\${timestamp} (\${source}) [\${type}] \${msg.map((x) => JSON.stringify(x)).join(' ')}\`)
        .join('\\n')
    },
    issuePageTag () {
      return safeLinkTag('ISSUE_PAGE')
    }
  },
  methods: {
    ...mapMutations([
      'setAppLogsFilter'
    ]),
    async loadVersionInfo () {
      let swVersion = ''

      try {
        swVersion = (await sbp('sw/version')).GI_GIT_VERSION.slice(1)
      } catch (e) {
        console.error('AppLogs.vue caught:', e)
      } finally {
        this.ephemeral.versionInfos = {
          loading: false,
          app_version: process.env.GI_VERSION.split('@')[0],
          contracts_version: process.env.CONTRACTS_VERSION,
          service_worker_version: swVersion
        }
      }
    },
    addLog (entry: Object) {
      if (entry) {
        if (this.form.source === 'browser' && entry.source !== 'browser') return
        if (this.form.source === 'serviceworker' && entry.source !== 'sw') return
        this.ephemeral.logs.push(entry)
        // prevent the amount of logs from growing beyond MAX_LOG_ENTRIES
        // plus 100 lines. If the log entries get too large, remove 100 excess
        // logs each time we reach that amount
        // NOTE: When viewing 'combined' logs, we allow for twice as many log
        // entries.
        const maxEntries = this.form.source === 'combined' ? 2 * MAX_LOG_ENTRIES : MAX_LOG_ENTRIES
        if (this.ephemeral.logs.length >= maxEntries + 100) {
          this.ephemeral.logs.splice(0, 100)
        }
      }
    },
    openTroubleshooting () {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: 'troubleshooting'
        }
      })
    },
    downloadOrShareLogs () {
      const actionType = this.ephemeral.useWebShare ? 'share' : 'download'
      const isDownload = actionType === 'download'

      try {
        const elLink = this.$refs.linkDownload
        const filename = 'gi_logs.json.txt'
        const mimeType = 'text/plain'

        const blob = new Blob([JSON.stringify({
        // Add instructions in case the user opens the file.
          _instructions: 'GROUP INCOME - Application Logs - Attach this file when reporting an issue: https://github.com/okTurtles/group-income/issues',
          ua: navigator.userAgent,
          version_info: omit(this.ephemeral.versionInfos, ['loading']),
          logs: this.ephemeral.logs
        }, undefined, 2)], { type: mimeType })

        if (isDownload) {
          if (!elLink) { return }

          const url = URL.createObjectURL(blob)
          elLink.href = url
          elLink.download = filename
          elLink.click()
          setTimeout(() => {
            elLink.href = '#'
            URL.revokeObjectURL(url)
          }, 0)
        } else {
          return navigator.share({
            files: [new File([blob], filename, { type: blob.type })],
            title: L('Application Logs')
          })
        }
      } catch (err) {
        const errorDisplay = isDownload
          ? L('Failed to download the app logs. {reportError}', LError(err))
          : L('Failed to share the app logs. {reportError}', LError(err))

        console.error(\`AppLogs.vue downloadOrShareLogs() '\${actionType}' action error:\`, err)
        this.$refs.errBanner.danger(errorDisplay)
      }
    },
    checkWebShareAvailable () {
      this.ephemeral.useWebShare = Boolean(navigator.share) &&
        window.matchMedia('(hover: none) and (pointer: coarse)').matches &&
        window.matchMedia('screen and (max-width: 1199px)').matches
    },
    getLogs () {
      // Log entries in chronological order (oldest to most recent).
      switch (this.form.source) {
        case 'combined': {
          this.ephemeral.ready = false
          const tempLogs = []
          this.ephemeral.logs = tempLogs
          sbp('swLogs/get').then((logs) => {
            // This check ensures that we're not working on a stale request
            // If the reference to this.ephemeral.logs has changed, it means
            // that we shouldn't proceed because a newer user action has occurred
            if (this.ephemeral.logs !== tempLogs) {
              return
            }
            const appLogs = sbp('appLogs/get')
            const combinedLogs = [...appLogs, ...logs].sort()
            this.ephemeral.logs = combinedLogs
            this.ephemeral.ready = true
          }).catch(err => {
            const errorDisplay = L('Error obtaining logs. {reportError}', LError(err))

            console.error('AppLogs.vue getLogs() error:', err)
            this.$refs.errBanner.danger(errorDisplay)
          })
          break
        }
        case 'browser': {
          this.ephemeral.logs = sbp('appLogs/get')
          this.ephemeral.ready = true
          break
        }
        case 'serviceworker': {
          this.ephemeral.ready = false
          const tempLogs = []
          this.ephemeral.logs = tempLogs
          sbp('swLogs/get').then((logs) => {
            // This check ensures that we're not working on a stale request
            // If the reference to this.ephemeral.logs has changed, it means
            // that we shouldn't proceed because a newer user action has occurred
            if (this.ephemeral.logs !== tempLogs) {
              return
            }
            this.ephemeral.logs = logs
            this.ephemeral.ready = true
          }).catch(err => {
            const errorDisplay = L('Error obtaining logs. {reportError}', LError(err))

            console.error('AppLogs.vue getLogs() error:', err)
            this.$refs.errBanner.danger(errorDisplay)
          })
          break
        }
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  width: 100%;

  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.c-instructions {
  margin-bottom: 1.5rem;
  width: 100%;
}

.c-filters,
.c-source {
  width: 100%;
  flex-grow: 99; // to be wider than c-download

  &-inner {
    display: flex;
  }

  &-legend::after {
    content: "\\2003";
  }

  .checkbox:last-child::after {
    content: "\\2002";
  }
}

.c-source .c-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-download {
  flex-grow: 1;
}

.c-filters,
.c-source,
.c-download,
.c-logs {
  margin-bottom: 1rem;
}

.c-logs {
  font-family: "Monaco", "Menlo", "Courier", monospace;
  font-size: $size_5;
  white-space: pre;
}

.c-err-banner {
  margin-bottom: 1.5rem;

  ::v-deep .c-banner {
    margin-top: 0;
  }
}

.c-loader-container {
  position: relative;
  width: 100%;

  .loading-box {
    display: block;
    width: 100%;
    min-height: unset;

    &:first-child {
      height: 1.25rem;
      max-width: 20rem;
    }

    &:nth-child(2),
    &:nth-child(3) {
      height: 1.25rem;
    }

    &:nth-child(2) { max-width: 31.25rem; }

    &:last-child { height: 16.25rem; }
  }
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-18002a7e";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
  .settings-container
    section.card
      .c-loader-container(v-if='ephemeral.versionInfos.loading')
        .loading-box
        .loading-box
        .loading-box
        .loading-box

      template(v-else)
        .c-header
          p.c-instructions
            i18n(
              v-if='errorMsg'
              :args='{ a_: issuePageTag, _a: "</a>", errorMsg }'
            ) Recent error: "{errorMsg}". Please download the logs and {a_}send them to us{_a}, so we can help troubleshoot.
            i18n(
              v-else
              :args='{ a_: issuePageTag, _a: "</a>" }'
            ) If you encounter problems, please download the logs and {a_}send them to us{_a}.

          fieldset.c-filters
            .c-filters-inner
              legend.c-filters-legend Optional logs:
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='debug')
                i18n Debug
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='info')
                i18n Info
              label.checkbox
                input.input(type='checkbox' name='filter' v-model='form.filter' value='log')
                i18n Log

          fieldset.c-source(:aria-label='L("Source:")')
            .c-source-inner
              label.c-label
                i18n.c-source-legend Log source:
                .selectbox
                  select.select(v-model='form.source')
                    option(value='combined')
                      i18n Combined
                    option(value='browser')
                      i18n Browser
                    option(value='serviceworker')
                      i18n Service worker

          button-submit.is-small.c-download(@click='downloadOrShareLogs')
            template(v-if='ephemeral.useWebShare')
              i.icon-share-alt.is-prefix
              i18n Share
            template(v-else)
              i.icon-download.is-prefix
              i18n Download

          a(ref='linkDownload' hidden)

        banner-scoped.c-err-banner(ref='errBanner')

        textarea.textarea.c-logs(ref='textarea' rows='12' v-if='ephemeral.ready' readonly)
          | {{ prettyLogs }}
        div(v-else)
          i18n Loading

        i18n.link(tag='button' @click='openTroubleshooting') Troubleshooting

</template>

<script>
import sbp from '@sbp/sbp'
import { mapMutations } from 'vuex'
import { CAPTURED_LOGS } from '../../../../frontend/utils/events.js'
import { MAX_LOG_ENTRIES } from '../../../../frontend/utils/constants.js'
import safeLinkTag from '../../../../frontend/views/utils/safeLinkTag.js'
import { L, LError } from '../../../../frontend/common/common.js'
import { omit } from 'turtledash'
import BannerScoped from '../../../../frontend/views/components/banners/BannerScoped.vue'
import ButtonSubmit from '../../../../frontend/views/components/ButtonSubmit.vue'

export default ({
  name: 'AppLogs',
  components: {
    BannerScoped,
    ButtonSubmit
  },
  data () {
    return {
      form: {
        filter: this.$store.state.settings.appLogsFilter,
        source: 'combined'
      },
      ephemeral: {
        ready: false,
        logs: [],
        useWebShare: false,
        versionInfos: {
          loading: true,
          app_version: '',
          contracts_version: '',
          service_worker_version: ''
        }
      }
    }
  },
  created () {
    sbp('okTurtles.events/on', CAPTURED_LOGS, this.addLog)
    this.getLogs()
    this.loadVersionInfo()
  },
  mounted () {
    window.addEventListener('resize', this.checkWebShareAvailable)
    this.checkWebShareAvailable()
  },
  beforeDestroy () {
    sbp('okTurtles.events/off', CAPTURED_LOGS, this.addLog)
    window.removeEventListener('resize', this.checkWebShareAvailable)
  },
  watch: {
    'form.filter' (filter) {
      this.setAppLogsFilter(filter)
    },
    'form.source' (to, from) {
      if (to === from) return
      this.getLogs()
    },
    prettyLogs () {
      this.$nextTick(() => {
        if (this.$refs.textarea) {
          // Automatically scroll the textarea to the bottom.
          this.$refs.textarea.scrollTop = this.$refs.textarea.scrollHeight
        }
      })
    }
  },
  computed: {
    errorMsg () {
      return this.$route.query.errorMsg
    },
    prettyLogs () {
      return this.ephemeral.logs
        .filter(({ type }) => this.form.filter.includes(type))
        .map(({ type, source, msg, timestamp }) => \`\${timestamp} (\${source}) [\${type}] \${msg.map((x) => JSON.stringify(x)).join(' ')}\`)
        .join('\\n')
    },
    issuePageTag () {
      return safeLinkTag('ISSUE_PAGE')
    }
  },
  methods: {
    ...mapMutations([
      'setAppLogsFilter'
    ]),
    async loadVersionInfo () {
      let swVersion = ''

      try {
        swVersion = (await sbp('sw/version')).GI_GIT_VERSION.slice(1)
      } catch (e) {
        console.error('AppLogs.vue caught:', e)
      } finally {
        this.ephemeral.versionInfos = {
          loading: false,
          app_version: process.env.GI_VERSION.split('@')[0],
          contracts_version: process.env.CONTRACTS_VERSION,
          service_worker_version: swVersion
        }
      }
    },
    addLog (entry: Object) {
      if (entry) {
        if (this.form.source === 'browser' && entry.source !== 'browser') return
        if (this.form.source === 'serviceworker' && entry.source !== 'sw') return
        this.ephemeral.logs.push(entry)
        // prevent the amount of logs from growing beyond MAX_LOG_ENTRIES
        // plus 100 lines. If the log entries get too large, remove 100 excess
        // logs each time we reach that amount
        // NOTE: When viewing 'combined' logs, we allow for twice as many log
        // entries.
        const maxEntries = this.form.source === 'combined' ? 2 * MAX_LOG_ENTRIES : MAX_LOG_ENTRIES
        if (this.ephemeral.logs.length >= maxEntries + 100) {
          this.ephemeral.logs.splice(0, 100)
        }
      }
    },
    openTroubleshooting () {
      this.$router.push({
        query: {
          ...this.$route.query,
          tab: 'troubleshooting'
        }
      })
    },
    downloadOrShareLogs () {
      const actionType = this.ephemeral.useWebShare ? 'share' : 'download'
      const isDownload = actionType === 'download'

      try {
        const elLink = this.$refs.linkDownload
        const filename = 'gi_logs.json.txt'
        const mimeType = 'text/plain'

        const blob = new Blob([JSON.stringify({
        // Add instructions in case the user opens the file.
          _instructions: 'GROUP INCOME - Application Logs - Attach this file when reporting an issue: https://github.com/okTurtles/group-income/issues',
          ua: navigator.userAgent,
          version_info: omit(this.ephemeral.versionInfos, ['loading']),
          logs: this.ephemeral.logs
        }, undefined, 2)], { type: mimeType })

        if (isDownload) {
          if (!elLink) { return }

          const url = URL.createObjectURL(blob)
          elLink.href = url
          elLink.download = filename
          elLink.click()
          setTimeout(() => {
            elLink.href = '#'
            URL.revokeObjectURL(url)
          }, 0)
        } else {
          return navigator.share({
            files: [new File([blob], filename, { type: blob.type })],
            title: L('Application Logs')
          })
        }
      } catch (err) {
        const errorDisplay = isDownload
          ? L('Failed to download the app logs. {reportError}', LError(err))
          : L('Failed to share the app logs. {reportError}', LError(err))

        console.error(\`AppLogs.vue downloadOrShareLogs() '\${actionType}' action error:\`, err)
        this.$refs.errBanner.danger(errorDisplay)
      }
    },
    checkWebShareAvailable () {
      this.ephemeral.useWebShare = Boolean(navigator.share) &&
        window.matchMedia('(hover: none) and (pointer: coarse)').matches &&
        window.matchMedia('screen and (max-width: 1199px)').matches
    },
    getLogs () {
      // Log entries in chronological order (oldest to most recent).
      switch (this.form.source) {
        case 'combined': {
          this.ephemeral.ready = false
          const tempLogs = []
          this.ephemeral.logs = tempLogs
          sbp('swLogs/get').then((logs) => {
            // This check ensures that we're not working on a stale request
            // If the reference to this.ephemeral.logs has changed, it means
            // that we shouldn't proceed because a newer user action has occurred
            if (this.ephemeral.logs !== tempLogs) {
              return
            }
            const appLogs = sbp('appLogs/get')
            const combinedLogs = [...appLogs, ...logs].sort()
            this.ephemeral.logs = combinedLogs
            this.ephemeral.ready = true
          }).catch(err => {
            const errorDisplay = L('Error obtaining logs. {reportError}', LError(err))

            console.error('AppLogs.vue getLogs() error:', err)
            this.$refs.errBanner.danger(errorDisplay)
          })
          break
        }
        case 'browser': {
          this.ephemeral.logs = sbp('appLogs/get')
          this.ephemeral.ready = true
          break
        }
        case 'serviceworker': {
          this.ephemeral.ready = false
          const tempLogs = []
          this.ephemeral.logs = tempLogs
          sbp('swLogs/get').then((logs) => {
            // This check ensures that we're not working on a stale request
            // If the reference to this.ephemeral.logs has changed, it means
            // that we shouldn't proceed because a newer user action has occurred
            if (this.ephemeral.logs !== tempLogs) {
              return
            }
            this.ephemeral.logs = logs
            this.ephemeral.ready = true
          }).catch(err => {
            const errorDisplay = L('Error obtaining logs. {reportError}', LError(err))

            console.error('AppLogs.vue getLogs() error:', err)
            this.$refs.errBanner.danger(errorDisplay)
          })
          break
        }
      }
    }
  }
}: Object)
<\/script>

<style lang='scss' scoped>
@import "../../../../frontend/assets/style/_variables.scss";

.settings-container {
  width: 100%;

  @include desktop {
    padding-top: 1.5rem;
  }
}

.c-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.c-instructions {
  margin-bottom: 1.5rem;
  width: 100%;
}

.c-filters,
.c-source {
  width: 100%;
  flex-grow: 99; // to be wider than c-download

  &-inner {
    display: flex;
  }

  &-legend::after {
    content: "\\2003";
  }

  .checkbox:last-child::after {
    content: "\\2002";
  }
}

.c-source .c-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-download {
  flex-grow: 1;
}

.c-filters,
.c-source,
.c-download,
.c-logs {
  margin-bottom: 1rem;
}

.c-logs {
  font-family: "Monaco", "Menlo", "Courier", monospace;
  font-size: $size_5;
  white-space: pre;
}

.c-err-banner {
  margin-bottom: 1.5rem;

  ::v-deep .c-banner {
    margin-top: 0;
  }
}

.c-loader-container {
  position: relative;
  width: 100%;

  .loading-box {
    display: block;
    width: 100%;
    min-height: unset;

    &:first-child {
      height: 1.25rem;
      max-width: 20rem;
    }

    &:nth-child(2),
    &:nth-child(3) {
      height: 1.25rem;
    }

    &:nth-child(2) { max-width: 31.25rem; }

    &:last-child { height: 16.25rem; }
  }
}
</style>
`;
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (true) {
    let hook;
    if (false) {
      hook = function(context) {
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      component._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function(context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function(context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook !== void 0) {
      if (component.functional) {
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }
  return component;
}
function __vue_create_injector__() {
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;
    const group = isOldIE ? css.media || "default" : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);
      if (false) {
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
        code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
      }
      if (isOldIE) {
        style.element = style.element || document.querySelector("style[data-group=" + group + "]");
      }
      if (!style.element) {
        const head = document.head || document.getElementsByTagName("head")[0];
        const el = style.element = document.createElement("style");
        el.type = "text/css";
        if (css.media) el.setAttribute("media", css.media);
        if (isOldIE) {
          el.setAttribute("data-group", group);
          el.setAttribute("data-next-index", "0");
        }
        head.appendChild(el);
      }
      if (isOldIE) {
        index = parseInt(style.element.getAttribute("data-next-index"));
        style.element.setAttribute("data-next-index", index + 1);
      }
      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  };
}
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  __vue_create_injector__,
  void 0,
  void 0
);
var AppLogs_default = __vue_component__;
export {
  AppLogs_default as default
};
//# sourceMappingURL=AppLogs-BSYXK6JZ-cached.js.map
