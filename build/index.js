var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-ETHGE74X.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "SWRV",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Error" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-screen w-full bg-[#000614] grid place-content-center", children: [
      caught.status == 404 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid place-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "text-white text-[100px] text-center font-bold", children: "404" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-white text-3xl text-center font-semibold", children: "oops!! page not found." }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", className: "text-white font-medium text-center bg-slate-800 py-2 px-4 mt-4", children: "Go to HomePage" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", { children: [
        caught.status,
        " ",
        caught.statusText
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "This is an error" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("main", { className: "h-screen grid place-items-center w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bg-red-500 bg-opacity-10 w-96 rounded-md p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "text-red-500 text-2xl font-medium  text-center", children: "An Error occurred!" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-red-500 text-lg  text-center", children: error.message }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "text-gray-500 text-lg text-center", children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", className: "text-blue-500 underline", children: "safety!" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/blogs/bloginfo.tsx
var bloginfo_exports = {};
__export(bloginfo_exports, {
  default: () => bloginfo_default2
});

// app/components/home/footer/footer.tsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons"), import_jsx_runtime3 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "w-full grid place-items-center  bg-primary py-8 md:py-20 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-white text-3xl font-semibold text-center md:text-left", children: "SWRV" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grow flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faFacebookSquare }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faLinkedinIn }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faTwitter }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faInstagram }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grow flex md:justify-end justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Head Office" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Dockplatsen 1, 211 19 Malm\xF6, Sweden" })
  ] }) })
] }) }) });

// app/components/home/navbar/intronavbar.tsx
var import_react4 = require("@remix-run/react");

// app/components/home/navbar/navbar.tsx
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react3 = require("@remix-run/react");

// app/state/home/intronavstate.ts
var import_zustand = __toESM(require("zustand")), IntroNavStore = (0, import_zustand.default)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), intronavstate_default = IntroNavStore;

// app/components/home/navbar/navbar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var NavLinks = () => {
  let changMenu = intronavstate_default((state) => state.change), closeMenu = () => {
    changMenu(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid place-items-center my-4 md:my-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col items-center gap-y-4 md:flex-row text-primary font-semibold text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "What you get" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "How it's work" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/about", className: "px-2", children: "About" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/contact", className: "px-2", children: "Contact" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/blogs", className: "px-2", children: "Blogs" })
  ] }) }) });
}, LoginButton = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid place-items-center py-4 lg:p-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-black text-md font-normar cursor-pointer", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faRightToBracket }),
  " Login"
] }) }) });

// app/components/home/navbar/intronavbar.tsx
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime5 = require("react/jsx-runtime"), IntroNavBar = () => {
  let isOpen = intronavstate_default((state) => state.isOpen), changMenu = intronavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full grid place-items-center px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-row  my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mr-4 grid place-items-center md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome3.FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? import_free_solid_svg_icons2.faRemove : import_free_solid_svg_icons2.faBars }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: "./images/swrvlogo.png", className: "w-32 lg:w-38" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "place-content-center hidden md:grid", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavLinks, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LoginButton, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden `, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavLinks, {}) })
  ] }) });
};

// app/components/utils/blogscard.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), BlogsCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mx-4 my-4 grid place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-64 text-primary text-left font-semibold text-md my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "UPDATE" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: props.time })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-64 text-left shadow-xl rounded-xl h-72", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: props.imageUrl, alt: "err", className: "w-full" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-md font-bold my-2 text-black p-4", children: props.title })
  ] })
] }) }), BigBlogCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: `w-full rounded-2xl grid grid-cols-1 lg:grid-cols-2 ${props.background ?? "bg-white"} shadow-xl my-10 lg:h-80`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: props.imageUrl, alt: "err", className: "h-80 w-full inline-block rounded-2xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: `${props.textColor ?? "text-black"} text-left font-semibold text-md my-2 p-4 md:p-12 grow`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "UPDAYE" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: props.time }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-xl font-bold my-2", children: props.title })
  ] })
] }) });

// app/components/blogpage/bloginfo.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), BlogsInfo = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "md:h-[550px] w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: "./images/blogs/bloginfo.png", alt: "error", className: "h-full w-full rounded-lg inline-block relative" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full mx-auto absolute bottom-0 hidden md:block", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "text-white text-2xl font-semibold md:w-96", children: "Three AAPI founders building apps on the App Store that cultivate community" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-md font-semibold text-white py-10", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "text-primary text-2xl font-semibold md:w-96 sm:hidden", children: "Three AAPI founders building apps on the App Store that cultivate community" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-md font-semibold text-primary py-10 md:hidden", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-md font-semibold text-primary", children: "App creators Dawoon Kang of Coffee Meets Bagel, Annie Vang of HmongPhrases, and Larry Liu of Weee! are bringing people together, finding innovative solutions, and forging their own paths." }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-md font-normal text-primary mt-10", children: "AppMany of today\u2019s most impactful creators are combining the power of technology with their personal experiences to offer valuable spaces for users to learn, share, and connect on the App Store. When Larry Liu first immigrated to the U.S., he realised there wasn\u2019t an easy way for the Asian community to buy the goods needed to make some of their favorite dishes. Wanting to provide a place to celebrate and bring widespread access to Asian and Hispanic food, he turned to the App Store to launch grocery delivery app Weee! People would no longer have to be limited to the small \u201Cethnic\u201D aisle at mainstream grocery stores. As big advocates for human connection, Dawoon Kang and her twin sister Arum teamed up to found Coffee Meets Bagel, a dating app with an intentionally \u201Cslower\u201D approach. Their algorithm focuses not on getting users the most likes, but on guiding them toward meaningful conversations. As one of the most popular dating apps, Coffee Meets Bagel has facilitated over 150 million matches to date." }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-md font-normal text-primary mt-10", children: "Annie Vang, a participant of Apple Entrepreneur Camp in 2021, created HmongPhrases to help preserve the Hmong dialect for future generations. Though the Hmong population has been in the U.S. for over 40 years, it is widely considered one of the most marginalised Asian groups. Her app allows users to search for a phrase in Hmong, hear what it sounds like, and then practice saying it out loud. As a true labor of love, not only does Annie do the coding for the app herself \u2014 she even records the phrases in her own voice. Liu, Kang, and Vang discuss how they used technology to transform their ideas into powerful platforms, how their apps uplift their communities, and how they influence positive change." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Top picks" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Related article" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" })
    ] })
  ] })
] }) }), bloginfo_default = BlogsInfo;

// app/routes/blogs/bloginfo.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), blogs = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(bloginfo_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
] }), bloginfo_default2 = blogs;

// app/routes/blogs/index.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default
});

// app/components/blogpage/blogspage.tsx
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons"), import_jsx_runtime9 = require("react/jsx-runtime"), BlogsIntro = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full px-6 sm:px-16 relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: " absolute w-full h-screen box-border left-0 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: " bg-[#EFEFEF] box-border w-full h-screen rounded-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog6.png", textColor: "text-white" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog7.png", textColor: "text-white" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center my-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "grid place-items-center my-10", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronLeft }),
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-primary text-md font-normal grid place-items-center mx-10", children: "1  of 20" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronRight }),
        " "
      ] })
    ] }) })
  ] })
] }) }), blogspage_default = BlogsIntro;

// app/routes/blogs/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), blogs2 = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(blogspage_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Footer, {})
] }), blogs_default = blogs2;

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});

// app/components/user/register.tsx
var import_react5 = require("@remix-run/react");

// app/components/utils/buttont.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), CusButton = (props) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { onClick: () => {
  props.func != null && props.func();
}, className: `text-center py-2 ${props.margin ?? "my-3"} rounded-lg font-normal ${props.background ?? "bg-primary"} ${props.textColor ?? "text-white"} ${props.textSize ?? "text-md"} ${props.width ?? "w-44"} ${props.background ?? "bg-transparent"} ${props.border ?? "border-2"} ${props.borderColor ?? "border-transparent"}  ${props.height ?? ""} ${props.extra ?? ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: `${props.fontwidth ?? "font-normal"}`, children: props.text }) });

