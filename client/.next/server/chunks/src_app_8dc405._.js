module.exports = {

"[project]/src/app/firebase.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Import the functions you need from the SDKs you need
__turbopack_esm__({
    "app": ()=>app,
    "auth": ()=>auth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript) {facade}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyB25YcCvvbCi47SJXpHvi8tyn7aCNRkUPs"),
    authDomain: ("TURBOPACK compile-time value", "wellbe-book-dev.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "wellbe-book-dev"),
    storageBucket: ("TURBOPACK compile-time value", "wellbe-book-dev.appspot.com"),
    messagingSenderId: ("TURBOPACK compile-time value", "214145781191"),
    appId: ("TURBOPACK compile-time value", "1:214145781191:web:013d3b2aa9073949235de2"),
    measurementId: "G-E14Y999ME1"
};
const app = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["initializeApp"](firebaseConfig);
const auth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["getAuth"](app);

})()),
"[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FlexColumn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function FlexColumn({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/FlexColumn/index.tsx>",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}

})()),
"[project]/src/app/_theme/fonts.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fonts": ()=>fonts
});
const fonts = {
    // Heading 1 / Medium / 48px
    heading1: {
        fontSize: "3rem",
        fontWeight: 500,
        lineHeight: "110%"
    },
    // Heading 2 / Medium / 40px
    heading2: {
        fontSize: "2.5rem",
        fontWeight: 500,
        lineHeight: "110%"
    },
    // Heading 3 / Medium / 32px
    heading3: {
        fontSize: "2rem",
        fontWeight: 500,
        lineHeight: "125%"
    },
    // Heading 3 / Bold / 32px
    heading3Bold: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "125%"
    },
    // Heading 4 / Medium / 24px
    heading4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: "130%"
    },
    // Heading 4 / Bold / 24px
    heading4Bold: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: "130%"
    },
    // Heading 5 / Medium / 22px
    heading5: {
        fontSize: "22px",
        fontWeight: 400,
        lineHeight: "135%"
    },
    // Heading 5 / Bold / 22px
    heading5Bold: {
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "130%"
    },
    // Heading 6 / Medium / 18px
    heading6: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: "135%"
    },
    // Body XLarge / SemiBold / 18px
    bodyXLSemiBold: {
        fontSize: "1.125rem",
        fontWeight: 700,
        lineHeight: "140%"
    },
    // Body XLarge / Medium / 18px
    bodyXLMedium: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: "140%"
    },
    // Body XLarge / Regular / 18px
    bodyXLRegular: {
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: "140%"
    },
    // Body Large / SemiBold / 16px
    bodyLSemiBold: {
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: "150%"
    },
    // Body Large / Medium / 16px
    bodyLMedium: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "150%"
    },
    // Body Large / Regular / 16px
    bodyLRegular: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "140%"
    },
    // Body Medium / SemiBold / 14px
    bodyMSemiBold: {
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: "150%"
    },
    // Body Medium / Medium / 14px
    bodyMMedium: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: "150%"
    },
    // Body Medium / Regular / 14px
    bodyMRegular: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "150%"
    },
    // Body Small / SemiBold / 12px
    bodySSemiBold: {
        fontSize: "0.75rem",
        fontWeight: 700,
        lineHeight: "150%"
    },
    // Body Small / Medium / 12px
    bodySMedium: {
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: "150%"
    },
    // Body Small / Regular / 12px
    bodySRegular: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: "150%"
    },
    // Body Small / Light / 12px
    bodySLight: {
        fontSize: "0.75rem",
        fontWeight: 300,
        lineHeight: "150%"
    },
    // Body XSmall / SemiBold / 10px
    bodyXSSemiBold: {
        fontSize: "0.625rem",
        fontWeight: 700,
        lineHeight: "150%"
    },
    // Body XSmall / Medium / 10px
    bodyXSMedium: {
        fontSize: "0.625rem",
        fontWeight: 500,
        lineHeight: "150%"
    },
    // Body XSmall / Regular / 10px
    bodyXSRegular: {
        fontSize: "0.625rem",
        fontWeight: 400,
        lineHeight: "150%"
    }
};

})()),
"[project]/src/app/_components/Buttons/PrimaryButton/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledPrimaryButton": ()=>StyledPrimaryButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/fonts.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const StyledPrimaryButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].bodyXLRegular,
    borderRadius: "12px",
    padding: "12px 16px",
    textTransform: "unset",
    boxShadow: "unset",
    minWidth: "138px"
});

})()),
"[project]/src/app/_components/Buttons/PrimaryButton/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PrimaryButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Buttons/PrimaryButton/styled.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function PrimaryButton({ title, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledPrimaryButton"], {
        color: "primary",
        variant: "contained",
        size: "large",
        ...props,
        children: title
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Buttons/PrimaryButton/index.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/AuthLayout/login/page.tsx [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/app/_layouts/AuthLayout/login/page.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator.js [app-ssr] (ecmascript)");
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
const COLOR_CARD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_GREY_MEDIUM, 0.1);
const COLOR_TEXT_SECONDARY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_BLACK, 0.6);
const COLOR_SECONDARY_LIGHTEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.8);
const COLOR_BORDER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.3);
const BORDER = `0.2px solid ${COLOR_BORDER}`;
const GLASS_MORPHISM = "background: rgba(255, 255, 255, 0.38); backdrop-filter: blur(10px);";

})()),
"[project]/src/app/_layouts/AuthLayout/components/Title/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Title
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Title({ title }) {
    const highlightWord = "Wellbe";
    const normalizedTitle = title.split(highlightWord);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        variant: "heading4Bold",
        textAlign: "center",
        children: normalizedTitle.map((part, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                children: [
                    part,
                    index < normalizedTitle.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PRIMARY_DARK"]
                        },
                        children: highlightWord
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/components/Title/index.tsx>",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "<[project]/src/app/_layouts/AuthLayout/components/Title/index.tsx>",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/src/app/_layouts/AuthLayout/components/Title/index.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/types.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ToggleAuthMethodEnum": ()=>ToggleAuthMethodEnum
});
let ToggleAuthMethodEnum;
(function(ToggleAuthMethodEnum) {
    ToggleAuthMethodEnum["LOG_IN"] = "log-in";
    ToggleAuthMethodEnum["SIGN_UP"] = "sign_up";
})(ToggleAuthMethodEnum || (ToggleAuthMethodEnum = {}));

})()),
"[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledToggleAuthMethod": ()=>StyledToggleAuthMethod,
    "StyledToggleItem": ()=>StyledToggleItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/ToggleButton/ToggleButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ToggleButtonGroup$2f$ToggleButtonGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/fonts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@emotion/react/dist/emotion-react.esm.js [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const StyledToggleAuthMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ToggleButtonGroup$2f$ToggleButtonGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  &.MuiToggleButtonGroup-root {
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_CARD"]};
    border: unset;
    box-shadow: unset;
    border-radius: 12px;
    width: 216px;
    height: 40px;
  }
`;
const StyledToggleItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  ${()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["css"]`
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].bodyLMedium};
    text-transform: capitalize;
    width: 100%;
    border: unset;
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SECONDARY"]};
    border-radius: 12px;
    height: 40px;

    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SECONDARY"]};
      color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_LIGHT"]};
    }
  `}
`;

})()),
"[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ToggleAuthMethod
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/types.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function ToggleAuthMethod({ value, handleChange }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledToggleAuthMethod"], {
        exclusive: true,
        value: value,
        onChange: handleChange,
        "aria-label": "Platform",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledToggleItem"], {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].LOG_IN,
                children: "Log in"
            }, void 0, false, {
                fileName: "<[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/index.tsx>",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledToggleItem"], {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].SIGN_UP,
                children: "Sign up"
            }, void 0, false, {
                fileName: "<[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/index.tsx>",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/index.tsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SignUp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Buttons/PrimaryButton/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/TextField/TextField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
function SignUp() {
    const onSignUp = (email, password)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["createUserWithEmailAndPassword"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], email, password);
    //       .then((userCredential) => {
    //         const user = userCredential.user;
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //       });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        width: "100%",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: {
                email: "",
                password: ""
            },
            onSubmit: (values)=>{
                onSignUp(values.email, values.password);
            },
            children: ({ values, handleChange, handleBlur, handleSubmit, isSubmitting })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        rowGap: "2.5rem",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                rowGap: "1rem",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        placeholder: "Email",
                                        type: "email",
                                        name: "email",
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.email
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                        name: "email",
                                        component: "div"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        placeholder: "Password",
                                        type: "password",
                                        name: "password",
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.password
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                        name: "password",
                                        component: "div"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Sign up",
                                disabled: isSubmitting,
                                type: "submit",
                                size: "large"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx>",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/AuthLayout/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AuthLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$views$2f$signup$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/views/signup/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/components/ToggleAuthMethod/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Typography$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript) {export default as Typography}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$Title$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/components/Title/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$views$2f$login$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/views/login/page.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
