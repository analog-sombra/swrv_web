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
var app_default = "/build/_assets/app-2TFPMFAS.css";

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

// app/routes/extra/socialregister.$id.tsx
var socialregister_id_exports = {};
__export(socialregister_id_exports, {
  default: () => socialregister_id_default,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_axios = __toESM(require("axios"));

// app/const.ts
var BaseUrl = "https://bluelemontech.in/websites/swrv";

// app/cookies.ts
var import_node2 = require("@remix-run/node"), userPrefs = (0, import_node2.createCookie)("user-prefs");

// app/routes/extra/socialregister.$id.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), loader = async (props) => {
  let id = props.params.id, userdata = await (0, import_axios.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  if (userdata.data.status == !1)
    return { message: userdata.data.message };
  let sendverificationmail = await (0, import_axios.default)({
    method: "post",
    url: `${BaseUrl}/api/send-otp`,
    data: { userId: id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : sendverificationmail.data.status == !1 ? { message: sendverificationmail.data.message } : (0, import_node3.redirect)("/home", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
}, SocialRegister = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {}), socialregister_id_default = SocialRegister;

// app/routes/extra/sociallogin.$id.tsx
var sociallogin_id_exports = {};
__export(sociallogin_id_exports, {
  default: () => sociallogin_id_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_axios2 = __toESM(require("axios"));
var import_jsx_runtime4 = require("react/jsx-runtime"), loader2 = async (props) => {
  let id = props.params.id, userdata = await (0, import_axios2.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node4.redirect)("/home", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
}, SocialLogin = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {}), sociallogin_id_default = SocialLogin;

// app/routes/blogs/bloginfo.tsx
var bloginfo_exports = {};
__export(bloginfo_exports, {
  default: () => bloginfo_default2
});

// app/components/home/footer/footer.tsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons"), import_jsx_runtime5 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("footer", { className: "w-full grid place-items-center  bg-primary py-8 md:py-20 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "text-white text-3xl font-semibold text-center md:text-left", children: "SWRV" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grow flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faFacebookSquare }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faLinkedinIn }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faTwitter }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faInstagram }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grow flex md:justify-end justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Head Office" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Dockplatsen 1, 211 19 Malm\xF6, Sweden" })
  ] }) })
] }) }) });

// app/components/home/navbar/intronavbar.tsx
var import_react4 = require("@remix-run/react");

// app/components/home/navbar/navbar.tsx
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react3 = require("@remix-run/react");

// app/state/home/intronavstate.ts
var import_zustand = require("zustand"), IntroNavStore = (0, import_zustand.create)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), intronavstate_default = IntroNavStore;

// app/components/home/navbar/navbar.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var NavLinks = () => {
  let changMenu = intronavstate_default((state) => state.change), closeMenu = () => {
    changMenu(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid place-items-center my-4 md:my-0", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col items-center gap-y-4 md:flex-row text-primary font-semibold text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "What you get" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/", className: "px-2", children: "How it works" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/about", className: "px-2", children: "About" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/contact", className: "px-2", children: "Contact" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { onClick: () => closeMenu, to: "/blogs", className: "px-2", children: "Blogs" })
  ] }) }) });
}, LoginButton = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid place-items-center py-4 lg:p-0", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-black text-md font-normar cursor-pointer", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faRightToBracket }),
  " Login"
] }) }) });

// app/components/home/navbar/intronavbar.tsx
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime7 = require("react/jsx-runtime"), IntroNavBar = () => {
  let isOpen = intronavstate_default((state) => state.isOpen), changMenu = intronavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full grid place-items-center px-6 sm:px-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-row  my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mr-4 grid place-items-center md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_fontawesome3.FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? import_free_solid_svg_icons2.faRemove : import_free_solid_svg_icons2.faBars }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react4.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: "./images/swrvlogo.png", className: "w-32 lg:w-38" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "place-content-center hidden md:grid", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NavLinks, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LoginButton, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden `, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NavLinks, {}) })
  ] }) });
};

// app/components/utils/blogscard.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), BlogsCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mx-4 my-4 grid place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-64 text-primary text-left font-semibold text-md my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "UPDATE" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: props.time })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-64 text-left shadow-xl rounded-xl h-72", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: props.imageUrl, alt: "err", className: "w-full" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-md font-bold my-2 text-black p-4", children: props.title })
  ] })
] }) }), BigBlogCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `w-full rounded-2xl grid grid-cols-1 lg:grid-cols-2 ${props.background ?? "bg-white"} shadow-xl my-10 lg:h-80`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: props.imageUrl, alt: "err", className: "h-80 w-full inline-block rounded-2xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `${props.textColor ?? "text-black"} text-left font-semibold text-md my-2 p-4 md:p-12 grow`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "UPDAYE" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: props.time }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-xl font-bold my-2", children: props.title })
  ] })
] }) });

// app/components/blogpage/bloginfo.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), BlogsInfo = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "md:h-[550px] w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "./images/blogs/bloginfo.png", alt: "error", className: "h-full w-full rounded-lg inline-block relative" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-full mx-auto absolute bottom-0 hidden md:block", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-white text-2xl font-semibold md:w-96", children: "Three AAPI founders building apps on the App Store that cultivate community" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-md font-semibold text-white py-10", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-primary text-2xl font-semibold md:w-96 sm:hidden", children: "Three AAPI founders building apps on the App Store that cultivate community" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-md font-semibold text-primary py-10 md:hidden", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-md font-semibold text-primary", children: "App creators Dawoon Kang of Coffee Meets Bagel, Annie Vang of HmongPhrases, and Larry Liu of Weee! are bringing people together, finding innovative solutions, and forging their own paths." }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-md font-normal text-primary mt-10", children: "AppMany of today\u2019s most impactful creators are combining the power of technology with their personal experiences to offer valuable spaces for users to learn, share, and connect on the App Store. When Larry Liu first immigrated to the U.S., he realised there wasn\u2019t an easy way for the Asian community to buy the goods needed to make some of their favorite dishes. Wanting to provide a place to celebrate and bring widespread access to Asian and Hispanic food, he turned to the App Store to launch grocery delivery app Weee! People would no longer have to be limited to the small \u201Cethnic\u201D aisle at mainstream grocery stores. As big advocates for human connection, Dawoon Kang and her twin sister Arum teamed up to found Coffee Meets Bagel, a dating app with an intentionally \u201Cslower\u201D approach. Their algorithm focuses not on getting users the most likes, but on guiding them toward meaningful conversations. As one of the most popular dating apps, Coffee Meets Bagel has facilitated over 150 million matches to date." }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-md font-normal text-primary mt-10", children: "Annie Vang, a participant of Apple Entrepreneur Camp in 2021, created HmongPhrases to help preserve the Hmong dialect for future generations. Though the Hmong population has been in the U.S. for over 40 years, it is widely considered one of the most marginalised Asian groups. Her app allows users to search for a phrase in Hmong, hear what it sounds like, and then practice saying it out loud. As a true labor of love, not only does Annie do the coding for the app herself \u2014 she even records the phrases in her own voice. Liu, Kang, and Vang discuss how they used technology to transform their ideas into powerful platforms, how their apps uplift their communities, and how they influence positive change." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Top picks" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Related article" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" })
    ] })
  ] })
] }) }), bloginfo_default = BlogsInfo;

// app/routes/blogs/bloginfo.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), blogs = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(bloginfo_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Footer, {})
] }), bloginfo_default2 = blogs;

// app/routes/blogs/index.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default
});

// app/components/blogpage/blogspage.tsx
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons"), import_jsx_runtime11 = require("react/jsx-runtime"), BlogsIntro = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-full px-6 sm:px-16 relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: " absolute w-full h-screen box-border left-0 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: " bg-[#EFEFEF] box-border w-full h-screen rounded-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog6.png", textColor: "text-white" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog7.png", textColor: "text-white" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center my-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grid place-items-center my-10", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronLeft }),
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "text-primary text-md font-normal grid place-items-center mx-10", children: "1  of 20" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronRight }),
        " "
      ] })
    ] }) })
  ] })
] }) }), blogspage_default = BlogsIntro;

// app/routes/blogs/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), blogs2 = () => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(blogspage_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer, {})
] }), blogs_default = blogs2;

// app/routes/createbrand.tsx
var createbrand_exports = {};
__export(createbrand_exports, {
  default: () => createbrand_default,
  loader: () => loader3
});
var import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome5 = require("@fortawesome/react-fontawesome"), import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_axios4 = __toESM(require("axios")), import_react6 = require("react");

// app/components/utils/buttont.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), CusButton = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { onClick: () => {
  props.func != null && props.func();
}, className: `text-center py-2 ${props.margin ?? "my-3"} rounded-lg font-normal ${props.background ?? "bg-primary"} ${props.textColor ?? "text-white"} ${props.textSize ?? "text-md"} ${props.width ?? "w-44"} ${props.background ?? "bg-transparent"} ${props.border ?? "border-2"} ${props.borderColor ?? "border-transparent"}  ${props.height ?? ""} ${props.extra ?? ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: `${props.fontwidth ?? "font-normal"}`, children: props.text }) });

// app/utils.ts
var import_axios3 = __toESM(require("axios"));
async function UploadFile(file) {
  try {
    let formData = new FormData();
    formData.append("file", file);
    let data = await (0, import_axios3.default)({
      method: "post",
      url: `${BaseUrl}/api/upload-file`,
      data: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "multipart/form-data",
        Accept: "*"
      }
    });
    return data.data.status == !1 ? data.data.message : data.data.data.filePath;
  } catch (e) {
    return e.toString();
  }
}
async function getCampaignType(id) {
  try {
    let data = await import_axios3.default.post(`${BaseUrl}/api/get-campaign-type`);
    if (data.data.status == !1)
      return data.data.message;
    {
      let name = "";
      for (let i = 0; i < data.data.data.length; i++)
        data.data.data[i].id == id && (name = data.data.data[i].categoryName);
      return name;
    }
  } catch (e) {
    return e.toString();
  }
}

// app/routes/createbrand.tsx
var EmailValidator = __toESM(require("email-validator")), import_jsx_runtime14 = require("react/jsx-runtime"), loader3 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node5.json)({ user: cookie.user });
}, createBarnd = () => {
  let navigator = (0, import_react5.useNavigate)(), userId = (0, import_react5.useLoaderData)().user.id, [error, setError] = (0, import_react6.useState)(""), [img, setImale] = (0, import_react6.useState)(null), imgref = (0, import_react6.useRef)(null), [imgerror, setImgerror] = (0, import_react6.useState)(null), [cityerror, setCityerror] = (0, import_react6.useState)(null), [citybox, setCitybox] = (0, import_react6.useState)(!1), [searchcity, setSearchcity] = (0, import_react6.useState)([]), [selectedcity, setSelectedctiy] = (0, import_react6.useState)(null), [contactnumber, setContactnumber] = (0, import_react6.useState)(), handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  }, cityref = (0, import_react6.useRef)(null), getCity = async (city) => {
    let data = await import_axios4.default.post(`${BaseUrl}/api/get-city`, { search: city });
    setSearchcity(data.data.data);
  }, nameRef = (0, import_react6.useRef)(null), codeRef = (0, import_react6.useRef)(null), addressRef = (0, import_react6.useRef)(null), websiteRef = (0, import_react6.useRef)(null), emailRef = (0, import_react6.useRef)(null), binfoRef = (0, import_react6.useRef)(null), cinfoRef = (0, import_react6.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4", children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-80 h-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: "No city found with this name" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "px-5 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", onClick: () => {
        setCitybox(!1);
      }, children: "Close" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "h-72 overflow-y-scroll no-scrollbar", children: searchcity.map((value, index2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { onClick: () => {
      setSelectedctiy(value), setCitybox(!1), cityref.current.value = "";
    }, className: "my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500", children: [
      value.name,
      " - ",
      value.code
    ] }, index2) })) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-full pt-4 px-4 bg-background pb-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-full rounded-lg bg-white grid place-items-center shadow-lg py-2 sm:w-96 mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react5.NavLink, { to: "/", className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: "./images/swrvlogo.png", className: "w-28 lg:w-32" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-white w-full shadow-xl p-4 mt-4 rounded-lg mx-auto sm:w-96", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
          parseInt((value.target.files[0].size / 1024 / 1024).toString()) < 4 ? (setImgerror(null), setImale(value.target.files[0])) : setImgerror("Image file size must be less then 4 mb");
        } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex w-full items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grid place-items-center w-40 mr-4 h-40 object-cover", children: img == null ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: "/images/icons/gallery.png", alt: "error", className: "w-40 object-cover inline-block" }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: URL.createObjectURL(img), alt: "error", className: "w-20 h-20 inline-block object-cover rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mt-4", children: "Drop profile photo here." }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 4 MB" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-4", children: [
              imgerror == "" || imgerror == null || imgerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { onClick: () => {
                var _a;
                (_a = imgref.current) == null || _a.click();
              }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: nameRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand code" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: codeRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand website" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: websiteRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand address" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: addressRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand city" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-full bg-[#EEEEEE] rounded-md flex p-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grow", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: cityref, className: "h-full w-full outline-none focus:border-gray-300 bg-transparent" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer", onClick: () => {
            var _a, _b, _c, _d;
            ((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == null || ((_c = cityref.current) == null ? void 0 : _c.value) == "" ? setCityerror("Enter the city name") : (setCitybox(!0), setCityerror(null), getCity(((_d = cityref.current) == null ? void 0 : _d.value) ?? ""));
          }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faChevronRight }) })
        ] }),
        cityerror == "" || cityerror == null || cityerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }),
        selectedcity == "" || selectedcity == null || selectedcity == null ? null : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
          selectedcity.name,
          " - ",
          selectedcity.code
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Contact" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity.country.isd }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Support Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { ref: emailRef, className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("textarea", { ref: binfoRef, className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Company info" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("textarea", { ref: cinfoRef, className: "p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
          if (img == null || img == null)
            setError("Select the image");
          else if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == null || ((_c = nameRef.current) == null ? void 0 : _c.value) == "")
            setError("Fill the Brand name");
          else if (((_d = codeRef.current) == null ? void 0 : _d.value) == null || ((_e = codeRef.current) == null ? void 0 : _e.value) == null || ((_f = codeRef.current) == null ? void 0 : _f.value) == "")
            setError("Fill the Brand code");
          else if (((_g = websiteRef.current) == null ? void 0 : _g.value) == null || ((_h = websiteRef.current) == null ? void 0 : _h.value) == null || ((_i = websiteRef.current) == null ? void 0 : _i.value) == "")
            setError("Fill the Brand website");
          else if (((_j = addressRef.current) == null ? void 0 : _j.value) == null || ((_k = addressRef.current) == null ? void 0 : _k.value) == null || ((_l = addressRef.current) == null ? void 0 : _l.value) == "")
            setError("Fill the Brand address");
          else if (selectedcity == null)
            setError("Fill the city");
          else if (contactnumber == null || contactnumber == null || contactnumber == 0)
            setError("Fill the contact number");
          else if (((_m = emailRef.current) == null ? void 0 : _m.value) == null || ((_n = emailRef.current) == null ? void 0 : _n.value) == null || ((_o = emailRef.current) == null ? void 0 : _o.value) == "")
            setError("Fill the Brand info");
          else if (!EmailValidator.validate((_p = emailRef.current) == null ? void 0 : _p.value))
            setError("Enter valid email");
          else if (contactnumber.toString().length != 10)
            setError("Enter a 10 degit valid contact number");
          else if (((_q = binfoRef.current) == null ? void 0 : _q.value) == null || ((_r = binfoRef.current) == null ? void 0 : _r.value) == null || ((_s = binfoRef.current) == null ? void 0 : _s.value) == "")
            setError("Fill the Brand info");
          else if (((_t = cinfoRef.current) == null ? void 0 : _t.value) == null || ((_u = cinfoRef.current) == null ? void 0 : _u.value) == null || ((_v = cinfoRef.current) == null ? void 0 : _v.value) == "")
            setError("Fill the Campany info");
          else {
            let imageurl = await UploadFile(img), req = {
              userId,
              brandLogoUrl: imageurl,
              brandName: (_w = nameRef.current) == null ? void 0 : _w.value,
              brandCode: (_x = codeRef.current) == null ? void 0 : _x.value,
              brandWebUrl: (_y = websiteRef.current) == null ? void 0 : _y.value,
              brandFullRegisteredAddress: (_z = addressRef.current) == null ? void 0 : _z.value,
              brandSupportEmail: (_A = emailRef.current) == null ? void 0 : _A.value,
              brandSupportContact: contactnumber,
              brandBioInfo: (_B = binfoRef.current) == null ? void 0 : _B.value,
              comapnyBio: (_C = cinfoRef.current) == null ? void 0 : _C.value,
              cityId: selectedcity.id
            }, data = await (0, import_axios4.default)({
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
                Accept: "*"
              }
            });
            return data.data.status == !1 ? setError(data.data.message) : navigator("/home");
          }
        }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CusButton, { text: "Create Brand", background: "bg-secondary", textColor: "text-white", width: "w-full" }) })
      ] })
    ] })
  ] });
}, createbrand_default = createBarnd;

// app/routes/updateuser.tsx
var updateuser_exports = {};
__export(updateuser_exports, {
  default: () => updateuser_default,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node");
var import_jsx_runtime15 = require("react/jsx-runtime");
async function loader4({ request }) {
  return (0, import_node6.redirect)("./", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ isLogin: !1 })
    }
  });
}
var UpdateUser = () => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {}), updateuser_default = UpdateUser;

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => register_default,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_axios6 = __toESM(require("axios"));

// app/components/user/register.tsx
var import_react7 = require("@remix-run/react");
var import_react8 = require("react"), import_react_fontawesome6 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons"), import_auth2 = require("firebase/auth");

// app/services/firebase.tsx
var import_app2 = require("firebase/app"), import_auth = require("firebase/auth"), firebaseConfig = {
  apiKey: "AIzaSyDlGca1bF_e_JnPXj0A3T3IdV-XYOzWvrI",
  authDomain: "swrv-test.firebaseapp.com",
  projectId: "swrv-test",
  storageBucket: "swrv-test.appspot.com",
  messagingSenderId: "830192405531",
  appId: "1:830192405531:web:988f62911c3fe1e8387cbe",
  measurementId: "G-59JHF0DRXZ"
}, app = (0, import_app2.initializeApp)(firebaseConfig), auth = (0, import_auth.getAuth)(app);

// app/components/user/register.tsx
var import_axios5 = __toESM(require("axios")), import_jsx_runtime16 = require("react/jsx-runtime"), RegisterBox = (props) => {
  let navigator = (0, import_react7.useNavigate)(), [isBrand, setBrand] = (0, import_react8.useState)(!1), cat = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    props.isBrand ? (cat.current.value = "brand", setBrand(!0)) : (cat.current.value = "inf", setBrand(!1));
  }, []);
  let [error, setError] = (0, import_react8.useState)(null), [showpassone, setShowPassone] = (0, import_react8.useState)(!1), changePassVisabelone = () => {
    setShowPassone(!showpassone);
  }, [showpasstwo, setShowPasstwo] = (0, import_react8.useState)(!1), changePassVisabeltwo = () => {
    setShowPasstwo(!showpasstwo);
  }, socialRegister = async (email, pass) => {
    let req = {
      email,
      password: pass,
      "confirm-password": pass,
      isBrand: "0",
      isInfluencer: "1"
    }, apidata = await (0, import_axios5.default)({
      method: "post",
      url: `${BaseUrl}/api/register`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    apidata.data.status ? navigator(`/extra/socialregister/${apidata.data.data.id}`) : setError(apidata.data.message);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: "./images/avatar/login.png", alt: "err", className: "justify-self-end w-[250px] h-[400px]" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "w-full", onClick: () => {
          cat.current.value = "inf", setBrand(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CusButton, { width: "w-full", text: "Influencer", background: `${isBrand ? "" : "bg-secondary"}`, textColor: `${isBrand ? "text-primary" : "text-white"}`, borderColor: `${isBrand ? "border-primary" : ""}`, fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "w-full", onClick: () => {
          cat.current.value = "brand", setBrand(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CusButton, { width: "w-full", text: "Brand", textColor: `${isBrand ? "text-white" : "text-primary"}`, background: `${isBrand ? "bg-secondary" : ""}`, borderColor: `${isBrand ? "" : "border-primary"}`, fontwidth: "font-bold" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react7.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { name: "cat", ref: cat, type: "hidden" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { name: "email", type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { name: "password", type: showpassone ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md", onClick: changePassVisabelone, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: showpassone ? import_free_solid_svg_icons5.faEye : import_free_solid_svg_icons5.faEyeSlash }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { name: "repassword", type: showpasstwo ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-gray-600 text-center px-1 rounded-md shadow-lg text-md", onClick: changePassVisabeltwo, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: showpasstwo ? import_free_solid_svg_icons5.faEye : import_free_solid_svg_icons5.faEyeSlash }) })
        ] }),
        isBrand ? null : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex content-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { onClick: async () => {
              var _a;
              let googleProvider = new import_auth2.GoogleAuthProvider(), res = await (0, import_auth2.signInWithPopup)(auth, googleProvider), pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
              try {
                await socialRegister(res.user.email, pass);
              } catch (e) {
                setError(e.toString());
              }
            }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }) })
          ] }) }),
          error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
          props.message && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { className: "w-full inline black rounded-lg bg-primary shadow-lg text-center font-bold text-white text-md py-2 ", children: "create account" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex gap-4 content-start mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "checkbox", name: "check1" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex gap-4 mt-4 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "checkbox", name: "check2" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
          "I\u2019m already registered.",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react7.Link, { to: "/login", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-bold", children: " Let me Log in" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "hidden lg:block" })
  ] }) });
};

// app/routes/register.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let isBrand = new URL(request.url).searchParams.get("isBrand"), isInf = new URL(request.url).searchParams.get("isInf"), brand = isBrand == "1", inf = isInf == "1", cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return cookie && cookie.isLogin ? (0, import_node7.redirect)("/home") : (0, import_node7.json)({ brand, inf });
}, register = () => {
  let loaderData = (0, import_react9.useLoaderData)(), data = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(IntroNavBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(RegisterBox, { isBrand: !!loaderData.brand, message: data == null ? void 0 : data.message })
  ] });
}, register_default = register, action = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData);
  if (value.email == "" || value.email == null || value.email == null)
    return { message: "Enter the email" };
  if (value.password == "" || value.password == null || value.password == null)
    return { message: "Enter the password" };
  if (value.repassword == "" || value.repassword == null || value.repassword == null)
    return { message: "Enter the repassword" };
  if (value.check1 != "on" || value.check2 != "on")
    return { message: "Check the all checkbox" };
  if (value.password != value.repassword)
    return { message: "Password and Re-password should be same" };
  let req = {};
  value.cat == "inf" && (req = {
    email: value.email.toString(),
    password: value.password.toString(),
    "confirm-password": value.repassword.toString(),
    isBrand: "0",
    isInfluencer: "1"
  }), value.cat == "brand" && (req = {
    email: value.email.toString(),
    password: value.password.toString(),
    "confirm-password": value.repassword.toString(),
    isBrand: "1",
    isInfluencer: "0"
  });
  try {
    let apidata = await (0, import_axios6.default)({
      method: "post",
      url: `${BaseUrl}/api/register`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    if (apidata.data.status == !1)
      return { message: apidata.data.message };
    {
      let userdata = await (0, import_axios6.default)({
        method: "post",
        url: `${BaseUrl}/api/getuser`,
        data: { id: apidata.data.data.id },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      }), sendverificationmail = await (0, import_axios6.default)({
        method: "post",
        url: `${BaseUrl}/api/send-otp`,
        data: { userId: apidata.data.data.id },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      });
      return userdata.data.status == !1 ? { message: userdata.data.message } : sendverificationmail.data.status == !1 ? { message: sendverificationmail.data.message } : value.cat == "inf" ? (0, import_node7.redirect)("/home", {
        headers: {
          "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
        }
      }) : (0, import_node7.redirect)("/createbrand", {
        headers: {
          "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
        }
      });
    }
  } catch (e) {
    return { message: e };
  }
};

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default2
});

// app/components/contact/contact.tsx
var import_react_fontawesome7 = require("@fortawesome/react-fontawesome");

// app/components/utils/downloadapp.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), DownloadApp = () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "bg-[#0000004C]  rounded-xl flex mt-8 p-6 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h3", { className: "text-white text-4xl font-bold", children: [
      "Join the largest ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      " influencer network"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "Instant access to top influencers" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "grow" }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CusButton, { text: "Download Our app", background: "bg-secondary" }) }) })
] }) });

// app/components/contact/contact.tsx
var import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime19 = require("react/jsx-runtime"), ContactPage = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-full px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-[#EFEFEF] rounded-2xl sm:p-0 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10 ", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "text-5xl font-bold text-primary flex", children: "Love to hear from you" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h1", { className: "text-5xl  font-bold text-primary flex", children: [
    "Get in touch ",
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: "./images/icons/hand.png", alt: "error" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex gap-4 flex-col lg:flex-row items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: " w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faLocationDot }),
      " 102 street 2712 Don"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faPhone }),
      " 102 street 2712 Don"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faMailBulk }),
      " 102 street 2712 Don"
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-white p-6 rounded-2xl my-10 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CusButton, { text: "I'am a brand", textColor: "text-black", borderColor: "b-gray-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Your Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your phone number" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Message" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("textarea", { className: "p-4 w-full h-60 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none", placeholder: "your message" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CusButton, { text: "Send Message", background: "bg-primary" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DownloadApp, {})
] }) }) }) }), contact_default = ContactPage;

// app/routes/contact.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), contact = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(contact_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Footer, {})
] }), contact_default2 = contact;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => logout_default,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node");
var import_jsx_runtime21 = require("react/jsx-runtime");
async function loader6({ request }) {
  return (0, import_node8.redirect)("/login", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ isLogin: !1 })
    }
  });
}
var Logout = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { children: "This is logout page" }) }), logout_default = Logout;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2
});

// app/components/utils/teamcard.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), TeamCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "w-64 text-left shadow-xl rounded-xl pb-4 m-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: props.imageUrl, alt: "err", className: "w-full" }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "text-xl font-bold text-primary text-center mt-2", children: props.name }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "text-md font-semibold text-primary text-center", children: props.position })
] }) });

// app/components/about/about.tsx
var import_jsx_runtime23 = require("react/jsx-runtime"), AboutPage = () => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "About SWRV influencer platform" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-md font-semibold text-primary mt-6", children: "Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf8.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf14.png", alt: "error" }) }),
      "  ",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf13.png", alt: "error" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf12.png", alt: "error" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf11.png", alt: "error" }) }),
      "  ",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf10.png", alt: "error" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: "./images/inf/inf9.png", alt: "error" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "We assist the influencer marketing sector in" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-secondary text-3xl font-bold", children: "becoming more efficient." }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("p", { className: "text-md font-normal text-gray-600 mt-10", children: [
      "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date.",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea.",
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
      " SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "bg-[#0000004C] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-white text-3xl font-bold", children: "Mission Statement:" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-md font-semibold text-white mt-4", children: "SWRV aims to provide the most comprehensive reviews of marketing software and services globally, enabling brands and marketing decision makers to make smarter decisions around their marketing stack." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "The Core Team" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Werner Geyser", position: "Founder", imageUrl: "./images/team/team1.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Yaroslav Siryk", position: "CTO", imageUrl: "./images/team/team2.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Anne Vest", position: "COO", imageUrl: "./images/team/team6.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Sasha Bondarenko", position: "Growth Marketing", imageUrl: "./images/team/team5.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Djordje Pajkanovic", position: "UX/UI Designer", imageUrl: "./images/team/team4.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TeamCard, { name: "Sasha Bondarenko", position: "General Manager", imageUrl: "./images/team/team3.png" })
    ] })
  ] })
] }) }), about_default = AboutPage;

// app/routes/about.tsx
var import_jsx_runtime24 = require("react/jsx-runtime"), about = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(about_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Footer, {})
] }), about_default2 = about;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});

