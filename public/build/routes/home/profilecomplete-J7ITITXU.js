import {
  firstinput_default
} from "/build/_shared/chunk-OATAN4VF.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/profilecomplete.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserEditBox = () => {
  const userdata = useLoaderData();
  const isBrand = userdata.user.role["code"] == "50" ? true : false;
  const index = firstinput_default((state) => state.index);
  const setIndex = firstinput_default((state) => state.setIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white rounded-xl p-4 shadow-xl mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-lg text-center font-medium p-2 bg-secondary text-white  ${index == 1 ? "w-2/5" : ""} ${index == 2 ? "w-3/5" : ""} ${index == 3 ? "w-4/5" : ""} ${index == 4 ? "w-full" : ""} rounded-xl`, children: [
      index == 1 ? "0% Completed" : "",
      index == 2 ? "25% Completed" : "",
      index == 3 ? "50% Completed" : "",
      index == 4 ? "75% Completed" : ""
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6  w-full hidden md:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden place-items-center lg:grid ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/avatar/profile1.png", alt: "error", className: "h-[400px]" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "pt-4 text-3xl text-primary text-left font-semibold", children: "Welcome" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pt-2 text-black text-xl font-normal", children: "Thank you for the confirmation, Login with your account and start searching for the brands." }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl px-2 py-4 flex flex-row items-center lg:flex-col justify-between overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileCompleteBox, { isActive: index == 1 ? true : false, positionumber: "01", title: "Info" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 49,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileCompleteBox, { isActive: index == 2 ? true : false, positionumber: "02", title: "Audience" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 50,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileCompleteBox, { isActive: index == 3 ? true : false, positionumber: "03", title: "Connect" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileCompleteBox, { isActive: index == 4 ? true : false, positionumber: "04", title: "Contact" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 52,
          columnNumber: 29
        }, this),
        isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileCompleteBox, { isActive: index == 5 ? true : false, positionumber: "05", title: "Users" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
};
var profilecomplete_default = UserEditBox;
var ProfileCompleteBox = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-3 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `grid place-items-center h-14 w-14 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`, children: props.positionumber }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 79,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 78,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: `text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`, children: props.title }, void 0, false, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 77,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this);
};
export {
  profilecomplete_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete-J7ITITXU.js.map
