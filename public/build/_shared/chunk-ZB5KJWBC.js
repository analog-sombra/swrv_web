import {
  create
} from "/build/_shared/chunk-3RAS7ZQP.js";
import {
  FontAwesomeIcon,
  faBars,
  faRemove,
  faRightToBracket
} from "/build/_shared/chunk-4MAHYGKM.js";
import {
  NavLink
} from "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/state/home/intronavstate.ts
var IntroNavStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var intronavstate_default = IntroNavStore;

// app/components/home/navbar/navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NavLinks = () => {
  const changMenu = intronavstate_default((state) => state.change);
  const closeMenu = () => {
    changMenu(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center my-4 md:my-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex flex-col items-center gap-y-4 md:flex-row text-primary font-semibold text-sm`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "What you get" }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "How it's work" }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/about", className: "px-2", children: "About" }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/contact", className: "px-2", children: "Contact" }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { onClick: () => closeMenu, to: "/blogs", className: "px-2", children: "Blogs" }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 39,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 34,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
};
var LoginButton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center py-4 lg:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-black text-md font-normar cursor-pointer`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRightToBracket }, void 0, false, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this),
    " Login"
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 50,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};

// app/components/home/navbar/intronavbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var IntroNavBar = () => {
  const isOpen = intronavstate_default((state) => state.isOpen);
  const changMenu = intronavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full grid place-items-center px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-row  my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-4 grid place-items-center md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? faRemove : faBars }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 15,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "./images/swrvlogo.png", className: "w-32 lg:w-38" }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 19,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 18,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "place-content-center hidden md:grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLinks, {}, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 23,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 22,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoginButton, {}, void 0, false, {
        fileName: "app/components/home/navbar/intronavbar.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLinks, {}, void 0, false, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/intronavbar.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

export {
  IntroNavBar
};
//# sourceMappingURL=/build/_shared/chunk-ZB5KJWBC.js.map