// app/components/utils/markatingcard.tsx
var import_jsx_runtime25 = require("react/jsx-runtime"), MarkatingCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: `h-full w-38 text-left text-gray-600 p-4 ${props.leftBorder ? "border-l-2 border-gray-400" : ""}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: props.imageUrl, alt: "err" }),
  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h1", { className: "text-xl font-bold my-4", children: props.title }),
  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-md font-normal", children: props.description })
] }) });

// app/components/utils/categorycard.tsx
var import_jsx_runtime26 = require("react/jsx-runtime"), CategoryCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "w-40 text-left text-gray-600 p-3 border-2 border-gray-400 shadow-md rounded-xl my-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: props.imageUrl, alt: "err" }),
  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h1", { className: "text-xl font-bold my-2 text-primary", children: props.title }),
  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm font-normal", children: props.description })
] }) });

// app/components/homepage/homeintro.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime27 = require("react/jsx-runtime"), HomeIntro = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HomeFirst, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(RelatatinoAndTrust, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Market, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Marketing, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PowerfullInf, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ExploreCategory, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(JoinSwrv, {}),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Blogs, {})
] }) }), RelatatinoAndTrust = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto lg:my-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "We strengthen relationships between" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-secondary text-3xl font-bold", children: "brands and creatives." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-black text-md font-normal", children: "Our mission is to Make Waves, which stems from the fact that our creators tell stories that foster human relationships and generate waves of influence. These waves of influence create our data layers, and we use them to calculate the impact. Our clients and creators make a splash, and we track the results." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Trusted by" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "h-[1px] bg-black w-full my-2" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-5xl text-center text-gray-600 gap-x-5 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: "OGILVY" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: "McDonald's" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: "Shelter" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: "Playtika" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: "Starbucks" }) })
  ] })
] }), HomeFirst = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "absolute h-[450px] md:h-[550px] lg:h-[700px] w-full inline-block mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "h-full w-full bg-primary rounded-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full px-5 md:p-0 md:w-3/5 lg:w-4/6 relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "pt-10 md:pt-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-white text-5xl font-bold", children: "Reach the next billion" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "We connect brands with targeted audience through nano influencer marketing. Save time and improve performance. Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex flex-col sm:flex-row items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react10.Link, { to: "/register?isBrand=1", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CusButton, { text: "I'am a brand", borderColor: "border-white" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react10.Link, { to: "/register?isInf=1", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" }) })
    ] })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "absolute w-full", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "px-2 sm:px-20 mx-auto grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/mast_group.svg", alt: "error", className: "w-[1200px] mx-auto" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full md:w-3/5 lg:w-4/6 py-20 relative mx-auto grid place-content-center ", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex  gap-4 px-6 md:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf4.png", alt: "error" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex flex-col  gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex  gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf2.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf6.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf5.png", alt: "error" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf7.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf3.png", alt: "error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf1.png", alt: "error" }) })
        ] })
      ] })
    ] }) })
  ] })
] }) }), Market = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full bg-[#EFEFEF]  rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mx-auto py-4 w-full md:w-3/5 lg:w-4/6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full  mx-auto my-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h3", { className: "text-primary text-3xl font-bold", children: [
      "An entire ",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-secondary", children: "marketing platform" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
      " for influencers"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-black text-md font-normal", children: "All of the campaign's steps are smoothly integrated into a single user experience." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:place-items-center my-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon1.png", title: "Make a campaign", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon5.png", title: "Look for influencers.", description: "Access a vast influencer database. It's simple to locate influencers thanks to advanced search criteria.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon4.png", title: "Statistics", description: "Real-time campaign performance analysis and sharing", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon3.png", title: "Communication", description: "For quick and easy connection with your influencers, there's an integrated chat option and a notification centre.", leftBorder: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MarkatingCard, { imageUrl: "./images/icons/icon2.png", title: "Payments", description: "Easily and securely manage payments from buyers to influencers.", leftBorder: !0 })
  ] })
] }) }) }), PowerfullInf = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full my-10 bg-[#0000004C] py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: " w-full md:w-3/5 lg:w-4/6 mx-auto md:p-0 p-6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h3", { className: "text-white text-4xl font-bold", children: [
    "ARE YOU A POWERFUL",
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    " INFLUENCER?"
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-white text-md font-normal mt-4", children: "Stop looking for the ideal marketplace to join and simply join all of them." }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CusButton, { text: "Join Now", background: "bg-secondary" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CusButton, { text: "Read More", borderColor: "border-white" })
  ] })
] }) }) }), Marketing = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: " py-4 w-full md:w-3/5 lg:w-4/6   mx-auto", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-4xl font-bold", children: "We assist the influencer marketing sector in" }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-secondary text-4xl font-bold", children: "becoming more efficient." }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h3", { className: "text-gray-500 text-md font-normal mt-4", children: [
    "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date. ",
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea. SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(DownloadApp, {})
] }) }) }), ExploreCategory = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Explore by category" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "grid place-items-center grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 my-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/education.png", title: "Education", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/food.png", title: "Food", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/photography.png", title: "Photography", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/travel.png", title: "Travel", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/motivation.png", title: "Motivation", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/beauty.png", title: "Beauty", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/automotive.png", title: "Automotive", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CategoryCard, { imageUrl: "./images/icons/health.png", title: "Health", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." })
  ] })
] }), JoinSwrv = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-3xl font-bold", children: "Join SWRV" }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-gray-600 text-md font-normal", children: "There are no commissions or membership costs for brands or buyer agencies." }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 place-items-center my-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-60 h-40 m-4", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf2.png", className: "w-full h-full" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-60 h-40  m-4", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf3.png", className: "w-full h-full" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-60 h-40 hidden lg:block  m-4", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: "./images/inf/inf4.png", className: "w-full h-full" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-gray-600 text-lg font-semibold", children: "SWRV market" }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h3", { className: "text-gray-500 text-md font-normal", children: [
    "SWRV Market is SWRV's entire influencer marketing soluction. The whole campaign flow - discorvery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction-base business model that is avaliable to any brand or purchasing agency for free.",
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
    "SWRV is a free assistance programme that may help you grow faster and get a competitver advantage."
  ] })
] }) }), Blogs = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-primary text-3xl font-bold grid place-items-center", children: "Blogs" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CusButton, { text: "Read More", textColor: "text-primary", borderColor: "border-secondary" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "h-[1px] bg-black w-full my-2" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 items-start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(BlogsCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "June 1, 2022", imageUrl: "./images/blogs/blog5.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog2.png" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(BlogsCard, { title: "From farm to sea: Conserving mangroves to protect local livelihoods and the planet", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" })
  ] })
] });

// app/routes/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), index = () => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(IntroNavBar, {}),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(HomeIntro, {}),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Footer, {})
] }), routes_default = index;

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => login_default,
  loader: () => loader7
});
var import_react14 = require("@remix-run/react");

// app/components/home/footer/mainfooter.tsx
var import_react11 = require("@remix-run/react"), import_jsx_runtime29 = require("react/jsx-runtime"), MainFooter = () => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-full flex py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col sm:flex-row justify-center content-center items-center w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react11.Link, { to: "/about", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "About" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Cookie policy" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "FAQ" }) })
] }) }) });

// app/components/user/login.tsx
var import_react12 = require("@remix-run/react");
var import_react13 = require("react"), import_react_fontawesome8 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons"), import_auth3 = require("firebase/auth");
var import_axios7 = __toESM(require("axios"));
var EmailValidator2 = __toESM(require("email-validator")), import_jsx_runtime30 = require("react/jsx-runtime"), LoginBox = (props) => {
  let navigator = (0, import_react12.useNavigate)(), [showpass, setShowPass] = (0, import_react13.useState)(!1), changePassVisabel = () => {
    setShowPass(!showpass);
  }, [error, setError] = (0, import_react13.useState)(null), socialLogin = async (email, pass) => {
    let apidata = await import_axios7.default.post(`${BaseUrl}/api/login`, { email, password: pass });
    apidata.data.status ? navigator(`/extra/sociallogin/${apidata.data.data.id}`) : setError(apidata.data.message);
  }, emailRef = (0, import_react13.useRef)(null), [emailError, setEmailError] = (0, import_react13.useState)(null), [forgetPasswordBox, setForgetPasswordBox] = (0, import_react13.useState)(!1), forgetPassword = async () => {
    var _a, _b, _c, _d, _e;
    if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == null || ((_c = emailRef.current) == null ? void 0 : _c.value) == "")
      setEmailError("Fill the Brand info");
    else if (!EmailValidator2.validate((_d = emailRef.current) == null ? void 0 : _d.value))
      setEmailError("Enter valid email");
    else {
      let apidata = await import_axios7.default.post(`${BaseUrl}/api/send-forgot-password`, { user: (_e = emailRef.current) == null ? void 0 : _e.value });
      return apidata.data.status ? setForgetPasswordBox(!1) : setEmailError(apidata.data.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: `fixed top-0 left-0 bg-gray-600 bg-opacity-20 h-screen w-full grid place-items-center shadow-xl ${forgetPasswordBox ? "" : "hidden"} `, style: { zIndex: 100 }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "bg-white rounded-lg p-8 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { onClick: () => {
          setForgetPasswordBox(!1);
        }, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_fontawesome8.FontAwesomeIcon, { className: "text-black text-2xl font-bold", icon: import_free_solid_svg_icons7.faXmark }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black font-bold text-lg mt-4 text-center my-4", children: "Forget password" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { ref: emailRef, type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }),
      emailError == "" || emailError == null || emailError == null ? null : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: emailError }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { onClick: forgetPassword, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CusButton, { text: "Send", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: " text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]", children: "Welcome" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "hidden lg:flex" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react12.Form, { method: "post", children: [
          props.message && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500", children: props.message }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { name: "email", type: "email", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "bg-gray-200 rounded-md px-4 py-2 flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { name: "password", type: showpass ? "text" : "password", className: "bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full", placeholder: "8 character" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-gray-600 text-center px-1 text-md", onClick: changePassVisabel, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: showpass ? import_free_solid_svg_icons7.faEye : import_free_solid_svg_icons7.faEyeSlash }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex content-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { src: "./images/media/facebook.png", alt: "error", className: "w-10 h-10" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { onClick: async () => {
              var _a;
              let googleProvider = new import_auth3.GoogleAuthProvider(), res = await (0, import_auth3.signInWithPopup)(auth, googleProvider), pass = ((_a = res.user.displayName) == null ? void 0 : _a.trim().split(" ").join("").toLowerCase().trim()) + "SWRV123@#";
              try {
                await socialLogin(res.user.email, pass);
              } catch (e) {
                setError(e.toString());
              }
            }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }) })
          ] }) }),
          error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("button", { className: "w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ", children: "Submit" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("p", { className: "text-black text-left font-normal text-sm mt-4", children: [
            "CAN'T LOG IN? ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { onClick: () => {
              setForgetPasswordBox(!0);
            }, className: "font-bold cursor-pointer", children: "RESTORE PASSWORD" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react12.Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CusButton, { text: "Join", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "hidden lg:block" })
      ] })
    ] })
  ] });
};

// app/routes/login.tsx
var EmailValidator3 = __toESM(require("email-validator")), import_node9 = require("@remix-run/node"), import_axios8 = __toESM(require("axios"));
var import_jsx_runtime31 = require("react/jsx-runtime"), login = () => {
  let data = (0, import_react14.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(IntroNavBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(LoginBox, { message: data == null ? void 0 : data.message }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(MainFooter, {})
  ] }) });
};
async function loader7({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return cookie && cookie.isLogin ? (0, import_node9.redirect)("/home") : null;
}
var action2 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData);
  if (value.email == null || value.email == "" || !EmailValidator3.validate(value.email.toString()) || value.email == null)
    return { message: "Enter a valid email." };
  if (value.password == "" || value.password == null || value.password == null)
    return { message: "Enter the password" };
  try {
    let data = await import_axios8.default.post(`${BaseUrl}/api/login`, { email: value.email, password: value.password });
    if (data.data.status == !1)
      return { message: data.data.message };
    {
      let userdata = await (0, import_axios8.default)({
        method: "post",
        url: `${BaseUrl}/api/getuser`,
        data: { id: data.data.data.id },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      });
      return (0, import_node9.redirect)("/home", {
        headers: {
          "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
        }
      });
    }
  } catch (e) {
    return { message: e };
  }
}, login_default = login;

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => home_default,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), import_react18 = require("@remix-run/react");

// app/components/home/footer/homefooter.tsx
var import_react15 = require("@remix-run/react"), import_jsx_runtime32 = require("react/jsx-runtime"), HomeFooter = () => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "w-full flex py-6 px-8 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react15.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "grow" }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex justify-center my-2 md:my-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react15.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react15.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" })
  ] })
] }) });

// app/components/home/navbar/mainnavbar.tsx
var import_react17 = require("@remix-run/react"), import_free_solid_svg_icons9 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome10 = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons3 = require("@fortawesome/free-brands-svg-icons");

// app/components/home/sidebar/sidebar.tsx
var import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons"), import_free_solid_svg_icons8 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome9 = require("@fortawesome/react-fontawesome"), import_react16 = require("@remix-run/react");

// app/state/home/sidebarstate.ts
var import_zustand2 = require("zustand"), SideBarStore = (0, import_zustand2.create)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), sidebarstate_default = SideBarStore;

// app/state/navigation/sidebar.ts
var import_zustand3 = require("zustand");
var SideBarNavStore = (0, import_zustand3.create)()((set) => ({
  currentIndex: 0 /* None */,
  changeTab: (value) => set((state) => ({ currentIndex: value }))
})), sidebar_default = SideBarNavStore;

// app/components/home/sidebar/sidebar.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), SideBar = (props) => {
  let currentPage = sidebar_default((state) => state.currentIndex), sidebar = sidebar_default((state) => state.changeTab), isOpen = sidebarstate_default((state) => state.isOpen), changeSidebar = sidebarstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: ` ${isOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col py-8 px-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { onClick: () => {
      changeSidebar(!isOpen);
    }, className: "w-full flex cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: isOpen ? import_free_solid_svg_icons8.faChevronLeft : import_free_solid_svg_icons8.faChevronRight }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/mycampaings", onClick: () => {
      sidebar(1 /* MyCampaigns */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "My campaigns", isOpen, isActive: currentPage === 1 /* MyCampaigns */, icon: import_free_solid_svg_icons8.faFolder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/findcampaign", onClick: () => {
      sidebar(2 /* FindCampaigns */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Find campaigns", isOpen, isActive: currentPage === 2 /* FindCampaigns */, icon: import_free_solid_svg_icons8.faSearch }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/inbox", onClick: () => {
      sidebar(3 /* Inbox */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Inbox", isOpen, isActive: currentPage === 3 /* Inbox */, icon: import_free_solid_svg_icons8.faEnvelope }) }),
    props.isBrand ? null : /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/drafts", onClick: () => {
        sidebar(5 /* Drafts */), changeSidebar(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Drafts", isOpen, isActive: currentPage === 5 /* Drafts */, icon: import_free_brands_svg_icons2.faDraft2digital }) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/favourite", onClick: () => {
        sidebar(6 /* Favourite */), changeSidebar(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Favourite", isOpen, isActive: currentPage === 6 /* Favourite */, icon: import_free_solid_svg_icons8.faHeart }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/invite", onClick: () => {
      sidebar(7 /* Invite */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Invite", isOpen, isActive: currentPage === 7 /* Invite */, icon: import_free_solid_svg_icons8.faPeopleLine }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/home/help", onClick: () => {
      sidebar(8 /* Help */), changeSidebar(!1);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Help", isOpen, isActive: currentPage === 8 /* Help */, icon: import_free_solid_svg_icons8.faCircleQuestion }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react16.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NavTab, { title: "Logout", isOpen, isActive: currentPage == 0 /* None */, icon: import_free_solid_svg_icons8.faRightFromBracket }) })
  ] }) }) });
}, NavTab = (props) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: `${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`, children: [
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: props.icon }),
  " ",
  props.isOpen ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "ml-4 font-normal text-md", children: props.title }) : null,
  "  "
] }) });

// app/state/home/mobilenavstate.ts
var import_zustand4 = require("zustand"), MobileNavStore = (0, import_zustand4.create)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), mobilenavstate_default = MobileNavStore;

// app/state/home/notification.ts
var import_zustand5 = require("zustand"), NotificationStore = (0, import_zustand5.create)()((set) => ({
  isOpen: !1,
  change: (value) => set((state) => ({ isOpen: value }))
})), notification_default = NotificationStore;

// app/components/home/notification.tsx
var import_jsx_runtime34 = require("react/jsx-runtime"), Notification = () => {
  let open = notification_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: `${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl`, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(NotificationTab, {}) }) });
}, notification_default2 = Notification, NotificationTab = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "w-full border-b-2 border-gray-400 flex py-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "w-14 h-14 rounded-lg" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-gray-500 font-semibold text-sm leading-normal w-40", children: "Adidas have created a campaign for you would you like to accept?" })
] }) });

// app/components/home/navbar/mainnavbar.tsx
var import_jsx_runtime35 = require("react/jsx-runtime"), MainNavBar = (props) => {
  let currentPage = sidebar_default((state) => state.currentIndex), sidebar = sidebar_default((state) => state.changeTab), isOpen = mobilenavstate_default((state) => state.isOpen), changMenu = mobilenavstate_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "bg-white w-full shadow-xl rounded-2xl ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full  flex px-4 items-center py-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "mr-4 md:hidden cursor-pointer", onClick: () => {
        changMenu(!isOpen);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_fontawesome10.FontAwesomeIcon, { className: "text-lg text-primary text-center font-bold", icon: isOpen ? import_free_solid_svg_icons9.faRemove : import_free_solid_svg_icons9.faBars }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: "/images/swrvlogo.png", className: "w-28 inline-block rounded-lg" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-primary text-xs font-normal", children: props.role[0].toUpperCase() + props.role.slice(1).toLowerCase() })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(MainNavRight, { avatar: props.avatar, role: props.role, name: props.name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: `w-full p-2 transition-all md:hidden ${isOpen ? "" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col items-center  py-8 px-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/mycampaings", onClick: () => {
        sidebar(1 /* MyCampaigns */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "My campaigns", isOpen: !0, isActive: currentPage == 1 /* MyCampaigns */, icon: import_free_solid_svg_icons9.faFolder }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/findcampaign", onClick: () => {
        sidebar(2 /* FindCampaigns */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Find campaigns", isOpen: !0, isActive: currentPage == 2 /* FindCampaigns */, icon: import_free_solid_svg_icons9.faSearch }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/inbox", onClick: () => {
        sidebar(3 /* Inbox */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Inbox", isOpen: !0, isActive: currentPage == 3 /* Inbox */, icon: import_free_solid_svg_icons9.faEnvelope }) }),
      props.isBrand ? null : /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/drafts", onClick: () => {
          sidebar(5 /* Drafts */), changMenu(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Drafts", isOpen: !0, isActive: currentPage == 5 /* Drafts */, icon: import_free_brands_svg_icons3.faDraft2digital }) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/favourite", onClick: () => {
          sidebar(6 /* Favourite */), changMenu(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Favourite", isOpen: !0, isActive: currentPage == 6 /* Favourite */, icon: import_free_solid_svg_icons9.faHeart }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/invite", onClick: () => {
        sidebar(7 /* Invite */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Invite", isOpen: !0, isActive: currentPage == 7 /* Invite */, icon: import_free_solid_svg_icons9.faPeopleLine }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/home/help", onClick: () => {
        sidebar(8 /* Help */), changMenu(!1);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Help", isOpen: !0, isActive: currentPage == 8 /* Help */, icon: import_free_solid_svg_icons9.faCircleQuestion }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react17.Link, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavTab, { title: "Logout", isOpen: !0, isActive: currentPage == 0 /* None */, icon: import_free_solid_svg_icons9.faRightFromBracket }) })
    ] }) })
  ] }) }) });
}, MainNavRight = (props) => {
  let open = notification_default((state) => state.isOpen), changeNotification = notification_default((state) => state.change), role = props.role == "BRAND" ? "Admin" : "", name = props.name.split("@")[0], avatar = props.avatar == "0" || props.avatar == null || props.avatar == null || props.avatar == "" ? "/images/avatar/user.png" : props.avatar;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "md:flex hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "grid place-items-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { onClick: () => changeNotification(!open), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faBell }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(notification_default2, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "h-8 mx-4 bg-primary w-[2px]", children: " " }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-left text-md text-black font-normal", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-left text-xs text-black font-normal", children: role })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: avatar, alt: "user avatar", className: "w-10 h-10 rounded object-cover" }) })
  ] }) });
};

// app/routes/home.tsx
var import_jsx_runtime36 = require("react/jsx-runtime"), loader8 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node10.json)({ user: cookie.user });
}, HomePage = () => {
  let userdata = (0, import_react18.useLoaderData)(), isbrand = userdata.user.role.code != 10, isOpen = sidebarstate_default((state) => state.isOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex md:relative bg-background", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SideBar, { isBrand: isbrand }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: `w-full md:grow transition-all  md:relative ${isOpen ? "md:ml-60" : "md:ml-20"}  p-2 pr-4`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(MainNavBar, { isBrand: isbrand, name: userdata.user.userName, role: userdata.user.role.name, avatar: userdata.user.pic }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react18.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(HomeFooter, {})
    ] })
  ] }) });
}, home_default = HomePage;

// app/routes/home/profilecomplete.tsx
var profilecomplete_exports = {};
__export(profilecomplete_exports, {
  default: () => profilecomplete_default,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/state/user/firstinput.ts
var import_zustand6 = require("zustand"), UserInputStore = (0, import_zustand6.create)()((set) => ({
  index: 1,
  setIndex: (value) => set((state) => ({ index: value }))
})), firstinput_default = UserInputStore;

// app/routes/home/profilecomplete.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), loader9 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node11.json)({ user: cookie.user });
}, UserEditBox = () => {
  let isBrand = (0, import_react19.useLoaderData)().user.role.code == "50", index2 = firstinput_default((state) => state.index), setIndex = firstinput_default((state) => state.setIndex);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "w-full bg-white rounded-xl p-4 shadow-xl mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: `text-lg text-center font-medium p-2 bg-secondary text-white  ${index2 == 1 ? "w-2/5" : ""} ${index2 == 2 ? "w-3/5" : ""} ${index2 == 3 ? "w-4/5" : ""} ${index2 == 4 ? "w-full" : ""} rounded-xl`, children: [
      index2 == 1 ? "0% Completed" : "",
      index2 == 2 ? "25% Completed" : "",
      index2 == 3 ? "50% Completed" : "",
      index2 == 4 ? "75% Completed" : ""
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex lg:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "p-6  w-full hidden md:block", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "hidden place-items-center lg:grid ", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("img", { src: "/images/avatar/profile1.png", alt: "error", className: "h-[400px]" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h1", { className: "pt-4 text-3xl text-primary text-left font-semibold", children: "Welcome" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "pt-2 text-black text-xl font-normal", children: "Thank you for the confirmation, Login with your account and start searching for the brands." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "bg-white rounded-xl shadow-xl px-2 py-4 flex flex-row items-center lg:flex-col justify-between overflow-x-hidden no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ProfileCompleteBox, { isActive: index2 == 1, positionumber: "01", title: "Info" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ProfileCompleteBox, { isActive: index2 == 2, positionumber: "02", title: "Audience" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ProfileCompleteBox, { isActive: index2 == 3, positionumber: "03", title: "Connect" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ProfileCompleteBox, { isActive: index2 == 4, positionumber: "04", title: "Contact" }),
        isBrand ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ProfileCompleteBox, { isActive: index2 == 5, positionumber: "05", title: "Users" }) : null
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react19.Outlet, {})
    ] })
  ] }) });
}, profilecomplete_default = UserEditBox, ProfileCompleteBox = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "px-3 py-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: `grid place-items-center h-14 w-14 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: `font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`, children: props.positionumber }) }),
  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h4", { className: `text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`, children: props.title })
] }) });

// app/routes/home/profilecomplete/secondpage.tsx
var secondpage_exports = {};
__export(secondpage_exports, {
  action: () => action3,
  default: () => secondpage_default,
  loader: () => loader10
});
var import_free_solid_svg_icons10 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome11 = require("@fortawesome/react-fontawesome"), import_node12 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_axios9 = __toESM(require("axios")), import_he = __toESM(require("he")), import_react21 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime"), loader10 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), accountRes = await (0, import_axios9.default)({
    method: "post",
    url: `${BaseUrl}/api/getcurrency`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  }), categoryRes = await (0, import_axios9.default)({
    method: "post",
    url: `${BaseUrl}/api/getcategory`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  }), languagesRes = await (0, import_axios9.default)({
    method: "post",
    url: `${BaseUrl}/api/getlanguage`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  }), mainmarketRes = await (0, import_axios9.default)({
    method: "post",
    url: `${BaseUrl}/api/get-market`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return (0, import_node12.json)({ user: cookie.user, currency: accountRes.data.data, category: categoryRes.data.data, languages: languagesRes.data.data, market: mainmarketRes.data.data });
}, SecondPage = () => {
  let loaderData = (0, import_react20.useLoaderData)(), userID = loaderData.user.id, currency = loaderData.currency, category = loaderData.category, languages = loaderData.languages, market = loaderData.market, setIndex = firstinput_default((state) => state.setIndex), navigator = (0, import_react20.useNavigate)(), [error, setError] = (0, import_react21.useState)(null), [selcurrency, setSelcurrency] = (0, import_react21.useState)([]), [selcategory, setSelcategory] = (0, import_react21.useState)([]), [sellanguages, setSellanguages] = (0, import_react21.useState)([]), [selmarket, setSelmarket] = (0, import_react21.useState)([]), [selorthermarket, setSelorthermarket] = (0, import_react21.useState)([]), [cur, setcur] = (0, import_react21.useState)(!1), [cat, setcat] = (0, import_react21.useState)(!1), [lan, setlan] = (0, import_react21.useState)(!1), [mar, setmar] = (0, import_react21.useState)(!1), [ort, setort] = (0, import_react21.useState)(!1), nextButton = (0, import_react21.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "p-8 w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "w-full max-w-[400px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Main market" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selmarket.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.name} - [${value.code}]` }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setmar(!0);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faAdd }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${mar ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: market.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h1", { onClick: () => {
        if (selmarket.includes(val)) {
          let addcur = selmarket.filter((data) => data != val);
          setSelmarket(addcur);
        } else
          setSelmarket([val]);
      }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selmarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
        val.code,
        " - ",
        val.name
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => {
        setmar(!1);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Other markets" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selorthermarket.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.name} - [${value.code}]` }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setort(!0);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faAdd }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${ort ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: market.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h1", { onClick: () => {
        if (selorthermarket.includes(val)) {
          let addcur = selorthermarket.filter((data) => data != val);
          setSelorthermarket(addcur);
        } else
          setSelorthermarket([...selorthermarket, val]);
      }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selorthermarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
        val.code,
        " - ",
        val.name,
        " "
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => {
        setort(!1);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Category" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.categoryName} - [${value.categoryCode}]` }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setcat(!0);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faAdd }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: category.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h1", { onClick: () => {
        if (selcategory.includes(val)) {
          let addcur = selcategory.filter((data) => data != val);
          setSelcategory(addcur);
        } else
          setSelcategory([...selcategory, val]);
      }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
        val.categoryCode,
        " - ",
        val.categoryName,
        "   "
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => {
        setcat(!1);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Account currency" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcurrency.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: " text-black font-semibold text-center w-32", children: `${value.currencyName} - [${value.currencyCode}]` }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setcur(!0);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faAdd }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cur ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar", children: currency.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h1", { onClick: () => {
        if (selcurrency.includes(val)) {
          let addcur = selcurrency.filter((data) => data != val);
          setSelcurrency(addcur);
        } else
          setSelcurrency([val]);
      }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcurrency.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
        val.currencyCode,
        " - ",
        val.currencyName,
        "  ",
        import_he.default.decode(val.currencyAsciiSymbol),
        " "
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => {
        setcur(!1);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Languages" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: sellanguages.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { className: " text-black font-semibold text-center w-32", children: `${value.languageName} - [${value.languageCode}]` }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
        setlan(!0);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faAdd }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${lan ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "h-80 overflow-y-scroll no-scrollbar", children: languages.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h1", { onClick: () => {
        if (sellanguages.includes(val)) {
          let addcur = sellanguages.filter((data) => data != val);
          setSellanguages(addcur);
        } else
          setSellanguages([...sellanguages, val]);
      }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${sellanguages.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
        val.languageCode,
        " - ",
        val.languageName,
        "  ",
        import_he.default.decode(val.languageAsciiSymbol),
        " "
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => {
        setlan(!1);
      }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
    ] }) }),
    error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: async () => {
      let ids = (myobj) => {
        let res = "";
        for (let i = 0; i < myobj.length; i++)
          i == myobj.length - 1 ? res += myobj[i].id : res += myobj[i].id + ",";
        return res;
      };
      if (selcurrency.length == 0)
        setError("Select the currecny.");
      else if (selcategory.length == 0)
        setError("Select the category.");
      else if (sellanguages.length == 0)
        setError("Select the languages.");
      else if (selmarket.length == 0)
        setError("Select the main market.");
      else if (selorthermarket.length == 0)
        setError("Select the other markder");
      else {
        let req = {
          id: userID,
          currencyId: selcurrency[0].id,
          languages: ids(sellanguages),
          categories: ids(selcategory),
          marketId: selmarket[0].id,
          markets: ids(selorthermarket)
        }, data = await (0, import_axios9.default)({
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
            Accept: "*"
          }
        });
        if (data.data.status == !1)
          return setError(data.data.message);
        setIndex(3), nextButton.current.click();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react20.Form, { method: "post", className: "hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "id", value: userID.toString() }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { ref: nextButton, name: "submit", children: "Submit" })
    ] })
  ] }) }) });
}, secondpage_default = SecondPage, action3 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData), userdata = await (0, import_axios9.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id: value.id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node12.redirect)("/home/profilecomplete/thirdpage", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
};

