import {
  UploadFile
} from "/build/_shared/chunk-4645WABA.js";
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
import {
  FontAwesomeIcon,
  faChevronRight
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  NavLink,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/createbrand.tsx
var import_react2 = __toESM(require_react());
var EmailValidator = __toESM(require_email_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var createBarnd = () => {
  const navigator = useNavigate();
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const [error, setError] = (0, import_react2.useState)("");
  const [img, setImale] = (0, import_react2.useState)(null);
  let imgref = (0, import_react2.useRef)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  const [cityerror, setCityerror] = (0, import_react2.useState)(null);
  const [citybox, setCitybox] = (0, import_react2.useState)(false);
  const [searchcity, setSearchcity] = (0, import_react2.useState)([]);
  const [selectedcity, setSelectedctiy] = (0, import_react2.useState)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  let cityref = (0, import_react2.useRef)(null);
  const getCity = async (city) => {
    const data = await axios_default.post(`${BaseUrl}/api/get-city`, { "search": city });
    setSearchcity(data.data.data);
  };
  const nameRef = (0, import_react2.useRef)(null);
  const codeRef = (0, import_react2.useRef)(null);
  const addressRef = (0, import_react2.useRef)(null);
  const websiteRef = (0, import_react2.useRef)(null);
  const emailRef = (0, import_react2.useRef)(null);
  const binfoRef = (0, import_react2.useRef)(null);
  const cinfoRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4", children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 h-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: "No city found with this name" }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 60,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-5 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", onClick: () => {
        setCitybox(false);
      }, children: "Close" }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 61,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 59,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 overflow-y-scroll no-scrollbar", children: searchcity.map((value, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setSelectedctiy(value);
        setCitybox(false);
        cityref.current.value = "";
      }, className: "my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500", children: [
        value["name"],
        " - ",
        value["code"]
      ] }, index, true, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 71,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 70,
        columnNumber: 45
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 66,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full pt-4 px-4 bg-background pb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full rounded-lg bg-white grid place-items-center shadow-lg py-2 sm:w-96 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./images/swrvlogo.png", className: "w-28 lg:w-32" }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 87,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full shadow-xl p-4 mt-4 rounded-lg mx-auto sm:w-96", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
          let file_size = parseInt((value.target.files[0].size / 1024 / 1024).toString());
          if (file_size < 4) {
            setImgerror(null);
            setImale(value.target.files[0]);
          } else {
            setImgerror("Image file size must be less then 4 mb");
          }
        } }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex w-full items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center w-40 mr-4 h-40 object-cover", children: img == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/icons/gallery.png", alt: "error", className: "w-40 object-cover inline-block" }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 104,
            columnNumber: 44
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: URL.createObjectURL(img), alt: "error", className: "w-20 h-20 inline-block object-cover rounded-md" }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 104,
            columnNumber: 141
          }, this) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 103,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Drop profile photo here." }, void 0, false, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 107,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 4 MB" }, void 0, false, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 110,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
              imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 116,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
                var _a;
                (_a = imgref.current) == null ? void 0 : _a.click();
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }, void 0, false, {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 119,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/createbrand.tsx",
                lineNumber: 118,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/createbrand.tsx",
              lineNumber: 114,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 106,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand Name" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 124,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: nameRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 125,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand code" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 126,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: codeRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand website" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 128,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: websiteRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 129,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand address" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 130,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: addressRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 131,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand city" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 132,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-[#EEEEEE] rounded-md flex p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: cityref, className: "h-full w-full outline-none focus:border-gray-300 bg-transparent" }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 135,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 134,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer", onClick: () => {
            var _a, _b, _c, _d, _e;
            if (((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == void 0 || ((_c = cityref.current) == null ? void 0 : _c.value) == "") {
              setCityerror("Enter the city name");
            } else {
              setCitybox(true);
              setCityerror(null);
              getCity((_e = (_d = cityref.current) == null ? void 0 : _d.value) != null ? _e : "");
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faChevronRight }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 146,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 137,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 133,
          columnNumber: 21
        }, this),
        cityerror == "" || cityerror == null || cityerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 150,
          columnNumber: 25
        }, this),
        selectedcity == "" || selectedcity == null || selectedcity == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
          selectedcity["name"],
          " - ",
          selectedcity["code"]
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 153,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Contact" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 155,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity["country"]["isd"] }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 157,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
            fileName: "app/routes/createbrand.tsx",
            lineNumber: 158,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 156,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Email" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 160,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: emailRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 162,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: binfoRef, className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Company info" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 164,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: cinfoRef, className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 165,
          columnNumber: 21
        }, this),
        error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 167,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
          if (img == null || img == void 0) {
            setError("Select the image");
          } else if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = nameRef.current) == null ? void 0 : _c.value) == "") {
            setError("Fill the Brand name");
          } else if (((_d = codeRef.current) == null ? void 0 : _d.value) == null || ((_e = codeRef.current) == null ? void 0 : _e.value) == void 0 || ((_f = codeRef.current) == null ? void 0 : _f.value) == "") {
            setError("Fill the Brand code");
          } else if (((_g = websiteRef.current) == null ? void 0 : _g.value) == null || ((_h = websiteRef.current) == null ? void 0 : _h.value) == void 0 || ((_i = websiteRef.current) == null ? void 0 : _i.value) == "") {
            setError("Fill the Brand website");
          } else if (((_j = addressRef.current) == null ? void 0 : _j.value) == null || ((_k = addressRef.current) == null ? void 0 : _k.value) == void 0 || ((_l = addressRef.current) == null ? void 0 : _l.value) == "") {
            setError("Fill the Brand address");
          } else if (selectedcity == null) {
            setError("Fill the city");
          } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
            setError("Fill the contact number");
          } else if (((_m = emailRef.current) == null ? void 0 : _m.value) == null || ((_n = emailRef.current) == null ? void 0 : _n.value) == void 0 || ((_o = emailRef.current) == null ? void 0 : _o.value) == "") {
            setError("Fill the Brand info");
          } else if (!EmailValidator.validate((_p = emailRef.current) == null ? void 0 : _p.value)) {
            setError("Enter valid email");
          } else if (contactnumber.toString().length != 10) {
            setError("Enter a 10 degit valid contact number");
          } else if (((_q = binfoRef.current) == null ? void 0 : _q.value) == null || ((_r = binfoRef.current) == null ? void 0 : _r.value) == void 0 || ((_s = binfoRef.current) == null ? void 0 : _s.value) == "") {
            setError("Fill the Brand info");
          } else if (((_t = cinfoRef.current) == null ? void 0 : _t.value) == null || ((_u = cinfoRef.current) == null ? void 0 : _u.value) == void 0 || ((_v = cinfoRef.current) == null ? void 0 : _v.value) == "") {
            setError("Fill the Campany info");
          } else {
            const imageurl = await UploadFile(img);
            let req = {
              "userId": userId,
              "brandLogoUrl": imageurl,
              "brandName": (_w = nameRef.current) == null ? void 0 : _w.value,
              "brandCode": (_x = codeRef.current) == null ? void 0 : _x.value,
              "brandWebUrl": (_y = websiteRef.current) == null ? void 0 : _y.value,
              "brandFullRegisteredAddress": (_z = addressRef.current) == null ? void 0 : _z.value,
              "brandSupportEmail": (_A = emailRef.current) == null ? void 0 : _A.value,
              "brandSupportContact": contactnumber,
              "brandBioInfo": (_B = binfoRef.current) == null ? void 0 : _B.value,
              "comapnyBio": (_C = cinfoRef.current) == null ? void 0 : _C.value,
              "cityId": selectedcity["id"]
            };
            const data = await axios_default({
              method: "post",
              url: `${BaseUrl}/api/add-brand`,
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
            return navigator("/home");
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Create Brand", background: "bg-secondary", textColor: "text-white", width: "w-full" }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 242,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/createbrand.tsx",
          lineNumber: 169,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createbrand.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createbrand.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/createbrand.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this);
};
var createbrand_default = createBarnd;
export {
  createbrand_default as default
};
//# sourceMappingURL=/build/routes/createbrand-EILCCZVF.js.map
