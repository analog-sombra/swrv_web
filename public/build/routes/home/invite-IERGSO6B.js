import {
  require_email_validator
} from "/build/_shared/chunk-WTMYUHDP.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/invite.tsx
var import_react = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Invite = () => {
  const navigation = useTransition();
  const isSubmitting = navigation.state === "submitting";
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const nameRef = (0, import_react.useRef)(null);
  const emailRef = (0, import_react.useRef)(null);
  const [contactnumber, setContactnumber] = (0, import_react.useState)();
  const [error, setError] = (0, import_react.useState)("");
  const [refstatus, setRefStatus] = (0, import_react.useState)([]);
  const [sus, setSus] = (0, import_react.useState)("");
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  const init = async () => {
    const data = await axios_default({
      method: "get",
      url: `${BaseUrl}/api/user-referrals/${userId}`,
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
    setRefStatus(data.data.data[0].refferrals);
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/routes/home/invite.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center w-full bg-yellow-500 rounded-xl shadow-xl my-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/cashgirl.png", alt: "error", className: "h-72" }, void 0, false, {
        fileName: "app/routes/home/invite.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/invite.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 grow flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-4 lg:w-96", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-xl font-bold text-left", children: "Refer an influencer or brand" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-md", children: "Name" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 60,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Email" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: emailRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Contact Number" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this),
          error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 67,
            columnNumber: 29
          }, this),
          sus == "" || sus == null || sus == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 70,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " my-2", onClick: async () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
              setError("Fill user name");
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
                "name": (_h = nameRef.current) == null ? void 0 : _h.value,
                "email": (_i = emailRef.current) == null ? void 0 : _i.value,
                "contact": contactnumber
              };
              const data = await axios_default({
                method: "post",
                url: `${BaseUrl}/api/send-referral`,
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
              if (data.data.status == false) {
                return setError(data.data.message);
              } else {
                setError("");
                nameRef.current.value = "";
                emailRef.current.value = "";
                setContactnumber(void 0);
                setSus("Invitation has been send.");
              }
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full text-center text-xl rounded-md my-2 py-1 text-primary font-bold bg-[#01FFF4]", children: "Invite " }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 119,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/invite.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-4 grow w-full overflow-x-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-xl font-bold text-left", children: "Referral status" }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 123,
            columnNumber: 25
          }, this),
          refstatus.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-md font-semibold text-center", children: "Your referral list is empty " }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 126,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 125,
            columnNumber: 29
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-20" }, void 0, false, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 132,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-40", children: "Name" }, void 0, false, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 133,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Email" }, void 0, false, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 134,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Contact" }, void 0, false, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 135,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Status" }, void 0, false, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 136,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home/invite.tsx",
              lineNumber: 131,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/invite.tsx",
              lineNumber: 130,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "gap-y-4", children: refstatus.map((val, index) => {
              const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == void 0 || val["pic"] == "" ? "/images/avatar/user.png" : val["pic"];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar, alt: "error", className: "w-12 h-12 rounded-md object-cover" }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 144,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 144,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.userName }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 145,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.email }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 146,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: val.contact }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 147,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "font-medium", children: val.status.isVerified }, void 0, false, {
                  fileName: "app/routes/home/invite.tsx",
                  lineNumber: 148,
                  columnNumber: 49
                }, this)
              ] }, index, true, {
                fileName: "app/routes/home/invite.tsx",
                lineNumber: 143,
                columnNumber: 45
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/home/invite.tsx",
              lineNumber: 139,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/invite.tsx",
            lineNumber: 129,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/invite.tsx",
          lineNumber: 122,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/invite.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/invite.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/invite.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
};
var invite_default = Invite;
export {
  invite_default as default
};
//# sourceMappingURL=/build/routes/home/invite-IERGSO6B.js.map
