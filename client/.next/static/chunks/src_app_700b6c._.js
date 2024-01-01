(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_700b6c._.js", {

"[project]/src/app/(entities)/company/api/getCompanyId.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getCompanyId": ()=>getCompanyId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
const getCompanyId = async (id)=>{
    const url = `${("TURBOPACK compile-time value", "https://europe-west1-wellbe-book-dev.cloudfunctions.net/")}getCompany?id=${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        // Log or return additional error information
        const errorBody = await response.text();
        console.error("Error fetching company data:", errorBody);
        throw new Error(`Error fetching company: ${response.status} - ${errorBody}`);
    }
    return response.json();
};

})()),
"[project]/src/app/(entities)/company/queries/useCompanyQuery.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCompanyQuery": ()=>useCompanyQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$api$2f$getCompanyId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/api/getCompanyId.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useCompanyQuery = (id)=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]({
        queryKey: [
            "company",
            id
        ],
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$api$2f$getCompanyId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyId"](id)
    });
};
_s(useCompanyQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});

})()),
"[project]/src/app/(modules)/appointment/[id]/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AppointmentID
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$queries$2f$useCompanyQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(entities)/company/queries/useCompanyQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/Layout/FlexColumn/index.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function AppointmentID({ params }) {
    _s();
    const { data: company } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$queries$2f$useCompanyQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyQuery"](params.id);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Layout$2f$FlexColumn$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "<[project]/src/app/(modules)/appointment/[id]/page.tsx>",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(AppointmentID, "wmgJvzRca4wro/AMTm7+rSPxLc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$entities$292f$company$2f$queries$2f$useCompanyQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyQuery"]
    ];
});
_c = AppointmentID;
var _c;
__turbopack_refresh__.register(_c, "AppointmentID");

})()),
}]);

//# sourceMappingURL=src_app_700b6c._.js.map