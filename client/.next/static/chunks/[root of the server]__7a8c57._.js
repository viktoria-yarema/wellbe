(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__7a8c57._.js", {

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
const COLOR_BORDER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.3);
_c3 = COLOR_BORDER;
const BORDER = `0.2px solid ${COLOR_BORDER}`;
const GLASS_MORPHISM = "background: rgba(255, 255, 255, 0.38); backdrop-filter: blur(10px);";
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "COLOR_CARD");
__turbopack_refresh__.register(_c1, "COLOR_TEXT_SECONDARY");
__turbopack_refresh__.register(_c2, "COLOR_SECONDARY_LIGHTEN");
__turbopack_refresh__.register(_c3, "COLOR_BORDER");

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
"[next]/internal/font/google/open_sans_3027fc90.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "className__open_sans_3027fc90__5372f86f",
});

})()),
"[next]/internal/font/google/open_sans_3027fc90.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/open_sans_3027fc90.module.css [app-client] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Open_Sans_3027fc', '__Open_Sans_Fallback_3027fc'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/src/app/_theme/themeOptions.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "themeOptions": ()=>themeOptions
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/open_sans_3027fc90.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/fonts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const themeOptions = {
    breakpoints: {
        values: {
            xs: 374,
            sm: 680,
            md: 1000,
            lg: 1280,
            xl: 1920
        }
    },
    spacing: [
        0,
        4,
        8,
        16,
        18,
        24,
        32,
        64
    ],
    typography: {
        fontFamily: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$open_sans_3027fc90$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fonts"]
    },
    palette: {
        background: {
            default: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_WHITE"]
        },
        text: {
            primary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_SECONDARY"],
            secondary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TEXT_SECONDARY"]
        },
        primary: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARY"],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARY_DARK"]
        },
        secondary: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_SECONDARY"],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_SECONDARY_LIGHTEN"]
        },
        error: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ERROR"]
        },
        warning: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_WARN"]
        },
        success: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_SUCCESS"]
        },
        card: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_CARD"]
        },
        natural: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_GREY_MEDIUM"],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_GREY_LIGHT"]
        },
        white: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_WHITE"]
        },
        black: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"]
        }
    }
};

})()),
"[project]/src/app/_theme/ThemeRegister.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ThemeRegistry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__createTheme$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) {export default as createTheme}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ThemeProvider$7d$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript) {export default as ThemeProvider}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$themeOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/themeOptions.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__createTheme$7d$__["createTheme"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$themeOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeOptions"]);
function ThemeRegistry({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ThemeProvider$7d$__["ThemeProvider"], {
        theme: theme,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/_theme/ThemeRegister.tsx>",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_theme/ThemeRegister.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ThemeRegistry;
var _c;
__turbopack_refresh__.register(_c, "ThemeRegistry");

})()),
}]);

//# sourceMappingURL=[root of the server]__7a8c57._.js.map