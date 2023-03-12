import {
  firstinput_default
} from "/build/_shared/chunk-OATAN4VF.js";
import {
  UploadFile
} from "/build/_shared/chunk-4645WABA.js";
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
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/profilecomplete/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserInputBoxOne = () => {
  const user = useLoaderData();
  const useremail = user.user.email;
  const userID = user.user.id;
  const setIndex = firstinput_default((state) => state.setIndex);
  const navigator = useNavigate();
  const [img, setImg] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [error, setError] = (0, import_react2.useState)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const usernameRef = (0, import_react2.useRef)(null);
  const nicknameRef = (0, import_react2.useRef)(null);
  const datepicker = (0, import_react2.useRef)(null);
  const bioRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    emailRef.current.value = useremail;
    usernameRef.current.value = useremail;
  }, []);
  const nextButton = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Tell us about yourself" }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
          let file_size = parseInt((value.target.files[0].size / 1024 / 1024).toString());
          if (file_size < 4) {
            setImgerror(null);
            setImg(value.target.files[0]);
          } else {
            setImgerror("Image file size must be less then 4 mb");
          }
        } }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow sm:w-full", children: img == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/icons/gallery.png", alt: "error", className: "w-40 sm:w-full object-cover inline-block" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 63,
            columnNumber: 48
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: URL.createObjectURL(img), alt: "error", className: "w-40 sm:w-full inline-block object-cover rounded-md" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 63,
            columnNumber: 155
          }, this) }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 62,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-52 sm:w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Drop profile photo here." }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 66,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 5 MB" }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 69,
              columnNumber: 33
            }, this),
            imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 74,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
              var _a;
              (_a = imgref.current) == null ? void 0 : _a.click();
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 77,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/profilecomplete/index.tsx",
              lineNumber: 76,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Email" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: emailRef, disabled: true, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 84,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Username" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: usernameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 86,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Nickname" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 87,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nicknameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Date of birth" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", ref: datepicker, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Bio" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: bioRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 94,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
          if (img == null) {
            setError("Please select the image");
          } else if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = emailRef.current) == null ? void 0 : _c.value) == "") {
            setError("Enter the email");
          } else if (((_d = usernameRef.current) == null ? void 0 : _d.value) == null || ((_e = usernameRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = usernameRef.current) == null ? void 0 : _f.value) == "") {
            setError("Enter the username");
          } else if (((_g = nicknameRef.current) == null ? void 0 : _g.value) == null || ((_h = nicknameRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = nicknameRef.current) == null ? void 0 : _i.value) == "") {
            setError("Enter the nickname");
          } else if (((_j = datepicker.current) == null ? void 0 : _j.value) == null || ((_k = datepicker.current) == null ? void 0 : _k.value) == void 0 || ((_l = datepicker.current) == null ? void 0 : _l.value) == "") {
            setError("Enter the date of birth");
          } else if (((_m = bioRef.current) == null ? void 0 : _m.value) == null || ((_n = bioRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = bioRef.current) == null ? void 0 : _o.value) == "") {
            setError("Enter the bio");
          } else {
            let avatar = await UploadFile(img);
            let req = {
              "id": userID,
              "userName": (_p = usernameRef.current) == null ? void 0 : _p.value,
              "userKnownAs": (_q = nicknameRef.current) == null ? void 0 : _q.value,
              "userBioInfo": (_r = bioRef.current) == null ? void 0 : _r.value,
              "userDOB": (_s = datepicker.current) == null ? void 0 : _s.value,
              "userPicUrl": avatar
            };
            const data = await axios_default({
              method: "post",
              url: `${BaseUrl}/api/updateuser`,
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
            }
            setIndex(2);
            nextButton.current.click();
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 148,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userID.toString() }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 151,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/index.tsx",
            lineNumber: 152,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/profilecomplete/index.tsx",
          lineNumber: 150,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 82,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 46,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
};
var profilecomplete_default = UserInputBoxOne;
export {
  profilecomplete_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/index-WJB4M6SS.js.map
