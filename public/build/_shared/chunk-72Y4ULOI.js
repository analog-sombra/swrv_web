import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  FontAwesomeIcon,
  faStar
} from "/build/_shared/chunk-DNQX6AAQ.js";
import {
  Link
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/utils/influencercard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InfluencerCard = (props) => {
  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-xs text-pink-500", icon: faStar }, i, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this)
      );
    }
    if (fractionalStar > 0) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-pink-500",
            icon: faStar,
            style: { width: `${fractionalStar * 100}%` }
          },
          fullStars,
          false,
          {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 26,
            columnNumber: 17
          },
          this
        )
      );
    }
    for (let i = 0; i < 5 - fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: faStar
          },
          5 + i,
          false,
          {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: stars }, void 0, false, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 45,
      columnNumber: 16
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "w-full h-40 object-cover rounded-t-md" }, void 0, false, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-1 -translate-y-5 pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 bg-white border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-6 h-6 rounded-full" }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 border-blue-500 bg-white rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-6 h-6 rounded-full" }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start my-2 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left", children: props.name.split("@")[0] }, void 0, false, {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 62,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 64,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 63,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-bold  text-md text-right", children: [
          "3500 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/utils/influencercard.tsx",
            lineNumber: 69,
            columnNumber: 90
          }, this),
          "USD / post"
        ] }, void 0, true, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 69,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/utils/influencercard.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-normal my-2 text-xs text-center", children: "Status: Campaign draft pending" }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/home/brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "View Campaign", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/utils/influencercard.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/influencercard.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/influencercard.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/influencercard.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};
var influencercard_default = InfluencerCard;

export {
  influencercard_default
};
//# sourceMappingURL=/build/_shared/chunk-72Y4ULOI.js.map