// app/routes/home/profilecomplete/fifthpage.tsx
var fifthpage_exports = {};
__export(fifthpage_exports, {
  action: () => action4,
  default: () => fifthpage_default,
  loader: () => loader11
});
var import_node13 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_axios10 = __toESM(require("axios")), import_react23 = require("react");
var EmailValidator4 = __toESM(require("email-validator")), import_jsx_runtime39 = require("react/jsx-runtime"), loader11 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node13.json)({ user: cookie.user });
}, ThirdPage = () => {
  let userdata = (0, import_react22.useLoaderData)(), userId = userdata.user.id, brandId = userdata.user.brand.id, [error, setError] = (0, import_react23.useState)(null), [sus, setSus] = (0, import_react23.useState)(null), setIndex = firstinput_default((state) => state.setIndex), nextButton = (0, import_react23.useRef)(null), nameRef = (0, import_react23.useRef)(null), emailRef = (0, import_react23.useRef)(null), [contactnumber, setContactnumber] = (0, import_react23.useState)(), handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  }, [invitedUser, setInvitedUser] = (0, import_react23.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Invite users" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Username" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { ref: nameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { ref: emailRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "contact number" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("button", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
          if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == null || ((_c = nameRef.current) == null ? void 0 : _c.value) == "")
            setError("Enter the user ");
          else if (((_d = emailRef.current) == null ? void 0 : _d.value) == null || ((_e = emailRef.current) == null ? void 0 : _e.value) == null || ((_f = emailRef.current) == null ? void 0 : _f.value) == "")
            setError("Fill the Brand info");
          else if (!EmailValidator4.validate((_g = emailRef.current) == null ? void 0 : _g.value))
            setError("Enter valid email");
          else if (contactnumber == null || contactnumber == null || contactnumber == 0)
            setError("Fill the contact number");
          else if (contactnumber.toString().length != 10)
            setError("Enter a 10 degit valid contact number");
          else {
            let req = {
              userId,
              brandId,
              name: (_h = nameRef.current) == null ? void 0 : _h.value,
              email: (_i = emailRef.current) == null ? void 0 : _i.value,
              contact: contactnumber
            }, data = await (0, import_axios10.default)({
              method: "post",
              url: `${BaseUrl}/api/send-brand-invite`,
              data: req
            });
            if (data.data.status == !1)
              return setError(data.data.message);
            {
              let user = {
                name: (_j = nameRef.current) == null ? void 0 : _j.value,
                email: (_k = emailRef.current) == null ? void 0 : _k.value,
                number: contactnumber.toString()
              };
              return setInvitedUser([...invitedUser, user]), setError(null), setContactnumber(0), nameRef.current.value = "", emailRef.current.value = "", setSus("User invited successfully");
            }
          }
        }, className: "text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg", children: "Invite" })
      ] }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      sus == "" || sus == null || sus == null ? null : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }),
      invitedUser.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "my-4 bg-gray-200 shadow-md rounded-md py-1 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text-slate-900 text-md", children: [
        index2 + 1,
        ": ",
        val.name,
        " - ",
        val.email,
        " "
      ] }) }, index2)),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { onClick: () => {
        invitedUser.length == 0 ? (setSus(null), setError("Invite at least one user")) : (setIndex(5), nextButton.current.click());
      }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react22.Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "hidden", name: "id", value: userId.toString() }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("button", { ref: nextButton, name: "submit", children: "Submit" })
      ] })
    ] }) })
  ] }) });
}, fifthpage_default = ThirdPage, action4 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData), userdata = await (0, import_axios10.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id: value.id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node13.redirect)("/home", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
};

// app/routes/home/profilecomplete/forthpage.tsx
var forthpage_exports = {};
__export(forthpage_exports, {
  action: () => action5,
  default: () => forthpage_default,
  loader: () => loader12
});
var import_free_solid_svg_icons11 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome12 = require("@fortawesome/react-fontawesome"), import_node14 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_axios11 = __toESM(require("axios")), import_react25 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime"), loader12 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), country = await (0, import_axios11.default)({
    method: "post",
    url: `${BaseUrl}/api/getcountry`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return (0, import_node14.json)({ user: cookie.user, country: country.data.data });
}, ForthPage = () => {
  let userdata = (0, import_react24.useLoaderData)(), userId = userdata.user.id, country = userdata.country, gender = ["MALE", "FEMALE", "TRANSGENDER"], isBrand = userdata.user.role.code == "50", [selCountry, setSelCountry] = (0, import_react25.useState)([]), [con, setcon] = (0, import_react25.useState)(!1), [selGender, setSelGender] = (0, import_react25.useState)([]), [gen, setgen] = (0, import_react25.useState)(!1), [error, setError] = (0, import_react25.useState)(""), [cityerror, setCityerror] = (0, import_react25.useState)(null), [citybox, setCitybox] = (0, import_react25.useState)(!1), [searchcity, setSearchcity] = (0, import_react25.useState)([]), [selectedcity, setSelectedctiy] = (0, import_react25.useState)(null), [contactnumber, setContactnumber] = (0, import_react25.useState)(), handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  }, cityref = (0, import_react25.useRef)(null), getCity = async (city) => {
    let data = await import_axios11.default.post(`${BaseUrl}/api/get-city`, { search: city });
    setSearchcity(data.data.data);
  }, setIndex = firstinput_default((state) => state.setIndex), navigate = (0, import_react24.useNavigate)(), [check, setCheck] = (0, import_react25.useState)(!1), handleOnChange = () => {
    setCheck(!check);
  }, nextButton = (0, import_react25.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4", children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "min-h-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: "No city found with this name" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", onClick: () => {
        setCitybox(!1);
      }, children: "Close" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "h-72 overflow-y-scroll no-scrollbar", children: searchcity.map((value, index2) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_jsx_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { onClick: () => {
      setSelectedctiy(value), setCitybox(!1), cityref.current.value = "";
    }, className: "my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500", children: [
      value.name,
      " - ",
      value.code
    ] }, index2) })) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Country" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.name} - [${value.code}]` }) }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
          setcon(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: country.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("h1", { onClick: () => {
          if (selCountry.includes(val)) {
            let addcur = selCountry.filter((data) => data != val);
            setSelCountry(addcur);
          } else
            setSelCountry([val]);
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
          val.code,
          " - ",
          val.name
        ] }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { onClick: () => {
          setcon(!1);
        }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Gender" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selGender.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: value }) }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
          setgen(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${gen ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-white p-10 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: gender.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { onClick: () => {
          if (selGender.includes(val)) {
            let addcur = selGender.filter((data) => data != val);
            setSelGender(addcur);
          } else
            setSelGender([val]);
        }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selGender.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: val }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { onClick: () => {
          setgen(!1);
        }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "City" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "w-full bg-[#EEEEEE] rounded-md flex p-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grow", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { ref: cityref, className: "h-full w-full outline-none focus:border-gray-300 bg-transparent" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer", onClick: () => {
          var _a, _b, _c, _d;
          ((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == null || ((_c = cityref.current) == null ? void 0 : _c.value) == "" ? setCityerror("Enter the city name") : (setCitybox(!0), setCityerror(null), getCity(((_d = cityref.current) == null ? void 0 : _d.value) ?? ""));
        }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faChevronRight }) })
      ] }),
      cityerror == "" || cityerror == null || cityerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }),
      selectedcity == "" || selectedcity == null || selectedcity == null ? null : /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
        selectedcity.name,
        " - ",
        selectedcity.code
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Phone number" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity.country.isd }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "input",
          {
            checked: check,
            onChange: handleOnChange,
            type: "checkbox",
            name: "check2"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-left text-[10px] text-black font-normal", children: "The above details are true and correct" })
      ] }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "w-full", onClick: async () => {
        if (selCountry.length == 0)
          setError("Select the country");
        else if (gender.length == 0)
          setError("Select your gender");
        else if (selectedcity == null || selCountry == null)
          setError("Select the city");
        else if (contactnumber == null || contactnumber == null || contactnumber == 0)
          setError("Fill the contact number");
        else if (contactnumber.toString().length != 10)
          setError("Enter a 10 degit valid contact number");
        else if (!check)
          setError("Check the box in order to procide");
        else {
          let req = {
            id: userId,
            cityId: selectedcity.id,
            userContact: contactnumber,
            userGender: selGender[0] == "MALE" ? "1" : selGender[0] == "FEMALE" ? "2" : "3"
          }, data = await (0, import_axios11.default)({
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
              Accept: "*"
            }
          });
          if (data.data.status == !1)
            return setError(data.data.message);
          setIndex(4), nextButton.current.click();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react24.Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "id", value: userId.toString() }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "address", value: isBrand ? "/home/profilecomplete/fifthpage" : "/home" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { ref: nextButton, name: "submit", children: "Submit" })
      ] })
    ] }) }) })
  ] });
}, forthpage_default = ForthPage, action5 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData), userdata = await (0, import_axios11.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id: value.id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node14.redirect)(value.address.toString(), {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
};

// app/routes/home/profilecomplete/thirdpage.tsx
var thirdpage_exports = {};
__export(thirdpage_exports, {
  action: () => action6,
  default: () => thirdpage_default,
  loader: () => loader13
});
var import_node15 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_axios12 = __toESM(require("axios")), import_react27 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime"), loader13 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), paltform = await (0, import_axios12.default)({
    method: "post",
    url: `${BaseUrl}/api/getplatform`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return (0, import_node15.json)({ user: cookie.user, paltform: paltform.data.data });
}, ThirdPage2 = () => {
  let userdata = (0, import_react26.useLoaderData)(), userId = userdata.user.id, platform = userdata.paltform, [selPlatform, setSelPlatfome] = (0, import_react27.useState)([]), [addedPlatfrom, setAddPlatform] = (0, import_react27.useState)([]), [error, setError] = (0, import_react27.useState)(null), [sus, setSus] = (0, import_react27.useState)(null), setIndex = firstinput_default((state) => state.setIndex), nextButton = (0, import_react27.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_jsx_runtime41.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Channels" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex content-center items-center gap-2 flex-col md:flex-row mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: platform.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: `w-12 h-12 p-2 rounded-lg ${selPlatform.includes(val) ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
        setSelPlatfome([val]);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("img", { src: platform[i].platformLogoUrl, alt: "error", className: "w-10" }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "grow hidden md:block" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { onClick: () => {
        setAddPlatform([...addedPlatfrom, { val: selPlatform[0], status: !1, text: "" }]), setSelPlatfome([]);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CusButton, { text: "Add new Channel", textColor: "text-white", width: "w-36", background: "bg-primary", fontwidth: "font-normal", textSize: "text-md" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { children: addedPlatfrom.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2 flex ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("img", { src: `${val.val.platformLogoUrl}`, alt: "logo", className: "w-10" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { disabled: val.status, type: "text", value: val.text, onChange: (e) => {
          let adddata = addedPlatfrom.filter((data) => data != val);
          setAddPlatform([...adddata, { val: val.val, status: !1, text: e.target.value }]);
        }, className: "mx-3 bg-transparent  outline-none border-none focus:border-gray-300 rounded-md w-full" }),
        val.status ? null : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "text-white bg-green-500 font-medium text-md text-center rounded-md grid place-items-center px-4 cursor-pointer", onClick: async () => {
          if (val.text == null || val.text == null || val.text == "")
            setSus(null), setError("Fill the handle name");
          else if (val.text.indexOf(" ") >= 0)
            setSus(null), setError("Hashtag cannot containt space");
          else {
            let req = {
              userId,
              platformId: val.val.id,
              handleName: val.text
            }, data = await (0, import_axios12.default)({
              method: "post",
              url: `${BaseUrl}/api/add-handle`,
              data: req,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Options": "*",
                "Access-Control-Allow-Methods": "*",
                "X-Content-Type-Options": "*",
                "Content-Type": "application/json",
                Accept: "*"
              }
            });
            if (data.data.status == !1)
              return setSus(null), setError(data.data.message);
            {
              setError(null), setSus("Successfully added the user handel");
              let adddata = addedPlatfrom.filter((data2) => data2 != val);
              setAddPlatform([...adddata, { val: val.val, status: !0, text: val.text }]);
            }
          }
        }, children: "Done" })
      ] }, index2)) }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      sus == "" || sus == null || sus == null ? null : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { onClick: () => {
        addedPlatfrom.length == 0 ? (setSus(null), setError("Add at least one handel")) : addedPlatfrom[0].status ? (setIndex(4), nextButton.current.click()) : (setSus(null), setError("Add at least one handel"));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_react26.Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "id", value: userId.toString() }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { ref: nextButton, name: "submit", children: "Submit" })
      ] })
    ] }) })
  ] }) });
}, thirdpage_default = ThirdPage2, action6 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData), userdata = await (0, import_axios12.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id: value.id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node15.redirect)("/home/profilecomplete/forthpage", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
};

// app/routes/home/profilecomplete/index.tsx
var profilecomplete_exports2 = {};
__export(profilecomplete_exports2, {
  action: () => action7,
  default: () => profilecomplete_default2,
  loader: () => loader14
});
var import_node16 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), import_react29 = require("react");
var import_axios13 = __toESM(require("axios")), import_jsx_runtime42 = require("react/jsx-runtime"), loader14 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node16.json)({ user: cookie.user });
}, UserInputBoxOne = () => {
  let user = (0, import_react28.useLoaderData)(), useremail = user.user.email, userID = user.user.id, setIndex = firstinput_default((state) => state.setIndex), navigator = (0, import_react28.useNavigate)(), [img, setImg] = (0, import_react29.useState)(null), imgref = (0, import_react29.useRef)(null), [imgerror, setImgerror] = (0, import_react29.useState)(null), [error, setError] = (0, import_react29.useState)(null), emailRef = (0, import_react29.useRef)(null), usernameRef = (0, import_react29.useRef)(null), nicknameRef = (0, import_react29.useRef)(null), datepicker = (0, import_react29.useRef)(null), bioRef = (0, import_react29.useRef)(null);
  (0, import_react29.useEffect)(() => {
    emailRef.current.value = useremail, usernameRef.current.value = useremail;
  }, []);
  let nextButton = (0, import_react29.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_jsx_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "p-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Tell us about yourself" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex w-full md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
          parseInt((value.target.files[0].size / 1024 / 1024).toString()) < 4 ? (setImgerror(null), setImg(value.target.files[0])) : setImgerror("Image file size must be less then 4 mb");
        } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "grow sm:w-full", children: img == null ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: "/images/icons/gallery.png", alt: "error", className: "w-40 sm:w-full object-cover inline-block" }) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: URL.createObjectURL(img), alt: "error", className: "w-40 sm:w-full inline-block object-cover rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "w-52 sm:w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "mt-4", children: "Drop profile photo here." }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 5 MB" }),
            imgerror == "" || imgerror == null || imgerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { onClick: () => {
              var _a;
              (_a = imgref.current) == null || _a.click();
            }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { ref: emailRef, disabled: !0, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Username" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { ref: usernameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Nickname" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { ref: nicknameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Date of birth" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { type: "date", ref: datepicker, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Bio" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("textarea", { ref: bioRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
        error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { onClick: async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
          if (img == null)
            setError("Please select the image");
          else if (((_a = emailRef.current) == null ? void 0 : _a.value) == null || ((_b = emailRef.current) == null ? void 0 : _b.value) == null || ((_c = emailRef.current) == null ? void 0 : _c.value) == "")
            setError("Enter the email");
          else if (((_d = usernameRef.current) == null ? void 0 : _d.value) == null || ((_e = usernameRef.current) == null ? void 0 : _e.value) == null || ((_f = usernameRef.current) == null ? void 0 : _f.value) == "")
            setError("Enter the username");
          else if (((_g = nicknameRef.current) == null ? void 0 : _g.value) == null || ((_h = nicknameRef.current) == null ? void 0 : _h.value) == null || ((_i = nicknameRef.current) == null ? void 0 : _i.value) == "")
            setError("Enter the nickname");
          else if (((_j = datepicker.current) == null ? void 0 : _j.value) == null || ((_k = datepicker.current) == null ? void 0 : _k.value) == null || ((_l = datepicker.current) == null ? void 0 : _l.value) == "")
            setError("Enter the date of birth");
          else if (((_m = bioRef.current) == null ? void 0 : _m.value) == null || ((_n = bioRef.current) == null ? void 0 : _n.value) == null || ((_o = bioRef.current) == null ? void 0 : _o.value) == "")
            setError("Enter the bio");
          else {
            let avatar = await UploadFile(img), req = {
              id: userID,
              userName: (_p = usernameRef.current) == null ? void 0 : _p.value,
              userKnownAs: (_q = nicknameRef.current) == null ? void 0 : _q.value,
              userBioInfo: (_r = bioRef.current) == null ? void 0 : _r.value,
              userDOB: (_s = datepicker.current) == null ? void 0 : _s.value,
              userPicUrl: avatar
            }, data = await (0, import_axios13.default)({
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
                Accept: "*"
              }
            });
            if (data.data.status == !1)
              return setError(data.data.message);
            setIndex(2), nextButton.current.click();
          }
        }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react28.Form, { method: "post", className: "hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { type: "hidden", name: "id", value: userID.toString() }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { ref: nextButton, name: "submit", children: "Submit" })
        ] })
      ] })
    ] })
  ] }) });
}, profilecomplete_default2 = UserInputBoxOne, action7 = async ({ request }) => {
  let formData = await request.formData(), value = Object.fromEntries(formData), userdata = await (0, import_axios13.default)({
    method: "post",
    url: `${BaseUrl}/api/getuser`,
    data: { id: value.id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return userdata.data.status == !1 ? { message: userdata.data.message } : (0, import_node16.redirect)("/home/profilecomplete/secondpage", {
    headers: {
      "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: !0 })
    }
  });
};

// app/routes/home/createcampaign.tsx
var createcampaign_exports = {};
__export(createcampaign_exports, {
  default: () => createcampaign_default
});
var import_react30 = require("@remix-run/react"), import_jsx_runtime43 = require("react/jsx-runtime"), createCampaing = () => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react30.Outlet, {}) }), createcampaign_default = createCampaing;

// app/routes/home/createcampaign/index.tsx
var createcampaign_exports2 = {};
__export(createcampaign_exports2, {
  default: () => createcampaign_default3,
  loader: () => loader15
});
var import_free_solid_svg_icons12 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome13 = require("@fortawesome/react-fontawesome"), import_node17 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_axios14 = __toESM(require("axios")), import_react32 = require("react");

// app/state/campaign/createcampaign.ts
var import_zustand7 = require("zustand"), CreateCampaignStore = (0, import_zustand7.create)()((set) => ({
  campaignTypeId: "0",
  setCampaignTypeId: (value) => set((state) => ({ campaignTypeId: value })),
  platform: [],
  setPlatform: (value) => set((state) => state.platform.includes(value) ? { platform: [...state.platform.filter((val) => val != value)] } : { platform: [...state.platform, value] }),
  media: "",
  setMedia: (value) => set((state) => ({ media: value })),
  campaignInfo: "",
  setCampaignInfo: (value) => set((state) => ({ campaignInfo: value })),
  approval: !1,
  setApproval: (value) => set((state) => ({ approval: value })),
  discoutCoupon: "",
  setDiscoutCoupon: (value) => set((state) => ({ discoutCoupon: value })),
  affiliatedLinks: "",
  setAffiliatedLinks: (value) => set((state) => ({ affiliatedLinks: value })),
  target: 0,
  setTarget: (value) => set((state) => ({ target: value })),
  minTarget: 0,
  setMinTarget: (value) => set((state) => ({ minTarget: value })),
  rating: 0,
  setRating: (value) => set((state) => ({ rating: value })),
  mendtion: [],
  addMendtion: (value) => set((state) => ({ mendtion: [...state.mendtion, value] })),
  removeMeddtion: (value) => set((state) => ({ mendtion: state.mendtion.filter((value1) => value1 != value) })),
  clearMendtion: () => set((state) => ({ mendtion: [] })),
  hashtag: [],
  addHashtag: (value) => set((state) => ({ hashtag: [...state.hashtag, value] })),
  removeHashtag: (value) => set((state) => ({ hashtag: state.hashtag.filter((value1) => value1 != value) })),
  clearHashtag: () => set((state) => ({ hashtag: [] })),
  dos: [],
  addDos: (value) => set((state) => ({ dos: [...state.dos, value] })),
  removeDos: (value) => set((state) => ({ dos: state.dos.filter((value1) => value1 != value) })),
  donts: [],
  addDonts: (value) => set((state) => ({ donts: [...state.donts, value] })),
  removeDonts: (value) => set((state) => ({ donts: state.donts.filter((value1) => value1 != value) })),
  pdffile: [],
  addPdfFile: (value) => set((state) => ({ pdffile: [value] })),
  infLocation: {
    id: "",
    categoryCode: "",
    categoryName: ""
  },
  setInfLocation: (id, name, type) => set((state) => ({ infLocation: { id, categoryCode: type, categoryName: name } })),
  audience: [],
  addAudience: (value) => set((state) => ({ audience: [...state.audience, value] })),
  removeAudience: (value) => set((state) => ({ audience: state.audience.filter((value1) => value1 != value) })),
  clearAudience: () => set((state) => ({ audience: [] })),
  tilldate: "",
  setTillDate: (value) => set((state) => ({ tilldate: value })),
  maxInf: 0,
  setMaxInf: (value) => set((state) => ({ maxInf: value })),
  remuneration: "",
  setRemuneration: (value) => set((state) => ({ remuneration: value })),
  remunerationType: "",
  setRemunerationType: (value) => set((state) => ({ remunerationType: value })),
  campaignName: "",
  setCampaignName: (value) => set((state) => ({ campaignName: value })),
  planedBudget: 0,
  setPlanedBudget: (value) => set((state) => ({ planedBudget: value })),
  costPerPost: 0,
  setCostPerPost: (value) => set((state) => ({ costPerPost: value })),
  startDate: "",
  setStartDate: (value) => set((state) => ({ startDate: value })),
  endDate: "",
  setEndDate: (value) => set((state) => ({ endDate: value })),
  minReach: 0,
  setMinReach: (value) => set((state) => ({ minReach: value })),
  maxReact: 0,
  setMaxReact: (value) => set((state) => ({ maxReact: value })),
  publicGlobally: !1,
  setPublicGlobally: (value) => set((state) => ({ publicGlobally: value })),
  image: [],
  addImage: (value) => set((state) => ({ image: [...state.image, value] })),
  removeImage: (value) => set((state) => ({ image: state.image.filter((value1) => value1 != value) })),
  brandinfo: "",
  setBrandinfo: (value) => set((state) => ({ brandinfo: value })),
  campaginPurpose: "",
  setCampaginPurpose: (value) => set((state) => ({ campaginPurpose: value })),
  campaign: {},
  addProperty: (value) => set((state) => ({ campaign: { value } }))
})), createcampaign_default2 = CreateCampaignStore;

// app/routes/home/createcampaign/index.tsx
var import_jsx_runtime44 = require("react/jsx-runtime"), loader15 = async () => {
  let data = await import_axios14.default.post(`${BaseUrl}/api/get-campaign-type`);
  return (0, import_node17.json)({ data: data.data.data });
}, Step1 = () => {
  let navigate = (0, import_react31.useNavigate)(), [error, setError] = (0, import_react32.useState)(!1), catdata = (0, import_react31.useLoaderData)().data, campaginType = createcampaign_default2((state) => state.campaignTypeId), setCampaginType = createcampaign_default2((state) => state.setCampaignTypeId), [camptype, setCamptype] = (0, import_react32.useState)("0"), platform = createcampaign_default2((state) => state.platform), setPlatform = createcampaign_default2((state) => state.setPlatform), nextpage = () => {
    if (camptype === "0")
      setError(!0);
    else
      return setCampaginType(camptype), navigate("/home/createcampaign/step2");
  };
  return (0, import_react32.useEffect)(() => {
    setCamptype(campaginType);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    error ? /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "bg-red-500 bg-opacity-10 p-2 border-red-500 border rounded-xl flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_fontawesome13.FontAwesomeIcon, { className: "text-red-500", icon: import_free_solid_svg_icons12.faInfoCircle }) }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-red-500 text-lg font-normal text-center", children: "Please select at least one category." })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-black font-normal text-lg text-center", children: "Select one below" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { onClick: () => nextpage(), children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-4", children: catdata.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: `shadow-xl rounded-xl w-72 bg-white my-4 ${camptype == catdata[i].id ? "border-2 border-gray-400" : ""} h-[350px]`, onClick: () => setCamptype(catdata[i].id), children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("img", { src: catdata[i].categoryPicUrl, alt: "error", className: "rounded-t-xl w-full h-40" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-black text-left font-medium text-lg", children: catdata[i].categoryName }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-sm text-gray-400 font-normal text-left", children: catdata[i].categoryDescription })
      ] })
    ] }, i)) })
  ] }) });
}, createcampaign_default3 = Step1;

