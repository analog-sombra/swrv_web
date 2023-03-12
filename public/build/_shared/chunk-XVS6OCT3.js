import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  Link
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/utils/campagincard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CampaginCard = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 24,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
      "Category : ",
      props.category
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: props.weburl }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[1px] bg-black my-2" }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Budget" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center w-32 overflow-x-scroll no-scrollbar", children: props.platforms.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 shrink-0 mx-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val, alt: "error", className: "rounded-full w-8 h-8" }, void 0, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 41,
          columnNumber: 41
        }, this) }, index, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 40,
          columnNumber: 37
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
        props.maxval,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/utils/campagincard.tsx",
          lineNumber: 49,
          columnNumber: 101
        }, this),
        props.currency,
        " / post"
      ] }, void 0, true, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/campaigns/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
};

export {
  CampaginCard
};
//# sourceMappingURL=/build/_shared/chunk-XVS6OCT3.js.map