// app/components/user/register.tsx
var import_react6 = require("react"), import_jsx_runtime12 = require("react/jsx-runtime"), RegisterBox = () => {
  let [isBrand, setBrand] = (0, import_react6.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: "./images/avatar/login.png", alt: "err", className: "justify-self-end w-[250px] h-[400px]" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-full", onClick: () => {
          setBrand(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CusButton, { width: "w-full", text: "Influencer", background: `${isBrand ? "" : "bg-secondary"}`, textColor: `${isBrand ? "text-primary" : "text-white"}`, borderColor: `${isBrand ? "border-primary" : ""}`, fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-full", onClick: () => {
          setBrand(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CusButton, { width: "w-full", text: "Brand", textColor: `${isBrand ? "text-white" : "text-primary"}`, background: `${isBrand ? "bg-secondary" : ""}`, borderColor: `${isBrand ? "" : "border-primary"}`, fontwidth: "font-bold" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex content-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Link, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CusButton, { text: "create account", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-4 content-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "checkbox", name: "check1" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-4 mt-4 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "checkbox", name: "check2" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
        "I\u2019m already registered.",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react5.Link, { to: "/login", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-bold", children: " Let me Log in" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "hidden lg:block" })
  ] }) });
};

// app/routes/register.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), register = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RegisterBox, {})
] }), register_default = register;

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default2
});

// app/components/contact/contact.tsx
var import_react_fontawesome5 = require("@fortawesome/react-fontawesome");

// app/components/utils/downloadapp.tsx
var import_jsx_runtime14 = require("react/jsx-runtime"), DownloadApp = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#0000004C]  rounded-xl flex mt-8 p-6 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("h3", { className: "text-white text-4xl font-bold", children: [
      "Join the largest ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
      " influencer network"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "Instant access to top influencers" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grow" }),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CusButton, { text: "Download Our app", background: "bg-secondary" }) }) })
] }) });

// app/components/contact/contact.tsx
var import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime15 = require("react/jsx-runtime"), ContactPage = () => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-full px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg-[#EFEFEF] rounded-2xl sm:p-0 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10 ", children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "text-5xl font-bold text-primary flex", children: "Love to hear from you" }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h1", { className: "text-5xl  font-bold text-primary flex", children: [
    "Get in touch ",
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: "./images/icons/hand.png", alt: "error" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-4 flex-col lg:flex-row items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: " w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faLocationDot }),
      " 102 street 2712 Don"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faPhone }),
      " 102 street 2712 Don"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faMailBulk }),
      " 102 street 2712 Don"
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-white p-6 rounded-2xl my-10 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CusButton, { text: "I'am a brand", textColor: "text-black", borderColor: "b-gray-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Your Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your phone number" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Message" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { className: "p-4 w-full h-60 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none", placeholder: "your message" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CusButton, { text: "Send Message", background: "bg-primary" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DownloadApp, {})
] }) }) }) }), contact_default = ContactPage;

// app/routes/contact.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), contact = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(contact_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Footer, {})
] }), contact_default2 = contact;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2
});

// app/components/utils/teamcard.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), TeamCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "w-64 text-left shadow-xl rounded-xl pb-4 m-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("img", { src: props.imageUrl, alt: "err", className: "w-full" }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h1", { className: "text-xl font-bold text-primary text-center mt-2", children: props.name }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h1", { className: "text-md font-semibold text-primary text-center", children: props.position })
] }) });

// app/components/about/about.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), AboutPage = () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "About SWRV influencer platform" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-md font-semibold text-primary mt-6", children: "Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf8.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf14.png", alt: "error" }) }),
      "  ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf13.png", alt: "error" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf12.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf11.png", alt: "error" }) }),
      "  ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf10.png", alt: "error" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "./images/inf/inf9.png", alt: "error" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "We assist the influencer marketing sector in" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-secondary text-3xl font-bold", children: "becoming more efficient." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "text-md font-normal text-gray-600 mt-10", children: [
      "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date.",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea.",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      " SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "bg-[#0000004C] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-white text-3xl font-bold", children: "Mission Statement:" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-md font-semibold text-white mt-4", children: "SWRV aims to provide the most comprehensive reviews of marketing software and services globally, enabling brands and marketing decision makers to make smarter decisions around their marketing stack." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "The Core Team" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Werner Geyser", position: "Founder", imageUrl: "./images/team/team1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Yaroslav Siryk", position: "CTO", imageUrl: "./images/team/team2.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Anne Vest", position: "COO", imageUrl: "./images/team/team6.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Sasha Bondarenko", position: "Growth Marketing", imageUrl: "./images/team/team5.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Djordje Pajkanovic", position: "UX/UI Designer", imageUrl: "./images/team/team4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TeamCard, { name: "Sasha Bondarenko", position: "General Manager", imageUrl: "./images/team/team3.png" })
    ] })
  ] })
] }) }), about_default = AboutPage;

// app/routes/about.tsx
var import_jsx_runtime19 = require("react/jsx-runtime"), about = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(about_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Footer, {})
] }), about_default2 = about;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});

// app/components/utils/markatingcard.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), MarkatingCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: `h-full w-38 text-left text-gray-600 p-4 ${props.leftBorder ? "border-l-2 border-gray-400" : ""}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { src: props.imageUrl, alt: "err" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: "text-xl font-bold my-4", children: props.title }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-md font-normal", children: props.description })
] }) });

// app/components/utils/categorycard.tsx
var import_jsx_runtime21 = require("react/jsx-runtime"), CategoryCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "w-40 text-left text-gray-600 p-3 border-2 border-gray-400 shadow-md rounded-xl my-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("img", { src: props.imageUrl, alt: "err" }),
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "text-xl font-bold my-2 text-primary", children: props.title }),
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm font-normal", children: props.description })
] }) });

// app/components/homepage/homeintro.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), HomeIntro = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(HomeFirst, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(RelatatinoAndTrust, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Market, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Marketing, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(PowerfullInf, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ExploreCategory, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(JoinSwrv, {}),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Blogs, {})
] }) }), RelatatinoAndTrust = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto lg:my-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "We strengthen relationships between" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-secondary text-3xl font-bold", children: "brands and creatives." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-black text-md font-normal", children: "Our mission is to Make Waves, which stems from the fact that our creators tell stories that foster human relationships and generate waves of influence. These waves of influence create our data layers, and we use them to calculate the impact. Our clients and creators make a splash, and we track the results." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Trusted by" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "h-[1px] bg-black w-full my-2" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-5xl text-center text-gray-600 gap-x-5 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "OGILVY" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "McDonald's" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "Shelter" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "Playtika" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "Starbucks" }) })
  ] })
] }), HomeFirst = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute h-[450px] md:h-[550px] lg:h-[700px] w-full inline-block mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "h-full w-full bg-primary rounded-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full px-5 md:p-0 md:w-3/5 lg:w-4/6 relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "pt-10 md:pt-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-white text-5xl font-bold", children: "Reach the next billion" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "We connect brands with targeted audience through nano influencer marketing. Save time and improve performance. Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CusButton, { text: "I'am a brand", borderColor: "border-white" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" })
    ] })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute w-full", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "px-2 sm:px-20 mx-auto grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/mast_group.svg", alt: "error", className: "w-[1200px] mx-auto" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full md:w-3/5 lg:w-4/6 py-20 relative mx-auto grid place-content-center ", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex  gap-4 px-6 md:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf4.png", alt: "error" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col  gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex  gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf2.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf6.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf5.png", alt: "error" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf7.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf3.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf1.png", alt: "error" }) })
        ] })
      ] })
    ] }) })
  ] })
] }) }), Market = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full bg-[#EFEFEF]  rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mx-auto py-4 w-full md:w-3/5 lg:w-4/6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full  mx-auto my-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h3", { className: "text-primary text-3xl font-bold", children: [
      "An entire ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-secondary", children: "marketing platform" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      " for influencers"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-black text-md font-normal", children: "All of the campaign's steps are smoothly integrated into a single user experience." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:place-items-center my-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon1.png", title: "Make a campaign", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon5.png", title: "Look for influencers.", description: "Access a vast influencer database. It's simple to locate influencers thanks to advanced search criteria.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon4.png", title: "Statistics", description: "Real-time campaign performance analysis and sharing", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon3.png", title: "Communication", description: "For quick and easy connection with your influencers, there's an integrated chat option and a notification centre.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon2.png", title: "Payments", description: "Easily and securely manage payments from buyers to influencers.", leftBorder: !0 })
  ] })
] }) }) }), PowerfullInf = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full my-10 bg-[#0000004C] py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: " w-full md:w-3/5 lg:w-4/6 mx-auto md:p-0 p-6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h3", { className: "text-white text-4xl font-bold", children: [
    "ARE YOU A POWERFUL",
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    " INFLUENCER?"
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "Stop looking for the ideal marketplace to join and simply join all of them." }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CusButton, { text: "Join Now", background: "bg-secondary" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CusButton, { text: "Read More", borderColor: "border-white" })
  ] })
] }) }) }), Marketing = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: " py-4 w-full md:w-3/5 lg:w-4/6   mx-auto", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-4xl font-bold", children: "We assist the influencer marketing sector in" }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-secondary text-4xl font-bold", children: "becoming more efficient." }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h3", { className: "text-gray-500 text-md font-normal mt-4", children: [
    "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date. ",
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea. SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DownloadApp, {})
] }) }) }), ExploreCategory = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Explore by category" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid place-items-center grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 my-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/education.png", title: "Education", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/food.png", title: "Food", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/photography.png", title: "Photography", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/travel.png", title: "Travel", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/motivation.png", title: "Motivation", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/beauty.png", title: "Beauty", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/automotive.png", title: "Automotive", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CategoryCard, { imageUrl: "./images/icons/health.png", title: "Health", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." })
  ] })
] }), JoinSwrv = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Join SWRV" }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-gray-600 text-md font-normal", children: "There are no commissions or membership costs for brands or buyer agencies." }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 place-items-center my-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-60 h-40 m-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf2.png", className: "w-full h-full" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-60 h-40  m-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf3.png", className: "w-full h-full" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-60 h-40 hidden lg:block  m-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "./images/inf/inf4.png", className: "w-full h-full" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-gray-600 text-lg font-semibold", children: "SWRV market" }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h3", { className: "text-gray-500 text-md font-normal", children: [
    "SWRV Market is SWRV's entire influencer marketing soluction. The whole campaign flow - discorvery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction-base business model that is avaliable to any brand or purchasing agency for free.",
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
    "SWRV is a free assistance programme that may help you grow faster and get a competitver advantage."
  ] })
] }) }), Blogs = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-primary text-3xl font-bold grid place-items-center", children: "Blogs" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CusButton, { text: "Read More", textColor: "text-primary", borderColor: "border-secondary" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "h-[1px] bg-black w-full my-2" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 items-start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BlogsCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "June 1, 2022", imageUrl: "./images/blogs/blog5.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog2.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BlogsCard, { title: "From farm to sea: Conserving mangroves to protect local livelihoods and the planet", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" })
  ] })
] });

