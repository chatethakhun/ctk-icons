"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/icons/index.ts
var index_exports = {};
__export(index_exports, {
  FileCheckIcon: () => FileCheckIcon_default,
  SettingsIcon: () => SettingsIcon_default
});
module.exports = __toCommonJS(index_exports);

// src/components/icons/FileCheckIcon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var SvgFileCheckIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 20 21",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fill: "#606876",
        d: "M16.945 13.028a.667.667 0 0 1 .943.943l-4 4a.67.67 0 0 1-.894.045l-.049-.045-1.833-1.833a.667.667 0 0 1 .943-.943l1.361 1.362zm-7.861-1.194a.667.667 0 0 1 0 1.332h-3a.667.667 0 0 1 0-1.332zM14.917 10V4.5c0-.736-.597-1.333-1.334-1.333h-9c-.736 0-1.333.597-1.333 1.333v12c0 .736.597 1.334 1.334 1.334h4a.666.666 0 1 1 0 1.333h-4A2.667 2.667 0 0 1 1.917 16.5v-12a2.667 2.667 0 0 1 2.667-2.666h9A2.667 2.667 0 0 1 16.25 4.5V10a.667.667 0 0 1-1.333 0m-2.833-1.167a.667.667 0 0 1 0 1.334h-6a.667.667 0 0 1 0-1.334zm0-3a.667.667 0 0 1 0 1.333h-6a.667.667 0 0 1 0-1.333z"
      }
    )
  }
);
var FileCheckIcon_default = SvgFileCheckIcon;

// src/components/icons/SettingsIcon.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var SvgSettingsIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 23 22",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          stroke: "#606876",
          strokeWidth: 1.4,
          d: "M13.037 3.957c-.392-1.61-2.682-1.61-3.074 0a1.58 1.58 0 0 1-2.357.977c-1.415-.862-3.034.757-2.172 2.172a1.58 1.58 0 0 1-.977 2.359c-1.61.39-1.61 2.68 0 3.07a1.58 1.58 0 0 1 .977 2.36c-.862 1.414.757 3.033 2.172 2.171a1.58 1.58 0 0 1 2.358.977c.391 1.61 2.682 1.61 3.072 0a1.58 1.58 0 0 1 2.358-.977c1.415.862 3.034-.757 2.172-2.172a1.58 1.58 0 0 1 .977-2.358c1.61-.391 1.61-2.682 0-3.071a1.58 1.58 0 0 1-.977-2.359c.862-1.415-.757-3.034-2.172-2.172a1.58 1.58 0 0 1-2.358-.976z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          stroke: "#606876",
          strokeWidth: 1.4,
          d: "M13.333 11a1.833 1.833 0 1 1-3.666 0 1.833 1.833 0 0 1 3.666 0Z"
        }
      )
    ]
  }
);
var SettingsIcon_default = SvgSettingsIcon;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileCheckIcon,
  SettingsIcon
});
