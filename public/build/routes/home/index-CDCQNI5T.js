import {
  BrandCard
} from "/build/_shared/chunk-Q5VLLAZP.js";
import {
  CampaginCard
} from "/build/_shared/chunk-WIIM37XS.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  create
} from "/build/_shared/chunk-3RAS7ZQP.js";
import {
  FontAwesomeIcon,
  faHeart,
  faIdBadge,
  faStar,
  faXmark
} from "/build/_shared/chunk-4MAHYGKM.js";
import {
  Link
} from "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/state/home/profilecompletestat.ts
var ProfileComleteStore = create()((set) => ({
  isOpen: true,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var profilecompletestat_default = ProfileComleteStore;

// app/routes/home/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HomePage = () => {
  const isOpen = profilecompletestat_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileComplete, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 14,
      columnNumber: 23
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EarnSection, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SponsoredPosts, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewCampaign, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopBrands, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
};
var home_default = HomePage;
var ProfileComplete = () => {
  const changeState = profilecompletestat_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grow flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-10 md:w-[400px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-md text-white font-normal", children: "Your linked social media accounts are under verification. You'll be notified within 24 hours." }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 36,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "xl:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/home/profilecomplete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Click here to complete", textColor: "text-white", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
      changeState(false);
    }, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-white text-2xl font-bold", icon: faXmark }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 45,
        columnNumber: 62
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
};
var Intro = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf1.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf3.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf4.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf5.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf6.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf7.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 75,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf8.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf9.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf13.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 84,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/inf/inf14.png", alt: "error" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
};
var EarnSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/cashgirl.png", alt: "error", className: "md:h-80" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 100,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 104,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 105,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 103,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 102,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 98,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 97,
    columnNumber: 9
  }, this);
};
var SponsoredPosts = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faHeart, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 118,
        columnNumber: 101
      }, this),
      " Sponsored Posts "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 120,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 121,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/hilton.jpg", name: "Hilton" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 123,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 119,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 117,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 116,
    columnNumber: 9
  }, this);
};
var NewCampaign = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faIdBadge, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 134,
        columnNumber: 99
      }, this),
      " New Campaign "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 134,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/powerfitgym.jpg", name: "Power Fit Gym" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/szechuan_restaurant.jpg", name: "Szechuan Restaurant" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/theburgershop.jpg", name: "Theburgershop" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 138,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 139,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 133,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 132,
    columnNumber: 9
  }, this);
};
var TopBrands = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faStar, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 149,
        columnNumber: 99
      }, this),
      " Top brands "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 149,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 152,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 153,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 154,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 150,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 148,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 147,
    columnNumber: 9
  }, this);
};
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/home/index-CDCQNI5T.js.map