// app/routes/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime"), index = () => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(HomeIntro, {}),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Footer, {})
] }), routes_default = index;

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default,
  loader: () => loader
});
var import_react9 = require("@remix-run/react");

// app/components/home/footer/mainfooter.tsx
var import_react7 = require("@remix-run/react"), import_jsx_runtime24 = require("react/jsx-runtime"), MainFooter = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "w-full flex py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col sm:flex-row justify-center content-center items-center w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react7.Link, { to: "/about", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "About" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react7.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react7.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react7.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Cookie policy" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react7.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "FAQ" }) })
] }) }) });

// app/components/user/login.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_runtime25 = require("react/jsx-runtime"), LoginBox = (props) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: " text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]", children: "Welcome" }),
  /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "hidden lg:flex" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react8.Form, { method: "post", children: [
      props.message && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { name: "email", type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { name: "password", type: "password", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex content-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { className: "w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ", children: "Submit" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex gap-2 mt-4 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { type: "checkbox", name: "check" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-left text-xs text-black font-normal", children: "Keep me logged in" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text-black text-left font-normal text-sm", children: [
        "CAN'T LOG IN? ",
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "font-bold", children: "RESTORE PASSWORD" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react8.Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CusButton, { text: "Join", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "hidden lg:block" })
  ] })
] }) });

// app/utils.ts
function ValidateEmail(mail) {
  return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

// app/routes/login.tsx
var import_node3 = require("@remix-run/node"), import_axios = __toESM(require("axios"));

// app/const.ts
var BaseUrl = "https://bluelemontech.in/websites/swrv";

// app/cookies.ts
var import_node2 = require("@remix-run/node"), userPrefs = (0, import_node2.createCookie)("user-prefs");

// app/routes/login.tsx
var import_jsx_runtime26 = require("react/jsx-runtime"), login = () => {
  let data = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IntroNavBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(LoginBox, { message: data == null ? void 0 : data.message }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(MainFooter, {})
  ] }) });
};
async function loader({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return cookie ? (console.log(cookie), (0, import_node3.redirect)("/home")) : null;
}
var action = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData);
  if (value.email == null || value.email == "" || !ValidateEmail(value.email))
    return { message: "Enter a valid email." };
  if (value.password == "" || value.password == null)
    return { message: "Enter the password" };
  try {
    let data = await import_axios.default.post(`${BaseUrl}/api/login`, { email: value.email, password: value.password });
    return data.data.status == !1 ? { message: data.data.message } : value.check == "on" ? (console.log(data.data.data), (0, import_node3.redirect)("/home", {
      headers: {
        "Set-Cookie": await userPrefs.serialize({ user: data.data.data })
      }
    })) : (0, import_node3.redirect)("/home");
  } catch (e) {
    return { message: e };
  }
}, login_default = login;

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => home_default
});
var import_react13 = require("@remix-run/react");

// app/components/home/footer/homefooter.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime27 = require("react/jsx-runtime"), HomeFooter = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full flex py-6 px-8 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react10.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "grow" }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex justify-center my-2 md:my-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react10.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react10.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" })
  ] })
] }) });

// app/components/home/navbar/mainnavbar.tsx
var import_react12 = require("@remix-run/react"), import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome7 = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons3 = require("@fortawesome/free-brands-svg-icons");

// app/components/home/sidebar/sidebar.tsx
var import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons"), import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome6 = require("@fortawesome/react-fontawesome"), import_react11 = require("@remix-run/react");

// app/state/home/sidebarstate.ts
var import_zustand2 = __toESM(require("zustand")), SideBarStore = (0, import_zustand2.default)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), sidebarstate_default = SideBarStore;

// app/state/navigation/sidebar.ts
var import_zustand3 = __toESM(require("zustand"));
var SideBarNavStore = (0, import_zustand3.default)()((set) => ({
  currentIndex: 0 /* None */,
  changeTab: (value) => set((state) => ({ currentIndex: value }))
})), sidebar_default = SideBarNavStore;

