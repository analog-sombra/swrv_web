import {
  GoogleAuthProvider,
  auth,
  signInWithPopup
} from "/build/_shared/chunk-6FCLORA5.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  IntroNavBar
} from "/build/_shared/chunk-RXYACUU2.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faEye,
  faEyeSlash
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/user/register.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RegisterBox = (props) => {
  const navigator = useNavigate();
  const [isBrand, setBrand] = (0, import_react2.useState)(false);
  const cat = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (props.isBrand) {
      cat.current.value = "brand";
      setBrand(true);
    } else {
      cat.current.value = "inf";
      setBrand(false);
    }
  }, []);
  const [error, setError] = (0, import_react2.useState)(null);
  const [showpassone, setShowPassone] = (0, import_react2.useState)(false);
  const changePassVisabelone = () => {
    setShowPassone(!showpassone);
  };
  const [showpasstwo, setShowPasstwo] = (0, import_react2.useState)(false);
  const changePassVisabeltwo = () => {
    setShowPasstwo(!showpasstwo);
  };
  const socialRegister = async (email, pass) => {
    let req = {
      "email": email,
      "password": pass,
      "confirm-password": pass,
      "isBrand": "0",
      "isInfluencer": "1"
    };
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/register`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        "Accept": "*"
      }
    });
    if (apidata.data.status) {
      navigator(`/extra/socialregister/${apidata.data.data.id}`);
    } else {
      setError(apidata.data.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/avatar/login.png", alt: "err", className: "justify-self-end w-[250px] h-[400px]" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          cat.current.value = "inf";
          setBrand(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { width: "w-full", text: "Influencer", background: `${isBrand ? "" : "bg-secondary"}`, textColor: `${isBrand ? "text-primary" : "text-white"}`, borderColor: `${isBrand ? "border-primary" : ""}`, fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 86,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          cat.current.value = "brand";
          setBrand(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { width: "w-full", text: "Brand", textColor: `${isBrand ? "text-white" : "text-primary"}`, background: `${isBrand ? "bg-secondary" : ""}`, borderColor: `${isBrand ? "" : "border-primary"}`, fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 97,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 93,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 85,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "cat", ref: cat, type: "hidden" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 103,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 105,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: showpassone ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 107,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md", onClick: changePassVisabelone, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: showpassone ? faEye : faEyeSlash }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 109,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 108,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 106,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 112,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "repassword", type: showpasstwo ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 114,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md", onClick: changePassVisabeltwo, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: showpasstwo ? faEye : faEyeSlash }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 116,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 115,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 113,
          columnNumber: 25
        }, this),
        !isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex content-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 124,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 123,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/icons/apple.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 126,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
              var _a;
              const googleProvider = new GoogleAuthProvider();
              const res = await signInWithPopup(auth, googleProvider);
              const pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
              try {
                await socialRegister(res.user.email, pass);
              } catch (e) {
                setError(e.toString());
              }
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 138,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 127,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 122,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 121,
            columnNumber: 33
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 143,
            columnNumber: 37
          }, this),
          props.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 145,
            columnNumber: 51
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 120,
          columnNumber: 29
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 148,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline black rounded-lg bg-primary shadow-lg text-center font-bold text-white text-md py-2 ", children: "create account" }, void 0, false, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 149,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 content-start mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 152,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 151,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 154,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 150,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-4 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "check2" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 158,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 157,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" }, void 0, false, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 160,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 156,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
          "I\u2019m already registered.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: " Let me Log in" }, void 0, false, {
              fileName: "app/components/user/register.tsx",
              lineNumber: 162,
              columnNumber: 130
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 162,
            columnNumber: 109
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 162,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 100,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 84,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 165,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 75,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this);
};

// app/routes/register.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var register = () => {
  const loaderData = useLoaderData();
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RegisterBox, { isBrand: loaderData.brand ? true : false, message: data == null ? void 0 : data.message }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
};
var register_default = register;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/register-ISHTH45S.js.map
