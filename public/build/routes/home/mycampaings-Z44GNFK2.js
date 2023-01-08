import {
  pastbrandcard_default
} from "/build/_shared/chunk-OA4HBTDH.js";
import {
  CampaginCard
} from "/build/_shared/chunk-WIIM37XS.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  FontAwesomeIcon,
  faIdBadge
} from "/build/_shared/chunk-4MAHYGKM.js";
import "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/mycampaings.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyCampaigns = () => {
  const [completed, setCompleted] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 15,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block md:grow" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setCompleted(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { height: "h-12", text: "Active campaigns", fontwidth: "font-bold", background: `${completed ? "bg-gray-300" : "bg-[#7CFF01]"}`, textColor: `text-black}` }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 21,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 20,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 23,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setCompleted(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { height: "h-12", text: "Finished campaigns", fontwidth: "font-bold", background: `${completed ? "bg-[#7CFF01]" : "bg-gray-300"}`, textColor: "text-black" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 25,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 24,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: completed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompletedCampaigns, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 32,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActiveCampaign, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};
var mycampaings_default = MyCampaigns;
var ActiveCampaign = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faIdBadge, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 50,
        columnNumber: 99
      }, this),
      " New Campaign "
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/powerfitgym.jpg", name: "Power Fit Gym" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/szechuan_restaurant.jpg", name: "Szechuan Restaurant" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/theburgershop.jpg", name: "Theburgershop" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};
var CompletedCampaigns = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 66,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
};
export {
  mycampaings_default as default
};
//# sourceMappingURL=/build/routes/home/mycampaings-Z44GNFK2.js.map
