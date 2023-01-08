import {
  faDraft2digital
} from "/build/_shared/chunk-25HLZJFV.js";
import {
  create
} from "/build/_shared/chunk-3RAS7ZQP.js";
import {
  FontAwesomeIcon,
  faBars,
  faBell,
  faChevronLeft,
  faChevronRight,
  faCircleQuestion,
  faEnvelope,
  faFolder,
  faHandHoldingDollar,
  faHeart,
  faPeopleLine,
  faRemove,
  faSearch
} from "/build/_shared/chunk-4MAHYGKM.js";
import {
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/home/footer/homefooter.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HomeFooter = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex py-6 px-8 flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." }, void 0, false, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center my-2 md:my-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, false, {
        fileName: "app/components/home/footer/homefooter.tsx",
        lineNumber: 10,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, false, {
        fileName: "app/components/home/footer/homefooter.tsx",
        lineNumber: 11,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 9,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};

// app/state/home/sidebarstate.ts
var SideBarStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var sidebarstate_default = SideBarStore;

// app/state/navigation/sidebar.ts
var SideBarNavStore = create()((set) => ({
  currentIndex: 0 /* None */,
  changeTab: (value) => set((state) => ({ currentIndex: value }))
}));
var sidebar_default = SideBarNavStore;

// app/components/home/sidebar/sidebar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var SideBar = () => {
  const currentPage = sidebar_default((state) => state.currentIndex);
  const sidebar = sidebar_default((state) => state.changeTab);
  const isOpen = sidebarstate_default((state) => state.isOpen);
  const changeSidebar = sidebarstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: ` ${isOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col py-8 px-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => {
      changeSidebar(!isOpen);
    }, className: "w-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/sidebar/sidebar.tsx",
        lineNumber: 18,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] `, children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: isOpen ? faChevronLeft : faChevronRight }, void 0, false, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 19,
          columnNumber: 138
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/home/sidebar/sidebar.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/mycampaings", onClick: () => {
      sidebar(1 /* MyCampaigns */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "My campaigns", isOpen, isActive: currentPage === 1 /* MyCampaigns */, icon: faFolder }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/findcampaign", onClick: () => {
      sidebar(2 /* FindCampaigns */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Find campaigns", isOpen, isActive: currentPage === 2 /* FindCampaigns */, icon: faSearch }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 25,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", onClick: () => {
      sidebar(3 /* Inbox */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Inbox", isOpen, isActive: currentPage === 3 /* Inbox */, icon: faEnvelope }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 28,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", onClick: () => {
      sidebar(4 /* MyEarnings */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "My earnings", isOpen, isActive: currentPage === 4 /* MyEarnings */, icon: faHandHoldingDollar }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 31,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", onClick: () => {
      sidebar(5 /* Drafts */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Drafts", isOpen, isActive: currentPage === 5 /* Drafts */, icon: faDraft2digital }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/favourite", onClick: () => {
      sidebar(6 /* Favourite */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Favourite", isOpen, isActive: currentPage === 6 /* Favourite */, icon: faHeart }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/invite", onClick: () => {
      sidebar(7 /* Invite */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Invite", isOpen, isActive: currentPage === 7 /* Invite */, icon: faPeopleLine }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 40,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 39,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow" }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/help", onClick: () => {
      sidebar(8 /* Help */);
      changeSidebar(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavTab, { title: "Help", isOpen, isActive: currentPage === 8 /* Help */, icon: faCircleQuestion }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 44,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 16,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
};
var NavTab = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`, children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: props.icon }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 64,
      columnNumber: 257
    }, this),
    " ",
    props.isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "ml-4 font-normal text-md", children: props.title }, void 0, false, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 64,
      columnNumber: 327
    }, this) : null,
    "  "
  ] }, void 0, true, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 64,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
};

// app/state/home/mobilenavstate.ts
var MobileNavStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var mobilenavstate_default = MobileNavStore;

// app/state/home/notification.ts
var NotificationStore = create()((set) => ({
  isOpen: false,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var notification_default = NotificationStore;

// app/components/home/notification.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Notification = () => {
  const open = notification_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NotificationTab, {}, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};
var notification_default2 = Notification;
var NotificationTab = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full border-b-2 border-gray-400 flex py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "w-14 h-14 rounded-lg" }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 22,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-500 font-semibold text-sm leading-normal w-40", children: "Adidas have created a campaign for you would you like to accept?" }, void 0, false, {
      fileName: "app/components/home/notification.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/notification.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
};

// app/components/home/navbar/mainnavbar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var MainNavBar = () => {
  const currentPage = sidebar_default((state) => state.currentIndex);
  const sidebar = sidebar_default((state) => state.changeTab);
  const isOpen = mobilenavstate_default((state) => state.isOpen);
  const changMenu = mobilenavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white w-full shadow-xl rounded-2xl ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full  flex px-4 items-center py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mr-4 md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? faRemove : faBars }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 23,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/images/swrvlogo.png", className: "w-28 inline-block rounded-lg" }, void 0, false, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 27,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 26,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Barnd" }, void 0, false, {
          fileName: "app/components/home/navbar/mainnavbar.tsx",
          lineNumber: 29,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 25,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 31,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MainNavRight, {}, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `w-full p-2 md:hidden ${isOpen ? "" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/mycampaings", onClick: () => {
        sidebar(1 /* MyCampaigns */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "My campaigns", isOpen: true, isActive: currentPage == 1 /* MyCampaigns */, icon: faFolder }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 38,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 37,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/findcampaign", onClick: () => {
        sidebar(2 /* FindCampaigns */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Find campaigns", isOpen: true, isActive: currentPage == 2 /* FindCampaigns */, icon: faSearch }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 41,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 40,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/inbox", onClick: () => {
        sidebar(3 /* Inbox */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Inbox", isOpen: true, isActive: currentPage == 3 /* Inbox */, icon: faEnvelope }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 44,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", onClick: () => {
        sidebar(4 /* MyEarnings */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "My earnings", isOpen: true, isActive: currentPage == 4 /* MyEarnings */, icon: faHandHoldingDollar }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 47,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 46,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", onClick: () => {
        sidebar(5 /* Drafts */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Drafts", isOpen: true, isActive: currentPage == 5 /* Drafts */, icon: faDraft2digital }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 50,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 49,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/favourite", onClick: () => {
        sidebar(6 /* Favourite */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Favourite", isOpen: true, isActive: currentPage == 6 /* Favourite */, icon: faHeart }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 53,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 52,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/home/invite", onClick: () => {
        sidebar(7 /* Invite */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Invite", isOpen: true, isActive: currentPage == 7 /* Invite */, icon: faPeopleLine }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 56,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 55,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", onClick: () => {
        sidebar(8 /* Help */);
        changMenu(false);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavTab, { title: "Help", isOpen: true, isActive: currentPage == 8 /* Help */, icon: faCircleQuestion }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 59,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 20,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
};
var MainNavRight = () => {
  const open = notification_default((state) => state.isOpen);
  const changeNotification = notification_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:flex hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { onClick: () => changeNotification(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faBell }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(notification_default2, {}, void 0, false, {
        fileName: "app/components/home/navbar/mainnavbar.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-8 mx-4 bg-primary w-[2px]", children: " " }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 83,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-center text-xs text-black font-normal", children: "ivankbfc@gmail.com" }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 86,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/images/inf/inf6.png", alt: "error", className: "w-10 h-10 rounded object-cover" }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 89,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 88,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 76,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this);
};

// app/routes/home.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var HomePage = () => {
  const isOpen = sidebarstate_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex md:relative bg-background", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SideBar, {}, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `w-full md:grow  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainNavBar, {}, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HomeFooter, {}, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};
var home_default = HomePage;
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/home-T23XJKGO.js.map