// app/components/home/sidebar/sidebar.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), SideBar = () => {
  let currentPage = sidebar_default((state) => state.currentIndex), sidebar = sidebar_default((state) => state.changeTab), isOpen = sidebarstate_default((state) => state.isOpen), changeSidebar = sidebarstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: ` ${isOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col py-8 px-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { onClick: () => {
      changeSidebar(!isOpen);
    }, className: "w-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: isOpen ? import_free_solid_svg_icons5.faChevronLeft : import_free_solid_svg_icons5.faChevronRight }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/home/mycampaings", onClick: () => {
      sidebar(1 /* MyCampaigns */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "My campaigns", isOpen, isActive: currentPage === 1 /* MyCampaigns */, icon: import_free_solid_svg_icons5.faFolder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/home/findcampaign", onClick: () => {
      sidebar(2 /* FindCampaigns */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Find campaigns", isOpen, isActive: currentPage === 2 /* FindCampaigns */, icon: import_free_solid_svg_icons5.faSearch }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/", onClick: () => {
      sidebar(3 /* Inbox */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Inbox", isOpen, isActive: currentPage === 3 /* Inbox */, icon: import_free_solid_svg_icons5.faEnvelope }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/", onClick: () => {
      sidebar(4 /* MyEarnings */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "My earnings", isOpen, isActive: currentPage === 4 /* MyEarnings */, icon: import_free_solid_svg_icons5.faHandHoldingDollar }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/", onClick: () => {
      sidebar(5 /* Drafts */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Drafts", isOpen, isActive: currentPage === 5 /* Drafts */, icon: import_free_brands_svg_icons2.faDraft2digital }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/home/favourite", onClick: () => {
      sidebar(6 /* Favourite */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Favourite", isOpen, isActive: currentPage === 6 /* Favourite */, icon: import_free_solid_svg_icons5.faHeart }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/home/invite", onClick: () => {
      sidebar(7 /* Invite */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Invite", isOpen, isActive: currentPage === 7 /* Invite */, icon: import_free_solid_svg_icons5.faPeopleLine }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react11.Link, { to: "/home/help", onClick: () => {
      sidebar(8 /* Help */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavTab, { title: "Help", isOpen, isActive: currentPage === 8 /* Help */, icon: import_free_solid_svg_icons5.faCircleQuestion }) })
  ] }) }) });
}, NavTab = (props) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: `${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`, children: [
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: props.icon }),
  " ",
  props.isOpen ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "ml-4 font-normal text-md", children: props.title }) : null,
  "  "
] }) });

// app/state/home/mobilenavstate.ts
var import_zustand4 = __toESM(require("zustand")), MobileNavStore = (0, import_zustand4.default)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), mobilenavstate_default = MobileNavStore;

// app/state/home/notification.ts
var import_zustand5 = __toESM(require("zustand")), NotificationStore = (0, import_zustand5.default)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), notification_default = NotificationStore;

// app/components/home/notification.tsx
var import_jsx_runtime29 = require("react/jsx-runtime"), Notification = () => {
  let open = notification_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: `${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl`, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(NotificationTab, {}) }) });
}, notification_default2 = Notification, NotificationTab = () => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "w-full border-b-2 border-gray-400 flex py-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "w-14 h-14 rounded-lg" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-gray-500 font-semibold text-sm leading-normal w-40", children: "Adidas have created a campaign for you would you like to accept?" })
] }) });

// app/components/home/navbar/mainnavbar.tsx
var import_jsx_runtime30 = require("react/jsx-runtime"), MainNavBar = () => {
  let currentPage = sidebar_default((state) => state.currentIndex), sidebar = sidebar_default((state) => state.changeTab), isOpen = mobilenavstate_default((state) => state.isOpen), changMenu = mobilenavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_jsx_runtime30.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "bg-white w-full shadow-xl rounded-2xl ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "w-full  flex px-4 items-center py-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mr-4 md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_fontawesome7.FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? import_free_solid_svg_icons6.faRemove : import_free_solid_svg_icons6.faBars }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { src: "/images/swrvlogo.png", className: "w-28 inline-block rounded-lg" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { children: "Barnd" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(MainNavRight, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: `w-full p-2 md:hidden ${isOpen ? "" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/home/mycampaings", onClick: () => {
        sidebar(1 /* MyCampaigns */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "My campaigns", isOpen: !0, isActive: currentPage == 1 /* MyCampaigns */, icon: import_free_solid_svg_icons6.faFolder }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/home/findcampaign", onClick: () => {
        sidebar(2 /* FindCampaigns */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Find campaigns", isOpen: !0, isActive: currentPage == 2 /* FindCampaigns */, icon: import_free_solid_svg_icons6.faSearch }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/home/inbox", onClick: () => {
        sidebar(3 /* Inbox */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Inbox", isOpen: !0, isActive: currentPage == 3 /* Inbox */, icon: import_free_solid_svg_icons6.faEnvelope }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/", onClick: () => {
        sidebar(4 /* MyEarnings */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "My earnings", isOpen: !0, isActive: currentPage == 4 /* MyEarnings */, icon: import_free_solid_svg_icons6.faHandHoldingDollar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/", onClick: () => {
        sidebar(5 /* Drafts */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Drafts", isOpen: !0, isActive: currentPage == 5 /* Drafts */, icon: import_free_brands_svg_icons3.faDraft2digital }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/home/favourite", onClick: () => {
        sidebar(6 /* Favourite */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Favourite", isOpen: !0, isActive: currentPage == 6 /* Favourite */, icon: import_free_solid_svg_icons6.faHeart }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/home/invite", onClick: () => {
        sidebar(7 /* Invite */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Invite", isOpen: !0, isActive: currentPage == 7 /* Invite */, icon: import_free_solid_svg_icons6.faPeopleLine }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/", onClick: () => {
        sidebar(8 /* Help */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NavTab, { title: "Help", isOpen: !0, isActive: currentPage == 8 /* Help */, icon: import_free_solid_svg_icons6.faCircleQuestion }) })
    ] }) })
  ] }) }) });
}, MainNavRight = () => {
  let open = notification_default((state) => state.isOpen), changeNotification = notification_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_jsx_runtime30.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "md:flex hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "grid place-items-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { onClick: () => changeNotification(!open), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faBell }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(notification_default2, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "h-8 mx-4 bg-primary w-[2px]", children: " " }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-center text-xs text-black font-normal", children: "ivankbfc@gmail.com" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { src: "/images/inf/inf6.png", alt: "error", className: "w-10 h-10 rounded object-cover" }) })
  ] }) });
};

// app/routes/home.tsx
var import_jsx_runtime31 = require("react/jsx-runtime"), HomePage = () => {
  let isOpen = sidebarstate_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex md:relative bg-background", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(SideBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: `w-full md:grow  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(MainNavBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react13.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(HomeFooter, {})
    ] })
  ] }) });
}, home_default = HomePage;

// app/routes/home/profilecomplete.tsx
var profilecomplete_exports = {};
__export(profilecomplete_exports, {
  default: () => profilecomplete_default
});
var import_react14 = require("@remix-run/react"), import_jsx_runtime32 = require("react/jsx-runtime"), UserEditBox = () => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "w-full bg-white rounded-xl p-4 shadow-xl mt-6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-lg text-center font-medium p-2 bg-secondary text-white w-4/6 rounded-xl", children: "Please complete your profile" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "text-lg text-center font-medium p-2 bg-white text-primary w-4/6 rounded-r-xl", children: "60% completed" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex lg:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "p-6  w-full hidden md:block", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "hidden place-items-center lg:grid ", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { src: "/images/avatar/profile1.png", alt: "error", className: "h-[400px]" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h1", { className: "pt-4 text-3xl text-primary text-left font-semibold", children: "Welcome" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "pt-2 text-black text-xl font-normal", children: "Thank you for the confirmation, Login with your account and start searching for the brands." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "bg-white rounded-xl shadow-xl px-2 py-4 flex flex-row items-center lg:flex-col justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ProfileCompleteBox, { isActive: !0, positionumber: "01", title: "Info" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ProfileCompleteBox, { isActive: !1, positionumber: "02", title: "Audience" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ProfileCompleteBox, { isActive: !1, positionumber: "03", title: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ProfileCompleteBox, { isActive: !1, positionumber: "04", title: "Contact" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react14.Outlet, {})
  ] })
] }) }), profilecomplete_default = UserEditBox, ProfileCompleteBox = (props) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "px-3 py-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: `grid place-items-center h-14 w-14 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: `font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`, children: props.positionumber }) }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h4", { className: `text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`, children: props.title })
] }) });

// app/routes/home/profilecomplete/secondpage.tsx
var secondpage_exports = {};
__export(secondpage_exports, {
  default: () => secondpage_default
});
var import_react15 = require("@remix-run/react");
var import_jsx_runtime33 = require("react/jsx-runtime"), SecondPage = () => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Main market" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Other markets" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Category" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Account currency" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Languages" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react15.Link, { to: "/home/profilecomplete/thirdpage", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) })
] }) }) }) }), secondpage_default = SecondPage;

// app/routes/home/profilecomplete/forthpage.tsx
var forthpage_exports = {};
__export(forthpage_exports, {
  default: () => forthpage_default
});
var import_react16 = require("@remix-run/react");
var import_jsx_runtime34 = require("react/jsx-runtime"), ForthPage = () => {
  let navigate = (0, import_react16.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Country" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Addrss" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "State/Region" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "City" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Phone number" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex gap-2 mt-4 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "checkbox", name: "check2" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-left text-[10px] text-black font-normal", children: "The above details are true and correct" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { onClick: () => navigate(-1), className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CusButton, { text: "back", textColor: "text-black", width: "w-full", background: "bg-gray-200", fontwidth: "font-bold" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react16.Link, { to: "/home", className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) })
    ] })
  ] }) }) }) });
}, forthpage_default = ForthPage;

// app/routes/home/profilecomplete/thirdpage.tsx
var thirdpage_exports = {};
__export(thirdpage_exports, {
  default: () => thirdpage_default
});
var import_react17 = require("@remix-run/react");
var import_jsx_runtime35 = require("react/jsx-runtime"), ThirdPage = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "p-8 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Channels" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex content-center items-center gap-2 flex-col md:flex-row mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex w-full justify-around md:w-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-8 h-8" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-8 h-8" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-8 h-8" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/media/snapchat.png", alt: "error", className: "w-8 h-8" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/media/twitter.png", alt: "error", className: "w-8 h-8" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "grow hidden md:block" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CusButton, { text: "Add new Channel", textColor: "text-white", width: "w-36", background: "bg-primary", fontwidth: "font-normal", textSize: "text-md" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/profilecomplete/forthpage", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) })
  ] }) })
] }) }), thirdpage_default = ThirdPage;

