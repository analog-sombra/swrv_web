import {
  createcampaign_default
} from "/build/_shared/chunk-KXH2FK5W.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCircleXmark
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/createcampaign/step5.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step5 = () => {
  const [error, setErrot] = (0, import_react2.useState)(null);
  const [imgerror, setImgerror] = (0, import_react2.useState)(null);
  let image = createcampaign_default((state) => state.image);
  let addImage = createcampaign_default((state) => state.addImage);
  let removeImage = createcampaign_default((state) => state.removeImage);
  const brandInfo = (0, import_react2.useRef)(null);
  let BrandInfo = createcampaign_default((state) => state.brandinfo);
  let setBrandinfo = createcampaign_default((state) => state.setBrandinfo);
  const CampaignPurpose = (0, import_react2.useRef)(null);
  let campaignPurpose = createcampaign_default((state) => state.campaginPurpose);
  let setCampaginPurpose = createcampaign_default((state) => state.setCampaginPurpose);
  let imgref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    brandInfo.current.value = BrandInfo;
    CampaignPurpose.current.value = campaignPurpose;
  }, []);
  const navigator = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: brandInfo, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign purpose" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: CampaignPurpose, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mood boards" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
        let file_size = parseInt((value.target.files[0].size / 1024 / 1024).toString());
        if (file_size < 4) {
          setImgerror(null);
          addImage(value.target.files[0]);
        } else {
          setImgerror("Image file size must be less then 4 mb");
        }
      } }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]", children: [
        image.map((value, i) => {
          var url = URL.createObjectURL(value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "top-0 left-0 absolute h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: url, alt: "error", className: "w-full h-full rounded-xl object-cover" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step5.tsx",
              lineNumber: 69,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step5.tsx",
              lineNumber: 68,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor-pointer", onClick: () => {
              removeImage(value);
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-red-500 font-bold text-xl top-0 right-0 absolute", icon: faCircleXmark }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step5.tsx",
              lineNumber: 73,
              columnNumber: 48
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step5.tsx",
              lineNumber: 71,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 67,
            columnNumber: 41
          }, this) }, i, false, {
            fileName: "app/routes/home/createcampaign/step5.tsx",
            lineNumber: 66,
            columnNumber: 37
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center cursor-pointer", onClick: () => {
          var _a;
          (_a = imgref.current) == null ? void 0 : _a.click();
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd, className: "text-gray-400 text-3xl font-bold text-center" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 81,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      imgerror == "" || imgerror == null || imgerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 86,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 91,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Brand info" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 93,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 94,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Brand info" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 95,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 92,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Campaign purpose" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 98,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Campaign purpose" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 97,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Hashtags" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 104,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Hashtags" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 105,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 102,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "Mentions" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 109,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "Mentions" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 110,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 107,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "You should do:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 113,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 114,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "You should do:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 115,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 112,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-normal", children: "You should don't:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 118,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 119,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "You should don't:" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 120,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 117,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 123,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          navigator(-1);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 127,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 126,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 129,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (((_a = brandInfo.current) == null ? void 0 : _a.value) == null || ((_b = brandInfo.current) == null ? void 0 : _b.value) == void 0 || ((_c = brandInfo.current) == null ? void 0 : _c.value) == "") {
            setErrot("Fill the Brand Info");
          } else if (((_d = CampaignPurpose.current) == null ? void 0 : _d.value) == null || ((_e = CampaignPurpose.current) == null ? void 0 : _e.value) == void 0 || ((_f = CampaignPurpose.current) == null ? void 0 : _f.value) == "") {
            setErrot("Fill the Campaign Purpose.");
          } else if (image.length == 0) {
            setErrot("Select at least one image.");
          } else {
            setBrandinfo((_g = brandInfo.current) == null ? void 0 : _g.value);
            setCampaginPurpose((_h = CampaignPurpose.current) == null ? void 0 : _h.value);
            setErrot(null);
            navigator("/home/createcampaign/step6");
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", background: "bg-secondary", width: "w-full", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 145,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step5.tsx",
          lineNumber: 130,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step5.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 90,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step5.tsx",
      lineNumber: 89,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step5.tsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step5.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this);
};
var step5_default = Step5;
export {
  step5_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step5-O7CTBEGC.js.map