// app/routes/home/createcampaign/step2.tsx
var step2_exports = {};
__export(step2_exports, {
  default: () => step2_default,
  loader: () => loader16
});
var import_free_solid_svg_icons13 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome14 = require("@fortawesome/react-fontawesome"), import_node18 = require("@remix-run/node"), import_react33 = require("@remix-run/react"), import_axios15 = __toESM(require("axios"));
var import_react34 = require("react"), import_react_simple_star_rating = require("react-simple-star-rating"), import_jsx_runtime45 = require("react/jsx-runtime"), loader16 = async () => {
  let platform = await import_axios15.default.post(`${BaseUrl}/api/getplatform`);
  return (0, import_node18.json)({ platform: platform.data.data });
}, Step2 = () => {
  let mediatype = ["Post", "Story", "Reel", "Video", "Audio"], data = (0, import_react33.useLoaderData)(), navigator = (0, import_react33.useNavigate)(), campaginType = createcampaign_default2((state) => state.campaignTypeId), [error, setError] = (0, import_react34.useState)(null), mendtionText = (0, import_react34.useRef)(null), [menerror, setMenError] = (0, import_react34.useState)(null), [addmendtion, setAddMendtion] = (0, import_react34.useState)(!1), mendtion = createcampaign_default2((state) => state.mendtion), removeMendtion = createcampaign_default2((state) => state.removeMeddtion), clearMendtion = createcampaign_default2((state) => state.clearMendtion), addMendtion = createcampaign_default2((state) => state.addMendtion), hashtagText = (0, import_react34.useRef)(null), [hasherror, setHashError] = (0, import_react34.useState)(null), [addhashtag, setAddHashtag] = (0, import_react34.useState)(!1), hashtag = createcampaign_default2((state) => state.hashtag), removeHashtag = createcampaign_default2((state) => state.removeHashtag), clearHashtag = createcampaign_default2((state) => state.clearHashtag), addHashtag = createcampaign_default2((state) => state.addHashtag), dosText = (0, import_react34.useRef)(null), [doserror, setDosError] = (0, import_react34.useState)(null), [adddos, setAddDos] = (0, import_react34.useState)(!1), dos = createcampaign_default2((state) => state.dos), removeDos = createcampaign_default2((state) => state.removeDos), addDos = createcampaign_default2((state) => state.addDos), dontsText = (0, import_react34.useRef)(null), [dontserror, setDontsError] = (0, import_react34.useState)(null), [adddonts, setAddDonts] = (0, import_react34.useState)(!1), donts = createcampaign_default2((state) => state.donts), removeDonts = createcampaign_default2((state) => state.removeDonts), addDonts = createcampaign_default2((state) => state.addDonts), inputFile = (0, import_react34.useRef)(null), [pdferror, setPdferror] = (0, import_react34.useState)(null), pdfFile = createcampaign_default2((state) => state.pdffile), addPdfFile = createcampaign_default2((state) => state.addPdfFile), platform = createcampaign_default2((state) => state.platform), setPlatform = createcampaign_default2((state) => state.setPlatform), media = createcampaign_default2((state) => state.media), setMedia = createcampaign_default2((state) => state.setMedia), campinfo = (0, import_react34.useRef)(null), campaignInfo = createcampaign_default2((state) => state.campaignInfo), setCampaignInfo = createcampaign_default2((state) => state.setCampaignInfo), affLink = (0, import_react34.useRef)(null), affiliatedLinks = createcampaign_default2((state) => state.affiliatedLinks), setAffiliatedLinks = createcampaign_default2((state) => state.setAffiliatedLinks), discCopon = (0, import_react34.useRef)(null), discoutCoupon = createcampaign_default2((state) => state.discoutCoupon), setDiscoutCoupon = createcampaign_default2((state) => state.setDiscoutCoupon), tar = (0, import_react34.useRef)(null), target = createcampaign_default2((state) => state.target), setTarget = createcampaign_default2((state) => state.setTarget), mintar = (0, import_react34.useRef)(null), mintarget = createcampaign_default2((state) => state.minTarget), setMintarget = createcampaign_default2((state) => state.setMinTarget), [rating, setRating] = (0, import_react34.useState)(0), getrating = createcampaign_default2((state) => state.rating), setrating = createcampaign_default2((state) => state.setRating), handleRating = (rate) => {
    setRating(rate);
  }, [approval, setApproval] = (0, import_react34.useState)(null), getapproval = createcampaign_default2((state) => state.approval), setapproval = createcampaign_default2((state) => state.setApproval);
  return (0, import_react34.useEffect)(() => {
    var _a, _b, _c, _d;
    campinfo.current.value = campaignInfo, setApproval(getapproval), setRating(getrating), ((_a = affLink.current) == null ? void 0 : _a.value) != null && (affLink.current.value = affiliatedLinks), ((_b = discCopon.current) == null ? void 0 : _b.value) != null && (discCopon.current.value = discoutCoupon), ((_c = tar.current) == null ? void 0 : _c.value) != null && (tar.current.value = target.toString()), ((_d = mintar.current) == null ? void 0 : _d.value) != null && (mintar.current.value = mintarget.toString());
  }, []), /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-black tect-xl font-medium text-left", children: campaginType == "1" ? "Sponsored post" : campaginType == "2" ? "Review post" : campaginType == "3" ? "Discount and Affiliated post" : "Contest post" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: data.platform.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: ` p-2 rounded-lg ${platform.includes(val.id) ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
      setPlatform(val.id);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { src: data.platform[i].platformLogoUrl, alt: "error", className: "w-10 h-10" }) }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4", children: mediatype.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: `cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"}`, onClick: () => {
      setMedia(val);
    }, children: val }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mentions" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: mendtion.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: " text-black font-semibold ", children: `@${value}` }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeMendtion(value), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleXmark, className: "text-lg font-bold text-red-500" }) })
        ] }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddMendtion(!0), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearMendtion, children: "clear all" }) })
    ] }),
    addmendtion ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: mendtionText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Mention" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
        mendtionText.current.value == "" || mendtionText.current.value == null || mendtionText.current.value == null ? setMenError("Mention can't be empty!") : mendtion.includes(mendtionText.current.value) ? setMenError("Mention already exist add a diffrent one") : mendtionText.current.value.indexOf(" ") >= 0 ? setMenError("Mention cannot containt space") : (addMendtion(mendtionText.current.value), mendtionText.current.value = "", setAddMendtion(!1), setMenError(null));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }) })
    ] }) : null,
    menerror == "" || menerror == null || menerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: menerror }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Hashtag" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: hashtag.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: " text-black font-semibold ", children: `#${value}` }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeHashtag(value), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleXmark, className: "text-lg font-bold text-red-500" }) })
        ] }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddHashtag(!0), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearHashtag, children: "clear all" }) })
    ] }),
    addhashtag ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: hashtagText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Hashtag" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
        hashtagText.current.value == "" || hashtagText.current.value == null || hashtagText.current.value == null ? setHashError("Hashtag can't be empty!") : hashtag.includes(hashtagText.current.value) ? setHashError("Hashtag already exist add a diffrent one") : hashtagText.current.value.indexOf(" ") >= 0 ? setHashError("Hashtag cannot containt space") : (addHashtag(hashtagText.current.value), hashtagText.current.value = "", setAddHashtag(!1), setHashError(null));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }) })
    ] }) : null,
    hasherror == "" || hasherror == null || hasherror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: hasherror }),
    campaginType == "2" ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Minimum rating required" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-60", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        import_react_simple_star_rating.Rating,
        {
          initialValue: rating,
          onClick: handleRating
        }
      ) })
    ] }) : null,
    campaginType == "3" ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Affiliated links (optional)" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: affLink, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Discount coupons" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: discCopon, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
    ] }) : null,
    campaginType == "4" ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Target" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: tar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min target" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: mintar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" })
      ] })
    ] }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign info" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("textarea", { ref: campinfo, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Optional attachments" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h3", { className: "text-black font-semibold  text-md", children: pdfFile.length == 0 ? "" : pdfFile[0].name }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", onClick: () => {
        inputFile.current.click();
      }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faPaperclip }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: inputFile, type: "file", accept: "application/pdf", onChange: (value) => {
      parseInt((value.target.files[0].size / 1024 / 1024).toString()) < 4 ? (setPdferror(null), addPdfFile(value.target.files[0])) : setPdferror("Pdf file size must be less then 4 mb");
    } }) }),
    pdferror == "" || pdferror == null || pdferror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: pdferror }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCheck }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDos(!0), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faAdd }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: dos.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
          value,
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow", children: " " }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDos(value), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleXmark, className: "text-lg font-bold text-red-500" }) })
        ] }) }, i)) }),
        adddos ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mt-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: dosText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Do's" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
            dosText.current.value == "" || dosText.current.value == null || dosText.current.value == null ? setDosError("Dos can't be empty!") : dos.includes(dosText.current.value) ? setDosError("Dos already exist add a diffrent one") : (addDos(dosText.current.value), dosText.current.value = "", setAddDos(!1), setDosError(null));
          }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }) })
        ] }) : null,
        doserror == "" || doserror == null || doserror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: doserror })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faRemove }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDonts(!0), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faAdd }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: donts.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
          value,
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow", children: " " }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDonts(value), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleXmark, className: "text-lg font-bold text-red-500" }) })
        ] }) }, i)) }),
        adddonts ? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mt-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { ref: dontsText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Dont's" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
            dontsText.current.value == "" || dontsText.current.value == null || dontsText.current.value == null ? setDontsError("Donts can't be empty!") : donts.includes(dontsText.current.value) ? setDontsError("Donts already exist add a diffrent one") : (addDonts(dontsText.current.value), dontsText.current.value = "", setAddDonts(!1), setDontsError(null));
          }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }) })
        ] }) : null,
        dontserror == "" || dontserror == null || dontserror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: dontserror })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex flex-col lg:flex-row items-center mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Does the influencer need to seek an approval of the post before posting" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
          setApproval(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "Yes", textColor: approval ? "text-white" : "text-primary", background: approval ? "bg-primary" : "bg-gray-100", width: "w-20" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
          setApproval(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "No", textColor: approval == !1 ? "text-white" : "text-primary", background: approval == !1 ? "bg-primary" : "bg-gray-100", width: "w-20" }) })
      ] })
    ] }),
    error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { onClick: () => {
        navigator(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-full", onClick: () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
        platform == null || platform.length == 0 || platform == null ? setError("Select a platform") : media == null || media == "" || media == null ? setError("Select a media") : mendtion.length == 0 ? setError("please add at least one mendtion") : hashtag.length == 0 ? setError("please add at least one hashtag") : ((_a = campinfo.current) == null ? void 0 : _a.value) == null || ((_b = campinfo.current) == null ? void 0 : _b.value) == null || ((_c = campinfo.current) == null ? void 0 : _c.value) == "" ? setError("Add campaign info") : dos.length == 0 ? setError("please add at least one dos") : donts.length == 0 ? setError("please add at least one don't") : pdfFile.length == 0 ? setError("please add your attachment") : approval == null ? setError("Dose influencer need to seek an approval of the post before posting?") : (setCampaignInfo((_d = campinfo.current) == null ? void 0 : _d.value), setapproval(approval), campaginType == "2" ? rating == 0 ? setError("Seleect minimun rating") : (setrating(rating), navigator("/home/createcampaign/step3")) : campaginType == "3" ? ((_e = discCopon.current) == null ? void 0 : _e.value) == null || ((_f = discCopon.current) == null ? void 0 : _f.value) == null || ((_g = discCopon.current) == null ? void 0 : _g.value) == "" ? setError("Add Discount coupons") : (setDiscoutCoupon((_h = discCopon.current) == null ? void 0 : _h.value), setAffiliatedLinks(((_i = affLink.current) == null ? void 0 : _i.value) ?? ""), navigator("/home/createcampaign/step3")) : campaginType == "4" ? ((_j = tar.current) == null ? void 0 : _j.value) == null || ((_k = tar.current) == null ? void 0 : _k.value) == null || parseInt((_l = tar.current) == null ? void 0 : _l.value) == 0 || ((_m = tar.current) == null ? void 0 : _m.value) == "" ? setError("Enter target") : ((_n = mintar.current) == null ? void 0 : _n.value) == null || ((_o = mintar.current) == null ? void 0 : _o.value) == null || parseInt((_p = mintar.current) == null ? void 0 : _p.value) == 0 || ((_q = mintar.current) == null ? void 0 : _q.value) == "" ? setError("Enter min target") : parseInt((_r = mintar.current) == null ? void 0 : _r.value) > parseInt((_s = tar.current) == null ? void 0 : _s.value) ? setError("Target must be gretter then min target.") : (setMintarget(parseInt((_t = mintar.current) == null ? void 0 : _t.value)), setTarget(parseInt((_u = tar.current) == null ? void 0 : _u.value)), navigator("/home/createcampaign/step3")) : navigator("/home/createcampaign/step3"));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }) })
    ] })
  ] }) });
}, step2_default = Step2;

// app/routes/home/createcampaign/step3.tsx
var step3_exports = {};
__export(step3_exports, {
  default: () => step3_default,
  loader: () => loader17
});
var import_free_solid_svg_icons14 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome15 = require("@fortawesome/react-fontawesome"), import_node19 = require("@remix-run/node"), import_react35 = require("@remix-run/react"), import_axios16 = __toESM(require("axios")), import_react36 = require("react");
var import_jsx_runtime46 = require("react/jsx-runtime"), loader17 = async () => {
  let data = await import_axios16.default.post(`${BaseUrl}/api/getcategory`);
  return (0, import_node19.json)({ data: data.data.data });
}, Step3 = () => {
  let navigator = (0, import_react35.useNavigate)(), data = (0, import_react35.useLoaderData)(), [error, setError] = (0, import_react36.useState)(null), audienceText = (0, import_react36.useRef)(null), [auderror, setAudError] = (0, import_react36.useState)(null), [addaudience, setAddAudience] = (0, import_react36.useState)(!1), audience = createcampaign_default2((state) => state.audience), removeAudience = createcampaign_default2((state) => state.removeAudience), clearAudience = createcampaign_default2((state) => state.clearAudience), addAudience = createcampaign_default2((state) => state.addAudience), infLocation = createcampaign_default2((state) => state.infLocation), setInfLocation = createcampaign_default2((state) => state.setInfLocation), datepicker = (0, import_react36.useRef)(null), tilldate = createcampaign_default2((state) => state.tilldate), setTillDate = createcampaign_default2((state) => state.setTillDate), maxInf = (0, import_react36.useRef)(null), maxinf = createcampaign_default2((state) => state.maxInf), setMaxInf = createcampaign_default2((state) => state.setMaxInf), remuneration = (0, import_react36.useRef)(null), Remuneration = createcampaign_default2((state) => state.remuneration), setRemuneration = createcampaign_default2((state) => state.setRemuneration), remunerationType = createcampaign_default2((state) => state.remunerationType), setRemunerationType = createcampaign_default2((state) => state.setRemunerationType);
  return (0, import_react36.useEffect)(() => {
    var _a, _b, _c;
    ((_a = datepicker.current) == null ? void 0 : _a.value) != null && (datepicker.current.value = tilldate), ((_b = maxInf.current) == null ? void 0 : _b.value) != null && (maxInf.current.value = maxinf.toString()), ((_c = remuneration.current) == null ? void 0 : _c.value) != null && (remuneration.current.value = Remuneration);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-black tect-xl font-medium text-left", children: "Audience & demeography" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Audience location" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: audience.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: " text-black font-semibold ", children: `@${value}` }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeAudience(value), children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome15.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faCircleXmark, className: "text-lg font-bold text-red-500" }) })
        ] }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddAudience(!0), children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome15.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faAdd }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearAudience, children: "clear all" }) })
    ] }),
    addaudience ? /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: audienceText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Audience" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { onClick: () => {
        audienceText.current.value == "" || audienceText.current.value == null || audienceText.current.value == null ? setAudError("Mendtion can't be empty!") : audience.includes(audienceText.current.value) ? setAudError("Mendtion already exist add a diffrent one") : audienceText.current.value.indexOf(" ") >= 0 ? setAudError("Mendtion cannot containt space") : (addAudience(audienceText.current.value), audienceText.current.value = "", setAddAudience(!1), setAudError(null));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }) })
    ] }) : null,
    auderror == "" || auderror == null || auderror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: auderror }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Influencer category" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("select", { className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6", onClick: (value) => {
      let setdata = (value.target.value + "").split(" ");
      setInfLocation(setdata[0], setdata[1], setdata[2]);
    }, children: data.data.map((value, i) => value.id == infLocation.id ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: `${value.id} ${value.categoryName} ${value.categoryCode}`, className: "border-none outline-none font-normal text-lg", selected: !0, children: `${value.categoryName} [${value.categoryCode}]` }, i) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: `${value.id} ${value.categoryName} ${value.categoryCode}`, className: "border-none outline-none font-normal text-lg", children: `${value.categoryName} [${value.categoryCode}]` }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Maximum no of influencers that can join the campaign" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: maxInf, type: "number", className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full h-96", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("img", { src: "https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg", alt: "error", className: "object-cover h-96 w-full rounded-xl" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Accept participation / invite till" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { type: "date", ref: datepicker, className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Remuneration" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("select", { className: "w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6", onChange: (value) => {
      setRemunerationType(value.target.value);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "1", className: "border-none outline-none font-normal text-lg", children: "Cash" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "2", className: "border-none outline-none font-normal text-lg", children: "Product" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "3", className: "border-none outline-none font-normal text-lg", children: "Revenue" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "4", className: "border-none outline-none font-normal text-lg", children: "Discount" })
    ] }),
    remunerationType == "1" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "usd" }) : null,
    remunerationType == "2" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "Product details" }) : null,
    remunerationType == "3" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "% per sale" }) : null,
    remunerationType == "4" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("input", { ref: remuneration, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2", placeholder: "Coupons" }) : null,
    error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { onClick: () => {
        navigator(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "w-full", onClick: () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        audience.length == 0 ? setError("Add Audience Location") : infLocation.id == null || infLocation.id == null || infLocation.id == "" ? setError("Select Influencer category") : ((_a = maxInf.current) == null ? void 0 : _a.value) == null || maxInf.current.value == null || ((_b = maxInf.current) == null ? void 0 : _b.value) == "" || parseInt((_c = maxInf.current) == null ? void 0 : _c.value) == 0 ? setError("Select maximum influencer no. ") : ((_d = datepicker.current) == null ? void 0 : _d.value) == null || ((_e = datepicker.current) == null ? void 0 : _e.value) == null || ((_f = datepicker.current) == null ? void 0 : _f.value) == "" ? setError("Select Accept participation last date. ") : ((_g = remuneration.current) == null ? void 0 : _g.value) == null || ((_h = remuneration.current) == null ? void 0 : _h.value) == null || ((_i = remuneration.current) == null ? void 0 : _i.value) == "" ? setError("Select emuneration. ") : (setTillDate((_j = datepicker.current) == null ? void 0 : _j.value), setMaxInf(parseInt((_k = maxInf.current) == null ? void 0 : _k.value)), setRemuneration((_l = remuneration.current) == null ? void 0 : _l.value), navigator("/home/createcampaign/step4"));
      }, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }) })
    ] })
  ] }) });
}, step3_default = Step3;

// app/routes/home/createcampaign/step4.tsx
var step4_exports = {};
__export(step4_exports, {
  default: () => step4_default
});
var import_react37 = require("@remix-run/react"), import_react38 = require("react"), import_react_switch = __toESM(require("react-switch"));
var import_jsx_runtime47 = require("react/jsx-runtime"), Step4 = () => {
  let navigator = (0, import_react37.useNavigate)(), [active, setActive] = (0, import_react38.useState)(!1), [error, setError] = (0, import_react38.useState)(null), CampaignName = (0, import_react38.useRef)(null), campaignName = createcampaign_default2((state) => state.campaignName), setCampaignName = createcampaign_default2((state) => state.setCampaignName), PlanedBudget = (0, import_react38.useRef)(null), planedBudget = createcampaign_default2((state) => state.planedBudget), setPlanedBudget = createcampaign_default2((state) => state.setPlanedBudget), CostPerPost = (0, import_react38.useRef)(null), costPerPost = createcampaign_default2((state) => state.costPerPost), setCostPerPost = createcampaign_default2((state) => state.setCostPerPost), StartDate = (0, import_react38.useRef)(null), startDate = createcampaign_default2((state) => state.startDate), setStartDate = createcampaign_default2((state) => state.setStartDate), EndDate = (0, import_react38.useRef)(null), endDate = createcampaign_default2((state) => state.endDate), setEndDate = createcampaign_default2((state) => state.setEndDate), MinReach = (0, import_react38.useRef)(null), minReach = createcampaign_default2((state) => state.minReach), setMinReach = createcampaign_default2((state) => state.setMinReach), MaxReact = (0, import_react38.useRef)(null), maxReact = createcampaign_default2((state) => state.maxReact), setMaxReact = createcampaign_default2((state) => state.setMaxReact), publicGlobally = createcampaign_default2((state) => state.publicGlobally), setPublicGlobally = createcampaign_default2((state) => state.setPublicGlobally);
  return (0, import_react38.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    ((_a = CampaignName.current) == null ? void 0 : _a.value) != null && (CampaignName.current.value = campaignName), ((_b = PlanedBudget.current) == null ? void 0 : _b.value) != null && (PlanedBudget.current.value = planedBudget.toString()), ((_c = CostPerPost.current) == null ? void 0 : _c.value) != null && (CostPerPost.current.value = costPerPost.toString()), ((_d = StartDate.current) == null ? void 0 : _d.value) != null && (StartDate.current.value = startDate), ((_e = EndDate.current) == null ? void 0 : _e.value) != null && (EndDate.current.value = endDate), ((_f = MinReach.current) == null ? void 0 : _f.value) != null && (MinReach.current.value = minReach.toString()), ((_g = MaxReact.current) == null ? void 0 : _g.value) != null && (MaxReact.current.value = maxReact.toString()), setActive(publicGlobally);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign name" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: CampaignName, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Planed budget" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: PlanedBudget, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2  lg:w-72" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Cost per post" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: CostPerPost, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Start date" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { type: "date", ref: StartDate, className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2 lg:w-72" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "End date" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: EndDate, type: "date", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min reach" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: MinReach, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Max reach" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { ref: MaxReact, type: "number", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_switch.default, { onChange: () => setActive(!active), checked: active, checkedIcon: !1, uncheckedIcon: !1, onColor: "#03125E" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Public globally" }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Brand name" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Brand name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Campaign name" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Campaign name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Planed budget" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Planed budget" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Cost per post" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Cost per post" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Audience loaction" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Audience loaction" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Influencer category" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Influencer category" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Start date" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Start date" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-normal", children: "Min reach" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-sm text-primary font-medium", children: "Min reach" })
      ] }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { onClick: () => {
          navigator(-1);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full", fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-full", onClick: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          let x = new Date(StartDate.current.value), y = new Date(EndDate.current.value), pass_date = x > y;
          ((_a = CampaignName.current) == null ? void 0 : _a.value) == null || ((_b = CampaignName.current) == null ? void 0 : _b.value) == null || ((_c = CampaignName.current) == null ? void 0 : _c.value) == "" ? setError("Enter campaign name") : ((_d = CampaignName.current) == null ? void 0 : _d.value.length) < 4 ? setError("Campaign should be more then 3 character.") : ((_e = PlanedBudget.current) == null ? void 0 : _e.value) == null || ((_f = PlanedBudget.current) == null ? void 0 : _f.value) == null || ((_g = PlanedBudget.current) == null ? void 0 : _g.value) == "" || parseInt((_h = PlanedBudget.current) == null ? void 0 : _h.value) == 0 ? setError("Enter planed budget") : ((_i = CostPerPost.current) == null ? void 0 : _i.value) == null || ((_j = CostPerPost.current) == null ? void 0 : _j.value) == null || ((_k = CostPerPost.current) == null ? void 0 : _k.value) == "" || parseInt((_l = CostPerPost.current) == null ? void 0 : _l.value) == 0 ? setError("Enter planed cost per post") : ((_m = StartDate.current) == null ? void 0 : _m.value) == null || ((_n = StartDate.current) == null ? void 0 : _n.value) == null || ((_o = StartDate.current) == null ? void 0 : _o.value) == "" ? setError("Enter planed starting date") : ((_p = EndDate.current) == null ? void 0 : _p.value) == null || ((_q = EndDate.current) == null ? void 0 : _q.value) == null || ((_r = EndDate.current) == null ? void 0 : _r.value) == "" ? setError("Enter planed end date") : ((_s = MinReach.current) == null ? void 0 : _s.value) == null || ((_t = MinReach.current) == null ? void 0 : _t.value) == null || ((_u = MinReach.current) == null ? void 0 : _u.value) == "" || parseInt((_v = MinReach.current) == null ? void 0 : _v.value) == 0 ? setError("Enter planed min reach") : ((_w = MaxReact.current) == null ? void 0 : _w.value) == null || ((_x = MaxReact.current) == null ? void 0 : _x.value) == null || ((_y = MaxReact.current) == null ? void 0 : _y.value) == "" || parseInt((_z = MaxReact.current) == null ? void 0 : _z.value) == 0 ? setError("Enter planed max reach") : parseInt((_A = MinReach.current) == null ? void 0 : _A.value) > parseInt((_B = MaxReact.current) == null ? void 0 : _B.value) ? setError("Max react should be gretter then min reach") : pass_date ? setError("Start date should be less then end date") : (setCampaignName(CampaignName.current.value), setPlanedBudget(parseInt(CostPerPost.current.value)), setCostPerPost(parseInt(CostPerPost.current.value)), setStartDate(StartDate.current.value), setEndDate(EndDate.current.value), setMinReach(parseInt((_C = MinReach.current) == null ? void 0 : _C.value)), setMaxReact(parseInt((_D = MaxReact.current) == null ? void 0 : _D.value)), setPublicGlobally(active), navigator("/home/createcampaign/step5"));
        }, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-secondary", width: "w-full", fontwidth: "font-bold" }) })
      ] })
    ] }) })
  ] }) });
}, step4_default = Step4;

