import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/drafts.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserDrafts = () => {
  const userid = useLoaderData().user.id;
  const [resDarft, setResDarft] = (0, import_react2.useState)([]);
  const init = async () => {
    let req = {
      "search": {
        "fromUser": userid,
        "influencer": userid
      }
    };
    const responseData = await axios_default.post(`${BaseUrl}/api/search-draft`, req);
    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 rounded-xl shadow-xl bg-white my-4", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "You haven't created any drafts yet." }, void 0, false, {
    fileName: "app/routes/home/drafts.tsx",
    lineNumber: 46,
    columnNumber: 25
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: "User Created draft" }, void 0, false, {
      fileName: "app/routes/home/drafts.tsx",
      lineNumber: 49,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }, void 0, false, {
      fileName: "app/routes/home/drafts.tsx",
      lineNumber: 50,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid mt-4 place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: resDarft.map((val, index) => {
      let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 p-4 bg-white rounded-lg shadow-lg w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }, void 0, false, {
            fileName: "app/routes/home/drafts.tsx",
            lineNumber: 57,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium", children: val.brand.name }, void 0, false, {
              fileName: "app/routes/home/drafts.tsx",
              lineNumber: 59,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.brand.email }, void 0, false, {
              fileName: "app/routes/home/drafts.tsx",
              lineNumber: 60,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/drafts.tsx",
            lineNumber: 58,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 56,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Description" }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 63,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium", children: val.description }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 64,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 65,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500", href: val.attach01, children: "View pdf" }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 66,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-md font-medium", children: "Status" }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 67,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `mt-2 text-md text-white font-medium text-center rounded-md ${val.status.name == "ACCEPTED" ? "bg-green-500" : val.status.name == "PENDING" ? "bg-yellow-500" : "bg-red-500"}`, children: val.status.name }, void 0, false, {
          fileName: "app/routes/home/drafts.tsx",
          lineNumber: 68,
          columnNumber: 45
        }, this)
      ] }, index, true, {
        fileName: "app/routes/home/drafts.tsx",
        lineNumber: 55,
        columnNumber: 48
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/drafts.tsx",
      lineNumber: 51,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/drafts.tsx",
    lineNumber: 48,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/home/drafts.tsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/drafts.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this);
};
var drafts_default = UserDrafts;
export {
  drafts_default as default
};
//# sourceMappingURL=/build/routes/home/drafts-K5WNIKJA.js.map
