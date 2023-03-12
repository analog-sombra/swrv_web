import {
  createcampaign_default
} from "/build/_shared/chunk-KXH2FK5W.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import "/build/_shared/chunk-4XW2F6EJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCircleXmark
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/createcampaign/step3.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step3 = () => {
  const navigator = useNavigate();
  const data = useLoaderData();
  const [error, setError] = (0, import_react2.useState)(null);
  const audienceText = (0, import_react2.useRef)(null);
  const [auderror, setAudError] = (0, import_react2.useState)(null);
  const [addaudience, setAddAudience] = (0, import_react2.useState)(false);
  const audience = createcampaign_default((state) => state.audience);
  const removeAudience = createcampaign_default((state) => state.removeAudience);
  const clearAudience = createcampaign_default((state) => state.clearAudience);
  const addAudience = createcampaign_default((state) => state.addAudience);
  const infLocation = createcampaign_default((state) => state.infLocation);
  const setInfLocation = createcampaign_default((state) => state.setInfLocation);
  const datepicker = (0, import_react2.useRef)(null);
  const tilldate = createcampaign_default((state) => state.tilldate);
  const setTillDate = createcampaign_default((state) => state.setTillDate);
  const maxInf = (0, import_react2.useRef)(null);
  const maxinf = createcampaign_default((state) => state.maxInf);
  const setMaxInf = createcampaign_default((state) => state.setMaxInf);
  const remuneration = (0, import_react2.useRef)(null);
  const Remuneration = createcampaign_default((state) => state.remuneration);
  const setRemuneration = createcampaign_default((state) => state.setRemuneration);
  const remunerationType = createcampaign_default((state) => state.remunerationType);
  const setRemunerationType = createcampaign_default((state) => state.setRemunerationType);
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c;
    if (((_a = datepicker.current) == null ? void 0 : _a.value) != null) {
      datepicker.current.value = tilldate;
    }
    if (((_b = maxInf.current) == null ? void 0 : _b.value) != null) {
      maxInf.current.value = maxinf.toString();
    }
    if (((_c = remuneration.current) == null ? void 0 : _c.value) != null) {
      remuneration.current.value = Remuneration;
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left", children: "Audience & demeography" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Audience location" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: audience.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `@${value}` }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 80,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeAudience(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 84,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step3.tsx",
              lineNumber: 83,
              columnNumber: 41
            }, this)
          ] }, i, true, {
            fileName: "app/routes/home/createcampaign/step3.tsx",
            lineNumber: 79,
            columnNumber: 37
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 76,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddAudience(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 92,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 75,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearAudience, children: "clear all" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 96,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 74,
      columnNumber: 17
    }, this),
    addaudience ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: audienceText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Audience" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 103,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 102,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 105,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        if (audienceText.current.value == "" || audienceText.current.value == null || audienceText.current.value == void 0) {
          setAudError("Mendtion can't be empty!");
        } else if (audience.includes(audienceText.current.value)) {
          setAudError("Mendtion already exist add a diffrent one");
        } else if (audienceText.current.value.indexOf(" ") >= 0) {
          setAudError("Mendtion cannot containt space");
        } else {
          addAudience(audienceText.current.value);
          audienceText.current.value = "";
          setAddAudience(false);
          setAudError(null);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 122,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 106,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 101,
      columnNumber: 25
    }, this) : null,
    auderror == "" || auderror == null || auderror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: auderror }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 128,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Influencer category" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 134,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6", onClick: (value) => {
      const data2 = value.target.value + "";
      const setdata = data2.split(" ");
      setInfLocation(setdata[0], setdata[1], setdata[2]);
    }, children: data.data.map((value, i) => {
      if (value.id == infLocation.id) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: `${value.id} ${value.categoryName} ${value.categoryCode}`, className: "border-none outline-none font-normal text-lg", selected: true, children: `${value.categoryName} [${value.categoryCode}]` }, i, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 143,
          columnNumber: 33
        }, this);
      } else {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: `${value.id} ${value.categoryName} ${value.categoryCode}`, className: "border-none outline-none font-normal text-lg", children: `${value.categoryName} [${value.categoryCode}]` }, i, false, {
          fileName: "app/routes/home/createcampaign/step3.tsx",
          lineNumber: 147,
          columnNumber: 33
        }, this);
      }
    }) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Maximum no of influencers that can join the campaign" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 153,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: maxInf, type: "number", className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 154,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 155,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg", alt: "error", className: "object-cover h-96 w-full rounded-xl" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 157,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 156,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Accept participation / invite till" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 159,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", ref: datepicker, className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 160,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Remuneration" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 161,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6", onChange: (value) => {
      setRemunerationType(value.target.value);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", className: "border-none outline-none font-normal text-lg", children: "Cash" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", className: "border-none outline-none font-normal text-lg", children: "Product" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 166,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", className: "border-none outline-none font-normal text-lg", children: "Revenue" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 167,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", className: "border-none outline-none font-normal text-lg", children: "Discount" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 168,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 162,
      columnNumber: 17
    }, this),
    remunerationType == "1" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "usd" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 172,
      columnNumber: 25
    }, this) : null,
    remunerationType == "2" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "Product details" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 177,
      columnNumber: 25
    }, this) : null,
    remunerationType == "3" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "% per sale" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 182,
      columnNumber: 25
    }, this) : null,
    remunerationType == "4" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "Coupons" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 187,
      columnNumber: 25
    }, this) : null,
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 191,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        navigator(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 195,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 194,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 197,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        if (audience.length == 0) {
          setError("Add Audience Location");
        } else if (infLocation.id == null || infLocation.id == void 0 || infLocation.id == "") {
          setError("Select Influencer category");
        } else if (((_a = maxInf.current) == null ? void 0 : _a.value) == null || maxInf.current.value == void 0 || ((_b = maxInf.current) == null ? void 0 : _b.value) == "" || parseInt((_c = maxInf.current) == null ? void 0 : _c.value) == 0) {
          setError("Select maximum influencer no. ");
        } else if (((_d = datepicker.current) == null ? void 0 : _d.value) == null || ((_e = datepicker.current) == null ? void 0 : _e.value) == void 0 || ((_f = datepicker.current) == null ? void 0 : _f.value) == "") {
          setError("Select Accept participation last date. ");
        } else if (((_g = remuneration.current) == null ? void 0 : _g.value) == null || ((_h = remuneration.current) == null ? void 0 : _h.value) == void 0 || ((_i = remuneration.current) == null ? void 0 : _i.value) == "") {
          setError("Select emuneration. ");
        } else {
          setTillDate((_j = datepicker.current) == null ? void 0 : _j.value);
          setMaxInf(parseInt((_k = maxInf.current) == null ? void 0 : _k.value));
          setRemuneration((_l = remuneration.current) == null ? void 0 : _l.value);
          navigator("/home/createcampaign/step4");
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 218,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step3.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step3.tsx",
      lineNumber: 193,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step3.tsx",
    lineNumber: 70,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step3.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this);
};
var step3_default = Step3;
export {
  step3_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step3-A5LC6TZS.js.map