// app/routes/home/createcampaign/step5.tsx
var step5_exports = {};
__export(step5_exports, {
  default: () => step5_default
});
var import_free_solid_svg_icons15 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome16 = require("@fortawesome/react-fontawesome"), import_react39 = require("@remix-run/react"), import_react40 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime"), Step5 = () => {
  let [error, setErrot] = (0, import_react40.useState)(null), [imgerror, setImgerror] = (0, import_react40.useState)(null), image = createcampaign_default2((state) => state.image), addImage = createcampaign_default2((state) => state.addImage), removeImage = createcampaign_default2((state) => state.removeImage), brandInfo = (0, import_react40.useRef)(null), BrandInfo2 = createcampaign_default2((state) => state.brandinfo), setBrandinfo = createcampaign_default2((state) => state.setBrandinfo), CampaignPurpose = (0, import_react40.useRef)(null), campaignPurpose = createcampaign_default2((state) => state.campaginPurpose), setCampaginPurpose = createcampaign_default2((state) => state.setCampaginPurpose), imgref = (0, import_react40.useRef)(null);
  (0, import_react40.useEffect)(() => {
    brandInfo.current.value = BrandInfo2, CampaignPurpose.current.value = campaignPurpose;
  }, []);
  let navigator = (0, import_react39.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Create campaign" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-primary text-md font-normal", children: "The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population." }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Brand info" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("textarea", { ref: brandInfo, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign purpose" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("textarea", { ref: CampaignPurpose, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mood boards" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("input", { type: "file", accept: "image/*", ref: imgref, onChange: (value) => {
        parseInt((value.target.files[0].size / 1024 / 1024).toString()) < 4 ? (setImgerror(null), addImage(value.target.files[0])) : setImgerror("Image file size must be less then 4 mb");
      } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]", children: [
        image.map((value, i) => {
          var url = URL.createObjectURL(value);
          return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "top-0 left-0 absolute h-full w-full", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("img", { src: url, alt: "error", className: "w-full h-full rounded-xl object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cursor-pointer", onClick: () => {
              removeImage(value);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome16.FontAwesomeIcon, { className: "text-red-500 font-bold text-xl top-0 right-0 absolute", icon: import_free_solid_svg_icons15.faCircleXmark }) })
          ] }) }, i);
        }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center cursor-pointer", onClick: () => {
          var _a;
          (_a = imgref.current) == null || _a.click();
        }, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faAdd, className: "text-gray-400 text-3xl font-bold text-center" }) }) })
      ] }),
      imgerror == "" || imgerror == null || imgerror == null ? null : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: imgerror })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "Brand info" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "Brand info" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "Campaign purpose" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "Campaign purpose" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "Hashtags" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "Hashtags" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "Mentions" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "Mentions" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "You should do:" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "You should do:" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-normal", children: "You should don't:" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm text-primary font-medium", children: "You should don't:" })
      ] }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { onClick: () => {
          navigator(-1);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full", fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "w-full", onClick: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          ((_a = brandInfo.current) == null ? void 0 : _a.value) == null || ((_b = brandInfo.current) == null ? void 0 : _b.value) == null || ((_c = brandInfo.current) == null ? void 0 : _c.value) == "" ? setErrot("Fill the Brand Info") : ((_d = CampaignPurpose.current) == null ? void 0 : _d.value) == null || ((_e = CampaignPurpose.current) == null ? void 0 : _e.value) == null || ((_f = CampaignPurpose.current) == null ? void 0 : _f.value) == "" ? setErrot("Fill the Campaign Purpose.") : image.length == 0 ? setErrot("Select at least one image.") : (setBrandinfo((_g = brandInfo.current) == null ? void 0 : _g.value), setCampaginPurpose((_h = CampaignPurpose.current) == null ? void 0 : _h.value), setErrot(null), navigator("/home/createcampaign/step6"));
        }, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(CusButton, { text: "Next", textColor: "text-white", background: "bg-secondary", width: "w-full", fontwidth: "font-bold" }) })
      ] })
    ] }) })
  ] }) });
}, step5_default = Step5;

// app/routes/home/createcampaign/step6.tsx
var step6_exports = {};
__export(step6_exports, {
  default: () => step6_default,
  loader: () => loader18
});
var import_free_solid_svg_icons16 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome17 = require("@fortawesome/react-fontawesome"), import_node20 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_axios17 = __toESM(require("axios")), import_react42 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
async function loader18({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node20.json)({ userdata: cookie.user });
}
var Step6 = () => {
  let userdata = (0, import_react41.useLoaderData)(), userId = userdata.userdata.id, barndId = userdata.userdata.brandId, navigator = (0, import_react41.useNavigate)(), dosdata = createcampaign_default2((state) => state.dos), dontsdata = createcampaign_default2((state) => state.donts), pdfFile = createcampaign_default2((state) => state.pdffile), image = createcampaign_default2((state) => state.image), platform = createcampaign_default2((state) => state.platform).join(), campaignTypeId = createcampaign_default2((state) => state.campaignTypeId), media = createcampaign_default2((state) => state.media), campaignInfo = createcampaign_default2((state) => state.campaignInfo), approval = createcampaign_default2((state) => state.approval) ? "1" : "0", discoutCoupon = createcampaign_default2((state) => state.discoutCoupon), affiliatedLinks = createcampaign_default2((state) => state.affiliatedLinks), target = createcampaign_default2((state) => state.target).toString(), minTarget = createcampaign_default2((state) => state.minTarget).toString(), rating = createcampaign_default2((state) => state.rating).toString(), mendtion = createcampaign_default2((state) => state.mendtion).join(), hashtag = createcampaign_default2((state) => state.hashtag).join(), dos = createcampaign_default2((state) => state.dos).join(), donts = createcampaign_default2((state) => state.donts).join(), audience = createcampaign_default2((state) => state.audience).join(), infLocation = createcampaign_default2((state) => state.infLocation).id, tilldate = createcampaign_default2((state) => state.tilldate), maxInf = createcampaign_default2((state) => state.maxInf).toString(), remuneration = createcampaign_default2((state) => state.remuneration), remunerationType = createcampaign_default2((state) => state.remunerationType), campaignName = createcampaign_default2((state) => state.campaignName), planedBudget = createcampaign_default2((state) => state.planedBudget).toString(), costPerPost = createcampaign_default2((state) => state.costPerPost).toString(), startDate = createcampaign_default2((state) => state.startDate), endDate = createcampaign_default2((state) => state.endDate), minReach = createcampaign_default2((state) => state.minReach).toString(), maxReact = createcampaign_default2((state) => state.maxReact).toString(), publicGlobally = createcampaign_default2((state) => state.publicGlobally) ? "1" : "2", brandinfo = createcampaign_default2((state) => state.brandinfo), campaginPurpose = createcampaign_default2((state) => state.campaginPurpose), [error, setError] = (0, import_react42.useState)(null);
  async function createCampagin() {
    let req = {
      userId,
      brandUserId: userId,
      brandId: barndId,
      cityId: "1",
      campaignTypeId,
      campaignName,
      campaignInfo,
      startAt: startDate,
      endAt: endDate,
      minReach,
      maxReach: maxReact,
      costPerPost,
      totalBudget: planedBudget,
      minEligibleRating: rating,
      currencyId: "1",
      categories: infLocation,
      platforms: platform,
      mentions: mendtion,
      hashtags: hashtag,
      dos,
      donts,
      totalParticipants: maxInf,
      remuneration: remunerationType,
      geoLat: "0",
      geoLng: "0",
      georadiusKm: "3",
      postApproval: approval,
      audienceLocations: audience,
      inviteStartAt: startDate,
      inviteEndAt: tilldate,
      purpose: campaginPurpose,
      isPublic: publicGlobally
    };
    remunerationType == "1" && (req.remunerationCash = remuneration), remunerationType == "2" && (req.remunerationProductDetail = remuneration), remunerationType == "3" && (req.remunerationRevenuePer = remuneration), remunerationType == "4" && (req.dicountCoupon = remuneration), campaignTypeId == "4" && (req.minTarget = minTarget, req.maxTarget = target);
    let data = await (0, import_axios17.default)({
      method: "post",
      url: `${BaseUrl}/api/add-campaign`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    if (data.data.status == !1)
      return setError(data.data.message);
    let id = data.data.data.id, pdfurl = await UploadFile(pdfFile[0]), pdfref = {
      campaignId: id,
      title: `attachemtn${id}`,
      url: pdfurl
    };
    await (0, import_axios17.default)({
      method: "post",
      url: `${BaseUrl}/api/add-campaign-attachment`,
      data: pdfref,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    for (let i = 0; i < image.length; i++) {
      let imgurl = await UploadFile(image[i]), imgref = {
        campaignId: id,
        title: `moodboard${id}${i}`,
        url: imgurl
      };
      await (0, import_axios17.default)({
        method: "post",
        url: `${BaseUrl}/api/add-campaign-attachment`,
        data: imgref,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Options": "*",
          "Access-Control-Allow-Methods": "*",
          "X-Content-Type-Options": "*",
          "Content-Type": "application/json",
          Accept: "*"
        }
      });
    }
    navigator("/home");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex gap-x-4 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "flex items-end gap-x-3", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Info" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: campaignInfo }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "campaign Information" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: brandinfo }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Mood boards" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]", children: image.map((value, i) => {
        var url = URL.createObjectURL(value);
        return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "top-0 left-0 absolute h-full w-full", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: url, alt: "error", className: "w-full h-full rounded-xl object-cover" }) }) }) }, i);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Optional attachments" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-black font-semibold  text-md", children: pdfFile.length == 0 ? "" : pdfFile[0].name }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faPaperclip }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faCheck }) }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: dosdata.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
            value,
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grow", children: " " })
          ] }) }, i)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faRemove }) }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: dontsdata.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
            value,
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "grow", children: " " })
          ] }) }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "text-primary text-lg font-medium", children: "Campaign Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-black font-bold text-md text-left mt-4", children: "Congratulations" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "The Jaquar Group, established in 1960, is a growing multi-diversified bathroom and lighting solutions company with 17% CAGR over 10 years in a row, offers faucets, showers, shower enclosures, sanitary ware, flushing systems, wellness products, concealed cisterns, water heaters, and varied lighting products." }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex w-full mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { onClick: () => {
          navigator(-1);
        }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full", fontwidth: "font-bold" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-10" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-full", onClick: () => {
          createCampagin();
        }, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CusButton, { text: "Create", textColor: "text-white", background: "bg-secondary", width: "w-full", fontwidth: "font-bold" }) })
      ] })
    ] }) })
  ] }) });
}, step6_default = Step6;

// app/routes/home/campaigns.$id.tsx
var campaigns_id_exports = {};
__export(campaigns_id_exports, {
  default: () => campaigns_id_default,
  loader: () => loader20
});
var import_free_solid_svg_icons18 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome19 = require("@fortawesome/react-fontawesome"), import_react45 = require("react");

// app/routes/home/brand.$id.tsx
var brand_id_exports = {};
__export(brand_id_exports, {
  Completed: () => Completed,
  Connection: () => Connection,
  Rating: () => Rating2,
  default: () => brand_id_default,
  loader: () => loader19
});
var import_free_solid_svg_icons17 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome18 = require("@fortawesome/react-fontawesome"), import_node21 = require("@remix-run/node"), import_react43 = require("@remix-run/react"), import_axios18 = __toESM(require("axios")), import_react44 = require("react"), import_use_local_storage_state = __toESM(require("use-local-storage-state"));

// app/components/utils/extrabrandcard.tsx
var import_jsx_runtime50 = require("react/jsx-runtime"), ExtraBrandCard = () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "bg-white rounded-xl shadow-xl w-64 mt-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "rounded-t-xl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "p-4 -translate-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-end gap-x-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Adidas Cases" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "w-full h-[1px] bg-black my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "grow flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "rounded-full w-8 h-8" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "rounded-full w-8 h-8" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
        "3500 ",
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
        "USD / post"
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" })
  ] })
] }) }), extrabrandcard_default = ExtraBrandCard;

// app/components/utils/pastbrandcard.tsx
var import_jsx_runtime51 = require("react/jsx-runtime"), PastBrandCard = () => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: "Adidas Cases" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex justify-center items-center gap-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-6 h-6 grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { className: "text-sm font-bold text-black", children: "POST" }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex justify-center items-center gap-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-6 h-6 grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { className: "text-sm font-bold text-black", children: "POST" }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-xs font-normal text-black", children: "Category: Consumer Electronics" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-black font-semibold text-sm text-left my-4", children: "61K Reach" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" })
] }) }), pastbrandcard_default = PastBrandCard;

// app/routes/home/brand.$id.tsx
var import_jsx_runtime52 = require("react/jsx-runtime"), loader19 = async (props) => {
  let id = props.params.id, branddata = await import_axios18.default.post(`${BaseUrl}/api/get-brand`, { id }), cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node21.json)({ brand: branddata.data.data, user: cookie.user });
}, BrandPage = () => {
  let brand = (0, import_react43.useLoaderData)().brand, user = (0, import_react43.useLoaderData)().user, [isPast, setPast] = (0, import_react44.useState)(!1), logo = brand.logo == "" || brand.logo == null || brand.logo == null || brand.logo == "0" ? "images/avatar.png" : brand.logo, [fav, setFav] = (0, import_react44.useState)(!1), [myfavBrand, setMyfavBrand] = (0, import_use_local_storage_state.default)("favbrand", {
    defaultValue: []
  }), setFavBrand = (brand2) => {
    setMyfavBrand([...myfavBrand, brand2]), setFav(!0);
  }, revmoceFavBrand = (brand2) => {
    let savebrand = [];
    for (let i = 0; i < myfavBrand.length; i++)
      myfavBrand[i].id != brand2.id && savebrand.push(myfavBrand[i]);
    setMyfavBrand(savebrand), setFav(!1);
  };
  (0, import_react44.useEffect)(() => {
    let res = !1;
    myfavBrand.map((val, index2) => {
      val.id == brand.id && (res = !0);
    }), setFav(!!res);
  }, []);
  let [error, setError] = (0, import_react44.useState)(null), messageRef = (0, import_react44.useRef)(null), [connectBox, setConnectBox] = (0, import_react44.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`, style: { zIndex: 100 }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { onClick: () => {
          setConnectBox(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faRemove, className: "font-bold text-2xl text-center text-primary" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("textarea", { ref: messageRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { onClick: async () => {
          var _a, _b, _c, _d;
          if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == null || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
            return setError("Message can't be blank");
          let req = {
            campaignDraftId: "0",
            fromUserId: user.id,
            toUserId: "89",
            comment: (_d = messageRef.current) == null ? void 0 : _d.value
          }, data = await (0, import_axios18.default)({
            method: "post",
            url: `${BaseUrl}/api/add-chat`,
            data: req,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Options": "*",
              "Access-Control-Allow-Methods": "*",
              "X-Content-Type-Options": "*",
              "Content-Type": "application/json",
              Accept: "*"
            }
          });
          return data.data.status ? setConnectBox(!1) : setError(data.data.message);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-full relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "absolute top-5 right-5", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome18.FontAwesomeIcon, { onClick: () => {
          let brandval = { id: brand.id, logo, name: brand.name };
          return fav ? revmoceFavBrand(brandval) : setFavBrand(brandval);
        }, icon: import_free_solid_svg_icons17.faHeart, className: `${fav ? "text-red-500" : "text-gray-500"} h-12 w-12` }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "w-full h-60 object-cover rounded-t-xl" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { src: logo, alt: "brand logo", className: "w-32 h-32 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-primary text-lg font-medium my-2", children: brand.name }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-primary text-md font-normal", children: "Category: Consumer Electronics" }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text-primary text-md font-normal", children: [
              "website: ",
              brand.webUrl
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { onClick: () => {
              setConnectBox(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CusButton, { text: "Connect", background: "bg-secondary", fontwidth: "font-bold" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Rating2, {}),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Completed, {}),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Connection, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "Brand info" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-black text-sm font-normal", children: brand.info })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex mx-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { onClick: () => {
          setPast(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CusButton, { text: "Available Campaigns", background: `${isPast ? "bg-gray-100" : "bg-[#01FFF4]"}`, fontwidth: "font-bold", textColor: `${isPast ? "text-gray-600" : "text-black"}` }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { onClick: () => {
          setPast(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CusButton, { text: "Past associations", background: `${isPast ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${isPast ? "text-black" : "text-gray-600"}` }) })
      ] }),
      isPast ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(PastBrandAssociation, {}) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AvailableCampaigns, {})
    ] })
  ] });
}, brand_id_default = BrandPage, Rating2 = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome18.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons17.faStar }) }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-black text-lg font-bold", children: "4.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-black text-sm font-normal", children: "Rating" })
  ] })
] }) }), Connection = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome18.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons17.faHandshake }) }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-black text-lg font-bold", children: "21" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-black text-sm font-normal", children: "Connections" })
  ] })
] }) }), Completed = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "bg-gray-100 flex rounded-lg gap-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "bg-gray-200 p-2 rounded-md grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome18.FontAwesomeIcon, { className: "text-black text-3xl", icon: import_free_solid_svg_icons17.faNetworkWired }) }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-black text-lg font-bold", children: "48" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-black text-sm font-normal", children: "Completed Campaigns" })
  ] })
] }) }), AvailableCampaigns = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(extrabrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(extrabrandcard_default, {})
] }) }), PastBrandAssociation = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(pastbrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(pastbrandcard_default, {})
] }) });

// app/routes/home/campaigns.$id.tsx
var import_node22 = require("@remix-run/node"), import_axios19 = __toESM(require("axios"));
var import_react46 = require("@remix-run/react");
var import_jsx_runtime53 = require("react/jsx-runtime");
var loader20 = async (props) => {
  let platform = await import_axios19.default.post(`${BaseUrl}/api/getplatform`), id = props.params.id, campaigndata = await import_axios19.default.post(`${BaseUrl}/api/campaign-search`, { id }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  }), cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node22.json)({ campaign: campaigndata.data.data[0], user: cookie.user, platform: platform.data.data });
}, Campaigns = () => {
  let champaign = (0, import_react46.useLoaderData)().campaign, user = (0, import_react46.useLoaderData)().user, isbrand = user.role.code != 10, data = (0, import_react46.useLoaderData)(), userId = user.id, brandimage = champaign.brand == null || champaign.brand.length == 0 || champaign.brand == null || champaign.brand == "" || champaign.brand.logo == "" || champaign.brand.logo == null || champaign.brand.logo == "0" || champaign.brand.logo == null ? "/images/avatar/user.png" : champaign.brand.logo, brandname = champaign.brand.name, [category, setCategory] = (0, import_react45.useState)(""), [acceptreq, setAcceptreq] = (0, import_react45.useState)(0 /* None */), [requestdata, setRequestdata] = (0, import_react45.useState)([]), init = async () => {
    setCategory(await getCampaignType(champaign.campaignTypeId));
    let req = {
      search: {
        campaign: champaign.id,
        influencer: userId,
        fromUser: userId
      }
    }, reqdata = await import_axios19.default.post(`${BaseUrl}/api/search-invite`, req);
    reqdata.data.status == !0 ? (reqdata.data.data[0].status.code == "1" && setAcceptreq(1 /* Panding */), reqdata.data.data[0].status.code == "3" && setAcceptreq(2 /* Accepted */), reqdata.data.data[0].status.code == "5" && setAcceptreq(3 /* Rejected */), setRequestdata(reqdata.data.data)) : setAcceptreq(0 /* None */);
  };
  (0, import_react45.useEffect)(() => {
    init();
  }, []);
  let [paymentBox, setPaymentBox] = (0, import_react45.useState)(!1), [paymentError, setPaymentError] = (0, import_react45.useState)(""), paymentRef = (0, import_react45.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(BrandInfo, { logo: brandimage, name: brandname, website: champaign.brand.website, info: champaign.brand.info }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CampaignsInfo, { dont: champaign.donts, dos: champaign.dos, hastag: champaign.hashtags, mendtion: champaign.mentions, platform: champaign.platforms, moddboard: champaign.moodBoards, info: champaign.campaignInfo, name: champaign.campaignName, image: brandimage, website: champaign.brand.website, category }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Budget, { currecny: champaign.currency.code, costperpost: champaign.costPerPost, totalbudget: champaign.totalBudget.split(".")[0], remaining: "1400" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Target, { audienceloaction: champaign.audienceLocations, minreach: champaign.minReach, maxreach: champaign.maxReach, startdate: champaign.startAt, enddate: champaign.endAt }),
        isbrand ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
          acceptreq == 0 /* None */ ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Apply, { champaignId: champaign.id, touserId: champaign.brandUserId, userId, influencerId: userId, fromuserId: userId }) : null,
          acceptreq == 1 /* Panding */ ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Panding, {}) : null,
          acceptreq == 3 /* Rejected */ ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Rejected, { reason: requestdata[0].status.message, champaignId: champaign.id, touserId: champaign.brandUserId, userId, influencerId: userId, fromuserId: userId }) : null
        ] })
      ] })
    ] }),
    acceptreq == 2 /* Accepted */ ? /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex gap-4 flex-col lg:flex-row mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CreateDraft, { influencerId: userId, champaingId: champaign.id, platforms: data.platform }) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "grow flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary font-semibold py-1", children: "Live campaigns" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full h-[1px] bg-slate-300" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white rounded-md p-4 mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: "/images/media/facebook.png", alt: "error", className: "h-10 w-10 shrink-0" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-primary text-sm font-semibold text-left", children: "Ivankbfc_Blasters" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-primary text-sm font-normal text-left", children: "Publish date: Today" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { className: "mt-4 text-md w-full text-black font-semibold bg-[#F7941D] rounded-md shadow-lg py-1", children: "Link campaign" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white rounded-md p-4 mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "h-10 w-10 shrink-0" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-primary text-sm font-semibold text-left", children: "Ivankbfc_Blasters" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-primary text-sm font-normal text-left", children: "Publish date: 30-01-2022" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { className: "mt-4 text-md w-full text-black font-semibold bg-[#F7941D] rounded-md shadow-lg py-1", children: "View insight" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "grow flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary font-semibold py-1", children: "Payments" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full h-[1px] bg-slate-300" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faCoins, className: "text-xl text-primary" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-black", children: "6420 USD" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Received" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-normal text-black", children: "2700 USD" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Pending" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-normal text-black", children: "3540 USD" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-normal font-semibold py-1 text-primary text-lg", children: "Payment request" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: () => {
              setPaymentBox(!0);
            }, className: `text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${paymentBox ? "hidden" : ""}`, children: "Request" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: `${paymentBox ? "" : "hidden"}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex gap-x-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: "Enter Amount : " }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { ref: paymentRef, type: "number", className: "text-black outline-none border-none rounded-md py-1 px-2 bg-gray-300 w-full" }) })
              ] }),
              paymentError == "" || paymentError == null || paymentError == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: paymentError }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: async () => {
                var _a, _b, _c, _d;
                if (((_a = paymentRef.current) == null ? void 0 : _a.value) == null || ((_b = paymentRef.current) == null ? void 0 : _b.value) == null || ((_c = paymentRef.current) == null ? void 0 : _c.value) == "")
                  setPaymentError("Enter the amount");
                else {
                  let req = {
                    userId,
                    campaignId: champaign.id,
                    amtReq: (_d = paymentRef.current) == null ? void 0 : _d.value
                  }, paymentdata = await import_axios19.default.post(`${BaseUrl}/api/new-pay-request`, req);
                  return paymentdata.data.status ? setPaymentBox(!1) : setPaymentError(paymentdata.data.message);
                }
              }, className: "text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2", children: "Request Payment" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(UserCreatedDrafts, { userId, campaingid: champaign.id })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "my-6", children: isbrand ? /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ChampaingAcceptRequest, { userId, campaingid: champaign.id }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(DraftAcceptRequest, { userId, campaingid: champaign.id }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ChampaingPaymentRequest, { campaingid: champaign.id, currency: user.currency.code })
    ] }) : null })
  ] });
}, campaigns_id_default = Campaigns, BrandInfo = (props) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "col-span-2 rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: props.logo, alt: "brand logo", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: "Category : Consumer Electronics" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h3", { className: "text-black font-bold text-md text-left", children: "Brand info" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Rating2, {}),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Connection, {}),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Completed, {})
] }) }), CampaignsInfo = (props) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "col-span-3 rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
    "Category : ",
    props.category
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: props.website }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h3", { className: "text-black font-bold text-md text-left", children: "Campaign info" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: props.info }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex gap-x-4 overflow-x-scroll no-scrollbar", children: props.moddboard.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.url, alt: "error", className: "h-14 w-14 object-cover rounded-md" }) }, index2)) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Platforms" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex items-center w-32 overflow-x-scroll no-scrollbar", children: props.platform.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-1 shrink-0 mx-1 ", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.platformLogoUrl, alt: "error", className: "rounded-lg w-8 h-8" }) }, index2)) }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-semibold", children: "Do's" }),
      props.dos.split(",").map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-normal", children: val }, index2))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-10 w-[1px] bg-slate-900" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-semibold", children: "Dont's" }),
      props.dont.split(",").map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-normal", children: val }, index2))
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-semibold mt-4", children: "Hastags" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex flex-nowrap gap-2 my-4", children: props.hastag.split(",").map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-md font-normal rounded-md bg-gray-300 py-1 px-4", children: [
    "#",
    val
  ] }, index2)) }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-semibold mt-4", children: "Mendtions" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex flex-nowrap gap-2 my-4", children: props.mendtion.split(",").map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-md font-normal rounded-md bg-gray-300 py-1 px-4", children: [
    "@",
    val
  ] }, index2)) })
] }) }), Target = (props) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faCoins, className: "text-xl text-primary" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl text-primary font-medium px-4", children: "Target" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-[1px] bg-gray-500 w-full my-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Audience loaction" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-primary", children: props.audienceloaction })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Min Reach" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-black", children: props.minreach })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Max Reach" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-black", children: props.maxreach })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Start Date" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-black", children: props.startdate })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "End date" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-bold text-black", children: props.enddate })
  ] })
] }) }), Apply = (props) => {
  let [open, setOpen] = (0, import_react45.useState)(!1), onOpenModal = () => setOpen(!0), onCloseModal = () => setOpen(!1), [error, setError] = (0, import_react45.useState)(null), messageRef = (0, import_react45.useRef)(null), applyChampaign = async () => {
    var _a, _b, _c, _d;
    if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == null || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: (_d = messageRef.current) == null ? void 0 : _d.value
    }, data = await import_axios19.default.post(`${BaseUrl}/api/add-invite`, req);
    data.data.status == !1 ? setError(data.data.message) : (messageRef.current.value = "", onCloseModal()), window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-white text-xl text-left font-normal", children: "Would you like to participate in this campaign?" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CusButton, { text: "Apply", textColor: "text-white", background: "bg-secondary" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { onClick: onCloseModal, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faRemove, className: "font-bold text-2xl text-center text-primary" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-lg font-normal", children: "Subject : Applay for campaign" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("textarea", { ref: messageRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { onClick: applyChampaign, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }) })
      ] })
    ] }) })
  ] });
}, Budget = (props) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "rounded-xl shadow-xl bg-white p-4 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faCoins, className: "text-xl text-primary" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-xl text-primary font-medium px-4", children: "Budget" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-[1px] bg-gray-500 w-full my-2 " }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Cost per post" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-md font-bold text-primary", children: [
      props.costperpost,
      " ",
      props.currecny
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Total budget" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-md font-bold text-black", children: [
      props.totalbudget,
      " ",
      props.currecny
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary", children: "Remaining" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-md font-bold text-black", children: [
      props.remaining,
      " ",
      props.currecny
    ] })
  ] })
] }) }), Panding = () => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request in progress.." }) }) }), ChampaingAcceptRequest = (props) => {
  let [resinvite, setRequestinvite] = (0, import_react45.useState)([]), [acceptbox, setAcceptbox] = (0, import_react45.useState)(!1), [rejectbox, setrejectbox] = (0, import_react45.useState)(!1), [error, setError] = (0, import_react45.useState)(null), rejectiontextRef = (0, import_react45.useRef)(null), [id, setId] = (0, import_react45.useState)(null), init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid,
        toUser: props.userId
      }
    }, responseData = await import_axios19.default.post(`${BaseUrl}/api/search-invite`, req);
    responseData.data.status == !0 && setRequestinvite(responseData.data.data);
  }, acceptRequest = async () => {
    let req = { id, status: "3" }, responseData = await import_axios19.default.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == !1)
      return setError(responseData.data.message);
    setAcceptbox(!1), window.location.reload();
  }, rejectRequest = async () => {
    var _a, _b, _c, _d;
    if (((_a = rejectiontextRef.current) == null ? void 0 : _a.value) == null || ((_b = rejectiontextRef.current) == null ? void 0 : _b.value) == null || ((_c = rejectiontextRef.current) == null ? void 0 : _c.value) == "")
      return setError("Fell the reason.");
    let req = { id, status: "5", rejectReason: (_d = rejectiontextRef.current) == null ? void 0 : _d.value }, responseData = await import_axios19.default.post(`${BaseUrl}/api/update-invite`, req);
    if (responseData.data.staus == !1)
      return setError(responseData.data.message);
    rejectiontextRef.current.value == "", setrejectbox(!1), window.location.reload();
  };
  return (0, import_react45.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-2xl", children: "Accept" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this?" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
          setAcceptbox(!1);
        }, className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
          "Cancel"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: acceptRequest, className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
          "Accept"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-2xl", children: "Reject" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { ref: rejectiontextRef, type: "text", className: "w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none", placeholder: "Enter the reason of rejection." }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
          setrejectbox(!1);
        }, className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
          "Cancel"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: rejectRequest, className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
          "Reject"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: "No Invite request is panding" }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: "Requested Invites" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid mt-4 place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: resinvite.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.influencer.pic, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: val.influencer.name }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.influencer.email })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Message" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.inviteMessage }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex gap-4 mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
            setId(val.id), setAcceptbox(!0);
          }, className: "bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
            "Accept"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
            setId(val.id), setrejectbox(!0);
          }, className: "bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
            "Reject"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {})
      ] }, index2)) })
    ] }) })
  ] });
}, DraftAcceptRequest = (props) => {
  let [resinvite, setRequestinvite] = (0, import_react45.useState)([]), [acceptbox, setAcceptbox] = (0, import_react45.useState)(!1), [rejectbox, setrejectbox] = (0, import_react45.useState)(!1), [error, setError] = (0, import_react45.useState)(null), rejectiontextRef = (0, import_react45.useRef)(null), [id, setId] = (0, import_react45.useState)(null), init = async () => {
    let req = {
      search: {
        status: "1",
        campaign: props.campaingid,
        toUser: props.userId
      }
    }, responseData = await import_axios19.default.post(`${BaseUrl}/api/search-draft`, req);
    responseData.data.status == !0 && setRequestinvite(responseData.data.data);
  }, acceptRequest = async () => {
    let req = { id, status: "3" }, responseData = await import_axios19.default.post(`${BaseUrl}/api/update-draft`, req);
    if (responseData.data.staus == !1)
      return setError(responseData.data.message);
    setAcceptbox(!1), window.location.reload();
  }, rejectRequest = async () => {
    var _a, _b, _c, _d;
    if (((_a = rejectiontextRef.current) == null ? void 0 : _a.value) == null || ((_b = rejectiontextRef.current) == null ? void 0 : _b.value) == null || ((_c = rejectiontextRef.current) == null ? void 0 : _c.value) == "")
      return setError("Fell the reason.");
    let req = { id, status: "5", rejectReason: (_d = rejectiontextRef.current) == null ? void 0 : _d.value }, responseData = await import_axios19.default.post(`${BaseUrl}/api/update-draft`, req);
    if (responseData.data.staus == !1)
      return setError(responseData.data.message);
    rejectiontextRef.current.value == "", setrejectbox(!1), window.location.reload();
  };
  return (0, import_react45.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-2xl", children: "Accept" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-gray-800", children: "Are you sure you want to accept this draft?" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
          setAcceptbox(!1);
        }, className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
          "Cancel"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: acceptRequest, className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
          "Accept"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-white w-72 shadow-lg p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-center font-medium text-2xl", children: "Reject" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { ref: rejectiontextRef, type: "text", className: "w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none", placeholder: "Enter the reason of rejection." }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
          setrejectbox(!1);
        }, className: "bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
          "Cancel"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: rejectRequest, className: "bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
          "Reject"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: resinvite.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: "No draft request is panding" }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: "Requested drafts" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid mt-4 place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: resinvite.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.influencer.pic, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.influencer.email })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Description" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.description }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("a", { target: "_blank", className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500", href: val.attach01, children: "View pdf" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex gap-4 mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
            setId(val.id), setAcceptbox(!0);
          }, className: "bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsUp }),
            "Accept"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { onClick: () => {
            setId(val.id), setrejectbox(!0);
          }, className: "bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { className: "mx-2", icon: import_free_solid_svg_icons18.faThumbsDown }),
            "Reject"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {})
      ] }, index2)) })
    ] }) })
  ] });
}, Rejected = (props) => {
  let [open, setOpen] = (0, import_react45.useState)(!1), onOpenModal = () => setOpen(!0), onCloseModal = () => setOpen(!1), [error, setError] = (0, import_react45.useState)(null), messageRef = (0, import_react45.useRef)(null), applyChampaign = async () => {
    var _a, _b, _c, _d;
    if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == null || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
      return setError("Message can't be blank");
    let req = {
      campaignId: props.champaignId,
      influencerId: props.influencerId,
      fromUserId: props.fromuserId,
      toUserId: props.touserId,
      inviteMessage: (_d = messageRef.current) == null ? void 0 : _d.value
    }, data = await import_axios19.default.post(`${BaseUrl}/api/add-invite`, req);
    data.data.status == !1 ? setError(data.data.message) : (messageRef.current.value = "", onCloseModal()), window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 rounded-xl shadow-xl bg-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-white text-xl text-left font-normal", children: "Your request has been rejected.." }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-white font-normal text-md", children: [
        "Reason : ",
        props.reason
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full grid place-items-center", onClick: onOpenModal, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CusButton, { text: "Apply again!", textColor: "text-white", background: "bg-secondary" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { onClick: onCloseModal, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faRemove, className: "font-bold text-2xl text-center text-primary" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-lg font-normal", children: "Subject : Applay for campaign" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("textarea", { ref: messageRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { onClick: applyChampaign, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }) })
      ] })
    ] }) })
  ] });
}, CreateDraft = (props) => {
  let datepicker = (0, import_react45.useRef)(null), inputFile = (0, import_react45.useRef)(null), descraption = (0, import_react45.useRef)(null), [pdfFile, setPdfFile] = (0, import_react45.useState)(), [platform, setPlatform] = (0, import_react45.useState)(null), [createbox, setCreatebox] = (0, import_react45.useState)(!1), [error, setError] = (0, import_react45.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md text-primary font-semibold py-1", children: "Campaign draft" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full h-[1px] bg-slate-300" }),
    createbox ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex gap-2 mt-2 overflow-x-scroll no-scrollbar py-4", children: props.platforms.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `shrink-0  p-2 rounded-lg ${platform == val.id ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
        setPlatform(val.id);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: props.platforms[i].platformLogoUrl, alt: "error", className: "w-10 h-10" }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h3", { className: "text-black font-semibold  text-md", children: pdfFile == null ? "" : pdfFile.name }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", onClick: () => {
          inputFile.current.click();
        }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faPaperclip }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { ref: inputFile, type: "file", accept: "application/pdf", onChange: (value) => {
        parseInt((value.target.files[0].size / 1024 / 1024).toString()) < 2 ? (setError(null), setPdfFile(value.target.files[0])) : setError("Pdf file size must be less then 4 mb");
      } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { type: "date", ref: datepicker, className: "bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("textarea", { ref: descraption, className: "focus:border-none focus:outline-none mt-4 p-4 w-full h-20 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none", placeholder: "description..." }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        platform == null || platform == null || platform == 0 || platform == "" ? setError("Select the platform.") : pdfFile == null || pdfFile == null ? setError("Select the pdf file.") : ((_a = datepicker.current) == null ? void 0 : _a.value) == null || ((_b = datepicker.current) == null ? void 0 : _b.value) == null || ((_c = datepicker.current) == null ? void 0 : _c.value) == "" ? setError("Select the date.") : (((_d = descraption.current) == null ? void 0 : _d.value) == null || ((_e = descraption.current) == null ? void 0 : _e.value) == null || ((_f = descraption.current) == null ? void 0 : _f.value) == "") && setError("Write the description.");
        let pdfurl = await UploadFile(pdfFile), req = {
          campaignId: props.champaingId,
          influencerId: props.influencerId,
          handleId: platform,
          publishAt: (_g = datepicker.current) == null ? void 0 : _g.value,
          attach01: pdfurl,
          description: (_h = descraption.current) == null ? void 0 : _h.value
        }, data = await (0, import_axios19.default)({
          method: "post",
          url: `${BaseUrl}/api/add-draft`,
          data: req
        });
        return data.data.status == !1 ? setError(data.data.message) : (setError(null), setCreatebox(!1));
      }, className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2", children: "Submit" })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white mt-2 rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm text-normal font-semibold py-1 text-primary", children: "Create campaign draft" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: () => {
        setCreatebox(!0);
      }, className: "text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2", children: "Create" })
    ] }) })
  ] });
}, ChampaingPaymentRequest = (props) => {
  let [respayment, setRequestPayment] = (0, import_react45.useState)([]), init = async () => {
    let req = {
      search: {
        campaign: props.campaingid
      }
    }, responseData = await import_axios19.default.post(`${BaseUrl}/api/get-req-pay`, req);
    responseData.data.status == !0 && setRequestPayment(responseData.data.data);
  };
  return (0, import_react45.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-white", children: respayment.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: "No Invite request is panding" }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: "Requested Invites" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid mt-4 place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: respayment.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Requested by" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full h-[2px] bg-gray-700" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.influencer.pic, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.influencer.email })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Ammount" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "text-sm font-medium", children: [
        val.amount,
        " ",
        props.currency
      ] })
    ] }, index2)) })
  ] }) }) });
}, UserCreatedDrafts = (props) => {
  let [resDarft, setResDarft] = (0, import_react45.useState)([]), init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        campaign: props.campaingid,
        influencer: props.userId
      }
    }, responseData = await import_axios19.default.post(`${BaseUrl}/api/search-draft`, req);
    responseData.data.status == !0 && setResDarft(responseData.data.data);
  };
  return (0, import_react45.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-white my-4", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: "You haven't created any drafts yet." }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: "User Created draft" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid mt-4 place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: resDarft.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "my-2 p-4 bg-white rounded-lg shadow-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("img", { src: val.influencer.pic, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-md font-medium", children: val.influencer.name.split("@")[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.influencer.email })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Description" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm font-medium", children: val.description }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("a", { target: "_blank", className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500", href: val.attach01, children: "View pdf" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "mt-2 text-md font-medium", children: "Status" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: `mt-2 text-md text-white font-medium text-center rounded-md ${val.status.name == "ACCEPTED" ? "bg-green-500" : val.status.name == "PENDING" ? "bg-yellow-500" : "bg-red-500"}`, children: val.status.name })
    ] }, index2)) })
  ] }) }) });
};

