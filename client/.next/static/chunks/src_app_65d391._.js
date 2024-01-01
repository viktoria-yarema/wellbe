(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_65d391._.js", {

"[project]/src/app/firebase.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Import the functions you need from the SDKs you need
__turbopack_esm__({
    "app": ()=>app,
    "auth": ()=>auth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
const app = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$facade$7d$__["initializeApp"](firebaseConfig);
const auth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$facade$7d$__["getAuth"](app);

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
"[project]/src/app/_theme/fonts.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/app/_components/Buttons/PrimaryButton/styled.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledPrimaryButton": ()=>StyledPrimaryButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/fonts.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const StyledPrimaryButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fonts"].bodyXLRegular,
    borderRadius: "12px",
    padding: "12px 16px",
    textTransform: "unset",
    boxShadow: "unset",
    minWidth: "138px"
});

})()),
"[project]/src/app/_components/Buttons/PrimaryButton/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PrimaryButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Buttons/PrimaryButton/styled.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function PrimaryButton({ title, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Buttons$2f$PrimaryButton$2f$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledPrimaryButton"], {
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
_c = PrimaryButton;
var _c;
__turbopack_refresh__.register(_c, "PrimaryButton");

})()),
"[project]/src/app/(modules)/(auth)/signup/page.tsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/app/(modules)/(auth)/signup/page.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
}]);

//# sourceMappingURL=src_app_65d391._.js.map