// app/routes/home/profilecomplete/index.tsx
var profilecomplete_exports2 = {};
__export(profilecomplete_exports2, {
  default: () => profilecomplete_default2
});
var import_react18 = require("@remix-run/react");
var import_jsx_runtime36 = require("react/jsx-runtime"), UserInputBoxOne = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "p-8 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Tell us about yourself" }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex w-full md:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: "/images/icons/gallery.png", alt: "error" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "mt-4", children: "Drop profile photo here." }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 5 MB" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Last Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Nickname" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Date of birth" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Gender" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Bio" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("textarea", { className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react18.Link, { to: "/home/profilecomplete/secondpage", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) })
    ] })
  ] })
] }) }), profilecomplete_default2 = UserInputBoxOne;

// app/routes/home/createcampaign.tsx
var createcampaign_exports = {};
__export(createcampaign_exports, {
  default: () => createcampaign_default
});
var import_react19 = require("@remix-run/react"), import_jsx_runtime37 = require("react/jsx-runtime"), createCampaing = () => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react19.Outlet, {}) }), createcampaign_default = createCampaing;

// app/routes/home/createcampaign/index.tsx
var createcampaign_exports2 = {};
__export(createcampaign_exports2, {
  default: () => createcampaign_default2,
  loader: () => loader2
});
var import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome8 = require("@fortawesome/react-fontawesome"), import_node4 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_axios2 = __toESM(require("axios")), import_react21 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime"), loader2 = async () => {
  let data = await import_axios2.default.post(`${BaseUrl}/api/get-campaign-type`);
  return (0, import_node4.json)({ data: data.data.data });
}, Step1 = () => {
  let navigate = (0, import_react20.useNavigate)(), [error, setError] = (0, import_react21.useState)(!1), catdata = (0, import_react20.useLoaderData)().data, [camptype, setCamptype] = (0, import_react21.useState)("0"), nextpage = () => {
    if (camptype === "0")
      setError(!0);
    else
      return navigate("/home/createcampaign/step2");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    error ? /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-red-500 bg-opacity-10 p-2 border-red-500 border rounded-xl flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome8.FontAwesomeIcon, { className: "text-red-500", icon: import_free_solid_svg_icons7.faInfoCircle }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: "text-red-500 text-lg font-normal text-center", children: "Please select at least one image" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: "text-black font-normal text-lg text-center", children: "Select one below" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { onClick: () => nextpage(), children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-4", children: catdata.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `shadow-xl rounded-xl w-72 bg-white my-4 ${camptype == catdata[i].id ? "border-2 border-gray-400" : ""}`, onClick: () => setCamptype(catdata[i].id), children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("img", { src: catdata[i].categoryPicUrl, alt: "error", className: "rounded-t-xl w-full h-40" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: "text-black text-left font-medium text-lg", children: catdata[i].categoryName }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-sm text-gray-400 font-normal text-left", children: catdata[i].categoryDescription })
      ] })
    ] }, i)) })
  ] }) });
}, createcampaign_default2 = Step1;

// app/routes/home/createcampaign/step2.tsx
var step2_exports = {};
__export(step2_exports, {
  default: () => step2_default,
  loader: () => loader3
});
var import_free_solid_svg_icons8 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome9 = require("@fortawesome/react-fontawesome"), import_node5 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_axios3 = __toESM(require("axios"));
var import_jsx_runtime39 = require("react/jsx-runtime"), loader3 = async () => {
  let platform = await import_axios3.default.post(`${BaseUrl}/api/getplatform`);
  return (0, import_node5.json)({ platform: platform.data.data });
}, Step2 = () => {
  let mediatype = ["Post", "Story", "Reel", "Video", "Audio"], data = (0, import_react22.useLoaderData)(), navigator = (0, import_react22.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-black tect-xl font-medium text-left", children: "Sponsored post" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: data.platform.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "bg-gray-200 p-2 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("img", { src: data.platform[i].platformLogoUrl, alt: "error", className: "w-10 h-10" }) }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4", children: mediatype.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "text-primary text-lg text-center font-normal w-28 py-1 bg-gray-100 rounded-xl", children: val })) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mentions" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20", children: "clear all" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Hashtag" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20", children: "clear all" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Minimum rating required" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { className: "text-2xl text-yellow-500 font-bold", icon: import_free_solid_svg_icons8.faStar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { className: "text-2xl text-yellow-500 font-bold", icon: import_free_solid_svg_icons8.faStar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { className: "text-2xl text-yellow-500 font-bold", icon: import_free_solid_svg_icons8.faStar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { className: "text-2xl text-yellow-500 font-bold", icon: import_free_solid_svg_icons8.faStar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { className: "text-2xl text-yellow-500 font-bold", icon: import_free_solid_svg_icons8.faStar }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Affiliated links (optional)" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Discount coupons" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Target" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min target" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign info" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("textarea", { className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Optional attachments" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faPaperclip }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faCheck }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faRemove }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faAdd }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex flex-col lg:flex-row items-center mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Does the influencer need to seek an approval of the post before posting" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CusButton, { text: "Yes", textColor: "text-primary", background: "bg-gray-100", width: "w-20" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CusButton, { text: "No", textColor: "text-primary", background: "bg-gray-100", width: "w-20" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { onClick: () => {
        navigator(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react22.Link, { to: "/home/createcampaign/step3", className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }) })
    ] })
  ] }) });
}, step2_default = Step2;

// app/routes/home/createcampaign/step3.tsx
var step3_exports = {};
__export(step3_exports, {
  default: () => step3_default
});
var import_free_solid_svg_icons9 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome10 = require("@fortawesome/react-fontawesome"), import_react23 = require("@remix-run/react");
var import_jsx_runtime40 = require("react/jsx-runtime"), Step3 = () => {
  let navigator = (0, import_react23.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_jsx_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-black tect-xl font-medium text-left", children: "Audience & demeography" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Audience location" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20", children: "clear all" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Influencer category" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Maximum no of influencers that can join the campaign" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faCaretDown }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "w-full h-96", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("img", { src: "https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg", alt: "error", className: "object-cover h-96 w-full rounded-xl" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Accept participation / invite till" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Remuneration" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faCaretDown }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "Product details" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { onClick: () => {
        navigator(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react23.Link, { to: "/home", className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }) })
    ] })
  ] }) });
}, step3_default = Step3;

// app/routes/home/findcampaign.tsx
var findcampaign_exports = {};
__export(findcampaign_exports, {
  default: () => findcampaign_default
});
var import_free_solid_svg_icons10 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome11 = require("@fortawesome/react-fontawesome");
var import_react_switch = __toESM(require("react-switch")), import_react25 = require("react");

// app/components/utils/campagincard.tsx
var import_react24 = require("@remix-run/react");
var import_jsx_runtime41 = require("react/jsx-runtime"), CampaginCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_jsx_runtime41.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-72 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "w-full h-[1px] bg-black my-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "grow flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "rounded-full w-8 h-8" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "rounded-full w-8 h-8" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
      "3500 ",
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("br", {}),
      "USD / post"
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react24.Link, { to: "/home/campaigns", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" }) })
] }) });

// app/routes/home/findcampaign.tsx
var import_jsx_runtime42 = require("react/jsx-runtime"), FindCampaign = () => {
  let [active, setActive] = (0, import_react25.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_jsx_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Find campaign" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "hidden md:block md:grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CusButton, { height: "h-12", text: "Campaign", fontwidth: "font-bold", background: "bg-cyan-300", textColor: "text-black" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CusButton, { height: "h-12", text: "Brand", fontwidth: "font-bold", background: "bg-gray-300", textColor: "text-gray-600" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex px-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", children: "Save Filter" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-6" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", children: [
          "Saved filter ",
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faSortDown }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Select" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "Unboxing or Review Posts" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_switch.default, { onChange: () => setActive(!active), checked: active, checkedIcon: !1, uncheckedIcon: !1, onColor: "#03125E" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active campaigns" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Channels" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-8 h-8 rounded-full" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-8 h-8  rounded-full" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-8 h-8  rounded-full" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/media/snapchat.png", alt: "error", className: "w-8 h-8  rounded-full" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/media/twitter.png", alt: "error", className: "w-8 h-8  rounded-full" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Country" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "text-primary text-md font-semibold", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faSortDown }),
              " Advanced filter "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_fontawesome11.FontAwesomeIcon, { className: "text-primary text-2xl", icon: import_free_solid_svg_icons10.faTrash }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(SearchedCampaign, {})
  ] }) });
}, findcampaign_default = FindCampaign, SearchedCampaign = () => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_jsx_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: "Found: 06 Campaigns " }),
  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/hilton.jpg", name: "Hilton" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" })
  ] })
] }) });