// app/routes/home/findcampaign.tsx
var findcampaign_exports = {};
__export(findcampaign_exports, {
  InfluencerSearch: () => InfluencerSearch,
  default: () => findcampaign_default,
  loader: () => loader21
});
var import_free_solid_svg_icons20 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome21 = require("@fortawesome/react-fontawesome");
var import_react_switch2 = __toESM(require("react-switch")), import_react50 = require("react");

// app/components/utils/campagincard.tsx
var import_react47 = require("@remix-run/react");
var import_jsx_runtime54 = require("react/jsx-runtime"), CampaginCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_jsx_runtime54.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { className: "text-black font-semibold text-xs text-left mt-4", children: [
    "Category : ",
    props.category
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: props.weburl }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "w-full h-[1px] bg-black my-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "text-black font-semibold text-xs text-left", children: "Budget" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "flex items-center w-32 overflow-x-scroll no-scrollbar", children: props.platforms.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "p-1 shrink-0 mx-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("img", { src: val, alt: "error", className: "rounded-full w-8 h-8" }) }, index2)) }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "grow" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
      props.maxval,
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("br", {}),
      props.currency,
      " / post"
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react47.Link, { to: `/home/campaigns/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" }) })
] }) });

// app/routes/home/findcampaign.tsx
var import_axios20 = __toESM(require("axios"));
var import_node23 = require("@remix-run/node"), import_react51 = require("@remix-run/react");

// app/components/utils/brandcard.tsx
var import_react48 = require("@remix-run/react");
var import_jsx_runtime55 = require("react/jsx-runtime"), BrandCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_jsx_runtime55.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
    "email : ",
    props.email
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
    "Website : ",
    props.website
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_react48.Link, { to: `/home/brand/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }) })
] }) });

// app/components/utils/influencercard.tsx
var import_react49 = require("@remix-run/react");
var import_react_fontawesome20 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons19 = require("@fortawesome/free-solid-svg-icons"), import_jsx_runtime56 = require("react/jsx-runtime"), InfluencerCard = (props) => {
  let Star = () => {
    let fullStars = Math.floor(props.star), fractionalStar = props.star - fullStars, stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react_fontawesome20.FontAwesomeIcon, { className: "text-xs text-pink-500", icon: import_free_solid_svg_icons19.faStar }, i)
      );
    fractionalStar > 0 && stars.push(
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
        import_react_fontawesome20.FontAwesomeIcon,
        {
          className: "text-xs text-pink-500",
          icon: import_free_solid_svg_icons19.faStar,
          style: { width: `${fractionalStar * 100}%` }
        },
        fullStars
      )
    );
    for (let i = 0; i < 5 - fullStars; i++)
      stars.push(
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          import_react_fontawesome20.FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: import_free_solid_svg_icons19.faStar
          },
          5 + i
        )
      );
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_jsx_runtime56.Fragment, { children: stars });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_jsx_runtime56.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { src: props.image, alt: "error", className: "w-full h-40 object-cover rounded-t-md" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex gap-1 -translate-y-5 pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "border p-1 bg-white border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-6 h-6 rounded-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "border p-1 border-blue-500 bg-white rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-6 h-6 rounded-full" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-start my-2 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-black font-semibold text-sm text-left", children: props.name.split("@")[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Star, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("p", { className: "text-black font-bold  text-md text-right", children: [
          "3500 ",
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("br", {}),
          "USD / post"
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-black font-normal my-2 text-xs text-center", children: "Status: Campaign draft pending" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react49.Link, { to: "/home/brand", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(CusButton, { text: "View Campaign", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }) })
    ] })
  ] }) });
}, influencercard_default = InfluencerCard;

// app/routes/home/findcampaign.tsx
var import_use_local_storage_state2 = __toESM(require("use-local-storage-state")), import_jsx_runtime57 = require("react/jsx-runtime"), loader21 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), platformRes = await import_axios20.default.post(`${BaseUrl}/api/getplatform`), categoryRes = await import_axios20.default.post(`${BaseUrl}/api/getcategory`), countryRes = await import_axios20.default.post(`${BaseUrl}/api/getcountry`);
  return (0, import_node23.json)({ user: cookie.user, platform: platformRes.data.data, category: categoryRes.data.data, country: countryRes.data.data });
}, FindCampaign = () => {
  let loader28 = (0, import_react51.useLoaderData)(), isbrand = loader28.user.role.code != 10, [searchBrand, setSearchBrand] = (0, import_react50.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: isbrand ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Find Influencer" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the influecner." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(InfluencerSearch, { platform: loader28.platform, country: loader28.country, category: loader28.category })
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Find campaign" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "hidden md:block md:grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: () => {
          setSearchBrand(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { height: "h-12", text: "Campaign", fontwidth: "font-bold", background: searchBrand ? "bg-gray-300" : "bg-cyan-300", textColor: searchBrand ? "text-gray-600" : "text-black" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: () => {
          setSearchBrand(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { height: "h-12", text: "Brand", fontwidth: "font-bold", background: searchBrand ? "bg-cyan-300" : "bg-gray-300", textColor: searchBrand ? "text-black" : "text-gray-600" }) })
      ] })
    ] }),
    searchBrand ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(BrandSearch, {}) : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CampaignSearch, { platform: loader28.platform, country: loader28.country, category: loader28.category })
  ] }) }) });
}, findcampaign_default = FindCampaign, CampaignSearch = (props) => {
  let country = props.country, platform = props.platform, category = props.category, [searchType, setSearchType] = (0, import_react50.useState)(0 /* TextSearch */), [active, setActive] = (0, import_react50.useState)(!1), [camSearchResult, setCamSearchResult] = (0, import_react50.useState)([]), champTextSearch = (0, import_react50.useRef)(null), [selCountry, setSelCountry] = (0, import_react50.useState)([]), [con, setcon] = (0, import_react50.useState)(!1), [selPlatform, setSelectedPlatform] = (0, import_react50.useState)([]), [selcategory, setSelcategory] = (0, import_react50.useState)([]), [cat, setcat] = (0, import_react50.useState)(!1), [error, setError] = (0, import_react50.useState)(null), camptextsearch = async (searchtext) => {
    if (champTextSearch.current.value = "", searchtext == "" || searchtext == null || searchtext == null)
      return setError("Fill the field to start searching");
    let req = { name: searchtext }, data = await import_axios20.default.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == !1)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  }, campadvancesearch = async () => {
    if (selcategory.length == 0)
      return setError("Select the category");
    if (selPlatform.length == 0)
      return setError("Select the pltforms");
    if (selCountry.length == 0)
      return setError("Select the country");
    let req = {
      country: selcategory[0].id,
      platform: selPlatform.join(","),
      category: selcategory[0].id,
      active: active ? "1" : "0"
    }, data = await import_axios20.default.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == !1)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  }, delsearch = () => {
    setCamSearchResult([]);
  }, [showFilter, setFilter] = (0, import_react50.useState)(!1), [filterName, setFilterName] = (0, import_react50.useState)(!1), [nameError, setNameError] = (0, import_react50.useState)(null), [localFilter, setLocalFilter] = (0, import_use_local_storage_state2.default)("CampaignSearch", {
    defaultValue: []
  }), nameFilterRef = (0, import_react50.useRef)(null), saveFilter = (name) => {
    if (name == "" || name == null || name == null)
      return setNameError("Enter the Filter name");
    if (selcategory.length == 0)
      return setNameError("Select the category");
    if (selPlatform.length == 0)
      return setNameError("Select the pltforms");
    if (selCountry.length == 0)
      return setNameError("Select the country");
    for (let i = 0; i < localFilter.length; i++)
      if (name == localFilter[i].name)
        return setNameError("Filter name already exist.");
    let filter = {
      name,
      country: selCountry,
      platform: selPlatform,
      category: selcategory,
      active
    };
    setLocalFilter([...localFilter, filter]), nameFilterRef.current.value = "", setFilterName(!1);
  }, loadFilter = (filterdata) => {
    setSelcategory(filterdata.category), setSelectedPlatform(filterdata.platform), setSelCountry(filterdata.country), setActive(filterdata.active), setFilter(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex px-2 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
        searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", onClick: () => {
              setFilterName(!filterName);
            }, children: "Save filter" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: `w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-center text-sm text-slate-900 font-semibold my-2", children: "Filter name" }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("input", { ref: nameFilterRef, type: "text", className: "bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1" }),
              nameError == "" || nameError == null || nameError == null ? null : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: nameError }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { onClick: () => {
                saveFilter(nameFilterRef.current.value);
              }, className: "text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500", children: "SAVE" }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { onClick: () => {
                setFilterName(!1);
              }, className: "text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1", children: "Close" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", onClick: () => {
              setFilter(!showFilter);
            }, children: [
              "Saved filter",
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"}`, children: localFilter.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer", onClick: () => {
              loadFilter(val);
            }, children: val.name }, index2)) })
          ] })
        ] }) : null
      ] }),
      searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { className: "text-gray-600", icon: import_free_solid_svg_icons20.faSearch }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("input", { ref: champTextSearch, type: "text", className: "bg-transparent w-full outline-none py-1 px-2" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-primary text-sm font-semibold cursor-pointer", onClick: () => {
            setSearchType(1 /* AdvanceSearch */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
            " Advanced filter"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { onClick: delsearch, className: "text-primary text-2xl mx-2", icon: import_free_solid_svg_icons20.faTrash }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: () => {
            camptextsearch(champTextSearch.current.value);
          }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-32" }) })
        ] })
      ] }) : null,
      searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Category" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.categoryName} - [${value.categoryCode}]` }) }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
              setcat(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: category.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("h1", { onClick: () => {
            if (selcategory.includes(val)) {
              let addcur = selcategory.filter((data) => data != val);
              setSelcategory(addcur);
            } else
              setSelcategory([val]);
            setcat(!1);
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
            val.categoryCode,
            " - ",
            val.categoryName,
            "   "
          ] }, i)) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_switch2.default, { onChange: () => setActive(!active), checked: active, checkedIcon: !1, uncheckedIcon: !1, onColor: "#03125E" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active campaigns" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Platforms" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar py-2", children: platform.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `shrink-0 p-1 w-10 h-10 shadow-lg rounded-lg ${selPlatform.includes(val.id) ? "bg-white " : "bg-gray-200"} `, onClick: () => {
            if (selPlatform.includes(val.id)) {
              let setdata = selPlatform.filter((platdata) => platdata != val.id);
              setSelectedPlatform(setdata);
            } else
              setSelectedPlatform([...selPlatform, val.id]);
          }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("img", { src: platform[i].platformLogoUrl, alt: "error", className: "object-cover w-full h-full inline-block" }) }, i)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-primary text-left font-bold text-lg", children: "Country" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.name} - [${value.code}]` }) }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
              setcon(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: country.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("h1", { onClick: () => {
            if (selCountry.includes(val)) {
              let addcur = selCountry.filter((data) => data != val);
              setSelCountry(addcur);
            } else
              setSelCountry([val]);
            setcon(!1);
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
            val.code,
            " - ",
            val.name
          ] }, i)) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-primary text-md font-semibold cursor-pointer", onClick: () => {
              setSearchType(0 /* TextSearch */);
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
              " Text search "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { onClick: delsearch, className: "text-primary text-2xl", icon: import_free_solid_svg_icons20.faTrash }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: campadvancesearch, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" }) })
          ] })
        ] })
      ] }) : null,
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error })
    ] }),
    camSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SearchedCampaign, { data: camSearchResult }) : null
  ] }) });
}, InfluencerSearch = (props) => {
  let country = props.country, platform = props.platform, category = props.category, [searchType, setSearchType] = (0, import_react50.useState)(1 /* AdvanceSearch */), [active, setActive] = (0, import_react50.useState)(!1), [camSearchResult, setCamSearchResult] = (0, import_react50.useState)([]), champTextSearch = (0, import_react50.useRef)(null), [selCountry, setSelCountry] = (0, import_react50.useState)([]), [con, setcon] = (0, import_react50.useState)(!1), [selPlatform, setSelectedPlatform] = (0, import_react50.useState)([]), [selcategory, setSelcategory] = (0, import_react50.useState)([]), [cat, setcat] = (0, import_react50.useState)(!1), [error, setError] = (0, import_react50.useState)(null), camptextsearch = async (searchtext) => {
    if (champTextSearch.current.value = "", searchtext == "" || searchtext == null || searchtext == null)
      return setError("Fill the field to start searching");
    let req = { search: searchtext }, data = await import_axios20.default.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == !1)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  }, campadvancesearch = async () => {
    if (selcategory.length == 0)
      return setError("Select the category");
    if (selPlatform.length == 0)
      return setError("Select the pltforms");
    if (selCountry.length == 0)
      return setError("Select the country");
    let req = {
      country: selCountry[0].id,
      platform: selPlatform.join(","),
      category: selcategory[0].id,
      active: active ? "1" : "0"
    }, data = await import_axios20.default.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == !1)
      return setError(data.data.message);
    setCamSearchResult(data.data.data);
  }, delsearch = () => {
    setCamSearchResult([]);
  }, [showFilter, setFilter] = (0, import_react50.useState)(!1), [filterName, setFilterName] = (0, import_react50.useState)(!1), [nameError, setNameError] = (0, import_react50.useState)(null), [localFilter, setLocalFilter] = (0, import_use_local_storage_state2.default)("InfluencerSearch", {
    defaultValue: []
  }), nameFilterRef = (0, import_react50.useRef)(null), saveFilter = (name) => {
    if (name == "" || name == null || name == null)
      return setNameError("Enter the Filter name");
    if (selcategory.length == 0)
      return setNameError("Select the category");
    if (selPlatform.length == 0)
      return setNameError("Select the pltforms");
    if (selCountry.length == 0)
      return setNameError("Select the country");
    for (let i = 0; i < localFilter.length; i++)
      if (name == localFilter[i].name)
        return setNameError("Filter name already exist.");
    let filter = {
      name,
      country: selCountry,
      platform: selPlatform,
      category: selcategory,
      active
    };
    setLocalFilter([...localFilter, filter]), nameFilterRef.current.value = "", setFilterName(!1);
  }, loadFilter = (filterdata) => {
    setSelcategory(filterdata.category), setSelectedPlatform(filterdata.platform), setSelCountry(filterdata.country), setActive(filterdata.active), setFilter(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex px-2 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
        searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", onClick: () => {
              setFilterName(!filterName);
            }, children: "Save filter" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: `w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-center text-sm text-slate-900 font-semibold my-2", children: "Filter name" }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("input", { ref: nameFilterRef, type: "text", className: "bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1" }),
              nameError == "" || nameError == null || nameError == null ? null : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2", children: nameError }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { onClick: () => {
                saveFilter(nameFilterRef.current.value);
              }, className: "text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500", children: "SAVE" }),
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { onClick: () => {
                setFilterName(!1);
              }, className: "text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1", children: "Close" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", onClick: () => {
              setFilter(!showFilter);
            }, children: [
              "Saved filter",
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"}`, children: localFilter.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer", onClick: () => {
              loadFilter(val);
            }, children: val.name }, index2)) })
          ] })
        ] }) : null
      ] }),
      searchType == 0 /* TextSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { className: "text-gray-600", icon: import_free_solid_svg_icons20.faSearch }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("input", { ref: champTextSearch, type: "text", className: "bg-transparent w-full outline-none py-1 px-2" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-primary text-sm font-semibold cursor-pointer", onClick: () => {
            setSearchType(1 /* AdvanceSearch */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
            " Advanced filter"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { onClick: delsearch, className: "text-primary text-2xl mx-2", icon: import_free_solid_svg_icons20.faTrash }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: () => {
            camptextsearch(champTextSearch.current.value);
          }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-32" }) })
        ] })
      ] }) : null,
      searchType == 1 /* AdvanceSearch */ ? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Category" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selcategory.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.categoryName} - [${value.categoryCode}]` }) }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
              setcat(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "min-h-80 w-80 overflow-y-scroll no-scrollbar", children: category.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("h1", { onClick: () => {
            if (selcategory.includes(val)) {
              let addcur = selcategory.filter((data) => data != val);
              setSelcategory(addcur);
            } else
              setSelcategory([val]);
            setcat(!1);
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
            val.categoryCode,
            " - ",
            val.categoryName,
            "   "
          ] }, i)) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_switch2.default, { onChange: () => setActive(!active), checked: active, checkedIcon: !1, uncheckedIcon: !1, onColor: "#03125E" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active influecner" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "ml-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: "text-primary text-lg font-bold mb", children: "Platforms" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar py-2", children: platform.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `shrink-0 p-1 w-10 h-10 shadow-lg rounded-lg ${selPlatform.includes(val.id) ? "bg-white " : "bg-gray-200"} `, onClick: () => {
            if (selPlatform.includes(val.id)) {
              let setdata = selPlatform.filter((platdata) => platdata != val.id);
              setSelectedPlatform(setdata);
            } else
              setSelectedPlatform([...selPlatform, val.id]);
          }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("img", { src: platform[i].platformLogoUrl, alt: "error", className: "object-cover w-full h-full inline-block" }) }, i)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "text-primary text-left font-bold text-lg", children: "Country" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { className: " text-black font-semibold text-center w-40", children: `${value.name} - [${value.code}]` }) }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
              setcon(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faAdd }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-white p-10 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: country.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("h1", { onClick: () => {
            if (selCountry.includes(val)) {
              let addcur = selCountry.filter((data) => data != val);
              setSelCountry(addcur);
            } else
              setSelCountry([val]);
            setcon(!1);
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
            val.code,
            " - ",
            val.name
          ] }, i)) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-primary text-md font-semibold cursor-pointer", onClick: () => {
              setSearchType(0 /* TextSearch */);
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faSortDown }),
              " Text search "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { onClick: delsearch, className: "text-primary text-2xl", icon: import_free_solid_svg_icons20.faTrash }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: campadvancesearch, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" }) })
          ] })
        ] })
      ] }) : null,
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error })
    ] }),
    camSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SearchedInfluencer, { data: camSearchResult }) : null
  ] }) });
}, BrandSearch = () => {
  let [brandSearchResult, setBrandSearchResult] = (0, import_react50.useState)([]), [error, setError] = (0, import_react50.useState)(null), delsearch = () => {
    setBrandSearchResult([]);
  }, brandTextSearch = (0, import_react50.useRef)(null), brandtextsearch = async (searchtext) => {
    if (brandTextSearch.current.value = "", searchtext == "" || searchtext == null || searchtext == null)
      return setError("Fill the field to start searching");
    let req = { search: searchtext }, data = await import_axios20.default.post(`${BaseUrl}/api/search-brand`, req);
    if (data.data.status == !1)
      return setError(data.data.message);
    setBrandSearchResult(data.data.data);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h2", { className: "text-black text-xl text-left font-bold mt-2", children: "Filter" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-start lg:place-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-gray-200 rounded-md py-1 px-4 w-full flex items-center mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { className: "text-gray-600", icon: import_free_solid_svg_icons20.faSearch }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("input", { ref: brandTextSearch, type: "text", className: "bg-transparent w-full outline-none py-1 px-2" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react_fontawesome21.FontAwesomeIcon, { onClick: delsearch, className: "text-primary text-2xl mx-2", icon: import_free_solid_svg_icons20.faTrash }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { onClick: () => {
              brandtextsearch(brandTextSearch.current.value);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-32" }) })
          ] })
        ] })
      ] }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error })
    ] }),
    brandSearchResult.length != 0 ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SearchedBrand, { data: brandSearchResult }) : null
  ] });
}, SearchedCampaign = (props) => {
  let [campaignCards, setCampaignCards] = (0, import_react50.useState)([]);
  return (0, import_react50.useEffect)(() => {
    (async () => {
      let resolvedCampaignCards = await Promise.all(props.data.map(async (val, index2) => {
        let platforms = [];
        for (let i = 0; i < val.platforms.length; i++)
          platforms.push(val.platforms[i].platformLogoUrl);
        let image = val.brand.length == 0 || val.brand == null || val.brand == null || val.brand == "" || val.brand.logo == "0" || val.brand.logo == null || val.brand.logo == null || val.brand.logo == "" ? "/images/avatar/user.png" : val.brand.logo, campaignType = await getCampaignType(val.campaignTypeId);
        return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(CampaginCard, { id: val.id, weburl: val.brand.brandWebUrl, platforms, maxval: val.costPerPost.split(".")[0], category: campaignType, image, name: val.campaignName, currency: val.currency.code }) }, val.id);
      }));
      setCampaignCards(resolvedCampaignCards);
    })();
  }, [props.data]), /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
      "Found: ",
      props.data.length,
      " Campaigns "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: campaignCards })
  ] }) });
}, SearchedBrand = (props) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
    "Found: ",
    props.data.length,
    " Brand "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: props.data.map((val, index2) => {
    let avatar = val.logo, name = val.name, email = val.email;
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(BrandCard, { id: val.id, image: avatar, name, email, website: val.webUrl }) }, index2);
  }) })
] }) }), SearchedInfluencer = (props) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: [
    "Found: ",
    props.data.length,
    " Influencer "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: props.data.map((val, index2) => {
    let avatar = val.pic == "0" || val.pic == null || val.pic == null || val.pic == "" ? "/images/inf/inf14.png" : val.pic, name = val.userName;
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(influencercard_default, { image: avatar, name, star: 3 }) }, index2);
  }) })
] }) });

// app/routes/home/mycampaings.tsx
var mycampaings_exports = {};
__export(mycampaings_exports, {
  default: () => mycampaings_default,
  loader: () => loader22
});
var import_free_solid_svg_icons21 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome22 = require("@fortawesome/react-fontawesome"), import_node24 = require("@remix-run/node"), import_react52 = require("@remix-run/react"), import_axios21 = __toESM(require("axios")), import_react53 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime"), loader22 = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), userid = cookie.user.id, campdata = await (0, import_axios21.default)({
    method: "post",
    url: `${BaseUrl}/api/get-my-campaigns`,
    data: { id: userid },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  }), req = {
    search: {
      status: "3",
      influencer: userid,
      fromUser: userid
    }
  }, usercamp = await (0, import_axios21.default)({
    method: "post",
    url: `${BaseUrl}/api/search-invite`,
    data: req,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Options": "*",
      "Access-Control-Allow-Methods": "*",
      "X-Content-Type-Options": "*",
      "Content-Type": "application/json",
      Accept: "*"
    }
  });
  return (0, import_node24.json)({ userdata: cookie.user, camp: campdata.data.data, usercamp: usercamp.data.data });
}, MyCampaigns = () => {
  let [completed, setCompleted] = (0, import_react53.useState)(!1), userdata = (0, import_react52.useLoaderData)(), isBrand = userdata.userdata.role.code == "50", campdata = userdata.camp.campaigns;
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "hidden md:block md:grow" })
    ] }),
    isBrand ? /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bg-white shadow-xl rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "text-black text-center font-bold text-2xl", children: "Would you like to collaborate ?" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-full text-center bg-red", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react52.Link, { to: "/home/createcampaign", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CusButton, { text: "Create Campaign", textColor: "text-white", background: "bg-secondary" }) }) })
    ] }) : null,
    isBrand ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: completed ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CompletedCampaigns, {}) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActiveCampaign, { camp: campdata }) }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(UserDrafts, { userid: userdata.userdata.id })
  ] }) });
}, mycampaings_default = MyCampaigns, ActiveCampaign = (props) => {
  let campdata = props.camp;
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faIdBadge, className: "text-md text-secondary" }),
      " New Campaign "
    ] }),
    campdata.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "text-black font-medium text-xl text-center", children: "Here is no campaign created.." }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: campdata.map((val, i) => {
      let platforms = [];
      for (let i2 = 0; i2 < val.platforms.length; i2++)
        platforms.push(val.platforms[i2].platformLogoUrl);
      let image = val.brand.length == 0 || val.brand == null || val.brand == null || val.brand == "" || val.brand.logo == "0" || val.brand.logo == null || val.brand.logo == null || val.brand.logo == "" ? "/images/avatar/user.png" : val.brand.logo;
      return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CampaginCard, { id: val.id, currency: val.currency.code, platforms, maxval: val.costPerPost.split(".")[0], weburl: "agag", category: val.type.name, image, name: val.name }) }, i);
    }) })
  ] }) });
}, CompletedCampaigns = () => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(pastbrandcard_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(pastbrandcard_default, {})
] }) }), UserDrafts = (props) => {
  let [userDraft, setUserDraft] = (0, import_react53.useState)([]), init = async () => {
    let req = {
      search: {
        status: "3",
        influencer: props.userid,
        fromUser: props.userid
      }
    }, apidata = await (0, import_axios21.default)({
      method: "post",
      url: `${BaseUrl}/api/search-invite`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    setUserDraft(apidata.data.data);
  };
  return (0, import_react53.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faIdBadge, className: "text-md text-secondary" }),
      " New Campaign "
    ] }),
    userDraft.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't collaborated in any champaing." }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: userDraft.map((val, i) => {
      let image = val.brand.length == 0 || val.brand == null || val.brand == null || val.brand == "" || val.brand.logo == "0" || val.brand.logo == null || val.brand.logo == null || val.brand.logo == "" ? "/images/avatar/user.png" : val.brand.logo;
      return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-end gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("img", { src: image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: val.brand.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
          "email : ",
          val.brand.email
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react52.Link, { to: `/home/campaigns/${val.campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }) })
      ] }) }, i);
    }) })
  ] });
};

// app/routes/home/branduser.tsx
var branduser_exports = {};
__export(branduser_exports, {
  default: () => branduser_default
});
var import_free_solid_svg_icons22 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome23 = require("@fortawesome/react-fontawesome"), import_react54 = require("@remix-run/react"), import_jsx_runtime59 = require("react/jsx-runtime"), BarndUser = () => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "my-4 p-8 bg-white rounded-lg flex flex-col lg:flex-row gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-col gap-4 md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "w-60", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "adidas", className: "w-20 h-20 rounded-md" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { className: "text-black font-bold text-2xl mt-2", children: "Lulu 50% of SPORT WEEK" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Platforms" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/media/apple.png", alt: "", className: "h-8 w-8 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/media/youtube.png", alt: "", className: "h-8 w-8 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/media/instagram.png", alt: "", className: "h-8 w-8 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/media/facebook.png", alt: "", className: "h-8 w-8 rounded-md" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "w-80", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-left font-semibold text-primary text-md", children: "Info" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-left font-semibold text-black text-sm", children: `Hirschi's social media presence allows automotive brands like Bugatti and Ferrari to advertise their products through her. Instead of being an automotive journalist, she states that she provides "insight into the supercar culture and what it\u2019s like to drive these incredible cars in a light, fun way."[4] Being one of the few women in supercar culture, she also opens up the demographic for these vehicles. In March 2018, Arabian Business listed her as one of the 50 Most Influential Women In The Arab World,[8] and it nominated her in 2019 as one of Top 30 most influential women in the Arab world.[9] Also in March 2018, Esquire Magazine Middle East named her Influencer of the Year.[10] She appeared on Germany's free to air TV RTL II on the car show GRIP Das Automagazin on 10 June 2018, co-presenting the one-off Bugatti L'Or Blanc and the La Ferrari Aperta.[11] In January 2019, Broadcasting & Cable announced Hirschi will be hosting their new car TV show Car Crews.[12] The show is released on Insight TV and focuses on uncovering different car cultures across the United States.[13] She drove the official Batmobile from the feature film Batman (1989).[4] In 2020 Hirschi won a Shorty Award for Breakout YouTuber.[14]` }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "bg-gray-200 rounded-md p-4 mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("p", { className: "text-black font-bold text-md", children: [
            "Do's : ",
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "text-sm font-normal", children: "Energetic face | Spotiy | Action" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-400 h-[1px] w-full my-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("p", { className: "text-black font-bold text-md", children: [
            "Dont's :",
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "text-sm font-normal", children: "Low quality" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "grow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex w-full gap-2 flex-col sm:flex-row lg:flex-col xl:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/brand/hilton.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: "/images/brand/lucent.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Attachments" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h3", { className: "text-black font-semibold  text-md", children: "some text" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "grow" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons22.faPaperclip }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "mt-4 w-200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Hashtags" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex gap-4 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-300 py-1 px-2 rounded-md", children: "#Adidasoriginals" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-300 py-1 px-2 rounded-md", children: "#impossibleisNothing" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-300 py-1 px-2 rounded-md", children: "#Sporty" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-300 py-1 px-2 rounded-md", children: "#Yesadidas" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "bg-gray-300 py-1 px-2 rounded-md", children: "#impossibleisNothing" })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react54.Outlet, {})
] }), branduser_default = BarndUser;

// app/routes/home/branduser/influencers.tsx
var influencers_exports = {};
__export(influencers_exports, {
  default: () => influencers_default
});
var import_react55 = require("@remix-run/react");
var import_jsx_runtime60 = require("react/jsx-runtime"), Influencers = () => /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(import_jsx_runtime60.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "flex gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react55.Link, { to: "/home/branduser", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Snapshot" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react55.Link, { to: "/home/branduser/influencers", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer", children: "Influencers" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react55.Link, { to: "/home/branduser/payments", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Payments" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 place-items-center bg-white rounded-lg p-6 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(influencercard_default, { star: 3, image: "/images/inf/inf6.png", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(influencercard_default, { star: 5, image: "/images/inf/inf2.png", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(influencercard_default, { star: 3, image: "/images/inf/inf3.png", name: "Adidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(influencercard_default, { star: 4, image: "/images/inf/inf14.png", name: "Adidas" })
  ] })
] }), influencers_default = Influencers;

// app/routes/home/branduser/payments.tsx
var payments_exports = {};
__export(payments_exports, {
  default: () => payments_default
});
var import_free_solid_svg_icons23 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome24 = require("@fortawesome/react-fontawesome"), import_react56 = require("@remix-run/react"), import_jsx_runtime61 = require("react/jsx-runtime"), Payments = () => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react56.Link, { to: "/home/branduser", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Snapshot" }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react56.Link, { to: "/home/branduser/influencers", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Influencers" }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react56.Link, { to: "/home/branduser/payments", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer", children: "Payments" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "overflow-x-scroll no-scrollbar my-4 rounded-md p-4 block bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "flex bg-gray-200 p-2 rounded-lg px-4", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex gap-2 w-90 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react_fontawesome24.FontAwesomeIcon, { className: "text-gray-600", icon: import_free_solid_svg_icons23.faSearch }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { type: "text", placeholder: "Search", className: "placeholder:text-gray-600 bg-transparent" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex bg-gray-200 rounded-lg py-2 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-black", children: "Jun 30 - Jul 06, 2022" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react_fontawesome24.FontAwesomeIcon, { className: "text-primary", icon: import_free_solid_svg_icons23.faCalendar }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("table", { className: "table-auto w-full min-w-[800px]", style: {
      borderCollapse: "separate",
      borderSpacing: "0 1em"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("tr", { style: { padding: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 py-4 rounded-l-lg min-w-44 text-primary text-md font-semibold", children: "Influencer" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign details" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Target" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Amount" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("th", { className: "bg-gray-200 rounded-r-lg min-w-44 text-primary text-md font-semibold", children: "Amount Released" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("tbody", { children: [
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf1.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        },
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf2.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        },
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf3.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        },
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf4.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        },
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf5.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        },
        {
          name: "San Joe",
          camppaign: ["/images/inf/inf6.png"],
          details: ["puma", "Dec 31, 2021"],
          target: "3 M",
          amount: "7500 USD",
          amountres: "1200 USD"
        }
      ].map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("tr", { style: { border: "2px solid black !important" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: "text-primary text-md font-semibold text-center", children: val.name }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: "text-center gird place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "grid place-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("img", { src: val.camppaign[0], alt: "error", className: "w-20 h-20 rounded-lg object-cover" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: " text-center grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-left font-semibold text-md", children: val.details[0] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-left font-normal text-sm", children: val.details[1] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.target }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.amount }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.amountres })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("td", { colSpan: 6, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "bg-gray-300 w-full h-[1px]" }) }) })
      ] })) })
    ] })
  ] })
] }), payments_default = Payments;

