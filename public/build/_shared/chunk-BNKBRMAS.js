import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/users/users.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UsersPage = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "About SWRV influencer platform" }, void 0, false, {
        fileName: "app/components/users/users.tsx",
        lineNumber: 13,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-primary mt-6", children: "Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users." }, void 0, false, {
        fileName: "app/components/users/users.tsx",
        lineNumber: 14,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Some popular faces" }, void 0, false, {
        fileName: "app/components/users/users.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, false, {
        fileName: "app/components/users/users.tsx",
        lineNumber: 22,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center", children: props.userdata.map((val, index) => {
        let image = val.pic == null || val.pic == void 0 || val.pic == "" || val.pic == "0" ? "/images/avatar/user.png" : val.pic;
        return index < 6 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCard, { name: val.userName.toString().split("@")[0], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus mi vel mauris aliquam, in pellentesque nulla rhoncus.", imageUrl: image }, void 0, false, {
          fileName: "app/components/users/users.tsx",
          lineNumber: 31,
          columnNumber: 45
        }, this) }, index, false, {
          fileName: "app/components/users/users.tsx",
          lineNumber: 30,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
          fileName: "app/components/users/users.tsx",
          lineNumber: 33,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/users/users.tsx",
        lineNumber: 23,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/users/users.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/users/users.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};
var users_default = UsersPage;
var UserCard = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-64 text-left shadow-xl rounded-xl pb-4 m-4`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.imageUrl, alt: "err", className: "w-full h-56" }, void 0, false, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold text-primary text-center mt-2", children: props.name }, void 0, false, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xs font-semibold text-primary text-left px-4", children: props.description }, void 0, false, {
      fileName: "app/components/users/users.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/users/users.tsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/users/users.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
};

export {
  users_default
};
//# sourceMappingURL=/build/_shared/chunk-BNKBRMAS.js.map