// app/routes/home/mycampaings.tsx
var mycampaings_exports = {};
__export(mycampaings_exports, {
  default: () => mycampaings_default,
  loader: () => loader4
});
var import_free_solid_svg_icons11 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome12 = require("@fortawesome/react-fontawesome"), import_node6 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_react27 = require("react");

// app/components/utils/pastbrandcard.tsx
var import_jsx_runtime43 = require("react/jsx-runtime"), PastBrandCard = () => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-80 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Adidas Cases" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
  /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex justify-center items-center gap-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-6 h-6" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h1", { className: "text-sm font-bold text-black", children: "POST" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex justify-center items-center gap-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-6 h-6" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h1", { className: "text-sm font-bold text-black", children: "POST" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" })
] }) }), pastbrandcard_default = PastBrandCard;

// app/routes/home/mycampaings.tsx
var import_jsx_runtime44 = require("react/jsx-runtime"), loader4 = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node6.json)({ user: cookie.user });
}, MyCampaigns = () => {
  let [completed, setCompleted] = (0, import_react27.useState)(!1), isBrand = (0, import_react26.useLoaderData)().user.role.code == "50";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "hidden md:block md:grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { onClick: () => {
          setCompleted(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CusButton, { height: "h-12", text: "Active campaigns", fontwidth: "font-bold", background: `${completed ? "bg-gray-300" : "bg-[#7CFF01]"}`, textColor: "text-black}" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { onClick: () => {
          setCompleted(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CusButton, { height: "h-12", text: "Finished campaigns", fontwidth: "font-bold", background: `${completed ? "bg-[#7CFF01]" : "bg-gray-300"}`, textColor: "text-black" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "bg-white shadow-xl rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-black text-center font-bold text-2xl", children: "Would you like to collaborate ?" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-full text-center bg-red", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react26.Link, { to: "/home/createcampaign", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CusButton, { text: "Create Campaign", textColor: "text-white", background: "bg-secondary" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { children: completed ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CompletedCampaigns, {}) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ActiveCampaign, {}) })
  ] }) });
}, mycampaings_default = MyCampaigns, ActiveCampaign = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faIdBadge, className: "text-md text-secondary" }),
    " New Campaign "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CampaginCard, { image: "/images/brand/powerfitgym.jpg", name: "Power Fit Gym" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CampaginCard, { image: "/images/brand/szechuan_restaurant.jpg", name: "Szechuan Restaurant" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CampaginCard, { image: "/images/brand/theburgershop.jpg", name: "Theburgershop" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CampaginCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" })
  ] })
] }) }), CompletedCampaigns = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(pastbrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(pastbrandcard_default, {})
] }) });

// app/routes/home/campaigns.tsx
var campaigns_exports = {};
__export(campaigns_exports, {
  default: () => campaigns_default
});
var import_free_solid_svg_icons13 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome14 = require("@fortawesome/react-fontawesome");

// app/routes/home/brand.tsx
var brand_exports = {};
__export(brand_exports, {
  Completed: () => Completed,
  Connection: () => Connection,
  Rating: () => Rating,
  default: () => brand_default
});
var import_free_solid_svg_icons12 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome13 = require("@fortawesome/react-fontawesome"), import_react28 = require("react");

// app/components/utils/extrabrandcard.tsx
var import_jsx_runtime45 = require("react/jsx-runtime"), ExtraBrandCard = () => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-white rounded-xl shadow-xl w-72 mt-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "rounded-t-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "p-4 -translate-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-end gap-x-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Adidas Cases" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-full h-[1px] bg-black my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "grow flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "rounded-full w-8 h-8" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "rounded-full w-8 h-8" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
        "3500 ",
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
        "USD / post"
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" })
  ] })
] }) }), extrabrandcard_default = ExtraBrandCard;

// app/routes/home/brand.tsx
var import_jsx_runtime46 = require("react/jsx-runtime"), BrandPage = () => {
  let [isPast, setPast] = (0, import_react28.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "w-full h-60 object-cover rounded-t-xl" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "w-32 h-32 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-primary text-lg font-medium my-2", children: "Adidas Cases" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-primary text-md font-normal", children: "Category: Consumer Electronics" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-primary text-md font-normal", children: "www.adidas.co.in" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "Connect", background: "bg-secondary", fontwidth: "font-bold" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Rating, {}),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Completed, {}),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Connection, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "Brand info" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-black text-sm font-normal", children: "Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex mx-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { onClick: () => {
          setPast(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "Available Campaigns", background: `${isPast ? "bg-gray-100" : "bg-[#01FFF4]"}`, fontwidth: "font-bold", textColor: `${isPast ? "text-gray-600" : "text-black"}` }) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { onClick: () => {
          setPast(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "Past associations", background: `${isPast ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${isPast ? "text-black" : "text-gray-600"}` }) })
      ] }),
      isPast ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PastBrandAssociation, {}) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(AvailableCampaigns, {})
    ] })
  ] });
}, brand_default = BrandPage, Rating = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome13.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons12.faStar }) }),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-black text-lg font-bold", children: "4.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-black text-sm font-normal", children: "Rating" })
  ] })
] }) }), Connection = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome13.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons12.faHandshake }) }),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-black text-lg font-bold", children: "21" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-black text-sm font-normal", children: "Connections" })
  ] })
] }) }), Completed = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome13.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons12.faNetworkWired }) }),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { className: "text-black text-lg font-bold", children: "48" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-black text-sm font-normal", children: "Completed Campaigns" })
  ] })
] }) }), AvailableCampaigns = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(extrabrandcard_default, {})
] }) }), PastBrandAssociation = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(pastbrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(pastbrandcard_default, {})
] }) });

// app/routes/home/campaigns.tsx
var import_react29 = require("react");
var import_jsx_runtime47 = require("react/jsx-runtime"), Campaigns = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(BrandInfo, {}),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CampaignsInfo, {}),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Target, {}),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Budget, {}),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Apply, {})
  ] })
] }) }), campaigns_default = Campaigns, BrandInfo = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "col-span-2 rounded-xl shadow-xl bg-white p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Puma" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h3", { className: "text-black font-bold text-md text-left", children: "Brand info" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas\xAE Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.." }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Rating, {}),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Connection, {}),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Completed, {})
] }) }), CampaignsInfo = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "col-span-3 rounded-xl shadow-xl bg-white p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Puma" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h3", { className: "text-black font-bold text-md text-left", children: "Info" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "text-black font-semibold text-xs text-left", children: [
    `Hirschi's social media presence allows automotive brands like Bugatti and Ferrari to advertise their products through her. Instead of being an automotive journalist, she states that she provides "insight into the supercar culture and what it\u2019s like to drive these incredible cars in a light, fun way."[4] Being one of the few women in supercar culture, she also opens up the demographic for these vehicles.`,
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
    " In March 2018, Arabian Business listed her as one of the 50 Most Influential Women In The Arab World,[8] and it nominated her in 2019 as one of Top 30 most influential women in the Arab world.[9] Also in March 2018, Esquire Magazine Middle East named her Influencer of the Year.[10] She appeared on Germany's free to air TV RTL II on the car show GRIP Das Automagazin on 10 June 2018, co-presenting the one-off Bugatti L'Or Blanc and the La Ferrari Aperta.[11] In January 2019, Broadcasting & Cable announced Hirschi will be hosting their new car TV show Car Crews.[12] The show is released on Insight TV and focuses on uncovering different car cultures across the United States.[13] She drove the official Batmobile from the feature film Batman (1989).[4] In 2020 Hirschi won a Shorty Award for Breakout YouTuber.[14]"
  ] })
] }) }), Target = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCoins, className: "text-xl text-primary" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-xl text-primary font-medium px-4", children: "Target" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "h-[1px] bg-gray-500 w-full my-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "Audience loaction" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-primary", children: "London" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "Min Reach" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-black", children: "10000 K" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "End date" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-black", children: "10-12-2022" })
  ] })
] }) }), Apply = () => {
  let [open, setOpen] = (0, import_react29.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { className: "text-white text-xl text-left font-normal", children: "Would you like to participate in this campaign?" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-full grid place-items-center", onClick: () => setOpen(!0), children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CusButton, { text: "Apply", textColor: "text-white", background: "bg-secondary" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "p-6 bg-white rounded-xl shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { onClick: () => setOpen(!1), children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faRemove, className: "font-bold text-2xl text-center text-primary" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-4", placeholder: "subject" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("textarea", { className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }) })
      ] })
    ] }) })
  ] });
}, Budget = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCoins, className: "text-xl text-primary" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "Audience loaction" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-primary", children: "London" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "Min Reach" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-black", children: "10000 K" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md text-primary", children: "End date" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-md font-bold text-black", children: "10-12-2022" })
  ] })
] }) });