function AuthLayout() {
    const [authMethod, setAuthMethod] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].LOG_IN);
    //   const onSignOut = () =>
    //     signOut(auth)
    //       .then(() => {
    //         // Sign-out successful.
    //       })
    //       .catch((error) => {
    //         // An error happened.
    //       });
    const handleChange = (event, method)=>{
        setAuthMethod(method);
    };
    const headingTitle = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].LOG_IN]: "Let’s create your Wellbe account",
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].SIGN_UP]: "Welcome back to Wellbe"
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        p: "1rem",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                rowGap: "0.5rem",
                alignItems: "center",
                mb: "8rem",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Typography$7d$__["Typography"], {
                        variant: "bodyLRegular",
                        color: "secondary.light",
                        children: "Choose your authentication method"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: authMethod,
                        handleChange: handleChange
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                rowGap: "3rem",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$Title$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: headingTitle[authMethod]
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    authMethod === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].SIGN_UP && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$views$2f$signup$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                        lineNumber: 51,
                        columnNumber: 57
                    }, this),
                    authMethod === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$components$2f$ToggleAuthMethod$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleAuthMethodEnum"].LOG_IN && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$views$2f$login$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                        lineNumber: 52,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_layouts/AuthLayout/index.tsx>",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/PrivateLayout/components/TopBar/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledTopBar": ()=>StyledTopBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const StyledTopBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].aside`
  padding: 16px;
  width: 100%;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_WHITE"]};
  border-bottom: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BORDER"]};
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
`;

})()),
"[project]/src/app/_layouts/PrivateLayout/components/TopBar/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TopBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Typography$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript) {export default as Typography}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$TopBar$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/TopBar/styled.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function TopBar() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$TopBar$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledTopBar"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Typography$7d$__["Typography"], {
            variant: "heading5",
            children: "Wellbe"
        }, void 0, false, {
            fileName: "<[project]/src/app/_layouts/PrivateLayout/components/TopBar/index.tsx>",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_layouts/PrivateLayout/components/TopBar/index.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/PrivateLayout/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledContainer": ()=>StyledContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const StyledContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  justify-content: unset;
  height: 100vh;
  padding-bottom: 16px;
`;

})()),
"[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledNavBar": ()=>StyledNavBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const StyledNavBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav`
  padding: 1rem 28px;
  display: flex;
  justify-content: space-between;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SECONDARY_LIGHTEN"]};
  border-radius: 12px;

  box-shadow: 0px 2px 8px 0px ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SECONDARY_LIGHTEN"], 0.3)};
  backdrop-filter: blur(10px);

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;
`;

})()),
"[project]/src/app/_assets/icons/SearchIcon.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const SearchIcon = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"] })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: "26",
        height: "24",
        viewBox: "0 0 26 24",
        fill: "none",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                clipPath: "url(#clip0_92_465)",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M16.6458 14H15.8229L15.5312 13.73C16.5521 12.59 17.1667 11.11 17.1667 9.5C17.1667 5.91 14.1354 3 10.3958 3C6.65625 3 3.625 5.91 3.625 9.5C3.625 13.09 6.65625 16 10.3958 16C12.0729 16 13.6146 15.41 14.8021 14.43L15.0833 14.71V15.5L20.2917 20.49L21.8438 19L16.6458 14ZM10.3958 14C7.80208 14 5.70833 11.99 5.70833 9.5C5.70833 7.01 7.80208 5 10.3958 5C12.9896 5 15.0833 7.01 15.0833 9.5C15.0833 11.99 12.9896 14 10.3958 14Z",
                    fill: color
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
                    lineNumber: 8,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
                lineNumber: 7,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("clipPath", {
                    id: "clip0_92_465",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                        width: "25",
                        height: "24",
                        fill: "white",
                        transform: "translate(0.5)"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
                    lineNumber: 14,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_assets/icons/SearchIcon.tsx>",
        lineNumber: 6,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = SearchIcon;

})()),
"[project]/src/app/_assets/icons/ScheduleIcon.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const ScheduleIcon = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"] })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            d: "M19.1667 13.2H12.5V19.2H19.1667V13.2ZM17.8333 0V2.4H7.16667V0H4.5V2.4H3.16667C1.68667 2.4 0.513333 3.48 0.513333 4.8L0.5 21.6C0.5 22.92 1.68667 24 3.16667 24H21.8333C23.3 24 24.5 22.92 24.5 21.6V4.8C24.5 3.48 23.3 2.4 21.8333 2.4H20.5V0H17.8333ZM21.8333 21.6H3.16667V8.4H21.8333V21.6Z",
            fill: color
        }, void 0, false, {
            fileName: "<[project]/src/app/_assets/icons/ScheduleIcon.tsx>",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_assets/icons/ScheduleIcon.tsx>",
        lineNumber: 6,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = ScheduleIcon;

})()),
"[project]/src/app/_assets/icons/ProfileIcon.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const ProfileIcon = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"] })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            d: "M12.5 0C5.876 0 0.5 5.376 0.5 12C0.5 18.624 5.876 24 12.5 24C19.124 24 24.5 18.624 24.5 12C24.5 5.376 19.124 0 12.5 0ZM12.5 3.6C14.492 3.6 16.1 5.208 16.1 7.2C16.1 9.192 14.492 10.8 12.5 10.8C10.508 10.8 8.9 9.192 8.9 7.2C8.9 5.208 10.508 3.6 12.5 3.6ZM12.5 20.64C9.5 20.64 6.848 19.104 5.3 16.776C5.336 14.388 10.1 13.08 12.5 13.08C14.888 13.08 19.664 14.388 19.7 16.776C18.152 19.104 15.5 20.64 12.5 20.64Z",
            fill: color
        }, void 0, false, {
            fileName: "<[project]/src/app/_assets/icons/ProfileIcon.tsx>",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_assets/icons/ProfileIcon.tsx>",
        lineNumber: 6,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = ProfileIcon;

})()),
"[project]/src/app/_assets/icons/HomeIcon.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const HomeIcon = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"] })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        width: "26",
        height: "24",
        viewBox: "0 0 26 24",
        fill: "none",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            d: "M10.4 24V15.5294H15.6V24H22.1V12.7059H26L13 0L0 12.7059H3.9V24H10.4Z",
            fill: color
        }, void 0, false, {
            fileName: "<[project]/src/app/_assets/icons/HomeIcon.tsx>",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_assets/icons/HomeIcon.tsx>",
        lineNumber: 6,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = HomeIcon;

})()),
"[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/constants.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "navMap": ()=>navMap
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/HomeIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$ProfileIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/ProfileIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$ScheduleIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/ScheduleIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_assets/icons/SearchIcon.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const navMap = [
    {
        name: "Home",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        href: "/"
    },
    {
        name: "Search",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$SearchIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        href: "/search"
    },
    {
        name: "Schedule",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$ScheduleIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        href: "/schedule"
    },
    {
        name: "Profile",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_assets$2f$icons$2f$ProfileIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        href: "/profile"
    }
];

})()),
"[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledNavItem": ()=>StyledNavItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const StyledNavItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  text-decoration: none;
  color: unset;
