import {
  es_default
} from "/build/_shared/chunk-CAUJ6DTL.js";
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

// app/routes/home/favourite.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Favourite = () => {
  const [myfavBrand, setMyfavBrand] = es_default("favbrand", {
    defaultValue: []
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Favourite brands" }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 15,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 16,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    myfavBrand.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-slate-900", children: "You have no favorite brands." }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 21,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 20,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white rounded-xl shadow-xl p-6 my-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-slate-900", children: [
          "Found : ",
          myfavBrand.length
        ] }, void 0, true, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 26,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 27,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-lg text-center bg-red-500 py-1 px-2 text-white font-bold rounded-md", onClick: () => {
          setMyfavBrand([]);
        }, children: "Clear All" }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 29,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 28,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 25,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: myfavBrand.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FavBrandCard, { id: val.id, name: val.name, image: val.logo }, void 0, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 37,
          columnNumber: 45
        }, this) }, index, false, {
          fileName: "app/routes/home/favourite.tsx",
          lineNumber: 36,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};
var favourite_default = Favourite;
var FavBrandCard = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, false, {
        fileName: "app/routes/home/favourite.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/brand/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 70,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/favourite.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/favourite.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
};
export {
  favourite_default as default
};
//# sourceMappingURL=/build/routes/home/favourite-3HUFWOEX.js.map