// app/routes/home/branduser/index.tsx
var branduser_exports2 = {};
__export(branduser_exports2, {
  default: () => branduser_default2
});
var import_react57 = require("@remix-run/react");

// app/components/utils/brandactioncard.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
var BrandActionCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_jsx_runtime62.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full flex flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "flex items-start gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-14 h-14 rounded-md" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-black font-semibold text-md content-end text-left", children: "Thanawan Chadee" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: "/images/media/instagram.png", alt: "instagram", className: "w-4 h-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "px-2 text-blue-500 font-normal text-sm content-end text-left", children: "Chiris_Or" })
      ] })
    ] })
  ] }),
  props.cardtype == 0 /* Normal */ ? /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "my-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-xs font-normal text-gray-400", children: "Status: Draft submitted" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-black text-left text-md font-medium mt-2", children: "Moodboard" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "flex gap-x-4 my-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: "/images/brand/hilton.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: "/images/brand/lucent.jpg", alt: "error", className: "h-14 w-14 rounded-md" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("p", { className: "text-xs font-normal text-gray-400", children: [
      "Pubicatio date: ",
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: "June 20 at 15:00" })
    ] })
  ] }) : null,
  props.cardtype == 1 /* Panding */ ? /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "my-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-xs font-normal text-gray-400 mt-2", children: "Status: Campaign Live" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("p", { className: "text-xs font-normal text-gray-400 mt-2", children: [
      "Publication date: ",
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text-black", children: "June 20 at 15:00" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("p", { className: "text-xs font-normal text-gray-400 mt-2", children: [
      "Cost: ",
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text-pink-500 font-semibold", children: "Receipt" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text-black font-semibold px-2", children: "(150 GBP)" })
    ] })
  ] }) : null,
  props.cardtype == 2 /* Accept */ ? /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "my-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-center text-sm font-semibold", children: "2 00 5887" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-center text-xs font-normal", children: "Reach" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "h-10 w-[1px] bg-slate-900" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-center text-sm font-semibold", children: "1 34 9887" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "text-center text-xs font-normal", children: "Impression" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("p", { children: [
      "USD 400 ",
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "font-normal", children: "per post" })
    ] }) })
  ] }) : null,
  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "grow" }),
  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(CusButton, { text: "preview publication draft", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-1", fontwidth: "font-normal", textSize: "text-sm" })
] }) }), brandactioncard_default = BrandActionCard;

// app/components/utils/brandprogresscard.tsx
var import_jsx_runtime63 = require("react/jsx-runtime"), BrandProgressCard = () => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_jsx_runtime63.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex items-start gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("img", { src: "/images/brand/adidas.jpg", alt: "error", className: "object-cover w-14 h-14 rounded-md" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("p", { className: "text-black font-semibold text-md content-end text-left", children: "Thanawan Chadee" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("img", { src: "/images/media/instagram.png", alt: "instagram", className: "w-4 h-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("p", { className: "px-2 text-blue-500 font-normal text-sm content-end text-left", children: "Chiris_Or" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "my-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-right text-xs font-normal text-gray-400", children: "Status:" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-left text-xs font-normal text-gray-400", children: "Darft accepted publication pending" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-right text-xs font-normal text-gray-400", children: "Publication Date" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-left text-xs font-normal text-gray-800", children: "Jan 20 at 15:00" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-right text-xs font-normal text-gray-400", children: "Cost:" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "w-[50%] text-left text-xs font-normal text-gray-800", children: "150 GBP" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(CusButton, { text: "Sent message", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" })
] }) }), brandprogresscard_default = BrandProgressCard;

// app/routes/home/branduser/index.tsx
var import_jsx_runtime64 = require("react/jsx-runtime"), Snapshot = () => /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_jsx_runtime64.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "flex gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react57.Link, { to: "./", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer", children: "Snapshot" }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react57.Link, { to: "./influencers", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Influencers" }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react57.Link, { to: "./payments", className: "rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer", children: "Payments" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "bg-white m-4 rounded-md p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { className: "text-black text-md font-normal", children: "Action required" }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandactioncard_default, { cardtype: 0 /* Normal */ }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandactioncard_default, { cardtype: 1 /* Panding */ }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandactioncard_default, { cardtype: 2 /* Accept */ }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandactioncard_default, { cardtype: 0 /* Normal */ })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "bg-white m-4 rounded-md p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { className: "text-black text-md font-normal", children: "In progress" }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandprogresscard_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(brandprogresscard_default, {})
    ] })
  ] })
] }), branduser_default2 = Snapshot;

// app/routes/home/favourite.tsx
var favourite_exports = {};
__export(favourite_exports, {
  FavBrandCard: () => FavBrandCard,
  default: () => favourite_default
});
var import_react58 = require("@remix-run/react"), import_use_local_storage_state3 = __toESM(require("use-local-storage-state"));
var import_jsx_runtime65 = require("react/jsx-runtime"), Favourite = () => {
  let [myfavBrand, setMyfavBrand] = (0, import_use_local_storage_state3.default)("favbrand", {
    defaultValue: []
  });
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_jsx_runtime65.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "flex my-6 md:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Favourite brands" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." })
    ] }) }),
    myfavBrand.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("p", { className: "text-xl font-slate-900", children: "You have no favorite brands." }) }) : /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "flex bg-white rounded-xl shadow-xl p-6 my-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("p", { className: "text-xl font-slate-900", children: [
          "Found : ",
          myfavBrand.length
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("button", { className: "text-lg text-center bg-red-500 py-1 px-2 text-white font-bold rounded-md", onClick: () => {
          setMyfavBrand([]);
        }, children: "Clear All" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: myfavBrand.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(FavBrandCard, { id: val.id, name: val.name, image: val.logo }) }, index2)) })
    ] })
  ] }) });
}, favourite_default = Favourite, FavBrandCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_jsx_runtime65.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react58.Link, { to: `/home/brand/${props.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }) })
] }) });

// app/routes/home/user.$id.tsx
var user_id_exports = {};
__export(user_id_exports, {
  default: () => user_id_default,
  loader: () => loader23
});
var import_free_solid_svg_icons24 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome25 = require("@fortawesome/react-fontawesome"), import_node25 = require("@remix-run/node"), import_react59 = require("@remix-run/react"), import_axios22 = __toESM(require("axios")), import_react60 = require("react");
var import_jsx_runtime66 = require("react/jsx-runtime");
var loader23 = async (props) => {
  let id = props.params.id, userinsights = await (0, import_axios22.default)({
    method: "post",
    url: `${BaseUrl}/api/user-analytics`,
    data: {
      id
    }
  }), userdata = await import_axios22.default.post(`${BaseUrl}/api/getuser`, { id });
  return (0, import_node25.json)({ user: userdata.data.data[0], userinsights: userinsights.data.data.profile });
}, BrandPage2 = () => {
  let user = (0, import_react59.useLoaderData)().user, userinsights = (0, import_react59.useLoaderData)().userinsights, [userDetails, setUserDetails] = (0, import_react60.useState)(0 /* insights */), avatar = user.pic == "0" || user.pic == null || user.pic == null || user.pic == "" ? "/images/avatar/user.png" : user.pic, [error, setError] = (0, import_react60.useState)(null), messageRef = (0, import_react60.useRef)(null), [connectBox, setConnectBox] = (0, import_react60.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`, style: { zIndex: 100 }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { onClick: () => {
          setConnectBox(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons24.faRemove, className: "font-bold text-2xl text-center text-primary" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("textarea", { ref: messageRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }),
      error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { onClick: async () => {
          var _a, _b, _c, _d;
          if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == null || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
            return setError("Message can't be blank");
          let req = {
            campaignDraftId: "0",
            fromUserId: user.id,
            toUserId: "89",
            comment: (_d = messageRef.current) == null ? void 0 : _d.value
          }, data = await (0, import_axios22.default)({
            method: "post",
            url: `${BaseUrl}/api/add-chat`,
            data: req,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Options": "*",
              "Access-Control-Allow-Methods": "*",
              "X-Content-Type-Options": "*",
              "Content-Type": "application/json",
              Accept: "*"
            }
          });
          return data.data.status ? setConnectBox(!1) : setError(data.data.message);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "w-full h-60 object-cover rounded-t-xl" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("img", { src: avatar, alt: "user avatar", className: "w-32 h-32 rounded-md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h1", { className: "text-black text-lg font-medium my-2", children: user.userName }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h1", { className: "text-gray-600 text-sm font-medium my-2", children: user.knownAs }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-gray-800 text-md font-normal", children: user.email }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { onClick: () => {
              setConnectBox(!0);
            }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(CusButton, { text: "Message", background: "bg-secondary", fontwidth: "font-bold" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "User Bio" }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-black text-sm font-normal", children: user.bio })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex mx-4 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { onClick: () => {
        setUserDetails(0 /* insights */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(CusButton, { text: "Insights", background: `${userDetails == 0 /* insights */ ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${userDetails == 0 /* insights */ ? "text-black" : "text-gray-600"}` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { onClick: () => {
        setUserDetails(1 /* payments */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(CusButton, { text: "Payments", background: `${userDetails == 1 /* payments */ ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${userDetails == 1 /* payments */ ? "text-black" : "text-gray-600"}` }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      userDetails == 0 /* insights */ ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Insights, { insights: userinsights }) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, {}),
      userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Payments2, {}) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, {})
    ] })
  ] });
}, user_id_default = BrandPage2, Insights = (props) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "my-4 rounded-md p-4 bg-white flex gap-8 flex-wrap justify-center align-middle", children: [
  /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-slate-900 text-lg font-semibold", children: "Audience gender" }),
    props.insights.audience.genders.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: val.code }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight })
    ] }, index2))
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Audience age" }),
    props.insights.audience.ages.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: val.code }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight })
    ] }, index2))
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Audience country" }),
    props.insights.audience.geoCountries.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("p", { className: "text-primary text-md font-semibold text-left", children: [
        "[",
        val.code,
        "] - ",
        val.name
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight })
    ] }, index2))
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Average Result" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Posts Count" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.postsCount })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Followers" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.followers })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Engagement" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.engagements })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Engagements Rate" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.engagementRate })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Average Comments" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.avgComments })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-left", children: "Average View" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grow" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.avgViews })
    ] })
  ] })
] }) }), Payments2 = () => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "overflow-x-scroll no-scrollbar my-4 rounded-md p-4 block bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("table", { className: "table-auto w-full min-w-[800px]", style: {
  borderCollapse: "separate",
  borderSpacing: "0 1em"
}, children: [
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("tr", { style: { padding: "10px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 py-4 rounded-l-lg min-w-44 text-primary text-md font-semibold", children: "Influencer" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign details" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Target" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Amount" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("th", { className: "bg-gray-200 rounded-r-lg min-w-44 text-primary text-md font-semibold", children: "Amount Released" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("tbody", { children: [
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf1.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    },
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf2.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    },
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf3.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    },
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf4.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    },
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf5.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    },
    {
      name: "San Joe",
      camppaign: ["/images/inf/inf6.png"],
      details: ["puma", "Dec 31, 2021"],
      target: "3 M",
      amount: "7500 USD",
      amountres: "1200 USD"
    }
  ].map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("tr", { style: { border: "2px solid black !important" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: "text-primary text-md font-semibold text-center", children: val.name }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: "text-center gird place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "grid place-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("img", { src: val.camppaign[0], alt: "error", className: "w-20 h-20 rounded-lg object-cover" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: " text-center grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-left font-semibold text-md", children: val.details[0] }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-left font-normal text-sm", children: val.details[1] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.target }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.amount }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { className: " text-center text-primary text-md font-semibold", children: val.amountres })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("td", { colSpan: 6, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "bg-gray-300 w-full h-[1px]" }) }) })
  ] })) })
] }) }) });

// app/routes/home/drafts.tsx
var drafts_exports = {};
__export(drafts_exports, {
  default: () => drafts_default,
  loader: () => loader24
});
var import_node26 = require("@remix-run/node"), import_react61 = require("@remix-run/react"), import_axios23 = __toESM(require("axios")), import_react62 = require("react");
var import_jsx_runtime67 = require("react/jsx-runtime"), loader24 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node26.json)({ user: cookie.user });
}, UserDrafts2 = () => {
  let userid = (0, import_react61.useLoaderData)().user.id, [resDarft, setResDarft] = (0, import_react62.useState)([]), init = async () => {
    let req = {
      search: {
        fromUser: userid,
        influencer: userid
      }
    }, responseData = await import_axios23.default.post(`${BaseUrl}/api/search-draft`, req);
    responseData.data.status == !0 && setResDarft(responseData.data.data);
  };
  return (0, import_react62.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "p-4 rounded-xl shadow-xl bg-white my-4", children: resDarft.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { children: "You haven't created any drafts yet." }) : /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "text-md font-medium", children: "User Created draft" }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "w-full bg-gray-400 h-[1px] my-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "grid mt-4 place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: resDarft.map((val, index2) => {
      let image = val.brand.length == 0 || val.brand == null || val.brand == null || val.brand == "" || val.brand.logo == "0" || val.brand.logo == null || val.brand.logo == null || val.brand.logo == "" ? "/images/avatar/user.png" : val.brand.logo;
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "my-2 p-4 bg-white rounded-lg shadow-lg w-60", children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("img", { src: image, alt: "influencer pic", className: "w-10 h-10 shrink-0 rounded-md" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "ml-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "text-md font-medium", children: val.brand.name }),
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "text-sm font-medium", children: val.brand.email })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "mt-2 text-md font-medium", children: "Description" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "text-sm font-medium", children: val.description }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "mt-2 text-md font-medium", children: "Attachment" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("a", { target: "_blank", className: "mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500", href: val.attach01, children: "View pdf" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: "mt-2 text-md font-medium", children: "Status" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("p", { className: `mt-2 text-md text-white font-medium text-center rounded-md ${val.status.name == "ACCEPTED" ? "bg-green-500" : val.status.name == "PENDING" ? "bg-yellow-500" : "bg-red-500"}`, children: val.status.name })
      ] }, index2);
    }) })
  ] }) }) });
}, drafts_default = UserDrafts2;

// app/routes/home/invite.tsx
var invite_exports = {};
__export(invite_exports, {
  default: () => invite_default,
  loader: () => loader25
});
var import_react63 = require("react"), EmailValidator5 = __toESM(require("email-validator")), import_node27 = require("@remix-run/node");
var import_react64 = require("@remix-run/react"), import_axios24 = __toESM(require("axios"));
var import_jsx_runtime68 = require("react/jsx-runtime"), loader25 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node27.json)({ user: cookie.user });
}, Invite = () => {
  let isSubmitting = (0, import_react64.useTransition)().state === "submitting", userId = (0, import_react64.useLoaderData)().user.id, nameRef = (0, import_react63.useRef)(null), emailRef = (0, import_react63.useRef)(null), [contactnumber, setContactnumber] = (0, import_react63.useState)(), [error, setError] = (0, import_react63.useState)(""), [refstatus, setRefStatus] = (0, import_react63.useState)([]), [sus, setSus] = (0, import_react63.useState)(""), handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  }, init = async () => {
    let data = await (0, import_axios24.default)({
      method: "get",
      url: `${BaseUrl}/api/user-referrals/${userId}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    setRefStatus(data.data.data[0].refferrals);
  };
  return (0, import_react63.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", {}),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "grid place-items-center w-full bg-yellow-500 rounded-xl shadow-xl my-6", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("img", { src: "/images/cashgirl.png", alt: "error", className: "h-72" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "flex gap-4 grow flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "bg-white rounded-lg shadow-xl p-4 lg:w-96", children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("h1", { className: "text-black text-xl font-bold text-left", children: "Refer an influencer or brand" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "text-black text-left font-normal text-md", children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("input", { ref: nameRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("input", { ref: emailRef, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "text-black text-left font-normal text-md mt-4", children: "Contact Number" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }),
          error == "" || error == null || error == null ? null : /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }),
          sus == "" || sus == null || sus == null ? null : /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4", children: sus }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: " my-2", onClick: async () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            if (((_a = nameRef.current) == null ? void 0 : _a.value) == null || ((_b = nameRef.current) == null ? void 0 : _b.value) == null || ((_c = nameRef.current) == null ? void 0 : _c.value) == "")
              setError("Fill user name");
            else if (((_d = emailRef.current) == null ? void 0 : _d.value) == null || ((_e = emailRef.current) == null ? void 0 : _e.value) == null || ((_f = emailRef.current) == null ? void 0 : _f.value) == "")
              setError("Fill the Brand info");
            else if (!EmailValidator5.validate((_g = emailRef.current) == null ? void 0 : _g.value))
              setError("Enter valid email");
            else if (contactnumber == null || contactnumber == null || contactnumber == 0)
              setError("Fill the contact number");
            else if (contactnumber.toString().length != 10)
              setError("Enter a 10 degit valid contact number");
            else {
              let req = {
                userId,
                name: (_h = nameRef.current) == null ? void 0 : _h.value,
                email: (_i = emailRef.current) == null ? void 0 : _i.value,
                contact: contactnumber
              }, data = await (0, import_axios24.default)({
                method: "post",
                url: `${BaseUrl}/api/send-referral`,
                data: req,
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Headers": "*",
                  "Access-Control-Allow-Options": "*",
                  "Access-Control-Allow-Methods": "*",
                  "X-Content-Type-Options": "*",
                  "Content-Type": "application/json",
                  Accept: "*"
                }
              });
              if (data.data.status == !1)
                return setError(data.data.message);
              setError(""), nameRef.current.value = "", emailRef.current.value = "", setContactnumber(void 0), setSus("Invitation has been send.");
            }
          }, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("button", { className: "w-full text-center text-xl rounded-md my-2 py-1 text-primary font-bold bg-[#01FFF4]", children: "Invite " }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "bg-white rounded-lg shadow-xl p-4 grow w-full overflow-x-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("h1", { className: "text-black text-xl font-bold text-left", children: "Referral status" }),
          refstatus.length == 0 ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_jsx_runtime68.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("h1", { className: "text-black text-md font-semibold text-center", children: "Your referral list is empty " }) }) : /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("table", { className: "md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("thead", { className: "w-full bg-gray-100 rounded-xl p-2", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-20" }),
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left w-40", children: "Name" }),
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Contact" }),
              /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("th", { scope: "col", className: "mt-2 font-normal p-2 text-left", children: "Status" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("tbody", { className: "gap-y-4", children: refstatus.map((val, index2) => {
              let avatar = val.pic == "0" || val.pic == null || val.pic == null || val.pic == "" ? "/images/avatar/user.png" : val.pic;
              return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("img", { src: avatar, alt: "error", className: "w-12 h-12 rounded-md object-cover" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("td", { children: val.userName }),
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("td", { children: val.email }),
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("td", { children: val.contact }),
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("td", { className: "font-medium", children: val.status.isVerified })
              ] }, index2);
            }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}, invite_default = Invite;

// app/routes/home/empty.tsx
var empty_exports = {};
__export(empty_exports, {
  default: () => empty_default
});
var import_free_solid_svg_icons25 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome26 = require("@fortawesome/react-fontawesome"), import_jsx_runtime69 = require("react/jsx-runtime"), Empty = () => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_jsx_runtime69.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "p-10 rounded-xl shadow-xl w-72 pt-28 bg-white", children: [
  /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react_fontawesome26.FontAwesomeIcon, { className: "text-black font-bold text-4xl", icon: import_free_solid_svg_icons25.faSearch }),
  /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("h1", { className: "font-semibold text-lg text-black", children: "To earn more money?" }),
  /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "font-normal text-sm text-black", children: "Search, apply for public campaigns and create more great content" })
] }) }), empty_default = Empty;

// app/routes/home/inbox.tsx
var inbox_exports = {};
__export(inbox_exports, {
  default: () => inbox_default,
  loader: () => loader26
});
var import_react65 = require("react"), import_node28 = require("@remix-run/node");
var import_react66 = require("@remix-run/react"), import_axios25 = __toESM(require("axios"));
var import_jsx_runtime70 = require("react/jsx-runtime"), loader26 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader);
  return (0, import_node28.json)({ user: cookie.user });
}, Invite2 = () => {
  let userdata = (0, import_react66.useLoaderData)(), userId = userdata.user.id, [msgIds, setMsgIds] = (0, import_react65.useState)([]), [messages, setMessages] = (0, import_react65.useState)([]), [user, setUser] = (0, import_react65.useState)(), init = async () => {
    let req = {
      search: { fromToUser: import_react65.useId }
    }, data = await import_axios25.default.post(`${BaseUrl}/api/search-chat`, req);
    if (data.data.status == !0)
      for (let i = 0; i < data.data.data.length; i++) {
        let fromId = data.data.data[i].fromUser.id, toId = data.data.data[i].toUser.id;
        fromId == userId && (msgIds.includes(toId) || (setMsgIds([...msgIds, toId]), setMessages([...messages, data.data.data[i]]))), toId == userId && (msgIds.includes(fromId) || (setMsgIds([...msgIds, fromId]), setMessages([...messages, data.data.data[i]])));
      }
  };
  return (0, import_react65.useEffect)(() => {
    init();
  }), /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "flex gap-4 flex-col xl:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "w-full flex lg:flex-row flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-full bg-white rounded-lg shadow-xl lg:w-80 p-2 max-h-screen overflow-y-scroll no-scrollbar min-h-screen", children: messages.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { onClick: () => {
        setUser({
          name: val.fromUser.id == userId ? val.toUser.name.toString().split("@")[0] : val.fromUser.name.toString().split("@")[0],
          avatar: val.fromUser.id == userId ? val.toUser.pic : val.fromUser.pic,
          userid: val.fromUser.id == userId ? val.toUser.id : val.fromUser.id,
          index: index2.toString()
        });
      }, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(UserMessage, { active: (user == null ? void 0 : user.index) == index2.toString(), name: val.fromUser.id == userId ? val.toUser.name.toString().split("@")[0] : val.fromUser.name.toString().split("@")[0], message: `${val.fromUser.id == userId ? "you: " : ""} ${val.comment}`, url: val.fromUser.id == userId ? val.toUser.pic : val.fromUser.pic }) }, index2)) }),
      user != null ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(ChatBox, { avatar: user.avatar, id: user.userid, userId, name: user.name, useravatar: userdata.user.pic }) : null
    ] }),
    user != null ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(UserCard, { id: user.userid }) : null
  ] }) }) });
}, inbox_default = Invite2, UserMessage = (props) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: `flex w-full py-2 my-1 border-b-2 rounded-md ${props.active ? "bg-gray-200 px-4" : "border-slate-200"}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("img", { src: props.url, alt: "user images", className: "w-10 h-10 object-cover rounded-lg shrink-0" }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-2" }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-md font-medium  leading-none text-slate-800", children: props.name }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-sm font-normal leading-none text-slate-600", children: props.message })
  ] })
] }) }), Message = (props) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "w-full flex items-start my-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: `grow ${props.user ? "" : "hidden"}` }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("img", { src: props.avatar, alt: "avatar", className: `w-10 h-10 rounded-md ${props.user ? "order-3" : ""}` }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: `w-4 ${props.user ? "order-2" : ""}` }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "max-w-4/5 bg-gray-200 rounded-md p-2 order-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: `text-xs text-gray-700 font-normal ${props.user ? "text-right" : "text-left"}`, children: props.time }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: `text-md text-gray-900 font-normal text-left ${props.user ? "text-right" : "text-left"}`, children: props.message })
  ] })
] }) }), UserCard = (props) => {
  let [userdata, setUserdata] = (0, import_react65.useState)(null), init = async () => {
    let userdata2 = await (0, import_axios25.default)({
      method: "post",
      url: `${BaseUrl}/api/getuser`,
      data: { id: props.id }
    });
    userdata2.data.status == !0 && setUserdata(userdata2.data.data[0]);
  };
  (0, import_react65.useEffect)(() => {
    init();
  }, []);
  let navigator = (0, import_react66.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: userdata == null ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "bg-white rounded-lg shadow-xl", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("h1", { className: "text-center font-semibold text-rose-500 p-4", children: "No user found" }) }) : /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "bg-white rounded-lg shadow-xl flex w-full xl:w-80 xl:flex-col flex-col sm:flex-row items-start p-4 xl:px-0 xl:pt-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-80 h-80 shrink-0 mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("img", { src: userdata.pic, alt: "error", className: "w-full h-80 object-cover rounded-lg" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "px-4 mt-6 sm:mt-0 grow w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-left font-semibold text-lg text-slate-800", children: userdata.userName.toString().split("@")[0] }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-left font-semibold text-sm text-slate-600 mt-4", children: "Bio" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-left font-normal text-sm text-slate-600 mt-4", children: userdata.bio }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("button", { onClick: () => {
        navigator("/home/branduser");
      }, className: " mt-2 w-full py-2 text-center text-primary font-semibold text-lg bg-[#01FFF4] rounded-md", children: "View profile" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "h-[1px] bg-slate-400 my-4 w-full" })
    ] })
  ] }) });
}, ChatBox = (props) => {
  let chatBoxRef = (0, import_react65.useRef)(null), chatText = (0, import_react65.useRef)(null), [message, setMessage] = (0, import_react65.useState)([]), [changedata, setChangeData] = (0, import_react65.useState)(!1), init = async () => {
    setMessage([]);
    let user1 = {
      search: {
        fromUser: props.id,
        toUser: props.userId
      }
    }, user2 = {
      search: {
        fromUser: props.userId,
        toUser: props.id
      }
    }, user1data = await (0, import_axios25.default)({
      method: "post",
      url: `${BaseUrl}/api/search-chat`,
      data: user1
    }), user2data = await (0, import_axios25.default)({
      method: "post",
      url: `${BaseUrl}/api/search-chat`,
      data: user2
    });
    setMessage((prevState) => [...prevState, ...user1data.data.data, ...user2data.data.data]), setMessage((prevState) => prevState.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };
  (0, import_react65.useEffect)(() => {
    var _a;
    chatBoxRef.current.scrollTop = (_a = chatBoxRef.current) == null ? void 0 : _a.scrollHeight, init();
  }, [changedata]);
  let sendMessage = async (msg) => {
    let req = {
      campaignDraftId: "0",
      fromUserId: props.userId,
      toUserId: props.id,
      comment: msg
    }, data = await (0, import_axios25.default)({
      method: "post",
      url: `${BaseUrl}/api/add-chat`,
      data: req,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    setChangeData(!changedata);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "bg-white rounded-lg shadow-xl w-full p-4 max-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("img", { src: props.avatar, className: "w-10 h-10 rounded-md", alt: "avatar" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: "text-md font-semibold text-slate-900 ", children: props.name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-full h-[2px] my-2 bg-slate-300" }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { ref: chatBoxRef, className: "w-full h-full overflow-y-scroll grow no-scrollbar", children: message.reverse().map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Message, { avatar: val.fromUser.id == props.userId ? props.useravatar : props.avatar, message: val.comment, time: val.updatedAt, user: val.fromUser.id == props.userId }) }, index2)) }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-full px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: " bg-gray-200 rounded-md px-2 py-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("input", { ref: chatText, type: "text", className: "py-1 w-full px-2 bg-transparent outline-none", placeholder: "type something" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("button", { className: "bg-primary rounded-md text-white  text-md py-1 px-4 font-semibold", onClick: async () => {
        var _a, _b, _c, _d;
        ((_a = chatText.current) == null ? void 0 : _a.value) == null || ((_b = chatText.current) == null ? void 0 : _b.value) == null || ((_c = chatText.current) == null ? void 0 : _c.value) == "" || (await sendMessage((_d = chatText.current) == null ? void 0 : _d.value), chatText.current.value = "");
      }, children: "SEND" })
    ] }) })
  ] }) });
};

