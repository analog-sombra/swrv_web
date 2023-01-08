import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-ZB5KJWBC.js";
import "/build/_shared/chunk-3RAS7ZQP.js";
import "/build/_shared/chunk-4MAHYGKM.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/home/footer/mainfooter.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MainFooter = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-center content-center items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "About" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 9,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 12,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Cookie policy" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 18,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "FAQ" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 21,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 20,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};

// app/components/user/login.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var LoginBox = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]", children: "Welcome" }, void 0, false, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
        props.message && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 18,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 19,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 20,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "email", type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 21,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 22,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "password", type: "password", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 23,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex content-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 28,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 27,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 30,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 31,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 26,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 25,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ", children: "Submit" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 34,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 mt-4 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 37,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 36,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-left text-xs text-black font-normal", children: "Keep me logged in" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 40,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 39,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-sm", children: [
          "CAN'T LOG IN? ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-bold", children: "RESTORE PASSWORD" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 43,
            columnNumber: 99
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 43,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CusButton, { text: "Join", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 46,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 45,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// app/routes/login.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var login = () => {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LoginBox, { message: data == null ? void 0 : data.message }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainFooter, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
};
var login_default = login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-RO45WIH7.js.map
