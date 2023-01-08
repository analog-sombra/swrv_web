import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-ZB5KJWBC.js";
import "/build/_shared/chunk-3RAS7ZQP.js";
import "/build/_shared/chunk-4MAHYGKM.js";
import {
  Link
} from "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/user/register.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RegisterBox = () => {
  const [isBrand, setBrand] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 14,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/avatar/login.png", alt: "err", className: "justify-self-end w-[250px] h-[400px]" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          setBrand(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { width: "w-full", text: "Influencer", background: `${isBrand ? "" : "bg-secondary"}`, textColor: `${isBrand ? "text-primary" : "text-white"}`, borderColor: `${isBrand ? "border-primary" : ""}`, fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 24,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          setBrand(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { width: "w-full", text: "Brand", textColor: `${isBrand ? "text-white" : "text-primary"}`, background: `${isBrand ? "bg-secondary" : ""}`, borderColor: `${isBrand ? "" : "border-primary"}`, fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 30,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex content-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 44,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 43,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 46,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 47,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "create account", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 content-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 55,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-4 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check2" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
        "I\u2019m already registered.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: " Let me Log in" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 65,
            columnNumber: 126
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 65,
          columnNumber: 105
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// app/routes/register.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var register = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RegisterBox, {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};
var register_default = register;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/register-5XKKS72K.js.map
