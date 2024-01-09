(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_fe7413._.js", {

"[project]/src/app/_global/routes.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "APPOINTMENT_DETAILS_PAGE_PATH": ()=>APPOINTMENT_DETAILS_PAGE_PATH,
    "COMPANY_DETAILS_PAGE_PATH": ()=>COMPANY_DETAILS_PAGE_PATH,
    "HOME_PAGE_PATH": ()=>HOME_PAGE_PATH,
    "PROFILE_PAGE_PATH": ()=>PROFILE_PAGE_PATH,
    "SCHEDULE_PAGE_PATH": ()=>SCHEDULE_PAGE_PATH,
    "SEARCH_PAGE_PATH": ()=>SEARCH_PAGE_PATH
});
const HOME_PAGE_PATH = "/";
const SEARCH_PAGE_PATH = "/search";
const SCHEDULE_PAGE_PATH = "/schedule";
const PROFILE_PAGE_PATH = "/profile";
const APPOINTMENT_DETAILS_PAGE_PATH = "/appointment/id";
const COMPANY_DETAILS_PAGE_PATH = "/company/id";

})()),
"[project]/src/app/_global/getStorageDownloadLink.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * percent sign (%) is replaced with %25 (which is the URL-encoded version of %)
 * and any forward slash (/) is replaced with %2F (which is the URL-encoded version of /)
 */ __turbopack_esm__({
    "default": ()=>getStorageDownloadLink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
const getUrlEncoded = (input)=>{
    return input.replace(/%/g, "%25").replace(/\//g, "%2F");
};
function getStorageDownloadLink(path) {
    if (!path) {
        return "";
    }
    const encodedPath = getUrlEncoded(path);
    const bucketURL = ("TURBOPACK compile-time value", "wellbe-book-dev.appspot.com") || "";
    const bucket = getUrlEncoded(bucketURL);
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media`;
}

})()),
"[project]/src/app/_components/CompanyCard/constants.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "COMPANY_CARD_HEIGH": ()=>COMPANY_CARD_HEIGH,
    "COMPANY_CARD_WIDTH": ()=>COMPANY_CARD_WIDTH
});
const COMPANY_CARD_WIDTH = 178;
const COMPANY_CARD_HEIGH = 172;

})()),
"[project]/src/app/_components/Layout/FlexCenter/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FlexCenter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  display: flex;
  justify-content: center;
  align-items: center;
`;
_c = Component;
function FlexCenter({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/FlexCenter/index.tsx>",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = FlexCenter;
var _c, _c1;
__turbopack_refresh__.register(_c, "Component");
__turbopack_refresh__.register(_c1, "FlexCenter");

})()),
"[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FlexColumn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
_c = Component;
function FlexColumn({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/FlexColumn/index.tsx>",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = FlexColumn;
var _c, _c1;
__turbopack_refresh__.register(_c, "Component");
__turbopack_refresh__.register(_c1, "FlexColumn");

})()),
"[project]/src/app/_components/Layout/Flex/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Flex
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  display: flex;
`;
_c = Component;
function Flex({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/Flex/index.tsx>",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c1 = Flex;
var _c, _c1;
__turbopack_refresh__.register(_c, "Component");
__turbopack_refresh__.register(_c1, "Flex");

})()),
"[project]/src/app/_theme/colors.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BORDER": ()=>BORDER,
    "COLOR_BLACK": ()=>COLOR_BLACK,
    "COLOR_BORDER": ()=>COLOR_BORDER,
    "COLOR_CARD": ()=>COLOR_CARD,
    "COLOR_ERROR": ()=>COLOR_ERROR,
    "COLOR_GREY_LIGHT": ()=>COLOR_GREY_LIGHT,
    "COLOR_GREY_MEDIUM": ()=>COLOR_GREY_MEDIUM,
    "COLOR_INFO": ()=>COLOR_INFO,
    "COLOR_PRIMARY": ()=>COLOR_PRIMARY,
    "COLOR_PRIMARY_DARK": ()=>COLOR_PRIMARY_DARK,
    "COLOR_SECONDARY": ()=>COLOR_SECONDARY,
    "COLOR_SECONDARY_LIGHTEN": ()=>COLOR_SECONDARY_LIGHTEN,
    "COLOR_SUCCESS": ()=>COLOR_SUCCESS,
    "COLOR_TEXT_SECONDARY": ()=>COLOR_TEXT_SECONDARY,
    "COLOR_WARN": ()=>COLOR_WARN,
    "COLOR_WHITE": ()=>COLOR_WHITE,
    "GLASS_MORPHISM": ()=>GLASS_MORPHISM
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
const COLOR_WHITE = "#FFFFFF";
const COLOR_BLACK = "#000000";
const COLOR_PRIMARY = "#FF962F";
const COLOR_PRIMARY_DARK = "#DC6C1D";
const COLOR_SECONDARY = "#222222";
const COLOR_ERROR = "#DB0000";
const COLOR_SUCCESS = "#88FD2C";
const COLOR_INFO = "#64D1FF";
const COLOR_WARN = "#FFE352";
const COLOR_GREY_LIGHT = "#F4F4F4";
const COLOR_GREY_MEDIUM = "#D9D9D9";
const COLOR_CARD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"](COLOR_GREY_MEDIUM, 0.1);
_c = COLOR_CARD;
const COLOR_TEXT_SECONDARY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"](COLOR_BLACK, 0.6);
_c1 = COLOR_TEXT_SECONDARY;
const COLOR_SECONDARY_LIGHTEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.8);
_c2 = COLOR_SECONDARY_LIGHTEN;
const COLOR_BORDER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.2);
_c3 = COLOR_BORDER;
const BORDER = `0.2px solid ${COLOR_BORDER}`;
const GLASS_MORPHISM = "background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);";
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "COLOR_CARD");
__turbopack_refresh__.register(_c1, "COLOR_TEXT_SECONDARY");
__turbopack_refresh__.register(_c2, "COLOR_SECONDARY_LIGHTEN");
__turbopack_refresh__.register(_c3, "COLOR_BORDER");

})()),
"[project]/src/app/_components/CompanyCard/styled.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledCompanyBottom": ()=>StyledCompanyBottom,
    "StyledCompanyCard": ()=>StyledCompanyCard,
    "StyledFavorite": ()=>StyledFavorite,
    "StyledRate": ()=>StyledRate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$Flex$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/Flex/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexCenter/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/CompanyCard/constants.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const StyledCompanyCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$Flex$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  border-radius: 12px;
  position: relative;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"]};
  /* width: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_CARD_WIDTH"]}px; */
  height: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_CARD_HEIGH"]}px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    width: 100% !important;
  }
`;
const StyledCompanyBottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$Flex$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  padding: 0.5rem 0.75rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS_MORPHISM"]};

  border-radius: 0 0 12px 12px;
`;
const StyledRate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS_MORPHISM"]};

  border-radius: 12px 0 12px 0;

  span {
    text-align: center;
  }
`;
const StyledFavorite = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
  max-width: 42px;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;

  height: 52px;
  width: 52px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS_MORPHISM"]};

  border-radius: 0 12px 0 12px;
`;

})()),
"[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const FavoriteOutlinedIcon = ({ size = 18, color = " #DB0035" })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: size,
        height: size,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                clipPath: "url(#clip0_162_509)",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M12.375 2.25C11.07 2.25 9.8175 2.8575 9 3.8175C8.1825 2.8575 6.93 2.25 5.625 2.25C3.315 2.25 1.5 4.065 1.5 6.375C1.5 9.21 4.05 11.52 7.9125 15.03L9 16.0125L10.0875 15.0225C13.95 11.52 16.5 9.21 16.5 6.375C16.5 4.065 14.685 2.25 12.375 2.25ZM9.075 13.9125L9 13.9875L8.925 13.9125C5.355 10.68 3 8.5425 3 6.375C3 4.875 4.125 3.75 5.625 3.75C6.78 3.75 8.6025 4.9725 9 6C9.39 4.9725 11.22 3.75 12.375 3.75C13.875 3.75 15 4.875 15 6.375C15 8.5425 12.645 10.68 9.075 13.9125Z",
                    fill: color
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
                    lineNumber: 10,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("clipPath", {
                    id: "clip0_162_509",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                        width: size,
                        height: size,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
                    lineNumber: 16,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx>",
        lineNumber: 8,
        columnNumber: 3
    }, this);
_c = FavoriteOutlinedIcon;
const __TURBOPACK__default__export__ = FavoriteOutlinedIcon;
var _c;
__turbopack_refresh__.register(_c, "FavoriteOutlinedIcon");

})()),
"[project]/src/app/_assets/icons/FavoriteIcon.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const FavoriteIcon = ({ size = 18, color = " #DB0035" })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: size,
        height: size,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                clipPath: "url(#clip0_162_410)",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M9 16.0125L7.9125 15.0225C4.05 11.52 1.5 9.21 1.5 6.375C1.5 4.065 3.315 2.25 5.625 2.25C6.93 2.25 8.1825 2.8575 9 3.8175C9.8175 2.8575 11.07 2.25 12.375 2.25C14.685 2.25 16.5 4.065 16.5 6.375C16.5 9.21 13.95 11.52 10.0875 15.03L9 16.0125Z",
                    fill: color
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
                    lineNumber: 7,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("clipPath", {
                    id: "clip0_162_410",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                        width: size,
                        height: size,
                        fill: "white"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
                    lineNumber: 13,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_assets/icons/FavoriteIcon.tsx>",
        lineNumber: 5,
        columnNumber: 3
    }, this);
_c = FavoriteIcon;
const __TURBOPACK__default__export__ = FavoriteIcon;
var _c;
__turbopack_refresh__.register(_c, "FavoriteIcon");

})()),
"[project]/src/app/_components/Buttons/FavoriteButton/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FavoriteButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$FavoriteIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/FavoriteIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$FavoriteOutlinedIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/FavoriteOutlinedIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexCenter/index.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function FavoriteButton() {
    const isFavorite = true;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClick: ()=>"mock",
        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$FavoriteIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: 22
        }, void 0, false, {
            fileName: "<[project]/src/app/_components/Buttons/FavoriteButton/index.tsx>",
            lineNumber: 12,
            columnNumber: 9
        }, this) : ("TURBOPACK unreachable", undefined)
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Buttons/FavoriteButton/index.tsx>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = FavoriteButton;
var _c;
__turbopack_refresh__.register(_c, "FavoriteButton");

})()),
"[project]/src/app/_components/CompanyCard/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CompanyCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/CompanyCard/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$FavoriteButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Buttons/FavoriteButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/CompanyCard/styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_global$2f$getStorageDownloadLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_global/getStorageDownloadLink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_global$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_global/routes.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
function CompanyCard({ company }) {
    _s();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const { name, rate, opinion, pictureUrl, id } = company;
    const img = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_global$2f$getStorageDownloadLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](pictureUrl);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledCompanyCard"], {
        onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_global$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_DETAILS_PAGE_PATH"].replace("id", id)),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: img,
                alt: name,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_CARD_WIDTH"],
                height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_CARD_HEIGH"]
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledCompanyBottom"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "bodyMMedium",
                    children: name
                }, void 0, false, {
                    fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledRate"], {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "bodyMSemiBold",
                        children: rate.toFixed(2)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "bodyXSRegular",
                        color: "text.secondary",
                        children: [
                            opinion,
                            " reviews"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$CompanyCard$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledFavorite"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$FavoriteButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_components/CompanyCard/index.tsx>",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(CompanyCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CompanyCard;
var _c;
__turbopack_refresh__.register(_c, "CompanyCard");

})()),
}]);

//# sourceMappingURL=src_app_fe7413._.js.map