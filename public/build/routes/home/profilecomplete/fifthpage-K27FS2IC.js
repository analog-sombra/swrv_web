import {
  firstinput_default
} from "/build/_shared/chunk-OATAN4VF.js";
import {
  require_email_validator
} from "/build/_shared/chunk-WTMYUHDP.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/profilecomplete/fifthpage.tsx
var import_react2 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThirdPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const brandId = userdata.user.brand.id;
  const [error, setError] = (0, import_react2.useState)(null);
  const [sus, setSus] = (0, import_react2.useState)(null);
  const setIndex = firstinput_default((state) => state.setIndex);
  const nextButton = (0, import_react2.useRef)(null);
  const nameRef = (0, import_react2.useRef)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  const [invitedUser, setInvitedUser] = (0, import_react2.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Invite users" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Username" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 56,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 57,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Email" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: emailRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "contact number" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
          if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
            setError("Enter the user ");
          } else if (((_d = emailRef.current) == null ? void 0 : _d.value) == null || ((_e = emailRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = emailRef.current) == null ? void 0 : _f.value) == "") {
            setError("Fill the Brand info");
          } else if (!EmailValidator.validate((_g = emailRef.current) == null ? void 0 : _g.value)) {
            setError("Enter valid email");
          } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
            setError("Fill the contact number");
          } else if (contactnumber.toString().length != 10) {
            setError("Enter a 10 degit valid contact number");
          } else {
            let req = {
              "userId": userId,
              "brandId": brandId,
              "name": (_h = nameRef.current) == null ? void 0 : _h.value,
              "email": (_i = emailRef.current) == null ? void 0 : _i.value,
              "contact": contactnumber
            };
            const data = await axios_default({
              method: "post",
              url: `${BaseUrl}/api/send-brand-invite`,
              data: req
            });
            if (data.data.status == false) {
              return setError(data.data.message);
            } else {
              let user = {
                name: (_j = nameRef.current) == null ? void 0 : _j.value,
                email: (_k = emailRef.current) == null ? void 0 : _k.value,
                number: contactnumber.toString()
              };
              setInvitedUser([...invitedUser, user]);
              setError(null);
              setContactnumber(0);
              nameRef.current.value = "";
              emailRef.current.value = "";
              return setSus("User invited successfully");
            }
          }
        }, className: "text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg", children: "Invite" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 65,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 119,
        columnNumber: 29
      }, this),
      sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 122,
        columnNumber: 29
      }, this),
      invitedUser.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-gray-200 shadow-md rounded-md py-1 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-md", children: [
          index + 1,
          ": ",
          val.name,
          " - ",
          val.email,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 128,
          columnNumber: 41
        }, this) }, index, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 127,
          columnNumber: 37
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        if (invitedUser.length == 0) {
          setSus(null);
          setError("Invite at least one user");
        } else {
          setIndex(5);
          nextButton.current.click();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 142,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 133,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 145,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
          lineNumber: 146,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
        lineNumber: 144,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 54,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/fifthpage.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
};
var fifthpage_default = ThirdPage;
export {
  fifthpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/fifthpage-K27FS2IC.js.map
