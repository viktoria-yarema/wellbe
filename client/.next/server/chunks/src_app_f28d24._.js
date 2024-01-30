module.exports = {

"[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BORDER": ()=>BORDER,
    "COLOR_BLACK": ()=>COLOR_BLACK,
    "COLOR_BLUE_GREY": ()=>COLOR_BLUE_GREY,
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
const COLOR_BLUE_GREY = "#AAC4E7";
const COLOR_CARD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_GREY_MEDIUM, 0.1);
const COLOR_TEXT_SECONDARY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_BLACK, 0.6);
const COLOR_SECONDARY_LIGHTEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.8);
const COLOR_BORDER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"](COLOR_SECONDARY, 0.2);
const BORDER = `0.2px solid ${COLOR_BORDER}`;
const GLASS_MORPHISM = "background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);";

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
"[project]/src/app/_components/TabPanel/styled.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledTab": ()=>StyledTab,
    "StyledTabs": ()=>StyledTabs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/fonts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_theme/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tab/Tab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tabs/Tabs.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const StyledTab = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"].bodyMRegular,
    borderRadius: "8px",
    padding: "4px 12px",
    boxShadow: "unset",
    textTransform: "unset",
    minHeight: "32px",
    minWidth: "unset",
    "&.Mui-selected": {
        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SECONDARY"],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_WHITE"],
        border: "unset"
    },
    border: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BORDER"],
    boxSizing: "border-box"
});
const StyledTabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  .MuiTabs-indicator {
    display: none;
  }

  .MuiTabs-flexContainer {
    column-gap: 12px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.MuiTabs-root {
    min-height: unset;
  }
`;

})()),
"[project]/src/app/_components/Layout/Flex/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Flex
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
`;
function Flex({ children, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/Layout/Flex/index.tsx>",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}

})()),
"[project]/src/app/_components/TabPanel/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TabPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$Flex$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/Flex/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$TabPanel$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/TabPanel/styled.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function TabPanel({ tabs, activeTab, setActiveTab }) {
    const handleChange = (event, newValue)=>{
        setActiveTab(newValue);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$Flex$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$TabPanel$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledTabs"], {
            value: activeTab,
            onChange: handleChange,
            children: tabs.map((tab)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$TabPanel$2f$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledTab"], {
                    label: tab.label,
                    value: tab.value
                }, tab.label, false, {
                    fileName: "<[project]/src/app/_components/TabPanel/index.tsx>",
                    lineNumber: 29,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "<[project]/src/app/_components/TabPanel/index.tsx>",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/TabPanel/index.tsx>",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/(entities)/company/types.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CompanyScheduleVariant": ()=>CompanyScheduleVariant,
    "CompanyTabs": ()=>CompanyTabs,
    "SocialMediaVariant": ()=>SocialMediaVariant
});
let CompanyTabs;
(function(CompanyTabs) {
    CompanyTabs["GENERAL"] = "General";
    CompanyTabs["SERVICES"] = "Services";
    CompanyTabs["PORTFOLIO"] = "Portfolio";
    CompanyTabs["REVIEWS"] = "Reviews";
})(CompanyTabs || (CompanyTabs = {}));
let SocialMediaVariant;
(function(SocialMediaVariant) {
    SocialMediaVariant["FACEBOOK"] = "facebook";
    SocialMediaVariant["INSTAGRAM"] = "instagram";
    SocialMediaVariant["TIK_TOK"] = "tiktok";
    SocialMediaVariant["WHATS_APP"] = "whatsApp";
    SocialMediaVariant["TELEGRAM"] = "telegram";
})(SocialMediaVariant || (SocialMediaVariant = {}));
let CompanyScheduleVariant;
(function(CompanyScheduleVariant) {
    CompanyScheduleVariant["MONDAY"] = "monday";
    CompanyScheduleVariant["TUESDAY"] = "tuesday";
    CompanyScheduleVariant["WEDNESDAY"] = "wednesday";
    CompanyScheduleVariant["THURSDAY"] = "thursday";
    CompanyScheduleVariant["FRIDAY"] = "friday";
    CompanyScheduleVariant["SATURDAY"] = "saturday";
    CompanyScheduleVariant["SUNDAY"] = "sunday";
})(CompanyScheduleVariant || (CompanyScheduleVariant = {}));

})()),
"[project]/src/app/(entities)/company/store/useCompanyStore.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCompanyStore": ()=>useCompanyStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/types.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useCompanyStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"]((set)=>({
        tab: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyTabs"].SERVICES,
        setTab: (tab)=>set({
                tab
            })
    }));

})()),
"[project]/src/app/(entities)/company/contstants.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "companyTabsLabels": ()=>companyTabsLabels
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/types.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const companyTabsLabels = [
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyTabs"].SERVICES,
        label: "Services"
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyTabs"].REVIEWS,
        label: "Reviews"
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyTabs"].GENERAL,
        label: "General info"
    },
    {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyTabs"].PORTFOLIO,
        label: "Portfolio"
    }
];

})()),
"[project]/src/app/(modules)/company/[id]/components/Tabs/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Tabs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$contstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/contstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$store$2f$useCompanyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/store/useCompanyStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$TabPanel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/TabPanel/index.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function Tabs() {
    const { tab, setTab } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$store$2f$useCompanyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompanyStore"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$TabPanel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        tabs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$contstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyTabsLabels"],
        activeTab: tab,
        setActiveTab: setTab
    }, void 0, false, {
        fileName: "<[project]/src/app/(modules)/company/[id]/components/Tabs/index.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),

};

//# sourceMappingURL=src_app_f28d24._.js.map