`;

})()),
"[project]/src/app/_components/Layout/FlexCenter/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FlexCenter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function FlexCenter({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/FlexCenter/index.tsx>",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}

})()),
"[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>NavItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexCenter/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function NavItem({ name, href, Icon }) {
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"]();
    const isActiveLink = pathname === href;
    const color = isActiveLink ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PRIMARY"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledNavItem"], {
        href: href,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexCenter$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                    color: color
                }, void 0, false, {
                    fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx>",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "bodySRegular",
                color: color,
                children: name
            }, void 0, false, {
                fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx>",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>NavigationBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/components/NavItem/constants.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/styled.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function NavigationBar() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledNavBar"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navMap"].map((navItem)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$components$2f$NavItem$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...navItem,
                key: navItem.href,
                __source: {
                    fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/index.tsx>",
                    lineNumber: 9,
                    columnNumber: 9
                },
                __self: this
            }))
    }, void 0, false, {
        fileName: "<[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/index.tsx>",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_layouts/PrivateLayout/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PrivateLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/NavigationBar/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$TopBar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/components/TopBar/index.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function PrivateLayout({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledContainer"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$TopBar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/_layouts/PrivateLayout/index.tsx>",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$components$2f$NavigationBar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/_layouts/PrivateLayout/index.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_layouts/PrivateLayout/index.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/(entities)/user/store/useUserStore.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useUserStore": ()=>useUserStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useUserStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"]((set)=>({
        firebaseUser: false,
        user: null,
        setUser: (user)=>set({
                user
            }),
        setFirebaseUser: (firebaseUser)=>set({
                firebaseUser
            })
    }));

})()),
"[project]/src/app/(entities)/auth/hooks/useAuthUser.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useAuthUser": ()=>useAuthUser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$user$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/user/store/useUserStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/firebase.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const useAuthUser = ()=>{
    const { setFirebaseUser } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$user$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["onAuthStateChanged"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (user)=>setFirebaseUser(user));
    }, []);
};

})()),
"[project]/src/app/_layouts/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>MainLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-query/es/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/react-query/es/core/index.js [app-ssr] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/react-query/es/react/index.js [app-ssr] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$user$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/user/store/useUserStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$auth$2f$hooks$2f$useAuthUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/auth/hooks/useAuthUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/PrivateLayout/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_layouts/AuthLayout/index.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$core$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["QueryClient"]();
function MainLayout({ children }) {
    const { firebaseUser } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$user$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    console.log(firebaseUser, "firebaseUser");
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$auth$2f$hooks$2f$useAuthUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthUser"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$facade$7d$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            firebaseUser && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$PrivateLayout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/app/_layouts/index.tsx>",
                lineNumber: 22,
                columnNumber: 24
            }, this),
            firebaseUser === null && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_layouts$2f$AuthLayout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/_layouts/index.tsx>",
                lineNumber: 23,
                columnNumber: 33
            }, this),
            firebaseUser === false && "Loading..."
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_layouts/index.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}

})()),

};

//# sourceMappingURL=src_app_8dc405._.js.map