// app/routes/home/favourite.tsx
var favourite_exports = {};
__export(favourite_exports, {
  default: () => favourite_default
});

// app/components/utils/brandcard.tsx
var import_react30 = require("@remix-run/react");
var import_jsx_runtime48 = require("react/jsx-runtime"), BrandCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-72 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react30.Link, { to: "/home/brand", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }) })
] }) });

// app/routes/home/favourite.tsx
var import_jsx_runtime49 = require("react/jsx-runtime"), Favourite = () => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Favourite brands" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(BrandCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(BrandCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(BrandCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(BrandCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" })
  ] })
] }) }), favourite_default = Favourite;

// app/routes/home/invite.tsx
var invite_exports = {};
__export(invite_exports, {
  default: () => invite_default
});
var import_jsx_runtime50 = require("react/jsx-runtime"), Invite = () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "grid place-items-center w-full bg-yellow-500 rounded-xl shadow-xl my-6", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/cashgirl.png", alt: "error", className: "h-72" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex gap-4 grow flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "bg-white rounded-lg shadow-xl p-4 lg:w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { className: "text-black text-xl font-bold text-left", children: "Refer an influencer or brand" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black text-left font-normal text-md", children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Contact Number" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: " my-2", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CusButton, { text: "Invite", background: "bg-[#01FFF4]", fontwidth: "font-bold", textColor: "text-primary", width: "w-full" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "bg-white rounded-lg shadow-xl p-4 grow w-full overflow-x-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { className: "text-black text-xl font-bold text-left", children: "Referral status" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-20" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-40", children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Contact" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Status" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tbody", { className: "gap-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { className: "my-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/inf/inf6.png", alt: "error", className: "w-12 h-12 rounded-md object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjay Thomas" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjaythomas@gmail.com" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "+91 89988778" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { className: "text-red-500 font-medium", children: "Panding" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { className: "my-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/inf/inf8.png", alt: "error", className: "w-12 h-12 rounded-md object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjay Thomas" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjaythomas@gmail.com" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "+91 89988778" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { className: "text-red-500 font-medium", children: "Panding" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { className: "my-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/inf/inf9.png", alt: "error", className: "w-12 h-12 rounded-md object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjay Thomas" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjaythomas@gmail.com" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "+91 89988778" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { className: "text-red-500 font-medium", children: "Panding" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { className: "my-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/inf/inf14.png", alt: "error", className: "w-12 h-12 rounded-md object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjay Thomas" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "Sanjaythomas@gmail.com" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: "+91 89988778" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { className: "text-red-500 font-medium", children: "Panding" })
          ] })
        ] })
      ] })
    ] })
  ] })
] }) }), invite_default = Invite;

// app/routes/home/empty.tsx
var empty_exports = {};
__export(empty_exports, {
  default: () => empty_default
});
var import_free_solid_svg_icons14 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome15 = require("@fortawesome/react-fontawesome"), import_jsx_runtime51 = require("react/jsx-runtime"), Empty = () => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "p-10 rounded-xl shadow-xl w-72 pt-28", children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_fontawesome15.FontAwesomeIcon, { className: "text-black font-bold text-4xl", icon: import_free_solid_svg_icons14.faSearch }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { className: "font-semibold text-lg text-black", children: "To earn more money?" }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "font-normal text-sm text-black", children: "Search, apply for public campaigns and create more great content" })
] }) }), empty_default = Empty;

// app/routes/home/index.tsx
var home_exports2 = {};
__export(home_exports2, {
  default: () => home_default2
});
var import_free_solid_svg_icons15 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome16 = require("@fortawesome/react-fontawesome"), import_react31 = require("@remix-run/react");

// app/state/home/profilecompletestat.ts
var import_zustand6 = __toESM(require("zustand")), ProfileComleteStore = (0, import_zustand6.default)()((set) => ({
  isOpen: !0,
  change: (value) => set((state) => ({ isOpen: value }))
})), profilecompletestat_default = ProfileComleteStore;

// app/routes/home/index.tsx
var import_jsx_runtime52 = require("react/jsx-runtime"), HomePage2 = () => {
  let isOpen = profilecompletestat_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    isOpen ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ProfileComplete, {}) : null,
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Intro, {}),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(EarnSection, {}),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SponsoredPosts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(NewCampaign, {}),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TopBrands, {})
  ] });
}, home_default2 = HomePage2, ProfileComplete = () => {
  let changeState = profilecompletestat_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex grow flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "py-10 md:w-[400px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-md text-white font-normal", children: "Your linked social media accounts are under verification. You'll be notified within 24 hours." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "xl:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react31.Link, { to: "/home/profilecomplete", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CusButton, { text: "Click here to complete", textColor: "text-white", background: "bg-primary" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { onClick: () => {
      changeState(!1);
    }, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome16.FontAwesomeIcon, { className: "text-white text-2xl font-bold", icon: import_free_solid_svg_icons15.faXmark }),
      " "
    ] })
  ] }) });
}, Intro = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid place-items-center w-full mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf1.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf3.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf4.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf5.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf6.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf7.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf8.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf9.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf13.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/inf/inf14.png", alt: "error" }) })
  ] })
] }), EarnSection = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/cashgirl.png", alt: "error", className: "md:h-80" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." })
  ] }) })
] }) }), SponsoredPosts = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faHeart, className: "text-md text-secondary" }),
    " Sponsored Posts "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/hilton.jpg", name: "Hilton" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/lucent.jpg", name: "Lucent" })
  ] })
] }) }), NewCampaign = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faIdBadge, className: "text-md text-secondary" }),
    " New Campaign "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/powerfitgym.jpg", name: "Power Fit Gym" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/szechuan_restaurant.jpg", name: "Szechuan Restaurant" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/theburgershop.jpg", name: "Theburgershop" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CampaginCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" })
  ] })
] }) }), TopBrands = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faStar, className: "text-md text-secondary" }),
    " Top brands "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BrandCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BrandCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BrandCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BrandCard, { image: "/images/brand/tronicsfix.jpg", name: "Tronicsfix" })
  ] })
] }) });

// app/routes/home/sorry.tsx
var sorry_exports = {};
__export(sorry_exports, {
  default: () => sorry_default
});
var import_jsx_runtime53 = require("react/jsx-runtime"), Sorry = () => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white rounded-lg shadow-lg p-10 mt-6 relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: " text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-72", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: "Sorry !!" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full grid place-content-center relative", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: "/images/avatar/sorry.png", alt: "error", className: "h-[300px]" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-sm font-normal text-gray-500 text-left w-96", children: [
    "Thank you for expressing interest in SWRV. While we were impressed with your profile, unfortunately, your profile dosent meet the minimum criteria which we need in this platform ",
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
    "We sincerely appreciate your interest and hope that you\u2019ll stay in touch. Please don\u2019t hesitate to reach out if you disagree with our decision."
  ] }) })
] }) }), sorry_default = Sorry;

