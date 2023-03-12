import {
  require_react_switch
} from "/build/_shared/chunk-DN3EYWBV.js";
import {
  createcampaign_default
} from "/build/_shared/chunk-KXH2FK5W.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/createcampaign/step4.tsx
var import_react2 = __toESM(require_react());
var import_react_switch = __toESM(require_react_switch());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step4 = () => {
  const navigator = useNavigate();
  const [active, setActive] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const CampaignName = (0, import_react2.useRef)(null);
  const campaignName = createcampaign_default((state) => state.campaignName);
  const setCampaignName = createcampaign_default((state) => state.setCampaignName);
  const PlanedBudget = (0, import_react2.useRef)(null);
  const planedBudget = createcampaign_default((state) => state.planedBudget);
  const setPlanedBudget = createcampaign_default((state) => state.setPlanedBudget);
  const CostPerPost = (0, import_react2.useRef)(null);
  const costPerPost = createcampaign_default((state) => state.costPerPost);
  const setCostPerPost = createcampaign_default((state) => state.setCostPerPost);
  const StartDate = (0, import_react2.useRef)(null);
  const startDate = createcampaign_default((state) => state.startDate);
  const setStartDate = createcampaign_default((state) => state.setStartDate);
  const EndDate = (0, import_react2.useRef)(null);
  const endDate = createcampaign_default((state) => state.endDate);
  const setEndDate = createcampaign_default((state) => state.setEndDate);
  const MinReach = (0, import_react2.useRef)(null);
  const minReach = createcampaign_default((state) => state.minReach);
  const setMinReach = createcampaign_default((state) => state.setMinReach);
  const MaxReact = (0, import_react2.useRef)(null);
  const maxReact = createcampaign_default((state) => state.maxReact);
  const setMaxReact = createcampaign_default((state) => state.setMaxReact);
  const publicGlobally = createcampaign_default((state) => state.publicGlobally);
  const setPublicGlobally = createcampaign_default((state) => state.setPublicGlobally);
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    if (((_a = CampaignName.current) == null ? void 0 : _a.value) != null) {
      CampaignName.current.value = campaignName;
    }
    if (((_b = PlanedBudget.current) == null ? void 0 : _b.value) != null) {
      PlanedBudget.current.value = planedBudget.toString();
    }
    if (((_c = CostPerPost.current) == null ? void 0 : _c.value) != null) {
      CostPerPost.current.value = costPerPost.toString();
    }
    if (((_d = StartDate.current) == null ? void 0 : _d.value) != null) {
      StartDate.current.value = startDate;
    }
    if (((_e = EndDate.current) == null ? void 0 : _e.value) != null) {
      EndDate.current.value = endDate;
    }
    if (((_f = MinReach.current) == null ? void 0 : _f.value) != null) {
      MinReach.current.value = minReach.toString();
    }
    if (((_g = MaxReact.current) == null ? void 0 : _g.value) != null) {
      MaxReact.current.value = maxReact.toString();
    }
    setActive(publicGlobally);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 75,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 76,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign name" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: CampaignName, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Planed budget" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 82,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: PlanedBudget, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2  lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Cost per post" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 87,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: CostPerPost, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 88,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 86,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Start date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", ref: StartDate, className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2 lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 94,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "End date" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 98,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: EndDate, type: "date", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 99,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 97,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 91,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min reach" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 104,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: MinReach, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 105,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 103,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Max reach" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 109,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: MaxReact, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 108,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 102,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_switch.default, { onChange: () => setActive(!active), checked: active, checkedIcon: false, uncheckedIcon: false, onColor: "#03125E" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Public globally" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 116,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step4.tsx",
            lineNumber: 117,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 115,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 113,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 74,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 124,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Brand name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 126,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 127,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Brand name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 128,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 131,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 132,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Campaign name" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 133,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 130,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Planed budget" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 136,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 137,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Planed budget" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 138,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 135,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Cost per post" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 141,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 142,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Cost per post" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 143,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 140,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Audience loaction" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 146,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 147,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Audience loaction" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 148,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 145,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Influencer category" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 151,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 152,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Influencer category" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 153,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 150,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Start date" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Start date" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 158,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 155,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Min reach" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 161,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 162,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Min reach" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 163,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 160,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 166,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          navigator(-1);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 170,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 169,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 172,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          const x = new Date(StartDate.current.value);
          const y = new Date(EndDate.current.value);
          const pass_date = x > y;
          if (((_a = CampaignName.current) == null ? void 0 : _a.value) == null || ((_b = CampaignName.current) == null ? void 0 : _b.value) == void 0 || ((_c = CampaignName.current) == null ? void 0 : _c.value) == "") {
            setError("Enter campaign name");
          } else if (((_d = CampaignName.current) == null ? void 0 : _d.value.length) < 4) {
            setError("Campaign should be more then 3 character.");
          } else if (((_e = PlanedBudget.current) == null ? void 0 : _e.value) == null || ((_f = PlanedBudget.current) == null ? void 0 : _f.value) == void 0 || ((_g = PlanedBudget.current) == null ? void 0 : _g.value) == "" || parseInt((_h = PlanedBudget.current) == null ? void 0 : _h.value) == 0) {
            setError("Enter planed budget");
          } else if (((_i = CostPerPost.current) == null ? void 0 : _i.value) == null || ((_j = CostPerPost.current) == null ? void 0 : _j.value) == void 0 || ((_k = CostPerPost.current) == null ? void 0 : _k.value) == "" || parseInt((_l = CostPerPost.current) == null ? void 0 : _l.value) == 0) {
            setError("Enter planed cost per post");
          } else if (((_m = StartDate.current) == null ? void 0 : _m.value) == null || ((_n = StartDate.current) == null ? void 0 : _n.value) == void 0 || ((_o = StartDate.current) == null ? void 0 : _o.value) == "") {
            setError("Enter planed starting date");
          } else if (((_p = EndDate.current) == null ? void 0 : _p.value) == null || ((_q = EndDate.current) == null ? void 0 : _q.value) == void 0 || ((_r = EndDate.current) == null ? void 0 : _r.value) == "") {
            setError("Enter planed end date");
          } else if (((_s = MinReach.current) == null ? void 0 : _s.value) == null || ((_t = MinReach.current) == null ? void 0 : _t.value) == void 0 || ((_u = MinReach.current) == null ? void 0 : _u.value) == "" || parseInt((_v = MinReach.current) == null ? void 0 : _v.value) == 0) {
            setError("Enter planed min reach");
          } else if (((_w = MaxReact.current) == null ? void 0 : _w.value) == null || ((_x = MaxReact.current) == null ? void 0 : _x.value) == void 0 || ((_y = MaxReact.current) == null ? void 0 : _y.value) == "" || parseInt((_z = MaxReact.current) == null ? void 0 : _z.value) == 0) {
            setError("Enter planed max reach");
          } else if (parseInt((_A = MinReach.current) == null ? void 0 : _A.value) > parseInt((_B = MaxReact.current) == null ? void 0 : _B.value)) {
            setError("Max react should be gretter then min reach");
          } else if (pass_date) {
            setError("Start date should be less then end date");
          } else {
            setCampaignName(CampaignName.current.value);
            setPlanedBudget(parseInt(CostPerPost.current.value));
            setCostPerPost(parseInt(CostPerPost.current.value));
            setStartDate(StartDate.current.value);
            setEndDate(EndDate.current.value);
            setMinReach(parseInt((_C = MinReach.current) == null ? void 0 : _C.value));
            setMaxReact(parseInt((_D = MaxReact.current) == null ? void 0 : _D.value));
            setPublicGlobally(active);
            navigator("/home/createcampaign/step5");
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", background: "bg-secondary", width: "w-full", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 217,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step4.tsx",
          lineNumber: 173,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step4.tsx",
        lineNumber: 168,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 123,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step4.tsx",
      lineNumber: 122,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step4.tsx",
    lineNumber: 73,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step4.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this);
};
var step4_default = Step4;
export {
  step4_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step4-JMFKKJ3I.js.map
