import {
  require_email_validator
} from "/build/_shared/chunk-WTMYUHDP.js";
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
  faEyeSlash,
  faXmark
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  Form,
  Link,
  useActionData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tos", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 12,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/pp", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, false, {
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
var import_react3 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var LoginBox = (props) => {
  const navigator = useNavigate();
  const [showpass, setShowPass] = (0, import_react3.useState)(false);
  const changePassVisabel = () => {
    setShowPass(!showpass);
  };
  const [error, setError] = (0, import_react3.useState)(null);
  const socialLogin = async (email, pass) => {
    const apidata = await axios_default.post(`${BaseUrl}/api/login`, { "email": email, "password": pass });
    if (apidata.data.status) {
      navigator(`/extra/sociallogin/${apidata.data.data.id}`);
    } else {
      setError(apidata.data.message);
    }
  };
  const emailRef = (0, import_react3.useRef)(null);
  const [emailError, setEmailError] = (0, import_react3.useState)(null);
  const [forgetPasswordBox, setForgetPasswordBox] = (0, import_react3.useState)(false);
  const forgetPassword = async () => {
    var _a, _b, _c, _d, _e;
    if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = emailRef.current) == null ? void 0 : _c.value) == "") {
      setEmailError("Fill the Brand info");
    } else if (!EmailValidator.validate((_d = emailRef.current) == null ? void 0 : _d.value)) {
      setEmailError("Enter valid email");
    } else {
      const apidata = await axios_default.post(`${BaseUrl}/api/send-forgot-password`, { "user": (_e = emailRef.current) == null ? void 0 : _e.value });
      if (!apidata.data.status)
        return setEmailError(apidata.data.message);
      return setForgetPasswordBox(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `fixed top-0 left-0 bg-gray-600 bg-opacity-20 h-screen w-full grid place-items-center shadow-xl ${forgetPasswordBox ? "" : "hidden"} `, style: { zIndex: 100 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg p-8 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => {
          setForgetPasswordBox(false);
        }, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { className: "text-black text-2xl font-bold", icon: faXmark }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 54,
            columnNumber: 79
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black font-bold text-lg mt-4 text-center my-4", children: "Forget password" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref: emailRef, type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      emailError == "" || emailError == null || emailError == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: emailError }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: forgetPassword, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CusButton, { text: "Send", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]", children: "Welcome" }, void 0, false, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
          props.message && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 73,
            columnNumber: 47
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 74,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 75,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "email", type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 76,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 77,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "password", type: showpass ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 79,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-600 text-center px-1 text-md", onClick: changePassVisabel, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: showpass ? faEye : faEyeSlash }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 81,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 80,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 78,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex content-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 87,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 86,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 89,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: async () => {
              var _a;
              const googleProvider = new GoogleAuthProvider();
              const res = await signInWithPopup(auth, googleProvider);
              const pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
              try {
                await socialLogin(res.user.email, pass);
              } catch (e) {
                setError(e.toString());
              }
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 100,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 90,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 85,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 84,
            columnNumber: 29
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 105,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ", children: "Submit" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 107,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-normal text-sm mt-4", children: [
            "CAN'T LOG IN? ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { onClick: () => {
              setForgetPasswordBox(true);
            }, className: "font-bold cursor-pointer", children: "RESTORE PASSWORD" }, void 0, false, {
              fileName: "app/components/user/login.tsx",
              lineNumber: 108,
              columnNumber: 104
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 108,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 109,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CusButton, { text: "Join", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 111,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/user/login.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 72,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
};

// app/routes/login.tsx
var EmailValidator2 = __toESM(require_email_validator());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var login = () => {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IntroNavBar, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LoginBox, { message: data == null ? void 0 : data.message }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainFooter, {}, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
};
var login_default = login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-HBSOQKUH.js.map