// app/routes/home/help.tsx
var help_exports = {};
__export(help_exports, {
  default: () => help_default
});
var import_jsx_runtime54 = require("react/jsx-runtime"), Help = () => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_jsx_runtime54.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-[#10BCE2] flex my-4 p-10 md:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "text-5xl text-primary font-bold", children: [
      "Hi ",
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "text-white", children: " @ivankbfc," }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("br", {}),
      " How can we help?"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "grow grid place-items-center md:p-10 my-4", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { type: "text", className: "placeholder:text-black bg-white opacity-30  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "search" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-white flex my-4 p-10 md:flex-row flex-col md:gap-x-10 gap-y-6 md:gap-y-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-black font-bold", children: "Using SWRV" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Manage your account" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Campaigns" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Safety and security" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Rules and policies" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-xl text-black font-medium", children: "Everything you need to know so you can use SWRV like a pro" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex md:gap-x-16 gap-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Registration" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Verification" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Social Media accounts" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Analytics" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Brands" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Campaign" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Payments" })
        ] })
      ] })
    ] })
  ] })
] }) }), help_default = Help;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "72c615d8", entry: { module: "/build/entry.client-Y3B2WWG7.js", imports: ["/build/_shared/chunk-R4UOJVSO.js", "/build/_shared/chunk-7UEYUE33.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BZUCALXZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-ZXB4Z67F.js", imports: ["/build/_shared/chunk-VZRPCBS2.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/bloginfo": { id: "routes/blogs/bloginfo", parentId: "root", path: "blogs/bloginfo", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/bloginfo-6TUYFQGY.js", imports: ["/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-VZRPCBS2.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-MR2KNSZN.js", imports: ["/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-VZRPCBS2.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-TPF7CBCE.js", imports: ["/build/_shared/chunk-GNGK433C.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-VZRPCBS2.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-OOD7MRYE.js", imports: ["/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/brand": { id: "routes/home/brand", parentId: "routes/home", path: "brand", index: void 0, caseSensitive: void 0, module: "/build/routes/home/brand-KNIH7R7P.js", imports: ["/build/_shared/chunk-HQFSYR2S.js", "/build/_shared/chunk-FY5CISOF.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/campaigns": { id: "routes/home/campaigns", parentId: "routes/home", path: "campaigns", index: void 0, caseSensitive: void 0, module: "/build/routes/home/campaigns-J2X7TJFE.js", imports: ["/build/_shared/chunk-HQFSYR2S.js", "/build/_shared/chunk-FY5CISOF.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign": { id: "routes/home/createcampaign", parentId: "routes/home", path: "createcampaign", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign-GKULOR52.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/index": { id: "routes/home/createcampaign/index", parentId: "routes/home/createcampaign", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/index-2RTNDQUU.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step2": { id: "routes/home/createcampaign/step2", parentId: "routes/home/createcampaign", path: "step2", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step2-L42HAD4J.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step3": { id: "routes/home/createcampaign/step3", parentId: "routes/home/createcampaign", path: "step3", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step3-PH5S2HE2.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/empty": { id: "routes/home/empty", parentId: "routes/home", path: "empty", index: void 0, caseSensitive: void 0, module: "/build/routes/home/empty-J324OZIZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/favourite": { id: "routes/home/favourite", parentId: "routes/home", path: "favourite", index: void 0, caseSensitive: void 0, module: "/build/routes/home/favourite-AHYQTJVI.js", imports: ["/build/_shared/chunk-PZVDXMUA.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/findcampaign": { id: "routes/home/findcampaign", parentId: "routes/home", path: "findcampaign", index: void 0, caseSensitive: void 0, module: "/build/routes/home/findcampaign-RWACGSO6.js", imports: ["/build/_shared/chunk-HXL53BND.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/help": { id: "routes/home/help", parentId: "routes/home", path: "help", index: void 0, caseSensitive: void 0, module: "/build/routes/home/help-O2DYR4DE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/index": { id: "routes/home/index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/index-DWCR2SCD.js", imports: ["/build/_shared/chunk-HXL53BND.js", "/build/_shared/chunk-PZVDXMUA.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/invite": { id: "routes/home/invite", parentId: "routes/home", path: "invite", index: void 0, caseSensitive: void 0, module: "/build/routes/home/invite-4SKPSWEJ.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/mycampaings": { id: "routes/home/mycampaings", parentId: "routes/home", path: "mycampaings", index: void 0, caseSensitive: void 0, module: "/build/routes/home/mycampaings-MELD5YAW.js", imports: ["/build/_shared/chunk-HXL53BND.js", "/build/_shared/chunk-FY5CISOF.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete": { id: "routes/home/profilecomplete", parentId: "routes/home", path: "profilecomplete", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete-WCGZPT3B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/forthpage": { id: "routes/home/profilecomplete/forthpage", parentId: "routes/home/profilecomplete", path: "forthpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/forthpage-YQNVMGXN.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/index": { id: "routes/home/profilecomplete/index", parentId: "routes/home/profilecomplete", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/index-QBUMKDO7.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/secondpage": { id: "routes/home/profilecomplete/secondpage", parentId: "routes/home/profilecomplete", path: "secondpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/secondpage-CSHKU45T.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/thirdpage": { id: "routes/home/profilecomplete/thirdpage", parentId: "routes/home/profilecomplete", path: "thirdpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/thirdpage-OUAZ2KTO.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/sorry": { id: "routes/home/sorry", parentId: "routes/home", path: "sorry", index: void 0, caseSensitive: void 0, module: "/build/routes/home/sorry-CQLETUE3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SP52CO7S.js", imports: ["/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-GNGK433C.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-VZRPCBS2.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-WO33LHCL.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-4DXU6QNX.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-O2TKCW5M.js", "/build/_shared/chunk-ONQBKG3Y.js", "/build/_shared/chunk-VCZJGPLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-72C615D8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blogs/bloginfo": {
    id: "routes/blogs/bloginfo",
    parentId: "root",
    path: "blogs/bloginfo",
    index: void 0,
    caseSensitive: void 0,
    module: bloginfo_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: !0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/home/profilecomplete": {
    id: "routes/home/profilecomplete",
    parentId: "routes/home",
    path: "profilecomplete",
    index: void 0,
    caseSensitive: void 0,
    module: profilecomplete_exports
  },
  "routes/home/profilecomplete/secondpage": {
    id: "routes/home/profilecomplete/secondpage",
    parentId: "routes/home/profilecomplete",
    path: "secondpage",
    index: void 0,
    caseSensitive: void 0,
    module: secondpage_exports
  },
  "routes/home/profilecomplete/forthpage": {
    id: "routes/home/profilecomplete/forthpage",
    parentId: "routes/home/profilecomplete",
    path: "forthpage",
    index: void 0,
    caseSensitive: void 0,
    module: forthpage_exports
  },
  "routes/home/profilecomplete/thirdpage": {
    id: "routes/home/profilecomplete/thirdpage",
    parentId: "routes/home/profilecomplete",
    path: "thirdpage",
    index: void 0,
    caseSensitive: void 0,
    module: thirdpage_exports
  },
  "routes/home/profilecomplete/index": {
    id: "routes/home/profilecomplete/index",
    parentId: "routes/home/profilecomplete",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profilecomplete_exports2
  },
  "routes/home/createcampaign": {
    id: "routes/home/createcampaign",
    parentId: "routes/home",
    path: "createcampaign",
    index: void 0,
    caseSensitive: void 0,
    module: createcampaign_exports
  },
  "routes/home/createcampaign/index": {
    id: "routes/home/createcampaign/index",
    parentId: "routes/home/createcampaign",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: createcampaign_exports2
  },
  "routes/home/createcampaign/step2": {
    id: "routes/home/createcampaign/step2",
    parentId: "routes/home/createcampaign",
    path: "step2",
    index: void 0,
    caseSensitive: void 0,
    module: step2_exports
  },
  "routes/home/createcampaign/step3": {
    id: "routes/home/createcampaign/step3",
    parentId: "routes/home/createcampaign",
    path: "step3",
    index: void 0,
    caseSensitive: void 0,
    module: step3_exports
  },
  "routes/home/findcampaign": {
    id: "routes/home/findcampaign",
    parentId: "routes/home",
    path: "findcampaign",
    index: void 0,
    caseSensitive: void 0,
    module: findcampaign_exports
  },
  "routes/home/mycampaings": {
    id: "routes/home/mycampaings",
    parentId: "routes/home",
    path: "mycampaings",
    index: void 0,
    caseSensitive: void 0,
    module: mycampaings_exports
  },
  "routes/home/campaigns": {
    id: "routes/home/campaigns",
    parentId: "routes/home",
    path: "campaigns",
    index: void 0,
    caseSensitive: void 0,
    module: campaigns_exports
  },
  "routes/home/favourite": {
    id: "routes/home/favourite",
    parentId: "routes/home",
    path: "favourite",
    index: void 0,
    caseSensitive: void 0,
    module: favourite_exports
  },
  "routes/home/invite": {
    id: "routes/home/invite",
    parentId: "routes/home",
    path: "invite",
    index: void 0,
    caseSensitive: void 0,
    module: invite_exports
  },
  "routes/home/brand": {
    id: "routes/home/brand",
    parentId: "routes/home",
    path: "brand",
    index: void 0,
    caseSensitive: void 0,
    module: brand_exports
  },
  "routes/home/empty": {
    id: "routes/home/empty",
    parentId: "routes/home",
    path: "empty",
    index: void 0,
    caseSensitive: void 0,
    module: empty_exports
  },
  "routes/home/index": {
    id: "routes/home/index",
    parentId: "routes/home",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_exports2
  },
  "routes/home/sorry": {
    id: "routes/home/sorry",
    parentId: "routes/home",
    path: "sorry",
    index: void 0,
    caseSensitive: void 0,
    module: sorry_exports
  },
  "routes/home/help": {
    id: "routes/home/help",
    parentId: "routes/home",
    path: "help",
    index: void 0,
    caseSensitive: void 0,
    module: help_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