// app/routes/home/index.tsx
var home_exports2 = {};
__export(home_exports2, {
  default: () => home_default2,
  loader: () => loader27
});
var import_free_solid_svg_icons27 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome28 = require("@fortawesome/react-fontawesome"), import_node29 = require("@remix-run/node"), import_react67 = require("@remix-run/react"), import_axios26 = __toESM(require("axios")), import_react68 = require("react");

// app/state/home/profilecompletestat.ts
var import_zustand8 = require("zustand"), ProfileComleteStore = (0, import_zustand8.create)()((set) => ({
  isOpen: !0,
  change: (value) => set((state) => ({ isOpen: value }))
})), profilecompletestat_default = ProfileComleteStore;

// app/components/utils/topinfluencercard.tsx
var import_react_fontawesome27 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons26 = require("@fortawesome/free-solid-svg-icons"), import_jsx_runtime71 = require("react/jsx-runtime"), TopInfluencerCard = (props) => {
  let Star = () => {
    let fullStars = Math.floor(props.star), fractionalStar = props.star - fullStars, stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react_fontawesome27.FontAwesomeIcon, { className: "text-xs text-pink-500", icon: import_free_solid_svg_icons26.faStar }, i)
      );
    fractionalStar > 0 && stars.push(
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        import_react_fontawesome27.FontAwesomeIcon,
        {
          className: "text-xs text-pink-500",
          icon: import_free_solid_svg_icons26.faStar,
          style: { width: `${fractionalStar * 100}%` }
        },
        fullStars
      )
    );
    for (let i = 0; i < 5 - fullStars; i++)
      stars.push(
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          import_react_fontawesome27.FontAwesomeIcon,
          {
            className: "text-xs text-gray-300",
            icon: import_free_solid_svg_icons26.faStar
          },
          5 + i
        )
      );
    return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: stars });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("img", { src: props.image, alt: "error", className: "w-full h-40 object-cover rounded-t-md" }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex items-start my-2 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-black font-semibold text-sm text-left", children: props.name.split("@")[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Star, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("p", { className: "text-black font-bold  text-md text-right", children: [
          "3500 ",
          props.currency,
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("br", {}),
          " ",
          props.dob
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "my-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-center text-sm font-semibold", children: "2 00 5887" }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-center text-xs font-normal", children: "Reach" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "h-10 w-[1px] bg-slate-900" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-center text-sm font-semibold", children: "1 34 9887" }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-center text-xs font-normal", children: "Impression" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("p", { children: [
          "SWRV score :  ",
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { className: "font-normal", children: "2005887" })
        ] }) })
      ] })
    ] })
  ] }) });
}, topinfluencercard_default = TopInfluencerCard;

// app/routes/home/index.tsx
var import_jsx_runtime72 = require("react/jsx-runtime"), loader27 = async (props) => {
  let cookieHeader = props.request.headers.get("Cookie"), cookie = await userPrefs.parse(cookieHeader), platformRes = await import_axios26.default.post(`${BaseUrl}/api/getplatform`), categoryRes = await import_axios26.default.post(`${BaseUrl}/api/getcategory`), countryRes = await import_axios26.default.post(`${BaseUrl}/api/getcountry`);
  return (0, import_node29.json)({ user: cookie.user, platform: platformRes.data.data, category: categoryRes.data.data, country: countryRes.data.data });
}, HomePage2 = () => {
  let user = (0, import_react67.useLoaderData)(), profilecomplted = user.user.profileCompleteness, isbrand = user.user.role.code != 10, isOpen = profilecompletestat_default((state) => state.isOpen), isOpenChange = profilecompletestat_default((state) => state.change), navigator = (0, import_react67.useNavigate)(), init = async () => {
  };
  return (0, import_react68.useEffect)(() => {
    isOpenChange(profilecomplted != "1"), init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
    isOpen ? /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(ProfileComplete, {}) : null,
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(Intro, {}),
    isbrand ? /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(InfluencerSearch, { platform: user.platform, country: user.country, category: user.category }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(TopInfluencer, {})
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(EarnSection, {}),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(SponsoredPosts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(NewCampaign, {}),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(TopBrands, {})
    ] })
  ] });
}, home_default2 = HomePage2, ProfileComplete = () => {
  let changeState = profilecompletestat_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "flex grow flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "py-10 md:w-[400px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-md text-white font-normal", children: "Your linked social media accounts are under verification. You'll be notified within 24 hours." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "xl:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react67.Link, { to: "/home/profilecomplete", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CusButton, { text: "Click here to complete", textColor: "text-white", background: "bg-primary" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { onClick: () => {
      changeState(!1);
    }, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome28.FontAwesomeIcon, { className: "text-white text-2xl font-bold", icon: import_free_solid_svg_icons27.faXmark }),
      " "
    ] })
  ] }) });
}, Intro = () => {
  let navigator = (0, import_react67.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "grid place-items-center w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "flex gap-4 items-center mb-6 overflow-x-scroll no-scrollbar", children: [
      { image: "74.jfif", id: "74" },
      { image: "75.jfif", id: "75" },
      { image: "76.jfif", id: "76" },
      { image: "77.jfif", id: "77" },
      { image: "78.jfif", id: "78" },
      { image: "79.jfif", id: "79" },
      { image: "80.jfif", id: "80" },
      { image: "81.jfif", id: "81" },
      { image: "82.jfif", id: "82" },
      { image: "83.jfif", id: "83" },
      { image: "84.jfif", id: "84" },
      { image: "85.jfif", id: "85" },
      { image: "86.jfif", id: "86" },
      { image: "87.jfif", id: "87" },
      { image: "88.jfif", id: "88" }
    ].map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "block shrink-0 cursor-pointer", onClick: () => {
      navigator(`/home/user/${val.id}`);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("img", { src: `/images/inf/${val.image}`, alt: "error", className: "rounded-md w-40 h-40" }) }, index2)) })
  ] });
}, EarnSection = () => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12", children: [
  /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("img", { src: "/images/cashgirl.png", alt: "error", className: "md:h-80" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." })
  ] }) })
] }) }), SponsoredPosts = () => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faHeart, className: "text-md text-secondary" }),
    " Sponsored Posts "
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "1500", category: "Consumer Electronics", image: "/images/brand/adidas.jpg", name: "Adidas", currency: "USD" }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "2000", category: "Consumer Electronics", image: "/images/brand/furinicom.jpg", name: "Furinicom", currency: "USD" }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "3000", category: "Consumer Electronics", image: "/images/brand/hilton.jpg", name: "Hilton", currency: "USD" }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "2500", category: "Consumer Electronics", image: "/images/brand/lucent.jpg", name: "Lucent", currency: "USD" })
  ] })
] }) }), NewCampaign = () => {
  let [topChampaing, setTopChampaing] = (0, import_react68.useState)([]), [campaignCards, setCampaignCards] = (0, import_react68.useState)([]);
  return (0, import_react68.useEffect)(() => {
    (async () => {
      let apidata = await (0, import_axios26.default)({
        method: "post",
        url: `${BaseUrl}/api/get-top-campaigns`
      });
      setTopChampaing(apidata.data.data.campaigns);
    })();
  }, []), (0, import_react68.useEffect)(() => {
    (async () => {
      let cards = await Promise.all(topChampaing.map(async (val, index2) => {
        let platforms = [];
        for (let i = 0; i < val.platforms.length; i++)
          platforms.push(val.platforms[i].platformLogoUrl);
        let campaignType = await getCampaignType(val.campaignTypeId), image = val.brand.length == 0 || val.brand == null || val.brand == null || val.brand == "" || val.brand.logo == "0" || val.brand.logo == null || val.brand.logo == null || val.brand.logo == "" ? "/images/avatar/user.png" : val.brand.logo;
        return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CampaginCard, { id: val.id, weburl: "www.adidas.com", platforms, maxval: val.costPerPost.split(".")[0], category: campaignType, image, name: val.name, currency: val.currency.code }) }, index2);
      }));
      setCampaignCards(cards);
    })();
  }, [topChampaing]), /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faIdBadge, className: "text-md text-secondary" }),
      " New Campaign "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "grid grid-cols-1  place-items-center lgna khar:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: campaignCards })
  ] }) });
}, TopBrands = () => {
  let [topBrands, setTopBarnds] = (0, import_react68.useState)([]), init = async () => {
    let apidata = await (0, import_axios26.default)({
      method: "post",
      url: `${BaseUrl}/api/get-top-brands`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    setTopBarnds(apidata.data.data);
  };
  return (0, import_react68.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faStar, className: "text-md text-secondary" }),
      " Top brands "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: topBrands.map((val, index2) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(BrandCard, { id: val.id, email: val.email, image: val.logo, name: val.name, website: val.webUrl }) }, index2)) })
  ] }) });
}, TopInfluencer = () => {
  let [topInfluencer, setTopInfluencer] = (0, import_react68.useState)([]), init = async () => {
    let apidata = await (0, import_axios26.default)({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { role: 10 },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*"
      }
    });
    for (let i = 0; i < 5; i++)
      setTopInfluencer((prevdata) => [...prevdata, apidata.data.data[i]]);
  };
  return (0, import_react68.useEffect)(() => {
    init();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faHeart, className: "text-md text-secondary" }),
      " Top influencer "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 place-items-center ", children: topInfluencer.map((val, index2) => {
      let avatar = val.pic == "0" || val.pic == null || val.pic == null || val.pic == "" ? "/images/avatar/user.png" : val.pic;
      return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(topinfluencercard_default, { star: parseInt(val.rating), image: avatar, name: val.userName, currency: val.currency.code, dob: val.dob }) }, index2);
    }) })
  ] }) });
};

// app/routes/home/sorry.tsx
var sorry_exports = {};
__export(sorry_exports, {
  default: () => sorry_default
});
var import_jsx_runtime73 = require("react/jsx-runtime"), Sorry = () => /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_jsx_runtime73.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "bg-white rounded-lg shadow-lg p-10 mt-6 relative", children: [
  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: " text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-72", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { children: "Sorry !!" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "w-full grid place-content-center relative", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("img", { src: "/images/avatar/sorry.png", alt: "error", className: "h-[300px]" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "w-full grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("p", { className: "text-sm font-normal text-gray-500 text-left w-96", children: [
    "Thank you for expressing interest in SWRV. While we were impressed with your profile, unfortunately, your profile dosent meet the minimum criteria which we need in this platform ",
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("br", {}),
    "We sincerely appreciate your interest and hope that you\u2019ll stay in touch. Please don\u2019t hesitate to reach out if you disagree with our decision."
  ] }) })
] }) }), sorry_default = Sorry;

// app/routes/home/help.tsx
var help_exports = {};
__export(help_exports, {
  default: () => help_default
});
var import_react69 = require("@remix-run/react"), import_jsx_runtime74 = require("react/jsx-runtime"), Help = () => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_jsx_runtime74.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react69.Outlet, {}) }), help_default = Help;

// app/routes/home/help/termsandconditions.tsx
var termsandconditions_exports = {};
__export(termsandconditions_exports, {
  default: () => termsandconditions_default
});
var import_jsx_runtime75 = require("react/jsx-runtime"), TermsAndConditions = () => /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_jsx_runtime75.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-white my-4 p-4 pl-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "Terms and Conditions" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal", children: "General Site Usage" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal", children: "Last Revised: Decenber 16, 2013" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully." }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "1. YOUR AGREEMENT" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal mt-2", children: "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site." }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("p", { className: "text-md text-black font-normal mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { className: "text-lg font-bold", children: "PLEASE NOTE:" }),
      " We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "2. PRIVACY" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal mt-2", children: "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices." }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "3. LINKED SITES" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal mt-2", children: 'This Site may contain links to other independent third-party Web sites ("Linked Sites\u201D). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.' }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: " 4. FORWARD LOOKING STATEMENTS" }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-md text-black font-normal mt-2", children: "All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site." }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("p", { className: "text-lg text-black font-bold mt-4", children: "5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "h-96" })
] }) }), termsandconditions_default = TermsAndConditions;

// app/routes/home/help/forgetpassword.tsx
var forgetpassword_exports = {};
__export(forgetpassword_exports, {
  default: () => forgetpassword_default
});
var import_jsx_runtime76 = require("react/jsx-runtime"), ForgetPassword = () => /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_jsx_runtime76.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-white my-4 p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "w-full lg:w-3/5 pl-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("h3", { className: "text-md font-medium text-gray-400", children: "Help Center > Login and password > How to reset a lost or forgotten password > SWRV password recovery" }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("p", { className: "text-2xl text-black font-bold mt-4", children: "How to reset a lost or forgotten password" }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("p", { className: "text-md text-black font-normal mt-2", children: "To reset your password, you\u2019ll need access to the phone number or email associated with your SWRV account. This verification information helps ensure your account is only accessible to you. If you can\u2019t access your phone or email, you won\u2019t be able to recover your password, and may need to sign up for a new account." }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("p", { className: "text-lg text-black font-medium mt-2", children: " What you\u2019ll need to change your password on SWRV " }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("p", { className: "text-md text-black font-normal mt-2", children: " An accurate and up-to-date email address, and/or phone number ensure you never lose access to your SWRV account. There are a few ways to change your password, and keeping this information up to date simplifies resetting your account or password." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: "h-96" })
] }) }) }), forgetpassword_default = ForgetPassword;

// app/routes/home/help/index.tsx
var help_exports2 = {};
__export(help_exports2, {
  default: () => help_default2
});
var import_jsx_runtime77 = require("react/jsx-runtime"), Help2 = () => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_jsx_runtime77.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-[#10BCE2] flex my-4 p-10 md:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "text-5xl text-primary font-bold", children: [
      "Hi ",
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { className: "text-white", children: " @ivankbfc," }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("br", {}),
      " How can we help?"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "grow grid place-items-center md:p-10 my-4", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("input", { type: "text", className: "placeholder:text-black bg-white opacity-30  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "search" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "w-full rounded-xl shadow-xl bg-white flex my-4 p-10 md:flex-row flex-col md:gap-x-10 gap-y-6 md:gap-y-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-black font-bold", children: "Using SWRV" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Manage your account" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Campaigns" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Safety and security" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-gray-400 font-bold mt-2", children: "Rules and policies" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-xl text-black font-medium", children: "Everything you need to know so you can use SWRV like a pro" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex md:gap-x-16 gap-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Registration" }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Verification" }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Social Media accounts" }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Analytics" }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Brands" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Campaign" }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h2", { className: "text-cyan-500 mt-2", children: "Payments" })
        ] })
      ] })
    ] })
  ] })
] }) }), help_default2 = Help2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "fea57c9e", entry: { module: "/build/entry.client-73U6U2OJ.js", imports: ["/build/_shared/chunk-WLPYV2BQ.js", "/build/_shared/chunk-7UEYUE33.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5IVNR6F2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-P7APFFDE.js", imports: ["/build/_shared/chunk-5T3NKC4Z.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/bloginfo": { id: "routes/blogs/bloginfo", parentId: "root", path: "blogs/bloginfo", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/bloginfo-NU6PV2BZ.js", imports: ["/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-5T3NKC4Z.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-SXS5WLVV.js", imports: ["/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-5T3NKC4Z.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-BAFPH2OA.js", imports: ["/build/_shared/chunk-GNGK433C.js", "/build/_shared/chunk-5T3NKC4Z.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/createbrand": { id: "routes/createbrand", parentId: "root", path: "createbrand", index: void 0, caseSensitive: void 0, module: "/build/routes/createbrand-ELCRGNYQ.js", imports: ["/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-J32PS5QO.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/extra/sociallogin.$id": { id: "routes/extra/sociallogin.$id", parentId: "root", path: "extra/sociallogin/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/extra/sociallogin.$id-65NGL7EJ.js", imports: ["/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/extra/socialregister.$id": { id: "routes/extra/socialregister.$id", parentId: "root", path: "extra/socialregister/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/extra/socialregister.$id-7LFCZ4RC.js", imports: ["/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-JFMSUDP6.js", imports: ["/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/brand.$id": { id: "routes/home/brand.$id", parentId: "routes/home", path: "brand/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/home/brand.$id-PTDMCJLH.js", imports: ["/build/_shared/chunk-U6BK2NHP.js", "/build/_shared/chunk-6EK5NIKP.js", "/build/_shared/chunk-57PMQZPE.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/branduser": { id: "routes/home/branduser", parentId: "routes/home", path: "branduser", index: void 0, caseSensitive: void 0, module: "/build/routes/home/branduser-4A7ZJUZS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/branduser/index": { id: "routes/home/branduser/index", parentId: "routes/home/branduser", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/branduser/index-5DTLAJGH.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/branduser/influencers": { id: "routes/home/branduser/influencers", parentId: "routes/home/branduser", path: "influencers", index: void 0, caseSensitive: void 0, module: "/build/routes/home/branduser/influencers-H6MQFTUD.js", imports: ["/build/_shared/chunk-TB5XP2I2.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/branduser/payments": { id: "routes/home/branduser/payments", parentId: "routes/home/branduser", path: "payments", index: void 0, caseSensitive: void 0, module: "/build/routes/home/branduser/payments-AYX5BW7N.js", imports: ["/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/campaigns.$id": { id: "routes/home/campaigns.$id", parentId: "routes/home", path: "campaigns/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/home/campaigns.$id-LYFO5RX6.js", imports: ["/build/_shared/chunk-U6BK2NHP.js", "/build/_shared/chunk-6EK5NIKP.js", "/build/_shared/chunk-57PMQZPE.js", "/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign": { id: "routes/home/createcampaign", parentId: "routes/home", path: "createcampaign", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign-JRFQQ2L5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/index": { id: "routes/home/createcampaign/index", parentId: "routes/home/createcampaign", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/index-PPGGFWIF.js", imports: ["/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step2": { id: "routes/home/createcampaign/step2", parentId: "routes/home/createcampaign", path: "step2", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step2-POPW6AFL.js", imports: ["/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step3": { id: "routes/home/createcampaign/step3", parentId: "routes/home/createcampaign", path: "step3", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step3-KCM7NNYL.js", imports: ["/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step4": { id: "routes/home/createcampaign/step4", parentId: "routes/home/createcampaign", path: "step4", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step4-KHA4TVAJ.js", imports: ["/build/_shared/chunk-OISB2DV6.js", "/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step5": { id: "routes/home/createcampaign/step5", parentId: "routes/home/createcampaign", path: "step5", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step5-JLKVRQXW.js", imports: ["/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/createcampaign/step6": { id: "routes/home/createcampaign/step6", parentId: "routes/home/createcampaign", path: "step6", index: void 0, caseSensitive: void 0, module: "/build/routes/home/createcampaign/step6-XB4QT5UK.js", imports: ["/build/_shared/chunk-JO7WIGML.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/drafts": { id: "routes/home/drafts", parentId: "routes/home", path: "drafts", index: void 0, caseSensitive: void 0, module: "/build/routes/home/drafts-S7VVEPAY.js", imports: ["/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/empty": { id: "routes/home/empty", parentId: "routes/home", path: "empty", index: void 0, caseSensitive: void 0, module: "/build/routes/home/empty-VF3LIYZD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/favourite": { id: "routes/home/favourite", parentId: "routes/home", path: "favourite", index: void 0, caseSensitive: void 0, module: "/build/routes/home/favourite-7FGP6TSP.js", imports: ["/build/_shared/chunk-6EK5NIKP.js", "/build/_shared/chunk-6ONMTUBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/findcampaign": { id: "routes/home/findcampaign", parentId: "routes/home", path: "findcampaign", index: void 0, caseSensitive: void 0, module: "/build/routes/home/findcampaign-6VX3PJ2D.js", imports: ["/build/_shared/chunk-S5KZVIQC.js", "/build/_shared/chunk-TB5XP2I2.js", "/build/_shared/chunk-OISB2DV6.js", "/build/_shared/chunk-HETNVBB4.js", "/build/_shared/chunk-6EK5NIKP.js", "/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/help": { id: "routes/home/help", parentId: "routes/home", path: "help", index: void 0, caseSensitive: void 0, module: "/build/routes/home/help-NAMXZ7SB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/help/forgetpassword": { id: "routes/home/help/forgetpassword", parentId: "routes/home/help", path: "forgetpassword", index: void 0, caseSensitive: void 0, module: "/build/routes/home/help/forgetpassword-AK2KTIAO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/help/index": { id: "routes/home/help/index", parentId: "routes/home/help", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/help/index-APCREHTX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/help/termsandconditions": { id: "routes/home/help/termsandconditions", parentId: "routes/home/help", path: "termsandconditions", index: void 0, caseSensitive: void 0, module: "/build/routes/home/help/termsandconditions-GJN6Y6JE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/inbox": { id: "routes/home/inbox", parentId: "routes/home", path: "inbox", index: void 0, caseSensitive: void 0, module: "/build/routes/home/inbox-4UN63Y5Q.js", imports: ["/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/index": { id: "routes/home/index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/index-DF24WE7G.js", imports: ["/build/_shared/chunk-S5KZVIQC.js", "/build/_shared/chunk-TB5XP2I2.js", "/build/_shared/chunk-OISB2DV6.js", "/build/_shared/chunk-HETNVBB4.js", "/build/_shared/chunk-6EK5NIKP.js", "/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/invite": { id: "routes/home/invite", parentId: "routes/home", path: "invite", index: void 0, caseSensitive: void 0, module: "/build/routes/home/invite-OKPHVEAE.js", imports: ["/build/_shared/chunk-J32PS5QO.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/mycampaings": { id: "routes/home/mycampaings", parentId: "routes/home", path: "mycampaings", index: void 0, caseSensitive: void 0, module: "/build/routes/home/mycampaings-VPQTWIHN.js", imports: ["/build/_shared/chunk-HETNVBB4.js", "/build/_shared/chunk-57PMQZPE.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete": { id: "routes/home/profilecomplete", parentId: "routes/home", path: "profilecomplete", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete-HLYJWTSK.js", imports: ["/build/_shared/chunk-SABFZQUQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/fifthpage": { id: "routes/home/profilecomplete/fifthpage", parentId: "routes/home/profilecomplete", path: "fifthpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/fifthpage-EMQLJ3P4.js", imports: ["/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-J32PS5QO.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/forthpage": { id: "routes/home/profilecomplete/forthpage", parentId: "routes/home/profilecomplete", path: "forthpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/forthpage-U63WWLOX.js", imports: ["/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/index": { id: "routes/home/profilecomplete/index", parentId: "routes/home/profilecomplete", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/index-DV5RLPOR.js", imports: ["/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-RPPBX5QT.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/secondpage": { id: "routes/home/profilecomplete/secondpage", parentId: "routes/home/profilecomplete", path: "secondpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/secondpage-P3735KB2.js", imports: ["/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/thirdpage": { id: "routes/home/profilecomplete/thirdpage", parentId: "routes/home/profilecomplete", path: "thirdpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/thirdpage-4XM5QPFR.js", imports: ["/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/sorry": { id: "routes/home/sorry", parentId: "routes/home", path: "sorry", index: void 0, caseSensitive: void 0, module: "/build/routes/home/sorry-CQLETUE3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/user.$id": { id: "routes/home/user.$id", parentId: "routes/home", path: "user/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/home/user.$id-XZTKQF4G.js", imports: ["/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-RG6TLIEA.js", imports: ["/build/_shared/chunk-GNGK433C.js", "/build/_shared/chunk-4SXM5CTR.js", "/build/_shared/chunk-5T3NKC4Z.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-T2BUEB2R.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-KNB2J352.js", imports: ["/build/_shared/chunk-NIGJXJWR.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-J32PS5QO.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-ZJH6AFNS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-5QWJTNKV.js", imports: ["/build/_shared/chunk-NIGJXJWR.js", "/build/_shared/chunk-T5W2R3IP.js", "/build/_shared/chunk-PVF54MGG.js", "/build/_shared/chunk-6ONMTUBQ.js", "/build/_shared/chunk-MNPIC26H.js", "/build/_shared/chunk-DJ3N2H5H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/updateuser": { id: "routes/updateuser", parentId: "root", path: "updateuser", index: void 0, caseSensitive: void 0, module: "/build/routes/updateuser-M2BVRO2F.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-FEA57C9E.js" };

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
  "routes/extra/socialregister.$id": {
    id: "routes/extra/socialregister.$id",
    parentId: "root",
    path: "extra/socialregister/:id",
    index: void 0,
    caseSensitive: void 0,
    module: socialregister_id_exports
  },
  "routes/extra/sociallogin.$id": {
    id: "routes/extra/sociallogin.$id",
    parentId: "root",
    path: "extra/sociallogin/:id",
    index: void 0,
    caseSensitive: void 0,
    module: sociallogin_id_exports
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
  "routes/createbrand": {
    id: "routes/createbrand",
    parentId: "root",
    path: "createbrand",
    index: void 0,
    caseSensitive: void 0,
    module: createbrand_exports
  },
  "routes/updateuser": {
    id: "routes/updateuser",
    parentId: "root",
    path: "updateuser",
    index: void 0,
    caseSensitive: void 0,
    module: updateuser_exports
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
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
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
  "routes/home/profilecomplete/fifthpage": {
    id: "routes/home/profilecomplete/fifthpage",
    parentId: "routes/home/profilecomplete",
    path: "fifthpage",
    index: void 0,
    caseSensitive: void 0,
    module: fifthpage_exports
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
  "routes/home/createcampaign/step4": {
    id: "routes/home/createcampaign/step4",
    parentId: "routes/home/createcampaign",
    path: "step4",
    index: void 0,
    caseSensitive: void 0,
    module: step4_exports
  },
  "routes/home/createcampaign/step5": {
    id: "routes/home/createcampaign/step5",
    parentId: "routes/home/createcampaign",
    path: "step5",
    index: void 0,
    caseSensitive: void 0,
    module: step5_exports
  },
  "routes/home/createcampaign/step6": {
    id: "routes/home/createcampaign/step6",
    parentId: "routes/home/createcampaign",
    path: "step6",
    index: void 0,
    caseSensitive: void 0,
    module: step6_exports
  },
  "routes/home/campaigns.$id": {
    id: "routes/home/campaigns.$id",
    parentId: "routes/home",
    path: "campaigns/:id",
    index: void 0,
    caseSensitive: void 0,
    module: campaigns_id_exports
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
  "routes/home/brand.$id": {
    id: "routes/home/brand.$id",
    parentId: "routes/home",
    path: "brand/:id",
    index: void 0,
    caseSensitive: void 0,
    module: brand_id_exports
  },
  "routes/home/branduser": {
    id: "routes/home/branduser",
    parentId: "routes/home",
    path: "branduser",
    index: void 0,
    caseSensitive: void 0,
    module: branduser_exports
  },
  "routes/home/branduser/influencers": {
    id: "routes/home/branduser/influencers",
    parentId: "routes/home/branduser",
    path: "influencers",
    index: void 0,
    caseSensitive: void 0,
    module: influencers_exports
  },
  "routes/home/branduser/payments": {
    id: "routes/home/branduser/payments",
    parentId: "routes/home/branduser",
    path: "payments",
    index: void 0,
    caseSensitive: void 0,
    module: payments_exports
  },
  "routes/home/branduser/index": {
    id: "routes/home/branduser/index",
    parentId: "routes/home/branduser",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: branduser_exports2
  },
  "routes/home/favourite": {
    id: "routes/home/favourite",
    parentId: "routes/home",
    path: "favourite",
    index: void 0,
    caseSensitive: void 0,
    module: favourite_exports
  },
  "routes/home/user.$id": {
    id: "routes/home/user.$id",
    parentId: "routes/home",
    path: "user/:id",
    index: void 0,
    caseSensitive: void 0,
    module: user_id_exports
  },
  "routes/home/drafts": {
    id: "routes/home/drafts",
    parentId: "routes/home",
    path: "drafts",
    index: void 0,
    caseSensitive: void 0,
    module: drafts_exports
  },
  "routes/home/invite": {
    id: "routes/home/invite",
    parentId: "routes/home",
    path: "invite",
    index: void 0,
    caseSensitive: void 0,
    module: invite_exports
  },
  "routes/home/empty": {
    id: "routes/home/empty",
    parentId: "routes/home",
    path: "empty",
    index: void 0,
    caseSensitive: void 0,
    module: empty_exports
  },
  "routes/home/inbox": {
    id: "routes/home/inbox",
    parentId: "routes/home",
    path: "inbox",
    index: void 0,
    caseSensitive: void 0,
    module: inbox_exports
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
  },
  "routes/home/help/termsandconditions": {
    id: "routes/home/help/termsandconditions",
    parentId: "routes/home/help",
    path: "termsandconditions",
    index: void 0,
    caseSensitive: void 0,
    module: termsandconditions_exports
  },
  "routes/home/help/forgetpassword": {
    id: "routes/home/help/forgetpassword",
    parentId: "routes/home/help",
    path: "forgetpassword",
    index: void 0,
    caseSensitive: void 0,
    module: forgetpassword_exports
  },
  "routes/home/help/index": {
    id: "routes/home/help/index",
    parentId: "routes/home/help",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: help_exports2
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
